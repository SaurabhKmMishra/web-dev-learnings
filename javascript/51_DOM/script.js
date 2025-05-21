// to see the window.document in object form and not in html document form use console.dir()

console.log("document in object form : ");
console.dir(document);


/* DOM :> The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content. */


/* 🔍 What is an HTML Parser?
            An HTML parser is a component of the browser that reads the raw HTML code and converts it into a structured DOM tree that the browser can understand and manipulate.

    ? What is DOM Manipulation :>
            DOM manipulation refers to the process of changing the structure, style, and content of a web page using JavaScript. This involves interacting with the Document Object Model (DOM), which represents the HTML document as a tree of objects, allowing developers to dynamically alter the content and appearance of a webpage.        
            
*/


document.body.children[0].innerHTML = "<i>Saurabh Kumar</i> Mishra";  // will replace the actual element as Saurabh Kumar in itallic and Mishra As it is in HTML.

console.dir(document.body.children[0]);


document.body.children[3].children[0].innerText = '<i>frnt-end<i>';
console.log(document.body.children[3].children[0]);





/*  
    ✅ innerText vs innerHTML in JavaScript :> Both are used to get or set content inside an HTML element — but they behave a bit differently.

    🔹 innerText – Only the visible text

    > Gets or sets the text inside an element.

    > Ignores any HTML tags inside and prints it as it is if written.

    > Takes CSS styles like display: none into account (it won't return hidden text).

    🔹 innerHTML – HTML + Text (Everything inside)
     
    > Gets or sets the full content inside an element — including HTML tags.

    > Changes the HTML content on web page and even in the elements section of the repl.

    > Returns the entire HTML structure.

*/


/*   
    Comparison of innerText vs textContent :>

    (1).🔹 textContent – Raw text (ignores CSS styles):> 

        a. Returns all the text, even if it's hidden by CSS (display: none, visibility: hidden, etc.).
        b. Faster than innerText, because it doesn’t care about styling or layout.
        c.  Doesn’t trigger a browser reflow.

    (2).🔹 innerText – Only visible text (style-aware):>
    
        a. Returns only the text visible to the user.
        b. Ignores content hidden with display: none, etc.
        c. Triggers a layout reflow, so it's slower.    

    🧠 Summary Table:

    Feature	                 textContent	     innerText
    Returns hidden text    	✅ Yes	           ❌ No
    Aware of CSS styles	    ❌ No	           ✅ Yes
    Includes line breaks	❌ No (raw text)	   ✅ Yes (as rendered)
    Performance	            ✅ Faster	       ⚠️ Slower (due to layout calculation)
    Best for...	         Code/data processing	  Text as seen by the user 
    
*/


// changing the h2 element content to "Ram-Ram"

document.body.children[2].innerText = "Ram-Ram";


// working with the image.

// Note: the 'src' property holds the url of the image.

function changeImg(){

document.body.children[4].src = "https://imgs.search.brave.com/cDPhGtFBWspsa_Wa2lUxzOpxdMmCK8_PRRti_GpsXkI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cm9ncmFtbWluZy1i/YWNrZ3JvdW5kLXdp/dGgtcGVyc29uLXdv/cmtpbmctd2l0aC1j/b2Rlcy1jb21wdXRl/cl8yMy0yMTUwMDEw/MTMwLmpwZz9zZW10/PWFpc19oeWJyaWQ";

}  // remember to change img call the fun. changeImg();



// NOTE: Since, for every element of the HTML theor is an object formed by the parser.

// So, we can also store an element in a variable and later use the same variable to manipulate the element.

let myParagraph = document.body.children[7];

console.log(myParagraph);

myParagraph.innerText = "Don't Copy";  // by doing this we replaced the copyright message with "Don't Copy" using Dom Manipulation.  



// Also , if you wants to store any var globally you can also do it in console by right clicking on it and selecting the option 'store as a global variable'. It will be stored as temp1,temp2,... respectively.

// but it is not used commonly.