let x  = 5;
console.log(x);
a = x;
b = ++x;

console.log(a);
console.log(b);

function r(x){
    x++;
    console.log(x);
}

r(2);


let z = 4;
console.log(x);
a = z++;
console.log(a);


//////////////////////////////////////////////////////////////////NOTE/////////////////////////////////////////////////////

/// we initialize a variable by x = 2
// and perform x++ it increments the x  by  1
// if we store it in variable a = x++; a actually stores the value of x
// if we want to storer the incremented value we have to do a = ++x;