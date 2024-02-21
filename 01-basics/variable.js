const accountId = 1455665;// we cant change the value of accountId in future
let accountEmail = "luffyisgay@gmail.com";
var accountPassword = "amnotgay";
accountCity = "Tokyo"
let accountState; // value of variable isnt defined yet and hence its called undefined

//accountId = 2;
accountEmail = "hello@gmail.com";
accountPassword = "gay";

console.log(accountEmail);
console.log(accountId);
console.log(accountPassword);
console.log(accountCity);

//table method
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
