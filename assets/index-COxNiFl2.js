(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const S of m.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&r(S)}).observe(document,{childList:!0,subtree:!0});function s(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=s(d);fetch(d.href,m)}})();var Or={exports:{}},Cn={};var em;function og(){if(em)return Cn;em=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(r,d,m){var S=null;if(m!==void 0&&(S=""+m),d.key!==void 0&&(S=""+d.key),"key"in d){m={};for(var R in d)R!=="key"&&(m[R]=d[R])}else m=d;return d=m.ref,{$$typeof:c,type:r,key:S,ref:d!==void 0?d:null,props:m}}return Cn.Fragment=o,Cn.jsx=s,Cn.jsxs=s,Cn}var tm;function sg(){return tm||(tm=1,Or.exports=og()),Or.exports}var g=sg(),Cr={exports:{}},I={};var lm;function dg(){if(lm)return I;lm=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),S=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function V(y){return y===null||typeof y!="object"?null:(y=w&&y[w]||y["@@iterator"],typeof y=="function"?y:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,H={};function X(y,U,Y){this.props=y,this.context=U,this.refs=H,this.updater=Y||G}X.prototype.isReactComponent={},X.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},X.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function B(){}B.prototype=X.prototype;function Q(y,U,Y){this.props=y,this.context=U,this.refs=H,this.updater=Y||G}var oe=Q.prototype=new B;oe.constructor=Q,L(oe,X.prototype),oe.isPureReactComponent=!0;var be=Array.isArray;function Ae(){}var F={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function Ke(y,U,Y){var K=Y.ref;return{$$typeof:c,type:y,key:U,ref:K!==void 0?K:null,props:Y}}function Dt(y,U){return Ke(y.type,U,y.props)}function ht(y){return typeof y=="object"&&y!==null&&y.$$typeof===c}function ke(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return U[Y]})}var jt=/\/+/g;function gt(y,U){return typeof y=="object"&&y!==null&&y.key!=null?ke(""+y.key):U.toString(36)}function je(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ae,Ae):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function C(y,U,Y,K,P){var le=typeof y;(le==="undefined"||le==="boolean")&&(y=null);var de=!1;if(y===null)de=!0;else switch(le){case"bigint":case"string":case"number":de=!0;break;case"object":switch(y.$$typeof){case c:case o:de=!0;break;case N:return de=y._init,C(de(y._payload),U,Y,K,P)}}if(de)return P=P(y),de=K===""?"."+gt(y,0):K,be(P)?(Y="",de!=null&&(Y=de.replace(jt,"$&/")+"/"),C(P,U,Y,"",function(Ba){return Ba})):P!=null&&(ht(P)&&(P=Dt(P,Y+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(jt,"$&/")+"/")+de)),U.push(P)),1;de=0;var $e=K===""?".":K+":";if(be(y))for(var Oe=0;Oe<y.length;Oe++)K=y[Oe],le=$e+gt(K,Oe),de+=C(K,U,Y,le,P);else if(Oe=V(y),typeof Oe=="function")for(y=Oe.call(y),Oe=0;!(K=y.next()).done;)K=K.value,le=$e+gt(K,Oe++),de+=C(K,U,Y,le,P);else if(le==="object"){if(typeof y.then=="function")return C(je(y),U,Y,K,P);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return de}function q(y,U,Y){if(y==null)return y;var K=[],P=0;return C(y,K,"","",function(le){return U.call(Y,le,P++)}),K}function W(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var ge=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},xe={map:q,forEach:function(y,U,Y){q(y,function(){U.apply(this,arguments)},Y)},count:function(y){var U=0;return q(y,function(){U++}),U},toArray:function(y){return q(y,function(U){return U})||[]},only:function(y){if(!ht(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return I.Activity=x,I.Children=xe,I.Component=X,I.Fragment=s,I.Profiler=d,I.PureComponent=Q,I.StrictMode=r,I.Suspense=b,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,I.__COMPILER_RUNTIME={__proto__:null,c:function(y){return F.H.useMemoCache(y)}},I.cache=function(y){return function(){return y.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(y,U,Y){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var K=L({},y.props),P=y.key;if(U!=null)for(le in U.key!==void 0&&(P=""+U.key),U)!Me.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||(K[le]=U[le]);var le=arguments.length-2;if(le===1)K.children=Y;else if(1<le){for(var de=Array(le),$e=0;$e<le;$e++)de[$e]=arguments[$e+2];K.children=de}return Ke(y.type,P,K)},I.createContext=function(y){return y={$$typeof:S,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:m,_context:y},y},I.createElement=function(y,U,Y){var K,P={},le=null;if(U!=null)for(K in U.key!==void 0&&(le=""+U.key),U)Me.call(U,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(P[K]=U[K]);var de=arguments.length-2;if(de===1)P.children=Y;else if(1<de){for(var $e=Array(de),Oe=0;Oe<de;Oe++)$e[Oe]=arguments[Oe+2];P.children=$e}if(y&&y.defaultProps)for(K in de=y.defaultProps,de)P[K]===void 0&&(P[K]=de[K]);return Ke(y,le,P)},I.createRef=function(){return{current:null}},I.forwardRef=function(y){return{$$typeof:R,render:y}},I.isValidElement=ht,I.lazy=function(y){return{$$typeof:N,_payload:{_status:-1,_result:y},_init:W}},I.memo=function(y,U){return{$$typeof:p,type:y,compare:U===void 0?null:U}},I.startTransition=function(y){var U=F.T,Y={};F.T=Y;try{var K=y(),P=F.S;P!==null&&P(Y,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Ae,ge)}catch(le){ge(le)}finally{U!==null&&Y.types!==null&&(U.types=Y.types),F.T=U}},I.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},I.use=function(y){return F.H.use(y)},I.useActionState=function(y,U,Y){return F.H.useActionState(y,U,Y)},I.useCallback=function(y,U){return F.H.useCallback(y,U)},I.useContext=function(y){return F.H.useContext(y)},I.useDebugValue=function(){},I.useDeferredValue=function(y,U){return F.H.useDeferredValue(y,U)},I.useEffect=function(y,U){return F.H.useEffect(y,U)},I.useEffectEvent=function(y){return F.H.useEffectEvent(y)},I.useId=function(){return F.H.useId()},I.useImperativeHandle=function(y,U,Y){return F.H.useImperativeHandle(y,U,Y)},I.useInsertionEffect=function(y,U){return F.H.useInsertionEffect(y,U)},I.useLayoutEffect=function(y,U){return F.H.useLayoutEffect(y,U)},I.useMemo=function(y,U){return F.H.useMemo(y,U)},I.useOptimistic=function(y,U){return F.H.useOptimistic(y,U)},I.useReducer=function(y,U,Y){return F.H.useReducer(y,U,Y)},I.useRef=function(y){return F.H.useRef(y)},I.useState=function(y){return F.H.useState(y)},I.useSyncExternalStore=function(y,U,Y){return F.H.useSyncExternalStore(y,U,Y)},I.useTransition=function(){return F.H.useTransition()},I.version="19.2.4",I}var am;function Xr(){return am||(am=1,Cr.exports=dg()),Cr.exports}var A=Xr(),Dr={exports:{}},Dn={},jr={exports:{}},Ur={};var nm;function mg(){return nm||(nm=1,(function(c){function o(C,q){var W=C.length;C.push(q);e:for(;0<W;){var ge=W-1>>>1,xe=C[ge];if(0<d(xe,q))C[ge]=q,C[W]=xe,W=ge;else break e}}function s(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var q=C[0],W=C.pop();if(W!==q){C[0]=W;e:for(var ge=0,xe=C.length,y=xe>>>1;ge<y;){var U=2*(ge+1)-1,Y=C[U],K=U+1,P=C[K];if(0>d(Y,W))K<xe&&0>d(P,Y)?(C[ge]=P,C[K]=W,ge=K):(C[ge]=Y,C[U]=W,ge=U);else if(K<xe&&0>d(P,W))C[ge]=P,C[K]=W,ge=K;else break e}}return q}function d(C,q){var W=C.sortIndex-q.sortIndex;return W!==0?W:C.id-q.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;c.unstable_now=function(){return m.now()}}else{var S=Date,R=S.now();c.unstable_now=function(){return S.now()-R}}var b=[],p=[],N=1,x=null,w=3,V=!1,G=!1,L=!1,H=!1,X=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function oe(C){for(var q=s(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=C)r(p),q.sortIndex=q.expirationTime,o(b,q);else break;q=s(p)}}function be(C){if(L=!1,oe(C),!G)if(s(b)!==null)G=!0,Ae||(Ae=!0,ke());else{var q=s(p);q!==null&&je(be,q.startTime-C)}}var Ae=!1,F=-1,Me=5,Ke=-1;function Dt(){return H?!0:!(c.unstable_now()-Ke<Me)}function ht(){if(H=!1,Ae){var C=c.unstable_now();Ke=C;var q=!0;try{e:{G=!1,L&&(L=!1,B(F),F=-1),V=!0;var W=w;try{t:{for(oe(C),x=s(b);x!==null&&!(x.expirationTime>C&&Dt());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,w=x.priorityLevel;var xe=ge(x.expirationTime<=C);if(C=c.unstable_now(),typeof xe=="function"){x.callback=xe,oe(C),q=!0;break t}x===s(b)&&r(b),oe(C)}else r(b);x=s(b)}if(x!==null)q=!0;else{var y=s(p);y!==null&&je(be,y.startTime-C),q=!1}}break e}finally{x=null,w=W,V=!1}q=void 0}}finally{q?ke():Ae=!1}}}var ke;if(typeof Q=="function")ke=function(){Q(ht)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,gt=jt.port2;jt.port1.onmessage=ht,ke=function(){gt.postMessage(null)}}else ke=function(){X(ht,0)};function je(C,q){F=X(function(){C(c.unstable_now())},q)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(C){C.callback=null},c.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<C?Math.floor(1e3/C):5},c.unstable_getCurrentPriorityLevel=function(){return w},c.unstable_next=function(C){switch(w){case 1:case 2:case 3:var q=3;break;default:q=w}var W=w;w=q;try{return C()}finally{w=W}},c.unstable_requestPaint=function(){H=!0},c.unstable_runWithPriority=function(C,q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var W=w;w=C;try{return q()}finally{w=W}},c.unstable_scheduleCallback=function(C,q,W){var ge=c.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ge+W:ge):W=ge,C){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=W+xe,C={id:N++,callback:q,priorityLevel:C,startTime:W,expirationTime:xe,sortIndex:-1},W>ge?(C.sortIndex=W,o(p,C),s(b)===null&&C===s(p)&&(L?(B(F),F=-1):L=!0,je(be,W-ge))):(C.sortIndex=xe,o(b,C),G||V||(G=!0,Ae||(Ae=!0,ke()))),C},c.unstable_shouldYield=Dt,c.unstable_wrapCallback=function(C){var q=w;return function(){var W=w;w=q;try{return C.apply(this,arguments)}finally{w=W}}}})(Ur)),Ur}var um;function hg(){return um||(um=1,jr.exports=mg()),jr.exports}var wr={exports:{}},Je={};var im;function gg(){if(im)return Je;im=1;var c=Xr();function o(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)p+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,p,N){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:b,containerInfo:p,implementation:N}}var S=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Je.createPortal=function(b,p){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return m(b,p,null,N)},Je.flushSync=function(b){var p=S.T,N=r.p;try{if(S.T=null,r.p=2,b)return b()}finally{S.T=p,r.p=N,r.d.f()}},Je.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(b,p))},Je.prefetchDNS=function(b){typeof b=="string"&&r.d.D(b)},Je.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var N=p.as,x=R(N,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,V=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;N==="style"?r.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:V}):N==="script"&&r.d.X(b,{crossOrigin:x,integrity:w,fetchPriority:V,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var N=R(p.as,p.crossOrigin);r.d.M(b,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(b)},Je.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var N=p.as,x=R(N,p.crossOrigin);r.d.L(b,N,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(b,p){if(typeof b=="string")if(p){var N=R(p.as,p.crossOrigin);r.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(b)},Je.requestFormReset=function(b){r.d.r(b)},Je.unstable_batchedUpdates=function(b,p){return b(p)},Je.useFormState=function(b,p,N){return S.H.useFormState(b,p,N)},Je.useFormStatus=function(){return S.H.useHostTransitionStatus()},Je.version="19.2.4",Je}var cm;function pg(){if(cm)return wr.exports;cm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),wr.exports=gg(),wr.exports}var rm;function vg(){if(rm)return Dn;rm=1;var c=hg(),o=Xr(),s=pg();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return b(n),e;if(u===a)return b(n),t;u=u.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,f=n.child;f;){if(f===l){i=!0,l=n,a=u;break}if(f===a){i=!0,a=n,l=u;break}f=f.sibling}if(!i){for(f=u.child;f;){if(f===l){i=!0,l=u,a=n;break}if(f===a){i=!0,a=u,l=n;break}f=f.sibling}if(!i)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var jt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===jt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case X:return"Profiler";case H:return"StrictMode";case be:return"Suspense";case Ae:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case Q:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:gt(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return gt(e(t))}catch{}}return null}var je=Array.isArray,C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ge=[],xe=-1;function y(e){return{current:e}}function U(e){0>xe||(e.current=ge[xe],ge[xe]=null,xe--)}function Y(e,t){xe++,ge[xe]=e.current,e.current=t}var K=y(null),P=y(null),le=y(null),de=y(null);function $e(e,t){switch(Y(le,t),Y(P,e),Y(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zd(t),e=Td(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(K),Y(K,e)}function Oe(){U(K),U(P),U(le)}function Ba(e){e.memoizedState!==null&&Y(de,e);var t=K.current,l=Td(t,e.type);t!==l&&(Y(P,e),Y(K,l))}function Yn(e){P.current===e&&(U(K),U(P)),de.current===e&&(U(de),Rn._currentValue=W)}var di,Fr;function Cl(e){if(di===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);di=t&&t[1]||"",Fr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+di+e+Fr}var mi=!1;function hi(e,t){if(!e||mi)return"";mi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var _=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){_=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){_=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&_&&typeof M.stack=="string")return[M.stack,_.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],f=u[1];if(i&&f){var h=i.split(`
`),T=f.split(`
`);for(n=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;if(a===h.length||n===T.length)for(a=h.length-1,n=T.length-1;1<=a&&0<=n&&h[a]!==T[n];)n--;for(;1<=a&&0<=n;a--,n--)if(h[a]!==T[n]){if(a!==1||n!==1)do if(a--,n--,0>n||h[a]!==T[n]){var O=`
`+h[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=n);break}}}finally{mi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Cl(l):""}function Gm(e,t){switch(e.tag){case 26:case 27:case 5:return Cl(e.type);case 16:return Cl("Lazy");case 13:return e.child!==t&&t!==null?Cl("Suspense Fallback"):Cl("Suspense");case 19:return Cl("SuspenseList");case 0:case 15:return hi(e.type,!1);case 11:return hi(e.type.render,!1);case 1:return hi(e.type,!0);case 31:return Cl("Activity");default:return""}}function Ir(e){try{var t="",l=null;do t+=Gm(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var gi=Object.prototype.hasOwnProperty,pi=c.unstable_scheduleCallback,vi=c.unstable_cancelCallback,Xm=c.unstable_shouldYield,Qm=c.unstable_requestPaint,nt=c.unstable_now,Zm=c.unstable_getCurrentPriorityLevel,Pr=c.unstable_ImmediatePriority,ef=c.unstable_UserBlockingPriority,Gn=c.unstable_NormalPriority,Vm=c.unstable_LowPriority,tf=c.unstable_IdlePriority,Km=c.log,km=c.unstable_setDisableYieldValue,qa=null,ut=null;function il(e){if(typeof Km=="function"&&km(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(qa,e)}catch{}}var it=Math.clz32?Math.clz32:Wm,Jm=Math.log,$m=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Jm(e)/$m|0)|0}var Xn=256,Qn=262144,Zn=4194304;function Dl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?n=Dl(a):(i&=f,i!==0?n=Dl(i):l||(l=f&~e,l!==0&&(n=Dl(l))))):(f=a&~u,f!==0?n=Dl(f):i!==0?n=Dl(i):l||(l=a&~e,l!==0&&(n=Dl(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(){var e=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),e}function yi(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Im(e,t,l,a,n,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,h=e.expirationTimes,T=e.hiddenUpdates;for(l=i&~l;0<l;){var O=31-it(l),j=1<<O;f[O]=0,h[O]=-1;var _=T[O];if(_!==null)for(T[O]=null,O=0;O<_.length;O++){var M=_[O];M!==null&&(M.lane&=-536870913)}l&=~j}a!==0&&af(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function af(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function nf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-it(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function uf(e,t){var l=t&-t;return l=(l&42)!==0?1:bi(l),(l&(e.suspendedLanes|t))!==0?0:l}function bi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cf(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:kd(e.type))}function rf(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var cl=Math.random().toString(36).slice(2),Ge="__reactFiber$"+cl,Fe="__reactProps$"+cl,Fl="__reactContainer$"+cl,Si="__reactEvents$"+cl,Pm="__reactListeners$"+cl,eh="__reactHandles$"+cl,ff="__reactResources$"+cl,Ga="__reactMarker$"+cl;function Ei(e){delete e[Ge],delete e[Fe],delete e[Si],delete e[Pm],delete e[eh]}function Il(e){var t=e[Ge];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Fl]||l[Ge]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Cd(e);e!==null;){if(l=e[Ge])return l;e=Cd(e)}return t}e=l,l=e.parentNode}return null}function Pl(e){if(e=e[Ge]||e[Fl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ea(e){var t=e[ff];return t||(t=e[ff]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Ga]=!0}var of=new Set,sf={};function jl(e,t){ta(e,t),ta(e+"Capture",t)}function ta(e,t){for(sf[e]=t,e=0;e<t.length;e++)of.add(t[e])}var th=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),df={},mf={};function lh(e){return gi.call(mf,e)?!0:gi.call(df,e)?!1:th.test(e)?mf[e]=!0:(df[e]=!0,!1)}function Kn(e,t,l){if(lh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function kn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Yt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ah(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){if(!e._valueTracker){var t=hf(e)?"checked":"value";e._valueTracker=ah(e,t,""+e[t])}}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=hf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Jn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nh=/[\n"\\]/g;function vt(e){return e.replace(nh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ti(e,t,l,a,n,u,i,f){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pt(t)):e.value!==""+pt(t)&&(e.value=""+pt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Ai(e,i,pt(t)):l!=null?Ai(e,i,pt(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+pt(f):e.removeAttribute("name")}function pf(e,t,l,a,n,u,i,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){zi(e);return}l=l!=null?""+pt(l):"",t=t!=null?""+pt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),zi(e)}function Ai(e,t,l){t==="number"&&Jn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function la(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+pt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function vf(e,t,l){if(t!=null&&(t=""+pt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+pt(l):""}function yf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(r(92));if(je(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=pt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),zi(e)}function aa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var uh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||uh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function xf(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&bf(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&bf(e,u,t[u])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ch=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $n(e){return ch.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Ri=null;function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ua=null;function Sf(e){var t=Pl(e);if(t&&(e=t.stateNode)){var l=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ti(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Fe]||null;if(!n)throw Error(r(90));Ti(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&gf(a)}break e;case"textarea":vf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&la(e,!!l.multiple,t,!1)}}}var Mi=!1;function Ef(e,t,l){if(Mi)return e(t,l);Mi=!0;try{var a=e(t);return a}finally{if(Mi=!1,(na!==null||ua!==null)&&(Hu(),na&&(t=na,e=ua,ua=na=null,Sf(t),e)))for(t=0;t<e.length;t++)Sf(e[t])}}function Qa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Fe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=!1;if(Xt)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Oi=!1}var rl=null,Ci=null,Wn=null;function zf(){if(Wn)return Wn;var e,t=Ci,l=t.length,a,n="value"in rl?rl.value:rl.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===n[u-a];a++);return Wn=n.slice(e,1<a?1-a:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Tf(){return!1}function Ie(e){function t(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?In:Tf,this.isPropagationStopped=Tf,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var Ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=Ie(Ul),Va=x({},Ul,{view:0,detail:0}),rh=Ie(Va),Di,ji,Ka,eu=x({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ka&&(Ka&&e.type==="mousemove"?(Di=e.screenX-Ka.screenX,ji=e.screenY-Ka.screenY):ji=Di=0,Ka=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),Af=Ie(eu),fh=x({},eu,{dataTransfer:0}),oh=Ie(fh),sh=x({},Va,{relatedTarget:0}),Ui=Ie(sh),dh=x({},Ul,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=Ie(dh),hh=x({},Ul,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gh=Ie(hh),ph=x({},Ul,{data:0}),_f=Ie(ph),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bh[e])?!!t[e]:!1}function wi(){return xh}var Sh=x({},Va,{key:function(e){if(e.key){var t=vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wi,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eh=Ie(Sh),zh=x({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=Ie(zh),Th=x({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wi}),Ah=Ie(Th),_h=x({},Ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rh=Ie(_h),Nh=x({},eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mh=Ie(Nh),Oh=x({},Ul,{newState:0,oldState:0}),Ch=Ie(Oh),Dh=[9,13,27,32],Hi=Xt&&"CompositionEvent"in window,ka=null;Xt&&"documentMode"in document&&(ka=document.documentMode);var jh=Xt&&"TextEvent"in window&&!ka,Nf=Xt&&(!Hi||ka&&8<ka&&11>=ka),Mf=" ",Of=!1;function Cf(e,t){switch(e){case"keyup":return Dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ia=!1;function Uh(e,t){switch(e){case"compositionend":return Df(t);case"keypress":return t.which!==32?null:(Of=!0,Mf);case"textInput":return e=t.data,e===Mf&&Of?null:e;default:return null}}function wh(e,t){if(ia)return e==="compositionend"||!Hi&&Cf(e,t)?(e=zf(),Wn=Ci=rl=null,ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nf&&t.locale!=="ko"?null:t.data;default:return null}}var Hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hh[e.type]:t==="textarea"}function Uf(e,t,l,a){na?ua?ua.push(a):ua=[a]:na=a,t=Qu(t,"onChange"),0<t.length&&(l=new Pn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ja=null,$a=null;function Bh(e){vd(e,0)}function tu(e){var t=Xa(e);if(gf(t))return e}function wf(e,t){if(e==="change")return t}var Hf=!1;if(Xt){var Bi;if(Xt){var qi="oninput"in document;if(!qi){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),qi=typeof Bf.oninput=="function"}Bi=qi}else Bi=!1;Hf=Bi&&(!document.documentMode||9<document.documentMode)}function qf(){Ja&&(Ja.detachEvent("onpropertychange",Lf),$a=Ja=null)}function Lf(e){if(e.propertyName==="value"&&tu($a)){var t=[];Uf(t,$a,e,Ni(e)),Ef(Bh,t)}}function qh(e,t,l){e==="focusin"?(qf(),Ja=t,$a=l,Ja.attachEvent("onpropertychange",Lf)):e==="focusout"&&qf()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tu($a)}function Yh(e,t){if(e==="click")return tu(t)}function Gh(e,t){if(e==="input"||e==="change")return tu(t)}function Xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Xh;function Wa(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!gi.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function Yf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gf(e,t){var l=Yf(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Yf(l)}}function Xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Jn(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qh=Xt&&"documentMode"in document&&11>=document.documentMode,ca=null,Yi=null,Fa=null,Gi=!1;function Zf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Gi||ca==null||ca!==Jn(a)||(a=ca,"selectionStart"in a&&Li(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fa&&Wa(Fa,a)||(Fa=a,a=Qu(Yi,"onSelect"),0<a.length&&(t=new Pn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ca)))}function wl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ra={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionrun:wl("Transition","TransitionRun"),transitionstart:wl("Transition","TransitionStart"),transitioncancel:wl("Transition","TransitionCancel"),transitionend:wl("Transition","TransitionEnd")},Xi={},Vf={};Xt&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Hl(e){if(Xi[e])return Xi[e];if(!ra[e])return e;var t=ra[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Vf)return Xi[e]=t[l];return e}var Kf=Hl("animationend"),kf=Hl("animationiteration"),Jf=Hl("animationstart"),Zh=Hl("transitionrun"),Vh=Hl("transitionstart"),Kh=Hl("transitioncancel"),$f=Hl("transitionend"),Wf=new Map,Qi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qi.push("scrollEnd");function Nt(e,t){Wf.set(e,t),jl(t,[e])}var lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],fa=0,Zi=0;function au(){for(var e=fa,t=Zi=fa=0;t<e;){var l=yt[t];yt[t++]=null;var a=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var u=yt[t];if(yt[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&Ff(l,n,u)}}function nu(e,t,l,a){yt[fa++]=e,yt[fa++]=t,yt[fa++]=l,yt[fa++]=a,Zi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Vi(e,t,l,a){return nu(e,t,l,a),uu(e)}function Bl(e,t){return nu(e,null,null,t),uu(e)}function Ff(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-it(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function uu(e){if(50<xn)throw xn=0,er=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oa={};function kh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,l,a){return new kh(e,t,l,a)}function Ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var l=e.alternate;return l===null?(l=rt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function If(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function iu(e,t,l,a,n,u){var i=0;if(a=e,typeof e=="function")Ki(e)&&(i=1);else if(typeof e=="string")i=I0(e,l,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=rt(31,l,t,n),e.elementType=Ke,e.lanes=u,e;case L:return ql(l.children,n,u,t);case H:i=8,n|=24;break;case X:return e=rt(12,l,t,n|2),e.elementType=X,e.lanes=u,e;case be:return e=rt(13,l,t,n),e.elementType=be,e.lanes=u,e;case Ae:return e=rt(19,l,t,n),e.elementType=Ae,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:i=10;break e;case B:i=9;break e;case oe:i=11;break e;case F:i=14;break e;case Me:i=16,a=null;break e}i=29,l=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=rt(i,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function ql(e,t,l,a){return e=rt(7,e,a,t),e.lanes=l,e}function ki(e,t,l){return e=rt(6,e,null,t),e.lanes=l,e}function Pf(e){var t=rt(18,null,null,0);return t.stateNode=e,t}function Ji(e,t,l){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var eo=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var l=eo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ir(t)},eo.set(e,t),t)}return{value:e,source:t,stack:Ir(t)}}var sa=[],da=0,cu=null,Ia=0,xt=[],St=0,fl=null,Ut=1,wt="";function Zt(e,t){sa[da++]=Ia,sa[da++]=cu,cu=e,Ia=t}function to(e,t,l){xt[St++]=Ut,xt[St++]=wt,xt[St++]=fl,fl=e;var a=Ut;e=wt;var n=32-it(a)-1;a&=~(1<<n),l+=1;var u=32-it(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Ut=1<<32-it(t)+n|l<<n|a,wt=u+e}else Ut=1<<u|l<<n|a,wt=e}function $i(e){e.return!==null&&(Zt(e,1),to(e,1,0))}function Wi(e){for(;e===cu;)cu=sa[--da],sa[da]=null,Ia=sa[--da],sa[da]=null;for(;e===fl;)fl=xt[--St],xt[St]=null,wt=xt[--St],xt[St]=null,Ut=xt[--St],xt[St]=null}function lo(e,t){xt[St++]=Ut,xt[St++]=wt,xt[St++]=fl,Ut=t.id,wt=t.overflow,fl=e}var Xe=null,Ee=null,ce=!1,ol=null,Et=!1,Fi=Error(r(519));function sl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pa(bt(t,e)),Fi}function ao(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ge]=e,t[Fe]=a,l){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(l=0;l<En.length;l++)ne(En[l],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),pf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),yf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Sd(t.textContent,l)?(a.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),a.onScroll!=null&&ne("scroll",t),a.onScrollEnd!=null&&ne("scrollend",t),a.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||sl(e,!0)}function no(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Xe=Xe.return}}function ma(e){if(e!==Xe)return!1;if(!ce)return no(e),ce=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||gr(e.type,e.memoizedProps)),l=!l),l&&Ee&&sl(e),no(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ee=Od(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ee=Od(e)}else t===27?(t=Ee,Al(e.type)?(e=xr,xr=null,Ee=e):Ee=t):Ee=Xe?Tt(e.stateNode.nextSibling):null;return!0}function Ll(){Ee=Xe=null,ce=!1}function Ii(){var e=ol;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),ol=null),e}function Pa(e){ol===null?ol=[e]:ol.push(e)}var Pi=y(null),Yl=null,Vt=null;function dl(e,t,l){Y(Pi,t._currentValue),t._currentValue=l}function Kt(e){e._currentValue=Pi.current,U(Pi)}function ec(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function tc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var f=u;u=n;for(var h=0;h<t.length;h++)if(f.context===t[h]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),ec(u.return,l,e),a||(i=null);break e}u=f.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(r(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),ec(i,l,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ha(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var f=n.type;ct(n.pendingProps.value,i.value)||(e!==null?e.push(f):e=[f])}}else if(n===de.current){if(i=n.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Rn):e=[Rn])}n=n.return}e!==null&&tc(t,e,l,a),t.flags|=262144}function ru(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gl(e){Yl=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return uo(Yl,e)}function fu(e,t){return Yl===null&&Gl(e),uo(e,t)}function uo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Vt===null){if(e===null)throw Error(r(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return l}var Jh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},$h=c.unstable_scheduleCallback,Wh=c.unstable_NormalPriority,Ue={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new Jh,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&$h(Wh,function(){e.controller.abort()})}var tn=null,ac=0,ga=0,pa=null;function Fh(e,t){if(tn===null){var l=tn=[];ac=0,ga=ir(),pa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ac++,t.then(io,io),t}function io(){if(--ac===0&&tn!==null){pa!==null&&(pa.status="fulfilled");var e=tn;tn=null,ga=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ih(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var co=C.S;C.S=function(e,t){Vs=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fh(e,t),co!==null&&co(e,t)};var Xl=y(null);function nc(){var e=Xl.current;return e!==null?e:Se.pooledCache}function ou(e,t){t===null?Y(Xl,Xl.current):Y(Xl,t.pool)}function ro(){var e=nc();return e===null?null:{parent:Ue._currentValue,pool:e}}var va=Error(r(460)),uc=Error(r(474)),su=Error(r(542)),du={then:function(){}};function fo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function oo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Gt,Gt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mo(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mo(e),e}throw Zl=t,va}}function Ql(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Zl=l,va):l}}var Zl=null;function so(){if(Zl===null)throw Error(r(459));var e=Zl;return Zl=null,e}function mo(e){if(e===va||e===su)throw Error(r(483))}var ya=null,ln=0;function mu(e){var t=ln;return ln+=1,ya===null&&(ya=[]),oo(ya,e,t)}function an(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hu(e,t){throw t.$$typeof===w?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ho(e){function t(E,v){if(e){var z=E.deletions;z===null?(E.deletions=[v],E.flags|=16):z.push(v)}}function l(E,v){if(!e)return null;for(;v!==null;)t(E,v),v=v.sibling;return null}function a(E){for(var v=new Map;E!==null;)E.key!==null?v.set(E.key,E):v.set(E.index,E),E=E.sibling;return v}function n(E,v){return E=Qt(E,v),E.index=0,E.sibling=null,E}function u(E,v,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<v?(E.flags|=67108866,v):z):(E.flags|=67108866,v)):(E.flags|=1048576,v)}function i(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function f(E,v,z,D){return v===null||v.tag!==6?(v=ki(z,E.mode,D),v.return=E,v):(v=n(v,z),v.return=E,v)}function h(E,v,z,D){var J=z.type;return J===L?O(E,v,z.props.children,D,z.key):v!==null&&(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Me&&Ql(J)===v.type)?(v=n(v,z.props),an(v,z),v.return=E,v):(v=iu(z.type,z.key,z.props,null,E.mode,D),an(v,z),v.return=E,v)}function T(E,v,z,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=Ji(z,E.mode,D),v.return=E,v):(v=n(v,z.children||[]),v.return=E,v)}function O(E,v,z,D,J){return v===null||v.tag!==7?(v=ql(z,E.mode,D,J),v.return=E,v):(v=n(v,z),v.return=E,v)}function j(E,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=ki(""+v,E.mode,z),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case V:return z=iu(v.type,v.key,v.props,null,E.mode,z),an(z,v),z.return=E,z;case G:return v=Ji(v,E.mode,z),v.return=E,v;case Me:return v=Ql(v),j(E,v,z)}if(je(v)||ke(v))return v=ql(v,E.mode,z,null),v.return=E,v;if(typeof v.then=="function")return j(E,mu(v),z);if(v.$$typeof===Q)return j(E,fu(E,v),z);hu(E,v)}return null}function _(E,v,z,D){var J=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return J!==null?null:f(E,v,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case V:return z.key===J?h(E,v,z,D):null;case G:return z.key===J?T(E,v,z,D):null;case Me:return z=Ql(z),_(E,v,z,D)}if(je(z)||ke(z))return J!==null?null:O(E,v,z,D,null);if(typeof z.then=="function")return _(E,v,mu(z),D);if(z.$$typeof===Q)return _(E,v,fu(E,z),D);hu(E,z)}return null}function M(E,v,z,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return E=E.get(z)||null,f(v,E,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case V:return E=E.get(D.key===null?z:D.key)||null,h(v,E,D,J);case G:return E=E.get(D.key===null?z:D.key)||null,T(v,E,D,J);case Me:return D=Ql(D),M(E,v,z,D,J)}if(je(D)||ke(D))return E=E.get(z)||null,O(v,E,D,J,null);if(typeof D.then=="function")return M(E,v,z,mu(D),J);if(D.$$typeof===Q)return M(E,v,z,fu(v,D),J);hu(v,D)}return null}function Z(E,v,z,D){for(var J=null,re=null,k=v,te=v=0,ie=null;k!==null&&te<z.length;te++){k.index>te?(ie=k,k=null):ie=k.sibling;var fe=_(E,k,z[te],D);if(fe===null){k===null&&(k=ie);break}e&&k&&fe.alternate===null&&t(E,k),v=u(fe,v,te),re===null?J=fe:re.sibling=fe,re=fe,k=ie}if(te===z.length)return l(E,k),ce&&Zt(E,te),J;if(k===null){for(;te<z.length;te++)k=j(E,z[te],D),k!==null&&(v=u(k,v,te),re===null?J=k:re.sibling=k,re=k);return ce&&Zt(E,te),J}for(k=a(k);te<z.length;te++)ie=M(k,E,te,z[te],D),ie!==null&&(e&&ie.alternate!==null&&k.delete(ie.key===null?te:ie.key),v=u(ie,v,te),re===null?J=ie:re.sibling=ie,re=ie);return e&&k.forEach(function(Ol){return t(E,Ol)}),ce&&Zt(E,te),J}function $(E,v,z,D){if(z==null)throw Error(r(151));for(var J=null,re=null,k=v,te=v=0,ie=null,fe=z.next();k!==null&&!fe.done;te++,fe=z.next()){k.index>te?(ie=k,k=null):ie=k.sibling;var Ol=_(E,k,fe.value,D);if(Ol===null){k===null&&(k=ie);break}e&&k&&Ol.alternate===null&&t(E,k),v=u(Ol,v,te),re===null?J=Ol:re.sibling=Ol,re=Ol,k=ie}if(fe.done)return l(E,k),ce&&Zt(E,te),J;if(k===null){for(;!fe.done;te++,fe=z.next())fe=j(E,fe.value,D),fe!==null&&(v=u(fe,v,te),re===null?J=fe:re.sibling=fe,re=fe);return ce&&Zt(E,te),J}for(k=a(k);!fe.done;te++,fe=z.next())fe=M(k,E,te,fe.value,D),fe!==null&&(e&&fe.alternate!==null&&k.delete(fe.key===null?te:fe.key),v=u(fe,v,te),re===null?J=fe:re.sibling=fe,re=fe);return e&&k.forEach(function(fg){return t(E,fg)}),ce&&Zt(E,te),J}function ye(E,v,z,D){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case V:e:{for(var J=z.key;v!==null;){if(v.key===J){if(J=z.type,J===L){if(v.tag===7){l(E,v.sibling),D=n(v,z.props.children),D.return=E,E=D;break e}}else if(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Me&&Ql(J)===v.type){l(E,v.sibling),D=n(v,z.props),an(D,z),D.return=E,E=D;break e}l(E,v);break}else t(E,v);v=v.sibling}z.type===L?(D=ql(z.props.children,E.mode,D,z.key),D.return=E,E=D):(D=iu(z.type,z.key,z.props,null,E.mode,D),an(D,z),D.return=E,E=D)}return i(E);case G:e:{for(J=z.key;v!==null;){if(v.key===J)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){l(E,v.sibling),D=n(v,z.children||[]),D.return=E,E=D;break e}else{l(E,v);break}else t(E,v);v=v.sibling}D=Ji(z,E.mode,D),D.return=E,E=D}return i(E);case Me:return z=Ql(z),ye(E,v,z,D)}if(je(z))return Z(E,v,z,D);if(ke(z)){if(J=ke(z),typeof J!="function")throw Error(r(150));return z=J.call(z),$(E,v,z,D)}if(typeof z.then=="function")return ye(E,v,mu(z),D);if(z.$$typeof===Q)return ye(E,v,fu(E,z),D);hu(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(l(E,v.sibling),D=n(v,z),D.return=E,E=D):(l(E,v),D=ki(z,E.mode,D),D.return=E,E=D),i(E)):l(E,v)}return function(E,v,z,D){try{ln=0;var J=ye(E,v,z,D);return ya=null,J}catch(k){if(k===va||k===su)throw k;var re=rt(29,k,null,E.mode);return re.lanes=D,re.return=E,re}}}var Vl=ho(!0),go=ho(!1),ml=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(se&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=uu(e),Ff(e,null,l),t}return nu(e,a,t,l),uu(e)}function nn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,nf(e,l)}}function rc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var fc=!1;function un(){if(fc){var e=pa;if(e!==null)throw e}}function cn(e,t,l,a){fc=!1;var n=e.updateQueue;ml=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var h=f,T=h.next;h.next=null,i===null?u=T:i.next=T,i=h;var O=e.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==i&&(f===null?O.firstBaseUpdate=T:f.next=T,O.lastBaseUpdate=h))}if(u!==null){var j=n.baseState;i=0,O=T=h=null,f=u;do{var _=f.lane&-536870913,M=_!==f.lane;if(M?(ue&_)===_:(a&_)===_){_!==0&&_===ga&&(fc=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Z=e,$=f;_=t;var ye=l;switch($.tag){case 1:if(Z=$.payload,typeof Z=="function"){j=Z.call(ye,j,_);break e}j=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=$.payload,_=typeof Z=="function"?Z.call(ye,j,_):Z,_==null)break e;j=x({},j,_);break e;case 2:ml=!0}}_=f.callback,_!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[_]:M.push(_))}else M={lane:_,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(T=O=M,h=j):O=O.next=M,i|=_;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;M=f,f=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);O===null&&(h=j),n.baseState=h,n.firstBaseUpdate=T,n.lastBaseUpdate=O,u===null&&(n.shared.lanes=0),xl|=i,e.lanes=i,e.memoizedState=j}}function po(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function vo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)po(l[e],t)}var ba=y(null),gu=y(0);function yo(e,t){e=tl,Y(gu,e),Y(ba,t),tl=e|t.baseLanes}function oc(){Y(gu,tl),Y(ba,ba.current)}function sc(){tl=gu.current,U(ba),U(gu)}var ft=y(null),zt=null;function pl(e){var t=e.alternate;Y(Ce,Ce.current&1),Y(ft,e),zt===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(zt=e)}function dc(e){Y(Ce,Ce.current),Y(ft,e),zt===null&&(zt=e)}function bo(e){e.tag===22?(Y(Ce,Ce.current),Y(ft,e),zt===null&&(zt=e)):vl()}function vl(){Y(Ce,Ce.current),Y(ft,ft.current)}function ot(e){U(ft),zt===e&&(zt=null),U(Ce)}var Ce=y(0);function pu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||yr(l)||br(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=0,ee=null,pe=null,we=null,vu=!1,xa=!1,Kl=!1,yu=0,rn=0,Sa=null,Ph=0;function Re(){throw Error(r(321))}function mc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ct(e[l],t[l]))return!1;return!0}function hc(e,t,l,a,n,u){return kt=u,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?ls:Mc,Kl=!1,u=l(a,n),Kl=!1,xa&&(u=So(t,l,a,n)),xo(e),u}function xo(e){C.H=sn;var t=pe!==null&&pe.next!==null;if(kt=0,we=pe=ee=null,vu=!1,rn=0,Sa=null,t)throw Error(r(300));e===null||He||(e=e.dependencies,e!==null&&ru(e)&&(He=!0))}function So(e,t,l,a){ee=e;var n=0;do{if(xa&&(Sa=null),rn=0,xa=!1,25<=n)throw Error(r(301));if(n+=1,we=pe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}C.H=as,u=t(l,a)}while(xa);return u}function e0(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?fn(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(ee.flags|=1024),t}function gc(){var e=yu!==0;return yu=0,e}function pc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function vc(e){if(vu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vu=!1}kt=0,we=pe=ee=null,xa=!1,rn=yu=0,Sa=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ee.memoizedState=we=e:we=we.next=e,we}function De(){if(pe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=we===null?ee.memoizedState:we.next;if(t!==null)we=t,pe=e;else{if(e===null)throw ee.alternate===null?Error(r(467)):Error(r(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?ee.memoizedState=we=e:we=we.next=e}return we}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(e){var t=rn;return rn+=1,Sa===null&&(Sa=[]),e=oo(Sa,e,t),t=ee,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?ls:Mc),e}function xu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fn(e);if(e.$$typeof===Q)return Qe(e)}throw Error(r(438,String(e)))}function yc(e){var t=null,l=ee.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ee.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=bu(),ee.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Dt;return t.index++,l}function Jt(e,t){return typeof t=="function"?t(e):t}function Su(e){var t=De();return bc(t,pe,e)}function bc(e,t,l){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var f=i=null,h=null,T=t,O=!1;do{var j=T.lane&-536870913;if(j!==T.lane?(ue&j)===j:(kt&j)===j){var _=T.revertLane;if(_===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),j===ga&&(O=!0);else if((kt&_)===_){T=T.next,_===ga&&(O=!0);continue}else j={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},h===null?(f=h=j,i=u):h=h.next=j,ee.lanes|=_,xl|=_;j=T.action,Kl&&l(u,j),u=T.hasEagerState?T.eagerState:l(u,j)}else _={lane:j,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},h===null?(f=h=_,i=u):h=h.next=_,ee.lanes|=j,xl|=j;T=T.next}while(T!==null&&T!==t);if(h===null?i=u:h.next=f,!ct(u,e.memoizedState)&&(He=!0,O&&(l=pa,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=h,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function xc(e){var t=De(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);ct(u,t.memoizedState)||(He=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function Eo(e,t,l){var a=ee,n=De(),u=ce;if(u){if(l===void 0)throw Error(r(407));l=l()}else l=t();var i=!ct((pe||n).memoizedState,l);if(i&&(n.memoizedState=l,He=!0),n=n.queue,zc(Ao.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(a.flags|=2048,Ea(9,{destroy:void 0},To.bind(null,a,n,l,t),null),Se===null)throw Error(r(349));u||(kt&127)!==0||zo(a,t,l)}return l}function zo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ee.updateQueue,t===null?(t=bu(),ee.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function To(e,t,l,a){t.value=l,t.getSnapshot=a,_o(t)&&Ro(e)}function Ao(e,t,l){return l(function(){_o(t)&&Ro(e)})}function _o(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ct(e,l)}catch{return!0}}function Ro(e){var t=Bl(e,2);t!==null&&at(t,e,2)}function Sc(e){var t=We();if(typeof e=="function"){var l=e;if(e=l(),Kl){il(!0);try{l()}finally{il(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function No(e,t,l,a){return e.baseState=l,bc(e,pe,typeof a=="function"?a:Jt)}function t0(e,t,l,a,n){if(Tu(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};C.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,Mo(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Mo(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=C.T,i={};C.T=i;try{var f=l(n,a),h=C.S;h!==null&&h(i,f),Oo(e,t,f)}catch(T){Ec(e,t,T)}finally{u!==null&&i.types!==null&&(u.types=i.types),C.T=u}}else try{u=l(n,a),Oo(e,t,u)}catch(T){Ec(e,t,T)}}function Oo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Co(e,t,a)},function(a){return Ec(e,t,a)}):Co(e,t,l)}function Co(e,t,l){t.status="fulfilled",t.value=l,Do(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Mo(e,l)))}function Ec(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Do(t),t=t.next;while(t!==a)}e.action=null}function Do(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jo(e,t){return t}function Uo(e,t){if(ce){var l=Se.formState;if(l!==null){e:{var a=ee;if(ce){if(Ee){t:{for(var n=Ee,u=Et;n.nodeType!==8;){if(!u){n=null;break t}if(n=Tt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Ee=Tt(n.nextSibling),a=n.data==="F!";break e}}sl(a)}a=!1}a&&(t=l[0])}}return l=We(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},l.queue=a,l=Po.bind(null,ee,a),a.dispatch=l,a=Sc(!1),u=Nc.bind(null,ee,!1,a.queue),a=We(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=t0.bind(null,ee,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function wo(e){var t=De();return Ho(t,pe,e)}function Ho(e,t,l){if(t=bc(e,t,jo)[0],e=Su(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=fn(t)}catch(i){throw i===va?su:i}else a=t;t=De();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(ee.flags|=2048,Ea(9,{destroy:void 0},l0.bind(null,n,l),null)),[a,u,e]}function l0(e,t){e.action=t}function Bo(e){var t=De(),l=pe;if(l!==null)return Ho(t,l,e);De(),t=t.memoizedState,l=De();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ea(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ee.updateQueue,t===null&&(t=bu(),ee.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function qo(){return De().memoizedState}function Eu(e,t,l,a){var n=We();ee.flags|=e,n.memoizedState=Ea(1|t,{destroy:void 0},l,a===void 0?null:a)}function zu(e,t,l,a){var n=De();a=a===void 0?null:a;var u=n.memoizedState.inst;pe!==null&&a!==null&&mc(a,pe.memoizedState.deps)?n.memoizedState=Ea(t,u,l,a):(ee.flags|=e,n.memoizedState=Ea(1|t,u,l,a))}function Lo(e,t){Eu(8390656,8,e,t)}function zc(e,t){zu(2048,8,e,t)}function a0(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=bu(),ee.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Yo(e){var t=De().memoizedState;return a0({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Go(e,t){return zu(4,2,e,t)}function Xo(e,t){return zu(4,4,e,t)}function Qo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zo(e,t,l){l=l!=null?l.concat([e]):null,zu(4,4,Qo.bind(null,t,e),l)}function Tc(){}function Vo(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&mc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Ko(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&mc(t,a[1]))return a[0];if(a=e(),Kl){il(!0);try{e()}finally{il(!1)}}return l.memoizedState=[a,t],a}function Ac(e,t,l){return l===void 0||(kt&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=ks(),ee.lanes|=e,xl|=e,l)}function ko(e,t,l,a){return ct(l,t)?l:ba.current!==null?(e=Ac(e,l,a),ct(e,t)||(He=!0),e):(kt&42)===0||(kt&1073741824)!==0&&(ue&261930)===0?(He=!0,e.memoizedState=l):(e=ks(),ee.lanes|=e,xl|=e,t)}function Jo(e,t,l,a,n){var u=q.p;q.p=u!==0&&8>u?u:8;var i=C.T,f={};C.T=f,Nc(e,!1,t,l);try{var h=n(),T=C.S;if(T!==null&&T(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var O=Ih(h,a);on(e,t,O,mt(e))}else on(e,t,a,mt(e))}catch(j){on(e,t,{then:function(){},status:"rejected",reason:j},mt())}finally{q.p=u,i!==null&&f.types!==null&&(i.types=f.types),C.T=i}}function n0(){}function _c(e,t,l,a){if(e.tag!==5)throw Error(r(476));var n=$o(e).queue;Jo(e,n,t,W,l===null?n0:function(){return Wo(e),l(a)})}function $o(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:W},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wo(e){var t=$o(e);t.next===null&&(t=e.alternate.memoizedState),on(e,t.next.queue,{},mt())}function Rc(){return Qe(Rn)}function Fo(){return De().memoizedState}function Io(){return De().memoizedState}function u0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=mt();e=hl(l);var a=gl(t,e,l);a!==null&&(at(a,t,l),nn(a,t,l)),t={cache:lc()},e.payload=t;return}t=t.return}}function i0(e,t,l){var a=mt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Tu(e)?es(t,l):(l=Vi(e,t,l,a),l!==null&&(at(l,e,a),ts(l,t,a)))}function Po(e,t,l){var a=mt();on(e,t,l,a)}function on(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))es(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,f=u(i,l);if(n.hasEagerState=!0,n.eagerState=f,ct(f,i))return nu(e,t,n,0),Se===null&&au(),!1}catch{}if(l=Vi(e,t,n,a),l!==null)return at(l,e,a),ts(l,t,a),!0}return!1}function Nc(e,t,l,a){if(a={lane:2,revertLane:ir(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(e)){if(t)throw Error(r(479))}else t=Vi(e,l,a,2),t!==null&&at(t,e,2)}function Tu(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function es(e,t){xa=vu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function ts(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,nf(e,l)}}var sn={readContext:Qe,use:xu,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};sn.useEffectEvent=Re;var ls={readContext:Qe,use:xu,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Lo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Eu(4194308,4,Qo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Eu(4194308,4,e,t)},useInsertionEffect:function(e,t){Eu(4,2,e,t)},useMemo:function(e,t){var l=We();t=t===void 0?null:t;var a=e();if(Kl){il(!0);try{e()}finally{il(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=We();if(l!==void 0){var n=l(t);if(Kl){il(!0);try{l(t)}finally{il(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=i0.bind(null,ee,e),[a.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=Sc(e);var t=e.queue,l=Po.bind(null,ee,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Tc,useDeferredValue:function(e,t){var l=We();return Ac(l,e,t)},useTransition:function(){var e=Sc(!1);return e=Jo.bind(null,ee,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ee,n=We();if(ce){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Se===null)throw Error(r(349));(ue&127)!==0||zo(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,Lo(Ao.bind(null,a,u,e),[e]),a.flags|=2048,Ea(9,{destroy:void 0},To.bind(null,a,u,l,t),null),l},useId:function(){var e=We(),t=Se.identifierPrefix;if(ce){var l=wt,a=Ut;l=(a&~(1<<32-it(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=yu++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Ph++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rc,useFormState:Uo,useActionState:Uo,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Nc.bind(null,ee,!0,l),l.dispatch=t,[e,t]},useMemoCache:yc,useCacheRefresh:function(){return We().memoizedState=u0.bind(null,ee)},useEffectEvent:function(e){var t=We(),l={impl:e};return t.memoizedState=l,function(){if((se&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},Mc={readContext:Qe,use:xu,useCallback:Vo,useContext:Qe,useEffect:zc,useImperativeHandle:Zo,useInsertionEffect:Go,useLayoutEffect:Xo,useMemo:Ko,useReducer:Su,useRef:qo,useState:function(){return Su(Jt)},useDebugValue:Tc,useDeferredValue:function(e,t){var l=De();return ko(l,pe.memoizedState,e,t)},useTransition:function(){var e=Su(Jt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:Eo,useId:Fo,useHostTransitionStatus:Rc,useFormState:wo,useActionState:wo,useOptimistic:function(e,t){var l=De();return No(l,pe,e,t)},useMemoCache:yc,useCacheRefresh:Io};Mc.useEffectEvent=Yo;var as={readContext:Qe,use:xu,useCallback:Vo,useContext:Qe,useEffect:zc,useImperativeHandle:Zo,useInsertionEffect:Go,useLayoutEffect:Xo,useMemo:Ko,useReducer:xc,useRef:qo,useState:function(){return xc(Jt)},useDebugValue:Tc,useDeferredValue:function(e,t){var l=De();return pe===null?Ac(l,e,t):ko(l,pe.memoizedState,e,t)},useTransition:function(){var e=xc(Jt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:Eo,useId:Fo,useHostTransitionStatus:Rc,useFormState:Bo,useActionState:Bo,useOptimistic:function(e,t){var l=De();return pe!==null?No(l,pe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:yc,useCacheRefresh:Io};as.useEffectEvent=Yo;function Oc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:x({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Cc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=mt(),n=hl(a);n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(at(t,e,a),nn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=mt(),n=hl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(at(t,e,a),nn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=mt(),a=hl(l);a.tag=2,t!=null&&(a.callback=t),t=gl(e,a,l),t!==null&&(at(t,e,l),nn(t,e,l))}};function ns(e,t,l,a,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!Wa(l,a)||!Wa(n,u):!0}function us(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Cc.enqueueReplaceState(t,t.state,null)}function kl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=x({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function is(e){lu(e)}function cs(e){console.error(e)}function rs(e){lu(e)}function Au(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function fs(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Dc(e,t,l){return l=hl(l),l.tag=3,l.payload={element:null},l.callback=function(){Au(e,t)},l}function os(e){return e=hl(e),e.tag=3,e}function ss(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){fs(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){fs(t,l,a),typeof n!="function"&&(Sl===null?Sl=new Set([this]):Sl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function c0(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ha(t,l,n,!0),l=ft.current,l!==null){switch(l.tag){case 31:case 13:return zt===null?Bu():l.alternate===null&&Ne===0&&(Ne=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===du?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),ar(e,a,n)),!1;case 22:return l.flags|=65536,a===du?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),ar(e,a,n)),!1}throw Error(r(435,l.tag))}return ar(e,a,n),Bu(),!1}if(ce)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Fi&&(e=Error(r(422),{cause:a}),Pa(bt(e,l)))):(a!==Fi&&(t=Error(r(423),{cause:a}),Pa(bt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=bt(a,l),n=Dc(e.stateNode,a,n),rc(e,n),Ne!==4&&(Ne=2)),!1;var u=Error(r(520),{cause:a});if(u=bt(u,l),bn===null?bn=[u]:bn.push(u),Ne!==4&&(Ne=2),t===null)return!0;a=bt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Dc(l.stateNode,a,e),rc(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Sl===null||!Sl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=os(n),ss(n,e,l,a),rc(l,n),!1}l=l.return}while(l!==null);return!1}var jc=Error(r(461)),He=!1;function Ze(e,t,l,a){t.child=e===null?go(t,null,l,a):Vl(t,e.child,l,a)}function ds(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var i={};for(var f in a)f!=="ref"&&(i[f]=a[f])}else i=a;return Gl(t),a=hc(e,t,l,i,u,n),f=gc(),e!==null&&!He?(pc(e,t,n),$t(e,t,n)):(ce&&f&&$i(t),t.flags|=1,Ze(e,t,a,n),t.child)}function ms(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!Ki(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,hs(e,t,u,a,n)):(e=iu(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Gc(e,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Wa,l(i,a)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=Qt(u,a),e.ref=t.ref,e.return=t,t.child=e}function hs(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(Wa(u,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=u,Gc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,$t(e,t,n)}return Uc(e,t,l,a,n)}function gs(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return ps(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ou(t,u!==null?u.cachePool:null),u!==null?yo(t,u):oc(),bo(t);else return a=t.lanes=536870912,ps(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(ou(t,u.cachePool),yo(t,u),vl(),t.memoizedState=null):(e!==null&&ou(t,null),oc(),vl());return Ze(e,t,n,l),t.child}function dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ps(e,t,l,a,n){var u=nc();return u=u===null?null:{parent:Ue._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&ou(t,null),oc(),bo(t),e!==null&&ha(e,t,a,!0),t.childLanes=n,null}function _u(e,t){return t=Nu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vs(e,t,l){return Vl(t,e.child,null,l),e=_u(t,t.pendingProps),e.flags|=2,ot(t),t.memoizedState=null,e}function r0(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(a.mode==="hidden")return e=_u(t,a),t.lanes=536870912,dn(null,e);if(dc(t),(e=Ee)?(e=Md(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fl!==null?{id:Ut,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=Pf(e),l.return=t,t.child=l,Xe=t,Ee=null)):e=null,e===null)throw sl(t);return t.lanes=536870912,null}return _u(t,a)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(dc(t),n)if(t.flags&256)t.flags&=-257,t=vs(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(He||ha(e,t,l,!1),n=(l&e.childLanes)!==0,He||n){if(a=Se,a!==null&&(i=uf(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Bl(e,i),at(a,e,i),jc;Bu(),t=vs(e,t,l)}else e=u.treeContext,Ee=Tt(i.nextSibling),Xe=t,ce=!0,ol=null,Et=!1,e!==null&&lo(t,e),t=_u(t,a),t.flags|=4096;return t}return e=Qt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ru(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Uc(e,t,l,a,n){return Gl(t),l=hc(e,t,l,a,void 0,n),a=gc(),e!==null&&!He?(pc(e,t,n),$t(e,t,n)):(ce&&a&&$i(t),t.flags|=1,Ze(e,t,l,n),t.child)}function ys(e,t,l,a,n,u){return Gl(t),t.updateQueue=null,l=So(t,a,l,n),xo(e),a=gc(),e!==null&&!He?(pc(e,t,u),$t(e,t,u)):(ce&&a&&$i(t),t.flags|=1,Ze(e,t,l,u),t.child)}function bs(e,t,l,a,n){if(Gl(t),t.stateNode===null){var u=oa,i=l.contextType;typeof i=="object"&&i!==null&&(u=Qe(i)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Cc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},ic(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?Qe(i):oa,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(Oc(t,l,i,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Cc.enqueueReplaceState(u,u.state,null),cn(t,a,u,n),un(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var f=t.memoizedProps,h=kl(l,f);u.props=h;var T=u.context,O=l.contextType;i=oa,typeof O=="object"&&O!==null&&(i=Qe(O));var j=l.getDerivedStateFromProps;O=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||T!==i)&&us(t,u,a,i),ml=!1;var _=t.memoizedState;u.state=_,cn(t,a,u,n),un(),T=t.memoizedState,f||_!==T||ml?(typeof j=="function"&&(Oc(t,l,j,a),T=t.memoizedState),(h=ml||ns(t,l,h,a,_,T,i))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),u.props=a,u.state=T,u.context=i,a=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,cc(e,t),i=t.memoizedProps,O=kl(l,i),u.props=O,j=t.pendingProps,_=u.context,T=l.contextType,h=oa,typeof T=="object"&&T!==null&&(h=Qe(T)),f=l.getDerivedStateFromProps,(T=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==j||_!==h)&&us(t,u,a,h),ml=!1,_=t.memoizedState,u.state=_,cn(t,a,u,n),un();var M=t.memoizedState;i!==j||_!==M||ml||e!==null&&e.dependencies!==null&&ru(e.dependencies)?(typeof f=="function"&&(Oc(t,l,f,a),M=t.memoizedState),(O=ml||ns(t,l,O,a,_,M,h)||e!==null&&e.dependencies!==null&&ru(e.dependencies))?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,M,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,M,h)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),u.props=a,u.state=M,u.context=h,a=O):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,Ru(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Vl(t,e.child,null,n),t.child=Vl(t,null,l,n)):Ze(e,t,l,n),t.memoizedState=u.state,e=t.child):e=$t(e,t,n),e}function xs(e,t,l,a){return Ll(),t.flags|=256,Ze(e,t,l,a),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:ro()}}function Bc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=dt),e}function Ss(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(n?pl(t):vl(),(e=Ee)?(e=Md(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fl!==null?{id:Ut,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=Pf(e),l.return=t,t.child=l,Xe=t,Ee=null)):e=null,e===null)throw sl(t);return br(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(vl(),n=t.mode,f=Nu({mode:"hidden",children:f},n),a=ql(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=Hc(l),a.childLanes=Bc(e,i,l),t.memoizedState=wc,dn(null,a)):(pl(t),qc(t,f))}var h=e.memoizedState;if(h!==null&&(f=h.dehydrated,f!==null)){if(u)t.flags&256?(pl(t),t.flags&=-257,t=Lc(e,t,l)):t.memoizedState!==null?(vl(),t.child=e.child,t.flags|=128,t=null):(vl(),f=a.fallback,n=t.mode,a=Nu({mode:"visible",children:a.children},n),f=ql(f,n,l,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,Vl(t,e.child,null,l),a=t.child,a.memoizedState=Hc(l),a.childLanes=Bc(e,i,l),t.memoizedState=wc,t=dn(null,a));else if(pl(t),br(f)){if(i=f.nextSibling&&f.nextSibling.dataset,i)var T=i.dgst;i=T,a=Error(r(419)),a.stack="",a.digest=i,Pa({value:a,source:null,stack:null}),t=Lc(e,t,l)}else if(He||ha(e,t,l,!1),i=(l&e.childLanes)!==0,He||i){if(i=Se,i!==null&&(a=uf(i,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,Bl(e,a),at(i,e,a),jc;yr(f)||Bu(),t=Lc(e,t,l)}else yr(f)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ee=Tt(f.nextSibling),Xe=t,ce=!0,ol=null,Et=!1,e!==null&&lo(t,e),t=qc(t,a.children),t.flags|=4096);return t}return n?(vl(),f=a.fallback,n=t.mode,h=e.child,T=h.sibling,a=Qt(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,T!==null?f=Qt(T,f):(f=ql(f,n,l,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,dn(null,a),a=t.child,f=e.child.memoizedState,f===null?f=Hc(l):(n=f.cachePool,n!==null?(h=Ue._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=ro(),f={baseLanes:f.baseLanes|l,cachePool:n}),a.memoizedState=f,a.childLanes=Bc(e,i,l),t.memoizedState=wc,dn(e.child,a)):(pl(t),l=e.child,e=l.sibling,l=Qt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function qc(e,t){return t=Nu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nu(e,t){return e=rt(22,e,null,t),e.lanes=0,e}function Lc(e,t,l){return Vl(t,e.child,null,l),e=qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Es(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ec(e.return,t,l)}function Yc(e,t,l,a,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function zs(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Ce.current,f=(i&2)!==0;if(f?(i=i&1|2,t.flags|=128):i&=1,Y(Ce,i),Ze(e,t,a,l),a=ce?Ia:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Es(e,l,t);else if(e.tag===19)Es(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&pu(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Yc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&pu(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Yc(t,!0,l,null,u,a);break;case"together":Yc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function $t(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),xl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ha(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Qt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Qt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ru(e)))}function f0(e,t,l){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),dl(t,Ue,e.memoizedState.cache),Ll();break;case 27:case 5:Ba(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:dl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,dc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(pl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Ss(e,t,l):(pl(t),e=$t(e,t,l),e!==null?e.sibling:null);pl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ha(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return zs(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Ce,Ce.current),a)break;return null;case 22:return t.lanes=0,gs(e,t,l,t.pendingProps);case 24:dl(t,Ue,e.memoizedState.cache)}return $t(e,t,l)}function Ts(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Gc(e,l)&&(t.flags&128)===0)return He=!1,f0(e,t,l);He=(e.flags&131072)!==0}else He=!1,ce&&(t.flags&1048576)!==0&&to(t,Ia,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ql(t.elementType),t.type=e,typeof e=="function")Ki(e)?(a=kl(e,a),t.tag=1,t=bs(null,t,e,a,l)):(t.tag=0,t=Uc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===oe){t.tag=11,t=ds(null,t,e,a,l);break e}else if(n===F){t.tag=14,t=ms(null,t,e,a,l);break e}}throw t=gt(e)||e,Error(r(306,t,""))}}return t;case 0:return Uc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=kl(a,t.pendingProps),bs(e,t,a,n,l);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,cc(e,t),cn(t,a,null,l);var i=t.memoizedState;if(a=i.cache,dl(t,Ue,a),a!==u.cache&&tc(t,[Ue],l,!0),un(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=xs(e,t,a,l);break e}else if(a!==n){n=bt(Error(r(424)),t),Pa(n),t=xs(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=Tt(e.firstChild),Xe=t,ce=!0,ol=null,Et=!0,l=go(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ll(),a===n){t=$t(e,t,l);break e}Ze(e,t,a,l)}t=t.child}return t;case 26:return Ru(e,t),e===null?(l=wd(t.type,null,t.pendingProps,null))?t.memoizedState=l:ce||(l=t.type,e=t.pendingProps,a=Zu(le.current).createElement(l),a[Ge]=t,a[Fe]=e,Ve(a,l,e),Le(a),t.stateNode=a):t.memoizedState=wd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ba(t),e===null&&ce&&(a=t.stateNode=Dd(t.type,t.pendingProps,le.current),Xe=t,Et=!0,n=Ee,Al(t.type)?(xr=n,Ee=Tt(a.firstChild)):Ee=n),Ze(e,t,t.pendingProps.children,l),Ru(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((n=a=Ee)&&(a=L0(a,t.type,t.pendingProps,Et),a!==null?(t.stateNode=a,Xe=t,Ee=Tt(a.firstChild),Et=!1,n=!0):n=!1),n||sl(t)),Ba(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,a=u.children,gr(n,u)?a=null:i!==null&&gr(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=hc(e,t,e0,null,null,l),Rn._currentValue=n),Ru(e,t),Ze(e,t,a,l),t.child;case 6:return e===null&&ce&&((e=l=Ee)&&(l=Y0(l,t.pendingProps,Et),l!==null?(t.stateNode=l,Xe=t,Ee=null,e=!0):e=!1),e||sl(t)),null;case 13:return Ss(e,t,l);case 4:return $e(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Vl(t,null,a,l):Ze(e,t,a,l),t.child;case 11:return ds(e,t,t.type,t.pendingProps,l);case 7:return Ze(e,t,t.pendingProps,l),t.child;case 8:return Ze(e,t,t.pendingProps.children,l),t.child;case 12:return Ze(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,dl(t,t.type,a.value),Ze(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Gl(t),n=Qe(n),a=a(n),t.flags|=1,Ze(e,t,a,l),t.child;case 14:return ms(e,t,t.type,t.pendingProps,l);case 15:return hs(e,t,t.type,t.pendingProps,l);case 19:return zs(e,t,l);case 31:return r0(e,t,l);case 22:return gs(e,t,l,t.pendingProps);case 24:return Gl(t),a=Qe(Ue),e===null?(n=nc(),n===null&&(n=Se,u=lc(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},ic(t),dl(t,Ue,n)):((e.lanes&l)!==0&&(cc(e,t),cn(t,null,null,l),un()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),dl(t,Ue,a)):(a=u.cache,dl(t,Ue,a),a!==n.cache&&tc(t,[Ue],l,!0))),Ze(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Wt(e){e.flags|=4}function Xc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Fs())e.flags|=8192;else throw Zl=du,uc}else e.flags&=-16777217}function As(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yd(t))if(Fs())e.flags|=8192;else throw Zl=du,uc}function Mu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lf():536870912,e.lanes|=t,_a|=t)}function mn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function o0(e,t,l){var a=t.pendingProps;switch(Wi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Ue),Oe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ma(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ii())),ze(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(Wt(t),u!==null?(ze(t),As(t,u)):(ze(t),Xc(t,n,null,a,l))):u?u!==e.memoizedState?(Wt(t),ze(t),As(t,u)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Wt(t),ze(t),Xc(t,n,e,a,l)),null;case 27:if(Yn(t),l=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return ze(t),null}e=K.current,ma(t)?ao(t):(e=Dd(n,a,l),t.stateNode=e,Wt(t))}return ze(t),null;case 5:if(Yn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return ze(t),null}if(u=K.current,ma(t))ao(t);else{var i=Zu(le.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Ge]=t,u[Fe]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(Ve(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Wt(t)}}return ze(t),Xc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=le.current,ma(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Sd(e.nodeValue,l)),e||sl(t,!0)}else e=Zu(e).createTextNode(a),e[Ge]=t,t.stateNode=e}return ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ma(t),l!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else l=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(r(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ma(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Mu(t,t.updateQueue),ze(t),null);case 4:return Oe(),e===null&&or(t.stateNode.containerInfo),ze(t),null;case 10:return Kt(t.type),ze(t),null;case 19:if(U(Ce),a=t.memoizedState,a===null)return ze(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)mn(a,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=pu(e),u!==null){for(t.flags|=128,mn(a,!1),e=u.updateQueue,t.updateQueue=e,Mu(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)If(l,e),l=l.sibling;return Y(Ce,Ce.current&1|2),ce&&Zt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>Uu&&(t.flags|=128,n=!0,mn(a,!1),t.lanes=4194304)}else{if(!n)if(e=pu(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Mu(t,e),mn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!ce)return ze(t),null}else 2*nt()-a.renderingStartTime>Uu&&l!==536870912&&(t.flags|=128,n=!0,mn(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,l=Ce.current,Y(Ce,n?l&1|2:l&1),ce&&Zt(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return ot(t),sc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Mu(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&U(Xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function s0(e,t){switch(Wi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(Ue),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Yn(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(r(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Ce),null;case 4:return Oe(),null;case 10:return Kt(t.type),null;case 22:case 23:return ot(t),sc(),e!==null&&U(Xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(Ue),null;case 25:return null;default:return null}}function _s(e,t){switch(Wi(t),t.tag){case 3:Kt(Ue),Oe();break;case 26:case 27:case 5:Yn(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:U(Ce);break;case 10:Kt(t.type);break;case 22:case 23:ot(t),sc(),e!==null&&U(Xl);break;case 24:Kt(Ue)}}function hn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(f){he(t,t.return,f)}}function yl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var i=a.inst,f=i.destroy;if(f!==void 0){i.destroy=void 0,n=t;var h=l,T=f;try{T()}catch(O){he(n,h,O)}}}a=a.next}while(a!==u)}}catch(O){he(t,t.return,O)}}function Rs(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{vo(t,l)}catch(a){he(e,e.return,a)}}}function Ns(e,t,l){l.props=kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){he(e,t,a)}}function gn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){he(e,t,n)}}function Ht(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){he(e,t,n)}else l.current=null}function Ms(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){he(e,e.return,n)}}function Qc(e,t,l){try{var a=e.stateNode;j0(a,e.type,l,t),a[Fe]=t}catch(n){he(e,e.return,n)}}function Os(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Al(e.type)||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Al(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Gt));else if(a!==4&&(a===27&&Al(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,l),e=e.sibling;e!==null;)Vc(e,t,l),e=e.sibling}function Ou(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Al(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ou(e,t,l),e=e.sibling;e!==null;)Ou(e,t,l),e=e.sibling}function Cs(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ve(t,a,l),t[Ge]=e,t[Fe]=l}catch(u){he(e,e.return,u)}}var Ft=!1,Be=!1,Kc=!1,Ds=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function d0(e,t){if(e=e.containerInfo,mr=Fu,e=Qf(e),Li(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,f=-1,h=-1,T=0,O=0,j=e,_=null;t:for(;;){for(var M;j!==l||n!==0&&j.nodeType!==3||(f=i+n),j!==u||a!==0&&j.nodeType!==3||(h=i+a),j.nodeType===3&&(i+=j.nodeValue.length),(M=j.firstChild)!==null;)_=j,j=M;for(;;){if(j===e)break t;if(_===l&&++T===n&&(f=i),_===u&&++O===a&&(h=i),(M=j.nextSibling)!==null)break;j=_,_=j.parentNode}j=M}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(hr={focusedElem:e,selectionRange:l},Fu=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var Z=kl(l.type,n);e=a.getSnapshotBeforeUpdate(Z,u),a.__reactInternalSnapshotBeforeUpdate=e}catch($){he(l,l.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)vr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function js(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Pt(e,l),a&4&&hn(5,l);break;case 1:if(Pt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){he(l,l.return,i)}else{var n=kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){he(l,l.return,i)}}a&64&&Rs(l),a&512&&gn(l,l.return);break;case 3:if(Pt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{vo(e,t)}catch(i){he(l,l.return,i)}}break;case 27:t===null&&a&4&&Cs(l);case 26:case 5:Pt(e,l),t===null&&a&4&&Ms(l),a&512&&gn(l,l.return);break;case 12:Pt(e,l);break;case 31:Pt(e,l),a&4&&Hs(e,l);break;case 13:Pt(e,l),a&4&&Bs(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=S0.bind(null,l),G0(e,l))));break;case 22:if(a=l.memoizedState!==null||Ft,!a){t=t!==null&&t.memoizedState!==null||Be,n=Ft;var u=Be;Ft=a,(Be=t)&&!u?el(e,l,(l.subtreeFlags&8772)!==0):Pt(e,l),Ft=n,Be=u}break;case 30:break;default:Pt(e,l)}}function Us(e){var t=e.alternate;t!==null&&(e.alternate=null,Us(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ei(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,Pe=!1;function It(e,t,l){for(l=l.child;l!==null;)ws(e,t,l),l=l.sibling}function ws(e,t,l){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(qa,l)}catch{}switch(l.tag){case 26:Be||Ht(l,t),It(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Be||Ht(l,t);var a=Te,n=Pe;Al(l.type)&&(Te=l.stateNode,Pe=!1),It(e,t,l),Tn(l.stateNode),Te=a,Pe=n;break;case 5:Be||Ht(l,t);case 6:if(a=Te,n=Pe,Te=null,It(e,t,l),Te=a,Pe=n,Te!==null)if(Pe)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(l.stateNode)}catch(u){he(l,t,u)}else try{Te.removeChild(l.stateNode)}catch(u){he(l,t,u)}break;case 18:Te!==null&&(Pe?(e=Te,Rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ua(e)):Rd(Te,l.stateNode));break;case 4:a=Te,n=Pe,Te=l.stateNode.containerInfo,Pe=!0,It(e,t,l),Te=a,Pe=n;break;case 0:case 11:case 14:case 15:yl(2,l,t),Be||yl(4,l,t),It(e,t,l);break;case 1:Be||(Ht(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ns(l,t,a)),It(e,t,l);break;case 21:It(e,t,l);break;case 22:Be=(a=Be)||l.memoizedState!==null,It(e,t,l),Be=a;break;default:It(e,t,l)}}function Hs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ua(e)}catch(l){he(t,t.return,l)}}}function Bs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ua(e)}catch(l){he(t,t.return,l)}}function m0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ds),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ds),t;default:throw Error(r(435,e.tag))}}function Cu(e,t){var l=m0(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=E0.bind(null,e,a);a.then(n,n)}})}function et(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,i=t,f=i;e:for(;f!==null;){switch(f.tag){case 27:if(Al(f.type)){Te=f.stateNode,Pe=!1;break e}break;case 5:Te=f.stateNode,Pe=!1;break e;case 3:case 4:Te=f.stateNode.containerInfo,Pe=!0;break e}f=f.return}if(Te===null)throw Error(r(160));ws(u,i,n),Te=null,Pe=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qs(t,e),t=t.sibling}var Mt=null;function qs(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),a&4&&(yl(3,e,e.return),hn(3,e),yl(5,e,e.return));break;case 1:et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),a&64&&Ft&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Mt;if(et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ga]||u[Ge]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Ve(u,a,l),u[Ge]=e,Le(u),a=u;break e;case"link":var i=qd("link","href",n).get(a+(l.href||""));if(i){for(var f=0;f<i.length;f++)if(u=i[f],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(f,1);break t}}u=n.createElement(a),Ve(u,a,l),n.head.appendChild(u);break;case"meta":if(i=qd("meta","content",n).get(a+(l.content||""))){for(f=0;f<i.length;f++)if(u=i[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(f,1);break t}}u=n.createElement(a),Ve(u,a,l),n.head.appendChild(u);break;default:throw Error(r(468,a))}u[Ge]=e,Le(u),a=u}e.stateNode=a}else Ld(n,e.type,e.stateNode);else e.stateNode=Bd(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Ld(n,e.type,e.stateNode):Bd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,l.memoizedProps)}break;case 27:et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),l!==null&&a&4&&Qc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(et(t,e),tt(e),a&512&&(Be||l===null||Ht(l,l.return)),e.flags&32){n=e.stateNode;try{aa(n,"")}catch(Z){he(e,e.return,Z)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Qc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Kc=!0);break;case 6:if(et(t,e),tt(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Z){he(e,e.return,Z)}}break;case 3:if(ku=null,n=Mt,Mt=Vu(t.containerInfo),et(t,e),Mt=n,tt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ua(t.containerInfo)}catch(Z){he(e,e.return,Z)}Kc&&(Kc=!1,Ls(e));break;case 4:a=Mt,Mt=Vu(e.stateNode.containerInfo),et(t,e),tt(e),Mt=a;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cu(e,a)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ju=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cu(e,a)));break;case 22:n=e.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,T=Ft,O=Be;if(Ft=T||n,Be=O||h,et(t,e),Be=O,Ft=T,tt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||h||Ft||Be||Jl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){h=l=t;try{if(u=h.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{f=h.stateNode;var j=h.memoizedProps.style,_=j!=null&&j.hasOwnProperty("display")?j.display:null;f.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(Z){he(h,h.return,Z)}}}else if(t.tag===6){if(l===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(Z){he(h,h.return,Z)}}}else if(t.tag===18){if(l===null){h=t;try{var M=h.stateNode;n?Nd(M,!0):Nd(h.stateNode,!1)}catch(Z){he(h,h.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Cu(e,l))));break;case 19:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cu(e,a)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Os(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,u=Zc(e);Ou(e,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(aa(i,""),l.flags&=-33);var f=Zc(e);Ou(e,f,i);break;case 3:case 4:var h=l.stateNode.containerInfo,T=Zc(e);Vc(e,T,h);break;default:throw Error(r(161))}}catch(O){he(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ls(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ls(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)js(e,t.alternate,t),t=t.sibling}function Jl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yl(4,t,t.return),Jl(t);break;case 1:Ht(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Ns(t,t.return,l),Jl(t);break;case 27:Tn(t.stateNode);case 26:case 5:Ht(t,t.return),Jl(t);break;case 22:t.memoizedState===null&&Jl(t);break;case 30:Jl(t);break;default:Jl(t)}e=e.sibling}}function el(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:el(n,u,l),hn(4,u);break;case 1:if(el(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(T){he(a,a.return,T)}if(a=u,n=a.updateQueue,n!==null){var f=a.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)po(h[n],f)}catch(T){he(a,a.return,T)}}l&&i&64&&Rs(u),gn(u,u.return);break;case 27:Cs(u);case 26:case 5:el(n,u,l),l&&a===null&&i&4&&Ms(u),gn(u,u.return);break;case 12:el(n,u,l);break;case 31:el(n,u,l),l&&i&4&&Hs(n,u);break;case 13:el(n,u,l),l&&i&4&&Bs(n,u);break;case 22:u.memoizedState===null&&el(n,u,l),gn(u,u.return);break;case 30:break;default:el(n,u,l)}t=t.sibling}}function kc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&en(l))}function Jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function Ot(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ys(e,t,l,a),t=t.sibling}function Ys(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,l,a),n&2048&&hn(9,t);break;case 1:Ot(e,t,l,a);break;case 3:Ot(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){Ot(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,f=u.onPostCommit;typeof f=="function"&&f(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){he(t,t.return,h)}}else Ot(e,t,l,a);break;case 31:Ot(e,t,l,a);break;case 13:Ot(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?Ot(e,t,l,a):pn(e,t):u._visibility&2?Ot(e,t,l,a):(u._visibility|=2,za(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&kc(i,t);break;case 24:Ot(e,t,l,a),n&2048&&Jc(t.alternate,t);break;default:Ot(e,t,l,a)}}function za(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,f=l,h=a,T=i.flags;switch(i.tag){case 0:case 11:case 15:za(u,i,f,h,n),hn(8,i);break;case 23:break;case 22:var O=i.stateNode;i.memoizedState!==null?O._visibility&2?za(u,i,f,h,n):pn(u,i):(O._visibility|=2,za(u,i,f,h,n)),n&&T&2048&&kc(i.alternate,i);break;case 24:za(u,i,f,h,n),n&&T&2048&&Jc(i.alternate,i);break;default:za(u,i,f,h,n)}t=t.sibling}}function pn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:pn(l,a),n&2048&&kc(a.alternate,a);break;case 24:pn(l,a),n&2048&&Jc(a.alternate,a);break;default:pn(l,a)}t=t.sibling}}var vn=8192;function Ta(e,t,l){if(e.subtreeFlags&vn)for(e=e.child;e!==null;)Gs(e,t,l),e=e.sibling}function Gs(e,t,l){switch(e.tag){case 26:Ta(e,t,l),e.flags&vn&&e.memoizedState!==null&&P0(l,Mt,e.memoizedState,e.memoizedProps);break;case 5:Ta(e,t,l);break;case 3:case 4:var a=Mt;Mt=Vu(e.stateNode.containerInfo),Ta(e,t,l),Mt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=vn,vn=16777216,Ta(e,t,l),vn=a):Ta(e,t,l));break;default:Ta(e,t,l)}}function Xs(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ye=a,Zs(a,e)}Xs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qs(e),e=e.sibling}function Qs(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&yl(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Du(e)):yn(e);break;default:yn(e)}}function Du(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ye=a,Zs(a,e)}Xs(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),Du(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Du(t));break;default:Du(t)}e=e.sibling}}function Zs(e,t){for(;Ye!==null;){var l=Ye;switch(l.tag){case 0:case 11:case 15:yl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:en(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ye=a;else e:for(l=e;Ye!==null;){a=Ye;var n=a.sibling,u=a.return;if(Us(a),a===l){Ye=null;break e}if(n!==null){n.return=u,Ye=n;break e}Ye=u}}}var h0={getCacheForType:function(e){var t=Qe(Ue),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Qe(Ue).controller.signal}},g0=typeof WeakMap=="function"?WeakMap:Map,se=0,Se=null,ae=null,ue=0,me=0,st=null,bl=!1,Aa=!1,$c=!1,tl=0,Ne=0,xl=0,$l=0,Wc=0,dt=0,_a=0,bn=null,lt=null,Fc=!1,ju=0,Vs=0,Uu=1/0,wu=null,Sl=null,qe=0,El=null,Ra=null,ll=0,Ic=0,Pc=null,Ks=null,xn=0,er=null;function mt(){return(se&2)!==0&&ue!==0?ue&-ue:C.T!==null?ir():cf()}function ks(){if(dt===0)if((ue&536870912)===0||ce){var e=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),dt=e}else dt=536870912;return e=ft.current,e!==null&&(e.flags|=32),dt}function at(e,t,l){(e===Se&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Na(e,0),zl(e,ue,dt,!1)),Ya(e,l),((se&2)===0||e!==Se)&&(e===Se&&((se&2)===0&&($l|=l),Ne===4&&zl(e,ue,dt,!1)),Bt(e))}function Js(e,t,l){if((se&6)!==0)throw Error(r(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||La(e,t),n=a?y0(e,t):lr(e,t,!0),u=a;do{if(n===0){Aa&&!a&&zl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!p0(l)){n=lr(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var f=e;n=bn;var h=f.current.memoizedState.isDehydrated;if(h&&(Na(f,i).flags|=256),i=lr(f,i,!1),i!==2){if($c&&!h){f.errorRecoveryDisabledLanes|=u,$l|=u,n=4;break e}u=lt,lt=n,u!==null&&(lt===null?lt=u:lt.push.apply(lt,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Na(e,0),zl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:zl(a,t,dt,!bl);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=ju+300-nt(),10<n)){if(zl(a,t,dt,!bl),Vn(a,0,!0)!==0)break e;ll=t,a.timeoutHandle=Ad($s.bind(null,a,l,lt,wu,Fc,t,dt,$l,_a,bl,u,"Throttled",-0,0),n);break e}$s(a,l,lt,wu,Fc,t,dt,$l,_a,bl,u,null,-0,0)}}break}while(!0);Bt(e)}function $s(e,t,l,a,n,u,i,f,h,T,O,j,_,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Gs(t,u,j);var Z=(u&62914560)===u?ju-nt():(u&4194048)===u?Vs-nt():0;if(Z=eg(j,Z),Z!==null){ll=u,e.cancelPendingCommit=Z(ad.bind(null,e,t,u,l,a,n,i,f,h,O,j,null,_,M)),zl(e,u,i,!T);return}}ad(e,t,u,l,a,n,i,f,h)}function p0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!ct(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zl(e,t,l,a){t&=~Wc,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-it(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&af(e,l,t)}function Hu(){return(se&6)===0?(Sn(0),!1):!0}function tr(){if(ae!==null){if(me===0)var e=ae.return;else e=ae,Vt=Yl=null,vc(e),ya=null,ln=0,e=ae;for(;e!==null;)_s(e.alternate,e),e=e.return;ae=null}}function Na(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,H0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ll=0,tr(),Se=e,ae=l=Qt(e.current,null),ue=t,me=0,st=null,bl=!1,Aa=La(e,t),$c=!1,_a=dt=Wc=$l=xl=Ne=0,lt=bn=null,Fc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-it(a),u=1<<n;t|=e[n],a&=~u}return tl=t,au(),l}function Ws(e,t){ee=null,C.H=sn,t===va||t===su?(t=so(),me=3):t===uc?(t=so(),me=4):me=t===jc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,ae===null&&(Ne=1,Au(e,bt(t,e.current)))}function Fs(){var e=ft.current;return e===null?!0:(ue&4194048)===ue?zt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===zt:!1}function Is(){var e=C.H;return C.H=sn,e===null?sn:e}function Ps(){var e=C.A;return C.A=h0,e}function Bu(){Ne=4,bl||(ue&4194048)!==ue&&ft.current!==null||(Aa=!0),(xl&134217727)===0&&($l&134217727)===0||Se===null||zl(Se,ue,dt,!1)}function lr(e,t,l){var a=se;se|=2;var n=Is(),u=Ps();(Se!==e||ue!==t)&&(wu=null,Na(e,t)),t=!1;var i=Ne;e:do try{if(me!==0&&ae!==null){var f=ae,h=st;switch(me){case 8:tr(),i=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var T=me;if(me=0,st=null,Ma(e,f,h,T),l&&Aa){i=0;break e}break;default:T=me,me=0,st=null,Ma(e,f,h,T)}}v0(),i=Ne;break}catch(O){Ws(e,O)}while(!0);return t&&e.shellSuspendCounter++,Vt=Yl=null,se=a,C.H=n,C.A=u,ae===null&&(Se=null,ue=0,au()),i}function v0(){for(;ae!==null;)ed(ae)}function y0(e,t){var l=se;se|=2;var a=Is(),n=Ps();Se!==e||ue!==t?(wu=null,Uu=nt()+500,Na(e,t)):Aa=La(e,t);e:do try{if(me!==0&&ae!==null){t=ae;var u=st;t:switch(me){case 1:me=0,st=null,Ma(e,t,u,1);break;case 2:case 9:if(fo(u)){me=0,st=null,td(t);break}t=function(){me!==2&&me!==9||Se!==e||(me=7),Bt(e)},u.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:fo(u)?(me=0,st=null,td(t)):(me=0,st=null,Ma(e,t,u,7));break;case 5:var i=null;switch(ae.tag){case 26:i=ae.memoizedState;case 5:case 27:var f=ae;if(i?Yd(i):f.stateNode.complete){me=0,st=null;var h=f.sibling;if(h!==null)ae=h;else{var T=f.return;T!==null?(ae=T,qu(T)):ae=null}break t}}me=0,st=null,Ma(e,t,u,5);break;case 6:me=0,st=null,Ma(e,t,u,6);break;case 8:tr(),Ne=6;break e;default:throw Error(r(462))}}b0();break}catch(O){Ws(e,O)}while(!0);return Vt=Yl=null,C.H=a,C.A=n,se=l,ae!==null?0:(Se=null,ue=0,au(),Ne)}function b0(){for(;ae!==null&&!Xm();)ed(ae)}function ed(e){var t=Ts(e.alternate,e,tl);e.memoizedProps=e.pendingProps,t===null?qu(e):ae=t}function td(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=ys(l,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=ys(l,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:vc(t);default:_s(l,t),t=ae=If(t,tl),t=Ts(l,t,tl)}e.memoizedProps=e.pendingProps,t===null?qu(e):ae=t}function Ma(e,t,l,a){Vt=Yl=null,vc(t),ya=null,ln=0;var n=t.return;try{if(c0(e,n,t,l,ue)){Ne=1,Au(e,bt(l,e.current)),ae=null;return}}catch(u){if(n!==null)throw ae=n,u;Ne=1,Au(e,bt(l,e.current)),ae=null;return}t.flags&32768?(ce||a===1?e=!0:Aa||(ue&536870912)!==0?e=!1:(bl=e=!0,(a===2||a===9||a===3||a===6)&&(a=ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),ld(t,e)):qu(t)}function qu(e){var t=e;do{if((t.flags&32768)!==0){ld(t,bl);return}e=t.return;var l=o0(t.alternate,t,tl);if(l!==null){ae=l;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Ne===0&&(Ne=5)}function ld(e,t){do{var l=s0(e.alternate,e);if(l!==null){l.flags&=32767,ae=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=l}while(e!==null);Ne=6,ae=null}function ad(e,t,l,a,n,u,i,f,h){e.cancelPendingCommit=null;do Lu();while(qe!==0);if((se&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=Zi,Im(e,l,u,i,f,h),e===Se&&(ae=Se=null,ue=0),Ra=t,El=e,ll=l,Ic=u,Pc=n,Ks=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,z0(Gn,function(){return rd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,n=q.p,q.p=2,i=se,se|=4;try{d0(e,t,l)}finally{se=i,q.p=n,C.T=a}}qe=1,nd(),ud(),id()}}function nd(){if(qe===1){qe=0;var e=El,t=Ra,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var a=q.p;q.p=2;var n=se;se|=4;try{qs(t,e);var u=hr,i=Qf(e.containerInfo),f=u.focusedElem,h=u.selectionRange;if(i!==f&&f&&f.ownerDocument&&Xf(f.ownerDocument.documentElement,f)){if(h!==null&&Li(f)){var T=h.start,O=h.end;if(O===void 0&&(O=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(O,f.value.length);else{var j=f.ownerDocument||document,_=j&&j.defaultView||window;if(_.getSelection){var M=_.getSelection(),Z=f.textContent.length,$=Math.min(h.start,Z),ye=h.end===void 0?$:Math.min(h.end,Z);!M.extend&&$>ye&&(i=ye,ye=$,$=i);var E=Gf(f,$),v=Gf(f,ye);if(E&&v&&(M.rangeCount!==1||M.anchorNode!==E.node||M.anchorOffset!==E.offset||M.focusNode!==v.node||M.focusOffset!==v.offset)){var z=j.createRange();z.setStart(E.node,E.offset),M.removeAllRanges(),$>ye?(M.addRange(z),M.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),M.addRange(z))}}}}for(j=[],M=f;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<j.length;f++){var D=j[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Fu=!!mr,hr=mr=null}finally{se=n,q.p=a,C.T=l}}e.current=t,qe=2}}function ud(){if(qe===2){qe=0;var e=El,t=Ra,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var a=q.p;q.p=2;var n=se;se|=4;try{js(e,t.alternate,t)}finally{se=n,q.p=a,C.T=l}}qe=3}}function id(){if(qe===4||qe===3){qe=0,Qm();var e=El,t=Ra,l=ll,a=Ks;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ra=El=null,cd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sl=null),xi(l),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(qa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,n=q.p,q.p=2,C.T=null;try{for(var u=e.onRecoverableError,i=0;i<a.length;i++){var f=a[i];u(f.value,{componentStack:f.stack})}}finally{C.T=t,q.p=n}}(ll&3)!==0&&Lu(),Bt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===er?xn++:(xn=0,er=e):xn=0,Sn(0)}}function cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Lu(){return nd(),ud(),id(),rd()}function rd(){if(qe!==5)return!1;var e=El,t=Ic;Ic=0;var l=xi(ll),a=C.T,n=q.p;try{q.p=32>l?32:l,C.T=null,l=Pc,Pc=null;var u=El,i=ll;if(qe=0,Ra=El=null,ll=0,(se&6)!==0)throw Error(r(331));var f=se;if(se|=4,Qs(u.current),Ys(u,u.current,i,l),se=f,Sn(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(qa,u)}catch{}return!0}finally{q.p=n,C.T=a,cd(e,t)}}function fd(e,t,l){t=bt(l,t),t=Dc(e.stateNode,t,2),e=gl(e,t,2),e!==null&&(Ya(e,2),Bt(e))}function he(e,t,l){if(e.tag===3)fd(e,e,l);else for(;t!==null;){if(t.tag===3){fd(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sl===null||!Sl.has(a))){e=bt(l,e),l=os(2),a=gl(t,l,2),a!==null&&(ss(l,a,t,e),Ya(a,2),Bt(a));break}}t=t.return}}function ar(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new g0;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||($c=!0,n.add(l),e=x0.bind(null,e,t,l),t.then(e,e))}function x0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Se===e&&(ue&l)===l&&(Ne===4||Ne===3&&(ue&62914560)===ue&&300>nt()-ju?(se&2)===0&&Na(e,0):Wc|=l,_a===ue&&(_a=0)),Bt(e)}function od(e,t){t===0&&(t=lf()),e=Bl(e,t),e!==null&&(Ya(e,t),Bt(e))}function S0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),od(e,l)}function E0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),od(e,l)}function z0(e,t){return pi(e,t)}var Yu=null,Oa=null,nr=!1,Gu=!1,ur=!1,Tl=0;function Bt(e){e!==Oa&&e.next===null&&(Oa===null?Yu=Oa=e:Oa=Oa.next=e),Gu=!0,nr||(nr=!0,A0())}function Sn(e,t){if(!ur&&Gu){ur=!0;do for(var l=!1,a=Yu;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-it(42|e)+1)-1,u&=n&~(i&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,hd(a,u))}else u=ue,u=Vn(a,a===Se?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||La(a,u)||(l=!0,hd(a,u));a=a.next}while(l);ur=!1}}function T0(){sd()}function sd(){Gu=nr=!1;var e=0;Tl!==0&&w0()&&(e=Tl);for(var t=nt(),l=null,a=Yu;a!==null;){var n=a.next,u=dd(a,t);u===0?(a.next=null,l===null?Yu=n:l.next=n,n===null&&(Oa=l)):(l=a,(e!==0||(u&3)!==0)&&(Gu=!0)),a=n}qe!==0&&qe!==5||Sn(e),Tl!==0&&(Tl=0)}function dd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-it(u),f=1<<i,h=n[i];h===-1?((f&l)===0||(f&a)!==0)&&(n[i]=Fm(f,t)):h<=t&&(e.expiredLanes|=f),u&=~f}if(t=Se,l=ue,l=Vn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&vi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||La(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&vi(a),xi(l)){case 2:case 8:l=ef;break;case 32:l=Gn;break;case 268435456:l=tf;break;default:l=Gn}return a=md.bind(null,e),l=pi(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&vi(a),e.callbackPriority=2,e.callbackNode=null,2}function md(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Lu()&&e.callbackNode!==l)return null;var a=ue;return a=Vn(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Js(e,a,t),dd(e,nt()),e.callbackNode!=null&&e.callbackNode===l?md.bind(null,e):null)}function hd(e,t){if(Lu())return null;Js(e,t,!0)}function A0(){B0(function(){(se&6)!==0?pi(Pr,T0):sd()})}function ir(){if(Tl===0){var e=ga;e===0&&(e=Xn,Xn<<=1,(Xn&261888)===0&&(Xn=256)),Tl=e}return Tl}function gd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$n(""+e)}function pd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function _0(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=gd((n[Fe]||null).action),i=a.submitter;i&&(t=(t=i[Fe]||null)?gd(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var f=new Pn("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Tl!==0){var h=i?pd(n,i):new FormData(n);_c(l,{pending:!0,data:h,method:n.method,action:u},null,h)}}else typeof u=="function"&&(f.preventDefault(),h=i?pd(n,i):new FormData(n),_c(l,{pending:!0,data:h,method:n.method,action:u},u,h))},currentTarget:n}]})}}for(var cr=0;cr<Qi.length;cr++){var rr=Qi[cr],R0=rr.toLowerCase(),N0=rr[0].toUpperCase()+rr.slice(1);Nt(R0,"on"+N0)}Nt(Kf,"onAnimationEnd"),Nt(kf,"onAnimationIteration"),Nt(Jf,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Zh,"onTransitionRun"),Nt(Vh,"onTransitionStart"),Nt(Kh,"onTransitionCancel"),Nt($f,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),jl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jl("onBeforeInput",["compositionend","keypress","textInput","paste"]),jl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));function vd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var f=a[i],h=f.instance,T=f.currentTarget;if(f=f.listener,h!==u&&n.isPropagationStopped())break e;u=f,n.currentTarget=T;try{u(n)}catch(O){lu(O)}n.currentTarget=null,u=h}else for(i=0;i<a.length;i++){if(f=a[i],h=f.instance,T=f.currentTarget,f=f.listener,h!==u&&n.isPropagationStopped())break e;u=f,n.currentTarget=T;try{u(n)}catch(O){lu(O)}n.currentTarget=null,u=h}}}}function ne(e,t){var l=t[Si];l===void 0&&(l=t[Si]=new Set);var a=e+"__bubble";l.has(a)||(yd(t,e,2,!1),l.add(a))}function fr(e,t,l){var a=0;t&&(a|=4),yd(l,e,a,t)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Xu]){e[Xu]=!0,of.forEach(function(l){l!=="selectionchange"&&(M0.has(l)||fr(l,!1,e),fr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xu]||(t[Xu]=!0,fr("selectionchange",!1,t))}}function yd(e,t,l,a){switch(kd(t)){case 2:var n=ag;break;case 8:n=ng;break;default:n=Ar}l=n.bind(null,t,l,e),n=void 0,!Oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function sr(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var f=a.stateNode.containerInfo;if(f===n)break;if(i===4)for(i=a.return;i!==null;){var h=i.tag;if((h===3||h===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;f!==null;){if(i=Il(f),i===null)return;if(h=i.tag,h===5||h===6||h===26||h===27){a=u=i;continue e}f=f.parentNode}}a=a.return}Ef(function(){var T=u,O=Ni(l),j=[];e:{var _=Wf.get(e);if(_!==void 0){var M=Pn,Z=e;switch(e){case"keypress":if(Fn(l)===0)break e;case"keydown":case"keyup":M=Eh;break;case"focusin":Z="focus",M=Ui;break;case"focusout":Z="blur",M=Ui;break;case"beforeblur":case"afterblur":M=Ui;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Ah;break;case Kf:case kf:case Jf:M=mh;break;case $f:M=Rh;break;case"scroll":case"scrollend":M=rh;break;case"wheel":M=Mh;break;case"copy":case"cut":case"paste":M=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Rf;break;case"toggle":case"beforetoggle":M=Ch}var $=(t&4)!==0,ye=!$&&(e==="scroll"||e==="scrollend"),E=$?_!==null?_+"Capture":null:_;$=[];for(var v=T,z;v!==null;){var D=v;if(z=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||z===null||E===null||(D=Qa(v,E),D!=null&&$.push(zn(v,D,z))),ye)break;v=v.return}0<$.length&&(_=new M(_,Z,null,l,O),j.push({event:_,listeners:$}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",_&&l!==Ri&&(Z=l.relatedTarget||l.fromElement)&&(Il(Z)||Z[Fl]))break e;if((M||_)&&(_=O.window===O?O:(_=O.ownerDocument)?_.defaultView||_.parentWindow:window,M?(Z=l.relatedTarget||l.toElement,M=T,Z=Z?Il(Z):null,Z!==null&&(ye=m(Z),$=Z.tag,Z!==ye||$!==5&&$!==27&&$!==6)&&(Z=null)):(M=null,Z=T),M!==Z)){if($=Af,D="onMouseLeave",E="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&($=Rf,D="onPointerLeave",E="onPointerEnter",v="pointer"),ye=M==null?_:Xa(M),z=Z==null?_:Xa(Z),_=new $(D,v+"leave",M,l,O),_.target=ye,_.relatedTarget=z,D=null,Il(O)===T&&($=new $(E,v+"enter",Z,l,O),$.target=z,$.relatedTarget=ye,D=$),ye=D,M&&Z)t:{for($=O0,E=M,v=Z,z=0,D=E;D;D=$(D))z++;D=0;for(var J=v;J;J=$(J))D++;for(;0<z-D;)E=$(E),z--;for(;0<D-z;)v=$(v),D--;for(;z--;){if(E===v||v!==null&&E===v.alternate){$=E;break t}E=$(E),v=$(v)}$=null}else $=null;M!==null&&bd(j,_,M,$,!1),Z!==null&&ye!==null&&bd(j,ye,Z,$,!0)}}e:{if(_=T?Xa(T):window,M=_.nodeName&&_.nodeName.toLowerCase(),M==="select"||M==="input"&&_.type==="file")var re=wf;else if(jf(_))if(Hf)re=Gh;else{re=Lh;var k=qh}else M=_.nodeName,!M||M.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?T&&_i(T.elementType)&&(re=wf):re=Yh;if(re&&(re=re(e,T))){Uf(j,re,l,O);break e}k&&k(e,_,T),e==="focusout"&&T&&_.type==="number"&&T.memoizedProps.value!=null&&Ai(_,"number",_.value)}switch(k=T?Xa(T):window,e){case"focusin":(jf(k)||k.contentEditable==="true")&&(ca=k,Yi=T,Fa=null);break;case"focusout":Fa=Yi=ca=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,Zf(j,l,O);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":Zf(j,l,O)}var te;if(Hi)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else ia?Cf(e,l)&&(ie="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ie="onCompositionStart");ie&&(Nf&&l.locale!=="ko"&&(ia||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&ia&&(te=zf()):(rl=O,Ci="value"in rl?rl.value:rl.textContent,ia=!0)),k=Qu(T,ie),0<k.length&&(ie=new _f(ie,e,null,l,O),j.push({event:ie,listeners:k}),te?ie.data=te:(te=Df(l),te!==null&&(ie.data=te)))),(te=jh?Uh(e,l):wh(e,l))&&(ie=Qu(T,"onBeforeInput"),0<ie.length&&(k=new _f("onBeforeInput","beforeinput",null,l,O),j.push({event:k,listeners:ie}),k.data=te)),_0(j,e,T,l,O)}vd(j,t)})}function zn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Qu(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Qa(e,l),n!=null&&a.unshift(zn(e,n,u)),n=Qa(e,t),n!=null&&a.push(zn(e,n,u))),e.tag===3)return a;e=e.return}return[]}function O0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bd(e,t,l,a,n){for(var u=t._reactName,i=[];l!==null&&l!==a;){var f=l,h=f.alternate,T=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||T===null||(h=T,n?(T=Qa(l,u),T!=null&&i.unshift(zn(l,T,h))):n||(T=Qa(l,u),T!=null&&i.push(zn(l,T,h)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var C0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function xd(e){return(typeof e=="string"?e:""+e).replace(C0,`
`).replace(D0,"")}function Sd(e,t){return t=xd(t),xd(e)===t}function ve(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||aa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&aa(e,""+a);break;case"className":kn(e,"class",a);break;case"tabIndex":kn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":kn(e,l,a);break;case"style":xf(e,a,u);break;case"data":if(t!=="object"){kn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=$n(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=$n(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=$n(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Kn(e,"popover",a);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Kn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ih.get(l)||l,Kn(e,l,a))}}function dr(e,t,l,a,n,u){switch(l){case"style":xf(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof a=="string"?aa(e,a):(typeof a=="number"||typeof a=="bigint")&&aa(e,""+a);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[Fe]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Kn(e,l,a)}}}function Ve(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ve(e,t,u,i,l,null)}}n&&ve(e,t,"srcSet",l.srcSet,l,null),a&&ve(e,t,"src",l.src,l,null);return;case"input":ne("invalid",e);var f=u=i=n=null,h=null,T=null;for(a in l)if(l.hasOwnProperty(a)){var O=l[a];if(O!=null)switch(a){case"name":n=O;break;case"type":i=O;break;case"checked":h=O;break;case"defaultChecked":T=O;break;case"value":u=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:ve(e,t,a,O,l,null)}}pf(e,u,f,h,T,i,n,!1);return;case"select":ne("invalid",e),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":u=f;break;case"defaultValue":i=f;break;case"multiple":a=f;default:ve(e,t,n,f,l,null)}t=u,l=i,e.multiple=!!a,t!=null?la(e,!!a,t,!1):l!=null&&la(e,!!a,l,!0);return;case"textarea":ne("invalid",e),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":a=f;break;case"defaultValue":n=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:ve(e,t,i,f,l,null)}yf(e,a,n,u);return;case"option":for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!=null)&&(h==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ve(e,t,h,a,l,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<En.length;a++)ne(En[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in l)if(l.hasOwnProperty(T)&&(a=l[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ve(e,t,T,a,l,null)}return;default:if(_i(t)){for(O in l)l.hasOwnProperty(O)&&(a=l[O],a!==void 0&&dr(e,t,O,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&ve(e,t,f,a,l,null))}function j0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,f=null,h=null,T=null,O=null;for(M in l){var j=l[M];if(l.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":h=j;default:a.hasOwnProperty(M)||ve(e,t,M,null,a,j)}}for(var _ in a){var M=a[_];if(j=l[_],a.hasOwnProperty(_)&&(M!=null||j!=null))switch(_){case"type":u=M;break;case"name":n=M;break;case"checked":T=M;break;case"defaultChecked":O=M;break;case"value":i=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:M!==j&&ve(e,t,_,M,a,j)}}Ti(e,i,f,h,T,O,u,n);return;case"select":M=i=f=_=null;for(u in l)if(h=l[u],l.hasOwnProperty(u)&&h!=null)switch(u){case"value":break;case"multiple":M=h;default:a.hasOwnProperty(u)||ve(e,t,u,null,a,h)}for(n in a)if(u=a[n],h=l[n],a.hasOwnProperty(n)&&(u!=null||h!=null))switch(n){case"value":_=u;break;case"defaultValue":f=u;break;case"multiple":i=u;default:u!==h&&ve(e,t,n,u,a,h)}t=f,l=i,a=M,_!=null?la(e,!!l,_,!1):!!a!=!!l&&(t!=null?la(e,!!l,t,!0):la(e,!!l,l?[]:"",!1));return;case"textarea":M=_=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ve(e,t,f,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":_=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==u&&ve(e,t,i,n,a,u)}vf(e,_,M);return;case"option":for(var Z in l)_=l[Z],l.hasOwnProperty(Z)&&_!=null&&!a.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:ve(e,t,Z,null,a,_));for(h in a)_=a[h],M=l[h],a.hasOwnProperty(h)&&_!==M&&(_!=null||M!=null)&&(h==="selected"?e.selected=_&&typeof _!="function"&&typeof _!="symbol":ve(e,t,h,_,a,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in l)_=l[$],l.hasOwnProperty($)&&_!=null&&!a.hasOwnProperty($)&&ve(e,t,$,null,a,_);for(T in a)if(_=a[T],M=l[T],a.hasOwnProperty(T)&&_!==M&&(_!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,t));break;default:ve(e,t,T,_,a,M)}return;default:if(_i(t)){for(var ye in l)_=l[ye],l.hasOwnProperty(ye)&&_!==void 0&&!a.hasOwnProperty(ye)&&dr(e,t,ye,void 0,a,_);for(O in a)_=a[O],M=l[O],!a.hasOwnProperty(O)||_===M||_===void 0&&M===void 0||dr(e,t,O,_,a,M);return}}for(var E in l)_=l[E],l.hasOwnProperty(E)&&_!=null&&!a.hasOwnProperty(E)&&ve(e,t,E,null,a,_);for(j in a)_=a[j],M=l[j],!a.hasOwnProperty(j)||_===M||_==null&&M==null||ve(e,t,j,_,a,M)}function Ed(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,f=n.duration;if(u&&f&&Ed(i)){for(i=0,f=n.responseEnd,a+=1;a<l.length;a++){var h=l[a],T=h.startTime;if(T>f)break;var O=h.transferSize,j=h.initiatorType;O&&Ed(j)&&(h=h.responseEnd,i+=O*(h<f?1:(f-T)/(h-T)))}if(--a,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mr=null,hr=null;function Zu(e){return e.nodeType===9?e:e.ownerDocument}function zd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Td(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pr=null;function w0(){var e=window.event;return e&&e.type==="popstate"?e===pr?!1:(pr=e,!0):(pr=null,!1)}var Ad=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(q0)}:Ad;function q0(e){setTimeout(function(){throw e})}function Al(e){return e==="head"}function Rd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ua(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Tn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Tn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,f=u.nodeName;u[Ga]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&Tn(e.ownerDocument.body);l=n}while(l);Ua(t)}function Nd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function vr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vr(l),Ei(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function L0(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ga])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Y0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Tt(e.nextSibling),e===null))return null;return e}function Md(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function yr(e){return e.data==="$?"||e.data==="$~"}function br(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function G0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xr=null;function Od(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Tt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Dd(e,t,l){switch(t=Zu(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Tn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ei(e)}var At=new Map,jd=new Set;function Vu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var al=q.d;q.d={f:X0,r:Q0,D:Z0,C:V0,L:K0,m:k0,X:$0,S:J0,M:W0};function X0(){var e=al.f(),t=Hu();return e||t}function Q0(e){var t=Pl(e);t!==null&&t.tag===5&&t.type==="form"?Wo(t):al.r(e)}var Ca=typeof document>"u"?null:document;function Ud(e,t,l){var a=Ca;if(a&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),jd.has(n)||(jd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ve(t,"link",e),Le(t),a.head.appendChild(t)))}}function Z0(e){al.D(e),Ud("dns-prefetch",e,null)}function V0(e,t){al.C(e,t),Ud("preconnect",e,t)}function K0(e,t,l){al.L(e,t,l);var a=Ca;if(a&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+vt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+vt(l.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var u=n;switch(t){case"style":u=Da(e);break;case"script":u=ja(e)}At.has(u)||(e=x({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),At.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(An(u))||t==="script"&&a.querySelector(_n(u))||(t=a.createElement("link"),Ve(t,"link",e),Le(t),a.head.appendChild(t)))}}function k0(e,t){al.m(e,t);var l=Ca;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(a)+'"][href="'+vt(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ja(e)}if(!At.has(u)&&(e=x({rel:"modulepreload",href:e},t),At.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(_n(u)))return}a=l.createElement("link"),Ve(a,"link",e),Le(a),l.head.appendChild(a)}}}function J0(e,t,l){al.S(e,t,l);var a=Ca;if(a&&e){var n=ea(a).hoistableStyles,u=Da(e);t=t||"default";var i=n.get(u);if(!i){var f={loading:0,preload:null};if(i=a.querySelector(An(u)))f.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},l),(l=At.get(u))&&Sr(e,l);var h=i=a.createElement("link");Le(h),Ve(h,"link",e),h._p=new Promise(function(T,O){h.onload=T,h.onerror=O}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ku(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:f},n.set(u,i)}}}function $0(e,t){al.X(e,t);var l=Ca;if(l&&e){var a=ea(l).hoistableScripts,n=ja(e),u=a.get(n);u||(u=l.querySelector(_n(n)),u||(e=x({src:e,async:!0},t),(t=At.get(n))&&Er(e,t),u=l.createElement("script"),Le(u),Ve(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function W0(e,t){al.M(e,t);var l=Ca;if(l&&e){var a=ea(l).hoistableScripts,n=ja(e),u=a.get(n);u||(u=l.querySelector(_n(n)),u||(e=x({src:e,async:!0,type:"module"},t),(t=At.get(n))&&Er(e,t),u=l.createElement("script"),Le(u),Ve(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function wd(e,t,l,a){var n=(n=le.current)?Vu(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Da(l.href),l=ea(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Da(l.href);var u=ea(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(An(e)))&&!u._p&&(i.instance=u,i.state.loading=5),At.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},At.set(e,l),u||F0(n,e,l,i.state))),t&&a===null)throw Error(r(528,""));return i}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ja(l),l=ea(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Da(e){return'href="'+vt(e)+'"'}function An(e){return'link[rel="stylesheet"]['+e+"]"}function Hd(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function F0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ve(t,"link",l),Le(t),e.head.appendChild(t))}function ja(e){return'[src="'+vt(e)+'"]'}function _n(e){return"script[async]"+e}function Bd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+vt(l.href)+'"]');if(a)return t.instance=a,Le(a),a;var n=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Le(a),Ve(a,"style",n),Ku(a,l.precedence,e),t.instance=a;case"stylesheet":n=Da(l.href);var u=e.querySelector(An(n));if(u)return t.state.loading|=4,t.instance=u,Le(u),u;a=Hd(l),(n=At.get(n))&&Sr(a,n),u=(e.ownerDocument||e).createElement("link"),Le(u);var i=u;return i._p=new Promise(function(f,h){i.onload=f,i.onerror=h}),Ve(u,"link",a),t.state.loading|=4,Ku(u,l.precedence,e),t.instance=u;case"script":return u=ja(l.src),(n=e.querySelector(_n(u)))?(t.instance=n,Le(n),n):(a=l,(n=At.get(u))&&(a=x({},l),Er(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Le(n),Ve(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ku(a,l.precedence,e));return t.instance}function Ku(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var f=a[i];if(f.dataset.precedence===t)u=f;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Er(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ku=null;function qd(e,t,l){if(ku===null){var a=new Map,n=ku=new Map;n.set(l,a)}else n=ku,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[Ga]||u[Ge]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var f=a.get(i);f?f.push(u):a.set(i,[u])}}return a}function Ld(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function I0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Yd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function P0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Da(a.href),u=t.querySelector(An(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ju.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,Le(u);return}u=t.ownerDocument||t,a=Hd(a),(n=At.get(n))&&Sr(a,n),u=u.createElement("link"),Le(u);var i=u;i._p=new Promise(function(f,h){i.onload=f,i.onerror=h}),Ve(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ju.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var zr=0;function eg(e,t){return e.stylesheets&&e.count===0&&Wu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&zr===0&&(zr=62500*U0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>zr?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $u=null;function Wu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$u=new Map,t.forEach(tg,e),$u=null,Ju.call(e))}function tg(e,t){if(!(t.state.loading&4)){var l=$u.get(e);if(l)var a=l.get(null);else{l=new Map,$u.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=Ju.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Rn={$$typeof:Q,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function lg(e,t,l,a,n,u,i,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Gd(e,t,l,a,n,u,i,f,h,T,O,j){return e=new lg(e,t,l,i,h,T,O,j,f),t=1,u===!0&&(t|=24),u=rt(3,null,null,t),e.current=u,u.stateNode=e,t=lc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},ic(u),e}function Xd(e){return e?(e=oa,e):oa}function Qd(e,t,l,a,n,u){n=Xd(n),a.context===null?a.context=n:a.pendingContext=n,a=hl(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=gl(e,a,t),l!==null&&(at(l,e,t),nn(l,e,t))}function Zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Tr(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function Vd(e){if(e.tag===13||e.tag===31){var t=Bl(e,67108864);t!==null&&at(t,e,67108864),Tr(e,67108864)}}function Kd(e){if(e.tag===13||e.tag===31){var t=mt();t=bi(t);var l=Bl(e,t);l!==null&&at(l,e,t),Tr(e,t)}}var Fu=!0;function ag(e,t,l,a){var n=C.T;C.T=null;var u=q.p;try{q.p=2,Ar(e,t,l,a)}finally{q.p=u,C.T=n}}function ng(e,t,l,a){var n=C.T;C.T=null;var u=q.p;try{q.p=8,Ar(e,t,l,a)}finally{q.p=u,C.T=n}}function Ar(e,t,l,a){if(Fu){var n=_r(a);if(n===null)sr(e,t,a,Iu,l),Jd(e,a);else if(ig(n,e,t,l,a))a.stopPropagation();else if(Jd(e,a),t&4&&-1<ug.indexOf(e)){for(;n!==null;){var u=Pl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Dl(u.pendingLanes);if(i!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;i;){var h=1<<31-it(i);f.entanglements[1]|=h,i&=~h}Bt(u),(se&6)===0&&(Uu=nt()+500,Sn(0))}}break;case 31:case 13:f=Bl(u,2),f!==null&&at(f,u,2),Hu(),Tr(u,2)}if(u=_r(a),u===null&&sr(e,t,a,Iu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else sr(e,t,a,null,l)}}function _r(e){return e=Ni(e),Rr(e)}var Iu=null;function Rr(e){if(Iu=null,e=Il(e),e!==null){var t=m(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=S(t),e!==null)return e;e=null}else if(l===31){if(e=R(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Iu=e,null}function kd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zm()){case Pr:return 2;case ef:return 8;case Gn:case Vm:return 32;case tf:return 268435456;default:return 32}default:return 32}}var Nr=!1,_l=null,Rl=null,Nl=null,Nn=new Map,Mn=new Map,Ml=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jd(e,t){switch(e){case"focusin":case"focusout":_l=null;break;case"dragenter":case"dragleave":Rl=null;break;case"mouseover":case"mouseout":Nl=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function On(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Pl(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function ig(e,t,l,a,n){switch(t){case"focusin":return _l=On(_l,e,t,l,a,n),!0;case"dragenter":return Rl=On(Rl,e,t,l,a,n),!0;case"mouseover":return Nl=On(Nl,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return Nn.set(u,On(Nn.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Mn.set(u,On(Mn.get(u)||null,e,t,l,a,n)),!0}return!1}function $d(e){var t=Il(e.target);if(t!==null){var l=m(t);if(l!==null){if(t=l.tag,t===13){if(t=S(l),t!==null){e.blockedOn=t,rf(e.priority,function(){Kd(l)});return}}else if(t===31){if(t=R(l),t!==null){e.blockedOn=t,rf(e.priority,function(){Kd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=_r(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Ri=a,l.target.dispatchEvent(a),Ri=null}else return t=Pl(l),t!==null&&Vd(t),e.blockedOn=l,!1;t.shift()}return!0}function Wd(e,t,l){Pu(e)&&l.delete(t)}function cg(){Nr=!1,_l!==null&&Pu(_l)&&(_l=null),Rl!==null&&Pu(Rl)&&(Rl=null),Nl!==null&&Pu(Nl)&&(Nl=null),Nn.forEach(Wd),Mn.forEach(Wd)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Nr||(Nr=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,cg)))}var ti=null;function Fd(e){ti!==e&&(ti=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){ti===e&&(ti=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Rr(a||l)===null)continue;break}var u=Pl(l);u!==null&&(e.splice(t,3),t-=3,_c(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ua(e){function t(h){return ei(h,e)}_l!==null&&ei(_l,e),Rl!==null&&ei(Rl,e),Nl!==null&&ei(Nl,e),Nn.forEach(t),Mn.forEach(t);for(var l=0;l<Ml.length;l++){var a=Ml[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ml.length&&(l=Ml[0],l.blockedOn===null);)$d(l),l.blockedOn===null&&Ml.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Fe]||null;if(typeof u=="function")i||Fd(l);else if(i){var f=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Fe]||null)f=i.formAction;else if(Rr(n)!==null)continue}else f=i.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Fd(l)}}}function Id(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Mr(e){this._internalRoot=e}li.prototype.render=Mr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,a=mt();Qd(l,a,e,t,null,null)},li.prototype.unmount=Mr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qd(e.current,2,null,e,null,null),Hu(),t[Fl]=null}};function li(e){this._internalRoot=e}li.prototype.unstable_scheduleHydration=function(e){if(e){var t=cf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ml.length&&t!==0&&t<Ml[l].priority;l++);Ml.splice(l,0,e),l===0&&$d(e)}};var Pd=o.version;if(Pd!=="19.2.4")throw Error(r(527,Pd,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var rg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{qa=ai.inject(rg),ut=ai}catch{}}return Dn.createRoot=function(e,t){if(!d(e))throw Error(r(299));var l=!1,a="",n=is,u=cs,i=rs;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Gd(e,1,!1,null,null,l,a,null,n,u,i,Id),e[Fl]=t.current,or(e),new Mr(t)},Dn.hydrateRoot=function(e,t,l){if(!d(e))throw Error(r(299));var a=!1,n="",u=is,i=cs,f=rs,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),t=Gd(e,1,!0,t,l??null,a,n,h,u,i,f,Id),t.context=Xd(null),l=t.current,a=mt(),a=bi(a),n=hl(a),n.callback=null,gl(l,n,a),l=a,t.current.lanes=l,Ya(t,l),Bt(t),e[Fl]=t.current,or(e),new li(t)},Dn.version="19.2.4",Dn}var fm;function yg(){if(fm)return Dr.exports;fm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),Dr.exports=vg(),Dr.exports}var bg=yg();var om="popstate";function sm(c){return typeof c=="object"&&c!=null&&"pathname"in c&&"search"in c&&"hash"in c&&"state"in c&&"key"in c}function xg(c={}){function o(d,m){let{pathname:S="/",search:R="",hash:b=""}=Wl(d.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Yr("",{pathname:S,search:R,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function s(d,m){let S=d.document.querySelector("base"),R="";if(S&&S.getAttribute("href")){let b=d.location.href,p=b.indexOf("#");R=p===-1?b:b.slice(0,p)}return R+"#"+(typeof m=="string"?m:Hn(m))}function r(d,m){Ct(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return Eg(o,s,r,c)}function _e(c,o){if(c===!1||c===null||typeof c>"u")throw new Error(o)}function Ct(c,o){if(!c){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Sg(){return Math.random().toString(36).substring(2,10)}function dm(c,o){return{usr:c.state,key:c.key,idx:o,masked:c.unstable_mask?{pathname:c.pathname,search:c.search,hash:c.hash}:void 0}}function Yr(c,o,s=null,r,d){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof o=="string"?Wl(o):o,state:s,key:o&&o.key||r||Sg(),unstable_mask:d}}function Hn({pathname:c="/",search:o="",hash:s=""}){return o&&o!=="?"&&(c+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(c+=s.charAt(0)==="#"?s:"#"+s),c}function Wl(c){let o={};if(c){let s=c.indexOf("#");s>=0&&(o.hash=c.substring(s),c=c.substring(0,s));let r=c.indexOf("?");r>=0&&(o.search=c.substring(r),c=c.substring(0,r)),c&&(o.pathname=c)}return o}function Eg(c,o,s,r={}){let{window:d=document.defaultView,v5Compat:m=!1}=r,S=d.history,R="POP",b=null,p=N();p==null&&(p=0,S.replaceState({...S.state,idx:p},""));function N(){return(S.state||{idx:null}).idx}function x(){R="POP";let H=N(),X=H==null?null:H-p;p=H,b&&b({action:R,location:L.location,delta:X})}function w(H,X){R="PUSH";let B=sm(H)?H:Yr(L.location,H,X);s&&s(B,H),p=N()+1;let Q=dm(B,p),oe=L.createHref(B.unstable_mask||B);try{S.pushState(Q,"",oe)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;d.location.assign(oe)}m&&b&&b({action:R,location:L.location,delta:1})}function V(H,X){R="REPLACE";let B=sm(H)?H:Yr(L.location,H,X);s&&s(B,H),p=N();let Q=dm(B,p),oe=L.createHref(B.unstable_mask||B);S.replaceState(Q,"",oe),m&&b&&b({action:R,location:L.location,delta:0})}function G(H){return zg(H)}let L={get action(){return R},get location(){return c(d,S)},listen(H){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(om,x),b=H,()=>{d.removeEventListener(om,x),b=null}},createHref(H){return o(d,H)},createURL:G,encodeLocation(H){let X=G(H);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:w,replace:V,go(H){return S.go(H)}};return L}function zg(c,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),_e(s,"No window.location.(origin|href) available to create URL");let r=typeof c=="string"?c:Hn(c);return r=r.replace(/ $/,"%20"),!o&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function Sm(c,o,s="/"){return Tg(c,o,s,!1)}function Tg(c,o,s,r){let d=typeof o=="string"?Wl(o):o,m=nl(d.pathname||"/",s);if(m==null)return null;let S=Em(c);Ag(S);let R=null;for(let b=0;R==null&&b<S.length;++b){let p=Hg(m);R=Ug(S[b],p,r)}return R}function Em(c,o=[],s=[],r="",d=!1){let m=(S,R,b=d,p)=>{let N={relativePath:p===void 0?S.path||"":p,caseSensitive:S.caseSensitive===!0,childrenIndex:R,route:S};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(r)&&b)return;_e(N.relativePath.startsWith(r),`Absolute route path "${N.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(r.length)}let x=qt([r,N.relativePath]),w=s.concat(N);S.children&&S.children.length>0&&(_e(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Em(S.children,o,w,x,b)),!(S.path==null&&!S.index)&&o.push({path:x,score:Dg(x,S.index),routesMeta:w})};return c.forEach((S,R)=>{if(S.path===""||!S.path?.includes("?"))m(S,R);else for(let b of zm(S.path))m(S,R,!0,b)}),o}function zm(c){let o=c.split("/");if(o.length===0)return[];let[s,...r]=o,d=s.endsWith("?"),m=s.replace(/\?$/,"");if(r.length===0)return d?[m,""]:[m];let S=zm(r.join("/")),R=[];return R.push(...S.map(b=>b===""?m:[m,b].join("/"))),d&&R.push(...S),R.map(b=>c.startsWith("/")&&b===""?"/":b)}function Ag(c){c.sort((o,s)=>o.score!==s.score?s.score-o.score:jg(o.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var _g=/^:[\w-]+$/,Rg=3,Ng=2,Mg=1,Og=10,Cg=-2,mm=c=>c==="*";function Dg(c,o){let s=c.split("/"),r=s.length;return s.some(mm)&&(r+=Cg),o&&(r+=Ng),s.filter(d=>!mm(d)).reduce((d,m)=>d+(_g.test(m)?Rg:m===""?Mg:Og),r)}function jg(c,o){return c.length===o.length&&c.slice(0,-1).every((r,d)=>r===o[d])?c[c.length-1]-o[o.length-1]:0}function Ug(c,o,s=!1){let{routesMeta:r}=c,d={},m="/",S=[];for(let R=0;R<r.length;++R){let b=r[R],p=R===r.length-1,N=m==="/"?o:o.slice(m.length)||"/",x=ri({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},N),w=b.route;if(!x&&p&&s&&!r[r.length-1].route.index&&(x=ri({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},N)),!x)return null;Object.assign(d,x.params),S.push({params:d,pathname:qt([m,x.pathname]),pathnameBase:Yg(qt([m,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(m=qt([m,x.pathnameBase]))}return S}function ri(c,o){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[s,r]=wg(c.path,c.caseSensitive,c.end),d=o.match(s);if(!d)return null;let m=d[0],S=m.replace(/(.)\/+$/,"$1"),R=d.slice(1);return{params:r.reduce((p,{paramName:N,isOptional:x},w)=>{if(N==="*"){let G=R[w]||"";S=m.slice(0,m.length-G.length).replace(/(.)\/+$/,"$1")}const V=R[w];return x&&!V?p[N]=void 0:p[N]=(V||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:S,pattern:c}}function wg(c,o=!1,s=!0){Ct(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let r=[],d="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,R,b,p,N)=>{if(r.push({paramName:R,isOptional:b!=null}),b){let x=N.charAt(p+S.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(r.push({paramName:"*"}),d+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":c!==""&&c!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),r]}function Hg(c){try{return c.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ct(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),c}}function nl(c,o){if(o==="/")return c;if(!c.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,r=c.charAt(s);return r&&r!=="/"?null:c.slice(s)||"/"}var Bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function qg(c,o="/"){let{pathname:s,search:r="",hash:d=""}=typeof c=="string"?Wl(c):c,m;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?m=hm(s.substring(1),"/"):m=hm(s,o)):m=o,{pathname:m,search:Gg(r),hash:Xg(d)}}function hm(c,o){let s=o.replace(/\/+$/,"").split("/");return c.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Hr(c,o,s,r){return`Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Lg(c){return c.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Tm(c){let o=Lg(c);return o.map((s,r)=>r===o.length-1?s.pathname:s.pathnameBase)}function Qr(c,o,s,r=!1){let d;typeof c=="string"?d=Wl(c):(d={...c},_e(!d.pathname||!d.pathname.includes("?"),Hr("?","pathname","search",d)),_e(!d.pathname||!d.pathname.includes("#"),Hr("#","pathname","hash",d)),_e(!d.search||!d.search.includes("#"),Hr("#","search","hash",d)));let m=c===""||d.pathname==="",S=m?"/":d.pathname,R;if(S==null)R=s;else{let x=o.length-1;if(!r&&S.startsWith("..")){let w=S.split("/");for(;w[0]==="..";)w.shift(),x-=1;d.pathname=w.join("/")}R=x>=0?o[x]:"/"}let b=qg(d,R),p=S&&S!=="/"&&S.endsWith("/"),N=(m||S===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(p||N)&&(b.pathname+="/"),b}var qt=c=>c.join("/").replace(/\/\/+/g,"/"),Yg=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),Gg=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,Xg=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c,Qg=class{constructor(c,o,s,r=!1){this.status=c,this.statusText=o||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Zg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}function Vg(c){return c.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Am=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _m(c,o){let s=c;if(typeof s!="string"||!Bg.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,d=!1;if(Am)try{let m=new URL(window.location.href),S=s.startsWith("//")?new URL(m.protocol+s):new URL(s),R=nl(S.pathname,o);S.origin===m.origin&&R!=null?s=R+S.search+S.hash:d=!0}catch{Ct(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rm=["POST","PUT","PATCH","DELETE"];new Set(Rm);var Kg=["GET",...Rm];new Set(Kg);var Ha=A.createContext(null);Ha.displayName="DataRouter";var fi=A.createContext(null);fi.displayName="DataRouterState";var kg=A.createContext(!1),Nm=A.createContext({isTransitioning:!1});Nm.displayName="ViewTransition";var Jg=A.createContext(new Map);Jg.displayName="Fetchers";var $g=A.createContext(null);$g.displayName="Await";var _t=A.createContext(null);_t.displayName="Navigation";var Bn=A.createContext(null);Bn.displayName="Location";var Lt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Zr=A.createContext(null);Zr.displayName="RouteError";var Mm="REACT_ROUTER_ERROR",Wg="REDIRECT",Fg="ROUTE_ERROR_RESPONSE";function Ig(c){if(c.startsWith(`${Mm}:${Wg}:{`))try{let o=JSON.parse(c.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Pg(c){if(c.startsWith(`${Mm}:${Fg}:{`))try{let o=JSON.parse(c.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Qg(o.status,o.statusText,o.data)}catch{}}function ep(c,{relative:o}={}){_e(qn(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=A.useContext(_t),{hash:d,pathname:m,search:S}=Ln(c,{relative:o}),R=m;return s!=="/"&&(R=m==="/"?s:qt([s,m])),r.createHref({pathname:R,search:S,hash:d})}function qn(){return A.useContext(Bn)!=null}function ul(){return _e(qn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Bn).location}var Om="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cm(c){A.useContext(_t).static||A.useLayoutEffect(c)}function Vr(){let{isDataRoute:c}=A.useContext(Lt);return c?hp():tp()}function tp(){_e(qn(),"useNavigate() may be used only in the context of a <Router> component.");let c=A.useContext(Ha),{basename:o,navigator:s}=A.useContext(_t),{matches:r}=A.useContext(Lt),{pathname:d}=ul(),m=JSON.stringify(Tm(r)),S=A.useRef(!1);return Cm(()=>{S.current=!0}),A.useCallback((b,p={})=>{if(Ct(S.current,Om),!S.current)return;if(typeof b=="number"){s.go(b);return}let N=Qr(b,JSON.parse(m),d,p.relative==="path");c==null&&o!=="/"&&(N.pathname=N.pathname==="/"?o:qt([o,N.pathname])),(p.replace?s.replace:s.push)(N,p.state,p)},[o,s,m,d,c])}A.createContext(null);function lp(){let{matches:c}=A.useContext(Lt),o=c[c.length-1];return o?o.params:{}}function Ln(c,{relative:o}={}){let{matches:s}=A.useContext(Lt),{pathname:r}=ul(),d=JSON.stringify(Tm(s));return A.useMemo(()=>Qr(c,JSON.parse(d),r,o==="path"),[c,d,r,o])}function ap(c,o){return Dm(c,o)}function Dm(c,o,s){_e(qn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=A.useContext(_t),{matches:d}=A.useContext(Lt),m=d[d.length-1],S=m?m.params:{},R=m?m.pathname:"/",b=m?m.pathnameBase:"/",p=m&&m.route;{let H=p&&p.path||"";Um(R,!p||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${R}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let N=ul(),x;if(o){let H=typeof o=="string"?Wl(o):o;_e(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),x=H}else x=N;let w=x.pathname||"/",V=w;if(b!=="/"){let H=b.replace(/^\//,"").split("/");V="/"+w.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=Sm(c,{pathname:V});Ct(p||G!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Ct(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=rp(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},S,H.params),pathname:qt([b,r.encodeLocation?r.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:qt([b,r.encodeLocation?r.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),d,s);return o&&L?A.createElement(Bn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},L):L}function np(){let c=mp(),o=Zg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),s=c instanceof Error?c.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},m={padding:"2px 4px",backgroundColor:r},S=null;return console.error("Error handled by React Router default ErrorBoundary:",c),S=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:m},"ErrorBoundary")," or"," ",A.createElement("code",{style:m},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},o),s?A.createElement("pre",{style:d},s):null,S)}var up=A.createElement(np,null),jm=class extends A.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,o){return o.location!==c.location||o.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:o.error,location:o.location,revalidation:c.revalidation||o.revalidation}}componentDidCatch(c,o){this.props.onError?this.props.onError(c,o):console.error("React Router caught the following error during render",c)}render(){let c=this.state.error;if(this.context&&typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){const s=Pg(c.digest);s&&(c=s)}let o=c!==void 0?A.createElement(Lt.Provider,{value:this.props.routeContext},A.createElement(Zr.Provider,{value:c,children:this.props.component})):this.props.children;return this.context?A.createElement(ip,{error:c},o):o}};jm.contextType=kg;var Br=new WeakMap;function ip({children:c,error:o}){let{basename:s}=A.useContext(_t);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let r=Ig(o.digest);if(r){let d=Br.get(o);if(d)throw d;let m=_m(r.location,s);if(Am&&!Br.get(o))if(m.isExternal||r.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const S=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:r.replace}));throw Br.set(o,S),S}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return c}function cp({routeContext:c,match:o,children:s}){let r=A.useContext(Ha);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),A.createElement(Lt.Provider,{value:c},s)}function rp(c,o=[],s){let r=s?.state;if(c==null){if(!r)return null;if(r.errors)c=r.matches;else if(o.length===0&&!r.initialized&&r.matches.length>0)c=r.matches;else return null}let d=c,m=r?.errors;if(m!=null){let N=d.findIndex(x=>x.route.id&&m?.[x.route.id]!==void 0);_e(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,N+1))}let S=!1,R=-1;if(s&&r){S=r.renderFallback;for(let N=0;N<d.length;N++){let x=d[N];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(R=N),x.route.id){let{loaderData:w,errors:V}=r,G=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!V||V[x.route.id]===void 0);if(x.route.lazy||G){s.isStatic&&(S=!0),R>=0?d=d.slice(0,R+1):d=[d[0]];break}}}}let b=s?.onError,p=r&&b?(N,x)=>{b(N,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Vg(r.matches),errorInfo:x})}:void 0;return d.reduceRight((N,x,w)=>{let V,G=!1,L=null,H=null;r&&(V=m&&x.route.id?m[x.route.id]:void 0,L=x.route.errorElement||up,S&&(R<0&&w===0?(Um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,H=null):R===w&&(G=!0,H=x.route.hydrateFallbackElement||null)));let X=o.concat(d.slice(0,w+1)),B=()=>{let Q;return V?Q=L:G?Q=H:x.route.Component?Q=A.createElement(x.route.Component,null):x.route.element?Q=x.route.element:Q=N,A.createElement(cp,{match:x,routeContext:{outlet:N,matches:X,isDataRoute:r!=null},children:Q})};return r&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?A.createElement(jm,{location:r.location,revalidation:r.revalidation,component:L,error:V,children:B(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:p}):B()},null)}function Kr(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fp(c){let o=A.useContext(Ha);return _e(o,Kr(c)),o}function op(c){let o=A.useContext(fi);return _e(o,Kr(c)),o}function sp(c){let o=A.useContext(Lt);return _e(o,Kr(c)),o}function kr(c){let o=sp(c),s=o.matches[o.matches.length-1];return _e(s.route.id,`${c} can only be used on routes that contain a unique "id"`),s.route.id}function dp(){return kr("useRouteId")}function mp(){let c=A.useContext(Zr),o=op("useRouteError"),s=kr("useRouteError");return c!==void 0?c:o.errors?.[s]}function hp(){let{router:c}=fp("useNavigate"),o=kr("useNavigate"),s=A.useRef(!1);return Cm(()=>{s.current=!0}),A.useCallback(async(d,m={})=>{Ct(s.current,Om),s.current&&(typeof d=="number"?await c.navigate(d):await c.navigate(d,{fromRouteId:o,...m}))},[c,o])}var gm={};function Um(c,o,s){!o&&!gm[c]&&(gm[c]=!0,Ct(!1,s))}A.memo(gp);function gp({routes:c,future:o,state:s,isStatic:r,onError:d}){return Dm(c,void 0,{state:s,isStatic:r,onError:d})}function Un(c){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pp({basename:c="/",children:o=null,location:s,navigationType:r="POP",navigator:d,static:m=!1,unstable_useTransitions:S}){_e(!qn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let R=c.replace(/^\/*/,"/"),b=A.useMemo(()=>({basename:R,navigator:d,static:m,unstable_useTransitions:S,future:{}}),[R,d,m,S]);typeof s=="string"&&(s=Wl(s));let{pathname:p="/",search:N="",hash:x="",state:w=null,key:V="default",unstable_mask:G}=s,L=A.useMemo(()=>{let H=nl(p,R);return H==null?null:{location:{pathname:H,search:N,hash:x,state:w,key:V,unstable_mask:G},navigationType:r}},[R,p,N,x,w,V,r,G]);return Ct(L!=null,`<Router basename="${R}"> is not able to match the URL "${p}${N}${x}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:A.createElement(_t.Provider,{value:b},A.createElement(Bn.Provider,{children:o,value:L}))}function vp({children:c,location:o}){return ap(Gr(c),o)}function Gr(c,o=[]){let s=[];return A.Children.forEach(c,(r,d)=>{if(!A.isValidElement(r))return;let m=[...o,d];if(r.type===A.Fragment){s.push.apply(s,Gr(r.props.children,m));return}_e(r.type===Un,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!r.props.index||!r.props.children,"An index route cannot have child routes.");let S={id:r.props.id||m.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(S.children=Gr(r.props.children,m)),s.push(S)}),s}var ii="get",ci="application/x-www-form-urlencoded";function oi(c){return typeof HTMLElement<"u"&&c instanceof HTMLElement}function yp(c){return oi(c)&&c.tagName.toLowerCase()==="button"}function bp(c){return oi(c)&&c.tagName.toLowerCase()==="form"}function xp(c){return oi(c)&&c.tagName.toLowerCase()==="input"}function Sp(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function Ep(c,o){return c.button===0&&(!o||o==="_self")&&!Sp(c)}var ni=null;function zp(){if(ni===null)try{new FormData(document.createElement("form"),0),ni=!1}catch{ni=!0}return ni}var Tp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qr(c){return c!=null&&!Tp.has(c)?(Ct(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ci}"`),null):c}function Ap(c,o){let s,r,d,m,S;if(bp(c)){let R=c.getAttribute("action");r=R?nl(R,o):null,s=c.getAttribute("method")||ii,d=qr(c.getAttribute("enctype"))||ci,m=new FormData(c)}else if(yp(c)||xp(c)&&(c.type==="submit"||c.type==="image")){let R=c.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=c.getAttribute("formaction")||R.getAttribute("action");if(r=b?nl(b,o):null,s=c.getAttribute("formmethod")||R.getAttribute("method")||ii,d=qr(c.getAttribute("formenctype"))||qr(R.getAttribute("enctype"))||ci,m=new FormData(R,c),!zp()){let{name:p,type:N,value:x}=c;if(N==="image"){let w=p?`${p}.`:"";m.append(`${w}x`,"0"),m.append(`${w}y`,"0")}else p&&m.append(p,x)}}else{if(oi(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ii,r=null,d=ci,S=c}return m&&d==="text/plain"&&(S=m,m=void 0),{action:r,method:s.toLowerCase(),encType:d,formData:m,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jr(c,o){if(c===!1||c===null||typeof c>"u")throw new Error(o)}function _p(c,o,s,r){let d=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${r}`:d.pathname=`${d.pathname}.${r}`:d.pathname==="/"?d.pathname=`_root.${r}`:o&&nl(d.pathname,o)==="/"?d.pathname=`${o.replace(/\/$/,"")}/_root.${r}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${r}`,d}async function Rp(c,o){if(c.id in o)return o[c.id];try{let s=await import(c.module);return o[c.id]=s,s}catch(s){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Np(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function Mp(c,o,s){let r=await Promise.all(c.map(async d=>{let m=o.routes[d.route.id];if(m){let S=await Rp(m,s);return S.links?S.links():[]}return[]}));return jp(r.flat(1).filter(Np).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function pm(c,o,s,r,d,m){let S=(b,p)=>s[p]?b.route.id!==s[p].route.id:!0,R=(b,p)=>s[p].pathname!==b.pathname||s[p].route.path?.endsWith("*")&&s[p].params["*"]!==b.params["*"];return m==="assets"?o.filter((b,p)=>S(b,p)||R(b,p)):m==="data"?o.filter((b,p)=>{let N=r.routes[b.route.id];if(!N||!N.hasLoader)return!1;if(S(b,p)||R(b,p))return!0;if(b.route.shouldRevalidate){let x=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Op(c,o,{includeHydrateFallback:s}={}){return Cp(c.map(r=>{let d=o.routes[r.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function Cp(c){return[...new Set(c)]}function Dp(c){let o={},s=Object.keys(c).sort();for(let r of s)o[r]=c[r];return o}function jp(c,o){let s=new Set;return new Set(o),c.reduce((r,d)=>{let m=JSON.stringify(Dp(d));return s.has(m)||(s.add(m),r.push({key:m,link:d})),r},[])}function wm(){let c=A.useContext(Ha);return Jr(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function Up(){let c=A.useContext(fi);return Jr(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var $r=A.createContext(void 0);$r.displayName="FrameworkContext";function Hm(){let c=A.useContext($r);return Jr(c,"You must render this element inside a <HydratedRouter> element"),c}function wp(c,o){let s=A.useContext($r),[r,d]=A.useState(!1),[m,S]=A.useState(!1),{onFocus:R,onBlur:b,onMouseEnter:p,onMouseLeave:N,onTouchStart:x}=o,w=A.useRef(null);A.useEffect(()=>{if(c==="render"&&S(!0),c==="viewport"){let L=X=>{X.forEach(B=>{S(B.isIntersecting)})},H=new IntersectionObserver(L,{threshold:.5});return w.current&&H.observe(w.current),()=>{H.disconnect()}}},[c]),A.useEffect(()=>{if(r){let L=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(L)}}},[r]);let V=()=>{d(!0)},G=()=>{d(!1),S(!1)};return s?c!=="intent"?[m,w,{}]:[m,w,{onFocus:jn(R,V),onBlur:jn(b,G),onMouseEnter:jn(p,V),onMouseLeave:jn(N,G),onTouchStart:jn(x,V)}]:[!1,w,{}]}function jn(c,o){return s=>{c&&c(s),s.defaultPrevented||o(s)}}function Hp({page:c,...o}){let{router:s}=wm(),r=A.useMemo(()=>Sm(s.routes,c,s.basename),[s.routes,c,s.basename]);return r?A.createElement(qp,{page:c,matches:r,...o}):null}function Bp(c){let{manifest:o,routeModules:s}=Hm(),[r,d]=A.useState([]);return A.useEffect(()=>{let m=!1;return Mp(c,o,s).then(S=>{m||d(S)}),()=>{m=!0}},[c,o,s]),r}function qp({page:c,matches:o,...s}){let r=ul(),{future:d,manifest:m,routeModules:S}=Hm(),{basename:R}=wm(),{loaderData:b,matches:p}=Up(),N=A.useMemo(()=>pm(c,o,p,m,r,"data"),[c,o,p,m,r]),x=A.useMemo(()=>pm(c,o,p,m,r,"assets"),[c,o,p,m,r]),w=A.useMemo(()=>{if(c===r.pathname+r.search+r.hash)return[];let L=new Set,H=!1;if(o.forEach(B=>{let Q=m.routes[B.route.id];!Q||!Q.hasLoader||(!N.some(oe=>oe.route.id===B.route.id)&&B.route.id in b&&S[B.route.id]?.shouldRevalidate||Q.hasClientLoader?H=!0:L.add(B.route.id))}),L.size===0)return[];let X=_p(c,R,d.unstable_trailingSlashAwareDataRequests,"data");return H&&L.size>0&&X.searchParams.set("_routes",o.filter(B=>L.has(B.route.id)).map(B=>B.route.id).join(",")),[X.pathname+X.search]},[R,d.unstable_trailingSlashAwareDataRequests,b,r,m,N,o,c,S]),V=A.useMemo(()=>Op(x,m),[x,m]),G=Bp(x);return A.createElement(A.Fragment,null,w.map(L=>A.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...s})),V.map(L=>A.createElement("link",{key:L,rel:"modulepreload",href:L,...s})),G.map(({key:L,link:H})=>A.createElement("link",{key:L,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function Lp(...c){return o=>{c.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var Yp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yp&&(window.__reactRouterVersion="7.13.1")}catch{}function Gp({basename:c,children:o,unstable_useTransitions:s,window:r}){let d=A.useRef();d.current==null&&(d.current=xg({window:r,v5Compat:!0}));let m=d.current,[S,R]=A.useState({action:m.action,location:m.location}),b=A.useCallback(p=>{s===!1?R(p):A.startTransition(()=>R(p))},[s]);return A.useLayoutEffect(()=>m.listen(b),[m,b]),A.createElement(pp,{basename:c,children:o,location:S.location,navigationType:S.action,navigator:m,unstable_useTransitions:s})}var Bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wa=A.forwardRef(function({onClick:o,discover:s="render",prefetch:r="none",relative:d,reloadDocument:m,replace:S,unstable_mask:R,state:b,target:p,to:N,preventScrollReset:x,viewTransition:w,unstable_defaultShouldRevalidate:V,...G},L){let{basename:H,navigator:X,unstable_useTransitions:B}=A.useContext(_t),Q=typeof N=="string"&&Bm.test(N),oe=_m(N,H);N=oe.to;let be=ep(N,{relative:d}),Ae=ul(),F=null;if(R){let je=Qr(R,[],Ae.unstable_mask?Ae.unstable_mask.pathname:"/",!0);H!=="/"&&(je.pathname=je.pathname==="/"?H:qt([H,je.pathname])),F=X.createHref(je)}let[Me,Ke,Dt]=wp(r,G),ht=Vp(N,{replace:S,unstable_mask:R,state:b,target:p,preventScrollReset:x,relative:d,viewTransition:w,unstable_defaultShouldRevalidate:V,unstable_useTransitions:B});function ke(je){o&&o(je),je.defaultPrevented||ht(je)}let jt=!(oe.isExternal||m),gt=A.createElement("a",{...G,...Dt,href:(jt?F:void 0)||oe.absoluteURL||be,onClick:jt?ke:o,ref:Lp(L,Ke),target:p,"data-discover":!Q&&s==="render"?"true":void 0});return Me&&!Q?A.createElement(A.Fragment,null,gt,A.createElement(Hp,{page:be})):gt});wa.displayName="Link";var Xp=A.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:r="",end:d=!1,style:m,to:S,viewTransition:R,children:b,...p},N){let x=Ln(S,{relative:p.relative}),w=ul(),V=A.useContext(fi),{navigator:G,basename:L}=A.useContext(_t),H=V!=null&&Wp(x)&&R===!0,X=G.encodeLocation?G.encodeLocation(x).pathname:x.pathname,B=w.pathname,Q=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;s||(B=B.toLowerCase(),Q=Q?Q.toLowerCase():null,X=X.toLowerCase()),Q&&L&&(Q=nl(Q,L)||Q);const oe=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let be=B===X||!d&&B.startsWith(X)&&B.charAt(oe)==="/",Ae=Q!=null&&(Q===X||!d&&Q.startsWith(X)&&Q.charAt(X.length)==="/"),F={isActive:be,isPending:Ae,isTransitioning:H},Me=be?o:void 0,Ke;typeof r=="function"?Ke=r(F):Ke=[r,be?"active":null,Ae?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Dt=typeof m=="function"?m(F):m;return A.createElement(wa,{...p,"aria-current":Me,className:Ke,ref:N,style:Dt,to:S,viewTransition:R},typeof b=="function"?b(F):b)});Xp.displayName="NavLink";var Qp=A.forwardRef(({discover:c="render",fetcherKey:o,navigate:s,reloadDocument:r,replace:d,state:m,method:S=ii,action:R,onSubmit:b,relative:p,preventScrollReset:N,viewTransition:x,unstable_defaultShouldRevalidate:w,...V},G)=>{let{unstable_useTransitions:L}=A.useContext(_t),H=Jp(),X=$p(R,{relative:p}),B=S.toLowerCase()==="get"?"get":"post",Q=typeof R=="string"&&Bm.test(R),oe=be=>{if(b&&b(be),be.defaultPrevented)return;be.preventDefault();let Ae=be.nativeEvent.submitter,F=Ae?.getAttribute("formmethod")||S,Me=()=>H(Ae||be.currentTarget,{fetcherKey:o,method:F,navigate:s,replace:d,state:m,relative:p,preventScrollReset:N,viewTransition:x,unstable_defaultShouldRevalidate:w});L&&s!==!1?A.startTransition(()=>Me()):Me()};return A.createElement("form",{ref:G,method:B,action:X,onSubmit:r?b:oe,...V,"data-discover":!Q&&c==="render"?"true":void 0})});Qp.displayName="Form";function Zp(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qm(c){let o=A.useContext(Ha);return _e(o,Zp(c)),o}function Vp(c,{target:o,replace:s,unstable_mask:r,state:d,preventScrollReset:m,relative:S,viewTransition:R,unstable_defaultShouldRevalidate:b,unstable_useTransitions:p}={}){let N=Vr(),x=ul(),w=Ln(c,{relative:S});return A.useCallback(V=>{if(Ep(V,o)){V.preventDefault();let G=s!==void 0?s:Hn(x)===Hn(w),L=()=>N(c,{replace:G,unstable_mask:r,state:d,preventScrollReset:m,relative:S,viewTransition:R,unstable_defaultShouldRevalidate:b});p?A.startTransition(()=>L()):L()}},[x,N,w,s,r,d,o,c,m,S,R,b,p])}var Kp=0,kp=()=>`__${String(++Kp)}__`;function Jp(){let{router:c}=qm("useSubmit"),{basename:o}=A.useContext(_t),s=dp(),r=c.fetch,d=c.navigate;return A.useCallback(async(m,S={})=>{let{action:R,method:b,encType:p,formData:N,body:x}=Ap(m,o);if(S.navigate===!1){let w=S.fetcherKey||kp();await r(w,s,S.action||R,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:N,body:x,formMethod:S.method||b,formEncType:S.encType||p,flushSync:S.flushSync})}else await d(S.action||R,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:N,body:x,formMethod:S.method||b,formEncType:S.encType||p,replace:S.replace,state:S.state,fromRouteId:s,flushSync:S.flushSync,viewTransition:S.viewTransition})},[r,d,o,s])}function $p(c,{relative:o}={}){let{basename:s}=A.useContext(_t),r=A.useContext(Lt);_e(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),m={...Ln(c||".",{relative:o})},S=ul();if(c==null){m.search=S.search;let R=new URLSearchParams(m.search),b=R.getAll("index");if(b.some(N=>N==="")){R.delete("index"),b.filter(x=>x).forEach(x=>R.append("index",x));let N=R.toString();m.search=N?`?${N}`:""}}return(!c||c===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:qt([s,m.pathname])),Hn(m)}function Wp(c,{relative:o}={}){let s=A.useContext(Nm);_e(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qm("useViewTransitionState"),d=Ln(c,{relative:o});if(!s.isTransitioning)return!1;let m=nl(s.currentLocation.pathname,r)||s.currentLocation.pathname,S=nl(s.nextLocation.pathname,r)||s.nextLocation.pathname;return ri(d.pathname,S)!=null||ri(d.pathname,m)!=null}const Lm=A.createContext(),Fp=({children:c})=>{const[o,s]=A.useState(!1),r=()=>{s(!o)};return g.jsx(Lm.Provider,{value:{isDark:o,toggleTheme:r},children:c})},Wr=()=>{const c=A.useContext(Lm);if(!c)throw new Error("useTheme debe usarse dentro de ThemeProvider");return c};const Ym=(...c)=>c.filter((o,s,r)=>!!o&&o.trim()!==""&&r.indexOf(o)===s).join(" ").trim();const Ip=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Pp=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,s,r)=>r?r.toUpperCase():s.toLowerCase());const vm=c=>{const o=Pp(c);return o.charAt(0).toUpperCase()+o.slice(1)};var ev={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tv=c=>{for(const o in c)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1};const lv=A.forwardRef(({color:c="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:d="",children:m,iconNode:S,...R},b)=>A.createElement("svg",{ref:b,...ev,width:o,height:o,stroke:c,strokeWidth:r?Number(s)*24/Number(o):s,className:Ym("lucide",d),...!m&&!tv(R)&&{"aria-hidden":"true"},...R},[...S.map(([p,N])=>A.createElement(p,N)),...Array.isArray(m)?m:[m]]));const Rt=(c,o)=>{const s=A.forwardRef(({className:r,...d},m)=>A.createElement(lv,{ref:m,iconNode:o,className:Ym(`lucide-${Ip(vm(c))}`,`lucide-${c}`,r),...d}));return s.displayName=vm(c),s};const av=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nv=Rt("arrow-left",av);const uv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],iv=Rt("chevron-left",uv);const cv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rv=Rt("chevron-right",cv);const fv=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],ov=Rt("grid-2x2",fv);const sv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],ym=Rt("grid-3x3",sv);const dv=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],mv=Rt("hash",dv);const hv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],gv=Rt("menu",hv);const pv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],bm=Rt("message-circle",pv);const vv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],yv=Rt("moon",vv);const bv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xm=Rt("search",bv);const xv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Sv=Rt("sun",xv);const Ev=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wn=Rt("x",Ev),zv=`
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
`,Lr=[{label:"Inicio",to:"/",type:"link"},{label:"Galería",to:"/galeria",type:"link"},{label:"Ubícanos",href:"#ubicacion",type:"anchor"},{label:"Buscar",to:"/buscar",type:"link"}],Tv=()=>{const{isDark:c,toggleTheme:o}=Wr(),s=ul(),[r,d]=A.useState(0),[m,S]=A.useState({}),[R,b]=A.useState(!1),p=A.useRef([]);A.useEffect(()=>{const x=Lr.findIndex(w=>w.type==="link"&&w.to===s.pathname);x!==-1&&d(x),b(!1)},[s.pathname]),A.useEffect(()=>{const x=p.current[r];x&&S({left:x.offsetLeft,width:x.offsetWidth})},[r]),A.useEffect(()=>{const x=()=>{window.innerWidth>=768&&b(!1)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const N=x=>{d(x),b(!1)};return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:`nb-root ${c?"":"light"}`,children:[g.jsx("style",{children:zv}),g.jsxs("nav",{className:"nb-bar",children:[g.jsxs(wa,{to:"/",className:"nb-logo",onClick:()=>d(0),children:[g.jsxs("span",{className:"nb-logo-text",children:["🎉 Decoraciones ",g.jsx("br",{})," Andrea"]}),g.jsx("span",{className:"nb-logo-dot"})]}),g.jsxs("div",{className:"nb-links",children:[Lr.map((x,w)=>{const V=`nb-link${r===w?" active":""}`;return x.type==="link"?g.jsx(wa,{to:x.to,ref:G=>p.current[w]=G,className:V,onClick:()=>d(w),children:x.label},x.label):g.jsx("a",{href:x.href,ref:G=>p.current[w]=G,className:V,onClick:()=>N(w),children:x.label},x.label)}),g.jsx("span",{className:"nb-indicator",style:m})]}),g.jsx("div",{className:"nb-spacer"}),g.jsxs("div",{className:"nb-actions",children:[g.jsxs("a",{href:"https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento.",target:"_blank",rel:"noreferrer",className:"nb-wa",children:[g.jsx(bm,{size:15}),g.jsx("span",{className:"nb-wa-label",children:"WhatsApp"})]}),g.jsx("button",{className:"nb-theme",onClick:o,"aria-label":"Cambiar tema",children:c?g.jsx(Sv,{size:16}):g.jsx(yv,{size:16})}),g.jsx("button",{className:"nb-burger",onClick:()=>b(x=>!x),"aria-label":R?"Cerrar menú":"Abrir menú","aria-expanded":R,children:R?g.jsx(wn,{size:16}):g.jsx(gv,{size:16})})]})]}),g.jsx("div",{className:`nb-drawer${R?" open":""}`,"aria-hidden":!R,children:g.jsxs("div",{className:"nb-drawer-inner",children:[Lr.map((x,w)=>{const V=`nb-drawer-link${r===w?" active":""}`;return x.type==="link"?g.jsx(wa,{to:x.to,className:V,onClick:()=>{d(w),b(!1)},children:x.label},x.label):g.jsx("a",{href:x.href,className:V,onClick:()=>N(w),children:x.label},x.label)}),g.jsx("div",{className:"nb-drawer-divider"}),g.jsxs("a",{href:"https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento.",target:"_blank",rel:"noreferrer",className:"nb-drawer-wa",onClick:()=>b(!1),children:[g.jsx(bm,{size:16}),"WhatsApp"]})]})}),R&&g.jsx("div",{className:"nb-backdrop",onClick:()=>b(!1)})]}),g.jsx("div",{className:"nb-page-spacer"})]})},Av="17JmBJicJCXvo28yABnLmJ_joDHq5xe9b",_v="AIzaSyD2pXYJFlu73Pd2QXNLT-CXw_5erDBThP8",si=async()=>{try{const c=`'${Av}' in parents and trashed = false and mimeType contains 'image/'`,s=`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(c)}&fields=${encodeURIComponent("files(id, name)")}&key=${_v}`,d=await(await fetch(s)).json();return d.error?(console.error("Error en Google Drive API:",d.error),[]):d.files.map(m=>({id:m.id,name:m.name,url:`https://lh3.googleusercontent.com/u/0/d/${m.id}=w1000-h1000`}))}catch(c){return console.error("Error fetching eventos:",c),[]}},ui=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .gl-root {
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
    min-height: calc(100vh - 100px);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px 40px;
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
    transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), border-color 0.2s, box-shadow 0.28s;
    animation: cardIn 0.32s cubic-bezier(.22,.68,0,1.2);
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(10px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .gl-card:hover {
    transform: translateY(-3px) scale(1.01);
    border-color: rgba(245,200,66,0.18);
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
  /* Gold bottom accent line */
  .gl-img-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
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
    transition: color 0.18s;
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
  }
  .gl-counter-pill span { color: var(--accent); }

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
    transition: border-color 0.18s, color 0.18s, background 0.18s, transform 0.12s;
    flex-shrink: 0;
  }
  .gl-nav-btn:hover:not(:disabled) {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(245,200,66,0.06);
    transform: translateY(-1px);
  }
  .gl-nav-btn:active:not(:disabled) { transform: scale(0.93); }
  .gl-nav-btn:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  /* Progress bar */
  .gl-progress-wrap {
    flex: 1;
    height: 3px;
    background: var(--bg3);
    border-radius: 2px;
    overflow: hidden;
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
    transition: width 0.22s cubic-bezier(.4,0,.2,1), background 0.18s;
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
  .gl-state p { font-size: 0.85rem; color: var(--text3); margin: 0; }
`,Rv=()=>{const c=Vr(),[o,s]=A.useState([]),[r,d]=A.useState(!0),[m,S]=A.useState(null),[R,b]=A.useState(0),[p,N]=A.useState(0),[x,w]=A.useState(0);A.useEffect(()=>{(async()=>{try{d(!0);const B=await si();s(B||[])}catch(B){S(B.message)}finally{d(!1)}})()},[]),A.useEffect(()=>{const X=B=>{B.key==="ArrowDown"||B.key==="ArrowRight"?(B.preventDefault(),b(Q=>Math.min(Q+1,o.length-1))):(B.key==="ArrowUp"||B.key==="ArrowLeft")&&(B.preventDefault(),b(Q=>Math.max(Q-1,0)))};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[o.length]);const V=X=>N(X.targetTouches[0].clientX),G=X=>{const B=X.changedTouches[0].clientX;w(B);const Q=p-B;Q>50&&b(oe=>Math.min(oe+1,o.length-1)),Q<-50&&b(oe=>Math.max(oe-1,0))};if(r)return g.jsxs("div",{className:"gl-root",children:[g.jsx("style",{children:ui}),g.jsxs("div",{className:"gl-state",children:[g.jsx("div",{className:"gl-spinner"}),g.jsx("p",{children:"Cargando galería..."})]})]});if(m)return g.jsxs("div",{className:"gl-root",children:[g.jsx("style",{children:ui}),g.jsx("div",{className:"gl-state",children:g.jsxs("p",{style:{color:"#ff6b6b"},children:["Error: ",m]})})]});if(!o.length)return g.jsxs("div",{className:"gl-root",children:[g.jsx("style",{children:ui}),g.jsx("div",{className:"gl-state",children:g.jsx("p",{children:"No hay eventos disponibles"})})]});const L=o[R],H=(R+1)/o.length*100;return g.jsxs("div",{className:"gl-root",children:[g.jsx("style",{children:ui}),g.jsxs("div",{className:"gl-card",onClick:()=>c(`/evento/${L.id}`),onTouchStart:V,onTouchEnd:G,role:"region","aria-label":`Imagen ${R+1} de ${o.length}: ${L.name}`,children:[g.jsxs("div",{className:"gl-img-wrap",children:[g.jsx("img",{src:`https://lh3.googleusercontent.com/d/${L.id}`,alt:L.name.replace(/\.[^/.]+$/,"")||"Imagen del evento",onError:X=>{X.target.style.display="none"}}),g.jsx("div",{className:"gl-img-overlay"}),g.jsx("div",{className:"gl-img-line"})]}),g.jsxs("div",{className:"gl-footer",children:[g.jsx("h3",{className:"gl-name",children:L.name.replace(/\.[^/.]+$/,"")||"Imagen"}),g.jsxs("div",{className:"gl-counter-pill",children:[g.jsx("span",{children:R+1})," / ",o.length]})]})]},L.id),g.jsxs("div",{className:"gl-controls",children:[g.jsxs("div",{className:"gl-nav",children:[g.jsx("button",{className:"gl-nav-btn",onClick:()=>b(X=>Math.max(X-1,0)),disabled:R===0,"aria-label":"Anterior",children:g.jsx(iv,{size:20})}),g.jsx("div",{className:"gl-progress-wrap",children:g.jsx("div",{className:"gl-progress-bar",style:{width:`${H}%`}})}),g.jsx("button",{className:"gl-nav-btn",onClick:()=>b(X=>Math.min(X+1,o.length-1)),disabled:R===o.length-1,"aria-label":"Siguiente",children:g.jsx(rv,{size:20})})]}),g.jsx("div",{className:"gl-dots",role:"tablist",children:o.map((X,B)=>g.jsx("button",{className:`gl-dot${B===R?" active":""}`,onClick:()=>b(B),"aria-label":`Ir a imagen ${B+1}`,"aria-current":B===R?"true":"false",role:"tab"},B))}),g.jsxs("p",{className:"gl-hint",children:[g.jsx("span",{className:"sm-only-hide",children:"← → para navegar · "}),"Toca la imagen para ver detalles"]})]})]})},Nv=`
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
`,Mv=c=>{switch(c%8){case 0:return"gm-tile-2x2";case 3:return"gm-tile-h2";case 6:return"gm-tile-w2";default:return"gm-tile"}},Ov=()=>{const[c,o]=A.useState([]),[s,r]=A.useState(!0),[d,m]=A.useState(null),[S,R]=A.useState(null);A.useEffect(()=>{(async()=>{try{r(!0);const x=await si();o(x||[])}catch(x){m(x.message)}finally{r(!1)}})()},[]),A.useEffect(()=>{const N=x=>{x.key==="Escape"&&R(null)};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[]);const b=()=>R(null),p=N=>{N.target===N.currentTarget&&b()};return g.jsxs("div",{className:"gm-root",children:[g.jsx("style",{children:Nv}),s?g.jsxs("div",{className:"gm-state",children:[g.jsx("div",{className:"gm-spinner"}),g.jsx("p",{children:"Cargando galería..."})]}):d?g.jsx("div",{className:"gm-state",children:g.jsxs("p",{style:{color:"#ff6b6b"},children:["Error: ",d]})}):c.length?g.jsx("div",{className:"gm-grid",children:c.map((N,x)=>{const w=Mv(x),V=w!=="gm-tile";return g.jsxs("div",{className:w,onClick:()=>R(N),role:"button","aria-label":N.name.replace(/\.[^/.]+$/,"")||"Imagen",children:[g.jsx("img",{src:`https://lh3.googleusercontent.com/d/${N.id}`,alt:N.name,loading:"lazy",onError:G=>{G.target.style.display="none"}}),g.jsx("div",{className:"gm-overlay"}),V&&g.jsx("div",{className:"gm-label",children:g.jsx("h3",{children:N.name.replace(/\.[^/.]+$/,"")||"Imagen"})}),g.jsx("div",{className:"gm-line"})]},N.id)})}):g.jsx("div",{className:"gm-state",children:g.jsx("p",{children:"No hay eventos disponibles"})}),S&&g.jsxs("div",{className:"lb-bg",onClick:p,children:[g.jsx("button",{className:"lb-close",onClick:b,"aria-label":"Cerrar",children:g.jsx(wn,{size:18})}),g.jsxs("div",{className:"lb-body",children:[g.jsx("img",{src:`https://lh3.googleusercontent.com/d/${S.id}`,alt:S.name,onClick:N=>N.stopPropagation()}),g.jsxs("div",{className:"lb-info",children:[g.jsx("h2",{children:S.name.replace(/\.[^/.]+$/,"")||"Imagen"}),g.jsx("p",{className:"lb-hint",children:"ESC o clic afuera para cerrar"})]})]})]})]})},Cv=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .ed-root {
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
    min-height: 100vh;
    color: var(--text);
  }
  .ed-root * { box-sizing: border-box; }

  /* Top bar */
  .ed-topbar {
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 72px;
    z-index: 30;
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
    transition: border-color 0.18s, color 0.18s, background 0.18s;
    cursor: pointer;
  }
  .ed-back:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(245,200,66,0.05);
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
    background: rgba(245,200,66,0.1);
    border: 1px solid rgba(245,200,66,0.2);
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    width: fit-content;
  }
  .ed-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    margin: 0;
    line-height: 1.15;
  }
  .ed-divider {
    width: 40px;
    height: 3px;
    background: var(--accent);
    border-radius: 2px;
  }
  .ed-desc {
    font-size: 0.9rem;
    color: var(--text2);
    line-height: 1.7;
    margin: 0;
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
    background: rgba(245,200,66,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
  }
  .ed-meta-key {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text3);
    margin-bottom: 2px;
  }
  .ed-meta-val {
    font-size: 0.82rem;
    color: var(--text2);
    font-family: 'DM Sans', sans-serif;
    word-break: break-all;
    line-height: 1.4;
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
`,Dv=()=>{const{id:c}=lp(),[o,s]=A.useState(null),[r,d]=A.useState(!0);return A.useEffect(()=>{(async()=>{try{d(!0);const R=(await si()).find(b=>b.id===c);s(R||null)}catch(S){console.error("Error loading evento:",S)}finally{d(!1)}})()},[c]),g.jsxs("div",{className:"ed-root",children:[g.jsx("style",{children:Cv}),g.jsx("div",{className:"ed-topbar",children:g.jsx("div",{className:"ed-topbar-inner",children:g.jsxs(wa,{to:"/",className:"ed-back",children:[g.jsx(nv,{size:15}),"Volver a Galería"]})})}),g.jsx("main",{className:"ed-main",children:r?g.jsxs("div",{className:"ed-state",children:[g.jsx("div",{className:"ed-spinner"}),g.jsx("p",{className:"ed-state-label",children:"Cargando evento..."})]}):o?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"ed-img-panel",children:[g.jsx("img",{src:`https://lh3.googleusercontent.com/d/${c}`,alt:o.name,onError:m=>{m.target.style.display="none"}}),g.jsx("div",{className:"ed-img-accent"})]}),g.jsxs("div",{className:"ed-info",children:[g.jsx("span",{className:"ed-tag",children:"Evento"}),g.jsx("h1",{className:"ed-title",children:o.name.replace(/\.[^/.]+$/,"")||"Evento sin nombre"}),g.jsx("div",{className:"ed-divider"}),g.jsx("p",{className:"ed-desc",children:"Aquí puedes agregar más información sobre este evento, como descripción, detalles de decoración, contacto, y más."}),g.jsx("div",{className:"ed-meta",children:g.jsxs("div",{className:"ed-meta-row",children:[g.jsx("div",{className:"ed-meta-icon",children:g.jsx(mv,{size:13})}),g.jsxs("div",{children:[g.jsx("p",{className:"ed-meta-key",children:"ID del evento"}),g.jsx("p",{className:"ed-meta-val",children:c})]})]})})]})]}):g.jsxs("div",{className:"ed-state",children:[g.jsx("p",{className:"ed-notfound",children:"Evento no encontrado"}),g.jsx("p",{className:"ed-state-label",children:"El ID solicitado no existe en la galería"})]})})]})},jv=`
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
    color: #ffffff; /* Letra blanca pura en el botón activo */
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
    max-width: 280px;
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
    color: #ffffff; /* Letra blanca en el botón de vista previa */
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
`,Uv=()=>{const c=Vr(),{isDark:o}=Wr(),[s,r]=A.useState([]),[d,m]=A.useState(!0),[S,R]=A.useState(null),[b,p]=A.useState(""),[N,x]=A.useState(null),[w,V]=A.useState(3);A.useEffect(()=>{(async()=>{try{m(!0);const Q=await si();r(Q||[])}catch(Q){R(Q.message)}finally{m(!1)}})()},[]),A.useEffect(()=>{const B=Q=>{Q.key==="Escape"&&x(null)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[]);const G=s.filter(B=>B.name.toLowerCase().includes(b.toLowerCase())),L=()=>p(""),H=()=>x(null),X=B=>{B.target===B.currentTarget&&H()};return g.jsxs("div",{className:`search-root ${o?"":"light"}`,children:[g.jsx("style",{children:jv}),g.jsx("div",{className:"sh-header",children:g.jsxs("div",{className:"sh-inner",children:[g.jsxs("h1",{className:"sh-title",children:["Buscar ",g.jsx("span",{children:"Eventos"})]}),g.jsxs("div",{className:"sb-wrap",children:[g.jsx("span",{className:"sb-icon",children:g.jsx(xm,{size:18})}),g.jsx("input",{type:"text",className:"sb-input",placeholder:"Escribe el nombre del evento...",value:b,onChange:B=>p(B.target.value),autoFocus:!0}),b&&g.jsx("button",{className:"sb-clear",onClick:L,"aria-label":"Limpiar búsqueda",children:g.jsx(wn,{size:14})})]}),b&&g.jsxs("div",{className:"sh-toolbar",children:[g.jsxs("p",{className:"sh-count",children:[g.jsx("strong",{children:G.length})," ","resultado",G.length!==1?"s":""]}),G.length>0&&g.jsxs("div",{className:"cols-group",children:[g.jsx("span",{className:"cols-label",children:"Vista"}),[{n:2,Icon:ov},{n:3,Icon:ym},{n:4,Icon:ym}].map(({n:B,Icon:Q})=>g.jsx("button",{className:`col-btn${w===B?" active":""}`,onClick:()=>V(B),"aria-label":`${B} columnas`,title:`${B} columnas`,children:g.jsx(Q,{size:15})},B))]})]})]})}),g.jsx("main",{className:"sm-main",children:d?g.jsxs("div",{className:"se-state",children:[g.jsx("div",{className:"sg-spinner"}),g.jsx("p",{className:"se-sub",children:"Cargando eventos..."})]}):S?g.jsx("div",{className:"se-state",children:g.jsxs("p",{className:"se-title",style:{color:"#ff6b6b"},children:["Error: ",S]})}):b?G.length===0?g.jsxs("div",{className:"se-state",children:[g.jsx("div",{className:"se-icon",children:g.jsx(wn,{size:22})}),g.jsx("p",{className:"se-title",children:"Sin resultados"}),g.jsxs("p",{className:"se-sub",children:['No encontramos nada para "',b,'"']}),g.jsx("button",{className:"se-btn",onClick:L,children:"Limpiar búsqueda"})]}):g.jsx("div",{className:"sg-grid",style:{gridTemplateColumns:`repeat(${w}, minmax(0, 1fr))`},children:G.map(B=>g.jsxs("div",{className:"sc-card",onClick:()=>x(B),children:[g.jsx("img",{src:`https://lh3.googleusercontent.com/d/${B.id}`,alt:B.name,onError:Q=>{Q.target.style.display="none"}}),g.jsx("div",{className:"sc-overlay"}),g.jsx("div",{className:"sc-label",children:g.jsx("h3",{children:B.name.replace(/\.[^/.]+$/,"")||"Imagen"})})]},B.id))}):g.jsxs("div",{className:"se-state",children:[g.jsx("div",{className:"se-icon",children:g.jsx(xm,{size:22})}),g.jsx("p",{className:"se-title",children:"Empieza a buscar"}),g.jsx("p",{className:"se-sub",children:"Escribe el nombre de un evento para ver los resultados"})]})}),N&&g.jsxs("div",{className:"slb-bg",onClick:X,children:[g.jsx("button",{className:"slb-close",onClick:H,"aria-label":"Cerrar",children:g.jsx(wn,{size:20})}),g.jsxs("div",{className:"slb-body",children:[g.jsx("img",{src:`https://lh3.googleusercontent.com/d/${N.id}`,alt:N.name,onClick:B=>B.stopPropagation()}),g.jsxs("div",{className:"slb-info",children:[g.jsx("h2",{children:N.name.replace(/\.[^/.]+$/,"")||"Imagen"}),g.jsxs("div",{className:"slb-actions",children:[g.jsx("button",{className:"slb-btn-primary",onClick:()=>c(`/evento/${N.id}`),children:"Ver detalles"}),g.jsx("button",{className:"slb-btn-sec",onClick:H,children:"Cerrar"})]}),g.jsx("p",{className:"slb-hint",children:"ESC o clic afuera para cerrar"})]})]})]})]})},wv=`
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
`;function Hv(){const{isDark:c}=Wr();return A.useEffect(()=>{document.documentElement.classList.toggle("dark",c)},[c]),g.jsxs("div",{className:`app-root ${c?"":"light"}`,children:[g.jsx("style",{children:wv}),g.jsx(Tv,{}),g.jsx("div",{style:{paddingTop:"64px"},children:g.jsxs(vp,{children:[g.jsx(Un,{path:"/",element:g.jsxs(g.Fragment,{children:[g.jsxs("header",{className:"app-hero",children:[g.jsxs("h1",{children:["Decoraciones ",g.jsx("span",{children:"Andrea"})]}),g.jsx("p",{children:"Transformando tus momentos en recuerdos inolvidables"})]}),g.jsx("main",{className:"app-main",children:g.jsx(Rv,{})})]})}),g.jsx(Un,{path:"/galeria",element:g.jsx("main",{className:"app-main",children:g.jsx(Ov,{})})}),g.jsx(Un,{path:"/buscar",element:g.jsx(Uv,{})}),g.jsx(Un,{path:"/evento/:id",element:g.jsx(Dv,{})})]})}),g.jsx("footer",{className:"app-footer",children:g.jsxs("p",{children:["© 2026 Decoraciones ",g.jsx("span",{children:"Andrea"})]})})]})}bg.createRoot(document.getElementById("root")).render(g.jsx(A.StrictMode,{children:g.jsx(Fp,{children:g.jsx(Gp,{children:g.jsx(Hv,{})})})}));
