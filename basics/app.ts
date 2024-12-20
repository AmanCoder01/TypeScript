// Why typescript?

// number ,string ,boolean - Three types
function add(num1: number, num2: number) {
    // if (typeof num1 === "number" && typeof num2 === "number") {
    //     return num1 + num2;
    // } else {
    //     throw new Error("Both inputs must be numbers");
    // }

    return num1 + num2;
}

// console.log(add("10", 20));  Argument of type 'string' is not assignable to parameter of type 'number'
console.log(add(10, 20));  // Output: 30