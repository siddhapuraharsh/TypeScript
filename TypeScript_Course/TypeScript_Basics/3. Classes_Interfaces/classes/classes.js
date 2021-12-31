var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employeeList = [];
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, ") : ") + this.name);
    };
    Department.prototype.addEmployee = function (employeeName) {
        this.employeeList.push(employeeName);
    };
    Department.prototype.printEmployee = function () {
        console.log('Total Employees : ' + this.employeeList.length);
        console.log(this.employeeList);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    return Department;
}());
// -------------------------------------------------------------------
var dept = new Department('D1', 'Accounting');
console.log(dept);
dept.describe();
var static_method = Department.createEmployee('Xyz');
console.log(static_method);
console.log('\n');
// --------------------------------------------------------------------
dept.addEmployee('Abc');
dept.addEmployee('Def');
dept.printEmployee();
console.log('\n');
// Inheritance --------------------------------------------------------
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, adminList) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.adminList = adminList;
        _this.adminList = adminList;
        return _this;
    }
    return ITDepartment;
}(Department));
var itDept = new ITDepartment('D5', ['Jkl']);
console.log(itDept);
console.log(itDept.adminList);
console.log('\n');
// Overriding ---------------------------------------------------------
// Get & Set  ---------------------------------------------------------
var accountDepartment = /** @class */ (function (_super) {
    __extends(accountDepartment, _super);
    function accountDepartment(id, reports) {
        var _this = _super.call(this, id, 'Account') || this;
        _this.reports = reports;
        _this.reports = reports;
        return _this;
    }
    Object.defineProperty(accountDepartment.prototype, "latestReport", {
        get: function () {
            this.lastReport = this.reports[0];
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("Report does not exist....");
        },
        set: function (value) {
            if (value) {
                this.addReport(value);
            }
            else {
                throw new Error("Enter Valid Report...");
            }
        },
        enumerable: false,
        configurable: true
    });
    accountDepartment.prototype.addEmployee = function (employeeName) {
        if (employeeName === 'Abc')
            console.log('Abc cannot be Employee of Account Dept.');
        else
            this.employeeList.push(employeeName);
    };
    accountDepartment.prototype.printEmployee = function () {
        console.log('Total Employees in Account Dept : ' + this.employeeList.length);
        console.log(this.employeeList);
    };
    accountDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    accountDepartment.prototype.printReport = function () {
        console.log('Total Reports : ' + this.reports.length);
        console.log(this.reports);
    };
    return accountDepartment;
}(Department));
var accountDept = new accountDepartment('D4', ['First Entry']);
accountDept.addReport('Second Entry');
accountDept.printReport();
accountDept.addEmployee('Abc');
accountDept.addEmployee('Pqr');
accountDept.printEmployee();
console.log(accountDept.latestReport);
accountDept.latestReport = 'Third Entry';
console.log(accountDept.latestReport);
