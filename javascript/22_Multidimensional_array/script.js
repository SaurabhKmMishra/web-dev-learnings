const nameAndNumberList = [ ['Adarsh', 75], ['Akash', 90] ];

console.log(nameAndNumberList);

console.log(nameAndNumberList[1]);  // o/p :> ['Akash', 90]

console.log(nameAndNumberList[0][0]);  // o/p :> "Adarsh"

nameAndNumberList[1][5] = "Mango";

console.log(nameAndNumberList[1]); // ['Akash', 90, empty × 3, 'Mango']




                     // task of video

const ticTackToe = [

    ['X', null, null] ,
    [null, null, 'O'] ,
    ['O', null, 'X'] 

]    


// to access first row

console.log(ticTackToe[0]);

// to access second row

console.log(ticTackToe[1]);

// to access third row

console.log(ticTackToe[2]);