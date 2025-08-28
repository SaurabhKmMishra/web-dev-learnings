/*  🔹 What is a Promise?

    :> A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

    :> It’s like saying: “I don’t have the result yet, but I promise I’ll give it later (success or failure).”

    
🔹 States of a Promise
    
    :> A promise can be in only one state at a time. There are 3 main states:

    a) Pending
    b) Resolved(Fulfilled)
    c) Rejected


    NOTE:> A promise can be only one time used means it's state. Can't be unchanged if attained to be either resolved/rejected.

    :> Both then and catch are methods in which we can pass a callback function viz. called for the promise state to be resolved/rejected.

    :> .finally() in JavaScript Promises is used to run code after a promise is settled (fulfilled or rejected) means when it reaches in a non-pending situation, regardless of the outcome.

    :> All the changing states of promises are tracked asynchronously by the browser, while the main thread of the javascript runs independently from it.

    ** Promises and `async/await` are also **asynchronous**, but they use a different queue called the **microtask queue** — it gets priority over the regular callback queue.

    :> we can solve the problem of callback hell(also called the pyramid of doom) using promises viz. the horizontal growth of code.


*/


const resolveBtn = document.querySelector('#resolve-button');
const rejectBtn = document.querySelector('#reject-button');

const p = new Promise( (resolve, reject) => {
    resolveBtn.addEventListener('click', ()=>{
        resolve('Promise Resolved');
    });
    rejectBtn.addEventListener('click', ()=>{
        reject('Promise Rejected');
    });
});


// p.then( (data)=> {
//     console.log(data);
// }).catch( (error)=> {
//     console.log(error);
// }).finally(() => {   // runs no matter success or failure
//     console.log('change in promise state finally');  
// });

p.then( (data)=> {
    console.log(data);
    return 155
}).then( (data)=> {
    console.log(data);   
}).then((data)=>{
    console.log(data);
}).catch(err =>{
    console.log(err);
}).then( ()=>{
    console.log('object');
})


// hence we can understand here that we can solve the problem of callback hell using promises viz. the horizontal growth of code.