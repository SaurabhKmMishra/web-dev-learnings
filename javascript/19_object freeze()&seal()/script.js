const user = {
    firstName : 'Adarsh',
    lastName : 'Singh' ,
    address : {
        city : 'Deoria' ,
        pinCode : 274001 ,
        state : 'utttar pradesh' ,
        moreDetails : {
            streetNumber : 4 ,
            'ward-number' : 3 
        }, 
    },
    age : 15 ,
    isGraduate : false ,
};


Object.seal(user);

user.address.weather="Rainy";  // trying to add new key-value in the nested object is possible

//Object.seal() & object.freeze() in JavaScript applies only to the first level of properties of the object it is called on. It does not recursively seal nested objects. If you need to seal, or freeze nested objects, you must explicitly seal or freeze them separately.



        // Method for deletion of key-value pair or any nested object inside an object.

 delete user.firstName;  
// returns true if deleted else false.

 console.log(user);





                        // Use of object.seal().


    const thing = {
            property : 'rigid',
            item : 'chair',
        };                    

            //    In JavaScript, Object.seal() is used to seal an object, meaning:

        // 1. Prevents Adding or Removing Properties: You cannot add new properties or delete existing properties from the object after it is sealed.
        // 2. Allows Modification of Existing Properties: You can still modify the values of the existing properties, provided they are writable.  
    
        Object.seal(thing);  // thing object sealed now.

        thing.price="30";  // this line will make no changes to the obj. thing

        thing.item = "table";  // but this will update thing obj. as updation is allowed in case of obj.seal, to avoid which we needs to use obj.freeze().

        console.log(thing);


                   

                  // Use of object.freeze()

        
    const bank = {
                "bank-name":"sbi" ,
                branch:"new-delhi" , 
    };        
    
    Object.freeze(bank);
    
    bank.branch = 'chennai';  // trying to modify the bank-object key-value pair will produce no change in the object bank. 

    delete bank["bank-name"];  // trying to delete the bank-object key-value pair will produce no change in the object bank. 

    bank.estYear = "2001";    // trying to add new key-value pair will produce no change in the bank object as it has been freezed.

    console.log(bank);

         

                      






















