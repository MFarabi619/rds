import{j as f,a as F}from"./jsx-runtime-9d2cd5de.js";import{g as X,X as H}from"./index-a336f0bb.js";import{r as v}from"./index-580b8df0.js";import{p as z}from"./index-4d501b15.js";import{c as k}from"./_commonjsHelpers-042e6b4d.js";import{J as E}from"./combobox-00d1fd7e.js";var b={},j={},Q="Expected a function",R=0/0,Y="[object Symbol]",Z=/^\s+|\s+$/g,ee=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,oe=parseInt,re=typeof k=="object"&&k&&k.Object===Object&&k,ae=typeof self=="object"&&self&&self.Object===Object&&self,ie=re||ae||Function("return this")(),se=Object.prototype,ue=se.toString,ce=Math.max,le=Math.min,C=function(){return ie.Date.now()};function de(n,o,a){var e,t,r,s,i,l,y=0,x=!1,S=!1,w=!0;if(typeof n!="function")throw new TypeError(Q);o=G(o)||0,L(a)&&(x=!!a.leading,S="maxWait"in a,r=S?ce(G(a.maxWait)||0,o):r,w="trailing"in a?!!a.trailing:w);function d(c){var h=e,O=t;return e=t=void 0,y=c,s=n.apply(O,h),s}function I(c){return y=c,i=setTimeout(P,o),x?d(c):s}function m(c){var h=c-l,O=c-y,U=o-h;return S?le(U,r-O):U}function g(c){var h=c-l,O=c-y;return l===void 0||h>=o||h<0||S&&O>=r}function P(){var c=C();if(g(c))return K(c);i=setTimeout(P,m(c))}function K(c){return i=void 0,w&&e?d(c):(e=t=void 0,s)}function W(){i!==void 0&&clearTimeout(i),y=0,e=l=t=i=void 0}function J(){return i===void 0?s:K(C())}function T(){var c=C(),h=g(c);if(e=arguments,t=this,l=c,h){if(i===void 0)return I(l);if(S)return i=setTimeout(P,o),d(l)}return i===void 0&&(i=setTimeout(P,o)),s}return T.cancel=W,T.flush=J,T}function L(n){var o=typeof n;return!!n&&(o=="object"||o=="function")}function ge(n){return!!n&&typeof n=="object"}function fe(n){return typeof n=="symbol"||ge(n)&&ue.call(n)==Y}function G(n){if(typeof n=="number")return n;if(fe(n))return R;if(L(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=L(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=n.replace(Z,"");var a=te.test(n);return a||ne.test(n)?oe(n.slice(2),a?2:8):ee.test(n)?R:+n}var pe=de,M={};Object.defineProperty(M,"__esModule",{value:!0});M.compose=function(){for(var o=arguments.length,a=Array(o),e=0;e<o;e++)a[e]=arguments[e];return function(){for(var t=arguments.length,r=Array(t),s=0;s<t;s++)r[s]=arguments[s];a.forEach(function(i){return i&&i.apply(void 0,r)})}};M.pick=function(o){for(var a=arguments.length,e=Array(a>1?a-1:0),t=1;t<a;t++)e[t-1]=arguments[t];return e.reduce(function(r,s){return o&&o.hasOwnProperty(s)&&(r[s]=o[s]),r},{})};Object.defineProperty(j,"__esModule",{value:!0});var A=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},me=function(){function n(o,a){for(var e=0;e<a.length;e++){var t=a[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(o,a,e){return a&&n(o.prototype,a),e&&n(o,e),o}}(),he=v,ve=D(he),be=z,u=D(be),ye=pe,Se=D(ye),p=M;function D(n){return n&&n.__esModule?n:{default:n}}function we(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function Ie(n,o){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:n}function Pe(n,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(n,o):n.__proto__=o)}var Ae=function(o){return{mainText:o.main_text,secondaryText:o.secondary_text}},N=function(n){Pe(o,n);function o(a){we(this,o);var e=Ie(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return e.init=function(){if(!window.google)throw new Error("[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library");if(!window.google.maps.places)throw new Error("[react-places-autocomplete]: Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library");e.autocompleteService=new window.google.maps.places.AutocompleteService,e.autocompleteOK=window.google.maps.places.PlacesServiceStatus.OK,e.setState(function(t){return t.ready?null:{ready:!0}})},e.autocompleteCallback=function(t,r){if(e.setState({loading:!1}),r!==e.autocompleteOK){e.props.onError(r,e.clearSuggestions);return}var s=e.props.highlightFirstSuggestion;e.setState({suggestions:t.map(function(i,l){return{id:i.id,description:i.description,placeId:i.place_id,active:!!(s&&l===0),index:l,formattedSuggestion:Ae(i.structured_formatting),matchedSubstrings:i.matched_substrings,terms:i.terms,types:i.types}})})},e.fetchPredictions=function(){var t=e.props.value;t.length&&(e.setState({loading:!0}),e.autocompleteService.getPlacePredictions(A({},e.props.searchOptions,{input:t}),e.autocompleteCallback))},e.clearSuggestions=function(){e.setState({suggestions:[]})},e.clearActive=function(){e.setState({suggestions:e.state.suggestions.map(function(t){return A({},t,{active:!1})})})},e.handleSelect=function(t,r,s){e.clearSuggestions(),e.props.onSelect?e.props.onSelect(t,r,s):e.props.onChange(t)},e.getActiveSuggestion=function(){return e.state.suggestions.find(function(t){return t.active})},e.selectActiveAtIndex=function(t){var r=e.state.suggestions.find(function(s){return s.index===t}).description;e.setActiveAtIndex(t),e.props.onChange(r)},e.selectUserInputValue=function(){e.clearActive(),e.props.onChange(e.state.userInputValue)},e.handleEnterKey=function(){var t=e.getActiveSuggestion();t===void 0?e.handleSelect(e.props.value,null,null):e.handleSelect(t.description,t.placeId,t)},e.handleDownKey=function(){if(e.state.suggestions.length!==0){var t=e.getActiveSuggestion();t===void 0?e.selectActiveAtIndex(0):t.index===e.state.suggestions.length-1?e.selectUserInputValue():e.selectActiveAtIndex(t.index+1)}},e.handleUpKey=function(){if(e.state.suggestions.length!==0){var t=e.getActiveSuggestion();t===void 0?e.selectActiveAtIndex(e.state.suggestions.length-1):t.index===0?e.selectUserInputValue():e.selectActiveAtIndex(t.index-1)}},e.handleInputKeyDown=function(t){switch(t.key){case"Enter":t.preventDefault(),e.handleEnterKey();break;case"ArrowDown":t.preventDefault(),e.handleDownKey();break;case"ArrowUp":t.preventDefault(),e.handleUpKey();break;case"Escape":e.clearSuggestions();break}},e.setActiveAtIndex=function(t){e.setState({suggestions:e.state.suggestions.map(function(r,s){return s===t?A({},r,{active:!0}):A({},r,{active:!1})})})},e.handleInputChange=function(t){var r=t.target.value;if(e.props.onChange(r),e.setState({userInputValue:r}),!r){e.clearSuggestions();return}e.props.shouldFetchSuggestions&&e.debouncedFetchPredictions()},e.handleInputOnBlur=function(){e.mousedownOnSuggestion||e.clearSuggestions()},e.getActiveSuggestionId=function(){var t=e.getActiveSuggestion();return t?"PlacesAutocomplete__suggestion-"+t.placeId:void 0},e.getIsExpanded=function(){return e.state.suggestions.length>0},e.getInputProps=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(t.hasOwnProperty("value"))throw new Error("[react-places-autocomplete]: getInputProps does not accept `value`. Use `value` prop instead");if(t.hasOwnProperty("onChange"))throw new Error("[react-places-autocomplete]: getInputProps does not accept `onChange`. Use `onChange` prop instead");var r={type:"text",autoComplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":e.getIsExpanded(),"aria-activedescendant":e.getActiveSuggestionId(),disabled:!e.state.ready};return A({},r,t,{onKeyDown:(0,p.compose)(e.handleInputKeyDown,t.onKeyDown),onBlur:(0,p.compose)(e.handleInputOnBlur,t.onBlur),value:e.props.value,onChange:function(i){e.handleInputChange(i)}})},e.getSuggestionItemProps=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.handleSuggestionMouseEnter.bind(e,t.index),i=e.handleSuggestionClick.bind(e,t);return A({},r,{key:t.id,id:e.getActiveSuggestionId(),role:"option",onMouseEnter:(0,p.compose)(s,r.onMouseEnter),onMouseLeave:(0,p.compose)(e.handleSuggestionMouseLeave,r.onMouseLeave),onMouseDown:(0,p.compose)(e.handleSuggestionMouseDown,r.onMouseDown),onMouseUp:(0,p.compose)(e.handleSuggestionMouseUp,r.onMouseUp),onTouchStart:(0,p.compose)(e.handleSuggestionTouchStart,r.onTouchStart),onTouchEnd:(0,p.compose)(e.handleSuggestionMouseUp,r.onTouchEnd),onClick:(0,p.compose)(i,r.onClick)})},e.handleSuggestionMouseEnter=function(t){e.setActiveAtIndex(t)},e.handleSuggestionMouseLeave=function(){e.mousedownOnSuggestion=!1,e.clearActive()},e.handleSuggestionMouseDown=function(t){t.preventDefault(),e.mousedownOnSuggestion=!0},e.handleSuggestionTouchStart=function(){e.mousedownOnSuggestion=!0},e.handleSuggestionMouseUp=function(){e.mousedownOnSuggestion=!1},e.handleSuggestionClick=function(t,r){r&&r.preventDefault&&r.preventDefault();var s=t.description,i=t.placeId;e.handleSelect(s,i,t),setTimeout(function(){e.mousedownOnSuggestion=!1})},e.state={loading:!1,suggestions:[],userInputValue:a.value,ready:!a.googleCallbackName},e.debouncedFetchPredictions=(0,Se.default)(e.fetchPredictions,a.debounce),e}return me(o,[{key:"componentDidMount",value:function(){var e=this.props.googleCallbackName;if(e){var t=window.google&&window.google.maps&&window.google.maps.places;t?this.init():window[e]=this.init}else this.init()}},{key:"componentWillUnmount",value:function(){var e=this.props.googleCallbackName;e&&window[e]&&delete window[e]}},{key:"render",value:function(){return this.props.children({getInputProps:this.getInputProps,getSuggestionItemProps:this.getSuggestionItemProps,loading:this.state.loading,suggestions:this.state.suggestions})}}]),o}(ve.default.Component);N.propTypes={onChange:u.default.func.isRequired,value:u.default.string.isRequired,children:u.default.func.isRequired,onError:u.default.func,onSelect:u.default.func,searchOptions:u.default.shape({bounds:u.default.object,componentRestrictions:u.default.object,location:u.default.object,offset:u.default.oneOfType([u.default.number,u.default.string]),radius:u.default.oneOfType([u.default.number,u.default.string]),types:u.default.array}),debounce:u.default.number,highlightFirstSuggestion:u.default.bool,shouldFetchSuggestions:u.default.bool,googleCallbackName:u.default.string};N.defaultProps={onError:function(o,a){return console.error(`[react-places-autocomplete]: error happened when fetching data from Google Maps API.
Please check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)
Status: `,o)},searchOptions:{},debounce:200,highlightFirstSuggestion:!1,shouldFetchSuggestions:!0};j.default=N;var _={};Object.defineProperty(_,"__esModule",{value:!0});_.geocodeByAddress=function(o){var a=new window.google.maps.Geocoder,e=window.google.maps.GeocoderStatus.OK;return new Promise(function(t,r){a.geocode({address:o},function(s,i){i!==e&&r(i),t(s)})})};_.getLatLng=function(o){return new Promise(function(a,e){try{var t={lat:o.geometry.location.lat(),lng:o.geometry.location.lng()};a(t)}catch(r){e(r)}})};_.geocodeByPlaceId=function(o){var a=new window.google.maps.Geocoder,e=window.google.maps.GeocoderStatus.OK;return new Promise(function(t,r){a.geocode({placeId:o},function(s,i){i!==e&&r(i),t(s)})})};Object.defineProperty(b,"__esModule",{value:!0});var q=b.getLatLng=b.geocodeByPlaceId=$=b.geocodeByAddress=void 0,xe=j,Oe=_e(xe),B=_;function _e(n){return n&&n.__esModule?n:{default:n}}var $=b.geocodeByAddress=B.geocodeByAddress;b.geocodeByPlaceId=B.geocodeByPlaceId;q=b.getLatLng=B.getLatLng;var ke=b.default=Oe.default;const V=({posCallback:n,centerCallback:o,singleMarker:a,singleMarkerCallback:e})=>{const[t,r]=v.useState(""),[s,i]=v.useState({lat:45.3850225,lng:-75.6946679}),[l,y]=v.useState([]),[x,S]=v.useState({lat:45.3850225,lng:-75.6946679}),w=async d=>{const I=await $(d),m=await q(I[0]),g=I[0].place_id;r(d),i({lat:m.lat,lng:m.lng}),y([...l,{name:d,id:g,position:m}]),S(m)};return v.useEffect(()=>{n&&n(l)},[l,n]),v.useEffect(()=>{o&&o(s)},[s,o]),v.useEffect(()=>{a&&e&&e({coordinates:x,address:t})},[x,e,a]),f("div",{className:"not-prose",children:f(ke,{value:t,onChange:r,onSelect:w,children:({getInputProps:d,suggestions:I,getSuggestionItemProps:m})=>F(E,{value:t,onChange:w,children:[F("div",{className:"relative",children:[f(X,{className:"pointer-events-none absolute top-3.5 left-3.5 h-5 w-5 text-cu-black-400","aria-hidden":"true"}),f(E.Input,{className:"h-12 w-full rounded-lg border border-cu-black-200 bg-white pl-10 pr-4 text-cu-black-800 placeholder-cu-black-400 focus:border-cu-black-400 focus:outline-none focus:ring-0 sm:text-sm",...d({placeholder:"Type address"})}),t&&f(H,{className:"absolute top-3.5 right-3.5 h-5 w-5 text-cu-black-400","aria-hidden":"true",onClick:()=>{r("")}})]}),f(E.Options,{className:"mt-3 max-h-80 divide-y divide-cu-black-100 overflow-y-auto bg-white px-1.5 text-sm text-cu-black-800",children:I.map(g=>f(E.Option,{value:g,children:({active:P})=>f("ul",{children:f("li",{...m(g),className:`p-4 text-cu-black-600 hover:cursor-pointer ${P?"bg-cu-black-50 text-cu-black-900":"bg-white"}`,children:g.description})})},g.index))})]})})})};try{V.displayName="LocationPicker",V.__docgenInfo={description:"",displayName:"LocationPicker",props:{posCallback:{defaultValue:null,description:"",name:"posCallback",required:!1,type:{name:"((pos: { name: string; id: string; position: object; }[]) => void)"}},centerCallback:{defaultValue:null,description:"",name:"centerCallback",required:!1,type:{name:"((center: { lat: number; lng: number; }) => void)"}},singleMarker:{defaultValue:null,description:"",name:"singleMarker",required:!1,type:{name:"boolean"}},singleMarkerCallback:{defaultValue:null,description:"",name:"singleMarkerCallback",required:!1,type:{name:"((marker: { coordinates: { lat: number; lng: number; }; address: string; }) => void)"}}}}}catch{}export{V as L};
//# sourceMappingURL=LocationPicker-356110ad.js.map
