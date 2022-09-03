/*! For license information please see 536.d710e0ed.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{24805:function(e,t,r){var n;n=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return u(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,a=t[r];if(!a)return!1;switch(r){case"orientation":case"scan":return a.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=f(o),a=f(a);break;case"resolution":o=c(o),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=s(o),a=s(a);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,a=parseInt(a,10)||0}switch(n){case"min":return a>=o;case"max":return a<=o;default:return a===o}}));return o&&!r||!o&&r}))},t.parse=u;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function u(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),a=t[1],i=t[2],u=t[3]||"",s={};return s.inverse=!!a&&"not"===a.toLowerCase(),s.type=i?i.toLowerCase():"all",u=u.match(/\([^\)]+\)/g)||[],s.expressions=u.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),s}))}function s(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function f(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=/[A-Z]/g,o=/^ms-/,a={};function i(e){return"-"+e.toLowerCase()}var u=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(n,i);return a[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,r){"use strict";var n=r("./node_modules/css-mediaquery/index.js").match,o="undefined"!==typeof window?window.matchMedia:null;function a(e,t,r){var a=this;if(o&&!r){var i=o.call(window,e);this.matches=i.matches,this.media=i.media,i.addListener(u)}else this.matches=n(e,t),this.media=e;function u(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(u)}}e.exports=function(e,t,r){return new a(e,t,r)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,u,s=o(e),c=1;c<arguments.length;c++){for(var f in i=Object(arguments[c]))r.call(i,f)&&(s[f]=i[f]);if(t){u=t(i);for(var l=0;l<u.length;l++)n.call(i,u[l])&&(s[u[l]]=i[u[l]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,r){"use strict";var n=function(){},o=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},i=r("./node_modules/prop-types/lib/has.js");function u(e,t,r,u,s){for(var c in e)if(i(e,c)){var f;try{if("function"!==typeof e[c]){var l=Error((u||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}f=e[c](t,c,u,r,null,o)}catch(p){f=p}if(!f||f instanceof Error||n((u||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in a)){a[f.message]=!0;var d=s?s():"";n("Failed "+r+" type: "+f.message+(null!=d?d:""))}}}n=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},u.resetWarningCache=function(){a={}},e.exports=u},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,r){"use strict";var n=r("./node_modules/react-is/index.js"),o=r("./node_modules/object-assign/index.js"),a=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i=r("./node_modules/prop-types/lib/has.js"),u=r("./node_modules/prop-types/checkPropTypes.js"),s=function(){};function c(){return null}s=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){var r="function"===typeof Symbol&&Symbol.iterator,f="<<anonymous>>",l={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(c),arrayOf:function(e){return y((function(t,r,n,o,i){if("function"!==typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=t[r];if(!Array.isArray(u))return new p("Invalid "+o+" `"+i+"` of type `"+b(u)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<u.length;s++){var c=e(u,s,n,o,i+"["+s+"]",a);if(c instanceof Error)return c}return null}))},element:y((function(t,r,n,o,a){var i=t[r];return e(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+b(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:y((function(e,t,r,o,a){var i=e[t];return n.isValidElementType(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+b(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||f;return new p("Invalid "+o+" `"+a+"` of type `"+((u=t[r]).constructor&&u.constructor.name?u.constructor.name:f)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var u;return null}))},node:y((function(e,t,r,n,o){return h(e[t])?null:new p("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,r,n,o,u){if("function"!==typeof e)return new p("Property `"+u+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var s=t[r],c=b(s);if("object"!==c)return new p("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var f in s)if(i(s,f)){var l=e(s,f,n,o,u+"."+f,a);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c;function t(t,r,n,o,a){for(var i=t[r],u=0;u<e.length;u++)if(d(i,e[u]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new p("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+s+".")}return y(t)},oneOfType:function(e){if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!==typeof r)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return y((function(t,r,n,o,u){for(var s=[],c=0;c<e.length;c++){var f=(0,e[c])(t,r,n,o,u,a);if(null==f)return null;f.data&&i(f.data,"expectedType")&&s.push(f.data.expectedType)}return new p("Invalid "+o+" `"+u+"` supplied to `"+n+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,r,n,o,i){var u=t[r],s=b(u);if("object"!==s)return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var f=e[c];if("function"!==typeof f)return v(n,o,i,c,g(f));var l=f(u,c,n,o,i+"."+c,a);if(l)return l}return null}))},exact:function(e){return y((function(t,r,n,u,s){var c=t[r],f=b(c);if("object"!==f)return new p("Invalid "+u+" `"+s+"` of type `"+f+"` supplied to `"+n+"`, expected `object`.");var l=o({},t[r],e);for(var d in l){var y=e[d];if(i(e,d)&&"function"!==typeof y)return v(n,u,s,d,g(y));if(!y)return new p("Invalid "+u+" `"+s+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(c,d,n,u,s+"."+d,a);if(m)return m}return null}))}};function d(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function p(e,t){this.message=e,this.data=t&&"object"===typeof t?t:{},this.stack=""}function y(e){var r={},n=0;function o(o,i,u,c,l,d,y){if(c=c||f,d=d||u,y!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!==typeof console){var v=c+":"+u;!r[v]&&n<3&&(s("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[v]=!0,n++)}}return null==i[u]?o?null===i[u]?new p("The "+l+" `"+d+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+l+" `"+d+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(i,u,c,l,d)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return y((function(t,r,n,o,a,i){var u=t[r];return b(u)!==e?new p("Invalid "+o+" `"+a+"` of type `"+g(u)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,r,n,o){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!h(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if("undefined"===typeof e||null===e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,l.checkPropTypes=u,l.resetWarningCache=u.resetWarningCache,l.PropTypes=l,l}},"./node_modules/prop-types/index.js":function(e,t,r){var n=r("./node_modules/react-is/index.js");e.exports=r("./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"===typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case f:case o:case i:case a:case d:return p;default:var v=p&&p.$$typeof;switch(v){case s:case l:case m:case y:case u:return v;default:return t}}case n:return t}}}var j=c,O=f,w=s,_=u,S=r,P=l,C=o,E=m,T=y,k=n,R=i,I=a,M=d,$=!1;function A(e){return x(e)===f}t.AsyncMode=j,t.ConcurrentMode=O,t.ContextConsumer=w,t.ContextProvider=_,t.Element=S,t.ForwardRef=P,t.Fragment=C,t.Lazy=E,t.Memo=T,t.Portal=k,t.Profiler=R,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return $||($=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===s},t.isContextProvider=function(e){return x(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===l},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===y},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===i||e===a||e===d||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===u||e.$$typeof===s||e.$$typeof===l||e.$$typeof===h||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v)},t.typeOf=x}()},"./node_modules/react-is/index.js":function(e,t,r){"use strict";e.exports=r("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var a=0;a<o;a++){var i=r[a];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:function(){return o},shallowEqualObjects:function(){return n}})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,i=n(e,["children","device","onChange"]),u=(0,a.default)(i,r,o);return"function"===typeof t?t(u):u?t:null}},"./src/Context.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r("react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r("./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var a=n(r("./src/Component.ts"));t.default=a.default;var i=n(r("./src/toQuery.ts"));t.toQuery=i.default;var u=n(r("./src/Context.ts"));t.Context=u.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(r("./node_modules/prop-types/index.js")),u=i.default.oneOfType([i.default.string,i.default.number]),s={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},c={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:u,type:Object.keys(s)},f=o(c,["type"]),l=n({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:u,maxResolution:u},f),d=n(n({},s),l);t.default={all:d,types:s,matchers:c,features:l}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("./node_modules/hyphenate-style-name/index.js")),a=n(r("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r("react"),a=n(r("./node_modules/matchmediaquery/index.js")),i=n(r("./node_modules/hyphenate-style-name/index.js")),u=r("./node_modules/shallow-equal/dist/index.esm.js"),s=n(r("./src/toQuery.ts")),c=n(r("./src/Context.ts")),f=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,i.default)(r)]=e[r],t}),{})},l=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,s.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],a=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&a(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return f(e)||f(t)},n=(0,o.useState)(r),a=n[0],i=n[1];return(0,o.useEffect)((function(){var e=r();(0,u.shallowEqualObjects)(a,e)||i(e)}),[e,t]),a}(t),i=d(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var s=function(e,t){var r=function(){return(0,a.default)(e,t||{},!!t)},n=(0,o.useState)(r),i=n[0],u=n[1],s=l();return(0,o.useEffect)((function(){if(s){var e=r();return u(e),function(){e&&e.dispose()}}}),[e,t]),i}(i,n),p=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(s),y=l();return(0,o.useEffect)((function(){y&&r&&r(p)}),[p]),(0,o.useEffect)((function(){return function(){s&&s.dispose()}}),[]),p}},react:function(t){"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")}()},e.exports=n(r(72791))},29388:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(61120),o=r(78814),a=r(82963);function i(e){var t=(0,o.Z)();return function(){var r,o=(0,n.Z)(e);if(t){var i=(0,n.Z)(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return(0,a.Z)(this,r)}}},78814:function(e,t,r){"use strict";function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=536.d710e0ed.chunk.js.map