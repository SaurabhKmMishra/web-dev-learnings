// Default parameters allow you to set a default value for function parameters if no value is passed (or if undefined is passed).

// ✅ If an argument is not provided, the default value is used.

// Only undefined triggers/is replaced by the default parameter rest all falsy values are consider as '0'.

// Default parameters were introduced in ES6 (ECMAScript 2015) to allow function parameters to have default values if no argument is provided or if undefined is passed.

    // Using the if statement in the replacement when their was no default parameter concept.

/*
function multiply(a, b){
    if(b===undefined){
        b=1;
    }
    return a*b;
}
*/

function multiply(a, b=1){
    return a*b;
}

// above b=1 is a default parameter and it will be used if their is no argument in the calling fun. present or if it has a value of undefined. 

console.log(multiply(4));  // 4 as b=1 default parameter is used.

console.log(multiply(3,undefined)); // 3 as b=1 default parameter overrides unddefined.

console.log(multiply(2,""));  // "" (empty string) is converted to 0.

console.log(multiply(5,"2"));  // here b is "2", JavaScript would convert it to 2 (5 * 2 = 10).

console.log(multiply(12,null)); // JavaScript treats null as 0 in numeric operations and ans is '0'.

console.log(multiply(4,true)); // 4 as true is considered as 1.

console.log(multiply(4,false)); // 0 as false is considered as 0.





// A dice containing 6 sides num from 0 to 6 by default and can contain any number of sides as the val of argument.

// and it can even return random o/p accordingly.


function rollADie(numOfSides = 6){
    return Math.floor(Math.random()*numOfSides + 1);
}

console.log(rollADie(9)); // val b/w '1' to '9' is generated.





