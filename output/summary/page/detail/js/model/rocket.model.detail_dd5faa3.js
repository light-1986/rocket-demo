!function(i){rocket.model.detail=rocket.model.extend({initialize:function(i,t){var e=this;e.options=t,e.curCid=t.cid},cidList:{1001:"baidu",1002:"alibaba",1003:"tengxun",1004:"xiaomi",1005:"jd",1006:"lenovo",1007:"360",1008:"huawei",1009:"jumei",10010:"momo",10011:"chuizi"},getCidList:function(){return this.cidList},fetch:function(t){var e=this,o=i.extend({type:"get",dataType:"jsonp",url:"http://baijia.baidu.com/ajax/kpi&t=list&file="+e.cidList[e.curCid],data:{t:"list",file:e.cidList[e.curCid]}},t);
return Backbone.Model.prototype.fetch.call(e,o)}})}(Zepto);