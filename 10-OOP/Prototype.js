let myName='Anmol   '
let mysurName='Negi'

// console.log(myName.truelength)

let myRiders=['Brave','Blades'];
let heroPower={
    Brave:'fire',
    Blades:'water',
    getBladesPower:function(){
        console.log(`Blades power is ${this.spiderman}`)
    }
}
Object.prototype.anmol=function(){
    console.log('Anmol is present in all objects');
}
// heroPower.anmol()
// myRiders.anmol()
Array.prototype.heyAnmol=function(){
    console.log('Anmol says hello');
}
myRiders.heyAnmol()
// heroPower.heyAnmol()

//inheritance
const User ={
    name:'Anmol',
    email:'anmol@email.com'
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User

//mordern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);//Teacjing support extends teacher

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
myName.trueLength();
"   AnmolNegi  ".trueLength();