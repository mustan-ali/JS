//Async/Await is used to write asynchronous code in a synchronous manner.
//Async is used to define an asynchronous function.
//Await is used to pause the execution of an async function until a Promise is fulfilled.

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise 1 resolved');
    }, 2000);
});

async function asyncFunc() {
    console.log('Calling');
    const result = await promise1;
    console.log(result);
    console.log('Finished');
}

asyncFunc();


async function asyncFunc2() {

    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise 2 resolved');
        }, 2000);
    });

    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise 3 resolved');
        }, 6000);
    });

    console.log('Calling promise 2');
    const result2 = await promise2;
    console.log(result2);

    console.log('Calling promise 3');
    const result3 = await promise3;
    console.log(result3);
    
    console.log('Finished');
}

asyncFunc2();