(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const S of m.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&r(S)}).observe(document,{childList:!0,subtree:!0});function s(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=s(d);fetch(d.href,m)}})();var Cr={exports:{}},Cn={};var em;function og(){if(em)return Cn;em=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(r,d,m){var S=null;if(m!==void 0&&(S=""+m),d.key!==void 0&&(S=""+d.key),"key"in d){m={};for(var _ in d)_!=="key"&&(m[_]=d[_])}else m=d;return d=m.ref,{$$typeof:c,type:r,key:S,ref:d!==void 0?d:null,props:m}}return Cn.Fragment=o,Cn.jsx=s,Cn.jsxs=s,Cn}var tm;function sg(){return tm||(tm=1,Cr.exports=og()),Cr.exports}var p=sg(),Dr={exports:{}},P={};var lm;function dg(){if(lm)return P;lm=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),S=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function Q(y){return y===null||typeof y!="object"?null:(y=w&&y[w]||y["@@iterator"],typeof y=="function"?y:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,H={};function $(y,U,q){this.props=y,this.context=U,this.refs=H,this.updater=q||G}$.prototype.isReactComponent={},$.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},$.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function Z(){}Z.prototype=$.prototype;function L(y,U,q){this.props=y,this.context=U,this.refs=H,this.updater=q||G}var ie=L.prototype=new Z;ie.constructor=L,Y(ie,$.prototype),ie.isPureReactComponent=!0;var K=Array.isArray;function oe(){}var I={H:null,A:null,T:null,S:null},Ne=Object.prototype.hasOwnProperty;function ke(y,U,q){var V=q.ref;return{$$typeof:c,type:y,key:U,ref:V!==void 0?V:null,props:q}}function Dt(y,U){return ke(y.type,U,y.props)}function ht(y){return typeof y=="object"&&y!==null&&y.$$typeof===c}function Ke(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(q){return U[q]})}var jt=/\/+/g;function gt(y,U){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):U.toString(36)}function je(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(oe,oe):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function C(y,U,q,V,ee){var ae=typeof y;(ae==="undefined"||ae==="boolean")&&(y=null);var he=!1;if(y===null)he=!0;else switch(ae){case"bigint":case"string":case"number":he=!0;break;case"object":switch(y.$$typeof){case c:case o:he=!0;break;case N:return he=y._init,C(he(y._payload),U,q,V,ee)}}if(he)return ee=ee(y),he=V===""?"."+gt(y,0):V,K(ee)?(q="",he!=null&&(q=he.replace(jt,"$&/")+"/"),C(ee,U,q,"",function(Ba){return Ba})):ee!=null&&(ht(ee)&&(ee=Dt(ee,q+(ee.key==null||y&&y.key===ee.key?"":(""+ee.key).replace(jt,"$&/")+"/")+he)),U.push(ee)),1;he=0;var $e=V===""?".":V+":";if(K(y))for(var Me=0;Me<y.length;Me++)V=y[Me],ae=$e+gt(V,Me),he+=C(V,U,q,ae,ee);else if(Me=Q(y),typeof Me=="function")for(y=Me.call(y),Me=0;!(V=y.next()).done;)V=V.value,ae=$e+gt(V,Me++),he+=C(V,U,q,ae,ee);else if(ae==="object"){if(typeof y.then=="function")return C(je(y),U,q,V,ee);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return he}function B(y,U,q){if(y==null)return y;var V=[],ee=0;return C(y,V,"","",function(ae){return U.call(q,ae,ee++)}),V}function F(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(q){(y._status===0||y._status===-1)&&(y._status=1,y._result=q)},function(q){(y._status===0||y._status===-1)&&(y._status=2,y._result=q)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var ve=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},Se={map:B,forEach:function(y,U,q){B(y,function(){U.apply(this,arguments)},q)},count:function(y){var U=0;return B(y,function(){U++}),U},toArray:function(y){return B(y,function(U){return U})||[]},only:function(y){if(!ht(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return P.Activity=x,P.Children=Se,P.Component=$,P.Fragment=s,P.Profiler=d,P.PureComponent=L,P.StrictMode=r,P.Suspense=b,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(y){return I.H.useMemoCache(y)}},P.cache=function(y){return function(){return y.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(y,U,q){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var V=Y({},y.props),ee=y.key;if(U!=null)for(ae in U.key!==void 0&&(ee=""+U.key),U)!Ne.call(U,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&U.ref===void 0||(V[ae]=U[ae]);var ae=arguments.length-2;if(ae===1)V.children=q;else if(1<ae){for(var he=Array(ae),$e=0;$e<ae;$e++)he[$e]=arguments[$e+2];V.children=he}return ke(y.type,ee,V)},P.createContext=function(y){return y={$$typeof:S,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:m,_context:y},y},P.createElement=function(y,U,q){var V,ee={},ae=null;if(U!=null)for(V in U.key!==void 0&&(ae=""+U.key),U)Ne.call(U,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=U[V]);var he=arguments.length-2;if(he===1)ee.children=q;else if(1<he){for(var $e=Array(he),Me=0;Me<he;Me++)$e[Me]=arguments[Me+2];ee.children=$e}if(y&&y.defaultProps)for(V in he=y.defaultProps,he)ee[V]===void 0&&(ee[V]=he[V]);return ke(y,ae,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(y){return{$$typeof:_,render:y}},P.isValidElement=ht,P.lazy=function(y){return{$$typeof:N,_payload:{_status:-1,_result:y},_init:F}},P.memo=function(y,U){return{$$typeof:g,type:y,compare:U===void 0?null:U}},P.startTransition=function(y){var U=I.T,q={};I.T=q;try{var V=y(),ee=I.S;ee!==null&&ee(q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(oe,ve)}catch(ae){ve(ae)}finally{U!==null&&q.types!==null&&(U.types=q.types),I.T=U}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(y){return I.H.use(y)},P.useActionState=function(y,U,q){return I.H.useActionState(y,U,q)},P.useCallback=function(y,U){return I.H.useCallback(y,U)},P.useContext=function(y){return I.H.useContext(y)},P.useDebugValue=function(){},P.useDeferredValue=function(y,U){return I.H.useDeferredValue(y,U)},P.useEffect=function(y,U){return I.H.useEffect(y,U)},P.useEffectEvent=function(y){return I.H.useEffectEvent(y)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(y,U,q){return I.H.useImperativeHandle(y,U,q)},P.useInsertionEffect=function(y,U){return I.H.useInsertionEffect(y,U)},P.useLayoutEffect=function(y,U){return I.H.useLayoutEffect(y,U)},P.useMemo=function(y,U){return I.H.useMemo(y,U)},P.useOptimistic=function(y,U){return I.H.useOptimistic(y,U)},P.useReducer=function(y,U,q){return I.H.useReducer(y,U,q)},P.useRef=function(y){return I.H.useRef(y)},P.useState=function(y){return I.H.useState(y)},P.useSyncExternalStore=function(y,U,q){return I.H.useSyncExternalStore(y,U,q)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.4",P}var am;function Qr(){return am||(am=1,Dr.exports=dg()),Dr.exports}var T=Qr(),jr={exports:{}},Dn={},Ur={exports:{}},wr={};var nm;function mg(){return nm||(nm=1,(function(c){function o(C,B){var F=C.length;C.push(B);e:for(;0<F;){var ve=F-1>>>1,Se=C[ve];if(0<d(Se,B))C[ve]=B,C[F]=Se,F=ve;else break e}}function s(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var B=C[0],F=C.pop();if(F!==B){C[0]=F;e:for(var ve=0,Se=C.length,y=Se>>>1;ve<y;){var U=2*(ve+1)-1,q=C[U],V=U+1,ee=C[V];if(0>d(q,F))V<Se&&0>d(ee,q)?(C[ve]=ee,C[V]=F,ve=V):(C[ve]=q,C[U]=F,ve=U);else if(V<Se&&0>d(ee,F))C[ve]=ee,C[V]=F,ve=V;else break e}}return B}function d(C,B){var F=C.sortIndex-B.sortIndex;return F!==0?F:C.id-B.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;c.unstable_now=function(){return m.now()}}else{var S=Date,_=S.now();c.unstable_now=function(){return S.now()-_}}var b=[],g=[],N=1,x=null,w=3,Q=!1,G=!1,Y=!1,H=!1,$=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function ie(C){for(var B=s(g);B!==null;){if(B.callback===null)r(g);else if(B.startTime<=C)r(g),B.sortIndex=B.expirationTime,o(b,B);else break;B=s(g)}}function K(C){if(Y=!1,ie(C),!G)if(s(b)!==null)G=!0,oe||(oe=!0,Ke());else{var B=s(g);B!==null&&je(K,B.startTime-C)}}var oe=!1,I=-1,Ne=5,ke=-1;function Dt(){return H?!0:!(c.unstable_now()-ke<Ne)}function ht(){if(H=!1,oe){var C=c.unstable_now();ke=C;var B=!0;try{e:{G=!1,Y&&(Y=!1,Z(I),I=-1),Q=!0;var F=w;try{t:{for(ie(C),x=s(b);x!==null&&!(x.expirationTime>C&&Dt());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,w=x.priorityLevel;var Se=ve(x.expirationTime<=C);if(C=c.unstable_now(),typeof Se=="function"){x.callback=Se,ie(C),B=!0;break t}x===s(b)&&r(b),ie(C)}else r(b);x=s(b)}if(x!==null)B=!0;else{var y=s(g);y!==null&&je(K,y.startTime-C),B=!1}}break e}finally{x=null,w=F,Q=!1}B=void 0}}finally{B?Ke():oe=!1}}}var Ke;if(typeof L=="function")Ke=function(){L(ht)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,gt=jt.port2;jt.port1.onmessage=ht,Ke=function(){gt.postMessage(null)}}else Ke=function(){$(ht,0)};function je(C,B){I=$(function(){C(c.unstable_now())},B)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(C){C.callback=null},c.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<C?Math.floor(1e3/C):5},c.unstable_getCurrentPriorityLevel=function(){return w},c.unstable_next=function(C){switch(w){case 1:case 2:case 3:var B=3;break;default:B=w}var F=w;w=B;try{return C()}finally{w=F}},c.unstable_requestPaint=function(){H=!0},c.unstable_runWithPriority=function(C,B){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=w;w=C;try{return B()}finally{w=F}},c.unstable_scheduleCallback=function(C,B,F){var ve=c.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,C){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=F+Se,C={id:N++,callback:B,priorityLevel:C,startTime:F,expirationTime:Se,sortIndex:-1},F>ve?(C.sortIndex=F,o(g,C),s(b)===null&&C===s(g)&&(Y?(Z(I),I=-1):Y=!0,je(K,F-ve))):(C.sortIndex=Se,o(b,C),G||Q||(G=!0,oe||(oe=!0,Ke()))),C},c.unstable_shouldYield=Dt,c.unstable_wrapCallback=function(C){var B=w;return function(){var F=w;w=B;try{return C.apply(this,arguments)}finally{w=F}}}})(wr)),wr}var um;function hg(){return um||(um=1,Ur.exports=mg()),Ur.exports}var Hr={exports:{}},Je={};var im;function gg(){if(im)return Je;im=1;var c=Qr();function o(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)g+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,g,N){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:b,containerInfo:g,implementation:N}}var S=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Je.createPortal=function(b,g){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return m(b,g,null,N)},Je.flushSync=function(b){var g=S.T,N=r.p;try{if(S.T=null,r.p=2,b)return b()}finally{S.T=g,r.p=N,r.d.f()}},Je.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(b,g))},Je.prefetchDNS=function(b){typeof b=="string"&&r.d.D(b)},Je.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var N=g.as,x=_(N,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,Q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;N==="style"?r.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:Q}):N==="script"&&r.d.X(b,{crossOrigin:x,integrity:w,fetchPriority:Q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Je.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var N=_(g.as,g.crossOrigin);r.d.M(b,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(b)},Je.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var N=g.as,x=_(N,g.crossOrigin);r.d.L(b,N,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Je.preloadModule=function(b,g){if(typeof b=="string")if(g){var N=_(g.as,g.crossOrigin);r.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(b)},Je.requestFormReset=function(b){r.d.r(b)},Je.unstable_batchedUpdates=function(b,g){return b(g)},Je.useFormState=function(b,g,N){return S.H.useFormState(b,g,N)},Je.useFormStatus=function(){return S.H.useHostTransitionStatus()},Je.version="19.2.4",Je}var cm;function pg(){if(cm)return Hr.exports;cm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),Hr.exports=gg(),Hr.exports}var rm;function vg(){if(rm)return Dn;rm=1;var c=hg(),o=Qr(),s=pg();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return b(n),e;if(u===a)return b(n),t;u=u.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,f=n.child;f;){if(f===l){i=!0,l=n,a=u;break}if(f===a){i=!0,a=n,l=u;break}f=f.sibling}if(!i){for(f=u.child;f;){if(f===l){i=!0,l=u,a=n;break}if(f===a){i=!0,a=u,l=n;break}f=f.sibling}if(!i)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),ke=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var jt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===jt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case $:return"Profiler";case H:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList";case ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case L:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:gt(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return gt(e(t))}catch{}}return null}var je=Array.isArray,C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],Se=-1;function y(e){return{current:e}}function U(e){0>Se||(e.current=ve[Se],ve[Se]=null,Se--)}function q(e,t){Se++,ve[Se]=e.current,e.current=t}var V=y(null),ee=y(null),ae=y(null),he=y(null);function $e(e,t){switch(q(ae,t),q(ee,e),q(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zd(t),e=Td(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(V),q(V,e)}function Me(){U(V),U(ee),U(ae)}function Ba(e){e.memoizedState!==null&&q(he,e);var t=V.current,l=Td(t,e.type);t!==l&&(q(ee,e),q(V,l))}function Gn(e){ee.current===e&&(U(V),U(ee)),he.current===e&&(U(he),_n._currentValue=F)}var mi,Fr;function Cl(e){if(mi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);mi=t&&t[1]||"",Fr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mi+e+Fr}var hi=!1;function gi(e,t){if(!e||hi)return"";hi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(O){var R=O}Reflect.construct(e,[],j)}else{try{j.call()}catch(O){R=O}e.call(j.prototype)}}else{try{throw Error()}catch(O){R=O}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(O){if(O&&R&&typeof O.stack=="string")return[O.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],f=u[1];if(i&&f){var h=i.split(`
`),A=f.split(`
`);for(n=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(a===h.length||n===A.length)for(a=h.length-1,n=A.length-1;1<=a&&0<=n&&h[a]!==A[n];)n--;for(;1<=a&&0<=n;a--,n--)if(h[a]!==A[n]){if(a!==1||n!==1)do if(a--,n--,0>n||h[a]!==A[n]){var M=`
`+h[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=n);break}}}finally{hi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Cl(l):""}function Gm(e,t){switch(e.tag){case 26:case 27:case 5:return Cl(e.type);case 16:return Cl("Lazy");case 13:return e.child!==t&&t!==null?Cl("Suspense Fallback"):Cl("Suspense");case 19:return Cl("SuspenseList");case 0:case 15:return gi(e.type,!1);case 11:return gi(e.type.render,!1);case 1:return gi(e.type,!0);case 31:return Cl("Activity");default:return""}}function Ir(e){try{var t="",l=null;do t+=Gm(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var pi=Object.prototype.hasOwnProperty,vi=c.unstable_scheduleCallback,yi=c.unstable_cancelCallback,Xm=c.unstable_shouldYield,Qm=c.unstable_requestPaint,nt=c.unstable_now,Zm=c.unstable_getCurrentPriorityLevel,Pr=c.unstable_ImmediatePriority,ef=c.unstable_UserBlockingPriority,Xn=c.unstable_NormalPriority,Vm=c.unstable_LowPriority,tf=c.unstable_IdlePriority,km=c.log,Km=c.unstable_setDisableYieldValue,qa=null,ut=null;function il(e){if(typeof km=="function"&&Km(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(qa,e)}catch{}}var it=Math.clz32?Math.clz32:Wm,Jm=Math.log,$m=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Jm(e)/$m|0)|0}var Qn=256,Zn=262144,Vn=4194304;function Dl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?n=Dl(a):(i&=f,i!==0?n=Dl(i):l||(l=f&~e,l!==0&&(n=Dl(l))))):(f=a&~u,f!==0?n=Dl(f):i!==0?n=Dl(i):l||(l=a&~e,l!==0&&(n=Dl(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(){var e=Vn;return Vn<<=1,(Vn&62914560)===0&&(Vn=4194304),e}function bi(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Im(e,t,l,a,n,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,h=e.expirationTimes,A=e.hiddenUpdates;for(l=i&~l;0<l;){var M=31-it(l),j=1<<M;f[M]=0,h[M]=-1;var R=A[M];if(R!==null)for(A[M]=null,M=0;M<R.length;M++){var O=R[M];O!==null&&(O.lane&=-536870913)}l&=~j}a!==0&&af(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function af(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function nf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-it(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function uf(e,t){var l=t&-t;return l=(l&42)!==0?1:xi(l),(l&(e.suspendedLanes|t))!==0?0:l}function xi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Si(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cf(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Kd(e.type))}function rf(e,t){var l=B.p;try{return B.p=e,t()}finally{B.p=l}}var cl=Math.random().toString(36).slice(2),Ge="__reactFiber$"+cl,Fe="__reactProps$"+cl,Fl="__reactContainer$"+cl,Ei="__reactEvents$"+cl,Pm="__reactListeners$"+cl,eh="__reactHandles$"+cl,ff="__reactResources$"+cl,Ga="__reactMarker$"+cl;function zi(e){delete e[Ge],delete e[Fe],delete e[Ei],delete e[Pm],delete e[eh]}function Il(e){var t=e[Ge];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Fl]||l[Ge]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Cd(e);e!==null;){if(l=e[Ge])return l;e=Cd(e)}return t}e=l,l=e.parentNode}return null}function Pl(e){if(e=e[Ge]||e[Fl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ea(e){var t=e[ff];return t||(t=e[ff]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Ga]=!0}var of=new Set,sf={};function jl(e,t){ta(e,t),ta(e+"Capture",t)}function ta(e,t){for(sf[e]=t,e=0;e<t.length;e++)of.add(t[e])}var th=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),df={},mf={};function lh(e){return pi.call(mf,e)?!0:pi.call(df,e)?!1:th.test(e)?mf[e]=!0:(df[e]=!0,!1)}function Kn(e,t,l){if(lh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Jn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Yt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ah(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){if(!e._valueTracker){var t=hf(e)?"checked":"value";e._valueTracker=ah(e,t,""+e[t])}}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=hf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function $n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nh=/[\n"\\]/g;function vt(e){return e.replace(nh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ai(e,t,l,a,n,u,i,f){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pt(t)):e.value!==""+pt(t)&&(e.value=""+pt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Ri(e,i,pt(t)):l!=null?Ri(e,i,pt(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+pt(f):e.removeAttribute("name")}function pf(e,t,l,a,n,u,i,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Ti(e);return}l=l!=null?""+pt(l):"",t=t!=null?""+pt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Ti(e)}function Ri(e,t,l){t==="number"&&$n(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function la(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+pt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function vf(e,t,l){if(t!=null&&(t=""+pt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+pt(l):""}function yf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(r(92));if(je(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=pt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Ti(e)}function aa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var uh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||uh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function xf(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&bf(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&bf(e,u,t[u])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ch=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(e){return ch.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Oi=null;function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ua=null;function Sf(e){var t=Pl(e);if(t&&(e=t.stateNode)){var l=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ai(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Fe]||null;if(!n)throw Error(r(90));Ai(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&gf(a)}break e;case"textarea":vf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&la(e,!!l.multiple,t,!1)}}}var Mi=!1;function Ef(e,t,l){if(Mi)return e(t,l);Mi=!0;try{var a=e(t);return a}finally{if(Mi=!1,(na!==null||ua!==null)&&(Bu(),na&&(t=na,e=ua,ua=na=null,Sf(t),e)))for(t=0;t<e.length;t++)Sf(e[t])}}function Qa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Fe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=!1;if(Xt)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Ci=!1}var rl=null,Di=null,Fn=null;function zf(){if(Fn)return Fn;var e,t=Di,l=t.length,a,n="value"in rl?rl.value:rl.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===n[u-a];a++);return Fn=n.slice(e,1<a?1-a:void 0)}function In(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Tf(){return!1}function Ie(e){function t(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Pn:Tf,this.isPropagationStopped=Tf,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Ie(Ul),Va=x({},Ul,{view:0,detail:0}),rh=Ie(Va),ji,Ui,ka,tu=x({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ka&&(ka&&e.type==="mousemove"?(ji=e.screenX-ka.screenX,Ui=e.screenY-ka.screenY):Ui=ji=0,ka=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),Af=Ie(tu),fh=x({},tu,{dataTransfer:0}),oh=Ie(fh),sh=x({},Va,{relatedTarget:0}),wi=Ie(sh),dh=x({},Ul,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=Ie(dh),hh=x({},Ul,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gh=Ie(hh),ph=x({},Ul,{data:0}),Rf=Ie(ph),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bh[e])?!!t[e]:!1}function Hi(){return xh}var Sh=x({},Va,{key:function(e){if(e.key){var t=vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eh=Ie(Sh),zh=x({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=Ie(zh),Th=x({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),Ah=Ie(Th),Rh=x({},Ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),_h=Ie(Rh),Oh=x({},tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=Ie(Oh),Mh=x({},Ul,{newState:0,oldState:0}),Ch=Ie(Mh),Dh=[9,13,27,32],Bi=Xt&&"CompositionEvent"in window,Ka=null;Xt&&"documentMode"in document&&(Ka=document.documentMode);var jh=Xt&&"TextEvent"in window&&!Ka,Of=Xt&&(!Bi||Ka&&8<Ka&&11>=Ka),Nf=" ",Mf=!1;function Cf(e,t){switch(e){case"keyup":return Dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ia=!1;function Uh(e,t){switch(e){case"compositionend":return Df(t);case"keypress":return t.which!==32?null:(Mf=!0,Nf);case"textInput":return e=t.data,e===Nf&&Mf?null:e;default:return null}}function wh(e,t){if(ia)return e==="compositionend"||!Bi&&Cf(e,t)?(e=zf(),Fn=Di=rl=null,ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Of&&t.locale!=="ko"?null:t.data;default:return null}}var Hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hh[e.type]:t==="textarea"}function Uf(e,t,l,a){na?ua?ua.push(a):ua=[a]:na=a,t=Zu(t,"onChange"),0<t.length&&(l=new eu("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ja=null,$a=null;function Bh(e){vd(e,0)}function lu(e){var t=Xa(e);if(gf(t))return e}function wf(e,t){if(e==="change")return t}var Hf=!1;if(Xt){var qi;if(Xt){var Li="oninput"in document;if(!Li){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),Li=typeof Bf.oninput=="function"}qi=Li}else qi=!1;Hf=qi&&(!document.documentMode||9<document.documentMode)}function qf(){Ja&&(Ja.detachEvent("onpropertychange",Lf),$a=Ja=null)}function Lf(e){if(e.propertyName==="value"&&lu($a)){var t=[];Uf(t,$a,e,Ni(e)),Ef(Bh,t)}}function qh(e,t,l){e==="focusin"?(qf(),Ja=t,$a=l,Ja.attachEvent("onpropertychange",Lf)):e==="focusout"&&qf()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lu($a)}function Yh(e,t){if(e==="click")return lu(t)}function Gh(e,t){if(e==="input"||e==="change")return lu(t)}function Xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Xh;function Wa(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!pi.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function Yf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gf(e,t){var l=Yf(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Yf(l)}}function Xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$n(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=$n(e.document)}return t}function Yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qh=Xt&&"documentMode"in document&&11>=document.documentMode,ca=null,Gi=null,Fa=null,Xi=!1;function Zf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Xi||ca==null||ca!==$n(a)||(a=ca,"selectionStart"in a&&Yi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fa&&Wa(Fa,a)||(Fa=a,a=Zu(Gi,"onSelect"),0<a.length&&(t=new eu("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ca)))}function wl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ra={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionrun:wl("Transition","TransitionRun"),transitionstart:wl("Transition","TransitionStart"),transitioncancel:wl("Transition","TransitionCancel"),transitionend:wl("Transition","TransitionEnd")},Qi={},Vf={};Xt&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Hl(e){if(Qi[e])return Qi[e];if(!ra[e])return e;var t=ra[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Vf)return Qi[e]=t[l];return e}var kf=Hl("animationend"),Kf=Hl("animationiteration"),Jf=Hl("animationstart"),Zh=Hl("transitionrun"),Vh=Hl("transitionstart"),kh=Hl("transitioncancel"),$f=Hl("transitionend"),Wf=new Map,Zi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zi.push("scrollEnd");function Ot(e,t){Wf.set(e,t),jl(t,[e])}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],fa=0,Vi=0;function nu(){for(var e=fa,t=Vi=fa=0;t<e;){var l=yt[t];yt[t++]=null;var a=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var u=yt[t];if(yt[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&Ff(l,n,u)}}function uu(e,t,l,a){yt[fa++]=e,yt[fa++]=t,yt[fa++]=l,yt[fa++]=a,Vi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ki(e,t,l,a){return uu(e,t,l,a),iu(e)}function Bl(e,t){return uu(e,null,null,t),iu(e)}function Ff(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-it(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function iu(e){if(50<xn)throw xn=0,tr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oa={};function Kh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,l,a){return new Kh(e,t,l,a)}function Ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var l=e.alternate;return l===null?(l=rt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function If(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cu(e,t,l,a,n,u){var i=0;if(a=e,typeof e=="function")Ki(e)&&(i=1);else if(typeof e=="string")i=I0(e,l,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ke:return e=rt(31,l,t,n),e.elementType=ke,e.lanes=u,e;case Y:return ql(l.children,n,u,t);case H:i=8,n|=24;break;case $:return e=rt(12,l,t,n|2),e.elementType=$,e.lanes=u,e;case K:return e=rt(13,l,t,n),e.elementType=K,e.lanes=u,e;case oe:return e=rt(19,l,t,n),e.elementType=oe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:i=10;break e;case Z:i=9;break e;case ie:i=11;break e;case I:i=14;break e;case Ne:i=16,a=null;break e}i=29,l=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=rt(i,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function ql(e,t,l,a){return e=rt(7,e,a,t),e.lanes=l,e}function Ji(e,t,l){return e=rt(6,e,null,t),e.lanes=l,e}function Pf(e){var t=rt(18,null,null,0);return t.stateNode=e,t}function $i(e,t,l){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var eo=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var l=eo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ir(t)},eo.set(e,t),t)}return{value:e,source:t,stack:Ir(t)}}var sa=[],da=0,ru=null,Ia=0,xt=[],St=0,fl=null,Ut=1,wt="";function Zt(e,t){sa[da++]=Ia,sa[da++]=ru,ru=e,Ia=t}function to(e,t,l){xt[St++]=Ut,xt[St++]=wt,xt[St++]=fl,fl=e;var a=Ut;e=wt;var n=32-it(a)-1;a&=~(1<<n),l+=1;var u=32-it(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Ut=1<<32-it(t)+n|l<<n|a,wt=u+e}else Ut=1<<u|l<<n|a,wt=e}function Wi(e){e.return!==null&&(Zt(e,1),to(e,1,0))}function Fi(e){for(;e===ru;)ru=sa[--da],sa[da]=null,Ia=sa[--da],sa[da]=null;for(;e===fl;)fl=xt[--St],xt[St]=null,wt=xt[--St],xt[St]=null,Ut=xt[--St],xt[St]=null}function lo(e,t){xt[St++]=Ut,xt[St++]=wt,xt[St++]=fl,Ut=t.id,wt=t.overflow,fl=e}var Xe=null,ze=null,fe=!1,ol=null,Et=!1,Ii=Error(r(519));function sl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pa(bt(t,e)),Ii}function ao(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ge]=e,t[Fe]=a,l){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(l=0;l<En.length;l++)ue(En[l],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),pf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),yf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Sd(t.textContent,l)?(a.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),a.onScroll!=null&&ue("scroll",t),a.onScrollEnd!=null&&ue("scrollend",t),a.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||sl(e,!0)}function no(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Xe=Xe.return}}function ma(e){if(e!==Xe)return!1;if(!fe)return no(e),fe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||pr(e.type,e.memoizedProps)),l=!l),l&&ze&&sl(e),no(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=Md(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=Md(e)}else t===27?(t=ze,Al(e.type)?(e=Sr,Sr=null,ze=e):ze=t):ze=Xe?Tt(e.stateNode.nextSibling):null;return!0}function Ll(){ze=Xe=null,fe=!1}function Pi(){var e=ol;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),ol=null),e}function Pa(e){ol===null?ol=[e]:ol.push(e)}var ec=y(null),Yl=null,Vt=null;function dl(e,t,l){q(ec,t._currentValue),t._currentValue=l}function kt(e){e._currentValue=ec.current,U(ec)}function tc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function lc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var f=u;u=n;for(var h=0;h<t.length;h++)if(f.context===t[h]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),tc(u.return,l,e),a||(i=null);break e}u=f.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(r(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),tc(i,l,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ha(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var f=n.type;ct(n.pendingProps.value,i.value)||(e!==null?e.push(f):e=[f])}}else if(n===he.current){if(i=n.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(_n):e=[_n])}n=n.return}e!==null&&lc(t,e,l,a),t.flags|=262144}function fu(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gl(e){Yl=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return uo(Yl,e)}function ou(e,t){return Yl===null&&Gl(e),uo(e,t)}function uo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Vt===null){if(e===null)throw Error(r(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return l}var Jh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},$h=c.unstable_scheduleCallback,Wh=c.unstable_NormalPriority,Ue={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new Jh,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&$h(Wh,function(){e.controller.abort()})}var tn=null,nc=0,ga=0,pa=null;function Fh(e,t){if(tn===null){var l=tn=[];nc=0,ga=cr(),pa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return nc++,t.then(io,io),t}function io(){if(--nc===0&&tn!==null){pa!==null&&(pa.status="fulfilled");var e=tn;tn=null,ga=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ih(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var co=C.S;C.S=function(e,t){Vs=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fh(e,t),co!==null&&co(e,t)};var Xl=y(null);function uc(){var e=Xl.current;return e!==null?e:Ee.pooledCache}function su(e,t){t===null?q(Xl,Xl.current):q(Xl,t.pool)}function ro(){var e=uc();return e===null?null:{parent:Ue._currentValue,pool:e}}var va=Error(r(460)),ic=Error(r(474)),du=Error(r(542)),mu={then:function(){}};function fo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function oo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Gt,Gt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mo(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mo(e),e}throw Zl=t,va}}function Ql(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Zl=l,va):l}}var Zl=null;function so(){if(Zl===null)throw Error(r(459));var e=Zl;return Zl=null,e}function mo(e){if(e===va||e===du)throw Error(r(483))}var ya=null,ln=0;function hu(e){var t=ln;return ln+=1,ya===null&&(ya=[]),oo(ya,e,t)}function an(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gu(e,t){throw t.$$typeof===w?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ho(e){function t(E,v){if(e){var z=E.deletions;z===null?(E.deletions=[v],E.flags|=16):z.push(v)}}function l(E,v){if(!e)return null;for(;v!==null;)t(E,v),v=v.sibling;return null}function a(E){for(var v=new Map;E!==null;)E.key!==null?v.set(E.key,E):v.set(E.index,E),E=E.sibling;return v}function n(E,v){return E=Qt(E,v),E.index=0,E.sibling=null,E}function u(E,v,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<v?(E.flags|=67108866,v):z):(E.flags|=67108866,v)):(E.flags|=1048576,v)}function i(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function f(E,v,z,D){return v===null||v.tag!==6?(v=Ji(z,E.mode,D),v.return=E,v):(v=n(v,z),v.return=E,v)}function h(E,v,z,D){var J=z.type;return J===Y?M(E,v,z.props.children,D,z.key):v!==null&&(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ne&&Ql(J)===v.type)?(v=n(v,z.props),an(v,z),v.return=E,v):(v=cu(z.type,z.key,z.props,null,E.mode,D),an(v,z),v.return=E,v)}function A(E,v,z,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=$i(z,E.mode,D),v.return=E,v):(v=n(v,z.children||[]),v.return=E,v)}function M(E,v,z,D,J){return v===null||v.tag!==7?(v=ql(z,E.mode,D,J),v.return=E,v):(v=n(v,z),v.return=E,v)}function j(E,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ji(""+v,E.mode,z),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Q:return z=cu(v.type,v.key,v.props,null,E.mode,z),an(z,v),z.return=E,z;case G:return v=$i(v,E.mode,z),v.return=E,v;case Ne:return v=Ql(v),j(E,v,z)}if(je(v)||Ke(v))return v=ql(v,E.mode,z,null),v.return=E,v;if(typeof v.then=="function")return j(E,hu(v),z);if(v.$$typeof===L)return j(E,ou(E,v),z);gu(E,v)}return null}function R(E,v,z,D){var J=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return J!==null?null:f(E,v,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:return z.key===J?h(E,v,z,D):null;case G:return z.key===J?A(E,v,z,D):null;case Ne:return z=Ql(z),R(E,v,z,D)}if(je(z)||Ke(z))return J!==null?null:M(E,v,z,D,null);if(typeof z.then=="function")return R(E,v,hu(z),D);if(z.$$typeof===L)return R(E,v,ou(E,z),D);gu(E,z)}return null}function O(E,v,z,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return E=E.get(z)||null,f(v,E,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Q:return E=E.get(D.key===null?z:D.key)||null,h(v,E,D,J);case G:return E=E.get(D.key===null?z:D.key)||null,A(v,E,D,J);case Ne:return D=Ql(D),O(E,v,z,D,J)}if(je(D)||Ke(D))return E=E.get(z)||null,M(v,E,D,J,null);if(typeof D.then=="function")return O(E,v,z,hu(D),J);if(D.$$typeof===L)return O(E,v,z,ou(v,D),J);gu(v,D)}return null}function X(E,v,z,D){for(var J=null,se=null,k=v,le=v=0,re=null;k!==null&&le<z.length;le++){k.index>le?(re=k,k=null):re=k.sibling;var de=R(E,k,z[le],D);if(de===null){k===null&&(k=re);break}e&&k&&de.alternate===null&&t(E,k),v=u(de,v,le),se===null?J=de:se.sibling=de,se=de,k=re}if(le===z.length)return l(E,k),fe&&Zt(E,le),J;if(k===null){for(;le<z.length;le++)k=j(E,z[le],D),k!==null&&(v=u(k,v,le),se===null?J=k:se.sibling=k,se=k);return fe&&Zt(E,le),J}for(k=a(k);le<z.length;le++)re=O(k,E,le,z[le],D),re!==null&&(e&&re.alternate!==null&&k.delete(re.key===null?le:re.key),v=u(re,v,le),se===null?J=re:se.sibling=re,se=re);return e&&k.forEach(function(Ml){return t(E,Ml)}),fe&&Zt(E,le),J}function W(E,v,z,D){if(z==null)throw Error(r(151));for(var J=null,se=null,k=v,le=v=0,re=null,de=z.next();k!==null&&!de.done;le++,de=z.next()){k.index>le?(re=k,k=null):re=k.sibling;var Ml=R(E,k,de.value,D);if(Ml===null){k===null&&(k=re);break}e&&k&&Ml.alternate===null&&t(E,k),v=u(Ml,v,le),se===null?J=Ml:se.sibling=Ml,se=Ml,k=re}if(de.done)return l(E,k),fe&&Zt(E,le),J;if(k===null){for(;!de.done;le++,de=z.next())de=j(E,de.value,D),de!==null&&(v=u(de,v,le),se===null?J=de:se.sibling=de,se=de);return fe&&Zt(E,le),J}for(k=a(k);!de.done;le++,de=z.next())de=O(k,E,le,de.value,D),de!==null&&(e&&de.alternate!==null&&k.delete(de.key===null?le:de.key),v=u(de,v,le),se===null?J=de:se.sibling=de,se=de);return e&&k.forEach(function(fg){return t(E,fg)}),fe&&Zt(E,le),J}function xe(E,v,z,D){if(typeof z=="object"&&z!==null&&z.type===Y&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:e:{for(var J=z.key;v!==null;){if(v.key===J){if(J=z.type,J===Y){if(v.tag===7){l(E,v.sibling),D=n(v,z.props.children),D.return=E,E=D;break e}}else if(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ne&&Ql(J)===v.type){l(E,v.sibling),D=n(v,z.props),an(D,z),D.return=E,E=D;break e}l(E,v);break}else t(E,v);v=v.sibling}z.type===Y?(D=ql(z.props.children,E.mode,D,z.key),D.return=E,E=D):(D=cu(z.type,z.key,z.props,null,E.mode,D),an(D,z),D.return=E,E=D)}return i(E);case G:e:{for(J=z.key;v!==null;){if(v.key===J)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){l(E,v.sibling),D=n(v,z.children||[]),D.return=E,E=D;break e}else{l(E,v);break}else t(E,v);v=v.sibling}D=$i(z,E.mode,D),D.return=E,E=D}return i(E);case Ne:return z=Ql(z),xe(E,v,z,D)}if(je(z))return X(E,v,z,D);if(Ke(z)){if(J=Ke(z),typeof J!="function")throw Error(r(150));return z=J.call(z),W(E,v,z,D)}if(typeof z.then=="function")return xe(E,v,hu(z),D);if(z.$$typeof===L)return xe(E,v,ou(E,z),D);gu(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(l(E,v.sibling),D=n(v,z),D.return=E,E=D):(l(E,v),D=Ji(z,E.mode,D),D.return=E,E=D),i(E)):l(E,v)}return function(E,v,z,D){try{ln=0;var J=xe(E,v,z,D);return ya=null,J}catch(k){if(k===va||k===du)throw k;var se=rt(29,k,null,E.mode);return se.lanes=D,se.return=E,se}}}var Vl=ho(!0),go=ho(!1),ml=!1;function cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(me&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=iu(e),Ff(e,null,l),t}return uu(e,a,t,l),iu(e)}function nn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,nf(e,l)}}function fc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var oc=!1;function un(){if(oc){var e=pa;if(e!==null)throw e}}function cn(e,t,l,a){oc=!1;var n=e.updateQueue;ml=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var h=f,A=h.next;h.next=null,i===null?u=A:i.next=A,i=h;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==i&&(f===null?M.firstBaseUpdate=A:f.next=A,M.lastBaseUpdate=h))}if(u!==null){var j=n.baseState;i=0,M=A=h=null,f=u;do{var R=f.lane&-536870913,O=R!==f.lane;if(O?(ce&R)===R:(a&R)===R){R!==0&&R===ga&&(oc=!0),M!==null&&(M=M.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var X=e,W=f;R=t;var xe=l;switch(W.tag){case 1:if(X=W.payload,typeof X=="function"){j=X.call(xe,j,R);break e}j=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=W.payload,R=typeof X=="function"?X.call(xe,j,R):X,R==null)break e;j=x({},j,R);break e;case 2:ml=!0}}R=f.callback,R!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[R]:O.push(R))}else O={lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(A=M=O,h=j):M=M.next=O,i|=R;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;O=f,f=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);M===null&&(h=j),n.baseState=h,n.firstBaseUpdate=A,n.lastBaseUpdate=M,u===null&&(n.shared.lanes=0),xl|=i,e.lanes=i,e.memoizedState=j}}function po(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function vo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)po(l[e],t)}var ba=y(null),pu=y(0);function yo(e,t){e=tl,q(pu,e),q(ba,t),tl=e|t.baseLanes}function sc(){q(pu,tl),q(ba,ba.current)}function dc(){tl=pu.current,U(ba),U(pu)}var ft=y(null),zt=null;function pl(e){var t=e.alternate;q(Ce,Ce.current&1),q(ft,e),zt===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(zt=e)}function mc(e){q(Ce,Ce.current),q(ft,e),zt===null&&(zt=e)}function bo(e){e.tag===22?(q(Ce,Ce.current),q(ft,e),zt===null&&(zt=e)):vl()}function vl(){q(Ce,Ce.current),q(ft,ft.current)}function ot(e){U(ft),zt===e&&(zt=null),U(Ce)}var Ce=y(0);function vu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||br(l)||xr(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kt=0,te=null,ye=null,we=null,yu=!1,xa=!1,kl=!1,bu=0,rn=0,Sa=null,Ph=0;function _e(){throw Error(r(321))}function hc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ct(e[l],t[l]))return!1;return!0}function gc(e,t,l,a,n,u){return Kt=u,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?ls:Mc,kl=!1,u=l(a,n),kl=!1,xa&&(u=So(t,l,a,n)),xo(e),u}function xo(e){C.H=sn;var t=ye!==null&&ye.next!==null;if(Kt=0,we=ye=te=null,yu=!1,rn=0,Sa=null,t)throw Error(r(300));e===null||He||(e=e.dependencies,e!==null&&fu(e)&&(He=!0))}function So(e,t,l,a){te=e;var n=0;do{if(xa&&(Sa=null),rn=0,xa=!1,25<=n)throw Error(r(301));if(n+=1,we=ye=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}C.H=as,u=t(l,a)}while(xa);return u}function e0(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?fn(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(te.flags|=1024),t}function pc(){var e=bu!==0;return bu=0,e}function vc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function yc(e){if(yu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yu=!1}Kt=0,we=ye=te=null,xa=!1,rn=bu=0,Sa=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?te.memoizedState=we=e:we=we.next=e,we}function De(){if(ye===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=we===null?te.memoizedState:we.next;if(t!==null)we=t,ye=e;else{if(e===null)throw te.alternate===null?Error(r(467)):Error(r(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?te.memoizedState=we=e:we=we.next=e}return we}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(e){var t=rn;return rn+=1,Sa===null&&(Sa=[]),e=oo(Sa,e,t),t=te,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?ls:Mc),e}function Su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fn(e);if(e.$$typeof===L)return Qe(e)}throw Error(r(438,String(e)))}function bc(e){var t=null,l=te.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=xu(),te.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Dt;return t.index++,l}function Jt(e,t){return typeof t=="function"?t(e):t}function Eu(e){var t=De();return xc(t,ye,e)}function xc(e,t,l){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var f=i=null,h=null,A=t,M=!1;do{var j=A.lane&-536870913;if(j!==A.lane?(ce&j)===j:(Kt&j)===j){var R=A.revertLane;if(R===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),j===ga&&(M=!0);else if((Kt&R)===R){A=A.next,R===ga&&(M=!0);continue}else j={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(f=h=j,i=u):h=h.next=j,te.lanes|=R,xl|=R;j=A.action,kl&&l(u,j),u=A.hasEagerState?A.eagerState:l(u,j)}else R={lane:j,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(f=h=R,i=u):h=h.next=R,te.lanes|=j,xl|=j;A=A.next}while(A!==null&&A!==t);if(h===null?i=u:h.next=f,!ct(u,e.memoizedState)&&(He=!0,M&&(l=pa,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=h,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Sc(e){var t=De(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);ct(u,t.memoizedState)||(He=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function Eo(e,t,l){var a=te,n=De(),u=fe;if(u){if(l===void 0)throw Error(r(407));l=l()}else l=t();var i=!ct((ye||n).memoizedState,l);if(i&&(n.memoizedState=l,He=!0),n=n.queue,Tc(Ao.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(a.flags|=2048,Ea(9,{destroy:void 0},To.bind(null,a,n,l,t),null),Ee===null)throw Error(r(349));u||(Kt&127)!==0||zo(a,t,l)}return l}function zo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=te.updateQueue,t===null?(t=xu(),te.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function To(e,t,l,a){t.value=l,t.getSnapshot=a,Ro(t)&&_o(e)}function Ao(e,t,l){return l(function(){Ro(t)&&_o(e)})}function Ro(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ct(e,l)}catch{return!0}}function _o(e){var t=Bl(e,2);t!==null&&at(t,e,2)}function Ec(e){var t=We();if(typeof e=="function"){var l=e;if(e=l(),kl){il(!0);try{l()}finally{il(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function Oo(e,t,l,a){return e.baseState=l,xc(e,ye,typeof a=="function"?a:Jt)}function t0(e,t,l,a,n){if(Au(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};C.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,No(t,u)):(u.next=l.next,t.pending=l.next=u)}}function No(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=C.T,i={};C.T=i;try{var f=l(n,a),h=C.S;h!==null&&h(i,f),Mo(e,t,f)}catch(A){zc(e,t,A)}finally{u!==null&&i.types!==null&&(u.types=i.types),C.T=u}}else try{u=l(n,a),Mo(e,t,u)}catch(A){zc(e,t,A)}}function Mo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Co(e,t,a)},function(a){return zc(e,t,a)}):Co(e,t,l)}function Co(e,t,l){t.status="fulfilled",t.value=l,Do(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,No(e,l)))}function zc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Do(t),t=t.next;while(t!==a)}e.action=null}function Do(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jo(e,t){return t}function Uo(e,t){if(fe){var l=Ee.formState;if(l!==null){e:{var a=te;if(fe){if(ze){t:{for(var n=ze,u=Et;n.nodeType!==8;){if(!u){n=null;break t}if(n=Tt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ze=Tt(n.nextSibling),a=n.data==="F!";break e}}sl(a)}a=!1}a&&(t=l[0])}}return l=We(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},l.queue=a,l=Po.bind(null,te,a),a.dispatch=l,a=Ec(!1),u=Nc.bind(null,te,!1,a.queue),a=We(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=t0.bind(null,te,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function wo(e){var t=De();return Ho(t,ye,e)}function Ho(e,t,l){if(t=xc(e,t,jo)[0],e=Eu(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=fn(t)}catch(i){throw i===va?du:i}else a=t;t=De();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(te.flags|=2048,Ea(9,{destroy:void 0},l0.bind(null,n,l),null)),[a,u,e]}function l0(e,t){e.action=t}function Bo(e){var t=De(),l=ye;if(l!==null)return Ho(t,l,e);De(),t=t.memoizedState,l=De();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ea(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=te.updateQueue,t===null&&(t=xu(),te.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function qo(){return De().memoizedState}function zu(e,t,l,a){var n=We();te.flags|=e,n.memoizedState=Ea(1|t,{destroy:void 0},l,a===void 0?null:a)}function Tu(e,t,l,a){var n=De();a=a===void 0?null:a;var u=n.memoizedState.inst;ye!==null&&a!==null&&hc(a,ye.memoizedState.deps)?n.memoizedState=Ea(t,u,l,a):(te.flags|=e,n.memoizedState=Ea(1|t,u,l,a))}function Lo(e,t){zu(8390656,8,e,t)}function Tc(e,t){Tu(2048,8,e,t)}function a0(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=xu(),te.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Yo(e){var t=De().memoizedState;return a0({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Go(e,t){return Tu(4,2,e,t)}function Xo(e,t){return Tu(4,4,e,t)}function Qo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zo(e,t,l){l=l!=null?l.concat([e]):null,Tu(4,4,Qo.bind(null,t,e),l)}function Ac(){}function Vo(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&hc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function ko(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&hc(t,a[1]))return a[0];if(a=e(),kl){il(!0);try{e()}finally{il(!1)}}return l.memoizedState=[a,t],a}function Rc(e,t,l){return l===void 0||(Kt&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Ks(),te.lanes|=e,xl|=e,l)}function Ko(e,t,l,a){return ct(l,t)?l:ba.current!==null?(e=Rc(e,l,a),ct(e,t)||(He=!0),e):(Kt&42)===0||(Kt&1073741824)!==0&&(ce&261930)===0?(He=!0,e.memoizedState=l):(e=Ks(),te.lanes|=e,xl|=e,t)}function Jo(e,t,l,a,n){var u=B.p;B.p=u!==0&&8>u?u:8;var i=C.T,f={};C.T=f,Nc(e,!1,t,l);try{var h=n(),A=C.S;if(A!==null&&A(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var M=Ih(h,a);on(e,t,M,mt(e))}else on(e,t,a,mt(e))}catch(j){on(e,t,{then:function(){},status:"rejected",reason:j},mt())}finally{B.p=u,i!==null&&f.types!==null&&(i.types=f.types),C.T=i}}function n0(){}function _c(e,t,l,a){if(e.tag!==5)throw Error(r(476));var n=$o(e).queue;Jo(e,n,t,F,l===null?n0:function(){return Wo(e),l(a)})}function $o(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:F},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wo(e){var t=$o(e);t.next===null&&(t=e.alternate.memoizedState),on(e,t.next.queue,{},mt())}function Oc(){return Qe(_n)}function Fo(){return De().memoizedState}function Io(){return De().memoizedState}function u0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=mt();e=hl(l);var a=gl(t,e,l);a!==null&&(at(a,t,l),nn(a,t,l)),t={cache:ac()},e.payload=t;return}t=t.return}}function i0(e,t,l){var a=mt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Au(e)?es(t,l):(l=ki(e,t,l,a),l!==null&&(at(l,e,a),ts(l,t,a)))}function Po(e,t,l){var a=mt();on(e,t,l,a)}function on(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Au(e))es(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,f=u(i,l);if(n.hasEagerState=!0,n.eagerState=f,ct(f,i))return uu(e,t,n,0),Ee===null&&nu(),!1}catch{}if(l=ki(e,t,n,a),l!==null)return at(l,e,a),ts(l,t,a),!0}return!1}function Nc(e,t,l,a){if(a={lane:2,revertLane:cr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Au(e)){if(t)throw Error(r(479))}else t=ki(e,l,a,2),t!==null&&at(t,e,2)}function Au(e){var t=e.alternate;return e===te||t!==null&&t===te}function es(e,t){xa=yu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function ts(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,nf(e,l)}}var sn={readContext:Qe,use:Su,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e,useHostTransitionStatus:_e,useFormState:_e,useActionState:_e,useOptimistic:_e,useMemoCache:_e,useCacheRefresh:_e};sn.useEffectEvent=_e;var ls={readContext:Qe,use:Su,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Lo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,zu(4194308,4,Qo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return zu(4194308,4,e,t)},useInsertionEffect:function(e,t){zu(4,2,e,t)},useMemo:function(e,t){var l=We();t=t===void 0?null:t;var a=e();if(kl){il(!0);try{e()}finally{il(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=We();if(l!==void 0){var n=l(t);if(kl){il(!0);try{l(t)}finally{il(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=i0.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=Ec(e);var t=e.queue,l=Po.bind(null,te,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Ac,useDeferredValue:function(e,t){var l=We();return Rc(l,e,t)},useTransition:function(){var e=Ec(!1);return e=Jo.bind(null,te,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=te,n=We();if(fe){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Ee===null)throw Error(r(349));(ce&127)!==0||zo(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,Lo(Ao.bind(null,a,u,e),[e]),a.flags|=2048,Ea(9,{destroy:void 0},To.bind(null,a,u,l,t),null),l},useId:function(){var e=We(),t=Ee.identifierPrefix;if(fe){var l=wt,a=Ut;l=(a&~(1<<32-it(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=bu++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Ph++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oc,useFormState:Uo,useActionState:Uo,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Nc.bind(null,te,!0,l),l.dispatch=t,[e,t]},useMemoCache:bc,useCacheRefresh:function(){return We().memoizedState=u0.bind(null,te)},useEffectEvent:function(e){var t=We(),l={impl:e};return t.memoizedState=l,function(){if((me&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},Mc={readContext:Qe,use:Su,useCallback:Vo,useContext:Qe,useEffect:Tc,useImperativeHandle:Zo,useInsertionEffect:Go,useLayoutEffect:Xo,useMemo:ko,useReducer:Eu,useRef:qo,useState:function(){return Eu(Jt)},useDebugValue:Ac,useDeferredValue:function(e,t){var l=De();return Ko(l,ye.memoizedState,e,t)},useTransition:function(){var e=Eu(Jt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:Eo,useId:Fo,useHostTransitionStatus:Oc,useFormState:wo,useActionState:wo,useOptimistic:function(e,t){var l=De();return Oo(l,ye,e,t)},useMemoCache:bc,useCacheRefresh:Io};Mc.useEffectEvent=Yo;var as={readContext:Qe,use:Su,useCallback:Vo,useContext:Qe,useEffect:Tc,useImperativeHandle:Zo,useInsertionEffect:Go,useLayoutEffect:Xo,useMemo:ko,useReducer:Sc,useRef:qo,useState:function(){return Sc(Jt)},useDebugValue:Ac,useDeferredValue:function(e,t){var l=De();return ye===null?Rc(l,e,t):Ko(l,ye.memoizedState,e,t)},useTransition:function(){var e=Sc(Jt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:Eo,useId:Fo,useHostTransitionStatus:Oc,useFormState:Bo,useActionState:Bo,useOptimistic:function(e,t){var l=De();return ye!==null?Oo(l,ye,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:bc,useCacheRefresh:Io};as.useEffectEvent=Yo;function Cc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:x({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Dc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=mt(),n=hl(a);n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(at(t,e,a),nn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=mt(),n=hl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(at(t,e,a),nn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=mt(),a=hl(l);a.tag=2,t!=null&&(a.callback=t),t=gl(e,a,l),t!==null&&(at(t,e,l),nn(t,e,l))}};function ns(e,t,l,a,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!Wa(l,a)||!Wa(n,u):!0}function us(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function Kl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=x({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function is(e){au(e)}function cs(e){console.error(e)}function rs(e){au(e)}function Ru(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function fs(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function jc(e,t,l){return l=hl(l),l.tag=3,l.payload={element:null},l.callback=function(){Ru(e,t)},l}function os(e){return e=hl(e),e.tag=3,e}function ss(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){fs(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){fs(t,l,a),typeof n!="function"&&(Sl===null?Sl=new Set([this]):Sl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function c0(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ha(t,l,n,!0),l=ft.current,l!==null){switch(l.tag){case 31:case 13:return zt===null?qu():l.alternate===null&&Oe===0&&(Oe=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===mu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),nr(e,a,n)),!1;case 22:return l.flags|=65536,a===mu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),nr(e,a,n)),!1}throw Error(r(435,l.tag))}return nr(e,a,n),qu(),!1}if(fe)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ii&&(e=Error(r(422),{cause:a}),Pa(bt(e,l)))):(a!==Ii&&(t=Error(r(423),{cause:a}),Pa(bt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=bt(a,l),n=jc(e.stateNode,a,n),fc(e,n),Oe!==4&&(Oe=2)),!1;var u=Error(r(520),{cause:a});if(u=bt(u,l),bn===null?bn=[u]:bn.push(u),Oe!==4&&(Oe=2),t===null)return!0;a=bt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=jc(l.stateNode,a,e),fc(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Sl===null||!Sl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=os(n),ss(n,e,l,a),fc(l,n),!1}l=l.return}while(l!==null);return!1}var Uc=Error(r(461)),He=!1;function Ze(e,t,l,a){t.child=e===null?go(t,null,l,a):Vl(t,e.child,l,a)}function ds(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var i={};for(var f in a)f!=="ref"&&(i[f]=a[f])}else i=a;return Gl(t),a=gc(e,t,l,i,u,n),f=pc(),e!==null&&!He?(vc(e,t,n),$t(e,t,n)):(fe&&f&&Wi(t),t.flags|=1,Ze(e,t,a,n),t.child)}function ms(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!Ki(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,hs(e,t,u,a,n)):(e=cu(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Xc(e,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Wa,l(i,a)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=Qt(u,a),e.ref=t.ref,e.return=t,t.child=e}function hs(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(Wa(u,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=u,Xc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,$t(e,t,n)}return wc(e,t,l,a,n)}function gs(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return ps(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&su(t,u!==null?u.cachePool:null),u!==null?yo(t,u):sc(),bo(t);else return a=t.lanes=536870912,ps(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(su(t,u.cachePool),yo(t,u),vl(),t.memoizedState=null):(e!==null&&su(t,null),sc(),vl());return Ze(e,t,n,l),t.child}function dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ps(e,t,l,a,n){var u=uc();return u=u===null?null:{parent:Ue._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&su(t,null),sc(),bo(t),e!==null&&ha(e,t,a,!0),t.childLanes=n,null}function _u(e,t){return t=Nu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vs(e,t,l){return Vl(t,e.child,null,l),e=_u(t,t.pendingProps),e.flags|=2,ot(t),t.memoizedState=null,e}function r0(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(a.mode==="hidden")return e=_u(t,a),t.lanes=536870912,dn(null,e);if(mc(t),(e=ze)?(e=Nd(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fl!==null?{id:Ut,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=Pf(e),l.return=t,t.child=l,Xe=t,ze=null)):e=null,e===null)throw sl(t);return t.lanes=536870912,null}return _u(t,a)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(mc(t),n)if(t.flags&256)t.flags&=-257,t=vs(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(He||ha(e,t,l,!1),n=(l&e.childLanes)!==0,He||n){if(a=Ee,a!==null&&(i=uf(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Bl(e,i),at(a,e,i),Uc;qu(),t=vs(e,t,l)}else e=u.treeContext,ze=Tt(i.nextSibling),Xe=t,fe=!0,ol=null,Et=!1,e!==null&&lo(t,e),t=_u(t,a),t.flags|=4096;return t}return e=Qt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ou(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function wc(e,t,l,a,n){return Gl(t),l=gc(e,t,l,a,void 0,n),a=pc(),e!==null&&!He?(vc(e,t,n),$t(e,t,n)):(fe&&a&&Wi(t),t.flags|=1,Ze(e,t,l,n),t.child)}function ys(e,t,l,a,n,u){return Gl(t),t.updateQueue=null,l=So(t,a,l,n),xo(e),a=pc(),e!==null&&!He?(vc(e,t,u),$t(e,t,u)):(fe&&a&&Wi(t),t.flags|=1,Ze(e,t,l,u),t.child)}function bs(e,t,l,a,n){if(Gl(t),t.stateNode===null){var u=oa,i=l.contextType;typeof i=="object"&&i!==null&&(u=Qe(i)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Dc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},cc(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?Qe(i):oa,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(Cc(t,l,i,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Dc.enqueueReplaceState(u,u.state,null),cn(t,a,u,n),un(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var f=t.memoizedProps,h=Kl(l,f);u.props=h;var A=u.context,M=l.contextType;i=oa,typeof M=="object"&&M!==null&&(i=Qe(M));var j=l.getDerivedStateFromProps;M=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,M||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||A!==i)&&us(t,u,a,i),ml=!1;var R=t.memoizedState;u.state=R,cn(t,a,u,n),un(),A=t.memoizedState,f||R!==A||ml?(typeof j=="function"&&(Cc(t,l,j,a),A=t.memoizedState),(h=ml||ns(t,l,h,a,R,A,i))?(M||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),u.props=a,u.state=A,u.context=i,a=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,rc(e,t),i=t.memoizedProps,M=Kl(l,i),u.props=M,j=t.pendingProps,R=u.context,A=l.contextType,h=oa,typeof A=="object"&&A!==null&&(h=Qe(A)),f=l.getDerivedStateFromProps,(A=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==j||R!==h)&&us(t,u,a,h),ml=!1,R=t.memoizedState,u.state=R,cn(t,a,u,n),un();var O=t.memoizedState;i!==j||R!==O||ml||e!==null&&e.dependencies!==null&&fu(e.dependencies)?(typeof f=="function"&&(Cc(t,l,f,a),O=t.memoizedState),(M=ml||ns(t,l,M,a,R,O,h)||e!==null&&e.dependencies!==null&&fu(e.dependencies))?(A||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,O,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,O,h)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),u.props=a,u.state=O,u.context=h,a=M):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,Ou(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Vl(t,e.child,null,n),t.child=Vl(t,null,l,n)):Ze(e,t,l,n),t.memoizedState=u.state,e=t.child):e=$t(e,t,n),e}function xs(e,t,l,a){return Ll(),t.flags|=256,Ze(e,t,l,a),t.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bc(e){return{baseLanes:e,cachePool:ro()}}function qc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=dt),e}function Ss(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?pl(t):vl(),(e=ze)?(e=Nd(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fl!==null?{id:Ut,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=Pf(e),l.return=t,t.child=l,Xe=t,ze=null)):e=null,e===null)throw sl(t);return xr(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(vl(),n=t.mode,f=Nu({mode:"hidden",children:f},n),a=ql(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=Bc(l),a.childLanes=qc(e,i,l),t.memoizedState=Hc,dn(null,a)):(pl(t),Lc(t,f))}var h=e.memoizedState;if(h!==null&&(f=h.dehydrated,f!==null)){if(u)t.flags&256?(pl(t),t.flags&=-257,t=Yc(e,t,l)):t.memoizedState!==null?(vl(),t.child=e.child,t.flags|=128,t=null):(vl(),f=a.fallback,n=t.mode,a=Nu({mode:"visible",children:a.children},n),f=ql(f,n,l,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,Vl(t,e.child,null,l),a=t.child,a.memoizedState=Bc(l),a.childLanes=qc(e,i,l),t.memoizedState=Hc,t=dn(null,a));else if(pl(t),xr(f)){if(i=f.nextSibling&&f.nextSibling.dataset,i)var A=i.dgst;i=A,a=Error(r(419)),a.stack="",a.digest=i,Pa({value:a,source:null,stack:null}),t=Yc(e,t,l)}else if(He||ha(e,t,l,!1),i=(l&e.childLanes)!==0,He||i){if(i=Ee,i!==null&&(a=uf(i,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,Bl(e,a),at(i,e,a),Uc;br(f)||qu(),t=Yc(e,t,l)}else br(f)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,ze=Tt(f.nextSibling),Xe=t,fe=!0,ol=null,Et=!1,e!==null&&lo(t,e),t=Lc(t,a.children),t.flags|=4096);return t}return n?(vl(),f=a.fallback,n=t.mode,h=e.child,A=h.sibling,a=Qt(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,A!==null?f=Qt(A,f):(f=ql(f,n,l,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,dn(null,a),a=t.child,f=e.child.memoizedState,f===null?f=Bc(l):(n=f.cachePool,n!==null?(h=Ue._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=ro(),f={baseLanes:f.baseLanes|l,cachePool:n}),a.memoizedState=f,a.childLanes=qc(e,i,l),t.memoizedState=Hc,dn(e.child,a)):(pl(t),l=e.child,e=l.sibling,l=Qt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function Lc(e,t){return t=Nu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nu(e,t){return e=rt(22,e,null,t),e.lanes=0,e}function Yc(e,t,l){return Vl(t,e.child,null,l),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Es(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),tc(e.return,t,l)}function Gc(e,t,l,a,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function zs(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Ce.current,f=(i&2)!==0;if(f?(i=i&1|2,t.flags|=128):i&=1,q(Ce,i),Ze(e,t,a,l),a=fe?Ia:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Es(e,l,t);else if(e.tag===19)Es(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&vu(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Gc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vu(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Gc(t,!0,l,null,u,a);break;case"together":Gc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function $t(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),xl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ha(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Qt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Qt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Xc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fu(e)))}function f0(e,t,l){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),dl(t,Ue,e.memoizedState.cache),Ll();break;case 27:case 5:Ba(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:dl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(pl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Ss(e,t,l):(pl(t),e=$t(e,t,l),e!==null?e.sibling:null);pl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ha(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return zs(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Ce,Ce.current),a)break;return null;case 22:return t.lanes=0,gs(e,t,l,t.pendingProps);case 24:dl(t,Ue,e.memoizedState.cache)}return $t(e,t,l)}function Ts(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Xc(e,l)&&(t.flags&128)===0)return He=!1,f0(e,t,l);He=(e.flags&131072)!==0}else He=!1,fe&&(t.flags&1048576)!==0&&to(t,Ia,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ql(t.elementType),t.type=e,typeof e=="function")Ki(e)?(a=Kl(e,a),t.tag=1,t=bs(null,t,e,a,l)):(t.tag=0,t=wc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===ie){t.tag=11,t=ds(null,t,e,a,l);break e}else if(n===I){t.tag=14,t=ms(null,t,e,a,l);break e}}throw t=gt(e)||e,Error(r(306,t,""))}}return t;case 0:return wc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Kl(a,t.pendingProps),bs(e,t,a,n,l);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,rc(e,t),cn(t,a,null,l);var i=t.memoizedState;if(a=i.cache,dl(t,Ue,a),a!==u.cache&&lc(t,[Ue],l,!0),un(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=xs(e,t,a,l);break e}else if(a!==n){n=bt(Error(r(424)),t),Pa(n),t=xs(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=Tt(e.firstChild),Xe=t,fe=!0,ol=null,Et=!0,l=go(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ll(),a===n){t=$t(e,t,l);break e}Ze(e,t,a,l)}t=t.child}return t;case 26:return Ou(e,t),e===null?(l=wd(t.type,null,t.pendingProps,null))?t.memoizedState=l:fe||(l=t.type,e=t.pendingProps,a=Vu(ae.current).createElement(l),a[Ge]=t,a[Fe]=e,Ve(a,l,e),Le(a),t.stateNode=a):t.memoizedState=wd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ba(t),e===null&&fe&&(a=t.stateNode=Dd(t.type,t.pendingProps,ae.current),Xe=t,Et=!0,n=ze,Al(t.type)?(Sr=n,ze=Tt(a.firstChild)):ze=n),Ze(e,t,t.pendingProps.children,l),Ou(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=a=ze)&&(a=L0(a,t.type,t.pendingProps,Et),a!==null?(t.stateNode=a,Xe=t,ze=Tt(a.firstChild),Et=!1,n=!0):n=!1),n||sl(t)),Ba(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,a=u.children,pr(n,u)?a=null:i!==null&&pr(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=gc(e,t,e0,null,null,l),_n._currentValue=n),Ou(e,t),Ze(e,t,a,l),t.child;case 6:return e===null&&fe&&((e=l=ze)&&(l=Y0(l,t.pendingProps,Et),l!==null?(t.stateNode=l,Xe=t,ze=null,e=!0):e=!1),e||sl(t)),null;case 13:return Ss(e,t,l);case 4:return $e(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Vl(t,null,a,l):Ze(e,t,a,l),t.child;case 11:return ds(e,t,t.type,t.pendingProps,l);case 7:return Ze(e,t,t.pendingProps,l),t.child;case 8:return Ze(e,t,t.pendingProps.children,l),t.child;case 12:return Ze(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,dl(t,t.type,a.value),Ze(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Gl(t),n=Qe(n),a=a(n),t.flags|=1,Ze(e,t,a,l),t.child;case 14:return ms(e,t,t.type,t.pendingProps,l);case 15:return hs(e,t,t.type,t.pendingProps,l);case 19:return zs(e,t,l);case 31:return r0(e,t,l);case 22:return gs(e,t,l,t.pendingProps);case 24:return Gl(t),a=Qe(Ue),e===null?(n=uc(),n===null&&(n=Ee,u=ac(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},cc(t),dl(t,Ue,n)):((e.lanes&l)!==0&&(rc(e,t),cn(t,null,null,l),un()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),dl(t,Ue,a)):(a=u.cache,dl(t,Ue,a),a!==n.cache&&lc(t,[Ue],l,!0))),Ze(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Wt(e){e.flags|=4}function Qc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Fs())e.flags|=8192;else throw Zl=mu,ic}else e.flags&=-16777217}function As(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yd(t))if(Fs())e.flags|=8192;else throw Zl=mu,ic}function Mu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lf():536870912,e.lanes|=t,Ra|=t)}function mn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function o0(e,t,l){var a=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kt(Ue),Me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ma(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pi())),Te(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(Wt(t),u!==null?(Te(t),As(t,u)):(Te(t),Qc(t,n,null,a,l))):u?u!==e.memoizedState?(Wt(t),Te(t),As(t,u)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Wt(t),Te(t),Qc(t,n,e,a,l)),null;case 27:if(Gn(t),l=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Te(t),null}e=V.current,ma(t)?ao(t):(e=Dd(n,a,l),t.stateNode=e,Wt(t))}return Te(t),null;case 5:if(Gn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Te(t),null}if(u=V.current,ma(t))ao(t);else{var i=Vu(ae.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Ge]=t,u[Fe]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(Ve(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Wt(t)}}return Te(t),Qc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=ae.current,ma(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Sd(e.nodeValue,l)),e||sl(t,!0)}else e=Vu(e).createTextNode(a),e[Ge]=t,t.stateNode=e}return Te(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ma(t),l!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else l=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Te(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ma(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),n=!1}else n=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Mu(t,t.updateQueue),Te(t),null);case 4:return Me(),e===null&&sr(t.stateNode.containerInfo),Te(t),null;case 10:return kt(t.type),Te(t),null;case 19:if(U(Ce),a=t.memoizedState,a===null)return Te(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)mn(a,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=vu(e),u!==null){for(t.flags|=128,mn(a,!1),e=u.updateQueue,t.updateQueue=e,Mu(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)If(l,e),l=l.sibling;return q(Ce,Ce.current&1|2),fe&&Zt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>wu&&(t.flags|=128,n=!0,mn(a,!1),t.lanes=4194304)}else{if(!n)if(e=vu(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Mu(t,e),mn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!fe)return Te(t),null}else 2*nt()-a.renderingStartTime>wu&&l!==536870912&&(t.flags|=128,n=!0,mn(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,l=Ce.current,q(Ce,n?l&1|2:l&1),fe&&Zt(t,a.treeForkCount),e):(Te(t),null);case 22:case 23:return ot(t),dc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),l=t.updateQueue,l!==null&&Mu(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&U(Xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),kt(Ue),Te(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function s0(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kt(Ue),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gn(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(r(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Ce),null;case 4:return Me(),null;case 10:return kt(t.type),null;case 22:case 23:return ot(t),dc(),e!==null&&U(Xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kt(Ue),null;case 25:return null;default:return null}}function Rs(e,t){switch(Fi(t),t.tag){case 3:kt(Ue),Me();break;case 26:case 27:case 5:Gn(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:U(Ce);break;case 10:kt(t.type);break;case 22:case 23:ot(t),dc(),e!==null&&U(Xl);break;case 24:kt(Ue)}}function hn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(f){pe(t,t.return,f)}}function yl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var i=a.inst,f=i.destroy;if(f!==void 0){i.destroy=void 0,n=t;var h=l,A=f;try{A()}catch(M){pe(n,h,M)}}}a=a.next}while(a!==u)}}catch(M){pe(t,t.return,M)}}function _s(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{vo(t,l)}catch(a){pe(e,e.return,a)}}}function Os(e,t,l){l.props=Kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){pe(e,t,a)}}function gn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){pe(e,t,n)}}function Ht(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){pe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){pe(e,t,n)}else l.current=null}function Ns(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){pe(e,e.return,n)}}function Zc(e,t,l){try{var a=e.stateNode;j0(a,e.type,l,t),a[Fe]=t}catch(n){pe(e,e.return,n)}}function Ms(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Al(e.type)||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Al(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Gt));else if(a!==4&&(a===27&&Al(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(kc(e,t,l),e=e.sibling;e!==null;)kc(e,t,l),e=e.sibling}function Cu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Al(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Cu(e,t,l),e=e.sibling;e!==null;)Cu(e,t,l),e=e.sibling}function Cs(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ve(t,a,l),t[Ge]=e,t[Fe]=l}catch(u){pe(e,e.return,u)}}var Ft=!1,Be=!1,Kc=!1,Ds=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function d0(e,t){if(e=e.containerInfo,hr=Iu,e=Qf(e),Yi(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,f=-1,h=-1,A=0,M=0,j=e,R=null;t:for(;;){for(var O;j!==l||n!==0&&j.nodeType!==3||(f=i+n),j!==u||a!==0&&j.nodeType!==3||(h=i+a),j.nodeType===3&&(i+=j.nodeValue.length),(O=j.firstChild)!==null;)R=j,j=O;for(;;){if(j===e)break t;if(R===l&&++A===n&&(f=i),R===u&&++M===a&&(h=i),(O=j.nextSibling)!==null)break;j=R,R=j.parentNode}j=O}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(gr={focusedElem:e,selectionRange:l},Iu=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var X=Kl(l.type,n);e=a.getSnapshotBeforeUpdate(X,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(W){pe(l,l.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)yr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function js(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Pt(e,l),a&4&&hn(5,l);break;case 1:if(Pt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){pe(l,l.return,i)}else{var n=Kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){pe(l,l.return,i)}}a&64&&_s(l),a&512&&gn(l,l.return);break;case 3:if(Pt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{vo(e,t)}catch(i){pe(l,l.return,i)}}break;case 27:t===null&&a&4&&Cs(l);case 26:case 5:Pt(e,l),t===null&&a&4&&Ns(l),a&512&&gn(l,l.return);break;case 12:Pt(e,l);break;case 31:Pt(e,l),a&4&&Hs(e,l);break;case 13:Pt(e,l),a&4&&Bs(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=S0.bind(null,l),G0(e,l))));break;case 22:if(a=l.memoizedState!==null||Ft,!a){t=t!==null&&t.memoizedState!==null||Be,n=Ft;var u=Be;Ft=a,(Be=t)&&!u?el(e,l,(l.subtreeFlags&8772)!==0):Pt(e,l),Ft=n,Be=u}break;case 30:break;default:Pt(e,l)}}function Us(e){var t=e.alternate;t!==null&&(e.alternate=null,Us(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Pe=!1;function It(e,t,l){for(l=l.child;l!==null;)ws(e,t,l),l=l.sibling}function ws(e,t,l){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(qa,l)}catch{}switch(l.tag){case 26:Be||Ht(l,t),It(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Be||Ht(l,t);var a=Ae,n=Pe;Al(l.type)&&(Ae=l.stateNode,Pe=!1),It(e,t,l),Tn(l.stateNode),Ae=a,Pe=n;break;case 5:Be||Ht(l,t);case 6:if(a=Ae,n=Pe,Ae=null,It(e,t,l),Ae=a,Pe=n,Ae!==null)if(Pe)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(l.stateNode)}catch(u){pe(l,t,u)}else try{Ae.removeChild(l.stateNode)}catch(u){pe(l,t,u)}break;case 18:Ae!==null&&(Pe?(e=Ae,_d(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ua(e)):_d(Ae,l.stateNode));break;case 4:a=Ae,n=Pe,Ae=l.stateNode.containerInfo,Pe=!0,It(e,t,l),Ae=a,Pe=n;break;case 0:case 11:case 14:case 15:yl(2,l,t),Be||yl(4,l,t),It(e,t,l);break;case 1:Be||(Ht(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Os(l,t,a)),It(e,t,l);break;case 21:It(e,t,l);break;case 22:Be=(a=Be)||l.memoizedState!==null,It(e,t,l),Be=a;break;default:It(e,t,l)}}function Hs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ua(e)}catch(l){pe(t,t.return,l)}}}function Bs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ua(e)}catch(l){pe(t,t.return,l)}}function m0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ds),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ds),t;default:throw Error(r(435,e.tag))}}function Du(e,t){var l=m0(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=E0.bind(null,e,a);a.then(n,n)}})}function et(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,i=t,f=i;e:for(;f!==null;){switch(f.tag){case 27:if(Al(f.type)){Ae=f.stateNode,Pe=!1;break e}break;case 5:Ae=f.stateNode,Pe=!1;break e;case 3:case 4:Ae=f.stateNode.containerInfo,Pe=!0;break e}f=f.return}if(Ae===null)throw Error(r(160));ws(u,i,n),Ae=null,Pe=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qs(t,e),t=t.sibling}var Nt=null;function qs(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),a&4&&(yl(3,e,e.return),hn(3,e),yl(5,e,e.return));break;case 1:et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),a&64&&Ft&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Nt;if(et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ga]||u[Ge]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Ve(u,a,l),u[Ge]=e,Le(u),a=u;break e;case"link":var i=qd("link","href",n).get(a+(l.href||""));if(i){for(var f=0;f<i.length;f++)if(u=i[f],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(f,1);break t}}u=n.createElement(a),Ve(u,a,l),n.head.appendChild(u);break;case"meta":if(i=qd("meta","content",n).get(a+(l.content||""))){for(f=0;f<i.length;f++)if(u=i[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(f,1);break t}}u=n.createElement(a),Ve(u,a,l),n.head.appendChild(u);break;default:throw Error(r(468,a))}u[Ge]=e,Le(u),a=u}e.stateNode=a}else Ld(n,e.type,e.stateNode);else e.stateNode=Bd(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Ld(n,e.type,e.stateNode):Bd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,l.memoizedProps)}break;case 27:et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),l!==null&&a&4&&Zc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),e.flags&32){n=e.stateNode;try{aa(n,"")}catch(X){pe(e,e.return,X)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Zc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Kc=!0);break;case 6:if(et(t,e),tt(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(X){pe(e,e.return,X)}}break;case 3:if(Ju=null,n=Nt,Nt=ku(t.containerInfo),et(t,e),Nt=n,tt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ua(t.containerInfo)}catch(X){pe(e,e.return,X)}Kc&&(Kc=!1,Ls(e));break;case 4:a=Nt,Nt=ku(e.stateNode.containerInfo),et(t,e),tt(e),Nt=a;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Du(e,a)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Uu=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Du(e,a)));break;case 22:n=e.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,A=Ft,M=Be;if(Ft=A||n,Be=M||h,et(t,e),Be=M,Ft=A,tt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||h||Ft||Be||Jl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){h=l=t;try{if(u=h.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{f=h.stateNode;var j=h.memoizedProps.style,R=j!=null&&j.hasOwnProperty("display")?j.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(X){pe(h,h.return,X)}}}else if(t.tag===6){if(l===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(X){pe(h,h.return,X)}}}else if(t.tag===18){if(l===null){h=t;try{var O=h.stateNode;n?Od(O,!0):Od(h.stateNode,!1)}catch(X){pe(h,h.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Du(e,l))));break;case 19:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Du(e,a)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ms(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,u=Vc(e);Cu(e,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(aa(i,""),l.flags&=-33);var f=Vc(e);Cu(e,f,i);break;case 3:case 4:var h=l.stateNode.containerInfo,A=Vc(e);kc(e,A,h);break;default:throw Error(r(161))}}catch(M){pe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ls(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ls(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)js(e,t.alternate,t),t=t.sibling}function Jl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yl(4,t,t.return),Jl(t);break;case 1:Ht(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Os(t,t.return,l),Jl(t);break;case 27:Tn(t.stateNode);case 26:case 5:Ht(t,t.return),Jl(t);break;case 22:t.memoizedState===null&&Jl(t);break;case 30:Jl(t);break;default:Jl(t)}e=e.sibling}}function el(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:el(n,u,l),hn(4,u);break;case 1:if(el(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){pe(a,a.return,A)}if(a=u,n=a.updateQueue,n!==null){var f=a.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)po(h[n],f)}catch(A){pe(a,a.return,A)}}l&&i&64&&_s(u),gn(u,u.return);break;case 27:Cs(u);case 26:case 5:el(n,u,l),l&&a===null&&i&4&&Ns(u),gn(u,u.return);break;case 12:el(n,u,l);break;case 31:el(n,u,l),l&&i&4&&Hs(n,u);break;case 13:el(n,u,l),l&&i&4&&Bs(n,u);break;case 22:u.memoizedState===null&&el(n,u,l),gn(u,u.return);break;case 30:break;default:el(n,u,l)}t=t.sibling}}function Jc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&en(l))}function $c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function Mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ys(e,t,l,a),t=t.sibling}function Ys(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,l,a),n&2048&&hn(9,t);break;case 1:Mt(e,t,l,a);break;case 3:Mt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){Mt(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,f=u.onPostCommit;typeof f=="function"&&f(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){pe(t,t.return,h)}}else Mt(e,t,l,a);break;case 31:Mt(e,t,l,a);break;case 13:Mt(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?Mt(e,t,l,a):pn(e,t):u._visibility&2?Mt(e,t,l,a):(u._visibility|=2,za(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Jc(i,t);break;case 24:Mt(e,t,l,a),n&2048&&$c(t.alternate,t);break;default:Mt(e,t,l,a)}}function za(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,f=l,h=a,A=i.flags;switch(i.tag){case 0:case 11:case 15:za(u,i,f,h,n),hn(8,i);break;case 23:break;case 22:var M=i.stateNode;i.memoizedState!==null?M._visibility&2?za(u,i,f,h,n):pn(u,i):(M._visibility|=2,za(u,i,f,h,n)),n&&A&2048&&Jc(i.alternate,i);break;case 24:za(u,i,f,h,n),n&&A&2048&&$c(i.alternate,i);break;default:za(u,i,f,h,n)}t=t.sibling}}function pn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:pn(l,a),n&2048&&Jc(a.alternate,a);break;case 24:pn(l,a),n&2048&&$c(a.alternate,a);break;default:pn(l,a)}t=t.sibling}}var vn=8192;function Ta(e,t,l){if(e.subtreeFlags&vn)for(e=e.child;e!==null;)Gs(e,t,l),e=e.sibling}function Gs(e,t,l){switch(e.tag){case 26:Ta(e,t,l),e.flags&vn&&e.memoizedState!==null&&P0(l,Nt,e.memoizedState,e.memoizedProps);break;case 5:Ta(e,t,l);break;case 3:case 4:var a=Nt;Nt=ku(e.stateNode.containerInfo),Ta(e,t,l),Nt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=vn,vn=16777216,Ta(e,t,l),vn=a):Ta(e,t,l));break;default:Ta(e,t,l)}}function Xs(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ye=a,Zs(a,e)}Xs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qs(e),e=e.sibling}function Qs(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&yl(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ju(e)):yn(e);break;default:yn(e)}}function ju(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ye=a,Zs(a,e)}Xs(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),ju(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,ju(t));break;default:ju(t)}e=e.sibling}}function Zs(e,t){for(;Ye!==null;){var l=Ye;switch(l.tag){case 0:case 11:case 15:yl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:en(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ye=a;else e:for(l=e;Ye!==null;){a=Ye;var n=a.sibling,u=a.return;if(Us(a),a===l){Ye=null;break e}if(n!==null){n.return=u,Ye=n;break e}Ye=u}}}var h0={getCacheForType:function(e){var t=Qe(Ue),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Qe(Ue).controller.signal}},g0=typeof WeakMap=="function"?WeakMap:Map,me=0,Ee=null,ne=null,ce=0,ge=0,st=null,bl=!1,Aa=!1,Wc=!1,tl=0,Oe=0,xl=0,$l=0,Fc=0,dt=0,Ra=0,bn=null,lt=null,Ic=!1,Uu=0,Vs=0,wu=1/0,Hu=null,Sl=null,qe=0,El=null,_a=null,ll=0,Pc=0,er=null,ks=null,xn=0,tr=null;function mt(){return(me&2)!==0&&ce!==0?ce&-ce:C.T!==null?cr():cf()}function Ks(){if(dt===0)if((ce&536870912)===0||fe){var e=Zn;Zn<<=1,(Zn&3932160)===0&&(Zn=262144),dt=e}else dt=536870912;return e=ft.current,e!==null&&(e.flags|=32),dt}function at(e,t,l){(e===Ee&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Oa(e,0),zl(e,ce,dt,!1)),Ya(e,l),((me&2)===0||e!==Ee)&&(e===Ee&&((me&2)===0&&($l|=l),Oe===4&&zl(e,ce,dt,!1)),Bt(e))}function Js(e,t,l){if((me&6)!==0)throw Error(r(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||La(e,t),n=a?y0(e,t):ar(e,t,!0),u=a;do{if(n===0){Aa&&!a&&zl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!p0(l)){n=ar(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var f=e;n=bn;var h=f.current.memoizedState.isDehydrated;if(h&&(Oa(f,i).flags|=256),i=ar(f,i,!1),i!==2){if(Wc&&!h){f.errorRecoveryDisabledLanes|=u,$l|=u,n=4;break e}u=lt,lt=n,u!==null&&(lt===null?lt=u:lt.push.apply(lt,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Oa(e,0),zl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:zl(a,t,dt,!bl);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=Uu+300-nt(),10<n)){if(zl(a,t,dt,!bl),kn(a,0,!0)!==0)break e;ll=t,a.timeoutHandle=Ad($s.bind(null,a,l,lt,Hu,Ic,t,dt,$l,Ra,bl,u,"Throttled",-0,0),n);break e}$s(a,l,lt,Hu,Ic,t,dt,$l,Ra,bl,u,null,-0,0)}}break}while(!0);Bt(e)}function $s(e,t,l,a,n,u,i,f,h,A,M,j,R,O){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Gs(t,u,j);var X=(u&62914560)===u?Uu-nt():(u&4194048)===u?Vs-nt():0;if(X=eg(j,X),X!==null){ll=u,e.cancelPendingCommit=X(ad.bind(null,e,t,u,l,a,n,i,f,h,M,j,null,R,O)),zl(e,u,i,!A);return}}ad(e,t,u,l,a,n,i,f,h)}function p0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!ct(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zl(e,t,l,a){t&=~Fc,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-it(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&af(e,l,t)}function Bu(){return(me&6)===0?(Sn(0),!1):!0}function lr(){if(ne!==null){if(ge===0)var e=ne.return;else e=ne,Vt=Yl=null,yc(e),ya=null,ln=0,e=ne;for(;e!==null;)Rs(e.alternate,e),e=e.return;ne=null}}function Oa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,H0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ll=0,lr(),Ee=e,ne=l=Qt(e.current,null),ce=t,ge=0,st=null,bl=!1,Aa=La(e,t),Wc=!1,Ra=dt=Fc=$l=xl=Oe=0,lt=bn=null,Ic=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-it(a),u=1<<n;t|=e[n],a&=~u}return tl=t,nu(),l}function Ws(e,t){te=null,C.H=sn,t===va||t===du?(t=so(),ge=3):t===ic?(t=so(),ge=4):ge=t===Uc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,ne===null&&(Oe=1,Ru(e,bt(t,e.current)))}function Fs(){var e=ft.current;return e===null?!0:(ce&4194048)===ce?zt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===zt:!1}function Is(){var e=C.H;return C.H=sn,e===null?sn:e}function Ps(){var e=C.A;return C.A=h0,e}function qu(){Oe=4,bl||(ce&4194048)!==ce&&ft.current!==null||(Aa=!0),(xl&134217727)===0&&($l&134217727)===0||Ee===null||zl(Ee,ce,dt,!1)}function ar(e,t,l){var a=me;me|=2;var n=Is(),u=Ps();(Ee!==e||ce!==t)&&(Hu=null,Oa(e,t)),t=!1;var i=Oe;e:do try{if(ge!==0&&ne!==null){var f=ne,h=st;switch(ge){case 8:lr(),i=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var A=ge;if(ge=0,st=null,Na(e,f,h,A),l&&Aa){i=0;break e}break;default:A=ge,ge=0,st=null,Na(e,f,h,A)}}v0(),i=Oe;break}catch(M){Ws(e,M)}while(!0);return t&&e.shellSuspendCounter++,Vt=Yl=null,me=a,C.H=n,C.A=u,ne===null&&(Ee=null,ce=0,nu()),i}function v0(){for(;ne!==null;)ed(ne)}function y0(e,t){var l=me;me|=2;var a=Is(),n=Ps();Ee!==e||ce!==t?(Hu=null,wu=nt()+500,Oa(e,t)):Aa=La(e,t);e:do try{if(ge!==0&&ne!==null){t=ne;var u=st;t:switch(ge){case 1:ge=0,st=null,Na(e,t,u,1);break;case 2:case 9:if(fo(u)){ge=0,st=null,td(t);break}t=function(){ge!==2&&ge!==9||Ee!==e||(ge=7),Bt(e)},u.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:fo(u)?(ge=0,st=null,td(t)):(ge=0,st=null,Na(e,t,u,7));break;case 5:var i=null;switch(ne.tag){case 26:i=ne.memoizedState;case 5:case 27:var f=ne;if(i?Yd(i):f.stateNode.complete){ge=0,st=null;var h=f.sibling;if(h!==null)ne=h;else{var A=f.return;A!==null?(ne=A,Lu(A)):ne=null}break t}}ge=0,st=null,Na(e,t,u,5);break;case 6:ge=0,st=null,Na(e,t,u,6);break;case 8:lr(),Oe=6;break e;default:throw Error(r(462))}}b0();break}catch(M){Ws(e,M)}while(!0);return Vt=Yl=null,C.H=a,C.A=n,me=l,ne!==null?0:(Ee=null,ce=0,nu(),Oe)}function b0(){for(;ne!==null&&!Xm();)ed(ne)}function ed(e){var t=Ts(e.alternate,e,tl);e.memoizedProps=e.pendingProps,t===null?Lu(e):ne=t}function td(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=ys(l,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=ys(l,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:yc(t);default:Rs(l,t),t=ne=If(t,tl),t=Ts(l,t,tl)}e.memoizedProps=e.pendingProps,t===null?Lu(e):ne=t}function Na(e,t,l,a){Vt=Yl=null,yc(t),ya=null,ln=0;var n=t.return;try{if(c0(e,n,t,l,ce)){Oe=1,Ru(e,bt(l,e.current)),ne=null;return}}catch(u){if(n!==null)throw ne=n,u;Oe=1,Ru(e,bt(l,e.current)),ne=null;return}t.flags&32768?(fe||a===1?e=!0:Aa||(ce&536870912)!==0?e=!1:(bl=e=!0,(a===2||a===9||a===3||a===6)&&(a=ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),ld(t,e)):Lu(t)}function Lu(e){var t=e;do{if((t.flags&32768)!==0){ld(t,bl);return}e=t.return;var l=o0(t.alternate,t,tl);if(l!==null){ne=l;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Oe===0&&(Oe=5)}function ld(e,t){do{var l=s0(e.alternate,e);if(l!==null){l.flags&=32767,ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=l}while(e!==null);Oe=6,ne=null}function ad(e,t,l,a,n,u,i,f,h){e.cancelPendingCommit=null;do Yu();while(qe!==0);if((me&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=Vi,Im(e,l,u,i,f,h),e===Ee&&(ne=Ee=null,ce=0),_a=t,El=e,ll=l,Pc=u,er=n,ks=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,z0(Xn,function(){return rd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,n=B.p,B.p=2,i=me,me|=4;try{d0(e,t,l)}finally{me=i,B.p=n,C.T=a}}qe=1,nd(),ud(),id()}}function nd(){if(qe===1){qe=0;var e=El,t=_a,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var a=B.p;B.p=2;var n=me;me|=4;try{qs(t,e);var u=gr,i=Qf(e.containerInfo),f=u.focusedElem,h=u.selectionRange;if(i!==f&&f&&f.ownerDocument&&Xf(f.ownerDocument.documentElement,f)){if(h!==null&&Yi(f)){var A=h.start,M=h.end;if(M===void 0&&(M=A),"selectionStart"in f)f.selectionStart=A,f.selectionEnd=Math.min(M,f.value.length);else{var j=f.ownerDocument||document,R=j&&j.defaultView||window;if(R.getSelection){var O=R.getSelection(),X=f.textContent.length,W=Math.min(h.start,X),xe=h.end===void 0?W:Math.min(h.end,X);!O.extend&&W>xe&&(i=xe,xe=W,W=i);var E=Gf(f,W),v=Gf(f,xe);if(E&&v&&(O.rangeCount!==1||O.anchorNode!==E.node||O.anchorOffset!==E.offset||O.focusNode!==v.node||O.focusOffset!==v.offset)){var z=j.createRange();z.setStart(E.node,E.offset),O.removeAllRanges(),W>xe?(O.addRange(z),O.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),O.addRange(z))}}}}for(j=[],O=f;O=O.parentNode;)O.nodeType===1&&j.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<j.length;f++){var D=j[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Iu=!!hr,gr=hr=null}finally{me=n,B.p=a,C.T=l}}e.current=t,qe=2}}function ud(){if(qe===2){qe=0;var e=El,t=_a,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var a=B.p;B.p=2;var n=me;me|=4;try{js(e,t.alternate,t)}finally{me=n,B.p=a,C.T=l}}qe=3}}function id(){if(qe===4||qe===3){qe=0,Qm();var e=El,t=_a,l=ll,a=ks;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,_a=El=null,cd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sl=null),Si(l),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(qa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,n=B.p,B.p=2,C.T=null;try{for(var u=e.onRecoverableError,i=0;i<a.length;i++){var f=a[i];u(f.value,{componentStack:f.stack})}}finally{C.T=t,B.p=n}}(ll&3)!==0&&Yu(),Bt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===tr?xn++:(xn=0,tr=e):xn=0,Sn(0)}}function cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Yu(){return nd(),ud(),id(),rd()}function rd(){if(qe!==5)return!1;var e=El,t=Pc;Pc=0;var l=Si(ll),a=C.T,n=B.p;try{B.p=32>l?32:l,C.T=null,l=er,er=null;var u=El,i=ll;if(qe=0,_a=El=null,ll=0,(me&6)!==0)throw Error(r(331));var f=me;if(me|=4,Qs(u.current),Ys(u,u.current,i,l),me=f,Sn(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(qa,u)}catch{}return!0}finally{B.p=n,C.T=a,cd(e,t)}}function fd(e,t,l){t=bt(l,t),t=jc(e.stateNode,t,2),e=gl(e,t,2),e!==null&&(Ya(e,2),Bt(e))}function pe(e,t,l){if(e.tag===3)fd(e,e,l);else for(;t!==null;){if(t.tag===3){fd(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sl===null||!Sl.has(a))){e=bt(l,e),l=os(2),a=gl(t,l,2),a!==null&&(ss(l,a,t,e),Ya(a,2),Bt(a));break}}t=t.return}}function nr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new g0;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Wc=!0,n.add(l),e=x0.bind(null,e,t,l),t.then(e,e))}function x0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ee===e&&(ce&l)===l&&(Oe===4||Oe===3&&(ce&62914560)===ce&&300>nt()-Uu?(me&2)===0&&Oa(e,0):Fc|=l,Ra===ce&&(Ra=0)),Bt(e)}function od(e,t){t===0&&(t=lf()),e=Bl(e,t),e!==null&&(Ya(e,t),Bt(e))}function S0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),od(e,l)}function E0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),od(e,l)}function z0(e,t){return vi(e,t)}var Gu=null,Ma=null,ur=!1,Xu=!1,ir=!1,Tl=0;function Bt(e){e!==Ma&&e.next===null&&(Ma===null?Gu=Ma=e:Ma=Ma.next=e),Xu=!0,ur||(ur=!0,A0())}function Sn(e,t){if(!ir&&Xu){ir=!0;do for(var l=!1,a=Gu;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-it(42|e)+1)-1,u&=n&~(i&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,hd(a,u))}else u=ce,u=kn(a,a===Ee?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||La(a,u)||(l=!0,hd(a,u));a=a.next}while(l);ir=!1}}function T0(){sd()}function sd(){Xu=ur=!1;var e=0;Tl!==0&&w0()&&(e=Tl);for(var t=nt(),l=null,a=Gu;a!==null;){var n=a.next,u=dd(a,t);u===0?(a.next=null,l===null?Gu=n:l.next=n,n===null&&(Ma=l)):(l=a,(e!==0||(u&3)!==0)&&(Xu=!0)),a=n}qe!==0&&qe!==5||Sn(e),Tl!==0&&(Tl=0)}function dd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-it(u),f=1<<i,h=n[i];h===-1?((f&l)===0||(f&a)!==0)&&(n[i]=Fm(f,t)):h<=t&&(e.expiredLanes|=f),u&=~f}if(t=Ee,l=ce,l=kn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&yi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||La(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&yi(a),Si(l)){case 2:case 8:l=ef;break;case 32:l=Xn;break;case 268435456:l=tf;break;default:l=Xn}return a=md.bind(null,e),l=vi(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&yi(a),e.callbackPriority=2,e.callbackNode=null,2}function md(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Yu()&&e.callbackNode!==l)return null;var a=ce;return a=kn(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Js(e,a,t),dd(e,nt()),e.callbackNode!=null&&e.callbackNode===l?md.bind(null,e):null)}function hd(e,t){if(Yu())return null;Js(e,t,!0)}function A0(){B0(function(){(me&6)!==0?vi(Pr,T0):sd()})}function cr(){if(Tl===0){var e=ga;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),Tl=e}return Tl}function gd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wn(""+e)}function pd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function R0(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=gd((n[Fe]||null).action),i=a.submitter;i&&(t=(t=i[Fe]||null)?gd(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var f=new eu("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Tl!==0){var h=i?pd(n,i):new FormData(n);_c(l,{pending:!0,data:h,method:n.method,action:u},null,h)}}else typeof u=="function"&&(f.preventDefault(),h=i?pd(n,i):new FormData(n),_c(l,{pending:!0,data:h,method:n.method,action:u},u,h))},currentTarget:n}]})}}for(var rr=0;rr<Zi.length;rr++){var fr=Zi[rr],_0=fr.toLowerCase(),O0=fr[0].toUpperCase()+fr.slice(1);Ot(_0,"on"+O0)}Ot(kf,"onAnimationEnd"),Ot(Kf,"onAnimationIteration"),Ot(Jf,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Zh,"onTransitionRun"),Ot(Vh,"onTransitionStart"),Ot(kh,"onTransitionCancel"),Ot($f,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),jl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jl("onBeforeInput",["compositionend","keypress","textInput","paste"]),jl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));function vd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var f=a[i],h=f.instance,A=f.currentTarget;if(f=f.listener,h!==u&&n.isPropagationStopped())break e;u=f,n.currentTarget=A;try{u(n)}catch(M){au(M)}n.currentTarget=null,u=h}else for(i=0;i<a.length;i++){if(f=a[i],h=f.instance,A=f.currentTarget,f=f.listener,h!==u&&n.isPropagationStopped())break e;u=f,n.currentTarget=A;try{u(n)}catch(M){au(M)}n.currentTarget=null,u=h}}}}function ue(e,t){var l=t[Ei];l===void 0&&(l=t[Ei]=new Set);var a=e+"__bubble";l.has(a)||(yd(t,e,2,!1),l.add(a))}function or(e,t,l){var a=0;t&&(a|=4),yd(l,e,a,t)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Qu]){e[Qu]=!0,of.forEach(function(l){l!=="selectionchange"&&(N0.has(l)||or(l,!1,e),or(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qu]||(t[Qu]=!0,or("selectionchange",!1,t))}}function yd(e,t,l,a){switch(Kd(t)){case 2:var n=ag;break;case 8:n=ng;break;default:n=Rr}l=n.bind(null,t,l,e),n=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function dr(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var f=a.stateNode.containerInfo;if(f===n)break;if(i===4)for(i=a.return;i!==null;){var h=i.tag;if((h===3||h===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;f!==null;){if(i=Il(f),i===null)return;if(h=i.tag,h===5||h===6||h===26||h===27){a=u=i;continue e}f=f.parentNode}}a=a.return}Ef(function(){var A=u,M=Ni(l),j=[];e:{var R=Wf.get(e);if(R!==void 0){var O=eu,X=e;switch(e){case"keypress":if(In(l)===0)break e;case"keydown":case"keyup":O=Eh;break;case"focusin":X="focus",O=wi;break;case"focusout":X="blur",O=wi;break;case"beforeblur":case"afterblur":O=wi;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Ah;break;case kf:case Kf:case Jf:O=mh;break;case $f:O=_h;break;case"scroll":case"scrollend":O=rh;break;case"wheel":O=Nh;break;case"copy":case"cut":case"paste":O=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=_f;break;case"toggle":case"beforetoggle":O=Ch}var W=(t&4)!==0,xe=!W&&(e==="scroll"||e==="scrollend"),E=W?R!==null?R+"Capture":null:R;W=[];for(var v=A,z;v!==null;){var D=v;if(z=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||z===null||E===null||(D=Qa(v,E),D!=null&&W.push(zn(v,D,z))),xe)break;v=v.return}0<W.length&&(R=new O(R,X,null,l,M),j.push({event:R,listeners:W}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",R&&l!==Oi&&(X=l.relatedTarget||l.fromElement)&&(Il(X)||X[Fl]))break e;if((O||R)&&(R=M.window===M?M:(R=M.ownerDocument)?R.defaultView||R.parentWindow:window,O?(X=l.relatedTarget||l.toElement,O=A,X=X?Il(X):null,X!==null&&(xe=m(X),W=X.tag,X!==xe||W!==5&&W!==27&&W!==6)&&(X=null)):(O=null,X=A),O!==X)){if(W=Af,D="onMouseLeave",E="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=_f,D="onPointerLeave",E="onPointerEnter",v="pointer"),xe=O==null?R:Xa(O),z=X==null?R:Xa(X),R=new W(D,v+"leave",O,l,M),R.target=xe,R.relatedTarget=z,D=null,Il(M)===A&&(W=new W(E,v+"enter",X,l,M),W.target=z,W.relatedTarget=xe,D=W),xe=D,O&&X)t:{for(W=M0,E=O,v=X,z=0,D=E;D;D=W(D))z++;D=0;for(var J=v;J;J=W(J))D++;for(;0<z-D;)E=W(E),z--;for(;0<D-z;)v=W(v),D--;for(;z--;){if(E===v||v!==null&&E===v.alternate){W=E;break t}E=W(E),v=W(v)}W=null}else W=null;O!==null&&bd(j,R,O,W,!1),X!==null&&xe!==null&&bd(j,xe,X,W,!0)}}e:{if(R=A?Xa(A):window,O=R.nodeName&&R.nodeName.toLowerCase(),O==="select"||O==="input"&&R.type==="file")var se=wf;else if(jf(R))if(Hf)se=Gh;else{se=Lh;var k=qh}else O=R.nodeName,!O||O.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&_i(A.elementType)&&(se=wf):se=Yh;if(se&&(se=se(e,A))){Uf(j,se,l,M);break e}k&&k(e,R,A),e==="focusout"&&A&&R.type==="number"&&A.memoizedProps.value!=null&&Ri(R,"number",R.value)}switch(k=A?Xa(A):window,e){case"focusin":(jf(k)||k.contentEditable==="true")&&(ca=k,Gi=A,Fa=null);break;case"focusout":Fa=Gi=ca=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Zf(j,l,M);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":Zf(j,l,M)}var le;if(Bi)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ia?Cf(e,l)&&(re="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(re="onCompositionStart");re&&(Of&&l.locale!=="ko"&&(ia||re!=="onCompositionStart"?re==="onCompositionEnd"&&ia&&(le=zf()):(rl=M,Di="value"in rl?rl.value:rl.textContent,ia=!0)),k=Zu(A,re),0<k.length&&(re=new Rf(re,e,null,l,M),j.push({event:re,listeners:k}),le?re.data=le:(le=Df(l),le!==null&&(re.data=le)))),(le=jh?Uh(e,l):wh(e,l))&&(re=Zu(A,"onBeforeInput"),0<re.length&&(k=new Rf("onBeforeInput","beforeinput",null,l,M),j.push({event:k,listeners:re}),k.data=le)),R0(j,e,A,l,M)}vd(j,t)})}function zn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Zu(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Qa(e,l),n!=null&&a.unshift(zn(e,n,u)),n=Qa(e,t),n!=null&&a.push(zn(e,n,u))),e.tag===3)return a;e=e.return}return[]}function M0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bd(e,t,l,a,n){for(var u=t._reactName,i=[];l!==null&&l!==a;){var f=l,h=f.alternate,A=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||A===null||(h=A,n?(A=Qa(l,u),A!=null&&i.unshift(zn(l,A,h))):n||(A=Qa(l,u),A!=null&&i.push(zn(l,A,h)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var C0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function xd(e){return(typeof e=="string"?e:""+e).replace(C0,`
`).replace(D0,"")}function Sd(e,t){return t=xd(t),xd(e)===t}function be(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||aa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&aa(e,""+a);break;case"className":Jn(e,"class",a);break;case"tabIndex":Jn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,l,a);break;case"style":xf(e,a,u);break;case"data":if(t!=="object"){Jn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Wn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&be(e,t,"name",n.name,n,null),be(e,t,"formEncType",n.formEncType,n,null),be(e,t,"formMethod",n.formMethod,n,null),be(e,t,"formTarget",n.formTarget,n,null)):(be(e,t,"encType",n.encType,n,null),be(e,t,"method",n.method,n,null),be(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Wn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Wn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Kn(e,"popover",a);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Kn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ih.get(l)||l,Kn(e,l,a))}}function mr(e,t,l,a,n,u){switch(l){case"style":xf(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof a=="string"?aa(e,a):(typeof a=="number"||typeof a=="bigint")&&aa(e,""+a);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[Fe]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Kn(e,l,a)}}}function Ve(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:be(e,t,u,i,l,null)}}n&&be(e,t,"srcSet",l.srcSet,l,null),a&&be(e,t,"src",l.src,l,null);return;case"input":ue("invalid",e);var f=u=i=n=null,h=null,A=null;for(a in l)if(l.hasOwnProperty(a)){var M=l[a];if(M!=null)switch(a){case"name":n=M;break;case"type":i=M;break;case"checked":h=M;break;case"defaultChecked":A=M;break;case"value":u=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:be(e,t,a,M,l,null)}}pf(e,u,f,h,A,i,n,!1);return;case"select":ue("invalid",e),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":u=f;break;case"defaultValue":i=f;break;case"multiple":a=f;default:be(e,t,n,f,l,null)}t=u,l=i,e.multiple=!!a,t!=null?la(e,!!a,t,!1):l!=null&&la(e,!!a,l,!0);return;case"textarea":ue("invalid",e),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":a=f;break;case"defaultValue":n=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:be(e,t,i,f,l,null)}yf(e,a,n,u);return;case"option":for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!=null)&&(h==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":be(e,t,h,a,l,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(a=0;a<En.length;a++)ue(En[a],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in l)if(l.hasOwnProperty(A)&&(a=l[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:be(e,t,A,a,l,null)}return;default:if(_i(t)){for(M in l)l.hasOwnProperty(M)&&(a=l[M],a!==void 0&&mr(e,t,M,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&be(e,t,f,a,l,null))}function j0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,f=null,h=null,A=null,M=null;for(O in l){var j=l[O];if(l.hasOwnProperty(O)&&j!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":h=j;default:a.hasOwnProperty(O)||be(e,t,O,null,a,j)}}for(var R in a){var O=a[R];if(j=l[R],a.hasOwnProperty(R)&&(O!=null||j!=null))switch(R){case"type":u=O;break;case"name":n=O;break;case"checked":A=O;break;case"defaultChecked":M=O;break;case"value":i=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==j&&be(e,t,R,O,a,j)}}Ai(e,i,f,h,A,M,u,n);return;case"select":O=i=f=R=null;for(u in l)if(h=l[u],l.hasOwnProperty(u)&&h!=null)switch(u){case"value":break;case"multiple":O=h;default:a.hasOwnProperty(u)||be(e,t,u,null,a,h)}for(n in a)if(u=a[n],h=l[n],a.hasOwnProperty(n)&&(u!=null||h!=null))switch(n){case"value":R=u;break;case"defaultValue":f=u;break;case"multiple":i=u;default:u!==h&&be(e,t,n,u,a,h)}t=f,l=i,a=O,R!=null?la(e,!!l,R,!1):!!a!=!!l&&(t!=null?la(e,!!l,t,!0):la(e,!!l,l?[]:"",!1));return;case"textarea":O=R=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:be(e,t,f,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":R=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==u&&be(e,t,i,n,a,u)}vf(e,R,O);return;case"option":for(var X in l)R=l[X],l.hasOwnProperty(X)&&R!=null&&!a.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:be(e,t,X,null,a,R));for(h in a)R=a[h],O=l[h],a.hasOwnProperty(h)&&R!==O&&(R!=null||O!=null)&&(h==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":be(e,t,h,R,a,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in l)R=l[W],l.hasOwnProperty(W)&&R!=null&&!a.hasOwnProperty(W)&&be(e,t,W,null,a,R);for(A in a)if(R=a[A],O=l[A],a.hasOwnProperty(A)&&R!==O&&(R!=null||O!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:be(e,t,A,R,a,O)}return;default:if(_i(t)){for(var xe in l)R=l[xe],l.hasOwnProperty(xe)&&R!==void 0&&!a.hasOwnProperty(xe)&&mr(e,t,xe,void 0,a,R);for(M in a)R=a[M],O=l[M],!a.hasOwnProperty(M)||R===O||R===void 0&&O===void 0||mr(e,t,M,R,a,O);return}}for(var E in l)R=l[E],l.hasOwnProperty(E)&&R!=null&&!a.hasOwnProperty(E)&&be(e,t,E,null,a,R);for(j in a)R=a[j],O=l[j],!a.hasOwnProperty(j)||R===O||R==null&&O==null||be(e,t,j,R,a,O)}function Ed(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,f=n.duration;if(u&&f&&Ed(i)){for(i=0,f=n.responseEnd,a+=1;a<l.length;a++){var h=l[a],A=h.startTime;if(A>f)break;var M=h.transferSize,j=h.initiatorType;M&&Ed(j)&&(h=h.responseEnd,i+=M*(h<f?1:(f-A)/(h-A)))}if(--a,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hr=null,gr=null;function Vu(e){return e.nodeType===9?e:e.ownerDocument}function zd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Td(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vr=null;function w0(){var e=window.event;return e&&e.type==="popstate"?e===vr?!1:(vr=e,!0):(vr=null,!1)}var Ad=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(q0)}:Ad;function q0(e){setTimeout(function(){throw e})}function Al(e){return e==="head"}function _d(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ua(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Tn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Tn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,f=u.nodeName;u[Ga]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&Tn(e.ownerDocument.body);l=n}while(l);Ua(t)}function Od(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function yr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":yr(l),zi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function L0(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ga])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Y0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Tt(e.nextSibling),e===null))return null;return e}function Nd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function br(e){return e.data==="$?"||e.data==="$~"}function xr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function G0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Sr=null;function Md(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Tt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Dd(e,t,l){switch(t=Vu(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Tn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zi(e)}var At=new Map,jd=new Set;function ku(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var al=B.d;B.d={f:X0,r:Q0,D:Z0,C:V0,L:k0,m:K0,X:$0,S:J0,M:W0};function X0(){var e=al.f(),t=Bu();return e||t}function Q0(e){var t=Pl(e);t!==null&&t.tag===5&&t.type==="form"?Wo(t):al.r(e)}var Ca=typeof document>"u"?null:document;function Ud(e,t,l){var a=Ca;if(a&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),jd.has(n)||(jd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ve(t,"link",e),Le(t),a.head.appendChild(t)))}}function Z0(e){al.D(e),Ud("dns-prefetch",e,null)}function V0(e,t){al.C(e,t),Ud("preconnect",e,t)}function k0(e,t,l){al.L(e,t,l);var a=Ca;if(a&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+vt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+vt(l.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var u=n;switch(t){case"style":u=Da(e);break;case"script":u=ja(e)}At.has(u)||(e=x({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),At.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(An(u))||t==="script"&&a.querySelector(Rn(u))||(t=a.createElement("link"),Ve(t,"link",e),Le(t),a.head.appendChild(t)))}}function K0(e,t){al.m(e,t);var l=Ca;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(a)+'"][href="'+vt(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ja(e)}if(!At.has(u)&&(e=x({rel:"modulepreload",href:e},t),At.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Rn(u)))return}a=l.createElement("link"),Ve(a,"link",e),Le(a),l.head.appendChild(a)}}}function J0(e,t,l){al.S(e,t,l);var a=Ca;if(a&&e){var n=ea(a).hoistableStyles,u=Da(e);t=t||"default";var i=n.get(u);if(!i){var f={loading:0,preload:null};if(i=a.querySelector(An(u)))f.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},l),(l=At.get(u))&&Er(e,l);var h=i=a.createElement("link");Le(h),Ve(h,"link",e),h._p=new Promise(function(A,M){h.onload=A,h.onerror=M}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ku(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:f},n.set(u,i)}}}function $0(e,t){al.X(e,t);var l=Ca;if(l&&e){var a=ea(l).hoistableScripts,n=ja(e),u=a.get(n);u||(u=l.querySelector(Rn(n)),u||(e=x({src:e,async:!0},t),(t=At.get(n))&&zr(e,t),u=l.createElement("script"),Le(u),Ve(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function W0(e,t){al.M(e,t);var l=Ca;if(l&&e){var a=ea(l).hoistableScripts,n=ja(e),u=a.get(n);u||(u=l.querySelector(Rn(n)),u||(e=x({src:e,async:!0,type:"module"},t),(t=At.get(n))&&zr(e,t),u=l.createElement("script"),Le(u),Ve(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function wd(e,t,l,a){var n=(n=ae.current)?ku(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Da(l.href),l=ea(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Da(l.href);var u=ea(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(An(e)))&&!u._p&&(i.instance=u,i.state.loading=5),At.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},At.set(e,l),u||F0(n,e,l,i.state))),t&&a===null)throw Error(r(528,""));return i}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ja(l),l=ea(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Da(e){return'href="'+vt(e)+'"'}function An(e){return'link[rel="stylesheet"]['+e+"]"}function Hd(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function F0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ve(t,"link",l),Le(t),e.head.appendChild(t))}function ja(e){return'[src="'+vt(e)+'"]'}function Rn(e){return"script[async]"+e}function Bd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+vt(l.href)+'"]');if(a)return t.instance=a,Le(a),a;var n=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Le(a),Ve(a,"style",n),Ku(a,l.precedence,e),t.instance=a;case"stylesheet":n=Da(l.href);var u=e.querySelector(An(n));if(u)return t.state.loading|=4,t.instance=u,Le(u),u;a=Hd(l),(n=At.get(n))&&Er(a,n),u=(e.ownerDocument||e).createElement("link"),Le(u);var i=u;return i._p=new Promise(function(f,h){i.onload=f,i.onerror=h}),Ve(u,"link",a),t.state.loading|=4,Ku(u,l.precedence,e),t.instance=u;case"script":return u=ja(l.src),(n=e.querySelector(Rn(u)))?(t.instance=n,Le(n),n):(a=l,(n=At.get(u))&&(a=x({},l),zr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Le(n),Ve(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ku(a,l.precedence,e));return t.instance}function Ku(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var f=a[i];if(f.dataset.precedence===t)u=f;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Er(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ju=null;function qd(e,t,l){if(Ju===null){var a=new Map,n=Ju=new Map;n.set(l,a)}else n=Ju,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[Ga]||u[Ge]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var f=a.get(i);f?f.push(u):a.set(i,[u])}}return a}function Ld(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function I0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Yd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function P0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Da(a.href),u=t.querySelector(An(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$u.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,Le(u);return}u=t.ownerDocument||t,a=Hd(a),(n=At.get(n))&&Er(a,n),u=u.createElement("link"),Le(u);var i=u;i._p=new Promise(function(f,h){i.onload=f,i.onerror=h}),Ve(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=$u.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Tr=0;function eg(e,t){return e.stylesheets&&e.count===0&&Fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Fu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Tr===0&&(Tr=62500*U0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Tr?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function $u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wu=null;function Fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wu=new Map,t.forEach(tg,e),Wu=null,$u.call(e))}function tg(e,t){if(!(t.state.loading&4)){var l=Wu.get(e);if(l)var a=l.get(null);else{l=new Map,Wu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=$u.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var _n={$$typeof:L,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function lg(e,t,l,a,n,u,i,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.hiddenUpdates=bi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Gd(e,t,l,a,n,u,i,f,h,A,M,j){return e=new lg(e,t,l,i,h,A,M,j,f),t=1,u===!0&&(t|=24),u=rt(3,null,null,t),e.current=u,u.stateNode=e,t=ac(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},cc(u),e}function Xd(e){return e?(e=oa,e):oa}function Qd(e,t,l,a,n,u){n=Xd(n),a.context===null?a.context=n:a.pendingContext=n,a=hl(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=gl(e,a,t),l!==null&&(at(l,e,t),nn(l,e,t))}function Zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ar(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function Vd(e){if(e.tag===13||e.tag===31){var t=Bl(e,67108864);t!==null&&at(t,e,67108864),Ar(e,67108864)}}function kd(e){if(e.tag===13||e.tag===31){var t=mt();t=xi(t);var l=Bl(e,t);l!==null&&at(l,e,t),Ar(e,t)}}var Iu=!0;function ag(e,t,l,a){var n=C.T;C.T=null;var u=B.p;try{B.p=2,Rr(e,t,l,a)}finally{B.p=u,C.T=n}}function ng(e,t,l,a){var n=C.T;C.T=null;var u=B.p;try{B.p=8,Rr(e,t,l,a)}finally{B.p=u,C.T=n}}function Rr(e,t,l,a){if(Iu){var n=_r(a);if(n===null)dr(e,t,a,Pu,l),Jd(e,a);else if(ig(n,e,t,l,a))a.stopPropagation();else if(Jd(e,a),t&4&&-1<ug.indexOf(e)){for(;n!==null;){var u=Pl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Dl(u.pendingLanes);if(i!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;i;){var h=1<<31-it(i);f.entanglements[1]|=h,i&=~h}Bt(u),(me&6)===0&&(wu=nt()+500,Sn(0))}}break;case 31:case 13:f=Bl(u,2),f!==null&&at(f,u,2),Bu(),Ar(u,2)}if(u=_r(a),u===null&&dr(e,t,a,Pu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else dr(e,t,a,null,l)}}function _r(e){return e=Ni(e),Or(e)}var Pu=null;function Or(e){if(Pu=null,e=Il(e),e!==null){var t=m(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=S(t),e!==null)return e;e=null}else if(l===31){if(e=_(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pu=e,null}function Kd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zm()){case Pr:return 2;case ef:return 8;case Xn:case Vm:return 32;case tf:return 268435456;default:return 32}default:return 32}}var Nr=!1,Rl=null,_l=null,Ol=null,On=new Map,Nn=new Map,Nl=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jd(e,t){switch(e){case"focusin":case"focusout":Rl=null;break;case"dragenter":case"dragleave":_l=null;break;case"mouseover":case"mouseout":Ol=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function Mn(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Pl(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function ig(e,t,l,a,n){switch(t){case"focusin":return Rl=Mn(Rl,e,t,l,a,n),!0;case"dragenter":return _l=Mn(_l,e,t,l,a,n),!0;case"mouseover":return Ol=Mn(Ol,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return On.set(u,Mn(On.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Nn.set(u,Mn(Nn.get(u)||null,e,t,l,a,n)),!0}return!1}function $d(e){var t=Il(e.target);if(t!==null){var l=m(t);if(l!==null){if(t=l.tag,t===13){if(t=S(l),t!==null){e.blockedOn=t,rf(e.priority,function(){kd(l)});return}}else if(t===31){if(t=_(l),t!==null){e.blockedOn=t,rf(e.priority,function(){kd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=_r(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Oi=a,l.target.dispatchEvent(a),Oi=null}else return t=Pl(l),t!==null&&Vd(t),e.blockedOn=l,!1;t.shift()}return!0}function Wd(e,t,l){ei(e)&&l.delete(t)}function cg(){Nr=!1,Rl!==null&&ei(Rl)&&(Rl=null),_l!==null&&ei(_l)&&(_l=null),Ol!==null&&ei(Ol)&&(Ol=null),On.forEach(Wd),Nn.forEach(Wd)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Nr||(Nr=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,cg)))}var li=null;function Fd(e){li!==e&&(li=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){li===e&&(li=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Or(a||l)===null)continue;break}var u=Pl(l);u!==null&&(e.splice(t,3),t-=3,_c(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ua(e){function t(h){return ti(h,e)}Rl!==null&&ti(Rl,e),_l!==null&&ti(_l,e),Ol!==null&&ti(Ol,e),On.forEach(t),Nn.forEach(t);for(var l=0;l<Nl.length;l++){var a=Nl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Nl.length&&(l=Nl[0],l.blockedOn===null);)$d(l),l.blockedOn===null&&Nl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Fe]||null;if(typeof u=="function")i||Fd(l);else if(i){var f=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Fe]||null)f=i.formAction;else if(Or(n)!==null)continue}else f=i.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Fd(l)}}}function Id(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Mr(e){this._internalRoot=e}ai.prototype.render=Mr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,a=mt();Qd(l,a,e,t,null,null)},ai.prototype.unmount=Mr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qd(e.current,2,null,e,null,null),Bu(),t[Fl]=null}};function ai(e){this._internalRoot=e}ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=cf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Nl.length&&t!==0&&t<Nl[l].priority;l++);Nl.splice(l,0,e),l===0&&$d(e)}};var Pd=o.version;if(Pd!=="19.2.4")throw Error(r(527,Pd,"19.2.4"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var rg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{qa=ni.inject(rg),ut=ni}catch{}}return Dn.createRoot=function(e,t){if(!d(e))throw Error(r(299));var l=!1,a="",n=is,u=cs,i=rs;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Gd(e,1,!1,null,null,l,a,null,n,u,i,Id),e[Fl]=t.current,sr(e),new Mr(t)},Dn.hydrateRoot=function(e,t,l){if(!d(e))throw Error(r(299));var a=!1,n="",u=is,i=cs,f=rs,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),t=Gd(e,1,!0,t,l??null,a,n,h,u,i,f,Id),t.context=Xd(null),l=t.current,a=mt(),a=xi(a),n=hl(a),n.callback=null,gl(l,n,a),l=a,t.current.lanes=l,Ya(t,l),Bt(t),e[Fl]=t.current,sr(e),new ai(t)},Dn.version="19.2.4",Dn}var fm;function yg(){if(fm)return jr.exports;fm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),jr.exports=vg(),jr.exports}var bg=yg();var om="popstate";function sm(c){return typeof c=="object"&&c!=null&&"pathname"in c&&"search"in c&&"hash"in c&&"state"in c&&"key"in c}function xg(c={}){function o(d,m){let{pathname:S="/",search:_="",hash:b=""}=Wl(d.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Gr("",{pathname:S,search:_,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function s(d,m){let S=d.document.querySelector("base"),_="";if(S&&S.getAttribute("href")){let b=d.location.href,g=b.indexOf("#");_=g===-1?b:b.slice(0,g)}return _+"#"+(typeof m=="string"?m:Hn(m))}function r(d,m){Ct(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return Eg(o,s,r,c)}function Re(c,o){if(c===!1||c===null||typeof c>"u")throw new Error(o)}function Ct(c,o){if(!c){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Sg(){return Math.random().toString(36).substring(2,10)}function dm(c,o){return{usr:c.state,key:c.key,idx:o,masked:c.unstable_mask?{pathname:c.pathname,search:c.search,hash:c.hash}:void 0}}function Gr(c,o,s=null,r,d){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof o=="string"?Wl(o):o,state:s,key:o&&o.key||r||Sg(),unstable_mask:d}}function Hn({pathname:c="/",search:o="",hash:s=""}){return o&&o!=="?"&&(c+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(c+=s.charAt(0)==="#"?s:"#"+s),c}function Wl(c){let o={};if(c){let s=c.indexOf("#");s>=0&&(o.hash=c.substring(s),c=c.substring(0,s));let r=c.indexOf("?");r>=0&&(o.search=c.substring(r),c=c.substring(0,r)),c&&(o.pathname=c)}return o}function Eg(c,o,s,r={}){let{window:d=document.defaultView,v5Compat:m=!1}=r,S=d.history,_="POP",b=null,g=N();g==null&&(g=0,S.replaceState({...S.state,idx:g},""));function N(){return(S.state||{idx:null}).idx}function x(){_="POP";let H=N(),$=H==null?null:H-g;g=H,b&&b({action:_,location:Y.location,delta:$})}function w(H,$){_="PUSH";let Z=sm(H)?H:Gr(Y.location,H,$);s&&s(Z,H),g=N()+1;let L=dm(Z,g),ie=Y.createHref(Z.unstable_mask||Z);try{S.pushState(L,"",ie)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(ie)}m&&b&&b({action:_,location:Y.location,delta:1})}function Q(H,$){_="REPLACE";let Z=sm(H)?H:Gr(Y.location,H,$);s&&s(Z,H),g=N();let L=dm(Z,g),ie=Y.createHref(Z.unstable_mask||Z);S.replaceState(L,"",ie),m&&b&&b({action:_,location:Y.location,delta:0})}function G(H){return zg(H)}let Y={get action(){return _},get location(){return c(d,S)},listen(H){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(om,x),b=H,()=>{d.removeEventListener(om,x),b=null}},createHref(H){return o(d,H)},createURL:G,encodeLocation(H){let $=G(H);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:w,replace:Q,go(H){return S.go(H)}};return Y}function zg(c,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Re(s,"No window.location.(origin|href) available to create URL");let r=typeof c=="string"?c:Hn(c);return r=r.replace(/ $/,"%20"),!o&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function Sm(c,o,s="/"){return Tg(c,o,s,!1)}function Tg(c,o,s,r){let d=typeof o=="string"?Wl(o):o,m=nl(d.pathname||"/",s);if(m==null)return null;let S=Em(c);Ag(S);let _=null;for(let b=0;_==null&&b<S.length;++b){let g=Hg(m);_=Ug(S[b],g,r)}return _}function Em(c,o=[],s=[],r="",d=!1){let m=(S,_,b=d,g)=>{let N={relativePath:g===void 0?S.path||"":g,caseSensitive:S.caseSensitive===!0,childrenIndex:_,route:S};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(r)&&b)return;Re(N.relativePath.startsWith(r),`Absolute route path "${N.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(r.length)}let x=qt([r,N.relativePath]),w=s.concat(N);S.children&&S.children.length>0&&(Re(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Em(S.children,o,w,x,b)),!(S.path==null&&!S.index)&&o.push({path:x,score:Dg(x,S.index),routesMeta:w})};return c.forEach((S,_)=>{if(S.path===""||!S.path?.includes("?"))m(S,_);else for(let b of zm(S.path))m(S,_,!0,b)}),o}function zm(c){let o=c.split("/");if(o.length===0)return[];let[s,...r]=o,d=s.endsWith("?"),m=s.replace(/\?$/,"");if(r.length===0)return d?[m,""]:[m];let S=zm(r.join("/")),_=[];return _.push(...S.map(b=>b===""?m:[m,b].join("/"))),d&&_.push(...S),_.map(b=>c.startsWith("/")&&b===""?"/":b)}function Ag(c){c.sort((o,s)=>o.score!==s.score?s.score-o.score:jg(o.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var Rg=/^:[\w-]+$/,_g=3,Og=2,Ng=1,Mg=10,Cg=-2,mm=c=>c==="*";function Dg(c,o){let s=c.split("/"),r=s.length;return s.some(mm)&&(r+=Cg),o&&(r+=Og),s.filter(d=>!mm(d)).reduce((d,m)=>d+(Rg.test(m)?_g:m===""?Ng:Mg),r)}function jg(c,o){return c.length===o.length&&c.slice(0,-1).every((r,d)=>r===o[d])?c[c.length-1]-o[o.length-1]:0}function Ug(c,o,s=!1){let{routesMeta:r}=c,d={},m="/",S=[];for(let _=0;_<r.length;++_){let b=r[_],g=_===r.length-1,N=m==="/"?o:o.slice(m.length)||"/",x=fi({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},N),w=b.route;if(!x&&g&&s&&!r[r.length-1].route.index&&(x=fi({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},N)),!x)return null;Object.assign(d,x.params),S.push({params:d,pathname:qt([m,x.pathname]),pathnameBase:Yg(qt([m,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(m=qt([m,x.pathnameBase]))}return S}function fi(c,o){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[s,r]=wg(c.path,c.caseSensitive,c.end),d=o.match(s);if(!d)return null;let m=d[0],S=m.replace(/(.)\/+$/,"$1"),_=d.slice(1);return{params:r.reduce((g,{paramName:N,isOptional:x},w)=>{if(N==="*"){let G=_[w]||"";S=m.slice(0,m.length-G.length).replace(/(.)\/+$/,"$1")}const Q=_[w];return x&&!Q?g[N]=void 0:g[N]=(Q||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:S,pattern:c}}function wg(c,o=!1,s=!0){Ct(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let r=[],d="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,_,b,g,N)=>{if(r.push({paramName:_,isOptional:b!=null}),b){let x=N.charAt(g+S.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(r.push({paramName:"*"}),d+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":c!==""&&c!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),r]}function Hg(c){try{return c.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ct(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),c}}function nl(c,o){if(o==="/")return c;if(!c.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,r=c.charAt(s);return r&&r!=="/"?null:c.slice(s)||"/"}var Bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function qg(c,o="/"){let{pathname:s,search:r="",hash:d=""}=typeof c=="string"?Wl(c):c,m;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?m=hm(s.substring(1),"/"):m=hm(s,o)):m=o,{pathname:m,search:Gg(r),hash:Xg(d)}}function hm(c,o){let s=o.replace(/\/+$/,"").split("/");return c.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Br(c,o,s,r){return`Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Lg(c){return c.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Tm(c){let o=Lg(c);return o.map((s,r)=>r===o.length-1?s.pathname:s.pathnameBase)}function Zr(c,o,s,r=!1){let d;typeof c=="string"?d=Wl(c):(d={...c},Re(!d.pathname||!d.pathname.includes("?"),Br("?","pathname","search",d)),Re(!d.pathname||!d.pathname.includes("#"),Br("#","pathname","hash",d)),Re(!d.search||!d.search.includes("#"),Br("#","search","hash",d)));let m=c===""||d.pathname==="",S=m?"/":d.pathname,_;if(S==null)_=s;else{let x=o.length-1;if(!r&&S.startsWith("..")){let w=S.split("/");for(;w[0]==="..";)w.shift(),x-=1;d.pathname=w.join("/")}_=x>=0?o[x]:"/"}let b=qg(d,_),g=S&&S!=="/"&&S.endsWith("/"),N=(m||S===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(g||N)&&(b.pathname+="/"),b}var qt=c=>c.join("/").replace(/\/\/+/g,"/"),Yg=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),Gg=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,Xg=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c,Qg=class{constructor(c,o,s,r=!1){this.status=c,this.statusText=o||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Zg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}function Vg(c){return c.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Am=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rm(c,o){let s=c;if(typeof s!="string"||!Bg.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,d=!1;if(Am)try{let m=new URL(window.location.href),S=s.startsWith("//")?new URL(m.protocol+s):new URL(s),_=nl(S.pathname,o);S.origin===m.origin&&_!=null?s=_+S.search+S.hash:d=!0}catch{Ct(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _m=["POST","PUT","PATCH","DELETE"];new Set(_m);var kg=["GET",..._m];new Set(kg);var Ha=T.createContext(null);Ha.displayName="DataRouter";var oi=T.createContext(null);oi.displayName="DataRouterState";var Kg=T.createContext(!1),Om=T.createContext({isTransitioning:!1});Om.displayName="ViewTransition";var Jg=T.createContext(new Map);Jg.displayName="Fetchers";var $g=T.createContext(null);$g.displayName="Await";var Rt=T.createContext(null);Rt.displayName="Navigation";var Bn=T.createContext(null);Bn.displayName="Location";var Lt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Vr=T.createContext(null);Vr.displayName="RouteError";var Nm="REACT_ROUTER_ERROR",Wg="REDIRECT",Fg="ROUTE_ERROR_RESPONSE";function Ig(c){if(c.startsWith(`${Nm}:${Wg}:{`))try{let o=JSON.parse(c.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Pg(c){if(c.startsWith(`${Nm}:${Fg}:{`))try{let o=JSON.parse(c.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Qg(o.status,o.statusText,o.data)}catch{}}function ep(c,{relative:o}={}){Re(qn(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=T.useContext(Rt),{hash:d,pathname:m,search:S}=Ln(c,{relative:o}),_=m;return s!=="/"&&(_=m==="/"?s:qt([s,m])),r.createHref({pathname:_,search:S,hash:d})}function qn(){return T.useContext(Bn)!=null}function ul(){return Re(qn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Bn).location}var Mm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cm(c){T.useContext(Rt).static||T.useLayoutEffect(c)}function kr(){let{isDataRoute:c}=T.useContext(Lt);return c?hp():tp()}function tp(){Re(qn(),"useNavigate() may be used only in the context of a <Router> component.");let c=T.useContext(Ha),{basename:o,navigator:s}=T.useContext(Rt),{matches:r}=T.useContext(Lt),{pathname:d}=ul(),m=JSON.stringify(Tm(r)),S=T.useRef(!1);return Cm(()=>{S.current=!0}),T.useCallback((b,g={})=>{if(Ct(S.current,Mm),!S.current)return;if(typeof b=="number"){s.go(b);return}let N=Zr(b,JSON.parse(m),d,g.relative==="path");c==null&&o!=="/"&&(N.pathname=N.pathname==="/"?o:qt([o,N.pathname])),(g.replace?s.replace:s.push)(N,g.state,g)},[o,s,m,d,c])}T.createContext(null);function lp(){let{matches:c}=T.useContext(Lt),o=c[c.length-1];return o?o.params:{}}function Ln(c,{relative:o}={}){let{matches:s}=T.useContext(Lt),{pathname:r}=ul(),d=JSON.stringify(Tm(s));return T.useMemo(()=>Zr(c,JSON.parse(d),r,o==="path"),[c,d,r,o])}function ap(c,o){return Dm(c,o)}function Dm(c,o,s){Re(qn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=T.useContext(Rt),{matches:d}=T.useContext(Lt),m=d[d.length-1],S=m?m.params:{},_=m?m.pathname:"/",b=m?m.pathnameBase:"/",g=m&&m.route;{let H=g&&g.path||"";Um(_,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let N=ul(),x;if(o){let H=typeof o=="string"?Wl(o):o;Re(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),x=H}else x=N;let w=x.pathname||"/",Q=w;if(b!=="/"){let H=b.replace(/^\//,"").split("/");Q="/"+w.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=Sm(c,{pathname:Q});Ct(g||G!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Ct(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=rp(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},S,H.params),pathname:qt([b,r.encodeLocation?r.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:qt([b,r.encodeLocation?r.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),d,s);return o&&Y?T.createElement(Bn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},Y):Y}function np(){let c=mp(),o=Zg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),s=c instanceof Error?c.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},m={padding:"2px 4px",backgroundColor:r},S=null;return console.error("Error handled by React Router default ErrorBoundary:",c),S=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},o),s?T.createElement("pre",{style:d},s):null,S)}var up=T.createElement(np,null),jm=class extends T.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,o){return o.location!==c.location||o.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:o.error,location:o.location,revalidation:c.revalidation||o.revalidation}}componentDidCatch(c,o){this.props.onError?this.props.onError(c,o):console.error("React Router caught the following error during render",c)}render(){let c=this.state.error;if(this.context&&typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){const s=Pg(c.digest);s&&(c=s)}let o=c!==void 0?T.createElement(Lt.Provider,{value:this.props.routeContext},T.createElement(Vr.Provider,{value:c,children:this.props.component})):this.props.children;return this.context?T.createElement(ip,{error:c},o):o}};jm.contextType=Kg;var qr=new WeakMap;function ip({children:c,error:o}){let{basename:s}=T.useContext(Rt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let r=Ig(o.digest);if(r){let d=qr.get(o);if(d)throw d;let m=Rm(r.location,s);if(Am&&!qr.get(o))if(m.isExternal||r.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const S=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:r.replace}));throw qr.set(o,S),S}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return c}function cp({routeContext:c,match:o,children:s}){let r=T.useContext(Ha);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),T.createElement(Lt.Provider,{value:c},s)}function rp(c,o=[],s){let r=s?.state;if(c==null){if(!r)return null;if(r.errors)c=r.matches;else if(o.length===0&&!r.initialized&&r.matches.length>0)c=r.matches;else return null}let d=c,m=r?.errors;if(m!=null){let N=d.findIndex(x=>x.route.id&&m?.[x.route.id]!==void 0);Re(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,N+1))}let S=!1,_=-1;if(s&&r){S=r.renderFallback;for(let N=0;N<d.length;N++){let x=d[N];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(_=N),x.route.id){let{loaderData:w,errors:Q}=r,G=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!Q||Q[x.route.id]===void 0);if(x.route.lazy||G){s.isStatic&&(S=!0),_>=0?d=d.slice(0,_+1):d=[d[0]];break}}}}let b=s?.onError,g=r&&b?(N,x)=>{b(N,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Vg(r.matches),errorInfo:x})}:void 0;return d.reduceRight((N,x,w)=>{let Q,G=!1,Y=null,H=null;r&&(Q=m&&x.route.id?m[x.route.id]:void 0,Y=x.route.errorElement||up,S&&(_<0&&w===0?(Um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,H=null):_===w&&(G=!0,H=x.route.hydrateFallbackElement||null)));let $=o.concat(d.slice(0,w+1)),Z=()=>{let L;return Q?L=Y:G?L=H:x.route.Component?L=T.createElement(x.route.Component,null):x.route.element?L=x.route.element:L=N,T.createElement(cp,{match:x,routeContext:{outlet:N,matches:$,isDataRoute:r!=null},children:L})};return r&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?T.createElement(jm,{location:r.location,revalidation:r.revalidation,component:Y,error:Q,children:Z(),routeContext:{outlet:null,matches:$,isDataRoute:!0},onError:g}):Z()},null)}function Kr(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fp(c){let o=T.useContext(Ha);return Re(o,Kr(c)),o}function op(c){let o=T.useContext(oi);return Re(o,Kr(c)),o}function sp(c){let o=T.useContext(Lt);return Re(o,Kr(c)),o}function Jr(c){let o=sp(c),s=o.matches[o.matches.length-1];return Re(s.route.id,`${c} can only be used on routes that contain a unique "id"`),s.route.id}function dp(){return Jr("useRouteId")}function mp(){let c=T.useContext(Vr),o=op("useRouteError"),s=Jr("useRouteError");return c!==void 0?c:o.errors?.[s]}function hp(){let{router:c}=fp("useNavigate"),o=Jr("useNavigate"),s=T.useRef(!1);return Cm(()=>{s.current=!0}),T.useCallback(async(d,m={})=>{Ct(s.current,Mm),s.current&&(typeof d=="number"?await c.navigate(d):await c.navigate(d,{fromRouteId:o,...m}))},[c,o])}var gm={};function Um(c,o,s){!o&&!gm[c]&&(gm[c]=!0,Ct(!1,s))}T.memo(gp);function gp({routes:c,future:o,state:s,isStatic:r,onError:d}){return Dm(c,void 0,{state:s,isStatic:r,onError:d})}function Un(c){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pp({basename:c="/",children:o=null,location:s,navigationType:r="POP",navigator:d,static:m=!1,unstable_useTransitions:S}){Re(!qn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let _=c.replace(/^\/*/,"/"),b=T.useMemo(()=>({basename:_,navigator:d,static:m,unstable_useTransitions:S,future:{}}),[_,d,m,S]);typeof s=="string"&&(s=Wl(s));let{pathname:g="/",search:N="",hash:x="",state:w=null,key:Q="default",unstable_mask:G}=s,Y=T.useMemo(()=>{let H=nl(g,_);return H==null?null:{location:{pathname:H,search:N,hash:x,state:w,key:Q,unstable_mask:G},navigationType:r}},[_,g,N,x,w,Q,r,G]);return Ct(Y!=null,`<Router basename="${_}"> is not able to match the URL "${g}${N}${x}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:T.createElement(Rt.Provider,{value:b},T.createElement(Bn.Provider,{children:o,value:Y}))}function vp({children:c,location:o}){return ap(Xr(c),o)}function Xr(c,o=[]){let s=[];return T.Children.forEach(c,(r,d)=>{if(!T.isValidElement(r))return;let m=[...o,d];if(r.type===T.Fragment){s.push.apply(s,Xr(r.props.children,m));return}Re(r.type===Un,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!r.props.index||!r.props.children,"An index route cannot have child routes.");let S={id:r.props.id||m.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(S.children=Xr(r.props.children,m)),s.push(S)}),s}var ci="get",ri="application/x-www-form-urlencoded";function si(c){return typeof HTMLElement<"u"&&c instanceof HTMLElement}function yp(c){return si(c)&&c.tagName.toLowerCase()==="button"}function bp(c){return si(c)&&c.tagName.toLowerCase()==="form"}function xp(c){return si(c)&&c.tagName.toLowerCase()==="input"}function Sp(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function Ep(c,o){return c.button===0&&(!o||o==="_self")&&!Sp(c)}var ui=null;function zp(){if(ui===null)try{new FormData(document.createElement("form"),0),ui=!1}catch{ui=!0}return ui}var Tp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lr(c){return c!=null&&!Tp.has(c)?(Ct(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ri}"`),null):c}function Ap(c,o){let s,r,d,m,S;if(bp(c)){let _=c.getAttribute("action");r=_?nl(_,o):null,s=c.getAttribute("method")||ci,d=Lr(c.getAttribute("enctype"))||ri,m=new FormData(c)}else if(yp(c)||xp(c)&&(c.type==="submit"||c.type==="image")){let _=c.form;if(_==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=c.getAttribute("formaction")||_.getAttribute("action");if(r=b?nl(b,o):null,s=c.getAttribute("formmethod")||_.getAttribute("method")||ci,d=Lr(c.getAttribute("formenctype"))||Lr(_.getAttribute("enctype"))||ri,m=new FormData(_,c),!zp()){let{name:g,type:N,value:x}=c;if(N==="image"){let w=g?`${g}.`:"";m.append(`${w}x`,"0"),m.append(`${w}y`,"0")}else g&&m.append(g,x)}}else{if(si(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ci,r=null,d=ri,S=c}return m&&d==="text/plain"&&(S=m,m=void 0),{action:r,method:s.toLowerCase(),encType:d,formData:m,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $r(c,o){if(c===!1||c===null||typeof c>"u")throw new Error(o)}function Rp(c,o,s,r){let d=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${r}`:d.pathname=`${d.pathname}.${r}`:d.pathname==="/"?d.pathname=`_root.${r}`:o&&nl(d.pathname,o)==="/"?d.pathname=`${o.replace(/\/$/,"")}/_root.${r}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${r}`,d}async function _p(c,o){if(c.id in o)return o[c.id];try{let s=await import(c.module);return o[c.id]=s,s}catch(s){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Op(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function Np(c,o,s){let r=await Promise.all(c.map(async d=>{let m=o.routes[d.route.id];if(m){let S=await _p(m,s);return S.links?S.links():[]}return[]}));return jp(r.flat(1).filter(Op).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function pm(c,o,s,r,d,m){let S=(b,g)=>s[g]?b.route.id!==s[g].route.id:!0,_=(b,g)=>s[g].pathname!==b.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==b.params["*"];return m==="assets"?o.filter((b,g)=>S(b,g)||_(b,g)):m==="data"?o.filter((b,g)=>{let N=r.routes[b.route.id];if(!N||!N.hasLoader)return!1;if(S(b,g)||_(b,g))return!0;if(b.route.shouldRevalidate){let x=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Mp(c,o,{includeHydrateFallback:s}={}){return Cp(c.map(r=>{let d=o.routes[r.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function Cp(c){return[...new Set(c)]}function Dp(c){let o={},s=Object.keys(c).sort();for(let r of s)o[r]=c[r];return o}function jp(c,o){let s=new Set;return new Set(o),c.reduce((r,d)=>{let m=JSON.stringify(Dp(d));return s.has(m)||(s.add(m),r.push({key:m,link:d})),r},[])}function wm(){let c=T.useContext(Ha);return $r(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function Up(){let c=T.useContext(oi);return $r(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var Wr=T.createContext(void 0);Wr.displayName="FrameworkContext";function Hm(){let c=T.useContext(Wr);return $r(c,"You must render this element inside a <HydratedRouter> element"),c}function wp(c,o){let s=T.useContext(Wr),[r,d]=T.useState(!1),[m,S]=T.useState(!1),{onFocus:_,onBlur:b,onMouseEnter:g,onMouseLeave:N,onTouchStart:x}=o,w=T.useRef(null);T.useEffect(()=>{if(c==="render"&&S(!0),c==="viewport"){let Y=$=>{$.forEach(Z=>{S(Z.isIntersecting)})},H=new IntersectionObserver(Y,{threshold:.5});return w.current&&H.observe(w.current),()=>{H.disconnect()}}},[c]),T.useEffect(()=>{if(r){let Y=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(Y)}}},[r]);let Q=()=>{d(!0)},G=()=>{d(!1),S(!1)};return s?c!=="intent"?[m,w,{}]:[m,w,{onFocus:jn(_,Q),onBlur:jn(b,G),onMouseEnter:jn(g,Q),onMouseLeave:jn(N,G),onTouchStart:jn(x,Q)}]:[!1,w,{}]}function jn(c,o){return s=>{c&&c(s),s.defaultPrevented||o(s)}}function Hp({page:c,...o}){let{router:s}=wm(),r=T.useMemo(()=>Sm(s.routes,c,s.basename),[s.routes,c,s.basename]);return r?T.createElement(qp,{page:c,matches:r,...o}):null}function Bp(c){let{manifest:o,routeModules:s}=Hm(),[r,d]=T.useState([]);return T.useEffect(()=>{let m=!1;return Np(c,o,s).then(S=>{m||d(S)}),()=>{m=!0}},[c,o,s]),r}function qp({page:c,matches:o,...s}){let r=ul(),{future:d,manifest:m,routeModules:S}=Hm(),{basename:_}=wm(),{loaderData:b,matches:g}=Up(),N=T.useMemo(()=>pm(c,o,g,m,r,"data"),[c,o,g,m,r]),x=T.useMemo(()=>pm(c,o,g,m,r,"assets"),[c,o,g,m,r]),w=T.useMemo(()=>{if(c===r.pathname+r.search+r.hash)return[];let Y=new Set,H=!1;if(o.forEach(Z=>{let L=m.routes[Z.route.id];!L||!L.hasLoader||(!N.some(ie=>ie.route.id===Z.route.id)&&Z.route.id in b&&S[Z.route.id]?.shouldRevalidate||L.hasClientLoader?H=!0:Y.add(Z.route.id))}),Y.size===0)return[];let $=Rp(c,_,d.unstable_trailingSlashAwareDataRequests,"data");return H&&Y.size>0&&$.searchParams.set("_routes",o.filter(Z=>Y.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[$.pathname+$.search]},[_,d.unstable_trailingSlashAwareDataRequests,b,r,m,N,o,c,S]),Q=T.useMemo(()=>Mp(x,m),[x,m]),G=Bp(x);return T.createElement(T.Fragment,null,w.map(Y=>T.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...s})),Q.map(Y=>T.createElement("link",{key:Y,rel:"modulepreload",href:Y,...s})),G.map(({key:Y,link:H})=>T.createElement("link",{key:Y,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function Lp(...c){return o=>{c.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var Yp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yp&&(window.__reactRouterVersion="7.13.1")}catch{}function Gp({basename:c,children:o,unstable_useTransitions:s,window:r}){let d=T.useRef();d.current==null&&(d.current=xg({window:r,v5Compat:!0}));let m=d.current,[S,_]=T.useState({action:m.action,location:m.location}),b=T.useCallback(g=>{s===!1?_(g):T.startTransition(()=>_(g))},[s]);return T.useLayoutEffect(()=>m.listen(b),[m,b]),T.createElement(pp,{basename:c,children:o,location:S.location,navigationType:S.action,navigator:m,unstable_useTransitions:s})}var Bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wa=T.forwardRef(function({onClick:o,discover:s="render",prefetch:r="none",relative:d,reloadDocument:m,replace:S,unstable_mask:_,state:b,target:g,to:N,preventScrollReset:x,viewTransition:w,unstable_defaultShouldRevalidate:Q,...G},Y){let{basename:H,navigator:$,unstable_useTransitions:Z}=T.useContext(Rt),L=typeof N=="string"&&Bm.test(N),ie=Rm(N,H);N=ie.to;let K=ep(N,{relative:d}),oe=ul(),I=null;if(_){let je=Zr(_,[],oe.unstable_mask?oe.unstable_mask.pathname:"/",!0);H!=="/"&&(je.pathname=je.pathname==="/"?H:qt([H,je.pathname])),I=$.createHref(je)}let[Ne,ke,Dt]=wp(r,G),ht=Vp(N,{replace:S,unstable_mask:_,state:b,target:g,preventScrollReset:x,relative:d,viewTransition:w,unstable_defaultShouldRevalidate:Q,unstable_useTransitions:Z});function Ke(je){o&&o(je),je.defaultPrevented||ht(je)}let jt=!(ie.isExternal||m),gt=T.createElement("a",{...G,...Dt,href:(jt?I:void 0)||ie.absoluteURL||K,onClick:jt?Ke:o,ref:Lp(Y,ke),target:g,"data-discover":!L&&s==="render"?"true":void 0});return Ne&&!L?T.createElement(T.Fragment,null,gt,T.createElement(Hp,{page:K})):gt});wa.displayName="Link";var Xp=T.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:r="",end:d=!1,style:m,to:S,viewTransition:_,children:b,...g},N){let x=Ln(S,{relative:g.relative}),w=ul(),Q=T.useContext(oi),{navigator:G,basename:Y}=T.useContext(Rt),H=Q!=null&&Wp(x)&&_===!0,$=G.encodeLocation?G.encodeLocation(x).pathname:x.pathname,Z=w.pathname,L=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;s||(Z=Z.toLowerCase(),L=L?L.toLowerCase():null,$=$.toLowerCase()),L&&Y&&(L=nl(L,Y)||L);const ie=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let K=Z===$||!d&&Z.startsWith($)&&Z.charAt(ie)==="/",oe=L!=null&&(L===$||!d&&L.startsWith($)&&L.charAt($.length)==="/"),I={isActive:K,isPending:oe,isTransitioning:H},Ne=K?o:void 0,ke;typeof r=="function"?ke=r(I):ke=[r,K?"active":null,oe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Dt=typeof m=="function"?m(I):m;return T.createElement(wa,{...g,"aria-current":Ne,className:ke,ref:N,style:Dt,to:S,viewTransition:_},typeof b=="function"?b(I):b)});Xp.displayName="NavLink";var Qp=T.forwardRef(({discover:c="render",fetcherKey:o,navigate:s,reloadDocument:r,replace:d,state:m,method:S=ci,action:_,onSubmit:b,relative:g,preventScrollReset:N,viewTransition:x,unstable_defaultShouldRevalidate:w,...Q},G)=>{let{unstable_useTransitions:Y}=T.useContext(Rt),H=Jp(),$=$p(_,{relative:g}),Z=S.toLowerCase()==="get"?"get":"post",L=typeof _=="string"&&Bm.test(_),ie=K=>{if(b&&b(K),K.defaultPrevented)return;K.preventDefault();let oe=K.nativeEvent.submitter,I=oe?.getAttribute("formmethod")||S,Ne=()=>H(oe||K.currentTarget,{fetcherKey:o,method:I,navigate:s,replace:d,state:m,relative:g,preventScrollReset:N,viewTransition:x,unstable_defaultShouldRevalidate:w});Y&&s!==!1?T.startTransition(()=>Ne()):Ne()};return T.createElement("form",{ref:G,method:Z,action:$,onSubmit:r?b:ie,...Q,"data-discover":!L&&c==="render"?"true":void 0})});Qp.displayName="Form";function Zp(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qm(c){let o=T.useContext(Ha);return Re(o,Zp(c)),o}function Vp(c,{target:o,replace:s,unstable_mask:r,state:d,preventScrollReset:m,relative:S,viewTransition:_,unstable_defaultShouldRevalidate:b,unstable_useTransitions:g}={}){let N=kr(),x=ul(),w=Ln(c,{relative:S});return T.useCallback(Q=>{if(Ep(Q,o)){Q.preventDefault();let G=s!==void 0?s:Hn(x)===Hn(w),Y=()=>N(c,{replace:G,unstable_mask:r,state:d,preventScrollReset:m,relative:S,viewTransition:_,unstable_defaultShouldRevalidate:b});g?T.startTransition(()=>Y()):Y()}},[x,N,w,s,r,d,o,c,m,S,_,b,g])}var kp=0,Kp=()=>`__${String(++kp)}__`;function Jp(){let{router:c}=qm("useSubmit"),{basename:o}=T.useContext(Rt),s=dp(),r=c.fetch,d=c.navigate;return T.useCallback(async(m,S={})=>{let{action:_,method:b,encType:g,formData:N,body:x}=Ap(m,o);if(S.navigate===!1){let w=S.fetcherKey||Kp();await r(w,s,S.action||_,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:N,body:x,formMethod:S.method||b,formEncType:S.encType||g,flushSync:S.flushSync})}else await d(S.action||_,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:N,body:x,formMethod:S.method||b,formEncType:S.encType||g,replace:S.replace,state:S.state,fromRouteId:s,flushSync:S.flushSync,viewTransition:S.viewTransition})},[r,d,o,s])}function $p(c,{relative:o}={}){let{basename:s}=T.useContext(Rt),r=T.useContext(Lt);Re(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),m={...Ln(c||".",{relative:o})},S=ul();if(c==null){m.search=S.search;let _=new URLSearchParams(m.search),b=_.getAll("index");if(b.some(N=>N==="")){_.delete("index"),b.filter(x=>x).forEach(x=>_.append("index",x));let N=_.toString();m.search=N?`?${N}`:""}}return(!c||c===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:qt([s,m.pathname])),Hn(m)}function Wp(c,{relative:o}={}){let s=T.useContext(Om);Re(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qm("useViewTransitionState"),d=Ln(c,{relative:o});if(!s.isTransitioning)return!1;let m=nl(s.currentLocation.pathname,r)||s.currentLocation.pathname,S=nl(s.nextLocation.pathname,r)||s.nextLocation.pathname;return fi(d.pathname,S)!=null||fi(d.pathname,m)!=null}const Lm=T.createContext(),Fp=({children:c})=>{const[o,s]=T.useState(!1),r=()=>{s(!o)};return p.jsx(Lm.Provider,{value:{isDark:o,toggleTheme:r},children:c})},Yn=()=>{const c=T.useContext(Lm);if(!c)throw new Error("useTheme debe usarse dentro de ThemeProvider");return c};const Ym=(...c)=>c.filter((o,s,r)=>!!o&&o.trim()!==""&&r.indexOf(o)===s).join(" ").trim();const Ip=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Pp=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,s,r)=>r?r.toUpperCase():s.toLowerCase());const vm=c=>{const o=Pp(c);return o.charAt(0).toUpperCase()+o.slice(1)};var ev={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tv=c=>{for(const o in c)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1};const lv=T.forwardRef(({color:c="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:d="",children:m,iconNode:S,..._},b)=>T.createElement("svg",{ref:b,...ev,width:o,height:o,stroke:c,strokeWidth:r?Number(s)*24/Number(o):s,className:Ym("lucide",d),...!m&&!tv(_)&&{"aria-hidden":"true"},..._},[...S.map(([g,N])=>T.createElement(g,N)),...Array.isArray(m)?m:[m]]));const _t=(c,o)=>{const s=T.forwardRef(({className:r,...d},m)=>T.createElement(lv,{ref:m,iconNode:o,className:Ym(`lucide-${Ip(vm(c))}`,`lucide-${c}`,r),...d}));return s.displayName=vm(c),s};const av=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nv=_t("arrow-left",av);const uv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],iv=_t("chevron-left",uv);const cv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rv=_t("chevron-right",cv);const fv=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],ov=_t("grid-2x2",fv);const sv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],ym=_t("grid-3x3",sv);const dv=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],mv=_t("hash",dv);const hv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],gv=_t("menu",hv);const pv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],bm=_t("message-circle",pv);const vv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],yv=_t("moon",vv);const bv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xm=_t("search",bv);const xv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Sv=_t("sun",xv);const Ev=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wn=_t("x",Ev),zv=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* ── Variables de Tema ────────────────────────── */
  /* MODO OSCURO (Por defecto) */
  .nb-root {
    --bg: #0f0a1f;        /* Fondo principal lila muy oscuro */
    --bg2: #18112e;       /* Fondo de la barra */
    --bg3: #231942;       /* Fondo secundario */
    --border: rgba(168, 85, 247, 0.15); /* Borde lila sutil */
    --accent: #c084fc;    /* Lila vibrante claro */
    --accent2: #e879f9;   /* Fucsia/Lila secundario */
    --text: #fdfaef;      /* Texto principal claro */
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);
    font-family: 'DM Sans', sans-serif;
  }

  /* MODO CLARO */
  .nb-root.light {
    --bg: #fdfcff;        /* Fondo principal blanco purpúreo */
    --bg2: #ffffff;       /* Fondo de la barra blanco puro */
    --bg3: #f3e8ff;       /* Lila muy suavecito */
    --border: rgba(147, 51, 234, 0.15); /* Borde lila un poco más marcado */
    --accent: #9333ea;    /* Lila oscuro/morado vibrante */
    --accent2: #d946ef;   /* Fucsia oscuro */
    --text: #2e1065;      /* Texto principal morado muy oscuro (casi negro) */
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .nb-root * { box-sizing: border-box; }

  /* ── Transiciones Suaves para el Tema ───────── */
  .nb-bar, .nb-drawer, .nb-link, .nb-logo-text, .nb-burger, .nb-theme {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  /* ── Bar ───────────────────────────────────── */
  .nb-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 64px;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    z-index: 50;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 0;
    /* Efecto de cristal opcional */
    backdrop-filter: blur(12px);
    background: color-mix(in srgb, var(--bg2) 90%, transparent);
  }

  /* Logo */
  .nb-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .nb-logo-text {
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
    line-height: 1.1;
  }
  .nb-logo-dot {
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    margin-left: 2px;
    flex-shrink: 0;
    box-shadow: 0 0 8px var(--accent); /* Ligero brillo lila */
  }

  /* Desktop links */
  .nb-links {
    display: flex;
    align-items: stretch;
    gap: 0;
    margin-left: 32px;
    height: 100%;
    position: relative;
  }
  .nb-link {
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text2);
    text-decoration: none;
    white-space: nowrap;
    position: relative;
    transition: color 0.2s;
    height: 100%;
  }
  .nb-link:hover { color: var(--text); }
  .nb-link.active { color: var(--accent); }

  /* Sliding indicator */
  .nb-indicator {
    position: absolute;
    bottom: 0;
    height: 3px; /* Un poco más grueso */
    background: var(--accent);
    border-radius: 3px 3px 0 0;
    transition: left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1);
    pointer-events: none;
    box-shadow: 0 -2px 10px color-mix(in srgb, var(--accent) 50%, transparent); /* Brillo debajo */
  }

  /* Spacer */
  .nb-spacer { flex: 1; }

  /* Right actions */
  .nb-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  /* WhatsApp btn (Mantenemos verde por marca de WA, pero se adapta al tema) */
  .nb-wa {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    background: #25D366;
    color: #ffffff;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 700;
    font-family: 'Syne', sans-serif;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.18s, transform 0.14s;
    border: none;
    cursor: pointer;
  }
  .nb-wa:hover { background: #128C7E; transform: translateY(-1px); }

  /* Theme toggle */
  .nb-theme {
    width: 34px; height: 34px;
    border-radius: 8px;
    background: transparent;
    border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text2);
  }
  .nb-theme:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
  }

  /* Hamburger btn */
  .nb-burger {
    width: 34px; height: 34px;
    border-radius: 8px;
    background: transparent;
    border: 1.5px solid var(--border);
    display: none;
    align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text2);
  }
  .nb-burger:hover { border-color: var(--accent); color: var(--accent); }

  /* ── Mobile drawer ───────────────────────── */
  .nb-drawer {
    position: fixed;
    top: 64px; left: 0; right: 0;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    z-index: 49;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s ease;
    opacity: 0;
  }
  .nb-drawer.open {
    max-height: 400px;
    opacity: 1;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1); /* Sombra en móvil */
  }
  .nb-drawer-inner {
    padding: 8px 0 16px;
    display: flex;
    flex-direction: column;
  }
  .nb-drawer-link {
    display: flex;
    align-items: center;
    padding: 13px 24px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text2);
    text-decoration: none;
    border-left: 3px solid transparent;
  }
  .nb-drawer-link:hover {
    color: var(--text);
    background: color-mix(in srgb, var(--text) 3%, transparent);
  }
  .nb-drawer-link.active {
    color: var(--accent);
    border-left-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    font-weight: 600;
  }
  .nb-drawer-divider {
    height: 1px;
    background: var(--border);
    margin: 8px 24px;
  }
  .nb-drawer-wa {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 8px 24px 0;
    padding: 10px 18px;
    background: #25D366;
    color: #ffffff;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: 'Syne', sans-serif;
    text-decoration: none;
    width: fit-content;
    transition: background 0.18s;
  }
  .nb-drawer-wa:hover { background: #128C7E; }

  /* Backdrop */
  .nb-backdrop {
    position: fixed;
    inset: 0;
    top: 64px;
    background: rgba(0,0,0,0.5);
    z-index: 48;
    backdrop-filter: blur(3px);
    animation: bdIn 0.25s ease;
  }
  @keyframes bdIn { from { opacity: 0 } to { opacity: 1 } }

  /* Spacer */
  .nb-page-spacer { height: 64px; }

  /* Responsive */
  @media (max-width: 767px) {
    .nb-links { display: none; }
    .nb-wa { display: none !important; } 
    .nb-burger { display: flex !important; }
  }
`,Yr=[{label:"Inicio",to:"/",type:"link"},{label:"Galería",to:"/galeria",type:"link"},{label:"Ubícanos",href:"#ubicacion",type:"anchor"},{label:"Buscar",to:"/buscar",type:"link"}],Tv=()=>{const{isDark:c,toggleTheme:o}=Yn(),s=ul(),[r,d]=T.useState(0),[m,S]=T.useState({}),[_,b]=T.useState(!1),g=T.useRef([]);T.useEffect(()=>{const x=Yr.findIndex(w=>w.type==="link"&&w.to===s.pathname);x!==-1&&d(x),b(!1)},[s.pathname]),T.useEffect(()=>{const x=g.current[r];x&&S({left:x.offsetLeft,width:x.offsetWidth})},[r]),T.useEffect(()=>{const x=()=>{window.innerWidth>=768&&b(!1)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const N=x=>{d(x),b(!1)};return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:`nb-root ${c?"":"light"}`,children:[p.jsx("style",{children:zv}),p.jsxs("nav",{className:"nb-bar",children:[p.jsxs(wa,{to:"/",className:"nb-logo",onClick:()=>d(0),children:[p.jsxs("span",{className:"nb-logo-text",children:["🎉 Decoraciones ",p.jsx("br",{})," Andrea"]}),p.jsx("span",{className:"nb-logo-dot"})]}),p.jsxs("div",{className:"nb-links",children:[Yr.map((x,w)=>{const Q=`nb-link${r===w?" active":""}`;return x.type==="link"?p.jsx(wa,{to:x.to,ref:G=>g.current[w]=G,className:Q,onClick:()=>d(w),children:x.label},x.label):p.jsx("a",{href:x.href,ref:G=>g.current[w]=G,className:Q,onClick:()=>N(w),children:x.label},x.label)}),p.jsx("span",{className:"nb-indicator",style:m})]}),p.jsx("div",{className:"nb-spacer"}),p.jsxs("div",{className:"nb-actions",children:[p.jsxs("a",{href:"https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento.",target:"_blank",rel:"noreferrer",className:"nb-wa",children:[p.jsx(bm,{size:15}),p.jsx("span",{className:"nb-wa-label",children:"WhatsApp"})]}),p.jsx("button",{className:"nb-theme",onClick:o,"aria-label":"Cambiar tema",children:c?p.jsx(Sv,{size:16}):p.jsx(yv,{size:16})}),p.jsx("button",{className:"nb-burger",onClick:()=>b(x=>!x),"aria-label":_?"Cerrar menú":"Abrir menú","aria-expanded":_,children:_?p.jsx(wn,{size:16}):p.jsx(gv,{size:16})})]})]}),p.jsx("div",{className:`nb-drawer${_?" open":""}`,"aria-hidden":!_,children:p.jsxs("div",{className:"nb-drawer-inner",children:[Yr.map((x,w)=>{const Q=`nb-drawer-link${r===w?" active":""}`;return x.type==="link"?p.jsx(wa,{to:x.to,className:Q,onClick:()=>{d(w),b(!1)},children:x.label},x.label):p.jsx("a",{href:x.href,className:Q,onClick:()=>N(w),children:x.label},x.label)}),p.jsx("div",{className:"nb-drawer-divider"}),p.jsxs("a",{href:"https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento.",target:"_blank",rel:"noreferrer",className:"nb-drawer-wa",onClick:()=>b(!1),children:[p.jsx(bm,{size:16}),"WhatsApp"]})]})}),_&&p.jsx("div",{className:"nb-backdrop",onClick:()=>b(!1)})]}),p.jsx("div",{className:"nb-page-spacer"})]})},Av="17JmBJicJCXvo28yABnLmJ_joDHq5xe9b",Rv="AIzaSyD2pXYJFlu73Pd2QXNLT-CXw_5erDBThP8",di=async()=>{try{const c=`'${Av}' in parents and trashed = false and mimeType contains 'image/'`,s=`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(c)}&fields=${encodeURIComponent("files(id, name)")}&key=${Rv}`,d=await(await fetch(s)).json();return d.error?(console.error("Error en Google Drive API:",d.error),[]):d.files.map(m=>({id:m.id,name:m.name,url:`https://lh3.googleusercontent.com/u/0/d/${m.id}=w1000-h1000`}))}catch(c){return console.error("Error fetching eventos:",c),[]}},ii=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* MODO OSCURO */
  .gl-root {
    --bg: #0f0a1f;        
    --bg2: #18112e;       
    --bg3: #231942;       
    --border: rgba(168, 85, 247, 0.15); 
    --accent: #c084fc;    
    --accent2: #e879f9;   
    --text: #fdfaef;      
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    min-height: calc(100vh - 100px);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px 40px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* MODO CLARO */
  .gl-root.light {
    --bg: #fdfcff;        
    --bg2: #ffffff;       
    --bg3: #f3e8ff;       
    --border: rgba(147, 51, 234, 0.15); 
    --accent: #9333ea;    
    --accent2: #d946ef;   
    --text: #2e1065;      
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .gl-root * { box-sizing: border-box; }

  /* Card */
  .gl-card {
    width: 100%;
    max-width: 760px;
    border-radius: 16px;
    overflow: hidden;
    background: var(--bg2);
    border: 1px solid var(--border);
    cursor: pointer;
    position: relative;
    transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), border-color 0.3s ease, box-shadow 0.28s, background-color 0.3s ease;
    animation: cardIn 0.32s cubic-bezier(.22,.68,0,1.2);
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(10px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .gl-card:hover {
    transform: translateY(-3px) scale(1.01);
    border-color: color-mix(in srgb, var(--accent) 40%, transparent);
    box-shadow: 0 24px 56px rgba(0,0,0,0.55);
  }
  .gl-card:active { transform: scale(0.98); }

  /* Image area */
  .gl-img-wrap {
    position: relative;
    width: 100%;
    background: var(--bg3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-height: 65vh;
    transition: background-color 0.3s ease;
  }
  .gl-img-wrap img {
    width: 100%;
    height: auto;
    max-height: 65vh;
    object-fit: contain;
    display: block;
    transition: transform 0.4s ease;
  }
  .gl-card:hover .gl-img-wrap img {
    transform: scale(1.03);
  }
  .gl-img-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0);
    transition: background 0.22s;
  }
  .gl-card:hover .gl-img-overlay {
    background: rgba(0,0,0,0.15);
  }
  /* Gradient bottom accent line */
  .gl-img-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.25s;
  }
  .gl-card:hover .gl-img-line { opacity: 1; }

  /* Card footer */
  .gl-footer {
    padding: 14px 20px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    transition: border-color 0.3s ease;
  }
  .gl-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.3s ease;
  }
  .gl-card:hover .gl-name { color: var(--accent); }
  .gl-counter-pill {
    flex-shrink: 0;
    padding: 3px 10px;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text3);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.04em;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }
  .gl-counter-pill span { color: var(--accent); transition: color 0.3s ease; }

  /* Controls row */
  .gl-controls {
    margin-top: 18px;
    width: 100%;
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Prev / Next */
  .gl-nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .gl-nav-btn {
    width: 46px;
    height: 46px;
    border-radius: 10px;
    border: 1.5px solid var(--border);
    background: var(--bg2);
    color: var(--text2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease, transform 0.12s;
    flex-shrink: 0;
  }
  .gl-nav-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    transform: translateY(-1px);
  }
  .gl-nav-btn:active { transform: scale(0.93); }

  /* Progress bar */
  .gl-progress-wrap {
    flex: 1;
    height: 4px;
    background: var(--bg3);
    border-radius: 2px;
    overflow: hidden;
    transition: background-color 0.3s ease;
  }
  .gl-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(.4,0,.2,1);
  }

  /* Dots */
  .gl-dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .gl-dot {
    height: 6px;
    border-radius: 3px;
    background: var(--border);
    border: none;
    cursor: pointer;
    transition: width 0.22s cubic-bezier(.4,0,.2,1), background-color 0.3s ease;
    padding: 0;
    width: 6px;
  }
  .gl-dot.active {
    width: 22px;
    background: var(--accent);
  }
  .gl-dot:hover:not(.active) {
    background: var(--text3);
  }

  /* Hint */
  .gl-hint {
    text-align: center;
    font-size: 0.72rem;
    color: var(--text3);
    letter-spacing: 0.04em;
    margin-top: 2px;
    transition: color 0.3s ease;
  }

  /* States */
  .gl-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    gap: 10px;
    text-align: center;
  }
  .gl-spinner {
    width: 36px;
    height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .gl-state p { font-size: 0.85rem; color: var(--text3); margin: 0; transition: color 0.3s ease; }
`,_v=()=>{const c=kr(),{isDark:o}=Yn(),[s,r]=T.useState([]),[d,m]=T.useState(!0),[S,_]=T.useState(null),[b,g]=T.useState(0),[N,x]=T.useState(0),[w,Q]=T.useState(0);T.useEffect(()=>{(async()=>{try{m(!0);const L=await di();r(L||[])}catch(L){_(L.message)}finally{m(!1)}})()},[]),T.useEffect(()=>{const Z=L=>{L.key==="ArrowDown"||L.key==="ArrowRight"?(L.preventDefault(),g(ie=>(ie+1)%s.length)):(L.key==="ArrowUp"||L.key==="ArrowLeft")&&(L.preventDefault(),g(ie=>(ie-1+s.length)%s.length))};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[s.length]);const G=Z=>x(Z.targetTouches[0].clientX),Y=Z=>{const L=Z.changedTouches[0].clientX;Q(L);const ie=N-L;ie>50&&g(K=>(K+1)%s.length),ie<-50&&g(K=>(K-1+s.length)%s.length)};if(d)return p.jsxs("div",{className:`gl-root ${o?"":"light"}`,children:[p.jsx("style",{children:ii}),p.jsxs("div",{className:"gl-state",children:[p.jsx("div",{className:"gl-spinner"}),p.jsx("p",{children:"Cargando galería..."})]})]});if(S)return p.jsxs("div",{className:`gl-root ${o?"":"light"}`,children:[p.jsx("style",{children:ii}),p.jsx("div",{className:"gl-state",children:p.jsxs("p",{style:{color:"#ff6b6b"},children:["Error: ",S]})})]});if(!s.length)return p.jsxs("div",{className:`gl-root ${o?"":"light"}`,children:[p.jsx("style",{children:ii}),p.jsx("div",{className:"gl-state",children:p.jsx("p",{children:"No hay eventos disponibles"})})]});const H=s[b],$=(b+1)/s.length*100;return p.jsxs("div",{className:`gl-root ${o?"":"light"}`,children:[p.jsx("style",{children:ii}),p.jsxs("div",{className:"gl-card",onClick:()=>c(`/evento/${H.id}`),onTouchStart:G,onTouchEnd:Y,role:"region","aria-label":`Imagen ${b+1} de ${s.length}: ${H.name}`,children:[p.jsxs("div",{className:"gl-img-wrap",children:[p.jsx("img",{src:`https://lh3.googleusercontent.com/d/${H.id}`,alt:H.name.replace(/\.[^/.]+$/,"")||"Imagen del evento",onError:Z=>{Z.target.style.display="none"}}),p.jsx("div",{className:"gl-img-overlay"}),p.jsx("div",{className:"gl-img-line"})]}),p.jsxs("div",{className:"gl-footer",children:[p.jsx("h3",{className:"gl-name",children:H.name.replace(/\.[^/.]+$/,"")||"Imagen"}),p.jsxs("div",{className:"gl-counter-pill",children:[p.jsx("span",{children:b+1})," / ",s.length]})]})]},H.id),p.jsxs("div",{className:"gl-controls",children:[p.jsxs("div",{className:"gl-nav",children:[p.jsx("button",{className:"gl-nav-btn",onClick:()=>g(Z=>(Z-1+s.length)%s.length),"aria-label":"Anterior",children:p.jsx(iv,{size:20})}),p.jsx("div",{className:"gl-progress-wrap",children:p.jsx("div",{className:"gl-progress-bar",style:{width:`${$}%`}})}),p.jsx("button",{className:"gl-nav-btn",onClick:()=>g(Z=>(Z+1)%s.length),"aria-label":"Siguiente",children:p.jsx(rv,{size:20})})]}),p.jsx("div",{className:"gl-dots",role:"tablist",children:s.map((Z,L)=>p.jsx("button",{className:`gl-dot${L===b?" active":""}`,onClick:()=>g(L),"aria-label":`Ir a imagen ${L+1}`,"aria-current":L===b?"true":"false",role:"tab"},L))}),p.jsxs("p",{className:"gl-hint",children:[p.jsx("span",{className:"sm-only-hide",children:"← → para navegar · "}),"Toca la imagen para ver detalles"]})]})]})},Ov=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .gm-root {
    --bg: #0d0d0f;
    --bg2: #131316;
    --bg3: #1a1a1f;
    --border: rgba(255,255,255,0.07);
    --accent: #f5c842;
    --accent2: #ff6b35;
    --text: #f0ede8;
    --text2: rgba(240,237,232,0.45);
    --text3: rgba(240,237,232,0.2);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    width: 100%;
  }
  .gm-root * { box-sizing: border-box; }

  /* ── Masonry grid ────────────────────────────── */
  /*
    Pattern repeats every 8 items across 4 columns:
    [0] 2×2  [1] 1×1  [2] 1×1
              [3] 1×2  [4] 1×1
                       [5] 1×1
    [6] 1×1 [7] 2×1  (closing strip)

    We drive this entirely with named grid areas inside
    a dense auto-flow grid so gaps stay minimal.
  */
  .gm-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 180px;
    gap: 6px;
    padding-bottom: 6px;
  }

  @media (max-width: 640px) {
    .gm-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 140px;
    }
  }

  /* Span helpers */
  .gm-tile      { grid-column: span 1; grid-row: span 1; }
  .gm-tile-w2   { grid-column: span 2; grid-row: span 1; }
  .gm-tile-h2   { grid-column: span 1; grid-row: span 2; }
  .gm-tile-2x2  { grid-column: span 2; grid-row: span 2; }

  /* Tile base */
  .gm-tile,
  .gm-tile-w2,
  .gm-tile-h2,
  .gm-tile-2x2 {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    background: var(--bg3);
    border: 1px solid var(--border);
    transition: transform 0.22s cubic-bezier(.22,.68,0,1.2),
                border-color 0.2s, box-shadow 0.22s;
  }
  .gm-tile:hover,
  .gm-tile-w2:hover,
  .gm-tile-h2:hover,
  .gm-tile-2x2:hover {
    transform: scale(1.025);
    z-index: 2;
    border-color: rgba(245,200,66,0.22);
    box-shadow: 0 12px 36px rgba(0,0,0,0.55);
  }
  .gm-tile:active,
  .gm-tile-w2:active,
  .gm-tile-h2:active,
  .gm-tile-2x2:active { transform: scale(0.97); }

  .gm-tile img,
  .gm-tile-w2 img,
  .gm-tile-h2 img,
  .gm-tile-2x2 img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .gm-tile:hover img,
  .gm-tile-w2:hover img,
  .gm-tile-h2:hover img,
  .gm-tile-2x2:hover img { transform: scale(1.07); }

  /* Overlay */
  .gm-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0);
    transition: background 0.22s;
  }
  .gm-tile:hover .gm-overlay,
  .gm-tile-w2:hover .gm-overlay,
  .gm-tile-h2:hover .gm-overlay,
  .gm-tile-2x2:hover .gm-overlay { background: rgba(0,0,0,0.22); }

  /* Label (only big tiles) */
  .gm-label {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 10px 12px 11px;
    background: linear-gradient(to top, rgba(0,0,0,0.78), transparent);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.22s, transform 0.22s;
  }
  .gm-tile:hover .gm-label,
  .gm-tile-w2:hover .gm-label,
  .gm-tile-h2:hover .gm-label,
  .gm-tile-2x2:hover .gm-label { opacity: 1; transform: translateY(0); }
  .gm-label h3 {
    margin: 0;
    font-family: 'Syne', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Gold accent line */
  .gm-line {
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.22s;
  }
  .gm-tile:hover .gm-line,
  .gm-tile-w2:hover .gm-line,
  .gm-tile-h2:hover .gm-line,
  .gm-tile-2x2:hover .gm-line { opacity: 1; }

  /* ── States ──────────────────────────────────── */
  .gm-state {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    min-height: 400px; gap: 10px; text-align: center;
  }
  .gm-spinner {
    width: 36px; height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .gm-state p { font-size: 0.85rem; color: var(--text3); margin: 0; }

  /* ── Lightbox ─────────────────────────────────── */
  .lb-bg {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.88);
    z-index: 50;
    display: flex; align-items: center; justify-content: center;
    padding: 16px;
    backdrop-filter: blur(10px);
    animation: lbIn 0.18s ease;
  }
  @keyframes lbIn { from { opacity: 0 } to { opacity: 1 } }
  .lb-close {
    position: fixed; top: 16px; right: 16px;
    width: 38px; height: 38px;
    border-radius: 9px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: #fff; z-index: 60;
    transition: background 0.15s;
  }
  .lb-close:hover { background: rgba(255,255,255,0.15); }
  .lb-body {
    width: 100%; max-width: 900px; max-height: 90vh;
    display: flex; flex-direction: column;
    align-items: center; gap: 14px;
  }
  .lb-body img {
    max-width: 100%; max-height: 74vh;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 24px 64px rgba(0,0,0,0.65);
  }
  .lb-info { text-align: center; color: #fff; }
  .lb-info h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.95rem, 2.5vw, 1.3rem);
    font-weight: 800; letter-spacing: -0.02em; margin: 0 0 6px;
  }
  .lb-hint { font-size: 0.72rem; color: rgba(255,255,255,0.28); margin: 0; }
`,Nv=c=>{switch(c%8){case 0:return"gm-tile-2x2";case 3:return"gm-tile-h2";case 6:return"gm-tile-w2";default:return"gm-tile"}},Mv=()=>{const[c,o]=T.useState([]),[s,r]=T.useState(!0),[d,m]=T.useState(null),[S,_]=T.useState(null);T.useEffect(()=>{(async()=>{try{r(!0);const x=await di();o(x||[])}catch(x){m(x.message)}finally{r(!1)}})()},[]),T.useEffect(()=>{const N=x=>{x.key==="Escape"&&_(null)};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[]);const b=()=>_(null),g=N=>{N.target===N.currentTarget&&b()};return p.jsxs("div",{className:"gm-root",children:[p.jsx("style",{children:Ov}),s?p.jsxs("div",{className:"gm-state",children:[p.jsx("div",{className:"gm-spinner"}),p.jsx("p",{children:"Cargando galería..."})]}):d?p.jsx("div",{className:"gm-state",children:p.jsxs("p",{style:{color:"#ff6b6b"},children:["Error: ",d]})}):c.length?p.jsx("div",{className:"gm-grid",children:c.map((N,x)=>{const w=Nv(x),Q=w!=="gm-tile";return p.jsxs("div",{className:w,onClick:()=>_(N),role:"button","aria-label":N.name.replace(/\.[^/.]+$/,"")||"Imagen",children:[p.jsx("img",{src:`https://lh3.googleusercontent.com/d/${N.id}`,alt:N.name,loading:"lazy",onError:G=>{G.target.style.display="none"}}),p.jsx("div",{className:"gm-overlay"}),Q&&p.jsx("div",{className:"gm-label",children:p.jsx("h3",{children:N.name.replace(/\.[^/.]+$/,"")||"Imagen"})}),p.jsx("div",{className:"gm-line"})]},N.id)})}):p.jsx("div",{className:"gm-state",children:p.jsx("p",{children:"No hay eventos disponibles"})}),S&&p.jsxs("div",{className:"lb-bg",onClick:g,children:[p.jsx("button",{className:"lb-close",onClick:b,"aria-label":"Cerrar",children:p.jsx(wn,{size:18})}),p.jsxs("div",{className:"lb-body",children:[p.jsx("img",{src:`https://lh3.googleusercontent.com/d/${S.id}`,alt:S.name,onClick:N=>N.stopPropagation()}),p.jsxs("div",{className:"lb-info",children:[p.jsx("h2",{children:S.name.replace(/\.[^/.]+$/,"")||"Imagen"}),p.jsx("p",{className:"lb-hint",children:"ESC o clic afuera para cerrar"})]})]})]})]})},Cv=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* MODO OSCURO */
  .ed-root {
    --bg: #0f0a1f;        
    --bg2: #18112e;       
    --bg3: #231942;       
    --border: rgba(168, 85, 247, 0.15); 
    --accent: #c084fc;    
    --accent2: #e879f9;   
    --text: #fdfaef;      
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    min-height: 100vh;
    color: var(--text);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* MODO CLARO */
  .ed-root.light {
    --bg: #fdfcff;        
    --bg2: #ffffff;       
    --bg3: #f3e8ff;       
    --border: rgba(147, 51, 234, 0.15); 
    --accent: #9333ea;    
    --accent2: #d946ef;   
    --text: #2e1065;      
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .ed-root * { box-sizing: border-box; }

  /* Top bar */
  .ed-topbar {
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 72px;
    z-index: 30;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .ed-topbar-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 14px 24px;
  }
  .ed-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: transparent;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    color: var(--text2);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
  }
  .ed-back:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
  }
  .ed-back svg { flex-shrink: 0; }

  /* Main layout */
  .ed-main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 24px 64px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 28px;
    align-items: start;
  }
  @media (max-width: 768px) {
    .ed-main {
      grid-template-columns: 1fr;
    }
  }

  /* Image panel */
  .ed-img-panel {
    border-radius: 14px;
    overflow: hidden;
    background: var(--bg3);
    border: 1px solid var(--border);
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .ed-img-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  .ed-img-panel:hover img {
    transform: scale(1.03);
  }

  /* Info panel */
  .ed-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .ed-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    width: fit-content;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }
  .ed-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    margin: 0;
    line-height: 1.15;
    transition: color 0.3s ease;
  }
  .ed-divider {
    width: 40px;
    height: 3px;
    background: var(--accent);
    border-radius: 2px;
    transition: background-color 0.3s ease;
  }
  .ed-desc {
    font-size: 0.9rem;
    color: var(--text2);
    line-height: 1.7;
    margin: 0;
    transition: color 0.3s ease;
  }

  /* Meta block */
  .ed-meta {
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .ed-meta-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .ed-meta-icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  .ed-meta-key {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text3);
    margin-bottom: 2px;
    transition: color 0.3s ease;
  }
  .ed-meta-val {
    font-size: 0.82rem;
    color: var(--text2);
    font-family: 'DM Sans', sans-serif;
    word-break: break-all;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  /* States */
  .ed-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 420px;
    gap: 12px;
    text-align: center;
    grid-column: 1 / -1;
  }
  .ed-spinner {
    width: 36px;
    height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .ed-state-label {
    font-size: 0.85rem;
    color: var(--text3);
    margin: 0;
    transition: color 0.3s ease;
  }
  .ed-notfound {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #ff6b6b;
    margin: 0;
  }

  /* Accent line on image */
  .ed-img-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.25s;
  }
  .ed-img-panel:hover .ed-img-accent {
    opacity: 1;
  }
`,Dv=()=>{const{id:c}=lp(),{isDark:o}=Yn(),[s,r]=T.useState(null),[d,m]=T.useState(!0);return T.useEffect(()=>{(async()=>{try{m(!0);const b=(await di()).find(g=>g.id===c);r(b||null)}catch(_){console.error("Error loading evento:",_)}finally{m(!1)}})()},[c]),p.jsxs("div",{className:`ed-root ${o?"":"light"}`,children:[p.jsx("style",{children:Cv}),p.jsx("div",{className:"ed-topbar",children:p.jsx("div",{className:"ed-topbar-inner",children:p.jsxs(wa,{to:"/",className:"ed-back",children:[p.jsx(nv,{size:15}),"Volver a Galería"]})})}),p.jsx("main",{className:"ed-main",children:d?p.jsxs("div",{className:"ed-state",children:[p.jsx("div",{className:"ed-spinner"}),p.jsx("p",{className:"ed-state-label",children:"Cargando evento..."})]}):s?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"ed-img-panel",children:[p.jsx("img",{src:`https://lh3.googleusercontent.com/d/${c}`,alt:s.name,onError:S=>{S.target.style.display="none"}}),p.jsx("div",{className:"ed-img-accent"})]}),p.jsxs("div",{className:"ed-info",children:[p.jsx("span",{className:"ed-tag",children:"Evento"}),p.jsx("h1",{className:"ed-title",children:s.name.replace(/\.[^/.]+$/,"")||"Evento sin nombre"}),p.jsx("div",{className:"ed-divider"}),p.jsx("p",{className:"ed-desc",children:"Aquí puedes agregar más información sobre este evento, como descripción, detalles de decoración, contacto, y más."}),p.jsx("div",{className:"ed-meta",children:p.jsxs("div",{className:"ed-meta-row",children:[p.jsx("div",{className:"ed-meta-icon",children:p.jsx(mv,{size:13})}),p.jsxs("div",{children:[p.jsx("p",{className:"ed-meta-key",children:"ID del evento"}),p.jsx("p",{className:"ed-meta-val",children:c})]})]})})]})]}):p.jsxs("div",{className:"ed-state",children:[p.jsx("p",{className:"ed-notfound",children:"Evento no encontrado"}),p.jsx("p",{className:"ed-state-label",children:"El ID solicitado no existe en la galería"})]})})]})},jv=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* MODO OSCURO */
  .search-root {
    --bg: #0f0a1f;        
    --bg2: #18112e;       
    --bg3: #231942;       
    --border: rgba(168, 85, 247, 0.15);
    --border-focus: rgba(192, 132, 252, 0.5); 
    --accent: #c084fc;    
    --text: #fdfaef;      
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    min-height: 100vh;
    color: var(--text);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* MODO CLARO */
  .search-root.light {
    --bg: #fdfcff;        
    --bg2: #ffffff;       
    --bg3: #f3e8ff;       
    --border: rgba(147, 51, 234, 0.15); 
    --border-focus: rgba(147, 51, 234, 0.5);
    --accent: #9333ea;    
    --text: #2e1065;      
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .search-root * { box-sizing: border-box; }

  /* Header */
  .sh-header {
    position: sticky;
    top: 72px;
    z-index: 40;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(12px);
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .sh-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .sh-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s ease;
  }
  .sh-title span {
    color: var(--accent);
    transition: color 0.3s ease;
  }

  /* Search bar */
  .sb-wrap {
    position: relative;
    width: 100%;
    max-width: 640px;
    display: flex;
    align-items: center;
  }
  .sb-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text2);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    z-index: 1;
    transition: color 0.3s ease;
  }
  .sb-input {
    width: 100%;
    padding: 12px 44px 12px 44px;
    background: var(--bg3);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 400;
    outline: none;
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.2s, color 0.3s ease;
    line-height: 1.4;
  }
  .sb-input::placeholder {
    color: var(--text3);
    transition: color 0.3s ease;
  }
  .sb-input:focus {
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent);
  }
  .sb-clear {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--text) 6%, transparent);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: var(--text2);
    transition: background-color 0.2s, color 0.2s;
    flex-shrink: 0;
  }
  .sb-clear:hover {
    background: color-mix(in srgb, var(--accent) 15%, transparent);
    color: var(--accent);
  }

  /* Toolbar */
  .sh-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .sh-count {
    font-size: 0.8rem;
    color: var(--text2);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  .sh-count strong {
    color: var(--accent);
    font-weight: 700;
  }
  .cols-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .cols-label {
    font-size: 0.75rem;
    color: var(--text3);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-right: 2px;
    transition: color 0.3s ease;
  }
  .col-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--border);
    border-radius: 7px;
    background: transparent;
    cursor: pointer;
    color: var(--text2);
    transition: all 0.2s;
  }
  .col-btn:hover {
    border-color: color-mix(in srgb, var(--accent) 30%, transparent);
    color: var(--text);
  }
  .col-btn.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
  }

  /* Main */
  .sm-main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 24px 24px 48px;
  }

  /* Empty states */
  .se-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    gap: 12px;
    text-align: center;
  }
  .se-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--bg3);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text3);
    margin-bottom: 4px;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }
  .se-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text2);
    margin: 0;
    transition: color 0.3s ease;
  }
  .se-sub {
    font-size: 0.85rem;
    color: var(--text3);
    margin: 0;
    max-width: 320px;
    line-height: 1.5;
    transition: color 0.3s ease;
  }
  .se-btn {
    margin-top: 8px;
    padding: 8px 20px;
    background: var(--accent);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-family: 'Syne', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s, background-color 0.3s ease;
  }
  .se-btn:hover { opacity: 0.88; transform: translateY(-1px); }

  /* Spinner */
  .sg-spinner {
    width: 36px;
    height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Grid */
  .sg-grid {
    display: grid;
    gap: 12px;
  }

  /* Card */
  .sc-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 1;
    cursor: pointer;
    background: var(--bg3);
    border: 1px solid var(--border);
    transition: transform 0.22s cubic-bezier(.22,.68,0,1.2), box-shadow 0.22s, background-color 0.3s ease, border-color 0.3s ease;
  }
  .sc-card:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 16px 40px rgba(0,0,0,0.5);
    border-color: color-mix(in srgb, var(--accent) 30%, transparent);
  }
  .sc-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }
  .sc-card:hover img {
    transform: scale(1.06);
  }
  .sc-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 50%);
    opacity: 0;
    transition: opacity 0.22s;
  }
  .sc-card:hover .sc-overlay {
    opacity: 1;
  }
  .sc-label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 12px 11px;
    background: linear-gradient(to top, rgba(0,0,0,0.72), transparent);
    transform: translateY(4px);
    opacity: 0;
    transition: opacity 0.22s, transform 0.22s;
  }
  .sc-card:hover .sc-label {
    opacity: 1;
    transform: translateY(0);
  }
  .sc-label h3 {
    margin: 0;
    font-family: 'Syne', sans-serif;
    font-size: 0.82rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0.01em;
  }

  /* Lightbox */
  .slb-bg {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    backdrop-filter: blur(10px);
    animation: lbFade 0.18s ease;
  }
  @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
  .slb-close {
    position: fixed;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    z-index: 60;
    transition: background 0.15s;
  }
  .slb-close:hover { background: rgba(255,255,255,0.15); }
  .slb-body {
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .slb-body img {
    max-width: 100%;
    max-height: 72vh;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 24px 64px rgba(0,0,0,0.6);
  }
  .slb-info {
    text-align: center;
    color: #fff;
  }
  .slb-info h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 800;
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }
  .slb-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .slb-btn-primary {
    padding: 9px 22px;
    background: var(--accent);
    color: #ffffff; 
    border: none;
    border-radius: 8px;
    font-family: 'Syne', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.15s, background-color 0.3s ease;
  }
  .slb-btn-primary:hover { opacity: 0.85; }
  .slb-btn-sec {
    padding: 9px 22px;
    background: rgba(255,255,255,0.1);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s;
  }
  .slb-btn-sec:hover { background: rgba(255,255,255,0.18); }
  .slb-hint {
    margin-top: 8px;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.3);
  }
