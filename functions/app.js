// function return type
function add(a, b) {
    return a + b;
}
var result = add(3, 5);
// console.log(result); // Output: 8
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
var conbineFunction;
// conbineFunction = 12; // invalid
conbineFunction = function () {
    console.log("Hello, world!");
};
// Good practice
var combineFunction;
combineFunction = add;
// Function type & callbacks
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
function cb(result) {
    console.log(result);
}
addHandle(3, 5, cb); // Output: 8
