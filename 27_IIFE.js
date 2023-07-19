//IIFE - Immediately Invoked Function Expressions
//IIFE is a function that is executed right after it is created. It has no name and is not stored in a variable.
//It releases all its variables after execution, so they can be used again. 

(function () {
    console.log("Hello World!");
})();


(function (x, y) {
    console.log(x + y);
})(10, 20);


let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello World!");
    }, 1000);
});

(async function () {
    let result = await promise1;
    console.log(result);
})();