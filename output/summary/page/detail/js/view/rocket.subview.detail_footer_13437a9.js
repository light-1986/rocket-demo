!function(e){rocket.subview.detail_footer=rocket.subview.extend({events:{"click .user-action-prev":"userActionPrev","click .user-action-next":"userActionNext","click .user-score-list li":"checkedScore","click .user-action-view":"viewRank"},tpl:'<div class="detail-footer">\n	<div class="user-score">\n		<div class="user-score-title">你怎么看？</div>\n		<ul class="user-score-list">\n			<li data-userScore="5">\n				<span class="score-checkbox">5分</span>\n				<span class="score-biaoqing biaoqing5">人生巅峰</span>\n			</li>\n			<li data-userScore="4">\n				<span class="score-checkbox">4分</span>\n				<span class="score-biaoqing biaoqing4">潜力股</span>\n			</li>\n			<li data-userScore="3">\n				<span class="score-checkbox">3分</span>\n				<span class="score-biaoqing biaoqing3">马马虎虎</span>\n			</li>\n			<li data-userScore="2">\n				<span class="score-checkbox">2分</span>\n				<span class="score-biaoqing biaoqing2">瞎混</span>\n			</li>\n			<li data-userScore="1" class="last-item">\n				<span class="score-checkbox">1分</span>\n				<span class="score-biaoqing biaoqing1">no zuo no die</span>\n			</li>\n		</ul>\n	</div>	\n	<div class="user-action">\n		<span class="user-action-btn user-action-prev">上一个</span>\n		<span class="user-action-btn user-action-next">下一个</span>\n		<span class="user-action-btn user-action-view">提交</span>\n	</div>\n</div>\n',init:function(s){var a,n=this,i=window.cids||e.localStorage("cids")&&e.localStorage("cids").split(",")||"";
n.curCid=n.options.cid,n.model=new rocket.model.score(null,e.extend({},s)),n.render(),n.cids=i,a=n.cids.inArray(n.curCid),-1!==a&&a===n.cids.length-1?(n.$(".user-action-next").hide(),n.$(".user-action-view").show()):(n.$(".user-action-next").show(),n.$(".user-action-view").hide())},render:function(){var e=this;e.$el.append(_.template(e.tpl,{pageName:"标题"})),e.show()},checkedScore:function(s){var a,n=this,i=(window.cids||e.localStorage("cids").split(",")||"",e(s.currentTarget));data=i.data(),a=n.cids.inArray(n.curCid),n.$(".user-action-btn").addClass("able"),0==a&&n.$(".user-action-prev").removeClass("able"),n.userscore=data.userscore,i.addClass("checked").siblings().removeClass("checked"),_detailData=n.ec.detailData.data;
for(var c=[],r=0;r<_detailData.other.length;r++)c.push(_detailData.other[r].score);var t={cid:_detailData.cid,self_score:_detailData.self.score,other_score:c.join(","),user_score:data.userscore};0==a&&(t.uid=(new Date).getTime()),n.model.fetch({},t)},viewRank:function(){var e=this;e.userscore&&e.navigate("#result")},userActionPrev:function(){var e=this,s=e.cids,a=s.inArray(e.curCid);-1!==a&&0!==a&&e.userscore&&(route="#detail/"+s[a-1],e.navigate(route))},userActionNext:function(){var e=this,s=e.cids,a=s.inArray(e.curCid);
-1!==a&&a<s.length-1&&e.userscore&&(route="#detail/"+s[a+1],e.navigate(route))}})}(Zepto);