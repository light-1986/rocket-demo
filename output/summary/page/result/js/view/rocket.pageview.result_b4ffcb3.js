!function(e){rocket.pageview.result=rocket.pageview.extend({el:"#result_page",init:function(t){var n=this;n.setup(new rocket.subview.result_footer(e.extend({},t),n)),n.setup(new rocket.subview.result_content(e.extend({},t),n))},registerEvents:function(){var e=this,t=e.ec;t.on("pagebeforechange",e.onpagebeforechange,e)},onpagebeforechange:function(e){{var t=this,n=(t.ec,e.from,e.to);e.params}n==t&&t.$dialog&&t.$dialog.hide()}})}(Zepto);