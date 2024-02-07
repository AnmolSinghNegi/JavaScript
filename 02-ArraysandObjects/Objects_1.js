//singleton - when create using constuctor
//Object.create
//object(key,value pair) literals
const mySym=Symbol('key1')
const JsUser={
    name:"Anmol",//by default name(key) is treated as string
    "fullname":"Anmol Singh Negi",//this cannot be accesed using '.' notation
    [mySym]:'mykey1',//this is the way to store symbol as key in object
     age:19,
    location:"Dehradun",
    email:"anmolnegi242@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}
//how access object
console.log(JsUser.email);
//or
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);
//change value
JsUser.email="anmolsinghnegi06@gmail.com";
console.log(JsUser);
//adding a function or new value with key
JsUser.greeting=function(){
    console.log('Hello JS user');
}
JsUser.greeting2=function(){
    console.log(`Hello JS user,${this.name}`);//this inside a object refer to that object
}
console.log(JsUser.greeting);//till will tell about functon
console.log(JsUser.greeting());//execute function
console.log(JsUser.greeting2());
//stop changes in object
Object.freeze(JsUser);
JsUser.email="hello"//no change will be done
console.log(JsUser);