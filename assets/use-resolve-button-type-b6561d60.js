import{r as i}from"./index-ec8b93d8.js";import{l as o}from"./open-closed-aa2934ca.js";function u(t){var r;if(t.type)return t.type;let n=(r=t.as)!=null?r:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function p(t,r){let[n,e]=i.useState(()=>u(t));return o(()=>{e(u(t))},[t.type,t.as]),o(()=>{n||r.current&&r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&e("button")},[n,r]),n}export{p as s};
//# sourceMappingURL=use-resolve-button-type-b6561d60.js.map