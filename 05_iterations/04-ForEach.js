const coding=["js","ruby","java","python","cpp"];
coding.forEach( function(item){
    console.log(item);
} )

coding.forEach((item)=>{
    console.log(item)
 }
);
//passing a functon as callbck funtion
function printme(item){
    console.log(item);
}
coding.forEach(printme);

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )