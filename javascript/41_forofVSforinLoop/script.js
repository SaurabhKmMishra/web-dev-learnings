// for of and for in helps in looping on the arrays,strings or any iterable objects quiet easily.

const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

// using for of loop

for(const fruit of fruits){
    console.log(fruit);
}

const user="Saurabh";

for(const letter of user){
    console.log(letter);
}


         // but we should know that normal object is not an iterable one, so to apply loop on them we need to use for in .

const person = {
    firstName: 'Akash',
    lastName: 'Singh',
    age: 26,
    education: 'B.tech',
    city:'Meerut'
}         


// for(const info in person){
//     console.log(info, ": ", person[info]);
// }


// we generally avoid using the above method instead we uses the below.



                            // Use of object.keys(obj_name)

           // the above makes an array and stores in it the keys of the object and hence making it an iterable object viz. an array here to be used with for of along with bracket notation.         

const personKeys = Object.keys(person);

// personKeys is an array and stores in it the keys of the object person viz.  ['firstName', 'lastName', 'age', 'education', 'city']

console.log(personKeys);

// accessing values stored 

for (const key of personKeys){
    console.log(person[key]);
}



                        // Use of Object.values(obj_name);

        // The Object.values(object) method is used to extract all the values from an object's properties and return them as an array.
        
const personValues = Object.values(person);

// here, personValues is an array which contains ['Akash', 'Singh', 26, 'B.tech', 'Meerut'] .

console.log(personValues);


                        // Use of Object.entries

    // The Object.entries(object) method returns an array of key-value pairs from an object. Each key-value pair is represented as a nested array [key, value].

const personEntries = Object.entries(person);

console.log(personEntries);

// here, personEntries is an array with nested array in it :>  [ ['firstName', 'Akash'], ['lastName', 'Singh'], ['age', 26], ['education', 'B.tech'], ['city', 'Meerut'] ]




