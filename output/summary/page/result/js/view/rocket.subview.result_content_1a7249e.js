!function(e){rocket.subview.result_content=rocket.subview.extend({el:"#result_page_content",events:{"click .result-btn-score":"goShare"},cidNameList:{1001:"百度",1002:"阿里巴巴",1003:"腾讯",1004:"小米",1005:"京东",1006:"联想",1007:"360",1008:"华为",1009:"聚美",10010:"陌陌",10011:"锤子"},tpl:'<div class="show-join-people">已有<span class="people-number"><%=data.user%></span>位网友参与</div>\n<div class="result-content">\n	<table class="result-content-table">\n		<tr>\n			<th class="result-content-table-title"><span>被评估的公司</span></th>\n			<th class="even">绩效总分</th>\n		</tr>\n		<% if(errno == 0){ %>\n		<% _.each(data.list, function(item, i){%>\n		<tr class="<%= item.commented ? \'commented\' : \'\' %>">\n			<td class="logo-icon logo-<%=item.logobg%>">\n				<% if(i < 3){ %>\n				<span class="logo-number"><%=i+1%></span>\n				<% } %>\n			</td>\n			<td class="even overall-score"><%= item.score %>分</td>\n		</tr>\n\n		<% }) %>\n		<% } %>\n	</table>\n	\n</div>\n\n\n',init:function(n){var t,o=this,i=window.cids||e.localStorage("cids")&&e.localStorage("cids").split(",")||[],s=[];
o.model=new rocket.model.result(null,e.extend({},n));for(var a=0;3>a;a++)s.push(o.cidNameList[i[a]]);t="我刚给"+s.join(",")+"等几家公司评了年终绩效，你也来爽一爽吧！",wx.onMenuShareAppMessage({title:document.title,desc:t,link:location.href.split("#")[0],imgUrl:"http://m.baidu.com/static/news/webapp/webappandroid/img/webapp-news-logo.png"}),wx.onMenuShareTimeline({title:t,link:location.href.split("#")[0],imgUrl:"http://m.baidu.com/static/news/webapp/webappandroid/img/webapp-news-logo.png"}),o.isFirstLoad=!0,o.show()},registerEvents:function(){var e=this,n=e.ec;
e.model.on("change",e.render,e),n.on("pagebeforechange",e.onpagebeforechange,e)},unregisterEvents:function(){{var e=this;e.ec}e.model.off("change",e.render,e)},onpagebeforechange:function(e){{var n=this,t=(e.from,e.to);e.params}if(t==n.ec){if(n.isFirstLoad){if(n.loadingLock)return;n.loadingLock=!0,n.model.fetch({type:"POST",success:function(){n.isFirstLoad=!1,n.loadingLock=!1},error:function(){n.loadingLock=!1}})}n.$el.show()}},render:function(n){var t=this,o=n.toJSON();t.$el.html(_.template(t.tpl,e.extend({},o,t.options))),t.hideLoading()
},goShare:function(){}})}(Zepto);