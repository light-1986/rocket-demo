!function(e){rocket.model.ui_shareWx=rocket.model.extend({initialize:function(e,t){var n=this,o=t;n.options=t,n.type=o.type},getRequestInfo:function(){var e={method:"GET",querystring:"?tn=bdapiweixin_auth&appid=wxf3c5150a1ba3beb5&url="+encodeURIComponent(location.href.split("#")[0])};return e},urlHandler:function(){var e="news.baidu.com"==location.host.toLowerCase()?"/i":"/news";return e},fetch:function(t){var n=this,o=n.getRequestInfo(n.type),r=e.extend({type:o.method,url:n.urlHandler()+(o.querystring||""),data:{}},t);
return Backbone.Model.prototype.fetch.call(n,r)}})}(Zepto);