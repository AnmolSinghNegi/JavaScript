const myNumbers=[1,2,3,4,5,6,7,8];
let newNums=myNumbers.map((num)=>num+10);
console.log(newNums);
///chaining
newNums=myNumbers.map((num)=>num*10).map((num)=>num+1)
console.log(newNums);
newNums=myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNums);