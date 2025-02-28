function addTwoNumbers(a,b){
    return a+b;
}

const sum = addTwoNumbers(5,4);

console.log(`The resultant sum is : ${sum}`); // o/p:9

console.log(addTwoNumbers(addTwoNumbers(6,4) , addTwoNumbers(12,8)));  // o/p :30