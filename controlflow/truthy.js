const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", "false", " ", [], {}, function(){}

let x = 0 / 0;
console.log(x);

//nullish coalescing operator(??) : null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15;
val4 = null ?? undefined
val5 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("less than 80") : console.log(`more than 80`);