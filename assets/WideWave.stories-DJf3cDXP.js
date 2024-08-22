import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{T as s}from"./TextMedia-DWdcGSV6.js";import{B as f}from"./ButtonGroup-CnxC-BVQ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PageHeader-Bj7phANz.js";import"./useLinkContext-Bz4KtVj9.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./propClasses-Im8HJTiC.js";const o=({children:a,wave:i="red",hasRaven:p=!1})=>{const g=i==="red"?"bg-cu-waves-hard-edge-red":"bg-cu-waves-hard-edge-black",h={backgroundPosition:"-1px -1px"},x=i==="red"?"bg-cu-red":"bg-cu-black-900",b=i==="red"?"pt-16 sm:pt-24 md:pt-28 lg:pt-36 xl:pt-40 2xl:pt-44":"pt-20 sm:pt-24 md:pt-32 lg:pt-44 xl:pt-56 2xl:pt-60";return e.jsx("section",{className:`relative cu-widewaves cu-prose cu-prose-light ${g} ${x} px-8 md:px-10 ${b} pb-8 md:pb-20 bg-[length:100.5%] bg-no-repeat cu-no-browsers-edge not-contained`,style:h,children:p&&i==="black"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative z-20",children:a}),e.jsx("div",{className:"bg-cu-ravens-logo-white opacity-10 bg-[length:400px] z-10 bg-[bottom_right] bg-no-repeat bottom-20 -right-44 w-full h-full absolute"})]}):e.jsx(e.Fragment,{children:a})})};o.__docgenInfo={description:"",methods:[],displayName:"WideWave",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},wave:{required:!1,tsType:{name:"union",raw:"'red' | 'black'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'black'"}]},description:"",defaultValue:{value:"'red'",computed:!1}},hasRaven:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={title:"Layouts/Wide Wave",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={};t.args={children:"",wave:"red",hasRaven:!1};const r={args:{...t.args},render:a=>e.jsx(o,{...a,children:e.jsxs(s,{maxWidth:"7xl",children:[e.jsxs(s.Content,{title:"Red Wave with Text & Media",width:60,hasUnderline:!0,isWhite:!0,children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non placerat massa. Morbi ornare maximus ultricies. Nunc tempus nisl non ullamcorper sagittis. Suspendisse imperdiet vulputate tortor a dignissim. Praesent quam felis, laoreet id odio vitae, fringilla auctor lacus. Cras est libero, faucibus sit amet tristique vitae, auctor a justo. Fusce molestie, justo fermentum vehicula efficitur, leo ligula eleifend ante, in commodo diam turpis in ante."}),e.jsx(f,{children:e.jsx("a",{href:"#",className:"cu-button cu-button--white",children:"Read more"})})]}),e.jsx(s.Aside,{align:"center",border:"lg",borderColor:"white",children:e.jsx("img",{src:"https://picsum.photos/id/431/600/460",alt:"Presentation only",width:"600",height:"460"})})]})})};var n,d,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => <WideWave {...args}>
      <TextMedia maxWidth="7xl">
        <TextMedia.Content title="Red Wave with Text & Media" width={60} hasUnderline isWhite>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non placerat massa. Morbi ornare maximus
            ultricies. Nunc tempus nisl non ullamcorper sagittis. Suspendisse imperdiet vulputate tortor a dignissim.
            Praesent quam felis, laoreet id odio vitae, fringilla auctor lacus. Cras est libero, faucibus sit amet
            tristique vitae, auctor a justo. Fusce molestie, justo fermentum vehicula efficitur, leo ligula eleifend
            ante, in commodo diam turpis in ante.
          </p>
          <ButtonGroup>
            <a href="#" className="cu-button cu-button--white">
              Read more
            </a>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.Aside align="center" border="lg" borderColor="white">
          <img src="https://picsum.photos/id/431/600/460" alt="Presentation only" width="600" height="460" />
        </TextMedia.Aside>
      </TextMedia>
    </WideWave>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const B=["Primary","WithChildren"];export{t as Primary,r as WithChildren,B as __namedExportsOrder,q as default};
