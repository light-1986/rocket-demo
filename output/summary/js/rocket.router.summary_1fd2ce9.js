!function(){rocket.router.summary=rocket.router.extend({routes:{"":"index",index:"index",home:"home","detail/:cid":"detail",result:"result"},pageOrder:[],enablePositionRestore:!0,defaultPageTransition:"fade",pageTransition:{},setTitle:function(e){e&&(document.title=e)},index:function(){this.isShared=!0,this.doAction("index",{})},home:function(){this.isShared||(window.location.href=window.location.href.replace("home","index")),this.doAction("home",{})},detail:function(e){this.isShared||(window.location.href=window.location.href.replace(/detail\/.*/,"index")),this.doAction("detail",{cid:e})
},result:function(){this.isShared||(window.location.href=window.location.href.replace("result","index")),this.doAction("result")},doAction:function(e,t,i){setTimeout(function(){var t=i?i:{};if(!t.disable){_.extend({wa_type:e,act:"switch"},t.params?t.params:{})}},0),rocket.router.prototype.doAction.apply(this,arguments)}})}(Zepto);