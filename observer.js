function Pub(){
	this.subList = {};
}

Pub.prototype = {
	addSub: function(sub){
		this.subList[sub.name] = sub.callback;
	},
	removeSub: function(pub){
		var name = pub.name;
		if(this.subList.hasOwnProperty(name)){
			delete this.subList[name];
		}
	},
	publish: function(what){
		var i;
		for(i in this.subList){
			if(this.subList.hasOwnProperty(i)){
				this.subList[i](what);
			}
		}
	}
};

function Sub(name, callback){
	this.name = name;
	this.callback = callback;
}

var pubT = new Pub();
var subT = new Sub('ttt', function(what){
	console.log('发布了: ' + what);
});
pubT.addSub(subT);
pubT.removeSub(subT);

pubT.publish('lalalalal');