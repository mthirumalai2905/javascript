
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

```Explicit```:  needs ```return``` keyword

## Immediately Invoked Function Expression

```javascript
(function chai(){
    console.log(`DB Conneccted`);
})()

//()()
// first bracket for funcction definition
// seccond bracket for function declaration
```
