!function(t){function e(e){var n=this,o={isFollow:!1,animTime:500,curIndex:0,_wrapLeftIndex:0,loop:0,loopDir:1,pages:[],lazyLoad:!1,beforechange:function(){},afterchange:function(){}};return n.options=t.extend(o,e),n.init(),n}e.prototype={init:function(){var e=this;e.$el=t(e.options.$el),e.options._lazyLoad=!e.options.loop&&e.options.lazyLoad,e._wrapLeftIndex=e.options._wrapLeftIndex,e.curIndex=e.options.curIndex,e.options.beforechange(e.curIndex),e._initNodes(),e.options.afterchange(e.curIndex);
var n=e.options.loop;e.touchEnabled=!0,e.options.isFollow?e.initTouchFollow():e.initTouch();var o,i;if(e.$container[0].addEventListener("webkitTransitionEnd",e,!1),e._resizeListener=o=e.delay(function(){e.$el[0].offsetHeight&&t.later(function(){e.refreshPos(),n&&e.startAutoLoop()},500)},200),addEventListener("onorientationchange"in window?"orientationchange":"resize",o),e.options.loop){var s,r=e.options.loopDir<0?"toLeft":"toRight",u=e.touchEv;e._bodyEventListener=i=function(t){e[(u.START_EV===t.type?"stop":"start")+"AutoLoop"]()
},t(window).on(u.START_EV+" "+u.END_EV,i),e.stopAutoLoop=function(){return s&&(clearTimeout(s),s=null),e},e.startAutoLoop=function(){return e.stopAutoLoop(),s=setTimeout(function(){s=null,e.$el[0].offsetHeight&&e[r]()},e.options.loop),e},e.startAutoLoop()}return e},_initNodes:function(){var e,n,o,i=this,s=0,r=i._contentWidth=i.options.width||i.$el[0].clientWidth||t(window).width(),u=i,a=/<\//g,c=u.options._lazyLoad,h=u.curIndex,l=i.$el.html();if(!l.trim())for(var d=0;d<i.options.pages.length;d++)l+="<div></div>";
l=l.replace(a,function(t){return(c&&s!==h?"":u.getPage(s++))+t}),i.$el.html('<div  style="display: -webkit-box;-webkit-transform: translate3d('+h+"px, 0px, 0px);-webkit-user-select: none;-webkit-transition: -webkit-transform "+i.options.animTime+'ms cubic-bezier(0, 0, 0.25, 1)">'+l+"</div>"),i.$container=i.$el.children(),e=i.nodes=i.$container.children(),i.maxIndex=(n=i.nodesLength=e.length)-1;var f=Math.ceil(n/2),p=u._nodes=[];return e.forEach(function(t,e){o=f>e?e:-(n-e),p.push({node:t,left:o,index:e}),t.style.cssText+=";-webkit-transform: translate(-"+e+"00%, 0) translate3d("+o*r+"px, 0px, 0px);"
}),p.sort(function(t,e){return t.left-e.left}),i.curIndex=0,i.move(h,0),i},refreshPos:function(){var t=this._contentWidth=this.$el[0].clientWidth,e=this;return this.setNodeLeft(this.$container[0],this._wrapLeftIndex*t),this._nodes.forEach(function(n){e.setNodeLeft(n.node,n.left*t)}),this},setNodeLeft:function(t,e){var n=t.style;return n.cssText=n.cssText.replace(/translate3d\(([-\d]+)px/g,"translate3d("+e+"px"),this},_setNodesTranslate:function(t){{var e,n,o,i,s=this._nodes,r=this._contentWidth,u=this.nodesLength-1;
this.curIndex}if(0!=t)return 0>t?(e="unshift",n="pop",o=s[0].left-1):(e="push",n="shift",o=s[u].left+1),i=s[n](),i.left=o,s[e](i),this.setNodeLeft(i.node,o*r),this},toLeft:function(){return this.move(this.curIndex-1)},toRight:function(){return this.move(this.curIndex+1)},toCurrent:function(){return this.move(this.curIndex)},getPage:function(e){var n=this.options.pages[e],o=t.isFunction(n)?n():n instanceof Element?n.outerHTML:n;return o},handleEvent:function(t){"webkitTransitionEnd"===t.type&&(this.options.afterchange(this.curIndex),this.touchEnabled=!0,this.options.loop&&this.startAutoLoop())
},move:function(e,n){var o,i=this._wrapLeftIndex=this._wrapLeftIndex+(this.curIndex-e),s=this,o=0>e?this.maxIndex:e>this.maxIndex?0:e,r=this.curIndex-e,u=r>0?-1:1,s=this;for(r&&(s.options._lazyLoad&&(curpage=s.nodes[o],!curpage.firstElementChild&&(curpage.innerHTML=s.getPage(o))),s.curIndex=o,s.options.beforechange(o));r;)r+=u,s._setNodesTranslate(u);return this.setAnimTime(n).setNodeLeft(this.$container[0],i*this._contentWidth),t.later(function(){s.setAnimTime(0)}),this},setAnimTime:function(t){return t=void 0===t?this.options.animTime:t,this.$container.css("-webkit-transition","-webkit-transform "+t+"ms cubic-bezier(0, 0, 0.25, 1)"),this
},delay:function(t,e){var n,o,i=function(){clearTimeout(n),o?n=setTimeout(i,e):(o=!0,t(),setTimeout(function(){o=!1},e))};return i},touchEv:function(){var t=/hp-tablet/gi.test(navigator.appVersion),e="ontouchstart"in window&&!t;return{hasTouch:e,START_EV:e?"touchstart":"mousedown",MOVE_EV:e?"touchmove":"mousemove",END_EV:e?"touchend":"mouseup"}}(),initTouch:function(){var e,n={},o=this,i=this.touchEv;return this.$el.on(i.START_EV,function(t){o.touchEnabled&&t.touches&&1===t.touches.length&&(n.x1=t.touches[0].clientX,n.y1=t.touches[0].clientY,e=setTimeout(function(){e=null
},800))}).on(i.MOVE_EV,function(t){!o.touchEnabled||!t.touches||o.maxIndex<=0||e&&(n.x2=t.touches[0].clientX,n.y2=t.touches[0].clientY,dir=o.swipeDirection(n.x1,n.x2,n.y1,n.y2),("Left"==dir||"Right"==dir)&&t.preventDefault())}),o._touchEndListener=function(){o.touchEnabled&&(e&&n.x2&&Math.abs(n.x1-n.x2)>5&&(o.touchEnabled=!1,"Left"==dir?o.toRight():"Right"==dir?o.toLeft():o.touchEnabled=!0),n={})},t(window).on(i.END_EV,o._touchEndListener),this},initTouchFollow:function(){var e,n,o,i=this.touchEv,s=this,r=null,u=0,a=0,c=0,h=0,l=0,d=0,f=this.$container[0];
return this.$el.on(i.START_EV,function(t){t.touches&&(s.touchEnabled||1==t.touches.length)&&(i.hasTouch||t.preventDefault(),s.setAnimTime(0),r=!0,moveRead=!1,u=t.touches[0].clientX,a=t.touches[0].clientY,l=u,n=s._wrapLeftIndex*s._contentWidth,d=0)}).on(i.MOVE_EV,function(t){if(t.touches&&r&&s.touchEnabled&&!(s.maxIndex<=0)){var o=t.touches[0].clientX,i=t.touches[0].clientY;if(moveRead)e=o-l,s.setNodeLeft(f,n+=e),d=e>0?1:-1,l=o;else{var c=Math.abs(o-u),h=Math.abs(i-a);c/h>1?(t.preventDefault(),t.stopPropagation(),i=null,moveRead=!0):h>5&&(r=!1,i=null)
}}}),s._touchEndListener=function(){r&&s.touchEnabled&&(s.touchEnabled=!1,r=!1,o=l-u,o>50?s.toLeft():-50>o?s.toRight():(s.toCurrent(),s.touchEnabled=!0),r=u=a=c=h=l=e=n=d=o=null)},t(window).on(i.END_EV,s._touchEndListener),this},swipeDirection:function(t,e,n,o){var i=Math.abs(t-e),s=Math.abs(n-o);return i>=s?t-e>0?"Left":"Right":n-o>0?"Up":"Down"},destory:function(t){var e=this;e.stopAutoLoop&&e.stopAutoLoop(),removeEventListener("onorientationchange"in window?"orientationchange":"resize",e._resizeListener),e.$container[0].removeEventListener("",e,!1),e.$el.off(),t&&e.$el.empty(),e.options.$el=null,e.options=null
}},t.fn.touchCarousel=function(t){t.$el=this;var n=new e(t);return n}}(Zepto);