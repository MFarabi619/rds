const __vite__fileDeps=["./YouTube-me-YNDCP.js","./_commonjsHelpers-BosuxZz1.js","./index-CBqU2yxZ.js","./SoundCloud-LV0jxGcS.js","./Vimeo-olJfFbJb.js","./Mux-oW5fLVHW.js","./iframe-BM5TbfW7.js","./Facebook-BlMbgejL.js","./Streamable-BvjH5ySd.js","./Wistia-zkXqeHJ8.js","./Twitch-DhfGRBlz.js","./DailyMotion-DvNwRkXN.js","./Mixcloud-BPtv0-Pk.js","./Vidyard-C4dt4ZGl.js","./Kaltura-DyuIz2-h.js","./FilePlayer-B_aUkYYD.js","./Preview-DJRgimNK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as Be,c as H,g as Fe}from"./_commonjsHelpers-BosuxZz1.js";import{_ as P}from"./iframe-BM5TbfW7.js";import{r as Y}from"./index-CBqU2yxZ.js";import{p as Ke}from"./index-Dk74W0Oi.js";var We=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&Xe(o,r.attrs),r.text&&(o.text=""+r.text);var _="onload"in o?te:Ye;_(o,a),o.onload||te(o,a),n.appendChild(o)};function Xe(e,t){for(var r in t)e.setAttribute(r,t[r])}function te(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ye(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var qe=function(t){return Je(t)&&!Ze(t)};function Je(e){return!!e&&typeof e=="object"}function Ze(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||et(e)}var Qe=typeof Symbol=="function"&&Symbol.for,Ge=Qe?Symbol.for("react.element"):60103;function et(e){return e.$$typeof===Ge}function tt(e){return Array.isArray(e)?[]:{}}function C(e,t){return t.clone!==!1&&t.isMergeableObject(e)?T(tt(e),e,t):e}function rt(e,t,r){return e.concat(t).map(function(a){return C(a,r)})}function at(e,t){if(!t.customMerge)return T;var r=t.customMerge(e);return typeof r=="function"?r:T}function nt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function re(e){return Object.keys(e).concat(nt(e))}function le(e,t){try{return t in e}catch{return!1}}function ot(e,t){return le(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function it(e,t,r){var a={};return r.isMergeableObject(e)&&re(e).forEach(function(n){a[n]=C(e[n],r)}),re(t).forEach(function(n){ot(e,n)||(le(e,n)&&r.isMergeableObject(t[n])?a[n]=at(n,r)(e[n],t[n],r):a[n]=C(t[n],r))}),a}function T(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||rt,r.isMergeableObject=r.isMergeableObject||qe,r.cloneUnlessOtherwiseSpecified=C;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):it(e,t,r):C(t,r)}T.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return T(a,n,r)},{})};var st=T,ue=st,lt=Object.create,j=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,ct=Object.getOwnPropertyNames,pt=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty,yt=(e,t)=>{for(var r in t)j(e,r,{get:t[r],enumerable:!0})},ce=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ct(t))!ft.call(e,n)&&n!==r&&j(e,n,{get:()=>t[n],enumerable:!(a=ut(t,n))||a.enumerable});return e},q=(e,t,r)=>(r=e!=null?lt(pt(e)):{},ce(t||!e||!e.__esModule?j(r,"default",{value:e,enumerable:!0}):r,e)),dt=e=>ce(j({},"__esModule",{value:!0}),e),pe={};yt(pe,{callPlayer:()=>Ct,getConfig:()=>Rt,getSDK:()=>At,isBlobUrl:()=>Lt,isMediaStream:()=>It,lazy:()=>Pt,omit:()=>Mt,parseEndTime:()=>Et,parseStartTime:()=>wt,queryString:()=>St,randomString:()=>Tt,supportsWebKitPresentationMode:()=>$t});var U=dt(pe),_t=q(Y),ht=q(We),mt=q(ue);const Pt=e=>_t.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),vt=/[?&#](?:start|t)=([0-9hms]+)/,Ot=/[?&#]end=([0-9hms]+)/,F=/(\d+)(h|m|s)/g,gt=/^\d+$/;function fe(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(F))return bt(a);if(gt.test(a))return parseInt(a)}}function bt(e){let t=0,r=F.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=F.exec(e)}return t}function wt(e){return fe(e,vt)}function Et(e){return fe(e,Ot)}function Tt(){return Math.random().toString(36).substr(2,5)}function St(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function V(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const b={},At=function(t,r,a=null,n=()=>!0,o=ht.default){const _=V(r);return _&&n(_)?Promise.resolve(_):new Promise((h,f)=>{if(b[t]){b[t].push({resolve:h,reject:f});return}b[t]=[{resolve:h,reject:f}];const g=O=>{b[t].forEach(S=>S.resolve(O))};if(a){const O=window[a];window[a]=function(){O&&O(),g(V(r))}}o(t,O=>{O?(b[t].forEach(S=>S.reject(O)),b[t]=null):a||g(V(r))})})};function Rt(e,t){return(0,mt.default)(t.config,e.config)}function Mt(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function Ct(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function It(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Lt(e){return/^blob:/.test(e)}function $t(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var J=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,jt=Object.getOwnPropertyNames,Ut=Object.prototype.hasOwnProperty,Nt=(e,t)=>{for(var r in t)J(e,r,{get:t[r],enumerable:!0})},xt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of jt(t))!Ut.call(e,n)&&n!==r&&J(e,n,{get:()=>t[n],enumerable:!(a=Dt(t,n))||a.enumerable});return e},kt=e=>xt(J({},"__esModule",{value:!0}),e),ye={};Nt(ye,{AUDIO_EXTENSIONS:()=>Z,DASH_EXTENSIONS:()=>Ae,FLV_EXTENSIONS:()=>Re,HLS_EXTENSIONS:()=>G,MATCH_URL_DAILYMOTION:()=>we,MATCH_URL_FACEBOOK:()=>me,MATCH_URL_FACEBOOK_WATCH:()=>Pe,MATCH_URL_KALTURA:()=>Se,MATCH_URL_MIXCLOUD:()=>Ee,MATCH_URL_MUX:()=>he,MATCH_URL_SOUNDCLOUD:()=>de,MATCH_URL_STREAMABLE:()=>ve,MATCH_URL_TWITCH_CHANNEL:()=>be,MATCH_URL_TWITCH_VIDEO:()=>ge,MATCH_URL_VIDYARD:()=>Te,MATCH_URL_VIMEO:()=>_e,MATCH_URL_WISTIA:()=>Oe,MATCH_URL_YOUTUBE:()=>K,VIDEO_EXTENSIONS:()=>Q,canPlay:()=>Vt});var Ht=kt(ye),ae=U;const K=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,de=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,_e=/vimeo\.com\/(?!progressive_redirect).+/,he=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,me=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Pe=/^https?:\/\/fb\.watch\/.+$/,ve=/streamable\.com\/([a-z0-9]+)$/,Oe=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,ge=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,be=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,we=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Ee=/mixcloud\.com\/([^/]+\/[^/]+)/,Te=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Se=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,Z=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,Q=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,G=/\.(m3u8)($|\?)/i,Ae=/\.(mpd)($|\?)/i,Re=/\.(flv)($|\?)/i,W=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&W(t)||W(t.src))return!0;return!1}return(0,ae.isMediaStream)(e)||(0,ae.isBlobUrl)(e)?!0:Z.test(e)||Q.test(e)||G.test(e)||Ae.test(e)||Re.test(e)},Vt={youtube:e=>e instanceof Array?e.every(t=>K.test(t)):K.test(e),soundcloud:e=>de.test(e)&&!Z.test(e),vimeo:e=>_e.test(e)&&!Q.test(e)&&!G.test(e),mux:e=>he.test(e),facebook:e=>me.test(e)||Pe.test(e),streamable:e=>ve.test(e),wistia:e=>Oe.test(e),twitch:e=>ge.test(e)||be.test(e),dailymotion:e=>we.test(e),mixcloud:e=>Ee.test(e),vidyard:e=>Te.test(e),kaltura:e=>Se.test(e),file:W};var ee=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyNames,Ft=Object.prototype.hasOwnProperty,Kt=(e,t)=>{for(var r in t)ee(e,r,{get:t[r],enumerable:!0})},Wt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Bt(t))!Ft.call(e,n)&&n!==r&&ee(e,n,{get:()=>t[n],enumerable:!(a=zt(t,n))||a.enumerable});return e},Xt=e=>Wt(ee({},"__esModule",{value:!0}),e),Me={};Kt(Me,{default:()=>qt});var Yt=Xt(Me),m=U,y=Ht,qt=[{key:"youtube",name:"YouTube",canPlay:y.canPlay.youtube,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./YouTube-me-YNDCP.js").then(e=>e.Y),__vite__mapDeps([0,1,2]),import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:y.canPlay.soundcloud,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./SoundCloud-LV0jxGcS.js").then(e=>e.S),__vite__mapDeps([3,1,2]),import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:y.canPlay.vimeo,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Vimeo-olJfFbJb.js").then(e=>e.V),__vite__mapDeps([4,1,2]),import.meta.url))},{key:"mux",name:"Mux",canPlay:y.canPlay.mux,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Mux-oW5fLVHW.js").then(e=>e.M),__vite__mapDeps([5,6,1,2]),import.meta.url))},{key:"facebook",name:"Facebook",canPlay:y.canPlay.facebook,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Facebook-BlMbgejL.js").then(e=>e.F),__vite__mapDeps([7,1,2]),import.meta.url))},{key:"streamable",name:"Streamable",canPlay:y.canPlay.streamable,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Streamable-BvjH5ySd.js").then(e=>e.S),__vite__mapDeps([8,1,2]),import.meta.url))},{key:"wistia",name:"Wistia",canPlay:y.canPlay.wistia,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Wistia-zkXqeHJ8.js").then(e=>e.W),__vite__mapDeps([9,1,2]),import.meta.url))},{key:"twitch",name:"Twitch",canPlay:y.canPlay.twitch,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Twitch-DhfGRBlz.js").then(e=>e.T),__vite__mapDeps([10,1,2]),import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:y.canPlay.dailymotion,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./DailyMotion-DvNwRkXN.js").then(e=>e.D),__vite__mapDeps([11,1,2]),import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:y.canPlay.mixcloud,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Mixcloud-BPtv0-Pk.js").then(e=>e.M),__vite__mapDeps([12,1,2]),import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:y.canPlay.vidyard,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Vidyard-C4dt4ZGl.js").then(e=>e.V),__vite__mapDeps([13,1,2]),import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:y.canPlay.kaltura,lazyPlayer:(0,m.lazy)(()=>P(()=>import("./Kaltura-DyuIz2-h.js").then(e=>e.K),__vite__mapDeps([14,1,2]),import.meta.url))},{key:"file",name:"FilePlayer",canPlay:y.canPlay.file,canEnablePIP:e=>y.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,m.supportsWebKitPresentationMode)())&&!y.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,m.lazy)(()=>P(()=>import("./FilePlayer-B_aUkYYD.js").then(e=>e.F),__vite__mapDeps([15,1,2]),import.meta.url))}],ne=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Jt(e,t){return!!(e===t||ne(e)&&ne(t))}function Zt(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function Qt(e,t){t===void 0&&(t=Zt);var r,a=[],n,o=!1;function _(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];return o&&r===this&&t(h,a)||(n=e.apply(this,h),o=!0,r=this,a=h),n}return _}const Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"})),er=Be(Gt);var tr=typeof Element<"u",rr=typeof Map=="function",ar=typeof Set=="function",nr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function D(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!D(e[a],t[a]))return!1;return!0}var o;if(rr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!D(a.value[1],t.get(a.value[0])))return!1;return!0}if(ar&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(nr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(tr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!D(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var Ce=function(t,r){try{return D(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},or=Object.create,N=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,sr=Object.getOwnPropertyNames,lr=Object.getPrototypeOf,ur=Object.prototype.hasOwnProperty,cr=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},Ie=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of sr(t))!ur.call(e,n)&&n!==r&&N(e,n,{get:()=>t[n],enumerable:!(a=ir(t,n))||a.enumerable});return e},pr=(e,t,r)=>(r=e!=null?or(lr(e)):{},Ie(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),fr=e=>Ie(N({},"__esModule",{value:!0}),e),Le={};cr(Le,{defaultProps:()=>_r,propTypes:()=>dr});var $e=fr(Le),yr=pr(Ke);const{string:u,bool:d,number:w,array:z,oneOfType:A,shape:v,object:p,func:l,node:oe}=yr.default,dr={url:A([u,z,p]),playing:d,loop:d,controls:d,volume:w,muted:d,playbackRate:w,width:A([u,w]),height:A([u,w]),style:p,progressInterval:w,playsinline:d,pip:d,stopOnUnmount:d,light:A([d,u,p]),playIcon:oe,previewTabIndex:w,previewAriaLabel:u,fallback:oe,oEmbedUrl:u,wrapper:A([u,l,v({render:l.isRequired})]),config:v({soundcloud:v({options:p}),youtube:v({playerVars:p,embedOptions:p,onUnstarted:l}),facebook:v({appId:u,version:u,playerId:u,attributes:p}),dailymotion:v({params:p}),vimeo:v({playerOptions:p,title:u}),mux:v({attributes:p,version:u}),file:v({attributes:p,tracks:z,forceVideo:d,forceAudio:d,forceHLS:d,forceSafariHLS:d,forceDisableHls:d,forceDASH:d,forceFLV:d,hlsOptions:p,hlsVersion:u,dashVersion:u,flvVersion:u}),wistia:v({options:p,playerId:u,customControls:z}),mixcloud:v({options:p}),twitch:v({options:p,playerId:u}),vidyard:v({options:p})}),onReady:l,onStart:l,onPlay:l,onPause:l,onBuffer:l,onBufferEnd:l,onEnded:l,onError:l,onDuration:l,onSeek:l,onPlaybackRateChange:l,onPlaybackQualityChange:l,onProgress:l,onClickPreview:l,onEnablePIP:l,onDisablePIP:l},c=()=>{},_r={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:c},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:c,onStart:c,onPlay:c,onPause:c,onBuffer:c,onBufferEnd:c,onEnded:c,onError:c,onDuration:c,onSeek:c,onPlaybackRateChange:c,onPlaybackQualityChange:c,onProgress:c,onClickPreview:c,onEnablePIP:c,onDisablePIP:c};var hr=Object.create,I=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyNames,vr=Object.getPrototypeOf,Or=Object.prototype.hasOwnProperty,gr=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,br=(e,t)=>{for(var r in t)I(e,r,{get:t[r],enumerable:!0})},De=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pr(t))!Or.call(e,n)&&n!==r&&I(e,n,{get:()=>t[n],enumerable:!(a=mr(t,n))||a.enumerable});return e},je=(e,t,r)=>(r=e!=null?hr(vr(e)):{},De(t||!e||!e.__esModule?I(r,"default",{value:e,enumerable:!0}):r,e)),wr=e=>De(I({},"__esModule",{value:!0}),e),s=(e,t,r)=>(gr(e,typeof t!="symbol"?t+"":t,r),r),Ue={};br(Ue,{default:()=>x});var Er=wr(Ue),ie=je(Y),Tr=je(Ce),Ne=$e,Sr=U;const Ar=5e3;class x extends ie.Component{constructor(){super(...arguments),s(this,"mounted",!1),s(this,"isReady",!1),s(this,"isPlaying",!1),s(this,"isLoading",!0),s(this,"loadOnReady",null),s(this,"startOnPlay",!0),s(this,"seekOnPlay",null),s(this,"onDurationCalled",!1),s(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),s(this,"getInternalPlayer",t=>this.player?this.player[t]:null),s(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),s(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),s(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),s(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),s(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),s(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),s(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),s(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:_,pip:h,loop:f,activePlayer:g,disableDeferredLoading:O}=this.props;if(!(0,Tr.default)(t.url,r)){if(this.isLoading&&!g.forceLoad&&!O&&!(0,Sr.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&h&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!h&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==_&&this.player.setPlaybackRate&&this.player.setPlaybackRate(_),t.loop!==f&&this.player.setLoop&&this.player.setLoop(f)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Ar));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?ie.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}s(x,"displayName","Player");s(x,"propTypes",Ne.propTypes);s(x,"defaultProps",Ne.defaultProps);var Rr=Object.create,L=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyNames,Ir=Object.getPrototypeOf,Lr=Object.prototype.hasOwnProperty,$r=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dr=(e,t)=>{for(var r in t)L(e,r,{get:t[r],enumerable:!0})},xe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Cr(t))!Lr.call(e,n)&&n!==r&&L(e,n,{get:()=>t[n],enumerable:!(a=Mr(t,n))||a.enumerable});return e},$=(e,t,r)=>(r=e!=null?Rr(Ir(e)):{},xe(t||!e||!e.__esModule?L(r,"default",{value:e,enumerable:!0}):r,e)),jr=e=>xe(L({},"__esModule",{value:!0}),e),i=(e,t,r)=>($r(e,typeof t!="symbol"?t+"":t,r),r),ke={};Dr(ke,{createReactPlayer:()=>Fr});var Ur=jr(ke),E=$(Y),Nr=$(ue),B=$(er),se=$(Ce),M=$e,He=U,xr=$(Er);const kr=(0,He.lazy)(()=>P(()=>import("./Preview-DJRgimNK.js").then(e=>e.P),__vite__mapDeps([16,1,2]),import.meta.url)),Hr=typeof window<"u"&&window.document&&typeof document<"u",Vr=typeof H<"u"&&H.window&&H.window.document,zr=Object.keys(M.propTypes),Br=Hr||Vr?E.Suspense:()=>null,R=[],Fr=(e,t)=>{var r;return r=class extends E.Component{constructor(){super(...arguments),i(this,"state",{showPreview:!!this.props.light}),i(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),i(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),i(this,"showPreview",()=>{this.setState({showPreview:!0})}),i(this,"getDuration",()=>this.player?this.player.getDuration():null),i(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),i(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),i(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),i(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),i(this,"handleReady",()=>{this.props.onReady(this)}),i(this,"getActivePlayer",(0,B.default)(a=>{for(const n of[...R,...e])if(n.canPlay(a))return n;return t||null})),i(this,"getConfig",(0,B.default)((a,n)=>{const{config:o}=this.props;return Nr.default.all([M.defaultProps.config,M.defaultProps.config[n]||{},o,o[n]||{}])})),i(this,"getAttributes",(0,B.default)(a=>(0,He.omit)(this.props,zr))),i(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return E.default.createElement(xr.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,se.default)(this.props,a)||!(0,se.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:_,oEmbedUrl:h,previewAriaLabel:f}=this.props;return E.default.createElement(kr,{url:a,light:n,playIcon:o,previewTabIndex:_,previewAriaLabel:f,oEmbedUrl:h,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:_,fallback:h,wrapper:f}=this.props,{showPreview:g}=this.state,O=this.getAttributes(a),S=typeof f=="string"?this.references.wrapper:void 0;return E.default.createElement(f,{ref:S,style:{...n,width:o,height:_},...O},E.default.createElement(Br,{fallback:h},g?this.renderPreview(a):this.renderActivePlayer(a)))}},i(r,"displayName","ReactPlayer"),i(r,"propTypes",M.propTypes),i(r,"defaultProps",M.defaultProps),i(r,"addCustomPlayer",a=>{R.push(a)}),i(r,"removeCustomPlayers",()=>{R.length=0}),i(r,"canPlay",a=>{for(const n of[...R,...e])if(n.canPlay(a))return!0;return!1}),i(r,"canEnablePIP",a=>{for(const n of[...R,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var Kr=Object.create,k=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,Xr=Object.getOwnPropertyNames,Yr=Object.getPrototypeOf,qr=Object.prototype.hasOwnProperty,Jr=(e,t)=>{for(var r in t)k(e,r,{get:t[r],enumerable:!0})},Ve=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xr(t))!qr.call(e,n)&&n!==r&&k(e,n,{get:()=>t[n],enumerable:!(a=Wr(t,n))||a.enumerable});return e},Zr=(e,t,r)=>(r=e!=null?Kr(Yr(e)):{},Ve(t||!e||!e.__esModule?k(r,"default",{value:e,enumerable:!0}):r,e)),Qr=e=>Ve(k({},"__esModule",{value:!0}),e),ze={};Jr(ze,{default:()=>ra});var Gr=Qr(ze),X=Zr(Yt),ea=Ur;const ta=X.default[X.default.length-1];var ra=(0,ea.createReactPlayer)(X.default,ta);const sa=Fe(Gr);export{sa as R,Ht as p,U as u};
