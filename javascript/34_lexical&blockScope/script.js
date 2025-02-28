
/*
   IMP. NOTE :> If we do not uses any of let,const or var and create a variable then that variable becomes the property of the global/window obj. and gets to be even accessible by ( window.varName ).

  🔴 Problem: The variable is now attached to the window object, making it globally accessible even though it was declared inside a function.

  'use strict' is used to avoid this and it hence gives a refrence error for such situations. 
  
*/

'use strict'

/*
alt = 24;  
console.log(alt);
console.log(window.alt); */

const userName = "Saurabh";  
let userAge = 25;  
var a=50;  




/*

(1.) Lexical Scope (Static Scope)

Definition : > Lexical scope means that a function’s scope is determined by where it is defined, not where it is called.

Functions inherit variables from their outer (parent) scope.
Also called static scope because it’s determined at compile time.

when a function finishes execution, its local variables are removed from memory.
However, if an inner function (closure) is returned, it preserves its lexical scope even after the outer function has finished execution.

✔ Closures happen when an inner function retains access to the variables of its outer function, even after the outer function has executed.
✔ This works because of lexical scope, where JavaScript remembers variables based on where they were defined, not where they are called.

Example of Lexical Scope: */

function outer() {
    let a = 10; // Parent scope

    function inner() {
        console.log(a); // ✅ Inner function can access `a`
    }

    inner();
}

outer(); // Output: 10

console.log(a); // ❌ ReferenceError: a is not defined

/*

Key Points:

✅ The inner function has access to a because it's inside outer. 

❌ a is not accessible outside outer().

🔹 This is how closures work—functions retain access to their lexical scope even after execution where JavaScript remembers variables based on where they were defined, not where they are called. 

*/



/*

:> Block Scope :> Block scope means a variable is only accessible inside the block {} where it is defined.

:> Applies to let and const (but not var).

:> A block is anything inside {} like loops, conditionals, or functions.

*/



function subtract(){
   
    // debugger; 
    const x=15;  
    const y=18;
    const z=28;

    console.log(x-y);
    console.log(userName);  

    function child(){   // in local scope in devtools as defined in a function 
        const childName = 'Golu';

        console.log(childName);
        console.log(z);  // usable due to closure (subtract)

        {
            let num1 = 78;
            var num2 = 43;
            console.log(num1);
            console.log(num2);


        }

        console.log(num2);  // accessible as var created variables are function scoped and not block scope like let and const.


        function grandChild(){
            const grandChildName = 'Molu';
            console.log(grandChildName);

            console.log(x);  // in closure(subtract) viz. A closure allows a function to access variables from its parent function even after the parent function has finished executing.
        }

        grandChild();

        // console.log(grandChildName);  // not accessible as the outer fun. can't have access to the elements of the inner one.

    }

    child(); // child function can be only seen in dev tools when it is called like this and not when only defined and not called.

}

// add();
subtract();

console.log('Program Ended');
