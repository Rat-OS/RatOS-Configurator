(()=>{var e={};e.id=8411,e.ids=[8411],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},38316:e=>{"use strict";e.exports=require("zod")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},73292:e=>{"use strict";e.exports=require("fs/promises")},98188:e=>{"use strict";e.exports=require("module")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},14521:e=>{"use strict";e.exports=require("readline")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},26144:e=>{"use strict";e.exports=require("vm")},71267:e=>{"use strict";e.exports=require("worker_threads")},18391:(e,r,t)=>{let s=t(51495),i=s.forwardRef(function({title:e,titleId:r,...t},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":r},t),e?s.createElement("title",{id:r},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"}))});e.exports=i},29386:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>l,routeModule:()=>x,tree:()=>c});var s=t(30584),i=t(72023),o=t(16443),a=t.n(o),n=t(32055),u={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);t.d(r,u);let c=["",{children:["motion",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,69657)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/motion/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,79600)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/motion/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,33374))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32494)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/layout.tsx"],template:[()=>Promise.resolve().then(t.bind(t,4278)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/template.tsx"],error:[()=>Promise.resolve().then(t.bind(t,43086)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/error.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,43962)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,10540,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,33374))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/motion/page.tsx"],d="/motion/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/motion/page",pathname:"/motion",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},98826:(e,r,t)=>{Promise.resolve().then(t.bind(t,94702))},94702:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>Page});var s=t(96603),i=t(51495),o=t.n(i),a=t(15611),n=t(24240),u=t(75310),c=t(78303),l=t(79030);let Motion=()=>{let[e]=(0,a.u)(),{selectedBoard:r,selectedPrinter:t,performanceMode:i,selectedPrinterRails:o,parsedPrinterConfiguration:d}=(0,c.usePrinterConfiguration)(),p=!1===d.success?d.error.format():null;return null==t?s.jsx("div",{className:"mx-auto flex items-center justify-center p-8",children:s.jsx(n.$,{})}):s.jsx("div",{className:"grid gap-4 py-4 @lg:grid-cols-2 @3xl:grid-cols-3 @6xl:grid-cols-4",ref:e,children:o.map((e,o)=>{let a=t?.defaults.rails.find(r=>r.axis===e.axis);if(null==a)throw Error("No printer default for axis "+e.axis);return s.jsx(u.l,{errors:p?.rails?.[o]!=null?p.rails[o]:{_errors:[]},selectedBoard:r,printerRail:e,printerRailDefault:(0,l.Oj)(a),performanceMode:i,isVisible:!0},e.axis)})})};var d=t(30240);let LoadScreen=()=>(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsxs)("div",{className:"mb-5 border-b border-zinc-200 pb-5 dark:border-zinc-700",children:[s.jsx("h3",{className:"text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-100",children:"Loading printer configuration..."}),s.jsx("p",{className:"mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400",children:"Please wait while RatOS loads your printer configuration"})]}),s.jsx("div",{className:"mt-4 flex h-48 items-center justify-center",children:s.jsx(n.$,{})})]});function Page(){let e=(0,d.O)();return e?s.jsx("div",{className:"mx-auto mt-8 grid grid-cols-1 gap-6 @container",children:s.jsx("div",{className:"relative rounded-lg bg-white shadow dark:bg-zinc-900",children:s.jsx(o().Suspense,{fallback:s.jsx(LoadScreen,{}),children:s.jsx(Motion,{})})})}):null}},79600:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>MotionLayout});var s=t(8632),i=t(45650);function MotionLayout({children:e}){return(0,i.headers)().get("x-configurator"),s.jsx("main",{className:"py-10",children:s.jsx("div",{className:"mx-auto max-w-7xl pb-12",children:e})})}},69657:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>o,default:()=>u});var s=t(97175);let i=(0,s.createProxy)(String.raw`/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/motion/page.tsx`),{__esModule:o,$$typeof:a}=i,n=i.default,u=n}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[6668,1169,5519,2049,7141,1041,2834,9900,9882,760,2251,3655,9149,9144,5260,6,5310],()=>__webpack_exec__(29386));module.exports=t})();