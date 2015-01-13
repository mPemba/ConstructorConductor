/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

var userOne = new User('Tyler', 'tyermcginnis33@gmail.com', 'iLoveJS');
var userTwo = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var userThree = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

users.push(userOne);
users.push(userTwo);
users.push(userThree);

User.prototype.allInfo = function() {
  var userName = this.name;
  var userEmail = this.email;
  var userPw = this.pw;
  var info = (userName + ", " + userEmail + ", " + userPw);
  return info;
};

console.log('Tyler\'s information is ' + userOne.allInfo());
//Console.log all of Tylers information


console.log('Lenny\'s information is ' + userThree.allInfo());
//Now console.log all of Lennys information



//Now create another instance of User using your own information and then add that to your users array.
var userFour = new User('Mike Slayer', 'mike@bobSegerKicksAss.com', 'ohLaLa');
users.push(userFour);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

for (var i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
