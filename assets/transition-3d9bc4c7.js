import{r as l,R as y}from"./index-580b8df0.js";var Fe=Object.defineProperty,we=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);let Te=class{constructor(){Y(this,"current",this.detect()),Y(this,"handoffState","pending"),Y(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},N=new Te,A=(e,t)=>{N.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function $(e){let t=l.useRef(e);return A(()=>{t.current=e},[e]),t}function Ce(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function D(){let e=[],t={addEventListener(n,r,i,u){return n.addEventListener(r,i,u),t.add(()=>n.removeEventListener(r,i,u))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ce(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0){let[i]=e.splice(r,1);i()}}},dispose(){for(let n of e.splice(0))n()},style(n,r,i){let u=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:u})})}};return t}function re(){let[e]=l.useState(D);return l.useEffect(()=>()=>e.dispose(),[e]),e}let j=function(e){let t=$(e);return y.useCallback((...n)=>t.current(...n),[t])};function ie(){let[e,t]=l.useState(N.isHandoffComplete);return e&&N.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>N.handoff(),[]),e}function E(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}let le=Symbol();function Ge(e,t=!0){return Object.assign(e,{[le]:t})}function ae(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=j(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[le]))?void 0:n}function se(...e){return e.filter(Boolean).join(" ")}var oe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(oe||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function ue({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:u=!0,name:f}){let o=ce(t,e);if(u)return H(o,n,r,f);let s=i??0;if(s&2){let{static:c=!1,...d}=o;if(c)return H(d,n,r,f)}if(s&1){let{unmount:c=!0,...d}=o;return E(c?0:1,{[0](){return null},[1](){return H({...d,hidden:!0,style:{display:"none"}},n,r,f)}})}return H(o,n,r,f)}function H(e,t={},n,r){var i;let{as:u=n,children:f,refName:o="ref",...s}=_(e,["unmount","static"]),c=e.ref!==void 0?{[o]:e.ref}:{},d=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let b={};if(t){let v=!1,m=[];for(let[a,h]of Object.entries(t))typeof h=="boolean"&&(v=!0),h===!0&&m.push(a);v&&(b["data-headlessui-state"]=m.join(" "))}if(u===l.Fragment&&Object.keys(te(s)).length>0){if(!l.isValidElement(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let v=se((i=d.props)==null?void 0:i.className,s.className),m=v?{className:v}:{};return l.cloneElement(d,Object.assign({},ce(d.props,te(_(s,["ref"]))),b,c,Oe(d.ref,c.ref),m))}return l.createElement(u,Object.assign({},_(s,["ref"]),u!==l.Fragment&&c,u!==l.Fragment&&b),d)}function Oe(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function ce(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...u){let f=n[r];for(let o of f){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;o(i,...u)}}});return t}function X(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function te(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function _(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let Z=l.createContext(null);Z.displayName="OpenClosedContext";var w=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(w||{});function fe(){return l.useContext(Z)}function Se({value:e,children:t}){return y.createElement(Z.Provider,{value:e},t)}function de(){let e=l.useRef(!1);return A(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function je(e=0){let[t,n]=l.useState(e),r=l.useCallback(o=>n(s=>s|o),[t]),i=l.useCallback(o=>!!(t&o),[t]),u=l.useCallback(o=>n(s=>s&~o),[n]),f=l.useCallback(o=>n(s=>s^o),[n]);return{flags:t,addFlag:r,hasFlag:i,removeFlag:u,toggleFlag:f}}function $e(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function J(e,...t){e&&t.length>0&&e.classList.add(...t)}function K(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Re(e,t){let n=D();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[u,f]=[r,i].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,d)=>d-c);return s});if(u+f!==0){let o=n.addEventListener(e,"transitionend",s=>{s.target===s.currentTarget&&(t(),o())})}else t();return n.add(()=>t()),n.dispose}function Ne(e,t,n,r){let i=n?"enter":"leave",u=D(),f=r!==void 0?$e(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let o=E(i,{enter:()=>t.enter,leave:()=>t.leave}),s=E(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=E(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return K(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),J(e,...o,...c),u.nextFrame(()=>{K(e,...c),J(e,...s),Re(e,()=>(K(e,...o),J(e,...t.entered),f()))}),u.dispose}function xe({container:e,direction:t,classes:n,onStart:r,onStop:i}){let u=de(),f=re(),o=$(t);A(()=>{let s=D();f.add(s.dispose);let c=e.current;if(c&&o.current!=="idle"&&u.current)return s.dispose(),r.current(o.current),s.add(Ne(c,n.current,o.current==="enter",()=>{s.dispose(),i.current(o.current)})),s.dispose},[t])}function S(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let q=l.createContext(null);q.displayName="TransitionContext";var Pe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Pe||{});function Le(){let e=l.useContext(q);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ke(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=l.createContext(null);M.displayName="NestingContext";function I(e){return"children"in e?I(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function me(e,t){let n=$(e),r=l.useRef([]),i=de(),u=re(),f=j((m,a=T.Hidden)=>{let h=r.current.findIndex(({el:p})=>p===m);h!==-1&&(E(a,{[T.Unmount](){r.current.splice(h,1)},[T.Hidden](){r.current[h].state="hidden"}}),u.microTask(()=>{var p;!I(r)&&i.current&&((p=n.current)==null||p.call(n))}))}),o=j(m=>{let a=r.current.find(({el:h})=>h===m);return a?a.state!=="visible"&&(a.state="visible"):r.current.push({el:m,state:"visible"}),()=>f(m,T.Unmount)}),s=l.useRef([]),c=l.useRef(Promise.resolve()),d=l.useRef({enter:[],leave:[],idle:[]}),b=j((m,a,h)=>{s.current.splice(0),t&&(t.chains.current[a]=t.chains.current[a].filter(([p])=>p!==m)),t==null||t.chains.current[a].push([m,new Promise(p=>{s.current.push(p)})]),t==null||t.chains.current[a].push([m,new Promise(p=>{Promise.all(d.current[a].map(([g,F])=>F)).then(()=>p())})]),a==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(a)):h(a)}),v=j((m,a,h)=>{Promise.all(d.current[a].splice(0).map(([p,g])=>g)).then(()=>{var p;(p=s.current.shift())==null||p()}).then(()=>h(a))});return l.useMemo(()=>({children:r,register:o,unregister:f,onStart:b,onStop:v,wait:c,chains:d}),[o,f,r,b,v,d,c])}function He(){}let Ae=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ne(e){var t;let n={};for(let r of Ae)n[r]=(t=e[r])!=null?t:He;return n}function De(e){let t=l.useRef(ne(e));return l.useEffect(()=>{t.current=ne(e)},[e]),t}let qe="div",pe=oe.RenderStrategy;function Me(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:u,enter:f,enterFrom:o,enterTo:s,entered:c,leave:d,leaveFrom:b,leaveTo:v,...m}=e,a=l.useRef(null),h=ae(a,t),p=m.unmount?T.Unmount:T.Hidden,{show:g,appear:F,initial:ve}=Le(),[C,U]=l.useState(g?"visible":"hidden"),ee=ke(),{register:x,unregister:P}=ee,B=l.useRef(null);l.useEffect(()=>x(a),[x,a]),l.useEffect(()=>{if(p===T.Hidden&&a.current){if(g&&C!=="visible"){U("visible");return}return E(C,{hidden:()=>P(a),visible:()=>x(a)})}},[C,a,x,P,g,p]);let V=$({enter:S(f),enterFrom:S(o),enterTo:S(s),entered:S(c),leave:S(d),leaveFrom:S(b),leaveTo:S(v)}),L=De({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:u}),z=ie();l.useEffect(()=>{if(z&&C==="visible"&&a.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[a,C,z]);let G=ve&&!F,ge=(()=>!z||G||B.current===g?"idle":g?"enter":"leave")(),R=je(0),be=j(O=>E(O,{enter:()=>{R.addFlag(w.Opening),L.current.beforeEnter()},leave:()=>{R.addFlag(w.Closing),L.current.beforeLeave()},idle:()=>{}})),ye=j(O=>E(O,{enter:()=>{R.removeFlag(w.Opening),L.current.afterEnter()},leave:()=>{R.removeFlag(w.Closing),L.current.afterLeave()},idle:()=>{}})),k=me(()=>{U("hidden"),P(a)},ee);xe({container:a,classes:V,direction:ge,onStart:$(O=>{k.onStart(a,O,be)}),onStop:$(O=>{k.onStop(a,O,ye),O==="leave"&&!I(k)&&(U("hidden"),P(a))})}),l.useEffect(()=>{G&&(p===T.Hidden?B.current=null:B.current=g)},[g,G,C]);let W=m,Ee={ref:h};return F&&g&&N.isServer&&(W={...W,className:se(m.className,...V.current.enter,...V.current.enterFrom)}),y.createElement(M.Provider,{value:k},y.createElement(Se,{value:E(C,{visible:w.Open,hidden:w.Closed})|R.flags},ue({ourProps:Ee,theirProps:W,defaultTag:qe,features:pe,visible:C==="visible",name:"Transition.Child"})))}function Ie(e,t){let{show:n,appear:r=!1,unmount:i,...u}=e,f=l.useRef(null),o=ae(f,t);ie();let s=fe();if(n===void 0&&s!==null&&(n=(s&w.Open)===w.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=l.useState(n?"visible":"hidden"),b=me(()=>{d("hidden")}),[v,m]=l.useState(!0),a=l.useRef([n]);A(()=>{v!==!1&&a.current[a.current.length-1]!==n&&(a.current.push(n),m(!1))},[a,n]);let h=l.useMemo(()=>({show:n,appear:r,initial:v}),[n,r,v]);l.useEffect(()=>{if(n)d("visible");else if(!I(b))d("hidden");else{let g=f.current;if(!g)return;let F=g.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&d("hidden")}},[n,b]);let p={unmount:i};return y.createElement(M.Provider,{value:b},y.createElement(q.Provider,{value:h},ue({ourProps:{...p,as:l.Fragment,children:y.createElement(he,{ref:o,...p,...u})},theirProps:{},defaultTag:l.Fragment,features:pe,visible:c==="visible",name:"Transition"})))}function Ue(e,t){let n=l.useContext(q)!==null,r=fe()!==null;return y.createElement(y.Fragment,null,!n&&r?y.createElement(Q,{ref:t,...e}):y.createElement(he,{ref:t,...e}))}let Q=X(Ie),he=X(Me),Be=X(Ue),We=Object.assign(Q,{Child:Be,Root:Q});export{fe as C,ue as D,X as L,te as P,Ge as T,ie as a,Ce as b,Se as c,w as d,N as e,de as f,oe as j,A as l,D as m,j as o,re as p,$ as s,We as t,E as u,ae as y};
//# sourceMappingURL=transition-3d9bc4c7.js.map
