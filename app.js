// what is a SPA?
// A web app with one HTML page, that than gets updated dynamically without refreshing the page
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var customMessage = "123";
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
    Person.prototype.greet = function () {
        console.log("hello, there my name is ".concat(this.name));
    };
    return Person;
}());
// instantating a class = creating a object instance
var person1 = new Person('John', 20, true);
person1.greet();
console.log(person1);
// inheritance
// parent class for person can be mammal for example
// Define the Animal class that extends the Mammal class
// Assume Mammal is defined like this (for demonstration purposes):
var Mammal = /** @class */ (function () {
    // Constructor to initialize Mammal properties
    function Mammal(hashair, isWarmBlooded) {
        this.hashair = hashair;
        this.isWarmBlooded = isWarmBlooded;
    }
    return Mammal;
}());
// Animal class that extends Mammal and implements IAnimal
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    // Constructor to initialize Animal properties and call Mammal's constructor
    function Animal(nameArg, ageArg, hasHairArg, isWarmBloodedArg) {
        var _this = _super.call(this, hasHairArg, isWarmBloodedArg) || this; // Call the parent class constructor
        _this.name = nameArg;
        _this.age = ageArg;
        return _this;
    }
    // Implement the eat method
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    return Animal;
}(Mammal));
// Create an instance of the Animal class
var cat = new Animal("Cat", 2, true, true);
console.log(cat);
cat.eat();
// Create another instance using the IAnimal interface type
var dog = new Animal("Dog", 3, true, true);
console.log(dog);
dog.eat();
