import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{I as p}from"./Icon-Ducrj9hH.js";const f=({color:l="red",title:e,icon:a,type:s="button",isSmall:n,isFull:o,isDisabled:r,...i})=>{const u=r?"cu-button--disabled":`cu-button--${l}`,m=o?"cu-button--full":"",d=n?"cu-button--small":"",c=n?4:6;return t.jsxs("button",{type:s,"aria-label":e||"Icon button",className:`cu-button not-prose ${u} ${d} ${m}`,disabled:!!r,...i,children:[a&&t.jsx("span",{className:e?"mr-0.5":"",children:t.jsx(p,{icon:a,size:c})}),e]})};f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>",elements:[{name:"Omit",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},{name:"literal",value:"'ref'"}],raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'>"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'red' | 'grey' | 'dark-grey' | 'white'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'dark-grey'"},{name:"literal",value:"'white'"}]},description:"",defaultValue:{value:"'red'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},isSmall:{required:!1,tsType:{name:"boolean"},description:""},isFull:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};export{f as B};
