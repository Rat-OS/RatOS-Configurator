(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{10944:function(e,t,n){Promise.resolve().then(n.bind(n,73126))},73126:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Page}});var i=n(45489),a=n(26248),l=n(86418),r=n(49738),s=n(88116),o=n(50962),c=n(44838),d=n(81503);let u={duration:150},Button=e=>{let[t]=(0,s.u)();return(0,a.jsxs)("li",{className:(0,o.d)("flex"),children:["before"===e.subButtonPosition&&(0,a.jsx)("ol",{ref:t,className:"flex divide-x divide-zinc-200 dark:divide-zinc-800",children:e.children}),(0,a.jsx)("div",{className:(0,o.d)("flex items-center",e.isActive&&"dark:bg-zinc-800"),children:(0,a.jsxs)("button",{onClick:e.onClick,type:"button",title:e.title,className:(0,c.m)("flex items-center space-x-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-zinc-700 transition-transform hover:text-black active:scale-95 dark:text-zinc-300 dark:hover:text-white",e.isActive?"hover:text-brand:600 text-brand-600 dark:text-brand-500 dark:hover:text-brand-500":"",e.hidden?"hidden":"",e.className),children:[e.isLoading&&(0,a.jsx)(d.$,{noMargin:!0,className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),e.icon&&!e.isLoading&&(0,a.jsx)(e.icon,{className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),e.name&&(0,a.jsx)("span",{className:"inline",children:e.name})]})}),null!=e.subButtonPosition&&"before"!==e.subButtonPosition&&(0,a.jsx)("ol",{ref:t,className:"flex divide-x divide-zinc-200 dark:divide-zinc-800",children:e.children}),null==e.subButtonPosition&&e.children&&e.children]},e.id)};function Toolbar(e){let[t]=(0,s.u)(u);return(0,a.jsx)("nav",{className:(0,c.m)("flex overflow-hidden rounded-md border border-zinc-200 bg-white shadow dark:border-zinc-800 dark:bg-zinc-900/80",e.className),"aria-label":"Breadcrumb",children:(0,a.jsx)("ol",{role:"list",className:"flex divide-x divide-zinc-200 dark:divide-zinc-800",ref:t,children:e.buttons.map(t=>{var n;let i=null===(n=e.subButtons)||void 0===n?void 0:n.filter(e=>e.parent===t.id);return t.hidden?null:(0,r.createElement)(Button,{...t,key:t.id},null!=i&&i.length>0&&t.isActive?i.map(e=>e.hidden?null:(0,r.createElement)(Button,{...e,key:e.id})):t.children)})})})}var m=n(18754),x=n(91403),f=n(16277),h=n(46251),p=n(75403),b=n(78926),v=n(26781),g=n(3487),j=n(51601),k=n(55282),y=n(48542),w=n(63041),N=n(61352);let useDebounce=(e,t)=>{let n=(0,r.useRef)(),i=(0,r.useRef)([]);return(0,r.useEffect)(()=>()=>{n.current&&clearTimeout(n.current)},[]),(0,r.useCallback)(function(){for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];i.current=l,n.current||(n.current=setTimeout(()=>{e(...i.current),n.current=void 0},t))},[e,t])};var z=n(65778);let C={pixelPrMm:160,outerNozzleDiameter:1,flipVertical:!1,flipHorizontal:!1},CameraSettingsDialog=e=>{var t,n;let i=(0,r.useRef)(!1),[l,s,o]=(0,N.Fu)("RatOS","camera-settings",C),[d,u]=(0,r.useState)(o.isFetched?l.pixelPrMm.toFixed(2):null),[m,x]=(0,r.useState)(o.isFetched?l.outerNozzleDiameter.toFixed(2):null),f=useDebounce(s,200);return(0,r.useEffect)(()=>{if(o.isFetched&&!1===i.current){var e,t;u(null!==(e=null==l?void 0:l.pixelPrMm.toFixed(2))&&void 0!==e?e:C.pixelPrMm.toFixed(2)),x(null!==(t=null==l?void 0:l.outerNozzleDiameter.toFixed(2))&&void 0!==t?t:C.outerNozzleDiameter.toFixed(2)),i.current=!0}},[l,o.isFetched]),(0,a.jsxs)("div",{className:(0,c.m)("scroll absolute left-5 top-1/2 max-h-[50%] w-80 -translate-y-1/2 transform-gpu overflow-y-auto rounded-md border-y border-r border-zinc-800 bg-zinc-100 p-5 shadow-lg transition-all dark:bg-zinc-900/70",e.isVisible?"translate-x-0 opacity-100":"pointer-events-none -translate-x-8 opacity-0",e.className),onWheel:e=>{e.stopPropagation()},children:[(0,a.jsxs)("h3",{className:"flex flex-1 items-center justify-between text-base font-medium leading-7 text-zinc-900 dark:text-zinc-100",children:[(0,a.jsx)("span",{children:"Camera Settings"}),(0,a.jsx)(z,{className:"h-5 w-5 cursor-pointer",onClick:()=>e.toggle(!e.isVisible)})]}),(0,a.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800",children:[(0,a.jsx)(y.o,{label:"Pixel per mm",type:"number",value:null!=d?d:"",placeholder:o.isFetched?void 0:"Loading...",onChange:e=>{let t=parseFloat(e);u(e),isNaN(t)||f(e=>({...e,pixelPrMm:t}))},error:isNaN(parseFloat(null!=d?d:""))?"Not a valid number":void 0}),(0,a.jsx)(y.o,{label:"Outer Nozzle Diameter",type:"number",step:.1,value:null!=m?m:"",placeholder:o.isFetched?void 0:"Loading...",onChange:e=>{let t=parseFloat(e);console.log(e,t),x(e),isNaN(t)||f(e=>({...e,outerNozzleDiameter:t}))},error:isNaN(parseFloat(null!=m?m:""))?"Not a valid number":void 0}),(0,a.jsx)(w.Z,{label:"Flip vertical",onChange:e=>s({...null!=l?l:C,flipVertical:null!=e&&e}),description:"Whether to flip the camera vertically",value:null!==(t=null==l?void 0:l.flipVertical)&&void 0!==t?t:C.flipVertical}),(0,a.jsx)(w.Z,{label:"Flip hoprizontal",onChange:e=>s({...null!=l?l:C,flipHorizontal:null!=e&&e}),description:"Whether to flip the camera horizontally",value:null!==(n=null==l?void 0:l.flipHorizontal)&&void 0!==n?n:C.flipHorizontal})]})]})};var S=n(21863);let ExposureIcon=e=>(0,a.jsxs)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",className:e.className,children:[(0,a.jsx)("path",{fill:"currentColor",d:"M456,40H56A16,16,0,0,0,40,56V456a16,16,0,0,0,16,16H456a16,16,0,0,0,16-16V56A16,16,0,0,0,456,40ZM72,72H417.373L72,417.373ZM440,440H94.627L440,94.627Z"}),(0,a.jsx)("polygon",{fill:"currentColor",points:"336 368 336 408 368 408 368 368 408 368 408 336 368 336 368 296 336 296 336 336 296 336 296 368 336 368"}),(0,a.jsx)("rect",{width:"112",height:"32",x:"112",y:"136",fill:"currentColor"})]});var _=n(74193),O=n(19731),T=n(20978),E=n(73838);let useGcodeCommand=()=>{let e=(0,N.xH)("printer.gcode.script");return(0,r.useCallback)(async function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];let l=[t[0]];i.forEach((e,n)=>{l.push(e.toString(),t[n+1])});let r=l.join("");await e.mutateAsync({script:r}),console.log(r)},[e])};function _templateObject(){let e=(0,i._)(["G91\nG0 Z1"],["G91\\nG0 Z1"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,i._)(["G91\nG0 Z0.5"],["G91\\nG0 Z0.5"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,i._)(["G91\nG0 Z0.1"],["G91\\nG0 Z0.1"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,i._)(["G91\nG0 Z-0.1"],["G91\\nG0 Z-0.1"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,i._)(["G91\nG0 Z-0.5"],["G91\\nG0 Z-0.5"]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,i._)(["G91\nG0 Z-1.0"],["G91\\nG0 Z-1.0"]);return _templateObject5=function(){return e},e}let FocusControls=e=>{let t=useGcodeCommand();return(0,a.jsx)("div",{className:(0,c.m)("scroll absolute transform-gpu overflow-y-auto rounded-md border-y border-r border-zinc-800 bg-zinc-100 shadow-lg transition-all dark:bg-zinc-900/70",e.isVisible?" -translate-y-full opacity-100":"pointer-events-none  -translate-y-2/3  opacity-0",e.className),onWheel:e=>{e.stopPropagation()},children:(0,a.jsxs)("ol",{className:"flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800",children:[(0,a.jsx)("li",{className:(0,o.d)("flex"),children:(0,a.jsx)("div",{className:(0,o.d)("flex flex-1 items-center justify-center text-center"),children:(0,a.jsxs)("button",{onClick:()=>t(_templateObject()),type:"button",className:(0,c.m)("flex items-center justify-center space-x-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-100"),children:[(0,a.jsx)(_,{className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"inline",children:"+1.0"})]})})}),(0,a.jsx)("li",{className:(0,o.d)("flex"),children:(0,a.jsx)("div",{className:(0,o.d)("flex flex-1 items-center justify-center text-center"),children:(0,a.jsxs)("button",{onClick:()=>t(_templateObject1()),type:"button",className:(0,c.m)("flex items-center justify-center space-x-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-100"),children:[(0,a.jsx)(O,{className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"inline",children:"+0.5"})]})})}),(0,a.jsx)("li",{className:(0,o.d)("flex"),children:(0,a.jsx)("div",{className:(0,o.d)("flex flex-1 items-center justify-center text-center"),children:(0,a.jsxs)("button",{onClick:()=>t(_templateObject2()),type:"button",className:(0,c.m)("flex items-center justify-center space-x-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-100"),children:[(0,a.jsx)(O,{className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"inline",children:"+0.1"})]})})}),(0,a.jsx)("li",{className:(0,o.d)("flex"),children:(0,a.jsx)("div",{className:(0,o.d)("flex flex-1 items-center justify-center text-center"),children:(0,a.jsxs)("button",{onClick:()=>t(_templateObject3()),type:"button",className:(0,c.m)("flex items-center justify-center space-x-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-100"),children:[(0,a.jsx)(T,{className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"inline",children:"-0.1"})]})})}),(0,a.jsx)("li",{className:(0,o.d)("flex"),children:(0,a.jsx)("div",{className:(0,o.d)("flex flex-1 items-center justify-center text-center"),children:(0,a.jsxs)("button",{onClick:()=>t(_templateObject4()),type:"button",className:(0,c.m)("flex items-center justify-center space-x-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-100"),children:[(0,a.jsx)(T,{className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"inline",children:"-0.5"})]})})}),(0,a.jsx)("li",{className:(0,o.d)("flex"),children:(0,a.jsx)("div",{className:(0,o.d)("flex flex-1 items-center justify-center text-center"),children:(0,a.jsxs)("button",{onClick:()=>t(_templateObject5()),type:"button",className:(0,c.m)("flex items-center justify-center space-x-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-100"),children:[(0,a.jsx)(E,{className:"inline h-5 w-5 flex-shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"inline",children:"-1.0"})]})})})]})})},useWindowSize=()=>{let[e,t]=(0,r.useState)({width:window.innerWidth,height:window.innerHeight});return(0,r.useEffect)(()=>{let handleResize=()=>{requestAnimationFrame(()=>{t({width:window.innerWidth,height:window.innerHeight})})};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),e};var L=n(8930),A=n(26989);let parseOptions=e=>{let t=e.matchAll(/- available option:\s(\w+)\s.+(\[-?\d+\.\.\d+\])/g),n=[];for(let e of t){let[t,i]=e[2].slice(1,-1).split("..").map(e=>parseInt(e,10)),a=n.find(t=>t.key===e[1]);a&&"max"in a&&a.max&&a.max<=i||n.push({key:e[1],min:t,max:["redbalance","bluebalance","greenbalance"].includes(e[1])?2e3:i})}let i=e.matchAll(/- available option:\s(\w+)\s.+(\[-?\d+\.\d+\.\.\d+\.\d+\])/g);for(let e of i){let[t,i]=e[2].slice(1,-1).split("..").map(e=>parseFloat(e)),a=n.find(t=>t.key===e[1]);a&&"max"in a&&a.max&&a.max<=i||n.push({key:e[1],float:!0,min:t,max:["redbalance","bluebalance","greenbalance"].includes(e[1])?2e3:i})}let a=e.matchAll(/- available option:\s(\w+)\s.+(\[false\.\.true\])/g);for(let e of a)n.push({key:e[1],toggle:!0});return n};var R=n(52540);let useCameraSettings=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],[n,i]=(0,r.useState)([]),a=(0,N.bL)("RatOS","camera-stream-settings"),l=(0,N.A4)("RatOS","camera-stream-settings"),s=(0,r.useRef)(l.data);s.current=l.data;let o=(0,r.useMemo)(()=>n.map(e=>{var t,n,i;return e.value=null!==(i=null===(n=s.current)||void 0===n?void 0:null===(t=n[e.key])||void 0===t?void 0:t.value)&&void 0!==i?i:e.value,e}),[n]),c=(0,r.useCallback)(async t=>{let n=await fetch("".concat(e,"/option?compressionquality=").concat(t));i(parseOptions(await n.text()))},[e]),d=(0,r.useCallback)(async(t,i)=>{let r=n.find(e=>e.key===t);if(null==r)throw Error("Invalid option ".concat(t));if(r&&"toggle"in r&&"boolean"!=typeof i)throw Error("Expect a boolean value for ".concat(t,", got ").concat(i));if(r&&"max"in r&&("number"!=typeof i||r.min>i||r.max<i))throw Error("Value ".concat(i," is out of range for ").concat(t));try{let n=await fetch("".concat(e,"/option?").concat(t,"=").concat(i.toString()));if(console.log(n.ok,l.isInitialLoading),n.ok&&!1===l.isInitialLoading){var o,c;console.log("saving",t,i,s.current,(0,R.T)(null!==(o=s.current)&&void 0!==o?o:{},{[t]:{value:i}})),await a.mutateAsync((0,R.T)(null!==(c=s.current)&&void 0!==c?c:{},{[t]:{value:i}}))}return n.ok}catch(e){return!1}},[n,a,e,l]);return(0,r.useEffect)(()=>{if(t&&c(100),t&&l.isFetched&&null!=s.current)for(let t in s.current){var n;let i=null===(n=s.current[t])||void 0===n?void 0:n.value;i&&fetch("".concat(e,"/option?").concat(t,"=").concat(i.toString()))}},[l.isFetched,e,t,c]),{options:o,setOption:d}},Slider=e=>{let{onChange:t,min:n,max:i,initialValue:l,step:s,isBoolean:o}=e,[c,d]=(0,r.useState)(null!=l?l:n),u=useDebounce((0,r.useCallback)(e=>{null==t||t(e)},[t]),100),m=(0,r.useCallback)(e=>{let t=s?parseFloat(e.target.value):parseInt(e.target.value,10);d(t),u(t)},[u,s]);return(0,a.jsxs)("div",{className:"relative mb-6",children:[(0,a.jsx)("input",{type:"range",value:c,onChange:m,min:n,max:i,step:null!=s?s:1,className:"h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 dark:bg-zinc-700"}),(0,a.jsx)("span",{className:"absolute -bottom-6 start-0 text-sm text-zinc-500 dark:text-zinc-400",children:o?"Off":"Min (".concat(n,")")}),!o&&(0,a.jsx)("span",{className:"absolute -bottom-6 start-1/3 -translate-x-1/2 text-sm text-zinc-500 dark:text-zinc-400 rtl:translate-x-1/2",children:(i/3).toFixed(2)}),!o&&(0,a.jsx)("span",{className:"absolute -bottom-6 start-2/3 -translate-x-1/2 text-sm text-zinc-500 dark:text-zinc-400 rtl:translate-x-1/2",children:(i/3*2).toFixed(2)}),(0,a.jsx)("span",{className:"absolute -bottom-6 end-0 text-sm text-zinc-500 dark:text-zinc-400",children:o?"On":"Max (".concat(i,")")})]})};function page_templateObject(){let e=(0,i._)(["_NOZZLE_CALIBRATION_MOVE X="," Y=",""]);return page_templateObject=function(){return e},e}function page_templateObject1(){let e=(0,i._)(["G28"]);return page_templateObject1=function(){return e},e}function page_templateObject2(){let e=(0,i._)(["_NOZZLE_CALIBRATION_LOAD_TOOL T=0"]);return page_templateObject2=function(){return e},e}function page_templateObject3(){let e=(0,i._)(["_NOZZLE_CALIBRATION_LOAD_TOOL T=1"]);return page_templateObject3=function(){return e},e}function page_templateObject4(){let e=(0,i._)(["_NOZZLE_CALIBRATION_SWITCH_LED STATE=",""]);return page_templateObject4=function(){return e},e}function page_templateObject5(){let e=(0,i._)(["_NOZZLE_CALIBRATION_SET_TOOL"]);return page_templateObject5=function(){return e},e}let getCameraUrl=()=>{let e=(0,A.X)();return null==e||""==e.trim()?"/webcam":"http://".concat(e,"/webcam")};function Page(){var e,t;let[n,i]=(0,r.useState)(getCameraUrl());(0,r.useEffect)(()=>{i(getCameraUrl())},[]);let{videoRef:u,connectionState:y}=function(e){let t=(0,r.useRef)(null),n=(0,r.useRef)(null),i=(0,r.useRef)(null),a=(0,r.useRef)(e),l=(0,r.useRef)(!1),[s,o]=(0,r.useState)(null),c=(0,r.useRef)(null),d=(0,r.useCallback)(e=>{if(e.candidate)return fetch(a.current,{body:JSON.stringify({type:"remote_candidate",id:c.current,candidates:[e.candidate]}),headers:{"Content-Type":"application/json"},method:"POST"}).catch(function(e){window.console.error(e)})},[]),u=(0,r.useCallback)(async()=>{i.current&&(i.current.close(),i.current=null),l.current=!0;try{o("new");var a={sdpSemantics:"unified-plan"};document.getElementById("use-stun")&&document.getElementById("use-stun").checked&&(a.iceServers=[{urls:["stun:stun.l.google.com:19302"]}]);let l=new URLSearchParams(e),s=Object.fromEntries(l.entries()),u=await fetch(e,{body:JSON.stringify({type:"request",res:s.res}),headers:{"Content-Type":"application/json"},method:"POST"});if(u.ok){let l=await u.json();l.iceServers&&(a.iceServers=l.iceServers),i.current=new RTCPeerConnection(a),i.current.addTransceiver("video",{direction:"recvonly"}),i.current.addEventListener("track",function(e){if("video"==e.track.kind){if(t.current)t.current.srcObject=e.streams[0];else throw Error("No video ref to set src on")}else n.current&&(n.current.srcObject=e.streams[0])}),i.current.addEventListener("connectionstatechange",()=>{var e;let t=null===(e=i.current)||void 0===e?void 0:e.connectionState;o(null!=t?t:null)}),c.current=l.id,await i.current.setRemoteDescription(l);let s=await i.current.createAnswer();await i.current.setLocalDescription(s),await new Promise(function(e){if(null==i.current)throw Error("peerConnection.current is null");"complete"===i.current.iceGatheringState?e(null):i.current.addEventListener("icegatheringstatechange",function checkState(){if(null==i.current)throw Error("peerConnection.current is null");"complete"===i.current.iceGatheringState&&(i.current.removeEventListener("icegatheringstatechange",checkState),e(null))})}),i.current.addEventListener("icecandidate",d);var r=i.current.localDescription;if(null==r)throw Error("No offer from peerConnection");await fetch(e,{body:JSON.stringify({type:r.type,id:c.current,sdp:r.sdp}),headers:{"Content-Type":"application/json"},method:"POST"})}else o("failed")}catch(e){console.error(e),o("failed")}finally{l.current=!1}},[d,e]);return(0,r.useEffect)(()=>{e&&!1===l.current?u():i.current&&!1===l.current&&i.current.close()},[u,e]),(0,r.useEffect)(()=>{if(["failed","disconnected"].includes(null!=s?s:"")){let e=setTimeout(()=>{u()},5e3);return()=>clearTimeout(e)}},[u,s]),{videoRef:t,audioRef:n,connectionState:s,close:(0,r.useCallback)(()=>{var e;null===(e=i.current)||void 0===e||e.close()},[])}}(n+"/webrtc"),[w]=(0,N.Fu)("RatOS","camera-settings"),z=(0,r.useRef)(null),C=(0,r.useRef)(null),[_,O]=(0,r.useState)(null),[T,E]=(0,r.useState)({x:!1,y:!1}),{options:A,setOption:R}=useCameraSettings(n,"connected"===y),[M,P]=(0,r.useState)(!1),[G,B]=(0,r.useState)(!1),[F,Z]=(0,r.useState)(!1),[I,D]=(0,r.useState)(!1),[H,V]=(0,r.useState)(!1),[W,X]=(0,r.useState)(!1),[U,q]=(0,r.useState)(!1),[J,$]=(0,r.useState)(!1),[Y,Q]=(0,r.useState)(!1),[K,ee]=(0,r.useState)(!1),[et,en]=(0,r.useState)(1),[ei,ea]=(0,r.useState)(!1),el=useGcodeCommand(),[er]=(0,s.u)(),es=useWindowSize(),eo=(0,N.Q)(e=>({tool:"extruder"===e.toolhead.extruder?"T0":"T1",homed_axes:e.toolhead.homed_axes}),"toolhead"),[ec]=(0,S.S)([Y],200,!0),[ed]=(0,S.I)([Y],190,10,!0),eu=(0,r.useCallback)(e=>{var t,n,i,a;let l=null!==(i=null===(t=u.current)||void 0===t?void 0:t.videoWidth)&&void 0!==i?i:1,r=null!==(a=null===(n=z.current)||void 0===n?void 0:n.getBoundingClientRect().width)&&void 0!==a?a:1;return e*et*(r>0&&l>0?r/l:1)},[u.current,et,es]),em=(0,r.useCallback)(e=>{var t,n,i,a;let l=null!==(i=null===(t=u.current)||void 0===t?void 0:t.videoWidth)&&void 0!==i?i:1,r=null!==(a=null===(n=z.current)||void 0===n?void 0:n.getBoundingClientRect().width)&&void 0!==a?a:1;return e/et/(r>0&&l>0?r/l:1)},[u,et]),ex=(0,r.useCallback)(e=>{var t;return eu(e)*(null!==(t=null==w?void 0:w.pixelPrMm)&&void 0!==t?t:0)},[eu,null==w?void 0:w.pixelPrMm,es]),ef=(0,r.useCallback)(e=>{var t;return em(e)/(null!==(t=null==w?void 0:w.pixelPrMm)&&void 0!==t?t:0)},[em,null==w?void 0:w.pixelPrMm]),[eh,ep]=(0,S.S)([et],2e3,!0),eb=eh||I,ev=(0,r.useCallback)(()=>{D(e=>!e),ep()},[ep]);(0,m.useGesture)({onDrag:e=>{if(e.dragging)O([e.offset[0],e.offset[1]]),E({x:e._movementBound[0],y:e._movementBound[1]});else{var t,n;let e=-1*ef(null!==(t=null==_?void 0:_[0])&&void 0!==t?t:0),i=-1*ef(null!==(n=null==_?void 0:_[1])&&void 0!==n?n:0);el(page_templateObject(),e,i),O(null),E({x:!1,y:!1})}},onPinch:e=>{en(t=>Math.max(Math.min(t*e.offset[0],10),1))},onWheel:e=>{0!=e.delta[1]&&!1!=e.wheeling&&!1!=e.intentional&&(e.delta[1]<0?en(e=>Math.max(.85*e,1)):en(e=>Math.min(1.15*e,10)))}},{target:u,enabled:"connected"===y,drag:{enabled:M,from:()=>[0,0],bounds:{left:-ex(1),right:ex(1),top:-ex(1),bottom:ex(1)},rubberband:!0},wheel:{axis:"y",rubberband:!1},pinch:{scaleBounds:{min:1,max:10},pinchOnWheel:!1,rubberband:!0}});let eg=[{icon:l,id:"home",title:"Home the printer (G28)",isLoading:G,onClick:async()=>{B(!0),await el(page_templateObject1()),B(!1)},isActive:(null==eo?void 0:eo.homed_axes)==="xyz"},{name:"T0",id:"t0",title:"Switch to tool 0 (T0)",onClick:()=>{el(page_templateObject2())},isActive:(null==eo?void 0:eo.tool)==="T0"},{name:"T1",id:"t1",title:"Switch to tool 1 (T1)",onClick:()=>{el(page_templateObject3())},isActive:(null==eo?void 0:eo.tool)==="T1"}],ej=[{icon:x,id:"zoom",title:"".concat(eb?"Hide":"Show"," zoom controls"),subButtonPosition:"before",className:"font-mono",name:et>=10?"MAX!":(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L.ZP,{preserveValue:!0,start:0,end:Math.round(100*et),duration:.15}),"%"]}),onClick:()=>{ev()},isActive:eb},{icon:f,id:"light",title:"".concat(K?"Turn off":"Turn on"," the LEDs"),onClick:()=>{let e=!K;el(page_templateObject4(),e?1:0),ee(e)},isActive:K}],ek=(0,r.useMemo)(()=>[{name:"Settings",icon:h,id:"settings",title:"Show camera settings dialog",onClick:()=>{Z(e=>!e)},isActive:F},{name:(null==eo?void 0:eo.tool)==="T0"?"Set reference":"Set offset",icon:p,isLoading:ec,id:"reference",title:"Set the ".concat((null==eo?void 0:eo.tool)==="T0"?"T0 reference point":"T1 offset"),onClick:async()=>{Q(!0),await el(page_templateObject5()),Q(!1)},isActive:ec},{name:"Move",icon:b,id:"move",title:"".concat(M?"Disable":"Enable"," drag and drop calibration"),onClick:()=>{P(e=>!e)},isActive:M}],[F,eo,ec,M,el]),ey=(0,r.useMemo)(()=>{let e=[{icon:v,id:"settings",subButtonPosition:"before",title:"".concat(ei?"Hide":"Show"," camera controls"),onClick:()=>{ei&&(q(!1),V(!1),X(!1),$(!1)),ea(e=>!e)},isActive:ei}];return e},[ei]),ew=(0,r.useMemo)(()=>{let e=[{icon:g,id:"focus",parent:"settings",hidden:W||J||H,name:"Focus",title:"".concat(U?"Hide":"Show"," focus controls"),children:(0,a.jsx)(FocusControls,{isVisible:U,toggle:q}),onClick:()=>{q(e=>!e),V(!1),X(!1),$(!1)},isActive:U},{icon:ExposureIcon,id:"exposure",parent:"settings",hidden:W||J||U,title:"".concat(H?"Hide":"Show"," exposure controls"),name:"Exposure",onClick:()=>{V(e=>!e),X(!1),$(!1),q(!1)},isActive:H},{icon:j,id:"color",parent:"settings",title:"".concat(W?"Hide":"Show"," color controls"),hidden:H||J||U,name:"Color",onClick:()=>{X(e=>!e),V(!1),$(!1),q(!1)},isActive:W},{icon:k,id:"advanced-camera-controls",parent:"settings",title:"".concat(J?"Hide":"Show"," advanced camera controls"),name:"Advanced",hidden:H||W||U,onClick:()=>{$(e=>!e),V(!1),X(!1),q(!1)},isActive:J}];return e.reverse()},[J,H,U,W]),eN=null==_?0:_[0]/et,ez=null==_?0:_[1]/et,eC=(0,r.useMemo)(()=>ex(.2),[ex]),eS=(0,r.useMemo)(()=>ec?eC:ex(w?w.outerNozzleDiameter/2:0),[ex,ec,eC,w]),e_=(0,r.useMemo)(()=>null==z.current||"connected"!==y?0:eS/z.current.getBoundingClientRect().width*100,[y,eS]),eO=(0,r.useMemo)(()=>null==z.current||"connected"!==y?0:eS/z.current.getBoundingClientRect().height*100,[y,eS]),eT=(0,r.useMemo)(()=>ex(.01),[ex]);return(0,a.jsx)("div",{className:"flex h-[calc(100vh_-_64px)] w-full items-center",ref:C,children:(0,a.jsxs)("div",{className:"relative mx-auto flex h-full max-h-full min-h-[50vh] min-w-[50vw] max-w-fit items-center overflow-hidden object-contain shadow-lg",ref:z,children:[(0,a.jsx)("video",{ref:u,className:(0,c.m)("h-full max-h-full w-full min-w-full max-w-full transform-gpu touch-none",M&&"cursor-move",null==_&&"transition-transform ease-in-out"),style:{transform:"scale3d(".concat(et*((null==w?void 0:w.flipHorizontal)?-1:1),", ").concat(et*((null==w?void 0:w.flipVertical)?-1:1),", 1) translate3d(").concat(eN*((null==w?void 0:w.flipHorizontal)?-1:1),"px, ").concat(ez*((null==w?void 0:w.flipVertical)?-1:1),"px, 0)")},autoPlay:!0,muted:!0,playsInline:!0}),(0,a.jsx)(Toolbar,{className:"absolute left-5 top-5",buttons:eg}),(0,a.jsx)(Toolbar,{className:"absolute bottom-5 right-5 overflow-visible",buttons:ey,subButtons:ew}),(0,a.jsx)(Toolbar,{className:"absolute right-5 top-5",buttons:ej,subButtons:[{name:"1X",id:"1x",parent:"zoom",title:"Set zoom to 1X (100%)",className:"font-mono",onClick:()=>{en(1)},isActive:!1},{name:"2X",id:"2x",parent:"zoom",title:"Set zoom to 2X (200%)",className:"font-mono",onClick:()=>{en(2)},isActive:!1},{name:"4X",id:"4x",parent:"zoom",title:"Set zoom to 4X (400%)",className:"font-mono",onClick:()=>{en(4)},isActive:!1}]}),(0,a.jsx)(Toolbar,{className:"absolute bottom-5 left-5",buttons:ek}),(0,a.jsx)(CameraSettingsDialog,{isVisible:F,toggle:Z}),(0,a.jsxs)("div",{className:(0,o.d)("pointer-events-none absolute inset-0 flex items-center justify-center"),children:[(0,a.jsx)("div",{className:(0,o.d)("absolute inset-0",T.x&&T.x>0?"left-0 right-2/3 bg-gradient-to-r from-red-500/70 to-red-500/0":"left-2/3 right-0 bg-gradient-to-l from-red-500/70 to-red-500/0"),style:{opacity:T.x?Math.abs(T.x-(null!==(e=null==_?void 0:_[0])&&void 0!==e?e:0))/200:0}}),(0,a.jsx)("div",{className:(0,o.d)("absolute inset-0",T.y&&T.y>0?"bottom-2/3 top-0 bg-gradient-to-b from-red-500/70 to-red-500/0":"bottom-0 top-2/3 bg-gradient-to-t from-red-500/70 to-red-500/0"),style:{opacity:T.y?Math.abs(T.y-(null!==(t=null==_?void 0:_[1])&&void 0!==t?t:0))/200:0}}),(0,a.jsxs)("svg",{width:"100%",height:"100%",children:[(0,a.jsxs)("g",{className:(0,o.d)("connected"===y&&eS>0?"opacity-100":"opacity-0"),children:[(0,a.jsx)("rect",{x:"50%",y:"".concat(50-eO,"%"),height:"".concat(2*eO,"%"),width:eT,shapeRendering:"geometricPrecision",className:"fill-brand-500 transition-all ease-in-out",style:{transform:"translateX(-".concat(eT/2,")")}}),(0,a.jsx)("rect",{x:"".concat(50-e_,"%"),y:"50%",width:"".concat(2*e_,"%"),height:eT,shapeRendering:"geometricPrecision",className:"fill-brand-500 transition-all ease-in-out",style:{transform:"translateY(-".concat(eT/2,")")}})]}),(0,a.jsx)("circle",{cx:"50%",cy:"50%",r:ed?eS:1.5*eS,fill:"none",className:(0,o.d)("ease-out",ed?"fill-brand-300":"fill-brand-300/0 transition-all duration-700"),shapeRendering:"geometricPrecision",strokeWidth:0}),(0,a.jsx)("circle",{cx:"50%",cy:"50%",r:eC,fill:"none",className:(0,o.d)("stroke-brand-500 transition-all ease-in-out","connected"===y&&eS>0?"opacity-100":"opacity-0"),shapeRendering:"geometricPrecision",strokeWidth:eT}),(0,a.jsx)("circle",{cx:"50%",cy:"50%",r:eS,fill:"none",className:(0,o.d)("stroke-brand-500 transition-all ease-in-out","connected"===y&&eS>0?"opacity-100":"opacity-0"),shapeRendering:"geometricPrecision",strokeWidth:eT})]})]}),(0,a.jsx)("div",{className:"absolute bottom-24 left-1/4 right-1/4 max-h-[50%] overflow-y-scroll rounded-md bg-zinc-900/70 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-400 scrollbar-thumb-rounded-md dark:scrollbar-thumb-zinc-600",children:(0,a.jsxs)("div",{ref:er,children:[H&&A.filter(e=>e.key.toLowerCase().includes("gain")||e.key.toLowerCase().includes("exposure")||e.key.startsWith("Ae")||e.key.toLowerCase().includes("brightness")).filter(e=>"ColourGains"!==e.key).map(e=>(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("label",{className:"block text-center text-base font-semibold capitalize text-zinc-200",children:e.key}),(0,a.jsx)(Slider,{isBoolean:"toggle"in e,min:"toggle"in e?0:"min"in e?e.min:0,initialValue:!0===e.value?1:!1===e.value?0:e.value,max:"toggle"in e?1:"max"in e?e.max:0,step:"float"in e&&e.float?"any":1,onChange:t=>R(e.key,"toggle"in e?!!t:t)})]},e.key)),W&&A.filter(e=>e.key.toLowerCase().includes("saturation")||e.key.toLowerCase().includes("contrast")||e.key.startsWith("Awb")).map(e=>(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("label",{className:"block text-center text-base font-semibold capitalize text-zinc-200",children:e.key}),(0,a.jsx)(Slider,{isBoolean:"toggle"in e,min:"toggle"in e?0:"min"in e?e.min:0,initialValue:!0===e.value?1:!1===e.value?0:e.value,max:"toggle"in e?1:"max"in e?e.max:0,step:"float"in e&&e.float?"any":1,onChange:t=>R(e.key,"toggle"in e?!!t:t)})]},e.key)),J&&A.map(e=>(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("label",{className:"block text-center text-base font-semibold capitalize text-zinc-200",children:e.key}),(0,a.jsx)(Slider,{isBoolean:"toggle"in e,min:"toggle"in e?0:"min"in e?e.min:0,initialValue:!0===e.value?1:!1===e.value?0:e.value,max:"toggle"in e?1:"max"in e?e.max:0,step:"float"in e&&e.float?"any":1,onChange:t=>R(e.key,"toggle"in e?!!t:t)})]},e.key))]})}),(0,a.jsxs)("div",{className:(0,c.m)("pointer-events-none absolute inset-0 flex items-center justify-center"),children:[(0,a.jsx)("h3",{className:(0,c.m)("absolute inset-0 flex items-center justify-center text-xl font-semibold text-rose-500 transition-all dark:text-rose-500","failed"===y?"animate-pulse opacity-100":"opacity-0"),children:"Webcam stream not found"}),(0,a.jsx)(d.$,{noMargin:!0,className:(0,c.m)("h-1/3 w-1/3 animate-spin text-inherit transition-all","text-green-500 dark:text-green-500",("connected"===y||"failed"===y)&&"opacity-0","failed"===y&&"text-rose-500 dark:text-rose-500","connecting"===y&&"text-brand-500 dark:text-brand-500","closed"===y&&"text-yellow-500 dark:text-yellow-500","disconnected"===y&&"text-amber-500 dark:text-amber-500","new"===y&&"text-sky-500 dark:text-sky-500")})]})]})})}},81503:function(e,t,n){"use strict";n.d(t,{$:function(){return Spinner}});var i=n(26248),a=n(44838);let Spinner=e=>(0,i.jsxs)("svg",{className:(0,a.m)("h-5 w-5 animate-spin text-black dark:text-white",e.noMargin?"":"-ml-1 mr-3",e.className),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,i.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,i.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},48542:function(e,t,n){"use strict";n.d(t,{o:function(){return TextInput}});var i=n(26248),a=n(96148),l=n(6181),r=n(33964),s=n(32836),o=n.n(s),c=n(49738),d=n(50962);let TextInput=e=>{let t=(0,c.useRef)(o()(e)),{onChange:n}=e,[s,u]=(0,c.useState)(!1);(0,d.d)("h-5 w-5",(e.error,"text-red-500"));let m=e.error?(0,i.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",children:(0,i.jsx)(r,{className:"h-5 w-5 text-red-500","aria-hidden":"true"})}):null,x=(0,d.d)(e.error?"ring-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 dark:ring-red-500 dark:text-red-400 dark:placeholder-red-700":"ring-zinc-300 text-zinc-900 placeholder-zinc-300 focus:ring-brand-600 dark:ring-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-700 dark:focus:ring-brand-400 ","block w-full rounded-md bg-white py-1.5 pl-3 pr-3 text-leftshadow-sm ring-1 ring-inset focus:outline-none dark:bg-zinc-800 sm:text-sm sm:leading-6 border-0"),f=e.error?(0,i.jsx)("p",{className:"mt-2 text-sm text-red-600 dark:text-red-400",id:t.current+"-error",children:e.error}):null,h=e.help?(0,i.jsx)("p",{className:"mt-2 text-sm text-zinc-500",id:"email-description",children:e.help}):null,p=(0,c.useCallback)(t=>{null==n||n("number"===e.type?parseFloat(t.currentTarget.value):t.currentTarget.value)},[n,e.type]),b=(0,c.useCallback)(()=>{u(e=>!e)},[]),v="password"===e.type?(0,i.jsx)("div",{onClick:b,className:"absolute inset-y-0 ".concat(null!=m?"right-6":"right-0"," flex cursor-pointer items-center pr-3"),children:s?(0,i.jsx)(a,{className:"h-5 w-5 text-zinc-400"}):(0,i.jsx)(l,{className:"h-5 w-5 text-zinc-400"})}):null;return(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-semibold leading-6 text-zinc-700 dark:text-zinc-300",children:e.label}),(0,i.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[(0,i.jsx)("input",{...e,type:s?"text":e.type,className:x,placeholder:e.placeholder,defaultValue:e.defaultValue,value:e.value,onChange:p,"aria-invalid":!!e.error,"aria-describedby":e.error?t.current+"-error":void 0}),m,v]}),null!=f?f:h]})}},63041:function(e,t,n){"use strict";n.d(t,{Z:function(){return Toggle}});var i=n(26248),a=n(40818);n(49738);var l=n(44838),r=n(50962);let Toggle=e=>(0,i.jsxs)(a.r.Group,{as:"div",className:"flex items-center justify-between gap-x-2",children:[(0,i.jsxs)("span",{className:"flex flex-grow flex-col",children:[(0,i.jsx)(a.r.Label,{as:"span",className:(0,l.m)("text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300",e.onLabel&&e.value&&"opacity-70",e.onLabel&&!e.value&&"text-brand-700 dark:text-brand-500"),passive:!0,children:e.label}),e.description&&(0,i.jsx)(a.r.Description,{as:"span",className:"text-sm text-zinc-500 dark:text-zinc-400",children:e.description})]}),(0,i.jsx)(a.r,{checked:e.value,onChange:e.onChange,className:(0,r.d)(e.value&&null==e.onLabel?"bg-brand-600":"bg-zinc-200 dark:bg-zinc-950/50","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"),children:(0,i.jsx)("span",{"aria-hidden":"true",className:(0,r.d)(e.value?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md shadow-black/20 ring-0 transition duration-200 ease-in-out dark:border-t dark:border-zinc-600 dark:bg-zinc-700 dark:shadow-black/100 ")})}),e.onLabel&&(0,i.jsx)("span",{className:"flex flex-grow flex-col",children:(0,i.jsx)(a.r.Label,{as:"span",className:(0,l.m)("text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300",e.onLabel&&!e.value&&"opacity-70",e.onLabel&&e.value&&"text-brand-700 dark:text-brand-500"),passive:!0,children:e.onLabel})})]})},21863:function(e,t,n){"use strict";n.d(t,{I:function(){return useDelayedChangeEffect},S:function(){return useChangeEffect}});var i=n(49738);let useChangeEffect=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],[a,l]=(0,i.useState)(0),r=(0,i.useRef)([...e]);(0,i.useEffect)(()=>{let t=!1;r.current.forEach((n,i)=>{n!==e[i]&&(t=!0)}),t&&l(e=>n?e+1:1),r.current=[...e]},[...e]);let s=(0,i.useCallback)(()=>{l(0)},[]);return(0,i.useEffect)(()=>{if(null!=t&&a>0){let e=setTimeout(()=>{l(0)},t);return()=>{clearTimeout(e)}}},[t,a]),[a>0,s]},useDelayedChangeEffect=function(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],[l,r]=(0,i.useState)(0),s=(0,i.useRef)([...e]),o=(0,i.useRef)(null);(0,i.useEffect)(()=>{let n=!1;if(s.current.forEach((t,i)=>{t!==e[i]&&(n=!0)}),n){let trigger=()=>r(e=>a?e+1:1);o.current=window.setTimeout(()=>{trigger(),o.current=null},t)}s.current=[...e]},[...e]),(0,i.useEffect)(()=>()=>{o.current&&clearTimeout(o.current)},[]);let[c,d]=useChangeEffect([l],n,a);return[c,d]}}},function(e){e.O(0,[393,838,531,346,365,955,399,625,744],function(){return e(e.s=10944)}),_N_E=e.O()}]);