
// const userName=prompt("Please enter your name."); 
// const userAge=+prompt("Please enter your age.");
//  const userAge=parseInt(prompt("Please enter your age."));


// const userName=prompt("Please enter your name.")||"procodrr"; 
// const userAge=parseInt(prompt("Please enter your age."))||22;


let userName=prompt("Please enter your name."); 
let userAge=+prompt("Please enter your age.");



// if(!userName){  // user sent null in i/p viz. he pressed cancel
//     userName="procodrr";
// }
// if(!userAge){   // if user sent a falsy value in i/p field.
//     userAge=22;
// }
 

if(userName){
    console.log(`Name: ${userName}`);
}

if(userAge){
    console.log(`Age:${userAge}`);
    
}

// debugger


// if(0<userAge  && userAge<18){
//     console.log(`${userName} is either playing or he in his school.`);
// }

// else if(userAge >= 18 && userAge<=24){
//     console.log(`${userName} is a college student.`);
//     console.log("and he is learning web dev.");
// } 

// else if(userAge>=25 && userAge<=45){
//     console.log(`${userName} is a working professional.`);
//     console.log("And he is a web developer.")
// }
// else if(userAge > 45){
//     console.log(`${userName} is a retired.`);
//     console.log("And he reads newspaper.")
// }

// else{
//     console.log("enter a valid age.");
// }


// we can also add a truthy value or a falsy value as a condition to the if condition block.

if(NaN){        // if any of falsy val added it will not run the internal code.
    console.log("didn't Runs");
}
else{
    console.log("hello world");
}


console.log("Program ended!!");






