import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as o}from"./index-BwDkhjyp.js";function k({title:s,titleId:r,...n},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},n),s?o.createElement("title",{id:r},s):null,o.createElement("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const P=o.forwardRef(k);function L({title:s,titleId:r,...n},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},n),s?o.createElement("title",{id:r},s):null,o.createElement("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const $=o.forwardRef(L),g="...",w=(s,r)=>{const n=r-s+1;return Array.from({length:n},(l,d)=>d+s)},E=(s,r,n=1,l)=>o.useMemo(()=>{const a=Math.ceil(s/r);if(n+5>=a)return w(1,a);const t=Math.max(l-n,1),m=Math.min(l+n,a),i=t>2,p=m<a-2,f=1,N=a;if(!i&&p){const u=3+2*n;return[...w(1,u),g,a]}if(i&&!p){const u=3+2*n,h=w(a-u+1,a);return[f,g,...h]}if(i&&p){const u=w(t,m);return[f,g,...u,g,N]}},[s,r,n,l]),c={mobileButtons:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50",pageListNumbers:"flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50",pageListArrows:"text-cu-black-400 px-2.5"},T=({hasBorder:s,hasSpacing:r,totalCount:n,siblingCount:l,pageSize:d,callback:a,callbackPage:v})=>{const[t,m]=o.useState(1),i=E(n,d,l,t),p=()=>{t<y&&m(t+1)},f=()=>{t>1&&m(t-1)},N=b=>{m(Number(b))},u=s?"py-5 border-t border-cu-black-100":"",h=r?"pl-6 pr-5":"",j=(t-1)*d+1;let x=n,y=0;return o.useEffect(()=>{a([j,x]),v(t)},[j,x,a,v,t]),n>t*d&&(x=t*d),i!==void 0&&(y=Number(i[i.length-1])),t===0||i!==void 0&&i.length<2?null:e.jsxs("div",{className:`cu-pagination cu-component-spacing not-prose mt-8 flex items-center justify-between first:mt-0 ${u} ${h}`,children:[e.jsxs("div",{className:"flex justify-between flex-1 sm:hidden",children:[e.jsx("button",{onClick:f,className:`${c.mobileButtons}`,children:"Previous"}),e.jsx("button",{onClick:p,className:`${c.mobileButtons}`,children:"Next"})]}),e.jsxs("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[e.jsxs("p",{className:"text-sm text-cu-black-800",children:["Showing ",e.jsx("span",{className:"font-semibold",children:j})," to"," ",e.jsx("span",{className:"font-semibold",children:x})," of ",e.jsx("span",{className:"font-semibold",children:n})," ","results"]}),e.jsx("nav",{"aria-label":"Pagination",children:e.jsxs("ul",{className:"inline-flex overflow-hidden border rounded-md border-cu-black-100",children:[e.jsxs("li",{className:`${c.pageListNumbers} ${c.pageListArrows}`,onClick:f,children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx(P,{className:"w-5 h-5","aria-hidden":"true"})]}),i!==void 0&&i.map((b,R)=>b===g?e.jsx("li",{className:`${c.pageListNumbers}`,children:"…"},R):e.jsx("li",{className:`${c.pageListNumbers} ${Number(b)===t?"font-bold text-cu-red":""}`,onClick:()=>N(Number(b)),children:b},R)),e.jsxs("li",{className:`${c.pageListNumbers} ${c.pageListArrows}`,onClick:p,children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx($,{className:"w-5 h-5","aria-hidden":"true"})]})]})})]})]})};T.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{hasBorder:{required:!1,tsType:{name:"boolean"},description:""},hasSpacing:{required:!1,tsType:{name:"boolean"},description:""},totalCount:{required:!0,tsType:{name:"number"},description:""},siblingCount:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: [number?, number?]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number?, number?]",elements:[{name:"unknown"},{name:"unknown"}]},name:"k"}],return:{name:"void"}}},description:""},callbackPage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};export{T as P};