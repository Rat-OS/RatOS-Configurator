"use strict";exports.id=9013,exports.ids=[9013,439],exports.modules={79508:(e,t,r)=>{r.d(t,{N:()=>s});let s={timestamp:!0}},49013:(e,t,r)=>{r.d(t,{getLogger:()=>getLogger});var s=r(58545),o=r.n(s),n=r(11641),p=r(79508);let g=null,getLogger=()=>{if(null!=g)return g;let e=n.serverSchema.parse(process.env),t={target:"pino/file",options:{destination:e.LOG_FILE,append:!0}};return g=o()({...p.N,transport:t})}}};