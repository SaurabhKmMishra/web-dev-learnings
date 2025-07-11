/*
🔐 What is localStorage?

            :> localStorage is a type of Web Storage provided by the browser that allows websites to store data persistently in the user's browser — even after the page is reloaded or the browser is closed and reopened.

    :> Origin = Protocol + Hostname (domain) + Port

    :> 👉 localStorage is isolated to this origin i.e,specific to a particular origin.

    :> So if your site is: https://example.com:3000

       Then only this origin can access the data. Any of the following CANNOT access it:

            > http://example.com:3000 → different protocol

            > https://sub.example.com:3000 → different subdomain

            > https://example.com:4000 → different port

            > https://anotherwebsite.com:3000 → different domain


    :> ✅ In Summary: localStorage Access Rules
        
            ✅ Same protocol + same domain + same port → Yes, can access the same localStorage.

            ❌ Different domain (e.g. localhost vs 127.0.0.1) → No, cannot access the same localStorage.

            ❌ Different port (e.g. 3000 vs 5000) → No, cannot access the same localStorage.

            ❌ Different protocol (e.g. http vs https) → No, cannot access the same localStorage.

    :> If you're running two different apps on localhost:3000, they will share the same localStorage — because their origin is the same. So, data from one can leak into the other unless cleared.        

*/




const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');
const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');

                // Accessing localStorage key-values

// nameElement.innerText = localStorage.myName; // not used commonly method 

// nameElement.innerText = localStorage.getItem(myName); // used widely



            // difference of using getItem vs conventional way

// the diff. is that if we use getItem to seach for a non existing propr. in localStorage it will result in 'null'.

// whereas the conventional one will result in 'undefined'.i.e,

console.log(localStorage.getItem('age'));  // null

console.log(localStorage.age);   // undefined






                // storing items into local Storage 

// localStorage.myName = 'Akash';  // less commonly used

// localStorage.setItem('myName', 'Akash');  // widely used     





                  // Storing strings in local storage

/* 

nameInput.addEventListener( 'input', (e) => {

    // localStorage.myName = e.target.value;

    localStorage.setItem('myName', e.target.value);       

    nameElement.innerText = localStorage.getItem('myName');

});


ageInput.addEventListener( 'input', (e) => {


    localStorage.setItem('myAge', e.target.value);       

    ageElement.innerText = localStorage.getItem('myAge');

});

*/






            // Method to convert an obj to string & vice-versa

                        // 1. obj. to string
                        
const addr = {
    country:'India',
    state:'Uttar Pradesh',
    city:'Lucknow',
};          

const str = JSON.stringify(addr);
console.log('The obj. addr in form of string :> ', str );

                       // 2. string to obj.

console.log('The string addr in form of obj. :> ', JSON.parse(str));
                       






                     // Storing an object in localStorage 

    // for this we needs to convert the whole obj. into string then only then it will be possible to store it into local Storage as it only takes string.                 

const myData = JSON.parse(localStorage.getItem('mydata')) || {};

// adding the line above will result either into a empty object or accessing already stored data from local storage if present.

if(myData.name){
    nameElement.innerText = myData.name;  
}

if(myData.age){
    ageElement.innerText = myData.age;
}


nameInput.addEventListener('input', (e)=> {
    myData.name = e.target.value;
    
    localStorage.setItem('mydata', JSON.stringify(myData)); // storing after converting into a string.

    nameElement.innerText = e.target.value;

});

ageInput.addEventListener('input', (e)=> {
    myData.age = e.target.value;
    
    localStorage.setItem('mydata', JSON.stringify(myData));

    ageElement.innerText = e.target.value;

});






                    // Deleting data stored in localStorage

                // 1. to clear the localStorage completely

// localStorage.clear();

                 
                // 2. to delete a single localStrg item

// localStorage.removeItem('mydata');                
    