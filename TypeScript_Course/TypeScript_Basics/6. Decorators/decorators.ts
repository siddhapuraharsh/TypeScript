// Class Decorator  =================================================
console.log('Class Decorator...!!!');

function Logger(constructor: Function)
{
    console.log("Logging...");
    console.log(constructor);
    console.log('\n');
}

@Logger
class Person{
    name = 'Abc';
    constructor()
    {
        console.log('Creating Person Object');
    }
}

const pers = new Person();
console.log(pers);


// Decorator Factory  =================================================
console.log('\n\nDecorator Factory...!!!');

function withTemplate(template: string, hookId: string)
{
    return function(_: Function)
    {
        const element = document.getElementById(hookId);
        if(element) element.innerHTML = template;
    }
}

@withTemplate('<h1>Persons Object</h1>', 'deco')
class Persons{
    name = 'Def';
    constructor()
    {
        console.log('Creating Persons Object');
    }
}

const per = new Persons();
console.log(per);


// Property Decorators =================================================
console.log('\n\nProperty Decorators...!!!');

function Log1(target: any, propertyName: string)
{
    console.log("Property Decorator..");
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor)
{
    console.log('\nAccessor Decorator..');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string|Symbol, descriptor: PropertyDescriptor)
{
    console.log('\nMethod Decorator..');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product{
    @Log1
    title: string;
    private _price: number;

    @Log2
    set price(val: number)
    {
        if(val>0) this._price = val;
        else throw new Error('Price should be Positive...');
    }

    constructor(t: string, pr: number)
    {
        this.title = t;
        this._price = pr;
    }

    @Log3
    priceWithTax(tax: number)
    {
        return this._price * (1+tax);
    }
}



// Autobind Decorator Example with Button =================================================
console.log('\n\nAutobind Decorator Example with Button...!!!');

function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor)
{
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(): any
        {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer{
    message = 'Button works with Autobind Decorator';

    @Autobind
    showMessage()
    {
        console.log(this.message);
    }
}

const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);


// Decorator for Validation =================================================
console.log('\n\nDecorator for Validation...!!!');

interface ValidatorConfig
{
    [property: string]:{
        [validatableProp: string]: string[]  // ['require', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Require(target: any, propName: string)
{
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'require']
    };
}

function PositiveVal(target: any, propName: string)
{
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function Validate(obj: any)
{
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig)
    {
        return true;
    }

    let isValid = true;
    for(const prop in objValidatorConfig)
    {
        for(const validator of objValidatorConfig[prop])
        {
            switch(validator)
            {
                case 'require':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop]>0;
                    break;
            }
        }
    }
    return isValid;
}

class Course{

    @Require
    title: string;

    @PositiveVal
    price: number;

    constructor(t: string, p: number)
    {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEL = <HTMLInputElement>document.getElementById('title');
    const priceEl = <HTMLInputElement>document.getElementById('price');

    const title = titleEL.value;
    const price = +priceEl.value;

    const createCourse = new Course(title, price);
    if(!Validate(createCourse)) 
    {
        alert('Invalid Input, Please try again...');
        return;
    }
    console.log(createCourse);
});