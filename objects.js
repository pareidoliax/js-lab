// JavaScript Objects

var jim = {
  name: "Jamie",
  skills: ["JavaScript", "Ruby", "Dancing"],
  "favorite color": "green",
  greet: function () {
    console.log("Hello, I am", this.name + ".");
  }
};

function genericGreet (name, mood) {
  name = name || "You";
  mood = mood || "good";

  console.log("Hello " + name +
              ", I am " + this.name +
              " and I am in a " + mood + " mood!");
}

var nick = {
  name: "Nick",
  greet: jim.greet
};

var jason = {
  name: "Jason"
};

jim['greet']();
nick.greet();

var jimGreet = jim.greet;
jimGreet.call({name: "Amit"});

jim.greet.call(jason);

genericGreet.call(jim, "Walt", "Great");

genericGreet.apply(jason, ["Gord", "Dreary"]);

var greetArgs = ['Michael', 'happy'];

genericGreet.apply(nick, greetArgs);

