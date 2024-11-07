// what is a SPA?
// A web app with one HTML page, that than gets updated dynamically without refreshing the page
// What is typescript?
// Typescript is a superset of javascript,
// Typescript is transpiled to javascript.
// var is global scoped
var x = 10;
if (x == 10) {
    // redefining x globally
    var x = 20;
}
console.log(x); // 20
// let is blocked scope
var y = 10;
if (y == 10) {
    // redefining y in its block but not globally
    var y_1 = 20;
}
console.log(y); // 10
// const can not be reassigned
var z = 25;
console.log(z);
// use LET over VAR when possible as it is best practice to do so
// we define data type useing a colon
// number, string, boolean, void, null, undefined
var customMessage = "Hello, world!";
var num = 123;
var isValid = true;
var nullValue = null;
var undefinedValue = undefined;
function greet() {
    // doesnt return anything, void return type
    return;
}
// any data type
// any
var anyValue = 10;
anyValue = "10";
// any is not type safe and should be used as last resort not all the time
console.log(typeof num); // number
// user defined data types
//  arrays, classes and interfaces
var numnbers = [1, 2, 3, 4, 5, 6];
var string = ["1, 2, 3, 4, 5, 6", "test"];
// tuple- muti data types- fixed array
var person = ["Darcey Mckelvey", 27, true];
// classes
var Person = /** @class */ (function () {
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg,
            this.age = ageArg,
            this.isStudent = isStudentArg;
    }
    return Person;
}());
var person1 = new Person('John', 20, true);
console.log(person1);
