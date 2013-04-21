//代理模式（Proxy），为其他对象提供一种代理以控制对这个对象的访问。

//代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。

var girl = function(name){
	this.name = name;
};

var danny = function(girl){
	this.girl = girl;
	this.sendGift = function(gift){
		console.log('hi,' + girl.name + 'danny send you' + gift);	
	};
};

var proxyWang = function(girl){
	this.girl = girl;
	this.sendGift = function(gift){
		(new danny(girl)).sendGift(gift);
	}
};