//Dates and Time in JavaScript

let myDate = new Date()
console.log(myDate); //2026-09-12T14:43:43.710Z

console.log(myDate.toString()); //Sat Sep 12 2026 20:14:43 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //9/12/2026, 8:16:14 PM
console.log(typeof myDate); //Object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate); //2023-01-22T18:30:00.000Z
//we can see that the months in JS starts from 0 ie., for 0 it is January

let myCreatedDate1 = new Date(2023,0,23,5,6)
console.log(myCreatedDate1.toLocaleString()); //1/23/2023, 5:06:00 AM

let newDate = new Date("2023-01-07")
console.log(newDate.toLocaleString()); //1/7/2023, 5:30:00 AM  in format of DD-MM-YYYY

let myTimeStamp = Date.now()

console.log(myTimeStamp); //1789224850710

console.log(myCreatedDate.getTime()); //1674412200000

console.log(Date.now()/1000); //1789225002.915
//here we converted into seconds but get answer in decimal

// to tackle decimal
console.log(Math.floor(Date.now()/1000)); //1789225078

let newDate1 = new Date()
console.log(newDate1); //2026-09-12T14:59:13.540Z

console.log(newDate1.getMonth()) //8
console.log(newDate1.getMinutes()) //30 

console.log(newDate1.toLocaleString('default', {
  weekday: "long"
}))

//by pressing ctrl+space you'll get the suggestions of methods