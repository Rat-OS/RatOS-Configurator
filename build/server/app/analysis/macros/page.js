(()=>{var e={};e.id=5757,e.ids=[5757],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},38316:e=>{"use strict";e.exports=require("zod")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},73292:e=>{"use strict";e.exports=require("fs/promises")},98188:e=>{"use strict";e.exports=require("module")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},14521:e=>{"use strict";e.exports=require("readline")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},26144:e=>{"use strict";e.exports=require("vm")},71267:e=>{"use strict";e.exports=require("worker_threads")},55467:(e,r,s)=>{"use strict";s.d(r,{Z:()=>t});var a=s(82697);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let t=(0,a.Z)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]])},55955:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var a=s(30584),t=s(72023),o=s(16443),n=s.n(o),i=s(32055),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(r,l);let c=["",{children:["analysis",{children:["macros",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4547)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/page.tsx"]}]},{loading:[()=>Promise.resolve().then(s.bind(s,73493)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,47318)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,11988)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,33374))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32494)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/layout.tsx"],template:[()=>Promise.resolve().then(s.bind(s,4278)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/template.tsx"],error:[()=>Promise.resolve().then(s.bind(s,43086)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/error.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,43962)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,10540,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,33374))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/page.tsx"],u="/analysis/macros/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/analysis/macros/page",pathname:"/analysis/macros",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},94092:(e,r,s)=>{Promise.resolve().then(s.bind(s,90667)),Promise.resolve().then(s.bind(s,41891))},90667:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>AnalysisMacrosTable});var a=s(96603),t=s(52903),o=s(65442),n=s(73835),i=s(19623),l=s(60991),c=s(36731),d=s.n(c),u=s(76461),m=s(1414),p=s(51495),h=s(11476),x=s(83926);function DataTableRowActions({row:e,onUpdate:r}){let[s,t]=(0,p.useState)(!1),o=u.SX.analysis.deleteMacro.useMutation();return(0,a.jsxs)("div",{className:"flex justify-end",children:[(0,a.jsxs)(l.h_,{children:[a.jsx(l.$F,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"plain",size:"sm",className:"flex data-[state=open]:bg-muted",children:[a.jsx(n.AjK,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Open menu"})]})}),(0,a.jsxs)(l.AW,{align:"end",className:"w-[160px]",children:[a.jsx(l.Xi,{asChild:!0,children:a.jsx(d(),{href:`/analysis/macros/${e.original.id}/recordings`,children:"View Recordings"})}),a.jsx(l.Xi,{asChild:!0,children:a.jsx(d(),{href:`/analysis/macros/${e.original.id}/edit`,children:"Edit"})}),a.jsx(l.VD,{}),a.jsx(l.Xi,{onClick:()=>t(!0),children:"Delete"})]})]}),a.jsx(m.aR,{open:s,children:(0,a.jsxs)(m._T,{children:[(0,a.jsxs)(m.fY,{children:[a.jsx(m.f$,{children:"Are you sure?"}),a.jsx(m.yT,{children:"This action cannot be undone. This will permanently delete this macro and all associated recordings."})]}),(0,a.jsxs)(m.xo,{children:[a.jsx(m.le,{onClick:()=>t(!1),children:"Cancel"}),a.jsx(m.OL,{variant:"danger",onClick:async()=>{t(!1);try{let r=await o.mutateAsync(e.original.id);if(null==r.result){(0,x.j)().error(e.original.id,"Failed to delete macro"),h.A.error("Failed to delete macro",{description:"An unknown error occurred and the macro seem to have disappeared from the database. This shouldn't happen. Please contact support."});return}h.A.success("Macro deleted!",{description:`The macro and ${r.totalRecordingsRemoved} recording(s) were successfully deleted.`})}catch(r){(0,x.j)().error({id:e.original.id,error:r},"Failed to delete macro"),h.A.error("Failed to delete macro",{description:`
											<div>
												<p>An error occurred while delete the macro.</p>
												<pre class="text-wrap mt-4 text-rose-400 font-medium whitespace-pre-wrap">${r instanceof Error?r.message:r instanceof String?r:"Unknown error"}</pre>
											</div>
										`})}r?.()},children:"Continue"})]})]})})]})}var g=s(61331),f=s(99966),j=s(23152),y=s(52680),b=s(55467);function MacroBulkActions({selection:e,onUpdate:r}){let[s,t]=(0,p.useState)(!1),o=u.SX.analysis.deleteMacros.useMutation();return(0,a.jsxs)("div",{className:"flex justify-end",children:[(0,a.jsxs)(l.h_,{children:[a.jsx(l.$F,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"plain",size:"sm",className:"flex data-[state=open]:bg-muted",children:[a.jsx(n.AjK,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Open menu"})]})}),a.jsx(l.AW,{align:"end",className:"w-[160px]",children:(0,a.jsxs)(l.Xi,{onClick:()=>t(!0),disabled:0===e.rows.length,children:["Delete ",e.rows.length>0?e.rows.length:""," ",1===e.rows.length?"Macro":"Macros"]})})]}),a.jsx(m.aR,{open:s,children:(0,a.jsxs)(m._T,{children:[(0,a.jsxs)(m.fY,{children:[a.jsx(m.f$,{children:"Are you sure?"}),a.jsx(m.yT,{children:"This action cannot be undone. This will permanently delete the selected macros and all associated recordings."})]}),(0,a.jsxs)(m.xo,{children:[a.jsx(m.le,{onClick:()=>t(!1),children:"Cancel"}),a.jsx(m.OL,{variant:"danger",onClick:async()=>{t(!1);try{let r=await o.mutateAsync(e.rows.map(e=>e.original.id)),s=r.result.filter(e=>!e.success);s.length>0&&((0,x.j)().error(s,"Failed to delete one or more macros"),h.A.error("Failed to delete one or more macros",{description:"An unknown error occurred and some of the macros you marked for deletion seem to have disappeared from the database. This shouldn't happen. Please contact support."})),h.A.success("Macros deleted!",{description:`${r.macrosRemoved} out of ${r.result.length} macro(s) and ${r.result.reduce((e,r)=>e+r.totalRecordingsRemoved,0)} recording(s) were successfully deleted.`})}catch(r){(0,x.j)().error({ids:e.rows.map(e=>e.original.id),error:r},"Failed to delete macros"),h.A.error("Failed to delete macros",{description:`
											<div>
												<p>An error occurred while deleting the macros.</p>
												<pre class="text-wrap mt-4 text-rose-400 font-medium whitespace-pre-wrap">${r instanceof Error?r.message:r instanceof String?r:"Unknown error"}</pre>
											</div>
										`})}r?.()},children:"Continue"})]})]})})]})}let w=[{id:"select",size:30,minSize:30,header:({table:e})=>a.jsx(t.X,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r),"aria-label":"Select all"}),cell:({row:e})=>a.jsx(t.X,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",size:1e3,header:({column:e})=>a.jsx(o.p,{column:e,title:"Name"}),cell:({row:e})=>{let r=[];return e.original.sequences.map(e=>{switch(e.recording?.accelerometer){case"controlboard":r.push({label:"Control Board",color:"lime",icon:f.Z});break;case"rpi":r.push({label:"Host",color:"yellow",icon:j.Z});break;case"toolboard_t0":r.push({label:"Tool Board T0",color:"sky",icon:y.Z});break;case"toolboard_t1":r.push({label:"Tool Board T1",color:"pink",icon:y.Z})}}),r=r.filter((e,r,s)=>s.findIndex(r=>r.label===e.label)===r),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[r.map(e=>a.jsx(g.Ct,{color:e.color,children:e.label},e.label)),a.jsx(d(),{href:`/analysis/macros/${e.original.id}/recordings`,className:"truncate font-medium hover:text-brand-400",children:e.getValue("name")})]})},getUniqueValues:e=>e.sequences.map(e=>e.recording?.accelerometer).concat([e.name]),getFacetedOptions:()=>[{label:"Control Board",value:"controlboard",icon:f.Z},{label:"Host",value:"rpi",icon:j.Z},{label:"Tool Board T0",value:"toolboard_t0",icon:y.Z},{label:"Tool Board T1",value:"toolboard_t1",icon:y.Z}],filterFn:(e,r,s)=>{let a=e.original.sequences.map(e=>e.recording?.accelerometer);return(Array.isArray(s)?s:[s]).some(r=>a.includes(r)||e.original.name.includes(r))}},{accessorKey:"sequences",size:100,header:({column:e})=>a.jsx(o.p,{column:e,title:"Sequences"}),cell:({row:e})=>{let r=e.original.sequences.filter(e=>!e.recording?.capturePSD).length,s=e.original.sequences.filter(e=>e.recording?.capturePSD).length;return(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[r>0&&(0,a.jsxs)(g.Ct,{className:"flex gap-1.5",color:"gray",children:[a.jsx(b.Z,{className:"h-4 w-4 text-foreground"})," ",r]}),s>0&&(0,a.jsxs)(g.Ct,{className:"flex gap-1.5",color:"gray",children:[a.jsx(n.jXb,{className:"h-4 w-4 scale-[250%] text-rose-400"})," ",s]})]})}},{id:"actions",size:16,minSize:16,maxSize:16,header:({table:e})=>a.jsx(MacroBulkActions,{selection:e.getSelectedRowModel()}),cell:({row:e})=>a.jsx(DataTableRowActions,{row:e})}];var v=s(85485),k=s(99027),S=s(10291),q=s(82697);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let _=(0,q.Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);var R=s(43435);function AnalysisMacrosTable(){let e=k.S.analysis.getMacros.useQuery({});return(0,R.Ty)("Analysis",(0,p.useCallback)(e=>a.jsx(a.Fragment,{children:(0,a.jsxs)(e.MenubarMenu,{children:[a.jsx(e.MenubarTrigger,{className:"cursor-pointer",asChild:!0,children:(0,a.jsxs)(d(),{href:"/analysis",children:[a.jsx(e.MenubarIcon,{Icon:S.Z}),a.jsx("span",{className:"hidden lg:inline",children:"Back"})]})}),a.jsx(e.MenubarContent,{className:"hidden"})]})}),[])),(0,a.jsxs)("div",{className:"flex h-full flex-1 flex-col space-y-8 p-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between space-y-2",children:[(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:"Resonance analysis macros"}),a.jsx("p",{className:"font-medium text-muted-foreground",children:"Here's a list of your macro's ready for analysis!"})]}),a.jsx("div",{className:"flex items-center space-x-2",children:(0,a.jsxs)(i.z,{href:"/analysis/macros/new",variant:"primary",children:[a.jsx(_,{className:"size-4"}),a.jsx("span",{children:"New Macro"})]})})]}),a.jsx(v.w,{data:e.data?.result??[],columns:w})]})}},4547:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>Page,metadata:()=>u});var a=s(8632);s(80051);var t=s(3747),o=s(97175);let n=(0,o.createProxy)(String.raw`/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/macros.tsx`),{__esModule:i,$$typeof:l}=n,c=n.default;var d=s(73493);let u={title:"Macros",description:"User-modifiable macros for resonance analysis"};function Page(){return a.jsx("div",{className:"h-full @container",children:a.jsx(t.r,{fallback:a.jsx(d.default,{}),children:a.jsx(c,{})})})}}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),s=r.X(0,[4430,513,2689,4656,1169,7141,6760,7261,2563,2159,8480,7340,9900,6490,9751,8879,4454,1414,1747],()=>__webpack_exec__(55955));module.exports=s})();