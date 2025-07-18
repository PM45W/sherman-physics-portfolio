/*! For license information please see main.de010146.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function _(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+T(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),_(i,t,o,"",function(e){return e})):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+T(l=e[c],c);s+=_(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=_(l=l.value,t,o,u=a+T(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",function(e){return t.call(n,e,o++)}),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},O={transition:null},I={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)S.call(t,c)&&!E.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,x(e),!m)if(null!==r(c))m=!0,O(S);else{var t=r(u);null!==t&&I(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(C),C=-1),h=!0;var a=p;try{for(x(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!_());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&o(c),x(n)}else o(c);f=r(c)}if(null!==f)var s=!0;else{var d=r(u);null!==d&&I(w,d.startTime-n),s=!1}return s}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,j=null,C=-1,P=5,T=-1;function _(){return!(t.unstable_now()-T<P)}function z(){if(null!==j){var e=t.unstable_now();T=e;var n=!0;try{n=j(!0,e)}finally{n?k():(E=!1,j=null)}}else E=!1}if("function"===typeof b)k=function(){b(z)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,N=R.port2;R.port1.onmessage=z,k=function(){N.postMessage(null)}}else k=function(){v(z,0)};function O(e){j=e,E||(E=!0,k())}function I(e,n){C=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,O(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(y(C),C=-1):g=!0,I(w,a-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,O(S))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var L,D=Object.assign;function F(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var A=!1;function $(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function U(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case j:return"Profiler";case E:return"StrictMode";case _:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function B(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=B(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=B(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ae(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function je(e){if(e=xo(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function Pe(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Te(e,t){return e(t)}function _e(){}var ze=!1;function Re(e,t,n){if(ze)return e(t,n);ze=!0;try{return Te(e,t,n)}finally{ze=!1,(null!==ke||null!==Ee)&&(_e(),Pe())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=So(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Oe=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){Oe=!1}function Me(e,t,n,r,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Le=!1,De=null,Fe=!1,Ae=null,$e={onError:function(e){Le=!0,De=e}};function Ue(e,t,n,r,o,a,i,l,s){Le=!1,De=null,Me.apply($e,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(He(e)!==e)throw Error(a(188))}function Be(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ve(o),e;if(i===r)return Ve(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var qe=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,Ye=o.unstable_requestPaint,Xe=o.unstable_now,Ze=o.unstable_getCurrentPriorityLevel,Je=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~o;0!==l?r=dt(l):0!==(a&=i)&&(r=dt(a))}else 0!==(i=n&~o)?r=dt(i):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-it(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,jt,Ct=!1,Pt=[],Tt=null,_t=null,zt=null,Rt=new Map,Nt=new Map,Ot=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Lt(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Dt(e){var t=bo(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void jt(e.priority,function(){kt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function At(e,t,n){Ft(e)&&n.delete(t)}function $t(){Ct=!1,null!==Tt&&Ft(Tt)&&(Tt=null),null!==_t&&Ft(_t)&&(_t=null),null!==zt&&Ft(zt)&&(zt=null),Rt.forEach(At),Nt.forEach(At)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$t)))}function Ht(e){function t(t){return Ut(t,e)}if(0<Pt.length){Ut(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==_t&&Ut(_t,e),null!==zt&&Ut(zt,e),Rt.forEach(t),Nt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Dt(n),null===n.blockedOn&&Ot.shift()}var Wt=x.ReactCurrentBatchConfig,Vt=!0;function Bt(e,t,n,r){var o=bt,a=Wt.transition;Wt.transition=null;try{bt=1,qt(e,t,n,r)}finally{bt=o,Wt.transition=a}}function Gt(e,t,n,r){var o=bt,a=Wt.transition;Wt.transition=null;try{bt=4,qt(e,t,n,r)}finally{bt=o,Wt.transition=a}}function qt(e,t,n,r){if(Vt){var o=Qt(e,t,n,r);if(null===o)Vr(e,t,r,Kt,n),Mt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Tt=Lt(Tt,e,t,n,r,o),!0;case"dragenter":return _t=Lt(_t,e,t,n,r,o),!0;case"mouseover":return zt=Lt(zt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Rt.set(a,Lt(Rt.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Nt.set(a,Lt(Nt.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&wt(a),null===(a=Qt(e,t,n,r))&&Vr(e,t,r,Kt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Vr(e,t,r,null,n)}}var Kt=null;function Qt(e,t,n,r){if(Kt=null,null!==(e=bo(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,o="value"in Xt?Xt.value:Xt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return Jt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=D({},cn,{view:0,detail:0}),fn=on(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(D({},pn,{dataTransfer:0})),gn=on(D({},dn,{relatedTarget:0})),vn=on(D({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),xn=on(D({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function jn(){return En}var Cn=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=on(Cn),Tn=on(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_n=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),zn=on(D({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(Rn),On=[9,13,27,32],In=u&&"CompositionEvent"in window,Mn=null;u&&"documentMode"in document&&(Mn=document.documentMode);var Ln=u&&"TextEvent"in window&&!Mn,Dn=u&&(!In||Mn&&8<Mn&&11>=Mn),Fn=String.fromCharCode(32),An=!1;function $n(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Bn(e,t,n,r){Ce(r),0<(t=Gr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,qn=null;function Kn(e){Fr(e,0)}function Qn(e){if(q(wo(e)))return e}function Yn(e,t){if("change"===e)return t}var Xn=!1;if(u){var Zn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),qn=Gn=null)}function nr(e){if("value"===e.propertyName&&Qn(qn)){var t=[];Bn(t,qn,e,we(e)),Re(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(qn)}function ar(e,t){if("click"===e)return Qn(t)}function ir(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=ur(n,a);var i=ur(n,r);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==K(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Gr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function jr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}u&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=jr("animationend"),Pr=jr("animationiteration"),Tr=jr("animationstart"),_r=jr("transitionend"),zr=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){zr.set(e,t),s(t,[e])}for(var Or=0;Or<Rr.length;Or++){var Ir=Rr[Or];Nr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}Nr(Cr,"onAnimationEnd"),Nr(Pr,"onAnimationIteration"),Nr(Tr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(_r,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,l,s,c){if(Ue.apply(this,arguments),Le){if(!Le)throw Error(a(198));var u=De;Le=!1,De=null,Fe||(Fe=!0,Ae=u)}}(r,t,void 0,e),e.currentTarget=null}function Fr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Dr(o,l,c),a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Dr(o,l,c),a=s}}}if(Fe)throw e=Ae,Fe=!1,Ae=null,e}function Ar(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ur]){e[Ur]=!0,i.forEach(function(t){"selectionchange"!==t&&(Lr.has(t)||$r(t,!1,e),$r(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,$r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Yt(t)){case 1:var o=Bt;break;case 4:o=Gt;break;default:o=qt}n=o.bind(null,t,n,e),o=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vr(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=bo(l)))return;if(5===(s=i.tag)||6===s){r=a=i;continue e}l=l.parentNode}}r=r.return}Re(function(){var r=a,o=we(n),i=[];e:{var l=zr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Pn;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=_n;break;case Cr:case Pr:case Tr:s=vn;break;case _r:s=zn;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Tn}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ne(h,f))&&u.push(Br(h,m,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,o),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!bo(c)&&!c[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?bo(c):null)&&(c!==(d=He(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Tn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==c?l:wo(c),(l=new u(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,bo(o)===r&&((u=new u(f,h+"enter",c,n,o)).target=p,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(f=c,h=0,p=u=s;p;p=qr(p))h++;for(p=0,m=f;m;m=qr(m))p++;for(;0<h-p;)u=qr(u),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=qr(u),f=qr(f)}u=null}else u=null;null!==s&&Kr(i,l,s,u,!1),null!==c&&null!==d&&Kr(i,d,c,u,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Yn;else if(Vn(l))if(Xn)g=ir;else{g=or;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?Bn(i,g,n,o):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wo(r):window,e){case"focusin":(Vn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(i,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,o)}var y;if(In)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hn?$n(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Dn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Hn&&(y=en()):(Zt="value"in(Xt=o)?Xt.value:Xt.textContent,Hn=!0)),0<(v=Gr(r,b)).length&&(b=new xn(b,e,null,n,o),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Un(n))&&(b.data=y))),(y=Ln?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(An=!0,Fn);case"textInput":return(e=t.data)===Fn&&An?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!In&&$n(e,t)?(e=en(),Jt=Zt=Xt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=y))}Fr(i,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ne(e,n))&&r.unshift(Br(e,a,o)),null!=(a=Ne(e,t))&&r.push(Br(e,a,o))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=Ne(n,a))&&i.unshift(Br(n,s,l)):o||null!=(s=Ne(n,a))&&i.push(Br(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Qr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Yr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(a(425))}function Jr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout(function(){throw e})}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ht(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,vo="__reactListeners$"+fo,yo="__reactHandles$"+fo;function bo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[po])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function So(e){return e[ho]||null}var ko=[],Eo=-1;function jo(e){return{current:e}}function Co(e){0>Eo||(e.current=ko[Eo],ko[Eo]=null,Eo--)}function Po(e,t){Eo++,ko[Eo]=e.current,e.current=t}var To={},_o=jo(To),zo=jo(!1),Ro=To;function No(e,t){var n=e.type.contextTypes;if(!n)return To;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Oo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Io(){Co(zo),Co(_o)}function Mo(e,t,n){if(_o.current!==To)throw Error(a(168));Po(_o,t),Po(zo,n)}function Lo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,W(e)||"Unknown",o));return D({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||To,Ro=_o.current,Po(_o,e),Po(zo,zo.current),!0}function Fo(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Lo(e,t,Ro),r.__reactInternalMemoizedMergedChildContext=e,Co(zo),Co(_o),Po(_o,e)):Co(zo),Po(zo,n)}var Ao=null,$o=!1,Uo=!1;function Ho(e){null===Ao?Ao=[e]:Ao.push(e)}function Wo(){if(!Uo&&null!==Ao){Uo=!0;var e=0,t=bt;try{var n=Ao;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ao=null,$o=!1}catch(o){throw null!==Ao&&(Ao=Ao.slice(e+1)),qe(Je,Wo),o}finally{bt=t,Uo=!1}}return null}var Vo=[],Bo=0,Go=null,qo=0,Ko=[],Qo=0,Yo=null,Xo=1,Zo="";function Jo(e,t){Vo[Bo++]=qo,Vo[Bo++]=Go,Go=e,qo=t}function ea(e,t,n){Ko[Qo++]=Xo,Ko[Qo++]=Zo,Ko[Qo++]=Yo,Yo=e;var r=Xo;e=Zo;var o=32-it(r)-1;r&=~(1<<o),n+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Xo=1<<32-it(t)+o|n<<o|r,Zo=a+e}else Xo=1<<a|n<<o|r,Zo=e}function ta(e){null!==e.return&&(Jo(e,1),ea(e,1,0))}function na(e){for(;e===Go;)Go=Vo[--Bo],Vo[Bo]=null,qo=Vo[--Bo],Vo[Bo]=null;for(;e===Yo;)Yo=Ko[--Qo],Ko[Qo]=null,Zo=Ko[--Qo],Ko[Qo]=null,Xo=Ko[--Qo],Ko[Qo]=null}var ra=null,oa=null,aa=!1,ia=null;function la(e,t){var n=Rc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yo?{id:Xo,overflow:Zo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Rc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function ca(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(aa){var t=oa;if(t){var n=t;if(!sa(e,t)){if(ca(e))throw Error(a(418));t=co(n.nextSibling);var r=ra;t&&sa(e,t)?la(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ca(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function fa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(ca(e))throw pa(),Error(a(418));for(;t;)la(e,t),t=co(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?co(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=oa;e;)e=co(e.nextSibling)}function ha(){oa=ra=null,aa=!1}function ma(e){null===ia?ia=[e]:ia.push(e)}var ga=x.ReactCurrentBatchConfig;function va(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Oc(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Dc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&ba(a)===t.type)?((r=o(t,n.props)).ref=va(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=va(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Fc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Mc(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Dc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=va(e,null,t),n.return=e,n;case S:return(t=Fc(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mc(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case S:return n.key===o?u(e,t,n,r):null;case N:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||M(n))return null!==o?null:d(e,t,n,r,null);ya(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||M(r))return d(t,e=e.get(n)||null,r,o,null);ya(t,r)}return null}function m(o,a,l,s){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return n(o,d),aa&&Jo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===u?c=d:u.sibling=d,u=d);return aa&&Jo(o,m),c}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(o,e)}),aa&&Jo(o,m),c}function g(o,l,s,c){var u=M(s);if("function"!==typeof u)throw Error(a(150));if(null==(s=u.call(s)))throw Error(a(151));for(var d=u=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,c);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,m=v}if(y.done)return n(o,m),aa&&Jo(o,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(o,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return aa&&Jo(o,g),u}for(m=r(o,m);!y.done;g++,y=s.next())null!==(y=h(m,o,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(o,e)}),aa&&Jo(o,g),u}return function e(r,a,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=a;null!==u;){if(u.key===c){if((c=i.type)===k){if(7===u.tag){n(r,u.sibling),(a=o(u,i.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&ba(c)===u.type){n(r,u.sibling),(a=o(u,i.props)).ref=va(r,u,i),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}i.type===k?((a=Mc(i.props.children,r.mode,s,i.key)).return=r,r=a):((s=Ic(i.type,i.key,i.props,null,r.mode,s)).ref=va(r,a,i),s.return=r,r=s)}return l(r);case S:e:{for(u=i.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){n(r,a.sibling),(a=o(a,i.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Fc(i,r.mode,s)).return=r,r=a}return l(r);case N:return e(r,a,(u=i._init)(i._payload),s)}if(te(i))return m(r,a,i,s);if(M(i))return g(r,a,i,s);ya(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(n(r,a.sibling),(a=o(a,i)).return=r,r=a):(n(r,a),(a=Dc(i,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var wa=xa(!0),Sa=xa(!1),ka=jo(null),Ea=null,ja=null,Ca=null;function Pa(){Ca=ja=Ea=null}function Ta(e){var t=ka.current;Co(ka),e._currentValue=t}function _a(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function za(e,t){Ea=e,Ca=ja=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ra(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===ja){if(null===Ea)throw Error(a(308));ja=e,Ea.dependencies={lanes:0,firstContext:e}}else ja=ja.next=e;return t}var Na=null;function Oa(e){null===Na?Na=[e]:Na.push(e)}function Ia(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ma(e,r)}function Ma(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var La=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Aa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $a(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ts)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ma(e,n)}return null===(o=r.interleaved)?(t.next=t,Oa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ma(e,n)}function Ua(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,r){var o=e.updateQueue;La=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:La=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,i|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Ls|=i,e.lanes=i,e.memoizedState=d}}function Va(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(a(191,o));o.call(r)}}}var Ba={},Ga=jo(Ba),qa=jo(Ba),Ka=jo(Ba);function Qa(e){if(e===Ba)throw Error(a(174));return e}function Ya(e,t){switch(Po(Ka,t),Po(qa,e),Po(Ga,Ba),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(Ga),Po(Ga,t)}function Xa(){Co(Ga),Co(qa),Co(Ka)}function Za(e){Qa(Ka.current);var t=Qa(Ga.current),n=se(t,e.type);t!==n&&(Po(qa,e),Po(Ga,n))}function Ja(e){qa.current===e&&(Co(Ga),Co(qa))}var ei=jo(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var oi=x.ReactCurrentDispatcher,ai=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,fi=0,pi=0;function hi(){throw Error(a(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Ji:el,e=n(r,o),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(a(301));i+=1,ci=si=null,t.updateQueue=null,oi.current=tl,e=n(r,o)}while(di)}if(oi.current=Zi,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(a(300));return e}function vi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=si,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,li.lanes|=d,Ls|=d}u=u.next}while(null!==u&&u!==i);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{i=o.lane,li.lanes|=i,Ls|=i,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=bi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Ei(e,t){var n=li,r=bi(),o=t(),i=!lr(r.memoizedState,o);if(i&&(r.memoizedState=o,bl=!0),r=r.queue,Li(Pi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(n.flags|=2048,Ri(9,Ci.bind(null,n,r,o,t),void 0,null),null===_s)throw Error(a(349));0!==(30&ii)||ji(n,t,o)}return o}function ji(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ci(e,t,n,r){t.value=n,t.getSnapshot=r,Ti(t)&&_i(e)}function Pi(e,t,n){return n(function(){Ti(t)&&_i(e)})}function Ti(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function _i(e){var t=Ma(e,1);null!==t&&nc(t,e,1,-1)}function zi(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ki.bind(null,li,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ni(){return bi().memoizedState}function Oi(e,t,n,r){var o=yi();li.flags|=e,o.memoizedState=Ri(1|t,n,void 0,void 0===r?null:r)}function Ii(e,t,n,r){var o=bi();r=void 0===r?null:r;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==r&&mi(r,i.deps))return void(o.memoizedState=Ri(t,n,a,r))}li.flags|=e,o.memoizedState=Ri(1|t,n,a,r)}function Mi(e,t){return Oi(8390656,8,e,t)}function Li(e,t){return Ii(2048,8,e,t)}function Di(e,t){return Ii(4,2,e,t)}function Fi(e,t){return Ii(4,4,e,t)}function Ai(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $i(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ii(4,4,Ai.bind(null,t,e),n)}function Ui(){}function Hi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Ls|=n,e.baseState=!0),t)}function Bi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{bt=n,ai.transition=r}}function Gi(){return bi().memoizedState}function qi(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e))Yi(t,n);else if(null!==(n=Ia(e,t,n,r))){nc(n,e,r,ec()),Xi(n,t,r)}}function Ki(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Yi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(o.next=o,Oa(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Ia(e,t,o,r))&&(nc(n,e,r,o=ec()),Xi(n,t,r))}}function Qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Yi(e,t){di=ui=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Zi={readContext:Ra,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Ji={readContext:Ra,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Ra,useEffect:Mi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oi(4194308,4,Ai.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:zi,useDebugValue:Ui,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=zi(!1),t=e[0];return e=Bi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,o=yi();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===_s)throw Error(a(349));0!==(30&ii)||ji(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Mi(Pi.bind(null,r,i,e),[e]),r.flags|=2048,Ri(9,Ci.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=_s.identifierPrefix;if(aa){var n=Zo;t=":"+t+"R"+(n=(Xo&~(1<<32-it(Xo)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ra,useCallback:Hi,useContext:Ra,useEffect:Li,useImperativeHandle:$i,useInsertionEffect:Di,useLayoutEffect:Fi,useMemo:Wi,useReducer:wi,useRef:Ni,useState:function(){return wi(xi)},useDebugValue:Ui,useDeferredValue:function(e){return Vi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Gi,unstable_isNewReconciler:!1},tl={readContext:Ra,useCallback:Hi,useContext:Ra,useEffect:Li,useImperativeHandle:$i,useInsertionEffect:Di,useLayoutEffect:Fi,useMemo:Wi,useReducer:Si,useRef:Ni,useState:function(){return Si(xi)},useDebugValue:Ui,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Vi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Gi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=Aa(r,o);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=$a(e,a,o))&&(nc(t,e,o,r),Ua(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=Aa(r,o);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=$a(e,a,o))&&(nc(t,e,o,r),Ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=Aa(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=$a(e,o,r))&&(nc(t,e,r,n),Ua(t,e,r))}};function al(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,a))}function il(e,t,n){var r=!1,o=To,a=t.contextType;return"object"===typeof a&&null!==a?a=Ra(a):(o=Oo(t)?Ro:_o.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?No(e,o):To),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Da(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=Ra(a):(a=Oo(t)?Ro:_o.current,o.context=No(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Wa(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var o=n}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Aa(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,Bs=r),dl(0,t)},n}function hl(e,t,n){(n=Aa(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jc.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Aa(-1,1)).tag=2,$a(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var yl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?Sa(t,null,n,r):wa(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var a=t.ref;return za(t,o),r=gi(e,t,n,r,a,o),n=vi(),null===e||bl?(aa&&n&&ta(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vl(e,t,o))}function Sl(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||Nc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,kl(e,t,a,r,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Vl(e,t,o)}return t.flags|=1,(e=Oc(a,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=a,0===(e.lanes&o))return t.lanes=e.lanes,Vl(e,t,o);0!==(131072&e.flags)&&(bl=!0)}}return Cl(e,t,n,r,o)}function El(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Po(Os,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Po(Os,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Po(Os,Ns),Ns|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Po(Os,Ns),Ns|=r;return xl(e,t,o,n),t.child}function jl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,o){var a=Oo(n)?Ro:_o.current;return a=No(t,a),za(t,o),n=gi(e,t,n,r,a,o),r=vi(),null===e||bl?(aa&&r&&ta(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vl(e,t,o))}function Pl(e,t,n,r,o){if(Oo(n)){var a=!0;Do(t)}else a=!1;if(za(t,o),null===t.stateNode)Wl(e,t),il(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ra(c):c=No(t,c=Oo(n)?Ro:_o.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,i,r,c),La=!1;var f=t.memoizedState;i.state=f,Wa(t,r,i,o),s=t.memoizedState,l!==r||f!==s||zo.current||La?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=La||al(t,n,l,r,f,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fa(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),i.props=c,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ra(s):s=No(t,s=Oo(n)?Ro:_o.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),La=!1,f=t.memoizedState,i.state=f,Wa(t,r,i,o);var h=t.memoizedState;l!==d||f!==h||zo.current||La?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=La||al(t,n,c,r,f,h,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,a,o)}function Tl(e,t,n,r,o,a){jl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return o&&Fo(t,n,!1),Vl(e,t,a);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):xl(e,t,l,a),t.memoizedState=r.state,o&&Fo(t,n,!0),t.child}function _l(e){var t=e.stateNode;t.pendingContext?Mo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Mo(0,t.context,!1),Ya(e,t.containerInfo)}function zl(e,t,n,r,o){return ha(),ma(o),t.flags|=256,xl(e,t,n,r),t.child}var Rl,Nl,Ol,Il,Ml={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dl(e,t,n){var r,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Po(ei,1&i),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Lc(s,o,0,null),e=Mc(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ll(n),t.memoizedState=Ml,e):Fl(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,l){if(n)return 256&t.flags?(t.flags&=-257,Al(e,t,l,r=ul(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Lc({mode:"visible",children:r.children},o,0,null),(i=Mc(i,o,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Ll(l),t.memoizedState=Ml,i);if(0===(1&t.mode))return Al(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Al(e,t,l,r=ul(i=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=_s)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,Ma(e,o),nc(r,e,o,-1))}return mc(),Al(e,t,l,r=ul(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=co(o.nextSibling),ra=t,aa=!0,ia=null,null!==e&&(Ko[Qo++]=Xo,Ko[Qo++]=Zo,Ko[Qo++]=Yo,Xo=e.id,Zo=e.overflow,Yo=t),t=Fl(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,i,n);if(l){l=o.fallback,s=t.mode,r=(i=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Oc(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Oc(r,l):(l=Mc(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,o}return e=(l=e.child).sibling,o=Oc(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Fl(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Al(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Fl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_a(e.return,t,n)}function Ul(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Hl(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Po(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ul(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ul(t,!0,n,null,a);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ls|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Oc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Oc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Bl(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return Oo(t.type)&&Io(),Gl(t),null;case 3:return r=t.stateNode,Xa(),Co(zo),Co(_o),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(ic(ia),ia=null))),Nl(e,t),Gl(t),null;case 5:Ja(t);var o=Qa(Ka.current);if(n=t.type,null!==e&&null!=t.stateNode)Ol(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Gl(t),null}if(e=Qa(Ga.current),fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[po]=t,r[ho]=i,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(o=0;o<Mr.length;o++)Ar(Mr[o],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":Y(r,i),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ar("invalid",r);break;case"textarea":oe(r,i),Ar("invalid",r)}for(var s in ye(n,i),o=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":G(r),J(r,i,!0);break;case"textarea":G(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Jr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Rl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),o=r;break;case"iframe":case"object":case"embed":Ar("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mr.length;o++)Ar(Mr[o],e);o=r;break;case"source":Ar("error",e),o=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),o=r;break;case"details":Ar("toggle",e),o=r;break;case"input":Y(e,r),o=Q(e,r),Ar("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=D({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Ar("invalid",e)}for(i in ye(n,o),c=o)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&Ar("scroll",e):null!=u&&b(e,i,u,s))}switch(n){case"input":G(e),J(e,r,!1);break;case"textarea":G(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)Il(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Qa(Ka.current),Qa(Ga.current),fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(i=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Gl(t),null;case 13:if(Co(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ha(),t.flags|=98560,i=!1;else if(i=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[po]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),i=!1}else null!==ia&&(ic(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Is&&(Is=3):mc())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return Xa(),Nl(e,t),null===e&&Hr(t.stateNode.containerInfo),Gl(t),null;case 10:return Ta(t.type._context),Gl(t),null;case 19:if(Co(ei),null===(i=t.memoizedState))return Gl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Bl(i,!1);else{if(0!==Is||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Bl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Po(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Xe()>Hs&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Bl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return Gl(t),null}else 2*Xe()-i.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=ei.current,Po(ei,r?1&n|2:1&n),t):(Gl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Kl(e,t){switch(na(t),t.tag){case 1:return Oo(t.type)&&Io(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),Co(zo),Co(_o),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Co(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(ei),null;case 4:return Xa(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Ol=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qa(Ga.current);var a,i=null;switch(n){case"input":o=Q(e,o),r=Q(e,r),i=[];break;case"select":o=D({},o,{value:void 0}),r=D({},r,{value:void 0}),i=[];break;case"textarea":o=re(e,o),r=re(e,r),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in ye(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Ar("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},Il=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Yl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ec(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Ec(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,n,a)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Yl||Jl(n,t);case 6:var r=us,o=ds;us=null,fs(e,t,n),ds=o,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Ht(e)):so(us,n.stateNode));break;case 4:r=us,o=ds,us=n.stateNode.containerInfo,ds=!0,fs(e,t,n),us=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Yl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(n,t,i),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Yl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ec(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Yl=(r=Yl)||null!==n.memoizedState,fs(e,t,n),Yl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach(function(t){var r=Tc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(a(160));ps(i,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){Ec(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Ec(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Ec(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Ec(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&X(o,i),be(s,l);var u=be(s,i);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):b(o,d,f,u)}switch(s){case"input":Z(o,i);break;case"textarea":ae(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(o,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(o,!!i.multiple,i.defaultValue,!0):ne(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(g){Ec(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){Ec(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Ec(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(Us=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Yl=(u=Yl)||d,ms(t,e),Yl=u):ms(t,e),vs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Ec(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Zl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,u?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){Ec(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Ec(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){Ec(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Zl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var o=Zl,a=o.child;if(22===o.tag&&r){var i=null!==o.memoizedState||Ql;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Yl;l=Ql;var c=Yl;if(Ql=i,(Yl=s)&&!c)for(Zl=o;null!==Zl;)s=(i=Zl).child,22===i.tag&&null!==i.memoizedState?Ss(o):null!==s?(s.return=i,Zl=s):Ss(o);for(;null!==a;)Zl=a,bs(a,t,n),a=a.sibling;Zl=o,Ql=l,Yl=c}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Zl=a):xs(e)}}function xs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Yl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Va(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Va(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(a(163))}Yl||512&t.flags&&os(t)}catch(p){Ec(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ss(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Ec(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){Ec(t,o,s)}}var a=t.return;try{os(t)}catch(s){Ec(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){Ec(t,i,s)}}}catch(s){Ec(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var ks,Es=Math.ceil,js=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,Ps=x.ReactCurrentBatchConfig,Ts=0,_s=null,zs=null,Rs=0,Ns=0,Os=jo(0),Is=0,Ms=null,Ls=0,Ds=0,Fs=0,As=null,$s=null,Us=0,Hs=1/0,Ws=null,Vs=!1,Bs=null,Gs=null,qs=!1,Ks=null,Qs=0,Ys=0,Xs=null,Zs=-1,Js=0;function ec(){return 0!==(6&Ts)?Xe():-1!==Zs?Zs:Zs=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ts)&&0!==Rs?Rs&-Rs:null!==ga.transition?(0===Js&&(Js=mt()),Js):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function nc(e,t,n,r){if(50<Ys)throw Ys=0,Xs=null,Error(a(185));vt(e,n,r),0!==(2&Ts)&&e===_s||(e===_s&&(0===(2&Ts)&&(Ds|=n),4===Is&&lc(e,Rs)),rc(e,r),1===n&&0===Ts&&0===(1&t.mode)&&(Hs=Xe()+500,$o&&Wo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=ft(e,e===_s?Rs:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){$o=!0,Ho(e)}(sc.bind(null,e)):Ho(sc.bind(null,e)),io(function(){0===(6&Ts)&&Wo()}),n=null;else{switch(xt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=_c(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Zs=-1,Js=0,0!==(6&Ts))throw Error(a(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=ft(e,e===_s?Rs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=Ts;Ts|=2;var i=hc();for(_s===e&&Rs===t||(Ws=null,Hs=Xe()+500,fc(e,t));;)try{yc();break}catch(s){pc(e,s)}Pa(),js.current=i,Ts=o,null!==zs?t=0:(_s=null,Rs=0,t=Is)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t)throw n=Ms,fc(e,0),lc(e,r),rc(e,Xe()),n;if(6===t)lc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!lr(a(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t))throw n=Ms,fc(e,0),lc(e,r),rc(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,$s,Ws);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Us+500-Xe())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,$s,Ws),t);break}wc(e,$s,Ws);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>o&&(o=l),r&=~i}if(r=o,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,$s,Ws),r);break}wc(e,$s,Ws);break;default:throw Error(a(329))}}}return rc(e,Xe()),e.callbackNode===n?oc.bind(null,e):null}function ac(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=$s,$s=n,null!==t&&ic(t)),e}function ic(e){null===$s?$s=e:$s.push.apply($s,e)}function lc(e,t){for(t&=~Fs,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Ts))throw Error(a(327));Sc();var t=ft(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Ms,fc(e,0),lc(e,t),rc(e,Xe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,$s,Ws),rc(e,Xe()),null}function cc(e,t){var n=Ts;Ts|=1;try{return e(t)}finally{0===(Ts=n)&&(Hs=Xe()+500,$o&&Wo())}}function uc(e){null!==Ks&&0===Ks.tag&&0===(6&Ts)&&Sc();var t=Ts;Ts|=1;var n=Ps.transition,r=bt;try{if(Ps.transition=null,bt=1,e)return e()}finally{bt=r,Ps.transition=n,0===(6&(Ts=t))&&Wo()}}function dc(){Ns=Os.current,Co(Os)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Io();break;case 3:Xa(),Co(zo),Co(_o),ri();break;case 5:Ja(r);break;case 4:Xa();break;case 13:case 19:Co(ei);break;case 10:Ta(r.type._context);break;case 22:case 23:dc()}n=n.return}if(_s=e,zs=e=Oc(e.current,null),Rs=Ns=t,Is=0,Ms=null,Fs=Ds=Ls=0,$s=As=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var i=a.next;a.next=o,r.next=i}n.pending=r}Na=null}return e}function pc(e,t){for(;;){var n=zs;try{if(Pa(),oi.current=Zi,ui){for(var r=li.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,fi=0,Cs.current=null,null===n||null===n.return){Is=1,Ms=t,zs=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=Rs,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(i,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(i,u,t),mc();break e}c=Error(a(426))}else if(aa&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ma(cl(c,s));break e}}i=c=cl(c,s),4!==Is&&(Is=2),null===As?As=[i]:As.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ha(i,pl(0,c,t));break e;case 1:s=c;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Gs||!Gs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Ha(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xc(n)}catch(x){t=x,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function hc(){var e=js.current;return js.current=Zi,null===e?Zi:e}function mc(){0!==Is&&3!==Is&&2!==Is||(Is=4),null===_s||0===(268435455&Ls)&&0===(268435455&Ds)||lc(_s,Rs)}function gc(e,t){var n=Ts;Ts|=2;var r=hc();for(_s===e&&Rs===t||(Ws=null,fc(e,t));;)try{vc();break}catch(o){pc(e,o)}if(Pa(),Ts=n,js.current=r,null!==zs)throw Error(a(261));return _s=null,Rs=0,Is}function vc(){for(;null!==zs;)bc(zs)}function yc(){for(;null!==zs&&!Qe();)bc(zs)}function bc(e){var t=ks(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xc(e):zs=t,Cs.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=ql(n,t,Ns)))return void(zs=n)}else{if(null!==(n=Kl(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Is=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Is&&(Is=5)}function wc(e,t,n){var r=bt,o=Ps.transition;try{Ps.transition=null,bt=1,function(e,t,n,r){do{Sc()}while(null!==Ks);if(0!==(6&Ts))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,i),e===_s&&(zs=_s=null,Rs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||qs||(qs=!0,_c(tt,function(){return Sc(),null})),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ps.transition,Ps.transition=null;var l=bt;bt=1;var s=Ts;Ts|=4,Cs.current=null,function(e,t){if(eo=Vt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==i||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=l),p===i&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Vt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){Ec(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),Vt=!!eo,to=eo=null,e.current=n,ys(n,e,o),Ye(),Ts=s,bt=l,Ps.transition=i}else e.current=n;if(qs&&(qs=!1,Ks=e,Qs=o),i=e.pendingLanes,0===i&&(Gs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Vs)throw Vs=!1,e=Bs,Bs=null,e;0!==(1&Qs)&&0!==e.tag&&Sc(),i=e.pendingLanes,0!==(1&i)?e===Xs?Ys++:(Ys=0,Xs=e):Ys=0,Wo()}(e,t,n,r)}finally{Ps.transition=o,bt=r}return null}function Sc(){if(null!==Ks){var e=xt(Qs),t=Ps.transition,n=bt;try{if(Ps.transition=null,bt=16>e?16:e,null===Ks)var r=!1;else{if(e=Ks,Ks=null,Qs=0,0!==(6&Ts))throw Error(a(331));var o=Ts;for(Ts|=4,Zl=e.current;null!==Zl;){var i=Zl,l=i.child;if(0!==(16&Zl.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Zl=u;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(as(d),d===u){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(i=Zl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Zl=y;break e}Zl=i.return}}var b=e.current;for(Zl=b;null!==Zl;){var x=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Zl=x;else e:for(l=b;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Ec(s,s.return,S)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Ts=o,Wo(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(S){}r=!0}return r}finally{bt=n,Ps.transition=t}}return!1}function kc(e,t,n){e=$a(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function Ec(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gs||!Gs.has(r))){t=$a(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function jc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,_s===e&&(Rs&n)===n&&(4===Is||3===Is&&(130023424&Rs)===Rs&&500>Xe()-Us?fc(e,0):Fs|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ma(e,t))&&(vt(e,t,n),rc(e,n))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Cc(e,n)}function _c(e,t){return qe(e,t)}function zc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rc(e,t,n,r){return new zc(e,t,n,r)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Oc(e,t){var n=e.alternate;return null===n?((n=Rc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,o,i){var l=2;if(r=e,"function"===typeof e)Nc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Mc(n.children,o,i,t);case E:l=8,o|=8;break;case j:return(e=Rc(12,n,t,2|o)).elementType=j,e.lanes=i,e;case _:return(e=Rc(13,n,t,o)).elementType=_,e.lanes=i,e;case z:return(e=Rc(19,n,t,o)).elementType=z,e.lanes=i,e;case O:return Lc(n,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case P:l=9;break e;case T:l=11;break e;case R:l=14;break e;case N:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Rc(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Mc(e,t,n,r){return(e=Rc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Rc(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Dc(e,t,n){return(e=Rc(6,e,null,t)).lanes=n,e}function Fc(e,t,n){return(t=Rc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ac(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function $c(e,t,n,r,o,a,i,l,s){return e=new Ac(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Rc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(a),e}function Uc(e){if(!e)return To;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Oo(n))return Lo(e,n,t)}return t}function Hc(e,t,n,r,o,a,i,l,s){return(e=$c(n,r,!0,e,0,a,0,l,s)).context=Uc(null),n=e.current,(a=Aa(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,$a(n,a,o),e.current.lanes=o,vt(e,o,r),rc(e,r),e}function Wc(e,t,n,r){var o=t.current,a=ec(),i=tc(o);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Aa(a,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$a(o,t,i))&&(nc(e,o,i,a),Ua(e,o,i)),i}function Vc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Bc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){Bc(e,t),(e=e.alternate)&&Bc(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||zo.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:_l(t),ha();break;case 5:Za(t);break;case 1:Oo(t.type)&&Do(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Po(ka,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Po(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Dl(e,t,n):(Po(ei,1&ei.current),null!==(e=Vl(e,t,n))?e.sibling:null);Po(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Po(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Vl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,aa&&0!==(1048576&t.flags)&&ea(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=No(t,_o.current);za(t,n),o=gi(null,t,r,e,o,n);var i=vi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oo(r)?(i=!0,Do(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Da(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Tl(null,t,r,!0,i,n)):(t.tag=0,aa&&i&&ta(t),xl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Nc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===R)return 14}return 2}(r),e=nl(r,e),o){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Cl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Pl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(_l(t),null===e)throw Error(a(387));r=t.pendingProps,o=(i=t.memoizedState).element,Fa(e,t),Wa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=zl(e,t,r,n,o=cl(Error(a(423)),t));break e}if(r!==o){t=zl(e,t,r,n,o=cl(Error(a(424)),t));break e}for(oa=co(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,ia=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===o){t=Vl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Za(t),null===e&&ua(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==i&&no(r,i)&&(t.flags|=32),jl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ua(t),null;case 13:return Dl(e,t,n);case 4:return Ya(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Po(ka,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===o.children&&!zo.current){t=Vl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===i.tag){(c=Aa(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,null!==(c=i.alternate)&&(c.lanes|=n),_a(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),_a(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,za(t,n),r=r(o=Ra(o)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),Sl(e,t,r,o=nl(r.type,o),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Wl(e,t),t.tag=1,Oo(r)?(e=!0,Do(t)):e=!1,za(t,n),il(t,r,o),sl(t,r,o,n),Tl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return El(e,t,n)}throw Error(a(156,t.tag))};var qc="function"===typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=Vc(i);l.call(e)}}Wc(t,i,e,o)}else i=function(e,t,n,r,o){if(o){if("function"===typeof r){var a=r;r=function(){var e=Vc(i);a.call(e)}}var i=Hc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=i,e[mo]=i.current,Hr(8===e.nodeType?e.parentNode:e),uc(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Vc(s);l.call(e)}}var s=$c(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=s,e[mo]=s.current,Hr(8===e.nodeType?e.parentNode:e),uc(function(){Wc(t,s,n,r)}),s}(n,t,e,o,r);return Vc(i)}Qc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Wc(e,t,null,null)},Qc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Wc(null,e,null,null)}),t[mo]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Xe()),0===(6&Ts)&&(Hs=Xe()+500,Wo()))}break;case 13:uc(function(){var t=Ma(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Gc(e,1)}},St=function(e){if(13===e.tag){var t=Ma(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},kt=function(e){if(13===e.tag){var t=tc(e),n=Ma(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},Et=function(){return bt},jt=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(a(90));q(r),Z(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=cc,_e=uc;var eu={usingClientEntryPoint:!1,Events:[xo,wo,So,Ce,Pe,cc]},tu={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Be(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(a(299));var n=!1,r="",o=qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=$c(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Kc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Be(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(a(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",l=qc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hc(t,null,e,1,null!=n?n:null,o,0,i,l),e[mo]=t.current,Hr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(a(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc(function(){Jc(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),o=n(391),a=n(950),i=n.t(a,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:i=!1}=o,u=a.history,h=e.Pop,m=null,g=v();function v(){return(u.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:h,location:x.location,delta:n})}function b(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,u.replaceState(l({},u.state,{idx:g}),""));let x={get action(){return h},get location(){return t(a,u)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(s,y),m=e,()=>{a.removeEventListener(s,y),m=null}},createHref:e=>n(a,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let o=f(x.location,t,n);r&&r(o,t),g=v()+1;let l=d(o,g),s=x.createHref(o);try{u.pushState(l,"",s)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(s)}i&&m&&m({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let o=f(x.location,t,n);r&&r(o,t),g=v();let a=d(o,g),l=x.createHref(o);u.replaceState(a,"",l),i&&m&&m({action:h,location:x.location,delta:0})},go:e=>u.go(e)};return x}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let o=N(("string"===typeof t?h(t):t).pathname||"/",n);if(null==o)return null;let a=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=R(o);i=_(a[l],e,r)}return i}function b(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=D([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),b(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:T(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))o(e,t,r);else o(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=x(r.join("/")),l=[];return l.push(...i.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const w=/^:[\w-]+$/,S=3,k=2,E=1,j=10,C=-2,P=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(P)&&(r+=C),t&&(r+=k),n.filter(e=>!P(e)).reduce((e,t)=>e+(w.test(t)?S:""===t?E:j),r)}function _(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),i.push({params:o,pathname:D([a,u.pathname]),pathnameBase:F(D([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=D([a,u.pathnameBase]))}return i}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function R(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function I(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function M(e,t){let n=I(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function L(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=h(e):(o=l({},e),c(!o.pathname||!o.pathname.includes("?"),O("?","pathname","search",o)),c(!o.pathname||!o.pathname.includes("#"),O("#","pathname","hash",o)),c(!o.search||!o.search.includes("#"),O("#","search","hash",o)));let a,i=""===e||""===o.pathname,s=i?"/":o.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?h(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:A(r),hash:$(o)}}(o,a),d=s&&"/"!==s&&s.endsWith("/"),f=(i||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const D=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",$=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function U(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],W=(new Set(H),["get",...H]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const B=t.createContext(null);const G=t.createContext(null);const q=t.createContext(null);const K=t.createContext(null);const Q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=t.createContext(null);function X(){return null!=t.useContext(K)}function Z(){return X()||c(!1),t.useContext(K).location}function J(e){t.useContext(q).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(Q);return e?function(){let{router:e}=ue(se.UseNavigateStable),n=fe(ce.UseNavigateStable),r=t.useRef(!1);return J(()=>{r.current=!0}),t.useCallback(function(t,o){void 0===o&&(o={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,V({fromRouteId:n},o)))},[e,n])}():function(){X()||c(!1);let e=t.useContext(B),{basename:n,future:r,navigator:o}=t.useContext(q),{matches:a}=t.useContext(Q),{pathname:i}=Z(),l=JSON.stringify(M(a,r.v7_relativeSplatPath)),s=t.useRef(!1);return J(()=>{s.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void o.go(t);let a=L(t,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:D([n,a.pathname])),(r.replace?o.replace:o.push)(a,r.state,r)},[n,o,l,i,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:o}=t.useContext(q),{matches:a}=t.useContext(Q),{pathname:i}=Z(),l=JSON.stringify(M(a,o.v7_relativeSplatPath));return t.useMemo(()=>L(e,JSON.parse(l),i,"path"===r),[e,l,i,r])}function ne(n,r,o,a){X()||c(!1);let{navigator:i}=t.useContext(q),{matches:l}=t.useContext(Q),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=Z();if(r){var m;let e="string"===typeof r?h(r):r;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||c(!1),f=e}else f=p;let g=f.pathname||"/",y=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=v(n,{pathname:y});let x=le(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:D([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:D([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,o,a);return r&&x?t.createElement(K.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},x):x}function re(){let e=function(){var e;let n=t.useContext(Y),r=de(ce.UseRouteError),o=fe(ce.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[o]}(),n=U(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,null)}const oe=t.createElement(re,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Q.Provider,{value:this.props.routeContext},t.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:o}=e,a=t.useContext(B);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Q.Provider,{value:n},o)}function le(e,n,r,o){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(a=r)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,o,a)=>{let i,c=!1,f=null,p=null;var h;r&&(i=s&&o.route.id?s[o.route.id]:void 0,f=o.route.errorElement||oe,u&&(d<0&&0===a?(h="route-fallback",!1||pe[h]||(pe[h]=!0),c=!0,p=null):d===a&&(c=!0,p=o.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,a+1)),g=()=>{let n;return n=i?f:c?p:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(ie,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let n=t.useContext(B);return n||c(!1),n}function de(e){let n=t.useContext(G);return n||c(!1),n}function fe(e){let n=function(){let e=t.useContext(Q);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const pe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){c(!1)}function ge(n){let{basename:r="/",children:o=null,location:a,navigationType:i=e.Pop,navigator:l,static:s=!1,future:u}=n;X()&&c(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo(()=>({basename:d,navigator:l,static:s,future:V({v7_relativeSplatPath:!1},u)}),[d,u,l,s]);"string"===typeof a&&(a=h(a));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=a,b=t.useMemo(()=>{let e=N(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:i}},[d,p,m,g,v,y,i]);return null==b?null:t.createElement(q.Provider,{value:f},t.createElement(K.Provider,{children:o,value:b}))}function ve(e){let{children:t,location:n}=e;return ne(ye(t),n)}new Promise(()=>{});t.Component;function ye(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,o)=>{if(!t.isValidElement(e))return;let a=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,ye(e.props.children,a));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ye(e.props.children,a)),r.push(i)}),r}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Bs){}new Map;const Se=r.startTransition;i.flushSync,r.useId;function ke(e){let{basename:n,children:r,future:o,window:a}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),m(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return f("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:p(t)},null,l)));let s=i.current,[c,u]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},h=t.useCallback(e=>{d&&Se?Se(()=>u(e)):u(e)},[u,d]);return t.useLayoutEffect(()=>s.listen(h),[s,h]),t.useEffect(()=>he(o),[o]),t.createElement(ge,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:s,future:o})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=t.forwardRef(function(e,n){let r,{onClick:o,relative:a,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:f,viewTransition:h}=e,m=xe(e,we),{basename:g}=t.useContext(q),v=!1;if("string"===typeof d&&je.test(d)&&(r=d,Ee))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=N(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(Bs){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;X()||c(!1);let{basename:o,navigator:a}=t.useContext(q),{hash:i,pathname:l,search:s}=te(e,{relative:r}),u=l;return"/"!==o&&(u="/"===l?o:D([o,l])),a.createHref({pathname:u,search:s,hash:i})}(d,{relative:a}),b=function(e,n){let{target:r,replace:o,state:a,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,c=ee(),u=Z(),d=te(e,{relative:l});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==o?o:p(u)===p(d);c(e,{replace:n,state:a,preventScrollReset:i,relative:l,viewTransition:s})}},[u,c,d,o,a,r,e,i,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:f,relative:a,viewTransition:h});return t.createElement("a",be({},m,{href:r||y,onClick:v||i?o:function(e){o&&o(e),e.defaultPrevented||b(e)},ref:n,target:u}))});var Pe,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));var _e=function(){return _e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_e.apply(this,arguments)};Object.create;function ze(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Re=n(324),Ne=n.n(Re),Oe="-ms-",Ie="-moz-",Me="-webkit-",Le="comm",De="rule",Fe="decl",Ae="@keyframes",$e=Math.abs,Ue=String.fromCharCode,He=Object.assign;function We(e){return e.trim()}function Ve(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function Ge(e,t,n){return e.indexOf(t,n)}function qe(e,t){return 0|e.charCodeAt(t)}function Ke(e,t,n){return e.slice(t,n)}function Qe(e){return e.length}function Ye(e){return e.length}function Xe(e,t){return t.push(e),e}function Ze(e,t){return e.filter(function(e){return!Ve(e,t)})}var Je=1,et=1,tt=0,nt=0,rt=0,ot="";function at(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Je,column:et,length:i,return:"",siblings:l}}function it(e,t){return He(at("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lt(e){for(;e.root;)e=it(e.root,{children:[e]});Xe(e,e.siblings)}function st(){return rt=nt>0?qe(ot,--nt):0,et--,10===rt&&(et=1,Je--),rt}function ct(){return rt=nt<tt?qe(ot,nt++):0,et++,10===rt&&(et=1,Je++),rt}function ut(){return qe(ot,nt)}function dt(){return nt}function ft(e,t){return Ke(ot,e,t)}function pt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ht(e){return Je=et=1,tt=Qe(ot=e),nt=0,[]}function mt(e){return ot="",e}function gt(e){return We(ft(nt-1,bt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ut())&&rt<33;)ct();return pt(e)>2||pt(rt)>3?"":" "}function yt(e,t){for(;--t&&ct()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return ft(e,dt()+(t<6&&32==ut()&&32==ct()))}function bt(e){for(;ct();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&bt(rt);break;case 40:41===e&&bt(e);break;case 92:ct()}return nt}function xt(e,t){for(;ct()&&e+rt!==57&&(e+rt!==84||47!==ut()););return"/*"+ft(t,nt-1)+"*"+Ue(47===e?e:ct())}function wt(e){for(;!pt(ut());)ct();return ft(e,nt)}function St(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function kt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Fe:return e.return=e.return||e.value;case Le:return"";case Ae:return e.return=e.value+"{"+St(e.children,r)+"}";case De:if(!Qe(e.value=e.props.join(",")))return""}return Qe(n=St(e.children,r))?e.return=e.value+"{"+n+"}":""}function Et(e,t,n){switch(function(e,t){return 45^qe(e,0)?(((t<<2^qe(e,0))<<2^qe(e,1))<<2^qe(e,2))<<2^qe(e,3):0}(e,t)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 4789:return Ie+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+Ie+e+Oe+e+e;case 5936:switch(qe(e,t+11)){case 114:return Me+e+Oe+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Oe+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Oe+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Me+e+Oe+e+e;case 6165:return Me+e+Oe+"flex-"+e+e;case 5187:return Me+e+Be(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Oe+"flex-$1$2")+e;case 5443:return Me+e+Oe+"flex-item-"+Be(e,/flex-|-self/g,"")+(Ve(e,/flex-|baseline/)?"":Oe+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return Me+e+Oe+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return Me+e+Oe+Be(e,"shrink","negative")+e;case 5292:return Me+e+Oe+Be(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+Be(e,"-grow","")+Me+e+Oe+Be(e,"grow","positive")+e;case 4554:return Me+Be(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4200:if(!Ve(e,/flex-|baseline/))return Oe+"grid-column-align"+Ke(e,t)+e;break;case 2592:case 3360:return Oe+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ve(e.props,/grid-\w+-end/)})?~Ge(e+(n=n[t].value),"span",0)?e:Oe+Be(e,"-start","")+e+Oe+"grid-row-span:"+(~Ge(n,"span",0)?Ve(n,/\d+/):+Ve(n,/\d+/)-+Ve(e,/\d+/))+";":Oe+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ve(e.props,/grid-\w+-start/)})?e:Oe+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qe(e)-1-t>6)switch(qe(e,t+1)){case 109:if(45!==qe(e,t+4))break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Ie+(108==qe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ge(e,"stretch",0)?Et(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,a,i,l){return Oe+n+":"+r+l+(o?Oe+n+"-span:"+(a?i:+i-+r)+l:"")+e});case 4949:if(121===qe(e,t+6))return Be(e,":",":"+Me)+e;break;case 6444:switch(qe(e,45===qe(e,14)?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(45===qe(e,14)?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Oe+"$2box$3")+e;case 100:return Be(e,":",":"+Oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function jt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fe:return void(e.return=Et(e.value,e.length,n));case Ae:return St([it(e,{value:Be(e.value,"@","@"+Me)})],r);case De:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ve(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(it(e,{props:[Be(t,/:(read-\w+)/,":-moz-$1")]})),lt(it(e,{props:[t]})),He(e,{props:Ze(n,r)});break;case"::placeholder":lt(it(e,{props:[Be(t,/:(plac\w+)/,":"+Me+"input-$1")]})),lt(it(e,{props:[Be(t,/:(plac\w+)/,":-moz-$1")]})),lt(it(e,{props:[Be(t,/:(plac\w+)/,Oe+"input-$1")]})),lt(it(e,{props:[t]})),He(e,{props:Ze(n,r)})}return""})}}function Ct(e){return mt(Pt("",null,null,null,[""],e=ht(e),0,[0],e))}function Pt(e,t,n,r,o,a,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=a,S=r,k=b;g;)switch(h=y,y=ct()){case 40:if(108!=h&&58==qe(k,d-1)){-1!=Ge(k+=Be(gt(y),"&","&\f"),"&\f",$e(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=gt(y);break;case 9:case 10:case 13:case 32:k+=vt(h);break;case 92:k+=yt(dt()-1,7);continue;case 47:switch(ut()){case 42:case 47:Xe(_t(xt(ct(),dt()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[c++]=Qe(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=Be(k,/\f/g,"")),p>0&&Qe(k)-d&&Xe(p>32?zt(k+";",r,n,d-1,s):zt(Be(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Xe(S=Tt(k,t,n,c,u,o,l,b,x=[],w=[],d,a),a),123===y)if(0===u)Pt(k,t,S,S,x,a,d,l,w);else switch(99===f&&110===qe(k,3)?100:f){case 100:case 108:case 109:case 115:Pt(e,S,S,r&&Xe(Tt(e,S,S,0,0,o,l,b,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:Pt(k,S,S,S,[""],w,0,l,w)}}c=u=p=0,m=v=1,b=k="",d=i;break;case 58:d=1+Qe(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==st())continue;switch(k+=Ue(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(Qe(k)-1)*v,v=1;break;case 64:45===ut()&&(k+=gt(ct())),f=ut(),u=d=Qe(b=k+=wt(dt())),y++;break;case 45:45===h&&2==Qe(k)&&(m=0)}}return a}function Tt(e,t,n,r,o,a,i,l,s,c,u,d){for(var f=o-1,p=0===o?a:[""],h=Ye(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Ke(e,f+1,f=$e(g=i[m])),x=e;y<h;++y)(x=We(g>0?p[y]+" "+b:Be(b,/&\f/g,p[y])))&&(s[v++]=x);return at(e,t,n,0===o?De:l,s,c,u,d)}function _t(e,t,n,r){return at(e,t,n,Le,Ue(rt),Ke(e,2,-2),0,r)}function zt(e,t,n,r,o){return at(e,t,n,Fe,Ke(e,0,r),Ke(e,r+1,-1),r,o)}var Rt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Ot="active",It="data-styled-version",Mt="6.1.19",Lt="/*!sc*/\n",Dt="undefined"!=typeof window&&"undefined"!=typeof document,Ft=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),At=(new Set,Object.freeze([])),$t=Object.freeze({});function Ut(e,t,n){return void 0===n&&(n=$t),e.theme!==n.theme&&e.theme||t||n.theme}var Ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vt=/(^-|-$)/g;function Bt(e){return e.replace(Wt,"-").replace(Vt,"")}var Gt=/(a)(d)/gi,qt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=qt(t%52)+n;return(qt(t%52)+n).replace(Gt,"$1-$2")}var Qt,Yt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Xt=function(e){return Yt(5381,e)};function Zt(e){return Kt(Xt(e)>>>0)}function Jt(e){return e.displayName||e.name||"Component"}function en(e){return"string"==typeof e&&!0}var tn="function"==typeof Symbol&&Symbol.for,nn=tn?Symbol.for("react.memo"):60115,rn=tn?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},an={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((Qt={})[rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qt[nn]=ln,Qt);function cn(e){return("type"in(t=e)&&t.type.$$typeof)===nn?ln:"$$typeof"in e?sn[e.$$typeof]:on;var t}var un=Object.defineProperty,dn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,pn=Object.getOwnPropertyDescriptor,hn=Object.getPrototypeOf,mn=Object.prototype;function gn(e,t,n){if("string"!=typeof t){if(mn){var r=hn(t);r&&r!==mn&&gn(e,r,n)}var o=dn(t);fn&&(o=o.concat(fn(t)));for(var a=cn(e),i=cn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in an||n&&n[s]||i&&s in i||a&&s in a)){var c=pn(t,s);try{un(e,s,c)}catch(e){}}}}return e}function vn(e){return"function"==typeof e}function yn(e){return"object"==typeof e&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sn(e,t,n){if(void 0===n&&(n=!1),!n&&!wn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sn(e[r],t[r]);else if(wn(t))for(var r in t)e[r]=Sn(e[r],t[r]);return e}function kn(e,t){Object.defineProperty(e,"toString",{value:t})}function En(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var jn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw En(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(Lt);return t},e}(),Cn=new Map,Pn=new Map,Tn=1,_n=function(e){if(Cn.has(e))return Cn.get(e);for(;Pn.has(Tn);)Tn++;var t=Tn++;return Cn.set(e,t),Pn.set(t,e),t},zn=function(e,t){Tn=t+1,Cn.set(e,t),Pn.set(t,e)},Rn="style[".concat(Nt,"][").concat(It,'="').concat(Mt,'"]'),Nn=new RegExp("^".concat(Nt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),On=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},In=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Lt),o=[],a=0,i=r.length;a<i;a++){var l=r[a].trim();if(l){var s=l.match(Nn);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(zn(u,c),On(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Mn=function(e){for(var t=document.querySelectorAll(Rn),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Nt)!==Ot&&(In(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Ln(){return n.nc}var Dn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Nt,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(Nt,Ot),r.setAttribute(It,Mt);var i=Ln();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},Fn=function(){function e(e){this.element=Dn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw En(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),An=function(){function e(e){this.element=Dn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),$n=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Un=Dt,Hn={isServer:!Dt,useCSSOMInjection:!Ft},Wn=function(){function e(e,t,n){void 0===e&&(e=$t),void 0===t&&(t={});var r=this;this.options=_e(_e({},Hn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Dt&&Un&&(Un=!1,Mn(this)),kn(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Pn.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(Nt,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Lt)},a=0;a<n;a++)o(a);return r}(r)})}return e.registerId=function(e){return _n(e)},e.prototype.rehydrate=function(){!this.server&&Dt&&Mn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(_e(_e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new $n(n):t?new Fn(n):new An(n)}(this.options),new jn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(_n(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(_n(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(_n(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Vn=/&/g,Bn=/^\s*\/\/.*$/gm;function Gn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Gn(e.children,t)),e})}function qn(e){var t,n,r,o=void 0===e?$t:e,a=o.options,i=void 0===a?$t:a,l=o.plugins,s=void 0===l?At:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===De&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Vn,n).replace(r,c))}),i.prefix&&u.push(jt),u.push(kt);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Bn,""),c=Ct(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(c=Gn(c,i.namespace));var d,f=[];return St(c,function(e){var t=Ye(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce(function(e,t){return t.name||En(15),Yt(e,t.name)},5381).toString():"",d}var Kn=new Wn,Qn=qn(),Yn=t.createContext({shouldForwardProp:void 0,styleSheet:Kn,stylis:Qn}),Xn=(Yn.Consumer,t.createContext(void 0));function Zn(){return(0,t.useContext)(Yn)}function Jn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],a=Zn().styleSheet,i=(0,t.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,t.useMemo)(function(){return qn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){Ne()(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}},[e.shouldForwardProp,i,l]);return t.createElement(Yn.Provider,{value:s},t.createElement(Xn.Provider,{value:l},e.children))}var er=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Qn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,kn(this,function(){throw En(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Qn),this.name+e.hash},e}(),tr=function(e){return e>="A"&&e<="Z"};function nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;tr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return null==e||!1===e||""===e},or=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!rr(a)&&(Array.isArray(a)&&a.isCss||vn(a)?r.push("".concat(nr(o),":"),a,";"):wn(a)?r.push.apply(r,ze(ze(["".concat(o," {")],or(a),!1),["}"],!1)):r.push("".concat(nr(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Rt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ar(e,t,n,r){return rr(e)?[]:yn(e)?[".".concat(e.styledComponentId)]:vn(e)?!vn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:ar(e(t),t,n,r):e instanceof er?n?(e.inject(n,r),[e.getName(r)]):[e]:wn(e)?or(e):Array.isArray(e)?Array.prototype.concat.apply(At,e.map(function(e){return ar(e,t,n,r)})):[e.toString()];var o}function ir(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vn(n)&&!yn(n))return!1}return!0}var lr=Xt(Mt),sr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ir(e),this.componentId=t,this.baseHash=Yt(lr,t),this.baseStyle=n,Wn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=bn(r,this.staticRulesId);else{var o=xn(ar(this.rules,e,t,n)),a=Kt(Yt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=bn(r,a),this.staticRulesId=a}else{for(var l=Yt(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=xn(ar(u,e,t,n));l=Yt(l,d+c),s+=d}}if(s){var f=Kt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=bn(r,f)}}return r},e}(),cr=t.createContext(void 0);cr.Consumer;var ur={};new Set;function dr(e,n,r){var o=yn(e),a=e,i=!en(e),l=n.attrs,s=void 0===l?At:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Bt(e);ur[n]=(ur[n]||0)+1;var r="".concat(n,"-").concat(Zt(Mt+n+ur[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return en(e)?"styled.".concat(e):"Styled(".concat(Jt(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Bt(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new sr(r,p,o?a.componentStyle:void 0);function b(e,n){return function(e,n,r){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(cr),d=Zn(),f=e.shouldForwardProp||d.shouldForwardProp,p=Ut(n,u,i)||$t,h=function(e,t,n){for(var r,o=_e(_e({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=vn(r=e[a])?r(o):r;for(var l in i)o[l]="className"===l?bn(o[l],i[l]):"style"===l?_e(_e({},o[l]),i[l]):i[l]}return t.className&&(o.className=bn(o.className,t.className)),o}(o,n,p),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Zn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),b=bn(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[en(m)&&!Ht.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=f;var x=t.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?bn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=p,x.target=o?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Sn(e,o[r],!0);return e}({},a.defaultProps,e):e}}),kn(x,function(){return".".concat(x.styledComponentId)}),i&&gn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function fr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var pr=function(e){return Object.assign(e,{isCss:!0})};function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vn(e)||wn(e))return pr(ar(fr(At,ze([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ar(r):pr(ar(fr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=$t),!t)throw En(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,hr.apply(void 0,ze([r],o,!1)))};return r.attrs=function(r){return mr(e,t,_e(_e({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,_e(_e({},n),r))},r}var gr=function(e){return mr(dr,e)},vr=gr;Ht.forEach(function(e){vr[e]=gr(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ir(e),Wn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(xn(ar(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Wn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=xn(hr.apply(void 0,ze([e],t,!1))),o=Zt(r);return new er(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Ln(),r=xn([n&&'nonce="'.concat(n,'"'),"".concat(Nt,'="true"'),"".concat(It,'="').concat(Mt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw En(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw En(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Nt]="",n[It]=Mt,n.dangerouslySetInnerHTML={__html:r},n),a=Ln();return a&&(o.nonce=a),[t.createElement("style",_e({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Wn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw En(2);return t.createElement(Jn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw En(3)}})(),"__sc-".concat(Nt,"__");var br=n(579);const xr=vr.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  background-color: ${e=>e.scrolled?"rgba(10, 10, 10, 0.9)":"transparent"};
  backdrop-filter: ${e=>e.scrolled?"blur(10px)":"none"};
  border-bottom: ${e=>e.scrolled?"1px solid rgba(255, 255, 255, 0.1)":"none"};
`,wr=vr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Sr=vr(Ce)`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  
  &:hover {
    color: var(--color-accent-gold);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`,kr=vr.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.95);
    width: 75%;
    max-width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${e=>e.isOpen?"translateX(0)":"translateX(100%)"};
    transition: transform 0.3s ease;
    z-index: 1;
    padding: 2rem;
    gap: 2rem;
  }
`,Er=vr(Ce)`
  font-family: var(--font-mono);
  color: ${e=>e.active?"var(--color-accent-gold)":"var(--color-text)"};
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-accent-gold);
    transform: scaleX(${e=>e.active?"1":"0"});
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  &:hover {
    color: var(--color-accent-gold);
  }
`,jr=vr.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  
  @media (max-width: 768px) {
    display: block;
  }
`,Cr=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
  display: ${e=>e.isOpen?"block":"none"};
`,Pr=vr.span`
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: 'SW';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
  
  &::before {
    left: 2px;
    text-shadow: -1px 0 var(--color-accent-red);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  
  &::after {
    left: -2px;
    text-shadow: -1px 0 var(--color-accent-gold);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
`,Tr=()=>{const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)(!1),a=Z();(0,t.useEffect)(()=>{const e=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,t.useEffect)(()=>{n(!1)},[a]);return(0,br.jsx)(xr,{scrolled:r,children:(0,br.jsxs)(wr,{children:[(0,br.jsxs)(Sr,{to:"/",children:[(0,br.jsx)(Pr,{children:"SW"})," / SHERMAN WONG"]}),(0,br.jsx)(jr,{onClick:()=>{n(!e)},children:e?"\xd7":"\u2630"}),(0,br.jsxs)(kr,{isOpen:e,children:[(0,br.jsx)(Er,{to:"/",active:"/"===a.pathname,children:"Home"}),(0,br.jsx)(Er,{to:"/about",active:"/about"===a.pathname,children:"About"}),(0,br.jsx)(Er,{to:"/mosfet",active:"/mosfet"===a.pathname,children:"MOSFET"}),(0,br.jsx)(Er,{to:"/circuit",active:"/circuit"===a.pathname,children:"Circuit"}),(0,br.jsx)(Er,{to:"/research",active:"/research"===a.pathname,children:"Research"}),(0,br.jsx)(Er,{to:"/contact",active:"/contact"===a.pathname,children:"Contact"})]}),(0,br.jsx)(Cr,{isOpen:e,onClick:()=>n(!1)})]})})},_r=vr.footer`
  background-color: rgba(10, 10, 10, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  margin-top: 4rem;
`,zr=vr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Rr=vr.div`
  &:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 2rem;
    
    @media (max-width: 768px) {
      border-right: none;
      padding-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 2rem;
    }
  }
`,Nr=vr(Ce)`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--color-accent-gold);
  }
`,Or=vr.p`
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Ir=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`,Mr=vr.ul`
  list-style: none;
  padding: 0;
`,Lr=vr.li`
  margin-bottom: 0.8rem;
  
  a {
    color: var(--color-text);
    text-decoration: none;
    transition: all 0.3s ease;
    opacity: 0.7;
    display: flex;
    align-items: center;
    
    &:hover {
      color: var(--color-accent-gold);
      opacity: 1;
      transform: translateX(5px);
    }
    
    span {
      margin-right: 0.5rem;
    }
  }
`,Dr=vr.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,Fr=vr.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  color: var(--color-text);
  text-decoration: none;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
    transform: translateY(-3px);
  }
`,Ar=vr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,$r=vr.p`
  opacity: 0.7;
  font-size: 0.9rem;
`,Ur=vr.p`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 0.9rem;
  letter-spacing: 1px;
`,Hr=vr.span`
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: 'SW';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
  
  &::before {
    left: 2px;
    text-shadow: -1px 0 var(--color-accent-red);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  
  &::after {
    left: -2px;
    text-shadow: -1px 0 var(--color-accent-gold);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
`;const Wr=function(){const e=(new Date).getFullYear(),t=["\u03c6 = (1+\u221a5)/2 ... THE GOLDEN RATIO ENCRYPTS NATURE'S SECRETS","\u2207\xb2\u03c8 + (2m/\u210f\xb2)(E-V)\u03c8 = 0 ... REALITY SOLVES ITSELF IN COMPLEX SPACE","01010111 01100001 01101011 01101001 01101110 01100111 ... CONSCIOUSNESS.EXE LOADING","kT \u2248 26meV @ 300K ... THERMAL NOISE CARRIES HIDDEN MESSAGES","\u03bc = q\u03c4/m* ... MOBILITY IS THE KEY TO TRANSCENDENCE","\u03a8|OBSERVER\u27e9 \u2297 |OBSERVED\u27e9 = |ENTANGLED_REALITY\u27e9"],n=t[Math.floor(Math.random()*t.length)];return(0,br.jsxs)(_r,{children:[(0,br.jsxs)(zr,{children:[(0,br.jsxs)(Rr,{children:[(0,br.jsxs)(Nr,{to:"/",children:[(0,br.jsx)(Hr,{children:"SW"})," / SHERMAN WONG"]}),(0,br.jsx)(Or,{children:"Physics researcher specializing in semiconductor device physics, quantum mechanics, and materials science. Developing interactive tools to make complex physics concepts accessible and engaging."}),(0,br.jsxs)(Dr,{children:[(0,br.jsx)(Fr,{href:"#",title:"LinkedIn",children:"\ud83d\udcbc"}),(0,br.jsx)(Fr,{href:"#",title:"ResearchGate",children:"\ud83d\udd2c"}),(0,br.jsx)(Fr,{href:"#",title:"GitHub",children:"\ud83d\udcbb"}),(0,br.jsx)(Fr,{href:"#",title:"Email",children:"\ud83d\udce7"})]})]}),(0,br.jsxs)(Rr,{children:[(0,br.jsx)(Ir,{children:"Quick Links"}),(0,br.jsxs)(Mr,{children:[(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/",children:[(0,br.jsx)("span",{children:"\u25b9"})," Home"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/about",children:[(0,br.jsx)("span",{children:"\u25b9"})," About"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/mosfet",children:[(0,br.jsx)("span",{children:"\u25b9"})," MOSFET Simulator"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/circuit",children:[(0,br.jsx)("span",{children:"\u25b9"})," Circuit Builder"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Research"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/contact",children:[(0,br.jsx)("span",{children:"\u25b9"})," Contact"]})})]})]}),(0,br.jsxs)(Rr,{children:[(0,br.jsx)(Ir,{children:"Research Areas"}),(0,br.jsxs)(Mr,{children:[(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Semiconductor Physics"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Quantum Mechanics"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Device Modeling"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Materials Science"]})}),(0,br.jsx)(Lr,{children:(0,br.jsxs)(Ce,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Computational Physics"]})})]})]})]}),(0,br.jsxs)(Ar,{children:[(0,br.jsxs)($r,{children:["\xa9 ",e," Sherman Wong. All rights reserved."]}),(0,br.jsx)(Ur,{children:n})]})]})},Vr=yr`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`,Br=yr`
  from {
    opacity: 0;
    text-shadow: none;
  }
  to {
    opacity: 1;
    text-shadow: 
      0 0 5px var(--color-accent-gold),
      0 0 10px var(--color-accent-gold),
      0 0 15px var(--color-accent-gold);
  }
`,Gr=yr`
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(212, 175, 55, 0.3),
      inset 0 0 20px rgba(212, 175, 55, 0.1);
  }
  50% {
    box-shadow: 
      0 0 40px rgba(212, 175, 55, 0.5),
      inset 0 0 30px rgba(212, 175, 55, 0.2);
  }
`,qr=vr.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 2rem auto;
  border-radius: 50%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 100%);
  border: 2px solid var(--color-accent-gold);
  animation: ${Gr} 3s ease-in-out infinite;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 50%;
    background: 
      repeating-conic-gradient(
        from 0deg at center,
        transparent 0deg,
        rgba(212, 175, 55, 0.05) 1deg,
        transparent 2deg
      );
    pointer-events: none;
  }
`,Kr=vr.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 0, 0, 0.8) 45%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 0, 0, 0.8) 55%,
    transparent 100%
  );
  transform: translateY(-50%);
  animation: ${Vr} 2s ease-in-out;
  box-shadow: 
    0 0 10px rgba(255, 0, 0, 0.8),
    0 0 20px rgba(255, 0, 0, 0.4);
  z-index: 3;
