import { KlipperAccelSensorName } from '@/zods/hardware';
import { DoWork, fromWorker, runWorker } from 'observable-webworker';
import { EMPTY, Observable, Subject, firstValueFrom, from, merge, of, throwError } from 'rxjs';
import { filter, map, mergeAll, mergeMap, share } from 'rxjs/operators';
import { createSignalBuffers, type AccelSampleMs } from '@/app/analysis/_worker/processing';
import { createADXL345Stream } from '@/app/analysis/_worker/adxl345-stream';
import type { PSDResult, PSDWorkerInput, PSDWorkerOutput } from '@/app/analysis/_worker/psd';

export enum WorkCommand {
	START = 'START',
	STOP = 'STOP',
	START_ACCUMULATION = 'START_ACCUMULATION',
	STOP_ACCUMULATION = 'STOP_ACCUMULATION',
}

export enum WorkResult {
	STARTED = 'STARTED',
	STOPPED = 'STOPPED',
	ACCUMULATING = 'ACCUMULATING',
	ACCUMULATED = 'ACCUMULATED',
	SIGNAL = 'SIGNAL',
	PSD = 'PSD',
	RX_RATE = 'RX_RATE',
	SAMPLE_RATE = 'SAMPLE_RATE',
	SPEC_SAMPLE_RATE = 'SPEC_SAMPLE_RATE',
}

export type WorkerInput =
	| {
			type: WorkCommand.STOP;
	  }
	| {
			type: WorkCommand.START;
			payload: {
				url: string;
				sensor: KlipperAccelSensorName;
			};
	  }
	| {
			type: WorkCommand.START_ACCUMULATION;
	  }
	| {
			type: WorkCommand.STOP_ACCUMULATION;
	  };

export type WorkerSignalOutput = {
	type: WorkResult.SIGNAL;
	/**
	 * The buffer of a Float64Array containing the timestamp in milliseconds and the x, y, z values.
	 */
	payload: ArrayBuffer;
};

export type WorkerPSDOutput = {
	type: WorkResult.PSD;
	/**
	 * The power spectral density.
	 */
	payload: Omit<PSDResult, 'source'>;
};

export type WorkerAccumulationResultOuput = {
	type: WorkResult.ACCUMULATED;
	/**
	 * The power spectral density.
	 */
	payload: PSDResult;
};

export type WorkerAccumulationStarted = {
	type: WorkResult.ACCUMULATING;
};

export type WorkerOutput =
	| {
			type: WorkResult.STARTED;
			/**
			 * The first timestamp recieved from the socket (seconds).
			 */
			payload: number;
	  }
	| {
			type: WorkResult.STOPPED;
	  }
	| WorkerSignalOutput
	| {
			type: WorkResult.SAMPLE_RATE;
			/**
			 * The sample rate in Hz.
			 */
			payload: number;
	  }
	| {
			type: WorkResult.SPEC_SAMPLE_RATE;
			/**
			 * Normalized spec sheet sample rate in Hz.
			 */
			payload: number;
	  }
	| WorkerPSDOutput
	| WorkerAccumulationStarted
	| WorkerAccumulationResultOuput;

const mapToWorkerOutput = <T>(mapFn: (input: T) => WorkerOutput) => map(mapFn);

const psdInput$ = new Subject<PSDWorkerInput>();

const psdWorker = fromWorker<PSDWorkerInput, PSDWorkerOutput>(
	() => new Worker(new URL('@/app/analysis/_worker/psd', import.meta.url)),
	psdInput$,
).pipe(share());

