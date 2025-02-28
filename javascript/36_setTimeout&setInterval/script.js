/* :> The setTimeout treats the argument inside it as the js code.

          ** UNDERSTANDING setTimeout() 
*/


// setTimeout('console.log(true)');  // true

// setTimeout('hiii'); // error : hiii is not a fun.



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

setTimeout('console.log("Saurabh Mishra")', 1000);
  // if we wants the execution after 1 sec viz. 1000 millisecs.

setTimeout(` console.log("Hello") 
    console.log("I am Anurag"); `, 2000);
     // if we wants to execute multiple lines of js code in setTimeout then we use backtic.



            

               // Saving the timeout Id in a variable.
    
    const timer1 = setTimeout('console.log("Hi-1")' , 1000);   
    const timer2 = setTimeout('console.log("Hi-2")' , 2000);           
    const timer3 = setTimeout('console.log("Hi-3")' , 2000);     
    
    
    // to stop a scheduled setTimeout() from running.

    clearTimeout(timer3);  // stops to print 'Hii-3'.



                  

            // Using setTimeout() as a HOF by passing a function in it.
    

    const timer4 = setTimeout(a,3000);  //  here, we need only to pass the callback fun. name and need not to add parentheses after it for calling as the setTimeout() will call it itself .

    const timer5 = setTimeout(a , 4000, 'Namaste', 25, 'fgdfg' );  // we can even pass extra arguments in it but this is not done generally here. Also these arguments could be used in the 'a' function by the argument[index] keyword whose index starts from '0' just after the delay for ex. 'Namaste' has index '0' .  

    // these arguments seems to forming an array with index '0' just after the delay but are obj. originally.

    function a() {
        console.log('Hello World!');

        //  console.log(arguments[1]);  // to access the argument send in the setTimeout fun.
    }       
    