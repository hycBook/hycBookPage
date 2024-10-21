"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var CURSOR;Math.lerp=function(e,t,r){return(1-r)*e+r*t};var getStyle=function(e,t){try{return window.getComputedStyle?window.getComputedStyle(e)[t]:e.currentStyle[t]}catch(e){}return""},Cursor=function(){function e(){_classCallCheck(this,e),this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}return _createClass(e,[{key:"move",value:function(e,t){this.cursor.style.left="".concat(e,"px"),this.cursor.style.top="".concat(t,"px")}},{key:"create",value:function(){this.cursor||(this.cursor=document.createElement("div"),this.cursor.id="cursor",this.cursor.classList.add("hidden"),document.body.append(this.cursor));for(var e=document.getElementsByTagName("*"),t=0;t<e.length;t++)"pointer"==getStyle(e[t],"cursor")&&this.pt.push(e[t].outerHTML);document.body.appendChild(this.scr=document.createElement("style")),this.scr.innerHTML="* {cursor: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.5'/></svg>\") 4 4, auto}"}},{key:"refresh",value:function(){this.scr.remove(),this.cursor.classList.remove("hover"),this.cursor.classList.remove("active"),this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}},{key:"init",value:function(){var t=this;document.onmouseover=function(e){return t.pt.includes(e.target.outerHTML)&&t.cursor.classList.add("hover")},document.onmouseout=function(e){return t.pt.includes(e.target.outerHTML)&&t.cursor.classList.remove("hover")},document.onmousemove=function(e){null==t.pos.curr&&t.move(e.clientX-8,e.clientY-8),t.pos.curr={x:e.clientX-8,y:e.clientY-8},t.cursor.classList.remove("hidden")},document.onmouseenter=function(e){return t.cursor.classList.remove("hidden")},document.onmouseleave=function(e){return t.cursor.classList.add("hidden")},document.onmousedown=function(e){return t.cursor.classList.add("active")},document.onmouseup=function(e){return t.cursor.classList.remove("active")}}},{key:"render",value:function(){var e=this;this.pos.prev?(this.pos.prev.x=Math.lerp(this.pos.prev.x,this.pos.curr.x,.15),this.pos.prev.y=Math.lerp(this.pos.prev.y,this.pos.curr.y,.15),this.move(this.pos.prev.x,this.pos.prev.y)):this.pos.prev=this.pos.curr,requestAnimationFrame(function(){return e.render()})}}]),e}();CURSOR=new Cursor;