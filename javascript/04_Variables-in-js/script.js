        
     // 1. Method of creation of variables using let.



let username='saurabh mishra ';
let userIntro='my name is '; // camelCase method of naming
let user_age= 19;//snakecase method of naming.

console.log(typeof username);


let isHappy=true;

// console.log(typeof user_age);
// console.log(typeof isHappy);


username=100;
console.log(typeof username);


let aboutUser = userIntro + username + 'and i am ' + user_age;  //concatenation 
console.log(aboutUser);

let a=undefined;

// console.log(typeof a);     // 'undefined'






       // 2. Method of creation of variables using const

//  the var created using const can't be just left uninitialized.
// also, the var once created  and ddefined can't be modified.


       

const hoursInDay=24;

// hoursInDay=12;

const ab='skm';
console.log(ab);

// const k;

// ab=45;

const tdF=23.0006;
console.log(tdF);






        //3.  Method of using var keyword for variable creation.


    // Generally same use to that of the let keyword.
    // with some slightly changes.


    var jk='pogo';
    jk=34;

    console.log(jk);







          // Differentiation b/w let/const/var created variables.


 // NOTE  1. ( Scope based differ.) -> On calling outside of a block both let and const variables throws error saying 'not defined' as they are 'block-scoped'.
    
    //whereas those created using var are functional-scoped and they are hence accessible in the whole function. Also, If they are declared outside of any function, they are globally scoped.


    {let mm=24;}   
    // console.log(mm);   


    {const kk='skj';}   
    // console.log(kk);   


    {var newOne='kya hal hai meri jaan?'}   
    console.log(newOne);    //runs properly as var is functional scoped. 



 // NOTE 2. (Hoisting based diff.) -> we can use var even before   declaring it as it is hoisted and initialized with 'undefined'.
 
 
         //  case 1 ->

                        //throws reference error                 

         // console.log(at);
         // console.log(bt);    

         let at=97;
         const bt='kite';


           //whereas, those with let and const are also hoisted but they are not initialized with 'undefined'.   

           //Instead they enter a state known as Temporal Dead Zone(TDZ),which means they can't be accessed until the line  of their declaration is reached as a result they throw a 'Reference Error'.
    


             //case 2 ->

                   // no error and initialized with undefined.

              
                   console.log(ob);   //prints undefined as the line of declaration is not reached.
                   var ob=1.2549;
  


   

    


































    




   


    










































