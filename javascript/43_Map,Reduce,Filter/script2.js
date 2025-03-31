            
                    // 3. reduce() in js

    // The reduce() method reduces an array to a single value by executing a function on each element and accumulating the result. 
    
    
    /*
      :>  array.reduce((accumulator, currentValue, index, array) => {
             // Return the updated accumulator
        }, initialValue);

    :> where, accumulator: Stores the result of previous iterations.
           currentValue: The current element being processed.
           index (optional): The index of the current element.
           array (optional): The original array.
           initialValue (optional): The starting value for accumulation (default is first array element).
    
*/

const nums = [1,1,2,1,1,1];

console.log("\n");

console.log("output without initial value :-");

nums.reduce((acc,curr,index) => {
    console.log(`On index ${index} the current value is: ${curr}`);
});

// gives in o/p : 1 2 1 1 1 and not prints the very first element of the array b/c it is stored in the accumulator which takes the first element in it as a default value.

// also, the currentValue takes the 2nd array element if their is no initial value present that's why it's index is foud to be starting from '1'.

// else, it takes the very first array element if the initial value for the accumulator is present.for ex: 

console.log("\n");
console.log("output with initial value :-");

nums.reduce((acc,curr,index) => {
    console.log(`On index ${index} the current value is: ${curr}`);
},40);

// here, '40' is the value of the accumulator which can be anything as per programmer.

// And so the indexing of the current element starts from '0' as the acc is already iitialized with 40.


const nums2 = [1,2,3];

console.log("\n");

const result = nums2.reduce((acc,curr) => {
    console.log(acc,curr);
    

    return acc + curr;
},40);

console.log(`the final value of the accumulator is: ${result}`);
 // so, the result is the final returned value by the reduce() viz. the updated value of the accumulator. 

