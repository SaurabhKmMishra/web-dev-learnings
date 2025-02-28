                 // Fun to know but not recommended
    // ** CAN WE STORE key:value PAIRS IN ARRAYS?  :> OH,YES
    
    const funExp = [];
    funExp.creatorName = 'Radhe-Krishna';
    funExp.relation = 'everything of mine';

    
console.log('funExp array :> ');
console.log(funExp);

    //but, the length of the array will be still 0 as it didn't received the type of data it demands.
    // Since, it is an object that's why it stored key-value pairs.

    console.log('the length of funExp array with key-value pairs is :> ' + funExp.length);




                // Working with Arrays




console.log(typeof {}); // return object

console.log(typeof []);  // Since arrays are technically objects in JavaScript, typeof will return "object"

console.log(typeof [].concat);  //Functions are a special type of object, and typeof will return "function".

const fruitsCollection = ['Apple', 'Banana', 'Grapes', 'Dates'];




                // to change the array element of a particular index

fruitsCollection[3] = 'papaya';


                // to get the actual length of an array at a time.

console.log(fruitsCollection.length);





                // to add an element at a particular index.

fruitsCollection[4] = 'Guava';

console.log(fruitsCollection.length);





                // to add an element always at the end of the array.

fruitsCollection[fruitsCollection.length] = 'item A';  // as the last index is always 1 less than it's length.

// to add an element always at the end of the array using array methods() i.e, array.push(item) which returns the length of the array after updation.
fruitsCollection.push('item B',88,'sdk');  // we can either add one or multiple values through push.

console.log('updated fruitsCollection array :> ');
console.log(fruitsCollection);




                // we can store all primitive datatypes in an array as well as another array and even objects which could even be nested.

const fruitsCollection2 = ['Apple', 'Banana', 'Grapes', 'Dates', 23, null , undefined, true, false , {name:'skm'}, [4,3] ];

console.log('fruitsCollection2 array :> ');

console.log(fruitsCollection2);




                // we can also add elements at the end even after skipping several indexes in between. 

// those empty indexes will result in storing undefined

const newArray = ['hii' , 'i'];
newArray[50] = 'at 50th index';

newArray[100] = 'now at 100th index';

console.log(' newArray :> ');

console.log(newArray);

console.log(newArray[75]); // o/p:> undefined.


                // method to remove element from array end.

 const rainbowColors = ['voilet','indigo','blue','green','yellow','orange','red'];

 console.log('rainbowColors array before pop operation :>');
 console.log(rainbowColors);

 rainbowColors.pop();  // will remove red from end

 rainbowColors.pop();  // will remove orange from end

 console.log('rainbowColors array after two times pop operation :>');
 console.log(rainbowColors);




