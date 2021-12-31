// Basic Interface --------------------------------------
console.log('Basic Interface...!!!');

interface Persons{
    name: string;
    age: number;
    greeting(phrase: string): void;
}

let user1: Persons;

user1 = {
    name: 'Abc',
    age: 25,
    greeting(phrase: string){
        console.log(phrase + this.name);
    }
};

user1.greeting('Hello, I am ');



// Classes with Interface --------------------------------------
console.log('\nClasses with Interface...!!!');

interface Named{
    name: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable
{
    name: string;
    age = 30;
    constructor(n: string)
    {
        this.name = n;
    }
    greet(phrase: string): void 
    {
        console.log(phrase + this.name);
    }
}

const user2 = new Person('Def');
user2.greet('Hi... I am ');
console.log(user2);