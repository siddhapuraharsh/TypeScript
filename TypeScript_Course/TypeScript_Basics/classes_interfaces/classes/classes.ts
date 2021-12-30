class Department
{
    protected employeeList: string[] = [];

    constructor(private id: string, public name: string) {}

    describe(): void
    {
        console.log(`Department (${this.id}) : ` + this.name);
    }

    addEmployee(employeeName: string): void
    {
        this.employeeList.push(employeeName);
    }

    printEmployee(): void
    {
        console.log('Total Employees : ' + this.employeeList.length);
        console.log(this.employeeList)
    }

    static createEmployee(name: string)     // Static Method Example
    {
        return {name: name};
    }
}

// -------------------------------------------------------------------
const dept = new Department('D1','Accounting');
console.log(dept);
dept.describe();

const static_method = Department.createEmployee('Xyz');  // Static Method Calling. No need to use new keyword
console.log(static_method);

console.log('\n');

// --------------------------------------------------------------------
dept.addEmployee('Abc');
dept.addEmployee('Def');

dept.printEmployee();
console.log('\n');


// Inheritance --------------------------------------------------------

class ITDepartment extends Department
{
    constructor(id: string, public adminList: string[])
    {
        super(id, 'IT');
        this.adminList = adminList;
    }
}

const itDept = new ITDepartment('D5', ['Jkl']);
console.log(itDept);
console.log(itDept.adminList);
console.log('\n');


// Overriding ---------------------------------------------------------
// Get & Set  ---------------------------------------------------------

class accountDepartment extends Department
{
    private lastReport: string;
    constructor(id: string, public reports: string[])
    {
        super(id, 'Account');
        this.reports = reports;       
    }

    get latestReport()
    {
        this.lastReport = this.reports[0];
        if(this.lastReport) 
        {
            return this.lastReport;
        }
        throw new Error("Report does not exist....");  
    }
    set latestReport(value: string)
    {
        if(value) 
        {
            this.addReport(value);
        }
        else 
        {
            throw new Error("Enter Valid Report...");
        }
    }

    addEmployee(employeeName: string)             // Method Overriding
    {
        if(employeeName === 'Abc') console.log('Abc cannot be Employee of Account Dept.');
        else this.employeeList.push(employeeName);
    }
    printEmployee()                               // Method Overriding
    {
        console.log('Total Employees in Account Dept : ' + this.employeeList.length);
        console.log(this.employeeList);    
    }
    
    addReport(report: string)
    {
        this.reports.push(report);
    }
    printReport()
    {
        console.log('Total Reports : ' + this.reports.length);
        console.log(this.reports);
    }
}

const accountDept = new accountDepartment('D4', ['First Entry']);
accountDept.addReport('Second Entry');
accountDept.printReport();

accountDept.addEmployee('Abc');
accountDept.addEmployee('Pqr');
accountDept.printEmployee();

console.log(accountDept.latestReport);
accountDept.latestReport = 'Third Entry';
console.log(accountDept.latestReport);