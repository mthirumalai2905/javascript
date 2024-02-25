// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

// ()() first one for writting the function the secon dwas for calling the function

( (name) => {
    console.log(`db connected two ${name}`);
})('thiru')