import{j as a,a as i}from"./jsx-runtime-9d2cd5de.js";import{R as T}from"./index-580b8df0.js";import{b as B}from"./index-a336f0bb.js";import{a as q}from"./optionClasses-9f612ec7.js";import{B as z}from"./Badge-30ab9511.js";import{L as _}from"./Link-4b87f78b.js";import{S as y}from"./StackedList-12e15c2a.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-e46704d2.js";import"../sb-preview/runtime.mjs";const s=({as:e="div",children:l,link:r})=>a(e,{children:i(_,{href:r,className:"not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none",children:[a("div",{className:"flex items-center gap-4",children:l}),a(B,{className:"ml-auto h-5 w-5 flex-none text-cu-black-300","aria-hidden":"true"})]})}),I=({children:e})=>a("div",{className:"flex flex-auto flex-col gap-1",children:e}),M=({as:e="h3",fontSize:l="base",title:r})=>T.createElement(e,{className:`text-sm font-semibold text-cu-black group-hover:text-cu-red ${q[l]}`},r),b=({image:e,alt:l})=>a("div",{className:"w-16 flex-none md:w-24",children:a("img",{className:"h-auto w-auto rounded lg:w-24",src:e,alt:l})}),x=({cost:e,condition:l})=>a("ul",{className:"flex flex-wrap sm:gap-2",children:i("li",{className:"mr-2 flex items-center text-sm text-cu-black-700",children:[l," condition for ",e]})}),S=({category:e})=>a("div",{children:a(z,{children:e})});s.defaultProps={as:"li"};s.displayName="MarketplaceItem";I.displayName="MarketplaceItem.Content";M.displayName="MarketplaceItem.Title";b.displayName="MarketplaceItem.Image";x.displayName="MarketplaceItem.Details";S.displayName="MarketplaceItem.Category";const t=Object.assign(s,{Content:I,Title:M,Image:b,Details:x,Category:S});try{t.displayName="MarketplaceItem",t.__docgenInfo={description:"",displayName:"MarketplaceItem",props:{as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"title"'},{value:'"image"'},{value:'"center"'},{value:'"h2"'},{value:'"h3"'},{value:'"link"'},{value:'"header"'},{value:'"map"'},{value:'"filter"'},{value:'"li"'},{value:'"div"'},{value:'"text"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"main"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},fontSize:{defaultValue:{value:"base"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},cost:{defaultValue:null,description:"",name:"cost",required:!1,type:{name:"string"}},condition:{defaultValue:null,description:"",name:"condition",required:!1,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"string"}}}}}catch{}const V=[{id:1,title:"Nintendo 64",link:"#",cost:"$100.00",condition:"Mint",image:"https://source.unsplash.com/random/400x300",alt:"Image alt tag",category:"category"},{id:2,title:"Plastic Boxes",link:"#",cost:"$40.00",condition:"Mint",image:"https://source.unsplash.com/random/400x300",alt:"Image alt tag",category:"category"},{id:3,title:"Cambridge Audio Stereo Amplifier",link:"#",cost:"$10000.00",condition:"Open Box",image:"https://source.unsplash.com/random/400x300",alt:"Image alt tag",category:"category"},{id:4,title:"IKEA Baskets",link:"#",cost:"$90.00",condition:"Like New",image:"https://source.unsplash.com/random/400x300",alt:"Image alt tag",category:"category"},{id:5,title:"Hair Collection",link:"#",cost:"$100.00",condition:"Trash",image:"https://source.unsplash.com/random/400x300",alt:"Image alt tag",category:"category"}],K={title:"Cards & Lists/Lists/Marketplace Item",component:t,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={render:e=>i(t,{as:"div",link:e.link,children:[a(t.Image,{image:e.image,alt:e.alt}),i(t.Content,{children:[a(t.Title,{as:"h2",fontSize:e.fontSize,title:e.title,link:e.link,cost:e.cost}),a(t.Details,{condition:e.condition,cost:e.cost}),a(t.Category,{category:e.category})]})]})};n.args={fontSize:"base",title:"Marketplace item title",link:"https://carleton.ca",cost:"$100.00",condition:"Like New",image:"https://source.unsplash.com/random/400x300",category:"Category"};const o={render:e=>a(y,{hasBorder:!0,children:i(t,{as:"li",link:e.link,children:[a(t.Image,{image:e.image,alt:e.alt}),i(t.Content,{children:[a(t.Title,{as:"h2",fontSize:e.fontSize,title:e.title,link:e.link,cost:e.cost}),a(t.Details,{condition:e.condition,cost:e.cost}),a(t.Category,{category:e.category})]})]})})};o.args={...n.args};const u={render:()=>a(y,{header:"Marketplace listing",hasBorder:!0,hasShadow:!0,children:V.map(({id:e,title:l,link:r,image:C,alt:N,condition:L,cost:w,category:D})=>i(t,{as:"li",link:r,children:[a(t.Image,{image:C,alt:N}),i(t.Content,{children:[a(t.Title,{title:l,link:r}),a(t.Details,{condition:L,cost:w}),a(t.Category,{category:D})]})]},e))})};var c,m,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <MarketplaceItem as="div" link={args.link}>
      <MarketplaceItem.Image image={args.image} alt={args.alt} />
      <MarketplaceItem.Content>
        <MarketplaceItem.Title as="h2" fontSize={args.fontSize} title={args.title} link={args.link} cost={args.cost} />
        <MarketplaceItem.Details condition={args.condition} cost={args.cost} />
        <MarketplaceItem.Category category={args.category} />
      </MarketplaceItem.Content>
    </MarketplaceItem>
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <MarketplaceItem as="li" link={args.link}>
        <MarketplaceItem.Image image={args.image} alt={args.alt} />
        <MarketplaceItem.Content>
          <MarketplaceItem.Title as="h2" fontSize={args.fontSize} title={args.title} link={args.link} cost={args.cost} />
          <MarketplaceItem.Details condition={args.condition} cost={args.cost} />
          <MarketplaceItem.Category category={args.category} />
        </MarketplaceItem.Content>
      </MarketplaceItem>
    </StackedList>
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,k,h;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <StackedList header="Marketplace listing" hasBorder hasShadow>
      {data.map(({
      id,
      title,
      link,
      image,
      alt,
      condition,
      cost,
      category
    }) => <MarketplaceItem key={id} as="li" link={link}>
          <MarketplaceItem.Image image={image} alt={alt} />
          <MarketplaceItem.Content>
            <MarketplaceItem.Title title={title} link={link} />
            <MarketplaceItem.Details condition={condition} cost={cost} />
            <MarketplaceItem.Category category={category} />
          </MarketplaceItem.Content>
        </MarketplaceItem>)}
    </StackedList>
}`,...(h=(k=u.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const J=["Default","SingleItemList","MultiItemList"];export{n as Default,u as MultiItemList,o as SingleItemList,J as __namedExportsOrder,K as default};
//# sourceMappingURL=MarketplaceItem.stories-8e48aa8e.js.map