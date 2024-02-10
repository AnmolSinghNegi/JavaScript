const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI=5;//desnot change
// console.log(Math.PI);
console.log(descripter);
const user ={
    name:'ginger',
    salary:'2500',
    isAvailable:true,
    order:function(){
        console.log('Code stuck')
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));
Object.defineProperty(user,"name",{
    writable:false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user,"name"));

for (let[key,value] of Object.entries(user)) {
    if(typeof value!=='function'){
    console.log(`${key}:${value}`);
}
}