// JavaScript Functions

function sayHello (name, greeting) {
  if (typeof name === 'undefined') {
    return 0;
  }
  if (typeof greeting === 'undefined') {
    greeting = 'Hello';
  }
  console.log(greeting, name);

  return name.length;
}

sayHello("Ian", "Love you");
sayHello("Riho");
console.log(sayHello("Alisa", "Kung Fu"));
sayHello("Alisa", "Kung Fu");
sayHello();
console.log(sayHello());
