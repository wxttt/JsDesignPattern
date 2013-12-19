var Singleton = (function(){
	function singleton(args){
		var args = args || {};
		this.name = 'singleton';
		this.pointX = args['pointX']?args['pointX']:6;
		this.pointY = args['pointY']?arts['pointY']:10;
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
}())


var singletonTest = Singleton.getInstance({ pointX: 5 });