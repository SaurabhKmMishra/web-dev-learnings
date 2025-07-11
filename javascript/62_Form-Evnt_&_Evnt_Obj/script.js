const usernameInput = document.querySelector('#username');    
const paragraph = document.querySelector('p'); 
const form = document.querySelector('form');           

// click event is fired once if clicked once

/*

usernameInput.addEventListener('click', () => {
console.log('input field clicked.');
});

*/

// whereas When we double-click an element, two click events are fired first, one for each click, and then a dblclick event is fired.

/*

usernameInput.addEventListener('dblclick', () => {
console.log('input field double clicked.');
});  

*/




         // ** we can also add an 🔵input event on input field. **


    /*

    > The input event is fired every time the value of the input changes — when the user types, deletes, or pastes something.
    
    > 🔶The event object carries all useful info about the event — most importantly, Whenever an input event fires.
    
    > event.target.value gives you the latest text inside the input.
    
    > target :> is the elm on which event is applied.

    > Also we can name the event Object by our own. 
    
    */

    // code for above

/*
usernameInput.addEventListener('input', (e) => {

    console.log('the event obj here is: ',e);
    console.log('And you have typed :> ', e.target.value); // latest text inside the input.

    paragraph.innerText = e.target.value;  // replaces the para innertext in html in realtime.
});

*/


                // 🔵'change' event occurs when the value of an input element changes and the focus moves away (blurs) from that element.

/*

usernameInput.addEventListener('change', (evt) => {

    console.log('You have typed :> ', evt.target.value); 
    //✅ Here, the event fires only after you type something, then click outside or press Tab.

    paragraph.innerText = evt.target.value; 
});

*/

// Note: 📝 The input event fires on every keystroke, while change fires only after leaving the field.






                                    
/* 🔵'focus' event (When element gets focus)
    
    ✔️ When does it fire?
            When an element (like input, textarea, select) gets clicked or selected, i.e., the cursor goes inside the field.        
*/      

/*

usernameInput.addEventListener('focus', (evt) => {

    console.log('You have typed :> ', evt.target.value); 
    //✅ This will log when the user clicks or tabs into the field.

});

*/




/* 🔵'blur' Event (When element loses focus)

    ✔️ When does it fire?
            When an element loses focus — like when the user clicks outside the input box or presses Tab to leave the field. 
*/

/*

usernameInput.addEventListener('blur', (evt) => {

    console.log('You have typed :> ', evt.target.value); 
    //✅ This will log when the user leaves (blurs) the field.

    paragraph.innerText = evt.target.value; 
});

*/





/*

form.addEventListener('click', (e)=>{
     console.log(e);
});

*/

// we can add click, focus, blur, change, etc events on several tags inside the form.

// but ✔ Only the <form> tag can handle the 'submit' event and also the rest all of the events possible but ❌ You cannot apply the submit event on inputs or buttons directly.

/*

form.addEventListener('submit', (e) => {
    console.log('Form Submitted.'); 
    
    // this message is not seen unless log is preserved from setting as with the submission the message got erased from console in milli sec as the page got refreshed with the submission.
});

*/







// > 🎯 Also if we wants to stop form submission using JS logic? Use event.preventDefault() in submit event listener or click event listener.

/*
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('Form Submitted.'); 

    // ✔ When you click the submit button — this message will log instead of submitting the form b/c of .preventDefault() called on event
    
});

*/





                   // Understanding Form Data 
/*

🔶 What is FormData?
        ✔ FormData is a built-in JavaScript object that makes it super easy to collect form data.

        ✔ It gathers all the input fields (name & value) of a form and stores them as key-value pairs — just like a Map.

🔶 What is .entries()?
✔ The .entries() method returns an iterator containing key-value pairs from a data structure.

✔ Can be used on:

            Objects (via Object.entries()), Arrays, Maps, FormData        

*/         


form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    const myFormData = new FormData(form);

    console.log(myFormData.entries()); // an iterator containing key-value pairs from a data structure.

    for(const p of myFormData.entries()){  // iterator getting iterated
        console.log(p);
    }    
    
});






                       // event.target vs event.currentTarget

/*

form.addEventListener('click', (event) => {
      
     console.log(event.target);
     console.log(event.currentTarget);


});                

*/

/* 🎯 1-Line difference b/w them: 

        ✔ event.target = actual clicked element.

        ✔ event.currentTarget = the element handling the event (where the listener is attached).
        
*/