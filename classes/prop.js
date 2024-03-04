class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const thiru = new User('thiru');
// console.log(thiru.createId())

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phoen.com");
iphone.logMe()
