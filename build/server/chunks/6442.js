"use strict";exports.id=6442,exports.ids=[6442],exports.modules={7545:(e,r,t)=>{t.d(r,{fC:()=>g,z$:()=>x});var n=t(51588),o=t(3966),a=t(37993),d=t(36195),i=t(14614),l=t(20743),p=t(27222),c=t(82643),u=t(24309),s=t(54493);let f="Checkbox",[$,v]=(0,d.b)(f),[w,b]=$(f),h=(0,o.forwardRef)((e,r)=>{let{__scopeCheckbox:t,name:d,checked:p,defaultChecked:c,required:u,disabled:f,value:$="on",onCheckedChange:v,...b}=e,[h,m]=(0,o.useState)(null),g=(0,a.e)(r,e=>m(e)),x=(0,o.useRef)(!1),E=!h||!!h.closest("form"),[_=!1,D]=(0,l.T)({prop:p,defaultProp:c,onChange:v}),C=(0,o.useRef)(_);return(0,o.useEffect)(()=>{let e=null==h?void 0:h.form;if(e){let reset=()=>D(C.current);return e.addEventListener("reset",reset),()=>e.removeEventListener("reset",reset)}},[h,D]),(0,o.createElement)(w,{scope:t,state:_,disabled:f},(0,o.createElement)(s.WV.button,(0,n.Z)({type:"button",role:"checkbox","aria-checked":$e698a72e93240346$var$isIndeterminate(_)?"mixed":_,"aria-required":u,"data-state":$e698a72e93240346$var$getState(_),"data-disabled":f?"":void 0,disabled:f,value:$},b,{ref:g,onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.M)(e.onClick,e=>{D(e=>!!$e698a72e93240346$var$isIndeterminate(e)||!e),E&&(x.current=e.isPropagationStopped(),x.current||e.stopPropagation())})})),E&&(0,o.createElement)($e698a72e93240346$var$BubbleInput,{control:h,bubbles:!x.current,name:d,value:$,checked:_,required:u,disabled:f,style:{transform:"translateX(-100%)"}}))}),m=(0,o.forwardRef)((e,r)=>{let{__scopeCheckbox:t,forceMount:a,...d}=e,i=b("CheckboxIndicator",t);return(0,o.createElement)(u.z,{present:a||$e698a72e93240346$var$isIndeterminate(i.state)||!0===i.state},(0,o.createElement)(s.WV.span,(0,n.Z)({"data-state":$e698a72e93240346$var$getState(i.state),"data-disabled":i.disabled?"":void 0},d,{ref:r,style:{pointerEvents:"none",...e.style}})))}),$e698a72e93240346$var$BubbleInput=e=>{let{control:r,checked:t,bubbles:a=!0,...d}=e,i=(0,o.useRef)(null),l=(0,p.D)(t),u=(0,c.t)(r);return(0,o.useEffect)(()=>{let e=i.current,r=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(r,"checked"),o=n.set;if(l!==t&&o){let r=new Event("click",{bubbles:a});e.indeterminate=$e698a72e93240346$var$isIndeterminate(t),o.call(e,!$e698a72e93240346$var$isIndeterminate(t)&&t),e.dispatchEvent(r)}},[l,t,a]),(0,o.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!$e698a72e93240346$var$isIndeterminate(t)&&t},d,{tabIndex:-1,ref:i,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $e698a72e93240346$var$isIndeterminate(e){return"indeterminate"===e}function $e698a72e93240346$var$getState(e){return $e698a72e93240346$var$isIndeterminate(e)?"indeterminate":e?"checked":"unchecked"}let g=h,x=m},81016:(e,r,t)=>{t.d(r,{$F:()=>h,Ee:()=>z,Rk:()=>A,Tr:()=>$d08ef79370b62062$export$d7a01e11500dfb6f,Uv:()=>$d08ef79370b62062$export$602eac185826482c,VY:()=>I,Z0:()=>K,ZA:()=>O,__:()=>T,ck:()=>V,fC:()=>$d08ef79370b62062$export$be92b6f5f03c0fe9,fF:()=>S,oC:()=>P,tu:()=>W,wU:()=>F,xz:()=>Z});var n=t(51588),o=t(3966),a=t(14614),d=t(37993),i=t(36195),l=t(20743),p=t(54493),c=t(79302),u=t(76240);let s="DropdownMenu",[f,$]=(0,i.b)(s,[c.Wf]),v=(0,c.Wf)(),[w,b]=f(s),h=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,disabled:i=!1,...l}=e,u=b("DropdownMenuTrigger",t),s=v(t);return(0,o.createElement)(c.ee,(0,n.Z)({asChild:!0},s),(0,o.createElement)(p.WV.button,(0,n.Z)({type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":i?"":void 0,disabled:i},l,{ref:(0,d.F)(r,u.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{i||0!==e.button||!1!==e.ctrlKey||(u.onOpenToggle(),u.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!i&&(["Enter"," "].includes(e.key)&&u.onOpenToggle(),"ArrowDown"===e.key&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),m=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...d}=e,i=b("DropdownMenuContent",t),l=v(t),p=(0,o.useRef)(!1);return(0,o.createElement)(c.VY,(0,n.Z)({id:i.contentId,"aria-labelledby":i.triggerId},l,d,{ref:r,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var r;p.current||null===(r=i.triggerRef.current)||void 0===r||r.focus(),p.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let r=e.detail.originalEvent,t=0===r.button&&!0===r.ctrlKey,n=2===r.button||t;(!i.modal||n)&&(p.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),g=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.ZA,(0,n.Z)({},d,a,{ref:r}))}),x=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.__,(0,n.Z)({},d,a,{ref:r}))}),E=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.ck,(0,n.Z)({},d,a,{ref:r}))}),_=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.oC,(0,n.Z)({},d,a,{ref:r}))}),D=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.Ee,(0,n.Z)({},d,a,{ref:r}))}),C=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.Rk,(0,n.Z)({},d,a,{ref:r}))}),k=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.wU,(0,n.Z)({},d,a,{ref:r}))}),M=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.Z0,(0,n.Z)({},d,a,{ref:r}))}),y=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.fF,(0,n.Z)({},d,a,{ref:r}))}),R=(0,o.forwardRef)((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,d=v(t);return(0,o.createElement)(c.tu,(0,n.Z)({},d,a,{ref:r,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),$d08ef79370b62062$export$be92b6f5f03c0fe9=e=>{let{__scopeDropdownMenu:r,children:t,dir:a,open:d,defaultOpen:i,onOpenChange:p,modal:s=!0}=e,f=v(r),$=(0,o.useRef)(null),[b=!1,h]=(0,l.T)({prop:d,defaultProp:i,onChange:p});return(0,o.createElement)(w,{scope:r,triggerId:(0,u.M)(),triggerRef:$,contentId:(0,u.M)(),open:b,onOpenChange:h,onOpenToggle:(0,o.useCallback)(()=>h(e=>!e),[h]),modal:s},(0,o.createElement)(c.fC,(0,n.Z)({},f,{open:b,onOpenChange:h,dir:a,modal:s}),t))},Z=h,$d08ef79370b62062$export$602eac185826482c=e=>{let{__scopeDropdownMenu:r,...t}=e,a=v(r);return(0,o.createElement)(c.h_,(0,n.Z)({},a,t))},I=m,O=g,T=x,V=E,P=_,z=D,A=C,F=k,K=M,$d08ef79370b62062$export$d7a01e11500dfb6f=e=>{let{__scopeDropdownMenu:r,children:t,open:a,onOpenChange:d,defaultOpen:i}=e,p=v(r),[u=!1,s]=(0,l.T)({prop:a,defaultProp:i,onChange:d});return(0,o.createElement)(c.Tr,(0,n.Z)({},p,{open:u,onOpenChange:s}),t)},S=y,W=R},6233:(e,r,t)=>{t.d(r,{f:()=>p});var n=t(51588),o=t(3966),a=t(54493);let d="horizontal",i=["horizontal","vertical"],l=(0,o.forwardRef)((e,r)=>{let{decorative:t,orientation:i=d,...l}=e,p=$89eedd556c436f6a$var$isValidOrientation(i)?i:d;return(0,o.createElement)(a.WV.div,(0,n.Z)({"data-orientation":p},t?{role:"none"}:{"aria-orientation":"vertical"===p?p:void 0,role:"separator"},l,{ref:r}))});function $89eedd556c436f6a$var$isValidOrientation(e){return i.includes(e)}l.propTypes={orientation(e,r,t){let n=e[r],o=String(n);return n&&!$89eedd556c436f6a$var$isValidOrientation(n)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${d}\`.`):null}};let p=l}};