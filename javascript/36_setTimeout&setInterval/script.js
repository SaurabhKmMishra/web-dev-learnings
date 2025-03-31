/* :> The setTimeout treats the argument inside it as the js code if passed as a string.

          ** UNDERSTANDING setTimeout() 
*/


// setTimeout('console.log(true)');  // true as console.log(true) is passed as a string in setTimeout which will implicitly convert the string into executable JavaScript, which is bad practice (security risks, performance issues).


// setTimeout('hiii');  // error, Since setTimeout expects either a function or a string of executable JavaScript, it tries to evaluate 'hiii' as JavaScript. This will cause a ReferenceError : hiii is not defined.



/* 
   (1). setTimeout() is a JavaScript function that executes a function after a specified delay (in milliseconds). It is commonly used for asynchronous programming, delays, and animations. 

   :> Basic Syntax : setTimeout(function_name, delay);

    function → The function to be executed after the delay.
    delay → The time (in milliseconds) before the function runs.

    :> The setTimeout() returns a unique identifier (timeout ID), which can be used to cancel the timeout using clearTimeout().

    (2). clearTimeout() :> clearTimeout() is a JavaScript function that cancels a previously scheduled setTimeout() before it executes.
      
    :> Sytax :- clearTimeout(timeoutID);

    timeoutID → The unique ID returned by setTimeout(), which needs to be canceled.

    :> 📌 Key Takeaways
        ✅ clearTimeout() stops a scheduled setTimeout() from running
        ✅ You must store the setTimeout() return value to cancel it
        ✅ It only works before the timeout executes

    
*/


            //  passing a string in the setTimeout(). 

            /* In JavaScript, setTimeout() can accept a string, which it evaluates using eval(), but this is bad practice because:
                           a. It's slower than passing a function.
                           b. It introduces security risks if the string contains untrusted code.  

                :> setTimeout expects either a function or a string of executable JavaScript  */

setTimeout('console.log("Saurabh Mishra")', 1000);
  // if we wants the execution after 1 sec viz. 1000 millisecs.

setTimeout(` console.log("Hello") 
    console.log("I am Anurag"); `, 2000);
     // if we wants to execute multiple lines of js code in setTimeout then we use backtic.



              
            // what if we don't send js code as string.


        setTimeout(console.log('Jai Siya-Ram') , 5000);  // runs instantly in the very beginning.

            /* :> console.log('Jai Siya-Ram') is executed immediately before setTimeout even runs.

               :>  Since console.log doesn’t return a function, setTimeout receives undefined, 
                leading to an error or no delayed execution.
                       
            */
        
            

            // Saving the timeout Id in a variable.
    
    const timer1 = setTimeout('console.log("Hi-1")' , 1000);   
    const timer2 = setTimeout('console.log("Hi-2")' , 2000);           
    const timer3 = setTimeout('console.log("Hi-3")' , 2000);     
    
    


            // using clearTimeout(timeout id) to stop a scheduled setTimeout() from running.

    clearTimeout(timer3);  // stops to print 'Hii-3'.



                  

            // Using setTimeout() as a HOF by passing a function in it.
    

    const timer4 = setTimeout(a,3000);  //  here, we need only to pass the callback fun. name and need not to add parentheses after it for calling as the setTimeout() will call it itself and in this ex. 'a' is the callback fun.

    // const timer5 = setTimeout(a , 4000, 'Namaste', 25, 'fgdfg' );
      // we can even pass extra arguments in it but this is not done generally here. Also these arguments could be used in the 'a' function by the argument[index] keyword whose index starts from '0' just after the delay for ex. 'Namaste' has index '0' .  

    // these arguments seems to forming an array with index '0' just after the delay but are obj. originally.

    function a() {
        console.log('Hello World! I am a() function.');

        //  console.log(arguments[1]);  // to access the argument send in the setTimeout fun.
    }       




            // IMPORTANT interview questn. which of below will run first 

        console.log('Will i run first (without setTimeout) ? ');  //runs first because it is synchronous code.
        
        setTimeout(`console.log(" Or will i run first (with setTimeout) ? ")`, 0); //runs after the above because it is asynchronous code.







        /*      Use of setInterval() in js 
        
        :> setInterval() is a built-in JavaScript function that repeatedly executes a function at a fixed time interval until it is stopped.
        
        :> syntax : setInterval(callback, delay, ...args);
           
           > callback → The function to execute repeatedly.
           > delay → The time (in milliseconds) between executions.
           > ...args → Optional parameters to pass to the callback function.

        :> Must use clearInterval() to stop.   

*/  
        
                // Passing string in setInterval()

    const timer6 = setInterval('console.log("String in Setinterval")' , 3000); 
        
    clearInterval(timer6);
           





                // passing function in setInterval()  to make it work like a HOF


    const timer7 = setInterval( b, 4000, 'cjd', 65, 'ddffo', 10);

    function b() {
        console.log('Hello World! I am b() function.');

        // console.log(arguments[3]);  // to access the argument send in the setInterval fun.
    }   

    clearInterval(timer7);  
    


                // Passing anonymous function

    const timer8 = setInterval( function (){
        debugger;
        console.log("i am a anonymous fun. in setInterval")
    }, 5000);       
    
    clearInterval(timer8);  
    


                