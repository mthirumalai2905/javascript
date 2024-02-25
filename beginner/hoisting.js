// function one(){
//     const username = "Thiru";

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     // two()
// }

// one()

// if(true){
//     const username = 'thiru'
//     if(username === "thiru"){
//         const website = " oyo"
//         console.log(username + website);
//     }
//     // console.log(website); out of scope
// }
// // console.log(username); out of scope +


/////////////////////////INTRESTING//////////////////


addone(5);
function addone(num){
       return num + 1;
}
// console.log(addone(5));

//hoisting
addTwo(5);
const addTwo = function(num){
    return num + 2;
}