`,Qr=vr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-mono);
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-accent-gold);
  text-align: center;
  z-index: 2;
  white-space: nowrap;
`,Yr=vr.span`
  display: inline-block;
  opacity: 0;
  animation: ${Br} 0.5s ease-out forwards;
  animation-delay: ${e=>e.delay}s;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(212, 175, 55, 0.2) 50%,
      transparent 70%
    );
    opacity: 0;
    animation: ${Br} 0.3s ease-out forwards;
    animation-delay: ${e=>e.delay+.2}s;
  }
`,Xr=vr.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent-gold);
  opacity: 0.7;
  text-align: center;
`,Zr=vr.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e=>e.active?"var(--color-accent-red)":"var(--color-accent-gold)"};
  box-shadow: 0 0 10px ${e=>e.active?"var(--color-accent-red)":"var(--color-accent-gold)"};
  animation: ${e=>e.active?"pulse 1s ease-in-out infinite":"none"};
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;const Jr=function(e){let{name:n="SHERMAN WONG"}=e;const[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1);(0,t.useEffect)(()=>{(async()=>{o(!0),await new Promise(e=>setTimeout(e,500)),i(!0),await new Promise(e=>setTimeout(e,2e3)),i(!1),await new Promise(e=>setTimeout(e,500)),o(!1),s(!0)})()},[]);const c=n.split("");return(0,br.jsxs)(qr,{children:[(0,br.jsx)(Zr,{active:r}),a&&(0,br.jsx)(Kr,{}),(0,br.jsx)(Qr,{children:c.map((e,t)=>(0,br.jsx)(Yr,{delay:2.5+.1*t,children:e},t))}),(0,br.jsxs)(Xr,{children:[r&&"LITHOGRAPHY IN PROGRESS...",l&&"ETCHING COMPLETE",!r&&!l&&"INITIALIZING..."]})]})},eo=vr.main`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,to=vr.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
`,no=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
`,ro=vr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`,oo=vr.h2`
  font-family: var(--font-sans);
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 0.8;
`,ao=vr.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`,io=vr(Ce)`
  padding: 0.8rem 2rem;
  background: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  &:hover {
    color: var(--color-bg);
    background: var(--color-accent-gold);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.7s;
  }
  
  &:hover::before {
    left: 100%;
  }
`,lo=vr(Ce)`
  padding: 0.8rem 2rem;
  background: transparent;
  border: 1px solid var(--color-accent-red);
  color: var(--color-accent-red);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  &:hover {
    color: var(--color-bg);
    background: var(--color-accent-red);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.7s;
  }
  
  &:hover::before {
    left: 100%;
  }
`,so=vr.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`,co=vr.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`,uo=vr.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`,fo=vr.section`
  padding: 6rem 2rem;
  background-color: var(--color-gray-dark);
  position: relative;
