 //We can create a function Expression using Arrow Functions.

 //Arrow functions (=>) are a concise way to write functions in JavaScript. They were introduced in ES6 (ECMAScript 2015) and provide a more readable syntax with some unique behaviors.


 // 1. Function declaration
/*
function square(num){
     return num*num;
} */


 // 2. Function expression

 /*
const square = function(num){
      return num*num;
 } */

       // arrow function expression

// implicit return in an arroe fun. is done when we don't needs any return keyword whereas, the explicit return needs to have one.       

const square = num => num*num;  // implicit return

console.log('The square of 4 is ' + square(4));

// For single parameter their is no need to add parentheses for the fun. parameter.


       // more ways to use arrow fun.

const diffn = (a,b) => a-b;

console.log("The diff. of 8 and 3 is " + diffn(8,3));

       // explicit return example

const add = (a,b) => {
    return a+b;
}       
console.log("The sum of 4 and 3 is " + add(4,3));


        // arrow fun. use with setTimeout()

setTimeout(() => {
    console.log("Hii (got printed after 2 sec)");
}, 2000);        


        // in case we don't have an argument then we needs to have an empty parentheses.

const random = () =>  Math.floor(Math.random()*10)+1;

console.log("A random num is " + random());