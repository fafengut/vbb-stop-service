import{j as fr}from"./index.81b87fab.js";const Rt="/vbb-stop-service/assets/favorite_white.4da7a166.svg",yt="/vbb-stop-service/assets/favorite_border.5c03916e.svg",wt="/vbb-stop-service/assets/S-Bahn-Logo.07d0a618.svg",Ot="/vbb-stop-service/assets/U-Bahnlogo_Berlin.6735bc73.png",_t="/vbb-stop-service/assets/Tram-Logo.e8673a57.svg",At="/vbb-stop-service/assets/BUS-Logo-BVG.909f978b.svg",St="/vbb-stop-service/assets/Faehre-Signet_VBB.999f2544.svg",Ct="/vbb-stop-service/assets/Signet_Fernverkehr_VBB.227de6a8.svg",xt="/vbb-stop-service/assets/VBB_Bahn-Regionalverkehr.c62d03dc.svg";function lr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Me={exports:{}},oe={exports:{}},He=function(r,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return r.apply(t,n)}},cr=He,ue=Object.prototype.toString,fe=function(e){return function(r){var t=ue.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function _(e){return e=e.toLowerCase(),function(t){return fe(t)===e}}function le(e){return Array.isArray(e)}function F(e){return typeof e>"u"}function dr(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Ve=_("ArrayBuffer");function hr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Ve(e.buffer),r}function pr(e){return typeof e=="string"}function vr(e){return typeof e=="number"}function Je(e){return e!==null&&typeof e=="object"}function q(e){if(fe(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var mr=_("Date"),Er=_("File"),br=_("Blob"),Rr=_("FileList");function ce(e){return ue.call(e)==="[object Function]"}function yr(e){return Je(e)&&ce(e.pipe)}function wr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ue.call(e)===r||ce(e.toString)&&e.toString()===r)}var Or=_("URLSearchParams");function _r(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Ar(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function de(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),le(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function ae(){var e={};function r(n,s){q(e[s])&&q(n)?e[s]=ae(e[s],n):q(n)?e[s]=ae({},n):le(n)?e[s]=n.slice():e[s]=n}for(var t=0,i=arguments.length;t<i;t++)de(arguments[t],r);return e}function Sr(e,r,t){return de(r,function(n,s){t&&typeof n=="function"?e[s]=cr(n,t):e[s]=n}),e}function Cr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function xr(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Tr(e,r,t){var i,n,s,a={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)s=i[n],a[s]||(r[s]=e[s],a[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Pr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function gr(e){if(!e)return null;var r=e.length;if(F(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Nr=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:le,isArrayBuffer:Ve,isBuffer:dr,isFormData:wr,isArrayBufferView:hr,isString:pr,isNumber:vr,isObject:Je,isPlainObject:q,isUndefined:F,isDate:mr,isFile:Er,isBlob:br,isFunction:ce,isStream:yr,isURLSearchParams:Or,isStandardBrowserEnv:Ar,forEach:de,merge:ae,extend:Sr,trim:_r,stripBOM:Cr,inherits:xr,toFlatObject:Tr,kindOf:fe,kindOfTest:_,endsWith:Pr,toArray:gr,isTypedArray:Nr,isFileList:Rr},x=v;function be(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var We=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(x.isURLSearchParams(t))n=t.toString();else{var s=[];x.forEach(t,function(f,d){f===null||typeof f>"u"||(x.isArray(f)?d=d+"[]":f=[f],x.forEach(f,function(h){x.isDate(h)?h=h.toISOString():x.isObject(h)&&(h=JSON.stringify(h)),s.push(be(d)+"="+be(h))}))}),n=s.join("&")}if(n){var a=r.indexOf("#");a!==-1&&(r=r.slice(0,a)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Br=v;function $(){this.handlers=[]}$.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};$.prototype.forEach=function(r){Br.forEach(this.handlers,function(i){i!==null&&r(i)})};var Dr=$,Ur=v,qr=function(r,t){Ur.forEach(r,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[s])})},ze=v;function P(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}ze.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Xe=P.prototype,Ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Ke[e]={value:e}});Object.defineProperties(P,Ke);Object.defineProperty(Xe,"isAxiosError",{value:!0});P.from=function(e,r,t,i,n,s){var a=Object.create(Xe);return ze.toFlatObject(e,a,function(f){return f!==Error.prototype}),P.call(a,e.message,r,t,i,n),a.name=e.name,s&&Object.assign(a,s),a};var N=P,Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},y=v;function Lr(e,r){r=r||new FormData;var t=[];function i(s){return s===null?"":y.isDate(s)?s.toISOString():y.isArrayBuffer(s)||y.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(y.isPlainObject(s)||y.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);t.push(s),y.forEach(s,function(f,d){if(!y.isUndefined(f)){var c=a?a+"."+d:d,h;if(f&&!a&&typeof f=="object"){if(y.endsWith(d,"{}"))f=JSON.stringify(f);else if(y.endsWith(d,"[]")&&(h=y.toArray(f))){h.forEach(function(u){!y.isUndefined(u)&&r.append(c,i(u))});return}}n(f,c)}}),t.pop()}else r.append(a,i(s))}return n(e),r}var Ge=Lr,J,Re;function Fr(){if(Re)return J;Re=1;var e=N;return J=function(t,i,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},J}var W,ye;function $r(){if(ye)return W;ye=1;var e=v;return W=e.isStandardBrowserEnv()?function(){return{write:function(i,n,s,a,o,f){var d=[];d.push(i+"="+encodeURIComponent(n)),e.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),e.isString(a)&&d.push("path="+a),e.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),W}var jr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Ir=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},kr=jr,Mr=Ir,Ye=function(r,t){return r&&!kr(t)?Mr(r,t):t},z,we;function Hr(){if(we)return z;we=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return z=function(i){var n={},s,a,o;return i&&e.forEach(i.split(`
`),function(d){if(o=d.indexOf(":"),s=e.trim(d.substr(0,o)).toLowerCase(),a=e.trim(d.substr(o+1)),s){if(n[s]&&r.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([a]):n[s]=n[s]?n[s]+", "+a:a}}),n},z}var X,Oe;function Vr(){if(Oe)return X;Oe=1;var e=v;return X=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function s(a){var o=a;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=s(window.location.href),function(o){var f=e.isString(o)?s(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),X}var K,_e;function j(){if(_e)return K;_e=1;var e=N,r=v;function t(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),K=t,K}var Q,Ae;function Jr(){return Ae||(Ae=1,Q=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),Q}var G,Se;function Ce(){if(Se)return G;Se=1;var e=v,r=Fr(),t=$r(),i=We,n=Ye,s=Hr(),a=Vr(),o=Qe,f=N,d=j(),c=Jr();return G=function(u){return new Promise(function(sr,A){var B=u.data,D=u.headers,U=u.responseType,S;function ve(){u.cancelToken&&u.cancelToken.unsubscribe(S),u.signal&&u.signal.removeEventListener("abort",S)}e.isFormData(B)&&e.isStandardBrowserEnv()&&delete D["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var ar=u.auth.username||"",or=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";D.Authorization="Basic "+btoa(ar+":"+or)}var M=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(M,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function me(){if(!!l){var R="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,C=!U||U==="text"||U==="json"?l.responseText:l.response,O={data:C,status:l.status,statusText:l.statusText,headers:R,config:u,request:l};r(function(V){sr(V),ve()},function(V){A(V),ve()},O),l=null}}if("onloadend"in l?l.onloadend=me:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(me)},l.onabort=function(){!l||(A(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){A(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),A(new f(C,O.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},e.isStandardBrowserEnv()){var Ee=(u.withCredentials||a(M))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Ee&&(D[u.xsrfHeaderName]=Ee)}"setRequestHeader"in l&&e.forEach(D,function(C,O){typeof B>"u"&&O.toLowerCase()==="content-type"?delete D[O]:l.setRequestHeader(O,C)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),U&&U!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(S=function(R){!l||(A(!R||R&&R.type?new d:R),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(S),u.signal&&(u.signal.aborted?S():u.signal.addEventListener("abort",S))),B||(B=null);var H=c(M);if(H&&["http","https","file"].indexOf(H)===-1){A(new f("Unsupported protocol "+H+":",f.ERR_BAD_REQUEST,u));return}l.send(B)})},G}var Y,xe;function Wr(){return xe||(xe=1,Y=null),Y}var p=v,Te=qr,Pe=N,zr=Qe,Xr=Ge,Kr={"Content-Type":"application/x-www-form-urlencoded"};function ge(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Qr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Ce()),e}function Gr(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var I={transitional:zr,adapter:Qr(),transformRequest:[function(r,t){if(Te(t,"Accept"),Te(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return ge(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],s;if((s=p.isFileList(r))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Xr(s?{"files[]":r}:r,a&&new a)}else if(i||n==="application/json")return ge(t,"application/json"),Gr(r);return r}],transformResponse:[function(r){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(a){if(s)throw a.name==="SyntaxError"?Pe.from(a,Pe.ERR_BAD_RESPONSE,this,null,this.response):a}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wr()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){I.headers[r]={}});p.forEach(["post","put","patch"],function(r){I.headers[r]=p.merge(Kr)});var he=I,Yr=v,Zr=he,et=function(r,t,i){var n=this||Zr;return Yr.forEach(i,function(a){r=a.call(n,r,t)}),r},Z,Ne;function Ze(){return Ne||(Ne=1,Z=function(r){return!!(r&&r.__CANCEL__)}),Z}var Be=v,ee=et,rt=Ze(),tt=he,nt=j();function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new nt}var it=function(r){re(r),r.headers=r.headers||{},r.data=ee.call(r,r.data,r.headers,r.transformRequest),r.headers=Be.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Be.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||tt.adapter;return t(r).then(function(n){return re(r),n.data=ee.call(r,n.data,n.headers,r.transformResponse),n},function(n){return rt(n)||(re(r),n&&n.response&&(n.response.data=ee.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},E=v,er=function(r,t){t=t||{};var i={};function n(c,h){return E.isPlainObject(c)&&E.isPlainObject(h)?E.merge(c,h):E.isPlainObject(h)?E.merge({},h):E.isArray(h)?h.slice():h}function s(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function a(c){if(!E.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var d={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return E.forEach(Object.keys(r).concat(Object.keys(t)),function(h){var u=d[h]||s,b=u(h);E.isUndefined(b)&&u!==f||(i[h]=b)}),i},te,De;function rr(){return De||(De=1,te={version:"0.27.2"}),te}var st=rr().version,w=N,pe={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){pe[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Ue={};pe.transitional=function(r,t,i){function n(s,a){return"[Axios v"+st+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,o){if(r===!1)throw new w(n(a," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!Ue[a]&&(Ue[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(s,a,o):!0}};function at(e,r,t){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var s=i[n],a=r[s];if(a){var o=e[s],f=o===void 0||a(o,s,e);if(f!==!0)throw new w("option "+s+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+s,w.ERR_BAD_OPTION)}}var ot={assertOptions:at,validators:pe},tr=v,ut=We,qe=Dr,Le=it,k=er,ft=Ye,nr=ot,T=nr.validators;function g(e){this.defaults=e,this.interceptors={request:new qe,response:new qe}}g.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=k(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&nr.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(t)===!1||(s=s&&b.synchronous,n.unshift(b.fulfilled,b.rejected))});var a=[];this.interceptors.response.forEach(function(b){a.push(b.fulfilled,b.rejected)});var o;if(!s){var f=[Le,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(a),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var c=n.shift(),h=n.shift();try{d=c(d)}catch(u){h(u);break}}try{o=Le(d)}catch(u){return Promise.reject(u)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};g.prototype.getUri=function(r){r=k(this.defaults,r);var t=ft(r.baseURL,r.url);return ut(t,r.params,r.paramsSerializer)};tr.forEach(["delete","get","head","options"],function(r){g.prototype[r]=function(t,i){return this.request(k(i||{},{method:r,url:t,data:(i||{}).data}))}});tr.forEach(["post","put","patch"],function(r){function t(i){return function(s,a,o){return this.request(k(o||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}g.prototype[r]=t(),g.prototype[r+"Form"]=t(!0)});var lt=g,ne,Fe;function ct(){if(Fe)return ne;Fe=1;var e=j();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(a){i=a});var n=this;this.promise.then(function(s){if(!!n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](s);n._listeners=null}}),this.promise.then=function(s){var a,o=new Promise(function(f){n.subscribe(f),a=f}).then(s);return o.cancel=function(){n.unsubscribe(a)},o},t(function(a){n.reason||(n.reason=new e(a),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(a){i=a});return{token:n,cancel:i}},ne=r,ne}var ie,$e;function dt(){return $e||($e=1,ie=function(r){return function(i){return r.apply(null,i)}}),ie}var se,je;function ht(){if(je)return se;je=1;var e=v;return se=function(t){return e.isObject(t)&&t.isAxiosError===!0},se}var Ie=v,pt=He,L=lt,vt=er,mt=he;function ir(e){var r=new L(e),t=pt(L.prototype.request,r);return Ie.extend(t,L.prototype,r),Ie.extend(t,r),t.create=function(n){return ir(vt(e,n))},t}var m=ir(mt);m.Axios=L;m.CanceledError=j();m.CancelToken=ct();m.isCancel=Ze();m.VERSION=rr().version;m.toFormData=Ge;m.AxiosError=N;m.Cancel=m.CanceledError;m.all=function(r){return Promise.all(r)};m.spread=dt();m.isAxiosError=ht();oe.exports=m;oe.exports.default=m;(function(e){e.exports=oe.exports})(Me);const Et=lr(Me.exports),ke=Et.create({baseURL:"https://v5.vbb.transport.rest"}),Tt={get:(e,r)=>ke.get(e,{params:r}).then(t=>({data:t.data})),post:(e,r)=>{let t={...r};return r instanceof FormData&&(t=r),ke.post(e,t)}},Pt=fr({id:"favorites",state:()=>({_favorites:[]}),getters:{getFavoriteById:e=>r=>e._favorites.find(t=>t===r)},actions:{add(e){this._favorites.push(e)},remove(e){this._favorites.splice(this._favorites.indexOf(e),1)}},persist:!0});export{Rt as _,Tt as a,yt as b,wt as c,Ot as d,_t as e,At as f,St as g,Ct as h,xt as i,Pt as u};
