console.log( (5<7) && (8>4) );

const orResult = 0||2;  // o/p: 2

const andResult2 = "" && "Hello";  // o/p: ""
const orResult2 = "" || "Hello";   // o/p: "Hello"


const andResult3 = "Hello" && null;  // o/p: null
const orResult3 = "Hello" || null;   // o/p: "Hello"


const andResult5 = "Hello" && console.log("hello1");
console.log(andResult5); 
 // o/p : undefined, The left-hand side of the && is the string "Hello". Strings are truthy, so the && operator proceeds to evaluate the right-hand operand.  

  // console.log("hello") prints "hello" to the console but returns undefined. Since "Hello" is truthy, the value of the expression is the result of the right-hand operand (console.log("hello")), which is undefined.


const orResult5 = undefined || console.log("hello2");
console.log(orResult5);

 // o/p : undefined, The left-hand side of the || is undefined viz. a falsy value. So the || operator proceeds to evaluate the right-hand operand.  
 
 // console.log("hello") prints "hello" to the console but returns undefined. Since, both of the sides results in undefined so it is stored in the variable.


 console.log(!null);  // logical not inverts a truthy value to a falsy value and vice-versa.

 console.log(!!NaN);



