(()=>{var e={};e.id=5795,e.ids=[5795],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},38316:e=>{"use strict";e.exports=require("zod")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},73292:e=>{"use strict";e.exports=require("fs/promises")},98188:e=>{"use strict";e.exports=require("module")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},14521:e=>{"use strict";e.exports=require("readline")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},26144:e=>{"use strict";e.exports=require("vm")},71267:e=>{"use strict";e.exports=require("worker_threads")},36183:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>g,tree:()=>c});var t=s(30584),a=s(72023),i=s(16443),o=s.n(i),n=s(32055),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(r,l);let c=["",{children:["analysis",{children:["macros",{children:["[id]",{children:["recordings",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,19952)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/[id]/recordings/page.tsx"]}]},{}]},{}]},{loading:[()=>Promise.resolve().then(s.bind(s,73493)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,47318)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,11988)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,33374))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32494)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/layout.tsx"],template:[()=>Promise.resolve().then(s.bind(s,4278)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/template.tsx"],error:[()=>Promise.resolve().then(s.bind(s,43086)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/error.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,43962)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,10540,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,33374))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/[id]/recordings/page.tsx"],u="/analysis/macros/[id]/recordings/page",m={require:s,loadChunk:()=>Promise.resolve()},g=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/analysis/macros/[id]/recordings/page",pathname:"/analysis/macros/[id]/recordings",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},29942:(e,r,s)=>{Promise.resolve().then(s.bind(s,85738)),Promise.resolve().then(s.bind(s,41891))},85738:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>MacroRecordings,metadata:()=>M});var t=s(96603),a=s(17516),i=s(65442),o=s(61331),n=s(51495),l=s(50519),c=s(99966),d=s(23152),u=s(52680),m=s(73835),g=s(19623),p=s(60991),h=s(76461),x=s(27458),f=s(11476),w=s(39726);function RecordingBulkActions({selection:e,onUpdate:r}){let[s,a]=(0,n.useState)(!1),i=h.SX.analysis.deleteRecordings.useMutation();return(0,t.jsxs)("div",{className:"flex justify-end",children:[(0,t.jsxs)(p.h_,{children:[t.jsx(p.$F,{asChild:!0,children:(0,t.jsxs)(g.z,{variant:"plain",size:"sm",className:"flex data-[state=open]:bg-muted",children:[t.jsx(m.AjK,{className:"h-4 w-4"}),t.jsx("span",{className:"sr-only",children:"Open menu"})]})}),t.jsx(p.AW,{align:"end",className:"w-[160px]",children:(0,t.jsxs)(p.Xi,{onClick:()=>a(!0),disabled:0===e.rows.length,children:["Delete ",e.rows.length>0?e.rows.length:""," ",1===e.rows.length?"Recording":"Recordings"]})})]}),t.jsx(x.aR,{open:s,children:(0,t.jsxs)(x._T,{children:[(0,t.jsxs)(x.fY,{children:[t.jsx(x.f$,{children:"Are you sure?"}),(0,t.jsxs)(x.yT,{children:["This action cannot be undone. This will permanently delete the ",e.flatRows.length," selected recordings."]})]}),(0,t.jsxs)(x.xo,{children:[t.jsx(x.le,{onClick:()=>a(!1),children:"Cancel"}),t.jsx(x.OL,{variant:"danger",onClick:async()=>{a(!1);try{let r=await i.mutateAsync({macroId:e.rows[0].original.macroId,recordingIds:e.flatRows.map(e=>e.original.id)});if(r.success){r.recordingsRemoved!==e.flatRows.length&&((0,w.j)().error(r,"Failed to delete one or more macros"),f.A.error("Failed to delete one or more macros",{description:"An unknown error occurred and some of the recordings you marked for deletion seem to have disappeared from the database. This shouldn't happen. Please contact support."})),f.A.success("Recordings deleted!",{description:`${r.recordingsRemoved} recording(s) were successfully deleted.`});return}(0,w.j)().error(r,"Failed to delete recordings"),f.A.error("Failed to delete recordings",{description:`
												<div>
													<p>An error occurred while deleting the selected recordings.</p>
													<pre class="text-wrap mt-4 text-rose-400 font-medium whitespace-pre-wrap">${r.msg??"Unknown error"}</pre>
												</div>
											`})}catch(r){(0,w.j)().error({ids:e.rows.map(e=>e.original.id),macroId:e.rows[0].original.macroId,error:r},"Failed to delete recordings"),f.A.error("Failed to delete recordings",{description:`
											<div>
												<p>An error occurred while deleting the recordings.</p>
												<pre class="text-wrap mt-4 text-rose-400 font-medium whitespace-pre-wrap">${r instanceof Error?r.message:r instanceof String?r:"Unknown error"}</pre>
											</div>
										`})}r?.()},children:"Continue"})]})]})})]})}var y=s(36731),b=s.n(y);l.Zr.defaultLocale="en-GB";let j=l.ou.local().locale,R=[{id:"select",size:30,minSize:30,header:({table:e})=>t.jsx(a.X,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r),"aria-label":"Select all"}),cell:({row:e})=>t.jsx(a.X,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"macroRecordingRunId",header:"Macro Run ID",enableGrouping:!0,enableHiding:!1,enableSorting:!1},{id:"date",size:200,accessorKey:"startTimeStamp",header:({column:e})=>t.jsx(i.p,{column:e,title:"Date"}),cell:({row:e})=>{let r=e.getLeafRows();0===r.length&&(r=[e]);let s=l.ou.fromMillis(r[0].original.startTimeStamp),a=l.ou.fromMillis(r[r.length-1].original.endTimeStamp),i=s.equals(a)?s.toFormat("yyyy-MM-dd HH:mm"):`${s.toFormat("yyyy-MM-dd HH:mm")} - ${a.toFormat("HH:mm")}`,o=l.ou.fromMillis(e.original.startTimeStamp).setLocale(j).toLocaleString({dateStyle:"long",timeStyle:"short"});return t.jsx("div",{className:"flex min-w-0",children:t.jsx("span",{title:i,className:"min-w-0 truncate",children:o})})},enableSorting:!0,sortingFn:(e,r)=>e.original.startTimeStamp-r.original.startTimeStamp,sortDescFirst:!0},{accessorKey:"name",size:600,header:({column:e})=>t.jsx(i.p,{column:e,title:"Recording"}),cell:({row:e})=>{let r=[],s=[],a=e.getLeafRows();return 0===a.length&&(a=[e]),a.forEach(e=>{if(s.push(e.original.name),!r.find(r=>r.accel===e.original.accelerometer))switch(e.original.accelerometer){case"controlboard":r.push({accel:e.original.accelerometer,label:e.original.recordingHardwareName,color:"purple",icon:c.Z});break;case"rpi":r.push({accel:e.original.accelerometer,label:e.original.recordingHardwareName,color:"gray",icon:d.Z});break;case"toolboard_t0":r.push({accel:e.original.accelerometer,label:`${e.original.recordingHardwareName} T0`,color:"sky",icon:u.Z});break;case"toolboard_t1":r.push({accel:e.original.accelerometer,label:`${e.original.recordingHardwareName} T1`,color:"blue",icon:u.Z})}}),(0,t.jsxs)("div",{className:"flex min-w-0 max-w-fit items-center gap-2 truncate font-medium",children:[r.map(e=>t.jsx(o.Ct,{color:e.color,children:e.label},e.label)),t.jsx(b(),{href:`/analysis/macros/${e.original.macroId}/recordings/${e.original.macroRecordingRunId}`,className:"truncate font-medium hover:text-brand-400",children:s.length>1?s.slice(0,-1).join(", ")+" & "+s.slice(-1):s[0]})]})},filterFn:(e,r,s)=>{let t=`${e.original.name} ${e.original.accelerometer} ${e.original.recordingHardwareName}`;return console.log(t,s),Array.isArray(s)&&s.flat().some(e=>t.includes(e))},getFacetedOptions:()=>[{label:"Control Board",value:"controlboard",icon:c.Z},{label:"Host",value:"rpi",icon:d.Z},{label:"Tool Board T0",value:"toolboard_t0",icon:u.Z},{label:"Tool Board T1",value:"toolboard_t1",icon:u.Z}]},{id:"duration",size:200,header:({column:e})=>t.jsx(i.p,{column:e,title:"Duration"}),cell:({row:e})=>{let r=e.getLeafRows();0===r.length&&(r=[e]);let s=l.nL.fromMillis(r[r.length-1].original.endTimeStamp-r[0].original.startTimeStamp).shiftTo("minutes","seconds").toHuman({unitDisplay:"short",maximumSignificantDigits:2});return t.jsx("div",{className:"flex min-w-0",children:t.jsx("span",{className:"min-w-0 truncate",children:s})})}},{id:"actions",size:25,header:({table:e})=>t.jsx(RecordingBulkActions,{selection:e.getSelectedRowModel()}),cell:({row:e})=>null}];var S=s(85485),v=s(96491),k=s(10291),_=s(82697);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let q=(0,_.Z)("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),M={title:"Macros",description:"User-modifiable macros for resonance analysis"};function MacroRecordings({id:e}){let[r]=h.SX.analysis.getRecordings.useSuspenseQuery({macroId:e}),[s]=h.SX.analysis.findMacro.useSuspenseQuery({id:e});return(0,v.Ty)("Analysis Recordings",(0,n.useCallback)(r=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.MenubarMenu,{children:[t.jsx(r.MenubarTrigger,{className:"cursor-pointer",asChild:!0,children:(0,t.jsxs)("span",{onClick:()=>window.history.back(),children:[t.jsx(r.MenubarIcon,{Icon:k.Z}),t.jsx("span",{className:"hidden lg:inline",children:"Back"})]})}),t.jsx(r.MenubarContent,{className:"hidden"})]}),(0,t.jsxs)(r.MenubarMenu,{children:[t.jsx(r.MenubarTrigger,{asChild:!0,className:"cursor-pointer",children:(0,t.jsxs)(b(),{href:`/analysis/macros/${e}/edit`,children:[t.jsx(r.MenubarIcon,{Icon:q}),t.jsx("span",{className:"hidden lg:inline",children:"Edit"})]})}),t.jsx(r.MenubarContent,{className:"hidden"})]})]}),[e])),(0,t.jsxs)("div",{className:"flex h-full flex-1 flex-col space-y-8 p-8",children:[t.jsx("div",{className:"flex items-center justify-between space-y-2",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("h2",{className:"text-xl font-semibold leading-none tracking-tight",children:["Recordings for ",s.name]}),(0,t.jsxs)("p",{className:"text-base font-medium text-muted-foreground",children:["You have recorded ",r.total||r.result.length," sequence(s) for this macro so far."]})]})}),t.jsx(S.w,{data:r.result??[],columns:R,initialGrouping:["macroRecordingRunId"],initialColumnVisibility:{macroRecordingRunId:!1},initialSorting:[{desc:!0,id:"date"}]})]})}},19952:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>MacroRecordingsPage});var t=s(8632);s(80051);var a=s(3747),i=s(97175);let o=(0,i.createProxy)(String.raw`/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/[id]/recordings/recordings.tsx`),{__esModule:n,$$typeof:l}=o,c=o.default;function MacroRecordingsPage({params:e}){return t.jsx("div",{className:"h-full @container",children:t.jsx(a.r,{children:t.jsx(c,{id:e.id})})})}o.metadata}};var r=require("../../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),s=r.X(0,[6668,1169,2049,7141,6760,7261,519,2563,2159,8480,9900,9882,760,1891,2767,9149,4454,7458,1747],()=>__webpack_exec__(36183));module.exports=s})();