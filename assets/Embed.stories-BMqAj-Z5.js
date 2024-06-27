import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{b as B}from"./optionClasses-BoR2qQUj.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const l={base:"relative w-full pb-[56.25%] overflow-hidden border border-cu-black-100",iframe:"absolute top-0 left-0 w-full h-full"},b=({title:e,url:t})=>r.jsx("iframe",{title:e,src:t,className:l.iframe});b.displayName="Embed.PowerBi";b.__docgenInfo={description:"",methods:[],displayName:"Embed.PowerBi",props:{title:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""}}};const w=({title:e,url:t})=>{let s="",o="";if(t){const i=t.split("/");o=i[i.length-1],s=`https://mediaspace.carleton.ca/embed/secure/iframe/entryId/${o}/uiConfId/36153741/st/0`}return r.jsx("iframe",{id:`kmsembed-${o}`,title:e,src:s,className:l.iframe,allowFullScreen:!0,allow:"autoplay *; fullscreen *; encrypted-media *",referrerPolicy:"no-referrer-when-downgrade",sandbox:"allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"})};w.displayName="Embed.Kaltura";w.__docgenInfo={description:"",methods:[],displayName:"Embed.Kaltura",props:{title:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""}}};const g=({title:e,url:t})=>{const s=`https://w.soundcloud.com/player/?url=${t}&amp;color='ff5500'&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true`;return r.jsx("iframe",{title:e,width:"100%",src:s,className:l.iframe})};g.displayName="Embed.SoundCloud";g.__docgenInfo={description:"",methods:[],displayName:"Embed.SoundCloud",props:{title:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""}}};const h=({title:e,url:t})=>{let s="",o;if(t){const i=t.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);o=i?i[1]:null,s=`https://www.youtube.com/embed/${o}`}return r.jsx("iframe",{title:e,src:s,className:`${l.iframe}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})};h.displayName="Embed.YouTube";h.__docgenInfo={description:"",methods:[],displayName:"Embed.YouTube",props:{title:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""}}};const E=({title:e,url:t})=>{let s="",o="";if(t){const i=t.split("/");o=i[i.length-1],s=`https://player.vimeo.com/video/${o}`}return r.jsx("iframe",{title:e,src:s,className:`${l.iframe}`,allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0})};E.displayName="Embed.Vimeo";E.__docgenInfo={description:"",methods:[],displayName:"Embed.Vimeo",props:{title:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""}}};const f=({title:e,url:t})=>{let s="",o="";if(t){const i=t.split("/");o=i[i.length-1],s=`https://embed.ted.com/talks/lang/en/${o}`}return r.jsx("iframe",{title:e,src:s,width:"854",height:"480",className:l.iframe,allowFullScreen:!0})};f.displayName="Embed.TED";f.__docgenInfo={description:"",methods:[],displayName:"Embed.TED",props:{title:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""}}};const y=({children:e,maxWidth:t="5xl"})=>r.jsx("figure",{className:`cu-embed cu-component-spacing not-contained mx-auto ${B[t]}`,children:r.jsx("div",{className:`${l.base}`,children:e})}),a=Object.assign(y,{PowerBi:b,Kaltura:w,SoundCloud:g,YouTube:h,TED:f,Vimeo:E});y.displayName="Embed";y.__docgenInfo={description:"",methods:[],displayName:"Embed",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'full' | '5xl' | '7xl'",elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'7xl'"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}}}};const V={title:"Components/Embed",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={render:e=>r.jsx(a,{...e,children:r.jsx(a.YouTube,{title:"test",url:"https://www.youtube.com/watch?v=seBWI1EkEfw"})})},d={render:e=>r.jsx(a,{...e,children:r.jsx(a.Vimeo,{title:"test",url:"https://vimeo.com/106595658"})})},c={render:e=>r.jsx(a,{...e,children:r.jsx(a.Kaltura,{title:"test",url:"https://mediaspace.carleton.ca/media/WorkshopA+5+Quick+Ways+to+Make+Your+Course+More+Accessible/1_oq0u8l23"})})},m={render:e=>r.jsx(a,{...e,children:r.jsx(a.PowerBi,{title:"test",url:"https://app.powerbi.com/view?r=eyJrIjoiYTU2ZTBkZjgtZDZmZS00YjliLWIwMzktN2RjMTY3YjEzM2FkIiwidCI6IjZhZDkxODk1LWRlMDYtNDg1ZS1iYzUxLWZjZTEyNmNjODUzMCIsImMiOjN9&pageName=ReportSectionc2accda99bdcb7ce79a1"})})},u={render:e=>r.jsx(a,{...e,children:r.jsx(a.TED,{title:"test",url:"https://www.ted.com/talks/jennifer_doudna_crispr_s_next_advance_is_bigger_than_you_think"})})},p={render:e=>r.jsx(a,{...e,children:r.jsx(a.SoundCloud,{title:"test",url:"https://soundcloud.com/user-361886339/agnus-dei?in=user-361886339/sets/requiem-for-piece-carleton-university-choir-chamber-singers&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"})})};var _,j,x;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Embed {...args}>
      <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=seBWI1EkEfw" />
    </Embed>
}`,...(x=(j=n.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var N,T,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Embed {...args}>
      <Embed.Vimeo title="test" url="https://vimeo.com/106595658" />
    </Embed>
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var I,v,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Embed {...args}>
      <Embed.Kaltura title="test" url="https://mediaspace.carleton.ca/media/WorkshopA+5+Quick+Ways+to+Make+Your+Course+More+Accessible/1_oq0u8l23" />
    </Embed>
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var Y,D,Z;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <Embed {...args}>
      <Embed.PowerBi title="test" url="https://app.powerbi.com/view?r=eyJrIjoiYTU2ZTBkZjgtZDZmZS00YjliLWIwMzktN2RjMTY3YjEzM2FkIiwidCI6IjZhZDkxODk1LWRlMDYtNDg1ZS1iYzUxLWZjZTEyNmNjODUzMCIsImMiOjN9&pageName=ReportSectionc2accda99bdcb7ce79a1" />
    </Embed>
}`,...(Z=(D=m.parameters)==null?void 0:D.docs)==null?void 0:Z.source}}};var q,M,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Embed {...args}>
      <Embed.TED title="test" url="https://www.ted.com/talks/jennifer_doudna_crispr_s_next_advance_is_bigger_than_you_think" />
    </Embed>
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var W,C,R;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Embed {...args}>
      <Embed.SoundCloud title="test" url="https://soundcloud.com/user-361886339/agnus-dei?in=user-361886339/sets/requiem-for-piece-carleton-university-choir-chamber-singers&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
    </Embed>
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const K=["Youtube","Vimeo","Kaltura","Powerbi","TED","Soundcloud"];export{c as Kaltura,m as Powerbi,p as Soundcloud,u as TED,d as Vimeo,n as Youtube,K as __namedExportsOrder,V as default};
