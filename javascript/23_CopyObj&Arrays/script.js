               
            // Copying in case of strings.

        // the copying of a string variable to another using '=' operator assigns the same reference but on changing one of them will result in changing its reference.    


const username1 = 'Ashish';

let username2 = username1;  // same references

username2 = username2 + ' Dubey';  // changed reference b/c of updation.

console.log(username1);

console.log(username2);



const fruits = ['Mango', 'Apple', 'Orange'];

const myFruits = fruits;  // same references of both arrays.

myFruits.push('Dates');   // change in one will create change in both.
myFruits.push('Grapes');  

console.log(fruits);  
console.log(myFruits);  
console.log('\n');


/*

const user1 = {
    firstname:'Anurag' ,
    lastname:'singh' ,
};

const user2 = user1;  

// not appropriate way to copy as it assignes the same address.

user2.lastname = 'Govinda';  // changes both the obj. user1 and user2.

console.log(user1);
console.log(user2);

// i.e, why the two of these obj. gets to be same.


*/

                  // USE OF Object.assign(obj1, obj2);

                 // copying in arrays.


        // used to copy an object so that both of them have diff. references even after they r having same values.And on changing one will not impact the another.    

        // but this method was used before 2015 and after that ES6 version of js came with spread operator.

const user1 = {
    firstname:'Anurag' ,
    lastname:'singh' ,
    pata: {
        city: 'Delhi' ,
        pincode: 546357 ,
    }
};

const user2 = {};
Object.assign(user2,user1);

user2.firstname = 'Rakesh';  // updating

console.log(user1);
console.log(user2); // changed result.
console.log('\n');



             // use of spread operator viz. (...);

const user3 = {...user1};       
     
user3.firstname = 'Ashutosh';

console.log(user3);


           // but their is a catch viz. if we change the nested elements in the copy it will also affect in the original one.

           // this is because the Object.assign and spread oprtr. methods perform a shallow type of copy.
           
           // and in a shallow copy only the first level of data is copied.

           // If the object or array contains nested objects or arrays, the shallow copy will only copy references to those nested elements, not their actual values. 

           // So, if we change the nested elements in the copy it will also affect in the original one.

user3.pata.city = 'Mumbai';  // change will be seen in all related objects.

console.log(user1);
console.log(user2);
console.log(user3);



             // use of Object.assign and spraed operator [...] on arrays
        
             // multiple methods of creating & duplicating arrays.

/*

const yourFruits = [];
Object.assign(yourFruits , fruits); 
yourFruits.push('papaya');
yourFruits.push('Dates');

console.log(yourFruits);
console.log(fruits);

*/



const yourFruits = [...fruits];
yourFruits.push('papaya');
yourFruits.push('Dates');

console.log(yourFruits);
console.log(fruits);
console.log('\n');




        // remember once we used a [] it rep. a new array creation.    

/*
        
const yourFruits = [].concat(fruits);
yourFruits.push('papaya');
yourFruits.push('Guava');

console.log(yourFruits);
console.log(fruits);

*/


        // by using .slice() of arrays.

/*

const yourFruits = fruits.slice();

yourFruits.push('papaya');
yourFruits.push('Guava');

console.log(yourFruits);
console.log(fruits);

*/


              

                    // METHOD TO DEEP COPY.

         // USING JSON.parse(Json.stringify(object));  
         
         // A deep copy in JavaScript creates a completely independent copy of an object or array, including all nested structures. Unlike a shallow copy, a deep copy ensures that modifications to the copy do not affect the original object, even for nested elements.

const item1 = {
    itemname : 'Table' ,
    itemweight : '5kg' ,
    details: {
        price: 5000 ,
        color: {
            objcolor : 'red' ,
        }
    } ,
};
    
const item2 = JSON.parse(JSON.stringify(item1));

item2.details.price = 8000;
item2.details.color.objcolor = 'blue';

console.log(item1);
console.log(item2);


