const fs = require('fs');

// //File content
// const content = "Thiru- +91-98027364438, Luffy +32879 32784892";

// //File Path
// const filePath = 'contacts.txt';

// //Write to file
// fs.writeFile(filePath, content, (err)=>{
//     if(err){
//         console.error('Error writting file: ', err);
//         return;
       
//     }
//     console.log("File created successfully");
// });

// fs.mkdir('base', {recursive: true}, (err)=> {throw err});

console.log('1');
console.log('2');

//Blocking Operation || synchronous
const result = fs.readFileSync('contacts.txt', 'utf-8');
console.log(result);
console.log('3');
console.log('4');


//Non-Blocking Operation || Asynchronous




console.log('1');
console.log('2');

fs.readFile('contacts.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err); // Print the actual error message
    } else {
        console.log(res); // Print the content of the file
    }
    
});
console.log('3'); // This line will be executed after readFile completes
    console.log('4');
