/*
"use strict" //treat all JS code as newer version of JS
  in "use strict" we also have to declare variables
*/

// alert( 3 + 3) // we are using nodejs, not browser , it shows a pop up message box in browser

// const accountId = 12345
// let accountEmail = "aditya18@google.com"
// var accountPassword = "122344"
// accountCity ="Jaipur"


//accountId = 2  //Not allowed

// accountEmail = "ap@gmail.com"
// accountPassword = "2131133"
// accountCity ="Gurgaon"
// accountState; //undefined will be showed in terminal

/*
   Prefer not to use var
   because of issue in block scope and functional scope
*/

// console.log(accountId);
// console.table([accountId,accountEmail,accountPassword,accountCity])

//--------------------------xx----------------------------xx-------------------------------------------
//data types
// let name = "aditya"  //string datatype
// let age = 20   //number datatype => 2 to power 53  and for more big values we use bigint
// let isLoggedIn = true  //boolean datatype
// let salary = null  //null data type  || it is also a standalone value
//let timing; //undefined datatype means we declared but doesn't assign a value
//Object datatype

// console.log(typeof "aditya");
// console.log(typeof null);  //object
// console.log(typeof undefined);  //undefined

//--------------------------------xx----------------------------------xx-----------------------------------------------

// let score = "33abc"
// let score1 = null

// console.log(typeof score); //string
// console.log(typeof (score)); //we can also write like this
// console.log(typeof score1);

// let valueInNumber = Number(score)  // conversion into number
// let valueInNumber1 = Number(score1) 
// console.log(typeof valueInNumber); //number
// console.log(typeof valueInNumber1); //object
// console.log(valueInNumber);  //NaN => Not a Number
// console.log(valueInNumber1);  // 0 (zero)

// and for undefined also we get NaN
// for boolean value --> true - 1 and false - 0
//for string value which can't be converted into number we get NaN

// let isLoggedInn = 1;
// let booleanIsLoggedIn = Boolean( isLoggedInn)
// console.log(booleanIsLoggedIn); // we get true , it means that it is confirmed that 1 give true and vice versa

// 1 ==> true ; 0 ==> false
// "" => false
// "aditya" => true

// let somenumber = 33
// let stringNumber = String(somenumber)
// console.log(stringNumber);  // 33 but a string
// console.log(typeof stringNumber); //string datatype

//-------------------------------------Operations------------------------------------------------------
// let value = 4;
// let negValue = -value
// console.log(negValue);

//add
// console.log(2+2);

// //subtract
// console.log(2-2);

// //multiplication
// console.log(2*2);

// //power
// console.log(2**2);

// //divide
// console.log(3/2);

// //modulo
// console.log(3%2);

// //concatenation
// let str1 = "Aditya"
// let str2 = " Pachauri"

// let str3 = str1 + str2
// console.log(str3);

//----------------------------------xx-------------------------------------------xx------------------------------------

//these things should be avoid
// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2"); //but --> 32

// console.log(+ true); // 1 but ( true +) -> is not possible 
// console.log(+ ""); //0

// let num1 , num2, num3
// num1 = num2 = num3 = 2 + 2  //avoid doing this shit

// //prefix and postfix 
// let gameCounter = 100
// gameCounter++
// console.log(gameCounter); //101

// let gameCounterr = 100
// ++gameCounterr
// console.log(gameCounterr);

//-..........................xx......................................xx..............................

//comparison of datatypes

// console.log(2 > 1);   -> true
// console.log(2 >= 1);  -> true
// console.log(2 < 1);   -> true
// console.log(2 == 1);  -> true
// console.log(2 != 1);  -> true

//but when we compared different data types

// console.log("2" > 1); //true
// console.log("02" > 1); //true 
//because JS relational operators ( > , < , >= , <=) perform type conversion when the two values have differnet types.

// console.log(null > 0);   // false → 0 > 0
// console.log(null == 0);  // false → null != 0
// console.log(null >= 0);  // true  → 0 >= 0
// console.log(null == undefined); //true

// null == undefined   // true
// null == 0           // false
// null == ""          // false
// null == false       // false

// null with >, <, >=, <= is converted to 0.
// But with ==, null only equals undefined, not 0

// console.log( undefined == 0); //false
// console.log( undefined >= 0);  //false
// console.log( undefined < 0); //false

//=== 
// console.log("2" === 2); // false cuz of two different datatypes
//because === compares data types values and also data types like of what data type it is...

//-----------Summary of data types-------------------------------------------------------------

//datatypes ----> 1.Primitve ,and 2.Non Primitive / Reference Type
//Primitive DataTypes  --> call by value 
// 7 types: 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt

//Non Primitive ---> call by reference
//Arrays , Objects , functions.

//JS is Dynamically typed language -> we do not have to defined the datatype.

//Symbols
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);  //false
//return type of symbol is symbol itself

//BigInt
// const  bigNumber = 2324242424242423324n //just add n in the end of a number to represent big int

