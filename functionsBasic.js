//Funtions
// function sayMyName(){
//   console.log("A");
//   console.log("D");
//   console.log("I");
//   console.log("T");
//   console.log("Y");
//   console.log("A");
// }

// sayMyName()

// function addTwoNumbers(num1,num2){
//   console.log( num1 + num2);
  
// }
// addTwoNumbers(17,18) //35
// const result = addTwoNumbers(17,"18") 
// console.log("Result:",result); //undefined

// function addTwoNumber(num1 , num2){
//   // let result = num1 + num2
//   // return result
//   return num1 + num2
// }

// const result = addTwoNumber(18,17)
// console.log("Result :" , result); //Result : 35


// function loginUserMessage(username){ //to give default value --> (username = "Virat")
//   if(username == undefined){
//     console.log("Please Enter  a Username")
//     return
//   }
//   return `${username} just logged in`
// }

// console.log(loginUserMessage("Aditya")); //Aditya just logged in

// console.log(loginUserMessage()); //undefined just logged in (when we don't write the above if statement)
//when we write the if statement --> Please Enter  a Username

function calculateCartPrice(...num1){ // here we use the rest  operator which looks similiar to spread operator
  return num1
}
console.log(calculateCartPrice(200,400,500,2999)); //[ 200, 400, 500, 2999 ]

function calculateCartPrice2(val1,val2,...num1){
  return num1
}
console.log(calculateCartPrice2(200,400,500,2999)); //[ 500, 2999 ] ---> it is because the 200 , 400 stored in val1,val2 respectively


const user = {
  username : "Aditya",
  price : "18"
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
  
}
handleObject(user)
/*
//direct object pass
handleObject({
  username : "Aditya",
  price : "18"
})
*/

const myNewArray = [200,400,100,600]

function returnSecondValue(getValue){
  return getValue[1]
}
console.log(returnSecondValue(myNewArray)); //400

//direct pass the array
console.log(returnSecondValue([200,400,100,600])); //400