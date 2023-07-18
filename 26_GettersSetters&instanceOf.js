//Getter are used to access properties of an object
//Setter are used to change (set) the properties of an object
//instanceof is used to check if an object is an instance of a class

class person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let p = new person("john");

console.log(p.name);    //john
p.name = "jeff";
console.log(p.name);    //jeff

console.log(p instanceof person);   //true
let x = 10;
console.log(x instanceof person);   //false