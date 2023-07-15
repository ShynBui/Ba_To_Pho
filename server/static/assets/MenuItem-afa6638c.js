import{d as Ao,r as T,j as W}from"./index-a17772b3.js";import{g as it,f as st,_ as Me,a as w,b as nt,c as yt,m as pt,s as Ae,S as So,k as lt,h as no,j as Re,v as Lo,w as ko,x as Bo,l as he,B as Do,y as jo}from"./createSvgIcon-ba9cc093.js";import{u as No}from"./useTheme-510aec2c.js";import{P as Wo,u as Fo,b as Vo,G as _t,L as bt,d as zt,l as qt}from"./listItemTextClasses-a8754a13.js";import{a as Xt,u as Ho}from"./Button-4be3ab5e.js";import{a as Ze}from"./Paper-06e726c1.js";var ao={exports:{}},Uo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_o=Uo,zo=_o;function io(){}function so(){}so.resetWarningCache=io;var qo=function(){function e(r,n,a,p,s,i){if(i!==zo){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:so,resetWarningCache:io};return o.PropTypes=o,o};ao.exports=qo();var Xo=ao.exports;const Hn=Ao(Xo);var D="top",H="bottom",U="right",j="left",Ot="auto",_e=[D,H,U,j],Ce="start",He="end",Yo="clippingParents",po="viewport",je="popper",Go="reference",Yt=_e.reduce(function(e,t){return e.concat([t+"-"+Ce,t+"-"+He])},[]),lo=[].concat(_e,[Ot]).reduce(function(e,t){return e.concat([t,t+"-"+Ce,t+"-"+He])},[]),Ko="beforeRead",Jo="read",Qo="afterRead",Zo="beforeMain",er="main",tr="afterMain",or="beforeWrite",rr="write",nr="afterWrite",ar=[Ko,Jo,Qo,Zo,er,tr,or,rr,nr];function oe(e){return e?(e.nodeName||"").toLowerCase():null}function F(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ye(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function V(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Tt(e){if(typeof ShadowRoot>"u")return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ir(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var r=t.styles[o]||{},n=t.attributes[o]||{},a=t.elements[o];!V(a)||!oe(a)||(Object.assign(a.style,r),Object.keys(n).forEach(function(p){var s=n[p];s===!1?a.removeAttribute(p):a.setAttribute(p,s===!0?"":s)}))})}function sr(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(r){var n=t.elements[r],a=t.attributes[r]||{},p=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:o[r]),s=p.reduce(function(i,c){return i[c]="",i},{});!V(n)||!oe(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const pr={name:"applyStyles",enabled:!0,phase:"write",fn:ir,effect:sr,requires:["computeStyles"]};function te(e){return e.split("-")[0]}var ge=Math.max,at=Math.min,Ee=Math.round;function xt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function co(){return!/^((?!chrome|android).)*safari/i.test(xt())}function $e(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!1);var r=e.getBoundingClientRect(),n=1,a=1;t&&V(e)&&(n=e.offsetWidth>0&&Ee(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Ee(r.height)/e.offsetHeight||1);var p=ye(e)?F(e):window,s=p.visualViewport,i=!co()&&o,c=(r.left+(i&&s?s.offsetLeft:0))/n,l=(r.top+(i&&s?s.offsetTop:0))/a,v=r.width/n,y=r.height/a;return{width:v,height:y,top:l,right:c+v,bottom:l+y,left:c,x:c,y:l}}function Rt(e){var t=$e(e),o=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function uo(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&Tt(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ae(e){return F(e).getComputedStyle(e)}function lr(e){return["table","td","th"].indexOf(oe(e))>=0}function ce(e){return((ye(e)?e.ownerDocument:e.document)||window.document).documentElement}function ct(e){return oe(e)==="html"?e:e.assignedSlot||e.parentNode||(Tt(e)?e.host:null)||ce(e)}function Gt(e){return!V(e)||ae(e).position==="fixed"?null:e.offsetParent}function cr(e){var t=/firefox/i.test(xt()),o=/Trident/i.test(xt());if(o&&V(e)){var r=ae(e);if(r.position==="fixed")return null}var n=ct(e);for(Tt(n)&&(n=n.host);V(n)&&["html","body"].indexOf(oe(n))<0;){var a=ae(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ze(e){for(var t=F(e),o=Gt(e);o&&lr(o)&&ae(o).position==="static";)o=Gt(o);return o&&(oe(o)==="html"||oe(o)==="body"&&ae(o).position==="static")?t:o||cr(e)||t}function Ct(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Fe(e,t,o){return ge(e,at(t,o))}function ur(e,t,o){var r=Fe(e,t,o);return r>o?o:r}function fo(){return{top:0,right:0,bottom:0,left:0}}function vo(e){return Object.assign({},fo(),e)}function mo(e,t){return t.reduce(function(o,r){return o[r]=e,o},{})}var fr=function(t,o){return t=typeof t=="function"?t(Object.assign({},o.rects,{placement:o.placement})):t,vo(typeof t!="number"?t:mo(t,_e))};function dr(e){var t,o=e.state,r=e.name,n=e.options,a=o.elements.arrow,p=o.modifiersData.popperOffsets,s=te(o.placement),i=Ct(s),c=[j,U].indexOf(s)>=0,l=c?"height":"width";if(!(!a||!p)){var v=fr(n.padding,o),y=Rt(a),f=i==="y"?D:j,P=i==="y"?H:U,d=o.rects.reference[l]+o.rects.reference[i]-p[i]-o.rects.popper[l],m=p[i]-o.rects.reference[i],x=ze(a),R=x?i==="y"?x.clientHeight||0:x.clientWidth||0:0,b=d/2-m/2,u=v[f],g=R-y[l]-v[P],h=R/2-y[l]/2+b,C=Fe(u,h,g),I=i;o.modifiersData[r]=(t={},t[I]=C,t.centerOffset=C-h,t)}}function vr(e){var t=e.state,o=e.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||uo(t.elements.popper,n)&&(t.elements.arrow=n))}const mr={name:"arrow",enabled:!0,phase:"main",fn:dr,effect:vr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ie(e){return e.split("-")[1]}var hr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function gr(e,t){var o=e.x,r=e.y,n=t.devicePixelRatio||1;return{x:Ee(o*n)/n||0,y:Ee(r*n)/n||0}}function Kt(e){var t,o=e.popper,r=e.popperRect,n=e.placement,a=e.variation,p=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,v=e.isFixed,y=p.x,f=y===void 0?0:y,P=p.y,d=P===void 0?0:P,m=typeof l=="function"?l({x:f,y:d}):{x:f,y:d};f=m.x,d=m.y;var x=p.hasOwnProperty("x"),R=p.hasOwnProperty("y"),b=j,u=D,g=window;if(c){var h=ze(o),C="clientHeight",I="clientWidth";if(h===F(o)&&(h=ce(o),ae(h).position!=="static"&&s==="absolute"&&(C="scrollHeight",I="scrollWidth")),h=h,n===D||(n===j||n===U)&&a===He){u=H;var $=v&&h===g&&g.visualViewport?g.visualViewport.height:h[C];d-=$-r.height,d*=i?1:-1}if(n===j||(n===D||n===H)&&a===He){b=U;var E=v&&h===g&&g.visualViewport?g.visualViewport.width:h[I];f-=E-r.width,f*=i?1:-1}}var A=Object.assign({position:s},c&&hr),k=l===!0?gr({x:f,y:d},F(o)):{x:f,y:d};if(f=k.x,d=k.y,i){var S;return Object.assign({},A,(S={},S[u]=R?"0":"",S[b]=x?"0":"",S.transform=(g.devicePixelRatio||1)<=1?"translate("+f+"px, "+d+"px)":"translate3d("+f+"px, "+d+"px, 0)",S))}return Object.assign({},A,(t={},t[u]=R?d+"px":"",t[b]=x?f+"px":"",t.transform="",t))}function yr(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=r===void 0?!0:r,a=o.adaptive,p=a===void 0?!0:a,s=o.roundOffsets,i=s===void 0?!0:s,c={placement:te(t.placement),variation:Ie(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Kt(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Kt(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const br={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:yr,data:{}};var et={passive:!0};function xr(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,a=n===void 0?!0:n,p=r.resize,s=p===void 0?!0:p,i=F(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(l){l.addEventListener("scroll",o.update,et)}),s&&i.addEventListener("resize",o.update,et),function(){a&&c.forEach(function(l){l.removeEventListener("scroll",o.update,et)}),s&&i.removeEventListener("resize",o.update,et)}}const wr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xr,data:{}};var Pr={left:"right",right:"left",bottom:"top",top:"bottom"};function rt(e){return e.replace(/left|right|bottom|top/g,function(t){return Pr[t]})}var Or={start:"end",end:"start"};function Jt(e){return e.replace(/start|end/g,function(t){return Or[t]})}function Et(e){var t=F(e),o=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:o,scrollTop:r}}function $t(e){return $e(ce(e)).left+Et(e).scrollLeft}function Tr(e,t){var o=F(e),r=ce(e),n=o.visualViewport,a=r.clientWidth,p=r.clientHeight,s=0,i=0;if(n){a=n.width,p=n.height;var c=co();(c||!c&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:p,x:s+$t(e),y:i}}function Rr(e){var t,o=ce(e),r=Et(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=ge(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=ge(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+$t(e),i=-r.scrollTop;return ae(n||o).direction==="rtl"&&(s+=ge(o.clientWidth,n?n.clientWidth:0)-a),{width:a,height:p,x:s,y:i}}function It(e){var t=ae(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function ho(e){return["html","body","#document"].indexOf(oe(e))>=0?e.ownerDocument.body:V(e)&&It(e)?e:ho(ct(e))}function Ve(e,t){var o;t===void 0&&(t=[]);var r=ho(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),a=F(r),p=n?[a].concat(a.visualViewport||[],It(r)?r:[]):r,s=t.concat(p);return n?s:s.concat(Ve(ct(p)))}function wt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Cr(e,t){var o=$e(e,!1,t==="fixed");return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}function Qt(e,t,o){return t===po?wt(Tr(e,o)):ye(t)?Cr(t,o):wt(Rr(ce(e)))}function Er(e){var t=Ve(ct(e)),o=["absolute","fixed"].indexOf(ae(e).position)>=0,r=o&&V(e)?ze(e):e;return ye(r)?t.filter(function(n){return ye(n)&&uo(n,r)&&oe(n)!=="body"}):[]}function $r(e,t,o,r){var n=t==="clippingParents"?Er(e):[].concat(t),a=[].concat(n,[o]),p=a[0],s=a.reduce(function(i,c){var l=Qt(e,c,r);return i.top=ge(l.top,i.top),i.right=at(l.right,i.right),i.bottom=at(l.bottom,i.bottom),i.left=ge(l.left,i.left),i},Qt(e,p,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function go(e){var t=e.reference,o=e.element,r=e.placement,n=r?te(r):null,a=r?Ie(r):null,p=t.x+t.width/2-o.width/2,s=t.y+t.height/2-o.height/2,i;switch(n){case D:i={x:p,y:t.y-o.height};break;case H:i={x:p,y:t.y+t.height};break;case U:i={x:t.x+t.width,y:s};break;case j:i={x:t.x-o.width,y:s};break;default:i={x:t.x,y:t.y}}var c=n?Ct(n):null;if(c!=null){var l=c==="y"?"height":"width";switch(a){case Ce:i[c]=i[c]-(t[l]/2-o[l]/2);break;case He:i[c]=i[c]+(t[l]/2-o[l]/2);break}}return i}function Ue(e,t){t===void 0&&(t={});var o=t,r=o.placement,n=r===void 0?e.placement:r,a=o.strategy,p=a===void 0?e.strategy:a,s=o.boundary,i=s===void 0?Yo:s,c=o.rootBoundary,l=c===void 0?po:c,v=o.elementContext,y=v===void 0?je:v,f=o.altBoundary,P=f===void 0?!1:f,d=o.padding,m=d===void 0?0:d,x=vo(typeof m!="number"?m:mo(m,_e)),R=y===je?Go:je,b=e.rects.popper,u=e.elements[P?R:y],g=$r(ye(u)?u:u.contextElement||ce(e.elements.popper),i,l,p),h=$e(e.elements.reference),C=go({reference:h,element:b,strategy:"absolute",placement:n}),I=wt(Object.assign({},b,C)),$=y===je?I:h,E={top:g.top-$.top+x.top,bottom:$.bottom-g.bottom+x.bottom,left:g.left-$.left+x.left,right:$.right-g.right+x.right},A=e.modifiersData.offset;if(y===je&&A){var k=A[n];Object.keys(E).forEach(function(S){var _=[U,H].indexOf(S)>=0?1:-1,z=[D,H].indexOf(S)>=0?"y":"x";E[S]+=k[z]*_})}return E}function Ir(e,t){t===void 0&&(t={});var o=t,r=o.placement,n=o.boundary,a=o.rootBoundary,p=o.padding,s=o.flipVariations,i=o.allowedAutoPlacements,c=i===void 0?lo:i,l=Ie(r),v=l?s?Yt:Yt.filter(function(P){return Ie(P)===l}):_e,y=v.filter(function(P){return c.indexOf(P)>=0});y.length===0&&(y=v);var f=y.reduce(function(P,d){return P[d]=Ue(e,{placement:d,boundary:n,rootBoundary:a,padding:p})[te(d)],P},{});return Object.keys(f).sort(function(P,d){return f[P]-f[d]})}function Mr(e){if(te(e)===Ot)return[];var t=rt(e);return[Jt(e),t,Jt(t)]}function Ar(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,a=n===void 0?!0:n,p=o.altAxis,s=p===void 0?!0:p,i=o.fallbackPlacements,c=o.padding,l=o.boundary,v=o.rootBoundary,y=o.altBoundary,f=o.flipVariations,P=f===void 0?!0:f,d=o.allowedAutoPlacements,m=t.options.placement,x=te(m),R=x===m,b=i||(R||!P?[rt(m)]:Mr(m)),u=[m].concat(b).reduce(function(re,J){return re.concat(te(J)===Ot?Ir(t,{placement:J,boundary:l,rootBoundary:v,padding:c,flipVariations:P,allowedAutoPlacements:d}):J)},[]),g=t.rects.reference,h=t.rects.popper,C=new Map,I=!0,$=u[0],E=0;E<u.length;E++){var A=u[E],k=te(A),S=Ie(A)===Ce,_=[D,H].indexOf(k)>=0,z=_?"width":"height",M=Ue(t,{placement:A,boundary:l,rootBoundary:v,altBoundary:y,padding:c}),L=_?S?U:j:S?H:D;g[z]>h[z]&&(L=rt(L));var K=rt(L),q=[];if(a&&q.push(M[k]<=0),s&&q.push(M[L]<=0,M[K]<=0),q.every(function(re){return re})){$=A,I=!1;break}C.set(A,q)}if(I)for(var be=P?3:1,xe=function(J){var ie=u.find(function(se){var B=C.get(se);if(B)return B.slice(0,J).every(function(X){return X})});if(ie)return $=ie,"break"},ue=be;ue>0;ue--){var fe=xe(ue);if(fe==="break")break}t.placement!==$&&(t.modifiersData[r]._skip=!0,t.placement=$,t.reset=!0)}}const Sr={name:"flip",enabled:!0,phase:"main",fn:Ar,requiresIfExists:["offset"],data:{_skip:!1}};function Zt(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function eo(e){return[D,U,H,j].some(function(t){return e[t]>=0})}function Lr(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,p=Ue(t,{elementContext:"reference"}),s=Ue(t,{altBoundary:!0}),i=Zt(p,r),c=Zt(s,n,a),l=eo(i),v=eo(c);t.modifiersData[o]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}const kr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lr};function Br(e,t,o){var r=te(e),n=[j,D].indexOf(r)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,p=a[0],s=a[1];return p=p||0,s=(s||0)*n,[j,U].indexOf(r)>=0?{x:s,y:p}:{x:p,y:s}}function Dr(e){var t=e.state,o=e.options,r=e.name,n=o.offset,a=n===void 0?[0,0]:n,p=lo.reduce(function(l,v){return l[v]=Br(v,t.rects,a),l},{}),s=p[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=p}const jr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Dr};function Nr(e){var t=e.state,o=e.name;t.modifiersData[o]=go({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Wr={name:"popperOffsets",enabled:!0,phase:"read",fn:Nr,data:{}};function Fr(e){return e==="x"?"y":"x"}function Vr(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,a=n===void 0?!0:n,p=o.altAxis,s=p===void 0?!1:p,i=o.boundary,c=o.rootBoundary,l=o.altBoundary,v=o.padding,y=o.tether,f=y===void 0?!0:y,P=o.tetherOffset,d=P===void 0?0:P,m=Ue(t,{boundary:i,rootBoundary:c,padding:v,altBoundary:l}),x=te(t.placement),R=Ie(t.placement),b=!R,u=Ct(x),g=Fr(u),h=t.modifiersData.popperOffsets,C=t.rects.reference,I=t.rects.popper,$=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,E=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(h){if(a){var S,_=u==="y"?D:j,z=u==="y"?H:U,M=u==="y"?"height":"width",L=h[u],K=L+m[_],q=L-m[z],be=f?-I[M]/2:0,xe=R===Ce?C[M]:I[M],ue=R===Ce?-I[M]:-C[M],fe=t.elements.arrow,re=f&&fe?Rt(fe):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:fo(),ie=J[_],se=J[z],B=Fe(0,C[M],re[M]),X=b?C[M]/2-be-B-ie-E.mainAxis:xe-B-ie-E.mainAxis,we=b?-C[M]/2+be+B+se+E.mainAxis:ue+B+se+E.mainAxis,Q=t.elements.arrow&&ze(t.elements.arrow),ut=Q?u==="y"?Q.clientTop||0:Q.clientLeft||0:0,qe=(S=A==null?void 0:A[u])!=null?S:0,Xe=L+X-qe-ut,Z=L+we-qe,Pe=Fe(f?at(K,Xe):K,L,f?ge(q,Z):q);h[u]=Pe,k[u]=Pe-L}if(s){var Ye,de=u==="x"?D:j,Ge=u==="x"?H:U,Y=h[g],Oe=g==="y"?"height":"width",ve=Y+m[de],Te=Y-m[Ge],pe=[D,j].indexOf(x)!==-1,me=(Ye=A==null?void 0:A[g])!=null?Ye:0,ee=pe?ve:Y-C[Oe]-I[Oe]-me+E.altAxis,Se=pe?Y+C[Oe]+I[Oe]-me-E.altAxis:Te,Ke=f&&pe?ur(ee,Y,Se):Fe(f?ee:ve,Y,f?Se:Te);h[g]=Ke,k[g]=Ke-Y}t.modifiersData[r]=k}}const Hr={name:"preventOverflow",enabled:!0,phase:"main",fn:Vr,requiresIfExists:["offset"]};function Ur(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function _r(e){return e===F(e)||!V(e)?Et(e):Ur(e)}function zr(e){var t=e.getBoundingClientRect(),o=Ee(t.width)/e.offsetWidth||1,r=Ee(t.height)/e.offsetHeight||1;return o!==1||r!==1}function qr(e,t,o){o===void 0&&(o=!1);var r=V(t),n=V(t)&&zr(t),a=ce(t),p=$e(e,n,o),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(r||!r&&!o)&&((oe(t)!=="body"||It(a))&&(s=_r(t)),V(t)?(i=$e(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=$t(a))),{x:p.left+s.scrollLeft-i.x,y:p.top+s.scrollTop-i.y,width:p.width,height:p.height}}function Xr(e){var t=new Map,o=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function n(a){o.add(a.name);var p=[].concat(a.requires||[],a.requiresIfExists||[]);p.forEach(function(s){if(!o.has(s)){var i=t.get(s);i&&n(i)}}),r.push(a)}return e.forEach(function(a){o.has(a.name)||n(a)}),r}function Yr(e){var t=Xr(e);return ar.reduce(function(o,r){return o.concat(t.filter(function(n){return n.phase===r}))},[])}function Gr(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Kr(e){var t=e.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(t).map(function(o){return t[o]})}var to={placement:"bottom",modifiers:[],strategy:"absolute"};function oo(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Jr(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,r=o===void 0?[]:o,n=t.defaultOptions,a=n===void 0?to:n;return function(s,i,c){c===void 0&&(c=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},to,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},v=[],y=!1,f={state:l,setOptions:function(x){var R=typeof x=="function"?x(l.options):x;d(),l.options=Object.assign({},a,l.options,R),l.scrollParents={reference:ye(s)?Ve(s):s.contextElement?Ve(s.contextElement):[],popper:Ve(i)};var b=Yr(Kr([].concat(r,l.options.modifiers)));return l.orderedModifiers=b.filter(function(u){return u.enabled}),P(),f.update()},forceUpdate:function(){if(!y){var x=l.elements,R=x.reference,b=x.popper;if(oo(R,b)){l.rects={reference:qr(R,ze(b),l.options.strategy==="fixed"),popper:Rt(b)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var u=0;u<l.orderedModifiers.length;u++){if(l.reset===!0){l.reset=!1,u=-1;continue}var g=l.orderedModifiers[u],h=g.fn,C=g.options,I=C===void 0?{}:C,$=g.name;typeof h=="function"&&(l=h({state:l,options:I,name:$,instance:f})||l)}}}},update:Gr(function(){return new Promise(function(m){f.forceUpdate(),m(l)})}),destroy:function(){d(),y=!0}};if(!oo(s,i))return f;f.setOptions(c).then(function(m){!y&&c.onFirstUpdate&&c.onFirstUpdate(m)});function P(){l.orderedModifiers.forEach(function(m){var x=m.name,R=m.options,b=R===void 0?{}:R,u=m.effect;if(typeof u=="function"){var g=u({state:l,name:x,instance:f,options:b}),h=function(){};v.push(g||h)}})}function d(){v.forEach(function(m){return m()}),v=[]}return f}}var Qr=[wr,Wr,br,pr,jr,Sr,Hr,mr,kr],Zr=Jr({defaultModifiers:Qr});function en(e){return it("MuiPopper",e)}st("MuiPopper",["root"]);const tn=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],on=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function rn(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Pt(e){return typeof e=="function"?e():e}function nn(e){return e.nodeType!==void 0}const an=()=>pt({root:["root"]},Vo(en)),sn={},pn=T.forwardRef(function(t,o){var r;const{anchorEl:n,children:a,direction:p,disablePortal:s,modifiers:i,open:c,placement:l,popperOptions:v,popperRef:y,slotProps:f={},slots:P={},TransitionProps:d}=t,m=Me(t,tn),x=T.useRef(null),R=nt(x,o),b=T.useRef(null),u=nt(b,y),g=T.useRef(u);yt(()=>{g.current=u},[u]),T.useImperativeHandle(y,()=>b.current,[]);const h=rn(l,p),[C,I]=T.useState(h),[$,E]=T.useState(Pt(n));T.useEffect(()=>{b.current&&b.current.forceUpdate()}),T.useEffect(()=>{n&&E(Pt(n))},[n]),yt(()=>{if(!$||!c)return;const z=K=>{I(K.placement)};let M=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:K})=>{z(K)}}];i!=null&&(M=M.concat(i)),v&&v.modifiers!=null&&(M=M.concat(v.modifiers));const L=Zr($,x.current,w({placement:h},v,{modifiers:M}));return g.current(L),()=>{L.destroy(),g.current(null)}},[$,s,i,c,v,h]);const A={placement:C};d!==null&&(A.TransitionProps=d);const k=an(),S=(r=P.root)!=null?r:"div",_=Fo({elementType:S,externalSlotProps:f.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:R},ownerState:t,className:k.root});return W.jsx(S,w({},_,{children:typeof a=="function"?a(A):a}))}),ln=T.forwardRef(function(t,o){const{anchorEl:r,children:n,container:a,direction:p="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:c,open:l,placement:v="bottom",popperOptions:y=sn,popperRef:f,style:P,transition:d=!1,slotProps:m={},slots:x={}}=t,R=Me(t,on),[b,u]=T.useState(!0),g=()=>{u(!1)},h=()=>{u(!0)};if(!i&&!l&&(!d||b))return null;let C;if(a)C=a;else if(r){const E=Pt(r);C=E&&nn(E)?Xt(E).body:Xt(null).body}const I=!l&&i&&(!d||b)?"none":void 0,$=d?{in:l,onEnter:g,onExited:h}:void 0;return W.jsx(Wo,{disablePortal:s,container:C,children:W.jsx(pn,w({anchorEl:r,direction:p,disablePortal:s,modifiers:c,ref:o,open:d?!b:l,placement:v,popperOptions:y,popperRef:f,slotProps:m,slots:x},R,{style:w({position:"fixed",top:0,left:0,display:I},P),TransitionProps:$,children:n}))})}),cn=ln,un=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],fn=Ae(cn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),dn=T.forwardRef(function(t,o){var r;const n=So(),a=lt({props:t,name:"MuiPopper"}),{anchorEl:p,component:s,components:i,componentsProps:c,container:l,disablePortal:v,keepMounted:y,modifiers:f,open:P,placement:d,popperOptions:m,popperRef:x,transition:R,slots:b,slotProps:u}=a,g=Me(a,un),h=(r=b==null?void 0:b.root)!=null?r:i==null?void 0:i.Root,C=w({anchorEl:p,container:l,disablePortal:v,keepMounted:y,modifiers:f,open:P,placement:d,popperOptions:m,popperRef:x,transition:R},g);return W.jsx(fn,w({as:s,direction:n==null?void 0:n.direction,slots:{root:h},slotProps:u??c},C,{ref:o}))}),yo=dn;function vn(e){return it("MuiTooltip",e)}const mn=st("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),le=mn,hn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function gn(e){return Math.round(e*1e5)/1e5}const yn=e=>{const{classes:t,disableInteractive:o,arrow:r,touch:n,placement:a}=e,p={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${no(a.split("-")[0])}`],arrow:["arrow"]};return pt(p,vn,t)},bn=Ae(yo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})(({theme:e,ownerState:t,open:o})=>w({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${le.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${le.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${le.arrow}`]:w({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${le.arrow}`]:w({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),xn=Ae("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${no(o.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>w({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Re(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${gn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${le.popper}[data-popper-placement*="left"] &`]:w({transformOrigin:"right center"},t.isRtl?w({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):w({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${le.popper}[data-popper-placement*="right"] &`]:w({transformOrigin:"left center"},t.isRtl?w({marginRight:"14px"},t.touch&&{marginRight:"24px"}):w({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${le.popper}[data-popper-placement*="top"] &`]:w({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${le.popper}[data-popper-placement*="bottom"] &`]:w({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),wn=Ae("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Re(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let tt=!1,gt=null,Ne={x:0,y:0};function ot(e,t){return o=>{t&&t(o),e(o)}}const Pn=T.forwardRef(function(t,o){var r,n,a,p,s,i,c,l,v,y,f,P,d,m,x,R,b,u,g;const h=lt({props:t,name:"MuiTooltip"}),{arrow:C=!1,children:I,components:$={},componentsProps:E={},describeChild:A=!1,disableFocusListener:k=!1,disableHoverListener:S=!1,disableInteractive:_=!1,disableTouchListener:z=!1,enterDelay:M=100,enterNextDelay:L=0,enterTouchDelay:K=700,followCursor:q=!1,id:be,leaveDelay:xe=0,leaveTouchDelay:ue=1500,onClose:fe,onOpen:re,open:J,placement:ie="bottom",PopperComponent:se,PopperProps:B={},slotProps:X={},slots:we={},title:Q,TransitionComponent:ut=_t,TransitionProps:qe}=h,Xe=Me(h,hn),Z=T.isValidElement(I)?I:W.jsx("span",{children:I}),Pe=No(),Ye=Pe.direction==="rtl",[de,Ge]=T.useState(),[Y,Oe]=T.useState(null),ve=T.useRef(!1),Te=_||q,pe=T.useRef(),me=T.useRef(),ee=T.useRef(),Se=T.useRef(),[Ke,Mt]=Lo({controlled:J,default:!1,name:"Tooltip",state:"open"});let ne=Ke;const ft=Ho(be),Le=T.useRef(),Je=T.useCallback(()=>{Le.current!==void 0&&(document.body.style.WebkitUserSelect=Le.current,Le.current=void 0),clearTimeout(Se.current)},[]);T.useEffect(()=>()=>{clearTimeout(pe.current),clearTimeout(me.current),clearTimeout(ee.current),Je()},[Je]);const At=O=>{clearTimeout(gt),tt=!0,Mt(!0),re&&!ne&&re(O)},Qe=ko(O=>{clearTimeout(gt),gt=setTimeout(()=>{tt=!1},800+xe),Mt(!1),fe&&ne&&fe(O),clearTimeout(pe.current),pe.current=setTimeout(()=>{ve.current=!1},Pe.transitions.duration.shortest)}),dt=O=>{ve.current&&O.type!=="touchstart"||(de&&de.removeAttribute("title"),clearTimeout(me.current),clearTimeout(ee.current),M||tt&&L?me.current=setTimeout(()=>{At(O)},tt?L:M):At(O))},St=O=>{clearTimeout(me.current),clearTimeout(ee.current),ee.current=setTimeout(()=>{Qe(O)},xe)},{isFocusVisibleRef:Lt,onBlur:bo,onFocus:xo,ref:wo}=Bo(),[,kt]=T.useState(!1),Bt=O=>{bo(O),Lt.current===!1&&(kt(!1),St(O))},Dt=O=>{de||Ge(O.currentTarget),xo(O),Lt.current===!0&&(kt(!0),dt(O))},jt=O=>{ve.current=!0;const N=Z.props;N.onTouchStart&&N.onTouchStart(O)},Nt=dt,Wt=St,Po=O=>{jt(O),clearTimeout(ee.current),clearTimeout(pe.current),Je(),Le.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Se.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Le.current,dt(O)},K)},Oo=O=>{Z.props.onTouchEnd&&Z.props.onTouchEnd(O),Je(),clearTimeout(ee.current),ee.current=setTimeout(()=>{Qe(O)},ue)};T.useEffect(()=>{if(!ne)return;function O(N){(N.key==="Escape"||N.key==="Esc")&&Qe(N)}return document.addEventListener("keydown",O),()=>{document.removeEventListener("keydown",O)}},[Qe,ne]);const To=nt(Z.ref,wo,Ge,o);!Q&&Q!==0&&(ne=!1);const vt=T.useRef(),Ro=O=>{const N=Z.props;N.onMouseMove&&N.onMouseMove(O),Ne={x:O.clientX,y:O.clientY},vt.current&&vt.current.update()},ke={},mt=typeof Q=="string";A?(ke.title=!ne&&mt&&!S?Q:null,ke["aria-describedby"]=ne?ft:null):(ke["aria-label"]=mt?Q:null,ke["aria-labelledby"]=ne&&!mt?ft:null);const G=w({},ke,Xe,Z.props,{className:he(Xe.className,Z.props.className),onTouchStart:jt,ref:To},q?{onMouseMove:Ro}:{}),Be={};z||(G.onTouchStart=Po,G.onTouchEnd=Oo),S||(G.onMouseOver=ot(Nt,G.onMouseOver),G.onMouseLeave=ot(Wt,G.onMouseLeave),Te||(Be.onMouseOver=Nt,Be.onMouseLeave=Wt)),k||(G.onFocus=ot(Dt,G.onFocus),G.onBlur=ot(Bt,G.onBlur),Te||(Be.onFocus=Dt,Be.onBlur=Bt));const Co=T.useMemo(()=>{var O;let N=[{name:"arrow",enabled:!!Y,options:{element:Y,padding:4}}];return(O=B.popperOptions)!=null&&O.modifiers&&(N=N.concat(B.popperOptions.modifiers)),w({},B.popperOptions,{modifiers:N})},[Y,B]),De=w({},h,{isRtl:Ye,arrow:C,disableInteractive:Te,placement:ie,PopperComponentProp:se,touch:ve.current}),ht=yn(De),Ft=(r=(n=we.popper)!=null?n:$.Popper)!=null?r:bn,Vt=(a=(p=(s=we.transition)!=null?s:$.Transition)!=null?p:ut)!=null?a:_t,Ht=(i=(c=we.tooltip)!=null?c:$.Tooltip)!=null?i:xn,Ut=(l=(v=we.arrow)!=null?v:$.Arrow)!=null?l:wn,Eo=Ze(Ft,w({},B,(y=X.popper)!=null?y:E.popper,{className:he(ht.popper,B==null?void 0:B.className,(f=(P=X.popper)!=null?P:E.popper)==null?void 0:f.className)}),De),$o=Ze(Vt,w({},qe,(d=X.transition)!=null?d:E.transition),De),Io=Ze(Ht,w({},(m=X.tooltip)!=null?m:E.tooltip,{className:he(ht.tooltip,(x=(R=X.tooltip)!=null?R:E.tooltip)==null?void 0:x.className)}),De),Mo=Ze(Ut,w({},(b=X.arrow)!=null?b:E.arrow,{className:he(ht.arrow,(u=(g=X.arrow)!=null?g:E.arrow)==null?void 0:u.className)}),De);return W.jsxs(T.Fragment,{children:[T.cloneElement(Z,G),W.jsx(Ft,w({as:se??yo,placement:ie,anchorEl:q?{getBoundingClientRect:()=>({top:Ne.y,left:Ne.x,right:Ne.x,bottom:Ne.y,width:0,height:0})}:de,popperRef:vt,open:de?ne:!1,id:ft,transition:!0},Be,Eo,{popperOptions:Co,children:({TransitionProps:O})=>W.jsx(Vt,w({timeout:Pe.transitions.duration.shorter},O,$o,{children:W.jsxs(Ht,w({},Io,{children:[Q,C?W.jsx(Ut,w({},Mo,{ref:Oe})):null]}))}))}))]})}),Un=Pn;function On(e){return it("MuiListItemIcon",e)}const Tn=st("MuiListItemIcon",["root","alignItemsFlexStart"]),ro=Tn,Rn=["className"],Cn=e=>{const{alignItems:t,classes:o}=e;return pt({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},On,o)},En=Ae("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>w({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),$n=T.forwardRef(function(t,o){const r=lt({props:t,name:"MuiListItemIcon"}),{className:n}=r,a=Me(r,Rn),p=T.useContext(bt),s=w({},r,{alignItems:p.alignItems}),i=Cn(s);return W.jsx(En,w({className:he(i.root,n),ownerState:s,ref:o},a))}),_n=$n;function In(e){return it("MuiMenuItem",e)}const Mn=st("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),We=Mn,An=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Sn=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]},Ln=e=>{const{disabled:t,dense:o,divider:r,disableGutters:n,selected:a,classes:p}=e,i=pt({root:["root",o&&"dense",t&&"disabled",!n&&"gutters",r&&"divider",a&&"selected"]},In,p);return w({},p,i)},kn=Ae(Do,{shouldForwardProp:e=>jo(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Sn})(({theme:e,ownerState:t})=>w({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${We.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Re(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${We.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Re(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${We.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Re(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Re(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${We.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${We.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${zt.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${zt.inset}`]:{marginLeft:52},[`& .${qt.root}`]:{marginTop:0,marginBottom:0},[`& .${qt.inset}`]:{paddingLeft:36},[`& .${ro.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&w({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${ro.root} svg`]:{fontSize:"1.25rem"}}))),Bn=T.forwardRef(function(t,o){const r=lt({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:a="li",dense:p=!1,divider:s=!1,disableGutters:i=!1,focusVisibleClassName:c,role:l="menuitem",tabIndex:v,className:y}=r,f=Me(r,An),P=T.useContext(bt),d=T.useMemo(()=>({dense:p||P.dense||!1,disableGutters:i}),[P.dense,p,i]),m=T.useRef(null);yt(()=>{n&&m.current&&m.current.focus()},[n]);const x=w({},r,{dense:d.dense,divider:s,disableGutters:i}),R=Ln(r),b=nt(m,o);let u;return r.disabled||(u=v!==void 0?v:-1),W.jsx(bt.Provider,{value:d,children:W.jsx(kn,w({ref:b,role:l,tabIndex:u,component:a,focusVisibleClassName:he(R.focusVisible,c),className:he(R.root,y)},f,{ownerState:x,classes:R}))})}),zn=Bn;export{_n as L,Un as M,Hn as P,zn as a,yo as b,Xo as p};
