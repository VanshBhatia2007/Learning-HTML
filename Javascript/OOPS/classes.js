class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`my name is ${this.name}`);
    }
}

let p1= new Person("vansh",18);
let p2= new Person("aditya",19);

//inhertance

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
    greet(){
        return "hello";
    }
}

let s1 = new Student("vansh",18,94);