import{j as e}from"./jsx-runtime-daf202a7.js";import{B as I}from"./Button-9a118519.js";import{e as T}from"./optionClasses-fb4783dc.js";const f={base:"flex flex-wrap gap-6 mx-auto md:flex-nowrap md:gap-12 not-contained not-prose",border:"border-b border-cu-black-50 pb-6 md:mb-12 shadow-hero-text-image md:pb-10"},l={contentWrapper:"flex flex-col gap-4 md:gap-6 flex-[0_0_100%] md:max-w-4xl md:flex-1",contentTopSpace:"md:pt-4",header:"text-2xl not-italic font-semibold md:leading-10 sm:text-3xl md:text-4xl",headerOne:"text-3xl lg:text-5xl lg:leading-[3.5rem]",pronoun:"text-xl lg:text-3xl font-light lowercase text-cu-black-500",listLink:"font-semibold text-cu-red hover:text-cyan-600",largeText:"text-lg font-light italic text-cu-black-600 md:text-2xl md:leading-9 mb-2 md:max-w-3xl"},p={mediaWrapper:"flex-[0_0_100%] md:flex-none md:w-[40%]",mediaBgImage:"relative rounded bg-cover bg-no-repeat min-h-[220px]",svgLeft:"hidden lg:block absolute -left-px top-0 z-10 h-full",svgRight:"hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]"},m={flex:"flex items-center gap-4",link:"text-cu-black-400",icon:"w-6 h-6 md:w-8 md:h-8"},v=({children:a,title:t,paragraph:n,headerType:r="h2",hasMediaCol:i})=>{const s=i?"md:py-4":"";return e.jsxs("div",{className:`${l.contentWrapper} ${s}`,children:[r==="h1"&&e.jsx("h1",{className:`${l.header} ${l.headerOne}`,children:t}),r==="h2"&&e.jsx("h2",{className:`${l.header}`,children:t}),n&&e.jsx("p",{className:l.largeText,children:n}),a]})};v.displayName="HeroTextImage.Content";try{HeroTextImage.Content.displayName="HeroTextImage.Content",HeroTextImage.Content.__docgenInfo={description:"",displayName:"HeroTextImage.Content",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},hasMediaCol:{defaultValue:null,description:"",name:"hasMediaCol",required:!1,type:{name:"boolean"}}}}}catch{}const j=({children:a,title:t,startDate:n,endDate:r,location:i,cost:s,...d})=>{const{contactName:o,contactPhone:u,contactEmail:c}=d;return e.jsxs("div",{className:`${l.contentWrapper} ${l.contentTopSpace}`,children:[e.jsx("h1",{className:`${l.header} ${l.headerOne}`,children:t}),n&&e.jsx("p",{className:l.largeText,children:n}),r&&e.jsx("p",{className:l.largeText,children:r}),e.jsxs("ul",{children:[i&&e.jsx("li",{children:i}),s&&e.jsx("li",{children:s})]}),Object.values(d).some(x=>x)&&e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("strong",{className:"font-semibold",children:"Event Contact"})}),o&&e.jsxs("li",{children:[o&&c&&e.jsx("a",{className:l.listLink,href:c,children:o}),o&&!c&&o,u&&e.jsxs(e.Fragment,{children:[", ",u]})]})]})}),a]})};j.displayName="HeroTextImage.Event";try{HeroTextImage.Event.displayName="HeroTextImage.Event",HeroTextImage.Event.__docgenInfo={description:"",displayName:"HeroTextImage.Event",props:{designation:{defaultValue:null,description:"",name:"designation",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string"}},cost:{defaultValue:null,description:"",name:"cost",required:!1,type:{name:"string"}},contactName:{defaultValue:null,description:"",name:"contactName",required:!1,type:{name:"string"}},contactPhone:{defaultValue:null,description:"",name:"contactPhone",required:!1,type:{name:"string"}},contactEmail:{defaultValue:null,description:"",name:"contactEmail",required:!1,type:{name:"string"}}}}}catch{}const _=({children:a,designation:t,title:n,jobTitle:r,pronoun:i,...s})=>{const{degrees:d,building:o,room:u,email:c,phone:x,phoneExt:h}=s;return e.jsxs("div",{className:`${l.contentWrapper} ${l.contentTopSpace}`,children:[e.jsxs("h1",{className:`${l.header} ${l.headerOne}`,children:[t&&`${t} `,n," ",i&&e.jsxs("span",{className:l.pronoun,children:["(",i,")"]})]}),r&&e.jsx("p",{className:l.largeText,children:r}),Object.values(s).some(w=>w)&&e.jsxs("ul",{children:[d&&e.jsx("li",{children:d}),o&&e.jsxs("li",{children:[u&&"123-B ",o]}),c&&e.jsx("li",{children:e.jsx("a",{className:l.listLink,href:`mailto:${c}`,children:c})}),x&&e.jsxs("li",{children:[x,h&&` ${h}`]})]}),a]})};_.displayName="HeroTextImage.People";try{HeroTextImage.People.displayName="HeroTextImage.People",HeroTextImage.People.__docgenInfo={description:"",displayName:"HeroTextImage.People",props:{designation:{defaultValue:null,description:"",name:"designation",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},pronoun:{defaultValue:null,description:"",name:"pronoun",required:!1,type:{name:"string"}},degrees:{defaultValue:null,description:"",name:"degrees",required:!1,type:{name:"string"}},building:{defaultValue:null,description:"",name:"building",required:!1,type:{name:"string"}},room:{defaultValue:null,description:"",name:"room",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}},phoneExt:{defaultValue:null,description:"",name:"phoneExt",required:!1,type:{name:"string"}}}}}catch{}const N=({resume:a,linkedin:t,twitter:n,facebook:r})=>e.jsxs("ul",{className:m.flex,children:[a&&e.jsx("li",{children:e.jsx(I,{isSmall:!0,color:"grey",onClick:()=>{window.location.href=a},title:"Resume"})}),t&&e.jsx("li",{children:e.jsxs("a",{className:`${m.link} hover:text-[#0072b1]`,href:t,children:[e.jsx("span",{className:"sr-only",children:"View on LinkedIn"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",className:m.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})]})}),n&&e.jsx("li",{children:e.jsxs("a",{className:`${m.link} hover:text-[#00acee]`,href:t,children:[e.jsx("span",{className:"sr-only",children:"View on Twitter"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:m.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})]})}),r&&e.jsx("li",{children:e.jsxs("a",{className:`${m.link} hover:text-[#3b5998]`,href:t,children:[e.jsx("span",{className:"sr-only",children:"View on Facebook"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:m.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})})]})})]});N.displayName="HeroTextImage.Social";try{HeroTextImage.Social.displayName="HeroTextImage.Social",HeroTextImage.Social.__docgenInfo={description:"",displayName:"HeroTextImage.Social",props:{resume:{defaultValue:null,description:"",name:"resume",required:!1,type:{name:"string"}},linkedin:{defaultValue:null,description:"",name:"linkedin",required:!1,type:{name:"string"}},twitter:{defaultValue:null,description:"",name:"twitter",required:!1,type:{name:"string"}},facebook:{defaultValue:null,description:"",name:"facebook",required:!1,type:{name:"string"}}}}}catch{}const V=({children:a,image:t,angle:n,focalPointX:r="50",focalPointY:i="50"})=>{let s=null,d=null;switch(n){case"left":s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:p.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break;case"dual":s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:p.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})}),d=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:p.svgRight,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break}const o=t?p.mediaBgImage:"",u=o?{backgroundImage:`url(${t})`,backgroundPosition:`${r}% ${i}%`}:{};return e.jsxs("div",{className:`${p.mediaWrapper} ${o}`,style:u,children:[s,d,a]})};V.displayName="HeroTextImage.Media";try{HeroTextImage.Media.displayName="HeroTextImage.Media",HeroTextImage.Media.__docgenInfo={description:"",displayName:"HeroTextImage.Media",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"",name:"angle",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"none"'},{value:'"dual"'}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}}}}}catch{}const g=({children:a,maxWidth:t="7xl",hasBorder:n,reverse:r})=>{const i=r?"flex-row-reverse":"",s=n?f.border:"";return e.jsx("div",{className:`cu-hero-textimage ${f.base} ${T[t]} ${i} ${s}`,children:a})},y=Object.assign(g,{Content:v,Event:j,People:_,Social:N,Media:V});try{g.displayName="HeroTextImageWrapper",g.__docgenInfo={description:"",displayName:"HeroTextImageWrapper",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="HeroTextImage",y.__docgenInfo={description:"",displayName:"HeroTextImage",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}export{y as H};
//# sourceMappingURL=HeroTextImage-0453d21e.js.map
