//numbers in JS
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); //convert the number into string
console.log(balance.toFixed(1)); //fixed number of decimal value like 100.0

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));//Number of significant digits. Must be in the range 1 - 21, inclusive.
//         //23.9                          //Returns a string containing a number represented either in exponential
//                                         //  or fixed-point notation with a specified number of digits.
//                                         //it simply round of the value after a given place by user
const hundreds = 1000000
console.log(hundreds.toLocaleString());  //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 - Indian Style

//-------------------xxxx--------------------------------xxxx-----------------------------------------xxxxx-----------------------------------

//maths in JS
console.log(Math);
console.log(Math.abs(-4)); //4 only -ve value becomes +ve

console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2));  // 5 , ceiling also used for round offs
console.log(Math.floor(4.6)); //4

console.log(Math.min(4,3,5,6,8)); //3
console.log(Math.max(4 , 56,64,11)); //64
console.log(Math.random()); //any random value but in decimal
console.log(Math.floor(Math.random() *10)+1); //we multiply by 10 to get one digit before decimal and add 1 to it to avoid value which have zero just after decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   //to find random values between max and min and here we add min at the end because we want our  value greater than or equal to min

//--------------------xx-------------------------------xx-----------------------------------------------xx----------------------------------------------------xx------------------------------------------------------------