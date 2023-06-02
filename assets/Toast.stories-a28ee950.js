import{j as e}from"./jsx-runtime-daf202a7.js";import{r as i,R as v}from"./index-ec8b93d8.js";import{X as j,C as N,S as w,E as C,I as S}from"./XMarkIcon-72c6d1e1.js";import{$ as k}from"./transition-6ad8d931.js";import"./_commonjsHelpers-042e6b4d.js";import"./open-closed-50e7a81e.js";const x=({children:t})=>e.jsx("div",{"aria-live":"assertive",className:"not-prose pointer-events-none fixed inset-0 top-20 z-40 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:t})}),y=({children:t})=>e.jsx("p",{className:"text-sm font-medium text-gray-900",children:t}),T=({children:t})=>e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:t}),f=({children:t,type:o})=>{const[h,g]=i.useState(!0),n={success:{icon:N,color:"text-green-400"},warning:{icon:w,color:"text-yellow-400"},error:{icon:C,color:"text-cu-red"},info:{icon:S,color:"text-gray-600"}};return e.jsx(k,{show:h,as:i.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"cu-toast pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:v.createElement(n[o].icon,{className:`w-6 h-6 ${n[o].color}`,"aria-hidden":"true"})}),e.jsx("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:t}),e.jsx("div",{className:"ml-4 flex flex-shrink-0",children:e.jsxs("button",{type:"button",className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>{g(!1)},children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(j,{className:"h-5 w-5","aria-hidden":"true"})]})})]})})})})},s=Object.assign(f,{Toaster:x,Title:y,Content:T});f.displayName="Toast";y.displayName="Toast.Title";T.displayName="Toast.Content";x.displayName="Toaster";try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}const $={title:"Components/Toast",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},_=[{type:"success",title:"Success!",content:"Records have been updated."},{type:"error",title:"Error!",content:"Unable to save record."},{type:"warning",title:"Warning",content:"You have lost internet connectivity"},{type:"info",title:"Information",content:"You look like you need some coffee."}],a={render:t=>e.jsx(s.Toaster,{children:e.jsxs(s,{type:t.type,children:[e.jsx(s.Title,{children:"Success"}),e.jsx(s.Content,{children:"Successfully created"})]},111)})};a.args={type:"success"};const r={render:()=>e.jsx(s.Toaster,{children:_.map((t,o)=>e.jsxs(s,{type:t.type,children:[e.jsx(s.Title,{children:t.title}),e.jsx(s.Content,{children:t.content})]},o))})};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Toast.Toaster>
      <Toast key={111} type={args.type}>
        <Toast.Title>Success</Toast.Title>
        <Toast.Content>Successfully created</Toast.Content>
      </Toast>
    </Toast.Toaster>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Toast.Toaster>
      {ToastStory.map((toast, index) => {
      return <Toast key={index} type={toast.type}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Content>{toast.content}</Toast.Content>
          </Toast>;
    })}
    </Toast.Toaster>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const q=["Default","Multiple"];export{a as Default,r as Multiple,q as __namedExportsOrder,$ as default};
//# sourceMappingURL=Toast.stories-a28ee950.js.map
