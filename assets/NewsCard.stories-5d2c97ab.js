import{j as r}from"./jsx-runtime-9d2cd5de.js";import{C as c}from"./Column-6f70111f.js";import{a as s,N as d}from"./NewsCardData-b0562e33.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";import"./Badge-30ab9511.js";import"./Link-24898639.js";const I={title:"Cards & Lists/Cards/News Card",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={};e.args={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"#",image:"https://source.unsplash.com/random/400x266",alt:"Sample image alt tag",date:"2022-12-16",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}};const t={render:()=>r(c,{cols:"3",maxWidth:"7xl",children:d.map(a=>r(s,{title:a==null?void 0:a.title,link:a==null?void 0:a.link,image:a==null?void 0:a.image,date:a==null?void 0:a.date,excerpt:a==null?void 0:a.excerpt,tags:a==null?void 0:a.tags},567))})},o={render:()=>r(c,{cols:"3",maxWidth:"7xl",children:d.map(a=>r(s,{title:a==null?void 0:a.title,link:a==null?void 0:a.link,image:a==null?void 0:a.image,date:a==null?void 0:a.date,tags:a==null?void 0:a.tags},567))})},l={render:()=>r(c,{cols:"3",maxWidth:"7xl",children:d.map(a=>r(s,{title:a==null?void 0:a.title,link:a==null?void 0:a.link,date:a==null?void 0:a.date,excerpt:a==null?void 0:a.excerpt,tags:a==null?void 0:a.tags},567))})},n={render:()=>r(c,{cols:"3",maxWidth:"7xl",children:d.map(a=>r(s,{title:a==null?void 0:a.title,link:a==null?void 0:a.link},567))})};var p,u,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var g,m,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Column cols="3" maxWidth="7xl">
      {data.map(item => <NewsCard key={567} title={item?.title} link={item?.link} image={item?.image} date={item?.date} excerpt={item?.excerpt} tags={item?.tags} />)}
    </Column>
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var k,C,h;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Column cols="3" maxWidth="7xl">
      {data.map(item => <NewsCard key={567} title={item?.title} link={item?.link} image={item?.image} date={item?.date} tags={item?.tags} />)}
    </Column>
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var N,f,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Column cols="3" maxWidth="7xl">
      {data.map(item => <NewsCard key={567} title={item?.title} link={item?.link} date={item?.date} excerpt={item?.excerpt} tags={item?.tags} />)}
    </Column>
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var W,S,b;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Column cols="3" maxWidth="7xl">
      {data.map(item => <NewsCard key={567} title={item?.title} link={item?.link} />)}
    </Column>
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const L=["Default","GridCards","NoExcerpt","NoImage","BareMinimum"];export{n as BareMinimum,e as Default,t as GridCards,o as NoExcerpt,l as NoImage,L as __namedExportsOrder,I as default};
//# sourceMappingURL=NewsCard.stories-5d2c97ab.js.map
