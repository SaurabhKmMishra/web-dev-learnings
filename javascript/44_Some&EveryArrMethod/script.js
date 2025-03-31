             // 1. some() method in js
    /*

    :> The some() method checks if at least one element in an array satisfies a given condition. It returns true if at least one element passes the test; otherwise, it returns false.
    
    :> Syntax : array.some(callback(element, index, array), thisArg);

    where, thisArg (optional): Value to use as 'this' inside 'callback'.

    :> 🎯 When to Use some()?
           ✅ Checking if at least one element meets a condition.
           ✅ Checking if an array contains a specific value.
           ✅ Checking if a form has errors.

    */      

const numbers = [10,2,4,3,6,8];

const notTotalEven = numbers.some((num,i) => {
    // console.log(num);
    if(num%2 === 1){  // to print the very first odd index
        console.log(i);
    }    
    return num%2 === 1;
}); 

// here,true is returned as soon as the condition is satisfied for a single element the control is shifted out of loop.

console.log(`The numbers array is containing atleast one odd num in it! :- ${notTotalEven}`); 








                   // 2. every() Method in js
    /*

    :> The every() method checks if all elements in an array satisfy a given condition.

    :> array.every(callback(element, index, array), thisArg);
    


    ✅ If all elements pass the test → Returns true
    ❌ If at least one element fails → Returns false
    🚀 Stops checking as soon as it finds a false condition (short-circuiting).  
    ✅ Checking if all values in an array meet a condition.
    
    */

const ages = [27,65,32,22,18,31];

const allAdults = ages.every((age) => {
    return age>=18;
});

console.log(`All people of ages arr are adults or not? : ${allAdults}`);
