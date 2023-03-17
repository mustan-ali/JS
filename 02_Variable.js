//Variable Declaration
var a = 10
let b = 10
const c = 10

let p1 = 99
let p2 = "Hello"
let p3 = true   //false
let p4 = null
let p5 = undefined 
let p6 = Symbol("This is a symbol")
let p7 = BigInt(12345678901234567890)

let np1 = { name: "John", age: 30, city: "New York" }

console.log(typeof (p1))    //Data Type of p1
console.log(np1["name"])    //Accessing Object Properties using []

/*
var -   Global Scope, Updatable,     Re-declarable
let -   Block Scope,  Updatable,     Not Re-declarable
const - Block Scope,  Not Updatable, Not Re-declarable


Primitive Data Types        Non-Primitive Data Types
p1-Number                   np1-Object
p2-String
p3-Boolean
p4-Null
p5-Undefined
p6-Symbol
p7-BigInt


Variable Declaration: letters, numbers, _, $ are allowed. Numbers are not allowed at the beginning of the variable name.
*/