!function(t,o){t.ui.create("gotop",{_data:{useAnim:!0,afterScroll:function(){},touchendHandler:function(){}},_create:function(){var e=this,a=e.widget(),n=t(e.data("container")||document.body);a==o&&(a=e.widget(t('<div class="ui-gotop"></div>'))),!a.hasClass("ui-gotop")&&a.addClass("ui-gotop"),a.html("<span>&nbsp;</span>"),(e.data("container")||!a.parent().length)&&a.appendTo(n),e.trigger("create").data("container",n)},_init:function(){var o=this,e=t.bind(o._eventHandler,o);o.data("_eventHandler",e),t.os.android&&2.1==parseFloat(t.os.version).toFixed(1)&&t(document).on("touchstart",e),t(document).on("touchmove mousewheel scrollStop",e),t(window).on("scroll",e),o.widget().on("click",e),o.on("destroy",function(){o.widget().off("click",e),t(document).off("touchmove touchend mousewheel scrollStop",e),t(window).off("scroll",e),t.os.android&&2.1==parseFloat(t.os.version).toFixed(1)&&t(document).off("touchstart",e)
}).trigger("init")},_scrollTo:function(){var o,e=this,a=window.pageYOffset,n=e.data("node")?t(e.data("node")).offset().top:0;return e.data("useAnim")?e.hide().trigger("goTop",o=t.later(function(){if(a>n){a-=100;var t=100>a-n?n:a;window.scrollTo(0,t)}else clearInterval(o)},16,!0)):(window.scrollTo(0,n||1),e.hide().trigger("goTop"))},show:function(t){var o=this,e=o.widget();return o.data("isShow")!==!0&&(e.css({display:"block",visibility:"visible"}),o.data("isShow",!0)),e.css(t||{}),o},hide:function(){var t=this;
return t.data("isShow")&&(t.widget().css("display","none"),t.data("isShow",!1)),t},_touchEndHandle:function(o){this.data("touchendHandler")&&this.data("touchendHandler").apply(this,[o])===!1||(window.pageYOffset>t(window).height()?this.show():this.hide())},_touchMoveHandle:function(o){var e=this;t.os.android&&2.1==parseFloat(t.os.version).toFixed(1)?(e.data("moveY",o.touches[0].pageY),Math.abs(e.data("moveY")-e.data("startY"))<30&&(t(o.target).hasClass("ui-gotop")||t(o.target).parent().hasClass("ui-gotop"))?t.later(function(){e._scrollTo().hide().data("afterScroll")&&e.data("afterScroll").apply(e)
},400):e.hide()):e.hide()},_eventHandler:function(t){var o=this;switch(t.type){case"touchstart":o.data("startY",t.touches[0].pageY);break;case"touchmove":clearTimeout(o.data("_touchended")),o.data("_touchended",setTimeout(function(){o._touchEndHandle.call(o,t)},300)),o._touchMoveHandle(t);break;case"click":o._scrollTo().hide().data("afterScroll")&&o.data("afterScroll").apply(this);break;case"scroll":clearTimeout(o.data("_touchended"));break;case"mousewheel":case"scrollStop":o._touchEndHandle(t)}},destroy:function(){var o=this;
o.widget().off("click",o.data("_eventHandler")),t(document).off("touchmove mousewheel scrollStop",o.data("_eventHandler")),t.os.android&&2.1==parseFloat(t.os.version).toFixed(1)&&t(document).off("touchstart",o.data("_eventHandler")),o._super()}}).attach("control.fix"),t(document).on("pageInit",function(){})}(Zepto);