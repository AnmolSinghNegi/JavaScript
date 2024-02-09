const promiseOne =new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,netwotk
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()
    },1000)
});
promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promisethree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Anmol",email:'anmolnegi242@gmail.com'})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({userName:'Anmol',password:123})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((userName)=>{
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolve or rejected"));

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({userName:'javascript',password:123})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function cosnumePromiseFive(){//async doesnot handle error
    try{
    const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
cosnumePromiseFive(); 

async function getAllusers(){
    try{
    const response = await fetch('https://api.github.com/users/AnmolSinghNegi');
    const data = await response.json()
    console.log(data);
    }catch(error){
        console.log("E: ",error);
    }
}
getAllusers()

fetch('https://api.github.com/users/AnmolSinghNegi').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));