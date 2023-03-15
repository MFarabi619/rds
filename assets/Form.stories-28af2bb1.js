import{j as a,a as u}from"./jsx-runtime-9d2cd5de.js";import{F as e}from"./Form-24f4c139.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1bb2f737.js";import"./Button-473942f1.js";import"./Icon-c2360a74.js";import"./tailwindClasses-b0c92bd9.js";import"./Link-a8ece75e.js";const E={title:"Forms/Base Form",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},d=async t=>{alert("Submitted"),console.log(t)},p={firstname:"ish",description:" sample description",regularviewer:"2",location:"Carleton University, Colonel By Drive, Ottawa, ON, Canada",favsitcom:"familymatter",favcharacters:["kellykapowski","carltonbanks"]},r={render:()=>a(e,{onSubmit:()=>{},schema:{},initialValues:{name:"John Doe",email:"johndoe@example.com"},children:"Add input components inside the form as children"})},o={render:t=>u(e,{...t,onSubmit:d,schema:{},initialValues:p,children:[a(e.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),a(e.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),a(e.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),a(e.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description..."}),a(e.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom"}),a(e.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"}]}),a(e.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name",label:"name"}]}),a(e.Submit,{title:"Submit Your Answers"})]})};var s,n,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => {}} schema={{}} initialValues={{
    name: 'John Doe',
    email: 'johndoe@example.com'
  }}>
      Add input components inside the form as children
    </Form>
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Form {...args} onSubmit={formOnSubmit} schema={{}} initialValues={InitialValues}>
      <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

      <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

      <Form.Input label="Address" name="address" placeholder="Enter your street name and house number, if applicable" />

      <Form.WYSIWYG label="Event Description" name="description" placeholder="write some description..." />

      <Form.Select label="What is your favorite 90s sitcom?" name="favsitcom" />

      <Form.Radio label="How many of these shows did you watch regularly?" name="regularviewer" options={[{
      name: '1',
      label: '1'
    }]} />

      <Form.Checkbox label="Who are your favourite 90s sitcom characters?" name="favcharacters" options={[{
      name: 'name',
      label: 'name'
    }]} />

      <Form.Submit title="Submit Your Answers" />
    </Form>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["Default","Example"];export{r as Default,o as Example,x as __namedExportsOrder,E as default};
//# sourceMappingURL=Form.stories-28af2bb1.js.map