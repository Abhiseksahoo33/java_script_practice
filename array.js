
//clone array 

let array1=["item1" , "item2" , "item3"]
console.log(array1)       //['item1', 'item2', 'item3']

// by slice 
let array2=array1.slice(0)   // speed mostly used
console.log(array1)     //['item1', 'item2', 'item3']

// by concat
let array3=[].concat(array1)
console.log(array3)    //['item1', 'item2', 'item3']

//by spread operator
let array4=[...array1]
console.log(array4)    //['item1', 'item2', 'item3']

let array5=array1.slice(0).concat(["item4" , "item5"])
console.log(array5)     //['item1', 'item2', 'item3', 'item4', 'item5']


let array6=[...array1,"item7"]
console.log(array6)   // ['item1', 'item2', 'item3', 'item7']

let array7=[...array1,...array6]
console.log(array7)     //['item1', 'item2', 'item3', 'item1', 'item2', 'item3', 'item7']


//loop in array

for(var i =0 ; i<10 ; i++)
console.log(i)

let fruits=["orange" , "apple" , "mango" , "grapes"]
console.log(fruits)

console.log(fruits[5])  // undefined  out of index in array 

console.log(fruits.length)

for(var i=0 ; i<= fruits.length-1 ; i++)
console.log(fruits[i].toUpperCase()) //  uppercase convertion

//for of loop  widely used 
for(let fruit of fruits)
{
    console.log(fruit)
}

//for in loop
for(let index in fruits)
{
    console.log(fruits[index])
}

// Array Destructuring 

let myarray= ["value1", "value2","value3", "apple" , "mango" , "grapes"]
let [myarray1 ,,myarray2 , ...myarray3]=myarray
console.log(myarray1) //value1
console.log(myarray2) //value2
console.log(myarray3) 
