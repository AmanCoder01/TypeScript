// 1 -> OBJECT
var person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
    },
    skills: ["reactjs", "nodejs"]
};
// console.log(person);
// 2-> ARRAY
var fav;
fav = ["hindi", "english"];
// fav[0] = 1; not possible
// console.log(fav[0]);
var fav2; // loose ts power
fav2 = ["hindi", "english", 332, true];
// 3-> TUPLE
var user = {
    name: 'John Doe',
    age: 30,
    skills: ["reactjs", "nodejs"],
    product: [10, 'product name']
};
console.log(user);
