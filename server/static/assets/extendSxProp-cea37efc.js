import{_ as a,a as i,u as c,i as f}from"./ButtonBase-af438da4.js";const x=["sx"],P=t=>{var s,o;const n={systemProps:{},otherProps:{}},r=(s=t==null||(o=t.theme)==null?void 0:o.unstable_sxConfig)!=null?s:c;return Object.keys(t).forEach(e=>{r[e]?n.systemProps[e]=t[e]:n.otherProps[e]=t[e]}),n};function m(t){const{sx:s}=t,o=a(t,x),{systemProps:n,otherProps:r}=P(o);let e;return Array.isArray(s)?e=[n,...s]:typeof s=="function"?e=(...u)=>{const l=s(...u);return f(l)?i({},n,l):n}:e=i({},n,s),i({},r,{sx:e})}export{m as e};
