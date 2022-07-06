"use strict";


// comments shortcut (cctrl + /)

console.log("Hello Abhisek")
console.log('Hello Abhisek')
console.log(`Hello Abhisek`) ; // ; optional


//declare variable 

var first_name = "Abhisek";   // first_name   snakecase writting 
console.log(first_name) 

first_name="Sahoo"
console.log(first_name) 


var firstname ="another variable other than first"
console.log(firstname) 

var no = 10
console.log(no + 10)
console.log(no *  10)
console.log(no ** 10) //  root
console.log(no ** 0.5)  //square root

// first_name   snake case writting 
//firstName     camel case writting 

let variable // use let always 


let name ="name "
// let name="vhc"  Identifier 'name' has already been declared

const pi= 3.141
// pi="23.1"   // uncaught Typeerror  : Assignment to constant variable.


console.log(pi* 2)

let FirstName ="Abhisek ";
console.log(FirstName[2])  // every character has a index 

console.log(FirstName.length) 
console.log(FirstName[8]) // undefined for space 

let Second ="    sahoo      ";
console.log(Second.length) 
let newName = Second.trim();   // will create a new string 
console.log(newName.length) 

console.log(newName.toUpperCase()) // SAHOO
console.log(newName.toLowerCase()) // sahoo

let var1= "Longtense";
let slicetxt= var1.slice(0, 2);

console.log(slicetxt) //  Lo
console.log(var1)

console.log( typeof var1) // string 

// Number to String

        let age =20
        console.log( typeof age)

        age = age + "";
        console.log( typeof( age))

//String to number 

        age =+"35"
        console.log(typeof age)




