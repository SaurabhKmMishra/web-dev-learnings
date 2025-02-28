
/* comparison of all three types of var on basis of scope :>

  :> Global scope: var attaches to window, while let and const do not even if they are declared globally.

  :> Script scope (Modules): Created when variables created using let and const. None of them(variables) attach to window(none become property of window object), and they stay within the module.

  :> Block scope: let and const are block-scoped, while var is function-scoped. 

  :> Hoisting: var is hoisted with undefined, whereas let and const are hoisted but not initialized.  
  
  :> NOTE : We'll learn about block and module scope in next lesson.

*/

/* IMPORTANT:> Any function or variable created with 'var' are the properties of the window object and can be accessed using  window.fun_name or window.var_name

*/
 

/* Definition of Local and Global Scope in JavaScript

   1.> Global Scope : A global scope variable is declared outside any function or block and can be accessed from anywhere in the script.

   a.> In browsers, global variables declared with var become properties of the window object (window.globalVar).

   b.> let and const declared globally do not attach to window.

   2.>  Local Scope: A local scope variable is declared inside a function or block and is accessible only within that function/block.

    a.> In a local scope along with its variables their is created an obj. with this keyword which holds different values different times.

    b.> Function Scope (Local to a function) : var is not block-scoped but is function-scoped.
    
    c.> Block Scope (Local to a block) : let and const are block-scoped, meaning they only exist inside {}.

*/


/*  Purpose of this in the Scope Section of DevTools :> 
                   In the Sources tab of Chrome DevTools (or any modern browser's debugger), the Scope section helps developers inspect variables and their values at different levels of execution.

The presence of this in the Local scope section serves two main purposes:

1. Helps Identify the Execution Context
              The value of this changes depending on where and how a function is executed.
              By displaying this in the Scope section, DevTools helps developers quickly see which object this refers to at that point in execution.
              This is crucial for debugging, especially in cases where this can be tricky (e.g., inside event listeners, callbacks, arrow functions, etc.).


2. Makes Debugging Easier for Object-Oriented Code
              When working with objects, classes, or constructors, this should refer to the correct instance.
              If this is unexpectedly window or undefined, it indicates a scoping issue (e.g., a misplaced function call).
              Helps track this in nested functions, closures, and event handlers.

*/


debugger;
const userName = "Saurabh";  // script scoped
let userAge = 25;  // script scoped
var a=50;  // global scoped 


function add(){

    const x=5;  // local to this function scope as declared inside any function and not accessible from outside.

    const y=8;
    var new_term = "Flag";

    const userName='Akash'; // changed the value of the global var for this fun. locally

    console.log(x+y);

    console.log(userName);  // will print it's value as per any local change in it in the function containing it locally viz. 'Akash' and not 'Saurabh.

    // can be acccessible without any declaration in this fun. as it is a global variable in the script.

}


// console.log(x+y); // shows error as x and y both are block/local scoped and are not accessible outside the block of its function declaration.


add(); // when this function is called a local scope of it is created in the scope section which gets erased with the completetion of the function call. 



console.log(userName);  // "saurabh"

// console.log(new_term);  // undefined b/c it(variable) is not accessible as it is  functional scoped to the funtn add. 

console.log(window.userName); //undefined as username is not a window obj. property

console.log(window.a);  // gives 50 as var 'a' is a window obj. property 

console.log(window.add()); // gives 13 and userName value.

console.log('Program Ended');




