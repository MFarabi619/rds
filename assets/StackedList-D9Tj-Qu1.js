import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{m as c}from"./propClasses-BCnilxRx.js";const s={offset:"md:mb-6 duration-300 ease-in",left:"md:float-left lg:ml-2 xl:ml-24 2xl:ml-[12%] md:mr-10",right:"md:float-right md:mr-0 xl:mr-24 2xl:mr-[12%] md:ml-10"},p=({children:i,as:r="ul",cols:l="2",listType:m="posts",maxWidth:n="5xl",offset:a,header:t})=>{const d=r,o=l==="1"?"grid md:grid-cols-1":"grid md:grid-cols-2",u=a?`${s[a]} ${s.offset} md:max-w-sm lg:max-w-md`:c[n];return e.jsxs("div",{className:`cu-stackedlist cu-component not-contained not-prose mx-auto overflow-hidden rounded-lg bg-white w-full shadow-lg ${u}`,children:[t&&e.jsx("h2",{className:"px-6 py-4 text-base font-semibold border-b rounded-t-lg md:text-xl bg-gray-50 text-cu-black-800",children:t}),e.jsx(d,{className:`cu-stackedlist--${m} cu-stackedlist--${l} ${o}`,children:i})]})};p.__docgenInfo={description:"",methods:[],displayName:"StackedList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"union",raw:"'ul' | 'div'",elements:[{name:"literal",value:"'ul'"},{name:"literal",value:"'div'"}]},description:"",defaultValue:{value:"'ul'",computed:!1}},cols:{required:!1,tsType:{name:"union",raw:"'1' | '2'",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"}]},description:"",defaultValue:{value:"'2'",computed:!1}},listType:{required:!1,tsType:{name:"union",raw:"'posts' | 'toc'",elements:[{name:"literal",value:"'posts'"},{name:"literal",value:"'toc'"}]},description:"",defaultValue:{value:"'posts'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof maxWidthClasses",elements:[{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},offset:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},header:{required:!1,tsType:{name:"string"},description:""}}};export{p as S};