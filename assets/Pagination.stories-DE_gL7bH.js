import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";function F({title:r,titleId:s,...t},l){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const W=i.forwardRef(F);function Z({title:r,titleId:s,...t},l){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const G=i.forwardRef(Z),w="...",C=(r,s)=>{const t=s-r+1;return Array.from({length:t},(l,d)=>d+r)},H=(r,s,t=1,l)=>i.useMemo(()=>{const a=Math.ceil(r/s);if(t+5>=a)return C(1,a);const n=Math.max(l-t,1),g=Math.min(l+t,a),o=n>2,f=g<a-2,y=1,S=a;if(!o&&f){const m=3+2*t;return[...C(1,m),w,a]}if(o&&!f){const m=3+2*t,j=C(a-m+1,a);return[y,w,...j]}if(o&&f){const m=C(n,g);return[y,w,...m,w,S]}},[r,s,t,l]),c={mobileButtons:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50",pageListNumbers:"flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50",pageListArrows:"text-cu-black-400 px-2.5"},v=({hasBorder:r,hasSpacing:s,totalCount:t,siblingCount:l,pageSize:d,callback:a,onClickPage:u})=>{const[n,g]=i.useState(1),o=H(t,d,l,n),f=()=>{n<B&&(u?u(n+1):g(n+1))},y=()=>{n>1&&(u?u(n-1):g(n-1))},S=p=>{u?u(p):g(Number(p))},m=r?"py-5 border-t border-cu-black-100":"",j=s?"pl-6 pr-5":"",R=(n-1)*d+1;let k=t,B=0;return i.useEffect(()=>{a([R,k])},[R,k,a]),t>n*d&&(k=n*d),o!==void 0&&(B=Number(o[o.length-1])),n===0||o!==void 0&&o.length<2?null:e.jsxs("div",{className:`cu-pagination cu-component-spacing not-prose mt-8 flex items-center justify-between first:mt-0 ${m} ${j}`,children:[e.jsxs("div",{className:"flex justify-between flex-1 sm:hidden",children:[e.jsx("button",{onClick:y,className:`${c.mobileButtons}`,children:"Previous"}),e.jsx("button",{onClick:f,className:`${c.mobileButtons}`,children:"Next"})]}),e.jsxs("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[e.jsxs("p",{className:"text-sm text-cu-black-800",children:["Showing ",e.jsx("span",{className:"font-semibold",children:R})," to"," ",e.jsx("span",{className:"font-semibold",children:k})," of ",e.jsx("span",{className:"font-semibold",children:t})," ","results"]}),e.jsx("nav",{"aria-label":"Pagination",children:e.jsxs("ul",{className:"inline-flex overflow-hidden border rounded-md border-cu-black-100",children:[e.jsxs("li",{className:`${c.pageListNumbers} ${c.pageListArrows}`,onClick:y,children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx(W,{className:"w-5 h-5","aria-hidden":"true"})]}),o!==void 0&&o.map((p,P)=>p===w?e.jsx("li",{className:`${c.pageListNumbers}`,children:"…"},P):e.jsx("li",{className:`${c.pageListNumbers} ${Number(p)===n?"font-bold text-cu-red":""}`,onClick:()=>S(Number(p)),children:p},P)),e.jsxs("li",{className:`${c.pageListNumbers} ${c.pageListArrows}`,onClick:f,children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx(G,{className:"w-5 h-5","aria-hidden":"true"})]})]})})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{hasBorder:{required:!1,tsType:{name:"boolean"},description:""},hasSpacing:{required:!1,tsType:{name:"boolean"},description:""},totalCount:{required:!0,tsType:{name:"number"},description:""},siblingCount:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: [number?, number?]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number?, number?]",elements:[{name:"unknown"},{name:"unknown"}]},name:"k"}],return:{name:"void"}}},description:""},onClickPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const U={title:"Components/Pagination",component:v,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},b=()=>e.jsx(v,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{}}),h=()=>e.jsx(v,{hasBorder:!0,hasSpacing:!0,totalCount:48,siblingCount:1,pageSize:5,callback:()=>{}}),x=()=>e.jsx(v,{hasBorder:!0,totalCount:48,siblingCount:1,pageSize:5,callback:()=>{}}),N=()=>e.jsx(v,{hasBorder:!0,totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},onClickPage:()=>{}});b.storyName="Default item";h.storyName="With Top Border";x.storyName="With Spacing";N.storyName="With Click";b.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"Border"};x.__docgenInfo={description:"",methods:[],displayName:"Spacing"};N.__docgenInfo={description:"",methods:[],displayName:"Click"};var _,L,$;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} />;
}`,...($=(L=b.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var I,E,T;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Pagination hasBorder hasSpacing totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} />;
}`,...(T=(E=h.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var q,D,M;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Pagination hasBorder totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} />;
}`,...(M=(D=x.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var z,A,O;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Pagination hasBorder totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} onClickPage={() => undefined} />;
}`,...(O=(A=N.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const V=["Default","Border","Spacing","Click"];export{h as Border,N as Click,b as Default,x as Spacing,V as __namedExportsOrder,U as default};
