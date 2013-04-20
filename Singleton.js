//传统的单例模式就是保证类只有一个实例，实现的方式一般是判断实例是否存在如果存在直接返回，如果不存在就创建一个再返回。
//在javascript中，单例作为一个命名空间的提供者,从全局的命名空间里提供唯一的访问点来访问该对象。

var singleton = (function(){
	var instantiated;

	function init(){
		return {
			publicMethod: function(){
				console.log('hello, i am publicMethod')
			},
			publicProperty: 'publicProperty'
		}；
	};

	return {
		getInstance: function(){
			if(!instantiated){
				instantiated = init();
			}
			return instantiated;
		}
	}；
}())；
//调用共有方法来获取实例
singleton.getInstance.publicMethod();
singleton.getInstance.publicProperty;

//单例一般用在系统间各种模式的通信协调上
//一个单例的最佳实践

var singletonTester = (function(){
	function singleton(args){
		var args = args || {};
		this.name = 'singleton';
		this.pointX = args['pointx'] || 6;
		this.pointY = args['pointX'] || 12;
	}

	var instance;

	var _static = {
		name: 'SingletonTester',
		getInstance: function(args){
			if( instance === undefined){
				instance = new singleton(args);
			}
			return instance;
		}
	};

	return _static;
}());

var singletonTest = SingletonTester.getInstance({ pointX: 5 });