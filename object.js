const person = { name :"Abhisek" , age: 24 }
console.log(person)     //{name: 'Abhisek', age: 24}

console.log(person.name) 
console.log(person.age) 

//array inside object 
const person1 = { 
    name :"Abhisek" , 
    age: 24 ,
    hobbies : ["cricket" , "singing"]    
    }

    console.log(person1.hobbies) 

person1.gender = "male"
console.log(person1)
console.log(person1["name"]) // bydfault key is string in JS 


// two word key 
const person2 = { 
    name :"Abhisek" , 
    age: 24 ,
   "person hobbies" : ["cricket" , "singing"]    
    }

    console.log(person2["person hobbies"]) 

// variable key name 
    const key="email";
    const person3 = { 
        name :"Abhisek" , 
        age: 24 ,
       "person hobbies" : ["cricket" , "singing"]    
        }

        person3[key]="abhiseksahoo332gmail.com"
        console.log(person3)
        console.log(person3["person hobbies"]) 
       //{name: 'Abhisek', age: 24, person hobbies: Array(2), email: 'abhiseksahoo332gmail.com'}

console.log("****************************")
//loops in object 

for(let key in person3)
{
    console.log(person3[key])
}



for(let key in person3)
{
    console.log(`${key}: ${person3[key]}`);
}