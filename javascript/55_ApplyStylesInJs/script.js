const h1 = document.querySelector('h1');
const paragraph = document.querySelector('p');


// ***Remember that changing the css using js doesn't makes any changes in the actual source file but it changes in the dom 

         // Method to change the css properties using js itself.

h1.style.color = 'hotpink';
h1.style.backgroundColor = 'skyblue';


          // Task :> to change the color of all the 'a' Tags to 'teal'

const allLinks = document.querySelectorAll('a');

// console.log(allLinks);

for(const link of allLinks){

                  // 1st. Method

      // link.style.color = 'teal';
      // link.style.textDecorationLine = 'none';
      // link.style.fontFamily = 'cursive';
      // link.style.fontSize = '18px';


                  // 2nd. Method

          // **IMP:> using 'cssText' viz. another easy method to apply the same css but not the most efficient one.

      /* 💡 cssText is a property of the style object in JavaScript that allows you to set or get all the inline styles of an HTML element as a single string. 
      
      ⚠️ Important Notes:
           
      > Using cssText overwrites all existing inline styles.

      > cssText is like writing an entire style="" attribute in JavaScript.

      > It does not touch styles applied through external CSS or class selectors.

      > It sets inline styles, and inline styles have higher specificity than external or internal CSS — so they usually win in the CSS cascade.

      > below is the method :

      */    

      // link.style.cssText = `
      //           color:teal;
      //           text-decoration:none;
      //           font-family:cursive;
      //           font-size:18px;`;      



                        // 3rd. Method viz. mostly used

            // adding a new class by js & adding it's css style accordingly   
            
      // a. using .className property
      
      // link.className = 'green-link';  
      
      // b. using setAttribute

      // link.setAttribute('class','green-link');

      // remember if we have already given a class to an element in html and again we tries to give one additional class using js then the older one will be wiped out, to avoid this we needs to give the both classes at once.

      // so, to avoid the above problem we uses .classList property
      
      // c. using .classList property

      /* 
           🧠 What is classList?

                  The classList property is a way to work with the classes of an HTML element. It gives you access to the list of CSS classes on that element — and lets you add, remove, toggle, or check classes easily without touching the whole className string. 
           
            🎯 Why is classList useful?
            
                  Before classList, you had to mess with element.className, which is just a long string. You had to do string manipulation. classList makes it clean and simple.

      */

      link.classList.add('green-link');

      // link.classList.remove('green-link');

      //  link.classList.toggle('green-link');  

      // remember toggle means: If the class exists, remove it. If it doesn't, add it.


}










                                                     