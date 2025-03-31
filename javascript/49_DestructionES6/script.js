const colors = ['red', 'green', 'yellow', 'pink', 'black'];

/*
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
*/
 
// below is the replacement of the above code and it is possible just because of the destructuring on arrays.
const [color1, color2, color3] = colors;

const user = {
    name: 'Anurag',
    age:25,
    address:{
        city:'Bengalore',
        state:'Karnataka',
    },
};


