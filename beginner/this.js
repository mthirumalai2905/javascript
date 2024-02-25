// // // // const user = {
// // // //     username: "thiru",
// // // //     price: 999,

// // // //     welcomeMessage: function(){
// // // //         console.log(`${this.username}, welcome to website`); //current context
// // // //         console.log(this);
// // // //     }

// // // // }

// // // // user.welcomeMessage();
// // // // // user.username = "samb  ";
// // // // // user.welcomeMessage();

// // // // // console.log(this);

// // // function chai(){
// // //     let  username = 'thiru'
// // //     console.log(this.username);
// // // }

// // // chai();

// // const chai = () => {
// //     let username = "thiru";
// //     console.log(this.username);
// // }
// // // chai()




// // const addTwo = (num1, num2) => { 
// //     return num1 + num2
// // } // basic arrow function


// // //IMPLICIT RETURN

// // const addThree = (num1, num2) => (num1 + num2)
// // console.log(addTwo(3,4));


// const addTwo = (num1, num2) => ({
//     username: "thiru"
// })


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})