//generics ?
const fruits: string[] = ["Apple", "Mango"];

const fruit: Array<string> = ["Apple", "Mango"];

type Person = {
    name: string;
    age: number;
}

const Boy: Person = {
    name: "John",
    age: 10
}

const boysArr: Array<Person> = [ // array of objects
    {
        name: "John",
        age: 10
    }
];




// merse two objects function
function mergeTwoObjects<T, U>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 };
}
// usage
const obj1 = {
    name: "John",
    age: 10
};
const obj2 = {
    name: "Vikas",
    age: 20
};
const merged = mergeTwoObjects(obj1, obj2);
// console.log(merged); // { name: 'John', age: 10, name:'Vikas', age: 20 }






// generic constraints
function mergeTwoObjectss<T extends { name: string, age: number }>(obj11: T, obj22: T) {
    return { ...obj1, ...obj2 };
}
// usage
const obj11 = {
    name: "John",
    age: 10
};
const obj22 = {
    name: "Vikas",
    age: 20
};
const mergedd = mergeTwoObjectss(obj11, obj22);
// console.log(merged); // { name: 'John', age: 10, name: 'Vikas', age: 20 }





// Generic interface
interface Person1<T> {
    name: T;
}


// Generic default
interface Person1<T = string> {
    name: T;
}




// 4. Generics with class

class Container<T> {
    private content: T;
    constructor(content: T) {
        this.content = content
    }
    getContent(): T {
        return this.content;
    }
}

const stringContainer = new Container<string>("Hello");
// console.log(stringContainer.getContent());

const numberContainer = new Container<number>(100);
// console.log(numberContainer.getContent());





// Generic with Array
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirst([1, 2, 3, 4]);
const firstString = getFirst(["a", "b", "c"]);
// console.log(firstNumber);
// console.log(firstString);







// Generic with keyof
const Person = { key: "Mernstack" }
console.log(Person["key"]);

function getPropertye(obj: object, key: string) {
    return obj[key]
}
const res1 = getPropertye({}, "name");
// console.log(res1);  // undefined

function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const person = { name: "Patel", age: 21 };
// const person2 = {fullname:"Patel", salary:21};
const name1 = getProperty(person, "name");
// const age = getProperty(person2, "age");
console.log(name1);