//constructors - doesn't return anything and start with capital letters
function Person(name,age){
    this.name= name;
    this.age =age;
}

Person.prototype.talk = function(){
    console.log(`my name is ${this.name}`);
};

let p1= new Person("vansh",18);
let p2= new Person("aditya",19);
