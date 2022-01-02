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

    constructor(t: string, p: number)
    {
        this.title = t;
        this._price = p;
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
        get()
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

