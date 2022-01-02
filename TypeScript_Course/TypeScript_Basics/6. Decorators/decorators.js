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
// Property Decorators =================================================
console.log('\n\nProperty Decorators...!!!');
function Log1(target, propertyName) {
    console.log("Property Decorator..");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('\nAccessor Decorator..');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('\nMethod Decorator..');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0)
                this._price = val;
            else
                throw new Error('Price should be Positive...');
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.priceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log1
    ], Product.prototype, "title");
    __decorate([
        Log2
    ], Product.prototype, "price");
    __decorate([
        Log3
    ], Product.prototype, "priceWithTax");
    return Product;
}());
// Autobind Decorator Example with Button =================================================
console.log('\n\nAutobind Decorator Example with Button...!!!');
function Autobind(_1, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.message = 'Button works with Autobind Decorator';
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage");
    return Printer;
}());
var p = new Printer();
var button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
