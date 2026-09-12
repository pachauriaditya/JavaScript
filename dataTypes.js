//data types
let name = "aditya"  //string datatype
let age = 20   //number datatype => 2 to power 53  and for more big values we use bigint
let isLoggedIn = true  //boolean datatype
let salary = null  //null data type  || it is also a standalone value
let timing; //undefined datatype means we declared but doesn't assign a value
//Object datatype

console.log(typeof "aditya");
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined

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