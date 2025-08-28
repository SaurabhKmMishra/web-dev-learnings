/* ⚡ Simple Analogy

       :> Reload → “Let me reuse what I already have unless I must ask the server.”

       :> Hard Reload → “Forget what I stored, go ask the server for everything new.” 

                        // Callback Hell   

    🔹 What is a Callback?

    :> A callback is just a function passed as an argument to another function, to be executed later.    
    
    🔹 Callback Hell (the problem)

    :> When you have many asynchronous tasks that depend on each other, and you keep nesting callbacks inside callbacks…

    👉 The code becomes deeply indented, messy, and hard to maintain.
       
*/

function makeHttpRequest( method, url, callback ) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener( 'load', () => {
       callback(xhr.response)
    });   

    xhr.open(method, url);
    xhr.send();

};

// Example of callback hell :

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData)=>{
    console.log(usersData);

    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData)=> {
        console.log(postsData);

        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData)=> {

            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
                   console.log(userData);
            });
        });

    })
});


/*  😬 This is callback hell (also called the pyramid of doom).

    :> Hard to read.

    :> Hard to debug.

    :> Error handling becomes very tricky. 
    
    🔹 Why does this happen?

    :> Because JavaScript is asynchronous (non-blocking).

    :> Operations like API calls, file reading, setTimeout, etc., don’t complete instantly.

    :> Callbacks are used to say “when you’re done, then do this.”

    :> Too many async steps → deeply nested code → callback hell.


    👉Solution:> It is Solved using Promises or Async/Await for cleaner, flatter code.
    
*/

