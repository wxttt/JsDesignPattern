/*
装饰者提供比继承更有弹性的替代方案。 装饰者用用于包装同接口的对象，不仅允许你向方法添加行为，而且还可以将方法设置成原始对象调用（例如装饰者的构造函数）。

装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者后面加上自己的行为以达到特定的目的。
*/

var tree = {};

tree.decorate = function(){
	console.log('make sure the tree won\'t fall');
};

tree.getDecorator = function(decorator){
	tree['decorator'].prototype = this;
	return new tree['decorator'];
};

tree.blueBalls = function(){
	this.decorate = function(){
		this.blueBalls.prototype.decorate();
		console.log("decorate tree with blue balls");
	}
};

tree.redBalls = function(){
	this.decorate = function(){
		this.redBalls.prototype.decorate();
		console.log("decorate tree with red balls");
	}
};

tree = tree.getDecorator('blueBalls');
tree = tree.getDecorator('redBalls');

tree.decorate();

