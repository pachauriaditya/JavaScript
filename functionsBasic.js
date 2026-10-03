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

// function calculateCartPrice(...num1){ // here we use the rest  operator which looks similiar to spread operator
//   return num1
// }
// console.log(calculateCartPrice(200,400,500,2999)); //[ 200, 400, 500, 2999 ]

// function calculateCartPrice2(val1,val2,...num1){
//   return num1
// }
// console.log(calculateCartPrice2(200,400,500,2999)); //[ 500, 2999 ] ---> it is because the 200 , 400 stored in val1,val2 respectively


// const user = {
//   username : "Aditya",
//   price : "18"
// }

// function handleObject(anyObject){
//   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
  
// }
// handleObject(user)
// /*
// //direct object pass
// handleObject({
//   username : "Aditya",
//   price : "18"
// })
// */

// const myNewArray = [200,400,100,600]

// function returnSecondValue(getValue){
//   return getValue[1]
// }
// console.log(returnSecondValue(myNewArray)); //400

// //direct pass the array
// console.log(returnSecondValue([200,400,100,600])); //400


//---------------------------------------------------------------------------------------------------------------

//This keyword in JS

  // const user = {
  //   username : "aditya",
  //   price : 999,
  //  //here we use this keyword to access the object properties
  //   welcomeMessage : function(){
  //     console.log(`Welcome ${this.username} and your price is ${this.price}`);
  //     console.log(this);
      
  //   }

  // }

  //welcomeMessage : function(){
    //   console.log(`Welcome ${this.username} and your price is ${this.price}`);
    //   console.log(this);
      
    // }

//output -->
// Welcome aditya and your price is 999
// {
//   username: 'aditya',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// Welcome Virat and your price is 999
// {
//   username: 'Virat',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

  //user.welcomeMessage() //Welcome aditya and your price is 999

 // user.username = "Virat"
  //user.welcomeMessage() //Welcome Virat and your price is 999

//console.log(this) //{} --> 'empty object' because we are in nodejs environment if we comment ->   // user.welcomeMessage() //Welcome aditya and your price is 999
  // user.username = "Virat"
  // user.welcomeMessage() //Welcome Virat and your price is 999
// the above code and run this line then we will get the global object in nodejs which is global and in browser it is window



// ----------------------------------------------------------------------------------------------------------------------

// function sayMyName(){
//   console.log(this); 
  
// }
// sayMyName() // we get a global object in nodejs which is global and in browser it is window 




// function sayMyName(){
//   let username = "Aditya"
  
//   console.log(this.username); //undefined because this is not pointing to the global object here
  
// }
// sayMyName()



// const marvel = () => {
//   let username = "Aditya"
//   console.log(this.username); //undefined because this is not pointing to the global object here
// }

// console.log(marvel()); //undefined


// const marvell = () => {
//   let username = "Aditya"
//   console.log(this); //{} --> empty object because we are in nodejs environment
// }

// so the difference between the normal function and arrow function is that in normal function this keyword points to the global object and in arrow function this keyword points to the local object






// const addTwo = (num1, num2) => {
//   return num1 + num2; //if we wrap in {} then we have to use return keyword otherwise we can use implicit return
// }
// console.log(addTwo(17, 18)); //35



// //implicit return
// const addThree = (num1, num2, num3) => num1 + num2 + num3;
// console.log(addThree(1, 2, 3)); //6

// const addThreee = (num1, num2, num3) => (num1 + num2 + num3) // no need to use return keyword because we are using implicit return
// console.log(addThreee(1, 2, 3));

// const addFour = (num1, num2) => ({username : "Aditya", price : 999}) //if we want to return an object then we have to wrap it in () otherwise it will give error
// console.log(addFour(1, 2)); //{ username: 'Aditya', price: 999 }

// const myArray =[2,3,4,5,6]
// myArray.forEach((element) => console.log(element)) //2 3 4 5 6