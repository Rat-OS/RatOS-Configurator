"use strict";exports.id=994,exports.ids=[994],exports.modules={48539:(t,e,n)=>{n.d(e,{n:()=>useKlippyStateHandler});var o=n(51495),r=n(99234);let useKlippyStateHandler=()=>{let{query:t,lastMessage:e}=(0,r.oK)({passThroughUpdateMethods:["notify_klippy_ready","notify_klippy_shutdown","notify_klippy_disconnected"]}),[n,i]=(0,o.useState)("unknown"),s=(0,o.useCallback)(async()=>{if(null!=t)try{let e=await t("server.info");if(e?.klippy_state==null)return;let n=e.klippy_state;i(n),"startup"===n&&setTimeout(()=>{s()},2e3)}catch(t){i("unknown")}},[t,i]);return(0,o.useEffect)(()=>{null!=t&&s()},[t,s]),(0,o.useEffect)(()=>{e&&"method"in e&&"notify_klippy_ready"===e.method&&i("ready"),e&&"method"in e&&"notify_klippy_shutdown"===e.method&&i("shutdown"),e&&"method"in e&&"notify_klippy_disconnected"===e.method&&(i("unknown"),s())},[e,s,i]),n}},3747:(t,e,n)=>{n.d(e,{r:()=>a});var o=n(97175);let r=(0,o.createProxy)(String.raw`/home/runner/work/RatOS-configurator/RatOS-configurator/src/components/common/no-ssr.tsx`),{__esModule:i,$$typeof:s}=r;r.default;let a=r.NoSSR}};