//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var bubba = new Person('bubba', 2);
var me = new Person('mikey', 24);
var oldJohn = new Person('john', 75);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	var userName = this.name;
	alert(userName);
	return userName;
}

me.sayName();