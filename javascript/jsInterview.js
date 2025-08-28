// let arr = [,,,]  // length????
// console.log(arr.length)


//Qn. Sort this array?

let arr=[1,18,9,81,98,124,78]

// console.log(arr.sort()) // to sort ????



// Qn.implement map and what is it?

// Map method is used to get a new array from an existing array by applying a function on every array elements.

// let newArr = arr.map( elem => {
//     return elem.toString();
// } );

      // OR

let newArr = arr.map( item => item.toString());      

console.log(newArr);


// Qn. what will be o/p returned if we apply a condition of item > 100 on an array both on map and filter.

// let newArr2 = arr.map( item => item>100);  // returns an array with false as elements for all except true for ones>100.

let newArr2 = arr.filter( item => item>100);  // returns 124

console.log(newArr2);



// qn. diff. b/w slice() and splice() method.

// slice :> used to extract a subarray from an array without modifying it.

// splice:> used to remove the elements from an actual array given from an starting to an ending index. 




// Qn. emptying a complete array????

let arr3 =[1,18,9,81,98,124]

// arr3 = null;
// arr3 = undefined;
arr3 = 0
// arr3 = '';

console.log(arr3);



// Qn. what will happen if you do arr3.length = 0?

arr3.length=0;
console.log(arr3); // 0


// Qn. give me mutiple ways to create an array object???????

// let arr4 = [1,2,3,6,4] //1st (both could be not enough...)

// 2nd 

// let arr4 = []    
// arr4.push(25)
// arr4.push(12)

// console.log(arr4);



// Qn. return unique ones from arr below???

let arr4=[1,18,9,81,98,124,78,78,81]

let uniqueArr = [];

arr4.forEach( elem => {
    let duplct = 0;

    arr4.forEach( item => {
        if(item==elem) duplct++;
    });

    if(duplct<2){
        uniqueArr.push(elem);
    }

});

console.log(uniqueArr);





