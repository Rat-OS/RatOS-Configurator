(()=>{"use strict";var e={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{e.exports=require("assert")},50852:e=>{e.exports=require("async_hooks")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},98188:e=>{e.exports=require("module")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},71576:e=>{e.exports=require("string_decoder")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},26144:e=>{e.exports=require("vm")},71267:e=>{e.exports=require("worker_threads")},59796:e=>{e.exports=require("zlib")},92464:(e,r,t)=>{var s=t(12530),a=t(40401),i=t(50509),u=t(24906),n=t(74934),o=t(90345),c=t(1458),l=t(84518),_=t(83600),p=t(68653),h=t(6704),b=t(95754),f=t(75427),m=t(63969),w=t(22212),d=t(34353),g=t(33183),q=t(58966),x=t(328),y=t(60562),v=t(10265);let detrendSignal=e=>(0,y.tidy)(()=>(0,y.sub)(e,(0,y.mean)(e,0,!0))),S=.5,getFFTSize=(e,r=S)=>1<<Math.floor(e*r-1).toString(2).length;async function powerSpectralDensity(e,r,t){let{fftSize:s,_scaling:a}=Object.assign({fftSize:getFFTSize(r,S),_scaling:"psd"},t);if("psd"!=a&&"none"!=a)throw Error("Unknown scaling");let i="none"===a?1:2,u=y.signal.hannWindow(s),n=await (0,y.tidy)(()=>(0,y.div)((0,y.div)(1,(0,y.sum)((0,y.pow)(u,2))),r)).array(),o=t?.isDetrended?e:detrendSignal(e),c=y.signal.stft(o,s,Math.floor(s/2),s,y.signal.hannWindow),l=await c.array();c.dispose(),o.dispose(),u.dispose();let _=l.map(e=>{let t=[],u=[],o=0,c=0,l=r/s;for(var _=0;_<e.length-1;_+=2){let r=(0===_?0:_/2)*l;if(r>200)continue;let s=(_+2)/2*l,p=e[_]**2+e[_+1]**2;p*=n,"psd"==a&&_>0&&s<200&&(p*=i),p>o&&(o=p),p<c&&(c=p),t.push(p),u.push(r)}return{estimates:t,frequencies:u,powerRange:new v.NumberRange(c,o)}}),p=welch(_);return p}let WelchError=class WelchError extends Error{constructor(e){super(e),this.name="WelchError"}};let welch=async e=>{if(0==e.length)throw new WelchError("Unable to calculate any PSD estimates");let r=e[0].estimates.length,t=new Float64Array(r).fill(0);for(let s=0;s<e.length;s++)for(let a=0;a<r;a++)t[a]+=e[s].estimates[a];let s=0,a=0;for(let i=0;i<r;i++)t[i]=t[i]/e.length,t[i]>s&&(s=t[i]),t[i]<a&&(a=t[i]);return{estimates:t,frequencies:Float64Array.from(e[0].frequencies),powerRange:new v.NumberRange(a,s)}},sumPSDs=e=>{let r=e[0].estimates.length,t=new Float64Array(r).fill(0);for(let s=0;s<e.length;s++)for(let a=0;a<r;a++)t[a]+=e[s].estimates[a];let{minPower:s,maxPower:a}=e.reduce((e,r)=>(r.powerRange.min<e.minPower&&(e.minPower=r.powerRange.min),r.powerRange.max>e.maxPower&&(e.maxPower=r.powerRange.max),e),{minPower:0,maxPower:0});return{estimates:t,frequencies:Float64Array.from(e[0].frequencies),powerRange:new v.NumberRange(s,a)}};var k=t(41060),P=t(253),O=t(72201);let bufferFifo=e=>(0,O.z)((0,n.R)((r,t)=>{let s=[...r,t].slice(-e);return s},[]),(0,o.h)(r=>r.length>=e));t(27789);var j=t(68445);function getBaseUrl(){return process.env.RENDER_INTERNAL_HOSTNAME?`http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}/configure`:`http://127.0.0.1:${process.env.PORT??3e3}/configure`}(0,t(9122).t)({config:()=>({links:[(0,j.N8)({url:`${getBaseUrl()}/api/trpc`,maxURLLength:2083})]}),overrides:{useMutation:{async onSuccess(e){await e.originalFn(),await e.queryClient.invalidateQueries()}}},ssr:!1}),(0,j.K5)({links:[(0,j.N8)({url:`${getBaseUrl()}/api/trpc`,maxURLLength:2083})]});var R=t(13728);let z=R.z.enum(["trace","debug","info","warn","error","fatal"]);R.z.object({ts:R.z.number(),messages:R.z.array(R.z.any()),bindings:R.z.array(R.z.record(R.z.string(),R.z.any())),level:R.z.object({label:z,value:R.z.number()})});let runPSD=async(e,r=!1)=>{let t=new k.Z(e.length).div(new k.Z(e[e.length-1][0]).minus(e[0][0]).shiftedBy(-3)).decimalPlaces(0,k.Z.ROUND_FLOOR).toNumber(),s=(0,y.tidy)(()=>{let r=(0,y.tensor2d)(e.map(e=>[e[1],e[2],e[3]])),[t,s,a]=(0,y.split)(r,3,1),i=(0,y.reshape)(t,[t.shape[0]]),u=(0,y.reshape)(s,[s.shape[0]]),n=(0,y.reshape)(a,[a.shape[0]]);return{x:i,y:u,z:n}});try{let[e,r,a]=await Promise.all([powerSpectralDensity(s.x,t,{isDetrended:!0}),powerSpectralDensity(s.y,t,{isDetrended:!0}),powerSpectralDensity(s.z,t,{isDetrended:!0})]);return Object.values(s).forEach(e=>e.dispose()),{x:e,y:r,z:a,total:sumPSDs([e,r,a])}}catch(e){if(e instanceof WelchError)return null;throw e}},createPSDProcessor=async(e,r,t)=>{let g=new s.x,q=g.asObservable().pipe((0,a.d)({bufferSize:1,refCount:!1}));q.subscribe();let x=!0;return t.pipe((0,i.x)(),(0,u.w)((t,s)=>{if(s)return e.pipe((0,n.R)((e,r)=>(e.push(r),e),[]),(0,o.h)(e=>e.length>3200),(0,c.U)(e=>({samples:e,onAccumulationComplete:s})));if(!s&&t.onAccumulationComplete){let e=t.onAccumulationComplete;runPSD(t.samples,!0).then(r=>{e(r)})}return r.pipe((0,l.w)(r=>e.pipe(bufferFifo(r))),(0,c.U)(e=>({samples:e,onAccumulationComplete:!1})))},{samples:[],onAccumulationComplete:!1}),(0,_.P)(()=>q,{leading:x,trailing:!0}),(0,p.b)(({samples:e,onAccumulationComplete:r})=>(x&&(x=!1),(0,h.x)((0,b.D)(runPSD(e).then(e=>null==e?(g.next({}),f.E):(g.next({}),(0,m.of)(e)))),w.z).pipe((0,d.J)()))))};(0,P.YX)(class{constructor(){this.isAccumulating=!1,this.processor=null,this.signalPassThroughSubject=new s.x,this.signalPassThrough$=this.signalPassThroughSubject.asObservable(),this.sampleRatePassThroughSubject=new s.x,this.sampleRatePassThrough$=this.sampleRatePassThroughSubject.asObservable().pipe((0,a.d)({bufferSize:1,refCount:!1})),this.accumulationSubject=new s.x,this.accumulation$=this.accumulationSubject.asObservable().pipe((0,a.d)({bufferSize:1,refCount:!1})),this.signalPassThroughSubject=new s.x,this.signalPassThrough$=this.signalPassThroughSubject.asObservable(),this.sampleRatePassThroughSubject=new s.x,this.sampleRatePassThrough$=this.sampleRatePassThroughSubject.asObservable().pipe((0,a.d)({bufferSize:1,refCount:!1})),this.sampleRatePassThrough$.subscribe(),this.accumulationSubject=new s.x,this.accumulation$=this.accumulationSubject.asObservable().pipe((0,a.d)({bufferSize:1,refCount:!1}))}work(e){return e.pipe((0,g.z)(e=>{switch(e.command){case"accumulate":if(!this.isAccumulating&&!0===e.payload)return this.isAccumulating=!0,(0,q.T)((0,m.of)({type:"accumulation_started"}),(0,h.x)((0,b.D)(new Promise((e,r)=>{this.accumulationSubject.next(r=>{if(null==r){e(f.E);return}e((0,m.of)(r))})})).pipe((0,d.J)(),(0,c.U)(e=>({type:"accumulation_finished",psd:e}))),w.z));return this.isAccumulating=!1,this.accumulationSubject.next(!1),f.E;case"sampleInput":if(this.signalPassThroughSubject.next(e.payload),null==this.processor){this.processor=createPSDProcessor(this.signalPassThrough$,this.sampleRatePassThrough$,this.accumulation$);let e=(0,b.D)(this.processor).pipe((0,g.z)(e=>{let r=e.pipe((0,c.U)(e=>({type:"psd",psd:e})),(0,a.d)({bufferSize:1,refCount:!1}));return r}));return(0,x.z)((0,b.D)(this.processor)).then(()=>{setTimeout(()=>{this.accumulationSubject.next(!1)},1e3)}),e}return f.E;case"specSampleRateInput":return this.isAccumulating||this.accumulationSubject.next(!1),this.sampleRatePassThroughSubject.next(e.payload),f.E;default:return f.E}}))}selectTransferables(e){switch(e.type){case"psd":case"accumulation_finished":return[e.psd.x.estimates.buffer,e.psd.x.frequencies.buffer,e.psd.y.estimates.buffer,e.psd.y.frequencies.buffer,e.psd.z.estimates.buffer,e.psd.z.frequencies.buffer,e.psd.total.estimates.buffer,e.psd.total.frequencies.buffer];default:return[]}}})}},r={};function __webpack_require__(t){var s=r[t];if(void 0!==s)return s.exports;var a=r[t]={exports:{}},i=!0;try{e[t].call(a.exports,a,a.exports,__webpack_require__),i=!1}finally{i&&delete r[t]}return a.exports}__webpack_require__.m=e,__webpack_require__.x=()=>{var e=__webpack_require__.O(void 0,[4430,2689,5005,4262,8105,4833],()=>__webpack_require__(92464));return __webpack_require__.O(e)},(()=>{var e=[];__webpack_require__.O=(r,t,s,a)=>{if(t){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[t,s,a];return}for(var u=1/0,i=0;i<e.length;i++){for(var[t,s,a]=e[i],n=!0,o=0;o<t.length;o++)u>=a&&Object.keys(__webpack_require__.O).every(e=>__webpack_require__.O[e](t[o]))?t.splice(o--,1):(n=!1,a<u&&(u=a));if(n){e.splice(i--,1);var c=s();void 0!==c&&(r=c)}}return r}})(),(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;__webpack_require__.t=function(t,s){if(1&s&&(t=this(t)),8&s||"object"==typeof t&&t&&(4&s&&t.__esModule||16&s&&"function"==typeof t.then))return t;var a=Object.create(null);__webpack_require__.r(a);var i={};e=e||[null,r({}),r([]),r(r)];for(var u=2&s&&t;"object"==typeof u&&!~e.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach(e=>i[e]=()=>t[e]);return i.default=()=>t,__webpack_require__.d(a,i),a}})(),__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce((r,t)=>(__webpack_require__.f[t](e,r),r),[])),__webpack_require__.u=e=>""+e+".js",__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={9352:1};__webpack_require__.O.require=r=>e[r];var installChunk=r=>{var t=r.modules,s=r.ids,a=r.runtime;for(var i in t)__webpack_require__.o(t,i)&&(__webpack_require__.m[i]=t[i]);a&&a(__webpack_require__);for(var u=0;u<s.length;u++)e[s[u]]=1;__webpack_require__.O()};__webpack_require__.f.require=(r,t)=>{e[r]||installChunk(require("./"+__webpack_require__.u(r)))}})(),(()=>{var e=__webpack_require__.x;__webpack_require__.x=()=>(__webpack_require__.e(4430),__webpack_require__.e(2689),__webpack_require__.e(5005),__webpack_require__.e(4262),__webpack_require__.e(8105),__webpack_require__.e(4833),e())})();var t=__webpack_require__.x();module.exports=t})();