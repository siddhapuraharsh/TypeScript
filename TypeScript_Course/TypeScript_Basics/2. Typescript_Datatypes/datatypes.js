// Objects  -------------------------------------------
var person = {
    name: 'Anonymous',
    age: 25,
    hobbies: ['Dance', 'Read', 'Sing']
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
// Arrays  -------------------------------------------
var activities;
activities = ['Running', 'Swimming'];
for (var _b = 0, activities_1 = activities; _b < activities_1.length; _b++) {
    var act = activities_1[_b];
    console.log(act);
}
// Tuple   -------------------------------------------
var role;
role = [1, 'Abc'];
console.log(role);
for (var _c = 0, role_1 = role; _c < role_1.length; _c++) {
    var rol = role_1[_c];
    console.log(rol);
}
// Enums   -------------------------------------------
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 3] = "ADMIN";
    Role[Role["AUTHOR"] = 4] = "AUTHOR";
    Role[Role["WRITER"] = 5] = "WRITER";
})(Role || (Role = {}));
;
var temp = 3;
if (temp == Role.ADMIN)
    console.log(Role);
// Any     -------------------------------------------
var arr;
arr = [2, 'Name', 5.21];
console.log(arr);
var num;
num = 'Def';
console.log(num);
// Union   -------------------------------------------
function combine(inp1, inp2) {
    if (typeof (inp1) === 'number' && typeof (inp2) === 'number') {
        return inp1 + inp2;
    }
    else {
        return inp1.toString() + inp2.toString();
    }
}
var combineNum = combine(25, 5);
console.log(combineNum);
var combineStr = combine('Hello', 'World');
console.log(combineStr);
