import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{p as f}from"./globalClasses-DjGLNohy.js";import{r as c}from"./index-uCp2LrAq.js";function b({title:e,titleId:s,...t},i){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},t),e?c.createElement("title",{id:s},e):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const g=c.forwardRef(b),a={base:"grid border-b border-cu-black-200",term:"font-semibold mt-0 md:mt-0 mb-0",desc:"p-0 md:p-0 mt-0 md:mt-0"},h=e=>{const s=e.currentTarget,t=s.querySelector(".accordion__icon"),i=s.closest(".accordion"),o=i?i.querySelector(".accordion__content"):null,n=o!=null?o.hidden:null;n?(s.setAttribute("aria-expanded","true"),t&&(t.classList.remove("rotate-0"),t.classList.add("rotate-90"))):(s.setAttribute("aria-expanded","false"),t&&(t.classList.add("rotate-0"),t.classList.remove("rotate-90"))),o&&(o.hidden=!n)},d=({term:e,children:s})=>{const t=e&&typeof e=="string"?"accordion-"+e.toLowerCase().replace(/ +/g,"-"):"";return r.jsx(r.Fragment,{children:r.jsxs("div",{className:`accordion ${a.base} pt-4 pb-3 md:pt-6 md:pb-5 first:border-t`,children:[r.jsx("dt",{className:`${a.term} ${f.base}`,children:r.jsxs("button",{className:"flex items-center w-full accordion__button","aria-expanded":"false","aria-controls":t,onClick:h,children:[e,r.jsx(g,{className:"w-5 h-5 ml-auto transition-transform rotate-0 accordion__icon text-cu-black-500"})]})}),r.jsx("dd",{className:`accordion__content ${a.desc}`,hidden:!0,id:t,children:s})]})})};d.displayName="Description.Accordion";d.__docgenInfo={description:"",methods:[],displayName:"Description.Accordion",props:{term:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const l=({term:e,children:s,hasBorder:t,useColumns:i,isSmall:o})=>{const n=t?"first:border-t":"first:pt-0",m=i?"md:grid-cols-left-260 gap-2 md:gap-6":"grid-row gap-2",u=o?"text-base md:text-lg pt-6 pb-6":"prose prose-lg md:prose-xl prose-rds max-w-none pt-8 pb-8";return r.jsxs("div",{className:`${a.base} ${m} ${n} ${u}`,children:[r.jsx("dt",{className:`${a.term}`,children:e}),r.jsx("dd",{className:`${a.desc}`,children:s})]})};l.displayName="Description.Meta";l.__docgenInfo={description:"",methods:[],displayName:"Description.Meta",props:{term:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hasBorder:{required:!1,tsType:{name:"boolean"},description:""},useColumns:{required:!1,tsType:{name:"boolean"},description:""},isSmall:{required:!1,tsType:{name:"boolean"},description:""}}};const p=({children:e})=>r.jsx("dl",{className:"cu-description not-prose",children:e}),j=Object.assign(p,{Accordion:d,Meta:l});p.displayName="Description";p.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}];export{j as D,v as a};
