import{j as r}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{C as G}from"./ChevronDownIcon-DCf8Nrl_.js";import"./_commonjsHelpers-BosuxZz1.js";function Z({title:t,titleId:a,...o},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},o),t?i.createElement("title",{id:a},t):null,i.createElement("path",{fillRule:"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",clipRule:"evenodd"}))}const M=i.forwardRef(Z),Y=M;function B({title:t,titleId:a,...o},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},o),t?i.createElement("title",{id:a},t):null,i.createElement("path",{fillRule:"evenodd",d:"M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",clipRule:"evenodd"}))}const P=i.forwardRef(B),Q=P,z=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],c={tableGlobal:"p-3 md:p-4 text-left align-text-top",tableHeaderRow:"font-semibold text-sm md:text-base",tableBodyRow:"text-sm md:text-base",borders:"border-b border-cu-black-100 last:border-none",striped:"odd:bg-white even:bg-cu-black-25",cellWidth:"min-w-48"},H=({columns:t,noWordBreak:a,sortData:o})=>{const[s,n]=i.useState(!0),[l,m]=i.useState(""),d=a?"whitespace-nowrap":"",u=e=>{const T=e;let b=!0;e===l&&(b=!s),m(T),n(b),o(T,b)},p=t.map((e,T)=>{var x,k,C;const b=(x=e==null?void 0:e.sort)!=null&&x.sortable?"hover:cursor-pointer":"hover:cursor-auto";return r.jsx("th",{scope:"col",className:`${c.tableGlobal} ${c.tableHeaderRow} ${b} ${d} ${e.header.length>20?c.cellWidth:""}`,onClick:()=>{var D;return(D=e==null?void 0:e.sort)!=null&&D.sortable?u(e.key):void 0},"aria-sort":e.key===l&&s?"descending":e.key===l&&!s?"ascending":void 0,"aria-label":(k=e==null?void 0:e.sort)!=null&&k.sortable?"Sort by "+e.key:void 0,children:(C=e.sort)!=null&&C.sortable?r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{children:e.header}),e.key===l&&s?r.jsx(G,{className:"inline-block w-4 h-4 ml-2"}):e.key===l&&!s?r.jsx(Q,{className:"inline-block w-4 h-4 ml-2"}):r.jsx(Y,{className:"inline-block w-4 h-4 ml-2"})]}):e.header},`headerCell-${T}`)});return r.jsx("thead",{className:"border-b border-cu-black-200 bg-cu-black-50",children:p})};H.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},noWordBreak:{required:!0,tsType:{name:"boolean"},description:""},sortData:{required:!0,tsType:{name:"signature",type:"function",raw:"(a: string, s: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"a"},{type:{name:"boolean"},name:"s"}],return:{name:"void"}}},description:""}}};const U=({data:t,columns:a,striped:o})=>{const s=o?`${c.striped} ${c.borders}`:c.borders,n=t.map((l,m)=>r.jsx("tr",{className:s,children:a.map((d,u)=>{const p=l[d.key],e=typeof p=="string"&&p.length>20;return r.jsx("td",{className:`${c.tableGlobal} ${c.tableBodyRow} ${e?c.cellWidth:""}`,children:p},`cell-${u}`)})},`row-${m}`));return r.jsx("tbody",{children:n})};U.__docgenInfo={description:"",methods:[],displayName:"TableRows",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [k: string]: string | number | JSX.Element
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number | JSX.Element",elements:[{name:"string"},{name:"number"},{name:"JSX.Element"}],required:!0}}]}}],raw:`{
  [k: string]: string | number | JSX.Element
}[]`},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},striped:{required:!0,tsType:{name:"boolean"},description:""},range:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const K=t=>{const[a,o]=i.useState(t);return i.useEffect(()=>{o(t)},[t]),[a,(n,l)=>{if(n){const m=[...a].sort((d,u)=>d[n]===null?1:u[n]===null?-1:d[n]===null&&u[n]===null?0:d[n].toString().localeCompare(u[n].toString(),"en",{numeric:!0})*(l?1:-1));o(m)}}]},F=({data:t,columns:a,hasShadow:o=!1,hasStripes:s=!1,noWordBreak:n=!1,range:l=[1,-1]})=>{const[m,d]=K(t),u=o?"shadow-lg":"";return r.jsx("div",{className:`not-prose overflow-x-auto rounded-lg ${u}`,children:r.jsxs("table",{className:"min-w-full table-auto cu-table",children:[r.jsx(H,{columns:a,noWordBreak:n,sortData:d}),r.jsx(U,{data:m,columns:a,striped:s,range:l})]})})};F.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [k: string]: string | number | JSX.Element
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number | JSX.Element",elements:[{name:"string"},{name:"number"},{name:"JSX.Element"}],required:!0}}]}}],raw:`{
  [k: string]: string | number | JSX.Element
}[]`},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},hasStripes:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasShadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},noWordBreak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},range:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[1, -1]",computed:!1}}}};const se={title:"Components/Table",component:F,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v=z.map(t=>{const a="http://thing/"+t.id;return{...t,link:r.jsx("a",{className:"font-semibold text-cu-red",href:a,children:"Edit"})}}),S=[{key:"id",header:"ID",sort:{sortable:!0}},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],h={};h.args={data:v,columns:S,hasStripes:!1,hasShadow:!1};const f={};f.args={data:v,columns:S,hasStripes:!0,hasShadow:!1};const g={};g.args={data:v,columns:S,hasStripes:!1,hasShadow:!0};const w={};w.args={data:v,columns:S,hasStripes:!1,hasShadow:!0,range:[1,3]};const y={};y.args={data:v,columns:S,hasStripes:!1,hasShadow:!0,range:[4,5]};var R,E,j;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(j=(E=h.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var q,W,$;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var N,A,J;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(J=(A=g.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var X,_,I;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:"{}",...(I=(_=w.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,V,L;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(L=(V=y.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const ne=["Default","WithStripes","WithShadow","WithRangeOne","WithRangeTwo"];export{h as Default,w as WithRangeOne,y as WithRangeTwo,g as WithShadow,f as WithStripes,ne as __namedExportsOrder,se as default};
