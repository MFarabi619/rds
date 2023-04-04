import{j as t,a as d}from"./jsx-runtime-9d2cd5de.js";import{R as x}from"./index-580b8df0.js";import{L as C,b as y}from"./index-a336f0bb.js";import{a as z}from"./optionClasses-9f612ec7.js";import{L as N}from"./Link-754e2995.js";import{S as I}from"./StackedList-12e15c2a.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-fe030217.js";import"../sb-preview/runtime.mjs";const o=({as:e="div",children:r,link:i})=>t(e,{children:d(N,{href:i,className:"not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none",children:[d("div",{className:"flex items-center gap-1",children:[t("div",{className:"w-auto flex-none",children:t(C,{className:"mr-2 h-4 w-4 flex-none text-cu-red"})}),r]}),t(y,{className:"ml-auto h-5 w-5 flex-none text-cu-black-300","aria-hidden":"true"})]})}),S=({children:e})=>t("div",{className:"flex flex-auto flex-col gap-2",children:e}),v=({as:e="h3",fontSize:r="base",title:i})=>x.createElement(e,{className:`text-sm font-semibold text-cu-black group-hover:text-cu-red ${z[r]}`},i);o.defaultProps={as:"li"};o.displayName="LinkItem";S.displayName="LinkItem.Content";v.displayName="LinkItem.Title";const n=Object.assign(o,{Content:S,Title:v});try{n.displayName="LinkItem",n.__docgenInfo={description:"",displayName:"LinkItem",props:{as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"li"'},{value:'"div"'}]}},fontSize:{defaultValue:{value:"base"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}}}}}catch{}const b=[{id:1,title:"Carleton 360",link:"#"},{id:2,title:"Carleton Central",link:"#"},{id:3,title:"Events Calendar and add stuff that makes it a long title",link:"#"},{id:4,title:"Travel & Expenses",link:"#"},{id:5,title:"Brightspace",link:"#"},{id:6,title:"eShop",link:"#"}],R={title:"Cards & Lists/Lists/Link Item",component:n,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={render:e=>t(n,{as:"div",link:e.link,children:t(n.Content,{children:t(n.Title,{as:"h2",fontSize:e.fontSize,title:e.title})})})};a.args={fontSize:"base",title:"Job item title",link:"https://carleton.ca"};const s={render:e=>t(I,{hasBorder:!0,children:t(n,{as:"li",link:e.link,children:t(n.Content,{children:t(n.Title,{as:"h3",fontSize:e.fontSize,title:e.title})})})})};s.args={...a.args};const l={render:()=>t(I,{header:"Link listing",hasBorder:!0,hasShadow:!0,children:b.map(({id:e,title:r,link:i})=>t(n,{as:"li",link:i,children:t(n.Content,{children:t(n.Title,{title:r,link:i})})},e))})};var m,c,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <LinkItem as="div" link={args.link}>
      <LinkItem.Content>
        <LinkItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      </LinkItem.Content>
    </LinkItem>
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var k,p,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <LinkItem as="li" link={args.link}>
        <LinkItem.Content>
          <LinkItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
        </LinkItem.Content>
      </LinkItem>
    </StackedList>
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var L,h,g;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <StackedList header="Link listing" hasBorder hasShadow>
      {data.map(({
      id,
      title,
      link
    }) => <LinkItem key={id} as="li" link={link}>
          <LinkItem.Content>
            <LinkItem.Title title={title} link={link} />
          </LinkItem.Content>
        </LinkItem>)}
    </StackedList>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const F=["Default","SingleItemList","MultiItemList"];export{a as Default,l as MultiItemList,s as SingleItemList,F as __namedExportsOrder,R as default};
//# sourceMappingURL=LinkItem.stories-be1e283c.js.map