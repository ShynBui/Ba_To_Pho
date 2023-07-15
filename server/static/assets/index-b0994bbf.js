import{r as m,j as s,c as L,L as g}from"./index-c342ed10.js";import{g as O}from"./get-e21bbf14.js";import{C as b,a as C,b as v}from"./CardActionArea-1ef0c844.js";import{g as y,h as N,s as S,a as l,k as w,_ as D,l as I,m as A}from"./ButtonBase-af438da4.js";import{T as u}from"./Typography-121d2356.js";import{B as f}from"./Button-aad0cc86.js";import"./Paper-6af792cf.js";import"./extendSxProp-cea37efc.js";const T="_banner_v5xat_11",$="_subHome_v5xat_16",E="_subHome_left_v5xat_25",P="_subHome_right_v5xat_42",U="_moreOption_v5xat_59",B="_content_v5xat_74",z="_content_left_v5xat_78",X="_content_right_v5xat_88",F="_listItem_v5xat_96",G="_subItem_v5xat_102",W="_ScrollList_docs_v5xat_111",q="_titleDocs_v5xat_117",J="_cardDocs_v5xat_123",K="_subCard_v5xat_128",Q={banner:T,subHome:$,subHome_left:E,subHome_right:P,moreOption:U,content:B,content_left:z,content_right:X,listItem:F,subItem:G,"css-1wf8b0h-MuiTabs-flexContainer":"_css-1wf8b0h-MuiTabs-flexContainer_v5xat_107",ScrollList_docs:W,titleDocs:q,cardDocs:J,subCard:K};function V(t){return y("MuiCardActions",t)}N("MuiCardActions",["root","spacing"]);const Y=["disableSpacing","className"],Z=t=>{const{classes:o,disableSpacing:i}=t;return A({root:["root",!i&&"spacing"]},V,o)},ss=S("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,!i.disableSpacing&&o.spacing]}})(({ownerState:t})=>l({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),ts=m.forwardRef(function(o,i){const n=w({props:o,name:"MuiCardActions"}),{disableSpacing:e=!1,className:c}=n,d=D(n,Y),r=l({},n,{disableSpacing:e}),_=Z(r);return s.jsx(ss,l({className:I(_.root,c),ownerState:r,ref:i},d))}),j=ts;function es(t){return y("MuiCardMedia",t)}N("MuiCardMedia",["root","media","img"]);const os=["children","className","component","image","src","style"],ns=t=>{const{classes:o,isMediaComponent:i,isImageComponent:n}=t;return A({root:["root",i&&"media",n&&"img"]},es,o)},is=S("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t,{isMediaComponent:n,isImageComponent:e}=i;return[o.root,n&&o.media,e&&o.img]}})(({ownerState:t})=>l({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),as=["video","audio","picture","iframe","img"],cs=["picture","img"],rs=m.forwardRef(function(o,i){const n=w({props:o,name:"MuiCardMedia"}),{children:e,className:c,component:d="div",image:r,src:_,style:x}=n,H=D(n,os),p=as.indexOf(d)!==-1,R=!p&&r?l({backgroundImage:`url("${r}")`},x):x,h=l({},n,{component:d,isMediaComponent:p,isImageComponent:cs.indexOf(d)!==-1}),k=ns(h);return s.jsx(is,l({className:I(k.root,c),as:d,role:!p&&r?"img":void 0,ref:i,style:R,ownerState:h,src:p?r||_:void 0},H,{children:e}))}),M=rs,a=L.bind(Q),ls=()=>{const[t,o]=m.useState([]),[i,n]=m.useState([]);return m.useEffect(()=>{O("api/popular-new-documents").then(e=>{o(e.new),n(e.popular)})},[]),s.jsxs("div",{className:a("mainHome"),children:[s.jsx("div",{className:a("banner"),children:s.jsx("img",{src:"src/assets/banner1.png",alt:"w-100"})}),s.jsxs("div",{className:a("ScrollList_docs"),children:[s.jsx("div",{className:a("titleDocs"),children:s.jsx("h1",{children:"Tài liệu phổ biến"})}),s.jsx("div",{className:a("cardDocs"),children:i.slice(0,4).map((e,c)=>s.jsxs(b,{className:a("subCard"),sx:{width:"20%",height:"350px",position:"relative"},children:[s.jsx(g,{to:`/Documents/${e.id}`,children:s.jsxs(C,{children:[s.jsx(M,{component:"img",alt:"green iguana",height:"100",image:e.img_link_download}),s.jsxs(v,{children:[s.jsx(u,{style:{height:"70px"},gutterBottom:!0,variant:"h5",component:"div",children:e.title}),s.jsxs(u,{variant:"body2",color:"text.secondary",children:[e.description.slice(0,100),"..."]})]})]})}),s.jsx(j,{style:{position:"absolute",bottom:"0px"},children:s.jsx(f,{size:"small",children:"Xem chi tiết"})})]},c))})]}),s.jsxs("div",{className:a("ScrollList_docs"),children:[s.jsx("div",{className:a("titleDocs"),children:s.jsx("h1",{children:"Tài liệu mới nhất"})}),s.jsx("div",{className:a("cardDocs"),children:t.slice(0,4).map((e,c)=>s.jsxs(b,{className:a("subCard"),sx:{width:"20%",height:"350px",position:"relative"},children:[s.jsx(g,{to:`/Documents/${e.id}`,children:s.jsxs(C,{children:[s.jsx(M,{component:"img",alt:"green iguana",height:"100",image:e.img_link_download}),s.jsxs(v,{children:[s.jsx(u,{style:{height:"70px"},gutterBottom:!0,variant:"h5",component:"div",children:e.title}),s.jsxs(u,{variant:"body2",color:"text.secondary",children:[e.description.slice(0,100),"..."]})]})]})}),s.jsx(j,{style:{position:"absolute",bottom:"0px"},children:s.jsx(f,{size:"small",children:"Xem chi tiết"})})]},c))})]})]})},bs=ls;export{bs as default};
