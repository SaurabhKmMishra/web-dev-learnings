        // use of console.dir() is that it directly prints any non-object as it is whereas, it prints those in the key-value pair form who are actually objects behind the scenes like as functions when printed using clg prints the whole fun. code but when with console.dir(fun) its actual form of obj. is seen. 


function a(b){
    console.log(typeof(b));
    console.dir(b);
}

a('Hiii');  

a({username:'anurag' , userage :50});

a([1,2,3,4]);

// Note :> 1. An array is an object behind the scenes and also the function is an object but it gives 'function' as value when printed typeof.

console.dir('Hiikldjh'); 
console.dir(4959675);
console.dir(a);

// we can also add a key-value pair to the fun. as it is an obj. in behind.
a.age = 87;






                    // ** Higher Order Function :> passing a fun. in a fun.
                    

 /* Higher order functions (HOFs) in JavaScript are functions that either take other functions as arguments or return a function as a result. They are a key aspect of functional programming, allowing you to create more flexible and reusable code.
 
 :> A callback function is a function that is passed as an argument to another function(HOF) and is executed/called later inside that function(Higher order fun). */


console.log('\n');

function c(d){      
    console.dir(d);
    d(); // callback of the argument function by the higher order function.
}

c(sayHi);  // here 'c' is a higher order function now as it contains a function as argument and this argument function viz. 'sayHii' here is known as 'callback' function.

// c('eddiuedh');    // throws error as only fun. could be passed as arguments for the higher order function.

function sayHi (){
    console.log('hiiiiiiiiiiiiiiiiiiiii');
}

// passing an anonymous function as callback in a higher order function
c( function (){
    console.log('I am Sanatani');
});





