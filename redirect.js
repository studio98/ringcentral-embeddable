/*! For license information please see redirect.js.LICENSE.txt */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5170)}({16:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},192:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},214:function(t,e,n){"use strict";var r=n(359),o=n(360);function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=w,e.resolve=function(t,e){return w(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?w(t,!1,!0).resolveObject(e):e},e.format=function(t){o.isString(t)&&(t=w(t));return t instanceof s?t.format():s.prototype.format.call(t)},e.Url=s;var a=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(c),l=["%","/","?",";","#"].concat(u),f=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=n(269);function w(t,e,n){if(t&&o.isObject(t)&&t instanceof s)return t;var r=new s;return r.parse(t,e,n),r}s.prototype.parse=function(t,e,n){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var s=t.indexOf("?"),i=-1!==s&&s<t.indexOf("#")?"?":"#",c=t.split(i);c[0]=c[0].replace(/\\/g,"/");var w=t=c.join(i);if(w=w.trim(),!n&&1===t.split("#").length){var b=h.exec(w);if(b)return this.path=w,this.href=w,this.pathname=b[1],b[2]?(this.search=b[2],this.query=e?g.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var j=a.exec(w);if(j){var O=(j=j[0]).toLowerCase();this.protocol=O,w=w.substr(j.length)}if(n||j||w.match(/^\/\/[^@\/]+@[^@\/]+/)){var x="//"===w.substr(0,2);!x||j&&v[j]||(w=w.substr(2),this.slashes=!0)}if(!v[j]&&(x||j&&!y[j])){for(var C,A,I=-1,q=0;q<f.length;q++){-1!==(U=w.indexOf(f[q]))&&(-1===I||U<I)&&(I=U)}-1!==(A=-1===I?w.lastIndexOf("@"):w.lastIndexOf("@",I))&&(C=w.slice(0,A),w=w.slice(A+1),this.auth=decodeURIComponent(C)),I=-1;for(q=0;q<l.length;q++){var U;-1!==(U=w.indexOf(l[q]))&&(-1===I||U<I)&&(I=U)}-1===I&&(I=w.length),this.host=w.slice(0,I),w=w.slice(I),this.parseHost(),this.hostname=this.hostname||"";var S="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!S)for(var k=this.hostname.split(/\./),P=(q=0,k.length);q<P;q++){var _=k[q];if(_&&!_.match(p)){for(var M="",R=0,E=_.length;R<E;R++)_.charCodeAt(R)>127?M+="x":M+=_[R];if(!M.match(p)){var N=k.slice(0,q),F=k.slice(q+1),T=_.match(d);T&&(N.push(T[1]),F.unshift(T[2])),F.length&&(w="/"+F.join(".")+w),this.hostname=N.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),S||(this.hostname=r.toASCII(this.hostname));var L=this.port?":"+this.port:"",$=this.hostname||"";this.host=$+L,this.href+=this.host,S&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==w[0]&&(w="/"+w))}if(!m[O])for(q=0,P=u.length;q<P;q++){var z=u[q];if(-1!==w.indexOf(z)){var H=encodeURIComponent(z);H===z&&(H=escape(z)),w=w.split(z).join(H)}}var K=w.indexOf("#");-1!==K&&(this.hash=w.substr(K),w=w.slice(0,K));var V=w.indexOf("?");if(-1!==V?(this.search=w.substr(V),this.query=w.substr(V+1),e&&(this.query=g.parse(this.query)),w=w.slice(0,V)):e&&(this.search="",this.query={}),w&&(this.pathname=w),y[O]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){L=this.pathname||"";var Z=this.search||"";this.path=L+Z}return this.href=this.format(),this},s.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",s=!1,a="";this.host?s=t+this.host:this.hostname&&(s=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(a=g.stringify(this.query));var i=this.search||a&&"?"+a||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||y[e])&&!1!==s?(s="//"+(s||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):s||(s=""),r&&"#"!==r.charAt(0)&&(r="#"+r),i&&"?"!==i.charAt(0)&&(i="?"+i),e+s+(n=n.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(i=i.replace("#","%23"))+r},s.prototype.resolve=function(t){return this.resolveObject(w(t,!1,!0)).format()},s.prototype.resolveObject=function(t){if(o.isString(t)){var e=new s;e.parse(t,!1,!0),t=e}for(var n=new s,r=Object.keys(this),a=0;a<r.length;a++){var i=r[a];n[i]=this[i]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var h=Object.keys(t),c=0;c<h.length;c++){var u=h[c];"protocol"!==u&&(n[u]=t[u])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!y[t.protocol]){for(var l=Object.keys(t),f=0;f<l.length;f++){var p=l[f];n[p]=t[p]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||v[t.protocol])n.pathname=t.pathname;else{for(var d=(t.pathname||"").split("/");d.length&&!(t.host=d.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),n.pathname=d.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var m=n.pathname||"",g=n.search||"";n.path=m+g}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var w=n.pathname&&"/"===n.pathname.charAt(0),b=t.host||t.pathname&&"/"===t.pathname.charAt(0),j=b||w||n.host&&t.pathname,O=j,x=n.pathname&&n.pathname.split("/")||[],C=(d=t.pathname&&t.pathname.split("/")||[],n.protocol&&!y[n.protocol]);if(C&&(n.hostname="",n.port=null,n.host&&(""===x[0]?x[0]=n.host:x.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===d[0]?d[0]=t.host:d.unshift(t.host)),t.host=null),j=j&&(""===d[0]||""===x[0])),b)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,x=d;else if(d.length)x||(x=[]),x.pop(),x=x.concat(d),n.search=t.search,n.query=t.query;else if(!o.isNullOrUndefined(t.search)){if(C)n.hostname=n.host=x.shift(),(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift());return n.search=t.search,n.query=t.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!x.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var A=x.slice(-1)[0],I=(n.host||t.host||x.length>1)&&("."===A||".."===A)||""===A,q=0,U=x.length;U>=0;U--)"."===(A=x[U])?x.splice(U,1):".."===A?(x.splice(U,1),q++):q&&(x.splice(U,1),q--);if(!j&&!O)for(;q--;q)x.unshift("..");!j||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),I&&"/"!==x.join("/").substr(-1)&&x.push("");var S,k=""===x[0]||x[0]&&"/"===x[0].charAt(0);C&&(n.hostname=n.host=k?"":x.length?x.shift():"",(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift()));return(j=j||n.host&&x.length)&&!k&&x.unshift(""),x.length?n.pathname=x.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},s.prototype.parseHost=function(){var t=this.host,e=i.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},269:function(t,e,n){"use strict";e.decode=e.parse=n(361),e.encode=e.stringify=n(362)},359:function(t,e,n){(function(t,r){var o;!function(s){e&&e.nodeType,t&&t.nodeType;var a="object"==typeof r&&r;a.global!==a&&a.window!==a&&a.self;var i,h=2147483647,c=36,u=/^xn--/,l=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},d=Math.floor,m=String.fromCharCode;function v(t){throw new RangeError(p[t])}function y(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function g(t,e){var n=t.split("@"),r="";return n.length>1&&(r=n[0]+"@",t=n[1]),r+y((t=t.replace(f,".")).split("."),e).join(".")}function w(t){for(var e,n,r=[],o=0,s=t.length;o<s;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<s?56320==(64512&(n=t.charCodeAt(o++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--):r.push(e);return r}function b(t){return y(t,(function(t){var e="";return t>65535&&(e+=m((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=m(t)})).join("")}function j(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function O(t,e,n){var r=0;for(t=n?d(t/700):t>>1,t+=d(t/e);t>455;r+=c)t=d(t/35);return d(r+36*t/(t+38))}function x(t){var e,n,r,o,s,a,i,u,l,f,p,m=[],y=t.length,g=0,w=128,j=72;for((n=t.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&v("not-basic"),m.push(t.charCodeAt(r));for(o=n>0?n+1:0;o<y;){for(s=g,a=1,i=c;o>=y&&v("invalid-input"),((u=(p=t.charCodeAt(o++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:c)>=c||u>d((h-g)/a))&&v("overflow"),g+=u*a,!(u<(l=i<=j?1:i>=j+26?26:i-j));i+=c)a>d(h/(f=c-l))&&v("overflow"),a*=f;j=O(g-s,e=m.length+1,0==s),d(g/e)>h-w&&v("overflow"),w+=d(g/e),g%=e,m.splice(g++,0,w)}return b(m)}function C(t){var e,n,r,o,s,a,i,u,l,f,p,y,g,b,x,C=[];for(y=(t=w(t)).length,e=128,n=0,s=72,a=0;a<y;++a)(p=t[a])<128&&C.push(m(p));for(r=o=C.length,o&&C.push("-");r<y;){for(i=h,a=0;a<y;++a)(p=t[a])>=e&&p<i&&(i=p);for(i-e>d((h-n)/(g=r+1))&&v("overflow"),n+=(i-e)*g,e=i,a=0;a<y;++a)if((p=t[a])<e&&++n>h&&v("overflow"),p==e){for(u=n,l=c;!(u<(f=l<=s?1:l>=s+26?26:l-s));l+=c)x=u-f,b=c-f,C.push(m(j(f+x%b,0))),u=d(x/b);C.push(m(j(u,0))),s=O(n,g,r==o),n=0,++r}++n,++e}return C.join("")}i={version:"1.4.1",ucs2:{decode:w,encode:b},decode:x,encode:C,toASCII:function(t){return g(t,(function(t){return l.test(t)?"xn--"+C(t):t}))},toUnicode:function(t){return g(t,(function(t){return u.test(t)?x(t.slice(4).toLowerCase()):t}))}},void 0===(o=function(){return i}.call(e,n,e,t))||(t.exports=o)}()}).call(this,n(192)(t),n(67))},360:function(t,e,n){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},361:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,s){e=e||"&",n=n||"=";var a={};if("string"!=typeof t||0===t.length)return a;var i=/\+/g;t=t.split(e);var h=1e3;s&&"number"==typeof s.maxKeys&&(h=s.maxKeys);var c=t.length;h>0&&c>h&&(c=h);for(var u=0;u<c;++u){var l,f,p,d,m=t[u].replace(i,"%20"),v=m.indexOf(n);v>=0?(l=m.substr(0,v),f=m.substr(v+1)):(l=m,f=""),p=decodeURIComponent(l),d=decodeURIComponent(f),r(a,p)?o(a[p])?a[p].push(d):a[p]=[a[p],d]:a[p]=d}return a};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},362:function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,i){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?s(a(t),(function(a){var i=encodeURIComponent(r(a))+n;return o(t[a])?s(t[a],(function(t){return i+encodeURIComponent(r(t))})).join(e):i+encodeURIComponent(r(t[a]))})).join(e):i?encodeURIComponent(r(i))+n+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var a=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},5170:function(t,e,n){"use strict";var r=n(16);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=new(r(n(5171)).default)({prefix:"rc-widget"});e.default=o},5171:function(t,e,n){"use strict";var r=n(16);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(60)),s=r(n(214)),a=["https://ringcentral.github.io","https://apps.ringcentral.com"];a.indexOf(window.location.origin)<0&&a.push(window.location.origin);e.default=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.prefix;(0,o.default)(this,t),window.addEventListener("load",(function(){var t=window.location.href;try{if(window.opener&&window.opener.oAuthCallback)return window.opener.oAuthCallback(t),void window.close()}catch(t){}try{window.opener&&window.opener.postMessage&&(a.forEach((function(e){window.opener.postMessage({callbackUri:t},e)})),window.close())}catch(t){console.error(t)}try{window.parent&&window.parent!==window&&("SSOIframe"===window.name?a.forEach((function(e){window.parent.postMessage({callbackUri:t},e)})):a.forEach((function(e){window.parent.postMessage({refreshCallbackUri:t},e)})))}catch(t){console.error(t)}var e=s.default.parse(t,!0).query.state;if(e){var r=e.split("-").slice(1).join("-"),o="".concat(n,"-").concat(r,"-redirect-callbackUri");localStorage.removeItem(o),window.addEventListener("storage",(function(t){t.key!==o||t.newValue&&""!==t.newValue||window.close()})),localStorage.setItem(o,t)}}))}},60:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},67:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}});