class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)//goes in parent class and store username
        this.email=email;
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const teacher1=new Teacher("Teach","teach@email.com","123");
teacher1.addCourse();
const user=new User("Anmol");
user.logMe();
teacher1.logMe();
console.log(teacher1 instanceof Teacher)
console.log(teacher1 instanceof User)