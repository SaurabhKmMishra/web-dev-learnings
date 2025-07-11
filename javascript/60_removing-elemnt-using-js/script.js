const h1 = document.querySelector('h1')
const container = document.querySelector(".container")


for (let i = 1; i <=500; i++) {
     
     const pokemonDiv = document.createElement('div');
     
     pokemonDiv.classList.add('img-container');

     const pokemonImg = document.createElement('img');

     pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

     const numPara = document.createElement('p');

     numPara.textContent = `${i}`;

     pokemonDiv.append(pokemonImg , numPara);

     container.append(pokemonDiv);

}

/*    Let's compare element.remove() and removeChild() in JavaScript clearly:

✅ element.remove()
🔹 Removes the element itself from the DOM.

🔹 Directly called on the element you want to remove.

🔹 Simple and clean.

🔹 Not supported in very old browsers like Internet Explorer.

-> Example: 

     const myDiv = document.getElementById("myDiv");
     myDiv.remove(); // Removes the <div id="myDiv">...</div> itself

✅ parent.removeChild(child)

🔹 Removes a child element from its parent.

🔹 Requires you to know the parent element.

🔹 Compatible with all browsers, even old ones.

-> Example: 

const parent = document.getElementById("container");
const child = document.getElementById("myDiv");
parent.removeChild(child); // Removes myDiv from container


🧠 The removeChild() is a lengthy one so we needs to use remove() to avoid it.

*/


               // Removing element using element.remove().

// Task: to delete the fifth img element of HTML.

let myImg = document.querySelector('body > div > div:nth-child(5)');
// to  select the target to be deleted.

myImg.remove();  // removes the element from the html.




               // Removing using parent.removeChild(child)

// to delete the 5th element of HTML.

// myImg.parentElement.removeChild(myImg); 

 // above we first select the parent element and then remove it's child element using removeChild(child).




// **Note: even if we have removed the element still it will be present in the memory, and it can be appended again using the variable as we have stored it inside it. 

// So, to avoid it we needs to free the variable by setting 'Null' as it's value.

myImg = 'Null';


// or we can also do it without var creation i.e, directly removing the element without assigning it to a variable.

// document.querySelector('body > div > div:nth-child(5)').remove();  // this leaves no chance to append again.

