const myNums = [1,2,3]

const myTotal = myNums.reduce(
    (acc, currval) => {
        console.log(`acc value ${acc}`);
        console.log(`currval ${currval}`);
        return acc + currval
    }, 0)

console.log(myTotal);