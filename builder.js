function Product(){
	this.parts = [];
}

Product.prototype = {
	add: function(part){
		this.parts.push(part);
	},
	show: function(){
		for(var i = 0; i< this.parts.length; i++){
			console.log('我有'+ this.parts[i]);
		}
	}
};

function Builder(){
	this.product = new Product();
}

Builder.prototype = {
	buildFirstStep: function(){
		throw new Error('这个函数必须重写');
	},
	buildSecondStep: function(){
		throw new Error('这个函数必须重写');
	},
	getResult: function(){
		throw new Error('这个函数必须重写');
	}
};

function AProductBuilder(){
	Builder.apply(this);
}

AProductBuilder.prototype = new Builder();
AProductBuilder.prototype.constructor = AProductBuilder;
AProductBuilder.prototype.buildFirstStep = function(){
	this.product.add('部件A1');
};

AProductBuilder.prototype.buildSecondStep = function(){
	this.product.add('部件A2');
};

AProductBuilder.prototype.getResult = function(){
	return this.product;
};

function BProductBuilder(){
	Builder.apply(this);
}

BProductBuilder.prototype = new Builder();
BProductBuilder.prototype.constructor = BProductBuilder;
BProductBuilder.prototype.buildFirstStep = function(){
	this.product.add('部件B1');
};

BProductBuilder.prototype.buildSecondStep = function(){
	this.product.add('部件B2');
};

BProductBuilder.prototype.getResult = function(){
	return this.product;
};




function Director(){
	this.doConstruct = function(builder){
		this.builder = builder;
		this.builder.buildFirstStep();
		this.builder.buildSecondStep();
	};
}
var director = new Director();
var builderA = new AProductBuilder();
var builderB = new BProductBuilder();

director.doConstruct(builderA);
director.doConstruct(builderB);
var productA = builderA.getResult();
var productB = builderB.getResult();

productA.show();
productB.show();