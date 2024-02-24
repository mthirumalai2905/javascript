

// // function sayMyName() {
// // console.log("T");
// // console.log("H");
// // console.log("I");
// // console.log("R");
// // console.log("U");
// // }

// // sayMyName();

// // // function add(number1, number2){
// // //     console.log(number1 + number2);
// // // }

// // function add(number1, number2){
// //     let result = number1 + number2
// //     return result;
// // }

// // const result = add(3,5);
// // console.log("Result", result);

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// result = loginUserMessage();
// console.log(result);


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(20,32,43));

const user = {
    username: "Thiru",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);