const fs = require('fs');


// Sync.... Write //Blockingckig
// fs.writeFileSync('./test.txt', 'Hello World');

//Async.... Write // Nonn-Bloking
// fs.writeFile('./test.txt', "Hello", (err) => {})

//Sync.... Read
// const result = fs.readFileSync('./contacts.txt', 'utf-8')
// console.log(result);

//Async.... Read
// fs.readFile('./contacts.txt', 'utf-8', (err, result) =>{
//     if(err){
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// })



fs.appendFileSync("./text.txt", new Date().getHours().toLocaleString());


// fs.unlinkSync('./contacts.txt')

console.log(fs.statSync("./test.txt"));
fs.mkdirSync('my-docs/a/b', {recursive: true})










// Learn the concept of Explicit and implicit returns in simple terms
//explicit fucntions uses return keywordwheareas implicit doesnt
//Learn about the read and write stream too



