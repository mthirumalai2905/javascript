// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         console.log(`Username:  ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails()); 
// console.log(this);


// const promiseOne = new Promise();
// const date = new Date();

// new - constructor function 


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //console.log(typeof this);
    return this;
}

// const user1 =  User("thiru", 12, true);  //this user1
// const user2 =  User('chaiaurcode', 10, false); //this user2 completely overrides it
// console.log(user1)
// console.log(user2)


// hence we use this new ketword or constructot fucntion which makes a new instances naya copy deta hai 
const user3 =  new  User("thiru", 12, true);  
const user4 = new  User('chaiaurcode', 10, false); 
console.log(user3.constructor)
// console.log(user4)