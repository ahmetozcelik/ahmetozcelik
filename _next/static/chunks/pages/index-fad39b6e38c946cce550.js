_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(s.AmpStateContext))};var n,i=(n=r("q1tI"))&&n.__esModule?n:{default:n},s=r("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,s=e.hasQuery,o=void 0!==s&&s;return r||i&&o}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,i=r("q1tI");var s=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=o},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),s=(n=r("Xuae"))&&n.__esModule?n:{default:n},o=r("lwAK"),a=r("FYa8"),c=r("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(h,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var s=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var a=0,c=d.length;a<c;a++){var u=d[a];if(i.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?s=!1:r.add(u);else{var l=i.props[u],h=n[u]||new Set;h.has(l)?s=!1:(h.add(l),n[u]=h)}}}return s}}()).reverse().map((function(e,t){var r=e.key||t;return i.default.cloneElement(e,{key:r})}))}function p(e){var t=e.children,r=(0,i.useContext)(o.AmpStateContext),n=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)}p.rewind=function(){};var m=p;t.default=m},"8oxB":function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},MX0m:function(e,t,r){e.exports=r("3niX")},RIqP:function(e,t,r){var n=r("Ijbi"),i=r("EbDI"),s=r("ZhPi"),o=r("Bnag");e.exports=function(e){return n(e)||i(e)||s(e)||o()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r("nKUr"),i=r("MX0m"),s=r.n(i),o=r("8Kt/"),a=r.n(o);r("YFqc");function c(){return Object(n.jsxs)("div",{className:"jsx-1554030129 container",children:[Object(n.jsxs)(a.a,{children:[Object(n.jsx)("title",{className:"jsx-1554030129",children:"Ahmet \xd6z\xe7elik"}),Object(n.jsx)("meta",{charset:"UTF-8",className:"jsx-1554030129"}),Object(n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-1554030129"}),Object(n.jsx)("link",{rel:"stylesheet",href:"https://www.w3schools.com/w3css/4/w3.css",className:"jsx-1554030129"}),Object(n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat",className:"jsx-1554030129"}),Object(n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",className:"jsx-1554030129"})]}),Object(n.jsxs)("div",{className:"jsx-1554030129 w3-padding-large",children:[Object(n.jsxs)("header",{className:"jsx-1554030129 w3-container w3-padding-32 w3-center w3-black",children:[Object(n.jsxs)("h1",{className:"jsx-1554030129 w3-jumbo",children:[Object(n.jsx)("span",{className:"jsx-1554030129 w3-hide-small",children:"Ben"})," Ahmet \xd6z\xe7elik."]}),Object(n.jsx)("p",{className:"jsx-1554030129",children:"Yaz\u0131l\u0131m Geli\u015ftiricisi"})]}),Object(n.jsxs)("div",{className:"jsx-1554030129 w3-content w3-justify w3-text-grey w3-padding-32 w3-center",children:[Object(n.jsx)("h2",{className:"jsx-1554030129 w3-text-light-grey"}),Object(n.jsx)("p",{className:"jsx-1554030129",children:"\u015eu an i\xe7in mobil olarak iOS \xfczerine yaz\u0131l\u0131m geli\u015ftirmekle vakit ge\xe7iriyorum. Ge\xe7irdi\u011fim bu vakitten memmunum. \u0130lerleyen zamanlarda \xf6\u011frendi\u011fim bilgileri yazarak yay\u0131nlayaca\u011f\u0131m. Buralar zamanla blog haline gelecek :)"})]}),Object(n.jsxs)("footer",{className:"jsx-1554030129 w3-content w3-padding-32 w3-text-grey w3-xlarge w3-center",children:[Object(n.jsx)("a",{href:"mailto:ahmetozcelik07@gmail.com",target:"_blank",className:"jsx-1554030129",children:Object(n.jsx)("i",{className:"jsx-1554030129 fa fa-at w3-hover-opacity"})}),Object(n.jsx)("a",{href:"https://github.com/ahmetozcelik",target:"_blank",className:"jsx-1554030129",children:Object(n.jsx)("i",{className:"jsx-1554030129 fa fa-github w3-hover-opacity"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/ahmetozcelik07/",target:"_blank",className:"jsx-1554030129",children:Object(n.jsx)("i",{className:"jsx-1554030129 fa fa-linkedin w3-hover-opacity"})}),Object(n.jsx)("a",{href:"https://twitter.com/halkprogramcisi",target:"_blank",className:"jsx-1554030129",children:Object(n.jsx)("i",{className:"jsx-1554030129 fa fa-twitter w3-hover-opacity"})})]})]}),Object(n.jsx)(s.a,{id:"2093757508",children:['body.jsx-1554030129,h1.jsx-1554030129,h2.jsx-1554030129,h3.jsx-1554030129,h4.jsx-1554030129,h5.jsx-1554030129,h6.jsx-1554030129{font-family:"Montserrat",sans-serif;}',"footer.jsx-1554030129 a.jsx-1554030129{margin:15px;}"]}),Object(n.jsx)(s.a,{id:"2952613980",children:["body{background:black;}"]})]})}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("9kyW")),i=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),s=t+i;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var s=this.computeId(i,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),i=r("lwsE"),s=r("W8MJ"),o=(r("PJYZ"),r("7W2i")),a=r("a1gu"),c=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),h=function(e){o(r,e);var t=u(r);function r(e){var s;return i(this,r),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(n(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=h},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,c=void 0===a?n:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),a&&r(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),i=r("284h");t.__esModule=!0,t.default=void 0;var s,o=i(r("q1tI")),a=r("elyg"),c=r("nOHt"),u=new Map,l=window.IntersectionObserver,h={};var d=function(e,t){var r=s||(l?s=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),u.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function f(e,t,r,n){(0,a.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),h[t+"%"+r]=!0)}var p=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),i=r&&r.pathname||"/",s=o.default.useMemo((function(){var t=(0,a.resolveHref)(i,e.href,!0),r=n(t,2),s=r[0],o=r[1];return{href:s,as:e.as?(0,a.resolveHref)(i,e.as):o||s}}),[i,e.href,e.as]),u=s.href,p=s.as,m=e.children,v=e.replace,y=e.shallow,_=e.scroll,g=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var j=o.Children.only(m),w=j&&"object"===typeof j&&j.ref,b=o.default.useRef(),S={ref:o.default.useCallback((function(e){(b.current&&(b.current(),b.current=void 0),t&&l&&e&&e.tagName&&(0,a.isLocalURL)(u))&&(h[u+"%"+p]||(b.current=d(e,(function(){f(r,u,p,{locale:"undefined"!==typeof g?g:r&&r.locale})}))));w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[t,w,u,p,r,g]),onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[i?"replace":"push"](r,n,{shallow:s,locale:c}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,r,u,p,v,y,_,g)}};return t&&(S.onMouseEnter=function(e){(0,a.isLocalURL)(u)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),f(r,u,p,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(S.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof g?g:r&&r.locale,r&&r.defaultLocale))),o.default.cloneElement(j,S)};t.default=p},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var i=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=i},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,2,1]]]);