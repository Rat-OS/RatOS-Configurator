(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7571],{35088:function(n,a,c){let f=c(39164),v=f.forwardRef(function({title:n,titleId:a,...c},v){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:v,"aria-labelledby":a},c),n?f.createElement("title",{id:a},n):null,f.createElement("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"}))});n.exports=v},65826:function(n,a,c){let f=c(39164),v=f.forwardRef(function({title:n,titleId:a,...c},v){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:v,"aria-labelledby":a},c),n?f.createElement("title",{id:a},n):null,f.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))});n.exports=v},19425:function(n,a,c){"use strict";c.d(a,{R:function(){return v}});var f,v=((f=v||{}).Space=" ",f.Enter="Enter",f.Escape="Escape",f.Backspace="Backspace",f.Delete="Delete",f.ArrowLeft="ArrowLeft",f.ArrowUp="ArrowUp",f.ArrowRight="ArrowRight",f.ArrowDown="ArrowDown",f.Home="Home",f.End="End",f.PageUp="PageUp",f.PageDown="PageDown",f.Tab="Tab",f)},3496:function(n,a,c){"use strict";c.d(a,{v:function(){return en}});var f,v,g,b,I=c(39164),R=c(43235),E=c(1245),w=c(32982),x=c(77940),S=c(84425),k=c(23285),M=c(31430),A=c(19425),N=((f=N||{})[f.First=0]="First",f[f.Previous=1]="Previous",f[f.Next=2]="Next",f[f.Last=3]="Last",f[f.Specific=4]="Specific",f[f.Nothing=5]="Nothing",f),D=c(24194),j=c(98089),L=c(31463),C=c(74641),z=c(67387),H=c(83915),B=c(95050),Q=c(21401);function t(n){return[n.screenX,n.screenY]}var $=((v=$||{})[v.Open=0]="Open",v[v.Closed=1]="Closed",v),Y=((g=Y||{})[g.Pointer=0]="Pointer",g[g.Other=1]="Other",g),q=((b=q||{})[b.OpenMenu=0]="OpenMenu",b[b.CloseMenu=1]="CloseMenu",b[b.GoToItem=2]="GoToItem",b[b.Search=3]="Search",b[b.ClearSearch=4]="ClearSearch",b[b.RegisterItem=5]="RegisterItem",b[b.UnregisterItem=6]="UnregisterItem",b);function U(n,a=n=>n){let c=null!==n.activeItemIndex?n.items[n.activeItemIndex]:null,f=(0,j.z2)(a(n.items.slice()),n=>n.dataRef.current.domRef.current),v=c?f.indexOf(c):null;return -1===v&&(v=null),{items:f,activeItemIndex:v}}let _={1:n=>1===n.menuState?n:{...n,activeItemIndex:null,menuState:1},0:n=>0===n.menuState?n:{...n,menuState:0},2:(n,a)=>{var c;let f=U(n),v=function(n,a){let c=a.resolveItems();if(c.length<=0)return null;let f=a.resolveActiveIndex(),v=null!=f?f:-1,g=(()=>{switch(n.focus){case 0:return c.findIndex(n=>!a.resolveDisabled(n));case 1:{let n=c.slice().reverse().findIndex((n,c,f)=>(-1===v||!(f.length-c-1>=v))&&!a.resolveDisabled(n));return -1===n?n:c.length-1-n}case 2:return c.findIndex((n,c)=>!(c<=v)&&!a.resolveDisabled(n));case 3:{let n=c.slice().reverse().findIndex(n=>!a.resolveDisabled(n));return -1===n?n:c.length-1-n}case 4:return c.findIndex(c=>a.resolveId(c)===n.id);case 5:return null;default:!function(n){throw Error("Unexpected object: "+n)}(n)}})();return -1===g?f:g}(a,{resolveItems:()=>f.items,resolveActiveIndex:()=>f.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.current.disabled});return{...n,...f,searchQuery:"",activeItemIndex:v,activationTrigger:null!=(c=a.trigger)?c:1}},3:(n,a)=>{let c=""!==n.searchQuery?0:1,f=n.searchQuery+a.value.toLowerCase(),v=(null!==n.activeItemIndex?n.items.slice(n.activeItemIndex+c).concat(n.items.slice(0,n.activeItemIndex+c)):n.items).find(n=>{var a;return(null==(a=n.dataRef.current.textValue)?void 0:a.startsWith(f))&&!n.dataRef.current.disabled}),g=v?n.items.indexOf(v):-1;return -1===g||g===n.activeItemIndex?{...n,searchQuery:f}:{...n,searchQuery:f,activeItemIndex:g,activationTrigger:1}},4:n=>""===n.searchQuery?n:{...n,searchQuery:"",searchActiveItemIndex:null},5:(n,a)=>{let c=U(n,n=>[...n,{id:a.id,dataRef:a.dataRef}]);return{...n,...c}},6:(n,a)=>{let c=U(n,n=>{let c=n.findIndex(n=>n.id===a.id);return -1!==c&&n.splice(c,1),n});return{...n,...c,activationTrigger:1}}},K=(0,I.createContext)(null);function O(n){let a=(0,I.useContext)(K);if(null===a){let a=Error(`<${n} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,O),a}return a}function Te(n,a){return(0,R.E)(a.type,_,n,a)}K.displayName="MenuContext";let G=I.Fragment,W=(0,E.yV)(function(n,a){let c=(0,I.useReducer)(Te,{menuState:1,buttonRef:(0,I.createRef)(),itemsRef:(0,I.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:f,itemsRef:v,buttonRef:g},b]=c,w=(0,k.T)(a);(0,L.O)([g,v],(n,a)=>{var c;b({type:1}),(0,j.sP)(a,j.tJ.Loose)||(n.preventDefault(),null==(c=g.current)||c.focus())},0===f);let x=(0,Q.z)(()=>{b({type:1})}),S=(0,I.useMemo)(()=>({open:0===f,close:x}),[f,x]);return I.createElement(K.Provider,{value:c},I.createElement(z.up,{value:(0,R.E)(f,{0:z.ZM.Open,1:z.ZM.Closed})},(0,E.sY)({ourProps:{ref:w},theirProps:n,slot:S,defaultTag:G,name:"Menu"})))}),J=(0,E.yV)(function(n,a){var c;let f=(0,M.M)(),{id:v=`headlessui-menu-button-${f}`,...g}=n,[b,R]=O("Menu.Button"),w=(0,k.T)(b.buttonRef,a),S=(0,x.G)(),j=(0,Q.z)(n=>{switch(n.key){case A.R.Space:case A.R.Enter:case A.R.ArrowDown:n.preventDefault(),n.stopPropagation(),R({type:0}),S.nextFrame(()=>R({type:2,focus:N.First}));break;case A.R.ArrowUp:n.preventDefault(),n.stopPropagation(),R({type:0}),S.nextFrame(()=>R({type:2,focus:N.Last}))}}),L=(0,Q.z)(n=>{n.key===A.R.Space&&n.preventDefault()}),C=(0,Q.z)(a=>{if((0,D.P)(a.currentTarget))return a.preventDefault();n.disabled||(0===b.menuState?(R({type:1}),S.nextFrame(()=>{var n;return null==(n=b.buttonRef.current)?void 0:n.focus({preventScroll:!0})})):(a.preventDefault(),R({type:0})))}),z=(0,I.useMemo)(()=>({open:0===b.menuState}),[b]),B={ref:w,id:v,type:(0,H.f)(n,b.buttonRef),"aria-haspopup":"menu","aria-controls":null==(c=b.itemsRef.current)?void 0:c.id,"aria-expanded":n.disabled?void 0:0===b.menuState,onKeyDown:j,onKeyUp:L,onClick:C};return(0,E.sY)({ourProps:B,theirProps:g,slot:z,defaultTag:"button",name:"Menu.Button"})}),Z=E.AN.RenderStrategy|E.AN.Static,ee=(0,E.yV)(function(n,a){var c,f;let v=(0,M.M)(),{id:g=`headlessui-menu-items-${v}`,...b}=n,[R,S]=O("Menu.Items"),D=(0,k.T)(R.itemsRef,a),L=(0,B.i)(R.itemsRef),H=(0,x.G)(),$=(0,z.oJ)(),Y=null!==$?$===z.ZM.Open:0===R.menuState;(0,I.useEffect)(()=>{let n=R.itemsRef.current;n&&0===R.menuState&&n!==(null==L?void 0:L.activeElement)&&n.focus({preventScroll:!0})},[R.menuState,R.itemsRef,L]),(0,C.B)({container:R.itemsRef.current,enabled:0===R.menuState,accept:n=>"menuitem"===n.getAttribute("role")?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(n){n.setAttribute("role","none")}});let q=(0,Q.z)(n=>{var a,c;switch(H.dispose(),n.key){case A.R.Space:if(""!==R.searchQuery)return n.preventDefault(),n.stopPropagation(),S({type:3,value:n.key});case A.R.Enter:if(n.preventDefault(),n.stopPropagation(),S({type:1}),null!==R.activeItemIndex){let{dataRef:n}=R.items[R.activeItemIndex];null==(c=null==(a=n.current)?void 0:a.domRef.current)||c.click()}(0,j.wI)(R.buttonRef.current);break;case A.R.ArrowDown:return n.preventDefault(),n.stopPropagation(),S({type:2,focus:N.Next});case A.R.ArrowUp:return n.preventDefault(),n.stopPropagation(),S({type:2,focus:N.Previous});case A.R.Home:case A.R.PageUp:return n.preventDefault(),n.stopPropagation(),S({type:2,focus:N.First});case A.R.End:case A.R.PageDown:return n.preventDefault(),n.stopPropagation(),S({type:2,focus:N.Last});case A.R.Escape:n.preventDefault(),n.stopPropagation(),S({type:1}),(0,w.k)().nextFrame(()=>{var n;return null==(n=R.buttonRef.current)?void 0:n.focus({preventScroll:!0})});break;case A.R.Tab:n.preventDefault(),n.stopPropagation(),S({type:1}),(0,w.k)().nextFrame(()=>{(0,j.EO)(R.buttonRef.current,n.shiftKey?j.TO.Previous:j.TO.Next)});break;default:1===n.key.length&&(S({type:3,value:n.key}),H.setTimeout(()=>S({type:4}),350))}}),_=(0,Q.z)(n=>{n.key===A.R.Space&&n.preventDefault()}),K=(0,I.useMemo)(()=>({open:0===R.menuState}),[R]),G={"aria-activedescendant":null===R.activeItemIndex||null==(c=R.items[R.activeItemIndex])?void 0:c.id,"aria-labelledby":null==(f=R.buttonRef.current)?void 0:f.id,id:g,onKeyDown:q,onKeyUp:_,role:"menu",tabIndex:0,ref:D};return(0,E.sY)({ourProps:G,theirProps:b,slot:K,defaultTag:"div",features:Z,visible:Y,name:"Menu.Items"})}),et=I.Fragment,en=Object.assign(W,{Button:J,Items:ee,Item:(0,E.yV)(function(n,a){let c,f=(0,M.M)(),{id:v=`headlessui-menu-item-${f}`,disabled:g=!1,...b}=n,[R,x]=O("Menu.Item"),A=null!==R.activeItemIndex&&R.items[R.activeItemIndex].id===v,D=(0,I.useRef)(null),L=(0,k.T)(a,D);(0,S.e)(()=>{if(0!==R.menuState||!A||0===R.activationTrigger)return;let n=(0,w.k)();return n.requestAnimationFrame(()=>{var n,a;null==(a=null==(n=D.current)?void 0:n.scrollIntoView)||a.call(n,{block:"nearest"})}),n.dispose},[D,A,R.menuState,R.activationTrigger,R.activeItemIndex]);let C=(0,I.useRef)({disabled:g,domRef:D});(0,S.e)(()=>{C.current.disabled=g},[C,g]),(0,S.e)(()=>{var n,a;C.current.textValue=null==(a=null==(n=D.current)?void 0:n.textContent)?void 0:a.toLowerCase()},[C,D]),(0,S.e)(()=>(x({type:5,id:v,dataRef:C}),()=>x({type:6,id:v})),[C,v]);let z=(0,Q.z)(()=>{x({type:1})}),H=(0,Q.z)(n=>{if(g)return n.preventDefault();x({type:1}),(0,j.wI)(R.buttonRef.current)}),B=(0,Q.z)(()=>{if(g)return x({type:2,focus:N.Nothing});x({type:2,focus:N.Specific,id:v})}),$=(c=(0,I.useRef)([-1,-1]),{wasMoved(n){let a=t(n);return(c.current[0]!==a[0]||c.current[1]!==a[1])&&(c.current=a,!0)},update(n){c.current=t(n)}}),Y=(0,Q.z)(n=>$.update(n)),q=(0,Q.z)(n=>{!$.wasMoved(n)||g||A||x({type:2,focus:N.Specific,id:v,trigger:0})}),_=(0,Q.z)(n=>{$.wasMoved(n)&&!g&&A&&x({type:2,focus:N.Nothing})}),K=(0,I.useMemo)(()=>({active:A,disabled:g,close:z}),[A,g,z]);return(0,E.sY)({ourProps:{id:v,ref:L,role:"menuitem",tabIndex:!0===g?void 0:-1,"aria-disabled":!0===g||void 0,disabled:void 0,onClick:H,onFocus:B,onPointerEnter:Y,onMouseEnter:Y,onPointerMove:q,onMouseMove:q,onPointerLeave:_,onMouseLeave:_},theirProps:b,slot:K,defaultTag:et,name:"Menu.Item"})})})},77940:function(n,a,c){"use strict";c.d(a,{G:function(){return p}});var f=c(39164),v=c(32982);function p(){let[n]=(0,f.useState)(v.k);return(0,f.useEffect)(()=>()=>n.dispose(),[n]),n}},21401:function(n,a,c){"use strict";c.d(a,{z:function(){return o}});var f=c(39164),v=c(63588);let o=function(n){let a=(0,v.E)(n);return f.useCallback((...n)=>a.current(...n),[a])}},31430:function(n,a,c){"use strict";c.d(a,{M:function(){return R}});var f,v=c(39164),g=c(84425),b=c(43891),I=c(88230);let R=null!=(f=v.useId)?f:function(){let n=(0,b.H)(),[a,c]=v.useState(n?()=>I.O.nextId():null);return(0,g.e)(()=>{null===a&&c(I.O.nextId())},[a]),null!=a?""+a:void 0}},84425:function(n,a,c){"use strict";c.d(a,{e:function(){return l}});var f=c(39164),v=c(88230);let l=(n,a)=>{v.O.isServer?(0,f.useEffect)(n,a):(0,f.useLayoutEffect)(n,a)}},63588:function(n,a,c){"use strict";c.d(a,{E:function(){return s}});var f=c(39164),v=c(84425);function s(n){let a=(0,f.useRef)(n);return(0,v.e)(()=>{a.current=n},[n]),a}},83915:function(n,a,c){"use strict";c.d(a,{f:function(){return s}});var f=c(39164),v=c(84425);function i(n){var a;if(n.type)return n.type;let c=null!=(a=n.as)?a:"button";if("string"==typeof c&&"button"===c.toLowerCase())return"button"}function s(n,a){let[c,g]=(0,f.useState)(()=>i(n));return(0,v.e)(()=>{g(i(n))},[n.type,n.as]),(0,v.e)(()=>{c||!a.current||a.current instanceof HTMLButtonElement&&!a.current.hasAttribute("type")&&g("button")},[c,a]),c}},43891:function(n,a,c){"use strict";c.d(a,{H:function(){return l}});var f=c(39164),v=c(88230);function l(){let[n,a]=(0,f.useState)(v.O.isHandoffComplete);return n&&!1===v.O.isHandoffComplete&&a(!1),(0,f.useEffect)(()=>{!0!==n&&a(!0)},[n]),(0,f.useEffect)(()=>v.O.handoff(),[]),n}},23285:function(n,a,c){"use strict";c.d(a,{T:function(){return y},h:function(){return T}});var f=c(39164),v=c(21401);let g=Symbol();function T(n,a=!0){return Object.assign(n,{[g]:a})}function y(...n){let a=(0,f.useRef)(n);(0,f.useEffect)(()=>{a.current=n},[n]);let c=(0,v.z)(n=>{for(let c of a.current)null!=c&&("function"==typeof c?c(n):c.current=n)});return n.every(n=>null==n||(null==n?void 0:n[g]))?void 0:c}},74641:function(n,a,c){"use strict";c.d(a,{B:function(){return F}});var f=c(39164),v=c(84425),g=c(92296);function F({container:n,accept:a,walk:c,enabled:b=!0}){let I=(0,f.useRef)(a),R=(0,f.useRef)(c);(0,f.useEffect)(()=>{I.current=a,R.current=c},[a,c]),(0,v.e)(()=>{if(!n||!b)return;let a=(0,g.r)(n);if(!a)return;let c=I.current,f=R.current,v=Object.assign(n=>c(n),{acceptNode:c}),E=a.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,v,!1);for(;E.nextNode();)f(E.currentNode)},[n,b,I,R])}},24194:function(n,a,c){"use strict";function r(n){let a=n.parentElement,c=null;for(;a&&!(a instanceof HTMLFieldSetElement);)a instanceof HTMLLegendElement&&(c=a),a=a.parentElement;let f=(null==a?void 0:a.getAttribute("disabled"))==="";return!(f&&function(n){if(!n)return!1;let a=n.previousElementSibling;for(;null!==a;){if(a instanceof HTMLLegendElement)return!1;a=a.previousElementSibling}return!0}(c))&&f}c.d(a,{P:function(){return r}})},36348:function(n,a,c){"use strict";function e(...n){return n.filter(Boolean).join(" ")}c.d(a,{A:function(){return e}})},32982:function(n,a,c){"use strict";c.d(a,{k:function(){return m}});var f=c(63860);function m(){let n=[],a=[],c={enqueue(n){a.push(n)},addEventListener:(n,a,f,v)=>(n.addEventListener(a,f,v),c.add(()=>n.removeEventListener(a,f,v))),requestAnimationFrame(...n){let a=requestAnimationFrame(...n);return c.add(()=>cancelAnimationFrame(a))},nextFrame:(...n)=>c.requestAnimationFrame(()=>c.requestAnimationFrame(...n)),setTimeout(...n){let a=setTimeout(...n);return c.add(()=>clearTimeout(a))},microTask(...n){let a={current:!0};return(0,f.Y)(()=>{a.current&&n[0]()}),c.add(()=>{a.current=!1})},add:a=>(n.push(a),()=>{let c=n.indexOf(a);if(c>=0){let[a]=n.splice(c,1);a()}}),dispose(){for(let a of n.splice(0))a()},async workQueue(){for(let n of a.splice(0))await n()}};return c}},88230:function(n,a,c){"use strict";c.d(a,{O:function(){return v}});var f=Object.defineProperty,d=(n,a,c)=>a in n?f(n,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[a]=c,r=(n,a,c)=>(d(n,"symbol"!=typeof a?a+"":a,c),c);let v=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},43235:function(n,a,c){"use strict";function u(n,a,...c){if(n in a){let f=a[n];return"function"==typeof f?f(...c):f}let f=Error(`Tried to handle "${n}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,u),f}c.d(a,{E:function(){return u}})},63860:function(n,a,c){"use strict";function t(n){"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(n=>setTimeout(()=>{throw n}))}c.d(a,{Y:function(){return t}})},1245:function(n,a,c){"use strict";c.d(a,{AN:function(){return R},l4:function(){return E},oA:function(){return P},sY:function(){return X},yV:function(){return V}});var f,v,g=c(39164),b=c(36348),I=c(43235),R=((f=R||{})[f.None=0]="None",f[f.RenderStrategy=1]="RenderStrategy",f[f.Static=2]="Static",f),E=((v=E||{})[v.Unmount=0]="Unmount",v[v.Hidden=1]="Hidden",v);function X({ourProps:n,theirProps:a,slot:c,defaultTag:f,features:v,visible:g=!0,name:b}){let R=h(a,n);if(g)return m(R,c,f,b);let E=null!=v?v:0;if(2&E){let{static:n=!1,...a}=R;if(n)return m(a,c,f,b)}if(1&E){let{unmount:n=!0,...a}=R;return(0,I.E)(n?0:1,{0:()=>null,1:()=>m({...a,hidden:!0,style:{display:"none"}},c,f,b)})}return m(R,c,f,b)}function m(n,a={},c,f){var v;let{as:I=c,children:R,refName:E="ref",...w}=T(n,["unmount","static"]),x=void 0!==n.ref?{[E]:n.ref}:{},S="function"==typeof R?R(a):R;w.className&&"function"==typeof w.className&&(w.className=w.className(a));let k={};if(a){let n=!1,c=[];for(let[f,v]of Object.entries(a))"boolean"==typeof v&&(n=!0),!0===v&&c.push(f);n&&(k["data-headlessui-state"]=c.join(" "))}if(I===g.Fragment&&Object.keys(P(w)).length>0){if(!(0,g.isValidElement)(S)||Array.isArray(S)&&S.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${f} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(w).map(n=>`  - ${n}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(n=>`  - ${n}`).join(`
`)].join(`
`));let n=(0,b.A)(null==(v=S.props)?void 0:v.className,w.className),a=n?{className:n}:{};return(0,g.cloneElement)(S,Object.assign({},h(S.props,P(T(w,["ref"]))),k,x,function(...n){return{ref:n.every(n=>null==n)?void 0:a=>{for(let c of n)null!=c&&("function"==typeof c?c(a):c.current=a)}}}(S.ref,x.ref),a))}return(0,g.createElement)(I,Object.assign({},T(w,["ref"]),I!==g.Fragment&&x,I!==g.Fragment&&k),S)}function h(...n){if(0===n.length)return{};if(1===n.length)return n[0];let a={},c={};for(let f of n)for(let n in f)n.startsWith("on")&&"function"==typeof f[n]?(null!=c[n]||(c[n]=[]),c[n].push(f[n])):a[n]=f[n];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(c).map(n=>[n,void 0])));for(let n in c)Object.assign(a,{[n](a,...f){for(let v of c[n]){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;v(a,...f)}}});return a}function V(n){var a;return Object.assign((0,g.forwardRef)(n),{displayName:null!=(a=n.displayName)?a:n.name})}function P(n){let a=Object.assign({},n);for(let n in a)void 0===a[n]&&delete a[n];return a}function T(n,a=[]){let c=Object.assign({},n);for(let n of a)n in c&&delete c[n];return c}},73918:function(n,a,c){"use strict";c.d(a,{j:function(){return cva}});let falsyToString=n=>"boolean"==typeof n?"".concat(n):0===n?"0":n,cx=function(){for(var n,a,c=0,f="";c<arguments.length;)(n=arguments[c++])&&(a=function r(n){var a,c,f="";if("string"==typeof n||"number"==typeof n)f+=n;else if("object"==typeof n){if(Array.isArray(n))for(a=0;a<n.length;a++)n[a]&&(c=r(n[a]))&&(f&&(f+=" "),f+=c);else for(a in n)n[a]&&(f&&(f+=" "),f+=a)}return f}(n))&&(f&&(f+=" "),f+=a);return f},cva=(n,a)=>c=>{var f;if((null==a?void 0:a.variants)==null)return cx(n,null==c?void 0:c.class,null==c?void 0:c.className);let{variants:v,defaultVariants:g}=a,b=Object.keys(v).map(n=>{let a=null==c?void 0:c[n],f=null==g?void 0:g[n];if(null===a)return null;let b=falsyToString(a)||falsyToString(f);return v[n][b]}),I=c&&Object.entries(c).reduce((n,a)=>{let[c,f]=a;return void 0===f||(n[c]=f),n},{}),R=null==a?void 0:null===(f=a.compoundVariants)||void 0===f?void 0:f.reduce((n,a)=>{let{class:c,className:f,...v}=a;return Object.entries(v).every(n=>{let[a,c]=n;return Array.isArray(c)?c.includes({...g,...I}[a]):({...g,...I})[a]===c})?[...n,c,f]:n},[]);return cx(n,b,R,null==c?void 0:c.class,null==c?void 0:c.className)}}}]);
//# sourceMappingURL=7571-410430d906055ea8.js.map