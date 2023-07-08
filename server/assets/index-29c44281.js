import{r as v,j as a,c as et,L as A}from"./index-3c7e9b90.js";import{a as T}from"./axios-4a70c6fc.js";import{A as at,D as st,a as m,E as G,F as w,G as ot,H as nt,I as it,_ as D,l as O,m as V,g as E,J as W,f as K,v as rt,o as Q,s as R,B as ct,j as L,k as U,h as M}from"./createSvgIcon-0ba49377.js";import{s as lt,F as H,L as J}from"./LastPage-063cec71.js";import{e as dt}from"./extendSxProp-cbb16799.js";import{u as pt}from"./useTheme-36583d75.js";const ut=["component","direction","spacing","divider","children","className","useFlexGap"],gt=at(),_t=lt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function xt(t){return st({props:t,name:"MuiStack",defaultTheme:gt})}function ht(t,e){const s=v.Children.toArray(t).filter(Boolean);return s.reduce((n,u,r)=>(n.push(u),r<s.length-1&&n.push(v.cloneElement(e,{key:`separator-${r}`})),n),[])}const vt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],mt=({ownerState:t,theme:e})=>{let s=m({display:"flex",flexDirection:"column"},G({theme:e},w({values:t.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(t.spacing){const n=ot(e),u=Object.keys(e.breakpoints.values).reduce((i,c)=>((typeof t.spacing=="object"&&t.spacing[c]!=null||typeof t.direction=="object"&&t.direction[c]!=null)&&(i[c]=!0),i),{}),r=w({values:t.direction,base:u}),f=w({values:t.spacing,base:u});typeof r=="object"&&Object.keys(r).forEach((i,c,j)=>{if(!r[i]){const h=c>0?r[j[c-1]]:"column";r[i]=h}}),s=nt(s,G({theme:e},f,(i,c)=>t.useFlexGap?{gap:W(n,i)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${vt(c?r[c]:t.direction)}`]:W(n,i)}}))}return s=it(e.breakpoints,s),s};function ft(t={}){const{createStyledComponent:e=_t,useThemeProps:s=xt,componentName:n="MuiStack"}=t,u=()=>V({root:["root"]},i=>E(n,i),{}),r=e(mt);return v.forwardRef(function(i,c){const j=s(i),P=dt(j),{component:h="div",direction:_="column",spacing:l=0,divider:$,children:k,className:b,useFlexGap:N=!1}=P,y=D(P,ut),o={direction:_,spacing:l,useFlexGap:N},x=u();return a.jsx(r,m({as:h,ownerState:o,ref:c,className:O(x.root,b)},y,{children:$?ht(k,$):k}))})}const bt="_main_1cbt9_6",yt="_main__left_1cbt9_10",jt="_main__mid_1cbt9_15",kt="_content__mid_1cbt9_19",Ct="_item_1cbt9_23",Pt="_main__right_1cbt9_30",$t="_title__left_1cbt9_36",Nt="_paginate_1cbt9_47",zt="_list__left_1cbt9_53",It="_check__list_1cbt9_63",St="_active_1cbt9_74",Bt="_check__type_1cbt9_79",Lt="_content__left_1cbt9_91",Rt="_buttonDown_1cbt9_143",Mt="_content__right_1cbt9_94",Ot="_showMore_1cbt9_171",Dt="_rate_1cbt9_181",Tt={main:bt,main__left:yt,main__mid:jt,content__mid:kt,item:Ct,main__right:Pt,title__left:$t,paginate:Nt,list__left:zt,check__list:It,active:St,check__type:Bt,content__left:Lt,"content__right--title":"_content__right--title_1cbt9_94","content__right--main":"_content__right--main_1cbt9_98","content__right--option":"_content__right--option_1cbt9_102",buttonDown:Rt,content__right:Mt,showMore:Ot,rate:Dt};function wt(t){return E("MuiPagination",t)}K("MuiPagination",["root","ul","outlined","text"]);const Ft=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Vt(t={}){const{boundaryCount:e=1,componentName:s="usePagination",count:n=1,defaultPage:u=1,disabled:r=!1,hideNextButton:f=!1,hidePrevButton:g=!1,onChange:i,page:c,showFirstButton:j=!1,showLastButton:P=!1,siblingCount:h=1}=t,_=D(t,Ft),[l,$]=rt({controlled:c,default:u,name:s,state:"page"}),k=(d,S)=>{c||$(S),i&&i(d,S)},b=(d,S)=>{const Y=S-d+1;return Array.from({length:Y},(ie,tt)=>d+tt)},N=b(1,Math.min(e,n)),y=b(Math.max(n-e+1,e+1),n),o=Math.max(Math.min(l-h,n-e-h*2-1),e+2),x=Math.min(Math.max(l+h,e+h*2+2),y.length>0?y[0]-2:n-1),z=[...j?["first"]:[],...g?[]:["previous"],...N,...o>e+2?["start-ellipsis"]:e+1<n-e?[e+1]:[],...b(o,x),...x<n-e-1?["end-ellipsis"]:n-e>e?[n-e]:[],...y,...f?[]:["next"],...P?["last"]:[]],B=d=>{switch(d){case"first":return 1;case"previous":return l-1;case"next":return l+1;case"last":return n;default:return null}},I=z.map(d=>typeof d=="number"?{onClick:S=>{k(S,d)},type:"page",page:d,selected:d===l,disabled:r,"aria-current":d===l?"true":void 0}:{onClick:S=>{k(S,B(d))},type:d,page:B(d),selected:!1,disabled:r||d.indexOf("ellipsis")===-1&&(d==="next"||d==="last"?l>=n:l<=1)});return m({items:I},_)}function Et(t){return E("MuiPaginationItem",t)}const Ut=K("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),C=Ut,Z=Q(a.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),q=Q(a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),At=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],X=(t,e)=>{const{ownerState:s}=t;return[e.root,e[s.variant],e[`size${M(s.size)}`],s.variant==="text"&&e[`text${M(s.color)}`],s.variant==="outlined"&&e[`outlined${M(s.color)}`],s.shape==="rounded"&&e.rounded,s.type==="page"&&e.page,(s.type==="start-ellipsis"||s.type==="end-ellipsis")&&e.ellipsis,(s.type==="previous"||s.type==="next")&&e.previousNext,(s.type==="first"||s.type==="last")&&e.firstLast]},Gt=t=>{const{classes:e,color:s,disabled:n,selected:u,size:r,shape:f,type:g,variant:i}=t,c={root:["root",`size${M(r)}`,i,f,s!=="standard"&&`${i}${M(s)}`,n&&"disabled",u&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[g]],icon:["icon"]};return V(c,Et,e)},Wt=R("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:X})(({theme:t,ownerState:e})=>m({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${C.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),Ht=R(ct,{name:"MuiPaginationItem",slot:"Root",overridesResolver:X})(({theme:t,ownerState:e})=>m({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${C.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${C.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selected} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:L(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${C.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selected} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:L(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${C.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>m({},e.variant==="text"&&{[`&.${C.selected}`]:m({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${C.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${C.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${C.selected}`]:m({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:L(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:L(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:L(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:L(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${C.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),Jt=R("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>m({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),Zt=v.forwardRef(function(e,s){const n=U({props:e,name:"MuiPaginationItem"}),{className:u,color:r="standard",component:f,components:g={},disabled:i=!1,page:c,selected:j=!1,shape:P="circular",size:h="medium",slots:_={},type:l="page",variant:$="text"}=n,k=D(n,At),b=m({},n,{color:r,disabled:i,selected:j,shape:P,size:h,type:l,variant:$}),N=pt(),y=Gt(b),x=(N.direction==="rtl"?{previous:_.next||g.next||q,next:_.previous||g.previous||Z,last:_.first||g.first||H,first:_.last||g.last||J}:{previous:_.previous||g.previous||Z,next:_.next||g.next||q,first:_.first||g.first||H,last:_.last||g.last||J})[l];return l==="start-ellipsis"||l==="end-ellipsis"?a.jsx(Wt,{ref:s,ownerState:b,className:O(y.root,u),children:"…"}):a.jsxs(Ht,m({ref:s,ownerState:b,component:f,disabled:i,className:O(y.root,u)},k,{children:[l==="page"&&c,x?a.jsx(Jt,{as:x,ownerState:b,className:y.icon}):null]}))}),qt=Zt,Kt=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Qt=t=>{const{classes:e,variant:s}=t;return V({root:["root",s],ul:["ul"]},wt,e)},Xt=R("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,e[s.variant]]}})({}),Yt=R("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function te(t,e,s){return t==="page"?`${s?"":"Go to "}page ${e}`:`Go to ${t} page`}const ee=v.forwardRef(function(e,s){const n=U({props:e,name:"MuiPagination"}),{boundaryCount:u=1,className:r,color:f="standard",count:g=1,defaultPage:i=1,disabled:c=!1,getItemAriaLabel:j=te,hideNextButton:P=!1,hidePrevButton:h=!1,renderItem:_=I=>a.jsx(qt,m({},I)),shape:l="circular",showFirstButton:$=!1,showLastButton:k=!1,siblingCount:b=1,size:N="medium",variant:y="text"}=n,o=D(n,Kt),{items:x}=Vt(m({},n,{componentName:"Pagination"})),z=m({},n,{boundaryCount:u,color:f,count:g,defaultPage:i,disabled:c,getItemAriaLabel:j,hideNextButton:P,hidePrevButton:h,renderItem:_,shape:l,showFirstButton:$,showLastButton:k,siblingCount:b,size:N,variant:y}),B=Qt(z);return a.jsx(Xt,m({"aria-label":"pagination navigation",className:O(B.root,r),ownerState:z,ref:s},o,{children:a.jsx(Yt,{className:B.ul,ownerState:z,children:x.map((I,d)=>a.jsx("li",{children:_(m({},I,{color:f,"aria-label":j(I.type,I.page,I.selected),shape:l,size:N,variant:y}))},d))})}))}),ae=ee,se=ft({createStyledComponent:R("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>U({props:t,name:"MuiStack"})}),oe=se,p=et.bind(Tt),F=7,ne=()=>{const[t,e]=v.useState(""),[s,n]=v.useState(""),[u,r]=v.useState(!1),[f,g]=v.useState([]),[i,c]=v.useState([]),[j,P]=v.useState([]),[h,_]=v.useState([]),[l,$]=v.useState(1),[k,b]=v.useState("");v.useEffect(()=>{b((l-1)*F)},[l]);const N=(o,x)=>{_(o?[...h,x]:h.filter(z=>z!==x))};v.useEffect(()=>{T.get("http://127.0.0.1:5000/api/categories").then(o=>{c(o.data)}).catch(o=>{}),T.get("http://127.0.0.1:5000/api/types").then(o=>{P(o.data),n(o.data[0].id)}).catch(o=>{console.log("that bai")}),T.get("http://127.0.0.1:5000/api/documents").then(o=>{g(o.data)}).catch(o=>{console.log("that bai")})},[]);const y=()=>{r(!u)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:p("main"),children:[a.jsxs("div",{className:p("main__left"),children:[a.jsxs("div",{className:p("title__left"),children:[a.jsx("span",{style:{fontSize:"15px"},class:"material-icons",children:"bookmarks"})," ",a.jsx("h1",{children:" Bộ lọc tìm kiếm"})]}),a.jsxs("div",{className:p("list__left"),children:[a.jsx("h1",{children:"Theo danh mục"}),a.jsxs("div",{className:p("check__list",{active:u}),children:[a.jsxs("ul",{children:[i.slice(1,4).map(o=>a.jsxs("li",{children:[a.jsx("input",{type:"checkbox",onClick:x=>N(x.target.checked,o.id)})," ",o.name," "]},o.id)),u&&i.slice(4,i.length-1).map(o=>a.jsxs("li",{className:p("show__list"),children:[a.jsx("input",{type:"checkbox",onClick:()=>e(o.id)})," ",o.name," "]},o.id))]}),a.jsxs("h2",{onClick:y,className:p("showMore"),style:{marginBottom:"20px"},children:[a.jsx("span",{class:"material-icons",children:"arrow_drop_down"}),"Thêm"]})]}),a.jsx("h1",{children:"Loại tài liệu"}),a.jsx("div",{className:p("check__type"),children:a.jsx("ul",{children:j.map(o=>a.jsxs("li",{children:[a.jsx("input",{type:"checkbox",checked:s===o.id,onChange:()=>n(o.id)})," ",o.name," "]},o.id))})})]}),a.jsxs("div",{className:p("rate"),children:[a.jsx("h1",{children:"Đánh giá"}),a.jsx("span",{class:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{class:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{class:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{class:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"}),a.jsx("span",{class:"material-icons",style:{color:"orange",fontSize:"16px"},children:"star"})]})]}),a.jsxs("div",{className:p("main__mid"),children:[a.jsx("div",{className:p("content__mid"),children:f.slice(k,k+F).map((o,x)=>h.every(z=>o.categories.map(B=>B.id).includes(z))&&s===o.document_type_id&&a.jsx(a.Fragment,{children:a.jsxs("div",{className:p("item"),children:[a.jsxs("div",{className:p("content__left"),children:[console.log(o),a.jsx("img",{src:o.img_link_download,alt:"preview"})]}),a.jsxs("div",{className:p("content__right"),children:[a.jsx("div",{className:p("content__right--title"),children:a.jsx(A,{to:`/Documents/${o.id}`,children:a.jsx("h1",{style:{color:"#3379b5"},children:o.title})})}),a.jsx("div",{className:p("content__right--main"),children:a.jsxs("h1",{children:[" ",o.description]})}),a.jsxs("div",{className:p("content__right--option"),children:[a.jsxs("button",{children:[a.jsx("span",{style:{fontSize:"20px"},class:"material-icons",children:"file_download"}),a.jsx("h1",{children:"366"})]}),a.jsxs("button",{children:[a.jsx("span",{style:{fontSize:"20px",marginRight:"5px"},class:"material-icons",children:"visibility"}),a.jsx("h1",{children:"3062"})]}),a.jsx("div",{className:p("buttonDown"),children:a.jsx(A,{to:`/Documents/${o.id}`,children:a.jsxs("button",{type:"button",children:[a.jsx("span",{style:{color:"#99a8ba",fontSize:"15px"},class:"material-icons",children:"description"}),"Docs"]})})}),a.jsxs("button",{type:"button",class:"btn btn-danger",children:[a.jsx("span",{class:"material-icons",style:{fontSize:"15px"},children:"save_alt"})," ","Download"]})]})]})]},x)}))}),a.jsx("div",{className:p("paginate"),children:a.jsx(oe,{spacing:2,children:a.jsx(ae,{count:Math.ceil(f.length/F),showFirstButton:!0,showLastButton:!0,onChange:(o,x)=>$(x)})})})]}),a.jsx("div",{className:p("main__right"),children:a.jsx("i",{children:"Tài liệu nhiều người ưa chuộng nhất gần đây"})})]})})},ge=ne;export{ge as default};
