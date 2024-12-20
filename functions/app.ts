// function return type

function add(a: number, b: number): number { // return type number
    return a + b;
}

const result = add(3, 5);
// console.log(result); // Output: 8




function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}


let conbineFunction: Function;
// conbineFunction = 12; // invalid
conbineFunction = function () { // valid
    console.log("Hello, world!");
}



// Good practice
let combineFunction: (a: number, b: number) => number;
combineFunction = add;




// Function type & callbacks

function addHandle(num1: number, num2: number, cb: (n: number) => void) {
    const result = num1 + num2;

    cb(result);
}

function cb(result: number) {
    console.log(result);
}
addHandle(3, 5, cb); // Output: 8