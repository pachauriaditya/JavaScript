//objects

/*
 Singleton --> A Singleton is an object for which only one instance
 is created and reused.

 Object.create() --> Creates a new object using the given object
 as its prototype. It does NOT automatically create a Singleton.
*/

//Object literals
//the object is defined in key:value pairs and the keys are considered as strings
//Object keys can be Strings or Symbols

const mySym = Symbol("key1")

const JsUser = {
  name : "aditya",
  "full Name" : "Bruce Wayne",

  //mySym : "myKey1" --> here "mySym" is treated as a String key
  [mySym] : "myKey1", //to use the actual Symbol as a key, we use []

  age : 20,
  location : "India",
  email : "aditya@google.com",
  isLoggedIn : false,
  lastLoginDays : ["Monday", "Saturday",]
}

// to access these key:values
console.log(JsUser.email); //aditya@google.com

//or
console.log(JsUser["email"]); //aditya@google.com
// while accessing values using [] braces, we type the key as a String

// console.log(JsUser.full name);
// we can't access the key "full Name" using dot notation
// that's why we use [] braces

console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);
// we don't use "" here because mySym already contains the Symbol


// to change the value
JsUser["email"] = "aditya@chatgpt.com"
console.log(JsUser);
/*
{
  name: 'aditya',
  'full Name': 'Bruce Wayne',
  age: 20,
  location: 'India',
  email: 'aditya@chatgpt.com', //updated value
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'myKey1'
}
*/


// to lock the value i.e., no one can change it
Object.freeze(JsUser)

JsUser["email"] = "aditya@microsoft.com"
console.log(JsUser);
/*
{
  name: 'aditya',
  'full Name': 'Bruce Wayne',
  age: 20,
  location: 'India',
  email: 'aditya@chatgpt.com', //value doesn't change
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'myKey1'
}
*/


//to use a function in object

JsUser.greeting = function(){
  console.log("Hello JS User");
}

JsUser.greeting2 = function(){
  console.log(`hello JS User, ${this.name}`);
}

console.log(JsUser.greeting); //[Function (anonymous)] --> reference of a function

console.log(JsUser.greeting());
// Hello JS User
// undefined --> because the function does not return anything

console.log(JsUser.greeting2); //[Function (anonymous)]

console.log(JsUser.greeting2());
// hello JS User, aditya
// undefined --> because the function does not return anything


const tinderUser = new Object()
console.log(tinderUser); //{}

tinderUser.id = "123abc"
tinderUser.name = "Jinx"
tinderUser.isLoggedIn = false

console.log(tinderUser);
//{ id: '123abc', name: 'Jinx', isLoggedIn: false }


const regularUser = {
  email : "some@user.com",
  fullName : {
      userfullname :{
        firstName:"Bruce",
        lastName : "Wayne"
      }
  }
}

console.log(regularUser);
/*
{
  email: 'some@user.com',
  fullName: { userfullname: { firstName: 'Bruce', lastName: 'Wayne' } }
}
*/

console.log(regularUser.fullName);
//{ userfullname: { firstName: 'Bruce', lastName: 'Wayne' } }

console.log(regularUser.fullName.userfullname.lastName);
//Wayne


//to merge objects
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obje = {4:"a" , 5: "b"}

// Object.assign({}, obj1, obj2) creates a new object
const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Object.assign(obj1, obj2) would modify obj1 itself

const obj4 = {...obj1,...obj2,...obje}

console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'a', '5': 'b' }


//to access all the keys
console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn' ]

//to access all the values
console.log(Object.values(tinderUser));
// [ '123abc', 'Jinx', false ]

console.log(Object.entries(tinderUser));
/*
[ [ 'id', '123abc' ], [ 'name', 'Jinx' ], [ 'isLoggedIn', false ] ]
*/

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//true


//Object de-structure
const course = {
  courseName : "JavaScript",
  price : "999",
  courseInstructor : "Hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor); //Hitesh

//to de-structure the value and give it another variable name
const {courseInstructor : Instructor} = course

console.log(Instructor);
//Hitesh ---> Result will be same

