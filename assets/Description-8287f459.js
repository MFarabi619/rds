import{j as g}from"./jsx-runtime-7ce7b810.js";import{p as X}from"./globalClasses-ae4f1421.js";import{P as T}from"./index-9d475cdf.js";import{g as z}from"./_commonjsHelpers-de833af9.js";import{r as oe,R as j}from"./index-37ba2b57.js";import{i as ie}from"./index-16f3f781.js";import{C as ae}from"./ChevronRightIcon-0ed75403.js";const Je=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}],b={base:"grid border-b border-cu-black-200",spacing:"pt-8 pb-8 md:pt-8 md:pb-8 first:pt-0",accordion:"pt-4 pb-3 md:pt-6 md:pb-5 first:border-t",flexRow:"md:grid-cols-left-260 gap-2 md:gap-6",flexCol:"grid-row gap-2",button:"flex items-center w-full",chevron:"w-5 h-5 ml-auto text-cu-black-500 transition-transform",term:"font-semibold pb-2 mt-0 md:mt-0 mb-0",desc:"pl-0 md:pl-0 mt-0 md:mt-0 [&>*:first-child]:mt-0 md:[&>*:first-child]:mt-0 [&>*:last-child]:mb-2 md:[&>*:last-child]:mb-2"};function ce(r){return r&&typeof r=="object"&&"default"in r?r.default:r}var Q=oe,se=ce(Q);function q(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ue(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var le=!!(typeof window<"u"&&window.document&&window.document.createElement);function de(r,e,t){if(typeof r!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof t<"u"&&typeof t!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function n(o){return o.displayName||o.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var u=[],a;function c(){a=r(u.map(function(l){return l.props})),s.canUseDOM?e(a):t&&(a=t(a))}var s=function(l){ue(p,l);function p(){return l.apply(this,arguments)||this}p.peek=function(){return a},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=a;return a=void 0,u=[],y};var f=p.prototype;return f.UNSAFE_componentWillMount=function(){u.push(this),c()},f.componentDidUpdate=function(){c()},f.componentWillUnmount=function(){var y=u.indexOf(this);u.splice(y,1),c()},f.render=function(){return se.createElement(i,this.props)},p}(Q.PureComponent);return q(s,"displayName","SideEffect("+n(i)+")"),q(s,"canUseDOM",le),s}}var pe=de;const fe=z(pe);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Y=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;function he(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function ve(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(i){return e[i]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var ge=ve()?Object.assign:function(r,e){for(var t,n=he(r),o,i=1;i<arguments.length;i++){t=Object(arguments[i]);for(var u in t)me.call(t,u)&&(n[u]=t[u]);if(Y){o=Y(t);for(var a=0;a<o.length;a++)Te.call(t,o[a])&&(n[o[a]]=t[o[a]])}}return n};const ye=z(ge);var P={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},d={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(d).map(function(r){return d[r]});var h={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},be=Object.keys(M).reduce(function(r,e){return r[M[e]]=e,r},{}),Ee=[d.NOSCRIPT,d.SCRIPT,d.STYLE],E="data-react-helmet",Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ce=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Se=function(){function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),v=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Oe=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},B=function(r,e){var t={};for(var n in r)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);return t},Pe=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},D=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_e=function(e){var t=w(e,d.TITLE),n=w(e,L.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var o=w(e,L.DEFAULT_TITLE);return t||o||void 0},we=function(e){return w(e,L.ON_CHANGE_CLIENT_STATE)||function(){}},x=function(e,t){return t.filter(function(n){return typeof n[e]<"u"}).map(function(n){return n[e]}).reduce(function(n,o){return v({},n,o)},{})},Re=function(e,t){return t.filter(function(n){return typeof n[d.BASE]<"u"}).map(function(n){return n[d.BASE]}).reverse().reduce(function(n,o){if(!n.length)for(var i=Object.keys(o),u=0;u<i.length;u++){var a=i[u],c=a.toLowerCase();if(e.indexOf(c)!==-1&&o[c])return n.concat(o)}return n},[])},N=function(e,t,n){var o={};return n.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]<"u"&&Le("Helmet: "+e+' should be of type "Array". Instead found type "'+Ae(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,u){var a={};u.filter(function(f){for(var m=void 0,y=Object.keys(f),A=0;A<y.length;A++){var C=y[A],S=C.toLowerCase();t.indexOf(S)!==-1&&!(m===h.REL&&f[m].toLowerCase()==="canonical")&&!(S===h.REL&&f[S].toLowerCase()==="stylesheet")&&(m=S),t.indexOf(C)!==-1&&(C===h.INNER_HTML||C===h.CSS_TEXT||C===h.ITEM_PROP)&&(m=C)}if(!m||!f[m])return!1;var R=f[m].toLowerCase();return o[m]||(o[m]={}),a[m]||(a[m]={}),o[m][R]?!1:(a[m][R]=!0,!0)}).reverse().forEach(function(f){return i.push(f)});for(var c=Object.keys(a),s=0;s<c.length;s++){var l=c[s],p=ye({},o[l],a[l]);o[l]=p}return i},[]).reverse()},w=function(e,t){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o.hasOwnProperty(t))return o[t]}return null},Ne=function(e){return{baseTag:Re([h.HREF,h.TARGET],e),bodyAttributes:x(P.BODY,e),defer:w(e,L.DEFER),encode:w(e,L.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:x(P.HTML,e),linkTags:N(d.LINK,[h.REL,h.HREF],e),metaTags:N(d.META,[h.NAME,h.CHARSET,h.HTTPEQUIV,h.PROPERTY,h.ITEM_PROP],e),noscriptTags:N(d.NOSCRIPT,[h.INNER_HTML],e),onChangeClientState:we(e),scriptTags:N(d.SCRIPT,[h.SRC,h.INNER_HTML],e),styleTags:N(d.STYLE,[h.CSS_TEXT],e),title:_e(e),titleAttributes:x(P.TITLE,e)}},H=function(){var r=Date.now();return function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout(function(){H(e)},0)}}(),G=function(e){return clearTimeout(e)},Ie=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||H:global.requestAnimationFrame||H,je=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:global.cancelAnimationFrame||G,Le=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},I=null,Me=function(e){I&&je(I),e.defer?I=Ie(function(){V(e,function(){I=null})}):(V(e),I=null)},V=function(e,t){var n=e.baseTag,o=e.bodyAttributes,i=e.htmlAttributes,u=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,f=e.title,m=e.titleAttributes;F(d.BODY,o),F(d.HTML,i),xe(f,m);var y={baseTag:_(d.BASE,n),linkTags:_(d.LINK,u),metaTags:_(d.META,a),noscriptTags:_(d.NOSCRIPT,c),scriptTags:_(d.SCRIPT,l),styleTags:_(d.STYLE,p)},A={},C={};Object.keys(y).forEach(function(S){var R=y[S],U=R.newTags,ne=R.oldTags;U.length&&(A[S]=U),ne.length&&(C[S]=y[S].oldTags)}),t&&t(),s(e,A,C)},J=function(e){return Array.isArray(e)?e.join(""):e},xe=function(e,t){typeof e<"u"&&document.title!==e&&(document.title=J(e)),F(d.TITLE,t)},F=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var o=n.getAttribute(E),i=o?o.split(","):[],u=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),i.indexOf(s)===-1&&i.push(s);var p=u.indexOf(s);p!==-1&&u.splice(p,1)}for(var f=u.length-1;f>=0;f--)n.removeAttribute(u[f]);i.length===u.length?n.removeAttribute(E):n.getAttribute(E)!==a.join(",")&&n.setAttribute(E,a.join(","))}},_=function(e,t){var n=document.head||document.querySelector(d.HEAD),o=n.querySelectorAll(e+"["+E+"]"),i=Array.prototype.slice.call(o),u=[],a=void 0;return t&&t.length&&t.forEach(function(c){var s=document.createElement(e);for(var l in c)if(c.hasOwnProperty(l))if(l===h.INNER_HTML)s.innerHTML=c.innerHTML;else if(l===h.CSS_TEXT)s.styleSheet?s.styleSheet.cssText=c.cssText:s.appendChild(document.createTextNode(c.cssText));else{var p=typeof c[l]>"u"?"":c[l];s.setAttribute(l,p)}s.setAttribute(E,"true"),i.some(function(f,m){return a=m,s.isEqualNode(f)})?i.splice(a,1):u.push(s)}),i.forEach(function(c){return c.parentNode.removeChild(c)}),u.forEach(function(c){return n.appendChild(c)}),{oldTags:i,newTags:u}},Z=function(e){return Object.keys(e).reduce(function(t,n){var o=typeof e[n]<"u"?n+'="'+e[n]+'"':""+n;return t?t+" "+o:o},"")},De=function(e,t,n,o){var i=Z(n),u=J(t);return i?"<"+e+" "+E+'="true" '+i+">"+D(u,o)+"</"+e+">":"<"+e+" "+E+'="true">'+D(u,o)+"</"+e+">"},He=function(e,t,n){return t.reduce(function(o,i){var u=Object.keys(i).filter(function(s){return!(s===h.INNER_HTML||s===h.CSS_TEXT)}).reduce(function(s,l){var p=typeof i[l]>"u"?l:l+'="'+D(i[l],n)+'"';return s?s+" "+p:p},""),a=i.innerHTML||i.cssText||"",c=Ee.indexOf(e)===-1;return o+"<"+e+" "+E+'="true" '+u+(c?"/>":">"+a+"</"+e+">")},"")},K=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,o){return n[M[o]||o]=e[o],n},t)},Fe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,o){return n[be[o]||o]=e[o],n},t)},ke=function(e,t,n){var o,i=(o={key:t},o[E]=!0,o),u=K(n,i);return[j.createElement(d.TITLE,u,t)]},$e=function(e,t){return t.map(function(n,o){var i,u=(i={key:o},i[E]=!0,i);return Object.keys(n).forEach(function(a){var c=M[a]||a;if(c===h.INNER_HTML||c===h.CSS_TEXT){var s=n.innerHTML||n.cssText;u.dangerouslySetInnerHTML={__html:s}}else u[c]=n[a]}),j.createElement(e,u)})},O=function(e,t,n){switch(e){case d.TITLE:return{toComponent:function(){return ke(e,t.title,t.titleAttributes)},toString:function(){return De(e,t.title,t.titleAttributes,n)}};case P.BODY:case P.HTML:return{toComponent:function(){return K(t)},toString:function(){return Z(t)}};default:return{toComponent:function(){return $e(e,t)},toString:function(){return He(e,t,n)}}}},ee=function(e){var t=e.baseTag,n=e.bodyAttributes,o=e.encode,i=e.htmlAttributes,u=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,p=e.title,f=p===void 0?"":p,m=e.titleAttributes;return{base:O(d.BASE,t,o),bodyAttributes:O(P.BODY,n,o),htmlAttributes:O(P.HTML,i,o),link:O(d.LINK,u,o),meta:O(d.META,a,o),noscript:O(d.NOSCRIPT,c,o),script:O(d.SCRIPT,s,o),style:O(d.STYLE,l,o),title:O(d.TITLE,{title:f,titleAttributes:m},o)}},Ue=function(e){var t,n;return n=t=function(o){Oe(i,o);function i(){return Ce(this,i),Pe(this,o.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(a){return!ie(this.props,a)},i.prototype.mapNestedChildrenToProps=function(a,c){if(!c)return null;switch(a.type){case d.SCRIPT:case d.NOSCRIPT:return{innerHTML:c};case d.STYLE:return{cssText:c}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(a){var c,s=a.child,l=a.arrayTypeChildren,p=a.newChildProps,f=a.nestedChildren;return v({},l,(c={},c[s.type]=[].concat(l[s.type]||[],[v({},p,this.mapNestedChildrenToProps(s,f))]),c))},i.prototype.mapObjectTypeChildren=function(a){var c,s,l=a.child,p=a.newProps,f=a.newChildProps,m=a.nestedChildren;switch(l.type){case d.TITLE:return v({},p,(c={},c[l.type]=m,c.titleAttributes=v({},f),c));case d.BODY:return v({},p,{bodyAttributes:v({},f)});case d.HTML:return v({},p,{htmlAttributes:v({},f)})}return v({},p,(s={},s[l.type]=v({},f),s))},i.prototype.mapArrayTypeChildrenToProps=function(a,c){var s=v({},c);return Object.keys(a).forEach(function(l){var p;s=v({},s,(p={},p[l]=a[l],p))}),s},i.prototype.warnOnInvalidChildren=function(a,c){return!0},i.prototype.mapChildrenToProps=function(a,c){var s=this,l={};return j.Children.forEach(a,function(p){if(!(!p||!p.props)){var f=p.props,m=f.children,y=B(f,["children"]),A=Fe(y);switch(s.warnOnInvalidChildren(p,m),p.type){case d.LINK:case d.META:case d.NOSCRIPT:case d.SCRIPT:case d.STYLE:l=s.flattenArrayTypeChildren({child:p,arrayTypeChildren:l,newChildProps:A,nestedChildren:m});break;default:c=s.mapObjectTypeChildren({child:p,newProps:c,newChildProps:A,nestedChildren:m});break}}}),c=this.mapArrayTypeChildrenToProps(l,c),c},i.prototype.render=function(){var a=this.props,c=a.children,s=B(a,["children"]),l=v({},s);return c&&(l=this.mapChildrenToProps(c,l)),j.createElement(e,l)},Se(i,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),i}(j.Component),t.propTypes={base:T.object,bodyAttributes:T.object,children:T.oneOfType([T.arrayOf(T.node),T.node]),defaultTitle:T.string,defer:T.bool,encodeSpecialCharacters:T.bool,htmlAttributes:T.object,link:T.arrayOf(T.object),meta:T.arrayOf(T.object),noscript:T.arrayOf(T.object),onChangeClientState:T.func,script:T.arrayOf(T.object),style:T.arrayOf(T.object),title:T.string,titleAttributes:T.object,titleTemplate:T.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var o=e.rewind();return o||(o=ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},n},qe=function(){return null},Ye=fe(Ne,Me,ee)(qe),k=Ue(Ye);k.renderStatic=k.rewind;const te=({term:r,children:e})=>{const t=r&&typeof r=="string"?"accordion-"+r.toLowerCase().replace(/ +/g,"-"):"";return g.jsxs(g.Fragment,{children:[g.jsx(k,{children:g.jsx("script",{src:"./src/components/Description/DescriptionAccordionScript.js",type:"text/javascript"})}),g.jsxs("div",{className:`accordion ${b.base} ${b.accordion}`,children:[g.jsx("dt",{className:`${b.term} ${X.base}`,children:g.jsxs("button",{className:`accordion__button ${b.button}`,"aria-expanded":"false","aria-controls":t,children:[r,g.jsx(ae,{className:`accordion__icon ${b.chevron} rotate-0}`})]})}),g.jsx("dd",{className:`accordion__content ${b.desc}`,hidden:!0,id:t,children:e})]})]})};te.displayName="Description.Accordion";try{Description.Accordion.displayName="Description.Accordion",Description.Accordion.__docgenInfo={description:"",displayName:"Description.Accordion",props:{term:{defaultValue:null,description:"",name:"term",required:!0,type:{name:"string"}}}}}catch{}const re=({term:r,children:e,useColumns:t})=>{const n=t?b.flexRow:b.flexCol;return g.jsxs("div",{className:`${b.base} ${n} ${b.spacing}`,children:[g.jsx("dt",{className:`${b.term}`,children:r}),g.jsx("dd",{className:`${b.desc}`,children:e})]})};re.displayName="Description.Meta";try{Description.Meta.displayName="Description.Meta",Description.Meta.__docgenInfo={description:"",displayName:"Description.Meta",props:{term:{defaultValue:null,description:"",name:"term",required:!1,type:{name:"string"}},useColumns:{defaultValue:null,description:"",name:"useColumns",required:!1,type:{name:"boolean"}}}}}catch{}const $=({children:r})=>g.jsx("dl",{className:`cu-description ${X.base}`,children:r}),W=Object.assign($,{Accordion:te,Meta:re});try{$.displayName="DescriptionWrapper",$.__docgenInfo={description:"",displayName:"DescriptionWrapper",props:{}}}catch{}try{W.displayName="Description",W.__docgenInfo={description:"",displayName:"Description",props:{}}}catch{}export{W as D,Je as a};
//# sourceMappingURL=Description-8287f459.js.map