`,Uv=()=>{const c=kr(),{isDark:o}=Yn(),[s,r]=T.useState([]),[d,m]=T.useState(!0),[S,_]=T.useState(null),[b,g]=T.useState(""),[N,x]=T.useState(!1),[w,Q]=T.useState(null),[G,Y]=T.useState(3);T.useEffect(()=>{(async()=>{try{m(!0);const oe=await di();r(oe||[])}catch(oe){_(oe.message)}finally{m(!1)}})()},[]),T.useEffect(()=>{const K=oe=>{oe.key==="Escape"&&Q(null)};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[]);const H=s.filter(K=>K.name.toLowerCase().includes(b.toLowerCase())),$=()=>{g(""),x(!1)},Z=()=>Q(null),L=K=>{K.target===K.currentTarget&&Z()},ie=K=>{K.key==="Enter"&&x(!0)};return p.jsxs("div",{className:`search-root ${o?"":"light"}`,children:[p.jsx("style",{children:jv}),p.jsx("div",{className:"sh-header",children:p.jsxs("div",{className:"sh-inner",children:[p.jsxs("h1",{className:"sh-title",children:["Buscar ",p.jsx("span",{children:"Eventos"})]}),p.jsxs("div",{className:"sb-wrap",children:[p.jsx("span",{className:"sb-icon",children:p.jsx(xm,{size:18})}),p.jsx("input",{type:"text",className:"sb-input",placeholder:"Escribe un nombre o Enter para ver todos...",value:b,onChange:K=>{g(K.target.value),K.target.value!==""&&x(!1)},onKeyDown:ie,autoFocus:!0}),(b||N)&&p.jsx("button",{className:"sb-clear",onClick:$,"aria-label":"Limpiar búsqueda",children:p.jsx(wn,{size:14})})]}),(b||N)&&p.jsxs("div",{className:"sh-toolbar",children:[p.jsxs("p",{className:"sh-count",children:[p.jsx("strong",{children:H.length})," ","resultado",H.length!==1?"s":""]}),H.length>0&&p.jsxs("div",{className:"cols-group",children:[p.jsx("span",{className:"cols-label",children:"Vista"}),[{n:2,Icon:ov},{n:3,Icon:ym},{n:4,Icon:ym}].map(({n:K,Icon:oe})=>p.jsx("button",{className:`col-btn${G===K?" active":""}`,onClick:()=>Y(K),"aria-label":`${K} columnas`,title:`${K} columnas`,children:p.jsx(oe,{size:15})},K))]})]})]})}),p.jsx("main",{className:"sm-main",children:d?p.jsxs("div",{className:"se-state",children:[p.jsx("div",{className:"sg-spinner"}),p.jsx("p",{className:"se-sub",children:"Cargando eventos..."})]}):S?p.jsx("div",{className:"se-state",children:p.jsxs("p",{className:"se-title",style:{color:"#ff6b6b"},children:["Error: ",S]})}):!b&&!N?p.jsxs("div",{className:"se-state",children:[p.jsx("div",{className:"se-icon",children:p.jsx(xm,{size:22})}),p.jsx("p",{className:"se-title",children:"Empieza a buscar"}),p.jsxs("p",{className:"se-sub",children:["Escribe el nombre de un evento o presiona ",p.jsx("b",{children:"Enter"})," para ver todo el catálogo"]})]}):H.length===0?p.jsxs("div",{className:"se-state",children:[p.jsx("div",{className:"se-icon",children:p.jsx(wn,{size:22})}),p.jsx("p",{className:"se-title",children:"Sin resultados"}),p.jsxs("p",{className:"se-sub",children:['No encontramos nada para "',b,'"']}),p.jsx("button",{className:"se-btn",onClick:$,children:"Limpiar búsqueda"})]}):p.jsx("div",{className:"sg-grid",style:{gridTemplateColumns:`repeat(${G}, minmax(0, 1fr))`},children:H.map(K=>p.jsxs("div",{className:"sc-card",onClick:()=>Q(K),children:[p.jsx("img",{src:`https://lh3.googleusercontent.com/d/${K.id}`,alt:K.name,onError:oe=>{oe.target.style.display="none"}}),p.jsx("div",{className:"sc-overlay"}),p.jsx("div",{className:"sc-label",children:p.jsx("h3",{children:K.name.replace(/\.[^/.]+$/,"")||"Imagen"})})]},K.id))})}),w&&p.jsxs("div",{className:"slb-bg",onClick:L,children:[p.jsx("button",{className:"slb-close",onClick:Z,"aria-label":"Cerrar",children:p.jsx(wn,{size:20})}),p.jsxs("div",{className:"slb-body",children:[p.jsx("img",{src:`https://lh3.googleusercontent.com/d/${w.id}`,alt:w.name,onClick:K=>K.stopPropagation()}),p.jsxs("div",{className:"slb-info",children:[p.jsx("h2",{children:w.name.replace(/\.[^/.]+$/,"")||"Imagen"}),p.jsxs("div",{className:"slb-actions",children:[p.jsx("button",{className:"slb-btn-primary",onClick:()=>c(`/evento/${w.id}`),children:"Ver detalles"}),p.jsx("button",{className:"slb-btn-sec",onClick:Z,children:"Cerrar"})]}),p.jsx("p",{className:"slb-hint",children:"ESC o clic afuera para cerrar"})]})]})]})]})},wv=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* MODO OSCURO (Por defecto) */
  .app-root {
    --bg: #0f0a1f;        
    --bg2: #18112e;       
    --bg3: #231942;       
    --border: rgba(168, 85, 247, 0.15); 
    --accent: #c084fc;    
    --text: #fdfaef;      
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* MODO CLARO */
  .app-root.light {
    --bg: #fdfcff;        
    --bg2: #ffffff;       
    --bg3: #f3e8ff;       
    --border: rgba(147, 51, 234, 0.15); 
    --accent: #9333ea;    
    --text: #2e1065;      
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .app-root * { box-sizing: border-box; }

  .app-hero {
    width: 100%;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    padding: 40px 24px 36px;
    text-align: center;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .app-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--text);
    margin: 0 0 8px;
    transition: color 0.3s ease;
  }
  .app-hero h1 span { 
    color: var(--accent); 
    transition: color 0.3s ease;
  }
  .app-hero p {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    color: var(--text2);
    margin: 0;
    font-weight: 300;
    font-style: italic;
    transition: color 0.3s ease;
  }

  .app-main {
    flex: 1;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 32px 16px;
  }

  .app-footer {
    width: 100%;
    border-top: 1px solid var(--border);
    padding: 20px 24px;
    text-align: center;
    background: var(--bg2);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .app-footer p {
    margin: 0;
    font-size: 0.78rem;
    color: var(--text3);
    letter-spacing: 0.06em;
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }
  .app-footer span { 
    color: var(--accent); 
    transition: color 0.3s ease;
  }
`;function Hv(){const{isDark:c}=Yn();return T.useEffect(()=>{document.documentElement.classList.toggle("dark",c)},[c]),p.jsxs("div",{className:`app-root ${c?"":"light"}`,children:[p.jsx("style",{children:wv}),p.jsx(Tv,{}),p.jsx("div",{style:{paddingTop:"64px"},children:p.jsxs(vp,{children:[p.jsx(Un,{path:"/",element:p.jsxs(p.Fragment,{children:[p.jsxs("header",{className:"app-hero",children:[p.jsxs("h1",{children:["Decoraciones ",p.jsx("span",{children:"Andrea"})]}),p.jsx("p",{children:"Transformando tus momentos en recuerdos inolvidables"})]}),p.jsx("main",{className:"app-main",children:p.jsx(_v,{})})]})}),p.jsx(Un,{path:"/galeria",element:p.jsx("main",{className:"app-main",children:p.jsx(Mv,{})})}),p.jsx(Un,{path:"/buscar",element:p.jsx(Uv,{})}),p.jsx(Un,{path:"/evento/:id",element:p.jsx(Dv,{})})]})}),p.jsx("footer",{className:"app-footer",children:p.jsxs("p",{children:["© 2026 Decoraciones ",p.jsx("span",{children:"Andrea"})]})})]})}bg.createRoot(document.getElementById("root")).render(p.jsx(T.StrictMode,{children:p.jsx(Fp,{children:p.jsx(Gp,{children:p.jsx(Hv,{})})})}));
