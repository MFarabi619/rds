import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({rows:e})=>r.jsx("div",{className:"cu-description cu-block-spacing",children:Array.from({length:e},(s,t)=>r.jsx("div",{className:"accordion grid border-b border-cu-black-100 pt-4 pb-3 md:pt-6 md:pb-5 first:border-t",children:r.jsx("span",{className:"animate-pulse block w-full h-8 my-2 rounded-md bg-cu-black-100"})},t))});n.displayName="DescriptionLoaderAccordion.Accordion";n.__docgenInfo={description:"",methods:[],displayName:"DescriptionLoaderAccordion.Accordion",props:{rows:{required:!0,tsType:{name:"number"},description:""}}};const d=({rows:e,useColumns:s})=>r.jsx("div",{className:"cu-description cu-block-spacing",children:Array.from({length:e},(t,f)=>r.jsxs("div",{className:s?"grid border-b border-cu-black-100 pt-4 pb-3 md:pt-6 md:pb-5 last:border-none first:pt-0 first:md:pt-0 md:grid-cols-left-260 gap-2 md:gap-6":"grid border-b border-cu-black-100 pt-4 pb-3 md:pt-6 md:pb-5 last:border-none first:pt-0 first:md:pt-0 grid-row gap-5",children:[r.jsx("span",{className:`animate-pulse block w-full ${s?"h-10":"h-8"} rounded-md bg-cu-black-100`}),r.jsx("span",{className:`animate-pulse block w-full ${s?"h-20":"h-16"} rounded-md bg-cu-black-100`})]},f))});d.displayName="DescriptionLoader.Meta";d.__docgenInfo={description:"",methods:[],displayName:"DescriptionLoader.Meta",props:{rows:{required:!0,tsType:{name:"number"},description:""},useColumns:{required:!1,tsType:{name:"boolean"},description:""}}};const x=({children:e})=>r.jsx("dl",{className:"cu-block-spacing",children:e}),o=Object.assign(x,{Accordion:n,Meta:d});x.__docgenInfo={description:"",methods:[],displayName:"DescriptionLoaderWrapper"};const N={title:"Components/Load Screens/Description Loader",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={render:e=>r.jsx(o,{...e,children:r.jsx(o.Meta,{rows:2})})},c={render:e=>r.jsx(o,{...e,children:r.jsx(o.Meta,{rows:2,useColumns:!0})})},i={render:e=>r.jsx(o,{...e,children:r.jsx(o.Accordion,{rows:2})})};var p,m,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <DescriptionLoader {...args}>
      <DescriptionLoader.Meta rows={2}></DescriptionLoader.Meta>
    </DescriptionLoader>
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,b,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <DescriptionLoader {...args}>
      <DescriptionLoader.Meta rows={2} useColumns></DescriptionLoader.Meta>
    </DescriptionLoader>
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var L,D,h;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <DescriptionLoader {...args}>
      <DescriptionLoader.Accordion rows={2}></DescriptionLoader.Accordion>
    </DescriptionLoader>
}`,...(h=(D=i.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const k=["Primary","WithColumn","Accordion"];export{i as Accordion,a as Primary,c as WithColumn,k as __namedExportsOrder,N as default};