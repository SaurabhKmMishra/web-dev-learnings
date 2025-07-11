
const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const addcardBtn = document.querySelector('.card');
const input = document.querySelector('input');
const form = document.querySelector('form');

/* Event simulation in JavaScript means programmatically creating and dispatching events (like clicks, keyboard input, form submissions, etc.) to imitate user interaction.

This is useful for testing, automating UI behaviors, or triggering events under specific conditions.  */


let count = 1;

addcardBtn.addEventListener('click',()=>{
     
     const newCard = document.createElement('div');
     newCard.classList.add('card');
     newCard.innerText = count++;  // post incrementation
    //  newCard.innerText = `Ram`;  

     container.append(newCard);

});        


            // Understanding click event simulator

                // 👉Use of elememnt.click()

// In JavaScript, the .click() method is used to programmatically trigger a click event on a DOM element, as if the user had clicked it with a mouse.       

// addcardBtn.click(); // clicks addbtn one time resulting in firing evtLisnr on it.

/*

const intervalId = setInterval( () => {
    if(count > 99) {
        clearInterval(intervalId);
    }
    addcardBtn.click();
}, 5);

*/

// the line code above clicks the addcardBtn like as it was clicked every two seconds.







            // Understanding focus event simulator

                // 👉Use of element.focus()
                // 👉Use of element.blur() 

              
// if we wants to focus on a input field we can use .focus() method to do so.

// the opposite of focus method is .blur() method, it is used to unfocus the element.

/*

setTimeout(  () => {
     input.focus();
}, 1000);


setTimeout(  () => {
     input.blur();
}, 3000);

*/  // Above code will focus the i/p field just 1sec after pg load and then it will be unfocused two second after it.





                // Understanding Submit Event Simulator

                // 👉Use of form.submit()

 // if we set type='submit' on button in a form, clicking on it will submit the form.
 
 //  Also if we set nothing still it will behave same b/c a btn's by default type is submit in a form.

// the same could be done using js by form.reset() method.      
            
/*

setTimeout(  () => {
    form.submit();
    console.log('form submitted');
    // check preserve log to see above message in console.
}, 3000);            

*/


                   
                // Understanding Reset Event Simulator

                // 👉Use of form.reset()

                
// if we set type='reset' on button in a form, cicking on it will reset all of the i/p fields in a form.

// the same could be done using js by form.reset() method.

/*

setTimeout(  () => {
    form.reset();
    // will reset the form only once just after 4 sec of submition.
}, 4000);  

*/