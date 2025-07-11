
/*                  Event listener in js 

What is an Event Listener in JavaScript?
✔️ An Event Listener is like a watchman (guard) sitting on an HTML element.
His job: "Wait and listen for something to happen" — like click, hover, keypress, mouse move, etc.

When that “something” happens, he says:
“Hey JS! Run this function now!”

👉Syntax : element.addEventListener(eventType, callbackFunction, options);
  
   ✅ eventType → typ of evts like "click", "mouseover", "keydown"
   ✅ callbackfunction → fn. that will run when that event happens.
   ✅ options (optional) → Settings like { capture: true }, { once: true }, etc.


👉Why called Listener?
Because JS literally “listens” for an event (like click, keypress etc).
It stays alert, waiting for that event to happen.

What is onClick()?
✔️ onClick is an event handler (event listener) in JavaScript that runs some code when an element is clicked by the user.

Two ways to hanle onClick() event : 

1. Using HTML directly (Inline Event Listener)
   ex in html : <button onclick="alert('You clicked me!')">Click Me!</button>

2. Using JavaScript (Recommended - addEventListener)   

*/


function sayHii(){
    console.log("Hello Duniya");
}

function sayRam(){
    console.log("Shree Ram Jai Ram jai jai Ram");
}


        // Using onclick event 3rd method on h1 using .addEventListener()

const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');


// h1.onclick = sayHii;
// h1.onclick = sayRam;

// if we tried to add two onclick listeners like above, the second one will override the first and only second is applied.


         
        // applying event listeners 

/*        

h1.addEventListener('click', sayHii);
h1.addEventListener('click', function (){
    console.log('second hii');
});

*/

// both of above are applied simultaneously and none got overriden.

// ** IMP NOTE :> .onclick allows only 1 handler (overwritten), but .addEventListener('click',...) lets you add as many as you want!


        // to print a message in console when card is clicked

// card.addEventListener( 'click', function (){
//      console.log("you just clicked the card.");
// } );



// **Task :> when first card viz. '+'  is clicked a new card should be added with a serial number stating from 1 for the very first card.            

                      // using document.createElement()


let count = 1;

card.addEventListener('click',()=>{
     
     const newCard = document.createElement('div');
     newCard.classList.add('card');
     newCard.innerText = count++;  // post incrementation
     container.append(newCard);
});        


                      // using .cloneNode()

/*    

let count = 1;

card.addEventListener('click',()=>{
     
     const newCard = card.cloneNode();
     newCard.classList.remove('add-card');
     newCard.innerText = count++;  // post incrementation
     container.append(newCard);
});                         

*/     
