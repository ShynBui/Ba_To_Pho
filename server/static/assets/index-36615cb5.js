import{r as x,j as a,c as et,L as A}from"./index-c342ed10.js";import{z as at,A as st,a as v,D as G,E as T,F as ot,G as nt,H as it,_ as D,l as O,m as E,g as V,I as W,h as K,s as L,B as rt,n as B,k as U,j as M,f as w}from"./ButtonBase-af438da4.js";import{s as ct,F as H,L as Z}from"./LastPage-3461fda5.js";import{e as lt}from"./extendSxProp-cea37efc.js";import{u as dt,c as Q}from"./createSvgIcon-a31cc56a.js";import{u as pt}from"./useTheme-1e55e963.js";const ut=["component","direction","spacing","divider","children","className","useFlexGap"],gt=at(),_t=ct("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function mt(t){return st({props:t,name:"MuiStack",defaultTheme:gt})}function xt(t,e){const s=x.Children.toArray(t).filter(Boolean);return s.reduce((n,u,r)=>(n.push(u),r<s.length-1&&n.push(x.cloneElement(e,{key:`separator-${r}`})),n),[])}const ht=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],vt=({ownerState:t,theme:e})=>{let s=v({display:"flex",flexDirection:"column"},G({theme:e},T({values:t.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(t.spacing){const n=ot(e),u=Object.keys(e.breakpoints.values).reduce((i,c)=>((typeof t.spacing=="object"&&t.spacing[c]!=null||typeof t.direction=="object"&&t.direction[c]!=null)&&(i[c]=!0),i),{}),r=T({values:t.direction,base:u}),b=T({values:t.spacing,base:u});typeof r=="object"&&Object.keys(r).forEach((i,c,j)=>{if(!r[i]){const h=c>0?r[j[c-1]]:"column";r[i]=h}}),s=nt(s,G({theme:e},b,(i,c)=>t.useFlexGap?{gap:W(n,i)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${ht(c?r[c]:t.direction)}`]:W(n,i)}}))}return s=it(e.breakpoints,s),s};function bt(t={}){const{createStyledComponent:e=_t,useThemeProps:s=mt,componentName:n="MuiStack"}=t,u=()=>E({root:["root"]},i=>V(n,i),{}),r=e(vt);return x.forwardRef(function(i,c){const j=s(i),N=lt(j),{component:h="div",direction:_="column",spacing:l=0,divider:P,children:k,className:f,useFlexGap:$=!1}=N,y=D(N,ut),o={direction:_,spacing:l,useFlexGap:$},m=u();return a.jsx(r,v({as:h,ownerState:o,ref:c,className:O(m.root,f)},y,{children:P?xt(k,P):k}))})}function ft(t){return V("MuiPagination",t)}K("MuiPagination",["root","ul","outlined","text"]);const yt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function jt(t={}){const{boundaryCount:e=1,componentName:s="usePagination",count:n=1,defaultPage:u=1,disabled:r=!1,hideNextButton:b=!1,hidePrevButton:g=!1,onChange:i,page:c,showFirstButton:j=!1,showLastButton:N=!1,siblingCount:h=1}=t,_=D(t,yt),[l,P]=dt({controlled:c,default:u,name:s,state:"page"}),k=(d,S)=>{c||P(S),i&&i(d,S)},f=(d,S)=>{const Y=S-d+1;return Array.from({length:Y},(re,tt)=>d+tt)},$=f(1,Math.min(e,n)),y=f(Math.max(n-e+1,e+1),n),o=Math.max(Math.min(l-h,n-e-h*2-1),e+2),m=Math.min(Math.max(l+h,e+h*2+2),y.length>0?y[0]-2:n-1),z=[...j?["first"]:[],...g?[]:["previous"],...$,...o>e+2?["start-ellipsis"]:e+1<n-e?[e+1]:[],...f(o,m),...m<n-e-1?["end-ellipsis"]:n-e>e?[n-e]:[],...y,...b?[]:["next"],...N?["last"]:[]],R=d=>{switch(d){case"first":return 1;case"previous":return l-1;case"next":return l+1;case"last":return n;default:return null}},I=z.map(d=>typeof d=="number"?{onClick:S=>{k(S,d)},type:"page",page:d,selected:d===l,disabled:r,"aria-current":d===l?"true":void 0}:{onClick:S=>{k(S,R(d))},type:d,page:R(d),selected:!1,disabled:r||d.indexOf("ellipsis")===-1&&(d==="next"||d==="last"?l>=n:l<=1)});return v({items:I},_)}function kt(t){return V("MuiPaginationItem",t)}const Ct=K("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),C=Ct,q=Q(a.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),J=Q(a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Nt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],X=(t,e)=>{const{ownerState:s}=t;return[e.root,e[s.variant],e[`size${M(s.size)}`],s.variant==="text"&&e[`text${M(s.color)}`],s.variant==="outlined"&&e[`outlined${M(s.color)}`],s.shape==="rounded"&&e.rounded,s.type==="page"&&e.page,(s.type==="start-ellipsis"||s.type==="end-ellipsis")&&e.ellipsis,(s.type==="previous"||s.type==="next")&&e.previousNext,(s.type==="first"||s.type==="last")&&e.firstLast]},Pt=t=>{const{classes:e,color:s,disabled:n,selected:u,size:r,shape:b,type:g,variant:i}=t,c={root:["root",`size${M(r)}`,i,b,s!=="standard"&&`${i}${M(s)}`,n&&"disabled",u&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[g]],icon:["icon"]};return E(c,kt,e)},$t=L("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:X})(({theme:t,ownerState:e})=>v({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${C.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),zt=L(rt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:X})(({theme:t,ownerState:e})=>v({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${C.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${C.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selected} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:B(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${C.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selected} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:B(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${C.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>v({},e.variant==="text"&&{[`&.${C.selected}`]:v({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${C.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${C.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${C.selected}`]:v({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:B(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:B(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:B(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:B(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${C.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),It=L("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>v({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),St=x.forwardRef(function(e,s){const n=U({props:e,name:"MuiPaginationItem"}),{className:u,color:r="standard",component:b,components:g={},disabled:i=!1,page:c,selected:j=!1,shape:N="circular",size:h="medium",slots:_={},type:l="page",variant:P="text"}=n,k=D(n,Nt),f=v({},n,{color:r,disabled:i,selected:j,shape:N,size:h,type:l,variant:P}),$=pt(),y=Pt(f),m=($.direction==="rtl"?{previous:_.next||g.next||J,next:_.previous||g.previous||q,last:_.first||g.first||H,first:_.last||g.last||Z}:{previous:_.previous||g.previous||q,next:_.next||g.next||J,first:_.first||g.first||H,last:_.last||g.last||Z})[l];return l==="start-ellipsis"||l==="end-ellipsis"?a.jsx($t,{ref:s,ownerState:f,className:O(y.root,u),children:"…"}):a.jsxs(zt,v({ref:s,ownerState:f,component:b,disabled:i,className:O(y.root,u)},k,{children:[l==="page"&&c,m?a.jsx(It,{as:m,ownerState:f,className:y.icon}):null]}))}),Rt=St,Bt=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Lt=t=>{const{classes:e,variant:s}=t;return E({root:["root",s],ul:["ul"]},ft,e)},Mt=L("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,e[s.variant]]}})({}),Ot=L("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Dt(t,e,s){return t==="page"?`${s?"":"Go to "}page ${e}`:`Go to ${t} page`}const Tt=x.forwardRef(function(e,s){const n=U({props:e,name:"MuiPagination"}),{boundaryCount:u=1,className:r,color:b="standard",count:g=1,defaultPage:i=1,disabled:c=!1,getItemAriaLabel:j=Dt,hideNextButton:N=!1,hidePrevButton:h=!1,renderItem:_=I=>a.jsx(Rt,v({},I)),shape:l="circular",showFirstButton:P=!1,showLastButton:k=!1,siblingCount:f=1,size:$="medium",variant:y="text"}=n,o=D(n,Bt),{items:m}=jt(v({},n,{componentName:"Pagination"})),z=v({},n,{boundaryCount:u,color:b,count:g,defaultPage:i,disabled:c,getItemAriaLabel:j,hideNextButton:N,hidePrevButton:h,renderItem:_,shape:l,showFirstButton:P,showLastButton:k,siblingCount:f,size:$,variant:y}),R=Lt(z);return a.jsx(Mt,v({"aria-label":"pagination navigation",className:O(R.root,r),ownerState:z,ref:s},o,{children:a.jsx(Ot,{className:R.ul,ownerState:z,children:m.map((I,d)=>a.jsx("li",{children:_(v({},I,{color:b,"aria-label":j(I.type,I.page,I.selected),shape:l,size:$,variant:y}))},d))})}))}),wt=Tt,Ft=bt({createStyledComponent:L("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>U({props:t,name:"MuiStack"})}),Et=Ft,Vt="_main_1cbt9_6",Ut="_main__left_1cbt9_10",At="_main__mid_1cbt9_15",Gt="_content__mid_1cbt9_19",Wt="_item_1cbt9_23",Ht="_main__right_1cbt9_30",Zt="_title__left_1cbt9_36",qt="_paginate_1cbt9_47",Jt="_list__left_1cbt9_53",Kt="_check__list_1cbt9_63",Qt="_active_1cbt9_74",Xt="_check__type_1cbt9_79",Yt="_content__left_1cbt9_91",te="_buttonDown_1cbt9_143",ee="_content__right_1cbt9_94",ae="_showMore_1cbt9_171",se="_rate_1cbt9_181",oe={main:Vt,main__left:Ut,main__mid:At,content__mid:Gt,item:Wt,main__right:Ht,title__left:Zt,paginate:qt,list__left:Jt,check__list:Kt,active:Qt,check__type:Xt,content__left:Yt,"content__right--title":"_content__right--title_1cbt9_94","content__right--main":"_content__right--main_1cbt9_98","content__right--option":"_content__right--option_1cbt9_102",buttonDown:te,content__right:ee,showMore:ae,rate:se};class ne extends x.Component{componentDidMount(){const e=document.createElement("script");e.src="https://cse.google.com/cse.js?cx=412a124be8d714cde",e.async=!0,document.body.appendChild(e),window.__gcse={callback:()=>{const s=google.search.cse.element.getElement("gsc-i-id1");s.onchange=()=>{const n=s.value;console.log(n)}}}}render(){return a.jsx("div",{className:"gcse-search"})}}const p=et.bind(oe),F=7,ie=()=>{const[t,e]=x.useState(""),[s,n]=x.useState(""),[u,r]=x.useState(!1),[b,g]=x.useState([]),[i,c]=x.useState([]),[j,N]=x.useState([]),[h,_]=x.useState([]),[l,P]=x.useState(1),[k,f]=x.useState("");x.useEffect(()=>{f((l-1)*F)},[l]);const $=(o,m)=>{_(o?[...h,m]:h.filter(z=>z!==m))};x.useEffect(()=>{w.get("http://127.0.0.1:5000/api/categories").then(o=>{c(o.data)}).catch(o=>{}),w.get("http://127.0.0.1:5000/api/types").then(o=>{N(o.data),n(o.data[0].id)}).catch(o=>{console.log("that bai")}),w.get("http://127.0.0.1:5000/api/documents").then(o=>{g(o.data)}).catch(o=>{console.log("that bai")})},[]);const y=()=>{r(!u)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:p("main"),children:[a.jsxs("div",{className:p("main__left"),children:[a.jsxs("div",{className:p("title__left"),children:[a.jsx("span",{style:{fontSize:"15px"},className:"material-icons",children:"bookmarks"})," ",a.jsx("h1",{children:" Bộ lọc tìm kiếm"})]}),a.jsxs("div",{className:p("list__left"),children:[a.jsx("h1",{children:"Theo danh mục"}),a.jsxs("div",{className:p("check__list",{active:u}),children:[a.jsxs("ul",{children:[i.slice(1,4).map(o=>a.jsxs("li",{children:[a.jsx("input",{type:"checkbox",onClick:m=>$(m.target.checked,o.id)})," ",o.name," "]},o.id)),u&&i.slice(4,i.length-1).map(o=>a.jsxs("li",{className:p("show__list"),children:[a.jsx("input",{type:"checkbox",onClick:()=>e(o.id)})," ",o.name," "]},o.id))]}),a.jsxs("h2",{onClick:y,className:p("showMore"),style:{marginBottom:"20px"},children:[a.jsx("span",{className:"material-icons",children:"arrow_drop_down"}),"Thêm"]})]}),a.jsx("h1",{children:"Loại tài liệu"}),a.jsx("div",{className:p("check__type"),children:a.jsx("ul",{children:j.map(o=>a.jsxs("li",{children:[a.jsx("input",{type:"checkbox",checked:s===o.id,onChange:()=>n(o.id)})," ",o.name," "]},o.id))})})]}),a.jsxs("div",{className:p("rate"),children:[a.jsx("h1",{children:"Đánh giá"}),a.jsx("span",{className:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{className:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{className:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{className:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{className:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"})]})]}),a.jsxs("div",{className:p("main__mid"),children:[a.jsx("div",{className:p("content__mid"),children:b.slice(k,k+F).map((o,m)=>h.every(z=>o.categories.map(R=>R.id).includes(z))&&s===o.document_type_id&&a.jsxs("div",{className:p("item"),children:[a.jsxs("div",{className:p("content__left"),children:[console.log(o),a.jsx("img",{src:o.img_link_download,alt:"preview"})]}),a.jsxs("div",{className:p("content__right"),children:[a.jsx("div",{className:p("content__right--title"),children:a.jsx(A,{to:`/Documents/${o.id}`,children:a.jsx("h1",{style:{color:"#3379b5"},children:o.title})})}),a.jsx("div",{className:p("content__right--main"),children:a.jsxs("h1",{children:[" ",o.description]})}),a.jsxs("div",{className:p("content__right--option"),children:[a.jsxs("button",{children:[a.jsx("span",{style:{fontSize:"20px"},className:"material-icons",children:"file_download"}),a.jsx("h1",{children:"366"})]}),a.jsxs("button",{children:[a.jsx("span",{style:{fontSize:"20px",marginRight:"5px"},className:"material-icons",children:"visibility"}),a.jsx("h1",{children:"3062"})]}),a.jsx("div",{className:p("buttonDown"),children:a.jsx(A,{to:`/Documents/${o.id}`,children:a.jsxs("button",{type:"button",children:[a.jsx("span",{style:{color:"#99a8ba",fontSize:"15px"},className:"material-icons",children:"description"}),"Docs"]})})}),a.jsxs("button",{type:"button",className:"btn btn-danger",children:[a.jsx("span",{className:"material-icons",style:{fontSize:"15px"},children:"save_alt"})," ","Download"]})]})]})]},m))}),a.jsx("div",{className:p("paginate"),children:a.jsx(Et,{spacing:2,children:a.jsx(wt,{count:Math.ceil(b.length/F),showFirstButton:!0,showLastButton:!0,onChange:(o,m)=>P(m)})})})]}),a.jsxs("div",{className:p("main__right"),children:[a.jsx("i",{children:"Tìm kiếm tài liệu mới nhất"}),a.jsx(ne,{style:{marginRight:"10px"}})]})]})})},_e=ie;export{_e as default};
