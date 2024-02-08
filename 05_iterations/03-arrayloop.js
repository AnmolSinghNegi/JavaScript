//for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const greetings="Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps is key value pair and store the order the key is entered no duplicate value , key can be of any data type

const map =new Map();
map.set('IN',"INDIA");
map.set('FR','France');
map.set('IN','INDIA')//will get ingnored
map.set('IT',"ITALY")
console.log(map);

for (const key of map) {
    console.log(key); //return every key value pair in arrays
}
//solution
for(const[key,value] of map){
    console.log(key,':-',value)
}

const myObject={
    'game1':'NFS',
    'game2':'PalWorld'
}
// for (const [key,value] of myObject) { cannot be used in object
//     console.log(key,':-',value);
// }


//for in loop

for (const key in myObject) {
  console.log(key);
}
//printing value
for (const key in myObject) {
    console.log(myObject[key]);
}

//for in in array
const arr2=[1,2,3,4,5]
for (const key in arr2) {
    console.log(arr2[key]);
}
//for in cannot be used with map