const promiseOne = new Promise( function(resolve, reject) {
      // Do an async task
      // DB calls, cryptography, network 

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)  
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

// OR

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    },1000);

}).then(function(){
    console.log("Async 2 resolved");
});




const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"saurabh", email:"skm@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Raj",password:"123"})
        }
        else{
            reject('ERROR: Something went Wrong')
        }
    },1000)
})

// using .then(),.catch(),.finally() to handle promise results

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log('The Promise is either resolved or rejected.'));





const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript",password:"123"})
        }
        else{
            reject('ERROR: Js went Wrong')
        }
    },1000)
})


// using async, await to handle promise results

async function consumePromiseFive(){
    try{
        const response = await PromiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// use of fetch with async, await

/*

async function getAllUsers(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')

        // console.log(response);

        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("E: ", error);
    }
}

getAllUsers()

*/

// doing same with then, catch and finally

fetch('https://api.github.com/users/SaurabhkmMishra')
.then( (response)=> {
    return response.json()
})
.then( (data)=> {
    console.log(data);
})
.catch( (error)=> console.log(error) )




