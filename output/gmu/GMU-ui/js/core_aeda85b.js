!function(t){function e(e,n,i){switch(i){case"attach":t.extend(e,n);break;case"delegate":t.each(n,function(n,i){void 0===e[n]&&(e[n]=function(){var e=t.slice(arguments);e.unshift(this.widget()),i.apply(this,e)})})}}function n(e){for(var n,i=t.ui[e]||{},o=t.slice(arguments,1),r=0;n=i[o[r]];)i=n,r++;return o[r]?n:i}function i(e){var i,o,r,a=/require\(\s*['"]?([^'")]*)/g,s=[];if(t.isPlainObject(e))return e;if(t.isFunction(e)){for(i=e.toString();o=a.exec(i);)(r=o[1])&&!t.ui[r]&&s.push("$.ui."+r);if(s.length)throw"undefined modules: "+s.join(", ");
return e(n)}throw"type error: factory should be function or object"}var o=[];t.ui=t.ui||{version:"1.0 beta",defineProperty:Object.defineProperty,create:function(n,i,r){r||(r=i,i=t.ui.widget);var a=[],s=new i,c=/\b_super\b/,u=s.__proto__,f=function(n){if(n){var i=this,r=t.slice(arguments);t.each(a,function(n,r){var a,s=r.split("."),r=o[s.shift()]||{},c={};t.each(s,function(t,e){a=e,r=r[a]}),r&&(a?c[a]=r:c=r),e(i,c,"delegate")}),i._createWidget.apply(i,r)}};return t.ui[n]=function(t,e){return new f(t,e)
},f.prototype=t.extend(s,{widgetName:n,widgetBaseClass:s.widgetName||i},t.each(r,function(e,n){t.isFunction(n)&&t.isFunction(u[e])&&c.test(n.toString())&&(r[e]=function(){this._super=u[e];var t=n.apply(this,arguments);return delete this._super,t})})),{attach:function(e){a=a.concat(t.isArray(e)?e:e.split(","))}}},define:function(e,n){try{n||(n=e,e="_privateModule");var r=t.ui[e]||(t.ui[e]={}),a=i(n);o[e]=t.extend(r,a)}catch(s){throw new Error(s)}}}}(Zepto),function(t,e){t.ui.define("ex",function(){var n,i={},o=Object.prototype.toString;
t.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(t,e){i["[object "+e+"]"]=e.toLowerCase()}),t.implement=function(n,i,o){var r=i?t:t.fn;return t.each(n,function(t,n){var i=r[t];(i==e||!i.$ex||o)&&(n.$ex=!0,r[t]=n)}),t},t.implement({_guid:0,emptyFn:function(){},type:function(t){return null==t?String(t):i[o.call(t)]||"object"},isNull:function(t){return null===t},isUndefined:function(t){return t===e},slice:function(t,e){return Array.prototype.slice.call(t,e||0)},bind:function(e,n){return function(){var i=(i||[]).concat(t.slice(arguments));
e.apply(n,i)}},guid:function(){return this._guid++},later:function(t,e,n,i,o){var e=e||0,r=function(){t.apply(i,o)};return n?setInterval(r,e):setTimeout(r,e)},alert:function(){var t=!1;return function(e,n){t||(window.alert(e),n&&(t=!0))}}(),parseTpl:function(t,e){var n="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+t.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/<%=([\s\S]+?)%>/g,function(t,e){return"',"+e.replace(/\\'/g,"'")+",'"}).replace(/<%([\s\S]+?)%>/g,function(t,e){return"');"+e.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"
}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",i=new Function("obj",n);return e?i(e):i},loadFile:function(e,n,i){var o,r,a=/\.css(?:\?|$)/i.test(e),s=document.head||document.getElementsByTagName("head")[0],c=document.createElement(a?"link":"script"),n=n||t.emptyFn;a?(c.rel="stylesheet",c.href=e,s.appendChild(c)):(r=function(){n(),clearTimeout(o)},o=setTimeout(function(){throw r(),new Error("failed to load js file:"+e)},i||50),c.addEventListener("load",r,!1),c.async=!0,c.src=e,s.insertBefore(c,s.firstChild))
}},!0);var r=t.fn.on,a=t.fn.off,s=t.fn.trigger,c=["tap","singleTap","doubleTap","swipe","swipeLeft","swipeRight","swipeUp","swipeDown "],u={touchstart:"mousedown",touchend:"mouseup",touchmove:"mousemove",tap:"click"},f=function(t){var e=[];return(t||"").split(" ").forEach(function(t){e.push("ontouchstart"in window?t:u[t]?u[t]:t)}),e.join(" ")};t.implement({on:function(t,e,n){return r.call(this,f(t),e,n)},off:function(t,e,n){return a.call(this,f(t),e,n)},offset:function(t){if(0==this.length)return null;
var e="getBoundingClientRect"in this[0]?this[0].getBoundingClientRect():function(t){for(var e=t.offsetTop,n=t.offsetLeft,i=t.offsetWidth,o=t.offsetHeight;t.offsetParent;)t=t.offsetParent,e+=t.offsetTop,n+=t.offsetLeft;return e-=window.pageYOffset,n-=window.pageXOffset,{top:e,left:n,right:n+i,bottom:e+o,width:i,height:o}}(this[0]);return{left:e.left+(t?0:window.pageXOffset),top:e.top+(t?0:window.pageYOffset),width:e.width,height:e.height}},trigger:function(e){var n=t.slice(arguments),i=t.fn.trigger.caller.arguments;
return"string"==t.type(e)&&(n[0]=t.Event(e)),i.length&&t.inArray(n[0].type,c)>-1&&(n[0].originalEvent=i[0]),s.apply(this,n)}},!1,!0),t(window).on("scroll",function(){clearTimeout(n),n=setTimeout(function(){t(document).trigger("scrollStop")},50)})})}(Zepto),function(t){var e="behavior-",n="ontouchstart"in window,i=n?"touchstart":"mousedown",o=n?"touchend":"mouseup",r=null,a=!1,s=function(n){var a=n.currentTarget||n.srcElement,s=t(a).data(e+"className")||r&&r.data(e+"className");switch(n.type){case i:a!==document?(r&&r.removeClass(s),r=t(a),n._target=a,r.addClass(s)):!n._target&&r&&r.removeClass(s)&&(r=null);
break;case o:r&&r.removeClass(s)&&(r=null)}};t.implement({behavior:function(n){return n=n||"",a||(a=!0,t(document).on([i,o].join(" "),s)),this.each(function(){var o=t(this),a=o.data(e+"className")||"";r&&r[0]==this&&r.removeClass(a)&&n&&r.addClass(n),o.css("-webkit-tap-highlight-color","rgba(255,255,255,0)").data(e+"className",n),!a&&n?o.on(i,s):a&&!n&&o.off(i,s)})}},!1,!0)}(Zepto),function(t,e){t.ui.create("widget",function(){},{_createWidget:function(n,i){var o=this;t.isPlainObject(n)&&(i=n||{},n=e),t.extend(o,{_element:n&&t(n),_data:t.extend({status:!0,plugins:{}},o._data,i)}),o._create(),o._init(),o.widget().on("touchstart touchend tap",function(t){(t.bubblesList||(t.bubblesList=[])).push(o)
})},_create:function(){},_init:function(){},destroy:function(){var e=this;t.each(e.data("plugins"),function(t,e){e.destroy()}),e.trigger("destroy").off().widget().remove(),e.__proto__=null,t.each(Object.keys?Object.keys(e):e,function(t,n){delete e[n]})},data:function(n,i){var o=this._data;return t.isPlainObject(n)?t.extend(o,n):i!==e?o[n]=i:o[n]},widget:function(t){return this._element=t||this._element},component:function(n,i){var o=this,r=o.data("plugins");try{t.isFunction(i)?r[n]=i.apply(o):i!==e&&(r[n]&&r[n].destroy(),delete r[n])
}catch(a){}return r[n]},on:function(t,e,n){var i=this,t=t.toLowerCase(),o=i._callbacks||(i._callbacks={}),r=o[t]||(o[t]=[]);return r.push([e,n]),i},off:function(t,e){var n,i=this;if(t){if(n=i._callbacks)if(t=t.toLowerCase(),e){var o=n[t];if(!o)return i;for(var r=0,a=o.length;a>r;r++)if(o[r]&&e===o[r][0]){o[r]=null;break}}else n[t]=[]}else i._callbacks={};return i},trigger:function(e){var n,i,o,r=this,e=e.toLowerCase(),a=r.data("on"+e),s=t.slice(arguments,1);if(a&&a.apply(r,s),!e||!(i=r._callbacks))return r;
if(n=i[e])for(var c=0,u=n.length;u>c;c++)o=n[c],o[0].apply(o[1]||r,s);return r}}),t(document).ready(function(){t(document).trigger("pageInit")})}(Zepto),function(t,e){t.ui.define("control",function(){var n=t.os,i=parseFloat(n.version),o=!i,r=n.ios,a=(n.android,/htc_sensation_z710e/i.test(navigator.userAgent)),s={};return s.fix=function(n,s){var c,u,f=t(n),n=f.get(0),l=t.extend({zIndex:999},s||{}),p=r?70:0;return!(o||r&&i>=5)||n.isFixed||a?(f.css("position","absolute").css(l),void(n.isFixed||(n.isFixed=!0,u=s.bottom!==e?"bottom":"top",c=parseFloat(f.css(u))||0,t(document).on("scrollStop",function(){f.css(u,c+("bottom"==u?-window.pageYOffset-p:window.pageYOffset+p)+"px")
})))):(f.css("position","fixed").css(l),void(n.isFixed=!0))},s.setFloat=function(e){var n=t(e),i=n.clone().css({opacity:0,display:"none"}).attr("id",""),o=!1,r={},a=n.css("position")||"static",c=function(){s.fix(n,{x:0,y:0}),i.css("display","block"),o=!0},u=function(){n.css("position",a),i.css("display","none"),o=!1},f=function(t){var e=i.get(0).getBoundingClientRect().top||n.get(0).getBoundingClientRect().top,t=t||0+e;0>t&&!o?c():t>0&&o&&u()};n.after(i),t(document).on("touchstart",function(t){r.y=t.touches[0].pageY
}).on("touchmove",function(t){var e=t.touches[0].pageY-r.y;r.y=t.touches[0].pageY,f(e)}),t(window).on("scroll",function(){f()})},s})}(Zepto);