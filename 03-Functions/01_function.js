function sayMyname(){
console.log("A");
console.log("n");
console.log("m");
console.log("o");
console.log("l");
}
sayMyname();
// function addTwoNumbers(num1,num2){ //here num1 and num2 are parameters
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
    console.log('sd')//will not execulte
}
const result = addTwoNumbers(3,4);//here 3 and 4 are argument;
console.log("Result :",result);

function loginUserMessage(userName="sam"){ //we pass default value which will be overwrite if value is present
    if(!userName){ //userName===undefined
        console.log("Please Enter a user name");
        return
    }
    return `${userName} just logged in`;
}
console.log(loginUserMessage('Anmol'));//if no argument is passed it will return undefined
console.log(loginUserMessage());
//rest operator
function calculateCartPrice(val1,val2,...num1){//if there is more the expect value use rest operator
    return num1 //give array
}
console.log(calculateCartPrice(200,400,500,2000));//200->val1,400->val2 rest in num1

//passing object
const user={
    name:'Anmol',
    roll_no:6
};
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and roll_no is ${anyobject.roll_no}`);
}
handleObject(user);
//passing in {} direct passing
handleObject({name:"Arun",roll_no:12});

//passing arrays
const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
//passing array directly
console.log(returnSecondValue([12,3,4]));