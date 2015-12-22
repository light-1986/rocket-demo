+function(t){var e=function(e,i){this.element=t(e),this.params=t.extend({},this.getDefaults(),i||{}),this.selector=this.params.itemSelector,this.iconSelector=this.params.iconSelector,this.iconContainer=this.element.siblings(this.iconSelector),this.startX=0,this.startY=0,this.lastX=0,this.listW=this.element.width(),this.curIndex=this.params.startIndex,this.items=this.element.children(this.selector),this.len=Math.ceil(this.items.length),this.init("slider")};e.DEFAULTS={itemSelector:".topic-gallery-item",iconSelector:".topic-gallery-icons",startIndex:0,iconCurClass:"cur",isShowIcon:!0,onItemClick:function(){},onAfterChange:function(){}},e.prototype.move=function(t){var e=this,i=this.iconContainer,s=e.params;
setTimeout(function(){i.find("i").eq(t).addClass(s.iconCurClass).siblings("i").removeClass(s.iconCurClass),s.onAfterChange(t)},200)},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.init=function(){for(var e,i=this,s=this.element,n=i.selector,o=this.iconContainer,r=e=i.len;i.params.isShowIcon&&e--;)o.append("<i></i>");o.find("i").eq(i.params.startIndex).addClass(i.params.iconCurClass),r>1?s.on("touchstart",n,t.proxy(i.touchstart,i)).on("touchmove",n,t.proxy(i.touchmove,i)).on("touchend",n,t.proxy(i.touchend,i)):s.on("click",n,t.proxy(i.itemClick,i))
},e.prototype.touchstart=function(t){var e=this;e.startX=e.lastX=t.touches&&t.touches[0].clientX,e.startY=t.touches&&t.touches[0].clientY,e.curX=-e.listW*e.curIndex},e.prototype.touchmove=function(t){var e=this,i=t.changedTouches&&t.changedTouches[0].clientX,s=i-e.lastX;Math.abs(i-e.startX)<10||(e.lastX=i,e.curX+=s,e.element.css({"-webkit-transform":"translateX("+e.curX+"px)"}),0!=s&&t.preventDefault())},e.prototype.touchend=function(t){var e=this,i=e.curIndex,s=e.len,n=t.changedTouches&&t.changedTouches[0].clientX-e.startX,o=t.changedTouches&&t.changedTouches[0].clientY-e.startY;
if(0===n&&0===o)return void e.itemClick(t);n>50&&0!==i&&(e.curIndex=i-1,e.move(e.curIndex)),-50>n&&i!==s-1&&(e.curIndex=i+1,e.move(e.curIndex));var n=-e.listW*e.curIndex;e.timeout=setTimeout(function(){e.element.css({"-webkit-transform":"translateX("+n+"px)","-webkit-transition":"-webkit-transform 350ms cubic-bezier(0, 0, 0.25, 1)"})},0)},e.prototype.itemClick=function(e){var i=this;i.params.onItemClick(t(e.target).closest(i.selector)),e.preventDefault()},e.prototype.reset=function(){var t,e=this;
e.listW=e.element.width(),t=-e.listW*e.curIndex,e.element.css({"-webkit-transform":"translateX("+t+"px)"})},e.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var i=t.fn.topicSlider;t.fn.topicSlider=function(i){return this.each(function(){var s=t(this),n=s.data("bs.slider"),o="object"==typeof i&&i;n||s.data("bs.slider",n=new e(this,o)),"string"==typeof i&&n[i]()})},t.fn.topicSlider.Constructor=e,t.fn.topicSlider.noConflict=function(){return t.fn.topicSlider=i,this
}}(Zepto);