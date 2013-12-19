在JavaScript中对象是作为引用别传递的。所以你可以让每个方法都传回对象的引用。如果让一个类的每个方法都返回this，那么它可就成了一个支持方法链式调用的类。这种变成风格有助于简化代码的编写工作，并且在某种程度上可以让代码更加简洁、易读。很多时候使用链式调用可以避免多次重复使用一个对象变量，从而减少代码量。如果让类的接口保持一致，让复制器和取值器方法都支持链式调用，那么你可以在取值器中使用回调技术。

	window.api = window.api || function(){
		var name = 'hello world';

		this.setName = function(newName){
			name = newName;
			return this;
		}

		this.getName = function(callback){
			callback(name);
			return this;
		}
	}

	var o = new api;
	o.getName(alert).setName('wxttt').getName(alert);