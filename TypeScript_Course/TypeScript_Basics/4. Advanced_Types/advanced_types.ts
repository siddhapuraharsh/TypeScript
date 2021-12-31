// Intersection Type =============================================
console.log('Intersection Type...!!!');

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Abc',
    privileges: ['creat_server','start_server'],
    startDate: new Date()
};

console.log(e1);
console.log(e1.name);
console.log(e1.privileges);
console.log(e1.startDate);


// Union Type =============================================
console.log('\n\nUnion Type...!!!');

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function addFn(a: Combinable, b: Combinable)
{
    if(typeof(a)==='string' && typeof(b)==='string' )
    {
        return a.toString() + b.toString();
    }
    return +a + +b; 
}

console.log(addFn('Abc','Def'));
console.log(addFn(2,3));


// Type Guards =============================================
console.log('\n\nType Guards...!!!');

type UnknownEmployee = Employee | Admin;

function printEmpInfo(emp: UnknownEmployee)
{
    console.log('Name : ' + emp.name);
    if('privileges' in emp) console.log('Privileges : ' + emp.privileges);
    if('startDate' in emp) console.log('Start Date : ' + emp.startDate);
}

printEmpInfo(e1);
console.log('\n');
printEmpInfo({name:'Def', startDate: new Date()});
console.log('\n');
printEmpInfo({name:'Jkl', privileges: ['run_server']});


// Discriminated Unions =============================================
console.log('\n\nDiscriminated Unions...!!!');

interface Bird{
    type: 'bird';
    flyingSpeed: number;
};

interface Horse{
    type: 'horse';
    runningSpeed: number;
};

type Animal =  Bird | Horse;

function animalSpeed(animal: Animal)
{
    console.log('\nType of Animal : ' + animal.type);
    switch(animal.type)
    {
        case 'bird':
            console.log('Flying Speed of Bird : ' + animal.flyingSpeed);
            break;
        case 'horse':
            console.log('Running Speed of Horse : ' + animal.runningSpeed);
            break;
    }
}

animalSpeed({type:'bird', flyingSpeed:2000});
animalSpeed({type:'horse', runningSpeed:1000});


// Type Casting ======================================================
console.log('\n\nType Casting...!!!');

const userInp = <HTMLInputElement>document.getElementById('userInput');
userInp.value = 'Hello...!!!';
console.log('Hello...!!! is printed on HTMl Page in Input Field');