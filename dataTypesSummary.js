//-----------Summary of data types-------------------------------------------------------------

//datatypes ----> 1.Primitve ,and 2.Non Primitive / Reference Type
//Primitive DataTypes  --> call by value
// 7 types: 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt

//Non Primitive ---> call by reference
//Arrays , Objects , functions.

//JS is Dynamically typed language -> we do not have to defined the datatype.

//Symbols
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);  //false
//return type of symbol is symbol itself

//BigInt
const  bigNumber = 2324242424242423324n //just add n in the end of a number to represent big int

//arrays
const heroes = ["Batman" , "Captain America" , "Iron Man" , "Thor"] 

//objects
let myObj = {
  name: "Aditya",
  age: 20,
}

const myFunc = () => {
  console.log("Hello World!!!");
}

console.log(typeof myFunc);
console.log(typeof myObj);

// ================== type of Operator ==================

// Type of Value                  Result
// -----------------------------------------------------
// Undefined                      "undefined"
// Null                           "object"
// Boolean                        "boolean"
// Number                         "number"
// String                         "string"
// Object                         "object"
// Function                       "function"

// Example:
// typeof undefined   → "undefined"
// typeof null        → "object"
// typeof true        → "boolean"
// typeof 123         → "number"
// typeof "Hello"     → "string"
// typeof {}          → "object"
// typeof function(){} → "function"

//----------------------xx---------------------------------------------xx----------------

//Memory --> 1.Stack --> used in primitive types , and 2.Heap --> used in non primitive types
let myCollegeName = "Vengeance"
let anotherName = myCollegeName

console.log(myCollegeName); //Vengeance
console.log(anotherName); //Vengeance
//but
 anotherName = "KingPin"
 console.log(anotherName); //kingPin
 console.log(myCollegeName); //Vengeance

 //because in primitive data types, a copy of original value is given that's why the original value does not change
// we are using these  primitive datatype in stack memory



let userone = {
  email : "userone@google.com",
  upi : "userone@ptaxis"
}

let usertwo = userone
console.log(userone); 
console.log(usertwo);
//same values of both users

usertwo.email = "mankind@google.com"
console.log(userone.email);
console.log(usertwo.email);
//both have same value -> mankind@google.com
//because here we use heap memory , and in non primitive data types we use reference value instead of
//  copy value that's why the values are same unlike primitive datatypes which have different values