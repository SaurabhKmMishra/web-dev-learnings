


                                                            //   Dialogue boxes in js
        
                        //       In JavaScript, dialogue boxes (or dialog boxes) are pop-up windows that can be used to communicate with the user. JavaScript provides three built-in types of dialog boxes:

              // 1. alert(message) in js.

    // alert("Click on ok below to continue.");

    
//  In JavaScript, the alert() function is used to display a pop-up dialog box with a specified message to the user. This function is often used to provide information, warnings, or feedback. 

// It pauses the execution of the script until the user dismisses the alert by clicking the "OK" button.

           






              // 2. confirm(message) in js.
    
    // confirm("Hello there");  


// The confirm() dialog box in JavaScript is used to display a message with two buttons: "OK" and "Cancel." It is commonly used when the developer wants to ask the user for confirmation before performing an action. 

// Based on the user's choice, the script can take different actions. for ex:- 
       
        // const stl = confirm("Are you fine or not?");

        // if(stl){
        //     alert("We feel happy to know that. ");
        // }
        // else{
        //     alert("we feel sorry for you.");
        // }



// Like alert(), the confirm() method also pauses the script execution until the user makes a decision.










                 //  3. prompt(message, defaultVale);

            //  where the defaultValue is optional working as  a pre displaying text for the input field. 

    let prompt_value = prompt(" Write your special mantra." , "Jai Shree Ram");    // here, "jai shree ram" is just working as a pre displaying text for the input field and is optional.

    console.log(prompt_value);


    // The prompt() function in JavaScript is used to display a dialog box that asks the user to input some text. It presents a text input field, along with "OK" and "Cancel" buttons.
    
    // The input from the user is returned as a string, or null if the user cancels.

    // syntax: prompt(message, defaultValue);

    // Parameters:
    // > message: A string that will be displayed as the message in the dialog box.
    // > defaultValue (optional): A default string that will appear in the text input field as a pre displaying text when the dialog is displayed.   


    // The result can be stored in a variable and used later in the code.for ex:-

            let namePreference = prompt("please, tell me your good name if you are intrested. ","enter your name here");
            
            if(namePreference !== null){
                alert("Hello Mr. " + namePreference + " you are very welcome!");
            }
            else{
                 alert("You canceled the prompt.");
            }


    // Use Case: Asking for simple user input such as names, ages, or other small pieces of data also, Rarely used in modern web applications, where custom modals are preferred for input forms.



                  



