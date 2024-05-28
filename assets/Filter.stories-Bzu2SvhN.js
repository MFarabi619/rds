import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{R,r as d}from"./index-uCp2LrAq.js";import{u as Ie}from"./useLinkContext-CZLCmVqQ.js";import{F as we,u as je,c as S,f as Se,_ as re}from"./dialog-BPTkW0wY.js";import{O as q,U as D,y as N,T as Fe,o as g,a as pe,u as C,d as F,C as P,I as he,b as xe,p as ve,l as Q,c as z,q as T}from"./transition-N1W5q1s7.js";import{I as E,T as be,d as Re,o as b,r as ge,y as De,n as Ne,h as Pe,c as Te,_ as Ce,M as ne,D as ye,j as Ee}from"./use-root-containers-D3GjGQxH.js";import{F as V}from"./ChevronDownIcon-ZcFOsVdi.js";import{C as M}from"./popover-DDyjg4ay.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";var ae;let $e=(ae=R.startTransition)!=null?ae:function(e){e()};var Me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Me||{}),Ae=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Ae||{});let _e={0:e=>({...e,disclosureState:C(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},3(e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},J=d.createContext(null);J.displayName="DisclosureContext";function X(e){let n=d.useContext(J);if(n===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,X),i}return n}let Y=d.createContext(null);Y.displayName="DisclosureAPIContext";function ke(e){let n=d.useContext(Y);if(n===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,ke),i}return n}let Z=d.createContext(null);Z.displayName="DisclosurePanelContext";function Le(){return d.useContext(Z)}function Be(e,n){return C(n.type,_e,e,n)}let qe=d.Fragment;function Oe(e,n){let{defaultOpen:i=!1,...l}=e,u=d.useRef(null),s=N(n,Fe(f=>{u.current=f},e.as===void 0||e.as===d.Fragment)),o=d.useRef(null),r=d.useRef(null),m=d.useReducer(Be,{disclosureState:i?0:1,linkedPanel:!1,buttonRef:r,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:p,buttonId:v},y]=m,h=g(f=>{y({type:1});let x=Re(u);if(!x||!v)return;let a=f?f instanceof HTMLElement?f:f.current instanceof HTMLElement?f.current:x.getElementById(v):x.getElementById(v);a==null||a.focus()}),k=d.useMemo(()=>({close:h}),[h]),I=d.useMemo(()=>({open:p===0,close:h}),[p,h]),c={ref:s};return R.createElement(J.Provider,{value:m},R.createElement(Y.Provider,{value:k},R.createElement(pe,{value:C(p,{0:F.Open,1:F.Closed})},P({ourProps:c,theirProps:l,slot:I,defaultTag:qe,name:"Disclosure"}))))}let Ue="button";function Ke(e,n){let i=E(),{id:l=`headlessui-disclosure-button-${i}`,...u}=e,[s,o]=X("Disclosure.Button"),r=Le(),m=r===null?!1:r===s.panelId,p=d.useRef(null),v=N(p,n,m?null:s.buttonRef),y=he();d.useEffect(()=>{if(!m)return o({type:2,buttonId:l}),()=>{o({type:2,buttonId:null})}},[l,o,m]);let h=g(a=>{var j;if(m){if(s.disclosureState===1)return;switch(a.key){case b.Space:case b.Enter:a.preventDefault(),a.stopPropagation(),o({type:0}),(j=s.buttonRef.current)==null||j.focus();break}}else switch(a.key){case b.Space:case b.Enter:a.preventDefault(),a.stopPropagation(),o({type:0});break}}),k=g(a=>{switch(a.key){case b.Space:a.preventDefault();break}}),I=g(a=>{var j;ge(a.currentTarget)||e.disabled||(m?(o({type:0}),(j=s.buttonRef.current)==null||j.focus()):o({type:0}))}),c=d.useMemo(()=>({open:s.disclosureState===0}),[s]),f=be(e,p),x=m?{ref:v,type:f,onKeyDown:h,onClick:I}:{ref:v,id:l,type:f,"aria-expanded":s.disclosureState===0,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:h,onKeyUp:k,onClick:I};return P({mergeRefs:y,ourProps:x,theirProps:u,slot:c,defaultTag:Ue,name:"Disclosure.Button"})}let Qe="div",Ve=q.RenderStrategy|q.Static;function We(e,n){let i=E(),{id:l=`headlessui-disclosure-panel-${i}`,...u}=e,[s,o]=X("Disclosure.Panel"),{close:r}=ke("Disclosure.Panel"),m=he(),p=N(n,s.panelRef,I=>{$e(()=>o({type:I?4:5}))});d.useEffect(()=>(o({type:3,panelId:l}),()=>{o({type:3,panelId:null})}),[l,o]);let v=xe(),y=v!==null?(v&F.Open)===F.Open:s.disclosureState===0,h=d.useMemo(()=>({open:s.disclosureState===0,close:r}),[s,r]),k={ref:p,id:l};return R.createElement(Z.Provider,{value:s.panelId},P({mergeRefs:m,ourProps:k,theirProps:u,slot:h,defaultTag:Qe,features:Ve,visible:y,name:"Disclosure.Panel"}))}let He=D(Oe),ze=D(Ke),Ge=D(We),W=Object.assign(He,{Button:ze,Panel:Ge}),le=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function se(e){var n,i;let l=(n=e.innerText)!=null?n:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return l;let s=!1;for(let r of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))r.remove(),s=!0;let o=s?(i=u.innerText)!=null?i:"":l;return le.test(o)&&(o=o.replace(le,"")),o}function Je(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let i=e.getAttribute("aria-labelledby");if(i){let l=i.split(" ").map(u=>{let s=document.getElementById(u);if(s){let o=s.getAttribute("aria-label");return typeof o=="string"?o.trim():se(s).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return se(e).trim()}function Xe(e){let n=d.useRef(""),i=d.useRef("");return g(()=>{let l=e.current;if(!l)return"";let u=l.innerText;if(n.current===u)return i.current;let s=Je(l).trim().toLowerCase();return n.current=u,i.current=s,s})}var Ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ye||{}),Ze=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ze||{}),et=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(et||{});function H(e,n=i=>i){let i=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,l=Ee(n(e.items.slice()),s=>s.dataRef.current.domRef.current),u=i?l.indexOf(i):null;return u===-1&&(u=null),{items:l,activeItemIndex:u}}let tt={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,n)=>{var i;let l=H(e),u=Se(n,{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...l,searchQuery:"",activeItemIndex:u,activationTrigger:(i=n.trigger)!=null?i:1}},3:(e,n)=>{let i=e.searchQuery!==""?0:1,l=e.searchQuery+n.value.toLowerCase(),u=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+i).concat(e.items.slice(0,e.activeItemIndex+i)):e.items).find(o=>{var r;return((r=o.dataRef.current.textValue)==null?void 0:r.startsWith(l))&&!o.dataRef.current.disabled}),s=u?e.items.indexOf(u):-1;return s===-1||s===e.activeItemIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeItemIndex:s,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,n)=>{let i=H(e,l=>[...l,{id:n.id,dataRef:n.dataRef}]);return{...e,...i}},6:(e,n)=>{let i=H(e,l=>{let u=l.findIndex(s=>s.id===n.id);return u!==-1&&l.splice(u,1),l});return{...e,...i,activationTrigger:1}}},ee=d.createContext(null);ee.displayName="MenuContext";function O(e){let n=d.useContext(ee);if(n===null){let i=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,O),i}return n}function rt(e,n){return C(n.type,tt,e,n)}let nt=d.Fragment;function at(e,n){let{__demoMode:i=!1,...l}=e,u=d.useReducer(rt,{__demoMode:i,menuState:i?0:1,buttonRef:d.createRef(),itemsRef:d.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:s,itemsRef:o,buttonRef:r},m]=u,p=N(n);De([r,o],(k,I)=>{var c;m({type:1}),Pe(I,Te.Loose)||(k.preventDefault(),(c=r.current)==null||c.focus())},s===0);let v=g(()=>{m({type:1})}),y=d.useMemo(()=>({open:s===0,close:v}),[s,v]),h={ref:p};return R.createElement(ee.Provider,{value:u},R.createElement(pe,{value:C(s,{0:F.Open,1:F.Closed})},P({ourProps:h,theirProps:l,slot:y,defaultTag:nt,name:"Menu"})))}let lt="button";function st(e,n){var i;let l=E(),{id:u=`headlessui-menu-button-${l}`,...s}=e,[o,r]=O("Menu.Button"),m=N(o.buttonRef,n),p=ve(),v=g(c=>{switch(c.key){case b.Space:case b.Enter:case b.ArrowDown:c.preventDefault(),c.stopPropagation(),r({type:0}),p.nextFrame(()=>r({type:2,focus:S.First}));break;case b.ArrowUp:c.preventDefault(),c.stopPropagation(),r({type:0}),p.nextFrame(()=>r({type:2,focus:S.Last}));break}}),y=g(c=>{switch(c.key){case b.Space:c.preventDefault();break}}),h=g(c=>{if(ge(c.currentTarget))return c.preventDefault();e.disabled||(o.menuState===0?(r({type:1}),p.nextFrame(()=>{var f;return(f=o.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})})):(c.preventDefault(),r({type:0})))}),k=d.useMemo(()=>({open:o.menuState===0}),[o]),I={ref:m,id:u,type:be(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":(i=o.itemsRef.current)==null?void 0:i.id,"aria-expanded":o.menuState===0,onKeyDown:v,onKeyUp:y,onClick:h};return P({ourProps:I,theirProps:s,slot:k,defaultTag:lt,name:"Menu.Button"})}let it="div",ot=q.RenderStrategy|q.Static;function ut(e,n){var i,l;let u=E(),{id:s=`headlessui-menu-items-${u}`,...o}=e,[r,m]=O("Menu.Items"),p=N(r.itemsRef,n),v=Ne(r.itemsRef),y=ve(),h=xe(),k=h!==null?(h&F.Open)===F.Open:r.menuState===0;d.useEffect(()=>{let a=r.itemsRef.current;a&&r.menuState===0&&a!==(v==null?void 0:v.activeElement)&&a.focus({preventScroll:!0})},[r.menuState,r.itemsRef,v]),we({container:r.itemsRef.current,enabled:r.menuState===0,accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let I=g(a=>{var j,$;switch(y.dispose(),a.key){case b.Space:if(r.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),m({type:3,value:a.key});case b.Enter:if(a.preventDefault(),a.stopPropagation(),m({type:1}),r.activeItemIndex!==null){let{dataRef:w}=r.items[r.activeItemIndex];($=(j=w.current)==null?void 0:j.domRef.current)==null||$.click()}ye(r.buttonRef.current);break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),m({type:2,focus:S.Next});case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),m({type:2,focus:S.Previous});case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),m({type:2,focus:S.First});case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),m({type:2,focus:S.Last});case b.Escape:a.preventDefault(),a.stopPropagation(),m({type:1}),z().nextFrame(()=>{var w;return(w=r.buttonRef.current)==null?void 0:w.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),m({type:1}),z().nextFrame(()=>{Ce(r.buttonRef.current,a.shiftKey?ne.Previous:ne.Next)});break;default:a.key.length===1&&(m({type:3,value:a.key}),y.setTimeout(()=>m({type:4}),350));break}}),c=g(a=>{switch(a.key){case b.Space:a.preventDefault();break}}),f=d.useMemo(()=>({open:r.menuState===0}),[r]),x={"aria-activedescendant":r.activeItemIndex===null||(i=r.items[r.activeItemIndex])==null?void 0:i.id,"aria-labelledby":(l=r.buttonRef.current)==null?void 0:l.id,id:s,onKeyDown:I,onKeyUp:c,role:"menu",tabIndex:0,ref:p};return P({ourProps:x,theirProps:o,slot:f,defaultTag:it,features:ot,visible:k,name:"Menu.Items"})}let ct=d.Fragment;function dt(e,n){let i=E(),{id:l=`headlessui-menu-item-${i}`,disabled:u=!1,...s}=e,[o,r]=O("Menu.Item"),m=o.activeItemIndex!==null?o.items[o.activeItemIndex].id===l:!1,p=d.useRef(null),v=N(n,p);Q(()=>{if(o.__demoMode||o.menuState!==0||!m||o.activationTrigger===0)return;let w=z();return w.requestAnimationFrame(()=>{var K,te;(te=(K=p.current)==null?void 0:K.scrollIntoView)==null||te.call(K,{block:"nearest"})}),w.dispose},[o.__demoMode,p,m,o.menuState,o.activationTrigger,o.activeItemIndex]);let y=Xe(p),h=d.useRef({disabled:u,domRef:p,get textValue(){return y()}});Q(()=>{h.current.disabled=u},[h,u]),Q(()=>(r({type:5,id:l,dataRef:h}),()=>r({type:6,id:l})),[h,l]);let k=g(()=>{r({type:1})}),I=g(w=>{if(u)return w.preventDefault();r({type:1}),ye(o.buttonRef.current)}),c=g(()=>{if(u)return r({type:2,focus:S.Nothing});r({type:2,focus:S.Specific,id:l})}),f=je(),x=g(w=>f.update(w)),a=g(w=>{f.wasMoved(w)&&(u||m||r({type:2,focus:S.Specific,id:l,trigger:0}))}),j=g(w=>{f.wasMoved(w)&&(u||m&&r({type:2,focus:S.Nothing}))}),$=d.useMemo(()=>({active:m,disabled:u,close:k}),[m,u,k]);return P({ourProps:{id:l,ref:v,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:I,onFocus:c,onPointerEnter:x,onMouseEnter:x,onPointerMove:a,onMouseMove:a,onPointerLeave:j,onMouseLeave:j},theirProps:s,slot:$,defaultTag:ct,name:"Menu.Item"})}let mt=D(at),ft=D(st),pt=D(ut),ht=D(dt),A=Object.assign(mt,{Button:ft,Items:pt,Item:ht});function xt({title:e,titleId:n,...i},l){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":n},i),e?d.createElement("title",{id:n},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const vt=d.forwardRef(xt),_={dropDownTitles:"inline-flex justify-center text-sm font-medium text-cu-black-800 group hover:text-cu-red",chevron:"flex-shrink-0 w-5 h-5 ml-1 text-cu-black-300 group-hover:text-cu-black-600"};function ie(...e){return e.filter(Boolean).join(" ")}const U=({sortOptions:e,filters:n,callback:i})=>{const[l,u]=d.useState(!1),[s,o]=d.useState(""),[r,m]=d.useState([]),p=c=>r.includes(c),[v,y]=d.useState([]),h=c=>{const f=c;return r.includes(f)?m([...r].filter(x=>x!==f)):m([...r,f])},k=c=>{const f=c;return m([...r].filter(x=>x!==f))};d.useEffect(()=>{o(s),y(r)},[s,r]),d.useEffect(()=>{i(r)},[r,i]);const I=Ie();return t.jsxs("div",{className:"cu-filter cu-component-spacing not-prose",children:[t.jsx(T.Root,{show:l,as:d.Fragment,children:t.jsxs(re,{as:"div",className:"relative z-40 sm:hidden",onClose:u,children:[t.jsx(T.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),t.jsx("div",{className:"fixed inset-0 z-40 flex",children:t.jsx(T.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:t.jsxs(re.Panel,{className:"relative flex flex-col w-full h-full max-w-xs ml-auto overflow-y-auto bg-white shadow-xl",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-cu-black-50",children:[t.jsx("h2",{className:"text-base font-medium text-cu-black-800",children:"Filters"}),t.jsxs("button",{type:"button",className:"flex items-center justify-center w-8 h-8 p-2 -mr-1 bg-white rounded-md text-cu-black-600",onClick:()=>u(!1),children:[t.jsx("span",{className:"sr-only",children:"Close menu"}),t.jsx(vt,{className:"w-6 h-6","aria-hidden":"true"})]})]}),t.jsx("form",{children:n.map(c=>t.jsx(W,{as:"div",className:"px-4 py-6 border-t border-cu-black-100",children:({open:f})=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"flow-root -mx-2 -my-3 group",children:t.jsxs(W.Button,{className:"flex items-center justify-between w-full px-2 py-3 text-sm bg-white text-cu-black-300 group-hover:text-cu-black-600",children:[t.jsx("span",{className:"font-medium text-cu-black-600",children:c.name}),t.jsx("span",{className:"flex items-center ml-6",children:t.jsx(V,{className:ie(f?"-rotate-180":"rotate-0","h-5 w-5 transform"),"aria-hidden":"true"})})]})}),t.jsx(W.Panel,{className:"pt-6",children:t.jsx("div",{className:"space-y-6",children:c.options.map((x,a)=>t.jsxs("div",{className:"flex items-center",children:[t.jsx("input",{id:`filter-mobile-${c.id}-${a}`,name:`${c.id}[]`,defaultValue:x.label,type:"checkbox",onChange:()=>h(x.label),defaultChecked:p(x.label),className:"w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"}),t.jsx("label",{htmlFor:`filter-mobile-${c.id}-${a}`,className:"ml-3 text-sm text-cu-black-600",children:x.label})]},a))})})]})},c.name))})]})})})]})}),t.jsxs("section",{"aria-labelledby":"filter-heading",children:[t.jsx("h2",{id:"filter-heading",className:"sr-only",children:"Filters"}),t.jsx("div",{className:"py-4 border rounded-tl-lg rounded-tr-lg border-cu-black-100 bg-gray-50",children:t.jsxs("div",{className:"flex justify-between px-4 sm:px-6",children:[t.jsxs(A,{as:"div",className:"relative",children:[e&&(e==null?void 0:e.length)>0&&t.jsx("div",{children:t.jsxs(A.Button,{className:_.dropDownTitles,children:["Sort",t.jsx(V,{className:_.chevron,"aria-hidden":"true"})]})}),t.jsx(T,{as:d.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:t.jsx(A.Items,{className:"absolute z-10 w-40 mt-2 bg-white rounded-md shadow-lg -left-4 ring-1 ring-black ring-opacity-5 focus:outline-none",children:e&&(e==null?void 0:e.length)>0&&t.jsx("div",{className:"py-1",children:e.map(c=>t.jsx(A.Item,{children:({active:f})=>t.jsx(I,{href:c.href,className:ie(c.name===s?"font-medium text-cu-black-800":"text-cu-black-600",f?"bg-gray-100":"","block px-4 py-2 text-sm")})},c.name))})})})]}),t.jsx("button",{type:"button",className:"inline-block text-sm font-medium text-cu-black-800 hover:text-cu-red sm:hidden",onClick:()=>u(!0),children:"Filters"}),t.jsx("div",{className:"hidden sm:block",children:t.jsx("div",{className:"flow-root",children:t.jsx(M.Group,{className:"flex items-center -mx-4 divide-x divide-gray-200",children:n.map((c,f)=>t.jsxs(M,{className:"relative inline-block px-4 text-left",children:[t.jsxs(M.Button,{className:_.dropDownTitles,children:[t.jsx("span",{children:c.name}),t.jsx(V,{className:_.chevron,"aria-hidden":"true"})]}),t.jsx(T,{as:d.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:t.jsx(M.Panel,{className:"absolute right-0 z-10 p-4 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:t.jsx("form",{className:"space-y-4",children:c.options.map((x,a)=>t.jsxs("div",{className:"flex items-center",children:[t.jsx("input",{id:`filter-${c.id}-${a}`,name:`${c.id}[]`,defaultValue:x.label,type:"checkbox",onChange:()=>h(x.label),defaultChecked:p(x.label),className:"w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"}),t.jsx("label",{htmlFor:`filter-${c.id}-${a}`,className:"pr-6 ml-3 text-sm whitespace-nowrap text-cu-black-600",children:x.label})]},a))})})})]},f))})})})]})}),t.jsx("div",{className:"bg-white border border-t-0 rounded-bl-lg rounded-br-lg border-cu-black-100",children:t.jsxs("div",{className:"px-4 py-3 sm:flex sm:items-center sm:px-6",children:[t.jsxs("h3",{className:"py-1 text-sm text-cu-black-600",children:["Filters",t.jsx("span",{className:"sr-only",children:", active"})]}),t.jsx("div",{"aria-hidden":"true",className:"hidden w-px h-5 bg-gray-300 sm:ml-4 sm:block"}),t.jsx("div",{className:"mt-4 sm:ml-4 sm:mt-0",children:t.jsx("div",{className:"flex flex-wrap items-center gap-3 -m-1",children:v.map((c,f)=>t.jsxs("span",{className:"inline-flex items-center py-1 pl-3 pr-2 text-sm bg-white border rounded-lg border-cu-black-100 text-cu-black-600",children:[t.jsx("span",{children:c}),t.jsxs("button",{type:"button",onClick:()=>k(c),className:"inline-flex flex-shrink-0 w-4 h-4 p-1 ml-1 rounded-full text-cu-black-400 hover:bg-cu-red hover:text-white",children:[t.jsxs("span",{className:"sr-only",children:["Remove filter for ",c]}),t.jsx("svg",{className:"w-2 h-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8",children:t.jsx("path",{strokeLinecap:"round",strokeWidth:"1.5",d:"M1 1l6 6m0-6L1 7"})})]})]},f))})})]})})]})]})};U.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{sortOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  href: string
  current: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"current",value:{name:"boolean",required:!0}}]}}],raw:`{
  name: string
  href: string
  current: boolean
}[]`},description:""},filters:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  options: {
    value: string
    label: string
    checked: boolean
  }[]
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
  checked: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"checked",value:{name:"boolean",required:!0}}]}}],raw:`{
  value: string
  label: string
  checked: boolean
}[]`,required:!0}}]}}],raw:`{
  id: string
  name: string
  options: {
    value: string
    label: string
    checked: boolean
  }[]
}[]`},description:""},callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"k"}],return:{name:"void"}}},description:""}}};const G={title:"Filter",classname:".filter",sortOptions:[{name:"Daily",href:"#",current:!1},{name:"Weekly",href:"#",current:!1},{name:"Monthly",href:"#",current:!1}],filters:[{id:"audience",name:"Audience",options:[{value:"staff",label:"Staff",checked:!1},{value:"student",label:"Student",checked:!1}]},{id:"tags",name:"Tags",options:[{value:"general",label:"General",checked:!1},{value:"online/virtual",label:"Online/Virtual",checked:!1},{value:"finances",label:"Finances",checked:!1},{value:"healthyworkplace",label:"Healthy Workplace",checked:!1}]}]},Dt={title:"Components/Filter",component:U,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},L={render:()=>t.jsx(U,{filters:G.filters,callback:()=>{}})},B={render:()=>t.jsx(U,{filters:G.filters,callback:()=>{},sortOptions:G.sortOptions})};var oe,ue,ce;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Filter filters={FilterData.filters} callback={() => undefined} />
}`,...(ce=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,me,fe;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Filter filters={FilterData.filters} callback={() => undefined} sortOptions={FilterData.sortOptions} />
}`,...(fe=(me=B.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const Nt=["Default","WithoutSorting"];export{L as Default,B as WithoutSorting,Nt as __namedExportsOrder,Dt as default};
