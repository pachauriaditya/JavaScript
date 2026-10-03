//var c = 300 //global scope
// let a = 100
// if(true){   //block scope
//   let a = 10
//   const b = 20
// //   var c = 30
// console.log("Inner a :" , a); //Inner a : 10

// }
 
// console.log(a); --> it gives error
// console.log(b); --> it gives error
//console.log(c); //but it does not gives error cuz we use var to store value in c. 

//above we declare the value of c in global scope and then we again declare the value of c in block scope using var. So it will override the value of c in global scope.

// console.log("outer a :" , a); //outer a : 100



// function one(){
//     const username = "Aditya"

//     function two(){
//         const website = "www.google.com"
//         console.log(username);
//         console.log(website);
//     }
//     //console.log(website);  //it gives error because website is declared in function two and we are trying to access it in function one.
//     two()
//     console.log(username);
// }

// one()


// if(true){
//     const username = "aditya"
//     if(username === "aditya"){
//         const website = "www.google.com"
//         console.log(username + " " + website);
//     }
    //console.log(website); --> it gives error because website is declared in inner if block and we are trying to access it in outer if block.
    
  //  console.log(username); //it will print aditya because username is declared in outer if block and we are trying to access it in outer if block.
// }

// console.log(username); --> it gives error because username is declared in if block and we are trying to access it in global scope.

//-------------------------------------------------------------------------------------------------------------

//Hoisting --> it is a process in which the variable and function declarations are moved to the top of their scope before code execution.

// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// //function in the form of expression

// //console.log(addTwo(5)) //it gives error now 
// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5))
