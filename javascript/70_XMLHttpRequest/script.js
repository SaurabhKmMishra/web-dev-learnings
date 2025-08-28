/* 

1. What is XMLHttpRequest?

   :> XMLHttpRequest (often called XHR) is an object in JavaScript used to send HTTP requests and receive responses from a server without reloading the page.

   :> It’s the "old-school" way to do AJAX (Asynchronous JavaScript And XML) before fetch() came along. 

2. Why is it used?

   It allows you to:

   :> Request data from a server (like an API).

   :> Send data to a server.

   :> Update parts of a webpage without refreshing the whole page.

   :> Communicate asynchronously in the background.

3. How it works?

   Steps:

   :> Create a request object → new XMLHttpRequest()

   :> Initialize request → .open(method, URL, async)

   :> Send the request → .send()

   :> Listen for response → .onreadystatechange or .onload

   ** Remember the name is XML b/c XML was used in this historically for data exchanging but later using this obj. Json was used for that purpose in place of XML.
   
*/


const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', ()=> {

    const xhr = new XMLHttpRequest();  // here xhr is an request obj.
    
    xhr.responseType = 'json';


    xhr.addEventListener('load', () => { // to receive the response this load evt fires when data received to us

        image.src = xhr.response.message;

        console.log(xhr);

    });

        // Another method to add load evt/handle the receiving data

/*        
    xhr.onload = () => {
        image.src = xhr.response.message;
        console.log(xhr);
    }    

*/    

    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');  //Initialization of request
    

    xhr.send(); //Send the request

}); 


/*

button.addEventListener('click', ()=> {

    const xhr = new XMLHttpRequest();  // here xhr is an obj.
    
    console.log(xhr);

    // if we wants in response Object and not the JSON string we can use 

    xhr.responseType = 'json';


    xhr.addEventListener('load', () => {  // load evt fires when data reaches 
      

                  // To show the data we received

        // console.log(xhr.response);  // is the data received in JSON string form
        

        // console.log(JSON.parse(xhr.response));   // to convrt. the recived JSON string data into object form.
       

        // if you have defined earlier the reponseType then you will directly get in response the object

        console.log(xhr.response);  // object form response

    });

    xhr.open('GET', 'https://httpbin.org/anything');
    xhr.send();


});      

*/