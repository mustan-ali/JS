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
