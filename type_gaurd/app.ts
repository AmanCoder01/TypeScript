// Type Gaurds

type Combinable = string | number;
type Combinable2 = string | number | boolean;

type Universal = Combinable & Combinable2;

function add(a: Combinable, b: Combinable) {
    // return a + b; 
    //add type gaurd
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}




// type casting / type assertion

const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInpu1t = document.getElementById("user-input")! as HTMLInputElement;
userInput.value = "hi Aman";