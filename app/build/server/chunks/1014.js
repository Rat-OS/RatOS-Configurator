"use strict";exports.id=1014,exports.ids=[1014],exports.modules={61014:(e,t,r)=>{r.d(t,{vy:()=>c});var a=r(95160),s=r(31497),n=r(88509),o=r(41866);let JobCancelledError=class JobCancelledError extends Error{constructor(){super("Job cancelled")}};let l=new Map,i=0,c={DEFAULT_DAMPING_RATIO:.1,SHAPER_VIBRATION_REDUCTION:20,TEST_DAMPING_RATIOS:[.075,.1,.15],MAX_SHAPER_FREQ:150,WINDOW_T_SEC:.5,MIN_FREQ:5,MAX_FREQ:200,TARGET_SMOOTHING:.12},cancelJob=e=>{let t=l.get(e);t&&!1===t.signal.aborted&&t.abort(),l.delete(e)},throwIfCancelled=e=>{if(e.aborted)throw new JobCancelledError};async function getShaperSmoothing(e,t=5e3,r=5){let a=.5*t,[s,n]=e,l=1/(0,o.P0)(s),i=n.length,c=(0,o.P0)(s.map((e,t)=>e*n[t]))*l,d=0,m=0;for(let e=0;e<i;e++)n[e]>=c&&(d+=s[e]*(r+a*(n[e]-c))*(n[e]-c)),m+=s[e]*a*(n[e]-c)**2;return Math.max(d*=l*Math.sqrt(2),m*=l)}async function bisect(e){let t=1,r=1;if(!await e(1e-9))return 0;for(;!await e(t);)r=t,t*=.5;if(r===t)for(;await e(r);)r*=2;for(;r-t>1e-8;){let a=(t+r)*.5;await e(a)?t=a:r=a}return t}async function findShaperMaxAccel(e,t){let r=await bisect(async r=>await getShaperSmoothing(e,r,t)<=c.TARGET_SMOOTHING);return r}async function estimateRemainingVibrations(e,t,r,s){let n=(0,a.tidy)(()=>{let s=(0,a.tensor1d)(e[0]),n=(0,a.tensor1d)(e[1]),o=(0,a.div)(1,(0,a.sum)(s)),l=(0,a.mul)((0,a.mul)(r,2),Math.PI),i=(0,a.mul)(l,t),c=(0,a.mul)(l,Math.sqrt(1-t**2)),d=(0,a.mul)(s,(0,a.exp)((0,a.outerProduct)((0,a.mul)(i,-1),(0,a.sub)((0,a.slice)(n,n.size-1,1),n)))),m=(0,a.mul)(d,(0,a.sin)((0,a.outerProduct)(c,n))),u=(0,a.mul)(d,(0,a.cos)((0,a.outerProduct)(c,n)));return(0,a.mul)((0,a.sqrt)((0,a.sum)((0,a.stack)([(0,a.pow)((0,a.sum)(m,1),2),(0,a.pow)((0,a.sum)(u,1),2)]),0)),o)}),o=await (0,a.tidy)(()=>{let e=(0,a.div)((0,a.max)(s),c.SHAPER_VIBRATION_REDUCTION),t=(0,a.sum)((0,a.max)((0,a.sub)((0,a.mul)(n,s),e),0)),r=(0,a.sum)((0,a.max)((0,a.sub)(s,e),0));return(0,a.div)(t,r)}).array();return[o,n]}let range=(e,t,r)=>Array.from({length:(t-e)/r+1},(t,a)=>e+a*r);async function fitShaper(e,t,r,s,n,l=[null,null,null],i,d,m,u,f){i=i||c.DEFAULT_DAMPING_RATIO,m=m||c.TEST_DAMPING_RATIOS;let p=l[1]??c.MAX_SHAPER_FREQ,h=Math.min(l[0]??r.minFreq,p-1e-7),w=l[2]??.2;throwIfCancelled(t),u=Math.max(u||c.MAX_FREQ,p);let g=(0,a.slice1d)(s.frequencies,0,s.frequencies.length),b=(0,a.slice1d)(g,0,s.frequencies.findIndex(e=>e>u)),I=(0,a.slice1d)(s.estimates,0,g.size);g.dispose();let M=(0,a.zeros)([I.size]),y=(await Promise.all(range(h,p,10).map(async e=>{if(r.minFreq>e)return null;let s=r.initFunc(e,i),n=0,o=M.clone();for(let e of m){let[r,l]=await estimateRemainingVibrations(s,e,b,I);throwIfCancelled(t);let i=o;o=(0,a.tidy)(()=>(0,a.max)((0,a.stack)([i,l]),0)),i.dispose(),r>n&&(n=r)}return n<.15?e:null}))).filter(Boolean);throwIfCancelled(t);let A=range(Math.min(...y),Math.max(...y),w),S=new Map,reportProgress=(t,a)=>{S.set(t,a);let s=(0,o.P0)(Array.from(S.values()))/A.length;postMessage({type:"fitShaperProgress",model:r.name,progress:s,jobId:e}),f?.(r.name,s)},P=(await Promise.all(A.reverse().map(async(e,s)=>{reportProgress(e,0),throwIfCancelled(t);let o=0,l=M.clone(),c=r.initFunc(e,i),u=await getShaperSmoothing(c,void 0,n);if(throwIfCancelled(t),d&&u>d)return null;for(let e of(reportProgress(s,1/3),m)){let[r,s]=await estimateRemainingVibrations(c,e,b,I);throwIfCancelled(t);let n=l;l=(0,a.tidy)(()=>(0,a.max)((0,a.stack)([n,s]),0)),n.dispose(),r>o&&(o=r)}reportProgress(s,2/3);let f=await findShaperMaxAccel(c,n);throwIfCancelled(t);let p=u*(Math.pow(o,1.5)+.2*o+.01),h=await l.array(),w=await (0,a.mul)(I,l).array();reportProgress(s,1);let g={name:r.name,freq:e,vals:h,psd:w,vibrs:o,smoothing:u,score:p,color:r.color,maxAccel:f};return g}))).reduce((e,t)=>(null===t||(null==e||t.vibrs<1.1*e.vibrs&&t.score<e.score)&&(e=t),e),null);return b.dispose(),I.dispose(),M.dispose(),throwIfCancelled(t),postMessage({type:"fitShaper",result:P,jobId:e}),P}async function findBestShaper(e,t,r,s,l=n.$l,i,c,d,m,u){await (0,a.setBackend)("wasm"),throwIfCancelled(t);let f=[],p=new Map;l.forEach(e=>p.set(e.name,0)),postMessage({type:"findBestShaperProgress",progress:0,jobId:e});let reportProgress=(t,r)=>{p.set(t,r);let a=(0,o.P0)(Array.from(p.values()))/l.length;postMessage({type:"findBestShaperProgress",progress:a,jobId:e})};for(let a of l){let n=await fitShaper(e,t,a,r,s,i,c,d,m,u,reportProgress);n&&f.push(n)}throwIfCancelled(t);let h=f.reduce((e,t)=>((!e||t&&1.2*t.score<e.score||1.05*t.score<e.score&&1.1*t.smoothing<e.smoothing)&&(e=t),e));return{result:h,shapers:f}}(0,s._1)({"tfjs-backend-wasm.wasm":"/configure/tfjs-backend-wasm.wasm","tfjs-backend-wasm-simd.wasm":"/configure/tfjs-backend-wasm-simd.wasm","tfjs-backend-wasm-threaded-simd.wasm":"/configure/tfjs-backend-wasm-threaded-simd.wasm"}),onmessage=async e=>{let t=e.data.type;switch(t){case"findBestShaper":let{calibrationData:r,scv:a,shaperFreqs:s,dampingRatio:o,maxSmoothing:c,testDampingRatios:d,maxFreq:m,id:u}=e.data,f=u??i++,p=new AbortController;try{l.set(f,p);let e=await findBestShaper(f,p.signal,r,a,n.$l,s,o,c,d,m);postMessage({type:"findBestShaper",jobId:f,...e})}catch(e){e instanceof JobCancelledError&&(cancelJob(f),postMessage({type:"jobCancelled",id:f}))}break;case"cancelJob":cancelJob(e.data.id)}}}};