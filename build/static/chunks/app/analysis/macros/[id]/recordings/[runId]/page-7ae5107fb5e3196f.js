(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2601,6375],{74755:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(24360);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,t.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},79162:function(e,r,n){Promise.resolve().then(n.bind(n,91954)),Promise.resolve().then(n.bind(n,56445))},97060:function(e,r,n){"use strict";n.d(r,{N:function(){return useDebounce}});var t=n(39164);let useDebounce=function(e,r){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=(0,t.useRef)(),a=(0,t.useRef)([]);return(0,t.useEffect)(()=>()=>{o.current&&clearTimeout(o.current)},[]),(0,t.useCallback)(function(){for(var t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];if(a.current=i,o.current){if(!n)return;clearTimeout(o.current),o.current=void 0}o.current=setTimeout(()=>{e(...a.current),o.current=void 0},r)},[r,n,e])}},91954:function(e,r,n){"use strict";n.r(r),n.d(r,{MacroRun:function(){return MacroRun}});var t=n(72612),o=n(29817),a=n(30742),i=n(39164),s=n(68995),l=n(43955),c=n(77579),d=n(86736),u=n.n(d);s.SciChartSurface.configure({wasmUrl:"/configure/scichart2d.wasm",dataUrl:"/configure/scichart2d.data"});let MacroRunChart=e=>{let{recordings:r,sequences:n}=e,d=r.map(e=>{var r;let t=n.find(r=>r.id===e.sequenceId);return(null==t?void 0:t.recording)?{color:null==t?void 0:null===(r=t.recording)||void 0===r?void 0:r.color,name:e.name,psd:e.psd.total}:null}).filter(Boolean),f=(0,i.useRef)(d),p=(0,i.useCallback)(e=>{let r=!1;if(2===d.length){r=!0;for(let e=0;e<d[0].psd.frequencies.length;e++)Math.abs(d[0].psd.frequencies[e]-d[1].psd.frequencies[e])>1&&(r=!1)}if(r){var n,t,a,i,c,u;let r=new s.FastBandRenderableSeries(e.webAssemblyContext2D,{dataSeries:new s.XyyDataSeries(e.webAssemblyContext2D,{containsNaN:!1,isSorted:!0,xValues:d[0].psd.frequencies,yValues:d[0].psd.estimates,y1Values:d[1].psd.estimates}),fill:l.DN[null!==(n=d[1].color)&&void 0!==n?n:"sky"][600]+22,fillY1:l.DN[null!==(t=d[0].color)&&void 0!==t?t:"rose"][600]+22,stroke:l.DN[null!==(a=d[0].color)&&void 0!==a?a:"rose"][400],strokeY1:l.DN[null!==(i=d[1].color)&&void 0!==i?i:"sky"][400],strokeThickness:3,yAxisId:o.ck});r.rolloverModifierProps.tooltipColor=null!==(c=d[0].color)&&void 0!==c?c:"zinc",r.rolloverModifierProps.tooltipTitle=d[0].name+" Power",r.rolloverModifierProps1.tooltipColor=null!==(u=d[1].color)&&void 0!==u?u:"zinc",r.rolloverModifierProps1.tooltipTitle=d[1].name+" Power",r.animation=new s.WaveAnimation({duration:500,pointDurationFraction:1}),e.renderableSeries.add(r)}else d.forEach(r=>{var n,t;let a=new s.FastLineRenderableSeries(e.webAssemblyContext2D,{dataSeries:new s.XyDataSeries(e.webAssemblyContext2D,{containsNaN:!1,isSorted:!0,xValues:r.psd.frequencies,yValues:r.psd.estimates}),stroke:l.DN[null!==(n=r.color)&&void 0!==n?n:"brand"][400],strokeThickness:3,yAxisId:o.ck});a.rolloverModifierProps.tooltipColor=null!==(t=r.color)&&void 0!==t?t:"zinc",a.rolloverModifierProps.tooltipTitle=r.name+" Power",a.animation=new s.WaveAnimation({duration:500,pointDurationFraction:1}),e.renderableSeries.add(a)});let f=e.yAxes.getById(o.ck);f&&(f.visibleRange=new s.NumberRange(Math.min(...d.map(e=>e.psd.powerRange.min)),Math.max(...d.map(e=>e.psd.powerRange.max))).growBy(new s.NumberRange(0,.2)),f.autoRange=s.EAutoRange.Always,f.autoRangeAnimation.duration=500,f.autoRangeAnimation.easing=s.easing.inOutCirc),e.chartModifiers.add(new s.RolloverModifier({showRolloverLine:!0,showTooltip:!1,yAxisId:o.ck})),e.chartModifiers.add(new s.CursorModifier({crosshairStroke:l.DN.sky[400],crosshairStrokeThickness:1,showXLine:!0,showYLine:!0,tooltipLegendTemplate:o.to,tooltipLegendOffsetX:16,tooltipLegendOffsetY:16,yAxisId:o.ck,showTooltip:!1,axisLabelFill:l.DN.zinc[900],axisLabelStroke:l.DN.zinc[100]}))},[d]),x=(0,a.Q8)(o.OH,p),m=(0,i.useCallback)(e=>{if(null!=x.surface.current){if(0===f.current.length){p(x.surface.current);return}if(e.length===f.current.length){e.forEach((r,n)=>{var t,a,i,c,d;let u=null===(t=x.surface.current)||void 0===t?void 0:t.renderableSeries.get(n);if(u){if(null==x.surface.current)throw Error("Missing chart surface");let t=u.dataSeries.count();if((0,o.jh)(u.dataSeries)){let o=e[n+1];if(t>r.psd.frequencies.length){let e=Array(t-r.psd.frequencies.length).fill(0),n=Array(t-r.psd.estimates.length).fill(0);r.psd.frequencies.unshift(...e),r.psd.estimates.unshift(...n),o.psd.frequencies.unshift(...e),o.psd.estimates.unshift(...n)}t<r.psd.frequencies.length&&(r.psd.frequencies=r.psd.frequencies.slice(0,t),r.psd.estimates=r.psd.estimates.slice(0,t),o.psd.frequencies=o.psd.frequencies.slice(0,t),o.psd.estimates=o.psd.estimates.slice(0,t));let l=new s.XyyDataSeries(x.surface.current.webAssemblyContext2D,{containsNaN:!1,isSorted:!0});l.appendRange(r.psd.frequencies,r.psd.estimates,o.psd.estimates),x.surface.current.addDeletable(l),u.rolloverModifierProps.tooltipColor=null!==(a=r.color)&&void 0!==a?a:"zinc",u.rolloverModifierProps.tooltipTitle=r.name+" Power",u.rolloverModifierProps1.tooltipColor=null!==(i=o.color)&&void 0!==i?i:"zinc",u.rolloverModifierProps1.tooltipTitle=o.name+" Power",u.runAnimation(new s.BandAnimation({duration:500,ease:s.easing.inOutCirc,dataSeries:l}))}if((0,o.Mg)(u.dataSeries)){if(t>r.psd.frequencies.length){let e=Array(t-r.psd.frequencies.length).fill(0),n=Array(t-r.psd.estimates.length).fill(0);r.psd.frequencies.unshift(...e),r.psd.estimates.unshift(...n)}t<r.psd.frequencies.length&&(r.psd.frequencies=r.psd.frequencies.slice(0,t),r.psd.estimates=r.psd.estimates.slice(0,t));let e=new s.XyDataSeries(x.surface.current.webAssemblyContext2D,{containsNaN:!1,isSorted:!0});e.appendRange(r.psd.frequencies,r.psd.estimates),x.surface.current.addDeletable(e),u.rolloverModifierProps.tooltipColor=null!==(c=r.color)&&void 0!==c?c:"zinc",u.rolloverModifierProps.tooltipTitle=r.name+" Power",u.runAnimation(new s.LineAnimation({duration:500,ease:s.easing.inOutCirc,dataSeries:e,styles:{stroke:l.DN[null!==(d=r.color)&&void 0!==d?d:"brand"][400]}}))}}});return}if(e.length!==f.current.length){f.current.forEach((e,r)=>{var n,t;let a=null===(n=x.surface.current)||void 0===n?void 0:n.renderableSeries.get(r);if(a){if(null==x.surface.current)throw Error("Missing chart surface");let n=a.dataSeries.count();if((0,o.jh)(a.dataSeries)){let e=new s.XyyDataSeries(x.surface.current.webAssemblyContext2D,{containsNaN:!1,isSorted:!0});e.appendRange(f.current[r].psd.frequencies,Array(n).fill(0),Array(n).fill(0)),x.surface.current.addDeletable(e),a.runAnimation(new s.BandAnimation({duration:500,ease:s.easing.inOutCirc,dataSeries:e}))}if((0,o.Mg)(a.dataSeries)){let o=new s.XyDataSeries(x.surface.current.webAssemblyContext2D,{containsNaN:!1,isSorted:!0});o.appendRange(f.current[r].psd.frequencies,Array(n).fill(0)),x.surface.current.addDeletable(o),a.runAnimation(new s.LineAnimation({duration:500,ease:s.easing.inOutCirc,dataSeries:o,styles:{stroke:l.DN[null!==(t=e.color)&&void 0!==t?t:"brand"][400]}}))}}}),setTimeout(()=>{if(x.surface.current){var e,r;null===(e=x.surface.current)||void 0===e||e.renderableSeries.clear(),null===(r=x.surface.current)||void 0===r||r.chartModifiers.clear(),p(x.surface.current),x.surface.current.invalidateElement()}},500);return}}},[x.surface,p]);return(0,i.useEffect)(()=>{0!=d.length&&!1===u()(d,f.current)&&(x.surface.current&&m(d),f.current=d)},[x.surface,d,p,m]),(0,t.jsx)(c.iB,{...x.forwardProps,className:"flex-1 bg-zinc-900/50"})};var f=n(58818),p=n(79293),x=n(74755),m=n(24360);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let g=(0,m.Z)("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]),h=(0,m.Z)("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var y=["shift","alt","meta","mod","ctrl"],b={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function mapKey(e){return(b[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function parseKeysHookInput(e,r){return void 0===r&&(r=","),e.split(r)}function parseHotkey(e,r,n){void 0===r&&(r="+");var t=e.toLocaleLowerCase().split(r).map(function(e){return mapKey(e)}),o={alt:t.includes("alt"),ctrl:t.includes("ctrl")||t.includes("control"),shift:t.includes("shift"),meta:t.includes("meta"),mod:t.includes("mod")},a=t.filter(function(e){return!y.includes(e)});return _extends({},o,{keys:a,description:n})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&pushToCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&removeFromCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){v.clear()});var v=new Set;function isReadonlyArray(e){return Array.isArray(e)}function pushToCurrentlyPressedKeys(e){var r=Array.isArray(e)?e:[e];v.has("meta")&&v.forEach(function(e){return!y.includes(e)&&v.delete(e.toLowerCase())}),r.forEach(function(e){return v.add(e.toLowerCase())})}function removeFromCurrentlyPressedKeys(e){var r=Array.isArray(e)?e:[e];"meta"===e?v.clear():r.forEach(function(e){return v.delete(e.toLowerCase())})}function isHotkeyEnabledOnTag(e,r){var n=e.target;void 0===r&&(r=!1);var t=n&&n.tagName;return isReadonlyArray(r)?!!(t&&r&&r.some(function(e){return e.toLowerCase()===t.toLowerCase()})):!!(t&&r&&!0===r)}var isHotkeyMatchingKeyboardEvent=function(e,r,n){void 0===n&&(n=!1);var t,o=r.alt,a=r.meta,i=r.mod,s=r.shift,l=r.ctrl,c=r.keys,d=e.key,u=e.code,f=e.ctrlKey,p=e.metaKey,x=e.shiftKey,m=e.altKey,g=mapKey(u),h=d.toLowerCase();if(!(null!=c&&c.includes(g))&&!(null!=c&&c.includes(h))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(g))return!1;if(!n){if(!m===o&&"alt"!==h||!x===s&&"shift"!==h)return!1;if(i){if(!p&&!f)return!1}else if(!p===a&&"meta"!==h&&"os"!==h||!f===l&&"ctrl"!==h&&"control"!==h)return!1}return!!(c&&1===c.length&&(c.includes(h)||c.includes(g)))||(c?(void 0===t&&(t=","),(isReadonlyArray(c)?c:c.split(t)).every(function(e){return v.has(e.trim().toLowerCase())})):!c)},k=(0,i.createContext)(void 0),w=(0,i.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),stopPropagation=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},_="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;function useHotkeys(e,r,n,t){var o,a=(0,i.useRef)(null),s=(0,i.useRef)(!1),l=n instanceof Array?t instanceof Array?void 0:t:n,c=isReadonlyArray(e)?e.join(null==l?void 0:l.splitKey):e,d=n instanceof Array?n:t instanceof Array?t:void 0,u=(0,i.useCallback)(r,null!=d?d:[]),f=(0,i.useRef)(u);d?f.current=u:f.current=r;var p=(!function deepEqual(e,r){return e&&r&&"object"==typeof e&&"object"==typeof r?Object.keys(e).length===Object.keys(r).length&&Object.keys(e).reduce(function(n,t){return n&&deepEqual(e[t],r[t])},!0):e===r}((o=(0,i.useRef)(void 0)).current,l)&&(o.current=l),o.current),x=(0,i.useContext)(w).enabledScopes,m=(0,i.useContext)(k);return _(function(){if((null==p?void 0:p.enabled)!==!1&&(e=null==p?void 0:p.scopes,0===x.length&&e?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!e||x.some(function(r){return e.includes(r)})||x.includes("*")))){var e,listener=function(e,r){var n;if(void 0===r&&(r=!1),!isHotkeyEnabledOnTag(e,["input","textarea","select"])||isHotkeyEnabledOnTag(e,null==p?void 0:p.enableOnFormTags)){if(null!==a.current){var t=a.current.getRootNode();if((t instanceof Document||t instanceof ShadowRoot)&&t.activeElement!==a.current&&!a.current.contains(t.activeElement)){stopPropagation(e);return}}(null==(n=e.target)||!n.isContentEditable||null!=p&&p.enableOnContentEditable)&&parseKeysHookInput(c,null==p?void 0:p.splitKey).forEach(function(n){var t,o,a,i=parseHotkey(n,null==p?void 0:p.combinationKey);if(isHotkeyMatchingKeyboardEvent(e,i,null==p?void 0:p.ignoreModifiers)||null!=(a=i.keys)&&a.includes("*")){if(null!=p&&null!=p.ignoreEventWhen&&p.ignoreEventWhen(e)||r&&s.current)return;if(("function"==typeof(t=null==p?void 0:p.preventDefault)&&t(e,i)||!0===t)&&e.preventDefault(),"function"==typeof(o=null==p?void 0:p.enabled)?!o(e,i):!0!==o&&void 0!==o){stopPropagation(e);return}f.current(e,i),r||(s.current=!0)}})}},handleKeyDown=function(e){void 0!==e.key&&(pushToCurrentlyPressedKeys(mapKey(e.code)),((null==p?void 0:p.keydown)===void 0&&(null==p?void 0:p.keyup)!==!0||null!=p&&p.keydown)&&listener(e))},handleKeyUp=function(e){void 0!==e.key&&(removeFromCurrentlyPressedKeys(mapKey(e.code)),s.current=!1,null!=p&&p.keyup&&listener(e,!0))},r=a.current||(null==l?void 0:l.document)||document;return r.addEventListener("keyup",handleKeyUp),r.addEventListener("keydown",handleKeyDown),m&&parseKeysHookInput(c,null==p?void 0:p.splitKey).forEach(function(e){return m.addHotkey(parseHotkey(e,null==p?void 0:p.combinationKey,null==p?void 0:p.description))}),function(){r.removeEventListener("keyup",handleKeyUp),r.removeEventListener("keydown",handleKeyDown),m&&parseKeysHookInput(c,null==p?void 0:p.splitKey).forEach(function(e){return m.removeHotkey(parseHotkey(e,null==p?void 0:p.combinationKey,null==p?void 0:p.description))})}}},[c,p,x]),a}var N=n(41087);N.Zr.defaultLocale="en-GB";let C=N.ou.local().locale,MacroRun=e=>{let{id:r,runId:n}=e,[o,a]=(0,i.useState)(n),[s]=p.SX.analysis.findMacro.useSuspenseQuery({id:r}),[l]=p.SX.analysis.getRunRecordings.useSuspenseQuery({runId:o,macroId:r},{keepPreviousData:!0}),[{next:c,previous:d}]=p.SX.analysis.getNextAndPreviousRunRecordingIds.useSuspenseQuery({macroId:r,runId:o},{keepPreviousData:!0});useHotkeys("left",()=>{null!=d&&a(d)},[d]),useHotkeys("right",()=>{null!=c&&a(c)},[c]);let u=(0,i.useMemo)(()=>{let e=N.ou.fromMillis(l.result[0].startTimeStamp),r=N.ou.fromMillis(l.result[l.result.length-1].endTimeStamp),n=e.equals(r)?e.toFormat("yyyy-MM-dd HH:mm"):"".concat(e.toFormat("yyyy-MM-dd HH:mm")," - ").concat(r.toFormat("HH:mm")),o=N.ou.fromMillis(l.result[0].startTimeStamp).setLocale(C).toLocaleString({dateStyle:"long",timeStyle:"short"}),a=N.nL.fromMillis(l.result[l.result.length-1].endTimeStamp-l.result[0].startTimeStamp).shiftTo("minutes","seconds").toHuman({unitDisplay:"short",maximumSignificantDigits:2});return(0,t.jsxs)("span",{title:n,className:"min-w-0 truncate",children:[o," (",a,")"]})},[l]);return(0,f.Ty)("Analysis",(0,i.useCallback)(e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.MenubarMenu,{children:[(0,t.jsx)(e.MenubarTrigger,{className:"cursor-pointer",asChild:!0,children:(0,t.jsxs)("span",{onClick:()=>window.history.back(),children:[(0,t.jsx)(e.MenubarIcon,{Icon:x.Z}),(0,t.jsx)("span",{className:"hidden lg:inline",children:"Back"})]})}),(0,t.jsx)(e.MenubarContent,{className:"hidden"})]}),(0,t.jsxs)(e.MenubarMenu,{children:[(0,t.jsx)(e.MenubarTrigger,{asChild:!0,disabled:null==d,children:(0,t.jsxs)("span",{onClick:()=>null!=d&&a(d),children:[(0,t.jsx)(e.MenubarIcon,{Icon:g}),(0,t.jsx)("span",{className:"hidden lg:inline",children:"Previous recording"})]})}),(0,t.jsx)(e.MenubarContent,{className:"hidden"})]}),(0,t.jsxs)(e.MenubarMenu,{children:[(0,t.jsx)(e.MenubarTrigger,{asChild:!0,disabled:null==c,children:(0,t.jsxs)("span",{onClick:()=>null!=c&&a(c),children:[(0,t.jsx)(e.MenubarIcon,{Icon:h}),(0,t.jsx)("span",{className:"hidden lg:inline",children:"Next recording"})]})}),(0,t.jsx)(e.MenubarContent,{className:"hidden"})]})]}),[c,d])),(0,t.jsxs)("div",{className:"flex flex-1",children:[(0,t.jsx)(MacroRunChart,{sequences:s.sequences,recordings:l.result}),(0,t.jsxs)("div",{className:"absolute left-1/2 top-4 -translate-x-1/2 text-center",children:[(0,t.jsx)("h2",{className:"bg-gradient-to-b from-white/80 to-white/30 bg-clip-text text-2xl font-bold !leading-snug tracking-tight text-transparent transition-all lg:text-4xl xl:text-5xl 2xl:text-6xl",children:s.name}),(0,t.jsx)("div",{className:"text-sm font-medium text-white/40 transition-all lg:text-lg xl:text-xl 2xl:text-2xl",children:u})]})]})}},34709:function(e,r,n){"use strict";n.d(r,{i:function(){return AnimatedContainer}});var t=n(72612),o=n(97060),a=n(99699),i=n(73790),s=n(39164),l=n(63278);let AnimatedContainer=e=>{let[r,n]=(0,s.useState)(0),c=(0,s.useRef)(r);c.current=r;let[d,u]=(0,s.useState)(!1),f=(0,s.useRef)(d);f.current=d;let p=(0,s.useRef)(null);(0,a.Z)(p,e=>{e.contentRect.height!==c.current&&n(e.contentRect.height)});let x=(0,o.N)((0,s.useCallback)(()=>{u(!0)},[]),200,!0),m=(0,o.N)((0,s.useCallback)(()=>{u(!1)},[]),200,!0);return(0,t.jsx)(i.E.div,{className:(0,l.m6)(d?"overflow-visible":"overflow-hidden",e.containerClassName),style:{height:r},onAnimationComplete:x,onAnimationStart:m,animate:{height:r},children:(0,t.jsx)("div",{ref:p,className:e.className,children:e.children})})}},34471:function(e,r,n){"use strict";n.d(r,{j:function(){return Banner}});var t=n(72612);n(39164);var o=n(39634),a=n(63278),i=n(73918);let s=(0,i.j)("rounded-md p-4 border",{variants:{color:{red:[(0,o.xU)({color:"red"}),(0,o.iA)({color:"red"}),(0,o._1)({color:"red"})],yellow:[(0,o.xU)({color:"yellow"}),(0,o.iA)({color:"yellow"}),(0,o._1)({color:"yellow"})],orange:[(0,o.xU)({color:"orange"}),(0,o.iA)({color:"orange"}),(0,o._1)({color:"orange"})],green:[(0,o.xU)({color:"green"}),(0,o.iA)({color:"green"}),(0,o._1)({color:"green"})],lime:[(0,o.xU)({color:"lime"}),(0,o.iA)({color:"lime"}),(0,o._1)({color:"lime"})],blue:[(0,o.xU)({color:"blue"}),(0,o.iA)({color:"blue"}),(0,o._1)({color:"blue"})],sky:[(0,o.xU)({color:"sky"}),(0,o.iA)({color:"sky"}),(0,o._1)({color:"sky"})],indigo:[(0,o.xU)({color:"indigo"}),(0,o.iA)({color:"indigo"}),(0,o._1)({color:"indigo"})],purple:[(0,o.xU)({color:"purple"}),(0,o.iA)({color:"purple"}),(0,o._1)({color:"purple"})],pink:[(0,o.xU)({color:"pink"}),(0,o.iA)({color:"pink"}),(0,o._1)({color:"pink"})],brand:[(0,o.xU)({color:"brand"}),(0,o.iA)({color:"brand"}),(0,o._1)({color:"brand"})],gray:[(0,o.xU)({color:"gray"}),(0,o.iA)({color:"gray"}),(0,o._1)({color:"gray"})]}},defaultVariants:{color:"gray"}}),Banner=e=>{let{Icon:r,className:n,title:o}=e;return(0,t.jsx)("div",{className:(0,a.m6)(s({color:e.color}),e.className),children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{className:"flex-shrink-0",children:(0,t.jsx)(r,{className:(0,a.dV)("h-5 w-5"),"aria-hidden":"true"})}),(0,t.jsxs)("div",{className:"ml-3 flex-1",children:[(0,t.jsx)("h3",{className:(0,a.dV)("text-sm font-bold"),children:e.title}),(0,t.jsx)("div",{className:"mt-2 text-sm",children:e.children})]})]})})}},94809:function(e,r,n){"use strict";n.d(r,{d:function(){return f},z:function(){return p}});var t=n(72612),o=n(82157),a=n.n(o),i=n(63278),s=n(39164),l=n(73918),c=n(3496),d=n(44649),u=n(35088);let f=(0,l.j)("inline-flex items-center justify-center border font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 capitalize relative active:translate-y-px active:scale-[99%] active:outline-none transition-all",{variants:{variant:{danger:(0,i.dV)("text-red-50 bg-red-500/70 hover:bg-red-600 border-transparent focus:ring-offset-2 focus:ring-red-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--red-900)),_0px_1px_0px_0px_hsl(var(--red-400)_/_50%)_inset]"),warning:(0,i.dV)("text-yellow-50 bg-yellow-400/70 hover:bg-yellow-600 border-transparent focus:ring-offset-2 focus:ring-yellow-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--yellow-900)),_0px_1px_0px_0px_hsl(var(--yellow-400)_/_50%)_inset]"),info:(0,i.dV)("text-blue-50 bg-sky-400/70 hover:bg-sky-600 border-transparent focus:ring-offset-2 focus:ring-sky-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--sky-900)),_0px_1px_0px_0px_hsl(var(--sky-400)_/_50%)_inset]"),primary:(0,i.dV)("text-white bg-brand-400/50 hover:bg-brand-700 border-transparent focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--brand-900)),_0px_1px_0px_0px_hsl(var(--brand-400)_/_50%)_inset]"),success:"text-green-100 bg-green-500 hover:bg-green-600 border-transparent focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900",indeterminate:(0,i.dV)("border-transparent bg-zinc-100 hover:bg-zinc-200 text-black dark:text-zinc-300 dark:bg-zinc-800 dark:transparent dark:hover:bg-zinc-700 dark:hover:text-zinc-100 dark:hover:transparent focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--zinc-900)),_0px_1px_0px_0px_hsl(var(--zinc-400)_/_20%)_inset]"),outline:"border-zinc-700 shadow-none bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-500/30 hover:border-zinc-500/50 hover:text-zinc-800 dark:hover:text-zinc-200 focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900",plain:"border-transparent shadow-none bg-transparent text-zinc-700 dark:text-zinc-300 hover:underline hover:text-zinc-800 dark:hover:text-zinc-200 focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900"},disabled:{true:"opacity-60 cursor-not-allowed"},size:{sm:"px-2 py-1 text-xs gap-2",lg:"px-6 py-3 text-lg gap-4",default:"px-3 py-2 text-sm gap-2",icon:"h-9 w-9","icon-sm":"h-6 w-6","icon-xs":"h-4 w-4"}},compoundVariants:[{variant:"primary",disabled:!0,class:"hover:bg-brand-400/50"},{variant:"danger",disabled:!0,class:"hover:bg-red-500/70"},{variant:"warning",disabled:!0,class:"hover:bg-yellow-500"},{variant:"indeterminate",disabled:!0,class:"hover:bg-zinc-100 dark:hover:bg-zinc-800"},{variant:"info",disabled:!0,class:"hover:bg-sky-400/70"}],defaultVariants:{variant:"primary",size:"default",disabled:!1}}),p=(0,s.forwardRef)(function(e,r){let{variant:n,disabled:o,size:l,href:p,target:x,onClick:m,title:g,rel:h,dropdownItems:y,className:b,children:v,...k}=e,w=(0,i.m6)(f({variant:n,disabled:o,size:l}),b);return p?(0,t.jsx)(a(),{href:p,ref:r,className:w,target:x,onClick:m,title:g,rel:h,children:v}):y&&y.length&&null==m?(0,t.jsxs)(c.v,{as:"span",className:"relative inline-block text-left",children:[(0,t.jsxs)(c.v.Button,{className:w,title:g,disabled:!!o,children:[v,(0,t.jsx)(u,{className:"-mr-2 h-5 w-5","aria-hidden":"true"})]}),(0,t.jsx)(d.u,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,t.jsx)(c.v.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-zinc-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-800 dark:bg-zinc-900 dark:shadow-black dark:ring-zinc-800",children:y.map(e=>(0,t.jsx)("div",{className:"py-1",children:(0,t.jsx)(c.v.Item,{children:r=>{let{active:n}=r;return(0,t.jsx)("span",{onClick:e.onClick,className:(0,i.dV)(n?"bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100":"text-zinc-700 dark:text-zinc-300","block cursor-pointer break-words px-4 py-2 text-sm"),children:e.title})}})},e.title))})})]}):(0,t.jsx)("button",{ref:r,className:w,onClick:o?void 0:m,title:g,...k,children:v})})},98130:function(e,r,n){"use strict";n.d(r,{$:function(){return Spinner}});var t=n(72612),o=n(63278);let Spinner=e=>{var r,n;return(0,t.jsxs)("svg",{className:(0,o.m6)("h-5 w-5 animate-spin text-black/50 dark:text-white/50",e.noMargin?"":"-ml-1 mr-3",e.className),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-20",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:null!==(r=e.strokeWidth)&&void 0!==r?r:4}),(0,t.jsx)("circle",{className:"opacity-100",cx:"12",cy:"12",r:"10",strokeDasharray:10*Math.PI/3,strokeLinecap:"round",stroke:"currentColor",strokeWidth:null!==(n=e.strokeWidth)&&void 0!==n?n:4})]})}},66751:function(e,r,n){"use strict";n.d(r,{$N:function(){return p},Be:function(){return x},Vq:function(){return l},cZ:function(){return f},fK:function(){return DialogHeader},hg:function(){return c}});var t=n(72612),o=n(39164),a=n(19958),i=n(90077),s=n(64929);let l=a.fC,c=a.xz,d=a.h_;a.x8;let u=o.forwardRef((e,r)=>{let{className:n,...o}=e;return(0,t.jsx)(a.aV,{ref:r,className:(0,s.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...o})});u.displayName=a.aV.displayName;let f=o.forwardRef((e,r)=>{let{className:n,children:o,...l}=e;return(0,t.jsxs)(d,{children:[(0,t.jsx)(u,{}),(0,t.jsxs)(a.VY,{ref:r,className:(0,s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...l,children:[o,(0,t.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[(0,t.jsx)(i.Pxu,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=a.VY.displayName;let DialogHeader=e=>{let{className:r,...n}=e;return(0,t.jsx)("div",{className:(0,s.cn)("flex flex-col space-y-1.5 text-center sm:text-left",r),...n})};DialogHeader.displayName="DialogHeader";let p=o.forwardRef((e,r)=>{let{className:n,...o}=e;return(0,t.jsx)(a.Dx,{ref:r,className:(0,s.cn)("text-lg font-semibold leading-none tracking-tight",n),...o})});p.displayName=a.Dx.displayName;let x=o.forwardRef((e,r)=>{let{className:n,...o}=e;return(0,t.jsx)(a.dk,{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",n),...o})});x.displayName=a.dk.displayName}},function(e){e.O(0,[6545,9996,364,6986,6639,966,8965,5360,3790,453,2705,9754,4787,5591,5428,5033,1563,1880,8833,7163,9602,1087,4595,7652,8888,9817,9321,8458,1744],function(){return e(e.s=79162)}),_N_E=e.O()}]);
//# sourceMappingURL=page-7ae5107fb5e3196f.js.map