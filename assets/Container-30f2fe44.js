import{j as o,F as m}from"./jsx-runtime-9d2cd5de.js";const e={base:"cu-container py-10 px-8 -mx-8 md:py-14",white:"cu-container-white bg-white",grey:"cu-container-grey bg-cu-black-50",width5xl:"[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto",width7xl:"[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto",widthFull:"[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto",autoMargin:"[&>:not(.cu-container):not(.cu-column)]:mx-auto",prose:"prose prose-rds prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg"},t=({as:n="section",children:l,hasProse:u=!1,bgColor:r="white",maxWidth:a="5xl"})=>{const c=u?e.prose:"[&>*:first-child]:-mt-0",i=r==="grey"?`${e.grey}`:`${e.white}`,s=a?`${e.autoMargin} [&>:not(.cu-container):not(.cu-column)]:max-w-${a}`:"";return o(m,{children:o(n,{className:`${e.base} ${i} ${s} ${c}`,children:l})})};try{t.displayName="Container",t.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}},hasProse:{defaultValue:{value:"false"},description:"",name:"hasProse",required:!1,type:{name:"boolean"}},bgColor:{defaultValue:{value:"white"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"grey"'}]}},maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}}}}}catch{}export{t as C};
//# sourceMappingURL=Container-30f2fe44.js.map
