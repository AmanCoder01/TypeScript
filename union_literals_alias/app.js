// UNION --> pipe in ts
function combine(num1, num2) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var result = combine(10, 10); // 30
var result2 = combine("Aman", " Maurya"); // Aman Maurya
// console.log(result);
// console.log(result2);
// LITERAL TYPE 
function combine2(num1, num2, conversionType) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number' || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine2("10", 10, "as-number");
var sum1 = combine2(10, 40, "as-number");
var sum2 = combine2("Aman", " Maurya", "as-string"); // Aman Maurya
console.log(sum);
console.log(sum1);
console.log(sum2);
