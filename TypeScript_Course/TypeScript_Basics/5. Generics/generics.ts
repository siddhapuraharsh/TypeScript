// Array of Strings ==================================================
console.log('Array of Strings...!!!');

const arr: Array<string> = [];
arr[0] = 'Abc';
arr[1] = 'Def';
for(let str of arr) console.log(str);


// Generic Function ==================================================
console.log('\n\nGeneric Function...!!!');

function merge<T,U>(objA: T, objB: U)
{
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Jkl'}, {age: 25});
console.log('Name : ' + mergedObj.name);
console.log('Age : ' + mergedObj.age);


// 1. Generic Function with Constraints  ==================================================
console.log('\n\n1. Generic Function with Constraints...!!!');

function merged<T extends string|number ,U extends object>(objA: T, objB: U)
{
    return Object.assign(objA, objB);
}

const mergeObj = merge(30, {name: 'Mno'});
console.log('Name : ' + mergeObj.name);
console.log(mergeObj);


// 2. Generic Function with Constraints   ==================================================
console.log('\n\n2. Generic Function with Constraints...!!!');

interface len{
    length: number;
}

function countDesc<T extends len>(element: T)
{
    let descText = 'Got no values...';
    if(element.length === 1) descText = 'Got 1 value...';
    else if (element.length > 1) descText = 'Got ' + element.length + ' values...';
    return [element, descText];
}

console.log(countDesc('Hi...'));
console.log(countDesc(['Hello', 'World']));


// keyof Constraint  ==================================================
console.log('\n\nkeyof Constraint...!!!');

function extractConvert<T extends object, U extends keyof T>(obj: T, key: U)
{
    return 'Value : ' + obj[key];
}

console.log(extractConvert({name: 'Pqr'}, 'name'));




// Generic Classes  ========================================================================================
console.log('\n\nGeneric Classes...!!!');

class DataStorage<T>{
    private data: T[] = [];

    addItem(item: T)
    {
        this.data.push(item);
    }
    removeItem(item: T)
    {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems()
    {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('This');
textStorage.addItem('is');
textStorage.addItem('Generic Class');
console.log(textStorage.getItems());
textStorage.removeItem('is');
console.log(textStorage.getItems());

console.log('\n');

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
console.log(numberStorage.getItems());
numberStorage.removeItem(20);
console.log(numberStorage.getItems());