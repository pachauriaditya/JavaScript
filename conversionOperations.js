// -------------------------------------Operations------------------------------------------------------
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

// these things should be avoid
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