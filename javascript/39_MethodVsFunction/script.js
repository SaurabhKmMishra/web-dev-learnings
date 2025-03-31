
       // Every method is a function but it's vice-versa is not compulsory.


function add(a, b){
    return a+b;
}

// add above is a function with a,b as arguments and not a method. 


// Note :> when a function is kept in an object as it's properties in the form of key-value pair or by using new ES6 method.

// below we can see that the 'sub' is a method in the maths named object

const maths = {
    E: 2.718281828459045,

    sub : function (c, d){
        return c-d;
    },
    
    // New technique of 'Method' creation is a part of ES6 version.

    result(e,f,g){
        return e*f-g;
    },

    cube(num){
        return num ** 3;
    },

}

// we can also call this method like a function as :>

console.log("The difference is :> " + maths.sub(17,7));  //10

console.log("The result is :> " + maths.result(65,2,82));

console.log("The cube of 8 is :> " + maths.cube(8)); //512




const arr = [7,4,5];
arr.push(32);

// here 'array' arr is an object and 'push' is a method in it.
console.log(arr);

























