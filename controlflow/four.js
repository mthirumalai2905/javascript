// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by app'
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ['js', 'ruby', 'java', 'cpp', 'js']

for(const key in programming){
    console.log(`${key} is ${programming[key]}`);
}

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', "France");

for(const key in map){
    console.log(key);
}

const coding = ['js', 'R', 'rust', 'c']

// coding.forEach(
//     function (value){
//          console.log(value);
//     })

// coding.forEach((item)=>{
//    console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item, index, arr)=>{console.log(item, index, arr);})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }, 
    {
        languageName: "Ruby",
        languageFileName: "R"
    }

]

myCoding.forEach((item) => {
    console.log(item.languageName);
})