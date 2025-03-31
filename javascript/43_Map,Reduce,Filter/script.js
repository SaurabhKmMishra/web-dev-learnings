                // 1. map() method in js

/* const newArray = array.map((element, index, array) => {
    // Return new value });
*/  
    // element – The current element being processed.
    // index (optional) – The index of the current element.
    // array (optional) – The original array.
    // Returns: A new array with transformed elements.

// The map() method is used to create a new array by applying a function to each element of an existing array. Unlike forEach(), it returns a new array without modifying the original one.

// And this returned array contains the return value of the callback function executed for each element of the existing array.

const months = ['January', 'February', 'March', 'April', 'May', 'December'];

const changedMonths = months.map((month)=>{
    console.log(month);
    return month.toUpperCase();
});

console.log(changedMonths);
//here, the array 'changedMonths' contains all of the returned values for the anonymous fn. viz. executed for each element of the months array respectively.


// Another method to print the return value array and even the index.

console.log(
months.map((month,index)=>{
    console.log(index,month);
    return month.toUpperCase();
}));


// also we can use the third argument in using map() but it is rarely used.






                  // 2. use of filter() in js

/*      :> The filter() method is used to create a new array containing elements that meet a specific condition. It does not modify the original array.

        :> Syntax :- const newArray = array.filter((element, index, array) => {
                return condition;
           });

        :> element – The current element being processed.
           index (optional) – The index of the current element.
           array (optional) – The original array.
           Returns: A new array with elements that satisfy the condition.   
*/              

const filteredMonths = months.filter((month)=>{
        // console.log(month);
        //  return month.toLowerCase().includes('m');
        // return month.length<=5;

});

// the above code returns the array which holds only those elements from the months arr that have a length<=5 only.

console.log(filteredMonths);



                 // using index parameter of filter()

const  getIndex = months.filter((month,index) => index<=3 );
// an array of those elements is returned which contains the elements of months arr havin index<=3.

console.log(getIndex);




const students = [
    {
        name: 'Akash',
        age:17,
    },
    {
        name: 'Ankit',
        age:27,  
    },
    {
        name: 'saurabh',
        age:21,  
    },
    {
        name: 'sumit',
        age:8,  
    },
    {
        name: 'sushma',
        age:20,  
    },
    {
        name: 'Nikhil',
        age:13,  
    },
];


/*
const adultStudents = students.filter((detail) => {
    return detail.age >=18;
});

console.log(adultStudents);
 // prints the arr containing the objects satisfying the condition.

const adultName = adultStudents.map( (adultName) => { 
    return adultName.name });

console.log(adultName);
// prints the arr containing only the name from the objects satisfying the conditions.
     
*/             // OR


const adultStudents = students.filter((detail) => {
    return detail.age >=18;
}).map( (adultName) => { 
    return adultName.name 
    
});

console.log(adultStudents);



// we can further add map or filter to the code line above and this is known as chaining of array methods.

const adultStudentsWithA = students.filter((detail) => {
    return detail.age >=18;
}).map( (adultName) => { 
    return adultName.name 
}).filter((withA) => {
    return withA.startsWith('s');
});

console.log(adultStudentsWithA);
// prints those adultStudents whose name starts with 's'.



