!function(a,t){a.ui.create("navigator",{_data:{container:"",defTab:0,isSwipe:!0,onverticalswipe:function(){},ontabselect:function(){}},_create:function(){var t=this,e=t.data("content"),i=t.data("fixContent");a.isArray(e)?(t._createNavUI(),i&&a.isArray(e)?t._createFixTab():t._createRenderFixTab()):(t._createRenderNavUI(),i&&a.isArray(e)?t._createFixTab():t._createRenderFixTab()),t.trigger("create")},_init:function(){var e=this,i=e.widget(),r=e.data("navList"),n=e.data("listWrap"),d=e.data("fixElem"),s=e.data("defTab"),o=e.data("tabNum"),c=[],l=a.bind(e._eventHandler,e),f="ortchange";
e.data("fixNum")&&d&&d.each(function(a){this.index=a+o}),r.each(function(a){this.index=a,c[a]=a?c[a-1]+parseInt(this.offsetWidth):parseInt(this.offsetWidth)}),e.data("lastTabIndex",-1),e.data("tabWidthSumArr",c),n.css("width",c[o-1]+"px"),e._loaded(),e.data("wrapOffsetWidth",e.data("myScroll").scrollerW-c[o-1]),e.data("defTab")!=t&&(e.data("isDefTab",!0),e.switchTo(parseInt(s))),d&&d.on("tap",l),i.on("touchmove",l),a(window).on(f,l),e.on("destroy",function(){d&&d.off("click tap",l),i.off("touchmove",l),a(window).off(f,l)
}),e.trigger("init")},_createNavUI:function(){for(var t,e,i,r=this,n=r.widget(),d=a(r.data("container")||document.body)[0],s=r.data("content"),o=s.length,c=r.data("instanceId"),l=[],f=[],h=0;o>h;h++)l[h]="<li><a href='javascript:;'>"+s[h].text+"</a></li>";i=a("<div class='ui-navigator-wrap'></div>"),e=a("<ul class='ui-navigator-list clearfix'></ul>"),t=a(l.join("")),i.append(e.prepend(t)),n?(n.append(i),n.parent().length?d!==document.body&&n.appendTo(d):n.appendTo(d)):n=r.widget(a("<div></div>").append(i)).appendTo(d),r.data({tabNum:o,screenWrap:i,listWrap:e,navList:t}),a.each(s,function(a,t){f.push(t.url)
}),r.data("tabHref",f),n.addClass(c||"ui-navigator")},_createRenderNavUI:function(){var t=this,e=t.widget(),i=t.data("instanceId"),r=[];!e&&(e=t.widget(a(t.data("content")).parent())),t.data({screenWrap:e.find(".ui-navigator-wrap"),listWrap:e.find(".ui-navigator-list"),navList:e.find(".ui-navigator-list li")}),a.each(t.data("navList"),function(t,e){r.push(a(e).find("a")[0].href)}),t.data({tabNum:t.data("navList").length,tabHref:r}),e.addClass(i||"ui-navigator")},_createFixTab:function(){for(var t=this,e=t.widget(),i=t.data("fixContent"),r=[],n=0;n<i.length;n++){var d=a("<div class='ui-navigator-fix'><a href='"+i[n].url+"'>"+i[n].text+"</a></div>");
"right"==i[n].pos?e.append(d):e.prepend(d)}a.each(i,function(a,t){r.push(t.url)}),t.data({fixTabHref:r,fixNum:i.length,fixElem:e.find(".ui-navigator-fix")})},_createRenderFixTab:function(){var t=this,e=t.widget(),i=e.find(t.data("fixContent")),r=[];a.each(i,function(t,e){r.push(a(e).find("a")[0].href)}),t.data({fixNum:i.length,fixElem:i,fixTabHref:r})},switchTo:function(t){var e,i=this,r=i.data("tabNum"),n=parseInt(t),d=i.data("fixElem"),s=i.data("navList"),o=i.data("myScroll"),c=i.data("lastTabIndex"),l=i.data("tabHref"),f=i.data("fixTabHref"),h="";
if(n>=r){if(e=a(d[n-r]).children("a")[0],c==n)return e.href="javascript:;",i;h=f[n-r]}else{if(e=a(s[n]).children("a")[0],c==n)return e.href="javascript:;",i;h=l[n]}if(-1!=h.indexOf("#")||-1==c)e.href=h;else if(!/javascript/.test(h))return location.href=h,i;return n>=r?a(d[n-r]).addClass("fix-cur"):(a(s[n]).addClass("cur"),i.data("isSwipe")&&o.hScroll&&i._swipeNextPre(n,i._screenPos(n))),c>=r?a(d[c-r]).removeClass("fix-cur"):c>=0&&a(s[c]).removeClass("cur"),i.data("lastTabIndex",n),i.trigger("tabselect"),i
},getCurTab:function(){var t=this,e=t.data("lastTabIndex"),i=t.data("content"),r=t.data("fixContent"),n=t.data("tabNum"),d=[],s=null;return a.isArray(i)?(d=e>=n?r[e-n]:i[e],s={text:d.text,url:d.url}):(d=e>=n?t.data("fixElem")[e-n]:t.data("navList")[e],s={text:a(d).find("a").html(),url:a(d).find("a")[0].href}),{index:e,info:s}},_switchEventHandle:function(e){var i=this,r="LI"==e.target.tagName?a(e.target)[0]:a(e.target).parents("li").get(0)||a(e.target).parents("div").get(0);r&&r.index!=t&&i.switchTo(r.index)
},_loaded:function(){var t=this,e=t.data("screenWrap")[0],i=t.data("isSwipe")?!0:!1,r={};r=new iScroll(e,{hScroll:i,vScroll:!1,hScrollbar:!1,vScrollbar:!1,onScrollMove:function(){t.data("scrollTimer",setTimeout(a.bind(t._setShadow,t),1))},onScrollEnd:function(a){this.absDistY>this.absDistX&&t.trigger("verticalswipe",a)},onTouchEnd:function(a){this.moved||this.absDistY||this.isStopScrollAction||t._switchEventHandle(a)}}),t.data("myScroll",r)},_setShadow:function(){var a=this,t=a.data("screenWrap"),e=a.data("myScroll"),i=Math.abs(e.maxScrollX);
e.x<0?(t.addClass("ui-navigator-shadowall"),Math.abs(e.x)>=i&&(t.removeClass("ui-navigator-shadowall"),t.addClass("ui-navigator-shadowleft"),t.removeClass("ui-navigator-shadowright"))):(t.removeClass("ui-navigator-shadowall"),t.removeClass("ui-navigator-shadowleft"),t.addClass("ui-navigator-shadowright"))},_touchMoveHandle:function(a){a.preventDefault()},_swipeNextPre:function(t,e){var i=this,r=0,n=i.data("tabNum"),d=i.data("navList"),s=i.data("myScroll"),o=i.data("isDefTab"),c=s.x||0;switch(e){case"defTab":r=i.data("defTabMoveX")||0,s.scrollTo(r,0,400),o&&(i.data("isDefTab",!1),i.data("defTabMoved",!0));
break;case 0:r=0,s.scrollTo(r,0,400),o&&(i.data("isDefTab",!1),i.data("defTabMoved",!0));break;case n-1:r=s.wrapperW-s.scrollerW,s.scrollTo(r,0,400),o&&(i.data("isDefTab",!1),i.data("defTabMoved",!0));break;case"first":if(1==t&&!c)return;r=c+parseInt(d[t-1].offsetWidth),s.scrollTo(r,0,400);break;case"last":if(t==n-2&&Math.abs(c)==Math.abs(s.maxScrollX))return;r=c-parseInt(d[t-1].offsetWidth),s.scrollTo(r,0,400);break;case"middle":}i.data("isDefTab",!1),i.data("nextPreTimer",setTimeout(a.bind(i._setShadow,i),1))
},_screenPos:function(a){var t=this,e=t.data("tabNum")-1;if(!a||a==e)return a;var i=t.data("navList"),r=t.data("tabWidthSumArr"),n=Math.abs(t.data("myScroll").x)||0,d=i[0].offsetLeft-t.data("screenWrap")[0].offsetLeft,s=r[a]+d-n,o=r[a-1]+d-n,c=r[a+1]+d-n,l=t.data("myScroll").wrapperW,f=parseInt(i[a].offsetWidth),h=parseInt(i[a-1].offsetWidth),u="middle";return t.data("isDefTab")?(u="defTab",t.data("defTabMoveX",l-s),u):u=h>o&&c>l?"middle":f>=s||h>o?"first":s>=l||c>l?"last":"middle"},_orientationEvent:function(){var a=this,t=a.data("myScroll"),e=a.data("wrapOffsetWidth"),i=a.data("defTab"),r=a.data("navList"),n=r[0].offsetLeft-a.data("screenWrap")[0].offsetLeft;
t.refresh(),a.data("isSwipe")||a.data("listWrap").css("width",t.wrapperW-e+"px"),!a.data("isDefTab")&&a.data("defTabMoved")&&(t.scrollTo(t.wrapperW-a.data("tabWidthSumArr")[i]-n,0,400),a.data("defTabMoved",!1))},_eventHandler:function(a){var t=this;switch(a.type){case"click":case"tap":t._switchEventHandle(a);break;case"touchmove":t._touchMoveHandle(a);break;case"ortchange":t._orientationEvent(a)}},destroy:function(){var a=this,t=a.data("fixElem"),e=a.data("scrollTimer"),i=a.data("nextPreTimer"),r=a.data("orientTimer");
t&&t.remove(),e&&clearTimeout(e),i&&clearTimeout(i),r&&clearTimeout(r),a.data("myScroll").destroy(),a._super()}}).attach("control.fix")}(Zepto);