const message = 'hello';

console.log(message[3]);  // we also uses charAt(index) for that.

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
    
    // the concat(strings) adds up all of the strings passed in the argument to the existing string.
    // we can add multiple strings through this method.



            // 6. padStart(maxLength, ?fillString)

        // adds up a particular string many times before an string in a provided range.    

    const lastFourDigits =  '7856';     

    console.log(lastFourDigits.padStart(10, '*')); 

    console.log(lastFourDigits.padStart(8, '$'));
    

    // the maxLength refers to the total length of resulting string and the ?fillString asks about the filling string before the actual string.
    

               // 7. padEnd(maxLength, ?fillString)
        
        // adds up a particular string many times at the end of an string in a provided range.        
           
    console.log(lastFourDigits.padEnd(10, '*'));

    


                 // 8. charAt(index/posn.)

     // the above is a method to get the char at a specific index in a string.   
     
     
     console.log('I am Saurabh'.charAt(5));



                   // 9. charCodeAt(index);


    //  the charCodeAt() method is used to return the Unicode (or ASCII) value of a character at a specific index in a string. 

    // it takes the index '0' as argument it left blank.

    const nameOfMe = 'Saurabh is my name.';

    console.log(nameOfMe.charCodeAt(5));




                    // 10. split(separator,limit)
   

    //  the split() method is used to split a string into an array of substrings based on a specified separator.

    // both the separator and the limit are optional.

    // * separator (optional): The pattern or string used to determine where to split the string. This can be a single character, a substring, or a regular expression.

    // * limit (optional): A number that specifies the maximum number of splits to be performed.

    console.log(nameOfMe.split('a'));   // 'a' is separator.

    console.log(nameOfMe.split('a', 3));  // 3 is the limit of separation.


    //  It’s a useful tool when you want to break a string into parts, especially for parsing or processing text.

    // If the separator is an empty string (""), split() will break the string into an array of individual characters

    let word = "Hello";
    console.log(word.split(""));  // Output: ['H', 'e', 'l', 'l', 'o']

    // If the separator is not found in the string, the entire string will be returned as a single element in an array.

     console.log(word.split());   // o/p: ['Hello']





                     // Template Literals String(Backticks viz. (`) )


    // In JavaScript, backticks (`) are used to define template literals, which provide a more powerful way to work with strings compared to single (') or double (") quotes.

    //  Template literals allow you to interpolate variables, expressions, and functions within a string by using ${} syntax.


    const concatenatedString = "Last four digit of my a/c no. is ".concat(lastFourDigits);      // what we do with (' ') or ("")

    console.log(concatenatedString);


    const templateString = `Last four digit of my a/c no. is ${lastFourDigits}`;     // what we do using backtics(``) easily add variables of js to get their values.

    console.log(templateString);   

    const templateString_2 = `And my adhaar no. is ${lastFourDigits.padStart(16, 'X')}`;  // we can also use string methods.

    console.log(templateString_2); 


    const bankBalance = 987999999;
    const templateString_3 = `I have ₹${bankBalance} in my back account`;
    console.log(templateString_3);
     

    let multiline = `This is
    a string
    that spans multiple
    lines.`;


    // we can easily create multiline strings without needing to use special characters like \n.
    
    console.log(multiline);














