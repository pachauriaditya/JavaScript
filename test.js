/*
"use strict" //treat all JS code as newer version of JS
  in "use strict" we also have to declare variables
*/

// alert( 3 + 3) // we are using nodejs, not browser , it shows a pop up message box in browser

const accountId = 12345
let accountEmail = "aditya18@google.com"
var accountPassword = "122344"
accountCity ="Jaipur"


//accountId = 2  //Not allowed

accountEmail = "ap@gmail.com"
accountPassword = "2131133"
accountCity ="Gurgaon"
// accountState; //undefined will be showed in terminal

/*
   Prefer not to use var
   because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])

//--------------------------xx----------------------------xx-------------------------------------------
//data types
let name = "aditya"  //string datatype
let age = 20   //number datatype => 2 to power 53  and for more big values we use bigint
let isLoggedIn = true  //boolean datatype
let salary = null  //null data type  || it is also a standalone value
//let timing; //undefined datatype means we declared but doesn't assign a value
//Object datatype

console.log(typeof "aditya");
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined

//--------------------------------xx----------------------------------xx-----------------------------------------------

let score = "33abc"
let score1 = null

console.log(typeof score); //string
console.log(typeof (score)); //we can also write like this
console.log(typeof score1);

let valueInNumber = Number(score)  // conversion into number
let valueInNumber1 = Number(score1) 
console.log(typeof valueInNumber); //number
console.log(typeof valueInNumber1); //object
console.log(valueInNumber);  //NaN => Not a Number
console.log(valueInNumber1);  // 0 (zero)

// and for undefined also we get NaN
// for boolean value --> true - 1 and false - 0
//for string value which can't be converted into number we get NaN

let isLoggedInn = 1;
let booleanIsLoggedIn = Boolean( isLoggedInn)
console.log(booleanIsLoggedIn); // we get true , it means that it is confirmed that 1 give true and vice versa

// 1 ==> true ; 0 ==> false
// "" => false
// "aditya" => true

let somenumber = 33
let stringNumber = String(somenumber)
console.log(stringNumber);  // 33 but a string
console.log(typeof stringNumber); //string datatype

//-------------------------------------Operations------------------------------------------------------
let value = 4;
let negValue = -value
console.log(negValue);

//add
console.log(2+2);

//subtract
console.log(2-2);

//multiplication
console.log(2*2);

//power
console.log(2**2);

//divide
console.log(3/2);

//modulo
console.log(3%2);

//concatenation
let str1 = "Aditya"
let str2 = " Pachauri"

let str3 = str1 + str2
console.log(str3);

//----------------------------------xx-------------------------------------------xx------------------------------------

//these things should be avoid
console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2"); //but --> 32

console.log(+ true); // 1 but ( true +) -> is not possible 
console.log(+ ""); //0

let num1 , num2, num3
num1 = num2 = num3 = 2 + 2  //avoid doing this shit

//prefix and postfix 
let gameCounter = 100
gameCounter++
console.log(gameCounter); //101

let gameCounterr = 100
++gameCounterr
console.log(gameCounterr);