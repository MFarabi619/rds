import{j as a,a as l,F as _}from"./jsx-runtime-9d2cd5de.js";import{L as te}from"./Link-a890a950.js";import{M as le,e as ue,b as se,c as ne}from"./index-d638a58e.js";import{B as re}from"./Badge-b3d0e778.js";import{p as h,f as s}from"./index-f3821225.js";import{g as c}from"./index-3d4b39e4.js";import{i as ie}from"./index-ac9ed659.js";import{E as q}from"./EventItemData-9f2c19c4.js";import{S as v}from"./StackedList-f7a2bb1f.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-48c2959c.js";import"../sb-preview/runtime.mjs";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./Panel-70f7bf83.js";import"./optionClasses-bf4cba96.js";const r=({as:e="div",link:z,title:E,startDateTime:V,endDateTime:C,featuredImage:p,on_campus:$,on_campus_building:H,on_campus_room_number:F,event_address:j,tags:d})=>{var g;const B="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80",t=h(V,"yyyy-MM-dd HH:mm:ss",new Date),P=s(t,"MMMM"),O=c(t),G=t.getHours()%12||12,R=s(t,"mm"),A=s(t,"a"),n=h(C,"yyyy-MM-dd HH:mm:ss",new Date),J=s(n,"MMMM"),Q=c(n),W=n.getHours()%12||12,K=s(n,"mm"),U=s(n,"a"),X=`${G}:${R} ${A}`,Y=`${W}:${K} ${U}`,Z=ie(t,n),ee=s(t,"MMM"),ae=c(t);return a(e,{className:"not-prose group relative @container",children:l(te,{href:z,className:"group relative flex h-full cursor-pointer flex-col gap-6 bg-white p-6 hover:bg-slate-50 focus:outline-none @xl:md:flex-row @2xl:lg:gap-8",children:[l("div",{className:"relative hidden max-w-[40%] md:block",children:[a("img",{className:"hidden w-full rounded-md object-cover @4xl:lg:block",src:p||B,alt:""}),l("div",{className:"hidden h-20 w-20 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red md:flex @4xl:lg:hidden",children:[a("p",{className:"text-xs font-bold uppercase text-cu-red group-hover:text-white",children:ee}),a("p",{className:"text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white",children:ae})]})]}),l("div",{className:"flex flex-1 flex-col gap-1.5 pr-6 md:gap-3.5 @lg:md:pt-1.5",children:[a("h3",{className:"text-lg font-semibold text-cu-black group-hover:text-cu-red @lg:md:text-xl @4xl:lg:text-2xl",children:E}),l("ul",{className:"flex flex-col flex-wrap gap-2",children:[a("li",{className:"flex items-center text-sm text-cu-black-700 @2xl:lg:text-base",children:(()=>Z?l(_,{children:[a(ne,{className:"mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300","aria-hidden":"true"}),`${X} — ${Y}`]}):l(_,{children:[a(se,{className:"mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300","aria-hidden":"true"}),`${P} ${O} — ${J} ${Q}`]}))()}),l("li",{className:"flex items-start text-sm text-cu-black-700 @2xl:lg:text-base",children:[a(le,{className:"mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300"}),$?F+", "+H:j]})]}),a("div",{className:"mt-auto",children:(g=d==null?void 0:d.category)==null?void 0:g.map(f=>a(re,{children:f.name},f.id))})]}),a("div",{className:"absolute top-1/2 right-4 -mt-3",children:a(ue,{className:"ml-auto h-6 w-6 flex-none text-cu-black-300 group-hover:text-cu-red","aria-hidden":"true"})})]})})};try{r.displayName="EventItem",r.__docgenInfo={description:"",displayName:"EventItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"title"'},{value:'"image"'},{value:'"center"'},{value:'"button"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"xl"'},{value:'"base"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},featuredImage:{defaultValue:null,description:"",name:"featuredImage",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},on_campus:{defaultValue:null,description:"",name:"on_campus",required:!1,type:{name:"boolean"}},on_campus_building:{defaultValue:null,description:"",name:"on_campus_building",required:!1,type:{name:"string | null"}},on_campus_room_number:{defaultValue:null,description:"",name:"on_campus_room_number",required:!1,type:{name:"string | null"}},event_address:{defaultValue:null,description:"",name:"event_address",required:!1,type:{name:"string"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}}}}}catch{}const we={title:"Cards & Lists/Lists (Deprecated)/Event Item",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},u={};u.args={fontSize:"base",title:"Event item title",link:"https://carleton.ca",event_address:"Robertson Hall",startDateTime:"2022-12-16 04:00:00",endDateTime:"2022-12-16 17:00:00",on_campus:!0,on_campus_building:"Robertson Hall",on_campus_room_number:"407",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}],audience:[{id:1,name:"Student",slug:"student"},{id:2,name:"Faculty",slug:"faculty"}]}};const i={render:e=>a(v,{hasBorder:!0,children:a(r,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags})})};i.args={...u.args};const o={render:e=>a(v,{hasShadow:!0,children:q.map(()=>a(r,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags},567))})};o.args={...u.args};const m={render:e=>a(v,{cols:"2",hasShadow:!0,children:q.map(()=>a(r,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags},567))})};m.args={...u.args};var b,x,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(y=(x=u.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,k,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <EventItem as="li" link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />
    </StackedList>
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,M,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <StackedList hasShadow>
      {data.map(() => <EventItem as="li" key={567} link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />)}
    </StackedList>
}`,...(w=(M=o.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var I,N,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <StackedList cols="2" hasShadow>
      {data.map(() => <EventItem as="li" key={567} link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />)}
    </StackedList>
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const Ie=["Default","SingleItemList","MultiItemList","MultiItemColumns"];export{u as Default,m as MultiItemColumns,o as MultiItemList,i as SingleItemList,Ie as __namedExportsOrder,we as default};
//# sourceMappingURL=EventItem.stories-6847a016.js.map