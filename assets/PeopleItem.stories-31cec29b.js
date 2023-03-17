import{j as e,a as g,F as V}from"./jsx-runtime-9d2cd5de.js";import{C as q}from"./Column-6f70111f.js";import{d as _}from"./index-e40656e9.js";import{B as M}from"./Badge-30ab9511.js";import{L as P}from"./Link-24898639.js";import{S as L}from"./StackedList-630778db.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";const p={imageWrapper:"",imageGlobals:"h-20 w-20 apsect-square bg-cu-black-100 overflow-hidden border-4 border-white rounded-lg shadow-md @sm:md:h-28 @sm:md:w-28 @lg:md:h-60 @lg:md:w-60",hasImage:"object-cover w-full h-full",noImage:"w-full h-full flex items-center justify-center @sm:md:text-4xl font-semibold"},i=({as:a="div",firstName:n,lastName:o,email:m,phoneNumber:d,tags:t,jobTitle:c,profileImage:l,alt:h,link:f="",noImage:S=!1})=>{var k;const T=`${n.split("")[0]}${o.split("")[0]}`;return e(a,{className:"not-prose group relative overflow-hidden @container",children:g(P,{href:f,className:"group relative flex h-full cursor-pointer flex-col gap-5 bg-white p-6 hover:bg-slate-50 focus:outline-none sm:grid-cols-1 @sm:md:gap-8 @lg:md:flex-row",children:[!S&&g(V,{children:[l&&e("div",{className:`${p.imageGlobals}`,children:e("img",{className:`${p.hasImage}`,src:l,alt:h})}),!l&&e("div",{className:`${p.imageGlobals}`,children:e("div",{className:`${p.noImage}`,children:T})})]}),g("div",{className:"flex flex-1 flex-col gap-1.5 pr-6 pt-1 md:gap-px @sm:md:pt-0 @lg:md:pt-2",children:[e("h3",{className:"text-lg font-semibold text-cu-black group-hover:text-cu-red md:text-xl @lg:md:text-2xl",children:n+" "+o}),c&&e("p",{className:"text-sm italic text-cu-black-600 @md:md:text-base @2xl:md:text-lg",children:c}),g("ul",{className:"space-y-1.5 pt-4",children:[m&&e("li",{className:"text-text-cyan-700 text-sm font-semibold @2xl:lg:text-base",children:m}),d&&e("li",{className:"text-sm text-cu-black-700 hover:text-cu-red @2xl:lg:text-base",children:d})]}),e("div",{className:"mt-4 @lg:md:mt-auto",children:(k=t==null?void 0:t.category)==null?void 0:k.map(N=>e(M,{children:N.name},N.id))})]}),e("div",{className:"absolute top-1/2 right-4 -mt-3",children:e(_,{className:"ml-auto h-5 w-5 flex-none text-cu-black-300","aria-hidden":"true"})})]})})};try{i.displayName="PeopleItem",i.__docgenInfo={description:"",displayName:"PeopleItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phoneNumber:{defaultValue:null,description:"",name:"phoneNumber",required:!1,type:{name:"string"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}},profileImage:{defaultValue:null,description:"",name:"profileImage",required:!1,type:{name:"string"}},link:{defaultValue:{value:""},description:"",name:"link",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},noImage:{defaultValue:{value:"false"},description:"",name:"noImage",required:!1,type:{name:"boolean"}}}}}catch{}const H=[{id:1,firstName:"Carleton",lastName:"Banks",email:"george.hadjisophocleous@carleton.ca",phoneNumber:" 613-520-2600 x1234",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]},jobTitle:"Manager",link:"#",profileImage:"https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg",alt:"Image alt tag"},{id:2,firstName:"Carleton",lastName:"Banks",email:"george.hadjisophocleous@carleton.ca",phoneNumber:" 613-520-2600 x1234",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]},jobTitle:"Manager",link:"#",profileImage:"https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg",alt:"Image alt tag"},{id:3,firstName:"Carleton",lastName:"Banks",email:"george.hadjisophocleous@carleton.ca",phoneNumber:" 613-520-2600 x1234",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]},jobTitle:"Manager",link:"#",profileImage:"https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg",alt:"Image alt tag"},{id:4,firstName:"Carleton",lastName:"Banks",email:"george.hadjisophocleous@carleton.ca",phoneNumber:" 613-520-2600 x1234",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]},jobTitle:"Manager",link:"#",profileImage:"https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg",alt:"Image alt tag"},{id:5,firstName:"Carleton",lastName:"Banks",email:"george.hadjisophocleous@carleton.ca",phoneNumber:" 613-520-2600 x1234",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]},jobTitle:"Manager",link:"#",profileImage:"https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg",alt:"Image alt tag"}],A={title:"Cards & Lists/Lists/People Item",component:i,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={};r.args={firstName:"Carleton",lastName:"Banks",email:"george.hadjisophocleous@carleton.ca",phoneNumber:" 613-520-2600 x1234",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]},jobTitle:"Manager",link:"#",profileImage:"https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg",alt:"Image alt tag"};const s={render:a=>e(q,{maxWidth:"5xl",children:e(L,{hasBorder:!0,children:e(i,{...a})})})};s.args={firstName:"Carleton",lastName:"Banks",email:"george.hadjisophocleous@carleton.ca",phoneNumber:"613-520-2600 x1234",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]},jobTitle:"Manager",link:"#"};const u={render:()=>e(q,{maxWidth:"5xl",children:e(L,{cols:"2",hasBorder:!0,hasShadow:!0,children:H.map(({id:a,firstName:n,lastName:o,email:m,tags:d,profileImage:t,jobTitle:c,phoneNumber:l,link:h,alt:f})=>e(i,{as:"li",firstName:n,lastName:o,email:m,tags:d,profileImage:t,jobTitle:c,phoneNumber:l,link:h,alt:f},a))})})};var x,b,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(I=(b=r.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var w,j,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Column maxWidth="5xl">
      <StackedList hasBorder>
        <PeopleItem {...args} />
      </StackedList>
    </Column>
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var v,B,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Column maxWidth="5xl">
      <StackedList cols="2" hasBorder hasShadow>
        {data.map(({
        id,
        firstName,
        lastName,
        email,
        tags,
        profileImage,
        jobTitle,
        phoneNumber,
        link,
        alt
      }) => <PeopleItem key={id} as="li" firstName={firstName} lastName={lastName} email={email} tags={tags} profileImage={profileImage} jobTitle={jobTitle} phoneNumber={phoneNumber} link={link} alt={alt} />)}
      </StackedList>
    </Column>
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const J=["Default","SingleItemList","MultiItemList"];export{r as Default,u as MultiItemList,s as SingleItemList,J as __namedExportsOrder,A as default};
//# sourceMappingURL=PeopleItem.stories-31cec29b.js.map