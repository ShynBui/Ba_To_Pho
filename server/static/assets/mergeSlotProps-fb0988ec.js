import{a as o,l as m}from"./ButtonBase-18bcf650.js";function S(e){return typeof e=="string"}function E(e,s,n){return e===void 0||S(e)?s:o({},s,{ownerState:o({},s.ownerState,n)})}function p(e,s=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!s.includes(t)).forEach(t=>{n[t]=e[t]}),n}function H(e,s){return typeof e=="function"?e(s):e}function y(e){if(e===void 0)return{};const s={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{s[n]=e[n]}),s}function O(e){const{getSlotProps:s,additionalProps:n,externalSlotProps:t,externalForwardedProps:l,className:u}=e;if(!s){const f=m(l==null?void 0:l.className,t==null?void 0:t.className,u,n==null?void 0:n.className),v=o({},n==null?void 0:n.style,l==null?void 0:l.style,t==null?void 0:t.style),i=o({},n,l,t);return f.length>0&&(i.className=f),Object.keys(v).length>0&&(i.style=v),{props:i,internalRef:void 0}}const N=p(o({},l,t)),g=y(t),h=y(l),r=s(N),d=m(r==null?void 0:r.className,n==null?void 0:n.className,u,l==null?void 0:l.className,t==null?void 0:t.className),c=o({},r==null?void 0:r.style,n==null?void 0:n.style,l==null?void 0:l.style,t==null?void 0:t.style),a=o({},r,n,h,g);return d.length>0&&(a.className=d),Object.keys(c).length>0&&(a.style=c),{props:a,internalRef:r.ref}}export{E as a,p as e,S as i,O as m,H as r};