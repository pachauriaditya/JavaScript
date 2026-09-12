// -------------------------xxxx-------------------------------------------xxxx----------------------------------
  
 //String in JS

 const name = "Batman"
 const repoCount = 6

 console.log(name + " " + repoCount + " value");
 
//  //another way and clean code way 
 console.log(`Hello I'm ${name} and my repo count is ${repoCount}`);
 
const gameName = new String('Aditya')
console.log(gameName[0]);
console.log(gameName.__proto__); //in terminal it is shown empty but actually it is not, you can see it in console

// //how to use string object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)  //(starting index , go to index)
console.log(newString); //adit

const anotherString = gameName.slice(-8,2) //negative indexing
console.log(anotherString);

//read about many other method using console by creating an string object like this- const gameName = new String('Aditya') .

//----------------xxxx-----------------------------xxxxx-----------------------------------------------xxxx-------------------------------