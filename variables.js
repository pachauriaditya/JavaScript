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