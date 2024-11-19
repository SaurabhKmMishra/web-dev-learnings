const userAge1 = 18;
const userAge2 = 20;
const userAge3 = '20';


                    // 1.  equal to(==) operator.
      
      console.log( userAge1 == userAge2);  //false

      console.log( userAge2 == userAge3); 

      // true b/c internally it converts the string value to a number implicitly and then compares. 

      // If the types of the operands are different, JavaScript attempts to convert one or both operands to a common type before making the comparison.



                     // 2. strict equality(===)
        
        console.log(userAge2 === userAge3);   // false b/c This operator checks for both value and type equality.
        
        // No type coercion / implicit conversion occurs, so both operands must be of the same type and same value for the comparison to return true.

        // below are some method to convert explicitly from string to number
        console.log(+userAge3 === userAge2); // true as string is convr. and both are number values now.

        console.log( parseInt(userAge3) === userAge2 ); // true as string is convr. and both are number values now.



                      //3. Not equal (!=)   // invertion to equal to(==) 
        
        console.log(userAge1 != userAge2); // true as both are not equal to each other.             

        console.log(userAge2 != userAge3);  // false as both are equal when the string convr. to num implicitly.



                        //4. Not equal type strict (!==)
        
        console.log(userAge2 !== userAge3);   // true as both are not equal to each other b/cs no implicit convr. taking place here.              
        

                         // 5. greater than (>)

        console.log(userAge2 > userAge1);   // true      
        
        console.log( userAge3 > userAge1);   // true as both are equal when the string convr. to num implicitly.



                          // 6. less than (<)

        console.log(userAge2 < userAge1);   // false    
        

        
                          // 7. greater than or equal to (>=)
        
        console.log(userAge2 >= userAge1); // true



                          // 8. less than or equal to (<=)

        console.log(userAge2 <= userAge1);  // false