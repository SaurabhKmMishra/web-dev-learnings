console.log('program starts');

// debugger;

                //  USING OF WHILE LOOP. 

// let num =  0;

// while(num<5){
//     console.log("Hii");
//     num++;
// }


const friends = ['Ashwani' , 'Nikhil' , 'Keshav' , 'Ayushman' , 'Rizwan'];

let i=0;

while(i<friends.length){
    console.log(`${i+1}. ${friends[i]}`);
    console.log();

    i++;
}


                // USE OF FOR LOOP.

//  debugger;


// for(let i = 0; i<5; i++){
//     console.log(i+1);
// }                



for(let i = 0; i<=40; i++){
    if( i % 2 === 0 ){
        console.log(i);
    }
}
console.log('\n');




                 // USE OF DO-WHILE LOOP.
        // this loop atleast runs for a time.    
            
let j = 10;

do{
    console.log(j);
    j++;

} while(j<5);


console.log('program ended.');