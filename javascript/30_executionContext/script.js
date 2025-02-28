 debugger;

sayHi();

const userName = "Anurag"; // in script
const userAge = 25;

var degree = "engn.";  // not in script but in global .

function sayHi(){
    const a = 14;
    const b = 125;
    
    // console.log(a,b);

    let sum = addTwoNumber(a,b);
    console.log(sum);


    console.log("Hii");
}

function addTwoNumber(x,y){
         
    return x+y;
}

console.log("Program ended.");