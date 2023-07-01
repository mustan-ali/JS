//Promise is an object representing the eventual completion or failure of an asynchronous operation.
//Promise has 2 properties: state and result
//state: initially pending, then either fulfilled when resolve is called or rejected when reject is called
//result: initially undefined, then value if fulfilled or error if rejected

let promise = new Promise(function (resolve, reject) {
    let x = 10;
    if (x == 10) {
        resolve("Success");
    }
    else {
        reject("Error");
    }
});

//.then() is called when promise is resolved and .catch() is called when promise is rejected
promise.then(function (message) {
    console.log(message);
}
).catch(function (message) {
    console.log(message);
});


//Promise Chaining
//It is used to call multiple promises one after another and each promise is executed after the previous promise is resolved.
let promise1 = new Promise(function (resolve, reject) {
    resolve("Promise 1 resolved");
});

promise1.then(function (result) {
    console.log(result);
    let promise2 = new Promise(function (resolve, reject) {
        resolve("Promise 2 resolved");
        console.log
    });
    return promise2;
}).then(function (result) {
    console.log(result);
});


let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 2000);
});

promise3.then(function (result) {
    console.log(result);    //10
    return result * 2;
}).then(function (result) {
    console.log(result);    //20
    return result * 3;
}
).then(function (result) {
    console.log(result);    //60
});


//Promise with multiple handlers
let promise4 = new Promise(function (resolve, reject) {
    resolve("Resolved");
});

promise4.then((result) => { console.log("Promise 4 " + result); });
promise4.then((result) => { console.log("P4 " + result); });


//Promise API
//Promise.all() executes multiple promises at the same time and returns all the results in an array when all the promises are resolved.
//Promise.allSettled() executes multiple promises at the same time and returns all the results in an array when all the promises are resolved or rejected.
//Promise.race() executes multiple promises at the same time and returns value/error of promise which is resolved/rejected first.
//Promise.any() executes multiple promises at the same time and returns value of promise which is resolved first. If all the promises are rejected, then it returns AggregateError.
//Promise.resolve() returns a promise object that is resolved with a given value.
//Promise.reject() returns a promise object that is rejected with a given value.

let promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("Value 1"); }, 1000);
});

let promise6 = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("Value 2"); }, 2000);
});

let promise7 = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("Value 3"); }, 3000);
}); 5

let promise8 = new Promise(function (resolve, reject) {
    setTimeout(function () { reject("Error"); }, 4000);
});

let promise_all = Promise.all([promise5, promise6, promise7]);
promise_all.then(function (result) {
    console.log(result);
});

let promise_allSettled = Promise.allSettled([promise5, promise6, promise7, promise8]);
promise_allSettled.then(function (result) {
    console.log(result);
});

let promise_race = Promise.race([promise5, promise6, promise7]);
promise_race.then(function (result) {
    console.log(result);
});

let promise_any = Promise.any([promise5, promise6, promise7, promise8]);
promise_any.then(function (result) {
    console.log(result);
});

let promise_resolve = Promise.resolve("Resolved");
promise_resolve.then(function (result) {
    console.log(result);
});

let promise_reject = Promise.reject("Rejected");
promise_reject.catch(function (result) {
    console.log(result);
});
