import{j as e}from"./jsx-runtime-CKrituN3.js";import{p as c,f as l,i as L}from"./parse-BfiLtjV-.js";import{g as h,M as P,C as B,a as A}from"./getDate-BAl1yPiw.js";import{C as V}from"./ChevronRightIcon-CNwURrwD.js";const x=({children:t,isSquare:s})=>{const a=s?"aspect-square":"aspect-[4/2.7]";return e.jsx("figure",{className:`flex-none max-w-[45%] @xl:md:max-w-[25%] ${a}`,children:t})};x.displayName="Listing.Figure";x.__docgenInfo={description:"",methods:[],displayName:"Listing.Figure",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isSquare:{required:!1,tsType:{name:"boolean"},description:""}}};const y=({children:t})=>e.jsx("div",{className:"flex flex-col flex-1 gap-3",children:t});y.displayName="Listing.Body";y.__docgenInfo={description:"",methods:[],displayName:"Listing.Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f=({children:t,as:s="h2",date:a,datePrefix:i,datePosition:r="top"})=>{const o=s,n=a?new Date(a).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return e.jsxs("header",{children:[a&&r==="top"&&e.jsxs("time",{className:"block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[i&&`${i} `,n]}),e.jsx(o,{className:"text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8",children:t}),a&&r==="bottom"&&e.jsxs("time",{className:"block mt-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[i&&`${i} `,n]})]})};f.displayName="Listing.Header";f.__docgenInfo={description:"",methods:[],displayName:"Listing.Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"union",raw:"'h2' | 'h3'",elements:[{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},date:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},datePrefix:{required:!1,tsType:{name:"string"},description:""},datePosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const b=({text:t,hasMore:s})=>e.jsxs("p",{className:"text-base text-cu-black-700",children:[t.length>170?`${t.substring(0,170)}...`:t,s&&e.jsx("span",{className:"font-semibold",children:" More"})]});b.displayName="Listing.Excerpt";b.__docgenInfo={description:"",methods:[],displayName:"Listing.Excerpt",props:{text:{required:!0,tsType:{name:"string"},description:""},hasMore:{required:!1,tsType:{name:"boolean"},description:""}}};const N=({startDate:t,endDate:s})=>{const a=c(t,"yyyy-MM-dd HH:mm:ss",new Date),i=c(s,"yyyy-MM-dd HH:mm:ss",new Date),r=l(a,"MMM"),o=h(a),n=!L(a,i);return e.jsxs("h3",{className:"h-20 w-20 @4xl:lg:h-32 @4xl:lg:w-32 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red flex",children:[e.jsx("span",{className:"block text-xs @4xl:lg:text-lg font-bold uppercase text-cu-red group-hover:text-white",children:n?"Multi":r}),e.jsx("span",{className:"block text-2xl @4xl:lg:text-4xl font-bold uppercase text-cu-black-800 group-hover:text-white",children:n?"Day":o})]})};N.displayName="Listing.DateThumb";N.__docgenInfo={description:"",methods:[],displayName:"Listing.DateThumb",props:{startDate:{required:!0,tsType:{name:"string"},description:""},endDate:{required:!0,tsType:{name:"string"},description:""}}};const w=({icon:t,bgType:s="red",hasShadow:a})=>{const r=`https://cdn.carleton.ca/rds/assets/font-awesome/${t}.svg`,o=a?"shadow-md":"";let n;switch(s){case"none":n="w-10 h-10";break;case"red":n="w-16 h-16 bg-cu-red rounded-md";break;case"white":n="w-16 h-16 bg-white rounded-md";break;default:n="";break}const m={filter:"invert(100%) sepia(5%) saturate(0%) hue-rotate(29deg) brightness(106%) contrast(107%)"},u={filter:"invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)"},p=t?t.replace(/-/g," "):"";return e.jsx("figure",{className:`flex items-center justify-center ${n} ${o}`,children:e.jsx("img",{src:r,alt:`An icon of a ${p}`,className:`cu-icon-thumb ${s==="none"?"":"p-3"}`,style:s==="red"?m:u})})};w.displayName="Listing.IconThumb";w.__docgenInfo={description:"",methods:[],displayName:"Listing.IconThumb",props:{icon:{required:!1,tsType:{name:"string"},description:""},bgType:{required:!1,tsType:{name:"union",raw:"'none' | 'red' | 'white'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'red'"},{name:"literal",value:"'white'"}]},description:"",defaultValue:{value:"'red'",computed:!1}},hasShadow:{required:!1,tsType:{name:"boolean"},description:""}}};const v=({initials:t})=>e.jsx("figure",{className:"cu-figure flex-none rounded-md max-w-[40%] @xl:md:max-w-[25%]",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),e.jsx("div",{className:"absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-cu-black-50 text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:t})]})});v.displayName="Listing.Initials";v.__docgenInfo={description:"",methods:[],displayName:"Listing.Initials",props:{initials:{required:!0,tsType:{name:"string"},description:""}}};const g={redIcon:"mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300"},T=({startDateTime:t,endDateTime:s,onCampus:a,onCampusBuilding:i,onCampusRoomNumber:r,eventAddress:o})=>{const n=c(t,"yyyy-MM-dd HH:mm:ss",new Date),m=l(n,"MMMM"),u=h(n),p=n.getHours()%12||12,D=l(n,"mm"),I=l(n,"a"),d=c(s,"yyyy-MM-dd HH:mm:ss",new Date),$=l(d,"MMMM"),R=h(d),k=d.getHours()%12||12,_=l(d,"mm"),H=l(d,"a"),S=`${p}:${D} ${I}`,C=`${k}:${_} ${H}`,E=L(n,d),F=()=>E?e.jsxs(e.Fragment,{children:[e.jsx(A,{className:g.redIcon,"aria-hidden":"true"}),`${S} — ${C}`]}):e.jsxs(e.Fragment,{children:[e.jsx(B,{className:g.redIcon,"aria-hidden":"true"}),`${m} ${u} — ${$} ${R}`]});return e.jsxs("ul",{className:"space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none",children:[e.jsx("li",{className:"flex",children:F()}),e.jsxs("li",{className:"flex",children:[e.jsx(P,{className:g.redIcon,"aria-hidden":"true"}),a?r+" "+i:o]})]})};T.displayName="Listing.EventMeta";T.__docgenInfo={description:"",methods:[],displayName:"Listing.EventMeta",props:{startDateTime:{required:!0,tsType:{name:"string"},description:""},endDateTime:{required:!0,tsType:{name:"string"},description:""},onCampus:{required:!0,tsType:{name:"boolean"},description:""},onCampusBuilding:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onCampusRoomNumber:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},eventAddress:{required:!1,tsType:{name:"string"},description:""}}};const j=({jobTitle:t,children:s,phone:a})=>e.jsxs("ul",{className:"space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none",children:[t&&e.jsx("li",{className:"text-base @sm:md:text-lg italic",children:t}),s&&e.jsx("li",{children:e.jsx("strong",{className:"font-semibold break-all hover:cursor-pointer text-cyan-700 hover:text-cu-red-700",children:s})}),a&&e.jsx("li",{children:a})]});j.displayName="Listing.PeopleMeta";j.__docgenInfo={description:"",methods:[],displayName:"Listing.PeopleMeta",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},jobTitle:{required:!1,tsType:{name:"string"},description:""},phone:{required:!1,tsType:{name:"string"},description:""}}};const M=({children:t,isType:s,buttonType:a="solid",buttonStyle:i="red"})=>{const r=s==="button"?"cu-card-button":"",o=s==="button"&&a?`cu-card-button-${a}`:"cu-card-button-solid",n=s==="button"&&i?`cu-card-button-${i}`:"cu-card-button-red";return e.jsx("footer",{className:`mt-auto text-white pt-5 ${r} ${n} ${o}`,children:t})};M.displayName="Listing.Footer";M.__docgenInfo={description:"",methods:[],displayName:"Listing.Footer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isType:{required:!1,tsType:{name:"union",raw:"'button' | 'badge'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'badge'"}]},description:""},buttonType:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},buttonStyle:{required:!1,tsType:{name:"union",raw:"'red' | 'white' | 'dark-grey' | 'grey'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'white'"},{name:"literal",value:"'dark-grey'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'red'",computed:!1}}}};const q=({children:t,useArrow:s})=>{const a=s?"pr-14":"";return e.jsx("li",{className:`cu-listing not-prose relative overflow-hidden @container bg-white p-6 ${a}`,children:e.jsxs("div",{className:"flex flex-col @lg:md:flex-row gap-5 @lg:md:gap-7 h-full",children:[t,s&&e.jsx("div",{className:"absolute -mt-3 top-1/2 right-4",children:e.jsx(V,{className:"flex-none w-6 h-6 ml-auto text-cu-black-300 group-hover:text-cu-red","aria-hidden":"true"})})]})})},G=Object.assign(q,{Figure:x,Body:y,Header:f,Excerpt:b,DateThumb:N,IconThumb:w,Initials:v,EventMeta:T,PeopleMeta:j,Footer:M});q.__docgenInfo={description:"",methods:[],displayName:"ListingWrapper",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},useArrow:{required:!1,tsType:{name:"boolean"},description:""}}};export{G as L};
