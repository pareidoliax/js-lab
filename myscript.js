// Java Script Comment

/*
console.log("Hello from MyScript!!");



var name = prompt("What is your name?");
alert("Hello " + name + ", I hope you have a lovely day!");

name = prompt("What is your name now?");

console.log("The user's name is " + name + ".");



 console.log("Before");

if(name) {
  console.log("If block");
} else {
  console.log("Else block");
}

 console.log("After");

 

var loop_count = 10

while (loop_count) {
 console.log("I will make a cool D3 visualization.");
 loop_count = loop_count - 1;
}





var names = [];

while (name = prompt("What is your name?")) {
 console.log("Hello " + name + ", I'll remember that.");
 names.push(name);
}

console.log("Finished! I remember " + names.length + " names.");
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}



for (var cycles = 10; cycles; cycles = cycles - 1) {
  console.log("I will make a cool D3 visualization.");
}
console.log("Finished!");



for (var cycles = 1; cycles <= 100; cycles = cycles + 1) {
  if (!(cycles % 5 || cycles % 3)) { 
    console.log("fizzbuzz"); 
  }
  else if (!(cycles % 5)) {
    console.log("buzz"); 
  }
  else if (!(cycles % 3)) {
    console.log("fizz"); 
  }
  else {
  console.log(cycles);
  }
}


var me = {
  first_name: "Xander",
  last_name: "Miller",
  "Age": 35
}


console.log(me.first_name + " " + me.last_name);
console.log(me["Age"]);
console["log"](me);

var key = 'first_name';

console.log(me[key]);



var sayHello = function () {
  console.log("Hello! Hello! I say Hello.")
}

var debug = function (message) {
  console.log("Debug", message);
}

var doubleNumber = function (num) {
  return num * 2;
}

sayHello();

debug("x has been set");

debug(doubleNumber(21));



var myColor = "blue";
console.log("the value of myColor before myFunk()", myColor);

function myFunk () {
  var myColor = "yellow";
  myNumber = 42;
  console.log("the value of myColor inside myFunk()", myColor);
}
myFunk();
console.log("the value of myColor after myFunk()", myColor);
console.log("the value of myNumber after myFunk()", myNumber);



// Hoisting

function doSomething (doit) {
  console.log("The value of doit is", doit);
  var color = "blue", 
      number, 
      name = "Jim";
  console.log("Color before if(){}", color);
  if (doit) {
    var color = "red";
    console.log("Color in if(){}", color);
  }
  console.log("Color after if(){}", color);
}

doSomething(false);
doSomething(true);

if (myVar == undefined)


// Strings

var name1 = "Alisa and Ian",
    name2 = "Alisa and Ian2!";

console.log(name);

var statement = "This is Jim's string";
console.log(statement);

var statement2 = 'He said "This is awesome!"';

var statement3 = "He said \"This is Jim's string.\""
console.log(statement3);

// Strings Escapes

var path = "C:\\folder\\myfile.txt";
console.log(path);

var multiline = "This is line 1\n\tThis is line 2\n\t\tThis is line 3";
console.log(multiline);


//Joining Strings

var part1 = "Alisa",
    part2 = " and Ian!",
    whole = part1 + part2;
console.log(whole + "!!!!!");



//Properties and Methods of Strings

var length = whole.length;
console.log(whole, length);
var index = whole.indexOf(part2);
console.log(index);

var search = "Ian"
if (whole.indexOf(search) !== -1){
  console.log(search, "exists in string. At index", whole.indexOf(search));
} else {
  console.log(search, "does not exist in string.");
}

for (i = 0; i < whole.length; i++) {
  console.log(whole.charAt(i));
}

//More String Methods

var baby_bro = whole.substr(10,3);
console.log(baby_bro);
console.log(whole.toLowerCase());
console.log(whole.toUpperCase());

//Comparing Strings

var first_str = "Alisa",
    second_str = "Ian";

if (first_str === second_str) {
  console.log("The strings are the same.");
} else {
  console.log("The strings are different.");
}


function compare(a,b) {
  console.log(a + " < " + b, a < b);
}
compare("Alisa","Ian");



// js Numbers


//Whole Numbers
var a = 11,
    b = -123;

var c = 1.5,
    d = 123.456789;

var e = 0.1,
    f = 0.2;

var result = e * f;

//Advanced Number Definitions

var g = 1.23E6;

//lead 0 means Octal
var h = 012;

//Lead 0x means hexadecimal

var i = 0xff;

//Parsing Numbers From Strings

var j = parseInt("019", 10);

var l = parseInt("There are 9 billion people in the world.", 10);
console.log("l is NaN",isNaN(l));

var m = parseFloat("123.456 is a strange number.", 10);

//Mathematic Operators

var o = 1 + 2;
var p = 10 - 7;

var q = 3 * 4;
var r = 16 / 8;
var s = 15 % 10;

var t = 4 * 4 + 2 + 1;

//Mathematical Comparisons

//Math Object

var u = Math.round(Math.random() * 10);

var v = Math.round(2.5);
var w = Math.floor(3.9);
var x = Math.ceil(6.2);

var y = Math.pow(2,5);
var z = Math.sqrt(4);




// .js Arrays

var x = ["Riho", "Alisa", "Ian"];
var y = ['a string', 3, true];
var z = [];
var a = new Array(50);

//Getting and setting

var my_array = ["Hello", 42, true, function (a) {return a * 2}];

var word = my_array[0];
var answer =  my_array[1];
var doubler = my_array[3];
console.log(doubler(answer));

my_array[2] = 144; 
var was_true = my_array[2];

my_array[my_array.length] = 5;

//Array Methods

var my_array = [2,3,4];
console.log(my_array.toString());

my_array.push(5);
console.log(my_array.toString());

console.log(my_array.pop());
console.log(my_array.toString());

my_array.unshift(1);
console.log(my_array.toString());

console.log(my_array.shift());
console.log(my_array.toString());



//Array Methods part 2

var my_array = [10, 44, 32, 100, 0, 44, 3, 4];
console.log(my_array.toString());

my_array.sort(function (a,b) {
  return a - b;
  //return Math.random() - 0.5; //random sort
});

console.log(my_array.toString());


// Array Methods part 3

var x = [1,2,3];
var y = [4,5,6];
var z = x.concat(y);

console.log(x);
console.log(y);
console.log(z);


var my_array = [0,1,2,3,4,5];
var result = my_array.slice(1,5);



var words = ["Riho", "Alisa", "Ian"];
var result = words.join(" ");

*/

//Splice Method

var my_array  = [0, 1, "Alisa", "Ian", 2, 3, 4, 5, 6];
console.log(my_array.toString());

console.log(my_array.splice(2,2,["Xander","Riho"]));

console.log(my_array.toString());

