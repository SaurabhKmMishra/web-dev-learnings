const h1 = document.querySelector('h1');
const input = document.querySelector('input');


        // Understanding some keyboard events and event obj. properties
        
    // 🔷 There are three Main Keyboard Events: keydown and keyup & keypress.  
    
    

                // 1. UNDERSTANDING THE 'keypress' EVENT

/*  🔷 1. keypress event: (⚠️ Deprecated — avoid using)
 
✔ Fires only for printable (character-generating) keys like a, b, 1, space, etc.

✔ Does NOT fire for Ctrl, Shift, Alt, Arrow keys.

✔ This event is deprecated — use keydown instead.      */                


input.addEventListener('keypress', (e) => {
    // console.log(e);

    console.log(e.key); //Gives the actual key pressed ("a", "Enter", '*' etc.)

});               


/*

h1.addEventListener('keypress', (e) => {
    // console.log(e);

    console.log(e.key); //Gives the actual key pressed ("a", "Enter", '*' etc.)

});

*/

// Since 'input' is an focusable element but 'h1' is not. So, we use tabindex='0' on h1 in html and then focus it using shift + tab. 

//✔ tabindex="0" = make an element focusable by Tab (in natural order).




// generally the keypress is applied on window/document so that if we click/focus anywhere on the webpage, then our pressed key could be found.

/*

window.addEventListener('keypress', (evt) => {

    console.log('Value : ', evt.key);
    console.log('Code : ', evt.code);
    
});

*/


/*  🔶 event.key vs event.code :>

    > event.key:  The actual character or key value produced by the key press. for ex: 'a','A',"Enter", "Shift" etc.

    > event.code:  The physical key location on the keyboard (independent of language or shift key). for ex: "KeyA", "Enter", "ShiftLeft" etc.


    > Remember if we enter Uppercase letter, the key value will also be in same case as it is dependent on the basis of uppercase or lowercase. 

    > Whereas, the key code remains same for the same key be it in upper/lower case.
 
*/    






                // 2. UNDERSTANDING THE 'keyup' EVENT

/*  🔷 2. keyup event:>

✔ Fires when the key is released.

✔ Useful to detect when the user stops pressing a key.

✔ No matter how long you hold the key, keyup fires only when you release the key. */                
 
/*

window.addEventListener('keyup', (evt) => {

    console.log('Value : ', evt.key);
    console.log('Code : ', evt.code);
    

}); 

*/





                    // 3. UNDERSTANDING THE 'keydown' EVENT

/*  🔷 1. keydown event:

✔ Fires when the key is first pressed down.

✔ Fires for all keys — including Ctrl, Shift, Alt, etc.

✔ Repeats (auto-fires) if you hold the key. 

*/
                    
document.addEventListener('keydown', (evt) => {

    console.log('Value : ', evt.key);
    console.log('Code : ', evt.code);
    
});    



