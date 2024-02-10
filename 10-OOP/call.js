function SetUsername(username){
    //complex DB Class
    this.username=username;
}
function createUser(username,email,password){
    SetUsername.call(this,username)//pass current excution context 
    this.email=email;
    this.password=password;

}

const user =new createUser('Anmol','anmol@email.com','123');
console.log(user);