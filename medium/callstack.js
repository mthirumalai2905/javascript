//javascript execution context 

//javascript is single threaded 

//global execution context banta hai pahile sabse

//functional execution context

//eval execution context

/////////////////////////2 PHASES///////////////////

//PHASE 1 - MEMORY CREATEING PHASE //PHASE 2 - EXECUTION PHASE


let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

console.log(result1);
console.log(result2);