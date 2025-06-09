const h1 = document.querySelector('h1');

const container = document.querySelector(".container")
const card = document.querySelector('.card')

            

// if we wants to insert h1 in the container tag, at the end like as cut & paste.

// container.appendChild(h1);  


// but, if we wants it to be like copy and paste we can copy the element and paste it in the container in elements section in repl.

// Also, if you wants to do it using js use .cloneNode.



                    // Use of .cloneNode

/* .cloneNode() is a method in JavaScript used to create a copy of a DOM element in memory.

   Syntax: let clone = originalNode.cloneNode(deep);

   originalNode is the element you want to clone.

        > deep is a boolean:

            * true = clone the element and all of its children.

            * false = clone only the element, not its children.

*/

// container.appendChild(h1.cloneNode(true));    // copy & paste of h1 element





// **Task: to append the card 100 times in the container with 1 to 100 as numbers labeled on each as numbering.

// container.appendChild(card.cloneNode(false));

/*
for(let i = 2; i<=100; i++){
    const newCard = card.cloneNode(true);
    newCard.textContent=i;
    
    container.appendChild(newCard);

}

*/





                    // Understanding use of append()


/*   Difference b/w append() and appendChild()

   🔹 append()

            > Can add: Element nodes and text nodes and strings also.

            > Multiple arguments: You can pass multiple elements or strings at once i.e, can add multiple nodes at once.

            > Returns: undefined.

    🔹 appendChild()

            > Can add: Only a single Node (no strings allowed).

            > Only one argument: Must be a Node (like an element).

            > Returns: The appended node.

            > Supported in all browsers, including old ones.        

*/



// **Task: to append the card 100 times in the container with 1 to 100 as numbers labeled on each as numbering using append.

// for(let i = 2; i<=100; i++){
//     const newCard = card.cloneNode(true);
//     newCard.textContent=i;
    
//     container.append(newCard);

// }




                            // to add a string using append.

container.append('This string is added using append.\n');


// but it is not possible to add a string using appendChild, without it being a text Node,so to do that we first create a text node and then add it using appendChild(). 

const newTextNode = document.createTextNode('This string is added using appendChild after creating it a text node.\n');

container.appendChild(newTextNode);





                    // appending multiple things using append.

// container.append('\n Hello ji',h1,'kaise ho?')

// doing the same with the appendChild will only append the first node and will neglect the rest nodes.





