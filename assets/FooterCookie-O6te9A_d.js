import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as n}from"./index-CBqU2yxZ.js";import{B as c}from"./Button-5ZV7NZSY.js";const a=o=>{if(typeof document<"u"){const e=document.cookie.split(";").find(r=>r.trim().startsWith(o+"="));if(!e)return!0;const i=e.split("=")[1];return new Date(i).getTime()<=Date.now()}return!0},d=o=>{if(typeof document<"u"){const e=new Date;e.setTime(e.getTime()+365*24*60*60*1e3);const i="; expires="+e.toUTCString();document.cookie=o+"=true;expires="+i+";path=/"}},m=()=>{const[o,e]=n.useState(!0);n.useEffect(()=>{const s=a("cookieConsent");e(!!s)},[]);const i=()=>{d("cookieConsent"),e(!1)};return t.jsx("div",{className:`${o?"":"hidden"} fixed mx-auto max-w-7xl p-6 border-4 rounded-md shadow-lg bg-cu-black-25 bottom-6 right-6 left-6 border-white cu-cookie-notice`,children:t.jsxs("div",{className:"gap-5 text-center md:item-center md:text-left md:flex",children:[t.jsxs("p",{className:"max-w-3xl text-sm text-cu-black-600 md:text-base",children:["This site uses cookies to offer you a better browsing experience. Find out more on"," ",t.jsx("a",{href:"https://carleton.ca/privacy/privacy-notices/website-privacy-notice/",className:"font-semibold text-cu-red-700 hover:underline",children:"how we use cookies and how you can change your settings."})]}),t.jsx("div",{className:"mt-5 ml-auto md:mt-0 cu-cookie-button",children:t.jsx(c,{onClick:i,title:"Ok, got it!",noBreak:!0})})]})})};m.__docgenInfo={description:"",methods:[],displayName:"FooterCookie"};export{m as F};