const firstLink = document.querySelector('a');

console.log('firstLink gives o/p: ',firstLink); // a



               // accessing parent elements & nodes
               // using .parentElement & .parentNode

console.log('firstLink.parentElement gives o/p: ',firstLink.parentElement); // p

console.log('firstLink.parentElement.parentElement gives o/p: ',firstLink.parentElement.parentElement); // body

console.log('firstLink.parentElement.parentElement.parentElement gives o/p: ',firstLink.parentElement.parentElement.parentElement); //html

console.log('firstLink.parentElement.parentElement.parentElement.parentNode gives o/p: ',firstLink.parentElement.parentElement.parentElement.parentNode); 
// since the html has no parent element therefore it's parentElement will be a null.

// instead if we use a parentNode on it then it will result in #document. 

                    
                    // accessing children elements & nodes
                    // .children & .childNodes
                   


console.log(firstLink.parentElement.parentElement.children);
// the .children property gives an HTML collection viz. only html elements.

console.log(firstLink.parentElement.parentElement.childNodes);
// whereas, the childNodes give a nodelist having all nodes be it text,element or comments.


/* 🧩 Imagine the DOM is a tree:

   > Node is like the term “branch” — it could be any type.

   > Element is like a leaf — a specific type of node that represents an HTML tag.
   
   * So, every element is a node, but not every node is an element.
   
*/


                    // accessing siblings

                // using .nextElementSibling & .nextSibling  
                
    /*  👉 nextSibling
            
            > Returns the next node in the DOM tree — could be: an element, a text node (like spaces or newlines), or even a comment

        👉 nextElementSibling

            > Returns the next sibling that is an element, skipping text and comment nodes.

    */            

console.log('the next element sibling of firstLink is : ',firstLink.nextElementSibling); 

console.log('whereas the next sibling of firstLink is : ',firstLink.nextSibling); 

console.log('the 2nd next element sibling of firstLink is : ',firstLink.nextElementSibling.nextElementSibling);        

   
                // using .previousElementSibling & .previousSibling    
               

console.log('the previous sibling of firstLink is: ',firstLink.previousSibling);

console.log('whereas the previous element sibling of firstLink is : ',firstLink.previousElementSibling);



