
function makeHttpRequest( method, url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    const promise = new Promise((resolve,reject)=>{
        xhr.addEventListener( 'load', () => {
           resolve(xhr.response);
        });  
        xhr.addEventListener( 'error', () => {
            reject('request failed');
        });          
    });

 

    xhr.open(method, url);
    xhr.send();

    return promise;

};

// Example of callback hell : 

/*

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData)=>{

    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData)=> {

        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData)=> {

            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {

                console.log(userData);

            });
        });
    })
});

*/


// below we have solved the callback hell problem and the code now will grow vertically with infinite dependent requests using promises.

makeHttpRequest('GET', 'https://dummyjson.com/users')
   .then( usersData => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
   .then( postsData => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}` ))
   .then( commentsData => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
   .then( console.log)  // here the .then automatically calls the console.log fun. which prints the data received to .then.
   .catch((err) => console.log(err));


