exports.id=5659,exports.ids=[5659],exports.modules={55827:(e,t,r)=>{"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(r(59689));e.exports=(0,n.default)(function(e){var t,r=e.matchUtilities,n=e.matchVariant,i=e.theme,parseValue=function(e){var t,r;return null===(null!==(r=null===(t=e.match(/^(\d+\.\d+|\d+|\.\d+)\D+/))||void 0===t?void 0:t[1])&&void 0!==r?r:null)?null:parseFloat(e)},a=null!==(t=i("containers"))&&void 0!==t?t:{};r({"@container":function(e,t){return{"container-type":e,"container-name":t.modifier}}},{values:{DEFAULT:"inline-size",normal:"normal"},modifiers:"any"}),n("@",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1?arguments[1]:void 0).modifier;return null!==parseValue(e)?"@container ".concat(null!=t?t:""," (min-width: ").concat(e,")"):[]},{values:a,sort:function(e,t){var r,n,i=parseFloat(e.value),a=parseFloat(t.value);if(null===i||null===a)return 0;if(i-a!=0)return i-a;var o=null!==(r=e.modifier)&&void 0!==r?r:"",s=null!==(n=t.modifier)&&void 0!==n?n:"";return""===o&&""!==s?1:""!==o&&""===s?-1:o.localeCompare(s,"en",{numeric:!0})}})},{theme:{containers:{xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"}}})},56833:(e,t,r)=>{let n=r(32228),i=r(59689),a=r(86896),o=r(50982),[s,{lineHeight:l}]=a.fontSize.base,{spacing:u,borderWidth:d,borderRadius:c}=a;function resolveColor(e,t){return e.replace("<alpha-value>",`var(${t}, 1)`)}let p=i.withOptions(function(e={strategy:void 0}){return function({addBase:t,addComponents:r,theme:i}){let a=void 0===e.strategy?["base","class"]:[e.strategy],p=[{base:["[type='text']","input:where(:not([type]))","[type='email']","[type='url']","[type='password']","[type='number']","[type='date']","[type='datetime-local']","[type='month']","[type='search']","[type='tel']","[type='time']","[type='week']","[multiple]","textarea","select"],class:[".form-input",".form-textarea",".form-select",".form-multiselect"],styles:{appearance:"none","background-color":"#fff","border-color":resolveColor(i("colors.gray.500",o.gray[500]),"--tw-border-opacity"),"border-width":d.DEFAULT,"border-radius":c.none,"padding-top":u[2],"padding-right":u[3],"padding-bottom":u[2],"padding-left":u[3],"font-size":s,"line-height":l,"--tw-shadow":"0 0 #0000","&:focus":{outline:"2px solid transparent","outline-offset":"2px","--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":"0px","--tw-ring-offset-color":"#fff","--tw-ring-color":resolveColor(i("colors.blue.600",o.blue[600]),"--tw-ring-opacity"),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)","border-color":resolveColor(i("colors.blue.600",o.blue[600]),"--tw-border-opacity")}}},{base:["input::placeholder","textarea::placeholder"],class:[".form-input::placeholder",".form-textarea::placeholder"],styles:{color:resolveColor(i("colors.gray.500",o.gray[500]),"--tw-text-opacity"),opacity:"1"}},{base:["::-webkit-datetime-edit-fields-wrapper"],class:[".form-input::-webkit-datetime-edit-fields-wrapper"],styles:{padding:"0"}},{base:["::-webkit-date-and-time-value"],class:[".form-input::-webkit-date-and-time-value"],styles:{"min-height":"1.5em"}},{base:["::-webkit-date-and-time-value"],class:[".form-input::-webkit-date-and-time-value"],styles:{"text-align":"inherit"}},{base:["::-webkit-datetime-edit"],class:[".form-input::-webkit-datetime-edit"],styles:{display:"inline-flex"}},{base:["::-webkit-datetime-edit","::-webkit-datetime-edit-year-field","::-webkit-datetime-edit-month-field","::-webkit-datetime-edit-day-field","::-webkit-datetime-edit-hour-field","::-webkit-datetime-edit-minute-field","::-webkit-datetime-edit-second-field","::-webkit-datetime-edit-millisecond-field","::-webkit-datetime-edit-meridiem-field"],class:[".form-input::-webkit-datetime-edit",".form-input::-webkit-datetime-edit-year-field",".form-input::-webkit-datetime-edit-month-field",".form-input::-webkit-datetime-edit-day-field",".form-input::-webkit-datetime-edit-hour-field",".form-input::-webkit-datetime-edit-minute-field",".form-input::-webkit-datetime-edit-second-field",".form-input::-webkit-datetime-edit-millisecond-field",".form-input::-webkit-datetime-edit-meridiem-field"],styles:{"padding-top":0,"padding-bottom":0}},{base:["select"],class:[".form-select"],styles:{"background-image":`url("${n(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${resolveColor(i("colors.gray.500",o.gray[500]),"--tw-stroke-opacity")}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,"background-position":`right ${u[2]} center`,"background-repeat":"no-repeat","background-size":"1.5em 1.5em","padding-right":u[10],"print-color-adjust":"exact"}},{base:["[multiple]",'[size]:where(select:not([size="1"]))'],class:['.form-select:where([size]:not([size="1"]))'],styles:{"background-image":"initial","background-position":"initial","background-repeat":"unset","background-size":"initial","padding-right":u[3],"print-color-adjust":"unset"}},{base:["[type='checkbox']","[type='radio']"],class:[".form-checkbox",".form-radio"],styles:{appearance:"none",padding:"0","print-color-adjust":"exact",display:"inline-block","vertical-align":"middle","background-origin":"border-box","user-select":"none","flex-shrink":"0",height:u[4],width:u[4],color:resolveColor(i("colors.blue.600",o.blue[600]),"--tw-text-opacity"),"background-color":"#fff","border-color":resolveColor(i("colors.gray.500",o.gray[500]),"--tw-border-opacity"),"border-width":d.DEFAULT,"--tw-shadow":"0 0 #0000"}},{base:["[type='checkbox']"],class:[".form-checkbox"],styles:{"border-radius":c.none}},{base:["[type='radio']"],class:[".form-radio"],styles:{"border-radius":"100%"}},{base:["[type='checkbox']:focus","[type='radio']:focus"],class:[".form-checkbox:focus",".form-radio:focus"],styles:{outline:"2px solid transparent","outline-offset":"2px","--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":"2px","--tw-ring-offset-color":"#fff","--tw-ring-color":resolveColor(i("colors.blue.600",o.blue[600]),"--tw-ring-opacity"),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"}},{base:["[type='checkbox']:checked","[type='radio']:checked"],class:[".form-checkbox:checked",".form-radio:checked"],styles:{"border-color":"transparent","background-color":"currentColor","background-size":"100% 100%","background-position":"center","background-repeat":"no-repeat"}},{base:["[type='checkbox']:checked"],class:[".form-checkbox:checked"],styles:{"background-image":`url("${n('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")`,"@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='radio']:checked"],class:[".form-radio:checked"],styles:{"background-image":`url("${n('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")`,"@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='checkbox']:checked:hover","[type='checkbox']:checked:focus","[type='radio']:checked:hover","[type='radio']:checked:focus"],class:[".form-checkbox:checked:hover",".form-checkbox:checked:focus",".form-radio:checked:hover",".form-radio:checked:focus"],styles:{"border-color":"transparent","background-color":"currentColor"}},{base:["[type='checkbox']:indeterminate"],class:[".form-checkbox:indeterminate"],styles:{"background-image":`url("${n('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`,"border-color":"transparent","background-color":"currentColor","background-size":"100% 100%","background-position":"center","background-repeat":"no-repeat","@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='checkbox']:indeterminate:hover","[type='checkbox']:indeterminate:focus"],class:[".form-checkbox:indeterminate:hover",".form-checkbox:indeterminate:focus"],styles:{"border-color":"transparent","background-color":"currentColor"}},{base:["[type='file']"],class:null,styles:{background:"unset","border-color":"inherit","border-width":"0","border-radius":"0",padding:"0","font-size":"unset","line-height":"inherit"}},{base:["[type='file']:focus"],class:null,styles:{outline:["1px solid ButtonText","1px auto -webkit-focus-ring-color"]}}],getStrategyRules=e=>p.map(t=>null===t[e]?null:{[t[e]]:t.styles}).filter(Boolean);a.includes("base")&&t(getStrategyRules("base")),a.includes("class")&&r(getStrategyRules("class"))}});e.exports=p},22733:(e,t,r)=>{"use strict";/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var n,i,a,o,s,l,u,d,c,p,h,f,m,y,g,v,b,S,x,P,C,_,A,T,w,E,D,O,R,M,k,L,I,B,N,F,V,j,H,z,U,G,W,X,Y,q,K,$,Z,J,Q,ee,et,er,en,ei,ea,eo,es,el,eu,ed,ec,ep,eh,ef,em,ey,eg,ev,eb,eS,ex,eP,eC,e_,eA,eT,ew,eE,eD,eO,eR,eM=r(39090),ek=r(57147),eL=r(71017),eI=r(4074),eB=r(22037);function _mergeNamespaces(e,t){return t.forEach(function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if("default"!==r&&!(r in e)){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}})}),e}var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function __awaiter(e,t,r,n){return new(r||(r=Promise))(function(i,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})}function __generator(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(s){return function(a){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o}function __spreadArray(e,t,r){if(r||2==arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}(function(e){e[e.float32=0]="float32",e[e.int32=1]="int32",e[e.bool=2]="bool",e[e.string=3]="string",e[e.complex64=4]="complex64"})(n||(n={})),function(e){e[e.linear=0]="linear",e[e.relu=1]="relu",e[e.relu6=2]="relu6",e[e.prelu=3]="prelu",e[e.leakyrelu=4]="leakyrelu",e[e.sigmoid=5]="sigmoid",e[e.elu=6]="elu"}(i||(i={}));var eN={kernelName:eM._FusedMatMul,backendName:"wasm",setupFunc:function(e){a=e.wasm.cwrap(eM._FusedMatMul,null,["number","array","number","number","array","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,o=t.a,s=t.b,l=t.bias,u=t.preluActivationWeights;if("float32"!==o.dtype||"float32"!==s.dtype)throw Error("_FusedMatMul for non non-float32 tensors not yet supported.");var d=n.transposeA,c=n.transposeB,p=n.activation,h=n.leakyreluAlpha,f=r.dataIdMap.get(o.dataId).id,m=r.dataIdMap.get(s.dataId).id,y=0;if(null!=l){var g=r.dataIdMap.get(l.dataId);if(1!==g.shape.length)throw Error("_FusedMatMul only supports rank-1 bias but got "+"rank ".concat(g.shape.length,"."));y=g.id}var v=null==u?0:r.dataIdMap.get(u.dataId).id,b=i[p];if(null==b)throw Error("".concat(p," activation not yet supported for FusedConv2D ")+"in the wasm backend.");var S=d?o.shape[2]:o.shape[1],x=c?s.shape[1]:s.shape[2],P=eM.broadcast_util.assertAndGetBroadcastShape(o.shape.slice(0,-2),s.shape.slice(0,-2)),C=r.makeOutput(__spreadArray(__spreadArray([],__read(P),!1),[S,x],!1),o.dtype),_=r.dataIdMap.get(C.dataId).id,A=new Uint8Array(new Int32Array(o.shape).buffer),T=new Uint8Array(new Int32Array(s.shape).buffer);return a(f,A,o.shape.length,m,T,s.shape.length,d,c,b,y,v,h||0,_),C}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function createUnaryKernelConfig(e,t){var r;return{kernelName:e,backendName:"wasm",setupFunc:function(t){r=t.wasm.cwrap(e,null,["number","number","number"])},kernelFunc:function(e){var i=e.backend,a=e.inputs.x,o=i.dataIdMap.get(a.dataId).id,s=i.makeOutput(a.shape,t||a.dtype),l=i.dataIdMap.get(s.dataId).id;return 0===eM.util.sizeFromShape(s.shape)||r(o,n[a.dtype],l),s}}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var eF=createUnaryKernelConfig(eM.Abs),eV=createUnaryKernelConfig(eM.Acos),ej=createUnaryKernelConfig(eM.Acosh);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function createBinaryKernelConfig(e,t,r){var i;return{kernelName:e,backendName:"wasm",setupFunc:function(t){i=t.wasm.cwrap(e,null,["number","array","number","number","array","number","number","number"])},kernelFunc:function(e){var t=e.backend,a=e.inputs,o=a.a,s=a.b,l=t.dataIdMap.get(o.dataId).id,u=t.dataIdMap.get(s.dataId).id,d=null!=r?r:o.dtype,c=eM.backend_util.assertAndGetBroadcastShape(o.shape,s.shape),p=t.makeOutput(c,d);if(0===eM.util.sizeFromShape(c))return p;var h=new Uint8Array(new Int32Array(o.shape).buffer),f=new Uint8Array(new Int32Array(s.shape).buffer),m=t.dataIdMap.get(p.dataId).id;return i(l,h,o.shape.length,u,f,s.shape.length,n[o.dtype],m),p}}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var eH=createBinaryKernelConfig(eM.Add),ez={kernelName:eM.AddN,backendName:"wasm",setupFunc:function(e){o=e.wasm.cwrap(eM.AddN,null,["array","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=r.makeOutput(t[0].shape,t[0].dtype);if(0===eM.util.sizeFromShape(i.shape))return i;var a=t.map(function(e){return r.dataIdMap.get(e.dataId).id}),s=new Uint8Array(new Int32Array(a).buffer),l=r.dataIdMap.get(i.dataId).id;return o(s,a.length,n[i.dtype],l),i}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function identity(e){var t=e.inputs.x,r=e.backend;if("string"===t.dtype)return eM.tensor(r.readSync(t.dataId),t.shape,t.dtype);var n=r.makeOutput(t.shape,t.dtype),i=r.typedArrayFromHeap(t);return r.typedArrayFromHeap(n).set(i),n}var eU={kernelName:eM.Identity,backendName:"wasm",kernelFunc:identity};function transpose(e){for(var t=e.inputs,r=e.backend,i=e.attrs,a=__read(function(e,t){for(var r=[],n=[],i=0;i<e.length;++i)1!==e[i]&&r.push(e[i]),1!==e[t[i]]&&n.push(t[i]);for(var i=0;i<n.length;++i){for(var a=-1,o=0;o<n.length;++o)n[o]>=i&&(-1===a||n[a]>n[o])&&(a=o);n[a]=i}return[r,n]}(t.x.shape,i.perm),2),o=a[0],l=a[1],u=!0,d=0;d<l.length;d++)l[d]!==d&&(u=!1);var c=function(e,t){for(var r=Array(e.length),n=0;n<r.length;n++)r[n]=e[t[n]];return r}(t.x.shape,i.perm),p={dataId:t.x.dataId,shape:o,dtype:t.x.dtype};if(u){var h=identity({inputs:t,backend:r});return h.shape=c,h}var f=r.makeOutput(c,p.dtype),m=r.dataIdMap.get(p.dataId).id,y=r.dataIdMap.get(f.dataId).id,g=new Uint8Array(new Int32Array(l).buffer),v=new Uint8Array(new Int32Array(p.shape).buffer);return s(m,v,p.shape.length,n[p.dtype],y,g,l.length),f}var eG={kernelName:eM.Transpose,backendName:"wasm",kernelFunc:transpose,setupFunc:function(e){s=e.wasm.cwrap(eM.Transpose,null,["number","array","number","number","number","array","number"])}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function permuteAxesAndTranspose(e,t,r){var n=e.shape,i=e.shape.length,a=eM.util.parseAxisParam(t,n),o=a,s=eM.backend_util.getAxesPermutation(o,i),l=null,u=!1;if(null!=s){for(var d=Array(i),c=0;c<d.length;c++)d[c]=n[s[c]];o=eM.backend_util.getInnerMostAxes(o.length,i),l=transpose({inputs:{x:e},attrs:{perm:s},backend:r});var p=r.dataIdMap.get(e.dataId).id;r.dataIdMap.get(l.dataId).id!==p&&(u=!0)}return{transposed:l,originalAxes:a,axes:o,inputWasTransposed:u}}var eW={kernelName:eM.All,backendName:"wasm",setupFunc:function(e){l=e.wasm.cwrap(eM.All,null,["number, number, number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=n.axis,a=n.keepDims,o=r.x,s=t.dataIdMap.get(o.dataId).id,u=o,d=permuteAxesAndTranspose(o,i,t),c=d.transposed,p=d.axes,h=d.originalAxes,f=d.inputWasTransposed;if(f){var m=t.dataIdMap.get(c.dataId).id;u=c,s=m}var y=u.shape.length;eM.backend_util.assertAxesAreInnerMostDims("all",p,y);var g=__read(eM.backend_util.computeOutAndReduceShapes(u.shape,p),2),v=g[0],b=g[1],S=eM.util.sizeFromShape(b),x=t.makeOutput(v,o.dtype);if(0!==eM.util.sizeFromShape(u.shape)){var P=t.dataIdMap.get(x.dataId).id;l(s,S,P)}if(f&&t.disposeData(c.dataId),a){var C=eM.backend_util.expandShapeToKeepDim(x.shape,h);x.shape=C}return x}},eX={kernelName:eM.Any,backendName:"wasm",setupFunc:function(e){u=e.wasm.cwrap(eM.Any,null,["number, number, number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=n.axis,a=n.keepDims,o=r.x,s=t.dataIdMap.get(o.dataId).id,l=o,d=permuteAxesAndTranspose(o,i,t),c=d.transposed,p=d.axes,h=d.originalAxes,f=d.inputWasTransposed;if(f){var m=t.dataIdMap.get(c.dataId).id;l=c,s=m}var y=l.shape.length;eM.backend_util.assertAxesAreInnerMostDims("any",p,y);var g=__read(eM.backend_util.computeOutAndReduceShapes(l.shape,p),2),v=g[0],b=g[1],S=eM.util.sizeFromShape(b),x=t.makeOutput(v,o.dtype);if(0!==eM.util.sizeFromShape(l.shape)){var P=t.dataIdMap.get(x.dataId).id;u(s,S,P)}if(f&&t.disposeData(c.dataId),a){var C=eM.backend_util.expandShapeToKeepDim(x.shape,h);x.shape=C}return x}};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function createArgMinMaxKernelConfig(e){var t;return{kernelName:e,backendName:"wasm",setupFunc:function(r){t=r.wasm.cwrap(e,null,["number","number","number","number","number"])},kernelFunc:function(e){var r=e.backend,i=e.inputs,a=e.attrs.axis,o=i.x,s=r.dataIdMap.get(o.dataId).id,l=s,u=o,d=permuteAxesAndTranspose(o,a,r),c=d.transposed,p=d.axes,h=d.inputWasTransposed;if(h){var f=r.dataIdMap.get(c.dataId).id;f!==s&&(u=c,l=f)}var m=u.shape.slice(0,-1),y=r.makeOutput(m,"int32"),g=r.dataIdMap.get(y.dataId).id,v=eM.util.sizeFromShape(y.shape),b=u.shape[p[0]];return t(l,n[u.dtype],v,b,g),h&&r.disposeData(c.dataId),y}}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var eY=createArgMinMaxKernelConfig(eM.ArgMax),eq=createArgMinMaxKernelConfig(eM.ArgMin),eK=createUnaryKernelConfig(eM.Asin),e$=createUnaryKernelConfig(eM.Asinh),eZ=createUnaryKernelConfig(eM.Atan),eJ=createBinaryKernelConfig(eM.Atan2),eQ=createUnaryKernelConfig(eM.Atanh),e1={kernelName:eM.AvgPool,backendName:"wasm",setupFunc:function(e){d=e.wasm.cwrap(eM.AvgPool,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.attrs,n=e.backend,i=t.x,a=n.dataIdMap.get(i.dataId).id,o=r.filterSize,s=r.strides,l=r.pad,u=r.dimRoundingMode,c=eM.backend_util.computePool2DInfo(i.shape,o,s,1,l,u),p=c.filterHeight,h=c.filterWidth,f=c.padInfo.top,m=c.padInfo.right,y=c.padInfo.bottom,g=c.padInfo.left,v=c.strideHeight,b=c.strideWidth,S=c.inChannels;if("channelsLast"!==c.dataFormat)throw Error("wasm backend does not support dataFormat:'"+"".concat(c.dataFormat,"'. Please use 'channelsLast'."));if(1!==c.dilationWidth||1!==c.dilationHeight)throw Error("was backend only supports average pooling with dilation = [1, 1], "+"got [".concat(c.dilationHeight,", ").concat(c.dilationWidth,"]."));var x=n.makeOutput(c.outShape,"float32"),P=n.dataIdMap.get(x.dataId).id;return d(a,i.shape[0],i.shape[1],i.shape[2],p,h,f,m,y,g,v,b,S,P),x}},e0={kernelName:eM.AvgPool3D,backendName:"wasm",setupFunc:function(e){c=e.wasm.cwrap("AvgPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=n.filterSize,o=n.strides,s=n.pad,l=n.dimRoundingMode,u=n.dataFormat,d=eM.backend_util.computePool3DInfo(i.shape,a,o,1,s,l,u),p=r.makeOutput(d.outShape,i.dtype);return c(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(p.dataId).id,d.batchSize,d.inChannels,d.inDepth,d.inHeight,d.inWidth,d.outDepth,d.outHeight,d.outWidth,d.strideDepth,d.strideHeight,d.strideWidth,d.dilationDepth,d.dilationHeight,d.dilationWidth,d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth,d.padInfo.front,d.padInfo.top,d.padInfo.left),p}},e2={kernelName:eM.AvgPool3DGrad,backendName:"wasm",setupFunc:function(e){p=e.wasm.cwrap("AvgPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.dy,a=t.input,o=n.filterSize,s=n.strides,l=n.pad,u=n.dimRoundingMode,d=eM.backend_util.computePool3DInfo(a.shape,o,s,1,l,u),c=r.makeOutput(a.shape,a.dtype);return p(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(c.dataId).id,d.batchSize,d.inChannels,d.inDepth,d.inHeight,d.inWidth,d.outDepth,d.outHeight,d.outWidth,d.strideDepth,d.strideHeight,d.strideWidth,d.dilationDepth,d.dilationHeight,d.dilationWidth,d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth,d.padInfo.front,d.padInfo.top,d.padInfo.left,d.filterDepth,d.filterHeight,d.filterWidth),c}},e4={kernelName:eM.AvgPoolGrad,backendName:"wasm",setupFunc:function(e){h=e.wasm.cwrap("AvgPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.dy,a=t.input,o=n.filterSize,s=n.strides,l=n.pad,u=eM.backend_util.computePool2DInfo(a.shape,o,s,1,l),d=r.makeOutput(a.shape,a.dtype);return h(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(d.dataId).id,u.batchSize,u.inChannels,u.inHeight,u.inWidth,u.outHeight,u.outWidth,u.strideHeight,u.strideWidth,u.dilationHeight,u.dilationWidth,u.effectiveFilterHeight,u.effectiveFilterWidth,u.padInfo.top,u.padInfo.left,u.filterHeight,u.filterWidth),d}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function reshape(e){var t=e.inputs,r=e.attrs,n=t.x,i=r.shape,a=eM.util.sizeFromShape(n.shape),o=eM.util.inferFromImplicitShape(i,a);return eM.util.assert(a===eM.util.sizeFromShape(o),function(){return"new shape: ".concat(o,", old shape: ").concat(n.shape,". New shape and old ")+"shape must have the same number of elements."}),e.backend.incRef(n.dataId),{dataId:n.dataId,shape:o,dtype:n.dtype}}var e3={kernelName:eM.Reshape,backendName:"wasm",kernelFunc:reshape},e6={kernelName:eM.BatchMatMul,backendName:"wasm",setupFunc:function(e){f=e.wasm.cwrap(eM.BatchMatMul,null,["number","array","number","number","array","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.a,a=t.b,o=n.transposeA,s=n.transposeB;if("float32"!==i.dtype||"float32"!==a.dtype)throw Error("BatchMatMul for non non-float32 tensors not yet supported.");var l=i.shape.length,u=a.shape.length,d=o?i.shape[l-2]:i.shape[l-1],c=s?a.shape[u-1]:a.shape[u-2],p=o?i.shape[l-1]:i.shape[l-2],h=s?a.shape[u-2]:a.shape[u-1],m=i.shape.slice(0,-2),y=a.shape.slice(0,-2),g=eM.util.sizeFromShape(m),v=eM.util.sizeFromShape(y),b=eM.broadcast_util.assertAndGetBroadcastShape(i.shape.slice(0,-2),a.shape.slice(0,-2)).concat([p,h]);eM.util.assert(d===c,function(){return"Error in matMul: inner shapes (".concat(d,") and (")+"".concat(c,") of Tensors with shapes ").concat(i.shape," and ")+"".concat(a.shape," and transposeA=").concat(o)+" and transposeB=".concat(s," must match.")});var S=s?[v,h,c]:[v,c,h],x=reshape({inputs:{x:i},backend:r,attrs:{shape:o?[g,d,p]:[g,p,d]}}),P=reshape({inputs:{x:a},backend:r,attrs:{shape:S}}),C=r.dataIdMap.get(x.dataId).id,_=r.dataIdMap.get(P.dataId).id,A=o?x.shape[2]:x.shape[1],T=s?P.shape[1]:P.shape[2],w=Math.max(g,v),E=r.makeOutput([w,A,T],x.dtype),D=r.dataIdMap.get(E.dataId).id,O=new Uint8Array(new Int32Array(x.shape).buffer),R=new Uint8Array(new Int32Array(P.shape).buffer);return f(C,O,x.shape.length,_,R,P.shape.length,o,s,D),r.disposeData(x.dataId),r.disposeData(P.dataId),E.shape=b,E}};function sliceImpl(e,t,r,n,i){var a=eM.slice_util.isSliceContinous(n,t,r),o=eM.util.sizeFromShape(r),s=eM.util.computeStrides(n);if(a){var l=eM.slice_util.computeFlatOffset(t,s);return"string"===i?e.slice(l,l+o):e.subarray(l,l+o)}for(var u="string"===i?eM.backend_util.fromUint8ToStringArray(e):e,d=eM.buffer(n,i,u),c=eM.buffer(r,i),p=0;p<c.size;++p){var h=c.indexToLoc(p),f=h.map(function(e,r){return e+t[r]});c.set.apply(c,__spreadArray([d.get.apply(d,__spreadArray([],__read(f),!1))],__read(h),!1))}return"string"===i?eM.backend_util.fromStringArrayToUint8(c.values):c.values}eM.backend_util.RowPartitionType;/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var e8=function(){function StringNGramsOp(e,t,r,n,i,a){this.separator=eM.util.encodeString(e),this.nGramWidths=t,this.leftPad=eM.util.encodeString(r),this.rightPad=eM.util.encodeString(n),this.padWidth=i,this.preserveShort=a}return StringNGramsOp.prototype.getPadWidth=function(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)},StringNGramsOp.prototype.getNumNGrams=function(e,t){return Math.max(0,e+2*this.getPadWidth(t)-t+1)},StringNGramsOp.prototype.createNGrams=function(e,t,r,n,i,a){for(var o=this,s=0;s<i;++s)!function(s){var l,u=o.getPadWidth(a),d=Math.max(0,u-s),c=Math.max(0,u-(i-(s+1))),p=a-(d+c),h=t+(d>0?0:s-u);l=0+d*o.leftPad.length;for(var f=0;f<p;++f)l+=e[h+f].length;l+=c*o.rightPad.length+(d+c+p-1)*o.separator.length,r[n+s]=new Uint8Array(l);for(var m=r[n+s],y=0,appendToNGram=function(e){return e.forEach(function(e){return m[y++]=e})},f=0;f<d;++f)appendToNGram(o.leftPad),appendToNGram(o.separator);for(var f=0;f<p-1;++f)appendToNGram(e[h+f]),appendToNGram(o.separator);if(p>0){appendToNGram(e[h+p-1]);for(var f=0;f<c;++f)appendToNGram(o.separator),appendToNGram(o.rightPad)}else{for(var f=0;f<c-1;++f)appendToNGram(o.rightPad),appendToNGram(o.separator);appendToNGram(o.rightPad)}}(s)},StringNGramsOp.prototype.compute=function(e,t){var r=this,n=e.length,i=t.length;if(i>0){var a=t[0];if(0!==a)throw Error("First split value must be 0, got ".concat(a));for(var o=1;o<i;++o){var s=t[o]>=a;if(!(s=s&&t[o]<=n))throw Error("Invalid split value ".concat(t[o],", must be in [").concat(a,", ").concat(n,"]"));a=t[o]}if(a!==n)throw Error("Last split value must be data size. Expected ".concat(n,", got ").concat(a))}var l=i-1,u=eM.util.getArrayFromDType("int32",i);if(0===n||0===i){for(var d=Array(n),o=0;o<=l;++o)u[o]=0;return[d,u]}u[0]=0;for(var c=this,o=1;o<=l;++o)!function(e){var n=t[e]-t[e-1],i=0;c.nGramWidths.forEach(function(e){i+=r.getNumNGrams(n,e)}),c.preserveShort&&n>0&&0===i&&(i=1),u[e]=u[e-1]+i}(o);for(var p=Array(u[l]),_loop_3=function(n){var i=t[n],a=u[n];if(h.nGramWidths.forEach(function(o){var s=t[n+1]-t[n],l=r.getNumNGrams(s,o);r.createNGrams(e,i,p,a,l,o),a+=l}),h.preserveShort&&a===u[n]){var o=t[n+1]-t[n];if(0===o)return"continue";var s=o+2*h.padWidth;h.createNGrams(e,i,p,a,1,s)}},h=this,o=0;o<l;++o)_loop_3(o);return[p,u]},StringNGramsOp}();function slice(e){var t=e.inputs.x,r=e.attrs,n=r.begin,i=r.size,a=e.backend,o=__read(eM.slice_util.parseSliceParams(t,n,i),2),s=o[0],l=o[1],u=eM.slice_util.isSliceContinous(t.shape,s,l),d=a.readSync(t.dataId),c=a.makeOutput(l,t.dtype),p=eM.util.computeStrides(t.shape),h=a.dataIdMap.get(c.dataId);if(u){var f=eM.slice_util.computeFlatOffset(s,p);return"string"===t.dtype?h.stringBytes=d.slice(f,f+eM.util.sizeFromShape(l)):a.typedArrayFromHeap(c).set(d.subarray(f,f+eM.util.sizeFromShape(l))),c}if("string"===t.dtype){var m=sliceImpl(d,s,l,t.shape,t.dtype);return h.stringBytes=m,c}var y=a.typedArrayFromHeap(c),g=t.shape.length;if(2===g)(function(e,t,r,n,i){for(var a=0,o=n[0],s=n[1],l=o+i[0],u=o;u<l;u++){var d=u*t+s;r.set(e.subarray(d,d+i[1]),a),a+=i[1]}})(d,p[0],y,s,l);else if(3===g)(function(e,t,r,n,i,a){for(var o=0,s=i[0],l=i[1],u=i[2],d=s+a[0],c=l+a[1],p=s;p<d;p++)for(var h=l;h<c;h++){var f=p*t+h*r+u;n.set(e.subarray(f,f+a[2]),o),o+=a[2]}})(d,p[0],p[1],y,s,l);else if(4===g)(function(e,t,r,n,i,a,o){for(var s=0,l=a[0],u=a[1],d=a[2],c=l+o[0],p=u+o[1],h=d+o[2],f=a[3],m=l;m<c;m++)for(var y=u;y<p;y++)for(var g=d;g<h;g++){var v=m*t+y*r+g*n+f;i.set(e.subarray(v,v+o[3]),s),s+=o[3]}})(d,p[0],p[1],p[2],y,s,l);else{var m=sliceImpl(d,s,l,t.shape,t.dtype);y.set(m)}return c}var e5={kernelName:eM.Slice,backendName:"wasm",kernelFunc:slice},e9={kernelName:eM.BatchToSpaceND,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=n.blockShape,o=n.crops,s=a.reduce(function(e,t){return e*t}),l=eM.backend_util.getReshaped(i.shape,a,s),u=eM.backend_util.getPermuted(l.length,a.length),d=eM.backend_util.getReshapedPermuted(i.shape,a,s),c=eM.backend_util.getSliceBeginCoords(o,a.length),p=eM.backend_util.getSliceSize(d,o,a.length),h=reshape({inputs:{x:i},backend:r,attrs:{shape:l}}),f=transpose({inputs:{x:h},backend:r,attrs:{perm:u}}),m=reshape({inputs:{x:f},backend:r,attrs:{shape:d}}),y=slice({inputs:{x:m},backend:r,attrs:{begin:c,size:p}});return r.disposeData(h.dataId),r.disposeData(f.dataId),r.disposeData(m.dataId),y}},e7={kernelName:eM.Bincount,backendName:"wasm",setupFunc:function(e){m=e.wasm.cwrap(eM.Bincount,null,["number","number","boolean","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=r.x,o=r.weights,s=i.size,l=0!==o.shape.reduce(function(e,t){return e*t},1),u=1===a.shape.length?[s]:[a.shape[0],s],d=t.makeOutput(u,o.dtype);function tensorId(e){return t.dataIdMap.get(e.dataId).id}return m(tensorId(a),s,l,tensorId(o),n[o.dtype],tensorId(d)),d}},te=createBinaryKernelConfig(eM.BitwiseAnd),tt={kernelName:eM.BroadcastArgs,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.inputs,r=e.backend,n=t.s0,i=t.s1,a=r.typedArrayFromHeap(n),o=r.typedArrayFromHeap(i),s=eM.backend_util.assertAndGetBroadcastShape(Array.from(a),Array.from(o));return r.makeOutput([s.length],"int32",void 0,new Int32Array(s))}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cast(e){var t=e.inputs.x,r=e.attrs.dtype,n=e.backend,i=n.makeOutput(t.shape,r),a=n.typedArrayFromHeap(t);return n.typedArrayFromHeap(i).set(a),i}var tr={kernelName:eM.Cast,backendName:"wasm",kernelFunc:cast},tn=createUnaryKernelConfig(eM.Ceil),ti={kernelName:eM.ClipByValue,backendName:"wasm",setupFunc:function(e){y=e.wasm.cwrap(eM.ClipByValue,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=n.clipValueMin,o=n.clipValueMax,s=r.dataIdMap.get(i.dataId).id,l=r.makeOutput(i.shape,i.dtype),u=r.dataIdMap.get(l.dataId).id;return y(s,a,o,u),l}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function concat(e){var t=e.inputs,r=e.backend,n=eM.util.parseAxisParam(e.attrs.axis,t[0].shape)[0],i=t.map(function(e){return e.shape});eM.backend_util.assertParamsConsistent(i,n);var a=eM.backend_util.computeOutShape(t.map(function(e){return e.shape}),n),o=t.filter(function(e){return eM.util.sizeFromShape(e.shape)>0});if(1===o.length)return identity({inputs:{x:o[0]},backend:r});var s=r.makeOutput(a,t[0].dtype);if(0===eM.util.sizeFromShape(a))return s;if("string"===o[0].dtype){var l=o.map(function(e){var t=eM.util.sizeFromShape(e.shape.slice(n));return reshape({inputs:{x:e},backend:r,attrs:{shape:[-1,t]}})}),u=l.map(function(e){return{vals:r.readSync(e.dataId),shape:e.shape}});a=eM.backend_util.computeOutShape(l.map(function(e){return e.shape}),1);var d=1===l[0].shape[0],c=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){var i=eM.util.getArrayFromDType(r,eM.util.sizeFromShape(t));if(n&&"string"!==r){var a=0;e.forEach(function(e){var t=eM.util.sizeFromShape(e.shape);i.set(e.vals,a),a+=t})}else{var o=0;e.forEach(function(e){for(var n="string"===r?eM.backend_util.fromUint8ToStringArray(e.vals):e.vals,a=0,s=0;s<e.shape[0];++s)for(var l=s*t[1]+o,u=0;u<e.shape[1];++u)i[l+u]=n[a++];o+=e.shape[1]})}return i}(u,a,t[0].dtype,d),p=eM.backend_util.computeOutShape(o.map(function(e){return e.shape}),n);return s.shape=p,r.dataIdMap.get(s.dataId).stringBytes=eM.backend_util.fromStringArrayToUint8(c),l.forEach(function(e){return r.disposeData(e.dataId)}),s}for(var h=eM.util.sizeFromShape(o[0].shape.slice(0,n)),f=0,m=o.map(function(e){var t=eM.util.sizeFromShape(e.shape.slice(n));return f+=t,t}),y=o.map(function(e){return r.typedArrayFromHeap(e)}),g=r.typedArrayFromHeap(s),v=0;v<h;v++)for(var b=v*f,S=0;S<y.length;S++){var x=m[S],P=v*x,C=y[S].subarray(P,P+x);g.set(C,b),b+=x}return s}var ta={kernelName:eM.Concat,backendName:"wasm",kernelFunc:concat},to={kernelName:eM.Conv2D,backendName:"wasm",setupFunc:function(e){g=e.wasm.cwrap(eM.Conv2D,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.attrs,n=e.backend,i=t.x,a=t.filter,o=n.dataIdMap.get(i.dataId).id,s=n.dataIdMap.get(a.dataId).id,l=r.strides,u=r.dilations,d=r.pad,c=r.dimRoundingMode,p=r.dataFormat,h=eM.backend_util.convertConv2DDataFormat(p),f=eM.backend_util.computeConv2DInfo(i.shape,a.shape,l,u,d,c,!1,h),m=f.filterHeight,y=f.filterWidth,v=f.padInfo.top,b=f.padInfo.right,S=f.padInfo.bottom,x=f.padInfo.left,P=f.dilationHeight,C=f.dilationWidth,_=f.strideHeight,A=f.strideWidth,T=f.inChannels,w=f.outChannels,E="SAME"===f.padInfo.type?1:0;if("channelsLast"!==f.dataFormat)throw Error("wasm backend Conv2D does not support dataFormat:'"+"".concat(f.dataFormat,"'. Please use 'channelsLast'."));var D=n.makeOutput(f.outShape,"float32"),O=n.dataIdMap.get(D.dataId).id;return g(o,i.shape[0],i.shape[1],i.shape[2],s,m,y,v,b,S,x,E,P,C,_,A,T,w,O),D}},ts={kernelName:eM.Conv2DBackpropInput,backendName:"wasm",setupFunc:function(e){v=e.wasm.cwrap(eM.Conv2DBackpropInput,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=r.dy,a=r.filter,o=n.strides,s=n.pad,l=n.dataFormat,u=n.dimRoundingMode,d=n.inputShape,c=eM.backend_util.convertConv2DDataFormat(l),p=eM.backend_util.computeConv2DInfo(d,a.shape,o,1,s,u,!1,c),h=p.batchSize,f=p.filterHeight,m=p.filterWidth,y=p.inChannels,g=p.inHeight,b=p.inWidth,S=p.outChannels,x=p.outHeight,P=p.outWidth,C=p.strideHeight,_=p.strideWidth,A=f-1-p.padInfo.top,T=m-1-p.padInfo.left,w="channelsLast"===p.dataFormat,E=eM.util.computeStrides(p.inShape),D=eM.util.computeStrides(i.shape),O=__read(eM.util.computeStrides(a.shape),3),R=O[0],M=O[1],k=O[2],L=E[0],I=w?E[1]:E[2],B=w?E[2]:1,N=w?1:E[1],F=D[0],V=w?D[1]:D[2],j=w?D[2]:1,H=w?1:D[1],z=t.makeOutput(p.inShape,"float32"),U=t.dataIdMap.get(z.dataId).id,G=t.dataIdMap.get(i.dataId).id,W=t.dataIdMap.get(a.dataId).id;return v(G,W,h,f,m,g,b,y,x,P,S,C,_,A,T,R,M,k,L,I,B,N,F,V,j,H,U),z}},tl={kernelName:eM.Conv3D,backendName:"wasm",setupFunc:function(e){b=e.wasm.cwrap(eM.Conv3D,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=t.filter,o=n.strides,s=n.pad,l=n.dilations;if("float32"!==i.dtype)throw Error("Tensor x must have dtype float32, got ".concat(i.dtype));if("float32"!==a.dtype)throw Error("Tensor filter must have dtype float32, got ".concat(a.dtype));var u=eM.backend_util.computeConv3DInfo(i.shape,a.shape,o,l,s),d=r.makeOutput(u.outShape,i.dtype);return b(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(d.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),d}},tu={kernelName:eM.Conv3DBackpropFilterV2,backendName:"wasm",setupFunc:function(e){S=e.wasm.cwrap(eM.Conv3DBackpropFilterV2,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=t.dy,o=n.strides,s=n.pad,l=n.filterShape;if("float32"!==i.dtype)throw Error("Tensor dy must have dtype float32, got ".concat(i.dtype));if("float32"!==a.dtype)throw Error("Tensor filter must have dtype float32, got ".concat(a.dtype));var u=eM.backend_util.computeConv3DInfo(i.shape,l,o,1,s),d=r.makeOutput(u.filterShape,a.dtype);return S(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(d.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),d}},td={kernelName:eM.Conv3DBackpropInputV2,backendName:"wasm",setupFunc:function(e){x=e.wasm.cwrap(eM.Conv3DBackpropInputV2,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.dy,a=t.filter,o=n.pad,s=n.strides,l=n.inputShape;if("float32"!==i.dtype)throw Error("Tensor dy must have dtype float32, got ".concat(i.dtype));if("float32"!==a.dtype)throw Error("Tensor filter must have dtype float32, got ".concat(a.dtype));var u=eM.backend_util.computeConv3DInfo(l,a.shape,s,1,o),d=r.makeOutput(u.inShape,i.dtype);return x(r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(d.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),d}},tc=createUnaryKernelConfig(eM.Cos),tp=createUnaryKernelConfig(eM.Cosh);!function(e){e[e.bilinear=0]="bilinear",e[e.nearest=1]="nearest"}(P||(P={}));var th={kernelName:eM.CropAndResize,backendName:"wasm",setupFunc:function(e){C=e.wasm.cwrap(eM.CropAndResize,null,["number","number","number","number","array","number","number","number","number","number"])},kernelFunc:function(e){var t,r=e.backend,n=e.inputs,i=e.attrs,a=i.method,o=i.extrapolationValue,s=i.cropSize,l=n.image,u=n.boxes,d=n.boxInd,c=u.shape[0],p=__read(s,2),h=p[0],f=p[1],m=[c,h,f,l.shape[3]],y=r.dataIdMap.get(l.dataId);"float32"!==l.dtype&&(t=cast({backend:r,inputs:{x:l},attrs:{dtype:"float32"}}),y=r.dataIdMap.get(t.dataId));var g=y.id,v=r.dataIdMap.get(u.dataId).id,b=r.dataIdMap.get(d.dataId).id,S=r.makeOutput(m,"float32"),x=r.dataIdMap.get(S.dataId).id,_=new Uint8Array(new Int32Array(l.shape).buffer);return C(g,v,b,c,_,h,f,P[a],o,x),null!=t&&r.disposeData(t.dataId),S}},tf={kernelName:eM.Cumprod,backendName:"wasm",setupFunc:function(e){_=e.wasm.cwrap(eM.Cumprod,null,["number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=i.axis,s=i.exclusive,l=i.reverse,u=a.shape.length;eM.util.assert("float32"===a.dtype||"int32"===a.dtype,function(){return"cumprod does not support ".concat(a.dtype," tensors in the WASM backend")});var d=eM.backend_util.getAxesPermutation([o],u),c=a;null!==d&&(c=transpose({inputs:{x:a},attrs:{perm:d},backend:r}));var p=eM.backend_util.getInnerMostAxes(1,u)[0];eM.backend_util.assertAxesAreInnerMostDims("cumprod",[p],u);var h=r.makeOutput(c.shape,c.dtype),f=c.shape[p],m=r.dataIdMap.get(c.dataId).id,y=r.dataIdMap.get(h.dataId).id;_(m,s?1:0,l?1:0,f,y,n[a.dtype]);var g=h;return null!==d&&(g=transpose({inputs:{x:h},attrs:{perm:eM.backend_util.getUndoAxesPermutation(d)},backend:r}),r.disposeData(c.dataId),r.disposeData(h.dataId)),g}},tm={kernelName:eM.Cumsum,backendName:"wasm",setupFunc:function(e){A=e.wasm.cwrap(eM.Cumsum,null,["number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=i.axis,s=i.exclusive,l=i.reverse,u=a.shape.length;eM.util.assert("float32"===a.dtype||"int32"===a.dtype,function(){return"cumsum does not support ".concat(a.dtype," tensors in the WASM backend")});var d=eM.backend_util.getAxesPermutation([o],u),c=a;null!==d&&(c=transpose({inputs:{x:a},attrs:{perm:d},backend:r}));var p=eM.backend_util.getInnerMostAxes(1,u)[0];eM.backend_util.assertAxesAreInnerMostDims("cumsum",[p],u);var h=r.makeOutput(c.shape,c.dtype),f=c.shape[p],m=r.dataIdMap.get(c.dataId).id,y=r.dataIdMap.get(h.dataId).id;A(m,s?1:0,l?1:0,f,y,n[a.dtype]);var g=h;return null!==d&&(g=transpose({inputs:{x:h},attrs:{perm:eM.backend_util.getUndoAxesPermutation(d)},backend:r}),r.disposeData(c.dataId),r.disposeData(h.dataId)),g}},ty={kernelName:eM.DenseBincount,backendName:"wasm",setupFunc:function(e){T=e.wasm.cwrap("DenseBincount",null,["number","array","number","number","boolean","number","number","boolean","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=r.x,o=r.weights,s=i.size,l=i.binaryOutput,u=0!==o.shape.reduce(function(e,t){return e*t},1),d=1===a.shape.length?[s]:[a.shape[0],s],c=t.makeOutput(d,o.dtype);function tensorId(e){return t.dataIdMap.get(e.dataId).id}return T(tensorId(a),new Uint8Array(new Int32Array(a.shape).buffer),a.shape.length,s,u,tensorId(o),n[o.dtype],l,tensorId(c)),c}},tg={kernelName:eM.DepthToSpace,backendName:"wasm",setupFunc:function(e){w=e.wasm.cwrap(eM.DepthToSpace,null,["number","number","number","array","number","array","array","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=r.x,a=n.blockSize,o=n.dataFormat,s=i.shape[0],l="NHWC"===o?i.shape[1]:i.shape[2],u="NHWC"===o?i.shape[2]:i.shape[3],d="NHWC"===o?i.shape[3]:i.shape[1],c=l*a,p=u*a,h=d/(a*a),f="NHWC"===o?[s,c,p,h]:[s,h,c,p],m=t.makeOutput(f,"float32"),y=t.dataIdMap.get(i.dataId).id,g=new Uint8Array(new Int32Array(eM.util.computeStrides(i.shape)).buffer),v=new Uint8Array(new Int32Array(f).buffer),b=new Uint8Array(new Int32Array(eM.util.computeStrides(f)).buffer),S=t.dataIdMap.get(m.dataId).id;return w(y,a,"NHWC"===o?1:0,g,i.shape.length-1,v,b,f.length,S),m}},tv={kernelName:eM.DepthwiseConv2dNative,backendName:"wasm",setupFunc:function(e){E=e.wasm.cwrap(eM.DepthwiseConv2dNative,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.attrs,n=e.backend,i=t.x,a=t.filter,o=n.dataIdMap.get(i.dataId).id,s=n.dataIdMap.get(a.dataId).id,l=r.strides,u=r.dilations,d=r.pad,c=r.dimRoundingMode,p=eM.backend_util.computeConv2DInfo(i.shape,a.shape,l,null==u?[1,1]:u,d,c,!0),h=p.filterHeight,f=p.filterWidth,m=p.padInfo.top,y=p.padInfo.right,g=p.padInfo.bottom,v=p.padInfo.left,b=p.dilationHeight,S=p.dilationWidth,x=p.strideHeight,P=p.strideWidth,C=p.inChannels,_=p.outChannels,A="SAME"===p.padInfo.type?1:0;if("channelsLast"!==p.dataFormat)throw Error("wasm backend DepthwiseConv2dNative does not support dataFormat:'"+"".concat(p.dataFormat,"'. Please use 'channelsLast'."));var T=n.makeOutput(p.outShape,"float32"),w=n.dataIdMap.get(T.dataId).id;return E(o,i.shape[0],i.shape[1],i.shape[2],s,h,f,m,y,g,v,A,b,S,x,P,C,_,w),T}},tb={kernelName:eM.Diag,backendName:"wasm",setupFunc:function(e){D=e.wasm.cwrap("Diag",null,["number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=t.x,a=eM.util.sizeFromShape(i.shape),o=r.makeOutput(__spreadArray(__spreadArray([],__read(i.shape),!1),__read(i.shape),!1),i.dtype);return D(r.dataIdMap.get(i.dataId).id,n[i.dtype],a,r.dataIdMap.get(o.dataId).id),o}},tS={kernelName:eM.Dilation2D,backendName:"wasm",setupFunc:function(e){O=e.wasm.cwrap(eM.Dilation2D,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=t.filter,s=i.strides,l=i.pad,u=i.dilations;if(a.dtype!==o.dtype)throw Error("Dilation2D error: x must have the same dtype as filter. Got ".concat(a.dtype," and ").concat(o.dtype));var d=eM.backend_util.computeDilation2DInfo(a.shape,o.shape,s,l,"NHWC",u),c=r.makeOutput(d.outShape,a.dtype);return O(r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(c.dataId).id,n[a.dtype],d.batchSize,d.inChannels,d.inHeight,d.inWidth,d.outHeight,d.outWidth,d.strideHeight,d.strideWidth,d.dilationHeight,d.dilationWidth,d.filterHeight,d.filterWidth,d.padInfo.top,d.padInfo.left),c}},tx={kernelName:eM.Dilation2DBackpropFilter,backendName:"wasm",setupFunc:function(e){R=e.wasm.cwrap(eM.Dilation2DBackpropFilter,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=t.filter,s=t.dy,l=i.strides,u=i.pad,d=i.dilations;if(a.dtype!==o.dtype||a.dtype!==s.dtype)throw Error("Dilation2DBackpropFilter error: x must have the same dtype as filter and dy. Got ".concat(a.dtype,", ").concat(o.dtype,", and ").concat(s.dtype));var c=eM.backend_util.computeDilation2DInfo(a.shape,o.shape,l,u,"NHWC",d),p=r.makeOutput(o.shape,o.dtype);return R(r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(s.dataId).id,r.dataIdMap.get(p.dataId).id,n[a.dtype],c.batchSize,c.inChannels,c.inHeight,c.inWidth,c.outHeight,c.outWidth,c.strideHeight,c.strideWidth,c.dilationHeight,c.dilationWidth,c.filterHeight,c.filterWidth,c.padInfo.top,c.padInfo.left),p}},tP={kernelName:eM.Dilation2DBackpropInput,backendName:"wasm",setupFunc:function(e){M=e.wasm.cwrap(eM.Dilation2DBackpropInput,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=t.filter,s=t.dy,l=i.strides,u=i.pad,d=i.dilations;if(a.dtype!==o.dtype||a.dtype!==s.dtype)throw Error("Dilation2DBackpropInput error: x must have the same dtype as filter and dy. Got ".concat(a.dtype,", ").concat(o.dtype,", and ").concat(s.dtype));var c=eM.backend_util.computeDilation2DInfo(a.shape,o.shape,l,u,"NHWC",d),p=r.makeOutput(a.shape,a.dtype);return M(r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(s.dataId).id,r.dataIdMap.get(p.dataId).id,n[a.dtype],c.batchSize,c.inChannels,c.inHeight,c.inWidth,c.outHeight,c.outWidth,c.strideHeight,c.strideWidth,c.dilationHeight,c.dilationWidth,c.filterHeight,c.filterWidth,c.padInfo.top,c.padInfo.left),p}},tC=createUnaryKernelConfig(eM.Elu),t_={kernelName:eM.EluGrad,backendName:"wasm",setupFunc:function(e){k=e.wasm.cwrap(eM.EluGrad,null,["number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=t.dy,i=t.y,a=r.makeOutput(i.shape,"float32"),tensorId=function(e){return r.dataIdMap.get(e.dataId).id};return k(tensorId(i),tensorId(n),tensorId(a)),a}},tA=createBinaryKernelConfig(eM.Equal,!1,"bool"),tT=createUnaryKernelConfig(eM.Erf),tw=createUnaryKernelConfig(eM.Exp,"float32");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function expandDims(e){var t=e.inputs,r=e.attrs,n=e.backend,i=t.input,a=r.dim,o=i.shape.length,s=i.shape.slice(),l=a;return a<0&&(eM.util.assert(-(o+1)<=a,function(){return"Axis must be in the interval [".concat(-(o+1),", ").concat(o,"]")}),l=o+a+1),s.splice(l,0,1),reshape({inputs:{x:i},backend:n,attrs:{shape:s}})}var tE={kernelName:eM.ExpandDims,backendName:"wasm",kernelFunc:expandDims},tD=createUnaryKernelConfig(eM.Expm1,"float32");/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fill(e){var t=e.attrs,r=t.shape,n=t.value,i=e.backend,a=e.attrs.dtype;a=a||eM.util.inferDtype(n);var o=i.makeOutput(r,a);return i.typedArrayFromHeap(o).fill(n),o}var tO={kernelName:eM.Fill,backendName:"wasm",kernelFunc:fill},tR={kernelName:eM.FlipLeftRight,backendName:"wasm",kernelFunc:function(e){var t=e.inputs,r=e.backend,n=t.image,i=r.makeOutput(n.shape,n.dtype),a=r.dataIdMap.get(n.dataId).id,o=r.dataIdMap.get(i.dataId).id,s=__read(n.shape,4),l=s[0],u=s[1],d=s[2],c=s[3];return L(a,l,u,d,c,o),i},setupFunc:function(e){L=e.wasm.cwrap(eM.FlipLeftRight,null,["number","number","number","number","number","number"])}},tM=createUnaryKernelConfig(eM.Floor),tk=createBinaryKernelConfig(eM.FloorDiv),tL={kernelName:eM.FusedBatchNorm,backendName:"wasm",setupFunc:function(e){I=e.wasm.cwrap(eM.FusedBatchNorm,null,["number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs.varianceEpsilon,i=r.x,a=r.mean,o=r.variance,s=r.offset,l=r.scale,u=t.dataIdMap.get(i.dataId).id,d=t.dataIdMap.get(a.dataId).id,c=t.dataIdMap.get(o.dataId).id,p=null!=s?t.dataIdMap.get(s.dataId).id:0,h=null!=l?t.dataIdMap.get(l.dataId).id:0,f=t.makeOutput(i.shape,i.dtype);if(0===eM.util.sizeFromShape(i.shape))return f;var m=t.dataIdMap.get(f.dataId).id;return I(u,d,c,p,h,n,m),f}},tI={kernelName:eM.FusedConv2D,backendName:"wasm",setupFunc:function(e){B=e.wasm.cwrap(eM.FusedConv2D,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.attrs,n=e.backend,a=t.x,o=t.filter,s=t.bias,l=t.preluActivationWeights,u=r.strides,d=r.pad,c=r.dilations,p=r.dataFormat,h=r.dimRoundingMode,f=r.activation,m=r.leakyreluAlpha,y=eM.backend_util.computeConv2DInfo(a.shape,o.shape,u,c,d,h),g=i[f];if(null==g)throw Error("".concat(f," activation not yet supported for FusedConv2D ")+"in the wasm backend.");var v=n.dataIdMap.get(a.dataId).id,b=n.dataIdMap.get(o.dataId).id,S=y.outChannels,x=0;if(null!=s){var P=n.dataIdMap.get(s.dataId);if(1!==P.shape.length)throw Error("FusedConv2D only supports rank-1 bias but got "+"rank ".concat(P.shape.length,"."));if(P.shape[0]!==S)throw Error("FusedConv2D bias shape (".concat(P.shape,") does not ")+"match the number of output channels (".concat(S,")"));x=P.id}var C=y.filterHeight,_=y.filterWidth,A=y.padInfo.top,T=y.padInfo.right,w=y.padInfo.bottom,E=y.padInfo.left,D=y.dilationHeight,O=y.dilationWidth,R=y.strideHeight,M=y.strideWidth,k=y.inChannels,L="SAME"===y.padInfo.type?1:0,I=y.batchSize,N=y.inHeight,F=y.inWidth;if("NHWC"!==p)throw Error("wasm backend FusedConv2D does not support dataFormat:'"+"".concat(p,"'. Please use 'NHWC'."));var V=n.makeOutput(y.outShape,"float32"),j=n.dataIdMap.get(V.dataId).id,H=null==l?0:n.dataIdMap.get(l.dataId).id;return B(v,I,N,F,b,C,_,x,A,T,w,E,L,D,O,R,M,k,S,g,H,m||0,j),V}},tB={kernelName:eM.FusedDepthwiseConv2D,backendName:"wasm",setupFunc:function(e){N=e.wasm.cwrap(eM.FusedDepthwiseConv2D,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.attrs,n=e.backend,a=t.x,o=t.filter,s=t.bias,l=t.preluActivationWeights,u=r.strides,d=r.pad,c=r.dilations,p=r.dataFormat,h=r.dimRoundingMode,f=r.activation,m=r.leakyreluAlpha,y=eM.backend_util.computeConv2DInfo(a.shape,o.shape,u,c,d,h,!0),g=i[f];if(null==g)throw Error("".concat(f," activation not yet supported for FusedDepthwiseConv2D ")+"in the wasm backend.");var v=n.dataIdMap.get(a.dataId).id,b=n.dataIdMap.get(o.dataId).id,S=y.outChannels,x=0;if(null!=s){var P=n.dataIdMap.get(s.dataId);if(1!==P.shape.length)throw Error("FusedDepthwiseConv2D only supports rank-1 bias but got "+"rank ".concat(P.shape.length,"."));if(P.shape[0]!==S)throw Error("FusedDepthwiseConv2D bias shape (".concat(P.shape,") does not ")+"match the number of output channels (".concat(S,")"));x=P.id}var C=y.filterHeight,_=y.filterWidth,A=y.padInfo.top,T=y.padInfo.right,w=y.padInfo.bottom,E=y.padInfo.left,D=y.dilationHeight,O=y.dilationWidth,R=y.strideHeight,M=y.strideWidth,k=y.inChannels,L="SAME"===y.padInfo.type?1:0,I=y.batchSize,B=y.inHeight,F=y.inWidth;if("NHWC"!==p)throw Error("wasm backend FusedDepthwiseConv2D does not support dataFormat:'"+"".concat(p,"'. Please use 'NHWC'."));var V=n.makeOutput(y.outShape,"float32"),j=n.dataIdMap.get(V.dataId).id,H=null==l?0:n.dataIdMap.get(l.dataId).id;return N(v,I,B,F,b,C,_,x,A,T,w,E,L,D,O,R,M,k,S,g,H,m||0,j),V}},tN={kernelName:eM.GatherNd,backendName:"wasm",setupFunc:function(e){F=e.wasm.cwrap(eM.GatherNd,null,["number","number","number","number","number","number","array","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=r.params,a=r.indices,o=__read(eM.gather_util.prepareAndValidate(i,a),4),s=o[0],l=o[1],u=o[2],d=o[3],c=t.makeOutput(s,i.dtype);if(0===l)return c;var p=a.shape,h=p[p.length-1],f=t.dataIdMap.get(i.dataId).id,m=t.dataIdMap.get(a.dataId).id,y=new Uint8Array(new Int32Array(d).buffer),g=t.dataIdMap.get(c.dataId).id;return F(f,n[i.dtype],m,l,h,u,y,g),c}},tF={kernelName:eM.GatherV2,backendName:"wasm",setupFunc:function(e){V=e.wasm.cwrap("Gather",null,["number","number","array","number","number","number","array","number"])},kernelFunc:function(e){for(var t=e.backend,r=e.inputs,i=e.attrs,a=r.x,o=r.indices,s=i.axis,l=i.batchDims,u=eM.util.parseAxisParam(s,a.shape)[0],d=t.readSync(o.dataId),c=a.shape[u],p=0;p<d.length;++p)!function(e){var t=d[e];eM.util.assert(t<=c-1&&t>=0,function(){return"GatherV2: the index value ".concat(t," is not in [0, ").concat(c-1,"]")})}(p);var h=eM.backend_util.segment_util.collectGatherOpShapeInfo(a,o,u,l),f=reshape({inputs:{x:a},attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]},backend:t}),m=eM.util.sizeFromShape(o.shape),y=reshape({inputs:{x:o},attrs:{shape:[h.batchSize,m/h.batchSize]},backend:t}),g=[h.batchSize,h.outerSize,m/h.batchSize,h.sliceSize],v=t.makeOutput(g,a.dtype);if(0===eM.util.sizeFromShape(a.shape))return v;var b=f.shape.length-1,S=t.dataIdMap.get(f.dataId).id,x=t.dataIdMap.get(y.dataId).id,P=t.dataIdMap.get(v.dataId).id,C=new Uint8Array(new Int32Array(eM.util.computeStrides(f.shape)).buffer),_=new Uint8Array(new Int32Array(eM.util.computeStrides(g)).buffer);return V(S,n[a.dtype],C,b,x,h.batchSize,_,P),t.disposeData(f.dataId),t.disposeData(y.dataId),v.shape=h.outputShape,v}},tV=createBinaryKernelConfig(eM.Greater,!1,"bool"),tj=createBinaryKernelConfig(eM.GreaterEqual,!1,"bool"),tH=createUnaryKernelConfig(eM.IsFinite,"bool"),tz=createUnaryKernelConfig(eM.IsInf,"bool"),tU=createUnaryKernelConfig(eM.IsNan,"bool"),tG={kernelName:eM.LeakyRelu,backendName:"wasm",setupFunc:function(e){j=e.wasm.cwrap(eM.LeakyRelu,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.inputs.x,r=e.attrs.alpha,i=e.backend,a=i.dataIdMap.get(t.dataId).id,o=i.makeOutput(t.shape,"float32");if(0!==eM.util.sizeFromShape(t.shape)){var s=i.dataIdMap.get(o.dataId).id;j(a,n[t.dtype],r,s)}return o}},tW=createBinaryKernelConfig(eM.Less,!1,"bool"),tX=createBinaryKernelConfig(eM.LessEqual,!1,"bool"),tY={kernelName:eM.LinSpace,backendName:"wasm",setupFunc:function(e){H=e.wasm.cwrap(eM.LinSpace,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.attrs,r=e.backend,n=t.start,i=t.stop,a=Math.floor(t.num),o=r.makeOutput([a],"float32");return H(r.dataIdMap.get(o.dataId).id,n,i,a),o}},tq=createUnaryKernelConfig(eM.Log),tK=createUnaryKernelConfig(eM.Log1p),t$=createBinaryKernelConfig(eM.LogicalAnd,!1,"bool"),tZ=createUnaryKernelConfig(eM.LogicalNot),tJ=createBinaryKernelConfig(eM.LogicalOr,!1,"bool"),tQ=createBinaryKernelConfig(eM.LogicalXor,!1,"bool"),t1={kernelName:eM.LRN,backendName:"wasm",setupFunc:function(e){z=e.wasm.cwrap(eM.LRN,null,["number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=n.depthRadius,o=n.bias,s=n.alpha,l=n.beta;if("float32"!==i.dtype)throw Error("LRN error: x must have dtype float32");var u=r.makeOutput(i.shape,i.dtype);return z(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(u.dataId).id,i.shape[3],a,o,s,l),u}},t0={kernelName:eM.LRNGrad,backendName:"wasm",setupFunc:function(e){U=e.wasm.cwrap(eM.LRNGrad,null,["number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=t.y,o=t.dy,s=n.depthRadius,l=n.bias,u=n.alpha,d=n.beta;if("float32"!==i.dtype||"float32"!==a.dtype||"float32"!==o.dtype)throw Error("LRNGrad error: x, y, and dy must have dtype float32");var c=r.makeOutput(i.shape,i.dtype);return U(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(c.dataId).id,o.shape[3],s,l,u,d),c}},t2={kernelName:eM.Max,backendName:"wasm",setupFunc:function(e){G=e.wasm.cwrap(eM.Max,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=i.reductionIndices,o=i.keepDims,s=r.x,l=t.dataIdMap.get(s.dataId).id,u=s,d=permuteAxesAndTranspose(s,a,t),c=d.transposed,p=d.axes,h=d.originalAxes,f=d.inputWasTransposed;if(f){var m=t.dataIdMap.get(c.dataId).id;u=c,l=m}var y=u.shape.length;eM.backend_util.assertAxesAreInnerMostDims("max",p,y);var g=__read(eM.backend_util.computeOutAndReduceShapes(u.shape,p),2),v=g[0],b=g[1],S=eM.util.sizeFromShape(b),x=t.makeOutput(v,s.dtype);if(0!==eM.util.sizeFromShape(u.shape)){var P=t.dataIdMap.get(x.dataId).id;G(l,n[s.dtype],S,P)}if(f&&t.disposeData(c.dataId),o){var C=eM.backend_util.expandShapeToKeepDim(x.shape,h);x.shape=C}return x}},t4=createBinaryKernelConfig(eM.Maximum),t3={kernelName:eM.MaxPool,backendName:"wasm",setupFunc:function(e){W=e.wasm.cwrap(eM.MaxPool,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.attrs,n=e.backend,i=t.x,a=n.dataIdMap.get(i.dataId).id;eM.util.assert("float32"===i.dtype,function(){return"Error in MaxPool: only float32 input is supported. Got ".concat(i.dtype,".")});var o=r.filterSize,s=r.strides,l=r.pad,u=r.dimRoundingMode,d=eM.backend_util.computePool2DInfo(i.shape,o,s,1,l,u),c=d.filterHeight,p=d.filterWidth,h=d.padInfo.top,f=d.padInfo.right,m=d.padInfo.bottom,y=d.padInfo.left,g=d.dilationHeight,v=d.dilationWidth,b=d.strideHeight,S=d.strideWidth,x=d.inChannels,P=d.outChannels;if("channelsLast"!==d.dataFormat)throw Error("wasm backend does not support dataFormat:'"+"".concat(d.dataFormat,"'. Please use 'channelsLast'."));var C=n.makeOutput(d.outShape,"float32"),_=n.dataIdMap.get(C.dataId).id;return W(a,i.shape[0],i.shape[1],i.shape[2],c,p,h,f,m,y,g,v,b,S,x,P,_),C}},t6={kernelName:eM.MaxPool3D,backendName:"wasm",setupFunc:function(e){X=e.wasm.cwrap("MaxPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=n.filterSize,o=n.strides,s=n.pad,l=n.dimRoundingMode,u=n.dataFormat,d=eM.backend_util.computePool3DInfo(i.shape,a,o,1,s,l,u),c=r.makeOutput(d.outShape,i.dtype);return X(r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(c.dataId).id,d.batchSize,d.inChannels,d.inDepth,d.inHeight,d.inWidth,d.outDepth,d.outHeight,d.outWidth,d.strideDepth,d.strideHeight,d.strideWidth,d.dilationDepth,d.dilationHeight,d.dilationWidth,d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth,d.padInfo.front,d.padInfo.top,d.padInfo.left),c}},t8={kernelName:eM.MaxPool3DGrad,backendName:"wasm",setupFunc:function(e){Y=e.wasm.cwrap("MaxPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.dy,a=t.input,o=n.filterSize,s=n.strides,l=n.pad,u=n.dimRoundingMode,d=eM.backend_util.computePool3DInfo(a.shape,o,s,1,l,u),c=r.makeOutput(a.shape,a.dtype);return Y(r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(c.dataId).id,d.batchSize,d.inChannels,d.inDepth,d.inHeight,d.inWidth,d.outDepth,d.outHeight,d.outWidth,d.strideDepth,d.strideHeight,d.strideWidth,d.dilationDepth,d.dilationHeight,d.dilationWidth,d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth,d.padInfo.front,d.padInfo.top,d.padInfo.left),c}},t5={kernelName:eM.MaxPoolGrad,backendName:"wasm",setupFunc:function(e){q=e.wasm.cwrap("MaxPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.dy,a=t.input,o=n.filterSize,s=n.strides,l=n.pad,u=n.dimRoundingMode,d=eM.backend_util.computePool2DInfo(a.shape,o,s,1,l,u),c=r.makeOutput(a.shape,a.dtype);return q(r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(i.dataId).id,r.dataIdMap.get(c.dataId).id,d.batchSize,d.inChannels,d.inHeight,d.inWidth,d.outHeight,d.outWidth,d.strideHeight,d.strideWidth,d.dilationHeight,d.dilationWidth,d.effectiveFilterHeight,d.effectiveFilterWidth,d.padInfo.top,d.padInfo.left),c}},t9={kernelName:eM.MaxPoolWithArgmax,backendName:"wasm",setupFunc:function(e){K=e.wasm.cwrap("MaxPoolWithArgmax",null,["number","number","number","number","boolean","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=i.filterSize,s=i.strides,l=i.pad,u=i.includeBatchInIndex;eM.util.assert(4===a.shape.length,function(){return"Error in maxPool: input must be rank 4 but got rank ".concat(a.shape.length,".")});var d=[1,1];eM.util.assert(eM.backend_util.eitherStridesOrDilationsAreOne(s,d),function(){return"Error in maxPool: Either strides or dilations must be 1. "+"Got strides ".concat(s," and dilations '").concat(d,"'")});var c=eM.backend_util.computePool2DInfo(a.shape,o,s,[1,1],l),p=r.makeOutput(c.outShape,a.dtype),h=r.makeOutput(c.outShape,"int32");return K(r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(p.dataId).id,r.dataIdMap.get(h.dataId).id,n[a.dtype],u,c.batchSize,c.inChannels,c.inHeight,c.inWidth,c.outHeight,c.outWidth,c.strideHeight,c.strideWidth,c.dilationHeight,c.dilationWidth,c.effectiveFilterHeight,c.effectiveFilterWidth,c.padInfo.top,c.padInfo.left),[p,h]}},t7={kernelName:eM.Mean,backendName:"wasm",setupFunc:function(e){$=e.wasm.cwrap(eM.Mean,null,["number, number, number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=n.axis,a=n.keepDims,o=r.x,s=t.dataIdMap.get(o.dataId).id,l=s,u=o,d=permuteAxesAndTranspose(o,i,t),c=d.transposed,p=d.axes,h=d.originalAxes,f=d.inputWasTransposed,m=p;if(f){var y=t.dataIdMap.get(c.dataId).id;y!==s&&(u=c,l=y,m=eM.backend_util.getInnerMostAxes(m.length,u.shape.length))}eM.backend_util.assertAxesAreInnerMostDims("mean",m,u.shape.length);var g=__read(eM.backend_util.computeOutAndReduceShapes(u.shape,m),2),v=g[0],b=g[1],S=eM.util.sizeFromShape(b),x=u;"float32"!==u.dtype&&(x=cast({backend:t,inputs:{x:u},attrs:{dtype:"float32"}}),l=t.dataIdMap.get(x.dataId).id);var P=t.makeOutput(v,"float32");if(0!==eM.util.sizeFromShape(u.shape)){var C=t.dataIdMap.get(P.dataId).id;$(l,S,C)}if(f&&t.disposeData(c.dataId),a){var _=eM.backend_util.expandShapeToKeepDim(P.shape,h);P.shape=_}return"float32"!==u.dtype&&t.disposeData(x.dataId),P}},re={kernelName:eM.Min,backendName:"wasm",setupFunc:function(e){Z=e.wasm.cwrap(eM.Min,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=i.axis,o=i.keepDims,s=r.x,l=t.dataIdMap.get(s.dataId).id,u=l,d=s,c=permuteAxesAndTranspose(s,a,t),p=c.transposed,h=c.axes,f=c.originalAxes,m=c.inputWasTransposed;if(m){var y=t.dataIdMap.get(p.dataId).id;y!==l&&(d=p,u=y)}var g=d.shape.length;eM.backend_util.assertAxesAreInnerMostDims("min",h,g);var v=__read(eM.backend_util.computeOutAndReduceShapes(d.shape,h),2),b=v[0],S=v[1],x=eM.util.sizeFromShape(S),P=t.makeOutput(b,d.dtype);if(0!==eM.util.sizeFromShape(d.shape)){var C=t.dataIdMap.get(P.dataId).id;Z(u,n[s.dtype],x,C)}if(m&&t.disposeData(p.dataId),o){var _=eM.backend_util.expandShapeToKeepDim(P.shape,f);P.shape=_}return P}},rt=createBinaryKernelConfig(eM.Minimum);!function(e){e[e.reflect=0]="reflect",e[e.symmetric=1]="symmetric"}(J||(J={}));var rr={kernelName:eM.MirrorPad,backendName:"wasm",kernelFunc:function(e){var t=e.inputs.x,r=e.backend,i=e.attrs,a=i.paddings,o=i.mode,s=a.map(function(e,r){return e[0]+t.shape[r]+e[1]}),l=r.dataIdMap.get(t.dataId).id,u=r.makeOutput(s,t.dtype),d=r.dataIdMap.get(u.dataId).id,c=new Uint8Array(new Int32Array(t.shape).buffer),p=a.map(function(e){return e[0]}),h=a.map(function(e){return e[1]}),f=new Uint8Array(new Int32Array(p).buffer),m=new Uint8Array(new Int32Array(h).buffer);return Q(l,c,t.shape.length,n[t.dtype],f,m,J[o],d),u},setupFunc:function(e){Q=e.wasm.cwrap(eM.MirrorPad,null,["number","array","number","number","array","array","number","number"])}};function softmax(e){var t=e.backend,r=e.inputs.logits,n=e.attrs.dim,i=t.dataIdMap.get(r.dataId).id,a=t.makeOutput(r.shape,r.dtype),o=t.dataIdMap.get(a.dataId).id,s=r.shape[n],l=eM.util.sizeFromShape(r.shape)/s;return 0===eM.util.sizeFromShape(a.shape)||ee(i,o,s,l),a}var rn={kernelName:eM.Softmax,backendName:"wasm",setupFunc:function(e){ee=e.wasm.cwrap(eM.Softmax,null,["number","number","number","number"])},kernelFunc:softmax},ri={kernelName:eM.Multinomial,backendName:"wasm",setupFunc:function(e){et=e.wasm.cwrap(eM.Multinomial,null,["number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.logits,a=n.numSamples,o=n.seed,s=n.normalized;if("float32"!==i.dtype)throw Error("Tensor logits must have dtype float32, got ".concat(i.dtype));var l=s?i:softmax({inputs:{logits:i},backend:r,attrs:{dim:i.shape.length-1}}),u=__read(l.shape,2),d=u[0],c=u[1],p=r.makeOutput([d,a],"int32");return et(r.dataIdMap.get(l.dataId).id,d,c,a,o,r.dataIdMap.get(p.dataId).id),s||r.disposeData(l.dataId),p}},ra=createBinaryKernelConfig(eM.Mod),ro=createBinaryKernelConfig(eM.Multiply),rs=createUnaryKernelConfig(eM.Neg);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function parseResultStruct(e,t){var r=new Int32Array(e.wasm.HEAPU8.buffer,t,4),n=r[0],i=r[1],a=r[2],o=r[3];return e.wasm._free(t),{pSelectedIndices:n,selectedSize:i,pSelectedScores:a,pValidOutputs:o}}var rl={kernelName:eM.NonMaxSuppressionV3,backendName:"wasm",setupFunc:function(e){er=e.wasm.cwrap(eM.NonMaxSuppressionV3,"number",["number","number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=n.iouThreshold,a=n.maxOutputSize,o=n.scoreThreshold,s=r.boxes,l=r.scores,u=t.dataIdMap.get(s.dataId).id,d=t.dataIdMap.get(l.dataId).id,c=parseResultStruct(t,er(u,d,a,i,o)),p=c.pSelectedIndices,h=c.selectedSize,f=c.pSelectedScores,m=c.pValidOutputs;return t.wasm._free(f),t.wasm._free(m),t.makeOutput([h],"int32",p)}},ru={kernelName:eM.NonMaxSuppressionV4,backendName:"wasm",setupFunc:function(e){en=e.wasm.cwrap(eM.NonMaxSuppressionV4,"number",["number","number","number","number","number","bool"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=n.iouThreshold,a=n.maxOutputSize,o=n.scoreThreshold,s=n.padToMaxOutputSize,l=r.boxes,u=r.scores,d=t.dataIdMap.get(l.dataId).id,c=t.dataIdMap.get(u.dataId).id,p=parseResultStruct(t,en(d,c,a,i,o,s)),h=p.pSelectedIndices,f=p.selectedSize,m=p.pSelectedScores,y=p.pValidOutputs;return t.wasm._free(m),[t.makeOutput([f],"int32",h),t.makeOutput([],"int32",y)]}},rd={kernelName:eM.NonMaxSuppressionV5,backendName:"wasm",setupFunc:function(e){ei=e.wasm.cwrap(eM.NonMaxSuppressionV5,"number",["number","number","number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=n.iouThreshold,a=n.maxOutputSize,o=n.scoreThreshold,s=n.softNmsSigma,l=r.boxes,u=r.scores,d=t.dataIdMap.get(l.dataId).id,c=t.dataIdMap.get(u.dataId).id,p=parseResultStruct(t,ei(d,c,a,i,o,s)),h=p.pSelectedIndices,f=p.selectedSize,m=p.pSelectedScores,y=p.pValidOutputs;return t.wasm._free(y),[t.makeOutput([f],"int32",h),t.makeOutput([f],"float32",m)]}},rc=createBinaryKernelConfig(eM.NotEqual,!1,"bool"),rp={kernelName:eM.OneHot,backendName:"wasm",setupFunc:function(e){ea=e.wasm.cwrap(eM.OneHot,null,["number","number","number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.indices,a=n.dtype,o=n.depth,s=n.onValue,l=n.offValue,u=r.makeOutput(__spreadArray(__spreadArray([],__read(i.shape),!1),[o],!1),a),d=r.dataIdMap.get(u.dataId).id,c=r.dataIdMap.get(i.dataId).id;return ea(c,o,s,l,d),u}},rh={kernelName:eM.OnesLike,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.inputs.x,r=e.backend,n=r.makeOutput(t.shape,t.dtype);return r.typedArrayFromHeap(n).fill(1),n}},rf={kernelName:eM.Pack,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.inputs,r=e.backend,n=e.attrs.axis;if(1===t.length)return expandDims({inputs:{input:t[0]},backend:r,attrs:{dim:n}});var i=t[0].shape,a=t[0].dtype;t.forEach(function(e){eM.util.assertShapesMatch(i,e.shape,"All tensors passed to stack must have matching shapes"),eM.util.assert(a===e.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var o=[],s=concat({inputs:t.map(function(e){var t=expandDims({inputs:{input:e},backend:r,attrs:{dim:n}});return o.push(t),t}),backend:r,attrs:{axis:n}});return o.forEach(function(e){return r.disposeData(e.dataId)}),s}},rm={kernelName:eM.PadV2,backendName:"wasm",kernelFunc:function(e){var t=e.inputs.x,r=e.backend,i=e.attrs,a=i.paddings,o=i.constantValue,s=a.map(function(e,r){return e[0]+t.shape[r]+e[1]});if(0===eM.util.sizeFromShape(t.shape))return fill({backend:r,attrs:{shape:s,value:o,dtype:t.dtype}});var l=r.dataIdMap.get(t.dataId).id,u=r.makeOutput(s,t.dtype),d=r.dataIdMap.get(u.dataId).id,c=new Uint8Array(new Int32Array(t.shape).buffer),p=a.map(function(e){return e[0]}),h=a.map(function(e){return e[1]}),f=new Uint8Array(new Int32Array(p).buffer),m=new Uint8Array(new Int32Array(h).buffer);return eo(l,c,t.shape.length,n[t.dtype],f,m,o,d),u},setupFunc:function(e){eo=e.wasm.cwrap(eM.PadV2,null,["number","array","number","number","array","array","number","number"])}},ry=createBinaryKernelConfig(eM.Pow),rg={kernelName:eM.Prelu,backendName:"wasm",setupFunc:function(e){es=e.wasm.cwrap(eM.Prelu,null,["number","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,n=t.x,i=t.alpha,a=r.dataIdMap.get(n.dataId).id,o=r.dataIdMap.get(i.dataId).id,s=a,l=n;"float32"!==n.dtype&&(l=cast({backend:r,inputs:{x:n},attrs:{dtype:"float32"}}),s=r.dataIdMap.get(l.dataId).id);var u=r.makeOutput(n.shape,"float32"),d=r.dataIdMap.get(u.dataId).id;return es(s,o,d),"float32"!==n.dtype&&r.disposeData(l.dataId),u}},rv={kernelName:eM.Prod,backendName:"wasm",setupFunc:function(e){el=e.wasm.cwrap(eM.Prod,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=i.axis,o=i.keepDims,s=r.x,l=t.dataIdMap.get(s.dataId).id,u=l,d=s,c=permuteAxesAndTranspose(s,a,t),p=c.transposed,h=c.axes,f=c.originalAxes,m=c.inputWasTransposed,y=h;if(m){var g=t.dataIdMap.get(p.dataId).id;g!==l&&(d=p,u=g,y=eM.backend_util.getInnerMostAxes(y.length,d.shape.length))}eM.backend_util.assertAxesAreInnerMostDims("prod",y,d.shape.length);var v=__read(eM.backend_util.computeOutAndReduceShapes(d.shape,y),2),b=v[0],S=v[1],x=eM.util.sizeFromShape(S),P=t.makeOutput(b,d.dtype);if(0!==eM.util.sizeFromShape(d.shape)){var C=t.dataIdMap.get(P.dataId).id;el(u,x,n[P.dtype],C)}if(m&&t.disposeData(p.dataId),o){var _=eM.backend_util.expandShapeToKeepDim(P.shape,f);P.shape=_}return P}},rb={kernelName:eM.Range,backendName:"wasm",kernelFunc:function(e){var t=e.backend,r=e.attrs,n=r.start,i=r.stop,a=r.step,o=r.dtype,s=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){var i=e<t&&r<0,a=t<e&&r>1;if(e===t||i||a)return eM.util.makeZerosTypedArray(0,n);var o=Math.abs(Math.ceil((t-e)/r)),s=eM.util.makeZerosTypedArray(o,n);t<e&&1===r&&(r=-1),s[0]=e;for(var l=1;l<s.length;l++)s[l]=s[l-1]+r;return s}(n,i,a,o),l=t.makeOutput([s.length],o);return t.typedArrayFromHeap(l).set(s),l}},rS=createBinaryKernelConfig(eM.RealDiv),rx=createUnaryKernelConfig(eM.Reciprocal),rP=createUnaryKernelConfig(eM.Relu),rC=createUnaryKernelConfig(eM.Relu6),r_={kernelName:eM.ResizeBilinear,backendName:"wasm",setupFunc:function(e){eu=e.wasm.cwrap(eM.ResizeBilinear,null,["number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t,r=e.backend,n=e.inputs,i=e.attrs,a=n.images,o=i.alignCorners,s=i.halfPixelCenters,l=__read(i.size,2),u=l[0],d=l[1],c=__read(a.shape,4),p=c[0],h=c[1],f=c[2],m=c[3],y=[p,u,d,m],g=r.dataIdMap.get(a.dataId);"float32"!==g.dtype&&(t=cast({backend:r,inputs:{x:a},attrs:{dtype:"float32"}}),g=r.dataIdMap.get(t.dataId));var v=g.id,b=r.makeOutput(y,"float32");if(0===eM.util.sizeFromShape(a.shape))return b;var S=r.dataIdMap.get(b.dataId).id;return eu(v,p,h,f,m,u,d,o?1:0,s?1:0,S),null!=t&&r.disposeData(t.dataId),b}},rA={kernelName:eM.ResizeBilinearGrad,backendName:"wasm",setupFunc:function(e){ed=e.wasm.cwrap(eM.ResizeBilinearGrad,null,["number","number","number","array","array","boolean"])},kernelFunc:function(e){var t,r=e.inputs,n=e.backend,i=e.attrs,a=r.images,o=r.dy,s=i.alignCorners,l=n.makeOutput(a.shape,"float32"),u=n.dataIdMap.get(a.dataId);return"float32"!==u.dtype&&(t=cast({backend:n,inputs:{x:a},attrs:{dtype:"float32"}}),u=n.dataIdMap.get(t.dataId)),ed(n.dataIdMap.get(a.dataId).id,n.dataIdMap.get(o.dataId).id,n.dataIdMap.get(l.dataId).id,new Uint8Array(new Int32Array(a.shape).buffer),new Uint8Array(new Int32Array(o.shape).buffer),s),null!=t&&n.disposeData(t.dataId),l}},rT={kernelName:eM.ResizeNearestNeighbor,backendName:"wasm",setupFunc:function(e){ec=e.wasm.cwrap(eM.ResizeNearestNeighbor,null,["number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t,r=e.backend,n=e.inputs,i=e.attrs,a=n.images,o=i.alignCorners,s=i.halfPixelCenters,l=__read(i.size,2),u=l[0],d=l[1],c=__read(a.shape,4),p=c[0],h=c[1],f=c[2],m=c[3],y=[p,u,d,m],g=r.makeOutput(y,"float32");if(0===eM.util.sizeFromShape(a.shape))return g;var v=r.dataIdMap.get(a.dataId);"float32"!==v.dtype&&(t=cast({backend:r,inputs:{x:a},attrs:{dtype:"float32"}}),v=r.dataIdMap.get(t.dataId));var b=v.id,S=r.dataIdMap.get(g.dataId).id;return ec(b,p,h,f,m,u,d,o?1:0,s?1:0,S),null!=t&&r.disposeData(t.dataId),g}},rw={kernelName:eM.ResizeNearestNeighborGrad,backendName:"wasm",setupFunc:function(e){ep=e.wasm.cwrap(eM.ResizeNearestNeighborGrad,null,["number","number","number","array","array","boolean"])},kernelFunc:function(e){var t,r=e.inputs,n=e.backend,i=e.attrs,a=r.images,o=r.dy,s=i.alignCorners,l=n.makeOutput(a.shape,"float32"),u=n.dataIdMap.get(a.dataId);return"float32"!==u.dtype&&(t=cast({backend:n,inputs:{x:a},attrs:{dtype:"float32"}}),u=n.dataIdMap.get(t.dataId)),ep(n.dataIdMap.get(a.dataId).id,n.dataIdMap.get(o.dataId).id,n.dataIdMap.get(l.dataId).id,new Uint8Array(new Int32Array(a.shape).buffer),new Uint8Array(new Int32Array(o.shape).buffer),s),null!=t&&n.disposeData(t.dataId),l}},rE={kernelName:eM.Reverse,backendName:"wasm",kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=n.dims,o=eM.util.parseAxisParam(a,i.shape);if(0===i.shape.length)return identity({inputs:{x:i},backend:r});var s=r.makeOutput(i.shape,i.dtype),l=r.dataIdMap.get(i.dataId).id,u=r.dataIdMap.get(s.dataId).id,d=new Uint8Array(new Int32Array(o).buffer),c=new Uint8Array(new Int32Array(i.shape).buffer);eh(l,d,o.length,c,i.shape.length,u);var p=reshape({inputs:{x:s},attrs:{shape:i.shape},backend:r});return r.disposeData(s.dataId),p},setupFunc:function(e){eh=e.wasm.cwrap(eM.Reverse,null,["number","array","number","array","number","number"])}},rD={kernelName:eM.RotateWithOffset,backendName:"wasm",kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.image,a=n.radians,o=n.fillValue,s=n.center,l=r.makeOutput(i.shape,i.dtype),u=r.dataIdMap.get(i.dataId).id,d=r.dataIdMap.get(l.dataId).id,c=__read(i.shape,4),p=c[0],h=c[1],f=c[2],m=c[3],y=__read(eM.backend_util.getImageCenter(s,h,f),2),g=y[0],v=y[1],b=0===o,S="number"==typeof o?[o,o,o,b?0:255]:__spreadArray(__spreadArray([],__read(o),!1),[255],!1),x=new Uint8Array(new Int32Array(S).buffer);return ef(u,p,h,f,m,a,g,v,x,S.length,d),l},setupFunc:function(e){ef=e.wasm.cwrap(eM.RotateWithOffset,null,["number","number","number","number","number","number","number","number","array","number","number"])}},rO=createUnaryKernelConfig(eM.Round),rR=createUnaryKernelConfig(eM.Rsqrt),rM={kernelName:eM.ScatterNd,backendName:"wasm",setupFunc:function(e){em=e.wasm.cwrap(eM.ScatterNd,null,["number","number","number","number","number","number","array","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=r.indices,o=r.updates,s=i.shape,l=t.makeOutput(s,o.dtype);if(0===eM.util.sizeFromShape(s))return l;var u=eM.scatter_util.calculateShapes(o,a,s),d=u.sliceRank,c=u.numUpdates,p=u.sliceSize,h=u.strides,f=u.outputSize,m=t.dataIdMap.get(a.dataId).id,y=t.dataIdMap.get(o.dataId).id,g=new Uint8Array(new Int32Array(h).buffer),v=t.dataIdMap.get(l.dataId).id;return em(m,y,n[o.dtype],d,c,p,g,f,v),l}},rk={kernelName:eM.SearchSorted,backendName:"wasm",setupFunc:function(e){ey=e.wasm.cwrap(eM.SearchSorted,null,["number","number","number","number","number","number","bool","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.sortedSequence,o=t.values,s=i.side;if(a.dtype!==o.dtype)throw Error("SearchSorted error: sorted_sequence must have the same dtype as values. Got ".concat(a.dtype," and ").concat(o.dtype));var l=r.makeOutput(o.shape,"int32");function tensorId(e){return r.dataIdMap.get(e.dataId).id}return ey(tensorId(a),tensorId(o),a.shape[0],a.shape[1],o.shape[1],n[a.dtype],"left"===s,tensorId(l)),l}},rL={kernelName:eM.Select,backendName:"wasm",kernelFunc:function(e){var t=e.inputs,r=e.backend,n=t.condition,i=t.t,a=t.e,o=r.dataIdMap.get(n.dataId).id,s=r.dataIdMap.get(i.dataId).id,l=r.dataIdMap.get(a.dataId).id,u=r.makeOutput(i.shape,i.dtype),d=r.dataIdMap.get(u.dataId).id,c=n.shape.length,p=i.shape.length,h=0===c||c>1||1===p?1:eM.util.sizeFromShape(i.shape.slice(1));return eg(o,s,l,h,d),u},setupFunc:function(e){eg=e.wasm.cwrap("SelectV2",null,["number","number","number","number","number"])}},rI=createUnaryKernelConfig(eM.Selu),rB=createUnaryKernelConfig(eM.Sign),rN=createUnaryKernelConfig(eM.Sin),rF=createUnaryKernelConfig(eM.Sinh),rV=createUnaryKernelConfig(eM.Softplus),rj={kernelName:eM.SpaceToBatchND,backendName:"wasm",kernelFunc:function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.x,a=n.blockShape,o=n.paddings,s=eM.util.sizeFromShape(a),l=[[0,0]];l.push.apply(l,__spreadArray([],__read(o),!1));for(var u=1+a.length;u<i.shape.length;++u)l.push([0,0]);var d=rm.kernelFunc({inputs:{x:i},backend:r,attrs:{paddings:l,constantValue:0}}),c=eM.backend_util.getReshaped(d.shape,a,s,!1),p=eM.backend_util.getPermuted(c.length,a.length,!1),h=eM.backend_util.getReshapedPermuted(d.shape,a,s,!1),f=reshape({inputs:{x:d},backend:r,attrs:{shape:c}}),m=transpose({inputs:{x:f},backend:r,attrs:{perm:p}}),y=reshape({inputs:{x:m},backend:r,attrs:{shape:h}});return r.disposeData(d.dataId),r.disposeData(f.dataId),r.disposeData(m.dataId),y}};function setup$8(e){ex=e.wasm.cwrap("SparseSegmentReduction",null,["number","number","number","number","number","number","number","number","number"])}function sparseSegmentReduction(e,t){var r,i=e.backend,a=e.inputs,o=a.data,s=a.indices,l=a.segmentIds,u=s.shape[0],d=i.readSync(l.dataId,u-1,u)[0],c=u>0?d+1:0;if(c<0)throw Error(eM.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());var p=o.shape.slice();p[0]=c;var h=i.dataIdMap.get(o.dataId).id,f=i.dataIdMap.get(s.dataId).id,m=i.dataIdMap.get(l.dataId).id,y=i.makeOutput(p,o.dtype),g=i.dataIdMap.get(y.dataId).id,v=i.makeOutput([4],"int32"),b=i.dataIdMap.get(v.dataId).id;ex(h,n[o.dtype],o.shape[0],f,m,g,b,t,0);var S=i.readSync(v.dataId);switch(S[0]){case 0:r=eM.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage();break;case 1:r=eM.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage();break;case 2:r=eM.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(S[1],S[2]);break;case 3:r=eM.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(S[1],S[2],S[3]);break;default:r=""}if(i.disposeData(v.dataId),r)throw i.disposeData(y.dataId),Error(r);return y}var rH=[eN,eF,eV,ej,eH,ez,eW,eX,eY,eq,eK,e$,eZ,eJ,eQ,e1,e4,e0,e2,e6,e9,e7,te,tt,tr,tn,ti,ta,to,ts,tl,tu,td,tc,tp,th,tf,tm,ty,tg,tv,tb,tS,tx,tP,tC,t_,tA,tT,tw,tE,tD,tO,tR,tM,tk,tL,tI,tB,tN,tF,tV,tj,eU,tH,tz,tU,tG,tW,tX,tY,tK,tq,t$,tZ,tJ,tQ,t1,t0,t2,t4,t3,t6,t8,t5,t9,t7,re,rt,rr,ri,ra,ro,rs,rl,ru,rd,rc,rp,rh,rf,rm,ry,rg,rv,rb,rS,rx,rP,rC,e3,r_,rA,rT,rw,rE,rD,rO,rR,rM,rk,rL,rI,{kernelName:"Sigmoid",backendName:"wasm",setupFunc:function(e){ev=e.wasm.cwrap(eM.Sigmoid,null,["number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs.x,n=t.dataIdMap.get(r.dataId).id,i=t.makeOutput(r.shape,r.dtype),a=t.dataIdMap.get(i.dataId).id;return 0===eM.util.sizeFromShape(i.shape)||ev(n,a),i}},rB,rN,rF,e5,rn,rV,rj,{kernelName:eM.SparseFillEmptyRows,backendName:"wasm",setupFunc:function(e){eb=e.wasm.cwrap("SparseFillEmptyRows","number",["number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){var t,r=e.backend,i=e.inputs,a=i.indices,o=i.values,s=i.denseShape,l=i.defaultValue,u=a.shape[0],d=a.shape[1],c=r.readSync(s.dataId)[0],p=[u+c,d],h=r.dataIdMap.get(a.dataId).id,f=r.dataIdMap.get(o.dataId).id,m=r.dataIdMap.get(l.dataId).id,y=r.makeOutput(p,a.dtype),g=r.dataIdMap.get(y.dataId).id,v=r.makeOutput(p.slice(0,1),o.dtype),b=r.dataIdMap.get(v.dataId).id,S=r.makeOutput([c],"bool"),x=r.dataIdMap.get(S.dataId).id,P=r.makeOutput([u],a.dtype),C=r.dataIdMap.get(P.dataId).id,_=r.makeOutput([4],"int32"),A=r.dataIdMap.get(_.dataId).id,T=eb(h,f,n[o.dtype],u,c,d,m,g,b,x,C,A),w=r.readSync(_.dataId);switch(w[0]){case 1:t=eM.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(w[1]);break;case 2:t=eM.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(w[1],w[2]);break;case 3:t=eM.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(w[1],w[2],w[3]);break;default:t=""}if(r.disposeData(_.dataId),t)throw r.disposeData(y.dataId),r.disposeData(v.dataId),r.disposeData(S.dataId),r.disposeData(P.dataId),Error(t);var E=y,D=v;return T!==p[0]&&(E=slice({inputs:{x:y},attrs:{begin:0,size:[T,d]},backend:r}),D=slice({inputs:{x:v},attrs:{begin:0,size:T},backend:r}),r.disposeData(y.dataId),r.disposeData(v.dataId)),[E,D,S,P]}},{kernelName:eM.SparseReshape,backendName:"wasm",setupFunc:function(e){eS=e.wasm.cwrap(eM.SparseReshape,null,["number","number","number","number","number","number","number"])},kernelFunc:function(e){var t,r=e.backend,n=e.inputs,i=n.inputIndices,a=n.inputShape,o=n.newShape;if(2!==i.shape.length)throw Error("Input indices should be a matrix but received shape\n        ".concat(i.shape));if(1!==a.shape.length)throw Error("Input shape should be a vector but received shape\n        ".concat(a.shape));if(1!==o.shape.length)throw Error("Target shape should be a vector but received shape ".concat(o.shape));var s=r.dataIdMap.get(i.dataId).id,l=r.dataIdMap.get(a.dataId).id,u=r.dataIdMap.get(o.dataId).id,d=i.shape[0],c=eM.util.sizeFromShape(o.shape),p=r.makeOutput([d,c],i.dtype),h=r.dataIdMap.get(p.dataId).id,f=r.makeOutput([c],o.dtype),m=r.dataIdMap.get(f.dataId).id,y=r.makeOutput([3],"int32"),g=r.dataIdMap.get(y.dataId).id;eS(s,l,u,d,h,m,g);var v=r.readSync(y.dataId);switch(v[0]){case 0:t=eM.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(v[1],v[2]);break;case 1:t=eM.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(v[1],v[2]);break;case 2:t=eM.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage();break;case 3:var b=Array.from(r.readSync(a.dataId)),S=Array.from(r.readSync(f.dataId));t=eM.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(b,S);break;case 4:var b=Array.from(r.readSync(a.dataId)),S=Array.from(r.readSync(f.dataId));t=eM.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(b,S);break;default:t=""}if(r.disposeData(y.dataId),t)throw r.disposeData(p.dataId),r.disposeData(f.dataId),Error(t);return[p,f]}},{kernelName:eM.SparseSegmentMean,backendName:"wasm",setupFunc:setup$8,kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return sparseSegmentReduction(e,!0)}},{kernelName:eM.SparseSegmentSum,backendName:"wasm",setupFunc:setup$8,kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return sparseSegmentReduction(e,!1)}},{kernelName:eM.SparseToDense,backendName:"wasm",setupFunc:function(e){eP=e.wasm.cwrap(eM.SparseToDense,null,["number","number","number","number","number","number","number","number","array","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=r.sparseIndices,o=r.sparseValues,s=r.defaultValue,l=i.outputShape,u=t.makeOutput(l,s.dtype);if(0===eM.util.sizeFromShape(l))return u;var d=eM.backend_util.calculateShapes(o,a,l),c=d.sliceRank,p=d.numUpdates,h=d.sliceSize,f=d.strides,m=d.outputSize,y=t.dataIdMap.get(a.dataId).id,g=t.dataIdMap.get(o.dataId).id,v=t.dataIdMap.get(s.dataId).id,b=new Uint8Array(new Int32Array(f).buffer),S=t.dataIdMap.get(u.dataId).id;return eP(y,g,o.shape.length,v,n[s.dtype],c,p,h,b,m,S),u}},{kernelName:eM.SplitV,backendName:"wasm",kernelFunc:function(e){var t=e.inputs,r=e.attrs,n=e.backend,i=t.x,a=r.numOrSizeSplits,o=r.axis,s=eM.util.parseAxisParam(o,i.shape)[0],l=eM.backend_util.prepareSplitSize(i,a,s),u=Array(i.shape.length).fill(0),d=i.shape.slice();return l.map(function(e){var t=__spreadArray([],__read(d),!1);t[s]=e;var r=slice({inputs:{x:i},attrs:{begin:u,size:t},backend:n});return u[s]+=e,r})}},createUnaryKernelConfig(eM.Sqrt),createUnaryKernelConfig(eM.Square),createBinaryKernelConfig(eM.SquaredDifference),{kernelName:eM.Step,backendName:"wasm",setupFunc:function(e){eC=e.wasm.cwrap(eM.Step,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs.alpha,a=r.x,o=t.dataIdMap.get(a.dataId).id,s=t.makeOutput(a.shape,a.dtype),l=t.dataIdMap.get(s.dataId).id;return eC(o,i,n[a.dtype],l),s}},{kernelName:eM.StridedSlice,backendName:"wasm",setupFunc:function(e){e_=e.wasm.cwrap(eM.StridedSlice,null,["number","array","number","array","array","array","array","array","number","number"])},kernelFunc:function(e){var t,r=e.backend,n=e.inputs,i=e.attrs,a=n.x,o=i.begin,s=i.end,l=i.strides,u=i.beginMask,d=i.endMask,c=i.ellipsisMask,p=i.newAxisMask,h=i.shrinkAxisMask,f=eM.slice_util.sliceInfo(a.shape,o,s,l,u,d,c,p,h),m=f.finalShapeSparse,y=f.finalShape,g=f.isIdentity,v=f.sliceDim0,b=f.isSimpleSlice,S=f.begin,x=f.end,P=f.strides;if(g)t=reshape({inputs:{x:a},backend:r,attrs:{shape:y}});else if(v||b){eM.util.assert(a.shape.length>=1,function(){return"Input must have rank at least 1, got: ".concat(a.shape.length)});var C=eM.slice_util.computeOutShape(S,x,P),_=slice({inputs:{x:a},backend:r,attrs:{begin:S,size:C}});t=reshape({inputs:{x:_},backend:r,attrs:{shape:y}}),r.disposeData(_.dataId)}else{var A=r.makeOutput(m,"float32"),T=r.dataIdMap.get(a.dataId).id,w=new Uint8Array(new Int32Array(eM.util.computeStrides(a.shape)).buffer),E=new Uint8Array(new Int32Array(S).buffer),D=new Uint8Array(new Int32Array(x).buffer),O=new Uint8Array(new Int32Array(P).buffer),R=new Uint8Array(new Int32Array(m).buffer),M=new Uint8Array(new Int32Array(eM.util.computeStrides(m)).buffer),k=r.dataIdMap.get(A.dataId).id;e_(T,w,a.shape.length,E,D,O,R,M,m.length,k),t=reshape({inputs:{x:A},backend:r,attrs:{shape:y}}),r.disposeData(A.dataId)}return t}},{kernelName:eM.StringNGrams,backendName:"wasm",kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=r.data,a=r.dataSplits,o=n.separator,s=n.nGramWidths,l=n.leftPad,u=n.rightPad,d=n.padWidth,c=n.preserveShortSequences,p=t.readSync(i.dataId),h=t.readSync(a.dataId),f=__read(new e8(o,s,l,u,d,c).compute(p,h),2),m=f[0],y=f[1],g=t.makeOutput([m.length],"string");t.dataIdMap.get(g.dataId).stringBytes=m;var v=t.makeOutput(a.shape,"int32");return t.typedArrayFromHeap(v).set(y),[g,v]}},{kernelName:eM.StringSplit,backendName:"wasm",kernelFunc:function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=r.input,a=r.delimiter,o=n.skipEmpty,s=__read(function(e,t,r){for(var n=e.length,i=[],a=0,o=0,s=Array(n),l=0;l<n;++l){var u=i.length;!/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){if(e.length){if(0===t.length){for(var i=0;i<e.length;++i)n.push(e.subarray(i,i+1));return}if(1===t.length){for(var a=t[0],o=e.indexOf(a);-1!==o;){var s=e.subarray(0,o);r&&0===s.length||n.push(s),o=(e=e.subarray(o+1)).indexOf(a)}r&&0===e.length||n.push(e);return}for(var l=0,i=0;i<e.length+1;i++)if(i===e.length||-1!==t.indexOf(e[i])){var s=e.subarray(l,i);r&&0===s.length||n.push(s),l=i+1}}}(e[l],t,r,i);var d=i.length-u;s[l]=d,a+=d,o=Math.max(o,d)}for(var c=eM.util.getArrayFromDType("int32",2*a),p=Array(a),h=[n,o],f=0,l=0;l<n;++l)for(var m=0;m<s[l];++m)c[2*f]=l,c[2*f+1]=m,p[f]=i[f],++f;return[c,p,h]}(t.readSync(i.dataId),t.readSync(a.dataId)[0],o),3),l=s[0],u=s[1],d=s[2],c=u.length,p=t.makeOutput([c,2],"int32");t.typedArrayFromHeap(p).set(l);var h=t.makeOutput([c],"string");t.dataIdMap.get(h.dataId).stringBytes=u;var f=t.makeOutput([2],"int32");return t.typedArrayFromHeap(f).set(d),[p,h,f]}},{kernelName:eM.StringToHashBucketFast,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.backend,r=e.inputs,n=e.attrs,i=r.input,a=n.numBuckets,o=/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){for(var r=eM.util.getArrayFromDType("int32",e.length),n=0;n<e.length;++n)r[n]=eM.util.fingerPrint64(e[n]).modulo(t).getLowBitsUnsigned();return r}(t.readSync(i.dataId),a),s=t.makeOutput(i.shape,"int32");return t.typedArrayFromHeap(s).set(o),s}},createBinaryKernelConfig(eM.Sub),{kernelName:eM.Sum,backendName:"wasm",setupFunc:function(e){eA=e.wasm.cwrap(eM.Sum,null,["number","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs,i=e.attrs,a=i.axis,o=i.keepDims,s=r.x,l=t.dataIdMap.get(s.dataId).id,u=l,d=s,c=permuteAxesAndTranspose(s,a,t),p=c.transposed,h=c.axes,f=c.originalAxes,m=c.inputWasTransposed,y=h;if(m){var g=t.dataIdMap.get(p.dataId).id;g!==l&&(d=p,u=g,y=eM.backend_util.getInnerMostAxes(y.length,d.shape.length))}eM.backend_util.assertAxesAreInnerMostDims("sum",y,d.shape.length);var v=__read(eM.backend_util.computeOutAndReduceShapes(d.shape,y),2),b=v[0],S=v[1],x=eM.util.sizeFromShape(S),P=t.makeOutput(b,d.dtype);if(0!==eM.util.sizeFromShape(d.shape)){var C=t.dataIdMap.get(P.dataId).id;eA(u,x,n[P.dtype],C)}if(m&&t.disposeData(p.dataId),o){var _=eM.backend_util.expandShapeToKeepDim(P.shape,f);P.shape=_}return P}},createUnaryKernelConfig(eM.Tan),createUnaryKernelConfig(eM.Tanh),{kernelName:eM.TensorScatterUpdate,backendName:"wasm",setupFunc:function(e){eT=e.wasm.cwrap(eM.TensorScatterUpdate,null,["number","number","number","number","number","number","array","number","number","number"])},kernelFunc:function(e){var t=e.backend,r=e.inputs;e.attrs;var i=r.tensor,a=r.indices,o=r.updates,s=t.makeOutput(i.shape,i.dtype);if(0===eM.util.sizeFromShape(i.shape))return s;var l=eM.scatter_util.calculateShapes(o,a,i.shape),u=l.sliceRank,d=l.numUpdates,c=l.sliceSize,p=l.strides,h=l.outputSize,f=t.dataIdMap.get(a.dataId).id,m=t.dataIdMap.get(o.dataId).id,y=t.dataIdMap.get(i.dataId).id,g=new Uint8Array(new Int32Array(p).buffer),v=t.dataIdMap.get(s.dataId).id;return eT(f,m,n[o.dtype],u,d,c,g,h,v,y),s}},{kernelName:eM.Tile,backendName:"wasm",setupFunc:function(e){ew=e.wasm.cwrap(eM.Tile,null,["number","array","number","array","number","number"])},kernelFunc:function(e){for(var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=r.dataIdMap.get(a.dataId).id,s=i.reps,l=Array(a.shape.length),u=0;u<l.length;u++)l[u]=a.shape[u]*s[u];var d=new Uint8Array(new Int32Array(a.shape).buffer),c=new Uint8Array(new Int32Array(l).buffer),p=r.makeOutput(l,a.dtype),h=r.dataIdMap.get(p.dataId).id;return ew(o,d,a.shape.length,c,l.length,n[p.dtype],h),p}},{kernelName:eM.TopK,backendName:"wasm",setupFunc:function(e){eE=e.wasm.cwrap(eM.TopK,null,["number","array","number","number","number","bool","number","number"])},kernelFunc:function(e){var t=e.inputs,r=e.backend,i=e.attrs,a=t.x,o=i.k,s=i.sorted,l=r.dataIdMap.get(a.dataId).id,u=new Uint8Array(new Int32Array(a.shape).buffer),d=a.shape.slice();d[d.length-1]=o;var c=r.makeOutput(d,a.dtype),p=r.dataIdMap.get(c.dataId).id,h=r.makeOutput(d,"int32"),f=r.dataIdMap.get(h.dataId).id;return eE(l,u,a.shape.length,n[a.dtype],o,s,p,f),[c,h]}},{kernelName:eM.Transform,backendName:"wasm",setupFunc:function(e){eD=e.wasm.cwrap(eM.Transform,null,["number","number","bool","number","number","number","number","number","number","array","number","array","number","number","number","number","number"])},kernelFunc:function(e){var t,r=e.backend,n=e.inputs,i=e.attrs,a=n.image,o=n.transforms,s=i.interpolation,l=i.fillMode,u=i.fillValue,d=i.outputShape,c=__read(a.shape,4),p=c[0],h=c[1],f=c[2],m=c[3],y=__read(null!=d?d:[h,f],2),g=y[0],v=y[1],b=[p,g,v,m],S=new Uint8Array(new Int32Array(eM.util.computeStrides(a.shape)).buffer),x=new Uint8Array(new Int32Array(eM.util.computeStrides(b)).buffer),P=r.makeOutput(b,a.dtype),C=r.dataIdMap.get(P.dataId).id,_=r.dataIdMap.get(a.dataId).id,A=r.dataIdMap.get(o.dataId).id;switch(l){case"constant":default:t=1;break;case"reflect":t=2;break;case"wrap":t=3;break;case"nearest":t=4}return eD(_,A,o.shape[0]>1,p,g,v,m,f,h,S,a.shape.length-1,x,b.length-1,"nearest"===s?1:2,t,u,C),P}},eG,{kernelName:eM.Unique,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.inputs,r=e.attrs,n=e.backend,i=r.axis,a=t.x,o=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){for(var i=eM.util.parseAxisParam(t,r)[0],a=[1,r[0],1],o=0;o<i;o++)a[0]*=r[o];a[1]=r[i];for(var o=i+1;o<r.length;o++)a[2]*=r[o];for(var s=new Map,l=new Int32Array(r[i]),u=new eM.TensorBuffer(a,n,e),d=[],c=1===a[0]&&1===a[2],o=0;o<r[i];o++){var p=void 0;if(c)p=e[o].toString();else{for(var h=[],f=0;f<a[0];f++)for(var m=0;m<a[2];m++)h.push(u.get(f,o,m));p=h.join(",")}var y=s.get(p);if(null!=y)l[o]=y;else{var g=s.size;s.set(p,g),l[o]=g,d.push(o)}}var v=a.slice();v[1]=s.size;var b=new eM.TensorBuffer(v,n);d.forEach(function(e,t){for(var r=0;r<a[0];r++)for(var n=0;n<a[2];n++)b.set(u.get(r,e,n),r,t,n)});var S=r.slice();return S[i]=v[1],{outputValues:b.values,outputShape:S,indices:l}}(n.readSync(a.dataId),i,a.shape,a.dtype),s=o.outputValues,l=o.outputShape,u=o.indices;return[n.makeOutput(l,a.dtype,void 0,s),n.makeOutput([u.length],"int32",void 0,u)]}},{kernelName:eM.Unpack,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.inputs,r=e.backend,n=e.attrs,i=t.value,a=n.axis;a<0&&(a+=i.shape.length);for(var o=i.shape[a],s=i.shape.length,l=Array(s-1),u=0,d=0;d<s;d++)d!==a&&(l[u++]=i.shape[d]);var c=Array(o),p=Array(s).fill(0),h=i.shape.slice();h[a]=1;for(var d=0;d<c.length;d++)p[a]=d,c[d]=slice({inputs:{x:i},attrs:{begin:p,size:h},backend:r});return c.map(function(e){return{dataId:e.dataId,dtype:e.dtype,shape:l}})}},{kernelName:eM.ZerosLike,backendName:"wasm",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=e.inputs.x,r=e.backend,n=r.makeOutput(t.shape,t.dtype);return r.typedArrayFromHeap(n).fill(0),n}}];try{for(var rz=__values(rH),rU=rz.next();!rU.done;rU=rz.next()){var rG=rU.value;eM.registerKernel(rG)}}catch(e){eO={error:e}}finally{try{rU&&!rU.done&&(eR=rz.return)&&eR.call(rz)}finally{if(eO)throw eO.error}}var rW=eM.env();rW.registerFlag("WASM_HAS_SIMD_SUPPORT",function(){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(e){try{return[2,WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]))]}catch(e){return[2,!1]}return[2]})})}),rW.registerFlag("WASM_HAS_MULTITHREAD_SUPPORT",function(){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(e){if(rW.get("IS_NODE"))return[2,!1];try{return new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),[2,WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))]}catch(e){return[2,!1]}return[2]})})});var rX="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rY={exports:{}};!function(e,t){var n,i=(n=(n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||__filename,function(e){function GROWABLE_HEAP_U8(){return d.buffer!=p&&updateGlobalBufferAndViews(d.buffer),f}function GROWABLE_HEAP_I32(){return d.buffer!=p&&updateGlobalBufferAndViews(d.buffer),m}function GROWABLE_HEAP_U32(){return d.buffer!=p&&updateGlobalBufferAndViews(d.buffer),y}function GROWABLE_HEAP_F64(){return d.buffer!=p&&updateGlobalBufferAndViews(d.buffer),g}var t,i,a,o,s,l,u,d,c,p,h,f,m,y,g,v,b,S,x,P,C,_=void 0!==(e=e||{})?e:{};_.ready=new Promise(function(e,r){t=e,i=r}),"undefined"!=typeof process&&process.listeners&&(a={uncaughtException:process.listeners("uncaughtException"),unhandledRejection:process.listeners("unhandledRejection")});var A=Object.assign({},_),quit_=function(e,t){throw t},T="object"==typeof window,w="function"==typeof importScripts,E="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,D=_.ENVIRONMENT_IS_PTHREAD||!1,O="";function locateFile(e){return _.locateFile?_.locateFile(e,O):O+e}if(E){var R=ek;O=w?eL.dirname(O)+"/":__dirname+"/",o=function(e,t){return e=isFileURI(e)?new URL(e):eL.normalize(e),R.readFileSync(e,t?void 0:"utf8")},l=function(e){var t=o(e,!0);return t.buffer||(t=new Uint8Array(t)),t},s=function(e,t,r){e=isFileURI(e)?new URL(e):eL.normalize(e),R.readFile(e,function(e,n){e?r(e):t(n.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof ExitStatus))throw e}),process.on("unhandledRejection",function(e){throw e}),quit_=function(e,t){if(N)throw process.exitCode=e,t;t instanceof ExitStatus||B("exiting due to exception: "+t),process.exit(e)},_.inspect=function(){return"[Emscripten Module object]"};var M=void 0;try{M=r(71267)}catch(e){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),e}rX.Worker=M.Worker}else(T||w)&&(w?O=self.location.href:"undefined"!=typeof document&&document.currentScript&&(O=document.currentScript.src),void 0!==n&&n&&(O=n),O=0!==O.indexOf("blob:")?O.substr(0,O.replace(/[?#].*/,"").lastIndexOf("/")+1):"",E||(o=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},w&&(l=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),s=function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){if(200==n.status||0==n.status&&n.response){t(n.response);return}r()},n.onerror=r,n.send(null)}));E&&"undefined"==typeof performance&&(rX.performance=eI.performance);var k=console.log.bind(console),L=console.warn.bind(console);E&&(k=function(e){return R.writeSync(1,e+"\n")},L=function(e){return R.writeSync(2,e+"\n")});var I=_.print||k,B=_.printErr||L;Object.assign(_,A),A=null,_.arguments&&_.arguments,_.thisProgram&&_.thisProgram,_.quit&&(quit_=_.quit),_.wasmBinary&&(u=_.wasmBinary);var N=_.noExitRuntime||!0;"object"!=typeof WebAssembly&&abort("no native wasm support detected");var F=!1,V="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function UTF8ArrayToString(e,t,r){for(var n=(t>>>=0)+r,i=t;e[i]&&!(i>=n);)++i;if(i-t>16&&e.buffer&&V)return V.decode(e.buffer instanceof SharedArrayBuffer?e.slice(t,i):e.subarray(t,i));for(var a="";t<i;){var o=e[t++];if(!(128&o)){a+=String.fromCharCode(o);continue}var s=63&e[t++];if((224&o)==192){a+=String.fromCharCode((31&o)<<6|s);continue}var l=63&e[t++];if((o=(240&o)==224?(15&o)<<12|s<<6|l:(7&o)<<18|s<<12|l<<6|63&e[t++])<65536)a+=String.fromCharCode(o);else{var u=o-65536;a+=String.fromCharCode(55296|u>>10,56320|1023&u)}}return a}function updateGlobalBufferAndViews(e){p=e,_.HEAP8=h=new Int8Array(e),_.HEAP16=new Int16Array(e),_.HEAP32=m=new Int32Array(e),_.HEAPU8=f=new Uint8Array(e),_.HEAPU16=new Uint16Array(e),_.HEAPU32=y=new Uint32Array(e),_.HEAPF32=new Float32Array(e),_.HEAPF64=g=new Float64Array(e)}D&&(p=_.buffer);var j=_.INITIAL_MEMORY||16777216;if(D)d=_.wasmMemory,p=_.buffer;else if(_.wasmMemory)d=_.wasmMemory;else if(!((d=new WebAssembly.Memory({initial:j/65536,maximum:65536,shared:!0})).buffer instanceof SharedArrayBuffer))throw B("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),E&&B("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");d&&(p=d.buffer),j=p.byteLength,updateGlobalBufferAndViews(p);var H=[],z=[],U=[],G=0,W=null;function abort(e){_.onAbort&&_.onAbort(e),B(e="Aborted("+e+")"),F=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw i(t),t}function isDataURI(e){return e.startsWith("data:application/octet-stream;base64,")}function isFileURI(e){return e.startsWith("file://")}function getBinary(e){try{if(e==b&&u)return new Uint8Array(u);if(l)return l(e);throw"both async and sync fetching of the wasm failed"}catch(e){abort(e)}}isDataURI(b="tfjs-backend-wasm-threaded-simd.wasm")||(b=locateFile(b));var X={};function ExitStatus(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function cleanupThread(e){var t=Y.pthreads[e];t||abort(void 0),Y.returnWorkerToPool(t)}function spawnThread(e){var t=Y.getNewWorker();if(!t)return 6;Y.runningWorkers.push(t),Y.pthreads[e.pthread_ptr]=t,t.pthread_ptr=e.pthread_ptr;var r={cmd:"run",start_routine:e.startRoutine,arg:e.arg,pthread_ptr:e.pthread_ptr};return t.runPthread=function(){E&&t.ref(),t.postMessage(r,e.transferList),delete t.runPthread},t.loaded&&t.runPthread(),0}function _proc_exit(e){if(D)return _emscripten_proxy_to_main_thread_js(1,1,e);N||(Y.terminateAllThreads(),_.onExit&&_.onExit(e),F=!0),quit_(e,new ExitStatus(e))}var _exit=function(e,t){if(!t&&D)throw exitOnMainThread(e),"unwind";_proc_exit(e)},Y={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init:function(){D?Y.initWorker():Y.initMainThread()},initMainThread:function(){for(var e=8;e--;)Y.allocateUnusedWorker()},initWorker:function(){N=!1},setExitStatus:function(e){},terminateAllThreads:function(){var e,t,r,n;try{for(var i=__values(Object.values(Y.pthreads)),a=i.next();!a.done;a=i.next()){var o=a.value;Y.returnWorkerToPool(o)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}try{for(var s=__values(Y.unusedWorkers),l=s.next();!l.done;l=s.next()){var o=l.value;o.terminate()}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}Y.unusedWorkers=[]},returnWorkerToPool:function(e){var t=e.pthread_ptr;delete Y.pthreads[t],Y.unusedWorkers.push(e),Y.runningWorkers.splice(Y.runningWorkers.indexOf(e),1),e.pthread_ptr=0,E&&e.unref(),en(t)},receiveObjectTransfer:function(e){},threadInitTLS:function(){Y.tlsInitFunctions.forEach(function(e){return e()})},loadWasmModuleToWorker:function(e,t){e.onmessage=function(r){var n,i,a=r.data,o=a.cmd;if(e.pthread_ptr&&(Y.currentProxiedOperationCallerThread=e.pthread_ptr),a.targetThread&&a.targetThread!=Q()){var s=Y.pthreads[a.targetThread];s?s.postMessage(a,a.transferList):B('Internal error! Worker sent a message "'+o+'" to target pthread '+a.targetThread+", but that thread no longer exists!"),Y.currentProxiedOperationCallerThread=void 0;return}"processProxyingQueue"===o?executeNotifiedProxyingQueue(a.queue):"spawnThread"===o?spawnThread(a):"cleanupThread"===o?cleanupThread(a.thread):"killThread"===o?(n=a.thread,i=Y.pthreads[n],delete Y.pthreads[n],i.terminate(),en(n),Y.runningWorkers.splice(Y.runningWorkers.indexOf(i),1),i.pthread_ptr=0):"cancelThread"===o?function(e){Y.pthreads[e].postMessage({cmd:"cancel"})}(a.thread):"loaded"===o?(e.loaded=!0,E&&e.unref(),t&&t(e),e.runPthread&&e.runPthread()):"print"===o?I("Thread "+a.threadId+": "+a.text):"printErr"===o?B("Thread "+a.threadId+": "+a.text):"alert"===o?alert("Thread "+a.threadId+": "+a.text):"setimmediate"===a.target?e.postMessage(a):"callHandler"===o?_[a.handler].apply(_,__spreadArray([],__read(a.args),!1)):o&&B("worker sent an unknown command "+o),Y.currentProxiedOperationCallerThread=void 0},e.onerror=function(e){throw B("worker sent an error! "+e.filename+":"+e.lineno+": "+e.message),e},E&&(e.on("message",function(t){e.onmessage({data:t})}),e.on("error",function(t){e.onerror(t)}),e.on("detachedExit",function(){}));var r,i,a=[];try{for(var o=__values(["onExit","onAbort","print","printErr"]),s=o.next();!s.done;s=o.next()){var l=s.value;_.hasOwnProperty(l)&&a.push(l)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}e.postMessage({cmd:"load",handlers:a,urlOrBlob:_.mainScriptUrlOrBlob||n,wasmMemory:d,wasmModule:c})},allocateUnusedWorker:function(){var e,t=locateFile("tfjs-backend-wasm-threaded-simd.worker.js");e=new Worker(t),Y.unusedWorkers.push(e)},getNewWorker:function(){return 0==Y.unusedWorkers.length&&(Y.allocateUnusedWorker(),Y.loadWasmModuleToWorker(Y.unusedWorkers[0])),Y.unusedWorkers.pop()}};function callRuntimeCallbacks(e){for(;e.length>0;)e.shift()(_)}function exitOnMainThread(e){if(D)return _emscripten_proxy_to_main_thread_js(2,0,e);try{_exit(e)}catch(e){var t;(t=e)instanceof ExitStatus||"unwind"==t||quit_(1,t)}}_.PThread=Y,_.establishStackSpace=function(){var e=Q(),t=GROWABLE_HEAP_I32()[e+52>>>2],r=t-GROWABLE_HEAP_I32()[e+56>>>2];ea(t,r),es(t)};var q=[];function pthreadCreateProxied(e,t,r,n){return D?_emscripten_proxy_to_main_thread_js(3,1,e,t,r,n):___pthread_create_js(e,t,r,n)}function ___pthread_create_js(e,t,r,n){if("undefined"==typeof SharedArrayBuffer)return B("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var i=[];if(D&&0===i.length)return pthreadCreateProxied(e,t,r,n);var a={startRoutine:r,pthread_ptr:e,arg:n,transferList:i};return D?(a.cmd="spawnThread",postMessage(a,i),0):spawnThread(a)}function executeNotifiedProxyingQueue(e){Atomics.store(GROWABLE_HEAP_I32(),e>>2,1),Q()&&er(e),Atomics.compareExchange(GROWABLE_HEAP_I32(),e>>2,1,0)}function warnOnce(e){warnOnce.shown||(warnOnce.shown={}),warnOnce.shown[e]||(warnOnce.shown[e]=1,E&&(e="warning: "+e),B(e))}function getHeapMax(){return 4294901760}function _emscripten_proxy_to_main_thread_js(e,t){var r,n,i=arguments.length-2,a=arguments;return r=eo(),n=function(){for(var r=el(8*i),n=r>>3,o=0;o<i;o++){var s=a[2+o];GROWABLE_HEAP_F64()[n+o>>>0]=s}return et(e,i,r,t)}(),es(r),n}_.invokeEntryPoint=function(e,t){var r,n=((r=q[e])||(e>=q.length&&(q.length=e+1),q[e]=r=v.get(e)),r)(t);N?Y.setExitStatus(n):ei(n)},_.executeNotifiedProxyingQueue=executeNotifiedProxyingQueue,S=E?function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:function(){return performance.timeOrigin+performance.now()};var K=[];function _fd_close(e){return D?_emscripten_proxy_to_main_thread_js(4,1,e):52}function _fd_seek(e,t,r,n,i){return D?_emscripten_proxy_to_main_thread_js(5,1,e,t,r,n,i):70}var $=[null,[],[]];function _fd_write(e,t,r,n){if(D)return _emscripten_proxy_to_main_thread_js(6,1,e,t,r,n);for(var i=0,a=0;a<r;a++){var o=GROWABLE_HEAP_U32()[t>>>2],s=GROWABLE_HEAP_U32()[t+4>>>2];t+=8;for(var l=0;l<s;l++)!function(e,t){var r=$[e];0===t||10===t?((1===e?I:B)(UTF8ArrayToString(r,0)),r.length=0):r.push(t)}(e,GROWABLE_HEAP_U8()[o+l>>>0]);i+=s}return GROWABLE_HEAP_U32()[n>>>2]=i,0}Y.init();var Z=[null,_proc_exit,exitOnMainThread,pthreadCreateProxied,_fd_close,_fd_seek,_fd_write],J={__emscripten_init_main_thread_js:function(e){ee(e,!w,1,!T),Y.threadInitTLS()},__emscripten_thread_cleanup:function(e){D?postMessage({cmd:"cleanupThread",thread:e}):cleanupThread(e)},__pthread_create_js:___pthread_create_js,_emscripten_default_pthread_stack_size:function(){return 65536},_emscripten_get_now_is_monotonic:function(){return!0},_emscripten_notify_task_queue:function(e,t,r,n){if(e==t)setTimeout(function(){return executeNotifiedProxyingQueue(n)});else if(D)postMessage({targetThread:e,cmd:"processProxyingQueue",queue:n});else{var i=Y.pthreads[e];if(!i)return;i.postMessage({cmd:"processProxyingQueue",queue:n})}return 1},_emscripten_set_offscreencanvas_size:function(e,t,r){return -1},abort:function(){abort("")},emscripten_check_blocking_allowed:function(){!E&&(w||warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"))},emscripten_date_now:function(){return Date.now()},emscripten_get_heap_max:function(){return getHeapMax()},emscripten_get_now:S,emscripten_memcpy_big:function(e,t,r){GROWABLE_HEAP_U8().copyWithin(e>>>0,t>>>0,t+r>>>0)},emscripten_num_logical_cores:function(){return E?eB.cpus().length:navigator.hardwareConcurrency},emscripten_receive_on_main_thread_js:function(e,t,r){K.length=t;for(var n=r>>3,i=0;i<t;i++)K[i]=GROWABLE_HEAP_F64()[n+i>>>0];return(e<0?X[-e-1]:Z[e]).apply(null,K)},emscripten_resize_heap:function(e){var t=GROWABLE_HEAP_U8().length;if((e>>>=0)<=t)return!1;var r=getHeapMax();if(e>r)return!1;for(var n=1;n<=4;n*=2){var i,a=t*(1+.2/n);if(a=Math.min(a,e+100663296),function(e){try{return d.grow(e-p.byteLength+65535>>>16),updateGlobalBufferAndViews(d.buffer),1}catch(e){}}(Math.min(r,(i=Math.max(e,a))+(65536-i%65536)%65536)))return!0}return!1},emscripten_unwind_to_js_event_loop:function(){throw"unwind"},exit:_exit,fd_close:_fd_close,fd_seek:_fd_seek,fd_write:_fd_write,memory:d||_.wasmMemory};(function(){var e={env:J,wasi_snapshot_preview1:J};function receiveInstance(e,t){var r,n,i=e.exports;if(_.asm=i,r=_.asm._emscripten_tls_init,Y.tlsInitFunctions.push(r),v=_.asm.__indirect_function_table,n=_.asm.__wasm_call_ctors,z.unshift(n),c=t,!D){var a=Y.unusedWorkers.length;Y.unusedWorkers.forEach(function(e){Y.loadWasmModuleToWorker(e,function(){--a||function(){if(G--,_.monitorRunDependencies&&_.monitorRunDependencies(G),0==G&&W){var e=W;W=null,e()}}()})})}}function receiveInstantiationResult(e){receiveInstance(e.instance,e.module)}function instantiateArrayBuffer(t){return(function(){if(!u&&(T||w)){if("function"==typeof fetch&&!isFileURI(b))return fetch(b,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+b+"'";return e.arrayBuffer()}).catch(function(){return getBinary(b)});if(s)return new Promise(function(e,t){s(b,function(t){e(new Uint8Array(t))},t)})}return Promise.resolve().then(function(){return getBinary(b)})})().then(function(t){return WebAssembly.instantiate(t,e)}).then(function(e){return e}).then(t,function(e){B("failed to asynchronously prepare wasm: "+e),abort(e)})}if(!D&&(G++,_.monitorRunDependencies&&_.monitorRunDependencies(G)),_.instantiateWasm)try{return _.instantiateWasm(e,receiveInstance)}catch(e){B("Module.instantiateWasm callback failed with error: "+e),i(e)}(u||"function"!=typeof WebAssembly.instantiateStreaming||isDataURI(b)||isFileURI(b)||E||"function"!=typeof fetch?instantiateArrayBuffer(receiveInstantiationResult):fetch(b,{credentials:"same-origin"}).then(function(t){return WebAssembly.instantiateStreaming(t,e).then(receiveInstantiationResult,function(e){return B("wasm streaming compile failed: "+e),B("falling back to ArrayBuffer instantiation"),instantiateArrayBuffer(receiveInstantiationResult)})})).catch(i)})(),_.___wasm_call_ctors=function(){return(_.___wasm_call_ctors=_.asm.__wasm_call_ctors).apply(null,arguments)},_._init=function(){return(_._init=_.asm.init).apply(null,arguments)},_._init_with_threads_count=function(){return(_._init_with_threads_count=_.asm.init_with_threads_count).apply(null,arguments)},_._get_threads_count=function(){return(_._get_threads_count=_.asm.get_threads_count).apply(null,arguments)},_._register_tensor=function(){return(_._register_tensor=_.asm.register_tensor).apply(null,arguments)},_._dispose_data=function(){return(_._dispose_data=_.asm.dispose_data).apply(null,arguments)},_._dispose=function(){return(_._dispose=_.asm.dispose).apply(null,arguments)},_._Abs=function(){return(_._Abs=_.asm.Abs).apply(null,arguments)},_._Acos=function(){return(_._Acos=_.asm.Acos).apply(null,arguments)},_._Acosh=function(){return(_._Acosh=_.asm.Acosh).apply(null,arguments)},_._Add=function(){return(_._Add=_.asm.Add).apply(null,arguments)},_._AddN=function(){return(_._AddN=_.asm.AddN).apply(null,arguments)},_._All=function(){return(_._All=_.asm.All).apply(null,arguments)},_._Any=function(){return(_._Any=_.asm.Any).apply(null,arguments)},_._ArgMax=function(){return(_._ArgMax=_.asm.ArgMax).apply(null,arguments)},_._ArgMin=function(){return(_._ArgMin=_.asm.ArgMin).apply(null,arguments)},_._Asin=function(){return(_._Asin=_.asm.Asin).apply(null,arguments)},_._Asinh=function(){return(_._Asinh=_.asm.Asinh).apply(null,arguments)},_._Atan=function(){return(_._Atan=_.asm.Atan).apply(null,arguments)},_._Atan2=function(){return(_._Atan2=_.asm.Atan2).apply(null,arguments)},_._Atanh=function(){return(_._Atanh=_.asm.Atanh).apply(null,arguments)},_._AvgPool=function(){return(_._AvgPool=_.asm.AvgPool).apply(null,arguments)},_._AvgPool3D=function(){return(_._AvgPool3D=_.asm.AvgPool3D).apply(null,arguments)},_._AvgPool3DGrad=function(){return(_._AvgPool3DGrad=_.asm.AvgPool3DGrad).apply(null,arguments)},_._AvgPoolGrad=function(){return(_._AvgPoolGrad=_.asm.AvgPoolGrad).apply(null,arguments)},_._BatchMatMul=function(){return(_._BatchMatMul=_.asm.BatchMatMul).apply(null,arguments)},_._Bincount=function(){return(_._Bincount=_.asm.Bincount).apply(null,arguments)},_._BitwiseAnd=function(){return(_._BitwiseAnd=_.asm.BitwiseAnd).apply(null,arguments)},_._Ceil=function(){return(_._Ceil=_.asm.Ceil).apply(null,arguments)},_._ClipByValue=function(){return(_._ClipByValue=_.asm.ClipByValue).apply(null,arguments)},_._Conv2D=function(){return(_._Conv2D=_.asm.Conv2D).apply(null,arguments)},_._Conv2DBackpropInput=function(){return(_._Conv2DBackpropInput=_.asm.Conv2DBackpropInput).apply(null,arguments)},_._Conv3D=function(){return(_._Conv3D=_.asm.Conv3D).apply(null,arguments)},_._Conv3DBackpropFilterV2=function(){return(_._Conv3DBackpropFilterV2=_.asm.Conv3DBackpropFilterV2).apply(null,arguments)},_._Conv3DBackpropInputV2=function(){return(_._Conv3DBackpropInputV2=_.asm.Conv3DBackpropInputV2).apply(null,arguments)},_._Cos=function(){return(_._Cos=_.asm.Cos).apply(null,arguments)},_._Cosh=function(){return(_._Cosh=_.asm.Cosh).apply(null,arguments)},_._CropAndResize=function(){return(_._CropAndResize=_.asm.CropAndResize).apply(null,arguments)},_._Cumprod=function(){return(_._Cumprod=_.asm.Cumprod).apply(null,arguments)},_._Cumsum=function(){return(_._Cumsum=_.asm.Cumsum).apply(null,arguments)},_._DenseBincount=function(){return(_._DenseBincount=_.asm.DenseBincount).apply(null,arguments)},_._DepthToSpace=function(){return(_._DepthToSpace=_.asm.DepthToSpace).apply(null,arguments)},_._DepthwiseConv2dNative=function(){return(_._DepthwiseConv2dNative=_.asm.DepthwiseConv2dNative).apply(null,arguments)},_._Diag=function(){return(_._Diag=_.asm.Diag).apply(null,arguments)},_._Dilation2D=function(){return(_._Dilation2D=_.asm.Dilation2D).apply(null,arguments)},_._Dilation2DBackpropFilter=function(){return(_._Dilation2DBackpropFilter=_.asm.Dilation2DBackpropFilter).apply(null,arguments)},_._Dilation2DBackpropInput=function(){return(_._Dilation2DBackpropInput=_.asm.Dilation2DBackpropInput).apply(null,arguments)},_._Elu=function(){return(_._Elu=_.asm.Elu).apply(null,arguments)},_._EluGrad=function(){return(_._EluGrad=_.asm.EluGrad).apply(null,arguments)},_._Equal=function(){return(_._Equal=_.asm.Equal).apply(null,arguments)},_._Erf=function(){return(_._Erf=_.asm.Erf).apply(null,arguments)},_._Exp=function(){return(_._Exp=_.asm.Exp).apply(null,arguments)},_._Expm1=function(){return(_._Expm1=_.asm.Expm1).apply(null,arguments)},_._FlipLeftRight=function(){return(_._FlipLeftRight=_.asm.FlipLeftRight).apply(null,arguments)},_._Floor=function(){return(_._Floor=_.asm.Floor).apply(null,arguments)},_._FloorDiv=function(){return(_._FloorDiv=_.asm.FloorDiv).apply(null,arguments)},_._FusedBatchNorm=function(){return(_._FusedBatchNorm=_.asm.FusedBatchNorm).apply(null,arguments)},_._FusedConv2D=function(){return(_._FusedConv2D=_.asm.FusedConv2D).apply(null,arguments)},_._FusedDepthwiseConv2D=function(){return(_._FusedDepthwiseConv2D=_.asm.FusedDepthwiseConv2D).apply(null,arguments)},_._Gather=function(){return(_._Gather=_.asm.Gather).apply(null,arguments)},_._GatherNd=function(){return(_._GatherNd=_.asm.GatherNd).apply(null,arguments)},_._Greater=function(){return(_._Greater=_.asm.Greater).apply(null,arguments)},_._GreaterEqual=function(){return(_._GreaterEqual=_.asm.GreaterEqual).apply(null,arguments)},_._IsFinite=function(){return(_._IsFinite=_.asm.IsFinite).apply(null,arguments)},_._IsInf=function(){return(_._IsInf=_.asm.IsInf).apply(null,arguments)},_._IsNan=function(){return(_._IsNan=_.asm.IsNan).apply(null,arguments)},_._LRN=function(){return(_._LRN=_.asm.LRN).apply(null,arguments)},_._LRNGrad=function(){return(_._LRNGrad=_.asm.LRNGrad).apply(null,arguments)},_._LeakyRelu=function(){return(_._LeakyRelu=_.asm.LeakyRelu).apply(null,arguments)},_._Less=function(){return(_._Less=_.asm.Less).apply(null,arguments)},_._LessEqual=function(){return(_._LessEqual=_.asm.LessEqual).apply(null,arguments)},_._LinSpace=function(){return(_._LinSpace=_.asm.LinSpace).apply(null,arguments)},_._Log=function(){return(_._Log=_.asm.Log).apply(null,arguments)},_._Log1p=function(){return(_._Log1p=_.asm.Log1p).apply(null,arguments)},_._LogicalAnd=function(){return(_._LogicalAnd=_.asm.LogicalAnd).apply(null,arguments)},_._LogicalNot=function(){return(_._LogicalNot=_.asm.LogicalNot).apply(null,arguments)},_._LogicalOr=function(){return(_._LogicalOr=_.asm.LogicalOr).apply(null,arguments)},_._LogicalXor=function(){return(_._LogicalXor=_.asm.LogicalXor).apply(null,arguments)},_._Max=function(){return(_._Max=_.asm.Max).apply(null,arguments)},_._MaxPool=function(){return(_._MaxPool=_.asm.MaxPool).apply(null,arguments)},_._MaxPool3D=function(){return(_._MaxPool3D=_.asm.MaxPool3D).apply(null,arguments)},_._MaxPool3DGrad=function(){return(_._MaxPool3DGrad=_.asm.MaxPool3DGrad).apply(null,arguments)},_._MaxPoolGrad=function(){return(_._MaxPoolGrad=_.asm.MaxPoolGrad).apply(null,arguments)},_._MaxPoolWithArgmax=function(){return(_._MaxPoolWithArgmax=_.asm.MaxPoolWithArgmax).apply(null,arguments)},_._Maximum=function(){return(_._Maximum=_.asm.Maximum).apply(null,arguments)},_._Mean=function(){return(_._Mean=_.asm.Mean).apply(null,arguments)},_._Min=function(){return(_._Min=_.asm.Min).apply(null,arguments)},_._Minimum=function(){return(_._Minimum=_.asm.Minimum).apply(null,arguments)},_._MirrorPad=function(){return(_._MirrorPad=_.asm.MirrorPad).apply(null,arguments)},_._Mod=function(){return(_._Mod=_.asm.Mod).apply(null,arguments)},_._Multinomial=function(){return(_._Multinomial=_.asm.Multinomial).apply(null,arguments)},_._Multiply=function(){return(_._Multiply=_.asm.Multiply).apply(null,arguments)},_._Neg=function(){return(_._Neg=_.asm.Neg).apply(null,arguments)},_._NonMaxSuppressionV3=function(){return(_._NonMaxSuppressionV3=_.asm.NonMaxSuppressionV3).apply(null,arguments)},_._NonMaxSuppressionV4=function(){return(_._NonMaxSuppressionV4=_.asm.NonMaxSuppressionV4).apply(null,arguments)},_._NonMaxSuppressionV5=function(){return(_._NonMaxSuppressionV5=_.asm.NonMaxSuppressionV5).apply(null,arguments)},_._NotEqual=function(){return(_._NotEqual=_.asm.NotEqual).apply(null,arguments)},_._OneHot=function(){return(_._OneHot=_.asm.OneHot).apply(null,arguments)},_._PadV2=function(){return(_._PadV2=_.asm.PadV2).apply(null,arguments)},_._Pow=function(){return(_._Pow=_.asm.Pow).apply(null,arguments)},_._Prelu=function(){return(_._Prelu=_.asm.Prelu).apply(null,arguments)},_._Prod=function(){return(_._Prod=_.asm.Prod).apply(null,arguments)},_._RealDiv=function(){return(_._RealDiv=_.asm.RealDiv).apply(null,arguments)},_._Reciprocal=function(){return(_._Reciprocal=_.asm.Reciprocal).apply(null,arguments)},_._Relu=function(){return(_._Relu=_.asm.Relu).apply(null,arguments)},_._Relu6=function(){return(_._Relu6=_.asm.Relu6).apply(null,arguments)},_._ResizeBilinear=function(){return(_._ResizeBilinear=_.asm.ResizeBilinear).apply(null,arguments)},_._ResizeBilinearGrad=function(){return(_._ResizeBilinearGrad=_.asm.ResizeBilinearGrad).apply(null,arguments)},_._ResizeNearestNeighbor=function(){return(_._ResizeNearestNeighbor=_.asm.ResizeNearestNeighbor).apply(null,arguments)},_._ResizeNearestNeighborGrad=function(){return(_._ResizeNearestNeighborGrad=_.asm.ResizeNearestNeighborGrad).apply(null,arguments)},_._Reverse=function(){return(_._Reverse=_.asm.Reverse).apply(null,arguments)},_._RotateWithOffset=function(){return(_._RotateWithOffset=_.asm.RotateWithOffset).apply(null,arguments)},_._Round=function(){return(_._Round=_.asm.Round).apply(null,arguments)},_._Rsqrt=function(){return(_._Rsqrt=_.asm.Rsqrt).apply(null,arguments)},_._ScatterNd=function(){return(_._ScatterNd=_.asm.ScatterNd).apply(null,arguments)},_._SearchSorted=function(){return(_._SearchSorted=_.asm.SearchSorted).apply(null,arguments)},_._SelectV2=function(){return(_._SelectV2=_.asm.SelectV2).apply(null,arguments)},_._Selu=function(){return(_._Selu=_.asm.Selu).apply(null,arguments)},_._Sigmoid=function(){return(_._Sigmoid=_.asm.Sigmoid).apply(null,arguments)},_._Sign=function(){return(_._Sign=_.asm.Sign).apply(null,arguments)},_._Sin=function(){return(_._Sin=_.asm.Sin).apply(null,arguments)},_._Sinh=function(){return(_._Sinh=_.asm.Sinh).apply(null,arguments)},_._Softmax=function(){return(_._Softmax=_.asm.Softmax).apply(null,arguments)},_._Softplus=function(){return(_._Softplus=_.asm.Softplus).apply(null,arguments)},_._SparseFillEmptyRows=function(){return(_._SparseFillEmptyRows=_.asm.SparseFillEmptyRows).apply(null,arguments)},_._SparseReshape=function(){return(_._SparseReshape=_.asm.SparseReshape).apply(null,arguments)},_._SparseSegmentReduction=function(){return(_._SparseSegmentReduction=_.asm.SparseSegmentReduction).apply(null,arguments)},_._SparseToDense=function(){return(_._SparseToDense=_.asm.SparseToDense).apply(null,arguments)},_._Sqrt=function(){return(_._Sqrt=_.asm.Sqrt).apply(null,arguments)},_._Square=function(){return(_._Square=_.asm.Square).apply(null,arguments)},_._SquaredDifference=function(){return(_._SquaredDifference=_.asm.SquaredDifference).apply(null,arguments)},_._Step=function(){return(_._Step=_.asm.Step).apply(null,arguments)},_._StridedSlice=function(){return(_._StridedSlice=_.asm.StridedSlice).apply(null,arguments)},_._Sub=function(){return(_._Sub=_.asm.Sub).apply(null,arguments)},_._Sum=function(){return(_._Sum=_.asm.Sum).apply(null,arguments)},_._Tan=function(){return(_._Tan=_.asm.Tan).apply(null,arguments)},_._Tanh=function(){return(_._Tanh=_.asm.Tanh).apply(null,arguments)},_._TensorScatterUpdate=function(){return(_._TensorScatterUpdate=_.asm.TensorScatterUpdate).apply(null,arguments)},_._Tile=function(){return(_._Tile=_.asm.Tile).apply(null,arguments)},_._TopK=function(){return(_._TopK=_.asm.TopK).apply(null,arguments)},_._Transform=function(){return(_._Transform=_.asm.Transform).apply(null,arguments)},_._Transpose=function(){return(_._Transpose=_.asm.Transpose).apply(null,arguments)},_.__FusedMatMul=function(){return(_.__FusedMatMul=_.asm._FusedMatMul).apply(null,arguments)},_._malloc=function(){return(_._malloc=_.asm.malloc).apply(null,arguments)},_._free=function(){return(_._free=_.asm.free).apply(null,arguments)},_.__emscripten_tls_init=function(){return(_.__emscripten_tls_init=_.asm._emscripten_tls_init).apply(null,arguments)};var Q=_._pthread_self=function(){return(Q=_._pthread_self=_.asm.pthread_self).apply(null,arguments)};_.___errno_location=function(){return(_.___errno_location=_.asm.__errno_location).apply(null,arguments)};var ee=_.__emscripten_thread_init=function(){return(ee=_.__emscripten_thread_init=_.asm._emscripten_thread_init).apply(null,arguments)};_.__emscripten_thread_crashed=function(){return(_.__emscripten_thread_crashed=_.asm._emscripten_thread_crashed).apply(null,arguments)},_._emscripten_main_thread_process_queued_calls=function(){return(_._emscripten_main_thread_process_queued_calls=_.asm.emscripten_main_thread_process_queued_calls).apply(null,arguments)},_._emscripten_main_browser_thread_id=function(){return(_._emscripten_main_browser_thread_id=_.asm.emscripten_main_browser_thread_id).apply(null,arguments)};var et=_._emscripten_run_in_main_runtime_thread_js=function(){return(et=_._emscripten_run_in_main_runtime_thread_js=_.asm.emscripten_run_in_main_runtime_thread_js).apply(null,arguments)};_._emscripten_dispatch_to_thread_=function(){return(_._emscripten_dispatch_to_thread_=_.asm.emscripten_dispatch_to_thread_).apply(null,arguments)};var er=_.__emscripten_proxy_execute_task_queue=function(){return(er=_.__emscripten_proxy_execute_task_queue=_.asm._emscripten_proxy_execute_task_queue).apply(null,arguments)},en=_.__emscripten_thread_free_data=function(){return(en=_.__emscripten_thread_free_data=_.asm._emscripten_thread_free_data).apply(null,arguments)},ei=_.__emscripten_thread_exit=function(){return(ei=_.__emscripten_thread_exit=_.asm._emscripten_thread_exit).apply(null,arguments)},ea=_._emscripten_stack_set_limits=function(){return(ea=_._emscripten_stack_set_limits=_.asm.emscripten_stack_set_limits).apply(null,arguments)},eo=_.stackSave=function(){return(eo=_.stackSave=_.asm.stackSave).apply(null,arguments)},es=_.stackRestore=function(){return(es=_.stackRestore=_.asm.stackRestore).apply(null,arguments)},el=_.stackAlloc=function(){return(el=_.stackAlloc=_.asm.stackAlloc).apply(null,arguments)};function run(e){if(!(G>0)){if(D){t(_),D||callRuntimeCallbacks(z),startWorker(_);return}(function(){if(_.preRun)for("function"==typeof _.preRun&&(_.preRun=[_.preRun]);_.preRun.length;){var e;e=_.preRun.shift(),H.unshift(e)}callRuntimeCallbacks(H)})(),G>0||(_.setStatus?(_.setStatus("Running..."),setTimeout(function(){setTimeout(function(){_.setStatus("")},1),doRun()},1)):doRun())}function doRun(){!x&&(x=!0,_.calledRun=!0,F||(D||callRuntimeCallbacks(z),t(_),_.onRuntimeInitialized&&_.onRuntimeInitialized(),function(){if(!D){if(_.postRun)for("function"==typeof _.postRun&&(_.postRun=[_.postRun]);_.postRun.length;){var e;e=_.postRun.shift(),U.unshift(e)}callRuntimeCallbacks(U)}}()))}}if(_.dynCall_iijjiiii=function(){return(_.dynCall_iijjiiii=_.asm.dynCall_iijjiiii).apply(null,arguments)},_.dynCall_jiji=function(){return(_.dynCall_jiji=_.asm.dynCall_jiji).apply(null,arguments)},_.keepRuntimeAlive=function(){return N},_.wasmMemory=d,_.cwrap=function(e,t,r,n){var i=(r=r||[]).every(function(e){return"number"===e||"boolean"===e});return"string"!==t&&i&&!n?_["_"+e]:function(){return function(e,t,r,n,i){var a,o={string:function(e){var t=0;if(null!=e&&0!==e){var r,n=(e.length<<2)+1;r=t=el(n),function(e,t,r,n){if(r>>>=0,n>0){for(var i=r+n-1,a=0;a<e.length;++a){var o=e.charCodeAt(a);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),o<=127){if(r>=i)break;t[r++>>>0]=o}else if(o<=2047){if(r+1>=i)break;t[r++>>>0]=192|o>>6,t[r++>>>0]=128|63&o}else if(o<=65535){if(r+2>=i)break;t[r++>>>0]=224|o>>12,t[r++>>>0]=128|o>>6&63,t[r++>>>0]=128|63&o}else{if(r+3>=i)break;t[r++>>>0]=240|o>>18,t[r++>>>0]=128|o>>12&63,t[r++>>>0]=128|o>>6&63,t[r++>>>0]=128|63&o}}t[r>>>0]=0}}(e,GROWABLE_HEAP_U8(),r,n)}return t},array:function(e){var t=el(e.length);return(d.buffer!=p&&updateGlobalBufferAndViews(d.buffer),h).set(e,t>>>0),t}},s=_["_"+e],l=[],u=0;if(n)for(var c=0;c<n.length;c++){var f=o[r[c]];f?(0===u&&(u=eo()),l[c]=f(n[c])):l[c]=n[c]}var m=s.apply(null,l);return a=m,0!==u&&es(u),m=function(e){if("string"===t){var r;return(r=e>>>0)?UTF8ArrayToString(GROWABLE_HEAP_U8(),r,void 0):""}return"boolean"===t?!!e:e}(a)}(e,t,r,arguments)}},_.ExitStatus=ExitStatus,_.PThread=Y,W=function runCaller(){x||run(),x||(W=runCaller)},_.preInit)for("function"==typeof _.preInit&&(_.preInit=[_.preInit]);_.preInit.length>0;)_.preInit.pop()();if(run(),a&&(P={uncaughtException:process.listeners("uncaughtException").filter(function(e){return!a.uncaughtException.indexOf(e)>-1}),unhandledRejection:process.listeners("unhandledRejection").filter(function(e){return!a.unhandledRejection.indexOf(e)>-1})}),"undefined"!=typeof WasmBackendModule)C=WasmBackendModule;else if(void 0!==e)C=e;else throw Error("Could not find wasm module in post.js");if(P){var eu=C._dispose;C._dispose=function(){eu(),P.uncaughtException.forEach(function(e){process.removeListener("uncaughtException",e)}),P.unhandledRejection.forEach(function(e){process.removeListener("unhandledRejection",e)})}}return e.ready});e.exports=i}(rY);var rq=rY.exports,rK=getDefaultExportFromCjs(rq),r$=_mergeNamespaces({__proto__:null,default:rK},[rq]),rZ={exports:{}};!function(e,t){var r,n=(r=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||__filename,function(e){var t,n,i,a,o,s,l,u,d,c,p,h,f,m,y,g,v,b=void 0!==(e=e||{})?e:{};b.ready=new Promise(function(e,t){n=e,i=t}),"undefined"!=typeof process&&process.listeners&&(a={uncaughtException:process.listeners("uncaughtException"),unhandledRejection:process.listeners("unhandledRejection")});var S=Object.assign({},b),x="object"==typeof window,P="function"==typeof importScripts,C="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,_="";C?(_=P?eL.dirname(_)+"/":__dirname+"/",o=function(e,t){return e=isFileURI(e)?new URL(e):eL.normalize(e),ek.readFileSync(e,t?void 0:"utf8")},l=function(e){var t=o(e,!0);return t.buffer||(t=new Uint8Array(t)),t},s=function(e,t,r){e=isFileURI(e)?new URL(e):eL.normalize(e),ek.readFile(e,function(e,n){e?r(e):t(n.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof ExitStatus))throw e}),process.on("unhandledRejection",function(e){throw e}),b.inspect=function(){return"[Emscripten Module object]"}):(x||P)&&(P?_=self.location.href:"undefined"!=typeof document&&document.currentScript&&(_=document.currentScript.src),r&&(_=r),_=0!==_.indexOf("blob:")?_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1):"",o=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},P&&(l=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),s=function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){if(200==n.status||0==n.status&&n.response){t(n.response);return}r()},n.onerror=r,n.send(null)});var A=b.print||console.log.bind(console),T=b.printErr||console.warn.bind(console);Object.assign(b,S),S=null,b.arguments&&b.arguments,b.thisProgram&&b.thisProgram,b.quit&&b.quit,b.wasmBinary&&(u=b.wasmBinary),b.noExitRuntime,"object"!=typeof WebAssembly&&abort("no native wasm support detected");var w=!1,E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function UTF8ArrayToString(e,t,r){for(var n=(t>>>=0)+r,i=t;e[i]&&!(i>=n);)++i;if(i-t>16&&e.buffer&&E)return E.decode(e.subarray(t,i));for(var a="";t<i;){var o=e[t++];if(!(128&o)){a+=String.fromCharCode(o);continue}var s=63&e[t++];if((224&o)==192){a+=String.fromCharCode((31&o)<<6|s);continue}var l=63&e[t++];if((o=(240&o)==224?(15&o)<<12|s<<6|l:(7&o)<<18|s<<12|l<<6|63&e[t++])<65536)a+=String.fromCharCode(o);else{var u=o-65536;a+=String.fromCharCode(55296|u>>10,56320|1023&u)}}return a}function updateGlobalBufferAndViews(e){c=e,b.HEAP8=p=new Int8Array(e),b.HEAP16=new Int16Array(e),b.HEAP32=new Int32Array(e),b.HEAPU8=h=new Uint8Array(e),b.HEAPU16=new Uint16Array(e),b.HEAPU32=f=new Uint32Array(e),b.HEAPF32=new Float32Array(e),b.HEAPF64=new Float64Array(e)}b.INITIAL_MEMORY;var D=[],O=[],R=[],M=0,k=null;function abort(e){b.onAbort&&b.onAbort(e),T(e="Aborted("+e+")"),w=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw i(t),t}function isDataURI(e){return e.startsWith("data:application/octet-stream;base64,")}function isFileURI(e){return e.startsWith("file://")}function getBinary(e){try{if(e==m&&u)return new Uint8Array(u);if(l)return l(e);throw"both async and sync fetching of the wasm failed"}catch(e){abort(e)}}function ExitStatus(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function callRuntimeCallbacks(e){for(;e.length>0;)e.shift()(b)}function getHeapMax(){return 4294901760}isDataURI(m="tfjs-backend-wasm.wasm")||(t=m,m=b.locateFile?b.locateFile(t,_):_+t);var L=[null,[],[]],I={abort:function(){abort("")},emscripten_get_heap_max:function(){return getHeapMax()},emscripten_memcpy_big:function(e,t,r){h.copyWithin(e>>>0,t>>>0,t+r>>>0)},emscripten_resize_heap:function(e){var t=h.length;e>>>=0;var r=getHeapMax();if(e>r)return!1;for(var n=1;n<=4;n*=2){var i,a=t*(1+.2/n);if(a=Math.min(a,e+100663296),function(e){try{return d.grow(e-c.byteLength+65535>>>16),updateGlobalBufferAndViews(d.buffer),1}catch(e){}}(Math.min(r,(i=Math.max(e,a))+(65536-i%65536)%65536)))return!0}return!1},fd_close:function(e){return 52},fd_seek:function(e,t,r,n,i){return 70},fd_write:function(e,t,r,n){for(var i=0,a=0;a<r;a++){var o=f[t>>>2],s=f[t+4>>>2];t+=8;for(var l=0;l<s;l++)!function(e,t){var r=L[e];0===t||10===t?((1===e?A:T)(UTF8ArrayToString(r,0)),r.length=0):r.push(t)}(e,h[o+l>>>0]);i+=s}return f[n>>>2]=i,0}};(function(){var e={env:I,wasi_snapshot_preview1:I};function receiveInstance(e,t){var r,n=e.exports;b.asm=n,updateGlobalBufferAndViews((d=b.asm.memory).buffer),b.asm.__indirect_function_table,r=b.asm.__wasm_call_ctors,O.unshift(r),function(){if(M--,b.monitorRunDependencies&&b.monitorRunDependencies(M),0==M&&k){var e=k;k=null,e()}}()}function receiveInstantiationResult(e){receiveInstance(e.instance)}function instantiateArrayBuffer(t){return(function(){if(!u&&(x||P)){if("function"==typeof fetch&&!isFileURI(m))return fetch(m,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+m+"'";return e.arrayBuffer()}).catch(function(){return getBinary(m)});if(s)return new Promise(function(e,t){s(m,function(t){e(new Uint8Array(t))},t)})}return Promise.resolve().then(function(){return getBinary(m)})})().then(function(t){return WebAssembly.instantiate(t,e)}).then(function(e){return e}).then(t,function(e){T("failed to asynchronously prepare wasm: "+e),abort(e)})}if(M++,b.monitorRunDependencies&&b.monitorRunDependencies(M),b.instantiateWasm)try{return b.instantiateWasm(e,receiveInstance)}catch(e){T("Module.instantiateWasm callback failed with error: "+e),i(e)}(u||"function"!=typeof WebAssembly.instantiateStreaming||isDataURI(m)||isFileURI(m)||C||"function"!=typeof fetch?instantiateArrayBuffer(receiveInstantiationResult):fetch(m,{credentials:"same-origin"}).then(function(t){return WebAssembly.instantiateStreaming(t,e).then(receiveInstantiationResult,function(e){return T("wasm streaming compile failed: "+e),T("falling back to ArrayBuffer instantiation"),instantiateArrayBuffer(receiveInstantiationResult)})})).catch(i)})(),b.___wasm_call_ctors=function(){return(b.___wasm_call_ctors=b.asm.__wasm_call_ctors).apply(null,arguments)},b._init=function(){return(b._init=b.asm.init).apply(null,arguments)},b._init_with_threads_count=function(){return(b._init_with_threads_count=b.asm.init_with_threads_count).apply(null,arguments)},b._get_threads_count=function(){return(b._get_threads_count=b.asm.get_threads_count).apply(null,arguments)},b._register_tensor=function(){return(b._register_tensor=b.asm.register_tensor).apply(null,arguments)},b._dispose_data=function(){return(b._dispose_data=b.asm.dispose_data).apply(null,arguments)},b._dispose=function(){return(b._dispose=b.asm.dispose).apply(null,arguments)},b._Abs=function(){return(b._Abs=b.asm.Abs).apply(null,arguments)},b._Acos=function(){return(b._Acos=b.asm.Acos).apply(null,arguments)},b._Acosh=function(){return(b._Acosh=b.asm.Acosh).apply(null,arguments)},b._Add=function(){return(b._Add=b.asm.Add).apply(null,arguments)},b._AddN=function(){return(b._AddN=b.asm.AddN).apply(null,arguments)},b._All=function(){return(b._All=b.asm.All).apply(null,arguments)},b._Any=function(){return(b._Any=b.asm.Any).apply(null,arguments)},b._ArgMax=function(){return(b._ArgMax=b.asm.ArgMax).apply(null,arguments)},b._ArgMin=function(){return(b._ArgMin=b.asm.ArgMin).apply(null,arguments)},b._Asin=function(){return(b._Asin=b.asm.Asin).apply(null,arguments)},b._Asinh=function(){return(b._Asinh=b.asm.Asinh).apply(null,arguments)},b._Atan=function(){return(b._Atan=b.asm.Atan).apply(null,arguments)},b._Atan2=function(){return(b._Atan2=b.asm.Atan2).apply(null,arguments)},b._Atanh=function(){return(b._Atanh=b.asm.Atanh).apply(null,arguments)},b._AvgPool=function(){return(b._AvgPool=b.asm.AvgPool).apply(null,arguments)},b._AvgPool3D=function(){return(b._AvgPool3D=b.asm.AvgPool3D).apply(null,arguments)},b._AvgPool3DGrad=function(){return(b._AvgPool3DGrad=b.asm.AvgPool3DGrad).apply(null,arguments)},b._AvgPoolGrad=function(){return(b._AvgPoolGrad=b.asm.AvgPoolGrad).apply(null,arguments)},b._BatchMatMul=function(){return(b._BatchMatMul=b.asm.BatchMatMul).apply(null,arguments)},b._Bincount=function(){return(b._Bincount=b.asm.Bincount).apply(null,arguments)},b._BitwiseAnd=function(){return(b._BitwiseAnd=b.asm.BitwiseAnd).apply(null,arguments)},b._Ceil=function(){return(b._Ceil=b.asm.Ceil).apply(null,arguments)},b._ClipByValue=function(){return(b._ClipByValue=b.asm.ClipByValue).apply(null,arguments)},b._Conv2D=function(){return(b._Conv2D=b.asm.Conv2D).apply(null,arguments)},b._Conv2DBackpropInput=function(){return(b._Conv2DBackpropInput=b.asm.Conv2DBackpropInput).apply(null,arguments)},b._Conv3D=function(){return(b._Conv3D=b.asm.Conv3D).apply(null,arguments)},b._Conv3DBackpropFilterV2=function(){return(b._Conv3DBackpropFilterV2=b.asm.Conv3DBackpropFilterV2).apply(null,arguments)},b._Conv3DBackpropInputV2=function(){return(b._Conv3DBackpropInputV2=b.asm.Conv3DBackpropInputV2).apply(null,arguments)},b._Cos=function(){return(b._Cos=b.asm.Cos).apply(null,arguments)},b._Cosh=function(){return(b._Cosh=b.asm.Cosh).apply(null,arguments)},b._CropAndResize=function(){return(b._CropAndResize=b.asm.CropAndResize).apply(null,arguments)},b._Cumprod=function(){return(b._Cumprod=b.asm.Cumprod).apply(null,arguments)},b._Cumsum=function(){return(b._Cumsum=b.asm.Cumsum).apply(null,arguments)},b._DenseBincount=function(){return(b._DenseBincount=b.asm.DenseBincount).apply(null,arguments)},b._DepthToSpace=function(){return(b._DepthToSpace=b.asm.DepthToSpace).apply(null,arguments)},b._DepthwiseConv2dNative=function(){return(b._DepthwiseConv2dNative=b.asm.DepthwiseConv2dNative).apply(null,arguments)},b._Diag=function(){return(b._Diag=b.asm.Diag).apply(null,arguments)},b._Dilation2D=function(){return(b._Dilation2D=b.asm.Dilation2D).apply(null,arguments)},b._Dilation2DBackpropFilter=function(){return(b._Dilation2DBackpropFilter=b.asm.Dilation2DBackpropFilter).apply(null,arguments)},b._Dilation2DBackpropInput=function(){return(b._Dilation2DBackpropInput=b.asm.Dilation2DBackpropInput).apply(null,arguments)},b._Elu=function(){return(b._Elu=b.asm.Elu).apply(null,arguments)},b._EluGrad=function(){return(b._EluGrad=b.asm.EluGrad).apply(null,arguments)},b._Equal=function(){return(b._Equal=b.asm.Equal).apply(null,arguments)},b._Erf=function(){return(b._Erf=b.asm.Erf).apply(null,arguments)},b._Exp=function(){return(b._Exp=b.asm.Exp).apply(null,arguments)},b._Expm1=function(){return(b._Expm1=b.asm.Expm1).apply(null,arguments)},b._FlipLeftRight=function(){return(b._FlipLeftRight=b.asm.FlipLeftRight).apply(null,arguments)},b._Floor=function(){return(b._Floor=b.asm.Floor).apply(null,arguments)},b._FloorDiv=function(){return(b._FloorDiv=b.asm.FloorDiv).apply(null,arguments)},b._FusedBatchNorm=function(){return(b._FusedBatchNorm=b.asm.FusedBatchNorm).apply(null,arguments)},b._FusedConv2D=function(){return(b._FusedConv2D=b.asm.FusedConv2D).apply(null,arguments)},b._FusedDepthwiseConv2D=function(){return(b._FusedDepthwiseConv2D=b.asm.FusedDepthwiseConv2D).apply(null,arguments)},b._Gather=function(){return(b._Gather=b.asm.Gather).apply(null,arguments)},b._GatherNd=function(){return(b._GatherNd=b.asm.GatherNd).apply(null,arguments)},b._Greater=function(){return(b._Greater=b.asm.Greater).apply(null,arguments)},b._GreaterEqual=function(){return(b._GreaterEqual=b.asm.GreaterEqual).apply(null,arguments)},b._IsFinite=function(){return(b._IsFinite=b.asm.IsFinite).apply(null,arguments)},b._IsInf=function(){return(b._IsInf=b.asm.IsInf).apply(null,arguments)},b._IsNan=function(){return(b._IsNan=b.asm.IsNan).apply(null,arguments)},b._LRN=function(){return(b._LRN=b.asm.LRN).apply(null,arguments)},b._LRNGrad=function(){return(b._LRNGrad=b.asm.LRNGrad).apply(null,arguments)},b._LeakyRelu=function(){return(b._LeakyRelu=b.asm.LeakyRelu).apply(null,arguments)},b._Less=function(){return(b._Less=b.asm.Less).apply(null,arguments)},b._LessEqual=function(){return(b._LessEqual=b.asm.LessEqual).apply(null,arguments)},b._LinSpace=function(){return(b._LinSpace=b.asm.LinSpace).apply(null,arguments)},b._Log=function(){return(b._Log=b.asm.Log).apply(null,arguments)},b._Log1p=function(){return(b._Log1p=b.asm.Log1p).apply(null,arguments)},b._LogicalAnd=function(){return(b._LogicalAnd=b.asm.LogicalAnd).apply(null,arguments)},b._LogicalNot=function(){return(b._LogicalNot=b.asm.LogicalNot).apply(null,arguments)},b._LogicalOr=function(){return(b._LogicalOr=b.asm.LogicalOr).apply(null,arguments)},b._LogicalXor=function(){return(b._LogicalXor=b.asm.LogicalXor).apply(null,arguments)},b._Max=function(){return(b._Max=b.asm.Max).apply(null,arguments)},b._MaxPool=function(){return(b._MaxPool=b.asm.MaxPool).apply(null,arguments)},b._MaxPool3D=function(){return(b._MaxPool3D=b.asm.MaxPool3D).apply(null,arguments)},b._MaxPool3DGrad=function(){return(b._MaxPool3DGrad=b.asm.MaxPool3DGrad).apply(null,arguments)},b._MaxPoolGrad=function(){return(b._MaxPoolGrad=b.asm.MaxPoolGrad).apply(null,arguments)},b._MaxPoolWithArgmax=function(){return(b._MaxPoolWithArgmax=b.asm.MaxPoolWithArgmax).apply(null,arguments)},b._Maximum=function(){return(b._Maximum=b.asm.Maximum).apply(null,arguments)},b._Mean=function(){return(b._Mean=b.asm.Mean).apply(null,arguments)},b._Min=function(){return(b._Min=b.asm.Min).apply(null,arguments)},b._Minimum=function(){return(b._Minimum=b.asm.Minimum).apply(null,arguments)},b._MirrorPad=function(){return(b._MirrorPad=b.asm.MirrorPad).apply(null,arguments)},b._Mod=function(){return(b._Mod=b.asm.Mod).apply(null,arguments)},b._Multinomial=function(){return(b._Multinomial=b.asm.Multinomial).apply(null,arguments)},b._Multiply=function(){return(b._Multiply=b.asm.Multiply).apply(null,arguments)},b._Neg=function(){return(b._Neg=b.asm.Neg).apply(null,arguments)},b._NonMaxSuppressionV3=function(){return(b._NonMaxSuppressionV3=b.asm.NonMaxSuppressionV3).apply(null,arguments)},b._NonMaxSuppressionV4=function(){return(b._NonMaxSuppressionV4=b.asm.NonMaxSuppressionV4).apply(null,arguments)},b._NonMaxSuppressionV5=function(){return(b._NonMaxSuppressionV5=b.asm.NonMaxSuppressionV5).apply(null,arguments)},b._NotEqual=function(){return(b._NotEqual=b.asm.NotEqual).apply(null,arguments)},b._OneHot=function(){return(b._OneHot=b.asm.OneHot).apply(null,arguments)},b._PadV2=function(){return(b._PadV2=b.asm.PadV2).apply(null,arguments)},b._Pow=function(){return(b._Pow=b.asm.Pow).apply(null,arguments)},b._Prelu=function(){return(b._Prelu=b.asm.Prelu).apply(null,arguments)},b._Prod=function(){return(b._Prod=b.asm.Prod).apply(null,arguments)},b._RealDiv=function(){return(b._RealDiv=b.asm.RealDiv).apply(null,arguments)},b._Reciprocal=function(){return(b._Reciprocal=b.asm.Reciprocal).apply(null,arguments)},b._Relu=function(){return(b._Relu=b.asm.Relu).apply(null,arguments)},b._Relu6=function(){return(b._Relu6=b.asm.Relu6).apply(null,arguments)},b._ResizeBilinear=function(){return(b._ResizeBilinear=b.asm.ResizeBilinear).apply(null,arguments)},b._ResizeBilinearGrad=function(){return(b._ResizeBilinearGrad=b.asm.ResizeBilinearGrad).apply(null,arguments)},b._ResizeNearestNeighbor=function(){return(b._ResizeNearestNeighbor=b.asm.ResizeNearestNeighbor).apply(null,arguments)},b._ResizeNearestNeighborGrad=function(){return(b._ResizeNearestNeighborGrad=b.asm.ResizeNearestNeighborGrad).apply(null,arguments)},b._Reverse=function(){return(b._Reverse=b.asm.Reverse).apply(null,arguments)},b._RotateWithOffset=function(){return(b._RotateWithOffset=b.asm.RotateWithOffset).apply(null,arguments)},b._Round=function(){return(b._Round=b.asm.Round).apply(null,arguments)},b._Rsqrt=function(){return(b._Rsqrt=b.asm.Rsqrt).apply(null,arguments)},b._ScatterNd=function(){return(b._ScatterNd=b.asm.ScatterNd).apply(null,arguments)},b._SearchSorted=function(){return(b._SearchSorted=b.asm.SearchSorted).apply(null,arguments)},b._SelectV2=function(){return(b._SelectV2=b.asm.SelectV2).apply(null,arguments)},b._Selu=function(){return(b._Selu=b.asm.Selu).apply(null,arguments)},b._Sigmoid=function(){return(b._Sigmoid=b.asm.Sigmoid).apply(null,arguments)},b._Sign=function(){return(b._Sign=b.asm.Sign).apply(null,arguments)},b._Sin=function(){return(b._Sin=b.asm.Sin).apply(null,arguments)},b._Sinh=function(){return(b._Sinh=b.asm.Sinh).apply(null,arguments)},b._Softmax=function(){return(b._Softmax=b.asm.Softmax).apply(null,arguments)},b._Softplus=function(){return(b._Softplus=b.asm.Softplus).apply(null,arguments)},b._SparseFillEmptyRows=function(){return(b._SparseFillEmptyRows=b.asm.SparseFillEmptyRows).apply(null,arguments)},b._SparseReshape=function(){return(b._SparseReshape=b.asm.SparseReshape).apply(null,arguments)},b._SparseSegmentReduction=function(){return(b._SparseSegmentReduction=b.asm.SparseSegmentReduction).apply(null,arguments)},b._SparseToDense=function(){return(b._SparseToDense=b.asm.SparseToDense).apply(null,arguments)},b._Sqrt=function(){return(b._Sqrt=b.asm.Sqrt).apply(null,arguments)},b._Square=function(){return(b._Square=b.asm.Square).apply(null,arguments)},b._SquaredDifference=function(){return(b._SquaredDifference=b.asm.SquaredDifference).apply(null,arguments)},b._Step=function(){return(b._Step=b.asm.Step).apply(null,arguments)},b._StridedSlice=function(){return(b._StridedSlice=b.asm.StridedSlice).apply(null,arguments)},b._Sub=function(){return(b._Sub=b.asm.Sub).apply(null,arguments)},b._Sum=function(){return(b._Sum=b.asm.Sum).apply(null,arguments)},b._Tan=function(){return(b._Tan=b.asm.Tan).apply(null,arguments)},b._Tanh=function(){return(b._Tanh=b.asm.Tanh).apply(null,arguments)},b._TensorScatterUpdate=function(){return(b._TensorScatterUpdate=b.asm.TensorScatterUpdate).apply(null,arguments)},b._Tile=function(){return(b._Tile=b.asm.Tile).apply(null,arguments)},b._TopK=function(){return(b._TopK=b.asm.TopK).apply(null,arguments)},b._Transform=function(){return(b._Transform=b.asm.Transform).apply(null,arguments)},b._Transpose=function(){return(b._Transpose=b.asm.Transpose).apply(null,arguments)},b.__FusedMatMul=function(){return(b.__FusedMatMul=b.asm._FusedMatMul).apply(null,arguments)},b._malloc=function(){return(b._malloc=b.asm.malloc).apply(null,arguments)},b._free=function(){return(b._free=b.asm.free).apply(null,arguments)},b.___errno_location=function(){return(b.___errno_location=b.asm.__errno_location).apply(null,arguments)};var B=b.stackSave=function(){return(B=b.stackSave=b.asm.stackSave).apply(null,arguments)},N=b.stackRestore=function(){return(N=b.stackRestore=b.asm.stackRestore).apply(null,arguments)},F=b.stackAlloc=function(){return(F=b.stackAlloc=b.asm.stackAlloc).apply(null,arguments)};function run(e){!(M>0)&&(function(){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;){var e;e=b.preRun.shift(),D.unshift(e)}callRuntimeCallbacks(D)}(),M>0||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1),doRun()},1)):doRun()));function doRun(){!y&&(y=!0,b.calledRun=!0,w||(callRuntimeCallbacks(O),n(b),b.onRuntimeInitialized&&b.onRuntimeInitialized(),function(){if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var e;e=b.postRun.shift(),R.unshift(e)}callRuntimeCallbacks(R)}()))}}if(b.dynCall_iijjiiii=function(){return(b.dynCall_iijjiiii=b.asm.dynCall_iijjiiii).apply(null,arguments)},b.dynCall_jiji=function(){return(b.dynCall_jiji=b.asm.dynCall_jiji).apply(null,arguments)},b.cwrap=function(e,t,r,n){var i=(r=r||[]).every(function(e){return"number"===e||"boolean"===e});return"string"!==t&&i&&!n?b["_"+e]:function(){return function(e,t,r,n,i){var a,o={string:function(e){var t=0;if(null!=e&&0!==e){var r=(e.length<<2)+1;t=F(r),function(e,t,r,n){if(r>>>=0,n>0){for(var i=r+n-1,a=0;a<e.length;++a){var o=e.charCodeAt(a);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),o<=127){if(r>=i)break;t[r++>>>0]=o}else if(o<=2047){if(r+1>=i)break;t[r++>>>0]=192|o>>6,t[r++>>>0]=128|63&o}else if(o<=65535){if(r+2>=i)break;t[r++>>>0]=224|o>>12,t[r++>>>0]=128|o>>6&63,t[r++>>>0]=128|63&o}else{if(r+3>=i)break;t[r++>>>0]=240|o>>18,t[r++>>>0]=128|o>>12&63,t[r++>>>0]=128|o>>6&63,t[r++>>>0]=128|63&o}}t[r>>>0]=0}}(e,h,t,r)}return t},array:function(e){var t=F(e.length);return p.set(e,t>>>0),t}},s=b["_"+e],l=[],u=0;if(n)for(var d=0;d<n.length;d++){var c=o[r[d]];c?(0===u&&(u=B()),l[d]=c(n[d])):l[d]=n[d]}var f=s.apply(null,l);return a=f,0!==u&&N(u),f=function(e){if("string"===t){var r;return(r=e>>>0)?UTF8ArrayToString(h,r,void 0):""}return"boolean"===t?!!e:e}(a)}(e,t,r,arguments)}},k=function runCaller(){y||run(),y||(k=runCaller)},b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);b.preInit.length>0;)b.preInit.pop()();if(run(),a&&(g={uncaughtException:process.listeners("uncaughtException").filter(function(e){return!a.uncaughtException.indexOf(e)>-1}),unhandledRejection:process.listeners("unhandledRejection").filter(function(e){return!a.unhandledRejection.indexOf(e)>-1})}),void 0!==e)v=e;else if("undefined"!=typeof WasmBackendModuleThreadedSimd)v=WasmBackendModuleThreadedSimd;else throw Error("Could not find wasm module in post.js");if(g){var V=v._dispose;v._dispose=function(){V(),g.uncaughtException.forEach(function(e){process.removeListener("uncaughtException",e)}),g.unhandledRejection.forEach(function(e){process.removeListener("unhandledRejection",e)})}}return e.ready});e.exports=n}(rZ);var rJ=rZ.exports,rQ=getDefaultExportFromCjs(rJ),r1=_mergeNamespaces({__proto__:null,default:rQ},[rJ]),r0=rK||r$,r2=rQ||r1,r4=function(e){function BackendWasm(t){var r=e.call(this)||this;return r.wasm=t,r.dataIdNextNumber=1,r.wasm.tfjs.initWithThreadsCount(ne),r.wasm.tfjs.getThreadsCount(),r.dataIdMap=new eM.DataStorage(r,eM.engine()),r}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}(BackendWasm,e),BackendWasm.prototype.write=function(e,t,r){var n={id:this.dataIdNextNumber++};return this.move(n,e,t,r,1),n},BackendWasm.prototype.numDataIds=function(){return this.dataIdMap.numDataIds()},BackendWasm.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){return t=eM.util.now(),e(),[2,{kernelMs:eM.util.now()-t}]})})},BackendWasm.prototype.move=function(e,t,r,n,i){var a=this.dataIdNextNumber++;if("string"===n){this.dataIdMap.set(e,{id:a,stringBytes:t,shape:r,dtype:n,memoryOffset:null,refCount:i});return}var o=eM.util.sizeFromShape(r),s=o*eM.util.bytesPerElement(n),l=this.wasm._malloc(s)>>>0;this.dataIdMap.set(e,{id:a,memoryOffset:l,shape:r,dtype:n,refCount:i}),this.wasm.tfjs.registerTensor(a,o,l),null!=t&&this.wasm.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,s),l)},BackendWasm.prototype.read=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.readSync(e)]})})},BackendWasm.prototype.readSync=function(e,t,r){var n=this.dataIdMap.get(e),i=n.memoryOffset,a=n.dtype,o=n.shape,s=n.stringBytes;if("string"===a)return(null==t||0===t)&&(null==r||r>=s.length)?s:s.slice(t,r);t=t||0,r=r||eM.util.sizeFromShape(o);var l=eM.util.bytesPerElement(a);return function(e,t){switch(t){case"float32":return new Float32Array(e);case"int32":return new Int32Array(e);case"bool":return new Uint8Array(e);default:throw Error("Unknown dtype ".concat(t))}}(this.wasm.HEAPU8.slice(i+t*l,i+r*l).buffer,a)},BackendWasm.prototype.disposeData=function(e,t){if(void 0===t&&(t=!1),this.dataIdMap.has(e)){var r=this.dataIdMap.get(e);if(r.refCount--,!t&&r.refCount>0)return!1;this.wasm._free(r.memoryOffset),this.wasm.tfjs.disposeData(r.id),this.dataIdMap.delete(e)}return!0},BackendWasm.prototype.refCount=function(e){return this.dataIdMap.has(e)?this.dataIdMap.get(e).refCount:0},BackendWasm.prototype.incRef=function(e){var t=this.dataIdMap.get(e);null!=t&&t.refCount++},BackendWasm.prototype.floatPrecision=function(){return 32},BackendWasm.prototype.getMemoryOffset=function(e){return this.dataIdMap.get(e).memoryOffset},BackendWasm.prototype.dispose=function(){this.wasm.tfjs.dispose(),"PThread"in this.wasm&&this.wasm.PThread.terminateAllThreads(),this.wasm=null},BackendWasm.prototype.memory=function(){return{unreliable:!1}},BackendWasm.prototype.makeOutput=function(e,t,r,n){var i;if(null==r)i=this.write(null!=n?n:null,e,t);else{var a=this.dataIdNextNumber++;i={id:a},this.dataIdMap.set(i,{id:a,memoryOffset:r,shape:e,dtype:t,refCount:1});var o=eM.util.sizeFromShape(e);this.wasm.tfjs.registerTensor(a,o,r)}return{dataId:i,shape:e,dtype:t}},BackendWasm.prototype.typedArrayFromHeap=function(e){var t=e.shape,r=e.dtype,n=e.dataId,i=this.wasm.HEAPU8.buffer,a=this.dataIdMap.get(n).memoryOffset,o=eM.util.sizeFromShape(t);switch(r){case"float32":return new Float32Array(i,a,o);case"int32":return new Int32Array(i,a,o);case"bool":return new Uint8Array(i,a,o);default:throw Error("Unknown dtype ".concat(r))}},BackendWasm}(eM.KernelBackend);function getPathToWasmBinary(e,t,r){if(null!=r6)return r6;var n="tfjs-backend-wasm.wasm";return(e&&t?n="tfjs-backend-wasm-threaded-simd.wasm":e&&(n="tfjs-backend-wasm-simd.wasm"),null!=r5&&null!=r5[n])?r5[n]:r+n}var r3=["tfjs-backend-wasm.wasm","tfjs-backend-wasm-simd.wasm","tfjs-backend-wasm-threaded-simd.wasm"],r6=null,r8=null,r5={},r9=!1,r7=!1,ne=-1;eM.registerBackend("wasm",function(){return __awaiter(void 0,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,function(){return __awaiter(this,void 0,void 0,function(){var e,t,r;return __generator(this,function(n){switch(n.label){case 0:return[4,Promise.all([eM.env().getAsync("WASM_HAS_SIMD_SUPPORT"),eM.env().getAsync("WASM_HAS_MULTITHREAD_SUPPORT")])];case 1:return t=(e=__read.apply(void 0,[n.sent(),2]))[0],r=e[1],[2,new Promise(function(e,n){var i,a,o={};o.locateFile=function(e,n){if(e.endsWith(".worker.js")){var i='"use strict";var Module={};var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads");var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",data=>onmessage({data:data}));var fs=require("fs");Object.assign(global,{self:global,require:require,Module:Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(f){(0,eval)(fs.readFileSync(f,"utf8")+"//# sourceURL="+f)},postMessage:function(msg){parentPort.postMessage(msg)},performance:global.performance||{now:function(){return Date.now()}}})}var initializedJS=false;var pendingNotifiedProxyingQueues=[];function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,text+"\n");return}console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=(info,receiveInstance)=>{var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onunhandledrejection=e=>{throw e.reason??e};self.startWorker=instance=>{Module=instance;postMessage({"cmd":"loaded"})};self.onmessage=e=>{try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;for(const handler of e.data.handlers){Module[handler]=function(){postMessage({cmd:"callHandler",handler:handler,args:[...arguments]})}}Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob=="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}WasmBackendModuleThreadedSimd(Module)}else if(e.data.cmd==="run"){Module["__emscripten_thread_init"](e.data.pthread_ptr,0,0,1);Module["establishStackSpace"]();Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInitTLS();if(!initializedJS){pendingNotifiedProxyingQueues.forEach(queue=>{Module["executeNotifiedProxyingQueue"](queue)});pendingNotifiedProxyingQueues=[];initializedJS=true}try{Module["invokeEntryPoint"](e.data.start_routine,e.data.arg)}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processProxyingQueue"){if(initializedJS){Module["executeNotifiedProxyingQueue"](e.data.queue)}else{pendingNotifiedProxyingQueues.push(e.data.queue)}}else if(e.data.cmd){err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){if(Module["__emscripten_thread_crashed"]){Module["__emscripten_thread_crashed"]()}throw ex}};'.replace(/\n/g,"\\n"),a=new Blob([i],{type:"application/javascript"});return URL.createObjectURL(a)}return e.endsWith(".wasm")?getPathToWasmBinary(t,r,null!=r8?r8:n):n+e},r7&&(o.instantiateWasm=(i=getPathToWasmBinary(t,r,null!=r8?r8:""),function(e,t){return eM.util.fetch(i,{credentials:"same-origin"}).then(function(r){r.ok||e.env.a("failed to load wasm binary file at '".concat(i,"'")),r.arrayBuffer().then(function(r){WebAssembly.instantiate(r,e).then(function(e){t(e.instance,e.module)})})}),{}}));var s=!1;o.onAbort=function(){s||r9||(r9=!0,n({message:"Make sure the server can serve the `.wasm` file relative to the bundled js file. For more details see https://github.com/tensorflow/tfjs/blob/master/tfjs-backend-wasm/README.md#using-bundlers"}))},r&&t&&null==r6?(o.mainScriptUrlOrBlob=new Blob(["var WasmBackendModuleThreadedSimd = "+r0.toString()],{type:"text/javascript"}),a=r0(o)):a=r2(o),a.then(function(t){s=!0,r9=!1,t.tfjs={init:t.cwrap("init",null,[]),initWithThreadsCount:t.cwrap("init_with_threads_count",null,["number"]),getThreadsCount:t.cwrap("get_threads_count","number",[]),registerTensor:t.cwrap("register_tensor",null,["number","number","number"]),disposeData:t.cwrap("dispose_data",null,["number"]),dispose:t.cwrap("dispose",null,[])},e({wasm:t})}).catch(n)})]}})})}()];case 1:return e=t.sent().wasm,[2,new r4(e)]}})})},2),t._1=function(e,t){if(void 0===t&&(t=!1),r9)throw Error("The WASM backend was already initialized. Make sure you call `setWasmPaths()` before you call `tf.setBackend()` or `tf.ready()`");if("string"==typeof e)r8=e;else{r5=e;var r=r3.filter(function(e){return null==r5[e]});if(r.length>0)throw Error("There were no entries found for the following binaries: "+"".concat(r.join(","),". Please either call setWasmPaths with a ")+"map providing a path for each binary, or with a string indicating the directory where all the binaries can be found.")}r7=t}},39090:(e,t,r)=>{"use strict";var n,i,a,o,s,l,u,d,c,extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}function __awaiter(e,t,r,n){return new(r||(r=Promise))(function(i,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})}function __generator(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(s){return function(a){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o}function __spreadArray(e,t,r){if(r||2==arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var p=function(){function DataStorage(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}return DataStorage.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)},DataStorage.prototype.set=function(e,t){this.dataIdsCount++,this.data.set(e,t)},DataStorage.prototype.has=function(e){return this.data.has(e)},DataStorage.prototype.delete=function(e){return this.dataIdsCount--,this.data.delete(e)},DataStorage.prototype.numDataIds=function(){return this.dataIdsCount},DataStorage}(),h=function(){function KernelBackend(){}return KernelBackend.prototype.refCount=function(e){return notYetImplemented("refCount")},KernelBackend.prototype.incRef=function(e){return notYetImplemented("incRef")},KernelBackend.prototype.timerAvailable=function(){return!0},KernelBackend.prototype.time=function(e){return notYetImplemented("time")},KernelBackend.prototype.read=function(e){return notYetImplemented("read")},KernelBackend.prototype.readSync=function(e){return notYetImplemented("readSync")},KernelBackend.prototype.readToGPU=function(e,t){return notYetImplemented("readToGPU")},KernelBackend.prototype.numDataIds=function(){return notYetImplemented("numDataIds")},KernelBackend.prototype.disposeData=function(e,t){return notYetImplemented("disposeData")},KernelBackend.prototype.write=function(e,t,r){return notYetImplemented("write")},KernelBackend.prototype.move=function(e,t,r,n,i){return notYetImplemented("move")},KernelBackend.prototype.createTensorFromGPUData=function(e,t,r){return notYetImplemented("createTensorFromGPUData")},KernelBackend.prototype.memory=function(){return notYetImplemented("memory")},KernelBackend.prototype.floatPrecision=function(){return notYetImplemented("floatPrecision")},KernelBackend.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},KernelBackend.prototype.dispose=function(){return notYetImplemented("dispose")},KernelBackend}();function notYetImplemented(e){throw Error("'".concat(e,"' not yet implemented or not found in the registry. ")+"This kernel may not be supported by the tfjs backend you have chosen")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function shuffle(e){for(var t=e.length,r=0;t>0;)r=Math.random()*t|0,swap(e,--t,r)}function clamp(e,t,r){return Math.max(e,Math.min(t,r))}function swap(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function assert(e,t){if(!e)throw Error("string"==typeof t?t:t())}function assertShapesMatch(e,t,r){void 0===r&&(r=""),assert(arraysEqual(e,t),function(){return r+" Shapes ".concat(e," and ").concat(t," must match")})}function assertNonNull(e){assert(null!=e,function(){return"The input to the tensor constructor must be a non-null value."})}function sizeFromShape(e){if(0===e.length)return 1;for(var t=e[0],r=1;r<e.length;r++)t*=e[r];return t}function arraysEqualWithNull(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(null!==e[r]&&null!==t[r]&&e[r]!==t[r])return!1;return!0}function arraysEqual(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function isInt(e){return e%1==0}function rightPad(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function parseAxisParam(e,t){var r=t.length;return assert((e=null==e?t.map(function(e,t){return t}):[].concat(e)).every(function(e){return e>=-r&&e<r}),function(){return"All values in axis param must be in range [-".concat(r,", ").concat(r,") but ")+"got axis ".concat(e)}),assert(e.every(function(e){return isInt(e)}),function(){return"All values in axis param must be integers but "+"got axis ".concat(e)}),e.map(function(e){return e<0?r+e:e})}function squeezeShape(e,t){for(var r=[],n=[],i=null!=t&&Array.isArray(t)&&0===t.length,a=null==t||i?null:parseAxisParam(t,e).sort(),o=0,s=0;s<e.length;++s){if(null!=a){if(a[o]===s&&1!==e[s])throw Error("Can't squeeze axis ".concat(s," since its dim '").concat(e[s],"' is not 1"));(null==a[o]||a[o]>s)&&1===e[s]&&(r.push(e[s]),n.push(s)),a[o]<=s&&o++}1!==e[s]&&(r.push(e[s]),n.push(s))}return{newShape:r,keptDims:n}}function getArrayFromDType(e,t){var r=null;if(null==e||"float32"===e)r=new Float32Array(t);else if("int32"===e)r=new Int32Array(t);else if("bool"===e)r=new Uint8Array(t);else if("string"===e)r=Array(t);else throw Error("Unknown data type ".concat(e));return r}function checkConversionForErrors(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type ".concat(t," being uploaded contains ").concat(n,"."))}}function isValidDtype(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function bytesPerElement(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw Error("Unknown dtype ".concat(e))}function bytesFromStringArray(e){if(null==e)return 0;var t=0;return e.forEach(function(e){return t+=e.length}),t}function isString(e){return"string"==typeof e||e instanceof String}function isBoolean(e){return"boolean"==typeof e}function isNumber(e){return"number"==typeof e}function inferDtype(e){if(Array.isArray(e))return inferDtype(e[0]);if(e instanceof Float32Array);else if(e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray)return"int32";else if(isNumber(e));else if(isString(e))return"string";else if(isBoolean(e))return"bool";return"float32"}function isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)}function nearestDivisor(e,t){for(var r=t;r<e;++r)if(e%r==0)return r;return e}function computeStrides(e){var t=e.length;if(t<2)return[];var r=Array(t-1);r[t-2]=e[t-1];for(var n=t-3;n>=0;--n)r[n]=r[n+1]*e[n+1];return r}function toNestedArray(e,t,r){if(void 0===r&&(r=!1),0===e.length)return t[0];var n=e.reduce(function(e,t){return e*t})*(r?2:1);if(0===n)return[];if(n!==t.length)throw Error("[".concat(e,"] does not match the input size ").concat(t.length).concat(r?" for a complex tensor":"","."));return function createNestedArray(e,t,r,n){void 0===n&&(n=!1);var i=[];if(1===t.length)for(var a=t[0]*(n?2:1),o=0;o<a;o++)i[o]=r[e+o];else for(var a=t[0],s=t.slice(1),l=s.reduce(function(e,t){return e*t})*(n?2:1),o=0;o<a;o++)i[o]=createNestedArray(e+o*l,s,r,n);return i}(0,e,t,r)}function makeOnesTypedArray(e,t){for(var r=makeZerosTypedArray(e,t),n=0;n<r.length;n++)r[n]=1;return r}function makeZerosTypedArray(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw Error("Unknown data type ".concat(t))}function assertNonNegativeIntegerDimensions(e){e.forEach(function(t){assert(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got "+"shape [".concat(e,"].")})})}function isPromise(e){return e&&e.then&&"function"==typeof e.then}var f="tfjsflags",m=function(){function Environment(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=getQueryParams,this.populateURLFlags()}return Environment.prototype.setPlatform=function(e,t){null==this.platform||env().getBool("IS_TEST")||env().getBool("PROD")||console.warn("Platform ".concat(this.platformName," has already been set. ")+"Overwriting the platform with ".concat(e,".")),this.platformName=e,this.platform=t},Environment.prototype.registerFlag=function(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},null!=this.urlFlags[e]){var n=this.urlFlags[e];env().getBool("IS_TEST")||env().getBool("PROD")||console.warn("Setting feature override from URL ".concat(e,": ").concat(n,".")),this.set(e,n)}},Environment.prototype.getAsync=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){switch(n.label){case 0:if(e in this.flags)return[2,this.flags[e]];return t=this.flags,r=e,[4,this.evaluateFlag(e)];case 1:return t[r]=n.sent(),[2,this.flags[e]]}})})},Environment.prototype.get=function(e){if(e in this.flags)return this.flags[e];var t=this.evaluateFlag(e);if(isPromise(t))throw Error("Flag ".concat(e," cannot be synchronously evaluated. ")+"Please use getAsync() instead.");return this.flags[e]=t,this.flags[e]},Environment.prototype.getNumber=function(e){return this.get(e)},Environment.prototype.getBool=function(e){return this.get(e)},Environment.prototype.getString=function(e){return this.get(e)},Environment.prototype.getFlags=function(){return this.flags},Object.defineProperty(Environment.prototype,"features",{get:function(){return this.flags},enumerable:!1,configurable:!0}),Environment.prototype.set=function(e,t){if(null==this.flagRegistry[e])throw Error("Cannot set flag ".concat(e," as it has not been registered."));this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)},Environment.prototype.evaluateFlag=function(e){if(null==this.flagRegistry[e])throw Error("Cannot evaluate flag '".concat(e,"': no evaluation function found."));return this.flagRegistry[e].evaluationFn()},Environment.prototype.setFlags=function(e){this.flags=Object.assign({},e)},Environment.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},Environment.prototype.populateURLFlags=function(){var e=this;if(void 0!==this.global&&void 0!==this.global.location&&void 0!==this.global.location.search){var t=this.getQueryParams(this.global.location.search);f in t&&t[f].split(",").forEach(function(t){var r,n=__read(t.split(":"),2),i=n[0],a=n[1];e.urlFlags[i]="true"===(r=a.toLowerCase())||"false"===r?"true"===r:"".concat(+r)===r?+r:a})}},Environment}();function getQueryParams(e){var t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(e){for(var r,n,i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return r=i[0],n=i[1],t[decodeURIComponent(r)]=decodeURIComponent(n||""),i.join("=")}),t}function env(){return t.ENV}function getGlobalNamespace(){if(null==n){var e=void 0;if("undefined"!=typeof window)e=window;else if("undefined"!=typeof global)e=global;else if("undefined"!=typeof process)e=process;else if("undefined"!=typeof self)e=self;else throw Error("Could not find a global object");n=e}return n}function getGlobal(e,t){var r,n=(null==(r=getGlobalNamespace())._tfGlobals&&(r._tfGlobals=new Map),r._tfGlobals);if(n.has(e))return n.get(e);var i=t();return n.set(e,i),n.get(e)}t.ENV=null;var y="Acos",g="Acosh",v="AddN",b="ArgMax",S="ArgMin",x="Asin",P="Asinh",C="Atan",_="Atanh",A="Atan2",T="AvgPool",w="AvgPool3D",E="BatchMatMul",D="BatchToSpaceND",O="Bincount",R="BitwiseAnd",M="BroadcastArgs",k="Cast",L="Ceil",I="ClipByValue",B="Complex",N="ComplexAbs",F="Concat",V="Conv2D",j="Conv2DBackpropFilter",H="Conv2DBackpropInput",z="Conv3D",U="Conv3DBackpropInputV2",G="Cosh",W="Cumprod",X="Cumsum",Y="CropAndResize",q="DenseBincount",K="DepthToSpace",$="DepthwiseConv2dNative",Z="DepthwiseConv2dNativeBackpropFilter",J="DepthwiseConv2dNativeBackpropInput",Q="Diag",ee="Dilation2D",et="Draw",er="RealDiv",en="Einsum",ei="Equal",ea="ExpandDims",eo="Expm1",es="Fill",el="FlipLeftRight",eu="Floor",ed="FloorDiv",ec="FusedBatchNorm",ep="GatherV2",eh="GatherNd",ef="Greater",em="GreaterEqual",ey="Identity",eg="IFFT",ev="Imag",eb="IsFinite",eS="IsInf",ex="IsNan",eP="LeakyRelu",eC="Less",e_="LessEqual",eA="LinSpace",eT="Log1p",ew="LogicalAnd",eE="LogicalNot",eD="LogicalOr",eO="Maximum",eR="MaxPool",eM="MaxPool3D",ek="MaxPoolWithArgmax",eL="Mean",eI="Minimum",eB="MirrorPad",eN="Multinomial",eF="Multiply",eV="NotEqual",ej="NonMaxSuppressionV3",eH="NonMaxSuppressionV4",ez="NonMaxSuppressionV5",eU="OnesLike",eG="OneHot",eW="Pack",eX="PadV2",eY="Prelu",eq="Prod",eK="RaggedGather",e$="RaggedRange",eZ="RaggedTensorToTensor",eJ="Range",eQ="Real",e1="Reciprocal",e0="Relu",e2="Reshape",e4="ResizeNearestNeighbor",e3="ResizeBilinear",e6="Relu6",e8="Reverse",e5="Round",e9="Rsqrt",e7="ScatterNd",te="TensorScatterUpdate",tt="SearchSorted",tr="Select",tn="Selu",ti="Slice",ta="Sinh",to="Sign",ts="Sigmoid",tl="Softplus",tu="Sqrt",td="SpaceToBatchND",tc="SplitV",tp="Softmax",th="SparseFillEmptyRows",tf="SparseReshape",tm="SparseSegmentMean",ty="SparseSegmentSum",tg="SparseToDense",tv="SquaredDifference",tb="StaticRegexReplace",tS="StridedSlice",tx="StringNGrams",tP="StringSplit",tC="StringToHashBucketFast",t_="Tanh",tA="Tile",tT="TopK",tw="Transform",tE="Transpose",tD="Unique",tO="Unpack",tR="UnsortedSegmentSum",tM="ZerosLike",tk="Step",tL="FromPixels",tI="RotateWithOffset",tB="_FusedMatMul",tN="FusedConv2D",tF="FusedDepthwiseConv2D";function warn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];env().getBool("IS_TEST")||env().getBool("PROD")||console.warn.apply(console,__spreadArray([],__read(e),!1))}var tV=getGlobal("kernelRegistry",function(){return new Map}),tj=getGlobal("gradRegistry",function(){return new Map});function getKernel(e,t){var r=makeKey(e,t);return tV.get(r)}function getGradient(e){return tj.get(e)}function getKernelsForBackend(e){for(var t=tV.entries(),r=[];;){var n=t.next(),i=n.done,a=n.value;if(i)break;var o=__read(a,2),s=o[0],l=o[1];__read(s.split("_"),1)[0]===e&&r.push(l)}return r}function registerKernel(e){var t=e.kernelName,r=e.backendName,n=makeKey(t,r);tV.has(n)&&warn("The kernel '".concat(t,"' for backend ")+"'".concat(r,"' is already registered")),tV.set(n,e)}function makeKey(e,t){return"".concat(t,"_").concat(e)}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function isTypedArrayBrowser(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var tH="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},tz=null;try{tz=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function Long$1(e,t,r){this.low=0|e,this.high=0|t,this.unsigned=!!r}function isLong(e){return!0===(e&&e.__isLong__)}Long$1.prototype.__isLong__,Object.defineProperty(Long$1.prototype,"__isLong__",{value:!0}),Long$1.isLong=isLong;var tU={},tG={};function fromInt(e,t){var r,n,i;return t?(e>>>=0,(i=0<=e&&e<256)&&(n=tG[e]))?n:(r=fromBits(e,(0|e)<0?-1:0,!0),i&&(tG[e]=r),r):(e|=0,(i=-128<=e&&e<128)&&(n=tU[e]))?n:(r=fromBits(e,e<0?-1:0,!1),i&&(tU[e]=r),r)}function fromNumber(e,t){if(isNaN(e))return t?tZ:t$;if(t){if(e<0)return tZ;if(e>=tY)return t2}else{if(e<=-tq)return t4;if(e+1>=tq)return t0}return e<0?fromNumber(-e,t).neg():fromBits(e%tX|0,e/tX|0,t)}function fromBits(e,t,r){return new Long$1(e,t,r)}Long$1.fromInt=fromInt,Long$1.fromNumber=fromNumber,Long$1.fromBits=fromBits;var tW=Math.pow;function fromString(e,t,r){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return t$;if("number"==typeof t?(r=t,t=!1):t=!!t,(r=r||10)<2||36<r)throw RangeError("radix");if((n=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===n)return fromString(e.substring(1),t,r).neg();for(var n,i=fromNumber(tW(r,8)),a=t$,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),l=parseInt(e.substring(o,o+s),r);if(s<8){var u=fromNumber(tW(r,s));a=a.mul(u).add(fromNumber(l))}else a=(a=a.mul(i)).add(fromNumber(l))}return a.unsigned=t,a}function fromValue(e,t){return"number"==typeof e?fromNumber(e,t):"string"==typeof e?fromString(e,t):fromBits(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}Long$1.fromString=fromString,Long$1.fromValue=fromValue;var tX=4294967296,tY=18446744073709552e3,tq=0x7fffffffffffffff,tK=fromInt(16777216),t$=fromInt(0);Long$1.ZERO=t$;var tZ=fromInt(0,!0);Long$1.UZERO=tZ;var tJ=fromInt(1);Long$1.ONE=tJ;var tQ=fromInt(1,!0);Long$1.UONE=tQ;var t1=fromInt(-1);Long$1.NEG_ONE=t1;var t0=fromBits(-1,2147483647,!1);Long$1.MAX_VALUE=t0;var t2=fromBits(-1,-1,!0);Long$1.MAX_UNSIGNED_VALUE=t2;var t4=fromBits(0,-2147483648,!1);Long$1.MIN_VALUE=t4;var t3=Long$1.prototype;t3.toInt=function(){return this.unsigned?this.low>>>0:this.low},t3.toNumber=function(){return this.unsigned?(this.high>>>0)*tX+(this.low>>>0):this.high*tX+(this.low>>>0)},t3.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(!this.eq(t4))return"-"+this.neg().toString(e);var t=fromNumber(e),r=this.div(t),n=r.mul(t).sub(this);return r.toString(e)+n.toInt().toString(e)}for(var i=fromNumber(tW(e,6),this.unsigned),a=this,o="";;){var s=a.div(i),l=(a.sub(s.mul(i)).toInt()>>>0).toString(e);if((a=s).isZero())return l+o;for(;l.length<6;)l="0"+l;o=""+l+o}},t3.getHighBits=function(){return this.high},t3.getHighBitsUnsigned=function(){return this.high>>>0},t3.getLowBits=function(){return this.low},t3.getLowBitsUnsigned=function(){return this.low>>>0},t3.getNumBitsAbs=function(){if(this.isNegative())return this.eq(t4)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return 0!=this.high?t+33:t+1},t3.isZero=function(){return 0===this.high&&0===this.low},t3.eqz=t3.isZero,t3.isNegative=function(){return!this.unsigned&&this.high<0},t3.isPositive=function(){return this.unsigned||this.high>=0},t3.isOdd=function(){return(1&this.low)==1},t3.isEven=function(){return(1&this.low)==0},t3.equals=function(e){return isLong(e)||(e=fromValue(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},t3.eq=t3.equals,t3.notEquals=function(e){return!this.eq(e)},t3.neq=t3.notEquals,t3.ne=t3.notEquals,t3.lessThan=function(e){return 0>this.comp(e)},t3.lt=t3.lessThan,t3.lessThanOrEqual=function(e){return 0>=this.comp(e)},t3.lte=t3.lessThanOrEqual,t3.le=t3.lessThanOrEqual,t3.greaterThan=function(e){return this.comp(e)>0},t3.gt=t3.greaterThan,t3.greaterThanOrEqual=function(e){return this.comp(e)>=0},t3.gte=t3.greaterThanOrEqual,t3.ge=t3.greaterThanOrEqual,t3.compare=function(e){if(isLong(e)||(e=fromValue(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},t3.comp=t3.compare,t3.negate=function(){return!this.unsigned&&this.eq(t4)?t4:this.not().add(tJ)},t3.neg=t3.negate,t3.add=function(e){isLong(e)||(e=fromValue(e));var t,r,n=this.high>>>16,i=65535&this.high,a=this.low>>>16,o=65535&this.low,s=e.high>>>16,l=65535&e.high,u=e.low>>>16,d=65535&e.low,c=0,p=0;return t=0+((r=0+(o+d))>>>16),r&=65535,t+=a+u,p+=t>>>16,t&=65535,p+=i+l,c+=p>>>16,p&=65535,c+=n+s,fromBits(t<<16|r,(c&=65535)<<16|p,this.unsigned)},t3.subtract=function(e){return isLong(e)||(e=fromValue(e)),this.add(e.neg())},t3.sub=t3.subtract,t3.multiply=function(e){if(this.isZero())return t$;if(isLong(e)||(e=fromValue(e)),tz)return fromBits(tz.mul(this.low,this.high,e.low,e.high),tz.get_high(),this.unsigned);if(e.isZero())return t$;if(this.eq(t4))return e.isOdd()?t4:t$;if(e.eq(t4))return this.isOdd()?t4:t$;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(tK)&&e.lt(tK))return fromNumber(this.toNumber()*e.toNumber(),this.unsigned);var t,r,n=this.high>>>16,i=65535&this.high,a=this.low>>>16,o=65535&this.low,s=e.high>>>16,l=65535&e.high,u=e.low>>>16,d=65535&e.low,c=0,p=0;return t=0+((r=0+o*d)>>>16),r&=65535,t+=a*d,p+=t>>>16,t&=65535,t+=o*u,p+=t>>>16,t&=65535,p+=i*d,c+=p>>>16,p&=65535,p+=a*u,c+=p>>>16,p&=65535,p+=o*l,c+=p>>>16,p&=65535,c+=n*d+i*u+a*l+o*s,fromBits(t<<16|r,(c&=65535)<<16|p,this.unsigned)},t3.mul=t3.multiply,t3.divide=function(e){if(isLong(e)||(e=fromValue(e)),e.isZero())throw Error("division by zero");if(tz){var t,r,n;return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?fromBits((this.unsigned?tz.div_u:tz.div_s)(this.low,this.high,e.low,e.high),tz.get_high(),this.unsigned):this}if(this.isZero())return this.unsigned?tZ:t$;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return tZ;if(e.gt(this.shru(1)))return tQ;n=tZ}else{if(this.eq(t4))return e.eq(tJ)||e.eq(t1)?t4:e.eq(t4)?tJ:(t=this.shr(1).div(e).shl(1)).eq(t$)?e.isNegative()?tJ:t1:(r=this.sub(e.mul(t)),n=t.add(r.div(e)));if(e.eq(t4))return this.unsigned?tZ:t$;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();n=t$}for(r=this;r.gte(e);){for(var i=Math.ceil(Math.log(t=Math.max(1,Math.floor(r.toNumber()/e.toNumber())))/Math.LN2),a=i<=48?1:tW(2,i-48),o=fromNumber(t),s=o.mul(e);s.isNegative()||s.gt(r);)t-=a,s=(o=fromNumber(t,this.unsigned)).mul(e);o.isZero()&&(o=tJ),n=n.add(o),r=r.sub(s)}return n},t3.div=t3.divide,t3.modulo=function(e){return(isLong(e)||(e=fromValue(e)),tz)?fromBits((this.unsigned?tz.rem_u:tz.rem_s)(this.low,this.high,e.low,e.high),tz.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},t3.mod=t3.modulo,t3.rem=t3.modulo,t3.not=function(){return fromBits(~this.low,~this.high,this.unsigned)},t3.and=function(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low&e.low,this.high&e.high,this.unsigned)},t3.or=function(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low|e.low,this.high|e.high,this.unsigned)},t3.xor=function(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low^e.low,this.high^e.high,this.unsigned)},t3.shiftLeft=function(e){return(isLong(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?fromBits(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):fromBits(0,this.low<<e-32,this.unsigned)},t3.shl=t3.shiftLeft,t3.shiftRight=function(e){return(isLong(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?fromBits(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):fromBits(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},t3.shr=t3.shiftRight,t3.shiftRightUnsigned=function(e){if(isLong(e)&&(e=e.toInt()),0==(e&=63))return this;var t=this.high;return e<32?fromBits(this.low>>>e|t<<32-e,t>>>e,this.unsigned):32===e?fromBits(t,0,this.unsigned):fromBits(t>>>e-32,0,this.unsigned)},t3.shru=t3.shiftRightUnsigned,t3.shr_u=t3.shiftRightUnsigned,t3.toSigned=function(){return this.unsigned?fromBits(this.low,this.high,!1):this},t3.toUnsigned=function(){return this.unsigned?this:fromBits(this.low,this.high,!0)},t3.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},t3.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},t3.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},Long$1.fromBytes=function(e,t,r){return r?Long$1.fromBytesLE(e,t):Long$1.fromBytesBE(e,t)},Long$1.fromBytesLE=function(e,t){return new Long$1(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},Long$1.fromBytesBE=function(e,t){return new Long$1(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};var t6=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(Long$1),t8=/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){return t.forEach(function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if("default"!==r&&!(r in e)){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}})}),e}({__proto__:null,default:t6},[Long$1]),t5=t6||t8;function hexToLong(e){return t5.fromString(e,!0,16)}var t9=hexToLong("c3a5c85c97cb3127"),t7=hexToLong("b492b66fbe98f273"),re=hexToLong("9ae16a3b2f90404f");function shiftMix(e){return e.xor(e.shru(47))}function fetch$2(e,t,r){var n=e.slice(t,t+r);return t5.fromBytes(Array.from(n),!0,!0)}function fetch64(e,t){return fetch$2(e,t,8)}function rotate64(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function hashLen16(e,t,r){void 0===r&&(r=hexToLong("9ddfea08eb382d69"));var n=e.xor(t).mul(r);n=n.xor(n.shru(47));var i=t.xor(n).mul(r);return(i=i.xor(i.shru(47))).mul(r)}function weakHashLen32WithSeedsStr(e,t,r,n){var i,a,o,s,l,u,d;return i=fetch64(e,t),a=fetch64(e,t+8),o=fetch64(e,t+16),s=fetch64(e,t+24),l=r,u=n,l=l.add(i),u=rotate64(u.add(l).add(s),21),d=l,l=(l=l.add(a)).add(o),u=u.add(rotate64(l,44)),[l.add(s),u.add(d)]}function toTypedArray(e,t){if("string"===t)throw Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=flatten(e)),env().getBool("DEBUG")&&checkConversionForErrors(e,t),(r=e)instanceof Float32Array&&"float32"===t||r instanceof Int32Array&&"int32"===t||r instanceof Uint8Array&&"bool"===t)return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){for(var r,n=new Uint8Array(e.length),i=0;i<n.length;++i)0!==Math.round(e[i])&&(n[i]=1);return n}throw Error("Unknown data type ".concat(t))}function now(){return env().platform.now()}function encodeString(e,t){return void 0===t&&(t="utf-8"),t=t||"utf-8",env().platform.encode(e,t)}function decodeString(e,t){return void 0===t&&(t="utf-8"),t=t||"utf-8",env().platform.decode(e,t)}function isTypedArray(e){return null!=env().platform.isTypedArray?env().platform.isTypedArray(e):isTypedArrayBrowser(e)}function flatten(e,t,r){var n,i;if(void 0===t&&(t=[]),void 0===r&&(r=!1),null==t&&(t=[]),"boolean"==typeof e||"number"==typeof e||"string"==typeof e||isPromise(e)||null==e||isTypedArray(e)&&r)t.push(e);else if(Array.isArray(e)||isTypedArray(e))for(var a=0;a<e.length;++a)flatten(e[a],t,r);else{var o=-1;try{for(var s=__values(Object.keys(e)),l=s.next();!l.done;l=s.next()){var u=l.value;/^([1-9]+[0-9]*|0)$/.test(u)&&(o=Math.max(o,Number(u)))}}catch(e){n={error:e}}finally{try{l&&!l.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}for(var a=0;a<=o;a++)flatten(e[a],t,r)}return t}var rt=function(){function Profiler(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new rr)}return Profiler.prototype.profileKernel=function(e,t,r){var n,i,a,o,holdResultWrapperFn=function(){a=r()},s=now();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(holdResultWrapperFn);else{holdResultWrapperFn();try{for(var l=__values(a),u=l.next();!u.done;u=l.next())u.value.dataSync()}catch(e){n={error:e}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}o=Promise.resolve({kernelMs:now()-s})}if(env().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(var d=0;d<a.length;d++)!function(t){var r=a[t];r.data().then(function(t){(function(e,t,r){if("float32"===t)for(var n=0;n<e.length;n++){var i=e[n];if(isNaN(i)||!isFinite(i))return console.warn("Found ".concat(i," in the result of '").concat(r,"'")),!0}})(t,r.dtype,e)})}(d);return{kernelName:e,outputs:a,inputs:t,timeMs:o.then(function(e){return e.kernelMs}),extraInfo:o.then(function(e){return null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""})}},Profiler.prototype.logKernelProfile=function(e){var t=this,r=e.kernelName,n=e.outputs,i=e.timeMs,a=e.inputs,o=e.extraInfo;n.forEach(function(e){Promise.all([e.data(),i,o]).then(function(n){t.logger.logKernelProfile(r,e,n[0],n[1],a,n[2])})})},Profiler}(),rr=function(){function Logger(){}return Logger.prototype.logKernelProfile=function(e,t,r,n,i,a){var o="number"==typeof n?rightPad("".concat(n,"ms"),9):n.error,s=rightPad(e,25),l=t.rank,u=t.size,d=rightPad(t.shape.toString(),14),c="";for(var p in i){var h=i[p];if(null!=h){var f=h.shape||t.shape,m=f.length;c+="".concat(p,": ").concat(m,"D ").concat(m>0?f:""," ")}}console.log("%c".concat(s,"	%c").concat(o,"	%c").concat(l,"D ").concat(d,"	%c").concat(u,"	%c").concat(c,"	%c").concat(a),"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},Logger}();function valToString(e,t,r){return rightPad(Array.isArray(e)?"".concat(parseFloat(e[0].toFixed(7))," + ")+"".concat(parseFloat(e[1].toFixed(7)),"j"):isString(e)?"'".concat(e,"'"):"bool"===r?boolNumToString(e):parseFloat(e.toFixed(7)).toString(),t)}function boolNumToString(e){return 0===e?"false":"true"}function createComplexTuples(e){for(var t=[],r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}var rn=function(){function TensorBuffer(e,t,r){var n=this;if(this.dtype=t,this.shape=e.slice(),this.size=sizeFromShape(e),null!=r){var i=r.length;assert(i===this.size,function(){return"Length of values '".concat(i,"' does not match the size ")+"inferred by the shape '".concat(n.size,"'.")})}if("complex64"===t)throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||getArrayFromDType(t,this.size),this.strides=computeStrides(e)}return TensorBuffer.prototype.set=function(e){for(var t=this,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];0===r.length&&(r=[0]),assert(r.length===this.rank,function(){return"The number of provided coordinates (".concat(r.length,") must ")+"match the rank (".concat(t.rank,")")});var i=this.locToIndex(r);this.values[i]=e},TensorBuffer.prototype.get=function(){for(var e,t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];0===r.length&&(r=[0]);var i=0;try{for(var a=__values(r),o=a.next();!o.done;o=a.next()){var s=o.value;if(s<0||s>=this.shape[i]){var l="Requested out of range element at ".concat(r,". ")+"  Buffer shape=".concat(this.shape);throw Error(l)}i++}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}for(var u=r[r.length-1],d=0;d<r.length-1;++d)u+=this.strides[d]*r[d];return this.values[u]},TensorBuffer.prototype.locToIndex=function(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];for(var t=e[e.length-1],r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t},TensorBuffer.prototype.indexToLoc=function(e){if(0===this.rank)return[];if(1===this.rank)return[e];for(var t=Array(this.shape.length),r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t},Object.defineProperty(TensorBuffer.prototype,"rank",{get:function(){return this.shape.length},enumerable:!1,configurable:!0}),TensorBuffer.prototype.toTensor=function(){return ri().makeTensor(this.values,this.shape,this.dtype)},TensorBuffer}(),ri=null,ra=null,ro=function(){function Tensor(e,t,r,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=sizeFromShape(e),this.strides=computeStrides(e),this.dataId=r,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}return Object.defineProperty(Tensor.prototype,"rank",{get:function(){return this.shape.length},enumerable:!1,configurable:!0}),Tensor.prototype.buffer=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,ra.buffer(this.shape,this.dtype,e)]}})})},Tensor.prototype.bufferSync=function(){return ra.buffer(this.shape,this.dtype,this.dataSync())},Tensor.prototype.array=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,toNestedArray(this.shape,e,"complex64"===this.dtype)]}})})},Tensor.prototype.arraySync=function(){return toNestedArray(this.shape,this.dataSync(),"complex64"===this.dtype)},Tensor.prototype.data=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:if(this.throwIfDisposed(),e=ri().read(this.dataId),"string"!==this.dtype)return[3,2];return[4,e];case 1:t=r.sent();try{return[2,t.map(function(e){return decodeString(e)})]}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,e]}})})},Tensor.prototype.dataToGPU=function(e){return this.throwIfDisposed(),ri().readToGPU(this.dataId,e)},Tensor.prototype.dataSync=function(){this.throwIfDisposed();var e=ri().readSync(this.dataId);if("string"===this.dtype)try{return e.map(function(e){return decodeString(e)})}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e},Tensor.prototype.bytes=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,ri().read(this.dataId)];case 1:if(e=t.sent(),"string"===this.dtype)return[2,e];return[2,new Uint8Array(e.buffer)]}})})},Tensor.prototype.dispose=function(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),ri().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(Tensor.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!1,configurable:!0}),Tensor.prototype.throwIfDisposed=function(){if(this.isDisposed)throw Error("Tensor is disposed.")},Tensor.prototype.print=function(e){return void 0===e&&(e=!1),ra.print(this,e)},Tensor.prototype.clone=function(){return this.throwIfDisposed(),ra.clone(this)},Tensor.prototype.toString=function(e){var t,r,n,i,a,o,s,l,u;return void 0===e&&(e=!1),t=this.dataSync(),r=this.shape,n=this.dtype,i=e,a=computeStrides(r),o=function(e,t,r,n){var i=sizeFromShape(t),a=n[n.length-1],o=Array(a).fill(0),s=t.length,l="complex64"===r?createComplexTuples(e):e;if(s>1)for(var u=0;u<i/a;u++)for(var d=u*a,c=0;c<a;c++)o[c]=Math.max(o[c],valToString(l[d+c],0,r).length);return o}(t,r,n,a),s=r.length,l=function subTensorToString(e,t,r,n,i,a){void 0===a&&(a=!0);var o="complex64"===r?2:1,s=t[0],l=t.length;if(0===l)return"complex64"===r?[valToString(createComplexTuples(e)[0],0,r)]:"bool"===r?[boolNumToString(e[0])]:[e[0].toString()];if(1===l){if(s>20){var u=3*o,d=Array.from(e.slice(0,u)),c=Array.from(e.slice((s-3)*o,s*o));return"complex64"===r&&(d=createComplexTuples(d),c=createComplexTuples(c)),["["+d.map(function(e,t){return valToString(e,i[t],r)}).join(", ")+", ..., "+c.map(function(e,t){return valToString(e,i[s-3+t],r)}).join(", ")+"]"]}return["["+("complex64"===r?createComplexTuples(e):Array.from(e)).map(function(e,t){return valToString(e,i[t],r)}).join(", ")+"]"]}var p=t.slice(1),h=n.slice(1),f=n[0]*o,m=[];if(s>20){for(var y=0;y<3;y++){var g=y*f,v=g+f;m.push.apply(m,__spreadArray([],__read(subTensorToString(e.slice(g,v),p,r,h,i,!1)),!1))}m.push("...");for(var y=s-3;y<s;y++){var g=y*f,v=g+f;m.push.apply(m,__spreadArray([],__read(subTensorToString(e.slice(g,v),p,r,h,i,y===s-1)),!1))}}else for(var y=0;y<s;y++){var g=y*f,v=g+f;m.push.apply(m,__spreadArray([],__read(subTensorToString(e.slice(g,v),p,r,h,i,y===s-1)),!1))}var b=2===l?",":"";m[0]="["+(s>0?m[0]+b:"");for(var y=1;y<m.length-1;y++)m[y]=" "+m[y]+b;for(var S=",\n",y=2;y<l;y++)S+="\n";return m[m.length-1]=" "+m[m.length-1]+"]"+(a?"":S),m}(t,r,n,a,o),u=["Tensor"],i&&(u.push("  dtype: ".concat(n)),u.push("  rank: ".concat(s)),u.push("  shape: [".concat(r,"]")),u.push("  values:")),u.push(l.map(function(e){return"    "+e}).join("\n")),u.join("\n")},Tensor.prototype.cast=function(e){return this.throwIfDisposed(),ra.cast(this,e)},Tensor.prototype.variable=function(e,t,r){return void 0===e&&(e=!0),this.throwIfDisposed(),ri().makeVariable(this,e,t,r)},Tensor}();function getGlobalTensorClass(){return getGlobal("Tensor",function(){return ro})}Object.defineProperty(ro,Symbol.hasInstance,{value:function(e){return!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}}),getGlobalTensorClass();var rs=function(e){function Variable(t,r,n,i){var a=e.call(this,t.shape,t.dtype,t.dataId,i)||this;return a.trainable=r,a.name=n,a}return __extends(Variable,e),Variable.prototype.assign=function(e){if(e.dtype!==this.dtype)throw Error("dtype of the new value (".concat(e.dtype,") and ")+"previous value (".concat(this.dtype,") must match"));if(!arraysEqual(e.shape,this.shape))throw Error("shape of the new value (".concat(e.shape,") and ")+"previous value (".concat(this.shape,") must match"));ri().disposeTensor(this),this.dataId=e.dataId,ri().incRef(this,null)},Variable.prototype.dispose=function(){ri().disposeVariable(this),this.isDisposedInternal=!0},Variable}(ro);Object.defineProperty(rs,Symbol.hasInstance,{value:function(e){return e instanceof ro&&null!=e.assign&&e.assign instanceof Function}}),/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */t.Rank=void 0,function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(t.Rank||(t.Rank={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(i||(i={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(a||(a={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(o||(o={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(s||(s={}));var rl={float32:o,int32:i,bool:a,complex64:s};function upcastType(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw Error("Can not upcast ".concat(e," with ").concat(t))}return rl[e][t]}function isWebGLData(e){return null!=e&&"object"==typeof e&&"texture"in e&&e.texture instanceof WebGLTexture}function isWebGPUData(e){return"undefined"!=typeof GPUBuffer&&null!=e&&"object"==typeof e&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function makeTypesMatch(e,t){if(e.dtype===t.dtype)return[e,t];var r=upcastType(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function assertTypesMatch(e,t){assert(e.dtype===t.dtype,function(){return"The dtypes of the first(".concat(e.dtype,") and")+" second(".concat(t.dtype,") input must match")})}function getTensorsInContainer(e){var t=[];return function walkTensorContainer(e,t,r){if(null!=e){if(e instanceof ro){t.push(e);return}if(Array.isArray(e)||"object"==typeof e)for(var n in e){var i=e[n];r.has(i)||(r.add(i),walkTensorContainer(i,t,r))}}}(e,t,new Set),t}function isRegisteredKernelInvocation(e){return null!=e.kernelName}var ru=function(){function EngineState(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(function(e){return e.name})))}}}return EngineState.prototype.dispose=function(){for(var e in this.registeredVariables)this.registeredVariables[e].dispose()},EngineState}(),rd=function(){function Engine(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ru}return Engine.prototype.ready=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r;return __generator(this,function(n){switch(n.label){case 0:if(null!=this.pendingBackendInit)return[2,this.pendingBackendInit.then(function(){})];if(null!=this.backendInstance)return[2];e=this.getSortedBackends(),t=0,n.label=1;case 1:if(!(t<e.length))return[3,5];return r=e[t],[4,this.initializeBackend(r).success];case 2:if(!n.sent())return[3,4];return[4,this.setBackend(r)];case 3:return n.sent(),[2];case 4:return t++,[3,1];case 5:throw Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(Engine.prototype,"backend",{get:function(){if(null!=this.pendingBackendInit)throw Error("Backend '".concat(this.backendName,"' has not yet been initialized. Make ")+"sure to await tf.ready() or await tf.setBackend() before calling other methods");if(null==this.backendInstance){var e=this.initializeBackendsAndReturnBest(),t=e.name;if(e.asyncInit)throw Error("The highest priority backend '".concat(t,"' has not yet been ")+"initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(t)}return this.backendInstance},enumerable:!1,configurable:!0}),Engine.prototype.backendNames=function(){return Object.keys(this.registryFactory)},Engine.prototype.findBackend=function(e){return e in this.registry||e in this.registryFactory&&!this.initializeBackend(e).asyncInit?this.registry[e]:null},Engine.prototype.findBackendFactory=function(e){return e in this.registryFactory?this.registryFactory[e].factory:null},Engine.prototype.registerBackend=function(e,t,r){return(void 0===r&&(r=1),e in this.registryFactory)?(warn("".concat(e," backend was already registered. ")+"Reusing existing backend factory."),!1):(this.registryFactory[e]={factory:t,priority:r},!0)},Engine.prototype.setBackend=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(i){switch(i.label){case 0:if(null==this.registryFactory[e])throw Error("Backend name '".concat(e,"' not found in registry"));if(this.backendName=e,null!=this.registry[e])return[3,4];if(this.backendInstance=null,r=(t=this.initializeBackend(e)).success,!t.asyncInit)return[3,2];return[4,r];case 1:return n=i.sent(),[3,3];case 2:n=r,i.label=3;case 3:if(!n)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new rt(this.backendInstance),[2,!0]}})})},Engine.prototype.setupRegisteredKernels=function(){var e=this;getKernelsForBackend(this.backendName).forEach(function(t){null!=t.setupFunc&&t.setupFunc(e.backendInstance)})},Engine.prototype.disposeRegisteredKernels=function(e){var t=this;getKernelsForBackend(e).forEach(function(r){null!=r.disposeFunc&&r.disposeFunc(t.registry[e])})},Engine.prototype.initializeBackend=function(e){var t=this,r=this.registryFactory[e];if(null==r)throw Error("Cannot initialize backend ".concat(e,", no registration found."));try{var n=r.factory();if(!n||n instanceof h||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};var i=++this.pendingBackendInitId,a=n.then(function(r){return!(i<t.pendingBackendInitId)&&(t.registry[e]=r,t.pendingBackendInit=null,!0)}).catch(function(r){return!(i<t.pendingBackendInitId)&&(t.pendingBackendInit=null,warn("Initialization of backend ".concat(e," failed")),warn(r.stack||r.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}catch(t){return warn("Initialization of backend ".concat(e," failed")),warn(t.stack||t.message),{success:!1,asyncInit:!1}}},Engine.prototype.removeBackend=function(e){if(!(e in this.registryFactory))throw Error("".concat(e," backend not found in registry"));this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},Engine.prototype.getSortedBackends=function(){var e=this;if(0===Object.keys(this.registryFactory).length)throw Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(t,r){return e.registryFactory[r].priority-e.registryFactory[t].priority})},Engine.prototype.initializeBackendsAndReturnBest=function(){for(var e=this.getSortedBackends(),t=0;t<e.length;t++){var r=e[t],n=this.initializeBackend(r),i=n.success,a=n.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw Error("Could not initialize any backends, all backend initializations failed.")},Engine.prototype.moveData=function(e,t){var r=this.state.tensorInfo.get(t),n=r.backend,i=this.readSync(t),a=n.refCount(t);n.disposeData(t,!0),r.backend=e,e.move(t,i,r.shape,r.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},Engine.prototype.tidy=function(e,t){var r,n=this,i=null;if(null==t){if("function"!=typeof e)throw Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=e}return this.scopedRun(function(){return n.startScope(i)},function(){return n.endScope(r)},function(){return(r=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},Engine.prototype.scopedRun=function(e,t,r){e();try{var n=r();return t(),n}catch(e){throw t(),e}},Engine.prototype.nextTensorId=function(){return Engine.nextTensorId++},Engine.prototype.nextVariableId=function(){return Engine.nextVariableId++},Engine.prototype.clone=function(e){var t=rc.runKernel(ey,{x:e});return this.addTapeNode(this.state.activeScope.name,{x:e},[t],function(e){return{x:function(){return rc.runKernel(k,{x:e},{dtype:"float32"})}}},[],{}),t},Engine.prototype.runKernel=function(e,t,r){if(null==this.backendName&&this.backend,!(null!=getKernel(e,this.backendName)))throw Error("Kernel '".concat(e,"' not registered for backend '").concat(this.backendName,"'"));return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})},Engine.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},Engine.prototype.checkKernelForMemLeak=function(e,t,r){var n=this.backend.numDataIds(),i=0;r.forEach(function(e){i+="complex64"===e.dtype?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=n-t-i-a;if(o>0)throw Error("Backend '".concat(this.backendName,"' has an internal memory leak ")+"(".concat(o," data ids) after running '").concat(e,"'"))},Engine.prototype.runKernelFunc=function(e){var t,r,n,i,a=this,o=[],s=this.isTapeOn(),l=this.state.numBytes,u=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;var d=isRegisteredKernelInvocation(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(isRegisteredKernelInvocation(e)){var c=e.kernelName,p=e.inputs,h=e.attrs;null==this.backendName&&this.backend;var f=getKernel(c,this.backendName);assert(null!=f,function(){return"Cannot find registered kernel '".concat(c,"' for backend '").concat(a.backendName,"'")}),r=function(){var e=a.backend.numDataIds(),t=Array.isArray(n=f.kernelFunc({inputs:p,attrs:h,backend:a.backend}))?n:[n];a.shouldCheckForMemLeaks()&&a.checkKernelForMemLeak(c,e,t);var r=t.map(function(e){return null!=e.rank?e:a.makeTensorFromTensorInfo(e)});if(s){var i=a.getTensorsForGradient(c,p,r);o=a.saveTensorsForBackwardMode(i)}return r}}else{var m=e.forwardFunc,saveFunc_1=function(e){s&&(o=e.map(function(e){return a.keep(a.clone(e))}))};r=function(){var e=a.backend.numDataIds(),t=Array.isArray(n=a.tidy(function(){return m(a.backend,saveFunc_1)}))?n:[n];return a.shouldCheckForMemLeaks()&&a.checkKernelForMemLeak(d,e,t),t}}var y=e.inputs,g=e.attrs,v=isRegisteredKernelInvocation(e)?null:e.backwardsFunc;return this.scopedRun(function(){return a.state.kernelDepth++},function(){return a.state.kernelDepth--},function(){a.ENV.getBool("DEBUG")||a.state.profiling?(i=a.profiler.profileKernel(d,y,function(){return r()}),a.ENV.getBool("DEBUG")&&a.profiler.logKernelProfile(i),t=i.outputs):t=r()}),s&&this.addTapeNode(d,y,t,v,o,g),this.state.profiling&&this.state.activeProfile.kernels.push({name:d,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-u,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(y).map(function(e){return null!=y[e]?y[e].shape:null}),outputShapes:t.map(function(e){return e.shape}),kernelTimeMs:i.timeMs,extraInfo:i.extraInfo}),Array.isArray(n)?t:t[0]},Engine.prototype.saveTensorsForBackwardMode=function(e){var t=this;return e.map(function(e){return t.keep(t.clone(e))})},Engine.prototype.getTensorsForGradient=function(e,t,r){var n=getGradient(e);if(null!=n){var i=n.inputsToSave||[],a=n.outputsToSave||[],o=void 0;n.saveAllInputs?(assert(Array.isArray(t),function(){return"saveAllInputs is true, expected inputs to be an array."}),o=Object.keys(t).map(function(e){return t[e]})):o=i.map(function(e){return t[e]});var s=r.filter(function(e,t){return a[t]});return o.concat(s)}return[]},Engine.prototype.makeTensor=function(e,t,r,n){if(null==e)throw Error("Values passed to engine.makeTensor() are null");r=r||"float32",n=n||this.backend;var i=e;"string"===r&&isString(e[0])&&(i=e.map(function(e){return encodeString(e)}));var a=n.write(i,t,r),o=new ro(t,r,a,this.nextTensorId());if(this.trackTensor(o,n),"string"===r){var s=this.state.tensorInfo.get(a),l=bytesFromStringArray(i);this.state.numBytes+=l-s.bytes,s.bytes=l}return o},Engine.prototype.makeTensorFromDataId=function(e,t,r,n){var i={dataId:e,shape:t,dtype:r=r||"float32"};return this.makeTensorFromTensorInfo(i,n)},Engine.prototype.makeTensorFromTensorInfo=function(e,t){var r=e.dataId,n=e.shape,i=e.dtype,a=new ro(n,i,r,this.nextTensorId());return this.trackTensor(a,t),a},Engine.prototype.makeVariable=function(e,t,r,n){void 0===t&&(t=!0),r=r||this.nextVariableId().toString(),null!=n&&n!==e.dtype&&(e=e.cast(n));var i=new rs(e,t,r,this.nextTensorId());if(null!=this.state.registeredVariables[i.name])throw Error("Variable with name ".concat(i.name," was already registered"));return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},Engine.prototype.trackTensor=function(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;var r=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(r=e.size*bytesPerElement(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof rs||this.track(e)},Engine.prototype.incRef=function(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)},Engine.prototype.removeDataId=function(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)},Engine.prototype.disposeTensor=function(e){if(this.state.tensorInfo.has(e.dataId)){var t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){var r=e.size*bytesPerElement(e.dtype);this.state.numBytes-=r}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}},Engine.prototype.disposeVariables=function(){for(var e in this.state.registeredVariables){var t=this.state.registeredVariables[e];this.disposeVariable(t)}},Engine.prototype.disposeVariable=function(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]},Engine.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e},Engine.prototype.profile=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n,i,a,o,s,l,u,d;return __generator(this,function(c){switch(c.label){case 0:return this.state.profiling=!0,t=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],n=this.state.activeProfile,[4,e()];case 1:n.result=c.sent(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,__spreadArray([],__read(this.state.activeProfile.kernels.map(function(e){return e.totalBytesSnapshot})),!1)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r,c.label=2;case 2:c.trys.push([2,8,9,10]),a=(i=__values(this.state.activeProfile.kernels)).next(),c.label=3;case 3:if(a.done)return[3,7];return s=o=a.value,[4,o.kernelTimeMs];case 4:return s.kernelTimeMs=c.sent(),l=o,[4,o.extraInfo];case 5:l.extraInfo=c.sent(),c.label=6;case 6:return a=i.next(),[3,3];case 7:return[3,10];case 8:return u={error:c.sent()},[3,10];case 9:try{a&&!a.done&&(d=i.return)&&d.call(i)}finally{if(u)throw u.error}return[7];case 10:return[2,this.state.activeProfile]}})})},Engine.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&0===this.state.kernelDepth},Engine.prototype.addTapeNode=function(e,t,r,n,i,a){var o=this,s={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:i},l=getGradient(e);null!=l&&(n=l.gradFunc),null!=n&&(s.gradient=function(e){return n((e=e.map(function(e,t){if(null==e){var n=r[t],i=makeZerosTypedArray(n.size,n.dtype);return o.makeTensor(i,n.shape,n.dtype)}return e})).length>1?e:e[0],i,a)}),this.state.activeTape.push(s)},Engine.prototype.keep=function(e){return e.kept=!0,e},Engine.prototype.startTape=function(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++},Engine.prototype.endTape=function(){this.state.gradientDepth--},Engine.prototype.startScope=function(e){var t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t},Engine.prototype.endScope=function(e){for(var t=this,r=getTensorsInContainer(e),n=new Set(r.map(function(e){return e.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||n.has(a.id)||a.dispose()}var o=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(e){e.kept||e.scopeId!==o.id||t.track(e)})},Engine.prototype.gradients=function(e,t,r,n){var i=this;if(void 0===n&&(n=!1),assert(t.length>0,function(){return"gradients() received an empty list of xs."}),null!=r&&"float32"!==r.dtype)throw Error("dy must have 'float32' dtype, but has '".concat(r.dtype,"'"));var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",e)});assert(a instanceof ro,function(){return"The result y returned by f() must be a tensor."});var o=/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){for(var n={},i={},a=0;a<t.length;a++)n[t[a].id]=!0;for(var a=0;a<e.length;a++){var o=e[a],s=o.inputs;for(var l in s){for(var u=s[l],d=!1,c=0;c<t.length;c++)if(n[u.id]){o.outputs.forEach(function(e){return n[e.id]=!0}),d=!0,i[o.id]=!0;break}if(d)break}}var p={};p[r.id]=!0;for(var h={},a=e.length-1;a>=0;a--)for(var o=e[a],s=o.inputs,c=0;c<o.outputs.length;c++)if(p[o.outputs[c].id]){for(var l in s)p[s[l].id]=!0,h[o.id]=!0;break}for(var f=[],a=0;a<e.length;a++){var o=e[a];if(i[o.id]&&h[o.id]){var m={};for(var l in o.inputs){var y=o.inputs[l];n[y.id]&&(m[l]=y)}var g=Object.assign({},o);g.inputs=m,g.outputs=o.outputs,f.push(g)}}return f}(this.state.activeTape,t,a);if(!n&&0===o.length&&t.length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var e,n,s={};s[a.id]=null==r?(n=makeOnesTypedArray(sizeFromShape(e=a.shape),"float32"),rc.makeTensor(n,e,"float32")):r,function(e,t,r,n){for(var i=t.length-1;i>=0;i--)!function(i){var a=t[i],o=[];if(a.outputs.forEach(function(t){var r=e[t.id];null!=r?o.push(r):o.push(null)}),null==a.gradient)throw Error("Cannot compute gradient: gradient function not found "+"for ".concat(a.kernelName,"."));var s=a.gradient(o),_loop_2=function(t){if(!(t in s))throw Error("Cannot backprop through input ".concat(t,". ")+"Available gradients found: ".concat(Object.keys(s),"."));var i=r(function(){return s[t]()});if("float32"!==i.dtype)throw Error("Error in gradient for op ".concat(a.kernelName,". The gradient of input ")+"".concat(t," must have 'float32' dtype, but has '").concat(i.dtype,"'"));var o=a.inputs[t];if(!arraysEqual(i.shape,o.shape))throw Error("Error in gradient for op ".concat(a.kernelName,". The gradient of input ")+"'".concat(t,"' has shape '").concat(i.shape,"', which does not match ")+"the shape of the input '".concat(o.shape,"'"));if(null==e[o.id])e[o.id]=i;else{var l=e[o.id];e[o.id]=n(l,i),l.dispose()}};for(var l in a.inputs)_loop_2(l)}(i)}(s,o,function(e){return i.tidy(e)},add$1);var l=t.map(function(e){return s[e.id]});return 0===i.state.gradientDepth&&(i.state.activeTape.forEach(function(e){var t,r;try{for(var n=__values(e.saved),i=n.next();!i.done;i=n.next())i.value.dispose()}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}}),i.state.activeTape=null),{value:a,grads:l}})},Engine.prototype.customGrad=function(e){var t=this;return assert(isFunction(e),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];assert(n.every(function(e){return e instanceof ro}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return n.forEach(function(e,t){a[t]=e}),t.runKernelFunc({forwardFunc:function(t,i){return assert((r=e.apply(void 0,__spreadArray([],__read(__spreadArray(__spreadArray([],__read(n),!1),[i],!1)),!1))).value instanceof ro,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),assert(isFunction(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},backwardsFunc:function(e,t){var i=r.gradFunc(e,t),a=Array.isArray(i)?i:[i];assert(a.length===n.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),assert(a.every(function(e){return e instanceof ro}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var o={};return a.forEach(function(e,t){o[t]=function(){return e}}),o},inputs:a})}},Engine.prototype.readSync=function(e){return this.state.tensorInfo.get(e).backend.readSync(e)},Engine.prototype.read=function(e){return this.state.tensorInfo.get(e).backend.read(e)},Engine.prototype.readToGPU=function(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)},Engine.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){switch(n.label){case 0:return t=now(),[4,this.backend.time(e)];case 1:return(r=n.sent()).wallMs=now()-t,[2,r]}})})},Engine.prototype.track=function(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e},Object.defineProperty(Engine.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!1,configurable:!0}),Engine.prototype.reset=function(){for(var e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ru,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},Engine}();function getOrMakeEngine(){var e,r=getGlobalNamespace();if(null==r._tfengine){var n=new m(r);r._tfengine=new rd(n)}return e=r._tfengine.ENV,t.ENV=e,ri=function(){return r._tfengine},r._tfengine}rd.nextTensorId=0,rd.nextVariableId=0;var rc=getOrMakeEngine();function add$1(e,t){return rc.runKernel("Add",{a:e,b:t})}function isBrowser(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rp=env();/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function inferShape(e,t){var r=e;if(isTypedArray(e))return"string"===t?[]:[e.length];if(isWebGLData(e)){var n=e.channels||"RGBA";return[e.height,e.width*n.length]}if(isWebGPUData(e))return[e.buffer.size/(null==t?4:bytesPerElement(t))];if(!Array.isArray(e))return[];for(var i=[];Array.isArray(r)||isTypedArray(r)&&"string"!==t;)i.push(r.length),r=r[0];return Array.isArray(e)&&env().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function deepAssertShapeConsistency(e,t,r){if(r=r||[],!Array.isArray(e)&&!isTypedArray(e)){assert(0===t.length,function(){return"Element arr[".concat(r.join("]["),"] is a primitive, ")+"but should be an array/TypedArray of ".concat(t[0]," elements")});return}assert(t.length>0,function(){return"Element arr[".concat(r.join("]["),"] should be a primitive, ")+"but is an array of ".concat(e.length," elements")}),assert(e.length===t[0],function(){return"Element arr[".concat(r.join("]["),"] should have ").concat(t[0]," ")+"elements, but has ".concat(e.length," elements")});for(var n=t.slice(1),i=0;i<e.length;++i)deepAssertShapeConsistency(e[i],n,r.concat(i))}(e,i,[]),i}function assertDtype(e,t,r,n){if("string_or_numeric"!==e){if(null==e)throw Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw Error("Argument '".concat(r,"' passed to '").concat(n,"' must ")+"be ".concat(e," tensor, but got ").concat(t," tensor"))}}function convertToTensor(e,t,r,n){if(void 0===n&&(n="numeric"),e instanceof getGlobalTensorClass())return assertDtype(n,e.dtype,t,r),e;var i=inferDtype(e);if("string"!==i&&["bool","int32","float32"].indexOf(n)>=0&&(i=n),assertDtype(n,i,t,r),null==e||!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){var a=null==e?"null":e.constructor.name;throw Error("Argument '".concat(t,"' passed to '").concat(r,"' must be a ")+"Tensor or TensorLike, but got '".concat(a,"'"))}var o=inferShape(e,i);isTypedArray(e)||Array.isArray(e)||(e=[e]);var s="string"!==i?toTypedArray(e,i):flatten(e,[],!0);return rc.makeTensor(s,o,i)}function convertToTensorArray(e,t,r,n){if(void 0===n&&(n="numeric"),!Array.isArray(e))throw Error("Argument ".concat(t," passed to ").concat(r," must be a ")+"`Tensor[]` or `TensorLike[]`");return e.map(function(e,i){return convertToTensor(e,"".concat(t,"[").concat(i,"]"),r,n)})}rp.registerFlag("DEBUG",function(){return!1},function(e){e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),rp.registerFlag("IS_BROWSER",function(){return isBrowser()}),rp.registerFlag("IS_NODE",function(){return"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node}),rp.registerFlag("IS_CHROME",function(){return"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),rp.registerFlag("IS_SAFARI",function(){return"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)}),rp.registerFlag("PROD",function(){return!1}),rp.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return rp.getBool("DEBUG")}),rp.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),rp.registerFlag("IS_TEST",function(){return!1}),rp.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",function(){return rp.getBool("DEBUG")}),rp.registerFlag("WRAP_TO_IMAGEBITMAP",function(){return!1}),rp.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",function(){return!1}),rp.registerFlag("USE_SETTIMEOUTCUSTOM",function(){return!1});var rh="__op";function op(e){var t=Object.keys(e);if(1!==t.length)throw Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+"".concat(t.length," keys."));var r=t[0],n=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1));var f2=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];rc.startScope(r);try{var i=n.apply(void 0,__spreadArray([],__read(e),!1));return isPromise(i)&&console.error("Cannot return a Promise inside of tidy."),rc.endScope(i),i}catch(e){throw rc.endScope(null),e}};return Object.defineProperty(f2,"name",{value:r+=rh,configurable:!0}),f2}var rf=op({complex_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"real","complex"),n=convertToTensor(t,"imag","complex");return assertShapesMatch(r.shape,n.shape,"real and imag shapes, ".concat(r.shape," and ").concat(n.shape,", ")+"must match in call to tf.complex()."),rc.runKernel(B,{real:r,imag:n})}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function makeTensor(e,t,r,n){if(null==n)n=inferDtype(e);else if("complex64"===n)throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(isWebGPUData(e)||isWebGLData(e)){if("float32"!==n&&"int32"!==n)throw Error("Creating tensor from GPU data only supports "+"'float32'|'int32' dtype, while the dtype is ".concat(n,"."));return rc.backend.createTensorFromGPUData(e,t||r,n)}if(!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){assertNonNegativeIntegerDimensions(t);var i=sizeFromShape(t),a=sizeFromShape(r);assert(i===a,function(){return"Based on the provided shape, [".concat(t,"], the tensor should have ")+"".concat(i," values but has ").concat(a)});for(var o=0;o<r.length;++o){var s=r[o],l=o!==r.length-1||s!==sizeFromShape(t.slice(o));assert(r[o]===t[o]||!l,function(){return"Error creating a new Tensor. Inferred shape "+"(".concat(r,") does not match the provided ")+"shape (".concat(t,"). ")})}}return isTypedArray(e)||Array.isArray(e)||(e=[e]),t=t||r,e="string"!==n?toTypedArray(e,n):flatten(e,[],!0),rc.makeTensor(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tensor(e,t,r){var n=inferShape(e,r);return makeTensor(e,t,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rm={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8},ry=function(){function CompositeArrayBuffer(e){if(this.shards=[],this.previousShardIndex=0,null!=e&&(e instanceof Array||(e=[e]),0!==(e=e.map(function(e){return isTypedArray(e)?e.buffer:e})).length)){this.bufferUniformSize=e[0].byteLength;for(var t=0,r=0;r<e.length;r++){var n=e[r];r!==e.length-1&&n.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);var i=t+n.byteLength;this.shards.push({buffer:n,start:t,end:i}),t=i}0===this.shards.length&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}}return CompositeArrayBuffer.join=function(e){return new CompositeArrayBuffer(e).slice()},CompositeArrayBuffer.prototype.slice=function(e,t){if(void 0===e&&(e=0),void 0===t&&(t=this.byteLength),0===this.shards.length||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),(t=Math.min(this.byteLength,t))<=e))return new ArrayBuffer(0);var r=this.findShardForByte(e);if(-1===r)throw Error("Could not find start shard for byte ".concat(e));for(var n=t-e,i=new ArrayBuffer(n),a=new Uint8Array(i),o=0,s=r;s<this.shards.length;s++){var l=this.shards[s],u=e+o-l.start,d=o,c=Math.min(t,l.end)-l.start,p=new Uint8Array(l.buffer,u,c-u);if(a.set(p,d),o+=p.length,t<l.end)break}return i},CompositeArrayBuffer.prototype.findShardForByte=function(e){if(0===this.shards.length||e<0||e>=this.byteLength)return -1;if(null!=this.bufferUniformSize)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function check(t){return e<t.start?-1:e>=t.end?1:0}if(0===check(this.shards[this.previousShardIndex]))return this.previousShardIndex;var t=function(e,t){for(var r=0,n=e.length;r<=n;){var i=Math.floor((n-r)/2)+r,a=t(e[i]);if(0===a)return i;a<0?n=i:r=i+1}return -1}(this.shards,check);return -1===t?-1:(this.previousShardIndex=t,this.previousShardIndex)},CompositeArrayBuffer}();function tidy(e,t){return rc.tidy(e,t)}function dispose(e){getTensorsInContainer(e).forEach(function(e){return e.dispose()})}function keep(e){return rc.keep(e)}function getBackend(){return rc.backendName}function backend(){return rc.backend}function decodeWeights(e,t){var r,n,i=new ry(e),a={},o=0;try{for(var s=__values(t),l=s.next();!l.done;l=s.next()){var u=l.value,d=function(e,t){var r,n=sizeFromShape(e.shape);if("quantization"in e)r=rm[e.quantization.dtype];else if("string"===e.dtype){for(var i=0,a=0;a<n;a++)i+=4+new Uint32Array(t(i,i+4))[0];return i}else r=rm[e.dtype];return n*r}(u,function(e,t){return i.slice(o+e,o+t)});a[u.name]=decodeWeight(u,i.slice(o,o+d)),o+=d}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return a}function decodeWeight(e,t){var r,n=e.name,i=e.dtype,a=e.shape,o=sizeFromShape(a),s=0;if("quantization"in e){var l=e.quantization;if("uint8"===l.dtype||"uint16"===l.dtype){if(!("min"in l&&"scale"in l))throw Error("Weight ".concat(e.name," with quantization ").concat(l.dtype," ")+"doesn't have corresponding metadata min and scale.")}else if("float16"===l.dtype){if("float32"!==i)throw Error("Weight ".concat(e.name," is quantized with ").concat(l.dtype," ")+"which only supports weights of type float32 not ".concat(i,"."))}else throw Error("Weight ".concat(e.name," has unknown ")+"quantization dtype ".concat(l.dtype,". ")+"Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.");var u=rm[l.dtype],d="uint8"===l.dtype?new Uint8Array(t):new Uint16Array(t);if("float32"===i){if("uint8"===l.dtype||"uint16"===l.dtype){r=new Float32Array(d.length);for(var c,p,h,f=0;f<d.length;f++){var m=d[f];r[f]=m*l.scale+l.min}}else if("float16"===l.dtype)r=(c=function(){var e=new Uint32Array(2048);e[0]=0;for(var t=1;t<1024;t++)e[t]=function(e){for(var t=e<<13,r=0;(8388608&t)==0;)r-=8388608,t<<=1;return(t&=-8388609)|(r+=947912704)}(t);for(var t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}(),p=function(){var e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(var t=1;t<31;t++)e[t]=t<<23;for(var t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}(),h=function(){for(var e=new Uint32Array(64),t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}(),function(e){for(var t=new ArrayBuffer(4*e.length),r=new Uint32Array(t),n=0;n<e.length;n++){var i=e[n],a=c[h[i>>10]+(1023&i)]+p[i>>10];r[n]=a}return new Float32Array(t)})(d);else throw Error("Unsupported quantization type ".concat(l.dtype," ")+"for weight type float32.")}else if("int32"===i){if("uint8"!==l.dtype&&"uint16"!==l.dtype)throw Error("Unsupported quantization type ".concat(l.dtype," ")+"for weight type int32.");r=new Int32Array(d.length);for(var f=0;f<d.length;f++){var m=d[f];r[f]=Math.round(m*l.scale+l.min)}}else throw Error("Unsupported dtype in weight '".concat(n,"': ").concat(i));s+=o*u}else if("string"===i){var y=sizeFromShape(e.shape);r=[];for(var f=0;f<y;f++){var g=new Uint32Array(t.slice(s,s+4))[0];s+=4;var v=new Uint8Array(t.slice(s,s+g));r.push(v),s+=g}}else{var b=rm[i];if("float32"===i)r=new Float32Array(t);else if("int32"===i)r=new Int32Array(t);else if("bool"===i)r=new Uint8Array(t);else if("complex64"===i){r=new Float32Array(t);for(var S=new Float32Array(r.length/2),x=new Float32Array(r.length/2),f=0;f<S.length;f++)S[f]=r[2*f],x[f]=r[2*f+1];var P=tensor(S,a,"float32"),C=tensor(x,a,"float32"),_=rf(P,C);return P.dispose(),C.dispose(),_}else throw Error("Unsupported dtype in weight '".concat(n,"': ").concat(i));s+=o*b}return tensor(r,a,i)}function readToLength(e,t,r){return __awaiter(this,void 0,void 0,function(){var n,i,a,o,s,l;return __generator(this,function(u){switch(u.label){case 0:n=new Uint8Array(t),u.label=1;case 1:if(!(n.byteLength<r))return[3,3];return[4,e.read()];case 2:if(a=(i=u.sent()).done,o=i.value,a&&null==o)throw s=r-n.byteLength,Error("Reader is done but ".concat(s," bytes are still expected"));return(l=new Uint8Array(n.length+o.byteLength)).set(n,0),l.set(new Uint8Array(o),n.length),n=l,[3,1];case 3:return[2,n.buffer]}})})}var rg="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function stringByteLength(e){return rg?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function basename(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);var t=e.split("/");return t[t.length-1]}function getModelJSONForModelArtifacts(e,t){var r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(r.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),r}function getModelArtifactsForJSONSync(e,t,r){var n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw Error("modelJSON has weightsManifest but weightData is null");n.weightSpecs=t,n.weightData=r}return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(n.initializerSignature=e.initializerSignature),n}function getModelArtifactsForJSON(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i;return __generator(this,function(a){switch(a.label){case 0:if(!(null!=e.weightsManifest))return[3,2];return[4,t(e.weightsManifest)];case 1:r=(i=__read.apply(void 0,[a.sent(),2]))[0],n=i[1],a.label=2;case 2:return[2,getModelArtifactsForJSONSync(e,r,n)]}})})}function getModelArtifactsInfoForJSON(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:stringByteLength(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:stringByteLength(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new ry(e.weightData).byteLength}}function getWeightSpecs(e){var t,r,n=[];try{for(var i=__values(e),a=i.next();!a.done;a=i.next()){var o=a.value;n.push.apply(n,__spreadArray([],__read(o.weights),!1))}}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rv=function(){function IORouterRegistry(){this.saveRouters=[],this.loadRouters=[]}return IORouterRegistry.getInstance=function(){return null==IORouterRegistry.instance&&(IORouterRegistry.instance=new IORouterRegistry),IORouterRegistry.instance},IORouterRegistry.registerSaveRouter=function(e){IORouterRegistry.getInstance().saveRouters.push(e)},IORouterRegistry.registerLoadRouter=function(e){IORouterRegistry.getInstance().loadRouters.push(e)},IORouterRegistry.getSaveHandlers=function(e){return IORouterRegistry.getHandlers(e,"save")},IORouterRegistry.getLoadHandlers=function(e,t){return IORouterRegistry.getHandlers(e,"load",t)},IORouterRegistry.getHandlers=function(e,t,r){var n=[];return("load"===t?IORouterRegistry.getInstance().loadRouters:IORouterRegistry.getInstance().saveRouters).forEach(function(t){var i=t(e,r);null!==i&&n.push(i)}),n},IORouterRegistry}(),rb="tensorflowjs",rS="models_store",rx="model_info_store";function getIndexedDBFactory(){if(!env().getBool("IS_BROWSER"))throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw Error("The current browser does not appear to support IndexedDB.");return t}function setUpDatabase(e){var t=e.result;t.createObjectStore(rS,{keyPath:"modelPath"}),t.createObjectStore(rx,{keyPath:"modelPath"})}var rP=function(){function BrowserIndexedDB(e){if(this.indexedDB=getIndexedDBFactory(),null==e||!e)throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}return BrowserIndexedDB.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,e)]})})},BrowserIndexedDB.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.databaseAction(this.modelPath)]})})},BrowserIndexedDB.prototype.databaseAction=function(e,t){var r=this;return new Promise(function(e,n){var i=r.indexedDB.open(rb,1);i.onupgradeneeded=function(){return setUpDatabase(i)},i.onsuccess=function(){var a=i.result;if(null==t){var o=a.transaction(rS,"readonly"),s=o.objectStore(rS).get(r.modelPath);s.onsuccess=function(){if(null==s.result)return a.close(),n(Error("Cannot find model with path '".concat(r.modelPath,"' ")+"in IndexedDB."));e(s.result.modelArtifacts)},s.onerror=function(e){return a.close(),n(s.error)},o.oncomplete=function(){return a.close()}}else{t.weightData=ry.join(t.weightData);var l,u,d=getModelArtifactsInfoForJSON(t),c=a.transaction(rx,"readwrite"),p=c.objectStore(rx);try{l=p.put({modelPath:r.modelPath,modelArtifactsInfo:d})}catch(e){return n(e)}l.onsuccess=function(){var i,o=(u=a.transaction(rS,"readwrite")).objectStore(rS);try{i=o.put({modelPath:r.modelPath,modelArtifacts:t,modelArtifactsInfo:d})}catch(e){return n(e)}i.onsuccess=function(){return e({modelArtifactsInfo:d})},i.onerror=function(e){var t=(p=c.objectStore(rx)).delete(r.modelPath);t.onsuccess=function(){return a.close(),n(i.error)},t.onerror=function(e){return a.close(),n(i.error)}}},l.onerror=function(e){return a.close(),n(l.error)},c.oncomplete=function(){null==u?a.close():u.oncomplete=function(){return a.close()}}}},i.onerror=function(e){return n(i.error)}})},BrowserIndexedDB}();rP.URL_SCHEME="indexeddb://";var indexedDBRouter=function(e){var t;return env().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(rP.URL_SCHEME)?(t=e.slice(rP.URL_SCHEME.length),new rP(t)):null};rv.registerSaveRouter(indexedDBRouter),rv.registerLoadRouter(indexedDBRouter);var rC=function(){function BrowserIndexedDBManager(){this.indexedDB=getIndexedDBFactory()}return BrowserIndexedDBManager.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t,r){var n=e.indexedDB.open(rb,1);n.onupgradeneeded=function(){return setUpDatabase(n)},n.onsuccess=function(){var e=n.result,i=e.transaction(rx,"readonly"),a=i.objectStore(rx).getAll();a.onsuccess=function(){var e,r,n={};try{for(var i=__values(a.result),o=i.next();!o.done;o=i.next()){var s=o.value;n[s.modelPath]=s.modelArtifactsInfo}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}t(n)},a.onerror=function(t){return e.close(),r(a.error)},i.oncomplete=function(){return e.close()}},n.onerror=function(e){return r(n.error)}})]})})},BrowserIndexedDBManager.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(r){return e=e.startsWith(rP.URL_SCHEME)?e.slice(rP.URL_SCHEME.length):e,[2,new Promise(function(r,n){var i=t.indexedDB.open(rb,1);i.onupgradeneeded=function(){return setUpDatabase(i)},i.onsuccess=function(){var t,a=i.result,o=a.transaction(rx,"readwrite"),s=o.objectStore(rx),l=s.get(e);l.onsuccess=function(){if(null==l.result)return a.close(),n(Error("Cannot find model with path '".concat(e,"' ")+"in IndexedDB."));var i=s.delete(e),deleteModelData_1=function(){var i=(t=a.transaction(rS,"readwrite")).objectStore(rS).delete(e);i.onsuccess=function(){return r(l.result.modelArtifactsInfo)},i.onerror=function(e){return n(l.error)}};i.onsuccess=deleteModelData_1,i.onerror=function(e){return deleteModelData_1(),a.close(),n(l.error)}},l.onerror=function(e){return a.close(),n(l.error)},o.oncomplete=function(){null==t?a.close():t.oncomplete=function(){return a.close()}}},i.onerror=function(e){return n(i.error)}})]})})},BrowserIndexedDBManager}(),r_="tensorflowjs_models",rA="info";function getModelKeys(e){return{info:[r_,e,rA].join("/"),topology:[r_,e,"model_topology"].join("/"),weightSpecs:[r_,e,"weight_specs"].join("/"),weightData:[r_,e,"weight_data"].join("/"),modelMetadata:[r_,e,"model_metadata"].join("/")}}function removeItems(e){var t,r;try{for(var n=__values(Object.values(e)),i=n.next();!i.done;i=n.next()){var a=i.value;window.localStorage.removeItem(a)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}}var rT=function(){function BrowserLocalStorage(e){if(!env().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=getModelKeys(this.modelPath)}return BrowserLocalStorage.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n,i,a;return __generator(this,function(o){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),n=getModelArtifactsInfoForJSON(e),i=ry.join(e.weightData);try{return this.LS.setItem(this.keys.info,JSON.stringify(n)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(e){if(rg)return Buffer.from(e).toString("base64");for(var t=new Uint8Array(e),r="",n=0,i=t.length;n<i;n++)r+=String.fromCharCode(t[n]);return btoa(r)}(i)),a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,initializerSignature:null!=e.initializerSignature?e.initializerSignature:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0},this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),[2,{modelArtifactsInfo:n}]}catch(e){throw removeItems(this.keys),Error("Failed to save model '".concat(this.modelPath,"' to local storage: ")+"size quota being exceeded is a possible cause of this failure: "+"modelTopologyBytes=".concat(n.modelTopologyBytes,", ")+"weightSpecsBytes=".concat(n.weightSpecsBytes,", ")+"weightDataBytes=".concat(n.weightDataBytes,"."))}return[2]})})},BrowserLocalStorage.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,n,i,a,o;return __generator(this,function(s){if(null==(e=JSON.parse(this.LS.getItem(this.keys.info))))throw Error("In local storage, there is no model with name '".concat(this.modelPath,"'"));if("JSON"!==e.modelTopologyType)throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},null==(r=JSON.parse(this.LS.getItem(this.keys.topology))))throw Error("In local storage, the topology of model '".concat(this.modelPath,"' ")+"is missing.");if(t.modelTopology=r,null==(n=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw Error("In local storage, the weight specs of model '".concat(this.modelPath,"' ")+"are missing.");if(t.weightSpecs=n,null!=(i=this.LS.getItem(this.keys.modelMetadata))&&(a=JSON.parse(i),t.format=a.format,t.generatedBy=a.generatedBy,t.convertedBy=a.convertedBy,null!=a.signature&&(t.signature=a.signature),null!=a.userDefinedMetadata&&(t.userDefinedMetadata=a.userDefinedMetadata),null!=a.modelInitializer&&(t.modelInitializer=a.modelInitializer),null!=a.initializerSignature&&(t.initializerSignature=a.initializerSignature),null!=a.trainingConfig&&(t.trainingConfig=a.trainingConfig)),null==(o=this.LS.getItem(this.keys.weightData)))throw Error("In local storage, the binary weight values of model "+"'".concat(this.modelPath,"' are missing."));return t.weightData=function(e){if(rg){var t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}for(var r=atob(e),n=new Uint8Array(r.length),i=0;i<r.length;++i)n.set([r.charCodeAt(i)],i);return n.buffer}(o),[2,t]})})},BrowserLocalStorage}();rT.URL_SCHEME="localstorage://";var localStorageRouter=function(e){var t;return env().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(rT.URL_SCHEME)?(t=e.slice(rT.URL_SCHEME.length),new rT(t)):null};rv.registerSaveRouter(localStorageRouter),rv.registerLoadRouter(localStorageRouter);var rw=function(){function BrowserLocalStorageManager(){assert(env().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),assert("undefined"==typeof window||void 0!==window.localStorage,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return BrowserLocalStorageManager.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,n,i;return __generator(this,function(a){for(n=0,e={},t=r_+"/",r="/"+rA;n<this.LS.length;++n)(i=this.LS.key(n)).startsWith(t)&&i.endsWith(r)&&(e[function(e){var t=e.split("/");if(t.length<3)throw Error("Invalid key format: ".concat(e));return t.slice(1,t.length-1).join("/")}(i)]=JSON.parse(this.LS.getItem(i)));return[2,e]})})},BrowserLocalStorageManager.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){if(t=getModelKeys(e=e.startsWith(rT.URL_SCHEME)?e.slice(rT.URL_SCHEME.length):e),null==this.LS.getItem(t.info))throw Error("Cannot find model at path '".concat(e,"'"));return r=JSON.parse(this.LS.getItem(t.info)),removeItems(t),[2,r]})})},BrowserLocalStorageManager}(),rE=function(){function ModelStoreManagerRegistry(){this.managers={}}return ModelStoreManagerRegistry.getInstance=function(){return null==ModelStoreManagerRegistry.instance&&(ModelStoreManagerRegistry.instance=new ModelStoreManagerRegistry),ModelStoreManagerRegistry.instance},ModelStoreManagerRegistry.registerManager=function(e,t){assert(null!=e,function(){return"scheme must not be undefined or null."}),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),assert(e.length>0,function(){return"scheme must not be an empty string."});var r=ModelStoreManagerRegistry.getInstance();assert(null==r.managers[e],function(){return"A model store manager is already registered for scheme '".concat(e,"'.")}),r.managers[e]=t},ModelStoreManagerRegistry.getManager=function(e){var t=ModelStoreManagerRegistry.getInstance().managers[e];if(null==t)throw Error("Cannot find model manager for scheme '".concat(e,"'"));return t},ModelStoreManagerRegistry.getSchemes=function(){return Object.keys(ModelStoreManagerRegistry.getInstance().managers)},ModelStoreManagerRegistry}();function parseURL(e){if(-1===e.indexOf("://"))throw Error("The url string provided does not contain a scheme. Supported schemes are: "+"".concat(rE.getSchemes().join(",")));return{scheme:e.split("://")[0],path:e.split("://")[1]}}function cloneModelInternal(e,t,r){return void 0===r&&(r=!1),__awaiter(this,void 0,void 0,function(){var n,i,a,o,s,l,u,d,c;return __generator(this,function(p){switch(p.label){case 0:return assert(e!==t,function(){return"Old path and new path are the same: '".concat(e,"'")}),assert((n=rv.getLoadHandlers(e)).length>0,function(){return"Copying failed because no load handler is found for source URL ".concat(e,".")}),assert(n.length<2,function(){return"Copying failed because more than one (".concat(n.length,") ")+"load handlers for source URL ".concat(e,".")}),i=n[0],assert((a=rv.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination "+"URL ".concat(t,".")}),assert(a.length<2,function(){return"Copying failed because more than one (".concat(n.length,") ")+"save handlers for destination URL ".concat(t,".")}),o=a[0],s=parseURL(e).scheme,l=parseURL(e).path,u=s===parseURL(e).scheme,[4,i.load()];case 1:if(d=p.sent(),!(r&&u))return[3,3];return[4,rE.getManager(s).removeModel(l)];case 2:p.sent(),p.label=3;case 3:return[4,o.save(d)];case 4:if(c=p.sent(),!(r&&!u))return[3,6];return[4,rE.getManager(s).removeModel(l)];case 5:p.sent(),p.label=6;case 6:return[2,c.modelArtifactsInfo]}})})}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rD=function(){function PlatformBrowser(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}return PlatformBrowser.prototype.fetch=function(e,t){return fetch(e,t)},PlatformBrowser.prototype.now=function(){return performance.now()},PlatformBrowser.prototype.encode=function(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error("Browser's encoder only supports utf-8, but got ".concat(t));return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)},PlatformBrowser.prototype.decode=function(e,t){return new TextDecoder(t).decode(e)},PlatformBrowser.prototype.setTimeoutCustom=function(e,t){var r=this;if("undefined"==typeof window||!env().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(function(){window.postMessage({name:r.messageName,index:r.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",function(e){e.source===window&&e.data.name===r.messageName&&(e.stopPropagation(),(0,r.functionRefs[e.data.index])(),r.handledMessageCount++,r.handledMessageCount===r.functionRefs.length&&(r.functionRefs=[],r.handledMessageCount=0))},!0))},PlatformBrowser.prototype.isTypedArray=function(e){return isTypedArrayBrowser(e)},PlatformBrowser}();if(env().get("IS_BROWSER")){env().setPlatform("browser",new rD);try{rE.registerManager(rT.URL_SCHEME,new rw)}catch(e){}try{rE.registerManager(rP.URL_SCHEME,new rC)}catch(e){}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rO={importFetch:function(){return r(81285)}},rR=function(){function PlatformNode(){this.util=r(73837),this.textEncoder=new this.util.TextEncoder}return PlatformNode.prototype.fetch=function(e,t){return null!=env().global.fetch?env().global.fetch(e,t):(null==u&&(u=rO.importFetch()),u(e,t))},PlatformNode.prototype.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},PlatformNode.prototype.encode=function(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error("Node built-in encoder only supports utf-8, but got ".concat(t));return this.textEncoder.encode(e)},PlatformNode.prototype.decode=function(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)},PlatformNode.prototype.isTypedArray=function(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)},PlatformNode}();/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function buffer(e,t,r){return void 0===t&&(t="float32"),t=t||"float32",assertNonNegativeIntegerDimensions(e),new rn(e,t,r)}env().get("IS_NODE")&&!env().get("IS_BROWSER")&&env().setPlatform("node",new rR);var rM=op({cast_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","cast");if(!isValidDtype(t))throw Error("Failed to cast to unknown dtype ".concat(t));if("string"===t&&"string"!==r.dtype||"string"!==t&&"string"===r.dtype)throw Error("Only strings can be casted to strings");return rc.runKernel(k,{x:r},{dtype:t})}}),rk=op({clone_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","clone","string_or_numeric");return rc.runKernel(ey,{x:t})}});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function print(e,t){void 0===t&&(t=!1),console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */getOrMakeEngine(),ra={buffer:buffer,cast:rM,clone:rk,print:print};var rL=op({add_:function(e,t){var r,n=convertToTensor(e,"a","add"),i=convertToTensor(t,"b","add"),a={a:n=(r=__read(makeTypesMatch(n,i),2))[0],b:i=r[1]};return rc.runKernel("Add",a)}}),rI=op({floorDiv_:function(e,t){var r,n=convertToTensor(e,"a","floorDiv"),i=convertToTensor(t,"b","floorDiv"),a={a:n=(r=__read(makeTypesMatch(n,i),2))[0],b:i=r[1]};return rc.runKernel(ed,a)}}),rB=op({div_:function(e,t){var r,n=convertToTensor(e,"a","div"),i=convertToTensor(t,"b","div");if(n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],"int32"===n.dtype&&"int32"===i.dtype)return rI(n,i);var a={a:n,b:i};return rc.runKernel(er,a,{})}}),rN=op({mul_:function(e,t){var r,n=convertToTensor(e,"a","mul"),i=convertToTensor(t,"b","mul"),a={a:n=(r=__read(makeTypesMatch(n,i),2))[0],b:i=r[1]};return rc.runKernel(eF,a)}}),rF=op({abs_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","abs");if("complex64"===t.dtype){var r={x:t};return rc.runKernel(N,r)}var r={x:t};return rc.runKernel("Abs",r)}}),rV=op({acos_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","acos");return rc.runKernel(y,{x:t})}}),rj=op({acosh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","acosh");return rc.runKernel(g,{x:t})}}),rH=op({addN_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){assert(Array.isArray(e),function(){return"The argument passed to tf.addN() must be a list of tensors"}),assert(e.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+"".concat(e.length)});var t=e.map(function(e,t){return convertToTensor(e,"tensors".concat(t),"addN")}),r=t[0];return t.forEach(function(e){if(e.dtype!==r.dtype)throw Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(e){if(!arraysEqual(e.shape,r.shape))throw Error("All tensors passed to tf.addN() must have the same shape")}),rc.runKernel(v,t)}}),rz=op({all_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","all","bool"),i={axis:t,keepDims:r};return rc.runKernel("All",{x:n},i)}}),rU=op({any_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","any","bool"),i={axis:t,keepDims:r};return rc.runKernel("Any",{x:n},i)}}),rG=op({argMax_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","argMax"),n={axis:t};return rc.runKernel(b,{x:r},n)}}),rW=op({argMin_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","argMin"),n={axis:t};return rc.runKernel(S,{x:r},n)}}),rX=op({asin_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","asin");return rc.runKernel(x,{x:t})}}),rY=op({asinh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","asinh");return rc.runKernel(P,{x:t})}}),rq=op({atan_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","atan");return rc.runKernel(C,{x:t})}}),rK=op({atan2_:function(e,t){var r,n=convertToTensor(e,"a","atan2"),i=convertToTensor(t,"b","atan2"),a={a:n=(r=__read(makeTypesMatch(n,i),2))[0],b:i=r[1]};return rc.runKernel(A,a)}}),r$=op({atanh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","atanh");return rc.runKernel(_,{x:t})}});function computePool2DInfo(e,t,r,n,i,a,o){void 0===o&&(o="channelsLast");var s,l=__read(parseTupleParam(t),2),u=l[0],d=l[1];if("channelsLast"===o)s=[u,d,e[3],e[3]];else if("channelsFirst"===o)s=[u,d,e[1],e[1]];else throw Error("Unknown dataFormat ".concat(o));return computeConv2DInfo(e,s,r,n,i,a,!1,o)}function computeConv2DInfo(e,t,r,n,i,a,o,s){void 0===o&&(o=!1),void 0===s&&(s="channelsLast");var l,u,d,c=__read([-1,-1,-1,-1],4),p=c[0],h=c[1],f=c[2],m=c[3];if("channelsLast"===s)p=(l=__read(e,4))[0],h=l[1],f=l[2],m=l[3];else if("channelsFirst"===s)p=(u=__read(e,4))[0],m=u[1],h=u[2],f=u[3];else throw Error("Unknown dataFormat ".concat(s));var y=__read(t,4),g=y[0],v=y[1],b=y[3],S=__read(parseTupleParam(r),2),x=S[0],P=S[1],C=__read(parseTupleParam(n),2),_=C[0],A=C[1],T=getEffectiveFilterSize(g,_),w=getEffectiveFilterSize(v,A),E=function(e,t,r,n,i,a,o,s,l){if("number"==typeof e){var u,d,c,p,h,f,m,y=0===e?"VALID":"NUMBER";h={top:e,bottom:e,left:e,right:e,type:y};var g=(u=[t,r],null==(d=e)&&(d=computeDefaultPad(u,a,n)),c=u[0],p=u[1],[round$1((c-a+2*d)/n+1,s),round$1((p-a+2*d)/n+1,s)]);f=g[0],m=g[1]}else if("same"===e){var v=Math.max(0,((f=Math.ceil(t/n))-1)*n+a-t),b=Math.max(0,((m=Math.ceil(r/i))-1)*i+o-r),S=Math.floor(v/2),x=v-S,P=Math.floor(b/2),C=b-P;h={top:S,bottom:x,left:P,right:C,type:"SAME"}}else if("valid"===e)h={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((t-a+1)/n),m=Math.ceil((r-o+1)/i);else if("object"==typeof e){var S="channelsLast"===l?e[1][0]:e[2][0],x="channelsLast"===l?e[1][1]:e[2][1],P="channelsLast"===l?e[2][0]:e[3][0],C="channelsLast"===l?e[2][1]:e[3][1],y=0===S&&0===x&&0===P&&0===C?"VALID":"EXPLICIT";h={top:S,bottom:x,left:P,right:C,type:y},f=round$1((t-a+S+x)/n+1,s),m=round$1((r-o+P+C)/i+1,s)}else throw Error("Unknown padding parameter: ".concat(e));return{padInfo:h,outHeight:f,outWidth:m}}(i,h,f,x,P,T,w,a,s),D=E.padInfo,O=E.outHeight,R=E.outWidth,M=o?b*m:b;return"channelsFirst"===s?d=[p,M,O,R]:"channelsLast"===s&&(d=[p,O,R,M]),{batchSize:p,dataFormat:s,inHeight:h,inWidth:f,inChannels:m,outHeight:O,outWidth:R,outChannels:M,padInfo:D,strideHeight:x,strideWidth:P,filterHeight:g,filterWidth:v,effectiveFilterHeight:T,effectiveFilterWidth:w,dilationHeight:_,dilationWidth:A,inShape:e,outShape:d,filterShape:t}}function computeConv3DInfo(e,t,r,n,i,a,o,s){void 0===a&&(a=!1),void 0===o&&(o="channelsLast");var l,u,d,c=__read([-1,-1,-1,-1,-1],5),p=c[0],h=c[1],f=c[2],m=c[3],y=c[4];if("channelsLast"===o)p=(l=__read(e,5))[0],h=l[1],f=l[2],m=l[3],y=l[4];else if("channelsFirst"===o)p=(u=__read(e,5))[0],y=u[1],h=u[2],f=u[3],m=u[4];else throw Error("Unknown dataFormat ".concat(o));var g=__read(t,5),v=g[0],b=g[1],S=g[2],x=g[4],P=__read(parse3TupleParam(r),3),C=P[0],_=P[1],A=P[2],T=__read(parse3TupleParam(n),3),w=T[0],E=T[1],D=T[2],O=getEffectiveFilterSize(v,w),R=getEffectiveFilterSize(b,E),M=getEffectiveFilterSize(S,D),k=function(e,t,r,n,i,a,o,s,l,u,d){if("valid"===e&&(e=0),"number"==typeof e){var c,p,h,f,m=0===e?"VALID":"NUMBER";c={top:e,bottom:e,left:e,right:e,front:e,back:e,type:m};var y=function(e,t,r,n,i,a){null==i&&(i=computeDefaultPad(e,t[0],n[0]));for(var o=[0,0,0,1],s=0;s<3;s++)e[s]+2*i>=t[s]&&(o[s]=round$1((e[s]-t[s]+2*i)/n[s]+1,a));return o}([t,r,n,1],[s,l,u],0,[i,a,o],e,d);p=y[0],h=y[1],f=y[2]}else if("same"===e){var g=((p=Math.ceil(t/i))-1)*i+s-t,v=((h=Math.ceil(r/a))-1)*a+l-r,b=((f=Math.ceil(n/o))-1)*o+u-n,S=Math.floor(g/2),x=Math.floor(v/2),P=Math.floor(b/2);c={top:x,bottom:v-x,left:P,right:b-P,front:S,back:g-S,type:"SAME"}}else throw Error("Unknown padding parameter: ".concat(e));return{padInfo:c,outDepth:p,outHeight:h,outWidth:f}}(i,h,f,m,C,_,A,O,R,M,s),L=k.padInfo,I=k.outDepth,B=k.outHeight,N=k.outWidth,F=a?x*y:x;return"channelsFirst"===o?d=[p,F,I,B,N]:"channelsLast"===o&&(d=[p,I,B,N,F]),{batchSize:p,dataFormat:o,inDepth:h,inHeight:f,inWidth:m,inChannels:y,outDepth:I,outHeight:B,outWidth:N,outChannels:F,padInfo:L,strideDepth:C,strideHeight:_,strideWidth:A,filterDepth:v,filterHeight:b,filterWidth:S,effectiveFilterDepth:O,effectiveFilterHeight:R,effectiveFilterWidth:M,dilationDepth:w,dilationHeight:E,dilationWidth:D,inShape:e,outShape:d,filterShape:t}}function computeDefaultPad(e,t,r,n){void 0===n&&(n=1);var i=getEffectiveFilterSize(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)}function parseTupleParam(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function parse3TupleParam(e){return"number"==typeof e?[e,e,e]:e}function getEffectiveFilterSize(e,t){return t<=1?e:e+(e-1)*(t-1)}function round$1(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw Error("Unknown roundingMode ".concat(t))}}function tupleValuesAreOne(e){var t=__read(parseTupleParam(e),3),r=t[0],n=t[1],i=t[2];return 1===r&&1===n&&1===i}function eitherStridesOrDilationsAreOne(e,t){return tupleValuesAreOne(e)||tupleValuesAreOne(t)}function stridesOrDilationsArePositive(e){return parseTupleParam(e).every(function(e){return e>0})}function convertConv2DDataFormat(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw Error("Unknown dataFormat ".concat(e))}function checkPadOnDimRoundingMode(e,t,r){if(null!=r){if("string"==typeof t)throw Error("Error in ".concat(e,": pad must be an integer when using ")+"dimRoundingMode ".concat(r," but got pad ").concat(t,"."));if("number"==typeof t)assert(isInt(t),function(){return"Error in ".concat(e,": pad must be an integer when using ")+"dimRoundingMode ".concat(r," but got pad ").concat(t,".")});else if("object"==typeof t)t.forEach(function(t){t.forEach(function(t){assert(isInt(t),function(){return"Error in ".concat(e,": pad must be an integer when using ")+"dimRoundingMode ".concat(r," but got pad ").concat(t,".")})})});else throw Error("Error in ".concat(e,": Unknown padding parameter: ").concat(t))}}var rZ=op({reshape_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","reshape","string_or_numeric");return rc.runKernel(e2,{x:r},{shape:t})}}),rJ=op({avgPool_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){var a=convertToTensor(e,"x","avgPool","float32");assert(eitherStridesOrDilationsAreOne(r,1),function(){return"Error in avgPool: Either strides or dilations must be 1. "+"Got strides ".concat(r," and dilations '").concat(1,"'")});var o=a,s=!1;3===a.rank&&(s=!0,o=rZ(a,[1,a.shape[0],a.shape[1],a.shape[2]])),assert(4===o.rank,function(){return"Error in avgPool: x must be rank 4 but got rank ".concat(o.rank,".")}),checkPadOnDimRoundingMode("avgPool",n,i);var l={x:o},u=rc.runKernel(T,l,{filterSize:t,strides:r,pad:n,dimRoundingMode:i});return(u=rM(u,a.dtype),s)?rZ(u,[u.shape[1],u.shape[2],u.shape[3]]):u}}),rQ=op({avgPool3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===a&&(a="NDHWC");var o=convertToTensor(e,"x","avgPool3d","float32"),s=o,l=!1;4===o.rank&&(l=!0,s=rZ(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),assert(5===s.rank,function(){return"Error in avgPool3d: x must be rank 5 but got rank ".concat(s.rank,".")}),assert("NDHWC"===a,function(){return"Error in avgPool3d: Only NDHWC is currently supported, "+"but got dataFormat of ".concat(a)}),assert("number"==typeof r&&r>0||Array.isArray(r)&&r[0]>0&&r[1]>0&&r[2]>0,function(){return"Error in avgPool3d: Stride must be > 0, but got '".concat(r,"'")}),checkPadOnDimRoundingMode("avgPool3d",n,i);var u={x:s},d={filterSize:t,strides:r,pad:n,dimRoundingMode:i,dataFormat:a},c=rc.runKernel(w,u,d);return(c=rM(c,s.dtype),l)?rZ(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}}),r1=op({concat_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0),assert(e.length>=1,function(){return"Pass at least one tensor to concat"});var r=convertToTensorArray(e,"tensors","concat","string_or_numeric");if("complex64"===r[0].dtype&&r.forEach(function(e){if("complex64"!==e.dtype)throw Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype ".concat(e.dtype,". "))}),1===r.length)return rk(r[0]);var n={axis:t};return rc.runKernel(F,r,n)}}),r0=op({matMul_:function(e,t,r,n){void 0===r&&(r=!1),void 0===n&&(n=!1);var i,a=convertToTensor(e,"a","matMul"),o=convertToTensor(t,"b","matMul"),s={a:a=(i=__read(makeTypesMatch(a,o),2))[0],b:o=i[1]},l={transposeA:r,transposeB:n};return rc.runKernel(E,s,l)}}),r2=op({sigmoid_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","sigmoid","float32");return rc.runKernel(ts,{x:t})}}),r4=op({slice_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","slice","string_or_numeric");if(0===n.rank)throw Error("Slicing scalar is not possible");return rc.runKernel(ti,{x:n},{begin:t,size:r})}}),r3=op({tanh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","tanh","float32");return rc.runKernel(t_,{x:t})}}),r6=op({basicLSTMCell_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){var o=convertToTensor(e,"forgetBias","basicLSTMCell"),s=convertToTensor(t,"lstmKernel","basicLSTMCell"),l=convertToTensor(r,"lstmBias","basicLSTMCell"),u=convertToTensor(n,"data","basicLSTMCell"),d=convertToTensor(i,"c","basicLSTMCell"),c=rL(r0(r1([u,convertToTensor(a,"h","basicLSTMCell")],1),s),l),p=c.shape[0],h=c.shape[1]/4,f=[p,h],m=r4(c,[0,0],f),y=r4(c,[0,h],f),g=r4(c,[0,2*h],f),v=r4(c,[0,3*h],f),b=rL(rN(r2(m),r3(y)),rN(d,r2(rL(o,g)))),S=rN(r3(b),r2(v));return[b,S]}}),r8=op({batchToSpaceND_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","batchToSpaceND"),i=t.reduce(function(e,t){return e*t});return assert(n.rank>=1+t.length,function(){return"input rank is ".concat(n.rank," but should be > than blockShape.length ").concat(t.length)}),assert(r.length===t.length,function(){return"crops.length is ".concat(r.length," but should be equal to blockShape.length  ").concat(t.length)}),assert(n.shape[0]%i==0,function(){return"input tensor batch is ".concat(n.shape[0]," but is not divisible by the product of ")+"the elements of blockShape ".concat(t.join(" * ")," === ").concat(i)}),rc.runKernel(D,{x:n},{blockShape:t,crops:r})}}),r5=op({batchNorm_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){null==a&&(a=.001);var o,s,l=convertToTensor(e,"x","batchNorm"),u=convertToTensor(t,"mean","batchNorm"),d=convertToTensor(r,"variance","batchNorm");null!=i&&(o=convertToTensor(i,"scale","batchNorm")),null!=n&&(s=convertToTensor(n,"offset","batchNorm")),assert(u.rank===d.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),assert(null==s||u.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),assert(null==o||u.rank===o.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."});var c={x:0===l.rank||1===l.rank?rZ(l,[1,1,1,l.size]):2===l.rank?rZ(l,[1,1,l.shape[0],l.shape[1]]):3===l.rank?rZ(l,[1,l.shape[0],l.shape[1],l.shape[2]]):l,scale:o,offset:s,mean:u,variance:d},p={varianceEpsilon:a};return rZ(rc.runKernel(ec,c,p),l.shape)}}),r9=op({batchNorm2d_:function(e,t,r,n,i,a){var o,s,l=convertToTensor(e,"x","batchNorm"),u=convertToTensor(t,"mean","batchNorm"),d=convertToTensor(r,"variance","batchNorm");return null!=i&&(o=convertToTensor(i,"scale","batchNorm")),null!=n&&(s=convertToTensor(n,"offset","batchNorm")),assert(2===l.rank,function(){return"Error in batchNorm2D: x must be rank 2 but got rank "+"".concat(l.rank,".")}),assert(2===u.rank||1===u.rank,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but "+"got rank ".concat(u.rank,".")}),assert(2===d.rank||1===d.rank,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 "+"but got rank ".concat(d.rank,".")}),null!=o&&assert(2===o.rank||1===o.rank,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 "+"but got rank ".concat(o.rank,".")}),null!=s&&assert(2===s.rank||1===s.rank,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 "+"but got rank ".concat(s.rank,".")}),r5(l,u,d,s,o,a)}}),r7=op({batchNorm3d_:function(e,t,r,n,i,a){var o,s,l=convertToTensor(e,"x","batchNorm"),u=convertToTensor(t,"mean","batchNorm"),d=convertToTensor(r,"variance","batchNorm");return null!=i&&(o=convertToTensor(i,"scale","batchNorm")),null!=n&&(s=convertToTensor(n,"offset","batchNorm")),assert(3===l.rank,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+"".concat(l.rank,".")}),assert(3===u.rank||1===u.rank,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but "+"got rank ".concat(u.rank,".")}),assert(3===d.rank||1===d.rank,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 "+"but got rank ".concat(d.rank,".")}),null!=o&&assert(3===o.rank||1===o.rank,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 "+"but got rank ".concat(o.rank,".")}),null!=s&&assert(3===s.rank||1===s.rank,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 "+"but got rank ".concat(s.rank,".")}),r5(l,u,d,s,o,a)}}),ne=op({batchNorm4d_:function(e,t,r,n,i,a){var o,s,l=convertToTensor(e,"x","batchNorm"),u=convertToTensor(t,"mean","batchNorm"),d=convertToTensor(r,"variance","batchNorm");return null!=i&&(o=convertToTensor(i,"scale","batchNorm")),null!=n&&(s=convertToTensor(n,"offset","batchNorm")),assert(4===l.rank,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+"".concat(l.rank,".")}),assert(4===u.rank||1===u.rank,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but "+"got rank ".concat(u.rank,".")}),assert(4===d.rank||1===d.rank,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 "+"but got rank ".concat(d.rank,".")}),null!=o&&assert(4===o.rank||1===o.rank,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 "+"but got rank ".concat(o.rank,".")}),null!=s&&assert(4===s.rank||1===s.rank,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 "+"but got rank ".concat(s.rank,".")}),r5(l,u,d,s,o,a)}}),nt=op({bincount_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","bincount"),i=convertToTensor(t,"weights","bincount");return assert("int32"===n.dtype,function(){return"Error in bincount: input "+"dtype must be int32, but got ".concat(n.dtype)}),assert(r>=0,function(){return"size must be non-negative, but got ".concat(r,".")}),assert(i.size===n.size||0===i.size,function(){return"Error in bincount: weights must have the same size as input or"+"0-length, but got input shape: ".concat(n.shape,", weights shape: ")+"".concat(i.shape,".")}),rc.runKernel(O,{x:n,weights:i},{size:r})}}),nr=op({bitwiseAnd_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","bitwiseAnd"),n=convertToTensor(t,"y","bitwiseAnd");if(!arraysEqual(r.shape,n.shape))throw Error("BitwiseAnd: Tensors must have the same shape. x: ".concat(r.shape,", y: ").concat(n.shape));if("int32"!==r.dtype||"int32"!==n.dtype)throw Error("BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ".concat(r.dtype," and type of y: ").concat(n.dtype));return rc.runKernel(R,{a:r,b:n})}}),nn=op({broadcastArgs_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"s0","broadcastArgs","int32"),n=convertToTensor(t,"s1","broadcastArgs","int32");if(1!==r.rank)throw Error("broadcastArgs(): first input must be a vector (rank=1). "+"Has rank ".concat(r.rank));if(1!==n.rank)throw Error("broadcastArgs(): second input must be a vector (rank=1). "+"Has rank ".concat(n.rank));return rc.runKernel(M,{s0:r,s1:n})}}),ni=op({broadcastTo_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"broadcastTo","x"),n=r.shape;if(assertNonNegativeIntegerDimensions(t),t.length<r.rank)throw Error("broadcastTo(): shape.length=".concat(t.length," < input.rank=").concat(r.rank,"."));if(t.length>r.rank){for(var i=r.shape.slice();i.length<t.length;)i.unshift(1);r=rZ(r,i)}for(var a=r.shape,o=Array.from(t),s=t.length-1;s>=0;s--)if(a[s]===t[s])o[s]=1;else if(1!==r.shape[s])throw Error("broadcastTo(): [".concat(n,"] cannot be broadcast to [").concat(t,"]."));if(0===o.map(function(e,t){return e>1?t:-1}).filter(function(e){return e>=0}).length)return rk(r);var l={x:r};return rc.runKernel(tA,l,{reps:o})}}),na=op({ceil_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","ceil","float32");return rc.runKernel(L,{x:t})}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fill(e,t,r){assertNonNegativeIntegerDimensions(e),r=r||inferDtype(t);var n={shape:e,value:t,dtype:r};return rc.runKernel(es,{},n)}var no=op({clipByValue_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","clipByValue");return(assert(t<=r,function(){return"Error in clip: min (".concat(t,") must be ")+"less than or equal to max (".concat(r,").")}),t===r)?fill(n.shape,t,n.dtype):rc.runKernel(I,{x:n},{clipValueMin:t,clipValueMax:r})}}),ns=op({concat1d_:function(e){return r1(e,0)}}),nl=op({concat2d_:function(e,t){return r1(e,t)}}),nu=op({concat3d_:function(e,t){return r1(e,t)}}),nd=op({concat4d_:function(e,t){return r1(e,t)}}),nc=op({conv2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o){void 0===i&&(i="NHWC"),void 0===a&&(a=[1,1]);var s=convertToTensor(e,"x","conv2d","float32"),l=convertToTensor(t,"filter","conv2d","float32"),u=s,d=!1;3===s.rank&&(d=!0,u=rZ(s,[1,s.shape[0],s.shape[1],s.shape[2]])),assert(4===u.rank,function(){return"Error in conv2d: input must be rank 4, but got rank ".concat(u.rank,".")}),assert(4===l.rank,function(){return"Error in conv2d: filter must be rank 4, but got rank "+"".concat(l.rank,".")}),checkPadOnDimRoundingMode("conv2d",n,o);var c="NHWC"===i?u.shape[3]:u.shape[1];assert(c===l.shape[2],function(){return"Error in conv2d: depth of input (".concat(c,") must match ")+"input depth for filter ".concat(l.shape[2],".")}),assert(eitherStridesOrDilationsAreOne(r,a),function(){return"Error in conv2D: Either strides or dilations must be 1. "+"Got strides ".concat(r," and dilations '").concat(a,"'")}),assert(stridesOrDilationsArePositive(a),function(){return"Error in conv2D: Dilated rates should be larger than 0."}),assert(stridesOrDilationsArePositive(r),function(){return"Error in conv2D: Strides should be larger than 0."});var p={x:u,filter:l},h={strides:r,pad:n,dataFormat:i,dilations:a,dimRoundingMode:o},f=rc.runKernel(V,p,h);return d?rZ(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),np=op({conv1d_:function(e,t,r,n,i,a,o){void 0===i&&(i="NWC"),void 0===a&&(a=1);var s=convertToTensor(e,"x","conv1d"),l=convertToTensor(t,"filter","conv1d"),u=s,d=!1;2===s.rank&&(d=!0,u=rZ(s,[1,s.shape[0],s.shape[1]])),assert(3===u.rank,function(){return"Error in conv1d: input must be rank 3, but got rank ".concat(u.rank,".")}),assert(3===l.rank,function(){return"Error in conv1d: filter must be rank 3, but got rank "+"".concat(l.rank,".")}),checkPadOnDimRoundingMode("conv1d",n,o),assert(u.shape[2]===l.shape[1],function(){return"Error in conv1d: depth of input (".concat(u.shape[2],") must match ")+"input depth for filter ".concat(l.shape[1],".")}),assert(eitherStridesOrDilationsAreOne(r,a),function(){return"Error in conv1D: Either stride or dilation must be 1. "+"Got stride ".concat(r," and dilation '").concat(a,"'")}),assert(stridesOrDilationsArePositive(a),function(){return"Error in conv1D: Dilated rates should be larger than 0."}),assert(stridesOrDilationsArePositive(r),function(){return"Error in conv1D: Stride should be larger than 0."}),assert("NWC"===i,function(){return"Error in conv1d: got dataFormat of ".concat(i," but only NWC is currently supported.")});var c=rZ(l,[1,l.shape[0],l.shape[1],l.shape[2]]),p=nc(rZ(u,[u.shape[0],1,u.shape[1],u.shape[2]]),c,[1,r],n,"NHWC",[1,a],o);return d?rZ(p,[p.shape[2],p.shape[3]]):rZ(p,[p.shape[0],p.shape[2],p.shape[3]])}}),nh=op({conv2DBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o){void 0===a&&(a="NHWC"),assert(e.length===t.rank,function(){return"Length of inShape "+"(".concat(e.length,") and rank of dy (").concat(t.rank,") must match")});var s=e,l=t,u=!1;3===t.rank&&(u=!0,l=rZ(t,[1,t.shape[0],t.shape[1],t.shape[2]]),s=[1,e[0],e[1],e[2]]),assert(4===s.length,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+"".concat(s.length,".")}),assert(4===l.rank,function(){return"Error in conv2dDerInput: dy must be rank 4, but got "+"rank ".concat(l.rank)}),assert(4===r.rank,function(){return"Error in conv2dDerInput: filter must be rank 4, but got "+"rank ".concat(r.rank)});var d="NHWC"===a?s[3]:s[1],c="NHWC"===a?l.shape[3]:l.shape[1];assert(d===r.shape[2],function(){return"Error in conv2dDerInput: depth of input (".concat(d,") must ")+"match input depth for filter ".concat(r.shape[2],".")}),assert(c===r.shape[3],function(){return"Error in conv2dDerInput: depth of output (".concat(c,") must ")+"match output depth for filter ".concat(r.shape[3],".")}),checkPadOnDimRoundingMode("conv2dDerInput",i,o);var p={dy:l,filter:r},h={strides:n,pad:i,dataFormat:a,dimRoundingMode:o,inputShape:s},f=rc.runKernel(H,p,h);return u?rZ(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),nf=op({conv2dTranspose_:function(e,t,r,n,i,a){return nh(r,convertToTensor(e,"x","conv2dTranspose"),convertToTensor(t,"filter","conv2dTranspose"),n,i,"NHWC",a)}}),nm=op({conv3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===i&&(i="NDHWC"),void 0===a&&(a=[1,1,1]);var o=convertToTensor(e,"x","conv3d"),s=convertToTensor(t,"filter","conv3d"),l=o,u=!1;4===o.rank&&(u=!0,l=rZ(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),assert(5===l.rank,function(){return"Error in conv3d: input must be rank 5, but got rank ".concat(l.rank,".")}),assert(5===s.rank,function(){return"Error in conv3d: filter must be rank 5, but got rank "+"".concat(s.rank,".")}),assert(l.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input (".concat(l.shape[4],") must match ")+"input depth for filter ".concat(s.shape[3],".")}),assert(eitherStridesOrDilationsAreOne(r,a),function(){return"Error in conv3D: Either strides or dilations must be 1. "+"Got strides ".concat(r," and dilations '").concat(a,"'")}),assert("NDHWC"===i,function(){return"Error in conv3d: got dataFormat of ".concat(i," but only NDHWC is currently supported.")}),assert(stridesOrDilationsArePositive(a),function(){return"Error in conv3D: Dilated rates should be larger than 0."}),assert(stridesOrDilationsArePositive(r),function(){return"Error in conv3D: Strides should be larger than 0."});var d={x:l,filter:s},c={strides:r,pad:n,dataFormat:i,dilations:a},p=rc.runKernel(z,d,c);return u?rZ(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}}),ny=op({conv3DBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){assert(e.length===t.rank,function(){return"Length of inShape "+"(".concat(e.length,") and rank of dy (").concat(t.rank,") must match")});var a=e,o=t,s=!1;4===t.rank&&(s=!0,o=rZ(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);var l=a[4],u=o.shape[4];assert(5===a.length,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+"".concat(a.length,".")}),assert(5===o.rank,function(){return"Error in conv3dDerInput: dy must be rank 5, but got "+"rank ".concat(o.rank)}),assert(5===r.rank,function(){return"Error in conv3dDerInput: filter must be rank 5, but got "+"rank ".concat(r.rank)}),assert(l===r.shape[3],function(){return"Error in conv3dDerInput: depth of input (".concat(l,") must ")+"match input depth for filter ".concat(r.shape[3],".")}),assert(u===r.shape[4],function(){return"Error in conv3dDerInput: depth of output (".concat(u,") must ")+"match output depth for filter ".concat(r.shape[4],".")});var d={dy:o,filter:r},c={pad:i,strides:n,inputShape:a},p=rc.runKernel(U,d,c);return s?rZ(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}}),ng=op({conv3dTranspose_:function(e,t,r,n,i){return ny(r,convertToTensor(e,"x","conv3dTranspose"),convertToTensor(t,"filter","conv3dTranspose"),n,i)}}),nv=op({cos_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","cos","float32");return rc.runKernel("Cos",{x:t})}}),nb=op({cosh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","cosh","float32");return rc.runKernel(G,{x:t})}}),nS=op({cumprod_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===t&&(t=0),void 0===r&&(r=!1),void 0===n&&(n=!1);var i=convertToTensor(e,"x","cumprod"),a={axis:t,exclusive:r,reverse:n};return rc.runKernel(W,{x:i},a)}}),nx=op({cumsum_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===t&&(t=0),void 0===r&&(r=!1),void 0===n&&(n=!1);var i=convertToTensor(e,"x","cumsum"),a={axis:t,exclusive:r,reverse:n};return rc.runKernel(X,{x:i},a)}}),nP=op({denseBincount_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===n&&(n=!1);var i=convertToTensor(e,"x","denseBincount"),a=convertToTensor(t,"weights","denseBincount");assert("int32"===i.dtype,function(){return"Error in denseBincount: input "+"dtype must be int32, but got ".concat(i.dtype)}),assert(i.rank<=2,function(){return"Error in denseBincount: input must be at most rank 2, but got "+"rank ".concat(i.rank,".")}),assert(r>=0,function(){return"size must be non-negative, but got ".concat(r,".")}),assert(a.size===i.size||0===a.size,function(){return"Error in denseBincount: weights must have the same shape as x or "+"0-length, but got x shape: ".concat(i.shape,", weights shape: ")+"".concat(a.shape,".")});var o={size:r,binaryOutput:n};return rc.runKernel(q,{x:i,weights:a},o)}}),nC=op({depthToSpace_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===r&&(r="NHWC");var n=convertToTensor(e,"x","depthToSpace","float32"),i="NHWC"===r?n.shape[1]:n.shape[2],a="NHWC"===r?n.shape[2]:n.shape[3],o="NHWC"===r?n.shape[3]:n.shape[1];assert(t>1,function(){return"blockSize should be > 1 for depthToSpace, but was: ".concat(t)}),assert(i*t>=0,function(){return"Negative dimension size caused by overflow when multiplying\n    ".concat(i," and ").concat(t,"  for depthToSpace with input shape\n    ").concat(n.shape)}),assert(a*t>=0,function(){return"Negative dimension size caused by overflow when multiplying\n    ".concat(a," and ").concat(t," for depthToSpace with input shape\n        ").concat(n.shape)}),assert(o%(t*t)==0,function(){return"Dimension size must be evenly divisible by ".concat(t*t," but is ").concat(o," for depthToSpace with input shape ").concat(n.shape)});var s={blockSize:t,dataFormat:r};return rc.runKernel(K,{x:n},s)}}),n_=op({depthwiseConv2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o){void 0===i&&(i="NHWC"),void 0===a&&(a=[1,1]);var s=convertToTensor(e,"x","depthwiseConv2d","float32"),l=convertToTensor(t,"filter","depthwiseConv2d","float32"),u=s,d=!1;3===s.rank&&(d=!0,u=rZ(s,[1,s.shape[0],s.shape[1],s.shape[2]])),assert(4===u.rank,function(){return"Error in depthwiseConv2d: input must be rank 4, but got "+"rank ".concat(u.rank,".")}),assert(4===l.rank,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+"".concat(l.rank,".")});var c="NHWC"===i?u.shape[3]:u.shape[1];assert(c===l.shape[2],function(){return"Error in depthwiseConv2d: number of input channels "+"(".concat(c,") must match the inChannels dimension in ")+"filter ".concat(l.shape[2],".")}),checkPadOnDimRoundingMode("depthwiseConv2d",n,o);var p={x:u,filter:l},h={strides:r,pad:n,dataFormat:i,dilations:a,dimRoundingMode:o},f=rc.runKernel($,p,h);return d?rZ(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),nA=op({diag_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","diag");return rc.runKernel(Q,{x:t})}}),nT=op({dilation2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===i&&(i=[1,1]),void 0===a&&(a="NHWC");var o=convertToTensor(e,"x","dilation2d"),s=convertToTensor(t,"filter","dilation2d");assert(3===o.rank||4===o.rank,function(){return"Error in dilation2d: input must be rank 3 or 4, but got rank "+"".concat(o.rank,".")}),assert(3===s.rank,function(){return"Error in dilation2d: filter must be rank 3, but got rank "+"".concat(s.rank,".")}),assert("NHWC"===a,function(){return"Error in dilation2d: Only NHWC is currently supported, "+"but got dataFormat of ".concat(a)});var l=o,u=!1;3===o.rank&&(l=rZ(o,[1,o.shape[0],o.shape[1],o.shape[2]]),u=!0),assert(l.shape[3]===s.shape[2],function(){return"Error in dilation2d:  input and filter must have the same depth: ".concat(l.shape[3]," vs ").concat(s.shape[2])});var d={x:l,filter:s},c={strides:r,pad:n,dilations:i},p=rc.runKernel(ee,d,c);return u?rZ(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function getBroadcastDims(e,t){for(var r=e.length,n=[],i=0;i<r;i++){var a=r-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&1===o&&n.unshift(a)}return n}function getReductionAxes(e,t){for(var r=[],n=0;n<t.length;n++){var i=e[e.length-n-1],a=t.length-n-1,o=t[a];(null==i||1===i&&o>1)&&r.unshift(a)}return r}function assertAndGetBroadcastShape(e,t){for(var r=Math.max(e.length,t.length),n=Array(r),i=0;i<r;i++){var a=e[e.length-i-1];null==a&&(a=1);var o=t[t.length-i-1];if(null==o&&(o=1),1===a)n[r-i-1]=o;else if(1===o)n[r-i-1]=a;else if(a!==o)throw Error("Operands could not be broadcast together with shapes "+"".concat(e," and ").concat(t,"."));else n[r-i-1]=a}return n}var nw=op({equal_:function(e,t){var r,n=convertToTensor(e,"a","equal","string_or_numeric"),i=convertToTensor(t,"b","equal","string_or_numeric");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(ei,a)}}),nE=op({where_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(t,"a","where"),i=convertToTensor(r,"b","where"),a=convertToTensor(e,"condition","where","bool"),o=assertAndGetBroadcastShape(assertAndGetBroadcastShape(a.shape,n.shape),i.shape),s=ni(a,o),l=ni(n,o),u=ni(i,o);return rc.runKernel(tr,{condition:s,t:l,e:u})}}),nD=op({zerosLike_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","zerosLike");return rc.runKernel(tM,{x:t})}}),nO=op({divNoNan_:function(e,t){var r,n=convertToTensor(e,"a","div"),i=convertToTensor(t,"b","div"),a=rB(n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1]),o=nD(a);return nE(nw(i,o),o,a)}}),nR=op({dot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"t1","dot"),n=convertToTensor(t,"t2","dot");assert((1===r.rank||2===r.rank)&&(1===n.rank||2===n.rank),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+"".concat(r.rank," and ").concat(n.rank,".")});var i=1===r.rank?r.size:r.shape[1],a=1===n.rank?n.size:n.shape[0];if(assert(i===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+"".concat(i," and ").concat(a,".")}),1===r.rank&&1===n.rank){var o=rZ(r,[1,-1]),s=rZ(n,[-1,1]),l=r0(o,s);return rZ(l,[])}if(1===r.rank&&2===n.rank){var o=rZ(r,[1,-1]),s=rZ(n,[n.shape[0],n.shape[1]]),l=r0(o,s);return rZ(l,[l.size])}if(2===r.rank&&1===n.rank){var s=rZ(n,[-1,1]),l=r0(r,s);return rZ(l,[l.size])}var s=rZ(n,[n.shape[0],n.shape[1]]),l=r0(r,s);return l}}),nM=op({einsum_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=t.map(function(e,t){return convertToTensor(e,"tensors".concat(t),"einsum")});return rc.runKernel(en,n,{equation:e})}}),nk=op({elu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","elu","float32");return rc.runKernel("Elu",{x:t})}}),nL=op({ensureShape_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","ensureShape","string_or_numeric");if(!arraysEqualWithNull(r.shape,t))throw Error("EnsureShape: Shape of tensor ".concat(r.shape," is not compatible with expected shape ").concat(t));return e}}),nI=op({erf_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","erf");assert("int32"===t.dtype||"float32"===t.dtype,function(){return"Input dtype must be `int32` or `float32`."}),"int32"===t.dtype&&(t=rM(t,"float32"));var r={x:t};return rc.runKernel("Erf",r)}});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function axesAreInnerMostDims(e,t){for(var r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0}function combineLocations(e,t,r){for(var n=e.length+t.length,i=[],a=0,o=0,s=0;s<n;s++)-1===r.indexOf(s)?i.push(e[a++]):i.push(t[o++]);return i}function expandShapeToKeepDim(e,t){return combineLocations(e,t.map(function(e){return 1}),t)}var nB=op({max_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","max"),i={reductionIndices:t,keepDims:r};return rc.runKernel("Max",{x:n},i)}}),nN=op({min_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","min"),i={axis:t,keepDims:r};return rc.runKernel("Min",{x:n},i)}}),nF=op({pow_:function(e,t){var r,n=convertToTensor(e,"base","pow"),i=convertToTensor(t,"exp","pow"),a={a:n=(r=__read(makeTypesMatch(n,i),2))[0],b:i=r[1]};return rc.runKernel("Pow",a)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function scalar(e,t){if((isTypedArray(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&isTypedArray(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return makeTensor(e,[],[],t)}var nV=op({sqrt_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","sqrt","float32");return rc.runKernel(tu,{x:t})}}),nj=op({square_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","square");return rc.runKernel("Square",{x:t},{})}}),nH=op({sum_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","sum");"bool"===n.dtype&&(n=rM(n,"int32"));var i={x:n},a={axis:t,keepDims:r};return rc.runKernel("Sum",i,a)}}),nz=op({norm_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===t&&(t="euclidean"),void 0===r&&(r=null),void 0===n&&(n=!1);var i=function normImpl(e,t,r){if(void 0===r&&(r=null),0===e.rank)return rF(e);if(1!==e.rank&&null===r)return normImpl(rZ(e,[-1]),t,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===t)return nH(rF(e),r);if(t===1/0)return nB(rF(e),r);if(t===-1/0)return nN(rF(e),r);if("euclidean"===t||2===t)return nV(nH(nF(rF(e),scalar(2,"int32")),r));throw Error("Error in norm: invalid ord value: ".concat(t))}if(Array.isArray(r)&&2===r.length){if(1===t)return nB(nH(rF(e),r[0]),r[1]-1);if(t===1/0)return nB(nH(rF(e),r[1]),r[0]);if(t===-1/0)return nN(nH(rF(e),r[1]),r[0]);if("fro"===t||"euclidean"===t)return nV(nH(nj(e),r));throw Error("Error in norm: invalid ord value: ".concat(t))}throw Error("Error in norm: invalid axis: ".concat(r))}(e=convertToTensor(e,"x","norm"),t,r),a=i.shape;if(n){var o=parseAxisParam(r,e.shape);a=expandShapeToKeepDim(i.shape,o)}return rZ(i,a)}}),nU=op({euclideanNorm_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=!1),nz(e,"euclidean",t,r)}}),nG=op({exp_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","exp");return rc.runKernel("Exp",{x:t})}}),nW=op({expandDims_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","expandDims","string_or_numeric");assert(t<=r.rank,function(){return"Axis must be <= rank of the tensor"});var n={dim:t};return rc.runKernel(ea,{input:r},n)}}),nX=op({expm1_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","expm1");return rc.runKernel(eo,{x:t})}}),nY=op({tile_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","tile","string_or_numeric");return assert(r.rank===t.length,function(){return"Error in transpose: rank of input ".concat(r.rank," ")+"must match length of reps ".concat(t,".")}),rc.runKernel(tA,{x:r},{reps:t})}}),nq=op({eye_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===n&&(n="float32"),null==t&&(t=e);for(var i=buffer([e,t],n),a=e<=t?e:t,o=0;o<a;++o)i.set(1,o,o);var s=rZ(i.toTensor(),[e,t]);if(null==r)return s;if(1===r.length)return nY(nW(s,0),[r[0],1,1]);if(2===r.length)return nY(nW(nW(s,0),0),[r[0],r[1],1,1]);if(3===r.length)return nY(nW(nW(nW(s,0),0),0),[r[0],r[1],r[2],1,1]);throw Error("eye() currently supports only 1D and 2D "+"batchShapes, but received ".concat(r.length,"D."))}}),nK=op({floor_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","floor","float32");return rc.runKernel(eu,{x:t})}}),n$=op({gather_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===r&&(r=0),void 0===n&&(n=0);var i=convertToTensor(e,"x","gather"),a=convertToTensor(t,"indices","gather","int32"),o={axis:r,batchDims:n};return rc.runKernel(ep,{x:i,indices:a},o)}}),nZ=op({greater_:function(e,t){var r,n=convertToTensor(e,"a","greater","string_or_numeric"),i=convertToTensor(t,"b","greater","string_or_numeric");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(ef,a)}}),nJ=op({greaterEqual_:function(e,t){var r,n=convertToTensor(e,"a","greaterEqual","string_or_numeric"),i=convertToTensor(t,"b","greaterEqual","string_or_numeric");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(em,a)}}),nQ=op({imag_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"input","imag");return rc.runKernel(ev,{input:t})}}),n1=op({isFinite_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","isFinite");return rc.runKernel(eb,{x:t})}}),n0=op({isInf_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","isInf");return rc.runKernel(eS,{x:t})}}),n2=op({isNaN_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","isNaN");return rc.runKernel(ex,{x:t})}}),n4=op({leakyRelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=.2);var r=convertToTensor(e,"x","leakyRelu"),n={alpha:t};return rc.runKernel(eP,{x:r},n)}}),n3=op({less_:function(e,t){var r,n=convertToTensor(e,"a","less","string_or_numeric"),i=convertToTensor(t,"b","less","string_or_numeric");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(eC,a)}}),n6=op({lessEqual_:function(e,t){var r,n=convertToTensor(e,"a","lessEqual","string_or_numeric"),i=convertToTensor(t,"b","lessEqual","string_or_numeric");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(e_,a)}}),n8=op({localResponseNormalization_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){void 0===t&&(t=5),void 0===r&&(r=1),void 0===n&&(n=1),void 0===i&&(i=.5);var a=convertToTensor(e,"x","localResponseNormalization");assert(4===a.rank||3===a.rank,function(){return"Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ".concat(a.rank,".")}),assert(isInt(t),function(){return"Error in localResponseNormalization: depthRadius must be an "+"integer but got depthRadius ".concat(t,".")});var o=a,s=!1;3===a.rank&&(s=!0,o=rZ(a,[1,a.shape[0],a.shape[1],a.shape[2]]));var l={x:o},u={depthRadius:t,bias:r,alpha:n,beta:i},d=rc.runKernel("LRN",l,u);return s?rZ(d,[d.shape[1],d.shape[2],d.shape[3]]):d}}),n5=op({log_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","log","float32");return rc.runKernel("Log",{x:t})}}),n9=op({log1p_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","log1p");return rc.runKernel(eT,{x:t})}});function variableGrads(e,t){assert(isFunction(e),function(){return"The f passed in variableGrads(f) must be a function"}),assert(null==t||Array.isArray(t)&&t.every(function(e){return e instanceof rs}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var r=null!=t;if(!r)for(var n in t=[],rc.registeredVariables)t.push(rc.registeredVariables[n]);var i=r?t.filter(function(e){return!e.trainable}):null,a=t.length;assert((t=t.filter(function(e){return e.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to "+"be trainable, but none of the ".concat(a," variables is ")+"trainable."});var o=rc.gradients(e,t,null,!0),s=o.value,l=o.grads;assert(l.some(function(e){return null!=e}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),assert(0===s.rank,function(){return"The f passed in variableGrads(f) must return a scalar, but it "+"returned a rank-".concat(s.rank," tensor")});var u={};return t.forEach(function(e,t){null!=l[t]&&(u[e.name]=l[t])}),null!=i&&i.forEach(function(e){return u[e.name]=null}),{value:s,grads:u}}function customGrad(e){return rc.customGrad(e)}function checkGrads(e){if(e.filter(function(e){return null==e}).length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}var n7=op({neg_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","neg");return rc.runKernel("Neg",{x:t})}}),ie=op({softplus_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","softplus");return rc.runKernel(tl,{x:t})}}),it=op({logSigmoid_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","logSigmoid");return customGrad(function(e){return{value:n7(ie(n7(e))),gradFunc:function(t){return rN(t,r2(n7(e)))}}})(t)}}),ir=op({sub_:function(e,t){var r,n=convertToTensor(e,"a","sub"),i=convertToTensor(t,"b","sub"),a={a:n=(r=__read(makeTypesMatch(n,i),2))[0],b:i=r[1]};return rc.runKernel("Sub",a)}}),ii=op({logSoftmax_:function(e,t){void 0===t&&(t=-1);var r=convertToTensor(e,"logits","logSoftmax");if(-1===t&&(t=r.rank-1),t!==r.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. "+"Logits was rank ".concat(r.rank," and axis was ").concat(t));return customGrad(function(e,r){var n=nB(e,t,!0),i=ir(e,n),a=ir(rM(i,"float32"),n5(nH(nG(i),t,!0)));return r([a]),{value:a,gradFunc:function(e,r){var n=nG(__read(r,1)[0]);return ir(e,rN(nH(e,t,!0),n))}}})(r)}}),ia=op({logSumExp_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","logSumExp"),i=parseAxisParam(t,n.shape),a=nB(n,i,!0),o=n5(nH(nG(ir(n,a)),i)),s=rL(rZ(a,o.shape),o);if(r){var l=expandShapeToKeepDim(s.shape,i);return rZ(s,l)}return s}}),io=op({logicalAnd_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"a","logicalAnd","bool"),n=convertToTensor(t,"b","logicalAnd","bool");return assertAndGetBroadcastShape(r.shape,n.shape),rc.runKernel(ew,{a:r,b:n})}}),is=op({logicalNot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","logicalNot","bool");return rc.runKernel(eE,{x:t})}}),il=op({logicalOr_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"a","logicalOr","bool"),n=convertToTensor(t,"b","logicalOr","bool");return assertAndGetBroadcastShape(r.shape,n.shape),rc.runKernel(eD,{a:r,b:n})}}),iu=op({logicalXor_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"a","logicalXor","bool"),n=convertToTensor(t,"b","logicalXor","bool");return assertAndGetBroadcastShape(r.shape,n.shape),io(il(e,t),is(io(e,t)))}}),id=op({searchSorted_:function(e,t,r){void 0===r&&(r="left");var n=convertToTensor(e,"sortedSequence","searchSorted"),i=convertToTensor(t,"values","searchSorted"),a=n.shape[n.shape.length-1],o=i.shape[i.shape.length-1],s=rZ(n,[-1,a]),l=rZ(i,[-1,o]);if(s.rank<2)throw Error("Sorted input argument must be at least 2-dimensional");if(s.shape[0]!==l.shape[0])throw Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(sizeFromShape(l.shape)>=2147483648)throw Error("values tensor size must less than ".concat(2147483648));if(s.shape[1]>=2147483648)throw Error("trailing dim_size must less than ".concat(2147483648," for int32 output type, was ").concat(s.shape[1]));var u={side:r};return rc.runKernel(tt,{sortedSequence:s,values:l},u)}}),ic=op({maxPool_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){var a=convertToTensor(e,"x","maxPool"),o=a,s=!1;3===a.rank&&(s=!0,o=rZ(a,[1,a.shape[0],a.shape[1],a.shape[2]])),assert(4===o.rank,function(){return"Error in maxPool: input must be rank 4 but got rank ".concat(o.rank,".")}),assert(eitherStridesOrDilationsAreOne(r,1),function(){return"Error in maxPool: Either strides or dilations must be 1. "+"Got strides ".concat(r," and dilations '").concat(1,"'")}),checkPadOnDimRoundingMode("maxPool",n,i);var l={x:o},u=rc.runKernel(eR,l,{filterSize:t,strides:r,pad:n,dimRoundingMode:i});return s?rZ(u,[u.shape[1],u.shape[2],u.shape[3]]):u}}),ip=op({maxPool3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===t&&(t=[1,1,1]),void 0===a&&(a="NDHWC");var o=convertToTensor(e,"x","maxPool3d"),s=o,l=!1;4===o.rank&&(l=!0,s=rZ(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),assert(5===s.rank,function(){return"Error in maxPool3d: x must be rank 5 but got rank ".concat(s.rank,".")}),assert("NDHWC"===a,function(){return"Error in maxPool3d: Only NDHWC is currently supported, "+"but got dataFormat of ".concat(a)}),checkPadOnDimRoundingMode("maxPool3d",n,i);var u={x:s},d={filterSize:t,strides:r,pad:n,dimRoundingMode:i,dataFormat:a},c=rc.runKernel(eM,u,d);return l?rZ(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}}),ih=op({maxPoolWithArgmax_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){void 0===i&&(i=!1);var a=convertToTensor(e,"x","maxPoolWithArgmax"),o={filterSize:t,strides:r,pad:n,includeBatchInIndex:i},s=rc.runKernel(ek,{x:a},o);return{result:s[0],indexes:s[1]}}}),im=op({maximum_:function(e,t){var r,n=convertToTensor(e,"a","maximum"),i=convertToTensor(t,"b","maximum");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],"bool"===n.dtype&&(n=rM(n,"int32"),i=rM(i,"int32")),assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(eO,a)}}),iy=op({mean_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","mean"),i={axis:t,keepDims:r};return rc.runKernel(eL,{x:n},i)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zeros(e,t){if(void 0===t&&(t="float32"),assertNonNegativeIntegerDimensions(e),"complex64"===t)return rf(zeros(e,"float32"),zeros(e,"float32"));var r=makeZerosTypedArray(sizeFromShape(e),t);return rc.makeTensor(r,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ones(e,t){if(void 0===t&&(t="float32"),assertNonNegativeIntegerDimensions(e),"complex64"===t)return rf(ones(e,"float32"),zeros(e,"float32"));var r=makeOnesTypedArray(sizeFromShape(e),t);return rc.makeTensor(r,e,t)}var ig=op({minimum_:function(e,t){var r,n=convertToTensor(e,"a","minimum"),i=convertToTensor(t,"b","minimum");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],"bool"===n.dtype&&(n=rM(n,"int32"),i=rM(i,"int32")),assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(eI,a)}}),iv=op({mirrorPad_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){assert("reflect"===r||"symmetric"===r,function(){return"Invalid mode. Mode must be either reflect or symmetric. "+"Got ".concat(r,".")});var n=convertToTensor(e,"x","mirrorPad");if(0===n.rank)throw Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");assert(t.length===n.rank,function(){return"Padding doesn't match input. Must be ".concat(n.rank,". ")+"Got ".concat(t.length,".")});for(var i="reflect"===r?1:0,_loop_1=function(e){assert(2===t[e].length,function(){return"Invalid number of paddings. Must be length of 2 each."}),assert(t[e][0]>=0&&t[e][0]<=n.shape[e]-i&&t[e][1]>=0&&t[e][1]<=n.shape[e]-i,function(){return"Padding in dimension ".concat(e," cannot be greater than or equal ")+"to ".concat(n.shape[e]-i," or less than 0 for input of ")+"shape ".concat(n.shape)})},a=0;a<n.rank;a++)_loop_1(a);return rc.runKernel(eB,{x:n},{paddings:t,mode:r})}}),ib=op({mod_:function(e,t){var r,n=convertToTensor(e,"a","mod"),i=convertToTensor(t,"b","mod"),a={a:n=(r=__read(makeTypesMatch(n,i),2))[0],b:i=r[1]};return rc.runKernel("Mod",a)}}),iS=op({moments_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=parseAxisParam(t,(e=convertToTensor(e,"x","moments")).shape),i=iy(e,n,r),a=i.shape;r||(a=expandShapeToKeepDim(i.shape,n));var o=iy(nj(ir(rM(e,"float32"),rZ(i,a))),n,r);return{mean:i,variance:o}}}),ix=op({multiRNNCell_:function(e,t,r,n){for(var i=convertToTensor(t,"data","multiRNNCell"),a=convertToTensorArray(r,"c","multiRNNCell"),o=convertToTensorArray(n,"h","multiRNNCell"),s=i,l=[],u=0;u<e.length;u++){var d=e[u](s,a[u],o[u]);l.push(d[0]),l.push(d[1]),s=d[1]}for(var c=[],p=[],u=0;u<l.length;u+=2)c.push(l[u]),p.push(l[u+1]);return[c,p]}}),iP=op({multinomial_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===n&&(n=!1);var i=convertToTensor(e,"logits","multinomial"),a=i.size,o=i.rank;if(a<2)throw Error("Error in multinomial: you need at least 2 outcomes, but got "+"".concat(a,"."));if(o>2)throw Error("Rank of probabilities must be 1 or 2, but is ".concat(o));r=r||Math.random();var s=1===o?rZ(i,[1,-1]):i,l={numSamples:t,seed:r,normalized:n},u=rc.runKernel(eN,{logits:s},l);return 1===o?rZ(u,[u.size]):u}}),iC=op({notEqual_:function(e,t){var r,n=convertToTensor(e,"a","notEqual","string_or_numeric"),i=convertToTensor(t,"b","notEqual","string_or_numeric");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(eV,a)}}),i_=op({oneHot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){if(void 0===r&&(r=1),void 0===n&&(n=0),void 0===i&&(i="int32"),t<2)throw Error("Error in oneHot: depth must be >=2, but it is ".concat(t));var a=convertToTensor(e,"indices","oneHot","int32"),o={dtype:i,depth:t,onValue:r,offValue:n};return rc.runKernel(eG,{indices:a},o)}}),iA=op({onesLike_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","onesLike");return rc.runKernel(eU,{x:t})}}),iT=op({outerProduct_:function(e,t){var r=convertToTensor(e,"v1","outerProduct"),n=convertToTensor(t,"v2","outerProduct");return assert(1===r.rank&&1===n.rank,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+"".concat(r.rank," and ").concat(n.rank,".")}),r0(rZ(r,[-1,1]),rZ(n,[1,-1]))}}),iw=op({pad_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===r&&(r=0);var n=convertToTensor(e,"x","pad");if(0===n.rank)throw Error("pad(scalar) is not defined. Pass non-scalar to pad");var i={paddings:t,constantValue:r};return rc.runKernel(eX,{x:n},i)}}),iE=op({pad1d_:function(e,t,r){return void 0===r&&(r=0),assert(2===t.length,function(){return"Invalid number of paddings. Must be length of 2."}),iw(e,[t],r)}}),iD=op({pad2d_:function(e,t,r){return void 0===r&&(r=0),assert(2===t.length&&2===t[0].length&&2===t[1].length,function(){return"Invalid number of paddings. Must be length of 2 each."}),iw(e,t,r)}}),iO=op({pad3d_:function(e,t,r){return void 0===r&&(r=0),assert(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,function(){return"Invalid number of paddings. Must be length of 2 each."}),iw(e,t,r)}}),iR=op({pad4d_:function(e,t,r){return void 0===r&&(r=0),assert(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,function(){return"Invalid number of paddings. Must be length of 2 each."}),iw(e,t,r)}}),iM=op({spaceToBatchND_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","spaceToBatchND");return assert(n.rank>=1+t.length,function(){return"input rank ".concat(n.rank," should be > than [blockShape] ").concat(t.length)}),assert(r.length===t.length,function(){return"paddings.shape[0] ".concat(r.length," must be equal to [blockShape] ").concat(t.length)}),assert(n.shape.reduce(function(e,n,i){return i>0&&i<=t.length?e&&(n+r[i-1][0]+r[i-1][1])%t[i-1]==0:e},!0),function(){return"input spatial dimensions ".concat(n.shape.slice(1)," with paddings ").concat(r.toString()," must be divisible by blockShapes ").concat(t.toString())}),rc.runKernel(td,{x:n},{blockShape:t,paddings:r})}}),ik=op({pool_:function(e,t,r,n,i,a,o){null==i&&(i=[1,1]),null==a&&(a=1),0===n&&(n="valid");var s,l,u,d,c,p,h,f,m,y,g=convertToTensor(e,"x","maxPool"),v=g,b=!1;3===g.rank&&(b=!0,v=rZ(g,[1,g.shape[0],g.shape[1],g.shape[2]])),assert(eitherStridesOrDilationsAreOne(a,i),function(){return"Error in pool: Either strides or dilations must be 1. "+"Got strides ".concat(a," and dilations '").concat(i,"'")});var S=computePool2DInfo(v.shape,t,a,i,n),x=[S.dilationHeight,S.dilationWidth];y="same"===n?(l=(s=[S.filterHeight,S.filterWidth].map(function(e,t){return e+(e-1)*(x[t]-1)}).map(function(e){return e-1})).map(function(e){return Math.floor(e/2)}),u=s.map(function(e,t){return e-l[t]}),s.map(function(e,t){return[l[t],u[t]]})):[[0,0],[0,0]];var P=1===x[0]&&1===x[1],C=__read((d=[S.inHeight,S.inWidth],c=y.map(function(e){return e[0]}),h=d.concat(c,p=y.map(function(e){return e[1]})),f=x.map(function(e,t){return(e-h[t]%e)%e}),m=p.map(function(e,t){return e+f[t]}),[x.map(function(e,t){return[c[t],m[t]]}),x.map(function(e,t){return[0,f[t]]})]),2),_=C[0],A=C[1],T=P?n:"valid",w=P?v:iM(v,x,_),E=("avg"===r?function(){return rJ(w,t,a,T,o)}:function(){return ic(w,t,a,T,o)})(),D=P?E:r8(E,x,A);return b?rZ(D,[D.shape[1],D.shape[2],D.shape[3]]):D}}),iL=op({prelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","prelu"),n=convertToTensor(t,"alpha","prelu");return rc.runKernel(eY,{x:r,alpha:n})}}),iI=op({prod_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var n=convertToTensor(e,"x","prod");"bool"===n.dtype&&(n=rM(n,"int32"));var i={x:n},a={axis:t,keepDims:r};return rc.runKernel(eq,i,a)}}),iB=op({raggedGather_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){var i=e.map(function(e,t){return convertToTensor(e,"tensors".concat(t),"raggedGather","int32")}),a=convertToTensor(t,"paramsDenseValues","raggedGather"),o=convertToTensor(r,"indices","raggedGather","int32"),s=rc.runKernel(eK,{paramsNestedSplits:i,paramsDenseValues:a,indices:o},{outputRaggedRank:n});return{outputNestedSplits:s.slice(0,s.length-1),outputDenseValues:s[s.length-1]}}}),iN=op({raggedRange_:/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"starts","raggedRange"),i=convertToTensor(t,"limits","raggedRange",n.dtype),a=convertToTensor(r,"deltas","raggedRange",n.dtype),o=rc.runKernel(e$,{starts:n,limits:i,deltas:a});return{rtNestedSplits:o[0],rtDenseValues:o[1]}}}),iF=op({raggedTensorToTensor_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){var a=convertToTensor(e,"shape","raggedTensorToTensor","int32"),o=convertToTensor(t,"values","raggedTensorToTensor"),s=convertToTensor(r,"defaultValue","raggedTensorToTensor",o.dtype),l=n.map(function(e,t){return convertToTensor(e,"tensors".concat(t),"raggedTensorToTensor","int32")});return rc.runKernel(eZ,{shape:a,values:o,defaultValue:s,rowPartitionTensors:l},{rowPartitionTypes:i})}}),iV=op({rand_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){assertNonNegativeIntegerDimensions(e);var n=sizeFromShape(e),i=null;if(null==r||"float32"===r)i=new Float32Array(n);else if("int32"===r)i=new Int32Array(n);else if("bool"===r)i=new Uint8Array(n);else throw Error("Unknown data type ".concat(r));for(var a=0;a<n;a++)i[a]=t();return rc.makeTensor(i,e,r)}}),ij={exports:{}};!function(e,t,r){function Alea(e){var t,r=this,n=(t=4022871197,function(e){e=String(e);for(var r=0;r<e.length;r++){var n=.02519603282416938*(t+=e.charCodeAt(r));t=n>>>0,n-=t,n*=t,t=n>>>0,n-=t,t+=4294967296*n}return(t>>>0)*23283064365386963e-26});r.next=function(){var e=2091639*r.s0+23283064365386963e-26*r.c;return r.s0=r.s1,r.s1=r.s2,r.s2=e-(r.c=0|e)},r.c=1,r.s0=n(" "),r.s1=n(" "),r.s2=n(" "),r.s0-=n(e),r.s0<0&&(r.s0+=1),r.s1-=n(e),r.s1<0&&(r.s1+=1),r.s2-=n(e),r.s2<0&&(r.s2+=1)}function copy(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function impl(e,t){var r=new Alea(e),n=t&&t.state,i=r.next;return i.int32=function(){return 4294967296*r.next()|0},i.double=function(){return i()+(2097152*i()|0)*11102230246251565e-32},i.quick=i,n&&("object"==typeof n&&copy(n,r),i.state=function(){return copy(r,{})}),i}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.alea=impl}(0,ij,!1);var iH=ij.exports,iz={exports:{}};!function(e,t,r){function XorGen(e){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:r+=e;for(var n=0;n<r.length+64;n++)t.x^=0|r.charCodeAt(n),t.next()}function copy(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function impl(e,t){var r=new XorGen(e),n=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,n&&("object"==typeof n&&copy(n,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xor128=impl}(0,iz,!1);var iU=iz.exports,iG={exports:{}};!function(e,t,r){function XorGen(e){var t=this,r="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:r+=e;for(var n=0;n<r.length+64;n++)t.x^=0|r.charCodeAt(n),n==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function copy(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function impl(e,t){var r=new XorGen(e),n=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,n&&("object"==typeof n&&copy(n,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xorwow=impl}(0,iG,!1);var iW=iG.exports,iX={exports:{}};!function(e,t,r){function XorGen(e){var t=this;t.next=function(){var e,r,n=t.x,i=t.i;return e=n[i],e^=e>>>7,r=e^e<<24^((e=n[i+1&7])^e>>>10)^((e=n[i+3&7])^e>>>3)^((e=n[i+4&7])^e<<7),e=n[i+7&7],e^=e<<13,r^=e^e<<9,n[i]=r,t.i=i+1&7,r},function(e,t){var r,n=[];if(t===(0|t))n[0]=t;else for(r=0,t=""+t;r<t.length;++r)n[7&r]=n[7&r]<<15^t.charCodeAt(r)+n[r+1&7]<<13;for(;n.length<8;)n.push(0);for(r=0;r<8&&0===n[r];++r);for(8==r?n[7]=-1:n[r],e.x=n,e.i=0,r=256;r>0;--r)e.next()}(t,e)}function copy(e,t){return t.x=e.x.slice(),t.i=e.i,t}function impl(e,t){null==e&&(e=+new Date);var r=new XorGen(e),n=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,n&&(n.x&&copy(n,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xorshift7=impl}(0,iX,!1);var iY=iX.exports,iq={exports:{}};!function(e,t,r){function XorGen(e){var t=this;t.next=function(){var e,r,n=t.w,i=t.X,a=t.i;return t.w=n=n+1640531527|0,r=i[a+34&127],e=i[a=a+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,r=i[a]=r^e,t.i=a,r+(n^n>>>16)|0},function(e,t){var r,n,i,a,o,s=[],l=128;for(t===(0|t)?(n=t,t=null):(t+="\x00",n=0,l=Math.max(l,t.length)),i=0,a=-32;a<l;++a)t&&(n^=t.charCodeAt((a+32)%t.length)),0===a&&(o=n),n^=n<<10,n^=n>>>15,n^=n<<4,n^=n>>>13,a>=0&&(o=o+1640531527|0,i=0==(r=s[127&a]^=n+o)?i+1:0);for(i>=128&&(s[127&(t&&t.length||0)]=-1),i=127,a=512;a>0;--a)n=s[i+34&127],r=s[i=i+1&127],n^=n<<13,r^=r<<17,n^=n>>>15,r^=r>>>12,s[i]=n^r;e.w=o,e.X=s,e.i=i}(t,e)}function copy(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function impl(e,t){null==e&&(e=+new Date);var r=new XorGen(e),n=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,n&&(n.X&&copy(n,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xor4096=impl}(0,iq,!1);var iK=iq.exports,i$={exports:{}};!function(e,t,r){function XorGen(e){var t=this,r="";t.next=function(){var e=t.b,r=t.c,n=t.d,i=t.a;return e=e<<25^e>>>7^r,r=r-n|0,n=n<<24^n>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^r,t.c=r=r-n|0,t.d=n<<16^r>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):r+=e;for(var n=0;n<r.length+20;n++)t.b^=0|r.charCodeAt(n),t.next()}function copy(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function impl(e,t){var r=new XorGen(e),n=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,n&&("object"==typeof n&&copy(n,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.tychei=impl}(0,i$,!1);var iZ=i$.exports,iJ={exports:{}};!function(e){!function(t,n,i){var a,o="random",s=i.pow(256,6),l=i.pow(2,52),u=2*l;function seedrandom(e,r,d){var c=[],p=mixkey(function flatten(e,t){var r,n=[],i=typeof e;if(t&&"object"==i)for(r in e)try{n.push(flatten(e[r],t-1))}catch(e){}return n.length?n:"string"==i?e:e+"\x00"}((r=!0==r?{entropy:!0}:r||{}).entropy?[e,tostring(n)]:null==e?function(){try{var e;return a&&(e=a.randomBytes)?e=e(256):(e=new Uint8Array(256),(t.crypto||t.msCrypto).getRandomValues(e)),tostring(e)}catch(e){var r=t.navigator,i=r&&r.plugins;return[+new Date,t,i,t.screen,tostring(n)]}}():e,3),c),h=new ARC4(c),prng=function(){for(var e=h.g(6),t=s,r=0;e<l;)e=(e+r)*256,t*=256,r=h.g(1);for(;e>=u;)e/=2,t/=2,r>>>=1;return(e+r)/t};return prng.int32=function(){return 0|h.g(4)},prng.quick=function(){return h.g(4)/4294967296},prng.double=prng,mixkey(tostring(h.S),n),(r.pass||d||function(e,t,r,n){return(n&&(n.S&&copy(n,h),e.state=function(){return copy(h,{})}),r)?(i[o]=e,t):e})(prng,p,"global"in r?r.global:this==i,r.state)}function ARC4(e){var t,r=e.length,n=this,i=0,a=n.i=n.j=0,o=n.S=[];for(r||(e=[r++]);i<256;)o[i]=i++;for(i=0;i<256;i++)o[i]=o[a=255&a+e[i%r]+(t=o[i])],o[a]=t;(n.g=function(e){for(var t,r=0,i=n.i,a=n.j,o=n.S;e--;)t=o[i=255&i+1],r=256*r+o[255&(o[i]=o[a=255&a+t])+(o[a]=t)];return n.i=i,n.j=a,r})(256)}function copy(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function mixkey(e,t){for(var r,n=e+"",i=0;i<n.length;)t[255&i]=255&(r^=19*t[255&i])+n.charCodeAt(i++);return tostring(t)}function tostring(e){return String.fromCharCode.apply(0,e)}if(mixkey(i.random(),n),e.exports){e.exports=seedrandom;try{a=r(6113)}catch(e){}}else i["seed"+o]=seedrandom}("undefined"!=typeof self?self:tH,[],Math)}(iJ);var iQ=iJ.exports;function testEpsilon(){return 32===rc.backend.floatPrecision()?.001:.1}function expectArraysPredicate(e,t,r){var n=!0;if((isTypedArray(e)||isTypedArray(t))&&(n=!1),isTypedArray(e)&&isTypedArray(t)&&(n=!0),n){var i=e.constructor.name,a=t.constructor.name;if(i!==a)throw Error("Arrays are of different type. Actual: ".concat(i,". ")+"Expected: ".concat(a))}if(Array.isArray(e)&&Array.isArray(t)){var o=inferShape(e),s=inferShape(t);if(!arraysEqual(o,s))throw Error("Arrays have different shapes. "+"Actual: [".concat(o,"]. Expected: [").concat(s,"]"))}var l=isTypedArray(e)?e:flatten(e),u=isTypedArray(t)?t:flatten(t);if(l.length!==u.length)throw Error("Arrays have different lengths actual: ".concat(l.length," vs ")+"expected: ".concat(u.length,".\n")+"Actual:   ".concat(l,".\n")+"Expected: ".concat(u,"."));for(var d=0;d<u.length;++d){var c=l[d],p=u[d];if(!r(c,p))throw Error("Arrays differ: actual[".concat(d,"] = ").concat(c,", expected[").concat(d,"] = ").concat(p,".\n")+"Actual:   ".concat(l,".\n")+"Expected: ".concat(u,"."))}"undefined"!=typeof expect&&expect().nothing()}function areClose(e,t,r){return!(isFinite(e)||isFinite(t))||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>r)}iQ.alea=iH,iQ.xor128=iU,iQ.xorwow=iW,iQ.xorshift7=iY,iQ.xor4096=iK,iQ.tychei=iZ;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var i1=function(){function MPRandGauss(e,t,r,n,i){this.mean=e,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=n,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=iQ.alea(a.toString())}return MPRandGauss.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e,t,r=this.nextVal;return this.nextVal=NaN,r}for(var n=!1;!n;){var i=void 0,a=void 0,o=void 0;do o=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(o>=1||0===o);var s=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*i*s,t=this.mean+this.stdDev*a*s,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)},MPRandGauss.prototype.convertValue=function(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)},MPRandGauss.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},MPRandGauss}(),i0=function(){function RandGamma(e,t,r,n){this.alpha=e,this.beta=1/t,this.dtype=r;var i=n||Math.random();this.randu=iQ.alea(i.toString()),this.randn=new i1(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}return RandGamma.prototype.nextValue=function(){for(var e,t,r,n,i,a;;){do n=this.randn.nextValue(),a=1+this.c*n;while(a<=0);if(a*=a*a,t=1-.331*(e=n*n)*e,r=.5*e+this.d*(1-a+Math.log(a)),(i=this.randu())<t||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},RandGamma.prototype.convertValue=function(e){return"float32"===this.dtype?e:Math.round(e)},RandGamma}(),i2=function(){function UniformRandom(e,t,r,n){void 0===e&&(e=0),void 0===t&&(t=1);var i=this;if(this.canReturnFloat=function(){return null==i.dtype||"float32"===i.dtype},this.min=e,this.range=t-e,this.dtype=r,null==n&&(n=Math.random()),"number"==typeof n&&(n=n.toString()),!this.canReturnFloat()&&this.range<=1)throw Error("The difference between ".concat(e," - ").concat(t," <= 1 and dtype is not float"));this.random=iQ.alea(n)}return UniformRandom.prototype.convertValue=function(e){return this.canReturnFloat()?e:Math.round(e)},UniformRandom.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},UniformRandom}(),i4=op({randomGamma_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){if(void 0===r&&(r=1),void 0===n&&(n="float32"),assertNonNegativeIntegerDimensions(e),null==r&&(r=1),null==n&&(n="float32"),"float32"!==n&&"int32"!==n)throw Error("Unsupported data type ".concat(n));for(var a=new i0(t,r,n,i),o=buffer(e,n),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),i3=op({randomNormal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){if(void 0===t&&(t=0),void 0===r&&(r=1),assertNonNegativeIntegerDimensions(e),null!=n&&"bool"===n)throw Error("Unsupported data type ".concat(n));for(var a=new i1(t,r,n,!1,i),o=buffer(e,n),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),i6=op({randomStandardNormal_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){if(null!=t&&"bool"===t)throw Error("Unsupported data type ".concat(t));return i3(e,0,1,t,r)}}),i8=op({randomUniform_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){void 0===t&&(t=0),void 0===r&&(r=1),void 0===n&&(n="float32"),assertNonNegativeIntegerDimensions(e);for(var a=buffer(e,n),o=new i2(t,r,null,i),s=0;s<a.values.length;s++)a.values[s]=o.nextValue();return a.toTensor()}}),i5=op({randomUniformInt_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){return i8(e,t,r,"int32",n)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function range(e,t,r,n){if(void 0===r&&(r=1),void 0===n&&(n="float32"),0===r)throw Error("Cannot have a step of zero");var i={start:e,stop:t,step:r,dtype:n};return rc.runKernel(eJ,{},i)}var i9=op({real_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"input","real");return rc.runKernel(eQ,{input:t})}}),i7=op({reciprocal_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","reciprocal");return rc.runKernel(e1,{x:t})}}),ae=op({relu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","relu");return rc.runKernel(e0,{x:t})}}),ar=op({relu6_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","relu6");return rc.runKernel(e6,{x:t})}}),an=op({reverse_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","reverse");return rc.runKernel(e8,{x:r},{dims:t})}}),ai=op({reverse1d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","reverse");return assert(1===t.rank,function(){return"Error in reverse1D: x must be rank 1 but got rank ".concat(t.rank,".")}),an(t,0)}}),aa=op({reverse2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","reverse");return assert(2===r.rank,function(){return"Error in reverse2D: x must be rank 2 but got rank ".concat(r.rank,".")}),an(r,t)}}),ao=op({reverse3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","reverse");return assert(3===r.rank,function(){return"Error in reverse3D: x must be rank 3 but got rank ".concat(r.rank,".")}),an(r,t)}}),as=op({reverse4d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","reverse");return assert(4===r.rank,function(){return"Error in reverse4D: x must be rank 4 but got rank ".concat(r.rank,".")}),an(r,t)}}),al=op({round_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","round");return rc.runKernel(e5,{x:t})}}),au=op({rsqrt_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","rsqrt","float32");return rc.runKernel(e9,{x:t})}}),ad=op({selu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","selu");return rc.runKernel(tn,{x:t})}}),ac=op({separableConv2d_:function(e,t,r,n,i,a,o){void 0===a&&(a=[1,1]),void 0===o&&(o="NHWC");var s=convertToTensor(e,"x","separableConv2d"),l=convertToTensor(t,"depthwiseFilter","separableConv2d"),u=convertToTensor(r,"pointwiseFilter","separableConv2d"),d=s,c=!1;if(3===s.rank&&(c=!0,d=rZ(s,[1,s.shape[0],s.shape[1],s.shape[2]])),"NCHW"===o)throw Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");assert(4===d.rank,function(){return"Error in separableConv2d: input must be rank 4, but got "+"rank ".concat(d.rank,".")}),assert(4===l.rank,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but "+"got rank ".concat(l.rank,".")}),assert(4===u.rank,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but "+"got rank ".concat(l.rank,".")}),assert(1===u.shape[0],function(){return"Error in separableConv2d: the first dimension of pointwise filter "+" must be 1, but got ".concat(u.shape[0],".")}),assert(1===u.shape[1],function(){return"Error in separableConv2d: the second dimension of pointwise "+"filter must be 1, but got ".concat(u.shape[1],".")});var p=l.shape[2],h=l.shape[3];assert(u.shape[2]===p*h,function(){return"Error in separableConv2d: the third dimension of pointwise filter "+"must be ".concat(p*h,", ")+"but got ".concat(u.shape[2],".")});var f=nc(n_(d,l,n,i,o,a),u,1,"valid",o);return c?rZ(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),ap=op({sign_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","sign");return rc.runKernel(to,{x:t})}}),ah=op({sin_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","sin","float32");return rc.runKernel("Sin",{x:t})}}),af=op({sinh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","sinh");return rc.runKernel(ta,{x:t})}}),am=op({slice1d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","slice1d");return assert(1===n.rank,function(){return"slice1d expects a rank-1 tensor, but got a rank-".concat(n.rank," tensor")}),r4(n,[t],[r])}}),ay=op({slice2d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","slice2d");return assert(2===n.rank,function(){return"slice2d expects a rank-2 tensor, but got a rank-".concat(n.rank," tensor")}),r4(n,t,r)}}),ag=op({slice3d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","slice3d");return assert(3===n.rank,function(){return"slice3d expects a rank-3 tensor, but got a rank-".concat(n.rank," tensor")}),r4(n,t,r)}}),av=op({slice4d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","slice4d");return assert(4===n.rank,function(){return"slice4d expects a rank-4 tensor, but got a rank-".concat(n.rank," tensor")}),r4(n,t,r)}}),ab=op({softmax_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=-1);var r=convertToTensor(e,"logits","softmax","float32");if(-1===t&&(t=r.rank-1),t!==r.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. "+"Logits was rank ".concat(r.rank," and dim was ").concat(t));var n={dim:t};return rc.runKernel(tp,{logits:r},n)}}),aS=op({fft_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return assert("complex64"===e.dtype,function(){return"The dtype for tf.spectral.fft() must be complex64 "+"but got ".concat(e.dtype,".")}),rc.runKernel("FFT",{input:e})}}),ax=op({ifft_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return assert("complex64"===e.dtype,function(){return"The dtype for tf.spectral.ifft() must be complex64 "+"but got ".concat(e.dtype,".")}),rc.runKernel(eg,{input:e})}}),aP=op({irfft_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t,r=e.shape[e.shape.length-1],n=e.size/r;if(r<=2){var i=rZ(e,[n,r]);t=ax(i)}else{var a=[n,2*(r-1)],o=rZ(i9(e),[n,r]),s=rZ(nQ(e),[n,r]),l=an(r4(o,[0,1],[n,r-2]),1),u=rN(an(r4(s,[0,1],[n,r-2]),1),scalar(-1)),i=rZ(rf(r1([o,l],1),r1([s,u],1)),[a[0],a[1]]);t=ax(i)}if(t=i9(t),3===e.rank&&0!==e.shape[0]){var d=t,c=e.shape[0];t=rZ(t,[c,t.shape[0]/c,t.shape[1]]),d.dispose()}return t}}),aC=op({split_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===r&&(r=0);var n=convertToTensor(e,"x","split"),i={numOrSizeSplits:t,axis:r};return rc.runKernel(tc,{x:n},i)}}),a_=op({rfft_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){assert("float32"===e.dtype,function(){return"The dtype for rfft() must be real value but got ".concat(e.dtype)});var r,n=e.shape[e.shape.length-1],i=e.size/n;if(null!=t&&t<n){var a=e.shape.map(function(e){return 0}),o=e.shape.map(function(e){return e});o[e.shape.length-1]=t,r=r4(e,a,o),n=t}else if(null!=t&&t>n){var s=e.shape.map(function(e){return e});s[e.shape.length-1]=t-n,r=r1([e,zeros(s)],e.shape.length-1),n=t}else r=e;var l=nD(r),u=aS(rZ(rf(r,l),[i,n])),d=Math.floor(n/2)+1,c=i9(u),p=nQ(u),h=aC(c,[d,n-d],c.shape.length-1),f=aC(p,[d,n-d],p.shape.length-1),m=r.shape.slice();return m[r.shape.length-1]=d,rZ(rf(h[0],f[0]),m)}}),aA=op({squaredDifference_:function(e,t){var r,n=convertToTensor(e,"a","squaredDifference"),i=convertToTensor(t,"b","squaredDifference");n=(r=__read(makeTypesMatch(n,i),2))[0],i=r[1],assertAndGetBroadcastShape(n.shape,i.shape);var a={a:n,b:i};return rc.runKernel(tv,a,{})}}),aT=op({squeeze_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","squeeze","string_or_numeric");return rZ(r,squeezeShape(r.shape,t).newShape)}}),aw=op({stack_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensorArray(e,"tensors","stack","string_or_numeric");assert(r.length>=1,function(){return"Pass at least one tensor to tf.stack"}),r.length>0&&assert(t<=r[0].rank,function(){return"Axis must be <= rank of the tensor"});var n={axis:t};return rc.runKernel(eW,r,n)}}),aE=op({step_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","step"),n={alpha:t};return rc.runKernel(tk,{x:r},n)}}),aD=op({stridedSlice_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o,s,l){void 0===i&&(i=0),void 0===a&&(a=0),void 0===o&&(o=0),void 0===s&&(s=0),void 0===l&&(l=0);var u=convertToTensor(e,"x","stridedSlice","string_or_numeric"),d={begin:t,end:r,strides:n,beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:l};return rc.runKernel(tS,{x:u},d)}}),aO=op({tan_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","tan","float32");return rc.runKernel("Tan",{x:t})}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tensor1d(e,t){assertNonNull(e);var r=inferShape(e,t);if(1!==r.length)throw Error("tensor1d() requires values to be a flat/TypedArray");return makeTensor(e,null,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tensor2d(e,t,r){if(assertNonNull(e),null!=t&&2!==t.length)throw Error("tensor2d() requires shape to have two numbers");var n=inferShape(e,r);if(2!==n.length&&1!==n.length)throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===n.length&&null==t)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return makeTensor(e,t,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tensor3d(e,t,r){if(assertNonNull(e),null!=t&&3!==t.length)throw Error("tensor3d() requires shape to have three numbers");var n=inferShape(e,r);if(3!==n.length&&1!==n.length)throw Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===n.length&&null==t)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return makeTensor(e,t,n,r)}function validateUpdateShape(e,t,r){var n=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + "+"shape[sliceDim:], got updates.shape: ".concat(r.shape)+", indices.shape: ".concat(t.shape,", shape: ").concat(e)+", sliceDim: ".concat(n,", and batchDim: ").concat(i,".");if(r.rank<i)throw Error(a+" update.rank < ".concat(i,". "));if(e.length<n+(r.rank-i))throw Error(a+" Output shape length < ".concat(n+(r.rank-i)));if(r.rank!==i+e.length-n)throw Error(a+" update.rank != ".concat(i+e.length-n));for(var o=0;o<i;++o)if(r.shape[o]!==t.shape[o])throw Error(a+" updates.shape[".concat(o,"] (").concat(r.shape[o],") != indices.shape[").concat(o,"] (").concat(t.shape[o],")."));for(var o=0;o<r.rank-i;++o)if(r.shape[o+i]!==e[o+n])throw Error(a+" updates.shape[".concat(o+i,"] (").concat(r.shape[o+i],") != shape[").concat(o+i,"] (").concat(e[o+i],")"))}function validateInput$1(e,t,r){if(t.rank<1)throw Error("tf.scatterND() expects the indices to be rank 1 or higher,"+" but the rank was ".concat(t.rank,"."));if(e.rank<1)throw Error("tf.scatterND() expects the updates to be rank 1 or higher,"+" but the rank was ".concat(e.rank,"."));if("int32"!==t.dtype)throw Error("The dtype of 'indices' should be int32, but got dtype: ".concat(t.dtype));if(r.length<1)throw Error("Output rank must be greater or equal to 1, but got shape: ".concat(r));if(0===r.length){if(0===t.size)throw Error("Indices specified for empty output. indices shape: ".concat(t.shape));if(0===e.size)throw Error("Updates specified for empty output. updates shape: ".concat(e.shape))}validateUpdateShape(r,t,e)}function calculateShapes(e,t,r){for(var n=t.shape.length,i=n>1?t.shape[n-1]:1,a=r.length,o=1,s=i;s<a;++s)o*=r[s];var l=i<1?1:i,u=sizeFromShape(t.shape)/l,d=__spreadArray(__spreadArray([],__read(computeStrides(r.slice(0,i))),!1),[1],!1);return{sliceRank:i,numUpdates:u,sliceSize:o,strides:d,outputSize:sizeFromShape(r)}}var aR=op({tensorScatterUpdate_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"tensor","tensorScatterupdate"),i=convertToTensor(t,"indices","tensorScatterupdate","int32"),a=convertToTensor(r,"updates","tensorScatterupdate");if(validateInput$1(a,i,n.shape),n.dtype!==a.dtype)throw Error("tensor and updates must have the same dtype, instead they are ".concat(n.dtype," and ").concat(a.dtype,"."));return rc.runKernel(te,{tensor:n,indices:i,updates:a},{})}}),aM=op({topk_:function(e,t,r){void 0===t&&(t=1),void 0===r&&(r=!0);var n=convertToTensor(e,"x","topk");if(0===n.rank)throw Error("topk() expects the input to be of rank 1 or higher");var i=n.shape[n.shape.length-1];if(t<0)throw Error("'k' passed to topk() must be >= 0 but got ".concat(t));if(t>i)throw Error("'k' passed to topk() must be <= the last dimension (".concat(i,") ")+"but got ".concat(t));var a={k:t,sorted:r},o=__read(rc.runKernel(tT,{x:n},a),2);return{values:o[0],indices:o[1]}}}),ak=op({truncatedNormal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){if(void 0===t&&(t=0),void 0===r&&(r=1),assertNonNegativeIntegerDimensions(e),null!=n&&"bool"===n)throw Error("Unsupported data type $ { dtype }");for(var a=new i1(t,r,n,!0,i),o=buffer(e,n),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),aL=op({unique_:function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","unique","string_or_numeric");assert(r.rank>0,function(){return"The input tensor must be at least 1D"});var n={axis:t},i=__read(rc.runKernel(tD,{x:r},n),2);return{values:i[0],indices:i[1]}}}),aI=op({unsortedSegmentSum_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","unsortedSegmentSum"),i=convertToTensor(t,"segmentIds","unsortedSegmentSum","int32");return assert(isInt(r),function(){return"numSegments must be of dtype int"}),rc.runKernel(tR,{x:n,segmentIds:i},{numSegments:r})}}),aB=op({unstack_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","unstack","string_or_numeric");assert(t>=-r.shape.length&&t<r.shape.length,function(){return"Axis = ".concat(t," is not in [-").concat(r.shape.length,", ").concat(r.shape.length,")")});var n={axis:t};return rc.runKernel(tO,{value:r},n)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function whereImpl(e,t){for(var r=[],n=0;n<t.length;n++)t[n]&&r.push(n);for(var i=buffer(e,"int32"),a=buffer([r.length,e.length],"int32"),n=0;n<r.length;n++){var o=i.indexToLoc(r[n]),s=n*e.length;a.values.set(o,s)}return a.toTensor()}var whereAsync=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(i){switch(i.label){case 0:return[4,(t=convertToTensor(e,"condition","whereAsync","bool")).data()];case 1:return r=i.sent(),n=whereImpl(t.shape,r),e!==t&&t.dispose(),[2,n]}})})},aN=op({transpose_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"x","transpose");if(null==t&&(t=n.shape.map(function(e,t){return t}).reverse()),assert(n.rank===t.length,function(){return"Error in transpose: rank of input ".concat(n.rank," ")+"must match length of perm ".concat(t,".")}),t.forEach(function(e){assert(e>=0&&e<n.rank,function(){return"All entries in 'perm' must be between 0 and ".concat(n.rank-1)+" but got ".concat(t)})}),n.rank<=1)return n.clone();var i={perm:t};return"complex64"===n.dtype?tidy(function(){var e=i9(n),t=nQ(n);return e=rc.runKernel(tE,{x:e},i),t=rc.runKernel(tE,{x:t},i),r&&(t=n7(t)),rf(e,t)}):rc.runKernel(tE,{x:n},i)}}),aF=op({movingAverage_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){void 0===i&&(i=!0);var a=convertToTensor(e,"v","movingAverage"),o=convertToTensor(t,"x","movingAverage"),s=convertToTensor(r,"decay","movingAverage");assertTypesMatch(a,o),assert(arraysEqual(a.shape,o.shape),function(){return"Shape mismatch in v and x"});var l=scalar(1),u=ir(l,s),d=rN(ir(o,a),u);return i&&(assert(null!=n,function(){return"When using zeroDebias: true, step is required."}),d=rB(d,ir(l,nF(s,convertToTensor(n,"step","movingAverage"))))),rL(a,d)}}),aV=op({scatterND_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){assertNonNegativeIntegerDimensions(r);var n=convertToTensor(e,"indices","scatterND","int32"),i=convertToTensor(t,"updates","scatterND");return validateInput$1(i,n,r),rc.runKernel(e7,{indices:n,updates:i},{shape:r})}}),aj=op({sparseToDense_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===n&&(n=0),assertNonNegativeIntegerDimensions(r);var i=convertToTensor(e,"sparseIndices","sparseToDense","int32"),a=convertToTensor(t,"sparseValues","sparseToDense","string_or_numeric"),o=convertToTensor(n,"defaultValue","sparseToDense",a.dtype);return function(e,t,r,n){if("int32"!==e.dtype)throw Error("tf.sparseToDense() expects the indices to be int32 type,"+" but the dtype was ".concat(e.dtype,"."));if(e.rank>2)throw Error("sparseIndices should be a scalar, vector, or matrix,"+" but got shape ".concat(e.shape,"."));var i=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(r.length!==a)throw Error("outputShape has incorrect number of elements:,"+" ".concat(r.length,", should be: ").concat(a,"."));var o=t.size;if(!(0===t.rank||1===t.rank&&o===i))throw Error("sparseValues has incorrect shape "+"".concat(t.shape,", should be [] or [").concat(i,"]"));if(t.dtype!==n.dtype)throw Error("sparseValues.dtype must match defaultValues.dtype")}(i,a,r,o),rc.runKernel(tg,{sparseIndices:i,sparseValues:a,defaultValue:o},{outputShape:r})}}),aH=op({gatherND_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(t,"indices","gatherND","int32"),n=convertToTensor(e,"x","gatherND","string_or_numeric");return rc.runKernel(eh,{params:n,indices:r})}}),az=op({dropout_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){var i=convertToTensor(e,"x","dropout");if(assert("float32"===i.dtype,function(){return"x has to be a floating point tensor since it's going to be "+"scaled, but got a ".concat(i.dtype," tensor instead.")}),assert(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got ".concat(t,".")}),0===t)return e instanceof ro?i.clone():i;var a=/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){if(null==t)return e.shape.slice();if(arraysEqual(e.shape,t))return t;if(e.shape.length===t.length){for(var r=[],n=0;n<e.shape.length;n++)null==t[n]&&null!=e.shape[n]?r.push(e.shape[n]):r.push(t[n]);return r}return t}(i,r),o=1-t;return rN(i,rB(nK(rL(i8(a,0,1,"float32",n),o)),o))}});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function enclosingPowerOfTwo(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function cosineWindow(e,t,r){for(var n=1-e%2,i=new Float32Array(e),a=0;a<e;++a){var o=2*Math.PI*a/(e+n-1);i[a]=t-r*Math.cos(o)}return tensor1d(i,"float32")}var aU=op({conv2DBackpropFilter_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o){void 0===a&&(a="NHWC");var s=e;3===e.rank&&(s=rZ(e,[1,e.shape[0],e.shape[1],e.shape[2]]));var l=t;3===l.rank&&(l=rZ(t,[1,t.shape[0],t.shape[1],t.shape[2]])),assert(4===s.rank,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+"".concat(s.shape,".")}),assert(4===l.rank,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+"".concat(l.shape,".")}),assert(4===r.length,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+"".concat(r,".")});var u="NHWC"===a?s.shape[3]:s.shape[1],d="NHWC"===a?l.shape[3]:l.shape[1];assert(u===r[2],function(){return"Error in conv2dDerFilter: depth of input ".concat(u,") must ")+"match input depth in filter (".concat(r[2],".")}),assert(d===r[3],function(){return"Error in conv2dDerFilter: depth of dy (".concat(d,") must ")+"match output depth for filter (".concat(r[3],").")}),checkPadOnDimRoundingMode("conv2dDerFilter",i,o);var c={x:s,dy:l},p={strides:n,pad:i,dataFormat:a,dimRoundingMode:o,filterShape:r};return rc.runKernel(j,c,p)}});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function getFusedDyActivation(e,t,r){if(null==r||"linear"===r)return e;if("relu"===r)return rN(e,aE(t));throw Error("Cannot compute gradient for fused activation ".concat(r,"."))}function getFusedBiasGradient(e,t){var r=t,n=getReductionAxes(e.shape,t.shape);return n.length>0&&(r=nH(r,n)),rZ(r,e.shape)}function applyActivation(e,t,r,n){if("linear"===t)return e;if("relu"===t)return ae(e);if("elu"===t)return nk(e);if("relu6"===t)return ar(e);if("prelu"===t)return iL(e,r);if("leakyrelu"===t)return n4(e,n);if("sigmoid"===t)return r2(e);throw Error("Unknown fused activation ".concat(t,"."))}var shouldFuse=function(e,t){return!(e>0)||"linear"===t},aG=op({fusedConv2d_:function(e){var t,r,n=e.x,i=e.filter,a=e.strides,o=e.pad,s=e.dataFormat,l=void 0===s?"NHWC":s,u=e.dilations,d=void 0===u?[1,1]:u,c=e.dimRoundingMode,p=e.bias,h=e.activation,f=void 0===h?"linear":h,m=e.preluActivationWeights,y=e.leakyreluAlpha;if(f=f||"linear",!1===shouldFuse(rc.state.gradientDepth,f)){assert("NHWC"===l,function(){return"Error in fused conv2d: got dataFormat of ".concat(l," but ")+"only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear."});var g=nc(n,i,a,o,l,d,c);return null!=p&&(g=rL(g,p)),applyActivation(g,f,m,y)}var v=convertToTensor(n,"x","conv2d","float32"),b=convertToTensor(i,"filter","conv2d","float32"),S=v,x=!1;3===v.rank&&(x=!0,S=rZ(v,[1,v.shape[0],v.shape[1],v.shape[2]])),assert(4===S.rank,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+"".concat(S.rank,".")}),assert(4===b.rank,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+"".concat(b.rank,".")}),checkPadOnDimRoundingMode("fused conv2d",o,c);var P="NHWC"===l?S.shape[3]:S.shape[1];assert(b.shape[2]===P,function(){return"Error in conv2d: depth of input (".concat(P,") must match ")+"input depth for filter ".concat(b.shape[2],".")}),assert(eitherStridesOrDilationsAreOne(a,d),function(){return"Error in conv2D: Either strides or dilations must be 1. "+"Got strides ".concat(a," and dilations '").concat(d,"'")});var C=computeConv2DInfo(S.shape,b.shape,a,d,o,c);if(null!=p&&(t=__read(makeTypesMatch(t=convertToTensor(p,"bias","fused conv2d"),v),1)[0],"NHWC"===l?assertAndGetBroadcastShape(C.outShape,t.shape):(assert(t.shape.length<=1,function(){return"Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of "+"rank-".concat(t.shape.length,".")}),assert(0===t.shape.length||t.shape[0]===C.outChannels||1===t.shape[0],function(){return"Error in fused conv2d: bias shape (".concat(t.shape,") is not ")+"compatible with the number of output channels "+"(".concat(C.outChannels,")")}))),null!=m){var _=m.shape;if(assert(_.length<=1||3===_.length,function(){return"Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of "+"rank-".concat(_.length,".")}),1===_.length)assert(1===_[0]||_[0]===C.outChannels,function(){return"Error in fused conv2d: PReLU activation weights "+"(".concat(_,") is not compatible with the number of output ")+"channels (".concat(C.outChannels,").")});else if(3===_.length)try{assertAndGetBroadcastShape(_,C.outShape)}catch(e){throw Error("Error in fused conv2d: PReLU activation weights (".concat(_,") ")+"is not compatible with the output shape of the conv2d "+"(".concat(C.outShape,")."))}r=convertToTensor(m,"prelu weights","fused conv2d")}var grad=function(e,t){assert("NHWC"===l,function(){return"Error in gradient of fused conv2D: got dataFormat of ".concat(l," but only NHWC is currently supported.")});var r=__read(t,4),n=r[0],i=r[1],s=r[2],u=r[3],c=getFusedDyActivation(e,s,f);assert(tupleValuesAreOne(d),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 "+"are not yet supported in gradients. Got dilations '".concat(d,"'")});var p=[nh(i.shape,c,n,a,o),aU(i,c,n.shape,a,o)];if(null!=u){var h=getFusedBiasGradient(u,c);p.push(h)}return p},A={x:S,filter:b,bias:t,preluActivationWeights:r},T={strides:a,pad:o,dataFormat:l,dilations:d,dimRoundingMode:c,activation:f,leakyreluAlpha:y};return null==p?customGrad(function(e,t,r){var n=rc.runKernel(tN,A,T);return r([t,e,n]),x&&(n=rZ(n,[n.shape[1],n.shape[2],n.shape[3]])),{value:n,gradFunc:grad}})(S,b):customGrad(function(e,t,r,n){var i=rc.runKernel(tN,A,T);return n([t,e,i,r]),x&&(i=rZ(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:grad}})(S,b,t)}}),aW=op({depthwiseConv2dNativeBackpropFilter_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o){void 0===a&&(a=[1,1]);var s=e;3===e.rank&&(s=rZ(e,[1,e.shape[0],e.shape[1],e.shape[2]]));var l=t;3===l.rank&&(l=rZ(t,[1,t.shape[0],t.shape[1],t.shape[2]]));var u={x:s,dy:l},d={strides:n,pad:i,dimRoundingMode:o,dilations:a,filterShape:r};return rc.runKernel(Z,u,d)}}),aX=op({depthwiseConv2dNativeBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o){void 0===a&&(a=[1,1]);var s=t,l=!1;3===t.rank&&(l=!0,s=rZ(t,[1,t.shape[0],t.shape[1],t.shape[2]]));var u={dy:s,filter:r},d={strides:n,pad:i,dimRoundingMode:o,dilations:a,inputShape:e},c=rc.runKernel(J,u,d);return l?rZ(c,[c.shape[1],c.shape[2],c.shape[3]]):c}}),aY=op({fusedDepthwiseConv2d_:function(e){var t,r,n=e.x,i=e.filter,a=e.strides,o=e.pad,s=e.dataFormat,l=void 0===s?"NHWC":s,u=e.dilations,d=void 0===u?[1,1]:u,c=e.dimRoundingMode,p=e.bias,h=e.activation,f=void 0===h?"linear":h,m=e.preluActivationWeights,y=e.leakyreluAlpha;if(!1===shouldFuse(rc.state.gradientDepth,f)){var g=n_(n,i,a,o,l,d,c);return null!=p&&(g=rL(g,p)),applyActivation(g,f,m,y)}var v=convertToTensor(n,"x","depthwiseConv2d","float32"),b=convertToTensor(i,"filter","depthwiseConv2d","float32"),S=v,x=!1;3===v.rank&&(x=!0,S=rZ(v,[1,v.shape[0],v.shape[1],v.shape[2]])),assert(4===S.rank,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got "+"rank ".concat(S.rank,".")}),assert(4===b.rank,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, "+"but got rank ".concat(b.rank,".")}),assert(S.shape[3]===b.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels "+"(".concat(S.shape[3],") must match the inChannels dimension in ")+"filter ".concat(b.shape[2],".")}),null==d&&(d=[1,1]),assert(eitherStridesOrDilationsAreOne(a,d),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must "+"be 1. Got strides ".concat(a," and dilations '").concat(d,"'")}),checkPadOnDimRoundingMode("fused depthwiseConv2d",o,c);var P=computeConv2DInfo(S.shape,b.shape,a,d,o,c,!0);null!=p&&(t=__read(makeTypesMatch(t=convertToTensor(p,"bias","fused conv2d"),v),1)[0],assertAndGetBroadcastShape(P.outShape,t.shape)),null!=m&&(r=convertToTensor(m,"prelu weights","fused depthwiseConv2d"));var grad=function(e,r){assert(tupleValuesAreOne(d),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations "+"'".concat(d,"'")});var n=__read(r,4),i=n[0],s=n[1],l=n[2],u=n[3],p=getFusedDyActivation(e,l,f),h=aX(s.shape,p,i,a,o,d,c),m=aW(s,p,i.shape,a,o,d,c);return null!=u?[h,m,getFusedBiasGradient(t,p)]:[h,m]},C={x:S,filter:b,bias:t,preluActivationWeights:r},_={strides:a,pad:o,dataFormat:l,dilations:d,dimRoundingMode:c,activation:f,leakyreluAlpha:y};return null==p?customGrad(function(e,t,r){var n=rc.runKernel(tF,C,_);return r([t,e,n]),x&&(n=rZ(n,[n.shape[1],n.shape[2],n.shape[3]])),{value:n,gradFunc:grad}})(S,b):customGrad(function(e,t,r,n){var i=rc.runKernel(tF,C,_);return n([t,e,i,r]),x&&(i=rZ(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:grad}})(S,b,t)}}),aq=op({fusedMatMul_:function(e){var t,r,n,i=e.a,a=e.b,o=e.transposeA,s=void 0!==o&&o,l=e.transposeB,u=void 0!==l&&l,d=e.bias,c=e.activation,p=void 0===c?"linear":c,h=e.preluActivationWeights,f=e.leakyreluAlpha,m=void 0===f?.2:f;if(!1===shouldFuse(rc.state.gradientDepth,p)){var y=r0(i,a,s,u);return null!=d&&(y=rL(y,d)),applyActivation(y,p,h,m)}var g=convertToTensor(i,"a","fused matMul"),v=convertToTensor(a,"b","fused matMul");g=(t=__read(makeTypesMatch(g,v),2))[0],v=t[1];var b=s?g.shape[g.rank-2]:g.shape[g.rank-1],S=u?v.shape[v.rank-1]:v.shape[v.rank-2],x=s?g.shape[g.rank-1]:g.shape[g.rank-2],P=u?v.shape[v.rank-2]:v.shape[v.rank-1],C=g.shape.slice(0,-2),_=v.shape.slice(0,-2),A=sizeFromShape(C),T=sizeFromShape(_);assert(b===S,function(){return"Error in fused matMul: inner shapes (".concat(b,") and (")+"".concat(S,") of Tensors with shapes ").concat(g.shape," and ")+"".concat(v.shape," and transposeA=").concat(s)+" and transposeB=".concat(u," must match.")});var w=assertAndGetBroadcastShape(g.shape.slice(0,-2),v.shape.slice(0,-2)).concat([x,P]),E=s?rZ(g,[A,b,x]):rZ(g,[A,x,b]),D=u?rZ(v,[T,P,S]):rZ(v,[T,S,P]);null!=d&&assertAndGetBroadcastShape(w,(r=__read(makeTypesMatch(r=convertToTensor(d,"bias","fused matMul"),g),1)[0]).shape),null!=h&&(n=convertToTensor(h,"prelu weights","fused matMul"));var grad=function(e,t){var r,n,i=__read(t,4),a=i[0],o=i[1],l=i[2],c=i[3],h=getFusedDyActivation(rZ(e,l.shape),l,p);return(s||u?!s&&u?(r=r0(h,o,!1,!1),n=r0(h,a,!0,!1)):s&&!u?(r=r0(o,h,!1,!0),n=r0(a,h,!1,!1)):(r=r0(o,h,!0,!0),n=r0(h,a,!0,!0)):(r=r0(h,o,!1,!0),n=r0(a,h,!0,!1)),null!=d)?[r,n,getFusedBiasGradient(c,h)]:[r,n]},O={a:E,b:D,bias:r,preluActivationWeights:n},R={transposeA:s,transposeB:u,activation:p,leakyreluAlpha:m};return null==d?customGrad(function(e,t,r){var n=rc.runKernel(tB,O,R);return r([e,t,n]),{value:rZ(n,w),gradFunc:grad}})(E,D):customGrad(function(e,t,r,n){var i=rc.runKernel(tB,O,R);return n([e,t,i,r]),{value:rZ(i,w),gradFunc:grad}})(E,D,r)}}),aK=op({hammingWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return cosineWindow(e,.54,.46)}}),a$=op({hannWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return cosineWindow(e,.5,.5)}}),aZ=op({frame_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){void 0===n&&(n=!1),void 0===i&&(i=0);for(var a=0,o=[];a+t<=e.size;)o.push(r4(e,a,t)),a+=r;if(n)for(;a<e.size;){var s=a+t-e.size,l=r1([r4(e,a,t-s),fill([s],i)]);o.push(l),a+=r}return 0===o.length?tensor2d([],[0,t]):rZ(r1(o),[o.length,t])}}),aJ=op({stft_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){return void 0===i&&(i=a$),null==n&&(n=enclosingPowerOfTwo(t)),a_(rN(aZ(e,t,r),i(t)),n)}}),aQ=op({cropAndResize_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===i&&(i="bilinear"),void 0===a&&(a=0);var o=convertToTensor(e,"image","cropAndResize"),s=convertToTensor(t,"boxes","cropAndResize","float32"),l=convertToTensor(r,"boxInd","cropAndResize","int32"),u=s.shape[0];assert(4===o.rank,function(){return"Error in cropAndResize: image must be rank 4,"+"but got rank ".concat(o.rank,".")}),assert(2===s.rank&&4===s.shape[1],function(){return"Error in cropAndResize: boxes must be have size [".concat(u,",4] ")+"but had shape ".concat(s.shape,".")}),assert(1===l.rank&&l.shape[0]===u,function(){return"Error in cropAndResize: boxInd must be have size [".concat(u,"] ")+"but had shape ".concat(s.shape,".")}),assert(2===n.length,function(){return"Error in cropAndResize: cropSize must be of length 2, but got "+"length ".concat(n.length,".")}),assert(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was ".concat(n)}),assert("bilinear"===i||"nearest"===i,function(){return"method must be bilinear or nearest, but was ".concat(i)});var d={method:i,extrapolationValue:a,cropSize:n};return rc.runKernel(Y,{image:o,boxes:s,boxInd:l},d)}}),a1=op({flipLeftRight_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"image","flipLeftRight","float32");return assert(4===t.rank,function(){return"Error in flipLeftRight: image must be rank 4,"+"but got rank ".concat(t.rank,".")}),rc.runKernel(el,{image:t},{})}}),a0=op({grayscaleToRGB_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"image","grayscaleToRGB"),r=t.rank-1,n=t.shape[r];assert(t.rank>=2,function(){return"Error in grayscaleToRGB: images must be at least rank 2, "+"but got rank ".concat(t.rank,".")}),assert(1===n,function(){return"Error in grayscaleToRGB: last dimension of a grayscale image "+"should be size 1, but got size ".concat(n,".")});var i=Array(t.rank);return i.fill(1,0,r),i[r]=3,nY(t,i)}}),a2=op({rgbToGrayscale_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t,r=convertToTensor(e,"image","RGBToGrayscale"),n=r.rank-1,i=r.shape[n];assert(r.rank>=2,function(){return"Error in RGBToGrayscale: images must be at least rank 2, "+"but got rank ".concat(r.rank,".")}),assert(3===i,function(){return"Error in RGBToGrayscale: last dimension of an RGB image "+"should be size 3, but got size ".concat(i,".")});var a=r.dtype,o=rM(r,"float32"),s=tensor1d([.2989,.587,.114]);switch(r.rank){case 2:t=nM("ij,j->i",o,s);break;case 3:t=nM("ijk,k->ij",o,s);break;case 4:t=nM("ijkl,l->ijk",o,s);break;case 5:t=nM("ijklm,m->ijkl",o,s);break;case 6:t=nM("ijklmn,n->ijklm",o,s);break;default:throw Error("Not a valid tensor rank.")}return rM(t=nW(t,-1),a)}}),a4=op({rotateWithOffset_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===r&&(r=0),void 0===n&&(n=.5);var i=convertToTensor(e,"image","rotateWithOffset","float32");assert(4===i.rank,function(){return"Error in rotateWithOffset: image must be rank 4,"+"but got rank ".concat(i.rank,".")});var a={radians:t,fillValue:r,center:n};return rc.runKernel(tI,{image:i},a)}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nonMaxSuppSanityCheck(e,t,r,n,i,a){null==n&&(n=.5),null==i&&(i=Number.NEGATIVE_INFINITY),null==a&&(a=0);var o=e.shape[0];return r=Math.min(r,o),assert(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '".concat(n,"'")}),assert(2===e.rank,function(){return"boxes must be a 2D tensor, but was of rank '".concat(e.rank,"'")}),assert(4===e.shape[1],function(){return"boxes must have 4 columns, but 2nd dimension was ".concat(e.shape[1])}),assert(1===t.rank,function(){return"scores must be a 1D tensor"}),assert(t.shape[0]===o,function(){return"scores has incompatible shape with boxes. Expected ".concat(o,", ")+"but was ".concat(t.shape[0])}),assert(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '".concat(a,"'")}),{maxOutputSize:r,iouThreshold:n,scoreThreshold:i,softNmsSigma:a}}var a3=op({nonMaxSuppression_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i){void 0===n&&(n=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY);var a=convertToTensor(e,"boxes","nonMaxSuppression","float32"),o=convertToTensor(t,"scores","nonMaxSuppression","float32"),s=nonMaxSuppSanityCheck(a,o,r,n,i),l={maxOutputSize:r=s.maxOutputSize,iouThreshold:n=s.iouThreshold,scoreThreshold:i=s.scoreThreshold};return rc.runKernel(ej,{boxes:a,scores:o},l)}});function defaultComparator(e,t){return e>t?1:e<t?-1:0}function nonMaxSuppressionV3Impl(e,t,r,n,i){return nonMaxSuppressionImpl_(e,t,r,n,i,0)}function nonMaxSuppressionV4Impl(e,t,r,n,i,a){return nonMaxSuppressionImpl_(e,t,r,n,i,0,!1,a,!0)}function nonMaxSuppressionV5Impl(e,t,r,n,i,a){return nonMaxSuppressionImpl_(e,t,r,n,i,a,!0)}function nonMaxSuppressionImpl_(e,t,r,n,i,a,o,s,l){void 0===o&&(o=!1),void 0===s&&(s=!1),void 0===l&&(l=!1);for(var u=[],d=0;d<t.length;d++)t[d]>i&&u.push({score:t[d],boxIndex:d,suppressBeginIndex:0});u.sort(ascendingComparator);for(var c=a>0?-.5/a:0,p=[],h=[];p.length<r&&u.length>0;){var f=u.pop(),m=f.score,y=f.boxIndex,g=f.suppressBeginIndex;if(m<i)break;for(var v=!1,b=p.length-1;b>=g;--b){var S=function(e,t,r){var n=e.subarray(4*t,4*t+4),i=e.subarray(4*r,4*r+4),a=Math.min(n[0],n[2]),o=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),l=Math.max(n[1],n[3]),u=Math.min(i[0],i[2]),d=Math.min(i[1],i[3]),c=Math.max(i[0],i[2]),p=Math.max(i[1],i[3]),h=(s-a)*(l-o),f=(c-u)*(p-d);if(h<=0||f<=0)return 0;var m=Math.max(Math.min(s,c)-Math.max(a,u),0)*Math.max(Math.min(l,p)-Math.max(o,d),0);return m/(h+f-m)}(e,y,p[b]);if(S>=n){v=!0;break}if(f.score=f.score*function(e,t,r){var n=Math.exp(t*r*r);return r<=e?n:0}(n,c,S),f.score<=i)break}f.suppressBeginIndex=p.length,!v&&(f.score===m?(p.push(y),h.push(f.score)):f.score>i&&/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=function(e,t,r){for(var n=0,i=e.length,a=0,o=!1;n<i;){var s=r(t,e[a=n+(i-n>>>1)]);s>0?n=a+1:(i=a,o=!s)}return o?n:-n-1}(e,t,r||defaultComparator),i=n<0?-(n+1):n;e.splice(i,0,t)}(u,f,ascendingComparator))}var x=p.length,P=r-x;s&&P>0&&(p.push.apply(p,__spreadArray([],__read(Array(P).fill(0)),!1)),h.push.apply(h,__spreadArray([],__read(Array(P).fill(0)),!1)));var C={selectedIndices:p};return o&&(C.selectedScores=h),l&&(C.validOutputs=x),C}function ascendingComparator(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}var a6=op({nonMaxSuppressionWithScore_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===n&&(n=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),void 0===a&&(a=0);var o=convertToTensor(e,"boxes","nonMaxSuppression"),s=convertToTensor(t,"scores","nonMaxSuppression"),l=nonMaxSuppSanityCheck(o,s,r,n,i,a);r=l.maxOutputSize,n=l.iouThreshold;var u={maxOutputSize:r,iouThreshold:n,scoreThreshold:i=l.scoreThreshold,softNmsSigma:a=l.softNmsSigma},d=rc.runKernel(ez,{boxes:o,scores:s},u);return{selectedIndices:d[0],selectedScores:d[1]}}}),a8=op({nonMaxSuppressionPadded_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===n&&(n=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),void 0===a&&(a=!1);var o=convertToTensor(e,"boxes","nonMaxSuppression"),s=convertToTensor(t,"scores","nonMaxSuppression"),l=nonMaxSuppSanityCheck(o,s,r,n,i,null),u={maxOutputSize:l.maxOutputSize,iouThreshold:l.iouThreshold,scoreThreshold:l.scoreThreshold,padToMaxOutputSize:a},d=rc.runKernel(eH,{boxes:o,scores:s},u);return{selectedIndices:d[0],validOutputs:d[1]}}}),a5=op({resizeBilinear_:function(e,t,r,n){void 0===r&&(r=!1),void 0===n&&(n=!1);var i=convertToTensor(e,"images","resizeBilinear");assert(3===i.rank||4===i.rank,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got "+"rank ".concat(i.rank,".")}),assert(2===t.length,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+"".concat(t,".")}),assert(!1===n||!1===r,function(){return"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."});var a=i,o=!1;3===i.rank&&(o=!0,a=rZ(i,[1,i.shape[0],i.shape[1],i.shape[2]])),__read(t,0);var s={images:a},l={alignCorners:r,halfPixelCenters:n,size:t},u=rc.runKernel(e3,s,l);return o?rZ(u,[u.shape[1],u.shape[2],u.shape[3]]):u}}),a9=op({resizeNearestNeighbor_:function(e,t,r,n){void 0===r&&(r=!1),void 0===n&&(n=!1);var i=convertToTensor(e,"images","resizeNearestNeighbor");assert(3===i.rank||4===i.rank,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got "+"rank ".concat(i.rank,".")}),assert(2===t.length,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+"".concat(t,".")}),assert("float32"===i.dtype||"int32"===i.dtype,function(){return"`images` must have `int32` or `float32` as dtype"}),assert(!1===n||!1===r,function(){return"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."});var a=i,o=!1;3===i.rank&&(o=!0,a=rZ(i,[1,i.shape[0],i.shape[1],i.shape[2]])),__read(t,0);var s={images:a},l={alignCorners:r,halfPixelCenters:n,size:t},u=rc.runKernel(e4,s,l);return o?rZ(u,[u.shape[1],u.shape[2],u.shape[3]]):u}}),a7=op({threshold_:function(e,t,r,n){void 0===t&&(t="binary"),void 0===r&&(r=!1),void 0===n&&(n=.5);var i,a,o,s,l,u=convertToTensor(e,"image","threshold"),d=u.shape[0]*u.shape[1],c=rN(tensor1d([n]),255);if(assert(3===u.rank,function(){return"Error in threshold: image must be rank 3,"+"but got rank ".concat(u.rank,".")}),assert(3===u.shape[2]||1===u.shape[2],function(){return"Error in threshold: image color channel must be equal to 3 or 1"+"but got ".concat(u.shape[2],".")}),assert("int32"===u.dtype||"float32"===u.dtype,function(){return"Error in dtype: image dtype must be int32 or float32,"+"but got dtype ".concat(u.dtype,".")}),assert("otsu"===t||"binary"===t,function(){return"Method must be binary or otsu, but was ".concat(t)}),3===u.shape[2]){a=(i=__read(aC(u,[1,1,1],-1),3))[0],o=i[1],s=i[2];var p=rN(a,.2989),h=rN(o,.587),f=rN(s,.114);l=rL(rL(p,h),f)}else l=e;return"otsu"===t&&(c=function(e,t){for(var r,n,i,a,o,s,l=tensor1d([-1]),u=tensor1d([0]),d=tensor1d([0]),c=0;c<e.size-1;c++){r=r4(e,0,c+1),n=r4(e,c+1),o=rB(nH(r),t),s=rB(nH(n),t),i=rB(nH(rN(r,range(0,r.size))),nH(r));var p=fill(n.shape,r.size),h=rL(range(0,n.size),p),f=ir(i,a=rB(nH(rN(n,h)),nH(n))),m=ir(i,a),y=rN(o,s),g=nZ(d=rN(rN(y,f),m),u);u=nE(g,d,u),l=nE(g,tensor1d([c]),l)}return l}(nt(rM(al(l),"int32"),tensor([]),256),d)),rM(rN(r?n6(l,c):nZ(l,c),255),"int32")}}),oe=op({transform_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a){void 0===r&&(r="nearest"),void 0===n&&(n="constant"),void 0===i&&(i=0);var o=convertToTensor(e,"image","transform","float32"),s=convertToTensor(t,"transforms","transform","float32");assert(4===o.rank,function(){return"Error in transform: image must be rank 4,"+"but got rank ".concat(o.rank,".")}),assert(2===s.rank&&(s.shape[0]===o.shape[0]||1===s.shape[0])&&8===s.shape[1],function(){return"Error in transform: Input transform should be batch x 8 or 1 x 8"}),assert(null==a||2===a.length,function(){return"Error in transform: outputShape must be [height, width] or null, "+"but got ".concat(a,".")});var l={interpolation:r,fillMode:n,fillValue:i,outputShape:a};return rc.runKernel(tw,{image:o,transforms:s},l)}}),ot=op({bandPart_:function(e,t,r){var n,i,a=convertToTensor(e,"a","bandPart");assert(a.rank>=2,function(){return"bandPart(): Rank must be at least 2, got ".concat(a.rank,".")});var o=a.shape,s=__read(a.shape.slice(-2),2),l=s[0],u=s[1];"number"==typeof t?(assert(t%1==0,function(){return"bandPart(): numLower must be an integer, got ".concat(t,".")}),assert(t<=l,function(){return"bandPart(): numLower (".concat(t,")")+" must not be greater than the number of rows (".concat(l,").")}),n=convertToTensor(t<0?l:t,"numLower","bandPart")):(assert("int32"===t.dtype,function(){return"bandPart(): numLower's dtype must be an int32."}),n=nE(n3(t,0),l,ig(t,l))),"number"==typeof r?(assert(r%1==0,function(){return"bandPart(): numUpper must be an integer, got ".concat(r,".")}),assert(r<=u,function(){return"bandPart(): numUpper (".concat(r,")")+" must not be greater than the number of columns (".concat(u,").")}),i=convertToTensor(r<0?u:r,"numUpper","bandPart")):(assert("int32"===r.dtype,function(){return"bandPart(): numUpper's dtype must be an int32."}),i=nE(n3(r,0),u,ig(r,u)));var d=ir(rZ(range(0,l,1,"int32"),[-1,1]),range(0,u,1,"int32")),c=io(n6(d,n),nJ(d,n7(i))),p=zeros([l,u],a.dtype);return rZ(aw(aB(rZ(a,[-1,l,u])).map(function(e){return nE(c,e,p)})),o)}}),or=op({gramSchmidt_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){if(Array.isArray(e)){t=!1,assert(null!=e&&e.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var t,r=e[0].shape[0],_loop_1=function(t){assert(e[t].shape[0]===r,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: "+"(".concat(e[t].shape[0]," vs. ").concat(r,")")})},n=1;n<e.length;++n)_loop_1(n)}else t=!0,e=aC(e,e.shape[0],0).map(function(e){return aT(e,[0])});assert(e.length<=e[0].shape[0],function(){return"Gram-Schmidt: Number of vectors (".concat(e.length,") exceeds ")+"number of dimensions (".concat(e[0].shape[0],").")});for(var i=[],a=e,_loop_2=function(e){i.push(rc.tidy(function(){var t=a[e];if(e>0)for(var r=0;r<e;++r){var n=rN(nH(rN(i[r],t)),i[r]);t=ir(t,n)}return rB(t,nz(t,"euclidean"))}))},n=0;n<e.length;++n)_loop_2(n);return t?aw(i,0):i}});function qr2d(e,t){return void 0===t&&(t=!1),rc.tidy(function(){assert(2===e.shape.length,function(){return"qr2d() requires a 2D Tensor, but got a ".concat(e.shape.length,"D Tensor.")});for(var r=e.shape[0],n=e.shape[1],i=nq(r),a=rk(e),o=tensor2d([[1]],[1,1]),s=rk(o),l=r>=n?n:r,_loop_1=function(e){var t,l=a,u=s,d=i;s=(t=__read(rc.tidy(function(){var t=r4(a,[e,e],[r-e,1]),l=nz(t),u=r4(a,[e,e],[1,1]),d=nE(nZ(u,0),tensor2d([[-1]]),tensor2d([[1]])),c=ir(u,rN(d,l)),p=rB(t,c);s=1===p.shape[0]?rk(o):r1([o,r4(p,[1,0],[p.shape[0]-1,p.shape[1]])],0);var h=n7(rB(r0(d,c),l)),f=r4(a,[e,0],[r-e,n]),m=rN(h,s),y=aN(s);if(0===e)a=ir(f,r0(m,r0(y,f)));else{var g=ir(f,r0(m,r0(y,f)));a=r1([r4(a,[0,0],[e,n]),g],0)}var v=aN(m),b=r4(i,[0,e],[r,i.shape[1]-e]);if(0===e)i=ir(b,r0(r0(b,s),v));else{var S=ir(b,r0(r0(b,s),v));i=r1([r4(i,[0,0],[r,e]),S],1)}return[s,a,i]}),3))[0],a=t[1],i=t[2],dispose([l,u,d])},u=0;u<l;++u)_loop_1(u);return!t&&r>n&&(i=r4(i,[0,0],[r,n]),a=r4(a,[0,0],[n,n])),[i,a]})}var on=op({qr_:function(e,t){if(void 0===t&&(t=!1),assert(e.rank>=2,function(){return"qr() requires input tensor to have a rank >= 2, but got rank ".concat(e.rank)}),2===e.rank)return qr2d(e,t);var r=e.shape.slice(0,e.shape.length-2).reduce(function(e,t){return e*t}),n=aB(rZ(e,[r,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),i=[],a=[];return n.forEach(function(e){var r=__read(qr2d(e,t),2),n=r[0],o=r[1];i.push(n),a.push(o)}),[rZ(aw(i,0),e.shape),rZ(aw(a,0),e.shape)]}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */t.Reduction=void 0,function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(t.Reduction||(t.Reduction={}));var oi=op({computeWeightedLoss_:function(e,r,n){void 0===n&&(n=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var i=convertToTensor(e,"losses","computeWeightedLoss"),a=null;null!=r&&(a=convertToTensor(r,"weights","computeWeightedLoss"));var o=null==a?i:rN(i,a);if(n===t.Reduction.NONE)return o;if(n===t.Reduction.SUM)return nH(o);if(n===t.Reduction.MEAN){if(null==a)return iy(o);var s=i.size/a.size,l=rB(nH(o),nH(a));return s>1?rB(l,scalar(s)):l}if(n===t.Reduction.SUM_BY_NONZERO_WEIGHTS){if(null==a)return rB(nH(o),scalar(i.size));var u=rM(nH(iC(rN(a,ones(i.shape)),scalar(0))),"float32");return rB(nH(o),u)}throw Error("Unknown reduction: ".concat(n))}}),oa=op({absoluteDifference_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,r,n,i){void 0===i&&(i=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"labels","absoluteDifference"),o=convertToTensor(r,"predictions","absoluteDifference"),s=null;return null!=n&&(s=convertToTensor(n,"weights","absoluteDifference")),assertShapesMatch(a.shape,o.shape,"Error in absoluteDifference: "),oi(rF(ir(a,o)),s,i)}}),oo=op({cosineDistance_:function(e,r,n,i,a){void 0===a&&(a=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var o=convertToTensor(e,"labels","cosineDistance"),s=convertToTensor(r,"predictions","cosineDistance"),l=null;return null!=i&&(l=convertToTensor(i,"weights","cosineDistance")),assertShapesMatch(o.shape,s.shape,"Error in cosineDistance: "),oi(ir(scalar(1),nH(rN(o,s),n,!0)),l,a)}}),os=op({hingeLoss_:function(e,r,n,i){void 0===i&&(i=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"labels","hingeLoss"),o=convertToTensor(r,"predictions","hingeLoss"),s=null;null!=n&&(s=convertToTensor(n,"weights","hingeLoss")),assertShapesMatch(a.shape,o.shape,"Error in hingeLoss: ");var l=scalar(1);return a=ir(rN(scalar(2),a),l),oi(ae(ir(l,rN(a,o))),s,i)}}),ol=op({huberLoss_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,r,n,i,a){void 0===i&&(i=1),void 0===a&&(a=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var o=convertToTensor(e,"labels","huberLoss"),s=convertToTensor(r,"predictions","huberLoss"),l=null;null!=n&&(l=convertToTensor(n,"weights","huberLoss")),assertShapesMatch(o.shape,s.shape,"Error in huberLoss: ");var u=scalar(i),d=rF(ir(s,o)),c=ig(d,u),p=ir(d,c);return oi(rL(rN(scalar(.5),nj(c)),rN(u,p)),l,a)}}),ou=op({logLoss_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,r,n,i,a){void 0===i&&(i=1e-7),void 0===a&&(a=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var o=convertToTensor(e,"labels","logLoss"),s=convertToTensor(r,"predictions","logLoss"),l=null;null!=n&&(l=convertToTensor(n,"weights","logLoss")),assertShapesMatch(o.shape,s.shape,"Error in logLoss: ");var u=scalar(1),d=scalar(i),c=n7(rN(o,n5(rL(s,d)))),p=rN(ir(u,o),n5(rL(ir(u,s),d)));return oi(ir(c,p),l,a)}}),od=op({meanSquaredError_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,r,n,i){void 0===i&&(i=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"labels","meanSquaredError"),o=convertToTensor(r,"predictions","meanSquaredError"),s=null;return null!=n&&(s=convertToTensor(n,"weights","meanSquaredError")),assertShapesMatch(a.shape,o.shape,"Error in meanSquaredError: "),oi(aA(a,o),s,i)}}),oc=op({sigmoidCrossEntropy_:function(e,r,n,i,a){void 0===i&&(i=0),void 0===a&&(a=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var o,s,l,u,d,c=convertToTensor(e,"multiClassLabels","sigmoidCrossEntropy"),p=convertToTensor(r,"logits","sigmoidCrossEntropy"),h=null;if(null!=n&&(h=convertToTensor(n,"weights","sigmoidCrossEntropy")),assertShapesMatch(c.shape,p.shape,"Error in sigmoidCrossEntropy: "),i>0){var f=scalar(i),m=scalar(1),y=scalar(.5);c=rL(rN(c,ir(m,f)),rN(y,f))}return oi((o=convertToTensor(c,"labels","sigmoidCrossEntropyWithLogits"),s=convertToTensor(p,"logits","sigmoidCrossEntropyWithLogits"),assertShapesMatch(o.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: "),l=ae(s),u=rN(s,o),d=n9(nG(n7(rF(s)))),rL(ir(l,u),d)),h,a)}}),oh=op({softmaxCrossEntropy_:function(e,r,n,i,a){void 0===i&&(i=0),void 0===a&&(a=t.Reduction.SUM_BY_NONZERO_WEIGHTS);var o=convertToTensor(e,"onehotLabels","softmaxCrossEntropy"),s=convertToTensor(r,"logits","softmaxCrossEntropy"),l=null;if(null!=n&&(l=convertToTensor(n,"weights","softmaxCrossEntropy")),assertShapesMatch(o.shape,s.shape,"Error in softmaxCrossEntropy: "),i>0){var u=scalar(i),d=scalar(1),c=scalar(o.shape[1]);o=rL(rN(o,ir(d,u)),rB(u,c))}return oi(function(e,t,r){if(void 0===r&&(r=-1),-1===r&&(r=t.rank-1),r!==t.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet "+"supported. Labels / logits was rank ".concat(t.rank," ")+"and dim was ".concat(r));return customGrad(function(e,t,n){var i=ia(t,[r],!0),a=ir(rM(t,"float32"),i);return n([e,a]),{value:nH(n7(rN(a,e)),[r]),gradFunc:function(e,t){var n=__read(t,2),i=n[0],a=n[1],o=expandShapeToKeepDim(e.shape,[r]);return[rN(rZ(e,o),ir(rM(i,"float32"),nG(a))),rN(rZ(e,o),ir(nG(a),rM(i,"float32")))]}}})(e,t)}(o,s),l,a)}}),of=op({sparseFillEmptyRows_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){var i=convertToTensor(e,"indices","sparseFillEmptyRows","int32"),a=convertToTensor(t,"values","sparseFillEmptyRows"),o=convertToTensor(r,"denseShape","sparseFillEmptyRows","int32"),s=convertToTensor(n,"defaultValue","sparseFillEmptyRows",a.dtype);if(2!==i.rank)throw Error("Indices should be Tensor2D but received shape\n        ".concat(i.shape));if(1!==a.rank)throw Error("Values should be Tensor1D but received shape ".concat(a.shape));if(1!==o.rank)throw Error("Dense shape should be Tensor1D but received shape ".concat(o.shape));if(0!==s.rank)throw Error("Default value should be a scalar but received shape ".concat(s.shape));var l=rc.runKernel(th,{indices:i,values:a,denseShape:o,defaultValue:s});return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}}),om=op({sparseReshape_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"inputIndices","sparseReshape","int32"),i=convertToTensor(t,"inputShape","sparseReshape","int32"),a=convertToTensor(r,"newShape","sparseReshape","int32");if(2!==n.rank)throw Error("Input indices should be Tensor2D but received shape\n        ".concat(n.shape));if(1!==i.rank)throw Error("Input shape should be Tensor1D but received shape ".concat(i.shape));if(1!==a.rank)throw Error("New shape should be Tensor1D but received shape ".concat(a.shape));var o=rc.runKernel(tf,{inputIndices:n,inputShape:i,newShape:a});return{outputIndices:o[0],outputShape:o[1]}}}),oy=op({sparseSegmentMean_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"data","sparseSegmentMean"),i=convertToTensor(t,"indices","sparseSegmentMean","int32"),a=convertToTensor(r,"segmentIds","sparseSegmentMean","int32");if(n.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==i.rank)throw Error("Indices should be Tensor1D but received shape\n          ".concat(i.shape));if(1!==a.rank)throw Error("Segment ids should be Tensor1D but received shape\n          ".concat(a.shape));return rc.runKernel(tm,{data:n,indices:i,segmentIds:a})}}),og=op({sparseSegmentSum_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"data","sparseSegmentSum"),i=convertToTensor(t,"indices","sparseSegmentSum","int32"),a=convertToTensor(r,"segmentIds","sparseSegmentSum","int32");if(n.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==i.rank)throw Error("Indices should be Tensor1D but received shape\n         ".concat(i.shape));if(1!==a.rank)throw Error("Segment ids should be Tensor1D but received shape\n         ".concat(a.shape));return rc.runKernel(ty,{data:n,indices:i,segmentIds:a})}}),ov=op({stringNGrams_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n,i,a,o,s){var l=convertToTensor(e,"data","stringNGrams","string");if("string"!==l.dtype)throw Error("Data must be of datatype string");if(1!==l.shape.length)throw Error("Data must be a vector, saw: ".concat(l.shape));var u=convertToTensor(t,"dataSplits","stringNGrams");if("int32"!==u.dtype)throw Error("Data splits must be of datatype int32");var d=rc.runKernel(tx,{data:l,dataSplits:u},{separator:r,nGramWidths:n,leftPad:i,rightPad:a,padWidth:o,preserveShortSequences:s});return{nGrams:d[0],nGramsSplits:d[1]}}}),ob=op({stringSplit_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===r&&(r=!0);var n=convertToTensor(e,"input","stringSplit","string"),i=convertToTensor(t,"delimiter","stringSplit","string");if(1!==n.rank)throw Error("Input should be Tensor1D but received shape ".concat(n.shape));if(0!==i.rank)throw Error("Delimiter should be a scalar but received shape ".concat(i.shape));var a={skipEmpty:r},o=rc.runKernel(tP,{input:n,delimiter:i},a);return{indices:o[0],values:o[1],shape:o[2]}}}),oS=op({stringToHashBucketFast_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"input","stringToHashBucketFast","string");if(t<=0)throw Error("Number of buckets must be at least 1");return rc.runKernel(tC,{input:r},{numBuckets:t})}}),ox=op({staticRegexReplace_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===n&&(n=!0);var i=convertToTensor(e,"input","staticRegexReplace","string"),a={pattern:t,rewrite:r,replaceGlobal:n};return rc.runKernel(tb,{x:i},a)}}),oP=new Map,oC=new Map,o_=function(){function Serializable(){}return Serializable.prototype.getClassName=function(){return this.constructor.className},Serializable.fromConfig=function(e,t){return new e(t)},Serializable}(),oA=function(){function SerializationMap(){this.classNameMap={}}return SerializationMap.getMap=function(){return null==SerializationMap.instance&&(SerializationMap.instance=new SerializationMap),SerializationMap.instance},SerializationMap.register=function(e){SerializationMap.getMap().classNameMap[e.className]=[e,e.fromConfig]},SerializationMap}();function registerClass(e,t,r){assert(null!=e.className,function(){return"Class being registered does not have the static className property defined."}),assert("string"==typeof e.className,function(){return"className is required to be a string, but got type "+typeof e.className}),assert(e.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),void 0===t&&(t="Custom"),void 0===r&&(r=e.className);var n=t+">"+r;return oA.register(e),oP.set(n,e),oC.set(e,n),e}var oT=function(e){function Optimizer(){return null!==e&&e.apply(this,arguments)||this}return __extends(Optimizer,e),Optimizer.prototype.minimize=function(e,t,r){void 0===t&&(t=!1);var n=this.computeGradients(e,r),i=n.value,a=n.grads;if(null!=r){var o=r.map(function(e){return{name:e.name,tensor:a[e.name]}});this.applyGradients(o)}else this.applyGradients(a);return(dispose(a),t)?i:(i.dispose(),null)},Object.defineProperty(Optimizer.prototype,"iterations",{get:function(){return null==this.iterations_&&(this.iterations_=0),this.iterations_},enumerable:!1,configurable:!0}),Optimizer.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},Optimizer.prototype.computeGradients=function(e,t){return variableGrads(e,t)},Optimizer.prototype.dispose=function(){null!=this.iterations_&&dispose(this.iterations_)},Optimizer.prototype.saveIterations=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return null==this.iterations_&&(this.iterations_=0),[2,{name:"iter",tensor:scalar(this.iterations_,"int32")}]})})},Optimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("getWeights() is not implemented for this optimizer yet.")})})},Optimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("setWeights() is not implemented for this optimizer class "+"".concat(this.getClassName()))})})},Optimizer.prototype.extractIterations=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return t=this,[4,e[0].tensor.data()];case 1:return t.iterations_=r.sent()[0],[2,e.slice(1)]}})})},Optimizer}(o_);Object.defineProperty(oT,Symbol.hasInstance,{value:function(e){return null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients}});var ow=function(e){function AdadeltaOptimizer(t,r,n){void 0===n&&(n=null);var i=e.call(this)||this;return i.learningRate=t,i.rho=r,i.epsilon=n,i.accumulatedGrads=[],i.accumulatedUpdates=[],null==n&&(i.epsilon=rc.backend.epsilon()),i}return __extends(AdadeltaOptimizer,e),Object.defineProperty(AdadeltaOptimizer,"className",{get:function(){return"Adadelta"},enumerable:!1,configurable:!0}),AdadeltaOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,n){var i=rc.registeredVariables[r];null==t.accumulatedGrads[n]&&(t.accumulatedGrads[n]={originalName:"".concat(r,"/accum_grad"),variable:tidy(function(){return nD(i).variable(!1)})}),null==t.accumulatedUpdates[n]&&(t.accumulatedUpdates[n]={originalName:"".concat(r,"/accum_var"),variable:tidy(function(){return nD(i).variable(!1)})});var a=Array.isArray(e)?e[n].tensor:e[r];if(null!=a){var o=t.accumulatedGrads[n].variable,s=t.accumulatedUpdates[n].variable;tidy(function(){var e=rL(rN(o,t.rho),rN(nj(a),1-t.rho)),r=rN(rB(nV(rL(s,t.epsilon)),nV(rL(o,t.epsilon))),a),n=rL(rN(s,t.rho),rN(nj(r),1-t.rho));o.assign(e),s.assign(n);var l=rL(rN(r,-t.learningRate),i);i.assign(l)})}}),this.incrementIterations()},AdadeltaOptimizer.prototype.dispose=function(){null!=this.accumulatedUpdates&&(dispose(this.accumulatedGrads.map(function(e){return e.variable})),dispose(this.accumulatedUpdates.map(function(e){return e.variable})))},AdadeltaOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=__spreadArray(__spreadArray([],__read(this.accumulatedGrads),!1),__read(this.accumulatedUpdates),!1),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},AdadeltaOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return t=(e=r.sent()).length/2,this.accumulatedGrads=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},AdadeltaOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},AdadeltaOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},AdadeltaOptimizer}(oT),oE=function(e){function AdagradOptimizer(t,r){void 0===r&&(r=.1);var n=e.call(this)||this;return n.learningRate=t,n.initialAccumulatorValue=r,n.accumulatedGrads=[],n}return __extends(AdagradOptimizer,e),Object.defineProperty(AdagradOptimizer,"className",{get:function(){return"Adagrad"},enumerable:!1,configurable:!0}),AdagradOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,n){var i=rc.registeredVariables[r];null==t.accumulatedGrads[n]&&(t.accumulatedGrads[n]={originalName:"".concat(r,"/accumulator"),variable:tidy(function(){return fill(i.shape,t.initialAccumulatorValue).variable(!1)})});var a=Array.isArray(e)?e[n].tensor:e[r];if(null!=a){var o=t.accumulatedGrads[n].variable;tidy(function(){var e=rL(o,nj(a));o.assign(e);var r=rL(rN(rB(a,nV(rL(e,rc.backend.epsilon()))),-t.learningRate),i);i.assign(r)})}}),this.incrementIterations()},AdagradOptimizer.prototype.dispose=function(){null!=this.accumulatedGrads&&dispose(this.accumulatedGrads.map(function(e){return e.variable}))},AdagradOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},AdagradOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulatedGrads=e.map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},AdagradOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},AdagradOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},AdagradOptimizer}(oT),oD=function(e){function AdamOptimizer(t,r,n,i){void 0===i&&(i=null);var a=e.call(this)||this;return a.learningRate=t,a.beta1=r,a.beta2=n,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],tidy(function(){a.accBeta1=scalar(r).variable(),a.accBeta2=scalar(n).variable()}),null==i&&(a.epsilon=rc.backend.epsilon()),a}return __extends(AdamOptimizer,e),Object.defineProperty(AdamOptimizer,"className",{get:function(){return"Adam"},enumerable:!1,configurable:!0}),AdamOptimizer.prototype.applyGradients=function(e){var t=this,r=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e);tidy(function(){var n=ir(1,t.accBeta1),i=ir(1,t.accBeta2);r.forEach(function(r,a){var o=rc.registeredVariables[r];null==t.accumulatedFirstMoment[a]&&(t.accumulatedFirstMoment[a]={originalName:"".concat(r,"/m"),variable:tidy(function(){return nD(o).variable(!1)})}),null==t.accumulatedSecondMoment[a]&&(t.accumulatedSecondMoment[a]={originalName:"".concat(r,"/v"),variable:tidy(function(){return nD(o).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[r];if(null!=s){var l=t.accumulatedFirstMoment[a].variable,u=t.accumulatedSecondMoment[a].variable,d=rL(rN(l,t.beta1),rN(s,1-t.beta1)),c=rL(rN(u,t.beta2),rN(nj(s),1-t.beta2)),p=rB(d,n),h=rB(c,i);l.assign(d),u.assign(c);var f=rL(rN(rB(p,rL(nV(h),t.epsilon)),-t.learningRate),o);o.assign(f)}}),t.accBeta1.assign(rN(t.accBeta1,t.beta1)),t.accBeta2.assign(rN(t.accBeta2,t.beta2))}),this.incrementIterations()},AdamOptimizer.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&dispose(this.accumulatedFirstMoment.map(function(e){return e.variable})),null!=this.accumulatedSecondMoment&&dispose(this.accumulatedSecondMoment.map(function(e){return e.variable}))},AdamOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=__spreadArray(__spreadArray([],__read(this.accumulatedFirstMoment),!1),__read(this.accumulatedSecondMoment),!1),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},AdamOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t,r=this;return __generator(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),tidy(function(){r.accBeta1.assign(nF(r.beta1,r.iterations_+1)),r.accBeta2.assign(nF(r.beta2,r.iterations_+1))}),t=e.length/2,this.accumulatedFirstMoment=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},AdamOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},AdamOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},AdamOptimizer}(oT),oO=function(e){function AdamaxOptimizer(t,r,n,i,a){void 0===i&&(i=null),void 0===a&&(a=0);var o=e.call(this)||this;return o.learningRate=t,o.beta1=r,o.beta2=n,o.epsilon=i,o.decay=a,o.accumulatedFirstMoment=[],o.accumulatedWeightedInfNorm=[],tidy(function(){o.iteration=scalar(0).variable(),o.accBeta1=scalar(r).variable()}),null==i&&(o.epsilon=rc.backend.epsilon()),o}return __extends(AdamaxOptimizer,e),Object.defineProperty(AdamaxOptimizer,"className",{get:function(){return"Adamax"},enumerable:!1,configurable:!0}),AdamaxOptimizer.prototype.applyGradients=function(e){var t=this,r=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e);tidy(function(){var n=ir(1,t.accBeta1),i=rB(-t.learningRate,rL(rN(t.iteration,t.decay),1));r.forEach(function(r,a){var o=rc.registeredVariables[r];null==t.accumulatedFirstMoment[a]&&(t.accumulatedFirstMoment[a]={originalName:"".concat(r,"/m"),variable:nD(o).variable(!1)}),null==t.accumulatedWeightedInfNorm[a]&&(t.accumulatedWeightedInfNorm[a]={originalName:"".concat(r,"/v"),variable:nD(o).variable(!1)});var s=Array.isArray(e)?e[a].tensor:e[r];if(null!=s){var l=t.accumulatedFirstMoment[a].variable,u=t.accumulatedWeightedInfNorm[a].variable,d=rL(rN(l,t.beta1),rN(s,1-t.beta1)),c=im(rN(u,t.beta2),rF(s));l.assign(d),u.assign(c);var p=rL(rN(rB(i,n),rB(d,rL(c,t.epsilon))),o);o.assign(p)}}),t.iteration.assign(rL(t.iteration,1)),t.accBeta1.assign(rN(t.accBeta1,t.beta1))}),this.incrementIterations()},AdamaxOptimizer.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&dispose(this.accumulatedFirstMoment.map(function(e){return e.variable})),null!=this.accumulatedWeightedInfNorm&&dispose(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},AdamaxOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("getWeights() is not implemented for Adamax yet.")})})},AdamaxOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("setWeights() is not implemented for Adamax yet.")})})},AdamaxOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},AdamaxOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},AdamaxOptimizer}(oT),oR=function(e){function SGDOptimizer(t){var r=e.call(this)||this;return r.learningRate=t,r.setLearningRate(t),r}return __extends(SGDOptimizer,e),Object.defineProperty(SGDOptimizer,"className",{get:function(){return"SGD"},enumerable:!1,configurable:!0}),SGDOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,n){var i=Array.isArray(e)?e[n].tensor:e[r];if(null!=i){var a=rc.registeredVariables[r];tidy(function(){var e=rL(rN(t.c,i),a);a.assign(e)})}}),this.incrementIterations()},SGDOptimizer.prototype.setLearningRate=function(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=keep(scalar(-e))},SGDOptimizer.prototype.dispose=function(){this.c.dispose()},SGDOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},SGDOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:if(0!==(e=t.sent()).length)throw Error("SGD optimizer does not have settable weights.");return[2]}})})},SGDOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate}},SGDOptimizer.fromConfig=function(e,t){return new e(t.learningRate)},SGDOptimizer}(oT),oM=function(e){function MomentumOptimizer(t,r,n){void 0===n&&(n=!1);var i=e.call(this,t)||this;return i.learningRate=t,i.momentum=r,i.useNesterov=n,i.accumulations=[],i.m=scalar(i.momentum),i}return __extends(MomentumOptimizer,e),Object.defineProperty(MomentumOptimizer,"className",{get:function(){return"Momentum"},enumerable:!1,configurable:!0}),MomentumOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,n){var i=rc.registeredVariables[r];null==t.accumulations[n]&&(t.accumulations[n]={originalName:"".concat(r,"/momentum"),variable:tidy(function(){return nD(i).variable(!1)})});var a=t.accumulations[n].variable,o=Array.isArray(e)?e[n].tensor:e[r];null!=o&&tidy(function(){var e,r=rL(rN(t.m,a),o);e=t.useNesterov?rL(rN(t.c,rL(o,rN(r,t.m))),i):rL(rN(t.c,r),i),a.assign(r),i.assign(e)})}),this.incrementIterations()},MomentumOptimizer.prototype.dispose=function(){this.m.dispose(),null!=this.accumulations&&dispose(this.accumulations.map(function(e){return e.variable}))},MomentumOptimizer.prototype.setMomentum=function(e){this.momentum=e},MomentumOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},MomentumOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulations=e.map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},MomentumOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},MomentumOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},MomentumOptimizer}(oR),ok=function(e){function RMSPropOptimizer(t,r,n,i,a){void 0===r&&(r=.9),void 0===n&&(n=0),void 0===i&&(i=null),void 0===a&&(a=!1);var o=e.call(this)||this;if(o.learningRate=t,o.decay=r,o.momentum=n,o.epsilon=i,o.accumulatedMeanSquares=[],o.accumulatedMoments=[],o.accumulatedMeanGrads=[],o.centered=a,null==i&&(o.epsilon=rc.backend.epsilon()),null==t)throw Error("learningRate for RMSPropOptimizer must be defined.");return o}return __extends(RMSPropOptimizer,e),Object.defineProperty(RMSPropOptimizer,"className",{get:function(){return"RMSProp"},enumerable:!1,configurable:!0}),RMSPropOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,n){var i=rc.registeredVariables[r];null==t.accumulatedMeanSquares[n]&&(t.accumulatedMeanSquares[n]={originalName:"".concat(r,"/rms"),variable:tidy(function(){return nD(i).variable(!1)})}),null==t.accumulatedMoments[n]&&(t.accumulatedMoments[n]={originalName:"".concat(r,"/momentum"),variable:tidy(function(){return nD(i).variable(!1)})}),null==t.accumulatedMeanGrads[n]&&t.centered&&(t.accumulatedMeanGrads[n]={originalName:"".concat(r,"/mg"),variable:tidy(function(){return nD(i).variable(!1)})});var a=Array.isArray(e)?e[n].tensor:e[r];if(null!=a){var o=t.accumulatedMeanSquares[n].variable,s=t.accumulatedMoments[n].variable;tidy(function(){var e=rL(rN(o,t.decay),rN(nj(a),1-t.decay));if(t.centered){var r=t.accumulatedMeanGrads[n].variable,l=rL(rN(r,t.decay),rN(a,1-t.decay)),u=rB(rN(a,t.learningRate),nV(ir(e,rL(nj(l),t.epsilon)))),d=rL(rN(s,t.momentum),u);o.assign(e),r.assign(l),s.assign(d);var c=ir(i,d);i.assign(c)}else{var p=rL(rN(o,t.decay),rN(nj(a),1-t.decay)),d=rL(rN(s,t.momentum),rB(rN(a,t.learningRate),nV(rL(p,t.epsilon))));o.assign(p),s.assign(d);var c=ir(i,d);i.assign(c)}})}}),this.incrementIterations()},RMSPropOptimizer.prototype.dispose=function(){null!=this.accumulatedMeanSquares&&dispose(this.accumulatedMeanSquares.map(function(e){return e.variable})),null!=this.accumulatedMeanGrads&&this.centered&&dispose(this.accumulatedMeanGrads.map(function(e){return e.variable})),null!=this.accumulatedMoments&&dispose(this.accumulatedMoments.map(function(e){return e.variable}))},RMSPropOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=__spreadArray(__spreadArray([],__read(this.accumulatedMeanSquares),!1),__read(this.accumulatedMoments),!1),this.centered&&e.push.apply(e,__spreadArray([],__read(this.accumulatedMeanGrads),!1)),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},RMSPropOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),t=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),[2]}})})},RMSPropOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},RMSPropOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},RMSPropOptimizer}(oT),oL=[ow,oE,oD,oO,oM,ok,oR];function defer(e){return new Promise(function(e){return setTimeout(e)}).then(e)}var oI=function(){function BrowserDownloads(e){if(!env().getBool("IS_BROWSER"))throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(BrowserDownloads.URL_SCHEME)&&(e=e.slice(BrowserDownloads.URL_SCHEME.length)),(null==e||0===e.length)&&(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}return BrowserDownloads.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n,i,a,o,s;return __generator(this,function(l){switch(l.label){case 0:if("undefined"==typeof document)throw Error("Browser downloads are not supported in this environment since `document` is not present");if(t=ry.join(e.weightData),r=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"})),!(e.modelTopology instanceof ArrayBuffer))return[3,1];throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],i=getModelJSONForModelArtifacts(e,n),a=window.URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),(o=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor).download=this.modelJsonFileName,o.href=a,[4,defer(function(){return o.dispatchEvent(new MouseEvent("click"))})];case 2:if(l.sent(),!(null!=e.weightData))return[3,4];return(s=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=r,[4,defer(function(){return s.dispatchEvent(new MouseEvent("click"))})];case 3:l.sent(),l.label=4;case 4:return[2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e)}]}})})},BrowserDownloads}();oI.URL_SCHEME="downloads://";var oB=function(){function BrowserFiles(e){if(null==e||e.length<1)throw Error("When calling browserFiles, at least 1 file is required, "+"but received ".concat(e));this.jsonFile=e[0],this.weightsFiles=e.slice(1)}return BrowserFiles.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t,r){var n=new FileReader;n.onload=function(n){var i=JSON.parse(n.target.result),a=i.modelTopology;if(null==a){r(Error("modelTopology field is missing from file ".concat(e.jsonFile.name)));return}if(null==i.weightsManifest){r(Error("weightManifest field is missing from file ".concat(e.jsonFile.name)));return}if(0===e.weightsFiles.length){t({modelTopology:a});return}t(getModelArtifactsForJSON(i,function(t){return e.loadWeights(t)}))},n.onerror=function(t){return r("Failed to read model topology and weights manifest JSON "+"from file '".concat(e.jsonFile.name,"'. BrowserFiles supports loading ")+"Keras-style tf.Model artifacts only.")},n.readAsText(e.jsonFile)})]})})},BrowserFiles.prototype.loadWeights=function(e){var t,r,n=this,i=[],a=[];try{for(var o=__values(e),s=o.next();!s.done;s=o.next()){var l=s.value;i.push.apply(i,__spreadArray([],__read(l.weights),!1)),a.push.apply(a,__spreadArray([],__read(l.paths),!1))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}var u=this.checkManifestAndWeightFiles(e);return Promise.all(a.map(function(e){return n.loadWeightsFile(e,u[e])})).then(function(e){return[i,e]})},BrowserFiles.prototype.loadWeightsFile=function(e,t){return new Promise(function(r,n){var i=new FileReader;i.onload=function(e){r(e.target.result)},i.onerror=function(t){return n("Failed to weights data from file of path '".concat(e,"'."))},i.readAsArrayBuffer(t)})},BrowserFiles.prototype.checkManifestAndWeightFiles=function(e){var t,r,n=this,i=[],a=this.weightsFiles.map(function(e){return basename(e.name)}),o={};try{for(var s=__values(e),l=s.next();!l.done;l=s.next())l.value.paths.forEach(function(e){var t=basename(e);if(-1!==i.indexOf(t))throw Error("Duplicate file basename found in weights manifest: "+"'".concat(t,"'"));if(i.push(t),-1===a.indexOf(t))throw Error("Weight file with basename '".concat(t,"' is not provided."));o[e]=n.weightsFiles[a.indexOf(t)]})}catch(e){t={error:e}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}if(i.length!==this.weightsFiles.length)throw Error("Mismatch in the number of files in weights manifest "+"(".concat(i.length,") and the number of weight files provided ")+"(".concat(this.weightsFiles.length,")."));return o},BrowserFiles}();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function monitorPromisesProgress(e,t,r,n){assert(null!=e&&Array.isArray(e)&&e.length>0,function(){return"promises must be a none empty array"}),i=r=null==r?0:r,a=n=null==n?1:n,assert(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but "+"got startFraction ".concat(i)}),assert(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but "+"got endFraction ".concat(a)}),assert(a>=i,function(){return"startFraction must be no more than endFraction, but "+"got startFraction ".concat(i," and endFraction ")+"".concat(a)});var i,a,o=0;return Promise.all(e.map(function(i){return i.then(function(i){return t(r+ ++o/e.length*(n-r)),i}),i}))}function loadWeightsAsArrayBuffer(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i,a,o,s,l,u,d;return __generator(this,function(c){switch(c.label){case 0:if(null==t&&(t={}),r=null==t.fetchFunc?env().platform.fetch:t.fetchFunc,n=e.map(function(e){return r(e,t.requestInit,{isBinary:!0})}),i=0,a=.5,null!=t.onProgress)return[3,2];return[4,Promise.all(n)];case 1:return o=c.sent(),[3,4];case 2:return[4,monitorPromisesProgress(n,t.onProgress,i,a)];case 3:o=c.sent(),c.label=4;case 4:if(s=o.map(function(e){return e.arrayBuffer()}),l=.5,u=1,null!=t.onProgress)return[3,6];return[4,Promise.all(s)];case 5:return d=c.sent(),[3,8];case 6:return[4,monitorPromisesProgress(s,t.onProgress,l,u)];case 7:d=c.sent(),c.label=8;case 8:return[2,d]}})})}function weightsLoaderFactory(e){var t=this;return function(r,n,i){return void 0===n&&(n=""),__awaiter(t,void 0,void 0,function(){var t,a,o,s,l,u,d,c,p,h;return __generator(this,function(f){switch(f.label){case 0:if(t=r.map(function(){return!1}),a={},o=null!=i?i.map(function(){return!1}):[],s=[],r.forEach(function(e,r){var n=0;e.weights.forEach(function(e){var l=rm["quantization"in e?e.quantization.dtype:e.dtype]*sizeFromShape(e.shape),enqueueWeightsForFetchingFn=function(){t[r]=!0,null==a[r]&&(a[r]=[]),a[r].push({manifestEntry:e,groupOffset:n,sizeBytes:l})};null!=i?i.forEach(function(t,r){t===e.name&&(enqueueWeightsForFetchingFn(),o[r]=!0)}):enqueueWeightsForFetchingFn(),s.push(e.name),n+=l})}),!o.every(function(e){return e}))throw l=i.filter(function(e,t){return!o[t]}),Error("Could not find weights in manifest with names: "+"".concat(l.join(", "),". \n")+"Manifest JSON has weights with names: "+"".concat(s.join(", "),"."));return u=t.reduce(function(e,t,r){return t&&e.push(r),e},[]),d=[],u.forEach(function(e){r[e].paths.forEach(function(e){var t=n+(n.endsWith("/")?"":"/")+e;d.push(t)})}),[4,e(d)];case 1:return c=f.sent(),p={},h=0,u.forEach(function(e){var t=r[e].paths.length,n=new ry(c.slice(h,h+t));a[e].forEach(function(e){var t=decodeWeights(n.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(var r in t)p[r]=t[r]}),h+=t}),[2,p]}})})}}rv.registerSaveRouter(function(e){var t;return env().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(oI.URL_SCHEME)?(void 0===(t=e.slice(oI.URL_SCHEME.length))&&(t="model"),new oI(t)):null});var oN=function(){function HTTPRequest(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(assert("function"==typeof t.fetchFunc,function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=t.fetchFunc):this.fetch=env().platform.fetch,assert(null!=e&&e.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(e)&&assert(2===e.length,function(){return"URL paths for http must have a length of 2, "+"(actual length is ".concat(e.length,").")}),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}return HTTPRequest.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n,i,a;return __generator(this,function(o){switch(o.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],n=getModelJSONForModelArtifacts(e,r),t.body.append("model.json",new Blob([JSON.stringify(n)],{type:"application/json"}),"model.json"),null!=e.weightData&&(i=ry.join(e.weightData),t.body.append("model.weights.bin",new Blob([i],{type:"application/octet-stream"}),"model.weights.bin")),[4,this.fetch(this.path,t)];case 1:if((a=o.sent()).ok)return[2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e),responses:[a]}];throw Error("BrowserHTTPRequest.save() failed due to HTTP response status "+"".concat(a.status,"."))}})})},HTTPRequest.prototype.loadModelJSON=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,n,i;return __generator(this,function(a){switch(a.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(e=a.sent()).ok)throw Error("Request to ".concat(this.path," failed with status code ")+"".concat(e.status,". Please verify this URL points to ")+"the model JSON of the model to load.");a.label=2;case 2:return a.trys.push([2,4,,5]),[4,e.json()];case 3:return t=a.sent(),[3,5];case 4:throw a.sent(),r="Failed to parse model JSON of response from ".concat(this.path,"."),this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",Error(r);case 5:if(n=t.modelTopology,i=t.weightsManifest,null==n&&null==i)throw Error("The JSON from HTTP path ".concat(this.path," contains neither model ")+"topology or manifest for weights.");return[2,t]}})})},HTTPRequest.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){switch(t.label){case 0:if(this.loadOptions.streamWeights)return[2,this.loadStream()];return[4,this.loadModelJSON()];case 1:return[2,getModelArtifactsForJSON(t.sent(),function(t){return e.loadWeights(t)})]}})})},HTTPRequest.prototype.loadStream=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,n,i=this;return __generator(this,function(a){switch(a.label){case 0:return[4,this.loadModelJSON()];case 1:return e=a.sent(),[4,this.getWeightUrls(e.weightsManifest)];case 2:return t=a.sent(),r=getWeightSpecs(e.weightsManifest),n=function(){return function(e,t){var r,n,i=this,a=null==t.fetchFunc?env().platform.fetch:t.fetchFunc,o=0;return null===(r=t.onProgress)||void 0===r||r.call(t,0),new ReadableStream({pull:function(r){return __awaiter(i,void 0,void 0,function(){var i,s,l,u;return __generator(this,function(d){switch(d.label){case 0:if(!(o<e.length))return[3,4];if(n)return[3,2];return[4,a(e[o],t.requestInit,{isBinary:!0})];case 1:n=d.sent().body.getReader(),d.label=2;case 2:return[4,n.read()];case 3:if(l=(s=d.sent()).done,u=s.value,l)return o++,n=void 0,null===(i=t.onProgress)||void 0===i||i.call(t,o/e.length),[3,0];return r.enqueue(u),[2];case 4:return r.close(),[2]}})})}})}(t,i.loadOptions)},[2,Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:n})]}})})},HTTPRequest.prototype.getWeightUrls=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n,i,a,o,s,l,u,d,c,p,h,f,m,y,g,v,b,S;return __generator(this,function(x){switch(x.label){case 0:var P,C,_;r=(t=__read((C=(P=Array.isArray(this.path)?this.path[1]:this.path).lastIndexOf("/"),_=P.lastIndexOf("?"),[P.substring(0,C)+"/",_>C?P.substring(_):""]),2))[0],n=t[1],i=this.weightPathPrefix||r,a=[],o=[];try{for(l=(s=__values(e)).next();!l.done;l=s.next()){u=l.value;try{for(b=void 0,c=(d=__values(u.paths)).next();!c.done;c=d.next())p=c.value,null!=this.weightUrlConverter?o.push(this.weightUrlConverter(p)):a.push(i+p+n)}catch(e){b={error:e}}finally{try{c&&!c.done&&(S=d.return)&&S.call(d)}finally{if(b)throw b.error}}}}catch(e){g={error:e}}finally{try{l&&!l.done&&(v=s.return)&&v.call(s)}finally{if(g)throw g.error}}if(!this.weightUrlConverter)return[3,2];return f=(h=a.push).apply,m=[a],y=[[]],[4,Promise.all(o)];case 1:f.apply(h,m.concat([__spreadArray.apply(void 0,y.concat([__read.apply(void 0,[x.sent()]),!1]))])),x.label=2;case 2:return[2,a]}})})},HTTPRequest.prototype.loadWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.getWeightUrls(e)];case 1:return t=i.sent(),r=getWeightSpecs(e),[4,loadWeightsAsArrayBuffer(t,this.loadOptions)];case 2:return n=i.sent(),[2,[r,n]]}})})},HTTPRequest}();function isHTTPScheme(e){return null!=e.match(oN.URL_SCHEME_REGEX)}oN.URL_SCHEME_REGEX=/^https?:\/\//;var httpRouter=function(e,t){if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc));else if(Array.isArray(e)?e.every(function(e){return isHTTPScheme(e)}):isHTTPScheme(e))return http(e,t);return null};function http(e,t){return new oN(e,t)}rv.registerSaveRouter(httpRouter),rv.registerLoadRouter(httpRouter);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var oF=function(){function PassthroughLoader(e){this.modelArtifacts=e}return PassthroughLoader.prototype.load=function(){return this.modelArtifacts},PassthroughLoader}(),oV=function(){function PassthroughSaver(e){this.saveHandler=e}return PassthroughSaver.prototype.save=function(e){return this.saveHandler(e)},PassthroughSaver}(),PassthroughAsync=function(e){e.load&&(this.load=function(){return Promise.resolve(e.load())}),e.save&&(this.save=function(t){return Promise.resolve(e.save(t))})};function fromMemorySync(e,t,r,n){return 1!=arguments.length?(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new oF({modelTopology:e,weightSpecs:t,weightData:r,trainingConfig:n})):null!=e.modelTopology||null!=e.weightSpecs?new oF(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new oF({modelTopology:e}))}var oj=op({confusionMatrix_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=convertToTensor(e,"labels","confusionMatrix"),i=convertToTensor(t,"predictions","confusionMatrix");assert(null==r||r>0&&Number.isInteger(r),function(){return"If provided, numClasses must be a positive integer, "+"but got ".concat(r)}),assert(1===n.rank,function(){return"Expected the rank of labels to be 1, but got ".concat(n.rank)}),assert(1===i.rank,function(){return"Expected the rank of predictions to be 1, "+"but got ".concat(i.rank)}),assert(n.shape[0]===i.shape[0],function(){return"Mismatch in the number of examples: "+"".concat(n.shape[0]," vs. ").concat(i.shape[0],". ")+"Labels and predictions should have the same number of elements."}),assert(r>0&&Number.isInteger(r),function(){return"numClasses is required to be a positive integer, but got "+"".concat(r)});var a=i_(rM(n,"int32"),r),o=i_(rM(i,"int32"),r);return rM(r0(aN(a),o),"int32")}}),oH=!1;function fromPixels_(e,t){if(void 0===t&&(t=3),t>4)throw Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw Error("pixels passed to tf.browser.fromPixels() can not be null");var r,n,i=!1,a=!1,o=!1,s=!1,l=!1,u=!1;if(e.data instanceof Uint8Array)i=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)a=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)o=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)s=!0;else if(null!=e.getContext)l=!0;else if("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap)u=!0;else throw Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, "+"but was ".concat(e.constructor.name));if(null!=getKernel(tL,rc.backendName)){var c={numChannels:t};return rc.runKernel(tL,{pixels:e},c)}var p=__read(o?[e.videoWidth,e.videoHeight]:[e.width,e.height],2),h=p[0],f=p[1];if(l)r=e.getContext("2d").getImageData(0,0,h,f).data;else if(a||i)r=e.data;else if(s||o||u){if(null==d){if("undefined"==typeof document){if("undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof OffscreenCanvasRenderingContext2D)d=new OffscreenCanvas(1,1).getContext("2d");else throw Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.")}else d=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})}d.canvas.width=h,d.canvas.height=f,d.drawImage(e,0,0,h,f),r=d.getImageData(0,0,h,f).data}if(4===t)n=new Int32Array(r);else{var m=h*f;n=new Int32Array(m*t);for(var y=0;y<m;y++)for(var g=0;g<t;++g)n[y*t+g]=r[4*y+g]}return tensor3d(n,[f,h,t],"int32")}function validateImgTensor(e){if(2!==e.rank&&3!==e.rank)throw Error("toPixels only supports rank 2 or 3 tensors, got rank ".concat(e.rank,"."));var t=2===e.rank?1:e.shape[2];if(t>4||2===t)throw Error("toPixels only supports depth of size "+"1, 3 or 4 but got ".concat(t));if("float32"!==e.dtype&&"int32"!==e.dtype)throw Error("Unsupported type for toPixels: ".concat(e.dtype,".")+" Please use float32 or int32 tensors.")}var oz=op({fromPixels_:fromPixels_});function prepareAndValidate(e,t){var r=e.shape.length,n=t.shape.length;if(r<1)throw Error("tf.gatherND() expects the input to be rank 1 or higher,"+" but the rank was ".concat(r,"."));if(n<1)throw Error("tf.gatherND() expects the indices to be rank 1 or higher,"+" but the rank was ".concat(n,"."));if("int32"!==t.dtype)throw Error("tf.gatherND() expects the indices to be int32 type,"+" but the dtype was ".concat(t.dtype,"."));if(t.shape[n-1]>r)throw Error("index innermost dimension length must be <= tensor rank; saw: "+"".concat(t.shape[n-1]," vs. ").concat(r));if(0===sizeFromShape(e.shape))throw Error("Requested more than 0 entries, but input is empty."+" Input shape: ".concat(e.shape,"."));for(var i=t.shape,a=i[i.length-1],o=1,s=0;s<i.length-1;++s)o*=i[s];var l=e.shape,u=i.slice();u.pop();for(var d=1,s=a;s<r;++s)d*=l[s],u.push(l[s]);var c=__spreadArray(__spreadArray([],__read(computeStrides(e.shape).map(function(e){return e/d})),!1),[1],!1).slice(0,a);return[u,o,d,c]}function stridesWithElidedDims(e,t,r,n){for(var i=__spreadArray([],__read(e),!1),a=i.length;a<n.length;a++)i.push(1);for(var a=0;a<r;a++)0===a?i[t]=1:(i.splice(t,0,1),i.pop());return i}function getElidedAxes(e,t){for(var r=[],n=0;n<e;n++)r.push(t+n);return r}function startIndicesWithElidedDims(e,t,r,n,i){for(var a=__spreadArray([],__read(i),!1),o=getElidedAxes(r,t),s=0;s<a.length;s++)if(o.indexOf(s)>-1)a[s]=0;else{var l,u=(l=s)<=t?l:l-(r-1),d=n[u];e&1<<u&&(d=0),a[s]=d}return a}function stopIndicesWithElidedDims(e,t,r,n,i){for(var a=__spreadArray([],__read(i),!1),o=getElidedAxes(r,t),s=0;s<a.length;s++)if(o.indexOf(s)>-1)a[s]=Number.MAX_SAFE_INTEGER;else{var l,u=(l=s)<=t?l:l-(r-1),d=n[u];e&1<<u&&(d=Number.MAX_SAFE_INTEGER),a[s]=d}for(var c=0;c<a.length;c++){var p=i[c];a[c]<0&&(a[c]+=p),a[c]=clamp(0,a[c],i[c])}return a}function stridesForAxis(e,t,r){var n=e[t];return(r&1<<t||null==n)&&(n=1),n}function startForAxis(e,t,r,n,i,a){var o=t[i],s=r[i]||1;(e&1<<i||a&1<<i||null==o)&&(o=s>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var l=n[i];return o<0&&(o+=l),o=clamp(0,o,l-1)}function stopForAxis(e,t,r,n,i,a){var o=t[i],s=r[i]||1;(e&1<<i||a&1<<i||null==o)&&(o=s>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var l=n[i];return o<0&&(o+=l),o=s>0?clamp(0,o,l):clamp(-1,o,l-1)}function canonical(e,t,r,n,i,a){if(i[t])return r>0?a[t]:a[t+1&1];var o=e<0?n+e:e;return o<a[0]?a[0]:o>a[1]?a[1]:o}var oU={__proto__:null,assertParamsValid:function(e,t,r){var n=e.shape.length;assert(n===t.length,function(){return"Error in slice".concat(n,"D: Length of begin ").concat(t," must ")+"match the rank of the array (".concat(n,").")}),assert(n===r.length,function(){return"Error in slice".concat(n,"D: Length of size ").concat(r," must ")+"match the rank of the array (".concat(n,").")});for(var _loop_1=function(i){assert(t[i]+r[i]<=e.shape[i],function(){return"Error in slice".concat(n,"D: begin[").concat(i,"] + size[").concat(i,"] ")+"(".concat(t[i]+r[i],") would overflow input.shape[").concat(i,"] (").concat(e.shape[i],")")})},i=0;i<n;++i)_loop_1(i)},computeFlatOffset:function(e,t){for(var r=e.length>0?e[e.length-1]:1,n=0;n<e.length-1;n++)r+=e[n]*t[n];return r},computeOutShape:function(e,t,r){for(var n=[],i=0;i<e.length;i++)n[i]=Math.ceil((t[i]-e[i])/r[i]);return n},getNormalizedAxes:function(e,t,r,n,i,a,o,s,l){var u=e.length,d=Array(u),c=Array(u),p=Array(u);if(t.length&&r>0){var h=t[0],f=r+1;d=startIndicesWithElidedDims(o,h,f,n,e),c=stopIndicesWithElidedDims(s,h,f,i,e),p=stridesWithElidedDims(a,h,f,e)}else for(var m=0;m<u;m++)d[m]=startForAxis(o,n,a,e,m,l),c[m]=stopForAxis(s,i,a,e,m,l),p[m]=stridesForAxis(a,m,l);return{begin:d,end:c,strides:p}},isSliceContinous:function(e,t,r){for(var n=r.length,i=0;i<r.length;i++)if(r[i]>1){n=i;break}for(var i=n+1;i<r.length;i++)if(t[i]>0||r[i]!==e[i])return!1;return!0},maskToAxes:function(e){for(var t=[],r=0;e>0;)1&e&&t.push(r),e/=2,r++;return t},parseSliceParams:function(e,t,r){var n,i,a=e.shape.length;return(n="number"==typeof t?__spreadArray([t],__read(Array(a-1).fill(0)),!1):t.length<a?t.concat(Array(a-t.length).fill(0)):t.slice()).forEach(function(e){assert(-1!==e,function(){return"slice() does not support negative begin indexing."})}),i=(i=null==r?Array(a).fill(-1):"number"==typeof r?__spreadArray([r],__read(Array(a-1).fill(-1)),!1):r.length<a?r.concat(Array(a-r.length).fill(-1)):r).map(function(t,r){return t>=0?t:(assert(-1===t,function(){return"Negative size values should be exactly -1 but got "+"".concat(t," for the slice() size at index ").concat(r,".")}),e.shape[r]-n[r])}),[n,i]},sliceInfo:function(e,t,r,n,i,a,o,s,l){if(null==n?(u=Array(t.length)).fill(1):u=n,null!=o&&(o&o-1)!=0)throw Error("Multiple ellipses in slice is not allowed.");for(var u,d=!1,c={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:r.slice(),strides:u.slice(),beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:l},p=0;p<c.dims;p++)d&&(1<<p&s)!=0&&c.numAddAxisAfterEllipsis++,1<<p&o&&(d=!0);!d&&(c.ellipsisMask|=1<<c.dims,c.dims++);var h={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};(function(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;var r=0;t.beginValid=null!=e.begin,t.endValid=null!=e.end,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(var n=0;n<e.dims;n++)if(1<<n&e.ellipsisMask)for(var i=Math.min(t.dims-(e.dims-n)+1+e.numAddAxisAfterEllipsis,t.dims);r<i;r++)t.begin[r]=0,t.end[r]=0,t.strides[r]=1,t.beginMask|=1<<r,t.endMask|=1<<r,t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[r]=n;else if(1<<n&e.newAxisMask)t.finalShapeGatherIndices.push(-2),t.finalShapeGatherIndicesSparse.push(-1);else{if(r===t.begin.length)throw Error("Index out of range using input dim ".concat(r,"; input ")+"has only ".concat(t.dims," dims, ").concat(t.begin.length,"."));null!=e.begin&&(t.begin[r]=e.begin[n]),null!=e.end&&(t.end[r]=e.end[n]),t.strides[r]=e.strides[n],e.beginMask&1<<n&&(t.beginMask|=1<<r),e.endMask&1<<n&&(t.endMask|=1<<r),e.shrinkAxisMask&1<<n?(t.finalShapeGatherIndices.push(-1),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<r):(t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(n)),t.inputShapeGatherIndicesSparse[r]=n,r++}})(c,h);for(var f=!0,m=!0,y=!0,g=[],v=[],p=0;p<e.length;++p){if(0===h.strides[p])throw Error("strides[".concat(p,"] must be non-zero"));var b=!!(h.shrinkAxisMask&1<<p),S=e[p];if(-1===S){g.push(b?1:-1);continue}var x=[h.beginMask&1<<p,h.endMask&1<<p],P=[h.strides[p]>0?0:-1,h.strides[p]>0?S:S-1];if(b&&h.strides[p]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&1===h.strides[p];var C=!!(h.beginMask&1<<p&&h.endMask&1<<p);if(h.beginValid&&h.endValid){if(b){var _=h.begin[p]<0?S+h.begin[p]:h.begin[p];if(h.begin[p]=_,h.end[p]=h.begin[p]+1,_<0||_>=S)throw Error("slice index ".concat(h.begin[p]," of dimension ").concat(p," out of bounds."))}else h.begin[p]=canonical(h.begin[p],0,h.strides[p],S,x,P),h.end[p]=canonical(h.end[p],1,h.strides[p],S,x,P);var A=1===h.strides[p]&&0===h.begin[p]&&h.end[p]===S;f=f&&A,m=m&&(0===p&&1===h.strides[p]||A)}else f=f&&1===h.strides[p]&&C,m=m&&(0===p&&1===h.strides[p]||C);var T=void 0,w=!1;if(h.beginValid&&h.endValid?(T=h.end[p]-h.begin[p],w=!0):b?(T=1,w=!0):C&&S>=0&&(T=h.strides[p]<0?-S:S,w=!0),w){var E=void 0;E=0===T||T<0!=h.strides[p]<0?0:Math.trunc(T/h.strides[p])+(T%h.strides[p]!=0?1:0),g.push(E)}else g.push(-1)}for(var D=0;D<h.finalShapeGatherIndices.length;++D){var O=h.finalShapeGatherIndices[D];O>=0?v.push(g[O]):-2===O&&v.push(1)}return{finalShapeSparse:v.filter(function(e,t){return -2!==h.finalShapeGatherIndices[t]}),finalShape:v,isIdentity:f,sliceDim0:m,isSimpleSlice:y,begin:h.begin,end:h.end,strides:h.strides}},startForAxis:startForAxis,startIndicesWithElidedDims:startIndicesWithElidedDims,stopForAxis:stopForAxis,stopIndicesWithElidedDims:stopIndicesWithElidedDims,stridesForAxis:stridesForAxis,stridesWithElidedDims:stridesWithElidedDims},oG=function(){function OptimizerConstructors(){}return OptimizerConstructors.sgd=function(e){return new oR(e)},OptimizerConstructors.momentum=function(e,t,r){return void 0===r&&(r=!1),new oM(e,t,r)},OptimizerConstructors.rmsprop=function(e,t,r,n,i){return void 0===t&&(t=.9),void 0===r&&(r=0),void 0===n&&(n=null),void 0===i&&(i=!1),new ok(e,t,r,n,i)},OptimizerConstructors.adam=function(e,t,r,n){return void 0===e&&(e=.001),void 0===t&&(t=.9),void 0===r&&(r=.999),void 0===n&&(n=null),new oD(e,t,r,n)},OptimizerConstructors.adadelta=function(e,t,r){return void 0===e&&(e=.001),void 0===t&&(t=.95),void 0===r&&(r=null),new ow(e,t,r)},OptimizerConstructors.adamax=function(e,t,r,n,i){return void 0===e&&(e=.002),void 0===t&&(t=.9),void 0===r&&(r=.999),void 0===n&&(n=null),void 0===i&&(i=0),new oO(e,t,r,n,i)},OptimizerConstructors.adagrad=function(e,t){return void 0===t&&(t=.1),new oE(e,t)},OptimizerConstructors}(),oW="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:function(e){return e()};!function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"}(c||(c={}));var oX=/->/g;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(function(){var e,t;try{for(var r=__values(oL),n=r.next();!n.done;n=r.next()){var i=n.value;registerClass(i)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}})(),t.Abs="Abs",t.Acos=y,t.Acosh=g,t.AdadeltaOptimizer=ow,t.AdagradOptimizer=oE,t.AdamOptimizer=oD,t.AdamaxOptimizer=oO,t.Add="Add",t.AddN=v,t.All="All",t.Any="Any",t.ArgMax=b,t.ArgMin=S,t.Asin=x,t.Asinh=P,t.Atan=C,t.Atan2=A,t.Atanh=_,t.AvgPool=T,t.AvgPool3D=w,t.AvgPool3DGrad="AvgPool3DGrad",t.AvgPoolGrad="AvgPoolGrad",t.BatchMatMul=E,t.BatchToSpaceND=D,t.Bincount=O,t.BitwiseAnd=R,t.BroadcastArgs=M,t.BroadcastTo="BroadcastTo",t.Cast=k,t.Ceil=L,t.ClipByValue=I,t.Complex=B,t.ComplexAbs=N,t.Concat=F,t.Conv2D=V,t.Conv2DBackpropFilter=j,t.Conv2DBackpropInput=H,t.Conv3D=z,t.Conv3DBackpropFilterV2="Conv3DBackpropFilterV2",t.Conv3DBackpropInputV2=U,t.Cos="Cos",t.Cosh=G,t.CropAndResize=Y,t.Cumprod=W,t.Cumsum=X,t.DataStorage=p,t.DenseBincount=q,t.DepthToSpace=K,t.DepthwiseConv2dNative=$,t.DepthwiseConv2dNativeBackpropFilter=Z,t.DepthwiseConv2dNativeBackpropInput=J,t.Diag=Q,t.Dilation2D=ee,t.Dilation2DBackpropFilter="Dilation2DBackpropFilter",t.Dilation2DBackpropInput="Dilation2DBackpropInput",t.Draw=et,t.Einsum=en,t.Elu="Elu",t.EluGrad="EluGrad",t.Environment=m,t.Equal=ei,t.Erf="Erf",t.Exp="Exp",t.ExpandDims=ea,t.Expm1=eo,t.FFT="FFT",t.Fill=es,t.FlipLeftRight=el,t.Floor=eu,t.FloorDiv=ed,t.FromPixels=tL,t.FusedBatchNorm=ec,t.FusedConv2D=tN,t.FusedDepthwiseConv2D=tF,t.GatherNd=eh,t.GatherV2=ep,t.Greater=ef,t.GreaterEqual=em,t.IFFT=eg,t.Identity=ey,t.Imag=ev,t.IsFinite=eb,t.IsInf=eS,t.IsNan=ex,t.KernelBackend=h,t.LRN="LRN",t.LRNGrad="LRNGrad",t.LeakyRelu=eP,t.Less=eC,t.LessEqual=e_,t.LinSpace=eA,t.Log="Log",t.Log1p=eT,t.LogSoftmax="LogSoftmax",t.LogicalAnd=ew,t.LogicalNot=eE,t.LogicalOr=eD,t.LogicalXor="LogicalXor",t.LowerBound="LowerBound",t.MatrixBandPart="MatrixBandPart",t.Max="Max",t.MaxPool=eR,t.MaxPool3D=eM,t.MaxPool3DGrad="MaxPool3DGrad",t.MaxPoolGrad="MaxPoolGrad",t.MaxPoolWithArgmax=ek,t.Maximum=eO,t.Mean=eL,t.Min="Min",t.Minimum=eI,t.MirrorPad=eB,t.Mod="Mod",t.MomentumOptimizer=oM,t.Multinomial=eN,t.Multiply=eF,t.Neg="Neg",t.NonMaxSuppressionV3=ej,t.NonMaxSuppressionV4=eH,t.NonMaxSuppressionV5=ez,t.NotEqual=eV,t.OP_SCOPE_SUFFIX=rh,t.OneHot=eG,t.OnesLike=eU,t.Optimizer=oT,t.OptimizerConstructors=oG,t.Pack=eW,t.PadV2=eX,t.Pool="Pool",t.Pow="Pow",t.Prelu=eY,t.Prod=eq,t.RMSPropOptimizer=ok,t.RaggedGather=eK,t.RaggedRange=e$,t.RaggedTensorToTensor=eZ,t.Range=eJ,t.Real=eQ,t.RealDiv=er,t.Reciprocal=e1,t.Relu=e0,t.Relu6=e6,t.Reshape=e2,t.ResizeBilinear=e3,t.ResizeBilinearGrad="ResizeBilinearGrad",t.ResizeNearestNeighbor=e4,t.ResizeNearestNeighborGrad="ResizeNearestNeighborGrad",t.Reverse=e8,t.RotateWithOffset=tI,t.Round=e5,t.Rsqrt=e9,t.SGDOptimizer=oR,t.ScatterNd=e7,t.SearchSorted=tt,t.Select=tr,t.Selu=tn,t.Sigmoid=ts,t.Sign=to,t.Sin="Sin",t.Sinh=ta,t.Slice=ti,t.Softmax=tp,t.Softplus=tl,t.SpaceToBatchND=td,t.SparseFillEmptyRows=th,t.SparseReshape=tf,t.SparseSegmentMean=tm,t.SparseSegmentSum=ty,t.SparseToDense=tg,t.SplitV=tc,t.Sqrt=tu,t.Square="Square",t.SquaredDifference=tv,t.StaticRegexReplace=tb,t.Step=tk,t.StridedSlice=tS,t.StringNGrams=tx,t.StringSplit=tP,t.StringToHashBucketFast=tC,t.Sub="Sub",t.Sum="Sum",t.Tan="Tan",t.Tanh=t_,t.Tensor=ro,t.TensorBuffer=rn,t.TensorScatterUpdate=te,t.Tile=tA,t.TopK=tT,t.Transform=tw,t.Transpose=tE,t.Unique=tD,t.Unpack=tO,t.UnsortedSegmentSum=tR,t.UpperBound="UpperBound",t.Variable=rs,t.ZerosLike=tM,t._FusedMatMul=tB,t.abs=rF,t.acos=rV,t.acosh=rj,t.add=rL,t.addN=rH,t.all=rz,t.any=rU,t.argMax=rG,t.argMin=rW,t.asin=rX,t.asinh=rY,t.atan=rq,t.atan2=rK,t.atanh=r$,t.avgPool=rJ,t.avgPool3d=rQ,t.backend=backend,t.backend_util={__proto__:null,ERF_A1:.254829592,ERF_A2:-.284496736,ERF_A3:1.421413741,ERF_A4:-1.453152027,ERF_A5:1.061405429,ERF_P:.3275911,PARALLELIZE_THRESHOLD:30,get RowPartitionType(){return c},SELU_SCALE:1.0507009873554805,SELU_SCALEALPHA:1.7580993408473768,applyActivation:applyActivation,assertAndGetBroadcastShape:assertAndGetBroadcastShape,assertAxesAreInnerMostDims:function(e,t,r){assert(axesAreInnerMostDims(t,r),function(){return"".concat(e," supports only inner-most axes for now. ")+"Got axes ".concat(t," and rank-").concat(r," input.")})},assertParamsConsistent:/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=e[0].length;e.forEach(function(e,t){assert(e.length===r,function(){return"Error in concat".concat(r,"D: rank of tensors[").concat(t,"] must be the same ")+"as the rank of the rest (".concat(r,")")})}),assert(t>=0&&t<r,function(){return"Error in concat".concat(r,"D: axis must be between 0 and ").concat(r-1,".")});var n=e[0];e.forEach(function(e,i){for(var a=0;a<r;a++)assert(a===t||e[a]===n[a],function(){return"Error in concat".concat(r,"D: Shape of tensors[").concat(i,"] (").concat(e,") ")+"does not match the shape of the rest (".concat(n,") ")+"along the non-concatenated axis ".concat(i,".")})})},assignToTypedArray:function(e,t,r,n){e[2*n]=t,e[2*n+1]=r},axesAreInnerMostDims:axesAreInnerMostDims,calculateShapes:calculateShapes,checkEinsumDimSizes:function(e,t,r){for(var n=Array(e),_loop_2=function(e){for(var i=r[e].shape,_loop_3=function(r){void 0===n[t[e][r]]?n[t[e][r]]=i[r]:assert(n[t[e][r]]===i[r],function(){return"Expected dimension ".concat(n[t[e][r]]," at axis ").concat(r," ")+"of input shaped ".concat(JSON.stringify(i),", ")+"but got dimension ".concat(i[r])})},a=0;a<t[e].length;++a)_loop_3(a)},i=0;i<r.length;++i)_loop_2(i)},checkPadOnDimRoundingMode:checkPadOnDimRoundingMode,combineLocations:combineLocations,combineRaggedTensorToTensorShapes:function(e,t,r){var n=[];if(null==r&&null==t)return n;if(null==t)for(;n.length<e+r.length;)n.push(-1);else n=t.slice();if(null==r)return n;if(e+r.length!==n.length)throw Error("rt input.shape and shape=".concat(t," are incompatible: rt input.rank = ").concat(e+r.length,", but shape.rank = ").concat(n.length));for(var i=1;i<r.length;++i){var a=r[i],o=n[n.length-r.length+i],s=n[o];if(a>=0){if(s>=0){if(s!==a)throw Error("rt input.shape and shape=".concat(t," are incompatible: rt input.shape[").concat(i+e,"] = ").concat(a," but shape[").concat(i+e,"] = ").concat(s))}else n[o]=a}}return n},complexWithEvenIndex:function(e){for(var t=Math.ceil(e.length/4),r=new Float32Array(t),n=new Float32Array(t),i=0;i<e.length;i+=4)r[Math.floor(i/4)]=e[i],n[Math.floor(i/4)]=e[i+1];return{real:r,imag:n}},complexWithOddIndex:function(e){for(var t=Math.floor(e.length/4),r=new Float32Array(t),n=new Float32Array(t),i=2;i<e.length;i+=4)r[Math.floor(i/4)]=e[i],n[Math.floor(i/4)]=e[i+1];return{real:r,imag:n}},computeConv2DInfo:computeConv2DInfo,computeConv3DInfo:computeConv3DInfo,computeDefaultPad:computeDefaultPad,computeDilation2DInfo:function(e,t,r,n,i,a){void 0===i&&(i="NHWC");var o=e[3];return computeConv2DInfo(e,__spreadArray(__spreadArray([],__read(t),!1),[o],!1),r,a,n,null,null,convertConv2DDataFormat(i))},computeOptimalWindowSize:function(e){return e<=30?e:nearestDivisor(e,Math.floor(Math.sqrt(e)))},computeOutAndReduceShapes:function(e,t){for(var r=[],n=e.length,i=0;i<n;i++)-1===t.indexOf(i)&&r.push(e[i]);return[r,t.map(function(t){return e[t]})]},computeOutShape:function(e,t){for(var r=e[0].slice(),n=1;n<e.length;n++)r[t]+=e[n][t];return r},computePool2DInfo:computePool2DInfo,computePool3DInfo:function(e,t,r,n,i,a,o){void 0===o&&(o="NDHWC");var s,l,u=__read(parse3TupleParam(t),3),d=u[0],c=u[1],p=u[2];if("NDHWC"===o)l="channelsLast",s=[d,c,p,e[4],e[4]];else if("NCDHW"===o)l="channelsFirst",s=[d,c,p,e[1],e[1]];else throw Error("Unknown dataFormat ".concat(o));return computeConv3DInfo(e,s,r,n,i,!1,l,a)},convertConv2DDataFormat:convertConv2DDataFormat,decodeEinsumEquation:function(e,t){var r=((e=e.replace(/\s/g,"")).length-e.replace(oX,"").length)/2;if(r<1)throw Error("Equations without an arrow are not supported.");if(r>1)throw Error('Equation must contain exactly one arrow ("'.concat("->",'").'));var n=__read(e.split("->"),2),i=n[0],a=n[1];assert(-1===i.indexOf("..."),function(){return'The ellipsis notation ("'.concat("...",'") is not supported yet.')});var o=i.split(","),s=o.length;if(t!==s)throw Error("Expected ".concat(s," input tensors, received ").concat(t));if(s>2)throw Error("Support for more than 2 input tensors is not implemented yet.");for(var l=[],u=0;u<a.length;++u)!function(e){var t=a[e];if(!o.some(function(e){return -1!==e.indexOf(t)}))throw Error("Output subscripts contain the label ".concat(t," ")+"not present in the input subscripts.");-1===l.indexOf(t)&&l.push(t)}(u);for(var u=0;u<i.length;++u){var d=i[u];-1===l.indexOf(d)&&","!==d&&l.push(d)}for(var c=Array(o.length),u=0;u<s;++u){if(new Set(o[u].split("")).size!==o[u].length)throw Error("Found duplicate axes in input component ".concat(o[u],". ")+"Support for duplicate axes in input is not implemented yet.");c[u]=[];for(var p=0;p<o[u].length;++p)c[u].push(l.indexOf(o[u][p]))}for(var h=l.length,f=a.length,m=[],u=f;u<h;++u)m.push(u);return{allDims:l,summedDims:m,idDims:c}},eitherStridesOrDilationsAreOne:eitherStridesOrDilationsAreOne,expandShapeToKeepDim:expandShapeToKeepDim,exponent:function(e,t,r){var n=(r?2:-2)*Math.PI*(e/t);return{real:Math.cos(n),imag:Math.sin(n)}},exponents:function(e,t){for(var r=new Float32Array(e/2),n=new Float32Array(e/2),i=0;i<Math.ceil(e/2);i++){var a=(t?2:-2)*Math.PI*(i/e);r[i]=Math.cos(a),n[i]=Math.sin(a)}return{real:r,imag:n}},fromStringArrayToUint8:function(e){return e.map(function(e){return encodeString(e)})},fromUint8ToStringArray:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){try{return e.map(function(e){return decodeString(e)})}catch(e){throw Error("Failed to decode encoded string bytes into utf-8, error: ".concat(e))}},getAxesPermutation:function(e,t){if(axesAreInnerMostDims(e,t))return null;for(var r=[],n=0;n<t;++n)-1===e.indexOf(n)&&r.push(n);return e.forEach(function(e){return r.push(e)}),r},getBroadcastDims:getBroadcastDims,getComplexWithIndex:function(e,t){return{real:e[2*t],imag:e[2*t+1]}},getEinsumComputePath:function(e,t){var r,n,i=[],a=0;0===e.length&&e.push(-1),a=e.length+1;for(var o=0;o<a;++o)i.push([]);for(var s=[],o=0;o<e.length;++o){var l=function(e,t){for(var r=[],n=0;n<e.length;++n)(0===e[n].length||-1!==e[n].indexOf(t)||-1===t)&&r.push(n);return r}(t,e[o]);try{for(var u=(r=void 0,__values(l)),d=u.next();!d.done;d=u.next()){var c=d.value;-1===s.indexOf(c)&&(i[o].push(c),s.push(c))}}catch(e){r={error:e}}finally{try{d&&!d.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}}return{path:e,steps:i}},getEinsumPermutation:function(e,t){var r=Array(e);r.fill(-1);for(var n=0;n<t.length;++n)r[t[n]]=n;for(var i=[],n=0;n<e;++n)-1===r[n]&&i.push(n);return{permutationIndices:r=r.filter(function(e){return -1!==e}),expandDims:i}},getFusedBiasGradient:getFusedBiasGradient,getFusedDyActivation:getFusedDyActivation,getImageCenter:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){return[r*("number"==typeof e?e:e[0]),t*("number"==typeof e?e:e[1])]},getInnerMostAxes:function(e,t){for(var r=[],n=t-e;n<t;++n)r.push(n);return r},getPermuted:function(e,t,r){void 0===r&&(r=!0);var n=[];if(r){n.push(t);for(var i=t+1;i<e;++i)i<=2*t?(n.push(i),n.push(i-(t+1))):n.push(i)}else{for(var a=[],o=[],i=1;i<e;++i)i>=2*t+1||i%2==1?o.push(i):a.push(i);n.push.apply(n,__spreadArray([],__read(a),!1)),n.push(0),n.push.apply(n,__spreadArray([],__read(o),!1))}return n},getRaggedRank:function(e){return 0===e.length?0:e[0]===c.FIRST_DIM_SIZE?e.length-1:e.length},getReductionAxes:getReductionAxes,getReshaped:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,n){void 0===n&&(n=!0);var i=[];if(n)(i=i.concat(t.slice(0))).push(e[0]/r),i=i.concat(e.slice(1));else{i=i.concat(e[0]);for(var a=t.length,o=0;o<a;++o)i=i.concat([e[o+1]/t[o],t[o]]);i=i.concat(e.slice(a+1))}return i},getReshapedPermuted:function(e,t,r,n){void 0===n&&(n=!0);var i=[];n?i.push(e[0]/r):i.push(e[0]*r);for(var a=1;a<e.length;++a)a<=t.length?n?i.push(t[a-1]*e[a]):i.push(e[a]/t[a-1]):i.push(e[a]);return i},getRowPartitionTypesHelper:function(e){var t,r,n={FIRST_DIM_SIZE:c.FIRST_DIM_SIZE,VALUE_ROWIDS:c.VALUE_ROWIDS,ROW_LENGTHS:c.ROW_LENGTHS,ROW_SPLITS:c.ROW_SPLITS,ROW_LIMITS:c.ROW_LIMITS,ROW_STARTS:c.ROW_STARTS},i=[];try{for(var a=__values(e),o=a.next();!o.done;o=a.next()){var s=o.value;if(s in n)i.push(n[s]);else break}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return i},getSliceBeginCoords:function(e,t){for(var r=[0],n=0;n<t;++n)r.push(e[n][0]);return r},getSliceSize:function(e,t,r){for(var n=e.slice(0,1),i=0;i<r;++i)n.push(e[i+1]-t[i][0]-t[i][1]);return n},getSparseFillEmptyRowsIndicesDenseShapeMismatch:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return"Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ".concat(e)},getSparseFillEmptyRowsNegativeIndexErrorMessage:function(e,t){return"indices(".concat(e,", 0) is invalid: ").concat(t," < 0")},getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:function(e,t,r){return"indices(".concat(e,", 0) is invalid: ").concat(t," >= ").concat(r)},getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:function(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"},getSparseReshapeInputOutputMismatchErrorMessage:function(e,t){var r=sizeFromShape(e),n=sizeFromShape(t);return"Input to reshape is a tensor with ".concat(r," dense values, but the requested shape has ").concat(n,". inputShape=").concat(e," outputShape=").concat(t)},getSparseReshapeInputOutputMultipleErrorMessage:function(e,t){var r=sizeFromShape(e),n=sizeFromShape(t);return"Input to reshape is a SparseTensor with ".concat(r,"\n  dense values, but the requested shape requires a multiple of ").concat(n,". inputShape=").concat(e," outputShape= ").concat(t)},getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){return"only one output dimension may be -1, not both ".concat(e," and ").concat(t)},getSparseReshapeNegativeOutputDimErrorMessage:function(e,t){return"size ".concat(e," must be non-negative, not ").concat(t)},getSparseSegmentReductionIndicesOutOfRangeErrorMessage:function(e,t,r){return"Bad: indices[".concat(e,"] == ").concat(t," out of range [0, ").concat(r,")")},getSparseSegmentReductionNegativeSegmentIdsErrorMessage:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(){return"segment ids must be >= 0"},getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:function(){return"segment ids are not increasing"},getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:function(e,t){return"Segment id ".concat(e," out of range [0, ").concat(t,"), possibly because segmentIds input is not sorted.")},getUndoAxesPermutation:function(e){return e.map(function(e,t){return[t,e]}).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]})},isIdentityPermutation:function(e){return e.every(function(e,t){return e===t})},log:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];env().getBool("IS_TEST")||env().getBool("PROD")||console.log.apply(console,__spreadArray([],__read(e),!1))},mergeRealAndImagArrays:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){if(e.length!==t.length)throw Error("Cannot merge real and imag arrays of different lengths. real:"+"".concat(e.length,", imag: ").concat(t.length,"."));for(var r=new Float32Array(2*e.length),n=0;n<r.length;n+=2)r[n]=e[n/2],r[n+1]=t[n/2];return r},prepareAndValidate:prepareAndValidate,prepareSplitSize:function(e,t,r){void 0===r&&(r=0);var n=[];if("number"==typeof t)assert(e.shape[r]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=Array(t).fill(e.shape[r]/t);else{assert(1>=t.reduce(function(e,t){return -1===t&&(e+=1),e},0),function(){return"There should be only one negative value in split array."});var i=t.indexOf(-1);if(-1!==i){var a=t.reduce(function(e,t){return t>0?e+t:e});t[i]=e.shape[r]-a}assert(e.shape[r]===t.reduce(function(e,t){return e+t}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t}return n},segment_util:{__proto__:null,collectGatherOpShapeInfo:function(e,t,r,n){var i=t.shape.length,a=e.shape.length;if(0!==n&&(n<-i||n>i))throw Error("Expect batchDims in the range of [-".concat(i,", ").concat(i,"], but got ").concat(n));if(n<0&&(n+=i),n>a)throw Error("batchDims (".concat(n,") must be less than rank(x) (\n    ").concat(a,")."));if(r<n)throw Error("batchDims (".concat(n,") must be less than or equal to axis (").concat(r,")."));for(var o=0;o<n;++o)if(e.shape[o]!==t.shape[o])throw Error("x.shape[".concat(o,"]: ").concat(e.shape[o]," should be equal to indices.shape[").concat(o,"]: ").concat(t.shape[o],"."));for(var s=e.shape[r],l=[],u=1,d=1,c=1,o=0;o<n;++o)l.push(e.shape[o]),u*=e.shape[o];for(var o=n;o<r;o++)l.push(e.shape[o]),d*=e.shape[o];for(var o=n;o<i;o++)l.push(t.shape[o]);for(var o=r+1;o<a;o++)l.push(e.shape[o]),c*=e.shape[o];return{batchSize:u,sliceSize:c,outerSize:d,dimSize:s,outputShape:l}},computeOutShape:function(e,t,r){for(var n=[],i=e.length,a=0;a<i;a++)a!==t?n.push(e[a]):n.push(r);return n},segOpComputeOptimalWindowSize:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r,n=!1;for(e<=30?(r=e,n=!0):r=nearestDivisor(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=nearestDivisor(e,r+1);return r}},shouldFuse:shouldFuse,slice_util:oU,splitRealAndImagArrays:function(e){for(var t=new Float32Array(e.length/2),r=new Float32Array(e.length/2),n=0;n<e.length;n+=2)t[n/2]=e[n],r[n/2]=e[n+1];return{real:t,imag:r}},stridesOrDilationsArePositive:stridesOrDilationsArePositive,tupleValuesAreOne:tupleValuesAreOne,upcastType:upcastType,validateDefaultValueShape:function(e,t){if(null!=e&&null!=t){var r=e.length,n=t.length;if(r>=n)throw Error("defaultValue.shape=".concat(e," and ragged tensor flatValues.shape=").concat(t,", are incompatible: defaultValue.rank = ").concat(r," must be less than ragged tensor input flatValues.rank = ").concat(n,")"));for(var i=0;i<Math.min(r,n-1);++i){var a=e[i],o=t[i+1];if(a>=0&&o>=0&&1!==a&&a!==o)throw Error("defaultValue.shape=".concat(e,", and ragged tensor input flatValues.shape=").concat(t," are incompatible: defaultValue.shape[").concat(i-e.length,"] = ").concat(a," but ragged tensor input.flatValues.shape[").concat(i-e.length,"] = ").concat(o))}}},validateInput:validateInput$1,validateUpdateShape:validateUpdateShape,warn:warn},t.basicLSTMCell=r6,t.batchNorm=r5,t.batchNorm2d=r9,t.batchNorm3d=r7,t.batchNorm4d=ne,t.batchToSpaceND=r8,t.bincount=nt,t.bitwiseAnd=nr,t.booleanMaskAsync=function(e,t,r){return __awaiter(this,void 0,void 0,function(){var n,i,a,o,s,l,u,d,c,p,h,f,m;return __generator(this,function(y){switch(y.label){case 0:for(n=convertToTensor(e,"tensor","boolMask"),i=convertToTensor(t,"mask","boolMask","bool"),a=null==r?0:r,o=i.rank,s=n.shape,assert(o>0,function(){return"mask cannot be scalar"}),assertShapesMatch(s.slice(a,a+o),i.shape,"mask's shape must match the first K dimensions of tensor's shape,"),l=1,u=a;u<a+o;u++)l*=s[u];return d=s.slice(0,a).concat([l],s.slice(a+o)),c=rZ(n,d),[4,whereAsync(p=rZ(i,[-1]))];case 1:return f=aT(h=y.sent(),[1]),m=n$(c,f,a),e!==n&&n.dispose(),t!==i&&i.dispose(),f.dispose(),c.dispose(),p.dispose(),h.dispose(),[2,m]}})})},t.broadcastArgs=nn,t.broadcastTo=ni,t.broadcast_util={__proto__:null,assertAndGetBroadcastShape:assertAndGetBroadcastShape,getBroadcastDims:getBroadcastDims,getReductionAxes:getReductionAxes},t.browser={__proto__:null,draw:function(e,t,r){var n=convertToTensor(e,"img","draw");if(!(e instanceof ro)){var i=n;n=rM(i,"int32"),i.dispose()}validateImgTensor(n),function(e){var t=(null==e?void 0:e.alpha)||1;if(t>1||t<0)throw Error("Alpha value ".concat(t," is suppoed to be in range [0 - 1]."))}(null==r?void 0:r.imageOptions);var a={image:n};rc.runKernel(et,a,{canvas:t,options:r})},fromPixels:oz,fromPixelsAsync:function(e,t){return void 0===t&&(t=3),__awaiter(this,void 0,void 0,function(){var r,n;return __generator(this,function(i){switch(i.label){case 0:var a;if(r=null,!(env().getBool("WRAP_TO_IMAGEBITMAP")&&"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(e instanceof ImageBitmap)&&null!=(a=e)&&0!==a.width&&0!==a.height&&!(null!=e&&e.data instanceof Uint8Array)))return[3,5];n=void 0,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,createImageBitmap(e,{premultiplyAlpha:"none"})];case 2:return n=i.sent(),[3,4];case 3:return i.sent(),n=null,[3,4];case 4:return r=null!=n&&n.width===e.width&&n.height===e.height?n:e,[3,6];case 5:r=e,i.label=6;case 6:return[2,fromPixels_(r,t)]}})})},toPixels:function(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i,a,o,s,l,u,d,c,p,h,f,m,y,g;return __generator(this,function(v){switch(v.label){case 0:return r=convertToTensor(e,"img","toPixels"),e instanceof ro||(r=rM(n=r,"int32"),n.dispose()),validateImgTensor(r),a=(i=__read(r.shape.slice(0,2),2))[0],o=i[1],s=2===r.rank?1:r.shape[2],[4,r.data()];case 1:for(c=0,l=v.sent(),u="float32"===r.dtype?255:1,d=new Uint8ClampedArray(o*a*4);c<a*o;++c){for(h=0,p=[0,0,0,255];h<s;h++){if(f=l[c*s+h],"float32"===r.dtype){if(f<0||f>1)throw Error("Tensor values for a float32 Tensor must be in the "+"range [0 - 1] but encountered ".concat(f,"."))}else if("int32"===r.dtype&&(f<0||f>255))throw Error("Tensor values for a int32 Tensor must be in the "+"range [0 - 255] but encountered ".concat(f,"."));1===s?(p[0]=f*u,p[1]=f*u,p[2]=f*u):p[h]=f*u}d[(m=4*c)+0]=Math.round(p[0]),d[m+1]=Math.round(p[1]),d[m+2]=Math.round(p[2]),d[m+3]=Math.round(p[3])}return null!=t&&(oH||null==getKernel(et,rc.backendName)||(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),oH=!0),t.width=o,t.height=a,y=t.getContext("2d"),g=new ImageData(d,o,a),y.putImageData(g,0,0)),r!==e&&r.dispose(),[2,d]}})})}},t.buffer=buffer,t.cast=rM,t.ceil=na,t.clipByValue=no,t.clone=rk,t.complex=rf,t.concat=r1,t.concat1d=ns,t.concat2d=nl,t.concat3d=nu,t.concat4d=nd,t.conv1d=np,t.conv2d=nc,t.conv2dTranspose=nf,t.conv3d=nm,t.conv3dTranspose=ng,t.copyRegisteredKernels=function(e,t){getKernelsForBackend(e).forEach(function(e){registerKernel(Object.assign({},e,{backendName:t}))})},t.cos=nv,t.cosh=nb,t.cosineWindow=cosineWindow,t.cumprod=nS,t.cumsum=nx,t.customGrad=customGrad,t.denseBincount=nP,t.deprecationWarn=function(e){env().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")},t.depthToSpace=nC,t.depthwiseConv2d=n_,t.device_util={__proto__:null,isBrowser:isBrowser,isMobile:function(e){if(void 0!==l)return l;if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;var t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){var r=e;return r.userAgentData&&r.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1},mockIsMobile:function(e){l=e}},t.diag=nA,t.dilation2d=nT,t.disableDeprecationWarnings=function(){env().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")},t.dispose=dispose,t.disposeVariables=function(){rc.disposeVariables()},t.div=rB,t.divNoNan=nO,t.dot=nR,t.dropout=az,t.einsum=nM,t.elu=nk,t.enableDebugMode=function(){env().set("DEBUG",!0)},t.enableProdMode=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(){env().set("PROD",!0)},t.enclosingPowerOfTwo=enclosingPowerOfTwo,t.engine=function(){return rc},t.ensureShape=nL,t.env=env,t.equal=nw,t.erf=nI,t.euclideanNorm=nU,t.exp=nG,t.expandDims=nW,t.expm1=nX,t.eye=nq,t.fft=aS,t.fill=fill,t.findBackend=function(e){return rc.findBackend(e)},t.findBackendFactory=function(e){return rc.findBackendFactory(e)},t.floor=nK,t.floorDiv=rI,t.fused={__proto__:null,conv2d:aG,depthwiseConv2d:aY,matMul:aq},t.gather=n$,t.gatherND=aH,t.gather_util={__proto__:null,prepareAndValidate:prepareAndValidate},t.getBackend=getBackend,t.getGradient=getGradient,t.getKernel=getKernel,t.getKernelsForBackend=getKernelsForBackend,t.grad=function(e){return assert(isFunction(e),function(){return"The f passed in grad(f) must be a function"}),function(t,r){var n=convertToTensor(t,"x","tf.grad","string_or_numeric"),i=null!=r?convertToTensor(r,"dy","tf.grad"):null;return rc.tidy(function(){var t=rc.gradients(function(){return e(n)},[n],i),r=t.value,a=t.grads;return null!=i&&assertShapesMatch(r.shape,i.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),checkGrads(a),a[0]})}},t.grads=function(e){return assert(isFunction(e),function(){return"The f passed in grads(f) must be a function"}),function(t,r){assert(Array.isArray(t),function(){return"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"});var n=convertToTensorArray(t,"args","tf.grads","string_or_numeric"),i=null!=r?convertToTensor(r,"dy","tf.grads"):null;return rc.tidy(function(){var t=rc.gradients(function(){return e.apply(void 0,__spreadArray([],__read(n),!1))},n,i),r=t.value,a=t.grads;return null!=i&&assertShapesMatch(r.shape,i.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),checkGrads(a),a})}},t.greater=nZ,t.greaterEqual=nJ,t.ifft=ax,t.imag=nQ,t.image={flipLeftRight:a1,grayscaleToRGB:a0,resizeNearestNeighbor:a9,resizeBilinear:a5,rgbToGrayscale:a2,rotateWithOffset:a4,cropAndResize:aQ,nonMaxSuppression:a3,nonMaxSuppressionAsync:function(e,t,r,n,i){return void 0===n&&(n=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),__awaiter(this,void 0,void 0,function(){var a,o,s,l,u;return __generator(this,function(d){switch(d.label){case 0:return a=convertToTensor(e,"boxes","nonMaxSuppressionAsync"),o=convertToTensor(t,"scores","nonMaxSuppressionAsync"),r=(s=nonMaxSuppSanityCheck(a,o,r,n,i)).maxOutputSize,n=s.iouThreshold,i=s.scoreThreshold,[4,Promise.all([a.data(),o.data()])];case 1:return u=nonMaxSuppressionV3Impl((l=d.sent())[0],l[1],r,n,i).selectedIndices,a!==e&&a.dispose(),o!==t&&o.dispose(),[2,tensor1d(u,"int32")]}})})},nonMaxSuppressionWithScore:a6,nonMaxSuppressionWithScoreAsync:function(e,t,r,n,i,a){return void 0===n&&(n=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),void 0===a&&(a=0),__awaiter(this,void 0,void 0,function(){var o,s,l,u,d,c,p;return __generator(this,function(h){switch(h.label){case 0:return o=convertToTensor(e,"boxes","nonMaxSuppressionAsync"),s=convertToTensor(t,"scores","nonMaxSuppressionAsync"),r=(l=nonMaxSuppSanityCheck(o,s,r,n,i,a)).maxOutputSize,n=l.iouThreshold,i=l.scoreThreshold,a=l.softNmsSigma,[4,Promise.all([o.data(),s.data()])];case 1:return c=(d=nonMaxSuppressionV5Impl((u=h.sent())[0],u[1],r,n,i,a)).selectedIndices,p=d.selectedScores,o!==e&&o.dispose(),s!==t&&s.dispose(),[2,{selectedIndices:tensor1d(c,"int32"),selectedScores:tensor1d(p)}]}})})},nonMaxSuppressionPadded:a8,nonMaxSuppressionPaddedAsync:function(e,t,r,n,i,a){return void 0===n&&(n=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),void 0===a&&(a=!1),__awaiter(this,void 0,void 0,function(){var o,s,l,u,d,c,p,h,f,m;return __generator(this,function(y){switch(y.label){case 0:return o=convertToTensor(e,"boxes","nonMaxSuppressionAsync"),s=convertToTensor(t,"scores","nonMaxSuppressionAsync"),u=(l=nonMaxSuppSanityCheck(o,s,r,n,i,null)).maxOutputSize,d=l.iouThreshold,c=l.scoreThreshold,[4,Promise.all([o.data(),s.data()])];case 1:return f=(h=nonMaxSuppressionV4Impl((p=__read.apply(void 0,[y.sent(),2]))[0],p[1],u,d,c,a)).selectedIndices,m=h.validOutputs,o!==e&&o.dispose(),s!==t&&s.dispose(),[2,{selectedIndices:tensor1d(f,"int32"),validOutputs:scalar(m,"int32")}]}})})},threshold:a7,transform:oe},t.inTopKAsync=function(e,t,r){return void 0===r&&(r=1),__awaiter(this,void 0,void 0,function(){var n,i,a,o,s,l,u,d,c,p,h,f,m,y;return __generator(this,function(g){switch(g.label){case 0:return n=convertToTensor(e,"predictions","inTopK"),i=convertToTensor(t,"targets","inTopK"),assert(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, "+"but got ".concat(n.rank)}),assert(n.rank-1===i.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+"".concat(n.rank," and targets rank ").concat(i.rank)}),assertShapesMatch(n.shape.slice(0,n.shape.length-1),i.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],assert(r>0&&r<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last "+"dimension (".concat(a,"), but got ").concat(r)}),[4,n.data()];case 1:return o=g.sent(),[4,i.data()];case 2:for(s=g.sent(),u=(l=__read([o.length/a,a],2))[0],d=l[1],c=getArrayFromDType("bool",u),p=0;p<u;p++){for(y=0,h=p*d,f=o.subarray(h,h+d),m=[];y<f.length;y++)m.push({value:f[y],index:y});for(m.sort(function(e,t){return t.value-e.value}),c[p]=0,y=0;y<r;y++)if(m[y].index===s[p]){c[p]=1;break}}return e!==n&&n.dispose(),t!==i&&i.dispose(),[2,tensor(c,i.shape,"bool")]}})})},t.io={__proto__:null,CompositeArrayBuffer:ry,browserFiles:function(e){return new oB(e)},browserHTTPRequest:function(e,t){return http(e,t)},concatenateArrayBuffers:function(e){return ry.join(e)},copyModel:function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){return[2,cloneModelInternal(e,t,!1)]})})},decodeWeights:decodeWeights,decodeWeightsStream:function(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i,a,o,s,l,u,d,c,p,h,f=this;return __generator(this,function(m){switch(m.label){case 0:r={},n=e.getReader(),i=new ArrayBuffer(0),m.label=1;case 1:m.trys.push([1,7,8,9]),o=(a=__values(t)).next(),m.label=2;case 2:if(o.done)return[3,6];return[4,function(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i,a,o,s,l;return __generator(this,function(u){switch(u.label){case 0:if(r=sizeFromShape(e.shape),!("quantization"in e))return[3,1];return n=rm[e.quantization.dtype],[3,7];case 1:if("string"!==e.dtype)return[3,6];i=0,a=0,u.label=2;case 2:if(!(a<r))return[3,5];return o=i,s=4,l=Uint32Array.bind,[4,t(i,i+4)];case 3:i=o+(s+new(l.apply(Uint32Array,[void 0,u.sent()]))()[0]),u.label=4;case 4:return a++,[3,2];case 5:return[2,i];case 6:n=rm[e.dtype],u.label=7;case 7:return[2,r*n]}})})}(s=o.value,function(e,t){return __awaiter(f,void 0,void 0,function(){return __generator(this,function(r){switch(r.label){case 0:return[4,readToLength(n,i,t)];case 1:return[2,(i=r.sent()).slice(e,t)]}})})})];case 3:return l=m.sent(),[4,readToLength(n,i,l)];case 4:u=(i=m.sent()).slice(0,l),i=i.slice(l),d=decodeWeight(s,u),r[s.name]=d,"webgpu"===getBackend()&&"uploadToGPU"in(c=backend())&&sizeFromShape(d.shape)>=env().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&c.uploadToGPU(d.dataId),m.label=5;case 5:return o=a.next(),[3,2];case 6:return[3,9];case 7:return p={error:m.sent()},[3,9];case 8:try{o&&!o.done&&(h=a.return)&&h.call(a)}finally{if(p)throw p.error}return[7];case 9:return[2,r]}})})},encodeWeights:function(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i,a,o,s=this;return __generator(this,function(l){switch(l.label){case 0:for(o=0,r=[],n=[],i=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e),a=function(a){var o=i[a],l=Array.isArray(e)?e[a].tensor:e[o];if("float32"!==l.dtype&&"int32"!==l.dtype&&"bool"!==l.dtype&&"string"!==l.dtype&&"complex64"!==l.dtype)throw Error("Unsupported dtype in weight '".concat(o,"': ").concat(l.dtype));var u={name:o,shape:l.shape,dtype:l.dtype};if("string"===l.dtype){var d=new Promise(function(e){return __awaiter(s,void 0,void 0,function(){var t,r,n,i,a,o,s;return __generator(this,function(u){switch(u.label){case 0:return[4,l.bytes()];case 1:for(a=0,r=(t=u.sent()).reduce(function(e,t){return e+t.length},0)+4*t.length,n=new Uint8Array(r),i=0;a<t.length;a++)o=t[a],s=new Uint8Array(new Uint32Array([o.length]).buffer),n.set(s,i),i+=4,n.set(o,i),i+=o.length;return e(n),[2]}})})});n.push(d)}else n.push(l.data());null!=t&&(u.group=t),r.push(u)};o<i.length;++o)a(o);return[4,Promise.all(n)];case 1:return[2,{data:function(e){if(null===e)throw Error("Invalid input value: ".concat(JSON.stringify(e)));var t=0,r=[];e.forEach(function(e){if(t+=e.byteLength,r.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error("Unsupported TypedArray subtype: ".concat(e.constructor.name))});var n=new Uint8Array(t),i=0;return r.forEach(function(e){n.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),n.buffer}(l.sent()),specs:r}]}})})},fromMemory:function(e,t,r,n){var i=arguments;return new PassthroughAsync(fromMemorySync.apply(void 0,__spreadArray([],__read(i),!1)))},fromMemorySync:fromMemorySync,getLoadHandlers:function(e,t){return rv.getLoadHandlers(e,t)},getModelArtifactsForJSON:getModelArtifactsForJSON,getModelArtifactsForJSONSync:getModelArtifactsForJSONSync,getModelArtifactsInfoForJSON:getModelArtifactsInfoForJSON,getSaveHandlers:function(e){return rv.getSaveHandlers(e)},getWeightSpecs:getWeightSpecs,http:http,isHTTPScheme:isHTTPScheme,listModels:function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,n,i,a,o,s,l;return __generator(this,function(u){switch(u.label){case 0:e=rE.getSchemes(),t={},u.label=1;case 1:u.trys.push([1,6,7,8]),n=(r=__values(e)).next(),u.label=2;case 2:if(n.done)return[3,5];return i=n.value,[4,rE.getManager(i).listModels()];case 3:for(o in a=u.sent())t[i+"://"+o]=a[o];u.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return s={error:u.sent()},[3,8];case 7:try{n&&!n.done&&(l=r.return)&&l.call(r)}finally{if(s)throw s.error}return[7];case 8:return[2,t]}})})},loadWeights:function(e,t,r,n){return void 0===t&&(t=""),__awaiter(this,void 0,void 0,function(){return __generator(this,function(i){return[2,weightsLoaderFactory(function(e){return loadWeightsAsArrayBuffer(e,{requestInit:n})})(e,t,r)]})})},moveModel:function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){return[2,cloneModelInternal(e,t,!0)]})})},registerLoadRouter:function(e){return rv.registerLoadRouter(e)},registerSaveRouter:function(e){return rv.registerSaveRouter(e)},removeModel:function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){return t=parseURL(e),[2,rE.getManager(t.scheme).removeModel(t.path)]})})},weightsLoaderFactory:weightsLoaderFactory,withSaveHandler:function(e){return new oV(e)},withSaveHandlerSync:function(e){return new oV(e)}},t.irfft=aP,t.isFinite=n1,t.isInf=n0,t.isNaN=n2,t.keep=keep,t.kernel_impls={__proto__:null,nonMaxSuppressionV3Impl:nonMaxSuppressionV3Impl,nonMaxSuppressionV4Impl:nonMaxSuppressionV4Impl,nonMaxSuppressionV5Impl:nonMaxSuppressionV5Impl,whereImpl:whereImpl},t.leakyRelu=n4,t.less=n3,t.lessEqual=n6,t.linalg={bandPart:ot,gramSchmidt:or,qr:on},t.linspace=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){if(r<=0)throw Error("The number of values should be positive.");return rc.runKernel(eA,{},{start:e,stop:t,num:r})},t.localResponseNormalization=n8,t.log=n5,t.log1p=n9,t.logSigmoid=it,t.logSoftmax=ii,t.logSumExp=ia,t.logicalAnd=io,t.logicalNot=is,t.logicalOr=il,t.logicalXor=iu,t.losses={absoluteDifference:oa,computeWeightedLoss:oi,cosineDistance:oo,hingeLoss:os,huberLoss:ol,logLoss:ou,meanSquaredError:od,sigmoidCrossEntropy:oc,softmaxCrossEntropy:oh},t.lowerBound=/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){return id(e,t,"left")},t.matMul=r0,t.math={__proto__:null,confusionMatrix:oj},t.max=nB,t.maxPool=ic,t.maxPool3d=ip,t.maxPoolWithArgmax=ih,t.maximum=im,t.mean=iy,t.memory=function(){return rc.memory()},t.meshgrid=/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var n=(void 0===r?{}:r).indexing,i=void 0===n?"xy":n;if("xy"!==i&&"ij"!==i)throw TypeError("".concat(i," is not a valid third argument to meshgrid"));if(void 0===e)return[];var a=convertToTensor(e,"x","meshgrid",e instanceof ro?e.dtype:"float32");if(void 0===t)return[a];var o=convertToTensor(t,"y","meshgrid",t instanceof ro?t.dtype:"float32"),s=sizeFromShape(a.shape),l=sizeFromShape(o.shape);return"xy"===i?(a=rZ(a,[1,-1]),o=rZ(o,[-1,1]),[r0(ones([l,1],a.dtype),a),r0(o,ones([1,s],o.dtype))]):(a=rZ(a,[-1,1]),o=rZ(o,[1,-1]),[r0(a,ones([1,l],a.dtype)),r0(ones([s,1],o.dtype),o)])},t.min=nN,t.minimum=ig,t.mirrorPad=iv,t.mod=ib,t.moments=iS,t.movingAverage=aF,t.mul=rN,t.multiRNNCell=ix,t.multinomial=iP,t.neg=n7,t.nextFrame=function(){return new Promise(function(e){return oW(function(){return e()})})},t.norm=nz,t.notEqual=iC,t.oneHot=i_,t.ones=ones,t.onesLike=iA,t.op=op,t.outerProduct=iT,t.pad=iw,t.pad1d=iE,t.pad2d=iD,t.pad3d=iO,t.pad4d=iR,t.pool=ik,t.pow=nF,t.prelu=iL,t.print=print,t.prod=iI,t.profile=function(e){return rc.profile(e)},t.raggedGather=iB,t.raggedRange=iN,t.raggedTensorToTensor=iF,t.rand=iV,t.randomGamma=i4,t.randomNormal=i3,t.randomStandardNormal=i6,t.randomUniform=i8,t.randomUniformInt=i5,t.range=range,t.ready=function(){return rc.ready()},t.real=i9,t.reciprocal=i7,t.registerBackend=function(e,t,r){return void 0===r&&(r=1),rc.registerBackend(e,t,r)},t.registerGradient=function(e){var t=e.kernelName;tj.has(t)&&env().getBool("DEBUG")&&warn("Overriding the gradient for '".concat(t,"'")),tj.set(t,e)},t.registerKernel=registerKernel,t.relu=ae,t.relu6=ar,t.removeBackend=function(e){rc.removeBackend(e)},t.reshape=rZ,t.reverse=an,t.reverse1d=ai,t.reverse2d=aa,t.reverse3d=ao,t.reverse4d=as,t.rfft=a_,t.round=al,t.rsqrt=au,t.scalar=scalar,t.scatterND=aV,t.scatter_util={__proto__:null,calculateShapes:calculateShapes,validateInput:validateInput$1,validateUpdateShape:validateUpdateShape},t.searchSorted=id,t.selu=ad,t.separableConv2d=ac,t.serialization={__proto__:null,Serializable:o_,SerializationMap:oA,getRegisteredName:function(e){return oC.has(e)?oC.get(e):e.className},registerClass:registerClass},t.setBackend=function(e){return rc.setBackend(e)},t.setPlatform=function(e,t){env().setPlatform(e,t)},t.setdiff1dAsync=function(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i,a,o,s,l,u,d,c;return __generator(this,function(p){switch(p.label){case 0:return r=convertToTensor(e,"x","setdiff1d"),n=convertToTensor(t,"y","setdiff1d"),assert(r.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x (".concat(r.dtype,") and y (").concat(n.dtype,").")}),assert(1===r.rank,function(){return"x should be 1D tensor, but got x (".concat(r.shape,").")}),assert(1===n.rank,function(){return"y should be 1D tensor, but got y (".concat(n.shape,").")}),[4,r.data()];case 1:return i=p.sent(),[4,n.data()];case 2:for(l=0,a=p.sent(),o=new Set(a),s=0;l<i.length;l++)!o.has(i[l])&&s++;for(l=0,u=new rn([s],r.dtype),d=new rn([s],"int32"),c=0;l<i.length;l++)!o.has(i[l])&&(u.values[c]=i[l],d.values[c]=l,c++);return[2,[u.toTensor(),d.toTensor()]]}})})},t.sigmoid=r2,t.sign=ap,t.signal={hammingWindow:aK,hannWindow:a$,frame:aZ,stft:aJ},t.sin=ah,t.sinh=af,t.slice=r4,t.slice1d=am,t.slice2d=ay,t.slice3d=ag,t.slice4d=av,t.slice_util=oU,t.softmax=ab,t.softplus=ie,t.spaceToBatchND=iM,t.sparse={sparseFillEmptyRows:of,sparseReshape:om,sparseSegmentMean:oy,sparseSegmentSum:og},t.sparseToDense=aj,t.spectral={fft:aS,ifft:ax,rfft:a_,irfft:aP},t.split=aC,t.sqrt=nV,t.square=nj,t.squaredDifference=aA,t.squeeze=aT,t.stack=aw,t.step=aE,t.stridedSlice=aD,t.string={stringNGrams:ov,stringSplit:ob,stringToHashBucketFast:oS,staticRegexReplace:ox},t.sub=ir,t.sum=nH,t.sumOutType=function(e){return upcastType(e,"int32")},t.tan=aO,t.tanh=r3,t.tensor=tensor,t.tensor1d=tensor1d,t.tensor2d=tensor2d,t.tensor3d=tensor3d,t.tensor4d=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){if(assertNonNull(e),null!=t&&4!==t.length)throw Error("tensor4d() requires shape to have four numbers");var n=inferShape(e,r);if(4!==n.length&&1!==n.length)throw Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===n.length&&null==t)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return makeTensor(e,t,n,r)},t.tensor5d=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){if(assertNonNull(e),null!=t&&5!==t.length)throw Error("tensor5d() requires shape to have five numbers");var n=inferShape(e,r);if(5!==n.length&&1!==n.length)throw Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===n.length&&null==t)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return makeTensor(e,t,n,r)},t.tensor6d=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){if(assertNonNull(e),null!=t&&6!==t.length)throw Error("tensor6d() requires shape to have six numbers");var n=inferShape(e,r);if(6!==n.length&&1!==n.length)throw Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===n.length&&null==t)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return makeTensor(e,t=t||n,n,r)},t.tensorScatterUpdate=aR,t.tensor_util={__proto__:null,assertTypesMatch:assertTypesMatch,getTensorsInContainer:getTensorsInContainer,isTensorInList:function(e,t){return t.some(function(t){return t.id===e.id})},makeTypesMatch:makeTypesMatch},t.test_util={__proto__:null,TEST_EPSILON_FLOAT16:.1,createVideoElement:function(e){var t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(function(e){t.addEventListener("loadeddata",function(r){return e(t)}),t.load()})},encodeStrings:function encodeStrings(e){for(var t=0;t<e.length;t++){var r=e[t];Array.isArray(r)?encodeStrings(r):e[t]=encodeString(r)}return e},expectArrayBuffersEqual:function(e,t){var r=new Float32Array(e),n=new Float32Array(t);if(r.length!==n.length)throw Error("Expected ArrayBuffer to be of length "+"".concat(n.length,", but it was ").concat(r.length));for(var i=0;i<n.length;i++)if(r[i]!==n[i])throw Error("Expected ArrayBuffer value at ".concat(i," to be ")+"".concat(n[i]," but got ").concat(r[i]," instead"))},expectArraysClose:function(e,t,r){return null==r&&(r=testEpsilon()),expectArraysPredicate(e,t,function(e,t){return areClose(e,t,r)})},expectArraysEqual:function(e,t){var r="string"==typeof t||"number"==typeof t||"boolean"==typeof t?[t]:t;return isString(e)||isString(e[0])||isString(t)||isString(t[0])?expectArraysPredicate(e,r,function(e,t){return e==t}):expectArraysPredicate(e,t,function(e,t){return areClose(e,t,0)})},expectNumbersClose:function(e,t,r){if(null==r&&(r=testEpsilon()),!areClose(e,t,r))throw Error("Numbers differ: actual === ".concat(e,", expected === ").concat(t));"undefined"!=typeof expect&&expect().nothing()},expectPromiseToFail:function(e,t){e().then(function(){return t.fail()},function(){return t()}),"undefined"!=typeof expect&&expect().nothing()},expectValuesInRange:function(e,t,r){for(var n=0;n<e.length;n++)if(e[n]<t||e[n]>r)throw Error("Value out of range:".concat(e[n]," low: ").concat(t,", high: ").concat(r))},play:function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,e.play()];case 1:if(t.sent(),!("requestVideoFrameCallback"in e))return[3,3];return[4,new Promise(function(t){e.requestVideoFrameCallback(t)})];case 2:t.sent(),t.label=3;case 3:return[2]}})})},testEpsilon:testEpsilon},t.tidy=tidy,t.tile=nY,t.time=function(e){return rc.time(e)},t.topk=aM,t.train=oG,t.transpose=aN,t.truncatedNormal=ak,t.unique=aL,t.unregisterGradient=function(e){if(!tj.has(e))throw Error("The gradient '".concat(e,"' for backend is not registered"));tj.delete(e)},t.unregisterKernel=function(e,t){var r=makeKey(e,t);if(!tV.has(r))throw Error("The kernel '".concat(e,"' for backend ")+"'".concat(t,"' is not registered"));tV.delete(r)},t.unsortedSegmentSum=aI,t.unstack=aB,t.upcastType=upcastType,t.upperBound=/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){return id(e,t,"right")},t.util={__proto__:null,arraysEqual:arraysEqual,arraysEqualWithNull:arraysEqualWithNull,assert:assert,assertNonNegativeIntegerDimensions:assertNonNegativeIntegerDimensions,assertNonNull:assertNonNull,assertShapesMatch:assertShapesMatch,bytesFromStringArray:bytesFromStringArray,bytesPerElement:bytesPerElement,checkConversionForErrors:checkConversionForErrors,clamp:clamp,computeStrides:computeStrides,convertBackendValuesAndArrayBuffer:function(e,t){if(Array.isArray(e))return e;if("float32"===t)return e instanceof Float32Array?e:new Float32Array(e);if("int32"===t)return e instanceof Int32Array?e:new Int32Array(e);if("bool"===t||"string"===t)return Uint8Array.from(new Int32Array(e));throw Error("Unknown dtype ".concat(t))},createScalarValue:function(e,t){return"string"===t?encodeString(e):toTypedArray([e],t)},createShuffledIndices:function(e){for(var t=new Uint32Array(e),r=0;r<e;++r)t[r]=r;return shuffle(t),t},decodeString:decodeString,distSquared:function(e,t){for(var r=0,n=0;n<e.length;n++){var i=Number(e[n])-Number(t[n]);r+=i*i}return r},encodeString:encodeString,fetch:function(e,t){return env().platform.fetch(e,t)},fingerPrint64:function(e,t){void 0===t&&(t=e.length);var r,n,i,a,o,s,l,u,d,c,p,h,f,m,y,g,v,b,S,x,P=t5.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t){if(void 0===t&&(t=e.length),t>=8){var r=re.add(2*t),n=fetch64(e,0).add(re),i=fetch64(e,t-8),a=rotate64(i,37).mul(r).add(n);return hashLen16(a,rotate64(n,25).add(i).mul(r),r)}if(t>=4){var r=re.add(2*t),n=fetch$2(e,0,4);return hashLen16(n.shl(3).add(t),fetch$2(e,t-4,4),r)}if(t>0){var n=e[0],i=e[t>>1],a=e[t-1],o=n+(i<<8),s=t+(a<<2);return shiftMix(re.mul(o).xor(t9.mul(s))).mul(re)}return re}(e,t):(void 0===(r=t)&&(r=e.length),n=re.add(2*r),i=fetch64(e,0).mul(t7),a=fetch64(e,8),o=fetch64(e,r-8).mul(n),s=fetch64(e,r-16).mul(re),hashLen16(rotate64(i.add(a),43).add(rotate64(o,30)).add(s),i.add(rotate64(a.add(re),18)).add(o),n));if(t<=64)return void 0===(l=t)&&(l=e.length),u=re.add(2*l),d=fetch64(e,0).mul(re),c=fetch64(e,8),p=fetch64(e,l-8).mul(u),h=fetch64(e,l-16).mul(re),m=hashLen16(f=rotate64(d.add(c),43).add(rotate64(p,30)).add(h),d.add(rotate64(c.add(re),18)).add(p),u),y=fetch64(e,16).mul(u),g=fetch64(e,24),v=f.add(fetch64(e,l-32)).mul(u),b=m.add(fetch64(e,l-24)).mul(u),hashLen16(rotate64(y.add(g),43).add(rotate64(v,30)).add(b),y.add(rotate64(g.add(d),18)).add(v),u);var C=P,_=P.mul(t7).add(113),A=shiftMix(_.mul(re).add(113)).mul(re),T=[t5.UZERO,t5.UZERO],w=[t5.UZERO,t5.UZERO];C=C.mul(re).add(fetch64(e,0));var E=0,D=(t-1>>6)*64,O=D+(t-1&63)-63;do C=rotate64(C.add(_).add(T[0]).add(fetch64(e,E+8)),37).mul(t7),_=rotate64(_.add(T[1]).add(fetch64(e,E+48)),42).mul(t7),C=C.xor(w[1]),_=_.add(T[0]).add(fetch64(e,E+40)),A=rotate64(A.add(w[0]),33).mul(t7),T=weakHashLen32WithSeedsStr(e,E,T[1].mul(t7),C.add(w[0])),w=weakHashLen32WithSeedsStr(e,E+32,A.add(w[1]),_.add(fetch64(e,E+16))),A=(S=__read([C,A],2))[0],C=S[1],E+=64;while(E!==D);var R=t7.add(A.and(255).shl(1));return E=O,w[0]=w[0].add(t-1&63),T[0]=T[0].add(w[0]),w[0]=w[0].add(T[0]),C=rotate64(C.add(_).add(T[0]).add(fetch64(e,E+8)),37).mul(R),_=rotate64(_.add(T[1]).add(fetch64(e,E+48)),42).mul(R),C=C.xor(w[1].mul(9)),_=_.add(T[0].mul(9).add(fetch64(e,E+40))),A=rotate64(A.add(w[0]),33).mul(R),T=weakHashLen32WithSeedsStr(e,E,T[1].mul(R),C.add(w[0])),w=weakHashLen32WithSeedsStr(e,E+32,A.add(w[1]),_.add(fetch64(e,E+16))),A=(x=__read([C,A],2))[0],C=x[1],hashLen16(hashLen16(T[0],w[0],R).add(shiftMix(_).mul(t9)).add(A),hashLen16(T[1],w[1],R).add(C),R)},flatten:flatten,getArrayFromDType:getArrayFromDType,getTypedArrayFromDType:function(e,t){return getArrayFromDType(e,t)},hasEncodingLoss:function(e,t){return"complex64"!==t&&("float32"!==t||"complex64"===e)&&("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)},hexToLong:hexToLong,indexToLoc:function(e,t,r){if(0===t)return[];if(1===t)return[e];for(var n=Array(t),i=0;i<n.length-1;++i)n[i]=Math.floor(e/r[i]),e-=n[i]*r[i];return n[n.length-1]=e,n},inferDtype:inferDtype,inferFromImplicitShape:function(e,t){for(var r=1,n=-1,i=0;i<e.length;++i)if(e[i]>=0)r*=e[i];else if(-1===e[i]){if(-1!==n)throw Error("Shapes can only have 1 implicit size. "+"Found -1 at dim ".concat(n," and dim ").concat(i));n=i}else if(e[i]<0)throw Error("Shapes can not be < 0. Found ".concat(e[i]," at dim ").concat(i));if(-1===n){if(t>0&&t!==r)throw Error("Size(".concat(t,") must match the product of shape ").concat(e));return e}if(0===r)throw Error("Cannot infer the missing size in [".concat(e,"] when ")+"there are 0 elements");if(t%r!=0)throw Error("The implicit shape can't be a fractional number. "+"Got ".concat(t," / ").concat(r));var a=e.slice();return a[n]=t/r,a},isBoolean:isBoolean,isFunction:isFunction,isInt:isInt,isNumber:isNumber,isPromise:isPromise,isScalarShape:function(e){return 0===e.length},isString:isString,isTypedArray:isTypedArray,isValidDtype:isValidDtype,locToIndex:function(e,t,r){if(0===t)return 0;if(1===t)return e[0];for(var n=e[e.length-1],i=0;i<e.length-1;++i)n+=r[i]*e[i];return n},makeOnesTypedArray:makeOnesTypedArray,makeZerosNestedTypedArray:function(e,t){var r=e.reduce(function(e,t){return e*t},1);if(null==t||"float32"===t)return toNestedArray(e,new Float32Array(r));if("int32"===t)return toNestedArray(e,new Int32Array(r));if("bool"===t)return toNestedArray(e,new Uint8Array(r));throw Error("Unknown data type ".concat(t))},makeZerosTypedArray:makeZerosTypedArray,nearestDivisor:nearestDivisor,nearestLargerEven:function(e){return e%2==0?e:e+1},now:now,parseAxisParam:parseAxisParam,randUniform:function(e,t){var r=Math.random();return t*r+(1-r)*e},repeatedTry:function(e,t,r,n){return void 0===t&&(t=function(e){return 0}),new Promise(function(i,a){var o=0,tryFn=function(){if(e()){i();return}o++;var s=t(o);if(null!=r&&o>=r){a();return}null!=n?n(tryFn,s):setTimeout(tryFn,s)};tryFn()})},rightPad:rightPad,shuffle:shuffle,shuffleCombo:function(e,t){if(e.length!==t.length)throw Error("Array sizes must match to be shuffled together "+"First array length was ".concat(e.length)+"Second array length was ".concat(t.length));for(var r=e.length,n=0;r>0;)n=Math.random()*r|0,swap(e,--r,n),swap(t,r,n)},sizeFromShape:sizeFromShape,sizeToSquarishShape:function(e){var t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]},squeezeShape:squeezeShape,sum:function(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t},swap:swap,tanh:function(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return -1;var t=Math.exp(2*e);return(t-1)/(t+1)},toNestedArray:toNestedArray,toTypedArray:toTypedArray},t.valueAndGrad=function(e){return assert(isFunction(e),function(){return"The f passed in valueAndGrad(f) must be a function"}),function(t,r){assert(t instanceof ro,function(){return"The x passed in valueAndGrad(f)(x) must be a tensor"}),assert(null==r||r instanceof ro,function(){return"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"});var n=rc.gradients(function(){return e(t)},[t],r),i=n.grads,a=n.value;return checkGrads(i),{grad:i[0],value:a}}},t.valueAndGrads=function(e){return assert(isFunction(e),function(){return"The f passed in valueAndGrads(f) must be a function"}),function(t,r){assert(Array.isArray(t)&&t.every(function(e){return e instanceof ro}),function(){return"The args passed in valueAndGrads(f)(args) must be array of tensors"}),assert(null==r||r instanceof ro,function(){return"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"});var n=rc.gradients(function(){return e.apply(void 0,__spreadArray([],__read(t),!1))},t,r);return null!=r&&assertShapesMatch(n.value.shape,r.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),checkGrads(n.grads),n}},t.variable=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================