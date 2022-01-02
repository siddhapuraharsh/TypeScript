var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class Decorator  =================================================
console.log('Class Decorator...!!!');
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
    console.log('\n');
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Abc';
        console.log('Creating Person Object');
    }
    Person = __decorate([
        Logger
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
// Decorator Factory  =================================================
console.log('\n\nDecorator Factory...!!!');
function withTemplate(template, hookId) {
    return function (_) {
        var element = document.getElementById(hookId);
        if (element)
            element.innerHTML = template;
    };
}
var Persons = /** @class */ (function () {
    function Persons() {
        this.name = 'Def';
        console.log('Creating Persons Object');
    }
    Persons = __decorate([
        withTemplate('<h1>Persons Object</h1>', 'deco')
    ], Persons);
    return Persons;
}());
var per = new Persons();
console.log(per);
