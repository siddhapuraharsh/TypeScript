// Basic Interface --------------------------------------
console.log('Basic Interface...!!!');
var user1;
user1 = {
    name: 'Abc',
    age: 25,
    greeting: function (phrase) {
        console.log(phrase + this.name);
    }
};
user1.greeting('Hello, I am ');
// Classes with Interface --------------------------------------
console.log('\nClasses with Interface...!!!');
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + this.name);
    };
    return Person;
}());
var user2 = new Person('Def');
user2.greet('Hi... I am ');
console.log(user2);
