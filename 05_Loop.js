//For Loop
for (var i = 0; i < 5; i++) {
    console.log(i)
}


//While Loop  -  run while condition is true
var i = 0
while (i < 5) {
    console.log(i)
    i++
}


//Do While Loop  -  run once before checking condition
var i = 0
do {
    console.log(i)
    i++
}
while (i < 10)


//For In Loop  -  loop through properties of an object
var person = {
    name: "John",
    age: 30,
    city: "New York"
}
for (var x in person) {
    console.log(person[x])
}