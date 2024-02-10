class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`UserName:${this.username}`);
    }
    static createId(){ //stop access 
        return `123`;
    }
}

const Anmol =new User("Anmol");
// console.log(Anmol.createId());

class Teacher extends User{
    constructor(usernmae, email){
        super(usernmae);
        this.email=email
    }
}
const teacher1 =new Teacher("teach","t@email.com");
teacher1.logMe();
// console.log(teacher1.createId())