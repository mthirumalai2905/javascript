function a(x) {
    x++;
    return function () {
      console.log(++x);
    };
  }
  
  a(1)();
  a(1)();
  a(1)();
  
  let x = a(1);
  x();
  x();
  x();


//   function a(x) {
//     x++;
//     // console.log(x);
//     return function () {
//       console.log(++x);
//     };
//   }


//   let x = a(1);
//   x();


//   console.log(x() == a()());

// const one = function a(x) {
//     x++;
//     console.log(x);
//     return function(){
//         console.log(++x);
//     }  ;  
// }


// one(5); // This would log 6 to the console