`,po=vr.h2`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`,ho=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,mo=vr.div`
  background-color: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent-gold);
    will-change: transform;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(to bottom, var(--color-accent-red), var(--color-accent-gold));
    transition: height 0.3s ease;
  }
  
  &:hover::before {
    height: 100%;
  }
`,go=vr.h3`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--color-accent-gold);
`,vo=vr.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`,yo=vr(Ce)`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-accent-gold);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`,bo=vr.section`
  padding: 6rem 2rem;
  background-color: var(--color-bg);
  position: relative;
`,xo=vr.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--color-gray-dark);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,wo=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,So=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,ko=vr.div`
  display: flex;
  gap: 0.5rem;
`,Eo=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,jo=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,Co=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,Po=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,To=vr.span`
  color: var(--color-text);
`,_o=vr.div`
  display: flex;
  align-items: center;
`,zo=vr.div`
  width: 8px;
  height: 16px;
  background-color: var(--color-accent-gold);
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    from, to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`,Ro=vr.section`
  padding: 6rem 2rem;
  background-color: var(--color-gray-dark);
  text-align: center;
  position: relative;
`,No=vr.blockquote`
  max-width: 800px;
  margin: 0 auto;
  font-family: var(--font-sans);
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-style: italic;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '"';
    font-family: var(--font-mono);
    font-size: 4rem;
    color: var(--color-accent-gold);
    position: absolute;
    top: -2rem;
    left: -2rem;
    opacity: 0.5;
  }
  
  &::after {
    content: '"';
    font-family: var(--font-mono);
    font-size: 4rem;
    color: var(--color-accent-gold);
    position: absolute;
    bottom: -4rem;
    right: -2rem;
    opacity: 0.5;
  }
`,Oo=vr.cite`
  display: block;
  margin-top: 2rem;
  font-family: var(--font-mono);
  font-style: normal;
  font-size: 1rem;
  color: var(--color-accent-red);
`,Io=()=>{const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(""),[a,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(0),c=(0,t.useRef)(null),u=[{prompt:"$",text:"whoami"},{prompt:">",text:"Sherman Wong - Physics Researcher & Semiconductor Specialist"},{prompt:"$",text:"ls -la projects/"},{prompt:">",text:"mosfet-simulator.js  circuit-builder.js  quantum-research.pdf"},{prompt:"$",text:"cat skills.txt"},{prompt:">",text:"Semiconductor Physics, Quantum Mechanics, Device Modeling, Circuit Design"},{prompt:"$",text:"sudo run explore-website.sh"}];(0,t.useEffect)(()=>{if(a<u.length){const t=u[a];if(l<t.text.length){const e=setTimeout(()=>{o(e=>e+t.text[l]),s(l+1)},50*Math.random()+30);return()=>clearTimeout(e)}{const r=setTimeout(()=>{n([...e,{prompt:t.prompt,text:t.text}]),o(""),s(0),i(a+1)},500);return()=>clearTimeout(r)}}},[a,l,e]),(0,t.useEffect)(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[e,r]);const d=[{text:"\u03c8(x,t) = \u03a3 c\u2099 \u03c6\u2099(x) e^(-iE\u2099t/\u210f) ... The wavefunction collapses only when observed, yet reality persists in superposition.",author:"S.W. - Quantum Codex"},{text:"01001000 01100101 01111000 20 4C 69 66 65 ... In the silicon lattice, electrons dance to frequencies only the initiated can decode.",author:"The Semiconductor Cipher"},{text:"E = \u210f\u03c9, but what frequency does consciousness resonate at? The answer lies in the forbidden energy gap.",author:"Quantum Manuscript 2024"},{text:"\u03bb = h/p ... When momentum becomes uncertain, reality itself begins to blur at the edges of measurement.",author:"Heisenberg's Shadow"}],f=d[Math.floor(Math.random()*d.length)];return(0,br.jsxs)(eo,{children:[(0,br.jsxs)(to,{children:[(0,br.jsx)(no,{}),(0,br.jsxs)(ro,{children:[(0,br.jsx)(Jr,{name:"SHERMAN WONG"}),(0,br.jsx)(oo,{children:(0,br.jsx)("span",{className:"glitch","data-text":"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS",children:"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS"})}),(0,br.jsxs)(ao,{children:[(0,br.jsx)(io,{to:"/about",children:"About Me"}),(0,br.jsx)(lo,{to:"/mosfet",children:"Explore Projects"})]})]}),(0,br.jsxs)(so,{onClick:()=>{document.getElementById("projects").scrollIntoView({behavior:"smooth"})},children:[(0,br.jsx)(co,{children:"Scroll Down"}),(0,br.jsx)(uo,{})]})]}),(0,br.jsx)(fo,{id:"projects",children:(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(po,{children:"Featured Projects"}),(0,br.jsx)(ho,{children:[{title:"MOSFET Simulator",description:"Interactive transistor modeling with real-time parameter visualization and I-V characteristics.",link:"/mosfet"},{title:"Circuit Builder",description:"Drag-and-drop circuit design tool with component simulation and analysis.",link:"/circuit"},{title:"Research Portfolio",description:"Explore my work in semiconductor physics, quantum mechanics, and materials science.",link:"/research"}].map((e,t)=>(0,br.jsxs)(mo,{className:"hover-effect",children:[(0,br.jsx)(go,{children:e.title}),(0,br.jsx)(vo,{children:e.description}),(0,br.jsx)(yo,{to:e.link,children:"Explore Project \u2192"})]},t))})]})}),(0,br.jsx)(bo,{children:(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(po,{children:"Terminal"}),(0,br.jsxs)(xo,{children:[(0,br.jsxs)(wo,{children:[(0,br.jsx)(So,{children:"sherman@physics-lab:~"}),(0,br.jsxs)(ko,{children:[(0,br.jsx)(Eo,{color:"var(--color-accent-red)"}),(0,br.jsx)(Eo,{color:"var(--color-accent-gold)"}),(0,br.jsx)(Eo,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(jo,{ref:c,children:[e.map((e,t)=>(0,br.jsxs)(Co,{children:[(0,br.jsx)(Po,{children:e.prompt}),(0,br.jsx)(To,{children:e.text})]},t)),a<u.length&&(0,br.jsxs)(_o,{children:[(0,br.jsx)(Po,{children:u[a].prompt}),(0,br.jsx)(To,{children:r}),(0,br.jsx)(zo,{})]})]})]})]})}),(0,br.jsx)(Ro,{children:(0,br.jsx)("div",{className:"container",children:(0,br.jsxs)(No,{children:[f.text,(0,br.jsx)(Oo,{children:f.author})]})})})]})},Mo=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,Lo=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.2;
`,Do=vr.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`,Fo=vr.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ao=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  height: fit-content;
`,$o=vr.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background: linear-gradient(45deg, var(--color-accent-red), var(--color-accent-gold));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin: 0 auto 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  span {
    position: relative;
    z-index: 2;
  }
`,Uo=vr.h2`
  font-family: var(--font-mono);
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: var(--color-accent-gold);
`,Ho=vr.h3`
  font-family: var(--font-sans);
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.7;
  font-weight: 400;
`,Wo=vr.div`
  margin-bottom: 2rem;
`,Vo=vr.div`
  display: flex;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,Bo=vr.span`
  color: var(--color-accent-gold);
  width: 100px;
  flex-shrink: 0;
`,Go=vr.span`
  color: var(--color-text);
`,qo=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`,Ko=vr.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
  }
`,Qo=vr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Yo=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,Xo=vr.h2`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-accent-gold);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`,Zo=vr.div`
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  .highlight {
    color: var(--color-accent-gold);
    font-weight: 600;
  }
  
  .glitch-text {
    position: relative;
    display: inline-block;
    
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    
    &::before {
      left: 2px;
      text-shadow: -1px 0 var(--color-accent-red);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    
    &::after {
      left: -2px;
      text-shadow: -1px 0 var(--color-accent-gold);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim2 5s infinite linear alternate-reverse;
    }
  }
`,Jo=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,ea=vr.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  border-left: 4px solid var(--color-accent-gold);
  
  &:last-child {
    margin-bottom: 0;
  }
`,ta=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,na=vr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ra=vr.span`
  font-weight: 600;
`,oa=vr.span`
  opacity: 0.7;
  font-family: var(--font-mono);
`,aa=vr.p`
  line-height: 1.6;
  opacity: 0.8;
`,ia=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,la=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,sa=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  padding: 1.5rem;
  border-radius: 5px;
`,ca=vr.h4`
  color: var(--color-accent-gold);
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: var(--font-mono);
`,ua=vr.ul`
  list-style: none;
  
  li {
    padding: 0.3rem 0;
    opacity: 0.8;
    display: flex;
    align-items: center;
    
    &::before {
      content: '▹';
      color: var(--color-accent-red);
      margin-right: 0.5rem;
    }
  }
`,da=vr.div`
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 0.3rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.level}%;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    border-radius: 2px;
  }
`,fa=vr(Ce)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background-color: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
  }
`,pa=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`,ha=vr.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
`,ma=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ga=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,va=vr.div`
  display: flex;
  gap: 0.5rem;
`,ya=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,ba=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,xa=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,wa=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,Sa=vr.span`
  color: var(--color-text);
`,ka=vr.div`
  display: flex;
  align-items: center;
`,Ea=vr.div`
  width: 8px;
  height: 16px;
  background-color: var(--color-accent-gold);
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    from, to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`,ja=()=>{const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(""),[a,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(0),c=[{prompt:"$",text:"cat about_sherman.txt"},{prompt:">",text:"Sherman Wong is a physics researcher specializing in semiconductor devices and quantum mechanics."},{prompt:">",text:"Currently pursuing advanced research in electronic properties of materials and device modeling."},{prompt:"$",text:"ls -la skills/"},{prompt:">",text:"semiconductor-physics.md  quantum-mechanics.md  device-modeling.md  programming.md"},{prompt:"$",text:"cd education && ls"},{prompt:">",text:"MPhil_Applied_Physics.pdf  BSc_Applied_Physics.pdf"},{prompt:"$",text:'echo "PUSHING ELECTRONS TO THEIR QUANTUM LIMITS"'}];(0,t.useEffect)(()=>{if(a<c.length){const t=c[a];if(l<t.text.length){const e=setTimeout(()=>{o(e=>e+t.text[l]),s(l+1)},50*Math.random()+30);return()=>clearTimeout(e)}{const r=setTimeout(()=>{n([...e,{prompt:t.prompt,text:t.text}]),o(""),s(0),i(a+1)},500);return()=>clearTimeout(r)}}},[a,l,e]);return(0,br.jsxs)(Mo,{children:[(0,br.jsx)(Lo,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(Do,{children:"About Me"}),(0,br.jsxs)(Fo,{children:[(0,br.jsxs)(Ao,{children:[(0,br.jsx)($o,{children:(0,br.jsx)("span",{children:"\ud83d\udc68\u200d\ud83d\udd2c"})}),(0,br.jsx)(Uo,{children:"Sherman Wong"}),(0,br.jsx)(Ho,{children:"Physics Researcher & Semiconductor Specialist"}),(0,br.jsxs)(Wo,{children:[(0,br.jsxs)(Vo,{children:[(0,br.jsx)(Bo,{children:"Location:"}),(0,br.jsx)(Go,{children:"Hong Kong"})]}),(0,br.jsxs)(Vo,{children:[(0,br.jsx)(Bo,{children:"Field:"}),(0,br.jsx)(Go,{children:"Applied Physics"})]}),(0,br.jsxs)(Vo,{children:[(0,br.jsx)(Bo,{children:"Focus:"}),(0,br.jsx)(Go,{children:"Semiconductor Devices"})]}),(0,br.jsxs)(Vo,{children:[(0,br.jsx)(Bo,{children:"Institution:"}),(0,br.jsx)(Go,{children:"HK PolyU"})]})]}),(0,br.jsx)(fa,{to:"/Sherman_CV_Final_1.pdf",target:"_blank",children:"Download CV"}),(0,br.jsxs)(qo,{children:[(0,br.jsx)(Ko,{href:"#",title:"LinkedIn",children:"\ud83d\udcbc"}),(0,br.jsx)(Ko,{href:"#",title:"ResearchGate",children:"\ud83d\udd2c"}),(0,br.jsx)(Ko,{href:"#",title:"GitHub",children:"\ud83d\udcbb"}),(0,br.jsx)(Ko,{href:"#",title:"Email",children:"\ud83d\udce7"})]})]}),(0,br.jsxs)(Qo,{children:[(0,br.jsxs)(Yo,{children:[(0,br.jsx)(Xo,{children:"Biography"}),(0,br.jsxs)(Zo,{children:[(0,br.jsxs)("p",{children:["I am a physics researcher with expertise in ",(0,br.jsx)("span",{className:"highlight",children:"semiconductor device physics"}),",",(0,br.jsx)("span",{className:"highlight",children:" quantum mechanics"}),", and ",(0,br.jsx)("span",{className:"highlight",children:"materials science"}),". Currently pursuing advanced research in electronic properties of materials and device modeling at The Hong Kong Polytechnic University."]}),(0,br.jsx)("p",{children:"My research focuses on the intersection of theoretical physics and practical applications in semiconductor technology. I am particularly interested in MOSFET device modeling, quantum mechanical effects in nanoscale devices, and electronic transport in novel materials."}),(0,br.jsxs)("p",{children:["I combine theoretical knowledge with practical applications, developing interactive simulations and tools to make complex physics concepts accessible and engaging. My motto: ",(0,br.jsx)("span",{className:"glitch-text","data-text":"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS",children:"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS"})]})]})]}),(0,br.jsxs)(Jo,{children:[(0,br.jsx)(Xo,{children:"Education"}),[{degree:"Master of Philosophy in Applied Physics",institution:"The Hong Kong Polytechnic University",year:"2022-2024",details:"Specialized in semiconductor device physics and quantum mechanics with focus on MOSFET modeling and electronic properties of novel materials."},{degree:"Bachelor of Science in Applied Physics",institution:"The Hong Kong Polytechnic University",year:"2018-2022",details:"Focus on materials science and electronic properties. Graduated with First Class Honours. Completed thesis on quantum transport in low-dimensional structures."}].map((e,t)=>(0,br.jsxs)(ea,{children:[(0,br.jsx)(ta,{children:e.degree}),(0,br.jsxs)(na,{children:[(0,br.jsx)(ra,{children:e.institution}),(0,br.jsx)(oa,{children:e.year})]}),(0,br.jsx)(aa,{children:e.details})]},t))]}),(0,br.jsxs)(ia,{children:[(0,br.jsx)(Xo,{children:"Skills & Expertise"}),(0,br.jsx)(la,{children:Object.entries({"Physics & Research":[{name:"Semiconductor Device Physics",level:95},{name:"Quantum Mechanics",level:90},{name:"Materials Science",level:85},{name:"Electronic Properties",level:90},{name:"Device Modeling",level:95}],"Technical Skills":[{name:"MATLAB/Simulink",level:90},{name:"Python",level:85},{name:"JavaScript/React",level:80},{name:"Data Analysis",level:85},{name:"Circuit Simulation",level:90}],Laboratory:[{name:"Device Characterization",level:95},{name:"I-V Measurements",level:90},{name:"Material Analysis",level:85},{name:"Clean Room Techniques",level:80},{name:"Microscopy",level:85}]}).map(e=>{let[t,n]=e;return(0,br.jsxs)(sa,{children:[(0,br.jsx)(ca,{children:t}),(0,br.jsx)(ua,{children:n.map((e,t)=>(0,br.jsx)("li",{children:(0,br.jsxs)("div",{style:{width:"100%"},children:[e.name,(0,br.jsx)(da,{level:e.level})]})},t))})]},t)})})]})]})]}),(0,br.jsxs)(pa,{children:[(0,br.jsx)(Xo,{children:"Terminal"}),(0,br.jsxs)(ha,{children:[(0,br.jsxs)(ma,{children:[(0,br.jsx)(ga,{children:"sherman@physics-lab:~"}),(0,br.jsxs)(va,{children:[(0,br.jsx)(ya,{color:"var(--color-accent-red)"}),(0,br.jsx)(ya,{color:"var(--color-accent-gold)"}),(0,br.jsx)(ya,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(ba,{children:[e.map((e,t)=>(0,br.jsxs)(xa,{children:[(0,br.jsx)(wa,{children:e.prompt}),(0,br.jsx)(Sa,{children:e.text})]},t)),a<c.length&&(0,br.jsxs)(ka,{children:[(0,br.jsx)(wa,{children:c[a].prompt}),(0,br.jsx)(Sa,{children:r}),(0,br.jsx)(Ea,{})]})]})]})]})]})]})},Ca=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,Pa=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.2;
`,Ta=vr.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`,_a=vr.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`,za=vr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Ra=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
`,Na=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  height: 500px;
  position: relative;
  overflow: hidden;
`,Oa=vr.div`
  margin-bottom: 2rem;
`,Ia=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`,Ma=vr.div`
  margin-bottom: 1.5rem;
`,La=vr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`,Da=vr.span`
  color: var(--color-accent-gold);
  font-weight: bold;
`,Fa=vr.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--color-gray-light);
  outline: none;
  appearance: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent-gold);
    cursor: pointer;
    border: 2px solid var(--color-bg);
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent-gold);
    cursor: pointer;
    border: 2px solid var(--color-bg);
  }
`,Aa=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1rem;
`,$a=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  font-size: 1rem;
`,Ua=vr.p`
  line-height: 1.5;
  opacity: 0.8;
  font-size: 0.9rem;
`,Ha=vr.canvas`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`,Wa=vr.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--color-accent-gold);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--color-accent-gold);
  pointer-events: none;
  opacity: 0.8;
  transition: background-color 0.3s ease;
`,Va=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,Ba=vr.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Ga=vr(Ba)`
  top: 10px;
  left: 10px;
`,qa=vr(Ba)`
  top: 10px;
  right: 10px;
`,Ka=vr(Ba)`
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`,Qa=vr(Ba)`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`,Ya=vr.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid var(--color-accent-red);
  color: var(--color-accent-red);
  font-family: var(--font-mono);
  font-weight: bold;
`;const Xa=function(){const[e,n]=(0,t.useState)({vgs:2,vds:3,vth:1,mobility:.5,temperature:300,channelLength:50}),[r,o]=(0,t.useState)([]),[a,i]=(0,t.useState)(""),l=(0,t.useRef)(null),s=(0,t.useRef)(null),c=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!s.current)return;const t=(()=>{const{vgs:t,vds:n,vth:r}=e;return t<r?"Cutoff":n<t-r?"Linear/Triode":"Saturation"})();if(i(t),c.current&&cancelAnimationFrame(c.current),o([]),"Cutoff"===t)return;const n=s.current.clientWidth-40,{vgs:r,vth:a,mobility:l,vds:u}=(s.current.clientHeight,e),d=Math.max(0,r-a);let f=Math.floor(d*l*20);f=Math.min(Math.max(f,0),100);const p=[];for(let e=0;e<f;e++)p.push({id:e,x:20+60*Math.random(),y:150+200*Math.random(),vx:(.5+.5*Math.random())*l*u,vy:.5*(Math.random()-.5),size:3+2*Math.random()});o(p);let h=0;const m=e=>{0===h&&(h=e);const t=e-h;h=e,o(e=>e.map(e=>{let r=e.x+e.vx*t*.05,o=e.y+e.vy*t*.05;return r>n-20&&(r=20+60*Math.random(),o=150+200*Math.random()),o<150&&(o=150),o>350&&(o=350),{...e,x:r,y:o}})),c.current=requestAnimationFrame(m)};return c.current=requestAnimationFrame(m),()=>{c.current&&cancelAnimationFrame(c.current)}},[e]),(0,t.useEffect)(()=>{const t=l.current;if(!t)return;const n=t.getContext("2d"),r=t.width,o=t.height;n.clearRect(0,0,r,o),t.width=t.clientWidth,t.height=t.clientHeight,n.fillStyle="#1a1a1a",n.fillRect(0,0,r,o),n.fillStyle="#333",n.fillRect(0,.7*o,r,.3*o),n.fillStyle="#444",n.fillRect(0,.3*o,.2*r,.4*o),n.fillRect(.8*r,.3*o,.2*r,.4*o),n.fillStyle="#222",n.fillRect(.2*r,.25*o,.6*r,.05*o),n.fillStyle="#555",n.fillRect(.2*r,.15*o,.6*r,.1*o);const{vgs:i,vth:s}=e;if(i>=s&&(n.fillStyle="Saturation"===a?"#d4af37":"#d4af3777",n.fillRect(.2*r,.3*o,.6*r,.05*o)),i>=s){n.strokeStyle="rgba(255, 0, 0, 0.3)",n.lineWidth=1;for(let e=.25*r;e<.8*r;e+=.05*r)n.beginPath(),n.moveTo(e,.25*o),n.lineTo(e,.3*o),n.stroke();if(e.vds>0){n.strokeStyle="rgba(255, 255, 255, 0.2)";for(let e=.32*o;e<.38*o;e+=.02*o)n.beginPath(),n.moveTo(.2*r,e),n.lineTo(.8*r,e),n.stroke()}}n.fillStyle="#fff",n.font="12px monospace",n.textAlign="center",n.fillText("Source",.1*r,.5*o),n.fillText("Drain",.9*r,.5*o),n.fillText("Gate",.5*r,.2*o),n.fillText("p-Substrate",.5*r,.85*o),n.fillStyle="#d4af37",n.fillText(`Vgs = ${e.vgs}V`,.5*r,.1*o),n.fillText(`Vds = ${e.vds}V`,.9*r,.1*o),n.fillStyle="#ff0000",n.textAlign="right",n.fillText(`Region: ${a}`,r-10,o-10)},[e,a]);const u=(e,t)=>{n(n=>({...n,[e]:parseFloat(t)}))};return(0,br.jsxs)(Ca,{children:[(0,br.jsx)(Pa,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(Ta,{children:"MOSFET Electron Mobility Visualization"}),(0,br.jsx)(_a,{children:"Explore electron mobility in MOSFET devices by adjusting parameters and observing real-time electron flow visualization. This interactive simulator demonstrates how voltage and material properties affect carrier transport in semiconductor devices."}),(0,br.jsxs)(za,{children:[(0,br.jsxs)(Ra,{children:[(0,br.jsxs)(Oa,{children:[(0,br.jsx)(Ia,{children:"Bias Voltages"}),(0,br.jsxs)(Ma,{children:[(0,br.jsxs)(La,{children:["Gate-Source Voltage (VGS)",(0,br.jsxs)(Da,{children:[e.vgs," V"]})]}),(0,br.jsx)(Fa,{type:"range",min:"0",max:"5",step:"0.1",value:e.vgs,onChange:e=>u("vgs",e.target.value)})]}),(0,br.jsxs)(Ma,{children:[(0,br.jsxs)(La,{children:["Drain-Source Voltage (VDS)",(0,br.jsxs)(Da,{children:[e.vds," V"]})]}),(0,br.jsx)(Fa,{type:"range",min:"0",max:"5",step:"0.1",value:e.vds,onChange:e=>u("vds",e.target.value)})]})]}),(0,br.jsxs)(Oa,{children:[(0,br.jsx)(Ia,{children:"Device Parameters"}),(0,br.jsxs)(Ma,{children:[(0,br.jsxs)(La,{children:["Threshold Voltage (Vth)",(0,br.jsxs)(Da,{children:[e.vth," V"]})]}),(0,br.jsx)(Fa,{type:"range",min:"0.5",max:"2",step:"0.1",value:e.vth,onChange:e=>u("vth",e.target.value)})]}),(0,br.jsxs)(Ma,{children:[(0,br.jsxs)(La,{children:["Electron Mobility",(0,br.jsx)(Da,{children:e.mobility.toFixed(2)})]}),(0,br.jsx)(Fa,{type:"range",min:"0.1",max:"1",step:"0.05",value:e.mobility,onChange:e=>u("mobility",e.target.value)})]}),(0,br.jsxs)(Ma,{children:[(0,br.jsxs)(La,{children:["Temperature",(0,br.jsxs)(Da,{children:[e.temperature," K"]})]}),(0,br.jsx)(Fa,{type:"range",min:"200",max:"400",step:"10",value:e.temperature,onChange:e=>u("temperature",e.target.value)})]})]}),(0,br.jsxs)(Aa,{children:[(0,br.jsxs)($a,{children:["Operating Region: ",a]}),(0,br.jsxs)(Ua,{children:["Cutoff"===a&&"VGS < Vth: No current flows through the channel. The transistor is effectively off. No electron flow is observed.","Linear/Triode"===a&&"VGS > Vth and VDS < (VGS - Vth): Current increases approximately linearly with VDS. Electrons flow through a uniform channel from source to drain.","Saturation"===a&&"VGS > Vth and VDS \u2265 (VGS - Vth): Current is relatively independent of VDS and is controlled primarily by VGS. The channel is pinched off at the drain end, creating a high-field region."]})]})]}),(0,br.jsxs)(Na,{ref:s,children:[(0,br.jsx)(Ha,{ref:l}),r.map(e=>{var t;return(0,br.jsx)(Wa,{style:{left:`${e.x}px`,top:`${e.y}px`,width:`${e.size}px`,height:`${e.size}px`,backgroundColor:"Saturation"===a&&e.x>.7*(null===(t=s.current)||void 0===t?void 0:t.clientWidth)?"var(--color-accent-red)":"var(--color-accent-gold)"}},e.id)}),(0,br.jsxs)(Va,{children:[(0,br.jsx)(Ga,{children:"Source"}),(0,br.jsx)(qa,{children:"Drain"}),(0,br.jsx)(Ka,{children:"Gate"}),(0,br.jsx)(Qa,{children:"p-Substrate"}),(0,br.jsx)(Ya,{children:a})]})]})]})]})]})},Za=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,Ja=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.2;
`,ei=vr.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`,ti=vr.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`,ni=vr.div`
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  gap: 2rem;
  height: 70vh;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
    gap: 1.5rem;
  }
