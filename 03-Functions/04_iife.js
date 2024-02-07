//Immediately Inovked Function Expression - to avoid global scope pollution

(function connect(){ //named iife
    console.log('DB Connected');
})();//here semicolon is required to end this context

((name)=>{//unamed iife
    console.log(`DB Connected ${name}`)
})("Mongo DB");