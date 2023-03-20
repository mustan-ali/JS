const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Array of single data type
let PersonDetails = ["John", 20, false]; //Array of mixed data types


number[0]; //returns the value at the index 0
PersonDetails[0] = "Cena"; //replaces the value at the index 0


//Array Methods
number.length; //returns length of the array
number.push(11); //adds the value at the end of the array
number.pop(); //removes the value at the end of the array
number.unshift(0); //adds the value at the beginning of the array
number.shift(); //removes the value at the beginning of the array
number.indexOf(5); //returns the index of the value
number.toString(); //returns a string with the array values
number.includes(5); //returns true or false if the value is present in the array
number.reverse(); //reverses the array
number.join("-"); //returns a string with the array values with the delimiter
number.slice(0, 5); //returns a part of the array (start, end)
number.slice(2); //returns a part of the array (start) till end
number.splice(0, 5); //removes a part of the array (start, end)
number.splice(2); //removes a part of the array (start) till end
number.sort(); //sorts the array in ascending order
delete number[0]; //removes the value at the index 0
concat(number, PersonDetails); //returns a new array with the values of the two arrays
console.log(Array.from(PersonDetails)); //creates a new array from the array-like object


//function to sort the array
let compare = (a, b) => {
    return a - b;   //a - b for ascending order & b - a for descending order
};
number.sort(compare);


//Array Map
number.map((element) => {   //returns a new array with the values of the original array
    console.log(element);
});


//Array Filter
number.filter((element) => {  //returns a new array with the elements that pass the test
    return element > 5;
});


//Array Reduce
number.reduce = (a, b) => { //returns a single value
    return a + b;   //a + b for sum - add all the values of the array
};


//Array Iteration
for (let i = 0; i < number.length; i++) {   //for loop
    console.log(number[i]);
}


number.forEach((element) => {   //forEach loop
    console.log(element);
});


for (let element of number) {   //for of loop
    console.log(element);
}


for (let element in number) {   //for in loop - returns the index or key
    console.log(element);
}


/*
In JavaScript, arrays are objects. The typeof operator in JavaScript returns "object" for arrays.

For Each Loop - returns the value of the array
Map - returns a new array with the values of the original array
*/