//Arrays- storing a collection of multiple items under a single variable name 
         //and has numbers for performing common array operations.

//arrays of js are resizeable and can contain a mix of different datatypes.
//js array-copy operations create shallow copies rather than deep copies.
//shallow copy of an object is a copy whose properties share the same references.
//deep copy of an object is a copy whose properties do not share the same references.

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

const myHeroes = ["Batman" , "Captain America" , "IronMan" , "Loki"]
console.log(myHeroes[1]);

const myArr2 = new Array(1,2,3,4)
console.log(typeof myArr2); //object

//Array Methods

myArr.push(6) //add value in array.
myArr.push(7) 
myArr.pop() //pop out/delete last value of array.

myArr.unshift(9) //[9,0,1,2,3,4,5] -> it adds a value in the starting of an array
myArr.shift()  //[ 0, 1, 2, 3, 4, 5 ] ->Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
console.log(myArr.includes(9)) //Determines whether an array includes a certain element, returning true or false as appropriate
console.log(myArr.indexOf(5)); //5

const newArr = myArr.join()
console.log(myArr); //[ 0, 1, 2, 3, 4, 5 
console.log(newArr); //0,1,2,3,4,5
console.log(typeof newArr); //string

// Slice --> Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
//Splice --> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log("A ",myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1);
console.log("B " , myArr);

const myN2 = myArr.splice(1,3)
console.log("C " , myArr);
console.log(myN2);

const marvel_heroes = ["Captain America" , "Iron Man" , "Thor" , "Loki"]
const dc_heroes = ["Batman" , "SuperMan" , "Flash" , "Wonder Woman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //We get array inside the array
 /*[
  'Captain America',
  'Iron Man',
  'Thor',
  'Loki',
  [ 'Batman', 'SuperMan', 'Flash', 'Wonder Woman' ]
]
*/

//to access these value
console.log(marvel_heroes[4][0]);
/*
[
  'Captain America',
  'Iron Man',
  'Thor',
  'Loki',
  [ 'Batman', 'SuperMan', 'Flash', 'Wonder Woman' ]
]
Batman
 */

// marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes); //output will be same of concatenate as push
/*
[
  'Captain America',
  'Iron Man',
  'Thor',
  'Loki',
  [ 'Batman', 'SuperMan', 'Flash', 'Wonder Woman' ]
]
   */

const all_heroes = marvel_heroes.concat(dc_heroes) //by storing it , gives them all under a single array
console.log(all_heroes);
/*
[
  'Captain America',
  'Iron Man',
  'Thor',
  'Loki',
  'Batman',
  'SuperMan',
  'Flash',
  'Wonder Woman'
]
*/

// the ...(three dots ) --> spread operatior , it spread the array and in push/concat we do have a limit that we can use only two but here we can spread as our wish
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);
/*
[
  'Captain America',
  'Iron Man',
  'Thor',
  'Loki',
  'Batman',
  'SuperMan',
  'Flash',
  'Wonder Woman'
]
*/

const another_arr = [0,1,2,3,[4,5,6],7,[6,7,[4,5]]]
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const useable_another_arr = another_arr.flat(Infinity) //by using infinity the js itself figured out the depth , and also we can give the depth according to need
console.log(useable_another_arr);
/*
[
  0, 1, 2, 3, 4,
  5, 6, 7, 6, 7,
  4, 5
]
*/

//check whether it is an array or not
console.log(Array.isArray("aditya")); //false

console.log(Array.from("aditya")); //from -> Creates an array from an iterable object
//[ 'a', 'd', 'i', 't', 'y', 'a' ]

console.log(Array.from({name:"aditya"})) //[] --> give an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ] ---> of -> Returns a new array from a set of elements
// we can also use 'from' instead of "of" 
