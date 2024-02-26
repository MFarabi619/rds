import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as l}from"./index-CBqU2yxZ.js";function k({title:t,titleId:r,...n},o){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},n),t?l.createElement("title",{id:r},t):null,l.createElement("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const P=l.forwardRef(k),$=P;function L({title:t,titleId:r,...n},o){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},n),t?l.createElement("title",{id:r},t):null,l.createElement("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const C=l.forwardRef(L),E=C,g="...",v=(t,r)=>{const n=r-t+1;return Array.from({length:n},(o,d)=>d+t)},I=(t,r,n=1,o)=>l.useMemo(()=>{const s=Math.ceil(t/r);if(n+5>=s)return v(1,s);const m=Math.max(o-n,1),i=Math.min(o+n,s),f=m>2,b=i<s-2,x=1,w=s;if(!f&&b){const u=3+2*n;return[...v(1,u),g,s]}if(f&&!b){const u=3+2*n,p=v(s-u+1,s);return[x,g,...p]}if(f&&b){const u=v(m,i);return[x,g,...u,g,w]}},[t,r,n,o]),c={border:"py-5 border-t border-cu-black-100",spacing:"pl-6 pr-5",mobileButtons:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50",pageListNumbers:"flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50",pageListArrows:"text-cu-black-400 px-2.5"},R=({hasBorder:t,hasSpacing:r,totalCount:n,siblingCount:o,pageSize:d,callback:s})=>{const[a,m]=l.useState(1),i=I(n,d,o,a),f=()=>{a<j&&m(a+1)},b=()=>{a>1&&m(a-1)},x=h=>{m(Number(h))},w=t?c.border:"",u=r?c.spacing:"",p=(a-1)*d+1;let N=n,j=0;return l.useEffect(()=>{s([p,N])},[p,N,s]),n>a*d&&(N=a*d),i!==void 0&&(j=Number(i[i.length-1])),a===0||i!==void 0&&i.length<2?null:e.jsxs("div",{className:`cu-pagination not-prose mt-8 flex items-center justify-between first:mt-0 ${w} ${u}`,children:[e.jsxs("div",{className:"flex justify-between flex-1 sm:hidden",children:[e.jsx("button",{onClick:b,className:`${c.mobileButtons}`,children:"Previous"}),e.jsx("button",{onClick:f,className:`${c.mobileButtons}`,children:"Next"})]}),e.jsxs("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[e.jsxs("p",{className:"text-sm text-cu-black-800",children:["Showing ",e.jsx("span",{className:"font-semibold",children:p})," to"," ",e.jsx("span",{className:"font-semibold",children:N})," of ",e.jsx("span",{className:"font-semibold",children:n})," ","results"]}),e.jsx("nav",{"aria-label":"Pagination",children:e.jsxs("ul",{className:"inline-flex overflow-hidden border rounded-md border-cu-black-100",children:[e.jsxs("li",{className:`${c.pageListNumbers} ${c.pageListArrows}`,role:"presentation",onClick:b,children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx($,{className:"w-5 h-5","aria-hidden":"true"})]}),i!==void 0&&i.map((h,y)=>h===g?e.jsx("li",{className:`${c.pageListNumbers}`,children:"…"},y):e.jsx("li",{role:"presentation",className:`${c.pageListNumbers} ${Number(h)===a?"bg-cu-black-50 font-semibold":""}`,onClick:()=>x(Number(h)),children:h},y)),e.jsxs("li",{className:`${c.pageListNumbers} ${c.pageListArrows}`,role:"presentation",onClick:f,children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx(E,{className:"w-5 h-5","aria-hidden":"true"})]})]})})]})]})};try{R.displayName="Pagination",R.__docgenInfo={description:"",displayName:"Pagination",props:{hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},hasSpacing:{defaultValue:null,description:"",name:"hasSpacing",required:!1,type:{name:"boolean"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},siblingCount:{defaultValue:null,description:"",name:"siblingCount",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"(k: [(number | undefined)?, (number | undefined)?]) => void"}}}}}catch{}export{R as P};
