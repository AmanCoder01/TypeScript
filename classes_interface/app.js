"use strict";
// tsc file_name --watch
// console.log("hi aman");
class Department {
    constructor(name) {
        this.name = name;
    }
    display() {
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
    constructor(name) {
        this.employees = [];
        this.name = name;
        this.id = "DPT-001"; // only once initialised
    }
    display() {
        console.log(this.name);
        console.log(this.employees);
    }
    addEmpl(emp) {
        this.employees.push(emp);
    }
}
const dep = new Department1("Priya");
dep.display();
dep.addEmpl("Aman");
// console.log(dep.employees); // error: Property 'employees' is private and only accessible within
// inheritance -
class C extends Department1 {
    constructor(name) {
        super(name); // to call parent contructor
    }
    addEmpl(emp) {
        this.employees.push(emp);
    }
    //getter 
    get getEmploye() {
        return this.employees;
    }
    //setter
    set setEmploye(value) {
        this.employees = value;
    }
}
const obj = new C("Vikas");
// static - without creating object we can access members of class
class Department2 {
    static display() {
        console.log(this.employees);
    }
    static addEmpl(emp) {
        this.employees.push(emp);
    }
}
Department2.employees = [];
Department2.display();
// abstract class - 
class Department3 {
}
class Subclass extends Department3 {
    display() {
        console.log("display method");
    }
    addEmpl(emp) {
        console.log("add employee");
    }
    getEmploye() {
        return ["Vikas", "Rahul"];
    }
    setEmploye(value) {
        console.log("set employee");
    }
}
// subclass extends abstract class
let obj2 = new Subclass();
obj2.display();
