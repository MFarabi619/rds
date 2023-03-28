import{j as e,a as l,F as m}from"./jsx-runtime-9d2cd5de.js";import{X as B,B as z}from"./index-31110fe0.js";import{A as h}from"./Avatar-f604bcfa.js";import{D}from"./DropDown-744e650e.js";import{L as d}from"./Link-44b0899b.js";import{S as q}from"./Search-25f63c88.js";import{T as L}from"./TopNavLoader-e6c62d54.js";import{v as t}from"./disclosure-76f74e80.js";const V=({children:f,logoUrl:x,title:u,brand:v,hasSearch:b,sourceData:c,searchOn:g,navLinks:k,mobileLinks:N,userMenuItems:s,userInfo:a,session:y,sticky:w,login:C,mobileLogin:n})=>{const _=v?l("div",{className:"flex flex-shrink-0 items-center",children:[l("h1",{className:"sr-only",children:[" ",u," "]}),e("img",{className:"h-16 w-auto",src:v,alt:u})]}):l("div",{className:"flex flex-shrink-0 items-center",children:[e("img",{className:"h-10 w-auto",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-shield.svg",alt:"Carleton Shield"}),e("h1",{className:"flex flex-shrink-0 items-center pl-3 pr-2 text-2xl font-semibold",children:u})]});return e(t,{as:"nav",className:` ${w?"sticky":""} not-prose  relative top-0 z-50 border-t-2 border-cu-red bg-white px-6 shadow-md lg:px-8`,id:"topNav",children:({open:T})=>l(m,{children:[l("div",{className:"mx-auto flex h-20 max-w-7xl gap-6",children:[e("div",{className:"flex flex-shrink-0 items-center hover:text-cu-red",children:e(d,{href:x||"/",children:_})}),e("div",{className:"flex items-center lg:hidden",children:l("div",{className:"absolute right-4 ml-4",children:[b&&c&&e("div",{className:"inline-flex items-center p-2 ",children:e(q,{sourceData:c,searchOn:g})}),l(t.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cu-red-500",children:[e("span",{className:"sr-only",children:"main menu"}),T?e(B,{className:"block h-6 w-6","aria-hidden":"true"}):e(z,{className:"block h-6 w-6","aria-hidden":"true"})]})]})}),e("ul",{className:"hidden lg:flex lg:flex-1 lg:gap-6",children:k&&k.map((i,r)=>e("li",{className:`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-cu-black-800 hover:border-cu-red hover:text-cu-red ${i.active?"border-cu-red text-cu-red":"border-transparent"}`,children:e(d,{href:i.link,children:i.title})},r))}),l("div",{className:"hidden lg:flex lg:items-center lg:gap-6",children:[b&&c&&e("div",{className:"inline-flex items-center ",children:e(q,{sourceData:c,searchOn:g})}),f,l(m,{children:[y===null&&C,!a&&y!==null&&e(L,{})]}),a&&!s&&e(h,{user:a,size:"xs",rounded:"full"}),a&&s&&e(D,{listItems:s,menuAlign:"right",children:e(h,{user:a,size:"xs",rounded:"full"})})]})]}),e(t.Panel,{className:"-mx-2 sm:-mx-4 lg:-mx-8 lg:hidden",children:({close:i})=>l(m,{children:[l("div",{className:"space-y-1 pt-2 pb-3",children:[N&&N.map((r,p)=>e(t.Button,{as:"div",className:`block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red ${r.active?"border-l-4 border-cu-red bg-gradient-to-r from-cu-red-50 to-white":"border-transparent"}`,children:e(d,{href:r.link,onClick:o=>{o.preventDefault(),i()},children:r.title})},p)),!a&&n&&e(m,{children:e(t.Button,{as:"div",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red ",children:e(d,{href:n.link?n.link:"",onClick:r=>{n.onClick&&r.preventDefault(),n.onClick&&n.onClick(r),i()},children:n.title})})})]}),a&&l("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[l("div",{className:"flex items-center px-4",children:[e("div",{className:"flex-shrink-0",children:e(h,{user:a,size:"xs",rounded:"full"})}),e("div",{className:"ml-3",children:e("div",{className:"text-base font-medium text-gray-800",children:a.firstName+" "+a.lastName})})]}),e("div",{className:"mt-3 space-y-1",children:s&&s.map((r,p)=>e(t.Button,{as:"div",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red ",children:e(d,{href:r.href?r.href:"",onClick:o=>{r.onClick&&o.preventDefault(),r.onClick&&r.onClick(o),i()},children:r.title})},p))})]})]})})]})})};try{V.displayName="TopNav",V.__docgenInfo={description:"",displayName:"TopNav",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},logoUrl:{defaultValue:null,description:"",name:"logoUrl",required:!1,type:{name:"string"}},brand:{defaultValue:null,description:"",name:"brand",required:!1,type:{name:"string"}},login:{defaultValue:null,description:"",name:"login",required:!1,type:{name:"ReactNode"}},hasSearch:{defaultValue:null,description:"",name:"hasSearch",required:!1,type:{name:"boolean"}},sourceData:{defaultValue:null,description:"",name:"sourceData",required:!1,type:{name:"{ [k: string]: string | number; }[]"}},sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}},navLinks:{defaultValue:null,description:"",name:"navLinks",required:!1,type:{name:"LinkProps[]"}},mobileLinks:{defaultValue:null,description:"",name:"mobileLinks",required:!1,type:{name:"LinkProps[]"}},userMenuItems:{defaultValue:null,description:"",name:"userMenuItems",required:!1,type:{name:"{ [k: string]: string | number | (() => void); title: string; }[]"}},userInfo:{defaultValue:null,description:"",name:"userInfo",required:!1,type:{name:"UserInfoType"}},session:{defaultValue:null,description:"",name:"session",required:!1,type:{name:"unknown"}},searchOn:{defaultValue:null,description:"",name:"searchOn",required:!1,type:{name:"string"}},mobileLogin:{defaultValue:null,description:"",name:"mobileLogin",required:!1,type:{name:"mobileLoginProps"}}}}}catch{}export{V as T};
//# sourceMappingURL=TopNav-328e0389.js.map
