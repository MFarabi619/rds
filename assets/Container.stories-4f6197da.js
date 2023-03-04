import{j as c,F as f}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const e={base:"cu-container py-10 px-8 -mx-8 md:py-14",white:"cu-container-white [&+.cu-container-white]:pt-0 bg-white",grey:"cu-container-grey bg-cu-black-50 [&+.cu-container-grey]:pt-0",width5xl:"[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto",width7xl:"[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto",widthFull:"[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto",autoMargin:"[&>:not(.cu-container):not(.cu-column)]:mx-auto",prose:"prose prose-rds prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg"},r=({as:n="section",children:p,hasProse:g=!1,bgColor:y="white",maxWidth:t="5xl"})=>{const h=g?e.prose:"[&>*:first-child]:-mt-0",x=y==="grey"?`${e.grey}`:`${e.white}`,w=t?`${e.autoMargin} [&>:not(.cu-container):not(.cu-column)]:max-w-${t}`:"";return c(f,{children:c(n,{className:`${e.base} ${x} ${w} ${h}`,children:p})})};try{r.displayName="Container",r.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}},hasProse:{defaultValue:{value:"false"},description:"",name:"hasProse",required:!1,type:{name:"boolean"}},bgColor:{defaultValue:{value:"white"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"grey"'},{value:'"white"'}]}},maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}}}}}catch{}const _={title:"Layouts/Container",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={};o.args={children:"Section HTML5 tag as container component",bgColor:"white",hasProse:!1};const a={args:{children:"Container component with grey background",bgColor:"grey"}};var s,u,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Container component with grey background',
    bgColor: 'grey'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const $=["Primary","GreyBackground"];export{a as GreyBackground,o as Primary,$ as __namedExportsOrder,_ as default};
//# sourceMappingURL=Container.stories-4f6197da.js.map