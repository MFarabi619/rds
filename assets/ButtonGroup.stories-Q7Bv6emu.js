import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{B as n}from"./ButtonGroup-CnxC-BVQ.js";import{B as o}from"./Button-Dk2FY-vy.js";import{S as c}from"./Section-CO2ge5vF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-Im8HJTiC.js";import"./Icon-RboAbnkv.js";const h={title:"Components/ButtonGroup",component:n,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},r={args:{gap:"2",align:"start"},render:s=>t.jsx(c,{children:t.jsxs(n,{...s,children:[t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Primary Red"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Dark Grey",color:"dark-grey"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Light Grey",color:"grey"})]})})};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    gap: '2',
    align: 'start'
  },
  render: args => {
    return <Section>
        <ButtonGroup {...args}>
          <Button onClick={() => {
          alert('You clicked the button');
        }} title="Primary Red" />
          <Button onClick={() => {
          alert('You clicked the button');
        }} title="Dark Grey" color="dark-grey" />
          <Button onClick={() => {
          alert('You clicked the button');
        }} title="Light Grey" color="grey" />
        </ButtonGroup>
      </Section>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["Primary"];export{r as Primary,B as __namedExportsOrder,h as default};
