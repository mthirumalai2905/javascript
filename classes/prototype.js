// let myName = "thiru        "

// console.log(myName.truelength)

let myHeros = ["thor", "spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.thiru = function(){
    console.log(`thiru is presnt in all objects`);
}


Array.prototype.heyThiru = function(){
    console.log(`Thiru says hello`);
}


// heroPower.thiru()

myHeros.thiru()
myHeros.heyThiru() // arrays have the access 
// heroPower.heyThiru() // object doesnt have the access


// inheritance

const User = {
    name: "chai",
    email: "chail@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//old syntax
Teacher.__proto__ =  User;

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = 'ChaiAurCode     '

String.prototype.trueLength = function(){
    // console.log(`${this}`)
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"thirumalai".trueLength()
