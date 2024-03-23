import{j as e}from"./jsx-runtime-CKrituN3.js";import{a as w}from"./globalClasses-GmQrI9Vi.js";import{h as N,m as R}from"./optionClasses-nRtJeGr9.js";const s={base:"flex flex-col lg:flex-row gap-6 mx-auto mb-6 cu-textimage lg:gap-10 not-contained md:mb-12",baseContent:"",border:"border-b border-cu-black-50 pb-6 shadow-hero-text-image md:pb-8",headerOne:"font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] text-cu-black-700 not-prose",headerTwo:"font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-cu-black-700 not-prose",underline:"relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px pb-6",contentWrapper:"flex-[0_0_100%] md:max-w-4xl md:flex-1 cu-textimage-content",pronoun:"text-xl lg:text-3xl font-light lowercase text-cu-black-500",listLink:"font-semibold text-cu-red hover:underline"},l={mediaWrapper:"relative flex-1 overflow-hidden rounded",mediaBgImage:"relative flex-1 w-full h-full bg-no-repeat bg-cover min-h-[360px] lg:min-h-[220px]",svgLeft:"hidden lg:block absolute -left-px top-0 z-10 h-full",svgRight:"hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]",svgFlipLeft:"hidden lg:block absolute -left-px top-0 z-10 h-full -scale-y-100",svgFlipRight:"hidden lg:block absolute -right-px top-0 z-10 h-full -scale-x-100"},u=({children:i,title:t,headerType:n="h2",isCenter:o,imageUrl:a,contentWidth:d=50,imageZoom:m=0,angle:c,flipX:r,focalPointX:T="50",focalPointY:$="50",hasMobileImage:q})=>{const j=a?"md:py-4":"",I=o?"justify-center":"",f=i?s.underline:"";let g,x,h,v;a&&(g=l.mediaBgImage,x=q?"":"hidden lg:block",g&&(h={flex:`0 0 ${d}%`},v={backgroundImage:`url(${a})`,backgroundPosition:`${T}% ${$}%`,transform:`scale(1.${m})`}));let p=null,b=null;switch(c){case"left":p=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r?l.svgFlipRight:l.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break;case"dual":p=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r?l.svgFlipRight:l.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})}),b=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r?l.svgFlipLeft:l.svgRight,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${s.contentWrapper} ${j} ${I} ${n==="h1"?`cu-textimage-as-h1 ${w.largeLight}`:`cu-textimage-as-h2 ${w.text}`}`,style:h,children:[t&&n==="h1"&&e.jsx("h1",{className:`${s.headerOne} ${f}`,children:t}),t&&n==="h2"&&e.jsx("h2",{className:`${s.headerTwo} ${f}`,children:t}),i]}),a&&e.jsxs("div",{className:`${l.mediaWrapper} ${x}`,children:[e.jsx("div",{className:`${l.mediaBgImage}`,style:v}),p,b]})]})};u.displayName="TextImage.Content";u.__docgenInfo={description:"",methods:[],displayName:"TextImage.Content",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},headerType:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},isCenter:{required:!1,tsType:{name:"boolean"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},contentWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},imageZoom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},angle:{required:!1,tsType:{name:"union",raw:"'left' | 'dual' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'dual'"},{name:"literal",value:"'none'"}]},description:""},flipX:{required:!1,tsType:{name:"boolean"},description:""},focalPointX:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50'",computed:!1}},focalPointY:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50'",computed:!1}},hasMobileImage:{required:!1,tsType:{name:"boolean"},description:""}}};const y=({children:i,maxWidth:t="5xl",flexRow:n="lg",hasBorder:o,flipX:a,flipYsm:d})=>{const m=a?"lg:flex-row-reverse":"",c=d?"flex-col-reverse sm:flex-row":"",r=o?s.border:"";return e.jsx("div",{className:`${s.base} ${N[t]} ${R[n]} ${m} ${c} ${r}`,children:i})},W=Object.assign(y,{Content:u});y.__docgenInfo={description:"",methods:[],displayName:"TextImageWrapper",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'5xl' | '7xl' | 'max'",elements:[{name:"literal",value:"'5xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"'max'"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},flexRow:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},hasBorder:{required:!1,tsType:{name:"boolean"},description:""},flipX:{required:!1,tsType:{name:"boolean"},description:""},flipYsm:{required:!1,tsType:{name:"boolean"},description:""}}};export{W as T};
