// Primitive

    // 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt.

    const score = 100 ;  //Number
    const scoreValue = 10.3;  //Number
    const isLoggedIn = false; //Booleans
    const outsideTemp = null ; //null
    let userEmail; //Undefined
    const id = Symbol(123); //Symbol
    const bigNumber = 123n ; //BigInt 
    
//Refference Type(Non Primitive)

    //Array, Objects, Functions.
    
    const heroes = ['Spiderman','Iron Man','Doga'] ; //Array
    let Obj = {
        // Object
        name : 'Himan',
        age : '20'
    };

    const myFunction = function(){}; //Function

//*************************************** */
                //Memory

// 2 Types of memory : Stack(Used in Primitive datatypes) and Heap(Used in Non Primitive Datatypes)

let Ram = 22; // Stored in Stack

let Game = {
    // Stored In Heap
    Points : 23,
    UserName : 'Himan',
}
