//Function without parameters
function sayHello() {
    console.log('Hello');
}
sayHello();


//Function with parameters
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');


//Function with return value
function square(number) {
    return number * number;
}
console.log(square(2));

//Arrow function ES6
const square = (number) => number * number;
const square = (number) => { return number * number };

/*
Type of function
No Parameters and no Return value
No Parameters and Return value
Parameters and no Return value
Parameters and Return value
*/