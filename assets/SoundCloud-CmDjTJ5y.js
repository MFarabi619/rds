import{g as P}from"./_commonjsHelpers-BosuxZz1.js";import{r as g}from"./index-BwDkhjyp.js";import{u as b,p as v}from"./index-DoBdcvUG.js";function O(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const n=Object.getOwnPropertyDescriptor(s,o);n&&Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var S=Object.create,l=Object.defineProperty,w=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,C=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,D=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,L=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},d=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of j(e))!E.call(t,o)&&o!==r&&l(t,o,{get:()=>e[o],enumerable:!(s=w(e,o))||s.enumerable});return t},M=(t,e,r)=>(r=t!=null?S(C(t)):{},d(!t||!t.__esModule?l(r,"default",{value:t,enumerable:!0}):r,t)),R=t=>d(l({},"__esModule",{value:!0}),t),i=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r),h={};L(h,{default:()=>u});var f=R(h),p=M(g),c=b,T=v;const N="https://w.soundcloud.com/player/api.js",x="SC";class u extends p.Component{constructor(){super(...arguments),i(this,"callPlayer",c.callPlayer),i(this,"duration",null),i(this,"currentTime",null),i(this,"fractionLoaded",null),i(this,"mute",()=>{this.setVolume(0)}),i(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),i(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){(0,c.getSDK)(N,x).then(s=>{if(!this.iframe)return;const{PLAY:o,PLAY_PROGRESS:n,PAUSE:m,FINISH:y,ERROR:_}=s.Widget.Events;r||(this.player=s.Widget(this.iframe),this.player.bind(o,this.props.onPlay),this.player.bind(m,()=>{this.duration-this.currentTime<.05||this.props.onPause()}),this.player.bind(n,a=>{this.currentTime=a.currentPosition/1e3,this.fractionLoaded=a.loadedProgress}),this.player.bind(y,()=>this.props.onEnded()),this.player.bind(_,a=>this.props.onError(a))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration(a=>{this.duration=a/1e3,this.props.onReady()})}})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seekTo",e*1e3),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return p.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:r,frameBorder:0,allow:"autoplay"})}}i(u,"displayName","SoundCloud");i(u,"canPlay",T.canPlay.soundcloud);i(u,"loopOnEnded",!0);const A=P(f),K=O({__proto__:null,default:A},[f]);export{K as S};