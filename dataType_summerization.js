//There is two type of data type 
//1. Primitive=> 7 types=> String, number, boolean, null, undefined, symbol, BigInt => this directly give value from memory.
// thats why it call "call by value"
//2. non-primitive (reference type) => Array, Object, Functions

// JavaScript is a dynamically typed language.because in this no need to declare the type of a variable.
// it automatically decide which a variable is.

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); //false
console.log(id); //Symbol(123)
console.log(anotherId); //Symbol(123)




