!function(e){var t=function(e){var t=arguments,r=e;try{r.setItem("cache","test"),r.removeItem("cache")}catch(a){try{r.clear(),r.setItem("cache","test"),r.removeItem("cache")}catch(a){r=t[1]?t.callee.apply(t,[].slice.call(t,1)):!1}}return delete t,r},r=function(){try{return t(localStorage,sessionStorage)}catch(e){return!1}}(),a=6e4,n=Date.now(),c=/^[\[{].+[\]}]$/,l=function(e){if(r){var t,c=60*a*24;if(e=e||0,(t=r.getItem("_expires"))&&t>n)return!1;for(var l,s,i,o=r.length,u=0;o>u;u++)s=r.key(u),l=r.getItem(s),l&&-1!=l.indexOf("_expires")&&(i=l.match(/_expires":(\d+)/)[1],i>n)||r.removeItem(s);
return r.setItem("_expires",c*e+n)}};l(15),addEventListener("error",function(e){console.log(e,"错误事件"),/QUOTA_EXCEEDED_ERR/i.test(e.message)&&(r.clear(),alert("您的浏览器本地数据已经到达最大，已经帮您清空..."),location.reload())},!1),e.localStorage=function(t,l,s){if(!r)return!1;if(null===t&&r.clear(),"undefined"!=typeof l)return null===l?r.removeItem(t):(isNaN(+s)||(l={value:l,_expires:n+s*a}),r.setItem(t,e.isObject(l)?JSON.stringify(l):l),l.value||l);var i,o=null;return o=r.getItem(t),c.test(o)&&(o=JSON.parse(o),e.isObject(o)&&(i=o._expires)&&(n>i?(r.removeItem(t),o=null):o="string"==typeof(o=o.value)&&c.test(o)?JSON.parse(o):o)),o
}}(Zepto);