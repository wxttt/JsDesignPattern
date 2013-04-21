//原型模式（prototype）是指用原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象。s
var vehicleprototype = {
	init: function(mode){
		this.mode = mode;
	},
	getMode: function(){
		console.log('car is: '+ this.mode)
	}
};

var vehicle = function(mode){
	function F(){};

	F.prototype = vehicleprototype;

	var f = new F();

	f.init(mode);

	return f;
};