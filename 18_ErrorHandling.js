//Try is used to test a block of code for errors
//Catch is used to handle the error
//Throw is used to create custom errors
//Finally will always be executed after try and catch blocks regardless of the occurence of an error.
//Error is the object that has two properties name and message

try {
    let result = sum(1, 2)
    console.log(result)
}
catch (error) {
    console.log('Error Occured: ' + error.name)
    console.log('Error Occured: ' + error.message)
}
finally {
    console.log('Finally Block Executed')
}


function divide(a, b) {
    if (b === 0) {
        throw {
            name: 'DivideByZeroError',
            message: 'Divide by zero error'
        }
    }
    return (a / b)
}

try {
    let result = divide(10, 0)
    console.log(result)
}
catch (error) {
    console.log('Error Occured: ' + error.name)
    console.log('Error Occured: ' + error.message)
}