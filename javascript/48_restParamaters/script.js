                    // Rest parameters

    // Before ES6, arguments was used to handle variable parameters, but it's not an actual array. Rest parameters solve this issue.

    // Rest parameters allow a function to accept an indefinite number of arguments as an array. It is represented using the spread syntax (...) and was introduced in ES6.
    
    /* ✅ Rest parameters (...args) are preferred over arguments because:

        > They are actual arrays, so array methods (map, filter, reduce, etc.) can be used directly.

        > arguments includes all parameters, while rest parameters can exclude specific ones. 
    
    */



                    
                     // 1. Collecting Multiple Arguments 


function add(...nums){ 
    // here, rest params used to combine all individual arguments into an array.

    let sum=0;
    console.log("The argument array found using rest perems is : ",nums); 
    // prints the arr. viz. containing all the elements passed as arguments.

    for(let i=0; i<nums.length; i++){
          sum+=nums[i];
    }
    return sum;
}    

const num_arr = [3,5,9];

const sum_result = add(...num_arr); // here, spread oprtr used to sent each array element by spreading the array during fun. call.

console.log("the sum is :",sum_result);




                // Adding arguments using reduce & rest param 

    function toAdd(...nums1){
        return nums1.reduce((acc,curr) => acc+curr);
        
    }   

              // Adding arguments using reduce & spread oprtr 
    
    /* 

    function toAdd(){

        return [...arguments].reduce((acc,curr) => acc+curr);
        
        // by using spread operator on arguments
    }

    */

    
    console.log("The sum of args. of fun. call toAdd(55,41,70,30,20) with reduce :",toAdd(55,41,70,30,20));






                    // 2. Mixing Normal & Rest Parameters

    /* ✔ Rules: The rest parameter must be the last parameter in the function definition because it collects all remaining arguments into an array.


    > If it were placed before other parameters, the function would not be able to determine where to stop collecting arguments for the rest parameter.
    
    */

function newFun(a,b,c,...extraNums){
       console.log("a,b,c are: ",a,b,c);
       console.log("The rest param viz. extraNums",extraNums);
    
}

newFun(2,5); // here, 'c' gots to be undefined and the extraNums arr is empty.

newFun(87,45,36,21,6,14);  // a,b,c are: 87,45,36 while the rest are in extraNums array.

// in the above fun. if we do not give the any values




                      
                     


                    