const psdOutput$ = psdWorker.pipe(
	filter((output): output is { type: 'psd'; psd: PSDResult } => output.type === 'psd'),
	mapToWorkerOutput((output) => {
		// console.log('mapping psd result');
		return {
			type: WorkResult.PSD,
			payload: output.psd,
		};
	}),
	share(),
);
export class AccelSensorWorker implements DoWork<WorkerInput, WorkerOutput> {
	private stream: ReturnType<typeof createADXL345Stream> | null = null;
	private signalProcessor: Awaited<ReturnType<typeof createSignalBuffers>> | null = null;
	private psdSubscribed = false;
	public work(input$: Observable<WorkerInput>) {
		return input$.pipe(
			mergeMap((input): Observable<WorkerOutput> => {
				console.log('got input', input);
				switch (input.type) {
					case WorkCommand.START: {
						if (this.stream != null) {
							throw Error(`Stream already started`);
						}
						console.log('starting stream!');
						this.stream = createADXL345Stream(input.payload.url, input.payload.sensor);
						const setup = async (): Promise<Observable<WorkerOutput>> => {
							if (this.stream == null) {
								throw Error(`Stream not initialized`);
							}
							this.signalProcessor = await createSignalBuffers(this.stream.dataStream$);
							this.signalProcessor.signal$.subscribe((s) =>
								psdInput$.next({ command: 'sampleInput', payload: [s[0].toNumber(), s[1], s[2], s[3]] }),
							);
							this.signalProcessor.specSampleRate$.subscribe((s) =>
								psdInput$.next({ command: 'specSampleRateInput', payload: s }),
							);
							const res = from([
								of({
									type: WorkResult.STARTED,
									payload: this.signalProcessor.timeStamp,
								} as WorkerOutput),
								this.signalProcessor.timeMappedSignal$.pipe(
									mapToWorkerOutput((data) => {
										const sample = new Float64Array([data[0].toNumber(), ...data.slice(1)] as AccelSampleMs);
										return {
											type: WorkResult.SIGNAL,
											payload: sample.buffer,
										};
									}),
								),
								this.signalProcessor.sampleRate$.pipe(
									mapToWorkerOutput((sampleRate) => ({
										type: WorkResult.SAMPLE_RATE,
										payload: sampleRate,
									})),
								),
								this.signalProcessor.specSampleRate$.pipe(
									mapToWorkerOutput((specSampleRate) => ({
										type: WorkResult.SPEC_SAMPLE_RATE,
										payload: specSampleRate,
									})),
								),
								this.psdSubscribed ? EMPTY : psdOutput$,
							]).pipe(mergeAll());
							if (!this.psdSubscribed) {
								this.psdSubscribed = true;
							}
							return res;
						};
						return from(setup()).pipe(mergeAll());
					}
					case WorkCommand.STOP: {
						console.log('stopping stream!');
						if (this.stream != null) {
							this.stream.close();
							this.stream = null;
						}
						return of({
							type: WorkResult.STOPPED,
						} as WorkerOutput);
					}
					case WorkCommand.START_ACCUMULATION: {
						if (this.signalProcessor == null) {
							throw Error(`Stream not initialized`);
						}
						if (psdWorker == null) {
							throw Error(`PSD worker not initialized`);
						}
						console.log('starting accumulation');
						psdInput$.next({ command: 'accumulate', payload: true });
						return from([
							of({
								type: WorkResult.ACCUMULATING,
							} as WorkerOutput),
							from(
								firstValueFrom(
									psdWorker.pipe(
										filter(
											(output): output is { type: 'accumulation_finished'; psd: PSDResult } =>
												output.type === 'accumulation_finished',
										),
									),
								),
							).pipe(
								mapToWorkerOutput((result) => {
									console.log('Accumulation result recieved', result.psd);
									return {
										type: WorkResult.ACCUMULATED,
										payload: result.psd,
									};
								}),
							),
						]).pipe(mergeAll());
					}
					case WorkCommand.STOP_ACCUMULATION: {
						if (psdWorker == null) {
							throw Error(`Stream not initialized`);
						}
						if (psdWorker == null) {
							throw Error(`PSD process not initialized`);
						}
						console.log('stopping accumulation');
						psdInput$.next({ command: 'accumulate', payload: false });
						return EMPTY;
					}
					default: {
						this.stream?.close();
						this.stream = null;
						console.log('closing', input);
						throw new Error(`Invalid command`);
					}
				}
			}),
		);
	}
	public selectTransferables(output: WorkerOutput): Transferable[] {
		switch (output.type) {
			case WorkResult.SIGNAL: {
				return [output.payload];
			}
			case WorkResult.PSD: {
				return [
					output.payload.x.estimates.buffer,
					output.payload.x.frequencies.buffer,
					output.payload.y.estimates.buffer,
					output.payload.y.frequencies.buffer,
					output.payload.z.estimates.buffer,
					output.payload.z.frequencies.buffer,
					output.payload.total.estimates.buffer,
					output.payload.total.frequencies.buffer,
				];
			}
			case WorkResult.ACCUMULATED: {
				console.log('accumulated done');
				return [
					output.payload.x.estimates.buffer,
					output.payload.x.frequencies.buffer,
					output.payload.y.estimates.buffer,
					output.payload.y.frequencies.buffer,
					output.payload.z.estimates.buffer,
					output.payload.z.frequencies.buffer,
					output.payload.total.estimates.buffer,
					output.payload.total.frequencies.buffer,
				];
			}
			default: {
				return [];
			}
		}
	}
}

runWorker(AccelSensorWorker);