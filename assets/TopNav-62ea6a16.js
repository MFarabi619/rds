import{j as e}from"./jsx-runtime-daf202a7.js";import{A as g}from"./Avatar-4f8b6b20.js";import{D as B}from"./DropDown-26ef76b2.js";import{L as m}from"./Link-ea13e619.js";import{S as q,X as T}from"./Search-44aae138.js";import{T as A}from"./TopNavLoader-62ff9509.js";import{r as t}from"./index-ec8b93d8.js";import{v as n}from"./disclosure-f401fb37.js";function R({title:i,titleId:d,...c},u){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":d},c),i?t.createElement("title",{id:d},i):null,t.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}const D=t.forwardRef(R),E=D,V=({children:i,logoUrl:d,title:c,brand:u,hasSearch:v,sourceData:p,searchOn:b,navLinks:j,mobileLinks:k,userMenuItems:o,userInfo:l,session:N,sticky:C,login:z,mobileLogin:a})=>{const _=u?e.jsxs("div",{className:"flex flex-shrink-0 items-center",children:[e.jsxs("h1",{className:"sr-only",children:[" ",c," "]}),e.jsx("img",{className:"h-16 w-auto",src:u,alt:c})]}):e.jsxs("div",{className:"flex flex-shrink-0 items-center",children:[e.jsx("img",{className:"h-10 w-auto",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",alt:"Carleton Shield"}),e.jsx("h1",{className:"flex flex-shrink-0 items-center pl-3 pr-2 text-2xl font-semibold",children:c})]}),[F,y]=t.useState(!1),w=t.useCallback(h=>{y(h)},[y]);return e.jsx(n,{as:"nav",className:`cu-topnav ${C?"sticky":""} not-prose  relative top-0 z-50 border-t-2 border-cu-red bg-white px-6 shadow-md lg:px-8`,id:"topNav",children:({open:h})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-auto flex h-20 max-w-7xl gap-6",children:[e.jsx("div",{className:"flex flex-shrink-0 items-center hover:text-cu-red",children:e.jsx(m,{href:d||"/",children:_})}),e.jsx("div",{className:"flex items-center lg:hidden",children:e.jsxs("div",{className:"absolute right-4 ml-4",children:[v&&p&&e.jsx("div",{className:"inline-flex items-center p-2 ",children:e.jsx(q,{sourceData:p,searchOn:b,callback:w})}),e.jsxs(n.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cu-red-500",children:[e.jsx("span",{className:"sr-only",children:"main menu"}),h?e.jsx(T,{className:"block h-6 w-6","aria-hidden":"true"}):e.jsx(E,{className:"block h-6 w-6","aria-hidden":"true"})]})]})}),e.jsx("ul",{className:"hidden lg:flex lg:flex-1 lg:gap-6",children:j&&j.map((s,r)=>e.jsx("li",{className:`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-cu-black-800 hover:border-cu-red hover:text-cu-red ${s.active?"border-cu-red text-cu-red":"border-transparent"}`,children:e.jsx(m,{href:s.link,children:s.title})},r))}),e.jsxs("div",{className:"hidden lg:flex lg:items-center lg:gap-6",children:[v&&p&&e.jsx("div",{className:"inline-flex items-center ",children:e.jsx(q,{sourceData:p,searchOn:b,callback:w})}),i,e.jsxs(e.Fragment,{children:[N===null&&z,!l&&N!==null&&e.jsx(A,{})]}),l&&!o&&e.jsx(g,{user:l,size:"xs",rounded:"full"}),l&&o&&e.jsx(B,{listItems:o,menuAlign:"right",children:e.jsx(g,{user:l,size:"xs",rounded:"full"})})]})]}),e.jsx(n.Panel,{className:"-mx-2 sm:-mx-4 lg:-mx-8 lg:hidden",children:({close:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[k&&k.map((r,f)=>e.jsx(n.Button,{as:"div",className:`block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red ${r.active?"border-l-4 border-cu-red bg-gradient-to-r from-cu-red-50 to-white":"border-transparent"}`,children:e.jsx(m,{href:r.link,onClick:x=>{x.preventDefault(),s()},children:r.title})},f)),!l&&a&&e.jsx(e.Fragment,{children:e.jsx(n.Button,{as:"div",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red ",children:e.jsx(m,{href:a.link?a.link:"",onClick:r=>{a.onClick&&r.preventDefault(),a.onClick&&a.onClick(r),s()},children:a.title})})})]}),l&&e.jsxs("div",{className:"border-t border-gray-200 pb-3 pt-4",children:[e.jsxs("div",{className:"flex items-center px-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(g,{user:l,size:"xs",rounded:"full"})}),e.jsx("div",{className:"ml-3",children:e.jsx("div",{className:"text-base font-medium text-gray-800",children:l.firstName+" "+l.lastName})})]}),e.jsx("div",{className:"mt-3 space-y-1",children:o&&o.map((r,f)=>e.jsx(n.Button,{as:"div",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red ",children:e.jsx(m,{href:r.href?r.href:"",onClick:x=>{r.onClick&&x.preventDefault(),r.onClick&&r.onClick(x),s()},children:r.title})},f))})]})]})})]})})};try{V.displayName="TopNav",V.__docgenInfo={description:"",displayName:"TopNav",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},logoUrl:{defaultValue:null,description:"",name:"logoUrl",required:!1,type:{name:"string"}},brand:{defaultValue:null,description:"",name:"brand",required:!1,type:{name:"string"}},login:{defaultValue:null,description:"",name:"login",required:!1,type:{name:"ReactNode"}},hasSearch:{defaultValue:null,description:"",name:"hasSearch",required:!1,type:{name:"boolean"}},sourceData:{defaultValue:null,description:"",name:"sourceData",required:!1,type:{name:"{ [k: string]: string | number; }[]"}},sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}},navLinks:{defaultValue:null,description:"",name:"navLinks",required:!1,type:{name:"LinkProps[]"}},mobileLinks:{defaultValue:null,description:"",name:"mobileLinks",required:!1,type:{name:"LinkProps[]"}},userMenuItems:{defaultValue:null,description:"",name:"userMenuItems",required:!1,type:{name:"{ [k: string]: string | number | (() => void); title: string; }[]"}},userInfo:{defaultValue:null,description:"",name:"userInfo",required:!1,type:{name:"UserInfoType"}},session:{defaultValue:null,description:"",name:"session",required:!1,type:{name:"unknown"}},searchOn:{defaultValue:null,description:"",name:"searchOn",required:!1,type:{name:"string"}},mobileLogin:{defaultValue:null,description:"",name:"mobileLogin",required:!1,type:{name:"mobileLoginProps"}}}}}catch{}export{V as T};
//# sourceMappingURL=TopNav-62ea6a16.js.map
