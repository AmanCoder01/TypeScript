// UNION --> pipe in ts

function combine(num1: number | string, num2: number | string) {
    let result: number | string;

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

let result = combine(10, 10); // 30
let result2 = combine("Aman", " Maurya"); // Aman Maurya

// console.log(result);
// console.log(result2);




// LITERAL TYPE 
// Literal types are used to specify a type that can only be one of a specific set of values
// It is used to restrict the type of a variable to a specific value

function combine2(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
    let result: number | string;

    if (typeof num1 === 'number' && typeof num2 === 'number' || conversionType === "as-number") {
        result = +num1 + + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

let sum = combine2("10", 10, "as-number");
let sum1 = combine2(10, 40, "as-number");
let sum2 = combine2("Aman", " Maurya", "as-string"); // Aman Maurya

console.log(sum);
console.log(sum1);
console.log(sum2);




// TYPE ALIAS | CUSTOM TYPE 
// Type alias is a way to give a name to an existing type. It is used to make 
// the code more readable and easier to understand.

type Combinable = number | string;

function combine3(num1: Combinable, num2: Combinable, conversionType: "as-number" | "as-string") {
    let result: number | string;

    if (typeof num1 === 'number' && typeof num2 === 'number' || conversionType === "as-number") {
        result = +num1 + + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}



type User = {
    name: string,
    age: number
}

const user: User = {
    name: "Aman",
    age: 20,
}

function greet(user: User) {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}