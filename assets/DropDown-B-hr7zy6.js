import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as p}from"./index-4g5l5LRQ.js";import{C as u}from"./ChevronDownIcon-qyckNURu.js";import{I as f}from"./Icon-JTOhHsqE.js";import{L as h}from"./Link-G17LtU-F.js";import{k as n}from"./popover-tP4paLqk.js";import{t as x}from"./transition-8qPHkook.js";const v={core:"absolute z-10 w-48 py-1 mt-2 origin-top-left bg-white border rounded-md shadow-lg border-cu-black-100 focus:outline-none"},o=({children:a,buttonText:t,renderAs:l="div",listItems:i,menuAlign:c="left"})=>e.jsxs(n,{as:"div",className:"cu-dropdown not-prose relative inline-block flex-shrink-0",children:[e.jsx("div",{children:e.jsxs(n.Button,{as:l,className:"cursor-pointer",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),a&&!t?a:e.jsxs("p",{className:"flex",children:[t,e.jsx(u,{className:"ml-1 mt-1 h-4 w-4","aria-hidden":"true"})]})]})}),e.jsx(x,{as:p.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(n.Panel,{static:!0,className:`${v.core} ${c==="left"?"left-0":"right-0"}`,children:({close:d})=>e.jsx(e.Fragment,{children:i.map((r,m)=>e.jsx("div",{children:e.jsxs(h,{href:r.href?r.href:"",className:"group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",onClick:s=>{r.onClick&&s.preventDefault(),r.onClick&&r.onClick(s),d()},children:[r.icon&&e.jsx(f,{icon:r.icon,"aria-hidden":"true",size:"4"}),e.jsx("span",{className:r.icon?"ml-3":"",children:r.title})]})},m))})})})]});try{o.displayName="DropDown",o.__docgenInfo={description:"",displayName:"DropDown",props:{buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},renderAs:{defaultValue:{value:"div"},description:"",name:"renderAs",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"div"'}]}},menuAlign:{defaultValue:{value:"left"},description:"",name:"menuAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},listItems:{defaultValue:null,description:"",name:"listItems",required:!0,type:{name:"DropDownItemProps[]"}}}}}catch{}export{o as D};