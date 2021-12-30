var user1;
user1 = {
    name: 'Abc',
    age: 25,
    greet: function (phrase) {
        console.log(phrase + this.name);
    }
};
user1.greet('Hello, I am ');
