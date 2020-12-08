(()=>{var r={402:(r,e,t)=>{"use strict";t.d(e,{Z:()=>m});var n=t(645),o=t.n(n),i=t(667),a=t.n(i),s=t(996),u=t(6),c=t(954),l=t(156),p=o()((function(r){return r[1]})),f=a()(s),d=a()(u),h=a()(c),g=a()(l);p.push([r.id,"@font-face {\r\n\tfont-family: 'Montserrat';\r\n\tsrc: url("+f+") format('woff2'),\r\n\t\turl("+d+") format('woff');\r\n\tfont-display: swap;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Druk Wide';\r\n\tsrc: url("+h+") format('woff2'),\r\n\t\turl("+g+') format(\'woff\');\r\n\tfont-display: swap;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n}\r\n\r\nul {\r\n    /* Блочная модель */\r\n    padding: 0;\r\n    margin: 0;\r\n    /* Типографика */\r\n    list-style: none;\r\n}\r\n\r\n.contaner {\r\n    position: relative;\r\n    width: 2660px;\r\n    margin: 0 auto;\r\n    padding: 300px 220px;\r\n    background-color: #1F2326;\r\n    overflow:hidden;\r\n    z-index: -2;\r\n}\r\n\r\n.main-content {\r\n    display: none;\r\n}\r\n\r\n.circle1 {\r\n    position: absolute;\r\n    left: -385px;\r\n    top: -711px;\r\n    width: 2215px;\r\n    height: 2216px;\r\n    border-radius: 50%;\r\n    background: #FF4656;\r\n    z-index: -1;\r\n}\r\n\r\n.circle2 {\r\n    position: absolute;\r\n    left: 2727px;\r\n    top: 182px;\r\n    width: 268px;\r\n    height: 269px;\r\n    border-radius: 50%;\r\n    background: #EFEFEF;\r\n    z-index: -1;\r\n}\r\n\r\n.circle3 {\r\n    position: absolute;\r\n    left: 2946px;\r\n    top: 475px;\r\n    width: 98px;\r\n    height: 98px;\r\n    border-radius: 50%;\r\n    background: #505155;\r\n    z-index: -1;\r\n}\r\n\r\n.circle4 {\r\n    position: absolute;\r\n    left: 2836px;\r\n    top: 74px;\r\n    width: 44px;\r\n    height: 44px;\r\n    border-radius: 50%;\r\n    background: #FF4656;\r\n    z-index: -1;\r\n}\r\n\r\n.circle5 {\r\n    position: absolute;\r\n    left: 177px;\r\n    top: 2114px;\r\n    width: 470px;\r\n    height: 470px;\r\n    border-radius: 50%;\r\n    background: #EFEFEF;\r\n    z-index: -1;\r\n}\r\n\r\n.circle6 {\r\n    position: absolute;\r\n    left: 112px;\r\n    top: 2082px;\r\n    width: 63px;\r\n    height: 63px;\r\n    border-radius: 50%;\r\n    background: #505155;\r\n    z-index: -1;\r\n}\r\n\r\n.circle7 {\r\n    position: absolute;\r\n    left: 2018px;\r\n    top: 1392px;\r\n    width: 1443px;\r\n    height: 1443px;\r\n    border-radius: 50%;\r\n    background: #292C31;\r\n    z-index: -1;\r\n}\r\n\r\n.content {\r\n    box-shadow: 10px 10px 80px rgba(0, 0, 0, 0.5);\r\n    border-radius: 32px;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    padding: 46px 97px 46px 73px;\r\n    background-color: #1F2326;\r\n    border-radius: 32px 32px 0 0;\r\n}\r\n\r\n.header_riot{\r\n    padding-right: 60px;\r\n    margin-right: 60px;\r\n    border-right: 3px solid #fff;\r\n}\r\n\r\n.header_logo {\r\n    padding-right: 80px;\r\n}\r\n\r\n.header_nav {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header_items-nav {\r\n    display: flex;\r\n}\r\n\r\n.header_item-nav {\r\n    margin-right: 80px;\r\n    color: #fff;\r\n    font-family: \'Montserrat\';\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.header_login{\r\n    display: flex;\r\n    margin-left: auto;\r\n}\r\n\r\n.header_login_avatar {\r\n    border-radius: 50%;\r\n    padding-right: 16px;\r\n}\r\n\r\n.header_login_user-name {\r\n    color: #fff;\r\n    font-family: \'Montserrat\';\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.main {\r\n    position: relative;\r\n    height: 1386px;\r\n    padding-top: 113px;\r\n    background-color: #FF4656;\r\n}\r\n\r\n.main_background-img {\r\n    position: absolute;\r\n    top: 0;\r\n    mix-blend-mode: multiply;\r\n}\r\n\r\n.main_content {\r\n    position: relative;\r\n    left: 200px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.main_content-text {\r\n    margin-right: 110px;\r\n    font-family: "Druk Wide";\r\n    font-size: 156px;\r\n    letter-spacing: 0.1em;\r\n    text-transform: uppercase;\r\n    -webkit-text-stroke: 2px #fff;\r\n    color: transparent;\r\n    text-align: center;\r\n    writing-mode: tb-rl;\r\n}\r\n\r\n.main_character_item {\r\n    position: relative;\r\n    width: 440px;\r\n    height: 990px;\r\n    margin-right: 144px;\r\n    background-color: #1F2326;\r\n}\r\n\r\n.main_character_item_name{\r\n    position: absolute;\r\n    height: 990px;\r\n    top: 20px;\r\n    left: -48px;\r\n    writing-mode: tb-rl;\r\n    font-family: "Druk Wide";\r\n    -webkit-text-stroke: 2px #F8F8F8;\r\n    color: transparent;\r\n    font-size: 72px;\r\n    letter-spacing: 0.1em;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.main_character_item_city {\r\n    position: absolute;\r\n    white-space: nowrap;\r\n    left: 45px;\r\n    top: 25px;\r\n    writing-mode: tb-rl;\r\n    font-family: "Druk Wide";\r\n    color: #FF4656;\r\n    font-size: 24px;\r\n}\r\n\r\n.main_character_ability {\r\n    position: relative;\r\n    bottom: 7%;\r\n    left: 4%;\r\n    width: 440px;\r\n    height: 110px;\r\n    border: 2px solid #F8F8F8;\r\n    background-color: #1F2326; \r\n}\r\n\r\n.main_character_ability_items {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n}\r\n\r\n.footer {\r\n    height: 132px;\r\n    background-color: #F8F8F8;\r\n    border-radius: 0 0 32px 32px;\r\n}\r\n\r\n.footer_items {\r\n    position: relative;\r\n    display: flex;\r\n    bottom: 212px;\r\n    right: 125px;\r\n}\r\n\r\n.footer_item {\r\n    position: relative;\r\n    margin-right: 80px;\r\n    padding: 31px 58px;\r\n    width: 608px;\r\n    height: 186px;\r\n    border: 2px solid #1F2326;\r\n    background-color: #F8F8F8;\r\n}\r\n\r\n.footer_item_red-square {\r\n    position: absolute;\r\n    width: 190px;\r\n    height: 182px;\r\n    top: 64px;\r\n    left: 416px;\r\n    background: #FF4656;\r\n}\r\n\r\n.footer_item_icon {\r\n    position: absolute;\r\n    top: 31px;\r\n    left: 485px;\r\n}\r\n\r\n.footer_item_name {\r\n    text-transform: uppercase;\r\n    line-height: 1;\r\n    margin-bottom: 32px;\r\n    font-family: \'Druk Wide\';\r\n    font-size: 40px;\r\n    color: #C4C4C4;\r\n}\r\n\r\n.footer_item_discription {\r\n    line-height: 1;\r\n    margin-bottom: 32px;\r\n    font-family: \'Druk Wide\';\r\n    font-size: 24px;\r\n    color: #1F2326;\r\n}\r\n\r\n.footer_item_text {\r\n    font-family: "Montserrat";\r\n    font-size: 16px;\r\n    color: #1F2326;\r\n    width: 48%;\r\n}\r\n\r\n.main-login-contaner {\r\n    display: flex;\r\n    \r\n}\r\n\r\n.main-login {\r\n    position: relative;\r\n    bottom: 100px;\r\n    text-align: center;\r\n    padding: 30px;\r\n    margin: auto;\r\n    width: 600px;\r\n    height: auto;\r\n    border: 2px solid #1F2326;\r\n    background-color: #fff;\r\n    box-shadow: 10px 10px 80px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.main-login_header {\r\n    text-transform: uppercase;\r\n    line-height: 1;\r\n    margin-bottom: 32px;\r\n    font-family: \'Druk Wide\';\r\n    font-size: 40px;\r\n    color: #C4C4C4;\r\n}\r\n\r\n.main-login_text {\r\n    position: absolute;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 25px;\r\n    left: -45px;\r\n    writing-mode: tb-rl;\r\n    font-family: "Druk Wide";\r\n    -webkit-text-stroke: 2px #1F2326;\r\n    color: transparent;\r\n    font-size: 72px;\r\n    letter-spacing: 0.1em;\r\n    text-transform: uppercase;\r\n}\r\n\r\ninput {\r\n    padding: 20px;\r\n    width: 500px;\r\n    margin-bottom: 30px;\r\n    border: 1px solid #1F2326;\r\n    font-family: "Montserrat";\r\n    font-size: 16px;\r\n    color: #1F2326;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1em;\r\n    background-color: #F8F8F8;\r\n}\r\n\r\ninput::placeholder {\r\n    font-family: "Montserrat";\r\n    font-size: 16px;\r\n    color: #1F2326;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\nbutton {\r\n    width: 200px;\r\n    padding: 20px;\r\n    font-family: "Montserrat";\r\n    font-size: 20px;\r\n    color: #1F2326;\r\n    background-color: #F8F8F8;\r\n}',""]);const m=p},645:r=>{"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var t=r(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(r,t,n){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<r.length;s++){var u=[].concat(r[s]);n&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},667:r=>{"use strict";r.exports=function(r,e){return e||(e={}),"string"!=typeof(r=r&&r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),e.hash&&(r+=e.hash),/["'() \t\n]/.test(r)||e.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},731:r=>{r.exports=function(r,e){function t(r){return String(r).replace(/[^ !'()~\*]*/g,encodeURIComponent).replace(/ /g,"+").replace(/[!'()~\*]/g,(function(r){return"%"+r.charCodeAt().toString(16).slice(-2).toUpperCase()}))}function n(r){var t=Object.keys(r);return e.sorted?t.sort():t}function o(r){return r.filter((function(r){return r})).join("&")}function i(r,a){var s=typeof a,u=null;return a===u?u=e.ignorenull?u:t(r)+"="+u:/string|number|boolean/.test(s)?u=t(r)+"="+t(a):Array.isArray(a)?u=function(r,e){return o(e.map((function(e){return i(r+"[]",e)})))}(r,a):"object"===s&&(u=function(r,e){return o(n(e).map((function(t){return i(r+"["+t+"]",e[t])})))}(r,a)),u}return e="object"==typeof e?e:{},o(n(r).map((function(e){return i(e,r[e])})))}},208:(r,e,t)=>{var n,o="__lodash_hash_undefined__",i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/,s=/^\./,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,l=/^\[object .+?Constructor\]$/,p="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=p||f||Function("return this")(),h=Array.prototype,g=Function.prototype,m=Object.prototype,v=d["__core-js_shared__"],b=(n=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",y=g.toString,_=m.hasOwnProperty,x=m.toString,w=RegExp("^"+y.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k=d.Symbol,j=h.splice,E=R(d,"Map"),F=R(Object,"create"),q=k?k.prototype:void 0,T=q?q.toString:void 0;function O(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function C(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function U(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function A(r,e){for(var t,n,o=r.length;o--;)if((t=r[o][0])===(n=e)||t!=t&&n!=n)return o;return-1}function P(r,e){var t,n,o=r.__data__;return("string"==(n=typeof(t=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t)?o["string"==typeof e?"string":"hash"]:o.map}function R(r,e){var t=function(r,e){return null==r?void 0:r[e]}(r,e);return function(r){return!(!G(r)||(e=r,b&&b in e))&&(function(r){var e=G(r)?x.call(r):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(r)||function(r){var e=!1;if(null!=r&&"function"!=typeof r.toString)try{e=!!(r+"")}catch(r){}return e}(r)?w:l).test(function(r){if(null!=r){try{return y.call(r)}catch(r){}try{return r+""}catch(r){}}return""}(r));var e}(t)?t:void 0}O.prototype.clear=function(){this.__data__=F?F(null):{}},O.prototype.delete=function(r){return this.has(r)&&delete this.__data__[r]},O.prototype.get=function(r){var e=this.__data__;if(F){var t=e[r];return t===o?void 0:t}return _.call(e,r)?e[r]:void 0},O.prototype.has=function(r){var e=this.__data__;return F?void 0!==e[r]:_.call(e,r)},O.prototype.set=function(r,e){return this.__data__[r]=F&&void 0===e?o:e,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(r){var e=this.__data__,t=A(e,r);return!(t<0||(t==e.length-1?e.pop():j.call(e,t,1),0))},C.prototype.get=function(r){var e=this.__data__,t=A(e,r);return t<0?void 0:e[t][1]},C.prototype.has=function(r){return A(this.__data__,r)>-1},C.prototype.set=function(r,e){var t=this.__data__,n=A(t,r);return n<0?t.push([r,e]):t[n][1]=e,this},U.prototype.clear=function(){this.__data__={hash:new O,map:new(E||C),string:new O}},U.prototype.delete=function(r){return P(this,r).delete(r)},U.prototype.get=function(r){return P(this,r).get(r)},U.prototype.has=function(r){return P(this,r).has(r)},U.prototype.set=function(r,e){return P(this,r).set(r,e),this};var S=M((function(r){var e;r=null==(e=r)?"":function(r){if("string"==typeof r)return r;if(N(r))return T?T.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e}(e);var t=[];return s.test(r)&&t.push(""),r.replace(u,(function(r,e,n,o){t.push(n?o.replace(c,"$1"):e||r)})),t}));function I(r){if("string"==typeof r||N(r))return r;var e=r+"";return"0"==e&&1/r==-1/0?"-0":e}function M(r,e){if("function"!=typeof r||e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=r.apply(this,n);return t.cache=i.set(o,a),a};return t.cache=new(M.Cache||U),t}M.Cache=U;var z=Array.isArray;function G(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function N(r){return"symbol"==typeof r||function(r){return!!r&&"object"==typeof r}(r)&&"[object Symbol]"==x.call(r)}r.exports=function(r,e,t){var n=null==r?void 0:function(r,e){for(var t,n=0,o=(e=function(r,e){if(z(r))return!1;var t=typeof r;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=r&&!N(r))||a.test(r)||!i.test(r)||null!=e&&r in Object(e)}(e,r)?[e]:z(t=e)?t:S(t)).length;null!=r&&n<o;)r=r[I(e[n++])];return n&&n==o?r:void 0}(r,e);return void 0===n?t:n}},587:r=>{"use strict";function e(r,e){return Object.prototype.hasOwnProperty.call(r,e)}r.exports=function(r,t,n,o){t=t||"&",n=n||"=";var i={};if("string"!=typeof r||0===r.length)return i;var a=/\+/g;r=r.split(t);var s=1e3;o&&"number"==typeof o.maxKeys&&(s=o.maxKeys);var u=r.length;s>0&&u>s&&(u=s);for(var c=0;c<u;++c){var l,p,f,d,h=r[c].replace(a,"%20"),g=h.indexOf(n);g>=0?(l=h.substr(0,g),p=h.substr(g+1)):(l=h,p=""),f=decodeURIComponent(l),d=decodeURIComponent(p),e(i,f)?Array.isArray(i[f])?i[f].push(d):i[f]=[i[f],d]:i[f]=d}return i}},361:r=>{"use strict";var e=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};r.exports=function(r,t,n,o){return t=t||"&",n=n||"=",null===r&&(r=void 0),"object"==typeof r?Object.keys(r).map((function(o){var i=encodeURIComponent(e(o))+n;return Array.isArray(r[o])?r[o].map((function(r){return i+encodeURIComponent(e(r))})).join(t):i+encodeURIComponent(e(r[o]))})).join(t):o?encodeURIComponent(e(o))+n+encodeURIComponent(e(r)):""}},673:(r,e,t)=>{"use strict";e.decode=e.parse=t(587),e.encode=e.stringify=t(361)},129:(r,e)=>{"use strict";var t=Object.prototype.hasOwnProperty;function n(r){try{return decodeURIComponent(r.replace(/\+/g," "))}catch(r){return null}}function o(r){try{return encodeURIComponent(r)}catch(r){return null}}e.stringify=function(r,e){e=e||"";var n,i,a=[];for(i in"string"!=typeof e&&(e="?"),r)if(t.call(r,i)){if((n=r[i])||null!=n&&!isNaN(n)||(n=""),i=o(i),n=o(n),null===i||null===n)continue;a.push(i+"="+n)}return a.length?e+a.join("&"):""},e.parse=function(r){for(var e,t=/([^=?#&]+)=?([^&]*)/g,o={};e=t.exec(r);){var i=n(e[1]),a=n(e[2]);null===i||null===a||i in o||(o[i]=a)}return o}},418:r=>{"use strict";r.exports=function(r,e){if(e=e.split(":")[0],!(r=+r))return!1;switch(e){case"http":case"ws":return 80!==r;case"https":case"wss":return 443!==r;case"ftp":return 21!==r;case"gopher":return 70!==r;case"file":return!1}return 0!==r}},379:(r,e,t)=>{"use strict";var n,o=function(){var r={};return function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}r[e]=t}return r[e]}}(),i=[];function a(r){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===r){e=t;break}return e}function s(r,e){for(var t={},n=[],o=0;o<r.length;o++){var s=r[o],u=e.base?s[0]+e.base:s[0],c=t[u]||0,l="".concat(u," ").concat(c);t[u]=c+1;var p=a(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:l,updater:g(f,e),references:1}),n.push(l)}return n}function u(r){var e=document.createElement("style"),n=r.attributes||{};if(void 0===n.nonce){var i=t.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(r){e.setAttribute(r,n[r])})),"function"==typeof r.insert)r.insert(e);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(r,e){return c[r]=e,c.filter(Boolean).join("\n")});function p(r,e,t,n){var o=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet)r.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=r.childNodes;a[e]&&r.removeChild(a[e]),a.length?r.insertBefore(i,a[e]):r.appendChild(i)}}function f(r,e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}var d=null,h=0;function g(r,e){var t,n,o;if(e.singleton){var i=h++;t=d||(d=u(e)),n=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=u(e),n=f.bind(null,t,e),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)};return n(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;n(r=e)}else o()}}r.exports=function(r,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var t=s(r=r||[],e);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var n=0;n<t.length;n++){var o=a(t[n]);i[o].references--}for(var u=s(r,e),c=0;c<t.length;c++){var l=a(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=u}}}},432:(r,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.API_URL="https://api.unsplash.com",e.API_VERSION="v1",e.OAUTH_AUTHORIZE_URL="https://unsplash.com/oauth/authorize",e.OAUTH_TOKEN_URL="https://unsplash.com/oauth/token"},542:(r,e,t)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var r=this;return{getAuthenticationUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["public"],t=o.default.stringify({client_id:r._accessKey,redirect_uri:r._callbackUrl,response_type:"code",scope:e.length>1?e.join("+"):e.toString()});return decodeURIComponent(i.OAUTH_AUTHORIZE_URL+"?"+t)},userAuthentication:function(e){var t=i.OAUTH_TOKEN_URL;return r.request({url:t,method:"POST",body:{client_id:r._accessKey,client_secret:r._secret,redirect_uri:r._callbackUrl,grant_type:"authorization_code",code:e},oauth:!0})},setBearerToken:function(e){e&&(r._bearerToken=e)}}};var n,o=(n=t(673))&&n.__esModule?n:{default:n},i=t(432)},169:(r,e)=>{"use strict";function t(r){return this.request({url:"/collections/"+r,method:"GET"})}function n(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i={per_page:t,order_by:n,orientation:o.orientation,page:e};return Object.keys(i).forEach((function(r){i[r]||delete i[r]})),this.request({url:"/collections/"+r+"/photos",method:"GET",query:i})}function o(r,e,t,n){var o=r?"/collections/"+r:"/collections",i={title:e,description:t,private:n};return this.request({url:o,method:r?"PUT":"POST",body:i})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var r=this;return{listCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="/collections",o={per_page:t,page:e};return r.request({url:n,method:"GET",query:o})},getCollection:t.bind(this),getCollectionPhotos:n.bind(this),createCollection:o.bind(this,null),updateCollection:o.bind(this),deleteCollection:function(e){var t="/collections/"+e;return r.request({url:t,method:"DELETE"})},addPhotoToCollection:function(e,t){var n="/collections/"+e+"/add";return r.request({url:n,method:"POST",body:{photo_id:t}})},removePhotoFromCollection:function(e,t){var n="/collections/"+e+"/remove?photo_id="+t;return r.request({url:n,method:"DELETE"})},listRelatedCollections:function(e){var t="/collections/"+e+"/related";return r.request({url:t,method:"GET"})}}}},419:(r,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var r=this;return{profile:function(){return r.request({url:"/me",method:"GET"})},updateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/me",n=e.username,o=e.firstName,i=e.lastName,a=e.email,s=e.url,u=e.location,c=e.bio,l=e.instagramUsername,p={username:n,first_name:o,last_name:i,email:a,url:s,location:u,bio:c,instagram_username:l};return Object.keys(p).forEach((function(r){p[r]||delete p[r]})),r.request({url:t,method:"PUT",body:p})}}}},771:(r,e,t)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var r=this;return{listPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest",o="/photos",i={page:e,per_page:t,order_by:n};return r.request({url:o,method:"GET",query:i})},getPhoto:function(e){var t="/photos/"+e;return r.request({url:t,method:"GET"})},getPhotoStats:function(e){var t="/photos/"+e+"/statistics";return r.request({url:t,method:"GET"})},getRandomPhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/photos/random",n=e.collections||[],o={featured:e.featured,username:e.username,orientation:e.orientation,collections:n.join(),query:e.query,c:e.cacheBuster||(new Date).getTime(),count:e.count};return Object.keys(o).forEach((function(r){o[r]||delete o[r]})),r.request({url:t,method:"GET",query:o})},likePhoto:function(e){if(!r._bearerToken)throw new Error("Requires a bearerToken to be set.");var t="/photos/"+e+"/like";return r.request({url:t,method:"POST"})},unlikePhoto:function(e){if(!r._bearerToken)throw new Error("Requires a bearerToken to be set.");var t="/photos/"+e+"/like";return r.request({url:t,method:"DELETE"})},downloadPhoto:a.bind(this),trackDownload:a.bind(this)}};var n,o=t(165),i=(n=t(208))&&n.__esModule?n:{default:n};function a(r){var e=(0,i.default)(r,"links.download_location",void 0);if(void 0===e)throw new Error("Object received is not a photo. "+r);var t=(0,o.getUrlComponents)(e);return this.request({url:t.pathname,method:"GET",query:t.query})}},506:(r,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var r=this;return{photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.collections||[],a={query:encodeURIComponent(e),per_page:n,orientation:o.orientation,content_filter:o.contentFilter,color:o.color,order_by:o.orderBy,lang:o.lang,collections:i.join(),page:t};return Object.keys(a).forEach((function(r){a[r]||"query"==r||delete a[r]})),r.request({url:"/search/photos",method:"GET",query:a})},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o={query:encodeURIComponent(e),per_page:n,page:t};return r.request({url:"/search/users",method:"GET",query:o})},collections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o={query:encodeURIComponent(e),per_page:n,page:t};return r.request({url:"/search/collections",method:"GET",query:o})}}}},294:(r,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var r=this;return{total:function(){return r.request({url:"/stats/total",method:"GET"})}}}},141:(r,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var r=this;return{profile:function(e){var t="/users/"+e;return r.request({url:t,method:"GET"})},photos:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.stats||!1,s="/users/"+e+"/photos",u={page:t,per_page:n,order_by:o,orientation:i.orientation,stats:a};return Object.keys(u).forEach((function(r){u[r]||delete u[r]})),r.request({url:s,method:"GET",query:u})},likes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a="/users/"+e+"/likes",s={page:t,per_page:n,order_by:o,orientation:i.orientation};return Object.keys(s).forEach((function(r){s[r]||delete s[r]})),r.request({url:a,method:"GET",query:s})},collections:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"published",i="/users/"+e+"/collections",a={page:t,per_page:n,order_by:o};return r.request({url:i,method:"GET",query:a})},statistics:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"days",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,o="/users/"+e+"/statistics",i={resolution:t,quantity:n};return r.request({url:o,method:"GET",query:i})}}}},846:(r,e,t)=>{"use strict";var n=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=t(432),i=t(165),a=d(t(542)),s=d(t(419)),u=d(t(141)),c=d(t(771)),l=d(t(169)),p=d(t(506)),f=d(t(294));function d(r){return r&&r.__esModule?r:{default:r}}function h(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var g=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,r),this._apiUrl=e.apiUrl||o.API_URL,this._apiVersion=e.apiVersion||o.API_VERSION,this._accessKey=e.accessKey,this._secret=e.secret,this._callbackUrl=e.callbackUrl,this._bearerToken=e.bearerToken,this._headers=e.headers||{},this._timeout=e.timeout||0,this.auth=a.default.bind(this)(),this.currentUser=s.default.bind(this)(),this.users=u.default.bind(this)(),this.photos=c.default.bind(this)(),this.collections=l.default.bind(this)(),this.search=p.default.bind(this)(),this.stats=f.default.bind(this)()}return n(r,[{key:"request",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.buildFetchOptions.bind(this)(r),t=e.url,n=e.options;return fetch(t,n)}}]),r}();e.ZP=g},165:(r,e,t)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r};e.formUrlEncode=u,e.getUrlComponents=function(r){return(0,a.default)(r,{},!0)},e.buildFetchOptions=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.method,t=r.query,i=r.oauth,a=r.body,s=!0===i?r.url:""+this._apiUrl+r.url,c=n({},this._headers,r.headers,{"Accept-Version":this._apiVersion,Authorization:this._bearerToken?"Bearer "+this._bearerToken:"Client-ID "+this._accessKey}),l=this._timeout;return a&&(c["Content-Type"]="application/x-www-form-urlencoded"),t&&(s=decodeURIComponent(s+"?"+(0,o.stringify)(t))),{url:s,options:{method:e,headers:c,timeout:l,body:"GET"!==e&&a?u(a):void 0}}};var o=t(673),i=s(t(731)),a=s(t(390));function s(r){return r&&r.__esModule?r:{default:r}}function u(r){return(0,i.default)(r)}},390:(r,e,t)=>{"use strict";var n=t(418),o=t(129),i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,s=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function u(r){return(r||"").replace(s,"")}var c=[["#","hash"],["?","query"],function(r){return r.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1};function p(r){var e,n=("undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{}).location||{},o={},a=typeof(r=r||n);if("blob:"===r.protocol)o=new d(unescape(r.pathname),{});else if("string"===a)for(e in o=new d(r,{}),l)delete o[e];else if("object"===a){for(e in r)e in l||(o[e]=r[e]);void 0===o.slashes&&(o.slashes=i.test(r.href))}return o}function f(r){r=u(r);var e=a.exec(r);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function d(r,e,t){if(r=u(r),!(this instanceof d))return new d(r,e,t);var i,a,s,l,h,g,m=c.slice(),v=typeof e,b=this,y=0;for("object"!==v&&"string"!==v&&(t=e,e=null),t&&"function"!=typeof t&&(t=o.parse),e=p(e),i=!(a=f(r||"")).protocol&&!a.slashes,b.slashes=a.slashes||i&&e.slashes,b.protocol=a.protocol||e.protocol||"",r=a.rest,a.slashes||(m[3]=[/(.*)/,"pathname"]);y<m.length;y++)"function"!=typeof(l=m[y])?(s=l[0],g=l[1],s!=s?b[g]=r:"string"==typeof s?~(h=r.indexOf(s))&&("number"==typeof l[2]?(b[g]=r.slice(0,h),r=r.slice(h+l[2])):(b[g]=r.slice(h),r=r.slice(0,h))):(h=s.exec(r))&&(b[g]=h[1],r=r.slice(0,h.index)),b[g]=b[g]||i&&l[3]&&e[g]||"",l[4]&&(b[g]=b[g].toLowerCase())):r=l(r);t&&(b.query=t(b.query)),i&&e.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==e.pathname)&&(b.pathname=function(r,e){if(""===r)return e;for(var t=(e||"/").split("/").slice(0,-1).concat(r.split("/")),n=t.length,o=t[n-1],i=!1,a=0;n--;)"."===t[n]?t.splice(n,1):".."===t[n]?(t.splice(n,1),a++):a&&(0===n&&(i=!0),t.splice(n,1),a--);return i&&t.unshift(""),"."!==o&&".."!==o||t.push(""),t.join("/")}(b.pathname,e.pathname)),n(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(l=b.auth.split(":"),b.username=l[0]||"",b.password=l[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString()}d.prototype={set:function(r,e,t){var i=this;switch(r){case"query":"string"==typeof e&&e.length&&(e=(t||o.parse)(e)),i[r]=e;break;case"port":i[r]=e,n(e,i.protocol)?e&&(i.host=i.hostname+":"+e):(i.host=i.hostname,i[r]="");break;case"hostname":i[r]=e,i.port&&(e+=":"+i.port),i.host=e;break;case"host":i[r]=e,/:\d+$/.test(e)?(e=e.split(":"),i.port=e.pop(),i.hostname=e.join(":")):(i.hostname=e,i.port="");break;case"protocol":i.protocol=e.toLowerCase(),i.slashes=!t;break;case"pathname":case"hash":if(e){var a="pathname"===r?"/":"#";i[r]=e.charAt(0)!==a?a+e:e}else i[r]=e;break;default:i[r]=e}for(var s=0;s<c.length;s++){var u=c[s];u[4]&&(i[u[1]]=i[u[1]].toLowerCase())}return i.origin=i.protocol&&i.host&&"file:"!==i.protocol?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(r){r&&"function"==typeof r||(r=o.stringify);var e,t=this,n=t.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var i=n+(t.slashes?"//":"");return t.username&&(i+=t.username,t.password&&(i+=":"+t.password),i+="@"),i+=t.host+t.pathname,(e="object"==typeof t.query?r(t.query):t.query)&&(i+="?"!==e.charAt(0)?"?"+e:e),t.hash&&(i+=t.hash),i}},d.extractProtocol=f,d.location=p,d.trimLeft=u,d.qs=o,r.exports=d},156:(r,e,t)=>{"use strict";r.exports=t.p+"ef0199aefe895196e8ae.woff"},954:(r,e,t)=>{"use strict";r.exports=t.p+"db308949e7f675035382.woff2"},996:(r,e,t)=>{"use strict";r.exports=t.p+"180ba33d8de7dcfe80a0.woff"},6:(r,e,t)=>{"use strict";r.exports=t.p+"cfceaf4e74789fc9df24.woff2"}},e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={id:n,exports:{}};return r[n](o,o.exports,t),o.exports}t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r;t.g.importScripts&&(r=t.g.location+"");var e=t.g.document;if(!r&&e&&(e.currentScript&&(r=e.currentScript.src),!r)){var n=e.getElementsByTagName("script");n.length&&(r=n[n.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),(()=>{"use strict";var r=t(379),e=t.n(r),n=t(402);e()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;const o=new(t(846).ZP)({accessKey:"UaSusWVA_p5bK-ZG0Aj_KK-F3yYC8ZuXIxKKvj1Q6AA",secret:"1oWJZ2W4HqnkQ4bikZkeX9f8fALUbzCR2p4Oy7Fy04w",callbackUrl:"https://lexxon90.github.io/Unsplash%20API/dist/"}),i=o.auth.getAuthenticationUrl(["public","write_likes"]);location.assign(i),console.log(i);const a=location.search.split("code=")[1];a&&o.auth.userAuthentication(a).then((r=>r.json())).then((r=>{o.auth.setBearerToken(r.access_token),o.photos.likePhoto("kBJEJqWNtNY"),console.log(o.auth)}))})()})();