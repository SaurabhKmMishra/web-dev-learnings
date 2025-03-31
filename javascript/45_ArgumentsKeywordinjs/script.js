        // arguments object in js
        
    /*
        :> The arguments object is an array-like object available inside regular functions (not in arrow functions). It contains all the arguments passed to a function.

        :> It is like array but is not an array actually.

        1️⃣ Key Features of arguments :>

        ✔ Works only in regular functions (not in arrow functions).

        ✔ Stores all passed arguments in an array-like format (indexed like an array but lacks array methods like map(), forEach(), etc.)

        ✔ Length property (arguments.length) helps count arguments.

        ✔ Can be accessed using an index (arguments[0], arguments[1], etc.).
    
    */    




function add(a,b){
     console.log(arguments[0]);
     console.log(arguments[1]);
     console.log(arguments[2]);
     return a+b;
}

console.log("The resultant sum from fun. add(a,b) is : ", add(2,9,7));




   // arguments.length property in js can be used to loop or iterate over the respective arguments.As, they start from 0 indexing like as arrays.              



// write a fun. which returns the argument sum of all the arguments passed in it.

 const argumentSum = function (){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log("The sum of arguments is : ", argumentSum(120,50,6));


// ***iMPORTANT POINT: ALWAYS REMEMBER THAT THIS ARGUMENT KEYWORD IS NOT USABLE WITH THE ARROW FUNCTIONS.

// it throws error: arguments is not defined for the code below.

// since, this parameter keyword is an older method and as of now we uses rest parameters(...) for this purpose under ES6 version.

/*

const exp = (a,b) => {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
};

console.log(exp(4,2));

*/
     



                // convert the arguments into array type and then add it's all elements by using reduce() method.

// we can use a method viz. Array.from(arguments) to convert the arguments into an array.

function convrToArray(){
    let formedArray = Array.from(arguments);
    return formedArray;
}              

const newArray = convrToArray(5,4,-9,7,3);

console.log("the new array formed from the parameters :> ", newArray);

const elemSum = newArray.reduce((acc,currVal) => {
       return acc + currVal;
});

console.log("The resultant sum of the elements of the array i.e, created by the parameters of the fun. convrToArray is :> ", elemSum);


// Converting arguments to an Array using Spread Operator

 /* ✔ Why use spread (...arguments)?

    :> arguments is not a real array, so methods like reduce() don’t work directly.

    :> Spreading arguments ([...arguments]) converts it into an actual array.

 */

    function sum() {
        let argsArray = [...arguments]; // Convert arguments object to array
        return argsArray.reduce((acc, num) => acc + num, 0);
    }
    
    console.log(sum(10, 20, 30, 40)); 
    // Output: 100
    


