import{r as a,R as h}from"./index-4g5l5LRQ.js";import{n as re,f as oe,e as me,N as be,E as Pe,y as Se,I as K,a as ce,b as ee,s as te,O as L,M as N,c as ye,h as Ee,T as ge,o as G,r as pe,d as $e,g as _,i as ne}from"./use-root-containers-zPP06tnb.js";import{O as Q,U as z,y as U,T as Ie,s as ie,o as E,a as Te,u as A,d as q,C as j,b as de,I as he,l as xe}from"./transition-Gh--TBV_.js";import{T as Me}from"./use-resolve-button-type-39X7o1GN.js";var Ce=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ce||{}),we=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(we||{});let Oe={0:e=>{let o={...e,popoverState:A(e.popoverState,{0:1,1:0})};return o.popoverState===0&&(o.__demoMode=!1),o},1(e){return e.popoverState===1?e:{...e,popoverState:1}},2(e,o){return e.button===o.button?e:{...e,button:o.button}},3(e,o){return e.buttonId===o.buttonId?e:{...e,buttonId:o.buttonId}},4(e,o){return e.panel===o.panel?e:{...e,panel:o.panel}},5(e,o){return e.panelId===o.panelId?e:{...e,panelId:o.panelId}}},le=a.createContext(null);le.displayName="PopoverContext";function X(e){let o=a.useContext(le);if(o===null){let v=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,X),v}return o}let ae=a.createContext(null);ae.displayName="PopoverAPIContext";function ue(e){let o=a.useContext(ae);if(o===null){let v=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,ue),v}return o}let se=a.createContext(null);se.displayName="PopoverGroupContext";function fe(){return a.useContext(se)}let Z=a.createContext(null);Z.displayName="PopoverPanelContext";function Fe(){return a.useContext(Z)}function ke(e,o){return A(o.type,Oe,e,o)}let Be="div";function Re(e,o){var v;let{__demoMode:g=!1,...x}=e,l=a.useRef(null),t=U(o,Ie(u=>{l.current=u})),m=a.useRef([]),b=a.useReducer(ke,{__demoMode:g,popoverState:g?0:1,buttons:m,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:a.createRef(),afterPanelSentinel:a.createRef()}),[{popoverState:P,button:i,buttonId:$,panel:r,panelId:R,beforePanelSentinel:C,afterPanelSentinel:S},s]=b,d=re((v=l.current)!=null?v:i),M=a.useMemo(()=>{if(!i||!r)return!1;for(let J of document.querySelectorAll("body > *"))if(Number(J==null?void 0:J.contains(i))^Number(J==null?void 0:J.contains(r)))return!0;let u=oe(),w=u.indexOf(i),V=(w+u.length-1)%u.length,W=(w+1)%u.length,Y=u[V],ve=u[W];return!r.contains(Y)&&!r.contains(ve)},[i,r]),O=ie($),k=ie(R),B=a.useMemo(()=>({buttonId:O,panelId:k,close:()=>s({type:1})}),[O,k,s]),F=fe(),D=F==null?void 0:F.registerPopover,c=E(()=>{var u;return(u=F==null?void 0:F.isFocusWithinPopoverGroup())!=null?u:(d==null?void 0:d.activeElement)&&((i==null?void 0:i.contains(d.activeElement))||(r==null?void 0:r.contains(d.activeElement)))});a.useEffect(()=>D==null?void 0:D(B),[D,B]);let[I,f]=me(),n=be({mainTreeNodeRef:F==null?void 0:F.mainTreeNodeRef,portals:I,defaultContainers:[i,r]});Pe(d==null?void 0:d.defaultView,"focus",u=>{var w,V,W,Y;u.target!==window&&u.target instanceof HTMLElement&&P===0&&(c()||i&&r&&(n.contains(u.target)||(V=(w=C.current)==null?void 0:w.contains)!=null&&V.call(w,u.target)||(Y=(W=S.current)==null?void 0:W.contains)!=null&&Y.call(W,u.target)||s({type:1})))},!0),Se(n.resolveContainers,(u,w)=>{s({type:1}),Ee(w,ge.Loose)||(u.preventDefault(),i==null||i.focus())},P===0);let p=E(u=>{s({type:1});let w=u?u instanceof HTMLElement?u:"current"in u&&u.current instanceof HTMLElement?u.current:i:i;w==null||w.focus()}),T=a.useMemo(()=>({close:p,isPortalled:M}),[p,M]),y=a.useMemo(()=>({open:P===0,close:p}),[P,p]),H={ref:t};return h.createElement(Z.Provider,{value:null},h.createElement(le.Provider,{value:b},h.createElement(ae.Provider,{value:T},h.createElement(Te,{value:A(P,{0:q.Open,1:q.Closed})},h.createElement(f,null,j({ourProps:H,theirProps:x,slot:y,defaultTag:Be,name:"Popover"}),h.createElement(n.MainTreeNode,null))))))}let De="button";function Ne(e,o){let v=K(),{id:g=`headlessui-popover-button-${v}`,...x}=e,[l,t]=X("Popover.Button"),{isPortalled:m}=ue("Popover.Button"),b=a.useRef(null),P=`headlessui-focus-sentinel-${K()}`,i=fe(),$=i==null?void 0:i.closeOthers,r=Fe()!==null;a.useEffect(()=>{if(!r)return t({type:3,buttonId:g}),()=>{t({type:3,buttonId:null})}},[r,g,t]);let[R]=a.useState(()=>Symbol()),C=U(b,o,r?null:n=>{if(n)l.buttons.current.push(R);else{let p=l.buttons.current.indexOf(R);p!==-1&&l.buttons.current.splice(p,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),n&&t({type:2,button:n})}),S=U(b,o),s=re(b),d=E(n=>{var p,T,y;if(r){if(l.popoverState===1)return;switch(n.key){case G.Space:case G.Enter:n.preventDefault(),(T=(p=n.target).click)==null||T.call(p),t({type:1}),(y=l.button)==null||y.focus();break}}else switch(n.key){case G.Space:case G.Enter:n.preventDefault(),n.stopPropagation(),l.popoverState===1&&($==null||$(l.buttonId)),t({type:0});break;case G.Escape:if(l.popoverState!==0)return $==null?void 0:$(l.buttonId);if(!b.current||s!=null&&s.activeElement&&!b.current.contains(s.activeElement))return;n.preventDefault(),n.stopPropagation(),t({type:1});break}}),M=E(n=>{r||n.key===G.Space&&n.preventDefault()}),O=E(n=>{var p,T;pe(n.currentTarget)||e.disabled||(r?(t({type:1}),(p=l.button)==null||p.focus()):(n.preventDefault(),n.stopPropagation(),l.popoverState===1&&($==null||$(l.buttonId)),t({type:0}),(T=l.button)==null||T.focus()))}),k=E(n=>{n.preventDefault(),n.stopPropagation()}),B=l.popoverState===0,F=a.useMemo(()=>({open:B}),[B]),D=Me(e,b),c=r?{ref:S,type:D,onKeyDown:d,onClick:O}:{ref:C,id:l.buttonId,type:D,"aria-expanded":l.popoverState===0,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:d,onKeyUp:M,onClick:O,onMouseDown:k},I=ce(),f=E(()=>{let n=l.panel;if(!n)return;function p(){A(I.current,{[_.Forwards]:()=>L(n,N.First),[_.Backwards]:()=>L(n,N.Last)})===ne.Error&&L(oe().filter(T=>T.dataset.headlessuiFocusGuard!=="true"),A(I.current,{[_.Forwards]:N.Next,[_.Backwards]:N.Previous}),{relativeTo:l.button})}p()});return h.createElement(h.Fragment,null,j({ourProps:c,theirProps:x,slot:F,defaultTag:De,name:"Popover.Button"}),B&&!r&&m&&h.createElement(ee,{id:P,features:te.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:f}))}let _e="div",Ge=Q.RenderStrategy|Q.Static;function Le(e,o){let v=K(),{id:g=`headlessui-popover-overlay-${v}`,...x}=e,[{popoverState:l},t]=X("Popover.Overlay"),m=U(o),b=de(),P=b!==null?(b&q.Open)===q.Open:l===0,i=E(r=>{if(pe(r.currentTarget))return r.preventDefault();t({type:1})}),$=a.useMemo(()=>({open:l===0}),[l]);return j({ourProps:{ref:m,id:g,"aria-hidden":!0,onClick:i},theirProps:x,slot:$,defaultTag:_e,features:Ge,visible:P,name:"Popover.Overlay"})}let Ae="div",Ke=Q.RenderStrategy|Q.Static;function Ue(e,o){let v=K(),{id:g=`headlessui-popover-panel-${v}`,focus:x=!1,...l}=e,[t,m]=X("Popover.Panel"),{close:b,isPortalled:P}=ue("Popover.Panel"),i=`headlessui-focus-sentinel-before-${K()}`,$=`headlessui-focus-sentinel-after-${K()}`,r=a.useRef(null),R=U(r,o,c=>{m({type:4,panel:c})}),C=re(r),S=he();xe(()=>(m({type:5,panelId:g}),()=>{m({type:5,panelId:null})}),[g,m]);let s=de(),d=s!==null?(s&q.Open)===q.Open:t.popoverState===0,M=E(c=>{var I;switch(c.key){case G.Escape:if(t.popoverState!==0||!r.current||C!=null&&C.activeElement&&!r.current.contains(C.activeElement))return;c.preventDefault(),c.stopPropagation(),m({type:1}),(I=t.button)==null||I.focus();break}});a.useEffect(()=>{var c;e.static||t.popoverState===1&&((c=e.unmount)==null||c)&&m({type:4,panel:null})},[t.popoverState,e.unmount,e.static,m]),a.useEffect(()=>{if(t.__demoMode||!x||t.popoverState!==0||!r.current)return;let c=C==null?void 0:C.activeElement;r.current.contains(c)||L(r.current,N.First)},[t.__demoMode,x,r,t.popoverState]);let O=a.useMemo(()=>({open:t.popoverState===0,close:b}),[t,b]),k={ref:R,id:g,onKeyDown:M,onBlur:x&&t.popoverState===0?c=>{var I,f,n,p,T;let y=c.relatedTarget;y&&r.current&&((I=r.current)!=null&&I.contains(y)||(m({type:1}),((n=(f=t.beforePanelSentinel.current)==null?void 0:f.contains)!=null&&n.call(f,y)||(T=(p=t.afterPanelSentinel.current)==null?void 0:p.contains)!=null&&T.call(p,y))&&y.focus({preventScroll:!0})))}:void 0,tabIndex:-1},B=ce(),F=E(()=>{let c=r.current;if(!c)return;function I(){A(B.current,{[_.Forwards]:()=>{var f;L(c,N.First)===ne.Error&&((f=t.afterPanelSentinel.current)==null||f.focus())},[_.Backwards]:()=>{var f;(f=t.button)==null||f.focus({preventScroll:!0})}})}I()}),D=E(()=>{let c=r.current;if(!c)return;function I(){A(B.current,{[_.Forwards]:()=>{var f;if(!t.button)return;let n=oe(),p=n.indexOf(t.button),T=n.slice(0,p+1),y=[...n.slice(p+1),...T];for(let H of y.slice())if(H.dataset.headlessuiFocusGuard==="true"||(f=t.panel)!=null&&f.contains(H)){let u=y.indexOf(H);u!==-1&&y.splice(u,1)}L(y,N.First,{sorted:!1})},[_.Backwards]:()=>{var f;L(c,N.Previous)===ne.Error&&((f=t.button)==null||f.focus())}})}I()});return h.createElement(Z.Provider,{value:g},d&&P&&h.createElement(ee,{id:i,ref:t.beforePanelSentinel,features:te.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:F}),j({mergeRefs:S,ourProps:k,theirProps:l,slot:O,defaultTag:Ae,features:Ke,visible:d,name:"Popover.Panel"}),d&&P&&h.createElement(ee,{id:$,ref:t.afterPanelSentinel,features:te.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}))}let qe="div";function He(e,o){let v=a.useRef(null),g=U(v,o),[x,l]=a.useState([]),t=ye(),m=E(S=>{l(s=>{let d=s.indexOf(S);if(d!==-1){let M=s.slice();return M.splice(d,1),M}return s})}),b=E(S=>(l(s=>[...s,S]),()=>m(S))),P=E(()=>{var S;let s=$e(v);if(!s)return!1;let d=s.activeElement;return(S=v.current)!=null&&S.contains(d)?!0:x.some(M=>{var O,k;return((O=s.getElementById(M.buttonId.current))==null?void 0:O.contains(d))||((k=s.getElementById(M.panelId.current))==null?void 0:k.contains(d))})}),i=E(S=>{for(let s of x)s.buttonId.current!==S&&s.close()}),$=a.useMemo(()=>({registerPopover:b,unregisterPopover:m,isFocusWithinPopoverGroup:P,closeOthers:i,mainTreeNodeRef:t.mainTreeNodeRef}),[b,m,P,i,t.mainTreeNodeRef]),r=a.useMemo(()=>({}),[]),R=e,C={ref:g};return h.createElement(se.Provider,{value:$},j({ourProps:C,theirProps:R,slot:r,defaultTag:qe,name:"Popover.Group"}),h.createElement(t.MainTreeNode,null))}let We=z(Re),ze=z(Ne),je=z(Le),Ve=z(Ue),Ye=z(He),et=Object.assign(We,{Button:ze,Overlay:je,Panel:Ve,Group:Ye});export{et as C};