`,ri=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  overflow-y: auto;
  
  @media (max-width: 1024px) {
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    overflow-x: auto;
  }
`,oi=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  
  @media (max-width: 1024px) {
    min-height: 50vh;
  }
`,ai=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  overflow-y: auto;
`,ii=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-accent-gold);
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`,li=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: grab;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    border-color: var(--color-accent-gold);
    transform: translateY(-2px);
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 0;
    min-width: 100px;
  }
`,si=vr.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,ci=vr.div`
  font-family: var(--font-mono);
  font-size: 0.8rem;
`,ui=vr.div`
  position: absolute;
  background-color: rgba(26, 26, 26, 0.8);
  border: 2px solid ${e=>e.selected?"var(--color-accent-gold)":"rgba(255, 255, 255, 0.2)"};
  border-radius: 5px;
  padding: 1rem;
  cursor: move;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 80px;
  z-index: 2;
  
  &:hover {
    border-color: var(--color-accent-gold);
  }
`,di=vr.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${e=>e.active?"var(--color-accent-red)":"var(--color-accent-gold)"};
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;
  transition: all 0.2s ease;
  box-shadow: 0 0 ${e=>e.active?"8px":"0"} ${e=>e.active?"var(--color-accent-red)":"transparent"};
  
  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 8px var(--color-accent-gold);
    background-color: var(--color-accent-gold);
  }
