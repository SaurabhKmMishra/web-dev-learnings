  // **NOTE :> We can define function in two ways : function declaration and function expression or Anonymous function. 
   
   
                                      // 1. function definition.
                                     
                               // :>> below is function definition through 'Function Declaration'.                      
                                  
//  debugger;

function introduceMe(username = 'Procodrr' ,work ,age ) { 

    // here username is an parameter of the function.

    // here 'Procodrr' is default parameter value i.e, used in case their is no argument passed. This feature came with ES6 version in 2015.
    // before that we have to use :
          /*
            if(username === undefined){
                 username = 'Procodrr';
               }
                   // OR
            if(!username){
                 username = 'Procodrr';
               }       
          */ 

    console.log('Hii, ');
    console.log(`My name is ${username}.`);

    // console.log(`My name is ${username || 'Procodrr'}.`);

      // we can also write above line by replacing the assigned value to parameter in fn. above.

    console.log(`I am a ${work || 'Student'}.`);  

    console.log(`I am ${age || 'unknown'} years old.`);

    // return value
    return 'skm';

}

// whatever is used during fuction call is an argument and that on the actual function definition is called as parameter.

                // function call.

// *****NOTE -> During the function call whatever type of argument we passes the same is considered as the type for the parameter of the fn.

const returnValue = introduceMe('Ankit' , 'Mechanical Engineer', 24);  
//'Ankit' , 'ME' are arguments.

const returnValue2 = introduceMe('Saurabh Mishra' , 'Web Developer', 21);

const returnValue3 = introduceMe();
// will save by default 'Procodrr' value in the parameter as their is no passed argument.





                                               // 2.Another method for function creation.

                       // :>> below is function definition through 'Function Expression'.                    

// sayRam();     // throws error as not possible to access before declaration like the fns. above as it created with const/let as variable hence the hoisting of it is not possible.

const sayRam = function (){  // ** NOTE :> here giving fn. name is optional as sayRam is considered.
          console.log("Ram-Ram");
}      

sayRam();  // easily accessible as the line of declaration is achieved.



//sayRadha();   // TypeError: sayRadha is not a function; is the error as we are trying to call an undefined value as a function.

 // is hoisted with undefined in global execution context as it is treated as a variable not fn. so it can't be called before it's declaration line like fns.

var sayRadha = function (){    // ** NOTE :> if we form the function like this without naming it , then it is called as an 'ANONYMOUS' function. But after forming the anonymous function we are storing it in an variable so the function gets a name. 

// also here we are able to store the fun. in a variable just because the function is itself an object behind the scenes yet it prints 'function' when checked for typeof.  
  
     console.log("Radha-Radha");
}

sayRadha();  // easily accessible as the line of declaration is achieved.





                  // Assigning function to an obj. and accessing as object key-value pairs.

console.log('\n');

function sayHi (){
  console.log('hiiiiiiiiiiiiiiiiiiiii');
}


const x = sayHi;  

x.title = "helloPrintingFunction";  // will be updated in the fun. viz. originally an object.

// we can also add a key-value pair to the fun. as it is an obj. in behind.

console.dir(x); 

