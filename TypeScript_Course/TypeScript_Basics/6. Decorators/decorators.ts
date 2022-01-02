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
