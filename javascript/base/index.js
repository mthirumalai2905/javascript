console.log(a)
var a = 10;
//undefined - which exists but doesnt know
//not-defined - which doesnt exists

/**
 Javascript converts this code from 

 var a = 10

 to

 var a;
 a = 10

 then this var a; moves up in the context 

 and its default value is undefined
 */

 // primitives = string, number, boolean, null and undefined


 // references = aisi koi bhi value jisko copy
 // karne par real copy nahi hota, balki us main
 // value ka reference pass hojata hai,
 // aur jiska copy real banta hai usse primitive type bolte hai




 a = 10;
 console.log(a);


 function name(){
   console.log("Hello im gay");
 }

 name()