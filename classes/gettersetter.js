class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return `${this._email}thiru`;
    }

    set email(value){
        this._email =value
    }

    get password(){
          return `${this._password}thiru`;
    }

    set password(value){
        this._password = value;
    }
}

const thiru = new User("h@hitses", 123);
console.log(thiru.password);