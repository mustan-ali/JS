//Asynchronous Function - Function running parallel with other function and not blocking the execution of other function
//setTimeout()
//setInterval()

//Callback Function - Function passed as an argument to another function
let x = function () {
    alert("Hello World");
}

let y = function (callback) {
    callback();
}

y(x); //passing function x as an argument to function y



function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Script Loaded");
        callback(script);
    }

    script.onerror = function () {
        console.log("Error Loading Script");
    }
    document.head.append(script);
}

function test() {
    console.log("Test Function");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js", test);