const procodrr1 = document.querySelector('[procodrr="Akash"]');

console.dir(procodrr1);

// NOTE: We can edit our elements in elements section of repl by double clicking on them & then editing but the created change is .

// NOTE :>  another method to access the attributes and values in console without doing console.dir() is by selecting the element in element's section and then open the properties section to get resp. attributes.



                // Method to access value of an attribute

console.dir(document.querySelector('[procodrr]').attributes.procodrr.value);

                // 1. another method to access value of an attribute using getAttribute()  
                
    /* 📌 getAttribute(attributeName)
                    
            > This method gets the value of a specified attribute from an HTML element.

            > You use it when you want to read the value of an attribute.
    */            

console.log(document.querySelector('[procodrr]').getAttribute('procodrr'));            

console.log(document.querySelector('[procodrr]').getAttribute('hello'));    

 // Remember the following method returns null in case we try to find a non-matching attribute viz. not present. 


console.log(document.querySelector('h1').getAttribute('class'));



// ***NOTE :> their are also some attributes which can be accessed directly which are known as defined attributes. An attribute is considered defined if it is present in the HTML or manually set using JavaScript (e.g., using setAttribute()).

//Also these attributes are kept in attributes as well as properties in the js DOM.

/* 📌 Defined attributes are stored in:

      1. The .attributes collection (raw HTML attributes)

      2. As properties on the DOM object (for standard attributes)
      
*/

console.log(document.querySelector('h1').id);  
// here, we see that we can easily get the value of id attribute without using the getAttribute method

console.log(document.querySelector('h1').className);
                

                    // 2. Setting value of an attribute using setAttribute()

    /* 📌 setAttribute(attributeName, value)

            > This method sets or updates the value of a specified attribute on an HTML element.

            > You use it when you want to change or add an attribute.
    
    */

const firstHeading = document.querySelector('h1')

firstHeading.setAttribute('title', 'Hello World!!!');    // will produce a title attribute & give the value inserted.

firstHeading.setAttribute('title', 'Ram-Ram ji');     // will update the value of the title.


// Like as in the getAttribute we can also set the values to the defined attributes directly

document.querySelector('h2').id = 'YeHaiId';


