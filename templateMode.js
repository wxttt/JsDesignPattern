//模版模式
//模版方法定义了操作中的算法股价，而将一些步骤延迟到子类中。模版方法使得子类可以不改变一个算法的结构即可重新定义该算法的某些特定步骤。
//模版方法是一种代码复用的基本技术，在类库中尤其重要，因为他们提取类库中的公共行为。模版方法导致一种反向的控制结构，
//这种结构就是传说中的“好莱坞法则”，即“别找找我们，我们找你”，这指的是父类调用一个类的操作，而不是相反。具体体现是面向对象变成语言里的抽象类
//（以及其中的抽象方法），以及继承该抽象类（和抽象方法）的子类。


//首先定义抽象步骤
var CaffeineBeverage = function(){

};

CaffeineBeverage.prototype.prepareRecipe = function(){
	this.boilWater();
	this.brew();
	this.pourOnCup();
	if(this.customerWantsCondiments()){
		this.addCondiments();//如果顾客需要，就加小料
	}
};

CaffeineBeverage.prototype.boilWater = function(){
	console.log('把水烧开');
};

CaffeineBeverage.prototype.pourOnCup = function(){
	console.log('将饮料倒入杯子中');
};

CaffeineBeverage.prototype.brew = function(){
	throw new Error('这个方法必须重写');
};

CaffeineBeverage.prototype.addCondiments = function(){
	throw new Error('这个方法必须重写');
};

CaffeineBeverage.prototype.customerWantsCondiments = function(){
	return true;
};

//冲咖啡

var Coffee = function(){
	CaffeineBeverage.apply(this);
};

Coffee.prototype = new CaffeineBeverage();

Coffee.prototype.brew = function(){
	console.log('从咖啡机将咖啡倒进去');
};

Coffee.prototype.addCondiments = function(){
	console.log('添加糖和牛奶');
};

Coffee.prototype.customerWantsCondiments = function(){
	return confirm('你想添加糖和牛奶吗？');
};

//煮茶

var Tea = function(){
	CaffeineBeverage.apply(this);
};

Tea.prototype = new CaffeineBeverage();

Tea.prototype.brew = function(){
	console.log('泡茶叶');
};

Tea.prototype.addCondiments = function(){
	console.log('添加柠檬');
};

Tea.prototype.customerWantsCondiments = function(){
	return confirm('你想添加柠檬吗?');
};


