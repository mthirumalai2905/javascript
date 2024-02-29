// for of


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world !";
for(const greet of greetings){
    console.log(greet);
}


//Maps

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', "France");

console.log(map);

for(const [key, value] of map){
    console.log(key + " " +value)
}

// const myObject = {
//     'game' : 'NFS',
//     'game1' : 'COD', we use for in loop for objects
//     'game2' : "GTA"
// }

// for(const [key, value] of myObject){
//     console.log(key + value);
// } 

