import{r as o}from"./index-uCp2LrAq.js";import{t as l,b as p,c as m,i as v,s as g}from"./parse-TNlGONna.js";import{b as y}from"./parseISO-9eqMgGEv.js";function b({title:e,titleId:n,...t},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},t),e?o.createElement("title",{id:n},e):null,o.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",clipRule:"evenodd"}))}const F=o.forwardRef(b);function R({title:e,titleId:n,...t},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},t),e?o.createElement("title",{id:n},e):null,o.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"}))}const M=o.forwardRef(R);function L(e,n){const{years:t=0,months:a=0,weeks:r=0,days:d=0,hours:s=0,minutes:i=0,seconds:c=0}=n,u=l(e),f=a||t?y(u,a+t*12):u,w=d||r?p(f,d+r*7):f,h=i+s*60,D=(c+h*60)*1e3;return m(e,w.getTime()+D)}function T(e){return m(e,Date.now())}function j(e,n){const t=l(e.start),a=l(e.end);let r=+t>+a;const d=r?+t:+a,s=r?a:t;s.setHours(0,0,0,0);let i=1;const c=[];for(;+s<=d;)c.push(l(s)),s.setDate(s.getDate()+i),s.setHours(0,0,0,0);return r?c.reverse():c}function B(e){return v(e,T(e))}function H(){return g(Date.now())}export{F,M as a,L as b,j as e,B as i,H as s};