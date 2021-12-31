// Objects  -------------------------------------------
const person = {
    name: 'Anonymous',
    age: 25,
    hobbies: ['Dance','Read','Sing']
};

console.log(person);

for(const hobby of person.hobbies)
{
    console.log(hobby);
}

// Arrays  -------------------------------------------
let activities: string[];
activities = ['Running','Swimming'];

for(const act of activities)
{
    console.log(act);
}

// Tuple   -------------------------------------------
let role: [number,string];
role = [1,'Abc'];

console.log(role);
for(const rol of role)
{
    console.log(rol);
}

// Enums   -------------------------------------------
enum Role {ADMIN=3, AUTHOR, WRITER};
let temp = 3;
if(temp==Role.ADMIN) console.log(Role);

// Any     -------------------------------------------
let arr: any[];
arr = [2, 'Name', 5.21];
console.log(arr);

let num: any;
num = 'Def';
console.log(num);

// Union   -------------------------------------------
function combine(inp1: number|string, inp2: number|string)
{
    if(typeof(inp1)==='number' && typeof(inp2)==='number')
    {
        return inp1 + inp2;
    }
    else
    {
        return inp1.toString() + inp2.toString();
    }
}

let combineNum = combine(25,5);
console.log(combineNum);

let combineStr = combine('Hello', 'World');
console.log(combineStr);