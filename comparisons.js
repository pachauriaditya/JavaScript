//comparison of datatypes

console.log(2 > 1);  // -> true
console.log(2 >= 1);  //-> true
console.log(2 < 1);   //-> true
console.log(2 == 1);  //-> true
console.log(2 != 1);  //-> true

//but when we compared different data types

console.log("2" > 1); //true
console.log("02" > 1); //true 
//because JS relational operators ( > , < , >= , <=) perform type conversion when the two values have differnet types.

console.log(null > 0);   // false → 0 > 0
console.log(null == 0);  // false → null != 0
console.log(null >= 0);  // true  → 0 >= 0
console.log(null == undefined); //true

// null == undefined   // true
// null == 0           // false
// null == ""          // false
// null == false       // false

// null with >, <, >=, <= is converted to 0.
// But with ==, null only equals undefined, not 0

console.log( undefined == 0); //false
console.log( undefined >= 0);  //false
console.log( undefined < 0); //false

// === 
console.log("2" === 2); // false cuz of two different datatypes
//because === compares data types values and also data types like of what data type it is...