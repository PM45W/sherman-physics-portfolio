/*! For license information please see main.51977a38.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:k.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function M(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+j(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),M(i,t,o,"",function(e){return e})):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+j(l=e[c],c);s+=M(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=M(l=l.value,t,o,u=a+j(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return M(e,r,"","",function(e){return t.call(n,e,o++)}),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},z={transition:null},O={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)S.call(t,c)&&!E.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,x(e),!m)if(null!==r(c))m=!0,z(S);else{var t=r(u);null!==t&&O(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(_),_=-1),h=!0;var a=p;try{for(x(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!M());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&o(c),x(n)}else o(c);f=r(c)}if(null!==f)var s=!0;else{var d=r(u);null!==d&&O(w,d.startTime-n),s=!1}return s}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,C=null,_=-1,N=5,j=-1;function M(){return!(t.unstable_now()-j<N)}function P(){if(null!==C){var e=t.unstable_now();j=e;var n=!0;try{n=C(!0,e)}finally{n?k():(E=!1,C=null)}}else E=!1}if("function"===typeof b)k=function(){b(P)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,R=T.port2;T.port1.onmessage=P,k=function(){R.postMessage(null)}}else k=function(){v(P,0)};function z(e){C=e,E||(E=!0,k())}function O(e,n){_=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,z(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(y(_),_=-1):g=!0,O(w,a-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,z(S))),e},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},330:(e,t,n)=>{"use strict";var r=n(43);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=r.useState,i=r.useEffect,l=r.useLayoutEffect,s=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return l(function(){o.value=n,o.getSnapshot=t,c(o)&&u({inst:o})},[e,n,t]),i(function(){return c(o)&&u({inst:o}),e(function(){c(o)&&u({inst:o})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},443:(e,t,n)=>{"use strict";e.exports=n(717)},461:(e,t,n)=>{"use strict";e.exports=n(330)},579:(e,t,n)=>{"use strict";e.exports=n(153)},717:(e,t,n)=>{"use strict";var r=n(43),o=n(461);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=o.useSyncExternalStore,l=r.useRef,s=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var d=l(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!s){if(s=!0,i=e,e=r(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return l=t}return l=e}if(t=l,a(i,e))return t;var n=r(e);return void 0!==o&&o(t,n)?(i=e,t):(i=e,l=n)}var i,l,s=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,o]);var p=i(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var A,D=Object.assign;function L(e){if(void 0===A)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var $=!1;function F(e,t){if(!e||$)return"";$=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{$=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function B(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case E:return"StrictMode";case M:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case j:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=U(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Q(e,t){Z(e,t);var n=U(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,U(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+U(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:U(n)}}function ae(e,t){var n=U(t.value),r=U(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function Ce(e){if(e=xo(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function _e(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function Ne(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function je(e,t){return e(t)}function Me(){}var Pe=!1;function Te(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return je(e,t,n)}finally{Pe=!1,(null!==ke||null!==Ee)&&(Me(),Ne())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var r=So(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var ze=!1;if(u)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(ue){ze=!1}function Ie(e,t,n,r,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ae=!1,De=null,Le=!1,$e=null,Fe={onError:function(e){Ae=!0,De=e}};function Be(e,t,n,r,o,a,i,l,s){Ae=!1,De=null,Ie.apply(Fe,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ue(e){if(He(e)!==e)throw Error(a(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ue(o),e;if(i===r)return Ue(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Xe=o.unstable_cancelCallback,qe=o.unstable_shouldYield,Ge=o.unstable_requestPaint,Ze=o.unstable_now,Qe=o.unstable_getCurrentPriorityLevel,Je=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~o;0!==l?r=dt(l):0!==(a&=i)&&(r=dt(a))}else 0!==(i=n&~o)?r=dt(i):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-it(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,Ct,_t=!1,Nt=[],jt=null,Mt=null,Pt=null,Tt=new Map,Rt=new Map,zt=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function At(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Dt(e){var t=bo(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ve(n)))return e.blockedOn=t,void Ct(e.priority,function(){kt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function $t(e,t,n){Lt(e)&&n.delete(t)}function Ft(){_t=!1,null!==jt&&Lt(jt)&&(jt=null),null!==Mt&&Lt(Mt)&&(Mt=null),null!==Pt&&Lt(Pt)&&(Pt=null),Tt.forEach($t),Rt.forEach($t)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ft)))}function Ht(e){function t(t){return Bt(t,e)}if(0<Nt.length){Bt(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==jt&&Bt(jt,e),null!==Mt&&Bt(Mt,e),null!==Pt&&Bt(Pt,e),Tt.forEach(t),Rt.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Dt(n),null===n.blockedOn&&zt.shift()}var Vt=x.ReactCurrentBatchConfig,Ut=!0;function Wt(e,t,n,r){var o=bt,a=Vt.transition;Vt.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=o,Vt.transition=a}}function Yt(e,t,n,r){var o=bt,a=Vt.transition;Vt.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=o,Vt.transition=a}}function Kt(e,t,n,r){if(Ut){var o=qt(e,t,n,r);if(null===o)Ur(e,t,r,Xt,n),It(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return jt=At(jt,e,t,n,r,o),!0;case"dragenter":return Mt=At(Mt,e,t,n,r,o),!0;case"mouseover":return Pt=At(Pt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Tt.set(a,At(Tt.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Rt.set(a,At(Rt.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&wt(a),null===(a=qt(e,t,n,r))&&Ur(e,t,r,Xt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Ur(e,t,r,null,n)}}var Xt=null;function qt(e,t,n,r){if(Xt=null,null!==(e=bo(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Zt=null,Qt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Qt,r=n.length,o="value"in Zt?Zt.value:Zt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return Jt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=D({},cn,{view:0,detail:0}),fn=on(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(D({},pn,{dataTransfer:0})),gn=on(D({},dn,{relatedTarget:0})),vn=on(D({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),xn=on(D({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Cn(){return En}var _n=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nn=on(_n),jn=on(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Mn=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Pn=on(D({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=on(Tn),zn=[9,13,27,32],On=u&&"CompositionEvent"in window,In=null;u&&"documentMode"in document&&(In=document.documentMode);var An=u&&"TextEvent"in window&&!In,Dn=u&&(!On||In&&8<In&&11>=In),Ln=String.fromCharCode(32),$n=!1;function Fn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Vn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Vn[e.type]:"textarea"===t}function Wn(e,t,n,r){_e(r),0<(t=Yr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Xn(e){Lr(e,0)}function qn(e){if(K(wo(e)))return e}function Gn(e,t){if("change"===e)return t}var Zn=!1;if(u){var Qn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Qn=Jn}else Qn=!1;Zn=Qn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&qn(Kn)){var t=[];Wn(t,Kn,e,we(e)),Te(Xn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Kn)}function ar(e,t){if("click"===e)return qn(t)}function ir(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=ur(n,a);var i=ur(n,r);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==X(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function Cr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}u&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var _r=Cr("animationend"),Nr=Cr("animationiteration"),jr=Cr("animationstart"),Mr=Cr("transitionend"),Pr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){Pr.set(e,t),s(t,[e])}for(var zr=0;zr<Tr.length;zr++){var Or=Tr[zr];Rr(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}Rr(_r,"onAnimationEnd"),Rr(Nr,"onAnimationIteration"),Rr(jr,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Mr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ar=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,l,s,c){if(Be.apply(this,arguments),Ae){if(!Ae)throw Error(a(198));var u=De;Ae=!1,De=null,Le||(Le=!0,$e=u)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Dr(o,l,c),a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Dr(o,l,c),a=s}}}if(Le)throw e=$e,Le=!1,$e=null,e}function $r(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Vr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Vr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Br]){e[Br]=!0,i.forEach(function(t){"selectionchange"!==t&&(Ar.has(t)||Fr(t,!1,e),Fr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Fr("selectionchange",!1,t))}}function Vr(e,t,n,r){switch(Gt(t)){case 1:var o=Wt;break;case 4:o=Yt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ur(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=bo(l)))return;if(5===(s=i.tag)||6===s){r=a=i;continue e}l=l.parentNode}}r=r.return}Te(function(){var r=a,o=we(n),i=[];e:{var l=Pr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Nn;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Mn;break;case _r:case Nr:case jr:s=vn;break;case Mr:s=Pn;break;case"scroll":s=fn;break;case"wheel":s=Rn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=jn}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Re(h,f))&&u.push(Wr(h,m,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,o),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!bo(c)&&!c[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?bo(c):null)&&(c!==(d=He(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=jn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==c?l:wo(c),(l=new u(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,bo(o)===r&&((u=new u(f,h+"enter",c,n,o)).target=p,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(f=c,h=0,p=u=s;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)u=Kr(u),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=Kr(u),f=Kr(f)}u=null}else u=null;null!==s&&Xr(i,l,s,u,!1),null!==c&&null!==d&&Xr(i,d,c,u,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Un(l))if(Zn)g=ir;else{g=or;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?Wn(i,g,n,o):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wo(r):window,e){case"focusin":(Un(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(i,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,o)}var y;if(On)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hn?Fn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Dn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Hn&&(y=en()):(Qt="value"in(Zt=o)?Zt.value:Zt.textContent,Hn=!0)),0<(v=Yr(r,b)).length&&(b=new xn(b,e,null,n,o),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Bn(n))&&(b.data=y))),(y=An?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:($n=!0,Ln);case"textInput":return(e=t.data)===Ln&&$n?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!On&&Fn(e,t)?(e=en(),Jt=Qt=Zt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=y))}Lr(i,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Re(e,n))&&r.unshift(Wr(e,a,o)),null!=(a=Re(e,t))&&r.push(Wr(e,a,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xr(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=Re(n,a))&&i.unshift(Wr(n,s,l)):o||null!=(s=Re(n,a))&&i.push(Wr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var qr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Zr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Gr,"")}function Qr(e,t,n){if(t=Zr(t),Zr(e)!==t&&n)throw Error(a(425))}function Jr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout(function(){throw e})}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ht(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,vo="__reactListeners$"+fo,yo="__reactHandles$"+fo;function bo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[po])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function So(e){return e[ho]||null}var ko=[],Eo=-1;function Co(e){return{current:e}}function _o(e){0>Eo||(e.current=ko[Eo],ko[Eo]=null,Eo--)}function No(e,t){Eo++,ko[Eo]=e.current,e.current=t}var jo={},Mo=Co(jo),Po=Co(!1),To=jo;function Ro(e,t){var n=e.type.contextTypes;if(!n)return jo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Oo(){_o(Po),_o(Mo)}function Io(e,t,n){if(Mo.current!==jo)throw Error(a(168));No(Mo,t),No(Po,n)}function Ao(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,V(e)||"Unknown",o));return D({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jo,To=Mo.current,No(Mo,e),No(Po,Po.current),!0}function Lo(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ao(e,t,To),r.__reactInternalMemoizedMergedChildContext=e,_o(Po),_o(Mo),No(Mo,e)):_o(Po),No(Po,n)}var $o=null,Fo=!1,Bo=!1;function Ho(e){null===$o?$o=[e]:$o.push(e)}function Vo(){if(!Bo&&null!==$o){Bo=!0;var e=0,t=bt;try{var n=$o;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}$o=null,Fo=!1}catch(o){throw null!==$o&&($o=$o.slice(e+1)),Ke(Je,Vo),o}finally{bt=t,Bo=!1}}return null}var Uo=[],Wo=0,Yo=null,Ko=0,Xo=[],qo=0,Go=null,Zo=1,Qo="";function Jo(e,t){Uo[Wo++]=Ko,Uo[Wo++]=Yo,Yo=e,Ko=t}function ea(e,t,n){Xo[qo++]=Zo,Xo[qo++]=Qo,Xo[qo++]=Go,Go=e;var r=Zo;e=Qo;var o=32-it(r)-1;r&=~(1<<o),n+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Zo=1<<32-it(t)+o|n<<o|r,Qo=a+e}else Zo=1<<a|n<<o|r,Qo=e}function ta(e){null!==e.return&&(Jo(e,1),ea(e,1,0))}function na(e){for(;e===Yo;)Yo=Uo[--Wo],Uo[Wo]=null,Ko=Uo[--Wo],Uo[Wo]=null;for(;e===Go;)Go=Xo[--qo],Xo[qo]=null,Qo=Xo[--qo],Xo[qo]=null,Zo=Xo[--qo],Xo[qo]=null}var ra=null,oa=null,aa=!1,ia=null;function la(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Go?{id:Zo,overflow:Qo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function ca(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(aa){var t=oa;if(t){var n=t;if(!sa(e,t)){if(ca(e))throw Error(a(418));t=co(n.nextSibling);var r=ra;t&&sa(e,t)?la(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ca(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function fa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(ca(e))throw pa(),Error(a(418));for(;t;)la(e,t),t=co(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?co(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=oa;e;)e=co(e.nextSibling)}function ha(){oa=ra=null,aa=!1}function ma(e){null===ia?ia=[e]:ia.push(e)}var ga=x.ReactCurrentBatchConfig;function va(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=zc(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Dc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===R&&ba(a)===t.type)?((r=o(t,n.props)).ref=va(e,t,n),r.return=e,r):((r=Oc(n.type,n.key,n.props,null,e.mode,r)).ref=va(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Lc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Ic(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Dc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Oc(t.type,t.key,t.props,null,e.mode,n)).ref=va(e,null,t),n.return=e,n;case S:return(t=Lc(t,e.mode,n)).return=e,t;case R:return f(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Ic(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case S:return n.key===o?u(e,t,n,r):null;case R:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||I(n))return null!==o?null:d(e,t,n,r,null);ya(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case R:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,o,null);ya(t,r)}return null}function m(o,a,l,s){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return n(o,d),aa&&Jo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===u?c=d:u.sibling=d,u=d);return aa&&Jo(o,m),c}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(o,e)}),aa&&Jo(o,m),c}function g(o,l,s,c){var u=I(s);if("function"!==typeof u)throw Error(a(150));if(null==(s=u.call(s)))throw Error(a(151));for(var d=u=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,c);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,m=v}if(y.done)return n(o,m),aa&&Jo(o,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(o,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return aa&&Jo(o,g),u}for(m=r(o,m);!y.done;g++,y=s.next())null!==(y=h(m,o,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(o,e)}),aa&&Jo(o,g),u}return function e(r,a,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=a;null!==u;){if(u.key===c){if((c=i.type)===k){if(7===u.tag){n(r,u.sibling),(a=o(u,i.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===R&&ba(c)===u.type){n(r,u.sibling),(a=o(u,i.props)).ref=va(r,u,i),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}i.type===k?((a=Ic(i.props.children,r.mode,s,i.key)).return=r,r=a):((s=Oc(i.type,i.key,i.props,null,r.mode,s)).ref=va(r,a,i),s.return=r,r=s)}return l(r);case S:e:{for(u=i.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){n(r,a.sibling),(a=o(a,i.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Lc(i,r.mode,s)).return=r,r=a}return l(r);case R:return e(r,a,(u=i._init)(i._payload),s)}if(te(i))return m(r,a,i,s);if(I(i))return g(r,a,i,s);ya(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(n(r,a.sibling),(a=o(a,i)).return=r,r=a):(n(r,a),(a=Dc(i,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var wa=xa(!0),Sa=xa(!1),ka=Co(null),Ea=null,Ca=null,_a=null;function Na(){_a=Ca=Ea=null}function ja(e){var t=ka.current;_o(ka),e._currentValue=t}function Ma(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){Ea=e,_a=Ca=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ta(e){var t=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:t,next:null},null===Ca){if(null===Ea)throw Error(a(308));Ca=e,Ea.dependencies={lanes:0,firstContext:e}}else Ca=Ca.next=e;return t}var Ra=null;function za(e){null===Ra?Ra=[e]:Ra.push(e)}function Oa(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,za(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ia(e,r)}function Ia(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Aa=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $a(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&js)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ia(e,n)}return null===(o=r.interleaved)?(t.next=t,za(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ia(e,n)}function Ba(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var o=e.updateQueue;Aa=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:Aa=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,i|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);As|=i,e.lanes=i,e.memoizedState=d}}function Ua(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(a(191,o));o.call(r)}}}var Wa={},Ya=Co(Wa),Ka=Co(Wa),Xa=Co(Wa);function qa(e){if(e===Wa)throw Error(a(174));return e}function Ga(e,t){switch(No(Xa,t),No(Ka,e),No(Ya,Wa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}_o(Ya),No(Ya,t)}function Za(){_o(Ya),_o(Ka),_o(Xa)}function Qa(e){qa(Xa.current);var t=qa(Ya.current),n=se(t,e.type);t!==n&&(No(Ka,e),No(Ya,n))}function Ja(e){Ka.current===e&&(_o(Ya),_o(Ka))}var ei=Co(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var oi=x.ReactCurrentDispatcher,ai=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,fi=0,pi=0;function hi(){throw Error(a(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Ji:el,e=n(r,o),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(a(301));i+=1,ci=si=null,t.updateQueue=null,oi.current=tl,e=n(r,o)}while(di)}if(oi.current=Qi,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(a(300));return e}function vi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=si,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,li.lanes|=d,As|=d}u=u.next}while(null!==u&&u!==i);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{i=o.lane,li.lanes|=i,As|=i,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=bi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Ei(e,t){var n=li,r=bi(),o=t(),i=!lr(r.memoizedState,o);if(i&&(r.memoizedState=o,bl=!0),r=r.queue,Ai(Ni.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(n.flags|=2048,Ti(9,_i.bind(null,n,r,o,t),void 0,null),null===Ms)throw Error(a(349));0!==(30&ii)||Ci(n,t,o)}return o}function Ci(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function _i(e,t,n,r){t.value=n,t.getSnapshot=r,ji(t)&&Mi(e)}function Ni(e,t,n){return n(function(){ji(t)&&Mi(e)})}function ji(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Mi(e){var t=Ia(e,1);null!==t&&nc(t,e,1,-1)}function Pi(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Xi.bind(null,li,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ri(){return bi().memoizedState}function zi(e,t,n,r){var o=yi();li.flags|=e,o.memoizedState=Ti(1|t,n,void 0,void 0===r?null:r)}function Oi(e,t,n,r){var o=bi();r=void 0===r?null:r;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==r&&mi(r,i.deps))return void(o.memoizedState=Ti(t,n,a,r))}li.flags|=e,o.memoizedState=Ti(1|t,n,a,r)}function Ii(e,t){return zi(8390656,8,e,t)}function Ai(e,t){return Oi(2048,8,e,t)}function Di(e,t){return Oi(4,2,e,t)}function Li(e,t){return Oi(4,4,e,t)}function $i(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oi(4,4,$i.bind(null,t,e),n)}function Bi(){}function Hi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ui(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,As|=n,e.baseState=!0),t)}function Wi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{bt=n,ai.transition=r}}function Yi(){return bi().memoizedState}function Ki(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e))Gi(t,n);else if(null!==(n=Oa(e,t,n,r))){nc(n,e,r,ec()),Zi(n,t,r)}}function Xi(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Gi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(o.next=o,za(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Oa(e,t,o,r))&&(nc(n,e,r,o=ec()),Zi(n,t,r))}}function qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ui=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Qi={readContext:Ta,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Ji={readContext:Ta,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Ta,useEffect:Ii,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zi(4194308,4,$i.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ki.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Pi,useDebugValue:Bi,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Pi(!1),t=e[0];return e=Wi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,o=yi();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ms)throw Error(a(349));0!==(30&ii)||Ci(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ii(Ni.bind(null,r,i,e),[e]),r.flags|=2048,Ti(9,_i.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=Ms.identifierPrefix;if(aa){var n=Qo;t=":"+t+"R"+(n=(Zo&~(1<<32-it(Zo)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ta,useCallback:Hi,useContext:Ta,useEffect:Ai,useImperativeHandle:Fi,useInsertionEffect:Di,useLayoutEffect:Li,useMemo:Vi,useReducer:wi,useRef:Ri,useState:function(){return wi(xi)},useDebugValue:Bi,useDeferredValue:function(e){return Ui(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Yi,unstable_isNewReconciler:!1},tl={readContext:Ta,useCallback:Hi,useContext:Ta,useEffect:Ai,useImperativeHandle:Fi,useInsertionEffect:Di,useLayoutEffect:Li,useMemo:Vi,useReducer:Si,useRef:Ri,useState:function(){return Si(xi)},useDebugValue:Bi,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Ui(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Yi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=$a(r,o);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,o))&&(nc(t,e,o,r),Ba(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=$a(r,o);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,o))&&(nc(t,e,o,r),Ba(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=$a(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Fa(e,o,r))&&(nc(t,e,r,n),Ba(t,e,r))}};function al(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,a))}function il(e,t,n){var r=!1,o=jo,a=t.contextType;return"object"===typeof a&&null!==a?a=Ta(a):(o=zo(t)?To:Mo.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ro(e,o):jo),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Da(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=Ta(a):(a=zo(t)?To:Mo.current,o.context=Ro(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Va(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var o=n}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=$a(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Us||(Us=!0,Ws=r),dl(0,t)},n}function hl(e,t,n){(n=$a(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=$a(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var yl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?Sa(t,null,n,r):wa(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var a=t.ref;return Pa(t,o),r=gi(e,t,n,r,a,o),n=vi(),null===e||bl?(aa&&n&&ta(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ul(e,t,o))}function Sl(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||Rc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Oc(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,kl(e,t,a,r,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Ul(e,t,o)}return t.flags|=1,(e=zc(a,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=a,0===(e.lanes&o))return t.lanes=e.lanes,Ul(e,t,o);0!==(131072&e.flags)&&(bl=!0)}}return _l(e,t,n,r,o)}function El(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},No(zs,Rs),Rs|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,No(zs,Rs),Rs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,No(zs,Rs),Rs|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,No(zs,Rs),Rs|=r;return xl(e,t,o,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,o){var a=zo(n)?To:Mo.current;return a=Ro(t,a),Pa(t,o),n=gi(e,t,n,r,a,o),r=vi(),null===e||bl?(aa&&r&&ta(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ul(e,t,o))}function Nl(e,t,n,r,o){if(zo(n)){var a=!0;Do(t)}else a=!1;if(Pa(t,o),null===t.stateNode)Vl(e,t),il(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ta(c):c=Ro(t,c=zo(n)?To:Mo.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,i,r,c),Aa=!1;var f=t.memoizedState;i.state=f,Va(t,r,i,o),s=t.memoizedState,l!==r||f!==s||Po.current||Aa?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Aa||al(t,n,l,r,f,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,La(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),i.props=c,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ta(s):s=Ro(t,s=zo(n)?To:Mo.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Aa=!1,f=t.memoizedState,i.state=f,Va(t,r,i,o);var h=t.memoizedState;l!==d||f!==h||Po.current||Aa?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=Aa||al(t,n,c,r,f,h,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return jl(e,t,n,r,a,o)}function jl(e,t,n,r,o,a){Cl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return o&&Lo(t,n,!1),Ul(e,t,a);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):xl(e,t,l,a),t.memoizedState=r.state,o&&Lo(t,n,!0),t.child}function Ml(e){var t=e.stateNode;t.pendingContext?Io(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Io(0,t.context,!1),Ga(e,t.containerInfo)}function Pl(e,t,n,r,o){return ha(),ma(o),t.flags|=256,xl(e,t,n,r),t.child}var Tl,Rl,zl,Ol,Il={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dl(e,t,n){var r,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),No(ei,1&i),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Ac(s,o,0,null),e=Ic(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Al(n),t.memoizedState=Il,e):Ll(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,l){if(n)return 256&t.flags?(t.flags&=-257,$l(e,t,l,r=ul(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ac({mode:"visible",children:r.children},o,0,null),(i=Ic(i,o,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Il,i);if(0===(1&t.mode))return $l(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,$l(e,t,l,r=ul(i=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=Ms)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,Ia(e,o),nc(r,e,o,-1))}return mc(),$l(e,t,l,r=ul(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Nc.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=co(o.nextSibling),ra=t,aa=!0,ia=null,null!==e&&(Xo[qo++]=Zo,Xo[qo++]=Qo,Xo[qo++]=Go,Zo=e.id,Qo=e.overflow,Go=t),t=Ll(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,i,n);if(l){l=o.fallback,s=t.mode,r=(i=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=zc(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=zc(r,l):(l=Ic(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Al(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Il,o}return e=(l=e.child).sibling,o=zc(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ll(e,t){return(t=Ac({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function $l(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Ll(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ma(e.return,t,n)}function Bl(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Hl(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fl(e,n,t);else if(19===e.tag)Fl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(No(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bl(t,!0,n,null,a);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ul(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),As|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=zc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wl(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return zo(t.type)&&Oo(),Yl(t),null;case 3:return r=t.stateNode,Za(),_o(Po),_o(Mo),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(ic(ia),ia=null))),Rl(e,t),Yl(t),null;case 5:Ja(t);var o=qa(Xa.current);if(n=t.type,null!==e&&null!=t.stateNode)zl(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Yl(t),null}if(e=qa(Ya.current),fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[po]=t,r[ho]=i,e=0!==(1&t.mode),n){case"dialog":$r("cancel",r),$r("close",r);break;case"iframe":case"object":case"embed":$r("load",r);break;case"video":case"audio":for(o=0;o<Ir.length;o++)$r(Ir[o],r);break;case"source":$r("error",r);break;case"img":case"image":case"link":$r("error",r),$r("load",r);break;case"details":$r("toggle",r);break;case"input":G(r,i),$r("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$r("invalid",r);break;case"textarea":oe(r,i),$r("invalid",r)}for(var s in ye(n,i),o=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==i.suppressHydrationWarning&&Qr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Qr(r.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&$r("scroll",r)}switch(n){case"input":Y(r),J(r,i,!0);break;case"textarea":Y(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Jr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":$r("cancel",e),$r("close",e),o=r;break;case"iframe":case"object":case"embed":$r("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ir.length;o++)$r(Ir[o],e);o=r;break;case"source":$r("error",e),o=r;break;case"img":case"image":case"link":$r("error",e),$r("load",e),o=r;break;case"details":$r("toggle",e),o=r;break;case"input":G(e,r),o=q(e,r),$r("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=D({},r,{value:void 0}),$r("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),$r("invalid",e)}for(i in ye(n,o),c=o)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&$r("scroll",e):null!=u&&b(e,i,u,s))}switch(n){case"input":Y(e),J(e,r,!1);break;case"textarea":Y(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+U(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Ol(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=qa(Xa.current),qa(Ya.current),fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(i=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Qr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Qr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Yl(t),null;case 13:if(_o(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ha(),t.flags|=98560,i=!1;else if(i=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[po]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),i=!1}else null!==ia&&(ic(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Os&&(Os=3):mc())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return Za(),Rl(e,t),null===e&&Hr(t.stateNode.containerInfo),Yl(t),null;case 10:return ja(t.type._context),Yl(t),null;case 19:if(_o(ei),null===(i=t.memoizedState))return Yl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Wl(i,!1);else{if(0!==Os||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Wl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return No(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Ze()>Hs&&(t.flags|=128,r=!0,Wl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return Yl(t),null}else 2*Ze()-i.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ze(),t.sibling=null,n=ei.current,No(ei,r?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Rs)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Xl(e,t){switch(na(t),t.tag){case 1:return zo(t.type)&&Oo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Za(),_o(Po),_o(Mo),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(_o(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return _o(ei),null;case 4:return Za(),null;case 10:return ja(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},zl=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,qa(Ya.current);var a,i=null;switch(n){case"input":o=q(e,o),r=q(e,r),i=[];break;case"select":o=D({},o,{value:void 0}),r=D({},r,{value:void 0}),i=[];break;case"textarea":o=re(e,o),r=re(e,r),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in ye(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&$r("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},Ol=function(e,t,n,r){n!==r&&(t.flags|=4)};var ql=!1,Gl=!1,Zl="function"===typeof WeakSet?WeakSet:Set,Ql=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ec(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Ec(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,n,a)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Gl||Jl(n,t);case 6:var r=us,o=ds;us=null,fs(e,t,n),ds=o,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Ht(e)):so(us,n.stateNode));break;case 4:r=us,o=ds,us=n.stateNode.containerInfo,ds=!0,fs(e,t,n),us=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(n,t,i),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ec(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zl),t.forEach(function(t){var r=jc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(a(160));ps(i,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){Ec(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Ec(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Ec(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Ec(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&Z(o,i),be(s,l);var u=be(s,i);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):b(o,d,f,u)}switch(s){case"input":Q(o,i);break;case"textarea":ae(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(o,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(o,!!i.multiple,i.defaultValue,!0):ne(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(g){Ec(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){Ec(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Ec(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(Bs=Ze())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(u=Gl)||d,ms(t,e),Gl=u):ms(t,e),vs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Ql=e,d=e.child;null!==d;){for(f=Ql=d;null!==Ql;){switch(h=(p=Ql).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Ec(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Ql=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,u?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){Ec(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Ec(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){Ec(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Ql=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Ql;){var o=Ql,a=o.child;if(22===o.tag&&r){var i=null!==o.memoizedState||ql;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=ql;var c=Gl;if(ql=i,(Gl=s)&&!c)for(Ql=o;null!==Ql;)s=(i=Ql).child,22===i.tag&&null!==i.memoizedState?Ss(o):null!==s?(s.return=i,Ql=s):Ss(o);for(;null!==a;)Ql=a,bs(a,t,n),a=a.sibling;Ql=o,ql=l,Gl=c}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Ql=a):xs(e)}}function xs(e){for(;null!==Ql;){var t=Ql;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Ua(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ua(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(a(163))}Gl||512&t.flags&&os(t)}catch(p){Ec(t,t.return,p)}}if(t===e){Ql=null;break}if(null!==(n=t.sibling)){n.return=t.return,Ql=n;break}Ql=t.return}}function ws(e){for(;null!==Ql;){var t=Ql;if(t===e){Ql=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Ql=n;break}Ql=t.return}}function Ss(e){for(;null!==Ql;){var t=Ql;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Ec(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){Ec(t,o,s)}}var a=t.return;try{os(t)}catch(s){Ec(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){Ec(t,i,s)}}}catch(s){Ec(t,t.return,s)}if(t===e){Ql=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Ql=l;break}Ql=t.return}}var ks,Es=Math.ceil,Cs=x.ReactCurrentDispatcher,_s=x.ReactCurrentOwner,Ns=x.ReactCurrentBatchConfig,js=0,Ms=null,Ps=null,Ts=0,Rs=0,zs=Co(0),Os=0,Is=null,As=0,Ds=0,Ls=0,$s=null,Fs=null,Bs=0,Hs=1/0,Vs=null,Us=!1,Ws=null,Ys=null,Ks=!1,Xs=null,qs=0,Gs=0,Zs=null,Qs=-1,Js=0;function ec(){return 0!==(6&js)?Ze():-1!==Qs?Qs:Qs=Ze()}function tc(e){return 0===(1&e.mode)?1:0!==(2&js)&&0!==Ts?Ts&-Ts:null!==ga.transition?(0===Js&&(Js=mt()),Js):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nc(e,t,n,r){if(50<Gs)throw Gs=0,Zs=null,Error(a(185));vt(e,n,r),0!==(2&js)&&e===Ms||(e===Ms&&(0===(2&js)&&(Ds|=n),4===Os&&lc(e,Ts)),rc(e,r),1===n&&0===js&&0===(1&t.mode)&&(Hs=Ze()+500,Fo&&Vo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=ft(e,e===Ms?Ts:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Fo=!0,Ho(e)}(sc.bind(null,e)):Ho(sc.bind(null,e)),io(function(){0===(6&js)&&Vo()}),n=null;else{switch(xt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Mc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Qs=-1,Js=0,0!==(6&js))throw Error(a(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=ft(e,e===Ms?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=js;js|=2;var i=hc();for(Ms===e&&Ts===t||(Vs=null,Hs=Ze()+500,fc(e,t));;)try{yc();break}catch(s){pc(e,s)}Na(),Cs.current=i,js=o,null!==Ps?t=0:(Ms=null,Ts=0,t=Os)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t)throw n=Is,fc(e,0),lc(e,r),rc(e,Ze()),n;if(6===t)lc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!lr(a(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t))throw n=Is,fc(e,0),lc(e,r),rc(e,Ze()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Fs,Vs);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Bs+500-Ze())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,Fs,Vs),t);break}wc(e,Fs,Vs);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>o&&(o=l),r&=~i}if(r=o,10<(r=(120>(r=Ze()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,Fs,Vs),r);break}wc(e,Fs,Vs);break;default:throw Error(a(329))}}}return rc(e,Ze()),e.callbackNode===n?oc.bind(null,e):null}function ac(e,t){var n=$s;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Fs,Fs=n,null!==t&&ic(t)),e}function ic(e){null===Fs?Fs=e:Fs.push.apply(Fs,e)}function lc(e,t){for(t&=~Ls,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&js))throw Error(a(327));Sc();var t=ft(e,0);if(0===(1&t))return rc(e,Ze()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Is,fc(e,0),lc(e,t),rc(e,Ze()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fs,Vs),rc(e,Ze()),null}function cc(e,t){var n=js;js|=1;try{return e(t)}finally{0===(js=n)&&(Hs=Ze()+500,Fo&&Vo())}}function uc(e){null!==Xs&&0===Xs.tag&&0===(6&js)&&Sc();var t=js;js|=1;var n=Ns.transition,r=bt;try{if(Ns.transition=null,bt=1,e)return e()}finally{bt=r,Ns.transition=n,0===(6&(js=t))&&Vo()}}function dc(){Rs=zs.current,_o(zs)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Ps)for(n=Ps.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Oo();break;case 3:Za(),_o(Po),_o(Mo),ri();break;case 5:Ja(r);break;case 4:Za();break;case 13:case 19:_o(ei);break;case 10:ja(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ms=e,Ps=e=zc(e.current,null),Ts=Rs=t,Os=0,Is=null,Ls=Ds=As=0,Fs=$s=null,null!==Ra){for(t=0;t<Ra.length;t++)if(null!==(r=(n=Ra[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var i=a.next;a.next=o,r.next=i}n.pending=r}Ra=null}return e}function pc(e,t){for(;;){var n=Ps;try{if(Na(),oi.current=Qi,ui){for(var r=li.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,fi=0,_s.current=null,null===n||null===n.return){Os=1,Is=t,Ps=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=Ts,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(i,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(i,u,t),mc();break e}c=Error(a(426))}else if(aa&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ma(cl(c,s));break e}}i=c=cl(c,s),4!==Os&&(Os=2),null===$s?$s=[i]:$s.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ha(i,pl(0,c,t));break e;case 1:s=c;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ys||!Ys.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Ha(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xc(n)}catch(x){t=x,Ps===n&&null!==n&&(Ps=n=n.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Qi,null===e?Qi:e}function mc(){0!==Os&&3!==Os&&2!==Os||(Os=4),null===Ms||0===(268435455&As)&&0===(268435455&Ds)||lc(Ms,Ts)}function gc(e,t){var n=js;js|=2;var r=hc();for(Ms===e&&Ts===t||(Vs=null,fc(e,t));;)try{vc();break}catch(o){pc(e,o)}if(Na(),js=n,Cs.current=r,null!==Ps)throw Error(a(261));return Ms=null,Ts=0,Os}function vc(){for(;null!==Ps;)bc(Ps)}function yc(){for(;null!==Ps&&!qe();)bc(Ps)}function bc(e){var t=ks(e.alternate,e,Rs);e.memoizedProps=e.pendingProps,null===t?xc(e):Ps=t,_s.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Rs)))return void(Ps=n)}else{if(null!==(n=Xl(n,t)))return n.flags&=32767,void(Ps=n);if(null===e)return Os=6,void(Ps=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ps=t);Ps=t=e}while(null!==t);0===Os&&(Os=5)}function wc(e,t,n){var r=bt,o=Ns.transition;try{Ns.transition=null,bt=1,function(e,t,n,r){do{Sc()}while(null!==Xs);if(0!==(6&js))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,i),e===Ms&&(Ps=Ms=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Mc(tt,function(){return Sc(),null})),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ns.transition,Ns.transition=null;var l=bt;bt=1;var s=js;js|=4,_s.current=null,function(e,t){if(eo=Ut,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==i||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=l),p===i&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ut=!1,Ql=t;null!==Ql;)if(e=(t=Ql).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Ql=e;else for(;null!==Ql;){t=Ql;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){Ec(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Ql=e;break}Ql=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),Ut=!!eo,to=eo=null,e.current=n,ys(n,e,o),Ge(),js=s,bt=l,Ns.transition=i}else e.current=n;if(Ks&&(Ks=!1,Xs=e,qs=o),i=e.pendingLanes,0===i&&(Ys=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ze()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Us)throw Us=!1,e=Ws,Ws=null,e;0!==(1&qs)&&0!==e.tag&&Sc(),i=e.pendingLanes,0!==(1&i)?e===Zs?Gs++:(Gs=0,Zs=e):Gs=0,Vo()}(e,t,n,r)}finally{Ns.transition=o,bt=r}return null}function Sc(){if(null!==Xs){var e=xt(qs),t=Ns.transition,n=bt;try{if(Ns.transition=null,bt=16>e?16:e,null===Xs)var r=!1;else{if(e=Xs,Xs=null,qs=0,0!==(6&js))throw Error(a(331));var o=js;for(js|=4,Ql=e.current;null!==Ql;){var i=Ql,l=i.child;if(0!==(16&Ql.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Ql=u;null!==Ql;){var d=Ql;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Ql=f;else for(;null!==Ql;){var p=(d=Ql).sibling,h=d.return;if(as(d),d===u){Ql=null;break}if(null!==p){p.return=h,Ql=p;break}Ql=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Ql=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Ql=l;else e:for(;null!==Ql;){if(0!==(2048&(i=Ql).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Ql=y;break e}Ql=i.return}}var b=e.current;for(Ql=b;null!==Ql;){var x=(l=Ql).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Ql=x;else e:for(l=b;null!==Ql;){if(0!==(2048&(s=Ql).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Ec(s,s.return,S)}if(s===l){Ql=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Ql=w;break e}Ql=s.return}}if(js=o,Vo(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(S){}r=!0}return r}finally{bt=n,Ns.transition=t}}return!1}function kc(e,t,n){e=Fa(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function Ec(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ys||!Ys.has(r))){t=Fa(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ms===e&&(Ts&n)===n&&(4===Os||3===Os&&(130023424&Ts)===Ts&&500>Ze()-Bs?fc(e,0):Ls|=n),rc(e,t)}function _c(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ia(e,t))&&(vt(e,t,n),rc(e,n))}function Nc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_c(e,n)}function jc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),_c(e,n)}function Mc(e,t){return Ke(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new Pc(e,t,n,r)}function Rc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oc(e,t,n,r,o,i){var l=2;if(r=e,"function"===typeof e)Rc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Ic(n.children,o,i,t);case E:l=8,o|=8;break;case C:return(e=Tc(12,n,t,2|o)).elementType=C,e.lanes=i,e;case M:return(e=Tc(13,n,t,o)).elementType=M,e.lanes=i,e;case P:return(e=Tc(19,n,t,o)).elementType=P,e.lanes=i,e;case z:return Ac(n,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case N:l=9;break e;case j:l=11;break e;case T:l=14;break e;case R:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Tc(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Ic(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Ac(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Dc(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Lc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $c(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,o,a,i,l,s){return e=new $c(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Tc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(a),e}function Bc(e){if(!e)return jo;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(zo(n))return Ao(e,n,t)}return t}function Hc(e,t,n,r,o,a,i,l,s){return(e=Fc(n,r,!0,e,0,a,0,l,s)).context=Bc(null),n=e.current,(a=$a(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Fa(n,a,o),e.current.lanes=o,vt(e,o,r),rc(e,r),e}function Vc(e,t,n,r){var o=t.current,a=ec(),i=tc(o);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=$a(a,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(o,t,i))&&(nc(e,o,i,a),Ba(e,o,i)),i}function Uc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Po.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:Ml(t),ha();break;case 5:Qa(t);break;case 1:zo(t.type)&&Do(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;No(ka,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(No(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Dl(e,t,n):(No(ei,1&ei.current),null!==(e=Ul(e,t,n))?e.sibling:null);No(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),No(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Ul(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,aa&&0!==(1048576&t.flags)&&ea(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var o=Ro(t,Mo.current);Pa(t,n),o=gi(null,t,r,e,o,n);var i=vi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zo(r)?(i=!0,Do(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Da(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=jl(null,t,r,!0,i,n)):(t.tag=0,aa&&i&&ta(t),xl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Rc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===j)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),o){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Nl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,_l(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Nl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Ml(t),null===e)throw Error(a(387));r=t.pendingProps,o=(i=t.memoizedState).element,La(e,t),Va(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Pl(e,t,r,n,o=cl(Error(a(423)),t));break e}if(r!==o){t=Pl(e,t,r,n,o=cl(Error(a(424)),t));break e}for(oa=co(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,ia=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===o){t=Ul(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),null===e&&ua(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==i&&no(r,i)&&(t.flags|=32),Cl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ua(t),null;case 13:return Dl(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,No(ka,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===o.children&&!Po.current){t=Ul(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===i.tag){(c=$a(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,null!==(c=i.alternate)&&(c.lanes|=n),Ma(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Ma(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pa(t,n),r=r(o=Ta(o)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),Sl(e,t,r,o=nl(r.type,o),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Vl(e,t),t.tag=1,zo(r)?(e=!0,Do(t)):e=!1,Pa(t,n),il(t,r,o),sl(t,r,o,n),jl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return El(e,t,n)}throw Error(a(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}function qc(e){this._internalRoot=e}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Qc(){}function Jc(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=Uc(i);l.call(e)}}Vc(t,i,e,o)}else i=function(e,t,n,r,o){if(o){if("function"===typeof r){var a=r;r=function(){var e=Uc(i);a.call(e)}}var i=Hc(t,r,e,0,null,!1,0,"",Qc);return e._reactRootContainer=i,e[mo]=i.current,Hr(8===e.nodeType?e.parentNode:e),uc(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Uc(s);l.call(e)}}var s=Fc(e,0,!1,null,0,!1,0,"",Qc);return e._reactRootContainer=s,e[mo]=s.current,Hr(8===e.nodeType?e.parentNode:e),uc(function(){Vc(t,s,n,r)}),s}(n,t,e,o,r);return Uc(i)}qc.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Vc(e,t,null,null)},qc.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Vc(null,e,null,null)}),t[mo]=null}},qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Ze()),0===(6&js)&&(Hs=Ze()+500,Vo()))}break;case 13:uc(function(){var t=Ia(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Yc(e,1)}},St=function(e){if(13===e.tag){var t=Ia(e,134217728);if(null!==t)nc(t,e,134217728,ec());Yc(e,134217728)}},kt=function(e){if(13===e.tag){var t=tc(e),n=Ia(e,t);if(null!==n)nc(n,e,t,ec());Yc(e,t)}},Et=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(Q(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(a(90));K(r),Q(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},je=cc,Me=uc;var eu={usingClientEntryPoint:!1,Events:[xo,wo,So,_e,Ne,cc]},tu={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gc(e))throw Error(a(299));var n=!1,r="",o=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Fc(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Xc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Zc(t))throw Error(a(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hc(t,null,e,1,null!=n?n:null,o,0,i,l),e[mo]=t.current,Hr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qc(t)},t.render=function(e,t,n){if(!Zc(t))throw Error(a(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Zc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc(function(){Jc(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),o=n(391),a=n(950),i=n.t(a,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:i=!1}=o,u=a.history,h=e.Pop,m=null,g=v();function v(){return(u.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:h,location:x.location,delta:n})}function b(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,u.replaceState(l({},u.state,{idx:g}),""));let x={get action(){return h},get location(){return t(a,u)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(s,y),m=e,()=>{a.removeEventListener(s,y),m=null}},createHref:e=>n(a,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let o=f(x.location,t,n);r&&r(o,t),g=v()+1;let l=d(o,g),s=x.createHref(o);try{u.pushState(l,"",s)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(s)}i&&m&&m({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let o=f(x.location,t,n);r&&r(o,t),g=v();let a=d(o,g),l=x.createHref(o);u.replaceState(a,"",l),i&&m&&m({action:h,location:x.location,delta:0})},go:e=>u.go(e)};return x}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let o=R(("string"===typeof t?h(t):t).pathname||"/",n);if(null==o)return null;let a=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=T(o);i=M(a[l],e,r)}return i}function b(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=D([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),b(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:j(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))o(e,t,r);else o(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=x(r.join("/")),l=[];return l.push(...i.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const w=/^:[\w-]+$/,S=3,k=2,E=1,C=10,_=-2,N=e=>"*"===e;function j(e,t){let n=e.split("/"),r=n.length;return n.some(N)&&(r+=_),t&&(r+=k),n.filter(e=>!N(e)).reduce((e,t)=>e+(w.test(t)?S:""===t?E:C),r)}function M(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),i.push({params:o,pathname:D([a,u.pathname]),pathnameBase:L(D([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=D([a,u.pathnameBase]))}return i}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function T(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function O(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function I(e,t){let n=O(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function A(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=h(e):(o=l({},e),c(!o.pathname||!o.pathname.includes("?"),z("?","pathname","search",o)),c(!o.pathname||!o.pathname.includes("#"),z("#","pathname","hash",o)),c(!o.search||!o.search.includes("#"),z("#","search","hash",o)));let a,i=""===e||""===o.pathname,s=i?"/":o.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?h(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:$(r),hash:F(o)}}(o,a),d=s&&"/"!==s&&s.endsWith("/"),f=(i||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const D=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",F=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],V=(new Set(H),["get",...H]);new Set(V),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const W=t.createContext(null);const Y=t.createContext(null);const K=t.createContext(null);const X=t.createContext(null);const q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const G=t.createContext(null);function Z(){return null!=t.useContext(X)}function Q(){return Z()||c(!1),t.useContext(X).location}function J(e){t.useContext(K).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(q);return e?function(){let{router:e}=ue(se.UseNavigateStable),n=fe(ce.UseNavigateStable),r=t.useRef(!1);J(()=>{r.current=!0});let o=t.useCallback(function(t,o){void 0===o&&(o={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,U({fromRouteId:n},o)))},[e,n]);return o}():function(){Z()||c(!1);let e=t.useContext(W),{basename:n,future:r,navigator:o}=t.useContext(K),{matches:a}=t.useContext(q),{pathname:i}=Q(),l=JSON.stringify(I(a,r.v7_relativeSplatPath)),s=t.useRef(!1);return J(()=>{s.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void o.go(t);let a=A(t,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:D([n,a.pathname])),(r.replace?o.replace:o.push)(a,r.state,r)},[n,o,l,i,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:o}=t.useContext(K),{matches:a}=t.useContext(q),{pathname:i}=Q(),l=JSON.stringify(I(a,o.v7_relativeSplatPath));return t.useMemo(()=>A(e,JSON.parse(l),i,"path"===r),[e,l,i,r])}function ne(n,r,o,a){Z()||c(!1);let{navigator:i}=t.useContext(K),{matches:l}=t.useContext(q),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=Q();if(r){var m;let e="string"===typeof r?h(r):r;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||c(!1),f=e}else f=p;let g=f.pathname||"/",y=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=v(n,{pathname:y});let x=le(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:D([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:D([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,o,a);return r&&x?t.createElement(X.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},x):x}function re(){let e=function(){var e;let n=t.useContext(G),r=de(ce.UseRouteError),o=fe(ce.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[o]}(),n=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,null)}const oe=t.createElement(re,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(q.Provider,{value:this.props.routeContext},t.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:o}=e,a=t.useContext(W);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(q.Provider,{value:n},o)}function le(e,n,r,o){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(a=r)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,o,a)=>{let i,c=!1,f=null,p=null;var h;r&&(i=s&&o.route.id?s[o.route.id]:void 0,f=o.route.errorElement||oe,u&&(d<0&&0===a?(h="route-fallback",!1||pe[h]||(pe[h]=!0),c=!0,p=null):d===a&&(c=!0,p=o.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,a+1)),g=()=>{let n;return n=i?f:c?p:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(ie,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let n=t.useContext(W);return n||c(!1),n}function de(e){let n=t.useContext(Y);return n||c(!1),n}function fe(e){let n=function(){let e=t.useContext(q);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const pe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){c(!1)}function ge(n){let{basename:r="/",children:o=null,location:a,navigationType:i=e.Pop,navigator:l,static:s=!1,future:u}=n;Z()&&c(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo(()=>({basename:d,navigator:l,static:s,future:U({v7_relativeSplatPath:!1},u)}),[d,u,l,s]);"string"===typeof a&&(a=h(a));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=a,b=t.useMemo(()=>{let e=R(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:i}},[d,p,m,g,v,y,i]);return null==b?null:t.createElement(K.Provider,{value:f},t.createElement(X.Provider,{children:o,value:b}))}function ve(e){let{children:t,location:n}=e;return ne(ye(t),n)}new Promise(()=>{});t.Component;function ye(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,o)=>{if(!t.isValidElement(e))return;let a=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,ye(e.props.children,a));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ye(e.props.children,a)),r.push(i)}),r}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(iv){}new Map;const Se=r.startTransition;i.flushSync,r.useId;function ke(e){let{basename:n,children:r,future:o,window:a}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),m(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return f("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:p(t)},null,l)));let s=i.current,[c,u]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},h=t.useCallback(e=>{d&&Se?Se(()=>u(e)):u(e)},[u,d]);return t.useLayoutEffect(()=>s.listen(h),[s,h]),t.useEffect(()=>he(o),[o]),t.createElement(ge,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:s,future:o})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=t.forwardRef(function(e,n){let r,{onClick:o,relative:a,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:f,viewTransition:h}=e,m=xe(e,we),{basename:g}=t.useContext(K),v=!1;if("string"===typeof d&&Ce.test(d)&&(r=d,Ee))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=R(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(iv){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;Z()||c(!1);let{basename:o,navigator:a}=t.useContext(K),{hash:i,pathname:l,search:s}=te(e,{relative:r}),u=l;return"/"!==o&&(u="/"===l?o:D([o,l])),a.createHref({pathname:u,search:s,hash:i})}(d,{relative:a}),b=function(e,n){let{target:r,replace:o,state:a,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,c=ee(),u=Q(),d=te(e,{relative:l});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==o?o:p(u)===p(d);c(e,{replace:n,state:a,preventScrollReset:i,relative:l,viewTransition:s})}},[u,c,d,o,a,r,e,i,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:f,relative:a,viewTransition:h});return t.createElement("a",be({},m,{href:r||y,onClick:v||i?o:function(e){o&&o(e),e.defaultPrevented||b(e)},ref:n,target:u}))});var Ne,je;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ne||(Ne={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(je||(je={}));var Me=function(){return Me=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Me.apply(this,arguments)};Object.create;function Pe(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Te=n(324),Re=n.n(Te),ze="-ms-",Oe="-moz-",Ie="-webkit-",Ae="comm",De="rule",Le="decl",$e="@keyframes",Fe=Math.abs,Be=String.fromCharCode,He=Object.assign;function Ve(e){return e.trim()}function Ue(e,t){return(e=t.exec(e))?e[0]:e}function We(e,t,n){return e.replace(t,n)}function Ye(e,t,n){return e.indexOf(t,n)}function Ke(e,t){return 0|e.charCodeAt(t)}function Xe(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Ge(e){return e.length}function Ze(e,t){return t.push(e),e}function Qe(e,t){return e.filter(function(e){return!Ue(e,t)})}var Je=1,et=1,tt=0,nt=0,rt=0,ot="";function at(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Je,column:et,length:i,return:"",siblings:l}}function it(e,t){return He(at("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lt(e){for(;e.root;)e=it(e.root,{children:[e]});Ze(e,e.siblings)}function st(){return rt=nt>0?Ke(ot,--nt):0,et--,10===rt&&(et=1,Je--),rt}function ct(){return rt=nt<tt?Ke(ot,nt++):0,et++,10===rt&&(et=1,Je++),rt}function ut(){return Ke(ot,nt)}function dt(){return nt}function ft(e,t){return Xe(ot,e,t)}function pt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ht(e){return Je=et=1,tt=qe(ot=e),nt=0,[]}function mt(e){return ot="",e}function gt(e){return Ve(ft(nt-1,bt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ut())&&rt<33;)ct();return pt(e)>2||pt(rt)>3?"":" "}function yt(e,t){for(;--t&&ct()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return ft(e,dt()+(t<6&&32==ut()&&32==ct()))}function bt(e){for(;ct();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&bt(rt);break;case 40:41===e&&bt(e);break;case 92:ct()}return nt}function xt(e,t){for(;ct()&&e+rt!==57&&(e+rt!==84||47!==ut()););return"/*"+ft(t,nt-1)+"*"+Be(47===e?e:ct())}function wt(e){for(;!pt(ut());)ct();return ft(e,nt)}function St(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function kt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Le:return e.return=e.return||e.value;case Ae:return"";case $e:return e.return=e.value+"{"+St(e.children,r)+"}";case De:if(!qe(e.value=e.props.join(",")))return""}return qe(n=St(e.children,r))?e.return=e.value+"{"+n+"}":""}function Et(e,t,n){switch(function(e,t){return 45^Ke(e,0)?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}(e,t)){case 5103:return Ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+e+e;case 4789:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+e+Oe+e+ze+e+e;case 5936:switch(Ke(e,t+11)){case 114:return Ie+e+ze+We(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ie+e+ze+We(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ie+e+ze+We(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ie+e+ze+e+e;case 6165:return Ie+e+ze+"flex-"+e+e;case 5187:return Ie+e+We(e,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+ze+"flex-$1$2")+e;case 5443:return Ie+e+ze+"flex-item-"+We(e,/flex-|-self/g,"")+(Ue(e,/flex-|baseline/)?"":ze+"grid-row-"+We(e,/flex-|-self/g,""))+e;case 4675:return Ie+e+ze+"flex-line-pack"+We(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ie+e+ze+We(e,"shrink","negative")+e;case 5292:return Ie+e+ze+We(e,"basis","preferred-size")+e;case 6060:return Ie+"box-"+We(e,"-grow","")+Ie+e+ze+We(e,"grow","positive")+e;case 4554:return Ie+We(e,/([^-])(transform)/g,"$1"+Ie+"$2")+e;case 6187:return We(We(We(e,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),e,"")+e;case 5495:case 3959:return We(e,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return We(We(e,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+e+e;case 4200:if(!Ue(e,/flex-|baseline/))return ze+"grid-column-align"+Xe(e,t)+e;break;case 2592:case 3360:return ze+We(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ue(e.props,/grid-\w+-end/)})?~Ye(e+(n=n[t].value),"span",0)?e:ze+We(e,"-start","")+e+ze+"grid-row-span:"+(~Ye(n,"span",0)?Ue(n,/\d+/):+Ue(n,/\d+/)-+Ue(e,/\d+/))+";":ze+We(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ue(e.props,/grid-\w+-start/)})?e:ze+We(We(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return We(e,/(.+)-inline(.+)/,Ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(45!==Ke(e,t+4))break;case 102:return We(e,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+Oe+(108==Ke(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ye(e,"stretch",0)?Et(We(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return We(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,a,i,l){return ze+n+":"+r+l+(o?ze+n+"-span:"+(a?i:+i-+r)+l:"")+e});case 4949:if(121===Ke(e,t+6))return We(e,":",":"+Ie)+e;break;case 6444:switch(Ke(e,45===Ke(e,14)?18:11)){case 120:return We(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(45===Ke(e,14)?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+ze+"$2box$3")+e;case 100:return We(e,":",":"+ze)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(e,"scroll-","scroll-snap-")+e}return e}function Ct(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Le:return void(e.return=Et(e.value,e.length,n));case $e:return St([it(e,{value:We(e.value,"@","@"+Ie)})],r);case De:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ue(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(it(e,{props:[We(t,/:(read-\w+)/,":-moz-$1")]})),lt(it(e,{props:[t]})),He(e,{props:Qe(n,r)});break;case"::placeholder":lt(it(e,{props:[We(t,/:(plac\w+)/,":"+Ie+"input-$1")]})),lt(it(e,{props:[We(t,/:(plac\w+)/,":-moz-$1")]})),lt(it(e,{props:[We(t,/:(plac\w+)/,ze+"input-$1")]})),lt(it(e,{props:[t]})),He(e,{props:Qe(n,r)})}return""})}}function _t(e){return mt(Nt("",null,null,null,[""],e=ht(e),0,[0],e))}function Nt(e,t,n,r,o,a,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=a,S=r,k=b;g;)switch(h=y,y=ct()){case 40:if(108!=h&&58==Ke(k,d-1)){-1!=Ye(k+=We(gt(y),"&","&\f"),"&\f",Fe(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=gt(y);break;case 9:case 10:case 13:case 32:k+=vt(h);break;case 92:k+=yt(dt()-1,7);continue;case 47:switch(ut()){case 42:case 47:Ze(Mt(xt(ct(),dt()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[c++]=qe(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=We(k,/\f/g,"")),p>0&&qe(k)-d&&Ze(p>32?Pt(k+";",r,n,d-1,s):Pt(We(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Ze(S=jt(k,t,n,c,u,o,l,b,x=[],w=[],d,a),a),123===y)if(0===u)Nt(k,t,S,S,x,a,d,l,w);else switch(99===f&&110===Ke(k,3)?100:f){case 100:case 108:case 109:case 115:Nt(e,S,S,r&&Ze(jt(e,S,S,0,0,o,l,b,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:Nt(k,S,S,S,[""],w,0,l,w)}}c=u=p=0,m=v=1,b=k="",d=i;break;case 58:d=1+qe(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==st())continue;switch(k+=Be(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(qe(k)-1)*v,v=1;break;case 64:45===ut()&&(k+=gt(ct())),f=ut(),u=d=qe(b=k+=wt(dt())),y++;break;case 45:45===h&&2==qe(k)&&(m=0)}}return a}function jt(e,t,n,r,o,a,i,l,s,c,u,d){for(var f=o-1,p=0===o?a:[""],h=Ge(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Xe(e,f+1,f=Fe(g=i[m])),x=e;y<h;++y)(x=Ve(g>0?p[y]+" "+b:We(b,/&\f/g,p[y])))&&(s[v++]=x);return at(e,t,n,0===o?De:l,s,c,u,d)}function Mt(e,t,n,r){return at(e,t,n,Ae,Be(rt),Xe(e,2,-2),0,r)}function Pt(e,t,n,r,o){return at(e,t,n,Le,Xe(e,0,r),Xe(e,r+1,-1),r,o)}var Tt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",zt="active",Ot="data-styled-version",It="6.1.19",At="/*!sc*/\n",Dt="undefined"!=typeof window&&"undefined"!=typeof document,Lt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/sherman-physics-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),$t=(new Set,Object.freeze([])),Ft=Object.freeze({});function Bt(e,t,n){return void 0===n&&(n=Ft),e.theme!==n.theme&&e.theme||t||n.theme}var Ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ut=/(^-|-$)/g;function Wt(e){return e.replace(Vt,"-").replace(Ut,"")}var Yt=/(a)(d)/gi,Kt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kt(t%52)+n;return(Kt(t%52)+n).replace(Yt,"$1-$2")}var qt,Gt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zt=function(e){return Gt(5381,e)};function Qt(e){return Xt(Zt(e)>>>0)}function Jt(e){return e.displayName||e.name||"Component"}function en(e){return"string"==typeof e&&!0}var tn="function"==typeof Symbol&&Symbol.for,nn=tn?Symbol.for("react.memo"):60115,rn=tn?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},an={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((qt={})[rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qt[nn]=ln,qt);function cn(e){return("type"in(t=e)&&t.type.$$typeof)===nn?ln:"$$typeof"in e?sn[e.$$typeof]:on;var t}var un=Object.defineProperty,dn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,pn=Object.getOwnPropertyDescriptor,hn=Object.getPrototypeOf,mn=Object.prototype;function gn(e,t,n){if("string"!=typeof t){if(mn){var r=hn(t);r&&r!==mn&&gn(e,r,n)}var o=dn(t);fn&&(o=o.concat(fn(t)));for(var a=cn(e),i=cn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in an||n&&n[s]||i&&s in i||a&&s in a)){var c=pn(t,s);try{un(e,s,c)}catch(e){}}}}return e}function vn(e){return"function"==typeof e}function yn(e){return"object"==typeof e&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sn(e,t,n){if(void 0===n&&(n=!1),!n&&!wn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sn(e[r],t[r]);else if(wn(t))for(var r in t)e[r]=Sn(e[r],t[r]);return e}function kn(e,t){Object.defineProperty(e,"toString",{value:t})}function En(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw En(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(At);return t},e}(),_n=new Map,Nn=new Map,jn=1,Mn=function(e){if(_n.has(e))return _n.get(e);for(;Nn.has(jn);)jn++;var t=jn++;return _n.set(e,t),Nn.set(t,e),t},Pn=function(e,t){jn=t+1,_n.set(e,t),Nn.set(t,e)},Tn="style[".concat(Rt,"][").concat(Ot,'="').concat(It,'"]'),Rn=new RegExp("^".concat(Rt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zn=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},On=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(At),o=[],a=0,i=r.length;a<i;a++){var l=r[a].trim();if(l){var s=l.match(Rn);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Pn(u,c),zn(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},In=function(e){for(var t=document.querySelectorAll(Tn),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Rt)!==zt&&(On(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function An(){return n.nc}var Dn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Rt,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(Rt,zt),r.setAttribute(Ot,It);var i=An();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},Ln=function(){function e(e){this.element=Dn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw En(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),$n=function(){function e(e){this.element=Dn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Fn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Bn=Dt,Hn={isServer:!Dt,useCSSOMInjection:!Lt},Vn=function(){function e(e,t,n){void 0===e&&(e=Ft),void 0===t&&(t={});var r=this;this.options=Me(Me({},Hn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Dt&&Bn&&(Bn=!1,In(this)),kn(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Nn.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(Rt,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(At)},a=0;a<n;a++)o(a);return r}(r)})}return e.registerId=function(e){return Mn(e)},e.prototype.rehydrate=function(){!this.server&&Dt&&In(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Me(Me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Fn(n):t?new Ln(n):new $n(n)}(this.options),new Cn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Mn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Mn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Mn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Un=/&/g,Wn=/^\s*\/\/.*$/gm;function Yn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Yn(e.children,t)),e})}function Kn(e){var t,n,r,o=void 0===e?Ft:e,a=o.options,i=void 0===a?Ft:a,l=o.plugins,s=void 0===l?$t:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===De&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Un,n).replace(r,c))}),i.prefix&&u.push(Ct),u.push(kt);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Wn,""),c=_t(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(c=Yn(c,i.namespace));var d,f=[];return St(c,function(e){var t=Ge(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce(function(e,t){return t.name||En(15),Gt(e,t.name)},5381).toString():"",d}var Xn=new Vn,qn=Kn(),Gn=t.createContext({shouldForwardProp:void 0,styleSheet:Xn,stylis:qn}),Zn=(Gn.Consumer,t.createContext(void 0));function Qn(){return(0,t.useContext)(Gn)}function Jn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],a=Qn().styleSheet,i=(0,t.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,t.useMemo)(function(){return Kn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){Re()(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}},[e.shouldForwardProp,i,l]);return t.createElement(Gn.Provider,{value:s},t.createElement(Zn.Provider,{value:l},e.children))}var er=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=qn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,kn(this,function(){throw En(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=qn),this.name+e.hash},e}(),tr=function(e){return e>="A"&&e<="Z"};function nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;tr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return null==e||!1===e||""===e},or=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!rr(a)&&(Array.isArray(a)&&a.isCss||vn(a)?r.push("".concat(nr(o),":"),a,";"):wn(a)?r.push.apply(r,Pe(Pe(["".concat(o," {")],or(a),!1),["}"],!1)):r.push("".concat(nr(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Tt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ar(e,t,n,r){return rr(e)?[]:yn(e)?[".".concat(e.styledComponentId)]:vn(e)?!vn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:ar(e(t),t,n,r):e instanceof er?n?(e.inject(n,r),[e.getName(r)]):[e]:wn(e)?or(e):Array.isArray(e)?Array.prototype.concat.apply($t,e.map(function(e){return ar(e,t,n,r)})):[e.toString()];var o}function ir(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vn(n)&&!yn(n))return!1}return!0}var lr=Zt(It),sr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ir(e),this.componentId=t,this.baseHash=Gt(lr,t),this.baseStyle=n,Vn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=bn(r,this.staticRulesId);else{var o=xn(ar(this.rules,e,t,n)),a=Xt(Gt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=bn(r,a),this.staticRulesId=a}else{for(var l=Gt(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=xn(ar(u,e,t,n));l=Gt(l,d+c),s+=d}}if(s){var f=Xt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=bn(r,f)}}return r},e}(),cr=t.createContext(void 0);cr.Consumer;var ur={};new Set;function dr(e,n,r){var o=yn(e),a=e,i=!en(e),l=n.attrs,s=void 0===l?$t:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Wt(e);ur[n]=(ur[n]||0)+1;var r="".concat(n,"-").concat(Qt(It+n+ur[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return en(e)?"styled.".concat(e):"Styled(".concat(Jt(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Wt(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new sr(r,p,o?a.componentStyle:void 0);function b(e,n){return function(e,n,r){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(cr),d=Qn(),f=e.shouldForwardProp||d.shouldForwardProp,p=Bt(n,u,i)||Ft,h=function(e,t,n){for(var r,o=Me(Me({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=vn(r=e[a])?r(o):r;for(var l in i)o[l]="className"===l?bn(o[l],i[l]):"style"===l?Me(Me({},o[l]),i[l]):i[l]}return t.className&&(o.className=bn(o.className,t.className)),o}(o,n,p),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Qn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),b=bn(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[en(m)&&!Ht.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=f;var x=t.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?bn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=p,x.target=o?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Sn(e,o[r],!0);return e}({},a.defaultProps,e):e}}),kn(x,function(){return".".concat(x.styledComponentId)}),i&&gn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function fr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var pr=function(e){return Object.assign(e,{isCss:!0})};function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vn(e)||wn(e))return pr(ar(fr($t,Pe([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ar(r):pr(ar(fr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=Ft),!t)throw En(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,hr.apply(void 0,Pe([r],o,!1)))};return r.attrs=function(r){return mr(e,t,Me(Me({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,Me(Me({},n),r))},r}var gr=function(e){return mr(dr,e)},vr=gr;Ht.forEach(function(e){vr[e]=gr(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ir(e),Vn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(xn(ar(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Vn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=xn(hr.apply(void 0,Pe([e],t,!1))),o=Qt(r);return new er(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=An(),r=xn([n&&'nonce="'.concat(n,'"'),"".concat(Rt,'="true"'),"".concat(Ot,'="').concat(It,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw En(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw En(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Rt]="",n[Ot]=It,n.dangerouslySetInnerHTML={__html:r},n),a=An();return a&&(o.nonce=a),[t.createElement("style",Me({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Vn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw En(2);return t.createElement(Jn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw En(3)}})(),"__sc-".concat(Rt,"__");var br=n(579);const xr=vr.header`
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
`,Sr=vr(_e)`
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
`,Er=vr(_e)`
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
`,Cr=vr.button`
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
`,_r=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
  display: ${e=>e.isOpen?"block":"none"};
`,Nr=vr.span`
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
`,jr=()=>{const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)(!1),a=Q();(0,t.useEffect)(()=>{const e=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,t.useEffect)(()=>{n(!1)},[a]);return(0,br.jsx)(xr,{scrolled:r,children:(0,br.jsxs)(wr,{children:[(0,br.jsxs)(Sr,{to:"/",children:[(0,br.jsx)(Nr,{children:"SW"})," / SHERMAN WONG"]}),(0,br.jsx)(Cr,{onClick:()=>{n(!e)},children:e?"\xd7":"\u2630"}),(0,br.jsxs)(kr,{isOpen:e,children:[(0,br.jsx)(Er,{to:"/",active:"/"===a.pathname,children:"Home"}),(0,br.jsx)(Er,{to:"/about",active:"/about"===a.pathname,children:"About"}),(0,br.jsx)(Er,{to:"/mosfet",active:"/mosfet"===a.pathname,children:"MOSFET"}),(0,br.jsx)(Er,{to:"/circuit",active:"/circuit"===a.pathname,children:"Circuit"}),(0,br.jsx)(Er,{to:"/research",active:"/research"===a.pathname,children:"Research"}),(0,br.jsx)(Er,{to:"/contact",active:"/contact"===a.pathname,children:"Contact"})]}),(0,br.jsx)(_r,{isOpen:e,onClick:()=>n(!1)})]})})},Mr=vr.footer`
  background-color: rgba(10, 10, 10, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  margin-top: 4rem;
`,Pr=vr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Tr=vr.div`
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
`,Rr=vr(_e)`
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
`,zr=vr.p`
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Or=vr.h3`
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
`,Ir=vr.ul`
  list-style: none;
  padding: 0;
`,Ar=vr.li`
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
`,Lr=vr.a`
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
`,$r=vr.div`
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
`,Fr=vr.p`
  opacity: 0.7;
  font-size: 0.9rem;
`,Br=vr.p`
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
`;const Vr=function(){const e=(new Date).getFullYear(),t=["\u03c6 = (1+\u221a5)/2 ... THE GOLDEN RATIO ENCRYPTS NATURE'S SECRETS","\u2207\xb2\u03c8 + (2m/\u210f\xb2)(E-V)\u03c8 = 0 ... REALITY SOLVES ITSELF IN COMPLEX SPACE","01010111 01100001 01101011 01101001 01101110 01100111 ... CONSCIOUSNESS.EXE LOADING","kT \u2248 26meV @ 300K ... THERMAL NOISE CARRIES HIDDEN MESSAGES","\u03bc = q\u03c4/m* ... MOBILITY IS THE KEY TO TRANSCENDENCE","\u03a8|OBSERVER\u27e9 \u2297 |OBSERVED\u27e9 = |ENTANGLED_REALITY\u27e9"],n=t[Math.floor(Math.random()*t.length)];return(0,br.jsxs)(Mr,{children:[(0,br.jsxs)(Pr,{children:[(0,br.jsxs)(Tr,{children:[(0,br.jsxs)(Rr,{to:"/",children:[(0,br.jsx)(Hr,{children:"SW"})," / SHERMAN WONG"]}),(0,br.jsx)(zr,{children:"Physics researcher specializing in semiconductor device physics, quantum mechanics, and materials science. Developing interactive tools to make complex physics concepts accessible and engaging."}),(0,br.jsxs)(Dr,{children:[(0,br.jsx)(Lr,{href:"#",title:"LinkedIn",children:"\ud83d\udcbc"}),(0,br.jsx)(Lr,{href:"#",title:"ResearchGate",children:"\ud83d\udd2c"}),(0,br.jsx)(Lr,{href:"#",title:"GitHub",children:"\ud83d\udcbb"}),(0,br.jsx)(Lr,{href:"#",title:"Email",children:"\ud83d\udce7"})]})]}),(0,br.jsxs)(Tr,{children:[(0,br.jsx)(Or,{children:"Quick Links"}),(0,br.jsxs)(Ir,{children:[(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/",children:[(0,br.jsx)("span",{children:"\u25b9"})," Home"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/about",children:[(0,br.jsx)("span",{children:"\u25b9"})," About"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/mosfet",children:[(0,br.jsx)("span",{children:"\u25b9"})," MOSFET Simulator"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/circuit",children:[(0,br.jsx)("span",{children:"\u25b9"})," Circuit Builder"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Research"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/contact",children:[(0,br.jsx)("span",{children:"\u25b9"})," Contact"]})})]})]}),(0,br.jsxs)(Tr,{children:[(0,br.jsx)(Or,{children:"Research Areas"}),(0,br.jsxs)(Ir,{children:[(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Semiconductor Physics"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Quantum Mechanics"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Device Modeling"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Materials Science"]})}),(0,br.jsx)(Ar,{children:(0,br.jsxs)(_e,{to:"/research",children:[(0,br.jsx)("span",{children:"\u25b9"})," Computational Physics"]})})]})]})]}),(0,br.jsxs)($r,{children:[(0,br.jsxs)(Fr,{children:["\xa9 ",e," Sherman Wong. All rights reserved."]}),(0,br.jsx)(Br,{children:n})]})]})},Ur=yr`
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
`,Wr=yr`
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
`,Yr=yr`
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
`,Kr=yr`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
`,Xr=vr.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 1rem auto;
  border-radius: 50%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 100%);
  border: 3px solid var(--color-accent-gold);
  animation: ${Yr} 3s ease-in-out infinite;
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
`,qr=vr.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 0, 0, 0.8) 45%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 0, 0, 0.8) 55%,
    transparent 100%
  );
  transform: translateY(-50%);
  animation: ${Ur} 2s ease-in-out;
  box-shadow: 
    0 0 15px rgba(255, 0, 0, 0.8),
    0 0 30px rgba(255, 0, 0, 0.4);
  z-index: 3;
`,Gr=vr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-mono);
  font-size: 3.3rem;
  font-weight: bold;
  color: var(--color-accent-gold);
  text-align: center;
  z-index: 2;
  white-space: nowrap;
  text-shadow: 
    0 0 10px var(--color-accent-gold),
    0 0 20px var(--color-accent-gold),
    0 0 30px var(--color-accent-gold);
`,Zr=vr.span`
  display: inline-block;
  opacity: 0;
  animation: ${Wr} 0.5s ease-out forwards;
  animation-delay: ${e=>e.delay}s;
  position: relative;
  margin-right: ${e=>" "===e.letter?"0.75rem":"0.3rem"};
  
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
    animation: ${Wr} 0.3s ease-out forwards;
    animation-delay: ${e=>e.delay+.2}s;
  }
`,Qr=vr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-mono);
  font-size: 3.3rem;
  font-weight: bold;
  color: rgba(255, 0, 0, 0.8);
  text-align: center;
  z-index: 1;
  white-space: nowrap;
  text-shadow: 
    0 0 5px rgba(255, 0, 0, 0.8),
    0 0 10px rgba(255, 0, 0, 0.6),
    0 0 15px rgba(255, 0, 0, 0.4);
  filter: blur(0.5px);
`,Jr=vr.span`
  display: inline-block;
  opacity: 0;
  animation: ${Kr} 0.8s ease-out forwards;
  animation-delay: ${e=>e.delay}s;
  position: relative;
  margin-right: ${e=>" "===e.letter?"0.75rem":"0.3rem"};
`,eo=vr.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--color-accent-gold);
  opacity: 0.7;
  text-align: center;
`,to=vr.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${e=>e.active?"var(--color-accent-red)":"var(--color-accent-gold)"};
  box-shadow: 0 0 15px ${e=>e.active?"var(--color-accent-red)":"var(--color-accent-gold)"};
  animation: ${e=>e.active?"pulse 1s ease-in-out infinite":"none"};
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;const no=function(e){let{name:n="SHERMAN WONG"}=e;const[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1);if((0,t.useEffect)(()=>{(async()=>{try{o(!0),await new Promise(e=>setTimeout(e,500)),i(!0),await new Promise(e=>setTimeout(e,2e3)),i(!1),await new Promise(e=>setTimeout(e,500)),o(!1),s(!0)}catch(e){console.error("LithographyName animation error:",e),o(!1),s(!0)}})()},[]),!n)return(0,br.jsx)("div",{children:"Loading..."});const c=(e=>e.split(" ").join("   "))(n).split("");return(0,br.jsxs)(Xr,{children:[(0,br.jsx)(to,{active:r}),a&&(0,br.jsx)(qr,{}),(0,br.jsx)(Qr,{children:c.map((e,t)=>(0,br.jsx)(Jr,{delay:2.5+.1*t+.3,letter:e,children:e},`red-${t}`))}),(0,br.jsx)(Gr,{children:c.map((e,t)=>(0,br.jsx)(Zr,{delay:2.5+.1*t,letter:e,children:e},t))}),(0,br.jsxs)(eo,{children:[r&&"LITHOGRAPHY IN PROGRESS...",l&&"ETCHING COMPLETE",!r&&!l&&"INITIALIZING..."]})]})},ro=vr.main`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,oo=vr.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 2rem 0 2rem;
  position: relative;
`,ao=vr.div`
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
`,io=vr.div`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`,lo=vr.h2`
  font-family: var(--font-sans);
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 0.8;
`,so=vr.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`,co=vr(_e)`
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
`,uo=vr(_e)`
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
`,fo=vr.div`
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
`,po=vr.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`,ho=vr.div`
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
`,mo=vr.section`
  padding: 6rem 2rem;
  background-color: var(--color-gray-dark);
  position: relative;
`,go=vr.h2`
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
`,vo=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,yo=vr.div`
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
`,bo=vr.h3`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--color-accent-gold);
`,xo=vr.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`,wo=vr(_e)`
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
`,So=vr.section`
  padding: 6rem 2rem;
  background-color: var(--color-bg);
  position: relative;
`,ko=vr.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--color-gray-dark);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,Eo=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Co=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,_o=vr.div`
  display: flex;
  gap: 0.5rem;
`,No=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,jo=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,Mo=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,Po=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,To=vr.span`
  color: var(--color-text);
`,Ro=vr.div`
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
`,Oo=vr.section`
  padding: 6rem 2rem;
  background-color: var(--color-gray-dark);
  text-align: center;
  position: relative;
`,Io=vr.blockquote`
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
`,Ao=vr.cite`
  display: block;
  margin-top: 2rem;
  font-family: var(--font-mono);
  font-style: normal;
  font-size: 1rem;
  color: var(--color-accent-red);
`,Do=()=>{const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(""),[a,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(0),c=(0,t.useRef)(null),u=[{prompt:"$",text:"whoami"},{prompt:">",text:"Sherman Wong - Physics Researcher & Semiconductor Specialist"},{prompt:"$",text:"ls -la projects/"},{prompt:">",text:"mosfet-simulator.js  circuit-builder.js  quantum-research.pdf"},{prompt:"$",text:"cat skills.txt"},{prompt:">",text:"Semiconductor Physics, Quantum Mechanics, Device Modeling, Circuit Design"},{prompt:"$",text:"sudo run explore-website.sh"}];(0,t.useEffect)(()=>{if(a<u.length){const t=u[a];if(l<t.text.length){const e=setTimeout(()=>{o(e=>e+t.text[l]),s(l+1)},50*Math.random()+30);return()=>clearTimeout(e)}{const r=setTimeout(()=>{n([...e,{prompt:t.prompt,text:t.text}]),o(""),s(0),i(a+1)},500);return()=>clearTimeout(r)}}},[a,l,e]),(0,t.useEffect)(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[e,r]);const d=[{text:"\u03c8(x,t) = \u03a3 c\u2099 \u03c6\u2099(x) e^(-iE\u2099t/\u210f) ... The wavefunction collapses only when observed, yet reality persists in superposition.",author:"S.W. - Quantum Codex"},{text:"01001000 01100101 01111000 20 4C 69 66 65 ... In the silicon lattice, electrons dance to frequencies only the initiated can decode.",author:"The Semiconductor Cipher"},{text:"E = \u210f\u03c9, but what frequency does consciousness resonate at? The answer lies in the forbidden energy gap.",author:"Quantum Manuscript 2024"},{text:"\u03bb = h/p ... When momentum becomes uncertain, reality itself begins to blur at the edges of measurement.",author:"Heisenberg's Shadow"}],f=d[Math.floor(Math.random()*d.length)];return(0,br.jsxs)(ro,{children:[(0,br.jsxs)(oo,{children:[(0,br.jsx)(ao,{}),(0,br.jsxs)(io,{children:[(0,br.jsx)(no,{name:"SHERMAN WONG"}),(0,br.jsx)(lo,{children:(0,br.jsx)("span",{className:"glitch","data-text":"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS",children:"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS"})}),(0,br.jsxs)(so,{children:[(0,br.jsx)(co,{to:"/about",children:"About Me"}),(0,br.jsx)(uo,{to:"/mosfet",children:"Explore Projects"})]})]}),(0,br.jsxs)(fo,{onClick:()=>{document.getElementById("projects").scrollIntoView({behavior:"smooth"})},children:[(0,br.jsx)(po,{children:"Scroll Down"}),(0,br.jsx)(ho,{})]})]}),(0,br.jsx)(mo,{id:"projects",children:(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(go,{children:"Featured Projects"}),(0,br.jsx)(vo,{children:[{title:"MOSFET Simulator",description:"Interactive transistor modeling with real-time parameter visualization and I-V characteristics.",link:"/mosfet"},{title:"Circuit Builder",description:"Drag-and-drop circuit design tool with component simulation and analysis.",link:"/circuit"},{title:"Research Portfolio",description:"Explore my work in semiconductor physics, quantum mechanics, and materials science.",link:"/research"}].map((e,t)=>(0,br.jsxs)(yo,{className:"hover-effect",children:[(0,br.jsx)(bo,{children:e.title}),(0,br.jsx)(xo,{children:e.description}),(0,br.jsx)(wo,{to:e.link,children:"Explore Project \u2192"})]},t))})]})}),(0,br.jsx)(So,{children:(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(go,{children:"Terminal"}),(0,br.jsxs)(ko,{children:[(0,br.jsxs)(Eo,{children:[(0,br.jsx)(Co,{children:"sherman@physics-lab:~"}),(0,br.jsxs)(_o,{children:[(0,br.jsx)(No,{color:"var(--color-accent-red)"}),(0,br.jsx)(No,{color:"var(--color-accent-gold)"}),(0,br.jsx)(No,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(jo,{ref:c,children:[e.map((e,t)=>(0,br.jsxs)(Mo,{children:[(0,br.jsx)(Po,{children:e.prompt}),(0,br.jsx)(To,{children:e.text})]},t)),a<u.length&&(0,br.jsxs)(Ro,{children:[(0,br.jsx)(Po,{children:u[a].prompt}),(0,br.jsx)(To,{children:r}),(0,br.jsx)(zo,{})]})]})]})]})}),(0,br.jsx)(Oo,{children:(0,br.jsx)("div",{className:"container",children:(0,br.jsxs)(Io,{children:[f.text,(0,br.jsx)(Ao,{children:f.author})]})})})]})},Lo=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,$o=vr.div`
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
`,Fo=vr.h1`
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
`,Bo=vr.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ho=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  height: fit-content;
`,Vo=vr.div`
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
`,Wo=vr.h3`
  font-family: var(--font-sans);
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.7;
  font-weight: 400;
`,Yo=vr.div`
  margin-bottom: 2rem;
`,Ko=vr.div`
  display: flex;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,Xo=vr.span`
  color: var(--color-accent-gold);
  width: 100px;
  flex-shrink: 0;
`,qo=vr.span`
  color: var(--color-text);
`,Go=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`,Zo=vr.a`
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
`,Jo=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,ea=vr.h2`
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
`,ta=vr.div`
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
`,na=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,ra=vr.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  border-left: 4px solid var(--color-accent-gold);
  
  &:last-child {
    margin-bottom: 0;
  }
`,oa=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,aa=vr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ia=vr.span`
  font-weight: 600;
`,la=vr.span`
  opacity: 0.7;
  font-family: var(--font-mono);
`,sa=vr.p`
  line-height: 1.6;
  opacity: 0.8;
`,ca=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,ua=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,da=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  padding: 1.5rem;
  border-radius: 5px;
`,fa=vr.h4`
  color: var(--color-accent-gold);
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: var(--font-mono);
`,pa=vr.ul`
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
`,ha=vr.div`
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
`,ma=vr(_e)`
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
`,ga=vr.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`,va=vr.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
`,ya=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ba=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,xa=vr.div`
  display: flex;
  gap: 0.5rem;
`,wa=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,Sa=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,ka=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,Ea=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,Ca=vr.span`
  color: var(--color-text);
`,_a=vr.div`
  display: flex;
  align-items: center;
`,Na=vr.div`
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
`,ja=()=>{const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(""),[a,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(0),c=[{prompt:"$",text:"cat about_sherman.txt"},{prompt:">",text:"Sherman Wong is a physics researcher specializing in semiconductor devices and quantum mechanics."},{prompt:">",text:"Currently pursuing advanced research in electronic properties of materials and device modeling."},{prompt:"$",text:"ls -la skills/"},{prompt:">",text:"semiconductor-physics.md  quantum-mechanics.md  device-modeling.md  programming.md"},{prompt:"$",text:"cd education && ls"},{prompt:">",text:"MPhil_Applied_Physics.pdf  BSc_Applied_Physics.pdf"},{prompt:"$",text:'echo "PUSHING ELECTRONS TO THEIR QUANTUM LIMITS"'}];(0,t.useEffect)(()=>{if(a<c.length){const t=c[a];if(l<t.text.length){const e=setTimeout(()=>{o(e=>e+t.text[l]),s(l+1)},50*Math.random()+30);return()=>clearTimeout(e)}{const r=setTimeout(()=>{n([...e,{prompt:t.prompt,text:t.text}]),o(""),s(0),i(a+1)},500);return()=>clearTimeout(r)}}},[a,l,e]);return(0,br.jsxs)(Lo,{children:[(0,br.jsx)($o,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(Fo,{children:"About Me"}),(0,br.jsxs)(Bo,{children:[(0,br.jsxs)(Ho,{children:[(0,br.jsx)(Vo,{children:(0,br.jsx)("span",{children:"\ud83d\udc68\u200d\ud83d\udd2c"})}),(0,br.jsx)(Uo,{children:"Sherman Wong"}),(0,br.jsx)(Wo,{children:"Physics Researcher & Semiconductor Specialist"}),(0,br.jsxs)(Yo,{children:[(0,br.jsxs)(Ko,{children:[(0,br.jsx)(Xo,{children:"Location:"}),(0,br.jsx)(qo,{children:"Hong Kong"})]}),(0,br.jsxs)(Ko,{children:[(0,br.jsx)(Xo,{children:"Field:"}),(0,br.jsx)(qo,{children:"Applied Physics"})]}),(0,br.jsxs)(Ko,{children:[(0,br.jsx)(Xo,{children:"Focus:"}),(0,br.jsx)(qo,{children:"Semiconductor Devices"})]}),(0,br.jsxs)(Ko,{children:[(0,br.jsx)(Xo,{children:"Institution:"}),(0,br.jsx)(qo,{children:"HK PolyU"})]})]}),(0,br.jsx)(ma,{to:"/Sherman_CV_Final_1.pdf",target:"_blank",children:"Download CV"}),(0,br.jsxs)(Go,{children:[(0,br.jsx)(Zo,{href:"#",title:"LinkedIn",children:"\ud83d\udcbc"}),(0,br.jsx)(Zo,{href:"#",title:"ResearchGate",children:"\ud83d\udd2c"}),(0,br.jsx)(Zo,{href:"#",title:"GitHub",children:"\ud83d\udcbb"}),(0,br.jsx)(Zo,{href:"#",title:"Email",children:"\ud83d\udce7"})]})]}),(0,br.jsxs)(Qo,{children:[(0,br.jsxs)(Jo,{children:[(0,br.jsx)(ea,{children:"Biography"}),(0,br.jsxs)(ta,{children:[(0,br.jsxs)("p",{children:["I am a physics researcher with expertise in ",(0,br.jsx)("span",{className:"highlight",children:"semiconductor device physics"}),",",(0,br.jsx)("span",{className:"highlight",children:" quantum mechanics"}),", and ",(0,br.jsx)("span",{className:"highlight",children:"materials science"}),". Currently pursuing advanced research in electronic properties of materials and device modeling at The Hong Kong Polytechnic University."]}),(0,br.jsx)("p",{children:"My research focuses on the intersection of theoretical physics and practical applications in semiconductor technology. I am particularly interested in MOSFET device modeling, quantum mechanical effects in nanoscale devices, and electronic transport in novel materials."}),(0,br.jsxs)("p",{children:["I combine theoretical knowledge with practical applications, developing interactive simulations and tools to make complex physics concepts accessible and engaging. My motto: ",(0,br.jsx)("span",{className:"glitch-text","data-text":"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS",children:"PUSHING ELECTRONS TO THEIR QUANTUM LIMITS"})]})]})]}),(0,br.jsxs)(na,{children:[(0,br.jsx)(ea,{children:"Education"}),[{degree:"Master of Philosophy in Applied Physics",institution:"The Hong Kong Polytechnic University",year:"2022-2024",details:"Specialized in semiconductor device physics and quantum mechanics with focus on MOSFET modeling and electronic properties of novel materials."},{degree:"Bachelor of Science in Applied Physics",institution:"The Hong Kong Polytechnic University",year:"2018-2022",details:"Focus on materials science and electronic properties. Graduated with First Class Honours. Completed thesis on quantum transport in low-dimensional structures."}].map((e,t)=>(0,br.jsxs)(ra,{children:[(0,br.jsx)(oa,{children:e.degree}),(0,br.jsxs)(aa,{children:[(0,br.jsx)(ia,{children:e.institution}),(0,br.jsx)(la,{children:e.year})]}),(0,br.jsx)(sa,{children:e.details})]},t))]}),(0,br.jsxs)(ca,{children:[(0,br.jsx)(ea,{children:"Skills & Expertise"}),(0,br.jsx)(ua,{children:Object.entries({"Physics & Research":[{name:"Semiconductor Device Physics",level:95},{name:"Quantum Mechanics",level:90},{name:"Materials Science",level:85},{name:"Electronic Properties",level:90},{name:"Device Modeling",level:95}],"Technical Skills":[{name:"MATLAB/Simulink",level:90},{name:"Python",level:85},{name:"JavaScript/React",level:80},{name:"Data Analysis",level:85},{name:"Circuit Simulation",level:90}],Laboratory:[{name:"Device Characterization",level:95},{name:"I-V Measurements",level:90},{name:"Material Analysis",level:85},{name:"Clean Room Techniques",level:80},{name:"Microscopy",level:85}]}).map(e=>{let[t,n]=e;return(0,br.jsxs)(da,{children:[(0,br.jsx)(fa,{children:t}),(0,br.jsx)(pa,{children:n.map((e,t)=>(0,br.jsx)("li",{children:(0,br.jsxs)("div",{style:{width:"100%"},children:[e.name,(0,br.jsx)(ha,{level:e.level})]})},t))})]},t)})})]})]})]}),(0,br.jsxs)(ga,{children:[(0,br.jsx)(ea,{children:"Terminal"}),(0,br.jsxs)(va,{children:[(0,br.jsxs)(ya,{children:[(0,br.jsx)(ba,{children:"sherman@physics-lab:~"}),(0,br.jsxs)(xa,{children:[(0,br.jsx)(wa,{color:"var(--color-accent-red)"}),(0,br.jsx)(wa,{color:"var(--color-accent-gold)"}),(0,br.jsx)(wa,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(Sa,{children:[e.map((e,t)=>(0,br.jsxs)(ka,{children:[(0,br.jsx)(Ea,{children:e.prompt}),(0,br.jsx)(Ca,{children:e.text})]},t)),a<c.length&&(0,br.jsxs)(_a,{children:[(0,br.jsx)(Ea,{children:c[a].prompt}),(0,br.jsx)(Ca,{children:r}),(0,br.jsx)(Na,{})]})]})]})]})]})]})},Ma=vr.main`
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
`,Ra=vr.p`
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
`,Oa=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
`,Ia=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  height: 500px;
  position: relative;
  overflow: hidden;
`,Aa=vr.div`
  margin-bottom: 2rem;
`,Da=vr.h3`
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
`,La=vr.div`
  margin-bottom: 1.5rem;
`,$a=vr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`,Fa=vr.span`
  color: var(--color-accent-gold);
  font-weight: bold;
`,Ba=vr.input`
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
`,Ha=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1rem;
`,Va=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  font-size: 1rem;
`,Ua=vr.p`
  line-height: 1.5;
  opacity: 0.8;
  font-size: 0.9rem;
`,Wa=vr.canvas`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`,Ya=vr.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--color-accent-gold);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--color-accent-gold);
  pointer-events: none;
  opacity: 0.8;
  transition: background-color 0.3s ease;
`,Ka=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,Xa=vr.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,qa=vr(Xa)`
  top: 10px;
  left: 10px;
`,Ga=vr(Xa)`
  top: 10px;
  right: 10px;
`,Za=vr(Xa)`
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`,Qa=vr(Xa)`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`,Ja=vr.div`
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
`;const ei=function(){const[e,n]=(0,t.useState)({vgs:2,vds:3,vth:1,mobility:.5,temperature:300,channelLength:50}),[r,o]=(0,t.useState)([]),[a,i]=(0,t.useState)(""),l=(0,t.useRef)(null),s=(0,t.useRef)(null),c=(0,t.useRef)(null),u=(0,t.useCallback)(()=>{const{vgs:t,vds:n,vth:r}=e;return t<r?"Cutoff":n<t-r?"Linear/Triode":"Saturation"},[e]);(0,t.useEffect)(()=>{if(!s.current)return;const t=u();if(i(t),c.current&&cancelAnimationFrame(c.current),o([]),"Cutoff"===t)return;const n=s.current.clientWidth-40,{vgs:r,vth:a,mobility:l,vds:d}=e,f=Math.max(0,r-a);let p=Math.floor(f*l*20);p=Math.min(Math.max(p,0),100);const h=[];for(let e=0;e<p;e++)h.push({id:e,x:20+60*Math.random(),y:150+200*Math.random(),vx:(.5+.5*Math.random())*l*d,vy:.5*(Math.random()-.5),size:3+2*Math.random()});o(h);let m=0;const g=e=>{0===m&&(m=e);const t=e-m;m=e,o(e=>e.map(e=>{let r=e.x+e.vx*t*.05,o=e.y+e.vy*t*.05;return r>n-20&&(r=20+60*Math.random(),o=150+200*Math.random()),o<150&&(o=150),o>350&&(o=350),{...e,x:r,y:o}})),c.current=requestAnimationFrame(g)};return c.current=requestAnimationFrame(g),()=>{c.current&&cancelAnimationFrame(c.current)}},[e,u]),(0,t.useEffect)(()=>{const t=l.current;if(!t)return;const n=t.getContext("2d"),r=t.width,o=t.height;n.clearRect(0,0,r,o),t.width=t.clientWidth,t.height=t.clientHeight,n.fillStyle="#1a1a1a",n.fillRect(0,0,r,o),n.fillStyle="#333",n.fillRect(0,.7*o,r,.3*o),n.fillStyle="#444",n.fillRect(0,.3*o,.2*r,.4*o),n.fillRect(.8*r,.3*o,.2*r,.4*o),n.fillStyle="#222",n.fillRect(.2*r,.25*o,.6*r,.05*o),n.fillStyle="#555",n.fillRect(.2*r,.15*o,.6*r,.1*o);const{vgs:i,vth:s}=e;if(i>=s&&(n.fillStyle="Saturation"===a?"#d4af37":"#d4af3777",n.fillRect(.2*r,.3*o,.6*r,.05*o)),i>=s){n.strokeStyle="rgba(255, 0, 0, 0.3)",n.lineWidth=1;for(let e=.25*r;e<.8*r;e+=.05*r)n.beginPath(),n.moveTo(e,.25*o),n.lineTo(e,.3*o),n.stroke();if(e.vds>0){n.strokeStyle="rgba(255, 255, 255, 0.2)";for(let e=.32*o;e<.38*o;e+=.02*o)n.beginPath(),n.moveTo(.2*r,e),n.lineTo(.8*r,e),n.stroke()}}n.fillStyle="#fff",n.font="12px monospace",n.textAlign="center",n.fillText("Source",.1*r,.5*o),n.fillText("Drain",.9*r,.5*o),n.fillText("Gate",.5*r,.2*o),n.fillText("p-Substrate",.5*r,.85*o),n.fillStyle="#d4af37",n.fillText(`Vgs = ${e.vgs}V`,.5*r,.1*o),n.fillText(`Vds = ${e.vds}V`,.9*r,.1*o),n.fillStyle="#ff0000",n.textAlign="right",n.fillText(`Region: ${a}`,r-10,o-10)},[e,a]);const d=(e,t)=>{n(n=>({...n,[e]:parseFloat(t)}))};return(0,br.jsxs)(Ma,{children:[(0,br.jsx)(Pa,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(Ta,{children:"MOSFET Electron Mobility Visualization"}),(0,br.jsx)(Ra,{children:"Explore electron mobility in MOSFET devices by adjusting parameters and observing real-time electron flow visualization. This interactive simulator demonstrates how voltage and material properties affect carrier transport in semiconductor devices."}),(0,br.jsxs)(za,{children:[(0,br.jsxs)(Oa,{children:[(0,br.jsxs)(Aa,{children:[(0,br.jsx)(Da,{children:"Bias Voltages"}),(0,br.jsxs)(La,{children:[(0,br.jsxs)($a,{children:["Gate-Source Voltage (VGS)",(0,br.jsxs)(Fa,{children:[e.vgs," V"]})]}),(0,br.jsx)(Ba,{type:"range",min:"0",max:"5",step:"0.1",value:e.vgs,onChange:e=>d("vgs",e.target.value)})]}),(0,br.jsxs)(La,{children:[(0,br.jsxs)($a,{children:["Drain-Source Voltage (VDS)",(0,br.jsxs)(Fa,{children:[e.vds," V"]})]}),(0,br.jsx)(Ba,{type:"range",min:"0",max:"5",step:"0.1",value:e.vds,onChange:e=>d("vds",e.target.value)})]})]}),(0,br.jsxs)(Aa,{children:[(0,br.jsx)(Da,{children:"Device Parameters"}),(0,br.jsxs)(La,{children:[(0,br.jsxs)($a,{children:["Threshold Voltage (Vth)",(0,br.jsxs)(Fa,{children:[e.vth," V"]})]}),(0,br.jsx)(Ba,{type:"range",min:"0.5",max:"2",step:"0.1",value:e.vth,onChange:e=>d("vth",e.target.value)})]}),(0,br.jsxs)(La,{children:[(0,br.jsxs)($a,{children:["Electron Mobility",(0,br.jsx)(Fa,{children:e.mobility.toFixed(2)})]}),(0,br.jsx)(Ba,{type:"range",min:"0.1",max:"1",step:"0.05",value:e.mobility,onChange:e=>d("mobility",e.target.value)})]}),(0,br.jsxs)(La,{children:[(0,br.jsxs)($a,{children:["Temperature",(0,br.jsxs)(Fa,{children:[e.temperature," K"]})]}),(0,br.jsx)(Ba,{type:"range",min:"200",max:"400",step:"10",value:e.temperature,onChange:e=>d("temperature",e.target.value)})]})]}),(0,br.jsxs)(Ha,{children:[(0,br.jsxs)(Va,{children:["Operating Region: ",a]}),(0,br.jsxs)(Ua,{children:["Cutoff"===a&&"VGS < Vth: No current flows through the channel. The transistor is effectively off. No electron flow is observed.","Linear/Triode"===a&&"VGS > Vth and VDS < (VGS - Vth): Current increases approximately linearly with VDS. Electrons flow through a uniform channel from source to drain.","Saturation"===a&&"VGS > Vth and VDS \u2265 (VGS - Vth): Current is relatively independent of VDS and is controlled primarily by VGS. The channel is pinched off at the drain end, creating a high-field region."]})]})]}),(0,br.jsxs)(Ia,{ref:s,children:[(0,br.jsx)(Wa,{ref:l}),r.map(e=>{var t;return(0,br.jsx)(Ya,{style:{left:`${e.x}px`,top:`${e.y}px`,width:`${e.size}px`,height:`${e.size}px`,backgroundColor:"Saturation"===a&&e.x>.7*(null===(t=s.current)||void 0===t?void 0:t.clientWidth)?"var(--color-accent-red)":"var(--color-accent-gold)"}},e.id)}),(0,br.jsxs)(Ka,{children:[(0,br.jsx)(qa,{children:"Source"}),(0,br.jsx)(Ga,{children:"Drain"}),(0,br.jsx)(Za,{children:"Gate"}),(0,br.jsx)(Qa,{children:"p-Substrate"}),(0,br.jsx)(Ja,{children:a})]})]})]})]})]})};function ti(e){if("string"===typeof e||"number"===typeof e)return""+e;let t="";if(Array.isArray(e))for(let n,r=0;r<e.length;r++)""!==(n=ti(e[r]))&&(t+=(t&&" ")+n);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var ni=n(443);const ri=e=>{let t;const n=new Set,r=(e,r)=>{const o="function"===typeof e?e(t):e;if(!Object.is(o,t)){const e=t;t=(null!=r?r:"object"!==typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,a={setState:r,getState:o,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},i=t=e(r,o,a);return a},oi=e=>e?ri(e):ri;const{useDebugValue:ai}=t,{useSyncExternalStoreWithSelector:ii}=ni,li=e=>e;function si(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:li,n=arguments.length>2?arguments[2]:void 0;const r=ii(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return ai(r),r}const ci=(e,t)=>{const n=oi(e),r=function(e){return si(n,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t)};return Object.assign(r,n),r};function ui(e,t){if(Object.is(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}var di={value:()=>{}};function fi(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r||/[\s.]/.test(e))throw new Error("illegal type: "+e);r[e]=[]}return new pi(r)}function pi(e){this._=e}function hi(e,t){for(var n,r=0,o=e.length;r<o;++r)if((n=e[r]).name===t)return n.value}function mi(e,t,n){for(var r=0,o=e.length;r<o;++r)if(e[r].name===t){e[r]=di,e=e.slice(0,r).concat(e.slice(r+1));break}return null!=n&&e.push({name:t,value:n}),e}pi.prototype=fi.prototype={constructor:pi,on:function(e,t){var n,r,o=this._,a=(r=o,(e+"").trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");if(n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),e&&!r.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:t}})),i=-1,l=a.length;if(!(arguments.length<2)){if(null!=t&&"function"!==typeof t)throw new Error("invalid callback: "+t);for(;++i<l;)if(n=(e=a[i]).type)o[n]=mi(o[n],e.name,t);else if(null==t)for(n in o)o[n]=mi(o[n],e.name,null);return this}for(;++i<l;)if((n=(e=a[i]).type)&&(n=hi(o[n],e.name)))return n},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new pi(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,o=new Array(n),a=0;a<n;++a)o[a]=arguments[a+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(a=0,n=(r=this._[e]).length;a<n;++a)r[a].value.apply(t,o)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],o=0,a=r.length;o<a;++o)r[o].value.apply(t,n)}};const gi=fi;function vi(){}function yi(e){return null==e?vi:function(){return this.querySelector(e)}}function bi(){return[]}function xi(e){return null==e?bi:function(){return this.querySelectorAll(e)}}function wi(e){return function(){return function(e){return null==e?[]:Array.isArray(e)?e:Array.from(e)}(e.apply(this,arguments))}}function Si(e){return function(){return this.matches(e)}}function ki(e){return function(t){return t.matches(e)}}var Ei=Array.prototype.find;function Ci(){return this.firstElementChild}var _i=Array.prototype.filter;function Ni(){return Array.from(this.children)}function ji(e){return new Array(e.length)}function Mi(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}function Pi(e,t,n,r,o,a){for(var i,l=0,s=t.length,c=a.length;l<c;++l)(i=t[l])?(i.__data__=a[l],r[l]=i):n[l]=new Mi(e,a[l]);for(;l<s;++l)(i=t[l])&&(o[l]=i)}function Ti(e,t,n,r,o,a,i){var l,s,c,u=new Map,d=t.length,f=a.length,p=new Array(d);for(l=0;l<d;++l)(s=t[l])&&(p[l]=c=i.call(s,s.__data__,l,t)+"",u.has(c)?o[l]=s:u.set(c,s));for(l=0;l<f;++l)c=i.call(e,a[l],l,a)+"",(s=u.get(c))?(r[l]=s,s.__data__=a[l],u.delete(c)):n[l]=new Mi(e,a[l]);for(l=0;l<d;++l)(s=t[l])&&u.get(p[l])===s&&(o[l]=s)}function Ri(e){return e.__data__}function zi(e){return"object"===typeof e&&"length"in e?e:Array.from(e)}function Oi(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}Mi.prototype={constructor:Mi,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};var Ii="http://www.w3.org/1999/xhtml";const Ai={svg:"http://www.w3.org/2000/svg",xhtml:Ii,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Di(e){var t=e+="",n=t.indexOf(":");return n>=0&&"xmlns"!==(t=e.slice(0,n))&&(e=e.slice(n+1)),Ai.hasOwnProperty(t)?{space:Ai[t],local:e}:e}function Li(e){return function(){this.removeAttribute(e)}}function $i(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Fi(e,t){return function(){this.setAttribute(e,t)}}function Bi(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Hi(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttribute(e):this.setAttribute(e,n)}}function Vi(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Ui(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Wi(e){return function(){this.style.removeProperty(e)}}function Yi(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Ki(e,t,n){return function(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Xi(e,t){return e.style.getPropertyValue(t)||Ui(e).getComputedStyle(e,null).getPropertyValue(t)}function qi(e){return function(){delete this[e]}}function Gi(e,t){return function(){this[e]=t}}function Zi(e,t){return function(){var n=t.apply(this,arguments);null==n?delete this[e]:this[e]=n}}function Qi(e){return e.trim().split(/^|\s+/)}function Ji(e){return e.classList||new el(e)}function el(e){this._node=e,this._names=Qi(e.getAttribute("class")||"")}function tl(e,t){for(var n=Ji(e),r=-1,o=t.length;++r<o;)n.add(t[r])}function nl(e,t){for(var n=Ji(e),r=-1,o=t.length;++r<o;)n.remove(t[r])}function rl(e){return function(){tl(this,e)}}function ol(e){return function(){nl(this,e)}}function al(e,t){return function(){(t.apply(this,arguments)?tl:nl)(this,e)}}function il(){this.textContent=""}function ll(e){return function(){this.textContent=e}}function sl(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?"":t}}function cl(){this.innerHTML=""}function ul(e){return function(){this.innerHTML=e}}function dl(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?"":t}}function fl(){this.nextSibling&&this.parentNode.appendChild(this)}function pl(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function hl(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Ii&&t.documentElement.namespaceURI===Ii?t.createElement(e):t.createElementNS(n,e)}}function ml(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function gl(e){var t=Di(e);return(t.local?ml:hl)(t)}function vl(){return null}function yl(){var e=this.parentNode;e&&e.removeChild(this)}function bl(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xl(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function wl(e){return function(){var t=this.__on;if(t){for(var n,r=0,o=-1,a=t.length;r<a;++r)n=t[r],e.type&&n.type!==e.type||n.name!==e.name?t[++o]=n:this.removeEventListener(n.type,n.listener,n.options);++o?t.length=o:delete this.__on}}}function Sl(e,t,n){return function(){var r,o=this.__on,a=function(e){return function(t){e.call(this,t,this.__data__)}}(t);if(o)for(var i=0,l=o.length;i<l;++i)if((r=o[i]).type===e.type&&r.name===e.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=a,r.options=n),void(r.value=t);this.addEventListener(e.type,a,n),r={type:e.type,name:e.name,value:t,listener:a,options:n},o?o.push(r):this.__on=[r]}}function kl(e,t,n){var r=Ui(e),o=r.CustomEvent;"function"===typeof o?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),e.dispatchEvent(o)}function El(e,t){return function(){return kl(this,e,t)}}function Cl(e,t){return function(){return kl(this,e,t.apply(this,arguments))}}el.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};var _l=[null];function Nl(e,t){this._groups=e,this._parents=t}function jl(){return new Nl([[document.documentElement]],_l)}Nl.prototype=jl.prototype={constructor:Nl,select:function(e){"function"!==typeof e&&(e=yi(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var a,i,l=t[o],s=l.length,c=r[o]=new Array(s),u=0;u<s;++u)(a=l[u])&&(i=e.call(a,a.__data__,u,l))&&("__data__"in a&&(i.__data__=a.__data__),c[u]=i);return new Nl(r,this._parents)},selectAll:function(e){e="function"===typeof e?wi(e):xi(e);for(var t=this._groups,n=t.length,r=[],o=[],a=0;a<n;++a)for(var i,l=t[a],s=l.length,c=0;c<s;++c)(i=l[c])&&(r.push(e.call(i,i.__data__,c,l)),o.push(i));return new Nl(r,o)},selectChild:function(e){return this.select(null==e?Ci:function(e){return function(){return Ei.call(this.children,e)}}("function"===typeof e?e:ki(e)))},selectChildren:function(e){return this.selectAll(null==e?Ni:function(e){return function(){return _i.call(this.children,e)}}("function"===typeof e?e:ki(e)))},filter:function(e){"function"!==typeof e&&(e=Si(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var a,i=t[o],l=i.length,s=r[o]=[],c=0;c<l;++c)(a=i[c])&&e.call(a,a.__data__,c,i)&&s.push(a);return new Nl(r,this._parents)},data:function(e,t){if(!arguments.length)return Array.from(this,Ri);var n=t?Ti:Pi,r=this._parents,o=this._groups;"function"!==typeof e&&(e=function(e){return function(){return e}}(e));for(var a=o.length,i=new Array(a),l=new Array(a),s=new Array(a),c=0;c<a;++c){var u=r[c],d=o[c],f=d.length,p=zi(e.call(u,u&&u.__data__,c,r)),h=p.length,m=l[c]=new Array(h),g=i[c]=new Array(h);n(u,d,m,g,s[c]=new Array(f),p,t);for(var v,y,b=0,x=0;b<h;++b)if(v=m[b]){for(b>=x&&(x=b+1);!(y=g[x])&&++x<h;);v._next=y||null}}return(i=new Nl(i,r))._enter=l,i._exit=s,i},enter:function(){return new Nl(this._enter||this._groups.map(ji),this._parents)},exit:function(){return new Nl(this._exit||this._groups.map(ji),this._parents)},join:function(e,t,n){var r=this.enter(),o=this,a=this.exit();return"function"===typeof e?(r=e(r))&&(r=r.selection()):r=r.append(e+""),null!=t&&(o=t(o))&&(o=o.selection()),null==n?a.remove():n(a),r&&o?r.merge(o).order():o},merge:function(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,o=n.length,a=r.length,i=Math.min(o,a),l=new Array(o),s=0;s<i;++s)for(var c,u=n[s],d=r[s],f=u.length,p=l[s]=new Array(f),h=0;h<f;++h)(c=u[h]||d[h])&&(p[h]=c);for(;s<o;++s)l[s]=n[s];return new Nl(l,this._parents)},selection:function(){return this},order:function(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r,o=e[t],a=o.length-1,i=o[a];--a>=0;)(r=o[a])&&(i&&4^r.compareDocumentPosition(i)&&i.parentNode.insertBefore(r,i),i=r);return this},sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=Oi);for(var n=this._groups,r=n.length,o=new Array(r),a=0;a<r;++a){for(var i,l=n[a],s=l.length,c=o[a]=new Array(s),u=0;u<s;++u)(i=l[u])&&(c[u]=i);c.sort(t)}return new Nl(o,this._parents).order()},call:function(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,a=r.length;o<a;++o){var i=r[o];if(i)return i}return null},size:function(){let e=0;for(const t of this)++e;return e},empty:function(){return!this.node()},each:function(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o,a=t[n],i=0,l=a.length;i<l;++i)(o=a[i])&&e.call(o,o.__data__,i,a);return this},attr:function(e,t){var n=Di(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==t?n.local?$i:Li:"function"===typeof t?n.local?Vi:Hi:n.local?Bi:Fi)(n,t))},style:function(e,t,n){return arguments.length>1?this.each((null==t?Wi:"function"===typeof t?Ki:Yi)(e,t,null==n?"":n)):Xi(this.node(),e)},property:function(e,t){return arguments.length>1?this.each((null==t?qi:"function"===typeof t?Zi:Gi)(e,t)):this.node()[e]},classed:function(e,t){var n=Qi(e+"");if(arguments.length<2){for(var r=Ji(this.node()),o=-1,a=n.length;++o<a;)if(!r.contains(n[o]))return!1;return!0}return this.each(("function"===typeof t?al:t?rl:ol)(n,t))},text:function(e){return arguments.length?this.each(null==e?il:("function"===typeof e?sl:ll)(e)):this.node().textContent},html:function(e){return arguments.length?this.each(null==e?cl:("function"===typeof e?dl:ul)(e)):this.node().innerHTML},raise:function(){return this.each(fl)},lower:function(){return this.each(pl)},append:function(e){var t="function"===typeof e?e:gl(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})},insert:function(e,t){var n="function"===typeof e?e:gl(e),r=null==t?vl:"function"===typeof t?t:yi(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(yl)},clone:function(e){return this.select(e?xl:bl)},datum:function(e){return arguments.length?this.property("__data__",e):this.node().__data__},on:function(e,t,n){var r,o,a=function(e){return e.trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}(e+""),i=a.length;if(!(arguments.length<2)){for(l=t?Sl:wl,r=0;r<i;++r)this.each(l(a[r],t,n));return this}var l=this.node().__on;if(l)for(var s,c=0,u=l.length;c<u;++c)for(r=0,s=l[c];r<i;++r)if((o=a[r]).type===s.type&&o.name===s.name)return s.value},dispatch:function(e,t){return this.each(("function"===typeof t?Cl:El)(e,t))},[Symbol.iterator]:function*(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r,o=e[t],a=0,i=o.length;a<i;++a)(r=o[a])&&(yield r)}};const Ml=jl;function Pl(e){return"string"===typeof e?new Nl([[document.querySelector(e)]],[document.documentElement]):new Nl([[e]],_l)}const Tl={passive:!1},Rl={capture:!0,passive:!1};function zl(e){e.stopImmediatePropagation()}function Ol(e){e.preventDefault(),e.stopImmediatePropagation()}function Il(e){var t=e.document.documentElement,n=Pl(e).on("dragstart.drag",Ol,Rl);"onselectstart"in t?n.on("selectstart.drag",Ol,Rl):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Al(e,t){var n=e.document.documentElement,r=Pl(e).on("dragstart.drag",null);t&&(r.on("click.drag",Ol,Rl),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function Dl(e){return((e=Math.exp(e))+1/e)/2}const Ll=function e(t,n,r){function o(e,o){var a,i,l=e[0],s=e[1],c=e[2],u=o[0],d=o[1],f=o[2],p=u-l,h=d-s,m=p*p+h*h;if(m<1e-12)i=Math.log(f/c)/t,a=function(e){return[l+e*p,s+e*h,c*Math.exp(t*e*i)]};else{var g=Math.sqrt(m),v=(f*f-c*c+r*m)/(2*c*n*g),y=(f*f-c*c-r*m)/(2*f*n*g),b=Math.log(Math.sqrt(v*v+1)-v),x=Math.log(Math.sqrt(y*y+1)-y);i=(x-b)/t,a=function(e){var r=e*i,o=Dl(b),a=c/(n*g)*(o*function(e){return((e=Math.exp(2*e))-1)/(e+1)}(t*r+b)-function(e){return((e=Math.exp(e))-1/e)/2}(b));return[l+a*p,s+a*h,c*o/Dl(t*r+b)]}}return a.duration=1e3*i*t/Math.SQRT2,a}return o.rho=function(t){var n=Math.max(.001,+t),r=n*n;return e(n,r,r*r)},o}(Math.SQRT2,2,4);function $l(e,t){if(e=function(e){let t;for(;t=e.sourceEvent;)e=t;return e}(e),void 0===t&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}if(t.getBoundingClientRect){var o=t.getBoundingClientRect();return[e.clientX-o.left-t.clientLeft,e.clientY-o.top-t.clientTop]}}return[e.pageX,e.pageY]}var Fl,Bl,Hl=0,Vl=0,Ul=0,Wl=0,Yl=0,Kl=0,Xl="object"===typeof performance&&performance.now?performance:Date,ql="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Gl(){return Yl||(ql(Zl),Yl=Xl.now()+Kl)}function Zl(){Yl=0}function Ql(){this._call=this._time=this._next=null}function Jl(e,t,n){var r=new Ql;return r.restart(e,t,n),r}function es(){Yl=(Wl=Xl.now())+Kl,Hl=Vl=0;try{!function(){Gl(),++Hl;for(var e,t=Fl;t;)(e=Yl-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Hl}()}finally{Hl=0,function(){var e,t,n=Fl,r=1/0;for(;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:Fl=t);Bl=e,ns(r)}(),Yl=0}}function ts(){var e=Xl.now(),t=e-Wl;t>1e3&&(Kl-=t,Wl=e)}function ns(e){Hl||(Vl&&(Vl=clearTimeout(Vl)),e-Yl>24?(e<1/0&&(Vl=setTimeout(es,e-Xl.now()-Kl)),Ul&&(Ul=clearInterval(Ul))):(Ul||(Wl=Xl.now(),Ul=setInterval(ts,1e3)),Hl=1,ql(es)))}function rs(e,t,n){var r=new Ql;return t=null==t?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}Ql.prototype=Jl.prototype={constructor:Ql,restart:function(e,t,n){if("function"!==typeof e)throw new TypeError("callback is not a function");n=(null==n?Gl():+n)+(null==t?0:+t),this._next||Bl===this||(Bl?Bl._next=this:Fl=this,Bl=this),this._call=e,this._time=n,ns()},stop:function(){this._call&&(this._call=null,this._time=1/0,ns())}};var os=gi("start","end","cancel","interrupt"),as=[];function is(e,t,n,r,o,a){var i=e.__transition;if(i){if(n in i)return}else e.__transition={};!function(e,t,n){var r,o=e.__transition;function a(e){n.state=1,n.timer.restart(i,n.delay,n.time),n.delay<=e&&i(e-n.delay)}function i(a){var c,u,d,f;if(1!==n.state)return s();for(c in o)if((f=o[c]).name===n.name){if(3===f.state)return rs(i);4===f.state?(f.state=6,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete o[c]):+c<t&&(f.state=6,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete o[c])}if(rs(function(){3===n.state&&(n.state=4,n.timer.restart(l,n.delay,n.time),l(a))}),n.state=2,n.on.call("start",e,e.__data__,n.index,n.group),2===n.state){for(n.state=3,r=new Array(d=n.tween.length),c=0,u=-1;c<d;++c)(f=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(r[++u]=f);r.length=u+1}}function l(t){for(var o=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(s),n.state=5,1),a=-1,i=r.length;++a<i;)r[a].call(e,o);5===n.state&&(n.on.call("end",e,e.__data__,n.index,n.group),s())}function s(){for(var r in n.state=6,n.timer.stop(),delete o[t],o)return;delete e.__transition}o[t]=n,n.timer=Jl(a,0,n.time)}(e,n,{name:t,index:r,group:o,on:os,tween:as,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function ls(e,t){var n=cs(e,t);if(n.state>0)throw new Error("too late; already scheduled");return n}function ss(e,t){var n=cs(e,t);if(n.state>3)throw new Error("too late; already running");return n}function cs(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function us(e,t){var n,r,o,a=e.__transition,i=!0;if(a){for(o in t=null==t?null:t+"",a)(n=a[o]).name===t?(r=n.state>2&&n.state<5,n.state=6,n.timer.stop(),n.on.call(r?"interrupt":"cancel",e,e.__data__,n.index,n.group),delete a[o]):i=!1;i&&delete e.__transition}}function ds(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var fs,ps=180/Math.PI,hs={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ms(e,t,n,r,o,a){var i,l,s;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(s=e*n+t*r)&&(n-=e*s,r-=t*s),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,s/=l),e*r<t*n&&(e=-e,t=-t,s=-s,i=-i),{translateX:o,translateY:a,rotate:Math.atan2(t,e)*ps,skewX:Math.atan(s)*ps,scaleX:i,scaleY:l}}function gs(e,t,n,r){function o(e){return e.length?e.pop()+" ":""}return function(a,i){var l=[],s=[];return a=e(a),i=e(i),function(e,r,o,a,i,l){if(e!==o||r!==a){var s=i.push("translate(",null,t,null,n);l.push({i:s-4,x:ds(e,o)},{i:s-2,x:ds(r,a)})}else(o||a)&&i.push("translate("+o+t+a+n)}(a.translateX,a.translateY,i.translateX,i.translateY,l,s),function(e,t,n,a){e!==t?(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(o(n)+"rotate(",null,r)-2,x:ds(e,t)})):t&&n.push(o(n)+"rotate("+t+r)}(a.rotate,i.rotate,l,s),function(e,t,n,a){e!==t?a.push({i:n.push(o(n)+"skewX(",null,r)-2,x:ds(e,t)}):t&&n.push(o(n)+"skewX("+t+r)}(a.skewX,i.skewX,l,s),function(e,t,n,r,a,i){if(e!==n||t!==r){var l=a.push(o(a)+"scale(",null,",",null,")");i.push({i:l-4,x:ds(e,n)},{i:l-2,x:ds(t,r)})}else 1===n&&1===r||a.push(o(a)+"scale("+n+","+r+")")}(a.scaleX,a.scaleY,i.scaleX,i.scaleY,l,s),a=i=null,function(e){for(var t,n=-1,r=s.length;++n<r;)l[(t=s[n]).i]=t.x(e);return l.join("")}}}var vs=gs(function(e){const t=new("function"===typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?hs:ms(t.a,t.b,t.c,t.d,t.e,t.f)},"px, ","px)","deg)"),ys=gs(function(e){return null==e?hs:(fs||(fs=document.createElementNS("http://www.w3.org/2000/svg","g")),fs.setAttribute("transform",e),(e=fs.transform.baseVal.consolidate())?ms((e=e.matrix).a,e.b,e.c,e.d,e.e,e.f):hs)},", ",")",")");function bs(e,t){var n,r;return function(){var o=ss(this,e),a=o.tween;if(a!==n)for(var i=0,l=(r=n=a).length;i<l;++i)if(r[i].name===t){(r=r.slice()).splice(i,1);break}o.tween=r}}function xs(e,t,n){var r,o;if("function"!==typeof n)throw new Error;return function(){var a=ss(this,e),i=a.tween;if(i!==r){o=(r=i).slice();for(var l={name:t,value:n},s=0,c=o.length;s<c;++s)if(o[s].name===t){o[s]=l;break}s===c&&o.push(l)}a.tween=o}}function ws(e,t,n){var r=e._id;return e.each(function(){var e=ss(this,r);(e.value||(e.value={}))[t]=n.apply(this,arguments)}),function(e){return cs(e,r).value[t]}}function Ss(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function ks(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Es(){}var Cs=.7,_s=1/Cs,Ns="\\s*([+-]?\\d+)\\s*",js="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ms="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ps=/^#([0-9a-f]{3,8})$/,Ts=new RegExp(`^rgb\\(${Ns},${Ns},${Ns}\\)$`),Rs=new RegExp(`^rgb\\(${Ms},${Ms},${Ms}\\)$`),zs=new RegExp(`^rgba\\(${Ns},${Ns},${Ns},${js}\\)$`),Os=new RegExp(`^rgba\\(${Ms},${Ms},${Ms},${js}\\)$`),Is=new RegExp(`^hsl\\(${js},${Ms},${Ms}\\)$`),As=new RegExp(`^hsla\\(${js},${Ms},${Ms},${js}\\)$`),Ds={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Ls(){return this.rgb().formatHex()}function $s(){return this.rgb().formatRgb()}function Fs(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Ps.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?Bs(t):3===n?new Us(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?Hs(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?Hs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=Ts.exec(e))?new Us(t[1],t[2],t[3],1):(t=Rs.exec(e))?new Us(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=zs.exec(e))?Hs(t[1],t[2],t[3],t[4]):(t=Os.exec(e))?Hs(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=Is.exec(e))?Gs(t[1],t[2]/100,t[3]/100,1):(t=As.exec(e))?Gs(t[1],t[2]/100,t[3]/100,t[4]):Ds.hasOwnProperty(e)?Bs(Ds[e]):"transparent"===e?new Us(NaN,NaN,NaN,0):null}function Bs(e){return new Us(e>>16&255,e>>8&255,255&e,1)}function Hs(e,t,n,r){return r<=0&&(e=t=n=NaN),new Us(e,t,n,r)}function Vs(e,t,n,r){return 1===arguments.length?function(e){return e instanceof Es||(e=Fs(e)),e?new Us((e=e.rgb()).r,e.g,e.b,e.opacity):new Us}(e):new Us(e,t,n,null==r?1:r)}function Us(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}function Ws(){return`#${qs(this.r)}${qs(this.g)}${qs(this.b)}`}function Ys(){const e=Ks(this.opacity);return`${1===e?"rgb(":"rgba("}${Xs(this.r)}, ${Xs(this.g)}, ${Xs(this.b)}${1===e?")":`, ${e})`}`}function Ks(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Xs(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function qs(e){return((e=Xs(e))<16?"0":"")+e.toString(16)}function Gs(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Qs(e,t,n,r)}function Zs(e){if(e instanceof Qs)return new Qs(e.h,e.s,e.l,e.opacity);if(e instanceof Es||(e=Fs(e)),!e)return new Qs;if(e instanceof Qs)return e;var t=(e=e.rgb()).r/255,n=e.g/255,r=e.b/255,o=Math.min(t,n,r),a=Math.max(t,n,r),i=NaN,l=a-o,s=(a+o)/2;return l?(i=t===a?(n-r)/l+6*(n<r):n===a?(r-t)/l+2:(t-n)/l+4,l/=s<.5?a+o:2-a-o,i*=60):l=s>0&&s<1?0:i,new Qs(i,l,s,e.opacity)}function Qs(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function Js(e){return(e=(e||0)%360)<0?e+360:e}function ec(e){return Math.max(0,Math.min(1,e||0))}function tc(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}function nc(e,t,n,r,o){var a=e*e,i=a*e;return((1-3*e+3*a-i)*t+(4-6*a+3*i)*n+(1+3*e+3*a-3*i)*r+i*o)/6}Ss(Es,Fs,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ls,formatHex:Ls,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Zs(this).formatHsl()},formatRgb:$s,toString:$s}),Ss(Us,Vs,ks(Es,{brighter(e){return e=null==e?_s:Math.pow(_s,e),new Us(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?Cs:Math.pow(Cs,e),new Us(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Us(Xs(this.r),Xs(this.g),Xs(this.b),Ks(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ws,formatHex:Ws,formatHex8:function(){return`#${qs(this.r)}${qs(this.g)}${qs(this.b)}${qs(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Ys,toString:Ys})),Ss(Qs,function(e,t,n,r){return 1===arguments.length?Zs(e):new Qs(e,t,n,null==r?1:r)},ks(Es,{brighter(e){return e=null==e?_s:Math.pow(_s,e),new Qs(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?Cs:Math.pow(Cs,e),new Qs(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new Us(tc(e>=240?e-240:e+120,o,r),tc(e,o,r),tc(e<120?e+240:e-120,o,r),this.opacity)},clamp(){return new Qs(Js(this.h),ec(this.s),ec(this.l),Ks(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ks(this.opacity);return`${1===e?"hsl(":"hsla("}${Js(this.h)}, ${100*ec(this.s)}%, ${100*ec(this.l)}%${1===e?")":`, ${e})`}`}}));const rc=e=>()=>e;function oc(e,t){return function(n){return e+n*t}}function ac(e){return 1===(e=+e)?ic:function(t,n){return n-t?function(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}(t,n,e):rc(isNaN(t)?n:t)}}function ic(e,t){var n=t-e;return n?oc(e,n):rc(isNaN(e)?t:e)}const lc=function e(t){var n=ac(t);function r(e,t){var r=n((e=Vs(e)).r,(t=Vs(t)).r),o=n(e.g,t.g),a=n(e.b,t.b),i=ic(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=o(t),e.b=a(t),e.opacity=i(t),e+""}}return r.gamma=e,r}(1);function sc(e){return function(t){var n,r,o=t.length,a=new Array(o),i=new Array(o),l=new Array(o);for(n=0;n<o;++n)r=Vs(t[n]),a[n]=r.r||0,i[n]=r.g||0,l[n]=r.b||0;return a=e(a),i=e(i),l=e(l),r.opacity=1,function(e){return r.r=a(e),r.g=i(e),r.b=l(e),r+""}}}sc(function(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),o=e[r],a=e[r+1],i=r>0?e[r-1]:2*o-a,l=r<t-1?e[r+2]:2*a-o;return nc((n-r/t)*t,i,o,a,l)}}),sc(function(e){var t=e.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),o=e[(r+t-1)%t],a=e[r%t],i=e[(r+1)%t],l=e[(r+2)%t];return nc((n-r/t)*t,o,a,i,l)}});var cc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,uc=new RegExp(cc.source,"g");function dc(e,t){var n,r,o,a=cc.lastIndex=uc.lastIndex=0,i=-1,l=[],s=[];for(e+="",t+="";(n=cc.exec(e))&&(r=uc.exec(t));)(o=r.index)>a&&(o=t.slice(a,o),l[i]?l[i]+=o:l[++i]=o),(n=n[0])===(r=r[0])?l[i]?l[i]+=r:l[++i]=r:(l[++i]=null,s.push({i:i,x:ds(n,r)})),a=uc.lastIndex;return a<t.length&&(o=t.slice(a),l[i]?l[i]+=o:l[++i]=o),l.length<2?s[0]?function(e){return function(t){return e(t)+""}}(s[0].x):function(e){return function(){return e}}(t):(t=s.length,function(e){for(var n,r=0;r<t;++r)l[(n=s[r]).i]=n.x(e);return l.join("")})}function fc(e,t){var n;return("number"===typeof t?ds:t instanceof Fs?lc:(n=Fs(t))?(t=n,lc):dc)(e,t)}function pc(e){return function(){this.removeAttribute(e)}}function hc(e){return function(){this.removeAttributeNS(e.space,e.local)}}function mc(e,t,n){var r,o,a=n+"";return function(){var i=this.getAttribute(e);return i===a?null:i===r?o:o=t(r=i,n)}}function gc(e,t,n){var r,o,a=n+"";return function(){var i=this.getAttributeNS(e.space,e.local);return i===a?null:i===r?o:o=t(r=i,n)}}function vc(e,t,n){var r,o,a;return function(){var i,l,s=n(this);if(null!=s)return(i=this.getAttribute(e))===(l=s+"")?null:i===r&&l===o?a:(o=l,a=t(r=i,s));this.removeAttribute(e)}}function yc(e,t,n){var r,o,a;return function(){var i,l,s=n(this);if(null!=s)return(i=this.getAttributeNS(e.space,e.local))===(l=s+"")?null:i===r&&l===o?a:(o=l,a=t(r=i,s));this.removeAttributeNS(e.space,e.local)}}function bc(e,t){var n,r;function o(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&function(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}(e,o)),n}return o._value=t,o}function xc(e,t){var n,r;function o(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&function(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}(e,o)),n}return o._value=t,o}function wc(e,t){return function(){ls(this,e).delay=+t.apply(this,arguments)}}function Sc(e,t){return t=+t,function(){ls(this,e).delay=t}}function kc(e,t){return function(){ss(this,e).duration=+t.apply(this,arguments)}}function Ec(e,t){return t=+t,function(){ss(this,e).duration=t}}var Cc=Ml.prototype.constructor;function _c(e){return function(){this.style.removeProperty(e)}}var Nc=0;function jc(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Mc(){return++Nc}var Pc=Ml.prototype;jc.prototype=function(e){return Ml().transition(e)}.prototype={constructor:jc,select:function(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=yi(e));for(var r=this._groups,o=r.length,a=new Array(o),i=0;i<o;++i)for(var l,s,c=r[i],u=c.length,d=a[i]=new Array(u),f=0;f<u;++f)(l=c[f])&&(s=e.call(l,l.__data__,f,c))&&("__data__"in l&&(s.__data__=l.__data__),d[f]=s,is(d[f],t,n,f,d,cs(l,n)));return new jc(a,this._parents,t,n)},selectAll:function(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=xi(e));for(var r=this._groups,o=r.length,a=[],i=[],l=0;l<o;++l)for(var s,c=r[l],u=c.length,d=0;d<u;++d)if(s=c[d]){for(var f,p=e.call(s,s.__data__,d,c),h=cs(s,n),m=0,g=p.length;m<g;++m)(f=p[m])&&is(f,t,n,m,p,h);a.push(p),i.push(s)}return new jc(a,i,t,n)},selectChild:Pc.selectChild,selectChildren:Pc.selectChildren,filter:function(e){"function"!==typeof e&&(e=Si(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var a,i=t[o],l=i.length,s=r[o]=[],c=0;c<l;++c)(a=i[c])&&e.call(a,a.__data__,c,i)&&s.push(a);return new jc(r,this._parents,this._name,this._id)},merge:function(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,o=n.length,a=Math.min(r,o),i=new Array(r),l=0;l<a;++l)for(var s,c=t[l],u=n[l],d=c.length,f=i[l]=new Array(d),p=0;p<d;++p)(s=c[p]||u[p])&&(f[p]=s);for(;l<r;++l)i[l]=t[l];return new jc(i,this._parents,this._name,this._id)},selection:function(){return new Cc(this._groups,this._parents)},transition:function(){for(var e=this._name,t=this._id,n=Mc(),r=this._groups,o=r.length,a=0;a<o;++a)for(var i,l=r[a],s=l.length,c=0;c<s;++c)if(i=l[c]){var u=cs(i,t);is(i,e,n,c,l,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new jc(r,this._parents,e,n)},call:Pc.call,nodes:Pc.nodes,node:Pc.node,size:Pc.size,empty:Pc.empty,each:Pc.each,on:function(e,t){var n=this._id;return arguments.length<2?cs(this.node(),n).on.on(e):this.each(function(e,t,n){var r,o,a=function(e){return(e+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||"start"===e})}(t)?ls:ss;return function(){var i=a(this,e),l=i.on;l!==r&&(o=(r=l).copy()).on(t,n),i.on=o}}(n,e,t))},attr:function(e,t){var n=Di(e),r="transform"===n?ys:fc;return this.attrTween(e,"function"===typeof t?(n.local?yc:vc)(n,r,ws(this,"attr."+e,t)):null==t?(n.local?hc:pc)(n):(n.local?gc:mc)(n,r,t))},attrTween:function(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!==typeof t)throw new Error;var r=Di(e);return this.tween(n,(r.local?bc:xc)(r,t))},style:function(e,t,n){var r="transform"===(e+="")?vs:fc;return null==t?this.styleTween(e,function(e,t){var n,r,o;return function(){var a=Xi(this,e),i=(this.style.removeProperty(e),Xi(this,e));return a===i?null:a===n&&i===r?o:o=t(n=a,r=i)}}(e,r)).on("end.style."+e,_c(e)):"function"===typeof t?this.styleTween(e,function(e,t,n){var r,o,a;return function(){var i=Xi(this,e),l=n(this),s=l+"";return null==l&&(this.style.removeProperty(e),s=l=Xi(this,e)),i===s?null:i===r&&s===o?a:(o=s,a=t(r=i,l))}}(e,r,ws(this,"style."+e,t))).each(function(e,t){var n,r,o,a,i="style."+t,l="end."+i;return function(){var s=ss(this,e),c=s.on,u=null==s.value[i]?a||(a=_c(t)):void 0;c===n&&o===u||(r=(n=c).copy()).on(l,o=u),s.on=r}}(this._id,e)):this.styleTween(e,function(e,t,n){var r,o,a=n+"";return function(){var i=Xi(this,e);return i===a?null:i===r?o:o=t(r=i,n)}}(e,r,t),n).on("end.style."+e,null)},styleTween:function(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==t)return this.tween(r,null);if("function"!==typeof t)throw new Error;return this.tween(r,function(e,t,n){var r,o;function a(){var a=t.apply(this,arguments);return a!==o&&(r=(o=a)&&function(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}(e,a,n)),r}return a._value=t,a}(e,t,null==n?"":n))},text:function(e){return this.tween("text","function"===typeof e?function(e){return function(){var t=e(this);this.textContent=null==t?"":t}}(ws(this,"text",e)):function(e){return function(){this.textContent=e}}(null==e?"":e+""))},textTween:function(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(null==e)return this.tween(t,null);if("function"!==typeof e)throw new Error;return this.tween(t,function(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&function(e){return function(t){this.textContent=e.call(this,t)}}(r)),t}return r._value=e,r}(e))},remove:function(){return this.on("end.remove",function(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}(this._id))},tween:function(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r,o=cs(this.node(),n).tween,a=0,i=o.length;a<i;++a)if((r=o[a]).name===e)return r.value;return null}return this.each((null==t?bs:xs)(n,e,t))},delay:function(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?wc:Sc)(t,e)):cs(this.node(),t).delay},duration:function(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?kc:Ec)(t,e)):cs(this.node(),t).duration},ease:function(e){var t=this._id;return arguments.length?this.each(function(e,t){if("function"!==typeof t)throw new Error;return function(){ss(this,e).ease=t}}(t,e)):cs(this.node(),t).ease},easeVarying:function(e){if("function"!==typeof e)throw new Error;return this.each(function(e,t){return function(){var n=t.apply(this,arguments);if("function"!==typeof n)throw new Error;ss(this,e).ease=n}}(this._id,e))},end:function(){var e,t,n=this,r=n._id,o=n.size();return new Promise(function(a,i){var l={value:i},s={value:function(){0===--o&&a()}};n.each(function(){var n=ss(this,r),o=n.on;o!==e&&((t=(e=o).copy())._.cancel.push(l),t._.interrupt.push(l),t._.end.push(s)),n.on=t}),0===o&&a()})},[Symbol.iterator]:Pc[Symbol.iterator]};var Tc={time:null,delay:0,duration:250,ease:function(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}};function Rc(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}Ml.prototype.interrupt=function(e){return this.each(function(){us(this,e)})},Ml.prototype.transition=function(e){var t,n;e instanceof jc?(t=e._id,e=e._name):(t=Mc(),(n=Tc).time=Gl(),e=null==e?null:e+"");for(var r=this._groups,o=r.length,a=0;a<o;++a)for(var i,l=r[a],s=l.length,c=0;c<s;++c)(i=l[c])&&is(i,e,t,c,l,n||Rc(i,t));return new jc(r,this._parents,e,t)};const zc=e=>()=>e;function Oc(e,t){let{sourceEvent:n,target:r,transform:o,dispatch:a}=t;Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:a}})}function Ic(e,t,n){this.k=e,this.x=t,this.y=n}Ic.prototype={constructor:Ic,scale:function(e){return 1===e?this:new Ic(this.k*e,this.x,this.y)},translate:function(e,t){return 0===e&0===t?this:new Ic(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ac=new Ic(1,0,0);function Dc(e){e.stopImmediatePropagation()}function Lc(e){e.preventDefault(),e.stopImmediatePropagation()}function $c(e){return(!e.ctrlKey||"wheel"===e.type)&&!e.button}function Fc(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e).hasAttribute("viewBox")?[[(e=e.viewBox.baseVal).x,e.y],[e.x+e.width,e.y+e.height]]:[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]:[[0,0],[e.clientWidth,e.clientHeight]]}function Bc(){return this.__zoom||Ac}function Hc(e){return-e.deltaY*(1===e.deltaMode?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Vc(){return navigator.maxTouchPoints||"ontouchstart"in this}function Uc(e,t,n){var r=e.invertX(t[0][0])-n[0][0],o=e.invertX(t[1][0])-n[1][0],a=e.invertY(t[0][1])-n[0][1],i=e.invertY(t[1][1])-n[1][1];return e.translate(o>r?(r+o)/2:Math.min(0,r)||Math.max(0,o),i>a?(a+i)/2:Math.min(0,a)||Math.max(0,i))}function Wc(){var e,t,n,r=$c,o=Fc,a=Uc,i=Hc,l=Vc,s=[0,1/0],c=[[-1/0,-1/0],[1/0,1/0]],u=250,d=Ll,f=gi("start","zoom","end"),p=0,h=10;function m(e){e.property("__zoom",Bc).on("wheel.zoom",S,{passive:!1}).on("mousedown.zoom",k).on("dblclick.zoom",E).filter(l).on("touchstart.zoom",C).on("touchmove.zoom",_).on("touchend.zoom touchcancel.zoom",N).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(e,t){return(t=Math.max(s[0],Math.min(s[1],t)))===e.k?e:new Ic(t,e.x,e.y)}function v(e,t,n){var r=t[0]-n[0]*e.k,o=t[1]-n[1]*e.k;return r===e.x&&o===e.y?e:new Ic(e.k,r,o)}function y(e){return[(+e[0][0]+ +e[1][0])/2,(+e[0][1]+ +e[1][1])/2]}function b(e,t,n,r){e.on("start.zoom",function(){x(this,arguments).event(r).start()}).on("interrupt.zoom end.zoom",function(){x(this,arguments).event(r).end()}).tween("zoom",function(){var e=this,a=arguments,i=x(e,a).event(r),l=o.apply(e,a),s=null==n?y(l):"function"===typeof n?n.apply(e,a):n,c=Math.max(l[1][0]-l[0][0],l[1][1]-l[0][1]),u=e.__zoom,f="function"===typeof t?t.apply(e,a):t,p=d(u.invert(s).concat(c/u.k),f.invert(s).concat(c/f.k));return function(e){if(1===e)e=f;else{var t=p(e),n=c/t[2];e=new Ic(n,s[0]-t[0]*n,s[1]-t[1]*n)}i.zoom(null,e)}})}function x(e,t,n){return!n&&e.__zooming||new w(e,t)}function w(e,t){this.that=e,this.args=t,this.active=0,this.sourceEvent=null,this.extent=o.apply(e,t),this.taps=0}function S(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(r.apply(this,arguments)){var l=x(this,n).event(e),u=this.__zoom,d=Math.max(s[0],Math.min(s[1],u.k*Math.pow(2,i.apply(this,arguments)))),f=$l(e);if(l.wheel)l.mouse[0][0]===f[0]&&l.mouse[0][1]===f[1]||(l.mouse[1]=u.invert(l.mouse[0]=f)),clearTimeout(l.wheel);else{if(u.k===d)return;l.mouse=[f,u.invert(f)],us(this),l.start()}Lc(e),l.wheel=setTimeout(function(){l.wheel=null,l.end()},150),l.zoom("mouse",a(v(g(u,d),l.mouse[0],l.mouse[1]),l.extent,c))}}function k(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];if(!n&&r.apply(this,arguments)){var l=e.currentTarget,s=x(this,o,!0).event(e),u=Pl(e.view).on("mousemove.zoom",function(e){if(Lc(e),!s.moved){var t=e.clientX-f,n=e.clientY-h;s.moved=t*t+n*n>p}s.event(e).zoom("mouse",a(v(s.that.__zoom,s.mouse[0]=$l(e,l),s.mouse[1]),s.extent,c))},!0).on("mouseup.zoom",function(e){u.on("mousemove.zoom mouseup.zoom",null),Al(e.view,s.moved),Lc(e),s.event(e).end()},!0),d=$l(e,l),f=e.clientX,h=e.clientY;Il(e.view),Dc(e),s.mouse=[d,this.__zoom.invert(d)],us(this),s.start()}}function E(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(r.apply(this,arguments)){var l=this.__zoom,s=$l(e.changedTouches?e.changedTouches[0]:e,this),d=l.invert(s),f=l.k*(e.shiftKey?.5:2),p=a(v(g(l,f),s,d),o.apply(this,n),c);Lc(e),u>0?Pl(this).transition().duration(u).call(b,p,s,e):Pl(this).call(m.transform,p,s,e)}}function C(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];if(r.apply(this,arguments)){var l,s,c,u,d=n.touches,f=d.length,p=x(this,a,n.changedTouches.length===f).event(n);for(Dc(n),s=0;s<f;++s)u=[u=$l(c=d[s],this),this.__zoom.invert(u),c.identifier],p.touch0?p.touch1||p.touch0[2]===u[2]||(p.touch1=u,p.taps=0):(p.touch0=u,l=!0,p.taps=1+!!e);e&&(e=clearTimeout(e)),l&&(p.taps<2&&(t=u[0],e=setTimeout(function(){e=null},500)),us(this),p.start())}}function _(e){if(this.__zooming){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o,i,l,s,u=x(this,n).event(e),d=e.changedTouches,f=d.length;for(Lc(e),o=0;o<f;++o)l=$l(i=d[o],this),u.touch0&&u.touch0[2]===i.identifier?u.touch0[0]=l:u.touch1&&u.touch1[2]===i.identifier&&(u.touch1[0]=l);if(i=u.that.__zoom,u.touch1){var p=u.touch0[0],h=u.touch0[1],m=u.touch1[0],y=u.touch1[1],b=(b=m[0]-p[0])*b+(b=m[1]-p[1])*b,w=(w=y[0]-h[0])*w+(w=y[1]-h[1])*w;i=g(i,Math.sqrt(b/w)),l=[(p[0]+m[0])/2,(p[1]+m[1])/2],s=[(h[0]+y[0])/2,(h[1]+y[1])/2]}else{if(!u.touch0)return;l=u.touch0[0],s=u.touch0[1]}u.zoom("touch",a(v(i,l,s),u.extent,c))}}function N(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.__zooming){var i,l,s=x(this,o).event(e),c=e.changedTouches,u=c.length;for(Dc(e),n&&clearTimeout(n),n=setTimeout(function(){n=null},500),i=0;i<u;++i)l=c[i],s.touch0&&s.touch0[2]===l.identifier?delete s.touch0:s.touch1&&s.touch1[2]===l.identifier&&delete s.touch1;if(s.touch1&&!s.touch0&&(s.touch0=s.touch1,delete s.touch1),s.touch0)s.touch0[1]=this.__zoom.invert(s.touch0[0]);else if(s.end(),2===s.taps&&(l=$l(l,this),Math.hypot(t[0]-l[0],t[1]-l[1])<h)){var d=Pl(this).on("dblclick.zoom");d&&d.apply(this,arguments)}}}return m.transform=function(e,t,n,r){var o=e.selection?e.selection():e;o.property("__zoom",Bc),e!==o?b(e,t,n,r):o.interrupt().each(function(){x(this,arguments).event(r).start().zoom(null,"function"===typeof t?t.apply(this,arguments):t).end()})},m.scaleBy=function(e,t,n,r){m.scaleTo(e,function(){return this.__zoom.k*("function"===typeof t?t.apply(this,arguments):t)},n,r)},m.scaleTo=function(e,t,n,r){m.transform(e,function(){var e=o.apply(this,arguments),r=this.__zoom,i=null==n?y(e):"function"===typeof n?n.apply(this,arguments):n,l=r.invert(i),s="function"===typeof t?t.apply(this,arguments):t;return a(v(g(r,s),i,l),e,c)},n,r)},m.translateBy=function(e,t,n,r){m.transform(e,function(){return a(this.__zoom.translate("function"===typeof t?t.apply(this,arguments):t,"function"===typeof n?n.apply(this,arguments):n),o.apply(this,arguments),c)},null,r)},m.translateTo=function(e,t,n,r,i){m.transform(e,function(){var e=o.apply(this,arguments),i=this.__zoom,l=null==r?y(e):"function"===typeof r?r.apply(this,arguments):r;return a(Ac.translate(l[0],l[1]).scale(i.k).translate("function"===typeof t?-t.apply(this,arguments):-t,"function"===typeof n?-n.apply(this,arguments):-n),e,c)},r,i)},w.prototype={event:function(e){return e&&(this.sourceEvent=e),this},start:function(){return 1===++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(e,t){return this.mouse&&"mouse"!==e&&(this.mouse[1]=t.invert(this.mouse[0])),this.touch0&&"touch"!==e&&(this.touch0[1]=t.invert(this.touch0[0])),this.touch1&&"touch"!==e&&(this.touch1[1]=t.invert(this.touch1[0])),this.that.__zoom=t,this.emit("zoom"),this},end:function(){return 0===--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(e){var t=Pl(this.that).datum();f.call(e,this.that,new Oc(e,{sourceEvent:this.sourceEvent,target:m,type:e,transform:this.that.__zoom,dispatch:f}),t)}},m.wheelDelta=function(e){return arguments.length?(i="function"===typeof e?e:zc(+e),m):i},m.filter=function(e){return arguments.length?(r="function"===typeof e?e:zc(!!e),m):r},m.touchable=function(e){return arguments.length?(l="function"===typeof e?e:zc(!!e),m):l},m.extent=function(e){return arguments.length?(o="function"===typeof e?e:zc([[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]]),m):o},m.scaleExtent=function(e){return arguments.length?(s[0]=+e[0],s[1]=+e[1],m):[s[0],s[1]]},m.translateExtent=function(e){return arguments.length?(c[0][0]=+e[0][0],c[1][0]=+e[1][0],c[0][1]=+e[0][1],c[1][1]=+e[1][1],m):[[c[0][0],c[0][1]],[c[1][0],c[1][1]]]},m.constrain=function(e){return arguments.length?(a=e,m):a},m.duration=function(e){return arguments.length?(u=+e,m):u},m.interpolate=function(e){return arguments.length?(d=e,m):d},m.on=function(){var e=f.on.apply(f,arguments);return e===f?m:e},m.clickDistance=function(e){return arguments.length?(p=(e=+e)*e,m):Math.sqrt(p)},m.tapDistance=function(e){return arguments.length?(h=+e,m):h},m}Ic.prototype;const Yc=e=>()=>e;function Kc(e,t){let{sourceEvent:n,subject:r,target:o,identifier:a,active:i,x:l,y:s,dx:c,dy:u,dispatch:d}=t;Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:a,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}function Xc(e){return!e.ctrlKey&&!e.button}function qc(){return this.parentNode}function Gc(e,t){return null==t?{x:e.x,y:e.y}:t}function Zc(){return navigator.maxTouchPoints||"ontouchstart"in this}Kc.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};const Qc=(0,t.createContext)(null),Jc=Qc.Provider,eu=e=>`Node type "${e}" not found. Using fallback type "default".`,tu=()=>"The React Flow parent container needs a width and a height to render the graph.",nu=()=>"Only child nodes can use a parent extent.",ru=()=>"Can't create edge. An edge needs a source and a target.",ou=e=>`Marker type "${e}" doesn't exist.`,au=(e,t)=>`Couldn't create edge for ${e?"target":"source"} handle id: "${e?t.targetHandle:t.sourceHandle}", edge id: ${t.id}.`,iu=()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",lu=e=>`Edge type "${e}" not found. Using fallback type "default".`,su=e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,cu=(()=>"[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001")();function uu(e,n){const r=(0,t.useContext)(Qc);if(null===r)throw new Error(cu);return si(r,e,n)}const du=()=>{const e=(0,t.useContext)(Qc);if(null===e)throw new Error(cu);return(0,t.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe,destroy:e.destroy}),[e])},fu=e=>e.userSelectionActive?"none":"all";function pu(e){let{position:n,children:r,className:o,style:a,...i}=e;const l=uu(fu),s=`${n}`.split("-");return t.createElement("div",{className:ti(["react-flow__panel",o,...s]),style:{...a,pointerEvents:l},...i},r)}function hu(e){let{proOptions:n,position:r="bottom-right"}=e;return n?.hideAttribution?null:t.createElement(pu,{position:r,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"},t.createElement("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution"},"React Flow"))}var mu=(0,t.memo)(e=>{let{x:n,y:r,label:o,labelStyle:a={},labelShowBg:i=!0,labelBgStyle:l={},labelBgPadding:s=[2,4],labelBgBorderRadius:c=2,children:u,className:d,...f}=e;const p=(0,t.useRef)(null),[h,m]=(0,t.useState)({x:0,y:0,width:0,height:0}),g=ti(["react-flow__edge-textwrapper",d]);return(0,t.useEffect)(()=>{if(p.current){const e=p.current.getBBox();m({x:e.x,y:e.y,width:e.width,height:e.height})}},[o]),"undefined"!==typeof o&&o?t.createElement("g",{transform:`translate(${n-h.width/2} ${r-h.height/2})`,className:g,visibility:h.width?"visible":"hidden",...f},i&&t.createElement("rect",{width:h.width+2*s[0],x:-s[0],y:-s[1],height:h.height+2*s[1],className:"react-flow__edge-textbg",style:l,rx:c,ry:c}),t.createElement("text",{className:"react-flow__edge-text",y:h.height/2,dy:"0.3em",ref:p,style:a},o),u):null});const gu=e=>({width:e.offsetWidth,height:e.offsetHeight}),vu=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(e,t),n)},yu=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},t=arguments.length>1?arguments[1]:void 0;return{x:vu(e.x,t[0][0],t[1][0]),y:vu(e.y,t[0][1],t[1][1])}},bu=(e,t,n)=>e<t?vu(Math.abs(e-t),1,50)/50:e>n?-vu(Math.abs(e-n),1,50)/50:0,xu=(e,t)=>[20*bu(e.x,35,t.width-35),20*bu(e.y,35,t.height-35)],wu=e=>e.getRootNode?.()||window?.document,Su=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),ku=e=>{let{x:t,y:n,width:r,height:o}=e;return{x:t,y:n,x2:t+r,y2:n+o}},Eu=e=>{let{x:t,y:n,x2:r,y2:o}=e;return{x:t,y:n,width:r-t,height:o-n}},Cu=e=>({...e.positionAbsolute||{x:0,y:0},width:e.width||0,height:e.height||0}),_u=(e,t)=>{const n=Math.max(0,Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x)),r=Math.max(0,Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y));return Math.ceil(n*r)},Nu=e=>!isNaN(e)&&isFinite(e),ju=Symbol.for("internals"),Mu=["Enter"," ","Escape"],Pu=(e,t)=>{0};function Tu(e){const t=(e=>"nativeEvent"in e)(e)?e.nativeEvent:e,n=t.composedPath?.()?.[0]||e.target;return["INPUT","SELECT","TEXTAREA"].includes(n?.nodeName)||n?.hasAttribute("contenteditable")||!!n?.closest(".nokey")}const Ru=e=>"clientX"in e,zu=(e,t)=>{const n=Ru(e),r=n?e.clientX:e.touches?.[0].clientX,o=n?e.clientY:e.touches?.[0].clientY;return{x:r-(t?.left??0),y:o-(t?.top??0)}},Ou=()=>"undefined"!==typeof navigator&&navigator?.userAgent?.indexOf("Mac")>=0,Iu=e=>{let{id:n,path:r,labelX:o,labelY:a,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:m=20}=e;return t.createElement(t.Fragment,null,t.createElement("path",{id:n,style:f,d:r,fill:"none",className:"react-flow__edge-path",markerEnd:p,markerStart:h}),m&&t.createElement("path",{d:r,fill:"none",strokeOpacity:0,strokeWidth:m,className:"react-flow__edge-interaction"}),i&&Nu(o)&&Nu(a)?t.createElement(mu,{x:o,y:a,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d}):null)};Iu.displayName="BaseEdge";function Au(e,t,n){return void 0===n?n:r=>{const o=t().edges.find(t=>t.id===e);o&&n(r,{...o})}}function Du(e){let{sourceX:t,sourceY:n,targetX:r,targetY:o}=e;const a=Math.abs(r-t)/2,i=r<t?r+a:r-a,l=Math.abs(o-n)/2;return[i,o<n?o+l:o-l,a,l]}function Lu(e){let{sourceX:t,sourceY:n,targetX:r,targetY:o,sourceControlX:a,sourceControlY:i,targetControlX:l,targetControlY:s}=e;const c=.125*t+.375*a+.375*l+.125*r,u=.125*n+.375*i+.375*s+.125*o;return[c,u,Math.abs(c-t),Math.abs(u-n)]}var $u,Fu,Bu,Hu,Vu,Uu;function Wu(e){let{pos:t,x1:n,y1:r,x2:o,y2:a}=e;return t===Uu.Left||t===Uu.Right?[.5*(n+o),r]:[n,.5*(r+a)]}function Yu(e){let{sourceX:t,sourceY:n,sourcePosition:r=Uu.Bottom,targetX:o,targetY:a,targetPosition:i=Uu.Top}=e;const[l,s]=Wu({pos:r,x1:t,y1:n,x2:o,y2:a}),[c,u]=Wu({pos:i,x1:o,y1:a,x2:t,y2:n}),[d,f,p,h]=Lu({sourceX:t,sourceY:n,targetX:o,targetY:a,sourceControlX:l,sourceControlY:s,targetControlX:c,targetControlY:u});return[`M${t},${n} C${l},${s} ${c},${u} ${o},${a}`,d,f,p,h]}!function(e){e.Strict="strict",e.Loose="loose"}($u||($u={})),function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"}(Fu||(Fu={})),function(e){e.Partial="partial",e.Full="full"}(Bu||(Bu={})),function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"}(Hu||(Hu={})),function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"}(Vu||(Vu={})),function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"}(Uu||(Uu={}));const Ku=(0,t.memo)(e=>{let{sourceX:n,sourceY:r,targetX:o,targetY:a,sourcePosition:i=Uu.Bottom,targetPosition:l=Uu.Top,label:s,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:g,interactionWidth:v}=e;const[y,b,x]=Yu({sourceX:n,sourceY:r,sourcePosition:i,targetX:o,targetY:a,targetPosition:l});return t.createElement(Iu,{path:y,labelX:b,labelY:x,label:s,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:g,interactionWidth:v})});Ku.displayName="SimpleBezierEdge";const Xu={[Uu.Left]:{x:-1,y:0},[Uu.Right]:{x:1,y:0},[Uu.Top]:{x:0,y:-1},[Uu.Bottom]:{x:0,y:1}},qu=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Gu(e){let{source:t,sourcePosition:n=Uu.Bottom,target:r,targetPosition:o=Uu.Top,center:a,offset:i}=e;const l=Xu[n],s=Xu[o],c={x:t.x+l.x*i,y:t.y+l.y*i},u={x:r.x+s.x*i,y:r.y+s.y*i},d=(e=>{let{source:t,sourcePosition:n=Uu.Bottom,target:r}=e;return n===Uu.Left||n===Uu.Right?t.x<r.x?{x:1,y:0}:{x:-1,y:0}:t.y<r.y?{x:0,y:1}:{x:0,y:-1}})({source:c,sourcePosition:n,target:u}),f=0!==d.x?"x":"y",p=d[f];let h,m,g=[];const v={x:0,y:0},y={x:0,y:0},[b,x,w,S]=Du({sourceX:t.x,sourceY:t.y,targetX:r.x,targetY:r.y});if(l[f]*s[f]===-1){h=a.x??b,m=a.y??x;const e=[{x:h,y:c.y},{x:h,y:u.y}],t=[{x:c.x,y:m},{x:u.x,y:m}];g=l[f]===p?"x"===f?e:t:"x"===f?t:e}else{const e=[{x:c.x,y:u.y}],a=[{x:u.x,y:c.y}];if(g="x"===f?l.x===p?a:e:l.y===p?e:a,n===o){const e=Math.abs(t[f]-r[f]);if(e<=i){const n=Math.min(i-1,i-e);l[f]===p?v[f]=(c[f]>t[f]?-1:1)*n:y[f]=(u[f]>r[f]?-1:1)*n}}if(n!==o){const t="x"===f?"y":"x",n=l[f]===s[t],r=c[t]>u[t],o=c[t]<u[t];(1===l[f]&&(!n&&r||n&&o)||1!==l[f]&&(!n&&o||n&&r))&&(g="x"===f?e:a)}const d={x:c.x+v.x,y:c.y+v.y},b={x:u.x+y.x,y:u.y+y.y};Math.max(Math.abs(d.x-g[0].x),Math.abs(b.x-g[0].x))>=Math.max(Math.abs(d.y-g[0].y),Math.abs(b.y-g[0].y))?(h=(d.x+b.x)/2,m=g[0].y):(h=g[0].x,m=(d.y+b.y)/2)}return[[t,{x:c.x+v.x,y:c.y+v.y},...g,{x:u.x+y.x,y:u.y+y.y},r],h,m,w,S]}function Zu(e){let{sourceX:t,sourceY:n,sourcePosition:r=Uu.Bottom,targetX:o,targetY:a,targetPosition:i=Uu.Top,borderRadius:l=5,centerX:s,centerY:c,offset:u=20}=e;const[d,f,p,h,m]=Gu({source:{x:t,y:n},sourcePosition:r,target:{x:o,y:a},targetPosition:i,center:{x:s,y:c},offset:u}),g=d.reduce((e,t,n)=>{let r="";return r=n>0&&n<d.length-1?function(e,t,n,r){const o=Math.min(qu(e,t)/2,qu(t,n)/2,r),{x:a,y:i}=t;if(e.x===a&&a===n.x||e.y===i&&i===n.y)return`L${a} ${i}`;if(e.y===i)return`L ${a+o*(e.x<n.x?-1:1)},${i}Q ${a},${i} ${a},${i+o*(e.y<n.y?1:-1)}`;const l=e.x<n.x?1:-1;return`L ${a},${i+o*(e.y<n.y?-1:1)}Q ${a},${i} ${a+o*l},${i}`}(d[n-1],t,d[n+1],l):`${0===n?"M":"L"}${t.x} ${t.y}`,e+=r},"");return[g,f,p,h,m]}const Qu=(0,t.memo)(e=>{let{sourceX:n,sourceY:r,targetX:o,targetY:a,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:f,sourcePosition:p=Uu.Bottom,targetPosition:h=Uu.Top,markerEnd:m,markerStart:g,pathOptions:v,interactionWidth:y}=e;const[b,x,w]=Zu({sourceX:n,sourceY:r,sourcePosition:p,targetX:o,targetY:a,targetPosition:h,borderRadius:v?.borderRadius,offset:v?.offset});return t.createElement(Iu,{path:b,labelX:x,labelY:w,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:g,interactionWidth:y})});Qu.displayName="SmoothStepEdge";const Ju=(0,t.memo)(e=>t.createElement(Qu,{...e,pathOptions:(0,t.useMemo)(()=>({borderRadius:0,offset:e.pathOptions?.offset}),[e.pathOptions?.offset])}));Ju.displayName="StepEdge";const ed=(0,t.memo)(e=>{let{sourceX:n,sourceY:r,targetX:o,targetY:a,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:m}=e;const[g,v,y]=function(e){let{sourceX:t,sourceY:n,targetX:r,targetY:o}=e;const[a,i,l,s]=Du({sourceX:t,sourceY:n,targetX:r,targetY:o});return[`M ${t},${n}L ${r},${o}`,a,i,l,s]}({sourceX:n,sourceY:r,targetX:o,targetY:a});return t.createElement(Iu,{path:g,labelX:v,labelY:y,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:m})});function td(e,t){return e>=0?.5*e:25*t*Math.sqrt(-e)}function nd(e){let{pos:t,x1:n,y1:r,x2:o,y2:a,c:i}=e;switch(t){case Uu.Left:return[n-td(n-o,i),r];case Uu.Right:return[n+td(o-n,i),r];case Uu.Top:return[n,r-td(r-a,i)];case Uu.Bottom:return[n,r+td(a-r,i)]}}function rd(e){let{sourceX:t,sourceY:n,sourcePosition:r=Uu.Bottom,targetX:o,targetY:a,targetPosition:i=Uu.Top,curvature:l=.25}=e;const[s,c]=nd({pos:r,x1:t,y1:n,x2:o,y2:a,c:l}),[u,d]=nd({pos:i,x1:o,y1:a,x2:t,y2:n,c:l}),[f,p,h,m]=Lu({sourceX:t,sourceY:n,targetX:o,targetY:a,sourceControlX:s,sourceControlY:c,targetControlX:u,targetControlY:d});return[`M${t},${n} C${s},${c} ${u},${d} ${o},${a}`,f,p,h,m]}ed.displayName="StraightEdge";const od=(0,t.memo)(e=>{let{sourceX:n,sourceY:r,targetX:o,targetY:a,sourcePosition:i=Uu.Bottom,targetPosition:l=Uu.Top,label:s,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:g,pathOptions:v,interactionWidth:y}=e;const[b,x,w]=rd({sourceX:n,sourceY:r,sourcePosition:i,targetX:o,targetY:a,targetPosition:l,curvature:v?.curvature});return t.createElement(Iu,{path:b,labelX:x,labelY:w,label:s,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:g,interactionWidth:y})});od.displayName="BezierEdge";const ad=(0,t.createContext)(null),id=ad.Provider;ad.Consumer;const ld=e=>{let{source:t,sourceHandle:n,target:r,targetHandle:o}=e;return`reactflow__edge-${t}${n||""}-${r}${o||""}`},sd=(e,t)=>{if("undefined"===typeof e)return"";if("string"===typeof e)return e;return`${t?`${t}__`:""}${Object.keys(e).sort().map(t=>`${t}=${e[t]}`).join("&")}`},cd=(e,t)=>{if(!e.source||!e.target)return Pu(0,ru()),t;let n;var r;return n="id"in(r=e)&&"source"in r&&"target"in r?{...e}:{...e,id:ld(e)},((e,t)=>t.some(t=>t.source===e.source&&t.target===e.target&&(t.sourceHandle===e.sourceHandle||!t.sourceHandle&&!e.sourceHandle)&&(t.targetHandle===e.targetHandle||!t.targetHandle&&!e.targetHandle)))(n,t)?t:t.concat(n)},ud=(e,t,n,r)=>{let{x:o,y:a}=e,[i,l,s]=t,[c,u]=r;const d={x:(o-i)/s,y:(a-l)/s};return n?{x:c*Math.round(d.x/c),y:u*Math.round(d.y/u)}:d},dd=(e,t)=>{let{x:n,y:r}=e,[o,a,i]=t;return{x:n*i+o,y:r*i+a}},fd=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0];if(!e)return{x:0,y:0,positionAbsolute:{x:0,y:0}};const n=(e.width??0)*t[0],r=(e.height??0)*t[1],o={x:e.position.x-n,y:e.position.y-r};return{...o,positionAbsolute:e.positionAbsolute?{x:e.positionAbsolute.x-n,y:e.positionAbsolute.y-r}:o}},pd=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0];if(0===e.length)return{x:0,y:0,width:0,height:0};const n=e.reduce((e,n)=>{const{x:r,y:o}=fd(n,t).positionAbsolute;return Su(e,ku({x:r,y:o,width:n.width||0,height:n.height||0}))},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return Eu(n)},hd=function(e,t){let[n,r,o]=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,1],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[0,0];const s={x:(t.x-n)/o,y:(t.y-r)/o,width:t.width/o,height:t.height/o},c=[];return e.forEach(e=>{const{width:t,height:n,selectable:r=!0,hidden:o=!1}=e;if(i&&!r||o)return!1;const{positionAbsolute:u}=fd(e,l),d={x:u.x,y:u.y,width:t||0,height:n||0},f=_u(s,d);("undefined"===typeof t||"undefined"===typeof n||null===t||null===n||a&&f>0||f>=(t||0)*(n||0)||e.dragging)&&c.push(e)}),c},md=(e,t)=>{const n=e.map(e=>e.id);return t.filter(e=>n.includes(e.source)||n.includes(e.target))},gd=function(e,t,n,r,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.1;const i=t/(e.width*(1+a)),l=n/(e.height*(1+a)),s=Math.min(i,l),c=vu(s,r,o);return{x:t/2-(e.x+e.width/2)*c,y:n/2-(e.y+e.height/2)*c,zoom:c}},vd=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.transition().duration(t)};function yd(e,t,n,r){return(t[n]||[]).reduce((t,o)=>(`${e.id}-${o.id}-${n}`!==r&&t.push({id:o.id||null,type:n,nodeId:e.id,x:(e.positionAbsolute?.x??0)+o.x+o.width/2,y:(e.positionAbsolute?.y??0)+o.y+o.height/2}),t),[])}const bd={source:null,target:null,sourceHandle:null,targetHandle:null},xd=()=>({handleDomNode:null,isValid:!1,connection:bd,endHandle:null});function wd(e,t,n,r,o,a,i){const l="target"===o,s=i.querySelector(`.react-flow__handle[data-id="${e?.nodeId}-${e?.id}-${e?.type}"]`),c={...xd(),handleDomNode:s};if(s){const e=Sd(void 0,s),o=s.getAttribute("data-nodeid"),i=s.getAttribute("data-handleid"),u=s.classList.contains("connectable"),d=s.classList.contains("connectableend"),f={source:l?o:n,sourceHandle:l?i:r,target:l?n:o,targetHandle:l?r:i};c.connection=f;u&&d&&(t===$u.Strict?l&&"source"===e||!l&&"target"===e:o!==n||i!==r)&&(c.endHandle={nodeId:o,handleId:i,type:e},c.isValid=a(f))}return c}function Sd(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function kd(e){e?.classList.remove("valid","connecting","react-flow__handle-valid","react-flow__handle-connecting")}function Ed(e,t){let n=null;return t?n="valid":e&&!t&&(n="invalid"),n}function Cd(e){let{event:t,handleId:n,nodeId:r,onConnect:o,isTarget:a,getState:i,setState:l,isValidConnection:s,edgeUpdaterType:c,onReconnectEnd:u}=e;const d=wu(t.target),{connectionMode:f,domNode:p,autoPanOnConnect:h,connectionRadius:m,onConnectStart:g,panBy:v,getNodes:y,cancelConnection:b}=i();let x,w=0;const{x:S,y:k}=zu(t),E=d?.elementFromPoint(S,k),C=Sd(c,E),_=p?.getBoundingClientRect();if(!_||!C)return;let N,j=zu(t,_),M=!1,P=null,T=!1,R=null;const z=function(e){let{nodes:t,nodeId:n,handleId:r,handleType:o}=e;return t.reduce((e,t)=>{if(t[ju]){const{handleBounds:a}=t[ju];let i=[],l=[];a&&(i=yd(t,a,"source",`${n}-${r}-${o}`),l=yd(t,a,"target",`${n}-${r}-${o}`)),e.push(...i,...l)}return e},[])}({nodes:y(),nodeId:r,handleId:n,handleType:C}),O=()=>{if(!h)return;const[e,t]=xu(j,_);v({x:e,y:t}),w=requestAnimationFrame(O)};function I(e){const{transform:t}=i();j=zu(e,_);const{handle:o,validHandleResult:c}=function(e,t,n,r,o,a){const{x:i,y:l}=zu(e),s=t.elementsFromPoint(i,l).find(e=>e.classList.contains("react-flow__handle"));if(s){const e=s.getAttribute("data-nodeid");if(e){const t=Sd(void 0,s),r=s.getAttribute("data-handleid"),i=a({nodeId:e,id:r,type:t});if(i){const a=o.find(n=>n.nodeId===e&&n.type===t&&n.id===r);return{handle:{id:r,type:t,nodeId:e,x:a?.x||n.x,y:a?.y||n.y},validHandleResult:i}}}}let c=[],u=1/0;if(o.forEach(e=>{const t=Math.sqrt((e.x-n.x)**2+(e.y-n.y)**2);if(t<=r){const n=a(e);t<=u&&(t<u?c=[{handle:e,validHandleResult:n}]:t===u&&c.push({handle:e,validHandleResult:n}),u=t)}}),!c.length)return{handle:null,validHandleResult:xd()};if(1===c.length)return c[0];const d=c.some(e=>{let{validHandleResult:t}=e;return t.isValid}),f=c.some(e=>{let{handle:t}=e;return"target"===t.type});return c.find(e=>{let{handle:t,validHandleResult:n}=e;return f?"target"===t.type:!d||n.isValid})||c[0]}(e,d,ud(j,t,!1,[1,1]),m,z,e=>wd(e,f,r,n,a?"target":"source",s,d));if(x=o,M||(O(),M=!0),R=c.handleDomNode,P=c.connection,T=c.isValid,l({connectionPosition:x&&T?dd({x:x.x,y:x.y},t):j,connectionStatus:Ed(!!x,T),connectionEndHandle:c.endHandle}),!x&&!T&&!R)return kd(N);P.source!==P.target&&R&&(kd(N),N=R,R.classList.add("connecting","react-flow__handle-connecting"),R.classList.toggle("valid",T),R.classList.toggle("react-flow__handle-valid",T))}function A(e){(x||R)&&P&&T&&o?.(P),i().onConnectEnd?.(e),c&&u?.(e),kd(N),b(),cancelAnimationFrame(w),M=!1,T=!1,P=null,R=null,d.removeEventListener("mousemove",I),d.removeEventListener("mouseup",A),d.removeEventListener("touchmove",I),d.removeEventListener("touchend",A)}l({connectionPosition:j,connectionStatus:null,connectionNodeId:r,connectionHandleId:n,connectionHandleType:C,connectionStartHandle:{nodeId:r,handleId:n,type:C},connectionEndHandle:null}),g?.(t,{nodeId:r,handleId:n,handleType:C}),d.addEventListener("mousemove",I),d.addEventListener("mouseup",A),d.addEventListener("touchmove",I),d.addEventListener("touchend",A)}const _d=()=>!0,Nd=e=>({connectionStartHandle:e.connectionStartHandle,connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName}),jd=(0,t.forwardRef)((e,n)=>{let{type:r="source",position:o=Uu.Top,isValidConnection:a,isConnectable:i=!0,isConnectableStart:l=!0,isConnectableEnd:s=!0,id:c,onConnect:u,children:d,className:f,onMouseDown:p,onTouchStart:h,...m}=e;const g=c||null,v="target"===r,y=du(),b=(0,t.useContext)(ad),{connectOnClick:x,noPanClassName:w}=uu(Nd,ui),{connecting:S,clickConnecting:k}=uu(((e,t,n)=>r=>{const{connectionStartHandle:o,connectionEndHandle:a,connectionClickStartHandle:i}=r;return{connecting:o?.nodeId===e&&o?.handleId===t&&o?.type===n||a?.nodeId===e&&a?.handleId===t&&a?.type===n,clickConnecting:i?.nodeId===e&&i?.handleId===t&&i?.type===n}})(b,g,r),ui);b||y.getState().onError?.("010",iu());const E=e=>{const{defaultEdgeOptions:t,onConnect:n,hasDefaultEdges:r}=y.getState(),o={...t,...e};if(r){const{edges:e,setEdges:t}=y.getState();t(cd(o,e))}n?.(o),u?.(o)},C=e=>{if(!b)return;const t=Ru(e);l&&(t&&0===e.button||!t)&&Cd({event:e,handleId:g,nodeId:b,onConnect:E,isTarget:v,getState:y.getState,setState:y.setState,isValidConnection:a||y.getState().isValidConnection||_d}),t?p?.(e):h?.(e)};return t.createElement("div",{"data-handleid":g,"data-nodeid":b,"data-handlepos":o,"data-id":`${b}-${g}-${r}`,className:ti(["react-flow__handle",`react-flow__handle-${o}`,"nodrag",w,f,{source:!v,target:v,connectable:i,connectablestart:l,connectableend:s,connecting:k,connectionindicator:i&&(l&&!S||s&&S)}]),onMouseDown:C,onTouchStart:C,onClick:x?e=>{const{onClickConnectStart:t,onClickConnectEnd:n,connectionClickStartHandle:o,connectionMode:i,isValidConnection:s}=y.getState();if(!b||!o&&!l)return;if(!o)return t?.(e,{nodeId:b,handleId:g,handleType:r}),void y.setState({connectionClickStartHandle:{nodeId:b,type:r,handleId:g}});const c=wu(e.target),u=a||s||_d,{connection:d,isValid:f}=wd({nodeId:b,id:g,type:r},i,o.nodeId,o.handleId||null,o.type,u,c);f&&E(d),n?.(e),y.setState({connectionClickStartHandle:null})}:void 0,ref:n,...m},d)});jd.displayName="Handle";var Md=(0,t.memo)(jd);const Pd=e=>{let{data:n,isConnectable:r,targetPosition:o=Uu.Top,sourcePosition:a=Uu.Bottom}=e;return t.createElement(t.Fragment,null,t.createElement(Md,{type:"target",position:o,isConnectable:r}),n?.label,t.createElement(Md,{type:"source",position:a,isConnectable:r}))};Pd.displayName="DefaultNode";var Td=(0,t.memo)(Pd);const Rd=e=>{let{data:n,isConnectable:r,sourcePosition:o=Uu.Bottom}=e;return t.createElement(t.Fragment,null,n?.label,t.createElement(Md,{type:"source",position:o,isConnectable:r}))};Rd.displayName="InputNode";var zd=(0,t.memo)(Rd);const Od=e=>{let{data:n,isConnectable:r,targetPosition:o=Uu.Top}=e;return t.createElement(t.Fragment,null,t.createElement(Md,{type:"target",position:o,isConnectable:r}),n?.label)};Od.displayName="OutputNode";var Id=(0,t.memo)(Od);const Ad=()=>null;Ad.displayName="GroupNode";const Dd=e=>({selectedNodes:e.getNodes().filter(e=>e.selected),selectedEdges:e.edges.filter(e=>e.selected).map(e=>({...e}))}),Ld=e=>e.id;function $d(e,t){return ui(e.selectedNodes.map(Ld),t.selectedNodes.map(Ld))&&ui(e.selectedEdges.map(Ld),t.selectedEdges.map(Ld))}const Fd=(0,t.memo)(e=>{let{onSelectionChange:n}=e;const r=du(),{selectedNodes:o,selectedEdges:a}=uu(Dd,$d);return(0,t.useEffect)(()=>{const e={nodes:o,edges:a};n?.(e),r.getState().onSelectionChange.forEach(t=>t(e))},[o,a,n]),null});Fd.displayName="SelectionListener";const Bd=e=>!!e.onSelectionChange;function Hd(e){let{onSelectionChange:n}=e;const r=uu(Bd);return n||r?t.createElement(Fd,{onSelectionChange:n}):null}const Vd=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset});function Ud(e,n){(0,t.useEffect)(()=>{"undefined"!==typeof e&&n(e)},[e])}function Wd(e,n,r){(0,t.useEffect)(()=>{"undefined"!==typeof n&&r({[e]:n})},[n])}const Yd=e=>{let{nodes:n,edges:r,defaultNodes:o,defaultEdges:a,onConnect:i,onConnectStart:l,onConnectEnd:s,onClickConnectStart:c,onClickConnectEnd:u,nodesDraggable:d,nodesConnectable:f,nodesFocusable:p,edgesFocusable:h,edgesUpdatable:m,elevateNodesOnSelect:g,minZoom:v,maxZoom:y,nodeExtent:b,onNodesChange:x,onEdgesChange:w,elementsSelectable:S,connectionMode:k,snapGrid:E,snapToGrid:C,translateExtent:_,connectOnClick:N,defaultEdgeOptions:j,fitView:M,fitViewOptions:P,onNodesDelete:T,onEdgesDelete:R,onNodeDrag:z,onNodeDragStart:O,onNodeDragStop:I,onSelectionDrag:A,onSelectionDragStart:D,onSelectionDragStop:L,noPanClassName:$,nodeOrigin:F,rfId:B,autoPanOnConnect:H,autoPanOnNodeDrag:V,onError:U,connectionRadius:W,isValidConnection:Y,nodeDragThreshold:K}=e;const{setNodes:X,setEdges:q,setDefaultNodesAndEdges:G,setMinZoom:Z,setMaxZoom:Q,setTranslateExtent:J,setNodeExtent:ee,reset:te}=uu(Vd,ui),ne=du();return(0,t.useEffect)(()=>{const e=a?.map(e=>({...e,...j}));return G(o,e),()=>{te()}},[]),Wd("defaultEdgeOptions",j,ne.setState),Wd("connectionMode",k,ne.setState),Wd("onConnect",i,ne.setState),Wd("onConnectStart",l,ne.setState),Wd("onConnectEnd",s,ne.setState),Wd("onClickConnectStart",c,ne.setState),Wd("onClickConnectEnd",u,ne.setState),Wd("nodesDraggable",d,ne.setState),Wd("nodesConnectable",f,ne.setState),Wd("nodesFocusable",p,ne.setState),Wd("edgesFocusable",h,ne.setState),Wd("edgesUpdatable",m,ne.setState),Wd("elementsSelectable",S,ne.setState),Wd("elevateNodesOnSelect",g,ne.setState),Wd("snapToGrid",C,ne.setState),Wd("snapGrid",E,ne.setState),Wd("onNodesChange",x,ne.setState),Wd("onEdgesChange",w,ne.setState),Wd("connectOnClick",N,ne.setState),Wd("fitViewOnInit",M,ne.setState),Wd("fitViewOnInitOptions",P,ne.setState),Wd("onNodesDelete",T,ne.setState),Wd("onEdgesDelete",R,ne.setState),Wd("onNodeDrag",z,ne.setState),Wd("onNodeDragStart",O,ne.setState),Wd("onNodeDragStop",I,ne.setState),Wd("onSelectionDrag",A,ne.setState),Wd("onSelectionDragStart",D,ne.setState),Wd("onSelectionDragStop",L,ne.setState),Wd("noPanClassName",$,ne.setState),Wd("nodeOrigin",F,ne.setState),Wd("rfId",B,ne.setState),Wd("autoPanOnConnect",H,ne.setState),Wd("autoPanOnNodeDrag",V,ne.setState),Wd("onError",U,ne.setState),Wd("connectionRadius",W,ne.setState),Wd("isValidConnection",Y,ne.setState),Wd("nodeDragThreshold",K,ne.setState),Ud(n,X),Ud(r,q),Ud(v,Z),Ud(y,Q),Ud(_,J),Ud(b,ee),null},Kd={display:"none"},Xd={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},qd="react-flow__node-desc",Gd="react-flow__edge-desc",Zd=e=>e.ariaLiveMessage;function Qd(e){let{rfId:n}=e;const r=uu(Zd);return t.createElement("div",{id:`react-flow__aria-live-${n}`,"aria-live":"assertive","aria-atomic":"true",style:Xd},r)}function Jd(e){let{rfId:n,disableKeyboardA11y:r}=e;return t.createElement(t.Fragment,null,t.createElement("div",{id:`${qd}-${n}`,style:Kd},"Press enter or space to select a node.",!r&&"You can then use the arrow keys to move the node around."," Press delete to remove it and escape to cancel."," "),t.createElement("div",{id:`${Gd}-${n}`,style:Kd},"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),!r&&t.createElement(Qd,{rfId:n}))}var ef=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{actInsideInputWithModifier:!0};const[r,o]=(0,t.useState)(!1),a=(0,t.useRef)(!1),i=(0,t.useRef)(new Set([])),[l,s]=(0,t.useMemo)(()=>{if(null!==e){const t=(Array.isArray(e)?e:[e]).filter(e=>"string"===typeof e).map(e=>e.split("+")),n=t.reduce((e,t)=>e.concat(...t),[]);return[t,n]}return[[],[]]},[e]);return(0,t.useEffect)(()=>{const t="undefined"!==typeof document?document:null,r=n?.target||t;if(null!==e){const e=e=>{a.current=e.ctrlKey||e.metaKey||e.shiftKey;if((!a.current||a.current&&!n.actInsideInputWithModifier)&&Tu(e))return!1;const t=nf(e.code,s);i.current.add(e[t]),tf(l,i.current,!1)&&(e.preventDefault(),o(!0))},t=e=>{if((!a.current||a.current&&!n.actInsideInputWithModifier)&&Tu(e))return!1;const t=nf(e.code,s);tf(l,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(e[t]),"Meta"===e.key&&i.current.clear(),a.current=!1},c=()=>{i.current.clear(),o(!1)};return r?.addEventListener("keydown",e),r?.addEventListener("keyup",t),window.addEventListener("blur",c),()=>{r?.removeEventListener("keydown",e),r?.removeEventListener("keyup",t),window.removeEventListener("blur",c)}}},[e,o]),r};function tf(e,t,n){return e.filter(e=>n||e.length===t.size).some(e=>e.every(e=>t.has(e)))}function nf(e,t){return t.includes(e)?"code":"key"}function rf(e,t,n,r){const o=e.parentNode||e.parentId;if(!o)return n;const a=t.get(o),i=fd(a,r);return rf(a,t,{x:(n.x??0)+i.x,y:(n.y??0)+i.y,z:(a[ju]?.z??0)>(n.z??0)?a[ju]?.z??0:n.z??0},r)}function of(e,t,n){e.forEach(r=>{const o=r.parentNode||r.parentId;if(o&&!e.has(o))throw new Error(`Parent node ${o} not found`);if(o||n?.[r.id]){const{x:o,y:a,z:i}=rf(r,e,{...r.position,z:r[ju]?.z??0},t);r.positionAbsolute={x:o,y:a},r[ju].z=i,n?.[r.id]&&(r[ju].isParent=!0)}})}function af(e,t,n,r){const o=new Map,a={},i=r?1e3:0;return e.forEach(e=>{const n=(Nu(e.zIndex)?e.zIndex:0)+(e.selected?i:0),r=t.get(e.id),l={...e,positionAbsolute:{x:e.position.x,y:e.position.y}},s=e.parentNode||e.parentId;s&&(a[s]=!0);const c=r?.type&&r?.type!==e.type;Object.defineProperty(l,ju,{enumerable:!1,value:{handleBounds:c?void 0:r?.[ju]?.handleBounds,z:n}}),o.set(e.id,l)}),of(o,n,a),o}function lf(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{getNodes:n,width:r,height:o,minZoom:a,maxZoom:i,d3Zoom:l,d3Selection:s,fitViewOnInitDone:c,fitViewOnInit:u,nodeOrigin:d}=e(),f=t.initial&&!c&&u;if(l&&s&&(f||!t.initial)){const e=n().filter(e=>{const n=t.includeHiddenNodes?e.width&&e.height:!e.hidden;return t.nodes?.length?n&&t.nodes.some(t=>t.id===e.id):n}),c=e.every(e=>e.width&&e.height);if(e.length>0&&c){const n=pd(e,d),{x:c,y:u,zoom:f}=gd(n,r,o,t.minZoom??a,t.maxZoom??i,t.padding??.1),p=Ac.translate(c,u).scale(f);return"number"===typeof t.duration&&t.duration>0?l.transform(vd(s,t.duration),p):l.transform(s,p),!0}}return!1}function sf(e,t){return e.forEach(e=>{const n=t.get(e.id);n&&t.set(n.id,{...n,[ju]:n[ju],selected:e.selected})}),new Map(t)}function cf(e,t){return t.map(t=>{const n=e.find(e=>e.id===t.id);return n&&(t.selected=n.selected),t})}function uf(e){let{changedNodes:t,changedEdges:n,get:r,set:o}=e;const{nodeInternals:a,edges:i,onNodesChange:l,onEdgesChange:s,hasDefaultNodes:c,hasDefaultEdges:u}=r();t?.length&&(c&&o({nodeInternals:sf(t,a)}),l?.(t)),n?.length&&(u&&o({edges:cf(n,i)}),s?.(n))}const df=()=>{},ff={zoomIn:df,zoomOut:df,zoomTo:df,getZoom:()=>1,setViewport:df,getViewport:()=>({x:0,y:0,zoom:1}),fitView:()=>!1,setCenter:df,fitBounds:df,project:e=>e,screenToFlowPosition:e=>e,flowToScreenPosition:e=>e,viewportInitialized:!1},pf=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection});function hf(){const e=(()=>{const e=du(),{d3Zoom:n,d3Selection:r}=uu(pf,ui),o=(0,t.useMemo)(()=>r&&n?{zoomIn:e=>n.scaleBy(vd(r,e?.duration),1.2),zoomOut:e=>n.scaleBy(vd(r,e?.duration),1/1.2),zoomTo:(e,t)=>n.scaleTo(vd(r,t?.duration),e),getZoom:()=>e.getState().transform[2],setViewport:(t,o)=>{const[a,i,l]=e.getState().transform,s=Ac.translate(t.x??a,t.y??i).scale(t.zoom??l);n.transform(vd(r,o?.duration),s)},getViewport:()=>{const[t,n,r]=e.getState().transform;return{x:t,y:n,zoom:r}},fitView:t=>lf(e.getState,t),setCenter:(t,o,a)=>{const{width:i,height:l,maxZoom:s}=e.getState(),c="undefined"!==typeof a?.zoom?a.zoom:s,u=i/2-t*c,d=l/2-o*c,f=Ac.translate(u,d).scale(c);n.transform(vd(r,a?.duration),f)},fitBounds:(t,o)=>{const{width:a,height:i,minZoom:l,maxZoom:s}=e.getState(),{x:c,y:u,zoom:d}=gd(t,a,i,l,s,o?.padding??.1),f=Ac.translate(c,u).scale(d);n.transform(vd(r,o?.duration),f)},project:t=>{const{transform:n,snapToGrid:r,snapGrid:o}=e.getState();return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"),ud(t,n,r,o)},screenToFlowPosition:t=>{const{transform:n,snapToGrid:r,snapGrid:o,domNode:a}=e.getState();if(!a)return t;const{x:i,y:l}=a.getBoundingClientRect(),s={x:t.x-i,y:t.y-l};return ud(s,n,r,o)},flowToScreenPosition:t=>{const{transform:n,domNode:r}=e.getState();if(!r)return t;const{x:o,y:a}=r.getBoundingClientRect(),i=dd(t,n);return{x:i.x+o,y:i.y+a}},viewportInitialized:!0}:ff,[n,r]);return o})(),n=du(),r=(0,t.useCallback)(()=>n.getState().getNodes().map(e=>({...e})),[]),o=(0,t.useCallback)(e=>n.getState().nodeInternals.get(e),[]),a=(0,t.useCallback)(()=>{const{edges:e=[]}=n.getState();return e.map(e=>({...e}))},[]),i=(0,t.useCallback)(e=>{const{edges:t=[]}=n.getState();return t.find(t=>t.id===e)},[]),l=(0,t.useCallback)(e=>{const{getNodes:t,setNodes:r,hasDefaultNodes:o,onNodesChange:a}=n.getState(),i=t(),l="function"===typeof e?e(i):e;if(o)r(l);else if(a){const e=0===l.length?i.map(e=>({type:"remove",id:e.id})):l.map(e=>({item:e,type:"reset"}));a(e)}},[]),s=(0,t.useCallback)(e=>{const{edges:t=[],setEdges:r,hasDefaultEdges:o,onEdgesChange:a}=n.getState(),i="function"===typeof e?e(t):e;if(o)r(i);else if(a){a(0===i.length?t.map(e=>({type:"remove",id:e.id})):i.map(e=>({item:e,type:"reset"})))}},[]),c=(0,t.useCallback)(e=>{const t=Array.isArray(e)?e:[e],{getNodes:r,setNodes:o,hasDefaultNodes:a,onNodesChange:i}=n.getState();if(a){o([...r(),...t])}else if(i){const e=t.map(e=>({item:e,type:"add"}));i(e)}},[]),u=(0,t.useCallback)(e=>{const t=Array.isArray(e)?e:[e],{edges:r=[],setEdges:o,hasDefaultEdges:a,onEdgesChange:i}=n.getState();if(a)o([...r,...t]);else if(i){i(t.map(e=>({item:e,type:"add"})))}},[]),d=(0,t.useCallback)(()=>{const{getNodes:e,edges:t=[],transform:r}=n.getState(),[o,a,i]=r;return{nodes:e().map(e=>({...e})),edges:t.map(e=>({...e})),viewport:{x:o,y:a,zoom:i}}},[]),f=(0,t.useCallback)(e=>{let{nodes:t,edges:r}=e;const{nodeInternals:o,getNodes:a,edges:i,hasDefaultNodes:l,hasDefaultEdges:s,onNodesDelete:c,onEdgesDelete:u,onNodesChange:d,onEdgesChange:f}=n.getState(),p=(t||[]).map(e=>e.id),h=(r||[]).map(e=>e.id),m=a().reduce((e,t)=>{const n=t.parentNode||t.parentId,r=!p.includes(t.id)&&n&&e.find(e=>e.id===n);return("boolean"!==typeof t.deletable||t.deletable)&&(p.includes(t.id)||r)&&e.push(t),e},[]),g=i.filter(e=>"boolean"!==typeof e.deletable||e.deletable),v=g.filter(e=>h.includes(e.id));if(m||v){const e=md(m,g),t=[...v,...e],r=t.reduce((e,t)=>(e.includes(t.id)||e.push(t.id),e),[]);if((s||l)&&(s&&n.setState({edges:i.filter(e=>!r.includes(e.id))}),l&&(m.forEach(e=>{o.delete(e.id)}),n.setState({nodeInternals:new Map(o)}))),r.length>0&&(u?.(t),f&&f(r.map(e=>({id:e,type:"remove"})))),m.length>0&&(c?.(m),d)){d(m.map(e=>({id:e.id,type:"remove"})))}}},[]),p=(0,t.useCallback)(e=>{const t=Nu((r=e).width)&&Nu(r.height)&&Nu(r.x)&&Nu(r.y);var r;const o=t?null:n.getState().nodeInternals.get(e.id);if(!t&&!o)return[null,null,t];return[t?e:Cu(o),o,t]},[]),h=(0,t.useCallback)(function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0;const[o,a,i]=p(e);return o?(r||n.getState().getNodes()).filter(e=>{if(!i&&(e.id===a.id||!e.positionAbsolute))return!1;const n=Cu(e),r=_u(n,o);return t&&r>0||r>=o.width*o.height}):[]},[]),m=(0,t.useCallback)(function(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const[r]=p(e);if(!r)return!1;const o=_u(r,t);return n&&o>0||o>=r.width*r.height},[]);return(0,t.useMemo)(()=>({...e,getNodes:r,getNode:o,getEdges:a,getEdge:i,setNodes:l,setEdges:s,addNodes:c,addEdges:u,toObject:d,deleteElements:f,getIntersectingNodes:h,isNodeIntersecting:m}),[e,r,o,a,i,l,s,c,u,d,f,h,m])}const mf={actInsideInputWithModifier:!1};const gf={position:"absolute",width:"100%",height:"100%",top:0,left:0},vf=e=>({x:e.x,y:e.y,zoom:e.k}),yf=(e,t)=>e.target.closest(`.${t}`),bf=(e,t)=>2===t&&Array.isArray(e)&&e.includes(2),xf=e=>{const t=e.ctrlKey&&Ou()?10:1;return-e.deltaY*(1===e.deltaMode?.05:e.deltaMode?1:.002)*t},wf=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection,d3ZoomHandler:e.d3ZoomHandler,userSelectionActive:e.userSelectionActive}),Sf=e=>{let{onMove:n,onMoveStart:r,onMoveEnd:o,onPaneContextMenu:a,zoomOnScroll:i=!0,zoomOnPinch:l=!0,panOnScroll:s=!1,panOnScrollSpeed:c=.5,panOnScrollMode:u=Fu.Free,zoomOnDoubleClick:d=!0,elementsSelectable:f,panOnDrag:p=!0,defaultViewport:h,translateExtent:m,minZoom:g,maxZoom:v,zoomActivationKeyCode:y,preventScrolling:b=!0,children:x,noWheelClassName:w,noPanClassName:S}=e;const k=(0,t.useRef)(),E=du(),C=(0,t.useRef)(!1),_=(0,t.useRef)(!1),N=(0,t.useRef)(null),j=(0,t.useRef)({x:0,y:0,zoom:0}),{d3Zoom:M,d3Selection:P,d3ZoomHandler:T,userSelectionActive:R}=uu(wf,ui),z=ef(y),O=(0,t.useRef)(0),I=(0,t.useRef)(!1),A=(0,t.useRef)();return function(e){const n=du();(0,t.useEffect)(()=>{let t;const r=()=>{if(!e.current)return;const t=gu(e.current);0!==t.height&&0!==t.width||n.getState().onError?.("004",tu()),n.setState({width:t.width||500,height:t.height||500})};return r(),window.addEventListener("resize",r),e.current&&(t=new ResizeObserver(()=>r()),t.observe(e.current)),()=>{window.removeEventListener("resize",r),t&&e.current&&t.unobserve(e.current)}},[])}(N),(0,t.useEffect)(()=>{if(N.current){const e=N.current.getBoundingClientRect(),t=Wc().scaleExtent([g,v]).translateExtent(m),n=Pl(N.current).call(t),r=Ac.translate(h.x,h.y).scale(vu(h.zoom,g,v)),o=[[0,0],[e.width,e.height]],a=t.constrain()(r,o,m);t.transform(n,a),t.wheelDelta(xf),E.setState({d3Zoom:t,d3Selection:n,d3ZoomHandler:n.on("wheel.zoom"),transform:[a.x,a.y,a.k],domNode:N.current.closest(".react-flow")})}},[]),(0,t.useEffect)(()=>{P&&M&&(!s||z||R?"undefined"!==typeof T&&P.on("wheel.zoom",function(e,t){if(!b&&"wheel"===e.type&&!e.ctrlKey||yf(e,w))return null;e.preventDefault(),T.call(this,e,t)},{passive:!1}):P.on("wheel.zoom",e=>{if(yf(e,w))return!1;e.preventDefault(),e.stopImmediatePropagation();const t=P.property("__zoom").k||1;if(e.ctrlKey&&l){const n=$l(e),r=xf(e),o=t*Math.pow(2,r);return void M.scaleTo(P,o,n,e)}const a=1===e.deltaMode?20:1;let i=u===Fu.Vertical?0:e.deltaX*a,s=u===Fu.Horizontal?0:e.deltaY*a;!Ou()&&e.shiftKey&&u!==Fu.Vertical&&(i=e.deltaY*a,s=0),M.translateBy(P,-i/t*c,-s/t*c,{internal:!0});const d=vf(P.property("__zoom")),{onViewportChangeStart:f,onViewportChange:p,onViewportChangeEnd:h}=E.getState();clearTimeout(A.current),I.current||(I.current=!0,r?.(e,d),f?.(d)),I.current&&(n?.(e,d),p?.(d),A.current=setTimeout(()=>{o?.(e,d),h?.(d),I.current=!1},150))},{passive:!1}))},[R,s,u,P,M,T,z,l,b,w,r,n,o]),(0,t.useEffect)(()=>{M&&M.on("start",e=>{if(!e.sourceEvent||e.sourceEvent.internal)return null;O.current=e.sourceEvent?.button;const{onViewportChangeStart:t}=E.getState(),n=vf(e.transform);C.current=!0,j.current=n,"mousedown"===e.sourceEvent?.type&&E.setState({paneDragging:!0}),t?.(n),r?.(e.sourceEvent,n)})},[M,r]),(0,t.useEffect)(()=>{M&&(R&&!C.current?M.on("zoom",null):R||M.on("zoom",e=>{const{onViewportChange:t}=E.getState();if(E.setState({transform:[e.transform.x,e.transform.y,e.transform.k]}),_.current=!(!a||!bf(p,O.current??0)),(n||t)&&!e.sourceEvent?.internal){const r=vf(e.transform);t?.(r),n?.(e.sourceEvent,r)}}))},[R,M,n,p,a]),(0,t.useEffect)(()=>{M&&M.on("end",e=>{if(!e.sourceEvent||e.sourceEvent.internal)return null;const{onViewportChangeEnd:t}=E.getState();if(C.current=!1,E.setState({paneDragging:!1}),a&&bf(p,O.current??0)&&!_.current&&a(e.sourceEvent),_.current=!1,(o||t)&&(n=j.current,r=e.transform,n.x!==r.x||n.y!==r.y||n.zoom!==r.k)){const n=vf(e.transform);j.current=n,clearTimeout(k.current),k.current=setTimeout(()=>{t?.(n),o?.(e.sourceEvent,n)},s?150:0)}var n,r})},[M,s,p,o,a]),(0,t.useEffect)(()=>{M&&M.filter(e=>{const t=z||i,n=l&&e.ctrlKey;if((!0===p||Array.isArray(p)&&p.includes(1))&&1===e.button&&"mousedown"===e.type&&(yf(e,"react-flow__node")||yf(e,"react-flow__edge")))return!0;if(!p&&!t&&!s&&!d&&!l)return!1;if(R)return!1;if(!d&&"dblclick"===e.type)return!1;if(yf(e,w)&&"wheel"===e.type)return!1;if(yf(e,S)&&("wheel"!==e.type||s&&"wheel"===e.type&&!z))return!1;if(!l&&e.ctrlKey&&"wheel"===e.type)return!1;if(!t&&!s&&!n&&"wheel"===e.type)return!1;if(!p&&("mousedown"===e.type||"touchstart"===e.type))return!1;if(Array.isArray(p)&&!p.includes(e.button)&&"mousedown"===e.type)return!1;const r=Array.isArray(p)&&p.includes(e.button)||!e.button||e.button<=1;return(!e.ctrlKey||"wheel"===e.type)&&r})},[R,M,i,l,s,d,p,f,z]),t.createElement("div",{className:"react-flow__renderer",ref:N,style:gf},x)},kf=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Ef(){const{userSelectionActive:e,userSelectionRect:n}=uu(kf,ui);return e&&n?t.createElement("div",{className:"react-flow__selection react-flow__container",style:{width:n.width,height:n.height,transform:`translate(${n.x}px, ${n.y}px)`}}):null}function Cf(e,t){const n=t.parentNode||t.parentId,r=e.find(e=>e.id===n);if(r){const e=t.position.x+t.width-r.width,n=t.position.y+t.height-r.height;if(e>0||n>0||t.position.x<0||t.position.y<0){if(r.style={...r.style}||{},r.style.width=r.style.width??r.width,r.style.height=r.style.height??r.height,e>0&&(r.style.width+=e),n>0&&(r.style.height+=n),t.position.x<0){const e=Math.abs(t.position.x);r.position.x=r.position.x-e,r.style.width+=e,t.position.x=0}if(t.position.y<0){const e=Math.abs(t.position.y);r.position.y=r.position.y-e,r.style.height+=e,t.position.y=0}r.width=r.style.width,r.height=r.style.height}}}function _f(e,t){if(e.some(e=>"reset"===e.type))return e.filter(e=>"reset"===e.type).map(e=>e.item);const n=e.filter(e=>"add"===e.type).map(e=>e.item);return t.reduce((t,n)=>{const r=e.filter(e=>e.id===n.id);if(0===r.length)return t.push(n),t;const o={...n};for(const e of r)if(e)switch(e.type){case"select":o.selected=e.selected;break;case"position":"undefined"!==typeof e.position&&(o.position=e.position),"undefined"!==typeof e.positionAbsolute&&(o.positionAbsolute=e.positionAbsolute),"undefined"!==typeof e.dragging&&(o.dragging=e.dragging),o.expandParent&&Cf(t,o);break;case"dimensions":"undefined"!==typeof e.dimensions&&(o.width=e.dimensions.width,o.height=e.dimensions.height),"undefined"!==typeof e.updateStyle&&(o.style={...o.style||{},...e.dimensions}),"boolean"===typeof e.resizing&&(o.resizing=e.resizing),o.expandParent&&Cf(t,o);break;case"remove":return t}return t.push(o),t},n)}function Nf(e,t){return _f(e,t)}const jf=(e,t)=>({id:e,type:"select",selected:t});function Mf(e,t){return e.reduce((e,n)=>{const r=t.includes(n.id);return!n.selected&&r?(n.selected=!0,e.push(jf(n.id,!0))):n.selected&&!r&&(n.selected=!1,e.push(jf(n.id,!1))),e},[])}const Pf=(e,t)=>n=>{n.target===t.current&&e?.(n)},Tf=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging}),Rf=(0,t.memo)(e=>{let{isSelecting:n,selectionMode:r=Bu.Full,panOnDrag:o,onSelectionStart:a,onSelectionEnd:i,onPaneClick:l,onPaneContextMenu:s,onPaneScroll:c,onPaneMouseEnter:u,onPaneMouseMove:d,onPaneMouseLeave:f,children:p}=e;const h=(0,t.useRef)(null),m=du(),g=(0,t.useRef)(0),v=(0,t.useRef)(0),y=(0,t.useRef)(),{userSelectionActive:b,elementsSelectable:x,dragging:w}=uu(Tf,ui),S=()=>{m.setState({userSelectionActive:!1,userSelectionRect:null}),g.current=0,v.current=0},k=e=>{l?.(e),m.getState().resetSelectedElements(),m.setState({nodesSelectionActive:!1})},E=c?e=>c(e):void 0,C=x&&(n||b);return t.createElement("div",{className:ti(["react-flow__pane",{dragging:w,selection:n}]),onClick:C?void 0:Pf(k,h),onContextMenu:Pf(e=>{Array.isArray(o)&&o?.includes(2)?e.preventDefault():s?.(e)},h),onWheel:Pf(E,h),onMouseEnter:C?void 0:u,onMouseDown:C?e=>{const{resetSelectedElements:t,domNode:r}=m.getState();if(y.current=r?.getBoundingClientRect(),!x||!n||0!==e.button||e.target!==h.current||!y.current)return;const{x:o,y:i}=zu(e,y.current);t(),m.setState({userSelectionRect:{width:0,height:0,startX:o,startY:i,x:o,y:i}}),a?.(e)}:void 0,onMouseMove:C?e=>{const{userSelectionRect:t,nodeInternals:o,edges:a,transform:i,onNodesChange:l,onEdgesChange:s,nodeOrigin:c,getNodes:u}=m.getState();if(!n||!y.current||!t)return;m.setState({userSelectionActive:!0,nodesSelectionActive:!1});const d=zu(e,y.current),f=t.startX??0,p=t.startY??0,h={...t,x:d.x<f?d.x:f,y:d.y<p?d.y:p,width:Math.abs(d.x-f),height:Math.abs(d.y-p)},b=u(),x=hd(o,h,i,r===Bu.Partial,!0,c),w=md(x,a).map(e=>e.id),S=x.map(e=>e.id);if(g.current!==S.length){g.current=S.length;const e=Mf(b,S);e.length&&l?.(e)}if(v.current!==w.length){v.current=w.length;const e=Mf(a,w);e.length&&s?.(e)}m.setState({userSelectionRect:h})}:d,onMouseUp:C?e=>{if(0!==e.button)return;const{userSelectionRect:t}=m.getState();!b&&t&&e.target===h.current&&k?.(e),m.setState({nodesSelectionActive:g.current>0}),S(),i?.(e)}:void 0,onMouseLeave:C?e=>{b&&(m.setState({nodesSelectionActive:g.current>0}),i?.(e)),S()}:f,ref:h,style:gf},p,t.createElement(Ef,null))});function zf(e,t){const n=e.parentNode||e.parentId;if(!n)return!1;const r=t.get(n);return!!r&&(!!r.selected||zf(r,t))}function Of(e,t,n){let r=e;do{if(r?.matches(t))return!0;if(r===n.current)return!1;r=r.parentElement}while(r);return!1}function If(e,t,n,r){return Array.from(e.values()).filter(n=>(n.selected||n.id===r)&&(!n.parentNode||n.parentId||!zf(n,e))&&(n.draggable||t&&"undefined"===typeof n.draggable)).map(e=>({id:e.id,position:e.position||{x:0,y:0},positionAbsolute:e.positionAbsolute||{x:0,y:0},distance:{x:n.x-(e.positionAbsolute?.x??0),y:n.y-(e.positionAbsolute?.y??0)},delta:{x:0,y:0},extent:e.extent,parentNode:e.parentNode||e.parentId,parentId:e.parentNode||e.parentId,width:e.width,height:e.height,expandParent:e.expandParent}))}function Af(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,0],a=arguments.length>5?arguments[5]:void 0;const i=function(e,t){return t&&"parent"!==t?[t[0],[t[1][0]-(e.width||0),t[1][1]-(e.height||0)]]:t}(e,e.extent||r);let l=i;const s=e.parentNode||e.parentId;if("parent"!==e.extent||e.expandParent){if(e.extent&&s&&"parent"!==e.extent){const t=n.get(s),{x:r,y:a}=fd(t,o).positionAbsolute;l=[[e.extent[0][0]+r,e.extent[0][1]+a],[e.extent[1][0]+r,e.extent[1][1]+a]]}}else if(s&&e.width&&e.height){const t=n.get(s),{x:r,y:a}=fd(t,o).positionAbsolute;l=t&&Nu(r)&&Nu(a)&&Nu(t.width)&&Nu(t.height)?[[r+e.width*o[0],a+e.height*o[1]],[r+t.width-e.width+e.width*o[0],a+t.height-e.height+e.height*o[1]]]:l}else a?.("005",nu()),l=i;let c={x:0,y:0};if(s){const e=n.get(s);c=fd(e,o).positionAbsolute}const u=l&&"parent"!==l?yu(t,l):t;return{position:{x:u.x-c.x,y:u.y-c.y},positionAbsolute:u}}function Df(e){let{nodeId:t,dragItems:n,nodeInternals:r}=e;const o=n.map(e=>({...r.get(e.id),position:e.position,positionAbsolute:e.positionAbsolute}));return[t?o.find(e=>e.id===t):o[0],o]}Rf.displayName="Pane";const Lf=(e,t,n,r)=>{const o=t.querySelectorAll(e);if(!o||!o.length)return null;const a=Array.from(o),i=t.getBoundingClientRect(),l=i.width*r[0],s=i.height*r[1];return a.map(e=>{const t=e.getBoundingClientRect();return{id:e.getAttribute("data-handleid"),position:e.getAttribute("data-handlepos"),x:(t.left-i.left-l)/n,y:(t.top-i.top-s)/n,...gu(e)}})};function $f(e,t,n){return void 0===n?n:r=>{const o=t().nodeInternals.get(e);o&&n(r,{...o})}}function Ff(e){let{id:t,store:n,unselect:r=!1,nodeRef:o}=e;const{addSelectedNodes:a,unselectNodesAndEdges:i,multiSelectionActive:l,nodeInternals:s,onError:c}=n.getState(),u=s.get(t);u?(n.setState({nodesSelectionActive:!1}),u.selected?(r||u.selected&&l)&&(i({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):a([t])):c?.("012",su(t))}function Bf(e){return(t,n,r)=>e?.(t,r)}function Hf(e){let{nodeRef:n,disabled:r=!1,noDragClassName:o,handleSelector:a,nodeId:i,isSelectable:l,selectNodesOnDrag:s}=e;const c=du(),[u,d]=(0,t.useState)(!1),f=(0,t.useRef)([]),p=(0,t.useRef)({x:null,y:null}),h=(0,t.useRef)(0),m=(0,t.useRef)(null),g=(0,t.useRef)({x:0,y:0}),v=(0,t.useRef)(null),y=(0,t.useRef)(!1),b=(0,t.useRef)(!1),x=(0,t.useRef)(!1),w=function(){const e=du(),n=(0,t.useCallback)(t=>{let{sourceEvent:n}=t;const{transform:r,snapGrid:o,snapToGrid:a}=e.getState(),i=n.touches?n.touches[0].clientX:n.clientX,l=n.touches?n.touches[0].clientY:n.clientY,s={x:(i-r[0])/r[2],y:(l-r[1])/r[2]};return{xSnapped:a?o[0]*Math.round(s.x/o[0]):s.x,ySnapped:a?o[1]*Math.round(s.y/o[1]):s.y,...s}},[]);return n}();return(0,t.useEffect)(()=>{if(n?.current){const e=Pl(n.current),t=e=>{let{x:t,y:n}=e;const{nodeInternals:r,onNodeDrag:o,onSelectionDrag:a,updateNodePositions:l,nodeExtent:s,snapGrid:u,snapToGrid:h,nodeOrigin:m,onError:g}=c.getState();p.current={x:t,y:n};let y=!1,b={x:0,y:0,x2:0,y2:0};if(f.current.length>1&&s){const e=pd(f.current,m);b=ku(e)}if(f.current=f.current.map(e=>{const o={x:t-e.distance.x,y:n-e.distance.y};h&&(o.x=u[0]*Math.round(o.x/u[0]),o.y=u[1]*Math.round(o.y/u[1]));const a=[[s[0][0],s[0][1]],[s[1][0],s[1][1]]];f.current.length>1&&s&&!e.extent&&(a[0][0]=e.positionAbsolute.x-b.x+s[0][0],a[1][0]=e.positionAbsolute.x+(e.width??0)-b.x2+s[1][0],a[0][1]=e.positionAbsolute.y-b.y+s[0][1],a[1][1]=e.positionAbsolute.y+(e.height??0)-b.y2+s[1][1]);const i=Af(e,o,r,a,m,g);return y=y||e.position.x!==i.position.x||e.position.y!==i.position.y,e.position=i.position,e.positionAbsolute=i.positionAbsolute,e}),!y)return;l(f.current,!0,!0),d(!0);const x=i?o:Bf(a);if(x&&v.current){const[e,t]=Df({nodeId:i,dragItems:f.current,nodeInternals:r});x(v.current,e,t)}},u=()=>{if(!m.current)return;const[e,n]=xu(g.current,m.current);if(0!==e||0!==n){const{transform:r,panBy:o}=c.getState();p.current.x=(p.current.x??0)-e/r[2],p.current.y=(p.current.y??0)-n/r[2],o({x:e,y:n})&&t(p.current)}h.current=requestAnimationFrame(u)},S=e=>{const{nodeInternals:t,multiSelectionActive:r,nodesDraggable:o,unselectNodesAndEdges:a,onNodeDragStart:u,onSelectionDragStart:d}=c.getState();b.current=!0;const h=i?u:Bf(d);s&&l||r||!i||t.get(i)?.selected||a(),i&&l&&s&&Ff({id:i,store:c,nodeRef:n});const m=w(e);if(p.current=m,f.current=If(t,o,m,i),h&&f.current){const[n,r]=Df({nodeId:i,dragItems:f.current,nodeInternals:t});h(e.sourceEvent,n,r)}};if(!r){const r=function(){var e,t,n,r,o=Xc,a=qc,i=Gc,l=Zc,s={},c=gi("start","drag","end"),u=0,d=0;function f(e){e.on("mousedown.drag",p).filter(l).on("touchstart.drag",g).on("touchmove.drag",v,Tl).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(i,l){if(!r&&o.call(this,i,l)){var s=b(this,a.call(this,i,l),i,l,"mouse");s&&(Pl(i.view).on("mousemove.drag",h,Rl).on("mouseup.drag",m,Rl),Il(i.view),zl(i),n=!1,e=i.clientX,t=i.clientY,s("start",i))}}function h(r){if(Ol(r),!n){var o=r.clientX-e,a=r.clientY-t;n=o*o+a*a>d}s.mouse("drag",r)}function m(e){Pl(e.view).on("mousemove.drag mouseup.drag",null),Al(e.view,n),Ol(e),s.mouse("end",e)}function g(e,t){if(o.call(this,e,t)){var n,r,i=e.changedTouches,l=a.call(this,e,t),s=i.length;for(n=0;n<s;++n)(r=b(this,l,e,t,i[n].identifier,i[n]))&&(zl(e),r("start",e,i[n]))}}function v(e){var t,n,r=e.changedTouches,o=r.length;for(t=0;t<o;++t)(n=s[r[t].identifier])&&(Ol(e),n("drag",e,r[t]))}function y(e){var t,n,o=e.changedTouches,a=o.length;for(r&&clearTimeout(r),r=setTimeout(function(){r=null},500),t=0;t<a;++t)(n=s[o[t].identifier])&&(zl(e),n("end",e,o[t]))}function b(e,t,n,r,o,a){var l,d,p,h=c.copy(),m=$l(a||n,t);if(null!=(p=i.call(e,new Kc("beforestart",{sourceEvent:n,target:f,identifier:o,active:u,x:m[0],y:m[1],dx:0,dy:0,dispatch:h}),r)))return l=p.x-m[0]||0,d=p.y-m[1]||0,function n(a,i,c){var g,v=m;switch(a){case"start":s[o]=n,g=u++;break;case"end":delete s[o],--u;case"drag":m=$l(c||i,t),g=u}h.call(a,e,new Kc(a,{sourceEvent:i,subject:p,target:f,identifier:o,active:g,x:m[0]+l,y:m[1]+d,dx:m[0]-v[0],dy:m[1]-v[1],dispatch:h}),r)}}return f.filter=function(e){return arguments.length?(o="function"===typeof e?e:Yc(!!e),f):o},f.container=function(e){return arguments.length?(a="function"===typeof e?e:Yc(e),f):a},f.subject=function(e){return arguments.length?(i="function"===typeof e?e:Yc(e),f):i},f.touchable=function(e){return arguments.length?(l="function"===typeof e?e:Yc(!!e),f):l},f.on=function(){var e=c.on.apply(c,arguments);return e===c?f:e},f.clickDistance=function(e){return arguments.length?(d=(e=+e)*e,f):Math.sqrt(d)},f}().on("start",e=>{const{domNode:t,nodeDragThreshold:n}=c.getState();0===n&&S(e),x.current=!1;const r=w(e);p.current=r,m.current=t?.getBoundingClientRect()||null,g.current=zu(e.sourceEvent,m.current)}).on("drag",e=>{const n=w(e),{autoPanOnNodeDrag:r,nodeDragThreshold:o}=c.getState();if("touchmove"===e.sourceEvent.type&&e.sourceEvent.touches.length>1&&(x.current=!0),!x.current){if(!y.current&&b.current&&r&&(y.current=!0,u()),!b.current){const t=n.xSnapped-(p?.current?.x??0),r=n.ySnapped-(p?.current?.y??0);Math.sqrt(t*t+r*r)>o&&S(e)}(p.current.x!==n.xSnapped||p.current.y!==n.ySnapped)&&f.current&&b.current&&(v.current=e.sourceEvent,g.current=zu(e.sourceEvent,m.current),t(n))}}).on("end",e=>{if(b.current&&!x.current&&(d(!1),y.current=!1,b.current=!1,cancelAnimationFrame(h.current),f.current)){const{updateNodePositions:t,nodeInternals:n,onNodeDragStop:r,onSelectionDragStop:o}=c.getState(),a=i?r:Bf(o);if(t(f.current,!1,!1),a){const[t,r]=Df({nodeId:i,dragItems:f.current,nodeInternals:n});a(e.sourceEvent,t,r)}}}).filter(e=>{const t=e.target;return!e.button&&(!o||!Of(t,`.${o}`,n))&&(!a||Of(t,a,n))});return e.call(r),()=>{e.on(".drag",null)}}e.on(".drag",null)}},[n,r,o,a,l,c,i,s,w]),u}function Vf(){const e=du(),n=(0,t.useCallback)(t=>{const{nodeInternals:n,nodeExtent:r,updateNodePositions:o,getNodes:a,snapToGrid:i,snapGrid:l,onError:s,nodesDraggable:c}=e.getState(),u=a().filter(e=>e.selected&&(e.draggable||c&&"undefined"===typeof e.draggable)),d=i?l[0]:5,f=i?l[1]:5,p=t.isShiftPressed?4:1,h=t.x*d*p,m=t.y*f*p,g=u.map(e=>{if(e.positionAbsolute){const t={x:e.positionAbsolute.x+h,y:e.positionAbsolute.y+m};i&&(t.x=l[0]*Math.round(t.x/l[0]),t.y=l[1]*Math.round(t.y/l[1]));const{positionAbsolute:o,position:a}=Af(e,t,n,r,void 0,s);e.position=a,e.positionAbsolute=o}return e});o(g,!0,!1)},[]);return n}const Uf={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};var Wf=e=>{const n=n=>{let{id:r,type:o,data:a,xPos:i,yPos:l,xPosOrigin:s,yPosOrigin:c,selected:u,onClick:d,onMouseEnter:f,onMouseMove:p,onMouseLeave:h,onContextMenu:m,onDoubleClick:g,style:v,className:y,isDraggable:b,isSelectable:x,isConnectable:w,isFocusable:S,selectNodesOnDrag:k,sourcePosition:E,targetPosition:C,hidden:_,resizeObserver:N,dragHandle:j,zIndex:M,isParent:P,noDragClassName:T,noPanClassName:R,initialized:z,disableKeyboardA11y:O,ariaLabel:I,rfId:A,hasHandleBounds:D}=n;const L=du(),$=(0,t.useRef)(null),F=(0,t.useRef)(null),B=(0,t.useRef)(E),H=(0,t.useRef)(C),V=(0,t.useRef)(o),U=x||b||d||f||p||h,W=Vf(),Y=$f(r,L.getState,f),K=$f(r,L.getState,p),X=$f(r,L.getState,h),q=$f(r,L.getState,m),G=$f(r,L.getState,g);(0,t.useEffect)(()=>()=>{F.current&&(N?.unobserve(F.current),F.current=null)},[]),(0,t.useEffect)(()=>{if($.current&&!_){const e=$.current;z&&D&&F.current===e||(F.current&&N?.unobserve(F.current),N?.observe(e),F.current=e)}},[_,z,D]),(0,t.useEffect)(()=>{const e=V.current!==o,t=B.current!==E,n=H.current!==C;$.current&&(e||t||n)&&(e&&(V.current=o),t&&(B.current=E),n&&(H.current=C),L.getState().updateNodeDimensions([{id:r,nodeElement:$.current,forceUpdate:!0}]))},[r,o,E,C]);const Z=Hf({nodeRef:$,disabled:_||!b,noDragClassName:T,handleSelector:j,nodeId:r,isSelectable:x,selectNodesOnDrag:k});return _?null:t.createElement("div",{className:ti(["react-flow__node",`react-flow__node-${o}`,{[R]:b},y,{selected:u,selectable:x,parent:P,dragging:Z}]),ref:$,style:{zIndex:M,transform:`translate(${s}px,${c}px)`,pointerEvents:U?"all":"none",visibility:z?"visible":"hidden",...v},"data-id":r,"data-testid":`rf__node-${r}`,onMouseEnter:Y,onMouseMove:K,onMouseLeave:X,onContextMenu:q,onClick:e=>{const{nodeDragThreshold:t}=L.getState();if(x&&(!k||!b||t>0)&&Ff({id:r,store:L,nodeRef:$}),d){const t=L.getState().nodeInternals.get(r);t&&d(e,{...t})}},onDoubleClick:G,onKeyDown:S?e=>{if(!Tu(e)&&!O)if(Mu.includes(e.key)&&x){const t="Escape"===e.key;Ff({id:r,store:L,unselect:t,nodeRef:$})}else b&&u&&Object.prototype.hasOwnProperty.call(Uf,e.key)&&(L.setState({ariaLiveMessage:`Moved selected node ${e.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~i}, y: ${~~l}`}),W({x:Uf[e.key].x,y:Uf[e.key].y,isShiftPressed:e.shiftKey}))}:void 0,tabIndex:S?0:void 0,role:S?"button":void 0,"aria-describedby":O?void 0:`${qd}-${A}`,"aria-label":I},t.createElement(id,{value:r},t.createElement(e,{id:r,data:a,type:o,xPos:i,yPos:l,selected:u,isConnectable:w,sourcePosition:E,targetPosition:C,dragging:Z,dragHandle:j,zIndex:M})))};return n.displayName="NodeWrapper",(0,t.memo)(n)};const Yf=e=>{const t=e.getNodes().filter(e=>e.selected);return{...pd(t,e.nodeOrigin),transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,userSelectionActive:e.userSelectionActive}};var Kf=(0,t.memo)(function(e){let{onSelectionContextMenu:n,noPanClassName:r,disableKeyboardA11y:o}=e;const a=du(),{width:i,height:l,x:s,y:c,transformString:u,userSelectionActive:d}=uu(Yf,ui),f=Vf(),p=(0,t.useRef)(null);if((0,t.useEffect)(()=>{o||p.current?.focus({preventScroll:!0})},[o]),Hf({nodeRef:p}),d||!i||!l)return null;const h=n?e=>{const t=a.getState().getNodes().filter(e=>e.selected);n(e,t)}:void 0;return t.createElement("div",{className:ti(["react-flow__nodesselection","react-flow__container",r]),style:{transform:u}},t.createElement("div",{ref:p,className:"react-flow__nodesselection-rect",onContextMenu:h,tabIndex:o?void 0:-1,onKeyDown:o?void 0:e=>{Object.prototype.hasOwnProperty.call(Uf,e.key)&&f({x:Uf[e.key].x,y:Uf[e.key].y,isShiftPressed:e.shiftKey})},style:{width:i,height:l,top:c,left:s}}))});const Xf=e=>e.nodesSelectionActive,qf=e=>{let{children:n,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:a,onPaneMouseLeave:i,onPaneContextMenu:l,onPaneScroll:s,deleteKeyCode:c,onMove:u,onMoveStart:d,onMoveEnd:f,selectionKeyCode:p,selectionOnDrag:h,selectionMode:m,onSelectionStart:g,onSelectionEnd:v,multiSelectionKeyCode:y,panActivationKeyCode:b,zoomActivationKeyCode:x,elementsSelectable:w,zoomOnScroll:S,zoomOnPinch:k,panOnScroll:E,panOnScrollSpeed:C,panOnScrollMode:_,zoomOnDoubleClick:N,panOnDrag:j,defaultViewport:M,translateExtent:P,minZoom:T,maxZoom:R,preventScrolling:z,onSelectionContextMenu:O,noWheelClassName:I,noPanClassName:A,disableKeyboardA11y:D}=e;const L=uu(Xf),$=ef(p),F=ef(b),B=F||j,H=F||E,V=$||h&&!0!==B;return(e=>{let{deleteKeyCode:n,multiSelectionKeyCode:r}=e;const o=du(),{deleteElements:a}=hf(),i=ef(n,mf),l=ef(r);(0,t.useEffect)(()=>{if(i){const{edges:e,getNodes:t}=o.getState(),n=t().filter(e=>e.selected),r=e.filter(e=>e.selected);a({nodes:n,edges:r}),o.setState({nodesSelectionActive:!1})}},[i]),(0,t.useEffect)(()=>{o.setState({multiSelectionActive:l})},[l])})({deleteKeyCode:c,multiSelectionKeyCode:y}),t.createElement(Sf,{onMove:u,onMoveStart:d,onMoveEnd:f,onPaneContextMenu:l,elementsSelectable:w,zoomOnScroll:S,zoomOnPinch:k,panOnScroll:H,panOnScrollSpeed:C,panOnScrollMode:_,zoomOnDoubleClick:N,panOnDrag:!$&&B,defaultViewport:M,translateExtent:P,minZoom:T,maxZoom:R,zoomActivationKeyCode:x,preventScrolling:z,noWheelClassName:I,noPanClassName:A},t.createElement(Rf,{onSelectionStart:g,onSelectionEnd:v,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:a,onPaneMouseLeave:i,onPaneContextMenu:l,onPaneScroll:s,panOnDrag:B,isSelecting:!!V,selectionMode:m},n,L&&t.createElement(Kf,{onSelectionContextMenu:O,noPanClassName:A,disableKeyboardA11y:D})))};qf.displayName="FlowRenderer";var Gf=(0,t.memo)(qf);function Zf(e){const t={input:Wf(e.input||zd),default:Wf(e.default||Td),output:Wf(e.output||Id),group:Wf(e.group||Ad)},n=Object.keys(e).filter(e=>!["input","default","output","group"].includes(e)).reduce((t,n)=>(t[n]=Wf(e[n]||Td),t),{});return{...t,...n}}const Qf=e=>({nodesDraggable:e.nodesDraggable,nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,updateNodeDimensions:e.updateNodeDimensions,onError:e.onError}),Jf=e=>{const{nodesDraggable:n,nodesConnectable:r,nodesFocusable:o,elementsSelectable:a,updateNodeDimensions:i,onError:l}=uu(Qf,ui),s=(c=e.onlyRenderVisibleElements,uu((0,t.useCallback)(e=>c?hd(e.nodeInternals,{x:0,y:0,width:e.width,height:e.height},e.transform,!0):e.getNodes(),[c])));var c;const u=(0,t.useRef)(),d=(0,t.useMemo)(()=>{if("undefined"===typeof ResizeObserver)return null;const e=new ResizeObserver(e=>{const t=e.map(e=>({id:e.target.getAttribute("data-id"),nodeElement:e.target,forceUpdate:!0}));i(t)});return u.current=e,e},[]);return(0,t.useEffect)(()=>()=>{u?.current?.disconnect()},[]),t.createElement("div",{className:"react-flow__nodes",style:gf},s.map(i=>{let s=i.type||"default";e.nodeTypes[s]||(l?.("003",eu(s)),s="default");const c=e.nodeTypes[s]||e.nodeTypes.default,u=!!(i.draggable||n&&"undefined"===typeof i.draggable),f=!!(i.selectable||a&&"undefined"===typeof i.selectable),p=!!(i.connectable||r&&"undefined"===typeof i.connectable),h=!!(i.focusable||o&&"undefined"===typeof i.focusable),m=e.nodeExtent?yu(i.positionAbsolute,e.nodeExtent):i.positionAbsolute,g=m?.x??0,v=m?.y??0,y=(e=>{let{x:t,y:n,width:r,height:o,origin:a}=e;return r&&o?a[0]<0||a[1]<0||a[0]>1||a[1]>1?{x:t,y:n}:{x:t-r*a[0],y:n-o*a[1]}:{x:t,y:n}})({x:g,y:v,width:i.width??0,height:i.height??0,origin:e.nodeOrigin});return t.createElement(c,{key:i.id,id:i.id,className:i.className,style:i.style,type:s,data:i.data,sourcePosition:i.sourcePosition||Uu.Bottom,targetPosition:i.targetPosition||Uu.Top,hidden:i.hidden,xPos:g,yPos:v,xPosOrigin:y.x,yPosOrigin:y.y,selectNodesOnDrag:e.selectNodesOnDrag,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,selected:!!i.selected,isDraggable:u,isSelectable:f,isConnectable:p,isFocusable:h,resizeObserver:d,dragHandle:i.dragHandle,zIndex:i[ju]?.z??0,isParent:!!i[ju]?.isParent,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,initialized:!!i.width&&!!i.height,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,ariaLabel:i.ariaLabel,hasHandleBounds:!!i[ju]?.handleBounds})}))};Jf.displayName="NodeRenderer";var ep=(0,t.memo)(Jf);const tp=(e,t,n)=>n===Uu.Left?e-t:n===Uu.Right?e+t:e,np=(e,t,n)=>n===Uu.Top?e-t:n===Uu.Bottom?e+t:e,rp="react-flow__edgeupdater",op=e=>{let{position:n,centerX:r,centerY:o,radius:a=10,onMouseDown:i,onMouseEnter:l,onMouseOut:s,type:c}=e;return t.createElement("circle",{onMouseDown:i,onMouseEnter:l,onMouseOut:s,className:ti([rp,`${rp}-${c}`]),cx:tp(r,a,n),cy:np(o,a,n),r:a,stroke:"transparent",fill:"transparent"})},ap=()=>!0;var ip=e=>{const n=n=>{let{id:r,className:o,type:a,data:i,onClick:l,onEdgeDoubleClick:s,selected:c,animated:u,label:d,labelStyle:f,labelShowBg:p,labelBgStyle:h,labelBgPadding:m,labelBgBorderRadius:g,style:v,source:y,target:b,sourceX:x,sourceY:w,targetX:S,targetY:k,sourcePosition:E,targetPosition:C,elementsSelectable:_,hidden:N,sourceHandleId:j,targetHandleId:M,onContextMenu:P,onMouseEnter:T,onMouseMove:R,onMouseLeave:z,reconnectRadius:O,onReconnect:I,onReconnectStart:A,onReconnectEnd:D,markerEnd:L,markerStart:$,rfId:F,ariaLabel:B,isFocusable:H,isReconnectable:V,pathOptions:U,interactionWidth:W,disableKeyboardA11y:Y}=n;const K=(0,t.useRef)(null),[X,q]=(0,t.useState)(!1),[G,Z]=(0,t.useState)(!1),Q=du(),J=(0,t.useMemo)(()=>`url('#${sd($,F)}')`,[$,F]),ee=(0,t.useMemo)(()=>`url('#${sd(L,F)}')`,[L,F]);if(N)return null;const te=Au(r,Q.getState,s),ne=Au(r,Q.getState,P),re=Au(r,Q.getState,T),oe=Au(r,Q.getState,R),ae=Au(r,Q.getState,z),ie=(e,t)=>{if(0!==e.button)return;const{edges:n,isValidConnection:o}=Q.getState(),a=t?b:y,i=(t?M:j)||null,l=t?"target":"source",s=o||ap,c=t,u=n.find(e=>e.id===r);Z(!0),A?.(e,u,l);Cd({event:e,handleId:i,nodeId:a,onConnect:e=>I?.(u,e),isTarget:c,getState:Q.getState,setState:Q.setState,isValidConnection:s,edgeUpdaterType:l,onReconnectEnd:e=>{Z(!1),D?.(e,u,l)}})},le=()=>q(!0),se=()=>q(!1),ce=!_&&!l;return t.createElement("g",{className:ti(["react-flow__edge",`react-flow__edge-${a}`,o,{selected:c,animated:u,inactive:ce,updating:X}]),onClick:e=>{const{edges:t,addSelectedEdges:n,unselectNodesAndEdges:o,multiSelectionActive:a}=Q.getState(),i=t.find(e=>e.id===r);i&&(_&&(Q.setState({nodesSelectionActive:!1}),i.selected&&a?(o({nodes:[],edges:[i]}),K.current?.blur()):n([r])),l&&l(e,i))},onDoubleClick:te,onContextMenu:ne,onMouseEnter:re,onMouseMove:oe,onMouseLeave:ae,onKeyDown:H?e=>{if(!Y&&Mu.includes(e.key)&&_){const{unselectNodesAndEdges:t,addSelectedEdges:n,edges:o}=Q.getState();"Escape"===e.key?(K.current?.blur(),t({edges:[o.find(e=>e.id===r)]})):n([r])}}:void 0,tabIndex:H?0:void 0,role:H?"button":"img","data-testid":`rf__edge-${r}`,"aria-label":null===B?void 0:B||`Edge from ${y} to ${b}`,"aria-describedby":H?`${Gd}-${F}`:void 0,ref:K},!G&&t.createElement(e,{id:r,source:y,target:b,selected:c,animated:u,label:d,labelStyle:f,labelShowBg:p,labelBgStyle:h,labelBgPadding:m,labelBgBorderRadius:g,data:i,style:v,sourceX:x,sourceY:w,targetX:S,targetY:k,sourcePosition:E,targetPosition:C,sourceHandleId:j,targetHandleId:M,markerStart:J,markerEnd:ee,pathOptions:U,interactionWidth:W}),V&&t.createElement(t.Fragment,null,("source"===V||!0===V)&&t.createElement(op,{position:E,centerX:x,centerY:w,radius:O,onMouseDown:e=>ie(e,!0),onMouseEnter:le,onMouseOut:se,type:"source"}),("target"===V||!0===V)&&t.createElement(op,{position:C,centerX:S,centerY:k,radius:O,onMouseDown:e=>ie(e,!1),onMouseEnter:le,onMouseOut:se,type:"target"})))};return n.displayName="EdgeWrapper",(0,t.memo)(n)};function lp(e){const t={default:ip(e.default||od),straight:ip(e.bezier||ed),step:ip(e.step||Ju),smoothstep:ip(e.step||Qu),simplebezier:ip(e.simplebezier||Ku)},n=Object.keys(e).filter(e=>!["default","bezier"].includes(e)).reduce((t,n)=>(t[n]=ip(e[n]||od),t),{});return{...t,...n}}function sp(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=(n?.x||0)+t.x,o=(n?.y||0)+t.y,a=n?.width||t.width,i=n?.height||t.height;switch(e){case Uu.Top:return{x:r+a/2,y:o};case Uu.Right:return{x:r+a,y:o+i/2};case Uu.Bottom:return{x:r+a/2,y:o+i};case Uu.Left:return{x:r,y:o+i/2}}}function cp(e,t){return e?1!==e.length&&t?t&&e.find(e=>e.id===t)||null:e[0]:null}function up(e){const t=e?.[ju]?.handleBounds||null,n=t&&e?.width&&e?.height&&"undefined"!==typeof e?.positionAbsolute?.x&&"undefined"!==typeof e?.positionAbsolute?.y;return[{x:e?.positionAbsolute?.x||0,y:e?.positionAbsolute?.y||0,width:e?.width||0,height:e?.height||0},t,!!n]}const dp=[{level:0,isMaxLevel:!0,edges:[]}];function fp(e,n,r){const o=uu((0,t.useCallback)(t=>e?t.edges.filter(e=>{const r=n.get(e.source),o=n.get(e.target);return r?.width&&r?.height&&o?.width&&o?.height&&function(e){let{sourcePos:t,targetPos:n,sourceWidth:r,sourceHeight:o,targetWidth:a,targetHeight:i,width:l,height:s,transform:c}=e;const u={x:Math.min(t.x,n.x),y:Math.min(t.y,n.y),x2:Math.max(t.x+r,n.x+a),y2:Math.max(t.y+o,n.y+i)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const d=ku({x:(0-c[0])/c[2],y:(0-c[1])/c[2],width:l/c[2],height:s/c[2]}),f=Math.max(0,Math.min(d.x2,u.x2)-Math.max(d.x,u.x)),p=Math.max(0,Math.min(d.y2,u.y2)-Math.max(d.y,u.y));return Math.ceil(f*p)>0}({sourcePos:r.positionAbsolute||{x:0,y:0},targetPos:o.positionAbsolute||{x:0,y:0},sourceWidth:r.width,sourceHeight:r.height,targetWidth:o.width,targetHeight:o.height,width:t.width,height:t.height,transform:t.transform})}):t.edges,[e,n]));return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=-1;const o=e.reduce((e,o)=>{const a=Nu(o.zIndex);let i=a?o.zIndex:0;if(n){const e=t.get(o.target),n=t.get(o.source),r=o.selected||e?.selected||n?.selected,l=Math.max(n?.[ju]?.z||0,e?.[ju]?.z||0,1e3);i=(a?o.zIndex:0)+(r?l:0)}return e[i]?e[i].push(o):e[i]=[o],r=i>r?i:r,e},{}),a=Object.entries(o).map(e=>{let[t,n]=e;const o=+t;return{edges:n,level:o,isMaxLevel:o===r}});return 0===a.length?dp:a}(o,n,r)}const pp={[Vu.Arrow]:e=>{let{color:n="none",strokeWidth:r=1}=e;return t.createElement("polyline",{style:{stroke:n,strokeWidth:r},strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"-5,-4 0,0 -5,4"})},[Vu.ArrowClosed]:e=>{let{color:n="none",strokeWidth:r=1}=e;return t.createElement("polyline",{style:{stroke:n,fill:n,strokeWidth:r},strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})}};const hp=e=>{let{id:n,type:r,color:o,width:a=12.5,height:i=12.5,markerUnits:l="strokeWidth",strokeWidth:s,orient:c="auto-start-reverse"}=e;const u=function(e){const n=du();return(0,t.useMemo)(()=>Object.prototype.hasOwnProperty.call(pp,e)?pp[e]:(n.getState().onError?.("009",ou(e)),null),[e])}(r);return u?t.createElement("marker",{className:"react-flow__arrowhead",id:n,markerWidth:`${a}`,markerHeight:`${i}`,viewBox:"-10 -10 20 20",markerUnits:l,orient:c,refX:"0",refY:"0"},t.createElement(u,{color:o,strokeWidth:s})):null},mp=e=>{let{defaultColor:n,rfId:r}=e;const o=uu((0,t.useCallback)((e=>{let{defaultColor:t,rfId:n}=e;return e=>{const r=[];return e.edges.reduce((e,o)=>([o.markerStart,o.markerEnd].forEach(o=>{if(o&&"object"===typeof o){const a=sd(o,n);r.includes(a)||(e.push({id:a,color:o.color||t,...o}),r.push(a))}}),e),[]).sort((e,t)=>e.id.localeCompare(t.id))}})({defaultColor:n,rfId:r}),[n,r]),(e,t)=>!(e.length!==t.length||e.some((e,n)=>e.id!==t[n].id)));return t.createElement("defs",null,o.map(e=>t.createElement(hp,{id:e.id,key:e.id,type:e.type,color:e.color,width:e.width,height:e.height,markerUnits:e.markerUnits,strokeWidth:e.strokeWidth,orient:e.orient})))};mp.displayName="MarkerDefinitions";var gp=(0,t.memo)(mp);const vp=e=>({nodesConnectable:e.nodesConnectable,edgesFocusable:e.edgesFocusable,edgesUpdatable:e.edgesUpdatable,elementsSelectable:e.elementsSelectable,width:e.width,height:e.height,connectionMode:e.connectionMode,nodeInternals:e.nodeInternals,onError:e.onError}),yp=e=>{let{defaultMarkerColor:n,onlyRenderVisibleElements:r,elevateEdgesOnSelect:o,rfId:a,edgeTypes:i,noPanClassName:l,onEdgeContextMenu:s,onEdgeMouseEnter:c,onEdgeMouseMove:u,onEdgeMouseLeave:d,onEdgeClick:f,onEdgeDoubleClick:p,onReconnect:h,onReconnectStart:m,onReconnectEnd:g,reconnectRadius:v,children:y,disableKeyboardA11y:b}=e;const{edgesFocusable:x,edgesUpdatable:w,elementsSelectable:S,width:k,height:E,connectionMode:C,nodeInternals:_,onError:N}=uu(vp,ui),j=fp(r,_,o);return k?t.createElement(t.Fragment,null,j.map(e=>{let{level:r,edges:o,isMaxLevel:y}=e;return t.createElement("svg",{key:r,style:{zIndex:r},width:k,height:E,className:"react-flow__edges react-flow__container"},y&&t.createElement(gp,{defaultColor:n,rfId:a}),t.createElement("g",null,o.map(e=>{const[n,r,o]=up(_.get(e.source)),[y,k,E]=up(_.get(e.target));if(!o||!E)return null;let j=e.type||"default";i[j]||(N?.("011",lu(j)),j="default");const M=i[j]||i.default,P=C===$u.Strict?k.target:(k.target??[]).concat(k.source??[]),T=cp(r.source,e.sourceHandle),R=cp(P,e.targetHandle),z=T?.position||Uu.Bottom,O=R?.position||Uu.Top,I=!!(e.focusable||x&&"undefined"===typeof e.focusable),A=e.reconnectable||e.updatable,D="undefined"!==typeof h&&(A||w&&"undefined"===typeof A);if(!T||!R)return N?.("008",au(T,e)),null;const{sourceX:L,sourceY:$,targetX:F,targetY:B}=((e,t,n,r,o,a)=>{const i=sp(n,e,t),l=sp(a,r,o);return{sourceX:i.x,sourceY:i.y,targetX:l.x,targetY:l.y}})(n,T,z,y,R,O);return t.createElement(M,{key:e.id,id:e.id,className:ti([e.className,l]),type:j,data:e.data,selected:!!e.selected,animated:!!e.animated,hidden:!!e.hidden,label:e.label,labelStyle:e.labelStyle,labelShowBg:e.labelShowBg,labelBgStyle:e.labelBgStyle,labelBgPadding:e.labelBgPadding,labelBgBorderRadius:e.labelBgBorderRadius,style:e.style,source:e.source,target:e.target,sourceHandleId:e.sourceHandle,targetHandleId:e.targetHandle,markerEnd:e.markerEnd,markerStart:e.markerStart,sourceX:L,sourceY:$,targetX:F,targetY:B,sourcePosition:z,targetPosition:O,elementsSelectable:S,onContextMenu:s,onMouseEnter:c,onMouseMove:u,onMouseLeave:d,onClick:f,onEdgeDoubleClick:p,onReconnect:h,onReconnectStart:m,onReconnectEnd:g,reconnectRadius:v,rfId:a,ariaLabel:e.ariaLabel,isFocusable:I,isReconnectable:D,pathOptions:"pathOptions"in e?e.pathOptions:void 0,interactionWidth:e.interactionWidth,disableKeyboardA11y:b})})))}),y):null};yp.displayName="EdgeRenderer";var bp=(0,t.memo)(yp);const xp=e=>`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;function wp(e){let{children:n}=e;const r=uu(xp);return t.createElement("div",{className:"react-flow__viewport react-flow__container",style:{transform:r}},n)}const Sp={[Uu.Left]:Uu.Right,[Uu.Right]:Uu.Left,[Uu.Top]:Uu.Bottom,[Uu.Bottom]:Uu.Top},kp=e=>{let{nodeId:n,handleType:r,style:o,type:a=Hu.Bezier,CustomComponent:i,connectionStatus:l}=e;const{fromNode:s,handleId:c,toX:u,toY:d,connectionMode:f}=uu((0,t.useCallback)(e=>({fromNode:e.nodeInternals.get(n),handleId:e.connectionHandleId,toX:(e.connectionPosition.x-e.transform[0])/e.transform[2],toY:(e.connectionPosition.y-e.transform[1])/e.transform[2],connectionMode:e.connectionMode}),[n]),ui),p=s?.[ju]?.handleBounds;let h=p?.[r];if(f===$u.Loose&&(h=h||p?.["source"===r?"target":"source"]),!s||!h)return null;const m=c?h.find(e=>e.id===c):h[0],g=m?m.x+m.width/2:(s.width??0)/2,v=m?m.y+m.height/2:s.height??0,y=(s.positionAbsolute?.x??0)+g,b=(s.positionAbsolute?.y??0)+v,x=m?.position,w=x?Sp[x]:null;if(!x||!w)return null;if(i)return t.createElement(i,{connectionLineType:a,connectionLineStyle:o,fromNode:s,fromHandle:m,fromX:y,fromY:b,toX:u,toY:d,fromPosition:x,toPosition:w,connectionStatus:l});let S="";const k={sourceX:y,sourceY:b,sourcePosition:x,targetX:u,targetY:d,targetPosition:w};return a===Hu.Bezier?[S]=rd(k):a===Hu.Step?[S]=Zu({...k,borderRadius:0}):a===Hu.SmoothStep?[S]=Zu(k):a===Hu.SimpleBezier?[S]=Yu(k):S=`M${y},${b} ${u},${d}`,t.createElement("path",{d:S,fill:"none",className:"react-flow__connection-path",style:o})};kp.displayName="ConnectionLine";const Ep=e=>({nodeId:e.connectionNodeId,handleType:e.connectionHandleType,nodesConnectable:e.nodesConnectable,connectionStatus:e.connectionStatus,width:e.width,height:e.height});function Cp(e){let{containerStyle:n,style:r,type:o,component:a}=e;const{nodeId:i,handleType:l,nodesConnectable:s,width:c,height:u,connectionStatus:d}=uu(Ep,ui);return!!(i&&l&&c&&s)?t.createElement("svg",{style:n,width:c,height:u,className:"react-flow__edges react-flow__connectionline react-flow__container"},t.createElement("g",{className:ti(["react-flow__connection",d])},t.createElement(kp,{nodeId:i,handleType:l,style:r,type:o,CustomComponent:a,connectionStatus:d}))):null}function _p(e,n){(0,t.useRef)(null),du();return(0,t.useMemo)(()=>n(e),[e])}const Np=e=>{let{nodeTypes:n,edgeTypes:r,onMove:o,onMoveStart:a,onMoveEnd:i,onInit:l,onNodeClick:s,onEdgeClick:c,onNodeDoubleClick:u,onEdgeDoubleClick:d,onNodeMouseEnter:f,onNodeMouseMove:p,onNodeMouseLeave:h,onNodeContextMenu:m,onSelectionContextMenu:g,onSelectionStart:v,onSelectionEnd:y,connectionLineType:b,connectionLineStyle:x,connectionLineComponent:w,connectionLineContainerStyle:S,selectionKeyCode:k,selectionOnDrag:E,selectionMode:C,multiSelectionKeyCode:_,panActivationKeyCode:N,zoomActivationKeyCode:j,deleteKeyCode:M,onlyRenderVisibleElements:P,elementsSelectable:T,selectNodesOnDrag:R,defaultViewport:z,translateExtent:O,minZoom:I,maxZoom:A,preventScrolling:D,defaultMarkerColor:L,zoomOnScroll:$,zoomOnPinch:F,panOnScroll:B,panOnScrollSpeed:H,panOnScrollMode:V,zoomOnDoubleClick:U,panOnDrag:W,onPaneClick:Y,onPaneMouseEnter:K,onPaneMouseMove:X,onPaneMouseLeave:q,onPaneScroll:G,onPaneContextMenu:Z,onEdgeContextMenu:Q,onEdgeMouseEnter:J,onEdgeMouseMove:ee,onEdgeMouseLeave:te,onReconnect:ne,onReconnectStart:re,onReconnectEnd:oe,reconnectRadius:ae,noDragClassName:ie,noWheelClassName:le,noPanClassName:se,elevateEdgesOnSelect:ce,disableKeyboardA11y:ue,nodeOrigin:de,nodeExtent:fe,rfId:pe}=e;const he=_p(n,Zf),me=_p(r,lp);return function(e){const n=hf(),r=(0,t.useRef)(!1);(0,t.useEffect)(()=>{!r.current&&n.viewportInitialized&&e&&(setTimeout(()=>e(n),1),r.current=!0)},[e,n.viewportInitialized])}(l),t.createElement(Gf,{onPaneClick:Y,onPaneMouseEnter:K,onPaneMouseMove:X,onPaneMouseLeave:q,onPaneContextMenu:Z,onPaneScroll:G,deleteKeyCode:M,selectionKeyCode:k,selectionOnDrag:E,selectionMode:C,onSelectionStart:v,onSelectionEnd:y,multiSelectionKeyCode:_,panActivationKeyCode:N,zoomActivationKeyCode:j,elementsSelectable:T,onMove:o,onMoveStart:a,onMoveEnd:i,zoomOnScroll:$,zoomOnPinch:F,zoomOnDoubleClick:U,panOnScroll:B,panOnScrollSpeed:H,panOnScrollMode:V,panOnDrag:W,defaultViewport:z,translateExtent:O,minZoom:I,maxZoom:A,onSelectionContextMenu:g,preventScrolling:D,noDragClassName:ie,noWheelClassName:le,noPanClassName:se,disableKeyboardA11y:ue},t.createElement(wp,null,t.createElement(bp,{edgeTypes:me,onEdgeClick:c,onEdgeDoubleClick:d,onlyRenderVisibleElements:P,onEdgeContextMenu:Q,onEdgeMouseEnter:J,onEdgeMouseMove:ee,onEdgeMouseLeave:te,onReconnect:ne,onReconnectStart:re,onReconnectEnd:oe,reconnectRadius:ae,defaultMarkerColor:L,noPanClassName:se,elevateEdgesOnSelect:!!ce,disableKeyboardA11y:ue,rfId:pe},t.createElement(Cp,{style:x,type:b,component:w,containerStyle:S})),t.createElement("div",{className:"react-flow__edgelabel-renderer"}),t.createElement(ep,{nodeTypes:he,onNodeClick:s,onNodeDoubleClick:u,onNodeMouseEnter:f,onNodeMouseMove:p,onNodeMouseLeave:h,onNodeContextMenu:m,selectNodesOnDrag:R,onlyRenderVisibleElements:P,noPanClassName:se,noDragClassName:ie,disableKeyboardA11y:ue,nodeOrigin:de,nodeExtent:fe,rfId:pe})))};Np.displayName="GraphView";var jp=(0,t.memo)(Np);const Mp=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Pp={rfId:"1",width:0,height:0,transform:[0,0,1],nodeInternals:new Map,edges:[],onNodesChange:null,onEdgesChange:null,hasDefaultNodes:!1,hasDefaultEdges:!1,d3Zoom:null,d3Selection:null,d3ZoomHandler:void 0,minZoom:.5,maxZoom:2,translateExtent:Mp,nodeExtent:Mp,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionNodeId:null,connectionHandleId:null,connectionHandleType:"source",connectionPosition:{x:0,y:0},connectionStatus:null,connectionMode:$u.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:[0,0],nodeDragThreshold:0,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesUpdatable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,fitViewOnInit:!1,fitViewOnInitDone:!1,fitViewOnInitOptions:void 0,onSelectionChange:[],multiSelectionActive:!1,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,connectionRadius:20,onError:Pu,isValidConnection:void 0},Tp=()=>{return e=(e,t)=>({...Pp,setNodes:n=>{const{nodeInternals:r,nodeOrigin:o,elevateNodesOnSelect:a}=t();e({nodeInternals:af(n,r,o,a)})},getNodes:()=>Array.from(t().nodeInternals.values()),setEdges:n=>{const{defaultEdgeOptions:r={}}=t();e({edges:n.map(e=>({...r,...e}))})},setDefaultNodesAndEdges:(n,r)=>{const o="undefined"!==typeof n,a="undefined"!==typeof r,i=o?af(n,new Map,t().nodeOrigin,t().elevateNodesOnSelect):new Map;e({nodeInternals:i,edges:a?r:[],hasDefaultNodes:o,hasDefaultEdges:a})},updateNodeDimensions:n=>{const{onNodesChange:r,nodeInternals:o,fitViewOnInit:a,fitViewOnInitDone:i,fitViewOnInitOptions:l,domNode:s,nodeOrigin:c}=t(),u=s?.querySelector(".react-flow__viewport");if(!u)return;const d=window.getComputedStyle(u),{m22:f}=new window.DOMMatrixReadOnly(d.transform),p=n.reduce((e,t)=>{const n=o.get(t.id);if(n?.hidden)o.set(n.id,{...n,[ju]:{...n[ju],handleBounds:void 0}});else if(n){const r=gu(t.nodeElement);r.width&&r.height&&(n.width!==r.width||n.height!==r.height||t.forceUpdate)&&(o.set(n.id,{...n,[ju]:{...n[ju],handleBounds:{source:Lf(".source",t.nodeElement,f,c),target:Lf(".target",t.nodeElement,f,c)}},...r}),e.push({id:n.id,type:"dimensions",dimensions:r}))}return e},[]);of(o,c);const h=i||a&&!i&&lf(t,{initial:!0,...l});e({nodeInternals:new Map(o),fitViewOnInitDone:h}),p?.length>0&&r?.(p)},updateNodePositions:function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{triggerNodeChanges:o}=t(),a=e.map(e=>{const t={id:e.id,type:"position",dragging:r};return n&&(t.positionAbsolute=e.positionAbsolute,t.position=e.position),t});o(a)},triggerNodeChanges:n=>{const{onNodesChange:r,nodeInternals:o,hasDefaultNodes:a,nodeOrigin:i,getNodes:l,elevateNodesOnSelect:s}=t();if(n?.length){if(a){const t=af(Nf(n,l()),o,i,s);e({nodeInternals:t})}r?.(n)}},addSelectedNodes:n=>{const{multiSelectionActive:r,edges:o,getNodes:a}=t();let i,l=null;r?i=n.map(e=>jf(e,!0)):(i=Mf(a(),n),l=Mf(o,[])),uf({changedNodes:i,changedEdges:l,get:t,set:e})},addSelectedEdges:n=>{const{multiSelectionActive:r,edges:o,getNodes:a}=t();let i,l=null;r?i=n.map(e=>jf(e,!0)):(i=Mf(o,n),l=Mf(a(),[])),uf({changedNodes:l,changedEdges:i,get:t,set:e})},unselectNodesAndEdges:function(){let{nodes:n,edges:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{edges:o,getNodes:a}=t(),i=r||o;uf({changedNodes:(n||a()).map(e=>(e.selected=!1,jf(e.id,!1))),changedEdges:i.map(e=>jf(e.id,!1)),get:t,set:e})},setMinZoom:n=>{const{d3Zoom:r,maxZoom:o}=t();r?.scaleExtent([n,o]),e({minZoom:n})},setMaxZoom:n=>{const{d3Zoom:r,minZoom:o}=t();r?.scaleExtent([o,n]),e({maxZoom:n})},setTranslateExtent:n=>{t().d3Zoom?.translateExtent(n),e({translateExtent:n})},resetSelectedElements:()=>{const{edges:n,getNodes:r}=t();uf({changedNodes:r().filter(e=>e.selected).map(e=>jf(e.id,!1)),changedEdges:n.filter(e=>e.selected).map(e=>jf(e.id,!1)),get:t,set:e})},setNodeExtent:n=>{const{nodeInternals:r}=t();r.forEach(e=>{e.positionAbsolute=yu(e.position,n)}),e({nodeExtent:n,nodeInternals:new Map(r)})},panBy:e=>{const{transform:n,width:r,height:o,d3Zoom:a,d3Selection:i,translateExtent:l}=t();if(!a||!i||!e.x&&!e.y)return!1;const s=Ac.translate(n[0]+e.x,n[1]+e.y).scale(n[2]),c=[[0,0],[r,o]],u=a?.constrain()(s,c,l);return a.transform(i,u),n[0]!==u.x||n[1]!==u.y||n[2]!==u.k},cancelConnection:()=>e({connectionNodeId:Pp.connectionNodeId,connectionHandleId:Pp.connectionHandleId,connectionHandleType:Pp.connectionHandleType,connectionStatus:Pp.connectionStatus,connectionStartHandle:Pp.connectionStartHandle,connectionEndHandle:Pp.connectionEndHandle}),reset:()=>e({...Pp})}),t=Object.is,e?ci(e,t):ci;var e,t},Rp=e=>{let{children:n}=e;const r=(0,t.useRef)(null);return r.current||(r.current=Tp()),t.createElement(Jc,{value:r.current},n)};Rp.displayName="ReactFlowProvider";const zp=e=>{let{children:n}=e;return(0,t.useContext)(Qc)?t.createElement(t.Fragment,null,n):t.createElement(Rp,null,n)};zp.displayName="ReactFlowWrapper";const Op={input:zd,default:Td,output:Id,group:Ad},Ip={default:od,straight:ed,step:Ju,smoothstep:Qu,simplebezier:Ku},Ap=[0,0],Dp=[15,15],Lp={x:0,y:0,zoom:1},$p={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0},Fp=(0,t.forwardRef)((e,n)=>{let{nodes:r,edges:o,defaultNodes:a,defaultEdges:i,className:l,nodeTypes:s=Op,edgeTypes:c=Ip,onNodeClick:u,onEdgeClick:d,onInit:f,onMove:p,onMoveStart:h,onMoveEnd:m,onConnect:g,onConnectStart:v,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:x,onNodeMouseEnter:w,onNodeMouseMove:S,onNodeMouseLeave:k,onNodeContextMenu:E,onNodeDoubleClick:C,onNodeDragStart:_,onNodeDrag:N,onNodeDragStop:j,onNodesDelete:M,onEdgesDelete:P,onSelectionChange:T,onSelectionDragStart:R,onSelectionDrag:z,onSelectionDragStop:O,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:D,connectionMode:L=$u.Strict,connectionLineType:$=Hu.Bezier,connectionLineStyle:F,connectionLineComponent:B,connectionLineContainerStyle:H,deleteKeyCode:V="Backspace",selectionKeyCode:U="Shift",selectionOnDrag:W=!1,selectionMode:Y=Bu.Full,panActivationKeyCode:K="Space",multiSelectionKeyCode:X=(Ou()?"Meta":"Control"),zoomActivationKeyCode:q=(Ou()?"Meta":"Control"),snapToGrid:G=!1,snapGrid:Z=Dp,onlyRenderVisibleElements:Q=!1,selectNodesOnDrag:J=!0,nodesDraggable:ee,nodesConnectable:te,nodesFocusable:ne,nodeOrigin:re=Ap,edgesFocusable:oe,edgesUpdatable:ae,elementsSelectable:ie,defaultViewport:le=Lp,minZoom:se=.5,maxZoom:ce=2,translateExtent:ue=Mp,preventScrolling:de=!0,nodeExtent:fe,defaultMarkerColor:pe="#b1b1b7",zoomOnScroll:he=!0,zoomOnPinch:me=!0,panOnScroll:ge=!1,panOnScrollSpeed:ve=.5,panOnScrollMode:ye=Fu.Free,zoomOnDoubleClick:be=!0,panOnDrag:xe=!0,onPaneClick:we,onPaneMouseEnter:Se,onPaneMouseMove:ke,onPaneMouseLeave:Ee,onPaneScroll:Ce,onPaneContextMenu:_e,children:Ne,onEdgeContextMenu:je,onEdgeDoubleClick:Me,onEdgeMouseEnter:Pe,onEdgeMouseMove:Te,onEdgeMouseLeave:Re,onEdgeUpdate:ze,onEdgeUpdateStart:Oe,onEdgeUpdateEnd:Ie,onReconnect:Ae,onReconnectStart:De,onReconnectEnd:Le,reconnectRadius:$e=10,edgeUpdaterRadius:Fe=10,onNodesChange:Be,onEdgesChange:He,noDragClassName:Ve="nodrag",noWheelClassName:Ue="nowheel",noPanClassName:We="nopan",fitView:Ye=!1,fitViewOptions:Ke,connectOnClick:Xe=!0,attributionPosition:qe,proOptions:Ge,defaultEdgeOptions:Ze,elevateNodesOnSelect:Qe=!0,elevateEdgesOnSelect:Je=!1,disableKeyboardA11y:et=!1,autoPanOnConnect:tt=!0,autoPanOnNodeDrag:nt=!0,connectionRadius:rt=20,isValidConnection:ot,onError:at,style:it,id:lt,nodeDragThreshold:st,...ct}=e;const ut=lt||"1";return t.createElement("div",{...ct,style:{...it,...$p},ref:n,className:ti(["react-flow",l]),"data-testid":"rf__wrapper",id:lt},t.createElement(zp,null,t.createElement(jp,{onInit:f,onMove:p,onMoveStart:h,onMoveEnd:m,onNodeClick:u,onEdgeClick:d,onNodeMouseEnter:w,onNodeMouseMove:S,onNodeMouseLeave:k,onNodeContextMenu:E,onNodeDoubleClick:C,nodeTypes:s,edgeTypes:c,connectionLineType:$,connectionLineStyle:F,connectionLineComponent:B,connectionLineContainerStyle:H,selectionKeyCode:U,selectionOnDrag:W,selectionMode:Y,deleteKeyCode:V,multiSelectionKeyCode:X,panActivationKeyCode:K,zoomActivationKeyCode:q,onlyRenderVisibleElements:Q,selectNodesOnDrag:J,defaultViewport:le,translateExtent:ue,minZoom:se,maxZoom:ce,preventScrolling:de,zoomOnScroll:he,zoomOnPinch:me,zoomOnDoubleClick:be,panOnScroll:ge,panOnScrollSpeed:ve,panOnScrollMode:ye,panOnDrag:xe,onPaneClick:we,onPaneMouseEnter:Se,onPaneMouseMove:ke,onPaneMouseLeave:Ee,onPaneScroll:Ce,onPaneContextMenu:_e,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:D,onEdgeContextMenu:je,onEdgeDoubleClick:Me,onEdgeMouseEnter:Pe,onEdgeMouseMove:Te,onEdgeMouseLeave:Re,onReconnect:Ae??ze,onReconnectStart:De??Oe,onReconnectEnd:Le??Ie,reconnectRadius:$e??Fe,defaultMarkerColor:pe,noDragClassName:Ve,noWheelClassName:Ue,noPanClassName:We,elevateEdgesOnSelect:Je,rfId:ut,disableKeyboardA11y:et,nodeOrigin:re,nodeExtent:fe}),t.createElement(Yd,{nodes:r,edges:o,defaultNodes:a,defaultEdges:i,onConnect:g,onConnectStart:v,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:x,nodesDraggable:ee,nodesConnectable:te,nodesFocusable:ne,edgesFocusable:oe,edgesUpdatable:ae,elementsSelectable:ie,elevateNodesOnSelect:Qe,minZoom:se,maxZoom:ce,nodeExtent:fe,onNodesChange:Be,onEdgesChange:He,snapToGrid:G,snapGrid:Z,connectionMode:L,translateExtent:ue,connectOnClick:Xe,defaultEdgeOptions:Ze,fitView:Ye,fitViewOptions:Ke,onNodesDelete:M,onEdgesDelete:P,onNodeDragStart:_,onNodeDrag:N,onNodeDragStop:j,onSelectionDrag:z,onSelectionDragStart:R,onSelectionDragStop:O,noPanClassName:We,nodeOrigin:re,rfId:ut,autoPanOnConnect:tt,autoPanOnNodeDrag:nt,onError:at,connectionRadius:rt,isValidConnection:ot,nodeDragThreshold:st}),t.createElement(Hd,{onSelectionChange:T}),Ne,t.createElement(hu,{proOptions:Ge,position:qe}),t.createElement(Jd,{rfId:ut,disableKeyboardA11y:et})))});Fp.displayName="ReactFlow";function Bp(e){return n=>{const[r,o]=(0,t.useState)(n),a=(0,t.useCallback)(t=>o(n=>e(t,n)),[]);return[r,o,a]}}const Hp=Bp(Nf),Vp=Bp(function(e,t){return _f(e,t)});var Up;function Wp(e){let{color:n,dimensions:r,lineWidth:o}=e;return t.createElement("path",{stroke:n,strokeWidth:o,d:`M${r[0]/2} 0 V${r[1]} M0 ${r[1]/2} H${r[0]}`})}function Yp(e){let{color:n,radius:r}=e;return t.createElement("circle",{cx:r,cy:r,r:r,fill:n})}!function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"}(Up||(Up={}));const Kp={[Up.Dots]:"#91919a",[Up.Lines]:"#eee",[Up.Cross]:"#e2e2e2"},Xp={[Up.Dots]:1,[Up.Lines]:1,[Up.Cross]:6},qp=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Gp(e){let{id:n,variant:r=Up.Dots,gap:o=20,size:a,lineWidth:i=1,offset:l=2,color:s,style:c,className:u}=e;const d=(0,t.useRef)(null),{transform:f,patternId:p}=uu(qp,ui),h=s||Kp[r],m=a||Xp[r],g=r===Up.Dots,v=r===Up.Cross,y=Array.isArray(o)?o:[o,o],b=[y[0]*f[2]||1,y[1]*f[2]||1],x=m*f[2],w=v?[x,x]:b,S=g?[x/l,x/l]:[w[0]/l,w[1]/l];return t.createElement("svg",{className:ti(["react-flow__background",u]),style:{...c,position:"absolute",width:"100%",height:"100%",top:0,left:0},ref:d,"data-testid":"rf__background"},t.createElement("pattern",{id:p+n,x:f[0]%b[0],y:f[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`},g?t.createElement(Yp,{color:h,radius:x/l}):t.createElement(Wp,{dimensions:w,color:h,lineWidth:i})),t.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${p+n})`}))}Gp.displayName="Background";var Zp=(0,t.memo)(Gp);function Qp(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},t.createElement("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"}))}function Jp(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},t.createElement("path",{d:"M0 0h32v4.2H0z"}))}function eh(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},t.createElement("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"}))}function th(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},t.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"}))}function nh(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},t.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"}))}const rh=e=>{let{children:n,className:r,...o}=e;return t.createElement("button",{type:"button",className:ti(["react-flow__controls-button",r]),...o},n)};rh.displayName="ControlButton";const oh=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom}),ah=e=>{let{style:n,showZoom:r=!0,showFitView:o=!0,showInteractive:a=!0,fitViewOptions:i,onZoomIn:l,onZoomOut:s,onFitView:c,onInteractiveChange:u,className:d,children:f,position:p="bottom-left"}=e;const h=du(),[m,g]=(0,t.useState)(!1),{isInteractive:v,minZoomReached:y,maxZoomReached:b}=uu(oh,ui),{zoomIn:x,zoomOut:w,fitView:S}=hf();if((0,t.useEffect)(()=>{g(!0)},[]),!m)return null;return t.createElement(pu,{className:ti(["react-flow__controls",d]),position:p,style:n,"data-testid":"rf__controls"},r&&t.createElement(t.Fragment,null,t.createElement(rh,{onClick:()=>{x(),l?.()},className:"react-flow__controls-zoomin",title:"zoom in","aria-label":"zoom in",disabled:b},t.createElement(Qp,null)),t.createElement(rh,{onClick:()=>{w(),s?.()},className:"react-flow__controls-zoomout",title:"zoom out","aria-label":"zoom out",disabled:y},t.createElement(Jp,null))),o&&t.createElement(rh,{className:"react-flow__controls-fitview",onClick:()=>{S(i),c?.()},title:"fit view","aria-label":"fit view"},t.createElement(eh,null)),a&&t.createElement(rh,{className:"react-flow__controls-interactive",onClick:()=>{h.setState({nodesDraggable:!v,nodesConnectable:!v,elementsSelectable:!v}),u?.(!v)},title:"toggle interactivity","aria-label":"toggle interactivity"},v?t.createElement(nh,null):t.createElement(th,null)),f)};ah.displayName="Controls";var ih=(0,t.memo)(ah);const lh=e=>{let{id:n,x:r,y:o,width:a,height:i,style:l,color:s,strokeColor:c,strokeWidth:u,className:d,borderRadius:f,shapeRendering:p,onClick:h,selected:m}=e;const{background:g,backgroundColor:v}=l||{},y=s||g||v;return t.createElement("rect",{className:ti(["react-flow__minimap-node",{selected:m},d]),x:r,y:o,rx:f,ry:f,width:a,height:i,fill:y,stroke:c,strokeWidth:u,shapeRendering:p,onClick:h?e=>h(e,n):void 0})};lh.displayName="MiniMapNode";var sh=(0,t.memo)(lh);const ch=e=>e.nodeOrigin,uh=e=>e.getNodes().filter(e=>!e.hidden&&e.width&&e.height),dh=e=>e instanceof Function?e:()=>e;var fh=(0,t.memo)(function(e){let{nodeStrokeColor:n="transparent",nodeColor:r="#e2e2e2",nodeClassName:o="",nodeBorderRadius:a=5,nodeStrokeWidth:i=2,nodeComponent:l=sh,onClick:s}=e;const c=uu(uh,ui),u=uu(ch),d=dh(r),f=dh(n),p=dh(o),h="undefined"===typeof window||window.chrome?"crispEdges":"geometricPrecision";return t.createElement(t.Fragment,null,c.map(e=>{const{x:n,y:r}=fd(e,u).positionAbsolute;return t.createElement(l,{key:e.id,x:n,y:r,width:e.width,height:e.height,style:e.style,selected:e.selected,className:p(e),color:d(e),borderRadius:a,strokeColor:f(e),strokeWidth:i,shapeRendering:h,onClick:s,id:e.id})}))});const ph=e=>{const t=e.getNodes(),n={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:n,boundingRect:t.length>0?(r=pd(t,e.nodeOrigin),o=n,Eu(Su(ku(r),ku(o)))):n,rfId:e.rfId};var r,o};function hh(e){let{style:n,className:r,nodeStrokeColor:o="transparent",nodeColor:a="#e2e2e2",nodeClassName:i="",nodeBorderRadius:l=5,nodeStrokeWidth:s=2,nodeComponent:c,maskColor:u="rgb(240, 240, 240, 0.6)",maskStrokeColor:d="none",maskStrokeWidth:f=1,position:p="bottom-right",onClick:h,onNodeClick:m,pannable:g=!1,zoomable:v=!1,ariaLabel:y="React Flow mini map",inversePan:b=!1,zoomStep:x=10,offsetScale:w=5}=e;const S=du(),k=(0,t.useRef)(null),{boundingRect:E,viewBB:C,rfId:_}=uu(ph,ui),N=n?.width??200,j=n?.height??150,M=E.width/N,P=E.height/j,T=Math.max(M,P),R=T*N,z=T*j,O=w*T,I=E.x-(R-E.width)/2-O,A=E.y-(z-E.height)/2-O,D=R+2*O,L=z+2*O,$=`react-flow__minimap-desc-${_}`,F=(0,t.useRef)(0);F.current=T,(0,t.useEffect)(()=>{if(k.current){const e=Pl(k.current),t=e=>{const{transform:t,d3Selection:n,d3Zoom:r}=S.getState();if("wheel"!==e.sourceEvent.type||!n||!r)return;const o=-e.sourceEvent.deltaY*(1===e.sourceEvent.deltaMode?.05:e.sourceEvent.deltaMode?1:.002)*x,a=t[2]*Math.pow(2,o);r.scaleTo(n,a)},n=e=>{const{transform:t,d3Selection:n,d3Zoom:r,translateExtent:o,width:a,height:i}=S.getState();if("mousemove"!==e.sourceEvent.type||!n||!r)return;const l=F.current*Math.max(1,t[2])*(b?-1:1),s={x:t[0]-e.sourceEvent.movementX*l,y:t[1]-e.sourceEvent.movementY*l},c=[[0,0],[a,i]],u=Ac.translate(s.x,s.y).scale(t[2]),d=r.constrain()(u,c,o);r.transform(n,d)},r=Wc().on("zoom",g?n:null).on("zoom.wheel",v?t:null);return e.call(r),()=>{e.on("zoom",null)}}},[g,v,b,x]);const B=h?e=>{const t=$l(e);h(e,{x:t[0],y:t[1]})}:void 0,H=m?(e,t)=>{const n=S.getState().nodeInternals.get(t);m(e,n)}:void 0;return t.createElement(pu,{position:p,style:n,className:ti(["react-flow__minimap",r]),"data-testid":"rf__minimap"},t.createElement("svg",{width:N,height:j,viewBox:`${I} ${A} ${D} ${L}`,role:"img","aria-labelledby":$,ref:k,onClick:B},y&&t.createElement("title",{id:$},y),t.createElement(fh,{onClick:H,nodeColor:a,nodeStrokeColor:o,nodeBorderRadius:l,nodeClassName:i,nodeStrokeWidth:s,nodeComponent:c}),t.createElement("path",{className:"react-flow__minimap-mask",d:`M${I-O},${A-O}h${D+2*O}v${L+2*O}h${-D-2*O}z\n        M${C.x},${C.y}h${C.width}v${C.height}h${-C.width}z`,fill:u,fillRule:"evenodd",stroke:d,strokeWidth:f,pointerEvents:"none"})))}hh.displayName="MiniMap";var mh=(0,t.memo)(hh);const gh=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,vh=vr.div`
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
`,yh=vr.h1`
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
`,bh=vr.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`,xh=vr.div`
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
`,wh=vr.div`
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
`,Sh=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  height: 70vh;
  
  @media (max-width: 1024px) {
    height: 50vh;
  }
  
  .react-flow__node {
    background-color: rgba(26, 26, 26, 0.9);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 1rem;
    min-width: 120px;
    text-align: center;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: var(--color-accent-gold);
      transform: translateY(-2px);
    }
    
    &.selected {
      border-color: var(--color-accent-gold);
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
  }
  
  .react-flow__handle {
    width: 12px;
    height: 12px;
    background-color: var(--color-accent-gold);
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    
    &:hover {
      background-color: var(--color-accent-red);
      transform: scale(1.2);
    }
  }
  
  .react-flow__edge-path {
    stroke: var(--color-accent-gold);
    stroke-width: 3;
    stroke-dasharray: none;
  }
  
  .react-flow__edge.selected .react-flow__edge-path {
    stroke: var(--color-accent-red);
    stroke-width: 4;
  }
  
  .react-flow__controls {
    background-color: rgba(10, 10, 10, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
  
  .react-flow__controls-button {
    background-color: rgba(26, 26, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--color-text);
    
    &:hover {
      background-color: var(--color-accent-gold);
      color: var(--color-bg);
    }
  }
  
  .react-flow__minimap {
    background-color: rgba(10, 10, 10, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
`,kh=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  overflow-y: auto;
`,Eh=vr.h3`
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
`,Ch=vr.div`
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
`,_h=vr.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,Nh=vr.div`
  font-family: var(--font-mono);
  font-size: 0.8rem;
`,jh=vr.div`
  margin-bottom: 2rem;
`,Mh=vr.h4`
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
`,Ph=vr.div`
  margin-bottom: 1rem;
`,Th=vr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,Rh=vr.input`
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
`,zh=vr.button`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${e=>e.secondary?"transparent":"var(--color-accent-gold)"};
  border: 1px solid var(--color-accent-gold);
  color: ${e=>e.secondary?"var(--color-accent-gold)":"var(--color-bg)"};
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  
  &:hover {
    background-color: ${e=>e.secondary?"var(--color-accent-gold)":"var(--color-accent-red)"};
    color: var(--color-bg);
    border-color: ${e=>e.secondary?"var(--color-accent-gold)":"var(--color-accent-red)"};
  }
`,Oh=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1rem;
`,Ih=vr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,Ah=vr.span`
  color: var(--color-text);
`,Dh=vr.span`
  color: var(--color-accent-gold);
  font-weight: bold;
`,Lh=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1rem;
`,$h=vr.div`
  display: flex;
  margin-bottom: 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`,Fh=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
  font-weight: bold;
`,Bh=vr.span`
  color: var(--color-text);
`,Hh=[{id:"resistor",name:"Resistor",icon:"\u26a1",symbol:"R",value:"1k\u03a9",type:"resistor",resistance:1e3},{id:"capacitor",name:"Capacitor",icon:"\u26a1",symbol:"C",value:"1\u03bcF",type:"capacitor",capacitance:1e-6},{id:"inductor",name:"Inductor",icon:"\u26a1",symbol:"L",value:"1mH",type:"inductor",inductance:.001},{id:"voltage-source",name:"Voltage Source",icon:"\ud83d\udd0b",symbol:"V",value:"5V",type:"voltage-source",voltage:5},{id:"current-source",name:"Current Source",icon:"\u26a1",symbol:"I",value:"1A",type:"current-source",current:1},{id:"led",name:"LED",icon:"\ud83d\udca1",symbol:"LED",value:"Red",type:"led",forwardVoltage:2}],Vh={circuit:e=>{let{data:t,selected:n}=e;return(0,br.jsxs)("div",{className:"circuit-node "+(n?"selected":""),children:[(0,br.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:t.icon}),(0,br.jsx)("div",{style:{fontSize:"0.8rem",fontFamily:"var(--font-mono)",marginBottom:"0.3rem"},children:t.symbol}),(0,br.jsx)("div",{style:{fontSize:"0.7rem",opacity:.8},children:t.value})]})}};function Uh(){const[e,n,r]=Hp([]),[o,a,i]=Vp([]),[l,s]=(0,t.useState)(null),[c,u]=(0,t.useState)(null),{project:d}=hf(),f=(0,t.useCallback)(e=>{a(t=>cd(e,t))},[a]),p=(0,t.useCallback)((e,t)=>{s(t)},[]),h=(0,t.useCallback)(()=>{s(null)},[]),m=(0,t.useCallback)(e=>{e.preventDefault();const t=JSON.parse(e.dataTransfer.getData("application/reactflow")),r=d({x:e.clientX,y:e.clientY}),o={id:`${t.id}-${Date.now()}`,type:"circuit",position:r,data:{...t},sourcePosition:"right",targetPosition:"left"};n(e=>e.concat(o))},[d,n]),g=(0,t.useCallback)(e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"},[]),v=(e,t)=>{n(n=>n.map(n=>n.id===e?{...n,data:{...n.data,...t}}:n))};return(0,br.jsxs)(gh,{children:[(0,br.jsx)(vh,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(yh,{children:"Circuit Builder"}),(0,br.jsx)(bh,{children:"Design and analyze electronic circuits with this interactive drag-and-drop tool. Add components, connect them with wires, and simulate circuit behavior in real-time."}),(0,br.jsxs)(xh,{children:[(0,br.jsxs)(wh,{children:[(0,br.jsx)(Eh,{children:"Components"}),Hh.map(e=>(0,br.jsxs)(Ch,{draggable:!0,onDragStart:t=>((e,t)=>{e.dataTransfer.setData("application/reactflow",JSON.stringify(t)),e.dataTransfer.effectAllowed="move"})(t,e),children:[(0,br.jsx)(_h,{children:e.icon}),(0,br.jsx)(Nh,{children:e.name})]},e.id))]}),(0,br.jsx)(Sh,{children:(0,br.jsxs)(Fp,{nodes:e,edges:o,onNodesChange:r,onEdgesChange:i,onConnect:f,onNodeClick:p,onPaneClick:h,onDrop:m,onDragOver:g,nodeTypes:Vh,fitView:!0,attributionPosition:"bottom-left",children:[(0,br.jsx)(Zp,{}),(0,br.jsx)(ih,{}),(0,br.jsx)(mh,{})]})}),(0,br.jsxs)(kh,{children:[(0,br.jsx)(Mh,{children:"Circuit Tools"}),(0,br.jsx)(zh,{onClick:()=>{if(0!==e.length)try{const t=e.filter(e=>"voltage-source"===e.data.type),n=e.filter(e=>"resistor"===e.data.type);if(0===t.length)return void u({error:"No voltage source found in circuit"});const r=t.reduce((e,t)=>e+(t.data.voltage||0),0),o=n.reduce((e,t)=>e+(t.data.resistance||0),0);if(0===o)return void u({error:"No resistors found in circuit"});const a=r/o*1e3,i=r*r/o*1e3;u({totalResistance:o.toFixed(2),current:a.toFixed(2),power:i.toFixed(2),voltage:r.toFixed(2)})}catch(t){u({error:"Error analyzing circuit: "+t.message})}else u({error:"No components on canvas"})},children:"Analyze Circuit"}),(0,br.jsx)(zh,{onClick:()=>{n([]),a([]),s(null),u(null)},secondary:!0,children:"Clear Canvas"}),l&&(0,br.jsxs)(jh,{children:[(0,br.jsx)(Mh,{children:"Component Properties"}),(0,br.jsxs)(Ph,{children:[(0,br.jsx)(Th,{children:"Component Type"}),(0,br.jsx)("div",{style:{padding:"0.8rem",backgroundColor:"rgba(26, 26, 26, 0.5)",borderRadius:"5px",border:"1px solid rgba(255, 255, 255, 0.1)",fontFamily:"var(--font-mono)",fontSize:"0.9rem"},children:l.data.name})]}),(0,br.jsxs)(Ph,{children:[(0,br.jsx)(Th,{children:"Value"}),(0,br.jsx)(Rh,{type:"text",value:l.data.value,onChange:e=>v(l.id,{value:e.target.value}),placeholder:"Enter value (e.g., 1k, 5V, 1\u03bcF)"})]}),"voltage-source"===l.data.type&&(0,br.jsxs)(Ph,{children:[(0,br.jsx)(Th,{children:"Voltage (V)"}),(0,br.jsx)(Rh,{type:"number",value:l.data.voltage||0,onChange:e=>v(l.id,{voltage:parseFloat(e.target.value)||0}),step:"0.1"})]}),"resistor"===l.data.type&&(0,br.jsxs)(Ph,{children:[(0,br.jsx)(Th,{children:"Resistance (\u03a9)"}),(0,br.jsx)(Rh,{type:"number",value:l.data.resistance||0,onChange:e=>v(l.id,{resistance:parseFloat(e.target.value)||0}),step:"1"})]}),"capacitor"===l.data.type&&(0,br.jsxs)(Ph,{children:[(0,br.jsx)(Th,{children:"Capacitance (F)"}),(0,br.jsx)(Rh,{type:"number",value:l.data.capacitance||0,onChange:e=>v(l.id,{capacitance:parseFloat(e.target.value)||0}),step:"0.000001"})]}),"inductor"===l.data.type&&(0,br.jsxs)(Ph,{children:[(0,br.jsx)(Th,{children:"Inductance (H)"}),(0,br.jsx)(Rh,{type:"number",value:l.data.inductance||0,onChange:e=>v(l.id,{inductance:parseFloat(e.target.value)||0}),step:"0.001"})]})]}),c&&(0,br.jsxs)(jh,{children:[(0,br.jsx)(Mh,{children:"Circuit Analysis"}),c.error?(0,br.jsx)("div",{style:{color:"var(--color-accent-red)",fontSize:"0.9rem",fontFamily:"var(--font-mono)"},children:c.error}):(0,br.jsxs)(Oh,{children:[(0,br.jsxs)(Ih,{children:[(0,br.jsx)(Ah,{children:"Total Resistance:"}),(0,br.jsxs)(Dh,{children:[c.totalResistance," \u03a9"]})]}),(0,br.jsxs)(Ih,{children:[(0,br.jsx)(Ah,{children:"Current:"}),(0,br.jsxs)(Dh,{children:[c.current," mA"]})]}),(0,br.jsxs)(Ih,{children:[(0,br.jsx)(Ah,{children:"Power:"}),(0,br.jsxs)(Dh,{children:[c.power," mW"]})]}),(0,br.jsxs)(Ih,{children:[(0,br.jsx)(Ah,{children:"Source Voltage:"}),(0,br.jsxs)(Dh,{children:[c.voltage," V"]})]})]})]}),(0,br.jsxs)(jh,{children:[(0,br.jsx)(Mh,{children:"Instructions"}),(0,br.jsxs)(Lh,{children:[(0,br.jsxs)($h,{children:[(0,br.jsx)(Fh,{children:"1."}),(0,br.jsx)(Bh,{children:"Drag components from the palette to the canvas"})]}),(0,br.jsxs)($h,{children:[(0,br.jsx)(Fh,{children:"2."}),(0,br.jsx)(Bh,{children:"Connect components by dragging from one handle to another"})]}),(0,br.jsxs)($h,{children:[(0,br.jsx)(Fh,{children:"3."}),(0,br.jsx)(Bh,{children:"Click on components to edit their properties"})]}),(0,br.jsxs)($h,{children:[(0,br.jsx)(Fh,{children:"4."}),(0,br.jsx)(Bh,{children:'Use "Analyze Circuit" to simulate the circuit'})]})]})]})]})]})]})]})}const Wh=function(){return(0,br.jsx)(Rp,{children:(0,br.jsx)(Uh,{})})},Yh=vr.div`
  display: inline-block;
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: ${e=>e.fontSize||"0.9rem"};
  letter-spacing: 1px;
`,Kh=yr`
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
`,Xh=vr.span`
  display: inline-block;
  animation: ${Kh} ${e=>e.duration||3}s infinite;
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
`,qh=vr.span`
  color: var(--color-accent-gold);
`,Gh=e=>{let{text:n,fontSize:r}=e;const o=n.split(" ");return(0,br.jsx)(Yh,{fontSize:r,children:o.map((e,n)=>(0,br.jsxs)(t.Fragment,{children:[(0,br.jsx)(Xh,{index:n,duration:n%3+3,"data-text":e,children:e}),n<o.length-1&&(0,br.jsx)(qh,{children:" "})]},n))})},Zh=vr.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 4rem;
  position: relative;
`,Qh=vr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Jh=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin: 0;
`,em=vr.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`,tm=vr.canvas`
  width: 100%;
  height: 100%;
`,nm=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`,rm=vr.button`
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
`,om=vr.div`
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
`,am=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
`,im=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-top: 0;
  margin-bottom: 1rem;
`,lm=()=>{const e=(0,t.useRef)(null),[n,r]=(0,t.useState)("glass"),[o,a]=(0,t.useState)(.5),[i,l]=(0,t.useState)(!0),[s,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(!1),f=(0,t.useRef)([]),p=(0,t.useRef)(null),h=(0,t.useRef)(0);(0,t.useEffect)(()=>{const t=()=>{const e=["rgba(255, 50, 50, 0.8)","rgba(50, 200, 255, 0.8)","rgba(255, 200, 50, 0.8)","rgba(50, 255, 100, 0.8)","rgba(212, 175, 55, 0.8)"];return e[Math.floor(Math.random()*e.length)]};return(()=>{const r=e.current;if(!r)return;const o=r.width,a=r.height,i=[];if("crystal"===n){const e=Math.floor(Math.sqrt(180)),n=o/e,r=a/e;for(let o=0;o<e;o++)for(let a=0;a<e;a++){const e=.1,l=(o+.5+(Math.random()*e-e/2))*n,s=(a+.5+(Math.random()*e-e/2))*r;i.push({x:l,y:s,baseX:l,baseY:s,radius:3+Math.random(),color:t(),vx:.2*(Math.random()-.5),vy:.2*(Math.random()-.5),bonds:[],fixed:!0,lastHop:0,hopProbability:.001,stress:0,type:Math.random()<.8?"A":"B"})}}else for(let e=0;e<180;e++)i.push({x:Math.random()*o,y:Math.random()*a,baseX:null,baseY:null,radius:2.5+1.5*Math.random(),color:t(),vx:(Math.random()-.5)*("liquid"===n?1:.3),vy:(Math.random()-.5)*("liquid"===n?1:.3),bonds:[],fixed:"glass"===n&&Math.random()<.4,lastHop:0,hopProbability:"glass"===n?.005+.015*Math.random():0,stress:0,type:Math.random()<.7?"A":"B"});f.current=i})(),()=>{p.current&&cancelAnimationFrame(p.current)}},[n]),(0,t.useEffect)(()=>{if(!i)return;const t=e.current;if(!t)return;const r=t.getContext("2d"),a=()=>{const e=t.parentElement;t.width=e.clientWidth,t.height=e.clientHeight};a(),window.addEventListener("resize",a);const l=()=>{h.current+=1;const e=t.width,a=t.height;if(r.clearRect(0,0,e,a),"crystal"===n){r.strokeStyle="rgba(255, 255, 255, 0.05)",r.lineWidth=.5;const t=Math.floor(Math.sqrt(f.current.length)),n=e/t,o=a/t;for(let i=0;i<=t;i++)r.beginPath(),r.moveTo(i*n,0),r.lineTo(i*n,a),r.stroke(),r.beginPath(),r.moveTo(0,i*o),r.lineTo(e,i*o),r.stroke()}const i=f.current;if("glass"===n||"crystal"===n)for(let t=0;t<i.length;t++){i[t].bonds=[],i[t].stress=0;for(let e=t+1;e<i.length;e++){const r=i[e].x-i[t].x,o=i[e].y-i[t].y,a=Math.sqrt(r*r+o*o);if(a<("crystal"===n?40:30)){i[t].bonds.push(e);const r="crystal"===n?30:25,o=Math.abs(a-r)/r;i[t].stress+=o,i[e].stress+=o}}}r.lineWidth=1;for(let t=0;t<i.length;t++){const e=i[t];for(const t of e.bonds){const o=i[t];if(!("glass"===n&&Math.random()<.3)){if(r.beginPath(),r.moveTo(e.x,e.y),r.lineTo(o.x,o.y),"crystal"===n)r.strokeStyle="rgba(212, 175, 55, 0.4)";else if("glass"===n)if(u){const t=(e.stress+o.stress)/2,n=`rgba(${Math.min(255,100+400*t)}, ${Math.max(0,200-400*t)}, 50, 0.5)`;r.strokeStyle=n}else r.strokeStyle="rgba(255, 255, 255, 0.2)";r.stroke()}}}for(let t=0;t<i.length;t++){const l=i[t];switch(n){case"glass":if(!l.fixed&&(l.x+=l.vx*(.5*o),l.y+=l.vy*(.5*o),Math.random()<.01&&(l.vx=.5*(Math.random()-.5),l.vy=.5*(Math.random()-.5)),s)){const e=Date.now();if(e-l.lastHop>2e3&&Math.random()<l.hopProbability*o){const t=20+20*Math.random(),n=Math.random()*Math.PI*2,o=l.x+Math.cos(n)*t,a=l.y+Math.sin(n)*t,i=r.createLinearGradient(l.x,l.y,o,a);i.addColorStop(0,l.color),i.addColorStop(1,"rgba(255, 255, 255, 0)"),r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(o,a),r.strokeStyle=i,r.lineWidth=2,r.stroke(),l.x=o,l.y=a,l.lastHop=e}}break;case"liquid":l.x+=l.vx*(2*o),l.y+=l.vy*(2*o),Math.random()<.05&&(l.vx=2*(Math.random()-.5),l.vy=2*(Math.random()-.5));break;case"crystal":if(null!==l.baseX){const e=2*o;l.x=l.baseX+Math.sin(.05*h.current+t)*e,l.y=l.baseY+Math.sin(.05*h.current+t+2)*e}}l.x<0&&(l.x=e),l.x>e&&(l.x=0),l.y<0&&(l.y=a),l.y>a&&(l.y=0),r.beginPath(),r.arc(l.x,l.y,l.radius,0,2*Math.PI);let c=l.color;if(u&&"liquid"!==n){const e=Math.min(1,l.stress/2);c=`rgba(${Math.min(255,100+400*e)}, ${Math.max(0,200-400*e)}, 50, 0.8)`}r.fillStyle=c,r.fill();const d=r.createRadialGradient(l.x,l.y,0,l.x,l.y,3*l.radius);d.addColorStop(0,c),d.addColorStop(1,"rgba(0, 0, 0, 0)"),r.beginPath(),r.arc(l.x,l.y,3*l.radius,0,2*Math.PI),r.fillStyle=d,r.fill()}p.current=requestAnimationFrame(l)};return l(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(p.current)}},[i,n,o,s,u]);const m=e=>{r(e)},g=e=>{a(t=>{const n=t+e;return Math.max(.1,Math.min(1,n))})};return(0,br.jsxs)(Zh,{children:[(0,br.jsxs)(Qh,{children:[(0,br.jsx)(Jh,{children:"Molecular Dynamics Simulation"}),(0,br.jsx)(Gh,{text:"Visualizing Phase Transitions in Materials",fontSize:"1rem"})]}),(0,br.jsxs)(em,{children:[(0,br.jsx)(tm,{ref:e}),(0,br.jsxs)(om,{children:["Phase: ",n.charAt(0).toUpperCase()+n.slice(1)," | Temperature: ",Math.round(100*o),"%"]})]}),(0,br.jsxs)(nm,{children:[(0,br.jsx)(rm,{className:"glass"===n?"active":"",onClick:()=>m("glass"),children:"Glass Phase"}),(0,br.jsx)(rm,{className:"liquid"===n?"active":"",onClick:()=>m("liquid"),children:"Liquid Phase"}),(0,br.jsx)(rm,{className:"crystal"===n?"active":"",onClick:()=>m("crystal"),children:"Crystal Phase"}),(0,br.jsx)(rm,{onClick:()=>g(.1),children:"Temperature +"}),(0,br.jsx)(rm,{onClick:()=>g(-.1),children:"Temperature -"}),(0,br.jsx)(rm,{className:s?"active":"",onClick:()=>{c(e=>!e)},children:s?"Hide Hopping":"Show Hopping"}),(0,br.jsx)(rm,{className:u?"active":"",onClick:()=>{d(e=>!e)},children:u?"Hide Stress":"Show Stress"}),(0,br.jsx)(rm,{onClick:()=>{l(e=>!e)},children:i?"Pause":"Play"})]}),(0,br.jsxs)(am,{children:[(0,br.jsx)(im,{children:"About This Simulation"}),(0,br.jsx)("p",{children:"This interactive molecular dynamics simulation demonstrates the structural differences between crystalline, glass, and liquid phases of materials. The visualization shows how atomic arrangement and mobility change across different phases."}),(0,br.jsx)("p",{children:(()=>{switch(n){case"glass":return"Glass is an amorphous solid with no long-range order. Particles are randomly arranged but have limited mobility, with occasional 'hopping' between positions.";case"liquid":return"In the liquid phase, particles move freely and continuously, with no fixed positions. The structure is disordered with only short-range correlations.";case"crystal":return"Crystalline solids have particles arranged in a regular, repeating pattern. Particles vibrate around fixed lattice positions with amplitude increasing with temperature.";default:return""}})()}),(0,br.jsxs)("p",{children:[(0,br.jsx)("strong",{children:"Controls:"})," Toggle between phases, adjust temperature, and enable special visualizations like atomic hopping (a key mechanism in glass dynamics) and local stress distribution (shown through color intensity)."]})]})]})},sm=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,cm=vr.div`
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
`,um=vr.h1`
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
`,dm=vr.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`,fm=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
`,pm=vr.div`
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
`,hm=vr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,mm=vr.div`
  font-size: 2.5rem;
  margin-right: 1rem;
`,gm=vr.div`
  flex: 1;
`,vm=vr.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`,ym=vr.p`
  opacity: 0.7;
  font-size: 0.9rem;
  font-family: var(--font-sans);
`,bm=vr.div`
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1.5rem;
`,xm=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`,wm=vr.span`
  background-color: rgba(26, 26, 26, 0.5);
  color: var(--color-accent-gold);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  font-family: var(--font-mono);
`,Sm=vr.div`
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
`,km=vr.div`
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
`,Em=vr.button`
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
`,Cm=vr.h2`
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
`,_m=vr.div`
  margin-bottom: 2rem;
`,Nm=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,jm=vr.div`
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,Mm=vr.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,Pm=vr.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 0.5rem;
  font-size: 1rem;
`,Tm=vr.p`
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
`,Rm=vr.div`
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
`;const zm=function(){const[e,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)([]),l=[{id:1,icon:"\ud83d\udd2c",title:"MOSFET Device Modeling",subtitle:"Semiconductor Physics Research",description:"Advanced modeling of MOSFET devices including quantum mechanical effects and nanoscale phenomena.",tags:["MOSFET","Device Physics","Quantum Mechanics","Simulation"],details:{objective:"Develop comprehensive models for MOSFET devices that account for quantum mechanical effects at nanoscale dimensions.",methodology:"Utilized quantum mechanical calculations combined with classical device physics to create hybrid models. Implemented numerical simulations using MATLAB and Python.",results:"Successfully developed models that show improved accuracy for sub-10nm devices. Achieved 15% better prediction accuracy compared to classical models.",applications:"These models can be used for next-generation semiconductor device design and optimization.",publications:[{title:"Quantum Effects in Nanoscale MOSFET Devices",journal:"Journal of Applied Physics (In Preparation)",year:"2024",authors:"S. Wong, et al."}]}},{id:2,icon:"\u269b\ufe0f",title:"Quantum Transport Studies",subtitle:"Theoretical Physics",description:"Investigation of quantum transport phenomena in low-dimensional semiconductor structures.",tags:["Quantum Transport","Semiconductors","Theoretical Physics","Nanostructures"],details:{objective:"Study quantum transport mechanisms in low-dimensional semiconductor structures and their applications.",methodology:"Theoretical analysis using quantum mechanical formalism, numerical calculations, and comparison with experimental data.",results:"Identified key quantum transport mechanisms affecting device performance. Developed theoretical framework for predicting transport properties.",applications:"Results applicable to quantum devices, sensors, and next-generation electronics.",publications:[{title:"Quantum Transport in Low-Dimensional Structures",journal:"Physical Review B (Under Review)",year:"2024",authors:"S. Wong, et al."}]}},{id:3,icon:"\ud83e\uddea",title:"Materials Characterization",subtitle:"Experimental Physics",description:"Comprehensive characterization of novel semiconductor materials for electronic applications.",tags:["Materials Science","Characterization","Semiconductors","Electronic Properties"],details:{objective:"Characterize electronic and optical properties of novel semiconductor materials.",methodology:"Used various characterization techniques including I-V measurements, spectroscopy, and microscopy.",results:"Identified promising materials with enhanced electronic properties. Established structure-property relationships.",applications:"Materials suitable for high-performance electronic devices and optoelectronic applications.",publications:[{title:"Electronic Properties of Novel Semiconductor Materials",journal:"Applied Physics Letters (In Preparation)",year:"2024",authors:"S. Wong, et al."}]}},{id:4,icon:"\ud83d\udcbb",title:"Computational Physics Tools",subtitle:"Software Development",description:"Development of computational tools for physics simulations and educational purposes.",tags:["Computational Physics","Simulation","Software Development","Education"],details:{objective:"Create user-friendly computational tools for physics education and research.",methodology:"Developed interactive simulations using modern web technologies and scientific computing libraries.",results:"Created several interactive tools including MOSFET simulator and circuit builder. Tools used by students and researchers.",applications:"Educational tools for physics courses and research applications.",publications:[{title:"Interactive Physics Simulations for Education",journal:"Computer Physics Communications (Planned)",year:"2024",authors:"S. Wong"}]}},{id:5,icon:"\ud83d\udcca",title:"Data Analysis & Visualization",subtitle:"Research Methodology",description:"Advanced data analysis techniques for experimental physics research.",tags:["Data Analysis","Visualization","Statistics","Research Methods"],details:{objective:"Develop advanced data analysis methods for complex physics datasets.",methodology:"Applied statistical analysis, machine learning techniques, and advanced visualization methods.",results:"Improved data analysis efficiency by 40%. Developed new visualization techniques for complex datasets.",applications:"Methods applicable to various physics research areas and experimental data analysis.",publications:[{title:"Advanced Data Analysis in Physics Research",journal:"Review of Scientific Instruments (Planned)",year:"2024",authors:"S. Wong, et al."}]}},{id:6,icon:"\ud83c\udf1f",title:"Future Research Directions",subtitle:"Ongoing Projects",description:"Exploring emerging areas in quantum computing and advanced materials.",tags:["Quantum Computing","Future Technology","Innovation","Research Planning"],details:{objective:"Explore applications of quantum mechanics in next-generation computing and materials.",methodology:"Literature review, theoretical analysis, and preliminary experimental work.",results:"Identified promising research directions. Established collaborations with leading research groups.",applications:"Potential applications in quantum computing, advanced sensors, and novel electronic devices.",publications:[{title:"Quantum Technologies: Future Perspectives",journal:"Nature Reviews Physics (Planned)",year:"2025",authors:"S. Wong, et al."}]}}];(0,t.useEffect)(()=>{const e=setTimeout(()=>{i(l.map(e=>e.id))},100);return()=>clearTimeout(e)},[]);const s=()=>{o(!1),document.body.style.overflow="auto"};return(0,br.jsxs)(sm,{children:[(0,br.jsx)(cm,{}),(0,br.jsx)(Rm,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(um,{className:"glitch","data-text":"RESEARCH",children:"RESEARCH"}),(0,br.jsx)(dm,{children:"Explore my research portfolio in semiconductor physics, quantum mechanics, and materials science. Each project represents a step towards understanding the fundamental principles that govern electronic devices and quantum phenomena."}),(0,br.jsx)(lm,{}),(0,br.jsx)(fm,{children:l.map((e,t)=>(0,br.jsxs)(pm,{onClick:()=>(n(e),o(!0),void(document.body.style.overflow="hidden")),className:a.includes(e.id)?"fade-in":"",style:{animationDelay:.1*t+"s",transform:a.includes(e.id)?"translateY(0)":"translateY(20px)",opacity:a.includes(e.id)?1:0,transition:"transform 0.5s ease, opacity 0.5s ease"},children:[(0,br.jsxs)(hm,{children:[(0,br.jsx)(mm,{children:e.icon}),(0,br.jsxs)(gm,{children:[(0,br.jsx)(vm,{children:e.title}),(0,br.jsx)(ym,{children:e.subtitle})]})]}),(0,br.jsx)(bm,{children:e.description}),(0,br.jsx)(xm,{children:e.tags.map((e,t)=>(0,br.jsx)(wm,{children:e},t))})]},e.id))}),(0,br.jsx)(Sm,{isOpen:r,onClick:s,children:(0,br.jsx)(km,{isOpen:r,onClick:e=>e.stopPropagation(),children:e&&(0,br.jsxs)(br.Fragment,{children:[(0,br.jsx)(Em,{onClick:s,children:"\xd7"}),(0,br.jsx)(Cm,{children:e.title}),(0,br.jsxs)(_m,{children:[(0,br.jsx)(Nm,{children:"Research Objective"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.objective})]}),(0,br.jsxs)(_m,{children:[(0,br.jsx)(Nm,{children:"Methodology"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.methodology})]}),(0,br.jsxs)(_m,{children:[(0,br.jsx)(Nm,{children:"Key Results"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.results})]}),(0,br.jsxs)(_m,{children:[(0,br.jsx)(Nm,{children:"Applications"}),(0,br.jsx)("p",{style:{lineHeight:"1.6",opacity:"0.8"},children:e.details.applications})]}),e.details.publications&&(0,br.jsxs)(_m,{children:[(0,br.jsx)(Nm,{children:"Publications"}),(0,br.jsx)(jm,{children:e.details.publications.map((e,t)=>(0,br.jsxs)(Mm,{children:[(0,br.jsx)(Pm,{children:e.title}),(0,br.jsxs)(Tm,{children:[e.journal," (",e.year,")"]}),(0,br.jsxs)(Tm,{children:["Authors: ",e.authors]})]},t))})]}),(0,br.jsx)(xm,{children:e.tags.map((e,t)=>(0,br.jsx)(wm,{children:e},t))})]})})})]})]})},Om=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
`,Im=vr.div`
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
`,Am=vr.div`
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
`,Dm=vr.h1`
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
`,Lm=vr.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`,$m=vr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Fm=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,Bm=vr.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,Hm=vr.h2`
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
`,Vm=vr.div`
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
`,Um=vr.div`
  font-size: 2rem;
  margin-right: 1.5rem;
  color: var(--color-accent-gold);
`,Wm=vr.div`
  flex: 1;
`,Ym=vr.div`
  color: var(--color-accent-gold);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
`,Km=vr.div`
  opacity: 0.8;
  line-height: 1.4;
`,Xm=vr.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`,qm=vr.a`
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
`,Gm=vr.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Zm=vr.div`
  display: flex;
  flex-direction: column;
`,Qm=vr.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-accent-gold);
  font-family: var(--font-mono);
`,Jm=vr.input`
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
`,eg=vr.textarea`
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
`,tg=vr.button`
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
`,ng=vr.div`
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 5px;
  padding: 1rem;
  color: #4caf50;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--font-mono);
`,rg=vr.div`
  background-color: rgba(244, 67, 54, 0.1);
  border: 1px solid rgba(244, 67, 54, 0.3);
  border-radius: 5px;
  padding: 1rem;
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--font-mono);
`,og=vr.div`
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
`,ag=vr.div`
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
`,ig=vr.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(10, 10, 10, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
`,lg=vr.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`,sg=vr.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
`,cg=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ug=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,dg=vr.div`
  display: flex;
  gap: 0.5rem;
`,fg=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,pg=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,hg=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,mg=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,gg=vr.span`
  color: var(--color-text);
`,vg=vr.div`
  display: flex;
  align-items: center;
`,yg=vr.div`
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
`;const bg=function(){const[e,n]=(0,t.useState)({name:"",email:"",subject:"",message:""}),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)([]),[d,f]=(0,t.useState)(""),[p,h]=(0,t.useState)(0),[m,g]=(0,t.useState)(0),v=[{prompt:"$",text:"ssh sherman@physics-lab.hk"},{prompt:">",text:"Password: ********"},{prompt:">",text:"Welcome to Sherman Wong's Research Server"},{prompt:"$",text:"cat contact_info.txt"},{prompt:">",text:"Email: available upon request"},{prompt:">",text:"Location: Hong Kong Polytechnic University"},{prompt:">",text:"Department: Applied Physics"},{prompt:"$",text:'echo "Feel free to reach out for research collaborations!"'}];(0,t.useEffect)(()=>{if(p<v.length){const e=v[p];if(m<e.text.length){const t=setTimeout(()=>{f(t=>t+e.text[m]),g(m+1)},50*Math.random()+30);return()=>clearTimeout(t)}{const t=setTimeout(()=>{u([...c,{prompt:e.prompt,text:e.text}]),f(""),g(0),h(p+1)},500);return()=>clearTimeout(t)}}},[p,m,c]);const y=t=>{n({...e,[t.target.name]:t.target.value})};return(0,br.jsxs)(Om,{children:[(0,br.jsx)(Im,{}),(0,br.jsx)(Am,{}),(0,br.jsxs)("div",{className:"container",children:[(0,br.jsx)(Dm,{className:"glitch","data-text":"CONTACT",children:"CONTACT"}),(0,br.jsx)(Lm,{children:"Interested in my research or potential collaborations? Feel free to reach out using the form below or through any of the provided contact methods."}),(0,br.jsxs)($m,{children:[(0,br.jsxs)(Fm,{children:[(0,br.jsx)(Hm,{children:"Contact Information"}),[{icon:"\ud83c\udf93",label:"Institution",value:"The Hong Kong Polytechnic University\nDepartment of Applied Physics"},{icon:"\ud83c\udf0d",label:"Location",value:"Hong Kong SAR"},{icon:"\ud83d\udce7",label:"Email",value:"Available upon request\n(Please use contact form)"},{icon:"\ud83d\udd2c",label:"Research Areas",value:"Semiconductor Physics\nQuantum Mechanics\nDevice Modeling"}].map((e,t)=>(0,br.jsxs)(Vm,{className:"fade-in",style:{animationDelay:.1*t+"s"},children:[(0,br.jsx)(Um,{children:e.icon}),(0,br.jsxs)(Wm,{children:[(0,br.jsx)(Ym,{children:e.label}),(0,br.jsx)(Km,{children:e.value.split("\n").map((e,t)=>(0,br.jsx)("div",{children:e},t))})]})]},t)),(0,br.jsxs)(og,{children:[(0,br.jsx)(ag,{children:"\ud83d\udccd"}),(0,br.jsx)(ig,{children:"Hong Kong Polytechnic University"})]}),(0,br.jsxs)(Xm,{children:[(0,br.jsx)(qm,{href:"#",title:"LinkedIn",children:"\ud83d\udcbc"}),(0,br.jsx)(qm,{href:"#",title:"ResearchGate",children:"\ud83d\udd2c"}),(0,br.jsx)(qm,{href:"#",title:"GitHub",children:"\ud83d\udcbb"}),(0,br.jsx)(qm,{href:"#",title:"Google Scholar",children:"\ud83c\udf93"})]})]}),(0,br.jsxs)(Bm,{children:[(0,br.jsx)(Hm,{children:"Send a Message"}),(0,br.jsxs)(Gm,{onSubmit:async e=>{e.preventDefault(),o(!0);try{await new Promise(e=>setTimeout(e,1500)),i(!0),n({name:"",email:"",subject:"",message:""}),setTimeout(()=>{i(!1)},5e3)}catch(t){s(!0),setTimeout(()=>{s(!1)},5e3)}finally{o(!1)}},children:[(0,br.jsxs)(Zm,{children:[(0,br.jsx)(Qm,{htmlFor:"name",children:"Name *"}),(0,br.jsx)(Jm,{type:"text",id:"name",name:"name",value:e.name,onChange:y,placeholder:"Your full name",required:!0})]}),(0,br.jsxs)(Zm,{children:[(0,br.jsx)(Qm,{htmlFor:"email",children:"Email *"}),(0,br.jsx)(Jm,{type:"email",id:"email",name:"email",value:e.email,onChange:y,placeholder:"your.email@example.com",required:!0})]}),(0,br.jsxs)(Zm,{children:[(0,br.jsx)(Qm,{htmlFor:"subject",children:"Subject *"}),(0,br.jsx)(Jm,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:y,placeholder:"Research collaboration, questions, etc.",required:!0})]}),(0,br.jsxs)(Zm,{children:[(0,br.jsx)(Qm,{htmlFor:"message",children:"Message *"}),(0,br.jsx)(eg,{id:"message",name:"message",value:e.message,onChange:y,placeholder:"Please describe your inquiry, research interests, or collaboration ideas...",required:!0})]}),(0,br.jsx)(tg,{type:"submit",disabled:r,children:r?"Sending...":"Send Message"}),a&&(0,br.jsx)(ng,{children:"\u2705 Thank you for your message! I'll get back to you soon."}),l&&(0,br.jsx)(rg,{children:"\u274c There was an error sending your message. Please try again."})]})]})]}),(0,br.jsxs)(lg,{children:[(0,br.jsx)(Hm,{children:"Terminal"}),(0,br.jsxs)(sg,{children:[(0,br.jsxs)(cg,{children:[(0,br.jsx)(ug,{children:"sherman@physics-lab:~"}),(0,br.jsxs)(dg,{children:[(0,br.jsx)(fg,{color:"var(--color-accent-red)"}),(0,br.jsx)(fg,{color:"var(--color-accent-gold)"}),(0,br.jsx)(fg,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(pg,{children:[c.map((e,t)=>(0,br.jsxs)(hg,{children:[(0,br.jsx)(mg,{children:e.prompt}),(0,br.jsx)(gg,{children:e.text})]},t)),p<v.length&&(0,br.jsxs)(vg,{children:[(0,br.jsx)(mg,{children:v[p].prompt}),(0,br.jsx)(gg,{children:d}),(0,br.jsx)(yg,{})]})]})]})]})]})]})},xg=vr.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,wg=vr.div`
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
`,Sg=vr.h1`
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
`,kg=vr.h2`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  color: var(--color-accent-gold);
`,Eg=vr.p`
  max-width: 600px;
  margin: 0 auto 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
  line-height: 1.6;
`,Cg=vr(_e)`
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
`,_g=vr.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 3rem auto 0;
`,Ng=vr.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,jg=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`,Mg=vr.div`
  display: flex;
  gap: 0.5rem;
`,Pg=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,Tg=vr.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`,Rg=vr.div`
  margin-bottom: 0.5rem;
  display: flex;
`,zg=vr.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`,Og=vr.span`
  color: var(--color-text);
`,Ig=vr.div`
  display: flex;
  align-items: center;
`,Ag=vr.div`
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
`;const Dg=function(){const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(""),[a,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(0),c=[{prompt:"$",text:"locate page"},{prompt:">",text:"Error: Page not found (404)"},{prompt:"$",text:"run diagnostics"},{prompt:">",text:"The requested URL does not exist on this server."},{prompt:"$",text:"suggest_action"},{prompt:">",text:"Recommended action: Return to homepage"},{prompt:"$",text:"cd /"}];return(0,t.useEffect)(()=>{if(a<c.length){const t=c[a];if(l<t.text.length){const e=setTimeout(()=>{o(e=>e+t.text[l]),s(l+1)},50*Math.random()+30);return()=>clearTimeout(e)}{const r=setTimeout(()=>{n([...e,{prompt:t.prompt,text:t.text}]),o(""),s(0),i(a+1)},500);return()=>clearTimeout(r)}}},[a,l,e]),(0,br.jsxs)(xg,{children:[(0,br.jsx)(wg,{}),(0,br.jsx)(Sg,{"data-text":"404",children:"404"}),(0,br.jsx)(kg,{children:"PAGE NOT FOUND"}),(0,br.jsx)(Eg,{children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL or return to the homepage."}),(0,br.jsx)(Cg,{to:"/",children:"Return to Homepage"}),(0,br.jsxs)(_g,{children:[(0,br.jsxs)(Ng,{children:[(0,br.jsx)(jg,{children:"error-diagnostics:~"}),(0,br.jsxs)(Mg,{children:[(0,br.jsx)(Pg,{color:"var(--color-accent-red)"}),(0,br.jsx)(Pg,{color:"var(--color-accent-gold)"}),(0,br.jsx)(Pg,{color:"var(--color-text)"})]})]}),(0,br.jsxs)(Tg,{children:[e.map((e,t)=>(0,br.jsxs)(Rg,{children:[(0,br.jsx)(zg,{children:e.prompt}),(0,br.jsx)(Og,{children:e.text})]},t)),a<c.length&&(0,br.jsxs)(Ig,{children:[(0,br.jsx)(zg,{children:c[a].prompt}),(0,br.jsx)(Og,{children:r}),(0,br.jsx)(Ag,{})]})]})]})]})},Lg=vr.div`
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
`,$g=vr.div`
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
`,Fg=vr.div`
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
`,Bg=vr.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  margin-top: 1rem;
  color: var(--color-text);
  opacity: 0.7;
`,Hg=vr.div`
  position: absolute;
  bottom: 2rem;
  font-family: var(--font-mono);
  font-style: italic;
  color: var(--color-accent-gold);
  opacity: 0.7;
  text-align: center;
  max-width: 80%;
`,Vg=()=>{const[e,n]=(0,t.useState)(0),[r,o]=(0,t.useState)("Initializing..."),a=["01010111 01100001 01101011 01101001 01101110 01100111...","DECRYPTING QUANTUM ENTANGLEMENTS...","INITIALIZING SCHR\xd6DINGER PROTOCOLS...","LOADING PARALLEL UNIVERSES... 42%","CALIBRATING HEISENBERG COMPENSATORS...","BOOTSTRAPPING REALITY.EXE...","\u03c8 = \u03a3 \u03b1\u2099|n\u27e9 ... SUPERPOSITION LOADING..."],[i]=(0,t.useState)(a[Math.floor(Math.random()*a.length)]);return(0,t.useEffect)(()=>{const e=["Initializing...","Loading quantum states...","Calculating wave functions...","Simulating electron transport...","Optimizing circuit parameters...","Calibrating MOSFET models...","Ready!"];let t=0;const r=setInterval(()=>{if(t>=100)return void clearInterval(r);const a=Math.floor(10*Math.random())+1;t=Math.min(t+a,100),n(t);const i=Math.floor(t/100*(e.length-1));o(e[i])},150);return()=>clearInterval(r)},[]),(0,br.jsxs)(Lg,{children:[(0,br.jsx)($g,{className:"glitch","data-text":"SHERMAN WONG",children:"SHERMAN WONG"}),(0,br.jsx)(Fg,{progress:e}),(0,br.jsx)(Bg,{children:r}),(0,br.jsx)(Hg,{children:i})]})},Ug=vr.div`
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
`,Wg=vr.button`
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
`,Yg=vr.canvas`
  border: 2px solid var(--color-accent-red);
  background-color: var(--color-bg);
  max-width: 800px;
  width: 100%;
  height: 400px;
`,Kg=vr.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,Xg=vr.p`
  font-family: var(--font-mono);
  color: var(--color-text);
  margin-top: 1rem;
  text-align: center;
  max-width: 600px;
`,qg=vr.div`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.5rem;
  margin-top: 1rem;
`,Gg=e=>{let{onClose:n}=e;const r=(0,t.useRef)(null),[o,a]=(0,t.useState)(0);return(0,t.useEffect)(()=>{const e=r.current,t=e.getContext("2d");e.width=e.offsetWidth,e.height=e.offsetHeight;const n={x:50,y:e.height/2,width:60,height:30,speed:0,acceleration:.2,maxSpeed:8,deceleration:.1,color:"#FF0000"};let o=[];const i={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1};let l;window.addEventListener("keydown",e=>{i.hasOwnProperty(e.key)&&(i[e.key]=!0)}),window.addEventListener("keyup",e=>{i.hasOwnProperty(e.key)&&(i[e.key]=!1)});let s=0;const c=()=>{t.clearRect(0,0,e.width,e.height),t.fillStyle="#0A0A0A",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#FFFFFF",t.setLineDash([5,15]),t.beginPath(),t.moveTo(0,e.height/2),t.lineTo(e.width,e.height/2),t.stroke(),i.ArrowUp&&(n.y-=5),i.ArrowDown&&(n.y+=5),i.ArrowRight?n.speed=Math.min(n.speed+n.acceleration,n.maxSpeed):i.ArrowLeft?n.speed=Math.max(n.speed-n.acceleration,0):n.speed=Math.max(n.speed-n.deceleration,0),n.y=Math.max(0,Math.min(e.height-n.height,n.y)),s%100===0&&(()=>{const t=Math.random()*(e.height-200);o.push({x:e.width,y:0,width:20,height:t,passed:!1}),o.push({x:e.width,y:t+200,width:20,height:e.height-t-200,passed:!1})})(),o=o.filter(e=>(e.x-=5,!e.passed&&e.x+e.width<n.x&&(e.passed=!0,a(e=>e+1)),n.x<e.x+e.width&&n.x+n.width>e.x&&n.y<e.y+e.height&&n.y+n.height>e.y?(cancelAnimationFrame(l),!1):e.x+e.width>0)),o.forEach(e=>{t.fillStyle="#FFFFFF",t.fillRect(e.x,e.y,e.width,e.height)}),t.fillStyle=n.color,t.fillRect(n.x,n.y,n.width,n.height),t.fillStyle="#000000",t.fillRect(n.x+10,n.y-5,10,5),t.fillRect(n.x+40,n.y-5,10,5),t.fillRect(n.x+10,n.y+n.height,10,5),t.fillRect(n.x+40,n.y+n.height,10,5),t.fillStyle="#FFCC00",t.fillRect(n.x+25,n.y+10,10,10),t.fillStyle="#FFFFFF",t.font="14px monospace",t.fillText(`Speed: ${Math.floor(30*n.speed)} km/h`,20,30),s++,l=requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",()=>{}),window.removeEventListener("keyup",()=>{})}},[]),(0,br.jsxs)(Ug,{children:[(0,br.jsx)(Wg,{onClick:n,children:"\xd7"}),(0,br.jsx)(Kg,{children:"Ferrari F1 Challenge"}),(0,br.jsx)(Yg,{ref:r}),(0,br.jsxs)(qg,{children:["Score: ",o]}),(0,br.jsx)(Xg,{children:"Use arrow keys to control the Ferrari F1 car. \u2191 and \u2193 to move up and down. \u2192 to accelerate, \u2190 to decelerate. Avoid the obstacles!"})]})},Zg=yr`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Qg=yr`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`,Jg=vr.div`
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
  animation: ${e=>e.show?Zg:Qg} 0.5s forwards;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`,ev=vr.h4`
  color: ${e=>"ferrari"===e.type?"var(--color-accent-red)":"var(--color-accent-gold)"};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,tv=vr.span`
  font-size: 1.2rem;
`,nv=vr.p`
  opacity: 0.8;
  line-height: 1.5;
`,rv=vr.button`
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
`;const ov=function(){const[e,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)({ferrari:!1,konami:!1}),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)(!1);console.log("Ferrari active:",l,"Animation:",c);const d=(0,t.useMemo)(()=>[{id:"ferrari",title:"\u03a3\u2207\u2207\u2207 \u2207\u2207\u2207\u2207\u2207",icon:"\u26a1",text:"\u03a6 \u2192 \u2207\u2207\u2207\u2207\u2207\u2207 \u2207\u2207\u2207\u2207\u2207\u2207\u2207\u2207\u2207"},{id:"konami",title:"\u2207\u2207\u2207\u2207\u2207\u2207 \u2207\u2207\u2207\u2207",icon:"\u269b\ufe0f",text:"\u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192\u0392\u0391 \u2192 \u2207\u2207\u2207\u2207\u2207\u2207\u2207"},{id:"ferrari-active",title:"Quantum State: |1\u27e9",icon:"\u26a1",text:"Velocity vector engaged. \u03a6 to decouple."},{id:"ferrari-deactivated",title:"Quantum State: |0\u27e9",icon:"\u26a1",text:"System returned to ground state."}],[]);return(0,t.useEffect)(()=>{const e=e=>{if("f"===e.key||"F"===e.key){const e=!document.body.classList.contains("ferrari-cursor");s(e),u(!0),setTimeout(()=>u(!1),1e3);const t=e?"ferrari-active":"ferrari-deactivated",r=d.find(e=>e.id===t);n(r),o(!0),setTimeout(()=>{o(!1)},3e3)}};return window.addEventListener("keypress",e),()=>window.removeEventListener("keypress",e)},[d]),(0,t.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,18e5));const e=localStorage.getItem("ferrari-hint-last-shown"),t=new Date(Date.now()-2592e6);a.ferrari||e&&!(new Date(e)<t)||(n(d[0]),o(!0),localStorage.setItem("ferrari-hint-last-shown",(new Date).toISOString()),await new Promise(e=>setTimeout(e,2e3)),o(!1),await new Promise(e=>setTimeout(e,1e3))),await new Promise(e=>setTimeout(e,36e5));const r=localStorage.getItem("konami-hint-last-shown"),i=new Date(Date.now()-7776e6);a.konami||r&&!(new Date(r)<i)||(n(d[1]),o(!0),localStorage.setItem("konami-hint-last-shown",(new Date).toISOString()),await new Promise(e=>setTimeout(e,2e3)),o(!1))})()},[a,d]),e?(0,br.jsxs)(Jg,{show:r,type:e.id,children:[(0,br.jsx)(rv,{onClick:()=>{o(!1),e&&i(t=>({...t,[e.id]:!0}))},children:"\xd7"}),(0,br.jsxs)(ev,{type:e.id,children:[(0,br.jsx)(tv,{children:e.icon}),e.title]}),(0,br.jsx)(nv,{children:e.text})]}):null};const av=function(){const[e,n]=(0,t.useState)(!0),[r,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)([]);return console.log("Konami sequence length:",a.length),(0,t.useEffect)(()=>{const e=setTimeout(()=>{n(!1)},2e3),t=[38,38,40,40,37,39,37,39,66,65],r=e=>{i(n=>{const r=[...n,e.keyCode];return r.length>t.length&&r.shift(),r.join("")===t.join("")&&o(!0),r})};return window.addEventListener("keydown",r),()=>{clearTimeout(e),window.removeEventListener("keydown",r)}},[]),(0,t.useEffect)(()=>{const e=e=>{"f"!==e.key&&"F"!==e.key||document.body.classList.toggle("ferrari-cursor")};return window.addEventListener("keypress",e),()=>{window.removeEventListener("keypress",e)}},[]),e?(0,br.jsx)(Vg,{}):(0,br.jsxs)(ke,{children:[(0,br.jsx)("div",{className:"noise"}),(0,br.jsx)(jr,{}),(0,br.jsxs)(ve,{children:[(0,br.jsx)(me,{path:"/",element:(0,br.jsx)(Do,{})}),(0,br.jsx)(me,{path:"/about",element:(0,br.jsx)(ja,{})}),(0,br.jsx)(me,{path:"/mosfet",element:(0,br.jsx)(ei,{})}),(0,br.jsx)(me,{path:"/circuit",element:(0,br.jsx)(Wh,{})}),(0,br.jsx)(me,{path:"/research",element:(0,br.jsx)(zm,{})}),(0,br.jsx)(me,{path:"/contact",element:(0,br.jsx)(bg,{})}),(0,br.jsx)(me,{path:"*",element:(0,br.jsx)(Dg,{})})]}),(0,br.jsx)(Vr,{}),(0,br.jsx)(ov,{}),r&&(0,br.jsx)(Gg,{onClose:()=>o(!1)})]})};o.createRoot(document.getElementById("root")).render((0,br.jsx)(t.StrictMode,{children:(0,br.jsx)(av,{})}))})()})();
//# sourceMappingURL=main.51977a38.js.map