// Note:> the obj. in js can be converted to array using Object.values(obj_name);


// const user = {}    // empty object


// In JavaScript, objects are one of the most fundamental building blocks. They allow you to store multiple related pieces of data and functionality in a single entity, using key-value pairs

// where: The key is a string (or a Symbol).
// The value can be any data type, including another object or a function.

const myName = "Saurabh";

const user = {
    firstName: 'Akash',
    lastName: 'Singh',
    age: 26,
    education: 'B.tech',
    city:'Meerut'
};

// here in the above object their are several pairs of keys with respective values are seen.

                        // Use of object.entries()?
    // ✔ It returns an array of a given object’s own enumerable key-value pairs.

console.log('the following are the entries of the user obj. :');    
console.log(Object.entries(user));                    


const user2 = {
    firstName: 'Akash',
    lastName: 'Singh',
    age: 26,
    education: 'B.tech',
    city:'Meerut'
};

// the key can be kept in "" or just without it.


const userName1='';
const username2='';


// if we do clg(user===user3) we will always get false bcs the addresses of these variables are always different when it comes to object creation but will be same in case of valued ones. 


const thing1 = {
      firstName:'Adarsh' ,
};


const thing2 = {
    'first-Name':'Adarsh' ,
    lastName:'singh',
    Saurabh : 'Developer'
};

                      // Use of 'in' keyword in js
        // 'in' is used check if a property exists within an object

    console.log("to verify whether 'saurabh' property is present in object thing2' ");    
    console.log("Saurabh" in thing2);  // true

    console.log("to verify whether 'tostring' property is present in object thing2' ");  

    console.log("toString" in thing2); // true (inherited from Object.prototype)





                      // accessing of values of objects


console.log(thing2);  
// to access obj. itself

console.log(thing2.lastName); 
 // Dot Notation method.

console.log(thing2['lastName']); 
 // Bracket Notation method.

console.log(thing2.Saurabh);

console.log(thing2[myName]);  
// we can access the values associated with a key using js variables as well as expressions by the help of Bracket Notation. even functions are also called using these.

console.log(thing1["first"+"Name"]);   // js exprn.




               // updating the object

user2.age = 26;  
 // can be seen as update in obj. in console.
 
user2["is-student"] = true;  
// by using bracket notation. 


// *****Note :> Remember here that the object is const type still it's updation is made possible, because its address is not changing actually following the rule of single non-changable reference in case of 'const' but only updation inside its key-value pairs are done and not in it's references.


// in user2 we can't do : user2 ={ name='skm'}; again as it is a const value and we can't reassign it any other object or value  after being assigned for one time.




                // object nesting inside an obj.even multi-level nesting possible 

const user3 = {
    firstName : 'Adarsh',
    lastName : 'Singh' ,
    address : {
        city : 'Deoria' ,
        pinCode : 274001 ,
        state : 'utttar pradesh' ,
        moreDetails : {
            streetNumber : 4 ,
            'ward-number' : 3 
        } 
    } ,
};

console.log(user3.address.moreDetails['ward-number']);  // o/p : 3 
// accessing using Dot Notation. 

console.log(user3["address"]["moreDetails"]['streetNumber']); //o/p : 4
// accessing using Bracket Notation.


console.log(null);





                      // Type of object

const skmtw = {
    name:'dgff' ,
    place: 'dhfuj' ,
};                 

console.log(typeof(skmtw));   // will give object