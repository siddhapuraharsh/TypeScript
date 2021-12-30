interface Person{
    name: string;
    age: number;
    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Abc',
    age: 25,
    greet(phrase: string){
        console.log(phrase + this.name);
    }
};

user1.greet('Hello, I am ');