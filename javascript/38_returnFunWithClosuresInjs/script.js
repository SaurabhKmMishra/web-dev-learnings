/* Definition of Closure in JavaScript

   :> A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing.

   :> It is created when a function is defined inside another function and retains access to the outer function’s variables. 
   
   IMP:> Also, only those variables are kept into the closure which are being used in the nested fun. further. else are not in the closure. */

// here parnt is a higher order fun. as it is returning a function.

function outer(){
    
    const a = 4;
    const c = 25;  
    
    function parnt() {
        const b = 6;
        function add() {
            console.log(a+b); // here add has access to the outer fun. variable viz. a because the fun. add is inside the fun. outer and the closure of outer fun. is containing the variable 'a' in it to be accessed by add.
        }
    
        return add;
    }
    return parnt();
}



const add1 = outer();

console.dir(add1);