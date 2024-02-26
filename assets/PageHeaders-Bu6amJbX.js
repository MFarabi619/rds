import{j as e}from"./jsx-runtime-CKrituN3.js";import{a as v,p as j}from"./globalClasses-GmQrI9Vi.js";import{B as V}from"./Button-DZIOirHR.js";const l={listWrapper:"cu-pageheaders-group not-prose mb-6 mt-6",listGroup:"pl-0 list-none",listVertical:"space-y-0.5",listHorizontal:"flex gap-6 items-center",listLink:"font-semibold text-cu-red hover:underline"},t={link:"text-cu-black-400",icon:"w-6 h-6 md:w-8 md:h-8"},w=({jobTitle:s,...c})=>{const{degrees:a,building:d,room:r,email:i,phone:m,phoneExt:o,resume:p,website:u,linkedin:n,twitter:x,facebook:h}=c,f=["degrees","building","room","email","phone","phoneExt"],y=["resume","linkedin","twitter","facebook"];return e.jsxs(e.Fragment,{children:[s&&e.jsx("p",{className:v.largeLight,children:s}),Object.values(f).some(g=>g)&&e.jsx("div",{className:`${l.listWrapper} ${j.base}`,children:e.jsxs("ul",{className:l.listVertical,children:[a&&e.jsx("li",{children:a}),d&&e.jsxs("li",{children:[r&&`${r} `,d]}),i&&e.jsx("li",{children:e.jsx("a",{className:l.listLink,href:`mailto:${i}`,children:i})}),m&&e.jsxs("li",{children:[m,o&&` x${o}`]})]})}),Object.values(y).some(g=>g)&&e.jsx("div",{className:`${l.listWrapper} ${j.base}`,children:e.jsxs("ul",{className:l.listHorizontal,children:[p&&e.jsx("li",{children:e.jsx(V,{isSmall:!0,color:"grey",onClick:()=>{window.location.href=p},title:"Resume"})}),n&&e.jsx("li",{children:e.jsxs("a",{className:`${t.link} hover:text-[#0072b1]`,href:n,children:[e.jsx("span",{className:"sr-only",children:"View on LinkedIn"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",className:t.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})]})}),x&&e.jsx("li",{children:e.jsxs("a",{className:`${t.link} hover:text-[#00acee]`,href:n,children:[e.jsx("span",{className:"sr-only",children:"View on Twitter"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:t.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})]})}),h&&e.jsx("li",{children:e.jsxs("a",{className:`${t.link} hover:text-[#3b5998]`,href:n,children:[e.jsx("span",{className:"sr-only",children:"View on Facebook"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:t.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})})]})}),u&&e.jsx("li",{children:e.jsxs("a",{className:`${t.link} hover:text-[#3e8060]`,href:u,children:[e.jsx("span",{className:"sr-only",children:"View Website"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",fill:"currentColor",className:t.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z"})})]})})]})})]})};w.displayName="PageHeaders.People";try{PageHeaders.People.displayName="PageHeaders.People",PageHeaders.People.__docgenInfo={description:"",displayName:"PageHeaders.People",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},degrees:{defaultValue:null,description:"",name:"degrees",required:!1,type:{name:"string"}},building:{defaultValue:null,description:"",name:"building",required:!1,type:{name:"string"}},room:{defaultValue:null,description:"",name:"room",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}},phoneExt:{defaultValue:null,description:"",name:"phoneExt",required:!1,type:{name:"string"}},resume:{defaultValue:null,description:"",name:"resume",required:!1,type:{name:"string"}},website:{defaultValue:null,description:"",name:"website",required:!1,type:{name:"string"}},linkedin:{defaultValue:null,description:"",name:"linkedin",required:!1,type:{name:"string"}},twitter:{defaultValue:null,description:"",name:"twitter",required:!1,type:{name:"string"}},facebook:{defaultValue:null,description:"",name:"facebook",required:!1,type:{name:"string"}}}}}catch{}const q=({startDate:s,endDate:c,eventType:a,location:d,virtualType:r,virtualUrl:i,cost:m,contactName:o,contactPhone:p,contactEmail:u,primaryButtonUrl:n,primaryButtonText:x,secondaryButtonUrl:h,secondaryButtonText:f})=>{const y=["cost","contactName","contactPhone","contactEmail"];return e.jsxs(e.Fragment,{children:[s&&e.jsx("p",{className:v.largeLight,children:s}),c&&e.jsx("p",{className:v.largeLight,children:c}),e.jsx("div",{className:`${l.listWrapper} ${j.base}`,children:e.jsxs("ul",{className:l.listVertical,children:[e.jsx("li",{children:e.jsxs("strong",{className:"font-semibold",children:[a," Event"]})}),(a==="In-Person"||a==="Hybrid")&&d&&e.jsx("li",{children:d}),(a==="Virtual"||a==="Hybrid")&&r&&i&&e.jsx("li",{children:e.jsxs("a",{className:l.listLink,href:i,children:[r," meeting link"]})}),(a==="Virtual"||a==="Hybrid")&&r&&!i&&e.jsx("li",{children:"Meeting link is not yet available"}),m&&e.jsxs("li",{children:[e.jsx("strong",{className:"font-semibold",children:"Cost: "}),m]})]})}),Object.values(y).some(g=>g)&&e.jsx("div",{className:`${l.listWrapper} ${j.base}`,children:e.jsx("ul",{className:l.listVertical,children:o&&e.jsxs("li",{children:[e.jsx("strong",{className:"block font-semibold",children:"Contact:"}),o&&o,u&&e.jsxs(e.Fragment,{children:[","," ",e.jsx("a",{className:l.listLink,href:`mailto:${u}`,children:u})]}),p&&e.jsxs(e.Fragment,{children:[", ",p]})]})})}),n&&e.jsx("div",{className:l.listWrapper,children:e.jsxs("ul",{className:l.listHorizontal,children:[n&&e.jsx("li",{children:e.jsx(V,{isSmall:!0,onClick:()=>{typeof n=="string"&&(window.location.href=n)},title:x||"Register Now"})}),h&&e.jsx("li",{children:e.jsx(V,{isSmall:!0,color:"grey",onClick:()=>{typeof h=="string"&&(window.location.href=h)},title:f||"More Information"})})]})})]})};q.displayName="PageHeaders.Event";try{PageHeaders.Event.displayName="PageHeaders.Event",PageHeaders.Event.__docgenInfo={description:"",displayName:"PageHeaders.Event",props:{startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"string"}},eventType:{defaultValue:null,description:"",name:"eventType",required:!0,type:{name:"enum",value:[{value:'"In-Person"'},{value:'"Virtual"'},{value:'"Hybrid"'}]}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string"}},virtualType:{defaultValue:null,description:"",name:"virtualType",required:!1,type:{name:"enum",value:[{value:'"Teams"'},{value:'"Zoom"'}]}},virtualUrl:{defaultValue:null,description:"",name:"virtualUrl",required:!1,type:{name:"string"}},primaryButtonUrl:{defaultValue:null,description:"",name:"primaryButtonUrl",required:!1,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonUrl:{defaultValue:null,description:"",name:"secondaryButtonUrl",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},cost:{defaultValue:null,description:"",name:"cost",required:!1,type:{name:"string"}},contactName:{defaultValue:null,description:"",name:"contactName",required:!1,type:{name:"string"}},contactPhone:{defaultValue:null,description:"",name:"contactPhone",required:!1,type:{name:"string"}},contactEmail:{defaultValue:null,description:"",name:"contactEmail",required:!1,type:{name:"string"}}}}}catch{}const _={sm:"text-xl md:text-2xl lg:text-3xl lg:leading-[3.5rem] pb-2",md:"text-2xl md:text-3xl lg:text-4xl lg:leading-[3.5rem] pb-4",lg:"text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] pb-6"},b=({children:s,header:c,as:a="h1",size:d="lg",pronoun:r})=>{const i=a;return e.jsxs(e.Fragment,{children:[e.jsxs(i,{className:`${_[d]} font-semibold text-cu-black-700 not-prose relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px`,children:[c," ",r&&e.jsxs("span",{className:"text-xl font-light lowercase lg:text-3xl text-cu-black-500",children:["(",r,")"]})]}),s]})},N=Object.assign(b,{People:w,Event:q});try{b.displayName="PageHeadersWrapper",b.__docgenInfo={description:"",displayName:"PageHeadersWrapper",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},as:{defaultValue:{value:"h1"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},pronoun:{defaultValue:null,description:"",name:"pronoun",required:!1,type:{name:"string"}}}}}catch{}try{N.displayName="PageHeaders",N.__docgenInfo={description:"",displayName:"PageHeaders",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},as:{defaultValue:{value:"h1"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},pronoun:{defaultValue:null,description:"",name:"pronoun",required:!1,type:{name:"string"}}}}}catch{}export{N as P};
