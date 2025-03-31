// Note:> (a). The forEach() method is used to iterate over an array and execute a function for each element. It is a cleaner alternative to the traditional for loop.

// (b). The forEach() does not return anything (undefined). It simply executes the callback function for each element in the array.



const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

/*
fruits.forEach(function(fruit) {
    console.log(fruit);
})
     */

// here we can see that the forEach is a HOF as a function is being passed in it.

              // using arrow function

fruits.forEach( (fruit) =>{
    console.log(fruit);
} );   

//here fruit is a callback funtion.    


                // we can also get the indexes respectively

fruits.forEach( (fruit, index) =>{
        console.log(index, fruit);
} );                 


               //by passing a named function.

            // but this method is not that much commmon.

    function abc(el){
        console.log(el);
    }           

    fruits.forEach(abc);