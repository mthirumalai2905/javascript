const fs = require('fs');


// Sync.... Write
// fs.writeFileSync('./test.txt', 'Hello World');

//Async.... Write
// fs.writeFile('./test.txt', "Hello", (err) => {})

//Sync.... Read
// const result = fs.readFileSync('./contacts.txt', 'utf-8')
// console.log(result);

//Async.... Read
fs.readFile('./contacts.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log("Error", err);
    } else {
        console.log(result);
    }
})





// Learn the concept of Explicit and implicit returns