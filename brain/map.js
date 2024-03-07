// let arr = [1,2,3,"hello",{key: "name", value: "id"}];

// arr.push(1);
// console.log(arr);

// const doubly = arr.map(num => num * "2");
// console.log(doubly)

// console.log(arr.filter(num => num > 10));

// console.log(typeof arr);
// console.log(typeof []);
// console.log(typeof "");
// console.log(typeof doubly);


// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);

// const items =  [
//     {name : 'Shoes', price: 50},
//     {name : 'T-shirt', price: 20},
//     {name : 'Jeans', price: 70},
//     {name : 'Socks', price: 10}
// ];

// //Using reduce() to calculate the total cost of items
// const totalCost = items.reduce((accumulator, currentItem) => {
//     return accumulator + currentItem.price
// }, 0);

// console.log(totalCost);

const defaultValue = 'Default Value';
const value1 = null;
const value2 = undefined;
const value3 = 'Non-Null Value';

const result1 = value1 ?? defaultValue;
console.log(result1);
const result2 = null ?? defaultValue;
console.log(result2);
const result3 = value2 ?? defaultValue;
console.log(result3);
const result4 = value3 ?? defaultValue;
console.log(result4);

console.log(typeof value1);
console.log(typeof value2)

const fint = null ?? undefined ?? defaultValue;
console.log(fint)