import{g as f}from"./_commonjsHelpers-BosuxZz1.js";import{r as g}from"./index-uCp2LrAq.js";import{u as v,p as w}from"./index-BEcEkSL6.js";function O(t,e){for(var a=0;a<e.length;a++){const s=e[a];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(s,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var C=Object.create,i=Object.defineProperty,k=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,E=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,R=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,j=(t,e)=>{for(var a in e)i(t,a,{get:e[a],enumerable:!0})},h=(t,e,a,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of D(e))!S.call(t,r)&&r!==a&&i(t,r,{get:()=>e[r],enumerable:!(s=k(e,r))||s.enumerable});return t},I=(t,e,a)=>(a=t!=null?C(E(t)):{},h(!t||!t.__esModule?i(a,"default",{value:t,enumerable:!0}):a,t)),M=t=>h(i({},"__esModule",{value:!0}),t),o=(t,e,a)=>(R(t,typeof e!="symbol"?e+"":e,a),a),d={};j(d,{default:()=>l});var _=M(d),y=I(g),c=v,P=w;const W="https://fast.wistia.com/assets/external/E-v1.js",x="Wistia",A="wistia-player-";class l extends y.Component{constructor(){super(...arguments),o(this,"callPlayer",c.callPlayer),o(this,"playerID",this.props.config.playerId||`${A}${(0,c.randomString)()}`),o(this,"onPlay",(...e)=>this.props.onPlay(...e)),o(this,"onPause",(...e)=>this.props.onPause(...e)),o(this,"onSeek",(...e)=>this.props.onSeek(...e)),o(this,"onEnded",(...e)=>this.props.onEnded(...e)),o(this,"onPlaybackRateChange",(...e)=>this.props.onPlaybackRateChange(...e)),o(this,"mute",()=>{this.callPlayer("mute")}),o(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:a,muted:s,controls:r,onReady:n,config:p,onError:b}=this.props;(0,c.getSDK)(W,x).then(m=>{p.customControls&&p.customControls.forEach(u=>m.defineControl(u)),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:a,silentAutoPlay:"allow",muted:s,controlsVisibleOnLoad:r,fullscreenButton:r,playbar:r,playbackRateControl:r,qualityControl:r,volumeControl:r,settingsControl:r,smallPlayButton:r,...p.options},onReady:u=>{this.player=u,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),n()}})},b)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e,a=!0){this.callPlayer("time",e),a||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){const{url:e}=this.props,a=e&&e.match(P.MATCH_URL_WISTIA)[1],s=`wistia_embed wistia_async_${a}`,r={width:"100%",height:"100%"};return y.default.createElement("div",{id:this.playerID,key:a,className:s,style:r})}}o(l,"displayName","Wistia");o(l,"canPlay",P.canPlay.wistia);o(l,"loopOnEnded",!0);const L=f(_),q=O({__proto__:null,default:L},[_]);export{q as W};