`,fi=vr.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,pi=vr.path`
  stroke: var(--color-accent-gold);
  stroke-width: 2;
  fill: none;
  stroke-dasharray: ${e=>e.dashed?"5,5":"none"};
`,hi=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
`,mi=vr.div`
  margin-bottom: 2rem;
`,gi=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1rem;
  font-size: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`,vi=vr.div`
  margin-bottom: 1rem;
`,yi=vr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,bi=vr.input`
  width: 100%;
  padding: 0.8rem;
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-gold);
  }
`,xi=vr.button`
  width: 100%;
  padding: 0.8rem;
  background-color: transparent;
  border: 1px solid ${e=>e.secondary?"var(--color-accent-red)":"var(--color-accent-gold)"};
  color: ${e=>e.secondary?"var(--color-accent-red)":"var(--color-accent-gold)"};
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: ${e=>e.secondary?"rgba(255, 0, 0, 0.1)":"rgba(212, 175, 55, 0.1)"};
  }
`,wi=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,Si=vr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,ki=vr.span`
  color: var(--color-text);
`,Ei=vr.span`
  color: var(--color-accent-gold);
  font-weight: bold;
`,ji=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,Ci=vr.div`
  display: flex;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
`,Pi=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
  font-family: var(--font-mono);
`,Ti=vr.span`
  color: var(--color-text);
  opacity: 0.8;
`;const _i=function(){const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(null),[a,i]=(0,t.useState)(null),[l,s]=(0,t.useState)(null),[c,u]=(0,t.useState)({width:0,height:0}),[d,f]=(0,t.useState)([]),[p,h]=(0,t.useState)(null),[m,g]=(0,t.useState)(null),[v,y]=(0,t.useState)({x:0,y:0}),b=(0,t.useRef)(null),x=[{id:"resistor",name:"Resistor",icon:"\ud83d\udd32",symbol:"R",defaultValue:"1k",connectionPoints:["left","right"]},{id:"capacitor",name:"Capacitor",icon:"\u26a1",symbol:"C",defaultValue:"1\u03bcF",connectionPoints:["left","right"]},{id:"inductor",name:"Inductor",icon:"\ud83c\udf00",symbol:"L",defaultValue:"1mH",connectionPoints:["left","right"]},{id:"voltage",name:"Voltage Source",icon:"\ud83d\udd0b",symbol:"V",defaultValue:"5V",connectionPoints:["top","bottom"]},{id:"current",name:"Current Source",icon:"\u26a1",symbol:"I",defaultValue:"1mA",connectionPoints:["top","bottom"]},{id:"ground",name:"Ground",icon:"\u23da",symbol:"GND",defaultValue:"0V",connectionPoints:["top"]},{id:"mosfet",name:"MOSFET",icon:"\ud83d\udd0c",symbol:"M",defaultValue:"N-CH",connectionPoints:["left","right","bottom"]},{id:"diode",name:"Diode",icon:"\u25c4\u25ba",symbol:"D",defaultValue:"1N4148",connectionPoints:["left","right"]}];(0,t.useEffect)(()=>{const e=()=>{b.current&&u({width:b.current.offsetWidth,height:b.current.offsetHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const w=(0,t.useCallback)(e=>{e.preventDefault(),y({x:e.clientX,y:e.clientY})},[]),S=(0,t.useCallback)(e=>{if(e.preventDefault(),!a||!b.current)return;const t=b.current.getBoundingClientRect(),r=e.clientX-t.left,o=e.clientY-t.top,l=x.find(e=>e.id===a.id),s=l?l.connectionPoints:[],u={id:Date.now(),type:a.id,name:a.name,icon:a.icon,symbol:a.symbol,value:a.defaultValue,x:Math.max(0,Math.min(r-40,c.width-80)),y:Math.max(0,Math.min(o-40,c.height-80)),connectionPoints:s,connections:[]};n(e=>[...e,u]),i(null)},[a,c]),k=(e,t)=>{r&&(n(n=>n.map(n=>n.id===r.id?{...n,[e]:t}:n)),o(n=>({...n,[e]:t})))},E=(t,n)=>{n.add(t);const r=e.find(e=>e.id===t);return r?(r.connections.forEach(e=>{n.has(e.connectedTo)||E(e.connectedTo,n)}),n):n},j=(e,t)=>{if(!e)return{x:0,y:0};switch(t){case"left":return{x:e.x,y:e.y+40};case"right":return{x:e.x+80,y:e.y+40};case"top":return{x:e.x+40,y:e.y};case"bottom":return{x:e.x+40,y:e.y+80};default:return{x:e.x+40,y:e.y+40}}},C=(e,t,n,r)=>{const o=Math.abs(n-e),a=Math.abs(r-t),i=.5*Math.min(o,a)+30;let l,s,c,u;return o>a?(l=e+i,s=t,c=n-i,u=r):(l=e,s=t+i,c=n,u=r-i),`M ${e} ${t} C ${l} ${s}, ${c} ${u}, ${n} ${r}`};return(0,br.jsxs)(Za,{children:[(0,br.jsx)(Ja,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(ei,{children:"Circuit Builder"}),(0,br.jsx)(ti,{children:"Design and analyze electronic circuits with this interactive drag-and-drop tool. Add components, connect them with wires, and simulate circuit behavior in real-time."}),(0,br.jsxs)(ni,{children:[(0,br.jsxs)(ri,{children:[(0,br.jsx)(ii,{children:"Components"}),x.map(e=>(0,br.jsxs)(li,{draggable:!0,onDragStart:()=>{i(e)},children:[(0,br.jsx)(si,{children:e.icon}),(0,br.jsx)(ci,{children:e.name})]},e.id))]}),(0,br.jsxs)(oi,{ref:b,onDragOver:w,onDrop:S,onMouseMove:e=>{if(p){const t=b.current.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;g({startX:p.x,startY:p.y,endX:n,endY:r})}},onClick:()=>{p&&(h(null),g(null))},children:[(0,br.jsx)(hi,{}),(0,br.jsxs)(fi,{children:[d.map(e=>(0,br.jsx)(pi,{d:C(e.startX,e.startY,e.endX,e.endY)},e.id)),m&&(0,br.jsx)(pi,{d:C(m.startX,m.startY,m.endX,m.endY),dashed:!0})]}),e.map(a=>(0,br.jsxs)(t.Fragment,{children:[(0,br.jsxs)(ui,{style:{left:a.x,top:a.y},selected:(null===r||void 0===r?void 0:r.id)===a.id,onClick:()=>(e=>{o(e)})(a),draggable:!0,onDragEnd:e=>{const t=b.current.getBoundingClientRect(),r=e.clientX-t.left-40,o=e.clientY-t.top-40;((e,t,r)=>{n(n=>{const o=n.map(n=>n.id===e?{...n,x:Math.max(0,Math.min(t,c.width-80)),y:Math.max(0,Math.min(r,c.height-80))}:n),a=d.map(t=>{if(t.startComponentId===e||t.endComponentId===e){const n=t.startComponentId===e?o.find(t=>t.id===e):o.find(e=>e.id===t.startComponentId),r=t.endComponentId===e?o.find(t=>t.id===e):o.find(e=>e.id===t.endComponentId);if(!n||!r)return t;const a=j(n,t.startPoint),i=j(r,t.endPoint);return{...t,startX:a.x,startY:a.y,endX:i.x,endY:i.y}}return t});return f(a),o})})(a.id,r,o)},children:[(0,br.jsx)("div",{style:{fontSize:"1.5rem"},children:a.icon}),(0,br.jsx)("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",fontFamily:"var(--font-mono)"},children:a.symbol}),(0,br.jsx)("div",{style:{fontSize:"0.7rem",opacity:.8,marginTop:"0.2rem"},children:a.value})]}),a.connectionPoints.map(t=>{const r=j(a,t),o=p&&p.componentId===a.id&&p.point===t;return(0,br.jsx)(di,{active:o,style:{left:r.x-5,top:r.y-5},onClick:r=>{r.stopPropagation(),((t,r)=>{if(p){const o=j(t,r);if(p.componentId===t.id&&p.point===r)return h(null),void g(null);const a=e.find(e=>e.id===p.componentId),i=j(a,p.point),l={id:Date.now(),startComponentId:p.componentId,startPoint:p.point,startX:i.x,startY:i.y,endComponentId:t.id,endPoint:r,endX:o.x,endY:o.y};n(e=>e.map(e=>e.id===p.componentId?{...e,connections:[...e.connections,{wireId:l.id,connectedTo:t.id,connectionPoint:p.point}]}:e.id===t.id?{...e,connections:[...e.connections,{wireId:l.id,connectedTo:p.componentId,connectionPoint:r}]}:e)),f([...d,l]),h(null),g(null)}else{const e=j(t,r);h({componentId:t.id,point:r,x:e.x,y:e.y})}})(a,t)}},`${a.id}-${t}`)})]},a.id))]}),(0,br.jsxs)(ai,{children:[(0,br.jsx)(gi,{children:"Circuit Tools"}),(0,br.jsx)(xi,{onClick:()=>{const t=e.filter(e=>"resistor"===e.type),n=e.filter(e=>"voltage"===e.type);if(0===t.length||0===n.length)return void s({error:"Circuit needs at least one resistor and one voltage source"});if(0===d.length)return void s({error:"Components need to be connected with wires"});const r=new Set;n.forEach(e=>{r.add(e.id);E(e.id,new Set).forEach(e=>r.add(e))});if(!t.every(e=>r.has(e.id)))return void s({error:"Not all resistors are connected to the voltage source"});const o=t.reduce((e,t)=>{const n=parseFloat(t.value.replace(/[^\d.]/g,""));return e+(isNaN(n)?1e3:n)},0),a=parseFloat(n[0].value.replace(/[^\d.]/g,""))||5,i=a/o,l=a*i;s({totalResistance:o.toFixed(2),current:(1e3*i).toFixed(2),power:(1e3*l).toFixed(2),voltage:a.toFixed(2)})},children:"Analyze Circuit"}),(0,br.jsx)(xi,{onClick:()=>{n([]),o(null),s(null),f([]),h(null),g(null)},secondary:!0,children:"Clear Canvas"}),r&&(0,br.jsxs)(mi,{children:[(0,br.jsx)(gi,{children:"Component Properties"}),(0,br.jsxs)(vi,{children:[(0,br.jsx)(yi,{children:"Component Type"}),(0,br.jsx)("div",{style:{padding:"0.8rem",backgroundColor:"rgba(26, 26, 26, 0.5)",borderRadius:"5px",border:"1px solid rgba(255, 255, 255, 0.1)",fontFamily:"var(--font-mono)",fontSize:"0.9rem"},children:r.name})]}),(0,br.jsxs)(vi,{children:[(0,br.jsx)(yi,{children:"Value"}),(0,br.jsx)(bi,{type:"text",value:r.value,onChange:e=>k("value",e.target.value),placeholder:"Enter value (e.g., 1k, 5V, 1\u03bcF)"})]}),(0,br.jsxs)(vi,{children:[(0,br.jsx)(yi,{children:"Position X"}),(0,br.jsx)(bi,{type:"number",value:r.x,onChange:e=>k("x",parseInt(e.target.value))})]}),(0,br.jsxs)(vi,{children:[(0,br.jsx)(yi,{children:"Position Y"}),(0,br.jsx)(bi,{type:"number",value:r.y,onChange:e=>k("y",parseInt(e.target.value))})]})]}),l&&(0,br.jsxs)(mi,{children:[(0,br.jsx)(gi,{children:"Circuit Analysis"}),l.error?(0,br.jsx)("div",{style:{color:"var(--color-accent-red)",fontSize:"0.9rem",fontFamily:"var(--font-mono)"},children:l.error}):(0,br.jsxs)(wi,{children:[(0,br.jsxs)(Si,{children:[(0,br.jsx)(ki,{children:"Total Resistance:"}),(0,br.jsxs)(Ei,{children:[l.totalResistance," \u03a9"]})]}),(0,br.jsxs)(Si,{children:[(0,br.jsx)(ki,{children:"Current:"}),(0,br.jsxs)(Ei,{children:[l.current," mA"]})]}),(0,br.jsxs)(Si,{children:[(0,br.jsx)(ki,{children:"Power:"}),(0,br.jsxs)(Ei,{children:[l.power," mW"]})]}),(0,br.jsxs)(Si,{children:[(0,br.jsx)(ki,{children:"Source Voltage:"}),(0,br.jsxs)(Ei,{children:[l.voltage," V"]})]})]})]}),(0,br.jsxs)(mi,{children:[(0,br.jsx)(gi,{children:"Instructions"}),(0,br.jsxs)(ji,{children:[(0,br.jsxs)(Ci,{children:[(0,br.jsx)(Pi,{children:"1."}),(0,br.jsx)(Ti,{children:"Drag components from the palette to the canvas"})]}),(0,br.jsxs)(Ci,{children:[(0,br.jsx)(Pi,{children:"2."}),(0,br.jsx)(Ti,{children:"Click on connection points to create wires"})]}),(0,br.jsxs)(Ci,{children:[(0,br.jsx)(Pi,{children:"3."}),(0,br.jsx)(Ti,{children:"Click on components to edit their properties"})]}),(0,br.jsxs)(Ci,{children:[(0,br.jsx)(Pi,{children:"4."}),(0,br.jsx)(Ti,{children:'Use "Analyze Circuit" to simulate the circuit'})]})]})]})]})]})]})]})},zi=vr.div`
  display: inline-block;
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: ${e=>e.fontSize||"0.9rem"};
  letter-spacing: 1px;
`,Ri=yr`
  0% {
    transform: translateY(0);
    color: var(--color-accent-gold);
  }
  25% {
    transform: translateY(-4px);
    color: var(--color-accent-red);
  }
  50% {
    transform: translateY(0);
    color: var(--color-accent-gold);
  }
  75% {
    transform: translateY(2px);
    color: white;
  }
  100% {
    transform: translateY(0);
    color: var(--color-accent-gold);
  }
`,Ni=vr.span`
  display: inline-block;
  animation: ${Ri} ${e=>e.duration||3}s infinite;
  animation-delay: ${e=>.15*e.index}s;
  position: relative;
  
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    color: var(--color-accent-red);
    opacity: 0.7;
    transform: translateX(1px);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    animation: glitch-slice 3s infinite alternate;
  }
  
  @keyframes glitch-slice {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translateX(1px);
    }
    50% {
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
      transform: translateX(-1px);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translateX(1px);
    }
  }
`,Oi=vr.span`
  color: var(--color-accent-gold);
`,Ii=e=>{let{text:n,fontSize:r}=e;const o=n.split(" ");return(0,br.jsx)(zi,{fontSize:r,children:o.map((e,n)=>(0,br.jsxs)(t.Fragment,{children:[(0,br.jsx)(Ni,{index:n,duration:n%3+3,"data-text":e,children:e}),n<o.length-1&&(0,br.jsx)(Oi,{children:" "})]},n))})},Mi=vr.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 4rem;
  position: relative;
`,Li=vr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Di=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin: 0;
`,Fi=vr.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`,Ai=vr.canvas`
  width: 100%;
  height: 100%;
`,$i=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`,Ui=vr.button`
  background-color: rgba(10, 10, 10, 0.7);
  color: var(--color-accent-gold);
  border: 1px solid var(--color-accent-gold);
  border-radius: 4px;
  padding: 8px 15px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: black;
  }
  
  &.active {
    background-color: var(--color-accent-red);
    color: white;
    border-color: var(--color-accent-red);
  }
`,Hi=vr.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(10, 10, 10, 0.8);
  color: var(--color-accent-gold);
  padding: 8px 15px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  border: 1px solid var(--color-accent-gold);
  backdrop-filter: blur(5px);
  z-index: 10;
`,Wi=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
`,Vi=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-top: 0;
  margin-bottom: 1rem;
`,Bi=()=>{const e=(0,t.useRef)(null),[n,r]=(0,t.useState)("glass"),[o,a]=(0,t.useState)(.5),[i,l]=(0,t.useState)(!0),[s,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(!1),f=(0,t.useRef)([]),p=(0,t.useRef)(null),h=(0,t.useRef)(0);(0,t.useEffect)(()=>{const t=()=>{const e=["rgba(255, 50, 50, 0.8)","rgba(50, 200, 255, 0.8)","rgba(255, 200, 50, 0.8)","rgba(50, 255, 100, 0.8)","rgba(212, 175, 55, 0.8)"];return e[Math.floor(Math.random()*e.length)]};return(()=>{const r=e.current;if(!r)return;r.getContext("2d");const o=r.width,a=r.height,i=[];if("crystal"===n){const e=Math.floor(Math.sqrt(180)),n=o/e,r=a/e;for(let o=0;o<e;o++)for(let a=0;a<e;a++){const e=.1,l=(o+.5+(Math.random()*e-e/2))*n,s=(a+.5+(Math.random()*e-e/2))*r;i.push({x:l,y:s,baseX:l,baseY:s,radius:3+Math.random(),color:t(),vx:.2*(Math.random()-.5),vy:.2*(Math.random()-.5),bonds:[],fixed:!0,lastHop:0,hopProbability:.001,stress:0,type:Math.random()<.8?"A":"B"})}}else for(let e=0;e<180;e++)i.push({x:Math.random()*o,y:Math.random()*a,baseX:null,baseY:null,radius:2.5+1.5*Math.random(),color:t(),vx:(Math.random()-.5)*("liquid"===n?1:.3),vy:(Math.random()-.5)*("liquid"===n?1:.3),bonds:[],fixed:"glass"===n&&Math.random()<.4,lastHop:0,hopProbability:"glass"===n?.005+.015*Math.random():0,stress:0,type:Math.random()<.7?"A":"B"});f.current=i})(),()=>{p.current&&cancelAnimationFrame(p.current)}},[n]),(0,t.useEffect)(()=>{if(!i)return;const t=e.current;if(!t)return;const r=t.getContext("2d"),a=()=>{const e=t.parentElement;t.width=e.clientWidth,t.height=e.clientHeight};a(),window.addEventListener("resize",a);const l=()=>{h.current+=1;const e=t.width,a=t.height;if(r.clearRect(0,0,e,a),"crystal"===n){r.strokeStyle="rgba(255, 255, 255, 0.05)",r.lineWidth=.5;const t=Math.floor(Math.sqrt(f.current.length)),n=e/t,o=a/t;for(let i=0;i<=t;i++)r.beginPath(),r.moveTo(i*n,0),r.lineTo(i*n,a),r.stroke(),r.beginPath(),r.moveTo(0,i*o),r.lineTo(e,i*o),r.stroke()}const i=f.current;if("glass"===n||"crystal"===n)for(let t=0;t<i.length;t++){i[t].bonds=[],i[t].stress=0;for(let e=t+1;e<i.length;e++){const r=i[e].x-i[t].x,o=i[e].y-i[t].y,a=Math.sqrt(r*r+o*o);if(a<("crystal"===n?40:30)){i[t].bonds.push(e);const r="crystal"===n?30:25,o=Math.abs(a-r)/r;i[t].stress+=o,i[e].stress+=o}}}r.lineWidth=1;for(let t=0;t<i.length;t++){const e=i[t];for(const t of e.bonds){const o=i[t];if(!("glass"===n&&Math.random()<.3)){if(r.beginPath(),r.moveTo(e.x,e.y),r.lineTo(o.x,o.y),"crystal"===n)r.strokeStyle="rgba(212, 175, 55, 0.4)";else if("glass"===n)if(u){const t=(e.stress+o.stress)/2,n=`rgba(${Math.min(255,100+400*t)}, ${Math.max(0,200-400*t)}, 50, 0.5)`;r.strokeStyle=n}else r.strokeStyle="rgba(255, 255, 255, 0.2)";r.stroke()}}}for(let t=0;t<i.length;t++){const l=i[t];switch(n){case"glass":if(!l.fixed&&(l.x+=l.vx*(.5*o),l.y+=l.vy*(.5*o),Math.random()<.01&&(l.vx=.5*(Math.random()-.5),l.vy=.5*(Math.random()-.5)),s)){const e=Date.now();if(e-l.lastHop>2e3&&Math.random()<l.hopProbability*o){const t=20+20*Math.random(),n=Math.random()*Math.PI*2,o=l.x+Math.cos(n)*t,a=l.y+Math.sin(n)*t,i=r.createLinearGradient(l.x,l.y,o,a);i.addColorStop(0,l.color),i.addColorStop(1,"rgba(255, 255, 255, 0)"),r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(o,a),r.strokeStyle=i,r.lineWidth=2,r.stroke(),l.x=o,l.y=a,l.lastHop=e}}break;case"liquid":l.x+=l.vx*(2*o),l.y+=l.vy*(2*o),Math.random()<.05&&(l.vx=2*(Math.random()-.5),l.vy=2*(Math.random()-.5));break;case"crystal":if(null!==l.baseX){const e=2*o;l.x=l.baseX+Math.sin(.05*h.current+t)*e,l.y=l.baseY+Math.sin(.05*h.current+t+2)*e}}l.x<0&&(l.x=e),l.x>e&&(l.x=0),l.y<0&&(l.y=a),l.y>a&&(l.y=0),r.beginPath(),r.arc(l.x,l.y,l.radius,0,2*Math.PI);let c=l.color;if(u&&"liquid"!==n){const e=Math.min(1,l.stress/2);c=`rgba(${Math.min(255,100+400*e)}, ${Math.max(0,200-400*e)}, 50, 0.8)`}r.fillStyle=c,r.fill();const d=r.createRadialGradient(l.x,l.y,0,l.x,l.y,3*l.radius);d.addColorStop(0,c),d.addColorStop(1,"rgba(0, 0, 0, 0)"),r.beginPath(),r.arc(l.x,l.y,3*l.radius,0,2*Math.PI),r.fillStyle=d,r.fill()}p.current=requestAnimationFrame(l)};return l(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(p.current)}},[i,n,o,s,u]);const m=e=>{r(e)},g=e=>{a(t=>{const n=t+e;return Math.max(.1,Math.min(1,n))})};return(0,br.jsxs)(Mi,{children:[(0,br.jsxs)(Li,{children:[(0,br.jsx)(Di,{children:"Molecular Dynamics Simulation"}),(0,br.jsx)(Ii,{text:"Visualizing Phase Transitions in Materials",fontSize:"1rem"})]}),(0,br.jsxs)(Fi,{children:[(0,br.jsx)(Ai,{ref:e}),(0,br.jsxs)(Hi,{children:["Phase: ",n.charAt(0).toUpperCase()+n.slice(1)," | Temperature: ",Math.round(100*o),"%"]})]}),(0,br.jsxs)($i,{children:[(0,br.jsx)(Ui,{className:"glass"===n?"active":"",onClick:()=>m("glass"),children:"Glass Phase"}),(0,br.jsx)(Ui,{className:"liquid"===n?"active":"",onClick:()=>m("liquid"),children:"Liquid Phase"}),(0,br.jsx)(Ui,{className:"crystal"===n?"active":"",onClick:()=>m("crystal"),children:"Crystal Phase"}),(0,br.jsx)(Ui,{onClick:()=>g(.1),children:"Temperature +"}),(0,br.jsx)(Ui,{onClick:()=>g(-.1),children:"Temperature -"}),(0,br.jsx)(Ui,{className:s?"active":"",onClick:()=>{c(e=>!e)},children:s?"Hide Hopping":"Show Hopping"}),(0,br.jsx)(Ui,{className:u?"active":"",onClick:()=>{d(e=>!e)},children:u?"Hide Stress":"Show Stress"}),(0,br.jsx)(Ui,{onClick:()=>{l(e=>!e)},children:i?"Pause":"Play"})]}),(0,br.jsxs)(Wi,{children:[(0,br.jsx)(Vi,{children:"About This Simulation"}),(0,br.jsx)("p",{children:"This interactive molecular dynamics simulation demonstrates the structural differences between crystalline, glass, and liquid phases of materials. The visualization shows how atomic arrangement and mobility change across different phases."}),(0,br.jsx)("p",{children:(()=>{switch(n){case"glass":return"Glass is an amorphous solid with no long-range order. Particles are randomly arranged but have limited mobility, with occasional 'hopping' between positions.";case"liquid":return"In the liquid phase, particles move freely and continuously, with no fixed positions. The structure is disordered with only short-range correlations.";case"crystal":return"Crystalline solids have particles arranged in a regular, repeating pattern. Particles vibrate around fixed lattice positions with amplitude increasing with temperature.";default:return""}})()}),(0,br.jsxs)("p",{children:[(0,br.jsx)("strong",{children:"Controls:"})," Toggle between phases, adjust temperature, and enable special visualizations like atomic hopping (a key mechanism in glass dynamics) and local stress distribution (shown through color intensity)."]})]})]})},Gi=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,qi=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.2;
`,Ki=vr.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`,Qi=vr.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`,Yi=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
`,Xi=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent-gold);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(to bottom, var(--color-accent-red), var(--color-accent-gold));
    transition: height 0.3s ease;
  }
  
  &:hover::before {
    height: 100%;
  }
`,Zi=vr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,Ji=vr.div`
  font-size: 2.5rem;
  margin-right: 1rem;
`,el=vr.div`
  flex: 1;
`,tl=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`,nl=vr.p`
  opacity: 0.7;
  font-size: 0.9rem;
  font-family: var(--font-sans);
`,rl=vr.div`
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1.5rem;
`,ol=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`,al=vr.span`
  background-color: rgba(26, 26, 26, 0.5);
  color: var(--color-accent-gold);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  font-family: var(--font-mono);
`,il=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transition: all 0.3s ease;
`,ll=vr.div`
  background-color: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 3rem;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  transform: ${e=>e.isOpen?"scale(1)":"scale(0.9)"};
  opacity: ${e=>e.isOpen?1:0};
  transition: all 0.3s ease;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--color-gray-dark);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--color-accent-gold);
    border-radius: 3px;
  }
