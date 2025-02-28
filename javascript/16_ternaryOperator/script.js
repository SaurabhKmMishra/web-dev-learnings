

// debugger


// const userName=5<2?"Saurabh":"Procodrr";
// console.log(userName);


// const gender='F';
// const userMessage=`${gender.toLowerCase() === 'f' ? 'She' : 'He'} is a college student.`;
// console.log(userMessage);


// const result = null ? 'saurabh' : '' ? '12' : 0;    

/* 
    First Condition (null ? 'saurabh' : ''):

    null is a falsy value in JavaScript.
    Since null evaluates to false, the ternary operator moves to the value after the colon (:), which is ''.
    Second Condition ('' ? '12' : 0):

    '' (an empty string) is also a falsy value in JavaScript.
    Since '' evaluates to false, the ternary operator moves to the value after the colon (:), which is 0.

*/
// console.log(result);


let favColor =prompt(" What is your favorite color ? " , "enter your fav color here ");
switch( favColor.toLowerCase() ){
      case "red" :console.log("Red is a passionate color!");
                 break;
      case "blue" : console.log("Blue is calming and serene.");
                             break;
      case "green" : console.log("Green symbolizes nature and growth.");
                              break;
      default :  console.log(` ${favColor} is also my favorite color `);
}


