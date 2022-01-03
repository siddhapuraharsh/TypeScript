"use strict";
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
let Person = class Person {
    constructor() {
        this.name = 'Abc';
        console.log('Creating Person Object');
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
// Decorator Factory  =================================================
console.log('\n\nDecorator Factory...!!!');
function withTemplate(template, hookId) {
    return function (_) {
        const element = document.getElementById(hookId);
        if (element)
            element.innerHTML = template;
    };
}
let Persons = class Persons {
    constructor() {
        this.name = 'Def';
        console.log('Creating Persons Object');
    }
};
Persons = __decorate([
    withTemplate('<h1>Persons Object</h1>', 'deco')
], Persons);
const per = new Persons();
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
class Product {
    constructor(t, pr) {
        this.title = t;
        this._price = pr;
    }
    set price(val) {
        if (val > 0)
            this._price = val;
        else
            throw new Error('Price should be Positive...');
    }
    priceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log1
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3
], Product.prototype, "priceWithTax", null);
// Autobind Decorator Example with Button =================================================
console.log('\n\nAutobind Decorator Example with Button...!!!');
function Autobind(_1, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'Button works with Autobind Decorator';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
// Decorator for Validation =================================================
console.log('\n\nDecorator for Validation...!!!');
const registeredValidators = {};
function Require(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'require'] });
}
function PositiveVal(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
function Validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'require':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Require
], Course.prototype, "title", void 0);
__decorate([
    PositiveVal
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEL = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEL.value;
    const price = +priceEl.value;
    const createCourse = new Course(title, price);
    if (!Validate(createCourse)) {
        alert('Invalid Input, Please try again...');
        return;
    }
    console.log(createCourse);
});
