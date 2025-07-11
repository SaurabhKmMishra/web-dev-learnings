
const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const addCardButton = document.querySelector('.card');

let count = 1;

// We have read about dblclick and click evts which are two of the some mouse events.

            // some others 🎯mouse events are explained here.

/*

addCardButton.addEventListener('click',()=>{
     
     const newCard = document.createElement('div');
     newCard.classList.add('card');
     newCard.innerText = count++;  // post incrementation
     container.append(newCard);
});        

*/



                // 3.🔷 'mousedown' evt


/*   :> Diff. b/w 'click' & 'mousedown' evt

    🔶 1. mousedown Event:

    ✔ Fires when the mouse button is pressed down (but not yet released).

    ✔ Happens immediately when you press the button — before you release it.

    ✔ It fires even if you do not release the button (for example: you press and hold).


    🔶 2. click Event:

    ✔ Fires when you press and then release the mouse button on the same element.

    ✔ Only fires after a full press + release action happen on the same element.

    ✔ If you press but move away or release outside, click will NOT fire, but mousedown already did.

*/

// addCardButton.addEventListener('mousedown',()=>{
     
//      const newCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.innerText = count++;  // post incrementation
//      container.append(newCard);
// });  





                    // 4.🔷 'mouseup' evt

/* 
    :> Press on element A, release on element B — mouseup fires only on B, NOT on A or both.

    :> Diff. b/w 'click' & 'mouseup' evt

    > mouseup: fires on the elem on which mouse button is released - no matter pressed anywhere.
    
    > mousedown: fires Only after press & release on same element.
*/

// addCardButton.addEventListener('mouseup',()=>{
     
//      const newCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.innerText = count++;  // post incrementation
//      container.append(newCard);
// });  
                    




                  
                   // 5.🔷 'mouseenter' evt


/*  🔶mouseenter Event in JavaScript?

    ✔ mouseenter fires when the mouse pointer enters the boundary of an element.

    ✔ It triggers only once when you enter that element’s area — and does not fire again if you move over child elements inside it. 
    
*/

// addCardButton.addEventListener('mouseenter',()=>{
     
//      const newCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.innerText = count++;  // post incrementation
//      container.append(newCard);
// });                      





                   // 6.🔷 'mouseleave' evt
/*  
    🔶 What is mouseleave Event in JavaScript?

    ✔ mouseleave fires when the mouse pointer leaves the boundary of an element.

    ✔ It triggers only once when you completely exit that element — and does not fire again when moving over child elements inside it.      
    
*/
                    
// addCardButton.addEventListener('mouseleave',()=>{
     
//      const newCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.innerText = count++;  
//      container.append(newCard);
// });                     


                  
                    // 7.🔷 'mousemove' evt

/* ✔ mousemove fires continuously when the mouse pointer moves over an element.

✔ It fires every tiny movement step — not just once — as long as the mouse stays over the element. */

// addCardButton.addEventListener('mousemove',()=>{
     
//      const newCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.innerText = count++;  
//      container.append(newCard);
// });  





                    // 8.🔷 'mouseover' evt 

/*  :> What is mouseover?

    ✔ mouseover event fires when the mouse enters an element OR any of its child elements.

    ✔ That means:

        >  It fires when you enter the element,

        >  AND again when you move over any children inside it and vice-versa. 
    
    :> Difference with mouseenter
    
    ✔ mouseenter event fires only once when the pointer enters the element itself,

    ✔ Not triggered when the pointer moves into inner children.*/    

// addCardButton.addEventListener('mouseover',()=>{
     
//      const newCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.innerText = count++;  // post incrementation
//      container.append(newCard);
// });     
                     




                   // 9.🔷 'wheel' evt

/*
    ✔ wheel event fires when the mouse wheel (or touchpad scroll) is rotated.

    ✔ Happens when the user scrolls up or down — or even sideways — using a wheel or touchpad gesture.   */

                   
// addCardButton.addEventListener('wheel',()=>{
     
//      const newCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.innerText = count++;  // post incrementation
//      container.append(newCard);
// });                        






                // 💡'drag' evt

/*  🎯 What is the drag Event?

    ✔️ The drag event fires repeatedly when you drag an element that is draggable.
    
    ✔️ You must set draggable="true" in html for the element to be draggable.

    ✔️ drag-related events belong to the Mouse Event category.

    ✔️ Why? Because the drag-and-drop API is designed for desktop mouse interaction — not for touch or pen by default.
    
*/     

/*

h1.addEventListener('drag', (e) => {
    console.log(e);
   console.log('h1 is getting to be dragged');
});

*/





                // Some 🎯Non-mouse events



                // 🔍 'scroll' event viz. not a Mouse Evt.

/*  The scroll event fires when the user scrolls an element or the entire page.
    
    > It is a UI Event.

    For example:
                When you use the mouse wheel or swipe the trackpad and the page moves up or down — the scroll event is triggered.


    ✅ Where can you use it?
                > On window: Detect when the page scrolls.

                > On an element with scrollable content (div, section, etc.): Detect when that particular box is scrolled.

*/

/*

addCardButton.addEventListener('mousemove',()=>{
     
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText = count++;  // post incrementation
    container.append(newCard);
}); 

document.addEventListener('scroll', () => {
    console.log('scroll event got fired');
});

*/

// in the above example of 'scroll' evt first we fired a mousemove evt to get a scrollbar in the document by adding some card buttons.

// then we implemented the scroll evt on document by scrolling and it's o/p is seen in console.


                 





                // 📱'touchstart' event


/*  ✔️ touchstart is an event that occurs when a finger touches the screen (on smartphones, tablets, or touch devices).

    ✔️ It fires the moment the finger makes contact — even before lifting or moving the finger. 
    
    > It is a UI Event.
*/        

/*
addCardButton.addEventListener('touchstart',()=>{
     
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText = count++;  // post incrementation
    container.append(newCard);

}); 





/*                  
                   📱 'touchend' evt
                
    ✔️ The touchend event fires when the user lifts their finger off the screen, after touching an element.

    ✔️In simple words:
    "Finger up / touch released" event. 



                    📱 'touchmove' evt

   ✔️ The touchmove event fires when the user moves their finger around on the screen after touching down.

   ✔️In simple words:
   "Finger sliding on screen" event.
    
*/







                     // 💡'pointermove' evt

/*  
    🎯 What is pointermove?

    ✔️ pointermove event fires whenever a pointer (mouse, pen, touch, stylus) moves over an element.

    ✔️So it covers: Mouse (mousemove), Touch (touchmove), Pen/Stylus (on tablets), Other input devices   
    
    ✅ Why use pointermove?
    
    ✔ One event to handle all input types — instead of separately using: mousemove (for mouse), touchmove (for touch), Pen events.
    
*/                     

addCardButton.addEventListener('pointermove', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText = count++;  // post incrementation
    container.append(newCard);
});


/* :> Similarly are pointer events stated below: 
    
   🔍 Most Commonly Used:
    ✔ pointerdown — Like mousedown / touchstart
    ✔ pointermove — Like mousemove / touchmove
    ✔ pointerup — Like mouseup / touchend
    ✔ pointercancel — Like touchcancel
    ✔ pointerover — Like mouseover
    ✔ pointerout — Like mouseout


*/