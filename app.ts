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
let customMessage: string = "Hello, world!";
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
}

let person1 = new Person('John', 20, true);

console.log(person1);