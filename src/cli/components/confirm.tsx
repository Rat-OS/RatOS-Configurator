import { Container } from '@/cli/components/container';
import { ConfirmInput } from '@inkjs/ui';
import { Box, render, Text } from 'ink';
import React from 'react';
export const Confirm: React.FC<{
	message: string;
	default?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}> = ({ message, default: defaultConfirmation, onConfirm, onCancel }) => {
	return (
		<Container>
			<Box gap={1}>
				<Text bold>{message}</Text>
				<ConfirmInput
					onConfirm={onConfirm}
					onCancel={onCancel}
					defaultChoice={defaultConfirmation === false ? 'cancel' : 'confirm'}
				/>
			</Box>
		</Container>
	);
};

export const confirm = async (message: string, defaultConfirmation?: boolean) => {
	return new Promise<boolean>((resolve) => {
		render(
			<Confirm
				message={message}
				default={defaultConfirmation}
				onConfirm={() => {
					resolve(true);
				}}
				onCancel={() => {
					resolve(false);
				}}
			/>,
		);
	});
};
