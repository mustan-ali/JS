//Static Methods are only accessible on the class itself and not on the instances of the class.

class person {
    constructor(name) {
        this.name = person.capitalName(name);   //static method is called using class name itself
    }

    static capitalName(name) {
        return name.toUpperCase();
    }
}

let person1 = new person("john");
console.log(person1.name);  //JOHN