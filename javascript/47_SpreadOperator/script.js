                    // SPREAD OPERATOE(...) IN JS
    
    // The spread operator (...) in JavaScript is used to expand elements of an array, object, or iterable into individual elements. It was introduced in ES6 and is widely used in arrays, objects, and function arguments.
    
    /* other uses: 🔹 Copying an Array : It creates a shallow copy, preventing changes to the original array.

        🔹 Merging Arrays: It replaces concat() for better readability.

        🔹 Adding Elements to an Array: Easily insert elements anywhere in the array.

        🔹 Copying an Object: Creates a shallow copy of an object.

        🔹 Merging Objects: It simplifies merging objects instead of using Object.assign().

        🔹 Overriding Object Properties: Later properties override earlier ones.

        🔹 Passing an Array as Function Arguments: Avoids using apply().

    */

const nums1 = [1,2,3,4];
const nums2 = [5,6,7,8,9];

// Copying an array

const copiedArray = [...nums1];

// method to combine these two arrays above

const joinedArray = nums1.concat(nums2);

console.log(joinedArray);


// Another easies method to Merge two or more arrays using spread operator.

const joinedArray2 = [...nums1, ...nums2, 11, 12]; // we can further add more elem. to new array formed using spread oprtr. 

console.log(joinedArray2);
// o/p: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]


// we can also add strings in the array with their each characters spreaded using the spread operator.

const myName = 'Saurabh';

const joinedArray3 = [...nums1,...myName ]; 

console.log(joinedArray3);
// gives o/p :  [1, 2, 3, 4, 'S', 'a', 'u', 'r', 'a', 'b', 'h'];



// Using spread operator on objects to spread them.

const user = {
    name: 'Anurag',
    age: 25,
}

// const updatedUser = {...user};  // to shallow copy an obj.


const updatedUser = {...user, city:'Mumbai'};  // to add more propr. to the new obj.

console.log(updatedUser);




           // using spread operator during fun. call

function add(){
    let sum=0;
    for(let i=0; i<arguments.length; i++){
          sum+=arguments[i];
    }
     console.log(arguments);
    return sum;
}           


const arrElements = [1,2,3,4,5,6,7,8,9,10];

console.log("The total sum of the elements of the arrElements array are:> ", add(...arrElements));

// above, the all elements of the array are spreaded as arguments and are sent during the function call with the help of the spread operator.


