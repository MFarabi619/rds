import{j as e}from"./jsx-runtime-7ce7b810.js";import{B as H}from"./ButtonGroup-de72952e.js";import{B as y}from"./Button-4f82987c.js";import{d as q}from"./optionClasses-c898b830.js";const V={base:"flex flex-wrap gap-6 mx-auto md:flex-nowrap md:gap-12 not-contained not-prose mb-8 md:mb-12",border:"border-b border-cu-black-50 pb-6 shadow-hero-text-image md:pb-10"},a={contentWrapper:"flex flex-col gap-4 md:gap-6 flex-[0_0_100%] md:max-w-4xl md:flex-1",contentTopSpace:"md:pt-4",header:"not-italic font-semibold md:leading-10",headerOne:"text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]",headerTwo:"text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]",pronoun:"text-xl lg:text-3xl font-light lowercase text-cu-black-500",listItems:"text-lg",listLink:"font-semibold text-cu-red hover:text-cyan-600",largeText:"text-lg font-light italic text-cu-black-600 md:text-2xl md:leading-9 mb-2 md:max-w-3xl"},g={mediaWrapper:"flex-[0_0_100%] md:flex-none md:w-[40%]",mediaBgImage:"relative rounded bg-cover bg-no-repeat min-h-[220px]",svgLeft:"hidden lg:block absolute -left-px top-0 z-10 h-full",svgRight:"hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]"},p={flex:"flex items-center gap-6",link:"text-cu-black-400",icon:"w-6 h-6 md:w-8 md:h-8"},b=({children:l,title:r,paragraph:n,headerType:t="h2",isCenter:o,hasMediaCol:i})=>{const s=i?"md:py-4":"",d=o?"justify-center":"";return e.jsxs("div",{className:`${a.contentWrapper} ${s} ${d}`,children:[t==="h1"&&e.jsx("h1",{className:`${a.header} ${a.headerOne}`,children:r}),t==="h2"&&e.jsx("h2",{className:`${a.header} ${a.headerTwo}`,children:r}),n&&e.jsx("p",{className:a.largeText,children:n}),l]})};b.displayName="HeroTextImage.Content";try{HeroTextImage.Content.displayName="HeroTextImage.Content",HeroTextImage.Content.__docgenInfo={description:"",displayName:"HeroTextImage.Content",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},hasMediaCol:{defaultValue:null,description:"",name:"hasMediaCol",required:!1,type:{name:"boolean"}}}}}catch{}const w=({title:l,startDate:r,endDate:n,eventType:t,location:o,virtualType:i,virtualUrl:s,cost:d,contactName:c,contactPhone:m,contactEmail:u,primaryButtonUrl:x,primaryButtonText:f,secondaryButtonUrl:h,secondaryButtonText:j})=>e.jsxs("div",{className:`${a.contentWrapper} ${a.contentTopSpace}`,children:[e.jsx("h1",{className:`${a.header} ${a.headerOne}`,children:l}),r&&e.jsx("p",{className:a.largeText,children:r}),n&&e.jsx("p",{className:a.largeText,children:n}),e.jsxs("ul",{className:a.listItems,children:[e.jsx("li",{children:e.jsxs("strong",{className:"font-semibold",children:[t," Event"]})}),(t==="In-Person"||t==="Hybrid")&&o&&e.jsx("li",{children:o}),(t==="Virtual"||t==="Hybrid")&&i&&s&&e.jsx("li",{children:e.jsxs("a",{className:a.listLink,href:s,children:[i," meeting link"]})}),(t==="Virtual"||t==="Hybrid")&&i&&!s&&e.jsx("li",{children:"Meeting link is not yet available"})]}),(d||c||m||u)&&e.jsx(e.Fragment,{children:e.jsxs("ul",{className:a.listItems,children:[d&&e.jsxs("li",{children:[e.jsx("strong",{className:"font-semibold",children:"Cost: "}),d]}),c&&e.jsxs("li",{children:[e.jsx("strong",{className:"font-semibold",children:"Contact: "}),c&&e.jsxs(e.Fragment,{children:[" ",c]}),u&&e.jsxs(e.Fragment,{children:[" | ",e.jsx("a",{className:a.listLink,href:`mailto:${u}`,children:u})]}),m&&e.jsxs(e.Fragment,{children:[" | ",m]})]})]})}),x&&e.jsxs(H,{children:[x&&e.jsx(y,{isSmall:!0,onClick:()=>{typeof x=="string"&&(window.location.href=x)},title:f||"Register Now"}),h&&j&&e.jsx(y,{isSmall:!0,color:"grey",onClick:()=>{typeof h=="string"&&(window.location.href=h)},title:j})]})]});w.displayName="HeroTextImage.Event";try{HeroTextImage.Event.displayName="HeroTextImage.Event",HeroTextImage.Event.__docgenInfo={description:"",displayName:"HeroTextImage.Event",props:{designation:{defaultValue:null,description:"",name:"designation",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"string"}},eventType:{defaultValue:null,description:"",name:"eventType",required:!0,type:{name:"enum",value:[{value:'"In-Person"'},{value:'"Virtual"'},{value:'"Hybrid"'}]}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string"}},virtualType:{defaultValue:null,description:"",name:"virtualType",required:!1,type:{name:"enum",value:[{value:'"Teams"'},{value:'"Zoom"'}]}},virtualUrl:{defaultValue:null,description:"",name:"virtualUrl",required:!1,type:{name:"string"}},primaryButtonUrl:{defaultValue:null,description:"",name:"primaryButtonUrl",required:!1,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonUrl:{defaultValue:null,description:"",name:"secondaryButtonUrl",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},cost:{defaultValue:null,description:"",name:"cost",required:!1,type:{name:"string"}},contactName:{defaultValue:null,description:"",name:"contactName",required:!1,type:{name:"string"}},contactPhone:{defaultValue:null,description:"",name:"contactPhone",required:!1,type:{name:"string"}},contactEmail:{defaultValue:null,description:"",name:"contactEmail",required:!1,type:{name:"string"}}}}}catch{}const I=({children:l,designation:r,title:n,jobTitle:t,pronoun:o,...i})=>{const{degrees:s,building:d,room:c,email:m,phone:u,phoneExt:x}=i;return e.jsxs("div",{className:`${a.contentWrapper} ${a.contentTopSpace}`,children:[e.jsxs("h1",{className:`${a.header} ${a.headerOne}`,children:[r&&`${r} `,n," ",o&&e.jsxs("span",{className:a.pronoun,children:["(",o,")"]})]}),t&&e.jsx("p",{className:a.largeText,children:t}),Object.values(i).some(f=>f)&&e.jsxs("ul",{children:[s&&e.jsx("li",{children:s}),d&&e.jsxs("li",{children:[c&&`${c} `,d]}),m&&e.jsx("li",{children:e.jsx("a",{className:a.listLink,href:`mailto:${m}`,children:m})}),u&&e.jsxs("li",{children:[u,x&&` x${x}`]})]}),l]})};I.displayName="HeroTextImage.People";try{HeroTextImage.People.displayName="HeroTextImage.People",HeroTextImage.People.__docgenInfo={description:"",displayName:"HeroTextImage.People",props:{designation:{defaultValue:null,description:"",name:"designation",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},pronoun:{defaultValue:null,description:"",name:"pronoun",required:!1,type:{name:"string"}},degrees:{defaultValue:null,description:"",name:"degrees",required:!1,type:{name:"string"}},building:{defaultValue:null,description:"",name:"building",required:!1,type:{name:"string"}},room:{defaultValue:null,description:"",name:"room",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}},phoneExt:{defaultValue:null,description:"",name:"phoneExt",required:!1,type:{name:"string"}}}}}catch{}const N=({resume:l,linkedin:r,twitter:n,facebook:t})=>e.jsxs("div",{className:p.flex,children:[l&&e.jsx(y,{isSmall:!0,color:"grey",onClick:()=>{window.location.href=l},title:"Resume"}),e.jsxs("ul",{className:p.flex,children:[r&&e.jsx("li",{children:e.jsxs("a",{className:`${p.link} hover:text-[#0072b1]`,href:r,children:[e.jsx("span",{className:"sr-only",children:"View on LinkedIn"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",className:p.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})]})}),n&&e.jsx("li",{children:e.jsxs("a",{className:`${p.link} hover:text-[#00acee]`,href:r,children:[e.jsx("span",{className:"sr-only",children:"View on Twitter"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:p.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})]})}),t&&e.jsx("li",{children:e.jsxs("a",{className:`${p.link} hover:text-[#3b5998]`,href:r,children:[e.jsx("span",{className:"sr-only",children:"View on Facebook"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:p.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})})]})})]})]});N.displayName="HeroTextImage.Social";try{HeroTextImage.Social.displayName="HeroTextImage.Social",HeroTextImage.Social.__docgenInfo={description:"",displayName:"HeroTextImage.Social",props:{resume:{defaultValue:null,description:"",name:"resume",required:!1,type:{name:"string"}},linkedin:{defaultValue:null,description:"",name:"linkedin",required:!1,type:{name:"string"}},twitter:{defaultValue:null,description:"",name:"twitter",required:!1,type:{name:"string"}},facebook:{defaultValue:null,description:"",name:"facebook",required:!1,type:{name:"string"}}}}}catch{}const T=({children:l,image:r,angle:n,focalPointX:t="50",focalPointY:o="50",hasMobileImage:i})=>{let s=null,d=null;switch(n){case"left":s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:g.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break;case"dual":s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:g.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})}),d=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:g.svgRight,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break}const c=r?g.mediaBgImage:"",m=i?"":"hidden md:block",u=c?{backgroundImage:`url(${r})`,backgroundPosition:`${t}% ${o}%`}:{};return e.jsxs("div",{className:`${g.mediaWrapper} ${c} ${m}`,style:u,children:[s,d,l]})};T.displayName="HeroTextImage.Media";try{HeroTextImage.Media.displayName="HeroTextImage.Media",HeroTextImage.Media.__docgenInfo={description:"",displayName:"HeroTextImage.Media",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"",name:"angle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"dual"'}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}},hasMobileImage:{defaultValue:null,description:"",name:"hasMobileImage",required:!1,type:{name:"boolean"}}}}}catch{}const v=({children:l,maxWidth:r="7xl",hasBorder:n,reverse:t})=>{const o=t?"flex-row-reverse":"",i=n?V.border:"";return e.jsx("div",{className:`cu-hero-textimage ${V.base} ${q[r]} ${o} ${i}`,children:l})},_=Object.assign(v,{Content:b,Event:w,People:I,Social:N,Media:T});try{v.displayName="HeroTextImageWrapper",v.__docgenInfo={description:"",displayName:"HeroTextImageWrapper",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="HeroTextImage",_.__docgenInfo={description:"",displayName:"HeroTextImage",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as H};
//# sourceMappingURL=HeroTextImage-f40f7d7a.js.map
