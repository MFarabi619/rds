import{r as p,a as Gt}from"./index-BwDkhjyp.js";import{r as tt}from"./index-DxjWwZXO.js";function Z(t){return It(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(It(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function It(t){return t instanceof Node||t instanceof $(t).Node}function F(t){return t instanceof Element||t instanceof $(t).Element}function _(t){return t instanceof HTMLElement||t instanceof $(t).HTMLElement}function Et(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(r)}function Qt(t){return["table","td","th"].includes(Z(t))}function at(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function yt(t){const e=vt(),o=F(t)?B(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Zt(t){let e=Y(t);for(;_(e)&&!Q(e);){if(yt(e))return e;if(at(e))return null;e=Y(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(Z(t))}function B(t){return $(t).getComputedStyle(t)}function ut(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Y(t){if(Z(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Et(t)&&t.host||z(t);return Et(e)?e.host:e}function Wt(t){const e=Y(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&nt(e)?e:Wt(e)}function et(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Wt(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=$(r);return s?e.concat(i,i.visualViewport||[],nt(r)?r:[],i.frameElement&&o?et(i.frameElement):[]):e.concat(r,et(r,[],o))}function Jt(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:o,version:n}=e;return o+"/"+n}).join(" "):navigator.userAgent}const N=Math.min,W=Math.max,it=Math.round,ot=Math.floor,j=t=>({x:t,y:t}),te={left:"right",right:"left",bottom:"top",top:"bottom"},ee={start:"end",end:"start"};function pt(t,e,o){return W(t,N(e,o))}function K(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function $t(t){return t==="x"?"y":"x"}function bt(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(X(t))?"y":"x"}function Rt(t){return $t(q(t))}function ne(t,e,o){o===void 0&&(o=!1);const n=J(t),r=Rt(t),s=bt(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=st(i)),[i,st(i)]}function oe(t){const e=st(t);return[wt(t),e,wt(e)]}function wt(t){return t.replace(/start|end/g,e=>ee[e])}function re(t,e,o){const n=["left","right"],r=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:n:e?n:r;case"left":case"right":return e?s:i;default:return[]}}function ie(t,e,o,n){const r=J(t);let s=re(X(t),o==="start",n);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(wt)))),s}function st(t){return t.replace(/left|right|bottom|top/g,e=>te[e])}function se(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bt(t){return typeof t!="number"?se(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function At(t,e,o){let{reference:n,floating:r}=t;const s=q(e),i=Rt(e),c=bt(i),l=X(e),a=s==="y",u=n.x+n.width/2-r.width/2,m=n.y+n.height/2-r.height/2,h=n[c]/2-r[c]/2;let f;switch(l){case"top":f={x:u,y:n.y-r.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:m};break;case"left":f={x:n.x-r.width,y:m};break;default:f={x:n.x,y:n.y}}switch(J(e)){case"start":f[i]-=h*(o&&a?-1:1);break;case"end":f[i]+=h*(o&&a?-1:1);break}return f}const ce=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:i}=o,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:m}=At(a,n,l),h=n,f={},d=0;for(let g=0;g<c.length;g++){const{name:w,fn:y}=c[g],{x:v,y:x,data:b,reset:R}=await y({x:u,y:m,initialPlacement:n,placement:h,strategy:r,middlewareData:f,rects:a,platform:i,elements:{reference:t,floating:e}});u=v??u,m=x??m,f={...f,[w]:{...f[w],...b}},R&&d<=50&&(d++,typeof R=="object"&&(R.placement&&(h=R.placement),R.rects&&(a=R.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):R.rects),{x:u,y:m}=At(a,h,l)),g=-1)}return{x:u,y:m,placement:h,strategy:r,middlewareData:f}};async function dt(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:h=!1,padding:f=0}=K(e,t),d=Bt(f),w=c[h?m==="floating"?"reference":"floating":m],y=ct(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(w)))==null||o?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),v=m==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},R=ct(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:x,strategy:l}):v);return{top:(y.top-R.top+d.top)/b.y,bottom:(R.bottom-y.bottom+d.bottom)/b.y,left:(y.left-R.left+d.left)/b.x,right:(R.right-y.right+d.right)/b.x}}const le=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:s,platform:i,elements:c,middlewareData:l}=e,{element:a,padding:u=0}=K(t,e)||{};if(a==null)return{};const m=Bt(u),h={x:o,y:n},f=Rt(r),d=bt(f),g=await i.getDimensions(a),w=f==="y",y=w?"top":"left",v=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=s.reference[d]+s.reference[f]-h[f]-s.floating[d],R=h[f]-s.reference[f],E=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a));let A=E?E[x]:0;(!A||!await(i.isElement==null?void 0:i.isElement(E)))&&(A=c.floating[x]||s.floating[d]);const T=b/2-R/2,O=A/2-g[d]/2-1,P=N(m[y],O),k=N(m[v],O),M=P,V=A-g[d]-k,S=A/2-g[d]/2+T,D=pt(M,S,V),H=!l.arrow&&J(r)!=null&&S!==D&&s.reference[d]/2-(S<M?P:k)-g[d]/2<0,C=H?S<M?S-M:S-V:0;return{[f]:h[f]+C,data:{[f]:D,centerOffset:S-D-C,...H&&{alignmentOffset:C}},reset:H}}}),fe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:g=!0,...w}=K(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const y=X(r),v=q(c),x=X(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(a.floating)),R=h||(x||!g?[st(c)]:oe(c)),E=d!=="none";!h&&E&&R.push(...ie(c,g,d,b));const A=[c,...R],T=await dt(e,w),O=[];let P=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&O.push(T[y]),m){const S=ne(r,i,b);O.push(T[S[0]],T[S[1]])}if(P=[...P,{placement:r,overflows:O}],!O.every(S=>S<=0)){var k,M;const S=(((k=s.flip)==null?void 0:k.index)||0)+1,D=A[S];if(D)return{data:{index:S,overflows:P},reset:{placement:D}};let H=(M=P.filter(C=>C.overflows[0]<=0).sort((C,I)=>C.overflows[1]-I.overflows[1])[0])==null?void 0:M.placement;if(!H)switch(f){case"bestFit":{var V;const C=(V=P.filter(I=>{if(E){const L=q(I.placement);return L===v||L==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(L=>L>0).reduce((L,Kt)=>L+Kt,0)]).sort((I,L)=>I[1]-L[1])[0])==null?void 0:V[0];C&&(H=C);break}case"initialPlacement":H=c;break}if(r!==H)return{reset:{placement:H}}}return{}}}};async function ae(t,e){const{placement:o,platform:n,elements:r}=t,s=await(n.isRTL==null?void 0:n.isRTL(r.floating)),i=X(o),c=J(o),l=q(o)==="y",a=["left","top"].includes(i)?-1:1,u=s&&l?-1:1,m=K(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:d}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return c&&typeof d=="number"&&(f=c==="end"?d*-1:d),l?{x:f*u,y:h*a}:{x:h*a,y:f*u}}const ue=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:r,y:s,placement:i,middlewareData:c}=e,l=await ae(e,t);return i===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:i}}}}},de=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:s=!0,crossAxis:i=!1,limiter:c={fn:w=>{let{x:y,y:v}=w;return{x:y,y:v}}},...l}=K(t,e),a={x:o,y:n},u=await dt(e,l),m=q(X(r)),h=$t(m);let f=a[h],d=a[m];if(s){const w=h==="y"?"top":"left",y=h==="y"?"bottom":"right",v=f+u[w],x=f-u[y];f=pt(v,f,x)}if(i){const w=m==="y"?"top":"left",y=m==="y"?"bottom":"right",v=d+u[w],x=d-u[y];d=pt(v,d,x)}const g=c.fn({...e,[h]:f,[m]:d});return{...g,data:{x:g.x-o,y:g.y-n}}}}},me=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:n,platform:r,elements:s}=e,{apply:i=()=>{},...c}=K(t,e),l=await dt(e,c),a=X(o),u=J(o),m=q(o)==="y",{width:h,height:f}=n.floating;let d,g;a==="top"||a==="bottom"?(d=a,g=u===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(g=a,d=u==="end"?"top":"bottom");const w=f-l.top-l.bottom,y=h-l.left-l.right,v=N(f-l[d],w),x=N(h-l[g],y),b=!e.middlewareData.shift;let R=v,E=x;if(m?E=u||b?N(x,y):y:R=u||b?N(v,w):w,b&&!u){const T=W(l.left,0),O=W(l.right,0),P=W(l.top,0),k=W(l.bottom,0);m?E=h-2*(T!==0||O!==0?T+O:W(l.left,l.right)):R=f-2*(P!==0||k!==0?P+k:W(l.top,l.bottom))}await i({...e,availableWidth:E,availableHeight:R});const A=await r.getDimensions(s.floating);return h!==A.width||f!==A.height?{reset:{rects:!0}}:{}}}};function Vt(t){const e=B(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=_(t),s=r?t.offsetWidth:o,i=r?t.offsetHeight:n,c=it(o)!==s||it(n)!==i;return c&&(o=s,n=i),{width:o,height:n,$:c}}function Ct(t){return F(t)?t:t.contextElement}function G(t){const e=Ct(t);if(!_(e))return j(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:s}=Vt(e);let i=(s?it(o.width):o.width)/n,c=(s?it(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const ge=j(0);function Nt(t){const e=$(t);return!vt()||!e.visualViewport?ge:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function he(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==$(t)?!1:e}function U(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=Ct(t);let i=j(1);e&&(n?F(n)&&(i=G(n)):i=G(t));const c=he(s,o,n)?Nt(s):j(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,u=r.width/i.x,m=r.height/i.y;if(s){const h=$(s),f=n&&F(n)?$(n):n;let d=h,g=d.frameElement;for(;g&&n&&f!==d;){const w=G(g),y=g.getBoundingClientRect(),v=B(g),x=y.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,b=y.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,a*=w.y,u*=w.x,m*=w.y,l+=x,a+=b,d=$(g),g=d.frameElement}}return ct({width:u,height:m,x:l,y:a})}function pe(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const s=r==="fixed",i=z(n),c=e?at(e.floating):!1;if(n===i||c&&s)return o;let l={scrollLeft:0,scrollTop:0},a=j(1);const u=j(0),m=_(n);if((m||!m&&!s)&&((Z(n)!=="body"||nt(i))&&(l=ut(n)),_(n))){const h=U(n);a=G(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+u.x,y:o.y*a.y-l.scrollTop*a.y+u.y}}function we(t){return Array.from(t.getClientRects())}function _t(t){return U(z(t)).left+ut(t).scrollLeft}function xe(t){const e=z(t),o=ut(t),n=t.ownerDocument.body,r=W(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=W(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+_t(t);const c=-o.scrollTop;return B(n).direction==="rtl"&&(i+=W(e.clientWidth,n.clientWidth)-r),{width:r,height:s,x:i,y:c}}function ye(t,e){const o=$(t),n=z(t),r=o.visualViewport;let s=n.clientWidth,i=n.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const a=vt();(!a||a&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:s,height:i,x:c,y:l}}function ve(t,e){const o=U(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,s=_(t)?G(t):j(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=n*s.y;return{width:i,height:c,x:l,y:a}}function Ot(t,e,o){let n;if(e==="viewport")n=ye(t,o);else if(e==="document")n=xe(z(t));else if(F(e))n=ve(e,o);else{const r=Nt(t);n={...e,x:e.x-r.x,y:e.y-r.y}}return ct(n)}function zt(t,e){const o=Y(t);return o===e||!F(o)||Q(o)?!1:B(o).position==="fixed"||zt(o,e)}function be(t,e){const o=e.get(t);if(o)return o;let n=et(t,[],!1).filter(c=>F(c)&&Z(c)!=="body"),r=null;const s=B(t).position==="fixed";let i=s?Y(t):t;for(;F(i)&&!Q(i);){const c=B(i),l=yt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||nt(i)&&!l&&zt(t,i))?n=n.filter(u=>u!==i):r=c,i=Y(i)}return e.set(t,n),n}function Re(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const i=[...o==="clippingAncestors"?at(e)?[]:be(e,this._c):[].concat(o),n],c=i[0],l=i.reduce((a,u)=>{const m=Ot(e,u,r);return a.top=W(m.top,a.top),a.right=N(m.right,a.right),a.bottom=N(m.bottom,a.bottom),a.left=W(m.left,a.left),a},Ot(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ce(t){const{width:e,height:o}=Vt(t);return{width:e,height:o}}function Ee(t,e,o){const n=_(e),r=z(e),s=o==="fixed",i=U(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=j(0);if(n||!n&&!s)if((Z(e)!=="body"||nt(r))&&(c=ut(e)),n){const m=U(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&(l.x=_t(r));const a=i.left+c.scrollLeft-l.x,u=i.top+c.scrollTop-l.y;return{x:a,y:u,width:i.width,height:i.height}}function mt(t){return B(t).position==="static"}function St(t,e){return!_(t)||B(t).position==="fixed"?null:e?e(t):t.offsetParent}function Yt(t,e){const o=$(t);if(at(t))return o;if(!_(t)){let r=Y(t);for(;r&&!Q(r);){if(F(r)&&!mt(r))return r;r=Y(r)}return o}let n=St(t,e);for(;n&&Qt(n)&&mt(n);)n=St(n,e);return n&&Q(n)&&mt(n)&&!yt(n)?o:n||Zt(t)||o}const Ae=async function(t){const e=this.getOffsetParent||Yt,o=this.getDimensions,n=await o(t.floating);return{reference:Ee(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Oe(t){return B(t).direction==="rtl"}const Se={convertOffsetParentRelativeRectToViewportRelativeRect:pe,getDocumentElement:z,getClippingRect:Re,getOffsetParent:Yt,getElementRects:Ae,getClientRects:we,getDimensions:Ce,getScale:G,isElement:F,isRTL:Oe};function Te(t,e){let o=null,n;const r=z(t);function s(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:u,width:m,height:h}=t.getBoundingClientRect();if(c||e(),!m||!h)return;const f=ot(u),d=ot(r.clientWidth-(a+m)),g=ot(r.clientHeight-(u+h)),w=ot(a),v={rootMargin:-f+"px "+-d+"px "+-g+"px "+-w+"px",threshold:W(0,N(1,l))||1};let x=!0;function b(R){const E=R[0].intersectionRatio;if(E!==l){if(!x)return i();E?i(!1,E):n=setTimeout(()=>{i(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(b,{...v,root:r.ownerDocument})}catch{o=new IntersectionObserver(b,v)}o.observe(t)}return i(!0),s}function Ge(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=Ct(t),u=r||s?[...a?et(a):[],...et(e)]:[];u.forEach(y=>{r&&y.addEventListener("scroll",o,{passive:!0}),s&&y.addEventListener("resize",o)});const m=a&&c?Te(a,o):null;let h=-1,f=null;i&&(f=new ResizeObserver(y=>{let[v]=y;v&&v.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),o()}),a&&!l&&f.observe(a),f.observe(e));let d,g=l?U(t):null;l&&w();function w(){const y=U(t);g&&(y.x!==g.x||y.y!==g.y||y.width!==g.width||y.height!==g.height)&&o(),g=y,d=requestAnimationFrame(w)}return o(),()=>{var y;u.forEach(v=>{r&&v.removeEventListener("scroll",o),s&&v.removeEventListener("resize",o)}),m==null||m(),(y=f)==null||y.disconnect(),f=null,l&&cancelAnimationFrame(d)}}const gt=dt,Pe=ue,De=de,Me=fe,Le=me,Tt=le,Fe=(t,e,o)=>{const n=new Map,r={platform:Se,...o},s={...r.platform,_c:n};return ce(t,e,{...r,platform:s})};var rt=typeof document<"u"?p.useLayoutEffect:p.useEffect;function lt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let o,n,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(o=t.length,o!==e.length)return!1;for(n=o;n--!==0;)if(!lt(t[n],e[n]))return!1;return!0}if(r=Object.keys(t),o=r.length,o!==Object.keys(e).length)return!1;for(n=o;n--!==0;)if(!{}.hasOwnProperty.call(e,r[n]))return!1;for(n=o;n--!==0;){const s=r[n];if(!(s==="_owner"&&t.$$typeof)&&!lt(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function jt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Pt(t,e){const o=jt(t);return Math.round(e*o)/o}function Dt(t){const e=p.useRef(t);return rt(()=>{e.current=t}),e}function ke(t){t===void 0&&(t={});const{placement:e="bottom",strategy:o="absolute",middleware:n=[],platform:r,elements:{reference:s,floating:i}={},transform:c=!0,whileElementsMounted:l,open:a}=t,[u,m]=p.useState({x:0,y:0,strategy:o,placement:e,middlewareData:{},isPositioned:!1}),[h,f]=p.useState(n);lt(h,n)||f(n);const[d,g]=p.useState(null),[w,y]=p.useState(null),v=p.useCallback(C=>{C!==E.current&&(E.current=C,g(C))},[]),x=p.useCallback(C=>{C!==A.current&&(A.current=C,y(C))},[]),b=s||d,R=i||w,E=p.useRef(null),A=p.useRef(null),T=p.useRef(u),O=l!=null,P=Dt(l),k=Dt(r),M=p.useCallback(()=>{if(!E.current||!A.current)return;const C={placement:e,strategy:o,middleware:h};k.current&&(C.platform=k.current),Fe(E.current,A.current,C).then(I=>{const L={...I,isPositioned:!0};V.current&&!lt(T.current,L)&&(T.current=L,tt.flushSync(()=>{m(L)}))})},[h,e,o,k]);rt(()=>{a===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,m(C=>({...C,isPositioned:!1})))},[a]);const V=p.useRef(!1);rt(()=>(V.current=!0,()=>{V.current=!1}),[]),rt(()=>{if(b&&(E.current=b),R&&(A.current=R),b&&R){if(P.current)return P.current(b,R,M);M()}},[b,R,M,P,O]);const S=p.useMemo(()=>({reference:E,floating:A,setReference:v,setFloating:x}),[v,x]),D=p.useMemo(()=>({reference:b,floating:R}),[b,R]),H=p.useMemo(()=>{const C={position:o,left:0,top:0};if(!D.floating)return C;const I=Pt(D.floating,u.x),L=Pt(D.floating,u.y);return c?{...C,transform:"translate("+I+"px, "+L+"px)",...jt(D.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:I,top:L}},[o,c,D.floating,u.x,u.y]);return p.useMemo(()=>({...u,update:M,refs:S,elements:D,floatingStyles:H}),[u,M,S,D,H])}const He=t=>{function e(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:t,fn(o){const{element:n,padding:r}=typeof t=="function"?t(o):t;return n&&e(n)?n.current!=null?Tt({element:n.current,padding:r}).fn(o):{}:n?Tt({element:n,padding:r}).fn(o):{}}}},Ie=(t,e)=>({...Pe(t),options:[t,e]}),Qe=(t,e)=>({...De(t),options:[t,e]}),Ze=(t,e)=>({...Me(t),options:[t,e]}),Je=(t,e)=>({...Le(t),options:[t,e]}),tn=(t,e)=>({...He(t),options:[t,e]}),Xt={...Gt},We=Xt.useInsertionEffect,$e=We||(t=>t());function qt(t){const e=p.useRef(()=>{});return $e(()=>{e.current=t}),p.useCallback(function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return e.current==null?void 0:e.current(...n)},[])}var ft=typeof document<"u"?p.useLayoutEffect:p.useEffect;function xt(){return xt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},xt.apply(this,arguments)}let Mt=!1,Be=0;const Lt=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Be++;function Ve(){const[t,e]=p.useState(()=>Mt?Lt():void 0);return ft(()=>{t==null&&e(Lt())},[]),p.useEffect(()=>{Mt=!0},[]),t}const Ne=Xt.useId,Ut=Ne||Ve,en=p.forwardRef(function(e,o){const{context:{placement:n,elements:{floating:r},middlewareData:{arrow:s}},width:i=14,height:c=7,tipRadius:l=0,strokeWidth:a=0,staticOffset:u,stroke:m,d:h,style:{transform:f,...d}={},...g}=e,w=Ut(),[y,v]=p.useState(!1);if(ft(()=>{if(!r)return;B(r).direction==="rtl"&&v(!0)},[r]),!r)return null;const x=a*2,b=x/2,R=i/2*(l/-8+1),E=c/2*l/4,[A,T]=n.split("-"),O=!!h,P=A==="top"||A==="bottom",k=u&&T==="end"?"bottom":"top";let M=u&&T==="end"?"right":"left";u&&y&&(M=T==="end"?"left":"right");const V=(s==null?void 0:s.x)!=null?u||s.x:"",S=(s==null?void 0:s.y)!=null?u||s.y:"",D=h||"M0,0"+(" H"+i)+(" L"+(i-R)+","+(c-E))+(" Q"+i/2+","+c+" "+R+","+(c-E))+" Z",H={top:O?"rotate(180deg)":"",left:O?"rotate(90deg)":"rotate(-90deg)",bottom:O?"":"rotate(180deg)",right:O?"rotate(-90deg)":"rotate(90deg)"}[A];return p.createElement("svg",xt({},g,{"aria-hidden":!0,ref:o,width:O?i:i+x,height:i,viewBox:"0 0 "+i+" "+(c>i?c:i),style:{position:"absolute",pointerEvents:"none",[M]:V,[k]:S,[A]:P||O?"100%":"calc(100% - "+x/2+"px)",transform:""+H+(f??""),...d}}),x>0&&p.createElement("path",{clipPath:"url(#"+w+")",fill:"none",stroke:m,strokeWidth:x+(h?0:1),d:D}),p.createElement("path",{stroke:x&&!h?g.fill:"none",d:D}),p.createElement("clipPath",{id:w},p.createElement("rect",{x:-b,y:b*(O?-1:1),width:i+x,height:i})))});function _e(){const t=new Map;return{emit(e,o){var n;(n=t.get(e))==null||n.forEach(r=>r(o))},on(e,o){t.set(e,[...t.get(e)||[],o])},off(e,o){var n;t.set(e,((n=t.get(e))==null?void 0:n.filter(r=>r!==o))||[])}}}const ze=p.createContext(null),Ye=p.createContext(null),je=()=>{var t;return((t=p.useContext(ze))==null?void 0:t.id)||null},Xe=()=>p.useContext(Ye);function qe(t){const{open:e=!1,onOpenChange:o,elements:n}=t,r=Ut(),s=p.useRef({}),[i]=p.useState(()=>_e()),c=je()!=null,[l,a]=p.useState(n.reference),u=qt((f,d,g)=>{s.current.openEvent=f?d:void 0,i.emit("openchange",{open:f,event:d,reason:g,nested:c}),o==null||o(f,d,g)}),m=p.useMemo(()=>({setPositionReference:a}),[]),h=p.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return p.useMemo(()=>({dataRef:s,open:e,onOpenChange:u,elements:h,events:i,floatingId:r,refs:m}),[e,u,h,i,r,m])}function nn(t){t===void 0&&(t={});const{nodeId:e}=t,o=qe({...t,elements:{reference:null,floating:null,...t.elements}}),n=t.rootContext||o,r=n.elements,[s,i]=p.useState(null),[c,l]=p.useState(null),u=(r==null?void 0:r.reference)||s,m=p.useRef(null),h=Xe();ft(()=>{u&&(m.current=u)},[u]);const f=ke({...t,elements:{...r,...c&&{reference:c}}}),d=p.useCallback(x=>{const b=F(x)?{getBoundingClientRect:()=>x.getBoundingClientRect(),contextElement:x}:x;l(b),f.refs.setReference(b)},[f.refs]),g=p.useCallback(x=>{(F(x)||x===null)&&(m.current=x,i(x)),(F(f.refs.reference.current)||f.refs.reference.current===null||x!==null&&!F(x))&&f.refs.setReference(x)},[f.refs]),w=p.useMemo(()=>({...f.refs,setReference:g,setPositionReference:d,domReference:m}),[f.refs,g,d]),y=p.useMemo(()=>({...f.elements,domReference:u}),[f.elements,u]),v=p.useMemo(()=>({...f,...n,refs:w,elements:y,nodeId:e}),[f,w,y,e,n]);return ft(()=>{n.dataRef.current.floatingContext=v;const x=h==null?void 0:h.nodesRef.current.find(b=>b.id===e);x&&(x.context=v)}),p.useMemo(()=>({...f,context:v,refs:w,elements:y}),[f,w,y,v])}const Ft="active",kt="selected";function ht(t,e,o){const n=new Map,r=o==="item";let s=t;if(r&&t){const{[Ft]:i,[kt]:c,...l}=t;s=l}return{...o==="floating"&&{tabIndex:-1},...s,...e.map(i=>{const c=i?i[o]:null;return typeof c=="function"?t?c(t):null:c}).concat(t).reduce((i,c)=>(c&&Object.entries(c).forEach(l=>{let[a,u]=l;if(!(r&&[Ft,kt].includes(a)))if(a.indexOf("on")===0){if(n.has(a)||n.set(a,[]),typeof u=="function"){var m;(m=n.get(a))==null||m.push(u),i[a]=function(){for(var h,f=arguments.length,d=new Array(f),g=0;g<f;g++)d[g]=arguments[g];return(h=n.get(a))==null?void 0:h.map(w=>w(...d)).find(w=>w!==void 0)}}}else i[a]=u}),i),{})}}function on(t){t===void 0&&(t=[]);const e=t.map(c=>c==null?void 0:c.reference),o=t.map(c=>c==null?void 0:c.floating),n=t.map(c=>c==null?void 0:c.item),r=p.useCallback(c=>ht(c,t,"reference"),e),s=p.useCallback(c=>ht(c,t,"floating"),o),i=p.useCallback(c=>ht(c,t,"item"),n);return p.useMemo(()=>({getReferenceProps:r,getFloatingProps:s,getItemProps:i}),[r,s,i])}function Ht(t,e){return{...t,rects:{...t.rects,floating:{...t.rects.floating,height:e}}}}const rn=t=>({name:"inner",options:t,async fn(e){const{listRef:o,overflowRef:n,onFallbackChange:r,offset:s=0,index:i=0,minItemsVisible:c=4,referenceOverflowThreshold:l=0,scrollRef:a,...u}=K(t,e),{rects:m,elements:{floating:h}}=e,f=o.current[i];if(!f)return{};const d={...e,...await Ie(-f.offsetTop-h.clientTop-m.reference.height/2-f.offsetHeight/2-s).fn(e)},g=(a==null?void 0:a.current)||h,w=await gt(Ht(d,g.scrollHeight),u),y=await gt(d,{...u,elementContext:"reference"}),v=Math.max(0,w.top),x=d.y+v,b=Math.max(0,g.scrollHeight-v-Math.max(0,w.bottom));return g.style.maxHeight=b+"px",g.scrollTop=v,r&&(g.offsetHeight<f.offsetHeight*Math.min(c,o.current.length-1)-1||y.top>=-l||y.bottom>=-l?tt.flushSync(()=>r(!0)):tt.flushSync(()=>r(!1))),n&&(n.current=await gt(Ht({...d,y:x},g.offsetHeight),u)),{y:x}}});function sn(t,e){const{open:o,elements:n}=t,{enabled:r=!0,overflowRef:s,scrollRef:i,onChange:c}=e,l=qt(c),a=p.useRef(!1),u=p.useRef(null),m=p.useRef(null);p.useEffect(()=>{if(!r)return;function f(g){if(g.ctrlKey||!d||s.current==null)return;const w=g.deltaY,y=s.current.top>=-.5,v=s.current.bottom>=-.5,x=d.scrollHeight-d.clientHeight,b=w<0?-1:1,R=w<0?"max":"min";d.scrollHeight<=d.clientHeight||(!y&&w>0||!v&&w<0?(g.preventDefault(),tt.flushSync(()=>{l(E=>E+Math[R](w,x*b))})):/firefox/i.test(Jt())&&(d.scrollTop+=w))}const d=(i==null?void 0:i.current)||n.floating;if(o&&d)return d.addEventListener("wheel",f),requestAnimationFrame(()=>{u.current=d.scrollTop,s.current!=null&&(m.current={...s.current})}),()=>{u.current=null,m.current=null,d.removeEventListener("wheel",f)}},[r,o,n.floating,s,i,l]);const h=p.useMemo(()=>({onKeyDown(){a.current=!0},onWheel(){a.current=!1},onPointerMove(){a.current=!1},onScroll(){const f=(i==null?void 0:i.current)||n.floating;if(!(!s.current||!f||!a.current)){if(u.current!==null){const d=f.scrollTop-u.current;(s.current.bottom<-.5&&d<-1||s.current.top<-.5&&d>1)&&tt.flushSync(()=>l(g=>g+d))}requestAnimationFrame(()=>{u.current=f.scrollTop})}}}),[n.floating,l,s,i]);return p.useMemo(()=>r?{floating:h}:{},[r,h])}export{en as F,Je as a,Ge as b,sn as c,on as d,tn as e,Ze as f,rn as i,Ie as o,Qe as s,nn as u};