`,sl=vr.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-accent-red);
  }
`,cl=vr.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--color-accent-gold);
  }
`,ul=vr.div`
  margin-bottom: 2rem;
`,dl=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,fl=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,pl=vr.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,hl=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 0.5rem;
  font-size: 1rem;
`,ml=vr.p`
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
`,gl=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(rgba(212, 175, 55, 0.1) 2px, transparent 2px),
    radial-gradient(rgba(255, 0, 0, 0.1) 2px, transparent 2px);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  z-index: -1;
  opacity: 0.2;
`;const vl=function(){const[e,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)([]),l=[{id:1,icon:"\ud83d\udd2c",title:"MOSFET Device Modeling",subtitle:"Semiconductor Physics Research",description:"Advanced modeling of MOSFET devices including quantum mechanical effects and nanoscale phenomena.",tags:["MOSFET","Device Physics","Quantum Mechanics","Simulation"],details:{objective:"Develop comprehensive models for MOSFET devices that account for quantum mechanical effects at nanoscale dimensions.",methodology:"Utilized quantum mechanical calculations combined with classical device physics to create hybrid models. Implemented numerical simulations using MATLAB and Python.",results:"Successfully developed models that show improved accuracy for sub-10nm devices. Achieved 15% better prediction accuracy compared to classical models.",applications:"These models can be used for next-generation semiconductor device design and optimization.",publications:[{title:"Quantum Effects in Nanoscale MOSFET Devices",journal:"Journal of Applied Physics (In Preparation)",year:"2024",authors:"S. Wong, et al."}]}},{id:2,icon:"\u269b\ufe0f",title:"Quantum Transport Studies",subtitle:"Theoretical Physics",description:"Investigation of quantum transport phenomena in low-dimensional semiconductor structures.",tags:["Quantum Transport","Semiconductors","Theoretical Physics","Nanostructures"],details:{objective:"Study quantum transport mechanisms in low-dimensional semiconductor structures and their applications.",methodology:"Theoretical analysis using quantum mechanical formalism, numerical calculations, and comparison with experimental data.",results:"Identified key quantum transport mechanisms affecting device performance. Developed theoretical framework for predicting transport properties.",applications:"Results applicable to quantum devices, sensors, and next-generation electronics.",publications:[{title:"Quantum Transport in Low-Dimensional Structures",journal:"Physical Review B (Under Review)",year:"2024",authors:"S. Wong, et al."}]}},{id:3,icon:"\ud83e\uddea",title:"Materials Characterization",subtitle:"Experimental Physics",description:"Comprehensive characterization of novel semiconductor materials for electronic applications.",tags:["Materials Science","Characterization","Semiconductors","Electronic Properties"],details:{objective:"Characterize electronic and optical properties of novel semiconductor materials.",methodology:"Used various characterization techniques including I-V measurements, spectroscopy, and microscopy.",results:"Identified promising materials with enhanced electronic properties. Established structure-property relationships.",applications:"Materials suitable for high-performance electronic devices and optoelectronic applications.",publications:[{title:"Electronic Properties of Novel Semiconductor Materials",journal:"Applied Physics Letters (In Preparation)",year:"2024",authors:"S. Wong, et al."}]}},{id:4,icon:"\ud83d\udcbb",title:"Computational Physics Tools",subtitle:"Software Development",description:"Development of computational tools for physics simulations and educational purposes.",tags:["Computational Physics","Simulation","Software Development","Education"],details:{objective:"Create user-friendly computational tools for physics education and research.",methodology:"Developed interactive simulations using modern web technologies and scientific computing libraries.",results:"Created several interactive tools including MOSFET simulator and circuit builder. Tools used by students and researchers.",applications:"Educational tools for physics courses and research applications.",publications:[{title:"Interactive Physics Simulations for Education",journal:"Computer Physics Communications (Planned)",year:"2024",authors:"S. Wong"}]}},{id:5,icon:"\ud83d\udcca",title:"Data Analysis & Visualization",subtitle:"Research Methodology",description:"Advanced data analysis techniques for experimental physics research.",tags:["Data Analysis","Visualization","Statistics","Research Methods"],details:{objective:"Develop advanced data analysis methods for complex physics datasets.",methodology:"Applied statistical analysis, machine learning techniques, and advanced visualization methods.",results:"Improved data analysis efficiency by 40%. Developed new visualization techniques for complex datasets.",applications:"Methods applicable to various physics research areas and experimental data analysis.",publications:[{title:"Advanced Data Analysis in Physics Research",journal:"Review of Scientific Instruments (Planned)",year:"2024",authors:"S. Wong, et al."}]}},{id:6,icon:"\ud83c\udf1f",title:"Future Research Directions",subtitle:"Ongoing Projects",description:"Exploring emerging areas in quantum computing and advanced materials.",tags:["Quantum Computing","Future Technology","Innovation","Research Planning"],details:{objective:"Explore applications of quantum mechanics in next-generation computing and materials.",methodology:"Literature review, theoretical analysis, and preliminary experimental work.",results:"Identified promising research directions. Established collaborations with leading research groups.",applications:"Potential applications in quantum computing, advanced sensors, and novel electronic devices.",publications:[{title:"Quantum Technologies: Future Perspectives",journal:"Nature Reviews Physics (Planned)",year:"2025",authors:"S. Wong, et al."}]}}];(0,t.useEffect)(()=>{const e=setTimeout(()=>{i(l.map(e=>e.id))},100);return()=>clearTimeout(e)},[]);const s=()=>{o(!1),document.body.style.overflow="auto"};return(0,br.jsxs)(Gi,{children:[(0,br.jsx)(qi,{}),(0,br.jsx)(gl,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(Ki,{className:"glitch","data-text":"RESEARCH",children:"RESEARCH"}),(0,br.jsx)(Qi,{children:"Explore my research portfolio in semiconductor physics, quantum mechanics, and materials science. Each project represents a step towards understanding the fundamental principles that govern electronic devices and quantum phenomena."}),(0,br.jsx)(Bi,{}),(0,br.jsx)(Yi,{children:l.map((e,t)=>(0,br.jsxs)(Xi,{onClick:()=>(n(e),o(!0),void(document.body.style.overflow="hidden")),className:a.includes(e.id)?"fade-in":"",style:{animationDelay:.1*t+"s",transform:a.includes(e.id)?"translateY(0)":"translateY(20px)",opacity:a.includes(e.id)?1:0,transition:"transform 0.5s ease, opacity 0.5s ease"},children:[(0,br.jsxs)(Zi,{children:[(0,br.jsx)(Ji,{children:e.icon}),(0,br.jsxs)(el,{children:[(0,br.jsx)(tl,{children:e.title}),(0,br.jsx)(nl,{children:e.subtitle})]})]}),(0,br.jsx)(rl,{children:e.description}),(0,br.jsx)(ol,{children:e.tags.map((e,t)=>(0,br.jsx)(al,{children:e},t))})]},e.id))}),(0,br.jsx)(il,{isOpen:r,onClick:s,children:(0,br.jsx)(ll,{isOpen:r,onClick:e=>e.stopPropagation(),children:e&&(0,br.jsxs)(br.Fragment,{children:[(0,br.jsx)(sl,{onClick:s,children:"\xd7"}),(0,br.jsx)(cl,{children:e.title}),(0,br.jsxs)(ul,{children:[(0,br.jsx)(dl,{children:"Research Objective"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.objective})]}),(0,br.jsxs)(ul,{children:[(0,br.jsx)(dl,{children:"Methodology"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.methodology})]}),(0,br.jsxs)(ul,{children:[(0,br.jsx)(dl,{children:"Key Results"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.results})]}),(0,br.jsxs)(ul,{children:[(0,br.jsx)(dl,{children:"Applications"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.applications})]}),e.details.publications&&(0,br.jsxs)(ul,{children:[(0,br.jsx)(dl,{children:"Publications"}),(0,br.jsx)(fl,{children:e.details.publications.map((e,t)=>(0,br.jsxs)(pl,{children:[(0,br.jsx)(hl,{children:e.title}),(0,br.jsxs)(ml,{children:[e.journal," (",e.year,")"]}),(0,br.jsxs)(ml,{children:["Authors: ",e.authors]})]},t))})]}),(0,br.jsx)(ol,{children:e.tags.map((e,t)=>(0,br.jsx)(al,{children:e},t))})]})})})]})]})},yl=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,bl=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.2;
`,xl=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(rgba(212, 175, 55, 0.1) 2px, transparent 2px),
    radial-gradient(rgba(255, 0, 0, 0.1) 2px, transparent 2px);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  z-index: -1;
  opacity: 0.2;
