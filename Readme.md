
## In JavaScript, falsy values are those that evaluate to false when converted to a boolean context. Here's a list of falsy values in JavaScript:

```false```: The boolean value false itself.

```0```: The number 0.

```''```: An empty string.

```null```: The null value.

```undefined```: The undefined value.

```NaN```: Not-a-Number.
<br />

## In JavaScript, truthy values are those that evaluate to true when converted to a boolean context. Here's a list of some common truthy values:

```true```: The boolean value true itself.

```Any non-empty string```, including strings containing only whitespace characters.

```Any number other than 0```, including positive and negative numbers, as well as Infinity and -Infinity.

```Objects: Any non-null object```, including arrays and functions.

```The new Date() object```, even if the date represents a zero timestamp.

The ```new Object()``` object.

## Implicit and Explicit Function
```Implicit```: doesnt need ```return``` keyword

```Explicit```:  needs ```return``` keyword  ( Ex always need to be returned)

## Immediately Invoked Function Expression

```javascript
(function chai(){
    console.log(`DB Conneccted`);
})()

//()()
// first bracket for funcction definition
// seccond bracket for function declaration
```

## Hoisting

```javascript

//Hoisting
console.log(addone(5));
function addone(num){
    return num + 1;
}

//Error
// console.log(addTwo(5))
// const addTwo = function(num){
// return num + 2;
// }

```


## Nullish coalescence operator(" ?? ")

```javascript
const defaultValue = 'default';
let someValue = null;

const result = someValue ?? defaultValue;
console.log(result); // Output: 'default'

const data = {
    user: {
        name: 'John',
        age: null
    }
};

const userAge = data.user.age ?? 'Age not available';
console.log(userAge); // Output: 'Age not available'

function greet(name) {
    const userName = name ?? 'Anonymous';
    console.log(`Hello, ${userName}!`);
}

greet(); // Output: 'Hello, Anonymous!'
greet('Alice'); // Output: 'Hello, Alice!'


const userInput = '';
const defaultValue = 'Default Value';

const selectedValue = userInput ?? defaultValue;
console.log(selectedValue); // Output: '' (userInput is an empty string, so it's not null or undefined)
```

## Lexical Scoping
Lexical scoping, in simple terms, means that when you define a function inside another function,
the inner function has access to the variables and parameters of the outer function,
even after the outer function has finished running.

```javascript
function outerFunction() {
    var outerVariable = 'I am outer!';

    function innerFunction() {
        console.log(outerVariable);
    }

    innerFunction(); // Call the inner function
}

outerFunction(); // Call the outer function

```
