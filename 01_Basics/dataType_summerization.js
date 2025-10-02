//There is two type of data type 
//1. Primitive=> 7 types=> String, number, boolean, null, undefined, symbol, BigInt => this directly give value from memory.
// thats why it call "call by value"

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId); //false
// console.log(id); //Symbol(123)
// console.log(anotherId); //Symbol(123)

let bigNumber = 314161552542n

// console.log(typeof bigNumber); //bigInt

//2. non-primitive (reference type) => Array, Object, Functions

//array 
let heroes = ["Hero Alam", "Hero Alam1", "Hero Alam2", "Hero Alam3",]
//object
let me = {
    name: "Rifat",
    age: 26
}
//in object there is a combination of key value pair

//function
let myFun = function me(){
//console.log("hello rifat");

}

//console.log(typeof myFun);

let temparature = null
//console.log(typeof temparature); //object 



// JavaScript is a dynamically typed language.because in this no need to declare the type of a variable.
// it automatically decide which a variable is.

//The output of typeOf operator

// 1. Let val be ? Evaluation of UnaryExpression.
// 2. If val is a Reference Record, then
//    a. If IsUnresolvableReference(val) is true, return "undefined".
// 3. Set val to ? GetValue(val).
// 4. If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint".
// 11. Assert: val is an Object.
// Normative Optional
// 12. If the host is a web browser or otherwise supports The [[IsHTMLDDA]] Internal Slot, then
//     a. If val has an [[IsHTMLDDA]] internal slot, return "undefined".
// 13. If val has a [[Call]] internal method, return "function".
// 14. Return "object".

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// -----------------------------------------------------------------------------------------------

//stack (primitive) , heap ( non primitive )

let myName = "rifat"
let anotherName = myName
anotherName = "Rifat Hosain"

console.log(myName); //rifat
console.log(anotherName); //Rifat Hosain

let userOne= {
    email: "user@gmail.com"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email); //user@google.com
console.log(userTwo.email); //user@google.com

// here we use heap memory and change in memory.that's why two log return same.in heap we get memory location.
// and when we change in heap then it change the memory data.but in stack when we refer one variable to the 
// another variable the we get a copy.when we make any change then it change the copy only not the memory data












