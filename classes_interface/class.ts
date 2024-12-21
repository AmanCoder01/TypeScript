// tsc file_name --watch

// console.log("hi aman");


class Department {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    display(this: Department) { // can't create copy
        console.log(this.name);
    }
}

// const newac = new Department("Aman");
// newac.display();





// private ,public,protected access modifiers
// private is only accessible within the class
// public is accessible from anywhere
// protected is accessible within the class and its child classes

class Department1 {
    name: string;
    protected employees: string[] = [];
    private readonly id: string;

    constructor(name: string) {
        this.name = name;
        this.id = "DPT-001"; // only once initialised
    }

    display(this: Department1) { // can't create copy
        console.log(this.name);
        console.log(this.employees);

    }

    addEmpl(emp: string) {
        this.employees.push(emp);
    }
}

const dep = new Department1("Priya");
dep.display();
dep.addEmpl("Aman");
// console.log(dep.employees); // error: Property 'employees' is private and only accessible within





// inheritance -

class C extends Department1 {
    constructor(name: string) {
        super(name); // to call parent contructor
    }

    addEmpl(emp: string): void { // override
        this.employees.push(emp);
    }

    //getter 
    get getEmploye() {
        return this.employees;
    }

    //setter
    set setEmploye(value: string[]) {
        this.employees = value;
    }
}

const obj = new C("Vikas");





// static - without creating object we can access members of class
class Department2 {
    static employees: string[] = [];

    static display() {
        console.log(this.employees);
    }
    static addEmpl(emp: string) {
        this.employees.push(emp);
    }
}

Department2.display();




// abstract class - 

abstract class Department3 {
    abstract display(): void; // abstract function -no implementation
    abstract addEmpl(emp: string): void;
    abstract getEmploye(): string[];
    abstract setEmploye(value: string[]): void;
}

class Subclass extends Department3 {
    display(): void {
        console.log("display method");
    }
    addEmpl(emp: string): void {
        console.log("add employee");
    }
    getEmploye(): string[] {
        return ["Vikas", "Rahul"];
    }
    setEmploye(value: string[]): void {
        console.log("set employee");
    }

}
// subclass extends abstract class
let obj2 = new Subclass();
obj2.display();

