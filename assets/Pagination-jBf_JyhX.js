import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as u}from"./index-4g5l5LRQ.js";import{C as R}from"./ChevronRightIcon-XyhEQFMv.js";function P({title:n,titleId:o,...t},i){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":o},t),n?u.createElement("title",{id:o},n):null,u.createElement("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const L=u.forwardRef(P),$=L,g="...",j=(n,o)=>{const t=o-n+1;return Array.from({length:t},(i,c)=>c+n)},C=(n,o,t=1,i)=>u.useMemo(()=>{const s=Math.ceil(n/o);if(t+5>=s)return j(1,s);const m=Math.max(i-t,1),a=Math.min(i+t,s),f=m>2,p=a<s-2,x=1,v=s;if(!f&&p){const d=3+2*t;return[...j(1,d),g,s]}if(f&&!p){const d=3+2*t,b=j(s-d+1,s);return[x,g,...b]}if(f&&p){const d=j(m,a);return[x,g,...d,g,v]}},[n,o,t,i]),l={border:"py-5 border-t border-cu-black-100",spacing:"pl-6 pr-5",mobileButtons:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50",pageListNumbers:"flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50",pageListArrows:"text-cu-black-400 px-2.5"},k=({hasBorder:n,hasSpacing:o,totalCount:t,siblingCount:i,pageSize:c,callback:s})=>{const[r,m]=u.useState(1),a=C(t,c,i,r),f=()=>{r<y&&m(r+1)},p=()=>{r>1&&m(r-1)},x=h=>{m(Number(h))},v=n?l.border:"",d=o?l.spacing:"",b=(r-1)*c+1;let N=t,y=0;return u.useEffect(()=>{s([b,N])},[b,N,s]),t>r*c&&(N=r*c),a!==void 0&&(y=Number(a[a.length-1])),r===0||a!==void 0&&a.length<2?null:e.jsxs("div",{className:`cu-pagination not-prose mt-8 flex items-center justify-between first:mt-0 ${v} ${d}`,children:[e.jsxs("div",{className:"flex flex-1 justify-between sm:hidden",children:[e.jsx("button",{onClick:p,className:`${l.mobileButtons}`,children:"Previous"}),e.jsx("button",{onClick:f,className:`${l.mobileButtons}`,children:"Next"})]}),e.jsxs("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[e.jsxs("p",{className:"text-sm text-cu-black-800",children:["Showing ",e.jsx("span",{className:"font-semibold",children:b})," to"," ",e.jsx("span",{className:"font-semibold",children:N})," of ",e.jsx("span",{className:"font-semibold",children:t})," ","results"]}),e.jsx("nav",{"aria-label":"Pagination",children:e.jsxs("ul",{className:"inline-flex overflow-hidden rounded-md border border-cu-black-100",children:[e.jsxs("li",{className:`${l.pageListNumbers} ${l.pageListArrows}`,role:"presentation",onClick:p,children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx($,{className:"h-5 w-5","aria-hidden":"true"})]}),a!==void 0&&a.map((h,w)=>h===g?e.jsx("li",{className:`${l.pageListNumbers}`,children:"…"},w):e.jsx("li",{role:"presentation",className:`${l.pageListNumbers} ${Number(h)===r?"bg-cu-black-50 font-semibold":""}`,onClick:()=>x(Number(h)),children:h},w)),e.jsxs("li",{className:`${l.pageListNumbers} ${l.pageListArrows}`,role:"presentation",onClick:f,children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx(R,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]})};try{k.displayName="Pagination",k.__docgenInfo={description:"",displayName:"Pagination",props:{hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},hasSpacing:{defaultValue:null,description:"",name:"hasSpacing",required:!1,type:{name:"boolean"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},siblingCount:{defaultValue:null,description:"",name:"siblingCount",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"(k: [(number | undefined)?, (number | undefined)?]) => void"}}}}}catch{}export{k as P};
