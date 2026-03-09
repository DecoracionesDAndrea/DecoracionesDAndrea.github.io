(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const S of h.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&r(S)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();var Dr={exports:{}},Cn={};var tm;function dg(){if(tm)return Cn;tm=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function s(r,d,h){var S=null;if(h!==void 0&&(S=""+h),d.key!==void 0&&(S=""+d.key),"key"in d){h={};for(var _ in d)_!=="key"&&(h[_]=d[_])}else h=d;return d=h.ref,{$$typeof:c,type:r,key:S,ref:d!==void 0?d:null,props:h}}return Cn.Fragment=f,Cn.jsx=s,Cn.jsxs=s,Cn}var lm;function mg(){return lm||(lm=1,Dr.exports=dg()),Dr.exports}var m=mg(),Cr={exports:{}},P={};var am;function hg(){if(am)return P;am=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),S=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function Q(y){return y===null||typeof y!="object"?null:(y=w&&y[w]||y["@@iterator"],typeof y=="function"?y:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,H={};function $(y,U,q){this.props=y,this.context=U,this.refs=H,this.updater=q||G}$.prototype.isReactComponent={},$.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},$.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function Z(){}Z.prototype=$.prototype;function L(y,U,q){this.props=y,this.context=U,this.refs=H,this.updater=q||G}var ue=L.prototype=new Z;ue.constructor=L,Y(ue,$.prototype),ue.isPureReactComponent=!0;var K=Array.isArray;function fe(){}var I={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function Ve(y,U,q){var k=q.ref;return{$$typeof:c,type:y,key:U,ref:k!==void 0?k:null,props:q}}function Dt(y,U){return Ve(y.type,U,y.props)}function gt(y){return typeof y=="object"&&y!==null&&y.$$typeof===c}function Ke(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(q){return U[q]})}var Ct=/\/+/g;function pt(y,U){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):U.toString(36)}function Ce(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(fe,fe):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function j(y,U,q,k,ee){var ae=typeof y;(ae==="undefined"||ae==="boolean")&&(y=null);var he=!1;if(y===null)he=!0;else switch(ae){case"bigint":case"string":case"number":he=!0;break;case"object":switch(y.$$typeof){case c:case f:he=!0;break;case O:return he=y._init,j(he(y._payload),U,q,k,ee)}}if(he)return ee=ee(y),he=k===""?"."+pt(y,0):k,K(ee)?(q="",he!=null&&(q=he.replace(Ct,"$&/")+"/"),j(ee,U,q,"",function(La){return La})):ee!=null&&(gt(ee)&&(ee=Dt(ee,q+(ee.key==null||y&&y.key===ee.key?"":(""+ee.key).replace(Ct,"$&/")+"/")+he)),U.push(ee)),1;he=0;var $e=k===""?".":k+":";if(K(y))for(var Me=0;Me<y.length;Me++)k=y[Me],ae=$e+pt(k,Me),he+=j(k,U,q,ae,ee);else if(Me=Q(y),typeof Me=="function")for(y=Me.call(y),Me=0;!(k=y.next()).done;)k=k.value,ae=$e+pt(k,Me++),he+=j(k,U,q,ae,ee);else if(ae==="object"){if(typeof y.then=="function")return j(Ce(y),U,q,k,ee);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return he}function B(y,U,q){if(y==null)return y;var k=[],ee=0;return j(y,k,"","",function(ae){return U.call(q,ae,ee++)}),k}function F(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(q){(y._status===0||y._status===-1)&&(y._status=1,y._result=q)},function(q){(y._status===0||y._status===-1)&&(y._status=2,y._result=q)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var ve=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},Se={map:B,forEach:function(y,U,q){B(y,function(){U.apply(this,arguments)},q)},count:function(y){var U=0;return B(y,function(){U++}),U},toArray:function(y){return B(y,function(U){return U})||[]},only:function(y){if(!gt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return P.Activity=x,P.Children=Se,P.Component=$,P.Fragment=s,P.Profiler=d,P.PureComponent=L,P.StrictMode=r,P.Suspense=b,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(y){return I.H.useMemoCache(y)}},P.cache=function(y){return function(){return y.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(y,U,q){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var k=Y({},y.props),ee=y.key;if(U!=null)for(ae in U.key!==void 0&&(ee=""+U.key),U)!Oe.call(U,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&U.ref===void 0||(k[ae]=U[ae]);var ae=arguments.length-2;if(ae===1)k.children=q;else if(1<ae){for(var he=Array(ae),$e=0;$e<ae;$e++)he[$e]=arguments[$e+2];k.children=he}return Ve(y.type,ee,k)},P.createContext=function(y){return y={$$typeof:S,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},P.createElement=function(y,U,q){var k,ee={},ae=null;if(U!=null)for(k in U.key!==void 0&&(ae=""+U.key),U)Oe.call(U,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(ee[k]=U[k]);var he=arguments.length-2;if(he===1)ee.children=q;else if(1<he){for(var $e=Array(he),Me=0;Me<he;Me++)$e[Me]=arguments[Me+2];ee.children=$e}if(y&&y.defaultProps)for(k in he=y.defaultProps,he)ee[k]===void 0&&(ee[k]=he[k]);return Ve(y,ae,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(y){return{$$typeof:_,render:y}},P.isValidElement=gt,P.lazy=function(y){return{$$typeof:O,_payload:{_status:-1,_result:y},_init:F}},P.memo=function(y,U){return{$$typeof:p,type:y,compare:U===void 0?null:U}},P.startTransition=function(y){var U=I.T,q={};I.T=q;try{var k=y(),ee=I.S;ee!==null&&ee(q,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(fe,ve)}catch(ae){ve(ae)}finally{U!==null&&q.types!==null&&(U.types=q.types),I.T=U}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(y){return I.H.use(y)},P.useActionState=function(y,U,q){return I.H.useActionState(y,U,q)},P.useCallback=function(y,U){return I.H.useCallback(y,U)},P.useContext=function(y){return I.H.useContext(y)},P.useDebugValue=function(){},P.useDeferredValue=function(y,U){return I.H.useDeferredValue(y,U)},P.useEffect=function(y,U){return I.H.useEffect(y,U)},P.useEffectEvent=function(y){return I.H.useEffectEvent(y)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(y,U,q){return I.H.useImperativeHandle(y,U,q)},P.useInsertionEffect=function(y,U){return I.H.useInsertionEffect(y,U)},P.useLayoutEffect=function(y,U){return I.H.useLayoutEffect(y,U)},P.useMemo=function(y,U){return I.H.useMemo(y,U)},P.useOptimistic=function(y,U){return I.H.useOptimistic(y,U)},P.useReducer=function(y,U,q){return I.H.useReducer(y,U,q)},P.useRef=function(y){return I.H.useRef(y)},P.useState=function(y){return I.H.useState(y)},P.useSyncExternalStore=function(y,U,q){return I.H.useSyncExternalStore(y,U,q)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.4",P}var nm;function Zr(){return nm||(nm=1,Cr.exports=hg()),Cr.exports}var T=Zr(),Ur={exports:{}},Un={},wr={exports:{}},Hr={};var im;function gg(){return im||(im=1,(function(c){function f(j,B){var F=j.length;j.push(B);e:for(;0<F;){var ve=F-1>>>1,Se=j[ve];if(0<d(Se,B))j[ve]=B,j[F]=Se,F=ve;else break e}}function s(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var B=j[0],F=j.pop();if(F!==B){j[0]=F;e:for(var ve=0,Se=j.length,y=Se>>>1;ve<y;){var U=2*(ve+1)-1,q=j[U],k=U+1,ee=j[k];if(0>d(q,F))k<Se&&0>d(ee,q)?(j[ve]=ee,j[k]=F,ve=k):(j[ve]=q,j[U]=F,ve=U);else if(k<Se&&0>d(ee,F))j[ve]=ee,j[k]=F,ve=k;else break e}}return B}function d(j,B){var F=j.sortIndex-B.sortIndex;return F!==0?F:j.id-B.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;c.unstable_now=function(){return h.now()}}else{var S=Date,_=S.now();c.unstable_now=function(){return S.now()-_}}var b=[],p=[],O=1,x=null,w=3,Q=!1,G=!1,Y=!1,H=!1,$=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function ue(j){for(var B=s(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=j)r(p),B.sortIndex=B.expirationTime,f(b,B);else break;B=s(p)}}function K(j){if(Y=!1,ue(j),!G)if(s(b)!==null)G=!0,fe||(fe=!0,Ke());else{var B=s(p);B!==null&&Ce(K,B.startTime-j)}}var fe=!1,I=-1,Oe=5,Ve=-1;function Dt(){return H?!0:!(c.unstable_now()-Ve<Oe)}function gt(){if(H=!1,fe){var j=c.unstable_now();Ve=j;var B=!0;try{e:{G=!1,Y&&(Y=!1,Z(I),I=-1),Q=!0;var F=w;try{t:{for(ue(j),x=s(b);x!==null&&!(x.expirationTime>j&&Dt());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,w=x.priorityLevel;var Se=ve(x.expirationTime<=j);if(j=c.unstable_now(),typeof Se=="function"){x.callback=Se,ue(j),B=!0;break t}x===s(b)&&r(b),ue(j)}else r(b);x=s(b)}if(x!==null)B=!0;else{var y=s(p);y!==null&&Ce(K,y.startTime-j),B=!1}}break e}finally{x=null,w=F,Q=!1}B=void 0}}finally{B?Ke():fe=!1}}}var Ke;if(typeof L=="function")Ke=function(){L(gt)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,pt=Ct.port2;Ct.port1.onmessage=gt,Ke=function(){pt.postMessage(null)}}else Ke=function(){$(gt,0)};function Ce(j,B){I=$(function(){j(c.unstable_now())},B)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(j){j.callback=null},c.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<j?Math.floor(1e3/j):5},c.unstable_getCurrentPriorityLevel=function(){return w},c.unstable_next=function(j){switch(w){case 1:case 2:case 3:var B=3;break;default:B=w}var F=w;w=B;try{return j()}finally{w=F}},c.unstable_requestPaint=function(){H=!0},c.unstable_runWithPriority=function(j,B){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=w;w=j;try{return B()}finally{w=F}},c.unstable_scheduleCallback=function(j,B,F){var ve=c.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,j){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=F+Se,j={id:O++,callback:B,priorityLevel:j,startTime:F,expirationTime:Se,sortIndex:-1},F>ve?(j.sortIndex=F,f(p,j),s(b)===null&&j===s(p)&&(Y?(Z(I),I=-1):Y=!0,Ce(K,F-ve))):(j.sortIndex=Se,f(b,j),G||Q||(G=!0,fe||(fe=!0,Ke()))),j},c.unstable_shouldYield=Dt,c.unstable_wrapCallback=function(j){var B=w;return function(){var F=w;w=B;try{return j.apply(this,arguments)}finally{w=F}}}})(Hr)),Hr}var um;function pg(){return um||(um=1,wr.exports=gg()),wr.exports}var Br={exports:{}},Je={};var cm;function vg(){if(cm)return Je;cm=1;var c=Zr();function f(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)p+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(f(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(b,p,O){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:b,containerInfo:p,implementation:O}}var S=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Je.createPortal=function(b,p){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return h(b,p,null,O)},Je.flushSync=function(b){var p=S.T,O=r.p;try{if(S.T=null,r.p=2,b)return b()}finally{S.T=p,r.p=O,r.d.f()}},Je.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(b,p))},Je.prefetchDNS=function(b){typeof b=="string"&&r.d.D(b)},Je.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var O=p.as,x=_(O,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,Q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;O==="style"?r.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:Q}):O==="script"&&r.d.X(b,{crossOrigin:x,integrity:w,fetchPriority:Q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var O=_(p.as,p.crossOrigin);r.d.M(b,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(b)},Je.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var O=p.as,x=_(O,p.crossOrigin);r.d.L(b,O,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(b,p){if(typeof b=="string")if(p){var O=_(p.as,p.crossOrigin);r.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(b)},Je.requestFormReset=function(b){r.d.r(b)},Je.unstable_batchedUpdates=function(b,p){return b(p)},Je.useFormState=function(b,p,O){return S.H.useFormState(b,p,O)},Je.useFormStatus=function(){return S.H.useHostTransitionStatus()},Je.version="19.2.4",Je}var rm;function yg(){if(rm)return Br.exports;rm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Br.exports=vg(),Br.exports}var om;function bg(){if(om)return Un;om=1;var c=pg(),f=Zr(),s=yg();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return b(n),e;if(i===a)return b(n),t;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,o=n.child;o;){if(o===l){u=!0,l=n,a=i;break}if(o===a){u=!0,a=n,l=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===l){u=!0,l=i,a=n;break}if(o===a){u=!0,a=i,l=n;break}o=o.sibling}if(!u)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=gt&&e[gt]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case $:return"Profiler";case H:return"StrictMode";case K:return"Suspense";case fe:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case L:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var Ce=Array.isArray,j=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],Se=-1;function y(e){return{current:e}}function U(e){0>Se||(e.current=ve[Se],ve[Se]=null,Se--)}function q(e,t){Se++,ve[Se]=e.current,e.current=t}var k=y(null),ee=y(null),ae=y(null),he=y(null);function $e(e,t){switch(q(ae,t),q(ee,e),q(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Td(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Td(t),e=Ad(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(k),q(k,e)}function Me(){U(k),U(ee),U(ae)}function La(e){e.memoizedState!==null&&q(he,e);var t=k.current,l=Ad(t,e.type);t!==l&&(q(ee,e),q(k,l))}function Gn(e){ee.current===e&&(U(k),U(ee)),he.current===e&&(U(he),On._currentValue=F)}var hu,Ir;function jl(e){if(hu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);hu=t&&t[1]||"",Ir=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+Ir}var gu=!1;function pu(e,t){if(!e||gu)return"";gu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(R){var N=R}Reflect.construct(e,[],C)}else{try{C.call()}catch(R){N=R}e.call(C.prototype)}}else{try{throw Error()}catch(R){N=R}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(R){if(R&&N&&typeof R.stack=="string")return[R.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var g=u.split(`
`),A=o.split(`
`);for(n=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(a===g.length||n===A.length)for(a=g.length-1,n=A.length-1;1<=a&&0<=n&&g[a]!==A[n];)n--;for(;1<=a&&0<=n;a--,n--)if(g[a]!==A[n]){if(a!==1||n!==1)do if(a--,n--,0>n||g[a]!==A[n]){var M=`
`+g[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=n);break}}}finally{gu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?jl(l):""}function Qm(e,t){switch(e.tag){case 26:case 27:case 5:return jl(e.type);case 16:return jl("Lazy");case 13:return e.child!==t&&t!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return pu(e.type,!1);case 11:return pu(e.type.render,!1);case 1:return pu(e.type,!0);case 31:return jl("Activity");default:return""}}function Pr(e){try{var t="",l=null;do t+=Qm(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var vu=Object.prototype.hasOwnProperty,yu=c.unstable_scheduleCallback,bu=c.unstable_cancelCallback,Zm=c.unstable_shouldYield,km=c.unstable_requestPaint,it=c.unstable_now,Vm=c.unstable_getCurrentPriorityLevel,eo=c.unstable_ImmediatePriority,to=c.unstable_UserBlockingPriority,Xn=c.unstable_NormalPriority,Km=c.unstable_LowPriority,lo=c.unstable_IdlePriority,Jm=c.log,$m=c.unstable_setDisableYieldValue,Ya=null,ut=null;function ul(e){if(typeof Jm=="function"&&$m(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(Ya,e)}catch{}}var ct=Math.clz32?Math.clz32:Im,Wm=Math.log,Fm=Math.LN2;function Im(e){return e>>>=0,e===0?32:31-(Wm(e)/Fm|0)|0}var Qn=256,Zn=262144,kn=4194304;function Dl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?n=Dl(a):(u&=o,u!==0?n=Dl(u):l||(l=o&~e,l!==0&&(n=Dl(l))))):(o=a&~i,o!==0?n=Dl(o):u!==0?n=Dl(u):l||(l=a&~e,l!==0&&(n=Dl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Ga(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ao(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function xu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Xa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function e0(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,g=e.expirationTimes,A=e.hiddenUpdates;for(l=u&~l;0<l;){var M=31-ct(l),C=1<<M;o[M]=0,g[M]=-1;var N=A[M];if(N!==null)for(A[M]=null,M=0;M<N.length;M++){var R=N[M];R!==null&&(R.lane&=-536870913)}l&=~C}a!==0&&no(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function no(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ct(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function io(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ct(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function uo(e,t){var l=t&-t;return l=(l&42)!==0?1:Su(l),(l&(e.suspendedLanes|t))!==0?0:l}function Su(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Eu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function co(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Jd(e.type))}function ro(e,t){var l=B.p;try{return B.p=e,t()}finally{B.p=l}}var cl=Math.random().toString(36).slice(2),Ge="__reactFiber$"+cl,Ie="__reactProps$"+cl,Fl="__reactContainer$"+cl,zu="__reactEvents$"+cl,t0="__reactListeners$"+cl,l0="__reactHandles$"+cl,oo="__reactResources$"+cl,Qa="__reactMarker$"+cl;function Tu(e){delete e[Ge],delete e[Ie],delete e[zu],delete e[t0],delete e[l0]}function Il(e){var t=e[Ge];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Fl]||l[Ge]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Dd(e);e!==null;){if(l=e[Ge])return l;e=Dd(e)}return t}e=l,l=e.parentNode}return null}function Pl(e){if(e=e[Ge]||e[Fl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Za(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ea(e){var t=e[oo];return t||(t=e[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Qa]=!0}var fo=new Set,so={};function Cl(e,t){ta(e,t),ta(e+"Capture",t)}function ta(e,t){for(so[e]=t,e=0;e<t.length;e++)fo.add(t[e])}var a0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mo={},ho={};function n0(e){return vu.call(ho,e)?!0:vu.call(mo,e)?!1:a0.test(e)?ho[e]=!0:(mo[e]=!0,!1)}function Kn(e,t,l){if(n0(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Jn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Yt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function go(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i0(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Au(e){if(!e._valueTracker){var t=go(e)?"checked":"value";e._valueTracker=i0(e,t,""+e[t])}}function po(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=go(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function $n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var u0=/[\n"\\]/g;function yt(e){return e.replace(u0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nu(e,t,l,a,n,i,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?_u(e,u,vt(t)):l!=null?_u(e,u,vt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vt(o):e.removeAttribute("name")}function vo(e,t,l,a,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Au(e);return}l=l!=null?""+vt(l):"",t=t!=null?""+vt(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Au(e)}function _u(e,t,l){t==="number"&&$n(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function la(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+vt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function yo(e,t,l){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+vt(l):""}function bo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(r(92));if(Ce(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=vt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Au(e)}function aa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var c0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xo(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||c0.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function So(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&xo(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&xo(e,i,t[i])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var r0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(e){return o0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Ou=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ia=null;function Eo(e){var t=Pl(e);if(t&&(e=t.stateNode)){var l=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ie]||null;if(!n)throw Error(r(90));Nu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&po(a)}break e;case"textarea":yo(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&la(e,!!l.multiple,t,!1)}}}var ju=!1;function zo(e,t,l){if(ju)return e(t,l);ju=!0;try{var a=e(t);return a}finally{if(ju=!1,(na!==null||ia!==null)&&(Bi(),na&&(t=na,e=ia,ia=na=null,Eo(t),e)))for(t=0;t<e.length;t++)Eo(e[t])}}function ka(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ie]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(Xt)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Du=!1}var rl=null,Cu=null,Fn=null;function To(){if(Fn)return Fn;var e,t=Cu,l=t.length,a,n="value"in rl?rl.value:rl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Fn=n.slice(e,1<a?1-a:void 0)}function In(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Ao(){return!1}function Pe(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pn:Ao,this.isPropagationStopped=Ao,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=Pe(Ul),Ka=x({},Ul,{view:0,detail:0}),f0=Pe(Ka),Uu,wu,Ja,ti=x({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ja&&(Ja&&e.type==="mousemove"?(Uu=e.screenX-Ja.screenX,wu=e.screenY-Ja.screenY):wu=Uu=0,Ja=e),Uu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),No=Pe(ti),s0=x({},ti,{dataTransfer:0}),d0=Pe(s0),m0=x({},Ka,{relatedTarget:0}),Hu=Pe(m0),h0=x({},Ul,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=Pe(h0),p0=x({},Ul,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=Pe(p0),y0=x({},Ul,{data:0}),_o=Pe(y0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=S0[e])?!!t[e]:!1}function Bu(){return E0}var z0=x({},Ka,{key:function(e){if(e.key){var t=b0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=Pe(z0),A0=x({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=Pe(A0),N0=x({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),_0=Pe(N0),R0=x({},Ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=Pe(R0),M0=x({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Pe(M0),D0=x({},Ul,{newState:0,oldState:0}),C0=Pe(D0),U0=[9,13,27,32],qu=Xt&&"CompositionEvent"in window,$a=null;Xt&&"documentMode"in document&&($a=document.documentMode);var w0=Xt&&"TextEvent"in window&&!$a,Oo=Xt&&(!qu||$a&&8<$a&&11>=$a),Mo=" ",jo=!1;function Do(e,t){switch(e){case"keyup":return U0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Co(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ua=!1;function H0(e,t){switch(e){case"compositionend":return Co(t);case"keypress":return t.which!==32?null:(jo=!0,Mo);case"textInput":return e=t.data,e===Mo&&jo?null:e;default:return null}}function B0(e,t){if(ua)return e==="compositionend"||!qu&&Do(e,t)?(e=To(),Fn=Cu=rl=null,ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oo&&t.locale!=="ko"?null:t.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!q0[e.type]:t==="textarea"}function wo(e,t,l,a){na?ia?ia.push(a):ia=[a]:na=a,t=Zi(t,"onChange"),0<t.length&&(l=new ei("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Wa=null,Fa=null;function L0(e){yd(e,0)}function li(e){var t=Za(e);if(po(t))return e}function Ho(e,t){if(e==="change")return t}var Bo=!1;if(Xt){var Lu;if(Xt){var Yu="oninput"in document;if(!Yu){var qo=document.createElement("div");qo.setAttribute("oninput","return;"),Yu=typeof qo.oninput=="function"}Lu=Yu}else Lu=!1;Bo=Lu&&(!document.documentMode||9<document.documentMode)}function Lo(){Wa&&(Wa.detachEvent("onpropertychange",Yo),Fa=Wa=null)}function Yo(e){if(e.propertyName==="value"&&li(Fa)){var t=[];wo(t,Fa,e,Mu(e)),zo(L0,t)}}function Y0(e,t,l){e==="focusin"?(Lo(),Wa=t,Fa=l,Wa.attachEvent("onpropertychange",Yo)):e==="focusout"&&Lo()}function G0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Fa)}function X0(e,t){if(e==="click")return li(t)}function Q0(e,t){if(e==="input"||e==="change")return li(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Z0;function Ia(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!vu.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function Go(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xo(e,t){var l=Go(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Go(l)}}function Qo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$n(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=$n(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var k0=Xt&&"documentMode"in document&&11>=document.documentMode,ca=null,Xu=null,Pa=null,Qu=!1;function ko(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qu||ca==null||ca!==$n(a)||(a=ca,"selectionStart"in a&&Gu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Pa&&Ia(Pa,a)||(Pa=a,a=Zi(Xu,"onSelect"),0<a.length&&(t=new ei("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ca)))}function wl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ra={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionrun:wl("Transition","TransitionRun"),transitionstart:wl("Transition","TransitionStart"),transitioncancel:wl("Transition","TransitionCancel"),transitionend:wl("Transition","TransitionEnd")},Zu={},Vo={};Xt&&(Vo=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Hl(e){if(Zu[e])return Zu[e];if(!ra[e])return e;var t=ra[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Vo)return Zu[e]=t[l];return e}var Ko=Hl("animationend"),Jo=Hl("animationiteration"),$o=Hl("animationstart"),V0=Hl("transitionrun"),K0=Hl("transitionstart"),J0=Hl("transitioncancel"),Wo=Hl("transitionend"),Fo=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function Rt(e,t){Fo.set(e,t),Cl(t,[e])}var ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],oa=0,Vu=0;function ni(){for(var e=oa,t=Vu=oa=0;t<e;){var l=bt[t];bt[t++]=null;var a=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var i=bt[t];if(bt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Io(l,n,i)}}function ii(e,t,l,a){bt[oa++]=e,bt[oa++]=t,bt[oa++]=l,bt[oa++]=a,Vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ku(e,t,l,a){return ii(e,t,l,a),ui(e)}function Bl(e,t){return ii(e,null,null,t),ui(e)}function Io(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ct(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function ui(e){if(50<En)throw En=0,lr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fa={};function $0(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,l,a){return new $0(e,t,l,a)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var l=e.alternate;return l===null?(l=ot(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Po(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Ju(e)&&(u=1);else if(typeof e=="string")u=eg(e,l,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=ot(31,l,t,n),e.elementType=Ve,e.lanes=i,e;case Y:return ql(l.children,n,i,t);case H:u=8,n|=24;break;case $:return e=ot(12,l,t,n|2),e.elementType=$,e.lanes=i,e;case K:return e=ot(13,l,t,n),e.elementType=K,e.lanes=i,e;case fe:return e=ot(19,l,t,n),e.elementType=fe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:u=10;break e;case Z:u=9;break e;case ue:u=11;break e;case I:u=14;break e;case Oe:u=16,a=null;break e}u=29,l=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=ot(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function ql(e,t,l,a){return e=ot(7,e,a,t),e.lanes=l,e}function $u(e,t,l){return e=ot(6,e,null,t),e.lanes=l,e}function ef(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function Wu(e,t,l){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var tf=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var l=tf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Pr(t)},tf.set(e,t),t)}return{value:e,source:t,stack:Pr(t)}}var sa=[],da=0,ri=null,en=0,St=[],Et=0,ol=null,Ut=1,wt="";function Zt(e,t){sa[da++]=en,sa[da++]=ri,ri=e,en=t}function lf(e,t,l){St[Et++]=Ut,St[Et++]=wt,St[Et++]=ol,ol=e;var a=Ut;e=wt;var n=32-ct(a)-1;a&=~(1<<n),l+=1;var i=32-ct(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Ut=1<<32-ct(t)+n|l<<n|a,wt=i+e}else Ut=1<<i|l<<n|a,wt=e}function Fu(e){e.return!==null&&(Zt(e,1),lf(e,1,0))}function Iu(e){for(;e===ri;)ri=sa[--da],sa[da]=null,en=sa[--da],sa[da]=null;for(;e===ol;)ol=St[--Et],St[Et]=null,wt=St[--Et],St[Et]=null,Ut=St[--Et],St[Et]=null}function af(e,t){St[Et++]=Ut,St[Et++]=wt,St[Et++]=ol,Ut=t.id,wt=t.overflow,ol=e}var Xe=null,ze=null,oe=!1,fl=null,zt=!1,Pu=Error(r(519));function sl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(xt(t,e)),Pu}function nf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ge]=e,t[Ie]=a,l){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(l=0;l<Tn.length;l++)ie(Tn[l],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),vo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),bo(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Ed(t.textContent,l)?(a.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),a.onScroll!=null&&ie("scroll",t),a.onScrollEnd!=null&&ie("scrollend",t),a.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||sl(e,!0)}function uf(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:Xe=Xe.return}}function ma(e){if(e!==Xe)return!1;if(!oe)return uf(e),oe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||vr(e.type,e.memoizedProps)),l=!l),l&&ze&&sl(e),uf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=jd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=jd(e)}else t===27?(t=ze,Al(e.type)?(e=Er,Er=null,ze=e):ze=t):ze=Xe?At(e.stateNode.nextSibling):null;return!0}function Ll(){ze=Xe=null,oe=!1}function ec(){var e=fl;return e!==null&&(at===null?at=e:at.push.apply(at,e),fl=null),e}function tn(e){fl===null?fl=[e]:fl.push(e)}var tc=y(null),Yl=null,kt=null;function dl(e,t,l){q(tc,t._currentValue),t._currentValue=l}function Vt(e){e._currentValue=tc.current,U(tc)}function lc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function ac(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var g=0;g<t.length;g++)if(o.context===t[g]){i.lanes|=l,o=i.alternate,o!==null&&(o.lanes|=l),lc(i.return,l,e),a||(u=null);break e}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(r(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),lc(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ha(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(r(387));if(u=u.memoizedProps,u!==null){var o=n.type;rt(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===he.current){if(u=n.alternate,u===null)throw Error(r(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&ac(t,e,l,a),t.flags|=262144}function oi(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gl(e){Yl=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return cf(Yl,e)}function fi(e,t){return Yl===null&&Gl(e),cf(e,t)}function cf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},kt===null){if(e===null)throw Error(r(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return l}var W0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},F0=c.unstable_scheduleCallback,I0=c.unstable_NormalPriority,Ue={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nc(){return{controller:new W0,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&F0(I0,function(){e.controller.abort()})}var an=null,ic=0,ga=0,pa=null;function P0(e,t){if(an===null){var l=an=[];ic=0,ga=rr(),pa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ic++,t.then(rf,rf),t}function rf(){if(--ic===0&&an!==null){pa!==null&&(pa.status="fulfilled");var e=an;an=null,ga=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function eh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var of=j.S;j.S=function(e,t){Vs=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&P0(e,t),of!==null&&of(e,t)};var Xl=y(null);function uc(){var e=Xl.current;return e!==null?e:Ee.pooledCache}function si(e,t){t===null?q(Xl,Xl.current):q(Xl,t.pool)}function ff(){var e=uc();return e===null?null:{parent:Ue._currentValue,pool:e}}var va=Error(r(460)),cc=Error(r(474)),di=Error(r(542)),mi={then:function(){}};function sf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function df(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Gt,Gt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hf(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hf(e),e}throw Zl=t,va}}function Ql(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Zl=l,va):l}}var Zl=null;function mf(){if(Zl===null)throw Error(r(459));var e=Zl;return Zl=null,e}function hf(e){if(e===va||e===di)throw Error(r(483))}var ya=null,nn=0;function hi(e){var t=nn;return nn+=1,ya===null&&(ya=[]),df(ya,e,t)}function un(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gi(e,t){throw t.$$typeof===w?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gf(e){function t(E,v){if(e){var z=E.deletions;z===null?(E.deletions=[v],E.flags|=16):z.push(v)}}function l(E,v){if(!e)return null;for(;v!==null;)t(E,v),v=v.sibling;return null}function a(E){for(var v=new Map;E!==null;)E.key!==null?v.set(E.key,E):v.set(E.index,E),E=E.sibling;return v}function n(E,v){return E=Qt(E,v),E.index=0,E.sibling=null,E}function i(E,v,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<v?(E.flags|=67108866,v):z):(E.flags|=67108866,v)):(E.flags|=1048576,v)}function u(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function o(E,v,z,D){return v===null||v.tag!==6?(v=$u(z,E.mode,D),v.return=E,v):(v=n(v,z),v.return=E,v)}function g(E,v,z,D){var J=z.type;return J===Y?M(E,v,z.props.children,D,z.key):v!==null&&(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Oe&&Ql(J)===v.type)?(v=n(v,z.props),un(v,z),v.return=E,v):(v=ci(z.type,z.key,z.props,null,E.mode,D),un(v,z),v.return=E,v)}function A(E,v,z,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=Wu(z,E.mode,D),v.return=E,v):(v=n(v,z.children||[]),v.return=E,v)}function M(E,v,z,D,J){return v===null||v.tag!==7?(v=ql(z,E.mode,D,J),v.return=E,v):(v=n(v,z),v.return=E,v)}function C(E,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=$u(""+v,E.mode,z),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Q:return z=ci(v.type,v.key,v.props,null,E.mode,z),un(z,v),z.return=E,z;case G:return v=Wu(v,E.mode,z),v.return=E,v;case Oe:return v=Ql(v),C(E,v,z)}if(Ce(v)||Ke(v))return v=ql(v,E.mode,z,null),v.return=E,v;if(typeof v.then=="function")return C(E,hi(v),z);if(v.$$typeof===L)return C(E,fi(E,v),z);gi(E,v)}return null}function N(E,v,z,D){var J=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return J!==null?null:o(E,v,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:return z.key===J?g(E,v,z,D):null;case G:return z.key===J?A(E,v,z,D):null;case Oe:return z=Ql(z),N(E,v,z,D)}if(Ce(z)||Ke(z))return J!==null?null:M(E,v,z,D,null);if(typeof z.then=="function")return N(E,v,hi(z),D);if(z.$$typeof===L)return N(E,v,fi(E,z),D);gi(E,z)}return null}function R(E,v,z,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return E=E.get(z)||null,o(v,E,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Q:return E=E.get(D.key===null?z:D.key)||null,g(v,E,D,J);case G:return E=E.get(D.key===null?z:D.key)||null,A(v,E,D,J);case Oe:return D=Ql(D),R(E,v,z,D,J)}if(Ce(D)||Ke(D))return E=E.get(z)||null,M(v,E,D,J,null);if(typeof D.then=="function")return R(E,v,z,hi(D),J);if(D.$$typeof===L)return R(E,v,z,fi(v,D),J);gi(v,D)}return null}function X(E,v,z,D){for(var J=null,se=null,V=v,le=v=0,re=null;V!==null&&le<z.length;le++){V.index>le?(re=V,V=null):re=V.sibling;var de=N(E,V,z[le],D);if(de===null){V===null&&(V=re);break}e&&V&&de.alternate===null&&t(E,V),v=i(de,v,le),se===null?J=de:se.sibling=de,se=de,V=re}if(le===z.length)return l(E,V),oe&&Zt(E,le),J;if(V===null){for(;le<z.length;le++)V=C(E,z[le],D),V!==null&&(v=i(V,v,le),se===null?J=V:se.sibling=V,se=V);return oe&&Zt(E,le),J}for(V=a(V);le<z.length;le++)re=R(V,E,le,z[le],D),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?le:re.key),v=i(re,v,le),se===null?J=re:se.sibling=re,se=re);return e&&V.forEach(function(Ml){return t(E,Ml)}),oe&&Zt(E,le),J}function W(E,v,z,D){if(z==null)throw Error(r(151));for(var J=null,se=null,V=v,le=v=0,re=null,de=z.next();V!==null&&!de.done;le++,de=z.next()){V.index>le?(re=V,V=null):re=V.sibling;var Ml=N(E,V,de.value,D);if(Ml===null){V===null&&(V=re);break}e&&V&&Ml.alternate===null&&t(E,V),v=i(Ml,v,le),se===null?J=Ml:se.sibling=Ml,se=Ml,V=re}if(de.done)return l(E,V),oe&&Zt(E,le),J;if(V===null){for(;!de.done;le++,de=z.next())de=C(E,de.value,D),de!==null&&(v=i(de,v,le),se===null?J=de:se.sibling=de,se=de);return oe&&Zt(E,le),J}for(V=a(V);!de.done;le++,de=z.next())de=R(V,E,le,de.value,D),de!==null&&(e&&de.alternate!==null&&V.delete(de.key===null?le:de.key),v=i(de,v,le),se===null?J=de:se.sibling=de,se=de);return e&&V.forEach(function(sg){return t(E,sg)}),oe&&Zt(E,le),J}function xe(E,v,z,D){if(typeof z=="object"&&z!==null&&z.type===Y&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:e:{for(var J=z.key;v!==null;){if(v.key===J){if(J=z.type,J===Y){if(v.tag===7){l(E,v.sibling),D=n(v,z.props.children),D.return=E,E=D;break e}}else if(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Oe&&Ql(J)===v.type){l(E,v.sibling),D=n(v,z.props),un(D,z),D.return=E,E=D;break e}l(E,v);break}else t(E,v);v=v.sibling}z.type===Y?(D=ql(z.props.children,E.mode,D,z.key),D.return=E,E=D):(D=ci(z.type,z.key,z.props,null,E.mode,D),un(D,z),D.return=E,E=D)}return u(E);case G:e:{for(J=z.key;v!==null;){if(v.key===J)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){l(E,v.sibling),D=n(v,z.children||[]),D.return=E,E=D;break e}else{l(E,v);break}else t(E,v);v=v.sibling}D=Wu(z,E.mode,D),D.return=E,E=D}return u(E);case Oe:return z=Ql(z),xe(E,v,z,D)}if(Ce(z))return X(E,v,z,D);if(Ke(z)){if(J=Ke(z),typeof J!="function")throw Error(r(150));return z=J.call(z),W(E,v,z,D)}if(typeof z.then=="function")return xe(E,v,hi(z),D);if(z.$$typeof===L)return xe(E,v,fi(E,z),D);gi(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(l(E,v.sibling),D=n(v,z),D.return=E,E=D):(l(E,v),D=$u(z,E.mode,D),D.return=E,E=D),u(E)):l(E,v)}return function(E,v,z,D){try{nn=0;var J=xe(E,v,z,D);return ya=null,J}catch(V){if(V===va||V===di)throw V;var se=ot(29,V,null,E.mode);return se.lanes=D,se.return=E,se}}}var kl=gf(!0),pf=gf(!1),ml=!1;function rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(me&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=ui(e),Io(e,null,l),t}return ii(e,a,t,l),ui(e)}function cn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,io(e,l)}}function fc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var sc=!1;function rn(){if(sc){var e=pa;if(e!==null)throw e}}function on(e,t,l,a){sc=!1;var n=e.updateQueue;ml=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var g=o,A=g.next;g.next=null,u===null?i=A:u.next=A,u=g;var M=e.alternate;M!==null&&(M=M.updateQueue,o=M.lastBaseUpdate,o!==u&&(o===null?M.firstBaseUpdate=A:o.next=A,M.lastBaseUpdate=g))}if(i!==null){var C=n.baseState;u=0,M=A=g=null,o=i;do{var N=o.lane&-536870913,R=N!==o.lane;if(R?(ce&N)===N:(a&N)===N){N!==0&&N===ga&&(sc=!0),M!==null&&(M=M.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var X=e,W=o;N=t;var xe=l;switch(W.tag){case 1:if(X=W.payload,typeof X=="function"){C=X.call(xe,C,N);break e}C=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=W.payload,N=typeof X=="function"?X.call(xe,C,N):X,N==null)break e;C=x({},C,N);break e;case 2:ml=!0}}N=o.callback,N!==null&&(e.flags|=64,R&&(e.flags|=8192),R=n.callbacks,R===null?n.callbacks=[N]:R.push(N))}else R={lane:N,tag:o.tag,payload:o.payload,callback:o.callback,next:null},M===null?(A=M=R,g=C):M=M.next=R,u|=N;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;R=o,o=R.next,R.next=null,n.lastBaseUpdate=R,n.shared.pending=null}}while(!0);M===null&&(g=C),n.baseState=g,n.firstBaseUpdate=A,n.lastBaseUpdate=M,i===null&&(n.shared.lanes=0),xl|=u,e.lanes=u,e.memoizedState=C}}function vf(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function yf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)vf(l[e],t)}var ba=y(null),pi=y(0);function bf(e,t){e=tl,q(pi,e),q(ba,t),tl=e|t.baseLanes}function dc(){q(pi,tl),q(ba,ba.current)}function mc(){tl=pi.current,U(ba),U(pi)}var ft=y(null),Tt=null;function pl(e){var t=e.alternate;q(je,je.current&1),q(ft,e),Tt===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(Tt=e)}function hc(e){q(je,je.current),q(ft,e),Tt===null&&(Tt=e)}function xf(e){e.tag===22?(q(je,je.current),q(ft,e),Tt===null&&(Tt=e)):vl()}function vl(){q(je,je.current),q(ft,ft.current)}function st(e){U(ft),Tt===e&&(Tt=null),U(je)}var je=y(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||xr(l)||Sr(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kt=0,te=null,ye=null,we=null,yi=!1,xa=!1,Vl=!1,bi=0,fn=0,Sa=null,th=0;function _e(){throw Error(r(321))}function gc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!rt(e[l],t[l]))return!1;return!0}function pc(e,t,l,a,n,i){return Kt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?as:jc,Vl=!1,i=l(a,n),Vl=!1,xa&&(i=Ef(t,l,a,n)),Sf(e),i}function Sf(e){j.H=mn;var t=ye!==null&&ye.next!==null;if(Kt=0,we=ye=te=null,yi=!1,fn=0,Sa=null,t)throw Error(r(300));e===null||He||(e=e.dependencies,e!==null&&oi(e)&&(He=!0))}function Ef(e,t,l,a){te=e;var n=0;do{if(xa&&(Sa=null),fn=0,xa=!1,25<=n)throw Error(r(301));if(n+=1,we=ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}j.H=ns,i=t(l,a)}while(xa);return i}function lh(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?sn(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(te.flags|=1024),t}function vc(){var e=bi!==0;return bi=0,e}function yc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function bc(e){if(yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yi=!1}Kt=0,we=ye=te=null,xa=!1,fn=bi=0,Sa=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?te.memoizedState=we=e:we=we.next=e,we}function De(){if(ye===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=we===null?te.memoizedState:we.next;if(t!==null)we=t,ye=e;else{if(e===null)throw te.alternate===null?Error(r(467)):Error(r(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?te.memoizedState=we=e:we=we.next=e}return we}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(e){var t=fn;return fn+=1,Sa===null&&(Sa=[]),e=df(Sa,e,t),t=te,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?as:jc),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sn(e);if(e.$$typeof===L)return Qe(e)}throw Error(r(438,String(e)))}function xc(e){var t=null,l=te.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=xi(),te.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Dt;return t.index++,l}function Jt(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=De();return Sc(t,ye,e)}function Sc(e,t,l){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=u=null,g=null,A=t,M=!1;do{var C=A.lane&-536870913;if(C!==A.lane?(ce&C)===C:(Kt&C)===C){var N=A.revertLane;if(N===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),C===ga&&(M=!0);else if((Kt&N)===N){A=A.next,N===ga&&(M=!0);continue}else C={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(o=g=C,u=i):g=g.next=C,te.lanes|=N,xl|=N;C=A.action,Vl&&l(i,C),i=A.hasEagerState?A.eagerState:l(i,C)}else N={lane:C,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(o=g=N,u=i):g=g.next=N,te.lanes|=C,xl|=C;A=A.next}while(A!==null&&A!==t);if(g===null?u=i:g.next=o,!rt(i,e.memoizedState)&&(He=!0,M&&(l=pa,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=g,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ec(e){var t=De(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);rt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function zf(e,t,l){var a=te,n=De(),i=oe;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=t();var u=!rt((ye||n).memoizedState,l);if(u&&(n.memoizedState=l,He=!0),n=n.queue,Ac(Nf.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||we!==null&&we.memoizedState.tag&1){if(a.flags|=2048,Ea(9,{destroy:void 0},Af.bind(null,a,n,l,t),null),Ee===null)throw Error(r(349));i||(Kt&127)!==0||Tf(a,t,l)}return l}function Tf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=te.updateQueue,t===null?(t=xi(),te.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Af(e,t,l,a){t.value=l,t.getSnapshot=a,_f(t)&&Rf(e)}function Nf(e,t,l){return l(function(){_f(t)&&Rf(e)})}function _f(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!rt(e,l)}catch{return!0}}function Rf(e){var t=Bl(e,2);t!==null&&nt(t,e,2)}function zc(e){var t=We();if(typeof e=="function"){var l=e;if(e=l(),Vl){ul(!0);try{l()}finally{ul(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function Of(e,t,l,a){return e.baseState=l,Sc(e,ye,typeof a=="function"?a:Jt)}function ah(e,t,l,a,n){if(Ai(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};j.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Mf(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Mf(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=j.T,u={};j.T=u;try{var o=l(n,a),g=j.S;g!==null&&g(u,o),jf(e,t,o)}catch(A){Tc(e,t,A)}finally{i!==null&&u.types!==null&&(i.types=u.types),j.T=i}}else try{i=l(n,a),jf(e,t,i)}catch(A){Tc(e,t,A)}}function jf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Df(e,t,a)},function(a){return Tc(e,t,a)}):Df(e,t,l)}function Df(e,t,l){t.status="fulfilled",t.value=l,Cf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Mf(e,l)))}function Tc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Cf(t),t=t.next;while(t!==a)}e.action=null}function Cf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uf(e,t){return t}function wf(e,t){if(oe){var l=Ee.formState;if(l!==null){e:{var a=te;if(oe){if(ze){t:{for(var n=ze,i=zt;n.nodeType!==8;){if(!i){n=null;break t}if(n=At(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ze=At(n.nextSibling),a=n.data==="F!";break e}}sl(a)}a=!1}a&&(t=l[0])}}return l=We(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uf,lastRenderedState:t},l.queue=a,l=es.bind(null,te,a),a.dispatch=l,a=zc(!1),i=Mc.bind(null,te,!1,a.queue),a=We(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=ah.bind(null,te,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Hf(e){var t=De();return Bf(t,ye,e)}function Bf(e,t,l){if(t=Sc(e,t,Uf)[0],e=Ei(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=sn(t)}catch(u){throw u===va?di:u}else a=t;t=De();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(te.flags|=2048,Ea(9,{destroy:void 0},nh.bind(null,n,l),null)),[a,i,e]}function nh(e,t){e.action=t}function qf(e){var t=De(),l=ye;if(l!==null)return Bf(t,l,e);De(),t=t.memoizedState,l=De();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ea(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=te.updateQueue,t===null&&(t=xi(),te.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Lf(){return De().memoizedState}function zi(e,t,l,a){var n=We();te.flags|=e,n.memoizedState=Ea(1|t,{destroy:void 0},l,a===void 0?null:a)}function Ti(e,t,l,a){var n=De();a=a===void 0?null:a;var i=n.memoizedState.inst;ye!==null&&a!==null&&gc(a,ye.memoizedState.deps)?n.memoizedState=Ea(t,i,l,a):(te.flags|=e,n.memoizedState=Ea(1|t,i,l,a))}function Yf(e,t){zi(8390656,8,e,t)}function Ac(e,t){Ti(2048,8,e,t)}function ih(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=xi(),te.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Gf(e){var t=De().memoizedState;return ih({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Xf(e,t){return Ti(4,2,e,t)}function Qf(e,t){return Ti(4,4,e,t)}function Zf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,l){l=l!=null?l.concat([e]):null,Ti(4,4,Zf.bind(null,t,e),l)}function Nc(){}function Vf(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&gc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Kf(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&gc(t,a[1]))return a[0];if(a=e(),Vl){ul(!0);try{e()}finally{ul(!1)}}return l.memoizedState=[a,t],a}function _c(e,t,l){return l===void 0||(Kt&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Js(),te.lanes|=e,xl|=e,l)}function Jf(e,t,l,a){return rt(l,t)?l:ba.current!==null?(e=_c(e,l,a),rt(e,t)||(He=!0),e):(Kt&42)===0||(Kt&1073741824)!==0&&(ce&261930)===0?(He=!0,e.memoizedState=l):(e=Js(),te.lanes|=e,xl|=e,t)}function $f(e,t,l,a,n){var i=B.p;B.p=i!==0&&8>i?i:8;var u=j.T,o={};j.T=o,Mc(e,!1,t,l);try{var g=n(),A=j.S;if(A!==null&&A(o,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=eh(g,a);dn(e,t,M,ht(e))}else dn(e,t,a,ht(e))}catch(C){dn(e,t,{then:function(){},status:"rejected",reason:C},ht())}finally{B.p=i,u!==null&&o.types!==null&&(u.types=o.types),j.T=u}}function uh(){}function Rc(e,t,l,a){if(e.tag!==5)throw Error(r(476));var n=Wf(e).queue;$f(e,n,t,F,l===null?uh:function(){return Ff(e),l(a)})}function Wf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:F},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ff(e){var t=Wf(e);t.next===null&&(t=e.alternate.memoizedState),dn(e,t.next.queue,{},ht())}function Oc(){return Qe(On)}function If(){return De().memoizedState}function Pf(){return De().memoizedState}function ch(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ht();e=hl(l);var a=gl(t,e,l);a!==null&&(nt(a,t,l),cn(a,t,l)),t={cache:nc()},e.payload=t;return}t=t.return}}function rh(e,t,l){var a=ht();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ai(e)?ts(t,l):(l=Ku(e,t,l,a),l!==null&&(nt(l,e,a),ls(l,t,a)))}function es(e,t,l){var a=ht();dn(e,t,l,a)}function dn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ai(e))ts(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,l);if(n.hasEagerState=!0,n.eagerState=o,rt(o,u))return ii(e,t,n,0),Ee===null&&ni(),!1}catch{}if(l=Ku(e,t,n,a),l!==null)return nt(l,e,a),ls(l,t,a),!0}return!1}function Mc(e,t,l,a){if(a={lane:2,revertLane:rr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ai(e)){if(t)throw Error(r(479))}else t=Ku(e,l,a,2),t!==null&&nt(t,e,2)}function Ai(e){var t=e.alternate;return e===te||t!==null&&t===te}function ts(e,t){xa=yi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function ls(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,io(e,l)}}var mn={readContext:Qe,use:Si,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e,useHostTransitionStatus:_e,useFormState:_e,useActionState:_e,useOptimistic:_e,useMemoCache:_e,useCacheRefresh:_e};mn.useEffectEvent=_e;var as={readContext:Qe,use:Si,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Yf,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,zi(4194308,4,Zf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var l=We();t=t===void 0?null:t;var a=e();if(Vl){ul(!0);try{e()}finally{ul(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=We();if(l!==void 0){var n=l(t);if(Vl){ul(!0);try{l(t)}finally{ul(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=rh.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=zc(e);var t=e.queue,l=es.bind(null,te,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Nc,useDeferredValue:function(e,t){var l=We();return _c(l,e,t)},useTransition:function(){var e=zc(!1);return e=$f.bind(null,te,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=te,n=We();if(oe){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Ee===null)throw Error(r(349));(ce&127)!==0||Tf(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Yf(Nf.bind(null,a,i,e),[e]),a.flags|=2048,Ea(9,{destroy:void 0},Af.bind(null,a,i,l,t),null),l},useId:function(){var e=We(),t=Ee.identifierPrefix;if(oe){var l=wt,a=Ut;l=(a&~(1<<32-ct(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=bi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=th++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oc,useFormState:wf,useActionState:wf,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Mc.bind(null,te,!0,l),l.dispatch=t,[e,t]},useMemoCache:xc,useCacheRefresh:function(){return We().memoizedState=ch.bind(null,te)},useEffectEvent:function(e){var t=We(),l={impl:e};return t.memoizedState=l,function(){if((me&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},jc={readContext:Qe,use:Si,useCallback:Vf,useContext:Qe,useEffect:Ac,useImperativeHandle:kf,useInsertionEffect:Xf,useLayoutEffect:Qf,useMemo:Kf,useReducer:Ei,useRef:Lf,useState:function(){return Ei(Jt)},useDebugValue:Nc,useDeferredValue:function(e,t){var l=De();return Jf(l,ye.memoizedState,e,t)},useTransition:function(){var e=Ei(Jt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:zf,useId:If,useHostTransitionStatus:Oc,useFormState:Hf,useActionState:Hf,useOptimistic:function(e,t){var l=De();return Of(l,ye,e,t)},useMemoCache:xc,useCacheRefresh:Pf};jc.useEffectEvent=Gf;var ns={readContext:Qe,use:Si,useCallback:Vf,useContext:Qe,useEffect:Ac,useImperativeHandle:kf,useInsertionEffect:Xf,useLayoutEffect:Qf,useMemo:Kf,useReducer:Ec,useRef:Lf,useState:function(){return Ec(Jt)},useDebugValue:Nc,useDeferredValue:function(e,t){var l=De();return ye===null?_c(l,e,t):Jf(l,ye.memoizedState,e,t)},useTransition:function(){var e=Ec(Jt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:zf,useId:If,useHostTransitionStatus:Oc,useFormState:qf,useActionState:qf,useOptimistic:function(e,t){var l=De();return ye!==null?Of(l,ye,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:xc,useCacheRefresh:Pf};ns.useEffectEvent=Gf;function Dc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:x({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Cc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ht(),n=hl(a);n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(nt(t,e,a),cn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ht(),n=hl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(nt(t,e,a),cn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ht(),a=hl(l);a.tag=2,t!=null&&(a.callback=t),t=gl(e,a,l),t!==null&&(nt(t,e,l),cn(t,e,l))}};function is(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ia(l,a)||!Ia(n,i):!0}function us(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Cc.enqueueReplaceState(t,t.state,null)}function Kl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=x({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function cs(e){ai(e)}function rs(e){console.error(e)}function os(e){ai(e)}function Ni(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function fs(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Uc(e,t,l){return l=hl(l),l.tag=3,l.payload={element:null},l.callback=function(){Ni(e,t)},l}function ss(e){return e=hl(e),e.tag=3,e}function ds(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){fs(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){fs(t,l,a),typeof n!="function"&&(Sl===null?Sl=new Set([this]):Sl.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function oh(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ha(t,l,n,!0),l=ft.current,l!==null){switch(l.tag){case 31:case 13:return Tt===null?qi():l.alternate===null&&Re===0&&(Re=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===mi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),ir(e,a,n)),!1;case 22:return l.flags|=65536,a===mi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),ir(e,a,n)),!1}throw Error(r(435,l.tag))}return ir(e,a,n),qi(),!1}if(oe)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Pu&&(e=Error(r(422),{cause:a}),tn(xt(e,l)))):(a!==Pu&&(t=Error(r(423),{cause:a}),tn(xt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=xt(a,l),n=Uc(e.stateNode,a,n),fc(e,n),Re!==4&&(Re=2)),!1;var i=Error(r(520),{cause:a});if(i=xt(i,l),Sn===null?Sn=[i]:Sn.push(i),Re!==4&&(Re=2),t===null)return!0;a=xt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Uc(l.stateNode,a,e),fc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sl===null||!Sl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=ss(n),ds(n,e,l,a),fc(l,n),!1}l=l.return}while(l!==null);return!1}var wc=Error(r(461)),He=!1;function Ze(e,t,l,a){t.child=e===null?pf(t,null,l,a):kl(t,e.child,l,a)}function ms(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var o in a)o!=="ref"&&(u[o]=a[o])}else u=a;return Gl(t),a=pc(e,t,l,u,i,n),o=vc(),e!==null&&!He?(yc(e,t,n),$t(e,t,n)):(oe&&o&&Fu(t),t.flags|=1,Ze(e,t,a,n),t.child)}function hs(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Ju(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,gs(e,t,i,a,n)):(e=ci(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Qc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ia,l(u,a)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=Qt(i,a),e.ref=t.ref,e.return=t,t.child=e}function gs(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ia(i,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=i,Qc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,$t(e,t,n)}return Hc(e,t,l,a,n)}function ps(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return vs(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&si(t,i!==null?i.cachePool:null),i!==null?bf(t,i):dc(),xf(t);else return a=t.lanes=536870912,vs(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(si(t,i.cachePool),bf(t,i),vl(),t.memoizedState=null):(e!==null&&si(t,null),dc(),vl());return Ze(e,t,n,l),t.child}function hn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vs(e,t,l,a,n){var i=uc();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&si(t,null),dc(),xf(t),e!==null&&ha(e,t,a,!0),t.childLanes=n,null}function _i(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ys(e,t,l){return kl(t,e.child,null,l),e=_i(t,t.pendingProps),e.flags|=2,st(t),t.memoizedState=null,e}function fh(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(a.mode==="hidden")return e=_i(t,a),t.lanes=536870912,hn(null,e);if(hc(t),(e=ze)?(e=Md(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ol!==null?{id:Ut,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=ef(e),l.return=t,t.child=l,Xe=t,ze=null)):e=null,e===null)throw sl(t);return t.lanes=536870912,null}return _i(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(hc(t),n)if(t.flags&256)t.flags&=-257,t=ys(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(He||ha(e,t,l,!1),n=(l&e.childLanes)!==0,He||n){if(a=Ee,a!==null&&(u=uo(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Bl(e,u),nt(a,e,u),wc;qi(),t=ys(e,t,l)}else e=i.treeContext,ze=At(u.nextSibling),Xe=t,oe=!0,fl=null,zt=!1,e!==null&&af(t,e),t=_i(t,a),t.flags|=4096;return t}return e=Qt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ri(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Hc(e,t,l,a,n){return Gl(t),l=pc(e,t,l,a,void 0,n),a=vc(),e!==null&&!He?(yc(e,t,n),$t(e,t,n)):(oe&&a&&Fu(t),t.flags|=1,Ze(e,t,l,n),t.child)}function bs(e,t,l,a,n,i){return Gl(t),t.updateQueue=null,l=Ef(t,a,l,n),Sf(e),a=vc(),e!==null&&!He?(yc(e,t,i),$t(e,t,i)):(oe&&a&&Fu(t),t.flags|=1,Ze(e,t,l,i),t.child)}function xs(e,t,l,a,n){if(Gl(t),t.stateNode===null){var i=fa,u=l.contextType;typeof u=="object"&&u!==null&&(i=Qe(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},rc(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Qe(u):fa,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Dc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Cc.enqueueReplaceState(i,i.state,null),on(t,a,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,g=Kl(l,o);i.props=g;var A=i.context,M=l.contextType;u=fa,typeof M=="object"&&M!==null&&(u=Qe(M));var C=l.getDerivedStateFromProps;M=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||A!==u)&&us(t,i,a,u),ml=!1;var N=t.memoizedState;i.state=N,on(t,a,i,n),rn(),A=t.memoizedState,o||N!==A||ml?(typeof C=="function"&&(Dc(t,l,C,a),A=t.memoizedState),(g=ml||is(t,l,g,a,N,A,u))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=u,a=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,oc(e,t),u=t.memoizedProps,M=Kl(l,u),i.props=M,C=t.pendingProps,N=i.context,A=l.contextType,g=fa,typeof A=="object"&&A!==null&&(g=Qe(A)),o=l.getDerivedStateFromProps,(A=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==C||N!==g)&&us(t,i,a,g),ml=!1,N=t.memoizedState,i.state=N,on(t,a,i,n),rn();var R=t.memoizedState;u!==C||N!==R||ml||e!==null&&e.dependencies!==null&&oi(e.dependencies)?(typeof o=="function"&&(Dc(t,l,o,a),R=t.memoizedState),(M=ml||is(t,l,M,a,N,R,g)||e!==null&&e.dependencies!==null&&oi(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,R,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,R,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),i.props=a,i.state=R,i.context=g,a=M):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ri(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=kl(t,e.child,null,n),t.child=kl(t,null,l,n)):Ze(e,t,l,n),t.memoizedState=i.state,e=t.child):e=$t(e,t,n),e}function Ss(e,t,l,a){return Ll(),t.flags|=256,Ze(e,t,l,a),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(e){return{baseLanes:e,cachePool:ff()}}function Lc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=mt),e}function Es(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?pl(t):vl(),(e=ze)?(e=Md(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ol!==null?{id:Ut,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=ef(e),l.return=t,t.child=l,Xe=t,ze=null)):e=null,e===null)throw sl(t);return Sr(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,n?(vl(),n=t.mode,o=Oi({mode:"hidden",children:o},n),a=ql(a,n,l,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=qc(l),a.childLanes=Lc(e,u,l),t.memoizedState=Bc,hn(null,a)):(pl(t),Yc(t,o))}var g=e.memoizedState;if(g!==null&&(o=g.dehydrated,o!==null)){if(i)t.flags&256?(pl(t),t.flags&=-257,t=Gc(e,t,l)):t.memoizedState!==null?(vl(),t.child=e.child,t.flags|=128,t=null):(vl(),o=a.fallback,n=t.mode,a=Oi({mode:"visible",children:a.children},n),o=ql(o,n,l,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,kl(t,e.child,null,l),a=t.child,a.memoizedState=qc(l),a.childLanes=Lc(e,u,l),t.memoizedState=Bc,t=hn(null,a));else if(pl(t),Sr(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var A=u.dgst;u=A,a=Error(r(419)),a.stack="",a.digest=u,tn({value:a,source:null,stack:null}),t=Gc(e,t,l)}else if(He||ha(e,t,l,!1),u=(l&e.childLanes)!==0,He||u){if(u=Ee,u!==null&&(a=uo(u,l),a!==0&&a!==g.retryLane))throw g.retryLane=a,Bl(e,a),nt(u,e,a),wc;xr(o)||qi(),t=Gc(e,t,l)}else xr(o)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,ze=At(o.nextSibling),Xe=t,oe=!0,fl=null,zt=!1,e!==null&&af(t,e),t=Yc(t,a.children),t.flags|=4096);return t}return n?(vl(),o=a.fallback,n=t.mode,g=e.child,A=g.sibling,a=Qt(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,A!==null?o=Qt(A,o):(o=ql(o,n,l,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,hn(null,a),a=t.child,o=e.child.memoizedState,o===null?o=qc(l):(n=o.cachePool,n!==null?(g=Ue._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=ff(),o={baseLanes:o.baseLanes|l,cachePool:n}),a.memoizedState=o,a.childLanes=Lc(e,u,l),t.memoizedState=Bc,hn(e.child,a)):(pl(t),l=e.child,e=l.sibling,l=Qt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Yc(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function Gc(e,t,l){return kl(t,e.child,null,l),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zs(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),lc(e.return,t,l)}function Xc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Ts(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=je.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,q(je,u),Ze(e,t,a,l),a=oe?en:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zs(e,l,t);else if(e.tag===19)zs(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&vi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Xc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Xc(t,!0,l,null,i,a);break;case"together":Xc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function $t(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),xl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ha(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Qt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Qt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Qc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&oi(e)))}function sh(e,t,l){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),dl(t,Ue,e.memoizedState.cache),Ll();break;case 27:case 5:La(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:dl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(pl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Es(e,t,l):(pl(t),e=$t(e,t,l),e!==null?e.sibling:null);pl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ha(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Ts(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(je,je.current),a)break;return null;case 22:return t.lanes=0,ps(e,t,l,t.pendingProps);case 24:dl(t,Ue,e.memoizedState.cache)}return $t(e,t,l)}function As(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Qc(e,l)&&(t.flags&128)===0)return He=!1,sh(e,t,l);He=(e.flags&131072)!==0}else He=!1,oe&&(t.flags&1048576)!==0&&lf(t,en,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ql(t.elementType),t.type=e,typeof e=="function")Ju(e)?(a=Kl(e,a),t.tag=1,t=xs(null,t,e,a,l)):(t.tag=0,t=Hc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===ue){t.tag=11,t=ms(null,t,e,a,l);break e}else if(n===I){t.tag=14,t=hs(null,t,e,a,l);break e}}throw t=pt(e)||e,Error(r(306,t,""))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Kl(a,t.pendingProps),xs(e,t,a,n,l);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,oc(e,t),on(t,a,null,l);var u=t.memoizedState;if(a=u.cache,dl(t,Ue,a),a!==i.cache&&ac(t,[Ue],l,!0),rn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ss(e,t,a,l);break e}else if(a!==n){n=xt(Error(r(424)),t),tn(n),t=Ss(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=At(e.firstChild),Xe=t,oe=!0,fl=null,zt=!0,l=pf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ll(),a===n){t=$t(e,t,l);break e}Ze(e,t,a,l)}t=t.child}return t;case 26:return Ri(e,t),e===null?(l=Hd(t.type,null,t.pendingProps,null))?t.memoizedState=l:oe||(l=t.type,e=t.pendingProps,a=ki(ae.current).createElement(l),a[Ge]=t,a[Ie]=e,ke(a,l,e),Le(a),t.stateNode=a):t.memoizedState=Hd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return La(t),e===null&&oe&&(a=t.stateNode=Cd(t.type,t.pendingProps,ae.current),Xe=t,zt=!0,n=ze,Al(t.type)?(Er=n,ze=At(a.firstChild)):ze=n),Ze(e,t,t.pendingProps.children,l),Ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=a=ze)&&(a=Gh(a,t.type,t.pendingProps,zt),a!==null?(t.stateNode=a,Xe=t,ze=At(a.firstChild),zt=!1,n=!0):n=!1),n||sl(t)),La(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,vr(n,i)?a=null:u!==null&&vr(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=pc(e,t,lh,null,null,l),On._currentValue=n),Ri(e,t),Ze(e,t,a,l),t.child;case 6:return e===null&&oe&&((e=l=ze)&&(l=Xh(l,t.pendingProps,zt),l!==null?(t.stateNode=l,Xe=t,ze=null,e=!0):e=!1),e||sl(t)),null;case 13:return Es(e,t,l);case 4:return $e(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=kl(t,null,a,l):Ze(e,t,a,l),t.child;case 11:return ms(e,t,t.type,t.pendingProps,l);case 7:return Ze(e,t,t.pendingProps,l),t.child;case 8:return Ze(e,t,t.pendingProps.children,l),t.child;case 12:return Ze(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,dl(t,t.type,a.value),Ze(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Gl(t),n=Qe(n),a=a(n),t.flags|=1,Ze(e,t,a,l),t.child;case 14:return hs(e,t,t.type,t.pendingProps,l);case 15:return gs(e,t,t.type,t.pendingProps,l);case 19:return Ts(e,t,l);case 31:return fh(e,t,l);case 22:return ps(e,t,l,t.pendingProps);case 24:return Gl(t),a=Qe(Ue),e===null?(n=uc(),n===null&&(n=Ee,i=nc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},rc(t),dl(t,Ue,n)):((e.lanes&l)!==0&&(oc(e,t),on(t,null,null,l),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),dl(t,Ue,a)):(a=i.cache,dl(t,Ue,a),a!==n.cache&&ac(t,[Ue],l,!0))),Ze(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Wt(e){e.flags|=4}function Zc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Is())e.flags|=8192;else throw Zl=mi,cc}else e.flags&=-16777217}function Ns(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gd(t))if(Is())e.flags|=8192;else throw Zl=mi,cc}function Mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ao():536870912,e.lanes|=t,Na|=t)}function gn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function dh(e,t,l){var a=t.pendingProps;switch(Iu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Ue),Me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ma(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ec())),Te(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Wt(t),i!==null?(Te(t),Ns(t,i)):(Te(t),Zc(t,n,null,a,l))):i?i!==e.memoizedState?(Wt(t),Te(t),Ns(t,i)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Wt(t),Te(t),Zc(t,n,e,a,l)),null;case 27:if(Gn(t),l=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Te(t),null}e=k.current,ma(t)?nf(t):(e=Cd(n,a,l),t.stateNode=e,Wt(t))}return Te(t),null;case 5:if(Gn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Te(t),null}if(i=k.current,ma(t))nf(t);else{var u=ki(ae.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Ge]=t,i[Ie]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(ke(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Wt(t)}}return Te(t),Zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=ae.current,ma(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ed(e.nodeValue,l)),e||sl(t,!0)}else e=ki(e).createTextNode(a),e[Ge]=t,t.stateNode=e}return Te(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ma(t),l!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else l=ec(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Te(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ma(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),n=!1}else n=ec(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Mi(t,t.updateQueue),Te(t),null);case 4:return Me(),e===null&&dr(t.stateNode.containerInfo),Te(t),null;case 10:return Vt(t.type),Te(t),null;case 19:if(U(je),a=t.memoizedState,a===null)return Te(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)gn(a,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=vi(e),i!==null){for(t.flags|=128,gn(a,!1),e=i.updateQueue,t.updateQueue=e,Mi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Po(l,e),l=l.sibling;return q(je,je.current&1|2),oe&&Zt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&it()>wi&&(t.flags|=128,n=!0,gn(a,!1),t.lanes=4194304)}else{if(!n)if(e=vi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Mi(t,e),gn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!oe)return Te(t),null}else 2*it()-a.renderingStartTime>wi&&l!==536870912&&(t.flags|=128,n=!0,gn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=it(),e.sibling=null,l=je.current,q(je,n?l&1|2:l&1),oe&&Zt(t,a.treeForkCount),e):(Te(t),null);case 22:case 23:return st(t),mc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),l=t.updateQueue,l!==null&&Mi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&U(Xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vt(Ue),Te(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function mh(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Ue),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gn(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(r(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(st(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(je),null;case 4:return Me(),null;case 10:return Vt(t.type),null;case 22:case 23:return st(t),mc(),e!==null&&U(Xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Ue),null;case 25:return null;default:return null}}function _s(e,t){switch(Iu(t),t.tag){case 3:Vt(Ue),Me();break;case 26:case 27:case 5:Gn(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:U(je);break;case 10:Vt(t.type);break;case 22:case 23:st(t),mc(),e!==null&&U(Xl);break;case 24:Vt(Ue)}}function pn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(o){pe(t,t.return,o)}}function yl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var g=l,A=o;try{A()}catch(M){pe(n,g,M)}}}a=a.next}while(a!==i)}}catch(M){pe(t,t.return,M)}}function Rs(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{yf(t,l)}catch(a){pe(e,e.return,a)}}}function Os(e,t,l){l.props=Kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){pe(e,t,a)}}function vn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){pe(e,t,n)}}function Ht(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){pe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){pe(e,t,n)}else l.current=null}function Ms(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){pe(e,e.return,n)}}function kc(e,t,l){try{var a=e.stateNode;wh(a,e.type,l,t),a[Ie]=t}catch(n){pe(e,e.return,n)}}function js(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Al(e.type)||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||js(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Al(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Gt));else if(a!==4&&(a===27&&Al(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,l),e=e.sibling;e!==null;)Kc(e,t,l),e=e.sibling}function ji(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Al(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(ji(e,t,l),e=e.sibling;e!==null;)ji(e,t,l),e=e.sibling}function Ds(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ke(t,a,l),t[Ge]=e,t[Ie]=l}catch(i){pe(e,e.return,i)}}var Ft=!1,Be=!1,Jc=!1,Cs=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function hh(e,t){if(e=e.containerInfo,gr=Ii,e=Zo(e),Gu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,o=-1,g=-1,A=0,M=0,C=e,N=null;t:for(;;){for(var R;C!==l||n!==0&&C.nodeType!==3||(o=u+n),C!==i||a!==0&&C.nodeType!==3||(g=u+a),C.nodeType===3&&(u+=C.nodeValue.length),(R=C.firstChild)!==null;)N=C,C=R;for(;;){if(C===e)break t;if(N===l&&++A===n&&(o=u),N===i&&++M===a&&(g=u),(R=C.nextSibling)!==null)break;C=N,N=C.parentNode}C=R}l=o===-1||g===-1?null:{start:o,end:g}}else l=null}l=l||{start:0,end:0}}else l=null;for(pr={focusedElem:e,selectionRange:l},Ii=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var X=Kl(l.type,n);e=a.getSnapshotBeforeUpdate(X,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(W){pe(l,l.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)br(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":br(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Us(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Pt(e,l),a&4&&pn(5,l);break;case 1:if(Pt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){pe(l,l.return,u)}else{var n=Kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){pe(l,l.return,u)}}a&64&&Rs(l),a&512&&vn(l,l.return);break;case 3:if(Pt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{yf(e,t)}catch(u){pe(l,l.return,u)}}break;case 27:t===null&&a&4&&Ds(l);case 26:case 5:Pt(e,l),t===null&&a&4&&Ms(l),a&512&&vn(l,l.return);break;case 12:Pt(e,l);break;case 31:Pt(e,l),a&4&&Bs(e,l);break;case 13:Pt(e,l),a&4&&qs(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=zh.bind(null,l),Qh(e,l))));break;case 22:if(a=l.memoizedState!==null||Ft,!a){t=t!==null&&t.memoizedState!==null||Be,n=Ft;var i=Be;Ft=a,(Be=t)&&!i?el(e,l,(l.subtreeFlags&8772)!==0):Pt(e,l),Ft=n,Be=i}break;case 30:break;default:Pt(e,l)}}function ws(e){var t=e.alternate;t!==null&&(e.alternate=null,ws(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,et=!1;function It(e,t,l){for(l=l.child;l!==null;)Hs(e,t,l),l=l.sibling}function Hs(e,t,l){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Ya,l)}catch{}switch(l.tag){case 26:Be||Ht(l,t),It(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Be||Ht(l,t);var a=Ae,n=et;Al(l.type)&&(Ae=l.stateNode,et=!1),It(e,t,l),Nn(l.stateNode),Ae=a,et=n;break;case 5:Be||Ht(l,t);case 6:if(a=Ae,n=et,Ae=null,It(e,t,l),Ae=a,et=n,Ae!==null)if(et)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(l.stateNode)}catch(i){pe(l,t,i)}else try{Ae.removeChild(l.stateNode)}catch(i){pe(l,t,i)}break;case 18:Ae!==null&&(et?(e=Ae,Rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ua(e)):Rd(Ae,l.stateNode));break;case 4:a=Ae,n=et,Ae=l.stateNode.containerInfo,et=!0,It(e,t,l),Ae=a,et=n;break;case 0:case 11:case 14:case 15:yl(2,l,t),Be||yl(4,l,t),It(e,t,l);break;case 1:Be||(Ht(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Os(l,t,a)),It(e,t,l);break;case 21:It(e,t,l);break;case 22:Be=(a=Be)||l.memoizedState!==null,It(e,t,l),Be=a;break;default:It(e,t,l)}}function Bs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ua(e)}catch(l){pe(t,t.return,l)}}}function qs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ua(e)}catch(l){pe(t,t.return,l)}}function gh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cs),t;default:throw Error(r(435,e.tag))}}function Di(e,t){var l=gh(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Th.bind(null,e,a);a.then(n,n)}})}function tt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(Al(o.type)){Ae=o.stateNode,et=!1;break e}break;case 5:Ae=o.stateNode,et=!1;break e;case 3:case 4:Ae=o.stateNode.containerInfo,et=!0;break e}o=o.return}if(Ae===null)throw Error(r(160));Hs(i,u,n),Ae=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ls(t,e),t=t.sibling}var Ot=null;function Ls(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),lt(e),a&4&&(yl(3,e,e.return),pn(3,e),yl(5,e,e.return));break;case 1:tt(t,e),lt(e),a&512&&(Be||l===null||Ht(l,l.return)),a&64&&Ft&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ot;if(tt(t,e),lt(e),a&512&&(Be||l===null||Ht(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Qa]||i[Ge]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),ke(i,a,l),i[Ge]=e,Le(i),a=i;break e;case"link":var u=Ld("link","href",n).get(a+(l.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(o,1);break t}}i=n.createElement(a),ke(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Ld("meta","content",n).get(a+(l.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(o,1);break t}}i=n.createElement(a),ke(i,a,l),n.head.appendChild(i);break;default:throw Error(r(468,a))}i[Ge]=e,Le(i),a=i}e.stateNode=a}else Yd(n,e.type,e.stateNode);else e.stateNode=qd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Yd(n,e.type,e.stateNode):qd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&kc(e,e.memoizedProps,l.memoizedProps)}break;case 27:tt(t,e),lt(e),a&512&&(Be||l===null||Ht(l,l.return)),l!==null&&a&4&&kc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(tt(t,e),lt(e),a&512&&(Be||l===null||Ht(l,l.return)),e.flags&32){n=e.stateNode;try{aa(n,"")}catch(X){pe(e,e.return,X)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,kc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Jc=!0);break;case 6:if(tt(t,e),lt(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(X){pe(e,e.return,X)}}break;case 3:if(Ji=null,n=Ot,Ot=Vi(t.containerInfo),tt(t,e),Ot=n,lt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ua(t.containerInfo)}catch(X){pe(e,e.return,X)}Jc&&(Jc=!1,Ys(e));break;case 4:a=Ot,Ot=Vi(e.stateNode.containerInfo),tt(t,e),lt(e),Ot=a;break;case 12:tt(t,e),lt(e);break;case 31:tt(t,e),lt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Di(e,a)));break;case 13:tt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ui=it()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Di(e,a)));break;case 22:n=e.memoizedState!==null;var g=l!==null&&l.memoizedState!==null,A=Ft,M=Be;if(Ft=A||n,Be=M||g,tt(t,e),Be=M,Ft=A,lt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||g||Ft||Be||Jl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){g=l=t;try{if(i=g.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=g.stateNode;var C=g.memoizedProps.style,N=C!=null&&C.hasOwnProperty("display")?C.display:null;o.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(X){pe(g,g.return,X)}}}else if(t.tag===6){if(l===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(X){pe(g,g.return,X)}}}else if(t.tag===18){if(l===null){g=t;try{var R=g.stateNode;n?Od(R,!0):Od(g.stateNode,!1)}catch(X){pe(g,g.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Di(e,l))));break;case 19:tt(t,e),lt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Di(e,a)));break;case 30:break;case 21:break;default:tt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(js(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,i=Vc(e);ji(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(aa(u,""),l.flags&=-33);var o=Vc(e);ji(e,o,u);break;case 3:case 4:var g=l.stateNode.containerInfo,A=Vc(e);Kc(e,A,g);break;default:throw Error(r(161))}}catch(M){pe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ys(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ys(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Us(e,t.alternate,t),t=t.sibling}function Jl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yl(4,t,t.return),Jl(t);break;case 1:Ht(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Os(t,t.return,l),Jl(t);break;case 27:Nn(t.stateNode);case 26:case 5:Ht(t,t.return),Jl(t);break;case 22:t.memoizedState===null&&Jl(t);break;case 30:Jl(t);break;default:Jl(t)}e=e.sibling}}function el(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:el(n,i,l),pn(4,i);break;case 1:if(el(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){pe(a,a.return,A)}if(a=i,n=a.updateQueue,n!==null){var o=a.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)vf(g[n],o)}catch(A){pe(a,a.return,A)}}l&&u&64&&Rs(i),vn(i,i.return);break;case 27:Ds(i);case 26:case 5:el(n,i,l),l&&a===null&&u&4&&Ms(i),vn(i,i.return);break;case 12:el(n,i,l);break;case 31:el(n,i,l),l&&u&4&&Bs(n,i);break;case 13:el(n,i,l),l&&u&4&&qs(n,i);break;case 22:i.memoizedState===null&&el(n,i,l),vn(i,i.return);break;case 30:break;default:el(n,i,l)}t=t.sibling}}function $c(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ln(l))}function Wc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function Mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gs(e,t,l,a),t=t.sibling}function Gs(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,l,a),n&2048&&pn(9,t);break;case 1:Mt(e,t,l,a);break;case 3:Mt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(n&2048){Mt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){pe(t,t.return,g)}}else Mt(e,t,l,a);break;case 31:Mt(e,t,l,a);break;case 13:Mt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,l,a):yn(e,t):i._visibility&2?Mt(e,t,l,a):(i._visibility|=2,za(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&$c(u,t);break;case 24:Mt(e,t,l,a),n&2048&&Wc(t.alternate,t);break;default:Mt(e,t,l,a)}}function za(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,o=l,g=a,A=u.flags;switch(u.tag){case 0:case 11:case 15:za(i,u,o,g,n),pn(8,u);break;case 23:break;case 22:var M=u.stateNode;u.memoizedState!==null?M._visibility&2?za(i,u,o,g,n):yn(i,u):(M._visibility|=2,za(i,u,o,g,n)),n&&A&2048&&$c(u.alternate,u);break;case 24:za(i,u,o,g,n),n&&A&2048&&Wc(u.alternate,u);break;default:za(i,u,o,g,n)}t=t.sibling}}function yn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:yn(l,a),n&2048&&$c(a.alternate,a);break;case 24:yn(l,a),n&2048&&Wc(a.alternate,a);break;default:yn(l,a)}t=t.sibling}}var bn=8192;function Ta(e,t,l){if(e.subtreeFlags&bn)for(e=e.child;e!==null;)Xs(e,t,l),e=e.sibling}function Xs(e,t,l){switch(e.tag){case 26:Ta(e,t,l),e.flags&bn&&e.memoizedState!==null&&tg(l,Ot,e.memoizedState,e.memoizedProps);break;case 5:Ta(e,t,l);break;case 3:case 4:var a=Ot;Ot=Vi(e.stateNode.containerInfo),Ta(e,t,l),Ot=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=bn,bn=16777216,Ta(e,t,l),bn=a):Ta(e,t,l));break;default:Ta(e,t,l)}}function Qs(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ye=a,ks(a,e)}Qs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zs(e),e=e.sibling}function Zs(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&yl(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ci(e)):xn(e);break;default:xn(e)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ye=a,ks(a,e)}Qs(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),Ci(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ci(t));break;default:Ci(t)}e=e.sibling}}function ks(e,t){for(;Ye!==null;){var l=Ye;switch(l.tag){case 0:case 11:case 15:yl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ln(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ye=a;else e:for(l=e;Ye!==null;){a=Ye;var n=a.sibling,i=a.return;if(ws(a),a===l){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var ph={getCacheForType:function(e){var t=Qe(Ue),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Qe(Ue).controller.signal}},vh=typeof WeakMap=="function"?WeakMap:Map,me=0,Ee=null,ne=null,ce=0,ge=0,dt=null,bl=!1,Aa=!1,Fc=!1,tl=0,Re=0,xl=0,$l=0,Ic=0,mt=0,Na=0,Sn=null,at=null,Pc=!1,Ui=0,Vs=0,wi=1/0,Hi=null,Sl=null,qe=0,El=null,_a=null,ll=0,er=0,tr=null,Ks=null,En=0,lr=null;function ht(){return(me&2)!==0&&ce!==0?ce&-ce:j.T!==null?rr():co()}function Js(){if(mt===0)if((ce&536870912)===0||oe){var e=Zn;Zn<<=1,(Zn&3932160)===0&&(Zn=262144),mt=e}else mt=536870912;return e=ft.current,e!==null&&(e.flags|=32),mt}function nt(e,t,l){(e===Ee&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),zl(e,ce,mt,!1)),Xa(e,l),((me&2)===0||e!==Ee)&&(e===Ee&&((me&2)===0&&($l|=l),Re===4&&zl(e,ce,mt,!1)),Bt(e))}function $s(e,t,l){if((me&6)!==0)throw Error(r(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ga(e,t),n=a?xh(e,t):nr(e,t,!0),i=a;do{if(n===0){Aa&&!a&&zl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!yh(l)){n=nr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=Sn;var g=o.current.memoizedState.isDehydrated;if(g&&(Ra(o,u).flags|=256),u=nr(o,u,!1),u!==2){if(Fc&&!g){o.errorRecoveryDisabledLanes|=i,$l|=i,n=4;break e}i=at,at=n,i!==null&&(at===null?at=i:at.push.apply(at,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ra(e,0),zl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:zl(a,t,mt,!bl);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=Ui+300-it(),10<n)){if(zl(a,t,mt,!bl),Vn(a,0,!0)!==0)break e;ll=t,a.timeoutHandle=Nd(Ws.bind(null,a,l,at,Hi,Pc,t,mt,$l,Na,bl,i,"Throttled",-0,0),n);break e}Ws(a,l,at,Hi,Pc,t,mt,$l,Na,bl,i,null,-0,0)}}break}while(!0);Bt(e)}function Ws(e,t,l,a,n,i,u,o,g,A,M,C,N,R){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Xs(t,i,C);var X=(i&62914560)===i?Ui-it():(i&4194048)===i?Vs-it():0;if(X=lg(C,X),X!==null){ll=i,e.cancelPendingCommit=X(nd.bind(null,e,t,i,l,a,n,u,o,g,M,C,null,N,R)),zl(e,i,u,!A);return}}nd(e,t,i,l,a,n,u,o,g)}function yh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zl(e,t,l,a){t&=~Ic,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-ct(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&no(e,l,t)}function Bi(){return(me&6)===0?(zn(0),!1):!0}function ar(){if(ne!==null){if(ge===0)var e=ne.return;else e=ne,kt=Yl=null,bc(e),ya=null,nn=0,e=ne;for(;e!==null;)_s(e.alternate,e),e=e.return;ne=null}}function Ra(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,qh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ll=0,ar(),Ee=e,ne=l=Qt(e.current,null),ce=t,ge=0,dt=null,bl=!1,Aa=Ga(e,t),Fc=!1,Na=mt=Ic=$l=xl=Re=0,at=Sn=null,Pc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-ct(a),i=1<<n;t|=e[n],a&=~i}return tl=t,ni(),l}function Fs(e,t){te=null,j.H=mn,t===va||t===di?(t=mf(),ge=3):t===cc?(t=mf(),ge=4):ge=t===wc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,ne===null&&(Re=1,Ni(e,xt(t,e.current)))}function Is(){var e=ft.current;return e===null?!0:(ce&4194048)===ce?Tt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Tt:!1}function Ps(){var e=j.H;return j.H=mn,e===null?mn:e}function ed(){var e=j.A;return j.A=ph,e}function qi(){Re=4,bl||(ce&4194048)!==ce&&ft.current!==null||(Aa=!0),(xl&134217727)===0&&($l&134217727)===0||Ee===null||zl(Ee,ce,mt,!1)}function nr(e,t,l){var a=me;me|=2;var n=Ps(),i=ed();(Ee!==e||ce!==t)&&(Hi=null,Ra(e,t)),t=!1;var u=Re;e:do try{if(ge!==0&&ne!==null){var o=ne,g=dt;switch(ge){case 8:ar(),u=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var A=ge;if(ge=0,dt=null,Oa(e,o,g,A),l&&Aa){u=0;break e}break;default:A=ge,ge=0,dt=null,Oa(e,o,g,A)}}bh(),u=Re;break}catch(M){Fs(e,M)}while(!0);return t&&e.shellSuspendCounter++,kt=Yl=null,me=a,j.H=n,j.A=i,ne===null&&(Ee=null,ce=0,ni()),u}function bh(){for(;ne!==null;)td(ne)}function xh(e,t){var l=me;me|=2;var a=Ps(),n=ed();Ee!==e||ce!==t?(Hi=null,wi=it()+500,Ra(e,t)):Aa=Ga(e,t);e:do try{if(ge!==0&&ne!==null){t=ne;var i=dt;t:switch(ge){case 1:ge=0,dt=null,Oa(e,t,i,1);break;case 2:case 9:if(sf(i)){ge=0,dt=null,ld(t);break}t=function(){ge!==2&&ge!==9||Ee!==e||(ge=7),Bt(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:sf(i)?(ge=0,dt=null,ld(t)):(ge=0,dt=null,Oa(e,t,i,7));break;case 5:var u=null;switch(ne.tag){case 26:u=ne.memoizedState;case 5:case 27:var o=ne;if(u?Gd(u):o.stateNode.complete){ge=0,dt=null;var g=o.sibling;if(g!==null)ne=g;else{var A=o.return;A!==null?(ne=A,Li(A)):ne=null}break t}}ge=0,dt=null,Oa(e,t,i,5);break;case 6:ge=0,dt=null,Oa(e,t,i,6);break;case 8:ar(),Re=6;break e;default:throw Error(r(462))}}Sh();break}catch(M){Fs(e,M)}while(!0);return kt=Yl=null,j.H=a,j.A=n,me=l,ne!==null?0:(Ee=null,ce=0,ni(),Re)}function Sh(){for(;ne!==null&&!Zm();)td(ne)}function td(e){var t=As(e.alternate,e,tl);e.memoizedProps=e.pendingProps,t===null?Li(e):ne=t}function ld(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=bs(l,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=bs(l,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:bc(t);default:_s(l,t),t=ne=Po(t,tl),t=As(l,t,tl)}e.memoizedProps=e.pendingProps,t===null?Li(e):ne=t}function Oa(e,t,l,a){kt=Yl=null,bc(t),ya=null,nn=0;var n=t.return;try{if(oh(e,n,t,l,ce)){Re=1,Ni(e,xt(l,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Re=1,Ni(e,xt(l,e.current)),ne=null;return}t.flags&32768?(oe||a===1?e=!0:Aa||(ce&536870912)!==0?e=!1:(bl=e=!0,(a===2||a===9||a===3||a===6)&&(a=ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),ad(t,e)):Li(t)}function Li(e){var t=e;do{if((t.flags&32768)!==0){ad(t,bl);return}e=t.return;var l=dh(t.alternate,t,tl);if(l!==null){ne=l;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Re===0&&(Re=5)}function ad(e,t){do{var l=mh(e.alternate,e);if(l!==null){l.flags&=32767,ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=l}while(e!==null);Re=6,ne=null}function nd(e,t,l,a,n,i,u,o,g){e.cancelPendingCommit=null;do Yi();while(qe!==0);if((me&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=Vu,e0(e,l,i,u,o,g),e===Ee&&(ne=Ee=null,ce=0),_a=t,El=e,ll=l,er=i,tr=n,Ks=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ah(Xn,function(){return od(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,n=B.p,B.p=2,u=me,me|=4;try{hh(e,t,l)}finally{me=u,B.p=n,j.T=a}}qe=1,id(),ud(),cd()}}function id(){if(qe===1){qe=0;var e=El,t=_a,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=j.T,j.T=null;var a=B.p;B.p=2;var n=me;me|=4;try{Ls(t,e);var i=pr,u=Zo(e.containerInfo),o=i.focusedElem,g=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&Qo(o.ownerDocument.documentElement,o)){if(g!==null&&Gu(o)){var A=g.start,M=g.end;if(M===void 0&&(M=A),"selectionStart"in o)o.selectionStart=A,o.selectionEnd=Math.min(M,o.value.length);else{var C=o.ownerDocument||document,N=C&&C.defaultView||window;if(N.getSelection){var R=N.getSelection(),X=o.textContent.length,W=Math.min(g.start,X),xe=g.end===void 0?W:Math.min(g.end,X);!R.extend&&W>xe&&(u=xe,xe=W,W=u);var E=Xo(o,W),v=Xo(o,xe);if(E&&v&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==v.node||R.focusOffset!==v.offset)){var z=C.createRange();z.setStart(E.node,E.offset),R.removeAllRanges(),W>xe?(R.addRange(z),R.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),R.addRange(z))}}}}for(C=[],R=o;R=R.parentNode;)R.nodeType===1&&C.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<C.length;o++){var D=C[o];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Ii=!!gr,pr=gr=null}finally{me=n,B.p=a,j.T=l}}e.current=t,qe=2}}function ud(){if(qe===2){qe=0;var e=El,t=_a,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=j.T,j.T=null;var a=B.p;B.p=2;var n=me;me|=4;try{Us(e,t.alternate,t)}finally{me=n,B.p=a,j.T=l}}qe=3}}function cd(){if(qe===4||qe===3){qe=0,km();var e=El,t=_a,l=ll,a=Ks;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,_a=El=null,rd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sl=null),Eu(l),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Ya,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=j.T,n=B.p,B.p=2,j.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var o=a[u];i(o.value,{componentStack:o.stack})}}finally{j.T=t,B.p=n}}(ll&3)!==0&&Yi(),Bt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===lr?En++:(En=0,lr=e):En=0,zn(0)}}function rd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function Yi(){return id(),ud(),cd(),od()}function od(){if(qe!==5)return!1;var e=El,t=er;er=0;var l=Eu(ll),a=j.T,n=B.p;try{B.p=32>l?32:l,j.T=null,l=tr,tr=null;var i=El,u=ll;if(qe=0,_a=El=null,ll=0,(me&6)!==0)throw Error(r(331));var o=me;if(me|=4,Zs(i.current),Gs(i,i.current,u,l),me=o,zn(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Ya,i)}catch{}return!0}finally{B.p=n,j.T=a,rd(e,t)}}function fd(e,t,l){t=xt(l,t),t=Uc(e.stateNode,t,2),e=gl(e,t,2),e!==null&&(Xa(e,2),Bt(e))}function pe(e,t,l){if(e.tag===3)fd(e,e,l);else for(;t!==null;){if(t.tag===3){fd(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sl===null||!Sl.has(a))){e=xt(l,e),l=ss(2),a=gl(t,l,2),a!==null&&(ds(l,a,t,e),Xa(a,2),Bt(a));break}}t=t.return}}function ir(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new vh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Fc=!0,n.add(l),e=Eh.bind(null,e,t,l),t.then(e,e))}function Eh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ee===e&&(ce&l)===l&&(Re===4||Re===3&&(ce&62914560)===ce&&300>it()-Ui?(me&2)===0&&Ra(e,0):Ic|=l,Na===ce&&(Na=0)),Bt(e)}function sd(e,t){t===0&&(t=ao()),e=Bl(e,t),e!==null&&(Xa(e,t),Bt(e))}function zh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),sd(e,l)}function Th(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),sd(e,l)}function Ah(e,t){return yu(e,t)}var Gi=null,Ma=null,ur=!1,Xi=!1,cr=!1,Tl=0;function Bt(e){e!==Ma&&e.next===null&&(Ma===null?Gi=Ma=e:Ma=Ma.next=e),Xi=!0,ur||(ur=!0,_h())}function zn(e,t){if(!cr&&Xi){cr=!0;do for(var l=!1,a=Gi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-ct(42|e)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,gd(a,i))}else i=ce,i=Vn(a,a===Ee?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ga(a,i)||(l=!0,gd(a,i));a=a.next}while(l);cr=!1}}function Nh(){dd()}function dd(){Xi=ur=!1;var e=0;Tl!==0&&Bh()&&(e=Tl);for(var t=it(),l=null,a=Gi;a!==null;){var n=a.next,i=md(a,t);i===0?(a.next=null,l===null?Gi=n:l.next=n,n===null&&(Ma=l)):(l=a,(e!==0||(i&3)!==0)&&(Xi=!0)),a=n}qe!==0&&qe!==5||zn(e),Tl!==0&&(Tl=0)}function md(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ct(i),o=1<<u,g=n[u];g===-1?((o&l)===0||(o&a)!==0)&&(n[u]=Pm(o,t)):g<=t&&(e.expiredLanes|=o),i&=~o}if(t=Ee,l=ce,l=Vn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&bu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ga(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&bu(a),Eu(l)){case 2:case 8:l=to;break;case 32:l=Xn;break;case 268435456:l=lo;break;default:l=Xn}return a=hd.bind(null,e),l=yu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&bu(a),e.callbackPriority=2,e.callbackNode=null,2}function hd(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Yi()&&e.callbackNode!==l)return null;var a=ce;return a=Vn(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:($s(e,a,t),md(e,it()),e.callbackNode!=null&&e.callbackNode===l?hd.bind(null,e):null)}function gd(e,t){if(Yi())return null;$s(e,t,!0)}function _h(){Lh(function(){(me&6)!==0?yu(eo,Nh):dd()})}function rr(){if(Tl===0){var e=ga;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),Tl=e}return Tl}function pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wn(""+e)}function vd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Rh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=pd((n[Ie]||null).action),u=a.submitter;u&&(t=(t=u[Ie]||null)?pd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var o=new ei("action","action",null,a,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Tl!==0){var g=u?vd(n,u):new FormData(n);Rc(l,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(o.preventDefault(),g=u?vd(n,u):new FormData(n),Rc(l,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var or=0;or<ku.length;or++){var fr=ku[or],Oh=fr.toLowerCase(),Mh=fr[0].toUpperCase()+fr.slice(1);Rt(Oh,"on"+Mh)}Rt(Ko,"onAnimationEnd"),Rt(Jo,"onAnimationIteration"),Rt($o,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(V0,"onTransitionRun"),Rt(K0,"onTransitionStart"),Rt(J0,"onTransitionCancel"),Rt(Wo,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),Cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tn));function yd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var o=a[u],g=o.instance,A=o.currentTarget;if(o=o.listener,g!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=A;try{i(n)}catch(M){ai(M)}n.currentTarget=null,i=g}else for(u=0;u<a.length;u++){if(o=a[u],g=o.instance,A=o.currentTarget,o=o.listener,g!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=A;try{i(n)}catch(M){ai(M)}n.currentTarget=null,i=g}}}}function ie(e,t){var l=t[zu];l===void 0&&(l=t[zu]=new Set);var a=e+"__bubble";l.has(a)||(bd(t,e,2,!1),l.add(a))}function sr(e,t,l){var a=0;t&&(a|=4),bd(l,e,a,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Qi]){e[Qi]=!0,fo.forEach(function(l){l!=="selectionchange"&&(jh.has(l)||sr(l,!1,e),sr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,sr("selectionchange",!1,t))}}function bd(e,t,l,a){switch(Jd(t)){case 2:var n=ig;break;case 8:n=ug;break;default:n=_r}l=n.bind(null,t,l,e),n=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function mr(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var o=a.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=a.return;u!==null;){var g=u.tag;if((g===3||g===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=Il(o),u===null)return;if(g=u.tag,g===5||g===6||g===26||g===27){a=i=u;continue e}o=o.parentNode}}a=a.return}zo(function(){var A=i,M=Mu(l),C=[];e:{var N=Fo.get(e);if(N!==void 0){var R=ei,X=e;switch(e){case"keypress":if(In(l)===0)break e;case"keydown":case"keyup":R=T0;break;case"focusin":X="focus",R=Hu;break;case"focusout":X="blur",R=Hu;break;case"beforeblur":case"afterblur":R=Hu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=_0;break;case Ko:case Jo:case $o:R=g0;break;case Wo:R=O0;break;case"scroll":case"scrollend":R=f0;break;case"wheel":R=j0;break;case"copy":case"cut":case"paste":R=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ro;break;case"toggle":case"beforetoggle":R=C0}var W=(t&4)!==0,xe=!W&&(e==="scroll"||e==="scrollend"),E=W?N!==null?N+"Capture":null:N;W=[];for(var v=A,z;v!==null;){var D=v;if(z=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||z===null||E===null||(D=ka(v,E),D!=null&&W.push(An(v,D,z))),xe)break;v=v.return}0<W.length&&(N=new R(N,X,null,l,M),C.push({event:N,listeners:W}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",N&&l!==Ou&&(X=l.relatedTarget||l.fromElement)&&(Il(X)||X[Fl]))break e;if((R||N)&&(N=M.window===M?M:(N=M.ownerDocument)?N.defaultView||N.parentWindow:window,R?(X=l.relatedTarget||l.toElement,R=A,X=X?Il(X):null,X!==null&&(xe=h(X),W=X.tag,X!==xe||W!==5&&W!==27&&W!==6)&&(X=null)):(R=null,X=A),R!==X)){if(W=No,D="onMouseLeave",E="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=Ro,D="onPointerLeave",E="onPointerEnter",v="pointer"),xe=R==null?N:Za(R),z=X==null?N:Za(X),N=new W(D,v+"leave",R,l,M),N.target=xe,N.relatedTarget=z,D=null,Il(M)===A&&(W=new W(E,v+"enter",X,l,M),W.target=z,W.relatedTarget=xe,D=W),xe=D,R&&X)t:{for(W=Dh,E=R,v=X,z=0,D=E;D;D=W(D))z++;D=0;for(var J=v;J;J=W(J))D++;for(;0<z-D;)E=W(E),z--;for(;0<D-z;)v=W(v),D--;for(;z--;){if(E===v||v!==null&&E===v.alternate){W=E;break t}E=W(E),v=W(v)}W=null}else W=null;R!==null&&xd(C,N,R,W,!1),X!==null&&xe!==null&&xd(C,xe,X,W,!0)}}e:{if(N=A?Za(A):window,R=N.nodeName&&N.nodeName.toLowerCase(),R==="select"||R==="input"&&N.type==="file")var se=Ho;else if(Uo(N))if(Bo)se=Q0;else{se=G0;var V=Y0}else R=N.nodeName,!R||R.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?A&&Ru(A.elementType)&&(se=Ho):se=X0;if(se&&(se=se(e,A))){wo(C,se,l,M);break e}V&&V(e,N,A),e==="focusout"&&A&&N.type==="number"&&A.memoizedProps.value!=null&&_u(N,"number",N.value)}switch(V=A?Za(A):window,e){case"focusin":(Uo(V)||V.contentEditable==="true")&&(ca=V,Xu=A,Pa=null);break;case"focusout":Pa=Xu=ca=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,ko(C,l,M);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":ko(C,l,M)}var le;if(qu)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ua?Do(e,l)&&(re="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(re="onCompositionStart");re&&(Oo&&l.locale!=="ko"&&(ua||re!=="onCompositionStart"?re==="onCompositionEnd"&&ua&&(le=To()):(rl=M,Cu="value"in rl?rl.value:rl.textContent,ua=!0)),V=Zi(A,re),0<V.length&&(re=new _o(re,e,null,l,M),C.push({event:re,listeners:V}),le?re.data=le:(le=Co(l),le!==null&&(re.data=le)))),(le=w0?H0(e,l):B0(e,l))&&(re=Zi(A,"onBeforeInput"),0<re.length&&(V=new _o("onBeforeInput","beforeinput",null,l,M),C.push({event:V,listeners:re}),V.data=le)),Rh(C,e,A,l,M)}yd(C,t)})}function An(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Zi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ka(e,l),n!=null&&a.unshift(An(e,n,i)),n=ka(e,t),n!=null&&a.push(An(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Dh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xd(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var o=l,g=o.alternate,A=o.stateNode;if(o=o.tag,g!==null&&g===a)break;o!==5&&o!==26&&o!==27||A===null||(g=A,n?(A=ka(l,i),A!=null&&u.unshift(An(l,A,g))):n||(A=ka(l,i),A!=null&&u.push(An(l,A,g)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Ch=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Sd(e){return(typeof e=="string"?e:""+e).replace(Ch,`
`).replace(Uh,"")}function Ed(e,t){return t=Sd(t),Sd(e)===t}function be(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||aa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&aa(e,""+a);break;case"className":Jn(e,"class",a);break;case"tabIndex":Jn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,l,a);break;case"style":So(e,a,i);break;case"data":if(t!=="object"){Jn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Wn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&be(e,t,"name",n.name,n,null),be(e,t,"formEncType",n.formEncType,n,null),be(e,t,"formMethod",n.formMethod,n,null),be(e,t,"formTarget",n.formTarget,n,null)):(be(e,t,"encType",n.encType,n,null),be(e,t,"method",n.method,n,null),be(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Wn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"onScroll":a!=null&&ie("scroll",e);break;case"onScrollEnd":a!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Wn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Kn(e,"popover",a);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Kn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=r0.get(l)||l,Kn(e,l,a))}}function hr(e,t,l,a,n,i){switch(l){case"style":So(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof a=="string"?aa(e,a):(typeof a=="number"||typeof a=="bigint")&&aa(e,""+a);break;case"onScroll":a!=null&&ie("scroll",e);break;case"onScrollEnd":a!=null&&ie("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!so.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Ie]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Kn(e,l,a)}}}function ke(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:be(e,t,i,u,l,null)}}n&&be(e,t,"srcSet",l.srcSet,l,null),a&&be(e,t,"src",l.src,l,null);return;case"input":ie("invalid",e);var o=i=u=n=null,g=null,A=null;for(a in l)if(l.hasOwnProperty(a)){var M=l[a];if(M!=null)switch(a){case"name":n=M;break;case"type":u=M;break;case"checked":g=M;break;case"defaultChecked":A=M;break;case"value":i=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:be(e,t,a,M,l,null)}}vo(e,i,o,g,A,u,n,!1);return;case"select":ie("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":a=o;default:be(e,t,n,o,l,null)}t=i,l=u,e.multiple=!!a,t!=null?la(e,!!a,t,!1):l!=null&&la(e,!!a,l,!0);return;case"textarea":ie("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(o=l[u],o!=null))switch(u){case"value":a=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:be(e,t,u,o,l,null)}bo(e,a,n,i);return;case"option":for(g in l)l.hasOwnProperty(g)&&(a=l[g],a!=null)&&(g==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":be(e,t,g,a,l,null));return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(a=0;a<Tn.length;a++)ie(Tn[a],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in l)if(l.hasOwnProperty(A)&&(a=l[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:be(e,t,A,a,l,null)}return;default:if(Ru(t)){for(M in l)l.hasOwnProperty(M)&&(a=l[M],a!==void 0&&hr(e,t,M,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&be(e,t,o,a,l,null))}function wh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,g=null,A=null,M=null;for(R in l){var C=l[R];if(l.hasOwnProperty(R)&&C!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=C;default:a.hasOwnProperty(R)||be(e,t,R,null,a,C)}}for(var N in a){var R=a[N];if(C=l[N],a.hasOwnProperty(N)&&(R!=null||C!=null))switch(N){case"type":i=R;break;case"name":n=R;break;case"checked":A=R;break;case"defaultChecked":M=R;break;case"value":u=R;break;case"defaultValue":o=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:R!==C&&be(e,t,N,R,a,C)}}Nu(e,u,o,g,A,M,i,n);return;case"select":R=u=o=N=null;for(i in l)if(g=l[i],l.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":R=g;default:a.hasOwnProperty(i)||be(e,t,i,null,a,g)}for(n in a)if(i=a[n],g=l[n],a.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":N=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==g&&be(e,t,n,i,a,g)}t=o,l=u,a=R,N!=null?la(e,!!l,N,!1):!!a!=!!l&&(t!=null?la(e,!!l,t,!0):la(e,!!l,l?[]:"",!1));return;case"textarea":R=N=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":N=n;break;case"defaultValue":R=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&be(e,t,u,n,a,i)}yo(e,N,R);return;case"option":for(var X in l)N=l[X],l.hasOwnProperty(X)&&N!=null&&!a.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:be(e,t,X,null,a,N));for(g in a)N=a[g],R=l[g],a.hasOwnProperty(g)&&N!==R&&(N!=null||R!=null)&&(g==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":be(e,t,g,N,a,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in l)N=l[W],l.hasOwnProperty(W)&&N!=null&&!a.hasOwnProperty(W)&&be(e,t,W,null,a,N);for(A in a)if(N=a[A],R=l[A],a.hasOwnProperty(A)&&N!==R&&(N!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:be(e,t,A,N,a,R)}return;default:if(Ru(t)){for(var xe in l)N=l[xe],l.hasOwnProperty(xe)&&N!==void 0&&!a.hasOwnProperty(xe)&&hr(e,t,xe,void 0,a,N);for(M in a)N=a[M],R=l[M],!a.hasOwnProperty(M)||N===R||N===void 0&&R===void 0||hr(e,t,M,N,a,R);return}}for(var E in l)N=l[E],l.hasOwnProperty(E)&&N!=null&&!a.hasOwnProperty(E)&&be(e,t,E,null,a,N);for(C in a)N=a[C],R=l[C],!a.hasOwnProperty(C)||N===R||N==null&&R==null||be(e,t,C,N,a,R)}function zd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&zd(u)){for(u=0,o=n.responseEnd,a+=1;a<l.length;a++){var g=l[a],A=g.startTime;if(A>o)break;var M=g.transferSize,C=g.initiatorType;M&&zd(C)&&(g=g.responseEnd,u+=M*(g<o?1:(o-A)/(g-A)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gr=null,pr=null;function ki(e){return e.nodeType===9?e:e.ownerDocument}function Td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ad(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yr=null;function Bh(){var e=window.event;return e&&e.type==="popstate"?e===yr?!1:(yr=e,!0):(yr=null,!1)}var Nd=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(Yh)}:Nd;function Yh(e){setTimeout(function(){throw e})}function Al(e){return e==="head"}function Rd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ua(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Nn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Nn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[Qa]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&Nn(e.ownerDocument.body);l=n}while(l);Ua(t)}function Od(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function br(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":br(l),Tu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Gh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Qa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function Xh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=At(e.nextSibling),e===null))return null;return e}function Md(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function xr(e){return e.data==="$?"||e.data==="$~"}function Sr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Er=null;function jd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return At(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Cd(e,t,l){switch(t=ki(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Nn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tu(e)}var Nt=new Map,Ud=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var al=B.d;B.d={f:Zh,r:kh,D:Vh,C:Kh,L:Jh,m:$h,X:Fh,S:Wh,M:Ih};function Zh(){var e=al.f(),t=Bi();return e||t}function kh(e){var t=Pl(e);t!==null&&t.tag===5&&t.type==="form"?Ff(t):al.r(e)}var ja=typeof document>"u"?null:document;function wd(e,t,l){var a=ja;if(a&&typeof t=="string"&&t){var n=yt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ud.has(n)||(Ud.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),ke(t,"link",e),Le(t),a.head.appendChild(t)))}}function Vh(e){al.D(e),wd("dns-prefetch",e,null)}function Kh(e,t){al.C(e,t),wd("preconnect",e,t)}function Jh(e,t,l){al.L(e,t,l);var a=ja;if(a&&e&&t){var n='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+yt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+yt(l.imageSizes)+'"]')):n+='[href="'+yt(e)+'"]';var i=n;switch(t){case"style":i=Da(e);break;case"script":i=Ca(e)}Nt.has(i)||(e=x({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Nt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(_n(i))||t==="script"&&a.querySelector(Rn(i))||(t=a.createElement("link"),ke(t,"link",e),Le(t),a.head.appendChild(t)))}}function $h(e,t){al.m(e,t);var l=ja;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+yt(a)+'"][href="'+yt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ca(e)}if(!Nt.has(i)&&(e=x({rel:"modulepreload",href:e},t),Nt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Rn(i)))return}a=l.createElement("link"),ke(a,"link",e),Le(a),l.head.appendChild(a)}}}function Wh(e,t,l){al.S(e,t,l);var a=ja;if(a&&e){var n=ea(a).hoistableStyles,i=Da(e);t=t||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=a.querySelector(_n(i)))o.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Nt.get(i))&&zr(e,l);var g=u=a.createElement("link");Le(g),ke(g,"link",e),g._p=new Promise(function(A,M){g.onload=A,g.onerror=M}),g.addEventListener("load",function(){o.loading|=1}),g.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ki(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function Fh(e,t){al.X(e,t);var l=ja;if(l&&e){var a=ea(l).hoistableScripts,n=Ca(e),i=a.get(n);i||(i=l.querySelector(Rn(n)),i||(e=x({src:e,async:!0},t),(t=Nt.get(n))&&Tr(e,t),i=l.createElement("script"),Le(i),ke(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Ih(e,t){al.M(e,t);var l=ja;if(l&&e){var a=ea(l).hoistableScripts,n=Ca(e),i=a.get(n);i||(i=l.querySelector(Rn(n)),i||(e=x({src:e,async:!0,type:"module"},t),(t=Nt.get(n))&&Tr(e,t),i=l.createElement("script"),Le(i),ke(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Hd(e,t,l,a){var n=(n=ae.current)?Vi(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Da(l.href),l=ea(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Da(l.href);var i=ea(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(_n(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Nt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Nt.set(e,l),i||Ph(n,e,l,u.state))),t&&a===null)throw Error(r(528,""));return u}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ca(l),l=ea(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Da(e){return'href="'+yt(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function Bd(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Ph(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ke(t,"link",l),Le(t),e.head.appendChild(t))}function Ca(e){return'[src="'+yt(e)+'"]'}function Rn(e){return"script[async]"+e}function qd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+yt(l.href)+'"]');if(a)return t.instance=a,Le(a),a;var n=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Le(a),ke(a,"style",n),Ki(a,l.precedence,e),t.instance=a;case"stylesheet":n=Da(l.href);var i=e.querySelector(_n(n));if(i)return t.state.loading|=4,t.instance=i,Le(i),i;a=Bd(l),(n=Nt.get(n))&&zr(a,n),i=(e.ownerDocument||e).createElement("link"),Le(i);var u=i;return u._p=new Promise(function(o,g){u.onload=o,u.onerror=g}),ke(i,"link",a),t.state.loading|=4,Ki(i,l.precedence,e),t.instance=i;case"script":return i=Ca(l.src),(n=e.querySelector(Rn(i)))?(t.instance=n,Le(n),n):(a=l,(n=Nt.get(i))&&(a=x({},l),Tr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Le(n),ke(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ki(a,l.precedence,e));return t.instance}function Ki(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var o=a[u];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function zr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ji=null;function Ld(e,t,l){if(Ji===null){var a=new Map,n=Ji=new Map;n.set(l,a)}else n=Ji,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Qa]||i[Ge]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var o=a.get(u);o?o.push(i):a.set(u,[i])}}return a}function Yd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function eg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tg(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Da(a.href),i=t.querySelector(_n(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$i.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Le(i);return}i=t.ownerDocument||t,a=Bd(a),(n=Nt.get(n))&&zr(a,n),i=i.createElement("link"),Le(i);var u=i;u._p=new Promise(function(o,g){u.onload=o,u.onerror=g}),ke(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=$i.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Ar=0;function lg(e,t){return e.stylesheets&&e.count===0&&Fi(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Fi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ar===0&&(Ar=62500*Hh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ar?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function $i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wi=null;function Fi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wi=new Map,t.forEach(ag,e),Wi=null,$i.call(e))}function ag(e,t){if(!(t.state.loading&4)){var l=Wi.get(e);if(l)var a=l.get(null);else{l=new Map,Wi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=$i.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var On={$$typeof:L,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ng(e,t,l,a,n,i,u,o,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.hiddenUpdates=xu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Xd(e,t,l,a,n,i,u,o,g,A,M,C){return e=new ng(e,t,l,u,g,A,M,C,o),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=nc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},rc(i),e}function Qd(e){return e?(e=fa,e):fa}function Zd(e,t,l,a,n,i){n=Qd(n),a.context===null?a.context=n:a.pendingContext=n,a=hl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=gl(e,a,t),l!==null&&(nt(l,e,t),cn(l,e,t))}function kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Nr(e,t){kd(e,t),(e=e.alternate)&&kd(e,t)}function Vd(e){if(e.tag===13||e.tag===31){var t=Bl(e,67108864);t!==null&&nt(t,e,67108864),Nr(e,67108864)}}function Kd(e){if(e.tag===13||e.tag===31){var t=ht();t=Su(t);var l=Bl(e,t);l!==null&&nt(l,e,t),Nr(e,t)}}var Ii=!0;function ig(e,t,l,a){var n=j.T;j.T=null;var i=B.p;try{B.p=2,_r(e,t,l,a)}finally{B.p=i,j.T=n}}function ug(e,t,l,a){var n=j.T;j.T=null;var i=B.p;try{B.p=8,_r(e,t,l,a)}finally{B.p=i,j.T=n}}function _r(e,t,l,a){if(Ii){var n=Rr(a);if(n===null)mr(e,t,a,Pi,l),$d(e,a);else if(rg(n,e,t,l,a))a.stopPropagation();else if($d(e,a),t&4&&-1<cg.indexOf(e)){for(;n!==null;){var i=Pl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Dl(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var g=1<<31-ct(u);o.entanglements[1]|=g,u&=~g}Bt(i),(me&6)===0&&(wi=it()+500,zn(0))}}break;case 31:case 13:o=Bl(i,2),o!==null&&nt(o,i,2),Bi(),Nr(i,2)}if(i=Rr(a),i===null&&mr(e,t,a,Pi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else mr(e,t,a,null,l)}}function Rr(e){return e=Mu(e),Or(e)}var Pi=null;function Or(e){if(Pi=null,e=Il(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=S(t),e!==null)return e;e=null}else if(l===31){if(e=_(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pi=e,null}function Jd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vm()){case eo:return 2;case to:return 8;case Xn:case Km:return 32;case lo:return 268435456;default:return 32}default:return 32}}var Mr=!1,Nl=null,_l=null,Rl=null,Mn=new Map,jn=new Map,Ol=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $d(e,t){switch(e){case"focusin":case"focusout":Nl=null;break;case"dragenter":case"dragleave":_l=null;break;case"mouseover":case"mouseout":Rl=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Dn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Pl(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function rg(e,t,l,a,n){switch(t){case"focusin":return Nl=Dn(Nl,e,t,l,a,n),!0;case"dragenter":return _l=Dn(_l,e,t,l,a,n),!0;case"mouseover":return Rl=Dn(Rl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Mn.set(i,Dn(Mn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,jn.set(i,Dn(jn.get(i)||null,e,t,l,a,n)),!0}return!1}function Wd(e){var t=Il(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=S(l),t!==null){e.blockedOn=t,ro(e.priority,function(){Kd(l)});return}}else if(t===31){if(t=_(l),t!==null){e.blockedOn=t,ro(e.priority,function(){Kd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Rr(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Ou=a,l.target.dispatchEvent(a),Ou=null}else return t=Pl(l),t!==null&&Vd(t),e.blockedOn=l,!1;t.shift()}return!0}function Fd(e,t,l){eu(e)&&l.delete(t)}function og(){Mr=!1,Nl!==null&&eu(Nl)&&(Nl=null),_l!==null&&eu(_l)&&(_l=null),Rl!==null&&eu(Rl)&&(Rl=null),Mn.forEach(Fd),jn.forEach(Fd)}function tu(e,t){e.blockedOn===t&&(e.blockedOn=null,Mr||(Mr=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,og)))}var lu=null;function Id(e){lu!==e&&(lu=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){lu===e&&(lu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Or(a||l)===null)continue;break}var i=Pl(l);i!==null&&(e.splice(t,3),t-=3,Rc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ua(e){function t(g){return tu(g,e)}Nl!==null&&tu(Nl,e),_l!==null&&tu(_l,e),Rl!==null&&tu(Rl,e),Mn.forEach(t),jn.forEach(t);for(var l=0;l<Ol.length;l++){var a=Ol[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ol.length&&(l=Ol[0],l.blockedOn===null);)Wd(l),l.blockedOn===null&&Ol.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Ie]||null;if(typeof i=="function")u||Id(l);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ie]||null)o=u.formAction;else if(Or(n)!==null)continue}else o=u.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),Id(l)}}}function Pd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function jr(e){this._internalRoot=e}au.prototype.render=jr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,a=ht();Zd(l,a,e,t,null,null)},au.prototype.unmount=jr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zd(e.current,2,null,e,null,null),Bi(),t[Fl]=null}};function au(e){this._internalRoot=e}au.prototype.unstable_scheduleHydration=function(e){if(e){var t=co();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ol.length&&t!==0&&t<Ol[l].priority;l++);Ol.splice(l,0,e),l===0&&Wd(e)}};var em=f.version;if(em!=="19.2.4")throw Error(r(527,em,"19.2.4"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var fg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Ya=nu.inject(fg),ut=nu}catch{}}return Un.createRoot=function(e,t){if(!d(e))throw Error(r(299));var l=!1,a="",n=cs,i=rs,u=os;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Xd(e,1,!1,null,null,l,a,null,n,i,u,Pd),e[Fl]=t.current,dr(e),new jr(t)},Un.hydrateRoot=function(e,t,l){if(!d(e))throw Error(r(299));var a=!1,n="",i=cs,u=rs,o=os,g=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(g=l.formState)),t=Xd(e,1,!0,t,l??null,a,n,g,i,u,o,Pd),t.context=Qd(null),l=t.current,a=ht(),a=Su(a),n=hl(a),n.callback=null,gl(l,n,a),l=a,t.current.lanes=l,Xa(t,l),Bt(t),e[Fl]=t.current,dr(e),new au(t)},Un.version="19.2.4",Un}var fm;function xg(){if(fm)return Ur.exports;fm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Ur.exports=bg(),Ur.exports}var Sg=xg();var sm="popstate";function dm(c){return typeof c=="object"&&c!=null&&"pathname"in c&&"search"in c&&"hash"in c&&"state"in c&&"key"in c}function Eg(c={}){function f(d,h){let{pathname:S="/",search:_="",hash:b=""}=Wl(d.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Xr("",{pathname:S,search:_,hash:b},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function s(d,h){let S=d.document.querySelector("base"),_="";if(S&&S.getAttribute("href")){let b=d.location.href,p=b.indexOf("#");_=p===-1?b:b.slice(0,p)}return _+"#"+(typeof h=="string"?h:Bn(h))}function r(d,h){jt(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return Tg(f,s,r,c)}function Ne(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function jt(c,f){if(!c){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function zg(){return Math.random().toString(36).substring(2,10)}function mm(c,f){return{usr:c.state,key:c.key,idx:f,masked:c.unstable_mask?{pathname:c.pathname,search:c.search,hash:c.hash}:void 0}}function Xr(c,f,s=null,r,d){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof f=="string"?Wl(f):f,state:s,key:f&&f.key||r||zg(),unstable_mask:d}}function Bn({pathname:c="/",search:f="",hash:s=""}){return f&&f!=="?"&&(c+=f.charAt(0)==="?"?f:"?"+f),s&&s!=="#"&&(c+=s.charAt(0)==="#"?s:"#"+s),c}function Wl(c){let f={};if(c){let s=c.indexOf("#");s>=0&&(f.hash=c.substring(s),c=c.substring(0,s));let r=c.indexOf("?");r>=0&&(f.search=c.substring(r),c=c.substring(0,r)),c&&(f.pathname=c)}return f}function Tg(c,f,s,r={}){let{window:d=document.defaultView,v5Compat:h=!1}=r,S=d.history,_="POP",b=null,p=O();p==null&&(p=0,S.replaceState({...S.state,idx:p},""));function O(){return(S.state||{idx:null}).idx}function x(){_="POP";let H=O(),$=H==null?null:H-p;p=H,b&&b({action:_,location:Y.location,delta:$})}function w(H,$){_="PUSH";let Z=dm(H)?H:Xr(Y.location,H,$);s&&s(Z,H),p=O()+1;let L=mm(Z,p),ue=Y.createHref(Z.unstable_mask||Z);try{S.pushState(L,"",ue)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(ue)}h&&b&&b({action:_,location:Y.location,delta:1})}function Q(H,$){_="REPLACE";let Z=dm(H)?H:Xr(Y.location,H,$);s&&s(Z,H),p=O();let L=mm(Z,p),ue=Y.createHref(Z.unstable_mask||Z);S.replaceState(L,"",ue),h&&b&&b({action:_,location:Y.location,delta:0})}function G(H){return Ag(H)}let Y={get action(){return _},get location(){return c(d,S)},listen(H){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(sm,x),b=H,()=>{d.removeEventListener(sm,x),b=null}},createHref(H){return f(d,H)},createURL:G,encodeLocation(H){let $=G(H);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:w,replace:Q,go(H){return S.go(H)}};return Y}function Ag(c,f=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(s,"No window.location.(origin|href) available to create URL");let r=typeof c=="string"?c:Bn(c);return r=r.replace(/ $/,"%20"),!f&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function zm(c,f,s="/"){return Ng(c,f,s,!1)}function Ng(c,f,s,r){let d=typeof f=="string"?Wl(f):f,h=nl(d.pathname||"/",s);if(h==null)return null;let S=Tm(c);_g(S);let _=null;for(let b=0;_==null&&b<S.length;++b){let p=qg(h);_=Hg(S[b],p,r)}return _}function Tm(c,f=[],s=[],r="",d=!1){let h=(S,_,b=d,p)=>{let O={relativePath:p===void 0?S.path||"":p,caseSensitive:S.caseSensitive===!0,childrenIndex:_,route:S};if(O.relativePath.startsWith("/")){if(!O.relativePath.startsWith(r)&&b)return;Ne(O.relativePath.startsWith(r),`Absolute route path "${O.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),O.relativePath=O.relativePath.slice(r.length)}let x=qt([r,O.relativePath]),w=s.concat(O);S.children&&S.children.length>0&&(Ne(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Tm(S.children,f,w,x,b)),!(S.path==null&&!S.index)&&f.push({path:x,score:Ug(x,S.index),routesMeta:w})};return c.forEach((S,_)=>{if(S.path===""||!S.path?.includes("?"))h(S,_);else for(let b of Am(S.path))h(S,_,!0,b)}),f}function Am(c){let f=c.split("/");if(f.length===0)return[];let[s,...r]=f,d=s.endsWith("?"),h=s.replace(/\?$/,"");if(r.length===0)return d?[h,""]:[h];let S=Am(r.join("/")),_=[];return _.push(...S.map(b=>b===""?h:[h,b].join("/"))),d&&_.push(...S),_.map(b=>c.startsWith("/")&&b===""?"/":b)}function _g(c){c.sort((f,s)=>f.score!==s.score?s.score-f.score:wg(f.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var Rg=/^:[\w-]+$/,Og=3,Mg=2,jg=1,Dg=10,Cg=-2,hm=c=>c==="*";function Ug(c,f){let s=c.split("/"),r=s.length;return s.some(hm)&&(r+=Cg),f&&(r+=Mg),s.filter(d=>!hm(d)).reduce((d,h)=>d+(Rg.test(h)?Og:h===""?jg:Dg),r)}function wg(c,f){return c.length===f.length&&c.slice(0,-1).every((r,d)=>r===f[d])?c[c.length-1]-f[f.length-1]:0}function Hg(c,f,s=!1){let{routesMeta:r}=c,d={},h="/",S=[];for(let _=0;_<r.length;++_){let b=r[_],p=_===r.length-1,O=h==="/"?f:f.slice(h.length)||"/",x=fu({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},O),w=b.route;if(!x&&p&&s&&!r[r.length-1].route.index&&(x=fu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},O)),!x)return null;Object.assign(d,x.params),S.push({params:d,pathname:qt([h,x.pathname]),pathnameBase:Xg(qt([h,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(h=qt([h,x.pathnameBase]))}return S}function fu(c,f){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[s,r]=Bg(c.path,c.caseSensitive,c.end),d=f.match(s);if(!d)return null;let h=d[0],S=h.replace(/(.)\/+$/,"$1"),_=d.slice(1);return{params:r.reduce((p,{paramName:O,isOptional:x},w)=>{if(O==="*"){let G=_[w]||"";S=h.slice(0,h.length-G.length).replace(/(.)\/+$/,"$1")}const Q=_[w];return x&&!Q?p[O]=void 0:p[O]=(Q||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:S,pattern:c}}function Bg(c,f=!1,s=!0){jt(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let r=[],d="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,_,b,p,O)=>{if(r.push({paramName:_,isOptional:b!=null}),b){let x=O.charAt(p+S.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(r.push({paramName:"*"}),d+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":c!==""&&c!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,f?void 0:"i"),r]}function qg(c){try{return c.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return jt(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),c}}function nl(c,f){if(f==="/")return c;if(!c.toLowerCase().startsWith(f.toLowerCase()))return null;let s=f.endsWith("/")?f.length-1:f.length,r=c.charAt(s);return r&&r!=="/"?null:c.slice(s)||"/"}var Lg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Yg(c,f="/"){let{pathname:s,search:r="",hash:d=""}=typeof c=="string"?Wl(c):c,h;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?h=gm(s.substring(1),"/"):h=gm(s,f)):h=f,{pathname:h,search:Qg(r),hash:Zg(d)}}function gm(c,f){let s=f.replace(/\/+$/,"").split("/");return c.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function qr(c,f,s,r){return`Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gg(c){return c.filter((f,s)=>s===0||f.route.path&&f.route.path.length>0)}function Nm(c){let f=Gg(c);return f.map((s,r)=>r===f.length-1?s.pathname:s.pathnameBase)}function kr(c,f,s,r=!1){let d;typeof c=="string"?d=Wl(c):(d={...c},Ne(!d.pathname||!d.pathname.includes("?"),qr("?","pathname","search",d)),Ne(!d.pathname||!d.pathname.includes("#"),qr("#","pathname","hash",d)),Ne(!d.search||!d.search.includes("#"),qr("#","search","hash",d)));let h=c===""||d.pathname==="",S=h?"/":d.pathname,_;if(S==null)_=s;else{let x=f.length-1;if(!r&&S.startsWith("..")){let w=S.split("/");for(;w[0]==="..";)w.shift(),x-=1;d.pathname=w.join("/")}_=x>=0?f[x]:"/"}let b=Yg(d,_),p=S&&S!=="/"&&S.endsWith("/"),O=(h||S===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(p||O)&&(b.pathname+="/"),b}var qt=c=>c.join("/").replace(/\/\/+/g,"/"),Xg=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),Qg=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,Zg=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c,kg=class{constructor(c,f,s,r=!1){this.status=c,this.statusText=f||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Vg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}function Kg(c){return c.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _m=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rm(c,f){let s=c;if(typeof s!="string"||!Lg.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,d=!1;if(_m)try{let h=new URL(window.location.href),S=s.startsWith("//")?new URL(h.protocol+s):new URL(s),_=nl(S.pathname,f);S.origin===h.origin&&_!=null?s=_+S.search+S.hash:d=!0}catch{jt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Om=["POST","PUT","PATCH","DELETE"];new Set(Om);var Jg=["GET",...Om];new Set(Jg);var Ba=T.createContext(null);Ba.displayName="DataRouter";var su=T.createContext(null);su.displayName="DataRouterState";var $g=T.createContext(!1),Mm=T.createContext({isTransitioning:!1});Mm.displayName="ViewTransition";var Wg=T.createContext(new Map);Wg.displayName="Fetchers";var Fg=T.createContext(null);Fg.displayName="Await";var _t=T.createContext(null);_t.displayName="Navigation";var qn=T.createContext(null);qn.displayName="Location";var Lt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Vr=T.createContext(null);Vr.displayName="RouteError";var jm="REACT_ROUTER_ERROR",Ig="REDIRECT",Pg="ROUTE_ERROR_RESPONSE";function ep(c){if(c.startsWith(`${jm}:${Ig}:{`))try{let f=JSON.parse(c.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function tp(c){if(c.startsWith(`${jm}:${Pg}:{`))try{let f=JSON.parse(c.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new kg(f.status,f.statusText,f.data)}catch{}}function lp(c,{relative:f}={}){Ne(Ln(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=T.useContext(_t),{hash:d,pathname:h,search:S}=Yn(c,{relative:f}),_=h;return s!=="/"&&(_=h==="/"?s:qt([s,h])),r.createHref({pathname:_,search:S,hash:d})}function Ln(){return T.useContext(qn)!=null}function il(){return Ne(Ln(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(qn).location}var Dm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cm(c){T.useContext(_t).static||T.useLayoutEffect(c)}function Kr(){let{isDataRoute:c}=T.useContext(Lt);return c?pp():ap()}function ap(){Ne(Ln(),"useNavigate() may be used only in the context of a <Router> component.");let c=T.useContext(Ba),{basename:f,navigator:s}=T.useContext(_t),{matches:r}=T.useContext(Lt),{pathname:d}=il(),h=JSON.stringify(Nm(r)),S=T.useRef(!1);return Cm(()=>{S.current=!0}),T.useCallback((b,p={})=>{if(jt(S.current,Dm),!S.current)return;if(typeof b=="number"){s.go(b);return}let O=kr(b,JSON.parse(h),d,p.relative==="path");c==null&&f!=="/"&&(O.pathname=O.pathname==="/"?f:qt([f,O.pathname])),(p.replace?s.replace:s.push)(O,p.state,p)},[f,s,h,d,c])}T.createContext(null);function np(){let{matches:c}=T.useContext(Lt),f=c[c.length-1];return f?f.params:{}}function Yn(c,{relative:f}={}){let{matches:s}=T.useContext(Lt),{pathname:r}=il(),d=JSON.stringify(Nm(s));return T.useMemo(()=>kr(c,JSON.parse(d),r,f==="path"),[c,d,r,f])}function ip(c,f){return Um(c,f)}function Um(c,f,s){Ne(Ln(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=T.useContext(_t),{matches:d}=T.useContext(Lt),h=d[d.length-1],S=h?h.params:{},_=h?h.pathname:"/",b=h?h.pathnameBase:"/",p=h&&h.route;{let H=p&&p.path||"";Hm(_,!p||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let O=il(),x;if(f){let H=typeof f=="string"?Wl(f):f;Ne(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),x=H}else x=O;let w=x.pathname||"/",Q=w;if(b!=="/"){let H=b.replace(/^\//,"").split("/");Q="/"+w.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=zm(c,{pathname:Q});jt(p||G!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),jt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=fp(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},S,H.params),pathname:qt([b,r.encodeLocation?r.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:qt([b,r.encodeLocation?r.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),d,s);return f&&Y?T.createElement(qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},Y):Y}function up(){let c=gp(),f=Vg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),s=c instanceof Error?c.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},S=null;return console.error("Error handled by React Router default ErrorBoundary:",c),S=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:h},"ErrorBoundary")," or"," ",T.createElement("code",{style:h},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},f),s?T.createElement("pre",{style:d},s):null,S)}var cp=T.createElement(up,null),wm=class extends T.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,f){return f.location!==c.location||f.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:f.error,location:f.location,revalidation:c.revalidation||f.revalidation}}componentDidCatch(c,f){this.props.onError?this.props.onError(c,f):console.error("React Router caught the following error during render",c)}render(){let c=this.state.error;if(this.context&&typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){const s=tp(c.digest);s&&(c=s)}let f=c!==void 0?T.createElement(Lt.Provider,{value:this.props.routeContext},T.createElement(Vr.Provider,{value:c,children:this.props.component})):this.props.children;return this.context?T.createElement(rp,{error:c},f):f}};wm.contextType=$g;var Lr=new WeakMap;function rp({children:c,error:f}){let{basename:s}=T.useContext(_t);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let r=ep(f.digest);if(r){let d=Lr.get(f);if(d)throw d;let h=Rm(r.location,s);if(_m&&!Lr.get(f))if(h.isExternal||r.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const S=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:r.replace}));throw Lr.set(f,S),S}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return c}function op({routeContext:c,match:f,children:s}){let r=T.useContext(Ba);return r&&r.static&&r.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=f.route.id),T.createElement(Lt.Provider,{value:c},s)}function fp(c,f=[],s){let r=s?.state;if(c==null){if(!r)return null;if(r.errors)c=r.matches;else if(f.length===0&&!r.initialized&&r.matches.length>0)c=r.matches;else return null}let d=c,h=r?.errors;if(h!=null){let O=d.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);Ne(O>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,O+1))}let S=!1,_=-1;if(s&&r){S=r.renderFallback;for(let O=0;O<d.length;O++){let x=d[O];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(_=O),x.route.id){let{loaderData:w,errors:Q}=r,G=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!Q||Q[x.route.id]===void 0);if(x.route.lazy||G){s.isStatic&&(S=!0),_>=0?d=d.slice(0,_+1):d=[d[0]];break}}}}let b=s?.onError,p=r&&b?(O,x)=>{b(O,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Kg(r.matches),errorInfo:x})}:void 0;return d.reduceRight((O,x,w)=>{let Q,G=!1,Y=null,H=null;r&&(Q=h&&x.route.id?h[x.route.id]:void 0,Y=x.route.errorElement||cp,S&&(_<0&&w===0?(Hm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,H=null):_===w&&(G=!0,H=x.route.hydrateFallbackElement||null)));let $=f.concat(d.slice(0,w+1)),Z=()=>{let L;return Q?L=Y:G?L=H:x.route.Component?L=T.createElement(x.route.Component,null):x.route.element?L=x.route.element:L=O,T.createElement(op,{match:x,routeContext:{outlet:O,matches:$,isDataRoute:r!=null},children:L})};return r&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?T.createElement(wm,{location:r.location,revalidation:r.revalidation,component:Y,error:Q,children:Z(),routeContext:{outlet:null,matches:$,isDataRoute:!0},onError:p}):Z()},null)}function Jr(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sp(c){let f=T.useContext(Ba);return Ne(f,Jr(c)),f}function dp(c){let f=T.useContext(su);return Ne(f,Jr(c)),f}function mp(c){let f=T.useContext(Lt);return Ne(f,Jr(c)),f}function $r(c){let f=mp(c),s=f.matches[f.matches.length-1];return Ne(s.route.id,`${c} can only be used on routes that contain a unique "id"`),s.route.id}function hp(){return $r("useRouteId")}function gp(){let c=T.useContext(Vr),f=dp("useRouteError"),s=$r("useRouteError");return c!==void 0?c:f.errors?.[s]}function pp(){let{router:c}=sp("useNavigate"),f=$r("useNavigate"),s=T.useRef(!1);return Cm(()=>{s.current=!0}),T.useCallback(async(d,h={})=>{jt(s.current,Dm),s.current&&(typeof d=="number"?await c.navigate(d):await c.navigate(d,{fromRouteId:f,...h}))},[c,f])}var pm={};function Hm(c,f,s){!f&&!pm[c]&&(pm[c]=!0,jt(!1,s))}T.memo(vp);function vp({routes:c,future:f,state:s,isStatic:r,onError:d}){return Um(c,void 0,{state:s,isStatic:r,onError:d})}function wa(c){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yp({basename:c="/",children:f=null,location:s,navigationType:r="POP",navigator:d,static:h=!1,unstable_useTransitions:S}){Ne(!Ln(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let _=c.replace(/^\/*/,"/"),b=T.useMemo(()=>({basename:_,navigator:d,static:h,unstable_useTransitions:S,future:{}}),[_,d,h,S]);typeof s=="string"&&(s=Wl(s));let{pathname:p="/",search:O="",hash:x="",state:w=null,key:Q="default",unstable_mask:G}=s,Y=T.useMemo(()=>{let H=nl(p,_);return H==null?null:{location:{pathname:H,search:O,hash:x,state:w,key:Q,unstable_mask:G},navigationType:r}},[_,p,O,x,w,Q,r,G]);return jt(Y!=null,`<Router basename="${_}"> is not able to match the URL "${p}${O}${x}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:T.createElement(_t.Provider,{value:b},T.createElement(qn.Provider,{children:f,value:Y}))}function bp({children:c,location:f}){return ip(Qr(c),f)}function Qr(c,f=[]){let s=[];return T.Children.forEach(c,(r,d)=>{if(!T.isValidElement(r))return;let h=[...f,d];if(r.type===T.Fragment){s.push.apply(s,Qr(r.props.children,h));return}Ne(r.type===wa,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!r.props.index||!r.props.children,"An index route cannot have child routes.");let S={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(S.children=Qr(r.props.children,h)),s.push(S)}),s}var ru="get",ou="application/x-www-form-urlencoded";function du(c){return typeof HTMLElement<"u"&&c instanceof HTMLElement}function xp(c){return du(c)&&c.tagName.toLowerCase()==="button"}function Sp(c){return du(c)&&c.tagName.toLowerCase()==="form"}function Ep(c){return du(c)&&c.tagName.toLowerCase()==="input"}function zp(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function Tp(c,f){return c.button===0&&(!f||f==="_self")&&!zp(c)}var iu=null;function Ap(){if(iu===null)try{new FormData(document.createElement("form"),0),iu=!1}catch{iu=!0}return iu}var Np=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yr(c){return c!=null&&!Np.has(c)?(jt(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`),null):c}function _p(c,f){let s,r,d,h,S;if(Sp(c)){let _=c.getAttribute("action");r=_?nl(_,f):null,s=c.getAttribute("method")||ru,d=Yr(c.getAttribute("enctype"))||ou,h=new FormData(c)}else if(xp(c)||Ep(c)&&(c.type==="submit"||c.type==="image")){let _=c.form;if(_==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=c.getAttribute("formaction")||_.getAttribute("action");if(r=b?nl(b,f):null,s=c.getAttribute("formmethod")||_.getAttribute("method")||ru,d=Yr(c.getAttribute("formenctype"))||Yr(_.getAttribute("enctype"))||ou,h=new FormData(_,c),!Ap()){let{name:p,type:O,value:x}=c;if(O==="image"){let w=p?`${p}.`:"";h.append(`${w}x`,"0"),h.append(`${w}y`,"0")}else p&&h.append(p,x)}}else{if(du(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ru,r=null,d=ou,S=c}return h&&d==="text/plain"&&(S=h,h=void 0),{action:r,method:s.toLowerCase(),encType:d,formData:h,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wr(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function Rp(c,f,s,r){let d=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${r}`:d.pathname=`${d.pathname}.${r}`:d.pathname==="/"?d.pathname=`_root.${r}`:f&&nl(d.pathname,f)==="/"?d.pathname=`${f.replace(/\/$/,"")}/_root.${r}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${r}`,d}async function Op(c,f){if(c.id in f)return f[c.id];try{let s=await import(c.module);return f[c.id]=s,s}catch(s){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mp(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function jp(c,f,s){let r=await Promise.all(c.map(async d=>{let h=f.routes[d.route.id];if(h){let S=await Op(h,s);return S.links?S.links():[]}return[]}));return wp(r.flat(1).filter(Mp).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function vm(c,f,s,r,d,h){let S=(b,p)=>s[p]?b.route.id!==s[p].route.id:!0,_=(b,p)=>s[p].pathname!==b.pathname||s[p].route.path?.endsWith("*")&&s[p].params["*"]!==b.params["*"];return h==="assets"?f.filter((b,p)=>S(b,p)||_(b,p)):h==="data"?f.filter((b,p)=>{let O=r.routes[b.route.id];if(!O||!O.hasLoader)return!1;if(S(b,p)||_(b,p))return!0;if(b.route.shouldRevalidate){let x=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Dp(c,f,{includeHydrateFallback:s}={}){return Cp(c.map(r=>{let d=f.routes[r.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function Cp(c){return[...new Set(c)]}function Up(c){let f={},s=Object.keys(c).sort();for(let r of s)f[r]=c[r];return f}function wp(c,f){let s=new Set;return new Set(f),c.reduce((r,d)=>{let h=JSON.stringify(Up(d));return s.has(h)||(s.add(h),r.push({key:h,link:d})),r},[])}function Bm(){let c=T.useContext(Ba);return Wr(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function Hp(){let c=T.useContext(su);return Wr(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var Fr=T.createContext(void 0);Fr.displayName="FrameworkContext";function qm(){let c=T.useContext(Fr);return Wr(c,"You must render this element inside a <HydratedRouter> element"),c}function Bp(c,f){let s=T.useContext(Fr),[r,d]=T.useState(!1),[h,S]=T.useState(!1),{onFocus:_,onBlur:b,onMouseEnter:p,onMouseLeave:O,onTouchStart:x}=f,w=T.useRef(null);T.useEffect(()=>{if(c==="render"&&S(!0),c==="viewport"){let Y=$=>{$.forEach(Z=>{S(Z.isIntersecting)})},H=new IntersectionObserver(Y,{threshold:.5});return w.current&&H.observe(w.current),()=>{H.disconnect()}}},[c]),T.useEffect(()=>{if(r){let Y=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(Y)}}},[r]);let Q=()=>{d(!0)},G=()=>{d(!1),S(!1)};return s?c!=="intent"?[h,w,{}]:[h,w,{onFocus:wn(_,Q),onBlur:wn(b,G),onMouseEnter:wn(p,Q),onMouseLeave:wn(O,G),onTouchStart:wn(x,Q)}]:[!1,w,{}]}function wn(c,f){return s=>{c&&c(s),s.defaultPrevented||f(s)}}function qp({page:c,...f}){let{router:s}=Bm(),r=T.useMemo(()=>zm(s.routes,c,s.basename),[s.routes,c,s.basename]);return r?T.createElement(Yp,{page:c,matches:r,...f}):null}function Lp(c){let{manifest:f,routeModules:s}=qm(),[r,d]=T.useState([]);return T.useEffect(()=>{let h=!1;return jp(c,f,s).then(S=>{h||d(S)}),()=>{h=!0}},[c,f,s]),r}function Yp({page:c,matches:f,...s}){let r=il(),{future:d,manifest:h,routeModules:S}=qm(),{basename:_}=Bm(),{loaderData:b,matches:p}=Hp(),O=T.useMemo(()=>vm(c,f,p,h,r,"data"),[c,f,p,h,r]),x=T.useMemo(()=>vm(c,f,p,h,r,"assets"),[c,f,p,h,r]),w=T.useMemo(()=>{if(c===r.pathname+r.search+r.hash)return[];let Y=new Set,H=!1;if(f.forEach(Z=>{let L=h.routes[Z.route.id];!L||!L.hasLoader||(!O.some(ue=>ue.route.id===Z.route.id)&&Z.route.id in b&&S[Z.route.id]?.shouldRevalidate||L.hasClientLoader?H=!0:Y.add(Z.route.id))}),Y.size===0)return[];let $=Rp(c,_,d.unstable_trailingSlashAwareDataRequests,"data");return H&&Y.size>0&&$.searchParams.set("_routes",f.filter(Z=>Y.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[$.pathname+$.search]},[_,d.unstable_trailingSlashAwareDataRequests,b,r,h,O,f,c,S]),Q=T.useMemo(()=>Dp(x,h),[x,h]),G=Lp(x);return T.createElement(T.Fragment,null,w.map(Y=>T.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...s})),Q.map(Y=>T.createElement("link",{key:Y,rel:"modulepreload",href:Y,...s})),G.map(({key:Y,link:H})=>T.createElement("link",{key:Y,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function Gp(...c){return f=>{c.forEach(s=>{typeof s=="function"?s(f):s!=null&&(s.current=f)})}}var Xp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xp&&(window.__reactRouterVersion="7.13.1")}catch{}function Qp({basename:c,children:f,unstable_useTransitions:s,window:r}){let d=T.useRef();d.current==null&&(d.current=Eg({window:r,v5Compat:!0}));let h=d.current,[S,_]=T.useState({action:h.action,location:h.location}),b=T.useCallback(p=>{s===!1?_(p):T.startTransition(()=>_(p))},[s]);return T.useLayoutEffect(()=>h.listen(b),[h,b]),T.createElement(yp,{basename:c,children:f,location:S.location,navigationType:S.action,navigator:h,unstable_useTransitions:s})}var Lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ha=T.forwardRef(function({onClick:f,discover:s="render",prefetch:r="none",relative:d,reloadDocument:h,replace:S,unstable_mask:_,state:b,target:p,to:O,preventScrollReset:x,viewTransition:w,unstable_defaultShouldRevalidate:Q,...G},Y){let{basename:H,navigator:$,unstable_useTransitions:Z}=T.useContext(_t),L=typeof O=="string"&&Lm.test(O),ue=Rm(O,H);O=ue.to;let K=lp(O,{relative:d}),fe=il(),I=null;if(_){let Ce=kr(_,[],fe.unstable_mask?fe.unstable_mask.pathname:"/",!0);H!=="/"&&(Ce.pathname=Ce.pathname==="/"?H:qt([H,Ce.pathname])),I=$.createHref(Ce)}let[Oe,Ve,Dt]=Bp(r,G),gt=Kp(O,{replace:S,unstable_mask:_,state:b,target:p,preventScrollReset:x,relative:d,viewTransition:w,unstable_defaultShouldRevalidate:Q,unstable_useTransitions:Z});function Ke(Ce){f&&f(Ce),Ce.defaultPrevented||gt(Ce)}let Ct=!(ue.isExternal||h),pt=T.createElement("a",{...G,...Dt,href:(Ct?I:void 0)||ue.absoluteURL||K,onClick:Ct?Ke:f,ref:Gp(Y,Ve),target:p,"data-discover":!L&&s==="render"?"true":void 0});return Oe&&!L?T.createElement(T.Fragment,null,pt,T.createElement(qp,{page:K})):pt});Ha.displayName="Link";var Zp=T.forwardRef(function({"aria-current":f="page",caseSensitive:s=!1,className:r="",end:d=!1,style:h,to:S,viewTransition:_,children:b,...p},O){let x=Yn(S,{relative:p.relative}),w=il(),Q=T.useContext(su),{navigator:G,basename:Y}=T.useContext(_t),H=Q!=null&&Ip(x)&&_===!0,$=G.encodeLocation?G.encodeLocation(x).pathname:x.pathname,Z=w.pathname,L=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;s||(Z=Z.toLowerCase(),L=L?L.toLowerCase():null,$=$.toLowerCase()),L&&Y&&(L=nl(L,Y)||L);const ue=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let K=Z===$||!d&&Z.startsWith($)&&Z.charAt(ue)==="/",fe=L!=null&&(L===$||!d&&L.startsWith($)&&L.charAt($.length)==="/"),I={isActive:K,isPending:fe,isTransitioning:H},Oe=K?f:void 0,Ve;typeof r=="function"?Ve=r(I):Ve=[r,K?"active":null,fe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Dt=typeof h=="function"?h(I):h;return T.createElement(Ha,{...p,"aria-current":Oe,className:Ve,ref:O,style:Dt,to:S,viewTransition:_},typeof b=="function"?b(I):b)});Zp.displayName="NavLink";var kp=T.forwardRef(({discover:c="render",fetcherKey:f,navigate:s,reloadDocument:r,replace:d,state:h,method:S=ru,action:_,onSubmit:b,relative:p,preventScrollReset:O,viewTransition:x,unstable_defaultShouldRevalidate:w,...Q},G)=>{let{unstable_useTransitions:Y}=T.useContext(_t),H=Wp(),$=Fp(_,{relative:p}),Z=S.toLowerCase()==="get"?"get":"post",L=typeof _=="string"&&Lm.test(_),ue=K=>{if(b&&b(K),K.defaultPrevented)return;K.preventDefault();let fe=K.nativeEvent.submitter,I=fe?.getAttribute("formmethod")||S,Oe=()=>H(fe||K.currentTarget,{fetcherKey:f,method:I,navigate:s,replace:d,state:h,relative:p,preventScrollReset:O,viewTransition:x,unstable_defaultShouldRevalidate:w});Y&&s!==!1?T.startTransition(()=>Oe()):Oe()};return T.createElement("form",{ref:G,method:Z,action:$,onSubmit:r?b:ue,...Q,"data-discover":!L&&c==="render"?"true":void 0})});kp.displayName="Form";function Vp(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ym(c){let f=T.useContext(Ba);return Ne(f,Vp(c)),f}function Kp(c,{target:f,replace:s,unstable_mask:r,state:d,preventScrollReset:h,relative:S,viewTransition:_,unstable_defaultShouldRevalidate:b,unstable_useTransitions:p}={}){let O=Kr(),x=il(),w=Yn(c,{relative:S});return T.useCallback(Q=>{if(Tp(Q,f)){Q.preventDefault();let G=s!==void 0?s:Bn(x)===Bn(w),Y=()=>O(c,{replace:G,unstable_mask:r,state:d,preventScrollReset:h,relative:S,viewTransition:_,unstable_defaultShouldRevalidate:b});p?T.startTransition(()=>Y()):Y()}},[x,O,w,s,r,d,f,c,h,S,_,b,p])}var Jp=0,$p=()=>`__${String(++Jp)}__`;function Wp(){let{router:c}=Ym("useSubmit"),{basename:f}=T.useContext(_t),s=hp(),r=c.fetch,d=c.navigate;return T.useCallback(async(h,S={})=>{let{action:_,method:b,encType:p,formData:O,body:x}=_p(h,f);if(S.navigate===!1){let w=S.fetcherKey||$p();await r(w,s,S.action||_,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:O,body:x,formMethod:S.method||b,formEncType:S.encType||p,flushSync:S.flushSync})}else await d(S.action||_,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:O,body:x,formMethod:S.method||b,formEncType:S.encType||p,replace:S.replace,state:S.state,fromRouteId:s,flushSync:S.flushSync,viewTransition:S.viewTransition})},[r,d,f,s])}function Fp(c,{relative:f}={}){let{basename:s}=T.useContext(_t),r=T.useContext(Lt);Ne(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),h={...Yn(c||".",{relative:f})},S=il();if(c==null){h.search=S.search;let _=new URLSearchParams(h.search),b=_.getAll("index");if(b.some(O=>O==="")){_.delete("index"),b.filter(x=>x).forEach(x=>_.append("index",x));let O=_.toString();h.search=O?`?${O}`:""}}return(!c||c===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:qt([s,h.pathname])),Bn(h)}function Ip(c,{relative:f}={}){let s=T.useContext(Mm);Ne(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ym("useViewTransitionState"),d=Yn(c,{relative:f});if(!s.isTransitioning)return!1;let h=nl(s.currentLocation.pathname,r)||s.currentLocation.pathname,S=nl(s.nextLocation.pathname,r)||s.nextLocation.pathname;return fu(d.pathname,S)!=null||fu(d.pathname,h)!=null}const Gm=T.createContext(),Pp=({children:c})=>{const[f,s]=T.useState(!1),r=()=>{s(!f)};return m.jsx(Gm.Provider,{value:{isDark:f,toggleTheme:r},children:c})},qa=()=>{const c=T.useContext(Gm);if(!c)throw new Error("useTheme debe usarse dentro de ThemeProvider");return c};const Xm=(...c)=>c.filter((f,s,r)=>!!f&&f.trim()!==""&&r.indexOf(f)===s).join(" ").trim();const ev=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const tv=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,s,r)=>r?r.toUpperCase():s.toLowerCase());const ym=c=>{const f=tv(c);return f.charAt(0).toUpperCase()+f.slice(1)};var lv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const av=c=>{for(const f in c)if(f.startsWith("aria-")||f==="role"||f==="title")return!0;return!1};const nv=T.forwardRef(({color:c="currentColor",size:f=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:d="",children:h,iconNode:S,..._},b)=>T.createElement("svg",{ref:b,...lv,width:f,height:f,stroke:c,strokeWidth:r?Number(s)*24/Number(f):s,className:Xm("lucide",d),...!h&&!av(_)&&{"aria-hidden":"true"},..._},[...S.map(([p,O])=>T.createElement(p,O)),...Array.isArray(h)?h:[h]]));const Fe=(c,f)=>{const s=T.forwardRef(({className:r,...d},h)=>T.createElement(nv,{ref:h,iconNode:f,className:Xm(`lucide-${ev(ym(c))}`,`lucide-${c}`,r),...d}));return s.displayName=ym(c),s};const iv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],uv=Fe("arrow-left",iv);const cv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],rv=Fe("chevron-left",cv);const ov=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fv=Fe("chevron-right",ov);const sv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],dv=Fe("external-link",sv);const mv=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],hv=Fe("grid-2x2",mv);const gv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],bm=Fe("grid-3x3",gv);const pv=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],vv=Fe("hash",pv);const yv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],xm=Fe("map-pin",yv);const bv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],xv=Fe("menu",bv);const Sv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Sm=Fe("message-circle",Sv);const Ev=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],zv=Fe("moon",Ev);const Tv=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Av=Fe("navigation",Tv);const Nv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Em=Fe("search",Nv);const _v=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Rv=Fe("sun",_v);const Ov=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hn=Fe("x",Ov),Mv=`
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
`,Gr=[{label:"Inicio",to:"/",type:"link"},{label:"Galería",to:"/galeria",type:"link"},{label:"Ubícanos",to:"/ubicacion",type:"link"},{label:"Buscar",to:"/buscar",type:"link"}],jv=()=>{const{isDark:c,toggleTheme:f}=qa(),s=il(),[r,d]=T.useState(0),[h,S]=T.useState({}),[_,b]=T.useState(!1),p=T.useRef([]);T.useEffect(()=>{const x=Gr.findIndex(w=>w.type==="link"&&w.to===s.pathname);x!==-1&&d(x),b(!1)},[s.pathname]),T.useEffect(()=>{const x=p.current[r];x&&S({left:x.offsetLeft,width:x.offsetWidth})},[r]),T.useEffect(()=>{const x=()=>{window.innerWidth>=768&&b(!1)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const O=x=>{d(x),b(!1)};return m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:`nb-root ${c?"":"light"}`,children:[m.jsx("style",{children:Mv}),m.jsxs("nav",{className:"nb-bar",children:[m.jsxs(Ha,{to:"/",className:"nb-logo",onClick:()=>d(0),children:[m.jsxs("span",{className:"nb-logo-text",children:["🎉 Decoraciones ",m.jsx("br",{})," Andrea"]}),m.jsx("span",{className:"nb-logo-dot"})]}),m.jsxs("div",{className:"nb-links",children:[Gr.map((x,w)=>{const Q=`nb-link${r===w?" active":""}`;return x.type==="link"?m.jsx(Ha,{to:x.to,ref:G=>p.current[w]=G,className:Q,onClick:()=>d(w),children:x.label},x.label):m.jsx("a",{href:x.href,ref:G=>p.current[w]=G,className:Q,onClick:()=>O(w),children:x.label},x.label)}),m.jsx("span",{className:"nb-indicator",style:h})]}),m.jsx("div",{className:"nb-spacer"}),m.jsxs("div",{className:"nb-actions",children:[m.jsxs("a",{href:"https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento.",target:"_blank",rel:"noreferrer",className:"nb-wa",children:[m.jsx(Sm,{size:15}),m.jsx("span",{className:"nb-wa-label",children:"WhatsApp"})]}),m.jsx("button",{className:"nb-theme",onClick:f,"aria-label":"Cambiar tema",children:c?m.jsx(Rv,{size:16}):m.jsx(zv,{size:16})}),m.jsx("button",{className:"nb-burger",onClick:()=>b(x=>!x),"aria-label":_?"Cerrar menú":"Abrir menú","aria-expanded":_,children:_?m.jsx(Hn,{size:16}):m.jsx(xv,{size:16})})]})]}),m.jsx("div",{className:`nb-drawer${_?" open":""}`,"aria-hidden":!_,children:m.jsxs("div",{className:"nb-drawer-inner",children:[Gr.map((x,w)=>{const Q=`nb-drawer-link${r===w?" active":""}`;return x.type==="link"?m.jsx(Ha,{to:x.to,className:Q,onClick:()=>{d(w),b(!1)},children:x.label},x.label):m.jsx("a",{href:x.href,className:Q,onClick:()=>O(w),children:x.label},x.label)}),m.jsx("div",{className:"nb-drawer-divider"}),m.jsxs("a",{href:"https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento.",target:"_blank",rel:"noreferrer",className:"nb-drawer-wa",onClick:()=>b(!1),children:[m.jsx(Sm,{size:16}),"WhatsApp"]})]})}),_&&m.jsx("div",{className:"nb-backdrop",onClick:()=>b(!1)})]}),m.jsx("div",{className:"nb-page-spacer"})]})},Dv="17JmBJicJCXvo28yABnLmJ_joDHq5xe9b",Cv="AIzaSyD2pXYJFlu73Pd2QXNLT-CXw_5erDBThP8",mu=async()=>{try{const c=`'${Dv}' in parents and trashed = false and mimeType contains 'image/'`,s=`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(c)}&fields=${encodeURIComponent("files(id, name)")}&key=${Cv}`,d=await(await fetch(s)).json();return d.error?(console.error("Error en Google Drive API:",d.error),[]):d.files.map(h=>({id:h.id,name:h.name,url:`https://lh3.googleusercontent.com/u/0/d/${h.id}=w1000-h1000`}))}catch(c){return console.error("Error fetching eventos:",c),[]}},uu=`
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
`,Uv=()=>{const c=Kr(),{isDark:f}=qa(),[s,r]=T.useState([]),[d,h]=T.useState(!0),[S,_]=T.useState(null),[b,p]=T.useState(0),[O,x]=T.useState(0),[w,Q]=T.useState(0);T.useEffect(()=>{(async()=>{try{h(!0);const L=await mu();r(L||[])}catch(L){_(L.message)}finally{h(!1)}})()},[]),T.useEffect(()=>{const Z=L=>{L.key==="ArrowDown"||L.key==="ArrowRight"?(L.preventDefault(),p(ue=>(ue+1)%s.length)):(L.key==="ArrowUp"||L.key==="ArrowLeft")&&(L.preventDefault(),p(ue=>(ue-1+s.length)%s.length))};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[s.length]);const G=Z=>x(Z.targetTouches[0].clientX),Y=Z=>{const L=Z.changedTouches[0].clientX;Q(L);const ue=O-L;ue>50&&p(K=>(K+1)%s.length),ue<-50&&p(K=>(K-1+s.length)%s.length)};if(d)return m.jsxs("div",{className:`gl-root ${f?"":"light"}`,children:[m.jsx("style",{children:uu}),m.jsxs("div",{className:"gl-state",children:[m.jsx("div",{className:"gl-spinner"}),m.jsx("p",{children:"Cargando galería..."})]})]});if(S)return m.jsxs("div",{className:`gl-root ${f?"":"light"}`,children:[m.jsx("style",{children:uu}),m.jsx("div",{className:"gl-state",children:m.jsxs("p",{style:{color:"#ff6b6b"},children:["Error: ",S]})})]});if(!s.length)return m.jsxs("div",{className:`gl-root ${f?"":"light"}`,children:[m.jsx("style",{children:uu}),m.jsx("div",{className:"gl-state",children:m.jsx("p",{children:"No hay eventos disponibles"})})]});const H=s[b],$=(b+1)/s.length*100;return m.jsxs("div",{className:`gl-root ${f?"":"light"}`,children:[m.jsx("style",{children:uu}),m.jsxs("div",{className:"gl-card",onClick:()=>c(`/evento/${H.id}`),onTouchStart:G,onTouchEnd:Y,role:"region","aria-label":`Imagen ${b+1} de ${s.length}: ${H.name}`,children:[m.jsxs("div",{className:"gl-img-wrap",children:[m.jsx("img",{src:`https://lh3.googleusercontent.com/d/${H.id}`,alt:H.name.replace(/\.[^/.]+$/,"")||"Imagen del evento",onError:Z=>{Z.target.style.display="none"}}),m.jsx("div",{className:"gl-img-overlay"}),m.jsx("div",{className:"gl-img-line"})]}),m.jsxs("div",{className:"gl-footer",children:[m.jsx("h3",{className:"gl-name",children:H.name.replace(/\.[^/.]+$/,"")||"Imagen"}),m.jsxs("div",{className:"gl-counter-pill",children:[m.jsx("span",{children:b+1})," / ",s.length]})]})]},H.id),m.jsxs("div",{className:"gl-controls",children:[m.jsxs("div",{className:"gl-nav",children:[m.jsx("button",{className:"gl-nav-btn",onClick:()=>p(Z=>(Z-1+s.length)%s.length),"aria-label":"Anterior",children:m.jsx(rv,{size:20})}),m.jsx("div",{className:"gl-progress-wrap",children:m.jsx("div",{className:"gl-progress-bar",style:{width:`${$}%`}})}),m.jsx("button",{className:"gl-nav-btn",onClick:()=>p(Z=>(Z+1)%s.length),"aria-label":"Siguiente",children:m.jsx(fv,{size:20})})]}),m.jsx("div",{className:"gl-dots",role:"tablist",children:s.map((Z,L)=>m.jsx("button",{className:`gl-dot${L===b?" active":""}`,onClick:()=>p(L),"aria-label":`Ir a imagen ${L+1}`,"aria-current":L===b?"true":"false",role:"tab"},L))}),m.jsxs("p",{className:"gl-hint",children:[m.jsx("span",{className:"sm-only-hide",children:"← → para navegar · "}),"Toca la imagen para ver detalles"]})]})]})},wv=`
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
`,Hv=c=>{switch(c%8){case 0:return"gm-tile-2x2";case 3:return"gm-tile-h2";case 6:return"gm-tile-w2";default:return"gm-tile"}},Bv=()=>{const[c,f]=T.useState([]),[s,r]=T.useState(!0),[d,h]=T.useState(null),[S,_]=T.useState(null);T.useEffect(()=>{(async()=>{try{r(!0);const x=await mu();f(x||[])}catch(x){h(x.message)}finally{r(!1)}})()},[]),T.useEffect(()=>{const O=x=>{x.key==="Escape"&&_(null)};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[]);const b=()=>_(null),p=O=>{O.target===O.currentTarget&&b()};return m.jsxs("div",{className:"gm-root",children:[m.jsx("style",{children:wv}),s?m.jsxs("div",{className:"gm-state",children:[m.jsx("div",{className:"gm-spinner"}),m.jsx("p",{children:"Cargando galería..."})]}):d?m.jsx("div",{className:"gm-state",children:m.jsxs("p",{style:{color:"#ff6b6b"},children:["Error: ",d]})}):c.length?m.jsx("div",{className:"gm-grid",children:c.map((O,x)=>{const w=Hv(x),Q=w!=="gm-tile";return m.jsxs("div",{className:w,onClick:()=>_(O),role:"button","aria-label":O.name.replace(/\.[^/.]+$/,"")||"Imagen",children:[m.jsx("img",{src:`https://lh3.googleusercontent.com/d/${O.id}`,alt:O.name,loading:"lazy",onError:G=>{G.target.style.display="none"}}),m.jsx("div",{className:"gm-overlay"}),Q&&m.jsx("div",{className:"gm-label",children:m.jsx("h3",{children:O.name.replace(/\.[^/.]+$/,"")||"Imagen"})}),m.jsx("div",{className:"gm-line"})]},O.id)})}):m.jsx("div",{className:"gm-state",children:m.jsx("p",{children:"No hay eventos disponibles"})}),S&&m.jsxs("div",{className:"lb-bg",onClick:p,children:[m.jsx("button",{className:"lb-close",onClick:b,"aria-label":"Cerrar",children:m.jsx(Hn,{size:18})}),m.jsxs("div",{className:"lb-body",children:[m.jsx("img",{src:`https://lh3.googleusercontent.com/d/${S.id}`,alt:S.name,onClick:O=>O.stopPropagation()}),m.jsxs("div",{className:"lb-info",children:[m.jsx("h2",{children:S.name.replace(/\.[^/.]+$/,"")||"Imagen"}),m.jsx("p",{className:"lb-hint",children:"ESC o clic afuera para cerrar"})]})]})]})]})},qv=`
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
`,Lv=()=>{const{id:c}=np(),{isDark:f}=qa(),[s,r]=T.useState(null),[d,h]=T.useState(!0);return T.useEffect(()=>{(async()=>{try{h(!0);const b=(await mu()).find(p=>p.id===c);r(b||null)}catch(_){console.error("Error loading evento:",_)}finally{h(!1)}})()},[c]),m.jsxs("div",{className:`ed-root ${f?"":"light"}`,children:[m.jsx("style",{children:qv}),m.jsx("div",{className:"ed-topbar",children:m.jsx("div",{className:"ed-topbar-inner",children:m.jsxs(Ha,{to:"/",className:"ed-back",children:[m.jsx(uv,{size:15}),"Volver a Galería"]})})}),m.jsx("main",{className:"ed-main",children:d?m.jsxs("div",{className:"ed-state",children:[m.jsx("div",{className:"ed-spinner"}),m.jsx("p",{className:"ed-state-label",children:"Cargando evento..."})]}):s?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"ed-img-panel",children:[m.jsx("img",{src:`https://lh3.googleusercontent.com/d/${c}`,alt:s.name,onError:S=>{S.target.style.display="none"}}),m.jsx("div",{className:"ed-img-accent"})]}),m.jsxs("div",{className:"ed-info",children:[m.jsx("span",{className:"ed-tag",children:"Evento"}),m.jsx("h1",{className:"ed-title",children:s.name.replace(/\.[^/.]+$/,"")||"Evento sin nombre"}),m.jsx("div",{className:"ed-divider"}),m.jsx("p",{className:"ed-desc",children:"Aquí puedes agregar más información sobre este evento, como descripción, detalles de decoración, contacto, y más."}),m.jsx("div",{className:"ed-meta",children:m.jsxs("div",{className:"ed-meta-row",children:[m.jsx("div",{className:"ed-meta-icon",children:m.jsx(vv,{size:13})}),m.jsxs("div",{children:[m.jsx("p",{className:"ed-meta-key",children:"ID del evento"}),m.jsx("p",{className:"ed-meta-val",children:c})]})]})})]})]}):m.jsxs("div",{className:"ed-state",children:[m.jsx("p",{className:"ed-notfound",children:"Evento no encontrado"}),m.jsx("p",{className:"ed-state-label",children:"El ID solicitado no existe en la galería"})]})})]})},Yv=`
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
`,Gv=()=>{const c=Kr(),{isDark:f}=qa(),[s,r]=T.useState([]),[d,h]=T.useState(!0),[S,_]=T.useState(null),[b,p]=T.useState(""),[O,x]=T.useState(!1),[w,Q]=T.useState(null),[G,Y]=T.useState(3);T.useEffect(()=>{(async()=>{try{h(!0);const fe=await mu();r(fe||[])}catch(fe){_(fe.message)}finally{h(!1)}})()},[]),T.useEffect(()=>{const K=fe=>{fe.key==="Escape"&&Q(null)};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[]);const H=s.filter(K=>K.name.toLowerCase().includes(b.toLowerCase())),$=()=>{p(""),x(!1)},Z=()=>Q(null),L=K=>{K.target===K.currentTarget&&Z()},ue=K=>{K.key==="Enter"&&x(!0)};return m.jsxs("div",{className:`search-root ${f?"":"light"}`,children:[m.jsx("style",{children:Yv}),m.jsx("div",{className:"sh-header",children:m.jsxs("div",{className:"sh-inner",children:[m.jsxs("h1",{className:"sh-title",children:["Buscar ",m.jsx("span",{children:"Eventos"})]}),m.jsxs("div",{className:"sb-wrap",children:[m.jsx("span",{className:"sb-icon",children:m.jsx(Em,{size:18})}),m.jsx("input",{type:"text",className:"sb-input",placeholder:"Escribe un nombre o Enter para ver todos...",value:b,onChange:K=>{p(K.target.value),K.target.value!==""&&x(!1)},onKeyDown:ue,autoFocus:!0}),(b||O)&&m.jsx("button",{className:"sb-clear",onClick:$,"aria-label":"Limpiar búsqueda",children:m.jsx(Hn,{size:14})})]}),(b||O)&&m.jsxs("div",{className:"sh-toolbar",children:[m.jsxs("p",{className:"sh-count",children:[m.jsx("strong",{children:H.length})," ","resultado",H.length!==1?"s":""]}),H.length>0&&m.jsxs("div",{className:"cols-group",children:[m.jsx("span",{className:"cols-label",children:"Vista"}),[{n:2,Icon:hv},{n:3,Icon:bm},{n:4,Icon:bm}].map(({n:K,Icon:fe})=>m.jsx("button",{className:`col-btn${G===K?" active":""}`,onClick:()=>Y(K),"aria-label":`${K} columnas`,title:`${K} columnas`,children:m.jsx(fe,{size:15})},K))]})]})]})}),m.jsx("main",{className:"sm-main",children:d?m.jsxs("div",{className:"se-state",children:[m.jsx("div",{className:"sg-spinner"}),m.jsx("p",{className:"se-sub",children:"Cargando eventos..."})]}):S?m.jsx("div",{className:"se-state",children:m.jsxs("p",{className:"se-title",style:{color:"#ff6b6b"},children:["Error: ",S]})}):!b&&!O?m.jsxs("div",{className:"se-state",children:[m.jsx("div",{className:"se-icon",children:m.jsx(Em,{size:22})}),m.jsx("p",{className:"se-title",children:"Empieza a buscar"}),m.jsxs("p",{className:"se-sub",children:["Escribe el nombre de un evento o presiona ",m.jsx("b",{children:"Enter"})," para ver todo el catálogo"]})]}):H.length===0?m.jsxs("div",{className:"se-state",children:[m.jsx("div",{className:"se-icon",children:m.jsx(Hn,{size:22})}),m.jsx("p",{className:"se-title",children:"Sin resultados"}),m.jsxs("p",{className:"se-sub",children:['No encontramos nada para "',b,'"']}),m.jsx("button",{className:"se-btn",onClick:$,children:"Limpiar búsqueda"})]}):m.jsx("div",{className:"sg-grid",style:{gridTemplateColumns:`repeat(${G}, minmax(0, 1fr))`},children:H.map(K=>m.jsxs("div",{className:"sc-card",onClick:()=>Q(K),children:[m.jsx("img",{src:`https://lh3.googleusercontent.com/d/${K.id}`,alt:K.name,onError:fe=>{fe.target.style.display="none"}}),m.jsx("div",{className:"sc-overlay"}),m.jsx("div",{className:"sc-label",children:m.jsx("h3",{children:K.name.replace(/\.[^/.]+$/,"")||"Imagen"})})]},K.id))})}),w&&m.jsxs("div",{className:"slb-bg",onClick:L,children:[m.jsx("button",{className:"slb-close",onClick:Z,"aria-label":"Cerrar",children:m.jsx(Hn,{size:20})}),m.jsxs("div",{className:"slb-body",children:[m.jsx("img",{src:`https://lh3.googleusercontent.com/d/${w.id}`,alt:w.name,onClick:K=>K.stopPropagation()}),m.jsxs("div",{className:"slb-info",children:[m.jsx("h2",{children:w.name.replace(/\.[^/.]+$/,"")||"Imagen"}),m.jsxs("div",{className:"slb-actions",children:[m.jsx("button",{className:"slb-btn-primary",onClick:()=>c(`/evento/${w.id}`),children:"Ver detalles"}),m.jsx("button",{className:"slb-btn-sec",onClick:Z,children:"Cerrar"})]}),m.jsx("p",{className:"slb-hint",children:"ESC o clic afuera para cerrar"})]})]})]})]})},Xv=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .loc-root {
    /* MODO OSCURO */
    --bg: #0f0a1f;        
    --bg2: #18112e;       
    --bg3: #231942;       
    --border: rgba(168, 85, 247, 0.15);
    --accent: #c084fc;    
    --accent2: #9333ea;
    --text: #fdfaef;      
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);

    font-family: 'DM Sans', sans-serif;
    background: var(--bg); /* Esto ahora cubrirá el fondo */
    color: var(--text);
    width: 100%;
    min-height: 100vh; /* IMPORTANTE: Para que el color cubra toda la pantalla */
    padding: 48px 24px 64px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* MODO CLARO */
  .loc-root.light {
    --bg: #fdfcff;        
    --bg2: #ffffff;       
    --bg3: #f3e8ff;       
    --border: rgba(147, 51, 234, 0.15); 
    --accent: #9333ea;    
    --accent2: #c084fc;
    --text: #2e1065;      
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .loc-root * { box-sizing: border-box; }

  /* Header */
  .loc-header {
    max-width: 900px;
    margin: 0 auto 28px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
  
  .loc-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .loc-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 800;
    color: var(--text);
    margin: 0;
  }

  .loc-subtitle {
    font-size: 0.88rem;
    color: var(--text2);
    margin: 6px 0 0;
  }

  .loc-directions {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border: 1.5px solid var(--border);
    border-radius: 9px;
    color: var(--accent);
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .loc-directions:hover {
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    border-color: var(--accent);
  }

  .loc-card {
    max-width: 900px;
    margin: 0 auto;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--bg2);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .loc-map {
    width: 100%;
    height: 380px;
    background: var(--bg3);
  }

  .loc-map iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    transition: filter 0.3s ease;
  }
  
  /* Filtro oscuro para el mapa (se quita en modo claro) */
  .loc-root:not(.light) .loc-map iframe {
    filter: invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85);
  }

  .loc-separator {
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2), transparent);
  }

  .loc-ref-label {
    padding: 12px 18px 10px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text3);
    border-bottom: 1px solid var(--border);
  }

  .loc-ref-img-wrap {
    height: 200px;
    position: relative;
    background: var(--bg3);
    overflow: hidden;
  }

  .loc-ref-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loc-address-bar {
    padding: 15px 18px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .loc-address-icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    display: flex; align-items: center; justify-content: center;
    color: var(--accent);
  }

  .loc-address-text {
    font-size: 0.85rem;
    color: var(--text2);
  }

  .loc-address-text strong {
    display: block;
    font-size: 0.75rem;
    color: var(--text3);
    text-transform: uppercase;
  }
`,cu={mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2!2d-77.0282!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDEnNDEuNSJX!5e0!3m2!1ses!2spe!4v1234567890",directionsUrl:"https://maps.google.com/?q=Decoraciones+Andrea",address:"Av. Ejemplo 123, Lima, Perú",refImage:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80"},Qv=()=>{const{isDark:c}=qa();return m.jsxs("div",{className:`loc-root ${c?"":"light"}`,children:[m.jsx("style",{children:Xv}),m.jsxs("div",{className:"loc-header",children:[m.jsxs("div",{className:"loc-title-group",children:[m.jsxs("div",{className:"loc-tag",children:[m.jsx(xm,{size:11})," Ubicación"]}),m.jsx("h2",{className:"loc-title",children:"Encuéntranos"}),m.jsx("p",{className:"loc-subtitle",children:"Visítanos en nuestro taller de Lima"})]}),m.jsxs("a",{href:cu.directionsUrl,target:"_blank",rel:"noreferrer",className:"loc-directions",children:[m.jsx(Av,{size:14})," Cómo llegar ",m.jsx(dv,{size:12})]})]}),m.jsxs("div",{className:"loc-card",children:[m.jsx("div",{className:"loc-map",children:m.jsx("iframe",{src:cu.mapSrc,title:"Mapa"})}),m.jsx("div",{className:"loc-separator"}),m.jsx("div",{className:"loc-ref-label",children:"Referencia del local"}),m.jsx("div",{className:"loc-ref-img-wrap",children:m.jsx("img",{src:cu.refImage,alt:"Local"})}),m.jsxs("div",{className:"loc-address-bar",children:[m.jsx("div",{className:"loc-address-icon",children:m.jsx(xm,{size:16})}),m.jsxs("div",{className:"loc-address-text",children:[m.jsx("strong",{children:"Dirección"}),cu.address]})]})]})]})},Zv=`
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
`;function kv(){const{isDark:c}=qa();return T.useEffect(()=>{document.documentElement.classList.toggle("dark",c)},[c]),m.jsxs("div",{className:`app-root ${c?"":"light"}`,children:[m.jsx("style",{children:Zv}),m.jsx(jv,{}),m.jsx("div",{style:{paddingTop:"64px"},children:m.jsxs(bp,{children:[m.jsx(wa,{path:"/",element:m.jsxs(m.Fragment,{children:[m.jsxs("header",{className:"app-hero",children:[m.jsxs("h1",{children:["Decoraciones ",m.jsx("span",{children:"Andrea"})]}),m.jsx("p",{children:"Transformando tus momentos en recuerdos inolvidables"})]}),m.jsx("main",{className:"app-main",children:m.jsx(Uv,{})})]})}),m.jsx(wa,{path:"/galeria",element:m.jsx("main",{className:"app-main",children:m.jsx(Bv,{})})}),m.jsx(wa,{path:"/buscar",element:m.jsx(Gv,{})}),m.jsx(wa,{path:"/ubicacion",element:m.jsx(Qv,{})}),m.jsx(wa,{path:"/evento/:id",element:m.jsx(Lv,{})})]})}),m.jsx("footer",{className:"app-footer",children:m.jsxs("p",{children:["© 2026 Decoraciones ",m.jsx("span",{children:"Andrea"})]})})]})}Sg.createRoot(document.getElementById("root")).render(m.jsx(T.StrictMode,{children:m.jsx(Pp,{children:m.jsx(Qp,{children:m.jsx(kv,{})})})}));
