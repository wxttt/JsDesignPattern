/*类式继承*/

//Class Person
function Person(name){
	this.name = name;
}

Person.prototype.getName = function(){
	return this.name;
}

var reader = new Person('John Smith');
reader.getName();


/*原型链*/

function Author(name, books){
	Person.call(this, name);//Call the superclass's constructor in the scope of this
	this.books = books;
}

Author.prototype = new Person(); Set up  the prototype chain
Author.prototype.constructor = Author;
Author.getBooks = function(){
	return this.books;
}

/*extend函数*/
function(subClass, superClass){
	var F = function(){};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
}

/*改进的extend函数*/
function extend(subClass, superClass){
	var F = function(){};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;

	subClass.superclass = superClass.prototype;
	if(superClass.prototype.constructor == Object.prototype.constructor){
		superClass.prototype.constructor = superClass;
	}
}

function Author(name, books){
	this.superclass.constructor.call(this, name);
	this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function(){
	return this.books;
}

//原型式继承
//clone 函数

function clone(obj){
	var F = function(){};
	F.prototype = obj;
	return new F;
}



















