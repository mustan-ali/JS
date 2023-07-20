//Destructuring is used to unpack values from arrays, or properties from objects, into distinct variables.
//Spread Operator allow us to quickly copy all or part of an existing array or object into another array or object

//Array Destructuring
let arr = ["John", "Smith"];
let [firstName, lastName] = arr;
console.log(firstName, lastName); //John Smith

let [fName, lName, age] = ["John", "Smith", 25];
console.log(fName, lName, age); //John Smith 25

//Object Destructuring
const obj = {
    a: 1,
    b: 2,
    c: 3
};

let { a, b, c } = obj;
console.log(a, b, c); //1 2 3

const { x, y, z } = { x: 1, y: 2, z: 3 };
console.log(x, y, z); //1 2 3


//Destructuring with Rest Operator
const [m, n, ...rest] = [10, 20, 30, 40];
console.log(m, n, rest); //10 20 { p: 30, q: 40 }

const [r, , ...rest1] = [10, 20, 30, 40];
console.log(r, rest1); //10 { p: 30, q: 40 }


//Spread Operator
let arr1 = [10, 20, 30];
let arr2 = [...arr1];
console.log(arr2); //[ 10, 20, 30 ]

let arr3 = [40, 50, 60];
let arr4 = [...arr1, ...arr3];
console.log(arr4); //[ 10, 20, 30, 40, 50, 60 ]

let obj1 = { p: 10, q: 20 };
let obj2 = { ...obj1 };
console.log(obj2); //{ p: 10, q: 20 }

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...arr1)); //60