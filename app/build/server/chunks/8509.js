"use strict";exports.id=8509,exports.ids=[8509],exports.modules={88509:(t,e,r)=>{r.d(e,{$l:()=>h});var a=r(61014);function inputShaperCfg(t,e,r,a){return{name:t,initFunc:e,minFreq:r,color:a}}let h=[inputShaperCfg("zv",function(t,e){let r=Math.sqrt(1-e**2);return[[1,Math.exp(-e*Math.PI/r)],[0,.5*(1/(t*r))]]},21,"blue"),inputShaperCfg("mzv",function(t,e){let r=Math.sqrt(1-e**2),a=Math.exp(-.75*e*Math.PI/r),h=1/(t*r),n=1-1/Math.sqrt(2);return[[n,(Math.sqrt(2)-1)*a,n*a*a],[0,.375*h,.75*h]]},23,"rose"),inputShaperCfg("zvd",function(t,e){let r=Math.sqrt(1-e**2),a=Math.exp(-e*Math.PI/r),h=1/(t*r);return[[1,2*a,a**2],[0,.5*h,h]]},29,"lime"),inputShaperCfg("ei",function(t,e){let r=1/a.vy.SHAPER_VIBRATION_REDUCTION,h=Math.sqrt(1-e**2),n=Math.exp(-e*Math.PI/h),p=1/(t*h),u=.25*(1+r);return[[u,.5*(1-r)*n,u*n*n],[0,.5*p,p]]},29,"amber"),inputShaperCfg("2hump_ei",function(t,e){let r=1/a.vy.SHAPER_VIBRATION_REDUCTION,h=Math.sqrt(1-e**2),n=Math.exp(-e*Math.PI/h),p=1/(t*h),u=r**2,i=Math.pow(u*(Math.sqrt(1-u)+1),1/3),M=(3*i*i+2*i+3*u)/(16*i),s=(.5-M)*n;return[[M,s,s*n,M*n*n*n],[0,.5*p,p,1.5*p]]},39,"pink"),inputShaperCfg("3hump_ei",function(t,e){let r=1/a.vy.SHAPER_VIBRATION_REDUCTION,h=Math.sqrt(1-e**2),n=Math.exp(-e*Math.PI/h),p=1/(t*h),u=n*n,i=.0625*(1+3*r+2*Math.sqrt(2*(r+1)*r)),M=.25*(1-r)*n;return[[i,M,(.5*(1+r)-2*i)*u,M*u,i*u*u],[0,.5*p,p,1.5*p,2*p]]},48,"violet")]}};