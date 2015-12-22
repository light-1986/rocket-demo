;(function($){

rocket.subview.result_content = rocket.subview.extend({

	el : '#result_page_content'

    ,events:{
        "click .result-btn-score":"goShare"
    }

    , cidNameList:{
        "1001":"百度",
        "1002":"阿里巴巴",
        "1003":"腾讯",
        "1004":"小米",
        "1005":"京东",
        "1006":"联想",
        "1007":"360",
        "1008":"华为",
        "1009":"聚美",
        "10010":"陌陌",
        "10011":"锤子"
    }

    , tpl : __inline("../../tpl/result_content.tpl.html")
    
	, init : function(options){
		var me = this,  
            _cids = window.cids || $.localStorage("cids") && $.localStorage("cids").split(",") || [],
            _cnames = [],
            _title;

        me.model = new rocket.model.result(
            null,
            $.extend({}, options)
        )

        for (var i = 0; i < 3; i++) {
            _cnames.push( me.cidNameList[ _cids[i] ] );
        };

        _title = "我刚给" + _cnames.join(",") + "等几家公司评了年终绩效，你也来爽一爽吧！";

        setTimeout(function(){
            // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接
            wx.onMenuShareAppMessage({
                title: document.title,
                desc: _title,
                link: location.href.split('?')[0],
                imgUrl: 'http://m.baidu.com/static/news/webapp/webappandroid/img/webapp-news-logo.png'
            });
          

            // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareTimeline({
                title: _title,
                link: location.href.split('?')[0],
                imgUrl: 'http://m.baidu.com/static/news/webapp/webappandroid/img/webapp-news-logo.png'
            });
        }, 100);

        me.isFirstLoad = true;
		me.show();
	}

    ,registerEvents: function(){
        var me = this,
            ec = me.ec;

        // @note: 子页面级别的事件，避免使用页面级别事件中心ec
        me.model.on('change', me.render, me);
        ec.on("pagebeforechange", me.onpagebeforechange, me)
    }

    , unregisterEvents: function(){
        var me = this,
            ec = me.ec;

        me.model.off('change', me.render, me);
    }

    , onpagebeforechange: function(params){
        var me = this, 
            from = params.from,
            to = params.to,
            param = params.params;

        if(to == me.ec){
            if(me.isFirstLoad){
                if(me.loadingLock){
                    return;
                }
                me.loadingLock = true;
                me.model.fetch({
                    type:"POST"
                    , success: function(model){
                        me.isFirstLoad = false;
                        me.loadingLock = false;
                    }        
                    , error: function(){
                        me.loadingLock = false;
                    }
                });
            }
            // @note: 平滑子页面，显示不隐藏
            me.$el.show();
        }

    }
    , render: function(result){
            var me = this;

            var data = result.toJSON();
            //debugger;
            //var data = {};
            me.$el.html(
                _.template(
                    me.tpl
                    , $.extend({}, data, me.options)
                )
            )

            /*me.append( new rocket.subview.detail_footer(
                $.extend({}, me.options)
                , me
            ));*/

            me.hideLoading();
        }
    , goShare: function(){
        var me = this;
        
    }

})
})(Zepto);