`,wl=vr.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`,Sl=vr.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`,kl=vr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,El=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,jl=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,Cl=vr.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`,Pl=vr.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    background-color: rgba(26, 26, 26, 0.7);
  }
`,Tl=vr.div`
  font-size: 2rem;
  margin-right: 1.5rem;
  color: var(--color-accent-gold);
`,_l=vr.div`
  flex: 1;
`,zl=vr.div`
  color: var(--color-accent-gold);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
`,Rl=vr.div`
  opacity: 0.8;
  line-height: 1.4;
`,Nl=vr.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`,Ol=vr.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  color: var(--color-text);
  text-decoration: none;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
    transform: translateY(-3px);
  }
`,Il=vr.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ml=vr.div`
  display: flex;
  flex-direction: column;
`,Ll=vr.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-accent-gold);
  font-family: var(--font-mono);
`,Dl=vr.input`
  padding: 1rem;
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: var(--font-sans);
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-gold);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Fl=vr.textarea`
  padding: 1rem;
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--color-text);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: var(--font-sans);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-gold);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Al=vr.button`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.7s;
  }
  
  &:hover::before {
    left: 100%;
  }
`,$l=vr.div`
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 5px;
  padding: 1rem;
  color: #4caf50;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--font-mono);
`,Ul=vr.div`
  background-color: rgba(244, 67, 54, 0.1);
  border: 1px solid rgba(244, 67, 54, 0.3);
  border-radius: 5px;
  padding: 1rem;
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--font-mono);
`,Hl=vr.div`
  margin-top: 2rem;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 200px;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=');
    opacity: 0.5;
  }
`,Wl=vr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-accent-red);
  font-size: 2rem;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`,Vl=vr.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(10, 10, 10, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
`,Bl=vr.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,Gl=vr.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
`,ql=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Kl=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,Ql=vr.div`
  display: flex;
  gap: 0.5rem;
`,Yl=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,Xl=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,Zl=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,Jl=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,es=vr.span`
  color: var(--color-text);
`,ts=vr.div`
  display: flex;
  align-items: center;
