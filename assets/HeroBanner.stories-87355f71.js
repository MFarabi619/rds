import{j as e}from"./jsx-runtime-daf202a7.js";import{M as p}from"./Main-5f2ff1fc.js";import{S as m}from"./Section-ef2e0364.js";import{T as d}from"./TopNav-ebd0b950.js";import{F as u}from"./FooterBasic-75bf434e.js";import{B as a}from"./Button-9a118519.js";import{H as t}from"./HeroTextImage-0453d21e.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-db4baf10.js";import"./Avatar-4f8b6b20.js";import"./optionClasses-fb4783dc.js";import"./DropDown-99473386.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-a2a3354a.js";import"./Link-28802189.js";import"./iframe-ae08a6cb.js";import"../sb-preview/runtime.js";import"./popover-5930d8ab.js";import"./open-closed-aa2934ca.js";import"./keyboard-0f6663c0.js";import"./use-resolve-button-type-b6561d60.js";import"./use-root-containers-aa30d9e9.js";import"./index-73f8b247.js";import"./transition-cad67125.js";import"./Search-87809c76.js";import"./dialog-e3720377.js";import"./platform-42294b71.js";import"./combobox-393d016a.js";import"./use-tracked-pointer-7104e2e3.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-f401fb37.js";import"./FooterLogoLinks-d17def7d.js";const G={title:"Examples/Projects/cutheme/Blocks"},r=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
condimentum magna vel orci vulputate, eget vulputate neque porttitor.`,i=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Carleton University"}),e.jsx(p,{children:e.jsxs(m,{hasProse:!0,children:[e.jsxs(t,{hasBorder:!0,children:[e.jsx(t.Content,{title:"Website and Application Development",paragraph:r,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-4 md:gap-6",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})}),e.jsx(t.Media,{image:"https://picsum.photos/400/266"})]}),e.jsx(i,{}),e.jsx(t,{maxWidth:"5xl",children:e.jsx(t.Content,{title:"Hero banner without an image",paragraph:r,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})})}),e.jsx(i,{}),e.jsxs(t,{children:[e.jsx(t.Content,{title:"With image right and left angle",paragraph:r,hasMediaCol:!0,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-4 md:gap-6",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})}),e.jsx(t.Media,{image:"https://picsum.photos/400/266",angle:"left"})]}),e.jsx(i,{}),e.jsxs(t,{reverse:!0,children:[e.jsx(t.Content,{title:"Website and Application Development",paragraph:r,hasMediaCol:!0,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-4 md:gap-6",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})}),e.jsx(t.Media,{image:"https://picsum.photos/400/266",angle:"left"})]}),e.jsx(i,{}),e.jsxs(t,{children:[e.jsx(t.Content,{title:"Website and Application Development",paragraph:r,hasMediaCol:!0,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-4 md:gap-6",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})}),e.jsx(t.Media,{image:"https://picsum.photos/400/266",angle:"dual"})]}),e.jsx(i,{}),e.jsxs(t,{children:[e.jsx(t.Content,{title:"Website and Application Development",paragraph:r,hasMediaCol:!0,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-4 md:gap-6",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})}),e.jsx(t.Media,{image:"https://picsum.photos/400/266",angle:"none"})]}),e.jsx(i,{})]})}),e.jsx(u,{})]})};var o,s,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />

      <Main>
        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} headerType="h1" hasMediaCol>
              <div className="buttons flex flex-wrap gap-4 md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage maxWidth="5xl">
            <HeroTextImage.Content title="Hero banner without an image" paragraph={heroPara}>
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage>
            <HeroTextImage.Content title="With image right and left angle" paragraph={heroPara} hasMediaCol>
              <div className="buttons flex flex-wrap gap-4 md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage reverse>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} hasMediaCol>
              <div className="buttons flex flex-wrap gap-4 md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} hasMediaCol>
              <div className="buttons flex flex-wrap gap-4 md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="dual" />
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} hasMediaCol>
              <div className="buttons flex flex-wrap gap-4 md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="none" />
          </HeroTextImage>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const J=["Banners"];export{n as Banners,J as __namedExportsOrder,G as default};
//# sourceMappingURL=HeroBanner.stories-87355f71.js.map
