        /*
        
        :> Destructuring is a JavaScript feature that allows unpacking values from arrays or objects into separate variables in a clean and concise way.

        :> Remember in case of destructuring in arrays order is a concern where as in case of obj. that is not the case. 

        */




                    // Destructuring on arrays

const colors = ['red', 'green', 'yellow', 'pink', 'black','white'];


/*
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
*/
 
// below is the replacement of the above code and it is possible just because of the destructuring on arrays.
const [color1, color2, color3] = colors;


// to get any particular index value or Skippping elements

const nums = [1,2,3,4,5];

const [,,third,,fifth,sixth] = nums;

console.log(fifth);  // 5
console.log(sixth);  // undefined, as their is not any sixth element in the array nums.


// **IMP :> also we know that arrays are objects behind the scenes hence we can use some obj. method of destructuring to avoid using multiple commas to get a particular index value i.e,

const { 3 : color4, 5: color5 } = colors; // means store in variable color4 the value at index '3' of the object colors.

// Also, here naming is compulsory as destructuring can't be done here just by giving the index value only.

console.log(color4);
console.log(color5);

console.log("\n");








                // We can collect remaining last elements using the ...rest syntax.

const names = ['Ram', 'Shyam', 'Sita', 'Radha', 'Krishna', 'Kishori ji'];

const [one,,three,...restNames] = names;

console.log(one);  // Ram
console.log(three);  // Sita
console.log(restNames); // ['Radha', 'Krishna', 'Kishori ji']

// here, restNames is an array created viz. having the all elements remaining in last.







                    // Destructuring on objects    

const user = {
    personName: 'Anurag',  
    age:25,
    address:{
        city:'Bengalore',
        state:'Karnataka',
        region:{
            area:'South-Bengalore',
            street : 46,
        }
    },
};
                    // 1. On single level

// Extracting values from an obj. & assigning it to variables.

const {personName, age} = user;

console.log(personName);
console.log(age);


console.log("\n");



            // Assigning values of obj. to variables with different names.

const {personName: userName, age: userAge} = user;  //here, both userName & userAge are different variable names which are storing personName & age object property values.

console.log(userName);
console.log(userAge);


                    // 2. on Multi-level

const { address: {city} } = user;  //easiest

// console.log(city);  //Bengalore

            // OR people also does:

/*

const {address} = user;
const {city} = address;

console.log(city); // Bengalore

*/ 

const {address : { region : { area , street } } } = user; 

console.log(area);  // South-Bengalore
console.log("the street no. is :> ",street);
console.log("\n");




                                   




                    // Destructuring in function parameters on function call


// Destructuring in function parameters is used when you want to extract values directly from an object (or array) passed as an argument to a function.

function intro( {age , name} ) {
    console.log(age, name);
}

intro(user);  // here, we are passing the whole obj. as argument whereas, the fun. is receiving it to be destructured as it's parameter.


function printColors([a,b,,g]){
    console.log(a,b,g);  // repr. first, second and fourth elements.
}

printColors(colors);

