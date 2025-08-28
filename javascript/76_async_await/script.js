
/* 🌟 The Problem

   :> Before async/await, developers used callbacks and then Promises (.then()/.catch()) to handle asynchronous code (like fetching data).
   :> But sometimes, .then() chains get messy. 

   🔑 What async and await do 

   :> async makes a function return a Promise. 

   :> await pauses the function execution until a Promise is resolved (or rejected). 

   :> Together, they make asynchronous code look and feel like synchronous code. 

   👉NOTES:> 

   :> The 'async' keyword is used before a fun. to make it asynchronous.
   
   🔑 What throw does

   :> The throw keyword is used to raise (throw) an error in JavaScript.

        When an error is thrown:

        > Normal code execution stops immediately at that point.

        > Control jumps to the nearest catch block (if inside a try...catch).

        > If no catch exists → the program will crash with an uncaught error.

    :> ** Since, it is well known that the fetch returns a promise whereas if we use await before it, then it gives the result of that promise viz. the response object.
 
    :>In case of .then/.catch with Promises, the rest of the function does not pause while the Promise is pending — so other code in that function continues to run, making it feel like the Promise is being “skipped” if there’s a delay.

    :> But in a function using async/await, the function’s execution will pause at the await line until the Promise resolves or rejects, so you won’t see the following code run until the async task is finished.

    :> • Both .then() and async/await are non-blocking for the rest of your program.  
        → They never freeze the whole JavaScript thread.  

    • The difference is only inside your code flow: 

        .then() → code outside the .then chain continues immediately while the promise is pending.  
        
        await → pauses execution of that function until the promise resolves (but does not block other code outside).  

    :> We uses try and catch with async/await to handle the errors as the 
*/



async function hi (){
    console.log('hello');

    // throw 'error in program';  // one method to throw an error.

    throw new Error('Error in program');  // another method to throw an error.

    console.log('hii'); // will run never as the throw has sent the control to calling fun. with an error.
}
// hi();




async function makeRequest(){
    const url = 'https://cors-anywhere.herokuapp.com/https://procodrr.vercel.app/?sleep=5000'

    // const responsePromise = fetch(url)
    // responsePromise.then((res)=> res.json())
    // .then((data)=>console.log(data))
    

            // the same above thing can be done by 

    // NOTE:> if we use await before a promise then it gives the result of that promise viz. the response object.
              
    // const responsePromise = await fetch(url)
    const resData =  await responsePromise.json()   // .json() on promise returns a promise, using await here gives the data in the promise
    console.log(resData)
    console.log('hii this is make a req. fun.')    // will run only after the above await task get completed as await pauses the execution of a particular function.


}



// makeRequest();

async function makeAnotherRequest(){
    const url = 'https://procodrr.vercel.app/?sleep=2000'

    const responsePromise = fetch(url)
    responsePromise.then((res)=> res.json())
    .then((data)=>console.log(data))

    console.log('hii this is make another req. fun.')   // may run before the fetch received data as if it has a delay


}

makeAnotherRequest()

console.log("jai Ram Ram ji");





