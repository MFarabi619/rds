import{r as i}from"./index-4g5l5LRQ.js";import{l as o}from"./transition-8qPHkook.js";function u(t){var r;if(t.type)return t.type;let n=(r=t.as)!=null?r:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function p(t,r){let[n,e]=i.useState(()=>u(t));return o(()=>{e(u(t))},[t.type,t.as]),o(()=>{n||r.current&&r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&e("button")},[n,r]),n}export{p as s};