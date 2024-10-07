const message = 'hello';

console.log(message[3]);

// console.log("I am saurabh and i belongs to Bharat" [8])
                      // the above is a method to get the char at a specific index in a string.


                      
                  // Property of a string


console.log("the length of the message string is -> " + message.length);



                  // Methods of string without arguments.

                  
            // 1. toupperCase() / toLowercase

const capitalMessage = message.toUpperCase();
console.log(capitalMessage);

        
                // 2. trim() / trimStart() /trimEnd()

const faltuMessage = "    How are you doing today?  ";
console.log(faltuMessage);
const finalMessage = faltuMessage.trim().toUpperCase();  //chaining in js

// chaining in JavaScript refers to the practice of calling multiple methods on the same object consecutively in a single statement their could be n-number of consecutive methods.

console.log(finalMessage);

console.log(faltuMessage.trimStart());

                 

             // Methods of string with arguments.

         
             // 1. includes(searchstring);   

    console.log(faltuMessage.includes("you"));     // this line checks whether a string "you" is present in the string or not?

            

             // 2. indexOf(searchstring); 
    
    console.log(faltuMessage.indexOf("Sahil"));    // this line checks the index of the substring entered  and provides the index of the very first character of that substring and if not present return -1 in result.
    
    
              // 3. replace(searchValue, replaceValue);

    console.log(" The faltuMessage value after replacing doing by living -> " + faltuMessage.replace("doing", "living")); 

     const sky_var = "It is blue but It is black actually.";
     console.log(sky_var);

     console.log(sky_var.replace("It", "Sky")); // only the first "It" is replaced by "Sky" but not the one after that.
    
    // the replace(argms) replaces only a single and very first matching substring from the beginning.
    // in case we passed a non-matching substring then their will be no replacement.



              //4. replaceAll(searchValue, replaceValue);

    console.log(sky_var.replaceAll('It',"Sky"));
    
    // the replaceAll(argms) replaces all of the matching substrings from the actual string.


             //5. concat(...strings);
    const pogo = "I am here."
    console.log(message.concat(" ", sky_var, " " , pogo ," thank You" )); 
    
    // the concat(...strings) adds up all of the strings passed in the argument to the existing string.
    // we can add multiple strings through this method.


            //padStart()
    






































