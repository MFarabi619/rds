import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as t}from"./useLinkContext-Bz4KtVj9.js";const i=({text:a,link:l,color:r="grey",noWordBreak:s=!1})=>{const n=t(),o=s?"whitespace-nowrap":"";return e.jsx("p",{className:`inline-flex cu-badge cu-badge--${r} not-prose rounded-full ${o}`,children:l?e.jsx(n,{href:l,className:"cursor-pointer block",children:e.jsx("span",{className:"px-3.5 py-1.5 text-xs font-semibold block",children:a})}):e.jsx("span",{className:"px-3.5 py-1.5 text-xs font-semibold block",children:a})})};i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!0,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey'",elements:[{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'grey'",computed:!1}},noWordBreak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{i as B};