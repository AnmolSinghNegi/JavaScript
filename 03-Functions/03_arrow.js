const user={
    username:"Anmol",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);//this refers current context
        console.log(this);
    }
}
user.welcomeMessage();
user.username="Sam";
user.welcomeMessage();

console.log(this);//in node environment this gives empty object

// function cut(){
//     let username="Anmol";
//     console.log(this.username);
// } we generally donot use this with function
// cut()

//arrow function
const name=()=>{
    let username="Anmol";
    console.log(this);
}
name()
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
//in arrow function their is implici return
const addTwo=(num1,num2)=>(num1+num2);//() to tackle with retuning objects
console.log(addTwo(3,4))