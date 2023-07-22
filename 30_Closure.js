//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state. In other words, a closure gives you access to an outer function's scope from an inner function.

function outer() {
    let a = 10; //a is a local variable created in the outer function
    function inner() {
        console.log(a); //a is accessible here because of closure
    }
    return inner;
}

let x = outer();
x(); 


function init() {
    let name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function    
    }
    name = 'Chrome';
    displayName();
}
init(); //It will print Chrome because the closure has access to the updated value of the outer function's variable.