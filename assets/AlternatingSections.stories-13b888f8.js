import{a as r,F as s,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as u}from"./Main-1a5ad365.js";import{S as d}from"./Section-94207df0.js";import{C as t}from"./Container-95591aef.js";import{T as c}from"./TopNav-4e06728e.js";import{B as m}from"./Banner-cd0269e4.js";import{F as p}from"./FooterBasic-bd57aff0.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./index-31110fe0.js";import"./Avatar-3b67c872.js";import"./optionClasses-bf4cba96.js";import"./DropDown-2962dcc0.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-e730db9c.js";import"./Link-9ee7a8a8.js";import"./iframe-0ef707b9.js";import"../sb-preview/runtime.mjs";import"./popover-6662df09.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-87065351.js";import"./transition-ad75749a.js";import"./Search-53813d6a.js";import"./dialog-37dabc7d.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-6d6ee991.js";import"./use-tracked-pointer-40c2495e.js";import"./TopNavLoader-e6c62d54.js";import"./disclosure-251f59c3.js";import"./FooterWave-dc386eb0.js";const W={title:"Examples/Templates/Alternating Sections"},i=()=>e(s,{children:r("p",{children:[e("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),a=()=>r(s,{children:[r("p",{children:[e("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),n={render:()=>r(s,{children:[e(c,{title:"Carleton University"}),e(m,{title:"Alternating Sections Containers",paragraph:"This template replicates the basic markup template by using simple headings and paragraphs but uses modifyed section containers to alternate between white and grey backgrounds"}),e(u,{children:r(d,{children:[r(t,{hasProse:!0,children:[e(i,{}),e("h2",{children:"This is a header two"}),e(a,{}),e("h3",{children:"This is a header three"}),e(i,{})]}),r(t,{bgColor:"grey",hasProse:!0,children:[e(i,{}),e("h2",{children:"This is a header two"}),e(a,{}),e("h3",{children:"This is a header three"}),e(i,{})]}),r(t,{bgColor:"grey",hasProse:!0,children:[e("h2",{children:"2nd consecutive grey container"}),e(i,{}),e("h2",{children:"This is a header two"}),e(a,{}),e("h3",{children:"This is a header three"}),e(i,{})]}),r(t,{hasProse:!0,children:[e(i,{}),e("h2",{children:"This is a header two"}),e(a,{}),e("h3",{children:"This is a header three"}),e(i,{})]}),r(t,{hasProse:!0,children:[e("h2",{children:"2nd consecutive white container"}),e(i,{}),e("h2",{children:"This is a header two"}),e(a,{}),e("h3",{children:"This is a header three"}),e(i,{})]})]})}),e(p,{})]})};var o,h,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />
      <Banner title="Alternating Sections Containers" paragraph="This template replicates the basic markup template by using simple headings and paragraphs but uses modifyed section containers to alternate between white and grey backgrounds" />

      <Main>
        <Section>
          <Container hasProse>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>

          <Container bgColor="grey" hasProse>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>
          <Container bgColor="grey" hasProse>
            <h2>2nd consecutive grey container</h2>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>

          <Container hasProse>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>
          <Container hasProse>
            <h2>2nd consecutive white container</h2>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(h=n.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const X=["AlternatingSections"];export{n as AlternatingSections,X as __namedExportsOrder,W as default};
//# sourceMappingURL=AlternatingSections.stories-13b888f8.js.map