import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{B as o}from"./Button-D3PZeFyC.js";import{B as r}from"./ButtonGroup-D-bd2cm2.js";const n=({isCenter:s=!1,useSocial:l=!1,onClickHandler:t})=>{const i=s?"mx-auto":"",a=()=>{t&&t()};return e.jsxs("div",{className:`not-contained border border-cu-black-100 max-w-md shadow-md rounded-md ${i}`,children:[e.jsx("img",{className:"w-auto h-12 mx-auto -mt-4 bg-white border-l-[12px] border-r-[12px] border-white",src:"https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",alt:"Logo of Carleton University"}),e.jsx("div",{className:"p-6",children:e.jsx(r,{children:e.jsx(o,{title:"Login with your Carleton account",onClick:a,isFull:!0})})}),l&&e.jsxs("div",{className:"p-6 bg-cu-black-50 rounded-b-md",children:[e.jsx("p",{className:"mb-6 font-semibold text-center",children:"Or login with one of the following:"}),e.jsxs(r,{children:[e.jsx(o,{title:"Social Network A",color:"white",onClick:()=>{},isFull:!0}),e.jsx(o,{title:"Social Network B",color:"white",onClick:()=>{},isFull:!0}),e.jsx(o,{title:"Social Network C",color:"white",onClick:()=>{},isFull:!0})]})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Login",props:{isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},useSocial:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClickHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{n as L};
