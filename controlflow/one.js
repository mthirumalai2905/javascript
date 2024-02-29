// if statements

const isUserLoggedIn = true;
const temperature = 41;


// if( temperature < 41){
//     console.log("temp is less");
// } else {
//     console.log("temp is greater");
// }

// const score = 200

// if(score > 100){
//     const power = "fly";
//     console.log(power);
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const logggedInfromEmail = true;

if(userLoggedIn && debitCard && 2==2){ 
  console.log("Allow to buy course");
}

if(loggedInFromGoogle || logggedInfromEmail){
    console.log("User logged in");
}


