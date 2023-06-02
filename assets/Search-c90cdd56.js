import{j as e}from"./jsx-runtime-daf202a7.js";import{r as a}from"./index-ec8b93d8.js";import{j as w}from"./optionClasses-62a5285f.js";import{L as b}from"./Link-d4bc1413.js";import{$ as f}from"./transition-6ad8d931.js";import{_ as h}from"./dialog-0a893a82.js";import{W as u}from"./combobox-6144e67a.js";function j({title:t,titleId:n,...s},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":n},s),t?a.createElement("title",{id:n},t):null,a.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",clipRule:"evenodd"}))}const k=a.forwardRef(j),x=k;function N({title:t,titleId:n,...s},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":n},s),t?a.createElement("title",{id:n},t):null,a.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))}const C=a.forwardRef(N),E=C;function L(...t){return t.filter(Boolean).join(" ")}const g=({searchOn:t="title",sourceData:n,children:s,callback:l})=>{const[d,m]=a.useState(""),[i,c]=a.useState(!1),p=d===""?[]:n.filter(r=>r[t].toString().toLowerCase().includes(d.toLowerCase())),y=s||e.jsx(x,{className:"left-4 h-5 w-5 cursor-pointer text-gray-400","aria-hidden":"true"}),v=r=>{if(r){const o=String(r.url);window.location.href=o,c(!1)}};return a.useEffect(()=>{function r(o){o.key==="k"&&(o.metaKey||o.ctrlKey)&&c(!i)}return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[i]),a.useEffect(()=>{l(i)},[i,l]),e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>c(!0),"aria-label":"search",className:"not-prose",children:y}),e.jsx(f.Root,{show:i,as:a.Fragment,afterLeave:()=>m(""),appear:!0,children:e.jsxs(h,{as:"div",className:"cu-search not-prose relative z-50",onClose:c,children:[e.jsx(f.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:`fixed inset-0 transition-opacity ${w} `})}),e.jsx("div",{className:"z-100 fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20",children:e.jsx(f.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx(h.Panel,{className:"mx-auto mt-[20vh] max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",children:e.jsxs(u,{onChange:v,children:[e.jsxs("div",{className:"relative",children:[e.jsx(x,{className:"pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),e.jsx(u.Input,{className:"h-12 w-full rounded-lg border border-cu-black-100 bg-transparent pl-11 pr-4 text-sm text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0",placeholder:"Search...",onChange:r=>m(r.target.value)}),d&&e.jsx(E,{className:"absolute right-4 top-3.5 h-4 w-4 text-gray-400","aria-hidden":"true",onClick:()=>{m("")}})]}),p.length>0&&e.jsx(u.Options,{static:!0,className:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800",children:p.map(r=>e.jsx(u.Option,{value:r,className:({active:o})=>L("cursor-default select-none px-4 py-2",o&&"bg-cu-red text-white"),children:e.jsx(b,{href:`${r.url}`,onClick:()=>c(!1),children:r[t]})},r.id))}),d!==""&&p.length===0&&e.jsx("p",{className:"p-4 text-sm text-gray-500",children:"Search not found"})]})})})})]})})]})};try{g.displayName="Search",g.__docgenInfo={description:"",displayName:"Search",props:{sourceData:{defaultValue:null,description:"",name:"sourceData",required:!0,type:{name:"SourceDataProps[]"}},searchOn:{defaultValue:{value:"title"},description:"",name:"searchOn",required:!1,type:{name:"string"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"(k: boolean) => void"}}}}}catch{}export{g as S,E as X};
//# sourceMappingURL=Search-c90cdd56.js.map
