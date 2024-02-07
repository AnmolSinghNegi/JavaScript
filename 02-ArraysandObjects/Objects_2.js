//how to create singleton
const pokemonUser=new Object();
pokemonUser.id="123abc";
pokemonUser.name="Sammy";
pokemonUser.isLoggedIn=false;
console.log(pokemonUser);

//nesting in objects
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:'Anmol',
            seconndname:'Negi'
        }
    }
}
console.log(regularUser.fullname.userFullname.firstname);//? is used for chaining

//Combining to objects
const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};

const obj3={obj1,obj2};//it will create 2d notation
console.log(obj3);

const obj4=Object.assign({},obj1,obj2);//{} will store in this empty object which will get stored if not given obj1 will contain merged value.
console.log(obj4);
//Using spread opreator;
const obj5={...obj1,...obj2};
console.log(obj5);

//how to get keys of object

console.log(Object.keys(pokemonUser));//return array of keys
//how to get values
console.log(Object.values(pokemonUser));
//to get entries in 2d array form
console.log(Object.entries(pokemonUser));
//how to get if object has a key present or not
console.log(pokemonUser.hasOwnProperty('isLoggedIn'));//returns true or false;