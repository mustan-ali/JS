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