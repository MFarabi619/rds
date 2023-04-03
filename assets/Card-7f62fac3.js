import{j as t,a as d,F as E}from"./jsx-runtime-9d2cd5de.js";import{r as P}from"./index-580b8df0.js";import{R as z}from"./index-a36e5b94.js";import{p as x,i as U}from"./index-ae1f7f2c.js";import{g as N,a as k}from"./index-36152d80.js";import{B as G}from"./Badge-30ab9511.js";import{M as J,c as K,d as Q}from"./index-a336f0bb.js";const i={card:"not-prose group relative flex flex-col cu-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg",content:"flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative",header:"text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl leading-6 @sm:md:leading-8",excerpt:"text-base text-cu-black-600",more:"font-semibold text-cu-red group-hover:text-cyan-600",badges:"pb-6 mt-auto px-7"},T={figure:"relative",round:"pt-8 pb-2 px-6"},r={wrapper:"space-y-1.5 @sm:md:space-y-2",item:"text-sm text-cu-black-600 @sm:md:text-base",itemLarge:"text-base text-cu-black-600 @sm:md:text-lg",italic:"italic",bold:"font-semibold text-cyan-600",alignIcon:"flex",redIcon:"flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300"},f={dateBox:"z-10 -mt-16 mb-3 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md group-hover:bg-cu-red",dateBoxMonth:"text-xs font-bold uppercase text-cu-red group-hover:text-white",dateBoxDay:"text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white"},h={container:"relative pt-[56.25%] bg-cu-black-900",player:"absolute top-0 left-0"},C=({children:e,isRound:a})=>{const n=a?`cu-figure cu-figure--round ${T.round}`:"cu-figure";return t("figure",{className:`${n} ${T.figure}`,children:e})};try{C.displayName="CardFigure",C.__docgenInfo={description:"",displayName:"CardFigure",props:{isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}}}}}catch{}const b=({source:e})=>{const[a,n]=P.useState(!1);return P.useEffect(()=>{n(!0)},[]),a?t("div",{className:h.container,children:t(z,{url:e,className:h.player,width:"100%",height:"100%",controls:!0})}):t("div",{className:h.container,children:t("p",{className:"hidden",children:"Loading video"})})};try{b.displayName="CardVideo",b.__docgenInfo={description:"",displayName:"CardVideo",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const v=({children:e})=>t("div",{className:i.content,children:e});try{v.displayName="CardContent",v.__docgenInfo={description:"",displayName:"CardContent",props:{}}}catch{}const D=({startDate:e})=>{const a=(g,_=!1)=>{const l=new Date;return l.setMonth(g),l.toLocaleString("default",{month:_?"short":"long"})},n=x(e),m=N(n),u=k(n);return d("div",{className:f.dateBox,children:[t("p",{className:f.dateBoxMonth,children:a(u,!0)}),t("p",{className:f.dateBoxDay,children:m})]})};try{D.displayName="CardDateBox",D.__docgenInfo={description:"",displayName:"CardDateBox",props:{startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}}}}}catch{}const M=({text:e})=>t("h2",{className:i.header,children:e});try{M.displayName="CardHeader",M.__docgenInfo={description:"",displayName:"CardHeader",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const I=({text:e})=>d("p",{className:i.excerpt,children:[e.length>170?`${e.substring(0,170)}...`:e,t("span",{className:i.more,children:" Read more"})]});try{I.displayName="CardExcerpt",I.__docgenInfo={description:"",displayName:"CardExcerpt",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const V=({tags:e})=>{var a;return t("div",{className:i.badges,children:(a=e==null?void 0:e.category)==null?void 0:a.map(n=>t(G,{children:n.name},n.id))})};try{V.displayName="CardBadges",V.__docgenInfo={description:"",displayName:"CardBadges",props:{tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}}}}}catch{}const q=({date:e})=>{const a=e?new Date(e).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return t("time",{className:`${r.item} ${r.italic}`,children:a})};try{q.displayName="CardPostMeta",q.__docgenInfo={description:"",displayName:"CardPostMeta",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string | Date"}}}}}catch{}const w=({startDateTime:e,endDateTime:a,onCampus:n,onCampusBuilding:m,onCampusRoomNumber:u,eventAddress:g})=>{const _=(p,s=!1)=>{const o=new Date;return o.setMonth(p),o.toLocaleString("default",{month:s?"short":"long"})},l=p=>{let s=p.getHours(),o=p.getMinutes();const $=s>=12?"PM":"AM";return s=s%12,s=s||12,o=o<10?0+o:o,s+":"+o+" "+$},c=x(e),y=x(a),j=N(c),F=k(c),L=N(y),H=U(c,y),A=l(c)+" — "+l(y),W=_(F)+" "+j+" — "+L,O=()=>H?d(E,{children:[t(Q,{className:r.redIcon,"aria-hidden":"true"}),A]}):d(E,{children:[t(K,{className:r.redIcon,"aria-hidden":"true"}),W]});return d("ul",{className:r.wrapper,children:[t("li",{className:`${r.item} ${r.alignIcon}`,children:O()}),d("li",{className:`${r.item} ${r.alignIcon}`,children:[t(J,{className:r.redIcon,"aria-hidden":"true"}),n?u+" "+m:g]})]})};try{w.displayName="CardEventMeta",w.__docgenInfo={description:"",displayName:"CardEventMeta",props:{startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},onCampus:{defaultValue:null,description:"",name:"onCampus",required:!0,type:{name:"boolean"}},onCampusBuilding:{defaultValue:null,description:"",name:"onCampusBuilding",required:!1,type:{name:"string | null"}},onCampusRoomNumber:{defaultValue:null,description:"",name:"onCampusRoomNumber",required:!1,type:{name:"string | null"}},eventAddress:{defaultValue:null,description:"",name:"eventAddress",required:!1,type:{name:"string"}}}}}catch{}const B=({jobTitle:e,email:a,phone:n})=>d("ul",{className:r.wrapper,children:[e&&t("li",{className:`${r.item} ${r.itemLarge} ${r.italic}`,children:e}),a&&t("li",{className:r.item,children:t("strong",{className:r.bold,children:a})}),n&&t("li",{className:r.item,children:n})]});try{B.displayName="CardPeopleMeta",B.__docgenInfo={description:"",displayName:"CardPeopleMeta",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}}}}}catch{}const S=({children:e,isCenter:a})=>{const n=a?"text-center":"";return t("div",{className:`${i.card} ${n}`,children:e})},R=Object.assign(S,{Figure:C,Video:b,Content:v,DateBox:D,Header:M,Excerpt:I,Badges:V,PostMeta:q,EventMeta:w,PeopleMeta:B});try{S.displayName="CardWrapper",S.__docgenInfo={description:"",displayName:"CardWrapper",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}}}}}catch{}try{R.displayName="Card",R.__docgenInfo={description:"",displayName:"Card",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}}}}}catch{}export{R as C};
//# sourceMappingURL=Card-7f62fac3.js.map