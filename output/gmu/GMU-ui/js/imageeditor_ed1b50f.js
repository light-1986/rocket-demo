!function(a,t){a.ui.create("imageeditor",{_data:{container:"",instanceId:"",rotateArr:{left:-90,right:90}},_create:function(){var t=this,e=t.widget(),r=a(t.data("container")||document.body)[0],i=t.data("instanceId"),d=a(new Image),n=t.data("picData"),g=a("<div class='ui-imageeditor-imgwrap'></div>"),s=a("<div class='ui-imageeditor-arrwrap'><a class='ui-imageeditor-larr' href='javascript:;'></a><a class='ui-imageeditor-rarr' href='javascript:;'></a></div>");d.attr({src:n.url,"data-id":n.id,"data-rotate":n.deg}),d.css("-webkit-transform","rotate("+n.deg+"deg)"),g.append(d),e?(e.append(g).append(s),e.parent().length?r!==document.body&&e.appendTo(r):e.appendTo(r)):e=t.widget(a("<div></div>").append(g).append(s)).appendTo(r),e.addClass(i||"ui-imageeditor"),t.data({imgWrap:g,arrWrap:s,lastDegree:n.deg}),t.trigger("create")
},_init:function(){var a=this,t=a.data("arrWrap");t.on("tap",function(t){a._eventHandler(t)}),a.trigger("init")},imageRotate:function(e){var r=this,i=a("img",r.data("imgWrap")),d=parseInt(r.data("lastDegree"))+parseInt(e);return d!=t&&i.css("-webkit-transform","rotate("+d+"deg)"),r.data("lastDegree",d),r.trigger("rotate",i,r.data("lastDegree")),r},_rotateEventHandle:function(t){var e=this,r=a(t.target),i=e.data("rotateArr");"A"==r.pluck("nodeName")&&e.imageRotate(r.hasClass("ui-imageeditor-larr")?i.left:i.right)
},imageClose:function(){var a=this,t=a.widget();return t.hide(),a.trigger("close"),a},imageDel:function(){var t=this,e=a("img",t.data("imgWrap"));return t.imageClose(),t.trigger("delete",e),t},refresh:function(a){var t=this,e=t.data("imgWrap").find("img");e.attr({src:a.url,"data-id":a.id,"data-rotate":a.deg}),e.css("-webkit-transform","rotate("+a.deg+"deg)"),t.data("picData",a),t.data("lastDegree",a.deg)},_eventHandler:function(a){var t=this;switch(a.type){case"click":case"tap":t._rotateEventHandle(a)
}},destroy:function(){var a=this;a.widget().off("click tap"),a._super()}})}(Zepto);