import{j as e}from"./jsx-runtime-daf202a7.js";import{c as j,d as w}from"./optionClasses-767b8be6.js";import{g as B}from"./globalClasses-74916236.js";import{r as N}from"./index-ec8b93d8.js";const r={core:"not-prose relative py-16 md:py-32 md:flex md:items-center md:min-h-[240px]",buttonWrapper:"flex gap-6 flex-wrap md:flex-1",overlap:"md:pb-32 md:pt-20"},k={"light-grey":"bg-cu-black-50 text-cu-black-800","light-fade":"bg-gradient-to-b from-white to-cu-black-50 text-cu-black-800","dark-wave":"bg-cu-black-800 text-white","red-wave":"bg-gradient-to-b from-cu-red to-cu-red-900 text-white",animated:"bg-white text-cu-black-800",image:"bg-cu-black-800 text-white md:py-48"},d={title:"font-semibold text-3xl",paragraph:"text-base lg:text-xl max-w-5xl"},$=()=>{const a=N.useRef(null),l={"--gradient-color-1":"#c3e4ff","--gradient-color-2":"#6ec3f4","--gradient-color-3":"#eae2ff","--gradient-color-4":"#b9beff"};return e.jsx("canvas",{ref:a,style:{width:"100%",height:"100%",position:"absolute",top:"auto",left:"0",bottom:"0",overflow:"hidden",opacity:.5,...l},"data-transition-in":!0})},m=({children:a,title:l,paragraph:n,maxWidth:f="5xl",isType:t="light-grey",fontSize:g="5xl",align:s="center",hasOverlap:i,image:x,imageAlt:v="Decorative background image"})=>{const b=t==="image"?"md:py-48":"md:py-32",h=s==="center"?"flex-col last:[&>*]:justify-center":"flex-col md:flex-row last:[&>*]:justify-center last:md:[&>*]:justify-end",y=s==="center"?"text-center":"text-center md:text-left"+(n&&a?" md:max-w-3xl md:w-8/12":"");let o=i?r.overlap:"";return i&&t==="image"&&(o="md:pb-48 md:pt-40"),e.jsx(e.Fragment,{children:e.jsxs("header",{className:`${r.core} ${B.paddingX} ${k[t]} ${b} ${o}`,id:"banner",children:[e.jsxs("div",{className:`z-10 flex flex-1 ${h} m-auto items-center justify-center gap-8 ${j[f]} [&>*]:z-10`,children:[e.jsxs("div",{className:`flex flex-auto flex-col gap-6 ${y}`,children:[e.jsx("h1",{className:`${d.title} ${w[g]}`,children:l}),n&&e.jsx("p",{className:d.paragraph,children:n})]}),a]}),t==="image"&&e.jsx(q,{image:x,imageAlt:v}),t==="dark-wave"&&e.jsx(c,{}),t==="red-wave"&&e.jsx(c,{}),t==="animated"&&e.jsx($,{})]})})},q=({image:a,imageAlt:l})=>e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("img",{className:"h-full w-full object-cover",src:a,alt:l}),e.jsx("div",{className:"absolute inset-0 bg-cu-black-800 mix-blend-multiply","aria-hidden":"true"})]}),c=()=>e.jsx("div",{className:"absolute inset-0 bg-cu-waves-white-10 bg-contain bg-bottom bg-no-repeat md:bg-cover"}),p=({children:a})=>e.jsx("div",{className:`buttons ${r.buttonWrapper}`,children:a}),u=Object.assign(m,{ButtonGroup:p});m.displayName="Banner";p.displayName="Banner.ButtonGroup";try{u.displayName="Banner",u.__docgenInfo={description:"",displayName:"Banner",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"5xl"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"5xl"'},{value:'"6xl"'}]}},maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},isType:{defaultValue:{value:"light-grey"},description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"light-grey"'},{value:'"light-fade"'},{value:'"dark-wave"'},{value:'"red-wave"'},{value:'"image"'},{value:'"animated"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'}]}},hasOverlap:{defaultValue:null,description:"",name:"hasOverlap",required:!1,type:{name:"boolean"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:"Decorative background image"},description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}export{u as B};
//# sourceMappingURL=Banner-2ef25b74.js.map
