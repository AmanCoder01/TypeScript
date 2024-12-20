// 1 -> OBJECT

const person: {
    name: string;
    age: number;
    occupation: string;
    address: {
        street: string;
        city: string;
    };
    skills: string[]
} = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
    },
    skills: ["reactjs", "nodejs"]
}

// console.log(person);



// 2-> ARRAY

let fav: string[];

fav = ["hindi", "english"];
// fav[0] = 1; not possible
// console.log(fav[0]);

let fav2: any[]; // loose ts power
fav2 = ["hindi", "english", 332, true];




// 3-> TUPLE

const user: {
    name: string;
    age: number;
    skills: string[];
    product: [number, string] // tuple fixed array type
} = {
    name: 'John Doe',
    age: 30,
    skills: ["reactjs", "nodejs"],
    product: [10, 'product name']
}

// console.log(user);




// 4-> ENUM

enum Role {
    ADMIN,
    USER
}

const user2: {
    name: string;
    age: number;
    skills: string[];
    product: [number, string];
    role: Role;
} = {
    name: 'John Doe',
    age: 30,
    skills: ["reactjs", "nodejs"],
    product: [10, 'product name'],
    role: Role.ADMIN
}


