
const container = document.querySelector('.container');
const addcardBtn = document.querySelector('.add-card');

let count = 1;


/* ✅ What is Event Delegation?
      
     :> Event delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, you add a single event listener to their common parent. The parent listens to events bubbling up from its children.
     
     :> 🧠 Why Use Event Delegation?
     
     > Better performance (especially when many child elements are present).

     > Dynamic elements: Works even if new elements are added later.

     > Cleaner code (fewer event listeners). 
     
*/


          // Below is the example to understandd event delegation


// **Task : to delete an added card by clicking on it.

// one method of that could be is by adding click evt on each added card viz. every child to remove it when clicked. i.e, done below:


addcardBtn.addEventListener('click',()=>{
     
     const newCard = document.createElement('div');
     newCard.classList.add('card');
     newCard.innerText = count++;  // post incrementation
     
     container.append(newCard);

     // Functionality to remove an added card when clicked on it is :>
        
     // newCard.addEventListener('click', () => {
     //      newCard.remove();
     // });
     
     
});   




// But another efficient method to do so is by addig an evtListener on the parent elemt itself.

container.addEventListener('click', (e) => {

    if(e.target.classList.value === 'card'){
        e.target.remove();
     }
    
});