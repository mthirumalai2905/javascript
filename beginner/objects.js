// Object.create



const mySym = Symbol("Key1");



const JsUser = {
    name: "Thiru",
    "Thiru": "malai",
    age: 18,
    [mySym]: "mySYm",
    location: "Mumbai",
    email: "Luffy@facebook.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name);
console.log(JsUser['email']);
console.log(JsUser["Thiru"]);
console.log(typeof JsUser[mySym])

JsUser.email = "luffythiru@meta.com";
Object.freeze(JsUser)
JsUser.email = "Thiru@gmail.xom"

console.log(JsUser.email);



JsUser.greeting = function(){
    console.log("Hello Js USer");
}

console.log(JsUser.greeting());