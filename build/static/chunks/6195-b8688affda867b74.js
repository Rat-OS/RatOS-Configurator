(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6195],{61123:function(e,t,r){"use strict";var i,n=(i=r(62248))&&i.__esModule?i:{default:i};e.exports=(0,n.default)(function(e){var t,r=e.matchUtilities,i=e.matchVariant,n=e.theme,parseValue=function(e){var t,r;return null===(null!==(r=null===(t=e.match(/^(\d+\.\d+|\d+|\.\d+)\D+/))||void 0===t?void 0:t[1])&&void 0!==r?r:null)?null:parseFloat(e)},o=null!==(t=n("containers"))&&void 0!==t?t:{};r({"@container":function(e,t){return{"container-type":e,"container-name":t.modifier}}},{values:{DEFAULT:"inline-size",normal:"normal"},modifiers:"any"}),i("@",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1?arguments[1]:void 0).modifier;return null!==parseValue(e)?"@container ".concat(null!=t?t:""," (min-width: ").concat(e,")"):[]},{values:o,sort:function(e,t){var r,i,n=parseFloat(e.value),o=parseFloat(t.value);if(null===n||null===o)return 0;if(n-o!=0)return n-o;var a=null!==(r=e.modifier)&&void 0!==r?r:"",s=null!==(i=t.modifier)&&void 0!==i?i:"";return""===a&&""!==s?1:""!==a&&""===s?-1:a.localeCompare(s,"en",{numeric:!0})}})},{theme:{containers:{xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"}}})},98750:function(e,t,r){let i=r(33619),n=r(62248),o=r(13558),a=r(27551),[s,{lineHeight:l}]=o.fontSize.base,{spacing:u,borderWidth:c,borderRadius:d}=o;function resolveColor(e,t){return e.replace("<alpha-value>",`var(${t}, 1)`)}let p=n.withOptions(function(e={strategy:void 0}){return function({addBase:t,addComponents:r,theme:n}){let o=void 0===e.strategy?["base","class"]:[e.strategy],p=[{base:["[type='text']","input:where(:not([type]))","[type='email']","[type='url']","[type='password']","[type='number']","[type='date']","[type='datetime-local']","[type='month']","[type='search']","[type='tel']","[type='time']","[type='week']","[multiple]","textarea","select"],class:[".form-input",".form-textarea",".form-select",".form-multiselect"],styles:{appearance:"none","background-color":"#fff","border-color":resolveColor(n("colors.gray.500",a.gray[500]),"--tw-border-opacity"),"border-width":c.DEFAULT,"border-radius":d.none,"padding-top":u[2],"padding-right":u[3],"padding-bottom":u[2],"padding-left":u[3],"font-size":s,"line-height":l,"--tw-shadow":"0 0 #0000","&:focus":{outline:"2px solid transparent","outline-offset":"2px","--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":"0px","--tw-ring-offset-color":"#fff","--tw-ring-color":resolveColor(n("colors.blue.600",a.blue[600]),"--tw-ring-opacity"),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)","border-color":resolveColor(n("colors.blue.600",a.blue[600]),"--tw-border-opacity")}}},{base:["input::placeholder","textarea::placeholder"],class:[".form-input::placeholder",".form-textarea::placeholder"],styles:{color:resolveColor(n("colors.gray.500",a.gray[500]),"--tw-text-opacity"),opacity:"1"}},{base:["::-webkit-datetime-edit-fields-wrapper"],class:[".form-input::-webkit-datetime-edit-fields-wrapper"],styles:{padding:"0"}},{base:["::-webkit-date-and-time-value"],class:[".form-input::-webkit-date-and-time-value"],styles:{"min-height":"1.5em"}},{base:["::-webkit-date-and-time-value"],class:[".form-input::-webkit-date-and-time-value"],styles:{"text-align":"inherit"}},{base:["::-webkit-datetime-edit"],class:[".form-input::-webkit-datetime-edit"],styles:{display:"inline-flex"}},{base:["::-webkit-datetime-edit","::-webkit-datetime-edit-year-field","::-webkit-datetime-edit-month-field","::-webkit-datetime-edit-day-field","::-webkit-datetime-edit-hour-field","::-webkit-datetime-edit-minute-field","::-webkit-datetime-edit-second-field","::-webkit-datetime-edit-millisecond-field","::-webkit-datetime-edit-meridiem-field"],class:[".form-input::-webkit-datetime-edit",".form-input::-webkit-datetime-edit-year-field",".form-input::-webkit-datetime-edit-month-field",".form-input::-webkit-datetime-edit-day-field",".form-input::-webkit-datetime-edit-hour-field",".form-input::-webkit-datetime-edit-minute-field",".form-input::-webkit-datetime-edit-second-field",".form-input::-webkit-datetime-edit-millisecond-field",".form-input::-webkit-datetime-edit-meridiem-field"],styles:{"padding-top":0,"padding-bottom":0}},{base:["select"],class:[".form-select"],styles:{"background-image":`url("${i(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${resolveColor(n("colors.gray.500",a.gray[500]),"--tw-stroke-opacity")}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,"background-position":`right ${u[2]} center`,"background-repeat":"no-repeat","background-size":"1.5em 1.5em","padding-right":u[10],"print-color-adjust":"exact"}},{base:["[multiple]",'[size]:where(select:not([size="1"]))'],class:['.form-select:where([size]:not([size="1"]))'],styles:{"background-image":"initial","background-position":"initial","background-repeat":"unset","background-size":"initial","padding-right":u[3],"print-color-adjust":"unset"}},{base:["[type='checkbox']","[type='radio']"],class:[".form-checkbox",".form-radio"],styles:{appearance:"none",padding:"0","print-color-adjust":"exact",display:"inline-block","vertical-align":"middle","background-origin":"border-box","user-select":"none","flex-shrink":"0",height:u[4],width:u[4],color:resolveColor(n("colors.blue.600",a.blue[600]),"--tw-text-opacity"),"background-color":"#fff","border-color":resolveColor(n("colors.gray.500",a.gray[500]),"--tw-border-opacity"),"border-width":c.DEFAULT,"--tw-shadow":"0 0 #0000"}},{base:["[type='checkbox']"],class:[".form-checkbox"],styles:{"border-radius":d.none}},{base:["[type='radio']"],class:[".form-radio"],styles:{"border-radius":"100%"}},{base:["[type='checkbox']:focus","[type='radio']:focus"],class:[".form-checkbox:focus",".form-radio:focus"],styles:{outline:"2px solid transparent","outline-offset":"2px","--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":"2px","--tw-ring-offset-color":"#fff","--tw-ring-color":resolveColor(n("colors.blue.600",a.blue[600]),"--tw-ring-opacity"),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"}},{base:["[type='checkbox']:checked","[type='radio']:checked"],class:[".form-checkbox:checked",".form-radio:checked"],styles:{"border-color":"transparent","background-color":"currentColor","background-size":"100% 100%","background-position":"center","background-repeat":"no-repeat"}},{base:["[type='checkbox']:checked"],class:[".form-checkbox:checked"],styles:{"background-image":`url("${i('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")`,"@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='radio']:checked"],class:[".form-radio:checked"],styles:{"background-image":`url("${i('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")`,"@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='checkbox']:checked:hover","[type='checkbox']:checked:focus","[type='radio']:checked:hover","[type='radio']:checked:focus"],class:[".form-checkbox:checked:hover",".form-checkbox:checked:focus",".form-radio:checked:hover",".form-radio:checked:focus"],styles:{"border-color":"transparent","background-color":"currentColor"}},{base:["[type='checkbox']:indeterminate"],class:[".form-checkbox:indeterminate"],styles:{"background-image":`url("${i('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`,"border-color":"transparent","background-color":"currentColor","background-size":"100% 100%","background-position":"center","background-repeat":"no-repeat","@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='checkbox']:indeterminate:hover","[type='checkbox']:indeterminate:focus"],class:[".form-checkbox:indeterminate:hover",".form-checkbox:indeterminate:focus"],styles:{"border-color":"transparent","background-color":"currentColor"}},{base:["[type='file']"],class:null,styles:{background:"unset","border-color":"inherit","border-width":"0","border-radius":"0",padding:"0","font-size":"unset","line-height":"inherit"}},{base:["[type='file']:focus"],class:null,styles:{outline:["1px solid ButtonText","1px auto -webkit-focus-ring-color"]}}],getStrategyRules=e=>p.map(t=>null===t[e]?null:{[t[e]]:t.styles}).filter(Boolean);o.includes("base")&&t(getStrategyRules("base")),o.includes("class")&&r(getStrategyRules("class"))}});e.exports=p},97858:function(e,t,r){"use strict";r.d(t,{H:function(){return assertNotComplex}});var i=r(85964);/**
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
 */function assertNotComplex(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&i.D5U.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}},65424:function(e,t,r){"use strict";r.d(t,{bk:function(){return simpleAbsImpl},fC:function(){return o}});var i=r(85964),n=r(97858);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function simpleAbsImpl(e){let t=new Float32Array(e.length);for(let r=0;r<e.length;++r)t[r]=Math.abs(e[r]);return t}let o={kernelName:i.SYM,backendName:"cpu",kernelFunc:e=>{let{x:t}=e.inputs,r=e.backend;(0,n.H)(t,"abs");let o=new Float32Array(i.D5U.sizeFromShape(t.shape)),a=r.data.get(t.dataId).values;return o=simpleAbsImpl(a),r.makeOutput(o,t.shape,t.dtype)}}},82479:function(e,t,r){"use strict";r.d(t,{EH:function(){return a},IH:function(){return l},j4:function(){return u}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e+t),s=(0,o.H)((e,t,r,i)=>({real:e+r,imag:t+i})),l=(0,o.j)(i.mm_,a,s),u={kernelName:i.mm_,backendName:"cpu",kernelFunc:l}},89590:function(e,t,r){"use strict";r.d(t,{W:function(){return bincountImpl},i:function(){return bincountReduceImpl}});var i=r(85964);/**
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
 */function bincountImpl(e,t,r,n,o){let a=i.D5U.sizeFromShape(n),s=i.D5U.makeZerosTypedArray(o,r);for(let r=0;r<e.length;r++){let i=e[r];if(i<0)throw Error("Input x must be non-negative!");i>=o||(a>0?s[i]+=t[r]:s[i]+=1)}return s}function bincountReduceImpl(e,t,r,n=!1){let o=e.shape[0],a=e.shape[1],s=(0,i.f3b)([o,r],t.dtype);for(let i=0;i<o;i++)for(let o=0;o<a;o++){let a=e.get(i,o);if(a<0)throw Error("Input x must be non-negative!");a>=r||(n?s.set(1,i,a):t.size>0?s.set(s.get(i,a)+t.get(i,o),i,a):s.set(s.get(i,a)+1,i,a))}return s}},38066:function(e,t,r){"use strict";r.d(t,{T0:function(){return l},nv:function(){return a}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e&t),s=(0,o.j)(i.hCO,a),l={kernelName:i.hCO,backendName:"cpu",kernelFunc:s}},964:function(e,t,r){"use strict";r.d(t,{Mq:function(){return u},pj:function(){return cast},sJ:function(){return castImpl}});var i=r(85964),n=r(62074),o=r(34258),a=r(4471),s=r(45195),l=r(80748);/**
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
 */function castImpl(e,t,r,o){if("int32"===o){let r=Int32Array.from(e);return[t,"int32",r]}if("bool"===o){let o=i.D5U.toTypedArray([0],r),[a,s]=(0,n.b)((e,t)=>e!==t?1:0)(t,[],e,o,"bool");return[s,"bool",a]}throw Error(`Error in Cast: failed to cast ${r} to ${o}`)}function cast(e){let{inputs:t,backend:r,attrs:n}=e,{x:u}=t,{dtype:c}=n;if("complex64"===c){if("complex64"===u.dtype)return(0,s.y)({inputs:{x:u},backend:r});let e=(0,o.l)(r,u.shape,u.dtype),t=cast({inputs:{x:u},backend:r,attrs:{dtype:"float32"}}),i=(0,a.P)({inputs:{real:t,imag:e},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(t),i}if("complex64"===u.dtype){let e=(0,l.k)({inputs:{input:u},backend:r}),t=cast({inputs:{x:e},backend:r,attrs:{dtype:c}});return r.disposeIntermediateTensorInfo(e),t}if(!i.D5U.hasEncodingLoss(u.dtype,c)){let e=(0,s.y)({inputs:{x:u},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:c}}let d=r.data.get(u.dataId).values,[p,h,f]=castImpl(d,u.shape,u.dtype,c);return r.makeTensorInfo(p,h,f)}let u={kernelName:i.RFZ,backendName:"cpu",kernelFunc:cast}},23225:function(e,t,r){"use strict";r.d(t,{__:function(){return a},y2:function(){return l}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>Math.ceil(e)),s=(0,o.O)(i.gJX,a),l={kernelName:i.gJX,backendName:"cpu",kernelFunc:s}},4471:function(e,t,r){"use strict";r.d(t,{P:function(){return complex},z:function(){return n}});var i=r(85964);/**
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
 */function complex(e){let{inputs:t,backend:r}=e,{real:i,imag:n}=t,o=r.data.get(i.dataId).values,a=r.data.get(n.dataId).values,s=r.makeTensorInfo(i.shape,"complex64"),l=r.data.get(s.dataId);return l.complexTensorInfos={real:r.makeTensorInfo(i.shape,"float32",o),imag:r.makeTensorInfo(n.shape,"float32",a)},s}let n={kernelName:i.Zz9,backendName:"cpu",kernelFunc:complex}},82846:function(e,t,r){"use strict";r.d(t,{j:function(){return concatImpl}});var i=r(85964);/**
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
 */function concatImpl(e,t,r,n){let o=i.D5U.getArrayFromDType(r,i.D5U.sizeFromShape(t));if(n&&"string"!==r){let t=0;e.forEach(e=>{let r=i.D5U.sizeFromShape(e.shape);o.set(e.vals,t),t+=r})}else{let n=0;e.forEach(e=>{let a="string"===r?i.backend_util.fromUint8ToStringArray(e.vals):e.vals,s=0;for(let r=0;r<e.shape[0];++r){let i=r*t[1]+n;for(let t=0;t<e.shape[1];++t)o[i+t]=a[s++]}n+=e.shape[1]})}return o}},30339:function(e,t,r){"use strict";r.d(t,{Dg:function(){return s},Kx:function(){return l},tW:function(){return a}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e===t?1:0),s=(0,o.j)(i.hdR,a,null,"bool"),l={kernelName:i.hdR,backendName:"cpu",kernelFunc:s}},86130:function(e,t,r){"use strict";r.d(t,{Qq:function(){return s},Ro:function(){return a},SX:function(){return l}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>Math.exp(e)),s=(0,o.O)(i.NEP,a,"float32"),l={kernelName:i.NEP,backendName:"cpu",kernelFunc:s}},78819:function(e,t,r){"use strict";r.d(t,{OF:function(){return a},Vu:function(){return l}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>Math.expm1(e)),s=(0,o.O)(i.Y0y,a),l={kernelName:i.Y0y,backendName:"cpu",kernelFunc:s}},29567:function(e,t,r){"use strict";r.d(t,{Ao:function(){return l},r6:function(){return a}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>Math.floor(e)),s=(0,o.O)(i.OR,a),l={kernelName:i.OR,backendName:"cpu",kernelFunc:s}},63246:function(e,t,r){"use strict";r.d(t,{m:function(){return gatherNdImpl}});var i=r(85964);/**
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
 */function gatherNdImpl(e,t,r,n,o,a,s,l,u){let c=(0,i.f3b)([n,a],r);for(let r=0;r<n;r++){let i=[],n=0;for(let t=0;t<o;t++){let a=e[r*o+t];n+=a*s[t],i.push(a)}if(n<0||n>=u/a)throw Error(`Invalid indices: ${i} does not index into ${l}`);for(let e=0;e<a;e++)c.values[r*a+e]=t.get(...t.indexToLoc(n*a+e))}return c}},51167:function(e,t,r){"use strict";r.d(t,{i:function(){return gatherV2Impl}});var i=r(85964);/**
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
 */function gatherV2Impl(e,t,r){let n=(0,i.f3b)(r,e.dtype);for(let r=0;r<n.size;++r){let i=n.indexToLoc(r),o=i.slice(),a=o[0],s=o[2],l=t.locToIndex([a,s]);o[2]=t.values[l];let u=e.locToIndex(o);0<=u&&u<e.values.length&&(n.values[r]=e.values[u])}return n}},26411:function(e,t,r){"use strict";r.d(t,{Ce:function(){return l},o:function(){return a}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e>t?1:0),s=(0,o.j)(i.iZT,a,null,"bool"),l={kernelName:i.iZT,backendName:"cpu",kernelFunc:s}},68393:function(e,t,r){"use strict";r.d(t,{HL:function(){return a},V:function(){return l}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e>=t?1:0),s=(0,o.j)(i.Acj,a,null,"bool"),l={kernelName:i.Acj,backendName:"cpu",kernelFunc:s}},45195:function(e,t,r){"use strict";r.d(t,{I:function(){return n},y:function(){return identity}});var i=r(85964);/**
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
 */function identity(e){let{inputs:t,backend:r}=e,{x:i}=t;return r.incRef(i.dataId),{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}let n={kernelName:i.iJz,backendName:"cpu",kernelFunc:identity}},17068:function(e,t,r){"use strict";r.d(t,{rO:function(){return a},zh:function(){return l}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e<t?1:0),s=(0,o.j)(i.vtC,a,null,"bool"),l={kernelName:i.vtC,backendName:"cpu",kernelFunc:s}},89658:function(e,t,r){"use strict";r.d(t,{lx:function(){return a},m3:function(){return l}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e<=t?1:0),s=(0,o.j)(i.CAk,a,null,"bool"),l={kernelName:i.CAk,backendName:"cpu",kernelFunc:s}},86242:function(e,t,r){"use strict";r.d(t,{b:function(){return linSpaceImpl}});var i=r(85964);/**
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
 */function linSpaceImpl(e,t,r){let n=(t-e)/(r-1),o=i.D5U.makeZerosTypedArray(r,"float32");o[0]=e;for(let e=1;e<o.length;e++)o[e]=o[e-1]+n;return o}},79674:function(e,t,r){"use strict";r.d(t,{vX:function(){return a},xM:function(){return l}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>Math.log(e)),s=(0,o.O)(i.ZbH,a),l={kernelName:i.ZbH,backendName:"cpu",kernelFunc:s}},81637:function(e,t,r){"use strict";r.d(t,{B:function(){return maxImpl}});var i=r(85964);/**
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
 */function maxImpl(e,t,r,n){let o=i.D5U.getTypedArrayFromDType(n,i.D5U.sizeFromShape(r));for(let r=0;r<o.length;++r){let i=r*t,n=e[i];for(let r=0;r<t;++r){let t=e[i+r];(Number.isNaN(t)||t>n)&&(n=t)}o[r]=n}return o}},11231:function(e,t,r){"use strict";r.d(t,{eJ:function(){return l},wS:function(){return a}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>Math.max(e,t)),s=(0,o.j)(i.BMI,a),l={kernelName:i.BMI,backendName:"cpu",kernelFunc:s}},39252:function(e,t,r){"use strict";r.d(t,{u0:function(){return l},vP:function(){return a}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>Math.min(e,t)),s=(0,o.j)(i.q8u,a),l={kernelName:i.q8u,backendName:"cpu",kernelFunc:s}},29556:function(e,t,r){"use strict";r.d(t,{$3:function(){return a},Jp:function(){return l},f$:function(){return u}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e*t),s=(0,o.H)((e,t,r,i)=>({real:e*r-t*i,imag:e*i+t*r})),l=(0,o.j)(i.wYn,a,s),u={kernelName:i.wYn,backendName:"cpu",kernelFunc:l}},92709:function(e,t,r){"use strict";r.d(t,{AF:function(){return a},uC:function(){return negImpl}});var i=r(85964),n=r(97858),o=r(29556);/**
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
 */function negImpl(e,t,r){let n=i.D5U.createScalarValue(-1,r);return(0,o.$3)([],t,n,e,r)}let a={kernelName:i.kuV,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:i}=t;(0,n.H)(i,"neg");let o=r.data.get(i.dataId).values,[a,s]=negImpl(o,i.shape,i.dtype);return r.makeTensorInfo(s,i.dtype,a)}}},67676:function(e,t,r){"use strict";r.d(t,{Gj:function(){return a},nP:function(){return l}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e!==t?1:0),s=(0,o.j)(i.yQU,a,null,"bool"),l={kernelName:i.yQU,backendName:"cpu",kernelFunc:s}},67419:function(e,t,r){"use strict";r.d(t,{Iz:function(){return a},Qg:function(){return prodImpl}});var i=r(85964),n=r(97858),o=r(11618);/**
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
 */function prodImpl(e,t,r,n){let[o,a]=i.backend_util.computeOutAndReduceShapes(e,n),s=(0,i.x8V)(t,"int32"),l=i.D5U.makeZerosTypedArray(i.D5U.sizeFromShape(o),s),u=i.D5U.sizeFromShape(a);for(let e=0;e<l.length;++e){let t=e*u,i=1;for(let e=0;e<u;++e)i*=r[t+e];l[e]=i}return{outVals:l,outShape:o,outDtype:s}}let a={kernelName:i.DlI,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:s}=t,{axis:l,keepDims:u}=a;(0,n.H)(s,"prod");let c=s.shape.length,d=i.D5U.parseAxisParam(l,s.shape),p=i.backend_util.getAxesPermutation(d,c),h=d,f=s,y=[];null!=p&&(y.push(f=(0,o.p)({inputs:{x:s},backend:r,attrs:{perm:p}})),h=i.backend_util.getInnerMostAxes(h.length,c));let g=r.data.get(f.dataId).values,{outVals:m,outShape:v,outDtype:b}=prodImpl(f.shape,f.dtype,g,h),S=v;return u&&(S=i.backend_util.expandShapeToKeepDim(v,d)),y.forEach(e=>r.disposeIntermediateTensorInfo(e)),r.makeTensorInfo(S,b,m)}}},39168:function(e,t,r){"use strict";r.d(t,{c:function(){return raggedGatherImpl}});var i=r(85964);function computeFlatOuterDims(e,t){let r=e.slice(0,t);for(;r.length<t;)r.push(1);for(let i=t;i<e.length;i++)r[t-1]*=e[i];return r}function raggedGatherImpl(e,t,r,n,o,a,s,l){if(0===e.length)throw Error("paramsNestedSplits must be non empty");if(0===t[0].length)throw Error("Split tensors must not be scalars");let u=t[0][0]-1;if(!/**
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
 */function(e,t,r){e.forEach((e,n)=>{if(e<0||e>=r){let o=i.D5U.indexToLoc(n,t.length,i.D5U.computeStrides(t)).join(",");throw Error(`indices[${o}] = ${e} is not in [0, ${r})`)}})}(a,s,u),0===n.length)throw Error("params.rank must be nonzero");let c=n[0],{outSplits:d,valueSlices:p,numValues:h}=function(e,t,r,i){let n=[],o=0,a=t.length-1+r.length,s=Array(a).fill(null).map(()=>[0]);!function(e,t){for(let r=0;r<e.length;++r){let i=e[r],n=r===e.length-1?t:e[r+1].length;if(0===i.length)throw Error("Ragged splits may not be empty");if(i[0]<0)throw Error("Ragged splits must be non-negative");if(i[i.length-1]>n)throw Error("Ragged splits must not point past values");for(let e=1;e<i.length;++e)if(i[e-1]>i[e])throw Error("Ragged splits must be sorted in ascending order")}}(r,i);let l=1;for(let e=0;e<t.length-1;++e){l*=t[e];let r=t[e+1];for(let t=1;t<l+1;++t)s[e].push(t*r)}for(let i=0;i<e.length;++i){let a=e[i],l=e[i]+1;for(let e=0;e<r.length;++e){let i=r[e],n=e+t.length-1;if(n>=0){let e=s[n],t=e[e.length-1]-i[a];for(let e=a;e<l;++e)s[n].push(i[e+1]+t)}a=i[a],l=i[l]}l!==a&&(n.push([a,l]),o+=l-a)}return{outSplits:s,valueSlices:n,numValues:o}}(a,s,e,c),f=function(e){let t=[];for(let r=0;r<e.length;++r){let n=e[r].length,o=i.D5U.getArrayFromDType("int32",n);t.push(o),e[r].forEach((e,t)=>o[t]=e)}return t}(d),y=function(e,t,r,n,o){let a=t.slice();a[0]=o;let s=i.D5U.getArrayFromDType(r,i.D5U.sizeFromShape(a)),l=e.length,u=0===l?0:l/t[0];return!function(e,t,r,i,n,o){let a=computeFlatOuterDims(t,2)[1],s=computeFlatOuterDims(o,2)[1],l=0;for(let t of r)for(let r=t[0];r<t[1];++r){for(let t=0;t<i;++t)n[l*s+t]=e[r*a+t];++l}}(e,t,n,u,s,a),[s,a]}(r,n,o,p,h);return[f,y[0],y[1]]}},62898:function(e,t,r){"use strict";r.d(t,{S:function(){return raggedRangeImpl}});var i=r(85964);function raggedRangeImpl(e,t,r,n,o,a,s){if(t.length>1)throw Error("starts must be a scalar or vector");if(o.length>1)throw Error("limits must be a scalar or vector");if(s.length>1)throw Error("deltas must be a scalar or vector");let l=0===t.length,u=0===o.length,c=0===s.length,d=[];l||d.push(t[0]),u||d.push(o[0]),c||d.push(s[0]);for(let e=1;e<d.length;++e)if(d[e]!==d[e-1])throw Error("starts, limits, and deltas must have the same shape");let p=0===d.length?1:d[0],h=i.D5U.getArrayFromDType("int32",p+1);h[0]=0;for(let t=0;t<p;++t){let r;let i=l?e[0]:e[t],o=u?n[0]:n[t],s=c?a[0]:a[t];if(0===s)throw Error("Requires delta != 0");if(s>0&&o<i||s<0&&o>i)r=0;else if((r=Math.ceil(Math.abs((o-i)/s)))>2147483647)throw Error("Requires ((limit - start) / delta) <= 2147483647");h[t+1]=h[t]+r}let f=h[p],y=i.D5U.getArrayFromDType(r,f),g=0;for(let t=0;t<p;++t){let r=h[t+1]-h[t],i=l?e[0]:e[t],n=c?a[0]:a[t];for(let e=0;e<r;++e)y[g++]=i,i+=n}return[h,y]}},62840:function(e,t,r){"use strict";r.d(t,{p:function(){return raggedTensorToTensorImpl}});var i=r(85964),n=i.backend_util.RowPartitionType;let RaggedTensorToTensorOp=class RaggedTensorToTensorOp{constructor(e,t,r,n,o,a,s,l,u,c){this.shape=e,this.shapeShape=t,this.values=r,this.valuesShape=n,this.valuesDType=o,this.defaultValue=a,this.defaultValueShape=s,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=i.backend_util.getRowPartitionTypesHelper(c),this.raggedRank=i.backend_util.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===n.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===n.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case n.VALUE_ROWIDS:return RaggedTensorToTensorOp.getMaxWidthValueRowID(t);case n.ROW_SPLITS:return RaggedTensorToTensorOp.getMaxWidthRowSplit(t);default:throw Error(`Cannot handle partition type ${n[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(0===t||1===t)return 0;let r=0;for(let i=0;i<t-1;++i){let t=e[i+1]-e[i];t>r&&(r=t)}return r}static getMaxWidthValueRowID(e){let t=e.length;if(0===t)return 0;let r=0,i=e[0],n=0;for(let o=1;o<t;++o){let t=e[o];t!==i&&(i=t,n=Math.max(o-r,n),r=o)}return Math.max(t-r,n)}tensorShapeFromTensor(e,t,r=!0){if(0===t.length){if(-1===e[0])return[];throw Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return makeShape(e,r)}calculateOutputSize(e){let t=this.valuesShape,r=this.defaultValueShape;i.backend_util.validateDefaultValueShape(r,t);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),o=i.backend_util.combineRaggedTensorToTensorShapes(this.raggedRank,n,t);o[0]<0&&(o[0]=e);for(let e=1;e<=this.raggedRank;++e)o[e]<0&&(o[e]=this.getMaxWidth(e));return o}calculateFirstParentOutputIndex(e,t,r){let n=Math.min(e,r),o=[],a=0;for(let e=0;e<n;++e,a+=t)o.push(a);for(let t=n;t<e;++t)o.push(-1);return i.D5U.assert(o.length===e,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(e,t,r,i){let n=e.length,o=[];for(let a=0;a<n-1;++a){let n=e[a+1]-e[a],s=Math.min(i,n),l=t[a];-1===l&&(s=0);for(let e=0;e<s;++e)o.push(l),l+=r;for(let e=0;e<n-s;++e)o.push(-1)}if(n>0&&o.length!==e[n-1])throw Error("Invalid row split size.");return o}calculateOutputIndexValueRowID(e,t,r,i){let n=e.length,o=[];if(0===n)return[];let a=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let l=t[s];o.push(l);for(let u=1;u<n;++u){let n=e[u];if(n===s)l>=0&&(++a<i?l+=r:l=-1);else{if(a=0,s=n,n>=t.length)throw Error(`Got nextValueRowId=${n} which is not less than ${t.length}`);l=t[n]}o.push(l)}if(o.length!==e.length)throw Error("Invalid row ids.");return o}calculateOutputIndex(e,t,r,i){let o=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case n.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,t,r,i);case n.ROW_SPLITS:if(o.length-1>t.length)throw Error(`Row partition size is greater than output size: ${o.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(o,t,r,i);default:throw Error(`Unsupported partition type: ${n[a]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case n.FIRST_DIM_SIZE:return e[0];case n.VALUE_ROWIDS:throw Error("Cannot handle VALUE_ROWIDS in first dimension.");case n.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${n[t]}`)}}compute(){let e=this.rowPartitionValues[0];if(e.length<=0)throw Error("Invalid first partition input. Tensor requires at least one element.");let t=this.getFirstDimensionSize(),r=this.calculateOutputSize(t),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*r[e+1];let o=makeShape(r,!1),a=i.D5U.getArrayFromDType(this.valuesDType,i.D5U.sizeFromShape(o)),s=n[0]*r[0];if(s>0){let e=this.calculateFirstParentOutputIndex(t,n[0],r[0]);for(let t=1;t<=this.raggedRank;++t){let i=this.calculateOutputIndex(t-1,e,n[t],r[t]);e=i}this.setOutput(this.raggedRank,e,a,o)}return[o,a]}setOutput(e,t,r,n){if(0===r.length)return;let o=this.values,a=n.slice();a=a.slice(e+1);let s=i.D5U.sizeFromShape(a),l=t.length,u=this.defaultValue;if(u.length!==s&&1!==u.length){let e=this.defaultValueShape;(0,i.lub)(()=>{let t=(0,i.XLQ)(u,e),r=(0,i.UFq)(t,a);u=r.dataSync()})}let c=0,d=0,p=0;for(let e=0;e<=l;++e){let i=e<l?t[e]:-1;if(i===p){++p;continue}if(d<p){let e=o.subarray(c*s),t=r.subarray(d*s),i=(p-d)*s;copyArray(t,e,i)}if(e>=l){let e=r.length;i=Math.floor(e/s)}if(i>p){if(1===this.defaultValue.length)r.subarray(p*s,i*s).fill(this.defaultValue[0]),p=i;else for(;i>p;){let e=r.slice(p*s);copyArray(e,u,s),++p}}i<0?(c=e+1,d=p):(c=e,p=(d=p)+1)}}};function copyArray(e,t,r){for(let i=0;i<r;i++)e[i]=t[i]}function makeShape(e,t){let r=[];for(let i of e){if(i<0){if(!t)throw Error(`Dimension ${i} must be >= 0`);if(i<-1)throw Error(`Dimension ${i} must be >= -1`);i=-1}r.push(i)}return r}function raggedTensorToTensorImpl(e,t,r,i,n,o,a,s,l,u){return new RaggedTensorToTensorOp(e,t,r,i,n,o,a,s,l,u).compute()}},42373:function(e,t,r){"use strict";r.d(t,{b:function(){return rangeImpl}});var i=r(85964);/**
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
 */function rangeImpl(e,t,r,n){let o=e<t&&r<0,a=t<e&&r>1;if(e===t||o||a)return i.D5U.makeZerosTypedArray(0,n);let s=Math.abs(Math.ceil((t-e)/r)),l=i.D5U.makeZerosTypedArray(s,n);t<e&&1===r&&(r=-1),l[0]=e;for(let e=1;e<l.length;e++)l[e]=l[e-1]+r;return l}},80748:function(e,t,r){"use strict";r.d(t,{O:function(){return n},k:function(){return real}});var i=r(85964);/**
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
 */function real(e){let{inputs:t,backend:r}=e,{input:i}=t,n=r.data.get(i.dataId).complexTensorInfos.real,o=r.data.get(n.dataId).values;return r.makeTensorInfo(n.shape,n.dtype,o)}let n={kernelName:i.xJR,backendName:"cpu",kernelFunc:real}},81056:function(e,t,r){"use strict";r.d(t,{FY:function(){return l},zd:function(){return a}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>1/Math.sqrt(e)),s=(0,o.O)(i.bV0,a),l={kernelName:i.bV0,backendName:"cpu",kernelFunc:s}},6237:function(e,t,r){"use strict";r.d(t,{N:function(){return scatterImpl}});var i=r(85964);/**
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
 */function scatterImpl(e,t,r,n,o,a,s,l,u,c){let d=[n/o,o],p=e.values,h=t.values;if(0===n)return(0,i.f3b)(r,t.dtype);let f=u instanceof i.YDk?u:(0,i.f3b)(d,t.dtype);"string"==typeof u?f.values.fill(u):"number"==typeof u?f.values.fill(u):"boolean"==typeof u&&f.values.fill(+u);for(let e=0;e<a;e++){let i=[],a=0;for(let t=0;t<s;t++){let r=p[e*s+t];i.push(r),a+=r*l[t]}if(a<0||a>=n/o)throw Error(`Invalid indices: ${i} does not index into ${r}`);for(let r=0;r<o;r++)c?f.values[a*o+r]+=h[e*o+r]:f.values[a*o+r]=0===t.rank?h[0]:h[e*o+r]}return f}},26488:function(e,t,r){"use strict";r.d(t,{BP:function(){return l},VY:function(){return a},XD:function(){return s}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>1/(1+Math.exp(-e))),s=(0,o.A)(i.a5O,e=>1/(1+Math.exp(-e))),l={kernelName:i.a5O,backendName:"cpu",kernelFunc:s}},37804:function(e,t,r){"use strict";r.d(t,{C6:function(){return o},rT:function(){return sliceImpl},tP:function(){return slice}});var i=r(85964),n=r(97858);/**
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
 */function sliceImpl(e,t,r,n,o){let a=i.kuN.isSliceContinous(n,t,r),s=i.D5U.sizeFromShape(r),l=i.D5U.computeStrides(n);if(a){let r=i.kuN.computeFlatOffset(t,l);return"string"===o?e.slice(r,r+s):e.subarray(r,r+s)}let u="string"===o?i.backend_util.fromUint8ToStringArray(e):e,c=(0,i.f3b)(n,o,u),d=(0,i.f3b)(r,o);for(let e=0;e<d.size;++e){let r=d.indexToLoc(e),i=r.map((e,r)=>e+t[r]);d.set(c.get(...i),...r)}return"string"===o?i.backend_util.fromStringArrayToUint8(d.values):d.values}function slice(e){let{inputs:t,backend:r,attrs:o}=e,{x:a}=t,{begin:s,size:l}=o;(0,n.H)(a,"slice");let[u,c]=i.kuN.parseSliceParams(a,s,l);i.kuN.assertParamsValid(a,u,c);let d=r.data.get(a.dataId).values,p=sliceImpl(d,u,c,a.shape,a.dtype);return r.makeTensorInfo(c,a.dtype,p)}let o={kernelName:i.p2w,backendName:"cpu",kernelFunc:slice}},7562:function(e,t,r){"use strict";r.d(t,{c:function(){return sparseFillEmptyRowsImpl}});var i=r(85964);/**
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
 */function sparseFillEmptyRowsImpl(e,t,r,n,o,a,s){let l=t[0],u=a[0],c=Array(u),d=Array(l),p=t[1];if(0===u){if(0!==l)throw Error(i.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(l));let e=i.D5U.getArrayFromDType(r,0),t=i.D5U.getArrayFromDType(o,0);return[e,[0,p],t,c,d]}let h=!0,f=0,y=Array(u).fill(0);for(let t=0;t<l;++t){let r=e[t*p];if(r<0)throw Error(i.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(t,r));if(r>=u)throw Error(i.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(t,r,u));++y[r],h=h&&r>=f,f=r}let g=!0;for(let e=0;e<u;++e){let t=0===y[e];c[e]=t,g=g&&!t,y[e]=Math.max(y[e],1),e>0&&(y[e]+=y[e-1])}if(g&&h){for(let e=0;e<l;++e)d[e]=e;return[e,[l,p],n,c,d]}{let t=y[u-1],a=i.D5U.getArrayFromDType(r,t*p),h=i.D5U.getArrayFromDType(o,t),f=Array(u).fill(0);for(let t=0;t<l;++t){let r=e[t*p],i=f[r],o=(0===r?0:y[r-1])+i;f[r]++;for(let r=0;r<p;++r)a[o*p+r]=e[t*p+r];h[o]=n[t],d[t]=o}for(let e=0;e<u;++e){let t=f[e];if(0===t){let t=0===e?0:y[e-1];a[t*p+0]=e;for(let e=1;e<p;++e)a[t*p+e]=0;h[t]=s}}return[a,[t,p],h,c,d]}}},10956:function(e,t,r){"use strict";r.d(t,{U:function(){return sparseReshapeImpl}});var i=r(85964);/**
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
 */function sparseReshapeImpl(e,t,r,n,o){let a=i.D5U.sizeFromShape(n),s=t[0],l=o.length,u=[],c=1,d=-1;for(let e=0;e<l;++e){let t=o[e];if(-1===t){if(-1!==d)throw Error(i.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(d,e));d=e,u.push(1)}else{if(t<0)throw Error(i.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(e,t));c*=t,u.push(t)}}if(-1!==d){if(c<=0)throw Error(i.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let e=Math.trunc(a/c);if(c*e!==a)throw Error(i.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(n,u));u[d]=e}let p=i.D5U.sizeFromShape(u);if(p!==a)throw Error(i.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(n,u));let h=n.length,f=[];if(h>0){f[h-1]=1;for(let e=h-2;e>=0;--e)f[e]=f[e+1]*n[e+1]}let y=[];if(l>0){y[l-1]=1;for(let e=l-2;e>=0;--e)y[e]=y[e+1]*u[e+1]}let g=i.D5U.getArrayFromDType(r,s*l);for(let t=0;t<s;++t){let r=0;for(let i=0;i<h;++i)r+=e[t*h+i]*f[i];for(let e=0;e<l;++e)g[t*l+e]=Math.trunc(r/y[e]),r%=y[e]}return[g,[s,l],u]}},35581:function(e,t,r){"use strict";r.d(t,{V:function(){return sparseSegmentReductionImpl}});var i=r(85964);/**
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
 */function sparseSegmentReductionImpl(e,t,r,n,o,a=!1,s=0){let l=n.length,u=[t[0],e.length/t[0]],c=u[1],d=l>0?o[l-1]+1:0;if(d<0)throw Error(i.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let p=t.slice();p[0]=d;let h=p.reduce((e,t)=>e*t,1),f=i.D5U.getArrayFromDType(r,h);if(0===l)return d>0&&f.fill(s),[f,p];if(d<=0)throw Error(i.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let y=0,g=1,m=0,v=o[0];for(;;){let t=0;if(g<l){if(v===(t=o[g])){++g;continue}if(v>=t)throw Error(i.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(v<0||v>=d)throw Error(i.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(v,d));v>m&&f.fill(s,m*c,v*c);for(let t=y;t<g;++t){let r=n[t];if(r<0||r>=u[0])throw Error(i.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(t,n[t],u[0]));for(let t=0;t<c;t++)f[v*c+t]+=e[r*c+t]}if(a)for(let e=0;e<c;e++)f[v*c+e]/=g-y;if(y=g,++g,m=v+1,v=t,g>l)break}return m<d&&f.fill(s,m*c,d*c),[f,p]}},36374:function(e,t,r){"use strict";r.d(t,{cz:function(){return l},zT:function(){return a}});var i=r(85964),n=r(6458),o=r(925);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let a=(0,n.a)(e=>Math.sqrt(e)),s=(0,o.A)(i.FKq,e=>Math.sqrt(e)),l={kernelName:i.FKq,backendName:"cpu",kernelFunc:s}},26808:function(e,t,r){"use strict";r.d(t,{P:function(){return a},j:function(){return l}});var i=r(85964),n=r(6458),o=r(925);/**
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
 */let a=(0,n.a)((e,t)=>{let{pattern:r,replaceGlobal:i,rewrite:n}=t;return e.replace(new RegExp(r,i?"g":""),n)}),s=(0,o.O)(i.e0R,a),l={kernelName:i.e0R,backendName:"cpu",kernelFunc:s}},37025:function(e,t,r){"use strict";r.d(t,{t:function(){return stridedSliceImpl}});var i=r(85964);/**
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
 */function stridedSliceImpl(e,t,r,n){let o=(0,i.f3b)(e,t.dtype);for(let e=0;e<o.size;e++){let i=o.indexToLoc(e),a=Array(i.length);for(let e=0;e<a.length;e++)a[e]=i[e]*r[e]+n[e];o.set(t.get(...a),...i)}return o}},27414:function(e,t,r){"use strict";r.d(t,{A:function(){return stringNGramsImpl}});var i=r(85964);/**
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
 */let StringNGramsOp=class StringNGramsOp{constructor(e,t,r,n,o,a){this.separator=i.D5U.encodeString(e),this.nGramWidths=t,this.leftPad=i.D5U.encodeString(r),this.rightPad=i.D5U.encodeString(n),this.padWidth=o,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let r=this.getPadWidth(t);return Math.max(0,e+2*r-t+1)}createNGrams(e,t,r,i,n,o){for(let a=0;a<n;++a){let s;let l=this.getPadWidth(o),u=Math.max(0,l-a),c=Math.max(0,l-(n-(a+1))),d=o-(u+c),p=t+(u>0?0:a-l);s=0+u*this.leftPad.length;for(let t=0;t<d;++t)s+=e[p+t].length;s+=c*this.rightPad.length;let h=u+c+d-1;s+=h*this.separator.length,r[i+a]=new Uint8Array(s);let f=r[i+a],y=0,appendToNGram=e=>e.forEach(e=>f[y++]=e);for(let e=0;e<u;++e)appendToNGram(this.leftPad),appendToNGram(this.separator);for(let t=0;t<d-1;++t)appendToNGram(e[p+t]),appendToNGram(this.separator);if(d>0){appendToNGram(e[p+d-1]);for(let e=0;e<c;++e)appendToNGram(this.separator),appendToNGram(this.rightPad)}else{for(let e=0;e<c-1;++e)appendToNGram(this.rightPad),appendToNGram(this.separator);appendToNGram(this.rightPad)}}}compute(e,t){let r=e.length,n=t.length;if(n>0){let e=t[0];if(0!==e)throw Error(`First split value must be 0, got ${e}`);for(let i=1;i<n;++i){let n=t[i]>=e;if(!(n=n&&t[i]<=r))throw Error(`Invalid split value ${t[i]}, must be in [${e}, ${r}]`);e=t[i]}if(e!==r)throw Error(`Last split value must be data size. Expected ${r}, got ${e}`)}let o=n-1,a=i.D5U.getArrayFromDType("int32",n);if(0===r||0===n){let e=Array(r);for(let e=0;e<=o;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=o;++e){let r=t[e]-t[e-1],i=0;this.nGramWidths.forEach(e=>{i+=this.getNumNGrams(r,e)}),this.preserveShort&&r>0&&0===i&&(i=1),a[e]=a[e-1]+i}let s=Array(a[o]);for(let r=0;r<o;++r){let i=t[r],n=a[r];if(this.nGramWidths.forEach(o=>{let a=t[r+1]-t[r],l=this.getNumNGrams(a,o);this.createNGrams(e,i,s,n,l,o),n+=l}),this.preserveShort&&n===a[r]){let o=t[r+1]-t[r];if(0===o)continue;let a=o+2*this.padWidth;this.createNGrams(e,i,s,n,1,a)}}return[s,a]}};function stringNGramsImpl(e,t,r,i,n,o,a,s){return new StringNGramsOp(r,i,n,o,a,s).compute(e,t)}},93157:function(e,t,r){"use strict";r.d(t,{Q:function(){return stringSplitImpl}});var i=r(85964);function stringSplitImpl(e,t,r){let n=e.length,o=[],a=0,s=0,l=Array(n);for(let i=0;i<n;++i){let n=o.length;!/**
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
 */function(e,t,r,i){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)i.push(e.subarray(t,t+1));return}if(1===t.length){let n=t[0],o=e.indexOf(n);for(;-1!==o;){let t=e.subarray(0,o);r&&0===t.length||i.push(t),o=(e=e.subarray(o+1)).indexOf(n)}r&&0===e.length||i.push(e);return}let n=0;for(let o=0;o<e.length+1;o++)if(o===e.length||-1!==t.indexOf(e[o])){let t=e.subarray(n,o);r&&0===t.length||i.push(t),n=o+1}}(e[i],t,r,o);let u=o.length-n;l[i]=u,a+=u,s=Math.max(s,u)}let u=i.D5U.getArrayFromDType("int32",2*a),c=Array(a),d=[n,s],p=0;for(let e=0;e<n;++e)for(let t=0;t<l[e];++t)u[2*p]=e,u[2*p+1]=t,c[p]=o[p],++p;return[u,c,d]}},80912:function(e,t,r){"use strict";r.d(t,{h:function(){return stringToHashBucketFastImpl}});var i=r(85964);/**
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
 */function stringToHashBucketFastImpl(e,t){let r=i.D5U.getArrayFromDType("int32",e.length);for(let n=0;n<e.length;++n)r[n]=i.D5U.fingerPrint64(e[n]).modulo(t).getLowBitsUnsigned();return r}},27262:function(e,t,r){"use strict";r.d(t,{GR:function(){return u},VY:function(){return a},lu:function(){return l}});var i=r(85964),n=r(62074),o=r(8093);/**
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
 */let a=(0,n.b)((e,t)=>e-t),s=(0,o.H)((e,t,r,i)=>({real:e-r,imag:t-i})),l=(0,o.j)(i.Tr8,a,s),u={kernelName:i.Tr8,backendName:"cpu",kernelFunc:l}},67674:function(e,t,r){"use strict";r.d(t,{R:function(){return tileImpl}});var i=r(85964);/**
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
 */function tileImpl(e,t){let r=Array(e.rank);for(let i=0;i<r.length;i++)r[i]=e.shape[i]*t[i];let n=(0,i.f3b)(r,e.dtype);for(let t=0;t<n.values.length;++t){let r=n.indexToLoc(t),i=Array(e.rank);for(let t=0;t<i.length;t++)i[t]=r[t]%e.shape[t];let o=e.locToIndex(i);n.values[t]=e.values[o]}return n}},88936:function(e,t,r){"use strict";r.d(t,{W:function(){return topKImpl}});var i=r(85964);/**
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
 */let comparePair=(e,t)=>{let r=t.value-e.value;return 0===r?e.index-t.index:r};function topKImpl(e,t,r,n,o){let a=t[t.length-1],[s,l]=[e.length/a,a],u=i.D5U.getTypedArrayFromDType(r,s*n),c=i.D5U.getTypedArrayFromDType("int32",s*n);for(let t=0;t<s;t++){let r=t*l,a=e.subarray(r,r+l),s=Array(a.length);a.forEach((e,t)=>s[t]={value:e,index:t}),n<s.length&&(function select(e,t,r=0,n=e.length-1){for(;n>r;){if(n-r>600){let i=n-r+1,o=t-r+1,a=Math.log(i),s=.5*Math.exp(2*a/3),l=.5*Math.sqrt(a*s*(i-s)/i)*Math.sign(o-i/2),u=Math.max(r,Math.floor(t-o*s/i+l)),c=Math.min(n,Math.floor(t+(i-o)*s/i+l));select(e,t,u,c)}let o=e[t],a=r,s=n;for(i.D5U.swap(e,r,t),comparePair(e[n],o)>0&&i.D5U.swap(e,r,n);a<s;){for(i.D5U.swap(e,a,s),a++,s--;0>comparePair(e[a],o);)a+=1;for(;comparePair(e[s],o)>0;)s-=1}0===comparePair(e[r],o)?i.D5U.swap(e,r,s):(s+=1,i.D5U.swap(e,s,n)),s<=t&&(r=s+1),t<=s&&(n=s-1)}}(s,n),s=s.slice(0,n)),o&&s.sort(comparePair);let d=t*n,p=u.subarray(d,d+n),h=c.subarray(d,d+n);for(let e=0;e<n;e++)p[e]=s[e].value,h[e]=s[e].index}let d=t.slice();return d[d.length-1]=n,[(0,i.f3b)(d,r,u),(0,i.f3b)(d,"int32",c)]}},11618:function(e,t,r){"use strict";r.d(t,{b:function(){return a},p:function(){return transpose}});var i=r(85964),n=r(97858),o=r(26011);/**
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
 */function transpose(e){let{inputs:t,attrs:r,backend:i}=e,{x:a}=t,{perm:s}=r;(0,n.H)(a,"transpose");let l=a.shape.length,u=Array(l);for(let e=0;e<u.length;e++)u[e]=a.shape[s[e]];let c=i.data.get(a.dataId).values,d=(0,o.H)(c,a.shape,a.dtype,s,u),p=i.write(d,u,a.dtype);return{dataId:p,shape:u,dtype:a.dtype}}let a={kernelName:i.G3Y,backendName:"cpu",kernelFunc:transpose}},26011:function(e,t,r){"use strict";r.d(t,{H:function(){return transposeImpl}});var i=r(85964);/**
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
 */function transposeImpl(e,t,r,n,o){let a=t.length,s=i.D5U.sizeFromShape(t),l=i.D5U.computeStrides(t),u=i.D5U.computeStrides(o),c=i.D5U.getTypedArrayFromDType(r,i.D5U.sizeFromShape(o));for(let t=0;t<s;++t){let r=i.D5U.indexToLoc(t,a,l),o=Array(r.length);for(let e=0;e<o.length;e++)o[e]=r[n[e]];let s=i.D5U.locToIndex(o,a,u);c[s]=e[t]}return c}},78305:function(e,t,r){"use strict";r.d(t,{S:function(){return uniqueImpl}});var i=r(85964);/**
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
 */function uniqueImpl(e,t,r,n){let o=i.D5U.parseAxisParam(t,r)[0],a=[1,r[0],1];for(let e=0;e<o;e++)a[0]*=r[e];a[1]=r[o];for(let e=o+1;e<r.length;e++)a[2]*=r[e];let s=new Map,l=new Int32Array(r[o]),u=new i.YDk(a,n,e),c=[],d=1===a[0]&&1===a[2];for(let t=0;t<r[o];t++){let r;if(d)r=e[t].toString();else{let e=[];for(let r=0;r<a[0];r++)for(let i=0;i<a[2];i++)e.push(u.get(r,t,i));r=e.join(",")}let i=s.get(r);if(null!=i)l[t]=i;else{let e=s.size;s.set(r,e),l[t]=e,c.push(t)}}let p=a.slice();p[1]=s.size;let h=new i.YDk(p,n);c.forEach((e,t)=>{for(let r=0;r<a[0];r++)for(let i=0;i<a[2];i++)h.set(u.get(r,e,i),r,t,i)});let f=r.slice();return f[o]=p[1],{outputValues:h.values,outputShape:f,indices:l}}},62074:function(e,t,r){"use strict";r.d(t,{b:function(){return createSimpleBinaryKernelImpl}});var i=r(85964);/**
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
 */function createSimpleBinaryKernelImpl(e){return(t,r,n,o,a)=>{let s=i.backend_util.assertAndGetBroadcastShape(t,r),l=s.length,u=i.D5U.computeStrides(s),c=i.D5U.sizeFromShape(s),d=i.D5U.getTypedArrayFromDType(a,c),p=t.length,h=r.length,f=i.D5U.computeStrides(t),y=i.D5U.computeStrides(r),g=i.backend_util.getBroadcastDims(t,s),m=i.backend_util.getBroadcastDims(r,s);if(g.length+m.length===0)for(let t=0;t<d.length;++t)d[t]=e(n[t%n.length],o[t%o.length]);else for(let t=0;t<d.length;++t){let r=i.D5U.indexToLoc(t,l,u),a=r.slice(-p);g.forEach(e=>a[e]=0);let s=i.D5U.locToIndex(a,p,f),c=r.slice(-h);m.forEach(e=>c[e]=0);let v=i.D5U.locToIndex(c,h,y);d[t]=e(n[s],o[v])}return[d,s]}}},8093:function(e,t,r){"use strict";r.d(t,{H:function(){return createComplexBinaryKernelImpl},j:function(){return binaryKernelFunc}});var i=r(85964),n=r(97858),o=r(964),a=r(4471);/**
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
 */function binaryKernelFunc(e,t,r,s){return null==r?({inputs:r,backend:o})=>{let{a,b:l}=r;(0,n.H)([a,l],e);let u=o.data.get(a.dataId).values,c=o.data.get(l.dataId).values,d="string"===a.dtype?i.backend_util.fromUint8ToStringArray(u):u,p="string"===a.dtype?i.backend_util.fromUint8ToStringArray(c):c,h=s||a.dtype,[f,y]=t(a.shape,l.shape,d,p,h);return o.makeTensorInfo(y,h,f)}:({inputs:e,backend:i})=>{let{a:n,b:l}=e;if("complex64"===n.dtype||"complex64"===l.dtype){let e=(0,o.pj)({inputs:{x:n},backend:i,attrs:{dtype:"complex64"}}),t=i.data.get(e.dataId),s=t.complexTensorInfos.real,u=t.complexTensorInfos.imag,c=i.data.get(s.dataId).values,d=i.data.get(u.dataId).values,p=(0,o.pj)({inputs:{x:l},backend:i,attrs:{dtype:"complex64"}}),h=i.data.get(p.dataId),f=h.complexTensorInfos.real,y=h.complexTensorInfos.imag,g=i.data.get(f.dataId).values,m=i.data.get(y.dataId).values,[v,b,S]=r(n.shape,l.shape,c,d,g,m),P=i.makeTensorInfo(S,"float32",v),C=i.makeTensorInfo(S,"float32",b),x=(0,a.P)({inputs:{real:P,imag:C},backend:i});return i.disposeIntermediateTensorInfo(e),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(P),i.disposeIntermediateTensorInfo(C),x}{let e=i.data.get(n.dataId).values,r=i.data.get(l.dataId).values,o=s||n.dtype,[a,u]=t(n.shape,l.shape,e,r,o);return i.makeTensorInfo(u,o,a)}}}function createComplexBinaryKernelImpl(e){return(t,r,n,o,a,s)=>{let l=i.backend_util.assertAndGetBroadcastShape(t,r),u=i.D5U.sizeFromShape(l),c=l.length,d=i.D5U.computeStrides(l),p=i.D5U.getTypedArrayFromDType("float32",u),h=i.D5U.getTypedArrayFromDType("float32",u),f=i.backend_util.getBroadcastDims(t,l),y=i.backend_util.getBroadcastDims(r,l),g=i.backend_util.mergeRealAndImagArrays(n,o),m=i.backend_util.mergeRealAndImagArrays(a,s),v=t.length,b=i.D5U.computeStrides(t),S=r.length,P=i.D5U.computeStrides(r);if(f.length+y.length===0)for(let t=0;t<p.length;t++){let r=t%g.length,i=t%m.length,n=e(g[2*r],g[2*r+1],m[2*i],m[2*i+1]);p[t]=n.real,h[t]=n.imag}else for(let t=0;t<p.length;t++){let r=i.D5U.indexToLoc(t,c,d),n=r.slice(-v);f.forEach(e=>n[e]=0);let o=i.D5U.locToIndex(n,v,b),a=r.slice(-S);y.forEach(e=>a[e]=0);let s=i.D5U.locToIndex(a,S,P),l=e(g[2*o],g[2*o+1],m[2*s],m[2*s+1]);p[t]=l.real,h[t]=l.imag}return[p,h,l]}}},6458:function(e,t,r){"use strict";r.d(t,{a:function(){return createSimpleUnaryImpl}});var i=r(85964);/**
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
 */function createSimpleUnaryImpl(e){return(t,r,n)=>{let o=i.D5U.getArrayFromDType(r,t.length);for(let r=0;r<t.length;++r)o[r]=e(t[r],n);return o}}},925:function(e,t,r){"use strict";r.d(t,{A:function(){return unaryKernelFunc},O:function(){return unaryKernelFuncFromImpl}});var i=r(85964),n=r(97858),o=r(6458);/**
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
 */function unaryKernelFunc(e,t,r){let i=(0,o.a)(t);return unaryKernelFuncFromImpl(e,i,r)}function unaryKernelFuncFromImpl(e,t,r){return({inputs:o,attrs:a,backend:s})=>{let l;let{x:u}=o;(0,n.H)(u,e);let c=s.data.get(u.dataId).values;if("string"===u.dtype){if(!Array.isArray(c))throw Error("String tensor's value was not an instance of Array");l=i.backend_util.fromUint8ToStringArray(c)}else l=c;let d=r||u.dtype,p=t(l,d,a);return s.makeTensorInfo(u.shape,d,p)}}},34258:function(e,t,r){"use strict";r.d(t,{l:function(){return(/**
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
 */function zeros(e,t,r="float32"){if("complex64"===r){let r=zeros(e,t,"float32"),i=zeros(e,t,"float32");return(0,n.P)({inputs:{real:r,imag:i},backend:e})}let o=i.D5U.makeZerosTypedArray(i.D5U.sizeFromShape(t),r);return e.makeTensorInfo(t,r,o)})}});var i=r(85964),n=r(4471)},54476:function(e,t,r){"use strict";let i,n,o,a,s,l,u,c,d,p,h,f,y,g,m,v,b,S,P,C,x,A,_,T,w,R,E,D,O,I,M,k,L,N,B,F,V,j,H,z,U,G,W,X,Y,$,K,q,Z,J,Q,ee,et,er,ei,en,eo,ea,es,el,eu,ec,ed,ep,eh,ef,ey,eg,em,ev,eb,eS,eP,eC,ex,eA,e_;r.d(t,{_1:function(){return setWasmPaths}});var eT,ew,eR,eE,eD,eO,eI,eM,ek=r(85964);(eT=eD||(eD={}))[eT.float32=0]="float32",eT[eT.int32=1]="int32",eT[eT.bool=2]="bool",eT[eT.string=3]="string",eT[eT.complex64=4]="complex64",(ew=eO||(eO={}))[ew.linear=0]="linear",ew[ew.relu=1]="relu",ew[ew.relu6=2]="relu6",ew[ew.prelu=3]="prelu",ew[ew.leakyrelu=4]="leakyrelu",ew[ew.sigmoid=5]="sigmoid",ew[ew.elu=6]="elu";let eL={kernelName:ek.usg,backendName:"wasm",setupFunc:function(e){i=e.wasm.cwrap(ek.usg,null,["number","array","number","number","array","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:n}=e,{a:o,b:a,bias:s,preluActivationWeights:l}=t;if("float32"!==o.dtype||"float32"!==a.dtype)throw Error("_FusedMatMul for non non-float32 tensors not yet supported.");let{transposeA:u,transposeB:c,activation:d,leakyreluAlpha:p}=n,h=r.dataIdMap.get(o.dataId).id,f=r.dataIdMap.get(a.dataId).id,y=0;if(null!=s){let e=r.dataIdMap.get(s.dataId);if(1!==e.shape.length)throw Error(`_FusedMatMul only supports rank-1 bias but got rank ${e.shape.length}.`);y=e.id}let g=null==l?0:r.dataIdMap.get(l.dataId).id,m=eO[d];if(null==m)throw Error(`${d} activation not yet supported for FusedConv2D in the wasm backend.`);let v=u?o.shape[2]:o.shape[1],b=c?a.shape[1]:a.shape[2],S=ek.Jyw.assertAndGetBroadcastShape(o.shape.slice(0,-2),a.shape.slice(0,-2)),P=r.makeOutput([...S,v,b],o.dtype),C=r.dataIdMap.get(P.dataId).id,x=new Uint8Array(new Int32Array(o.shape).buffer),A=new Uint8Array(new Int32Array(a.shape).buffer);return i(h,x,o.shape.length,f,A,a.shape.length,u,c,m,y,g,p||0,C),P}};/**
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
 */function createUnaryKernelConfig(e,t){let r;return{kernelName:e,backendName:"wasm",setupFunc:function(t){r=t.wasm.cwrap(e,null,["number","number","number"])},kernelFunc:function(e){let{backend:i,inputs:{x:n}}=e,o=i.dataIdMap.get(n.dataId).id,a=i.makeOutput(n.shape,t||n.dtype),s=i.dataIdMap.get(a.dataId).id;return 0===ek.D5U.sizeFromShape(a.shape)||r(o,eD[n.dtype],s),a}}}/**
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
 */let eN=createUnaryKernelConfig(ek.SYM),eB=createUnaryKernelConfig(ek.VGw),eF=createUnaryKernelConfig(ek.SpW);/**
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
 */function createBinaryKernelConfig(e,t,r){let i;return{kernelName:e,backendName:"wasm",setupFunc:function(t){i=t.wasm.cwrap(e,null,["number","array","number","number","array","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:n}=e,{a:o,b:a}=n,s=t.dataIdMap.get(o.dataId).id,l=t.dataIdMap.get(a.dataId).id,u=null!=r?r:o.dtype,c=ek.backend_util.assertAndGetBroadcastShape(o.shape,a.shape),d=t.makeOutput(c,u);if(0===ek.D5U.sizeFromShape(c))return d;let p=new Uint8Array(new Int32Array(o.shape).buffer),h=new Uint8Array(new Int32Array(a.shape).buffer),f=t.dataIdMap.get(d.dataId).id;return i(s,p,o.shape.length,l,h,a.shape.length,eD[o.dtype],f),d}}}let eV=createBinaryKernelConfig(ek.mm_,!0),ej={kernelName:ek.Xze,backendName:"wasm",setupFunc:function(e){n=e.wasm.cwrap(ek.Xze,null,["array","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r}=e,i=r.makeOutput(t[0].shape,t[0].dtype);if(0===ek.D5U.sizeFromShape(i.shape))return i;let o=t.map(e=>r.dataIdMap.get(e.dataId).id),a=new Uint8Array(new Int32Array(o).buffer),s=r.dataIdMap.get(i.dataId).id;return n(a,o.length,eD[i.dtype],s),i}};/**
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
 */function identity(e){let{inputs:{x:t},backend:r}=e;if("string"===t.dtype)return(0,ek.XeE)(r.readSync(t.dataId),t.shape,t.dtype);let i=r.makeOutput(t.shape,t.dtype),n=r.typedArrayFromHeap(t),o=r.typedArrayFromHeap(i);return o.set(n),i}let eH={kernelName:ek.iJz,backendName:"wasm",kernelFunc:identity};function transpose(e){let{inputs:t,backend:r,attrs:i}=e,[n,a]=function(e,t){let r=[],i=[];for(let n=0;n<e.length;++n)1!==e[n]&&r.push(e[n]),1!==e[t[n]]&&i.push(t[n]);for(let e=0;e<i.length;++e){let t=-1;for(let r=0;r<i.length;++r)i[r]>=e&&(-1===t||i[t]>i[r])&&(t=r);i[t]=e}return[r,i]}(t.x.shape,i.perm),s=!0;for(let e=0;e<a.length;e++)a[e]!==e&&(s=!1);let l=function(e,t){let r=Array(e.length);for(let i=0;i<r.length;i++)r[i]=e[t[i]];return r}(t.x.shape,i.perm),u={dataId:t.x.dataId,shape:n,dtype:t.x.dtype};if(s){let e=identity({inputs:t,backend:r});return e.shape=l,e}let c=r.makeOutput(l,u.dtype),d=r.dataIdMap.get(u.dataId).id,p=r.dataIdMap.get(c.dataId).id,h=new Uint8Array(new Int32Array(a).buffer),f=new Uint8Array(new Int32Array(u.shape).buffer);return o(d,f,u.shape.length,eD[u.dtype],p,h,a.length),c}let ez={kernelName:ek.G3Y,backendName:"wasm",kernelFunc:transpose,setupFunc:function(e){o=e.wasm.cwrap(ek.G3Y,null,["number","array","number","number","number","array","number"])}};/**
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
 */function permuteAxesAndTranspose(e,t,r){let i=e.shape,n=e.shape.length,o=ek.D5U.parseAxisParam(t,i),a=o,s=ek.backend_util.getAxesPermutation(a,n),l=null,u=!1;if(null!=s){let t=Array(n);for(let e=0;e<t.length;e++)t[e]=i[s[e]];a=ek.backend_util.getInnerMostAxes(a.length,n),l=transpose({inputs:{x:e},attrs:{perm:s},backend:r});let o=r.dataIdMap.get(e.dataId).id,c=r.dataIdMap.get(l.dataId).id;c!==o&&(u=!0)}return{transposed:l,originalAxes:o,axes:a,inputWasTransposed:u}}let eU={kernelName:ek.oT6,backendName:"wasm",setupFunc:function(e){a=e.wasm.cwrap(ek.oT6,null,["number, number, number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{axis:n,keepDims:o}=i,{x:s}=r,l=t.dataIdMap.get(s.dataId).id,u=l,c=s,{transposed:d,axes:p,originalAxes:h,inputWasTransposed:f}=permuteAxesAndTranspose(s,n,t);if(f){let e=t.dataIdMap.get(d.dataId).id;c=d,u=e}let y=c.shape.length;ek.backend_util.assertAxesAreInnerMostDims("all",p,y);let[g,m]=ek.backend_util.computeOutAndReduceShapes(c.shape,p),v=ek.D5U.sizeFromShape(m),b=t.makeOutput(g,s.dtype);if(0!==ek.D5U.sizeFromShape(c.shape)){let e=t.dataIdMap.get(b.dataId).id;a(u,v,e)}if(f&&t.disposeData(d.dataId),o){let e=ek.backend_util.expandShapeToKeepDim(b.shape,h);b.shape=e}return b}},eG={kernelName:ek.IKK,backendName:"wasm",setupFunc:function(e){s=e.wasm.cwrap(ek.IKK,null,["number, number, number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{axis:n,keepDims:o}=i,{x:a}=r,l=t.dataIdMap.get(a.dataId).id,u=l,c=a,{transposed:d,axes:p,originalAxes:h,inputWasTransposed:f}=permuteAxesAndTranspose(a,n,t);if(f){let e=t.dataIdMap.get(d.dataId).id;c=d,u=e}let y=c.shape.length;ek.backend_util.assertAxesAreInnerMostDims("any",p,y);let[g,m]=ek.backend_util.computeOutAndReduceShapes(c.shape,p),v=ek.D5U.sizeFromShape(m),b=t.makeOutput(g,a.dtype);if(0!==ek.D5U.sizeFromShape(c.shape)){let e=t.dataIdMap.get(b.dataId).id;s(u,v,e)}if(f&&t.disposeData(d.dataId),o){let e=ek.backend_util.expandShapeToKeepDim(b.shape,h);b.shape=e}return b}};/**
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
 */function createArgMinMaxKernelConfig(e){let t;return{kernelName:e,backendName:"wasm",setupFunc:function(r){t=r.wasm.cwrap(e,null,["number","number","number","number","number"])},kernelFunc:function(e){let{backend:r,inputs:i,attrs:n}=e,{axis:o}=n,{x:a}=i,s=r.dataIdMap.get(a.dataId).id,l=s,u=a,{transposed:c,axes:d,inputWasTransposed:p}=permuteAxesAndTranspose(a,o,r);if(p){let e=r.dataIdMap.get(c.dataId).id;e!==s&&(u=c,l=e)}let h=u.shape.slice(0,-1),f=r.makeOutput(h,"int32"),y=r.dataIdMap.get(f.dataId).id,g=ek.D5U.sizeFromShape(f.shape),m=u.shape[d[0]];return t(l,eD[u.dtype],g,m,y),p&&r.disposeData(c.dataId),f}}}/**
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
 */let eW=createArgMinMaxKernelConfig(ek.sJF),eX=createArgMinMaxKernelConfig(ek.aJk),eY=createUnaryKernelConfig(ek.M2y),e$=createUnaryKernelConfig(ek.qw7),eK=createUnaryKernelConfig(ek.jMg),eq=createBinaryKernelConfig(ek.QCc,!1),eZ=createUnaryKernelConfig(ek.Oyi),eJ={kernelName:ek.JhU,backendName:"wasm",setupFunc:function(e){l=e.wasm.cwrap(ek.JhU,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,attrs:r,backend:i}=e,n=t.x,o=i.dataIdMap.get(n.dataId).id,{filterSize:a,strides:s,pad:u,dimRoundingMode:c}=r,d=ek.backend_util.computePool2DInfo(n.shape,a,s,1,u,c),p=d.filterHeight,h=d.filterWidth,f=d.padInfo.top,y=d.padInfo.right,g=d.padInfo.bottom,m=d.padInfo.left,v=d.strideHeight,b=d.strideWidth,S=d.inChannels;if("channelsLast"!==d.dataFormat)throw Error(`wasm backend does not support dataFormat:'${d.dataFormat}'. Please use 'channelsLast'.`);if(1!==d.dilationWidth||1!==d.dilationHeight)throw Error(`was backend only supports average pooling with dilation = [1, 1], got [${d.dilationHeight}, ${d.dilationWidth}].`);let P=i.makeOutput(d.outShape,"float32"),C=i.dataIdMap.get(P.dataId).id;return l(o,n.shape[0],n.shape[1],n.shape[2],p,h,f,y,g,m,v,b,S,C),P}},eQ={kernelName:ek._k9,backendName:"wasm",setupFunc:function(e){u=e.wasm.cwrap("AvgPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{filterSize:o,strides:a,pad:s,dimRoundingMode:l,dataFormat:c}=i,d=ek.backend_util.computePool3DInfo(n.shape,o,a,1,s,l,c),p=r.makeOutput(d.outShape,n.dtype);return u(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(p.dataId).id,d.batchSize,d.inChannels,d.inDepth,d.inHeight,d.inWidth,d.outDepth,d.outHeight,d.outWidth,d.strideDepth,d.strideHeight,d.strideWidth,d.dilationDepth,d.dilationHeight,d.dilationWidth,d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth,d.padInfo.front,d.padInfo.top,d.padInfo.left),p}},e0={kernelName:ek.IMb,backendName:"wasm",setupFunc:function(e){c=e.wasm.cwrap("AvgPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o}=t,{filterSize:a,strides:s,pad:l,dimRoundingMode:u}=i,d=ek.backend_util.computePool3DInfo(o.shape,a,s,1,l,u),p=r.makeOutput(o.shape,o.dtype);return c(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(p.dataId).id,d.batchSize,d.inChannels,d.inDepth,d.inHeight,d.inWidth,d.outDepth,d.outHeight,d.outWidth,d.strideDepth,d.strideHeight,d.strideWidth,d.dilationDepth,d.dilationHeight,d.dilationWidth,d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth,d.padInfo.front,d.padInfo.top,d.padInfo.left,d.filterDepth,d.filterHeight,d.filterWidth),p}},e1={kernelName:ek.ROF,backendName:"wasm",setupFunc:function(e){d=e.wasm.cwrap("AvgPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o}=t,{filterSize:a,strides:s,pad:l}=i,u=ek.backend_util.computePool2DInfo(o.shape,a,s,1,l),c=r.makeOutput(o.shape,o.dtype);return d(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(c.dataId).id,u.batchSize,u.inChannels,u.inHeight,u.inWidth,u.outHeight,u.outWidth,u.strideHeight,u.strideWidth,u.dilationHeight,u.dilationWidth,u.effectiveFilterHeight,u.effectiveFilterWidth,u.padInfo.top,u.padInfo.left,u.filterHeight,u.filterWidth),c}};/**
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
 */function reshape(e){let{inputs:t,attrs:r}=e,{x:i}=t,{shape:n}=r,o=ek.D5U.sizeFromShape(i.shape),a=ek.D5U.inferFromImplicitShape(n,o);return ek.D5U.assert(o===ek.D5U.sizeFromShape(a),()=>`new shape: ${a}, old shape: ${i.shape}. New shape and old shape must have the same number of elements.`),e.backend.incRef(i.dataId),{dataId:i.dataId,shape:a,dtype:i.dtype}}let e2={kernelName:ek.HZH,backendName:"wasm",kernelFunc:reshape},e3={kernelName:ek.XLW,backendName:"wasm",setupFunc:function(e){p=e.wasm.cwrap(ek.XLW,null,["number","array","number","number","array","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{a:n,b:o}=t,{transposeA:a,transposeB:s}=i;if("float32"!==n.dtype||"float32"!==o.dtype)throw Error("BatchMatMul for non non-float32 tensors not yet supported.");let l=n.shape.length,u=o.shape.length,c=a?n.shape[l-2]:n.shape[l-1],d=s?o.shape[u-1]:o.shape[u-2],h=a?n.shape[l-1]:n.shape[l-2],f=s?o.shape[u-2]:o.shape[u-1],y=n.shape.slice(0,-2),g=o.shape.slice(0,-2),m=ek.D5U.sizeFromShape(y),v=ek.D5U.sizeFromShape(g),b=ek.Jyw.assertAndGetBroadcastShape(n.shape.slice(0,-2),o.shape.slice(0,-2)),S=b.concat([h,f]);ek.D5U.assert(c===d,()=>`Error in matMul: inner shapes (${c}) and (${d}) of Tensors with shapes ${n.shape} and ${o.shape} and transposeA=${a} and transposeB=${s} must match.`);let P=a?[m,c,h]:[m,h,c],C=s?[v,f,d]:[v,d,f],x=reshape({inputs:{x:n},backend:r,attrs:{shape:P}}),A=reshape({inputs:{x:o},backend:r,attrs:{shape:C}}),_=r.dataIdMap.get(x.dataId).id,T=r.dataIdMap.get(A.dataId).id,w=a?x.shape[2]:x.shape[1],R=s?A.shape[1]:A.shape[2],E=Math.max(m,v),D=r.makeOutput([E,w,R],x.dtype),O=r.dataIdMap.get(D.dataId).id,I=new Uint8Array(new Int32Array(x.shape).buffer),M=new Uint8Array(new Int32Array(A.shape).buffer);return p(_,I,x.shape.length,T,M,A.shape.length,a,s,O),r.disposeData(x.dataId),r.disposeData(A.dataId),D.shape=S,D}};var e5=r(37804);/**
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
 */function slice(e){let{inputs:{x:t},attrs:{begin:r,size:i},backend:n}=e,[o,a]=ek.kuN.parseSliceParams(t,r,i),s=ek.kuN.isSliceContinous(t.shape,o,a),l=n.readSync(t.dataId),u=n.makeOutput(a,t.dtype),c=ek.D5U.computeStrides(t.shape),d=n.dataIdMap.get(u.dataId);if(s){let e=ek.kuN.computeFlatOffset(o,c);if("string"===t.dtype)d.stringBytes=l.slice(e,e+ek.D5U.sizeFromShape(a));else{let t=n.typedArrayFromHeap(u);t.set(l.subarray(e,e+ek.D5U.sizeFromShape(a)))}return u}if("string"===t.dtype){let e=(0,e5.rT)(l,o,a,t.shape,t.dtype);return d.stringBytes=e,u}let p=n.typedArrayFromHeap(u),h=t.shape.length;if(2===h)!function(e,t,r,i,n){let o=0,a=i[0],s=i[1],l=a+n[0];for(let i=a;i<l;i++){let a=i*t+s;r.set(e.subarray(a,a+n[1]),o),o+=n[1]}}(l,c[0],p,o,a);else if(3===h)!function(e,t,r,i,n,o){let a=0,s=n[0],l=n[1],u=n[2],c=s+o[0],d=l+o[1];for(let n=s;n<c;n++)for(let s=l;s<d;s++){let l=n*t+s*r+u;i.set(e.subarray(l,l+o[2]),a),a+=o[2]}}(l,c[0],c[1],p,o,a);else if(4===h)!function(e,t,r,i,n,o,a){let s=0,l=o[0],u=o[1],c=o[2],d=l+a[0],p=u+a[1],h=c+a[2],f=o[3];for(let o=l;o<d;o++)for(let l=u;l<p;l++)for(let u=c;u<h;u++){let c=o*t+l*r+u*i+f;n.set(e.subarray(c,c+a[3]),s),s+=a[3]}}(l,c[0],c[1],c[2],p,o,a);else{let e=(0,e5.rT)(l,o,a,t.shape,t.dtype);p.set(e)}return u}let e4={kernelName:ek.p2w,backendName:"wasm",kernelFunc:slice},e6={kernelName:ek.zws,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{blockShape:o,crops:a}=i,s=o.reduce((e,t)=>e*t),l=ek.backend_util.getReshaped(n.shape,o,s),u=ek.backend_util.getPermuted(l.length,o.length),c=ek.backend_util.getReshapedPermuted(n.shape,o,s),d=ek.backend_util.getSliceBeginCoords(a,o.length),p=ek.backend_util.getSliceSize(c,a,o.length),h=reshape({inputs:{x:n},backend:r,attrs:{shape:l}}),f=transpose({inputs:{x:h},backend:r,attrs:{perm:u}}),y=reshape({inputs:{x:f},backend:r,attrs:{shape:c}}),g=slice({inputs:{x:y},backend:r,attrs:{begin:d,size:p}});return r.disposeData(h.dataId),r.disposeData(f.dataId),r.disposeData(y.dataId),g}},e8={kernelName:ek.zvY,backendName:"wasm",setupFunc:function(e){h=e.wasm.cwrap(ek.zvY,null,["number","number","boolean","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{x:n,weights:o}=r,{size:a}=i,s=0!==o.shape.reduce((e,t)=>e*t,1),l=1===n.shape.length?[a]:[n.shape[0],a],u=t.makeOutput(l,o.dtype);function tensorId(e){return t.dataIdMap.get(e.dataId).id}return h(tensorId(n),a,s,tensorId(o),eD[o.dtype],tensorId(u)),u}},e9=createBinaryKernelConfig(ek.hCO,!0),e7={kernelName:ek.eEB,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{s0:i,s1:n}=t,o=r.typedArrayFromHeap(i),a=r.typedArrayFromHeap(n),s=ek.backend_util.assertAndGetBroadcastShape(Array.from(o),Array.from(a));return r.makeOutput([s.length],"int32",void 0,new Int32Array(s))}};/**
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
 */function cast(e){let{inputs:{x:t},attrs:{dtype:r},backend:i}=e,n=i.makeOutput(t.shape,r),o=i.typedArrayFromHeap(t),a=i.typedArrayFromHeap(n);return a.set(o),n}let te={kernelName:ek.RFZ,backendName:"wasm",kernelFunc:cast},tt=createUnaryKernelConfig(ek.gJX),tr={kernelName:ek.xnO,backendName:"wasm",setupFunc:function(e){f=e.wasm.cwrap(ek.xnO,null,["number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{clipValueMin:o,clipValueMax:a}=i,s=r.dataIdMap.get(n.dataId).id,l=r.makeOutput(n.shape,n.dtype),u=r.dataIdMap.get(l.dataId).id;return f(s,o,a,u),l}};var ti=r(82846);/**
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
 */function concat(e){let{inputs:t,backend:r}=e,i=ek.D5U.parseAxisParam(e.attrs.axis,t[0].shape)[0],n=t.map(e=>e.shape);ek.backend_util.assertParamsConsistent(n,i);let o=ek.backend_util.computeOutShape(t.map(e=>e.shape),i),a=t.filter(e=>ek.D5U.sizeFromShape(e.shape)>0);if(1===a.length)return identity({inputs:{x:a[0]},backend:r});let s=r.makeOutput(o,t[0].dtype);if(0===ek.D5U.sizeFromShape(o))return s;if("string"===a[0].dtype){let e=a.map(e=>{let t=ek.D5U.sizeFromShape(e.shape.slice(i));return reshape({inputs:{x:e},backend:r,attrs:{shape:[-1,t]}})}),n=e.map(e=>({vals:r.readSync(e.dataId),shape:e.shape}));o=ek.backend_util.computeOutShape(e.map(e=>e.shape),1);let l=1===e[0].shape[0],u=(0,ti.j)(n,o,t[0].dtype,l),c=ek.backend_util.computeOutShape(a.map(e=>e.shape),i);s.shape=c;let d=r.dataIdMap.get(s.dataId);return d.stringBytes=ek.backend_util.fromStringArrayToUint8(u),e.forEach(e=>r.disposeData(e.dataId)),s}let l=ek.D5U.sizeFromShape(a[0].shape.slice(0,i)),u=0,c=a.map(e=>{let t=ek.D5U.sizeFromShape(e.shape.slice(i));return u+=t,t}),d=a.map(e=>r.typedArrayFromHeap(e)),p=r.typedArrayFromHeap(s);for(let e=0;e<l;e++){let t=e*u;for(let r=0;r<d.length;r++){let i=c[r],n=e*i,o=d[r].subarray(n,n+i);p.set(o,t),t+=i}}return s}let tn={kernelName:ek.Eh3,backendName:"wasm",kernelFunc:concat},to={kernelName:ek.mhS,backendName:"wasm",setupFunc:function(e){y=e.wasm.cwrap(ek.mhS,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,attrs:r,backend:i}=e,{x:n,filter:o}=t,a=i.dataIdMap.get(n.dataId).id,s=i.dataIdMap.get(o.dataId).id,{strides:l,dilations:u,pad:c,dimRoundingMode:d,dataFormat:p}=r,h=ek.backend_util.convertConv2DDataFormat(p),f=ek.backend_util.computeConv2DInfo(n.shape,o.shape,l,u,c,d,!1,h),g=f.filterHeight,m=f.filterWidth,v=f.padInfo.top,b=f.padInfo.right,S=f.padInfo.bottom,P=f.padInfo.left,C=f.dilationHeight,x=f.dilationWidth,A=f.strideHeight,_=f.strideWidth,T=f.inChannels,w=f.outChannels,R="SAME"===f.padInfo.type?1:0;if("channelsLast"!==f.dataFormat)throw Error(`wasm backend Conv2D does not support dataFormat:'${f.dataFormat}'. Please use 'channelsLast'.`);let E=i.makeOutput(f.outShape,"float32"),D=i.dataIdMap.get(E.dataId).id;return y(a,n.shape[0],n.shape[1],n.shape[2],s,g,m,v,b,S,P,R,C,x,A,_,T,w,D),E}},ta={kernelName:ek.wm,backendName:"wasm",setupFunc:function(e){g=e.wasm.cwrap(ek.wm,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{dy:n,filter:o}=r,{strides:a,pad:s,dataFormat:l,dimRoundingMode:u,inputShape:c}=i,d=ek.backend_util.convertConv2DDataFormat(l),p=ek.backend_util.computeConv2DInfo(c,o.shape,a,1,s,u,!1,d),{batchSize:h,filterHeight:f,filterWidth:y,inChannels:m,inHeight:v,inWidth:b,outChannels:S,outHeight:P,outWidth:C,strideHeight:x,strideWidth:A}=p,_=f-1-p.padInfo.top,T=y-1-p.padInfo.left,w="channelsLast"===p.dataFormat,R=ek.D5U.computeStrides(p.inShape),E=ek.D5U.computeStrides(n.shape),[D,O,I]=ek.D5U.computeStrides(o.shape),M=R[0],k=w?R[1]:R[2],L=w?R[2]:1,N=w?1:R[1],B=E[0],F=w?E[1]:E[2],V=w?E[2]:1,j=w?1:E[1],H=t.makeOutput(p.inShape,"float32"),z=t.dataIdMap.get(H.dataId).id,U=t.dataIdMap.get(n.dataId).id,G=t.dataIdMap.get(o.dataId).id;return g(U,G,h,f,y,v,b,m,P,C,S,x,A,_,T,D,O,I,M,k,L,N,B,F,V,j,z),H}},ts={kernelName:ek.x12,backendName:"wasm",setupFunc:function(e){m=e.wasm.cwrap(ek.x12,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,filter:o}=t,{strides:a,pad:s,dilations:l}=i;if("float32"!==n.dtype)throw Error(`Tensor x must have dtype float32, got ${n.dtype}`);if("float32"!==o.dtype)throw Error(`Tensor filter must have dtype float32, got ${o.dtype}`);let u=ek.backend_util.computeConv3DInfo(n.shape,o.shape,a,l,s),c=r.makeOutput(u.outShape,n.dtype);return m(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(c.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),c}},tl={kernelName:ek.o2y,backendName:"wasm",setupFunc:function(e){v=e.wasm.cwrap(ek.o2y,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,dy:o}=t,{strides:a,pad:s,filterShape:l}=i;if("float32"!==n.dtype)throw Error(`Tensor dy must have dtype float32, got ${n.dtype}`);if("float32"!==o.dtype)throw Error(`Tensor filter must have dtype float32, got ${o.dtype}`);let u=ek.backend_util.computeConv3DInfo(n.shape,l,a,1,s),c=r.makeOutput(u.filterShape,o.dtype);return v(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(c.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),c}},tu={kernelName:ek.ik2,backendName:"wasm",setupFunc:function(e){b=e.wasm.cwrap(ek.ik2,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,filter:o}=t,{pad:a,strides:s,inputShape:l}=i;if("float32"!==n.dtype)throw Error(`Tensor dy must have dtype float32, got ${n.dtype}`);if("float32"!==o.dtype)throw Error(`Tensor filter must have dtype float32, got ${o.dtype}`);let u=ek.backend_util.computeConv3DInfo(l,o.shape,s,1,a),c=r.makeOutput(u.inShape,n.dtype);return b(r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(c.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),c}},tc=createUnaryKernelConfig(ek.mc4),td=createUnaryKernelConfig(ek.TR1);(eR=eI||(eI={}))[eR.bilinear=0]="bilinear",eR[eR.nearest=1]="nearest";let tp={kernelName:ek.VcC,backendName:"wasm",setupFunc:function(e){S=e.wasm.cwrap(ek.VcC,null,["number","number","number","number","array","number","number","number","number","number"])},kernelFunc:function(e){let t;let{backend:r,inputs:i,attrs:n}=e,{method:o,extrapolationValue:a,cropSize:s}=n,{image:l,boxes:u,boxInd:c}=i,d=u.shape[0],[p,h]=s,f=[d,p,h,l.shape[3]],y=r.dataIdMap.get(l.dataId);"float32"!==l.dtype&&(t=cast({backend:r,inputs:{x:l},attrs:{dtype:"float32"}}),y=r.dataIdMap.get(t.dataId));let g=y.id,m=r.dataIdMap.get(u.dataId).id,v=r.dataIdMap.get(c.dataId).id,b=r.makeOutput(f,"float32"),P=r.dataIdMap.get(b.dataId).id,C=new Uint8Array(new Int32Array(l.shape).buffer);return S(g,m,v,d,C,p,h,eI[o],a,P),null!=t&&r.disposeData(t.dataId),b}},th={kernelName:ek.Byc,backendName:"wasm",setupFunc:function(e){P=e.wasm.cwrap(ek.Byc,null,["number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{axis:o,exclusive:a,reverse:s}=i,l=n.shape.length;ek.D5U.assert("float32"===n.dtype||"int32"===n.dtype,()=>`cumprod does not support ${n.dtype} tensors in the WASM backend`);let u=ek.backend_util.getAxesPermutation([o],l),c=n;null!==u&&(c=transpose({inputs:{x:n},attrs:{perm:u},backend:r}));let d=ek.backend_util.getInnerMostAxes(1,l)[0];ek.backend_util.assertAxesAreInnerMostDims("cumprod",[d],l);let p=r.makeOutput(c.shape,c.dtype),h=c.shape[d],f=r.dataIdMap.get(c.dataId).id,y=r.dataIdMap.get(p.dataId).id;P(f,a?1:0,s?1:0,h,y,eD[n.dtype]);let g=p;if(null!==u){let e=ek.backend_util.getUndoAxesPermutation(u);g=transpose({inputs:{x:p},attrs:{perm:e},backend:r}),r.disposeData(c.dataId),r.disposeData(p.dataId)}return g}},tf={kernelName:ek.iHb,backendName:"wasm",setupFunc:function(e){C=e.wasm.cwrap(ek.iHb,null,["number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{axis:o,exclusive:a,reverse:s}=i,l=n.shape.length;ek.D5U.assert("float32"===n.dtype||"int32"===n.dtype,()=>`cumsum does not support ${n.dtype} tensors in the WASM backend`);let u=ek.backend_util.getAxesPermutation([o],l),c=n;null!==u&&(c=transpose({inputs:{x:n},attrs:{perm:u},backend:r}));let d=ek.backend_util.getInnerMostAxes(1,l)[0];ek.backend_util.assertAxesAreInnerMostDims("cumsum",[d],l);let p=r.makeOutput(c.shape,c.dtype),h=c.shape[d],f=r.dataIdMap.get(c.dataId).id,y=r.dataIdMap.get(p.dataId).id;C(f,a?1:0,s?1:0,h,y,eD[n.dtype]);let g=p;if(null!==u){let e=ek.backend_util.getUndoAxesPermutation(u);g=transpose({inputs:{x:p},attrs:{perm:e},backend:r}),r.disposeData(c.dataId),r.disposeData(p.dataId)}return g}},ty={kernelName:ek.QRR,backendName:"wasm",setupFunc:function(e){x=e.wasm.cwrap("DenseBincount",null,["number","array","number","number","boolean","number","number","boolean","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{x:n,weights:o}=r,{size:a,binaryOutput:s}=i,l=0!==o.shape.reduce((e,t)=>e*t,1),u=1===n.shape.length?[a]:[n.shape[0],a],c=t.makeOutput(u,o.dtype);function tensorId(e){return t.dataIdMap.get(e.dataId).id}return x(tensorId(n),new Uint8Array(new Int32Array(n.shape).buffer),n.shape.length,a,l,tensorId(o),eD[o.dtype],s,tensorId(c)),c}},tg={kernelName:ek.T0n,backendName:"wasm",setupFunc:function(e){A=e.wasm.cwrap(ek.T0n,null,["number","number","number","array","number","array","array","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{x:n}=r,{blockSize:o,dataFormat:a}=i,s=n.shape[0],l="NHWC"===a?n.shape[1]:n.shape[2],u="NHWC"===a?n.shape[2]:n.shape[3],c="NHWC"===a?n.shape[3]:n.shape[1],d=l*o,p=u*o,h=c/(o*o),f="NHWC"===a?[s,d,p,h]:[s,h,d,p],y=t.makeOutput(f,"float32"),g=t.dataIdMap.get(n.dataId),m=g.id,v=new Uint8Array(new Int32Array(ek.D5U.computeStrides(n.shape)).buffer),b=new Uint8Array(new Int32Array(f).buffer),S=new Uint8Array(new Int32Array(ek.D5U.computeStrides(f)).buffer),P=t.dataIdMap.get(y.dataId).id;return A(m,o,"NHWC"===a?1:0,v,n.shape.length-1,b,S,f.length,P),y}},tm={kernelName:ek.cie,backendName:"wasm",setupFunc:function(e){_=e.wasm.cwrap(ek.cie,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,attrs:r,backend:i}=e,{x:n,filter:o}=t,a=i.dataIdMap.get(n.dataId).id,s=i.dataIdMap.get(o.dataId).id,{strides:l,dilations:u,pad:c,dimRoundingMode:d}=r,p=ek.backend_util.computeConv2DInfo(n.shape,o.shape,l,null==u?[1,1]:u,c,d,!0),h=p.filterHeight,f=p.filterWidth,y=p.padInfo.top,g=p.padInfo.right,m=p.padInfo.bottom,v=p.padInfo.left,b=p.dilationHeight,S=p.dilationWidth,P=p.strideHeight,C=p.strideWidth,x=p.inChannels,A=p.outChannels,T="SAME"===p.padInfo.type?1:0;if("channelsLast"!==p.dataFormat)throw Error(`wasm backend DepthwiseConv2dNative does not support dataFormat:'${p.dataFormat}'. Please use 'channelsLast'.`);let w=i.makeOutput(p.outShape,"float32"),R=i.dataIdMap.get(w.dataId).id;return _(a,n.shape[0],n.shape[1],n.shape[2],s,h,f,y,g,m,v,T,b,S,P,C,x,A,R),w}},tv={kernelName:ek.$w,backendName:"wasm",setupFunc:function(e){T=e.wasm.cwrap("Diag",null,["number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:i}=t,n=ek.D5U.sizeFromShape(i.shape),o=r.makeOutput([...i.shape,...i.shape],i.dtype);return T(r.dataIdMap.get(i.dataId).id,eD[i.dtype],n,r.dataIdMap.get(o.dataId).id),o}},tb={kernelName:ek.p4S,backendName:"wasm",setupFunc:function(e){w=e.wasm.cwrap(ek.p4S,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,filter:o}=t,{strides:a,pad:s,dilations:l}=i;if(n.dtype!==o.dtype)throw Error(`Dilation2D error: x must have the same dtype as filter. Got ${n.dtype} and ${o.dtype}`);let u=ek.backend_util.computeDilation2DInfo(n.shape,o.shape,a,s,"NHWC",l),c=r.makeOutput(u.outShape,n.dtype);return w(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(c.dataId).id,eD[n.dtype],u.batchSize,u.inChannels,u.inHeight,u.inWidth,u.outHeight,u.outWidth,u.strideHeight,u.strideWidth,u.dilationHeight,u.dilationWidth,u.filterHeight,u.filterWidth,u.padInfo.top,u.padInfo.left),c}},tS={kernelName:ek.Vn9,backendName:"wasm",setupFunc:function(e){R=e.wasm.cwrap(ek.Vn9,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,filter:o,dy:a}=t,{strides:s,pad:l,dilations:u}=i;if(n.dtype!==o.dtype||n.dtype!==a.dtype)throw Error(`Dilation2DBackpropFilter error: x must have the same dtype as filter and dy. Got ${n.dtype}, ${o.dtype}, and ${a.dtype}`);let c=ek.backend_util.computeDilation2DInfo(n.shape,o.shape,s,l,"NHWC",u),d=r.makeOutput(o.shape,o.dtype);return R(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(d.dataId).id,eD[n.dtype],c.batchSize,c.inChannels,c.inHeight,c.inWidth,c.outHeight,c.outWidth,c.strideHeight,c.strideWidth,c.dilationHeight,c.dilationWidth,c.filterHeight,c.filterWidth,c.padInfo.top,c.padInfo.left),d}},tP={kernelName:ek.ekb,backendName:"wasm",setupFunc:function(e){E=e.wasm.cwrap(ek.ekb,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,filter:o,dy:a}=t,{strides:s,pad:l,dilations:u}=i;if(n.dtype!==o.dtype||n.dtype!==a.dtype)throw Error(`Dilation2DBackpropInput error: x must have the same dtype as filter and dy. Got ${n.dtype}, ${o.dtype}, and ${a.dtype}`);let c=ek.backend_util.computeDilation2DInfo(n.shape,o.shape,s,l,"NHWC",u),d=r.makeOutput(n.shape,n.dtype);return E(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(d.dataId).id,eD[n.dtype],c.batchSize,c.inChannels,c.inHeight,c.inWidth,c.outHeight,c.outWidth,c.strideHeight,c.strideWidth,c.dilationHeight,c.dilationWidth,c.filterHeight,c.filterWidth,c.padInfo.top,c.padInfo.left),d}},tC=createUnaryKernelConfig(ek.SX0),tx={kernelName:ek.HEU,backendName:"wasm",setupFunc:function(e){D=e.wasm.cwrap(ek.HEU,null,["number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r}=e,{dy:i,y:n}=t,o=r.makeOutput(n.shape,"float32"),tensorId=e=>r.dataIdMap.get(e.dataId).id;return D(tensorId(n),tensorId(i),tensorId(o)),o}},tA=createBinaryKernelConfig(ek.hdR,!1,"bool"),t_=createUnaryKernelConfig(ek.Omj),tT=createUnaryKernelConfig(ek.NEP,"float32");/**
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
 */function expandDims(e){let{inputs:t,attrs:r,backend:i}=e,{input:n}=t,{dim:o}=r,a=n.shape.length,s=n.shape.slice(),l=o;return o<0&&(ek.D5U.assert(-(a+1)<=o,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),l=a+o+1),s.splice(l,0,1),reshape({inputs:{x:n},backend:i,attrs:{shape:s}})}let tw={kernelName:ek.YFo,backendName:"wasm",kernelFunc:expandDims},tR=createUnaryKernelConfig(ek.Y0y,"float32");/**
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
 */function fill(e){let{attrs:{shape:t,value:r},backend:i}=e,{attrs:{dtype:n}}=e;n=n||ek.D5U.inferDtype(r);let o=i.makeOutput(t,n),a=i.typedArrayFromHeap(o);return a.fill(r),o}let tE={kernelName:ek.deh,backendName:"wasm",kernelFunc:fill},tD={kernelName:ek.Uyb,backendName:"wasm",kernelFunc:function(e){let{inputs:t,backend:r}=e,{image:i}=t,n=r.makeOutput(i.shape,i.dtype),o=r.dataIdMap.get(i.dataId).id,a=r.dataIdMap.get(n.dataId).id,[s,l,u,c]=i.shape;return O(o,s,l,u,c,a),n},setupFunc:function(e){O=e.wasm.cwrap(ek.Uyb,null,["number","number","number","number","number","number"])}},tO=createUnaryKernelConfig(ek.OR),tI=createBinaryKernelConfig(ek.jeX,!1),tM={kernelName:ek.sHE,backendName:"wasm",setupFunc:function(e){I=e.wasm.cwrap(ek.sHE,null,["number","number","number","number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{varianceEpsilon:n}=i,{x:o,mean:a,variance:s,offset:l,scale:u}=r,c=t.dataIdMap.get(o.dataId).id,d=t.dataIdMap.get(a.dataId).id,p=t.dataIdMap.get(s.dataId).id,h=null!=l?t.dataIdMap.get(l.dataId).id:0,f=null!=u?t.dataIdMap.get(u.dataId).id:0,y=t.makeOutput(o.shape,o.dtype);if(0===ek.D5U.sizeFromShape(o.shape))return y;let g=t.dataIdMap.get(y.dataId).id;return I(c,d,p,h,f,n,g),y}},tk={kernelName:ek._V0,backendName:"wasm",setupFunc:function(e){M=e.wasm.cwrap(ek._V0,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,attrs:r,backend:i}=e,{x:n,filter:o,bias:a,preluActivationWeights:s}=t,{strides:l,pad:u,dilations:c,dataFormat:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r,y=ek.backend_util.computeConv2DInfo(n.shape,o.shape,l,c,u,p),g=eO[h];if(null==g)throw Error(`${h} activation not yet supported for FusedConv2D in the wasm backend.`);let m=i.dataIdMap.get(n.dataId).id,v=i.dataIdMap.get(o.dataId).id,b=y.outChannels,S=0;if(null!=a){let e=i.dataIdMap.get(a.dataId);if(1!==e.shape.length)throw Error(`FusedConv2D only supports rank-1 bias but got rank ${e.shape.length}.`);if(e.shape[0]!==b)throw Error(`FusedConv2D bias shape (${e.shape}) does not match the number of output channels (${b})`);S=e.id}let P=y.filterHeight,C=y.filterWidth,x=y.padInfo.top,A=y.padInfo.right,_=y.padInfo.bottom,T=y.padInfo.left,w=y.dilationHeight,R=y.dilationWidth,E=y.strideHeight,D=y.strideWidth,O=y.inChannels,I="SAME"===y.padInfo.type?1:0,k=y.batchSize,L=y.inHeight,N=y.inWidth;if("NHWC"!==d)throw Error(`wasm backend FusedConv2D does not support dataFormat:'${d}'. Please use 'NHWC'.`);let B=i.makeOutput(y.outShape,"float32"),F=i.dataIdMap.get(B.dataId).id,V=null==s?0:i.dataIdMap.get(s.dataId).id;return M(m,k,L,N,v,P,C,S,x,A,_,T,I,w,R,E,D,O,b,g,V,f||0,F),B}},tL={kernelName:ek.luS,backendName:"wasm",setupFunc:function(e){k=e.wasm.cwrap(ek.luS,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,attrs:r,backend:i}=e,{x:n,filter:o,bias:a,preluActivationWeights:s}=t,{strides:l,pad:u,dilations:c,dataFormat:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r,y=ek.backend_util.computeConv2DInfo(n.shape,o.shape,l,c,u,p,!0),g=eO[h];if(null==g)throw Error(`${h} activation not yet supported for FusedDepthwiseConv2D in the wasm backend.`);let m=i.dataIdMap.get(n.dataId).id,v=i.dataIdMap.get(o.dataId).id,b=y.outChannels,S=0;if(null!=a){let e=i.dataIdMap.get(a.dataId);if(1!==e.shape.length)throw Error(`FusedDepthwiseConv2D only supports rank-1 bias but got rank ${e.shape.length}.`);if(e.shape[0]!==b)throw Error(`FusedDepthwiseConv2D bias shape (${e.shape}) does not match the number of output channels (${b})`);S=e.id}let P=y.filterHeight,C=y.filterWidth,x=y.padInfo.top,A=y.padInfo.right,_=y.padInfo.bottom,T=y.padInfo.left,w=y.dilationHeight,R=y.dilationWidth,E=y.strideHeight,D=y.strideWidth,O=y.inChannels,I="SAME"===y.padInfo.type?1:0,M=y.batchSize,L=y.inHeight,N=y.inWidth;if("NHWC"!==d)throw Error(`wasm backend FusedDepthwiseConv2D does not support dataFormat:'${d}'. Please use 'NHWC'.`);let B=i.makeOutput(y.outShape,"float32"),F=i.dataIdMap.get(B.dataId).id,V=null==s?0:i.dataIdMap.get(s.dataId).id;return k(m,M,L,N,v,P,C,S,x,A,_,T,I,w,R,E,D,O,b,g,V,f||0,F),B}},tN={kernelName:ek.q1x,backendName:"wasm",setupFunc:function(e){L=e.wasm.cwrap(ek.q1x,null,["number","number","number","number","number","number","array","number"])},kernelFunc:function(e){let{backend:t,inputs:r}=e,{params:i,indices:n}=r,[o,a,s,l]=ek.DaI.prepareAndValidate(i,n),u=t.makeOutput(o,i.dtype);if(0===a)return u;let c=n.shape,d=c[c.length-1],p=t.dataIdMap.get(i.dataId),h=p.id,f=t.dataIdMap.get(n.dataId),y=f.id,g=new Uint8Array(new Int32Array(l).buffer),m=t.dataIdMap.get(u.dataId).id;return L(h,eD[i.dtype],y,a,d,s,g,m),u}},tB={kernelName:ek.qi_,backendName:"wasm",setupFunc:function(e){N=e.wasm.cwrap("Gather",null,["number","number","array","number","number","number","array","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{x:n,indices:o}=r,{axis:a,batchDims:s}=i,l=ek.D5U.parseAxisParam(a,n.shape)[0],u=t.readSync(o.dataId),c=n.shape[l];for(let e=0;e<u.length;++e){let t=u[e];ek.D5U.assert(t<=c-1&&t>=0,()=>`GatherV2: the index value ${t} is not in [0, ${c-1}]`)}let d=ek.backend_util.segment_util.collectGatherOpShapeInfo(n,o,l,s),p=reshape({inputs:{x:n},attrs:{shape:[d.batchSize,d.outerSize,d.dimSize,d.sliceSize]},backend:t}),h=ek.D5U.sizeFromShape(o.shape),f=reshape({inputs:{x:o},attrs:{shape:[d.batchSize,h/d.batchSize]},backend:t}),y=[d.batchSize,d.outerSize,h/d.batchSize,d.sliceSize],g=t.makeOutput(y,n.dtype);if(0===ek.D5U.sizeFromShape(n.shape))return g;let m=p.shape.length-1,v=t.dataIdMap.get(p.dataId),b=v.id,S=t.dataIdMap.get(f.dataId),P=S.id,C=t.dataIdMap.get(g.dataId).id,x=new Uint8Array(new Int32Array(ek.D5U.computeStrides(p.shape)).buffer),A=new Uint8Array(new Int32Array(ek.D5U.computeStrides(y)).buffer);return N(b,eD[n.dtype],x,m,P,d.batchSize,A,C),t.disposeData(p.dataId),t.disposeData(f.dataId),g.shape=d.outputShape,g}},tF=createBinaryKernelConfig(ek.iZT,!1,"bool"),tV=createBinaryKernelConfig(ek.Acj,!1,"bool"),tj=createUnaryKernelConfig(ek.avt,"bool"),tH=createUnaryKernelConfig(ek.iWB,"bool"),tz=createUnaryKernelConfig(ek.r7n,"bool"),tU={kernelName:ek.J$2,backendName:"wasm",setupFunc:function(e){B=e.wasm.cwrap(ek.J$2,null,["number","number","number","number"])},kernelFunc:function(e){let{inputs:{x:t},attrs:{alpha:r},backend:i}=e,n=i.dataIdMap.get(t.dataId).id,o=i.makeOutput(t.shape,"float32");if(0!==ek.D5U.sizeFromShape(t.shape)){let e=i.dataIdMap.get(o.dataId).id;B(n,eD[t.dtype],r,e)}return o}},tG=createBinaryKernelConfig(ek.vtC,!1,"bool"),tW=createBinaryKernelConfig(ek.CAk,!1,"bool"),tX={kernelName:ek.e7N,backendName:"wasm",setupFunc:function(e){F=e.wasm.cwrap(ek.e7N,null,["number","number","number","number"])},kernelFunc:function(e){let{attrs:t,backend:r}=e,{start:i,stop:n,num:o}=t,a=Math.floor(o),s=r.makeOutput([a],"float32");return F(r.dataIdMap.get(s.dataId).id,i,n,a),s}},tY=createUnaryKernelConfig(ek.ZbH),t$=createUnaryKernelConfig(ek.kU),tK=createBinaryKernelConfig(ek.PYm,!1,"bool"),tq=createUnaryKernelConfig(ek.VfG),tZ=createBinaryKernelConfig(ek.MZg,!1,"bool"),tJ=createBinaryKernelConfig(ek.w6g,!1,"bool"),tQ={kernelName:ek.eZ0,backendName:"wasm",setupFunc:function(e){V=e.wasm.cwrap(ek.eZ0,null,["number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{depthRadius:o,bias:a,alpha:s,beta:l}=i;if("float32"!==n.dtype)throw Error("LRN error: x must have dtype float32");let u=r.makeOutput(n.shape,n.dtype);return V(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(u.dataId).id,n.shape[3],o,a,s,l),u}},t0={kernelName:ek.Hhh,backendName:"wasm",setupFunc:function(e){j=e.wasm.cwrap(ek.Hhh,null,["number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,y:o,dy:a}=t,{depthRadius:s,bias:l,alpha:u,beta:c}=i;if("float32"!==n.dtype||"float32"!==o.dtype||"float32"!==a.dtype)throw Error("LRNGrad error: x, y, and dy must have dtype float32");let d=r.makeOutput(n.shape,n.dtype);return j(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(a.dataId).id,r.dataIdMap.get(d.dataId).id,a.shape[3],s,l,u,c),d}},t1={kernelName:ek.YoZ,backendName:"wasm",setupFunc:function(e){H=e.wasm.cwrap(ek.YoZ,null,["number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{reductionIndices:n,keepDims:o}=i,{x:a}=r,s=t.dataIdMap.get(a.dataId).id,l=s,u=a,{transposed:c,axes:d,originalAxes:p,inputWasTransposed:h}=permuteAxesAndTranspose(a,n,t);if(h){let e=t.dataIdMap.get(c.dataId).id;u=c,l=e}let f=u.shape.length;ek.backend_util.assertAxesAreInnerMostDims("max",d,f);let[y,g]=ek.backend_util.computeOutAndReduceShapes(u.shape,d),m=ek.D5U.sizeFromShape(g),v=t.makeOutput(y,a.dtype);if(0!==ek.D5U.sizeFromShape(u.shape)){let e=t.dataIdMap.get(v.dataId).id;H(l,eD[a.dtype],m,e)}if(h&&t.disposeData(c.dataId),o){let e=ek.backend_util.expandShapeToKeepDim(v.shape,p);v.shape=e}return v}},t2=createBinaryKernelConfig(ek.BMI,!1),t3={kernelName:ek.mTV,backendName:"wasm",setupFunc:function(e){z=e.wasm.cwrap(ek.mTV,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,attrs:r,backend:i}=e,n=t.x,o=i.dataIdMap.get(n.dataId).id;ek.D5U.assert("float32"===n.dtype,()=>`Error in MaxPool: only float32 input is supported. Got ${n.dtype}.`);let{filterSize:a,strides:s,pad:l,dimRoundingMode:u}=r,c=ek.backend_util.computePool2DInfo(n.shape,a,s,1,l,u),d=c.filterHeight,p=c.filterWidth,h=c.padInfo.top,f=c.padInfo.right,y=c.padInfo.bottom,g=c.padInfo.left,m=c.dilationHeight,v=c.dilationWidth,b=c.strideHeight,S=c.strideWidth,P=c.inChannels,C=c.outChannels;if("channelsLast"!==c.dataFormat)throw Error(`wasm backend does not support dataFormat:'${c.dataFormat}'. Please use 'channelsLast'.`);let x=i.makeOutput(c.outShape,"float32"),A=i.dataIdMap.get(x.dataId).id;return z(o,n.shape[0],n.shape[1],n.shape[2],d,p,h,f,y,g,m,v,b,S,P,C,A),x}},t5={kernelName:ek.OAf,backendName:"wasm",setupFunc:function(e){U=e.wasm.cwrap("MaxPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{filterSize:o,strides:a,pad:s,dimRoundingMode:l,dataFormat:u}=i,c=ek.backend_util.computePool3DInfo(n.shape,o,a,1,s,l,u),d=r.makeOutput(c.outShape,n.dtype);return U(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(d.dataId).id,c.batchSize,c.inChannels,c.inDepth,c.inHeight,c.inWidth,c.outDepth,c.outHeight,c.outWidth,c.strideDepth,c.strideHeight,c.strideWidth,c.dilationDepth,c.dilationHeight,c.dilationWidth,c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth,c.padInfo.front,c.padInfo.top,c.padInfo.left),d}},t4={kernelName:ek.OU7,backendName:"wasm",setupFunc:function(e){G=e.wasm.cwrap("MaxPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o}=t,{filterSize:a,strides:s,pad:l,dimRoundingMode:u}=i,c=ek.backend_util.computePool3DInfo(o.shape,a,s,1,l,u),d=r.makeOutput(o.shape,o.dtype);return G(r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(d.dataId).id,c.batchSize,c.inChannels,c.inDepth,c.inHeight,c.inWidth,c.outDepth,c.outHeight,c.outWidth,c.strideDepth,c.strideHeight,c.strideWidth,c.dilationDepth,c.dilationHeight,c.dilationWidth,c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth,c.padInfo.front,c.padInfo.top,c.padInfo.left),d}},t6={kernelName:ek.OV7,backendName:"wasm",setupFunc:function(e){W=e.wasm.cwrap("MaxPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o}=t,{filterSize:a,strides:s,pad:l,dimRoundingMode:u}=i,c=ek.backend_util.computePool2DInfo(o.shape,a,s,1,l,u),d=r.makeOutput(o.shape,o.dtype);return W(r.dataIdMap.get(o.dataId).id,r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(d.dataId).id,c.batchSize,c.inChannels,c.inHeight,c.inWidth,c.outHeight,c.outWidth,c.strideHeight,c.strideWidth,c.dilationHeight,c.dilationWidth,c.effectiveFilterHeight,c.effectiveFilterWidth,c.padInfo.top,c.padInfo.left),d}},t8={kernelName:ek.vFR,backendName:"wasm",setupFunc:function(e){X=e.wasm.cwrap("MaxPoolWithArgmax",null,["number","number","number","number","boolean","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{filterSize:o,strides:a,pad:s,includeBatchInIndex:l}=i;ek.D5U.assert(4===n.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${n.shape.length}.`);let u=[1,1];ek.D5U.assert(ek.backend_util.eitherStridesOrDilationsAreOne(a,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${u}'`);let c=ek.backend_util.computePool2DInfo(n.shape,o,a,[1,1],s),d=r.makeOutput(c.outShape,n.dtype),p=r.makeOutput(c.outShape,"int32");return X(r.dataIdMap.get(n.dataId).id,r.dataIdMap.get(d.dataId).id,r.dataIdMap.get(p.dataId).id,eD[n.dtype],l,c.batchSize,c.inChannels,c.inHeight,c.inWidth,c.outHeight,c.outWidth,c.strideHeight,c.strideWidth,c.dilationHeight,c.dilationWidth,c.effectiveFilterHeight,c.effectiveFilterWidth,c.padInfo.top,c.padInfo.left),[d,p]}},t9={kernelName:ek.q2K,backendName:"wasm",setupFunc:function(e){Y=e.wasm.cwrap(ek.q2K,null,["number, number, number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{axis:n,keepDims:o}=i,{x:a}=r,s=t.dataIdMap.get(a.dataId).id,l=s,u=a,{transposed:c,axes:d,originalAxes:p,inputWasTransposed:h}=permuteAxesAndTranspose(a,n,t),f=d;if(h){let e=t.dataIdMap.get(c.dataId).id;e!==s&&(u=c,l=e,f=ek.backend_util.getInnerMostAxes(f.length,u.shape.length))}ek.backend_util.assertAxesAreInnerMostDims("mean",f,u.shape.length);let[y,g]=ek.backend_util.computeOutAndReduceShapes(u.shape,f),m=ek.D5U.sizeFromShape(g),v=u;"float32"!==u.dtype&&(v=cast({backend:t,inputs:{x:u},attrs:{dtype:"float32"}}),l=t.dataIdMap.get(v.dataId).id);let b=t.makeOutput(y,"float32");if(0!==ek.D5U.sizeFromShape(u.shape)){let e=t.dataIdMap.get(b.dataId).id;Y(l,m,e)}if(h&&t.disposeData(c.dataId),o){let e=ek.backend_util.expandShapeToKeepDim(b.shape,p);b.shape=e}return"float32"!==u.dtype&&t.disposeData(v.dataId),b}},t7={kernelName:ek.c17,backendName:"wasm",setupFunc:function(e){$=e.wasm.cwrap(ek.c17,null,["number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{axis:n,keepDims:o}=i,{x:a}=r,s=t.dataIdMap.get(a.dataId).id,l=s,u=a,{transposed:c,axes:d,originalAxes:p,inputWasTransposed:h}=permuteAxesAndTranspose(a,n,t);if(h){let e=t.dataIdMap.get(c.dataId).id;e!==s&&(u=c,l=e)}let f=u.shape.length;ek.backend_util.assertAxesAreInnerMostDims("min",d,f);let[y,g]=ek.backend_util.computeOutAndReduceShapes(u.shape,d),m=ek.D5U.sizeFromShape(g),v=t.makeOutput(y,u.dtype);if(0!==ek.D5U.sizeFromShape(u.shape)){let e=t.dataIdMap.get(v.dataId).id;$(l,eD[a.dtype],m,e)}if(h&&t.disposeData(c.dataId),o){let e=ek.backend_util.expandShapeToKeepDim(v.shape,p);v.shape=e}return v}},re=createBinaryKernelConfig(ek.q8u,!1);(eE=eM||(eM={}))[eE.reflect=0]="reflect",eE[eE.symmetric=1]="symmetric";let rt={kernelName:ek.jQs,backendName:"wasm",kernelFunc:function(e){let{inputs:{x:t},backend:r,attrs:{paddings:i,mode:n}}=e,o=i.map((e,r)=>e[0]+t.shape[r]+e[1]),a=r.dataIdMap.get(t.dataId).id,s=r.makeOutput(o,t.dtype),l=r.dataIdMap.get(s.dataId).id,u=new Uint8Array(new Int32Array(t.shape).buffer),c=i.map(e=>e[0]),d=i.map(e=>e[1]),p=new Uint8Array(new Int32Array(c).buffer),h=new Uint8Array(new Int32Array(d).buffer);return K(a,u,t.shape.length,eD[t.dtype],p,h,eM[n],l),s},setupFunc:function(e){K=e.wasm.cwrap(ek.jQs,null,["number","array","number","number","array","array","number","number"])}};function softmax(e){let{backend:t,inputs:{logits:r},attrs:{dim:i}}=e,n=t.dataIdMap.get(r.dataId).id,o=t.makeOutput(r.shape,r.dtype),a=t.dataIdMap.get(o.dataId).id,s=r.shape[i],l=ek.D5U.sizeFromShape(r.shape)/s;return 0===ek.D5U.sizeFromShape(o.shape)||q(n,a,s,l),o}let rr={kernelName:ek.Gcp,backendName:"wasm",setupFunc:function(e){q=e.wasm.cwrap(ek.Gcp,null,["number","number","number","number"])},kernelFunc:softmax},ri={kernelName:ek.NZg,backendName:"wasm",setupFunc:function(e){Z=e.wasm.cwrap(ek.NZg,null,["number","number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{logits:n}=t,{numSamples:o,seed:a,normalized:s}=i;if("float32"!==n.dtype)throw Error(`Tensor logits must have dtype float32, got ${n.dtype}`);let l=s?n:softmax({inputs:{logits:n},backend:r,attrs:{dim:n.shape.length-1}}),[u,c]=l.shape,d=r.makeOutput([u,o],"int32");return Z(r.dataIdMap.get(l.dataId).id,u,c,o,a,r.dataIdMap.get(d.dataId).id),s||r.disposeData(l.dataId),d}},rn=createBinaryKernelConfig(ek.Vbg,!0),ro=createBinaryKernelConfig(ek.wYn,!0),ra=createUnaryKernelConfig(ek.kuV);/**
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
 */function parseResultStruct(e,t){let r=new Int32Array(e.wasm.HEAPU8.buffer,t,4),i=r[0],n=r[1],o=r[2],a=r[3];return e.wasm._free(t),{pSelectedIndices:i,selectedSize:n,pSelectedScores:o,pValidOutputs:a}}let rs={kernelName:ek.uv1,backendName:"wasm",setupFunc:function(e){J=e.wasm.cwrap(ek.uv1,"number",["number","number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{iouThreshold:n,maxOutputSize:o,scoreThreshold:a}=i,{boxes:s,scores:l}=r,u=t.dataIdMap.get(s.dataId).id,c=t.dataIdMap.get(l.dataId).id,d=J(u,c,o,n,a),{pSelectedIndices:p,selectedSize:h,pSelectedScores:f,pValidOutputs:y}=parseResultStruct(t,d);t.wasm._free(f),t.wasm._free(y);let g=t.makeOutput([h],"int32",p);return g}},rl={kernelName:ek.cye,backendName:"wasm",setupFunc:function(e){Q=e.wasm.cwrap(ek.cye,"number",["number","number","number","number","number","bool"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{iouThreshold:n,maxOutputSize:o,scoreThreshold:a,padToMaxOutputSize:s}=i,{boxes:l,scores:u}=r,c=t.dataIdMap.get(l.dataId).id,d=t.dataIdMap.get(u.dataId).id,p=Q(c,d,o,n,a,s),{pSelectedIndices:h,selectedSize:f,pSelectedScores:y,pValidOutputs:g}=parseResultStruct(t,p);t.wasm._free(y);let m=t.makeOutput([f],"int32",h),v=t.makeOutput([],"int32",g);return[m,v]}},ru={kernelName:ek.W0H,backendName:"wasm",setupFunc:function(e){ee=e.wasm.cwrap(ek.W0H,"number",["number","number","number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{iouThreshold:n,maxOutputSize:o,scoreThreshold:a,softNmsSigma:s}=i,{boxes:l,scores:u}=r,c=t.dataIdMap.get(l.dataId).id,d=t.dataIdMap.get(u.dataId).id,p=ee(c,d,o,n,a,s),{pSelectedIndices:h,selectedSize:f,pSelectedScores:y,pValidOutputs:g}=parseResultStruct(t,p);t.wasm._free(g);let m=t.makeOutput([f],"int32",h),v=t.makeOutput([f],"float32",y);return[m,v]}},rc=createBinaryKernelConfig(ek.yQU,!1,"bool"),rd={kernelName:ek.we_,backendName:"wasm",setupFunc:function(e){et=e.wasm.cwrap(ek.we_,null,["number","number","number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{indices:n}=t,{dtype:o,depth:a,onValue:s,offValue:l}=i,u=r.makeOutput([...n.shape,a],o),c=r.dataIdMap.get(u.dataId).id,d=r.dataIdMap.get(n.dataId),p=d.id;return et(p,a,s,l,c),u}},rp={kernelName:ek.qWM,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:{x:t},backend:r}=e,i=r.makeOutput(t.shape,t.dtype),n=r.typedArrayFromHeap(i);return n.fill(1),i}},rh={kernelName:ek.QiL,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{axis:n}=i;if(1===t.length)return expandDims({inputs:{input:t[0]},backend:r,attrs:{dim:n}});let o=t[0].shape,a=t[0].dtype;t.forEach(e=>{ek.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),ek.D5U.assert(a===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let s=[],l=t.map(e=>{let t=expandDims({inputs:{input:e},backend:r,attrs:{dim:n}});return s.push(t),t}),u=concat({inputs:l,backend:r,attrs:{axis:n}});return s.forEach(e=>r.disposeData(e.dataId)),u}},rf={kernelName:ek.lyA,backendName:"wasm",kernelFunc:function(e){let{inputs:{x:t},backend:r,attrs:{paddings:i,constantValue:n}}=e,o=i.map((e,r)=>e[0]+t.shape[r]+e[1]);if(0===ek.D5U.sizeFromShape(t.shape))return fill({backend:r,attrs:{shape:o,value:n,dtype:t.dtype}});let a=r.dataIdMap.get(t.dataId).id,s=r.makeOutput(o,t.dtype),l=r.dataIdMap.get(s.dataId),u=l.id,c=new Uint8Array(new Int32Array(t.shape).buffer),d=i.map(e=>e[0]),p=i.map(e=>e[1]),h=new Uint8Array(new Int32Array(d).buffer),f=new Uint8Array(new Int32Array(p).buffer);return er(a,c,t.shape.length,eD[t.dtype],h,f,n,u),s},setupFunc:function(e){er=e.wasm.cwrap(ek.lyA,null,["number","array","number","number","array","array","number","number"])}},ry=createBinaryKernelConfig(ek.pe_,!1),rg={kernelName:ek.o0g,backendName:"wasm",setupFunc:function(e){ei=e.wasm.cwrap(ek.o0g,null,["number","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:i,alpha:n}=t,o=r.dataIdMap.get(i.dataId).id,a=r.dataIdMap.get(n.dataId).id,s=o,l=i;"float32"!==i.dtype&&(l=cast({backend:r,inputs:{x:i},attrs:{dtype:"float32"}}),s=r.dataIdMap.get(l.dataId).id);let u=r.makeOutput(i.shape,"float32"),c=r.dataIdMap.get(u.dataId).id;return ei(s,a,c),"float32"!==i.dtype&&r.disposeData(l.dataId),u}},rm={kernelName:ek.DlI,backendName:"wasm",setupFunc:function(e){en=e.wasm.cwrap(ek.DlI,null,["number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{axis:n,keepDims:o}=i,{x:a}=r,s=t.dataIdMap.get(a.dataId).id,l=s,u=a,{transposed:c,axes:d,originalAxes:p,inputWasTransposed:h}=permuteAxesAndTranspose(a,n,t),f=d;if(h){let e=t.dataIdMap.get(c.dataId).id;e!==s&&(u=c,l=e,f=ek.backend_util.getInnerMostAxes(f.length,u.shape.length))}ek.backend_util.assertAxesAreInnerMostDims("prod",f,u.shape.length);let[y,g]=ek.backend_util.computeOutAndReduceShapes(u.shape,f),m=ek.D5U.sizeFromShape(g),v=t.makeOutput(y,u.dtype);if(0!==ek.D5U.sizeFromShape(u.shape)){let e=t.dataIdMap.get(v.dataId).id;en(l,m,eD[v.dtype],e)}if(h&&t.disposeData(c.dataId),o){let e=ek.backend_util.expandShapeToKeepDim(v.shape,p);v.shape=e}return v}};var rv=r(42373);let rb={kernelName:ek.e6w,backendName:"wasm",kernelFunc:e=>{let{backend:t,attrs:r}=e,{start:i,stop:n,step:o,dtype:a}=r,s=(0,rv.b)(i,n,o,a),l=t.makeOutput([s.length],a),u=t.typedArrayFromHeap(l);return u.set(s),l}},rS=createBinaryKernelConfig(ek.oHH,!0),rP=createUnaryKernelConfig(ek.$HU),rC=createUnaryKernelConfig(ek.qkr),rx=createUnaryKernelConfig(ek.SbG),rA={kernelName:ek._Yw,backendName:"wasm",setupFunc:function(e){eo=e.wasm.cwrap(ek._Yw,null,["number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let t;let{backend:r,inputs:i,attrs:n}=e,{images:o}=i,{alignCorners:a,halfPixelCenters:s,size:l}=n,[u,c]=l,[d,p,h,f]=o.shape,y=[d,u,c,f],g=r.dataIdMap.get(o.dataId);"float32"!==g.dtype&&(t=cast({backend:r,inputs:{x:o},attrs:{dtype:"float32"}}),g=r.dataIdMap.get(t.dataId));let m=g.id,v=r.makeOutput(y,"float32");if(0===ek.D5U.sizeFromShape(o.shape))return v;let b=r.dataIdMap.get(v.dataId).id;return eo(m,d,p,h,f,u,c,a?1:0,s?1:0,b),null!=t&&r.disposeData(t.dataId),v}},r_={kernelName:ek.zbQ,backendName:"wasm",setupFunc:function(e){ea=e.wasm.cwrap(ek.zbQ,null,["number","number","number","array","array","boolean"])},kernelFunc:function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{images:o,dy:a}=r,{alignCorners:s}=n,l=i.makeOutput(o.shape,"float32"),u=i.dataIdMap.get(o.dataId);return"float32"!==u.dtype&&(t=cast({backend:i,inputs:{x:o},attrs:{dtype:"float32"}}),u=i.dataIdMap.get(t.dataId)),ea(i.dataIdMap.get(o.dataId).id,i.dataIdMap.get(a.dataId).id,i.dataIdMap.get(l.dataId).id,new Uint8Array(new Int32Array(o.shape).buffer),new Uint8Array(new Int32Array(a.shape).buffer),s),null!=t&&i.disposeData(t.dataId),l}},rT={kernelName:ek.dpD,backendName:"wasm",setupFunc:function(e){es=e.wasm.cwrap(ek.dpD,null,["number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let t;let{backend:r,inputs:i,attrs:n}=e,{images:o}=i,{alignCorners:a,halfPixelCenters:s,size:l}=n,[u,c]=l,[d,p,h,f]=o.shape,y=[d,u,c,f],g=r.makeOutput(y,"float32");if(0===ek.D5U.sizeFromShape(o.shape))return g;let m=r.dataIdMap.get(o.dataId);"float32"!==m.dtype&&(t=cast({backend:r,inputs:{x:o},attrs:{dtype:"float32"}}),m=r.dataIdMap.get(t.dataId));let v=m.id,b=r.dataIdMap.get(g.dataId).id;return es(v,d,p,h,f,u,c,a?1:0,s?1:0,b),null!=t&&r.disposeData(t.dataId),g}},rw={kernelName:ek.Hmb,backendName:"wasm",setupFunc:function(e){el=e.wasm.cwrap(ek.Hmb,null,["number","number","number","array","array","boolean"])},kernelFunc:function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{images:o,dy:a}=r,{alignCorners:s}=n,l=i.makeOutput(o.shape,"float32"),u=i.dataIdMap.get(o.dataId);return"float32"!==u.dtype&&(t=cast({backend:i,inputs:{x:o},attrs:{dtype:"float32"}}),u=i.dataIdMap.get(t.dataId)),el(i.dataIdMap.get(o.dataId).id,i.dataIdMap.get(a.dataId).id,i.dataIdMap.get(l.dataId).id,new Uint8Array(new Int32Array(o.shape).buffer),new Uint8Array(new Int32Array(a.shape).buffer),s),null!=t&&i.disposeData(t.dataId),l}},rR={kernelName:ek.mKl,backendName:"wasm",kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{dims:o}=i,a=ek.D5U.parseAxisParam(o,n.shape);if(0===n.shape.length)return identity({inputs:{x:n},backend:r});let s=r.makeOutput(n.shape,n.dtype),l=r.dataIdMap.get(n.dataId).id,u=r.dataIdMap.get(s.dataId).id,c=new Uint8Array(new Int32Array(a).buffer),d=new Uint8Array(new Int32Array(n.shape).buffer);eu(l,c,a.length,d,n.shape.length,u);let p=reshape({inputs:{x:s},attrs:{shape:n.shape},backend:r});return r.disposeData(s.dataId),p},setupFunc:function(e){eu=e.wasm.cwrap(ek.mKl,null,["number","array","number","array","number","number"])}},rE={kernelName:ek.b9H,backendName:"wasm",kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{image:n}=t,{radians:o,fillValue:a,center:s}=i,l=r.makeOutput(n.shape,n.dtype),u=r.dataIdMap.get(n.dataId).id,c=r.dataIdMap.get(l.dataId).id,[d,p,h,f]=n.shape,[y,g]=ek.backend_util.getImageCenter(s,p,h),m="number"==typeof a?[a,a,a,0===a?0:255]:[...a,255],v=new Uint8Array(new Int32Array(m).buffer);return ec(u,d,p,h,f,o,y,g,v,m.length,c),l},setupFunc:function(e){ec=e.wasm.cwrap(ek.b9H,null,["number","number","number","number","number","number","number","number","array","number","number"])}},rD=createUnaryKernelConfig(ek.e07),rO=createUnaryKernelConfig(ek.bV0),rI={kernelName:ek.xQA,backendName:"wasm",setupFunc:function(e){ed=e.wasm.cwrap(ek.xQA,null,["number","number","number","number","number","number","array","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{indices:n,updates:o}=r,{shape:a}=i,s=t.makeOutput(a,o.dtype);if(0===ek.D5U.sizeFromShape(a))return s;let{sliceRank:l,numUpdates:u,sliceSize:c,strides:d,outputSize:p}=ek.yV1.calculateShapes(o,n,a),h=t.dataIdMap.get(n.dataId),f=h.id,y=t.dataIdMap.get(o.dataId),g=y.id,m=new Uint8Array(new Int32Array(d).buffer),v=t.dataIdMap.get(s.dataId).id;return ed(f,g,eD[o.dtype],l,u,c,m,p,v),s}},rM={kernelName:ek.nr8,backendName:"wasm",setupFunc:function(e){ep=e.wasm.cwrap(ek.nr8,null,["number","number","number","number","number","number","bool","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{sortedSequence:n,values:o}=t,{side:a}=i;if(n.dtype!==o.dtype)throw Error(`SearchSorted error: sorted_sequence must have the same dtype as values. Got ${n.dtype} and ${o.dtype}`);let s=r.makeOutput(o.shape,"int32");function tensorId(e){return r.dataIdMap.get(e.dataId).id}return ep(tensorId(n),tensorId(o),n.shape[0],n.shape[1],o.shape[1],eD[n.dtype],"left"===a,tensorId(s)),s}},rk={kernelName:ek.PhF,backendName:"wasm",kernelFunc:function(e){let{inputs:t,backend:r}=e,{condition:i,t:n,e:o}=t,a=r.dataIdMap.get(i.dataId).id,s=r.dataIdMap.get(n.dataId).id,l=r.dataIdMap.get(o.dataId).id,u=r.makeOutput(n.shape,n.dtype),c=r.dataIdMap.get(u.dataId).id,d=i.shape.length,p=n.shape.length,h=0===d||d>1||1===p?1:ek.D5U.sizeFromShape(n.shape.slice(1));return eh(a,s,l,h,c),u},setupFunc:function(e){eh=e.wasm.cwrap("SelectV2",null,["number","number","number","number","number"])}},rL=createUnaryKernelConfig(ek.oFR),rN=createUnaryKernelConfig(ek.i5y),rB=createUnaryKernelConfig(ek.RQH),rF=createUnaryKernelConfig(ek.wYB),rV=createUnaryKernelConfig(ek.MRv),rj={kernelName:ek.TQc,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{blockShape:o,paddings:a}=i,s=ek.D5U.sizeFromShape(o),l=[[0,0]];l.push(...a);for(let e=1+o.length;e<n.shape.length;++e)l.push([0,0]);let u=rf.kernelFunc({inputs:{x:n},backend:r,attrs:{paddings:l,constantValue:0}}),c=ek.backend_util.getReshaped(u.shape,o,s,!1),d=ek.backend_util.getPermuted(c.length,o.length,!1),p=ek.backend_util.getReshapedPermuted(u.shape,o,s,!1),h=reshape({inputs:{x:u},backend:r,attrs:{shape:c}}),f=transpose({inputs:{x:h},backend:r,attrs:{perm:d}}),y=reshape({inputs:{x:f},backend:r,attrs:{shape:p}});return r.disposeData(u.dataId),r.disposeData(h.dataId),r.disposeData(f.dataId),y}},rH={kernelName:ek.O3z,backendName:"wasm",setupFunc:function(e){ey=e.wasm.cwrap("SparseFillEmptyRows","number",["number","number","number","number","number","number","number","number","number","number","number","number"])},kernelFunc:function(e){let t;let{backend:r,inputs:i}=e,{indices:n,values:o,denseShape:a,defaultValue:s}=i,l=n.shape[0],u=n.shape[1],c=r.readSync(a.dataId)[0],d=[l+c,u],p=r.dataIdMap.get(n.dataId).id,h=r.dataIdMap.get(o.dataId).id,f=r.dataIdMap.get(s.dataId).id,y=r.makeOutput(d,n.dtype),g=r.dataIdMap.get(y.dataId).id,m=r.makeOutput(d.slice(0,1),o.dtype),v=r.dataIdMap.get(m.dataId).id,b=r.makeOutput([c],"bool"),S=r.dataIdMap.get(b.dataId).id,P=r.makeOutput([l],n.dtype),C=r.dataIdMap.get(P.dataId).id,x=r.makeOutput([4],"int32"),A=r.dataIdMap.get(x.dataId).id,_=ey(p,h,eD[o.dtype],l,c,u,f,g,v,S,C,A),T=r.readSync(x.dataId);switch(T[0]){case 1:t=ek.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(T[1]);break;case 2:t=ek.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(T[1],T[2]);break;case 3:t=ek.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(T[1],T[2],T[3]);break;default:t=""}if(r.disposeData(x.dataId),t)throw r.disposeData(y.dataId),r.disposeData(m.dataId),r.disposeData(b.dataId),r.disposeData(P.dataId),Error(t);let w=y,R=m;return _!==d[0]&&(w=slice({inputs:{x:y},attrs:{begin:0,size:[_,u]},backend:r}),R=slice({inputs:{x:m},attrs:{begin:0,size:_},backend:r}),r.disposeData(y.dataId),r.disposeData(m.dataId)),[w,R,b,P]}},rz={kernelName:ek.nhH,backendName:"wasm",setupFunc:function(e){eg=e.wasm.cwrap(ek.nhH,null,["number","number","number","number","number","number","number"])},kernelFunc:function(e){let t;let{backend:r,inputs:i}=e,{inputIndices:n,inputShape:o,newShape:a}=i;if(2!==n.shape.length)throw Error(`Input indices should be a matrix but received shape
        ${n.shape}`);if(1!==o.shape.length)throw Error(`Input shape should be a vector but received shape
        ${o.shape}`);if(1!==a.shape.length)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let s=r.dataIdMap.get(n.dataId).id,l=r.dataIdMap.get(o.dataId).id,u=r.dataIdMap.get(a.dataId).id,c=n.shape[0],d=ek.D5U.sizeFromShape(a.shape),p=r.makeOutput([c,d],n.dtype),h=r.dataIdMap.get(p.dataId).id,f=r.makeOutput([d],a.dtype),y=r.dataIdMap.get(f.dataId).id,g=r.makeOutput([3],"int32"),m=r.dataIdMap.get(g.dataId).id;eg(s,l,u,c,h,y,m);let v=r.readSync(g.dataId);switch(v[0]){case 0:t=ek.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(v[1],v[2]);break;case 1:t=ek.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(v[1],v[2]);break;case 2:t=ek.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage();break;case 3:{let e=Array.from(r.readSync(o.dataId)),i=Array.from(r.readSync(f.dataId));t=ek.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(e,i);break}case 4:{let e=Array.from(r.readSync(o.dataId)),i=Array.from(r.readSync(f.dataId));t=ek.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(e,i);break}default:t=""}if(r.disposeData(g.dataId),t)throw r.disposeData(p.dataId),r.disposeData(f.dataId),Error(t);return[p,f]}};function SparseSegmentReduction_setup(e){em=e.wasm.cwrap("SparseSegmentReduction",null,["number","number","number","number","number","number","number","number","number"])}function sparseSegmentReduction(e,t){let r;let{backend:i,inputs:n}=e,{data:o,indices:a,segmentIds:s}=n,l=a.shape[0],u=i.readSync(s.dataId,l-1,l)[0],c=l>0?u+1:0;if(c<0)throw Error(ek.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let d=o.shape.slice();d[0]=c;let p=i.dataIdMap.get(o.dataId).id,h=i.dataIdMap.get(a.dataId).id,f=i.dataIdMap.get(s.dataId).id,y=i.makeOutput(d,o.dtype),g=i.dataIdMap.get(y.dataId).id,m=i.makeOutput([4],"int32"),v=i.dataIdMap.get(m.dataId).id;em(p,eD[o.dtype],o.shape[0],h,f,g,v,t,0);let b=i.readSync(m.dataId);switch(b[0]){case 0:r=ek.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage();break;case 1:r=ek.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage();break;case 2:r=ek.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(b[1],b[2]);break;case 3:r=ek.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(b[1],b[2],b[3]);break;default:r=""}if(i.disposeData(m.dataId),r)throw i.disposeData(y.dataId),Error(r);return y}let rU={kernelName:ek.w3H,backendName:"wasm",setupFunc:SparseSegmentReduction_setup,kernelFunc:/**
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
 */function(e){return sparseSegmentReduction(e,!0)}},rG={kernelName:ek.ZjV,backendName:"wasm",setupFunc:SparseSegmentReduction_setup,kernelFunc:/**
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
 */function(e){return sparseSegmentReduction(e,!1)}},rW={kernelName:ek.D2d,backendName:"wasm",setupFunc:function(e){ev=e.wasm.cwrap(ek.D2d,null,["number","number","number","number","number","number","number","number","array","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{sparseIndices:n,sparseValues:o,defaultValue:a}=r,{outputShape:s}=i,l=t.makeOutput(s,a.dtype);if(0===ek.D5U.sizeFromShape(s))return l;let{sliceRank:u,numUpdates:c,sliceSize:d,strides:p,outputSize:h}=ek.backend_util.calculateShapes(o,n,s),f=t.dataIdMap.get(n.dataId).id,y=t.dataIdMap.get(o.dataId).id,g=t.dataIdMap.get(a.dataId).id,m=new Uint8Array(new Int32Array(p).buffer),v=t.dataIdMap.get(l.dataId).id;return ev(f,y,o.shape.length,g,eD[a.dtype],u,c,d,m,h,v),l}},rX={kernelName:ek.L8s,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:t,attrs:r,backend:i}=e,{x:n}=t,{numOrSizeSplits:o,axis:a}=r,s=ek.D5U.parseAxisParam(a,n.shape)[0],l=ek.backend_util.prepareSplitSize(n,o,s),u=Array(n.shape.length).fill(0),c=n.shape.slice();return l.map(e=>{let t=[...c];t[s]=e;let r=slice({inputs:{x:n},attrs:{begin:u,size:t},backend:i});return u[s]+=e,r})}},rY=createUnaryKernelConfig(ek.FKq),r$=createUnaryKernelConfig(ek.bK0),rK=createBinaryKernelConfig(ek._tC,!0),rq={kernelName:ek.h8e,backendName:"wasm",setupFunc:function(e){eb=e.wasm.cwrap(ek.h8e,null,["number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{alpha:n}=i,{x:o}=r,a=t.dataIdMap.get(o.dataId).id,s=t.makeOutput(o.shape,o.dtype),l=t.dataIdMap.get(s.dataId).id;return eb(a,n,eD[o.dtype],l),s}},rZ={kernelName:ek.jQk,backendName:"wasm",setupFunc:function(e){eS=e.wasm.cwrap(ek.jQk,null,["number","array","number","array","array","array","array","array","number","number"])},kernelFunc:function(e){let t;let{backend:r,inputs:i,attrs:n}=e,{x:o}=i,{begin:a,end:s,strides:l,beginMask:u,endMask:c,ellipsisMask:d,newAxisMask:p,shrinkAxisMask:h}=n,{finalShapeSparse:f,finalShape:y,isIdentity:g,sliceDim0:m,isSimpleSlice:v,begin:b,end:S,strides:P}=ek.kuN.sliceInfo(o.shape,a,s,l,u,c,d,p,h);if(g)t=reshape({inputs:{x:o},backend:r,attrs:{shape:y}});else if(m||v){ek.D5U.assert(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);let e=ek.kuN.computeOutShape(b,S,P),i=slice({inputs:{x:o},backend:r,attrs:{begin:b,size:e}});t=reshape({inputs:{x:i},backend:r,attrs:{shape:y}}),r.disposeData(i.dataId)}else{let e=r.makeOutput(f,"float32"),i=r.dataIdMap.get(o.dataId).id,n=new Uint8Array(new Int32Array(ek.D5U.computeStrides(o.shape)).buffer),a=new Uint8Array(new Int32Array(b).buffer),s=new Uint8Array(new Int32Array(S).buffer),l=new Uint8Array(new Int32Array(P).buffer),u=new Uint8Array(new Int32Array(f).buffer),c=new Uint8Array(new Int32Array(ek.D5U.computeStrides(f)).buffer),d=r.dataIdMap.get(e.dataId).id;eS(i,n,o.shape.length,a,s,l,u,c,f.length,d),t=reshape({inputs:{x:e},backend:r,attrs:{shape:y}}),r.disposeData(e.dataId)}return t}};var rJ=r(27414);let rQ={kernelName:ek._JP,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{backend:t,inputs:r,attrs:i}=e,{data:n,dataSplits:o}=r,{separator:a,nGramWidths:s,leftPad:l,rightPad:u,padWidth:c,preserveShortSequences:d}=i,p=t.readSync(n.dataId),h=t.readSync(o.dataId),[f,y]=(0,rJ.A)(p,h,a,s,l,u,c,d),g=t.makeOutput([f.length],"string"),m=t.dataIdMap.get(g.dataId);m.stringBytes=f;let v=t.makeOutput(o.shape,"int32"),b=t.typedArrayFromHeap(v);return b.set(y),[g,v]}};var r0=r(93157);let r1={kernelName:ek.s1s,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{backend:t,inputs:r,attrs:i}=e,{input:n,delimiter:o}=r,{skipEmpty:a}=i,s=t.readSync(n.dataId),l=t.readSync(o.dataId),[u,c,d]=(0,r0.Q)(s,l[0],a),p=c.length,h=t.makeOutput([p,2],"int32"),f=t.typedArrayFromHeap(h);f.set(u);let y=t.makeOutput([p],"string"),g=t.dataIdMap.get(y.dataId);g.stringBytes=c;let m=t.makeOutput([2],"int32"),v=t.typedArrayFromHeap(m);return v.set(d),[h,y,m]}};var r2=r(80912);let r3={kernelName:ek.XkS,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{backend:t,inputs:r,attrs:i}=e,{input:n}=r,{numBuckets:o}=i,a=t.readSync(n.dataId),s=(0,r2.h)(a,o),l=t.makeOutput(n.shape,"int32"),u=t.typedArrayFromHeap(l);return u.set(s),l}},r5=createBinaryKernelConfig(ek.Tr8,!0),r4={kernelName:ek.GBy,backendName:"wasm",setupFunc:function(e){eP=e.wasm.cwrap(ek.GBy,null,["number","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{axis:n,keepDims:o}=i,{x:a}=r,s=t.dataIdMap.get(a.dataId).id,l=s,u=a,{transposed:c,axes:d,originalAxes:p,inputWasTransposed:h}=permuteAxesAndTranspose(a,n,t),f=d;if(h){let e=t.dataIdMap.get(c.dataId).id;e!==s&&(u=c,l=e,f=ek.backend_util.getInnerMostAxes(f.length,u.shape.length))}ek.backend_util.assertAxesAreInnerMostDims("sum",f,u.shape.length);let[y,g]=ek.backend_util.computeOutAndReduceShapes(u.shape,f),m=ek.D5U.sizeFromShape(g),v=t.makeOutput(y,u.dtype);if(0!==ek.D5U.sizeFromShape(u.shape)){let e=t.dataIdMap.get(v.dataId).id;eP(l,m,eD[v.dtype],e)}if(h&&t.disposeData(c.dataId),o){let e=ek.backend_util.expandShapeToKeepDim(v.shape,p);v.shape=e}return v}},r6=createUnaryKernelConfig(ek.sEM),r8=createUnaryKernelConfig(ek.MIZ),r9={kernelName:ek.SIB,backendName:"wasm",setupFunc:function(e){eC=e.wasm.cwrap(ek.SIB,null,["number","number","number","number","number","number","array","number","number","number"])},kernelFunc:function(e){let{backend:t,inputs:r,attrs:i}=e,{tensor:n,indices:o,updates:a}=r,{}=i,s=t.makeOutput(n.shape,n.dtype);if(0===ek.D5U.sizeFromShape(n.shape))return s;let{sliceRank:l,numUpdates:u,sliceSize:c,strides:d,outputSize:p}=ek.yV1.calculateShapes(a,o,n.shape),h=t.dataIdMap.get(o.dataId),f=h.id,y=t.dataIdMap.get(a.dataId),g=y.id,m=t.dataIdMap.get(n.dataId),v=m.id,b=new Uint8Array(new Int32Array(d).buffer),S=t.dataIdMap.get(s.dataId).id;return eC(f,g,eD[a.dtype],l,u,c,b,p,S,v),s}},r7={kernelName:ek.n9L,backendName:"wasm",setupFunc:function(e){ex=e.wasm.cwrap(ek.n9L,null,["number","array","number","array","number","number"])},kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,o=r.dataIdMap.get(n.dataId).id,{reps:a}=i,s=Array(n.shape.length);for(let e=0;e<s.length;e++)s[e]=n.shape[e]*a[e];let l=new Uint8Array(new Int32Array(n.shape).buffer),u=new Uint8Array(new Int32Array(s).buffer),c=r.makeOutput(s,n.dtype),d=r.dataIdMap.get(c.dataId).id;return ex(o,l,n.shape.length,u,s.length,eD[c.dtype],d),c}},ie={kernelName:ek.cWu,backendName:"wasm",setupFunc:function(e){eA=e.wasm.cwrap(ek.cWu,null,["number","array","number","number","number","bool","number","number"])},kernelFunc:({inputs:e,backend:t,attrs:r})=>{let{x:i}=e,{k:n,sorted:o}=r,a=t.dataIdMap.get(i.dataId).id,s=new Uint8Array(new Int32Array(i.shape).buffer),l=i.shape.slice();l[l.length-1]=n;let u=t.makeOutput(l,i.dtype),c=t.dataIdMap.get(u.dataId).id,d=t.makeOutput(l,"int32"),p=t.dataIdMap.get(d.dataId).id;return eA(a,s,i.shape.length,eD[i.dtype],n,o,c,p),[u,d]}},it={kernelName:ek.wx7,backendName:"wasm",setupFunc:function(e){e_=e.wasm.cwrap(ek.wx7,null,["number","number","bool","number","number","number","number","number","number","array","number","array","number","number","number","number","number"])},kernelFunc:function(e){let t;let{backend:r,inputs:i,attrs:n}=e,{image:o,transforms:a}=i,{interpolation:s,fillMode:l,fillValue:u,outputShape:c}=n,[d,p,h,f]=o.shape,[y,g]=null!=c?c:[p,h],m=[d,y,g,f],v=new Uint8Array(new Int32Array(ek.D5U.computeStrides(o.shape)).buffer),b=new Uint8Array(new Int32Array(ek.D5U.computeStrides(m)).buffer),S=r.makeOutput(m,o.dtype),P=r.dataIdMap.get(S.dataId).id,C=r.dataIdMap.get(o.dataId),x=C.id,A=r.dataIdMap.get(a.dataId),_=A.id;switch(l){case"constant":default:t=1;break;case"reflect":t=2;break;case"wrap":t=3;break;case"nearest":t=4}return e_(x,_,a.shape[0]>1,d,y,g,f,h,p,v,o.shape.length-1,b,m.length-1,"nearest"===s?1:2,t,u,P),S}};var ir=r(78305);let ii={kernelName:ek.kpP,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:t,attrs:r,backend:i}=e,{axis:n}=r,{x:o}=t,{outputValues:a,outputShape:s,indices:l}=(0,ir.S)(i.readSync(o.dataId),n,o.shape,o.dtype);return[i.makeOutput(s,o.dtype,void 0,a),i.makeOutput([l.length],"int32",void 0,l)]}},io={kernelName:ek.ToN,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{value:n}=t,{axis:o}=i;o<0&&(o+=n.shape.length);let a=n.shape[o],s=n.shape.length,l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==o&&(l[u++]=n.shape[e]);let c=Array(a),d=Array(s).fill(0),p=n.shape.slice();p[o]=1;for(let e=0;e<c.length;e++)d[o]=e,c[e]=slice({inputs:{x:n},attrs:{begin:d,size:p},backend:r});return c.map(({dataId:e,dtype:t})=>({dataId:e,dtype:t,shape:l}))}},ia={kernelName:ek.RuY,backendName:"wasm",kernelFunc:/**
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
 */function(e){let{inputs:{x:t},backend:r}=e,i=r.makeOutput(t.shape,t.dtype),n=r.typedArrayFromHeap(i);return n.fill(0),i}},is=[eL,eN,eB,eF,eV,ej,eU,eG,eW,eX,eY,e$,eK,eq,eZ,eJ,e1,eQ,e0,e3,e6,e8,e9,e7,te,tt,tr,tn,to,ta,ts,tl,tu,tc,td,tp,th,tf,ty,tg,tm,tv,tb,tS,tP,tC,tx,tA,t_,tT,tw,tR,tE,tD,tO,tI,tM,tk,tL,tN,tB,tF,tV,eH,tj,tH,tz,tU,tG,tW,tX,t$,tY,tK,tq,tZ,tJ,tQ,t0,t1,t2,t3,t5,t4,t6,t8,t9,t7,re,rt,ri,rn,ro,ra,rs,rl,ru,rc,rd,rp,rh,rf,ry,rg,rm,rb,rS,rP,rC,rx,e2,rA,r_,rT,rw,rR,rE,rD,rO,rI,rM,rk,rL,{kernelName:"Sigmoid",backendName:"wasm",setupFunc:function(e){ef=e.wasm.cwrap(ek.a5O,null,["number","number"])},kernelFunc:function(e){let{backend:t,inputs:{x:r}}=e,i=t.dataIdMap.get(r.dataId).id,n=t.makeOutput(r.shape,r.dtype),o=t.dataIdMap.get(n.dataId).id;return 0===ek.D5U.sizeFromShape(n.shape)||ef(i,o),n}},rN,rB,rF,e4,rr,rV,rj,rH,rz,rU,rG,rW,rX,rY,r$,rK,rq,rZ,rQ,r1,r3,r5,r4,r6,r8,r9,r7,ie,it,ez,ii,io,ia];for(let e of is)(0,ek.wCN)(e);/**
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
 */let il=(0,ek.OBj)();il.registerFlag("WASM_HAS_SIMD_SUPPORT",async()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]))}catch(e){return!1}}),il.registerFlag("WASM_HAS_MULTITHREAD_SUPPORT",async()=>{if(il.get("IS_NODE"))return!1;try{return new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch(e){return!1}});var iu=r(48831),ic=r.n(iu),id=r(40691),ip=r(64656),ih=r.n(ip);/**
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
 */let iy=ic()||iu,ig=ih()||ip;let BackendWasm=class BackendWasm extends ek.Zuw{constructor(e){super(),this.wasm=e,this.dataIdNextNumber=1,this.wasm.tfjs.initWithThreadsCount(ix),this.wasm.tfjs.getThreadsCount(),this.dataIdMap=new ek.JLz(this,(0,ek.SRH)())}write(e,t,r){let i={id:this.dataIdNextNumber++};return this.move(i,e,t,r,1),i}numDataIds(){return this.dataIdMap.numDataIds()}async time(e){let t=ek.D5U.now();e();let r=ek.D5U.now()-t;return{kernelMs:r}}move(e,t,r,i,n){let o=this.dataIdNextNumber++;if("string"===i){this.dataIdMap.set(e,{id:o,stringBytes:t,shape:r,dtype:i,memoryOffset:null,refCount:n});return}let a=ek.D5U.sizeFromShape(r),s=a*ek.D5U.bytesPerElement(i),l=this.wasm._malloc(s)>>>0;this.dataIdMap.set(e,{id:o,memoryOffset:l,shape:r,dtype:i,refCount:n}),this.wasm.tfjs.registerTensor(o,a,l),null!=t&&this.wasm.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,s),l)}async read(e){return this.readSync(e)}readSync(e,t,r){let{memoryOffset:i,dtype:n,shape:o,stringBytes:a}=this.dataIdMap.get(e);if("string"===n)return(null==t||0===t)&&(null==r||r>=a.length)?a:a.slice(t,r);t=t||0,r=r||ek.D5U.sizeFromShape(o);let s=ek.D5U.bytesPerElement(n),l=this.wasm.HEAPU8.slice(i+t*s,i+r*s);return function(e,t){switch(t){case"float32":return new Float32Array(e);case"int32":return new Int32Array(e);case"bool":return new Uint8Array(e);default:throw Error(`Unknown dtype ${t}`)}}(l.buffer,n)}disposeData(e,t=!1){if(this.dataIdMap.has(e)){let r=this.dataIdMap.get(e);if(r.refCount--,!t&&r.refCount>0)return!1;this.wasm._free(r.memoryOffset),this.wasm.tfjs.disposeData(r.id),this.dataIdMap.delete(e)}return!0}refCount(e){if(this.dataIdMap.has(e)){let t=this.dataIdMap.get(e);return t.refCount}return 0}incRef(e){let t=this.dataIdMap.get(e);null!=t&&t.refCount++}floatPrecision(){return 32}getMemoryOffset(e){return this.dataIdMap.get(e).memoryOffset}dispose(){this.wasm.tfjs.dispose(),"PThread"in this.wasm&&this.wasm.PThread.terminateAllThreads(),this.wasm=null}memory(){return{unreliable:!1}}makeOutput(e,t,r,i){let n;if(null==r)n=this.write(null!=i?i:null,e,t);else{let i=this.dataIdNextNumber++;n={id:i},this.dataIdMap.set(n,{id:i,memoryOffset:r,shape:e,dtype:t,refCount:1});let o=ek.D5U.sizeFromShape(e);this.wasm.tfjs.registerTensor(i,o,r)}return{dataId:n,shape:e,dtype:t}}typedArrayFromHeap({shape:e,dtype:t,dataId:r}){let i=this.wasm.HEAPU8.buffer,{memoryOffset:n}=this.dataIdMap.get(r),o=ek.D5U.sizeFromShape(e);switch(t){case"float32":return new Float32Array(i,n,o);case"int32":return new Int32Array(i,n,o);case"bool":return new Uint8Array(i,n,o);default:throw Error(`Unknown dtype ${t}`)}}};function getPathToWasmBinary(e,t,r){if(null!=iv)return iv;let i="tfjs-backend-wasm.wasm";return(e&&t?i="tfjs-backend-wasm-threaded-simd.wasm":e&&(i="tfjs-backend-wasm-simd.wasm"),null!=iS&&null!=iS[i])?iS[i]:r+i}async function init(){let[e,t]=await Promise.all([(0,ek.OBj)().getAsync("WASM_HAS_SIMD_SUPPORT"),(0,ek.OBj)().getAsync("WASM_HAS_MULTITHREAD_SUPPORT")]);return new Promise((r,i)=>{let n;let o={};if(o.locateFile=(r,i)=>{if(r.endsWith(".worker.js")){let e=id.g.replace(/\n/g,"\\n"),t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}return r.endsWith(".wasm")?getPathToWasmBinary(e,t,null!=ib?ib:i):i+r},iC){var a;o.instantiateWasm=(a=getPathToWasmBinary(e,t,null!=ib?ib:""),(e,t)=>(ek.D5U.fetch(a,{credentials:"same-origin"}).then(r=>{r.ok||e.env.a(`failed to load wasm binary file at '${a}'`),r.arrayBuffer().then(r=>{WebAssembly.instantiate(r,e).then(e=>{t(e.instance,e.module)})})}),{}))}let s=!1;o.onAbort=()=>{s||iP||(iP=!0,i({message:"Make sure the server can serve the `.wasm` file relative to the bundled js file. For more details see https://github.com/tensorflow/tfjs/blob/master/tfjs-backend-wasm/README.md#using-bundlers"}))},t&&e&&null==iv?(o.mainScriptUrlOrBlob=new Blob(["var WasmBackendModuleThreadedSimd = "+iy.toString()],{type:"text/javascript"}),n=iy(o)):n=ig(o),n.then(e=>{s=!0,iP=!1,e.tfjs={init:e.cwrap("init",null,[]),initWithThreadsCount:e.cwrap("init_with_threads_count",null,["number"]),getThreadsCount:e.cwrap("get_threads_count","number",[]),registerTensor:e.cwrap("register_tensor",null,["number","number","number"]),disposeData:e.cwrap("dispose_data",null,["number"]),dispose:e.cwrap("dispose",null,[])},r({wasm:e})}).catch(i)})}let im=["tfjs-backend-wasm.wasm","tfjs-backend-wasm-simd.wasm","tfjs-backend-wasm-threaded-simd.wasm"],iv=null,ib=null,iS={},iP=!1,iC=!1;function setWasmPaths(e,t=!1){if(iP)throw Error("The WASM backend was already initialized. Make sure you call `setWasmPaths()` before you call `tf.setBackend()` or `tf.ready()`");if("string"==typeof e)ib=e;else{iS=e;let t=im.filter(e=>null==iS[e]);if(t.length>0)throw Error(`There were no entries found for the following binaries: ${t.join(",")}. Please either call setWasmPaths with a map providing a path for each binary, or with a string indicating the directory where all the binaries can be found.`)}iC=t}let ix=-1;(0,ek.jqO)("wasm",async()=>{let{wasm:e}=await init();return new BackendWasm(e)},2);/**
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
 */},48831:function(e,t,r){var i,n=r(28070),o=(i=(i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(e){function GROWABLE_HEAP_U8(){return d.buffer!=h&&updateGlobalBufferAndViews(d.buffer),y}function GROWABLE_HEAP_I32(){return d.buffer!=h&&updateGlobalBufferAndViews(d.buffer),g}function GROWABLE_HEAP_U32(){return d.buffer!=h&&updateGlobalBufferAndViews(d.buffer),m}function GROWABLE_HEAP_F64(){return d.buffer!=h&&updateGlobalBufferAndViews(d.buffer),v}var t,o,a,s,l,u,c,d,p,h,f,y,g,m,v,b,S,P,C,x,A,_=void 0!==(e=e||{})?e:{};_.ready=new Promise(function(e,r){t=e,o=r}),void 0!==n&&n.listeners&&(a={uncaughtException:n.listeners("uncaughtException"),unhandledRejection:n.listeners("unhandledRejection")});var T=Object.assign({},_),w=[],quit_=(e,t)=>{throw t},R="object"==typeof window,E="function"==typeof importScripts,D="object"==typeof n&&"object"==typeof n.versions&&"string"==typeof n.versions.node,O=_.ENVIRONMENT_IS_PTHREAD||!1,I="";function locateFile(e){return _.locateFile?_.locateFile(e,I):I+e}if(D){let e;var M=r(67945),k=r(80369);I=E?k.dirname(I)+"/":"//",s=(e,t)=>(e=isFileURI(e)?new URL(e):k.normalize(e),M.readFileSync(e,t?void 0:"utf8")),u=e=>{var t=s(e,!0);return t.buffer||(t=new Uint8Array(t)),t},l=(e,t,r)=>{e=isFileURI(e)?new URL(e):k.normalize(e),M.readFile(e,function(e,i){e?r(e):t(i.buffer)})},n.argv.length>1&&n.argv[1].replace(/\\/g,"/"),w=n.argv.slice(2),n.on("uncaughtException",function(e){if(!(e instanceof ExitStatus))throw e}),n.on("unhandledRejection",function(e){throw e}),quit_=(e,t)=>{if(V)throw n.exitCode=e,t;t instanceof ExitStatus||F("exiting due to exception: "+t),n.exit(e)},_.inspect=function(){return"[Emscripten Module object]"};try{e=r(31613)}catch(e){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),e}r.g.Worker=e.Worker}else(R||E)&&(E?I=self.location.href:"undefined"!=typeof document&&document.currentScript&&(I=document.currentScript.src),void 0!==i&&i&&(I=i),I=0!==I.indexOf("blob:")?I.substr(0,I.replace(/[?#].*/,"").lastIndexOf("/")+1):"",D||(s=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},E&&(u=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),l=(e,t,r)=>{var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=()=>{if(200==i.status||0==i.status&&i.response){t(i.response);return}r()},i.onerror=r,i.send(null)}));D&&"undefined"==typeof performance&&(r.g.performance=r(98361).performance);var L=console.log.bind(console),N=console.warn.bind(console);D&&(L=e=>M.writeSync(1,e+"\n"),N=e=>M.writeSync(2,e+"\n"));var B=_.print||L,F=_.printErr||N;Object.assign(_,T),T=null,_.arguments&&(w=_.arguments),_.thisProgram&&_.thisProgram,_.quit&&(quit_=_.quit),Atomics.load,Atomics.store,Atomics.compareExchange,_.wasmBinary&&(c=_.wasmBinary);var V=_.noExitRuntime||!0;"object"!=typeof WebAssembly&&abort("no native wasm support detected");var j=!1,H="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function UTF8ArrayToString(e,t,r){for(var i=(t>>>=0)+r,n=t;e[n]&&!(n>=i);)++n;if(n-t>16&&e.buffer&&H)return H.decode(e.buffer instanceof SharedArrayBuffer?e.slice(t,n):e.subarray(t,n));for(var o="";t<n;){var a=e[t++];if(!(128&a)){o+=String.fromCharCode(a);continue}var s=63&e[t++];if((224&a)==192){o+=String.fromCharCode((31&a)<<6|s);continue}var l=63&e[t++];if((a=(240&a)==224?(15&a)<<12|s<<6|l:(7&a)<<18|s<<12|l<<6|63&e[t++])<65536)o+=String.fromCharCode(a);else{var u=a-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}return o}function updateGlobalBufferAndViews(e){h=e,_.HEAP8=f=new Int8Array(e),_.HEAP16=new Int16Array(e),_.HEAP32=g=new Int32Array(e),_.HEAPU8=y=new Uint8Array(e),_.HEAPU16=new Uint16Array(e),_.HEAPU32=m=new Uint32Array(e),_.HEAPF32=new Float32Array(e),_.HEAPF64=v=new Float64Array(e)}O&&(h=_.buffer);var z=_.INITIAL_MEMORY||16777216;if(O)d=_.wasmMemory,h=_.buffer;else if(_.wasmMemory)d=_.wasmMemory;else if(!((d=new WebAssembly.Memory({initial:z/65536,maximum:65536,shared:!0})).buffer instanceof SharedArrayBuffer))throw F("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),D&&F("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");d&&(h=d.buffer),z=h.byteLength,updateGlobalBufferAndViews(h);var U=[],G=[],W=[],X=0,Y=null,$=null;function abort(e){_.onAbort&&_.onAbort(e),F(e="Aborted("+e+")"),j=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw o(t),t}function isDataURI(e){return e.startsWith("data:application/octet-stream;base64,")}function isFileURI(e){return e.startsWith("file://")}function getBinary(e){try{if(e==S&&c)return new Uint8Array(c);if(u)return u(e);throw"both async and sync fetching of the wasm failed"}catch(e){abort(e)}}isDataURI(S="tfjs-backend-wasm-threaded-simd.wasm")||(S=locateFile(S));var K={};function ExitStatus(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function cleanupThread(e){var t=q.pthreads[e];t||abort(void 0),q.returnWorkerToPool(t)}function spawnThread(e){var t=q.getNewWorker();if(!t)return 6;q.runningWorkers.push(t),q.pthreads[e.pthread_ptr]=t,t.pthread_ptr=e.pthread_ptr;var r={cmd:"run",start_routine:e.startRoutine,arg:e.arg,pthread_ptr:e.pthread_ptr};return t.runPthread=()=>{D&&t.ref(),t.postMessage(r,e.transferList),delete t.runPthread},t.loaded&&t.runPthread(),0}function _proc_exit(e){if(O)return _emscripten_proxy_to_main_thread_js(1,1,e);V||(q.terminateAllThreads(),_.onExit&&_.onExit(e),j=!0),quit_(e,new ExitStatus(e))}var _exit=function(e,t){if(!t&&O)throw exitOnMainThread(e),"unwind";_proc_exit(e)},q={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init:function(){O?q.initWorker():q.initMainThread()},initMainThread:function(){for(var e=8;e--;)q.allocateUnusedWorker()},initWorker:function(){V=!1},setExitStatus:function(e){},terminateAllThreads:function(){for(var e of Object.values(q.pthreads))q.returnWorkerToPool(e);for(var e of q.unusedWorkers)e.terminate();q.unusedWorkers=[]},returnWorkerToPool:function(e){var t=e.pthread_ptr;delete q.pthreads[t],q.unusedWorkers.push(e),q.runningWorkers.splice(q.runningWorkers.indexOf(e),1),e.pthread_ptr=0,D&&e.unref(),ea(t)},receiveObjectTransfer:function(e){},threadInitTLS:function(){q.tlsInitFunctions.forEach(e=>e())},loadWasmModuleToWorker:function(e,t){e.onmessage=r=>{var i,n,o=r.data,a=o.cmd;if(e.pthread_ptr&&(q.currentProxiedOperationCallerThread=e.pthread_ptr),o.targetThread&&o.targetThread!=er()){var s=q.pthreads[o.targetThread];s?s.postMessage(o,o.transferList):F('Internal error! Worker sent a message "'+a+'" to target pthread '+o.targetThread+", but that thread no longer exists!"),q.currentProxiedOperationCallerThread=void 0;return}"processProxyingQueue"===a?executeNotifiedProxyingQueue(o.queue):"spawnThread"===a?spawnThread(o):"cleanupThread"===a?cleanupThread(o.thread):"killThread"===a?(i=o.thread,n=q.pthreads[i],delete q.pthreads[i],n.terminate(),ea(i),q.runningWorkers.splice(q.runningWorkers.indexOf(n),1),n.pthread_ptr=0):"cancelThread"===a?function(e){q.pthreads[e].postMessage({cmd:"cancel"})}(o.thread):"loaded"===a?(e.loaded=!0,D&&e.unref(),t&&t(e),e.runPthread&&e.runPthread()):"print"===a?B("Thread "+o.threadId+": "+o.text):"printErr"===a?F("Thread "+o.threadId+": "+o.text):"alert"===a?alert("Thread "+o.threadId+": "+o.text):"setimmediate"===o.target?e.postMessage(o):"callHandler"===a?_[o.handler](...o.args):a&&F("worker sent an unknown command "+a),q.currentProxiedOperationCallerThread=void 0},e.onerror=e=>{throw F("worker sent an error! "+e.filename+":"+e.lineno+": "+e.message),e},D&&(e.on("message",function(t){e.onmessage({data:t})}),e.on("error",function(t){e.onerror(t)}),e.on("detachedExit",function(){}));var r=[];for(var n of["onExit","onAbort","print","printErr"])_.hasOwnProperty(n)&&r.push(n);e.postMessage({cmd:"load",handlers:r,urlOrBlob:_.mainScriptUrlOrBlob||i,wasmMemory:d,wasmModule:p})},allocateUnusedWorker:function(){var e,t=locateFile("tfjs-backend-wasm-threaded-simd.worker.js");e=new Worker(t),q.unusedWorkers.push(e)},getNewWorker:function(){return 0==q.unusedWorkers.length&&(q.allocateUnusedWorker(),q.loadWasmModuleToWorker(q.unusedWorkers[0])),q.unusedWorkers.pop()}};function callRuntimeCallbacks(e){for(;e.length>0;)e.shift()(_)}function exitOnMainThread(e){if(O)return _emscripten_proxy_to_main_thread_js(2,0,e);try{_exit(e)}catch(e){var t;(t=e)instanceof ExitStatus||"unwind"==t||quit_(1,t)}}_.PThread=q,_.establishStackSpace=function(){var e=er(),t=GROWABLE_HEAP_I32()[e+52>>>2],r=t-GROWABLE_HEAP_I32()[e+56>>>2];el(t,r),ec(t)};var Z=[];function pthreadCreateProxied(e,t,r,i){return O?_emscripten_proxy_to_main_thread_js(3,1,e,t,r,i):___pthread_create_js(e,t,r,i)}function ___pthread_create_js(e,t,r,i){if("undefined"==typeof SharedArrayBuffer)return F("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var n=[];if(O&&0===n.length)return pthreadCreateProxied(e,t,r,i);var o={startRoutine:r,pthread_ptr:e,arg:i,transferList:n};return O?(o.cmd="spawnThread",postMessage(o,n),0):spawnThread(o)}function executeNotifiedProxyingQueue(e){Atomics.store(GROWABLE_HEAP_I32(),e>>2,1),er()&&eo(e),Atomics.compareExchange(GROWABLE_HEAP_I32(),e>>2,1,0)}function warnOnce(e){warnOnce.shown||(warnOnce.shown={}),warnOnce.shown[e]||(warnOnce.shown[e]=1,D&&(e="warning: "+e),F(e))}function getHeapMax(){return 4294901760}function _emscripten_proxy_to_main_thread_js(e,t){var r,i,n=arguments.length-2,o=arguments;return r=eu(),i=(()=>{for(var r=ed(8*n),i=r>>3,a=0;a<n;a++){var s=o[2+a];GROWABLE_HEAP_F64()[i+a>>>0]=s}return en(e,n,r,t)})(),ec(r),i}_.invokeEntryPoint=function(e,t){var r,i=((r=Z[e])||(e>=Z.length&&(Z.length=e+1),Z[e]=r=b.get(e)),r)(t);V?q.setExitStatus(i):es(i)},_.executeNotifiedProxyingQueue=executeNotifiedProxyingQueue,P=D?()=>{var e=n.hrtime();return 1e3*e[0]+e[1]/1e6}:()=>performance.timeOrigin+performance.now();var J=[];function _fd_close(e){return O?_emscripten_proxy_to_main_thread_js(4,1,e):52}function _fd_seek(e,t,r,i,n){return O?_emscripten_proxy_to_main_thread_js(5,1,e,t,r,i,n):70}var Q=[null,[],[]];function _fd_write(e,t,r,i){if(O)return _emscripten_proxy_to_main_thread_js(6,1,e,t,r,i);for(var n=0,o=0;o<r;o++){var a=GROWABLE_HEAP_U32()[t>>>2],s=GROWABLE_HEAP_U32()[t+4>>>2];t+=8;for(var l=0;l<s;l++)!function(e,t){var r=Q[e];0===t||10===t?((1===e?B:F)(UTF8ArrayToString(r,0)),r.length=0):r.push(t)}(e,GROWABLE_HEAP_U8()[a+l>>>0]);n+=s}return GROWABLE_HEAP_U32()[i>>>2]=n,0}q.init();var ee=[null,_proc_exit,exitOnMainThread,pthreadCreateProxied,_fd_close,_fd_seek,_fd_write],et={__emscripten_init_main_thread_js:function(e){ei(e,!E,1,!R),q.threadInitTLS()},__emscripten_thread_cleanup:function(e){O?postMessage({cmd:"cleanupThread",thread:e}):cleanupThread(e)},__pthread_create_js:___pthread_create_js,_emscripten_default_pthread_stack_size:function(){return 65536},_emscripten_get_now_is_monotonic:function(){return!0},_emscripten_notify_task_queue:function(e,t,r,i){if(e==t)setTimeout(()=>executeNotifiedProxyingQueue(i));else if(O)postMessage({targetThread:e,cmd:"processProxyingQueue",queue:i});else{var n=q.pthreads[e];if(!n)return;n.postMessage({cmd:"processProxyingQueue",queue:i})}return 1},_emscripten_set_offscreencanvas_size:function(e,t,r){return -1},abort:function(){abort("")},emscripten_check_blocking_allowed:function(){!D&&(E||warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"))},emscripten_date_now:function(){return Date.now()},emscripten_get_heap_max:function(){return getHeapMax()},emscripten_get_now:P,emscripten_memcpy_big:function(e,t,r){GROWABLE_HEAP_U8().copyWithin(e>>>0,t>>>0,t+r>>>0)},emscripten_num_logical_cores:function(){return D?r(42002).cpus().length:navigator.hardwareConcurrency},emscripten_receive_on_main_thread_js:function(e,t,r){J.length=t;for(var i=r>>3,n=0;n<t;n++)J[n]=GROWABLE_HEAP_F64()[i+n>>>0];return(e<0?K[-e-1]:ee[e]).apply(null,J)},emscripten_resize_heap:function(e){var t=GROWABLE_HEAP_U8().length;if((e>>>=0)<=t)return!1;var r=getHeapMax();if(e>r)return!1;let alignUp=(e,t)=>e+(t-e%t)%t;for(var i=1;i<=4;i*=2){var n=t*(1+.2/i);if(n=Math.min(n,e+100663296),function(e){try{return d.grow(e-h.byteLength+65535>>>16),updateGlobalBufferAndViews(d.buffer),1}catch(e){}}(Math.min(r,alignUp(Math.max(e,n),65536))))return!0}return!1},emscripten_unwind_to_js_event_loop:function(){throw"unwind"},exit:_exit,fd_close:_fd_close,fd_seek:_fd_seek,fd_write:_fd_write,memory:d||_.wasmMemory};(function(){var e={env:et,wasi_snapshot_preview1:et};function receiveInstance(e,t){var r,i,n=e.exports;if(_.asm=n,r=_.asm._emscripten_tls_init,q.tlsInitFunctions.push(r),b=_.asm.__indirect_function_table,i=_.asm.__wasm_call_ctors,G.unshift(i),p=t,!O){var o=q.unusedWorkers.length;q.unusedWorkers.forEach(function(e){q.loadWasmModuleToWorker(e,function(){--o||function(e){if(X--,_.monitorRunDependencies&&_.monitorRunDependencies(X),0==X&&(null!==Y&&(clearInterval(Y),Y=null),$)){var t=$;$=null,t()}}(0)})})}}function receiveInstantiationResult(e){receiveInstance(e.instance,e.module)}function instantiateArrayBuffer(t){return(function(){if(!c&&(R||E)){if("function"==typeof fetch&&!isFileURI(S))return fetch(S,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+S+"'";return e.arrayBuffer()}).catch(function(){return getBinary(S)});if(l)return new Promise(function(e,t){l(S,function(t){e(new Uint8Array(t))},t)})}return Promise.resolve().then(function(){return getBinary(S)})})().then(function(t){return WebAssembly.instantiate(t,e)}).then(function(e){return e}).then(t,function(e){F("failed to asynchronously prepare wasm: "+e),abort(e)})}if(!O&&(X++,_.monitorRunDependencies&&_.monitorRunDependencies(X)),_.instantiateWasm)try{return _.instantiateWasm(e,receiveInstance)}catch(e){F("Module.instantiateWasm callback failed with error: "+e),o(e)}(c||"function"!=typeof WebAssembly.instantiateStreaming||isDataURI(S)||isFileURI(S)||D||"function"!=typeof fetch?instantiateArrayBuffer(receiveInstantiationResult):fetch(S,{credentials:"same-origin"}).then(function(t){return WebAssembly.instantiateStreaming(t,e).then(receiveInstantiationResult,function(e){return F("wasm streaming compile failed: "+e),F("falling back to ArrayBuffer instantiation"),instantiateArrayBuffer(receiveInstantiationResult)})})).catch(o)})(),_.___wasm_call_ctors=function(){return(_.___wasm_call_ctors=_.asm.__wasm_call_ctors).apply(null,arguments)},_._init=function(){return(_._init=_.asm.init).apply(null,arguments)},_._init_with_threads_count=function(){return(_._init_with_threads_count=_.asm.init_with_threads_count).apply(null,arguments)},_._get_threads_count=function(){return(_._get_threads_count=_.asm.get_threads_count).apply(null,arguments)},_._register_tensor=function(){return(_._register_tensor=_.asm.register_tensor).apply(null,arguments)},_._dispose_data=function(){return(_._dispose_data=_.asm.dispose_data).apply(null,arguments)},_._dispose=function(){return(_._dispose=_.asm.dispose).apply(null,arguments)},_._Abs=function(){return(_._Abs=_.asm.Abs).apply(null,arguments)},_._Acos=function(){return(_._Acos=_.asm.Acos).apply(null,arguments)},_._Acosh=function(){return(_._Acosh=_.asm.Acosh).apply(null,arguments)},_._Add=function(){return(_._Add=_.asm.Add).apply(null,arguments)},_._AddN=function(){return(_._AddN=_.asm.AddN).apply(null,arguments)},_._All=function(){return(_._All=_.asm.All).apply(null,arguments)},_._Any=function(){return(_._Any=_.asm.Any).apply(null,arguments)},_._ArgMax=function(){return(_._ArgMax=_.asm.ArgMax).apply(null,arguments)},_._ArgMin=function(){return(_._ArgMin=_.asm.ArgMin).apply(null,arguments)},_._Asin=function(){return(_._Asin=_.asm.Asin).apply(null,arguments)},_._Asinh=function(){return(_._Asinh=_.asm.Asinh).apply(null,arguments)},_._Atan=function(){return(_._Atan=_.asm.Atan).apply(null,arguments)},_._Atan2=function(){return(_._Atan2=_.asm.Atan2).apply(null,arguments)},_._Atanh=function(){return(_._Atanh=_.asm.Atanh).apply(null,arguments)},_._AvgPool=function(){return(_._AvgPool=_.asm.AvgPool).apply(null,arguments)},_._AvgPool3D=function(){return(_._AvgPool3D=_.asm.AvgPool3D).apply(null,arguments)},_._AvgPool3DGrad=function(){return(_._AvgPool3DGrad=_.asm.AvgPool3DGrad).apply(null,arguments)},_._AvgPoolGrad=function(){return(_._AvgPoolGrad=_.asm.AvgPoolGrad).apply(null,arguments)},_._BatchMatMul=function(){return(_._BatchMatMul=_.asm.BatchMatMul).apply(null,arguments)},_._Bincount=function(){return(_._Bincount=_.asm.Bincount).apply(null,arguments)},_._BitwiseAnd=function(){return(_._BitwiseAnd=_.asm.BitwiseAnd).apply(null,arguments)},_._Ceil=function(){return(_._Ceil=_.asm.Ceil).apply(null,arguments)},_._ClipByValue=function(){return(_._ClipByValue=_.asm.ClipByValue).apply(null,arguments)},_._Conv2D=function(){return(_._Conv2D=_.asm.Conv2D).apply(null,arguments)},_._Conv2DBackpropInput=function(){return(_._Conv2DBackpropInput=_.asm.Conv2DBackpropInput).apply(null,arguments)},_._Conv3D=function(){return(_._Conv3D=_.asm.Conv3D).apply(null,arguments)},_._Conv3DBackpropFilterV2=function(){return(_._Conv3DBackpropFilterV2=_.asm.Conv3DBackpropFilterV2).apply(null,arguments)},_._Conv3DBackpropInputV2=function(){return(_._Conv3DBackpropInputV2=_.asm.Conv3DBackpropInputV2).apply(null,arguments)},_._Cos=function(){return(_._Cos=_.asm.Cos).apply(null,arguments)},_._Cosh=function(){return(_._Cosh=_.asm.Cosh).apply(null,arguments)},_._CropAndResize=function(){return(_._CropAndResize=_.asm.CropAndResize).apply(null,arguments)},_._Cumprod=function(){return(_._Cumprod=_.asm.Cumprod).apply(null,arguments)},_._Cumsum=function(){return(_._Cumsum=_.asm.Cumsum).apply(null,arguments)},_._DenseBincount=function(){return(_._DenseBincount=_.asm.DenseBincount).apply(null,arguments)},_._DepthToSpace=function(){return(_._DepthToSpace=_.asm.DepthToSpace).apply(null,arguments)},_._DepthwiseConv2dNative=function(){return(_._DepthwiseConv2dNative=_.asm.DepthwiseConv2dNative).apply(null,arguments)},_._Diag=function(){return(_._Diag=_.asm.Diag).apply(null,arguments)},_._Dilation2D=function(){return(_._Dilation2D=_.asm.Dilation2D).apply(null,arguments)},_._Dilation2DBackpropFilter=function(){return(_._Dilation2DBackpropFilter=_.asm.Dilation2DBackpropFilter).apply(null,arguments)},_._Dilation2DBackpropInput=function(){return(_._Dilation2DBackpropInput=_.asm.Dilation2DBackpropInput).apply(null,arguments)},_._Elu=function(){return(_._Elu=_.asm.Elu).apply(null,arguments)},_._EluGrad=function(){return(_._EluGrad=_.asm.EluGrad).apply(null,arguments)},_._Equal=function(){return(_._Equal=_.asm.Equal).apply(null,arguments)},_._Erf=function(){return(_._Erf=_.asm.Erf).apply(null,arguments)},_._Exp=function(){return(_._Exp=_.asm.Exp).apply(null,arguments)},_._Expm1=function(){return(_._Expm1=_.asm.Expm1).apply(null,arguments)},_._FlipLeftRight=function(){return(_._FlipLeftRight=_.asm.FlipLeftRight).apply(null,arguments)},_._Floor=function(){return(_._Floor=_.asm.Floor).apply(null,arguments)},_._FloorDiv=function(){return(_._FloorDiv=_.asm.FloorDiv).apply(null,arguments)},_._FusedBatchNorm=function(){return(_._FusedBatchNorm=_.asm.FusedBatchNorm).apply(null,arguments)},_._FusedConv2D=function(){return(_._FusedConv2D=_.asm.FusedConv2D).apply(null,arguments)},_._FusedDepthwiseConv2D=function(){return(_._FusedDepthwiseConv2D=_.asm.FusedDepthwiseConv2D).apply(null,arguments)},_._Gather=function(){return(_._Gather=_.asm.Gather).apply(null,arguments)},_._GatherNd=function(){return(_._GatherNd=_.asm.GatherNd).apply(null,arguments)},_._Greater=function(){return(_._Greater=_.asm.Greater).apply(null,arguments)},_._GreaterEqual=function(){return(_._GreaterEqual=_.asm.GreaterEqual).apply(null,arguments)},_._IsFinite=function(){return(_._IsFinite=_.asm.IsFinite).apply(null,arguments)},_._IsInf=function(){return(_._IsInf=_.asm.IsInf).apply(null,arguments)},_._IsNan=function(){return(_._IsNan=_.asm.IsNan).apply(null,arguments)},_._LRN=function(){return(_._LRN=_.asm.LRN).apply(null,arguments)},_._LRNGrad=function(){return(_._LRNGrad=_.asm.LRNGrad).apply(null,arguments)},_._LeakyRelu=function(){return(_._LeakyRelu=_.asm.LeakyRelu).apply(null,arguments)},_._Less=function(){return(_._Less=_.asm.Less).apply(null,arguments)},_._LessEqual=function(){return(_._LessEqual=_.asm.LessEqual).apply(null,arguments)},_._LinSpace=function(){return(_._LinSpace=_.asm.LinSpace).apply(null,arguments)},_._Log=function(){return(_._Log=_.asm.Log).apply(null,arguments)},_._Log1p=function(){return(_._Log1p=_.asm.Log1p).apply(null,arguments)},_._LogicalAnd=function(){return(_._LogicalAnd=_.asm.LogicalAnd).apply(null,arguments)},_._LogicalNot=function(){return(_._LogicalNot=_.asm.LogicalNot).apply(null,arguments)},_._LogicalOr=function(){return(_._LogicalOr=_.asm.LogicalOr).apply(null,arguments)},_._LogicalXor=function(){return(_._LogicalXor=_.asm.LogicalXor).apply(null,arguments)},_._Max=function(){return(_._Max=_.asm.Max).apply(null,arguments)},_._MaxPool=function(){return(_._MaxPool=_.asm.MaxPool).apply(null,arguments)},_._MaxPool3D=function(){return(_._MaxPool3D=_.asm.MaxPool3D).apply(null,arguments)},_._MaxPool3DGrad=function(){return(_._MaxPool3DGrad=_.asm.MaxPool3DGrad).apply(null,arguments)},_._MaxPoolGrad=function(){return(_._MaxPoolGrad=_.asm.MaxPoolGrad).apply(null,arguments)},_._MaxPoolWithArgmax=function(){return(_._MaxPoolWithArgmax=_.asm.MaxPoolWithArgmax).apply(null,arguments)},_._Maximum=function(){return(_._Maximum=_.asm.Maximum).apply(null,arguments)},_._Mean=function(){return(_._Mean=_.asm.Mean).apply(null,arguments)},_._Min=function(){return(_._Min=_.asm.Min).apply(null,arguments)},_._Minimum=function(){return(_._Minimum=_.asm.Minimum).apply(null,arguments)},_._MirrorPad=function(){return(_._MirrorPad=_.asm.MirrorPad).apply(null,arguments)},_._Mod=function(){return(_._Mod=_.asm.Mod).apply(null,arguments)},_._Multinomial=function(){return(_._Multinomial=_.asm.Multinomial).apply(null,arguments)},_._Multiply=function(){return(_._Multiply=_.asm.Multiply).apply(null,arguments)},_._Neg=function(){return(_._Neg=_.asm.Neg).apply(null,arguments)},_._NonMaxSuppressionV3=function(){return(_._NonMaxSuppressionV3=_.asm.NonMaxSuppressionV3).apply(null,arguments)},_._NonMaxSuppressionV4=function(){return(_._NonMaxSuppressionV4=_.asm.NonMaxSuppressionV4).apply(null,arguments)},_._NonMaxSuppressionV5=function(){return(_._NonMaxSuppressionV5=_.asm.NonMaxSuppressionV5).apply(null,arguments)},_._NotEqual=function(){return(_._NotEqual=_.asm.NotEqual).apply(null,arguments)},_._OneHot=function(){return(_._OneHot=_.asm.OneHot).apply(null,arguments)},_._PadV2=function(){return(_._PadV2=_.asm.PadV2).apply(null,arguments)},_._Pow=function(){return(_._Pow=_.asm.Pow).apply(null,arguments)},_._Prelu=function(){return(_._Prelu=_.asm.Prelu).apply(null,arguments)},_._Prod=function(){return(_._Prod=_.asm.Prod).apply(null,arguments)},_._RealDiv=function(){return(_._RealDiv=_.asm.RealDiv).apply(null,arguments)},_._Reciprocal=function(){return(_._Reciprocal=_.asm.Reciprocal).apply(null,arguments)},_._Relu=function(){return(_._Relu=_.asm.Relu).apply(null,arguments)},_._Relu6=function(){return(_._Relu6=_.asm.Relu6).apply(null,arguments)},_._ResizeBilinear=function(){return(_._ResizeBilinear=_.asm.ResizeBilinear).apply(null,arguments)},_._ResizeBilinearGrad=function(){return(_._ResizeBilinearGrad=_.asm.ResizeBilinearGrad).apply(null,arguments)},_._ResizeNearestNeighbor=function(){return(_._ResizeNearestNeighbor=_.asm.ResizeNearestNeighbor).apply(null,arguments)},_._ResizeNearestNeighborGrad=function(){return(_._ResizeNearestNeighborGrad=_.asm.ResizeNearestNeighborGrad).apply(null,arguments)},_._Reverse=function(){return(_._Reverse=_.asm.Reverse).apply(null,arguments)},_._RotateWithOffset=function(){return(_._RotateWithOffset=_.asm.RotateWithOffset).apply(null,arguments)},_._Round=function(){return(_._Round=_.asm.Round).apply(null,arguments)},_._Rsqrt=function(){return(_._Rsqrt=_.asm.Rsqrt).apply(null,arguments)},_._ScatterNd=function(){return(_._ScatterNd=_.asm.ScatterNd).apply(null,arguments)},_._SearchSorted=function(){return(_._SearchSorted=_.asm.SearchSorted).apply(null,arguments)},_._SelectV2=function(){return(_._SelectV2=_.asm.SelectV2).apply(null,arguments)},_._Selu=function(){return(_._Selu=_.asm.Selu).apply(null,arguments)},_._Sigmoid=function(){return(_._Sigmoid=_.asm.Sigmoid).apply(null,arguments)},_._Sign=function(){return(_._Sign=_.asm.Sign).apply(null,arguments)},_._Sin=function(){return(_._Sin=_.asm.Sin).apply(null,arguments)},_._Sinh=function(){return(_._Sinh=_.asm.Sinh).apply(null,arguments)},_._Softmax=function(){return(_._Softmax=_.asm.Softmax).apply(null,arguments)},_._Softplus=function(){return(_._Softplus=_.asm.Softplus).apply(null,arguments)},_._SparseFillEmptyRows=function(){return(_._SparseFillEmptyRows=_.asm.SparseFillEmptyRows).apply(null,arguments)},_._SparseReshape=function(){return(_._SparseReshape=_.asm.SparseReshape).apply(null,arguments)},_._SparseSegmentReduction=function(){return(_._SparseSegmentReduction=_.asm.SparseSegmentReduction).apply(null,arguments)},_._SparseToDense=function(){return(_._SparseToDense=_.asm.SparseToDense).apply(null,arguments)},_._Sqrt=function(){return(_._Sqrt=_.asm.Sqrt).apply(null,arguments)},_._Square=function(){return(_._Square=_.asm.Square).apply(null,arguments)},_._SquaredDifference=function(){return(_._SquaredDifference=_.asm.SquaredDifference).apply(null,arguments)},_._Step=function(){return(_._Step=_.asm.Step).apply(null,arguments)},_._StridedSlice=function(){return(_._StridedSlice=_.asm.StridedSlice).apply(null,arguments)},_._Sub=function(){return(_._Sub=_.asm.Sub).apply(null,arguments)},_._Sum=function(){return(_._Sum=_.asm.Sum).apply(null,arguments)},_._Tan=function(){return(_._Tan=_.asm.Tan).apply(null,arguments)},_._Tanh=function(){return(_._Tanh=_.asm.Tanh).apply(null,arguments)},_._TensorScatterUpdate=function(){return(_._TensorScatterUpdate=_.asm.TensorScatterUpdate).apply(null,arguments)},_._Tile=function(){return(_._Tile=_.asm.Tile).apply(null,arguments)},_._TopK=function(){return(_._TopK=_.asm.TopK).apply(null,arguments)},_._Transform=function(){return(_._Transform=_.asm.Transform).apply(null,arguments)},_._Transpose=function(){return(_._Transpose=_.asm.Transpose).apply(null,arguments)},_.__FusedMatMul=function(){return(_.__FusedMatMul=_.asm._FusedMatMul).apply(null,arguments)},_._malloc=function(){return(_._malloc=_.asm.malloc).apply(null,arguments)},_._free=function(){return(_._free=_.asm.free).apply(null,arguments)},_.__emscripten_tls_init=function(){return(_.__emscripten_tls_init=_.asm._emscripten_tls_init).apply(null,arguments)};var er=_._pthread_self=function(){return(er=_._pthread_self=_.asm.pthread_self).apply(null,arguments)},ei=(_.___errno_location=function(){return(_.___errno_location=_.asm.__errno_location).apply(null,arguments)},_.__emscripten_thread_init=function(){return(ei=_.__emscripten_thread_init=_.asm._emscripten_thread_init).apply(null,arguments)}),en=(_.__emscripten_thread_crashed=function(){return(_.__emscripten_thread_crashed=_.asm._emscripten_thread_crashed).apply(null,arguments)},_._emscripten_main_thread_process_queued_calls=function(){return(_._emscripten_main_thread_process_queued_calls=_.asm.emscripten_main_thread_process_queued_calls).apply(null,arguments)},_._emscripten_main_browser_thread_id=function(){return(_._emscripten_main_browser_thread_id=_.asm.emscripten_main_browser_thread_id).apply(null,arguments)},_._emscripten_run_in_main_runtime_thread_js=function(){return(en=_._emscripten_run_in_main_runtime_thread_js=_.asm.emscripten_run_in_main_runtime_thread_js).apply(null,arguments)}),eo=(_._emscripten_dispatch_to_thread_=function(){return(_._emscripten_dispatch_to_thread_=_.asm.emscripten_dispatch_to_thread_).apply(null,arguments)},_.__emscripten_proxy_execute_task_queue=function(){return(eo=_.__emscripten_proxy_execute_task_queue=_.asm._emscripten_proxy_execute_task_queue).apply(null,arguments)}),ea=_.__emscripten_thread_free_data=function(){return(ea=_.__emscripten_thread_free_data=_.asm._emscripten_thread_free_data).apply(null,arguments)},es=_.__emscripten_thread_exit=function(){return(es=_.__emscripten_thread_exit=_.asm._emscripten_thread_exit).apply(null,arguments)},el=_._emscripten_stack_set_limits=function(){return(el=_._emscripten_stack_set_limits=_.asm.emscripten_stack_set_limits).apply(null,arguments)},eu=_.stackSave=function(){return(eu=_.stackSave=_.asm.stackSave).apply(null,arguments)},ec=_.stackRestore=function(){return(ec=_.stackRestore=_.asm.stackRestore).apply(null,arguments)},ed=_.stackAlloc=function(){return(ed=_.stackAlloc=_.asm.stackAlloc).apply(null,arguments)};function run(e){if(e=e||w,!(X>0)){if(O){t(_),O||callRuntimeCallbacks(G),startWorker(_);return}(function(){if(_.preRun)for("function"==typeof _.preRun&&(_.preRun=[_.preRun]);_.preRun.length;){var e;e=_.preRun.shift(),U.unshift(e)}callRuntimeCallbacks(U)})(),X>0||(_.setStatus?(_.setStatus("Running..."),setTimeout(function(){setTimeout(function(){_.setStatus("")},1),doRun()},1)):doRun())}function doRun(){!C&&(C=!0,_.calledRun=!0,j||(O||callRuntimeCallbacks(G),t(_),_.onRuntimeInitialized&&_.onRuntimeInitialized(),function(){if(!O){if(_.postRun)for("function"==typeof _.postRun&&(_.postRun=[_.postRun]);_.postRun.length;){var e;e=_.postRun.shift(),W.unshift(e)}callRuntimeCallbacks(W)}}()))}}if(_.dynCall_iijjiiii=function(){return(_.dynCall_iijjiiii=_.asm.dynCall_iijjiiii).apply(null,arguments)},_.dynCall_jiji=function(){return(_.dynCall_jiji=_.asm.dynCall_jiji).apply(null,arguments)},_.keepRuntimeAlive=function(){return V},_.wasmMemory=d,_.cwrap=function(e,t,r,i){var n=(r=r||[]).every(e=>"number"===e||"boolean"===e);return"string"!==t&&n&&!i?_["_"+e]:function(){return function(e,t,r,i,n){var o,a,s={string:e=>{var t=0;if(null!=e&&0!==e){var r,i=(e.length<<2)+1;r=t=ed(i),function(e,t,r,i){if(r>>>=0,i>0){for(var n=r+i-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(r>=n)break;t[r++>>>0]=a}else if(a<=2047){if(r+1>=n)break;t[r++>>>0]=192|a>>6,t[r++>>>0]=128|63&a}else if(a<=65535){if(r+2>=n)break;t[r++>>>0]=224|a>>12,t[r++>>>0]=128|a>>6&63,t[r++>>>0]=128|63&a}else{if(r+3>=n)break;t[r++>>>0]=240|a>>18,t[r++>>>0]=128|a>>12&63,t[r++>>>0]=128|a>>6&63,t[r++>>>0]=128|63&a}}t[r>>>0]=0}}(e,GROWABLE_HEAP_U8(),r,i)}return t},array:e=>{var t=ed(e.length);return(d.buffer!=h&&updateGlobalBufferAndViews(d.buffer),f).set(e,t>>>0),t}},l=_["_"+e],u=[],c=0;if(i)for(var p=0;p<i.length;p++){var y=s[r[p]];y?(0===c&&(c=eu()),u[p]=y(i[p])):u[p]=i[p]}var g=l.apply(null,u);return a=g,0!==c&&ec(c),g="string"===t?(o=a>>>0)?UTF8ArrayToString(GROWABLE_HEAP_U8(),o,void 0):"":"boolean"===t?!!a:a}(e,t,r,arguments,0)}},_.ExitStatus=ExitStatus,_.PThread=q,$=function runCaller(){C||run(),C||($=runCaller)},_.preInit)for("function"==typeof _.preInit&&(_.preInit=[_.preInit]);_.preInit.length>0;)_.preInit.pop()();if(run(),a&&(x={uncaughtException:n.listeners("uncaughtException").filter(function(e){return!a.uncaughtException.indexOf(e)>-1}),unhandledRejection:n.listeners("unhandledRejection").filter(function(e){return!a.unhandledRejection.indexOf(e)>-1})}),"undefined"!=typeof WasmBackendModule)A=WasmBackendModule;else if(void 0!==e)A=e;else throw Error("Could not find wasm module in post.js");if(x){var ep=A._dispose;A._dispose=function(){ep(),x.uncaughtException.forEach(function(e){n.removeListener("uncaughtException",e)}),x.unhandledRejection.forEach(function(e){n.removeListener("unhandledRejection",e)})}}return e.ready});e.exports=o},40691:function(e){e.exports.g=`"use strict";var Module={};var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads");var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",data=>onmessage({data:data}));var fs=require("fs");Object.assign(global,{self:global,require:require,Module:Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(f){(0,eval)(fs.readFileSync(f,"utf8")+"//# sourceURL="+f)},postMessage:function(msg){parentPort.postMessage(msg)},performance:global.performance||{now:function(){return Date.now()}}})}var initializedJS=false;var pendingNotifiedProxyingQueues=[];function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,text+"
");return}console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=(info,receiveInstance)=>{var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onunhandledrejection=e=>{throw e.reason??e};self.startWorker=instance=>{Module=instance;postMessage({"cmd":"loaded"})};self.onmessage=e=>{try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;for(const handler of e.data.handlers){Module[handler]=function(){postMessage({cmd:"callHandler",handler:handler,args:[...arguments]})}}Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob=="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}WasmBackendModuleThreadedSimd(Module)}else if(e.data.cmd==="run"){Module["__emscripten_thread_init"](e.data.pthread_ptr,0,0,1);Module["establishStackSpace"]();Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInitTLS();if(!initializedJS){pendingNotifiedProxyingQueues.forEach(queue=>{Module["executeNotifiedProxyingQueue"](queue)});pendingNotifiedProxyingQueues=[];initializedJS=true}try{Module["invokeEntryPoint"](e.data.start_routine,e.data.arg)}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processProxyingQueue"){if(initializedJS){Module["executeNotifiedProxyingQueue"](e.data.queue)}else{pendingNotifiedProxyingQueues.push(e.data.queue)}}else if(e.data.cmd){err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){if(Module["__emscripten_thread_crashed"]){Module["__emscripten_thread_crashed"]()}throw ex}};`},64656:function(e,t,r){var i,n=r(28070),o=(i=(i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(e){var t,o,a,s,l,u,c,d,p,h,f,y,g,m,v,b,S,P=void 0!==(e=e||{})?e:{};P.ready=new Promise(function(e,t){o=e,a=t}),void 0!==n&&n.listeners&&(s={uncaughtException:n.listeners("uncaughtException"),unhandledRejection:n.listeners("unhandledRejection")});var C=Object.assign({},P),x=[],A="object"==typeof window,_="function"==typeof importScripts,T="object"==typeof n&&"object"==typeof n.versions&&"string"==typeof n.versions.node,w="";if(T){var R=r(67945),E=r(80369);w=_?E.dirname(w)+"/":"//",l=(e,t)=>(e=isFileURI(e)?new URL(e):E.normalize(e),R.readFileSync(e,t?void 0:"utf8")),c=e=>{var t=l(e,!0);return t.buffer||(t=new Uint8Array(t)),t},u=(e,t,r)=>{e=isFileURI(e)?new URL(e):E.normalize(e),R.readFile(e,function(e,i){e?r(e):t(i.buffer)})},n.argv.length>1&&n.argv[1].replace(/\\/g,"/"),x=n.argv.slice(2),n.on("uncaughtException",function(e){if(!(e instanceof ExitStatus))throw e}),n.on("unhandledRejection",function(e){throw e}),P.inspect=function(){return"[Emscripten Module object]"}}else(A||_)&&(_?w=self.location.href:"undefined"!=typeof document&&document.currentScript&&(w=document.currentScript.src),i&&(w=i),w=0!==w.indexOf("blob:")?w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1):"",l=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},_&&(c=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),u=(e,t,r)=>{var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=()=>{if(200==i.status||0==i.status&&i.response){t(i.response);return}r()},i.onerror=r,i.send(null)});var D=P.print||console.log.bind(console),O=P.printErr||console.warn.bind(console);Object.assign(P,C),C=null,P.arguments&&(x=P.arguments),P.thisProgram&&P.thisProgram,P.quit&&P.quit,P.wasmBinary&&(d=P.wasmBinary),P.noExitRuntime,"object"!=typeof WebAssembly&&abort("no native wasm support detected");var I=!1,M="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function UTF8ArrayToString(e,t,r){for(var i=(t>>>=0)+r,n=t;e[n]&&!(n>=i);)++n;if(n-t>16&&e.buffer&&M)return M.decode(e.subarray(t,n));for(var o="";t<n;){var a=e[t++];if(!(128&a)){o+=String.fromCharCode(a);continue}var s=63&e[t++];if((224&a)==192){o+=String.fromCharCode((31&a)<<6|s);continue}var l=63&e[t++];if((a=(240&a)==224?(15&a)<<12|s<<6|l:(7&a)<<18|s<<12|l<<6|63&e[t++])<65536)o+=String.fromCharCode(a);else{var u=a-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}return o}function updateGlobalBufferAndViews(e){h=e,P.HEAP8=f=new Int8Array(e),P.HEAP16=new Int16Array(e),P.HEAP32=new Int32Array(e),P.HEAPU8=y=new Uint8Array(e),P.HEAPU16=new Uint16Array(e),P.HEAPU32=g=new Uint32Array(e),P.HEAPF32=new Float32Array(e),P.HEAPF64=new Float64Array(e)}P.INITIAL_MEMORY;var k=[],L=[],N=[],B=0,F=null,V=null;function abort(e){P.onAbort&&P.onAbort(e),O(e="Aborted("+e+")"),I=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw a(t),t}function isDataURI(e){return e.startsWith("data:application/octet-stream;base64,")}function isFileURI(e){return e.startsWith("file://")}function getBinary(e){try{if(e==m&&d)return new Uint8Array(d);if(c)return c(e);throw"both async and sync fetching of the wasm failed"}catch(e){abort(e)}}function ExitStatus(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function callRuntimeCallbacks(e){for(;e.length>0;)e.shift()(P)}function getHeapMax(){return 4294901760}isDataURI(m="tfjs-backend-wasm.wasm")||(t=m,m=P.locateFile?P.locateFile(t,w):w+t);var j=[null,[],[]],H={abort:function(){abort("")},emscripten_get_heap_max:function(){return getHeapMax()},emscripten_memcpy_big:function(e,t,r){y.copyWithin(e>>>0,t>>>0,t+r>>>0)},emscripten_resize_heap:function(e){var t=y.length;e>>>=0;var r=getHeapMax();if(e>r)return!1;let alignUp=(e,t)=>e+(t-e%t)%t;for(var i=1;i<=4;i*=2){var n=t*(1+.2/i);if(n=Math.min(n,e+100663296),function(e){try{return p.grow(e-h.byteLength+65535>>>16),updateGlobalBufferAndViews(p.buffer),1}catch(e){}}(Math.min(r,alignUp(Math.max(e,n),65536))))return!0}return!1},fd_close:function(e){return 52},fd_seek:function(e,t,r,i,n){return 70},fd_write:function(e,t,r,i){for(var n=0,o=0;o<r;o++){var a=g[t>>>2],s=g[t+4>>>2];t+=8;for(var l=0;l<s;l++)!function(e,t){var r=j[e];0===t||10===t?((1===e?D:O)(UTF8ArrayToString(r,0)),r.length=0):r.push(t)}(e,y[a+l>>>0]);n+=s}return g[i>>>2]=n,0}};(function(){var e={env:H,wasi_snapshot_preview1:H};function receiveInstance(e,t){var r,i=e.exports;P.asm=i,updateGlobalBufferAndViews((p=P.asm.memory).buffer),P.asm.__indirect_function_table,r=P.asm.__wasm_call_ctors,L.unshift(r),function(e){if(B--,P.monitorRunDependencies&&P.monitorRunDependencies(B),0==B&&(null!==F&&(clearInterval(F),F=null),V)){var t=V;V=null,t()}}(0)}function receiveInstantiationResult(e){receiveInstance(e.instance)}function instantiateArrayBuffer(t){return(function(){if(!d&&(A||_)){if("function"==typeof fetch&&!isFileURI(m))return fetch(m,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+m+"'";return e.arrayBuffer()}).catch(function(){return getBinary(m)});if(u)return new Promise(function(e,t){u(m,function(t){e(new Uint8Array(t))},t)})}return Promise.resolve().then(function(){return getBinary(m)})})().then(function(t){return WebAssembly.instantiate(t,e)}).then(function(e){return e}).then(t,function(e){O("failed to asynchronously prepare wasm: "+e),abort(e)})}if(B++,P.monitorRunDependencies&&P.monitorRunDependencies(B),P.instantiateWasm)try{return P.instantiateWasm(e,receiveInstance)}catch(e){O("Module.instantiateWasm callback failed with error: "+e),a(e)}(d||"function"!=typeof WebAssembly.instantiateStreaming||isDataURI(m)||isFileURI(m)||T||"function"!=typeof fetch?instantiateArrayBuffer(receiveInstantiationResult):fetch(m,{credentials:"same-origin"}).then(function(t){return WebAssembly.instantiateStreaming(t,e).then(receiveInstantiationResult,function(e){return O("wasm streaming compile failed: "+e),O("falling back to ArrayBuffer instantiation"),instantiateArrayBuffer(receiveInstantiationResult)})})).catch(a)})(),P.___wasm_call_ctors=function(){return(P.___wasm_call_ctors=P.asm.__wasm_call_ctors).apply(null,arguments)},P._init=function(){return(P._init=P.asm.init).apply(null,arguments)},P._init_with_threads_count=function(){return(P._init_with_threads_count=P.asm.init_with_threads_count).apply(null,arguments)},P._get_threads_count=function(){return(P._get_threads_count=P.asm.get_threads_count).apply(null,arguments)},P._register_tensor=function(){return(P._register_tensor=P.asm.register_tensor).apply(null,arguments)},P._dispose_data=function(){return(P._dispose_data=P.asm.dispose_data).apply(null,arguments)},P._dispose=function(){return(P._dispose=P.asm.dispose).apply(null,arguments)},P._Abs=function(){return(P._Abs=P.asm.Abs).apply(null,arguments)},P._Acos=function(){return(P._Acos=P.asm.Acos).apply(null,arguments)},P._Acosh=function(){return(P._Acosh=P.asm.Acosh).apply(null,arguments)},P._Add=function(){return(P._Add=P.asm.Add).apply(null,arguments)},P._AddN=function(){return(P._AddN=P.asm.AddN).apply(null,arguments)},P._All=function(){return(P._All=P.asm.All).apply(null,arguments)},P._Any=function(){return(P._Any=P.asm.Any).apply(null,arguments)},P._ArgMax=function(){return(P._ArgMax=P.asm.ArgMax).apply(null,arguments)},P._ArgMin=function(){return(P._ArgMin=P.asm.ArgMin).apply(null,arguments)},P._Asin=function(){return(P._Asin=P.asm.Asin).apply(null,arguments)},P._Asinh=function(){return(P._Asinh=P.asm.Asinh).apply(null,arguments)},P._Atan=function(){return(P._Atan=P.asm.Atan).apply(null,arguments)},P._Atan2=function(){return(P._Atan2=P.asm.Atan2).apply(null,arguments)},P._Atanh=function(){return(P._Atanh=P.asm.Atanh).apply(null,arguments)},P._AvgPool=function(){return(P._AvgPool=P.asm.AvgPool).apply(null,arguments)},P._AvgPool3D=function(){return(P._AvgPool3D=P.asm.AvgPool3D).apply(null,arguments)},P._AvgPool3DGrad=function(){return(P._AvgPool3DGrad=P.asm.AvgPool3DGrad).apply(null,arguments)},P._AvgPoolGrad=function(){return(P._AvgPoolGrad=P.asm.AvgPoolGrad).apply(null,arguments)},P._BatchMatMul=function(){return(P._BatchMatMul=P.asm.BatchMatMul).apply(null,arguments)},P._Bincount=function(){return(P._Bincount=P.asm.Bincount).apply(null,arguments)},P._BitwiseAnd=function(){return(P._BitwiseAnd=P.asm.BitwiseAnd).apply(null,arguments)},P._Ceil=function(){return(P._Ceil=P.asm.Ceil).apply(null,arguments)},P._ClipByValue=function(){return(P._ClipByValue=P.asm.ClipByValue).apply(null,arguments)},P._Conv2D=function(){return(P._Conv2D=P.asm.Conv2D).apply(null,arguments)},P._Conv2DBackpropInput=function(){return(P._Conv2DBackpropInput=P.asm.Conv2DBackpropInput).apply(null,arguments)},P._Conv3D=function(){return(P._Conv3D=P.asm.Conv3D).apply(null,arguments)},P._Conv3DBackpropFilterV2=function(){return(P._Conv3DBackpropFilterV2=P.asm.Conv3DBackpropFilterV2).apply(null,arguments)},P._Conv3DBackpropInputV2=function(){return(P._Conv3DBackpropInputV2=P.asm.Conv3DBackpropInputV2).apply(null,arguments)},P._Cos=function(){return(P._Cos=P.asm.Cos).apply(null,arguments)},P._Cosh=function(){return(P._Cosh=P.asm.Cosh).apply(null,arguments)},P._CropAndResize=function(){return(P._CropAndResize=P.asm.CropAndResize).apply(null,arguments)},P._Cumprod=function(){return(P._Cumprod=P.asm.Cumprod).apply(null,arguments)},P._Cumsum=function(){return(P._Cumsum=P.asm.Cumsum).apply(null,arguments)},P._DenseBincount=function(){return(P._DenseBincount=P.asm.DenseBincount).apply(null,arguments)},P._DepthToSpace=function(){return(P._DepthToSpace=P.asm.DepthToSpace).apply(null,arguments)},P._DepthwiseConv2dNative=function(){return(P._DepthwiseConv2dNative=P.asm.DepthwiseConv2dNative).apply(null,arguments)},P._Diag=function(){return(P._Diag=P.asm.Diag).apply(null,arguments)},P._Dilation2D=function(){return(P._Dilation2D=P.asm.Dilation2D).apply(null,arguments)},P._Dilation2DBackpropFilter=function(){return(P._Dilation2DBackpropFilter=P.asm.Dilation2DBackpropFilter).apply(null,arguments)},P._Dilation2DBackpropInput=function(){return(P._Dilation2DBackpropInput=P.asm.Dilation2DBackpropInput).apply(null,arguments)},P._Elu=function(){return(P._Elu=P.asm.Elu).apply(null,arguments)},P._EluGrad=function(){return(P._EluGrad=P.asm.EluGrad).apply(null,arguments)},P._Equal=function(){return(P._Equal=P.asm.Equal).apply(null,arguments)},P._Erf=function(){return(P._Erf=P.asm.Erf).apply(null,arguments)},P._Exp=function(){return(P._Exp=P.asm.Exp).apply(null,arguments)},P._Expm1=function(){return(P._Expm1=P.asm.Expm1).apply(null,arguments)},P._FlipLeftRight=function(){return(P._FlipLeftRight=P.asm.FlipLeftRight).apply(null,arguments)},P._Floor=function(){return(P._Floor=P.asm.Floor).apply(null,arguments)},P._FloorDiv=function(){return(P._FloorDiv=P.asm.FloorDiv).apply(null,arguments)},P._FusedBatchNorm=function(){return(P._FusedBatchNorm=P.asm.FusedBatchNorm).apply(null,arguments)},P._FusedConv2D=function(){return(P._FusedConv2D=P.asm.FusedConv2D).apply(null,arguments)},P._FusedDepthwiseConv2D=function(){return(P._FusedDepthwiseConv2D=P.asm.FusedDepthwiseConv2D).apply(null,arguments)},P._Gather=function(){return(P._Gather=P.asm.Gather).apply(null,arguments)},P._GatherNd=function(){return(P._GatherNd=P.asm.GatherNd).apply(null,arguments)},P._Greater=function(){return(P._Greater=P.asm.Greater).apply(null,arguments)},P._GreaterEqual=function(){return(P._GreaterEqual=P.asm.GreaterEqual).apply(null,arguments)},P._IsFinite=function(){return(P._IsFinite=P.asm.IsFinite).apply(null,arguments)},P._IsInf=function(){return(P._IsInf=P.asm.IsInf).apply(null,arguments)},P._IsNan=function(){return(P._IsNan=P.asm.IsNan).apply(null,arguments)},P._LRN=function(){return(P._LRN=P.asm.LRN).apply(null,arguments)},P._LRNGrad=function(){return(P._LRNGrad=P.asm.LRNGrad).apply(null,arguments)},P._LeakyRelu=function(){return(P._LeakyRelu=P.asm.LeakyRelu).apply(null,arguments)},P._Less=function(){return(P._Less=P.asm.Less).apply(null,arguments)},P._LessEqual=function(){return(P._LessEqual=P.asm.LessEqual).apply(null,arguments)},P._LinSpace=function(){return(P._LinSpace=P.asm.LinSpace).apply(null,arguments)},P._Log=function(){return(P._Log=P.asm.Log).apply(null,arguments)},P._Log1p=function(){return(P._Log1p=P.asm.Log1p).apply(null,arguments)},P._LogicalAnd=function(){return(P._LogicalAnd=P.asm.LogicalAnd).apply(null,arguments)},P._LogicalNot=function(){return(P._LogicalNot=P.asm.LogicalNot).apply(null,arguments)},P._LogicalOr=function(){return(P._LogicalOr=P.asm.LogicalOr).apply(null,arguments)},P._LogicalXor=function(){return(P._LogicalXor=P.asm.LogicalXor).apply(null,arguments)},P._Max=function(){return(P._Max=P.asm.Max).apply(null,arguments)},P._MaxPool=function(){return(P._MaxPool=P.asm.MaxPool).apply(null,arguments)},P._MaxPool3D=function(){return(P._MaxPool3D=P.asm.MaxPool3D).apply(null,arguments)},P._MaxPool3DGrad=function(){return(P._MaxPool3DGrad=P.asm.MaxPool3DGrad).apply(null,arguments)},P._MaxPoolGrad=function(){return(P._MaxPoolGrad=P.asm.MaxPoolGrad).apply(null,arguments)},P._MaxPoolWithArgmax=function(){return(P._MaxPoolWithArgmax=P.asm.MaxPoolWithArgmax).apply(null,arguments)},P._Maximum=function(){return(P._Maximum=P.asm.Maximum).apply(null,arguments)},P._Mean=function(){return(P._Mean=P.asm.Mean).apply(null,arguments)},P._Min=function(){return(P._Min=P.asm.Min).apply(null,arguments)},P._Minimum=function(){return(P._Minimum=P.asm.Minimum).apply(null,arguments)},P._MirrorPad=function(){return(P._MirrorPad=P.asm.MirrorPad).apply(null,arguments)},P._Mod=function(){return(P._Mod=P.asm.Mod).apply(null,arguments)},P._Multinomial=function(){return(P._Multinomial=P.asm.Multinomial).apply(null,arguments)},P._Multiply=function(){return(P._Multiply=P.asm.Multiply).apply(null,arguments)},P._Neg=function(){return(P._Neg=P.asm.Neg).apply(null,arguments)},P._NonMaxSuppressionV3=function(){return(P._NonMaxSuppressionV3=P.asm.NonMaxSuppressionV3).apply(null,arguments)},P._NonMaxSuppressionV4=function(){return(P._NonMaxSuppressionV4=P.asm.NonMaxSuppressionV4).apply(null,arguments)},P._NonMaxSuppressionV5=function(){return(P._NonMaxSuppressionV5=P.asm.NonMaxSuppressionV5).apply(null,arguments)},P._NotEqual=function(){return(P._NotEqual=P.asm.NotEqual).apply(null,arguments)},P._OneHot=function(){return(P._OneHot=P.asm.OneHot).apply(null,arguments)},P._PadV2=function(){return(P._PadV2=P.asm.PadV2).apply(null,arguments)},P._Pow=function(){return(P._Pow=P.asm.Pow).apply(null,arguments)},P._Prelu=function(){return(P._Prelu=P.asm.Prelu).apply(null,arguments)},P._Prod=function(){return(P._Prod=P.asm.Prod).apply(null,arguments)},P._RealDiv=function(){return(P._RealDiv=P.asm.RealDiv).apply(null,arguments)},P._Reciprocal=function(){return(P._Reciprocal=P.asm.Reciprocal).apply(null,arguments)},P._Relu=function(){return(P._Relu=P.asm.Relu).apply(null,arguments)},P._Relu6=function(){return(P._Relu6=P.asm.Relu6).apply(null,arguments)},P._ResizeBilinear=function(){return(P._ResizeBilinear=P.asm.ResizeBilinear).apply(null,arguments)},P._ResizeBilinearGrad=function(){return(P._ResizeBilinearGrad=P.asm.ResizeBilinearGrad).apply(null,arguments)},P._ResizeNearestNeighbor=function(){return(P._ResizeNearestNeighbor=P.asm.ResizeNearestNeighbor).apply(null,arguments)},P._ResizeNearestNeighborGrad=function(){return(P._ResizeNearestNeighborGrad=P.asm.ResizeNearestNeighborGrad).apply(null,arguments)},P._Reverse=function(){return(P._Reverse=P.asm.Reverse).apply(null,arguments)},P._RotateWithOffset=function(){return(P._RotateWithOffset=P.asm.RotateWithOffset).apply(null,arguments)},P._Round=function(){return(P._Round=P.asm.Round).apply(null,arguments)},P._Rsqrt=function(){return(P._Rsqrt=P.asm.Rsqrt).apply(null,arguments)},P._ScatterNd=function(){return(P._ScatterNd=P.asm.ScatterNd).apply(null,arguments)},P._SearchSorted=function(){return(P._SearchSorted=P.asm.SearchSorted).apply(null,arguments)},P._SelectV2=function(){return(P._SelectV2=P.asm.SelectV2).apply(null,arguments)},P._Selu=function(){return(P._Selu=P.asm.Selu).apply(null,arguments)},P._Sigmoid=function(){return(P._Sigmoid=P.asm.Sigmoid).apply(null,arguments)},P._Sign=function(){return(P._Sign=P.asm.Sign).apply(null,arguments)},P._Sin=function(){return(P._Sin=P.asm.Sin).apply(null,arguments)},P._Sinh=function(){return(P._Sinh=P.asm.Sinh).apply(null,arguments)},P._Softmax=function(){return(P._Softmax=P.asm.Softmax).apply(null,arguments)},P._Softplus=function(){return(P._Softplus=P.asm.Softplus).apply(null,arguments)},P._SparseFillEmptyRows=function(){return(P._SparseFillEmptyRows=P.asm.SparseFillEmptyRows).apply(null,arguments)},P._SparseReshape=function(){return(P._SparseReshape=P.asm.SparseReshape).apply(null,arguments)},P._SparseSegmentReduction=function(){return(P._SparseSegmentReduction=P.asm.SparseSegmentReduction).apply(null,arguments)},P._SparseToDense=function(){return(P._SparseToDense=P.asm.SparseToDense).apply(null,arguments)},P._Sqrt=function(){return(P._Sqrt=P.asm.Sqrt).apply(null,arguments)},P._Square=function(){return(P._Square=P.asm.Square).apply(null,arguments)},P._SquaredDifference=function(){return(P._SquaredDifference=P.asm.SquaredDifference).apply(null,arguments)},P._Step=function(){return(P._Step=P.asm.Step).apply(null,arguments)},P._StridedSlice=function(){return(P._StridedSlice=P.asm.StridedSlice).apply(null,arguments)},P._Sub=function(){return(P._Sub=P.asm.Sub).apply(null,arguments)},P._Sum=function(){return(P._Sum=P.asm.Sum).apply(null,arguments)},P._Tan=function(){return(P._Tan=P.asm.Tan).apply(null,arguments)},P._Tanh=function(){return(P._Tanh=P.asm.Tanh).apply(null,arguments)},P._TensorScatterUpdate=function(){return(P._TensorScatterUpdate=P.asm.TensorScatterUpdate).apply(null,arguments)},P._Tile=function(){return(P._Tile=P.asm.Tile).apply(null,arguments)},P._TopK=function(){return(P._TopK=P.asm.TopK).apply(null,arguments)},P._Transform=function(){return(P._Transform=P.asm.Transform).apply(null,arguments)},P._Transpose=function(){return(P._Transpose=P.asm.Transpose).apply(null,arguments)},P.__FusedMatMul=function(){return(P.__FusedMatMul=P.asm._FusedMatMul).apply(null,arguments)},P._malloc=function(){return(P._malloc=P.asm.malloc).apply(null,arguments)},P._free=function(){return(P._free=P.asm.free).apply(null,arguments)},P.___errno_location=function(){return(P.___errno_location=P.asm.__errno_location).apply(null,arguments)};var z=P.stackSave=function(){return(z=P.stackSave=P.asm.stackSave).apply(null,arguments)},U=P.stackRestore=function(){return(U=P.stackRestore=P.asm.stackRestore).apply(null,arguments)},G=P.stackAlloc=function(){return(G=P.stackAlloc=P.asm.stackAlloc).apply(null,arguments)};function run(e){e=e||x,!(B>0)&&(function(){if(P.preRun)for("function"==typeof P.preRun&&(P.preRun=[P.preRun]);P.preRun.length;){var e;e=P.preRun.shift(),k.unshift(e)}callRuntimeCallbacks(k)}(),B>0||(P.setStatus?(P.setStatus("Running..."),setTimeout(function(){setTimeout(function(){P.setStatus("")},1),doRun()},1)):doRun()));function doRun(){!v&&(v=!0,P.calledRun=!0,I||(callRuntimeCallbacks(L),o(P),P.onRuntimeInitialized&&P.onRuntimeInitialized(),function(){if(P.postRun)for("function"==typeof P.postRun&&(P.postRun=[P.postRun]);P.postRun.length;){var e;e=P.postRun.shift(),N.unshift(e)}callRuntimeCallbacks(N)}()))}}if(P.dynCall_iijjiiii=function(){return(P.dynCall_iijjiiii=P.asm.dynCall_iijjiiii).apply(null,arguments)},P.dynCall_jiji=function(){return(P.dynCall_jiji=P.asm.dynCall_jiji).apply(null,arguments)},P.cwrap=function(e,t,r,i){var n=(r=r||[]).every(e=>"number"===e||"boolean"===e);return"string"!==t&&n&&!i?P["_"+e]:function(){return function(e,t,r,i,n){var o,a,s={string:e=>{var t=0;if(null!=e&&0!==e){var r=(e.length<<2)+1;t=G(r),function(e,t,r,i){if(r>>>=0,i>0){for(var n=r+i-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(r>=n)break;t[r++>>>0]=a}else if(a<=2047){if(r+1>=n)break;t[r++>>>0]=192|a>>6,t[r++>>>0]=128|63&a}else if(a<=65535){if(r+2>=n)break;t[r++>>>0]=224|a>>12,t[r++>>>0]=128|a>>6&63,t[r++>>>0]=128|63&a}else{if(r+3>=n)break;t[r++>>>0]=240|a>>18,t[r++>>>0]=128|a>>12&63,t[r++>>>0]=128|a>>6&63,t[r++>>>0]=128|63&a}}t[r>>>0]=0}}(e,y,t,r)}return t},array:e=>{var t=G(e.length);return f.set(e,t>>>0),t}},l=P["_"+e],u=[],c=0;if(i)for(var d=0;d<i.length;d++){var p=s[r[d]];p?(0===c&&(c=z()),u[d]=p(i[d])):u[d]=i[d]}var h=l.apply(null,u);return a=h,0!==c&&U(c),h="string"===t?(o=a>>>0)?UTF8ArrayToString(y,o,void 0):"":"boolean"===t?!!a:a}(e,t,r,arguments,0)}},V=function runCaller(){v||run(),v||(V=runCaller)},P.preInit)for("function"==typeof P.preInit&&(P.preInit=[P.preInit]);P.preInit.length>0;)P.preInit.pop()();if(run(),s&&(b={uncaughtException:n.listeners("uncaughtException").filter(function(e){return!s.uncaughtException.indexOf(e)>-1}),unhandledRejection:n.listeners("unhandledRejection").filter(function(e){return!s.unhandledRejection.indexOf(e)>-1})}),void 0!==e)S=e;else if("undefined"!=typeof WasmBackendModuleThreadedSimd)S=WasmBackendModuleThreadedSimd;else throw Error("Could not find wasm module in post.js");if(b){var W=S._dispose;S._dispose=function(){W(),b.uncaughtException.forEach(function(e){n.removeListener("uncaughtException",e)}),b.unhandledRejection.forEach(function(e){n.removeListener("unhandledRejection",e)})}}return e.ready});e.exports=o},92990:function(e,t,r){"use strict";r.d(t,{jl:function(){return function getWebGLContext(e,t){if(!(e in n)||null!=t){let r=function(e,t){if(1!==e&&2!==e)throw Error("Cannot get WebGL rendering context, WebGL is disabled.");let r=null==t?function(e){if(!(0,i.OBj)().getBool("IS_SAFARI")&&"undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw Error("Cannot create a canvas in this context")}(e):t;return(r.addEventListener("webglcontextlost",t=>{t.preventDefault(),delete n[e]},!1),(0,i.OBj)().getBool("SOFTWARE_WEBGL_ENABLED")&&(o.failIfMajorPerformanceCaveat=!1),1===e)?r.getContext("webgl",o)||r.getContext("experimental-webgl",o):r.getContext("webgl2",o)}(e,t);if(null===r)return console.log("Could not get context for WebGL version",e),null;n[e]=r}let r=n[e];return null==r||r.isContextLost()?(delete n[e],getWebGLContext(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),n[e])}},nd:function(){return setWebGLContext}});var i=r(85964);/**
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
 */let n={},o={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function setWebGLContext(e,t){n[e]=t}},78849:function(e,t,r){"use strict";r.d(t,{_:function(){return DecodeMatrixProgram}});var i=r(98755),n=r(16557),o=r(78303),a=r(87893);/**
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
 */let DecodeMatrixProgram=class DecodeMatrixProgram{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=a.m1.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=(0,i.A)();this.outputShape=e,this.enableShapeUniforms=(0,n.C9)(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?o.Kn(["r","c","d"],e):o.RW(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}},75488:function(e,t,r){"use strict";r.d(t,{G:function(){return DecodeMatrixPackedProgram}});var i=r(98755),n=r(16557),o=r(78303),a=r(87893);/**
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
 */let DecodeMatrixPackedProgram=class DecodeMatrixPackedProgram{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=a.m1.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=(0,i.A)();this.outputShape=e,this.enableShapeUniforms=(0,n.C9)(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?o.Kn(["r","c","d"],e):o.RW(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}},72285:function(e,t,r){"use strict";r.d(t,{q:function(){return EncodeFloatProgram}});var i=r(98755),n=r(78303),o=r(87893);/**
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
 */let EncodeFloatProgram=class EncodeFloatProgram{constructor(e){this.variableNames=["A"],this.outTexUsage=o.v2.DOWNLOAD;let t=(0,i.A)();this.outputShape=e,this.userCode=`
      ${n.ye}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}},42805:function(e,t,r){"use strict";r.d(t,{d:function(){return EncodeFloatPackedProgram}});var i=r(98755),n=r(78303),o=r(87893);/**
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
 */let EncodeFloatPackedProgram=class EncodeFloatPackedProgram{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=o.v2.DOWNLOAD;let t=(0,i.A)();this.outputShape=e,this.userCode=`
      ${n.ye}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}},78182:function(e,t,r){"use strict";r.d(t,{F:function(){return EncodeMatrixProgram}});var i=r(98755),n=r(16557),o=r(78303);/**
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
 */let a={R:0,G:1,B:2,A:3};let EncodeMatrixProgram=class EncodeMatrixProgram{constructor(e,t=!1,r="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let s=(0,i.A)();this.outputShape=e,this.enableShapeUniforms=(0,n.C9)(this.outputShape.length);let l="result";t&&(l="floor(result * 255. + 0.5)");let u="";for(let e=0;e<r.length;e++){let t=r[e];u+=`
          if(offset == ${e}) {
            result = values[${a[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?o.nc():o.ku(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${r.length});

        flatIndex = idiv(flatIndex, ${r.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${s.texture2D}(A, uv);
          ${u}
        }
        ${s.output} = vec4(${l}, 0., 0., 0.);
      }
    `}}},69497:function(e,t,r){"use strict";r.d(t,{Z:function(){return EncodeMatrixPackedProgram}});var i=r(98755),n=r(16557),o=r(78303);/**
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
 */let EncodeMatrixPackedProgram=class EncodeMatrixPackedProgram{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=(0,i.A)();this.outputShape=e,this.enableShapeUniforms=(0,n.C9)(this.outputShape.length);let a="",s="result";t&&(s="floor(result * 255. + 0.5)");for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let n=2*t+i;a+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${r.texture2D}(A, uv);

            if (offset == 0) {
              result[${n}] = values[0];
            } else if (offset == 1) {
              result[${n}] = values[1];
            } else if (offset == 2) {
              result[${n}] = values[2];
            } else {
              result[${n}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?o.nc():o.ku(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${a}

          ${r.output} = ${s};
        }
    `}}},36163:function(e,t,r){"use strict";var i=r(85964),n=r(47147);/**
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
 */let o=(0,i.OBj)();o.registerFlag("HAS_WEBGL",()=>o.getNumber("WEBGL_VERSION")>0),o.registerFlag("WEBGL_VERSION",()=>(0,n.uH)(2)?2:(0,n.uH)(1)?1:0),o.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),o.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>2===o.get("WEBGL_VERSION")),o.registerFlag("WEBGL_CPU_FORWARD",()=>!0),o.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),o.registerFlag("WEBGL_PACK",()=>o.getBool("HAS_WEBGL")),o.registerFlag("WEBGL_PACK_NORMALIZATION",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_CLIP",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_REDUCE",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_LAZILY_UNPACK",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_CONV_IM2COL",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>o.getBool("WEBGL_PACK")),o.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>(0,n.lo)(o.getNumber("WEBGL_VERSION"))),o.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>(0,n.KP)(o.getNumber("WEBGL_VERSION"))),o.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=o.getNumber("WEBGL_VERSION");return 0===e?0:(0,n.nr)(e)}),o.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>o.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!i.C2$.isMobile()),o.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>(0,n.wb)(o.getNumber("WEBGL_VERSION"))),o.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>!o.getBool("WEBGL_FORCE_F16_TEXTURES")&&o.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),o.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>(0,n.BH)(o.getNumber("WEBGL_VERSION"))),o.registerFlag("WEBGL_FENCE_API_ENABLED",()=>(0,n.Qd)(o.getNumber("WEBGL_VERSION"))),o.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>{let e=o.getBool("WEBGL_RENDER_FLOAT32_ENABLED");return e?4:0}),o.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),o.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>i.C2$.isMobile()?1:-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),o.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),o.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),o.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),o.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),o.registerFlag("WEBGL_EXP_CONV",()=>!1),o.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>o.getBool("IS_TEST")),o.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),o.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),o.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),o.registerFlag("ENGINE_COMPILE_ONLY",()=>!1)},98755:function(e,t,r){"use strict";r.d(t,{A:function(){return getGlslDifferences}});var i=r(85964);/**
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
 */function getGlslDifferences(){let e,t,r,n,o,a,s,l,u,c;return 2===(0,i.OBj)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",r="out",n="in",o="texture",a="outputColor",s="out vec4 outputColor;",l=(0,i.OBj)().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",r="varying",n="varying",o="texture2D",a="gl_FragColor",s="",l=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:r,varyingFs:n,texture2D:o,output:a,defineOutput:s,defineSpecialNaN:l,defineSpecialInf:u,defineRound:c}}},59598:function(e,t,r){"use strict";r.d(t,{A:function(){return GPGPUContext}});var i=r(85964),n=r(92990),o=r(29472),a=r(87893),s=r(47147);/**
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
 */let GPGPUContext=class GPGPUContext{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=(0,i.OBj)().getNumber("WEBGL_VERSION");if(null!=e?(this.gl=e,(0,n.nd)(t,e)):this.gl=(0,n.jl)(t),e=this.gl,2===(0,i.OBj)().getNumber("WEBGL_VERSION")){let t=e;this.createVertexArray=()=>s.O7(t,()=>t.createVertexArray()),this.bindVertexArray=e=>s.O7(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>s.O7(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>s.O7(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(null!=e){let t=e.getExtension("OES_vertex_array_object");if(null==t)throw Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>s.O7(e,()=>t.createVertexArrayOES()),this.bindVertexArray=r=>s.O7(e,()=>t.bindVertexArrayOES(r)),this.deleteVertexArray=r=>s.O7(e,()=>t.deleteVertexArrayOES(r)),this.getVertexArray=()=>s.O7(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let r="WEBGL_color_buffer_float",l="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===(0,i.OBj)().getNumber("WEBGL_VERSION")){let e="OES_texture_half_float";if(this.textureFloatExtension=s.HH(this.gl,"OES_texture_float"),s.y_(this.gl,e))this.textureHalfFloatExtension=s.HH(this.gl,e);else if((0,i.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),s.y_(this.gl,l))this.colorBufferHalfFloatExtension=s.HH(this.gl,l);else if((0,i.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",s.y_(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else if(s.y_(this.gl,l))this.colorBufferHalfFloatExtension=this.gl.getExtension(l);else throw Error("GL context does not support color renderable floats");this.vertexBuffer=o.Y3(this.gl),this.indexBuffer=o.Hb(this.gl),this.framebuffer=s.d8(this.gl),this.textureConfig=a.Sq(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,i.OBj)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;s.O7(e,()=>e.finish()),s.O7(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),s.O7(e,()=>e.deleteFramebuffer(this.framebuffer)),s.O7(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),s.O7(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),s.O7(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),o.T2(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),o.iN(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),o.BQ(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),o.Qr(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,r,i){this.throwIfDisposed(),o.Uk(this.gl,e,t,r,i,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),o.Cs(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),o.cU(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(s.ax(this.gl,this.framebuffer),this.outputTexture=null),s.O7(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,r){return this.downloadMatrixDriver(e,()=>o.HC(this.gl,t,r,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,r,i,n,a){return o.AD(this.gl,e,t,r,i,n,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return o.ez(this.gl,e,t)}createBufferFromTexture(e,t,r){this.bindTextureToFrameBuffer(e);let i=o.A8(this.gl,t,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),i}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,r;if((0,i.OBj)().getBool("WEBGL_FENCE_API_ENABLED")){let i=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),r=()=>{let t=e.clientWaitSync(i,0,0);return t===e.ALREADY_SIGNALED||t===e.CONDITION_SATISFIED},t=i}else(0,i.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),r=()=>this.isQueryAvailable(t,(0,i.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):r=()=>!0;return{query:t,isFencePassed:r}}downloadMatrixFromPackedTexture(e,t,r){return this.downloadMatrixDriver(e,()=>o.P1(this.gl,t,r))}createProgram(e){this.throwIfDisposed();let t=this.gl;null==this.vertexShader&&(this.vertexShader=o.Jj(t));let r=s.HO(t);s.O7(t,()=>t.attachShader(r,this.vertexShader)),s.O7(t,()=>t.attachShader(r,e)),s.aj(t,r);let i=Object.assign(r,{vao:this.createVertexArray()});return this.debug&&s.vu(t,i),i}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;s.O7(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),o.Hc(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&(s.O7(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&s.vu(this.gl,this.program),s.O7(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,r=!0){return(this.throwIfDisposed(),r)?s.XE(this.gl,e,t):s.Hg(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),s.O7(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,r){this.throwIfDisposed(),this.throwIfNoProgram(),s.B(this.gl,e,t,r)}setOutputMatrixTexture(e,t,r){this.setOutputMatrixTextureDriver(e,r,t)}setOutputPackedMatrixTexture(e,t,r){this.throwIfDisposed();let[i,n]=a.qe(t,r);this.setOutputMatrixTextureDriver(e,i,n)}setOutputMatrixWriteRegion(e,t,r,i){this.setOutputMatrixWriteRegionDriver(r,e,i,t)}setOutputPackedMatrixWriteRegion(e,t,r,i){throw Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&s.vu(this.gl,this.program),s.cu(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}s.O7(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),s.O7(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=s.HH(this.gl,2===(0,i.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,i.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),r=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,r),r}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===(0,i.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await i.D5U.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,(0,i.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,(0,i.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){let t=this.gl,r=t.getQueryParameter(e,t.QUERY_RESULT);return r/1e6}{let t=this.getQueryTimerExtensionWebGL1(),r=t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT);return r/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){let t=this.gl,r=this.getQueryTimerExtensionWebGL2(),i=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),i&&!this.disjoint}{let t=this.getQueryTimerExtensionWebGL1(),r=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=function(e){let t=0;for(;t<e.length;++t){let r=e[t]();if(!r)break}return t-1}(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){let r;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||("setTimeoutCustom"in(0,i.OBj)().platform&&(r=(0,i.OBj)().platform.setTimeoutCustom.bind((0,i.OBj)().platform)),i.D5U.repeatedTry(()=>(this.pollItems(),0===this.itemsToPoll.length),()=>0,null,r))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),s.JG(this.gl,e,this.framebuffer),this.debug&&s.cu(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(s.JG(this.gl,this.outputTexture,this.framebuffer),this.debug&&s.cu(this.gl)):s.ax(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let r=t();return this.unbindTextureToFrameBuffer(),r}setOutputMatrixTextureDriver(e,t,r){this.throwIfDisposed();let i=this.gl;s.JG(i,e,this.framebuffer),this.debug&&s.cu(i),this.outputTexture=e,s.O7(i,()=>i.viewport(0,0,t,r)),s.O7(i,()=>i.scissor(0,0,t,r))}setOutputMatrixWriteRegionDriver(e,t,r,i){this.throwIfDisposed(),s.O7(this.gl,()=>this.gl.scissor(e,t,r,i))}throwIfDisposed(){if(this.disposed)throw Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw Error("No GPU program is currently set.")}}},16557:function(e,t,r){"use strict";r.d(t,{C9:function(){return useShapeUniforms},IJ:function(){return compileProgram},Yv:function(){return getUniformLocations},_s:function(){return runProgram},mi:function(){return makeShaderKey}});var i=r(85964),n=r(95891),o=r(47147);/**
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
 */function compileProgram(e,t,r,a){let s=r.map((e,r)=>{let i={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(i.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[r],shapeInfo:i}}),l=s.map(e=>e.shapeInfo),u={logicalShape:a.shape,texShape:a.texData.texShape,isUniform:!1,isPacked:a.texData.isPacked,flatOffset:null},c=n.Vm(s,u,t),d=(0,o.xc)(e.gl,c),p=e.createProgram(d);return(0,i.OBj)().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:d,source:c,webGLProgram:p,inShapeInfos:l,outShapeInfo:u,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(p),Object.assign({program:t,fragmentShader:d,source:c,webGLProgram:p,inShapeInfos:l,outShapeInfo:u},getUniformLocations(e,t,p)))}function getUniformLocations(e,t,r){let n,o,a;let s=[],l=[],u=null,c=null;for(let n of(c=e.getUniformLocation(r,"NAN",!1),1===(0,i.OBj)().getNumber("WEBGL_VERSION")&&(u=e.getUniformLocation(r,"INFINITY",!1)),t.variableNames)){let i={name:n,uniform:e.getUniformLocation(r,n,!1),offset:e.getUniformLocation(r,`offset${n}`,!1)};t.enableShapeUniforms&&(i.shape=e.getUniformLocation(r,`${n}Shape`,!1),i.texShape=e.getUniformLocation(r,`${n}TexShape`,!1)),s.push(i)}if(t.enableShapeUniforms&&(n=e.getUniformLocation(r,"outShape",!1),a=e.getUniformLocation(r,"outShapeStrides",!1),o=e.getUniformLocation(r,"outTexShape",!1)),t.customUniforms)for(let i of t.customUniforms)l.push(e.getUniformLocation(r,i.name,!1));return{variablesLocations:s,customUniformLocations:l,infLoc:u,nanLoc:c,outShapeLocation:n,outShapeStridesLocation:a,outTexShapeLocation:o}}function validateBinaryAndProgram(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,r)=>{let n=e.logicalShape,o=t[r],a=o.shape;if(!i.D5U.arraysEqual(n,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${a} must match`);if(e.isUniform&&o.isUniform)return;let s=e.texShape,l=o.isUniform?null:o.texData.texShape;if(!i.D5U.arraysEqual(s,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${s} and ${l} must match`)})}function runProgram(e,t,r,o,a){t.program.enableShapeUniforms||(validateBinaryAndProgram(t.inShapeInfos,r),validateBinaryAndProgram([t.outShapeInfo],[o]));let s=o.texData.texture,l=o.texData.texShape;o.texData.isPacked?e.setOutputPackedMatrixTexture(s.texture,l[0],l[1]):e.setOutputMatrixTexture(s.texture,l[0],l[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),1===(0,i.OBj)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN);for(let o=0;o<r.length;++o){let a=r[o],{uniform:s,offset:l,shape:u,texShape:c}=t.variablesLocations[o];if(u){let{uniformShape:r}=n.Tt(t.program.packedInputs,a.shape,a.texData.texShape);switch(r.length){case 1:e.gl.uniform1iv(u,new Int32Array(r));break;case 2:e.gl.uniform2iv(u,new Int32Array(r));break;case 3:e.gl.uniform3iv(u,new Int32Array(r));break;case 4:e.gl.uniform4iv(u,new Int32Array(r))}}if(c&&e.gl.uniform2i(c,a.texData.texShape[0],a.texData.texShape[1]),null!=s){if(a.isUniform){if(2>i.D5U.sizeFromShape(a.shape))e.gl.uniform1f(s,a.uniformValues[0]);else{let t=a.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(s,t)}continue}null!=a.texData.slice&&null!=l&&e.gl.uniform1i(l,a.texData.slice.flatOffset),e.setInputMatrixTexture(a.texData.texture.texture,s,o)}}let u=t.outShapeLocation;if(u)switch(o.shape.length){case 1:e.gl.uniform1iv(u,new Int32Array(o.shape));break;case 2:e.gl.uniform2iv(u,new Int32Array(o.shape));break;case 3:e.gl.uniform3iv(u,new Int32Array(o.shape));break;case 4:e.gl.uniform4iv(u,new Int32Array(o.shape))}if(t.outShapeStridesLocation){let r=i.D5U.computeStrides(o.shape);switch(o.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(r));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(r));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(r))}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),t.program.customUniforms&&a)for(let r=0;r<t.program.customUniforms.length;++r){let i=t.program.customUniforms[r],n=t.customUniformLocations[r],o=a[r];if("float"===i.type)e.gl.uniform1fv(n,o);else if("vec2"===i.type)e.gl.uniform2fv(n,o);else if("vec3"===i.type)e.gl.uniform3fv(n,o);else if("vec4"===i.type)e.gl.uniform4fv(n,o);else if("int"===i.type)e.gl.uniform1iv(n,o);else if("ivec2"===i.type)e.gl.uniform2iv(n,o);else if("ivec3"===i.type)e.gl.uniform3iv(n,o);else if("ivec4"===i.type)e.gl.uniform4iv(n,o);else throw Error(`uniform type ${i.type} is not supported yet.`)}e.executeProgram()}function makeShaderKey(e,t,r){let o="";t.concat(r).forEach(t=>{let a=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let s=t.texData.texShape,{useSqueezeShape:l,uniformShape:u,keptDims:c}=n.Tt(e.packedInputs,t.shape,s),d="",p="",h="";if(1===u.length&&e.packedInputs){let e=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];d=`${e[0]>1}_${e[1]>1}`}else if(2!==u.length||e.packedInputs){if(u.length>2&&!e.packedInputs){let e=i.D5U.computeStrides(u);h=`${e[0]===s[1]}_${e[e.length-1]===s[1]}`}}else p=`${u[0]>1}_${u[1]>1}`;let f=t.shape.length,y=2===u.length&&i.D5U.arraysEqual(t.shape,s),g=1===i.D5U.sizeFromShape(t.shape),m=i.backend_util.getBroadcastDims(t.shape,r.shape),v=!e.packedInputs&&f===r.shape.length&&i.D5U.arraysEqual(s,r.texData.texShape),b=e.packedInputs||u.length>2?"":`${s[0]>1}_${s[1]>1}`;o+=`${f}_${v}_${l?c:""}_${u.length}_${g}_${m}_${y}_${d}_${p}_${h}_${b}_${a}`}else{let e=t.isUniform?"uniform":t.texData.texShape;o+=`${t.shape}_${e}_${a}`}});let a=e.userCode;return e.constructor.name+("_"+o+"_"+a)+`${(0,i.OBj)().getNumber("WEBGL_VERSION")}`}function useShapeUniforms(e){return(0,i.OBj)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}},29472:function(e,t,r){"use strict";r.d(t,{A8:function(){return createBufferFromOutputTexture},AD:function(){return downloadPackedMatrixFromBuffer},BQ:function(){return createUnsignedBytesMatrixTexture},Cs:function(){return createFloat16PackedMatrixTexture},HC:function(){return downloadByteEncodedFloatMatrixFromOutputTexture},Hb:function(){return createIndexBuffer},Hc:function(){return bindVertexProgramAttributeStreams},Jj:function(){return createVertexShader},NQ:function(){return getInternalFormatForUnsignedBytesMatrixTexture},P1:function(){return downloadMatrixFromPackedOutputTexture},Qr:function(){return uploadPixelDataToTexture},T2:function(){return createFloat32MatrixTexture},Uk:function(){return uploadDenseMatrixToTexture},Y3:function(){return createVertexBuffer},cU:function(){return createPackedMatrixTexture},ez:function(){return downloadFloat32MatrixFromBuffer},gl:function(){return getInternalFormatForPackedMatrixTexture},hf:function(){return getInternalFormatForFloat16PackedMatrixTexture},iN:function(){return createFloat16MatrixTexture},m8:function(){return getInternalFormatForFloat16MatrixTexture},q3:function(){return getInternalFormatForFloat32MatrixTexture}});var i=r(85964),n=r(98755),o=r(87893),a=r(47147);/**
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
 */function createVertexShader(e){let t=(0,n.A)(),r=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return a.Jj(e,r)}function createVertexBuffer(e){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return a.ED(e,t)}function createIndexBuffer(e){let t=new Uint16Array([0,1,2,2,1,3]);return a.mZ(e,t)}function createAndConfigureTexture(e,t,r,n,o,s){a.b6(t,r);let l=a.cU(e),u=e.TEXTURE_2D;return a.O7(e,()=>e.bindTexture(u,l)),a.O7(e,()=>e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),a.O7(e,()=>e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),a.O7(e,()=>e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST)),a.O7(e,()=>e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST)),1===(0,i.OBj)().getNumber("WEBGL_VERSION")?a.O7(e,()=>e.texImage2D(u,0,n,t,r,0,o,s,null)):a.O7(e,()=>e.texStorage2D(u,1,n,t,r)),a.O7(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:l,texShape:[r,t]}}function getInternalFormatForFloat32MatrixTexture(e){return e.internalFormatFloat}function createFloat32MatrixTexture(e,t,r,i){let[n,a]=o.kk(t,r);return createAndConfigureTexture(e,n,a,getInternalFormatForFloat32MatrixTexture(i),i.textureFormatFloat,e.FLOAT)}function getInternalFormatForFloat16MatrixTexture(e){return e.internalFormatHalfFloat}function createFloat16MatrixTexture(e,t,r,i){let[n,a]=o.kk(t,r);return createAndConfigureTexture(e,n,a,getInternalFormatForFloat16MatrixTexture(i),i.textureFormatFloat,i.textureTypeHalfFloat)}function getInternalFormatForUnsignedBytesMatrixTexture(e){return e.downloadTextureFormat}function createUnsignedBytesMatrixTexture(e,t,r,i){let[n,a]=o.kk(t,r);return createAndConfigureTexture(e,n,a,getInternalFormatForUnsignedBytesMatrixTexture(i),e.RGBA,e.UNSIGNED_BYTE)}function getInternalFormatForPackedMatrixTexture(e){return e.internalFormatPackedFloat}function createPackedMatrixTexture(e,t,r,i){let[n,a]=o.qe(t,r);return createAndConfigureTexture(e,n,a,getInternalFormatForPackedMatrixTexture(i),e.RGBA,e.FLOAT)}function getInternalFormatForFloat16PackedMatrixTexture(e){return e.internalFormatPackedHalfFloat}function createFloat16PackedMatrixTexture(e,t,r,i){let[n,a]=o.qe(t,r);return createAndConfigureTexture(e,n,a,getInternalFormatForFloat16PackedMatrixTexture(i),e.RGBA,i.textureTypeHalfFloat)}function bindVertexProgramAttributeStreams(e,t,r){a.O7(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r));let i=a.sb(e,t,"clipSpacePos",r,3,20,0);return i&&a.sb(e,t,"uv",r,2,20,12)}function uploadDenseMatrixToTexture(e,t,r,n,o,s){let l,u,c;a.O7(e,()=>e.bindTexture(e.TEXTURE_2D,t)),o instanceof Uint8Array?(l=new Uint8Array(r*n*4),u=e.UNSIGNED_BYTE,c=e.RGBA):(l=new Float32Array(r*n*4),u=e.FLOAT,c=s.internalFormatPackedFloat),l.set(o),2===(0,i.OBj)().getNumber("WEBGL_VERSION")?a.O7(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,n,e.RGBA,u,l)):a.O7(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,r,n,0,e.RGBA,u,l)),a.O7(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function uploadPixelDataToTexture(e,t,r){a.O7(e,()=>e.bindTexture(e.TEXTURE_2D,t)),r.data instanceof Uint8Array?2===(0,i.OBj)().getNumber("WEBGL_VERSION")?a.O7(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,e.RGBA,e.UNSIGNED_BYTE,r.data)):a.O7(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)):2===(0,i.OBj)().getNumber("WEBGL_VERSION")?a.O7(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,r)):a.O7(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)),a.O7(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function createBufferFromOutputTexture(e,t,r,i){let n=e.createBuffer();a.O7(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,n));let o=16*t*r;return a.O7(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,o,e.STREAM_READ)),a.O7(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0)),a.O7(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),n}function downloadFloat32MatrixFromBuffer(e,t,r){let i=new Float32Array(r);return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,i),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),i}function downloadByteEncodedFloatMatrixFromOutputTexture(e,t,r,i){let[n,s]=o.kk(t,r),l=new Uint8Array(o.yb(t*r,4));return a.O7(e,()=>e.readPixels(0,0,n,s,i.downloadTextureFormat,e.UNSIGNED_BYTE,l)),new Float32Array(l.buffer)}function downloadPackedMatrixFromBuffer(e,t,r,i,n,a,s,l){let u=new Float32Array(o.Se(a,s));return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,u),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),u}function downloadMatrixFromPackedOutputTexture(e,t,r){let i=new Float32Array(t*r*4);return a.O7(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,i)),i}},27339:function(e,t,r){"use strict";let i;var n,o,a=r(85964),s=r(92744);/**
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
 */a.C2$.isBrowser()&&(0,a.jqO)("webgl",()=>new s.QC,2);var l=r(16557);/**
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
 */let u=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;let BinaryOpProgram=class BinaryOpProgram{constructor(e,t,r){this.variableNames=["A","B"],this.outputShape=a.backend_util.assertAndGetBroadcastShape(t,r),this.enableShapeUniforms=(0,l.C9)(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var c=r(27963),d=r(95891);/**
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
 */let p=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;let BinaryOpPackedProgram=class BinaryOpPackedProgram{constructor(e,t,r,i=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a.backend_util.assertAndGetBroadcastShape(t,r);let n=this.outputShape.length;this.enableShapeUniforms=(0,l.C9)(n);let o="";if(i){if(0===n||1===a.D5U.sizeFromShape(this.outputShape))o=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else{let e=(0,d.kW)(n);if(o=`
          ${e} coords = getOutputCoords();
        `,1===n)this.enableShapeUniforms?o+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:o+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=(0,c.Ky)("coords",n);this.enableShapeUniforms?o+=`
            bool nextRowOutOfBounds =
              (${e[n-2]} + 1) >= outShape[${n} - 2];
            bool nextColOutOfBounds =
              (${e[n-1]} + 1) >= outShape[${n} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:o+=`
            bool nextRowOutOfBounds =
              (${e[n-2]} + 1) >= ${this.outputShape[n-2]};
            bool nextColOutOfBounds =
              (${e[n-1]} + 1) >= ${this.outputShape[n-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${o}

        setOutput(result);
      }
    `}};/**
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
 */function identity(e){let{inputs:t,backend:r}=e,{x:i}=t;return r.incRef(i.dataId),{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}let h={kernelName:a.iJz,backendName:"webgl",kernelFunc:identity};/**
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
 */function complex(e){let{inputs:t,backend:r}=e,{real:i,imag:n}=t,o=r.makeTensorInfo(i.shape,"complex64"),a=r.texData.get(o.dataId),s=identity({inputs:{x:i},backend:r}),l=identity({inputs:{x:n},backend:r});return a.complexTensorInfos={real:s,imag:l},o}let f={kernelName:a.Zz9,backendName:"webgl",kernelFunc:complex},y="return (a < 0.) ? b * a : a;",g=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,m={kernelName:a.J$2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{alpha:o}=i,s=r.makeTensorInfo([],"float32",a.D5U.createScalarValue(o,"float32")),l=(0,a.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new BinaryOpPackedProgram(g,n.shape,s.shape):new BinaryOpProgram(y,n.shape,s.shape),u=r.runWebGLProgram(l,[n,s],"float32");return r.disposeIntermediateTensorInfo(s),u}},v="return (a < 0.) ? b * a : a;",b=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,S={kernelName:a.o0g,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:i,alpha:n}=t,o=(0,a.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new BinaryOpPackedProgram(b,i.shape,n.shape):new BinaryOpProgram(v,i.shape,n.shape);return r.runWebGLProgram(o,[i,n],"float32")}};var P=r(62266),C=r(68562);/**
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
 */let x="if (isnan(x)) return x;";function unaryKernelFunc({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:r,dtype:i}){return({inputs:n,backend:o})=>{let s;let{x:l}=n,u=i||l.dtype;if(o.shouldExecuteOnCPU([l])&&null!=r){let e=o.texData.get(l.dataId),t=r(e.values,u);return o.makeTensorInfo(l.shape,u,t)}let c=(0,a.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t;return s=c?new C.cc(l.shape,t):new P.l(l.shape,e),o.runWebGLProgram(s,[l],u)}}function binaryKernelFunc({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:r=!1,supportsComplex:i=!1,cpuKernelImpl:n,dtype:o}){return({inputs:s,backend:l})=>{let u;let{a:c,b:d}=s;if(i&&"complex64"===c.dtype){let t=l.texData.get(c.dataId),r=l.texData.get(d.dataId),[i,n]=[[t.complexTensorInfos.real,r.complexTensorInfos.real],[t.complexTensorInfos.imag,r.complexTensorInfos.imag]].map(t=>{let[r,i]=t,n={dataId:r.dataId,dtype:r.dtype,shape:c.shape},o={dataId:i.dataId,dtype:i.dtype,shape:d.shape},s=new BinaryOpProgram(e,c.shape,d.shape);return l.runWebGLProgram(s,[n,o],(0,a.x8V)(r.dtype,i.dtype))}),o=complex({inputs:{real:i,imag:n},backend:l});return l.disposeIntermediateTensorInfo(i),l.disposeIntermediateTensorInfo(n),o}let p=o||(0,a.x8V)(c.dtype,d.dtype);if(("string"===c.dtype||"string"===d.dtype||l.shouldExecuteOnCPU([c,d]))&&null!=n){let e=l.texData.get(c.dataId).values,t=l.texData.get(d.dataId).values,r="string"===c.dtype?a.backend_util.fromUint8ToStringArray(e):e,i="string"===c.dtype?a.backend_util.fromUint8ToStringArray(t):t,[o,s]=n(c.shape,d.shape,r,i,p),u=l.makeTensorInfo(s,p),h=l.texData.get(u.dataId);return h.values=o,u}let h=(0,a.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t;return u=h?new BinaryOpPackedProgram(t,c.shape,d.shape,r):new BinaryOpProgram(e,c.shape,d.shape),l.runWebGLProgram(u,[c,d],p)}}function mapActivationToShaderProgram(e,t=!1){if("linear"===e)return t?C.t$:P.t$;if("relu"===e)return t?C.RX:P.RX;if("elu"===e)return t?C.Cv:P.Cv;if("relu6"===e)return t?C.eW:P.eW;if("prelu"===e)return t?b:v;if("leakyrelu"===e)return t?g:y;if("sigmoid"===e)return t?C.Tq:P.Tq;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}/**
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
 */let MatMulPackedProgram=class MatMulPackedProgram{constructor(e,t,r,i=!1,n=!1,o=!1,a=null,s=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.enableShapeUniforms=(0,l.C9)(this.outputShape.length);let c=i?e[1]:e[2],d=Math.ceil(c/2),p=i?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],f="",y="";a&&(f=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:u?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:`vec4 activation(vec4 x) {
          ${a}
        }`,y="result = activation(result);"),o&&this.variableNames.push("bias"),s&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let g="rc.x",m="rc.x";e[0]<t[0]?g=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(m=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${f}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${g};
        int batchB = ${m};
        for (int i = 0; i < ${d}; i++) {
          vec4 a = getMatrixA(batchA, ${i?"i * 2, rc.y":"rc.y, i * 2"});
          vec4 b = getMatrixB(batchB, ${n?"rc.z, i * 2":"i * 2, rc.z"});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${h[0]});
          result += (${p[1]} * ${h[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${o?"result += getBiasAtOutCoords();":""}

        ${y}

        setOutput(result);
      }
    `}};/**
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
 */let A={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};let BinaryOpComplexProgram=class BinaryOpComplexProgram{constructor(e,t,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=a.backend_util.assertAndGetBroadcastShape(t,r),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};var _=r(64197);/**
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
 */let T="return a * b;";function multiply(e){let t;let{inputs:r,backend:i}=e,{a:n,b:o}=r,s=a.backend_util.upcastType(n.dtype,o.dtype);if("complex64"===n.dtype){let e=i.texData.get(n.dataId),t=i.texData.get(o.dataId),r=new BinaryOpComplexProgram(A.REAL,n.shape,o.shape),a=new BinaryOpComplexProgram(A.IMAG,n.shape,o.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:n.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:n.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:o.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:o.shape}],l=i.runWebGLProgram(r,s,"float32"),u=i.runWebGLProgram(a,s,"float32"),c=complex({inputs:{real:l,imag:u},backend:i});return i.disposeIntermediateTensorInfo(l),i.disposeIntermediateTensorInfo(u),c}if(i.shouldExecuteOnCPU([n,o])){let e=i.texData.get(n.dataId),t=i.texData.get(o.dataId),[r,a]=(0,_.Th)(n.shape,o.shape,e.values,t.values,s),l=i.makeTensorInfo(a,s),u=i.texData.get(l.dataId);return u.values=r,l}return t=(0,a.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new BinaryOpPackedProgram(T,n.shape,o.shape):new BinaryOpProgram(T,n.shape,o.shape),i.runWebGLProgram(t,[n,o],s)}let w={kernelName:a.wYn,backendName:"webgl",kernelFunc:multiply};var R=r(88893),E=r(47147);/**
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
 */function reshape(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{shape:o}=i,s=a.D5U.sizeFromShape(n.shape),l=a.D5U.inferFromImplicitShape(o,s),u=a.D5U.sizeFromShape(l);a.D5U.assert(s===u,()=>`The new shape (${l}) has ${u} elements and the old shape (${n.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let c=r.texData.get(n.dataId);return!c.isPacked||(0,E.oT)(n.shape,l)||null!==c.texture&&(0,E.oT)(c.shape,l)?(r.incRef(n.dataId),{dataId:n.dataId,shape:l,dtype:n.dtype}):/**
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
 */function(e,t,r){let i=[(0,E.Cp)(e.shape),...(0,E.W8)(e.shape)],n={dtype:e.dtype,shape:i,dataId:e.dataId},o=[(0,E.Cp)(t),...(0,E.W8)(t)],a=new R.v(o,i),s=[i],l=r.runWebGLProgram(a,[n],e.dtype,s,!0);return{dataId:l.dataId,shape:t,dtype:l.dtype}}(n,l,r)}let D={kernelName:a.HZH,backendName:"webgl",kernelFunc:reshape};/**
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
 */let MeanProgram=class MeanProgram{constructor(e,t){this.variableNames=["x"];let{windowSize:r,batchSize:i,inSize:n,outSize:o}=e;this.outputShape=[i,o];let s=4*Math.floor(r/4),l=r%4,u="sumValue += dot(values, ones);";if(null!=t){let e=1/t;u=`sumValue += dot(values * ${a.D5U.isInt(e)?e.toPrecision(2):e}, ones);`}let c="";n%r>0&&(c=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${u}
        }

        int inIdx = inOffset + ${s};
        if (${1===l}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${u}
        } else if (${2===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${u}
        } else if (${3===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${u}
        }
        setOutput(sumValue);
      }
    `}};/**
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
 */let ReduceProgram=class ReduceProgram{constructor(e,t){this.variableNames=["x"];let{windowSize:r,batchSize:i,inSize:n,outSize:o}=e;this.outputShape=[i,o];let a="0.0",s="";"prod"===t?a="1.0":"min"===t?(a="1.0 / 1e-20",s="min"):"max"===t&&(a="-1.0 / 1e-20",s="max");let l=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?l="sumValue":"prod"===t?l="prodValue":"all"===t?l="allValue":"any"===t&&(l="anyValue");let u=4*Math.floor(r/4),c=r%4,d=`
      if (${"sum"===t}) {
        sumValue += dot(values, ones);
      } else if (${"prod"===t}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${"min"===t} || ${"max"===t}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,p="vec4";"all"===t?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):"any"===t&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");let h="";n%r>0&&(h=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${1===c}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${2===c}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${3===c}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${l});
      }
    `}};function reduce(e,t,r,i){let n=/**
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
 */function(e){let t=[];for(;0===t.length||1!==t[t.length-1].outSize;){let r=t.length?t[t.length-1].outSize:e[1],i=a.backend_util.computeOptimalWindowSize(r);t.push({inSize:r,windowSize:i,outSize:Math.ceil(r/i)})}return t}(e.shape),o=e;for(let a=0;a<n.length;a++){let s,l;let{inSize:u,windowSize:c,outSize:d}=n[a];s="mean"===r?0===a?new MeanProgram({windowSize:c,inSize:u,batchSize:e.shape[0],outSize:d},u):new MeanProgram({windowSize:c,inSize:u,batchSize:e.shape[0],outSize:d}):new ReduceProgram({windowSize:c,inSize:u,batchSize:e.shape[0],outSize:d},r),l=o,o=i.runWebGLProgram(s,[o],t),l.dataId!==e.dataId&&i.disposeIntermediateTensorInfo(l)}return o}/**
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
 */let TransposeProgram=class TransposeProgram{constructor(e,t){this.variableNames=["A"];let r=Array(e.length);for(let i=0;i<r.length;i++)r[i]=e[t[i]];this.outputShape=r,this.rank=r.length;let i=(0,d.kW)(this.rank),n=function(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],i=Array(t);for(let t=0;t<e.length;t++)i[e[t]]=r[t];return i.join()}(t);this.userCode=`
    void main() {
      ${i} resRC = getOutputCoords();
      setOutput(getA(${n}));
    }
    `}};/**
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
 */let TransposePackedProgram=class TransposePackedProgram{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let r=Array(e.length);for(let i=0;i<r.length;i++)r[i]=e[t[i]];if(this.outputShape=r,this.rank=r.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let i=(0,d.kW)(this.rank),n=(0,c.k6)("rc",this.rank),o=Array(this.rank);for(let e=0;e<t.length;e++)o[t[e]]=n[e];let a=`vec2(${o.slice(-2).join()})`,s=`++${n[this.rank-1]} < ${r[this.rank-1]}`,l=`getChannel(getA(${o.join()}), ${a})`;this.userCode=`
    void main() {
      ${i} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${s}) {
        result[1] = ${l};
      }
      --${n[this.rank-1]};
      if(++${n[this.rank-2]} < ${r[this.rank-2]}) {
        result[2] = ${l};
        if(${s}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}};/**
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
 */function transposeImpl(e,t,r){let i=(0,a.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new TransposePackedProgram(e.shape,t):new TransposeProgram(e.shape,t);return r.runWebGLProgram(i,[e],e.dtype)}/**
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
 */function sum(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{axis:o,keepDims:s}=i;return(/**
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
 */function(e,t,r,i){let n=e.shape.length,o=a.D5U.parseAxisParam(t,e.shape),s=o,l=a.backend_util.getAxesPermutation(s,n),u=null!=l,c=e;u&&(c=transposeImpl(e,l,i),s=a.backend_util.getInnerMostAxes(s.length,n)),a.backend_util.assertAxesAreInnerMostDims("sum",s,n);let[d,p]=a.backend_util.computeOutAndReduceShapes(c.shape,s),h=d;r&&(h=a.backend_util.expandShapeToKeepDim(d,o));let f=a.D5U.sizeFromShape(p),y=a.D5U.sizeFromShape(e.shape),g=y/f,m=reshape({inputs:{x:c},attrs:{shape:[g,f]},backend:i}),v=(0,a.z4k)(e.dtype),b=reduce(m,v,"sum",i),S=reshape({inputs:{x:b},attrs:{shape:h},backend:i});return i.disposeIntermediateTensorInfo(m),i.disposeIntermediateTensorInfo(b),u&&i.disposeIntermediateTensorInfo(c),S}(n,o,s,r))}let O={kernelName:a.GBy,backendName:"webgl",kernelFunc:sum};/**
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
 */function transpose(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{perm:a}=n,s=o.shape.length,l=Array(s);for(let e=0;e<l.length;e++)l[e]=o.shape[a[e]];if(i.shouldExecuteOnCPU([o])){let e=i.texData.get(o.dataId),r=e.values,n=(0,_.Fv)(r,o.shape,o.dtype,a,l);t=i.makeTensorInfo(l,o.dtype);let s=i.texData.get(t.dataId);s.values=n}else t=transposeImpl(o,a,i);return t}let I={kernelName:a.G3Y,backendName:"webgl",kernelFunc:transpose};function batchMatMulImpl({a:e,b:t,transposeA:r,transposeB:i,backend:n,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:l=0,activation:u=null}){let c;let d=e.shape.length,p=t.shape.length,h=r?e.shape[d-2]:e.shape[d-1],f=i?t.shape[p-1]:t.shape[p-2],y=r?e.shape[d-1]:e.shape[d-2],g=i?t.shape[p-2]:t.shape[p-1],m=e.shape.slice(0,-2),v=t.shape.slice(0,-2),b=a.D5U.sizeFromShape(m),S=a.D5U.sizeFromShape(v),P=a.Jyw.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)),C=P.concat([y,g]);a.D5U.assert(h===f,()=>`Error in matMul: inner shapes (${h}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${r} and transposeB=${i} must match.`);let x=r?[b,h,y]:[b,y,h],A=i?[S,g,f]:[S,f,g],_=reshape({inputs:{x:e},backend:n,attrs:{shape:x}}),T=reshape({inputs:{x:t},backend:n,attrs:{shape:A}}),w=[_,T],R=Math.max(b,S),E=r?_.shape[1]:_.shape[2],D=null!=o,O=null!=s,I="leakyrelu"===u,M=null!=u?mapActivationToShaderProgram(u,!0):null,k=D||O||I||null!=M;if((1===y||1===g)&&E>1e3&&!1===k){let e=_,t=T;r&&(e=transpose({inputs:{x:_},backend:n,attrs:{perm:[0,2,1]}}),w.push(e)),i&&(t=transpose({inputs:{x:T},backend:n,attrs:{perm:[0,2,1]}}),w.push(t));let o=1!==g,a=1===g,s=e;o&&(s=reshape({inputs:{x:e},backend:n,attrs:{shape:[R,E,1]}}),w.push(s));let l=1===g?2:1,u=t;a&&(u=reshape({inputs:{x:t},backend:n,attrs:{shape:[R,1,E]}}),w.push(u));let d=multiply({inputs:{a:s,b:u},backend:n});c=sum({inputs:{x:d},backend:n,attrs:{axis:l,keepDims:!0}}),w.push(d)}else{let u=(0,a.x8V)(e.dtype,t.dtype),d=new MatMulPackedProgram(x,A,[R,y,g],r,i,D,M,O,I),p=[_,T];if(null!=o&&p.push(o),O&&p.push(s),I){let e=n.makeTensorInfo([],"float32",a.D5U.createScalarValue(l,"float32"));p.push(e),w.push(e)}c=n.runWebGLProgram(d,p,u)}let L=reshape({inputs:{x:c},backend:n,attrs:{shape:C}});for(let e of(w.push(c),w))n.disposeIntermediateTensorInfo(e);return L}let M={kernelName:a.usg,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{a:n,b:o,bias:a,preluActivationWeights:s}=t,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:d}=i;return batchMatMulImpl({a:n,b:o,transposeA:l,transposeB:u,backend:r,bias:a,preluActivationWeights:s,leakyreluAlpha:d,activation:c})}},k="return abs(x);",L={kernelName:a.SYM,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:r,backend:i}=e,{x:n}=r;if(i.shouldExecuteOnCPU([n])&&"complex64"!==n.dtype){let e=i.texData.get(n.dataId),t=(0,_.CJ)(e.values);return i.makeTensorInfo(n.shape,n.dtype,t)}return t=(0,a.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new C.cc(n.shape,k):new P.l(n.shape,k),i.runWebGLProgram(t,[n],n.dtype)}},N=P.D1+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,B=unaryKernelFunc({opSnippet:N}),F={kernelName:a.VGw,backendName:"webgl",kernelFunc:B},V=P.D1+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,j=unaryKernelFunc({opSnippet:V}),H={kernelName:a.SpW,backendName:"webgl",kernelFunc:j},z="return a + b;",U=binaryKernelFunc({opSnippet:z,packedOpSnippet:z,supportsComplex:!0,cpuKernelImpl:_.cK}),G={kernelName:a.mm_,backendName:"webgl",kernelFunc:U};/**
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
 */let AddNProgram=class AddNProgram{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let r=[];this.variableNames.forEach(e=>{r.push(`float v${e} = get${e}AtOutCoords();`)});let i=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${r.join("\n        ")}

        float result = ${i};
        setOutput(result);
      }
    `}};/**
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
 */let AddNPackedProgram=class AddNPackedProgram{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let r=[];this.variableNames.forEach(e=>{r.push(`vec4 v${e} = get${e}AtOutCoords();`)});let i=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${r.join("\n        ")}

        vec4 result = ${i};
        setOutput(result);
      }
    `}};let W={kernelName:a.Xze,backendName:"webgl",kernelFunc:/**
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
 */function addN(e){let{inputs:t,backend:r}=e;if(1===t.length)return identity({inputs:{x:t[0]},backend:r});if(t.length>(0,a.OBj)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){let e=Math.floor(t.length/2),i=addN({inputs:t.slice(0,e),backend:r}),n=addN({inputs:t.slice(e),backend:r});return addN({inputs:[i,n],backend:r})}let i=t.map(e=>e.dtype).reduce((e,t)=>(0,a.x8V)(e,t)),n=t.map(e=>e.shape),o=(0,a.OBj)().getBool("WEBGL_PACK"),s=o?new AddNPackedProgram(t[0].shape,n):new AddNProgram(t[0].shape,n);return r.runWebGLProgram(s,t,i)}},X={kernelName:a.oT6,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{axis:s,keepDims:l}=n,u=o.shape.length,c=a.D5U.parseAxisParam(s,o.shape),d=c,p=a.backend_util.getAxesPermutation(d,u),h=o;null!=p&&(h=transpose({inputs:{x:o},backend:i,attrs:{perm:p}}),d=a.backend_util.getInnerMostAxes(d.length,u)),a.backend_util.assertAxesAreInnerMostDims("all",d,u);let[f,y]=a.backend_util.computeOutAndReduceShapes(h.shape,d),g=a.D5U.sizeFromShape(y),m=reshape({inputs:{x:h},backend:i,attrs:{shape:[-1,g]}}),v=reduce(m,m.dtype,"all",i);if(l){let e=a.backend_util.expandShapeToKeepDim(f,c);t=reshape({inputs:{x:v},backend:i,attrs:{shape:e}})}else t=reshape({inputs:{x:v},backend:i,attrs:{shape:f}});return i.disposeIntermediateTensorInfo(m),i.disposeIntermediateTensorInfo(v),null!=p&&i.disposeIntermediateTensorInfo(h),t}},Y={kernelName:a.IKK,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{axis:s,keepDims:l}=n,u=o.shape.length,c=a.D5U.parseAxisParam(s,o.shape),d=c,p=a.backend_util.getAxesPermutation(d,u),h=o;null!=p&&(h=transpose({inputs:{x:o},backend:i,attrs:{perm:p}}),d=a.backend_util.getInnerMostAxes(d.length,u)),a.backend_util.assertAxesAreInnerMostDims("any",d,u);let[f,y]=a.backend_util.computeOutAndReduceShapes(h.shape,d),g=a.D5U.sizeFromShape(y),m=reshape({inputs:{x:h},backend:i,attrs:{shape:[-1,g]}}),v=reduce(m,m.dtype,"any",i);if(l){let e=a.backend_util.expandShapeToKeepDim(f,c);t=reshape({inputs:{x:v},backend:i,attrs:{shape:e}})}else t=reshape({inputs:{x:v},backend:i,attrs:{shape:f}});return i.disposeIntermediateTensorInfo(m),i.disposeIntermediateTensorInfo(v),null!=p&&i.disposeIntermediateTensorInfo(h),t}};/**
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
 */let ArgMinMaxProgram=class ArgMinMaxProgram{constructor(e,t,r){this.variableNames=["A"];let{windowSize:i,batchSize:n,outSize:o}=e;r||this.variableNames.push("bestIndicesA"),this.outputShape=[n,o],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${i};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${i}; i++) {
          int inIdx = ${r?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));"};
          float candidate = getA(batch, inIdx);
          if (candidate ${"max"===t?">":"<"} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};/**
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
 */let ArgMinMaxPackedProgram=class ArgMinMaxPackedProgram{constructor(e,t,r,i){let n,o;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,a.D5U.assert(e.length>2,()=>`Packed arg${r.charAt(0).toUpperCase()+r.slice(1)} supports only inputs with rank above 2.`);let s=e[e.length-1],l=Math.ceil(s/t);this.outputShape=e.slice(0,-1),l>1&&this.outputShape.push(l),i||this.variableNames.push("bestIndicesA");let u=this.outputShape,p=u.length,h=(0,d.kW)(p),f=(0,c.Ky)("coords",p);if(1===l){o=p+1;let e=(0,d.kW)(o);n=`
        ${e} sourceLocR = ${e}(${f.join()}, 0);
        ++${f[p-1]};
        ${e} sourceLocG = ${e}(${f.join()}, 0);
        ++${f[p-2]};
        ${e} sourceLocA = ${e}(${f.join()}, 0);
        --${f[p-1]};
        ${e} sourceLocB = ${e}(${f.join()}, 0);
        --${f[p-2]};`}else o=p,n=`
        ${h} sourceLocR = coords;
        ++${f[p-1]};
        ${h} sourceLocG = coords;
        ++${f[p-2]};
        ${h} sourceLocA = coords;
        --${f[p-1]};
        ${h} sourceLocB = coords;
        --${f[p-2]};`;let y=["x","y","z","w","u","v"].slice(0,o),g="."+y[o-1],m=y.map(e=>"int "+e),v=(0,c.Ky)("sourceLocR",o-1).concat("inIdx.r"),b=(0,c.Ky)("sourceLocG",o-1).concat("inIdx.g"),S=(0,c.Ky)("sourceLocB",o-1).concat("inIdx.b"),P=(0,c.Ky)("sourceLocA",o-1).concat("inIdx.a"),C=i?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${v.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${S.join()}),
                             getBestIndicesAChannel(${P.join()})));`,x=`vec4(
            getAChannel(${v.join()}),
            hasNextCol ? getAChannel(${b.join()}) : 0.,
            hasNextRow ? getAChannel(${S.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${P.join()}) : 0.)`,A=i?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${y.join()}),
                                          vec2(${y.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${y.join()}),
                               vec2(${y.slice(-2).join()}));
      }
      ${A}
      void main() {
        ${h} coords = getOutputCoords();
        bool hasNextCol = ${f[p-1]} < ${u[p-1]-1};
        bool hasNextRow = ${f[p-2]} < ${u[p-2]-1};
        ${n}
        ivec4 srcIdx = ivec4(sourceLocR${g}, sourceLocG${g},
          sourceLocB${g}, sourceLocA${g}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${x};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${C}
          vec4 candidate = ${x};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${"max"===r?"greaterThan":"lessThan"}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function argMinMaxReduce(e,t,r,i){let n=[r];if(a.backend_util.assertAxesAreInnerMostDims("arg"+i.charAt(0).toUpperCase()+i.slice(1),n,t.shape.length),!(0,a.OBj)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let r=[],o=e.texData.get(t.dataId),s=null!==o&&o.isPacked,l=t;s&&r.push(l=e.unpackTensor(t));let[u,c]=a.backend_util.computeOutAndReduceShapes(l.shape,n),d=a.D5U.sizeFromShape(c),p=reshape({inputs:{x:l},backend:e,attrs:{shape:[-1,d]}});r.push(p);let h=/**
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
 */function argReduce(e,t,r,i=null){let n=t.shape[0],o=t.shape[1];null!=i&&(n=i.shape[0],o=i.shape[1]);let s=a.backend_util.computeOptimalWindowSize(o),l={windowSize:s,inSize:o,batchSize:n,outSize:Math.ceil(o/s)},u=new ArgMinMaxProgram(l,r,null==i),c=[t];null!=i&&c.push(i);let d=e.runWebGLProgram(u,c,"int32");if(1===d.shape[1])return d;let p=argReduce(e,t,r,d);return e.disposeIntermediateTensorInfo(d),p}(e,p,i);r.push(h);let f=reshape({inputs:{x:h},backend:e,attrs:{shape:u}});return r.forEach(t=>e.disposeIntermediateTensorInfo(t)),f}return function argReducePacked(e,t,r,i=null){let n=null!=i?i.shape:t.shape,o=n[n.length-1],s=a.backend_util.computeOptimalWindowSize(o),l=new ArgMinMaxPackedProgram(n,s,r,null==i),u=null==i?[t]:[t,i],c=e.runWebGLProgram(l,u,"int32");if(c.shape.length===t.shape.length){let i=argReducePacked(e,t,r,c);return e.disposeIntermediateTensorInfo(c),i}return c}(e,t,i)}let $={kernelName:a.sJF,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{axis:o}=i,s=a.D5U.parseAxisParam(o,n.shape),l=a.backend_util.getAxesPermutation(s,n.shape.length),u=n,c=[];null!=l&&(c.push(u=transpose({inputs:{x:n},backend:r,attrs:{perm:l}})),s=a.backend_util.getInnerMostAxes(s.length,u.shape.length)),a.backend_util.assertAxesAreInnerMostDims("argMax",[s[0]],u.shape.length);let d=argMinMaxReduce(r,u,s[0],"max");return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),d}},K={kernelName:a.aJk,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{axis:o}=i,s=a.D5U.parseAxisParam(o,n.shape),l=a.backend_util.getAxesPermutation(s,n.shape.length),u=n,c=[];null!=l&&(c.push(u=transpose({inputs:{x:n},backend:r,attrs:{perm:l}})),s=a.backend_util.getInnerMostAxes(s.length,u.shape.length)),a.backend_util.assertAxesAreInnerMostDims("argMin",[s[0]],u.shape.length);let d=argMinMaxReduce(r,u,s[0],"min");return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),d}},q=P.D1+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Z=unaryKernelFunc({opSnippet:q}),J={kernelName:a.M2y,backendName:"webgl",kernelFunc:Z},Q=P.D1+"return log(x + sqrt(x * x + 1.0));",ee=unaryKernelFunc({opSnippet:Q}),et={kernelName:a.qw7,backendName:"webgl",kernelFunc:ee},er=P.D1+`
  return atan(x);
`,ei=unaryKernelFunc({opSnippet:er}),en={kernelName:a.jMg,backendName:"webgl",kernelFunc:ei},eo=u+`
  return atan(a, b);
`,ea=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+p+`
  return result;
`,es=binaryKernelFunc({opSnippet:eo,packedOpSnippet:ea}),el={kernelName:a.QCc,backendName:"webgl",kernelFunc:es},eu=P.D1+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,ec=unaryKernelFunc({opSnippet:eu}),ed={kernelName:a.Oyi,backendName:"webgl",kernelFunc:ec};/**
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
 */let Pool2DProgram=class Pool2DProgram{constructor(e,t,r,i=!1,n=!1){if(this.variableNames=["x"],"avg"===t&&r)throw Error("Cannot compute positions for average pool.");let o=e.filterWidth,a=e.strideHeight,s=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;let f="avg"===t,y=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,m="0.0";if(f||(m="-1.0 / 1e-20"),r){this.userCode=`
        const ivec2 strides = ivec2(${a}, ${s});
        const ivec2 pads = ivec2(${p}, ${h});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${c};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${i?n?y:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(v="avgValue / max(count, 1.0)");let b=4*Math.floor(o/4),S=o%4,P=`
      if (${f}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${s});
      const ivec2 pads = ivec2(${p}, ${h});
      const float initializationValue = ${m};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${m});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${c};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${b}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${P}
          }

          int xC = xCCorner + ${b};
          if (${1===S}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${P}
          } else if (${2===S}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${P}
          } else if (${3===S}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${P}
          }
        }
        setOutput(${v});
      }
    `}};let Pool3DProgram=class Pool3DProgram{constructor(e,t,r,i=!1,n=!1){if(this.variableNames=["x"],"avg"===t&&r)throw Error("Cannot compute positions for average pool.");let o=e.filterWidth,a=e.strideDepth,s=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,c=e.dilationHeight,d=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,y=e.padInfo.front,g=e.padInfo.top,m=e.padInfo.left;this.outputShape=e.outShape;let v="avg"===t,b="0.0";if(v||(b="-1.0 / 1e-20"),r){this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${s}, ${l});
        const ivec3 pads = ivec3(${y}, ${g}, ${m});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${p};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${h};
                wR += ${c}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${f};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${i?n?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${f} +
                      wR * ${f} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let S=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(S="avgValue / max(count, 1.0)");let P=4*Math.floor(o/4),C=o%4,x=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${s}, ${l});
      const ivec3 pads = ivec3(${y}, ${g}, ${m});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h};
            wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${P}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${x}
            }

            int xC = xCCorner + ${P};
            if (${1===C}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${x}
            } else if (${2===C}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${x}
            } else if (${3===C}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${x}
            }
          }
        }
        setOutput(${S});
      }
    `}};let ep={kernelName:a.JhU,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t;(0,E.HS)(n,"avgPool");let{filterSize:o,strides:s,pad:l,dimRoundingMode:u}=i;a.D5U.assert(a.backend_util.eitherStridesOrDilationsAreOne(s,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${s} and dilations '1'`);let c=a.backend_util.computePool2DInfo(n.shape,o,s,1,l,u);if(1===c.filterWidth&&1===c.filterHeight&&a.D5U.arraysEqual(c.inShape,c.outShape))return identity({inputs:{x:n},backend:r});let d=new Pool2DProgram(c,"avg",!1);return r.runWebGLProgram(d,[n],"float32")}},eh={kernelName:a._k9,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{filterSize:o,strides:s,pad:l,dimRoundingMode:u,dataFormat:c}=i,d=a.backend_util.computePool3DInfo(n.shape,o,s,[1,1,1],l,u,c),p=new Pool3DProgram(d,"avg",!1);return r.runWebGLProgram(p,[n],"float32")}};/**
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
 */let AvgPool2DBackpropProgram=class AvgPool2DBackpropProgram{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterHeight,r=e.filterWidth,i=e.strideHeight,n=e.strideWidth,o=e.dilationHeight,a=e.dilationWidth,s=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.top,c=l-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${u}, ${c});
      const float avgMultiplier = float(${1/(t*r)});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${i}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}};let AvgPool3DBackpropProgram=class AvgPool3DBackpropProgram{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterDepth,r=e.filterHeight,i=e.filterWidth,n=e.strideDepth,o=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterDepth,d=e.effectiveFilterHeight,p=e.effectiveFilterWidth,h=c-1-e.padInfo.front,f=d-1-e.padInfo.top,y=p-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${f}, ${y});
      const float avgMultiplier = float(${1/(t*r*i)});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${c};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${n}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};let ef={kernelName:a.IMb,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o}=t,{filterSize:s,strides:l,pad:u,dimRoundingMode:c}=i,d=a.backend_util.computePool3DInfo(o.shape,s,l,[1,1,1],u,c),p=new AvgPool3DBackpropProgram(d);return r.runWebGLProgram(p,[n],o.dtype)}},ey={kernelName:a.ROF,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o}=t;(0,E.HS)([n,o],"avgPoolGrad");let{filterSize:s,strides:l,pad:u}=i,c=a.backend_util.computePool2DInfo(o.shape,s,l,1,u),d=new AvgPool2DBackpropProgram(c);return r.runWebGLProgram(d,[n],o.dtype)}},eg={kernelName:a.XLW,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{a:n,b:o}=t,{transposeA:a,transposeB:s}=i;return batchMatMulImpl({a:n,b:o,transposeA:a,transposeB:s,backend:r})}};/**
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
 */let BatchNormProgram=class BatchNormProgram{constructor(e,t,r,i,n,o){this.outputShape=[],this.variableNames=["x","mean","variance"],a.backend_util.assertAndGetBroadcastShape(e,t),a.backend_util.assertAndGetBroadcastShape(e,r);let s="0.0";null!=i&&(a.backend_util.assertAndGetBroadcastShape(e,i),this.variableNames.push("offset"),s="getOffsetAtOutCoords()");let l="1.0";null!=n&&(a.backend_util.assertAndGetBroadcastShape(e,n),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${s};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${o}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};/**
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
 */let BatchNormPackedProgram=class BatchNormPackedProgram{constructor(e,t,r,i,n,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],a.backend_util.assertAndGetBroadcastShape(e,t),a.backend_util.assertAndGetBroadcastShape(e,r);let s="vec4(0.0)";null!=i&&(a.backend_util.assertAndGetBroadcastShape(e,i),this.variableNames.push("offset"),s="getOffsetAtOutCoords()");let l="vec4(1.0)";null!=n&&(a.backend_util.assertAndGetBroadcastShape(e,n),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${s};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${o}));

        setOutput((x - mean) * inv + offset);
      }
    `}};let em={kernelName:a.sHE,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:r})=>{let{x:i,mean:n,variance:o,offset:s,scale:l}=e;a.D5U.assert(n.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),a.D5U.assert(null==s||n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),a.D5U.assert(null==l||n.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:u}=r;null==u&&(u=.001);let c=[i,n,o],d=null;null!=s&&(d=s.shape,c.push(s));let p=null;null!=l&&(p=l.shape,c.push(l));let h=(0,a.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new BatchNormPackedProgram(i.shape,n.shape,o.shape,d,p,u):new BatchNormProgram(i.shape,n.shape,o.shape,d,p,u),f=t.runWebGLProgram(h,c,c[0].dtype);return f}};/**
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
 */let SliceProgram=class SliceProgram{constructor(e){let t;this.variableNames=["source"],this.outputShape=e,this.rank=e.length;let r=(0,d.kW)(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let i=function(e){if(1===e)return"sourceLoc";if(e<=6)return ev.slice(0,e).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank),n=e.map((e,t)=>`sourceLoc.${ev[t]} = start[${t}] + coords.${ev[t]};`);t=`
        ${r} sourceLoc;
        ${r} coords = getOutputCoords();
        ${n.join("\n")}
      `,this.userCode=`
      void main() {
        ${t}
        setOutput(getSource(${i}));
      }
    `}};let ev=["x","y","z","w","u","v"];/**
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
 */let SlicePackedProgram=class SlicePackedProgram{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let t=(0,d.kW)(this.rank),r=(0,c.Ky)("coords",this.rank),i=(0,c.Ky)("sourceLoc",this.rank),n=1===this.rank?"sourceLoc":`vec2(${i.slice(-2).join()})`,o=`getChannel(getSource(${i.join()}), ${n})`,a=`
      result.x = ${o};
      if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
        ++${i[this.rank-1]};
        result.y = ${o};
        --${i[this.rank-1]};
      }
    `,s=1===this.rank?"":`
      --${r[this.rank-1]};
      if (++${r[this.rank-2]} < ${e[this.rank-2]}) {
        ++${i[this.rank-2]};
        result.z = ${o};
        if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
          ++${i[this.rank-1]};
          result.w = ${o};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${i[t]} = ${r[t]} + start[${t}];`).join("\n");this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${a}
        ${s}
        setOutput(result);
      }
    `}};function slice(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{begin:o,size:s}=i,[l,u]=a.kuN.parseSliceParams(n,o,s);if(a.kuN.assertParamsValid(n,l,u),0===a.D5U.sizeFromShape(u))return r.makeTensorInfo(u,n.dtype,[]);if(r.shouldExecuteOnCPU([n])||"string"===n.dtype){let e=r.texData.get(n.dataId),t=(0,_.nT)(e.values,l,u,n.shape,n.dtype);return r.makeTensorInfo(u,n.dtype,t)}let{isPacked:c}=r.texData.get(n.dataId),d=a.kuN.isSliceContinous(n.shape,l,u);if(c||!d){let e=(0,a.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new SlicePackedProgram(u):new SliceProgram(u),t=[l];return r.runWebGLProgram(e,[n],n.dtype,t)}return r.uploadToGPU(n.dataId),/**
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
 */function(e,t,r,i){let n=i.texData.get(e.dataId),o=i.makeTensorInfo(r,e.dtype),s=i.texData.get(o.dataId);Object.assign(s,n),s.refCount=1,s.shape=r,s.dtype=e.dtype;let l=a.kuN.computeFlatOffset(t,a.D5U.computeStrides(e.shape));n.slice&&(l+=n.slice.flatOffset),s.slice={flatOffset:l,origDataId:n.slice&&n.slice.origDataId||e.dataId};let u=i.dataRefCount.get(s.slice.origDataId)||1;return i.dataRefCount.set(s.slice.origDataId,u+1),o}(n,l,u,r)}let eb={kernelName:a.p2w,backendName:"webgl",kernelFunc:slice},eS={kernelName:a.zws,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{blockShape:o,crops:s}=i;a.D5U.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let l=o.reduce((e,t)=>e*t),u=a.backend_util.getReshaped(n.shape,o,l),c=a.backend_util.getPermuted(u.length,o.length),d=a.backend_util.getReshapedPermuted(n.shape,o,l),p=a.backend_util.getSliceBeginCoords(s,o.length),h=a.backend_util.getSliceSize(d,s,o.length),f=[],y=reshape({inputs:{x:n},backend:r,attrs:{shape:u}}),g=transpose({inputs:{x:y},backend:r,attrs:{perm:c}}),m=reshape({inputs:{x:g},backend:r,attrs:{shape:d}}),v=slice({inputs:{x:m},backend:r,attrs:{begin:p,size:h}});return f.push(y),f.push(g),f.push(m),f.forEach(e=>r.disposeIntermediateTensorInfo(e)),v}},eP={kernelName:a.zvY,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,weights:o}=t,{size:a}=i,s=r.readSync(n.dataId),l=r.readSync(o.dataId),u=(0,_.qO)(s,l,o.dtype,o.shape,a);return r.makeTensorInfo([a],o.dtype,u)}},eC=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,ex=`
  return float(int(a.r) & int(b.r));
`,eA={kernelName:a.hCO,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:r,backend:i}=e,{a:n,b:o}=r,s=(0,a.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS"),l=(0,a.OBj)().getNumber("WEBGL_VERSION");if(i.shouldExecuteOnCPU([n,o])||1===l){let e=i.texData.get(n.dataId).values,t=i.texData.get(o.dataId).values,[r,a]=(0,_.XM)(n.shape,o.shape,e,t,n.dtype),s=i.makeTensorInfo(a,n.dtype),l=i.texData.get(s.dataId);return l.values=r,s}return t=s?new BinaryOpPackedProgram(eC,n.shape,o.shape,!1):new BinaryOpProgram(ex,n.shape,o.shape),i.runWebGLProgram(t,[n,o],n.dtype)}},e_={kernelName:a.eEB,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{s0:i,s1:n}=t,o=r.readSync(i.dataId),s=r.readSync(n.dataId),l=a.backend_util.assertAndGetBroadcastShape(Array.from(o),Array.from(s));return r.makeTensorInfo([l.length],"int32",Int32Array.from(l))}},eT=binaryKernelFunc({opSnippet:"return float(a != b);",cpuKernelImpl:_.cZ,dtype:"bool"}),ew={kernelName:a.yQU,backendName:"webgl",kernelFunc:eT};/**
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
 */function real(e){let{inputs:t,backend:r}=e,{input:i}=t,n=r.texData.get(i.dataId);return identity({inputs:{x:n.complexTensorInfos.real},backend:r})}let eR={kernelName:a.xJR,backendName:"webgl",kernelFunc:real},eE={kernelName:a.RFZ,backendName:"webgl",kernelFunc:/**
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
 */function cast(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{dtype:o}=i;if("complex64"===o){if("complex64"===n.dtype)return identity({inputs:{x:n},backend:r});let e=a.lls(n.shape),t=cast({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),i=complex({inputs:{real:t,imag:e},backend:r});return e.dispose(),r.disposeIntermediateTensorInfo(t),i}if("complex64"===n.dtype){let e=real({inputs:{input:n},backend:r}),t=cast({inputs:{x:e},backend:r,attrs:{dtype:o}});return r.disposeIntermediateTensorInfo(e),t}if(!a.D5U.hasEncodingLoss(n.dtype,o)){let e=identity({inputs:{x:n},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:o}}if(r.shouldExecuteOnCPU([n])){let e=r.texData.get(n.dataId).values,[t,i,a]=(0,_.cm)(e,n.shape,n.dtype,o);return r.makeTensorInfo(t,i,a)}if("int32"===o)return function(e,t){let r=new P.l(e.shape,"return float(int(x));"),i=t.runWebGLProgram(r,[e],"int32");return{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}(n,r);if("bool"===o){let e=r.makeTensorInfo([],"bool",a.D5U.getTypedArrayFromDType("bool",1)),t=eT({inputs:{a:n,b:e},backend:r});return r.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${n.dtype} to ${o}`)}},eD="return ceil(x);",eO=unaryKernelFunc({opSnippet:eD,packedOpSnippet:eD,cpuKernelImpl:_.pk}),eI={kernelName:a.gJX,backendName:"webgl",kernelFunc:eO};/**
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
 */let ClipProgram=class ClipProgram{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};/**
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
 */let ClipPackedProgram=class ClipPackedProgram{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};let eM={kernelName:a.xnO,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{clipValueMin:s,clipValueMax:l}=n;t=(0,a.OBj)().getBool("WEBGL_PACK_CLIP")?new ClipPackedProgram(o.shape):new ClipProgram(o.shape);let u=[[s],[l]];return i.runWebGLProgram(t,[o],o.dtype,u)}};/**
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
 */let ComplexAbsProgram=class ComplexAbsProgram{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};/**
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
 */function makeComplexComponentTensorInfo(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}let ek={kernelName:a.yj2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:i}=t,n=r.texData.get(i.dataId),o=new ComplexAbsProgram(i.shape),a=[makeComplexComponentTensorInfo(i,n.complexTensorInfos.real),makeComplexComponentTensorInfo(i,n.complexTensorInfos.imag)];return r.runWebGLProgram(o,a,a[0].dtype)}};/**
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
 */let ConcatProgram=class ConcatProgram{constructor(e){this.outputShape=[],this.outputShape=a.backend_util.computeOutShape(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let r=1;r<t.length;r++)t[r]=t[r-1]+e[r][1];let r=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let i=t[e-1];r.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${i}));`)}let i=t.length,n=t[t.length-1];r.push(`else setOutput(getT${i}(yR, yC-${n}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${r.join("\n        ")}
      }
    `}};/**
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
 */let ConcatPackedProgram=class ConcatPackedProgram{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=a.backend_util.computeOutShape(e,t);let r=this.outputShape,i=r.length,n=(0,d.kW)(i),o=(0,c.Ky)("coords",i),s=["x","y","z","w","u","v"].slice(0,i);this.variableNames=e.map((e,t)=>`T${t}`);let l=Array(e.length-1);l[0]=e[0][t];for(let r=1;r<l.length;r++)l[r]=l[r-1]+e[r][t];let u=s[t],p=s.slice(-2),h=s.join(),f=`if (${u} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${p.join()}));
        }`;for(let e=1;e<l.length;e++){let t=l[e-1];f+=`
        if (${u} < ${l[e]}  && ${u} >= ${l[e-1]}) {
          return getChannel(
            getT${e}(${shiftedChannels(s,u,t)}),
            vec2(${shiftedChannels(p,u,t)}));
        }`}let y=l.length,g=l[l.length-1];f+=`
        return getChannel(
          getT${y}(${shiftedChannels(s,u,g)}),
          vec2(${shiftedChannels(p,u,g)}));`,this.userCode=`
      float getValue(${s.map(e=>"int "+e)}) {
        ${f}
      }

      void main() {
        ${n} coords = getOutputCoords();
        vec4 result = vec4(getValue(${o}), 0., 0., 0.);

        ${o[i-1]} = ${o[i-1]} + 1;
        if (${o[i-1]} < ${r[i-1]}) {
          result.g = getValue(${o});
        }

        ${o[i-2]} = ${o[i-2]} + 1;
        if (${o[i-2]} < ${r[i-2]}) {
          result.a = getValue(${o});
        }

        ${o[i-1]} = ${o[i-1]} - 1;
        if (${o[i-2]} < ${r[i-2]} &&
            ${o[i-1]} < ${r[i-1]}) {
          result.b = getValue(${o});
        }
        setOutput(result);
      }
    `}};function shiftedChannels(e,t,r){let i=e.indexOf(t),n=e.map((e,t)=>t===i?`${e} - ${r}`:e);return n.join()}/**
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
 */function imag(e){let{inputs:t,backend:r}=e,{input:i}=t,n=r.texData.get(i.dataId);return identity({inputs:{x:n.complexTensorInfos.imag},backend:r})}let eL={kernelName:a.J_u,backendName:"webgl",kernelFunc:imag};/**
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
 */function concat(e){let{inputs:t,backend:r,attrs:i}=e,{axis:n}=i,o=a.D5U.parseAxisParam(n,t[0].shape)[0],s=t.map(e=>e.shape);a.backend_util.assertParamsConsistent(s,o);let l=a.backend_util.computeOutShape(t.map(e=>e.shape),o);if(0===a.D5U.sizeFromShape(l))return r.makeTensorInfo(l,t[0].dtype,[]);let u=t.filter(e=>a.D5U.sizeFromShape(e.shape)>0);return 1===u.length?identity({inputs:{x:u[0]},backend:r}):/**
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
 */function concatImpl(e,t,r){let i=e[0].dtype;if("complex64"===i){let i=e.map(e=>real({inputs:{input:e},backend:r})),n=e.map(e=>imag({inputs:{input:e},backend:r})),o=concatImpl(i,t,r),a=concatImpl(n,t,r),s=complex({inputs:{real:o,imag:a},backend:r});return i.forEach(e=>r.disposeIntermediateTensorInfo(e)),n.forEach(e=>r.disposeIntermediateTensorInfo(e)),r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(a),s}let n=r.shouldExecuteOnCPU(e);if("string"===i&&(n=!0),n){let n=e.map(e=>{let i=a.D5U.sizeFromShape(e.shape.slice(t));return reshape({inputs:{x:e},backend:r,attrs:{shape:[-1,i]}})}),o=n.map(e=>({vals:r.readSync(e.dataId),shape:e.shape})),s=a.backend_util.computeOutShape(n.map(e=>e.shape),1),l=1===n[0].shape[0],u=(0,_.n7)(o,s,i,l),c=a.backend_util.computeOutShape(e.map(e=>e.shape),t),d=r.makeTensorInfo(c,i,u);return n.forEach(e=>r.disposeIntermediateTensorInfo(e)),d}let o=e.filter(e=>a.D5U.sizeFromShape(e.shape)>0),s=(0,a.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&o[0].shape.length>1;if(1===o.length){let t=s?new P.l(e[0].shape,P.bl):new C.cc(e[0].shape,P.bl);return r.runWebGLProgram(t,e,i)}let l=(0,a.OBj)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(o.length>l){let e=[];for(let i=0;i<o.length;i+=l){let n=o.slice(i,i+l);e.push(concatImpl(n,t,r))}let i=concatImpl(e,t,r);for(let t of e)r.disposeIntermediateTensorInfo(t);return i}if(s){let e=new ConcatPackedProgram(o.map(e=>e.shape),t);return r.runWebGLProgram(e,o,i)}let{tensors2D:u,outShape:c}=function(e,t,r){let i=a.backend_util.computeOutShape(e.map(e=>e.shape),t),n=e.map(e=>reshape({inputs:{x:e},attrs:{shape:[-1,a.D5U.sizeFromShape(e.shape.slice(t))]},backend:r}));return{tensors2D:n,outShape:i}}(o,t,r),d=new ConcatProgram(u.map(e=>e.shape)),p=r.runWebGLProgram(d,u,i);u.forEach(e=>r.disposeIntermediateTensorInfo(e));let h=reshape({inputs:{x:p},attrs:{shape:c},backend:r});return r.disposeIntermediateTensorInfo(p),h}(u,o,r)}let eN={kernelName:a.Eh3,backendName:"webgl",kernelFunc:concat};/**
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
 */let Conv2DProgram=class Conv2DProgram{constructor(e,t=!1,r=null,i=!1,n=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;let o=e.padInfo.top,a=e.padInfo.left,s=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,c=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4,y="channelsLast"===e.dataFormat,g="",m="";r&&(g=i?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`
          float activation(float x) {
            ${r}
          }
        `,m="result = activation(result);"),t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${g}

      const ivec2 strides = ivec2(${s}, ${l});
      const ivec2 pads = ivec2(${o}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${y?3:1}];

        ivec2 xRCCorner =
            ivec2(coords[${y?1:2}], coords[${y?2:3}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${p}; wC++) {
            int xC = xCCorner + wC * ${c};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${h}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${y}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${1===f}) {

              if (${y}) {
                dotProd +=
                    getX(batch, xR, xC, ${h}) *
                    getW(wR, wC, ${h}, d2);
              } else {
                dotProd +=
                    getX(batch, ${h}, xR, xC) *
                    getW(wR, wC, ${h}, d2);
              }

            } else if (${2===f}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2)
              );

              if (${y}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${3===f}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2),
                getW(wR, wC, ${h} + 2, d2)
              );

              if (${y}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1),
                  getX(batch, xR, xC, ${h} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC),
                  getX(batch, ${h} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${m}
        setOutput(result);
      }
    `}};let Conv3DProgram=class Conv3DProgram{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let t=e.padInfo.front,r=e.padInfo.top,i=e.padInfo.left,n=e.strideDepth,o=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,c=e.filterDepth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${n}, ${o}, ${a});
      const ivec3 pads = ivec3(${t}, ${r}, ${i});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${c}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${h}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${1===f}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${h}) *
                  getW(wF, wR, wC, ${h}, d2);
              } else if (${2===f}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${3===f}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1),
                  getX(batch, xF, xR, xC, ${h} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2),
                  getW(wF, wR, wC, ${h} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};/**
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
 */let Conv2DPackedProgram=class Conv2DPackedProgram{constructor(e,t=!1,r=null,i=!1,n=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=(0,l.C9)(this.outputShape.length);let o=e.padInfo.left,s=e.strideWidth,u=e.dilationWidth,c=e.filterHeight,d=e.filterWidth,p=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<d;e++)p+=`
           vec4 xTexelC${2*e};
           int xTexelC${2*e}Ready;
           vec4 xTexelC${2*e+1};
           int xTexelC${2*e+1}Ready;
           vec4 xC${e};`;p+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<d;e++)p+=`
           xTexelC${2*e} = vec4(0.0);
           xTexelC${2*e}Ready = 0;
           xTexelC${2*e+1} = vec4(0.0);
           xTexelC${2*e+1}Ready = 0;
           xC${e} = vec4(0.0);`;p+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(d+1)/2;t++){let r=2*t;if(p+=`
           xC = xCCorner + ${r*u};
           `,1===s){if(r<d&&(o%2==1?(p+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }
               `,1===u&&r>0?p+=`
                 xC${r} = vec4(xTexelC${r-2}.zw, xTexelC${r}.xy);
                 `:p+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${r} = vec4(previous.zw, xTexelC${r}.xy);
                   } else {
                     xC${r} = vec4(0.0, 0.0, xTexelC${r}.xy);
                   }
                   `):p+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 xC${r} = xTexelC${r};
                 `,r+1<d)){let e=o%2==0?a.D5U.nearestLargerEven(u):u;u%2==0&&o%2==1||u%2!=0&&o%2!=1?(p+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                     xTexelC${r+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${r+1}.zw = vec2(0.0);
                     }
                     xTexelC${r+1}Ready = 1;
                   }
                   `,u>1?p+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${r+1} = vec4(previous.zw, xTexelC${r+1}.xy);
                     } else {
                      xC${r+1} = vec4(0.0, 0.0, xTexelC${r+1}.xy);
                     }
                     `:p+=`
                     xC${r+1} = vec4(xTexelC${r}.zw, xTexelC${r+1}.xy);
                     `):1===e?p+=`
                     xC${r+1} = xTexelC${r};
                     `:p+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                       xTexelC${r+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${r+1}.zw = vec2(0.0);
                       }
                       xTexelC${r+1}Ready = 1;
                     }

                     xC${r+1} = xTexelC${r+1};
                     `}}else r<d&&(o%2==1?(p+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${r+1}Ready == 0) {
                   xTexelC${r+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${r+1}.zw = vec2(0.0);
                   }
                   xTexelC${r+1}Ready = 1;
                 }

                 xC${r} = vec4(xTexelC${r}.zw, xTexelC${r+1}.zw);
               `,r+1<d&&(p+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${r+1} = vec4(xTexelC${r+1}.xy, final.xy);
                 `)):(p+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                   xTexelC${r+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r+1}.zw = vec2(0.);
                   }
                   xTexelC${r+1}Ready = 1;
                 }

                 xC${r} = vec4(
                   xTexelC${r}.xy, xTexelC${r+1}.xy);
               `,r+1<d&&(p+=`
                   xC${r+1} = vec4(xTexelC${r}.zw, xTexelC${r+1}.zw);
                 `)));r<d&&(p+=`
             wTexel = getW(r, ${r}, d1, d2);
             dotProd += xC${r}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${r}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,r+1<d&&(p+=`
               wTexel = getW(r, ${r+1}, d1, d2);
               dotProd += xC${r+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${r+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}p+=`
     }
   
     }
   
     }
   `;let h="",f="";r&&(h=i?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${r}
         }`:n?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${r}
         }`:`vec4 activation(vec4 x) {
           ${r}
         }`,f="result = activation(result);"),t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${h}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${p}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${t?"result += getBiasAtOutCoords();":""}
         ${f}
         setOutput(result);
       }
     `}};var eB=r(98755);/**
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
 */let Im2ColPackedProgram=class Im2ColPackedProgram{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=(0,l.C9)(this.outputShape.length);let{dataFormat:r}=t,i=(0,eB.A)(),n="channelsLast"===r,o=n?1:2,a=n?2:3,s=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,u="";for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)u+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${o}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${n}) {
                  innerDims = vec2(d1, ch);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${u}

        ${i.output} = result;
      }
    `}};/**
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
 */function getShapeForBatchMatMul(e,t){let r=e.length;return r>=3?t?[...e.slice(0,-3),e[r-3]*e[r-2],e[r-1]]:[...e.slice(0,-3),e[r-3],e[r-2]*e[r-1]]:!t&&1===r&&e[0]>1?[e[0],1]:null}function conv2dByMatMul({x:e,filter:t,convInfo:r,backend:i,bias:n=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:l=null}){let u;let c=e.shape,d=i.texData.get(e.dataId),p=r.inChannels,h=c[0]*c[1]*c[2],f=r.outChannels,y="channelsLast"===r.dataFormat,g=[];if(null!=o){let e=getShapeForBatchMatMul(o.shape,y);null!=e&&(o=reshape({inputs:{x:o},backend:i,attrs:{shape:e}}),g.push(o))}if(null!=n){let e=getShapeForBatchMatMul(n.shape,y);null!=e&&(n=reshape({inputs:{x:n},backend:i,attrs:{shape:e}}),g.push(n))}let m=!((1===h||1===f)&&p>1e3)&&d.isPacked&&y&&null!=d.texture&&c[2]%2!=0&&a.D5U.arraysEqual(d.shape.slice(-3),c.slice(-3));if(m){let p=c[0]*c[1]*(c[2]+1),h={dataId:e.dataId,shape:[1,p,r.inChannels],dtype:e.dtype},f=d.shape;d.shape=d.shape.slice(),d.shape[d.shape.length-2]++,a.D5U.assert(E.oT(d.shape,h.shape),()=>`packed reshape ${d.shape} to ${h.shape} isn't free`);let y=reshape({inputs:{x:t},backend:i,attrs:{shape:[1,r.inChannels,r.outChannels]}});g.push(y);let m=batchMatMulImpl({a:h,b:y,backend:i,transposeA:!1,transposeB:!1,bias:n,activation:l,preluActivationWeights:o,leakyreluAlpha:s}),v=i.texData.get(m.dataId);a.D5U.assert(v.isPacked,()=>"batchMatMul result is expected to be packed"),d.shape=f,v.shape=r.outShape,(u=identity({inputs:{x:m},backend:i})).shape=r.outShape,g.push(m)}else{let a=r.outHeight*r.outWidth,c=reshape({inputs:{x:e},backend:i,attrs:{shape:y?[r.batchSize,a,r.inChannels]:[r.batchSize,r.inChannels,a]}}),d=reshape({inputs:{x:t},backend:i,attrs:{shape:[1,r.inChannels,r.outChannels]}}),p=batchMatMulImpl({a:y?c:d,b:y?d:c,transposeA:!y,transposeB:!1,backend:i,bias:n,activation:l,preluActivationWeights:o,leakyreluAlpha:s});u=reshape({inputs:{x:p},backend:i,attrs:{shape:r.outShape}}),g.push(c),g.push(d),g.push(p)}for(let e of g)i.disposeIntermediateTensorInfo(e);return u}function conv2dWithIm2Row({x:e,filter:t,convInfo:r,backend:i,bias:n=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:l=null}){let{filterWidth:u,filterHeight:c,inChannels:d,outWidth:p,outHeight:h,dataFormat:f}=r,y="channelsLast"===f,g=u*c*d,m=h*p,v=[r.batchSize,g,m],b=[];if(null!=o){let e=getShapeForBatchMatMul(o.shape,y);null!=e&&(o=reshape({inputs:{x:o},backend:i,attrs:{shape:e}}),b.push(o))}if(null!=n){let e=getShapeForBatchMatMul(n.shape,y);null!=e&&(n=reshape({inputs:{x:n},backend:i,attrs:{shape:e}}),b.push(n))}let S=reshape({inputs:{x:t},backend:i,attrs:{shape:[1,g,a.D5U.sizeFromShape(t.shape)/g]}});b.push(S);let P=new Im2ColPackedProgram(v,r),C=[e.shape,[r.padInfo.top,r.padInfo.left],[r.strideHeight,r.strideWidth],[r.dilationHeight,r.dilationWidth],[r.inChannels],[r.filterWidth*r.inChannels],[r.outWidth]],x=i.runWebGLProgram(P,[e],"float32",C),A=reshape({inputs:{x:x},backend:i,attrs:{shape:v}});b.push(x),b.push(A);let _=null!=n,T=null!=o,w="leakyrelu"===l,R=l?mapActivationToShaderProgram(l,!0):null,E=new MatMulPackedProgram(y?A.shape:S.shape,y?S.shape:A.shape,y?[r.batchSize,m,r.outChannels]:[r.batchSize,r.outChannels,m],!0,!1,_,R,T,w),D=y?[A,S]:[S,A];if(n&&D.push(n),T&&D.push(o),w){let e=i.makeTensorInfo([],"float32",a.D5U.createScalarValue(s,"float32"));D.push(e),b.push(e)}let O=i.runWebGLProgram(E,D,"float32"),I=reshape({inputs:{x:O},backend:i,attrs:{shape:r.outShape}});for(let e of(b.push(O),b))i.disposeIntermediateTensorInfo(e);return I}let eF={kernelName:a.mhS,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o,filter:s}=r,{strides:l,pad:u,dataFormat:c,dilations:d,dimRoundingMode:p}=n,h=a.backend_util.convertConv2DDataFormat(c),f=a.backend_util.computeConv2DInfo(o.shape,s.shape,l,d,u,p,!1,h);if(1===f.filterHeight&&1===f.filterWidth&&1===f.dilationHeight&&1===f.dilationWidth&&1===f.strideHeight&&1===f.strideWidth&&("SAME"===f.padInfo.type||"VALID"===f.padInfo.type))t=conv2dByMatMul({x:o,filter:s,convInfo:f,backend:i});else if(f.strideWidth<=2&&"channelsLast"===h&&(0,a.OBj)().getBool("WEBGL_EXP_CONV")){let e=new Conv2DPackedProgram(f),r=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];t=i.runWebGLProgram(e,[o,s],"float32",r)}else if((0,a.OBj)().getBool("WEBGL_CONV_IM2COL"))t=conv2dWithIm2Row({x:o,filter:s,convInfo:f,backend:i});else{let e=new Conv2DProgram(f);t=i.runWebGLProgram(e,[o,s],"float32")}let y=reshape({inputs:{x:t},backend:i,attrs:{shape:f.outShape}});return i.disposeIntermediateTensorInfo(t),y}};/**
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
 */let Conv2DDerFilterProgram=class Conv2DDerFilterProgram{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,r=e.strideWidth,i=e.padInfo.top,n=e.padInfo.left,o="channelsLast"===e.dataFormat;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${i};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${n};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${o?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}};let Conv2DDerInputProgram=class Conv2DDerInputProgram{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,r=e.filterWidth,i=e.strideHeight,n=e.strideWidth,o="channelsLast"===e.dataFormat,a=t-1-e.padInfo.top,s=r-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${o?3:1}];

        ivec2 dyCorner = ivec2(coords[${o?1:2}], coords[${o?2:3}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${i}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${o}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}};let Conv3DDerFilterProgram=class Conv3DDerFilterProgram{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideDepth,r=e.strideHeight,i=e.strideWidth,n=e.padInfo.front,o=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${n};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${r} - ${o};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${i} - ${a};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};let Conv3DDerInputProgram=class Conv3DDerInputProgram{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterDepth,r=e.filterHeight,i=e.filterWidth,n=e.strideDepth,o=e.strideHeight,a=e.strideWidth,s=t-1-e.padInfo.front,l=r-1-e.padInfo.top,u=i-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${n}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${r}; wR++) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${r} - 1 - wR;

            for (int wC = 0; wC < ${i}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${i} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};let eV={kernelName:a.wUP,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,dy:o}=t,{strides:s,pad:l,dataFormat:u,dimRoundingMode:c,filterShape:d}=i,p=a.backend_util.convertConv2DDataFormat(u),h=a.backend_util.computeConv2DInfo(n.shape,d,s,1,l,c,!1,p),f=new Conv2DDerFilterProgram(h);return r.runWebGLProgram(f,[n,o],"float32")}};/**
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
 */let Conv2DDerInputPackedProgram=class Conv2DDerInputPackedProgram{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=(0,l.C9)(this.outputShape.length);let t=e.filterHeight,r=e.filterWidth,i=t-1-e.padInfo.top,n=r-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${n});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            int wCPerm = ${r} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};let ej={kernelName:a.wm,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,filter:o}=t,{inputShape:s,strides:l,pad:u,dataFormat:c,dimRoundingMode:d}=i,p=a.backend_util.convertConv2DDataFormat(c),h=a.backend_util.computeConv2DInfo(s,o.shape,l,1,u,d,!1,p);if((0,a.OBj)().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&"channelsLast"===p){let e=[[h.strideHeight,h.strideWidth]],t=new Conv2DDerInputPackedProgram(h);return r.runWebGLProgram(t,[n,o],"float32",e)}{let e=new Conv2DDerInputProgram(h);return r.runWebGLProgram(e,[n,o],"float32")}}},eH={kernelName:a.x12,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,filter:o}=t,{strides:s,pad:l,dilations:u}=i,c=a.backend_util.computeConv3DInfo(n.shape,o.shape,s,u,l),d=new Conv3DProgram(c);return r.runWebGLProgram(d,[n,o],"float32")}},ez={kernelName:a.o2y,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,dy:o}=t,{strides:s,pad:l,filterShape:u}=i,c=a.backend_util.computeConv3DInfo(n.shape,u,s,1,l),d=new Conv3DDerFilterProgram(c);return r.runWebGLProgram(d,[n,o],"float32")}},eU={kernelName:a.ik2,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,filter:o}=t,{pad:s,strides:l,inputShape:u}=i,c=a.backend_util.computeConv3DInfo(u,o.shape,l,1,s),d=new Conv3DDerInputProgram(c);return r.runWebGLProgram(d,[n,o],"float32")}},eG=x+`
  return cos(x);
`,eW=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${p}
  return result;
`,eX=unaryKernelFunc({opSnippet:eG,packedOpSnippet:eW}),eY={kernelName:a.mc4,backendName:"webgl",kernelFunc:eX},e$=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,eK=unaryKernelFunc({opSnippet:e$}),eq={kernelName:a.TR1,backendName:"webgl",kernelFunc:eK};/**
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
 */let CropAndResizeProgram=class CropAndResizeProgram{constructor(e,t,r,i,n){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[o,a,s,l]=e,[u]=t,[c,d]=r;this.outputShape=[u,c,d,l];let[p,h]=[`${a-1}.0`,`${s-1}.0`],[f,y,g]=c>1?[`${(a-1)/(c-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[m,v,b]=d>1?[`${(s-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${h} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${h}`];this.userCode=`
      const float height_ratio = float(${f});
      const float width_ratio = float(${m});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${o}) {
          return;
        }

        float height_scale = ${y};
        float width_scale = ${v};

        float in_y = ${g};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${n}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${h} ) {
          setOutput(float(${n}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${"bilinear"===i?1:0} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};let eZ={kernelName:a.VcC,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:i}=e,{image:n,boxes:o,boxInd:a}=t,{cropSize:s,method:l,extrapolationValue:u}=i,c=new CropAndResizeProgram(n.shape,o.shape,s,l,u);return r.runWebGLProgram(c,[n,o,a],"float32")}};(n=o||(o={})).Prod="*",n.Sum="+";let CumProgram=class CumProgram{constructor(e,t,r,i){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let n=this.outputShape.length,a=this.op===o.Prod?"1.0":"0.0",s=r?a:`getX(${cum_gpu_getCoords(n,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1],u="",c="";r?(u=i?`end != ${l-1}`:"end != 0",c=i?"end + 1":"end - 1"):(u=i?`end + pow2 < ${l}`:"end >= pow2",c=i?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${(0,d.kW)(n)} coords = getOutputCoords();
        int end = ${getFinalCoord(n,"coords",this.op)};
        float val = ${s};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${c};
          ${getFinalCoord(n,"coords",this.op)} = idx;
          val ${this.op}= getX(${cum_gpu_getCoords(n,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function cum_gpu_getCoords(e,t,r){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function getFinalCoord(e,t,r){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${r} for rank ${e} is not yet supported`)}/**
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
 */function cumImpl(e,t,r,i,n,o){let s=t.shape.length,l=a.backend_util.getAxesPermutation([i],s),u=t;null!=l&&(u=transpose({inputs:{x:t},backend:r,attrs:{perm:l}}));let c=a.backend_util.getInnerMostAxes(1,s)[0];if(c!==s-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${i}`);let d=u.shape[c],p=identity({inputs:{x:u},backend:r});for(let t=0;t<=Math.ceil(Math.log2(d))-1;t++){let i=new CumProgram(e,u.shape,!1,o),n=[[t]],a=p;p=r.runWebGLProgram(i,[p],p.dtype,n),r.disposeIntermediateTensorInfo(a)}if(n){let t=new CumProgram(e,u.shape,n,o),i=p;p=r.runWebGLProgram(t,[p],p.dtype),r.disposeIntermediateTensorInfo(i)}if(null!=l){let e=a.backend_util.getUndoAxesPermutation(l),t=transpose({inputs:{x:p},backend:r,attrs:{perm:e}});return r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(u),t}return p}let eJ={kernelName:a.Byc,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{axis:a,exclusive:s,reverse:l}=i;return cumImpl(o.Prod,n,r,a,s,l)}},eQ={kernelName:a.iHb,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{axis:a,exclusive:s,reverse:l}=i;return cumImpl(o.Sum,n,r,a,s,l)}},e0={kernelName:a.QRR,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,weights:o}=t,{size:a,binaryOutput:s}=i;if(1===n.shape.length){let e=r.readSync(n.dataId),t=r.readSync(o.dataId),i=(0,_.qO)(e,t,o.dtype,o.shape,a);return r.makeTensorInfo([a],o.dtype,i)}if(2===n.shape.length){let e=r.bufferSync(n),t=r.bufferSync(o),i=(0,_.cx)(e,t,a,s);return r.makeTensorInfo(i.shape,o.dtype,i.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}};/**
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
 */let DepthToSpaceProgram=class DepthToSpaceProgram{constructor(e,t,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};let e1={kernelName:a.T0n,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{blockSize:o,dataFormat:a}=i,s=n.shape[0],l="NHWC"===a?n.shape[1]:n.shape[2],u="NHWC"===a?n.shape[2]:n.shape[3],c="NHWC"===a?n.shape[3]:n.shape[1],d=l*o,p=u*o,h=c/(o*o),f="NHWC"===a?[s,d,p,h]:[s,h,d,p],y=new DepthToSpaceProgram(f,o,a);return r.runWebGLProgram(y,[n],n.dtype)}};/**
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
 */let DepthwiseConv2DProgram=class DepthwiseConv2DProgram{constructor(e,t=!1,r=null,i=!1,n=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=(0,l.C9)(this.outputShape.length);let o=e.filterHeight,a=e.filterWidth,s=e.outChannels/e.inChannels,u="",c="";r&&(u=i?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`
          float activation(float x) {
            ${r}
          }
        `,c="result = activation(result);"),t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${u}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${o}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${c}
        setOutput(result);
      }
    `}};/**
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
 */let DepthwiseConvPacked2DProgram=class DepthwiseConvPacked2DProgram{constructor(e,t=!1,r=null,i=!1,n=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=(0,l.C9)(this.outputShape.length);let o=e.outChannels/e.inChannels,s=e.padInfo.left,u=e.strideWidth,c=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,h=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<p;e++)h+=`
          vec4 xTexelC${2*e};
          int xTexelC${2*e}Ready;
          vec4 xTexelC${2*e+1};
          int xTexelC${2*e+1}Ready;
          vec4 xC${e};`;h+=`
    for (int r = 0; r < ${d}; r++) {
      `;for(let e=0;e<p;e++)h+=`
          xTexelC${2*e} = vec4(0.0);
          xTexelC${2*e}Ready = 0;
          xTexelC${2*e+1} = vec4(0.0);
          xTexelC${2*e+1}Ready = 0;
          xC${e} = vec4(0.0);`;h+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(p+1)/2;e++){let t=2*e;if(h+=`
          xC = xCCorner + ${t*c};
          `,1===u){if(t<p&&(s%2==1?(h+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,1===c&&t>0?h+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:h+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):h+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<p)){let e=s%2==0?a.D5U.nearestLargerEven(c):c;c%2==0&&s%2==1||c%2!=0&&s%2!=1?(h+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,c>1?h+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:h+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):1===e?h+=`
                    xC${t+1} = xTexelC${t};
                    `:h+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<p&&(s%2==1?(h+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<p&&(h+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(h+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<p&&(h+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<p&&(h+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<p&&(h+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}h+=`
    }
  
      }
    `;let f="",y="";r&&(f=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`vec4 activation(vec4 x) {
          ${r}
        }`,y="result = activation(result);"),t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${f}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${o};
        int q = d2 - d1 * ${o};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${h}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${t?"result += getBiasAtOutCoords();":""}
        ${y}
        setOutput(result);
      }
    `}};let e2={kernelName:a.cie,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o,filter:s}=r,{strides:l,pad:u,dilations:c,dimRoundingMode:d}=n,p=c;null==p&&(p=[1,1]),a.D5U.assert(a.backend_util.eitherStridesOrDilationsAreOne(l,p),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${p}'`);let h=a.backend_util.computeConv2DInfo(o.shape,s.shape,l,p,u,d,!0);t=(0,a.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels==1?new DepthwiseConvPacked2DProgram(h):new DepthwiseConv2DProgram(h);let f=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return i.runWebGLProgram(t,[o,s],"float32",f)}};/**
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
 */let DepthwiseConv2DDerFilterProgram=class DepthwiseConv2DDerFilterProgram{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,r=e.strideWidth,i=e.padInfo.top,n=e.padInfo.left,o=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${o} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${i};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${n};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}};let DepthwiseConv2DDerInputProgram=class DepthwiseConv2DDerInputProgram{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,r=e.filterWidth,i=e.strideHeight,n=e.strideWidth,o=t-1-e.padInfo.top,a=r-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${i}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};let e3={kernelName:a.sL$,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,dy:o}=t,{strides:s,dilations:l,pad:u,dimRoundingMode:c,filterShape:d}=i,p=a.backend_util.computeConv2DInfo(n.shape,d,s,l,u,c,!0),h=new DepthwiseConv2DDerFilterProgram(p);return r.runWebGLProgram(h,[n,o],"float32")}},e5={kernelName:a.y7R,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,filter:o}=t,{strides:s,dilations:l,pad:u,dimRoundingMode:c,inputShape:d}=i,p=a.backend_util.computeConv2DInfo(d,o.shape,s,l,u,c,!0),h=new DepthwiseConv2DDerInputProgram(p);return r.runWebGLProgram(h,[n,o],"float32")}};/**
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
 */let DiagProgram=class DiagProgram{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};let e4={kernelName:a.$w,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{x:i}=t,n=[...i.shape,...i.shape],o=a.D5U.sizeFromShape(i.shape),s=reshape({inputs:{x:i},backend:r,attrs:{shape:[o]}}),l=new DiagProgram(o),u=r.runWebGLProgram(l,[s],s.dtype),c=reshape({inputs:{x:u},backend:r,attrs:{shape:n}});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(u),c}};/**
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
 */let Dilation2DProgram=class Dilation2DProgram{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let{inHeight:t,inWidth:r,padInfo:i,strideHeight:n,strideWidth:o,filterHeight:a,filterWidth:s,dilationHeight:l,dilationWidth:u}=e,{top:c,left:d}=i;this.userCode=`
      const ivec2 strides = ivec2(${n}, ${o});
      const ivec2 pads = ivec2(${c}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${r}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};let e6={kernelName:a.p4S,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o,filter:s}=r,{strides:l,pad:u,dilations:c}=n,d=a.backend_util.computeDilation2DInfo(o.shape,s.shape,l,u,"NHWC",c),p=new Dilation2DProgram(d);t=i.runWebGLProgram(p,[o,s],"float32");let h=reshape({inputs:{x:t},backend:i,attrs:{shape:d.outShape}});return i.disposeIntermediateTensorInfo(t),h}},e8={kernelName:a.$g6,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{equation:n}=i,{allDims:o,summedDims:s,idDims:l}=a.backend_util.decodeEinsumEquation(n,t.length);a.backend_util.checkEinsumDimSizes(o.length,l,t);let{path:u,steps:c}=a.backend_util.getEinsumComputePath(s,l),d=c.length,p=null,h=o.length,f=[];for(let e=0;e<d;++e){for(let i of c[e]){let e;let{permutationIndices:n,expandDims:o}=a.backend_util.getEinsumPermutation(h,l[i]);a.backend_util.isIdentityPermutation(n)?e=t[i]:(e=transpose({inputs:{x:t[i]},backend:r,attrs:{perm:n}}),f.push(e));let s=e.shape.slice();for(let e=0;e<o.length;++e)s.splice(o[e],0,1);a.D5U.arraysEqual(e.shape,s)||(e=reshape({inputs:{x:e},backend:r,attrs:{shape:s}}),f.push(e)),null===p?p=e:(p=multiply({inputs:{a:e,b:p},backend:r}),f.push(p))}e<d-1&&(u[e]>=0&&(p=sum({inputs:{x:p},backend:r,attrs:{axis:u[e]-(o.length-h),keepDims:!1}}),f.push(p)),h--)}for(let e of f)e!==p&&r.disposeIntermediateTensorInfo(e);return p}},e9=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,e7=unaryKernelFunc({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:e9}),te={kernelName:a.SX0,backendName:"webgl",kernelFunc:e7},tt=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,tr={kernelName:a.HEU,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r}=e,{dy:i,y:n}=t,o=(0,a.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new BinaryOpPackedProgram(tt,i.shape,n.shape):new BinaryOpProgram("return (b >= 0.0) ? a : a * (b + 1.0);",i.shape,n.shape);return r.runWebGLProgram(o,[i,n],i.dtype)}},ti=`
  return vec4(equal(a, b));
`,tn=binaryKernelFunc({opSnippet:"return float(a == b);",packedOpSnippet:ti,dtype:"bool",cpuKernelImpl:_.gv}),to={kernelName:a.hdR,backendName:"webgl",kernelFunc:tn},ta=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${a.backend_util.ERF_P};
  float a1 = ${a.backend_util.ERF_A1};
  float a2 = ${a.backend_util.ERF_A2};
  float a3 = ${a.backend_util.ERF_A3};
  float a4 = ${a.backend_util.ERF_A4};
  float a5 = ${a.backend_util.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,ts=unaryKernelFunc({opSnippet:ta}),tl={kernelName:a.Omj,backendName:"webgl",kernelFunc:ts},tu=x+`
  return exp(x);
`,tc=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,td=unaryKernelFunc({opSnippet:tu,packedOpSnippet:tc,cpuKernelImpl:_.aX,dtype:"float32"}),tp={kernelName:a.NEP,backendName:"webgl",kernelFunc:td};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function expandDims(e){let{inputs:t,attrs:r,backend:i}=e,{dim:n}=r,{input:o}=t,s=o.shape.length,l=o.shape.slice(),u=n;return n<0&&(a.D5U.assert(-(s+1)<=n,()=>`Axis must be in the interval [${-(s+1)}, ${s}]`),u=s+n+1),l.splice(u,0,1),reshape({inputs:{x:o},backend:i,attrs:{shape:l}})}let th={kernelName:a.YFo,backendName:"webgl",kernelFunc:expandDims},tf="return exp(x) - 1.0;",ty=unaryKernelFunc({opSnippet:tf,packedOpSnippet:tf,cpuKernelImpl:_.tx}),tg={kernelName:a.Y0y,backendName:"webgl",kernelFunc:ty};/**
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
 */let FFTProgram=class FFTProgram{constructor(e,t,r){let i;this.variableNames=["real","imag"];let n=t[1];this.outputShape=t;let o=r?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=r?`${n}.0`:"1.0";if("real"===e)i="return real * expR - imag * expI;";else if("imag"===e)i="return real * expI + imag * expR;";else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${i}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};/**
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
 */function fftImpl(e,t,r){let i=r.texData.get(e.dataId),n=a.D5U.sizeFromShape(e.shape),o=e.shape[e.shape.length-1],s=n/o,l=reshape({inputs:{x:e},backend:r,attrs:{shape:[s,o]}}),u=l.shape,c=new FFTProgram("real",u,t),d=new FFTProgram("imag",u,t),p=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:u},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:u}],h=r.runWebGLProgram(c,p,"float32"),f=r.runWebGLProgram(d,p,"float32"),y=complex({inputs:{real:h,imag:f},backend:r});r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(f);let g=reshape({inputs:{x:y},backend:r,attrs:{shape:e.shape}});return r.disposeIntermediateTensorInfo(l),r.disposeIntermediateTensorInfo(y),g}let tm={kernelName:a.vwp,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{input:i}=t;return fftImpl(i,!1,r)}};/**
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
 */let FillProgram=class FillProgram{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};/**
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
 */function fill(e){let{backend:t,attrs:r}=e,{shape:i,value:n}=r,{dtype:o}=r;if("string"===(o=o||a.D5U.inferDtype(n))){let e=a.D5U.getArrayFromDType(o,a.D5U.sizeFromShape(i));return e.fill(n),t.makeTensorInfo(i,o,e)}{let e=new FillProgram(i,n),r=[[n]];return t.runWebGLProgram(e,[],o,r)}}let tv={kernelName:a.deh,backendName:"webgl",kernelFunc:fill};/**
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
 */let FlipLeftRightProgram=class FlipLeftRightProgram{constructor(e){this.variableNames=["Image"],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};/**
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
 */let tb={kernelName:a.Uyb,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{let{image:r}=e,i=new FlipLeftRightProgram(r.shape),n=t.runWebGLProgram(i,[r],r.dtype);return n}},tS="return floor(x);",tP=unaryKernelFunc({opSnippet:tS,packedOpSnippet:tS,cpuKernelImpl:_.MZ}),tC={kernelName:a.OR,backendName:"webgl",kernelFunc:tP},tx=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,tA=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,t_=binaryKernelFunc({opSnippet:tx,packedOpSnippet:tA,dtype:"int32"}),tT={kernelName:a.jeX,backendName:"webgl",kernelFunc:t_};var tw=r(87893);/**
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
 */let FromPixelsProgram=class FromPixelsProgram{constructor(e){this.variableNames=["A"];let t=(0,eB.A)(),[r,i]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${i}.0, ${r}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}};/**
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
 */let FromPixelsPackedProgram=class FromPixelsPackedProgram{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let t=(0,eB.A)(),[r,i]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${i}.0, ${r}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}};/**
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
 */let tR={kernelName:a.eBW,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:n}=e,{pixels:o}=t,{numChannels:s}=n,l="undefined"!=typeof HTMLVideoElement&&o instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&o instanceof HTMLImageElement,[c,d]=l?[o.videoWidth,o.videoHeight]:[o.width,o.height],p=[d,c],h=[d,c,s];if(u||l){let e=(0,a.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(null==i||e!==tE)&&(tE=e,i=document.createElement("canvas").getContext("2d",{willReadFrequently:tE})),i.canvas.width=c,i.canvas.height=d,i.drawImage(o,0,0,c,d),o=i.canvas}let f=r.makeTensorInfo(p,"int32");r.texData.get(f.dataId).usage=tw.v2.PIXELS,r.gpgpu.uploadPixelDataToTexture(r.getTexture(f.dataId),o);let y=(0,a.OBj)().getBool("WEBGL_PACK")?new FromPixelsPackedProgram(h):new FromPixelsProgram(h),g=r.runWebGLProgram(y,[f],"int32");return r.disposeData(f.dataId),g}},tE=(0,a.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU"),tD={kernelName:a._V0,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o,filter:s,bias:l,preluActivationWeights:u}=r,{strides:c,pad:d,dataFormat:p,dilations:h,dimRoundingMode:f,activation:y,leakyreluAlpha:g}=n,m=a.backend_util.convertConv2DDataFormat(p),v=a.backend_util.computeConv2DInfo(o.shape,s.shape,c,h,d,f,!1,m),b=[],S=null!=l,P=null!=u,C="leakyrelu"===y,prepareInputs=()=>{let e=[o,s],alignInputWithDataFormat=(e,t)=>{if("NCHW"===t&&1===e.shape.length&&1!==e.shape[0]){let t=reshape({inputs:{x:e},backend:i,attrs:{shape:[e.shape[0],1,1]}});return b.push(t),t}return e};if(S&&e.push(alignInputWithDataFormat(l,p)),P&&e.push(alignInputWithDataFormat(u,p)),C){let t=i.makeTensorInfo([],"float32",a.D5U.createScalarValue(g,"float32"));e.push(t),b.push(t)}return e};if(1===v.filterHeight&&1===v.filterWidth&&1===v.dilationHeight&&1===v.dilationWidth&&1===v.strideHeight&&1===v.strideWidth&&("SAME"===v.padInfo.type||"VALID"===v.padInfo.type))t=conv2dByMatMul({x:o,filter:s,convInfo:v,backend:i,bias:l,activation:y,preluActivationWeights:u,leakyreluAlpha:g});else if(v.strideWidth<=2&&"channelsLast"===m&&(0,a.OBj)().getBool("WEBGL_EXP_CONV")){let e=y?mapActivationToShaderProgram(y,!0):null,r=new Conv2DPackedProgram(v,S,e,P,C),n=[[v.padInfo.top,v.padInfo.left],[v.strideHeight,v.strideWidth],[v.dilationHeight,v.dilationWidth],[v.inHeight,v.inWidth]],o=prepareInputs();t=i.runWebGLProgram(r,o,"float32",n)}else if((0,a.OBj)().getBool("WEBGL_CONV_IM2COL"))t=conv2dWithIm2Row({x:o,filter:s,convInfo:v,backend:i,bias:l,activation:y,preluActivationWeights:u,leakyreluAlpha:g});else{let e=y?mapActivationToShaderProgram(y,!1):null,r=new Conv2DProgram(v,S,e,P,C),n=prepareInputs();t=i.runWebGLProgram(r,n,"float32")}let x=reshape({inputs:{x:t},backend:i,attrs:{shape:v.outShape}});return b.push(t),b.forEach(e=>i.disposeIntermediateTensorInfo(e)),x}},tO={kernelName:a.luS,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o,filter:s,bias:l,preluActivationWeights:u}=r,{strides:c,pad:d,dilations:p,dimRoundingMode:h,activation:f,leakyreluAlpha:y}=n,g=[],m=p;null==m&&(m=[1,1]),a.D5U.assert(a.backend_util.eitherStridesOrDilationsAreOne(c,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${m}'`);let v=a.backend_util.computeConv2DInfo(o.shape,s.shape,c,m,d,h,!0),b=(0,a.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&v.strideWidth<=2&&v.outChannels/v.inChannels==1,S=f?mapActivationToShaderProgram(f,b):null,P=[o,s],C=null!=l,x=null!=u,A="leakyrelu"===f;if(C&&P.push(l),x&&P.push(u),A){let e=i.makeTensorInfo([],"float32",a.D5U.createScalarValue(y,"float32"));P.push(e),g.push(e)}t=b?new DepthwiseConvPacked2DProgram(v,C,S,x,A):new DepthwiseConv2DProgram(v,C,S,x,A);let _=[[v.padInfo.top,v.padInfo.left],[v.strideHeight,v.strideWidth],[v.dilationHeight,v.dilationWidth],[v.inHeight,v.inWidth]],T=i.runWebGLProgram(t,P,"float32",_);return g.forEach(e=>i.disposeIntermediateTensorInfo(e)),T}};let GatherNDProgram=class GatherNDProgram{constructor(e,t,r,i){this.sliceDim=e,this.strides=t,this.paramsShape=i,this.variableNames=["x","indices"],this.outputShape=r;let n=(0,d.kW)(r.length),o=`
    int index;`;for(let e=0;e<this.sliceDim;e++)o+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${n} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${o}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};let tI={kernelName:a.q1x,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{params:i,indices:n}=t,o=n.shape,s=o[o.length-1],l=a.D5U.sizeFromShape(i.shape),[u,c,d,p]=a.backend_util.prepareAndValidate(i,n),h=reshape({inputs:{x:n},backend:r,attrs:{shape:[c,s]}}),f=reshape({inputs:{x:i},backend:r,attrs:{shape:[a.D5U.sizeFromShape(i.shape)/d,d]}});if(r.shouldExecuteOnCPU([i,n])||"string"===i.dtype){let e=r.readSync(n.dataId),t=r.bufferSync(i),o=(0,_.TD)(e,t,i.dtype,c,s,d,p,i.shape,l);return r.makeTensorInfo(u,i.dtype,o.values)}let y=new GatherNDProgram(s,p,[c,d],i.shape),g=r.runWebGLProgram(y,[f,h],f.dtype),m=reshape({inputs:{x:g},backend:r,attrs:{shape:u}});return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(g),m}};/**
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
 */let GatherProgram=class GatherProgram{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;let r=(0,d.kW)(this.rank),i=function(e,t){let r=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[];for(let t=0;t<e.length;t++)2===t?i.push("index"):i.push(`${r[t]}`);return i.join()}(e,0);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${i}));
      }
    `}};/**
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
 */function gatherV2(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,indices:o}=t,{axis:s,batchDims:l}=i,u=a.D5U.parseAxisParam(s,n.shape)[0];if((0,a.OBj)().get("DEBUG")){let e=r.readSync(o.dataId),t=n.shape[u];for(let r=0;r<e.length;++r){let i=e[r];a.D5U.assert(i<=t-1&&i>=0,()=>`GatherV2: the index value ${i} is not in [0, ${t-1}]`)}}let c=a.backend_util.segment_util.collectGatherOpShapeInfo(n,o,u,l),d=a.D5U.sizeFromShape(o.shape),p=[],h=reshape({inputs:{x:n},backend:r,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=reshape({inputs:{x:o},backend:r,attrs:{shape:[c.batchSize,d/c.batchSize]}});p.push(h),p.push(f);let y=[c.batchSize,c.outerSize,d/c.batchSize,c.sliceSize];if(r.shouldExecuteOnCPU([n,o])||"string"===n.dtype){let e=r.bufferSync(f),t=r.bufferSync(h),i=(0,_.m$)(t,e,y);return p.forEach(e=>r.disposeIntermediateTensorInfo(e)),r.makeTensorInfo(c.outputShape,i.dtype,i.values)}let g=new GatherProgram(h.shape,y),m=r.runWebGLProgram(g,[h,f],h.dtype);p.push(m);let v=reshape({inputs:{x:m},backend:r,attrs:{shape:c.outputShape}});return p.forEach(e=>r.disposeIntermediateTensorInfo(e)),v}let tM={kernelName:a.qi_,backendName:"webgl",kernelFunc:gatherV2},tk=`
  return vec4(greaterThan(a, b));
`,tL=binaryKernelFunc({opSnippet:"return float(a > b);",packedOpSnippet:tk,cpuKernelImpl:_.B_,dtype:"bool"}),tN={kernelName:a.iZT,backendName:"webgl",kernelFunc:tL},tB=`
  return vec4(greaterThanEqual(a, b));
`,tF=binaryKernelFunc({opSnippet:"return float(a >= b);",packedOpSnippet:tB,dtype:"bool",cpuKernelImpl:_.ji}),tV={kernelName:a.Acj,backendName:"webgl",kernelFunc:tF},tj={kernelName:a.Qg5,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{input:i}=t;return fftImpl(i,!0,r)}},tH=unaryKernelFunc({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),tz={kernelName:a.avt,backendName:"webgl",kernelFunc:tH},tU=unaryKernelFunc({opSnippet:"return float(isinf(x));",dtype:"bool"}),tG={kernelName:a.iWB,backendName:"webgl",kernelFunc:tU},tW=unaryKernelFunc({opSnippet:"return float(isnan(x));",dtype:"bool"}),tX={kernelName:a.r7n,backendName:"webgl",kernelFunc:tW},tY=`
  return vec4(lessThan(a, b));
`,t$=binaryKernelFunc({opSnippet:"return float(a < b);",packedOpSnippet:tY,cpuKernelImpl:_.kY,dtype:"bool"}),tK={kernelName:a.vtC,backendName:"webgl",kernelFunc:t$},tq=`
  return vec4(lessThanEqual(a, b));
`,tZ=binaryKernelFunc({opSnippet:"return float(a <= b);",packedOpSnippet:tq,cpuKernelImpl:_.Rn,dtype:"bool"}),tJ={kernelName:a.CAk,backendName:"webgl",kernelFunc:tZ},tQ={kernelName:a.e7N,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{backend:t,attrs:r}=e,{start:i,stop:n,num:o}=r,a=(0,_.PQ)(i,n,o);return t.makeTensorInfo([a.length],"float32",a)}},t0=x+`
  return x < 0.0 ? 0./0. : log(x);
`,t1=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,t2=unaryKernelFunc({opSnippet:t0,packedOpSnippet:t1,cpuKernelImpl:_.Sd}),t3={kernelName:a.ZbH,backendName:"webgl",kernelFunc:t2},t5=x+`
  return log(1.0 + x);
`,t4=unaryKernelFunc({opSnippet:t5}),t6={kernelName:a.kU,backendName:"webgl",kernelFunc:t4},t8=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,t9=binaryKernelFunc({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:t8,dtype:"bool"}),t7={kernelName:a.PYm,backendName:"webgl",kernelFunc:t9},re=unaryKernelFunc({opSnippet:"return float(!(x >= 1.0));"}),rt={kernelName:a.VfG,backendName:"webgl",kernelFunc:re},rr=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,ri=binaryKernelFunc({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:rr,dtype:"bool"}),rn={kernelName:a.MZg,backendName:"webgl",kernelFunc:ri};/**
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
 */let LRNProgram=class LRNProgram{constructor(e,t,r,i,n){let o;this.variableNames=["x"],this.outputShape=[];let a=e[3]-1;this.outputShape=e;let s=`float(${r}) + float(${i}) * sum`;o=.5===n?`inversesqrt(${s})`:1===n?`1.0/(${s})`:`exp(log(${s}) * float(-${n}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${t}; j <= ${t}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${o};
        setOutput(val);
      }
    `}};/**
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
 */let LRNPackedProgram=class LRNPackedProgram{constructor(e,t,r,i,n){let o;this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=e[3]-1;this.outputShape=e;let s=`float(${r}) + float(${i}) * sum`;o=.5===n?`inversesqrt(${s})`:1===n?`1.0/(${s})`:`exp(log(${s}) * float(-${n}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${t};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${t}; j <= ${t}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${o};
        setOutput(result);
      }
    `}};let ro={kernelName:a.eZ0,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{depthRadius:o,bias:s,alpha:l,beta:u}=i,c=(0,a.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new LRNPackedProgram(n.shape,o,s,l,u):new LRNProgram(n.shape,o,s,l,u);return r.runWebGLProgram(c,[n],n.dtype)}};/**
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
 */let LRNGradProgram=class LRNGradProgram{constructor(e,t,r,i,n){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=r,this.alpha=i,this.beta=n,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${i}) * norm + float(${r});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${i})
                * float(${n})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${n});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};let ra={kernelName:a.Hhh,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:i}=e,{x:n,y:o,dy:a}=t,{depthRadius:s,bias:l,alpha:u,beta:c}=i,d=new LRNGradProgram(n.shape,s,l,u,c);return r.runWebGLProgram(d,[n,o,a],n.dtype)}};/**
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
 */function max(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{reductionIndices:s,keepDims:l}=n,u=o.shape.length,c=a.D5U.parseAxisParam(s,o.shape),d=c,p=a.backend_util.getAxesPermutation(d,u),h=null!=p,f=i.shouldExecuteOnCPU([o]),y=o;if(h){if(f){let e=i.texData.get(y.dataId),t=e.values,r=Array(u);for(let e=0;e<r.length;e++)r[e]=o.shape[p[e]];let n=(0,_.Fv)(t,o.shape,o.dtype,p,r);y=i.makeTensorInfo(r,o.dtype);let a=i.texData.get(y.dataId);a.values=n}else y=transposeImpl(o,p,i);d=a.backend_util.getInnerMostAxes(d.length,u)}a.backend_util.assertAxesAreInnerMostDims("max",d,u);let[g,m]=a.backend_util.computeOutAndReduceShapes(y.shape,d),v=g;if(l&&(v=a.backend_util.expandShapeToKeepDim(g,c)),f){let e=i.texData.get(y.dataId),r=e.values,n=(0,_.$O)(r,a.D5U.sizeFromShape(m),v,o.dtype);t=i.makeTensorInfo(v,o.dtype);let s=i.texData.get(t.dataId);s.values=n}else t=/**
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
 */function(e,t,r,i){let n=a.D5U.sizeFromShape(t),o=a.D5U.sizeFromShape(e.shape),s=o/n,l=reshape({inputs:{x:e},attrs:{shape:[s,n]},backend:i}),u=reduce(l,e.dtype,"max",i),c=reshape({inputs:{x:u},attrs:{shape:r},backend:i});return i.disposeIntermediateTensorInfo(l),i.disposeIntermediateTensorInfo(u),c}(y,m,v,i);return h&&i.disposeIntermediateTensorInfo(y),t}let rs={kernelName:a.YoZ,backendName:"webgl",kernelFunc:max},rl=u+`
  return max(a, b);
`,ru=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+p+`
  return result;
`,rc=binaryKernelFunc({opSnippet:rl,packedOpSnippet:ru,cpuKernelImpl:_.nL}),rd={kernelName:a.BMI,backendName:"webgl",kernelFunc:rc},rp={kernelName:a.mTV,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t;(0,E.HS)(n,"maxPool");let{filterSize:o,strides:s,pad:l,dimRoundingMode:u}=i;a.D5U.assert(a.backend_util.eitherStridesOrDilationsAreOne(s,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '1'`);let c=a.backend_util.computePool2DInfo(n.shape,o,s,1,l,u);if(1===c.filterWidth&&1===c.filterHeight&&a.D5U.arraysEqual(c.inShape,c.outShape))return identity({inputs:{x:n},backend:r});let d=new Pool2DProgram(c,"max",!1);return r.runWebGLProgram(d,[n],n.dtype)}},rh={kernelName:a.OAf,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{filterSize:o,strides:s,pad:l,dataFormat:u,dimRoundingMode:c}=i,d=a.backend_util.computePool3DInfo(n.shape,o,s,[1,1,1],l,c,u),p=new Pool3DProgram(d,"max",!1);return r.runWebGLProgram(p,[n],n.dtype)}};/**
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
 */let MaxPool2DBackpropProgram=class MaxPool2DBackpropProgram{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideHeight,r=e.strideWidth,i=e.dilationHeight,n=e.effectiveFilterHeight,o=e.effectiveFilterWidth,a=n-1-e.padInfo.top,s=o-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${n};
          wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${n*o-1} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${o} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}};let MaxPool3DBackpropProgram=class MaxPool3DBackpropProgram{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideDepth,r=e.strideHeight,i=e.strideWidth,n=e.dilationDepth,o=e.dilationHeight,a=e.dilationWidth,s=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=s-1-e.padInfo.front,d=l-1-e.padInfo.top,p=u-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${c}, ${d}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${n}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${o}) {
            float dyR = float(dyRCorner + wR) / ${r}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${s*l*u-1} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};let rf={kernelName:a.OU7,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o}=t,{filterSize:s,strides:l,pad:u,dimRoundingMode:c}=i,d=a.backend_util.computePool3DInfo(o.shape,s,l,[1,1,1],u,c),p=new Pool3DProgram(d,"max",!0),h=r.runWebGLProgram(p,[o],o.dtype),f=new MaxPool3DBackpropProgram(d),y=r.runWebGLProgram(f,[n,h],o.dtype);return r.disposeIntermediateTensorInfo(h),y}},ry={kernelName:a.OV7,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{dy:n,input:o,output:s}=t;(0,E.HS)([o,s],"maxPoolGrad");let{filterSize:l,strides:u,pad:c,dimRoundingMode:d}=i,p=a.backend_util.computePool2DInfo(o.shape,l,u,1,c,d),h=new Pool2DProgram(p,"max",!0),f=r.runWebGLProgram(h,[o],o.dtype),y=new MaxPool2DBackpropProgram(p),g=r.runWebGLProgram(y,[n,f],o.dtype);return r.disposeIntermediateTensorInfo(f),g}},rg={kernelName:a.vFR,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:i}=e,{filterSize:n,strides:o,pad:s,includeBatchInIndex:l}=t;a.D5U.assert(4===i.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${i.shape.length}.`);let u=[1,1];a.D5U.assert(a.backend_util.eitherStridesOrDilationsAreOne(o,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let c=a.backend_util.computePool2DInfo(i.shape,n,o,u,s),[d,p]=/**
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
 */function(e,t,r,i){let n=new Pool2DProgram(r,"max",!1),o=i.runWebGLProgram(n,[e],"float32");n=new Pool2DProgram(r,"max",!0,!0,t);let a=i.runWebGLProgram(n,[e],"float32");return[o,a]}(i,l,c,r);return[d,p]}},rm={kernelName:a.q2K,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:i}=e,{keepDims:n,axis:o}=t,s=i.shape.length,l=a.D5U.parseAxisParam(o,i.shape),u=l,c=a.backend_util.getAxesPermutation(u,s),d=null!=c,p=r.shouldExecuteOnCPU([i]),h=[],f=i;if(d){if(p){let e=r.texData.get(f.dataId),t=e.values,n=Array(s);for(let e=0;e<n.length;e++)n[e]=i.shape[c[e]];let o=(0,_.Fv)(t,i.shape,i.dtype,c,n);f=r.makeTensorInfo(n,i.dtype);let a=r.texData.get(f.dataId);a.values=o}else f=transposeImpl(i,c,r);h.push(f),u=a.backend_util.getInnerMostAxes(u.length,s)}a.backend_util.assertAxesAreInnerMostDims("sum",u,s);let[y,g]=a.backend_util.computeOutAndReduceShapes(f.shape,u),m=y;n&&(m=a.backend_util.expandShapeToKeepDim(y,l));let v=/**
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
 */function(e,t,r,i){let n=a.D5U.sizeFromShape(t),o=a.D5U.sizeFromShape(e.shape),s=o/n,l=reshape({inputs:{x:e},attrs:{shape:[s,n]},backend:i}),u=reduce(l,"float32","mean",i),c=reshape({inputs:{x:u},attrs:{shape:r},backend:i});return i.disposeIntermediateTensorInfo(l),i.disposeIntermediateTensorInfo(u),c}(f,g,m,r);for(let e of h)r.disposeIntermediateTensorInfo(e);return v}},rv={kernelName:a.c17,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{axis:s,keepDims:l}=n,u=o.shape.length,c=a.D5U.parseAxisParam(s,o.shape),d=c,p=a.backend_util.getAxesPermutation(d,u),h=o;null!=p&&(h=transpose({inputs:{x:o},backend:i,attrs:{perm:p}}),d=a.backend_util.getInnerMostAxes(d.length,o.shape.length)),a.backend_util.assertAxesAreInnerMostDims("min",d,u);let[f,y]=a.backend_util.computeOutAndReduceShapes(h.shape,d),g=a.D5U.sizeFromShape(y),m=reshape({inputs:{x:h},backend:i,attrs:{shape:[-1,g]}}),v=reduce(m,m.dtype,"min",i);if(l){let e=a.backend_util.expandShapeToKeepDim(f,c);t=reshape({inputs:{x:v},backend:i,attrs:{shape:e}})}else t=reshape({inputs:{x:v},backend:i,attrs:{shape:f}});return i.disposeIntermediateTensorInfo(m),i.disposeIntermediateTensorInfo(v),null!=p&&i.disposeIntermediateTensorInfo(h),t}},rb=u+`
  return min(a, b);
`,rS=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+p+`
  return result;
`,rP=binaryKernelFunc({opSnippet:rb,packedOpSnippet:rS,cpuKernelImpl:_.r}),rC={kernelName:a.q8u,backendName:"webgl",kernelFunc:rP};/**
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
 */let MirrorPadProgram=class MirrorPadProgram{constructor(e,t,r){this.variableNames=["x"],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let i=e.length,n=(0,d.kW)(i),o=t.map(e=>e[0]).join(","),a=t.map((t,r)=>t[0]+e[r]).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,i),l="reflect"===r?0:1;if(1===i){this.userCode=`
        int start = ${o};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${n} start = ${n}(${o});
      ${n} end = ${n}(${a});

      void main() {
        ${n} outC = getOutputCoords();
        for (int i = 0; i < ${i}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${n} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}};/**
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
 */let MirrorPadPackedProgram=class MirrorPadPackedProgram{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let i=e.length,n=(0,d.kW)(i),o=t.map(e=>e[0]).join(","),a=t.map((t,r)=>t[0]+e[r]).join(","),s=(0,c.Ky)("rc",i),l=(0,c.Ky)("source",i),u=`${s[i-1]} < ${this.outputShape[i-1]}`,p=1===i?"source":`vec2(${l.slice(-2).join()})`,h="reflect"===r?0:1,f="";if(1===i){let e=`
        ${n} source = rc;
        if (source < start) {
          source = start * 2 - source - ${h};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${h};
        }
        source -= start;
      `;f=`
        ${n} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${s[i-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
      `}else{let e=`
        ${n} source = rc;
        ${n} lt = ${n}(lessThan(source, start));
        ${n} gte = ${n}(greaterThanEqual(source, end));
        ${n} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${h}) +
                gte * ((end - 1) * 2 - source + ${h});
        source -= start;
      `;f=`
        ${n} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${s[i-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
        rc = outputLoc;
        ${s[i-2]} += 1;
        if(${s[i-2]} < ${this.outputShape[i-2]}) {
          ${e}
          result[2] = getChannel(getX(${l.join()}), ${p});
          ${s[i-1]} += 1;
          if(${u}) {
            ${e}
            result[3] = getChannel(getX(${l.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${n} start = ${n}(${o});
      const ${n} end = ${n}(${a});

      void main() {
        ${n} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}};let rx={kernelName:a.jQs,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:r})=>{let{x:i}=e,{paddings:n,mode:o}=r,s=(0,a.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new MirrorPadPackedProgram(i.shape,n,o):new MirrorPadProgram(i.shape,n,o),l=t.runWebGLProgram(s,[i],i.dtype);return l}},rA=`if (b == 0.0) return NAN;
  return mod(a, b);`,r_=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+p+`
  return result;
`,rT=binaryKernelFunc({opSnippet:rA,packedOpSnippet:r_}),rw={kernelName:a.Vbg,backendName:"webgl",kernelFunc:rT};/**
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
 */let MultinomialProgram=class MultinomialProgram{constructor(e,t,r){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}};/**
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
 */let rR=`
if (a == b) {
  return 1.0;
};
return a / b;`,rE=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,rD=binaryKernelFunc({opSnippet:rR,packedOpSnippet:rE,checkOutOfBounds:!0}),rO={kernelName:a.oHH,backendName:"webgl",kernelFunc:rD},rI="return a - b;",rM=binaryKernelFunc({opSnippet:rI,packedOpSnippet:rI,supportsComplex:!0,cpuKernelImpl:_.kI}),rk={kernelName:a.Tr8,backendName:"webgl",kernelFunc:rM};/**
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
 */function softmax(e){let{inputs:t,backend:r,attrs:i}=e,{logits:n}=t,{dim:o}=i,s=a.D5U.parseAxisParam([o],n.shape),l=max({inputs:{x:n},backend:r,attrs:{reductionIndices:s,keepDims:!1}}),u=a.backend_util.expandShapeToKeepDim(l.shape,s),c=reshape({inputs:{x:l},backend:r,attrs:{shape:u}}),d=rM({inputs:{a:n,b:c},backend:r}),p=td({inputs:{x:d},backend:r}),h=sum({inputs:{x:p},backend:r,attrs:{axis:s,keepDims:!1}}),f=reshape({inputs:{x:h},backend:r,attrs:{shape:u}}),y=rD({inputs:{a:p,b:f},backend:r});return r.disposeIntermediateTensorInfo(l),r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(f),y}let rL={kernelName:a.Gcp,backendName:"webgl",kernelFunc:softmax},rN={kernelName:a.NZg,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{logits:n}=t,{numSamples:o,seed:a,normalized:s}=i,l=s?n:softmax({inputs:{logits:n},backend:r,attrs:{dim:n.shape.length-1}}),u=l.shape[0],c=l.shape[1],d=new MultinomialProgram(u,c,o),p=r.runWebGLProgram(d,[l],"int32",[[a]]);return s||r.disposeIntermediateTensorInfo(l),p}},rB=P.D1+`
  return -x;
`,rF=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,rV={kernelName:a.kuV,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:r,backend:i}=e,{x:n}=r;if(i.shouldExecuteOnCPU([n])){let e=i.texData.get(n.dataId),[t,r]=(0,_.Bo)(e.values,n.shape,n.dtype);return i.makeTensorInfo(r,n.dtype,t)}return t=(0,a.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new C.cc(n.shape,rF):new P.l(n.shape,rB),i.runWebGLProgram(t,[n],n.dtype)}},rj=a.GDt.GP,rH={kernelName:a.uv1,backendName:"webgl",kernelFunc:function(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:i}=e,{boxes:n,scores:o}=t,{maxOutputSize:s,iouThreshold:l,scoreThreshold:u}=i,c=r.readSync(n.dataId),d=r.readSync(o.dataId),{selectedIndices:p}=rj(c,d,s,l,u);return r.makeTensorInfo([p.length],"int32",new Int32Array(p))}},rz=a.GDt.qP,rU={kernelName:a.cye,backendName:"webgl",kernelFunc:function(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:i}=e,{boxes:n,scores:o}=t,{maxOutputSize:s,iouThreshold:l,scoreThreshold:u,padToMaxOutputSize:c}=i,d=r.readSync(n.dataId),p=r.readSync(o.dataId),{selectedIndices:h,validOutputs:f}=rz(d,p,s,l,u,c);return[r.makeTensorInfo([h.length],"int32",new Int32Array(h)),r.makeTensorInfo([],"int32",new Int32Array([f]))]}},rG=a.GDt.pA,rW={kernelName:a.W0H,backendName:"webgl",kernelFunc:function(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:i}=e,{boxes:n,scores:o}=t,{maxOutputSize:s,iouThreshold:l,scoreThreshold:u,softNmsSigma:c}=i,d=r.readSync(n.dataId),p=r.readSync(o.dataId),{selectedIndices:h,selectedScores:f}=rG(d,p,s,l,u,c);return[r.makeTensorInfo([h.length],"int32",new Int32Array(h)),r.makeTensorInfo([f.length],"float32",new Float32Array(f))]}};/**
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
 */let OneHotProgram=class OneHotProgram{constructor(e,t,r,i){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${i}), float(${r}),
                      float(index == coords.y)));
      }
    `}};let rX={kernelName:a.we_,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:i}=e,{indices:n}=t,{dtype:o,depth:s,onValue:l,offValue:u}=i,c=a.D5U.sizeFromShape(n.shape),d=new OneHotProgram(c,s,l,u),p=reshape({inputs:{x:n},backend:r,attrs:{shape:[c]}}),h=r.runWebGLProgram(d,[p],o);r.disposeIntermediateTensorInfo(p);let f=[...n.shape,s],y=reshape({inputs:{x:h},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(h),y}};/**
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
 */function zerosLike(e){let{inputs:t,backend:r}=e,{x:i}=t;if("complex64"!==i.dtype)return fill({attrs:{shape:i.shape,dtype:i.dtype,value:"string"===i.dtype?"":0},backend:r});{let e=real({inputs:{input:i},backend:r}),t=zerosLike({inputs:{x:e},backend:r}),n=imag({inputs:{input:i},backend:r}),o=zerosLike({inputs:{x:n},backend:r}),a=complex({inputs:{real:t,imag:o},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(o),a}}let rY={kernelName:a.RuY,backendName:"webgl",kernelFunc:zerosLike},r$={kernelName:a.qWM,backendName:"webgl",kernelFunc:/**
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
 */function onesLike(e){let{inputs:t,backend:r}=e,{x:i}=t;if("string"===i.dtype)throw Error("onesLike is not supported under string dtype");if("complex64"!==i.dtype)return fill({attrs:{shape:i.shape,dtype:i.dtype,value:1},backend:r});{let e=real({inputs:{input:i},backend:r}),t=onesLike({inputs:{x:e},backend:r}),n=imag({inputs:{input:i},backend:r}),o=zerosLike({inputs:{x:n},backend:r}),a=complex({inputs:{real:t,imag:o},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(o),a}}},rK={kernelName:a.QiL,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{axis:n}=i;if(1===t.length)return expandDims({inputs:{input:t[0]},backend:r,attrs:{dim:n}});let o=t[0].shape,s=t[0].dtype;t.forEach(e=>{a.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),a.D5U.assert(s===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let l=[],u=t.map(e=>{let t=expandDims({inputs:{input:e},backend:r,attrs:{dim:n}});return l.push(t),t}),c=concat({inputs:u,backend:r,attrs:{axis:n}});return l.forEach(e=>r.disposeIntermediateTensorInfo(e)),c}};/**
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
 */let PadProgram=class PadProgram{constructor(e,t,r){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let i=e.length,n=(0,d.kW)(i),o=t.map(e=>e[0]).join(","),a=t.map((t,r)=>t[0]+e[r]).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,i);if(1===i){this.userCode=`
        int start = ${o};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${n} start = ${n}(${o});
      ${n} end = ${n}(${a});

      void main() {
        ${n} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${n} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}};/**
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
 */let PadPackedProgram=class PadPackedProgram{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let i=e.length,n=(0,d.kW)(i),o=t.map(e=>e[0]).join(","),a=t.map((t,r)=>t[0]+e[r]).join(","),s=(0,c.Ky)("rc",i),l=(0,c.Ky)("source",i),u=`${s[i-1]} < ${this.outputShape[i-1]}`,p=1===i?"source":`vec2(${l.slice(-2).join()})`,h=[`${n} rc = outputLoc;`,`${s[i-1]} += 1;
       if(${u}) {
      `,1===i?"":`}
       rc = outputLoc;
       ${s[i-2]} += 1;
       if(${s[i-2]} < ${this.outputShape[i-2]}) {`,1===i?"":`  ${s[i-1]} += 1;
         if(${u}) {`],f=1===i?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",y="";for(let e=0,t=1===i?2:4;e<t;e++)y+=`
        ${h[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${n} source = rc - start;
          result[${e}] = getChannel(getX(${l.join()}), ${p});
        }
      `;y+=1===i?"} ":"}}",this.userCode=`
      const ${n} start = ${n}(${o});
      const ${n} end = ${n}(${a});

      void main() {
        ${n} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${y}
        setOutput(result);
      }
    `}};/**
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
 */let padV2=e=>{let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{paddings:o,constantValue:s}=i;if(0===a.D5U.sizeFromShape(n.shape)){let e=o.map((e,t)=>e[0]+n.shape[t]+e[1]);return fill({backend:r,attrs:{shape:e,value:s,dtype:n.dtype}})}let l=(0,a.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new PadPackedProgram(n.shape,o,s):new PadProgram(n.shape,o,s),u=[[s]];return r.runWebGLProgram(l,[n],n.dtype,u)},rq={kernelName:a.lyA,backendName:"webgl",kernelFunc:padV2},rZ=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,rJ=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+p+`
  return result;
`,rQ=binaryKernelFunc({opSnippet:rZ,packedOpSnippet:rJ}),r0={kernelName:a.pe_,backendName:"webgl",kernelFunc:rQ},r1={kernelName:a.DlI,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{axis:s,keepDims:l}=n,u=o.shape.length,c=[],d=a.D5U.parseAxisParam(s,o.shape),p=d,h=a.backend_util.getAxesPermutation(p,u),f=o;if(null!=h&&(f=transpose({inputs:{x:o},backend:i,attrs:{perm:h}}),p=a.backend_util.getInnerMostAxes(p.length,u),c.push(f)),a.backend_util.assertAxesAreInnerMostDims("prod",p,u),i.shouldExecuteOnCPU([f])){let e=i.texData.get(f.dataId).values,{outVals:r,outShape:n,outDtype:o}=(0,_.Tg)(f.shape,f.dtype,e,p);t=i.makeTensorInfo(n,o,r)}else{let[e,r]=a.backend_util.computeOutAndReduceShapes(f.shape,p),n=a.D5U.sizeFromShape(r),s=reshape({inputs:{x:f},backend:i,attrs:{shape:[-1,n]}}),l=(0,a.z4k)(o.dtype),u=reduce(s,l,"prod",i);t=reshape({inputs:{x:u},backend:i,attrs:{shape:e}}),c.push(s),c.push(u)}if(l){c.push(t);let e=a.backend_util.expandShapeToKeepDim(t.shape,d);t=reshape({inputs:{x:t},backend:i,attrs:{shape:e}})}return c.forEach(e=>i.disposeIntermediateTensorInfo(e)),t}},r2={kernelName:a.dDz,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{paramsNestedSplits:n,paramsDenseValues:o,indices:a}=t,{outputRaggedRank:s}=i,l=n.map(e=>r.readSync(e.dataId)),u=n.map(e=>e.shape),c=r.readSync(o.dataId),d=r.readSync(a.dataId),[p,h,f]=(0,_.Qs)(l,u,c,o.shape,o.dtype,d,a.shape,s),y=p.map(e=>r.makeTensorInfo([e.length],"int32",e)),g=r.makeTensorInfo(f,o.dtype,h);return y.concat([g])}},r3={kernelName:a.CQl,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{starts:i,limits:n,deltas:o}=t,a=r.readSync(i.dataId),s=r.readSync(n.dataId),l=r.readSync(o.dataId),[u,c]=(0,_.M8)(a,i.shape,i.dtype,s,n.shape,l,o.shape),d=r.makeTensorInfo([u.length],"int32",u),p=r.makeTensorInfo([c.length],i.dtype,c);return[d,p]}},r5={kernelName:a.BiW,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{shape:n,values:o,defaultValue:a,rowPartitionTensors:s}=t,{rowPartitionTypes:l}=i,u=r.readSync(n.dataId),c=r.readSync(o.dataId),d=r.readSync(a.dataId),p=s.map(e=>r.readSync(e.dataId)),h=s.map(e=>e.shape),[f,y]=(0,_.fy)(u,n.shape,c,o.shape,o.dtype,d,a.shape,p,h,l);return r.makeTensorInfo(f,o.dtype,y)}},range=e=>{let{backend:t,attrs:r}=e,{start:i,stop:n,step:o,dtype:a}=r,s=(0,_.hO)(i,n,o,a);return t.makeTensorInfo([s.length],a,s)},r4={kernelName:a.e6w,backendName:"webgl",kernelFunc:range},r6=unaryKernelFunc({opSnippet:"return 1.0 / x;"}),r8={kernelName:a.$HU,backendName:"webgl",kernelFunc:r6},r9=P.D1+`
  return (x < 0.0) ? 0.0 : x;
`,r7=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ie=unaryKernelFunc({opSnippet:r9,packedOpSnippet:r7}),it={kernelName:a.qkr,backendName:"webgl",kernelFunc:ie},ir=P.D1+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ii=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,io=unaryKernelFunc({opSnippet:ir,packedOpSnippet:ii}),ia={kernelName:a.SbG,backendName:"webgl",kernelFunc:io};/**
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
 */let ResizeBilinearProgram=class ResizeBilinearProgram{constructor(e,t,r,i,n){this.variableNames=["A"],this.outputShape=[];let[o,a,s,l]=e;this.outputShape=[o,t,r,l];let u=[i&&t>1?a-1:a,i&&r>1?s-1:s],c=[i&&t>1?t-1:t,i&&r>1?r-1:r];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/c[0]},
          ${u[1]/c[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${n?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}};/**
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
 */let ResizeBilinearPackedProgram=class ResizeBilinearPackedProgram{constructor(e,t,r,i,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[o,a,s,l]=e;this.outputShape=[o,t,r,l];let u=[i&&t>1?a-1:a,i&&r>1?s-1:s],c=[i&&t>1?t-1:t,i&&r>1?r-1:r];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/c[0]},
          ${u[1]/c[1]},
          ${u[1]/c[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${n?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};let is={kernelName:a._Yw,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{images:n}=t,{alignCorners:o,halfPixelCenters:s,size:l}=i,[u,c]=l,d=(0,a.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ResizeBilinearPackedProgram(n.shape,u,c,o,s):new ResizeBilinearProgram(n.shape,u,c,o,s);return r.runWebGLProgram(d,[n],"float32")}};/**
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
 */let ResizeBilinearBackpropProgram=class ResizeBilinearBackpropProgram{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,i,n]=t,[,o,a]=e,s=[r&&o>1?i-1:i,r&&a>1?n-1:n],l=[r&&o>1?o-1:o,r&&a>1?a-1:a],u=s[0]/l[0],c=s[1]/l[1],d=1/u,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${c});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${h});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${o}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${i-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${n-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};let il={kernelName:a.zbQ,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{images:n,dy:o}=t,{alignCorners:a}=i,s=new ResizeBilinearBackpropProgram(o.shape,n.shape,a);return r.runWebGLProgram(s,[o],o.dtype)}};/**
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
 */let ResizeNearestNeighborProgram=class ResizeNearestNeighborProgram{constructor(e,t,r,i,n){this.variableNames=["A"],this.outputShape=[];let[o,a,s,l]=e;this.outputShape=[o,t,r,l];let u=[i&&t>1?a-1:a,i&&r>1?s-1:s],c=[i&&t>1?t-1:t,i&&r>1?r-1:r];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/c[0]},
          ${u[1]/c[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${n?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${i?"0.5":"0.0"})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};/**
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
 */let ResizeNearestNeighborPackedProgram=class ResizeNearestNeighborPackedProgram{constructor(e,t,r,i,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[o,a,s,l]=e;this.outputShape=[o,t,r,l];let u=[i&&t>1?a-1:a,i&&r>1?s-1:s],c=[i&&t>1?t-1:t,i&&r>1?r-1:r];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/c[0]},
          ${u[1]/c[1]},
          ${u[1]/c[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${n?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${i?"0.5":"0.0"})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};let iu={kernelName:a.dpD,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{images:n}=t,{alignCorners:o,halfPixelCenters:s,size:l}=i,[u,c]=l,d=(0,a.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ResizeNearestNeighborPackedProgram(n.shape,u,c,o,s):new ResizeNearestNeighborProgram(n.shape,u,c,o,s);return r.runWebGLProgram(d,[n],n.dtype)}};/**
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
 */let ResizeNearestNeigborBackpropProgram=class ResizeNearestNeigborBackpropProgram{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,i,n]=t,[,o,a]=e,s=[r&&o>1?i-1:i,r&&a>1?n-1:n],l=[r&&o>1?o-1:o,r&&a>1?a-1:a],u=s[0]/l[0],c=s[1]/l[1],d=1/u,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${c});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${h});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${o}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${i}) - 1),
                ${r} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${n}) - 1),
                ${r} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};let ic={kernelName:a.Hmb,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{images:n,dy:o}=t,{alignCorners:a}=i,s=new ResizeNearestNeigborBackpropProgram(o.shape,n.shape,a);return r.runWebGLProgram(s,[o],o.dtype)}};/**
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
 */let ReverseProgram=class ReverseProgram{constructor(e,t){this.variableNames=["x"];let r=e.length;if(r>4)throw Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);if(this.outputShape=e,1===r){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let getInCoord=r=>-1!==t.indexOf(r)&&1!==e[r]?`${e[r]} - coords[${r}] - 1`:`coords[${r}]`,i=e.map((e,t)=>getInCoord(t)).join(","),n=(0,d.kW)(r);this.userCode=`
      void main() {
        ${n} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}};/**
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
 */let ReversePackedProgram=class ReversePackedProgram{constructor(e,t){var r,i,n;this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=e.length;if(o>4)throw Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=e;let a=(0,c.Ky)("rc",o),s=`${a[o-1]} + 1 < ${this.outputShape[o-1]}`,l=`${a[o-2]} + 1 < ${this.outputShape[o-2]}`,u=(0,d.kW)(o);function getChannel(r){let i=e.map((i,n)=>-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - ${r[n]} - 1`:`${r[n]}`),n=i.join(","),o=i.slice(-2).join(",");return`getChannel(getX(${n}), vec2(${o}))`}1===o?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${u} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${getChannel(a.slice())};
          if(${s}){
            result.g = ${(r=a.slice())[o-1]="("+r[o-1]+" + 1)",getChannel(r)};
          }
          if(${l}) {
            result.b = ${(i=a.slice())[o-2]="("+i[o-2]+" + 1)",getChannel(i)};
            if(${s}) {
              result.a = ${(n=a.slice())[o-1]="("+n[o-1]+" + 1)",n[o-2]="("+n[o-2]+" + 1)",getChannel(n)};
            }
          }
          setOutput(result);
        }
    `}};let id={kernelName:a.mKl,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{dims:o}=i,s=n.shape.length,l=a.D5U.parseAxisParam(o,n.shape);if(0===s)return identity({inputs:{x:n},backend:r});let u=(0,a.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ReversePackedProgram(n.shape,l):new ReverseProgram(n.shape,l);return r.runWebGLProgram(u,[n],n.dtype)}};/**
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
 */let RotateProgram=class RotateProgram{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let r=e[1],i=e[2];this.outputShape=e;let n="";n="number"==typeof t?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${n}
          if(coordX >= 0 && coordX < ${i} && coordY >= 0 && coordY < ${r}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};/**
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
 */let ip={kernelName:a.b9H,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{image:i}=e,{radians:n,fillValue:o,center:s}=t,l=new RotateProgram(i.shape,o),[u,c]=a.backend_util.getImageCenter(s,i.shape[1],i.shape[2]),d=[[u,c,Math.sin(n),Math.cos(n)]],p=r.runWebGLProgram(l,[i],i.dtype,d);return p}},ih=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,iy=unaryKernelFunc({opSnippet:ih}),ig={kernelName:a.e07,backendName:"webgl",kernelFunc:iy},im=unaryKernelFunc({opSnippet:"return inversesqrt(x);",cpuKernelImpl:_.St}),iv={kernelName:a.bV0,backendName:"webgl",kernelFunc:im};/**
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
 */let ScatterProgram=class ScatterProgram{constructor(e,t,r,i,n,o,a=!0,s=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=o;let l=(0,d.kW)(n.length),u=(0,d.kW)(o.length),c="";1===r?c="i":2===r&&(c="i, j");let p=`getIndices(${c})`,h="";1===i?h="i":2===i&&(h="i, coords[1]");let f=`getUpdates(${h})`,y="";s&&(y="coords[0], coords[1]");let g=`getDefaultValue(${y})`;this.userCode=`
        ${l} strides = ${l}(${n});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${p});
              flattenedIndex += index * ${t>1?"strides[j]":"strides"};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}};/**
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
 */let ScatterPackedProgram=class ScatterPackedProgram{constructor(e,t,r,i,n,o,a=!0,s=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o;let l=(0,d.kW)(n.length),u=(0,d.kW)(o.length),c="";1===r?c="i":2===r&&(c="i, j");let p=`getIndices(${c})`,h="";1===i?h="i":2===i&&(h="i, coords[1]");let f=`getUpdates(${h})`,y="";s&&(y="coords[0], coords[1]");let g=`getDefaultValue(${y})`;this.userCode=`
        ${l} strides = ${l}(${n});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${p});
              flattenedIndex += index.xz * ${t>1?"strides[j]":"strides"};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${t>1?"strides[j + 1]":"strides"};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${f};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${g}, sum, found));
        }
      `}};let ib={kernelName:a.xQA,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{indices:o,updates:s}=r,{shape:l}=n,{sliceRank:u,numUpdates:c,sliceSize:d,strides:p,outputSize:h}=a.backend_util.calculateShapes(s,o,l),f=[h/d,d];if(0===h)return i.makeTensorInfo(l,o.dtype);let y=reshape({inputs:{x:o},backend:i,attrs:{shape:[c,u]}}),g=reshape({inputs:{x:s},backend:i,attrs:{shape:[c,d]}}),m=i.makeTensorInfo([],"float32",new Float32Array([0]));t=(0,a.OBj)().getBool("WEBGL_PACK")?new ScatterPackedProgram(c,u,y.shape.length,g.shape.length,p,f):new ScatterProgram(c,u,y.shape.length,g.shape.length,p,f);let v=i.runWebGLProgram(t,[g,y,m],g.dtype),b=reshape({inputs:{x:v},backend:i,attrs:{shape:l}});return i.disposeIntermediateTensorInfo(y),i.disposeIntermediateTensorInfo(g),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(m),b}};/**
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
 */let SearchSortedProgram=class SearchSortedProgram{constructor(e,t,r,i){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,r];let n=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,o=2===(0,a.OBj)().getNumber("WEBGL_VERSION")?"while (left < right) {":n;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${o}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${"left"===i?"<":"<="} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};let iS={kernelName:a.nr8,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{sortedSequence:n,values:o}=t,{side:a}=i,s=new SearchSortedProgram(n.shape[0],n.shape[1],o.shape[1],a),l=[[n.shape[1]]];return r.runWebGLProgram(s,[n,o],"int32",l)}};/**
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
 */let SelectProgram=class SelectProgram{constructor(e,t,r){let i,n;if(this.variableNames=["c","a","b"],this.outputShape=t,r>4)throw Error(`Where for rank ${r} is not yet supported`);if(1===r)n="resRC",i="resRC";else{let r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[],a=[];for(let i=0;i<t.length;i++)a.push(`${r[i]}`),i<e&&o.push(`${r[i]}`);i=o.join(),n=a.join()}let o=(0,d.kW)(r);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        float cVal = getC(${i});
        if (cVal >= 1.0) {
          setOutput(getA(${n}));
        } else {
          setOutput(getB(${n}));
        }
      }
    `}};let iP={kernelName:a.PhF,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{condition:i,t:n,e:o}=t,s=new SelectProgram(i.shape.length,n.shape,n.shape.length);return r.runWebGLProgram(s,[i,n,o],(0,a.x8V)(n.dtype,o.dtype))}},iC=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${a.backend_util.SELU_SCALEALPHA};
  float scale = ${a.backend_util.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,ix=unaryKernelFunc({opSnippet:iC}),iA={kernelName:a.oFR,backendName:"webgl",kernelFunc:ix},i_=x+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,iT=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,iw=unaryKernelFunc({opSnippet:i_,packedOpSnippet:iT,cpuKernelImpl:_.UN}),iR={kernelName:a.a5O,backendName:"webgl",kernelFunc:iw},iE=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,iD=unaryKernelFunc({opSnippet:iE}),iO={kernelName:a.i5y,backendName:"webgl",kernelFunc:iD},iI=x+`
  return sin(x);
`,iM=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${p}
  return result;
`,ik=unaryKernelFunc({opSnippet:iI,packedOpSnippet:iM}),iL={kernelName:a.RQH,backendName:"webgl",kernelFunc:ik},iN=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,iB=unaryKernelFunc({opSnippet:iN}),iF={kernelName:a.wYB,backendName:"webgl",kernelFunc:iB},iV=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,ij=unaryKernelFunc({opSnippet:iV}),iH={kernelName:a.MRv,backendName:"webgl",kernelFunc:ij},iz={kernelName:a.TQc,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{blockShape:o,paddings:s}=i;a.D5U.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let l=o.reduce((e,t)=>e*t),u=[[0,0]];u.push(...s);for(let e=1+o.length;e<n.shape.length;++e)u.push([0,0]);let c=[],d=padV2({inputs:{x:n},backend:r,attrs:{paddings:u,constantValue:0}}),p=a.backend_util.getReshaped(d.shape,o,l,!1),h=a.backend_util.getPermuted(p.length,o.length,!1),f=a.backend_util.getReshapedPermuted(d.shape,o,l,!1),y=reshape({inputs:{x:d},backend:r,attrs:{shape:p}}),g=transpose({inputs:{x:y},backend:r,attrs:{perm:h}}),m=reshape({inputs:{x:g},backend:r,attrs:{shape:f}});return c.push(d),c.push(y),c.push(g),c.forEach(e=>r.disposeIntermediateTensorInfo(e)),m}},iU={kernelName:a.O3z,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{indices:i,values:n,denseShape:o,defaultValue:a}=t;if(1!==o.shape.length)throw Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(2!==i.shape.length)throw Error(`Indices must be a matrix, saw:
         ${i.shape}`);if(1!==n.shape.length)throw Error(`Values must be a vector, saw:
         ${n.shape}`);if(0!==a.shape.length)throw Error(`Default value must be a scalar, saw:
        ${a.shape}`);let s=r.readSync(i.dataId),l=r.readSync(n.dataId),u=r.readSync(o.dataId),c=r.readSync(a.dataId)[0],[d,p,h,f,y]=(0,_.X8)(s,i.shape,i.dtype,l,n.dtype,u,c);return[r.makeTensorInfo(p,i.dtype,d),r.makeTensorInfo([p[0]],n.dtype,h),r.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(e=>Number(e)))),r.makeTensorInfo([y.length],i.dtype,new Int32Array(y))]}},iG={kernelName:a.nhH,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{inputIndices:i,inputShape:n,newShape:o}=t;if(2!==i.shape.length)throw Error(`Input indices should be a matrix but received shape ${i.shape}`);if(1!==n.shape.length)throw Error(`Input shape should be a vector but received shape ${n.shape}`);if(1!==o.shape.length)throw Error(`Target shape should be a vector but received shape ${o.shape}`);let a=Array.from(r.readSync(n.dataId)),s=r.readSync(i.dataId),l=Array.from(r.readSync(o.dataId)),[u,c,d]=(0,_.LS)(s,i.shape,i.dtype,a,l);return[r.makeTensorInfo(c,i.dtype,u),r.makeTensorInfo([d.length],o.dtype,new Int32Array(d))]}},iW={kernelName:a.w3H,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{data:i,indices:n,segmentIds:o}=t;if(i.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==n.shape.length)throw Error(`Indices should be a vector but received shape
              ${n.shape}`);if(1!==o.shape.length)throw Error(`Segment ids should be a vector but received shape
              ${o.shape}`);let a=r.readSync(i.dataId),s=r.readSync(n.dataId),l=r.readSync(o.dataId),[u,c]=(0,_.AR)(a,i.shape,i.dtype,s,l,!0);return r.makeTensorInfo(c,i.dtype,u)}},iX={kernelName:a.ZjV,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r}=e,{data:i,indices:n,segmentIds:o}=t;if(i.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==n.shape.length)throw Error(`Indices should be a vector but received shape
             ${n.shape}`);if(1!==o.shape.length)throw Error(`Segment ids should be a vector but received shape
             ${o.shape}`);let a=r.readSync(i.dataId),s=r.readSync(n.dataId),l=r.readSync(o.dataId),[u,c]=(0,_.AR)(a,i.shape,i.dtype,s,l);return r.makeTensorInfo(c,i.dtype,u)}},iY={kernelName:a.D2d,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{sparseIndices:n,sparseValues:o,defaultValue:s}=t,{outputShape:l}=i,{sliceRank:u,numUpdates:c,sliceSize:d,strides:p,outputSize:h}=a.backend_util.calculateShapes(o,n,l);if("string"===o.dtype){let e=r.bufferSync(n),t=r.bufferSync(o),i=a.D5U.decodeString(r.readSync(s.dataId)[0]),f=(0,_.Y1)(e,t,l,h,d,c,u,p,i,!1);return r.makeTensorInfo(l,f.dtype,f.values)}let f=new ScatterProgram(c,u,n.shape.length,o.shape.length,p,[h,1],!1),y=r.runWebGLProgram(f,[o,n,s],o.dtype),g=reshape({inputs:{x:y},backend:r,attrs:{shape:l}});return r.disposeIntermediateTensorInfo(y),g}},i$={kernelName:a.L8s,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{numOrSizeSplits:o,axis:s}=i,l=a.D5U.parseAxisParam(s,n.shape)[0],u=a.backend_util.prepareSplitSize(n,o,l),c=n.shape.length,d=Array(c).fill(0),p=n.shape.slice();return u.map(e=>{let t=[...p];t[l]=e;let i=slice({inputs:{x:n},backend:r,attrs:{begin:d,size:t}});return d[l]+=e,i})}},iK="return sqrt(x);",iq=unaryKernelFunc({opSnippet:iK,packedOpSnippet:iK,cpuKernelImpl:_.Bk}),iZ={kernelName:a.FKq,backendName:"webgl",kernelFunc:iq},iJ=unaryKernelFunc({opSnippet:"return x * x;"}),iQ={kernelName:a.bK0,backendName:"webgl",kernelFunc:iJ},i0="return (a - b) * (a - b);",i1=binaryKernelFunc({opSnippet:i0,packedOpSnippet:i0}),i2={kernelName:a._tC,backendName:"webgl",kernelFunc:i1},i3={kernelName:a.e0R,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t;if("string"!==n.dtype)throw Error("Input must be of datatype string");let o=r.readSync(n.dataId),s=a.backend_util.fromUint8ToStringArray(o),l=(0,_.F1)(s,"string",i);return r.makeTensorInfo(n.shape,"string",l)}},i5={kernelName:a.h8e,backendName:"webgl",kernelFunc:/**
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
 */function({inputs:e,attrs:t,backend:r}){let{x:i}=e,n=P.D1+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,o=new P.l(i.shape,n);return r.runWebGLProgram(o,[i],i.dtype)}};/**
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
 */let StridedSliceProgram=class StridedSliceProgram{constructor(e,t,r){this.variableNames=["x"],this.outputShape=r;let i=r.length,n=(0,d.kW)(r.length),o=(0,d.kW)(r.length),a="";if(1===i)a="coords * strides + begin";else{let e=0;a=r.map((t,i)=>(e++,1===r.length?`coords * strides[${i}] + begin[${i}]`:`coords[${e-1}] * strides[${i}] + begin[${i}]`)).join(",")}this.userCode=`
      ${n} begin = ${n}(${e});
      ${n} strides = ${n}(${t});

      void main() {
        ${o} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};let i4={kernelName:a.jQk,backendName:"webgl",kernelFunc:/**
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
 */function(e){let t;let{inputs:r,backend:i,attrs:n}=e,{x:o}=r,{begin:s,end:l,strides:u,beginMask:c,endMask:d,ellipsisMask:p,newAxisMask:h,shrinkAxisMask:f}=n,{finalShapeSparse:y,finalShape:g,isIdentity:m,sliceDim0:v,isSimpleSlice:b,begin:S,end:P,strides:C}=a.kuN.sliceInfo(o.shape,s,l,u,c,d,p,h,f);if(m)t=reshape({inputs:{x:o},backend:i,attrs:{shape:g}});else if(v||b){a.D5U.assert(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);let e=a.kuN.computeOutShape(S,P,C),r=slice({inputs:{x:o},backend:i,attrs:{begin:S,size:e}});t=reshape({inputs:{x:r},backend:i,attrs:{shape:g}}),i.disposeIntermediateTensorInfo(r)}else{let e=i.shouldExecuteOnCPU([o]);if(e){let e=i.readSync(o.dataId),r=(0,a.f3b)(o.shape,o.dtype,e),n=(0,_.$u)(y,r,C,S);t=i.makeTensorInfo(g,o.dtype,n.values)}else{let e=new StridedSliceProgram(S,C,y);t=i.runWebGLProgram(e,[o],o.dtype)}}let x=reshape({inputs:{x:t},backend:i,attrs:{shape:g}});return i.disposeIntermediateTensorInfo(t),x}},i6={kernelName:a._JP,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{separator:n,nGramWidths:o,leftPad:a,rightPad:s,padWidth:l,preserveShortSequences:u}=i,{data:c,dataSplits:d}=t,p=r.readSync(c.dataId),h=r.readSync(d.dataId),[f,y]=(0,_.$j)(p,h,n,o,a,s,l,u);return[r.makeTensorInfo([f.length],"string",f),r.makeTensorInfo(d.shape,"int32",y)]}},i8={kernelName:a.s1s,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{skipEmpty:n}=i,{input:o,delimiter:a}=t;if("string"!==o.dtype)throw Error("Input must be of datatype string");if(1!==o.shape.length)throw Error(`Input must be a vector, got shape: ${o.shape}`);if(0!==a.shape.length)throw Error(`Delimiter must be a scalar, got shape: ${a.shape}`);let s=r.readSync(o.dataId),l=r.readSync(a.dataId)[0],[u,c,d]=(0,_.A0)(s,l,n),p=c.length;return[r.makeTensorInfo([p,2],"int32",u),r.makeTensorInfo([p],"string",c),r.makeTensorInfo([2],"int32",new Int32Array(d))]}},i9={kernelName:a.XkS,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{numBuckets:n}=i,{input:o}=t;if("string"!==o.dtype)throw Error("Input must be of datatype string");if(n<=0)throw Error("Number of buckets must be at least 1");let a=r.readSync(o.dataId),s=(0,_._9)(a,n);return r.makeTensorInfo(o.shape,"int32",s)}},i7=unaryKernelFunc({opSnippet:"return tan(x);"}),ne={kernelName:a.sEM,backendName:"webgl",kernelFunc:i7},nt=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,nr=unaryKernelFunc({opSnippet:nt}),ni={kernelName:a.MIZ,backendName:"webgl",kernelFunc:nr},nn={kernelName:a.SIB,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{tensor:n,indices:o,updates:s}=t,{}=i,{sliceRank:l,numUpdates:u,sliceSize:c,strides:d,outputSize:p}=a.backend_util.calculateShapes(s,o,n.shape),h=[p/c,c];if(0===p)return r.makeTensorInfo(n.shape,o.dtype);let f=reshape({inputs:{x:o},backend:r,attrs:{shape:[u,l]}}),y=reshape({inputs:{x:s},backend:r,attrs:{shape:[u,c]}}),g=reshape({inputs:{x:n},backend:r,attrs:{shape:h}}),m=new ScatterProgram(u,l,f.shape.length,y.shape.length,d,h,!1,!0),v=r.runWebGLProgram(m,[y,f,g],g.dtype),b=reshape({inputs:{x:v},backend:r,attrs:{shape:n.shape}});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(v),b}};/**
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
 */let TileProgram=class TileProgram{constructor(e,t){this.variableNames=["A"];let r=Array(e.length);for(let i=0;i<r.length;i++)r[i]=e[i]*t[i];this.outputShape=r,this.rank=r.length;let i=(0,d.kW)(this.rank),n=function(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],i=[];for(let t=0;t<e.length;t++)i.push(`imod(${r[t]}, ${e[t]})`);return i.join()}(e);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        setOutput(getA(${n}));
      }
    `}};/**
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
 */function tile(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{reps:o}=i;if("string"===n.dtype||n.shape.length>5){let e=r.readSync(n.dataId),t="string"===n.dtype?e.map(e=>a.D5U.decodeString(e)):e,i=(0,a.f3b)(n.shape,n.dtype,t),s=(0,_.KX)(i,o);return r.makeTensorInfo(s.shape,s.dtype,s.values)}let s=new TileProgram(n.shape,o),l=r.runWebGLProgram(s,[n],n.dtype);return l}let no={kernelName:a.n9L,backendName:"webgl",kernelFunc:tile};let SwapProgram=class SwapProgram{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}};let MergeProgram=class MergeProgram{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};/**
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
 */function disposeIntermediateTensorInfoOrNull(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function roundUpToPow2(e){let t=1;for(;t<e;)t*=2;return t}let na={kernelName:a.cWu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n}=t,{k:o,sorted:s}=i,l=(0,a.OBj)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),u=(0,a.OBj)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=n.shape,d=c[c.length-1];if(r.shouldExecuteOnCPU([n])||d<l||o>u){let e=r.readSync(n.dataId),[t,i]=(0,_.oC)(e,c,n.dtype,o,s);return[r.makeTensorInfo(t.shape,t.dtype,t.values),r.makeTensorInfo(i.shape,i.dtype,i.values)]}if(0===o)return c[c.length-1]=0,[r.makeTensorInfo(c,n.dtype,[]),r.makeTensorInfo(c,"int32",[])];if(1===d)return[n,fill({attrs:{shape:c,dtype:"int32",value:0},backend:r})];let p=r.texData.get(n.dataId),h=null!==p&&p.isPacked,f=h?r.unpackTensor(n):n,y=a.D5U.sizeFromShape(c),g=y/d,m=reshape({inputs:{x:f},attrs:{shape:[g,d]},backend:r});h&&disposeIntermediateTensorInfoOrNull(r,f);let v=roundUpToPow2(o),b=roundUpToPow2(d),S=null,getInputs=()=>null===S?[m,m]:[m,S],runSwap=(e,t,i)=>{let n=getInputs(),o=new SwapProgram(i),a=null===S?1:0,s=[[d],[a],[Number.NEGATIVE_INFINITY],[e],[t]],l=S;S=r.runWebGLProgram(o,n,"int32",s),disposeIntermediateTensorInfoOrNull(r,l)};for(let e=1;e<v;e*=2){let t=2*e;for(let r=e;r>=1;r/=2)runSwap(t,r,[g,b])}for(let e=b;e>v;e/=2){let t=getInputs(),i=new MergeProgram([g,e/2]),n=null===S?1:0,o=[[d],[n],[v]],a=S;S=r.runWebGLProgram(i,t,"int32",o),disposeIntermediateTensorInfoOrNull(r,a);let s=v/2,l=2*s;for(let e=s;e>=1;e/=2)runSwap(l,e,S.shape)}let P=S;S=slice({inputs:{x:S},backend:r,attrs:{begin:0,size:[g,o]}}),disposeIntermediateTensorInfoOrNull(r,P);let C=gatherV2({inputs:{x:m,indices:S},backend:r,attrs:{axis:1,batchDims:1}});disposeIntermediateTensorInfoOrNull(r,m);let x=c.slice(0,-1);x.push(o),P=S,S=reshape({inputs:{x:S},attrs:{shape:x},backend:r}),disposeIntermediateTensorInfoOrNull(r,P);let A=C;return C=reshape({inputs:{x:C},attrs:{shape:x},backend:r}),disposeIntermediateTensorInfoOrNull(r,A),[C,S]}};/**
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
 */let TransformProgram=class TransformProgram{constructor(e,t,r,i,n,o){let a;switch(this.variableNames=["Image","Transforms"],this.outputShape=o,i){case"constant":default:a=1;break;case"reflect":a=2;break;case"wrap":a=3;break;case"nearest":a=4}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${a} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${a} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${a} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${n});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${n});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${"nearest"===r?1:2} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};let ns={kernelName:a.wx7,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{image:n,transforms:o}=t,{interpolation:a,fillMode:s,fillValue:l,outputShape:u}=i,[c,d,p,h]=n.shape,[f,y]=null!=u?u:[d,p],g=new TransformProgram(d,p,a,s,l,[c,f,y,h]);return r.runWebGLProgram(g,[n,o],"float32")}},nl={kernelName:a.kpP,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let{inputs:t,attrs:r,backend:i}=e,{axis:n}=r,{x:o}=t;(0,E.HS)(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let a=i.readSync(o.dataId),{outputValues:s,outputShape:l,indices:u}=(0,_.CV)(a,n,o.shape,o.dtype);return[i.makeTensorInfo(l,o.dtype,s),i.makeTensorInfo([u.length],"int32",u)]}},nu={kernelName:a.ToN,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{value:n}=t,{axis:o}=i;o<0&&(o+=n.shape.length);let a=n.shape.length,s=n.shape[o],l=Array(a-1),u=0;for(let e=0;e<a;e++)e!==o&&(l[u++]=n.shape[e]);let c=[],d=Array(a).fill(0),p=n.shape.slice();p[o]=1;let h=Array(s);for(let e=0;e<h.length;e++){d[o]=e;let t=slice({inputs:{x:n},backend:r,attrs:{begin:d,size:p}}),i=reshape({inputs:{x:t},backend:r,attrs:{shape:l}});h[e]=i,c.push(t)}return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),h}};/**
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
 */let SegmentOpProgram=class SegmentOpProgram{constructor(e,t){this.variableNames=["x","segmentIds"];let r=e.windowSize,i=e.batchSize,n=e.inSize,o=e.numSegments,a=o*Math.ceil(n/r);this.outputShape=[i,a];let s=4*Math.floor(r/4),l=r%4,u=`
        sumValue += dot(values, segFilter);
    `,c="";n%r>0&&(c=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return initializationValue;
        }
      `);let d="";n%r>0&&(d=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${o})) * float(${r}));
        int currentSeg = int(mod(float(outIdx), float(${o})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${u}
        }

        int inIdx = inOffset + ${s};
        if (${1===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${u}
        } else if (${2===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${u}
        } else if (${3===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${u}
        }
        setOutput(sumValue);
      }
    `}};let nc={kernelName:a.Qvg,backendName:"webgl",kernelFunc:/**
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
 */function(e){let{inputs:t,backend:r,attrs:i}=e,{x:n,segmentIds:o}=t,{numSegments:s}=i,l=n.shape.length,u=[],c=0,d=a.backend_util.getAxesPermutation([c],l),p=n;null!=d&&(p=transpose({inputs:{x:n},backend:r,attrs:{perm:d}}),u.push(p),c=a.backend_util.getInnerMostAxes(1,l)[0]);let h=a.backend_util.segment_util.computeOutShape(p.shape,c,s),f=a.D5U.sizeFromShape([p.shape[c]]),y=reshape({inputs:{x:p},backend:r,attrs:{shape:[-1,f]}});u.push(y);let g=(0,a.z4k)(n.dtype),segOpCompute=(e,t,i,n,o)=>{let s=e.shape[0],l=e.shape[1],c=a.backend_util.segment_util.segOpComputeOptimalWindowSize(l,o),d=new SegmentOpProgram({windowSize:c,inSize:l,batchSize:s,numSegments:o},t),p=r.compileAndRun(d,[e,i],n);if(u.push(p),p.shape[1]===o)return p;let h=range({backend:r,attrs:{start:0,stop:o,step:1,dtype:"float32"}}),f=tile({inputs:{x:h},backend:r,attrs:{reps:[l/c]}});u.push(h),u.push(f);let y=segOpCompute(p,t,f,n,o);return y},m=segOpCompute(y,"unsortedSegmentSum",o,g,s),v=reshape({inputs:{x:m},backend:r,attrs:{shape:h}}),b=v;if(null!=d){u.push(v);let e=a.backend_util.getUndoAxesPermutation(d);b=transpose({inputs:{x:b},backend:r,attrs:{perm:e}})}return u.forEach(e=>r.disposeIntermediateTensorInfo(e)),b}};for(let e of[M,L,F,H,G,W,X,Y,$,K,J,et,en,el,ed,ep,eh,ef,ey,eg,em,eS,eP,eA,e_,eE,eI,eM,f,ek,eN,eF,eV,ej,eH,ez,eU,eY,eq,eZ,eJ,eQ,e0,e1,e2,e3,e5,e4,e6,e8,te,tr,to,tl,tp,th,tg,tm,tv,tb,tC,tT,tR,tD,tO,tI,tM,tN,tV,h,tj,eL,tz,tG,tX,m,tK,tJ,tQ,t3,t6,t7,rt,rn,ro,ra,rs,rd,rp,rh,rf,ry,rg,rm,rv,rC,rx,rw,rN,w,rV,rH,rU,rW,ew,rX,r$,rK,rq,r0,S,r1,r2,r3,r5,r4,eR,rO,r8,it,ia,D,is,il,iu,ic,id,ip,ig,iv,ib,iS,iP,iA,iR,iO,iL,iF,eb,rL,iH,iz,iU,iG,iW,iX,iY,i$,iZ,iQ,i2,i3,i5,i4,i6,i8,i9,rk,O,ne,ni,nn,no,na,ns,I,nl,nu,nc,rY])(0,a.wCN)(e);/**
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
 */},64197:function(e,t,r){"use strict";r.d(t,{cK:function(){return J},qO:function(){return Q},cx:function(){return ee},XM:function(){return et},cm:function(){return er},pk:function(){return ei},n7:function(){return en},gv:function(){return eo},aX:function(){return ea},tx:function(){return es},MZ:function(){return el},TD:function(){return eu},m$:function(){return ec},ji:function(){return ep},B_:function(){return ed},Rn:function(){return ef},kY:function(){return eh},PQ:function(){return ey},Sd:function(){return eg},$O:function(){return em},nL:function(){return ev},r:function(){return eb},Th:function(){return eS},Bo:function(){return eP},cZ:function(){return eC},Tg:function(){return ex},Qs:function(){return eA},M8:function(){return e_},fy:function(){return eT},hO:function(){return ew},St:function(){return eR},Y1:function(){return eE},UN:function(){return eD},CJ:function(){return eO},nT:function(){return eI},X8:function(){return eM},LS:function(){return ek},AR:function(){return eL},Bk:function(){return eN},F1:function(){return eB},$u:function(){return eF},$j:function(){return eV},A0:function(){return ej},_9:function(){return eH},kI:function(){return ez},KX:function(){return eU},oC:function(){return eG},Fv:function(){return eW},CV:function(){return eX}});var i={};r.r(i),r.d(i,{addImpl:function(){return o.EH},bincountImpl:function(){return a.W},bincountReduceImpl:function(){return a.i},bitwiseAndImpl:function(){return s.nv},castImpl:function(){return l.sJ},ceilImpl:function(){return u.__},concatImpl:function(){return c.j},equalImpl:function(){return d.tW},expImpl:function(){return p.Ro},expm1Impl:function(){return h.OF},floorImpl:function(){return f.r6},gatherNdImpl:function(){return y.m},gatherV2Impl:function(){return g.i},greaterEqualImpl:function(){return v.HL},greaterImpl:function(){return m.o},lessEqualImpl:function(){return S.lx},lessImpl:function(){return b.rO},linSpaceImpl:function(){return P.b},logImpl:function(){return C.vX},maxImpl:function(){return x.B},maximumImpl:function(){return A.wS},minimumImpl:function(){return _.vP},multiplyImpl:function(){return T.$3},negImpl:function(){return w.uC},notEqualImpl:function(){return R.Gj},prodImpl:function(){return E.Qg},raggedGatherImpl:function(){return D.c},raggedRangeImpl:function(){return O.S},raggedTensorToTensorImpl:function(){return I.p},rangeImpl:function(){return M.b},rsqrtImpl:function(){return k.zd},scatterImpl:function(){return L.N},sigmoidImpl:function(){return N.VY},simpleAbsImpl:function(){return n.bk},sliceImpl:function(){return B.rT},sparseFillEmptyRowsImpl:function(){return F.c},sparseReshapeImpl:function(){return V.U},sparseSegmentReductionImpl:function(){return j.V},sqrtImpl:function(){return H.zT},staticRegexReplaceImpl:function(){return z.P},stridedSliceImpl:function(){return U.t},stringNGramsImpl:function(){return G.A},stringSplitImpl:function(){return W.Q},stringToHashBucketFastImpl:function(){return X.h},subImpl:function(){return Y.VY},tileImpl:function(){return $.R},topKImpl:function(){return K.W},transposeImpl:function(){return q.H},uniqueImpl:function(){return Z.S}});var n=r(65424),o=r(82479),a=r(89590),s=r(38066),l=r(964),u=r(23225),c=r(82846),d=r(30339),p=r(86130),h=r(78819),f=r(29567),y=r(63246),g=r(51167),m=r(26411),v=r(68393),b=r(17068),S=r(89658),P=r(86242),C=r(79674),x=r(81637),A=r(11231),_=r(39252),T=r(29556),w=r(92709),R=r(67676),E=r(67419),D=r(39168),O=r(62898),I=r(62840),M=r(42373),k=r(81056),L=r(6237),N=r(26488),B=r(37804),F=r(7562),V=r(10956),j=r(35581),H=r(36374),z=r(26808),U=r(37025),G=r(27414),W=r(93157),X=r(80912),Y=r(27262),$=r(67674),K=r(88936),q=r(26011),Z=r(78305);/**
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
 */let{addImpl:J,bincountImpl:Q,bincountReduceImpl:ee,bitwiseAndImpl:et,castImpl:er,ceilImpl:ei,concatImpl:en,equalImpl:eo,expImpl:ea,expm1Impl:es,floorImpl:el,gatherNdImpl:eu,gatherV2Impl:ec,greaterImpl:ed,greaterEqualImpl:ep,lessImpl:eh,lessEqualImpl:ef,linSpaceImpl:ey,logImpl:eg,maxImpl:em,maximumImpl:ev,minimumImpl:eb,multiplyImpl:eS,negImpl:eP,notEqualImpl:eC,prodImpl:ex,raggedGatherImpl:eA,raggedRangeImpl:e_,raggedTensorToTensorImpl:eT,rangeImpl:ew,rsqrtImpl:eR,scatterImpl:eE,sigmoidImpl:eD,simpleAbsImpl:eO,sliceImpl:eI,sparseFillEmptyRowsImpl:eM,sparseReshapeImpl:ek,sparseSegmentReductionImpl:eL,sqrtImpl:eN,staticRegexReplaceImpl:eB,stridedSliceImpl:eF,stringNGramsImpl:eV,stringSplitImpl:ej,stringToHashBucketFastImpl:eH,subImpl:ez,tileImpl:eU,topKImpl:eG,transposeImpl:eW,uniqueImpl:eX}=i},80196:function(e,t,r){"use strict";r.d(t,{U:function(){return PackProgram}});var i=r(16557),n=r(27963),o=r(95891);/**
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
 */let PackProgram=class PackProgram{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=(0,i.C9)(this.outputShape.length),0===this.rank)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=(0,n.Ky)("rc",this.rank),t=(0,o.kW)(this.rank),r=this.getOutOfBoundsCondition(e),i=this.getSetup(e),a=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${i}

            setOutput(vec4(${a}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let r=0;r<=1;r++)for(let i=0;i<=1;i++){let n=`${0===r?"r":"rp1"}, ${0===i?"c":"cp1"}`;for(let t=2;t<this.rank;t++)n=`${e[e.length-1-t]},`+n;t.push(n)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let r=this.rank-2;r<this.rank;r++)t+=`${e[r]} >= ${this.enableShapeUniforms?`outShape[${r}]`:this.outputShape[r]}`,r<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";let t=e.slice(-2),r=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],i=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${r};
      bool rEdge = rp1 >= ${i};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);if(1===this.rank){let e=this.enableShapeUniforms?"outShape":this.outputShape[0];return`getA(rc), (rc + 1 >= ${e} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}},27963:function(e,t,r){"use strict";/**
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
 */function getVecChannels(e,t){return["x","y","z","w","u","v"].slice(0,t).map(t=>`${e}.${t}`)}function getChannels(e,t){return 1===t?[e]:getVecChannels(e,t)}function getSourceCoords(e,t){if(1===e)return"rc";let r="";for(let i=0;i<e;i++)r+=t[i],i<e-1&&(r+=",");return r}r.d(t,{Ky:function(){return getChannels},Qc:function(){return getSourceCoords},k6:function(){return getVecChannels}})},88893:function(e,t,r){"use strict";r.d(t,{v:function(){return ReshapePackedProgram}});var i=r(16557),n=r(78303);/**
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
 */let ReshapePackedProgram=class ReshapePackedProgram{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=(0,i.C9)(this.outputShape.length);let r="";for(let e=0;e<4;e++){let t="thisRC = rc;";e%2==1&&(t+="thisRC.z += 1;"),e>1&&(t+="thisRC.y += 1;"),r+=`
        ${t}
        ${e>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?"}":""}
      `}this.userCode=`
      ${function(e,t){let r=t?n.al(["r","c","d"],"inputShape"):n.RW(["r","c","d"],e);return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${r}
      return ivec3(r, c, d);
    }
  `}(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?n.nc():n.ku(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${r}

        setOutput(result);
      }
    `}}},78303:function(e,t,r){"use strict";r.d(t,{Kn:function(){return getOutputLogicalCoordinatesFromFlatIndexByUniform},RW:function(){return getLogicalCoordinatesFromFlatIndex},al:function(){return getLogicalCoordinatesFromFlatIndexByUniform},ku:function(){return getFlatIndexFrom3D},nc:function(){return getFlatIndexFrom3DOutput},ye:function(){return n}});var i=r(85964);/**
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
 */function getLogicalCoordinatesFromFlatIndex(e,t,r="index"){let n=i.D5U.computeStrides(t);return n.map((t,i)=>{let o=`int ${e[i]} = ${r} / ${t}`,a=i===n.length-1?`int ${e[i+1]} = ${r} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`;return`${o}; ${a};`}).join("")}function getOutputLogicalCoordinatesFromFlatIndexByUniform(e,t,r="index"){let n=i.D5U.computeStrides(t);return n.map((t,i)=>{let o=`int ${e[i]} = ${r} / outShapeStrides[${i}]`,a=i===n.length-1?`int ${e[i+1]} = ${r} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`;return`${o}; ${a};`}).join("")}function getLogicalCoordinatesFromFlatIndexByUniform(e,t,r="index"){let i=e.map((e,t)=>t),n=function(e,t){let r=e.length,i=e.map(e=>`${t}[${e}]`),n=Array(r-1);n[r-2]=i[r-1];for(let e=r-3;e>=0;--e)n[e]=`(${n[e+1]} * ${i[e+1]})`;return n}(i,t);return n.map((t,i)=>{let o=`int ${e[i]} = ${r} / ${n[i]}`,a=i===n.length-1?`int ${e[i+1]} = ${r} - ${e[i]} * ${n[i]}`:`index -= ${e[i]} * ${n[i]}`;return`${o}; ${a};`}).join("")}function getFlatIndexFrom3D(e){let t=i.D5U.computeStrides(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function getFlatIndexFrom3DOutput(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}let n=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`},87893:function(e,t,r){"use strict";r.d(t,{Se:function(){return getPackedRGBAArraySizeFromMatrixShape},Sq:function(){return getTextureConfig},V9:function(){return l},Yz:function(){return getDenseTexShape},kk:function(){return getUnpackedMatrixTextureShapeWidthHeight},m1:function(){return a},qe:function(){return getPackedMatrixTextureShapeWidthHeight},v2:function(){return s},yb:function(){return getUnpackedArraySizeFromMatrixSize}});var i,n,o,a,s,l,u=r(85964);function getUnpackedMatrixTextureShapeWidthHeight(e,t){return[t,e]}function getUnpackedArraySizeFromMatrixSize(e,t){return e*t}function getDenseTexShape(e){let t=u.D5U.sizeFromShape(e),r=Math.ceil(t/4);return u.D5U.sizeToSquarishShape(r)}function getPackedMatrixTextureShapeWidthHeight(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function getPackedRGBAArraySizeFromMatrixShape(e,t){let[r,i]=getPackedMatrixTextureShapeWidthHeight(e,t);return r*i*4}function getTextureConfig(e,t){let r,i,n,o,a,s,l,c,d,p;return 2===(0,u.OBj)().getNumber("WEBGL_VERSION")?(r=e.R32F,i=e.R16F,n=e.RGBA16F,o=e.RGBA32F,a=e.RED,l=4,c=1,d=e.HALF_FLOAT,p=e.FLOAT,s=e.RGBA8):(r=e.RGBA,i=e.RGBA,n=e.RGBA,o=e.RGBA,a=e.RGBA,l=4,c=4,d=null!=t?t.HALF_FLOAT_OES:null,p=e.FLOAT,s=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:n,internalFormatPackedFloat:o,textureFormatFloat:a,downloadTextureFormat:s,downloadUnpackNumChannels:l,defaultNumChannels:c,textureTypeHalfFloat:d,textureTypeFloat:p}}(i=a||(a={}))[i.DENSE=0]="DENSE",i[i.SHARED_BATCH=1]="SHARED_BATCH",(n=s||(s={}))[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD",(o=l||(l={}))[o.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",o[o.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",o[o.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",o[o.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",o[o.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"},89197:function(e,t,r){"use strict";r.d(t,{I:function(){return TextureManager}});var i=r(85964),n=r(29472),o=r(87893);/**
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
 */let TextureManager=class TextureManager{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,r){let i;let n=getPhysicalFromLogicalTextureType(t,r),a=getKeyFromTextureShape(e,n,r);a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]);let s=computeBytes(e,n,this.gpgpu.gl,this.gpgpu.textureConfig,r);if(this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=s,this.log();let e=this.freeTextures[a].pop();return this.usedTextures[a].push(e),e}return n===o.V9.PACKED_2X2_FLOAT32?i=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):n===o.V9.PACKED_2X2_FLOAT16?i=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):n===o.V9.UNPACKED_FLOAT32?i=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):n===o.V9.UNPACKED_FLOAT16?i=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):n===o.V9.PACKED_4X1_UNSIGNED_BYTE&&(i=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[a].push(i),this.numUsedTextures++,this._numBytesAllocated+=s,this.log(),i}releaseTexture(e,t,r,n){if(null==this.freeTextures)return;let o=getPhysicalFromLogicalTextureType(r,n),a=getKeyFromTextureShape(t,o,n);a in this.freeTextures||(this.freeTextures[a]=[]);let s=computeBytes(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,n),l=(0,i.OBj)().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==l&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=s):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=s),this.numUsedTextures--;let u=this.usedTextures[a],c=u&&u.indexOf(e);if(null==c||c<0)throw Error("Cannot release a texture that was never provided by this texture manager");u[c]=u[u.length-1],u.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function computeBytes(e,t,r,i,a){let s;let l=function(e,t){switch(e){case o.V9.PACKED_2X2_FLOAT32:return(0,n.gl)(t);case o.V9.PACKED_2X2_FLOAT16:return(0,n.hf)(t);case o.V9.UNPACKED_FLOAT32:return(0,n.q3)(t);case o.V9.UNPACKED_FLOAT16:return(0,n.m8)(t);case o.V9.PACKED_4X1_UNSIGNED_BYTE:return(0,n.NQ)(t);default:throw Error(`Unknown physical texture type ${e}`)}}(t,i);if(a){let[t,r]=(0,o.qe)(e[0],e[1]);s=t*r}else{let[t,r]=(0,o.kk)(e[0],e[1]);s=t*r}let u=function(e,t){if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F||t===e.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}(r,l);return s*u}function getPhysicalFromLogicalTextureType(e,t){if(e===o.v2.UPLOAD)return o.V9.PACKED_2X2_FLOAT32;if(e===o.v2.RENDER||null==e)return(0,i.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?o.V9.PACKED_2X2_FLOAT32:o.V9.UNPACKED_FLOAT32:t?o.V9.PACKED_2X2_FLOAT16:o.V9.UNPACKED_FLOAT16;if(e===o.v2.DOWNLOAD||e===o.v2.PIXELS)return o.V9.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function getKeyFromTextureShape(e,t,r){return`${e[0]}_${e[1]}_${t}_${r}`}},62266:function(e,t,r){"use strict";r.d(t,{Cv:function(){return s},D1:function(){return n},Et:function(){return a},RX:function(){return l},Tq:function(){return d},bl:function(){return c},eW:function(){return u},l:function(){return UnaryOpProgram},t$:function(){return o}});var i=r(16557);/**
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
 */let UnaryOpProgram=class UnaryOpProgram{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=(0,i.C9)(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}};let n="if (isnan(x)) return x;",o="return x;",a="return abs(x);",s="return (x >= 0.0) ? x : (exp(x) - 1.0);",l=n+`
  return (x < 0.0) ? 0.0 : x;
`,u=n+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,c="return x;",d="return 1.0 / (1.0 + exp(-1.0 * x));"},68562:function(e,t,r){"use strict";r.d(t,{Cv:function(){return o},RX:function(){return a},Tq:function(){return l},cc:function(){return UnaryOpPackedProgram},eW:function(){return s},t$:function(){return n}});var i=r(16557);/**
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
 */let n="return x;",o=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,a=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,s=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,l="return 1.0 / (1.0 + exp(-1.0 * x));";let UnaryOpPackedProgram=class UnaryOpPackedProgram{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=(0,i.C9)(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}},74763:function(e,t,r){"use strict";r.d(t,{W:function(){return UnpackProgram}});var i=r(16557),n=r(27963),o=r(95891);/**
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
 */let UnpackProgram=class UnpackProgram{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=(0,i.C9)(this.outputShape.length);let t=e.length,r=(0,n.Ky)("rc",t),a=(0,o.kW)(t),s=(0,n.Qc)(t,r),l=r.slice(-2),u=t<=1?"rc":`vec2(${l.join(",")})`;this.userCode=`
      void main() {
        ${a} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${u}));
      }
    `}}},47147:function(e,t,r){"use strict";let i,n;r.d(t,{B:function(){return bindTextureToProgramUniformSampler},BH:function(){return isDownloadFloatTextureEnabled},Cp:function(){return getBatchDim},ED:function(){return createStaticVertexBuffer},HH:function(){return getExtensionOrThrow},HO:function(){return createProgram},HS:function(){return assertNotComplex},Hg:function(){return getProgramUniformLocation},JG:function(){return bindColorTextureToFramebuffer},Jj:function(){return createVertexShader},KP:function(){return getMaxTexturesInShader},O7:function(){return callAndCheck},Qd:function(){return isWebGLFenceEnabled},W8:function(){return getRowsCols},XE:function(){return getProgramUniformLocationOrThrow},Yf:function(){return getTextureShapeFromLogicalShape},aj:function(){return linkProgram},ax:function(){return unbindColorTextureFromFramebuffer},b6:function(){return validateTextureSize},cU:function(){return createTexture},cu:function(){return validateFramebuffer},d8:function(){return createFramebuffer},ih:function(){return getShapeAs3D},lo:function(){return getWebGLMaxTextureSize},mZ:function(){return createStaticIndexBuffer},nr:function(){return getWebGLDisjointQueryTimerVersion},oT:function(){return isReshapeFree},qF:function(){return canBeRepresented},sb:function(){return bindVertexBufferToProgramAttribute},uH:function(){return isWebGLVersionEnabled},vu:function(){return validateProgram},w4:function(){return logShaderSourceAndInfoLog},wb:function(){return isCapableOfRenderingToFloatTexture},xc:function(){return createFragmentShader},y_:function(){return hasExtension}});var o=r(85964),a=r(92990),s=r(87893);/**
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
 */function callAndCheck(e,t){let r=t();return(0,o.OBj)().getBool("DEBUG")&&function(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error("WebGL Error: "+function(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}(e,t))}(e),r}function canBeRepresented(e){return!!((0,o.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||596e-10<Math.abs(e)&&65504>Math.abs(e))}function getExtensionOrThrow(e,t){return throwIfNull(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function createVertexShader(e,t){let r=throwIfNull(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(callAndCheck(e,()=>e.shaderSource(r,t)),callAndCheck(e,()=>e.compileShader(r)),!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(r)),Error("Failed to compile vertex shader.");return r}function createFragmentShader(e,t){let r=throwIfNull(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(callAndCheck(e,()=>e.shaderSource(r,t)),callAndCheck(e,()=>e.compileShader(r)),(0,o.OBj)().get("ENGINE_COMPILE_ONLY"))return r;if(!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw logShaderSourceAndInfoLog(t,e.getShaderInfoLog(r)),Error("Failed to compile fragment shader.");return r}let l=/ERROR: [0-9]+:([0-9]+):/g;function logShaderSourceAndInfoLog(e,t){let r=l.exec(t);if(null==r){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let i=+r[1],n=e.split("\n"),a=n.length.toString().length+2,s=n.map((e,t)=>o.D5U.rightPad((t+1).toString(),a)+e),u=0;for(let e=0;e<s.length;e++)u=Math.max(s[e].length,u);let c=s.slice(0,i-1),d=s.slice(i-1,i),p=s.slice(i);console.log(c.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${o.D5U.rightPad(d[0],u)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(p.join("\n"))}function createProgram(e){return throwIfNull(e,()=>e.createProgram(),"Unable to create WebGLProgram.")}function linkProgram(e,t){if(callAndCheck(e,()=>e.linkProgram(t)),!(0,o.OBj)().get("ENGINE_COMPILE_ONLY")&&!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Failed to link vertex and fragment shaders.")}function validateProgram(e,t){if(callAndCheck(e,()=>e.validateProgram(t)),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Shader program validation failed.")}function createStaticVertexBuffer(e,t){let r=throwIfNull(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return callAndCheck(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),callAndCheck(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function createStaticIndexBuffer(e,t){let r=throwIfNull(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return callAndCheck(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)),callAndCheck(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function createTexture(e){return throwIfNull(e,()=>e.createTexture(),"Unable to create WebGLTexture.")}function validateTextureSize(e,t){let r=(0,o.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){let r=`[${e}x${t}]`;throw Error("Requested texture size "+r+" is invalid.")}if(e>r||t>r){let i=`[${e}x${t}]`,n=`[${r}x${r}]`;throw Error("Requested texture size "+i+" greater than WebGL maximum on this browser / GPU "+n+".")}}function createFramebuffer(e){return throwIfNull(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function bindVertexBufferToProgramAttribute(e,t,r,i,n,o,a){let s=e.getAttribLocation(t,r);return -1!==s&&(callAndCheck(e,()=>e.bindBuffer(e.ARRAY_BUFFER,i)),callAndCheck(e,()=>e.vertexAttribPointer(s,n,e.FLOAT,!1,o,a)),callAndCheck(e,()=>e.enableVertexAttribArray(s)),!0)}function getProgramUniformLocationOrThrow(e,t,r){return throwIfNull(e,()=>e.getUniformLocation(t,r),'uniform "'+r+'" not present in program.')}function getProgramUniformLocation(e,t,r){return e.getUniformLocation(t,r)}function bindTextureToProgramUniformSampler(e,t,r,i){callAndCheck(e,()=>{(function(e,t){let r=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,i=t+e.TEXTURE0;if(i<e.TEXTURE0||i>r){let e=`[gl.TEXTURE0, gl.TEXTURE${r}]`;throw Error(`textureUnit must be in ${e}.`)}})(e,i),callAndCheck(e,()=>e.activeTexture(e.TEXTURE0+i)),callAndCheck(e,()=>e.bindTexture(e.TEXTURE_2D,t))}),callAndCheck(e,()=>e.uniform1i(r,i))}function bindColorTextureToFramebuffer(e,t,r){callAndCheck(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,r)),callAndCheck(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function unbindColorTextureFromFramebuffer(e,t){callAndCheck(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),callAndCheck(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function validateFramebuffer(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error("Error binding framebuffer: "+function(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}(e,t))}function throwIfNull(e,t,r){let i=callAndCheck(e,()=>t());if(null==i)throw Error(r);return i}function getBatchDim(e,t=2){return o.D5U.sizeFromShape(e.slice(0,e.length-t))}function getRowsCols(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function getShapeAs3D(e){let t=[1,1,1],r=0===e.length||1===e.length&&1===e[0];return r||(t=[getBatchDim(e),...getRowsCols(e)]),t}function getTextureShapeFromLogicalShape(e,t=!1){let r=(0,o.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE"),i=(0,o.OBj)().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");if(i===1/0&&(0,o.OBj)().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(i=r/2),t&&(r*=2,i*=2,1===(e=e.map((t,r)=>r>=e.length-2?o.D5U.nearestLargerEven(e[r]):e[r])).length&&(e=[2,e[0]])),2!==e.length){let t=o.D5U.squeezeShape(e);e=t.newShape}let n=o.D5U.sizeFromShape(e),a=null;e.length<=1&&n<=r?a=[1,n]:2===e.length&&e[0]<=r&&e[1]<=r?a=e:3===e.length&&e[0]*e[1]<=r&&e[2]<=r?a=[e[0]*e[1],e[2]]:3===e.length&&e[0]<=r&&e[1]*e[2]<=r?a=[e[0],e[1]*e[2]]:4===e.length&&e[0]*e[1]*e[2]<=r&&e[3]<=r?a=[e[0]*e[1]*e[2],e[3]]:4===e.length&&e[0]<=r&&e[1]*e[2]*e[3]<=r&&(a=[e[0],e[1]*e[2]*e[3]]);let s=null!=a&&Math.max(...a)>i&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(null==a||s){if(t){let t=getBatchDim(e),r=2,i=2;e.length&&([r,i]=getRowsCols(e)),n=t*(r/2)*(i/2),a=o.D5U.sizeToSquarishShape(n).map(e=>2*e)}else a=o.D5U.sizeToSquarishShape(n)}return a}function isReshapeFree(e,t){if(e=e.slice(-2),t=t.slice(-2),o.D5U.arraysEqual(e,t)||!e.length||!t.length||0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){let r=e[e.length-1],i=t[t.length-1];if(r===i||r%2==0&&i%2==0&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&e[0]%2==0&&t[0]%2==0}function getWebGLMaxTextureSize(e){if(null==i){let t=(0,a.jl)(e);i=t.getParameter(t.MAX_TEXTURE_SIZE)}return i}function getMaxTexturesInShader(e){if(null==n){let t=(0,a.jl)(e);n=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,n)}function getWebGLDisjointQueryTimerVersion(e){if(0===e)return 0;let t=(0,a.jl)(e);return hasExtension(t,"EXT_disjoint_timer_query_webgl2")&&2===e?2:hasExtension(t,"EXT_disjoint_timer_query")?1:0}function hasExtension(e,t){let r=e.getExtension(t);return null!=r}function isWebGLVersionEnabled(e){try{let t=(0,a.jl)(e);if(null!=t)return!0}catch(e){console.log("Error when getting WebGL context: ",e)}return!1}function isCapableOfRenderingToFloatTexture(e){if(0===e)return!1;let t=(0,a.jl)(e);if(1===e){if(!hasExtension(t,"OES_texture_float"))return!1}else if(!hasExtension(t,"EXT_color_buffer_float"))return!1;let r=createFloatTextureAndBindToFramebuffer(t);return r}function isDownloadFloatTextureEnabled(e){if(0===e)return!1;let t=(0,a.jl)(e);if(1===e){if(!hasExtension(t,"OES_texture_float")||!hasExtension(t,"WEBGL_color_buffer_float"))return!1}else{if(hasExtension(t,"EXT_color_buffer_float"))return createFloatTextureAndBindToFramebuffer(t);let e="EXT_color_buffer_half_float";if(hasExtension(t,e)){let r=t.getExtension(e);return function(e,t){let r=(0,s.Sq)(e,t),i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,r.internalFormatHalfFloat,1,1,0,r.textureFormatFloat,r.textureTypeHalfFloat,null);let n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);let o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(i),e.deleteFramebuffer(n),o}(t,r)}return!1}let r=createFloatTextureAndBindToFramebuffer(t);return r}function createFloatTextureAndBindToFramebuffer(e){let t=(0,s.Sq)(e),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let n=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),n}function isWebGLFenceEnabled(e){if(2!==e)return!1;let t=(0,a.jl)(e),r=null!=t.fenceSync;return r}function assertNotComplex(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&o.D5U.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}},85964:function(e,t,r){"use strict";let i,n,o;r.d(t,{SYM:function(){return I},VGw:function(){return M},SpW:function(){return k},mm_:function(){return L},Xze:function(){return N},oT6:function(){return B},IKK:function(){return F},sJF:function(){return V},aJk:function(){return j},M2y:function(){return H},qw7:function(){return z},jMg:function(){return U},QCc:function(){return W},Oyi:function(){return G},JhU:function(){return X},_k9:function(){return $},IMb:function(){return K},ROF:function(){return Y},XLW:function(){return q},zws:function(){return Z},zvY:function(){return J},hCO:function(){return Q},eEB:function(){return ee},RFZ:function(){return et},gJX:function(){return er},xnO:function(){return ei},Zz9:function(){return en},yj2:function(){return eo},Eh3:function(){return ea},mhS:function(){return es},wUP:function(){return el},wm:function(){return eu},x12:function(){return ec},o2y:function(){return ed},ik2:function(){return ep},mc4:function(){return eh},TR1:function(){return ef},VcC:function(){return em},Byc:function(){return ey},iHb:function(){return eg},JLz:function(){return DataStorage},QRR:function(){return ev},T0n:function(){return eb},cie:function(){return eS},sL$:function(){return eP},y7R:function(){return eC},$w:function(){return ex},p4S:function(){return eA},Vn9:function(){return eT},ekb:function(){return e_},hGc:function(){return ew},$g6:function(){return eE},SX0:function(){return eD},HEU:function(){return eO},hdR:function(){return eM},Omj:function(){return eI},NEP:function(){return ek},YFo:function(){return eL},Y0y:function(){return eN},vwp:function(){return eB},deh:function(){return eF},Uyb:function(){return eV},OR:function(){return ej},jeX:function(){return eH},eBW:function(){return rb},sHE:function(){return ez},_V0:function(){return rC},luS:function(){return rx},q1x:function(){return eG},qi_:function(){return eU},iZT:function(){return eW},Acj:function(){return eX},Qg5:function(){return e$},iJz:function(){return eY},J_u:function(){return eK},avt:function(){return eq},iWB:function(){return eZ},r7n:function(){return eJ},Zuw:function(){return KernelBackend},eZ0:function(){return e7},Hhh:function(){return te},J$2:function(){return eQ},vtC:function(){return e0},CAk:function(){return e1},e7N:function(){return e2},ZbH:function(){return e3},kU:function(){return e5},PYm:function(){return e4},VfG:function(){return e6},MZg:function(){return e8},w6g:function(){return e9},YoZ:function(){return tt},mTV:function(){return ti},OAf:function(){return to},OU7:function(){return ta},OV7:function(){return tn},vFR:function(){return ts},BMI:function(){return tr},q2K:function(){return tl},c17:function(){return tu},q8u:function(){return tc},jQs:function(){return td},Vbg:function(){return tp},NZg:function(){return th},wYn:function(){return tf},kuV:function(){return ty},uv1:function(){return tm},cye:function(){return tv},W0H:function(){return tb},yQU:function(){return tg},we_:function(){return tP},qWM:function(){return tS},QiL:function(){return tC},lyA:function(){return tx},pe_:function(){return tA},o0g:function(){return t_},DlI:function(){return tT},dDz:function(){return tw},CQl:function(){return tR},BiW:function(){return tE},e6w:function(){return tD},xJR:function(){return tO},oHH:function(){return eR},$HU:function(){return tI},qkr:function(){return tM},SbG:function(){return tV},HZH:function(){return tk},_Yw:function(){return tB},zbQ:function(){return tF},dpD:function(){return tL},Hmb:function(){return tN},mKl:function(){return tj},b9H:function(){return rS},e07:function(){return tH},bV0:function(){return tz},xQA:function(){return tU},nr8:function(){return tW},PhF:function(){return tX},oFR:function(){return tY},a5O:function(){return tJ},i5y:function(){return tZ},RQH:function(){return tK},wYB:function(){return tq},p2w:function(){return t$},Gcp:function(){return t5},MRv:function(){return tQ},TQc:function(){return t2},O3z:function(){return t4},nhH:function(){return t6},w3H:function(){return t8},ZjV:function(){return t9},D2d:function(){return t7},L8s:function(){return t3},FKq:function(){return t0},bK0:function(){return rt},_tC:function(){return re},e0R:function(){return rr},h8e:function(){return rv},jQk:function(){return ri},_JP:function(){return rn},s1s:function(){return ro},XkS:function(){return ra},Tr8:function(){return rs},GBy:function(){return t1},sEM:function(){return rl},MIZ:function(){return ru},YDk:function(){return TensorBuffer},SIB:function(){return tG},n9L:function(){return rc},cWu:function(){return rd},wx7:function(){return rp},G3Y:function(){return rh},kpP:function(){return rf},ToN:function(){return ry},Qvg:function(){return rg},RuY:function(){return rm},usg:function(){return rP},QBD:function(){return r7},backend_util:function(){return w},UFq:function(){return it},Jyw:function(){return C},f3b:function(){return buffer},zoF:function(){return ir},Izb:function(){return ii},C2$:function(){return P},hiC:function(){return rZ},SRH:function(){return engine},OBj:function(){return environment_env},Iqj:function(){return io},DaI:function(){return x},GDt:function(){return R},J69:function(){return ia},glt:function(){return nextFrame},sQ3:function(){return r5},jqO:function(){return registerBackend},wCN:function(){return registerKernel},XLQ:function(){return ie},iD$:function(){return scalar},yV1:function(){return A},CQI:function(){return setBackend},tdS:function(){return iT},kuN:function(){return _},Vl2:function(){return is},luU:function(){return r4},Smz:function(){return il},z4k:function(){return sumOutType},XeE:function(){return tensor_tensor},RRF:function(){return tensor1d},lub:function(){return tidy},x8V:function(){return upcastType},D5U:function(){return S},lls:function(){return zeros}});var a,s,l,u,c,d,p,h,f,y,g,m,v,b,S={};r.r(S),r.d(S,{arraysEqual:function(){return arraysEqual},arraysEqualWithNull:function(){return arraysEqualWithNull},assert:function(){return util_base_assert},assertNonNegativeIntegerDimensions:function(){return assertNonNegativeIntegerDimensions},assertNonNull:function(){return assertNonNull},assertShapesMatch:function(){return assertShapesMatch},bytesFromStringArray:function(){return bytesFromStringArray},bytesPerElement:function(){return bytesPerElement},checkConversionForErrors:function(){return checkConversionForErrors},clamp:function(){return clamp},computeStrides:function(){return computeStrides},convertBackendValuesAndArrayBuffer:function(){return convertBackendValuesAndArrayBuffer},createScalarValue:function(){return createScalarValue},createShuffledIndices:function(){return createShuffledIndices},decodeString:function(){return decodeString},distSquared:function(){return distSquared},encodeString:function(){return encodeString},fetch:function(){return util_fetch},fingerPrint64:function(){return fingerPrint64},flatten:function(){return flatten},getArrayFromDType:function(){return getArrayFromDType},getTypedArrayFromDType:function(){return getTypedArrayFromDType},hasEncodingLoss:function(){return hasEncodingLoss},hexToLong:function(){return hexToLong},indexToLoc:function(){return indexToLoc},inferDtype:function(){return inferDtype},inferFromImplicitShape:function(){return inferFromImplicitShape},isBoolean:function(){return isBoolean},isFunction:function(){return isFunction},isInt:function(){return isInt},isNumber:function(){return isNumber},isPromise:function(){return isPromise},isScalarShape:function(){return isScalarShape},isString:function(){return isString},isTypedArray:function(){return isTypedArray},isValidDtype:function(){return isValidDtype},locToIndex:function(){return locToIndex},makeOnesTypedArray:function(){return makeOnesTypedArray},makeZerosNestedTypedArray:function(){return makeZerosNestedTypedArray},makeZerosTypedArray:function(){return makeZerosTypedArray},nearestDivisor:function(){return nearestDivisor},nearestLargerEven:function(){return nearestLargerEven},now:function(){return now},parseAxisParam:function(){return parseAxisParam},randUniform:function(){return randUniform},repeatedTry:function(){return repeatedTry},rightPad:function(){return rightPad},shuffle:function(){return shuffle},shuffleCombo:function(){return shuffleCombo},sizeFromShape:function(){return util_base_sizeFromShape},sizeToSquarishShape:function(){return sizeToSquarishShape},squeezeShape:function(){return squeezeShape},sum:function(){return sum},swap:function(){return swap},tanh:function(){return tanh},toNestedArray:function(){return toNestedArray},toTypedArray:function(){return toTypedArray}});var P={};r.r(P),r.d(P,{isBrowser:function(){return isBrowser},isMobile:function(){return isMobile},mockIsMobile:function(){return mockIsMobile}});var C={};r.r(C),r.d(C,{assertAndGetBroadcastShape:function(){return assertAndGetBroadcastShape},getBroadcastDims:function(){return getBroadcastDims},getReductionAxes:function(){return getReductionAxes}});var x={};r.r(x),r.d(x,{prepareAndValidate:function(){return prepareAndValidate}});var A={};r.r(A),r.d(A,{calculateShapes:function(){return calculateShapes},validateInput:function(){return validateInput},validateUpdateShape:function(){return validateUpdateShape}});var _={};r.r(_),r.d(_,{assertParamsValid:function(){return assertParamsValid},computeFlatOffset:function(){return computeFlatOffset},computeOutShape:function(){return computeOutShape},getNormalizedAxes:function(){return getNormalizedAxes},isSliceContinous:function(){return isSliceContinous},maskToAxes:function(){return maskToAxes},parseSliceParams:function(){return parseSliceParams},sliceInfo:function(){return sliceInfo},startForAxis:function(){return startForAxis},startIndicesWithElidedDims:function(){return startIndicesWithElidedDims},stopForAxis:function(){return stopForAxis},stopIndicesWithElidedDims:function(){return stopIndicesWithElidedDims},stridesForAxis:function(){return stridesForAxis},stridesWithElidedDims:function(){return stridesWithElidedDims}});var T={};r.r(T),r.d(T,{collectGatherOpShapeInfo:function(){return collectGatherOpShapeInfo},computeOutShape:function(){return segment_util_computeOutShape},segOpComputeOptimalWindowSize:function(){return segOpComputeOptimalWindowSize}});var w={};r.r(w),r.d(w,{ERF_A1:function(){return iF},ERF_A2:function(){return iV},ERF_A3:function(){return ij},ERF_A4:function(){return iH},ERF_A5:function(){return iz},ERF_P:function(){return iB},PARALLELIZE_THRESHOLD:function(){return ik},RowPartitionType:function(){return b},SELU_SCALE:function(){return iN},SELU_SCALEALPHA:function(){return iL},applyActivation:function(){return applyActivation},assertAndGetBroadcastShape:function(){return assertAndGetBroadcastShape},assertAxesAreInnerMostDims:function(){return assertAxesAreInnerMostDims},assertParamsConsistent:function(){return assertParamsConsistent},assignToTypedArray:function(){return assignToTypedArray},axesAreInnerMostDims:function(){return axesAreInnerMostDims},calculateShapes:function(){return calculateShapes},checkEinsumDimSizes:function(){return checkEinsumDimSizes},checkPadOnDimRoundingMode:function(){return checkPadOnDimRoundingMode},combineLocations:function(){return combineLocations},combineRaggedTensorToTensorShapes:function(){return combineRaggedTensorToTensorShapes},complexWithEvenIndex:function(){return complexWithEvenIndex},complexWithOddIndex:function(){return complexWithOddIndex},computeConv2DInfo:function(){return computeConv2DInfo},computeConv3DInfo:function(){return computeConv3DInfo},computeDefaultPad:function(){return computeDefaultPad},computeDilation2DInfo:function(){return computeDilation2DInfo},computeOptimalWindowSize:function(){return computeOptimalWindowSize},computeOutAndReduceShapes:function(){return computeOutAndReduceShapes},computeOutShape:function(){return concat_util_computeOutShape},computePool2DInfo:function(){return computePool2DInfo},computePool3DInfo:function(){return computePool3DInfo},convertConv2DDataFormat:function(){return convertConv2DDataFormat},decodeEinsumEquation:function(){return decodeEinsumEquation},eitherStridesOrDilationsAreOne:function(){return eitherStridesOrDilationsAreOne},expandShapeToKeepDim:function(){return expandShapeToKeepDim},exponent:function(){return exponent},exponents:function(){return exponents},fromStringArrayToUint8:function(){return fromStringArrayToUint8},fromUint8ToStringArray:function(){return fromUint8ToStringArray},getAxesPermutation:function(){return getAxesPermutation},getBroadcastDims:function(){return getBroadcastDims},getComplexWithIndex:function(){return getComplexWithIndex},getEinsumComputePath:function(){return getEinsumComputePath},getEinsumPermutation:function(){return getEinsumPermutation},getFusedBiasGradient:function(){return getFusedBiasGradient},getFusedDyActivation:function(){return getFusedDyActivation},getImageCenter:function(){return getImageCenter},getInnerMostAxes:function(){return getInnerMostAxes},getPermuted:function(){return getPermuted},getRaggedRank:function(){return getRaggedRank},getReductionAxes:function(){return getReductionAxes},getReshaped:function(){return getReshaped},getReshapedPermuted:function(){return getReshapedPermuted},getRowPartitionTypesHelper:function(){return getRowPartitionTypesHelper},getSliceBeginCoords:function(){return getSliceBeginCoords},getSliceSize:function(){return getSliceSize},getSparseFillEmptyRowsIndicesDenseShapeMismatch:function(){return getSparseFillEmptyRowsIndicesDenseShapeMismatch},getSparseFillEmptyRowsNegativeIndexErrorMessage:function(){return getSparseFillEmptyRowsNegativeIndexErrorMessage},getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:function(){return getSparseFillEmptyRowsOutOfRangeIndexErrorMessage},getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:function(){return getSparseReshapeEmptyTensorZeroOutputDimErrorMessage},getSparseReshapeInputOutputMismatchErrorMessage:function(){return getSparseReshapeInputOutputMismatchErrorMessage},getSparseReshapeInputOutputMultipleErrorMessage:function(){return getSparseReshapeInputOutputMultipleErrorMessage},getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:function(){return getSparseReshapeMultipleNegativeOneOutputDimErrorMessage},getSparseReshapeNegativeOutputDimErrorMessage:function(){return getSparseReshapeNegativeOutputDimErrorMessage},getSparseSegmentReductionIndicesOutOfRangeErrorMessage:function(){return getSparseSegmentReductionIndicesOutOfRangeErrorMessage},getSparseSegmentReductionNegativeSegmentIdsErrorMessage:function(){return getSparseSegmentReductionNegativeSegmentIdsErrorMessage},getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:function(){return getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage},getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:function(){return getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage},getUndoAxesPermutation:function(){return getUndoAxesPermutation},isIdentityPermutation:function(){return isIdentityPermutation},log:function(){return log_log},mergeRealAndImagArrays:function(){return mergeRealAndImagArrays},prepareAndValidate:function(){return prepareAndValidate},prepareSplitSize:function(){return prepareSplitSize},segment_util:function(){return T},shouldFuse:function(){return shouldFuse},slice_util:function(){return _},splitRealAndImagArrays:function(){return splitRealAndImagArrays},stridesOrDilationsArePositive:function(){return stridesOrDilationsArePositive},tupleValuesAreOne:function(){return tupleValuesAreOne},upcastType:function(){return upcastType},validateDefaultValueShape:function(){return validateDefaultValueShape},validateInput:function(){return validateInput},validateUpdateShape:function(){return validateUpdateShape},warn:function(){return warn}});var R={};r.r(R),r.d(R,{GP:function(){return nonMaxSuppressionV3Impl},qP:function(){return nonMaxSuppressionV4Impl},pA:function(){return nonMaxSuppressionV5Impl},ZA:function(){return whereImpl}});let DataStorage=class DataStorage{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}};let KernelBackend=class KernelBackend{refCount(e){return notYetImplemented("refCount")}incRef(e){return notYetImplemented("incRef")}timerAvailable(){return!0}time(e){return notYetImplemented("time")}read(e){return notYetImplemented("read")}readSync(e){return notYetImplemented("readSync")}readToGPU(e,t){return notYetImplemented("readToGPU")}numDataIds(){return notYetImplemented("numDataIds")}disposeData(e,t){return notYetImplemented("disposeData")}write(e,t,r){return notYetImplemented("write")}move(e,t,r,i,n){return notYetImplemented("move")}createTensorFromGPUData(e,t,r){return notYetImplemented("createTensorFromGPUData")}memory(){return notYetImplemented("memory")}floatPrecision(){return notYetImplemented("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return notYetImplemented("dispose")}};function notYetImplemented(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function shuffle(e){let t=e.length,r=0;for(;t>0;)r=Math.random()*t|0,swap(e,--t,r)}function shuffleCombo(e,t){if(e.length!==t.length)throw Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let r=e.length,i=0;for(;r>0;)i=Math.random()*r|0,swap(e,--r,i),swap(t,r,i)}function clamp(e,t,r){return Math.max(e,Math.min(t,r))}function nearestLargerEven(e){return e%2==0?e:e+1}function swap(e,t,r){let i=e[t];e[t]=e[r],e[r]=i}function sum(e){let t=0;for(let r=0;r<e.length;r++)t+=e[r];return t}function randUniform(e,t){let r=Math.random();return t*r+(1-r)*e}function distSquared(e,t){let r=0;for(let i=0;i<e.length;i++){let n=Number(e[i])-Number(t[i]);r+=n*n}return r}function util_base_assert(e,t){if(!e)throw Error("string"==typeof t?t:t())}function assertShapesMatch(e,t,r=""){util_base_assert(arraysEqual(e,t),()=>r+` Shapes ${e} and ${t} must match`)}function assertNonNull(e){util_base_assert(null!=e,()=>"The input to the tensor constructor must be a non-null value.")}function util_base_sizeFromShape(e){if(0===e.length)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function isScalarShape(e){return 0===e.length}function arraysEqualWithNull(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(null!==e[r]&&null!==t[r]&&e[r]!==t[r])return!1;return!0}function arraysEqual(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function isInt(e){return e%1==0}function tanh(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return -1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function sizeToSquarishShape(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function createShuffledIndices(e){let t=new Uint32Array(e);for(let r=0;r<e;++r)t[r]=r;return shuffle(t),t}function rightPad(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function repeatedTry(e,t=e=>0,r,i){return new Promise((n,o)=>{let a=0,tryFn=()=>{if(e()){n();return}a++;let s=t(a);if(null!=r&&a>=r){o();return}null!=i?i(tryFn,s):setTimeout(tryFn,s)};tryFn()})}function inferFromImplicitShape(e,t){let r=1,i=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)r*=e[t];else if(-1===e[t]){if(-1!==i)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${i} and dim ${t}`);i=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===i){if(t>0&&t!==r)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===r)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%r!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${r}`);let n=e.slice();return n[i]=t/r,n}function parseAxisParam(e,t){let r=t.length;return util_base_assert((e=null==e?t.map((e,t)=>t):[].concat(e)).every(e=>e>=-r&&e<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${e}`),util_base_assert(e.every(e=>isInt(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?r+e:e)}function squeezeShape(e,t){let r=[],i=[],n=null!=t&&Array.isArray(t)&&0===t.length,o=null==t||n?null:parseAxisParam(t,e).sort(),a=0;for(let t=0;t<e.length;++t){if(null!=o){if(o[a]===t&&1!==e[t])throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==o[a]||o[a]>t)&&1===e[t]&&(r.push(e[t]),i.push(t)),o[a]<=t&&a++}1!==e[t]&&(r.push(e[t]),i.push(t))}return{newShape:r,keptDims:i}}function getTypedArrayFromDType(e,t){return getArrayFromDType(e,t)}function getArrayFromDType(e,t){let r=null;if(null==e||"float32"===e)r=new Float32Array(t);else if("int32"===e)r=new Int32Array(t);else if("bool"===e)r=new Uint8Array(t);else if("string"===e)r=Array(t);else throw Error(`Unknown data type ${e}`);return r}function checkConversionForErrors(e,t){for(let r=0;r<e.length;r++){let i=e[r];if(isNaN(i)||!isFinite(i))throw Error(`A tensor of type ${t} being uploaded contains ${i}.`)}}function isValidDtype(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function hasEncodingLoss(e,t){return"complex64"!==t&&("float32"!==t||"complex64"===e)&&("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)}function bytesPerElement(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw Error(`Unknown dtype ${e}`)}function bytesFromStringArray(e){if(null==e)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function isString(e){return"string"==typeof e||e instanceof String}function isBoolean(e){return"boolean"==typeof e}function isNumber(e){return"number"==typeof e}function inferDtype(e){if(Array.isArray(e))return inferDtype(e[0]);if(e instanceof Float32Array);else if(e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray)return"int32";else if(isNumber(e));else if(isString(e))return"string";else if(isBoolean(e))return"bool";return"float32"}function isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)}function nearestDivisor(e,t){for(let r=t;r<e;++r)if(e%r==0)return r;return e}function computeStrides(e){let t=e.length;if(t<2)return[];let r=Array(t-1);r[t-2]=e[t-1];for(let i=t-3;i>=0;--i)r[i]=r[i+1]*e[i+1];return r}function toNestedArray(e,t,r=!1){if(0===e.length)return t[0];let i=e.reduce((e,t)=>e*t)*(r?2:1);if(0===i)return[];if(i!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${r?" for a complex tensor":""}.`);return function createNestedArray(e,t,r,i=!1){let n=[];if(1===t.length){let o=t[0]*(i?2:1);for(let t=0;t<o;t++)n[t]=r[e+t]}else{let o=t[0],a=t.slice(1),s=a.reduce((e,t)=>e*t)*(i?2:1);for(let t=0;t<o;t++)n[t]=createNestedArray(e+t*s,a,r,i)}return n}(0,e,t,r)}function convertBackendValuesAndArrayBuffer(e,t){if(Array.isArray(e))return e;if("float32"===t)return e instanceof Float32Array?e:new Float32Array(e);if("int32"===t)return e instanceof Int32Array?e:new Int32Array(e);if("bool"===t||"string"===t)return Uint8Array.from(new Int32Array(e));throw Error(`Unknown dtype ${t}`)}function makeOnesTypedArray(e,t){let r=makeZerosTypedArray(e,t);for(let e=0;e<r.length;e++)r[e]=1;return r}function makeZerosTypedArray(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function makeZerosNestedTypedArray(e,t){let r=e.reduce((e,t)=>e*t,1);if(null==t||"float32"===t)return toNestedArray(e,new Float32Array(r));if("int32"===t)return toNestedArray(e,new Int32Array(r));if("bool"===t)return toNestedArray(e,new Uint8Array(r));throw Error(`Unknown data type ${t}`)}function assertNonNegativeIntegerDimensions(e){e.forEach(t=>{util_base_assert(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function locToIndex(e,t,r){if(0===t)return 0;if(1===t)return e[0];let i=e[e.length-1];for(let t=0;t<e.length-1;++t)i+=r[t]*e[t];return i}function indexToLoc(e,t,r){if(0===t)return[];if(1===t)return[e];let i=Array(t);for(let t=0;t<i.length-1;++t)i[t]=Math.floor(e/r[t]),e-=i[t]*r[t];return i[i.length-1]=e,i}function isPromise(e){return e&&e.then&&"function"==typeof e.then}/**
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
 */let E="tfjsflags";let Environment=class Environment{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=getQueryParams,this.populateURLFlags()}setPlatform(e,t){null==this.platform||D.getBool("IS_TEST")||D.getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`),this.platformName=e,this.platform=t}registerFlag(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},null!=this.urlFlags[e]){let t=this.urlFlags[e];D.getBool("IS_TEST")||D.getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(isPromise(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;let e=this.getQueryParams(this.global.location.search);if(E in e){let t=e[E].split(",");t.forEach(e=>{let[t,r]=e.split(":");this.urlFlags[t]=function(e,t){let r=t.toLowerCase();return"true"===r||"false"===r?"true"===r:`${+r}`===r?+r:t}(0,r)})}}};function getQueryParams(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...r)=>{var i,n;return i=r[0],n=r[1],t[decodeURIComponent(i)]=decodeURIComponent(n||""),r.join("=")}),t}function environment_env(){return D}let D=null;var O=r(28070);function getGlobalNamespace(){if(null==i){let e;if("undefined"!=typeof window)e=window;else if(void 0!==r.g)e=r.g;else if(void 0!==O)e=O;else if("undefined"!=typeof self)e=self;else throw Error("Could not find a global object");i=e}return i}function getGlobal(e,t){let r=function(){let e=getGlobalNamespace();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(r.has(e))return r.get(e);{let i=t();return r.set(e,i),r.get(e)}}let I="Abs",M="Acos",k="Acosh",L="Add",N="AddN",B="All",F="Any",V="ArgMax",j="ArgMin",H="Asin",z="Asinh",U="Atan",G="Atanh",W="Atan2",X="AvgPool",Y="AvgPoolGrad",$="AvgPool3D",K="AvgPool3DGrad",q="BatchMatMul",Z="BatchToSpaceND",J="Bincount",Q="BitwiseAnd",ee="BroadcastArgs",et="Cast",er="Ceil",ei="ClipByValue",en="Complex",eo="ComplexAbs",ea="Concat",es="Conv2D",el="Conv2DBackpropFilter",eu="Conv2DBackpropInput",ec="Conv3D",ed="Conv3DBackpropFilterV2",ep="Conv3DBackpropInputV2",eh="Cos",ef="Cosh",ey="Cumprod",eg="Cumsum",em="CropAndResize",ev="DenseBincount",eb="DepthToSpace",eS="DepthwiseConv2dNative",eP="DepthwiseConv2dNativeBackpropFilter",eC="DepthwiseConv2dNativeBackpropInput",ex="Diag",eA="Dilation2D",e_="Dilation2DBackpropInput",eT="Dilation2DBackpropFilter",ew="Draw",eR="RealDiv",eE="Einsum",eD="Elu",eO="EluGrad",eI="Erf",eM="Equal",ek="Exp",eL="ExpandDims",eN="Expm1",eB="FFT",eF="Fill",eV="FlipLeftRight",ej="Floor",eH="FloorDiv",ez="FusedBatchNorm",eU="GatherV2",eG="GatherNd",eW="Greater",eX="GreaterEqual",eY="Identity",e$="IFFT",eK="Imag",eq="IsFinite",eZ="IsInf",eJ="IsNan",eQ="LeakyRelu",e0="Less",e1="LessEqual",e2="LinSpace",e3="Log",e5="Log1p",e4="LogicalAnd",e6="LogicalNot",e8="LogicalOr",e9="LogicalXor",e7="LRN",te="LRNGrad",tt="Max",tr="Maximum",ti="MaxPool",tn="MaxPoolGrad",to="MaxPool3D",ta="MaxPool3DGrad",ts="MaxPoolWithArgmax",tl="Mean",tu="Min",tc="Minimum",td="MirrorPad",tp="Mod",th="Multinomial",tf="Multiply",ty="Neg",tg="NotEqual",tm="NonMaxSuppressionV3",tv="NonMaxSuppressionV4",tb="NonMaxSuppressionV5",tS="OnesLike",tP="OneHot",tC="Pack",tx="PadV2",tA="Pow",t_="Prelu",tT="Prod",tw="RaggedGather",tR="RaggedRange",tE="RaggedTensorToTensor",tD="Range",tO="Real",tI="Reciprocal",tM="Relu",tk="Reshape",tL="ResizeNearestNeighbor",tN="ResizeNearestNeighborGrad",tB="ResizeBilinear",tF="ResizeBilinearGrad",tV="Relu6",tj="Reverse",tH="Round",tz="Rsqrt",tU="ScatterNd",tG="TensorScatterUpdate",tW="SearchSorted",tX="Select",tY="Selu",t$="Slice",tK="Sin",tq="Sinh",tZ="Sign",tJ="Sigmoid",tQ="Softplus",t0="Sqrt",t1="Sum",t2="SpaceToBatchND",t3="SplitV",t5="Softmax",t4="SparseFillEmptyRows",t6="SparseReshape",t8="SparseSegmentMean",t9="SparseSegmentSum",t7="SparseToDense",re="SquaredDifference",rt="Square",rr="StaticRegexReplace",ri="StridedSlice",rn="StringNGrams",ro="StringSplit",ra="StringToHashBucketFast",rs="Sub",rl="Tan",ru="Tanh",rc="Tile",rd="TopK",rp="Transform",rh="Transpose",rf="Unique",ry="Unpack",rg="UnsortedSegmentSum",rm="ZerosLike",rv="Step",rb="FromPixels",rS="RotateWithOffset",rP="_FusedMatMul",rC="FusedConv2D",rx="FusedDepthwiseConv2D";/**
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
 */function warn(...e){D.getBool("IS_TEST")||D.getBool("PROD")||console.warn(...e)}function log_log(...e){D.getBool("IS_TEST")||D.getBool("PROD")||console.log(...e)}/**
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
 */let rA=getGlobal("kernelRegistry",()=>new Map),r_=getGlobal("gradRegistry",()=>new Map);function getKernel(e,t){let r=`${t}_${e}`;return rA.get(r)}function getKernelsForBackend(e){let t=rA.entries(),r=[];for(;;){let{done:i,value:n}=t.next();if(i)break;let[o,a]=n,[s]=o.split("_");s===e&&r.push(a)}return r}function registerKernel(e){let{kernelName:t,backendName:r}=e,i=`${r}_${t}`;rA.has(i)&&warn(`The kernel '${t}' for backend '${r}' is already registered`),rA.set(i,e)}/**
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
 */function isTypedArrayBrowser(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var rT=r(6017),rw=r.n(rT);/**
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
 */let rR=rw()||rT;function hexToLong(e){return rR.fromString(e,!0,16)}let rE=hexToLong("c3a5c85c97cb3127"),rD=hexToLong("b492b66fbe98f273"),rO=hexToLong("9ae16a3b2f90404f");function shiftMix(e){return e.xor(e.shru(47))}function hash_util_fetch(e,t,r){let i=e.slice(t,t+r);return rR.fromBytes(Array.from(i),!0,!0)}function fetch64(e,t){return hash_util_fetch(e,t,8)}function rotate64(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function hashLen16(e,t,r=hexToLong("9ddfea08eb382d69")){let i=e.xor(t).mul(r);i=i.xor(i.shru(47));let n=t.xor(i).mul(r);return(n=n.xor(n.shru(47))).mul(r)}function weakHashLen32WithSeedsStr(e,t,r,i){return function(e,t,r,i,n,o){n=n.add(e),o=rotate64(o.add(n).add(i),21);let a=n;return n=(n=n.add(t)).add(r),o=o.add(rotate64(n,44)),[n.add(i),o.add(a)]}(fetch64(e,t),fetch64(e,t+8),fetch64(e,t+16),fetch64(e,t+24),r,i)}function fingerPrint64(e,t=e.length){let r=rR.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){let r=rO.add(2*t),i=fetch64(e,0).add(rO),n=fetch64(e,t-8),o=rotate64(n,37).mul(r).add(i),a=rotate64(i,25).add(n).mul(r);return hashLen16(o,a,r)}if(t>=4){let r=rO.add(2*t),i=hash_util_fetch(e,0,4);return hashLen16(i.shl(3).add(t),hash_util_fetch(e,t-4,4),r)}if(t>0){let r=e[0],i=e[t>>1],n=e[t-1],o=t+(n<<2);return shiftMix(rO.mul(r+(i<<8)).xor(rE.mul(o))).mul(rO)}return rO}(e,t):function(e,t=e.length){let r=rO.add(2*t),i=fetch64(e,0).mul(rD),n=fetch64(e,8),o=fetch64(e,t-8).mul(r),a=fetch64(e,t-16).mul(rO);return hashLen16(rotate64(i.add(n),43).add(rotate64(o,30)).add(a),i.add(rotate64(n.add(rO),18)).add(o),r)}(e,t);if(t<=64)return function(e,t=e.length){let r=rO.add(2*t),i=fetch64(e,0).mul(rO),n=fetch64(e,8),o=fetch64(e,t-8).mul(r),a=fetch64(e,t-16).mul(rO),s=rotate64(i.add(n),43).add(rotate64(o,30)).add(a),l=hashLen16(s,i.add(rotate64(n.add(rO),18)).add(o),r),u=fetch64(e,16).mul(r),c=fetch64(e,24),d=s.add(fetch64(e,t-32)).mul(r),p=l.add(fetch64(e,t-24)).mul(r);return hashLen16(rotate64(u.add(c),43).add(rotate64(d,30)).add(p),u.add(rotate64(c.add(i),18)).add(d),r)}(e,t);let i=r,n=r.mul(rD).add(113),o=shiftMix(n.mul(rO).add(113)).mul(rO),a=[rR.UZERO,rR.UZERO],s=[rR.UZERO,rR.UZERO];i=i.mul(rO).add(fetch64(e,0));let l=0,u=(t-1>>6)*64,c=u+(t-1&63)-63;do i=rotate64(i.add(n).add(a[0]).add(fetch64(e,l+8)),37).mul(rD),n=rotate64(n.add(a[1]).add(fetch64(e,l+48)),42).mul(rD),i=i.xor(s[1]),n=n.add(a[0]).add(fetch64(e,l+40)),o=rotate64(o.add(s[0]),33).mul(rD),a=weakHashLen32WithSeedsStr(e,l,a[1].mul(rD),i.add(s[0])),s=weakHashLen32WithSeedsStr(e,l+32,o.add(s[1]),n.add(fetch64(e,l+16))),[o,i]=[i,o],l+=64;while(l!==u);let d=rD.add(o.and(255).shl(1));return l=c,s[0]=s[0].add(t-1&63),a[0]=a[0].add(s[0]),s[0]=s[0].add(a[0]),i=rotate64(i.add(n).add(a[0]).add(fetch64(e,l+8)),37).mul(d),n=rotate64(n.add(a[1]).add(fetch64(e,l+48)),42).mul(d),i=i.xor(s[1].mul(9)),n=n.add(a[0].mul(9).add(fetch64(e,l+40))),o=rotate64(o.add(s[0]),33).mul(d),a=weakHashLen32WithSeedsStr(e,l,a[1].mul(d),i.add(s[0])),s=weakHashLen32WithSeedsStr(e,l+32,o.add(s[1]),n.add(fetch64(e,l+16))),[o,i]=[i,o],hashLen16(hashLen16(a[0],s[0],d).add(shiftMix(n).mul(rE)).add(o),hashLen16(a[1],s[1],d).add(i),d)}/**
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
 */function createScalarValue(e,t){return"string"===t?encodeString(e):toTypedArray([e],t)}function toTypedArray(e,t){var r;if("string"===t)throw Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=flatten(e)),D.getBool("DEBUG")&&checkConversionForErrors(e,t),(r=e)instanceof Float32Array&&"float32"===t||r instanceof Int32Array&&"int32"===t||r instanceof Uint8Array&&"bool"===t)return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){let t=new Uint8Array(e.length);for(let r=0;r<t.length;++r)0!==Math.round(e[r])&&(t[r]=1);return t}throw Error(`Unknown data type ${t}`)}function now(){return D.platform.now()}function util_fetch(e,t){return D.platform.fetch(e,t)}function encodeString(e,t="utf-8"){return t=t||"utf-8",D.platform.encode(e,t)}function decodeString(e,t="utf-8"){return t=t||"utf-8",D.platform.decode(e,t)}function isTypedArray(e){return null!=D.platform.isTypedArray?D.platform.isTypedArray(e):isTypedArrayBrowser(e)}function flatten(e,t=[],r=!1){if(null==t&&(t=[]),"boolean"==typeof e||"number"==typeof e||"string"==typeof e||isPromise(e)||null==e||isTypedArray(e)&&r)t.push(e);else if(Array.isArray(e)||isTypedArray(e))for(let i=0;i<e.length;++i)flatten(e[i],t,r);else{let i=-1;for(let t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(i=Math.max(i,Number(t)));for(let n=0;n<=i;n++)flatten(e[n],t,r)}return t}/**
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
 */let Profiler=class Profiler{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new Logger)}profileKernel(e,t,r){let i,n;let holdResultWrapperFn=()=>{i=r()},o=now();if(this.backendTimer.timerAvailable())n=this.backendTimer.time(holdResultWrapperFn);else{for(let e of(holdResultWrapperFn(),i))e.dataSync();n=Promise.resolve({kernelMs:now()-o})}if(D.getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<i.length;t++){let r=i[t];r.data().then(t=>{!function(e,t,r){if("float32"===t)for(let t=0;t<e.length;t++){let i=e[t];if(isNaN(i)||!isFinite(i))return console.warn(`Found ${i} in the result of '${r}'`),!0}}(t,r.dtype,e)})}let a={kernelName:e,outputs:i,inputs:t,timeMs:n.then(e=>e.kernelMs),extraInfo:n.then(e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():"")};return a}logKernelProfile(e){let{kernelName:t,outputs:r,timeMs:i,inputs:n,extraInfo:o}=e;r.forEach(e=>{Promise.all([e.data(),i,o]).then(r=>{this.logger.logKernelProfile(t,e,r[0],r[1],n,r[2])})})}};let Logger=class Logger{logKernelProfile(e,t,r,i,n,o){let a="number"==typeof i?rightPad(`${i}ms`,9):i.error,s=rightPad(e,25),l=t.rank,u=t.size,c=rightPad(t.shape.toString(),14),d="";for(let e in n){let r=n[e];if(null!=r){let i=r.shape||t.shape,n=i.length;d+=`${e}: ${n}D ${n>0?i:""} `}}console.log(`%c${s}	%c${a}	%c${l}D ${c}	%c${u}	%c${d}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function valToString(e,t,r){return rightPad(Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:isString(e)?`'${e}'`:"bool"===r?boolNumToString(e):parseFloat(e.toFixed(7)).toString(),t)}function boolNumToString(e){return 0===e?"false":"true"}function createComplexTuples(e){let t=[];for(let r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}/**
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
 */let TensorBuffer=class TensorBuffer{constructor(e,t,r){if(this.dtype=t,this.shape=e.slice(),this.size=util_base_sizeFromShape(e),null!=r){let e=r.length;util_base_assert(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===t)throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||getArrayFromDType(t,this.size),this.strides=computeStrides(e)}set(e,...t){0===t.length&&(t=[0]),util_base_assert(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let r=this.locToIndex(t);this.values[r]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(let r of e){if(r<0||r>=this.shape[t]){let t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(t)}t++}let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=this.strides[t]*e[t];return this.values[r]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];let t=Array(this.shape.length);for(let r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return rI().makeTensor(this.values,this.shape,this.dtype)}};let rI=null,rM=null;let tensor_Tensor=class tensor_Tensor{constructor(e,t,r,i){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=util_base_sizeFromShape(e),this.strides=computeStrides(e),this.dataId=r,this.id=i,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let e=await this.data();return rM.buffer(this.shape,this.dtype,e)}bufferSync(){return rM.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return toNestedArray(this.shape,e,"complex64"===this.dtype)}arraySync(){return toNestedArray(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();let e=rI().read(this.dataId);if("string"===this.dtype){let t=await e;try{return t.map(e=>decodeString(e))}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),rI().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=rI().readSync(this.dataId);if("string"===this.dtype)try{return e.map(e=>decodeString(e))}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();let e=await rI().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),rI().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error("Tensor is disposed.")}print(e=!1){return rM.print(this,e)}clone(){return this.throwIfDisposed(),rM.clone(this)}toString(e=!1){let t=this.dataSync();return function(e,t,r,i){let n=computeStrides(t),o=function(e,t,r,i){let n=util_base_sizeFromShape(t),o=i[i.length-1],a=Array(o).fill(0),s=t.length,l="complex64"===r?createComplexTuples(e):e;if(s>1)for(let e=0;e<n/o;e++){let t=e*o;for(let e=0;e<o;e++)a[e]=Math.max(a[e],valToString(l[t+e],0,r).length)}return a}(e,t,r,n),a=t.length,s=function subTensorToString(e,t,r,i,n,o=!0){let a="complex64"===r?2:1,s=t[0],l=t.length;if(0===l){if("complex64"===r){let t=createComplexTuples(e);return[valToString(t[0],0,r)]}return"bool"===r?[boolNumToString(e[0])]:[e[0].toString()]}if(1===l){if(s>20){let t=3*a,i=Array.from(e.slice(0,t)),o=Array.from(e.slice((s-3)*a,s*a));return"complex64"===r&&(i=createComplexTuples(i),o=createComplexTuples(o)),["["+i.map((e,t)=>valToString(e,n[t],r)).join(", ")+", ..., "+o.map((e,t)=>valToString(e,n[s-3+t],r)).join(", ")+"]"]}let t="complex64"===r?createComplexTuples(e):Array.from(e);return["["+t.map((e,t)=>valToString(e,n[t],r)).join(", ")+"]"]}let u=t.slice(1),c=i.slice(1),d=i[0]*a,p=[];if(s>20){for(let t=0;t<3;t++){let i=t*d,o=i+d;p.push(...subTensorToString(e.slice(i,o),u,r,c,n,!1))}p.push("...");for(let t=s-3;t<s;t++){let i=t*d,o=i+d;p.push(...subTensorToString(e.slice(i,o),u,r,c,n,t===s-1))}}else for(let t=0;t<s;t++){let i=t*d,o=i+d;p.push(...subTensorToString(e.slice(i,o),u,r,c,n,t===s-1))}let h=2===l?",":"";p[0]="["+(s>0?p[0]+h:"");for(let e=1;e<p.length-1;e++)p[e]=" "+p[e]+h;let f=",\n";for(let e=2;e<l;e++)f+="\n";return p[p.length-1]=" "+p[p.length-1]+"]"+(o?"":f),p}(e,t,r,n,o),l=["Tensor"];return i&&(l.push(`  dtype: ${r}`),l.push(`  rank: ${a}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(s.map(e=>"    "+e).join("\n")),l.join("\n")}(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),rM.cast(this,e)}variable(e=!0,t,r){return this.throwIfDisposed(),rI().makeVariable(this,e,t,r)}};function getGlobalTensorClass(){return getGlobal("Tensor",()=>tensor_Tensor)}Object.defineProperty(tensor_Tensor,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),getGlobalTensorClass();let Variable=class Variable extends tensor_Tensor{constructor(e,t,r,i){super(e.shape,e.dtype,e.dataId,i),this.trainable=t,this.name=r}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!arraysEqual(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);rI().disposeTensor(this),this.dataId=e.dataId,rI().incRef(this,null)}dispose(){rI().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Variable,Symbol.hasInstance,{value:e=>e instanceof tensor_Tensor&&null!=e.assign&&e.assign instanceof Function}),(a=h||(h={})).R0="R0",a.R1="R1",a.R2="R2",a.R3="R3",a.R4="R4",a.R5="R5",a.R6="R6",(s=f||(f={})).float32="float32",s.int32="int32",s.bool="int32",s.complex64="complex64",(l=y||(y={})).float32="float32",l.int32="int32",l.bool="bool",l.complex64="complex64",(u=g||(g={})).float32="float32",u.int32="float32",u.bool="float32",u.complex64="complex64",(c=m||(m={})).float32="complex64",c.int32="complex64",c.bool="complex64",c.complex64="complex64";let rk={float32:g,int32:f,bool:y,complex64:m};function upcastType(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw Error(`Can not upcast ${e} with ${t}`)}return rk[e][t]}function sumOutType(e){return upcastType(e,"int32")}function isWebGLData(e){return null!=e&&"object"==typeof e&&"texture"in e&&e.texture instanceof WebGLTexture}function isWebGPUData(e){return"undefined"!=typeof GPUBuffer&&null!=e&&"object"==typeof e&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
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
 */function makeTypesMatch(e,t){if(e.dtype===t.dtype)return[e,t];let r=upcastType(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function getTensorsInContainer(e){let t=[],r=new Set;return function walkTensorContainer(e,t,r){if(null!=e){if(e instanceof tensor_Tensor){t.push(e);return}if(Array.isArray(e)||"object"==typeof e)for(let i in e){let n=e[i];r.has(n)||(r.add(n),walkTensorContainer(n,t,r))}}}(e,t,r),t}/**
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
 */function isRegisteredKernelInvocation(e){return null!=e.kernelName}let EngineState=class EngineState{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}};let Engine=class Engine{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new EngineState}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then(()=>{});if(null!=this.backendInstance)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let r=e[t],i=await this.initializeBackend(r).success;if(i){await this.setBackend(r);return}}throw Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{let{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,r=1){return e in this.registryFactory?(warn(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:r},!0)}async setBackend(e){if(null==this.registryFactory[e])throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;let{success:t,asyncInit:r}=this.initializeBackend(e),i=r?await t:t;if(!i)return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Profiler(this.backendInstance),!0}setupRegisteredKernels(){let e=getKernelsForBackend(this.backendName);e.forEach(e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){let t=getKernelsForBackend(e);t.forEach(t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(null==t)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let r=t.factory();if(!r||r instanceof KernelBackend||"function"!=typeof r.then)return this.registry[e]=r,{success:!0,asyncInit:!1};{let t=++this.pendingBackendInitId,i=r.then(r=>!(t<this.pendingBackendInitId)&&(this.registry[e]=r,this.pendingBackendInit=null,!0)).catch(r=>!(t<this.pendingBackendInitId)&&(this.pendingBackendInit=null,warn(`Initialization of backend ${e} failed`),warn(r.stack||r.message),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}}catch(t){return warn(`Initialization of backend ${e} failed`),warn(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let r=e[t],{success:i,asyncInit:n}=this.initializeBackend(r);if(n||i)return{name:r,asyncInit:n}}throw Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){let r=this.state.tensorInfo.get(t),i=r.backend,n=this.readSync(t),o=i.refCount(t);i.disposeData(t,!0),r.backend=e,e.move(t,n,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let r,i=null;if(null==t){if("function"!=typeof e)throw Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=e}return this.scopedRun(()=>this.startScope(i),()=>this.endScope(r),()=>((r=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(e,t,r){e();try{let e=r();return t(),e}catch(e){throw t(),e}}nextTensorId(){return Engine.nextTensorId++}nextVariableId(){return Engine.nextVariableId++}clone(e){let t=rL.runKernel(eY,{x:e});return this.addTapeNode(this.state.activeScope.name,{x:e},[t],e=>({x:()=>rL.runKernel(et,{x:e},{dtype:"float32"})}),[],{}),t}runKernel(e,t,r){null==this.backendName&&this.backend;let i=null!=getKernel(e,this.backendName);if(!i)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,r){let i=this.backend.numDataIds(),n=0;r.forEach(e=>{n+="complex64"===e.dtype?3:1});let o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=i-t-n-o;if(a>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${e}'`)}runKernelFunc(e){let t,r,i,n;let o=[],a=this.isTapeOn(),s=this.state.numBytes,l=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;let u=isRegisteredKernelInvocation(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(isRegisteredKernelInvocation(e)){let{kernelName:t,inputs:n,attrs:s}=e;null==this.backendName&&this.backend;let l=getKernel(t,this.backendName);util_base_assert(null!=l,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),r=()=>{let e=this.backend.numDataIds();i=l.kernelFunc({inputs:n,attrs:s,backend:this.backend});let r=Array.isArray(i)?i:[i];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,r);let u=r.map(e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e));if(a){let e=this.getTensorsForGradient(t,n,u);o=this.saveTensorsForBackwardMode(e)}return u}}else{let{forwardFunc:t}=e,saveFunc=e=>{a&&(o=e.map(e=>this.keep(this.clone(e))))};r=()=>{let e=this.backend.numDataIds();i=this.tidy(()=>t(this.backend,saveFunc));let r=Array.isArray(i)?i:[i];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,e,r),r}}let{inputs:c,attrs:d}=e,p=isRegisteredKernelInvocation(e)?null:e.backwardsFunc;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(n=this.profiler.profileKernel(u,c,()=>r()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(n),t=n.outputs):t=r()}),a&&this.addTapeNode(u,c,t,p,o,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-l,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(e=>null!=c[e]?c[e].shape:null),outputShapes:t.map(e=>e.shape),kernelTimeMs:n.timeMs,extraInfo:n.extraInfo}),Array.isArray(i)?t:t[0]}saveTensorsForBackwardMode(e){let t=e.map(e=>this.keep(this.clone(e)));return t}getTensorsForGradient(e,t,r){let i=r_.get(e);if(null!=i){let e;let n=i.inputsToSave||[],o=i.outputsToSave||[];i.saveAllInputs?(util_base_assert(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),e=Object.keys(t).map(e=>t[e])):e=n.map(e=>t[e]);let a=r.filter((e,t)=>o[t]);return e.concat(a)}return[]}makeTensor(e,t,r,i){if(null==e)throw Error("Values passed to engine.makeTensor() are null");r=r||"float32",i=i||this.backend;let n=e;"string"===r&&isString(e[0])&&(n=e.map(e=>encodeString(e)));let o=i.write(n,t,r),a=new tensor_Tensor(t,r,o,this.nextTensorId());if(this.trackTensor(a,i),"string"===r){let e=this.state.tensorInfo.get(o),t=bytesFromStringArray(n);this.state.numBytes+=t-e.bytes,e.bytes=t}return a}makeTensorFromDataId(e,t,r,i){r=r||"float32";let n={dataId:e,shape:t,dtype:r};return this.makeTensorFromTensorInfo(n,i)}makeTensorFromTensorInfo(e,t){let{dataId:r,shape:i,dtype:n}=e,o=new tensor_Tensor(i,n,r,this.nextTensorId());return this.trackTensor(o,t),o}makeVariable(e,t=!0,r,i){r=r||this.nextVariableId().toString(),null!=i&&i!==e.dtype&&(e=e.cast(i));let n=new Variable(e,t,r,this.nextTensorId());if(null!=this.state.registeredVariables[n.name])throw Error(`Variable with name ${n.name} was already registered`);return this.state.registeredVariables[n.name]=n,this.incRef(n,this.backend),n}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let r=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(r=e.size*bytesPerElement(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof Variable||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){let t=e.size*bytesPerElement(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,r=this.state.numTensors;for(let i of(this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r,this.state.activeProfile.kernels))i.kernelTimeMs=await i.kernelTimeMs,i.extraInfo=await i.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,r,i,n,o){let a={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:n},s=r_.get(e);null!=s&&(i=s.gradFunc),null!=i&&(a.gradient=e=>i((e=e.map((e,t)=>{if(null==e){let e=r[t],i=makeZerosTypedArray(e.size,e.dtype);return this.makeTensor(i,e.shape,e.dtype)}return e})).length>1?e:e[0],n,o)),this.state.activeTape.push(a)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=getTensorsInContainer(e),r=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];t.kept||r.has(t.id)||t.dispose()}let i=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{e.kept||e.scopeId!==i.id||this.track(e)})}gradients(e,t,r,i=!1){if(util_base_assert(t.length>0,()=>"gradients() received an empty list of xs."),null!=r&&"float32"!==r.dtype)throw Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);let n=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));util_base_assert(n instanceof tensor_Tensor,()=>"The result y returned by f() must be a tensor.");let o=/**
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
 */function(e,t,r){let i={},n={};for(let e=0;e<t.length;e++)i[t[e].id]=!0;for(let r=0;r<e.length;r++){let o=e[r],a=o.inputs;for(let e in a){let r=a[e],s=!1;for(let e=0;e<t.length;e++)if(i[r.id]){o.outputs.forEach(e=>i[e.id]=!0),s=!0,n[o.id]=!0;break}if(s)break}}let o={};o[r.id]=!0;let a={};for(let t=e.length-1;t>=0;t--){let r=e[t],i=r.inputs;for(let e=0;e<r.outputs.length;e++)if(o[r.outputs[e].id]){for(let e in i)o[i[e].id]=!0,a[r.id]=!0;break}}let s=[];for(let t=0;t<e.length;t++){let r=e[t];if(n[r.id]&&a[r.id]){let e={};for(let t in r.inputs){let n=r.inputs[t];i[n.id]&&(e[t]=n)}let t=Object.assign({},r);t.inputs=e,t.outputs=r.outputs,s.push(t)}}return s}(this.state.activeTape,t,n);if(!i&&0===o.length&&t.length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let e={};e[n.id]=null==r?function(e){let t=makeOnesTypedArray(util_base_sizeFromShape(e),"float32");return rL.makeTensor(t,e,"float32")}(n.shape):r,function(e,t,r,i){for(let n=t.length-1;n>=0;n--){let o=t[n],a=[];if(o.outputs.forEach(t=>{let r=e[t.id];null!=r?a.push(r):a.push(null)}),null==o.gradient)throw Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);let s=o.gradient(a);for(let t in o.inputs){if(!(t in s))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(s)}.`);let n=r(()=>s[t]());if("float32"!==n.dtype)throw Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${n.dtype}'`);let a=o.inputs[t];if(!arraysEqual(n.shape,a.shape))throw Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${t}' has shape '${n.shape}', which does not match the shape of the input '${a.shape}'`);if(null==e[a.id])e[a.id]=n;else{let t=e[a.id];e[a.id]=i(t,n),t.dispose()}}}}(e,o,e=>this.tidy(e),add);let i=t.map(t=>e[t.id]);return 0===this.state.gradientDepth&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:n,grads:i}})}customGrad(e){return util_base_assert(isFunction(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{let r;util_base_assert(t.every(e=>e instanceof tensor_Tensor),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let i={};return t.forEach((e,t)=>{i[t]=e}),this.runKernelFunc({forwardFunc:(i,n)=>(util_base_assert((r=e(...[...t,n])).value instanceof tensor_Tensor,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),util_base_assert(isFunction(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),backwardsFunc:(e,i)=>{let n=r.gradFunc(e,i),o=Array.isArray(n)?n:[n];util_base_assert(o.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),util_base_assert(o.every(e=>e instanceof tensor_Tensor),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let a={};return o.forEach((e,t)=>{a[t]=()=>e}),a},inputs:i})}}readSync(e){let t=this.state.tensorInfo.get(e);return t.backend.readSync(e)}read(e){let t=this.state.tensorInfo.get(e);return t.backend.read(e)}readToGPU(e,t){let r=this.state.tensorInfo.get(e);return r.backend.readToGPU(e,t)}async time(e){let t=now(),r=await this.backend.time(e);return r.wallMs=now()-t,r}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){for(let e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new EngineState,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};function getOrMakeEngine(){let e=getGlobalNamespace();if(null==e._tfengine){let t=new Environment(e);e._tfengine=new Engine(t)}return D=e._tfengine.ENV,rI=()=>e._tfengine,e._tfengine}Engine.nextTensorId=0,Engine.nextVariableId=0;let rL=getOrMakeEngine();function add(e,t){return rL.runKernel(L,{a:e,b:t})}function mockIsMobile(e){n=e}function isMobile(e){if(void 0!==n)return n;if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;let t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function isBrowser(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var rN=r(28070);/**
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
 */let rB=D;rB.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),rB.registerFlag("IS_BROWSER",()=>isBrowser()),rB.registerFlag("IS_NODE",()=>void 0!==rN&&void 0!==rN.versions&&void 0!==rN.versions.node),rB.registerFlag("IS_CHROME",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),rB.registerFlag("IS_SAFARI",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),rB.registerFlag("PROD",()=>!1),rB.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>rB.getBool("DEBUG")),rB.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),rB.registerFlag("IS_TEST",()=>!1),rB.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>rB.getBool("DEBUG")),rB.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),rB.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),rB.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);let composite_array_buffer_CompositeArrayBuffer=class composite_array_buffer_CompositeArrayBuffer{static join(e){return new composite_array_buffer_CompositeArrayBuffer(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,null==e||(e instanceof Array||(e=[e]),0===(e=e.map(e=>isTypedArray(e)?e.buffer:e)).length))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let r=0;r<e.length;r++){let i=e[r];r!==e.length-1&&i.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let n=t+i.byteLength;this.shards.push({buffer:i,start:t,end:n}),t=n}0===this.shards.length&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(0===this.shards.length||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),(t=Math.min(this.byteLength,t))<=e))return new ArrayBuffer(0);let r=this.findShardForByte(e);if(-1===r)throw Error(`Could not find start shard for byte ${e}`);let i=t-e,n=new ArrayBuffer(i),o=new Uint8Array(n),a=0;for(let i=r;i<this.shards.length;i++){let r=this.shards[i],n=e+a,s=n-r.start,l=a,u=Math.min(t,r.end),c=u-r.start,d=new Uint8Array(r.buffer,s,c-s);if(o.set(d,l),a+=d.length,t<r.end)break}return n}findShardForByte(e){if(0===this.shards.length||e<0||e>=this.byteLength)return -1;if(null!=this.bufferUniformSize)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function check(t){return e<t.start?-1:e>=t.end?1:0}if(0===check(this.shards[this.previousShardIndex]))return this.previousShardIndex;let t=function(e,t){let r=0,i=e.length;for(;r<=i;){let n=Math.floor((i-r)/2)+r,o=t(e[n]);if(0===o)return n;o<0?i=n:r=n+1}return -1}(this.shards,check);return -1===t?-1:(this.previousShardIndex=t,this.previousShardIndex)}};var rF=r(61900).Buffer;let rV=void 0!==rF&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function stringByteLength(e){return rV?rF.byteLength(e,"utf8"):new Blob([e]).size}function getModelJSONForModelArtifacts(e,t){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(r.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),r}async function io_utils_getModelArtifactsForJSON(e,t){let r,i;return null!=e.weightsManifest&&([r,i]=await t(e.weightsManifest)),function(e,t,r){let i={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(i.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw Error("modelJSON has weightsManifest but weightData is null");i.weightSpecs=t,i.weightData=r}return null!=e.signature&&(i.signature=e.signature),null!=e.userDefinedMetadata&&(i.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(i.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(i.initializerSignature=e.initializerSignature),i}(e,r,i)}function getModelArtifactsInfoForJSON(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:stringByteLength(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:stringByteLength(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new composite_array_buffer_CompositeArrayBuffer(e.weightData).byteLength}}function getWeightSpecs(e){let t=[];for(let r of e)t.push(...r.weights);return t}/**
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
 */let router_registry_IORouterRegistry=class router_registry_IORouterRegistry{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==router_registry_IORouterRegistry.instance&&(router_registry_IORouterRegistry.instance=new router_registry_IORouterRegistry),router_registry_IORouterRegistry.instance}static registerSaveRouter(e){router_registry_IORouterRegistry.getInstance().saveRouters.push(e)}static registerLoadRouter(e){router_registry_IORouterRegistry.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return router_registry_IORouterRegistry.getHandlers(e,"save")}static getLoadHandlers(e,t){return router_registry_IORouterRegistry.getHandlers(e,"load",t)}static getHandlers(e,t,r){let i=[],n="load"===t?router_registry_IORouterRegistry.getInstance().loadRouters:router_registry_IORouterRegistry.getInstance().saveRouters;return n.forEach(t=>{let n=t(e,r);null!==n&&i.push(n)}),i}};/**
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
 */let rj="tensorflowjs",rH="models_store",rz="model_info_store";function getIndexedDBFactory(){if(!D.getBool("IS_BROWSER"))throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw Error("The current browser does not appear to support IndexedDB.");return t}function setUpDatabase(e){let t=e.result;t.createObjectStore(rH,{keyPath:"modelPath"}),t.createObjectStore(rz,{keyPath:"modelPath"})}let BrowserIndexedDB=class BrowserIndexedDB{constructor(e){if(this.indexedDB=getIndexedDBFactory(),null==e||!e)throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,r)=>{let i=this.indexedDB.open(rj,1);i.onupgradeneeded=()=>setUpDatabase(i),i.onsuccess=()=>{let n=i.result;if(null==t){let t=n.transaction(rH,"readonly"),i=t.objectStore(rH),o=i.get(this.modelPath);o.onsuccess=()=>{if(null==o.result)return n.close(),r(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(o.result.modelArtifacts)},o.onerror=e=>(n.close(),r(o.error)),t.oncomplete=()=>n.close()}else{let i,o;t.weightData=composite_array_buffer_CompositeArrayBuffer.join(t.weightData);let a=getModelArtifactsInfoForJSON(t),s=n.transaction(rz,"readwrite"),l=s.objectStore(rz);try{i=l.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(e){return r(e)}i.onsuccess=()=>{let i;o=n.transaction(rH,"readwrite");let u=o.objectStore(rH);try{i=u.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:a})}catch(e){return r(e)}i.onsuccess=()=>e({modelArtifactsInfo:a}),i.onerror=e=>{l=s.objectStore(rz);let t=l.delete(this.modelPath);t.onsuccess=()=>(n.close(),r(i.error)),t.onerror=e=>(n.close(),r(i.error))}},i.onerror=e=>(n.close(),r(i.error)),s.oncomplete=()=>{null==o?n.close():o.oncomplete=()=>n.close()}}},i.onerror=e=>r(i.error)})}};BrowserIndexedDB.URL_SCHEME="indexeddb://";let indexedDBRouter=e=>{var t;return D.getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(BrowserIndexedDB.URL_SCHEME)?(t=e.slice(BrowserIndexedDB.URL_SCHEME.length),new BrowserIndexedDB(t)):null};router_registry_IORouterRegistry.registerSaveRouter(indexedDBRouter),router_registry_IORouterRegistry.registerLoadRouter(indexedDBRouter);let rU="tensorflowjs_models",rG="info";function getModelKeys(e){return{info:[rU,e,rG].join("/"),topology:[rU,e,"model_topology"].join("/"),weightSpecs:[rU,e,"weight_specs"].join("/"),weightData:[rU,e,"weight_data"].join("/"),modelMetadata:[rU,e,"model_metadata"].join("/")}}function removeItems(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}let BrowserLocalStorage=class BrowserLocalStorage{constructor(e){if(!D.getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=getModelKeys(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),i=getModelArtifactsInfoForJSON(e),n=composite_array_buffer_CompositeArrayBuffer.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(i)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(e){if(rV)return rF.from(e).toString("base64");let t=new Uint8Array(e),r="";for(let e=0,i=t.length;e<i;e++)r+=String.fromCharCode(t[e]);return btoa(r)}(n));let o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,initializerSignature:null!=e.initializerSignature?e.initializerSignature:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:i}}catch(e){throw removeItems(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${i.modelTopologyBytes}, weightSpecsBytes=${i.weightSpecsBytes}, weightDataBytes=${i.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let t={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(null==r)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=r;let i=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==i)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=i;let n=this.LS.getItem(this.keys.modelMetadata);if(null!=n){let e=JSON.parse(n);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(t.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}let o=this.LS.getItem(this.keys.weightData);if(null==o)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(e){if(rV){let t=rF.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;++e)r.set([t.charCodeAt(e)],e);return r.buffer}(o),t}};BrowserLocalStorage.URL_SCHEME="localstorage://";let localStorageRouter=e=>{var t;return D.getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(BrowserLocalStorage.URL_SCHEME)?(t=e.slice(BrowserLocalStorage.URL_SCHEME.length),new BrowserLocalStorage(t)):null};router_registry_IORouterRegistry.registerSaveRouter(localStorageRouter),router_registry_IORouterRegistry.registerLoadRouter(localStorageRouter);let ModelStoreManagerRegistry=class ModelStoreManagerRegistry{constructor(){this.managers={}}static getInstance(){return null==ModelStoreManagerRegistry.instance&&(ModelStoreManagerRegistry.instance=new ModelStoreManagerRegistry),ModelStoreManagerRegistry.instance}static registerManager(e,t){util_base_assert(null!=e,()=>"scheme must not be undefined or null."),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),util_base_assert(e.length>0,()=>"scheme must not be an empty string.");let r=ModelStoreManagerRegistry.getInstance();util_base_assert(null==r.managers[e],()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=t}static getManager(e){let t=ModelStoreManagerRegistry.getInstance().managers[e];if(null==t)throw Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(ModelStoreManagerRegistry.getInstance().managers)}};if(D.get("IS_BROWSER")){D.setPlatform("browser",new /**
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
 */class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if("undefined"==typeof window||!D.getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return isTypedArrayBrowser(e)}});try{ModelStoreManagerRegistry.registerManager(BrowserLocalStorage.URL_SCHEME,new class{constructor(){util_base_assert(D.getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),util_base_assert("undefined"==typeof window||void 0!==window.localStorage,()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let e={},t=rU+"/",r="/"+rG;for(let i=0;i<this.LS.length;++i){let n=this.LS.key(i);if(n.startsWith(t)&&n.endsWith(r)){let t=function(e){let t=e.split("/");if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join("/")}(n);e[t]=JSON.parse(this.LS.getItem(n))}}return e}async removeModel(e){var t;e=(t=e).startsWith(BrowserLocalStorage.URL_SCHEME)?t.slice(BrowserLocalStorage.URL_SCHEME.length):t;let r=getModelKeys(e);if(null==this.LS.getItem(r.info))throw Error(`Cannot find model at path '${e}'`);let i=JSON.parse(this.LS.getItem(r.info));return removeItems(r),i}})}catch(e){}try{ModelStoreManagerRegistry.registerManager(BrowserIndexedDB.URL_SCHEME,new class{constructor(){this.indexedDB=getIndexedDBFactory()}async listModels(){return new Promise((e,t)=>{let r=this.indexedDB.open(rj,1);r.onupgradeneeded=()=>setUpDatabase(r),r.onsuccess=()=>{let i=r.result,n=i.transaction(rz,"readonly"),o=n.objectStore(rz),a=o.getAll();a.onsuccess=()=>{let t={};for(let e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(i.close(),t(a.error)),n.oncomplete=()=>i.close()},r.onerror=e=>t(r.error)})}async removeModel(e){var t;return e=(t=e).startsWith(BrowserIndexedDB.URL_SCHEME)?t.slice(BrowserIndexedDB.URL_SCHEME.length):t,new Promise((t,r)=>{let i=this.indexedDB.open(rj,1);i.onupgradeneeded=()=>setUpDatabase(i),i.onsuccess=()=>{let n;let o=i.result,a=o.transaction(rz,"readwrite"),s=a.objectStore(rz),l=s.get(e);l.onsuccess=()=>{if(null==l.result)return o.close(),r(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let i=s.delete(e),deleteModelData=()=>{n=o.transaction(rH,"readwrite");let i=n.objectStore(rH),a=i.delete(e);a.onsuccess=()=>t(l.result.modelArtifactsInfo),a.onerror=e=>r(l.error)};i.onsuccess=deleteModelData,i.onerror=e=>(deleteModelData(),o.close(),r(l.error))}},l.onerror=e=>(o.close(),r(l.error)),a.oncomplete=()=>{null==n?o.close():n.oncomplete=()=>o.close()}},i.onerror=e=>r(i.error)})}})}catch(e){}}var rW=r(28070);/**
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
 */let rX={importFetch:()=>r(66909)};/**
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
 */function buffer(e,t="float32",r){return t=t||"float32",assertNonNegativeIntegerDimensions(e),new TensorBuffer(e,t,r)}/**
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
 */function inferShape(e,t){let r=e;if(isTypedArray(e))return"string"===t?[]:[e.length];if(isWebGLData(e)){let t=e.channels||"RGBA";return[e.height,e.width*t.length]}if(isWebGPUData(e))return[e.buffer.size/(null==t?4:bytesPerElement(t))];if(!Array.isArray(e))return[];let i=[];for(;Array.isArray(r)||isTypedArray(r)&&"string"!==t;)i.push(r.length),r=r[0];return Array.isArray(e)&&D.getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function deepAssertShapeConsistency(e,t,r){if(r=r||[],!Array.isArray(e)&&!isTypedArray(e)){util_base_assert(0===t.length,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}util_base_assert(t.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),util_base_assert(e.length===t[0],()=>`Element arr[${r.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);let i=t.slice(1);for(let t=0;t<e.length;++t)deepAssertShapeConsistency(e[t],i,r.concat(t))}(e,i,[]),i}function assertDtype(e,t,r,i){if("string_or_numeric"!==e){if(null==e)throw Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw Error(`Argument '${r}' passed to '${i}' must be ${e} tensor, but got ${t} tensor`)}}function tensor_util_env_convertToTensor(e,t,r,i="numeric"){if(e instanceof getGlobalTensorClass())return assertDtype(i,e.dtype,t,r),e;let n=inferDtype(e);if("string"!==n&&["bool","int32","float32"].indexOf(i)>=0&&(n=i),assertDtype(i,n,t,r),null==e||!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){let i=null==e?"null":e.constructor.name;throw Error(`Argument '${t}' passed to '${r}' must be a Tensor or TensorLike, but got '${i}'`)}let o=inferShape(e,n);isTypedArray(e)||Array.isArray(e)||(e=[e]);let a="string"!==n?toTypedArray(e,n):flatten(e,[],!0);return rL.makeTensor(a,o,n)}function op(e){let t=Object.keys(e);if(1!==t.length)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let r=t[0],i=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1)),r+="__op";let f2=(...e)=>{rL.startScope(r);try{let t=i(...e);return isPromise(t)&&console.error("Cannot return a Promise inside of tidy."),rL.endScope(t),t}catch(e){throw rL.endScope(null),e}};return Object.defineProperty(f2,"name",{value:r,configurable:!0}),f2}D.get("IS_NODE")&&!D.get("IS_BROWSER")&&D.setPlatform("node",new class{constructor(){this.util=r(31235),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=D.global.fetch?D.global.fetch(e,t):(null==o&&(o=rX.importFetch()),o(e,t))}now(){let e=rW.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}});let rY=op({cast_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"x","cast");if(!isValidDtype(t))throw Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==r.dtype||"string"!==t&&"string"===r.dtype)throw Error("Only strings can be casted to strings");return rL.runKernel(et,{x:r},{dtype:t})}}),r$=op({clone_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","clone","string_or_numeric");return rL.runKernel(eY,{x:t})}});function engine(){return rL}function tidy(e,t){return rL.tidy(e,t)}function dispose(e){let t=getTensorsInContainer(e);t.forEach(e=>e.dispose())}function setBackend(e){return rL.setBackend(e)}function registerBackend(e,t,r=1){return rL.registerBackend(e,t,r)}/**
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
 */getOrMakeEngine(),rM={buffer:buffer,cast:rY,clone:r$,print:/**
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
 */function(e,t=!1){console.log(e.toString(t))}};let rK=op({add_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"a","add"),i=tensor_util_env_convertToTensor(t,"b","add");[r,i]=makeTypesMatch(r,i);let n={a:r,b:i};return rL.runKernel(L,n)}}),rq=op({floorDiv_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"a","floorDiv"),i=tensor_util_env_convertToTensor(t,"b","floorDiv");[r,i]=makeTypesMatch(r,i);let n={a:r,b:i};return rL.runKernel(eH,n)}}),rZ=op({div_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"a","div"),i=tensor_util_env_convertToTensor(t,"b","div");if([r,i]=makeTypesMatch(r,i),"int32"===r.dtype&&"int32"===i.dtype)return rq(r,i);let n={a:r,b:i};return rL.runKernel(eR,n,{})}}),rJ=op({mul_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"a","mul"),i=tensor_util_env_convertToTensor(t,"b","mul");[r,i]=makeTypesMatch(r,i);let n={a:r,b:i};return rL.runKernel(tf,n)}}),rQ=op({sqrt_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","sqrt","float32");return rL.runKernel(t0,{x:t})}}),r0=op({square_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","square");return rL.runKernel("Square",{x:t},{})}}),r1=op({zerosLike_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","zerosLike");return rL.runKernel(rm,{x:t})}});/**
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
 */function makeTensor(e,t,r,i){if(null==i)i=inferDtype(e);else if("complex64"===i)throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(isWebGPUData(e)||isWebGLData(e)){if("float32"!==i&&"int32"!==i)throw Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${i}.`);return rL.backend.createTensorFromGPUData(e,t||r,i)}if(!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){assertNonNegativeIntegerDimensions(t);let e=util_base_sizeFromShape(t),i=util_base_sizeFromShape(r);util_base_assert(e===i,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${i}`);for(let e=0;e<r.length;++e){let i=r[e],n=e!==r.length-1||i!==util_base_sizeFromShape(t.slice(e));util_base_assert(r[e]===t[e]||!n,()=>`Error creating a new Tensor. Inferred shape (${r}) does not match the provided shape (${t}). `)}}return isTypedArray(e)||Array.isArray(e)||(e=[e]),t=t||r,e="string"!==i?toTypedArray(e,i):flatten(e,[],!0),rL.makeTensor(e,t,i)}/**
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
 */function scalar(e,t){if((isTypedArray(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&isTypedArray(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return makeTensor(e,[],[],t)}/**
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
 */let r2=new Map,r3=new Map;let Serializable=class Serializable{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}};let SerializationMap=class SerializationMap{constructor(){this.classNameMap={}}static getMap(){return null==SerializationMap.instance&&(SerializationMap.instance=new SerializationMap),SerializationMap.instance}static register(e){SerializationMap.getMap().classNameMap[e.className]=[e,e.fromConfig]}};/**
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
 */let Optimizer=class Optimizer extends Serializable{minimize(e,t=!1,r){let{value:i,grads:n}=this.computeGradients(e,r);if(null!=r){let e=r.map(e=>({name:e.name,tensor:n[e.name]}));this.applyGradients(e)}else this.applyGradients(n);return(dispose(n),t)?i:(i.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return function(e,t){util_base_assert(isFunction(e),()=>"The f passed in variableGrads(f) must be a function"),util_base_assert(null==t||Array.isArray(t)&&t.every(e=>e instanceof Variable),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let r=null!=t;if(!r)for(let e in t=[],rL.registeredVariables)t.push(rL.registeredVariables[e]);let i=r?t.filter(e=>!e.trainable):null,n=t.length;util_base_assert((t=t.filter(e=>e.trainable)).length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${n} variables is trainable.`);let{value:o,grads:a}=rL.gradients(e,t,null,!0);util_base_assert(a.some(e=>null!=e),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),util_base_assert(0===o.rank,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);let s={};return t.forEach((e,t)=>{null!=a[t]&&(s[e.name]=a[t])}),null!=i&&i.forEach(e=>s[e.name]=null),{value:o,grads:s}}(e,t)}dispose(){null!=this.iterations_&&dispose(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:scalar(this.iterations_,"int32")}}async getWeights(){throw Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}};/**
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
 */function fill(e,t,r){assertNonNegativeIntegerDimensions(e),r=r||inferDtype(t);let i={shape:e,value:t,dtype:r};return rL.runKernel(eF,{},i)}Object.defineProperty(Optimizer,Symbol.hasInstance,{value:e=>null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients});let r5=op({pow_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"base","pow"),i=tensor_util_env_convertToTensor(t,"exp","pow");[r,i]=makeTypesMatch(r,i);let n={a:r,b:i};return rL.runKernel(tA,n)}}),r4=op({sub_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"a","sub"),i=tensor_util_env_convertToTensor(t,"b","sub");[r,i]=makeTypesMatch(r,i);let n={a:r,b:i};return rL.runKernel(rs,n)}}),r6=op({abs_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","abs");return"complex64"===t.dtype?rL.runKernel(eo,{x:t}):rL.runKernel(I,{x:t})}});/**
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
 */function getBroadcastDims(e,t){let r=e.length,i=[];for(let n=0;n<r;n++){let o=r-1-n,a=e[o]||1,s=t[t.length-1-n]||1;s>1&&1===a&&i.unshift(o)}return i}function getReductionAxes(e,t){let r=[];for(let i=0;i<t.length;i++){let n=e[e.length-i-1],o=t.length-i-1,a=t[o];(null==n||1===n&&a>1)&&r.unshift(o)}return r}function assertAndGetBroadcastShape(e,t){let r=Math.max(e.length,t.length),i=Array(r);for(let n=0;n<r;n++){let o=e[e.length-n-1];null==o&&(o=1);let a=t[t.length-n-1];if(null==a&&(a=1),1===o)i[r-n-1]=a;else if(1===a)i[r-n-1]=o;else if(o!==a){let r=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(r)}else i[r-n-1]=o}return i}let r8=op({maximum_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"a","maximum"),i=tensor_util_env_convertToTensor(t,"b","maximum");[r,i]=makeTypesMatch(r,i),"bool"===r.dtype&&(r=rY(r,"int32"),i=rY(i,"int32")),assertAndGetBroadcastShape(r.shape,i.shape);let n={a:r,b:i};return rL.runKernel(tr,n)}});/**
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
 */let SGDOptimizer=class SGDOptimizer extends Optimizer{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);t.forEach((t,r)=>{let i=Array.isArray(e)?e[r].tensor:e[t];if(null==i)return;let n=rL.registeredVariables[t];tidy(()=>{let e=rK(rJ(this.c,i),n);n.assign(e)})}),this.incrementIterations()}setLearningRate(e){var t;this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=(t=scalar(-e),rL.keep(t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(0!==(e=await this.extractIterations(e)).length)throw Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}};/**
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
 */let r9=[/**
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
 */class extends Optimizer{static get className(){return"Adadelta"}constructor(e,t,r=null){super(),this.learningRate=e,this.rho=t,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==r&&(this.epsilon=rL.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);t.forEach((t,r)=>{let i=rL.registeredVariables[t];null==this.accumulatedGrads[r]&&(this.accumulatedGrads[r]={originalName:`${t}/accum_grad`,variable:tidy(()=>r1(i).variable(!1))}),null==this.accumulatedUpdates[r]&&(this.accumulatedUpdates[r]={originalName:`${t}/accum_var`,variable:tidy(()=>r1(i).variable(!1))});let n=Array.isArray(e)?e[r].tensor:e[t];if(null==n)return;let o=this.accumulatedGrads[r].variable,a=this.accumulatedUpdates[r].variable;tidy(()=>{let e=rK(rJ(o,this.rho),rJ(r0(n),1-this.rho)),t=rJ(rZ(rQ(rK(a,this.epsilon)),rQ(rK(o,this.epsilon))),n),r=rK(rJ(a,this.rho),rJ(r0(t),1-this.rho));o.assign(e),a.assign(r);let s=rK(rJ(t,-this.learningRate),i);i.assign(s)})}),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&(dispose(this.accumulatedGrads.map(e=>e.variable)),dispose(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=e.length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}},/**
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
 */class extends Optimizer{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);t.forEach((t,r)=>{let i=rL.registeredVariables[t];null==this.accumulatedGrads[r]&&(this.accumulatedGrads[r]={originalName:`${t}/accumulator`,variable:tidy(()=>fill(i.shape,this.initialAccumulatorValue).variable(!1))});let n=Array.isArray(e)?e[r].tensor:e[t];if(null==n)return;let o=this.accumulatedGrads[r].variable;tidy(()=>{let e=rK(o,r0(n));o.assign(e);let t=rK(rJ(rZ(n,rQ(rK(e,rL.backend.epsilon()))),-this.learningRate),i);i.assign(t)})}),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&dispose(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}},/**
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
 */class extends Optimizer{static get className(){return"Adam"}constructor(e,t,r,i=null){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=i,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],tidy(()=>{this.accBeta1=scalar(t).variable(),this.accBeta2=scalar(r).variable()}),null==i&&(this.epsilon=rL.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);tidy(()=>{let r=r4(1,this.accBeta1),i=r4(1,this.accBeta2);t.forEach((t,n)=>{let o=rL.registeredVariables[t];null==this.accumulatedFirstMoment[n]&&(this.accumulatedFirstMoment[n]={originalName:`${t}/m`,variable:tidy(()=>r1(o).variable(!1))}),null==this.accumulatedSecondMoment[n]&&(this.accumulatedSecondMoment[n]={originalName:`${t}/v`,variable:tidy(()=>r1(o).variable(!1))});let a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;let s=this.accumulatedFirstMoment[n].variable,l=this.accumulatedSecondMoment[n].variable,u=rK(rJ(s,this.beta1),rJ(a,1-this.beta1)),c=rK(rJ(l,this.beta2),rJ(r0(a),1-this.beta2)),d=rZ(u,r),p=rZ(c,i);s.assign(u),l.assign(c);let h=rK(rJ(rZ(d,rK(rQ(p),this.epsilon)),-this.learningRate),o);o.assign(h)}),this.accBeta1.assign(rJ(this.accBeta1,this.beta1)),this.accBeta2.assign(rJ(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&dispose(this.accumulatedFirstMoment.map(e=>e.variable)),null!=this.accumulatedSecondMoment&&dispose(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),tidy(()=>{this.accBeta1.assign(r5(this.beta1,this.iterations_+1)),this.accBeta2.assign(r5(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}},/**
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
 */class extends Optimizer{static get className(){return"Adamax"}constructor(e,t,r,i=null,n=0){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=i,this.decay=n,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],tidy(()=>{this.iteration=scalar(0).variable(),this.accBeta1=scalar(t).variable()}),null==i&&(this.epsilon=rL.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);tidy(()=>{let r=r4(1,this.accBeta1),i=rZ(-this.learningRate,rK(rJ(this.iteration,this.decay),1));t.forEach((t,n)=>{let o=rL.registeredVariables[t];null==this.accumulatedFirstMoment[n]&&(this.accumulatedFirstMoment[n]={originalName:`${t}/m`,variable:r1(o).variable(!1)}),null==this.accumulatedWeightedInfNorm[n]&&(this.accumulatedWeightedInfNorm[n]={originalName:`${t}/v`,variable:r1(o).variable(!1)});let a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;let s=this.accumulatedFirstMoment[n].variable,l=this.accumulatedWeightedInfNorm[n].variable,u=rK(rJ(s,this.beta1),rJ(a,1-this.beta1)),c=rJ(l,this.beta2),d=r6(a),p=r8(c,d);s.assign(u),l.assign(p);let h=rK(rJ(rZ(i,r),rZ(u,rK(p,this.epsilon))),o);o.assign(h)}),this.iteration.assign(rK(this.iteration,1)),this.accBeta1.assign(rJ(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&dispose(this.accumulatedFirstMoment.map(e=>e.variable)),null!=this.accumulatedWeightedInfNorm&&dispose(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}},/**
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
 */class extends SGDOptimizer{static get className(){return"Momentum"}constructor(e,t,r=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=r,this.accumulations=[],this.m=scalar(this.momentum)}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);t.forEach((t,r)=>{let i=rL.registeredVariables[t];null==this.accumulations[r]&&(this.accumulations[r]={originalName:`${t}/momentum`,variable:tidy(()=>r1(i).variable(!1))});let n=this.accumulations[r].variable,o=Array.isArray(e)?e[r].tensor:e[t];null!=o&&tidy(()=>{let e;let t=rK(rJ(this.m,n),o);e=this.useNesterov?rK(rJ(this.c,rK(o,rJ(t,this.m))),i):rK(rJ(this.c,t),i),n.assign(t),i.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&dispose(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}},/**
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
 */class extends Optimizer{static get className(){return"RMSProp"}constructor(e,t=.9,r=0,i=null,n=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=r,this.epsilon=i,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=n,null==i&&(this.epsilon=rL.backend.epsilon()),null==e)throw Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);t.forEach((t,r)=>{let i=rL.registeredVariables[t];null==this.accumulatedMeanSquares[r]&&(this.accumulatedMeanSquares[r]={originalName:`${t}/rms`,variable:tidy(()=>r1(i).variable(!1))}),null==this.accumulatedMoments[r]&&(this.accumulatedMoments[r]={originalName:`${t}/momentum`,variable:tidy(()=>r1(i).variable(!1))}),null==this.accumulatedMeanGrads[r]&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${t}/mg`,variable:tidy(()=>r1(i).variable(!1))});let n=Array.isArray(e)?e[r].tensor:e[t];if(null==n)return;let o=this.accumulatedMeanSquares[r].variable,a=this.accumulatedMoments[r].variable;tidy(()=>{let e=rK(rJ(o,this.decay),rJ(r0(n),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[r].variable,s=rK(rJ(t,this.decay),rJ(n,1-this.decay)),l=rZ(rJ(n,this.learningRate),rQ(r4(e,rK(r0(s),this.epsilon)))),u=rK(rJ(a,this.momentum),l);o.assign(e),t.assign(s),a.assign(u);let c=r4(i,u);i.assign(c)}else{let e=rK(rJ(o,this.decay),rJ(r0(n),1-this.decay)),t=rK(rJ(a,this.momentum),rZ(rJ(n,this.learningRate),rQ(rK(e,this.epsilon))));o.assign(e),a.assign(t);let r=r4(i,t);i.assign(r)}})}),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&dispose(this.accumulatedMeanSquares.map(e=>e.variable)),null!=this.accumulatedMeanGrads&&this.centered&&dispose(this.accumulatedMeanGrads.map(e=>e.variable)),null!=this.accumulatedMoments&&dispose(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}},SGDOptimizer];function defer(e){return new Promise(e=>setTimeout(e)).then(e)}let BrowserDownloads=class BrowserDownloads{constructor(e){if(!D.getBool("IS_BROWSER"))throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(BrowserDownloads.URL_SCHEME)&&(e=e.slice(BrowserDownloads.URL_SCHEME.length)),(null==e||0===e.length)&&(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=composite_array_buffer_CompositeArrayBuffer.join(e.weightData),r=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let t=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],i=getModelJSONForModelArtifacts(e,t),n=window.URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),o=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=n,await defer(()=>o.dispatchEvent(new MouseEvent("click"))),null!=e.weightData){let e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=r,await defer(()=>e.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:getModelArtifactsInfoForJSON(e)}}}};/**
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
 */function monitorPromisesProgress(e,t,r,i){var n,o;util_base_assert(null!=e&&Array.isArray(e)&&e.length>0,()=>"promises must be a none empty array"),n=r=null==r?0:r,o=i=null==i?1:i,util_base_assert(n>=0&&n<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${n}`),util_base_assert(o>=0&&o<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${o}`),util_base_assert(o>=n,()=>`startFraction must be no more than endFraction, but got startFraction ${n} and endFraction ${o}`);let a=0;return Promise.all(e.map(n=>(n.then(n=>{let o=r+ ++a/e.length*(i-r);return t(o),n}),n)))}/**
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
 */async function loadWeightsAsArrayBuffer(e,t){null==t&&(t={});let r=null==t.fetchFunc?D.platform.fetch:t.fetchFunc,i=e.map(e=>r(e,t.requestInit,{isBinary:!0})),n=null==t.onProgress?await Promise.all(i):await monitorPromisesProgress(i,t.onProgress,0,.5),o=n.map(e=>e.arrayBuffer()),a=null==t.onProgress?await Promise.all(o):await monitorPromisesProgress(o,t.onProgress,.5,1);return a}BrowserDownloads.URL_SCHEME="downloads://",router_registry_IORouterRegistry.registerSaveRouter(e=>D.getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(BrowserDownloads.URL_SCHEME)?function(e="model"){return new BrowserDownloads(e)}(e.slice(BrowserDownloads.URL_SCHEME.length)):null);let HTTPRequest=class HTTPRequest{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(util_base_assert("function"==typeof t.fetchFunc,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=D.platform.fetch,util_base_assert(null!=e&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&util_base_assert(2===e.length,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],i=getModelJSONForModelArtifacts(e,r);if(t.body.append("model.json",new Blob([JSON.stringify(i)],{type:"application/json"}),"model.json"),null!=e.weightData){let r=composite_array_buffer_CompositeArrayBuffer.join(e.weightData);t.body.append("model.weights.bin",new Blob([r],{type:"application/octet-stream"}),"model.weights.bin")}let n=await this.fetch(this.path,t);if(n.ok)return{modelArtifactsInfo:getModelArtifactsInfoForJSON(e),responses:[n]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${n.status}.`)}async loadModelJSON(){let e;let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);try{e=await t.json()}catch(t){let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",Error(e)}let r=e.modelTopology,i=e.weightsManifest;if(null==r&&null==i)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();let e=await this.loadModelJSON();return io_utils_getModelArtifactsForJSON(e,e=>this.loadWeights(e))}async loadStream(){let e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),r=getWeightSpecs(e.weightsManifest);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:()=>(function(e,t){var r;let i;let n=null==t.fetchFunc?D.platform.fetch:t.fetchFunc,o=0;return null===(r=t.onProgress)||void 0===r||r.call(t,0),new ReadableStream({pull:async r=>{for(var a;o<e.length;){if(!i){let r=(await n(e[o],t.requestInit,{isBinary:!0})).body;i=r.getReader()}let{done:s,value:l}=await i.read();if(s){o++,i=void 0,null===(a=t.onProgress)||void 0===a||a.call(t,o/e.length);continue}r.enqueue(l);return}r.close()}})})(t,this.loadOptions)})}async getWeightUrls(e){let t=Array.isArray(this.path)?this.path[1]:this.path,[r,i]=function(e){let t=e.lastIndexOf("/"),r=e.lastIndexOf("?"),i=e.substring(0,t),n=r>t?e.substring(r):"";return[i+"/",n]}(t),n=this.weightPathPrefix||r,o=[],a=[];for(let t of e)for(let e of t.paths)null!=this.weightUrlConverter?a.push(this.weightUrlConverter(e)):o.push(n+e+i);return this.weightUrlConverter&&o.push(...await Promise.all(a)),o}async loadWeights(e){let t=await this.getWeightUrls(e),r=getWeightSpecs(e),i=await loadWeightsAsArrayBuffer(t,this.loadOptions);return[r,i]}};function isHTTPScheme(e){return null!=e.match(HTTPRequest.URL_SCHEME_REGEX)}HTTPRequest.URL_SCHEME_REGEX=/^https?:\/\//;let httpRouter=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc));else if(Array.isArray(e)?e.every(e=>isHTTPScheme(e)):isHTTPScheme(e))return new HTTPRequest(e,t);return null};function prepareAndValidate(e,t){let r=e.shape.length,i=t.shape.length;if(r<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${r}.`);if(i<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${i}.`);if("int32"!==t.dtype)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[i-1]>r)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[i-1]} vs. ${r}`);if(0===util_base_sizeFromShape(e.shape))throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let n=t.shape,o=n[n.length-1],a=1;for(let e=0;e<n.length-1;++e)a*=n[e];let s=e.shape,l=n.slice();l.pop();let u=1;for(let e=o;e<r;++e)u*=s[e],l.push(s[e]);let c=[...computeStrides(e.shape).map(e=>e/u),1].slice(0,o);return[l,a,u,c]}function validateUpdateShape(e,t,r){let i=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${i}, and batchDim: ${n}.`;if(r.rank<n)throw Error(o+` update.rank < ${n}. `);if(e.length<i+(r.rank-n))throw Error(o+` Output shape length < ${i+(r.rank-n)}`);if(r.rank!==n+e.length-i)throw Error(o+` update.rank != ${n+e.length-i}`);for(let e=0;e<n;++e)if(r.shape[e]!==t.shape[e])throw Error(o+` updates.shape[${e}] (${r.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<r.rank-n;++t)if(r.shape[t+n]!==e[t+i])throw Error(o+` updates.shape[${t+n}] (${r.shape[t+n]}) != shape[${t+n}] (${e[t+n]})`)}function validateInput(e,t,r){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(0===r.length){if(0===t.size)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}validateUpdateShape(r,t,e)}function calculateShapes(e,t,r){let i=t.shape.length,n=i>1?t.shape[i-1]:1,o=r.length,a=1;for(let e=n;e<o;++e)a*=r[e];let s=n<1?1:n,l=util_base_sizeFromShape(t.shape)/s,u=[...computeStrides(r.slice(0,n)),1],c=util_base_sizeFromShape(r);return{sliceRank:n,numUpdates:l,sliceSize:a,strides:u,outputSize:c}}function assertParamsValid(e,t,r){let i=e.shape.length;util_base_assert(i===t.length,()=>`Error in slice${i}D: Length of begin ${t} must match the rank of the array (${i}).`),util_base_assert(i===r.length,()=>`Error in slice${i}D: Length of size ${r} must match the rank of the array (${i}).`);for(let n=0;n<i;++n)util_base_assert(t[n]+r[n]<=e.shape[n],()=>`Error in slice${i}D: begin[${n}] + size[${n}] (${t[n]+r[n]}) would overflow input.shape[${n}] (${e.shape[n]})`)}function maskToAxes(e){let t=[],r=0;for(;e>0;)1&e&&t.push(r),e/=2,r++;return t}function computeOutShape(e,t,r){let i=[];for(let n=0;n<e.length;n++)i[n]=Math.ceil((t[n]-e[n])/r[n]);return i}function stridesWithElidedDims(e,t,r,i){let n=[...e];for(let e=n.length;e<i.length;e++)n.push(1);for(let e=0;e<r;e++)0===e?n[t]=1:(n.splice(t,0,1),n.pop());return n}function getElidedAxes(e,t){let r=[];for(let i=0;i<e;i++)r.push(t+i);return r}function getNormalizedAxes(e,t,r,i,n,o,a,s,l){let u=e.length,c=Array(u),d=Array(u),p=Array(u);if(t.length&&r>0){let l=t[0],u=r+1;c=startIndicesWithElidedDims(a,l,u,i,e),d=stopIndicesWithElidedDims(s,l,u,n,e),p=stridesWithElidedDims(o,l,u,e)}else for(let t=0;t<u;t++)c[t]=startForAxis(a,i,o,e,t,l),d[t]=stopForAxis(s,n,o,e,t,l),p[t]=stridesForAxis(o,t,l);return{begin:c,end:d,strides:p}}function startIndicesWithElidedDims(e,t,r,i,n){let o=[...n],a=getElidedAxes(r,t);for(let n=0;n<o.length;n++)if(a.indexOf(n)>-1)o[n]=0;else{var s;let a=(s=n)<=t?s:s-(r-1),l=i[a];e&1<<a&&(l=0),o[n]=l}return o}function stopIndicesWithElidedDims(e,t,r,i,n){let o=[...n],a=getElidedAxes(r,t);for(let n=0;n<o.length;n++)if(a.indexOf(n)>-1)o[n]=Number.MAX_SAFE_INTEGER;else{var s;let a=(s=n)<=t?s:s-(r-1),l=i[a];e&1<<a&&(l=Number.MAX_SAFE_INTEGER),o[n]=l}for(let e=0;e<o.length;e++){let t=n[e];o[e]<0&&(o[e]+=t),o[e]=clamp(0,o[e],n[e])}return o}function stridesForAxis(e,t,r){let i=e[t];return(r&1<<t||null==i)&&(i=1),i}function startForAxis(e,t,r,i,n,o){let a=t[n],s=r[n]||1;(e&1<<n||o&1<<n||null==a)&&(a=s>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);let l=i[n];return a<0&&(a+=l),a=clamp(0,a,l-1)}function stopForAxis(e,t,r,i,n,o){let a=t[n],s=r[n]||1;(e&1<<n||o&1<<n||null==a)&&(a=s>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);let l=i[n];return a<0&&(a+=l),a=s>0?clamp(0,a,l):clamp(-1,a,l-1)}function isSliceContinous(e,t,r){let i=r.length;for(let e=0;e<r.length;e++)if(r[e]>1){i=e;break}for(let n=i+1;n<r.length;n++)if(t[n]>0||r[n]!==e[n])return!1;return!0}function computeFlatOffset(e,t){let r=e.length>0?e[e.length-1]:1;for(let i=0;i<e.length-1;i++)r+=e[i]*t[i];return r}function parseSliceParams(e,t,r){let i,n;let o=e.shape.length;return(i="number"==typeof t?[t,...Array(o-1).fill(0)]:t.length<o?t.concat(Array(o-t.length).fill(0)):t.slice()).forEach(e=>{util_base_assert(-1!==e,()=>"slice() does not support negative begin indexing.")}),n=(n=null==r?Array(o).fill(-1):"number"==typeof r?[r,...Array(o-1).fill(-1)]:r.length<o?r.concat(Array(o-r.length).fill(-1)):r).map((t,r)=>t>=0?t:(util_base_assert(-1===t,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${r}.`),e.shape[r]-i[r])),[i,n]}function sliceInfo(e,t,r,i,n,o,a,s,l){let u;if(null==i?(u=Array(t.length)).fill(1):u=i,null!=a&&(a&a-1)!=0)throw Error("Multiple ellipses in slice is not allowed.");let c=!1,d={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:r.slice(),strides:u.slice(),beginMask:n,endMask:o,ellipsisMask:a,newAxisMask:s,shrinkAxisMask:l};for(let e=0;e<d.dims;e++)c&&(1<<e&s)!=0&&d.numAddAxisAfterEllipsis++,1<<e&a&&(c=!0);!c&&(d.ellipsisMask|=1<<d.dims,d.dims++);let p={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};!function(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let r=0;t.beginValid=null!=e.begin,t.endValid=null!=e.end,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let i=0;i<e.dims;i++)if(1<<i&e.ellipsisMask){let n=Math.min(t.dims-(e.dims-i)+1+e.numAddAxisAfterEllipsis,t.dims);for(;r<n;r++)t.begin[r]=0,t.end[r]=0,t.strides[r]=1,t.beginMask|=1<<r,t.endMask|=1<<r,t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[r]=i}else if(1<<i&e.newAxisMask)t.finalShapeGatherIndices.push(-2),t.finalShapeGatherIndicesSparse.push(-1);else{if(r===t.begin.length)throw Error(`Index out of range using input dim ${r}; input has only ${t.dims} dims, ${t.begin.length}.`);null!=e.begin&&(t.begin[r]=e.begin[i]),null!=e.end&&(t.end[r]=e.end[i]),t.strides[r]=e.strides[i],e.beginMask&1<<i&&(t.beginMask|=1<<r),e.endMask&1<<i&&(t.endMask|=1<<r),e.shrinkAxisMask&1<<i?(t.finalShapeGatherIndices.push(-1),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<r):(t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(i)),t.inputShapeGatherIndicesSparse[r]=i,r++}}(d,p);let h=!0,f=!0,y=!0,g=[],m=[];for(let t=0;t<e.length;++t){let r;if(0===p.strides[t])throw Error(`strides[${t}] must be non-zero`);let i=!!(p.shrinkAxisMask&1<<t),n=e[t];if(-1===n){g.push(i?1:-1);continue}let o=[p.beginMask&1<<t,p.endMask&1<<t],a=[p.strides[t]>0?0:-1,p.strides[t]>0?n:n-1];if(i&&p.strides[t]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&1===p.strides[t];let s=!!(p.beginMask&1<<t&&p.endMask&1<<t);if(p.beginValid&&p.endValid){if(i){let e=p.begin[t]<0?n+p.begin[t]:p.begin[t];if(p.begin[t]=e,p.end[t]=p.begin[t]+1,e<0||e>=n)throw Error(`slice index ${p.begin[t]} of dimension ${t} out of bounds.`)}else p.begin[t]=canonical(p.begin[t],0,p.strides[t],n,o,a),p.end[t]=canonical(p.end[t],1,p.strides[t],n,o,a);let e=1===p.strides[t]&&0===p.begin[t]&&p.end[t]===n;h=h&&e,f=f&&(0===t&&1===p.strides[t]||e)}else h=h&&1===p.strides[t]&&s,f=f&&(0===t&&1===p.strides[t]||s);let l=!1;if(p.beginValid&&p.endValid?(r=p.end[t]-p.begin[t],l=!0):i?(r=1,l=!0):s&&n>=0&&(r=p.strides[t]<0?-n:n,l=!0),l){let e;e=0===r||r<0!=p.strides[t]<0?0:Math.trunc(r/p.strides[t])+(r%p.strides[t]!=0?1:0),g.push(e)}else g.push(-1)}for(let e=0;e<p.finalShapeGatherIndices.length;++e){let t=p.finalShapeGatherIndices[e];t>=0?m.push(g[t]):-2===t&&m.push(1)}let v=m.filter((e,t)=>-2!==p.finalShapeGatherIndices[t]);return{finalShapeSparse:v,finalShape:m,isIdentity:h,sliceDim0:f,isSimpleSlice:y,begin:p.begin,end:p.end,strides:p.strides}}function canonical(e,t,r,i,n,o){if(n[t])return r>0?o[t]:o[t+1&1];{let t=e<0?i+e:e;return t<o[0]?o[0]:t>o[1]?o[1]:t}}router_registry_IORouterRegistry.registerSaveRouter(httpRouter),router_registry_IORouterRegistry.registerLoadRouter(httpRouter);let r7=op({addN_:/**
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
 */function(e){util_base_assert(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),util_base_assert(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((e,t)=>tensor_util_env_convertToTensor(e,`tensors${t}`,"addN")),r=t[0];return t.forEach(e=>{if(e.dtype!==r.dtype)throw Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(e=>{if(!arraysEqual(e.shape,r.shape))throw Error("All tensors passed to tf.addN() must have the same shape")}),rL.runKernel(N,t)}}),ie=op({reshape_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"x","reshape","string_or_numeric");return rL.runKernel(tk,{x:r},{shape:t})}}),it=op({broadcastTo_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"broadcastTo","x"),i=r.shape;if(assertNonNegativeIntegerDimensions(t),t.length<r.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${r.rank}.`);if(t.length>r.rank){let e=r.shape.slice();for(;e.length<t.length;)e.unshift(1);r=ie(r,e)}let n=r.shape,o=Array.from(t);for(let e=t.length-1;e>=0;e--)if(n[e]===t[e])o[e]=1;else if(1!==r.shape[e])throw Error(`broadcastTo(): [${i}] cannot be broadcast to [${t}].`);let a=o.map((e,t)=>e>1?t:-1).filter(e=>e>=0);if(0===a.length)return r$(r);let s={x:r};return rL.runKernel(rc,s,{reps:o})}}),ir=op({concat_:/**
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
 */function(e,t=0){util_base_assert(e.length>=1,()=>"Pass at least one tensor to concat");let r=function(e,t,r,i="numeric"){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${r} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,n)=>tensor_util_env_convertToTensor(e,`${t}[${n}]`,r,i))}(e,"tensors","concat","string_or_numeric");return("complex64"===r[0].dtype&&r.forEach(e=>{if("complex64"!==e.dtype)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),1===r.length)?r$(r[0]):rL.runKernel(ea,r,{axis:t})}}),ii=op({concat2d_:function(e,t){return ir(e,t)}}),io=op({gather_:/**
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
 */function(e,t,r=0,i=0){let n=tensor_util_env_convertToTensor(e,"x","gather"),o=tensor_util_env_convertToTensor(t,"indices","gather","int32");return rL.runKernel(eU,{x:n,indices:o},{axis:r,batchDims:i})}}),ia=op({mean_:/**
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
 */function(e,t=null,r=!1){let i=tensor_util_env_convertToTensor(e,"x","mean");return rL.runKernel(tl,{x:i},{axis:t,keepDims:r})}}),is=op({split_:/**
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
 */function(e,t,r=0){let i=tensor_util_env_convertToTensor(e,"x","split");return rL.runKernel(t3,{x:i},{numOrSizeSplits:t,axis:r})}}),il=op({sum_:/**
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
 */function(e,t=null,r=!1){let i=tensor_util_env_convertToTensor(e,"x","sum");"bool"===i.dtype&&(i=rY(i,"int32"));let n={x:i};return rL.runKernel(t1,n,{axis:t,keepDims:r})}});/**
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
 */function tensor_tensor(e,t,r){let i=inferShape(e,r);return makeTensor(e,t,i,r)}/**
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
 */function tensor1d(e,t){assertNonNull(e);let r=inferShape(e,t);if(1!==r.length)throw Error("tensor1d() requires values to be a flat/TypedArray");return makeTensor(e,null,r,t)}let iu=op({complex_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"real","complex"),i=tensor_util_env_convertToTensor(t,"imag","complex");return assertShapesMatch(r.shape,i.shape,`real and imag shapes, ${r.shape} and ${i.shape}, must match in call to tf.complex().`),rL.runKernel(en,{real:r,imag:i})}});/**
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
 */function zeros(e,t="float32"){if(assertNonNegativeIntegerDimensions(e),"complex64"===t){let t=zeros(e,"float32"),r=zeros(e,"float32");return iu(t,r)}let r=makeZerosTypedArray(util_base_sizeFromShape(e),t);return rL.makeTensor(r,e,t)}let ic=op({imag_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"input","imag");return rL.runKernel(eK,{input:t})}}),id=op({real_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"input","real");return rL.runKernel(tO,{input:t})}}),ip=op({slice_:/**
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
 */function(e,t,r){let i=tensor_util_env_convertToTensor(e,"x","slice","string_or_numeric");if(0===i.rank)throw Error("Slicing scalar is not possible");return rL.runKernel(t$,{x:i},{begin:t,size:r})}}),ih=op({fft_:/**
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
 */function(e){return util_base_assert("complex64"===e.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`),rL.runKernel(eB,{input:e})}}),iy=op({rfft_:/**
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
 */function(e,t){let r;util_base_assert("float32"===e.dtype,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let i=e.shape[e.shape.length-1],n=e.size/i;if(null!=t&&t<i){let n=e.shape.map(e=>0),o=e.shape.map(e=>e);o[e.shape.length-1]=t,r=ip(e,n,o),i=t}else if(null!=t&&t>i){let n=e.shape.map(e=>e);n[e.shape.length-1]=t-i,r=ir([e,zeros(n)],e.shape.length-1),i=t}else r=e;let o=r1(r),a=ie(iu(r,o),[n,i]),s=ih(a),l=Math.floor(i/2)+1,u=id(s),c=ic(s),d=is(u,[l,i-l],u.shape.length-1),p=is(c,[l,i-l],c.shape.length-1),h=r.shape.slice();return h[r.shape.length-1]=l,ie(iu(d[0],p[0]),h)}});function cosineWindow(e,t,r){let i=1-e%2,n=new Float32Array(e);for(let o=0;o<e;++o){let a=2*Math.PI*o/(e+i-1);n[o]=t-r*Math.cos(a)}return tensor1d(n,"float32")}let ig=op({hammingWindow_:/**
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
 */function(e){return cosineWindow(e,.54,.46)}}),im=op({hannWindow_:/**
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
 */function(e){return cosineWindow(e,.5,.5)}}),iv=op({frame_:/**
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
 */function(e,t,r,i=!1,n=0){let o=0,a=[];for(;o+t<=e.size;)a.push(ip(e,o,t)),o+=r;if(i)for(;o<e.size;){let i=o+t-e.size,s=ir([ip(e,o,t-i),fill([i],n)]);a.push(s),o+=r}return 0===a.length?/**
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
 */function(e,t,r){if(assertNonNull(e),null!=t&&2!==t.length)throw Error("tensor2d() requires shape to have two numbers");let i=inferShape(e,r);if(2!==i.length&&1!==i.length)throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===i.length&&null==t)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return makeTensor(e,t,i,r)}([],[0,t]):ie(ir(a),[a.length,t])}}),ib=op({stft_:/**
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
 */function(e,t,r,i,n=im){null==i&&(i=Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2)))));let o=iv(e,t,r),a=rJ(o,n(t));return iy(a,i)}}),iS=op({tile_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"x","tile","string_or_numeric");return util_base_assert(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of reps ${t}.`),rL.runKernel(rc,{x:r},{reps:t})}}),iP=op({expandDims_:/**
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
 */function(e,t=0){let r=tensor_util_env_convertToTensor(e,"x","expandDims","string_or_numeric");return util_base_assert(t<=r.rank,()=>"Axis must be <= rank of the tensor"),rL.runKernel(eL,{input:r},{dim:t})}});function defaultComparator(e,t){return e>t?1:e<t?-1:0}/**
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
 */function nonMaxSuppressionV3Impl(e,t,r,i,n){return nonMaxSuppressionImpl_(e,t,r,i,n,0)}function nonMaxSuppressionV4Impl(e,t,r,i,n,o){return nonMaxSuppressionImpl_(e,t,r,i,n,0,!1,o,!0)}function nonMaxSuppressionV5Impl(e,t,r,i,n,o){return nonMaxSuppressionImpl_(e,t,r,i,n,o,!0)}function nonMaxSuppressionImpl_(e,t,r,i,n,o,a=!1,s=!1,l=!1){let u=[];for(let e=0;e<t.length;e++)t[e]>n&&u.push({score:t[e],boxIndex:e,suppressBeginIndex:0});u.sort(ascendingComparator);let c=o>0?-.5/o:0,d=[],p=[];for(;d.length<r&&u.length>0;){let t=u.pop(),{score:r,boxIndex:o,suppressBeginIndex:a}=t;if(r<n)break;let s=!1;for(let r=d.length-1;r>=a;--r){let a=function(e,t,r){let i=e.subarray(4*t,4*t+4),n=e.subarray(4*r,4*r+4),o=Math.min(i[0],i[2]),a=Math.min(i[1],i[3]),s=Math.max(i[0],i[2]),l=Math.max(i[1],i[3]),u=Math.min(n[0],n[2]),c=Math.min(n[1],n[3]),d=Math.max(n[0],n[2]),p=Math.max(n[1],n[3]),h=(s-o)*(l-a),f=(d-u)*(p-c);if(h<=0||f<=0)return 0;let y=Math.max(o,u),g=Math.max(a,c),m=Math.min(s,d),v=Math.min(l,p),b=Math.max(m-y,0)*Math.max(v-g,0);return b/(h+f-b)}(e,o,d[r]);if(a>=i){s=!0;break}if(t.score=t.score*function(e,t,r){let i=Math.exp(t*r*r);return r<=e?i:0}(i,c,a),t.score<=n)break}t.suppressBeginIndex=d.length,!s&&(t.score===r?(d.push(o),p.push(t.score)):t.score>n&&/**
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
 */function(e,t,r){let i=function(e,t,r){let i=0,n=e.length,o=0,a=!1;for(;i<n;){o=i+(n-i>>>1);let s=r(t,e[o]);s>0?i=o+1:(n=o,a=!s)}return a?i:-i-1}(e,t,r||defaultComparator),n=i<0?-(i+1):i;e.splice(n,0,t)}(u,t,ascendingComparator))}let h=d.length,f=r-h;s&&f>0&&(d.push(...Array(f).fill(0)),p.push(...Array(f).fill(0)));let y={selectedIndices:d};return a&&(y.selectedScores=p),l&&(y.validOutputs=h),y}function ascendingComparator(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}let iC=op({neg_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","neg");return rL.runKernel(ty,{x:t})}});/**
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
 */function axesAreInnerMostDims(e,t){for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0}function combineLocations(e,t,r){let i=e.length+t.length,n=[],o=0,a=0;for(let s=0;s<i;s++)-1===r.indexOf(s)?n.push(e[o++]):n.push(t[a++]);return n}function computeOutAndReduceShapes(e,t){let r=[],i=e.length;for(let n=0;n<i;n++)-1===t.indexOf(n)&&r.push(e[n]);let n=t.map(t=>e[t]);return[r,n]}function expandShapeToKeepDim(e,t){let r=t.map(e=>1);return combineLocations(e,r,t)}function assertAxesAreInnerMostDims(e,t,r){util_base_assert(axesAreInnerMostDims(t,r),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${r} input.`)}function getAxesPermutation(e,t){if(axesAreInnerMostDims(e,t))return null;let r=[];for(let i=0;i<t;++i)-1===e.indexOf(i)&&r.push(i);return e.forEach(e=>r.push(e)),r}function getUndoAxesPermutation(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function getInnerMostAxes(e,t){let r=[];for(let i=t-e;i<t;++i)r.push(i);return r}let ix=op({max_:/**
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
 */function(e,t=null,r=!1){let i=tensor_util_env_convertToTensor(e,"x","max");return rL.runKernel(tt,{x:i},{reductionIndices:t,keepDims:r})}}),iA=op({min_:/**
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
 */function(e,t=null,r=!1){let i=tensor_util_env_convertToTensor(e,"x","min");return rL.runKernel(tu,{x:i},{axis:t,keepDims:r})}});(d=v||(v={}))[d.NONE=0]="NONE",d[d.MEAN=1]="MEAN",d[d.SUM=2]="SUM",d[d.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";let i_=op({relu_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","relu");return rL.runKernel(tM,{x:t})}}),iT={hammingWindow:ig,hannWindow:im,frame:iv,stft:ib},iw="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:e=>e();function nextFrame(){return new Promise(e=>iw(()=>e()))}/**
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
 */function assertParamsConsistent(e,t){let r=e[0].length;e.forEach((e,t)=>{util_base_assert(e.length===r,()=>`Error in concat${r}D: rank of tensors[${t}] must be the same as the rank of the rest (${r})`)}),util_base_assert(t>=0&&t<r,()=>`Error in concat${r}D: axis must be between 0 and ${r-1}.`);let i=e[0];e.forEach((e,n)=>{for(let o=0;o<r;o++)util_base_assert(o===t||e[o]===i[o],()=>`Error in concat${r}D: Shape of tensors[${n}] (${e}) does not match the shape of the rest (${i}) along the non-concatenated axis ${n}.`)})}function concat_util_computeOutShape(e,t){let r=e[0].slice();for(let i=1;i<e.length;i++)r[t]+=e[i][t];return r}/**
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
 */function computeDilation2DInfo(e,t,r,i,n="NHWC",o){let a=e[3],s=[...t,a],l=convertConv2DDataFormat(n);return computeConv2DInfo(e,s,r,o,i,null,null,l)}function computePool2DInfo(e,t,r,i,n,o,a="channelsLast"){let s;let[l,u]=parseTupleParam(t);if("channelsLast"===a)s=[l,u,e[3],e[3]];else if("channelsFirst"===a)s=[l,u,e[1],e[1]];else throw Error(`Unknown dataFormat ${a}`);return computeConv2DInfo(e,s,r,i,n,o,!1,a)}function computePool3DInfo(e,t,r,i,n,o,a="NDHWC"){let s,l;let[u,c,d]=parse3TupleParam(t);if("NDHWC"===a)l="channelsLast",s=[u,c,d,e[4],e[4]];else if("NCDHW"===a)l="channelsFirst",s=[u,c,d,e[1],e[1]];else throw Error(`Unknown dataFormat ${a}`);return computeConv3DInfo(e,s,r,i,n,!1,l,o)}function computeConv2DInfo(e,t,r,i,n,o,a=!1,s="channelsLast"){let l,[u,c,d,p]=[-1,-1,-1,-1];if("channelsLast"===s)[u,c,d,p]=e;else if("channelsFirst"===s)[u,p,c,d]=e;else throw Error(`Unknown dataFormat ${s}`);let[h,f,,y]=t,[g,m]=parseTupleParam(r),[v,b]=parseTupleParam(i),S=getEffectiveFilterSize(h,v),P=getEffectiveFilterSize(f,b),{padInfo:C,outHeight:x,outWidth:A}=function(e,t,r,i,n,o,a,s,l){let u,c,d;if("number"==typeof e){let n=0===e?"VALID":"NUMBER";u={top:e,bottom:e,left:e,right:e,type:n};let a=function(e,t,r,i,n){null==i&&(i=computeDefaultPad(e,t,r));let o=e[0],a=e[1],s=conv_util_round((o-t+2*i)/r+1,n),l=conv_util_round((a-t+2*i)/r+1,n);return[s,l]}([t,r],o,i,e,s);c=a[0],d=a[1]}else if("same"===e){c=Math.ceil(t/i),d=Math.ceil(r/n);let e=Math.max(0,(c-1)*i+o-t),s=Math.max(0,(d-1)*n+a-r),l=Math.floor(e/2),p=Math.floor(s/2);u={top:l,bottom:e-l,left:p,right:s-p,type:"SAME"}}else if("valid"===e)u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-o+1)/i),d=Math.ceil((r-a+1)/n);else if("object"==typeof e){let p="channelsLast"===l?e[1][0]:e[2][0],h="channelsLast"===l?e[1][1]:e[2][1],f="channelsLast"===l?e[2][0]:e[3][0],y="channelsLast"===l?e[2][1]:e[3][1],g=0===p&&0===h&&0===f&&0===y?"VALID":"EXPLICIT";u={top:p,bottom:h,left:f,right:y,type:g},c=conv_util_round((t-o+p+h)/i+1,s),d=conv_util_round((r-a+f+y)/n+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:c,outWidth:d}}(n,c,d,g,m,S,P,o,s),_=a?y*p:y;return"channelsFirst"===s?l=[u,_,x,A]:"channelsLast"===s&&(l=[u,x,A,_]),{batchSize:u,dataFormat:s,inHeight:c,inWidth:d,inChannels:p,outHeight:x,outWidth:A,outChannels:_,padInfo:C,strideHeight:g,strideWidth:m,filterHeight:h,filterWidth:f,effectiveFilterHeight:S,effectiveFilterWidth:P,dilationHeight:v,dilationWidth:b,inShape:e,outShape:l,filterShape:t}}function computeConv3DInfo(e,t,r,i,n,o=!1,a="channelsLast",s){let l,[u,c,d,p,h]=[-1,-1,-1,-1,-1];if("channelsLast"===a)[u,c,d,p,h]=e;else if("channelsFirst"===a)[u,h,c,d,p]=e;else throw Error(`Unknown dataFormat ${a}`);let[f,y,g,,m]=t,[v,b,S]=parse3TupleParam(r),[P,C,x]=parse3TupleParam(i),A=getEffectiveFilterSize(f,P),_=getEffectiveFilterSize(y,C),T=getEffectiveFilterSize(g,x),{padInfo:w,outDepth:R,outHeight:E,outWidth:D}=function(e,t,r,i,n,o,a,s,l,u,c){let d,p,h,f;if("valid"===e&&(e=0),"number"==typeof e){let y=0===e?"VALID":"NUMBER";d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:y};let g=function(e,t,r,i,n,o){null==n&&(n=computeDefaultPad(e,t[0],i[0]));let a=[0,0,0,1];for(let r=0;r<3;r++)e[r]+2*n>=t[r]&&(a[r]=conv_util_round((e[r]-t[r]+2*n)/i[r]+1,o));return a}([t,r,i,1],[s,l,u],0,[n,o,a],e,c);p=g[0],h=g[1],f=g[2]}else if("same"===e){p=Math.ceil(t/n),h=Math.ceil(r/o),f=Math.ceil(i/a);let e=(p-1)*n+s-t,c=(h-1)*o+l-r,y=(f-1)*a+u-i,g=Math.floor(e/2),m=Math.floor(c/2),v=Math.floor(y/2);d={top:m,bottom:c-m,left:v,right:y-v,front:g,back:e-g,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:h,outWidth:f}}(n,c,d,p,v,b,S,A,_,T,s),O=o?m*h:m;return"channelsFirst"===a?l=[u,O,R,E,D]:"channelsLast"===a&&(l=[u,R,E,D,O]),{batchSize:u,dataFormat:a,inDepth:c,inHeight:d,inWidth:p,inChannels:h,outDepth:R,outHeight:E,outWidth:D,outChannels:O,padInfo:w,strideDepth:v,strideHeight:b,strideWidth:S,filterDepth:f,filterHeight:y,filterWidth:g,effectiveFilterDepth:A,effectiveFilterHeight:_,effectiveFilterWidth:T,dilationDepth:P,dilationHeight:C,dilationWidth:x,inShape:e,outShape:l,filterShape:t}}function computeDefaultPad(e,t,r,i=1){let n=getEffectiveFilterSize(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)}function parseTupleParam(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function parse3TupleParam(e){return"number"==typeof e?[e,e,e]:e}function getEffectiveFilterSize(e,t){return t<=1?e:e+(e-1)*(t-1)}function conv_util_round(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function tupleValuesAreOne(e){let[t,r,i]=parseTupleParam(e);return 1===t&&1===r&&1===i}function eitherStridesOrDilationsAreOne(e,t){return tupleValuesAreOne(e)||tupleValuesAreOne(t)}function stridesOrDilationsArePositive(e){return parseTupleParam(e).every(e=>e>0)}function convertConv2DDataFormat(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw Error(`Unknown dataFormat ${e}`)}function checkPadOnDimRoundingMode(e,t,r){if(null!=r){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);if("number"==typeof t)util_base_assert(isInt(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);else if("object"==typeof t)t.forEach(t=>{t.forEach(t=>{util_base_assert(isInt(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}let iR=op({elu_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","elu","float32");return rL.runKernel(eD,{x:t})}}),iE=op({leakyRelu_:/**
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
 */function(e,t=.2){let r=tensor_util_env_convertToTensor(e,"x","leakyRelu");return rL.runKernel(eQ,{x:r},{alpha:t})}}),iD=op({prelu_:/**
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
 */function(e,t){let r=tensor_util_env_convertToTensor(e,"x","prelu"),i=tensor_util_env_convertToTensor(t,"alpha","prelu");return rL.runKernel(t_,{x:r,alpha:i})}}),iO=op({relu6_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","relu6");return rL.runKernel(tV,{x:t})}}),iI=op({sigmoid_:/**
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
 */function(e){let t=tensor_util_env_convertToTensor(e,"x","sigmoid","float32");return rL.runKernel(tJ,{x:t})}}),iM=op({step_:/**
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
 */function(e,t=0){let r=tensor_util_env_convertToTensor(e,"x","step");return rL.runKernel(rv,{x:r},{alpha:t})}});/**
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
 */function getFusedDyActivation(e,t,r){if(null==r||"linear"===r)return e;if("relu"===r)return rJ(e,iM(t));throw Error(`Cannot compute gradient for fused activation ${r}.`)}function getFusedBiasGradient(e,t){let r=t,i=getReductionAxes(e.shape,t.shape);return i.length>0&&(r=il(r,i)),ie(r,e.shape)}function applyActivation(e,t,r,i){if("linear"===t)return e;if("relu"===t)return i_(e);if("elu"===t)return iR(e);if("relu6"===t)return iO(e);if("prelu"===t)return iD(e,r);if("leakyrelu"===t)return iE(e,i);if("sigmoid"===t)return iI(e);throw Error(`Unknown fused activation ${t}.`)}let shouldFuse=(e,t)=>!(e>0)||"linear"===t;function combineRaggedTensorToTensorShapes(e,t,r){let i=[];if(null==r&&null==t)return i;if(null==t)for(;i.length<e+r.length;)i.push(-1);else i=t.slice();if(null==r)return i;if(e+r.length!==i.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+r.length}, but shape.rank = ${i.length}`);for(let n=1;n<r.length;++n){let o=r[n],a=i[i.length-r.length+n],s=i[a];if(o>=0){if(s>=0){if(s!==o)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${n+e}] = ${o} but shape[${n+e}] = ${s}`)}else i[a]=o}}return i}function getRowPartitionTypesHelper(e){let t={FIRST_DIM_SIZE:b.FIRST_DIM_SIZE,VALUE_ROWIDS:b.VALUE_ROWIDS,ROW_LENGTHS:b.ROW_LENGTHS,ROW_SPLITS:b.ROW_SPLITS,ROW_LIMITS:b.ROW_LIMITS,ROW_STARTS:b.ROW_STARTS},r=[];for(let i of e)if(i in t)r.push(t[i]);else break;return r}function getRaggedRank(e){return 0===e.length?0:e[0]===b.FIRST_DIM_SIZE?e.length-1:e.length}function validateDefaultValueShape(e,t){if(null==e||null==t)return;let r=e.length,i=t.length;if(r>=i)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${r} must be less than ragged tensor input flatValues.rank = ${i})`);for(let n=0;n<Math.min(r,i-1);++n){let r=e[n],i=t[n+1];if(r>=0&&i>=0&&1!==r&&r!==i)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${n-e.length}] = ${r} but ragged tensor input.flatValues.shape[${n-e.length}] = ${i}`)}}(p=b||(b={}))[p.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",p[p.VALUE_ROWIDS=1]="VALUE_ROWIDS",p[p.ROW_LENGTHS=2]="ROW_LENGTHS",p[p.ROW_SPLITS=3]="ROW_SPLITS",p[p.ROW_LIMITS=4]="ROW_LIMITS",p[p.ROW_STARTS=5]="ROW_STARTS";/**
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
 */let ik=30;function computeOptimalWindowSize(e){return e<=ik?e:nearestDivisor(e,Math.floor(Math.sqrt(e)))}/**
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
 */function getImageCenter(e,t,r){let i=r*("number"==typeof e?e:e[0]),n=t*("number"==typeof e?e:e[1]);return[i,n]}/**
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
 */function getReshaped(e,t,r,i=!0){let n=[];if(i)(n=n.concat(t.slice(0))).push(e[0]/r),n=n.concat(e.slice(1));else{n=n.concat(e[0]);let r=t.length;for(let i=0;i<r;++i)n=n.concat([e[i+1]/t[i],t[i]]);n=n.concat(e.slice(r+1))}return n}function getPermuted(e,t,r=!0){let i=[];if(r){i.push(t);for(let r=t+1;r<e;++r)r<=2*t?(i.push(r),i.push(r-(t+1))):i.push(r)}else{let r=[],n=[];for(let i=1;i<e;++i)i>=2*t+1||i%2==1?n.push(i):r.push(i);i.push(...r),i.push(0),i.push(...n)}return i}function getReshapedPermuted(e,t,r,i=!0){let n=[];i?n.push(e[0]/r):n.push(e[0]*r);for(let r=1;r<e.length;++r)r<=t.length?i?n.push(t[r-1]*e[r]):n.push(e[r]/t[r-1]):n.push(e[r]);return n}function getSliceBeginCoords(e,t){let r=[0];for(let i=0;i<t;++i)r.push(e[i][0]);return r}function getSliceSize(e,t,r){let i=e.slice(0,1);for(let n=0;n<r;++n)i.push(e[n+1]-t[n][0]-t[n][1]);return i}/**
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
 */let iL=1.7580993408473768,iN=1.0507009873554805,iB=.3275911,iF=.254829592,iV=-.284496736,ij=1.421413741,iH=-1.453152027,iz=1.061405429;/**
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
 */function mergeRealAndImagArrays(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let r=new Float32Array(2*e.length);for(let i=0;i<r.length;i+=2)r[i]=e[i/2],r[i+1]=t[i/2];return r}function splitRealAndImagArrays(e){let t=new Float32Array(e.length/2),r=new Float32Array(e.length/2);for(let i=0;i<e.length;i+=2)t[i/2]=e[i],r[i/2]=e[i+1];return{real:t,imag:r}}function complexWithEvenIndex(e){let t=Math.ceil(e.length/4),r=new Float32Array(t),i=new Float32Array(t);for(let t=0;t<e.length;t+=4)r[Math.floor(t/4)]=e[t],i[Math.floor(t/4)]=e[t+1];return{real:r,imag:i}}function complexWithOddIndex(e){let t=Math.floor(e.length/4),r=new Float32Array(t),i=new Float32Array(t);for(let t=2;t<e.length;t+=4)r[Math.floor(t/4)]=e[t],i[Math.floor(t/4)]=e[t+1];return{real:r,imag:i}}function getComplexWithIndex(e,t){let r=e[2*t],i=e[2*t+1];return{real:r,imag:i}}function assignToTypedArray(e,t,r,i){e[2*i]=t,e[2*i+1]=r}function exponents(e,t){let r=new Float32Array(e/2),i=new Float32Array(e/2);for(let n=0;n<Math.ceil(e/2);n++){let o=(t?2:-2)*Math.PI*(n/e);r[n]=Math.cos(o),i[n]=Math.sin(o)}return{real:r,imag:i}}function exponent(e,t,r){let i=(r?2:-2)*Math.PI*(e/t),n=Math.cos(i),o=Math.sin(i);return{real:n,imag:o}}let iU=/->/g;function decodeEinsumEquation(e,t){e=e.replace(/\s/g,"");let r=(e.length-e.replace(iU,"").length)/2;if(r<1)throw Error("Equations without an arrow are not supported.");if(r>1)throw Error('Equation must contain exactly one arrow ("->").');let[i,n]=e.split("->");util_base_assert(-1===i.indexOf("..."),()=>'The ellipsis notation ("...") is not supported yet.');let o=i.split(","),a=o.length;if(t!==a)throw Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw Error("Support for more than 2 input tensors is not implemented yet.");let s=[];for(let e=0;e<n.length;++e){let t=n[e];if(!o.some(e=>-1!==e.indexOf(t)))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===s.indexOf(t)&&s.push(t)}for(let e=0;e<i.length;++e){let t=i[e];-1===s.indexOf(t)&&","!==t&&s.push(t)}let l=Array(o.length);for(let e=0;e<a;++e){if(new Set(o[e].split("")).size!==o[e].length)throw Error(`Found duplicate axes in input component ${o[e]}. Support for duplicate axes in input is not implemented yet.`);l[e]=[];for(let t=0;t<o[e].length;++t)l[e].push(s.indexOf(o[e][t]))}let u=s.length,c=n.length,d=[];for(let e=c;e<u;++e)d.push(e);return{allDims:s,summedDims:d,idDims:l}}function getEinsumPermutation(e,t){let r=Array(e);r.fill(-1);for(let e=0;e<t.length;++e)r[t[e]]=e;let i=[];for(let t=0;t<e;++t)-1===r[t]&&i.push(t);return{permutationIndices:r=r.filter(e=>-1!==e),expandDims:i}}function checkEinsumDimSizes(e,t,r){let i=Array(e);for(let e=0;e<r.length;++e){let n=r[e].shape;for(let r=0;r<t[e].length;++r)void 0===i[t[e][r]]?i[t[e][r]]=n[r]:util_base_assert(i[t[e][r]]===n[r],()=>`Expected dimension ${i[t[e][r]]} at axis ${r} of input shaped ${JSON.stringify(n)}, but got dimension ${n[r]}`)}}function getEinsumComputePath(e,t){let r=[],i=0;0===e.length&&e.push(-1),i=e.length+1;for(let e=0;e<i;++e)r.push([]);let n=[];for(let i=0;i<e.length;++i){let o=e[i],a=function(e,t){let r=[];for(let i=0;i<e.length;++i)(0===e[i].length||-1!==e[i].indexOf(t)||-1===t)&&r.push(i);return r}(t,o);for(let e of a)-1===n.indexOf(e)&&(r[i].push(e),n.push(e))}return{path:e,steps:r}}function isIdentityPermutation(e){return e.every((e,t)=>e===t)}function prepareSplitSize(e,t,r=0){let i=[];if("number"==typeof t)util_base_assert(e.shape[r]%t==0,()=>"Number of splits must evenly divide the axis."),i=Array(t).fill(e.shape[r]/t);else{let n=t.reduce((e,t)=>(-1===t&&(e+=1),e),0);util_base_assert(n<=1,()=>"There should be only one negative value in split array.");let o=t.indexOf(-1);if(-1!==o){let i=t.reduce((e,t)=>t>0?e+t:e);t[o]=e.shape[r]-i}util_base_assert(e.shape[r]===t.reduce((e,t)=>e+t),()=>"The sum of sizes must match the size of the axis dimension."),i=t}return i}/**
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
 */function getSparseFillEmptyRowsIndicesDenseShapeMismatch(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function getSparseFillEmptyRowsNegativeIndexErrorMessage(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(e,t,r){return`indices(${e}, 0) is invalid: ${t} >= ${r}`}/**
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
 */function getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function getSparseReshapeNegativeOutputDimErrorMessage(e,t){return`size ${e} must be non-negative, not ${t}`}function getSparseReshapeEmptyTensorZeroOutputDimErrorMessage(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function getSparseReshapeInputOutputMultipleErrorMessage(e,t){let r=util_base_sizeFromShape(e),i=util_base_sizeFromShape(t);return`Input to reshape is a SparseTensor with ${r}
  dense values, but the requested shape requires a multiple of ${i}. inputShape=${e} outputShape= ${t}`}function getSparseReshapeInputOutputMismatchErrorMessage(e,t){let r=util_base_sizeFromShape(e),i=util_base_sizeFromShape(t);return`Input to reshape is a tensor with ${r} dense values, but the requested shape has ${i}. inputShape=${e} outputShape=${t}`}/**
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
 */function getSparseSegmentReductionNegativeSegmentIdsErrorMessage(){return"segment ids must be >= 0"}function getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage(){return"segment ids are not increasing"}function getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function getSparseSegmentReductionIndicesOutOfRangeErrorMessage(e,t,r){return`Bad: indices[${e}] == ${t} out of range [0, ${r})`}/**
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
 */function segOpComputeOptimalWindowSize(e,t){let r,i=!1;for(e<=ik?(r=e,i=!0):r=nearestDivisor(e,Math.floor(Math.sqrt(e)));!i;)r>t||r===e?i=!0:r=nearestDivisor(e,r+1);return r}function segment_util_computeOutShape(e,t,r){let i=[],n=e.length;for(let o=0;o<n;o++)o!==t?i.push(e[o]):i.push(r);return i}function collectGatherOpShapeInfo(e,t,r,i){let n=t.shape.length,o=e.shape.length;if(0!==i&&(i<-n||i>n))throw Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${i}`);if(i<0&&(i+=n),i>o)throw Error(`batchDims (${i}) must be less than rank(x) (
    ${o}).`);if(r<i)throw Error(`batchDims (${i}) must be less than or equal to axis (${r}).`);for(let r=0;r<i;++r)if(e.shape[r]!==t.shape[r])throw Error(`x.shape[${r}]: ${e.shape[r]} should be equal to indices.shape[${r}]: ${t.shape[r]}.`);let a=e.shape[r],s=[],l=1,u=1,c=1;for(let t=0;t<i;++t)s.push(e.shape[t]),l*=e.shape[t];for(let t=i;t<r;t++)s.push(e.shape[t]),u*=e.shape[t];for(let e=i;e<n;e++)s.push(t.shape[e]);for(let t=r+1;t<o;t++)s.push(e.shape[t]),c*=e.shape[t];return{batchSize:l,sliceSize:c,outerSize:u,dimSize:a,outputShape:s}}/**
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
 */function fromUint8ToStringArray(e){try{return e.map(e=>decodeString(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function fromStringArrayToUint8(e){return e.map(e=>encodeString(e))}/**
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
 */function whereImpl(e,t){let r=[];for(let e=0;e<t.length;e++)t[e]&&r.push(e);let i=buffer(e,"int32"),n=buffer([r.length,e.length],"int32");for(let t=0;t<r.length;t++){let o=i.indexToLoc(r[t]),a=t*e.length;n.values.set(o,a)}return n.toTensor()}!/**
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
//# sourceMappingURL=6195-b8688affda867b74.js.map