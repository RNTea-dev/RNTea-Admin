(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Ny(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zh={exports:{}},ka={},ed={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function ow(){if(Bm)return De;Bm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=R&&V[R]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,J={};function H(V,B,te){this.props=V,this.context=B,this.refs=J,this.updater=te||j}H.prototype.isReactComponent={},H.prototype.setState=function(V,B){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,B,"setState")},H.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function fe(){}fe.prototype=H.prototype;function ce(V,B,te){this.props=V,this.context=B,this.refs=J,this.updater=te||j}var ge=ce.prototype=new fe;ge.constructor=ce,q(ge,H.prototype),ge.isPureReactComponent=!0;var Se=Array.isArray,qe=Object.prototype.hasOwnProperty,Re={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function T(V,B,te){var ke,Ne={},Ve=null,be=null;if(B!=null)for(ke in B.ref!==void 0&&(be=B.ref),B.key!==void 0&&(Ve=""+B.key),B)qe.call(B,ke)&&!D.hasOwnProperty(ke)&&(Ne[ke]=B[ke]);var je=arguments.length-2;if(je===1)Ne.children=te;else if(1<je){for(var Ge=Array(je),ct=0;ct<je;ct++)Ge[ct]=arguments[ct+2];Ne.children=Ge}if(V&&V.defaultProps)for(ke in je=V.defaultProps,je)Ne[ke]===void 0&&(Ne[ke]=je[ke]);return{$$typeof:r,type:V,key:Ve,ref:be,props:Ne,_owner:Re.current}}function S(V,B){return{$$typeof:r,type:V.type,key:B,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var B={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(te){return B[te]})}var O=/\/+/g;function A(V,B){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):B.toString(36)}function _e(V,B,te,ke,Ne){var Ve=typeof V;(Ve==="undefined"||Ve==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(Ve){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case r:case e:be=!0}}if(be)return be=V,Ne=Ne(be),V=ke===""?"."+A(be,0):ke,Se(Ne)?(te="",V!=null&&(te=V.replace(O,"$&/")+"/"),_e(Ne,B,te,"",function(ct){return ct})):Ne!=null&&(k(Ne)&&(Ne=S(Ne,te+(!Ne.key||be&&be.key===Ne.key?"":(""+Ne.key).replace(O,"$&/")+"/")+V)),B.push(Ne)),1;if(be=0,ke=ke===""?".":ke+":",Se(V))for(var je=0;je<V.length;je++){Ve=V[je];var Ge=ke+A(Ve,je);be+=_e(Ve,B,te,Ge,Ne)}else if(Ge=C(V),typeof Ge=="function")for(V=Ge.call(V),je=0;!(Ve=V.next()).done;)Ve=Ve.value,Ge=ke+A(Ve,je++),be+=_e(Ve,B,te,Ge,Ne);else if(Ve==="object")throw B=String(V),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return be}function At(V,B,te){if(V==null)return V;var ke=[],Ne=0;return _e(V,ke,"","",function(Ve){return B.call(te,Ve,Ne++)}),ke}function He(V){if(V._status===-1){var B=V._result;B=B(),B.then(function(te){(V._status===0||V._status===-1)&&(V._status=1,V._result=te)},function(te){(V._status===0||V._status===-1)&&(V._status=2,V._result=te)}),V._status===-1&&(V._status=0,V._result=B)}if(V._status===1)return V._result.default;throw V._result}var We={current:null},X={transition:null},me={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:X,ReactCurrentOwner:Re};function ne(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:At,forEach:function(V,B,te){At(V,function(){B.apply(this,arguments)},te)},count:function(V){var B=0;return At(V,function(){B++}),B},toArray:function(V){return At(V,function(B){return B})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},De.Component=H,De.Fragment=t,De.Profiler=o,De.PureComponent=ce,De.StrictMode=s,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,De.act=ne,De.cloneElement=function(V,B,te){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ke=q({},V.props),Ne=V.key,Ve=V.ref,be=V._owner;if(B!=null){if(B.ref!==void 0&&(Ve=B.ref,be=Re.current),B.key!==void 0&&(Ne=""+B.key),V.type&&V.type.defaultProps)var je=V.type.defaultProps;for(Ge in B)qe.call(B,Ge)&&!D.hasOwnProperty(Ge)&&(ke[Ge]=B[Ge]===void 0&&je!==void 0?je[Ge]:B[Ge])}var Ge=arguments.length-2;if(Ge===1)ke.children=te;else if(1<Ge){je=Array(Ge);for(var ct=0;ct<Ge;ct++)je[ct]=arguments[ct+2];ke.children=je}return{$$typeof:r,type:V.type,key:Ne,ref:Ve,props:ke,_owner:be}},De.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},De.createElement=T,De.createFactory=function(V){var B=T.bind(null,V);return B.type=V,B},De.createRef=function(){return{current:null}},De.forwardRef=function(V){return{$$typeof:m,render:V}},De.isValidElement=k,De.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:He}},De.memo=function(V,B){return{$$typeof:_,type:V,compare:B===void 0?null:B}},De.startTransition=function(V){var B=X.transition;X.transition={};try{V()}finally{X.transition=B}},De.unstable_act=ne,De.useCallback=function(V,B){return We.current.useCallback(V,B)},De.useContext=function(V){return We.current.useContext(V)},De.useDebugValue=function(){},De.useDeferredValue=function(V){return We.current.useDeferredValue(V)},De.useEffect=function(V,B){return We.current.useEffect(V,B)},De.useId=function(){return We.current.useId()},De.useImperativeHandle=function(V,B,te){return We.current.useImperativeHandle(V,B,te)},De.useInsertionEffect=function(V,B){return We.current.useInsertionEffect(V,B)},De.useLayoutEffect=function(V,B){return We.current.useLayoutEffect(V,B)},De.useMemo=function(V,B){return We.current.useMemo(V,B)},De.useReducer=function(V,B,te){return We.current.useReducer(V,B,te)},De.useRef=function(V){return We.current.useRef(V)},De.useState=function(V){return We.current.useState(V)},De.useSyncExternalStore=function(V,B,te){return We.current.useSyncExternalStore(V,B,te)},De.useTransition=function(){return We.current.useTransition()},De.version="18.3.1",De}var $m;function zd(){return $m||($m=1,ed.exports=ow()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function aw(){if(Hm)return ka;Hm=1;var r=zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,R={},C=null,j=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(R[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)R[w]===void 0&&(R[w]=g[w]);return{$$typeof:e,type:m,key:C,ref:j,props:R,_owner:o.current}}return ka.Fragment=t,ka.jsx=h,ka.jsxs=h,ka}var qm;function lw(){return qm||(qm=1,Zh.exports=aw()),Zh.exports}var Q=lw(),Be=zd();const uw=Ny(Be);var wu={},td={exports:{}},on={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function cw(){return Wm||(Wm=1,function(r){function e(X,me){var ne=X.length;X.push(me);e:for(;0<ne;){var V=ne-1>>>1,B=X[V];if(0<o(B,me))X[V]=me,X[ne]=B,ne=V;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var me=X[0],ne=X.pop();if(ne!==me){X[0]=ne;e:for(var V=0,B=X.length,te=B>>>1;V<te;){var ke=2*(V+1)-1,Ne=X[ke],Ve=ke+1,be=X[Ve];if(0>o(Ne,ne))Ve<B&&0>o(be,Ne)?(X[V]=be,X[Ve]=ne,V=Ve):(X[V]=Ne,X[ke]=ne,V=ke);else if(Ve<B&&0>o(be,ne))X[V]=be,X[Ve]=ne,V=Ve;else break e}}return me}function o(X,me){var ne=X.sortIndex-me.sortIndex;return ne!==0?ne:X.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,R=null,C=3,j=!1,q=!1,J=!1,H=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(X){for(var me=t(_);me!==null;){if(me.callback===null)s(_);else if(me.startTime<=X)s(_),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(_)}}function Se(X){if(J=!1,ge(X),!q)if(t(g)!==null)q=!0,He(qe);else{var me=t(_);me!==null&&We(Se,me.startTime-X)}}function qe(X,me){q=!1,J&&(J=!1,fe(T),T=-1),j=!0;var ne=C;try{for(ge(me),R=t(g);R!==null&&(!(R.expirationTime>me)||X&&!N());){var V=R.callback;if(typeof V=="function"){R.callback=null,C=R.priorityLevel;var B=V(R.expirationTime<=me);me=r.unstable_now(),typeof B=="function"?R.callback=B:R===t(g)&&s(g),ge(me)}else s(g);R=t(g)}if(R!==null)var te=!0;else{var ke=t(_);ke!==null&&We(Se,ke.startTime-me),te=!1}return te}finally{R=null,C=ne,j=!1}}var Re=!1,D=null,T=-1,S=5,k=-1;function N(){return!(r.unstable_now()-k<S)}function O(){if(D!==null){var X=r.unstable_now();k=X;var me=!0;try{me=D(!0,X)}finally{me?A():(Re=!1,D=null)}}else Re=!1}var A;if(typeof ce=="function")A=function(){ce(O)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,At=_e.port2;_e.port1.onmessage=O,A=function(){At.postMessage(null)}}else A=function(){H(O,0)};function He(X){D=X,Re||(Re=!0,A())}function We(X,me){T=H(function(){X(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){q||j||(q=!0,He(qe))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(X){switch(C){case 1:case 2:case 3:var me=3;break;default:me=C}var ne=C;C=me;try{return X()}finally{C=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,me){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=C;C=X;try{return me()}finally{C=ne}},r.unstable_scheduleCallback=function(X,me,ne){var V=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,X){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ne+B,X={id:w++,callback:me,priorityLevel:X,startTime:ne,expirationTime:B,sortIndex:-1},ne>V?(X.sortIndex=ne,e(_,X),t(g)===null&&X===t(_)&&(J?(fe(T),T=-1):J=!0,We(Se,ne-V))):(X.sortIndex=B,e(g,X),q||j||(q=!0,He(qe))),X},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(X){var me=C;return function(){var ne=C;C=me;try{return X.apply(this,arguments)}finally{C=ne}}}}(rd)),rd}var Gm;function hw(){return Gm||(Gm=1,nd.exports=cw()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function dw(){if(Km)return on;Km=1;var r=zd(),e=hw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function C(n){return g.call(R,n)?!0:g.call(w,n)?!1:_.test(n)?R[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function J(n,i,a,c,d,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];H[i]=new J(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(fe,ce);H[i]=new J(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(fe,ce);H[i]=new J(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(fe,ce);H[i]=new J(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,i,a,c){var d=H.hasOwnProperty(i)?H[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,d,c)&&(a=null),c||d===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Se=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Re=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),X=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function B(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var te=!1;function ke(n,i){if(!n||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ne(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function Ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Re:return"Portal";case S:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case _e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case At:return i=n.displayName||null,i!==null?i:Ve(n.type)||"Memo";case He:i=n._payload,n=n._init;try{return Ve(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ge(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ct(n){var i=Ge(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function vn(n){n._valueTracker||(n._valueTracker=ct(n))}function un(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ge(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function cn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xn(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Br(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=je(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Fi(n,i){i=i.checked,i!=null&&ge(n,"checked",i,!1)}function Ui(n,i){Fi(n,i);var a=je(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?$r(n,i.type,a):i.hasOwnProperty("defaultValue")&&$r(n,i.type,je(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ss(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function $r(n,i,a){(i!=="number"||cn(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Dn=Array.isArray;function Vn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ji(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Hr(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Dn(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:je(a)}}function qr(n,i){var a=je(i.value),c=je(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function zi(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function re(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,Y=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){et.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function Rt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function Bi(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Rt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Bo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(n,i){if(i){if(Bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ho(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function As(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rs=null,En=null,er=null;function Cs(n){if(n=pa(n)){if(typeof Rs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=bl(i),Rs(n.stateNode,n.type,i))}}function tr(n){En?er?er.push(n):er=[n]:En=n}function qo(){if(En){var n=En,i=er;if(er=En=null,Cs(n),i)for(n=0;n<i.length;n++)Cs(i[n])}}function Hi(n,i){return n(i)}function Wo(){}var Er=!1;function Go(n,i,a){if(Er)return n(i,a);Er=!0;try{return Hi(n,i,a)}finally{Er=!1,(En!==null||er!==null)&&(Wo(),qo())}}function dt(n,i){var a=n.stateNode;if(a===null)return null;var c=bl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ps=!1;if(m)try{var On={};Object.defineProperty(On,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Ps=!1}function qi(n,i,a,c,d,p,v,I,P){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var Wi=!1,ks=null,Ln=!1,Ko=null,Cc={onError:function(n){Wi=!0,ks=n}};function Ns(n,i,a,c,d,p,v,I,P){Wi=!1,ks=null,qi.apply(Cc,arguments)}function al(n,i,a,c,d,p,v,I,P){if(Ns.apply(this,arguments),Wi){if(Wi){var F=ks;Wi=!1,ks=null}else throw Error(t(198));Ln||(Ln=!0,Ko=F)}}function bn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Gi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Mn(n){if(bn(n)!==n)throw Error(t(188))}function ll(n){var i=n.alternate;if(!i){if(i=bn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Mn(d),n;if(p===c)return Mn(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Qo(n){return n=ll(n),n!==null?xs(n):null}function xs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xs(n);if(i!==null)return i;n=n.sibling}return null}var Ds=e.unstable_scheduleCallback,Yo=e.unstable_cancelCallback,ul=e.unstable_shouldYield,Pc=e.unstable_requestPaint,Xe=e.unstable_now,cl=e.unstable_getCurrentPriorityLevel,Ki=e.unstable_ImmediatePriority,Wr=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,Xo=e.unstable_LowPriority,hl=e.unstable_IdlePriority,Qi=null,hn=null;function dl(n){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Qi,n,void 0,(n.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:pl,Jo=Math.log,fl=Math.LN2;function pl(n){return n>>>=0,n===0?32:31-(Jo(n)/fl|0)|0}var Vs=64,Os=4194304;function Gr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Gr(I):(p&=v,p!==0&&(c=Gr(p)))}else v=a&~d,v!==0?c=Gr(v):p!==0&&(c=Gr(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Kt(i),d=1<<a,c|=n[a],i&=~d;return c}function kc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Kt(p),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=kc(I,i)):P<=i&&(n.expiredLanes|=I),p&=~I}}function dn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xi(){var n=Vs;return Vs<<=1,(Vs&4194240)===0&&(Vs=64),n}function Kr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Qr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Kt(i),n[i]=a}function Ye(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Kt(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Yr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Kt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Me=0;function Xr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ml,Ls,gl,yl,_l,Zo=!1,nr=[],Vt=null,Fn=null,Un=null,Jr=new Map,Tn=new Map,rr=[],Nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vl(n,i){switch(n){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Jr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(i.pointerId)}}function Jt(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=pa(i),i!==null&&Ls(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function xc(n,i,a,c,d){switch(i){case"focusin":return Vt=Jt(Vt,n,i,a,c,d),!0;case"dragenter":return Fn=Jt(Fn,n,i,a,c,d),!0;case"mouseover":return Un=Jt(Un,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return Jr.set(p,Jt(Jr.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Tn.set(p,Jt(Tn.get(p)||null,n,i,a,c,d)),!0}return!1}function El(n){var i=ns(n.target);if(i!==null){var a=bn(i);if(a!==null){if(i=a.tag,i===13){if(i=Gi(a),i!==null){n.blockedOn=i,_l(n.priority,function(){gl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Tr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=bs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);$i=c,a.target.dispatchEvent(c),$i=null}else return i=pa(a),i!==null&&Ls(i),n.blockedOn=a,!1;i.shift()}return!0}function Ji(n,i,a){Tr(n)&&a.delete(i)}function wl(){Zo=!1,Vt!==null&&Tr(Vt)&&(Vt=null),Fn!==null&&Tr(Fn)&&(Fn=null),Un!==null&&Tr(Un)&&(Un=null),Jr.forEach(Ji),Tn.forEach(Ji)}function jn(n,i){n.blockedOn===i&&(n.blockedOn=null,Zo||(Zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wl)))}function zn(n){function i(d){return jn(d,n)}if(0<nr.length){jn(nr[0],n);for(var a=1;a<nr.length;a++){var c=nr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Vt!==null&&jn(Vt,n),Fn!==null&&jn(Fn,n),Un!==null&&jn(Un,n),Jr.forEach(i),Tn.forEach(i),a=0;a<rr.length;a++)c=rr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)El(a),a.blockedOn===null&&rr.shift()}var Ir=Se.ReactCurrentBatchConfig,Zr=!0;function it(n,i,a,c){var d=Me,p=Ir.transition;Ir.transition=null;try{Me=1,ea(n,i,a,c)}finally{Me=d,Ir.transition=p}}function Dc(n,i,a,c){var d=Me,p=Ir.transition;Ir.transition=null;try{Me=4,ea(n,i,a,c)}finally{Me=d,Ir.transition=p}}function ea(n,i,a,c){if(Zr){var d=bs(n,i,a,c);if(d===null)$c(n,i,c,Zi,a),vl(n,c);else if(xc(d,n,i,a,c))c.stopPropagation();else if(vl(n,c),i&4&&-1<Nc.indexOf(n)){for(;d!==null;){var p=pa(d);if(p!==null&&ml(p),p=bs(n,i,a,c),p===null&&$c(n,i,c,Zi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else $c(n,i,c,null,a)}}var Zi=null;function bs(n,i,a,c){if(Zi=null,n=As(c),n=ns(n),n!==null)if(i=bn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Gi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Zi=n,null}function ta(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cl()){case Ki:return 1;case Wr:return 4;case wn:case Xo:return 16;case hl:return 536870912;default:return 16}default:return 16}}var fn=null,Ms=null,Zt=null;function na(){if(Zt)return Zt;var n,i=Ms,a=i.length,c,d="value"in fn?fn.value:fn.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[p-c];c++);return Zt=d.slice(n,1<c?1-c:void 0)}function Fs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ir(){return!0}function ra(){return!1}function Ot(n){function i(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ir:ra,this.isPropagationStopped=ra,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),i}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=Ot(Bn),sr=ne({},Bn,{view:0,detail:0}),Vc=Ot(sr),js,Sr,ei,es=ne({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ei&&(ei&&n.type==="mousemove"?(js=n.screenX-ei.screenX,Sr=n.screenY-ei.screenY):Sr=js=0,ei=n),js)},movementY:function(n){return"movementY"in n?n.movementY:Sr}}),zs=Ot(es),ia=ne({},es,{dataTransfer:0}),Tl=Ot(ia),Bs=ne({},sr,{relatedTarget:0}),$s=Ot(Bs),Il=ne({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ar=Ot(Il),Sl=ne({},Bn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Al=Ot(Sl),Rl=ne({},Bn,{data:0}),sa=Ot(Rl),Hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Cl[n])?!!i[n]:!1}function or(){return Pl}var l=ne({},sr,{key:function(n){if(n.key){var i=Hs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Fs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(n){return n.type==="keypress"?Fs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ot(l),y=ne({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ot(y),L=ne({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),U=Ot(L),ee=ne({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qe=Ot(ee),wt=ne({},es,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Ot(wt),Ct=[9,13,27,32],gt=m&&"CompositionEvent"in window,In=null;m&&"documentMode"in document&&(In=document.documentMode);var pn=m&&"TextEvent"in window&&!In,ts=m&&(!gt||In&&8<In&&11>=In),qs=" ",bf=!1;function Mf(n,i){switch(n){case"keyup":return Ct.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ws=!1;function rE(n,i){switch(n){case"compositionend":return Ff(i);case"keypress":return i.which!==32?null:(bf=!0,qs);case"textInput":return n=i.data,n===qs&&bf?null:n;default:return null}}function iE(n,i){if(Ws)return n==="compositionend"||!gt&&Mf(n,i)?(n=na(),Zt=Ms=fn=null,Ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ts&&i.locale!=="ko"?null:i.data;default:return null}}var sE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!sE[n.type]:i==="textarea"}function jf(n,i,a,c){tr(c),i=Vl(i,"onChange"),0<i.length&&(a=new Us("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var oa=null,aa=null;function oE(n){ip(n,0)}function kl(n){var i=Xs(n);if(un(i))return n}function aE(n,i){if(n==="change")return i}var zf=!1;if(m){var Oc;if(m){var Lc="oninput"in document;if(!Lc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),Lc=typeof Bf.oninput=="function"}Oc=Lc}else Oc=!1;zf=Oc&&(!document.documentMode||9<document.documentMode)}function $f(){oa&&(oa.detachEvent("onpropertychange",Hf),aa=oa=null)}function Hf(n){if(n.propertyName==="value"&&kl(aa)){var i=[];jf(i,aa,n,As(n)),Go(oE,i)}}function lE(n,i,a){n==="focusin"?($f(),oa=i,aa=a,oa.attachEvent("onpropertychange",Hf)):n==="focusout"&&$f()}function uE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kl(aa)}function cE(n,i){if(n==="click")return kl(i)}function hE(n,i){if(n==="input"||n==="change")return kl(i)}function dE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var $n=typeof Object.is=="function"?Object.is:dE;function la(n,i){if($n(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!$n(n[d],i[d]))return!1}return!0}function qf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wf(n,i){var a=qf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Gf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Gf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Kf(){for(var n=window,i=cn();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=cn(n.document)}return i}function bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function fE(n){var i=Kf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Gf(a.ownerDocument.documentElement,a)){if(c!==null&&bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Wf(a,p);var v=Wf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pE=m&&"documentMode"in document&&11>=document.documentMode,Gs=null,Mc=null,ua=null,Fc=!1;function Qf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||Gs==null||Gs!==cn(c)||(c=Gs,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&la(ua,c)||(ua=c,c=Vl(Mc,"onSelect"),0<c.length&&(i=new Us("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Gs)))}function Nl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ks={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},Uc={},Yf={};m&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function xl(n){if(Uc[n])return Uc[n];if(!Ks[n])return n;var i=Ks[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Yf)return Uc[n]=i[a];return n}var Xf=xl("animationend"),Jf=xl("animationiteration"),Zf=xl("animationstart"),ep=xl("transitionend"),tp=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(n,i){tp.set(n,i),u(i,[n])}for(var jc=0;jc<np.length;jc++){var zc=np[jc],mE=zc.toLowerCase(),gE=zc[0].toUpperCase()+zc.slice(1);ti(mE,"on"+gE)}ti(Xf,"onAnimationEnd"),ti(Jf,"onAnimationIteration"),ti(Zf,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(ep,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function rp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,al(c,i,void 0,n),n.currentTarget=null}function ip(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;rp(d,I,F),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,F=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;rp(d,I,F),p=P}}}if(Ln)throw n=Ko,Ln=!1,Ko=null,n}function tt(n,i){var a=i[Qc];a===void 0&&(a=i[Qc]=new Set);var c=n+"__bubble";a.has(c)||(sp(i,n,2,!1),a.add(c))}function Bc(n,i,a){var c=0;i&&(c|=4),sp(a,n,c,i)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[Dl]){n[Dl]=!0,s.forEach(function(a){a!=="selectionchange"&&(yE.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Dl]||(i[Dl]=!0,Bc("selectionchange",!1,i))}}function sp(n,i,a,c){switch(ta(i)){case 1:var d=it;break;case 4:d=Dc;break;default:d=ea}a=d.bind(null,i,a,n),d=void 0,!Ps||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function $c(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=ns(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Go(function(){var F=p,G=As(a),K=[];e:{var W=tp.get(n);if(W!==void 0){var se=Us,ue=n;switch(n){case"keypress":if(Fs(a)===0)break e;case"keydown":case"keyup":se=f;break;case"focusin":ue="focus",se=$s;break;case"focusout":ue="blur",se=$s;break;case"beforeblur":case"afterblur":se=$s;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Tl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=U;break;case Xf:case Jf:case Zf:se=Ar;break;case ep:se=Qe;break;case"scroll":se=Vc;break;case"wheel":se=Fe;break;case"copy":case"cut":case"paste":se=Al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=E}var he=(i&4)!==0,ft=!he&&n==="scroll",b=he?W!==null?W+"Capture":null:W;he=[];for(var x=F,M;x!==null;){M=x;var Z=M.stateNode;if(M.tag===5&&Z!==null&&(M=Z,b!==null&&(Z=dt(x,b),Z!=null&&he.push(da(x,Z,M)))),ft)break;x=x.return}0<he.length&&(W=new se(W,ue,null,a,G),K.push({event:W,listeners:he}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",W&&a!==$i&&(ue=a.relatedTarget||a.fromElement)&&(ns(ue)||ue[Rr]))break e;if((se||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=F,ue=ue?ns(ue):null,ue!==null&&(ft=bn(ue),ue!==ft||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=F),se!==ue)){if(he=zs,Z="onMouseLeave",b="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(he=E,Z="onPointerLeave",b="onPointerEnter",x="pointer"),ft=se==null?W:Xs(se),M=ue==null?W:Xs(ue),W=new he(Z,x+"leave",se,a,G),W.target=ft,W.relatedTarget=M,Z=null,ns(G)===F&&(he=new he(b,x+"enter",ue,a,G),he.target=M,he.relatedTarget=ft,Z=he),ft=Z,se&&ue)t:{for(he=se,b=ue,x=0,M=he;M;M=Qs(M))x++;for(M=0,Z=b;Z;Z=Qs(Z))M++;for(;0<x-M;)he=Qs(he),x--;for(;0<M-x;)b=Qs(b),M--;for(;x--;){if(he===b||b!==null&&he===b.alternate)break t;he=Qs(he),b=Qs(b)}he=null}else he=null;se!==null&&op(K,W,se,he,!1),ue!==null&&ft!==null&&op(K,ft,ue,he,!0)}}e:{if(W=F?Xs(F):window,se=W.nodeName&&W.nodeName.toLowerCase(),se==="select"||se==="input"&&W.type==="file")var de=aE;else if(Uf(W))if(zf)de=hE;else{de=uE;var ve=lE}else(se=W.nodeName)&&se.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(de=cE);if(de&&(de=de(n,F))){jf(K,de,a,G);break e}ve&&ve(n,W,F),n==="focusout"&&(ve=W._wrapperState)&&ve.controlled&&W.type==="number"&&$r(W,"number",W.value)}switch(ve=F?Xs(F):window,n){case"focusin":(Uf(ve)||ve.contentEditable==="true")&&(Gs=ve,Mc=F,ua=null);break;case"focusout":ua=Mc=Gs=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Qf(K,a,G);break;case"selectionchange":if(pE)break;case"keydown":case"keyup":Qf(K,a,G)}var Ee;if(gt)e:{switch(n){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Ws?Mf(n,a)&&(Ae="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(ts&&a.locale!=="ko"&&(Ws||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ws&&(Ee=na()):(fn=G,Ms="value"in fn?fn.value:fn.textContent,Ws=!0)),ve=Vl(F,Ae),0<ve.length&&(Ae=new sa(Ae,n,null,a,G),K.push({event:Ae,listeners:ve}),Ee?Ae.data=Ee:(Ee=Ff(a),Ee!==null&&(Ae.data=Ee)))),(Ee=pn?rE(n,a):iE(n,a))&&(F=Vl(F,"onBeforeInput"),0<F.length&&(G=new sa("onBeforeInput","beforeinput",null,a,G),K.push({event:G,listeners:F}),G.data=Ee))}ip(K,i)})}function da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Vl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=dt(n,a),p!=null&&c.unshift(da(n,p,d)),p=dt(n,i),p!=null&&c.push(da(n,p,d))),n=n.return}return c}function Qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function op(n,i,a,c,d){for(var p=i._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,F=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&F!==null&&(I=F,d?(P=dt(a,p),P!=null&&v.unshift(da(a,P,I))):d||(P=dt(a,p),P!=null&&v.push(da(a,P,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var _E=/\r\n?/g,vE=/\u0000|\uFFFD/g;function ap(n){return(typeof n=="string"?n:""+n).replace(_E,`
`).replace(vE,"")}function Ol(n,i,a){if(i=ap(i),ap(n)!==i&&a)throw Error(t(425))}function Ll(){}var Hc=null,qc=null;function Wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(n){return lp.resolve(null).then(n).catch(TE)}:Gc;function TE(n){setTimeout(function(){throw n})}function Kc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),zn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);zn(i)}function ni(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function up(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ar="__reactFiber$"+Ys,fa="__reactProps$"+Ys,Rr="__reactContainer$"+Ys,Qc="__reactEvents$"+Ys,IE="__reactListeners$"+Ys,SE="__reactHandles$"+Ys;function ns(n){var i=n[ar];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Rr]||a[ar]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=up(n);n!==null;){if(a=n[ar])return a;n=up(n)}return i}n=a,a=n.parentNode}return null}function pa(n){return n=n[ar]||n[Rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function bl(n){return n[fa]||null}var Yc=[],Js=-1;function ri(n){return{current:n}}function nt(n){0>Js||(n.current=Yc[Js],Yc[Js]=null,Js--)}function Je(n,i){Js++,Yc[Js]=n.current,n.current=i}var ii={},jt=ri(ii),en=ri(!1),rs=ii;function Zs(n,i){var a=n.type.contextTypes;if(!a)return ii;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function tn(n){return n=n.childContextTypes,n!=null}function Ml(){nt(en),nt(jt)}function cp(n,i,a){if(jt.current!==ii)throw Error(t(168));Je(jt,i),Je(en,a)}function hp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return ne({},a,c)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ii,rs=jt.current,Je(jt,n),Je(en,en.current),!0}function dp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=hp(n,i,rs),c.__reactInternalMemoizedMergedChildContext=n,nt(en),nt(jt),Je(jt,n)):nt(en),Je(en,a)}var Cr=null,Ul=!1,Xc=!1;function fp(n){Cr===null?Cr=[n]:Cr.push(n)}function AE(n){Ul=!0,fp(n)}function si(){if(!Xc&&Cr!==null){Xc=!0;var n=0,i=Me;try{var a=Cr;for(Me=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,Ul=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),Ds(Ki,si),d}finally{Me=i,Xc=!1}}return null}var eo=[],to=0,jl=null,zl=0,Sn=[],An=0,is=null,Pr=1,kr="";function ss(n,i){eo[to++]=zl,eo[to++]=jl,jl=n,zl=i}function pp(n,i,a){Sn[An++]=Pr,Sn[An++]=kr,Sn[An++]=is,is=n;var c=Pr;n=kr;var d=32-Kt(c)-1;c&=~(1<<d),a+=1;var p=32-Kt(i)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Pr=1<<32-Kt(i)+d|a<<d|c,kr=p+n}else Pr=1<<p|a<<d|c,kr=n}function Jc(n){n.return!==null&&(ss(n,1),pp(n,1,0))}function Zc(n){for(;n===jl;)jl=eo[--to],eo[to]=null,zl=eo[--to],eo[to]=null;for(;n===is;)is=Sn[--An],Sn[An]=null,kr=Sn[--An],Sn[An]=null,Pr=Sn[--An],Sn[An]=null}var mn=null,gn=null,st=!1,Hn=null;function mp(n,i){var a=kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function gp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mn=n,gn=ni(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mn=n,gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=is!==null?{id:Pr,overflow:kr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=kn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,mn=n,gn=null,!0):!1;default:return!1}}function eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function th(n){if(st){var i=gn;if(i){var a=i;if(!gp(n,i)){if(eh(n))throw Error(t(418));i=ni(a.nextSibling);var c=mn;i&&gp(n,i)?mp(c,a):(n.flags=n.flags&-4097|2,st=!1,mn=n)}}else{if(eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,st=!1,mn=n}}}function yp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mn=n}function Bl(n){if(n!==mn)return!1;if(!st)return yp(n),st=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Wc(n.type,n.memoizedProps)),i&&(i=gn)){if(eh(n))throw _p(),Error(t(418));for(;i;)mp(n,i),i=ni(i.nextSibling)}if(yp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){gn=ni(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}gn=null}}else gn=mn?ni(n.stateNode.nextSibling):null;return!0}function _p(){for(var n=gn;n;)n=ni(n.nextSibling)}function no(){gn=mn=null,st=!1}function nh(n){Hn===null?Hn=[n]:Hn.push(n)}var RE=Se.ReactCurrentBatchConfig;function ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $l(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vp(n){var i=n._init;return i(n._payload)}function Ep(n){function i(b,x){if(n){var M=b.deletions;M===null?(b.deletions=[x],b.flags|=16):M.push(x)}}function a(b,x){if(!n)return null;for(;x!==null;)i(b,x),x=x.sibling;return null}function c(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function d(b,x){return b=fi(b,x),b.index=0,b.sibling=null,b}function p(b,x,M){return b.index=M,n?(M=b.alternate,M!==null?(M=M.index,M<x?(b.flags|=2,x):M):(b.flags|=2,x)):(b.flags|=1048576,x)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function I(b,x,M,Z){return x===null||x.tag!==6?(x=Gh(M,b.mode,Z),x.return=b,x):(x=d(x,M),x.return=b,x)}function P(b,x,M,Z){var de=M.type;return de===D?G(b,x,M.props.children,Z,M.key):x!==null&&(x.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===He&&vp(de)===x.type)?(Z=d(x,M.props),Z.ref=ma(b,x,M),Z.return=b,Z):(Z=fu(M.type,M.key,M.props,null,b.mode,Z),Z.ref=ma(b,x,M),Z.return=b,Z)}function F(b,x,M,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Kh(M,b.mode,Z),x.return=b,x):(x=d(x,M.children||[]),x.return=b,x)}function G(b,x,M,Z,de){return x===null||x.tag!==7?(x=fs(M,b.mode,Z,de),x.return=b,x):(x=d(x,M),x.return=b,x)}function K(b,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Gh(""+x,b.mode,M),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qe:return M=fu(x.type,x.key,x.props,null,b.mode,M),M.ref=ma(b,null,x),M.return=b,M;case Re:return x=Kh(x,b.mode,M),x.return=b,x;case He:var Z=x._init;return K(b,Z(x._payload),M)}if(Dn(x)||me(x))return x=fs(x,b.mode,M,null),x.return=b,x;$l(b,x)}return null}function W(b,x,M,Z){var de=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return de!==null?null:I(b,x,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:return M.key===de?P(b,x,M,Z):null;case Re:return M.key===de?F(b,x,M,Z):null;case He:return de=M._init,W(b,x,de(M._payload),Z)}if(Dn(M)||me(M))return de!==null?null:G(b,x,M,Z,null);$l(b,M)}return null}function se(b,x,M,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return b=b.get(M)||null,I(x,b,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case qe:return b=b.get(Z.key===null?M:Z.key)||null,P(x,b,Z,de);case Re:return b=b.get(Z.key===null?M:Z.key)||null,F(x,b,Z,de);case He:var ve=Z._init;return se(b,x,M,ve(Z._payload),de)}if(Dn(Z)||me(Z))return b=b.get(M)||null,G(x,b,Z,de,null);$l(x,Z)}return null}function ue(b,x,M,Z){for(var de=null,ve=null,Ee=x,Ae=x=0,Nt=null;Ee!==null&&Ae<M.length;Ae++){Ee.index>Ae?(Nt=Ee,Ee=null):Nt=Ee.sibling;var $e=W(b,Ee,M[Ae],Z);if($e===null){Ee===null&&(Ee=Nt);break}n&&Ee&&$e.alternate===null&&i(b,Ee),x=p($e,x,Ae),ve===null?de=$e:ve.sibling=$e,ve=$e,Ee=Nt}if(Ae===M.length)return a(b,Ee),st&&ss(b,Ae),de;if(Ee===null){for(;Ae<M.length;Ae++)Ee=K(b,M[Ae],Z),Ee!==null&&(x=p(Ee,x,Ae),ve===null?de=Ee:ve.sibling=Ee,ve=Ee);return st&&ss(b,Ae),de}for(Ee=c(b,Ee);Ae<M.length;Ae++)Nt=se(Ee,b,Ae,M[Ae],Z),Nt!==null&&(n&&Nt.alternate!==null&&Ee.delete(Nt.key===null?Ae:Nt.key),x=p(Nt,x,Ae),ve===null?de=Nt:ve.sibling=Nt,ve=Nt);return n&&Ee.forEach(function(pi){return i(b,pi)}),st&&ss(b,Ae),de}function he(b,x,M,Z){var de=me(M);if(typeof de!="function")throw Error(t(150));if(M=de.call(M),M==null)throw Error(t(151));for(var ve=de=null,Ee=x,Ae=x=0,Nt=null,$e=M.next();Ee!==null&&!$e.done;Ae++,$e=M.next()){Ee.index>Ae?(Nt=Ee,Ee=null):Nt=Ee.sibling;var pi=W(b,Ee,$e.value,Z);if(pi===null){Ee===null&&(Ee=Nt);break}n&&Ee&&pi.alternate===null&&i(b,Ee),x=p(pi,x,Ae),ve===null?de=pi:ve.sibling=pi,ve=pi,Ee=Nt}if($e.done)return a(b,Ee),st&&ss(b,Ae),de;if(Ee===null){for(;!$e.done;Ae++,$e=M.next())$e=K(b,$e.value,Z),$e!==null&&(x=p($e,x,Ae),ve===null?de=$e:ve.sibling=$e,ve=$e);return st&&ss(b,Ae),de}for(Ee=c(b,Ee);!$e.done;Ae++,$e=M.next())$e=se(Ee,b,Ae,$e.value,Z),$e!==null&&(n&&$e.alternate!==null&&Ee.delete($e.key===null?Ae:$e.key),x=p($e,x,Ae),ve===null?de=$e:ve.sibling=$e,ve=$e);return n&&Ee.forEach(function(sw){return i(b,sw)}),st&&ss(b,Ae),de}function ft(b,x,M,Z){if(typeof M=="object"&&M!==null&&M.type===D&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:e:{for(var de=M.key,ve=x;ve!==null;){if(ve.key===de){if(de=M.type,de===D){if(ve.tag===7){a(b,ve.sibling),x=d(ve,M.props.children),x.return=b,b=x;break e}}else if(ve.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===He&&vp(de)===ve.type){a(b,ve.sibling),x=d(ve,M.props),x.ref=ma(b,ve,M),x.return=b,b=x;break e}a(b,ve);break}else i(b,ve);ve=ve.sibling}M.type===D?(x=fs(M.props.children,b.mode,Z,M.key),x.return=b,b=x):(Z=fu(M.type,M.key,M.props,null,b.mode,Z),Z.ref=ma(b,x,M),Z.return=b,b=Z)}return v(b);case Re:e:{for(ve=M.key;x!==null;){if(x.key===ve)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){a(b,x.sibling),x=d(x,M.children||[]),x.return=b,b=x;break e}else{a(b,x);break}else i(b,x);x=x.sibling}x=Kh(M,b.mode,Z),x.return=b,b=x}return v(b);case He:return ve=M._init,ft(b,x,ve(M._payload),Z)}if(Dn(M))return ue(b,x,M,Z);if(me(M))return he(b,x,M,Z);$l(b,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(a(b,x.sibling),x=d(x,M),x.return=b,b=x):(a(b,x),x=Gh(M,b.mode,Z),x.return=b,b=x),v(b)):a(b,x)}return ft}var ro=Ep(!0),wp=Ep(!1),Hl=ri(null),ql=null,io=null,rh=null;function ih(){rh=io=ql=null}function sh(n){var i=Hl.current;nt(Hl),n._currentValue=i}function oh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function so(n,i){ql=n,rh=io=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(nn=!0),n.firstContext=null)}function Rn(n){var i=n._currentValue;if(rh!==n)if(n={context:n,memoizedValue:i,next:null},io===null){if(ql===null)throw Error(t(308));io=n,ql.dependencies={lanes:0,firstContext:n}}else io=io.next=n;return i}var os=null;function ah(n){os===null?os=[n]:os.push(n)}function Tp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ah(i)):(a.next=d.next,d.next=a),i.interleaved=a,Nr(n,c)}function Nr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var oi=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ai(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Nr(n,a)}return d=c.interleaved,d===null?(i.next=i,ah(c)):(i.next=d.next,d.next=i),c.interleaved=i,Nr(n,a)}function Wl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Yr(n,a)}}function Sp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Gl(n,i,a,c){var d=n.updateQueue;oi=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,F=P.next;P.next=null,v===null?p=F:v.next=F,v=P;var G=n.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==v&&(I===null?G.firstBaseUpdate=F:I.next=F,G.lastBaseUpdate=P))}if(p!==null){var K=d.baseState;v=0,G=F=P=null,I=p;do{var W=I.lane,se=I.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:se,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ue=n,he=I;switch(W=i,se=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){K=ue.call(se,K,W);break e}K=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,W=typeof ue=="function"?ue.call(se,K,W):ue,W==null)break e;K=ne({},K,W);break e;case 2:oi=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else se={eventTime:se,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(F=G=se,P=K):G=G.next=se,v|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(P=K),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);us|=v,n.lanes=v,n.memoizedState=K}}function Ap(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ga={},lr=ri(ga),ya=ri(ga),_a=ri(ga);function as(n){if(n===ga)throw Error(t(174));return n}function uh(n,i){switch(Je(_a,i),Je(ya,n),Je(lr,ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:re(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=re(i,n)}nt(lr),Je(lr,i)}function oo(){nt(lr),nt(ya),nt(_a)}function Rp(n){as(_a.current);var i=as(lr.current),a=re(i,n.type);i!==a&&(Je(ya,n),Je(lr,a))}function ch(n){ya.current===n&&(nt(lr),nt(ya))}var ot=ri(0);function Kl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var hh=[];function dh(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var Ql=Se.ReactCurrentDispatcher,fh=Se.ReactCurrentBatchConfig,ls=0,at=null,Tt=null,Pt=null,Yl=!1,va=!1,Ea=0,CE=0;function zt(){throw Error(t(321))}function ph(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!$n(n[a],i[a]))return!1;return!0}function mh(n,i,a,c,d,p){if(ls=p,at=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ql.current=n===null||n.memoizedState===null?xE:DE,n=a(c,d),va){p=0;do{if(va=!1,Ea=0,25<=p)throw Error(t(301));p+=1,Pt=Tt=null,i.updateQueue=null,Ql.current=VE,n=a(c,d)}while(va)}if(Ql.current=Zl,i=Tt!==null&&Tt.next!==null,ls=0,Pt=Tt=at=null,Yl=!1,i)throw Error(t(300));return n}function gh(){var n=Ea!==0;return Ea=0,n}function ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?at.memoizedState=Pt=n:Pt=Pt.next=n,Pt}function Cn(){if(Tt===null){var n=at.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var i=Pt===null?at.memoizedState:Pt.next;if(i!==null)Pt=i,Tt=n;else{if(n===null)throw Error(t(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?at.memoizedState=Pt=n:Pt=Pt.next=n}return Pt}function wa(n,i){return typeof i=="function"?i(n):i}function yh(n){var i=Cn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Tt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,F=p;do{var G=F.lane;if((ls&G)===G)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=K,v=c):P=P.next=K,at.lanes|=G,us|=G}F=F.next}while(F!==null&&F!==p);P===null?v=c:P.next=I,$n(c,i.memoizedState)||(nn=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,at.lanes|=p,us|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function _h(n){var i=Cn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);$n(p,i.memoizedState)||(nn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Cp(){}function Pp(n,i){var a=at,c=Cn(),d=i(),p=!$n(c.memoizedState,d);if(p&&(c.memoizedState=d,nn=!0),c=c.queue,vh(xp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||Pt!==null&&Pt.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Np.bind(null,a,c,d,i),void 0,null),kt===null)throw Error(t(349));(ls&30)!==0||kp(a,i,d)}return d}function kp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=at.updateQueue,i===null?(i={lastEffect:null,stores:null},at.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Np(n,i,a,c){i.value=a,i.getSnapshot=c,Dp(i)&&Vp(n)}function xp(n,i,a){return a(function(){Dp(i)&&Vp(n)})}function Dp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!$n(n,a)}catch{return!0}}function Vp(n){var i=Nr(n,1);i!==null&&Kn(i,n,1,-1)}function Op(n){var i=ur();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},i.queue=n,n=n.dispatch=NE.bind(null,at,n),[i.memoizedState,n]}function Ta(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=at.updateQueue,i===null?(i={lastEffect:null,stores:null},at.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Lp(){return Cn().memoizedState}function Xl(n,i,a,c){var d=ur();at.flags|=n,d.memoizedState=Ta(1|i,a,void 0,c===void 0?null:c)}function Jl(n,i,a,c){var d=Cn();c=c===void 0?null:c;var p=void 0;if(Tt!==null){var v=Tt.memoizedState;if(p=v.destroy,c!==null&&ph(c,v.deps)){d.memoizedState=Ta(i,a,p,c);return}}at.flags|=n,d.memoizedState=Ta(1|i,a,p,c)}function bp(n,i){return Xl(8390656,8,n,i)}function vh(n,i){return Jl(2048,8,n,i)}function Mp(n,i){return Jl(4,2,n,i)}function Fp(n,i){return Jl(4,4,n,i)}function Up(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function jp(n,i,a){return a=a!=null?a.concat([n]):null,Jl(4,4,Up.bind(null,i,n),a)}function Eh(){}function zp(n,i){var a=Cn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ph(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Bp(n,i){var a=Cn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ph(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function $p(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,nn=!0),n.memoizedState=a):($n(a,i)||(a=Xi(),at.lanes|=a,us|=a,n.baseState=!0),i)}function PE(n,i){var a=Me;Me=a!==0&&4>a?a:4,n(!0);var c=fh.transition;fh.transition={};try{n(!1),i()}finally{Me=a,fh.transition=c}}function Hp(){return Cn().memoizedState}function kE(n,i,a){var c=hi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},qp(n))Wp(i,a);else if(a=Tp(n,i,a,c),a!==null){var d=Xt();Kn(a,n,c,d),Gp(a,i,c)}}function NE(n,i,a){var c=hi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(qp(n))Wp(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,$n(I,v)){var P=i.interleaved;P===null?(d.next=d,ah(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Tp(n,i,d,c),a!==null&&(d=Xt(),Kn(a,n,c,d),Gp(a,i,c))}}function qp(n){var i=n.alternate;return n===at||i!==null&&i===at}function Wp(n,i){va=Yl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Gp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Yr(n,a)}}var Zl={readContext:Rn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},xE={readContext:Rn,useCallback:function(n,i){return ur().memoizedState=[n,i===void 0?null:i],n},useContext:Rn,useEffect:bp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Xl(4194308,4,Up.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Xl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Xl(4,2,n,i)},useMemo:function(n,i){var a=ur();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ur();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=kE.bind(null,at,n),[c.memoizedState,n]},useRef:function(n){var i=ur();return n={current:n},i.memoizedState=n},useState:Op,useDebugValue:Eh,useDeferredValue:function(n){return ur().memoizedState=n},useTransition:function(){var n=Op(!1),i=n[0];return n=PE.bind(null,n[1]),ur().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=at,d=ur();if(st){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),kt===null)throw Error(t(349));(ls&30)!==0||kp(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,bp(xp.bind(null,c,p,n),[n]),c.flags|=2048,Ta(9,Np.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=ur(),i=kt.identifierPrefix;if(st){var a=kr,c=Pr;a=(c&~(1<<32-Kt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=CE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},DE={readContext:Rn,useCallback:zp,useContext:Rn,useEffect:vh,useImperativeHandle:jp,useInsertionEffect:Mp,useLayoutEffect:Fp,useMemo:Bp,useReducer:yh,useRef:Lp,useState:function(){return yh(wa)},useDebugValue:Eh,useDeferredValue:function(n){var i=Cn();return $p(i,Tt.memoizedState,n)},useTransition:function(){var n=yh(wa)[0],i=Cn().memoizedState;return[n,i]},useMutableSource:Cp,useSyncExternalStore:Pp,useId:Hp,unstable_isNewReconciler:!1},VE={readContext:Rn,useCallback:zp,useContext:Rn,useEffect:vh,useImperativeHandle:jp,useInsertionEffect:Mp,useLayoutEffect:Fp,useMemo:Bp,useReducer:_h,useRef:Lp,useState:function(){return _h(wa)},useDebugValue:Eh,useDeferredValue:function(n){var i=Cn();return Tt===null?i.memoizedState=n:$p(i,Tt.memoizedState,n)},useTransition:function(){var n=_h(wa)[0],i=Cn().memoizedState;return[n,i]},useMutableSource:Cp,useSyncExternalStore:Pp,useId:Hp,unstable_isNewReconciler:!1};function qn(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function wh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var eu={isMounted:function(n){return(n=n._reactInternals)?bn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Xt(),d=hi(n),p=xr(c,d);p.payload=i,a!=null&&(p.callback=a),i=ai(n,p,d),i!==null&&(Kn(i,n,d,c),Wl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Xt(),d=hi(n),p=xr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ai(n,p,d),i!==null&&(Kn(i,n,d,c),Wl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Xt(),c=hi(n),d=xr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ai(n,d,c),i!==null&&(Kn(i,n,c,a),Wl(i,n,c))}};function Kp(n,i,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!la(a,c)||!la(d,p):!0}function Qp(n,i,a){var c=!1,d=ii,p=i.contextType;return typeof p=="object"&&p!==null?p=Rn(p):(d=tn(i)?rs:jt.current,c=i.contextTypes,p=(c=c!=null)?Zs(n,d):ii),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=eu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Yp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&eu.enqueueReplaceState(i,i.state,null)}function Th(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Rn(p):(p=tn(i)?rs:jt.current,d.context=Zs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(wh(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&eu.enqueueReplaceState(d,d.state,null),Gl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ao(n,i){try{var a="",c=i;do a+=Ne(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Ih(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Sh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var OE=typeof WeakMap=="function"?WeakMap:Map;function Xp(n,i,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){au||(au=!0,Uh=c),Sh(n,i)},a}function Jp(n,i,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Sh(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Sh(n,i),typeof c!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Zp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new OE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=KE.bind(null,n,i,a),i.then(n,n))}function em(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function tm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xr(-1,1),i.tag=2,ai(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var LE=Se.ReactCurrentOwner,nn=!1;function Yt(n,i,a,c){i.child=n===null?wp(i,null,a,c):ro(i,n.child,a,c)}function nm(n,i,a,c,d){a=a.render;var p=i.ref;return so(i,d),c=mh(n,i,a,c,p,d),a=gh(),n!==null&&!nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(st&&a&&Jc(i),i.flags|=1,Yt(n,i,c,d),i.child)}function rm(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Wh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,im(n,i,p,c,d)):(n=fu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(v,c)&&n.ref===i.ref)return Dr(n,i,d)}return i.flags|=1,n=fi(p,c),n.ref=i.ref,n.return=i,i.child=n}function im(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(la(p,c)&&n.ref===i.ref)if(nn=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(nn=!0);else return i.lanes=n.lanes,Dr(n,i,d)}return Ah(n,i,a,c,d)}function sm(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(uo,yn),yn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Je(uo,yn),yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Je(uo,yn),yn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Je(uo,yn),yn|=c;return Yt(n,i,d,a),i.child}function om(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ah(n,i,a,c,d){var p=tn(a)?rs:jt.current;return p=Zs(i,p),so(i,d),a=mh(n,i,a,c,p,d),c=gh(),n!==null&&!nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(st&&c&&Jc(i),i.flags|=1,Yt(n,i,a,d),i.child)}function am(n,i,a,c,d){if(tn(a)){var p=!0;Fl(i)}else p=!1;if(so(i,d),i.stateNode===null)nu(n,i),Qp(i,a,c),Th(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=Rn(F):(F=tn(a)?rs:jt.current,F=Zs(i,F));var G=a.getDerivedStateFromProps,K=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==F)&&Yp(i,v,c,F),oi=!1;var W=i.memoizedState;v.state=W,Gl(i,c,v,d),P=i.memoizedState,I!==c||W!==P||en.current||oi?(typeof G=="function"&&(wh(i,a,G,c),P=i.memoizedState),(I=oi||Kp(i,a,I,c,W,P,F))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Ip(n,i),I=i.memoizedProps,F=i.type===i.elementType?I:qn(i.type,I),v.props=F,K=i.pendingProps,W=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Rn(P):(P=tn(a)?rs:jt.current,P=Zs(i,P));var se=a.getDerivedStateFromProps;(G=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==K||W!==P)&&Yp(i,v,c,P),oi=!1,W=i.memoizedState,v.state=W,Gl(i,c,v,d);var ue=i.memoizedState;I!==K||W!==ue||en.current||oi?(typeof se=="function"&&(wh(i,a,se,c),ue=i.memoizedState),(F=oi||Kp(i,a,F,c,W,ue,P)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Rh(n,i,a,c,p,d)}function Rh(n,i,a,c,d,p){om(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&dp(i,a,!1),Dr(n,i,p);c=i.stateNode,LE.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=ro(i,n.child,null,p),i.child=ro(i,null,I,p)):Yt(n,i,I,p),i.memoizedState=c.state,d&&dp(i,a,!0),i.child}function lm(n){var i=n.stateNode;i.pendingContext?cp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&cp(n,i.context,!1),uh(n,i.containerInfo)}function um(n,i,a,c,d){return no(),nh(d),i.flags|=256,Yt(n,i,a,c),i.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function cm(n,i,a){var c=i.pendingProps,d=ot.current,p=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Je(ot,d&1),n===null)return th(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=pu(v,c,0,null),n=fs(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Ph(a),i.memoizedState=Ch,n):kh(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return bE(n,i,v,c,I,d,a);if(p){p=c.fallback,v=i.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=fi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=fi(I,p):(p=fs(p,v,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=n.child.memoizedState,v=v===null?Ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,i.memoizedState=Ch,c}return p=n.child,n=p.sibling,c=fi(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function kh(n,i){return i=pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tu(n,i,a,c){return c!==null&&nh(c),ro(i,n.child,null,a),n=kh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function bE(n,i,a,c,d,p,v){if(a)return i.flags&256?(i.flags&=-257,c=Ih(Error(t(422))),tu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=pu({mode:"visible",children:c.children},d,0,null),p=fs(p,d,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&ro(i,n.child,null,v),i.child.memoizedState=Ph(v),i.memoizedState=Ch,p);if((i.mode&1)===0)return tu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=Ih(p,c,void 0),tu(n,i,v,c)}if(I=(v&n.childLanes)!==0,nn||I){if(c=kt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Nr(n,d),Kn(c,n,d,-1))}return qh(),c=Ih(Error(t(421))),tu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=QE.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,gn=ni(d.nextSibling),mn=i,st=!0,Hn=null,n!==null&&(Sn[An++]=Pr,Sn[An++]=kr,Sn[An++]=is,Pr=n.id,kr=n.overflow,is=i),i=kh(i,c.children),i.flags|=4096,i)}function hm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),oh(n.return,i,a)}function Nh(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function dm(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Yt(n,i,c.children,a),c=ot.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hm(n,a,i);else if(n.tag===19)hm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Je(ot,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Kl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Nh(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Kl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Nh(i,!0,a,null,p);break;case"together":Nh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Dr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),us|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ME(n,i,a){switch(i.tag){case 3:lm(i),no();break;case 5:Rp(i);break;case 1:tn(i.type)&&Fl(i);break;case 4:uh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Je(Hl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Je(ot,ot.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?cm(n,i,a):(Je(ot,ot.current&1),n=Dr(n,i,a),n!==null?n.sibling:null);Je(ot,ot.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return dm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Je(ot,ot.current),c)break;return null;case 22:case 23:return i.lanes=0,sm(n,i,a)}return Dr(n,i,a)}var fm,xh,pm,mm;fm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xh=function(){},pm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,as(lr.current);var p=null;switch(a){case"input":d=xn(n,d),c=xn(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=ji(n,d),c=ji(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ll)}$o(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&tt("scroll",n),p||I===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},mm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ia(n,i){if(!st)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function FE(n,i,a){var c=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(i),null;case 1:return tn(i.type)&&Ml(),Bt(i),null;case 3:return c=i.stateNode,oo(),nt(en),nt(jt),dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hn!==null&&(Bh(Hn),Hn=null))),xh(n,i),Bt(i),null;case 5:ch(i);var d=as(_a.current);if(a=i.type,n!==null&&i.stateNode!=null)pm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Bt(i),null}if(n=as(lr.current),Bl(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[ar]=i,c[fa]=p,n=(i.mode&1)!==0,a){case"dialog":tt("cancel",c),tt("close",c);break;case"iframe":case"object":case"embed":tt("load",c);break;case"video":case"audio":for(d=0;d<ca.length;d++)tt(ca[d],c);break;case"source":tt("error",c);break;case"img":case"image":case"link":tt("error",c),tt("load",c);break;case"details":tt("toggle",c);break;case"input":Br(c,p),tt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},tt("invalid",c);break;case"textarea":Hr(c,p),tt("invalid",c)}$o(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Ol(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Ol(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&tt("scroll",c)}switch(a){case"input":vn(c),Ss(c,p,!0);break;case"textarea":vn(c),zi(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ll)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[ar]=i,n[fa]=c,fm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Ho(a,c),a){case"dialog":tt("cancel",n),tt("close",n),d=c;break;case"iframe":case"object":case"embed":tt("load",n),d=c;break;case"video":case"audio":for(d=0;d<ca.length;d++)tt(ca[d],n);d=c;break;case"source":tt("error",n),d=c;break;case"img":case"image":case"link":tt("error",n),tt("load",n),d=c;break;case"details":tt("toggle",n),d=c;break;case"input":Br(n,c),d=xn(n,c),tt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),tt("invalid",n);break;case"textarea":Hr(n,c),d=ji(n,c),tt("invalid",n);break;default:d=c}$o(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?Bi(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Y(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&pe(n,P):typeof P=="number"&&pe(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&tt("scroll",n):P!=null&&ge(n,p,P,v))}switch(a){case"input":vn(n),Ss(n,c,!1);break;case"textarea":vn(n),zi(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Vn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Vn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ll)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bt(i),null;case 6:if(n&&i.stateNode!=null)mm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(_a.current),as(lr.current),Bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[ar]=i,(p=c.nodeValue!==a)&&(n=mn,n!==null))switch(n.tag){case 3:Ol(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ol(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ar]=i,i.stateNode=c}return Bt(i),null;case 13:if(nt(ot),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(st&&gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_p(),no(),i.flags|=98560,p=!1;else if(p=Bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[ar]=i}else no(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bt(i),p=!1}else Hn!==null&&(Bh(Hn),Hn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(ot.current&1)!==0?It===0&&(It=3):qh())),i.updateQueue!==null&&(i.flags|=4),Bt(i),null);case 4:return oo(),xh(n,i),n===null&&ha(i.stateNode.containerInfo),Bt(i),null;case 10:return sh(i.type._context),Bt(i),null;case 17:return tn(i.type)&&Ml(),Bt(i),null;case 19:if(nt(ot),p=i.memoizedState,p===null)return Bt(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)Ia(p,!1);else{if(It!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Kl(n),v!==null){for(i.flags|=128,Ia(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Je(ot,ot.current&1|2),i.child}n=n.sibling}p.tail!==null&&Xe()>co&&(i.flags|=128,c=!0,Ia(p,!1),i.lanes=4194304)}else{if(!c)if(n=Kl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!st)return Bt(i),null}else 2*Xe()-p.renderingStartTime>co&&a!==1073741824&&(i.flags|=128,c=!0,Ia(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(a=p.last,a!==null?a.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Xe(),i.sibling=null,a=ot.current,Je(ot,c?a&1|2:a&1),i):(Bt(i),null);case 22:case 23:return Hh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(yn&1073741824)!==0&&(Bt(i),i.subtreeFlags&6&&(i.flags|=8192)):Bt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function UE(n,i){switch(Zc(i),i.tag){case 1:return tn(i.type)&&Ml(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return oo(),nt(en),nt(jt),dh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ch(i),null;case 13:if(nt(ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));no()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return nt(ot),null;case 4:return oo(),null;case 10:return sh(i.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var ru=!1,$t=!1,jE=typeof WeakSet=="function"?WeakSet:Set,le=null;function lo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ut(n,i,c)}else a.current=null}function Dh(n,i,a){try{a()}catch(c){ut(n,i,c)}}var gm=!1;function zE(n,i){if(Hc=Zr,n=Kf(),bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,F=0,G=0,K=n,W=null;t:for(;;){for(var se;K!==a||d!==0&&K.nodeType!==3||(I=v+d),K!==p||c!==0&&K.nodeType!==3||(P=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(se=K.firstChild)!==null;)W=K,K=se;for(;;){if(K===n)break t;if(W===a&&++F===d&&(I=v),W===p&&++G===c&&(P=v),(se=K.nextSibling)!==null)break;K=W,W=K.parentNode}K=se}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:n,selectionRange:a},Zr=!1,le=i;le!==null;)if(i=le,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,le=n;else for(;le!==null;){i=le;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,ft=ue.memoizedState,b=i.stateNode,x=b.getSnapshotBeforeUpdate(i.elementType===i.type?he:qn(i.type,he),ft);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=i.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){ut(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,le=n;break}le=i.return}return ue=gm,gm=!1,ue}function Sa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Dh(i,a,p)}d=d.next}while(d!==c)}}function iu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function ym(n){var i=n.alternate;i!==null&&(n.alternate=null,ym(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ar],delete i[fa],delete i[Qc],delete i[IE],delete i[SE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _m(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ll));else if(c!==4&&(n=n.child,n!==null))for(Oh(n,i,a),n=n.sibling;n!==null;)Oh(n,i,a),n=n.sibling}function Lh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lh(n,i,a),n=n.sibling;n!==null;)Lh(n,i,a),n=n.sibling}var Lt=null,Wn=!1;function li(n,i,a){for(a=a.child;a!==null;)Em(n,i,a),a=a.sibling}function Em(n,i,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 5:$t||lo(a,i);case 6:var c=Lt,d=Wn;Lt=null,li(n,i,a),Lt=c,Wn=d,Lt!==null&&(Wn?(n=Lt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(Wn?(n=Lt,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),zn(n)):Kc(Lt,a.stateNode));break;case 4:c=Lt,d=Wn,Lt=a.stateNode.containerInfo,Wn=!0,li(n,i,a),Lt=c,Wn=d;break;case 0:case 11:case 14:case 15:if(!$t&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Dh(a,i,v),d=d.next}while(d!==c)}li(n,i,a);break;case 1:if(!$t&&(lo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){ut(a,i,I)}li(n,i,a);break;case 21:li(n,i,a);break;case 22:a.mode&1?($t=(c=$t)||a.memoizedState!==null,li(n,i,a),$t=c):li(n,i,a);break;default:li(n,i,a)}}function wm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jE),i.forEach(function(c){var d=YE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Gn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Lt=I.stateNode,Wn=!1;break e;case 3:Lt=I.stateNode.containerInfo,Wn=!0;break e;case 4:Lt=I.stateNode.containerInfo,Wn=!0;break e}I=I.return}if(Lt===null)throw Error(t(160));Em(p,v,d),Lt=null,Wn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){ut(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tm(i,n),i=i.sibling}function Tm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gn(i,n),cr(n),c&4){try{Sa(3,n,n.return),iu(3,n)}catch(he){ut(n,n.return,he)}try{Sa(5,n,n.return)}catch(he){ut(n,n.return,he)}}break;case 1:Gn(i,n),cr(n),c&512&&a!==null&&lo(a,a.return);break;case 5:if(Gn(i,n),cr(n),c&512&&a!==null&&lo(a,a.return),n.flags&32){var d=n.stateNode;try{pe(d,"")}catch(he){ut(n,n.return,he)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Fi(d,p),Ho(I,v);var F=Ho(I,p);for(v=0;v<P.length;v+=2){var G=P[v],K=P[v+1];G==="style"?Bi(d,K):G==="dangerouslySetInnerHTML"?Y(d,K):G==="children"?pe(d,K):ge(d,G,K,F)}switch(I){case"input":Ui(d,p);break;case"textarea":qr(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var se=p.value;se!=null?Vn(d,!!p.multiple,se,!1):W!==!!p.multiple&&(p.defaultValue!=null?Vn(d,!!p.multiple,p.defaultValue,!0):Vn(d,!!p.multiple,p.multiple?[]:"",!1))}d[fa]=p}catch(he){ut(n,n.return,he)}}break;case 6:if(Gn(i,n),cr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(he){ut(n,n.return,he)}}break;case 3:if(Gn(i,n),cr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(i.containerInfo)}catch(he){ut(n,n.return,he)}break;case 4:Gn(i,n),cr(n);break;case 13:Gn(i,n),cr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Fh=Xe())),c&4&&wm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?($t=(F=$t)||G,Gn(i,n),$t=F):Gn(i,n),cr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(le=n,G=n.child;G!==null;){for(K=le=G;le!==null;){switch(W=le,se=W.child,W.tag){case 0:case 11:case 14:case 15:Sa(4,W,W.return);break;case 1:lo(W,W.return);var ue=W.stateNode;if(typeof ue.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(he){ut(c,a,he)}}break;case 5:lo(W,W.return);break;case 22:if(W.memoizedState!==null){Am(K);continue}}se!==null?(se.return=W,le=se):Am(K)}G=G.sibling}e:for(G=null,K=n;;){if(K.tag===5){if(G===null){G=K;try{d=K.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=K.stateNode,P=K.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Rt("display",v))}catch(he){ut(n,n.return,he)}}}else if(K.tag===6){if(G===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(he){ut(n,n.return,he)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;G===K&&(G=null),K=K.return}G===K&&(G=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Gn(i,n),cr(n),c&4&&wm(n);break;case 21:break;default:Gn(i,n),cr(n)}}function cr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(_m(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(pe(d,""),c.flags&=-33);var p=vm(n);Lh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=vm(n);Oh(n,I,v);break;default:throw Error(t(161))}}catch(P){ut(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function BE(n,i,a){le=n,Im(n)}function Im(n,i,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ru;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||$t;I=ru;var F=$t;if(ru=v,($t=P)&&!F)for(le=d;le!==null;)v=le,P=v.child,v.tag===22&&v.memoizedState!==null?Rm(d):P!==null?(P.return=v,le=P):Rm(d);for(;p!==null;)le=p,Im(p),p=p.sibling;le=d,ru=I,$t=F}Sm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,le=p):Sm(n)}}function Sm(n){for(;le!==null;){var i=le;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:$t||iu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!$t)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:qn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ap(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ap(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var K=G.dehydrated;K!==null&&zn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||i.flags&512&&Vh(i)}catch(W){ut(i,i.return,W)}}if(i===n){le=null;break}if(a=i.sibling,a!==null){a.return=i.return,le=a;break}le=i.return}}function Am(n){for(;le!==null;){var i=le;if(i===n){le=null;break}var a=i.sibling;if(a!==null){a.return=i.return,le=a;break}le=i.return}}function Rm(n){for(;le!==null;){var i=le;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{iu(4,i)}catch(P){ut(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){ut(i,d,P)}}var p=i.return;try{Vh(i)}catch(P){ut(i,p,P)}break;case 5:var v=i.return;try{Vh(i)}catch(P){ut(i,v,P)}}}catch(P){ut(i,i.return,P)}if(i===n){le=null;break}var I=i.sibling;if(I!==null){I.return=i.return,le=I;break}le=i.return}}var $E=Math.ceil,su=Se.ReactCurrentDispatcher,bh=Se.ReactCurrentOwner,Pn=Se.ReactCurrentBatchConfig,ze=0,kt=null,yt=null,bt=0,yn=0,uo=ri(0),It=0,Aa=null,us=0,ou=0,Mh=0,Ra=null,rn=null,Fh=0,co=1/0,Vr=null,au=!1,Uh=null,ui=null,lu=!1,ci=null,uu=0,Ca=0,jh=null,cu=-1,hu=0;function Xt(){return(ze&6)!==0?Xe():cu!==-1?cu:cu=Xe()}function hi(n){return(n.mode&1)===0?1:(ze&2)!==0&&bt!==0?bt&-bt:RE.transition!==null?(hu===0&&(hu=Xi()),hu):(n=Me,n!==0||(n=window.event,n=n===void 0?16:ta(n.type)),n)}function Kn(n,i,a,c){if(50<Ca)throw Ca=0,jh=null,Error(t(185));Qr(n,a,c),((ze&2)===0||n!==kt)&&(n===kt&&((ze&2)===0&&(ou|=a),It===4&&di(n,bt)),sn(n,c),a===1&&ze===0&&(i.mode&1)===0&&(co=Xe()+500,Ul&&si()))}function sn(n,i){var a=n.callbackNode;wr(n,i);var c=Yi(n,n===kt?bt:0);if(c===0)a!==null&&Yo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Yo(a),i===1)n.tag===0?AE(Pm.bind(null,n)):fp(Pm.bind(null,n)),wE(function(){(ze&6)===0&&si()}),a=null;else{switch(Xr(c)){case 1:a=Ki;break;case 4:a=Wr;break;case 16:a=wn;break;case 536870912:a=hl;break;default:a=wn}a=bm(a,Cm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Cm(n,i){if(cu=-1,hu=0,(ze&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ho()&&n.callbackNode!==a)return null;var c=Yi(n,n===kt?bt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=du(n,c);else{i=c;var d=ze;ze|=2;var p=Nm();(kt!==n||bt!==i)&&(Vr=null,co=Xe()+500,hs(n,i));do try{WE();break}catch(I){km(n,I)}while(!0);ih(),su.current=p,ze=d,yt!==null?i=0:(kt=null,bt=0,i=It)}if(i!==0){if(i===2&&(d=dn(n),d!==0&&(c=d,i=zh(n,d))),i===1)throw a=Aa,hs(n,0),di(n,c),sn(n,Xe()),a;if(i===6)di(n,c);else{if(d=n.current.alternate,(c&30)===0&&!HE(d)&&(i=du(n,c),i===2&&(p=dn(n),p!==0&&(c=p,i=zh(n,p))),i===1))throw a=Aa,hs(n,0),di(n,c),sn(n,Xe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ds(n,rn,Vr);break;case 3:if(di(n,c),(c&130023424)===c&&(i=Fh+500-Xe(),10<i)){if(Yi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Xt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gc(ds.bind(null,n,rn,Vr),i);break}ds(n,rn,Vr);break;case 4:if(di(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Kt(c);p=1<<v,v=i[v],v>d&&(d=v),c&=~p}if(c=d,c=Xe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$E(c/1960))-c,10<c){n.timeoutHandle=Gc(ds.bind(null,n,rn,Vr),c);break}ds(n,rn,Vr);break;case 5:ds(n,rn,Vr);break;default:throw Error(t(329))}}}return sn(n,Xe()),n.callbackNode===a?Cm.bind(null,n):null}function zh(n,i){var a=Ra;return n.current.memoizedState.isDehydrated&&(hs(n,i).flags|=256),n=du(n,i),n!==2&&(i=rn,rn=a,i!==null&&Bh(i)),n}function Bh(n){rn===null?rn=n:rn.push.apply(rn,n)}function HE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!$n(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function di(n,i){for(i&=~Mh,i&=~ou,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Kt(i),c=1<<a;n[a]=-1,i&=~c}}function Pm(n){if((ze&6)!==0)throw Error(t(327));ho();var i=Yi(n,0);if((i&1)===0)return sn(n,Xe()),null;var a=du(n,i);if(n.tag!==0&&a===2){var c=dn(n);c!==0&&(i=c,a=zh(n,c))}if(a===1)throw a=Aa,hs(n,0),di(n,i),sn(n,Xe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ds(n,rn,Vr),sn(n,Xe()),null}function $h(n,i){var a=ze;ze|=1;try{return n(i)}finally{ze=a,ze===0&&(co=Xe()+500,Ul&&si())}}function cs(n){ci!==null&&ci.tag===0&&(ze&6)===0&&ho();var i=ze;ze|=1;var a=Pn.transition,c=Me;try{if(Pn.transition=null,Me=1,n)return n()}finally{Me=c,Pn.transition=a,ze=i,(ze&6)===0&&si()}}function Hh(){yn=uo.current,nt(uo)}function hs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,EE(a)),yt!==null)for(a=yt.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ml();break;case 3:oo(),nt(en),nt(jt),dh();break;case 5:ch(c);break;case 4:oo();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:sh(c.type._context);break;case 22:case 23:Hh()}a=a.return}if(kt=n,yt=n=fi(n.current,null),bt=yn=i,It=0,Aa=null,Mh=ou=us=0,rn=Ra=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}os=null}return n}function km(n,i){do{var a=yt;try{if(ih(),Ql.current=Zl,Yl){for(var c=at.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Yl=!1}if(ls=0,Pt=Tt=at=null,va=!1,Ea=0,bh.current=null,a===null||a.return===null){It=1,Aa=i,yt=null;break}e:{var p=n,v=a.return,I=a,P=i;if(i=bt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,G=I,K=G.tag;if((G.mode&1)===0&&(K===0||K===11||K===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var se=em(v);if(se!==null){se.flags&=-257,tm(se,v,I,p,i),se.mode&1&&Zp(p,F,i),i=se,P=F;var ue=i.updateQueue;if(ue===null){var he=new Set;he.add(P),i.updateQueue=he}else ue.add(P);break e}else{if((i&1)===0){Zp(p,F,i),qh();break e}P=Error(t(426))}}else if(st&&I.mode&1){var ft=em(v);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),tm(ft,v,I,p,i),nh(ao(P,I));break e}}p=P=ao(P,I),It!==4&&(It=2),Ra===null?Ra=[p]:Ra.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var b=Xp(p,P,i);Sp(p,b);break e;case 1:I=P;var x=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ui===null||!ui.has(M)))){p.flags|=65536,i&=-i,p.lanes|=i;var Z=Jp(p,I,i);Sp(p,Z);break e}}p=p.return}while(p!==null)}Dm(a)}catch(de){i=de,yt===a&&a!==null&&(yt=a=a.return);continue}break}while(!0)}function Nm(){var n=su.current;return su.current=Zl,n===null?Zl:n}function qh(){(It===0||It===3||It===2)&&(It=4),kt===null||(us&268435455)===0&&(ou&268435455)===0||di(kt,bt)}function du(n,i){var a=ze;ze|=2;var c=Nm();(kt!==n||bt!==i)&&(Vr=null,hs(n,i));do try{qE();break}catch(d){km(n,d)}while(!0);if(ih(),ze=a,su.current=c,yt!==null)throw Error(t(261));return kt=null,bt=0,It}function qE(){for(;yt!==null;)xm(yt)}function WE(){for(;yt!==null&&!ul();)xm(yt)}function xm(n){var i=Lm(n.alternate,n,yn);n.memoizedProps=n.pendingProps,i===null?Dm(n):yt=i,bh.current=null}function Dm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=FE(a,i,yn),a!==null){yt=a;return}}else{if(a=UE(a,i),a!==null){a.flags&=32767,yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,yt=null;return}}if(i=i.sibling,i!==null){yt=i;return}yt=i=n}while(i!==null);It===0&&(It=5)}function ds(n,i,a){var c=Me,d=Pn.transition;try{Pn.transition=null,Me=1,GE(n,i,a,c)}finally{Pn.transition=d,Me=c}return null}function GE(n,i,a,c){do ho();while(ci!==null);if((ze&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ye(n,p),n===kt&&(yt=kt=null,bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||lu||(lu=!0,bm(wn,function(){return ho(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Pn.transition,Pn.transition=null;var v=Me;Me=1;var I=ze;ze|=4,bh.current=null,zE(n,a),Tm(a,n),fE(qc),Zr=!!Hc,qc=Hc=null,n.current=a,BE(a),Pc(),ze=I,Me=v,Pn.transition=p}else n.current=a;if(lu&&(lu=!1,ci=n,uu=d),p=n.pendingLanes,p===0&&(ui=null),dl(a.stateNode),sn(n,Xe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(au)throw au=!1,n=Uh,Uh=null,n;return(uu&1)!==0&&n.tag!==0&&ho(),p=n.pendingLanes,(p&1)!==0?n===jh?Ca++:(Ca=0,jh=n):Ca=0,si(),null}function ho(){if(ci!==null){var n=Xr(uu),i=Pn.transition,a=Me;try{if(Pn.transition=null,Me=16>n?16:n,ci===null)var c=!1;else{if(n=ci,ci=null,uu=0,(ze&6)!==0)throw Error(t(331));var d=ze;for(ze|=4,le=n.current;le!==null;){var p=le,v=p.child;if((le.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(le=F;le!==null;){var G=le;switch(G.tag){case 0:case 11:case 15:Sa(8,G,p)}var K=G.child;if(K!==null)K.return=G,le=K;else for(;le!==null;){G=le;var W=G.sibling,se=G.return;if(ym(G),G===F){le=null;break}if(W!==null){W.return=se,le=W;break}le=se}}}var ue=p.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var ft=he.sibling;he.sibling=null,he=ft}while(he!==null)}}le=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,le=v;else e:for(;le!==null;){if(p=le,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Sa(9,p,p.return)}var b=p.sibling;if(b!==null){b.return=p.return,le=b;break e}le=p.return}}var x=n.current;for(le=x;le!==null;){v=le;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,le=M;else e:for(v=x;le!==null;){if(I=le,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:iu(9,I)}}catch(de){ut(I,I.return,de)}if(I===v){le=null;break e}var Z=I.sibling;if(Z!==null){Z.return=I.return,le=Z;break e}le=I.return}}if(ze=d,si(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Qi,n)}catch{}c=!0}return c}finally{Me=a,Pn.transition=i}}return!1}function Vm(n,i,a){i=ao(a,i),i=Xp(n,i,1),n=ai(n,i,1),i=Xt(),n!==null&&(Qr(n,1,i),sn(n,i))}function ut(n,i,a){if(n.tag===3)Vm(n,n,a);else for(;i!==null;){if(i.tag===3){Vm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){n=ao(a,n),n=Jp(i,n,1),i=ai(i,n,1),n=Xt(),i!==null&&(Qr(i,1,n),sn(i,n));break}}i=i.return}}function KE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Xt(),n.pingedLanes|=n.suspendedLanes&a,kt===n&&(bt&a)===a&&(It===4||It===3&&(bt&130023424)===bt&&500>Xe()-Fh?hs(n,0):Mh|=a),sn(n,i)}function Om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Os,Os<<=1,(Os&130023424)===0&&(Os=4194304)));var a=Xt();n=Nr(n,i),n!==null&&(Qr(n,i,a),sn(n,a))}function QE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Om(n,a)}function YE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Om(n,a)}var Lm;Lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||en.current)nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return nn=!1,ME(n,i,a);nn=(n.flags&131072)!==0}else nn=!1,st&&(i.flags&1048576)!==0&&pp(i,zl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nu(n,i),n=i.pendingProps;var d=Zs(i,jt.current);so(i,a),d=mh(null,i,c,n,d,a);var p=gh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,tn(c)?(p=!0,Fl(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lh(i),d.updater=eu,i.stateNode=d,d._reactInternals=i,Th(i,c,n,a),i=Rh(null,i,c,!0,p,a)):(i.tag=0,st&&p&&Jc(i),Yt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=JE(c),n=qn(c,n),d){case 0:i=Ah(null,i,c,n,a);break e;case 1:i=am(null,i,c,n,a);break e;case 11:i=nm(null,i,c,n,a);break e;case 14:i=rm(null,i,c,qn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),Ah(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),am(n,i,c,d,a);case 3:e:{if(lm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Ip(n,i),Gl(i,c,null,a);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ao(Error(t(423)),i),i=um(n,i,c,a,d);break e}else if(c!==d){d=ao(Error(t(424)),i),i=um(n,i,c,a,d);break e}else for(gn=ni(i.stateNode.containerInfo.firstChild),mn=i,st=!0,Hn=null,a=wp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(no(),c===d){i=Dr(n,i,a);break e}Yt(n,i,c,a)}i=i.child}return i;case 5:return Rp(i),n===null&&th(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Wc(c,d)?v=null:p!==null&&Wc(c,p)&&(i.flags|=32),om(n,i),Yt(n,i,v,a),i.child;case 6:return n===null&&th(i),null;case 13:return cm(n,i,a);case 4:return uh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ro(i,null,c,a):Yt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),nm(n,i,c,d,a);case 7:return Yt(n,i,i.pendingProps,a),i.child;case 8:return Yt(n,i,i.pendingProps.children,a),i.child;case 12:return Yt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,v=d.value,Je(Hl,c._currentValue),c._currentValue=v,p!==null)if($n(p.value,v)){if(p.children===d.children&&!en.current){i=Dr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=xr(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?P.next=P:(P.next=G.next,G.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),oh(p.return,a,i),I.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),oh(v,a,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Yt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,so(i,a),d=Rn(d),c=c(d),i.flags|=1,Yt(n,i,c,a),i.child;case 14:return c=i.type,d=qn(c,i.pendingProps),d=qn(c.type,d),rm(n,i,c,d,a);case 15:return im(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),nu(n,i),i.tag=1,tn(c)?(n=!0,Fl(i)):n=!1,so(i,a),Qp(i,c,d),Th(i,c,d,a),Rh(null,i,c,!0,n,a);case 19:return dm(n,i,a);case 22:return sm(n,i,a)}throw Error(t(156,i.tag))};function bm(n,i){return Ds(n,i)}function XE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,i,a,c){return new XE(n,i,a,c)}function Wh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JE(n){if(typeof n=="function")return Wh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===At)return 14}return 2}function fi(n,i){var a=n.alternate;return a===null?(a=kn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fu(n,i,a,c,d,p){var v=2;if(c=n,typeof n=="function")Wh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return fs(a.children,d,p,i);case T:v=8,d|=8;break;case S:return n=kn(12,a,i,d|2),n.elementType=S,n.lanes=p,n;case A:return n=kn(13,a,i,d),n.elementType=A,n.lanes=p,n;case _e:return n=kn(19,a,i,d),n.elementType=_e,n.lanes=p,n;case We:return pu(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case N:v=9;break e;case O:v=11;break e;case At:v=14;break e;case He:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=kn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function fs(n,i,a,c){return n=kn(7,n,c,i),n.lanes=a,n}function pu(n,i,a,c){return n=kn(22,n,c,i),n.elementType=We,n.lanes=a,n.stateNode={isHidden:!1},n}function Gh(n,i,a){return n=kn(6,n,null,i),n.lanes=a,n}function Kh(n,i,a){return i=kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ZE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qh(n,i,a,c,d,p,v,I,P){return n=new ZE(n,i,a,I,P),i===1?(i=1,p===!0&&(i|=8)):i=0,p=kn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(p),n}function ew(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mm(n){if(!n)return ii;n=n._reactInternals;e:{if(bn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(tn(a))return hp(n,a,i)}return i}function Fm(n,i,a,c,d,p,v,I,P){return n=Qh(a,c,!0,n,d,p,v,I,P),n.context=Mm(null),a=n.current,c=Xt(),d=hi(a),p=xr(c,d),p.callback=i??null,ai(a,p,d),n.current.lanes=d,Qr(n,d,c),sn(n,c),n}function mu(n,i,a,c){var d=i.current,p=Xt(),v=hi(d);return a=Mm(a),i.context===null?i.context=a:i.pendingContext=a,i=xr(p,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ai(d,i,v),n!==null&&(Kn(n,d,v,p),Wl(n,d,v)),v}function gu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yh(n,i){Um(n,i),(n=n.alternate)&&Um(n,i)}function tw(){return null}var jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xh(n){this._internalRoot=n}yu.prototype.render=Xh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));mu(n,i,null,null)},yu.prototype.unmount=Xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){mu(null,n,null,null)}),i[Rr]=null}};function yu(n){this._internalRoot=n}yu.prototype.unstable_scheduleHydration=function(n){if(n){var i=yl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,n),a===0&&El(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function nw(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=gu(v);p.call(F)}}var v=Fm(i,c,n,0,null,!1,!1,"",zm);return n._reactRootContainer=v,n[Rr]=v.current,ha(n.nodeType===8?n.parentNode:n),cs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=gu(P);I.call(F)}}var P=Qh(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=P,n[Rr]=P.current,ha(n.nodeType===8?n.parentNode:n),cs(function(){mu(i,P,a,c)}),P}function vu(n,i,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=gu(v);I.call(P)}}mu(i,v,n,d)}else v=nw(a,i,n,d,c);return gu(v)}ml=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Gr(i.pendingLanes);a!==0&&(Yr(i,a|1),sn(i,Xe()),(ze&6)===0&&(co=Xe()+500,si()))}break;case 13:cs(function(){var c=Nr(n,1);if(c!==null){var d=Xt();Kn(c,n,1,d)}}),Yh(n,1)}},Ls=function(n){if(n.tag===13){var i=Nr(n,134217728);if(i!==null){var a=Xt();Kn(i,n,134217728,a)}Yh(n,134217728)}},gl=function(n){if(n.tag===13){var i=hi(n),a=Nr(n,i);if(a!==null){var c=Xt();Kn(a,n,i,c)}Yh(n,i)}},yl=function(){return Me},_l=function(n,i){var a=Me;try{return Me=n,i()}finally{Me=a}},Rs=function(n,i,a){switch(i){case"input":if(Ui(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=bl(c);if(!d)throw Error(t(90));un(c),Ui(c,d)}}}break;case"textarea":qr(n,a);break;case"select":i=a.value,i!=null&&Vn(n,!!a.multiple,i,!1)}},Hi=$h,Wo=cs;var rw={usingClientEntryPoint:!1,Events:[pa,Xs,bl,tr,qo,$h]},Pa={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iw={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{Qi=Eu.inject(iw),hn=Eu}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw,on.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(i))throw Error(t(200));return ew(n,i,null,a)},on.createRoot=function(n,i){if(!Jh(n))throw Error(t(299));var a=!1,c="",d=jm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Qh(n,1,!1,null,null,a,!1,c,d),n[Rr]=i.current,ha(n.nodeType===8?n.parentNode:n),new Xh(i)},on.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qo(i),n=n===null?null:n.stateNode,n},on.flushSync=function(n){return cs(n)},on.hydrate=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!0,a)},on.hydrateRoot=function(n,i,a){if(!Jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=jm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Fm(i,null,n,1,a??null,d,!1,p,v),n[Rr]=i.current,ha(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new yu(i)},on.render=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!1,a)},on.unmountComponentAtNode=function(n){if(!_u(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){vu(null,null,n,!1,function(){n._reactRootContainer=null,n[Rr]=null})}),!0):!1},on.unstable_batchedUpdates=$h,on.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_u(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vu(n,i,a,!1,c)},on.version="18.3.1-next-f1338f8080-20240426",on}var Qm;function fw(){if(Qm)return td.exports;Qm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),td.exports=dw(),td.exports}var Ym;function pw(){if(Ym)return wu;Ym=1;var r=fw();return wu.createRoot=r.createRoot,wu.hydrateRoot=r.hydrateRoot,wu}var mw=pw();const gw=Ny(mw),yw=()=>{};var Xm={};/**
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
 */const xy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_w=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Dy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,j=_&63;g||(j=64,h||(C=64)),s.push(t[w],t[R],t[C],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(xy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_w(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const R=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||R==null)throw new vw;const C=u<<2|m>>4;if(s.push(C),_!==64){const j=m<<4&240|_>>2;if(s.push(j),R!==64){const q=_<<6&192|R;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(r){const e=xy(r);return Dy.encodeByteArray(e,!0)},Fu=function(r){return Ew(r).replace(/\./g,"")},Vy=function(r){try{return Dy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>ww().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof Xm>"u")return;const r=Xm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Sw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Vy(r[1]);return e&&JSON.parse(e)},ic=()=>{try{return yw()||Tw()||Iw()||Sw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Oy=r=>{var e,t;return(t=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Aw=r=>{const e=Oy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ly=()=>{var r;return(r=ic())===null||r===void 0?void 0:r.config},by=r=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function xo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function My(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Cw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Fu(JSON.stringify(t)),Fu(JSON.stringify(h)),""].join(".")}const ba={};function Pw(){const r={prod:[],emulator:[]};for(const e of Object.keys(ba))ba[e]?r.emulator.push(e):r.prod.push(e);return r}function kw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Jm=!1;function Fy(r,e){if(typeof window>"u"||typeof document>"u"||!xo(window.location.host)||ba[r]===e||ba[r]||Jm)return;ba[r]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Pw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Jm=!0,h()},C}function w(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function R(){const C=kw(s),j=t("text"),q=document.getElementById(j)||document.createElement("span"),J=t("learnmore"),H=document.getElementById(J)||document.createElement("a"),fe=t("preprendIcon"),ce=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ge=C.element;m(ge),w(H,J);const Se=_();g(ce,fe),ge.append(ce,q,H,Se),document.body.appendChild(ge)}u?(q.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function xw(){var r;const e=(r=ic())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ow(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lw(){const r=Gt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function bw(){return!xw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mw(){try{return typeof indexedDB=="object"}catch{return!1}}function Fw(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Uw="FirebaseError";class zr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Uw,Object.setPrototypeOf(this,zr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?jw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new zr(o,m,s)}}function jw(r,e){return r.replace(zw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const zw=/\{\$([^}]+)}/g;function Bw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ci(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(Zm(u)&&Zm(h)){if(!Ci(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Zm(r){return r!==null&&typeof r=="object"}/**
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
 */function Xa(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Na(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function xa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function $w(r,e){const t=new Hw(r,e);return t.subscribe.bind(t)}class Hw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");qw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=id),o.error===void 0&&(o.error=id),o.complete===void 0&&(o.complete=id);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function id(){}/**
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
 */function Dt(r){return r&&r._delegate?r._delegate:r}class ys{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class Ww{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kw(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gw(r){return r===ps?void 0:r}function Kw(r){return r.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ww(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const Yw={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},Xw=Oe.INFO,Jw={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},Zw=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=Jw[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=Xw,this._logHandler=Zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const e0=(r,e)=>e.some(t=>r instanceof t);let eg,tg;function t0(){return eg||(eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n0(){return tg||(tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uy=new WeakMap,md=new WeakMap,jy=new WeakMap,sd=new WeakMap,$d=new WeakMap;function r0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(wi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Uy.set(t,r)}).catch(()=>{}),$d.set(e,r),e}function i0(r){if(md.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});md.set(r,e)}let gd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return md.get(r);if(e==="objectStoreNames")return r.objectStoreNames||jy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function s0(r){gd=r(gd)}function o0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(od(this),e,...t);return jy.set(s,e.sort?e.sort():[e]),wi(s)}:n0().includes(r)?function(...e){return r.apply(od(this),e),wi(Uy.get(this))}:function(...e){return wi(r.apply(od(this),e))}}function a0(r){return typeof r=="function"?o0(r):(r instanceof IDBTransaction&&i0(r),e0(r,t0())?new Proxy(r,gd):r)}function wi(r){if(r instanceof IDBRequest)return r0(r);if(sd.has(r))return sd.get(r);const e=a0(r);return e!==r&&(sd.set(r,e),$d.set(e,r)),e}const od=r=>$d.get(r);function l0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=wi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(wi(h.result),g.oldVersion,g.newVersion,wi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const u0=["get","getKey","getAll","getAllKeys","count"],c0=["put","add","delete","clear"],ad=new Map;function ng(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=c0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||u0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return ad.set(e,u),u}s0(r=>({...r,get:(e,t,s)=>ng(e,t)||r.get(e,t,s),has:(e,t)=>!!ng(e,t)||r.has(e,t)}));/**
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
 */class h0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(d0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function d0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",rg="0.13.2";/**
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
 */const Mr=new Bd("@firebase/app"),f0="@firebase/app-compat",p0="@firebase/analytics-compat",m0="@firebase/analytics",g0="@firebase/app-check-compat",y0="@firebase/app-check",_0="@firebase/auth",v0="@firebase/auth-compat",E0="@firebase/database",w0="@firebase/data-connect",T0="@firebase/database-compat",I0="@firebase/functions",S0="@firebase/functions-compat",A0="@firebase/installations",R0="@firebase/installations-compat",C0="@firebase/messaging",P0="@firebase/messaging-compat",k0="@firebase/performance",N0="@firebase/performance-compat",x0="@firebase/remote-config",D0="@firebase/remote-config-compat",V0="@firebase/storage",O0="@firebase/storage-compat",L0="@firebase/firestore",b0="@firebase/ai",M0="@firebase/firestore-compat",F0="firebase",U0="11.10.0";/**
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
 */const _d="[DEFAULT]",j0={[yd]:"fire-core",[f0]:"fire-core-compat",[m0]:"fire-analytics",[p0]:"fire-analytics-compat",[y0]:"fire-app-check",[g0]:"fire-app-check-compat",[_0]:"fire-auth",[v0]:"fire-auth-compat",[E0]:"fire-rtdb",[w0]:"fire-data-connect",[T0]:"fire-rtdb-compat",[I0]:"fire-fn",[S0]:"fire-fn-compat",[A0]:"fire-iid",[R0]:"fire-iid-compat",[C0]:"fire-fcm",[P0]:"fire-fcm-compat",[k0]:"fire-perf",[N0]:"fire-perf-compat",[x0]:"fire-rc",[D0]:"fire-rc-compat",[V0]:"fire-gcs",[O0]:"fire-gcs-compat",[L0]:"fire-fst",[M0]:"fire-fst-compat",[b0]:"fire-vertex","fire-js":"fire-js",[F0]:"fire-js-all"};/**
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
 */const Uu=new Map,z0=new Map,vd=new Map;function ig(r,e){try{r.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Io(r){const e=r.name;if(vd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;vd.set(e,r);for(const t of Uu.values())ig(t,r);for(const t of z0.values())ig(t,r);return!0}function Hd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Qn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const B0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ti=new Ya("app","Firebase",B0);/**
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
 */class $0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
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
 */const Do=U0;function zy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_d,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Ti.create("bad-app-name",{appName:String(o)});if(t||(t=Ly()),!t)throw Ti.create("no-options");const u=Uu.get(o);if(u){if(Ci(t,u.options)&&Ci(s,u.config))return u;throw Ti.create("duplicate-app",{appName:o})}const h=new Qw(o);for(const g of vd.values())h.addComponent(g);const m=new $0(t,s,h);return Uu.set(o,m),m}function By(r=_d){const e=Uu.get(r);if(!e&&r===_d&&Ly())return zy();if(!e)throw Ti.create("no-app",{appName:r});return e}function Ii(r,e,t){var s;let o=(s=j0[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(m.join(" "));return}Io(new ys(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const H0="firebase-heartbeat-database",q0=1,Ba="firebase-heartbeat-store";let ld=null;function $y(){return ld||(ld=l0(H0,q0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ti.create("idb-open",{originalErrorMessage:r.message})})),ld}async function W0(r){try{const t=(await $y()).transaction(Ba),s=await t.objectStore(Ba).get(Hy(r));return await t.done,s}catch(e){if(e instanceof zr)Mr.warn(e.message);else{const t=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function sg(r,e){try{const s=(await $y()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,Hy(r)),await s.done}catch(t){if(t instanceof zr)Mr.warn(t.message);else{const s=Ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(s.message)}}}function Hy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const G0=1024,K0=30;class Q0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new X0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=og();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>K0){const h=J0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Mr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=og(),{heartbeatsToSend:s,unsentEntries:o}=Y0(this._heartbeatsCache.heartbeats),u=Fu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Mr.warn(t),""}}}function og(){return new Date().toISOString().substring(0,10)}function Y0(r,e=G0){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ag(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ag(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class X0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mw()?Fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await W0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return sg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return sg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ag(r){return Fu(JSON.stringify({version:2,heartbeats:r})).length}function J0(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function Z0(r){Io(new ys("platform-logger",e=>new h0(e),"PRIVATE")),Io(new ys("heartbeat",e=>new Q0(e),"PRIVATE")),Ii(yd,rg,r),Ii(yd,rg,"esm2017"),Ii("fire-js","")}Z0("");var eT="firebase",tT="11.10.0";/**
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
 */Ii(eT,tT,"app");function qd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nT=qy,Wy=new Ya("auth","Firebase",qy());/**
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
 */const ju=new Bd("@firebase/auth");function rT(r,...e){ju.logLevel<=Oe.WARN&&ju.warn(`Auth (${Do}): ${r}`,...e)}function Pu(r,...e){ju.logLevel<=Oe.ERROR&&ju.error(`Auth (${Do}): ${r}`,...e)}/**
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
 */function Jn(r,...e){throw Wd(r,...e)}function dr(r,...e){return Wd(r,...e)}function Gy(r,e,t){const s=Object.assign(Object.assign({},nT()),{[e]:t});return new Ya("auth","Firebase",s).create(e,{appName:r.name})}function Si(r){return Gy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Wy.create(r,...e)}function Te(r,e,...t){if(!r)throw Wd(e,...t)}function Or(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Pu(e),new Error(e)}function Fr(r,e){r||Or(e)}/**
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
 */function Ed(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function iT(){return lg()==="http:"||lg()==="https:"}function lg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function sT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iT()||Vw()||"connection"in navigator)?navigator.onLine:!0}function oT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ja{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=Nw()||Ow()}get(){return sT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gd(r,e){Fr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ky{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uT=new Ja(3e4,6e4);function ws(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Li(r,e,t,s,o={}){return Qy(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Xa(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return Dw()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&xo(r.emulatorConfig.host)&&(_.credentials="include"),Ky.fetch()(await Yy(r,r.config.apiHost,t,m),_)})}async function Qy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},aT),e);try{const o=new hT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Tu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Tu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Tu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Gy(r,w,_);Jn(r,w)}}catch(o){if(o instanceof zr)throw o;Jn(r,"network-request-failed",{message:String(o)})}}async function sc(r,e,t,s,o={}){const u=await Li(r,e,t,s,o);return"mfaPendingCredential"in u&&Jn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Yy(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Gd(r.config,o):`${r.config.apiScheme}://${o}`;return lT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function cT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(dr(this.auth,"network-request-failed")),uT.get())})}}function Tu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=dr(r,e,s);return o.customData._tokenResponse=t,o}function ug(r){return r!==void 0&&r.enterprise!==void 0}class dT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fT(r,e){return Li(r,"GET","/v2/recaptchaConfig",ws(r,e))}/**
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
 */async function pT(r,e){return Li(r,"POST","/v1/accounts:delete",e)}async function zu(r,e){return Li(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mT(r,e=!1){const t=Dt(r),s=await t.getIdToken(e),o=Kd(s);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ma(ud(o.auth_time)),issuedAtTime:Ma(ud(o.iat)),expirationTime:Ma(ud(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ud(r){return Number(r)*1e3}function Kd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Vy(t);return o?JSON.parse(o):(Pu("Failed to decode base64 JWT payload"),null)}catch(o){return Pu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function cg(r){const e=Kd(r);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $a(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof zr&&gT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function gT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class yT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await $a(r,zu(t,{idToken:s}));Te(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Xy(u.providerUserInfo):[],m=vT(r.providerData,h),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new wd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,R)}async function _T(r){const e=Dt(r);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Xy(r){return r.map(e=>{var{providerId:t}=e,s=qd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ET(r,e){const t=await Qy(r,{},async()=>{const s=Xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await Yy(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&xo(r.emulatorConfig.host)&&(g.credentials="include"),Ky.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wT(r,e){return Li(r,"POST","/v2/accounts:revokeToken",ws(r,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=cg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await ET(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new _o;return s&&(Te(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Te(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
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
 */function mi(r,e){Te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new wd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mT(this,e)}reload(){return _T(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(Si(this.auth));const e=await this.getIdToken();return await $a(this,pT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,w;const R=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,J=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,fe=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ce=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ge,emailVerified:Se,isAnonymous:qe,providerData:Re,stsTokenManager:D}=t;Te(ge&&D,e,"internal-error");const T=_o.fromJSON(this.name,D);Te(typeof ge=="string",e,"internal-error"),mi(R,e.name),mi(C,e.name),Te(typeof Se=="boolean",e,"internal-error"),Te(typeof qe=="boolean",e,"internal-error"),mi(j,e.name),mi(q,e.name),mi(J,e.name),mi(H,e.name),mi(fe,e.name),mi(ce,e.name);const S=new Yn({uid:ge,auth:e,email:C,emailVerified:Se,displayName:R,isAnonymous:qe,photoURL:q,phoneNumber:j,tenantId:J,stsTokenManager:T,createdAt:fe,lastLoginAt:ce});return Re&&Array.isArray(Re)&&(S.providerData=Re.map(k=>Object.assign({},k))),H&&(S._redirectEventId=H),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new _o;o.updateFromServerResponse(t);const u=new Yn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Xy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new _o;m.updateFromIdToken(s);const g=new Yn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new wd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const hg=new Map;function Lr(r){Fr(r instanceof Function,"Expected a class definition");let e=hg.get(r);return e?(Fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,hg.set(r,e),e)}/**
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
 */class Jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jy.type="NONE";const dg=Jy;/**
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
 */function ku(r,e,t){return`firebase:${r}:${e}:${t}`}class vo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=ku(this.userKey,o.apiKey,u),this.fullPersistenceKey=ku("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zu(this.auth,{idToken:e}).catch(()=>{});return t?Yn._fromGetAccountInfoResponse(this.auth,t,e):null}return Yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new vo(Lr(dg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Lr(dg);const h=ku(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let R;if(typeof w=="string"){const C=await zu(e,{idToken:w}).catch(()=>{});if(!C)break;R=await Yn._fromGetAccountInfoResponse(e,C,w)}else R=Yn._fromJSON(e,w);_!==u&&(m=R),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new vo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new vo(u,e,s))}}/**
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
 */function fg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i_(e))return"Blackberry";if(s_(e))return"Webos";if(e_(e))return"Safari";if((e.includes("chrome/")||t_(e))&&!e.includes("edge/"))return"Chrome";if(r_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zy(r=Gt()){return/firefox\//i.test(r)}function e_(r=Gt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t_(r=Gt()){return/crios\//i.test(r)}function n_(r=Gt()){return/iemobile/i.test(r)}function r_(r=Gt()){return/android/i.test(r)}function i_(r=Gt()){return/blackberry/i.test(r)}function s_(r=Gt()){return/webos/i.test(r)}function Qd(r=Gt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function TT(r=Gt()){var e;return Qd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IT(){return Lw()&&document.documentMode===10}function o_(r=Gt()){return Qd(r)||r_(r)||s_(r)||i_(r)||/windows phone/i.test(r)||n_(r)}/**
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
 */function a_(r,e=[]){let t;switch(r){case"Browser":t=fg(Gt());break;case"Worker":t=`${fg(Gt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Do}/${s}`}/**
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
 */class ST{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function AT(r,e={}){return Li(r,"GET","/v2/passwordPolicy",ws(r,e))}/**
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
 */const RT=6;class CT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:RT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class PT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new ST(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zu(this,{idToken:e}),s=await Yn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(Si(this));const t=e?Dt(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(Si(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(Si(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AT(this),t=new CT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await wT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=a_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Vo(r){return Dt(r)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kT(r){oc=r}function l_(r){return oc.loadJS(r)}function NT(){return oc.recaptchaEnterpriseScript}function xT(){return oc.gapiScript}function DT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class VT{constructor(){this.enterprise=new OT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class OT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const LT="recaptcha-enterprise",u_="NO_RECAPTCHA";class bT{constructor(e){this.type=LT,this.auth=Vo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{fT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new dT(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;ug(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(u_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&ug(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=NT();g.length!==0&&(g+=m),l_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function mg(r,e,t,s=!1,o=!1){const u=new bT(r);let h;if(o)h=u_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function gg(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await mg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await mg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function MT(r,e){const t=Hd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ci(u,e??{}))return o;Jn(o,"already-initialized")}return t.initialize({options:e})}function FT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Lr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function UT(r,e,t){const s=Vo(r);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=c_(e),{host:h,port:m}=jT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(Ci(_,s.config.emulator)&&Ci(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,xo(h)?(My(`${u}//${h}${g}`),Fy("Auth",!0)):zT()}function c_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function jT(r){const e=c_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:yg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:yg(h)}}}function yg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function zT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function BT(r,e){return Li(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $T(r,e){return sc(r,"POST","/v1/accounts:signInWithPassword",ws(r,e))}/**
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
 */async function HT(r,e){return sc(r,"POST","/v1/accounts:signInWithEmailLink",ws(r,e))}async function qT(r,e){return sc(r,"POST","/v1/accounts:signInWithEmailLink",ws(r,e))}/**
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
 */class Ha extends Yd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ha(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ha(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gg(e,t,"signInWithPassword",$T);case"emailLink":return HT(e,{email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gg(e,s,"signUpPassword",BT);case"emailLink":return qT(e,{idToken:t,email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(r,e){return sc(r,"POST","/v1/accounts:signInWithIdp",ws(r,e))}/**
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
 */const WT="http://localhost";class _s extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=qd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new _s(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:WT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xa(t)}return e}}/**
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
 */function GT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KT(r){const e=Na(xa(r)).link,t=e?Na(xa(e)).deep_link_id:null,s=Na(xa(r)).deep_link_id;return(s?Na(xa(s)).link:null)||s||t||e||r}class Xd{constructor(e){var t,s,o,u,h,m;const g=Na(xa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,R=GT((o=g.mode)!==null&&o!==void 0?o:null);Te(_&&w&&R,"argument-error"),this.apiKey=_,this.operation=R,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=KT(e);try{return new Xd(t)}catch{return null}}}/**
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
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,t){return Ha._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Xd.parseLink(t);return Te(s,"argument-error"),Ha._fromEmailAndCode(e,s.code,s.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class h_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Za extends h_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gi extends Za{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
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
 */class yi extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return yi.credential(t,s)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
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
 */class _i extends Za{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
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
 */class vi extends Za{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return vi.credential(t,s)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
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
 */class So{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Yn._fromIdTokenResponse(e,s,o),h=_g(s);return new So({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=_g(s);return new So({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function _g(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class $u extends zr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new $u(e,t,s,o)}}function d_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(r,u,e,s):u})}async function QT(r,e,t=!1){const s=await $a(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return So._forOperation(r,"link",s)}/**
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
 */async function YT(r,e,t=!1){const{auth:s}=r;if(Qn(s.app))return Promise.reject(Si(s));const o="reauthenticate";try{const u=await $a(r,d_(s,o,e,r),t);Te(u.idToken,s,"internal-error");const h=Kd(u.idToken);Te(h,s,"internal-error");const{sub:m}=h;return Te(r.uid===m,s,"user-mismatch"),So._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Jn(s,"user-mismatch"),u}}/**
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
 */async function f_(r,e,t=!1){if(Qn(r.app))return Promise.reject(Si(r));const s="signIn",o=await d_(r,s,e),u=await So._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function XT(r,e){return f_(Vo(r),e)}/**
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
 */async function JT(r){const e=Vo(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ZT(r,e,t){return Qn(r.app)?Promise.reject(Si(r)):XT(Dt(r),Oo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&JT(r),s})}function eI(r,e,t,s){return Dt(r).onIdTokenChanged(e,t,s)}function tI(r,e,t){return Dt(r).beforeAuthStateChanged(e,t)}function nI(r,e,t,s){return Dt(r).onAuthStateChanged(e,t,s)}function rI(r){return Dt(r).signOut()}const Hu="__sak";/**
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
 */class p_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iI=1e3,sI=10;class m_ extends p_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=o_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);IT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,sI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}m_.type="LOCAL";const oI=m_;/**
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
 */class g_ extends p_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}g_.type="SESSION";const y_=g_;/**
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
 */function aI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await aI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
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
 */function Jd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class lI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=Jd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const C=R;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function fr(){return window}function uI(r){fr().location.href=r}/**
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
 */function __(){return typeof fr().WorkerGlobalScope<"u"&&typeof fr().importScripts=="function"}async function cI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function dI(){return __()?self:null}/**
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
 */const v_="firebaseLocalStorageDb",fI=1,qu="firebaseLocalStorage",E_="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lc(r,e){return r.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function pI(){const r=indexedDB.deleteDatabase(v_);return new el(r).toPromise()}function Td(){const r=indexedDB.open(v_,fI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(qu,{keyPath:E_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await pI(),e(await Td()))})})}async function vg(r,e,t){const s=lc(r,!0).put({[E_]:e,value:t});return new el(s).toPromise()}async function mI(r,e){const t=lc(r,!1).get(e),s=await new el(t).toPromise();return s===void 0?null:s.value}function Eg(r,e){const t=lc(r,!0).delete(e);return new el(t).toPromise()}const gI=800,yI=3;class w_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>yI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return __()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(dI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new lI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await vg(e,Hu,"1"),await Eg(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>mI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Eg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=lc(o,!1).getAll();return new el(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w_.type="LOCAL";const _I=w_;new Ja(3e4,6e4);/**
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
 */function vI(r,e){return e?Lr(e):(Te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Zd extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EI(r){return f_(r.auth,new Zd(r),r.bypassAuthState)}function wI(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),YT(t,new Zd(r),r.bypassAuthState)}async function TI(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),QT(t,new Zd(r),r.bypassAuthState)}/**
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
 */class T_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EI;case"linkViaPopup":case"linkViaRedirect":return TI;case"reauthViaPopup":case"reauthViaRedirect":return wI;default:Jn(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const II=new Ja(2e3,1e4);class yo extends T_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,II.get())};e()}}yo.currentPopupAction=null;/**
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
 */const SI="pendingRedirect",Nu=new Map;class AI extends T_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const s=await RI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RI(r,e){const t=kI(e),s=PI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function CI(r,e){Nu.set(r._key(),e)}function PI(r){return Lr(r._redirectPersistence)}function kI(r){return ku(SI,r.config.apiKey,r.name)}async function NI(r,e,t=!1){if(Qn(r.app))return Promise.reject(Si(r));const s=Vo(r),o=vI(s,e),h=await new AI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const xI=10*60*1e3;class DI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!I_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(dr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xI&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function I_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I_(r);default:return!1}}/**
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
 */async function OI(r,e={}){return Li(r,"GET","/v1/projects",e)}/**
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
 */const LI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bI=/^https?/;async function MI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await OI(r);for(const t of e)try{if(FI(t))return}catch{}Jn(r,"unauthorized-domain")}function FI(r){const e=Ed(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!bI.test(t))return!1;if(LI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const UI=new Ja(3e4,6e4);function Tg(){const r=fr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function jI(r){return new Promise((e,t)=>{var s,o,u;function h(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),t(dr(r,"network-request-failed"))},timeout:UI.get()})}if(!((o=(s=fr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=fr().gapi)===null||u===void 0)&&u.load)h();else{const m=DT("iframefcb");return fr()[m]=()=>{gapi.load?h():t(dr(r,"network-request-failed"))},l_(`${xT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw xu=null,e})}let xu=null;function zI(r){return xu=xu||jI(r),xu}/**
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
 */const BI=new Ja(5e3,15e3),$I="__/auth/iframe",HI="emulator/auth/iframe",qI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GI(r){const e=r.config;Te(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Gd(e,HI):`https://${r.config.authDomain}/${$I}`,s={apiKey:e.apiKey,appName:r.name,v:Do},o=WI.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Xa(s).slice(1)}`}async function KI(r){const e=await zI(r),t=fr().gapi;return Te(t,r,"internal-error"),e.open({where:document.body,url:GI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=dr(r,"network-request-failed"),m=fr().setTimeout(()=>{u(h)},BI.get());function g(){fr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const QI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YI=500,XI=600,JI="_blank",ZI="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eS(r,e,t,s=YI,o=XI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},QI),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Gt().toLowerCase();t&&(m=t_(_)?JI:t),Zy(_)&&(e=e||ZI,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[j,q])=>`${C}${j}=${q},`,"");if(TT(_)&&m!=="_self")return tS(e||"",m),new Ig(null);const R=window.open(e||"",m,w);Te(R,r,"popup-blocked");try{R.focus()}catch{}return new Ig(R)}function tS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const nS="__/auth/handler",rS="emulator/auth/handler",iS=encodeURIComponent("fac");async function Sg(r,e,t,s,o,u){Te(r.config.authDomain,r,"auth-domain-config-required"),Te(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Do,eventId:o};if(e instanceof h_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Bw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof Za){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${iS}=${encodeURIComponent(g)}`:"";return`${sS(r)}?${Xa(m).slice(1)}${_}`}function sS({config:r}){return r.emulator?Gd(r,rS):`https://${r.authDomain}/${nS}`}/**
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
 */const cd="webStorageSupport";class oS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y_,this._completeRedirectFn=NI,this._overrideRedirectResult=CI}async _openPopup(e,t,s,o){var u;Fr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Sg(e,t,s,Ed(),o);return eS(e,h,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Sg(e,t,s,Ed(),o);return uI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await KI(e),s=new DI(e);return t.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cd,{type:cd},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[cd];h!==void 0&&t(!!h),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=MI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return o_()||e_()||Qd()}}const aS=oS;var Ag="@firebase/auth",Rg="1.10.8";/**
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
 */class lS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cS(r){Io(new ys("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:a_(r)},_=new PT(s,o,u,g);return FT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Io(new ys("auth-internal",e=>{const t=Vo(e.getProvider("auth").getImmediate());return(s=>new lS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ii(Ag,Rg,uS(r)),Ii(Ag,Rg,"esm2017")}/**
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
 */const hS=5*60,dS=by("authIdTokenMaxAge")||hS;let Cg=null;const fS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>dS)return;const o=t==null?void 0:t.token;Cg!==o&&(Cg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function pS(r=By()){const e=Hd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=MT(r,{popupRedirectResolver:aS,persistence:[_I,oI,y_]}),s=by("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=fS(u.toString());tI(t,h,()=>h(t.currentUser)),eI(t,m=>h(m))}}const o=Oy("auth");return o&&UT(t,`http://${o}`),t}function mS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}kT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=dr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",mS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cS("Browser");var Pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ai,S_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,T){function S(){}S.prototype=T.prototype,D.D=T.prototype,D.prototype=new S,D.prototype.constructor=D,D.C=function(k,N,O){for(var A=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)A[_e-2]=arguments[_e];return T.prototype[N].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var N=0;16>N;++N)k[N]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(N=0;16>N;++N)k[N]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=D.g[0],S=D.g[1],N=D.g[2];var O=D.g[3],A=T+(O^S&(N^O))+k[0]+3614090360&4294967295;T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[1]+3905402710&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[3]+3250441966&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(O^S&(N^O))+k[4]+4118548399&4294967295,T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[5]+1200080426&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[7]+4249261313&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(O^S&(N^O))+k[8]+1770035416&4294967295,T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[9]+2336552879&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[11]+2304563134&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(O^S&(N^O))+k[12]+1804603682&4294967295,T=S+(A<<7&4294967295|A>>>25),A=O+(N^T&(S^N))+k[13]+4254626195&4294967295,O=T+(A<<12&4294967295|A>>>20),A=N+(S^O&(T^S))+k[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=S+(T^N&(O^T))+k[15]+1236535329&4294967295,S=N+(A<<22&4294967295|A>>>10),A=T+(N^O&(S^N))+k[1]+4129170786&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[6]+3225465664&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[0]+3921069994&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(N^O&(S^N))+k[5]+3593408605&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[10]+38016083&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[4]+3889429448&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(N^O&(S^N))+k[9]+568446438&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[14]+3275163606&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[8]+1163531501&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(N^O&(S^N))+k[13]+2850285829&4294967295,T=S+(A<<5&4294967295|A>>>27),A=O+(S^N&(T^S))+k[2]+4243563512&4294967295,O=T+(A<<9&4294967295|A>>>23),A=N+(T^S&(O^T))+k[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=S+(O^T&(N^O))+k[12]+2368359562&4294967295,S=N+(A<<20&4294967295|A>>>12),A=T+(S^N^O)+k[5]+4294588738&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[8]+2272392833&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[14]+4259657740&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(S^N^O)+k[1]+2763975236&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[4]+1272893353&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[10]+3200236656&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(S^N^O)+k[13]+681279174&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[0]+3936430074&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[6]+76029189&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(S^N^O)+k[9]+3654602809&4294967295,T=S+(A<<4&4294967295|A>>>28),A=O+(T^S^N)+k[12]+3873151461&4294967295,O=T+(A<<11&4294967295|A>>>21),A=N+(O^T^S)+k[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=S+(N^O^T)+k[2]+3299628645&4294967295,S=N+(A<<23&4294967295|A>>>9),A=T+(N^(S|~O))+k[0]+4096336452&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[7]+1126891415&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[5]+4237533241&4294967295,S=N+(A<<21&4294967295|A>>>11),A=T+(N^(S|~O))+k[12]+1700485571&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[3]+2399980690&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[1]+2240044497&4294967295,S=N+(A<<21&4294967295|A>>>11),A=T+(N^(S|~O))+k[8]+1873313359&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[15]+4264355552&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[13]+1309151649&4294967295,S=N+(A<<21&4294967295|A>>>11),A=T+(N^(S|~O))+k[4]+4149444226&4294967295,T=S+(A<<6&4294967295|A>>>26),A=O+(S^(T|~N))+k[11]+3174756917&4294967295,O=T+(A<<10&4294967295|A>>>22),A=N+(T^(O|~S))+k[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=S+(O^(N|~T))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+T&4294967295,D.g[1]=D.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+N&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.u=function(D,T){T===void 0&&(T=D.length);for(var S=T-this.blockSize,k=this.B,N=this.h,O=0;O<T;){if(N==0)for(;O<=S;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<T;)if(k[N++]=D.charCodeAt(O++),N==this.blockSize){o(this,k),N=0;break}}else for(;O<T;)if(k[N++]=D[O++],N==this.blockSize){o(this,k),N=0;break}}this.h=N,this.o+=T},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var T=1;T<D.length-8;++T)D[T]=0;var S=8*this.o;for(T=D.length-8;T<D.length;++T)D[T]=S&255,S/=256;for(this.u(D),D=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)D[S++]=this.g[T]>>>k&255;return D};function u(D,T){var S=m;return Object.prototype.hasOwnProperty.call(S,D)?S[D]:S[D]=T(D)}function h(D,T){this.h=T;for(var S=[],k=!0,N=D.length-1;0<=N;N--){var O=D[N]|0;k&&O==T||(S[N]=O,k=!1)}this.g=S}var m={};function g(D){return-128<=D&&128>D?u(D,function(T){return new h([T|0],0>T?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return R;if(0>D)return H(_(-D));for(var T=[],S=1,k=0;D>=S;k++)T[k]=D/S|0,S*=4294967296;return new h(T,0)}function w(D,T){if(D.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D.charAt(0)=="-")return H(w(D.substring(1),T));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=_(Math.pow(T,8)),k=R,N=0;N<D.length;N+=8){var O=Math.min(8,D.length-N),A=parseInt(D.substring(N,N+O),T);8>O?(O=_(Math.pow(T,O)),k=k.j(O).add(_(A))):(k=k.j(S),k=k.add(_(A)))}return k}var R=g(0),C=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(J(this))return-H(this).m();for(var D=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);D+=(0<=k?k:4294967296+k)*T,T*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(q(this))return"0";if(J(this))return"-"+H(this).toString(D);for(var T=_(Math.pow(D,6)),S=this,k="";;){var N=Se(S,T).g;S=fe(S,N.j(T));var O=((0<S.g.length?S.g[0]:S.h)>>>0).toString(D);if(S=N,q(S))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function q(D){if(D.h!=0)return!1;for(var T=0;T<D.g.length;T++)if(D.g[T]!=0)return!1;return!0}function J(D){return D.h==-1}r.l=function(D){return D=fe(this,D),J(D)?-1:q(D)?0:1};function H(D){for(var T=D.g.length,S=[],k=0;k<T;k++)S[k]=~D.g[k];return new h(S,~D.h).add(C)}r.abs=function(){return J(this)?H(this):this},r.add=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0,N=0;N<=T;N++){var O=k+(this.i(N)&65535)+(D.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(D.i(N)>>>16);k=A>>>16,O&=65535,A&=65535,S[N]=A<<16|O}return new h(S,S[S.length-1]&-2147483648?-1:0)};function fe(D,T){return D.add(H(T))}r.j=function(D){if(q(this)||q(D))return R;if(J(this))return J(D)?H(this).j(H(D)):H(H(this).j(D));if(J(D))return H(this.j(H(D)));if(0>this.l(j)&&0>D.l(j))return _(this.m()*D.m());for(var T=this.g.length+D.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<D.g.length;N++){var O=this.i(k)>>>16,A=this.i(k)&65535,_e=D.i(N)>>>16,At=D.i(N)&65535;S[2*k+2*N]+=A*At,ce(S,2*k+2*N),S[2*k+2*N+1]+=O*At,ce(S,2*k+2*N+1),S[2*k+2*N+1]+=A*_e,ce(S,2*k+2*N+1),S[2*k+2*N+2]+=O*_e,ce(S,2*k+2*N+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new h(S,0)};function ce(D,T){for(;(D[T]&65535)!=D[T];)D[T+1]+=D[T]>>>16,D[T]&=65535,T++}function ge(D,T){this.g=D,this.h=T}function Se(D,T){if(q(T))throw Error("division by zero");if(q(D))return new ge(R,R);if(J(D))return T=Se(H(D),T),new ge(H(T.g),H(T.h));if(J(T))return T=Se(D,H(T)),new ge(H(T.g),T.h);if(30<D.g.length){if(J(D)||J(T))throw Error("slowDivide_ only works with positive integers.");for(var S=C,k=T;0>=k.l(D);)S=qe(S),k=qe(k);var N=Re(S,1),O=Re(k,1);for(k=Re(k,2),S=Re(S,2);!q(k);){var A=O.add(k);0>=A.l(D)&&(N=N.add(S),O=A),k=Re(k,1),S=Re(S,1)}return T=fe(D,N.j(T)),new ge(N,T)}for(N=R;0<=D.l(T);){for(S=Math.max(1,Math.floor(D.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=_(S),A=O.j(T);J(A)||0<A.l(D);)S-=k,O=_(S),A=O.j(T);q(O)&&(O=C),N=N.add(O),D=fe(D,A)}return new ge(N,D)}r.A=function(D){return Se(this,D).h},r.and=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&D.i(k);return new h(S,this.h&D.h)},r.or=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|D.i(k);return new h(S,this.h|D.h)},r.xor=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^D.i(k);return new h(S,this.h^D.h)};function qe(D){for(var T=D.g.length+1,S=[],k=0;k<T;k++)S[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(S,D.h)}function Re(D,T){var S=T>>5;T%=32;for(var k=D.g.length-S,N=[],O=0;O<k;O++)N[O]=0<T?D.i(O+S)>>>T|D.i(O+S+1)<<32-T:D.i(O+S);return new h(N,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,S_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ai=h}).apply(typeof Pg<"u"?Pg:typeof self<"u"?self:typeof window<"u"?window:{});var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A_,Da,R_,Du,Id,C_,P_,k_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Iu=="object"&&Iu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function R(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function C(l,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:R,C.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function q(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var ee=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ee[Qe-2]=arguments[Qe];return f.prototype[L].apply(E,ee)}}function J(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function H(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let ee=0;ee<U;ee++)l[L+ee]=E[ee]}else l.push(E)}}class fe{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ce(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Se(l){return Se[" "](l),l}Se[" "]=function(){};var qe=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Re(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function T(l){const f={};for(const y in l)f[y]=l[y];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<S.length;U++)y=S[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function N(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function A(){var l=me;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class _e{constructor(){this.h=this.g=null}add(f,y){const E=At.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var At=new fe(()=>new He,l=>l.reset());class He{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let We,X=!1,me=new _e,ne=()=>{const l=m.Promise.resolve(void 0);We=()=>{l.then(V)}};var V=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){O(y)}var f=At;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}X=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ke=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ne(l,f){if(te.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(qe){e:{try{Se(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ve[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ne.aa.h.call(this)}}q(Ne,te);var Ve={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),je=0;function Ge(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++je,this.da=this.fa=!1}function ct(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function vn(l){this.src=l,this.g={},this.h=0}vn.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var ee=cn(l,f,E,L);return-1<ee?(f=l[ee],y||(f.fa=!1)):(f=new Ge(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function un(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(ct(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function cn(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var xn="closure_lm_"+(1e6*Math.random()|0),Br={};function Fi(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Fi(l,f[U],y,E,L);return null}return y=zi(y),l&&l[be]?l.K(f,y,_(E)?!!E.capture:!1,L):Ui(l,f,y,!1,E,L)}function Ui(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var ee=_(L)?!!L.capture:!!L,Qe=Hr(l);if(Qe||(l[xn]=Qe=new vn(l)),y=Qe.add(f,y,E,ee,U),y.proxy)return y;if(E=Ss(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)ke||(L=ee),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(Vn(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ss(){function l(y){return f.call(l.src,l.listener,y)}const f=ji;return l}function $r(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)$r(l,f[U],y,E,L);else E=_(E)?!!E.capture:!!E,y=zi(y),l&&l[be]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=cn(U,y,E,L),-1<y&&(ct(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=Hr(l))&&(f=l.g[f.toString()],l=-1,f&&(l=cn(f,y,E,L)),(y=-1<l?f[l]:null)&&Dn(y))}function Dn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[be])un(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(Vn(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=Hr(f))?(un(y,l),y.h==0&&(y.src=null,f[xn]=null)):ct(l)}}}function Vn(l){return l in Br?Br[l]:Br[l]="on"+l}function ji(l,f){if(l.da)l=!0;else{f=new Ne(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&Dn(l),l=y.call(E,f)}return l}function Hr(l){return l=l[xn],l instanceof vn?l:null}var qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function zi(l){return typeof l=="function"?l:(l[qr]||(l[qr]=function(f){return l.handleEvent(f)}),l[qr])}function ht(){B.call(this),this.i=new vn(this),this.M=this,this.F=null}q(ht,B),ht.prototype[be]=!0,ht.prototype.removeEventListener=function(l,f,y,E){$r(this,l,f,y,E)};function re(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new te(f,l);else if(f instanceof te)f.target=f.target||l;else{var L=f;f=new te(E,l),k(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var ee=f.g=y[U];L=ae(ee,E,!0,f)&&L}if(ee=f.g=l,L=ae(ee,E,!0,f)&&L,L=ae(ee,E,!1,f)&&L,y)for(U=0;U<y.length;U++)ee=f.g=y[U],L=ae(ee,E,!1,f)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)ct(y[E]);delete l.g[f],l.h--}}this.F=null},ht.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},ht.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function ae(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var ee=f[U];if(ee&&!ee.da&&ee.capture==y){var Qe=ee.listener,wt=ee.ha||ee.src;ee.fa&&un(l.i,ee),L=Qe.call(wt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Y(l,f,y){if(typeof l=="function")y&&(l=C(l,y));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function pe(l){l.g=Y(()=>{l.g=null,l.i&&(l.i=!1,pe(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class we extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:pe(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(l){B.call(this),this.h=l,this.g={}}q(et,B);var Rt=[];function Bi(l){Re(l.g,function(f,y){this.g.hasOwnProperty(y)&&Dn(f)},l),l.g={}}et.prototype.N=function(){et.aa.N.call(this),Bi(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bo=m.JSON.stringify,$o=m.JSON.parse,Ho=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function $i(){}$i.prototype.h=null;function As(l){return l.h||(l.h=l.i())}function Rs(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){te.call(this,"d")}q(er,te);function Cs(){te.call(this,"c")}q(Cs,te);var tr={},qo=null;function Hi(){return qo=qo||new ht}tr.La="serverreachability";function Wo(l){te.call(this,tr.La,l)}q(Wo,te);function Er(l){const f=Hi();re(f,new Wo(f))}tr.STAT_EVENT="statevent";function Go(l,f){te.call(this,tr.STAT_EVENT,l),this.stat=f}q(Go,te);function dt(l){const f=Hi();re(f,new Go(f,l))}tr.Ma="timingevent";function Ps(l,f){te.call(this,tr.Ma,l),this.size=f}q(Ps,te);function On(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function qi(){this.g=!0}qi.prototype.xa=function(){this.g=!1};function Wi(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var ee="",Qe=U.split("&"),wt=0;wt<Qe.length;wt++){var Fe=Qe[wt].split("=");if(1<Fe.length){var Ct=Fe[0];Fe=Fe[1];var gt=Ct.split("_");ee=2<=gt.length&&gt[1]=="type"?ee+(Ct+"="+Fe+"&"):ee+(Ct+"=redacted&")}}else ee=null;else ee=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+ee})}function ks(l,f,y,E,L,U,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+ee})}function Ln(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Cc(l,y)+(E?" "+E:"")})}function Ko(l,f){l.info(function(){return"TIMEOUT: "+f})}qi.prototype.info=function(){};function Cc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ee=1;ee<L.length;ee++)L[ee]=""}}}}return Bo(y)}catch{return f}}var Ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},al={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bn;function Gi(){}q(Gi,$i),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},bn=new Gi;function Mn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var Qo={},xs={};function Ds(l,f,y){l.L=1,l.v=Yr(dn(f)),l.m=y,l.P=!0,Yo(l,null)}function Yo(l,f){l.F=Date.now(),Xe(l),l.A=dn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Jr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new ll,l.g=Rl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new we(C(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Rt[0]=L.toString()),L=Rt);for(var U=0;U<L.length;U++){var ee=Fi(y,L[U],E||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Er(),Wi(l.i,l.u,l.A,l.l,l.R,l.m)}Mn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Zt(l)==3?f.j():this.Y(l)},Mn.prototype.Y=function(l){try{if(l==this.g)e:{const gt=Zt(this.g);var f=this.g.Ba();const In=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||gt!=4||f==7||(f==8||0>=In?Er(3):Er(2)),Ki(this);var y=this.g.Z();this.X=y;t:if(ul(this)){var E=na(this.g);l="";var L=E.length,U=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Wr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,ks(this.i,this.u,this.A,this.l,this.R,gt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,wt=this.g;if((Qe=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Qe)){var Fe=Qe;break t}}Fe=null}if(y=Fe)Ln(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,y);else{this.o=!1,this.s=3,dt(12),wn(this),Wr(this);break e}}if(this.P){y=!0;let pn;for(;!this.J&&this.C<ee.length;)if(pn=Pc(this,ee),pn==xs){gt==4&&(this.s=4,dt(14),y=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Qo){this.s=4,dt(15),Ln(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else Ln(this.i,this.l,pn,null),Xo(this,pn);if(ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||ee.length!=0||this.h.h||(this.s=1,dt(16),y=!1),this.o=this.o&&y,!y)Ln(this.i,this.l,ee,"[Invalid Chunked Response]"),wn(this),Wr(this);else if(0<ee.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ia(Ct),Ct.M=!0,dt(11))}}else Ln(this.i,this.l,ee,null),Xo(this,ee);gt==4&&wn(this),this.o&&!this.J&&(gt==4?$s(this.j,this):(this.o=!1,Xe(this)))}else Fs(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),wn(this),Wr(this)}}}catch{}finally{}};function ul(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Pc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?xs:(y=Number(f.substring(y,E)),isNaN(y)?Qo:(E+=1,E+y>f.length?xs:(f=f.slice(E,E+y),l.C=E+y,f)))}Mn.prototype.cancel=function(){this.J=!0,wn(this)};function Xe(l){l.S=Date.now()+l.I,cl(l,l.I)}function cl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=On(C(l.ba,l),f)}function Ki(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Mn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ko(this.i,this.A),this.L!=2&&(Er(),dt(17)),wn(this),this.s=2,Wr(this)):cl(this,this.S-l)};function Wr(l){l.j.G==0||l.J||$s(l.j,l)}function wn(l){Ki(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Bi(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Xo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Kt(y.h,l))){if(!l.K&&Kt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Bs(y),Bn(y);else break e;zs(y),dt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=On(C(y.Za,y),6e3));if(1>=dl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ar(y,11)}else if((l.K||y.g==l)&&Bs(y),!ce(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Fe=L[f];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const Ct=Fe[3];Ct!=null&&(y.la=Ct,y.j.info("VER="+y.la));const gt=Fe[4];gt!=null&&(y.Aa=gt,y.j.info("SVER="+y.Aa));const In=Fe[5];In!=null&&typeof In=="number"&&0<In&&(E=1.5*In,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const pn=l.g;if(pn){const ts=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var U=E.h;U.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Jo(U,U.h),U.h=null))}if(E.D){const qs=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(E.ya=qs,Ye(E.I,E.D,qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ee=l;if(E.qa=Al(E,E.J?E.ia:null,E.W),ee.K){fl(E.h,ee);var Qe=ee,wt=E.L;wt&&(Qe.I=wt),Qe.B&&(Ki(Qe),Xe(Qe)),E.g=ee}else es(E);0<y.i.length&&sr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||Ar(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Ar(y,7):Ot(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}Er(4)}catch{}}var hl=class{constructor(l,f){this.g=l,this.map=f}};function Qi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function dl(l){return l.h?1:l.g?l.g.size:0}function Kt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Jo(l,f){l.g?l.g.add(f):l.h=f}function fl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Qi.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function pl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return J(l.i)}function Vs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Os(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Gr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Os(l),E=Vs(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function wr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof wr){this.h=l.h,Xi(this,l.j),this.o=l.o,this.g=l.g,Kr(this,l.s),this.l=l.l;var f=l.i,y=new nr;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Qr(this,y),this.m=l.m}else l&&(f=String(l).match(Yi))?(this.h=!1,Xi(this,f[1]||"",!0),this.o=Me(f[2]||""),this.g=Me(f[3]||"",!0),Kr(this,f[4]),this.l=Me(f[5]||"",!0),Qr(this,f[6]||"",!0),this.m=Me(f[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}wr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Xr(f,Ls,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Xr(f,Ls,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Xr(y,y.charAt(0)=="/"?yl:gl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Xr(y,Zo)),l.join("")};function dn(l){return new wr(l)}function Xi(l,f,y){l.j=y?Me(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Kr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Qr(l,f,y){f instanceof nr?(l.i=f,rr(l.i,l.h)):(y||(f=Xr(f,_l)),l.i=new nr(f,l.h))}function Ye(l,f,y){l.i.set(f,y)}function Yr(l){return Ye(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Me(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Xr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,ml),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ml(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ls=/[#\/\?@]/g,gl=/[#\?:]/g,yl=/[#\?]/g,_l=/[#\?@]/g,Zo=/#/g;function nr(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Vt(l){l.g||(l.g=new Map,l.h=0,l.i&&kc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=nr.prototype,r.add=function(l,f){Vt(this),this.i=null,l=Tn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Fn(l,f){Vt(l),f=Tn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Un(l,f){return Vt(l),f=Tn(l,f),l.g.has(f)}r.forEach=function(l,f){Vt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},r.na=function(){Vt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},r.V=function(l){Vt(this);let f=[];if(typeof l=="string")Un(this,l)&&(f=f.concat(this.g.get(Tn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Vt(this),this.i=null,l=Tn(this,l),Un(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Jr(l,f,y){Fn(l,f),0<y.length&&(l.i=null,l.g.set(Tn(l,f),J(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var L=U;ee[E]!==""&&(L+="="+encodeURIComponent(String(ee[E]))),l.push(L)}}return this.i=l.join("&")};function Tn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function rr(l,f){f&&!l.j&&(Vt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Fn(this,E),Jr(this,L,y))},l)),l.j=f}function Nc(l,f){const y=new qi;if(m.Image){const E=new Image;E.onload=j(Jt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Jt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Jt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Jt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function vl(l,f){const y=new qi,E=new AbortController,L=setTimeout(()=>{E.abort(),Jt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Jt(y,"TestPingServer: ok",!0,f):Jt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Jt(y,"TestPingServer: error",!1,f)})}function Jt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function xc(){this.g=new Ho}function El(l,f,y){const E=y||"";try{Gr(l,function(L,U){let ee=L;_(L)&&(ee=Bo(L)),f.push(E+U+"="+encodeURIComponent(ee))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function Tr(l){this.l=l.Ub||null,this.j=l.eb||!1}q(Tr,$i),Tr.prototype.g=function(){return new Ji(this.l,this.j)},Tr.prototype.i=function(l){return function(){return l}}({});function Ji(l,f){ht.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Ji,ht),r=Ji.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,zn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?jn(this):zn(this),this.readyState==3&&wl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,jn(this))},r.Qa=function(l){this.g&&(this.response=l,jn(this))},r.ga=function(){this.g&&jn(this)};function jn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,zn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function zn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Ir(l){let f="";return Re(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Zr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Ir(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):Ye(l,f,y))}function it(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(it,ht);var Dc=/^https?$/i,ea=["POST","PUT"];r=it.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bn.g(),this.v=this.o?As(this.o):As(bn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Zi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ea,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of y)this.g.setRequestHeader(U,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Zi(this,U)}};function Zi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,bs(l),fn(l)}function bs(l){l.A||(l.A=!0,re(l,"complete"),re(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,re(this,"complete"),re(this,"abort"),fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fn(this,!0)),it.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},r.bb=function(){ta(this)};function ta(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Zt(l)!=4||l.Z()!=2)){if(l.u&&Zt(l)==4)Y(l.Ea,0,l);else if(re(l,"readystatechange"),Zt(l)==4){l.h=!1;try{const ee=l.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=ee===0){var L=String(l.D).match(Yi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Dc.test(L?L.toLowerCase():"")}y=E}if(y)re(l,"complete"),re(l,"success");else{l.m=6;try{var U=2<Zt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",bs(l)}}finally{fn(l)}}}}function fn(l,f){if(l.g){Ms(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||re(l,"ready");try{y.onreadystatechange=E}catch{}}}function Ms(l){l.I&&(m.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Zt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),$o(f)}};function na(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Fs(l){const f={};l=(l.g&&2<=Zt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ce(l[E]))continue;var y=N(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function ra(l){this.Aa=0,this.i=[],this.j=new qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,l),this.cb=ir("retryDelaySeedMs",1e4,l),this.Wa=ir("forwardChannelMaxRetries",2,l),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(l&&l.concurrentRequestLimit),this.Da=new xc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ra.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,E){dt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Al(this,null,this.W),sr(this)};function Ot(l){if(Us(l),l.G==3){var f=l.U++,y=dn(l.I);if(Ye(y,"SID",l.K),Ye(y,"RID",f),Ye(y,"TYPE","terminate"),Sr(l,y),f=new Mn(l,l.j,f),f.L=2,f.v=Yr(dn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Rl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Xe(f)}Sl(l)}function Bn(l){l.g&&(ia(l),l.g.cancel(),l.g=null)}function Us(l){Bn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Bs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function sr(l){if(!hn(l.h)&&!l.s){l.s=!0;var f=l.Ga;We||ne(),X||(We(),X=!0),me.add(f,l),l.B=0}}function Vc(l,f){return dl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=On(C(l.Ga,l,f),Il(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Mn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=ei(this,L,f),y=dn(this.I),Ye(y,"RID",l),Ye(y,"CVER",22),this.D&&Ye(y,"X-HTTP-Session-Id",this.D),Sr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(Ir(U)))+"&"+f:this.m&&Zr(y,this.m,U)),Jo(this.h,L),this.Ua&&Ye(y,"TYPE","init"),this.P?(Ye(y,"$req",f),Ye(y,"SID","null"),L.T=!0,Ds(L,y,null)):Ds(L,y,f),this.G=2}}else this.G==3&&(l?js(this,l):this.i.length==0||hn(this.h)||js(this))};function js(l,f){var y;f?y=f.l:y=l.U++;const E=dn(l.I);Ye(E,"SID",l.K),Ye(E,"RID",y),Ye(E,"AID",l.T),Sr(l,E),l.m&&l.o&&Zr(E,l.m,l.o),y=new Mn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=ei(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Jo(l.h,y),Ds(y,E,f)}function Sr(l,f){l.H&&Re(l.H,function(y,E){Ye(f,E,y)}),l.l&&Gr({},function(y,E){Ye(f,E,y)})}function ei(l,f,y){y=Math.min(l.i.length,y);var E=l.l?C(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const ee=["count="+y];U==-1?0<y?(U=L[0].g,ee.push("ofs="+U)):U=0:ee.push("ofs="+U);let Qe=!0;for(let wt=0;wt<y;wt++){let Fe=L[wt].g;const Ct=L[wt].map;if(Fe-=U,0>Fe)U=Math.max(0,L[wt].g-100),Qe=!1;else try{El(Ct,ee,"req"+Fe+"_")}catch{E&&E(Ct)}}if(Qe){E=ee.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function es(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;We||ne(),X||(We(),X=!0),me.add(f,l),l.v=0}}function zs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=On(C(l.Fa,l),Il(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,Tl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=On(C(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Bn(this),Tl(this))};function ia(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Tl(l){l.g=new Mn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=dn(l.qa);Ye(f,"RID","rpc"),Ye(f,"SID",l.K),Ye(f,"AID",l.T),Ye(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ye(f,"TO",l.ja),Ye(f,"TYPE","xmlhttp"),Sr(l,f),l.m&&l.o&&Zr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Yr(dn(f)),y.m=null,y.P=!0,Yo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,Bn(this),zs(this),dt(19))};function Bs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function $s(l,f){var y=null;if(l.g==f){Bs(l),ia(l),l.g=null;var E=2}else if(Kt(l.h,f))y=f.D,fl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Hi(),re(E,new Ps(E,y)),sr(l)}else es(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Vc(l,f)||E==2&&zs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:Ar(l,5);break;case 4:Ar(l,10);break;case 3:Ar(l,6);break;default:Ar(l,2)}}}function Il(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function Ar(l,f){if(l.j.info("Error code "+f),f==2){var y=C(l.fb,l),E=l.Xa;const L=!E;E=new wr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Xi(E,"https"),Yr(E),L?Nc(E.toString(),y):vl(E.toString(),y)}else dt(2);l.G=0,l.l&&l.l.sa(f),Sl(l),Us(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Sl(l){if(l.G=0,l.ka=[],l.l){const f=pl(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function Al(l,f,y){var E=y instanceof wr?dn(y):new wr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Kr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new wr(null);E&&Xi(U,E),f&&(U.g=f),L&&Kr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&Ye(E,y,f),Ye(E,"VER",l.la),Sr(l,E),E}function Rl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new it(new Tr({eb:y})):new it(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}r=sa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Hs(){}Hs.prototype.g=function(l,f){return new Qt(l,f)};function Qt(l,f){ht.call(this),this.g=new ra(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ce(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ce(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new or(this)}q(Qt,ht),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Ot(this.g)},Qt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Bo(l),l=y);f.i.push(new hl(f.Ya++,l)),f.G==3&&sr(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Qt.aa.N.call(this)};function Cl(l){er.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}q(Cl,er);function Pl(){Cs.call(this),this.status=1}q(Pl,Cs);function or(l){this.g=l}q(or,sa),or.prototype.ua=function(){re(this.g,"a")},or.prototype.ta=function(l){re(this.g,new Cl(l))},or.prototype.sa=function(l){re(this.g,new Pl)},or.prototype.ra=function(){re(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,k_=function(){return new Hs},P_=function(){return Hi()},C_=tr,Id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ns.NO_ERROR=0,Ns.TIMEOUT=8,Ns.HTTP_ERROR=6,Du=Ns,al.COMPLETE="complete",R_=al,Rs.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Da=Rs,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,A_=it}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});const kg="@firebase/firestore",Ng="4.8.0";/**
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
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */let Lo="11.10.0";/**
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
 */const vs=new Bd("@firebase/firestore");function fo(){return vs.logLevel}function oe(r,...e){if(vs.logLevel<=Oe.DEBUG){const t=e.map(ef);vs.debug(`Firestore (${Lo}): ${r}`,...t)}}function Ur(r,...e){if(vs.logLevel<=Oe.ERROR){const t=e.map(ef);vs.error(`Firestore (${Lo}): ${r}`,...t)}}function Pi(r,...e){if(vs.logLevel<=Oe.WARN){const t=e.map(ef);vs.warn(`Firestore (${Lo}): ${r}`,...t)}}function ef(r){if(typeof r=="string")return r;try{/**
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
 */function Ie(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,N_(r,s,t)}function N_(r,e,t){let s=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ur(s),new Error(s)}function Ke(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||N_(e,o,s)}function Pe(r,e){return r}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends zr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class br{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class x_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qt.UNAUTHENTICATED))}shutdown(){}}class yS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _S{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new br;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new br,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new br)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new x_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new qt(e)}}class vS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ES{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new vS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function D_(){return new TextEncoder}/**
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
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=TS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function Sd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return xe(s,o);{const u=D_(),h=IS(u.encode(Dg(r,t)),u.encode(Dg(e,t)));return h!==0?h:xe(s,o)}}t+=s>65535?2:1}return xe(r.length,e.length)}function Dg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function IS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return xe(r[t],e[t]);return xe(r.length,e.length)}function Ao(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const Vg="__name__";class hr{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ie(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=hr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return xe(e.length,t.length)}static compareSegments(e,t){const s=hr.isNumericId(e),o=hr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?hr.extractNumericId(e).compare(hr.extractNumericId(t)):Sd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ai.fromString(e.substring(4,e.length-2))}}class Ze extends hr{construct(e,t,s){return new Ze(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const SS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends hr{construct(e,t,s){return new Ft(e,t,s)}static isValidIdentifier(e){return SS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vg}static keyField(){return new Ft([Vg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ze.fromString(e))}static fromName(e){return new ye(Ze.fromString(e).popFirst(5))}static empty(){return new ye(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ze(e.slice()))}}/**
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
 */function V_(r,e,t){if(!t)throw new ie(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function AS(r,e,t,s){if(e===!0&&s===!0)throw new ie(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Og(r){if(!ye.isDocumentKey(r))throw new ie(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Lg(r){if(ye.isDocumentKey(r))throw new ie(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function O_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function uc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ie(12329,{type:typeof r})}function _r(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ie(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(r);throw new ie(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function Et(r,e){const t={typeString:r};return e&&(t.value=e),t}function tl(r,e){if(!O_(r))throw new ie(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ie(z.INVALID_ARGUMENT,t);return!0}/**
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
 */const bg=-62135596800,Mg=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Mg);return new rt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bg)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mg}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(tl(e,rt._jsonSchema))return new rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:Et("string",rt._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new rt(0,0))}static max(){return new Ce(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qa=-1;function RS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(s===1e9?new rt(t+1,0):new rt(t,s));return new ki(o,ye.empty(),e)}function CS(r){return new ki(r.readTime,r.key,qa)}class ki{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ki(Ce.min(),ye.empty(),qa)}static max(){return new ki(Ce.max(),ye.empty(),qa)}}function PS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const kS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bo(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==kS)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(o=>o?$.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new $((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new $((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function xS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}cc.ue=-1;/**
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
 */const nf=-1;function hc(r){return r==null}function Wu(r){return r===0&&1/r==-1/0}function DS(r){return typeof r=="number"&&Number.isInteger(r)&&!Wu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const L_="";function VS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Fg(e)),e=OS(r.get(t),e);return Fg(e)}function OS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case L_:t+="";break;default:t+=u}}return t}function Fg(r){return r+L_+""}/**
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
 */function Ug(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function bi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function b_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||Mt.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Su(this.root,e,this.comparator,!1)}getReverseIterator(){return new Su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Su(this.root,e,this.comparator,!0)}}class Su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Mt.RED,this.left=o??Mt.EMPTY,this.right=u??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Mt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Mt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jg(this.data.getIterator())}getIteratorFrom(e){return new jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _n{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new _n([])}unionWith(e){let t=new St(Ft.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class M_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new M_("Invalid base64 string: "+u):u}}(e);return new Ut(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const LS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(r){if(Ke(!!r,39018),typeof r=="string"){let e=0;const t=LS.exec(r);if(Ke(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pt(r.seconds),nanos:pt(r.nanos)}}function pt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function xi(r){return typeof r=="string"?Ut.fromBase64String(r):Ut.fromUint8Array(r)}/**
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
 */const F_="server_timestamp",U_="__type__",j_="__previous_value__",z_="__local_write_time__";function rf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[U_])===null||t===void 0?void 0:t.stringValue)===F_}function dc(r){const e=r.mapValue.fields[j_];return rf(e)?dc(e):e}function Wa(r){const e=Ni(r.mapValue.fields[z_].timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class bS{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Gu="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Gu}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Gu}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const B_="__type__",MS="__max__",Au={mapValue:{}},$_="__vector__",Ku="value";function Di(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?rf(r)?4:US(r)?9007199254740991:FS(r)?10:11:Ie(28295,{value:r})}function vr(r,e){if(r===e)return!0;const t=Di(r);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wa(r).isEqual(Wa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ni(o.timestampValue),m=Ni(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return xi(o.bytesValue).isEqual(xi(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return pt(o.geoPointValue.latitude)===pt(u.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return pt(o.integerValue)===pt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=pt(o.doubleValue),m=pt(u.doubleValue);return h===m?Wu(h)===Wu(m):isNaN(h)&&isNaN(m)}return!1}(r,e);case 9:return Ao(r.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ug(h)!==Ug(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!vr(h[g],m[g])))return!1;return!0}(r,e);default:return Ie(52216,{left:r})}}function Ka(r,e){return(r.values||[]).find(t=>vr(t,e))!==void 0}function Ro(r,e){if(r===e)return 0;const t=Di(r),s=Di(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return function(u,h){const m=pt(u.integerValue||u.doubleValue),g=pt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return zg(r.timestampValue,e.timestampValue);case 4:return zg(Wa(r),Wa(e));case 5:return Sd(r.stringValue,e.stringValue);case 6:return function(u,h){const m=xi(u),g=xi(h);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=xe(m[_],g[_]);if(w!==0)return w}return xe(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const m=xe(pt(u.latitude),pt(h.latitude));return m!==0?m:xe(pt(u.longitude),pt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Bg(r.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,_,w;const R=u.fields||{},C=h.fields||{},j=(m=R[Ku])===null||m===void 0?void 0:m.arrayValue,q=(g=C[Ku])===null||g===void 0?void 0:g.arrayValue,J=xe(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=q==null?void 0:q.values)===null||w===void 0?void 0:w.length)||0);return J!==0?J:Bg(j,q)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===Au.mapValue&&h===Au.mapValue)return 0;if(u===Au.mapValue)return 1;if(h===Au.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let R=0;R<g.length&&R<w.length;++R){const C=Sd(g[R],w[R]);if(C!==0)return C;const j=Ro(m[g[R]],_[w[R]]);if(j!==0)return j}return xe(g.length,w.length)}(r.mapValue,e.mapValue);default:throw Ie(23264,{le:t})}}function zg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=Ni(r),s=Ni(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function Bg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Ro(t[o],s[o]);if(u)return u}return xe(t.length,s.length)}function Co(r){return Ad(r)}function Ad(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ni(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return xi(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ye.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Ad(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Ad(t.fields[h])}`;return o+"}"}(r.mapValue):Ie(61005,{value:r})}function Vu(r){switch(Di(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dc(r);return e?16+Vu(e):16;case 5:return 2*r.stringValue.length;case 6:return xi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Vu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return bi(s.fields,(u,h)=>{o+=u.length+Vu(h)}),o}(r.mapValue);default:throw Ie(13486,{value:r})}}function $g(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Rd(r){return!!r&&"integerValue"in r}function sf(r){return!!r&&"arrayValue"in r}function Hg(r){return!!r&&"nullValue"in r}function qg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ou(r){return!!r&&"mapValue"in r}function FS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[B_])===null||t===void 0?void 0:t.stringValue)===$_}function Fa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return bi(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Fa(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function US(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===MS}/**
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
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ou(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=Ft.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Fa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Ou(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ou(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){bi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new ln(Fa(this.value))}}function H_(r){const e=[];return bi(r.fields,(t,s)=>{const o=new Ft([t]);if(Ou(s)){const u=H_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new _n(e)}/**
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
 */class Wt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Wt(e,0,Ce.min(),Ce.min(),Ce.min(),ln.empty(),0)}static newFoundDocument(e,t,s,o){return new Wt(e,1,t,Ce.min(),s,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Ce.min(),Ce.min(),ln.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Ce.min(),Ce.min(),ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qu{constructor(e,t){this.position=e,this.inclusive=t}}function Wg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=Ro(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!vr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yu{constructor(e,t="asc"){this.field=e,this.dir=t}}function jS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class q_{}class vt extends q_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new BS(e,t,s):t==="array-contains"?new qS(e,s):t==="in"?new WS(e,s):t==="not-in"?new GS(e,s):t==="array-contains-any"?new KS(e,s):new vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new $S(e,s):new HS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ro(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends q_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Zn(e,t)}matches(e){return W_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function W_(r){return r.op==="and"}function G_(r){return zS(r)&&W_(r)}function zS(r){for(const e of r.filters)if(e instanceof Zn)return!1;return!0}function Cd(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+Co(r.value);if(G_(r))return r.filters.map(e=>Cd(e)).join(",");{const e=r.filters.map(t=>Cd(t)).join(",");return`${r.op}(${e})`}}function K_(r,e){return r instanceof vt?function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&vr(s.value,o.value)}(r,e):r instanceof Zn?function(s,o){return o instanceof Zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&K_(h,o.filters[m]),!0):!1}(r,e):void Ie(19439)}function Q_(r){return r instanceof vt?function(t){return`${t.field.canonicalString()} ${t.op} ${Co(t.value)}`}(r):r instanceof Zn?function(t){return t.op.toString()+" {"+t.getFilters().map(Q_).join(" ,")+"}"}(r):"Filter"}class BS extends vt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class $S extends vt{constructor(e,t){super(e,"in",t),this.keys=Y_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class HS extends vt{constructor(e,t){super(e,"not-in",t),this.keys=Y_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Y_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class qS extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&Ka(t.arrayValue,this.value)}}class WS extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class GS extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class KS extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ka(this.value.arrayValue,s))}}/**
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
 */class QS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Kg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new QS(r,e,t,s,o,u,h)}function of(r){const e=Pe(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Cd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Co(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Co(s)).join(",")),e.Pe=t}return e.Pe}function af(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!jS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!K_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Gg(r.startAt,e.startAt)&&Gg(r.endAt,e.endAt)}function Pd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class nl{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function YS(r,e,t,s,o,u,h,m){return new nl(r,e,t,s,o,u,h,m)}function lf(r){return new nl(r)}function Qg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function X_(r){return r.collectionGroup!==null}function Ua(r){const e=Pe(r);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new St(Ft.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Yu(u,s))}),t.has(Ft.keyField().canonicalString())||e.Te.push(new Yu(Ft.keyField(),s))}return e.Te}function pr(r){const e=Pe(r);return e.Ie||(e.Ie=XS(e,Ua(r))),e.Ie}function XS(r,e){if(r.limitType==="F")return Kg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Yu(o.field,u)});const t=r.endAt?new Qu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Qu(r.startAt.position,r.startAt.inclusive):null;return Kg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function kd(r,e){const t=r.filters.concat([e]);return new nl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Nd(r,e,t){return new nl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function fc(r,e){return af(pr(r),pr(e))&&r.limitType===e.limitType}function J_(r){return`${of(pr(r))}|lt:${r.limitType}`}function po(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Q_(o)).join(", ")}]`),hc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Co(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Co(o)).join(",")),`Target(${s})`}(pr(r))}; limitType=${r.limitType})`}function pc(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ye.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ua(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const _=Wg(h,m,g);return h.inclusive?_<=0:_<0}(s.startAt,Ua(s),o)||s.endAt&&!function(h,m,g){const _=Wg(h,m,g);return h.inclusive?_>=0:_>0}(s.endAt,Ua(s),o))}(r,e)}function JS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Z_(r){return(e,t)=>{let s=!1;for(const o of Ua(r)){const u=ZS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function ZS(r,e,t){const s=r.field.isKeyField()?ye.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Ro(g,_):Ie(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ie(19790,{direction:r.dir})}}/**
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
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
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
 */const eA=new lt(ye.comparator);function jr(){return eA}const ev=new lt(ye.comparator);function Va(...r){let e=ev;for(const t of r)e=e.insert(t.key,t);return e}function tv(r){let e=ev;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ms(){return ja()}function nv(){return ja()}function ja(){return new Ts(r=>r.toString(),(r,e)=>r.isEqual(e))}const tA=new lt(ye.comparator),nA=new St(ye.comparator);function Le(...r){let e=nA;for(const t of r)e=e.add(t);return e}const rA=new St(xe);function iA(){return rA}/**
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
 */function uf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function rv(r){return{integerValue:""+r}}function sA(r,e){return DS(e)?rv(e):uf(r,e)}/**
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
 */class mc{constructor(){this._=void 0}}function oA(r,e,t){return r instanceof Xu?function(o,u){const h={fields:{[U_]:{stringValue:F_},[z_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&rf(u)&&(u=dc(u)),u&&(h.fields[j_]=u),{mapValue:h}}(t,e):r instanceof Po?sv(r,e):r instanceof Qa?ov(r,e):function(o,u){const h=iv(o,u),m=Yg(h)+Yg(o.Ee);return Rd(h)&&Rd(o.Ee)?rv(m):uf(o.serializer,m)}(r,e)}function aA(r,e,t){return r instanceof Po?sv(r,e):r instanceof Qa?ov(r,e):t}function iv(r,e){return r instanceof Ju?function(s){return Rd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Xu extends mc{}class Po extends mc{constructor(e){super(),this.elements=e}}function sv(r,e){const t=av(e);for(const s of r.elements)t.some(o=>vr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Qa extends mc{constructor(e){super(),this.elements=e}}function ov(r,e){let t=av(e);for(const s of r.elements)t=t.filter(o=>!vr(o,s));return{arrayValue:{values:t}}}class Ju extends mc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Yg(r){return pt(r.integerValue||r.doubleValue)}function av(r){return sf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class lA{constructor(e,t){this.field=e,this.transform=t}}function uA(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Po&&o instanceof Po||s instanceof Qa&&o instanceof Qa?Ao(s.elements,o.elements,vr):s instanceof Ju&&o instanceof Ju?vr(s.Ee,o.Ee):s instanceof Xu&&o instanceof Xu}(r.transform,e.transform)}class cA{constructor(e,t){this.version=e,this.transformResults=t}}class Xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class gc{}function lv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new cf(r.key,Xn.none()):new rl(r.key,r.data,Xn.none());{const t=r.data,s=ln.empty();let o=new St(Ft.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Mi(r.key,s,new _n(o.toArray()),Xn.none())}}function hA(r,e,t){r instanceof rl?function(o,u,h){const m=o.value.clone(),g=Jg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):r instanceof Mi?function(o,u,h){if(!Lu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Jg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(uv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function za(r,e,t,s){return r instanceof rl?function(u,h,m,g){if(!Lu(u.precondition,h))return m;const _=u.value.clone(),w=Zg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof Mi?function(u,h,m,g){if(!Lu(u.precondition,h))return m;const _=Zg(u.fieldTransforms,g,h),w=h.data;return w.setAll(uv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(r,e,t,s):function(u,h,m){return Lu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,e,t)}function dA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=iv(s.transform,o||null);u!=null&&(t===null&&(t=ln.empty()),t.set(s.field,u))}return t||null}function Xg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ao(s,o,(u,h)=>uA(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class rl extends gc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Mi extends gc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function uv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Jg(r,e,t){const s=new Map;Ke(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,aA(h,m,t[o]))}return s}function Zg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,oA(u,h,e))}return s}class cf extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fA extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&hA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=nv();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=lv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ce.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(t,s)=>Xg(t,s))&&Ao(this.baseMutations,e.baseMutations,(t,s)=>Xg(t,s))}}class hf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ke(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return tA}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new hf(e,t,s,o)}}/**
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
 */class mA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _t,Ue;function yA(r){switch(r){case z.OK:return Ie(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return Ie(15467,{code:r})}}function cv(r){if(r===void 0)return Ur("GRPC error has no .code"),z.UNKNOWN;switch(r){case _t.OK:return z.OK;case _t.CANCELLED:return z.CANCELLED;case _t.UNKNOWN:return z.UNKNOWN;case _t.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case _t.INTERNAL:return z.INTERNAL;case _t.UNAVAILABLE:return z.UNAVAILABLE;case _t.UNAUTHENTICATED:return z.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case _t.NOT_FOUND:return z.NOT_FOUND;case _t.ALREADY_EXISTS:return z.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return z.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case _t.ABORTED:return z.ABORTED;case _t.OUT_OF_RANGE:return z.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return z.UNIMPLEMENTED;case _t.DATA_LOSS:return z.DATA_LOSS;default:return Ie(39323,{code:r})}}(Ue=_t||(_t={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const _A=new Ai([4294967295,4294967295],0);function ey(r){const e=D_().encode(r),t=new S_;return t.update(e),new Uint8Array(t.digest())}function ty(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ai([t,s],0),new Ai([o,u],0)]}class df{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Oa(`Invalid padding: ${t}`);if(s<0)throw new Oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ai.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Ai.fromNumber(s)));return o.compare(_A)===1&&(o=new Ai([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ey(e),[s,o]=ty(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new df(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.fe===0)return;const t=ey(e),[s,o]=ty(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,il.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yc(Ce.min(),o,new lt(xe),jr(),Le())}}class il{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new il(s,t,Le(),Le(),Le())}}/**
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
 */class bu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class hv{constructor(e,t){this.targetId=e,this.De=t}}class dv{constructor(e,t,s=Ut.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ny{constructor(){this.ve=0,this.Ce=ry(),this.Fe=Ut.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),s=Le();return this.Ce.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ie(38017,{changeType:u})}}),new il(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=ry()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class vA{constructor(e){this.We=e,this.Ge=new Map,this.ze=jr(),this.je=Ru(),this.Je=Ru(),this.He=new lt(xe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ie(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Pd(u))if(s===0){const h=new ye(u.path);this.Xe(t,h,Wt.newNoDocument(h,Ce.min()))}else Ke(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=xi(s).toUint8Array()}catch(g){if(g instanceof M_)return Pi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new df(h,o,u)}catch(g){return Pi(g instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((u,h)=>{const m=this.st(h);if(m){if(u.current&&Pd(m.target)){const g=new ye(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Wt.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}});let s=Le();this.Je.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ze.forEach((u,h)=>h.setReadTime(e));const o=new yc(e,t,this.He,this.ze,s);return this.ze=jr(),this.je=Ru(),this.Je=Ru(),this.He=new lt(xe),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ny,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new St(xe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new St(xe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ny),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new lt(ye.comparator)}function ry(){return new lt(ye.comparator)}const EA={asc:"ASCENDING",desc:"DESCENDING"},wA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TA={and:"AND",or:"OR"};class IA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xd(r,e){return r.useProto3Json||hc(e)?e:{value:e}}function Zu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function SA(r,e){return Zu(r,e.toTimestamp())}function mr(r){return Ke(!!r,49232),Ce.fromTimestamp(function(t){const s=Ni(t);return new rt(s.seconds,s.nanos)}(r))}function ff(r,e){return Dd(r,e).canonicalString()}function Dd(r,e){const t=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function pv(r){const e=Ze.fromString(r);return Ke(vv(e),10190,{key:e.toString()}),e}function Vd(r,e){return ff(r.databaseId,e.path)}function hd(r,e){const t=pv(e);if(t.get(1)!==r.databaseId.projectId)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(gv(t))}function mv(r,e){return ff(r.databaseId,e)}function AA(r){const e=pv(r);return e.length===4?Ze.emptyPath():gv(e)}function Od(r){return new Ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gv(r){return Ke(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function iy(r,e,t){return{name:Vd(r,e),fields:t.value.mapValue.fields}}function RA(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ie(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(Ke(w===void 0||typeof w=="string",58123),Ut.fromBase64String(w||"")):(Ke(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ut.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?z.UNKNOWN:cv(_.code);return new ie(w,_.message||"")}(h);t=new dv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=hd(r,s.document.name),u=mr(s.document.updateTime),h=s.document.createTime?mr(s.document.createTime):Ce.min(),m=new ln({mapValue:{fields:s.document.fields}}),g=Wt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new bu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=hd(r,s.document),u=s.readTime?mr(s.readTime):Ce.min(),h=Wt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new bu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=hd(r,s.document),u=s.removedTargetIds||[];t=new bu([],u,o,null)}else{if(!("filter"in e))return Ie(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new gA(o,u),m=s.targetId;t=new hv(m,h)}}return t}function CA(r,e){let t;if(e instanceof rl)t={update:iy(r,e.key,e.value)};else if(e instanceof cf)t={delete:Vd(r,e.key)};else if(e instanceof Mi)t={update:iy(r,e.key,e.data),updateMask:bA(e.fieldMask)};else{if(!(e instanceof fA))return Ie(16599,{Rt:e.type});t={verify:Vd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Xu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Po)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ju)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw Ie(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:SA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ie(27497)}(r,e.precondition)),t}function PA(r,e){return r&&r.length>0?(Ke(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?mr(o.updateTime):mr(u);return h.isEqual(Ce.min())&&(h=mr(u)),new cA(h,o.transformResults||[])}(t,e))):[]}function kA(r,e){return{documents:[mv(r,e.path)]}}function NA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=mv(r,o);const u=function(_){if(_.length!==0)return _v(Zn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(C){return{field:mo(C.field),direction:VA(C.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=xd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{Vt:t,parent:o}}function xA(r){let e=AA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ke(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(R){const C=yv(R);return C instanceof Zn&&G_(C)?C.getFilters():[C]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(C=>function(q){return new Yu(go(q.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(C))}(t.orderBy));let m=null;t.limit&&(m=function(R){let C;return C=typeof R=="object"?R.value:R,hc(C)?null:C}(t.limit));let g=null;t.startAt&&(g=function(R){const C=!!R.before,j=R.values||[];return new Qu(j,C)}(t.startAt));let _=null;return t.endAt&&(_=function(R){const C=!R.before,j=R.values||[];return new Qu(j,C)}(t.endAt)),YS(e,o,h,u,m,"F",g,_)}function DA(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=go(t.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=go(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=go(t.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=go(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}}(r):r.fieldFilter!==void 0?function(t){return vt.create(go(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Zn.create(t.compositeFilter.filters.map(s=>yv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}}(t.compositeFilter.op))}(r):Ie(30097,{filter:r})}function VA(r){return EA[r]}function OA(r){return wA[r]}function LA(r){return TA[r]}function mo(r){return{fieldPath:r.canonicalString()}}function go(r){return Ft.fromServerFormat(r.fieldPath)}function _v(r){return r instanceof vt?function(t){if(t.op==="=="){if(qg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NAN"}};if(Hg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NAN"}};if(Hg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(t.field),op:OA(t.op),value:t.value}}}(r):r instanceof Zn?function(t){const s=t.getFilters().map(o=>_v(o));return s.length===1?s[0]:{compositeFilter:{op:LA(t.op),filters:s}}}(r):Ie(54877,{filter:r})}function bA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Ei{constructor(e,t,s,o,u=Ce.min(),h=Ce.min(),m=Ut.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MA{constructor(e){this.gt=e}}function FA(r){const e=xA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Nd(e,e.limit,"L"):e}/**
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
 */class UA{constructor(){this.Dn=new jA}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(ki.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class jA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new St(Ze.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new St(Ze.comparator)).toArray()}}/**
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
 */const sy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ev=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(Ev,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class ko{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ko(0)}static ur(){return new ko(-1)}}/**
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
 */const oy="LruGarbageCollector",zA=1048576;function ay([r,e],[t,s]){const o=xe(r,t);return o===0?xe(e,s):o}class BA{constructor(e){this.Tr=e,this.buffer=new St(ay),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ay(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $A{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(oy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mo(t)?oe(oy,"Ignoring IndexedDB error during garbage collection: ",t):await bo(t)}await this.Rr(3e5)})}}class HA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(cc.ue);const s=new BA(t);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(sy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sy):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(_=Date.now(),fo()<=Oe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${R} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function qA(r,e){return new HA(r,e)}/**
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
 */class WA{constructor(){this.changes=new Ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class KA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&za(s.mutation,o,_n.empty(),rt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=ms();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Va();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ms();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=jr();const h=ja(),m=function(){return ja()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Mi)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),za(w.mutation,_,w.mutation.getFieldMask(),rt.now())):h.set(_.key,_n.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var R;return m.set(_,new GA(w,(R=h.get(_))!==null&&R!==void 0?R:null))}),m))}recalculateAndSaveOverlays(e,t){const s=ja();let o=new lt((h,m)=>h-m),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||_n.empty();w=m.applyToLocalView(_,w),s.set(g,w);const R=(o.get(m.batchId)||Le()).add(g);o=o.insert(m.batchId,R)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,R=nv();w.forEach(C=>{if(!u.has(C)){const j=lv(t.get(C),s.get(C));j!==null&&R.set(C,j),u=u.add(C)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,R))}return $.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):X_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(ms());let m=qa,g=u;return h.next(_=>$.forEach(_,(w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next(C=>{g=g.insert(w,C)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Le())).next(w=>({batchId:m,changes:tv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,u).next(m=>$.forEach(m,g=>{const _=function(R,C){return new nl(C,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((R,C)=>{h=h.insert(R,C)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Wt.newInvalidDocument(w)))});let m=Va();return h.forEach((g,_)=>{const w=u.get(g);w!==void 0&&za(w.mutation,_,_n.empty(),rt.now()),pc(t,_)&&(m=m.insert(g,_))}),m})}}/**
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
 */class QA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:mr(o.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:FA(o.bundledQuery),readTime:mr(o.readTime)}}(t)),$.resolve()}}/**
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
 */class YA{constructor(){this.overlays=new lt(ye.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ms();return $.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.wt(e,t,u)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ms(),u=t.length+1,h=new ye(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new lt((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=ms(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ms(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return $.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new mA(t,s));let u=this.kr.get(t);u===void 0&&(u=Le(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
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
 */class XA{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class pf{constructor(){this.qr=new St(xt.Qr),this.$r=new St(xt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new xt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new xt(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new ye(new Ze([])),s=new xt(t,e),o=new xt(t,e+1),u=[];return this.$r.forEachInRange([s,o],h=>{this.Wr(h),u.push(h.key)}),u}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new Ze([])),s=new xt(t,e),o=new xt(t,e+1);let u=Le();return this.$r.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new xt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class xt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||xe(e.Hr,t.Hr)}static Ur(e,t){return xe(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
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
 */class JA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new St(xt.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new pA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new xt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?nf:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],h=>{const m=this.Zr(h.Hr);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new St(xe);return t.forEach(o=>{const u=new xt(o,0),h=new xt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],m=>{s=s.add(m.Hr)})}),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ye.isDocumentKey(u)||(u=u.child(""));const h=new xt(new ye(u),0);let m=new St(xe);return this.Yr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)},h),$.resolve(this.ei(m))}ei(e){const t=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ke(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,o=>{const u=new xt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new xt(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ZA{constructor(e){this.ni=e,this.docs=function(){return new lt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let s=jr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Wt.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=jr();const h=t.path,m=new ye(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||PS(CS(w),s)<=0||(o.has(w.key)||pc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ie(9500)}ri(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new e1(this)}getSize(e){return $.resolve(this.size)}}class e1 extends WA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class t1{constructor(e){this.persistence=e,this.ii=new Ts(t=>of(t),af),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new pf,this.targetCount=0,this._i=ko.ar()}forEachTarget(e,t){return this.ii.forEach((s,o)=>t(o)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ko(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
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
 */class wv{constructor(e,t){this.ai={},this.overlays={},this.ui=new cc(0),this.ci=!1,this.ci=!0,this.li=new XA,this.referenceDelegate=e(this),this.hi=new t1(this),this.indexManager=new UA,this.remoteDocumentCache=function(o){return new ZA(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new MA(t),this.Ti=new QA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new YA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new JA(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new n1(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(e,t){return $.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class n1 extends NS{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Ai=new pf,this.Ri=null}static Vi(e){return new mf(e)}get mi(){if(this.Ri)return this.Ri;throw Ie(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,s=>{const o=ye.fromPath(s);return this.fi(e,o).next(u=>{u||t.removeEntry(o,Ce.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ec{constructor(e,t){this.persistence=e,this.gi=new Ts(s=>VS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=qA(this,t)}static Vi(e,t){return new ec(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return $.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(u=>u?$.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,h=>this.Sr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Ce.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vu(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new gf(e,t.fromCache,s,o)}}/**
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
 */class r1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return bw()?8:xS(Gt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ys(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new r1;return this.ws(e,t,h).next(m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)})}).next(()=>u.result)}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(fo()<=Oe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(fo()<=Oe.DEBUG&&oe("QueryEngine","Query:",po(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(fo()<=Oe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(t))):$.resolve())}ps(e,t){if(Qg(t))return $.resolve(null);let s=pr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Nd(t,null,"F"),s=pr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.gs.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,Nd(t,null,"F")):this.vs(e,_,t,g)}))})))}ys(e,t,s,o){return Qg(t)||o.isEqual(Ce.min())?$.resolve(null):this.gs.getDocuments(e,s).next(u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?$.resolve(null):(fo()<=Oe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),po(t)),this.vs(e,h,t,RS(o,qa)).next(m=>m))})}bs(e,t){let s=new St(Z_(e));return t.forEach((o,u)=>{pc(e,u)&&(s=s.add(u))}),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return fo()<=Oe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",po(t)),this.gs.getDocumentsMatchingQuery(e,t,ki.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const yf="LocalStore",s1=3e8;class o1{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new lt(xe),this.Ms=new Ts(u=>of(u),af),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function a1(r,e,t,s){return new o1(r,e,t,s)}async function Tv(r,e){const t=Pe(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Le();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Bs:_,removedBatchIds:h,addedBatchIds:m}))})})}function l1(r,e){const t=Pe(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return function(m,g,_,w){const R=_.batch,C=R.keys();let j=$.resolve();return C.forEach(q=>{j=j.next(()=>w.getEntry(g,q)).next(J=>{const H=_.docVersions.get(q);Ke(H!==null,48541),J.version.compareTo(H)<0&&(R.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),w.addEntry(J)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,R))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Le();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Iv(r){const e=Pe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function u1(r,e){const t=Pe(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach((w,R)=>{const C=o.get(R);if(!C)return;m.push(t.hi.removeMatchingKeys(u,w.removedDocuments,R).next(()=>t.hi.addMatchingKeys(u,w.addedDocuments,R)));let j=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?j=j.withResumeToken(Ut.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(R,j),function(J,H,fe){return J.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=s1?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0}(C,j,w)&&m.push(t.hi.updateTargetData(u,j))});let g=jr(),_=Le();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(c1(u,h,e.documentUpdates).next(w=>{g=w.Ls,_=w.ks})),!s.isEqual(Ce.min())){const w=t.hi.getLastRemoteSnapshotVersion(u).next(R=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return $.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.Fs=o,u))}function c1(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=jr();return t.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ce.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):oe(yf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{Ls:h,ks:o}})}function h1(r,e){const t=Pe(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=nf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function d1(r,e){const t=Pe(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.hi.getTargetData(s,e).next(u=>u?(o=u,$.resolve(o)):t.hi.allocateTargetId(s).next(h=>(o=new Ei(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Ld(r,e,t){const s=Pe(r),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Mo(h))throw h;oe(yf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function ly(r,e,t){const s=Pe(r);let o=Ce.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const R=Pe(g),C=R.Ms.get(w);return C!==void 0?$.resolve(R.Fs.get(C)):R.hi.getTargetData(_,w)}(s,h,pr(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ce.min(),t?u:Le())).next(m=>(f1(s,JS(e),m),{documents:m,qs:u})))}function f1(r,e,t){let s=r.xs.get(e)||Ce.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.xs.set(e,s)}class uy{constructor(){this.activeTargetIds=iA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p1{constructor(){this.Fo=new uy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new uy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class m1{xo(e){}shutdown(){}}/**
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
 */const cy="ConnectivityMonitor";class hy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(cy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(cy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cu=null;function bd(){return Cu===null?Cu=function(){return 268435456+Math.round(2147483648*Math.random())}():Cu++,"0x"+Cu.toString(16)}/**
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
 */const dd="RestConnection",g1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class y1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Gu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=bd(),m=this.Go(e,t.toUriEncodedString());oe(dd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:_}=new URL(m),w=xo(_);return this.jo(e,m,g,s,w).then(R=>(oe(dd,`Received RPC '${e}' ${h}: `,R),R),R=>{throw Pi(dd,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R})}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Go(e,t){const s=g1[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class _1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ht="WebChannelConnection";class v1 extends y1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=bd();return new Promise((m,g)=>{const _=new A_;_.setWithCredentials(!0),_.listenOnce(R_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case Du.NO_ERROR:const R=_.getResponseJson();oe(Ht,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case Du.TIMEOUT:oe(Ht,`RPC '${e}' ${h} timed out`),g(new ie(z.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const C=_.getStatus();if(oe(Ht,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const q=j==null?void 0:j.error;if(q&&q.status&&q.message){const J=function(fe){const ce=fe.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ce)>=0?ce:z.UNKNOWN}(q.status);g(new ie(J,q.message))}else g(new ie(z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ie(z.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{oe(Ht,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);oe(Ht,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}P_(e,t,s){const o=bd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=k_(),m=P_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");oe(Ht,`Creating RPC '${e}' stream ${o}: ${w}`,g);const R=h.createWebChannel(w,g);this.T_(R);let C=!1,j=!1;const q=new _1({Ho:H=>{j?oe(Ht,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(C||(oe(Ht,`Opening RPC '${e}' stream ${o} transport.`),R.open(),C=!0),oe(Ht,`RPC '${e}' stream ${o} sending:`,H),R.send(H))},Yo:()=>R.close()}),J=(H,fe,ce)=>{H.listen(fe,ge=>{try{ce(ge)}catch(Se){setTimeout(()=>{throw Se},0)}})};return J(R,Da.EventType.OPEN,()=>{j||(oe(Ht,`RPC '${e}' stream ${o} transport opened.`),q.s_())}),J(R,Da.EventType.CLOSE,()=>{j||(j=!0,oe(Ht,`RPC '${e}' stream ${o} transport closed`),q.__(),this.I_(R))}),J(R,Da.EventType.ERROR,H=>{j||(j=!0,Pi(Ht,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),q.__(new ie(z.UNAVAILABLE,"The operation could not be completed")))}),J(R,Da.EventType.MESSAGE,H=>{var fe;if(!j){const ce=H.data[0];Ke(!!ce,16349);const ge=ce,Se=(ge==null?void 0:ge.error)||((fe=ge[0])===null||fe===void 0?void 0:fe.error);if(Se){oe(Ht,`RPC '${e}' stream ${o} received error:`,Se);const qe=Se.status;let Re=function(S){const k=_t[S];if(k!==void 0)return cv(k)}(qe),D=Se.message;Re===void 0&&(Re=z.INTERNAL,D="Unknown error status: "+qe+" with message "+Se.message),j=!0,q.__(new ie(Re,D)),R.close()}else oe(Ht,`RPC '${e}' stream ${o} received:`,ce),q.a_(ce)}}),J(m,C_.STAT_EVENT,H=>{H.stat===Id.PROXY?oe(Ht,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===Id.NOPROXY&&oe(Ht,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.o_()},0),q}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function fd(){return typeof document<"u"?document:null}/**
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
 */function _c(r){return new IA(r,!0)}/**
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
 */class Sv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const dy="PersistentStream";class Av{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Sv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===t&&this.W_(s,o)},s=>{e(()=>{const o=new ie(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return oe(dy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(oe(dy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E1 extends Av{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=RA(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ce.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ce.min():h.readTime?mr(h.readTime):Ce.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Od(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=Pd(g)?{documents:kA(u,g)}:{query:NA(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=fv(u,h.resumeToken);const _=xd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ce.min())>0){m.readTime=Zu(u,h.snapshotVersion.toTimestamp());const _=xd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=DA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Od(this.serializer),t.removeTarget=e,this.k_(t)}}class w1 extends Av{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=PA(e.writeResults,e.commitTime),s=mr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Od(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>CA(this.serializer,s))};this.k_(t)}}/**
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
 */class T1{}class I1 extends T1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Wo(e,Dd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(z.UNKNOWN,u.toString())})}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Jo(e,Dd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(z.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class S1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ur(t),this._a=!1):oe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Es="RemoteStore";class A1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(h=>{s.enqueueAndForget(async()=>{Is(this)&&(oe(Es,"Restarting streams for network reachability change."),await async function(g){const _=Pe(g);_.Ia.add(4),await sl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await vc(_)}(this))})}),this.Aa=new S1(s,o)}}async function vc(r){if(Is(r))for(const e of r.da)await e(!0)}async function sl(r){for(const e of r.da)await e(!1)}function Rv(r,e){const t=Pe(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),wf(t)?Ef(t):Fo(t).x_()&&vf(t,e))}function _f(r,e){const t=Pe(r),s=Fo(t);t.Ta.delete(e),s.x_()&&Cv(t,e),t.Ta.size===0&&(s.x_()?s.B_():Is(t)&&t.Aa.set("Unknown"))}function vf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fo(r).H_(e)}function Cv(r,e){r.Ra.$e(e),Fo(r).Y_(e)}function Ef(r){r.Ra=new vA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Fo(r).start(),r.Aa.aa()}function wf(r){return Is(r)&&!Fo(r).M_()&&r.Ta.size>0}function Is(r){return Pe(r).Ia.size===0}function Pv(r){r.Ra=void 0}async function R1(r){r.Aa.set("Online")}async function C1(r){r.Ta.forEach((e,t)=>{vf(r,e)})}async function P1(r,e){Pv(r),wf(r)?(r.Aa.la(e),Ef(r)):r.Aa.set("Unknown")}async function k1(r,e,t){if(r.Aa.set("Online"),e instanceof dv&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))}(r,e)}catch(s){oe(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await tc(r,s)}else if(e instanceof bu?r.Ra.Ye(e):e instanceof hv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ce.min()))try{const s=await Iv(r.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ta.get(_);w&&u.Ta.set(_,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,_)=>{const w=u.Ta.get(g);if(!w)return;u.Ta.set(g,w.withResumeToken(Ut.EMPTY_BYTE_STRING,w.snapshotVersion)),Cv(u,g);const R=new Ei(w.target,g,_,w.sequenceNumber);vf(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(r,t)}catch(s){oe(Es,"Failed to raise snapshot:",s),await tc(r,s)}}async function tc(r,e,t){if(!Mo(e))throw e;r.Ia.add(1),await sl(r),r.Aa.set("Offline"),t||(t=()=>Iv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{oe(Es,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await vc(r)})}function kv(r,e){return e().catch(t=>tc(r,t,e))}async function Ec(r){const e=Pe(r),t=Vi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nf;for(;N1(e);)try{const o=await h1(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,x1(e,o)}catch(o){await tc(e,o)}Nv(e)&&xv(e)}function N1(r){return Is(r)&&r.Pa.length<10}function x1(r,e){r.Pa.push(e);const t=Vi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Nv(r){return Is(r)&&!Vi(r).M_()&&r.Pa.length>0}function xv(r){Vi(r).start()}async function D1(r){Vi(r).na()}async function V1(r){const e=Vi(r);for(const t of r.Pa)e.X_(t.mutations)}async function O1(r,e,t){const s=r.Pa.shift(),o=hf.from(s,e,t);await kv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Ec(r)}async function L1(r,e){e&&Vi(r).Z_&&await async function(s,o){if(function(h){return yA(h)&&h!==z.ABORTED}(o.code)){const u=s.Pa.shift();Vi(s).N_(),await kv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Ec(s)}}(r,e),Nv(r)&&xv(r)}async function fy(r,e){const t=Pe(r);t.asyncQueue.verifyOperationInProgress(),oe(Es,"RemoteStore received new credentials");const s=Is(t);t.Ia.add(3),await sl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await vc(t)}async function b1(r,e){const t=Pe(r);e?(t.Ia.delete(2),await vc(t)):e||(t.Ia.add(2),await sl(t),t.Aa.set("Unknown"))}function Fo(r){return r.Va||(r.Va=function(t,s,o){const u=Pe(t);return u.ia(),new E1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:R1.bind(null,r),e_:C1.bind(null,r),n_:P1.bind(null,r),J_:k1.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),wf(r)?Ef(r):r.Aa.set("Unknown")):(await r.Va.stop(),Pv(r))})),r.Va}function Vi(r){return r.ma||(r.ma=function(t,s,o){const u=Pe(t);return u.ia(),new w1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:D1.bind(null,r),n_:L1.bind(null,r),ea:V1.bind(null,r),ta:O1.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await Ec(r)):(await r.ma.stop(),r.Pa.length>0&&(oe(Es,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
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
 */class Tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Tf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),Mo(r))return new ie(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class wo{static emptySet(e){return new wo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new wo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class py{constructor(){this.fa=new lt(ye.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ie(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class No{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new No(e,t,wo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class M1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class F1{constructor(){this.queries=my(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Pe(t),u=o.queries;o.queries=my(),u.forEach((h,m)=>{for(const g of m.wa)g.onError(s)})})(this,new ie(z.ABORTED,"Firestore shutting down"))}}function my(){return new Ts(r=>J_(r),fc)}async function Dv(r,e){const t=Pe(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new M1,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=If(h,`Initialization of query '${po(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Sf(t)}async function Vv(r,e){const t=Pe(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function U1(r,e){const t=Pe(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Sf(t)}function j1(r,e,t){const s=Pe(r),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Sf(r){r.Da.forEach(e=>{e.next()})}var Md,gy;(gy=Md||(Md={})).Fa="default",gy.Cache="cache";class Ov{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new No(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Md.Cache}}/**
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
 */class Lv{constructor(e){this.key=e}}class bv{constructor(e){this.key=e}}class z1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=Z_(e),this.eu=new wo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new py,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,R)=>{const C=o.get(w),j=pc(this.query,R)?R:null,q=!!C&&this.mutatedKeys.has(C.key),J=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let H=!1;C&&j?C.data.isEqual(j.data)?q!==J&&(s.track({type:3,doc:j}),H=!0):this.iu(C,j)||(s.track({type:2,doc:j}),H=!0,(g&&this.Xa(j,g)>0||_&&this.Xa(j,_)<0)&&(m=!0)):!C&&j?(s.track({type:0,doc:j}),H=!0):C&&!j&&(s.track({type:1,doc:C}),H=!0,(g||_)&&(m=!0)),H&&(j?(h=h.add(j),u=J?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((w,R)=>function(j,q){const J=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{At:H})}};return J(j)-J(q)}(w.type,R.type)||this.Xa(w.doc,R.doc)),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new No(this.query,e.eu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new py,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new bv(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Lv(s))}),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return No.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Af="SyncEngine";class B1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class $1{constructor(e){this.key=e,this.lu=!1}}class H1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ts(m=>J_(m),fc),this.Tu=new Map,this.Iu=new Set,this.du=new lt(ye.comparator),this.Eu=new Map,this.Au=new pf,this.Ru={},this.Vu=new Map,this.mu=ko.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function q1(r,e,t=!0){const s=Bv(r);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await Mv(s,e,t,!0),o}async function W1(r,e){const t=Bv(r);await Mv(t,e,!0,!1)}async function Mv(r,e,t,s){const o=await d1(r.localStore,pr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await G1(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Rv(r.remoteStore,o),m}async function G1(r,e,t,s,o){r.gu=(R,C,j)=>async function(J,H,fe,ce){let ge=H.view.nu(fe);ge.Ds&&(ge=await ly(J.localStore,H.query,!1).then(({documents:D})=>H.view.nu(D,ge)));const Se=ce&&ce.targetChanges.get(H.targetId),qe=ce&&ce.targetMismatches.get(H.targetId)!=null,Re=H.view.applyChanges(ge,J.isPrimaryClient,Se,qe);return _y(J,H.targetId,Re._u),Re.snapshot}(r,R,C,j);const u=await ly(r.localStore,e,!0),h=new z1(e,u.qs),m=h.nu(u.documents),g=il.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);_y(r,t,_._u);const w=new B1(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function K1(r,e,t){const s=Pe(r),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(h=>!fc(h,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ld(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&_f(s.remoteStore,o.targetId),Fd(s,o.targetId)}).catch(bo)):(Fd(s,o.targetId),await Ld(s.localStore,o.targetId,!0))}async function Q1(r,e){const t=Pe(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),_f(t.remoteStore,s.targetId))}async function Y1(r,e,t){const s=rR(r);try{const o=await function(h,m){const g=Pe(h),_=rt.now(),w=m.reduce((j,q)=>j.add(q.key),Le());let R,C;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let q=jr(),J=Le();return g.Os.getEntries(j,w).next(H=>{q=H,q.forEach((fe,ce)=>{ce.isValidDocument()||(J=J.add(fe))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,q)).next(H=>{R=H;const fe=[];for(const ce of m){const ge=dA(ce,R.get(ce.key).overlayedDocument);ge!=null&&fe.push(new Mi(ce.key,ge,H_(ge.value.mapValue),Xn.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,fe,m)}).next(H=>{C=H;const fe=H.applyToLocalDocumentSet(R,J);return g.documentOverlayCache.saveOverlays(j,H.batchId,fe)})}).then(()=>({batchId:C.batchId,changes:tv(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new lt(xe)),_=_.insert(m,g),h.Ru[h.currentUser.toKey()]=_}(s,o.batchId,t),await ol(s,o.changes),await Ec(s.remoteStore)}catch(o){const u=If(o,"Failed to persist write");t.reject(u)}}async function Fv(r,e){const t=Pe(r);try{const s=await u1(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ke(h.lu,14607):o.removedDocuments.size>0&&(Ke(h.lu,42227),h.lu=!1))}),await ol(t,s,e)}catch(s){await bo(s)}}function yy(r,e,t){const s=Pe(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Pe(h);g.onlineState=m;let _=!1;g.queries.forEach((w,R)=>{for(const C of R.wa)C.va(m)&&(_=!0)}),_&&Sf(g)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function X1(r,e,t){const s=Pe(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new lt(ye.comparator);h=h.insert(u,Wt.newNoDocument(u,Ce.min()));const m=Le().add(u),g=new yc(Ce.min(),new Map,new lt(xe),h,m);await Fv(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Rf(s)}else await Ld(s.localStore,e,!1).then(()=>Fd(s,e,t)).catch(bo)}async function J1(r,e){const t=Pe(r),s=e.batch.batchId;try{const o=await l1(t.localStore,e);jv(t,s,null),Uv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ol(t,o)}catch(o){await bo(o)}}async function Z1(r,e,t){const s=Pe(r);try{const o=await function(h,m){const g=Pe(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next(R=>(Ke(R!==null,37113),w=R.keys(),g.mutationQueue.removeMutationBatch(_,R))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);jv(s,e,t),Uv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ol(s,o)}catch(o){await bo(o)}}function Uv(r,e){(r.Vu.get(e)||[]).forEach(t=>{t.resolve()}),r.Vu.delete(e)}function jv(r,e,t){const s=Pe(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Fd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(s=>{r.Au.containsKey(s)||zv(r,s)})}function zv(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(_f(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Rf(r))}function _y(r,e,t){for(const s of t)s instanceof Lv?(r.Au.addReference(s.key,e),eR(r,s)):s instanceof bv?(oe(Af,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||zv(r,s.key)):Ie(19791,{yu:s})}function eR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(oe(Af,"New document in limbo: "+t),r.Iu.add(s),Rf(r))}function Rf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new ye(Ze.fromString(e)),s=r.mu.next();r.Eu.set(s,new $1(t)),r.du=r.du.insert(t,s),Rv(r.remoteStore,new Ei(pr(lf(t.path)),s,"TargetPurposeLimboResolution",cc.ue))}}async function ol(r,e,t){const s=Pe(r),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach((m,g)=>{h.push(s.gu(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const R=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,R?"current":"not-current")}if(_){o.push(_);const R=gf.Es(g.targetId,_);u.push(R)}}))}),await Promise.all(h),s.hu.J_(o),await async function(g,_){const w=Pe(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>$.forEach(_,C=>$.forEach(C.Is,j=>w.persistence.referenceDelegate.addReference(R,C.targetId,j)).next(()=>$.forEach(C.ds,j=>w.persistence.referenceDelegate.removeReference(R,C.targetId,j)))))}catch(R){if(!Mo(R))throw R;oe(yf,"Failed to update sequence numbers: "+R)}for(const R of _){const C=R.targetId;if(!R.fromCache){const j=w.Fs.get(C),q=j.snapshotVersion,J=j.withLastLimboFreeSnapshotVersion(q);w.Fs=w.Fs.insert(C,J)}}}(s.localStore,u))}async function tR(r,e){const t=Pe(r);if(!t.currentUser.isEqual(e)){oe(Af,"User change. New user:",e.toKey());const s=await Tv(t.localStore,e);t.currentUser=e,function(u,h){u.Vu.forEach(m=>{m.forEach(g=>{g.reject(new ie(z.CANCELLED,h))})}),u.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ol(t,s.Bs)}}function nR(r,e){const t=Pe(r),s=t.Eu.get(e);if(s&&s.lu)return Le().add(s.key);{let o=Le();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Bv(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X1.bind(null,e),e.hu.J_=U1.bind(null,e.eventManager),e.hu.pu=j1.bind(null,e.eventManager),e}function rR(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z1.bind(null,e),e}class nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return a1(this.persistence,new i1,e.initialUser,this.serializer)}Du(e){return new wv(mf.Vi,this.serializer)}bu(e){return new p1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nc.provider={build:()=>new nc};class iR extends nc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ke(this.persistence.referenceDelegate instanceof ec,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new $A(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new wv(s=>ec.Vi(s,t),this.serializer)}}class Ud{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tR.bind(null,this.syncEngine),await b1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F1}()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),s=function(u){return new v1(u)}(e.databaseInfo);return function(u,h,m,g){return new I1(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new A1(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>yy(this.syncEngine,t,0),function(){return hy.C()?new hy:new m1}())}createSyncEngine(e,t){return function(o,u,h,m,g,_,w){const R=new H1(o,u,h,m,g,_);return w&&(R.fu=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Pe(o);oe(Es,"RemoteStore shutting down."),u.Ia.add(5),await sl(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ud.provider={build:()=>new Ud};/**
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
 */class $v{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Oi="FirestoreClient";class sR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=qt.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{oe(Oi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(oe(Oi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=If(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function pd(r,e){r.asyncQueue.verifyOperationInProgress(),oe(Oi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Tv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{Pi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{Pi("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=e}async function vy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await oR(r);oe(Oi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>fy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>fy(e.remoteStore,o)),r._onlineComponents=e}async function oR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(Oi,"Using user provided OfflineComponentProvider");try{await pd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Pi("Error using user provided cache. Falling back to memory cache: "+t),await pd(r,new nc)}}else oe(Oi,"Using default OfflineComponentProvider"),await pd(r,new iR(void 0));return r._offlineComponents}async function Hv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(Oi,"Using user provided OnlineComponentProvider"),await vy(r,r._uninitializedComponentsProvider._online)):(oe(Oi,"Using default OnlineComponentProvider"),await vy(r,new Ud))),r._onlineComponents}function aR(r){return Hv(r).then(e=>e.syncEngine)}async function qv(r){const e=await Hv(r),t=e.eventManager;return t.onListen=q1.bind(null,e.syncEngine),t.onUnlisten=K1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=W1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Q1.bind(null,e.syncEngine),t}function lR(r,e,t={}){const s=new br;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new $v({next:C=>{w.Ou(),h.enqueueAndForget(()=>Vv(u,R));const j=C.docs.has(m);!j&&C.fromCache?_.reject(new ie(z.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&C.fromCache&&g&&g.source==="server"?_.reject(new ie(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),R=new Ov(lf(m.path),w,{includeMetadataChanges:!0,ka:!0});return Dv(u,R)}(await qv(r),r.asyncQueue,e,t,s)),s.promise}function uR(r,e,t={}){const s=new br;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new $v({next:C=>{w.Ou(),h.enqueueAndForget(()=>Vv(u,R)),C.fromCache&&g.source==="server"?_.reject(new ie(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),R=new Ov(m,w,{includeMetadataChanges:!0,ka:!0});return Dv(u,R)}(await qv(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function Wv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Ey=new Map;/**
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
 */const Gv="firestore.googleapis.com",wy=!0;class Ty{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gv,this.ssl=wy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:wy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ev;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zA)throw new ie(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new gS;switch(s.type){case"firstParty":return new ES(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ey.get(t);s&&(oe("ComponentProvider","Removing Datastore"),Ey.delete(t),s.terminate())}(this),Promise.resolve()}}function cR(r,e,t,s={}){var o;r=_r(r,wc);const u=xo(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;u&&(My(`https://${g}`),Fy("Firestore",!0)),h.host!==Gv&&h.host!==g&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!Ci(_,m)&&(r._setSettings(_),s.mockUserToken)){let w,R;if(typeof s.mockUserToken=="string")w=s.mockUserToken,R=qt.MOCK_USER;else{w=Cw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ie(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new qt(C)}r._authCredentials=new yS(new x_(w,R))}}/**
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
 */class Uo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Uo(this.firestore,e,this._query)}}class mt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(tl(t,mt._jsonSchema))return new mt(e,s||null,new ye(Ze.fromString(t.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:Et("string",mt._jsonSchemaVersion),referencePath:Et("string")};class Ri extends Uo{constructor(e,t,s){super(e,t,lf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new ye(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function hR(r,e,...t){if(r=Dt(r),V_("collection","path",e),r instanceof wc){const s=Ze.fromString(e,...t);return Lg(s),new Ri(r,null,s)}{if(!(r instanceof mt||r instanceof Ri))throw new ie(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...t));return Lg(s),new Ri(r.firestore,null,s)}}function dR(r,e,...t){if(r=Dt(r),arguments.length===1&&(e=tf.newId()),V_("doc","path",e),r instanceof wc){const s=Ze.fromString(e,...t);return Og(s),new mt(r,null,new ye(s))}{if(!(r instanceof mt||r instanceof Ri))throw new ie(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...t));return Og(s),new mt(r.firestore,r instanceof Ri?r.converter:null,new ye(s))}}/**
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
 */const Iy="AsyncQueue";class Sy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Sv(this,"async_queue_retry"),this.oc=()=>{const s=fd();s&&oe(Iy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=fd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=fd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new br;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Mo(e))throw e;oe(Iy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Ur("INTERNAL UNHANDLED ERROR: ",Ay(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Tf.createAndSchedule(this,e,t,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&Ie(47125,{hc:Ay(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ay(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class jo extends wc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Sy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sy(e),this._firestoreClient=void 0,await e}}}function fR(r,e){const t=typeof r=="object"?r:By(),s=typeof r=="string"?r:Gu,o=Hd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Aw("firestore");u&&cR(o,...u)}return o}function Cf(r){if(r._terminated)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pR(r),r._firestoreClient}function pR(r){var e,t,s;const o=r._freezeSettings(),u=function(m,g,_,w){return new bS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Wv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new sR(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Ut.fromBase64String(e))}catch(t){throw new ie(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(tl(e,Nn._jsonSchema))return Nn.fromBase64String(e.bytes)}}Nn._jsonSchemaVersion="firestore/bytes/1.0",Nn._jsonSchema={type:Et("string",Nn._jsonSchemaVersion),bytes:Et("string")};/**
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
 */class Tc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ic{constructor(e){this._methodName=e}}/**
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
 */class gr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gr._jsonSchemaVersion}}static fromJSON(e){if(tl(e,gr._jsonSchema))return new gr(e.latitude,e.longitude)}}gr._jsonSchemaVersion="firestore/geoPoint/1.0",gr._jsonSchema={type:Et("string",gr._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
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
 */class yr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(tl(e,yr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yr(e.vectorValues);throw new ie(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yr._jsonSchemaVersion="firestore/vectorValue/1.0",yr._jsonSchema={type:Et("string",yr._jsonSchemaVersion),vectorValues:Et("object")};/**
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
 */const mR=/^__.*__$/;class gR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms):new rl(e,this.data,t,this.fieldTransforms)}}class Kv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Qv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ec:r})}}class Sc{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Sc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return rc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Qv(this.Ec)&&mR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class yR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_c(e)}Dc(e,t,s,o=!1){return new Sc({Ec:e,methodName:t,bc:s,path:Ft.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pf(r){const e=r._freezeSettings(),t=_c(r._databaseId);return new yR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function _R(r,e,t,s,o,u={}){const h=r.Dc(u.merge||u.mergeFields?2:0,e,t,o);Nf("Data must be an object, but it was:",h,s);const m=Yv(s,h);let g,_;if(u.merge)g=new _n(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const C=jd(e,R,t);if(!h.contains(C))throw new ie(z.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Jv(w,C)||w.push(C)}g=new _n(w),_=h.fieldTransforms.filter(R=>g.covers(R.field))}else g=null,_=h.fieldTransforms;return new gR(new ln(m),g,_)}class Ac extends Ic{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function vR(r,e,t){return new Sc({Ec:3,bc:e.settings.bc,methodName:r._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class kf extends Ic{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=vR(this,e,!0),s=this.vc.map(u=>zo(u,t)),o=new Po(s);return new lA(e.path,o)}isEqual(e){return e instanceof kf&&Ci(this.vc,e.vc)}}function ER(r,e,t,s){const o=r.Dc(1,e,t);Nf("Data must be an object, but it was:",o,s);const u=[],h=ln.empty();bi(s,(g,_)=>{const w=xf(e,g,t);_=Dt(_);const R=o.gc(w);if(_ instanceof Ac)u.push(w);else{const C=zo(_,R);C!=null&&(u.push(w),h.set(w,C))}});const m=new _n(u);return new Kv(h,m,o.fieldTransforms)}function wR(r,e,t,s,o,u){const h=r.Dc(1,e,t),m=[jd(e,s,t)],g=[o];if(u.length%2!=0)throw new ie(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(jd(e,u[C])),g.push(u[C+1]);const _=[],w=ln.empty();for(let C=m.length-1;C>=0;--C)if(!Jv(_,m[C])){const j=m[C];let q=g[C];q=Dt(q);const J=h.gc(j);if(q instanceof Ac)_.push(j);else{const H=zo(q,J);H!=null&&(_.push(j),w.set(j,H))}}const R=new _n(_);return new Kv(w,R,h.fieldTransforms)}function TR(r,e,t,s=!1){return zo(t,r.Dc(s?4:3,e))}function zo(r,e){if(Xv(r=Dt(r)))return Nf("Unsupported field value:",e,r),Yv(r,e);if(r instanceof Ic)return function(s,o){if(!Qv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=zo(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return sA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=rt.fromDate(s);return{timestampValue:Zu(o.serializer,u)}}if(s instanceof rt){const u=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zu(o.serializer,u)}}if(s instanceof gr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Nn)return{bytesValue:fv(o.serializer,s._byteString)};if(s instanceof mt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ff(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yr)return function(h,m){return{mapValue:{fields:{[B_]:{stringValue:$_},[Ku]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return uf(m.serializer,_)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${uc(s)}`)}(r,e)}function Yv(r,e){const t={};return b_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(r,(s,o)=>{const u=zo(o,e.Vc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Xv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof rt||r instanceof gr||r instanceof Nn||r instanceof mt||r instanceof Ic||r instanceof yr)}function Nf(r,e,t){if(!Xv(t)||!O_(t)){const s=uc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function jd(r,e,t){if((e=Dt(e))instanceof Tc)return e._internalPath;if(typeof e=="string")return xf(r,e);throw rc("Field path arguments must be of type string or ",r,!1,void 0,t)}const IR=new RegExp("[~\\*/\\[\\]]");function xf(r,e,t){if(e.search(IR)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Tc(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function rc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(z.INVALID_ARGUMENT,m+r+g)}function Jv(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Zv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Df("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SR extends Zv{data(){return super.data()}}function Df(r,e){return typeof e=="string"?xf(r,e):e instanceof Tc?e._internalPath:e._delegate._internalPath}/**
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
 */function AR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ie(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vf{}class RR extends Vf{}function CR(r,e,...t){let s=[];e instanceof Vf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof Of).length,m=u.filter(g=>g instanceof Rc).length;if(h>1||h>0&&m>0)throw new ie(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Rc extends RR{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Rc(e,t,s)}_apply(e){const t=this._parse(e);return eE(e._query,t),new Uo(e.firestore,e.converter,kd(e._query,t))}_parse(e){const t=Pf(e.firestore);return function(u,h,m,g,_,w,R){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Cy(R,w);const q=[];for(const J of R)q.push(Ry(g,u,J));C={arrayValue:{values:q}}}else C=Ry(g,u,R)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Cy(R,w),C=TR(m,h,R,w==="in"||w==="not-in");return vt.create(_,w,C)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function PR(r,e,t){const s=e,o=Df("where",r);return Rc._create(o,s,t)}class Of extends Vf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Of(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)eE(h,g),h=kd(h,g)}(e._query,t),new Uo(e.firestore,e.converter,kd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ry(r,e,t){if(typeof(t=Dt(t))=="string"){if(t==="")throw new ie(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!X_(e)&&t.indexOf("/")!==-1)throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ze.fromString(t));if(!ye.isDocumentKey(s))throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $g(r,new ye(s))}if(t instanceof mt)return $g(r,t._key);throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(t)}.`)}function Cy(r,e){if(!Array.isArray(r)||r.length===0)throw new ie(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eE(r,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class kR{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return bi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Ku].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>pt(h.doubleValue));return new yr(u)}convertGeoPoint(e){return new gr(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=dc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ze.fromString(e);Ke(vv(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),u=new ye(s.popFirst(5));return o.isEqual(t)||Ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function NR(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends Zv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Df("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",gs._jsonSchema={type:Et("string",gs._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class Mu extends gs{data(e={}){return super.data(e)}}class To{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Mu(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new Mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:xR(m.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=To._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:r})}}/**
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
 */function DR(r){r=_r(r,mt);const e=_r(r.firestore,jo);return lR(Cf(e),r._key).then(t=>MR(e,r,t))}To._jsonSchemaVersion="firestore/querySnapshot/1.0",To._jsonSchema={type:Et("string",To._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};class tE extends kR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}function VR(r){r=_r(r,Uo);const e=_r(r.firestore,jo),t=Cf(e),s=new tE(e);return AR(r._query),uR(t,r._query).then(o=>new To(e,s,r,o))}function OR(r,e,t){r=_r(r,mt);const s=_r(r.firestore,jo),o=NR(r.converter,e,t);return Lf(s,[_R(Pf(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Xn.none())])}function LR(r,e,t,...s){r=_r(r,mt);const o=_r(r.firestore,jo),u=Pf(o);let h;return h=typeof(e=Dt(e))=="string"||e instanceof Tc?wR(u,"updateDoc",r._key,e,t,s):ER(u,"updateDoc",r._key,e),Lf(o,[h.toMutation(r._key,Xn.exists(!0))])}function bR(r){return Lf(_r(r.firestore,jo),[new cf(r._key,Xn.none())])}function Lf(r,e){return function(s,o){const u=new br;return s.asyncQueue.enqueueAndForget(async()=>Y1(await aR(s),o,u)),u.promise}(Cf(r),e)}function MR(r,e,t){const s=t.docs.get(e._key),o=new tE(r);return new gs(r,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}function FR(...r){return new kf("arrayUnion",r)}(function(e,t=!0){(function(o){Lo=o})(Do),Io(new ys("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new jo(new _S(s.getProvider("auth-internal")),new wS(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ie(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(_.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Ii(kg,Ng,e),Ii(kg,Ng,"esm2017")})();const UR=({message:r,type:e})=>{if(!r)return null;const t=e==="success"?"bg-green-100":"bg-red-100",s=e==="success"?"text-green-700":"text-red-700";return Q.jsx("div",{className:`p-3 rounded-md ${t} ${s} my-4 message-box-fade show`,children:r})},jR=({isOpen:r,message:e,onConfirm:t,onCancel:s})=>r?Q.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:Q.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-xl max-w-sm w-full space-y-4",children:[Q.jsx("p",{className:"text-lg font-semibold text-gray-800",children:e}),Q.jsxs("div",{className:"flex justify-end space-x-3",children:[Q.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105",children:"Cancel"}),Q.jsx("button",{onClick:t,className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 transform hover:scale-105",children:"Confirm"})]})]})}):null,zR=()=>{const{db:r,auth:e,userId:t,appId:s,loadingFirebase:o,message:u,showAdminMessage:h,collection:m,doc:g,getDoc:_,getDocs:w,setDoc:R,updateDoc:C,deleteDoc:j,query:q,where:J,arrayUnion:H}=Be.useContext(nE);console.log("AdminPanel: CONTEXT ON RENDER:",{db:r,auth:e,userId:t,appId:s,loadingFirebase:o,message:u,showAdminMessage:h});const[fe,ce]=Be.useState("hospitals"),[ge,Se]=Be.useState([]),[qe,Re]=Be.useState([]),[D,T]=Be.useState([]),[S,k]=Be.useState(null),[N,O]=Be.useState(null),[A,_e]=Be.useState(!1),[At,He]=Be.useState(!1),[We,X]=Be.useState(null),[me,ne]=Be.useState(""),[V,B]=Be.useState(""),[te,ke]=Be.useState(!1),[Ne,Ve]=Be.useState(!1),[be,je]=Be.useState(""),[Ge,ct]=Be.useState(""),vn=Be.useCallback(async(re,ae)=>{if(console.log("checkAdminStatus CALLED:",{uidToCheck:re,dbInstanceReady:!!ae,appIdReady:!!s}),!ae||!s||!re)return console.warn("[AdminAuthCheck] Firebase not ready or UID missing for admin check."),h("Firebase database not ready for admin check or user ID missing.","error"),!1;try{const Y=g(ae,`artifacts/${s}/admins`,re);console.log("Attempting Firestore read for admin status at path:",Y.path);const pe=await _(Y);return console.log("Admin Doc Snap Exists:",pe.exists(),"Admin Doc Data:",pe.data()),pe.exists()}catch(Y){return console.error("[AdminStatus] Error during admin status check:",Y),h(`Error verifying admin status: ${Y.message}.`,"error"),!1}},[s,g,_,h]),un=Be.useCallback(async re=>{if(!(!r||!s||!re)){_e(!0);try{const ae=m(r,`artifacts/${s}/public/data/hospitals`),pe=(await w(ae)).docs.map(we=>({id:we.id,...we.data()}));Se(pe),h("Hospitals loaded successfully!","success")}catch(ae){console.error("Error fetching hospitals from Firestore:",ae),h(`Error loading hospitals: ${ae.message}`,"error")}finally{_e(!1)}}},[r,s,m,w,h]);Be.useEffect(()=>{e&&r&&t&&o===!1?(console.log("AdminPanel useEffect: Triggering checkAdminStatus for UID:",t),vn(t,r).then(re=>{ke(re),re?un(re):(Se([]),Re([]),T([]),k(null),O(null),ce("hospitals"),h("Access Denied: Your account is not authorized as an administrator.","error"))})):!e||!r||o===!0?console.log("AdminPanel useEffect: Firebase still loading or not ready (auth:",!!e,"db:",!!r,"loadingFirebase:",o,")"):!t&&o===!1&&(ke(!1),_e(!1),Se([]),Re([]),T([]),k(null),O(null),ce("hospitals"),h("Please log in to access the Admin Panel.","info"))},[e,r,t,o,vn,un,h]);const cn=Be.useCallback(async re=>{if(!r||!s||!te){h("Authorization required to fetch doctors. Please login.","error");return}_e(!0);try{const ae=m(r,`artifacts/${s}/public/data/hospitals/${re}/doctors`),pe=(await w(ae)).docs.map(we=>({id:we.id,...we.data()}));Re(pe),h(`Doctors for ${(S==null?void 0:S.name)||"selected hospital"} loaded successfully!`,"success")}catch(ae){console.error("Error fetching doctors:",ae),h(`Error loading doctors: ${ae.message}`,"error")}finally{_e(!1)}},[r,s,m,w,te,S,h]),xn=Be.useCallback(async(re,ae)=>{if(!r||!s||!te){h("Authorization required to fetch reviews. Please login.","error");return}_e(!0);try{const Y=g(r,`artifacts/${s}/public/data/hospitals/${re}/doctors`,ae),pe=await _(Y);if(pe.exists()){const et=(pe.data().ratings||[]).map(Rt=>({...Rt,comments:Rt.comments||[]}));T(et),h(`Reviews for ${(N==null?void 0:N.name)||"selected doctor"} loaded successfully!`,"success")}else T([]),h("Doctor not found, no reviews to display.","error")}catch(Y){console.error("Error fetching reviews:",Y),h(`Error loading reviews: ${Y.message}`,"error")}finally{_e(!1)}},[r,s,g,_,te,N,h]),Br=async re=>{if(re.preventDefault(),!r||!s||!te){h("Not authorized. Please login.","error");return}const ae=re.target,Y=ae.name.value.trim(),pe=ae.location.value.trim();if(!Y||!pe){h("Please fill all fields for hospital.","error");return}_e(!0);try{const we=g(m(r,`artifacts/${s}/public/data/hospitals`));await R(we,{name:Y,location:pe});const et=g(m(r,`artifacts/${s}/public/data/hospitals/${we.id}/doctors`),"dummy_placeholder");await R(et,{_placeholder:!0}),await j(et),h("Hospital added successfully!","success"),ae.reset(),un(!0)}catch(we){console.error("Error adding hospital:",we),h(`Error adding hospital: ${we.message}.`,"error")}finally{_e(!1)}},Fi=async(re,ae,Y)=>{if(!r||!s||!te){h("Not authorized. Please login.","error");return}_e(!0);try{const pe=g(r,`artifacts/${s}/public/data/hospitals`,re);await C(pe,{name:ae.trim(),location:Y.trim()}),h("Hospital updated successfully!","success"),un(!0)}catch(pe){console.error("Error updating hospital:",pe),h(`Error updating hospital: ${pe.message}.`,"error")}finally{_e(!1)}},Ui=re=>{He(!0),X(()=>async()=>{if(!r||!s||!te){h("Not authorized. Please login.","error");return}_e(!0);try{const ae=await w(m(r,`artifacts/${s}/public/data/hospitals/${re}/doctors`));for(const pe of ae.docs)await j(pe.ref);const Y=g(r,`artifacts/${s}/public/data/hospitals`,re);await j(Y),h("Hospital and its doctors deleted successfully!","success"),un(!0)}catch(ae){console.error("Error deleting hospital:",ae),h(`Error deleting hospital: ${ae.message}.`,"error")}finally{_e(!1),He(!1),X(null)}})},Ss=()=>{He(!0),X(()=>async()=>{if(!r||!s||!te){h("Not authorized. Please login.","error");return}_e(!0);try{const re=m(r,`artifacts/${s}/public/data/hospitals`),ae=await w(re),Y=new Map,pe=[];for(const we of ae.docs){const et=we.data(),Rt=`${et.name.toLowerCase()}|${et.location.toLowerCase()}`;Y.has(Rt)?pe.push({id:we.id,ref:we.ref}):Y.set(Rt,{id:we.id,ref:we.ref})}if(pe.length===0)h("No duplicate hospitals found.","success");else{h(`Found ${pe.length} duplicate hospitals. Deleting...`,"info");for(const we of pe)try{const et=m(r,`artifacts/${s}/public/data/hospitals/${we.id}/doctors`),Rt=await w(et);for(const Bi of Rt.docs)await j(Bi.ref);await j(we.ref)}catch(et){console.error(`Error deleting duplicate hospital ${we.id}:`,et),h(`Partial success: Could not delete all duplicates. Error with ${we.id}: ${et.message}`,"error")}h("Duplicate hospitals and their associated doctors/reviews deleted successfully!","success")}un(!0)}catch(re){console.error("Error identifying/deleting duplicate hospitals:",re),h(`Error processing duplicates: ${re.message}`,"error")}finally{_e(!1),He(!1),X(null)}})},$r=async re=>{if(re.preventDefault(),!r||!s||!S||!te){h("Not authorized or hospital not selected.","error");return}const ae=re.target,Y=ae.name.value.trim(),pe=ae.specialty.value.trim();if(!Y||!pe){h("Please fill all fields for doctor.","error");return}_e(!0);try{const we=g(m(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`));await R(we,{name:Y,specialty:pe,ratings:[]}),h("Doctor added successfully!","success"),ae.reset(),cn(S.id)}catch(we){console.error("Error adding doctor:",we),h(`Error adding doctor: ${we.message}.`,"error")}finally{_e(!1)}},Dn=async(re,ae,Y)=>{if(!r||!s||!S||!te){h("Not authorized or hospital not selected.","error");return}_e(!0);try{const pe=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,re);await C(pe,{name:ae.trim(),specialty:Y.trim()}),h("Doctor updated successfully!","success"),cn(S.id)}catch(pe){console.error("Error updating doctor:",pe),h(`Error updating doctor: ${pe.message}.`,"error")}finally{_e(!1)}},Vn=re=>{He(!0),X(()=>async()=>{if(!r||!s||!S||!te){h("Not authorized or hospital not selected.","error");return}_e(!0);try{const ae=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,re);await j(ae),h("Doctor deleted successfully!","success"),cn(S.id)}catch(ae){console.error("Error deleting doctor:",ae),h(`Error deleting doctor: ${ae.message}.`,"error")}finally{_e(!1),He(!1),X(null)}})},ji=re=>{He(!0),X(()=>async()=>{if(!r||!s||!S||!N||!te){h("Not authorized or doctor/hospital not selected.","error");return}_e(!0);try{const ae=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,N.id),Y=D.filter((pe,we)=>we!==re);await C(ae,{ratings:Y}),h("Review deleted successfully!","success"),xn(S.id,N.id)}catch(ae){console.error("Error deleting review:",ae),h(`Error deleting review: ${ae.message}.`,"error")}finally{_e(!1),He(!1),X(null)}})},Hr=(re,ae)=>{He(!0),X(()=>async()=>{if(!r||!s||!S||!N||!te){h("Not authorized or doctor/hospital not selected.","error"),He(!1),X(null);return}_e(!0);try{const Y=g(r,`artifacts/${s}/public/data/hospitals/${S.id}/doctors`,N.id),pe=await _(Y);if(!pe||!pe.exists()){h("Doctor not found or data is invalid. Cannot delete comment.","error"),_e(!1),He(!1),X(null);return}const et=pe.data().ratings||[],Rt=JSON.parse(JSON.stringify(et));if(Rt[re]&&Rt[re].comments)Rt[re].comments.splice(ae,1);else{h("Review or comment not found.","error"),_e(!1),He(!1),X(null);return}await C(Y,{ratings:Rt}),h("Comment deleted successfully!","success"),xn(S.id,N.id)}catch(Y){console.error("Error deleting comment:",Y),h(`Error deleting comment: ${Y.message}.`,"error")}finally{_e(!1),He(!1),X(null)}})},qr=async re=>{re.preventDefault(),_e(!0),h("","");try{if(e){const Y=(await ZT(e,me,V)).user.uid;console.log("Login Attempt: Successfully signed in user with UID:",Y)}else throw new Error("Firebase Auth instance not available. Cannot log in.");h("Authenticating...","info")}catch(ae){console.error("Login error:",ae);let Y="Login failed. Please check your credentials.";ae.code==="auth/user-not-found"||ae.code==="auth/wrong-password"?Y="Invalid email or password.":ae.code==="auth/invalid-email"?Y="Invalid email format.":ae.code==="auth/network-request-failed"?Y="Network error. Check your internet connection.":ae.code==="auth/api-key-not-valid"&&(Y="Login failed. Your Firebase API key is not valid or not configured for Authentication."),h(Y,"error"),_e(!1)}},zi=async()=>{if(e){_e(!0);try{await rI(e),h("Logged out successfully!","success"),Se([]),Re([]),T([]),k(null),O(null),ce("hospitals"),ne(""),B(""),ke(!1)}catch(re){console.error("Logout error:",re),h(`Logout failed: ${re.message}`,"error")}finally{_e(!1)}}},ht=()=>{if(o||A)return Q.jsx("p",{className:"text-center text-gray-500 py-8",children:"Loading application..."});if(!te)return Q.jsxs("div",{className:"text-center py-8",children:[Q.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Admin Login"}),Q.jsxs("form",{onSubmit:qr,className:"max-w-sm mx-auto space-y-4",children:[Q.jsx("input",{type:"email",placeholder:"Admin Email",value:me,onChange:re=>ne(re.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("input",{type:"password",placeholder:"Admin Password",value:V,onChange:re=>B(re.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("button",{type:"submit",className:"w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200",children:"Login"})]})]});switch(fe){case"hospitals":const re=ge.filter(Y=>Y.name.toLowerCase().includes(be.toLowerCase())||Y.location.toLowerCase().includes(be.toLowerCase()));return Q.jsxs("div",{children:[Q.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 mb-4 border-b pb-3",children:["Hospitals (",ge.length," Total)"]}),Q.jsx("div",{className:"mb-4",children:Q.jsx("input",{type:"text",placeholder:"Search hospitals by name or location...",value:be,onChange:Y=>je(Y.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 shadow-sm"})}),Q.jsxs("div",{className:"mb-6",children:[Q.jsxs("button",{onClick:()=>Ve(!Ne),className:"w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md",children:[Ne?"Collapse Add Hospital Form":"Add New Hospital",Q.jsx("svg",{className:`w-5 h-5 transition-transform duration-300 ${Ne?"rotate-180":"rotate-0"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),Ne&&Q.jsxs("form",{onSubmit:Br,className:"space-y-4 mt-4 p-4 border border-gray-200 rounded-md bg-gray-50",children:[Q.jsx("input",{type:"text",name:"name",placeholder:"Hospital Name",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("input",{type:"text",name:"location",placeholder:"Location (e.g., Boston, MA)",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("button",{type:"submit",className:"w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200",children:"Add Hospital"})]})]}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Existing Hospitals"}),Q.jsx("button",{onClick:Ss,className:"mb-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 transform hover:scale-105",children:"Remove Duplicate Hospitals"}),re.length===0?Q.jsx("p",{className:"text-gray-500",children:"No hospitals found matching your search or none added yet."}):Q.jsx("div",{className:"space-y-3",children:re.map(Y=>Q.jsxs("div",{className:"bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm flex justify-between items-center",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"font-semibold",children:Y.name}),Q.jsx("p",{className:"text-sm",children:Y.location})]}),Q.jsxs("div",{className:"flex space-x-2",children:[Q.jsx("button",{onClick:()=>{k(Y),ce("doctors"),cn(Y.id)},className:"px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors",children:"Manage Doctors"}),Q.jsx("button",{onClick:()=>{const pe=prompt("Enter new hospital name:",Y.name),we=prompt("Enter new hospital location:",Y.location);pe!==null&&we!==null&&Fi(Y.id,pe,we)},className:"px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition-colors",children:"Edit"}),Q.jsx("button",{onClick:()=>Ui(Y.id),className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors",children:"Delete"})]})]},Y.id))})]});case"doctors":const ae=qe.filter(Y=>Y.name.toLowerCase().includes(Ge.toLowerCase())||Y.specialty.toLowerCase().includes(Ge.toLowerCase()));return Q.jsxs("div",{children:[Q.jsx("button",{onClick:()=>{ce("hospitals"),k(null),Re([]),ct("")},className:"mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105",children:"← Back to Hospitals"}),Q.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 mb-4 border-b pb-3",children:["Doctors at ",S==null?void 0:S.name," (",qe.length," Total)"]}),Q.jsx("div",{className:"mb-4",children:Q.jsx("input",{type:"text",placeholder:"Search doctors by name or specialty...",value:Ge,onChange:Y=>ct(Y.target.value),className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 shadow-sm"})}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Add New Doctor"}),Q.jsxs("form",{onSubmit:$r,className:"space-y-4 mb-8",children:[Q.jsx("input",{type:"text",name:"name",placeholder:"Doctor Name",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("input",{type:"text",name:"specialty",placeholder:"Specialty (e.g., Cardiologist)",className:"w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500",required:!0}),Q.jsx("button",{type:"submit",className:"w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200",children:"Add Doctor"})]}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Existing Doctors"}),ae.length===0?Q.jsx("p",{className:"text-gray-500",children:"No doctors found matching your search or none added for this hospital yet."}):Q.jsx("div",{className:"space-y-3",children:ae.map(Y=>Q.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"font-semibold text-gray-800",children:Y.name}),Q.jsx("p",{className:"text-sm text-gray-600",children:Y.specialty}),Q.jsx("p",{className:"text-xs text-gray-500",children:Y.ratings&&Y.ratings.length>0?`${Y.ratings.length} reviews`:"No reviews"})]}),Q.jsxs("div",{className:"flex space-x-2",children:[Q.jsx("button",{onClick:()=>{O(Y),ce("reviews"),xn(S.id,Y.id)},className:"px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors",children:"Manage Reviews"}),Q.jsx("button",{onClick:()=>{const pe=prompt("Enter new doctor name:",Y.name),we=prompt("Enter new doctor specialty:",Y.specialty);pe!==null&&we!==null&&Dn(Y.id,pe,we)},className:"px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition-colors",children:"Edit"}),Q.jsx("button",{onClick:()=>Vn(Y.id),className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors",children:"Delete"})]})]},Y.id))})]});case"reviews":return Q.jsxs("div",{children:[Q.jsx("button",{onClick:()=>{ce("doctors"),O(null),T([])},className:"mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105",children:"← Back to Doctors"}),Q.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 mb-4 border-b pb-3",children:["Reviews for ",N==null?void 0:N.name]}),Q.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-4 border-b pb-2",children:"Existing Reviews"}),D.length===0?Q.jsx("p",{className:"text-gray-500",children:"No reviews found for this doctor."}):Q.jsx("div",{className:"space-y-3",children:D.map((Y,pe)=>Q.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col justify-between items-start",children:[Q.jsxs("div",{className:"w-full flex justify-between items-start",children:[Q.jsxs("div",{children:[Q.jsxs("p",{className:"font-semibold text-gray-800",children:["Rating: ",Y.stars," stars"]}),Q.jsxs("p",{className:"text-sm text-gray-600 italic",children:['"',Y.comment||"No comment provided",'"']}),Q.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Date: ",Y.date||"N/A"," (Reviewer: ",Y.reviewerId||"Unknown",")",Y.comments&&Y.comments.length>0&&Q.jsxs("span",{className:"ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full",children:[Y.comments.length," Comment",Y.comments.length>1?"s":""]})]})]}),Q.jsx("button",{onClick:()=>ji(pe),className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors ml-4",children:"Delete Review"})]}),Y.comments&&Y.comments.length>0&&Q.jsxs("div",{className:"w-full mt-4 pt-4 border-t border-gray-200 space-y-2",children:[Q.jsx("p",{className:"font-semibold text-gray-700 text-sm",children:"Comments:"}),Y.comments.map((we,et)=>Q.jsxs("div",{className:"bg-gray-100 p-3 rounded-md flex justify-between items-start text-sm",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"text-gray-800",children:we.text}),Q.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Date: ",we.date||"N/A"," (Commenter: ",we.userId||"Unknown",")"]})]}),Q.jsx("button",{onClick:()=>Hr(pe,et),className:"px-2 py-1 bg-red-400 text-white text-xs rounded-md hover:bg-red-500 transition-colors ml-4",children:"Remove"})]},we.date+et))]})]},pe))})]});default:return Q.jsx("p",{className:"text-center text-gray-500 py-8",children:"Select a section from the navigation."})}};return Q.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-100",children:[Q.jsx("header",{className:"bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-4 shadow-lg",children:Q.jsxs("div",{className:"container flex items-center justify-between",children:[Q.jsx("h1",{className:"text-3xl font-bold rounded-lg px-3 py-1 bg-white text-purple-800 shadow-md",children:"RNTea Admin"}),te&&Q.jsx("button",{onClick:zi,className:"px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors",children:"Logout"})]})}),Q.jsx("main",{className:"flex-grow container py-8",children:Q.jsx("div",{className:"bg-white p-6 rounded-lg shadow-xl",children:ht()})}),Q.jsx(jR,{isOpen:At,message:"Are you sure you want to delete this item? This action cannot be undone.",onConfirm:()=>We(),onCancel:()=>{He(!1),X(null)}})]})},nE=Be.createContext(null),BR=typeof __firebase_config<"u"?JSON.parse(__firebase_config):null;const Py=typeof __app_id<"u"?__app_id:null;function $R(){const[r,e]=Be.useState(null),[t,s]=Be.useState(null),[o,u]=Be.useState(null),[h,m]=Be.useState(null),[g,_]=Be.useState(!1),[w,R]=Be.useState(!0),[C,j]=Be.useState({text:"",type:""}),q=Be.useCallback((H,fe)=>{j({text:H,type:fe}),setTimeout(()=>j({text:"",type:""}),5e3)},[]);Be.useEffect(()=>{(async()=>{try{let fe=BR;if(fe||(fe={apiKey:"AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g",authDomain:"rntea-cca78.firebaseapp.com",projectId:"rntea-cca78",storageBucket:"rntea-cca78.appspot.com",messagingSenderId:"806310857835",appId:"1:806310857835:web:b03b05847c818ee4fe352e",measurementId:"G-2T697CLRX9"}),!fe.apiKey||!fe.projectId||!fe.appId)throw new Error("Firebase configuration is incomplete. Check environment variables or Canvas setup.");const ce=zy(fe),ge=pS(ce),Se=fR(ce);e(ce),u(ge),s(Se);const qe=nI(ge,async Re=>{Re?m(Re.uid):(m(null),q("Please log in to access the Admin Panel.","info")),_(!0),R(!1)});return ge.currentUser||R(!1),()=>{qe&&qe()}}catch(fe){console.error("Firebase Initialization Error for Admin App:",fe),q(`FATAL ERROR: Failed to initialize Firebase for admin: ${fe.message}. Please check console.`,"error"),R(!1),_(!1)}})()},[]);const J=Be.useMemo(()=>({app:r,db:t,auth:o,userId:h,authReady:g,appId:Py||"rntea-cca78",loadingFirebase:w,message:C,showAdminMessage:q,collection:hR,doc:dR,getDoc:DR,getDocs:VR,setDoc:OR,updateDoc:LR,deleteDoc:bR,query:CR,where:PR,arrayUnion:FR}),[r,t,o,h,g,w,C,q,Py]);return Q.jsxs(nE.Provider,{value:J,children:[Q.jsx(UR,{message:C.text,type:C.type}),w?Q.jsx("p",{className:"text-center text-gray-500 py-8",children:"Initializing Admin Application and Firebase..."}):Q.jsx(zR,{})]})}const ky=document.getElementById("admin-root");ky?gw.createRoot(ky).render(Q.jsx(uw.StrictMode,{children:Q.jsx($R,{})})):console.error("admin.jsx: ERROR - Admin root element not found in DOM. Cannot mount Admin App.");
