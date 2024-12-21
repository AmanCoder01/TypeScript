interface Person {
    name: string;
    age: number;

    greet(text: string): void;
}

let user: Person;

user = {
    name: "John",
    age: 30,
    greet: function (text: string): void {
        console.log(text);
    }
}

user.greet("Aman");
console.log(user);






// 2nd example

interface Greeting {
    name: string;
    greet(text: string): void;

}

class Person implements Greeting {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    greet(text: string): void {
        console.log(text);
    }

}

const objw = new Person("Aman");




// extending interface

interface Greetable extends Greeting {
    age: number;
}




interface addFun {
    (a: number, b: number): number;
}


let add: addFun;





// optional

interface Person1 {
    name: string;
    age?: number;
}