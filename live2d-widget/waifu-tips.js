"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var f,i={},t=Object.prototype,l=t.hasOwnProperty,d=Object.defineProperty||function(t,e,n){t[e]=n.value},e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(f){a=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a,i,c,s,o=e&&e.prototype instanceof w?e:w,u=Object.create(o.prototype),l=new j(r||[]);return d(u,"_invoke",{value:(a=t,i=n,c=l,s=h,function(t,e){if(s===y)throw Error("Generator is already running");if(s===v){if("throw"===t)throw e;return{value:f,done:!0}}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){var r=_(n,c);if(r){if(r===g)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(s===h)throw s=v,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);s=y;var o=p(a,i,c);if("normal"===o.type){if(s=c.done?v:m,o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(s=v,c.method="throw",c.arg=o.arg)}})}),u}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var h="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function w(){}function s(){}function u(){}var b={};a(b,o,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(A([])));L&&L!==t&&l.call(L,o)&&(b=L);var E=u.prototype=w.prototype=Object.create(b);function S(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function I(s,u){var e;d(this,"_invoke",{value:function(n,r){function t(){return new u(function(t,e){!function e(t,n,r,o){var a=p(s[t],s,n);if("throw"!==a.type){var i=a.arg,c=i.value;return c&&"object"==_typeof(c)&&l.call(c,"__await")?u.resolve(c.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):u.resolve(c).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)})}o(a.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}})}function _(t,e){var n=e.method,r=t.iterator[n];if(r===f)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=f,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=p(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=f),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(e){if(e||""===e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(l.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=f,t.done=!0,t};return r.next=r}}throw new TypeError(_typeof(e)+" is not iterable")}return d(E,"constructor",{value:s.prototype=u,configurable:!0}),d(u,"constructor",{value:s,configurable:!0}),s.displayName=a(u,r,"GeneratorFunction"),i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===s||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,a(t,r,"GeneratorFunction")),t.prototype=Object.create(E),t},i.awrap=function(t){return{__await:t}},S(I.prototype),a(I.prototype,n,function(){return this}),i.AsyncIterator=I,i.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var a=new I(c(t,e,n,r),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(E),a(E,r,"Generator"),a(E,o,function(){return this}),a(E,"toString",function(){return"[object Generator]"}),i.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=f)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=f),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=f),g}},i}function asyncGeneratorStep(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){asyncGeneratorStep(r,e,n,o,a,"next",t)}function a(t){asyncGeneratorStep(r,e,n,o,a,"throw",t)}o(void 0)})}}function _createForOfIteratorHelper(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function loadWidget(t){var a,e=t.waifuPath,i=t.apiPath,c=t.cdnPath,s=!1;if("string"==typeof c)s=!0,c.endsWith("/")||(c+="/");else{if("string"!=typeof i)return void console.error("Invalid initWidget argument!");i.endsWith("/")||(i+="/")}function u(t){return Array.isArray(t)?t[Math.floor(Math.random()*t.length)]:t}localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n\t\t\t<div id="waifu-tips"></div>\n\t\t\t<canvas id="live2d" width="800" height="800"></canvas>\n\t\t\t<div id="waifu-tool">\n\t\t\t\t<span class="fa fa-lg fa-comment"></span>\n\t\t\t\t<span class="fa fa-lg fa-paper-plane"></span>\n\t\t\t\t<span class="fa fa-lg fa-user-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-street-view"></span>\n\t\t\t\t<span class="fa fa-lg fa-camera-retro"></span>\n\t\t\t\t<span class="fa fa-lg fa-info-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-times"></span>\n\t\t\t</div>\n\t\t</div>'),setTimeout(function(){document.getElementById("waifu").style.bottom=0},0);var n,o,r,l,f=!1,d=["好久不见，日子过得好快呢……","大坏蛋！你都多久没理人家了呀，嘤嘤嘤～","嗨～快来逗我玩吧！","拿小拳拳锤你胸口！","记得把小家加入 Adblock 白名单哦！"];function p(){fetch("https://v1.hitokoto.cn").then(function(t){return t.json()}).then(function(t){var e="这句一言来自 <span>「".concat(t.from,"」</span>，是 <span>").concat(t.creator,"</span> 在 hitokoto.cn 投稿的。");h(t.hitokoto,6e3,9),setTimeout(function(){h(e,4e3,9)},6e3)})}function h(t,e,n){if(t&&!(sessionStorage.getItem("waifu-text")&&sessionStorage.getItem("waifu-text")>n)){o&&(clearTimeout(o),o=null),t=u(t),sessionStorage.setItem("waifu-text",n);var r=document.getElementById("waifu-tips");r.innerHTML=t,r.classList.add("waifu-tips-active"),o=setTimeout(function(){sessionStorage.removeItem("waifu-text"),r.classList.remove("waifu-tips-active")},e)}}function m(){return y.apply(this,arguments)}function y(){return(y=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"model_list.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent;case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function v(t,e,n){return g.apply(this,arguments)}function g(){return(g=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,n,r){var o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.setItem("modelId",e),localStorage.setItem("modelTexturesId",n),h(r,4e3,10),!s){t.next=11;break}if(a){t.next=7;break}return t.next=7,m();case 7:o=u(a.models[e]),loadlive2d("live2d","".concat(c,"model/").concat(o,"/index.json")),t.next=13;break;case 11:loadlive2d("live2d","".concat(i,"get/?id=").concat(e,"-").concat(n)),console.log("Live2D 模型 ".concat(e,"-").concat(n," 加载完成"));case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}function w(){return b.apply(this,arguments)}function b(){return(b=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n,r;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("modelId"),n=localStorage.getItem("modelTexturesId"),!s){t.next=10;break}if(a){t.next=5;break}return t.next=5,m();case 5:r=u(a.models[e]),loadlive2d("live2d","".concat(c,"model/").concat(r,"/index.json")),h("我的新衣服好看嘛？",4e3,10),t.next=11;break;case 10:fetch("".concat(i,"rand_textures/?id=").concat(e,"-").concat(n)).then(function(t){return t.json()}).then(function(t){1!==t.textures.id||1!==n&&0!==n?v(e,t.textures.id,"我的新衣服好看嘛？"):h("我还没有其他衣服呢！",4e3,10)});case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function x(){return L.apply(this,arguments)}function L(){return(L=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("modelId"),!s){t.next=9;break}if(a){t.next=5;break}return t.next=5,m();case 5:v(n=++e>=a.models.length?0:e,0,a.messages[n]),t.next=10;break;case 9:fetch("".concat(i,"switch/?id=").concat(e)).then(function(t){return t.json()}).then(function(t){v(t.model.id,0,t.model.message)});case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}window.addEventListener("mousemove",function(){return f=!0}),window.addEventListener("keydown",function(){return f=!0}),setInterval(function(){f?(f=!1,clearInterval(n),n=null):n||(n=setInterval(function(){h(u(d),6e3,9)},2e4))},1e3),function(){document.querySelector("#waifu-tool .fa-comment").addEventListener("click",p),document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click",function(){if(window.Asteroids)window.ASTEROIDSPLAYERS||(window.ASTEROIDSPLAYERS=[]),window.ASTEROIDSPLAYERS.push(new Asteroids);else{var t=document.createElement("script");t.src="https://fastly.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js",document.head.appendChild(t)}}),document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click",x),document.querySelector("#waifu-tool .fa-street-view").addEventListener("click",w),document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click",function(){h("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0}),document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click",function(){open("https://github.com/stevenjoezhang/live2d-widget")}),document.querySelector("#waifu-tool .fa-times").addEventListener("click",function(){localStorage.setItem("waifu-display",Date.now()),h("愿你有一天能与重要的人重逢。",2e3,11),document.getElementById("waifu").style.bottom="-500px",setTimeout(function(){document.getElementById("waifu").style.display="none",document.getElementById("waifu-toggle").classList.add("waifu-toggle-active")},3e3)});var t=function(){};console.log("%c",t),t.toString=function(){h("哈哈，你打开了控制台，是想要看看我的小秘密吗？",6e3,9)},window.addEventListener("copy",function(){h("你都复制了些什么呀，转载要记得加上出处哦！",6e3,9)}),window.addEventListener("visibilitychange",function(){document.hidden||h("哇，你终于回来了～",6e3,9)})}(),function(){var t;if("/"===location.pathname){var e=(new Date).getHours();t=5<e&&e<=7?"早上好！一日之计在于晨，美好的一天就要开始了。":7<e&&e<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":11<e&&e<=13?"中午了，工作了一个上午，现在是午餐时间！":13<e&&e<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":17<e&&e<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～":19<e&&e<=21?"晚上好，今天过得怎么样？":21<e&&e<=23?["已经这么晚了呀，早点休息吧，晚安～","深夜时要爱护眼睛呀！"]:"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？"}else if(""!==document.referrer){var n=new URL(document.referrer),r=n.hostname.split(".")[1];t=location.hostname===n.hostname?"欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"):"baidu"===r?"Hello！来自 百度搜索 的朋友<br>你是搜索 <span>".concat(n.search.split("&wd=")[1].split("&")[0],"</span> 找到的我吗？"):"so"===r?"Hello！来自 360搜索 的朋友<br>你是搜索 <span>".concat(n.search.split("&q=")[1].split("&")[0],"</span> 找到的我吗？"):"google"===r?"Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"):"Hello！来自 <span>".concat(n.hostname,"</span> 的朋友")}else t="欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>");h(t,7e3,8)}(),r=localStorage.getItem("modelId"),l=localStorage.getItem("modelTexturesId"),null===r&&(r=3,l=53),v(r,l),fetch(e).then(function(t){return t.json()}).then(function(i){window.addEventListener("mouseover",function(t){var e,n=_createForOfIteratorHelper(i.mouseover);try{for(n.s();!(e=n.n()).done;){var r=e.value,o=r.selector,a=r.text;if(t.target.matches(o))return void h(a=(a=u(a)).replace("{text}",t.target.innerText),4e3,8)}}catch(t){n.e(t)}finally{n.f()}}),window.addEventListener("click",function(t){var e,n=_createForOfIteratorHelper(i.click);try{for(n.s();!(e=n.n()).done;){var r=e.value,o=r.selector,a=r.text;if(t.target.matches(o))return void h(a=(a=u(a)).replace("{text}",t.target.innerText),4e3,8)}}catch(t){n.e(t)}finally{n.f()}}),i.seasons.forEach(function(t){var e=t.date,n=t.text,r=new Date,o=e.split("-")[0],a=e.split("-")[1]||o;o.split("/")[0]<=r.getMonth()+1&&r.getMonth()+1<=a.split("/")[0]&&o.split("/")[1]<=r.getDate()&&r.getDate()<=a.split("/")[1]&&(n=(n=u(n)).replace("{year}",r.getFullYear()),d.push(n))})})}function initWidget(t,e){"string"==typeof t&&(t={waifuPath:t,apiPath:e}),document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n\t\t\t<span>看板娘</span>\n\t\t</div>');var n=document.getElementById("waifu-toggle");n.addEventListener("click",function(){n.classList.remove("waifu-toggle-active"),n.getAttribute("first-time")?(loadWidget(t),n.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout(function(){document.getElementById("waifu").style.bottom=0},0))}),localStorage.getItem("waifu-display")&&Date.now()-localStorage.getItem("waifu-display")<=864e5?(n.setAttribute("first-time",!0),setTimeout(function(){n.classList.add("waifu-toggle-active")},0)):loadWidget(t)}