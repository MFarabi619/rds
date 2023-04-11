import{a as t,F as u,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as c}from"./Main-1a5ad365.js";import{S as d}from"./Section-94207df0.js";import{C as r}from"./Column-9ab858f8.js";import{S as v}from"./StackedList-f7a2bb1f.js";import{A as g}from"./Aside-c2fa1d27.js";import{A as h}from"./Article-2474715e.js";import{T as f}from"./TopNav-4e06728e.js";import{B as S}from"./Banner-cd0269e4.js";import{F as q}from"./FooterBasic-bd57aff0.js";import{a as x,D as i}from"./DetailsItemData-0867be96.js";import{B as a}from"./Button-85bd2435.js";import{M as C}from"./index-d638a58e.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-bf4cba96.js";import"./Panel-70f7bf83.js";import"./index-31110fe0.js";import"./Avatar-3b67c872.js";import"./DropDown-2962dcc0.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-e730db9c.js";import"./Link-9ee7a8a8.js";import"./iframe-0ef707b9.js";import"../sb-preview/runtime.mjs";import"./popover-6662df09.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-87065351.js";import"./transition-ad75749a.js";import"./Search-53813d6a.js";import"./dialog-37dabc7d.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-6d6ee991.js";import"./use-tracked-pointer-40c2495e.js";import"./TopNavLoader-e6c62d54.js";import"./disclosure-251f59c3.js";import"./FooterWave-dc386eb0.js";const ue={title:"Examples/Projects/Event Calendar/Single Event"},y=()=>t(u,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),o={render:()=>t(u,{children:[e(f,{title:"Events Calendar"}),e(S,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),e(c,{children:e(d,{children:t(r,{cols:"2/3",maxWidth:"7xl",children:[e(h,{children:e(y,{})}),t(g,{isSticky:!0,topSpace:"10",children:[t(r,{cols:"1",gridGap:"5",children:[e(a,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),e(a,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),e(v,{hasShadow:!0,children:x.map(({title:s,description:p})=>t(i,{children:[e(i.Icon,{icon:C}),t(i.Content,{children:[e(i.Title,{title:s}),e(i.Description,{description:p})]})]},s))})]})]})})}),e(q,{})]})};var l,n,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Events Calendar" />
      <Banner title="Single Event Post Template" align="left" maxWidth="7xl" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg" />

      <Main>
        <Section>
          <Column cols="2/3" maxWidth="7xl">
            <Article>
              <EventContent />
            </Article>

            <Aside isSticky topSpace="10">
              <Column cols="1" gridGap="5">
                <Button isType="solid" onClick={() => {
                console.log('click');
              }} title="Remove from my events" />
                <Button isType="solid" color="grey" onClick={() => {
                console.log('click');
              }} title="Add to my events" />
              </Column>
              <StackedList hasShadow>
                {data.map(({
                title,
                description
              }) => <DetailsItem key={title}>
                    <DetailsItem.Icon icon={MapPinIcon} />
                    <DetailsItem.Content>
                      <DetailsItem.Title title={title} />
                      <DetailsItem.Description description={description} />
                    </DetailsItem.Content>
                  </DetailsItem>)}
              </StackedList>
            </Aside>
          </Column>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const pe=["SingleEvent"];export{o as SingleEvent,pe as __namedExportsOrder,ue as default};
//# sourceMappingURL=SingleEvent.stories-b7353889.js.map