var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of Strings ==================================================
console.log('Array of Strings...!!!');
var arr = [];
arr[0] = 'Abc';
arr[1] = 'Def';
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var str = arr_1[_i];
    console.log(str);
}
// Generic Function ==================================================
console.log('\n\nGeneric Function...!!!');
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Jkl' }, { age: 25 });
console.log('Name : ' + mergedObj.name);
console.log('Age : ' + mergedObj.age);
// 1. Generic Function with Constraints  ==================================================
console.log('\n\n1. Generic Function with Constraints...!!!');
function merged(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge(30, { name: 'Mno' });
console.log('Name : ' + mergeObj.name);
console.log(mergeObj);
// 2. Generic Function with Constraints   ==================================================
console.log('\n\n2. Generic Function with Constraints...!!!');
function countDesc(element) {
    var descText = 'Got no values...';
    if (element.length === 1)
        descText = 'Got 1 value...';
    else if (element.length > 1)
        descText = 'Got ' + element.length + ' values...';
    return [element, descText];
}
console.log(countDesc('Hi...'));
console.log(countDesc(['Hello', 'World']));
// keyof Constraint  ==================================================
console.log('\n\nkeyof Constraint...!!!');
function extractConvert(obj, key) {
    return 'Value : ' + obj[key];
}
console.log(extractConvert({ name: 'Pqr' }, 'name'));
// Generic Classes  ========================================================================================
console.log('\n\nGeneric Classes...!!!');
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('This');
textStorage.addItem('is');
textStorage.addItem('Generic Class');
console.log(textStorage.getItems());
textStorage.removeItem('is');
console.log(textStorage.getItems());
console.log('\n');
var numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
console.log(numberStorage.getItems());
numberStorage.removeItem(20);
console.log(numberStorage.getItems());
