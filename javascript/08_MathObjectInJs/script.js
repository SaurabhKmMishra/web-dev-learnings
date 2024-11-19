                          // exponentiation operator

             console.log(3 ** 4);    // o/p-> 81      
    


                       // Method of using Math.sqrt(argm)

        console.log(Math.sqrt(16.03256));  // We can also use float value numbers.




                             // Math.floor(x)
        
       console.log(Math.floor(29.99));  // o/p: 29
       
              // returns only the floor value neglecting the part after the decimal.
        
        console.log(Math.floor(12.9999999999999999));      
            
              // but if we go till lets say 14 digits or more with only '9' after decimal it will show next round off integer as a result. 

        console.log(Math.floor(-2.5));    // o/p: -3
        



                             // Math.ceil(x) 

                // Math.ceil() is a function that rounds a number up to the nearest integer, regardless of the decimal value.             
        
        console.log(Math.ceil(25.15));    // o/p: 26                 

        console.log(Math.ceil(-4.99));    // o/p: -4




                              // Math.round(x)

                /* > Math.round() is a function that rounds a number to the nearest integer. 
                If the fractional part of the number is 0.5 or greater, 
                it rounds up to the next whole number. Otherwise, it rounds down.
                
                > it just rounds up and has nothing to do with floor or ceiling values.*/


        console.log(Math.round(25.5));    // 26     
        
        console.log(Math.round(-0.4))   // -0   

        console.log(Math.round(-0.5));  // -1  

        console.log(Math.round(-23.7));  // -24  






                             // Math.random()  
            
                   
         /*     > Math.random() is a function that generates a pseudo-random floating-point
             number between 0 (inclusive) and 1 (exclusive). 
             
              IMP. > Use cases:
                              Generating random numbers for games.
                              Simulating randomness in algorithms.
                              Creating unique identifiers or tokens.         */
            
        
        console.log(Math.random());    

             /* > It is commonly used for generating random numbers,
              but since it returns a value between 0 and 1, it often needs to 
              be scaled or adjusted for specific ranges.  */


         //  Random integer between 0 and 20 (exclusive):     

        console.log(Math.floor(Math.random()*20 ));   
        
        // Random integer between two values, min and max (inclusive):     Math.floor(Math.random() * (max - min + 1)) + min;

        // // Random integer between two values, 5 and 15 (inclusive):

        console.log(Math.floor( Math.random()*(15-5+1)) + 5);   // or Math.floor( Math.random()*(11) + 5 );
        
        
      
           const width = +prompt("Enter the width of rectangle : ");
               // method of conversion of a number in string to an actual number.

           const length = +prompt("Enter the length of rectangle : ");

      //      console.log("The area of the rectangle is : " + (width + prompt));


            // method to display o/p on web and not in console.

            document.write(`the resulting area of rectangle is ${width*length}`);

                                