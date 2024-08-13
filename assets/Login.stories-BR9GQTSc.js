import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{A as T}from"./Alert-BikTafhT.js";import{B as o}from"./Button-CkWBH1yy.js";import{B as c}from"./ButtonGroup-DT6aXSzN.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ShieldExclamationIcon-Dq6tIaUn.js";import"./Icon-DRoKajOt.js";import"./propClasses-CbluzEXK.js";const j=({isCenter:b=!1,useSocial:E=!1,errorTitle:n="",errorDesc:u="",onClickHandler:r})=>{const S=b?"mx-auto":"";return e.jsxs("div",{className:`not-contained p-6 pt-0 border border-cu-black-100 max-w-md shadow-md rounded-md ${S}`,children:[e.jsx("img",{className:"w-auto h-12 mx-auto -mt-4 bg-white border-l-[12px] border-r-[12px] border-white",src:"https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",alt:"Logo of Carleton University"}),(n||u)&&e.jsx("div",{className:"pt-6",children:e.jsx(T,{title:n,content:u,type:"error"},"login-error")}),e.jsx("div",{className:"pt-6",children:e.jsx(c,{children:e.jsx(o,{title:"Login with your Carleton account",onClick:r==null?void 0:r.default,isFull:!0})})}),E&&e.jsxs("div",{className:"p-6 bg-cu-black-50 rounded-b-md",children:[e.jsx("p",{className:"mb-6 font-semibold text-center",children:"Or login with one of the following:"}),e.jsxs(c,{children:[e.jsx(o,{title:"Login with Google",color:"white",onClick:r==null?void 0:r.google,isFull:!0}),e.jsx(o,{title:"Login with LinkedIn",color:"white",onClick:r==null?void 0:r.linkedIn,isFull:!0}),e.jsx(o,{title:"Login with Twitter",color:"white",onClick:r==null?void 0:r.twitter,isFull:!0})]})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"Login",props:{isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},useSocial:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},errorDesc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClickHandler:{required:!1,tsType:{name:"signature",type:"object",raw:"{ default: () => void; google: () => void; linkedIn: () => void; twitter: () => void }",signature:{properties:[{key:"default",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"google",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"linkedIn",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"twitter",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""}}};const z={title:"Components/Login",component:j,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={};t.args={useSocial:!1};const N=()=>{console.log("HEllo")},q=()=>{console.log("GOOGLE")},I=()=>{console.log("LINKEDIN")},D=()=>{console.log("TWITTER")},k={default:N,google:q,linkedIn:I,twitter:D},s={args:{useSocial:!0,onClickHandler:k}},a={args:{errorTitle:"Error: Please Contact Site Administrator"}},i={args:{errorTitle:"Login Error",errorDesc:"Please ensure you are connected to the VPN and try again."}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,p,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    useSocial: true,
    onClickHandler: clickHandlers
  }
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,v,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    errorTitle: 'Error: Please Contact Site Administrator'
  }
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,y,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    errorTitle: 'Login Error',
    errorDesc: 'Please ensure you are connected to the VPN and try again.'
  }
}`,...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const K=["Default","SocialLogins","LoginErrorShort","LoginErrorDescription"];export{t as Default,i as LoginErrorDescription,a as LoginErrorShort,s as SocialLogins,K as __namedExportsOrder,z as default};
