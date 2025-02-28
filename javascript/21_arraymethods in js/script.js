const evenNumbers = [0,2,4,6,8];

                     // use of shift()

        // shift() is reverse of pop() but it does so from the starting of  original array. And it returns the removed element.      

console.log('the removed element is :> ' + evenNumbers.shift());   // gives the first array element.   

console.log('the removed element is :> ' + evenNumbers.shift());  // gives the second array element.   

console.log('the removed element is :> ' + evenNumbers.shift());  // gives the third array element.  

console.log('the updated array is :> ');

console.log(evenNumbers);



                      // use of unshift()
        
         // unshift() is reverse of push() but it does so from the starting of original array. And it returns the updated array size.              

console.log('the updated size of array :> ' + evenNumbers.unshift(0,2));
console.log('and the updated array is :> ' + evenNumbers);         


                  // use of concat() in arrays
            
        // it gives a new array after adding both of the arrays.          

const arrFirst = [1, 2, 3];
const arrSecond = [4, 5, 6];    
const arrThird = ['Dog', 'Cat', 'Rat','Lion' ,'Tiger' ,'Squirrel' ];    


console.log('new array after concatination');
console.log(arrFirst.concat(arrSecond , arrThird));



                     // indexOf() in arrays 

        // returns the index of an element in array, if not present return -1. 
        // Also if, their are multiple same items in the array it returns  the index of the very first occuring one.          

console.log('the index of Rat in arrThird is :> ' + arrThird.indexOf('Rat'));       


                     // includes() in arrays

        // checks whether an elemnt is in an array or not?
        // return true/false as per result. 

const isIncluded = arrThird.includes('elephant')
console.log('is elephant present in arrThird? :> ' + isIncluded);


                      // reverse() in arrays
        // reverses the elements of the original array hence, changes the original array.
        
console.log(arrThird.reverse()); 

const oddInt = [1,3,5,7,9,11];

console.log('oddInt array after reverse oprtn. :>');
console.log(oddInt.reverse());


                       // sort() in arrays

        // sorts the original array by modifying it.

        // By default, sort() converts elements to strings, so numbers may not sort as expected without a compare function.          
                
console.log('The arrThird after sorting :> ');
console.log(arrThird.sort());

console.log('The oddInt after sorting :> ');
console.log(oddInt.sort());  // gives wrong o/p.



                       // slice(start_index , end_index) in arrays

        // used to extract a portion of an array into a new array without modifying the original array.


        /*
              Parameters:>

                1. start (optional):
                  
                >  The zero-based index at which to start extraction.
                >  If omitted, slicing starts from the beginning (0).
                >  If negative, it indicates an offset from the end of the array.
                  

                2. end (optional) :  

                >  The zero-based index before which to end extraction (exclusive).
                >  If omitted, slicing continues to the end of the array.
                >  If negative, it indicates an offset from the end of the array.

         */

const newArray = ['Ram', 'shyam', 'sita', 'geeta', 'radha-rani', 'krishna', 'govind'];                 

console.log(newArray.slice(3));    

console.log(newArray.slice(2,5));   // here index 5 is excluded.

console.log('newArray after slicing :> ');

console.log(newArray);

console.log('\n');    




                       // splice(start , deletecount, item1, item2, intem3) in arrays.

        // The splice() method in JavaScript is used to add, remove, or replace elements in an array.  
        
        // syntax :> array.splice(start, deleteCount, item1, item2, ...)
        
        /*  parameters: 
                  
               1.> start: The index at which to start modifying the array.       

                2. > deleteCount (optional):> The number of elements to remove from the array, starting from the start index.

                    :> If 0 or omitted, no elements are removed.
                
                3. > item1, item2, ... (optional):> The elements to add to the array starting at the start index.
                
                    :>If no items are provided, splice() only removes elements.    
        */

    // 1. Removing All Elements from a Specific Index:

const removed1 = newArray.splice(5)

console.log("firstly removed element's array are :> ");
console.log(removed1);

console.log('newArray after splicing :> ');
console.log(newArray);

    // 2. Removing Elements:

const removed2 = newArray.splice(1,2)  // remove from index 1 and remove two elements in row.

console.log("secondly removed element's array are :> ");
console.log(removed2);

console.log('newArray after splicing :> ');
console.log(newArray);

    // 3. Adding Elements

newArray.splice(0,0,"priya-lal");   // only adding at index 1 and no removing. 

console.log('newArray after adding element :> ');
console.log(newArray);

    // 4. Replacing Elements

const removed3 = newArray.splice(1,2,'priya-preetam','shree-shree',1008);
// remove 2 elements from index 1 and add items given.
console.log("thirdly removed element's array are :> ");
console.log(removed3);

console.log('newArray after splicing :> ');
console.log(newArray);

     // 5. Using Negative Indices

console.log('');
const oneArray = ['aa','bb','cc','dd','ee'];

const removed4 = oneArray.splice(-2, 3); // Removes 3 elements, starting 2 from the end.

console.log("newly removed element array is :> ");
console.log(removed4);

console.log('oneArray after splicing :> ');
console.log(oneArray);

        // ***NOTE :> BOTH slice() AND splice() RETURNS A NEW ARRAY FOR THEIR OUTPUTS BUT THE slice() METHOD DOES'T MAKES ANY CHANGE IN THE ACTUAL ARRAY WHEREAS THE splice() does so.               


                       