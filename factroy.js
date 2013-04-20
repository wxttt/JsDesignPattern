//工场模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。
//该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法指定自己的对象类型。
var page = page || {};
var page.dom = page.dom || {};

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
	this.insert = function(){
		var im = function(where){
			var im = document.createElement（'img');
			img.src = this.url;
			where.appendChild(im);
		}
	}
};

page.dom.factory = function(type){
	if(page.dom[type] !== undefined){
		return new page.dom[type]();
	}else{
		throw TypeError('type is not right');
	}
};

var o = page.dom.factory('Link');
o.url = 'http:/xxx.com';
o.insert(document.body);