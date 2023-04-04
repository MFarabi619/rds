import{a as i,F as w,j as e}from"./jsx-runtime-9d2cd5de.js";import{r as a}from"./index-580b8df0.js";import{g as x}from"./optionClasses-9f612ec7.js";import{L as b}from"./Link-754e2995.js";import{F as h}from"./dialog-82995df1.js";import{J as c}from"./combobox-00d1fd7e.js";import{t as f}from"./transition-ad75749a.js";function N({title:t,titleId:o,...l},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":o},l),t?a.createElement("title",{id:o},t):null,a.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",clipRule:"evenodd"}))}const k=a.forwardRef(N),y=k;function F({title:t,titleId:o,...l},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":o},l),t?a.createElement("title",{id:o},t):null,a.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))}const L=a.forwardRef(F),C=L;function E(...t){return t.filter(Boolean).join(" ")}const g=({searchOn:t="title",sourceData:o,children:l})=>{const[n,d]=a.useState(""),[u,p]=a.useState(!1),m=n===""?[]:o.filter(r=>r[t].toString().toLowerCase().includes(n.toLowerCase())),v=l||e(y,{className:"left-4 h-5 w-5 cursor-pointer text-gray-400","aria-hidden":"true"});return a.useEffect(()=>{function r(s){s.key==="k"&&(s.metaKey||s.ctrlKey)&&p(!u)}return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[u]),i(w,{children:[e("button",{onClick:()=>p(!0),"aria-label":"search",className:"not-prose",children:v}),e(f.Root,{show:u,as:a.Fragment,afterLeave:()=>d(""),appear:!0,children:i(h,{as:"div",className:"not-prose relative z-50",onClose:p,children:[e(f.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:`fixed inset-0 transition-opacity ${x} `})}),e("div",{className:"z-100 fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20",children:e(f.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e(h.Panel,{className:"mx-auto mt-[20vh] max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",children:i(c,{children:[i("div",{className:"relative",children:[e(y,{className:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400","aria-hidden":"true"}),e(c.Input,{className:"h-12 w-full rounded-lg border border-cu-black-100 bg-transparent pr-4 pl-11 text-sm text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0",placeholder:"Search...",onChange:r=>d(r.target.value)}),n&&e(C,{className:"absolute top-3.5 right-4 h-4 w-4 text-gray-400","aria-hidden":"true",onClick:()=>{d("")}})]}),m.length>0&&e(c.Options,{static:!0,className:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800",children:m.map(r=>e(c.Option,{value:r,className:({active:s})=>E("cursor-default select-none px-4 py-2",s&&"bg-cu-red text-white"),children:e(b,{href:`${r.url}`,children:r[t]})},r.id))}),n!==""&&m.length===0&&e("p",{className:"p-4 text-sm text-gray-500",children:"Search not found"})]})})})})]})})]})};try{g.displayName="Search",g.__docgenInfo={description:"",displayName:"Search",props:{sourceData:{defaultValue:null,description:"",name:"sourceData",required:!0,type:{name:"SourceDataProps[]"}},searchOn:{defaultValue:{value:"title"},description:"",name:"searchOn",required:!1,type:{name:"string"}}}}}catch{}export{g as S};
//# sourceMappingURL=Search-3d79baaf.js.map