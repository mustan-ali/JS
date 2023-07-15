//Inheritance is used to inherit the properties of one class to another class
//super() is used to call the constructor of the parent class

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class student extends person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
}

let student1 = new student("John", 20, 1);
console.log(student1);


//Method Overriding
class animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class dog extends animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

let dog1 = new dog('Tommy');
dog1.speak();   //Tommy barks.