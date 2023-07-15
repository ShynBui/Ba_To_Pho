import{r as c,j as y}from"./index-c342ed10.js";import{g as I,h as w,s as R,j as $,k as b,_ as j,a as x,l as N,m as A}from"./ButtonBase-af438da4.js";function E({controlled:o,default:e,name:t,state:i="value"}){const{current:n}=c.useRef(o!==void 0),[u,l]=c.useState(e),r=n?o:u,s=c.useCallback(d=>{n||l(d)},[]);return[r,s]}function B(o){return I("MuiSvgIcon",o)}w("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const M=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],T=o=>{const{color:e,fontSize:t,classes:i}=o,n={root:["root",e!=="inherit"&&`color${$(e)}`,`fontSize${$(t)}`]};return A(n,B,i)},U=R("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${$(t.color)}`],e[`fontSize${$(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,i,n,u,l,r,s,d,p,a,v,S,m,f,h,g,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(i=t.create)==null?void 0:i.call(t,"fill",{duration:(n=o.transitions)==null||(u=n.duration)==null?void 0:u.shorter}),fontSize:{inherit:"inherit",small:((l=o.typography)==null||(r=l.pxToRem)==null?void 0:r.call(l,20))||"1.25rem",medium:((s=o.typography)==null||(d=s.pxToRem)==null?void 0:d.call(s,24))||"1.5rem",large:((p=o.typography)==null||(a=p.pxToRem)==null?void 0:a.call(p,35))||"2.1875rem"}[e.fontSize],color:(v=(S=(o.vars||o).palette)==null||(m=S[e.color])==null?void 0:m.main)!=null?v:{action:(f=(o.vars||o).palette)==null||(h=f.action)==null?void 0:h.active,disabled:(g=(o.vars||o).palette)==null||(_=g.action)==null?void 0:_.disabled,inherit:void 0}[e.color]}}),C=c.forwardRef(function(e,t){const i=b({props:e,name:"MuiSvgIcon"}),{children:n,className:u,color:l="inherit",component:r="svg",fontSize:s="medium",htmlColor:d,inheritViewBox:p=!1,titleAccess:a,viewBox:v="0 0 24 24"}=i,S=j(i,M),m=c.isValidElement(n)&&n.type==="svg",f=x({},i,{color:l,component:r,fontSize:s,instanceFontSize:e.fontSize,inheritViewBox:p,viewBox:v,hasSvgAsChild:m}),h={};p||(h.viewBox=v);const g=T(f);return y.jsxs(U,x({as:r,className:N(g.root,u),focusable:"false",color:d,"aria-hidden":a?void 0:!0,role:a?"img":void 0,ref:t},h,S,m&&n.props,{ownerState:f,children:[m?n.props.children:n,a?y.jsx("title",{children:a}):null]}))});C.muiName="SvgIcon";const z=C;function L(o,e){function t(i,n){return y.jsx(z,x({"data-testid":`${e}Icon`,ref:n},i,{children:o}))}return t.muiName=z.muiName,c.memo(c.forwardRef(t))}export{L as c,E as u};
