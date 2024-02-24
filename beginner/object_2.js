// const tinderUser = new Object() Singleton object 
// const tinderUser = {} non-singleton object


const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "thiru",
            lastname: "nambi"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "luffy@gmail.com",
    },
    {
        id: 2,
        email: "zoro@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedOut'));