import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{r as M}from"./index-4g5l5LRQ.js";import{R as J}from"./index-hXDENwr6.js";import{p as y,f as i,i as w}from"./index-bkt57PaO.js";import{g as b,M as K,C as Q,a as X}from"./index-9aHumogv.js";import{B as Y}from"./Badge-Zsxsg5ql.js";const d={card:"not-prose relative flex flex-col cu-card overflow-hidden rounded-lg @container md:max-w-lg",whiteBg:"bg-white",greyBg:"bg-cu-black-25",shadow:"shadow-md shadow-cu-black-100",shadowHover:"hover:shadow-lg hover:shadow-cu-black-200",link:"group duration-300 ease-in hover:scale-[1.04] cursor-pointer",border:"border border-cu-black-100",redBorder:"border-l-8 border-l-cu-red",content:"flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative",header:"text-lg font-semibold text-cu-black  @sm:md:text-xl leading-6 @sm:md:leading-8",excerpt:"text-base text-cu-black-600",more:"font-semibold text-cu-red-700",badges:"pb-6 mt-auto px-7"},g={figure:"relative",round:"pt-8 pb-2 px-6"},s={wrapper:"space-y-1.5 @sm:md:space-y-2",item:"text-sm text-cu-black-600 @sm:md:text-base",itemLarge:"text-base text-cu-black-600 @sm:md:text-lg",italic:"italic",bold:"font-semibold",alignIcon:"flex",redIcon:"flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300",wrap:"break-all"},p={dateBox:"z-10 -mt-16 mb-3 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md group-hover:bg-cu-red",dateBoxMonth:"block text-xs font-bold uppercase text-cu-red group-hover:text-white",dateBoxDay:"block text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white"},N={container:"relative pt-[56.25%] bg-cu-black-900",player:"absolute top-0 left-0"},m={header:"text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red @sm:md:text-4xl",desc:"text-base text-cu-black-600 @sm:md:text-lg",flexCol:"flex flex-col gap-2",flexColReverse:"flex flex-col-reverse gap-2"},D=({children:e,isRound:r})=>{const t=r?`cu-figure--round ${g.round}`:"";return a.jsx("figure",{className:`cu-figure ${t} ${g.figure}`,children:e})};D.displayName="Card.Figure";try{Card.Figure.displayName="Card.Figure",Card.Figure.__docgenInfo={description:"",displayName:"Card.Figure",props:{isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}}}}}catch{}const V=({source:e})=>{const[r,t]=M.useState(!1);return M.useEffect(()=>{t(!0)},[]),r?a.jsx("div",{className:N.container,children:a.jsx(J,{url:e,className:N.player,width:"100%",height:"100%",controls:!0})}):a.jsx("div",{className:N.container,children:a.jsx("p",{className:"hidden",children:"Loading video"})})};V.displayName="Card.Video";try{Card.Video.displayName="Card.Video",Card.Video.__docgenInfo={description:"",displayName:"Card.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const $=({children:e})=>a.jsx("div",{className:d.content,children:e});$.displayName="Card.Content";try{Card.Content.displayName="Card.Content",Card.Content.__docgenInfo={description:"",displayName:"Card.Content",props:{}}}catch{}const B=({startDate:e,endDate:r})=>{const t=y(e,"yyyy-MM-dd HH:mm:ss",new Date),o=y(r,"yyyy-MM-dd HH:mm:ss",new Date),c=i(t,"MMM"),u=b(t),n=!w(t,o);return a.jsx("h3",{className:p.dateBox,children:n?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:p.dateBoxMonth,children:"Multi"}),a.jsx("span",{className:p.dateBoxDay,children:"Day"})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:p.dateBoxMonth,children:c}),a.jsx("span",{className:p.dateBoxDay,children:u})]})})};B.displayName="Card.DateBox";try{Card.DateBox.displayName="Card.DateBox",Card.DateBox.__docgenInfo={description:"",displayName:"Card.DateBox",props:{startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"string"}}}}}catch{}const q=({text:e,hasTitleHover:r=!0})=>{const t=r?"group-hover:text-cu-red-700":"";return a.jsx("h2",{className:d.header+" "+t,children:e})};q.displayName="Card.Header";try{Card.Header.displayName="Card.Header",Card.Header.__docgenInfo={description:"",displayName:"Card.Header",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},hasTitleHover:{defaultValue:{value:"true"},description:"",name:"hasTitleHover",required:!1,type:{name:"boolean"}}}}}catch{}const I=({text:e})=>a.jsxs("p",{className:d.excerpt,children:[e.length>170?`${e.substring(0,170)}...`:e,a.jsx("span",{className:d.more,children:" Read more"})]});I.displayName="Card.Excerpt";try{Card.Excerpt.displayName="Card.Excerpt",Card.Excerpt.__docgenInfo={description:"",displayName:"Card.Excerpt",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const S=({tags:e})=>{var r;return a.jsx("div",{className:d.badges,children:(r=e==null?void 0:e.category)==null?void 0:r.map(t=>a.jsx(Y,{children:t.name},t.id))})};S.displayName="Card.Badges";try{Card.Badges.displayName="Card.Badges",Card.Badges.__docgenInfo={description:"",displayName:"Card.Badges",props:{tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}}}}}catch{}const H=({date:e})=>{const r=e?new Date(e).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return a.jsx("time",{className:`${s.item} ${s.italic}`,children:r})};H.displayName="Card.PostMeta";try{Card.PostMeta.displayName="Card.PostMeta",Card.PostMeta.__docgenInfo={description:"",displayName:"Card.PostMeta",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string | Date"}}}}}catch{}const k=({startDateTime:e,endDateTime:r,onCampus:t,onCampusBuilding:o,onCampusRoomNumber:c,eventAddress:u})=>{const n=y(e,"yyyy-MM-dd HH:mm:ss",new Date),x=i(n,"MMMM"),h=b(n),f=n.getHours()%12||12,_=i(n,"mm"),C=i(n,"a"),l=y(r,"yyyy-MM-dd HH:mm:ss",new Date),F=i(l,"MMMM"),T=b(l),L=l.getHours()%12||12,A=i(l,"mm"),G=i(l,"a"),W=`${f}:${_} ${C}`,z=`${L}:${A} ${G}`,O=w(n,l),U=()=>O?a.jsxs(a.Fragment,{children:[a.jsx(X,{className:s.redIcon,"aria-hidden":"true"}),`${W} — ${z}`]}):a.jsxs(a.Fragment,{children:[a.jsx(Q,{className:s.redIcon,"aria-hidden":"true"}),`${x} ${h} — ${F} ${T}`]});return a.jsxs("ul",{className:s.wrapper,children:[a.jsx("li",{className:`${s.item} ${s.alignIcon}`,children:U()}),a.jsxs("li",{className:`${s.item} ${s.alignIcon}`,children:[a.jsx(K,{className:s.redIcon,"aria-hidden":"true"}),t?c+" "+o:u]})]})};k.displayName="Card.EventMeta";try{Card.EventMeta.displayName="Card.EventMeta",Card.EventMeta.__docgenInfo={description:"",displayName:"Card.EventMeta",props:{startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},onCampus:{defaultValue:null,description:"",name:"onCampus",required:!0,type:{name:"boolean"}},onCampusBuilding:{defaultValue:null,description:"",name:"onCampusBuilding",required:!1,type:{name:"string | null"}},onCampusRoomNumber:{defaultValue:null,description:"",name:"onCampusRoomNumber",required:!1,type:{name:"string | null"}},eventAddress:{defaultValue:null,description:"",name:"eventAddress",required:!1,type:{name:"string"}}}}}catch{}const E=({jobTitle:e,email:r,phone:t})=>a.jsxs("ul",{className:s.wrapper,children:[e&&a.jsx("li",{className:`${s.item} ${s.itemLarge} ${s.italic}`,children:e}),r&&a.jsx("li",{className:s.item,children:a.jsx("strong",{className:`${s.bold} ${s.wrap}`,children:r})}),t&&a.jsx("li",{className:s.item,children:t})]});E.displayName="Card.PeopleMeta";try{Card.PeopleMeta.displayName="Card.PeopleMeta",Card.PeopleMeta.__docgenInfo={description:"",displayName:"Card.PeopleMeta",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}}}}}catch{}const P=({initials:e})=>a.jsx("figure",{className:`cu-figure cu-figure--round ${g.round} ${g.figure}`,children:a.jsxs("div",{className:"relative",children:[a.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),a.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-cu-black-50 text-2xl text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:e})]})});P.displayName="Card.Initials";try{Card.Initials.displayName="Card.Initials",Card.Initials.__docgenInfo={description:"",displayName:"Card.Initials",props:{initials:{defaultValue:null,description:"",name:"initials",required:!0,type:{name:"string"}}}}}catch{}const R=({stat:e,desc:r,reverse:t})=>{const o=t?m.flexColReverse:m.flexCol;return a.jsxs("div",{className:`${o} overflow-hidden`,children:[a.jsx("p",{className:`${m.desc}`,children:r}),a.jsx("h2",{className:m.header,children:e})]})};R.displayName="Card.Stats";try{Card.Stats.displayName="Card.Stats",Card.Stats.__docgenInfo={description:"",displayName:"Card.Stats",props:{stat:{defaultValue:null,description:"",name:"stat",required:!0,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!0,type:{name:"string"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}const v=({children:e,isCenter:r,noLink:t,hasShadow:o,hasShadowHover:c,hasRedBorder:u,isGrey:n})=>{const x=n?d.greyBg:d.whiteBg,h=r?"text-center":"",f=o&&!t?`${d.shadow} ${d.shadowHover}`:d.shadow,_=c&&!t?d.shadowHover:"",C=u?d.redBorder:"",l=t?"":d.link;return a.jsx("div",{className:`cu-card ${d.card} ${C} ${f} ${_} ${h} ${l} ${x}`,children:e})},j=Object.assign(v,{Figure:D,Video:V,Content:$,DateBox:B,Header:q,Excerpt:I,Badges:S,PostMeta:H,EventMeta:k,PeopleMeta:E,Initials:P,Stats:R});try{v.displayName="CardWrapper",v.__docgenInfo={description:"",displayName:"CardWrapper",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},hasShadowHover:{defaultValue:null,description:"",name:"hasShadowHover",required:!1,type:{name:"boolean"}},isGrey:{defaultValue:null,description:"",name:"isGrey",required:!1,type:{name:"boolean"}},hasRedBorder:{defaultValue:null,description:"",name:"hasRedBorder",required:!1,type:{name:"boolean"}}}}}catch{}try{j.displayName="Card",j.__docgenInfo={description:"",displayName:"Card",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},hasShadowHover:{defaultValue:null,description:"",name:"hasShadowHover",required:!1,type:{name:"boolean"}},isGrey:{defaultValue:null,description:"",name:"isGrey",required:!1,type:{name:"boolean"}},hasRedBorder:{defaultValue:null,description:"",name:"hasRedBorder",required:!1,type:{name:"boolean"}}}}}catch{}export{j as C,$ as a};
