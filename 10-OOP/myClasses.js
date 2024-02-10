//ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    } //whenever a object initialized when we use new keyowrd
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const myname = new User("anmol","anmol@email.com","006")
console.log(myname.encryptPassword())
console.log(myname.changeUsername());
//behind the scene
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function(){
        return `${this.password}abc`;
}
User.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}`
}

const name  = new User("Negi","negi@email.com","1223");
console.log(name.encryptPassword())
console.log(name.changeUsername());