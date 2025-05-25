console.log('the body has following children elements : ', document.body.children);

console.log('Also the body has following childNodes in DOM tree: ',document.body.childNodes);

console.log('the value of document.body.childNodes[2] is: ',document.body.childNodes[2]);


console.log(' And the type of document.body.childNodes[2] is: ',typeof document.body.childNodes[2]);



console.dir(document.body.attributes.style);





/*   
    🔍 Basic Definitions:

        Node : The generic building block of the DOM. It can be an element, a text, a comment, etc.

        Element	: A specific type of node — it's always an HTML tag like <div>, <p>, etc.

    🧩 Imagine the DOM is a tree:

   > Node is like the term “branch” — it could be any type.

   > Element is like a leaf — a specific type of node that represents an HTML tag.
   
   **IMP :> So, every element is a node, but not every node is an element.    


  🧱 Types of Nodes
Here are the most common types:

            Node Type	         Description	                        nodeType
            Element Node	     An HTML tag like <div>, <p>, <h1>	       1
            Text Node	         The text inside elements	               3
            Comment Node	     HTML comments like <!-- hello -->	       8
            Document Node	     The whole document (document)	           9
            Attribute Node       attributes like href, style, src.         2
*/


    // **Note :> if we wants to change a particular component in an element and not the whole element, then we uses node to do so using js


        // Task:>  To change the value of ther text Hello World using js

console.log(document.body.childNodes[2].nodeValue = 'Namaste Duniya');            