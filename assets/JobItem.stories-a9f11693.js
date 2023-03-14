import{j as a,a as n}from"./jsx-runtime-9d2cd5de.js";import{C as D}from"./Column-e725e6bd.js";import{R as S}from"./index-580b8df0.js";import{d as L,e as N}from"./index-f58119d1.js";import{a as T}from"./tailwindClasses-b0c92bd9.js";import{L as z}from"./Link-a8ece75e.js";import{S as k}from"./StackedList-630778db.js";import{C as _}from"./Container-9ca325eb.js";import"./_commonjsHelpers-042e6b4d.js";const s=({as:e="div",children:l,link:r})=>a(e,{children:n(z,{href:r,className:"not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none",children:[a("div",{className:"flex items-center gap-4",children:l}),a(L,{className:"ml-auto h-5 w-5 flex-none text-cu-black-300","aria-hidden":"true"})]})}),I=({children:e})=>a("div",{className:"flex flex-auto flex-col gap-2",children:e}),J=({as:e="h3",fontSize:l="base",title:r})=>S.createElement(e,{className:`text-sm font-semibold text-cu-black group-hover:text-cu-red ${T[l]}`},r),y=({dateData:e,date:l})=>n("p",{className:"flex text-xs text-cu-black-900",children:[a(N,{className:"mr-1 h-4 w-4 text-cu-red","aria-hidden":"true"}),n("time",{dateTime:e,children:["Closes ",l]})]});s.defaultProps={as:"li"};s.displayName="JobItem";I.displayName="JobItem.Content";J.displayName="JobItem.Title";y.displayName="JobItem.Details";const t=Object.assign(s,{Content:I,Title:J,Details:y});try{t.displayName="JobItem",t.__docgenInfo={description:"",displayName:"JobItem",props:{as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"header"'},{value:'"title"'},{value:'"image"'},{value:'"center"'},{value:'"button"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},fontSize:{defaultValue:{value:"base"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},department:{defaultValue:null,description:"",name:"department",required:!1,type:{name:"string"}},dateData:{defaultValue:null,description:"",name:"dateData",required:!1,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}}}}}catch{}const q=[{id:1,title:"Back End Developer",link:"#",department:"Engineering",date:"January 7, 2020",dateData:"2020-01-07"},{id:2,title:"Front End Developer",link:"#",department:"Engineering",date:"January 7, 2020",dateData:"2020-01-07"},{id:3,title:"User Interface Designer",link:"#",department:"Design",date:"January 14, 2020",dateData:"2020-01-14"},{id:4,title:"Back End Developer",link:"#",department:"Engineering",date:"January 7, 2020",dateData:"2020-01-07"},{id:5,title:"Front End Developer",link:"#",department:"Engineering",date:"January 7, 2020",dateData:"2020-01-07"}],P={title:"Cards & Lists/Lists/Job Item",component:t,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},u={render:e=>a(t,{as:"div",link:e.link,children:n(t.Content,{children:[a(t.Title,{as:"h2",fontSize:e.fontSize,title:e.title}),a(t.Details,{dateData:e.dateData,date:e.date})]})})};u.args={fontSize:"base",title:"Job item title",link:"https://carleton.ca",date:"September 24th, 2020",dateData:"2020-01-07"};const i={render:e=>a(D,{maxWidth:"5xl",children:a(k,{hasBorder:!0,children:a(t,{as:"div",link:e.link,children:n(t.Content,{children:[a(t.Title,{as:"h3",fontSize:e.fontSize,title:e.title}),a(t.Details,{dateData:e.dateData,date:e.date})]})})})})};i.args={...u.args};const o={render:()=>a(_,{bgColor:"grey",children:a(D,{maxWidth:"5xl",children:a(k,{header:"Job listings",hasBorder:!0,hasShadow:!0,children:q.map(({id:e,title:l,link:r,dateData:x,date:C})=>a(t,{children:n(t.Content,{children:[a(t.Title,{title:l,link:r}),a(t.Details,{dateData:x,date:C})]})},e))})})})};var v,d,m;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <JobItem as="div" link={args.link}>
      <JobItem.Content>
        <JobItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
        <JobItem.Details dateData={args.dateData} date={args.date} />
      </JobItem.Content>
    </JobItem>
}`,...(m=(d=u.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Column maxWidth="5xl">
      <StackedList hasBorder>
        <JobItem as="div" link={args.link}>
          <JobItem.Content>
            <JobItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
            <JobItem.Details dateData={args.dateData} date={args.date} />
          </JobItem.Content>
        </JobItem>
      </StackedList>
    </Column>
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Container bgColor="grey">
      <Column maxWidth="5xl">
        <StackedList header="Job listings" hasBorder hasShadow>
          {data.map(({
          id,
          title,
          link,
          dateData,
          date
        }) => <JobItem key={id}>
              <JobItem.Content>
                <JobItem.Title title={title} link={link} />
                <JobItem.Details dateData={dateData} date={date} />
              </JobItem.Content>
            </JobItem>)}
        </StackedList>
      </Column>
    </Container>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const R=["Default","SingleItemList","MultiItemList"];export{u as Default,o as MultiItemList,i as SingleItemList,R as __namedExportsOrder,P as default};
//# sourceMappingURL=JobItem.stories-a9f11693.js.map
