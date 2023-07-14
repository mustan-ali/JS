//Class is a template for creating objects with similar properties and methods.

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new person("John", 20);
let person2 = new person("Doe", 25);

console.log(person1.name);
console.log(person2.name);


class greet {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}

let greet1 = new greet("John");
greet1.greet();