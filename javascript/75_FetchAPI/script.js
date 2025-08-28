/* 

:> fetch() is a built-in JavaScript function used to make network requests (like getting data from an API or sending data to a server) without refreshing the page.

:> 

  fetch(url, options)
  .then(response => {
    // Process the response
  })
  .catch(error => {
    // Handle errors
  });

> url → Where to send the request.
> options → (optional) An object describing method, headers, body, etc.  


:> Think of it as JavaScript’s way of saying: "Hey server, can you send me some info? Or take this info from me?"   

Default Behavior ->

:> By default, fetch() sends a GET request.

:>*** It returns a Promise — meaning it’s asynchronous and won’t block the rest of your code.

💡 Key points to remember:

fetch() is asynchronous → returns a Promise.

Always handle .then() and .catch() for success & error.

Use .json() if the response is JSON, .text() for plain text, .blob() for files, etc.

It won’t throw an error on HTTP errors (like 404) — you have to check response.ok yourself.

*/



// GET Request using fetch()

/*
fetch("https://dummyjson.com/products", {
    // method: 'DELETE'
})
.then((resp) => {  // resp is the response object
    console.log(resp); 
    return resp.json(); // Parse the response body as JSON &  returns a Promise that resolves with the parsed/converted JSON data viz. pure js code.
})
.then( (data) => {
    console.log(data);
})
.catch( (err) => console.log(err) );    

*/

// POST request using fetch()

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log) // here the .then automatically calls the console.log fun. which prints the data received to .then.
.catch( (err) => console.log(err) );