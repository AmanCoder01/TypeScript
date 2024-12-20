let userInput: unknown;
let userInput2: any;
let username: string;

userInput = 10;
username = "aman";

// username = userInput // Type 'unknown' is not assignable to type 'string'
username = userInput2; // no error



// never return type
function generateError(message: string, code: number): never {
    throw { message: message, statusCode: code };
}
generateError("Error", 500);