import{j as a,a as p}from"./jsx-runtime-9d2cd5de.js";import{F as e}from"./Form-bb2607cf.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-31110fe0.js";import"./Button-40091c81.js";import"./Icon-98794453.js";import"./optionClasses-9f612ec7.js";import"./ChevronDownIcon-4154b4bc.js";import"./Link-44b0899b.js";import"./Calendar-7c3c9099.js";import"./index-0ba33c7b.js";import"./index-e2ec86ea.js";import"./index-ae1f7f2c.js";import"./Location-2b638b33.js";import"./index-1eb27dd0.js";import"./LocationPicker-356110ad.js";import"./index-a336f0bb.js";import"./index-4d501b15.js";import"./combobox-00d1fd7e.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-511c0c47.js";import"./platform-ae94fb3f.js";const B={title:"Forms/Base Form",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},u=async t=>{alert("Submitted"),console.log(t)},d={firstname:"ish",description:" sample description",regularviewer:"2",location:"Carleton University, Colonel By Drive, Ottawa, ON, Canada",favsitcom:"familymatter",favcharacters:["kellykapowski","carltonbanks"]},r={render:()=>a(e,{onSubmit:()=>{},schema:{},initialValues:{name:"John Doe",email:"johndoe@example.com"},children:"Add input components inside the form as children"})},o={render:t=>p(e,{...t,onSubmit:u,schema:{},initialValues:d,children:[a(e.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),a(e.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),a(e.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),a(e.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description..."}),a(e.PlacesAutoComplete,{label:"Event Location",name:"location",placeholder:"Please select a location..."}),a(e.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),a(e.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),a(e.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1"},{name:"name2",label:"name2"},{name:"name3",label:"name3"}]}),a(e.Submit,{title:"Submit Your Answers"})]})};var m,n,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}} initialValues={{
    name: 'John Doe',
    email: 'johndoe@example.com'
  }}>
      Add input components inside the form as children
    </Form>
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Form {...args} onSubmit={formOnSubmit} schema={{}} initialValues={InitialValues}>
      <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

      <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

      <Form.Input label="Address" name="address" placeholder="Enter your street name and house number, if applicable" />

      <Form.WYSIWYG label="Event Description" name="description" placeholder="write some description..." />
      <Form.PlacesAutoComplete label="Event Location" name="location" placeholder="Please select a location..." />

      <Form.Select label="What is your favorite 90s sitcom?" name="favsitcom" options={[{
      value: 'name1',
      label: 'name1'
    }, {
      value: 'name2',
      label: 'name2'
    }, {
      value: 'name3',
      label: 'name3'
    }]} />

      <Form.Radio label="How many of these shows did you watch regularly?" name="regularviewer" options={[{
      name: '1',
      label: '1'
    }, {
      name: '2',
      label: '2'
    }, {
      name: '3',
      label: '3'
    }]} />

      <Form.Checkbox label="Who are your favourite 90s sitcom characters?" name="favcharacters" options={[{
      name: 'name1',
      label: 'name1'
    }, {
      name: 'name2',
      label: 'name2'
    }, {
      name: 'name3',
      label: 'name3'
    }]} />

      <Form.Submit title="Submit Your Answers" />
    </Form>
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const G=["Default","Example"];export{r as Default,o as Example,G as __namedExportsOrder,B as default};
//# sourceMappingURL=Form.stories-8911dd73.js.map
