import{g as b,h as B,s as W,j as u,a as i,k as C,_ as M,l as R,m as j}from"./ButtonBase-af438da4.js";import{r as P,j as U}from"./index-c342ed10.js";import{e as _}from"./extendSxProp-cea37efc.js";function N(t){return b("MuiTypography",t)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=t=>{const{align:a,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=t,s={root:["root",o,t.align!=="inherit"&&`align${u(a)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return j(s,N,p)},L=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${u(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>i({margin:0},a.variant&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=t=>k[t]||t,z=P.forwardRef(function(a,r){const n=C({props:a,name:"MuiTypography"}),e=w(n.color),o=_(i({},n,{color:e})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:g="body1",variantMapping:c=y}=o,x=M(o,$),m=i({},o,{align:p,color:e,className:s,component:h,gutterBottom:d,noWrap:f,paragraph:l,variant:g,variantMapping:c}),v=h||(l?"p":c[g]||y[g])||"span",T=E(m);return U.jsx(L,i({as:v,ref:r,ownerState:m,className:R(T.root,s)},x))}),O=z;export{O as T};
