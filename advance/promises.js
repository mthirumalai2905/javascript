const promiseOne  = new Promise(function(resolve, reject){
    //Do an async task 
    // db calls, cryptography related tasks, network calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
})
.then(function(){
    console.log("Async 2 Resolved")
})


const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai@example.com"})
    }, 1000)
})

PromiseThree.then(function(user){
console.log(user);
})


const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; // Changed to false to resolve the promise
        if(!error){
            resolve({username: 'thirumalai', password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

PromiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected")
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "thirumalai", password: "21345"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive();

//async function getAllUsers(){
  //try{
    //const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //const data = await response.json()
    //console.log(data);
  //} catch(error){
   // console.log("Error", error);
  //}
//}

//getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


//////////////////////////IMP//////////////////
// you can see that above code's output we get the fetch reposne 
// very first then we get the responses for promises