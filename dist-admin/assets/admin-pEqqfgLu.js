(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Ay(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Kh={exports:{}},Sa={},Gh={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function nw(){if(Mm)return De;Mm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=R&&V[R]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,J={};function H(V,z,te){this.props=V,this.context=z,this.refs=J,this.updater=te||j}H.prototype.isReactComponent={},H.prototype.setState=function(V,z){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,z,"setState")},H.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Ee(){}Ee.prototype=H.prototype;function ce(V,z,te){this.props=V,this.context=z,this.refs=J,this.updater=te||j}var me=ce.prototype=new Ee;me.constructor=ce,q(me,H.prototype),me.isPureReactComponent=!0;var Se=Array.isArray,qe=Object.prototype.hasOwnProperty,Re={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function T(V,z,te){var ke,Ne={},Ve=null,be=null;if(z!=null)for(ke in z.ref!==void 0&&(be=z.ref),z.key!==void 0&&(Ve=""+z.key),z)qe.call(z,ke)&&!D.hasOwnProperty(ke)&&(Ne[ke]=z[ke]);var je=arguments.length-2;if(je===1)Ne.children=te;else if(1<je){for(var Ke=Array(je),ut=0;ut<je;ut++)Ke[ut]=arguments[ut+2];Ne.children=Ke}if(V&&V.defaultProps)for(ke in je=V.defaultProps,je)Ne[ke]===void 0&&(Ne[ke]=je[ke]);return{$$typeof:r,type:V,key:Ve,ref:be,props:Ne,_owner:Re.current}}function S(V,z){return{$$typeof:r,type:V.type,key:z,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var z={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(te){return z[te]})}var O=/\/+/g;function A(V,z){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):z.toString(36)}function ye(V,z,te,ke,Ne){var Ve=typeof V;(Ve==="undefined"||Ve==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(Ve){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case r:case e:be=!0}}if(be)return be=V,Ne=Ne(be),V=ke===""?"."+A(be,0):ke,Se(Ne)?(te="",V!=null&&(te=V.replace(O,"$&/")+"/"),ye(Ne,z,te,"",function(ut){return ut})):Ne!=null&&(k(Ne)&&(Ne=S(Ne,te+(!Ne.key||be&&be.key===Ne.key?"":(""+Ne.key).replace(O,"$&/")+"/")+V)),z.push(Ne)),1;if(be=0,ke=ke===""?".":ke+":",Se(V))for(var je=0;je<V.length;je++){Ve=V[je];var Ke=ke+A(Ve,je);be+=ye(Ve,z,te,Ke,Ne)}else if(Ke=C(V),typeof Ke=="function")for(V=Ke.call(V),je=0;!(Ve=V.next()).done;)Ve=Ve.value,Ke=ke+A(Ve,je++),be+=ye(Ve,z,te,Ke,Ne);else if(Ve==="object")throw z=String(V),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return be}function It(V,z,te){if(V==null)return V;var ke=[],Ne=0;return ye(V,ke,"","",function(Ve){return z.call(te,Ve,Ne++)}),ke}function He(V){if(V._status===-1){var z=V._result;z=z(),z.then(function(te){(V._status===0||V._status===-1)&&(V._status=1,V._result=te)},function(te){(V._status===0||V._status===-1)&&(V._status=2,V._result=te)}),V._status===-1&&(V._status=0,V._result=z)}if(V._status===1)return V._result.default;throw V._result}var We={current:null},X={transition:null},pe={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:X,ReactCurrentOwner:Re};function ne(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:It,forEach:function(V,z,te){It(V,function(){z.apply(this,arguments)},te)},count:function(V){var z=0;return It(V,function(){z++}),z},toArray:function(V){return It(V,function(z){return z})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},De.Component=H,De.Fragment=t,De.Profiler=o,De.PureComponent=ce,De.StrictMode=s,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,De.act=ne,De.cloneElement=function(V,z,te){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ke=q({},V.props),Ne=V.key,Ve=V.ref,be=V._owner;if(z!=null){if(z.ref!==void 0&&(Ve=z.ref,be=Re.current),z.key!==void 0&&(Ne=""+z.key),V.type&&V.type.defaultProps)var je=V.type.defaultProps;for(Ke in z)qe.call(z,Ke)&&!D.hasOwnProperty(Ke)&&(ke[Ke]=z[Ke]===void 0&&je!==void 0?je[Ke]:z[Ke])}var Ke=arguments.length-2;if(Ke===1)ke.children=te;else if(1<Ke){je=Array(Ke);for(var ut=0;ut<Ke;ut++)je[ut]=arguments[ut+2];ke.children=je}return{$$typeof:r,type:V.type,key:Ne,ref:Ve,props:ke,_owner:be}},De.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},De.createElement=T,De.createFactory=function(V){var z=T.bind(null,V);return z.type=V,z},De.createRef=function(){return{current:null}},De.forwardRef=function(V){return{$$typeof:m,render:V}},De.isValidElement=k,De.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:He}},De.memo=function(V,z){return{$$typeof:_,type:V,compare:z===void 0?null:z}},De.startTransition=function(V){var z=X.transition;X.transition={};try{V()}finally{X.transition=z}},De.unstable_act=ne,De.useCallback=function(V,z){return We.current.useCallback(V,z)},De.useContext=function(V){return We.current.useContext(V)},De.useDebugValue=function(){},De.useDeferredValue=function(V){return We.current.useDeferredValue(V)},De.useEffect=function(V,z){return We.current.useEffect(V,z)},De.useId=function(){return We.current.useId()},De.useImperativeHandle=function(V,z,te){return We.current.useImperativeHandle(V,z,te)},De.useInsertionEffect=function(V,z){return We.current.useInsertionEffect(V,z)},De.useLayoutEffect=function(V,z){return We.current.useLayoutEffect(V,z)},De.useMemo=function(V,z){return We.current.useMemo(V,z)},De.useReducer=function(V,z,te){return We.current.useReducer(V,z,te)},De.useRef=function(V){return We.current.useRef(V)},De.useState=function(V){return We.current.useState(V)},De.useSyncExternalStore=function(V,z,te){return We.current.useSyncExternalStore(V,z,te)},De.useTransition=function(){return We.current.useTransition()},De.version="18.3.1",De}var Fm;function Ld(){return Fm||(Fm=1,Gh.exports=nw()),Gh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function rw(){if(Um)return Sa;Um=1;var r=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,R={},C=null,j=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(R[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)R[w]===void 0&&(R[w]=g[w]);return{$$typeof:e,type:m,key:C,ref:j,props:R,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var jm;function iw(){return jm||(jm=1,Kh.exports=rw()),Kh.exports}var Q=iw(),Be=Ld();const sw=Ay(Be);var mu={},Qh={exports:{}},sn={},Yh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function ow(){return zm||(zm=1,function(r){function e(X,pe){var ne=X.length;X.push(pe);e:for(;0<ne;){var V=ne-1>>>1,z=X[V];if(0<o(z,pe))X[V]=pe,X[ne]=z,ne=V;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var pe=X[0],ne=X.pop();if(ne!==pe){X[0]=ne;e:for(var V=0,z=X.length,te=z>>>1;V<te;){var ke=2*(V+1)-1,Ne=X[ke],Ve=ke+1,be=X[Ve];if(0>o(Ne,ne))Ve<z&&0>o(be,Ne)?(X[V]=be,X[Ve]=ne,V=Ve):(X[V]=Ne,X[ke]=ne,V=ke);else if(Ve<z&&0>o(be,ne))X[V]=be,X[Ve]=ne,V=Ve;else break e}}return pe}function o(X,pe){var ne=X.sortIndex-pe.sortIndex;return ne!==0?ne:X.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,R=null,C=3,j=!1,q=!1,J=!1,H=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(X){for(var pe=t(_);pe!==null;){if(pe.callback===null)s(_);else if(pe.startTime<=X)s(_),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(_)}}function Se(X){if(J=!1,me(X),!q)if(t(g)!==null)q=!0,He(qe);else{var pe=t(_);pe!==null&&We(Se,pe.startTime-X)}}function qe(X,pe){q=!1,J&&(J=!1,Ee(T),T=-1),j=!0;var ne=C;try{for(me(pe),R=t(g);R!==null&&(!(R.expirationTime>pe)||X&&!N());){var V=R.callback;if(typeof V=="function"){R.callback=null,C=R.priorityLevel;var z=V(R.expirationTime<=pe);pe=r.unstable_now(),typeof z=="function"?R.callback=z:R===t(g)&&s(g),me(pe)}else s(g);R=t(g)}if(R!==null)var te=!0;else{var ke=t(_);ke!==null&&We(Se,ke.startTime-pe),te=!1}return te}finally{R=null,C=ne,j=!1}}var Re=!1,D=null,T=-1,S=5,k=-1;function N(){return!(r.unstable_now()-k<S)}function O(){if(D!==null){var X=r.unstable_now();k=X;var pe=!0;try{pe=D(!0,X)}finally{pe?A():(Re=!1,D=null)}}else Re=!1}var A;if(typeof ce=="function")A=function(){ce(O)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,It=ye.port2;ye.port1.onmessage=O,A=function(){It.postMessage(null)}}else A=function(){H(O,0)};function He(X){D=X,Re||(Re=!0,A())}function We(X,pe){T=H(function(){X(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){q||j||(q=!0,He(qe))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(X){switch(C){case 1:case 2:case 3:var pe=3;break;default:pe=C}var ne=C;C=pe;try{return X()}finally{C=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,pe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=C;C=X;try{return pe()}finally{C=ne}},r.unstable_scheduleCallback=function(X,pe,ne){var V=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ne+z,X={id:w++,callback:pe,priorityLevel:X,startTime:ne,expirationTime:z,sortIndex:-1},ne>V?(X.sortIndex=ne,e(_,X),t(g)===null&&X===t(_)&&(J?(Ee(T),T=-1):J=!0,We(Se,ne-V))):(X.sortIndex=z,e(g,X),q||j||(q=!0,He(qe))),X},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(X){var pe=C;return function(){var ne=C;C=pe;try{return X.apply(this,arguments)}finally{C=ne}}}}(Xh)),Xh}var Bm;function aw(){return Bm||(Bm=1,Yh.exports=ow()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function lw(){if($m)return sn;$m=1;var r=Ld(),e=aw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function C(n){return g.call(R,n)?!0:g.call(w,n)?!1:_.test(n)?R[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function J(n,i,a,c,d,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];H[i]=new J(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(Ee,ce);H[i]=new J(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(Ee,ce);H[i]=new J(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(Ee,ce);H[i]=new J(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,i,a,c){var d=H.hasOwnProperty(i)?H[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,d,c)&&(a=null),c||d===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Se=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Re=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),It=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),X=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function z(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var te=!1;function ke(n,i){if(!n||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?z(n):""}function Ne(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function Ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Re:return"Portal";case S:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case ye:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case It:return i=n.displayName||null,i!==null?i:Ve(n.type)||"Memo";case He:i=n._payload,n=n._init;try{return Ve(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ut(n){var i=Ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _n(n){n._valueTracker||(n._valueTracker=ut(n))}function ln(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function un(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function kn(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Fr(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=je(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Vi(n,i){i=i.checked,i!=null&&me(n,"checked",i,!1)}function Oi(n,i){Vi(n,i);var a=je(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ur(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ur(n,i.type,je(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function _s(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ur(n,i,a){(i!=="number"||un(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Nn=Array.isArray;function xn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Li(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function jr(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Nn(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:je(a)}}function zr(n,i){var a=je(i.value),c=je(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function bi(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function re(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oe,Y=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function fe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function St(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function Mi(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=St(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Mo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(n,i){if(i){if(Mo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Uo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=null;function vs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Es=null,vn=null,Jn=null;function ws(n){if(n=ua(n)){if(typeof Es!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Nl(i),Es(n.stateNode,n.type,i))}}function Zn(n){vn?Jn?Jn.push(n):Jn=[n]:vn=n}function jo(){if(vn){var n=vn,i=Jn;if(Jn=vn=null,ws(n),i)for(n=0;n<i.length;n++)ws(i[n])}}function Ui(n,i){return n(i)}function zo(){}var gr=!1;function Bo(n,i,a){if(gr)return n(i,a);gr=!0;try{return Ui(n,i,a)}finally{gr=!1,(vn!==null||Jn!==null)&&(zo(),jo())}}function ht(n,i){var a=n.stateNode;if(a===null)return null;var c=Nl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ts=!1;if(m)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Ts=!1}function ji(n,i,a,c,d,p,v,I,P){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(K){this.onError(K)}}var zi=!1,Is=null,Vn=!1,$o=null,wc={onError:function(n){zi=!0,Is=n}};function Ss(n,i,a,c,d,p,v,I,P){zi=!1,Is=null,ji.apply(wc,arguments)}function tl(n,i,a,c,d,p,v,I,P){if(Ss.apply(this,arguments),zi){if(zi){var F=Is;zi=!1,Is=null}else throw Error(t(198));Vn||(Vn=!0,$o=F)}}function On(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Bi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ln(n){if(On(n)!==n)throw Error(t(188))}function nl(n){var i=n.alternate;if(!i){if(i=On(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ln(d),n;if(p===c)return Ln(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ho(n){return n=nl(n),n!==null?As(n):null}function As(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=As(n);if(i!==null)return i;n=n.sibling}return null}var Rs=e.unstable_scheduleCallback,qo=e.unstable_cancelCallback,rl=e.unstable_shouldYield,Tc=e.unstable_requestPaint,Xe=e.unstable_now,il=e.unstable_getCurrentPriorityLevel,$i=e.unstable_ImmediatePriority,Br=e.unstable_UserBlockingPriority,En=e.unstable_NormalPriority,Wo=e.unstable_LowPriority,sl=e.unstable_IdlePriority,Hi=null,cn=null;function ol(n){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Hi,n,void 0,(n.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:ll,Ko=Math.log,al=Math.LN2;function ll(n){return n>>>=0,n===0?32:31-(Ko(n)/al|0)|0}var Cs=64,Ps=4194304;function $r(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=$r(I):(p&=v,p!==0&&(c=$r(p)))}else v=a&~d,v!==0?c=$r(v):p!==0&&(c=$r(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Wt(i),d=1<<a,c|=n[a],i&=~d;return c}function Ic(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Wt(p),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Ic(I,i)):P<=i&&(n.expiredLanes|=I),p&=~I}}function hn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wi(){var n=Cs;return Cs<<=1,(Cs&4194240)===0&&(Cs=64),n}function Hr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Wt(i),n[i]=a}function Ye(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Wt(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Wr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Wt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Me=0;function Kr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ul,ks,cl,hl,dl,Go=!1,er=[],xt=null,bn=null,Mn=null,Gr=new Map,wn=new Map,tr=[],Sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(n,i){switch(n){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Gr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(i.pointerId)}}function Xt(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ua(i),i!==null&&ks(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ac(n,i,a,c,d){switch(i){case"focusin":return xt=Xt(xt,n,i,a,c,d),!0;case"dragenter":return bn=Xt(bn,n,i,a,c,d),!0;case"mouseover":return Mn=Xt(Mn,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return Gr.set(p,Xt(Gr.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,wn.set(p,Xt(wn.get(p)||null,n,i,a,c,d)),!0}return!1}function pl(n){var i=Xi(n.target);if(i!==null){var a=On(i);if(a!==null){if(i=a.tag,i===13){if(i=Bi(a),i!==null){n.blockedOn=i,dl(n.priority,function(){cl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _r(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ns(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fi=c,a.target.dispatchEvent(c),Fi=null}else return i=ua(a),i!==null&&ks(i),n.blockedOn=a,!1;i.shift()}return!0}function Ki(n,i,a){_r(n)&&a.delete(i)}function ml(){Go=!1,xt!==null&&_r(xt)&&(xt=null),bn!==null&&_r(bn)&&(bn=null),Mn!==null&&_r(Mn)&&(Mn=null),Gr.forEach(Ki),wn.forEach(Ki)}function Fn(n,i){n.blockedOn===i&&(n.blockedOn=null,Go||(Go=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ml)))}function Un(n){function i(d){return Fn(d,n)}if(0<er.length){Fn(er[0],n);for(var a=1;a<er.length;a++){var c=er[a];c.blockedOn===n&&(c.blockedOn=null)}}for(xt!==null&&Fn(xt,n),bn!==null&&Fn(bn,n),Mn!==null&&Fn(Mn,n),Gr.forEach(i),wn.forEach(i),a=0;a<tr.length;a++)c=tr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)pl(a),a.blockedOn===null&&tr.shift()}var vr=Se.ReactCurrentBatchConfig,Qr=!0;function rt(n,i,a,c){var d=Me,p=vr.transition;vr.transition=null;try{Me=1,Qo(n,i,a,c)}finally{Me=d,vr.transition=p}}function Rc(n,i,a,c){var d=Me,p=vr.transition;vr.transition=null;try{Me=4,Qo(n,i,a,c)}finally{Me=d,vr.transition=p}}function Qo(n,i,a,c){if(Qr){var d=Ns(n,i,a,c);if(d===null)Mc(n,i,c,Gi,a),fl(n,c);else if(Ac(d,n,i,a,c))c.stopPropagation();else if(fl(n,c),i&4&&-1<Sc.indexOf(n)){for(;d!==null;){var p=ua(d);if(p!==null&&ul(p),p=Ns(n,i,a,c),p===null&&Mc(n,i,c,Gi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Mc(n,i,c,null,a)}}var Gi=null;function Ns(n,i,a,c){if(Gi=null,n=vs(c),n=Xi(n),n!==null)if(i=On(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Bi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Gi=n,null}function Yo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(il()){case $i:return 1;case Br:return 4;case En:case Wo:return 16;case sl:return 536870912;default:return 16}default:return 16}}var dn=null,xs=null,Jt=null;function Xo(){if(Jt)return Jt;var n,i=xs,a=i.length,c,d="value"in dn?dn.value:dn.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[p-c];c++);return Jt=d.slice(n,1<c?1-c:void 0)}function Ds(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function nr(){return!0}function Jo(){return!1}function Dt(n){function i(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?nr:Jo,this.isPropagationStopped=Jo,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),i}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Dt(jn),rr=ne({},jn,{view:0,detail:0}),Cc=Dt(rr),Os,Er,Yr,Qi=ne({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Yr&&(Yr&&n.type==="mousemove"?(Os=n.screenX-Yr.screenX,Er=n.screenY-Yr.screenY):Er=Os=0,Yr=n),Os)},movementY:function(n){return"movementY"in n?n.movementY:Er}}),Ls=Dt(Qi),Zo=ne({},Qi,{dataTransfer:0}),gl=Dt(Zo),bs=ne({},rr,{relatedTarget:0}),Ms=Dt(bs),yl=ne({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),wr=Dt(yl),_l=ne({},jn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vl=Dt(_l),El=ne({},jn,{data:0}),ea=Dt(El),Fs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wl[n])?!!i[n]:!1}function ir(){return Tl}var l=ne({},rr,{key:function(n){if(n.key){var i=Fs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ds(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(n){return n.type==="keypress"?Ds(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ds(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Dt(l),y=ne({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Dt(y),L=ne({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),U=Dt(L),ee=ne({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qe=Dt(ee),_t=ne({},Qi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Dt(_t),At=[9,13,27,32],pt=m&&"CompositionEvent"in window,Tn=null;m&&"documentMode"in document&&(Tn=document.documentMode);var fn=m&&"TextEvent"in window&&!Tn,Yi=m&&(!pt||Tn&&8<Tn&&11>=Tn),Us=" ",xf=!1;function Df(n,i){switch(n){case"keyup":return At.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var js=!1;function Zv(n,i){switch(n){case"compositionend":return Vf(i);case"keypress":return i.which!==32?null:(xf=!0,Us);case"textInput":return n=i.data,n===Us&&xf?null:n;default:return null}}function eE(n,i){if(js)return n==="compositionend"||!pt&&Df(n,i)?(n=Xo(),Jt=xs=dn=null,js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yi&&i.locale!=="ko"?null:i.data;default:return null}}var tE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!tE[n.type]:i==="textarea"}function Lf(n,i,a,c){Zn(c),i=Cl(i,"onChange"),0<i.length&&(a=new Vs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ta=null,na=null;function nE(n){Zf(n,0)}function Il(n){var i=qs(n);if(ln(i))return n}function rE(n,i){if(n==="change")return i}var bf=!1;if(m){var Pc;if(m){var kc="oninput"in document;if(!kc){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),kc=typeof Mf.oninput=="function"}Pc=kc}else Pc=!1;bf=Pc&&(!document.documentMode||9<document.documentMode)}function Ff(){ta&&(ta.detachEvent("onpropertychange",Uf),na=ta=null)}function Uf(n){if(n.propertyName==="value"&&Il(na)){var i=[];Lf(i,na,n,vs(n)),Bo(nE,i)}}function iE(n,i,a){n==="focusin"?(Ff(),ta=i,na=a,ta.attachEvent("onpropertychange",Uf)):n==="focusout"&&Ff()}function sE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(na)}function oE(n,i){if(n==="click")return Il(i)}function aE(n,i){if(n==="input"||n==="change")return Il(i)}function lE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var zn=typeof Object.is=="function"?Object.is:lE;function ra(n,i){if(zn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!zn(n[d],i[d]))return!1}return!0}function jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zf(n,i){var a=jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function Bf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Bf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function $f(){for(var n=window,i=un();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=un(n.document)}return i}function Nc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function uE(n){var i=$f(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Bf(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=zf(a,p);var v=zf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cE=m&&"documentMode"in document&&11>=document.documentMode,zs=null,xc=null,ia=null,Dc=!1;function Hf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||zs==null||zs!==un(c)||(c=zs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=Cl(xc,"onSelect"),0<c.length&&(i=new Vs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=zs)))}function Sl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Bs={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Vc={},qf={};m&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function Al(n){if(Vc[n])return Vc[n];if(!Bs[n])return n;var i=Bs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in qf)return Vc[n]=i[a];return n}var Wf=Al("animationend"),Kf=Al("animationiteration"),Gf=Al("animationstart"),Qf=Al("transitionend"),Yf=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(n,i){Yf.set(n,i),u(i,[n])}for(var Oc=0;Oc<Xf.length;Oc++){var Lc=Xf[Oc],hE=Lc.toLowerCase(),dE=Lc[0].toUpperCase()+Lc.slice(1);Xr(hE,"on"+dE)}Xr(Wf,"onAnimationEnd"),Xr(Kf,"onAnimationIteration"),Xr(Gf,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(Qf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fE=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Jf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,tl(c,i,void 0,n),n.currentTarget=null}function Zf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;Jf(d,I,F),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,F=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;Jf(d,I,F),p=P}}}if(Vn)throw n=$o,Vn=!1,$o=null,n}function et(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var c=n+"__bubble";a.has(c)||(ep(i,n,2,!1),a.add(c))}function bc(n,i,a){var c=0;i&&(c|=4),ep(a,n,c,i)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Rl]){n[Rl]=!0,s.forEach(function(a){a!=="selectionchange"&&(fE.has(a)||bc(a,!1,n),bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Rl]||(i[Rl]=!0,bc("selectionchange",!1,i))}}function ep(n,i,a,c){switch(Yo(i)){case 1:var d=rt;break;case 4:d=Rc;break;default:d=Qo}a=d.bind(null,i,a,n),d=void 0,!Ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Mc(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Xi(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Bo(function(){var F=p,K=vs(a),G=[];e:{var W=Yf.get(n);if(W!==void 0){var ie=Vs,ue=n;switch(n){case"keypress":if(Ds(a)===0)break e;case"keydown":case"keyup":ie=f;break;case"focusin":ue="focus",ie=Ms;break;case"focusout":ue="blur",ie=Ms;break;case"beforeblur":case"afterblur":ie=Ms;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=U;break;case Wf:case Kf:case Gf:ie=wr;break;case Qf:ie=Qe;break;case"scroll":ie=Cc;break;case"wheel":ie=Fe;break;case"copy":case"cut":case"paste":ie=vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var he=(i&4)!==0,dt=!he&&n==="scroll",b=he?W!==null?W+"Capture":null:W;he=[];for(var x=F,M;x!==null;){M=x;var Z=M.stateNode;if(M.tag===5&&Z!==null&&(M=Z,b!==null&&(Z=ht(x,b),Z!=null&&he.push(aa(x,Z,M)))),dt)break;x=x.return}0<he.length&&(W=new ie(W,ue,null,a,K),G.push({event:W,listeners:he}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",W&&a!==Fi&&(ue=a.relatedTarget||a.fromElement)&&(Xi(ue)||ue[Tr]))break e;if((ie||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=F,ue=ue?Xi(ue):null,ue!==null&&(dt=On(ue),ue!==dt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=F),ie!==ue)){if(he=Ls,Z="onMouseLeave",b="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(he=E,Z="onPointerLeave",b="onPointerEnter",x="pointer"),dt=ie==null?W:qs(ie),M=ue==null?W:qs(ue),W=new he(Z,x+"leave",ie,a,K),W.target=dt,W.relatedTarget=M,Z=null,Xi(K)===F&&(he=new he(b,x+"enter",ue,a,K),he.target=M,he.relatedTarget=dt,Z=he),dt=Z,ie&&ue)t:{for(he=ie,b=ue,x=0,M=he;M;M=$s(M))x++;for(M=0,Z=b;Z;Z=$s(Z))M++;for(;0<x-M;)he=$s(he),x--;for(;0<M-x;)b=$s(b),M--;for(;x--;){if(he===b||b!==null&&he===b.alternate)break t;he=$s(he),b=$s(b)}he=null}else he=null;ie!==null&&tp(G,W,ie,he,!1),ue!==null&&dt!==null&&tp(G,dt,ue,he,!0)}}e:{if(W=F?qs(F):window,ie=W.nodeName&&W.nodeName.toLowerCase(),ie==="select"||ie==="input"&&W.type==="file")var de=rE;else if(Of(W))if(bf)de=aE;else{de=sE;var _e=iE}else(ie=W.nodeName)&&ie.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(de=oE);if(de&&(de=de(n,F))){Lf(G,de,a,K);break e}_e&&_e(n,W,F),n==="focusout"&&(_e=W._wrapperState)&&_e.controlled&&W.type==="number"&&Ur(W,"number",W.value)}switch(_e=F?qs(F):window,n){case"focusin":(Of(_e)||_e.contentEditable==="true")&&(zs=_e,xc=F,ia=null);break;case"focusout":ia=xc=zs=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Hf(G,a,K);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":Hf(G,a,K)}var ve;if(pt)e:{switch(n){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else js?Df(n,a)&&(Ae="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Yi&&a.locale!=="ko"&&(js||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&js&&(ve=Xo()):(dn=K,xs="value"in dn?dn.value:dn.textContent,js=!0)),_e=Cl(F,Ae),0<_e.length&&(Ae=new ea(Ae,n,null,a,K),G.push({event:Ae,listeners:_e}),ve?Ae.data=ve:(ve=Vf(a),ve!==null&&(Ae.data=ve)))),(ve=fn?Zv(n,a):eE(n,a))&&(F=Cl(F,"onBeforeInput"),0<F.length&&(K=new ea("onBeforeInput","beforeinput",null,a,K),G.push({event:K,listeners:F}),K.data=ve))}Zf(G,i)})}function aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Cl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ht(n,a),p!=null&&c.unshift(aa(n,p,d)),p=ht(n,i),p!=null&&c.push(aa(n,p,d))),n=n.return}return c}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tp(n,i,a,c,d){for(var p=i._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,F=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&F!==null&&(I=F,d?(P=ht(a,p),P!=null&&v.unshift(aa(a,P,I))):d||(P=ht(a,p),P!=null&&v.push(aa(a,P,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function np(n){return(typeof n=="string"?n:""+n).replace(pE,`
`).replace(mE,"")}function Pl(n,i,a){if(i=np(i),np(n)!==i&&a)throw Error(t(425))}function kl(){}var Fc=null,Uc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,gE=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,yE=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(_E)}:zc;function _E(n){setTimeout(function(){throw n})}function Bc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Un(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Un(i)}function Jr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ip(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),sr="__reactFiber$"+Hs,la="__reactProps$"+Hs,Tr="__reactContainer$"+Hs,$c="__reactEvents$"+Hs,vE="__reactListeners$"+Hs,EE="__reactHandles$"+Hs;function Xi(n){var i=n[sr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Tr]||a[sr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ip(n);n!==null;){if(a=n[sr])return a;n=ip(n)}return i}n=a,a=n.parentNode}return null}function ua(n){return n=n[sr]||n[Tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Nl(n){return n[la]||null}var Hc=[],Ws=-1;function Zr(n){return{current:n}}function tt(n){0>Ws||(n.current=Hc[Ws],Hc[Ws]=null,Ws--)}function Je(n,i){Ws++,Hc[Ws]=n.current,n.current=i}var ei={},Ft=Zr(ei),Zt=Zr(!1),Ji=ei;function Ks(n,i){var a=n.type.contextTypes;if(!a)return ei;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function en(n){return n=n.childContextTypes,n!=null}function xl(){tt(Zt),tt(Ft)}function sp(n,i,a){if(Ft.current!==ei)throw Error(t(168));Je(Ft,i),Je(Zt,a)}function op(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return ne({},a,c)}function Dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ei,Ji=Ft.current,Je(Ft,n),Je(Zt,Zt.current),!0}function ap(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=op(n,i,Ji),c.__reactInternalMemoizedMergedChildContext=n,tt(Zt),tt(Ft),Je(Ft,n)):tt(Zt),Je(Zt,a)}var Ir=null,Vl=!1,qc=!1;function lp(n){Ir===null?Ir=[n]:Ir.push(n)}function wE(n){Vl=!0,lp(n)}function ti(){if(!qc&&Ir!==null){qc=!0;var n=0,i=Me;try{var a=Ir;for(Me=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ir=null,Vl=!1}catch(d){throw Ir!==null&&(Ir=Ir.slice(n+1)),Rs($i,ti),d}finally{Me=i,qc=!1}}return null}var Gs=[],Qs=0,Ol=null,Ll=0,In=[],Sn=0,Zi=null,Sr=1,Ar="";function es(n,i){Gs[Qs++]=Ll,Gs[Qs++]=Ol,Ol=n,Ll=i}function up(n,i,a){In[Sn++]=Sr,In[Sn++]=Ar,In[Sn++]=Zi,Zi=n;var c=Sr;n=Ar;var d=32-Wt(c)-1;c&=~(1<<d),a+=1;var p=32-Wt(i)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Sr=1<<32-Wt(i)+d|a<<d|c,Ar=p+n}else Sr=1<<p|a<<d|c,Ar=n}function Wc(n){n.return!==null&&(es(n,1),up(n,1,0))}function Kc(n){for(;n===Ol;)Ol=Gs[--Qs],Gs[Qs]=null,Ll=Gs[--Qs],Gs[Qs]=null;for(;n===Zi;)Zi=In[--Sn],In[Sn]=null,Ar=In[--Sn],In[Sn]=null,Sr=In[--Sn],In[Sn]=null}var pn=null,mn=null,it=!1,Bn=null;function cp(n,i){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function hp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,pn=n,mn=Jr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,pn=n,mn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Zi!==null?{id:Sr,overflow:Ar}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,pn=n,mn=null,!0):!1;default:return!1}}function Gc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(it){var i=mn;if(i){var a=i;if(!hp(n,i)){if(Gc(n))throw Error(t(418));i=Jr(a.nextSibling);var c=pn;i&&hp(n,i)?cp(c,a):(n.flags=n.flags&-4097|2,it=!1,pn=n)}}else{if(Gc(n))throw Error(t(418));n.flags=n.flags&-4097|2,it=!1,pn=n}}}function dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pn=n}function bl(n){if(n!==pn)return!1;if(!it)return dp(n),it=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=mn)){if(Gc(n))throw fp(),Error(t(418));for(;i;)cp(n,i),i=Jr(i.nextSibling)}if(dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){mn=Jr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}mn=null}}else mn=pn?Jr(n.stateNode.nextSibling):null;return!0}function fp(){for(var n=mn;n;)n=Jr(n.nextSibling)}function Ys(){mn=pn=null,it=!1}function Yc(n){Bn===null?Bn=[n]:Bn.push(n)}var TE=Se.ReactCurrentBatchConfig;function ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function pp(n){var i=n._init;return i(n._payload)}function mp(n){function i(b,x){if(n){var M=b.deletions;M===null?(b.deletions=[x],b.flags|=16):M.push(x)}}function a(b,x){if(!n)return null;for(;x!==null;)i(b,x),x=x.sibling;return null}function c(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function d(b,x){return b=ui(b,x),b.index=0,b.sibling=null,b}function p(b,x,M){return b.index=M,n?(M=b.alternate,M!==null?(M=M.index,M<x?(b.flags|=2,x):M):(b.flags|=2,x)):(b.flags|=1048576,x)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function I(b,x,M,Z){return x===null||x.tag!==6?(x=zh(M,b.mode,Z),x.return=b,x):(x=d(x,M),x.return=b,x)}function P(b,x,M,Z){var de=M.type;return de===D?K(b,x,M.props.children,Z,M.key):x!==null&&(x.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===He&&pp(de)===x.type)?(Z=d(x,M.props),Z.ref=ca(b,x,M),Z.return=b,Z):(Z=au(M.type,M.key,M.props,null,b.mode,Z),Z.ref=ca(b,x,M),Z.return=b,Z)}function F(b,x,M,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Bh(M,b.mode,Z),x.return=b,x):(x=d(x,M.children||[]),x.return=b,x)}function K(b,x,M,Z,de){return x===null||x.tag!==7?(x=ls(M,b.mode,Z,de),x.return=b,x):(x=d(x,M),x.return=b,x)}function G(b,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zh(""+x,b.mode,M),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qe:return M=au(x.type,x.key,x.props,null,b.mode,M),M.ref=ca(b,null,x),M.return=b,M;case Re:return x=Bh(x,b.mode,M),x.return=b,x;case He:var Z=x._init;return G(b,Z(x._payload),M)}if(Nn(x)||pe(x))return x=ls(x,b.mode,M,null),x.return=b,x;Ml(b,x)}return null}function W(b,x,M,Z){var de=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return de!==null?null:I(b,x,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:return M.key===de?P(b,x,M,Z):null;case Re:return M.key===de?F(b,x,M,Z):null;case He:return de=M._init,W(b,x,de(M._payload),Z)}if(Nn(M)||pe(M))return de!==null?null:K(b,x,M,Z,null);Ml(b,M)}return null}function ie(b,x,M,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return b=b.get(M)||null,I(x,b,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case qe:return b=b.get(Z.key===null?M:Z.key)||null,P(x,b,Z,de);case Re:return b=b.get(Z.key===null?M:Z.key)||null,F(x,b,Z,de);case He:var _e=Z._init;return ie(b,x,M,_e(Z._payload),de)}if(Nn(Z)||pe(Z))return b=b.get(M)||null,K(x,b,Z,de,null);Ml(x,Z)}return null}function ue(b,x,M,Z){for(var de=null,_e=null,ve=x,Ae=x=0,Pt=null;ve!==null&&Ae<M.length;Ae++){ve.index>Ae?(Pt=ve,ve=null):Pt=ve.sibling;var $e=W(b,ve,M[Ae],Z);if($e===null){ve===null&&(ve=Pt);break}n&&ve&&$e.alternate===null&&i(b,ve),x=p($e,x,Ae),_e===null?de=$e:_e.sibling=$e,_e=$e,ve=Pt}if(Ae===M.length)return a(b,ve),it&&es(b,Ae),de;if(ve===null){for(;Ae<M.length;Ae++)ve=G(b,M[Ae],Z),ve!==null&&(x=p(ve,x,Ae),_e===null?de=ve:_e.sibling=ve,_e=ve);return it&&es(b,Ae),de}for(ve=c(b,ve);Ae<M.length;Ae++)Pt=ie(ve,b,Ae,M[Ae],Z),Pt!==null&&(n&&Pt.alternate!==null&&ve.delete(Pt.key===null?Ae:Pt.key),x=p(Pt,x,Ae),_e===null?de=Pt:_e.sibling=Pt,_e=Pt);return n&&ve.forEach(function(ci){return i(b,ci)}),it&&es(b,Ae),de}function he(b,x,M,Z){var de=pe(M);if(typeof de!="function")throw Error(t(150));if(M=de.call(M),M==null)throw Error(t(151));for(var _e=de=null,ve=x,Ae=x=0,Pt=null,$e=M.next();ve!==null&&!$e.done;Ae++,$e=M.next()){ve.index>Ae?(Pt=ve,ve=null):Pt=ve.sibling;var ci=W(b,ve,$e.value,Z);if(ci===null){ve===null&&(ve=Pt);break}n&&ve&&ci.alternate===null&&i(b,ve),x=p(ci,x,Ae),_e===null?de=ci:_e.sibling=ci,_e=ci,ve=Pt}if($e.done)return a(b,ve),it&&es(b,Ae),de;if(ve===null){for(;!$e.done;Ae++,$e=M.next())$e=G(b,$e.value,Z),$e!==null&&(x=p($e,x,Ae),_e===null?de=$e:_e.sibling=$e,_e=$e);return it&&es(b,Ae),de}for(ve=c(b,ve);!$e.done;Ae++,$e=M.next())$e=ie(ve,b,Ae,$e.value,Z),$e!==null&&(n&&$e.alternate!==null&&ve.delete($e.key===null?Ae:$e.key),x=p($e,x,Ae),_e===null?de=$e:_e.sibling=$e,_e=$e);return n&&ve.forEach(function(tw){return i(b,tw)}),it&&es(b,Ae),de}function dt(b,x,M,Z){if(typeof M=="object"&&M!==null&&M.type===D&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:e:{for(var de=M.key,_e=x;_e!==null;){if(_e.key===de){if(de=M.type,de===D){if(_e.tag===7){a(b,_e.sibling),x=d(_e,M.props.children),x.return=b,b=x;break e}}else if(_e.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===He&&pp(de)===_e.type){a(b,_e.sibling),x=d(_e,M.props),x.ref=ca(b,_e,M),x.return=b,b=x;break e}a(b,_e);break}else i(b,_e);_e=_e.sibling}M.type===D?(x=ls(M.props.children,b.mode,Z,M.key),x.return=b,b=x):(Z=au(M.type,M.key,M.props,null,b.mode,Z),Z.ref=ca(b,x,M),Z.return=b,b=Z)}return v(b);case Re:e:{for(_e=M.key;x!==null;){if(x.key===_e)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){a(b,x.sibling),x=d(x,M.children||[]),x.return=b,b=x;break e}else{a(b,x);break}else i(b,x);x=x.sibling}x=Bh(M,b.mode,Z),x.return=b,b=x}return v(b);case He:return _e=M._init,dt(b,x,_e(M._payload),Z)}if(Nn(M))return ue(b,x,M,Z);if(pe(M))return he(b,x,M,Z);Ml(b,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(a(b,x.sibling),x=d(x,M),x.return=b,b=x):(a(b,x),x=zh(M,b.mode,Z),x.return=b,b=x),v(b)):a(b,x)}return dt}var Xs=mp(!0),gp=mp(!1),Fl=Zr(null),Ul=null,Js=null,Xc=null;function Jc(){Xc=Js=Ul=null}function Zc(n){var i=Fl.current;tt(Fl),n._currentValue=i}function eh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Zs(n,i){Ul=n,Xc=Js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(tn=!0),n.firstContext=null)}function An(n){var i=n._currentValue;if(Xc!==n)if(n={context:n,memoizedValue:i,next:null},Js===null){if(Ul===null)throw Error(t(308));Js=n,Ul.dependencies={lanes:0,firstContext:n}}else Js=Js.next=n;return i}var ts=null;function th(n){ts===null?ts=[n]:ts.push(n)}function yp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,th(i)):(a.next=d.next,d.next=a),i.interleaved=a,Rr(n,c)}function Rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ni=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _p(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Cr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ri(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Rr(n,a)}return d=c.interleaved,d===null?(i.next=i,th(c)):(i.next=d.next,d.next=i),c.interleaved=i,Rr(n,a)}function jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Wr(n,a)}}function vp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zl(n,i,a,c){var d=n.updateQueue;ni=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,F=P.next;P.next=null,v===null?p=F:v.next=F,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=P))}if(p!==null){var G=d.baseState;v=0,K=F=P=null,I=p;do{var W=I.lane,ie=I.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ue=n,he=I;switch(W=i,ie=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){G=ue.call(ie,G,W);break e}G=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,W=typeof ue=="function"?ue.call(ie,G,W):ue,W==null)break e;G=ne({},G,W);break e;case 2:ni=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else ie={eventTime:ie,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=ie,P=G):K=K.next=ie,v|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(P=G),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);is|=v,n.lanes=v,n.memoizedState=G}}function Ep(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},or=Zr(ha),da=Zr(ha),fa=Zr(ha);function ns(n){if(n===ha)throw Error(t(174));return n}function rh(n,i){switch(Je(fa,i),Je(da,n),Je(or,ha),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:re(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=re(i,n)}tt(or),Je(or,i)}function eo(){tt(or),tt(da),tt(fa)}function wp(n){ns(fa.current);var i=ns(or.current),a=re(i,n.type);i!==a&&(Je(da,n),Je(or,a))}function ih(n){da.current===n&&(tt(or),tt(da))}var st=Zr(0);function Bl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var $l=Se.ReactCurrentDispatcher,ah=Se.ReactCurrentBatchConfig,rs=0,ot=null,vt=null,Rt=null,Hl=!1,pa=!1,ma=0,IE=0;function Ut(){throw Error(t(321))}function lh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!zn(n[a],i[a]))return!1;return!0}function uh(n,i,a,c,d,p){if(rs=p,ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$l.current=n===null||n.memoizedState===null?CE:PE,n=a(c,d),pa){p=0;do{if(pa=!1,ma=0,25<=p)throw Error(t(301));p+=1,Rt=vt=null,i.updateQueue=null,$l.current=kE,n=a(c,d)}while(pa)}if($l.current=Kl,i=vt!==null&&vt.next!==null,rs=0,Rt=vt=ot=null,Hl=!1,i)throw Error(t(300));return n}function ch(){var n=ma!==0;return ma=0,n}function ar(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ot.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function Rn(){if(vt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=vt.next;var i=Rt===null?ot.memoizedState:Rt.next;if(i!==null)Rt=i,vt=n;else{if(n===null)throw Error(t(310));vt=n,n={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Rt===null?ot.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function ga(n,i){return typeof i=="function"?i(n):i}function hh(n){var i=Rn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,F=p;do{var K=F.lane;if((rs&K)===K)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=G,v=c):P=P.next=G,ot.lanes|=K,is|=K}F=F.next}while(F!==null&&F!==p);P===null?v=c:P.next=I,zn(c,i.memoizedState)||(tn=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,ot.lanes|=p,is|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function dh(n){var i=Rn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);zn(p,i.memoizedState)||(tn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Tp(){}function Ip(n,i){var a=ot,c=Rn(),d=i(),p=!zn(c.memoizedState,d);if(p&&(c.memoizedState=d,tn=!0),c=c.queue,fh(Rp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,ya(9,Ap.bind(null,a,c,d,i),void 0,null),Ct===null)throw Error(t(349));(rs&30)!==0||Sp(a,i,d)}return d}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=ot.updateQueue,i===null?(i={lastEffect:null,stores:null},ot.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ap(n,i,a,c){i.value=a,i.getSnapshot=c,Cp(i)&&Pp(n)}function Rp(n,i,a){return a(function(){Cp(i)&&Pp(n)})}function Cp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!zn(n,a)}catch{return!0}}function Pp(n){var i=Rr(n,1);i!==null&&Wn(i,n,1,-1)}function kp(n){var i=ar();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},i.queue=n,n=n.dispatch=RE.bind(null,ot,n),[i.memoizedState,n]}function ya(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=ot.updateQueue,i===null?(i={lastEffect:null,stores:null},ot.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Np(){return Rn().memoizedState}function ql(n,i,a,c){var d=ar();ot.flags|=n,d.memoizedState=ya(1|i,a,void 0,c===void 0?null:c)}function Wl(n,i,a,c){var d=Rn();c=c===void 0?null:c;var p=void 0;if(vt!==null){var v=vt.memoizedState;if(p=v.destroy,c!==null&&lh(c,v.deps)){d.memoizedState=ya(i,a,p,c);return}}ot.flags|=n,d.memoizedState=ya(1|i,a,p,c)}function xp(n,i){return ql(8390656,8,n,i)}function fh(n,i){return Wl(2048,8,n,i)}function Dp(n,i){return Wl(4,2,n,i)}function Vp(n,i){return Wl(4,4,n,i)}function Op(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lp(n,i,a){return a=a!=null?a.concat([n]):null,Wl(4,4,Op.bind(null,i,n),a)}function ph(){}function bp(n,i){var a=Rn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Mp(n,i){var a=Rn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Fp(n,i,a){return(rs&21)===0?(n.baseState&&(n.baseState=!1,tn=!0),n.memoizedState=a):(zn(a,i)||(a=Wi(),ot.lanes|=a,is|=a,n.baseState=!0),i)}function SE(n,i){var a=Me;Me=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),i()}finally{Me=a,ah.transition=c}}function Up(){return Rn().memoizedState}function AE(n,i,a){var c=ai(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},jp(n))zp(i,a);else if(a=yp(n,i,a,c),a!==null){var d=Qt();Wn(a,n,c,d),Bp(a,i,c)}}function RE(n,i,a){var c=ai(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(jp(n))zp(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,zn(I,v)){var P=i.interleaved;P===null?(d.next=d,th(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=yp(n,i,d,c),a!==null&&(d=Qt(),Wn(a,n,c,d),Bp(a,i,c))}}function jp(n){var i=n.alternate;return n===ot||i!==null&&i===ot}function zp(n,i){pa=Hl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Bp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Wr(n,a)}}var Kl={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},CE={readContext:An,useCallback:function(n,i){return ar().memoizedState=[n,i===void 0?null:i],n},useContext:An,useEffect:xp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ql(4194308,4,Op.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ql(4194308,4,n,i)},useInsertionEffect:function(n,i){return ql(4,2,n,i)},useMemo:function(n,i){var a=ar();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ar();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=AE.bind(null,ot,n),[c.memoizedState,n]},useRef:function(n){var i=ar();return n={current:n},i.memoizedState=n},useState:kp,useDebugValue:ph,useDeferredValue:function(n){return ar().memoizedState=n},useTransition:function(){var n=kp(!1),i=n[0];return n=SE.bind(null,n[1]),ar().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=ot,d=ar();if(it){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Ct===null)throw Error(t(349));(rs&30)!==0||Sp(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,xp(Rp.bind(null,c,p,n),[n]),c.flags|=2048,ya(9,Ap.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=ar(),i=Ct.identifierPrefix;if(it){var a=Ar,c=Sr;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=IE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},PE={readContext:An,useCallback:bp,useContext:An,useEffect:fh,useImperativeHandle:Lp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Mp,useReducer:hh,useRef:Np,useState:function(){return hh(ga)},useDebugValue:ph,useDeferredValue:function(n){var i=Rn();return Fp(i,vt.memoizedState,n)},useTransition:function(){var n=hh(ga)[0],i=Rn().memoizedState;return[n,i]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1},kE={readContext:An,useCallback:bp,useContext:An,useEffect:fh,useImperativeHandle:Lp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Mp,useReducer:dh,useRef:Np,useState:function(){return dh(ga)},useDebugValue:ph,useDeferredValue:function(n){var i=Rn();return vt===null?i.memoizedState=n:Fp(i,vt.memoizedState,n)},useTransition:function(){var n=dh(ga)[0],i=Rn().memoizedState;return[n,i]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1};function $n(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function mh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Gl={isMounted:function(n){return(n=n._reactInternals)?On(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Qt(),d=ai(n),p=Cr(c,d);p.payload=i,a!=null&&(p.callback=a),i=ri(n,p,d),i!==null&&(Wn(i,n,d,c),jl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Qt(),d=ai(n),p=Cr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ri(n,p,d),i!==null&&(Wn(i,n,d,c),jl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Qt(),c=ai(n),d=Cr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ri(n,d,c),i!==null&&(Wn(i,n,c,a),jl(i,n,c))}};function $p(n,i,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!ra(a,c)||!ra(d,p):!0}function Hp(n,i,a){var c=!1,d=ei,p=i.contextType;return typeof p=="object"&&p!==null?p=An(p):(d=en(i)?Ji:Ft.current,c=i.contextTypes,p=(c=c!=null)?Ks(n,d):ei),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Gl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function qp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Gl.enqueueReplaceState(i,i.state,null)}function gh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=An(p):(p=en(i)?Ji:Ft.current,d.context=Ks(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(mh(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Gl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function to(n,i){try{var a="",c=i;do a+=Ne(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function yh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function _h(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var NE=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,i,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){tu||(tu=!0,Vh=c),_h(n,i)},a}function Kp(n,i,a){a=Cr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){_h(n,i),typeof c!="function"&&(si===null?si=new Set([this]):si.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Gp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new NE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=HE.bind(null,n,i,a),i.then(n,n))}function Qp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Yp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cr(-1,1),i.tag=2,ri(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var xE=Se.ReactCurrentOwner,tn=!1;function Gt(n,i,a,c){i.child=n===null?gp(i,null,a,c):Xs(i,n.child,a,c)}function Xp(n,i,a,c,d){a=a.render;var p=i.ref;return Zs(i,d),c=uh(n,i,a,c,p,d),a=ch(),n!==null&&!tn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(it&&a&&Wc(i),i.flags|=1,Gt(n,i,c,d),i.child)}function Jp(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!jh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Zp(n,i,p,c,d)):(n=au(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(v,c)&&n.ref===i.ref)return Pr(n,i,d)}return i.flags|=1,n=ui(p,c),n.ref=i.ref,n.return=i,i.child=n}function Zp(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(ra(p,c)&&n.ref===i.ref)if(tn=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(tn=!0);else return i.lanes=n.lanes,Pr(n,i,d)}return vh(n,i,a,c,d)}function em(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(ro,gn),gn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Je(ro,gn),gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Je(ro,gn),gn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Je(ro,gn),gn|=c;return Gt(n,i,d,a),i.child}function tm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vh(n,i,a,c,d){var p=en(a)?Ji:Ft.current;return p=Ks(i,p),Zs(i,d),a=uh(n,i,a,c,p,d),c=ch(),n!==null&&!tn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(it&&c&&Wc(i),i.flags|=1,Gt(n,i,a,d),i.child)}function nm(n,i,a,c,d){if(en(a)){var p=!0;Dl(i)}else p=!1;if(Zs(i,d),i.stateNode===null)Yl(n,i),Hp(i,a,c),gh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=An(F):(F=en(a)?Ji:Ft.current,F=Ks(i,F));var K=a.getDerivedStateFromProps,G=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";G||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==F)&&qp(i,v,c,F),ni=!1;var W=i.memoizedState;v.state=W,zl(i,c,v,d),P=i.memoizedState,I!==c||W!==P||Zt.current||ni?(typeof K=="function"&&(mh(i,a,K,c),P=i.memoizedState),(I=ni||$p(i,a,I,c,W,P,F))?(G||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,_p(n,i),I=i.memoizedProps,F=i.type===i.elementType?I:$n(i.type,I),v.props=F,G=i.pendingProps,W=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=An(P):(P=en(a)?Ji:Ft.current,P=Ks(i,P));var ie=a.getDerivedStateFromProps;(K=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==G||W!==P)&&qp(i,v,c,P),ni=!1,W=i.memoizedState,v.state=W,zl(i,c,v,d);var ue=i.memoizedState;I!==G||W!==ue||Zt.current||ni?(typeof ie=="function"&&(mh(i,a,ie,c),ue=i.memoizedState),(F=ni||$p(i,a,F,c,W,ue,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Eh(n,i,a,c,p,d)}function Eh(n,i,a,c,d,p){tm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&ap(i,a,!1),Pr(n,i,p);c=i.stateNode,xE.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Xs(i,n.child,null,p),i.child=Xs(i,null,I,p)):Gt(n,i,I,p),i.memoizedState=c.state,d&&ap(i,a,!0),i.child}function rm(n){var i=n.stateNode;i.pendingContext?sp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&sp(n,i.context,!1),rh(n,i.containerInfo)}function im(n,i,a,c,d){return Ys(),Yc(d),i.flags|=256,Gt(n,i,a,c),i.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function sm(n,i,a){var c=i.pendingProps,d=st.current,p=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Je(st,d&1),n===null)return Qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=lu(v,c,0,null),n=ls(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Th(a),i.memoizedState=wh,n):Ih(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return DE(n,i,v,c,I,d,a);if(p){p=c.fallback,v=i.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ui(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ui(I,p):(p=ls(p,v,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,i.memoizedState=wh,c}return p=n.child,n=p.sibling,c=ui(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ih(n,i){return i=lu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ql(n,i,a,c){return c!==null&&Yc(c),Xs(i,n.child,null,a),n=Ih(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function DE(n,i,a,c,d,p,v){if(a)return i.flags&256?(i.flags&=-257,c=yh(Error(t(422))),Ql(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=lu({mode:"visible",children:c.children},d,0,null),p=ls(p,d,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Xs(i,n.child,null,v),i.child.memoizedState=Th(v),i.memoizedState=wh,p);if((i.mode&1)===0)return Ql(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=yh(p,c,void 0),Ql(n,i,v,c)}if(I=(v&n.childLanes)!==0,tn||I){if(c=Ct,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Rr(n,d),Wn(c,n,d,-1))}return Uh(),c=yh(Error(t(421))),Ql(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=qE.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,mn=Jr(d.nextSibling),pn=i,it=!0,Bn=null,n!==null&&(In[Sn++]=Sr,In[Sn++]=Ar,In[Sn++]=Zi,Sr=n.id,Ar=n.overflow,Zi=i),i=Ih(i,c.children),i.flags|=4096,i)}function om(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eh(n.return,i,a)}function Sh(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function am(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Gt(n,i,c.children,a),c=st.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&om(n,a,i);else if(n.tag===19)om(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Je(st,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Sh(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(i,!0,a,null,p);break;case"together":Sh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ui(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ui(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function VE(n,i,a){switch(i.tag){case 3:rm(i),Ys();break;case 5:wp(i);break;case 1:en(i.type)&&Dl(i);break;case 4:rh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Je(Fl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Je(st,st.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?sm(n,i,a):(Je(st,st.current&1),n=Pr(n,i,a),n!==null?n.sibling:null);Je(st,st.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return am(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Je(st,st.current),c)break;return null;case 22:case 23:return i.lanes=0,em(n,i,a)}return Pr(n,i,a)}var lm,Ah,um,cm;lm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},um=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ns(or.current);var p=null;switch(a){case"input":d=kn(n,d),c=kn(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=Li(n,d),c=Li(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=kl)}Fo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&et("scroll",n),p||I===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},cm=function(n,i,a,c){a!==c&&(i.flags|=4)};function _a(n,i){if(!it)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function OE(n,i,a){var c=i.pendingProps;switch(Kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return en(i.type)&&xl(),jt(i),null;case 3:return c=i.stateNode,eo(),tt(Zt),tt(Ft),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bn!==null&&(bh(Bn),Bn=null))),Ah(n,i),jt(i),null;case 5:ih(i);var d=ns(fa.current);if(a=i.type,n!==null&&i.stateNode!=null)um(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jt(i),null}if(n=ns(or.current),bl(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[sr]=i,c[la]=p,n=(i.mode&1)!==0,a){case"dialog":et("cancel",c),et("close",c);break;case"iframe":case"object":case"embed":et("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)et(sa[d],c);break;case"source":et("error",c);break;case"img":case"image":case"link":et("error",c),et("load",c);break;case"details":et("toggle",c);break;case"input":Fr(c,p),et("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},et("invalid",c);break;case"textarea":jr(c,p),et("invalid",c)}Fo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Pl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Pl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&et("scroll",c)}switch(a){case"input":_n(c),_s(c,p,!0);break;case"textarea":_n(c),bi(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=kl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[sr]=i,n[la]=c,lm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Uo(a,c),a){case"dialog":et("cancel",n),et("close",n),d=c;break;case"iframe":case"object":case"embed":et("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)et(sa[d],n);d=c;break;case"source":et("error",n),d=c;break;case"img":case"image":case"link":et("error",n),et("load",n),d=c;break;case"details":et("toggle",n),d=c;break;case"input":Fr(n,c),d=kn(n,c),et("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),et("invalid",n);break;case"textarea":jr(n,c),d=Li(n,c),et("invalid",n);break;default:d=c}Fo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?Mi(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Y(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&fe(n,P):typeof P=="number"&&fe(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&et("scroll",n):P!=null&&me(n,p,P,v))}switch(a){case"input":_n(n),_s(n,c,!1);break;case"textarea":_n(n),bi(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?xn(n,!!c.multiple,p,!1):c.defaultValue!=null&&xn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jt(i),null;case 6:if(n&&i.stateNode!=null)cm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ns(fa.current),ns(or.current),bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[sr]=i,(p=c.nodeValue!==a)&&(n=pn,n!==null))switch(n.tag){case 3:Pl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[sr]=i,i.stateNode=c}return jt(i),null;case 13:if(tt(st),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(it&&mn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)fp(),Ys(),i.flags|=98560,p=!1;else if(p=bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[sr]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),p=!1}else Bn!==null&&(bh(Bn),Bn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(st.current&1)!==0?Et===0&&(Et=3):Uh())),i.updateQueue!==null&&(i.flags|=4),jt(i),null);case 4:return eo(),Ah(n,i),n===null&&oa(i.stateNode.containerInfo),jt(i),null;case 10:return Zc(i.type._context),jt(i),null;case 17:return en(i.type)&&xl(),jt(i),null;case 19:if(tt(st),p=i.memoizedState,p===null)return jt(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)_a(p,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Bl(n),v!==null){for(i.flags|=128,_a(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Je(st,st.current&1|2),i.child}n=n.sibling}p.tail!==null&&Xe()>io&&(i.flags|=128,c=!0,_a(p,!1),i.lanes=4194304)}else{if(!c)if(n=Bl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),_a(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!it)return jt(i),null}else 2*Xe()-p.renderingStartTime>io&&a!==1073741824&&(i.flags|=128,c=!0,_a(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(a=p.last,a!==null?a.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Xe(),i.sibling=null,a=st.current,Je(st,c?a&1|2:a&1),i):(jt(i),null);case 22:case 23:return Fh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(gn&1073741824)!==0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function LE(n,i){switch(Kc(i),i.tag){case 1:return en(i.type)&&xl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return eo(),tt(Zt),tt(Ft),oh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ih(i),null;case 13:if(tt(st),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return tt(st),null;case 4:return eo(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Xl=!1,zt=!1,bE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function no(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){lt(n,i,c)}else a.current=null}function Rh(n,i,a){try{a()}catch(c){lt(n,i,c)}}var hm=!1;function ME(n,i){if(Fc=Qr,n=$f(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,F=0,K=0,G=n,W=null;t:for(;;){for(var ie;G!==a||d!==0&&G.nodeType!==3||(I=v+d),G!==p||c!==0&&G.nodeType!==3||(P=v+c),G.nodeType===3&&(v+=G.nodeValue.length),(ie=G.firstChild)!==null;)W=G,G=ie;for(;;){if(G===n)break t;if(W===a&&++F===d&&(I=v),W===p&&++K===c&&(P=v),(ie=G.nextSibling)!==null)break;G=W,W=G.parentNode}G=ie}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},Qr=!1,ae=i;ae!==null;)if(i=ae,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ae=n;else for(;ae!==null;){i=ae;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,dt=ue.memoizedState,b=i.stateNode,x=b.getSnapshotBeforeUpdate(i.elementType===i.type?he:$n(i.type,he),dt);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=i.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){lt(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,ae=n;break}ae=i.return}return ue=hm,hm=!1,ue}function va(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Rh(i,a,p)}d=d.next}while(d!==c)}}function Jl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ch(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function dm(n){var i=n.alternate;i!==null&&(n.alternate=null,dm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[sr],delete i[la],delete i[$c],delete i[vE],delete i[EE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fm(n){return n.tag===5||n.tag===3||n.tag===4}function pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=kl));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,i,a),n=n.sibling;n!==null;)Ph(n,i,a),n=n.sibling}function kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,i,a),n=n.sibling;n!==null;)kh(n,i,a),n=n.sibling}var Vt=null,Hn=!1;function ii(n,i,a){for(a=a.child;a!==null;)mm(n,i,a),a=a.sibling}function mm(n,i,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:zt||no(a,i);case 6:var c=Vt,d=Hn;Vt=null,ii(n,i,a),Vt=c,Hn=d,Vt!==null&&(Hn?(n=Vt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Vt.removeChild(a.stateNode));break;case 18:Vt!==null&&(Hn?(n=Vt,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Un(n)):Bc(Vt,a.stateNode));break;case 4:c=Vt,d=Hn,Vt=a.stateNode.containerInfo,Hn=!0,ii(n,i,a),Vt=c,Hn=d;break;case 0:case 11:case 14:case 15:if(!zt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Rh(a,i,v),d=d.next}while(d!==c)}ii(n,i,a);break;case 1:if(!zt&&(no(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){lt(a,i,I)}ii(n,i,a);break;case 21:ii(n,i,a);break;case 22:a.mode&1?(zt=(c=zt)||a.memoizedState!==null,ii(n,i,a),zt=c):ii(n,i,a);break;default:ii(n,i,a)}}function gm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new bE),i.forEach(function(c){var d=WE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function qn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Vt=I.stateNode,Hn=!1;break e;case 3:Vt=I.stateNode.containerInfo,Hn=!0;break e;case 4:Vt=I.stateNode.containerInfo,Hn=!0;break e}I=I.return}if(Vt===null)throw Error(t(160));mm(p,v,d),Vt=null,Hn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){lt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ym(i,n),i=i.sibling}function ym(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qn(i,n),lr(n),c&4){try{va(3,n,n.return),Jl(3,n)}catch(he){lt(n,n.return,he)}try{va(5,n,n.return)}catch(he){lt(n,n.return,he)}}break;case 1:qn(i,n),lr(n),c&512&&a!==null&&no(a,a.return);break;case 5:if(qn(i,n),lr(n),c&512&&a!==null&&no(a,a.return),n.flags&32){var d=n.stateNode;try{fe(d,"")}catch(he){lt(n,n.return,he)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Vi(d,p),Uo(I,v);var F=Uo(I,p);for(v=0;v<P.length;v+=2){var K=P[v],G=P[v+1];K==="style"?Mi(d,G):K==="dangerouslySetInnerHTML"?Y(d,G):K==="children"?fe(d,G):me(d,K,G,F)}switch(I){case"input":Oi(d,p);break;case"textarea":zr(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ie=p.value;ie!=null?xn(d,!!p.multiple,ie,!1):W!==!!p.multiple&&(p.defaultValue!=null?xn(d,!!p.multiple,p.defaultValue,!0):xn(d,!!p.multiple,p.multiple?[]:"",!1))}d[la]=p}catch(he){lt(n,n.return,he)}}break;case 6:if(qn(i,n),lr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(he){lt(n,n.return,he)}}break;case 3:if(qn(i,n),lr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Un(i.containerInfo)}catch(he){lt(n,n.return,he)}break;case 4:qn(i,n),lr(n);break;case 13:qn(i,n),lr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Dh=Xe())),c&4&&gm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(zt=(F=zt)||K,qn(i,n),zt=F):qn(i,n),lr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(ae=n,K=n.child;K!==null;){for(G=ae=K;ae!==null;){switch(W=ae,ie=W.child,W.tag){case 0:case 11:case 14:case 15:va(4,W,W.return);break;case 1:no(W,W.return);var ue=W.stateNode;if(typeof ue.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(he){lt(c,a,he)}}break;case 5:no(W,W.return);break;case 22:if(W.memoizedState!==null){Em(G);continue}}ie!==null?(ie.return=W,ae=ie):Em(G)}K=K.sibling}e:for(K=null,G=n;;){if(G.tag===5){if(K===null){K=G;try{d=G.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=G.stateNode,P=G.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=St("display",v))}catch(he){lt(n,n.return,he)}}}else if(G.tag===6){if(K===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(he){lt(n,n.return,he)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;K===G&&(K=null),G=G.return}K===G&&(K=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:qn(i,n),lr(n),c&4&&gm(n);break;case 21:break;default:qn(i,n),lr(n)}}function lr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(fm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(fe(d,""),c.flags&=-33);var p=pm(n);kh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=pm(n);Ph(n,I,v);break;default:throw Error(t(161))}}catch(P){lt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function FE(n,i,a){ae=n,_m(n)}function _m(n,i,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Xl;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||zt;I=Xl;var F=zt;if(Xl=v,(zt=P)&&!F)for(ae=d;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?wm(d):P!==null?(P.return=v,ae=P):wm(d);for(;p!==null;)ae=p,_m(p),p=p.sibling;ae=d,Xl=I,zt=F}vm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ae=p):vm(n)}}function vm(n){for(;ae!==null;){var i=ae;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zt||Jl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!zt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:$n(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ep(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ep(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var G=K.dehydrated;G!==null&&Un(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||i.flags&512&&Ch(i)}catch(W){lt(i,i.return,W)}}if(i===n){ae=null;break}if(a=i.sibling,a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Em(n){for(;ae!==null;){var i=ae;if(i===n){ae=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ae=a;break}ae=i.return}}function wm(n){for(;ae!==null;){var i=ae;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Jl(4,i)}catch(P){lt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){lt(i,d,P)}}var p=i.return;try{Ch(i)}catch(P){lt(i,p,P)}break;case 5:var v=i.return;try{Ch(i)}catch(P){lt(i,v,P)}}}catch(P){lt(i,i.return,P)}if(i===n){ae=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ae=I;break}ae=i.return}}var UE=Math.ceil,Zl=Se.ReactCurrentDispatcher,Nh=Se.ReactCurrentOwner,Cn=Se.ReactCurrentBatchConfig,ze=0,Ct=null,mt=null,Ot=0,gn=0,ro=Zr(0),Et=0,Ea=null,is=0,eu=0,xh=0,wa=null,nn=null,Dh=0,io=1/0,kr=null,tu=!1,Vh=null,si=null,nu=!1,oi=null,ru=0,Ta=0,Oh=null,iu=-1,su=0;function Qt(){return(ze&6)!==0?Xe():iu!==-1?iu:iu=Xe()}function ai(n){return(n.mode&1)===0?1:(ze&2)!==0&&Ot!==0?Ot&-Ot:TE.transition!==null?(su===0&&(su=Wi()),su):(n=Me,n!==0||(n=window.event,n=n===void 0?16:Yo(n.type)),n)}function Wn(n,i,a,c){if(50<Ta)throw Ta=0,Oh=null,Error(t(185));qr(n,a,c),((ze&2)===0||n!==Ct)&&(n===Ct&&((ze&2)===0&&(eu|=a),Et===4&&li(n,Ot)),rn(n,c),a===1&&ze===0&&(i.mode&1)===0&&(io=Xe()+500,Vl&&ti()))}function rn(n,i){var a=n.callbackNode;yr(n,i);var c=qi(n,n===Ct?Ot:0);if(c===0)a!==null&&qo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&qo(a),i===1)n.tag===0?wE(Im.bind(null,n)):lp(Im.bind(null,n)),yE(function(){(ze&6)===0&&ti()}),a=null;else{switch(Kr(c)){case 1:a=$i;break;case 4:a=Br;break;case 16:a=En;break;case 536870912:a=sl;break;default:a=En}a=xm(a,Tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Tm(n,i){if(iu=-1,su=0,(ze&6)!==0)throw Error(t(327));var a=n.callbackNode;if(so()&&n.callbackNode!==a)return null;var c=qi(n,n===Ct?Ot:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ou(n,c);else{i=c;var d=ze;ze|=2;var p=Am();(Ct!==n||Ot!==i)&&(kr=null,io=Xe()+500,os(n,i));do try{BE();break}catch(I){Sm(n,I)}while(!0);Jc(),Zl.current=p,ze=d,mt!==null?i=0:(Ct=null,Ot=0,i=Et)}if(i!==0){if(i===2&&(d=hn(n),d!==0&&(c=d,i=Lh(n,d))),i===1)throw a=Ea,os(n,0),li(n,c),rn(n,Xe()),a;if(i===6)li(n,c);else{if(d=n.current.alternate,(c&30)===0&&!jE(d)&&(i=ou(n,c),i===2&&(p=hn(n),p!==0&&(c=p,i=Lh(n,p))),i===1))throw a=Ea,os(n,0),li(n,c),rn(n,Xe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:as(n,nn,kr);break;case 3:if(li(n,c),(c&130023424)===c&&(i=Dh+500-Xe(),10<i)){if(qi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(as.bind(null,n,nn,kr),i);break}as(n,nn,kr);break;case 4:if(li(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Wt(c);p=1<<v,v=i[v],v>d&&(d=v),c&=~p}if(c=d,c=Xe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*UE(c/1960))-c,10<c){n.timeoutHandle=zc(as.bind(null,n,nn,kr),c);break}as(n,nn,kr);break;case 5:as(n,nn,kr);break;default:throw Error(t(329))}}}return rn(n,Xe()),n.callbackNode===a?Tm.bind(null,n):null}function Lh(n,i){var a=wa;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=ou(n,i),n!==2&&(i=nn,nn=a,i!==null&&bh(i)),n}function bh(n){nn===null?nn=n:nn.push.apply(nn,n)}function jE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!zn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function li(n,i){for(i&=~xh,i&=~eu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Wt(i),c=1<<a;n[a]=-1,i&=~c}}function Im(n){if((ze&6)!==0)throw Error(t(327));so();var i=qi(n,0);if((i&1)===0)return rn(n,Xe()),null;var a=ou(n,i);if(n.tag!==0&&a===2){var c=hn(n);c!==0&&(i=c,a=Lh(n,c))}if(a===1)throw a=Ea,os(n,0),li(n,i),rn(n,Xe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,nn,kr),rn(n,Xe()),null}function Mh(n,i){var a=ze;ze|=1;try{return n(i)}finally{ze=a,ze===0&&(io=Xe()+500,Vl&&ti())}}function ss(n){oi!==null&&oi.tag===0&&(ze&6)===0&&so();var i=ze;ze|=1;var a=Cn.transition,c=Me;try{if(Cn.transition=null,Me=1,n)return n()}finally{Me=c,Cn.transition=a,ze=i,(ze&6)===0&&ti()}}function Fh(){gn=ro.current,tt(ro)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,gE(a)),mt!==null)for(a=mt.return;a!==null;){var c=a;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&xl();break;case 3:eo(),tt(Zt),tt(Ft),oh();break;case 5:ih(c);break;case 4:eo();break;case 13:tt(st);break;case 19:tt(st);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(Ct=n,mt=n=ui(n.current,null),Ot=gn=i,Et=0,Ea=null,xh=eu=is=0,nn=wa=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}ts=null}return n}function Sm(n,i){do{var a=mt;try{if(Jc(),$l.current=Kl,Hl){for(var c=ot.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(rs=0,Rt=vt=ot=null,pa=!1,ma=0,Nh.current=null,a===null||a.return===null){Et=1,Ea=i,mt=null;break}e:{var p=n,v=a.return,I=a,P=i;if(i=Ot,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,K=I,G=K.tag;if((K.mode&1)===0&&(G===0||G===11||G===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var ie=Qp(v);if(ie!==null){ie.flags&=-257,Yp(ie,v,I,p,i),ie.mode&1&&Gp(p,F,i),i=ie,P=F;var ue=i.updateQueue;if(ue===null){var he=new Set;he.add(P),i.updateQueue=he}else ue.add(P);break e}else{if((i&1)===0){Gp(p,F,i),Uh();break e}P=Error(t(426))}}else if(it&&I.mode&1){var dt=Qp(v);if(dt!==null){(dt.flags&65536)===0&&(dt.flags|=256),Yp(dt,v,I,p,i),Yc(to(P,I));break e}}p=P=to(P,I),Et!==4&&(Et=2),wa===null?wa=[p]:wa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var b=Wp(p,P,i);vp(p,b);break e;case 1:I=P;var x=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(si===null||!si.has(M)))){p.flags|=65536,i&=-i,p.lanes|=i;var Z=Kp(p,I,i);vp(p,Z);break e}}p=p.return}while(p!==null)}Cm(a)}catch(de){i=de,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function Am(){var n=Zl.current;return Zl.current=Kl,n===null?Kl:n}function Uh(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||(is&268435455)===0&&(eu&268435455)===0||li(Ct,Ot)}function ou(n,i){var a=ze;ze|=2;var c=Am();(Ct!==n||Ot!==i)&&(kr=null,os(n,i));do try{zE();break}catch(d){Sm(n,d)}while(!0);if(Jc(),ze=a,Zl.current=c,mt!==null)throw Error(t(261));return Ct=null,Ot=0,Et}function zE(){for(;mt!==null;)Rm(mt)}function BE(){for(;mt!==null&&!rl();)Rm(mt)}function Rm(n){var i=Nm(n.alternate,n,gn);n.memoizedProps=n.pendingProps,i===null?Cm(n):mt=i,Nh.current=null}function Cm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=OE(a,i,gn),a!==null){mt=a;return}}else{if(a=LE(a,i),a!==null){a.flags&=32767,mt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Et=6,mt=null;return}}if(i=i.sibling,i!==null){mt=i;return}mt=i=n}while(i!==null);Et===0&&(Et=5)}function as(n,i,a){var c=Me,d=Cn.transition;try{Cn.transition=null,Me=1,$E(n,i,a,c)}finally{Cn.transition=d,Me=c}return null}function $E(n,i,a,c){do so();while(oi!==null);if((ze&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ye(n,p),n===Ct&&(mt=Ct=null,Ot=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nu||(nu=!0,xm(En,function(){return so(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Cn.transition,Cn.transition=null;var v=Me;Me=1;var I=ze;ze|=4,Nh.current=null,ME(n,a),ym(a,n),uE(Uc),Qr=!!Fc,Uc=Fc=null,n.current=a,FE(a),Tc(),ze=I,Me=v,Cn.transition=p}else n.current=a;if(nu&&(nu=!1,oi=n,ru=d),p=n.pendingLanes,p===0&&(si=null),ol(a.stateNode),rn(n,Xe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=Vh,Vh=null,n;return(ru&1)!==0&&n.tag!==0&&so(),p=n.pendingLanes,(p&1)!==0?n===Oh?Ta++:(Ta=0,Oh=n):Ta=0,ti(),null}function so(){if(oi!==null){var n=Kr(ru),i=Cn.transition,a=Me;try{if(Cn.transition=null,Me=16>n?16:n,oi===null)var c=!1;else{if(n=oi,oi=null,ru=0,(ze&6)!==0)throw Error(t(331));var d=ze;for(ze|=4,ae=n.current;ae!==null;){var p=ae,v=p.child;if((ae.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(ae=F;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:va(8,K,p)}var G=K.child;if(G!==null)G.return=K,ae=G;else for(;ae!==null;){K=ae;var W=K.sibling,ie=K.return;if(dm(K),K===F){ae=null;break}if(W!==null){W.return=ie,ae=W;break}ae=ie}}}var ue=p.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var dt=he.sibling;he.sibling=null,he=dt}while(he!==null)}}ae=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ae=v;else e:for(;ae!==null;){if(p=ae,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:va(9,p,p.return)}var b=p.sibling;if(b!==null){b.return=p.return,ae=b;break e}ae=p.return}}var x=n.current;for(ae=x;ae!==null;){v=ae;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,ae=M;else e:for(v=x;ae!==null;){if(I=ae,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Jl(9,I)}}catch(de){lt(I,I.return,de)}if(I===v){ae=null;break e}var Z=I.sibling;if(Z!==null){Z.return=I.return,ae=Z;break e}ae=I.return}}if(ze=d,ti(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Hi,n)}catch{}c=!0}return c}finally{Me=a,Cn.transition=i}}return!1}function Pm(n,i,a){i=to(a,i),i=Wp(n,i,1),n=ri(n,i,1),i=Qt(),n!==null&&(qr(n,1,i),rn(n,i))}function lt(n,i,a){if(n.tag===3)Pm(n,n,a);else for(;i!==null;){if(i.tag===3){Pm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(si===null||!si.has(c))){n=to(a,n),n=Kp(i,n,1),i=ri(i,n,1),n=Qt(),i!==null&&(qr(i,1,n),rn(i,n));break}}i=i.return}}function HE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Qt(),n.pingedLanes|=n.suspendedLanes&a,Ct===n&&(Ot&a)===a&&(Et===4||Et===3&&(Ot&130023424)===Ot&&500>Xe()-Dh?os(n,0):xh|=a),rn(n,i)}function km(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ps,Ps<<=1,(Ps&130023424)===0&&(Ps=4194304)));var a=Qt();n=Rr(n,i),n!==null&&(qr(n,i,a),rn(n,a))}function qE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),km(n,a)}function WE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),km(n,a)}var Nm;Nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Zt.current)tn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return tn=!1,VE(n,i,a);tn=(n.flags&131072)!==0}else tn=!1,it&&(i.flags&1048576)!==0&&up(i,Ll,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yl(n,i),n=i.pendingProps;var d=Ks(i,Ft.current);Zs(i,a),d=uh(null,i,c,n,d,a);var p=ch();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,en(c)?(p=!0,Dl(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(i),d.updater=Gl,i.stateNode=d,d._reactInternals=i,gh(i,c,n,a),i=Eh(null,i,c,!0,p,a)):(i.tag=0,it&&p&&Wc(i),Gt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Yl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=GE(c),n=$n(c,n),d){case 0:i=vh(null,i,c,n,a);break e;case 1:i=nm(null,i,c,n,a);break e;case 11:i=Xp(null,i,c,n,a);break e;case 14:i=Jp(null,i,c,$n(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:$n(c,d),vh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:$n(c,d),nm(n,i,c,d,a);case 3:e:{if(rm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,_p(n,i),zl(i,c,null,a);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=to(Error(t(423)),i),i=im(n,i,c,a,d);break e}else if(c!==d){d=to(Error(t(424)),i),i=im(n,i,c,a,d);break e}else for(mn=Jr(i.stateNode.containerInfo.firstChild),pn=i,it=!0,Bn=null,a=gp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ys(),c===d){i=Pr(n,i,a);break e}Gt(n,i,c,a)}i=i.child}return i;case 5:return wp(i),n===null&&Qc(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,jc(c,d)?v=null:p!==null&&jc(c,p)&&(i.flags|=32),tm(n,i),Gt(n,i,v,a),i.child;case 6:return n===null&&Qc(i),null;case 13:return sm(n,i,a);case 4:return rh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Xs(i,null,c,a):Gt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:$n(c,d),Xp(n,i,c,d,a);case 7:return Gt(n,i,i.pendingProps,a),i.child;case 8:return Gt(n,i,i.pendingProps.children,a),i.child;case 12:return Gt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,v=d.value,Je(Fl,c._currentValue),c._currentValue=v,p!==null)if(zn(p.value,v)){if(p.children===d.children&&!Zt.current){i=Pr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Cr(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?P.next=P:(P.next=K.next,K.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),eh(p.return,a,i),I.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),eh(v,a,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Gt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Zs(i,a),d=An(d),c=c(d),i.flags|=1,Gt(n,i,c,a),i.child;case 14:return c=i.type,d=$n(c,i.pendingProps),d=$n(c.type,d),Jp(n,i,c,d,a);case 15:return Zp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:$n(c,d),Yl(n,i),i.tag=1,en(c)?(n=!0,Dl(i)):n=!1,Zs(i,a),Hp(i,c,d),gh(i,c,d,a),Eh(null,i,c,!0,n,a);case 19:return am(n,i,a);case 22:return em(n,i,a)}throw Error(t(156,i.tag))};function xm(n,i){return Rs(n,i)}function KE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,i,a,c){return new KE(n,i,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function GE(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===It)return 14}return 2}function ui(n,i){var a=n.alternate;return a===null?(a=Pn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,i,a,c,d,p){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return ls(a.children,d,p,i);case T:v=8,d|=8;break;case S:return n=Pn(12,a,i,d|2),n.elementType=S,n.lanes=p,n;case A:return n=Pn(13,a,i,d),n.elementType=A,n.lanes=p,n;case ye:return n=Pn(19,a,i,d),n.elementType=ye,n.lanes=p,n;case We:return lu(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case N:v=9;break e;case O:v=11;break e;case It:v=14;break e;case He:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Pn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function ls(n,i,a,c){return n=Pn(7,n,c,i),n.lanes=a,n}function lu(n,i,a,c){return n=Pn(22,n,c,i),n.elementType=We,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,i,a){return n=Pn(6,n,null,i),n.lanes=a,n}function Bh(n,i,a){return i=Pn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function QE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,i,a,c,d,p,v,I,P){return n=new QE(n,i,a,I,P),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Pn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(p),n}function YE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Dm(n){if(!n)return ei;n=n._reactInternals;e:{if(On(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(en(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(en(a))return op(n,a,i)}return i}function Vm(n,i,a,c,d,p,v,I,P){return n=$h(a,c,!0,n,d,p,v,I,P),n.context=Dm(null),a=n.current,c=Qt(),d=ai(a),p=Cr(c,d),p.callback=i??null,ri(a,p,d),n.current.lanes=d,qr(n,d,c),rn(n,c),n}function uu(n,i,a,c){var d=i.current,p=Qt(),v=ai(d);return a=Dm(a),i.context===null?i.context=a:i.pendingContext=a,i=Cr(p,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ri(d,i,v),n!==null&&(Wn(n,d,v,p),jl(n,d,v)),v}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Om(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hh(n,i){Om(n,i),(n=n.alternate)&&Om(n,i)}function XE(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qh(n){this._internalRoot=n}hu.prototype.render=qh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));uu(n,i,null,null)},hu.prototype.unmount=qh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){uu(null,n,null,null)}),i[Tr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var i=hl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,n),a===0&&pl(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function JE(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=cu(v);p.call(F)}}var v=Vm(i,c,n,0,null,!1,!1,"",bm);return n._reactRootContainer=v,n[Tr]=v.current,oa(n.nodeType===8?n.parentNode:n),ss(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=cu(P);I.call(F)}}var P=$h(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=P,n[Tr]=P.current,oa(n.nodeType===8?n.parentNode:n),ss(function(){uu(i,P,a,c)}),P}function fu(n,i,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=cu(v);I.call(P)}}uu(i,v,n,d)}else v=JE(a,i,n,d,c);return cu(v)}ul=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=$r(i.pendingLanes);a!==0&&(Wr(i,a|1),rn(i,Xe()),(ze&6)===0&&(io=Xe()+500,ti()))}break;case 13:ss(function(){var c=Rr(n,1);if(c!==null){var d=Qt();Wn(c,n,1,d)}}),Hh(n,1)}},ks=function(n){if(n.tag===13){var i=Rr(n,134217728);if(i!==null){var a=Qt();Wn(i,n,134217728,a)}Hh(n,134217728)}},cl=function(n){if(n.tag===13){var i=ai(n),a=Rr(n,i);if(a!==null){var c=Qt();Wn(a,n,i,c)}Hh(n,i)}},hl=function(){return Me},dl=function(n,i){var a=Me;try{return Me=n,i()}finally{Me=a}},Es=function(n,i,a){switch(i){case"input":if(Oi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Nl(c);if(!d)throw Error(t(90));ln(c),Oi(c,d)}}}break;case"textarea":zr(n,a);break;case"select":i=a.value,i!=null&&xn(n,!!a.multiple,i,!1)}},Ui=Mh,zo=ss;var ZE={usingClientEntryPoint:!1,Events:[ua,qs,Nl,Zn,jo,Mh]},Ia={findFiberByHostInstance:Xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ew={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ho(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||XE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Hi=pu.inject(ew),cn=pu}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE,sn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(i))throw Error(t(200));return YE(n,i,null,a)},sn.createRoot=function(n,i){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=Lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=$h(n,1,!1,null,null,a,!1,c,d),n[Tr]=i.current,oa(n.nodeType===8?n.parentNode:n),new qh(i)},sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ho(i),n=n===null?null:n.stateNode,n},sn.flushSync=function(n){return ss(n)},sn.hydrate=function(n,i,a){if(!du(i))throw Error(t(200));return fu(null,n,i,!0,a)},sn.hydrateRoot=function(n,i,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Vm(i,null,n,1,a??null,d,!1,p,v),n[Tr]=i.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new hu(i)},sn.render=function(n,i,a){if(!du(i))throw Error(t(200));return fu(null,n,i,!1,a)},sn.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[Tr]=null})}),!0):!1},sn.unstable_batchedUpdates=Mh,sn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,i,a,!1,c)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var Hm;function uw(){if(Hm)return Qh.exports;Hm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qh.exports=lw(),Qh.exports}var qm;function cw(){if(qm)return mu;qm=1;var r=uw();return mu.createRoot=r.createRoot,mu.hydrateRoot=r.hydrateRoot,mu}var hw=cw();const dw=Ay(hw),fw=()=>{};var Wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,j=_&63;g||(j=64,h||(C=64)),s.push(t[w],t[R],t[C],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ry(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):pw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const R=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||R==null)throw new mw;const C=u<<2|m>>4;if(s.push(C),_!==64){const j=m<<4&240|_>>2;if(s.push(j),R!==64){const q=_<<6&192|R;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class mw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gw=function(r){const e=Ry(r);return Cy.encodeByteArray(e,!0)},Du=function(r){return gw(r).replace(/\./g,"")},Py=function(r){try{return Cy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=()=>yw().__FIREBASE_DEFAULTS__,vw=()=>{if(typeof process>"u"||typeof Wm>"u")return;const r=Wm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ew=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Py(r[1]);return e&&JSON.parse(e)},Ju=()=>{try{return fw()||_w()||vw()||Ew()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ky=r=>{var e,t;return(t=(e=Ju())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},ww=r=>{const e=ky(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ny=()=>{var r;return(r=Ju())===null||r===void 0?void 0:r.config},xy=r=>{var e;return(e=Ju())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r){return r.endsWith(".cloudworkstations.dev")}async function Dy(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Du(JSON.stringify(t)),Du(JSON.stringify(h)),""].join(".")}const xa={};function Sw(){const r={prod:[],emulator:[]};for(const e of Object.keys(xa))xa[e]?r.emulator.push(e):r.prod.push(e);return r}function Aw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Km=!1;function Vy(r,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||xa[r]===e||xa[r]||Km)return;xa[r]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Sw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Km=!0,h()},C}function w(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function R(){const C=Aw(s),j=t("text"),q=document.getElementById(j)||document.createElement("span"),J=t("learnmore"),H=document.getElementById(J)||document.createElement("a"),Ee=t("preprendIcon"),ce=document.getElementById(Ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const me=C.element;m(me),w(H,J);const Se=_();g(ce,Ee),me.append(ce,q,H,Se),document.body.appendChild(me)}u?(q.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function Cw(){var r;const e=(r=Ju())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Nw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xw(){const r=qt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Dw(){return!Cw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ow(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="FirebaseError";class Mr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Lw,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?bw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Mr(o,m,s)}}function bw(r,e){return r.replace(Mw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Mw=/\{\$([^}]+)}/g;function Fw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ii(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(Gm(u)&&Gm(h)){if(!Ii(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Gm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Aa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ra(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Uw(r,e){const t=new jw(r,e);return t.subscribe.bind(t)}class jw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");zw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Jh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(r){return r&&r._delegate?r._delegate:r}class hs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Tw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hw(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$w(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $w(r){return r===us?void 0:r}function Hw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const Ww={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},Kw=Oe.INFO,Gw={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},Qw=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=Gw[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bd{constructor(e){this.name=e,this._logLevel=Kw,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ww[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const Yw=(r,e)=>e.some(t=>r instanceof t);let Qm,Ym;function Xw(){return Qm||(Qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return Ym||(Ym=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,ud=new WeakMap,Ly=new WeakMap,Zh=new WeakMap,Md=new WeakMap;function Zw(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(yi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Oy.set(t,r)}).catch(()=>{}),Md.set(e,r),e}function e0(r){if(ud.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});ud.set(r,e)}let cd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ud.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ly.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function t0(r){cd=r(cd)}function n0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ed(this),e,...t);return Ly.set(s,e.sort?e.sort():[e]),yi(s)}:Jw().includes(r)?function(...e){return r.apply(ed(this),e),yi(Oy.get(this))}:function(...e){return yi(r.apply(ed(this),e))}}function r0(r){return typeof r=="function"?n0(r):(r instanceof IDBTransaction&&e0(r),Yw(r,Xw())?new Proxy(r,cd):r)}function yi(r){if(r instanceof IDBRequest)return Zw(r);if(Zh.has(r))return Zh.get(r);const e=r0(r);return e!==r&&(Zh.set(r,e),Md.set(e,r)),e}const ed=r=>Md.get(r);function i0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=yi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(yi(h.result),g.oldVersion,g.newVersion,yi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const s0=["get","getKey","getAll","getAllKeys","count"],o0=["put","add","delete","clear"],td=new Map;function Xm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=o0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||s0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return td.set(e,u),u}t0(r=>({...r,get:(e,t,s)=>Xm(e,t)||r.get(e,t,s),has:(e,t)=>!!Xm(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(l0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function l0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Jm="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new bd("@firebase/app"),u0="@firebase/app-compat",c0="@firebase/analytics-compat",h0="@firebase/analytics",d0="@firebase/app-check-compat",f0="@firebase/app-check",p0="@firebase/auth",m0="@firebase/auth-compat",g0="@firebase/database",y0="@firebase/data-connect",_0="@firebase/database-compat",v0="@firebase/functions",E0="@firebase/functions-compat",w0="@firebase/installations",T0="@firebase/installations-compat",I0="@firebase/messaging",S0="@firebase/messaging-compat",A0="@firebase/performance",R0="@firebase/performance-compat",C0="@firebase/remote-config",P0="@firebase/remote-config-compat",k0="@firebase/storage",N0="@firebase/storage-compat",x0="@firebase/firestore",D0="@firebase/ai",V0="@firebase/firestore-compat",O0="firebase",L0="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",b0={[hd]:"fire-core",[u0]:"fire-core-compat",[h0]:"fire-analytics",[c0]:"fire-analytics-compat",[f0]:"fire-app-check",[d0]:"fire-app-check-compat",[p0]:"fire-auth",[m0]:"fire-auth-compat",[g0]:"fire-rtdb",[y0]:"fire-data-connect",[_0]:"fire-rtdb-compat",[v0]:"fire-fn",[E0]:"fire-fn-compat",[w0]:"fire-iid",[T0]:"fire-iid-compat",[I0]:"fire-fcm",[S0]:"fire-fcm-compat",[A0]:"fire-perf",[R0]:"fire-perf-compat",[C0]:"fire-rc",[P0]:"fire-rc-compat",[k0]:"fire-gcs",[N0]:"fire-gcs-compat",[x0]:"fire-fst",[V0]:"fire-fst-compat",[D0]:"fire-vertex","fire-js":"fire-js",[O0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map,M0=new Map,fd=new Map;function Zm(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function go(r){const e=r.name;if(fd.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,r);for(const t of Vu.values())Zm(t,r);for(const t of M0.values())Zm(t,r);return!0}function Fd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Kn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new qa("app","Firebase",F0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=L0;function by(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=Ny()),!t)throw _i.create("no-options");const u=Vu.get(o);if(u){if(Ii(t,u.options)&&Ii(s,u.config))return u;throw _i.create("duplicate-app",{appName:o})}const h=new qw(o);for(const g of fd.values())h.addComponent(g);const m=new U0(t,s,h);return Vu.set(o,m),m}function My(r=dd){const e=Vu.get(r);if(!e&&r===dd&&Ny())return by();if(!e)throw _i.create("no-app",{appName:r});return e}function vi(r,e,t){var s;let o=(s=b0[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(m.join(" "));return}go(new hs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebase-heartbeat-database",z0=1,Ma="firebase-heartbeat-store";let nd=null;function Fy(){return nd||(nd=i0(j0,z0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ma)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),nd}async function B0(r){try{const t=(await Fy()).transaction(Ma),s=await t.objectStore(Ma).get(Uy(r));return await t.done,s}catch(e){if(e instanceof Mr)Vr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function eg(r,e){try{const s=(await Fy()).transaction(Ma,"readwrite");await s.objectStore(Ma).put(e,Uy(r)),await s.done}catch(t){if(t instanceof Mr)Vr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function Uy(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=1024,H0=30;class q0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new K0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=tg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>H0){const h=G0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tg(),{heartbeatsToSend:s,unsentEntries:o}=W0(this._heartbeatsCache.heartbeats),u=Du(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Vr.warn(t),""}}}function tg(){return new Date().toISOString().substring(0,10)}function W0(r,e=$0){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ng(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ng(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class K0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vw()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await B0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return eg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return eg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ng(r){return Du(JSON.stringify({version:2,heartbeats:r})).length}function G0(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(r){go(new hs("platform-logger",e=>new a0(e),"PRIVATE")),go(new hs("heartbeat",e=>new q0(e),"PRIVATE")),vi(hd,Jm,r),vi(hd,Jm,"esm2017"),vi("fire-js","")}Q0("");var Y0="firebase",X0="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi(Y0,X0,"app");function Ud(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function jy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J0=jy,zy=new qa("auth","Firebase",jy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new bd("@firebase/auth");function Z0(r,...e){Ou.logLevel<=Oe.WARN&&Ou.warn(`Auth (${Co}): ${r}`,...e)}function Tu(r,...e){Ou.logLevel<=Oe.ERROR&&Ou.error(`Auth (${Co}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(r,...e){throw jd(r,...e)}function cr(r,...e){return jd(r,...e)}function By(r,e,t){const s=Object.assign(Object.assign({},J0()),{[e]:t});return new qa("auth","Firebase",s).create(e,{appName:r.name})}function Ei(r){return By(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return zy.create(r,...e)}function Te(r,e,...t){if(!r)throw jd(e,...t)}function Nr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Tu(e),new Error(e)}function Or(r,e){r||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function eT(){return rg()==="http:"||rg()==="https:"}function rg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eT()||kw()||"connection"in navigator)?navigator.onLine:!0}function nT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=Rw()||Nw()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sT=new Ka(3e4,6e4);function ms(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,t,s,o={}){return Hy(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Wa(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return Pw()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(_.credentials="include"),$y.fetch()(await qy(r,r.config.apiHost,t,m),_)})}async function Hy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},rT),e);try{const o=new aT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw gu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw gu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw By(r,w,_);Yn(r,w)}}catch(o){if(o instanceof Mr)throw o;Yn(r,"network-request-failed",{message:String(o)})}}async function Zu(r,e,t,s,o={}){const u=await Ni(r,e,t,s,o);return"mfaPendingCredential"in u&&Yn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function qy(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?zd(r.config,o):`${r.config.apiScheme}://${o}`;return iT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function oT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(cr(this.auth,"network-request-failed")),sT.get())})}}function gu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=cr(r,e,s);return o.customData._tokenResponse=t,o}function ig(r){return r!==void 0&&r.enterprise!==void 0}class lT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return oT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uT(r,e){return Ni(r,"GET","/v2/recaptchaConfig",ms(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function Lu(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(r,e=!1){const t=Nt(r),s=await t.getIdToken(e),o=Bd(s);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Da(rd(o.auth_time)),issuedAtTime:Da(rd(o.iat)),expirationTime:Da(rd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rd(r){return Number(r)*1e3}function Bd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Py(t);return o?JSON.parse(o):(Tu("Failed to decode base64 JWT payload"),null)}catch(o){return Tu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sg(r){const e=Bd(r);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Mr&&dT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function dT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Fa(r,Lu(t,{idToken:s}));Te(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Wy(u.providerUserInfo):[],m=mT(r.providerData,h),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new md(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,R)}async function pT(r){const e=Nt(r);await bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Wy(r){return r.map(e=>{var{providerId:t}=e,s=Ud(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(r,e){const t=await Hy(r,{},async()=>{const s=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await qy(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(g.credentials="include"),$y.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yT(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",ms(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await gT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ho;return s&&(Te(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Te(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(r,e){Te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new md(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hT(this,e)}reload(){return pT(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Ei(this.auth));const e=await this.getIdToken();return await Fa(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,w;const R=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,J=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Ee=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ce=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:me,emailVerified:Se,isAnonymous:qe,providerData:Re,stsTokenManager:D}=t;Te(me&&D,e,"internal-error");const T=ho.fromJSON(this.name,D);Te(typeof me=="string",e,"internal-error"),hi(R,e.name),hi(C,e.name),Te(typeof Se=="boolean",e,"internal-error"),Te(typeof qe=="boolean",e,"internal-error"),hi(j,e.name),hi(q,e.name),hi(J,e.name),hi(H,e.name),hi(Ee,e.name),hi(ce,e.name);const S=new Gn({uid:me,auth:e,email:C,emailVerified:Se,displayName:R,isAnonymous:qe,photoURL:q,phoneNumber:j,tenantId:J,stsTokenManager:T,createdAt:Ee,lastLoginAt:ce});return Re&&Array.isArray(Re)&&(S.providerData=Re.map(k=>Object.assign({},k))),H&&(S._redirectEventId=H),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new ho;o.updateFromServerResponse(t);const u=new Gn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Wy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ho;m.updateFromIdToken(s);const g=new Gn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new md(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Map;function xr(r){Or(r instanceof Function,"Expected a class definition");let e=og.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,og.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ky.type="NONE";const ag=Ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(r,e,t){return`firebase:${r}:${e}:${t}`}class fo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Iu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Iu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Gn._fromGetAccountInfoResponse(this.auth,t,e):null}return Gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new fo(xr(ag),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||xr(ag);const h=Iu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let R;if(typeof w=="string"){const C=await Lu(e,{idToken:w}).catch(()=>{});if(!C)break;R=await Gn._fromGetAccountInfoResponse(e,C,w)}else R=Gn._fromJSON(e,w);_!==u&&(m=R),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new fo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new fo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zy(e))return"Blackberry";if(e_(e))return"Webos";if(Qy(e))return"Safari";if((e.includes("chrome/")||Yy(e))&&!e.includes("edge/"))return"Chrome";if(Jy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gy(r=qt()){return/firefox\//i.test(r)}function Qy(r=qt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yy(r=qt()){return/crios\//i.test(r)}function Xy(r=qt()){return/iemobile/i.test(r)}function Jy(r=qt()){return/android/i.test(r)}function Zy(r=qt()){return/blackberry/i.test(r)}function e_(r=qt()){return/webos/i.test(r)}function $d(r=qt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _T(r=qt()){var e;return $d(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vT(){return xw()&&document.documentMode===10}function t_(r=qt()){return $d(r)||Jy(r)||e_(r)||Zy(r)||/windows phone/i.test(r)||Xy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(r,e=[]){let t;switch(r){case"Browser":t=lg(qt());break;case"Worker":t=`${lg(qt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Co}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",ms(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=6;class IT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:TT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ug(this),this.idTokenSubscription=new ug(this),this.beforeStateQueue=new ET(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(Ei(this));const t=e?Nt(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(Ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wT(this),t=new IT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Z0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Po(r){return Nt(r)}class ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uw(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AT(r){ec=r}function r_(r){return ec.loadJS(r)}function RT(){return ec.recaptchaEnterpriseScript}function CT(){return ec.gapiScript}function PT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class kT{constructor(){this.enterprise=new NT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class NT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xT="recaptcha-enterprise",i_="NO_RECAPTCHA";class DT{constructor(e){this.type=xT,this.auth=Po(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{uT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new lT(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;ig(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(i_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&ig(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=RT();g.length!==0&&(g+=m),r_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function cg(r,e,t,s=!1,o=!1){const u=new DT(r);let h;if(o)h=i_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function hg(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await cg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await cg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(r,e){const t=Fd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ii(u,e??{}))return o;Yn(o,"already-initialized")}return t.initialize({options:e})}function OT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function LT(r,e,t){const s=Po(r);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=s_(e),{host:h,port:m}=bT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(Ii(_,s.config.emulator)&&Ii(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ro(h)?(Dy(`${u}//${h}${g}`),Vy("Auth",!0)):MT()}function s_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bT(r){const e=s_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:dg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:dg(h)}}}function dg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function MT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}async function FT(r,e){return Ni(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(r,e){return Zu(r,"POST","/v1/accounts:signInWithPassword",ms(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(r,e){return Zu(r,"POST","/v1/accounts:signInWithEmailLink",ms(r,e))}async function zT(r,e){return Zu(r,"POST","/v1/accounts:signInWithEmailLink",ms(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Hd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ua(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ua(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hg(e,t,"signInWithPassword",UT);case"emailLink":return jT(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hg(e,s,"signUpPassword",FT);case"emailLink":return zT(e,{idToken:t,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(r,e){return Zu(r,"POST","/v1/accounts:signInWithIdp",ms(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="http://localhost";class ds extends Hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ud(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ds(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return po(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,po(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,po(e,t)}buildRequest(){const e={requestUri:BT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HT(r){const e=Aa(Ra(r)).link,t=e?Aa(Ra(e)).deep_link_id:null,s=Aa(Ra(r)).deep_link_id;return(s?Aa(Ra(s)).link:null)||s||t||e||r}class qd{constructor(e){var t,s,o,u,h,m;const g=Aa(Ra(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,R=$T((o=g.mode)!==null&&o!==void 0?o:null);Te(_&&w&&R,"argument-error"),this.apiKey=_,this.operation=R,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=HT(e);try{return new qd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,t){return Ua._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=qd.parseLink(t);return Te(s,"argument-error"),Ua._fromEmailAndCode(e,s.code,s.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends o_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Ga{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.GOOGLE_SIGN_IN_METHOD="google.com";fi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Ga{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Ga{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mi.credential(t,s)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Gn._fromIdTokenResponse(e,s,o),h=fg(s);return new yo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=fg(s);return new yo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function fg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Mr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Mu(e,t,s,o)}}function a_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(r,u,e,s):u})}async function qT(r,e,t=!1){const s=await Fa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return yo._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(r,e,t=!1){const{auth:s}=r;if(Kn(s.app))return Promise.reject(Ei(s));const o="reauthenticate";try{const u=await Fa(r,a_(s,o,e,r),t);Te(u.idToken,s,"internal-error");const h=Bd(u.idToken);Te(h,s,"internal-error");const{sub:m}=h;return Te(r.uid===m,s,"user-mismatch"),yo._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Yn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(r,e,t=!1){if(Kn(r.app))return Promise.reject(Ei(r));const s="signIn",o=await a_(r,s,e),u=await yo._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function KT(r,e){return l_(Po(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(r){const e=Po(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function QT(r,e,t){return Kn(r.app)?Promise.reject(Ei(r)):KT(Nt(r),ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&GT(r),s})}function YT(r,e,t,s){return Nt(r).onIdTokenChanged(e,t,s)}function XT(r,e,t){return Nt(r).beforeAuthStateChanged(e,t)}function JT(r,e,t,s){return Nt(r).onAuthStateChanged(e,t,s)}function ZT(r){return Nt(r).signOut()}const Fu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fu,"1"),this.storage.removeItem(Fu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=1e3,tI=10;class c_ extends u_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=t_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);vT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,tI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}c_.type="LOCAL";const nI=c_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends u_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}h_.type="SESSION";const d_=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new tc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await rI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=Wd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const C=R;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function sI(r){hr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function oI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function lI(){return f_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="firebaseLocalStorageDb",uI=1,Uu="firebaseLocalStorage",m_="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nc(r,e){return r.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function cI(){const r=indexedDB.deleteDatabase(p_);return new Qa(r).toPromise()}function gd(){const r=indexedDB.open(p_,uI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Uu,{keyPath:m_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Uu)?e(s):(s.close(),await cI(),e(await gd()))})})}async function pg(r,e,t){const s=nc(r,!0).put({[m_]:e,value:t});return new Qa(s).toPromise()}async function hI(r,e){const t=nc(r,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function mg(r,e){const t=nc(r,!0).delete(e);return new Qa(t).toPromise()}const dI=800,fI=3;class g_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>fI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(lI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oI(),!this.activeServiceWorker)return;this.sender=new iI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await pg(e,Fu,"1"),await mg(e,Fu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>pg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>hI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=nc(o,!1).getAll();return new Qa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g_.type="LOCAL";const pI=g_;new Ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(r,e){return e?xr(e):(Te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gI(r){return l_(r.auth,new Kd(r),r.bypassAuthState)}function yI(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),WT(t,new Kd(r),r.bypassAuthState)}async function _I(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),qT(t,new Kd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gI;case"linkViaPopup":case"linkViaRedirect":return _I;case"reauthViaPopup":case"reauthViaRedirect":return yI;default:Yn(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Ka(2e3,1e4);class co extends y_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,co.currentPopupAction&&co.currentPopupAction.cancel(),co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vI.get())};e()}}co.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="pendingRedirect",Su=new Map;class wI extends y_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const s=await TI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TI(r,e){const t=AI(e),s=SI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function II(r,e){Su.set(r._key(),e)}function SI(r){return xr(r._redirectPersistence)}function AI(r){return Iu(EI,r.config.apiKey,r.name)}async function RI(r,e,t=!1){if(Kn(r.app))return Promise.reject(Ei(r));const s=Po(r),o=mI(s,e),h=await new wI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=10*60*1e3;class PI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!__(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(cr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function __({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return __(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DI=/^https?/;async function VI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await NI(r);for(const t of e)try{if(OI(t))return}catch{}Yn(r,"unauthorized-domain")}function OI(r){const e=pd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!DI.test(t))return!1;if(xI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new Ka(3e4,6e4);function yg(){const r=hr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function bI(r){return new Promise((e,t)=>{var s,o,u;function h(){yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yg(),t(cr(r,"network-request-failed"))},timeout:LI.get()})}if(!((o=(s=hr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=hr().gapi)===null||u===void 0)&&u.load)h();else{const m=PT("iframefcb");return hr()[m]=()=>{gapi.load?h():t(cr(r,"network-request-failed"))},r_(`${CT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Au=null,e})}let Au=null;function MI(r){return Au=Au||bI(r),Au}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new Ka(5e3,15e3),UI="__/auth/iframe",jI="emulator/auth/iframe",zI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $I(r){const e=r.config;Te(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?zd(e,jI):`https://${r.config.authDomain}/${UI}`,s={apiKey:e.apiKey,appName:r.name,v:Co},o=BI.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wa(s).slice(1)}`}async function HI(r){const e=await MI(r),t=hr().gapi;return Te(t,r,"internal-error"),e.open({where:document.body,url:$I(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=cr(r,"network-request-failed"),m=hr().setTimeout(()=>{u(h)},FI.get());function g(){hr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,KI=600,GI="_blank",QI="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(r,e,t,s=WI,o=KI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},qI),{width:s.toString(),height:o.toString(),top:u,left:h}),_=qt().toLowerCase();t&&(m=Yy(_)?GI:t),Gy(_)&&(e=e||QI,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[j,q])=>`${C}${j}=${q},`,"");if(_T(_)&&m!=="_self")return XI(e||"",m),new _g(null);const R=window.open(e||"",m,w);Te(R,r,"popup-blocked");try{R.focus()}catch{}return new _g(R)}function XI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="__/auth/handler",ZI="emulator/auth/handler",eS=encodeURIComponent("fac");async function vg(r,e,t,s,o,u){Te(r.config.authDomain,r,"auth-domain-config-required"),Te(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Co,eventId:o};if(e instanceof o_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Fw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof Ga){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${eS}=${encodeURIComponent(g)}`:"";return`${tS(r)}?${Wa(m).slice(1)}${_}`}function tS({config:r}){return r.emulator?zd(r,ZI):`https://${r.authDomain}/${JI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="webStorageSupport";class nS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d_,this._completeRedirectFn=RI,this._overrideRedirectResult=II}async _openPopup(e,t,s,o){var u;Or((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await vg(e,t,s,pd(),o);return YI(e,h,Wd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await vg(e,t,s,pd(),o);return sI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Or(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await HI(e),s=new PI(e);return t.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(id,{type:id},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[id];h!==void 0&&t(!!h),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return t_()||Qy()||$d()}}const rS=nS;var Eg="@firebase/auth",wg="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oS(r){go(new hs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n_(r)},_=new ST(s,o,u,g);return OT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),go(new hs("auth-internal",e=>{const t=Po(e.getProvider("auth").getImmediate());return(s=>new iS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(Eg,wg,sS(r)),vi(Eg,wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=5*60,lS=xy("authIdTokenMaxAge")||aS;let Tg=null;const uS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>lS)return;const o=t==null?void 0:t.token;Tg!==o&&(Tg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function cS(r=My()){const e=Fd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=VT(r,{popupRedirectResolver:rS,persistence:[pI,nI,d_]}),s=xy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=uS(u.toString());XT(t,h,()=>h(t.currentUser)),YT(t,m=>h(m))}}const o=ky("auth");return o&&LT(t,`http://${o}`),t}function hS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}AT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=cr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",hS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oS("Browser");var Ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wi,v_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,T){function S(){}S.prototype=T.prototype,D.D=T.prototype,D.prototype=new S,D.prototype.constructor=D,D.C=function(k,N,O){for(var A=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)A[ye-2]=arguments[ye];return T.prototype[N].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var N=0;16>N;++N)k[N]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(N=0;16>N;++N)k[N]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=D.g[0],S=D.g[1],N=D.g[2];var O=D.g[3],A=T+(O^S&(N^O))+k[0]+3614090360&4294967295;T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[1]+3905402710&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[3]+3250441966&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(O^S&(N^O))+k[4]+4118548399&4294967295,T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[5]+1200080426&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[7]+4249261313&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(O^S&(N^O))+k[8]+1770035416&4294967295,T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[9]+2336552879&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[11]+2304563134&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(O^S&(N^O))+k[12]+1804603682&4294967295,T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[13]+4254626195&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[15]+1236535329&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(N^O&(S^N))+k[1]+4129170786&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[6]+3225465664&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[0]+3921069994&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(N^O&(S^N))+k[5]+3593408605&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[10]+38016083&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[4]+3889429448&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(N^O&(S^N))+k[9]+568446438&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[14]+3275163606&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[8]+1163531501&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(N^O&(S^N))+k[13]+2850285829&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[2]+4243563512&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[12]+2368359562&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(S^N^O)+k[5]+4294588738&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[8]+2272392833&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[14]+4259657740&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(S^N^O)+k[1]+2763975236&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[4]+1272893353&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[10]+3200236656&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(S^N^O)+k[13]+681279174&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[0]+3936430074&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[6]+76029189&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(S^N^O)+k[9]+3654602809&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[12]+3873151461&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[2]+3299628645&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(N^(S|~O))+k[0]+4096336452&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[7]+1126891415&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[5]+4237533241&4294967295,S=N+(A<<21&4294967295|A>>>11),A=T+(N^(S|~O))+k[12]+1700485571&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[3]+2399980690&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[1]+2240044497&4294967295,S=N+(A<<21&4294967295|A>>>11),A=T+(N^(S|~O))+k[8]+1873313359&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[15]+4264355552&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[13]+1309151649&4294967295,S=N+(A<<21&4294967295|A>>>11),A=T+(N^(S|~O))+k[4]+4149444226&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[11]+3174756917&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+T&4294967295,D.g[1]=D.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+N&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.u=function(D,T){T===void 0&&(T=D.length);for(var S=T-this.blockSize,k=this.B,N=this.h,O=0;O<T;){if(N==0)for(;O<=S;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<T;)if(k[N++]=D.charCodeAt(O++),N==this.blockSize){o(this,k),N=0;break}}else for(;O<T;)if(k[N++]=D[O++],N==this.blockSize){o(this,k),N=0;break}}this.h=N,this.o+=T},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var T=1;T<D.length-8;++T)D[T]=0;var S=8*this.o;for(T=D.length-8;T<D.length;++T)D[T]=S&255,S/=256;for(this.u(D),D=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)D[S++]=this.g[T]>>>k&255;return D};function u(D,T){var S=m;return Object.prototype.hasOwnProperty.call(S,D)?S[D]:S[D]=T(D)}function h(D,T){this.h=T;for(var S=[],k=!0,N=D.length-1;0<=N;N--){var O=D[N]|0;k&&O==T||(S[N]=O,k=!1)}this.g=S}var m={};function g(D){return-128<=D&&128>D?u(D,function(T){return new h([T|0],0>T?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return R;if(0>D)return H(_(-D));for(var T=[],S=1,k=0;D>=S;k++)T[k]=D/S|0,S*=4294967296;return new h(T,0)}function w(D,T){if(D.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D.charAt(0)=="-")return H(w(D.substring(1),T));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=_(Math.pow(T,8)),k=R,N=0;N<D.length;N+=8){var O=Math.min(8,D.length-N),A=parseInt(D.substring(N,N+O),T);8>O?(O=_(Math.pow(T,O)),k=k.j(O).add(_(A))):(k=k.j(S),k=k.add(_(A)))}return k}var R=g(0),C=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(J(this))return-H(this).m();for(var D=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);D+=(0<=k?k:4294967296+k)*T,T*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(q(this))return"0";if(J(this))return"-"+H(this).toString(D);for(var T=_(Math.pow(D,6)),S=this,k="";;){var N=Se(S,T).g;S=Ee(S,N.j(T));var O=((0<S.g.length?S.g[0]:S.h)>>>0).toString(D);if(S=N,q(S))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function q(D){if(D.h!=0)return!1;for(var T=0;T<D.g.length;T++)if(D.g[T]!=0)return!1;return!0}function J(D){return D.h==-1}r.l=function(D){return D=Ee(this,D),J(D)?-1:q(D)?0:1};function H(D){for(var T=D.g.length,S=[],k=0;k<T;k++)S[k]=~D.g[k];return new h(S,~D.h).add(C)}r.abs=function(){return J(this)?H(this):this},r.add=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0,N=0;N<=T;N++){var O=k+(this.i(N)&65535)+(D.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(D.i(N)>>>16);k=A>>>16,O&=65535,A&=65535,S[N]=A<<16|O}return new h(S,S[S.length-1]&-2147483648?-1:0)};function Ee(D,T){return D.add(H(T))}r.j=function(D){if(q(this)||q(D))return R;if(J(this))return J(D)?H(this).j(H(D)):H(H(this).j(D));if(J(D))return H(this.j(H(D)));if(0>this.l(j)&&0>D.l(j))return _(this.m()*D.m());for(var T=this.g.length+D.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<D.g.length;N++){var O=this.i(k)>>>16,A=this.i(k)&65535,ye=D.i(N)>>>16,It=D.i(N)&65535;S[2*k+2*N]+=A*It,ce(S,2*k+2*N),S[2*k+2*N+1]+=O*It,ce(S,2*k+2*N+1),S[2*k+2*N+1]+=A*ye,ce(S,2*k+2*N+1),S[2*k+2*N+2]+=O*ye,ce(S,2*k+2*N+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new h(S,0)};function ce(D,T){for(;(D[T]&65535)!=D[T];)D[T+1]+=D[T]>>>16,D[T]&=65535,T++}function me(D,T){this.g=D,this.h=T}function Se(D,T){if(q(T))throw Error("division by zero");if(q(D))return new me(R,R);if(J(D))return T=Se(H(D),T),new me(H(T.g),H(T.h));if(J(T))return T=Se(D,H(T)),new me(H(T.g),T.h);if(30<D.g.length){if(J(D)||J(T))throw Error("slowDivide_ only works with positive integers.");for(var S=C,k=T;0>=k.l(D);)S=qe(S),k=qe(k);var N=Re(S,1),O=Re(k,1);for(k=Re(k,2),S=Re(S,2);!q(k);){var A=O.add(k);0>=A.l(D)&&(N=N.add(S),O=A),k=Re(k,1),S=Re(S,1)}return T=Ee(D,N.j(T)),new me(N,T)}for(N=R;0<=D.l(T);){for(S=Math.max(1,Math.floor(D.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=_(S),A=O.j(T);J(A)||0<A.l(D);)S-=k,O=_(S),A=O.j(T);q(O)&&(O=C),N=N.add(O),D=Ee(D,A)}return new me(N,D)}r.A=function(D){return Se(this,D).h},r.and=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&D.i(k);return new h(S,this.h&D.h)},r.or=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|D.i(k);return new h(S,this.h|D.h)},r.xor=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^D.i(k);return new h(S,this.h^D.h)};function qe(D){for(var T=D.g.length+1,S=[],k=0;k<T;k++)S[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(S,D.h)}function Re(D,T){var S=T>>5;T%=32;for(var k=D.g.length-S,N=[],O=0;O<k;O++)N[O]=0<T?D.i(O+S)>>>T|D.i(O+S+1)<<32-T:D.i(O+S);return new h(N,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,v_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,wi=h}).apply(typeof Ig<"u"?Ig:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E_,Ca,w_,Ru,yd,T_,I_,S_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function R(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function C(l,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:R,C.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function q(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var ee=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ee[Qe-2]=arguments[Qe];return f.prototype[L].apply(E,ee)}}function J(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function H(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let ee=0;ee<U;ee++)l[L+ee]=E[ee]}else l.push(E)}}class Ee{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ce(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Se(l){return Se[" "](l),l}Se[" "]=function(){};var qe=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Re(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function T(l){const f={};for(const y in l)f[y]=l[y];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<S.length;U++)y=S[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function N(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function A(){var l=pe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class ye{constructor(){this.h=this.g=null}add(f,y){const E=It.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var It=new Ee(()=>new He,l=>l.reset());class He{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let We,X=!1,pe=new ye,ne=()=>{const l=m.Promise.resolve(void 0);We=()=>{l.then(V)}};var V=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){O(y)}var f=It;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}X=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ke=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ne(l,f){if(te.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(qe){e:{try{Se(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ve[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ne.aa.h.call(this)}}q(Ne,te);var Ve={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),je=0;function Ke(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++je,this.da=this.fa=!1}function ut(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function _n(l){this.src=l,this.g={},this.h=0}_n.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var ee=un(l,f,E,L);return-1<ee?(f=l[ee],y||(f.fa=!1)):(f=new Ke(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function ln(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(ut(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function un(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var kn="closure_lm_"+(1e6*Math.random()|0),Fr={};function Vi(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Vi(l,f[U],y,E,L);return null}return y=bi(y),l&&l[be]?l.K(f,y,_(E)?!!E.capture:!1,L):Oi(l,f,y,!1,E,L)}function Oi(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var ee=_(L)?!!L.capture:!!L,Qe=jr(l);if(Qe||(l[kn]=Qe=new _n(l)),y=Qe.add(f,y,E,ee,U),y.proxy)return y;if(E=_s(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)ke||(L=ee),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(xn(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function _s(){function l(y){return f.call(l.src,l.listener,y)}const f=Li;return l}function Ur(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)Ur(l,f[U],y,E,L);else E=_(E)?!!E.capture:!!E,y=bi(y),l&&l[be]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=un(U,y,E,L),-1<y&&(ut(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=jr(l))&&(f=l.g[f.toString()],l=-1,f&&(l=un(f,y,E,L)),(y=-1<l?f[l]:null)&&Nn(y))}function Nn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[be])ln(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(xn(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=jr(f))?(ln(y,l),y.h==0&&(y.src=null,f[kn]=null)):ut(l)}}}function xn(l){return l in Fr?Fr[l]:Fr[l]="on"+l}function Li(l,f){if(l.da)l=!0;else{f=new Ne(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&Nn(l),l=y.call(E,f)}return l}function jr(l){return l=l[kn],l instanceof _n?l:null}var zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function bi(l){return typeof l=="function"?l:(l[zr]||(l[zr]=function(f){return l.handleEvent(f)}),l[zr])}function ct(){z.call(this),this.i=new _n(this),this.M=this,this.F=null}q(ct,z),ct.prototype[be]=!0,ct.prototype.removeEventListener=function(l,f,y,E){Ur(this,l,f,y,E)};function re(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new te(f,l);else if(f instanceof te)f.target=f.target||l;else{var L=f;f=new te(E,l),k(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var ee=f.g=y[U];L=oe(ee,E,!0,f)&&L}if(ee=f.g=l,L=oe(ee,E,!0,f)&&L,L=oe(ee,E,!1,f)&&L,y)for(U=0;U<y.length;U++)ee=f.g=y[U],L=oe(ee,E,!1,f)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)ut(y[E]);delete l.g[f],l.h--}}this.F=null},ct.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},ct.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function oe(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var ee=f[U];if(ee&&!ee.da&&ee.capture==y){var Qe=ee.listener,_t=ee.ha||ee.src;ee.fa&&ln(l.i,ee),L=Qe.call(_t,E)!==!1&&L}}return L&&!E.defaultPrevented}function Y(l,f,y){if(typeof l=="function")y&&(l=C(l,y));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function fe(l){l.g=Y(()=>{l.g=null,l.i&&(l.i=!1,fe(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class we extends z{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:fe(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(l){z.call(this),this.h=l,this.g={}}q(Ze,z);var St=[];function Mi(l){Re(l.g,function(f,y){this.g.hasOwnProperty(y)&&Nn(f)},l),l.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),Mi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mo=m.JSON.stringify,Fo=m.JSON.parse,Uo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Fi(){}Fi.prototype.h=null;function vs(l){return l.h||(l.h=l.i())}function Es(){}var vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jn(){te.call(this,"d")}q(Jn,te);function ws(){te.call(this,"c")}q(ws,te);var Zn={},jo=null;function Ui(){return jo=jo||new ct}Zn.La="serverreachability";function zo(l){te.call(this,Zn.La,l)}q(zo,te);function gr(l){const f=Ui();re(f,new zo(f))}Zn.STAT_EVENT="statevent";function Bo(l,f){te.call(this,Zn.STAT_EVENT,l),this.stat=f}q(Bo,te);function ht(l){const f=Ui();re(f,new Bo(f,l))}Zn.Ma="timingevent";function Ts(l,f){te.call(this,Zn.Ma,l),this.size=f}q(Ts,te);function Dn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function ji(){this.g=!0}ji.prototype.xa=function(){this.g=!1};function zi(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var ee="",Qe=U.split("&"),_t=0;_t<Qe.length;_t++){var Fe=Qe[_t].split("=");if(1<Fe.length){var At=Fe[0];Fe=Fe[1];var pt=At.split("_");ee=2<=pt.length&&pt[1]=="type"?ee+(At+"="+Fe+"&"):ee+(At+"=redacted&")}}else ee=null;else ee=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+ee})}function Is(l,f,y,E,L,U,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+ee})}function Vn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+wc(l,y)+(E?" "+E:"")})}function $o(l,f){l.info(function(){return"TIMEOUT: "+f})}ji.prototype.info=function(){};function wc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ee=1;ee<L.length;ee++)L[ee]=""}}}}return Mo(y)}catch{return f}}var Ss={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},On;function Bi(){}q(Bi,Fi),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},On=new Bi;function Ln(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var Ho={},As={};function Rs(l,f,y){l.L=1,l.v=Wr(hn(f)),l.m=y,l.P=!0,qo(l,null)}function qo(l,f){l.F=Date.now(),Xe(l),l.A=hn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Gr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new nl,l.g=El(l.j,y?f:null,!l.m),0<l.O&&(l.M=new we(C(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(St[0]=L.toString()),L=St);for(var U=0;U<L.length;U++){var ee=Vi(y,L[U],E||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),gr(),zi(l.i,l.u,l.A,l.l,l.R,l.m)}Ln.prototype.ca=function(l){l=l.target;const f=this.M;f&&Jt(l)==3?f.j():this.Y(l)},Ln.prototype.Y=function(l){try{if(l==this.g)e:{const pt=Jt(this.g);var f=this.g.Ba();const Tn=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Xo(this.g)))){this.J||pt!=4||f==7||(f==8||0>=Tn?gr(3):gr(2)),$i(this);var y=this.g.Z();this.X=y;t:if(rl(this)){var E=Xo(this.g);l="";var L=E.length,U=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Br(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,Is(this.i,this.u,this.A,this.l,this.R,pt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,_t=this.g;if((Qe=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Qe)){var Fe=Qe;break t}}Fe=null}if(y=Fe)Vn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wo(this,y);else{this.o=!1,this.s=3,ht(12),En(this),Br(this);break e}}if(this.P){y=!0;let fn;for(;!this.J&&this.C<ee.length;)if(fn=Tc(this,ee),fn==As){pt==4&&(this.s=4,ht(14),y=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==Ho){this.s=4,ht(15),Vn(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else Vn(this.i,this.l,fn,null),Wo(this,fn);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||ee.length!=0||this.h.h||(this.s=1,ht(16),y=!1),this.o=this.o&&y,!y)Vn(this.i,this.l,ee,"[Invalid Chunked Response]"),En(this),Br(this);else if(0<ee.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Zo(At),At.M=!0,ht(11))}}else Vn(this.i,this.l,ee,null),Wo(this,ee);pt==4&&En(this),this.o&&!this.J&&(pt==4?Ms(this.j,this):(this.o=!1,Xe(this)))}else Ds(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),En(this),Br(this)}}}catch{}finally{}};function rl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Tc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?As:(y=Number(f.substring(y,E)),isNaN(y)?Ho:(E+=1,E+y>f.length?As:(f=f.slice(E,E+y),l.C=E+y,f)))}Ln.prototype.cancel=function(){this.J=!0,En(this)};function Xe(l){l.S=Date.now()+l.I,il(l,l.I)}function il(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Dn(C(l.ba,l),f)}function $i(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Ln.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?($o(this.i,this.A),this.L!=2&&(gr(),ht(17)),En(this),this.s=2,Br(this)):il(this,this.S-l)};function Br(l){l.j.G==0||l.J||Ms(l.j,l)}function En(l){$i(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Mi(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Wo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Wt(y.h,l))){if(!l.K&&Wt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)bs(y),jn(y);else break e;Ls(y),ht(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Dn(C(y.Za,y),6e3));if(1>=ol(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else wr(y,11)}else if((l.K||y.g==l)&&bs(y),!ce(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Fe=L[f];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const At=Fe[3];At!=null&&(y.la=At,y.j.info("VER="+y.la));const pt=Fe[4];pt!=null&&(y.Aa=pt,y.j.info("SVER="+y.Aa));const Tn=Fe[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(E=1.5*Tn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const fn=l.g;if(fn){const Yi=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var U=E.h;U.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ko(U,U.h),U.h=null))}if(E.D){const Us=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Us&&(E.ya=Us,Ye(E.I,E.D,Us))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ee=l;if(E.qa=vl(E,E.J?E.ia:null,E.W),ee.K){al(E.h,ee);var Qe=ee,_t=E.L;_t&&(Qe.I=_t),Qe.B&&($i(Qe),Xe(Qe)),E.g=ee}else Qi(E);0<y.i.length&&rr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||wr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?wr(y,7):Dt(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}gr(4)}catch{}}var sl=class{constructor(l,f){this.g=l,this.map=f}};function Hi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ol(l){return l.h?1:l.g?l.g.size:0}function Wt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ko(l,f){l.g?l.g.add(f):l.h=f}function al(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Hi.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ll(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return J(l.i)}function Cs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Ps(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function $r(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Ps(l),E=Cs(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ic(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function yr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof yr){this.h=l.h,Wi(this,l.j),this.o=l.o,this.g=l.g,Hr(this,l.s),this.l=l.l;var f=l.i,y=new er;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),qr(this,y),this.m=l.m}else l&&(f=String(l).match(qi))?(this.h=!1,Wi(this,f[1]||"",!0),this.o=Me(f[2]||""),this.g=Me(f[3]||"",!0),Hr(this,f[4]),this.l=Me(f[5]||"",!0),qr(this,f[6]||"",!0),this.m=Me(f[7]||"")):(this.h=!1,this.i=new er(null,this.h))}yr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Kr(f,ks,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Kr(f,ks,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Kr(y,y.charAt(0)=="/"?hl:cl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Kr(y,Go)),l.join("")};function hn(l){return new yr(l)}function Wi(l,f,y){l.j=y?Me(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Hr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function qr(l,f,y){f instanceof er?(l.i=f,tr(l.i,l.h)):(y||(f=Kr(f,dl)),l.i=new er(f,l.h))}function Ye(l,f,y){l.i.set(f,y)}function Wr(l){return Ye(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Me(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Kr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,ul),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ul(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ks=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,dl=/[#\?@]/g,Go=/#/g;function er(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function xt(l){l.g||(l.g=new Map,l.h=0,l.i&&Ic(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=er.prototype,r.add=function(l,f){xt(this),this.i=null,l=wn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function bn(l,f){xt(l),f=wn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Mn(l,f){return xt(l),f=wn(l,f),l.g.has(f)}r.forEach=function(l,f){xt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},r.na=function(){xt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},r.V=function(l){xt(this);let f=[];if(typeof l=="string")Mn(this,l)&&(f=f.concat(this.g.get(wn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return xt(this),this.i=null,l=wn(this,l),Mn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Gr(l,f,y){bn(l,f),0<y.length&&(l.i=null,l.g.set(wn(l,f),J(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var L=U;ee[E]!==""&&(L+="="+encodeURIComponent(String(ee[E]))),l.push(L)}}return this.i=l.join("&")};function wn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function tr(l,f){f&&!l.j&&(xt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(bn(this,E),Gr(this,L,y))},l)),l.j=f}function Sc(l,f){const y=new ji;if(m.Image){const E=new Image;E.onload=j(Xt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Xt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Xt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Xt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function fl(l,f){const y=new ji,E=new AbortController,L=setTimeout(()=>{E.abort(),Xt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Xt(y,"TestPingServer: ok",!0,f):Xt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Xt(y,"TestPingServer: error",!1,f)})}function Xt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Ac(){this.g=new Uo}function pl(l,f,y){const E=y||"";try{$r(l,function(L,U){let ee=L;_(L)&&(ee=Mo(L)),f.push(E+U+"="+encodeURIComponent(ee))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function _r(l){this.l=l.Ub||null,this.j=l.eb||!1}q(_r,Fi),_r.prototype.g=function(){return new Ki(this.l,this.j)},_r.prototype.i=function(l){return function(){return l}}({});function Ki(l,f){ct.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Ki,ct),r=Ki.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Un(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ml(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Fn(this):Un(this),this.readyState==3&&ml(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Fn(this))},r.Qa=function(l){this.g&&(this.response=l,Fn(this))},r.ga=function(){this.g&&Fn(this)};function Fn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Un(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Un(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vr(l){let f="";return Re(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Qr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=vr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):Ye(l,f,y))}function rt(l){ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(rt,ct);var Rc=/^https?$/i,Qo=["POST","PUT"];r=rt.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():On.g(),this.v=this.o?vs(this.o):vs(On),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Gi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Qo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of y)this.g.setRequestHeader(U,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Gi(this,U)}};function Gi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ns(l),dn(l)}function Ns(l){l.A||(l.A=!0,re(l,"complete"),re(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,re(this,"complete"),re(this,"abort"),dn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),rt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},r.bb=function(){Yo(this)};function Yo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Jt(l)!=4||l.Z()!=2)){if(l.u&&Jt(l)==4)Y(l.Ea,0,l);else if(re(l,"readystatechange"),Jt(l)==4){l.h=!1;try{const ee=l.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=ee===0){var L=String(l.D).match(qi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Rc.test(L?L.toLowerCase():"")}y=E}if(y)re(l,"complete"),re(l,"success");else{l.m=6;try{var U=2<Jt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Ns(l)}}finally{dn(l)}}}}function dn(l,f){if(l.g){xs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||re(l,"ready");try{y.onreadystatechange=E}catch{}}}function xs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Jt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Fo(f)}};function Xo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ds(l){const f={};l=(l.g&&2<=Jt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ce(l[E]))continue;var y=N(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Jo(l){this.Aa=0,this.i=[],this.j=new ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,l),this.cb=nr("retryDelaySeedMs",1e4,l),this.Wa=nr("forwardChannelMaxRetries",2,l),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(l&&l.concurrentRequestLimit),this.Da=new Ac,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Jo.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,E){ht(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=vl(this,null,this.W),rr(this)};function Dt(l){if(Vs(l),l.G==3){var f=l.U++,y=hn(l.I);if(Ye(y,"SID",l.K),Ye(y,"RID",f),Ye(y,"TYPE","terminate"),Er(l,y),f=new Ln(l,l.j,f),f.L=2,f.v=Wr(hn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=El(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Xe(f)}_l(l)}function jn(l){l.g&&(Zo(l),l.g.cancel(),l.g=null)}function Vs(l){jn(l),l.u&&(m.clearTimeout(l.u),l.u=null),bs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function rr(l){if(!cn(l.h)&&!l.s){l.s=!0;var f=l.Ga;We||ne(),X||(We(),X=!0),pe.add(f,l),l.B=0}}function Cc(l,f){return ol(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Dn(C(l.Ga,l,f),yl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Ln(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Yr(this,L,f),y=hn(this.I),Ye(y,"RID",l),Ye(y,"CVER",22),this.D&&Ye(y,"X-HTTP-Session-Id",this.D),Er(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(vr(U)))+"&"+f:this.m&&Qr(y,this.m,U)),Ko(this.h,L),this.Ua&&Ye(y,"TYPE","init"),this.P?(Ye(y,"$req",f),Ye(y,"SID","null"),L.T=!0,Rs(L,y,null)):Rs(L,y,f),this.G=2}}else this.G==3&&(l?Os(this,l):this.i.length==0||cn(this.h)||Os(this))};function Os(l,f){var y;f?y=f.l:y=l.U++;const E=hn(l.I);Ye(E,"SID",l.K),Ye(E,"RID",y),Ye(E,"AID",l.T),Er(l,E),l.m&&l.o&&Qr(E,l.m,l.o),y=new Ln(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Yr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ko(l.h,y),Rs(y,E,f)}function Er(l,f){l.H&&Re(l.H,function(y,E){Ye(f,E,y)}),l.l&&$r({},function(y,E){Ye(f,E,y)})}function Yr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?C(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const ee=["count="+y];U==-1?0<y?(U=L[0].g,ee.push("ofs="+U)):U=0:ee.push("ofs="+U);let Qe=!0;for(let _t=0;_t<y;_t++){let Fe=L[_t].g;const At=L[_t].map;if(Fe-=U,0>Fe)U=Math.max(0,L[_t].g-100),Qe=!1;else try{pl(At,ee,"req"+Fe+"_")}catch{E&&E(At)}}if(Qe){E=ee.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Qi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;We||ne(),X||(We(),X=!0),pe.add(f,l),l.v=0}}function Ls(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Dn(C(l.Fa,l),yl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Dn(C(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),jn(this),gl(this))};function Zo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function gl(l){l.g=new Ln(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=hn(l.qa);Ye(f,"RID","rpc"),Ye(f,"SID",l.K),Ye(f,"AID",l.T),Ye(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ye(f,"TO",l.ja),Ye(f,"TYPE","xmlhttp"),Er(l,f),l.m&&l.o&&Qr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Wr(hn(f)),y.m=null,y.P=!0,qo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,jn(this),Ls(this),ht(19))};function bs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ms(l,f){var y=null;if(l.g==f){bs(l),Zo(l),l.g=null;var E=2}else if(Wt(l.h,f))y=f.D,al(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Ui(),re(E,new Ts(E,y)),rr(l)}else Qi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Cc(l,f)||E==2&&Ls(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:wr(l,5);break;case 4:wr(l,10);break;case 3:wr(l,6);break;default:wr(l,2)}}}function yl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function wr(l,f){if(l.j.info("Error code "+f),f==2){var y=C(l.fb,l),E=l.Xa;const L=!E;E=new yr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Wi(E,"https"),Wr(E),L?Sc(E.toString(),y):fl(E.toString(),y)}else ht(2);l.G=0,l.l&&l.l.sa(f),_l(l),Vs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function _l(l){if(l.G=0,l.ka=[],l.l){const f=ll(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function vl(l,f,y){var E=y instanceof yr?hn(y):new yr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Hr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new yr(null);E&&Wi(U,E),f&&(U.g=f),L&&Hr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&Ye(E,y,f),Ye(E,"VER",l.la),Er(l,E),E}function El(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new rt(new _r({eb:y})):new rt(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ea(){}r=ea.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Fs(){}Fs.prototype.g=function(l,f){return new Kt(l,f)};function Kt(l,f){ct.call(this),this.g=new Jo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ce(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ce(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new ir(this)}q(Kt,ct),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Dt(this.g)},Kt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Mo(l),l=y);f.i.push(new sl(f.Ya++,l)),f.G==3&&rr(f)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Dt(this.g),delete this.g,Kt.aa.N.call(this)};function wl(l){Jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}q(wl,Jn);function Tl(){ws.call(this),this.status=1}q(Tl,ws);function ir(l){this.g=l}q(ir,ea),ir.prototype.ua=function(){re(this.g,"a")},ir.prototype.ta=function(l){re(this.g,new wl(l))},ir.prototype.sa=function(l){re(this.g,new Tl)},ir.prototype.ra=function(){re(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,S_=function(){return new Fs},I_=function(){return Ui()},T_=Zn,yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ss.NO_ERROR=0,Ss.TIMEOUT=8,Ss.HTTP_ERROR=6,Ru=Ss,tl.COMPLETE="complete",w_=tl,Es.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ca=Es,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,E_=rt}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const Sg="@firebase/firestore",Ag="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new bd("@firebase/firestore");function oo(){return fs.logLevel}function se(r,...e){if(fs.logLevel<=Oe.DEBUG){const t=e.map(Gd);fs.debug(`Firestore (${No}): ${r}`,...t)}}function Lr(r,...e){if(fs.logLevel<=Oe.ERROR){const t=e.map(Gd);fs.error(`Firestore (${No}): ${r}`,...t)}}function _o(r,...e){if(fs.logLevel<=Oe.WARN){const t=e.map(Gd);fs.warn(`Firestore (${No}): ${r}`,...t)}}function Gd(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,A_(r,s,t)}function A_(r,e,t){let s=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Lr(s),new Error(s)}function Ge(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||A_(e,o,s)}function Pe(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($t.UNAUTHENTICATED))}shutdown(){}}class fS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pS{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ge(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Dr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Dr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string",31837,{l:s}),new R_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class mS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new mS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ge(this.o===void 0,3512);const s=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Rg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=_S(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function _d(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return xe(s,o);{const u=C_(),h=vS(u.encode(Cg(r,t)),u.encode(Cg(e,t)));return h!==0?h:xe(s,o)}}t+=s>65535?2:1}return xe(r.length,e.length)}function Cg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function vS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return xe(r[t],e[t]);return xe(r.length,e.length)}function vo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=-62135596800,kg=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kg);return new wt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pg)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kg}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new wt(0,0))}static max(){return new Ce(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="__name__";class ur{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ie(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ur.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ur?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=ur.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return xe(e.length,t.length)}static compareSegments(e,t){const s=ur.isNumericId(e),o=ur.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ur.extractNumericId(e).compare(ur.extractNumericId(t)):_d(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wi.fromString(e.substring(4,e.length-2))}}class nt extends ur{construct(e,t,s){return new nt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new nt(t)}static emptyPath(){return new nt([])}}const ES=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends ur{construct(e,t,s){return new bt(e,t,s)}static isValidIdentifier(e){return ES.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ng}static keyField(){return new bt([Ng])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new le($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new le($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new le($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new le($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(nt.fromString(e))}static fromName(e){return new ge(nt.fromString(e).popFirst(5))}static empty(){return new ge(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new nt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=-1;function wS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(s===1e9?new wt(t+1,0):new wt(t,s));return new Si(o,ge.empty(),e)}function TS(r){return new Si(r.readTime,r.key,ja)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(Ce.min(),ge.empty(),ja)}static max(){return new Si(Ce.max(),ge.empty(),ja)}}function IS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==SS)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function RS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Do(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}rc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=-1;function ic(r){return r==null}function ju(r){return r===0&&1/r==-1/0}function CS(r){return typeof r=="number"&&Number.isInteger(r)&&!ju(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="";function PS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=xg(e)),e=kS(r.get(t),e);return xg(e)}function kS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case k_:t+="";break;default:t+=u}}return t}function xg(r){return r+k_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function xi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function N_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _u(this.root,e,this.comparator,!1)}getReverseIterator(){return new _u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _u(this.root,e,this.comparator,!0)}}class _u{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Lt.RED,this.left=o??Lt.EMPTY,this.right=u??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Lt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vg(this.data.getIterator())}getIteratorFrom(e){return new Vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class Vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new Tt(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new x_("Invalid base64 string: "+u):u}}(e);return new Mt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const NS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(r){if(Ge(!!r,39018),typeof r=="string"){let e=0;const t=NS.exec(r);if(Ge(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ft(r.seconds),nanos:ft(r.nanos)}}function ft(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ri(r){return typeof r=="string"?Mt.fromBase64String(r):Mt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="server_timestamp",V_="__type__",O_="__previous_value__",L_="__local_write_time__";function Yd(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[V_])===null||t===void 0?void 0:t.stringValue)===D_}function sc(r){const e=r.mapValue.fields[O_];return Yd(e)?sc(e):e}function za(r){const e=Ai(r.mapValue.fields[L_].timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const zu="(default)";class Ba{constructor(e,t){this.projectId=e,this.database=t||zu}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database===zu}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="__type__",DS="__max__",vu={mapValue:{}},M_="__vector__",Bu="value";function Ci(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Yd(r)?4:OS(r)?9007199254740991:VS(r)?10:11:Ie(28295,{value:r})}function pr(r,e){if(r===e)return!0;const t=Ci(r);if(t!==Ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return za(r).isEqual(za(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ai(o.timestampValue),m=Ai(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Ri(o.bytesValue).isEqual(Ri(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return ft(o.geoPointValue.latitude)===ft(u.geoPointValue.latitude)&&ft(o.geoPointValue.longitude)===ft(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ft(o.integerValue)===ft(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ft(o.doubleValue),m=ft(u.doubleValue);return h===m?ju(h)===ju(m):isNaN(h)&&isNaN(m)}return!1}(r,e);case 9:return vo(r.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Dg(h)!==Dg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!pr(h[g],m[g])))return!1;return!0}(r,e);default:return Ie(52216,{left:r})}}function $a(r,e){return(r.values||[]).find(t=>pr(t,e))!==void 0}function Eo(r,e){if(r===e)return 0;const t=Ci(r),s=Ci(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return function(u,h){const m=ft(u.integerValue||u.doubleValue),g=ft(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return Og(r.timestampValue,e.timestampValue);case 4:return Og(za(r),za(e));case 5:return _d(r.stringValue,e.stringValue);case 6:return function(u,h){const m=Ri(u),g=Ri(h);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=xe(m[_],g[_]);if(w!==0)return w}return xe(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const m=xe(ft(u.latitude),ft(h.latitude));return m!==0?m:xe(ft(u.longitude),ft(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Lg(r.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,_,w;const R=u.fields||{},C=h.fields||{},j=(m=R[Bu])===null||m===void 0?void 0:m.arrayValue,q=(g=C[Bu])===null||g===void 0?void 0:g.arrayValue,J=xe(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=q==null?void 0:q.values)===null||w===void 0?void 0:w.length)||0);return J!==0?J:Lg(j,q)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===vu.mapValue&&h===vu.mapValue)return 0;if(u===vu.mapValue)return 1;if(h===vu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let R=0;R<g.length&&R<w.length;++R){const C=_d(g[R],w[R]);if(C!==0)return C;const j=Eo(m[g[R]],_[w[R]]);if(j!==0)return j}return xe(g.length,w.length)}(r.mapValue,e.mapValue);default:throw Ie(23264,{Pe:t})}}function Og(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=Ai(r),s=Ai(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function Lg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Eo(t[o],s[o]);if(u)return u}return xe(t.length,s.length)}function wo(r){return vd(r)}function vd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ai(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ri(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ge.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=vd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${vd(t.fields[h])}`;return o+"}"}(r.mapValue):Ie(61005,{value:r})}function Cu(r){switch(Ci(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(r);return e?16+Cu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ri(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Cu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return xi(s.fields,(u,h)=>{o+=u.length+Cu(h)}),o}(r.mapValue);default:throw Ie(13486,{value:r})}}function bg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ed(r){return!!r&&"integerValue"in r}function Xd(r){return!!r&&"arrayValue"in r}function Mg(r){return!!r&&"nullValue"in r}function Fg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Pu(r){return!!r&&"mapValue"in r}function VS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[b_])===null||t===void 0?void 0:t.stringValue)===M_}function Va(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return xi(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Va(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Va(r.arrayValue.values[t]);return e}return Object.assign({},r)}function OS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===DS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(t)}setAll(e){let t=bt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Va(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Pu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){xi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new an(Va(this.value))}}function F_(r){const e=[];return xi(r.fields,(t,s)=>{const o=new bt([t]);if(Pu(s)){const u=F_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ht(e,0,Ce.min(),Ce.min(),Ce.min(),an.empty(),0)}static newFoundDocument(e,t,s,o){return new Ht(e,1,t,Ce.min(),s,o,0)}static newNoDocument(e,t){return new Ht(e,2,t,Ce.min(),Ce.min(),an.empty(),0)}static newUnknownDocument(e,t){return new Ht(e,3,t,Ce.min(),Ce.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.position=e,this.inclusive=t}}function Ug(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=Eo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function jg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!pr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function LS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{}class yt extends U_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new MS(e,t,s):t==="array-contains"?new jS(e,s):t==="in"?new zS(e,s):t==="not-in"?new BS(e,s):t==="array-contains-any"?new $S(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new FS(e,s):new US(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Eo(t,this.value)):t!==null&&Ci(this.value)===Ci(t)&&this.matchesComparison(Eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends U_{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Xn(e,t)}matches(e){return j_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function j_(r){return r.op==="and"}function z_(r){return bS(r)&&j_(r)}function bS(r){for(const e of r.filters)if(e instanceof Xn)return!1;return!0}function wd(r){if(r instanceof yt)return r.field.canonicalString()+r.op.toString()+wo(r.value);if(z_(r))return r.filters.map(e=>wd(e)).join(",");{const e=r.filters.map(t=>wd(t)).join(",");return`${r.op}(${e})`}}function B_(r,e){return r instanceof yt?function(s,o){return o instanceof yt&&s.op===o.op&&s.field.isEqual(o.field)&&pr(s.value,o.value)}(r,e):r instanceof Xn?function(s,o){return o instanceof Xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&B_(h,o.filters[m]),!0):!1}(r,e):void Ie(19439)}function $_(r){return r instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`}(r):r instanceof Xn?function(t){return t.op.toString()+" {"+t.getFilters().map($_).join(" ,")+"}"}(r):"Filter"}class MS extends yt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class FS extends yt{constructor(e,t){super(e,"in",t),this.keys=H_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class US extends yt{constructor(e,t){super(e,"not-in",t),this.keys=H_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function H_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ge.fromName(s.referenceValue))}class jS extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xd(t)&&$a(t.arrayValue,this.value)}}class zS extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$a(this.value.arrayValue,t)}}class BS extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$a(this.value.arrayValue,t)}}class $S extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>$a(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Ie=null}}function zg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new HS(r,e,t,s,o,u,h)}function Jd(r){const e=Pe(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>wd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ic(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>wo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>wo(s)).join(",")),e.Ie=t}return e.Ie}function Zd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!LS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!B_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!jg(r.startAt,e.startAt)&&jg(r.endAt,e.endAt)}function Td(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function qS(r,e,t,s,o,u,h,m){return new Ya(r,e,t,s,o,u,h,m)}function ef(r){return new Ya(r)}function Bg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function q_(r){return r.collectionGroup!==null}function Oa(r){const e=Pe(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Tt(bt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Hu(u,s))}),t.has(bt.keyField().canonicalString())||e.Ee.push(new Hu(bt.keyField(),s))}return e.Ee}function dr(r){const e=Pe(r);return e.de||(e.de=WS(e,Oa(r))),e.de}function WS(r,e){if(r.limitType==="F")return zg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Hu(o.field,u)});const t=r.endAt?new $u(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new $u(r.startAt.position,r.startAt.inclusive):null;return zg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Id(r,e){const t=r.filters.concat([e]);return new Ya(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Sd(r,e,t){return new Ya(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function oc(r,e){return Zd(dr(r),dr(e))&&r.limitType===e.limitType}function W_(r){return`${Jd(dr(r))}|lt:${r.limitType}`}function ao(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>$_(o)).join(", ")}]`),ic(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>wo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>wo(o)).join(",")),`Target(${s})`}(dr(r))}; limitType=${r.limitType})`}function ac(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Oa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const _=Ug(h,m,g);return h.inclusive?_<=0:_<0}(s.startAt,Oa(s),o)||s.endAt&&!function(h,m,g){const _=Ug(h,m,g);return h.inclusive?_>=0:_>0}(s.endAt,Oa(s),o))}(r,e)}function KS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function K_(r){return(e,t)=>{let s=!1;for(const o of Oa(r)){const u=GS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function GS(r,e,t){const s=r.field.isKeyField()?ge.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Eo(g,_):Ie(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ie(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return N_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new at(ge.comparator);function br(){return QS}const G_=new at(ge.comparator);function Pa(...r){let e=G_;for(const t of r)e=e.insert(t.key,t);return e}function Q_(r){let e=G_;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function cs(){return La()}function Y_(){return La()}function La(){return new gs(r=>r.toString(),(r,e)=>r.isEqual(e))}const YS=new at(ge.comparator),XS=new Tt(ge.comparator);function Le(...r){let e=XS;for(const t of r)e=e.add(t);return e}const JS=new Tt(xe);function ZS(){return JS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ju(e)?"-0":e}}function X_(r){return{integerValue:""+r}}function eA(r,e){return CS(e)?X_(e):tf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this._=void 0}}function tA(r,e,t){return r instanceof qu?function(o,u){const h={fields:{[V_]:{stringValue:D_},[L_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Yd(u)&&(u=sc(u)),u&&(h.fields[O_]=u),{mapValue:h}}(t,e):r instanceof To?Z_(r,e):r instanceof Ha?ev(r,e):function(o,u){const h=J_(o,u),m=$g(h)+$g(o.Re);return Ed(h)&&Ed(o.Re)?X_(m):tf(o.serializer,m)}(r,e)}function nA(r,e,t){return r instanceof To?Z_(r,e):r instanceof Ha?ev(r,e):t}function J_(r,e){return r instanceof Wu?function(s){return Ed(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class qu extends lc{}class To extends lc{constructor(e){super(),this.elements=e}}function Z_(r,e){const t=tv(e);for(const s of r.elements)t.some(o=>pr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ha extends lc{constructor(e){super(),this.elements=e}}function ev(r,e){let t=tv(e);for(const s of r.elements)t=t.filter(o=>!pr(o,s));return{arrayValue:{values:t}}}class Wu extends lc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function $g(r){return ft(r.integerValue||r.doubleValue)}function tv(r){return Xd(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){this.field=e,this.transform=t}}function iA(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof To&&o instanceof To||s instanceof Ha&&o instanceof Ha?vo(s.elements,o.elements,pr):s instanceof Wu&&o instanceof Wu?pr(s.Re,o.Re):s instanceof qu&&o instanceof qu}(r.transform,e.transform)}class sA{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class uc{}function nv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new nf(r.key,Qn.none()):new Xa(r.key,r.data,Qn.none());{const t=r.data,s=an.empty();let o=new Tt(bt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Di(r.key,s,new yn(o.toArray()),Qn.none())}}function oA(r,e,t){r instanceof Xa?function(o,u,h){const m=o.value.clone(),g=qg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):r instanceof Di?function(o,u,h){if(!ku(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=qg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(rv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ba(r,e,t,s){return r instanceof Xa?function(u,h,m,g){if(!ku(u.precondition,h))return m;const _=u.value.clone(),w=Wg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof Di?function(u,h,m,g){if(!ku(u.precondition,h))return m;const _=Wg(u.fieldTransforms,g,h),w=h.data;return w.setAll(rv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(r,e,t,s):function(u,h,m){return ku(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,e,t)}function aA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=J_(s.transform,o||null);u!=null&&(t===null&&(t=an.empty()),t.set(s.field,u))}return t||null}function Hg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&vo(s,o,(u,h)=>iA(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Xa extends uc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Di extends uc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function rv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function qg(r,e,t){const s=new Map;Ge(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,nA(h,m,t[o]))}return s}function Wg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,tA(u,h,e))}return s}class nf extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lA extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&oA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Y_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=nv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ce.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(t,s)=>Hg(t,s))&&vo(this.baseMutations,e.baseMutations,(t,s)=>Hg(t,s))}}class rf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ge(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let o=function(){return YS}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new rf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Ue;function dA(r){switch(r){case $.OK:return Ie(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Ie(15467,{code:r})}}function iv(r){if(r===void 0)return Lr("GRPC error has no .code"),$.UNKNOWN;switch(r){case gt.OK:return $.OK;case gt.CANCELLED:return $.CANCELLED;case gt.UNKNOWN:return $.UNKNOWN;case gt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case gt.INTERNAL:return $.INTERNAL;case gt.UNAVAILABLE:return $.UNAVAILABLE;case gt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case gt.NOT_FOUND:return $.NOT_FOUND;case gt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case gt.ABORTED:return $.ABORTED;case gt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case gt.DATA_LOSS:return $.DATA_LOSS;default:return Ie(39323,{code:r})}}(Ue=gt||(gt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new wi([4294967295,4294967295],0);function Kg(r){const e=C_().encode(r),t=new v_;return t.update(e),new Uint8Array(t.digest())}function Gg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new wi([t,s],0),new wi([o,u],0)]}class sf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(s<0)throw new ka(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ka(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=wi.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(wi.fromNumber(s)));return o.compare(fA)===1&&(o=new wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Kg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.be(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new sf(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.pe===0)return;const t=Kg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new cc(Ce.min(),o,new at(xe),br(),Le())}}class Ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ja(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class sv{constructor(e,t){this.targetId=e,this.Ce=t}}class ov{constructor(e,t,s=Mt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Qg{constructor(){this.Fe=0,this.Me=Yg(),this.xe=Mt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Le(),t=Le(),s=Le();return this.Me.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ie(38017,{changeType:u})}}),new Ja(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=Yg()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ge(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class pA{constructor(e){this.ze=e,this.je=new Map,this.He=br(),this.Je=Eu(),this.Ye=Eu(),this.Ze=new at(xe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:Ie(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const u=o.target;if(Td(u))if(s===0){const h=new ge(u.path);this.tt(t,h,Ht.newNoDocument(h,Ce.min()))}else Ge(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const m=this.ct(e),g=m?this.lt(m,e,h):1;if(g!==0){this.st(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ri(s).toUint8Array()}catch(g){if(g instanceof x_)return _o("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new sf(h,o,u)}catch(g){return _o(g instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.pe===0?null:m}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,u,null),o++)}),o}It(e){const t=new Map;this.je.forEach((u,h)=>{const m=this._t(h);if(m){if(u.current&&Td(m.target)){const g=new ge(m.target.path);this.Et(g).has(h)||this.dt(h,g)||this.tt(h,g,Ht.newNoDocument(g,e))}u.Le&&(t.set(h,u.qe()),u.Qe())}});let s=Le();this.Ye.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const _=this._t(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,h)=>h.setReadTime(e));const o=new cc(e,t,this.Ze,this.He,s);return this.He=br(),this.Je=Eu(),this.Ye=Eu(),this.Ze=new at(xe),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Qg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Tt(xe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Tt(xe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Qg),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Eu(){return new at(ge.comparator)}function Yg(){return new at(ge.comparator)}const mA={asc:"ASCENDING",desc:"DESCENDING"},gA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yA={and:"AND",or:"OR"};class _A{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ad(r,e){return r.useProto3Json||ic(e)?e:{value:e}}function Ku(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function av(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function vA(r,e){return Ku(r,e.toTimestamp())}function fr(r){return Ge(!!r,49232),Ce.fromTimestamp(function(t){const s=Ai(t);return new wt(s.seconds,s.nanos)}(r))}function of(r,e){return Rd(r,e).canonicalString()}function Rd(r,e){const t=function(o){return new nt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function lv(r){const e=nt.fromString(r);return Ge(fv(e),10190,{key:e.toString()}),e}function Cd(r,e){return of(r.databaseId,e.path)}function sd(r,e){const t=lv(e);if(t.get(1)!==r.databaseId.projectId)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ge(cv(t))}function uv(r,e){return of(r.databaseId,e)}function EA(r){const e=lv(r);return e.length===4?nt.emptyPath():cv(e)}function Pd(r){return new nt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cv(r){return Ge(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Xg(r,e,t){return{name:Cd(r,e),fields:t.value.mapValue.fields}}function wA(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ie(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(Ge(w===void 0||typeof w=="string",58123),Mt.fromBase64String(w||"")):(Ge(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Mt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?$.UNKNOWN:iv(_.code);return new le(w,_.message||"")}(h);t=new ov(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=sd(r,s.document.name),u=fr(s.document.updateTime),h=s.document.createTime?fr(s.document.createTime):Ce.min(),m=new an({mapValue:{fields:s.document.fields}}),g=Ht.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Nu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=sd(r,s.document),u=s.readTime?fr(s.readTime):Ce.min(),h=Ht.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=sd(r,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return Ie(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new hA(o,u),m=s.targetId;t=new sv(m,h)}}return t}function TA(r,e){let t;if(e instanceof Xa)t={update:Xg(r,e.key,e.value)};else if(e instanceof nf)t={delete:Cd(r,e.key)};else if(e instanceof Di)t={update:Xg(r,e.key,e.data),updateMask:xA(e.fieldMask)};else{if(!(e instanceof lA))return Ie(16599,{ft:e.type});t={verify:Cd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof To)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Wu)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw Ie(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:vA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ie(27497)}(r,e.precondition)),t}function IA(r,e){return r&&r.length>0?(Ge(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?fr(o.updateTime):fr(u);return h.isEqual(Ce.min())&&(h=fr(u)),new sA(h,o.transformResults||[])}(t,e))):[]}function SA(r,e){return{documents:[uv(r,e.path)]}}function AA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=uv(r,o);const u=function(_){if(_.length!==0)return dv(Xn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(C){return{field:lo(C.field),direction:PA(C.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ad(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{gt:t,parent:o}}function RA(r){let e=EA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ge(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(R){const C=hv(R);return C instanceof Xn&&z_(C)?C.getFilters():[C]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(C=>function(q){return new Hu(uo(q.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(C))}(t.orderBy));let m=null;t.limit&&(m=function(R){let C;return C=typeof R=="object"?R.value:R,ic(C)?null:C}(t.limit));let g=null;t.startAt&&(g=function(R){const C=!!R.before,j=R.values||[];return new $u(j,C)}(t.startAt));let _=null;return t.endAt&&(_=function(R){const C=!R.before,j=R.values||[];return new $u(j,C)}(t.endAt)),qS(e,o,h,u,m,"F",g,_)}function CA(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=uo(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=uo(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=uo(t.unaryFilter.field);return yt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=uo(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}}(r):r.fieldFilter!==void 0?function(t){return yt.create(uo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Xn.create(t.compositeFilter.filters.map(s=>hv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}}(t.compositeFilter.op))}(r):Ie(30097,{filter:r})}function PA(r){return mA[r]}function kA(r){return gA[r]}function NA(r){return yA[r]}function lo(r){return{fieldPath:r.canonicalString()}}function uo(r){return bt.fromServerFormat(r.fieldPath)}function dv(r){return r instanceof yt?function(t){if(t.op==="=="){if(Fg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NAN"}};if(Mg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NAN"}};if(Mg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(t.field),op:kA(t.op),value:t.value}}}(r):r instanceof Xn?function(t){const s=t.getFilters().map(o=>dv(o));return s.length===1?s[0]:{compositeFilter:{op:NA(t.op),filters:s}}}(r):Ie(54877,{filter:r})}function xA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,s,o,u=Ce.min(),h=Ce.min(),m=Mt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.wt=e}}function VA(r){const e=RA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.Cn=new LA}addToCollectionParentIndex(e,t){return this.Cn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(Si.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class LA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Tt(nt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Tt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pv=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(pv,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Io(0)}static lr(){return new Io(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="LruGarbageCollector",bA=1048576;function ey([r,e],[t,s]){const o=xe(r,t);return o===0?xe(e,s):o}class MA{constructor(e){this.Er=e,this.buffer=new Tt(ey),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ey(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){se(Zg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Do(t)?se(Zg,"Ignoring IndexedDB error during garbage collection: ",t):await xo(t)}await this.mr(3e5)})}}class UA{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(rc.le);const s=new MA(t);return this.gr.forEachTarget(e,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Jg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jg):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(_=Date.now(),oo()<=Oe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${R} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function jA(r,e){return new UA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.changes=new gs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ba(s.mutation,o,yn.empty(),wt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=cs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Pa();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=cs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=br();const h=La(),m=function(){return La()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Di)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),ba(w.mutation,_,w.mutation.getFieldMask(),wt.now())):h.set(_.key,yn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var R;return m.set(_,new BA(w,(R=h.get(_))!==null&&R!==void 0?R:null))}),m))}recalculateAndSaveOverlays(e,t){const s=La();let o=new at((h,m)=>h-m),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||yn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const R=(o.get(m.batchId)||Le()).add(g);o=o.insert(m.batchId,R)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,R=Y_();w.forEach(C=>{if(!u.has(C)){const j=nv(t.get(C),s.get(C));j!==null&&R.set(C,j),u=u.add(C)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,R))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):q_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(cs());let m=ja,g=u;return h.next(_=>B.forEach(_,(w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next(C=>{g=g.insert(w,C)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Le())).next(w=>({batchId:m,changes:Q_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(s=>{let o=Pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Pa();return this.indexManager.getCollectionParents(e,u).next(m=>B.forEach(m,g=>{const _=function(R,C){return new Ya(C,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((R,C)=>{h=h.insert(R,C)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ht.newInvalidDocument(w)))});let m=Pa();return h.forEach((g,_)=>{const w=u.get(g);w!==void 0&&ba(w.mutation,_,yn.empty(),wt.now()),ac(t,_)&&(m=m.insert(g,_))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return B.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:fr(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:VA(o.bundledQuery),readTime:fr(o.readTime)}}(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.overlays=new at(ge.comparator),this.Qr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=cs();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=cs(),u=t.length+1,h=new ge(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new at((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=cs(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=cs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return B.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new cA(t,s));let u=this.Qr.get(t);u===void 0&&(u=Le(),this.Qr.set(t,u)),this.Qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.$r=new Tt(kt.Ur),this.Kr=new Tt(kt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new kt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new kt(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new ge(new nt([])),s=new kt(t,e),o=new kt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],h=>{this.zr(h),u.push(h.key)}),u}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ge(new nt([])),s=new kt(t,e),o=new kt(t,e+1);let u=Le();return this.Kr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new kt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ge.comparator(e.key,t.key)||xe(e.Zr,t.Zr)}static Wr(e,t){return xe(e.Zr,t.Zr)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Tt(kt.Ur)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new uA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Xr=this.Xr.add(new kt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ti(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Qd:this.nr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],h=>{const m=this.ei(h.Zr);u.push(m)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Tt(xe);return t.forEach(o=>{const u=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],m=>{s=s.add(m.Zr)})}),B.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const h=new kt(new ge(u),0);let m=new Tt(xe);return this.Xr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Zr)),!0)},h),B.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(s=>{const o=this.ei(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ge(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return B.forEach(t.mutations,o=>{const u=new kt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new kt(t,0),o=this.Xr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.ii=e,this.docs=function(){return new at(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ht.newInvalidDocument(t))}getEntries(e,t){let s=br();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ht.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=br();const h=t.path,m=new ge(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||IS(TS(w),s)<=0||(o.has(w.key)||ac(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ie(9500)}si(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new QA(this)}getSize(e){return B.resolve(this.size)}}class QA extends zA{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.persistence=e,this.oi=new gs(t=>Jd(t),Zd),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this._i=0,this.ai=new af,this.targetCount=0,this.ui=Io.cr()}forEachTarget(e,t){return this.oi.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),B.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Io(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Tr(t),B.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.oi.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t){this.ci={},this.overlays={},this.li=new rc(0),this.hi=!1,this.hi=!0,this.Pi=new WA,this.referenceDelegate=e(this),this.Ti=new YA(this),this.indexManager=new OA,this.remoteDocumentCache=function(o){return new GA(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new DA(t),this.Ei=new HA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new KA(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new XA(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(e,t){return B.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class XA extends AS{constructor(e){super(),this.currentSequenceNumber=e}}class lf{constructor(e){this.persistence=e,this.Vi=new af,this.mi=null}static fi(e){return new lf(e)}get gi(){if(this.mi)return this.mi;throw Ie(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.gi,s=>{const o=ge.fromPath(s);return this.pi(e,o).next(u=>{u||t.removeEntry(o,Ce.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return B.or([()=>B.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Gu{constructor(e,t){this.persistence=e,this.yi=new gs(s=>PS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=jA(this,t)}static fi(e,t){return new Gu(e,t)}di(){}Ai(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return B.forEach(this.yi,(s,o)=>this.Dr(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(e,h=>this.Dr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Ce.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),B.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cu(e.data.value)),t}Dr(e,t,s){return B.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ds=s,this.As=o}static Rs(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new uf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Dw()?8:RS(qt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ws(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.bs(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new JA;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.fs)return this.Ds(e,t,h,m.size)})}).next(()=>u.result)}Ds(e,t,s,o){return s.documentReadCount<this.gs?(oo()<=Oe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),B.resolve()):(oo()<=Oe.DEBUG&&se("QueryEngine","Query:",ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(oo()<=Oe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dr(t))):B.resolve())}ws(e,t){if(Bg(t))return B.resolve(null);let s=dr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Sd(t,null,"F"),s=dr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ys.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.vs(t,m);return this.Cs(t,_,h,g.readTime)?this.ws(e,Sd(t,null,"F")):this.Fs(e,_,t,g)}))})))}bs(e,t,s,o){return Bg(t)||o.isEqual(Ce.min())?B.resolve(null):this.ys.getDocuments(e,s).next(u=>{const h=this.vs(t,u);return this.Cs(t,h,s,o)?B.resolve(null):(oo()<=Oe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ao(t)),this.Fs(e,h,t,wS(o,ja)).next(m=>m))})}vs(e,t){let s=new Tt(K_(e));return t.forEach((o,u)=>{ac(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return oo()<=Oe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",ao(t)),this.ys.getDocumentsMatchingQuery(e,t,Si.min(),s)}Fs(e,t,s,o){return this.ys.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="LocalStore",e1=3e8;class t1{constructor(e,t,s,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new at(xe),this.Os=new gs(u=>Jd(u),Zd),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $A(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function n1(r,e,t,s){return new t1(r,e,t,s)}async function gv(r,e){const t=Pe(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Le();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({ks:_,removedBatchIds:h,addedBatchIds:m}))})})}function r1(r,e){const t=Pe(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,g,_,w){const R=_.batch,C=R.keys();let j=B.resolve();return C.forEach(q=>{j=j.next(()=>w.getEntry(g,q)).next(J=>{const H=_.docVersions.get(q);Ge(H!==null,48541),J.version.compareTo(H)<0&&(R.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),w.addEntry(J)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,R))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Le();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function yv(r){const e=Pe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function i1(r,e){const t=Pe(r),s=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const m=[];e.targetChanges.forEach((w,R)=>{const C=o.get(R);if(!C)return;m.push(t.Ti.removeMatchingKeys(u,w.removedDocuments,R).next(()=>t.Ti.addMatchingKeys(u,w.addedDocuments,R)));let j=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?j=j.withResumeToken(Mt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(R,j),function(J,H,Ee){return J.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=e1?!0:Ee.addedDocuments.size+Ee.modifiedDocuments.size+Ee.removedDocuments.size>0}(C,j,w)&&m.push(t.Ti.updateTargetData(u,j))});let g=br(),_=Le();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(s1(u,h,e.documentUpdates).next(w=>{g=w.qs,_=w.Qs})),!s.isEqual(Ce.min())){const w=t.Ti.getLastRemoteSnapshotVersion(u).next(R=>t.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return B.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.xs=o,u))}function s1(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=br();return t.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ce.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):se(cf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{qs:h,Qs:o}})}function o1(r,e){const t=Pe(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Qd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function a1(r,e){const t=Pe(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ti.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Ti.allocateTargetId(s).next(h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function kd(r,e,t){const s=Pe(r),o=s.xs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Do(h))throw h;se(cf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.xs=s.xs.remove(e),s.Os.delete(o.target)}function ty(r,e,t){const s=Pe(r);let o=Ce.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const R=Pe(g),C=R.Os.get(w);return C!==void 0?B.resolve(R.xs.get(C)):R.Ti.getTargetData(_,w)}(s,h,dr(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.Ms.getDocumentsMatchingQuery(h,e,t?o:Ce.min(),t?u:Le())).next(m=>(l1(s,KS(e),m),{documents:m,$s:u})))}function l1(r,e,t){let s=r.Ns.get(e)||Ce.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Ns.set(e,s)}class ny{constructor(){this.activeTargetIds=ZS()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u1{constructor(){this.xo=new ny,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ny,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="ConnectivityMonitor";class iy{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){se(ry,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){se(ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu=null;function Nd(){return wu===null?wu=function(){return 268435456+Math.round(2147483648*Math.random())}():wu++,"0x"+wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="RestConnection",h1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class d1{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===zu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(e,t,s,o,u){const h=Nd(),m=this.jo(e,t.toUriEncodedString());se(od,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(g,o,u);const{host:_}=new URL(m),w=Ro(_);return this.Jo(e,m,g,s,w).then(R=>(se(od,`Received RPC '${e}' ${h}: `,R),R),R=>{throw _o(od,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R})}Yo(e,t,s,o,u,h){return this.zo(e,t,s,o,u)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+No}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}jo(e,t){const s=h1[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class p1 extends d1{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Nd();return new Promise((m,g)=>{const _=new E_;_.setWithCredentials(!0),_.listenOnce(w_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case Ru.NO_ERROR:const R=_.getResponseJson();se(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case Ru.TIMEOUT:se(Bt,`RPC '${e}' ${h} timed out`),g(new le($.DEADLINE_EXCEEDED,"Request time out"));break;case Ru.HTTP_ERROR:const C=_.getStatus();if(se(Bt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const q=j==null?void 0:j.error;if(q&&q.status&&q.message){const J=function(Ee){const ce=Ee.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ce)>=0?ce:$.UNKNOWN}(q.status);g(new le(J,q.message))}else g(new le($.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new le($.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{h_:e,streamId:h,P_:_.getLastErrorCode(),T_:_.getLastError()})}}finally{se(Bt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);se(Bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}I_(e,t,s){const o=Nd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=S_(),m=I_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Ho(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");se(Bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const R=h.createWebChannel(w,g);this.E_(R);let C=!1,j=!1;const q=new f1({Zo:H=>{j?se(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(C||(se(Bt,`Opening RPC '${e}' stream ${o} transport.`),R.open(),C=!0),se(Bt,`RPC '${e}' stream ${o} sending:`,H),R.send(H))},Xo:()=>R.close()}),J=(H,Ee,ce)=>{H.listen(Ee,me=>{try{ce(me)}catch(Se){setTimeout(()=>{throw Se},0)}})};return J(R,Ca.EventType.OPEN,()=>{j||(se(Bt,`RPC '${e}' stream ${o} transport opened.`),q.__())}),J(R,Ca.EventType.CLOSE,()=>{j||(j=!0,se(Bt,`RPC '${e}' stream ${o} transport closed`),q.u_(),this.d_(R))}),J(R,Ca.EventType.ERROR,H=>{j||(j=!0,_o(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),q.u_(new le($.UNAVAILABLE,"The operation could not be completed")))}),J(R,Ca.EventType.MESSAGE,H=>{var Ee;if(!j){const ce=H.data[0];Ge(!!ce,16349);const me=ce,Se=(me==null?void 0:me.error)||((Ee=me[0])===null||Ee===void 0?void 0:Ee.error);if(Se){se(Bt,`RPC '${e}' stream ${o} received error:`,Se);const qe=Se.status;let Re=function(S){const k=gt[S];if(k!==void 0)return iv(k)}(qe),D=Se.message;Re===void 0&&(Re=$.INTERNAL,D="Unknown error status: "+qe+" with message "+Se.message),j=!0,q.u_(new le(Re,D)),R.close()}else se(Bt,`RPC '${e}' stream ${o} received:`,ce),q.c_(ce)}}),J(m,T_.STAT_EVENT,H=>{H.stat===yd.PROXY?se(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===yd.NOPROXY&&se(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.a_()},0),q}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function ad(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(r){return new _A(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t,s=1e3,o=1.5,u=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="PersistentStream";class vv{constructor(e,t,s,o,u,h,m,g){this.xi=e,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new _v(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===t&&this.z_(s,o)},s=>{e(()=>{const o=new le($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return se(sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(se(sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m1 extends vv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=wA(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ce.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ce.min():h.readTime?fr(h.readTime):Ce.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=Pd(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=Td(g)?{documents:SA(u,g)}:{query:AA(u,g).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=av(u,h.resumeToken);const _=Ad(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ce.min())>0){m.readTime=Ku(u,h.snapshotVersion.toTimestamp());const _=Ad(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=CA(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=Pd(this.serializer),t.removeTarget=e,this.Q_(t)}}class g1 extends vv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=IA(e.writeResults,e.commitTime),s=fr(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=Pd(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>TA(this.serializer,s))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{}class _1 extends y1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.zo(e,Rd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new le($.UNKNOWN,u.toString())})}Yo(e,t,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Yo(e,Rd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le($.UNKNOWN,h.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class v1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Lr(t),this.ua=!1):se("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RemoteStore";class E1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No(h=>{s.enqueueAndForget(async()=>{ys(this)&&(se(ps,"Restarting streams for network reachability change."),await async function(g){const _=Pe(g);_.da.add(4),await Za(_),_.Va.set("Unknown"),_.da.delete(4),await dc(_)}(this))})}),this.Va=new v1(s,o)}}async function dc(r){if(ys(r))for(const e of r.Aa)await e(!0)}async function Za(r){for(const e of r.Aa)await e(!1)}function Ev(r,e){const t=Pe(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),pf(t)?ff(t):Vo(t).N_()&&df(t,e))}function hf(r,e){const t=Pe(r),s=Vo(t);t.Ea.delete(e),s.N_()&&wv(t,e),t.Ea.size===0&&(s.N_()?s.k_():ys(t)&&t.Va.set("Unknown"))}function df(r,e){if(r.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(r).Z_(e)}function wv(r,e){r.ma.Ke(e),Vo(r).X_(e)}function ff(r){r.ma=new pA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r.Ea.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),Vo(r).start(),r.Va.ca()}function pf(r){return ys(r)&&!Vo(r).O_()&&r.Ea.size>0}function ys(r){return Pe(r).da.size===0}function Tv(r){r.ma=void 0}async function w1(r){r.Va.set("Online")}async function T1(r){r.Ea.forEach((e,t)=>{df(r,e)})}async function I1(r,e){Tv(r),pf(r)?(r.Va.Pa(e),ff(r)):r.Va.set("Unknown")}async function S1(r,e,t){if(r.Va.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.ma.removeTarget(m))}(r,e)}catch(s){se(ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qu(r,s)}else if(e instanceof Nu?r.ma.Xe(e):e instanceof sv?r.ma.ot(e):r.ma.nt(e),!t.isEqual(Ce.min()))try{const s=await yv(r.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.ma.It(h);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ea.get(_);w&&u.Ea.set(_,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,_)=>{const w=u.Ea.get(g);if(!w)return;u.Ea.set(g,w.withResumeToken(Mt.EMPTY_BYTE_STRING,w.snapshotVersion)),wv(u,g);const R=new gi(w.target,g,_,w.sequenceNumber);df(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(r,t)}catch(s){se(ps,"Failed to raise snapshot:",s),await Qu(r,s)}}async function Qu(r,e,t){if(!Do(e))throw e;r.da.add(1),await Za(r),r.Va.set("Offline"),t||(t=()=>yv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{se(ps,"Retrying IndexedDB access"),await t(),r.da.delete(1),await dc(r)})}function Iv(r,e){return e().catch(t=>Qu(r,t,e))}async function fc(r){const e=Pe(r),t=Pi(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Qd;for(;A1(e);)try{const o=await o1(e.localStore,s);if(o===null){e.Ia.length===0&&t.k_();break}s=o.batchId,R1(e,o)}catch(o){await Qu(e,o)}Sv(e)&&Av(e)}function A1(r){return ys(r)&&r.Ia.length<10}function R1(r,e){r.Ia.push(e);const t=Pi(r);t.N_()&&t.ea&&t.ta(e.mutations)}function Sv(r){return ys(r)&&!Pi(r).O_()&&r.Ia.length>0}function Av(r){Pi(r).start()}async function C1(r){Pi(r).ia()}async function P1(r){const e=Pi(r);for(const t of r.Ia)e.ta(t.mutations)}async function k1(r,e,t){const s=r.Ia.shift(),o=rf.from(s,e,t);await Iv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await fc(r)}async function N1(r,e){e&&Pi(r).ea&&await async function(s,o){if(function(h){return dA(h)&&h!==$.ABORTED}(o.code)){const u=s.Ia.shift();Pi(s).L_(),await Iv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await fc(s)}}(r,e),Sv(r)&&Av(r)}async function oy(r,e){const t=Pe(r);t.asyncQueue.verifyOperationInProgress(),se(ps,"RemoteStore received new credentials");const s=ys(t);t.da.add(3),await Za(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await dc(t)}async function x1(r,e){const t=Pe(r);e?(t.da.delete(2),await dc(t)):e||(t.da.add(2),await Za(t),t.Va.set("Unknown"))}function Vo(r){return r.fa||(r.fa=function(t,s,o){const u=Pe(t);return u.oa(),new m1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:w1.bind(null,r),n_:T1.bind(null,r),i_:I1.bind(null,r),Y_:S1.bind(null,r)}),r.Aa.push(async e=>{e?(r.fa.L_(),pf(r)?ff(r):r.Va.set("Unknown")):(await r.fa.stop(),Tv(r))})),r.fa}function Pi(r){return r.ga||(r.ga=function(t,s,o){const u=Pe(t);return u.oa(),new g1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:C1.bind(null,r),i_:N1.bind(null,r),na:P1.bind(null,r),ra:k1.bind(null,r)}),r.Aa.push(async e=>{e?(r.ga.L_(),await fc(r)):(await r.ga.stop(),r.Ia.length>0&&(se(ps,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new mf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gf(r,e){if(Lr("AsyncQueue",`${e}: ${r}`),Do(r))return new le($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static emptySet(e){return new mo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=Pa(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new mo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.pa=new at(ge.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):Ie(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class So{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new So(e,t,mo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class V1{constructor(){this.queries=ly(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Pe(t),u=o.queries;o.queries=ly(),u.forEach((h,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new le($.ABORTED,"Firestore shutting down"))}}function ly(){return new gs(r=>W_(r),oc)}async function Rv(r,e){const t=Pe(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Da()&&e.va()&&(s=2):(u=new D1,s=e.va()?0:1);try{switch(s){case 0:u.ba=await t.onListen(o,!0);break;case 1:u.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=gf(h,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.Fa(t.onlineState),u.ba&&e.Ma(u.ba)&&yf(t)}async function Cv(r,e){const t=Pe(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.va()?0:1:!u.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function O1(r,e){const t=Pe(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Ma(o)&&(s=!0);h.ba=o}}s&&yf(t)}function L1(r,e,t){const s=Pe(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function yf(r){r.Ca.forEach(e=>{e.next()})}var xd,uy;(uy=xd||(xd={})).xa="default",uy.Cache="cache";class Pv{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new So(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==xd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.key=e}}class Nv{constructor(e){this.key=e}}class b1{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Le(),this.mutatedKeys=Le(),this.Za=K_(e),this.Xa=new mo(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new ay,o=t?t.Xa:this.Xa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,R)=>{const C=o.get(w),j=ac(this.query,R)?R:null,q=!!C&&this.mutatedKeys.has(C.key),J=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let H=!1;C&&j?C.data.isEqual(j.data)?q!==J&&(s.track({type:3,doc:j}),H=!0):this.ru(C,j)||(s.track({type:2,doc:j}),H=!0,(g&&this.Za(j,g)>0||_&&this.Za(j,_)<0)&&(m=!0)):!C&&j?(s.track({type:0,doc:j}),H=!0):C&&!j&&(s.track({type:1,doc:C}),H=!0,(g||_)&&(m=!0)),H&&(j?(h=h.add(j),u=J?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Xa:h,nu:s,Cs:m,mutatedKeys:u}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const h=e.nu.wa();h.sort((w,R)=>function(j,q){const J=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Vt:H})}};return J(j)-J(q)}(w.type,R.type)||this.Za(w.doc,R.doc)),this.iu(s),o=o!=null&&o;const m=t&&!o?this.su():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Ja;return this.Ja=g,h.length!==0||_?{snapshot:new So(this.query,e.Xa,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:m}:{ou:m}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ay,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Le(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new Nv(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new kv(s))}),t}au(e){this.Ha=e.$s,this.Ya=Le();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return So.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const _f="SyncEngine";class M1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class F1{constructor(e){this.key=e,this.cu=!1}}class U1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.lu={},this.hu=new gs(m=>W_(m),oc),this.Pu=new Map,this.Tu=new Set,this.Iu=new at(ge.comparator),this.Eu=new Map,this.du=new af,this.Au={},this.Ru=new Map,this.Vu=Io.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function j1(r,e,t=!0){const s=bv(r);let o;const u=s.hu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await xv(s,e,t,!0),o}async function z1(r,e){const t=bv(r);await xv(t,e,!0,!1)}async function xv(r,e,t,s){const o=await a1(r.localStore,dr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await B1(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Ev(r.remoteStore,o),m}async function B1(r,e,t,s,o){r.fu=(R,C,j)=>async function(J,H,Ee,ce){let me=H.view.tu(Ee);me.Cs&&(me=await ty(J.localStore,H.query,!1).then(({documents:D})=>H.view.tu(D,me)));const Se=ce&&ce.targetChanges.get(H.targetId),qe=ce&&ce.targetMismatches.get(H.targetId)!=null,Re=H.view.applyChanges(me,J.isPrimaryClient,Se,qe);return hy(J,H.targetId,Re.ou),Re.snapshot}(r,R,C,j);const u=await ty(r.localStore,e,!0),h=new b1(e,u.$s),m=h.tu(u.documents),g=Ja.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);hy(r,t,_.ou);const w=new M1(e,t,h);return r.hu.set(e,w),r.Pu.has(t)?r.Pu.get(t).push(e):r.Pu.set(t,[e]),_.snapshot}async function $1(r,e,t){const s=Pe(r),o=s.hu.get(e),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter(h=>!oc(h,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await kd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&hf(s.remoteStore,o.targetId),Dd(s,o.targetId)}).catch(xo)):(Dd(s,o.targetId),await kd(s.localStore,o.targetId,!0))}async function H1(r,e){const t=Pe(r),s=t.hu.get(e),o=t.Pu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),hf(t.remoteStore,s.targetId))}async function q1(r,e,t){const s=J1(r);try{const o=await function(h,m){const g=Pe(h),_=wt.now(),w=m.reduce((j,q)=>j.add(q.key),Le());let R,C;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let q=br(),J=Le();return g.Bs.getEntries(j,w).next(H=>{q=H,q.forEach((Ee,ce)=>{ce.isValidDocument()||(J=J.add(Ee))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,q)).next(H=>{R=H;const Ee=[];for(const ce of m){const me=aA(ce,R.get(ce.key).overlayedDocument);me!=null&&Ee.push(new Di(ce.key,me,F_(me.value.mapValue),Qn.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,Ee,m)}).next(H=>{C=H;const Ee=H.applyToLocalDocumentSet(R,J);return g.documentOverlayCache.saveOverlays(j,H.batchId,Ee)})}).then(()=>({batchId:C.batchId,changes:Q_(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let _=h.Au[h.currentUser.toKey()];_||(_=new at(xe)),_=_.insert(m,g),h.Au[h.currentUser.toKey()]=_}(s,o.batchId,t),await el(s,o.changes),await fc(s.remoteStore)}catch(o){const u=gf(o,"Failed to persist write");t.reject(u)}}async function Dv(r,e){const t=Pe(r);try{const s=await i1(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.cu=!0:o.modifiedDocuments.size>0?Ge(h.cu,14607):o.removedDocuments.size>0&&(Ge(h.cu,42227),h.cu=!1))}),await el(t,s,e)}catch(s){await xo(s)}}function cy(r,e,t){const s=Pe(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.hu.forEach((u,h)=>{const m=h.view.Fa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Pe(h);g.onlineState=m;let _=!1;g.queries.forEach((w,R)=>{for(const C of R.Sa)C.Fa(m)&&(_=!0)}),_&&yf(g)}(s.eventManager,e),o.length&&s.lu.Y_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function W1(r,e,t){const s=Pe(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new at(ge.comparator);h=h.insert(u,Ht.newNoDocument(u,Ce.min()));const m=Le().add(u),g=new cc(Ce.min(),new Map,new at(xe),h,m);await Dv(s,g),s.Iu=s.Iu.remove(u),s.Eu.delete(e),vf(s)}else await kd(s.localStore,e,!1).then(()=>Dd(s,e,t)).catch(xo)}async function K1(r,e){const t=Pe(r),s=e.batch.batchId;try{const o=await r1(t.localStore,e);Ov(t,s,null),Vv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await el(t,o)}catch(o){await xo(o)}}async function G1(r,e,t){const s=Pe(r);try{const o=await function(h,m){const g=Pe(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next(R=>(Ge(R!==null,37113),w=R.keys(),g.mutationQueue.removeMutationBatch(_,R))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);Ov(s,e,t),Vv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await el(s,o)}catch(o){await xo(o)}}function Vv(r,e){(r.Ru.get(e)||[]).forEach(t=>{t.resolve()}),r.Ru.delete(e)}function Ov(r,e,t){const s=Pe(r);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Au[s.currentUser.toKey()]=o}}function Dd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Pu.get(e))r.hu.delete(s),t&&r.lu.gu(s,t);r.Pu.delete(e),r.isPrimaryClient&&r.du.Hr(e).forEach(s=>{r.du.containsKey(s)||Lv(r,s)})}function Lv(r,e){r.Tu.delete(e.path.canonicalString());const t=r.Iu.get(e);t!==null&&(hf(r.remoteStore,t),r.Iu=r.Iu.remove(e),r.Eu.delete(t),vf(r))}function hy(r,e,t){for(const s of t)s instanceof kv?(r.du.addReference(s.key,e),Q1(r,s)):s instanceof Nv?(se(_f,"Document no longer in limbo: "+s.key),r.du.removeReference(s.key,e),r.du.containsKey(s.key)||Lv(r,s.key)):Ie(19791,{pu:s})}function Q1(r,e){const t=e.key,s=t.path.canonicalString();r.Iu.get(t)||r.Tu.has(s)||(se(_f,"New document in limbo: "+t),r.Tu.add(s),vf(r))}function vf(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const e=r.Tu.values().next().value;r.Tu.delete(e);const t=new ge(nt.fromString(e)),s=r.Vu.next();r.Eu.set(s,new F1(t)),r.Iu=r.Iu.insert(t,s),Ev(r.remoteStore,new gi(dr(ef(t.path)),s,"TargetPurposeLimboResolution",rc.le))}}async function el(r,e,t){const s=Pe(r),o=[],u=[],h=[];s.hu.isEmpty()||(s.hu.forEach((m,g)=>{h.push(s.fu(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const R=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,R?"current":"not-current")}if(_){o.push(_);const R=uf.Rs(g.targetId,_);u.push(R)}}))}),await Promise.all(h),s.lu.Y_(o),await async function(g,_){const w=Pe(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>B.forEach(_,C=>B.forEach(C.ds,j=>w.persistence.referenceDelegate.addReference(R,C.targetId,j)).next(()=>B.forEach(C.As,j=>w.persistence.referenceDelegate.removeReference(R,C.targetId,j)))))}catch(R){if(!Do(R))throw R;se(cf,"Failed to update sequence numbers: "+R)}for(const R of _){const C=R.targetId;if(!R.fromCache){const j=w.xs.get(C),q=j.snapshotVersion,J=j.withLastLimboFreeSnapshotVersion(q);w.xs=w.xs.insert(C,J)}}}(s.localStore,u))}async function Y1(r,e){const t=Pe(r);if(!t.currentUser.isEqual(e)){se(_f,"User change. New user:",e.toKey());const s=await gv(t.localStore,e);t.currentUser=e,function(u,h){u.Ru.forEach(m=>{m.forEach(g=>{g.reject(new le($.CANCELLED,h))})}),u.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await el(t,s.ks)}}function X1(r,e){const t=Pe(r),s=t.Eu.get(e);if(s&&s.cu)return Le().add(s.key);{let o=Le();const u=t.Pu.get(e);if(!u)return o;for(const h of u){const m=t.hu.get(h);o=o.unionWith(m.view.eu)}return o}}function bv(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W1.bind(null,e),e.lu.Y_=O1.bind(null,e.eventManager),e.lu.gu=L1.bind(null,e.eventManager),e}function J1(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=K1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G1.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return n1(this.persistence,new ZA,e.initialUser,this.serializer)}Su(e){return new mv(lf.fi,this.serializer)}bu(e){return new u1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class Z1 extends Yu{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Ge(this.persistence.referenceDelegate instanceof Gu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new FA(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new mv(s=>Gu.fi(s,t),this.serializer)}}class Vd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y1.bind(null,this.syncEngine),await x1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V1}()}createDatastore(e){const t=hc(e.databaseInfo.databaseId),s=function(u){return new p1(u)}(e.databaseInfo);return function(u,h,m,g){return new _1(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new E1(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>cy(this.syncEngine,t,0),function(){return iy.C()?new iy:new c1}())}createSyncEngine(e,t){return function(o,u,h,m,g,_,w){const R=new U1(o,u,h,m,g,_);return w&&(R.mu=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Pe(o);se(ps,"RemoteStore shutting down."),u.da.add(5),await Za(u),u.Ra.shutdown(),u.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vd.provider={build:()=>new Vd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="FirestoreClient";class eR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=P_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{se(ki,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(se(ki,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=gf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ld(r,e){r.asyncQueue.verifyOperationInProgress(),se(ki,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await gv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function dy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await tR(r);se(ki,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>oy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>oy(e.remoteStore,o)),r._onlineComponents=e}async function tR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(ki,"Using user provided OfflineComponentProvider");try{await ld(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;_o("Error using user provided cache. Falling back to memory cache: "+t),await ld(r,new Yu)}}else se(ki,"Using default OfflineComponentProvider"),await ld(r,new Z1(void 0));return r._offlineComponents}async function Fv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(ki,"Using user provided OnlineComponentProvider"),await dy(r,r._uninitializedComponentsProvider._online)):(se(ki,"Using default OnlineComponentProvider"),await dy(r,new Vd))),r._onlineComponents}function nR(r){return Fv(r).then(e=>e.syncEngine)}async function Uv(r){const e=await Fv(r),t=e.eventManager;return t.onListen=j1.bind(null,e.syncEngine),t.onUnlisten=$1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=z1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=H1.bind(null,e.syncEngine),t}function rR(r,e,t={}){const s=new Dr;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new Mv({next:C=>{w.xu(),h.enqueueAndForget(()=>Cv(u,R));const j=C.docs.has(m);!j&&C.fromCache?_.reject(new le($.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&C.fromCache&&g&&g.source==="server"?_.reject(new le($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),R=new Pv(ef(m.path),w,{includeMetadataChanges:!0,Qa:!0});return Rv(u,R)}(await Uv(r),r.asyncQueue,e,t,s)),s.promise}function iR(r,e,t={}){const s=new Dr;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new Mv({next:C=>{w.xu(),h.enqueueAndForget(()=>Cv(u,R)),C.fromCache&&g.source==="server"?_.reject(new le($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),R=new Pv(m,w,{includeMetadataChanges:!0,Qa:!0});return Rv(u,R)}(await Uv(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(r,e,t){if(!t)throw new le($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function sR(r,e,t,s){if(e===!0&&s===!0)throw new le($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function py(r){if(!ge.isDocumentKey(r))throw new le($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function my(r){if(ge.isDocumentKey(r))throw new le($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function pc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ie(12329,{type:typeof r})}function mr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new le($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pc(r);throw new le($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="firestore.googleapis.com",gy=!0;class yy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new le($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bv,this.ssl=gy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:gy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bA)throw new le($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new dS;switch(s.type){case"firstParty":return new gS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=fy.get(t);s&&(se("ComponentProvider","Removing Datastore"),fy.delete(t),s.terminate())}(this),Promise.resolve()}}function oR(r,e,t,s={}){var o;r=mr(r,mc);const u=Ro(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Dy(`https://${g}`),Vy("Firestore",!0)),h.host!==Bv&&h.host!==g&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!Ii(_,m)&&(r._setSettings(_),s.mockUserToken)){let w,R;if(typeof s.mockUserToken=="string")w=s.mockUserToken,R=$t.MOCK_USER;else{w=Iw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new le($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new $t(C)}r._authCredentials=new fS(new R_(w,R))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oo(this.firestore,e,this._query)}}class Yt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class Ti extends Oo{constructor(e,t,s){super(e,t,ef(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new ge(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function aR(r,e,...t){if(r=Nt(r),zv("collection","path",e),r instanceof mc){const s=nt.fromString(e,...t);return my(s),new Ti(r,null,s)}{if(!(r instanceof Yt||r instanceof Ti))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(nt.fromString(e,...t));return my(s),new Ti(r.firestore,null,s)}}function lR(r,e,...t){if(r=Nt(r),arguments.length===1&&(e=P_.newId()),zv("doc","path",e),r instanceof mc){const s=nt.fromString(e,...t);return py(s),new Yt(r,null,new ge(s))}{if(!(r instanceof Yt||r instanceof Ti))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(nt.fromString(e,...t));return py(s),new Yt(r.firestore,r instanceof Ti?r.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="AsyncQueue";class vy{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new _v(this,"async_queue_retry"),this.rc=()=>{const s=ad();s&&se(_y,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=ad();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=ad();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Dr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Do(e))throw e;se(_y,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,Lr("INTERNAL UNHANDLED ERROR: ",Ey(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=mf.createAndSchedule(this,e,t,s,u=>this.uc(u));return this.Zu.push(o),o}oc(){this.Xu&&Ie(47125,{cc:Ey(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Ey(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Lo extends mc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new vy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vy(e),this._firestoreClient=void 0,await e}}}function uR(r,e){const t=typeof r=="object"?r:My(),s=typeof r=="string"?r:zu,o=Fd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=ww("firestore");u&&oR(o,...u)}return o}function Ef(r){if(r._terminated)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||cR(r),r._firestoreClient}function cR(r){var e,t,s;const o=r._freezeSettings(),u=function(m,g,_,w){return new xS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,jv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new eR(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ao(Mt.fromBase64String(e))}catch(t){throw new le($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ao(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=/^__.*__$/;class dR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}class $v{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Di(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ic:r})}}class _c{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new _c(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Vc(e),o}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Xu(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Hv(this.Ic)&&hR.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class fR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||hc(e)}bc(e,t,s,o=!1){return new _c({Ic:e,methodName:t,wc:s,path:bt.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function If(r){const e=r._freezeSettings(),t=hc(r._databaseId);return new fR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function pR(r,e,t,s,o,u={}){const h=r.bc(u.merge||u.mergeFields?2:0,e,t,o);Af("Data must be an object, but it was:",h,s);const m=qv(s,h);let g,_;if(u.merge)g=new yn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const C=Od(e,R,t);if(!h.contains(C))throw new le($.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Kv(w,C)||w.push(C)}g=new yn(w),_=h.fieldTransforms.filter(R=>g.covers(R.field))}else g=null,_=h.fieldTransforms;return new dR(new an(m),g,_)}class vc extends yc{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function mR(r,e,t){return new _c({Ic:3,wc:e.settings.wc,methodName:r._methodName,Rc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sf extends yc{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=mR(this,e,!0),s=this.Sc.map(u=>bo(u,t)),o=new To(s);return new rA(e.path,o)}isEqual(e){return e instanceof Sf&&Ii(this.Sc,e.Sc)}}function gR(r,e,t,s){const o=r.bc(1,e,t);Af("Data must be an object, but it was:",o,s);const u=[],h=an.empty();xi(s,(g,_)=>{const w=Rf(e,g,t);_=Nt(_);const R=o.mc(w);if(_ instanceof vc)u.push(w);else{const C=bo(_,R);C!=null&&(u.push(w),h.set(w,C))}});const m=new yn(u);return new $v(h,m,o.fieldTransforms)}function yR(r,e,t,s,o,u){const h=r.bc(1,e,t),m=[Od(e,s,t)],g=[o];if(u.length%2!=0)throw new le($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(Od(e,u[C])),g.push(u[C+1]);const _=[],w=an.empty();for(let C=m.length-1;C>=0;--C)if(!Kv(_,m[C])){const j=m[C];let q=g[C];q=Nt(q);const J=h.mc(j);if(q instanceof vc)_.push(j);else{const H=bo(q,J);H!=null&&(_.push(j),w.set(j,H))}}const R=new yn(_);return new $v(w,R,h.fieldTransforms)}function _R(r,e,t,s=!1){return bo(t,r.bc(s?4:3,e))}function bo(r,e){if(Wv(r=Nt(r)))return Af("Unsupported field value:",e,r),qv(r,e);if(r instanceof yc)return function(s,o){if(!Hv(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=bo(m,o.fc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Nt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return eA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=wt.fromDate(s);return{timestampValue:Ku(o.serializer,u)}}if(s instanceof wt){const u=new wt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ku(o.serializer,u)}}if(s instanceof wf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ao)return{bytesValue:av(o.serializer,s._byteString)};if(s instanceof Yt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.gc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:of(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Tf)return function(h,m){return{mapValue:{fields:{[b_]:{stringValue:M_},[Bu]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.gc("VectorValues must only contain numeric values.");return tf(m.serializer,_)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${pc(s)}`)}(r,e)}function qv(r,e){const t={};return N_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(r,(s,o)=>{const u=bo(o,e.Ac(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Wv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof wt||r instanceof wf||r instanceof Ao||r instanceof Yt||r instanceof yc||r instanceof Tf)}function Af(r,e,t){if(!Wv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=pc(t);throw s==="an object"?e.gc(r+" a custom object"):e.gc(r+" "+s)}}function Od(r,e,t){if((e=Nt(e))instanceof gc)return e._internalPath;if(typeof e=="string")return Rf(r,e);throw Xu("Field path arguments must be of type string or ",r,!1,void 0,t)}const vR=new RegExp("[~\\*/\\[\\]]");function Rf(r,e,t){if(e.search(vR)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new gc(...e.split("."))._internalPath}catch{throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Xu(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new le($.INVALID_ARGUMENT,m+r+g)}function Kv(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ER(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ER extends Gv{data(){return super.data()}}function Cf(r,e){return typeof e=="string"?Rf(r,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new le($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pf{}class TR extends Pf{}function IR(r,e,...t){let s=[];e instanceof Pf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof kf).length,m=u.filter(g=>g instanceof Ec).length;if(h>1||h>0&&m>0)throw new le($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Ec extends TR{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ec(e,t,s)}_apply(e){const t=this._parse(e);return Qv(e._query,t),new Oo(e.firestore,e.converter,Id(e._query,t))}_parse(e){const t=If(e.firestore);return function(u,h,m,g,_,w,R){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new le($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Ty(R,w);const q=[];for(const J of R)q.push(wy(g,u,J));C={arrayValue:{values:q}}}else C=wy(g,u,R)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Ty(R,w),C=_R(m,h,R,w==="in"||w==="not-in");return yt.create(_,w,C)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function SR(r,e,t){const s=e,o=Cf("where",r);return Ec._create(o,s,t)}class kf extends Pf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new kf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Xn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)Qv(h,g),h=Id(h,g)}(e._query,t),new Oo(e.firestore,e.converter,Id(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wy(r,e,t){if(typeof(t=Nt(t))=="string"){if(t==="")throw new le($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!q_(e)&&t.indexOf("/")!==-1)throw new le($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(nt.fromString(t));if(!ge.isDocumentKey(s))throw new le($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bg(r,new ge(s))}if(t instanceof Yt)return bg(r,t._key);throw new le($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc(t)}.`)}function Ty(r,e){if(!Array.isArray(r)||r.length===0)throw new le($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qv(r,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new le($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AR{convertValue(e,t="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return xi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Bu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>ft(h.doubleValue));return new Tf(u)}convertGeoPoint(e){return new wf(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=sc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new wt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=nt.fromString(e);Ge(fv(s),9688,{name:e});const o=new Ba(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(t)||Lr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yv extends Gv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class xu extends Yv{data(e={}){return super.data(e)}}class CR{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Na(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new xu(this._firestore,this._userDataWriter,s.key,s,new Na(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:PR(m.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function PR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(r){r=mr(r,Yt);const e=mr(r.firestore,Lo);return rR(Ef(e),r._key).then(t=>OR(e,r,t))}class Xv extends AR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ao(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,t)}}function NR(r){r=mr(r,Oo);const e=mr(r.firestore,Lo),t=Ef(e),s=new Xv(e);return wR(r._query),iR(t,r._query).then(o=>new CR(e,s,r,o))}function xR(r,e,t){r=mr(r,Yt);const s=mr(r.firestore,Lo),o=RR(r.converter,e,t);return Nf(s,[pR(If(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Qn.none())])}function DR(r,e,t,...s){r=mr(r,Yt);const o=mr(r.firestore,Lo),u=If(o);let h;return h=typeof(e=Nt(e))=="string"||e instanceof gc?yR(u,"updateDoc",r._key,e,t,s):gR(u,"updateDoc",r._key,e),Nf(o,[h.toMutation(r._key,Qn.exists(!0))])}function VR(r){return Nf(mr(r.firestore,Lo),[new nf(r._key,Qn.none())])}function Nf(r,e){return function(s,o){const u=new Dr;return s.asyncQueue.enqueueAndForget(async()=>q1(await nR(s),o,u)),u.promise}(Ef(r),e)}function OR(r,e,t){const s=t.docs.get(e._key),o=new Xv(r);return new Yv(r,o,e._key,s,new Na(t.hasPendingWrites,t.fromCache),e.converter)}function LR(...r){return new Sf("arrayUnion",r)}(function(e,t=!0){(function(o){No=o})(Co),go(new hs("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Lo(new pS(s.getProvider("auth-internal")),new yS(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new le($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(_.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),vi(Sg,Ag,e),vi(Sg,Ag,"esm2017")})();const bR=({message:r,type:e})=>{if(!r)return null;const t=e==="success"?"bg-green-100":"bg-red-100",s=e==="success"?"text-green-700":"text-red-700";return Q.jsx("div",{className:`p-3 rounded-md ${t} ${s} my-4 message-box-fade show`,children:r})},MR=({isOpen:r,message:e,onConfirm:t,onCancel:s})=>r?Q.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:Q.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-xl max-w-sm w-full space-y-4",children:[Q.jsx("p",{className:"text-lg font-semibold text-gray-800",children:e}),Q.jsxs("div",{className:"flex justify-end space-x-3",children:[Q.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105",children:"Cancel"}),Q.jsx("button",{onClick:t,className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 transform hover:scale-105",children:"Confirm"})]})]})}):null,FR=()=>{const{db:r,auth:e,userId:t,appId:s,loadingFirebase:o,message:u,showAdminMessage:h,collection:m,doc:g,getDoc:_,getDocs:w,setDoc:R,updateDoc:C,deleteDoc:j,query:q,where:J,arrayUnion:H}=Be.useContext(Jv);console.log("AdminPanel: CONTEXT ON RENDER:",{db:r,auth:e,userId:t,appId:s,loadingFirebase:o,message:u,showAdminMessage:h});const[Ee,ce]=Be.useState("hospitals"),[me,Se]=Be.useState([]),[qe,Re]=Be.useState([]),[D,T]=Be.useState([]),[S,k]=Be.useState(null),[N,O]=Be.useState(null),[A,ye]=Be.useState(!1),[It,He]=Be.useState(!1),[We,X]=Be.useState(null),[pe,ne]=Be.useState(""),[V,z]=Be.useState(""),[te,ke]=Be.useState(!1),[Ne,Ve]=Be.useState(!1),[be,je]=Be.useState(""),[Ke,ut]=Be.useState(""),_n=Be.useCallback(async(re,oe)=>{if(console.log("checkAdminStatus CALLED:",{uidToCheck:re,dbInstanceReady:!!oe,appIdReady:!!s}),!oe||!s||!re)return console.warn("[AdminAuthCheck] Firebase not ready or UID missing for admin check."),h("Firebase database not ready for admin check or user ID missing.","error"),!1;try{const Y=g(oe,`artifacts/${s}/admins`,re);console.log("Attempting Firestore read for admin status at path:",Y.path);const fe=await _(Y);return console.log("Admin Doc Snap Exists:",fe.exists(),"Admin Doc Data:",fe.data()),fe.exists()}catch(Y){return console.error("[AdminStatus] Error during admin status check:",Y),h(`Error verifying admin status: ${Y.message}.`,"error"),!1}},[s,g,_,h]),ln=Be.useCallback(async re=>{if(!(!r||!s||!re)){ye(!0);try{const oe=m(r,`artifacts/${s}/public/data/hospitals`),fe=(await w(oe)).docs.map(we=>({id:we.id,...we.data()}));Se(fe),h("Hospitals loaded successfully!","success")}catch(oe){console.error("Error fetching hospitals from Firestore:",oe),h(`Error loading hospitals: ${oe.message}`,"error")}finally{ye(!1)}}},[r,s,m,w,h]);Be.useEffect(()=>{e&&r&&t&&o===!1?(console.log("AdminPanel useEffect: Triggering checkAdminStatus for UID:",t),_n(t,r).then(re=>{ke(re),re?ln(re):(Se([]),Re([]),T([]),k(null),O(null),ce("hospitals"),h("Access Denied: Your account is not authorized as an administrator.","error"))})):!e||!r||o===!0?console.log("AdminPanel useEffect: Firebase still loading or not ready (auth:",!!e,"db:",!!r,"loadingFirebase:",o,")"):!t&&o===!1&&(ke(!1),ye(!1),Se([]),Re([]),T([]),k(null),O(null),ce("hospitals"),h("Please log in to access the Admin Panel.","info"))},[e,r,t,o,_n,ln,h]);const un=Be.useCallback(async re=>{if(!r||!s||!te){h("Authorization required to fetch doctors. Please login.","error");return}ye(!0);try{const oe=m(r,`artifacts/${s}/public/data/hospitals/${re}/doctors`),fe=(await w(oe)).docs.map(we=>({id:we.id,...we.data()}));Re(fe),h(`Doctors for ${(S==null?void 0:S.name)||"selected hospital"} loaded successfully!`,"success")}catch(oe){console.error("Error fetching doctors:",oe),h(`Error loading doctors: ${oe.message}`,"error")}finally{ye(!1)}},[r,s,m,w,te,S,h]),kn=Be.useCallback(async(re,oe)=>{if(!r||!s||!te){h("Authorization required to fetch reviews. Please login.","error");return}ye(!0);try{const Y=g(r,`artifacts/${s}/public/data/hospitals/${re}/doctors`,oe),fe=await _(Y);if(fe.exists()){const Ze=(fe.data().ratings||[]).map(St=>({...St,comments:St.comments||[]}));T(Ze),h(`Reviews for ${(N==null?void 0:N.name)||"selected doctor"} loaded successfully!`,"success")}else T([]),h("Doctor not found, no reviews to display.","error")}catch(Y){console.error("Error fetching reviews:",Y),h(`Error loading reviews: ${Y.message}`,"error")}finally{ye(!1)}},[r,s,g,_,te,N,h]),Fr=async re=>{if(re.preventDefault(),!r||!s||!te){h("Not authorized. Please login.","error");return}const oe=re.target,Y=oe.name.value.trim(),fe=oe.location.value.trim();if(!Y||!fe){h("Please fill all fields for hospital.","error");return}ye(!0);try{const we=g(m(r,`artifacts/${s}/public/data/hospitals`));await R(we,{name:Y,location:fe});const Ze=g(m(r,`artifacts/${s}/public/data/hospitals/${we.id}/doctors`),"dummy_placeholder");await R(Ze,{_placeholder:!0}),await j(Ze),h("Hospital added successfully!","success"),oe.reset(),ln(!0)}catch(we){console.error("Error adding hospital:",we),h(`Error adding hospital: ${we.message}.`,"error")}finally{ye(!1)}},Vi=async(re,oe,Y)=>{if(!r||!s||!te){h("Not authorized. Please login.","error");return}ye(!0);try{const fe=g(r,`artifacts/${s}/public/data/hospitals`,re);await C(fe,{name:oe.trim(),location:Y.trim()}),h("Hospital updated successfully!","success"),ln(!0)}catch(fe){console.error("Error updating hospital:",fe),h(`Error updating hospital: ${fe.message}.`,"error")}finally{ye(!1)}},Oi=re=>{He(!0),X(()=>async()=>{if(!r||!s||!te){h("Not authorized. Please login.","error");return}ye(!0);try{const oe=await w(m(r,`artifacts/${s}/public/data/hospitals/${re}/doctors`));for(const fe of oe.docs)await j(fe.ref);const Y=g(r,`artifacts/${s}/public/data/hospitals`,re);await j(Y),h("Hospital and its doctors deleted successfully!","success"),ln(!0)}catch(oe){console.error("Error deleting hospital:",oe),h(`Error deleting hospital: ${oe.message}.`,"error")}finally{ye(!1),He(!1),X(null)}})},_s=()=>{He(!0),X(()=>async()=>{if(!r||!s||!te){h("Not authorized. Please login.","error");return}ye(!0);try{const re=m(r,`artifacts/${s}/public/data/hospitals`),oe=await w(re),Y=new Map,fe=[];for(const we of oe.docs){const Ze=we.data(),St=`${Ze.name.toLowerCase()}|${Ze.location.toLowerCase()}`;Y.has(St)?fe.push({id:we.id,ref:we.ref}):Y.set(St,{id:we.id,ref:we.ref})}if(fe.length===0)h("No duplicate hospitals found.","success");else{h(`Found ${fe.length} duplicate hospitals. Deleting...`,"info");for(const we of fe)try{const Ze=m(r,`artifacts/${s}/public/data/hospitals/${we.id}/doctors`),St=await w(Ze);for(const Mi of St.docs)await j(Mi.ref);await j(we.ref)}catch(Ze){console.error(`Error deleting duplicate hospital ${we.id}:`,Ze),h(`Partial success: Could not delete all duplicates. Error with ${we.id}: ${Ze.message}`,"error")}h("Duplicate hospitals and their associated doctors/reviews deleted successfully!","success")}ln(!0)}catch(re){console.error("Error identifying/deleting duplicate hospitals:",re),h(`Error processing duplicates: ${re.message}`,"error")}finally{ye(!1),He(!1),X(null)}})},Ur=async re=>{if(re.preventDefault(),!r||!s||!S||!te){h("Not authorized or hospital not selected.","error");return}const oe=re.target,Y=oe.name.value.trim(),fe=oe.specialty.value.trim();if(!Y||!fe){h("Please fill all fields for doctor.","error");return}ye(!0);try{const we=g(m(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`));await R(we,{name:Y,specialty:fe,ratings:[]}),h("Doctor added successfully!","success"),oe.reset(),un(S.id)}catch(we){console.error("Error adding doctor:",we),h(`Error adding doctor: ${we.message}.`,"error")}finally{ye(!1)}},Nn=async(re,oe,Y)=>{if(!r||!s||!S||!te){h("Not authorized or hospital not selected.","error");return}ye(!0);try{const fe=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,re);await C(fe,{name:oe.trim(),specialty:Y.trim()}),h("Doctor updated successfully!","success"),un(S.id)}catch(fe){console.error("Error updating doctor:",fe),h(`Error updating doctor: ${fe.message}.`,"error")}finally{ye(!1)}},xn=re=>{He(!0),X(()=>async()=>{if(!r||!s||!S||!te){h("Not authorized or hospital not selected.","error");return}ye(!0);try{const oe=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,re);await j(oe),h("Doctor deleted successfully!","success"),un(S.id)}catch(oe){console.error("Error deleting doctor:",oe),h(`Error deleting doctor: ${oe.message}.`,"error")}finally{ye(!1),He(!1),X(null)}})},Li=re=>{He(!0),X(()=>async()=>{if(!r||!s||!S||!N||!te){h("Not authorized or doctor/hospital not selected.","error");return}ye(!0);try{const oe=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,N.id),Y=D.filter((fe,we)=>we!==re);await C(oe,{ratings:Y}),h("Review deleted successfully!","success"),kn(S.id,N.id)}catch(oe){console.error("Error deleting review:",oe),h(`Error deleting review: ${oe.message}.`,"error")}finally{ye(!1),He(!1),X(null)}})},jr=(re,oe)=>{He(!0),X(()=>async()=>{if(!r||!s||!S||!N||!te){h("Not authorized or doctor/hospital not selected.","error"),He(!1),X(null);return}ye(!0);try{const Y=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,N.id),fe=await _(Y);if(!fe||!fe.exists()){h("Doctor not found or data is invalid. Cannot delete comment.","error"),ye(!1),He(!1),X(null);return}const Ze=fe.data().ratings||[],St=JSON.parse(JSON.stringify(Ze));if(St[re]&&St[re].comments)St[re].comments.splice(oe,1);else{h("Review or comment not found.","error"),ye(!1),He(!1),X(null);return}await C(Y,{ratings:St}),h("Comment deleted successfully!","success"),kn(S.id,N.id)}catch(Y){console.error("Error deleting comment:",Y),h(`Error deleting comment: ${Y.message}.`,"error")}finally{ye(!1),He(!1),X(null)}})},zr=async re=>{re.preventDefault(),ye(!0),h("","");try{if(e){const Y=(await QT(e,pe,V)).user.uid;console.log("Login Attempt: Successfully signed in user with UID:",Y)}else throw new Error("Firebase Auth instance not available. Cannot log in.");h("Authenticating...","info")}catch(oe){console.error("Login error:",oe);let Y="Login failed. Please check your credentials.";oe.code==="auth/user-not-found"||oe.code==="auth/wrong-password"?Y="Invalid email or password.":oe.code==="auth/invalid-email"?Y="Invalid email format.":oe.code==="auth/network-request-failed"?Y="Network error. Check your internet connection.":oe.code==="auth/api-key-not-valid"&&(Y="Login failed. Your Firebase API key is not valid or not configured for Authentication."),h(Y,"error"),ye(!1)}},bi=async()=>{if(e){ye(!0);try{await ZT(e),h("Logged out successfully!","success"),Se([]),Re([]),T([]),k(null),O(null),ce("hospitals"),ne(""),z(""),ke(!1)}catch(re){console.error("Logout error:",re),h(`Logout failed: ${re.message}`,"error")}finally{ye(!1)}}},ct=()=>{if(o||A)return Q.jsx("p",{className:"text-center text-gray-500 py-8",children:"Loading application..."});if(!te)return Q.jsxs("div",{className:"text-center py-8",children:[Q.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Admin Login"}),Q.jsxs("form",{onSubmit:zr,className:"max-w-sm mx-auto space-y-4",children:[Q.jsx("input",{type:"email",placeholder:"Admin Email",value:pe,onChange:re=>ne(re.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("input",{type:"password",placeholder:"Admin Password",value:V,onChange:re=>z(re.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("button",{type:"submit",className:"w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200",children:"Login"})]})]});switch(Ee){case"hospitals":const re=me.filter(Y=>Y.name.toLowerCase().includes(be.toLowerCase())||Y.location.toLowerCase().includes(be.toLowerCase()));return Q.jsxs("div",{children:[Q.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 mb-4 border-b pb-3",children:["Hospitals (",me.length," Total)"]}),Q.jsx("div",{className:"mb-4",children:Q.jsx("input",{type:"text",placeholder:"Search hospitals by name or location...",value:be,onChange:Y=>je(Y.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 shadow-sm"})}),Q.jsxs("div",{className:"mb-6",children:[Q.jsxs("button",{onClick:()=>Ve(!Ne),className:"w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md",children:[Ne?"Collapse Add Hospital Form":"Add New Hospital",Q.jsx("svg",{className:`w-5 h-5 transition-transform duration-300 ${Ne?"rotate-180":"rotate-0"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),Ne&&Q.jsxs("form",{onSubmit:Fr,className:"space-y-4 mt-4 p-4 border border-gray-200 rounded-md bg-gray-50",children:[Q.jsx("input",{type:"text",name:"name",placeholder:"Hospital Name",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("input",{type:"text",name:"location",placeholder:"Location (e.g., Boston, MA)",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("button",{type:"submit",className:"w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200",children:"Add Hospital"})]})]}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Existing Hospitals"}),Q.jsx("button",{onClick:_s,className:"mb-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 transform hover:scale-105",children:"Remove Duplicate Hospitals"}),re.length===0?Q.jsx("p",{className:"text-gray-500",children:"No hospitals found matching your search or none added yet."}):Q.jsx("div",{className:"space-y-3",children:re.map(Y=>Q.jsxs("div",{className:"bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm flex justify-between items-center",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"font-semibold",children:Y.name}),Q.jsx("p",{className:"text-sm",children:Y.location})]}),Q.jsxs("div",{className:"flex space-x-2",children:[Q.jsx("button",{onClick:()=>{k(Y),ce("doctors"),un(Y.id)},className:"px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors",children:"Manage Doctors"}),Q.jsx("button",{onClick:()=>{const fe=prompt("Enter new hospital name:",Y.name),we=prompt("Enter new hospital location:",Y.location);fe!==null&&we!==null&&Vi(Y.id,fe,we)},className:"px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition-colors",children:"Edit"}),Q.jsx("button",{onClick:()=>Oi(Y.id),className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors",children:"Delete"})]})]},Y.id))})]});case"doctors":const oe=qe.filter(Y=>Y.name.toLowerCase().includes(Ke.toLowerCase())||Y.specialty.toLowerCase().includes(Ke.toLowerCase()));return Q.jsxs("div",{children:[Q.jsx("button",{onClick:()=>{ce("hospitals"),k(null),Re([]),ut("")},className:"mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105",children:"← Back to Hospitals"}),Q.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 mb-4 border-b pb-3",children:["Doctors at ",S==null?void 0:S.name," (",qe.length," Total)"]}),Q.jsx("div",{className:"mb-4",children:Q.jsx("input",{type:"text",placeholder:"Search doctors by name or specialty...",value:Ke,onChange:Y=>ut(Y.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 shadow-sm"})}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Add New Doctor"}),Q.jsxs("form",{onSubmit:Ur,className:"space-y-4 mb-8",children:[Q.jsx("input",{type:"text",name:"name",placeholder:"Doctor Name",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("input",{type:"text",name:"specialty",placeholder:"Specialty (e.g., Cardiologist)",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("button",{type:"submit",className:"w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200",children:"Add Doctor"})]}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Existing Doctors"}),oe.length===0?Q.jsx("p",{className:"text-gray-500",children:"No doctors found matching your search or none added for this hospital yet."}):Q.jsx("div",{className:"space-y-3",children:oe.map(Y=>Q.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"font-semibold text-gray-800",children:Y.name}),Q.jsx("p",{className:"text-sm text-gray-600",children:Y.specialty}),Q.jsx("p",{className:"text-xs text-gray-500",children:Y.ratings&&Y.ratings.length>0?`${Y.ratings.length} reviews`:"No reviews"})]}),Q.jsxs("div",{className:"flex space-x-2",children:[Q.jsx("button",{onClick:()=>{O(Y),ce("reviews"),kn(S.id,Y.id)},className:"px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors",children:"Manage Reviews"}),Q.jsx("button",{onClick:()=>{const fe=prompt("Enter new doctor name:",Y.name),we=prompt("Enter new doctor specialty:",Y.specialty);fe!==null&&we!==null&&Nn(Y.id,fe,we)},className:"px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition-colors",children:"Edit"}),Q.jsx("button",{onClick:()=>xn(Y.id),className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors",children:"Delete"})]})]},Y.id))})]});case"reviews":return Q.jsxs("div",{children:[Q.jsx("button",{onClick:()=>{ce("doctors"),O(null),T([])},className:"mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105",children:"← Back to Doctors"}),Q.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 mb-4 border-b pb-3",children:["Reviews for ",N==null?void 0:N.name]}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Existing Reviews"}),D.length===0?Q.jsx("p",{className:"text-gray-500",children:"No reviews found for this doctor."}):Q.jsx("div",{className:"space-y-3",children:D.map((Y,fe)=>Q.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col justify-between items-start",children:[Q.jsxs("div",{className:"w-full flex justify-between items-start",children:[Q.jsxs("div",{children:[Q.jsxs("p",{className:"font-semibold text-gray-800",children:["Rating: ",Y.stars," stars"]}),Q.jsxs("p",{className:"text-sm text-gray-600 italic",children:['"',Y.comment||"No comment provided",'"']}),Q.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Date: ",Y.date||"N/A"," (Reviewer: ",Y.reviewerId||"Unknown",")",Y.comments&&Y.comments.length>0&&Q.jsxs("span",{className:"ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full",children:[Y.comments.length," Comment",Y.comments.length>1?"s":""]})]})]}),Q.jsx("button",{onClick:()=>Li(fe),className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors ml-4",children:"Delete Review"})]}),Y.comments&&Y.comments.length>0&&Q.jsxs("div",{className:"w-full mt-4 pt-4 border-t border-gray-200 space-y-2",children:[Q.jsx("p",{className:"font-semibold text-gray-700 text-sm",children:"Comments:"}),Y.comments.map((we,Ze)=>Q.jsxs("div",{className:"bg-gray-100 p-3 rounded-md flex justify-between items-start text-sm",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"text-gray-800",children:we.text}),Q.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Date: ",we.date||"N/A"," (Commenter: ",we.userId||"Unknown",")"]})]}),Q.jsx("button",{onClick:()=>jr(fe,Ze),className:"px-2 py-1 bg-red-400 text-white text-xs rounded-md hover:bg-red-500 transition-colors ml-4",children:"Remove"})]},we.date+Ze))]})]},fe))})]});default:return Q.jsx("p",{className:"text-center text-gray-500 py-8",children:"Select a section from the navigation."})}};return Q.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-100",children:[Q.jsx("header",{className:"bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-4 shadow-lg",children:Q.jsxs("div",{className:"container flex items-center justify-between",children:[Q.jsx("h1",{className:"text-3xl font-bold rounded-lg px-3 py-1 bg-white text-purple-800 shadow-md",children:"RNTea Admin"}),te&&Q.jsx("button",{onClick:bi,className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors",children:"Logout"})]})}),Q.jsx("main",{className:"flex-grow container py-8",children:Q.jsx("div",{className:"bg-white p-6 rounded-lg shadow-xl",children:ct()})}),Q.jsx(MR,{isOpen:It,message:"Are you sure you want to delete this item? This action cannot be undone.",onConfirm:()=>We(),onCancel:()=>{He(!1),X(null)}})]})},Jv=Be.createContext(null),UR=typeof __firebase_config<"u"?JSON.parse(__firebase_config):null;typeof __app_id<"u"&&JSON.parse(__app_id);const Iy={apiKey:"AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g",authDomain:"rntea-cca78.firebaseapp.com",projectId:"rntea-cca78",storageBucket:"rntea-cca78.firebasestorage.app",messagingSenderId:"806310857835",appId:"1:806310857835:web:b03b05847c818ee4fe352e",measurementId:"G-ZKZBPS9FGE"};function jR(){const[r,e]=Be.useState(null),[t,s]=Be.useState(null),[o,u]=Be.useState(null),[h,m]=Be.useState(null),[g,_]=Be.useState(!1),[w,R]=Be.useState(!0),[C,j]=Be.useState({text:"",type:""}),q=Be.useCallback((H,Ee)=>{j({text:H,type:Ee}),setTimeout(()=>j({text:"",type:""}),5e3)},[]);Be.useEffect(()=>{(async()=>{try{const ce=by(UR||Iy),me=cS(ce),Se=uR(ce);e(ce),u(me),s(Se);const qe=JT(me,async Re=>{Re?m(Re.uid):(m(null),q("Please log in to access the Admin Panel.","info")),_(!0),R(!1)});return me.currentUser||R(!1),()=>{qe&&qe()}}catch(Ee){console.error("Firebase Initialization Error for Admin App:",Ee),q(`FATAL ERROR: Failed to initialize Firebase for admin: ${Ee.message}. Please check console.`,"error"),R(!1),_(!1)}})()},[]);const J=Be.useMemo(()=>({app:r,db:t,auth:o,userId:h,authReady:g,appId:(typeof __app_id<"u"?JSON.parse(__app_id):null)||Iy.projectId,loadingFirebase:w,message:C,showAdminMessage:q,collection:aR,doc:lR,getDoc:kR,getDocs:NR,setDoc:xR,updateDoc:DR,deleteDoc:VR,query:IR,where:SR,arrayUnion:LR}),[r,t,o,h,g,w,C,q]);return Q.jsxs(Jv.Provider,{value:J,children:[Q.jsx(bR,{message:C.text,type:C.type}),w?Q.jsx("p",{className:"text-center text-gray-500 py-8",children:"Initializing Admin Application and Firebase..."}):Q.jsx(FR,{})]})}const Sy=document.getElementById("admin-root");Sy?dw.createRoot(Sy).render(Q.jsx(sw.StrictMode,{children:Q.jsx(jR,{})})):console.error("admin.jsx: ERROR - Admin root element not found in DOM. Cannot mount Admin App.");
