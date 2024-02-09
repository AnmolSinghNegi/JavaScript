const user={
    userName:"Anmol",
    loginCount:6,
    signedIn:true,
    getDetails: function(){
        //console.log("Got User details from database")
        // console.log(`Username :${this.userName}`);
        console.log(this)
    }
};

// console.log(user.userName)
// console.log(user.getDetails());
// console.log(this)
// const promiseOne =new Promise();//new is constructor function used to create new context
function User(userName,loginCount,isLoggedIn){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.userName}`)
    }
    return this;
}
const user1= new User("Anmol",12,true);
const user2= new  User("Negi",13,true);
// console.log(user1);
// console.log(user2);
console.log(user1.constructor);
console.log(user1 instanceof User);