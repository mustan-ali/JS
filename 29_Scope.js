//Types of Scope
//1. Global Scope - Variables declared in the global scope are accessible from anywhere in the program.
//2. Local Scope - Variables declared in the local scope are accessible only from within the scope.
//3. Block Scope - Variables declared in the block scope are accessible only from within the block.

//let and const are block scoped, whereas var is global scoped.


//Global Scope
var a = 10;
console.log(a); //10

//Local Scope
function print() {
    let b = 20;
    console.log(b); //20
    console.log(a); //10
}
print();

//Block Scope
{
    let c = 30;
    console.log(c); //30
    console.log(a); //10
    console.log(b); //ReferenceError: b is not defined
}