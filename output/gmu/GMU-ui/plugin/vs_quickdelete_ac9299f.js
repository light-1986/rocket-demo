!function(t){t.ui.create("quickdelete",{_data:{box:20,offset:{x:0,y:0}},_create:function(){var e=this,i=e.data("input",t(e.data("container"))),a=+new Date,n="ui-input-mask-"+a,d="ui-quickdelete-delete-"+a,s=i.parent(),o=t('<div id="'+d+'" class="ui-quickdelete-button"></div>').css({height:e.data("box"),width:e.data("box")});t.os.android&&t.os.android&&2.1==parseFloat(t.os.version).toFixed(1)&&o.css("-webkit-background-size","20px 20px"),"ui-input-mask"!=s.attr("class")&&(s=t('<div id="'+n+'" class="ui-input-mask"></div>').appendTo(i.parent())),e.widget(s.append(i).append(e.data("deleteElem",o)).css("height",i.height())),e._initButtonOffset().trigger("create")
},_init:function(){var e=this,i=e.data("input"),a=t.bind(e._eventHandler,e);i.on("focus input blur",a),e.data("deleteElem").on("touchstart",a),e.on("destroy",function(){i.off("focus input blur",a),e.data("deleteElem").off("touchstart",a),a=t.fn.emptyFn}),e.trigger("init")},_show:function(){return this.data("deleteElem").css("visibility","visible"),this},_hide:function(){return this.data("deleteElem").css("visibility","hidden"),this},_eventHandler:function(e){var i=this,a=e.type,n=e.target,d=i.data("input");
switch(a){case"focus":case"input":t.trim(d.val())?i._show():i._hide();break;case"mousedown":case"touchstart":n==i.data("deleteElem").get(0)&&(e.preventDefault(),e.formDelete=!0,d.val(""),i._hide().trigger("delete"),d.get(0).focus());break;case"blur":i._hide()}},_initButtonOffset:function(){{var t=this,e=t.data("input"),i=t.data("box"),a=t.widget().offset(),n=t.data("offset"),d=(n.x||0,n.y||0);Math.round((a.height-2*d-i)/2)}return t.data("deleteElem").css({top:14,right:85}),e.css({position:"absolute",top:4,left:10,width:"auto",right:120}),t
}}),t(document).on("pageInit",function(){t("[data-widget=quickdelete]").each(function(e,i){{var a=t(i),n=a.data("quickdelete-size"),d=a.data("quickdelete-offsetx"),s=a.data("quickdelete-offsety");t.ui.quickdelete({container:i,size:parseInt(n,10)||void 0,offset:{x:parseInt(d,10)||void 0,y:parseInt(s,10)||void 0}})}})})}(Zepto);