//工场模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。
//该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法指定自己的对象类型。
var page = page || {};
page.dom= page.dom || {};

page.dom.Text = function(){
	this.insert = function(where){
		var txt = document.createTextNode(this.url);
		where.appendChild(txt);
	};
};

page.dom.Link = function(){
	this.insert = function(where){
		var link = document.createElement('a');
		link.href = this.url;
		link.appendChild(document.createTextNode(this.url));
		where.appendChild(link);
	};
};

page.dom.image = function(){
	this.insert = function(where){
		var img = document.createElement('img');
		img.src = this.url;
		where.appendChild(img);
	}
};

page.dom.factory = function(type){
	console.log('type is', type);
	if(page.dom[type] !== undefined){
		return new page.dom[type]();
	}else{
		throw TypeError('type is not right');
	}
};

var o = page.dom.factory('Link');
o.url = 'http:/xxx.com';
o.insert(document.body);

/*
什么时候使用工厂模式

以下几种情景下工厂模式特别有用：

对象的构建十分复杂
需要依赖具体环境创建不同实例
处理大量具有相同属性的小对象
什么时候不该用工厂模式

不滥用运用工厂模式，有时候仅仅只是给代码增加了不必要的复杂度，同时使得测试难以运行下去。
*/