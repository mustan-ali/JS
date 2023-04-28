//setInterval - executes a function, over and over again, at specified time intervals
//setInterval(function, milliseconds)
setInterval(function () {
    console.log("Hello");
}, 1000);

//setTimeout - executes a function, once, after waiting a specified number of milliseconds
//setTimeout(function, milliseconds)
setTimeout(function () {
    console.log("Hello");
}, 1000);



function greet(name) {
    console.log("Hello " + name);
}

let I = setInterval(greet, 1000, "John");
let T = setTimeout(greet, 1000, "John");

clearInterval(I);   // stops the execution of setInterval()
clearTimeout(T);    // stops the execution of setTimeout()