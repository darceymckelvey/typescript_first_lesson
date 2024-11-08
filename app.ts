// what is a SPA?
// A web app with one HTML page, that than gets updated dynamically without refreshing the page

// What is typescript?
// Typescript is a superset of javascript,
// Typescript is transpiled to javascript.

// var is global scoped
var x = 10;
if(x==10){
    // redefining x globally
    var x = 20;
}
console.log(x); // 20

// let is blocked scope
let y = 10;
if(y==10){
    // redefining y in its block but not globally
    let y = 20;
}
console.log(y); // 10

// const can not be reassigned
const z = 25;
console.log(z);

// use LET over VAR when possible as it is best practice to do so
// we define data type useing a colon

// number, string, boolean, void, null, undefined
let customMessage: string = "123";
let num: number = 123;
let isValid: boolean = true; 
let nullValue: null = null;  
let undefinedValue: undefined = undefined;
function greet(): void {
    // doesnt return anything, void return type
    return;
}

// any data type
// any
let anyValue: any = 10;
anyValue = "10";
// any is not type safe and should be used as last resort not all the time

console.log(typeof num); // number

// user defined data types
//  arrays, classes and interfaces
let numnbers: number[] = [1, 2, 3, 4, 5, 6];
let string: string[] = ["1, 2, 3, 4, 5, 6", "test"];

// tuple- muti data types- fixed array
let person: [string, number, boolean] = ["Darcey Mckelvey", 27, true];

// classes
class Person {
    name: string;
    age: number;
    isStudent: boolean;

    constructor(nameArg: string, ageArg: number, isStudentArg: boolean) {
        this.name = nameArg,
        this.age = ageArg,
        this.isStudent = isStudentArg;
    }

    greet(): void {
        console.log(`hello, there my name is ${this.name}`)
    }
}


// instantating a class = creating a object instance
let person1 = new Person('John', 20, true);
person1.greet()
console.log(person1);

// inheritance
// parent class for person can be mammal for example

// Define the Animal class that extends the Mammal class
// Assume Mammal is defined like this (for demonstration purposes):
class Mammal {
    // Properties with public accessibility
    public hashair: boolean;
    public isWarmBlooded: boolean;

    // Constructor to initialize Mammal properties
    constructor(hashair: boolean, isWarmBlooded: boolean) {
        this.hashair = hashair;
        this.isWarmBlooded = isWarmBlooded;
    }
}

// Define the IAnimal interface
interface IAnimal {
    name: string;
    age: number;
    hashair: boolean;
    isWarmBlooded: boolean;
    eat(): void;
}

// Animal class that extends Mammal and implements IAnimal
class Animal extends Mammal implements IAnimal {
    public name: string;
    public age: number;

    // Constructor to initialize Animal properties and call Mammal's constructor
    constructor(nameArg: string, ageArg: number, hasHairArg: boolean, isWarmBloodedArg: boolean) {
        super(hasHairArg, isWarmBloodedArg); // Call the parent class constructor
        this.name = nameArg;
        this.age = ageArg;
    }

    // Implement the eat method
    public eat(): void {
        console.log(`${this.name} is eating.`);
    }
}

// Create an instance of the Animal class
let cat = new Animal("Cat", 2, true, true);
console.log(cat);
cat.eat();

// Create another instance using the IAnimal interface type
let dog: IAnimal = new Animal("Dog", 3, true, true);
console.log(dog);
dog.eat();

// youtube videos on typescript getter and setter methods