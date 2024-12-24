console.log(typeof {}); // return object

console.log(typeof []);  // Since arrays are technically objects in JavaScript, typeof will return "object"

console.log(typeof [].concat);  //Functions are a special type of object, and typeof will return "function".

const fruitsCollection = ['Apple', 'Banana', 'Grapes', 'Dates'];

// to change the array element of a particular index

fruitsCollection[3] = 'papaya';

console.log(fruitsCollection.length);

// to add an element at end

fruitsCollection[4] = 'Guava';

console.log(fruitsCollection.length);


// we can store all primitive datatypes in an array as well as another array and even objects which could even be nested.

const fruitsCollection2 = ['Apple', 'Banana', 'Grapes', 'Dates', 23, null , undefined, true, false , {name:'skm'}, [4,3] ];

console.log(fruitsCollection2);


