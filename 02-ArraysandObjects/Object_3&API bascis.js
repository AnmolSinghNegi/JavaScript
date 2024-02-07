//destructring object
const course={
    coursename:"JavaScript",
    price:"999",
    user:"Anmol Singh Negi"
}
const{user}=course;
console.log(user);
//how to give custom name to extract objects
const{user:username}=course;
console.log(username);

//API(Gives value as json can be easily understand in JSON Formatter)
// {JSON NOTATION
//     "name":'Anmol';
//     "coursename":'JavaScript',
//     "price":'999'
// }