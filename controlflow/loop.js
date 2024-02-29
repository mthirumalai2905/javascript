// // for loop



// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }


// for(let i = 0; i <= 10; i++){
//     for(let j = 0; j <= 10; j++){
//     console.log(i);
//     console.log(j);
//     }
// }

let myArray = ["flash", "batman", "superman"]

for(let index = 0;index < myArray.length; index++){
    console.log(myArray[index]);
}

for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`got the index ${index}`);
        continue;
    }
    console.log(index);
}

// continue leaves the 5 and prints the inner scope
// break stops after 5
// normal prints all