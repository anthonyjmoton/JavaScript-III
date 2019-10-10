/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding which refers to the console or window scope.
* 2. Implicit binding is a method used insinde of an object. whenever an object is called right after a period (.), the object left of the period get the 'this'
* 3. New binding deals with constructor functions. New binding refers to the function new.
* 4. Explicit binding deals with call or apply method. When they are used, 'this' is being explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit 

const myObj = {
    greeting: 'Hello',
    speak() {
        return `${this.greeting} and goodbye!`
    }
}
console.log(myObj.speak())

// Principle 3

// code example for New Binding
function myObject (name, age) {
    this.name = name,
    this.greeting = "Hey there!" ,
    this.age = age;
     this.speak = function() {
        return `${this.greeting} My name is ${this.name} and I am ${this.age} years old!`
    }

}

let Anthony = new myObject("Anthony", 28);
console.log(Anthony.speak());

// Principle 4

// code example for Explicit Binding
function sayGoodbye () {
    return (`${this.phrase}, ${this.name}!`)
};

let Goodbye = {
    phrase: 'Have a good night',
    name : "Anthony"
};

console.log(sayGoodbye.call(Goodbye));