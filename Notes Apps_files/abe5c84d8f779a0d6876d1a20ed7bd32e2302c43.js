(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"4Yaq":function(e,t,n){"use strict";var r=n("nKUr"),o=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),u=n("md7G"),c=n("foSv"),f=n("q1tI"),s=n("YFqc"),l=n.n(s),p=n("CsBj"),d=n.n(p),h=n("buME");function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var y=function(e){Object(i.a)(n,e);var t=v(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={host:"/"},r}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.setState({host:Object(h.a)()})}},{key:"render",value:function(){var e=this.state.host;return Object(r.jsx)("div",{className:d.a.announce_bar,children:Object(r.jsxs)("p",{children:["Web Server API:"," ",Object(r.jsx)(l.a,{href:e,target:"__blank",children:e})," ","|"," ",Object(r.jsx)("button",{type:"button",onClick:h.b,children:"Change URL"})]})})}}]),n}(f.Component);t.a=y},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,f=p.length;c<f;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;"name"===s&&i||!d.has(l)?(d.add(l),r[s]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CsBj:function(e,t,n){e.exports={announce_bar:"AnnounceBar_announce_bar__2wUDt"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FSK0:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,u,c,f=r(t),s=r(n);if(f&&s){if((u=t.length)!=n.length)return!1;for(i=u;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(f!=s)return!1;var l=t instanceof Date,p=n instanceof Date;if(l!=p)return!1;if(l&&p)return t.getTime()==n.getTime();var d=t instanceof RegExp,h=n instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==n.toString();var v=o(t);if((u=v.length)!==o(n).length)return!1;for(i=u;0!==i--;)if(!a.call(n,v[i]))return!1;for(i=u;0!==i--;)if(!e(t[c=v[i]],n[c]))return!1;return!0}return t!==t&&n!==n}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(f){return void n(f)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},UiDi:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(n("q1tI")),l=f(n("FSK0")),p=u(n("17x9"));function d(e){return e&&e.replace(/&nbsp;|\u202F|\u00A0/g," ")}var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lastHtml=t.props.html,t.el="function"===typeof t.props.innerRef?{current:null}:s.createRef(),t.getEl=function(){return(t.props.innerRef&&"function"!==typeof t.props.innerRef?t.props.innerRef:t.el).current},t.emitChange=function(e){var n=t.getEl();if(n){var r=n.innerHTML;if(t.props.onChange&&r!==t.lastHtml){var o=Object.assign({},e,{target:{value:r}});t.props.onChange(o)}t.lastHtml=r}},t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.tagName,r=t.html,a=t.innerRef,i=c(t,["tagName","html","innerRef"]);return s.createElement(n||"div",o(o({},i),{ref:"function"===typeof a?function(t){a(t),e.el.current=t}:a||this.el,onInput:this.emitChange,onBlur:this.props.onBlur||this.emitChange,onKeyUp:this.props.onKeyUp||this.emitChange,onKeyDown:this.props.onKeyDown||this.emitChange,contentEditable:!this.props.disabled,dangerouslySetInnerHTML:{__html:r}}),this.props.children)},t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=this.getEl();return!n||(d(e.html)!==d(n.innerHTML)||(t.disabled!==e.disabled||t.tagName!==e.tagName||t.className!==e.className||t.innerRef!==e.innerRef||!l.default(t.style,e.style)))},t.prototype.componentDidUpdate=function(){var e=this.getEl();e&&(this.props.html!==e.innerHTML&&(e.innerHTML=this.props.html),this.lastHtml=this.props.html,function(e){var t=document.createTextNode("");e.appendChild(t);var n=document.activeElement===e;if(null!==t&&null!==t.nodeValue&&n){var r=window.getSelection();if(null!==r){var o=document.createRange();o.setStart(t,t.nodeValue.length),o.collapse(!0),r.removeAllRanges(),r.addRange(o)}e instanceof HTMLElement&&e.focus()}}(e))},t.propTypes={html:p.string.isRequired,onChange:p.func,disabled:p.bool,tagName:p.string,className:p.string,style:p.object,innerRef:p.oneOfType([p.object,p.func])},t}(s.Component);t.default=h},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),l=function(e){i(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},buME:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r=function(){if(window){var e=prompt("Masukkan URL Web Server:");if(!e)return;e.startsWith("http://")||(e="http://".concat(e)),"/"!==e[e.length-1]&&(e+="/"),localStorage.setItem("BASE_URL",e),window.location.reload()}},o=function(){return localStorage.getItem("BASE_URL")||""}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),u=n("nOHt"),c=n("vNVm"),f={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),p=l.href,d=l.as,h=e.children,v=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=a.Children.only(h),_=g&&"object"===typeof g&&g.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),w=r(O,2),j=w[0],M=w[1],S=a.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);(0,a.useEffect)((function(){var e=M&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,M,m,t,n]);var x={ref:S,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,p,d,v,y,b,m)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var C="undefined"!==typeof m?m:n&&n.locale,P=(0,i.getDomainLocale)(d,C,n&&n.locales,n&&n.domainLocales);x.href=P||(0,i.addBasePath)((0,i.addLocale)(d,C,n&&n.defaultLocale))}return a.default.cloneElement(g,x)};t.default=l},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var o=n("JX7q");function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,o=(0,a.useRef)(),f=(0,a.useState)(!1),s=r(f,2),l=s[0],p=s[1],d=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||l||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,a.useEffect)((function(){u||l||(0,i.default)((function(){return p(!0)}))}),[l]),[d,l]};var a=n("q1tI"),i=o(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var c=new Map},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}}]);