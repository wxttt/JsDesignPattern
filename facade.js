//外观模式为子系统中的一组接口提供了一个一致的界面，此模块定义了一个高级接口，这个接口使得这个子系统更加容易使用。
//最简单的说就是用一个接口封装一系列接口
//在js中经常用来构建兼容各个浏览器的函数

function addMyEvent = function(el, ev, fn){
	if(el.addEventListener){
		el.addEventListener(ev, fn, false);
	}else if(el.attachEvent){
		el.attachEvent('on' + ev, fn);
	}else{
		el['on' + ev] = fn;
	}
};