`,ns=vr.div`
  width: 8px;
  height: 16px;
  background-color: var(--color-accent-gold);
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    from, to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;const rs=function(){const[e,n]=(0,t.useState)({name:"",email:"",subject:"",message:""}),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)([]),[d,f]=(0,t.useState)(""),[p,h]=(0,t.useState)(0),[m,g]=(0,t.useState)(0),v=[{prompt:"$",text:"ssh sherman@physics-lab.hk"},{prompt:">",text:"Password: ********"},{prompt:">",text:"Welcome to Sherman Wong's Research Server"},{prompt:"$",text:"cat contact_info.txt"},{prompt:">",text:"Email: available upon request"},{prompt:">",text:"Location: Hong Kong Polytechnic University"},{prompt:">",text:"Department: Applied Physics"},{prompt:"$",text:'echo "Feel free to reach out for research collaborations!"'}];(0,t.useEffect)(()=>{if(p<v.length){const e=v[p];if(m<e.text.length){const t=setTimeout(()=>{f(t=>t+e.text[m]),g(m+1)},50*Math.random()+30);return()=>clearTimeout(t)}{const t=setTimeout(()=>{u([...c,{prompt:e.prompt,text:e.text}]),f(""),g(0),h(p+1)},500);return()=>clearTimeout(t)}}},[p,m,c]);const y=t=>{n({...e,[t.target.name]:t.target.value})};return(0,br.jsxs)(yl,{children:[(0,br.jsx)(bl,{}),(0,br.jsx)(xl,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(wl,{className:"glitch","data-text":"CONTACT",children:"CONTACT"}),(0,br.jsx)(Sl,{children:"Interested in my research or potential collaborations? Feel free to reach out using the form below or through any of the provided contact methods."}),(0,br.jsxs)(kl,{children:[(0,br.jsxs)(El,{children:[(0,br.jsx)(Cl,{children:"Contact Information"}),[{icon:"\ud83c\udf93",label:"Institution",value:"The Hong Kong Polytechnic University\nDepartment of Applied Physics"},{icon:"\ud83c\udf0d",label:"Location",value:"Hong Kong SAR"},{icon:"\ud83d\udce7",label:"Email",value:"Available upon request\n(Please use contact form)"},{icon:"\ud83d\udd2c",label:"Research Areas",value:"Semiconductor Physics\nQuantum Mechanics\nDevice Modeling"}].map((e,t)=>(0,br.jsxs)(Pl,{className:"fade-in",style:{animationDelay:.1*t+"s"},children:[(0,br.jsx)(Tl,{children:e.icon}),(0,br.jsxs)(_l,{children:[(0,br.jsx)(zl,{children:e.label}),(0,br.jsx)(Rl,{children:e.value.split("\n").map((e,t)=>(0,br.jsx)("div",{children:e},t))})]})]},t)),(0,br.jsxs)(Hl,{children:[(0,br.jsx)(Wl,{children:"\ud83d\udccd"}),(0,br.jsx)(Vl,{children:"Hong Kong Polytechnic University"})]}),(0,br.jsxs)(Nl,{children:[(0,br.jsx)(Ol,{href:"#",title:"LinkedIn",children:"\ud83d\udcbc"}),(0,br.jsx)(Ol,{href:"#",title:"ResearchGate",children:"\ud83d\udd2c"}),(0,br.jsx)(Ol,{href:"#",title:"GitHub",children:"\ud83d\udcbb"}),(0,br.jsx)(Ol,{href:"#",title:"Google Scholar",children:"\ud83c\udf93"})]})]}),(0,br.jsxs)(jl,{children:[(0,br.jsx)(Cl,{children:"Send a Message"}),(0,br.jsxs)(Il,{onSubmit:async e=>{e.preventDefault(),o(!0);try{await new Promise(e=>setTimeout(e,1500)),i(!0),n({name:"",email:"",subject:"",message:""}),setTimeout(()=>{i(!1)},5e3)}catch(t){s(!0),setTimeout(()=>{s(!1)},5e3)}finally{o(!1)}},children:[(0,br.jsxs)(Ml,{children:[(0,br.jsx)(Ll,{htmlFor:"name",children:"Name *"}),(0,br.jsx)(Dl,{type:"text",id:"name",name:"name",value:e.name,onChange:y,placeholder:"Your full name",required:!0})]}),(0,br.jsxs)(Ml,{children:[(0,br.jsx)(Ll,{htmlFor:"email",children:"Email *"}),(0,br.jsx)(Dl,{type:"email",id:"email",name:"email",value:e.email,onChange:y,placeholder:"your.email@example.com",required:!0})]}),(0,br.jsxs)(Ml,{children:[(0,br.jsx)(Ll,{htmlFor:"subject",children:"Subject *"}),(0,br.jsx)(Dl,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:y,placeholder:"Research collaboration, questions, etc.",required:!0})]}),(0,br.jsxs)(Ml,{children:[(0,br.jsx)(Ll,{htmlFor:"message",children:"Message *"}),(0,br.jsx)(Fl,{id:"message",name:"message",value:e.message,onChange:y,placeholder:"Please describe your inquiry, research interests, or collaboration ideas...",required:!0})]}),(0,br.jsx)(Al,{type:"submit",disabled:r,children:r?"Sending...":"Send Message"}),a&&(0,br.jsx)($l,{children:"\u2705 Thank you for your message! I'll get back to you soon."}),l&&(0,br.jsx)(Ul,{children:"\u274c There was an error sending your message. Please try again."})]})]})]}),(0,br.jsxs)(Bl,{children:[(0,br.jsx)(Cl,{children:"Terminal"}),(0,br.jsxs)(Gl,{children:[(0,br.jsxs)(ql,{children:[(0,br.jsx)(Kl,{children:"sherman@physics-lab:~"}),(0,br.jsxs)(Ql,{children:[(0,br.jsx)(Yl,{color:"var(--color-accent-red)"}),(0,br.jsx)(Yl,{color:"var(--color-accent-gold)"}),(0,br.jsx)(Yl,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(Xl,{children:[c.map((e,t)=>(0,br.jsxs)(Zl,{children:[(0,br.jsx)(Jl,{children:e.prompt}),(0,br.jsx)(es,{children:e.text})]},t)),p<v.length&&(0,br.jsxs)(ts,{children:[(0,br.jsx)(Jl,{children:v[p].prompt}),(0,br.jsx)(es,{children:d}),(0,br.jsx)(ns,{})]})]})]})]})]})]})},os=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,as=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.2;
`,is=vr.h1`
  font-family: var(--font-mono);
  font-size: clamp(5rem, 15vw, 12rem);
  margin-bottom: 1rem;
  position: relative;
  color: var(--color-text);
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    left: 2px;
    text-shadow: -2px 0 var(--color-accent-red);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  
  &::after {
    left: -2px;
    text-shadow: -2px 0 var(--color-accent-gold);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
`,ls=vr.h2`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  color: var(--color-accent-gold);
`,ss=vr.p`
  max-width: 600px;
  margin: 0 auto 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
  line-height: 1.6;
`,cs=vr(Ce)`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.7s;
  }
  
  &:hover::before {
    left: 100%;
  }
`,us=vr.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 3rem auto 0;
`,ds=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fs=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,ps=vr.div`
  display: flex;
  gap: 0.5rem;
`,hs=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,ms=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,gs=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,vs=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,ys=vr.span`
  color: var(--color-text);
`,bs=vr.div`
  display: flex;
  align-items: center;
`,xs=vr.div`
  width: 8px;
  height: 16px;
  background-color: var(--color-accent-gold);
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    from, to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;const ws=function(){const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(""),[a,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(0),c=[{prompt:"$",text:"locate page"},{prompt:">",text:"Error: Page not found (404)"},{prompt:"$",text:"run diagnostics"},{prompt:">",text:"The requested URL does not exist on this server."},{prompt:"$",text:"suggest_action"},{prompt:">",text:"Recommended action: Return to homepage"},{prompt:"$",text:"cd /"}];return(0,t.useEffect)(()=>{if(a<c.length){const t=c[a];if(l<t.text.length){const e=setTimeout(()=>{o(e=>e+t.text[l]),s(l+1)},50*Math.random()+30);return()=>clearTimeout(e)}{const r=setTimeout(()=>{n([...e,{prompt:t.prompt,text:t.text}]),o(""),s(0),i(a+1)},500);return()=>clearTimeout(r)}}},[a,l,e]),(0,br.jsxs)(os,{children:[(0,br.jsx)(as,{}),(0,br.jsx)(is,{"data-text":"404",children:"404"}),(0,br.jsx)(ls,{children:"PAGE NOT FOUND"}),(0,br.jsx)(ss,{children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL or return to the homepage."}),(0,br.jsx)(cs,{to:"/",children:"Return to Homepage"}),(0,br.jsxs)(us,{children:[(0,br.jsxs)(ds,{children:[(0,br.jsx)(fs,{children:"error-diagnostics:~"}),(0,br.jsxs)(ps,{children:[(0,br.jsx)(hs,{color:"var(--color-accent-red)"}),(0,br.jsx)(hs,{color:"var(--color-accent-gold)"}),(0,br.jsx)(hs,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(ms,{children:[e.map((e,t)=>(0,br.jsxs)(gs,{children:[(0,br.jsx)(vs,{children:e.prompt}),(0,br.jsx)(ys,{children:e.text})]},t)),a<c.length&&(0,br.jsxs)(bs,{children:[(0,br.jsx)(vs,{children:c[a].prompt}),(0,br.jsx)(ys,{children:r}),(0,br.jsx)(xs,{})]})]})]})]})},Ss=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,ks=vr.div`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: 2rem;
  color: var(--color-text);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`,Es=vr.div`
  width: 300px;
  height: 2px;
  background-color: var(--color-gray-light);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.progress}%;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    transition: width 0.3s ease;
  }
`,js=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  margin-top: 1rem;
  color: var(--color-text);
  opacity: 0.7;
`,Cs=vr.div`
  position: absolute;
  bottom: 2rem;
  font-family: var(--font-mono);
  font-style: italic;
  color: var(--color-accent-gold);
  opacity: 0.7;
  text-align: center;
  max-width: 80%;
`,Ps=()=>{const[e,n]=(0,t.useState)(0),[r,o]=(0,t.useState)("Initializing..."),a=["01010111 01100001 01101011 01101001 01101110 01100111...","DECRYPTING QUANTUM ENTANGLEMENTS...","INITIALIZING SCHR\xd6DINGER PROTOCOLS...","LOADING PARALLEL UNIVERSES... 42%","CALIBRATING HEISENBERG COMPENSATORS...","BOOTSTRAPPING REALITY.EXE...","\u03c8 = \u03a3 \u03b1\u2099|n\u27e9 ... SUPERPOSITION LOADING..."],[i,l]=(0,t.useState)(a[Math.floor(Math.random()*a.length)]);return(0,t.useEffect)(()=>{const e=["Initializing...","Loading quantum states...","Calculating wave functions...","Simulating electron transport...","Optimizing circuit parameters...","Calibrating MOSFET models...","Ready!"];let t=0;const r=setInterval(()=>{if(t>=100)return void clearInterval(r);const a=Math.floor(10*Math.random())+1;t=Math.min(t+a,100),n(t);const i=Math.floor(t/100*(e.length-1));o(e[i])},150);return()=>clearInterval(r)},[]),(0,br.jsxs)(Ss,{children:[(0,br.jsx)(ks,{className:"glitch","data-text":"SHERMAN WONG",children:"SHERMAN WONG"}),(0,br.jsx)(Es,{progress:e}),(0,br.jsx)(js,{children:r}),(0,br.jsx)(Cs,{children:i})]})},Ts=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,_s=vr.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: var(--color-accent-red);
  }
`,zs=vr.canvas`
  border: 2px solid var(--color-accent-red);
  background-color: var(--color-bg);
  max-width: 800px;
  width: 100%;
  height: 400px;
`,Rs=vr.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,Ns=vr.p`
  font-family: var(--font-mono);
  color: var(--color-text);
  margin-top: 1rem;
  text-align: center;
  max-width: 600px;
`,Os=vr.div`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.5rem;
  margin-top: 1rem;
`,Is=e=>{let{onClose:n}=e;const r=(0,t.useRef)(null),[o,a]=(0,t.useState)(0);return(0,t.useEffect)(()=>{const e=r.current,t=e.getContext("2d");e.width=e.offsetWidth,e.height=e.offsetHeight;const n={x:50,y:e.height/2,width:60,height:30,speed:0,acceleration:.2,maxSpeed:8,deceleration:.1,color:"#FF0000"};let o=[];const i={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1};let l;window.addEventListener("keydown",e=>{i.hasOwnProperty(e.key)&&(i[e.key]=!0)}),window.addEventListener("keyup",e=>{i.hasOwnProperty(e.key)&&(i[e.key]=!1)});let s=0;const c=()=>{t.clearRect(0,0,e.width,e.height),t.fillStyle="#0A0A0A",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#FFFFFF",t.setLineDash([5,15]),t.beginPath(),t.moveTo(0,e.height/2),t.lineTo(e.width,e.height/2),t.stroke(),i.ArrowUp&&(n.y-=5),i.ArrowDown&&(n.y+=5),i.ArrowRight?n.speed=Math.min(n.speed+n.acceleration,n.maxSpeed):i.ArrowLeft?n.speed=Math.max(n.speed-n.acceleration,0):n.speed=Math.max(n.speed-n.deceleration,0),n.y=Math.max(0,Math.min(e.height-n.height,n.y)),s%100===0&&(()=>{const t=Math.random()*(e.height-200);o.push({x:e.width,y:0,width:20,height:t,passed:!1}),o.push({x:e.width,y:t+200,width:20,height:e.height-t-200,passed:!1})})(),o=o.filter(e=>(e.x-=5,!e.passed&&e.x+e.width<n.x&&(e.passed=!0,a(e=>e+1)),n.x<e.x+e.width&&n.x+n.width>e.x&&n.y<e.y+e.height&&n.y+n.height>e.y?(cancelAnimationFrame(l),!1):e.x+e.width>0)),o.forEach(e=>{t.fillStyle="#FFFFFF",t.fillRect(e.x,e.y,e.width,e.height)}),t.fillStyle=n.color,t.fillRect(n.x,n.y,n.width,n.height),t.fillStyle="#000000",t.fillRect(n.x+10,n.y-5,10,5),t.fillRect(n.x+40,n.y-5,10,5),t.fillRect(n.x+10,n.y+n.height,10,5),t.fillRect(n.x+40,n.y+n.height,10,5),t.fillStyle="#FFCC00",t.fillRect(n.x+25,n.y+10,10,10),t.fillStyle="#FFFFFF",t.font="14px monospace",t.fillText(`Speed: ${Math.floor(30*n.speed)} km/h`,20,30),s++,l=requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",()=>{}),window.removeEventListener("keyup",()=>{})}},[]),(0,br.jsxs)(Ts,{children:[(0,br.jsx)(_s,{onClick:n,children:"\xd7"}),(0,br.jsx)(Rs,{children:"Ferrari F1 Challenge"}),(0,br.jsx)(zs,{ref:r}),(0,br.jsxs)(Os,{children:["Score: ",o]}),(0,br.jsx)(Ns,{children:"Use arrow keys to control the Ferrari F1 car. \u2191 and \u2193 to move up and down. \u2192 to accelerate, \u2190 to decelerate. Avoid the obstacles!"})]})},Ms=yr`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ls=yr`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`,Ds=yr`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`,Fs=(vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  
  &::after {
    content: '🏎️';
    position: fixed;
    font-size: 2rem;
    animation: ${Ds} 1s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: 1000;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
  }
`,vr.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(10, 10, 10, 0.9);
  border: 1px solid ${e=>"ferrari"===e.type?"var(--color-accent-red)":"var(--color-accent-gold)"};
  border-radius: 5px;
  padding: 1rem;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  max-width: 300px;
  z-index: 1000;
  animation: ${e=>e.show?Ms:Ls} 0.5s forwards;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`),As=vr.h4`
  color: ${e=>"ferrari"===e.type?"var(--color-accent-red)":"var(--color-accent-gold)"};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$s=vr.span`
  font-size: 1.2rem;
`,Us=vr.p`
  opacity: 0.8;
  line-height: 1.5;
`,Hs=vr.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;vr.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 0, 0, 0.9);
  border: 1px solid var(--color-accent-red);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: white;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 1001;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${Ms} 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(255, 0, 0, 0.3);
  
  &::before {
    content: '🏎️';
    font-size: 1rem;
  }
`;const Ws=function(){const[e,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)({ferrari:!1,konami:!1}),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)(!1),d=[{id:"ferrari",title:"\u03a3\u2207\u2207\u2207 \u2207\u2207\u2207\u2207\u2207",icon:"\u26a1",text:"\u03a6 \u2192 \u2207\u2207\u2207\u2207\u2207\u2207 \u2207\u2207\u2207\u2207\u2207\u2207\u2207\u2207\u2207"},{id:"konami",title:"\u2207\u2207\u2207\u2207\u2207\u2207 \u2207\u2207\u2207\u2207",icon:"\u269b\ufe0f",text:"\u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192\u0392\u0391 \u2192 \u2207\u2207\u2207\u2207\u2207\u2207\u2207"},{id:"ferrari-active",title:"Quantum State: |1\u27e9",icon:"\u26a1",text:"Velocity vector engaged. \u03a6 to decouple."},{id:"ferrari-deactivated",title:"Quantum State: |0\u27e9",icon:"\u26a1",text:"System returned to ground state."}];return(0,t.useEffect)(()=>{const e=e=>{if("f"===e.key||"F"===e.key){const e=!document.body.classList.contains("ferrari-cursor");s(e),u(!0),setTimeout(()=>u(!1),1e3);const t=e?"ferrari-active":"ferrari-deactivated",r=d.find(e=>e.id===t);n(r),o(!0),setTimeout(()=>{o(!1)},3e3)}};return window.addEventListener("keypress",e),()=>window.removeEventListener("keypress",e)},[d]),(0,t.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,18e5));const e=localStorage.getItem("ferrari-hint-last-shown"),t=new Date(Date.now()-2592e6);a.ferrari||e&&!(new Date(e)<t)||(n(d[0]),o(!0),localStorage.setItem("ferrari-hint-last-shown",(new Date).toISOString()),await new Promise(e=>setTimeout(e,2e3)),o(!1),await new Promise(e=>setTimeout(e,1e3))),await new Promise(e=>setTimeout(e,36e5));const r=localStorage.getItem("konami-hint-last-shown"),i=new Date(Date.now()-7776e6);a.konami||r&&!(new Date(r)<i)||(n(d[1]),o(!0),localStorage.setItem("konami-hint-last-shown",(new Date).toISOString()),await new Promise(e=>setTimeout(e,2e3)),o(!1))})()},[a,d]),e?(0,br.jsxs)(Fs,{show:r,type:e.id,children:[(0,br.jsx)(Hs,{onClick:()=>{o(!1),e&&i(t=>({...t,[e.id]:!0}))},children:"\xd7"}),(0,br.jsxs)(As,{type:e.id,children:[(0,br.jsx)($s,{children:e.icon}),e.title]}),(0,br.jsx)(Us,{children:e.text})]}):null};const Vs=function(){const[e,n]=(0,t.useState)(!0),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)([]),l=[38,38,40,40,37,39,37,39,66,65];return(0,t.useEffect)(()=>{const e=setTimeout(()=>{n(!1)},2e3),t=e=>{i(t=>{const n=[...t,e.keyCode];return n.length>l.length&&n.shift(),n.join("")===l.join("")&&o(!0),n})};return window.addEventListener("keydown",t),()=>{clearTimeout(e),window.removeEventListener("keydown",t)}},[]),(0,t.useEffect)(()=>{const e=e=>{"f"!==e.key&&"F"!==e.key||document.body.classList.toggle("ferrari-cursor")};return window.addEventListener("keypress",e),()=>{window.removeEventListener("keypress",e)}},[]),e?(0,br.jsx)(Ps,{}):(0,br.jsxs)(ke,{children:[(0,br.jsx)("div",{className:"noise"}),(0,br.jsx)(Tr,{}),(0,br.jsxs)(ve,{children:[(0,br.jsx)(me,{path:"/",element:(0,br.jsx)(Io,{})}),(0,br.jsx)(me,{path:"/about",element:(0,br.jsx)(ja,{})}),(0,br.jsx)(me,{path:"/mosfet",element:(0,br.jsx)(Xa,{})}),(0,br.jsx)(me,{path:"/circuit",element:(0,br.jsx)(_i,{})}),(0,br.jsx)(me,{path:"/research",element:(0,br.jsx)(vl,{})}),(0,br.jsx)(me,{path:"/contact",element:(0,br.jsx)(rs,{})}),(0,br.jsx)(me,{path:"*",element:(0,br.jsx)(ws,{})})]}),(0,br.jsx)(Wr,{}),(0,br.jsx)(Ws,{}),r&&(0,br.jsx)(Is,{onClose:()=>o(!1)})]})};o.createRoot(document.getElementById("root")).render((0,br.jsx)(t.StrictMode,{children:(0,br.jsx)(Vs,{})}))})()})();
//# sourceMappingURL=main.de010146.js.map