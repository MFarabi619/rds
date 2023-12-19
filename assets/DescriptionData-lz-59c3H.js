import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{p as l}from"./globalClasses-EYtDdY2O.js";import{C as u}from"./ChevronRightIcon-slJogYDx.js";const t={base:"grid border-b border-cu-black-200",spacing:"pt-8 pb-8 md:pt-8 md:pb-8 first:pt-0",accordion:"pt-4 pb-3 md:pt-6 md:pb-5 first:border-t",flexRow:"md:grid-cols-left-260 gap-2 md:gap-6",flexCol:"grid-row gap-2",button:"flex items-center w-full",chevron:"w-5 h-5 ml-auto text-cu-black-500 transition-transform",term:"font-semibold pb-2 mt-0 md:mt-0 mb-0",desc:"pl-0 md:pl-0 mt-0 md:mt-0 [&>*:first-child]:mt-0 md:[&>*:first-child]:mt-0 [&>*:last-child]:mb-2 md:[&>*:last-child]:mb-2"},_=e=>{const s=e.currentTarget,i=s.querySelector(".accordion__icon"),o=s.closest(".accordion"),a=o?o.querySelector(".accordion__content"):null,n=a!=null?a.hidden:null;n?(s.setAttribute("aria-expanded","true"),i&&(i.classList.remove("rotate-0"),i.classList.add("rotate-90"))):(s.setAttribute("aria-expanded","false"),i&&(i.classList.add("rotate-0"),i.classList.remove("rotate-90"))),a&&(a.hidden=!n)},p=({term:e,children:s})=>{const i=e&&typeof e=="string"?"accordion-"+e.toLowerCase().replace(/ +/g,"-"):"";return r.jsx(r.Fragment,{children:r.jsxs("div",{className:`accordion ${t.base} ${t.accordion}`,children:[r.jsx("dt",{className:`${t.term} ${l.base}`,children:r.jsxs("button",{className:`accordion__button ${t.button}`,"aria-expanded":"false","aria-controls":i,onClick:_,children:[e,r.jsx(u,{className:`accordion__icon ${t.chevron} rotate-0}`})]})}),r.jsx("dd",{className:`accordion__content ${t.desc}`,hidden:!0,id:i,children:s})]})})};p.displayName="Description.Accordion";try{Description.Accordion.displayName="Description.Accordion",Description.Accordion.__docgenInfo={description:"",displayName:"Description.Accordion",props:{term:{defaultValue:null,description:"",name:"term",required:!0,type:{name:"string"}}}}}catch{}const m=({term:e,children:s,useColumns:i})=>{const o=i?t.flexRow:t.flexCol;return r.jsxs("div",{className:`${t.base} ${o} ${t.spacing}`,children:[r.jsx("dt",{className:`${t.term}`,children:e}),r.jsx("dd",{className:`${t.desc}`,children:s})]})};m.displayName="Description.Meta";try{Description.Meta.displayName="Description.Meta",Description.Meta.__docgenInfo={description:"",displayName:"Description.Meta",props:{term:{defaultValue:null,description:"",name:"term",required:!1,type:{name:"string"}},useColumns:{defaultValue:null,description:"",name:"useColumns",required:!1,type:{name:"boolean"}}}}}catch{}const c=({children:e})=>r.jsx("dl",{className:`cu-description ${l.base}`,children:e}),d=Object.assign(c,{Accordion:p,Meta:m});try{c.displayName="DescriptionWrapper",c.__docgenInfo={description:"",displayName:"DescriptionWrapper",props:{}}}catch{}try{d.displayName="Description",d.__docgenInfo={description:"",displayName:"Description",props:{}}}catch{}const h=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}];export{d as D,h as a};