//arrays
// const heroes = ["Batman" , "Captain America" , "Iron Man" , "Thor"] 

//objects
// let myObj = {
//   name: "Aditya",
//   age: 20,
// }

// const myFunc = () => {
//   console.log("Hello World!!!");
// }

// console.log(typeof myFunc);
// console.log(typeof myObj);

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
// let myCollegeName = "Vengeance"
// let anotherName = myCollegeName

// console.log(myCollegeName); //Vengeance
// console.log(anotherName); //Vengeance
//but
//  anotherName = "KingPin"
//  console.log(anotherName); //kingPin
//  console.log(myCollegeName); //Vengeance

 //because in primitive data types, a copy of original value is given that's why the original value does not change
// we are using these  primitive datatype in stack memory



// let userone = {
//   email : "userone@google.com",
//   upi : "userone@ptaxis"
// }

// let usertwo = userone
// console.log(userone); 
// console.log(usertwo);
//same values of both users

// usertwo.email = "mankind@google.com"
// console.log(userone.email);
// console.log(usertwo.email);
//both have same value -> mankind@google.com
//because here we use heap memory , and in non primitive data types we use reference value instead of
//  copy value that's why the values are same unlike primitive datatypes which have different values

// -------------------------xxxx-------------------------------------------xxxx----------------------------------
  
 //String in JS

//  const name = "Batman"
//  const repoCount = 6

//  console.log(name + " " + repoCount + " value");
 
//  //another way and clean code way 
//  console.log(`Hello I'm ${name} and my repo count is ${repoCount}`);
 
// const gameName = new String('Aditya')
// console.log(gameName[0]);
// console.log(gameName.__proto__); //in terminal it is shown empty but actually it is not, you can see it in console

// //how to use string object
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('d'));

// const newString = gameName.substring(0,4)  //(starting index , go to index)
// console.log(newString); //adit

// const anotherString = gameName.slice(-8,2) //negative indexing
// console.log(anotherString);

//read about many other method using console by creating an string object like this- const gameName = new String('Aditya') .

//----------------xxxx-----------------------------xxxxx-----------------------------------------------xxxx-------------------------------

//numbers in JS
// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); //convert the number into string
// console.log(balance.toFixed(1)); //fixed number of decimal value like 100.0

// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3));//Number of significant digits. Must be in the range 1 - 21, inclusive.
//         //23.9                          //Returns a string containing a number represented either in exponential
//                                         //  or fixed-point notation with a specified number of digits.
//                                         //it simply round of the value after a given place by user
// const hundreds = 1000000
// console.log(hundreds.toLocaleString());  //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000 - Indian Style

//-------------------xxxx--------------------------------xxxx-----------------------------------------xxxxx-----------------------------------

//maths in JS
// console.log(Math);
// console.log(Math.abs(-4)); //4 only -ve value becomes +ve

// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));  // 5 , ceiling also used for round offs
// console.log(Math.floor(4.6)); //4

// console.log(Math.min(4,3,5,6,8)); //3
// console.log(Math.max(4 , 56,64,11)); //64
// console.log(Math.random()); //any random value but in decimal
// console.log(Math.floor(Math.random() *10)+1); //we multiply by 10 to get one digit before decimal and add 1 to it to avoid value which have zero just after decimal

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)   //to find random values between max and min and here we add min at the end because we want our  value greater than or equal to min

//--------------------xx-------------------------------xx-----------------------------------------------xx----------------------------------------------------xx------------------------------------------------------------

//Dates and Time in JavaScript

// let myDate = new Date()
// console.log(myDate); //2026-09-12T14:43:43.710Z

// console.log(myDate.toString()); //Sat Sep 12 2026 20:14:43 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); //9/12/2026, 8:16:14 PM
// console.log(typeof myDate); //Object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate); //2023-01-22T18:30:00.000Z
// //we can see that the months in JS starts from 0 ie., for 0 it is January

// let myCreatedDate1 = new Date(2023,0,23,5,6)
// console.log(myCreatedDate1.toLocaleString()); //1/23/2023, 5:06:00 AM

// let newDate = new Date("2023-01-07")
// console.log(newDate.toLocaleString()); //1/7/2023, 5:30:00 AM  in format of DD-MM-YYYY

// let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1789224850710

// console.log(myCreatedDate.getTime()); //1674412200000

// console.log(Date.now()/1000); //1789225002.915
// //here we converted into seconds but get answer in decimal

// //to tackle decimal
// console.log(Math.floor(Date.now()/1000)); //1789225078

// let newDate1 = new Date()
// console.log(newDate1); //2026-09-12T14:59:13.540Z

// console.log(newDate1.getMonth()) //8
// console.log(newDate1.getMinutes()) //30 


// console.log(newDate1.toLocaleString('default', {
//   weekday: "long"
// }))
//by pressing ctrl+space you'll get the suggestions of methods

//-----------------------------------------xxxx---------------------------------------------xxxx----------------------------------------xxxx------------------------------------------------------------------------xxxxx------------