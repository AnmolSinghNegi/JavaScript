'use strict';
const name ="Anmol";
const repoCount=16;
//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Declartaion ways
const name1="Anmol Singh"
//or
const fullname= new String("Anmol Singh Negi");//treats string as object and allows use of string method
console.log(fullname[0]);
console.log(fullname.__proto__);//used to write his for accesing methods
//length 
console.log(fullname.length);
//to uppercase
console.log(fullname.toUpperCase())//don't changes original value
//character present at that paramter index
console.log(fullname.charAt(2));
//charater at what index
console.log(fullname.indexOf('m'));
//substring
console.log(fullname.substring(0,5));//negative index are not allowed
//slice
console.log(fullname.slice(4,-5));
//trim
const newString="  Hello  ";
console.log(newString.trim());
//replace
const url="https://anmol.com/page%20";
console.log(url.replace('%20','-'));
//split(converts string in array)
const message="How-are-you";
message.split('-');
console.log(message.split('-'));