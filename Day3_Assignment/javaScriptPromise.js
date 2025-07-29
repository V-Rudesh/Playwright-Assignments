let conditonalPromise = new Promise((resolve, reject)=>{
let randomNumber = Math.random();
if(randomNumber>0.5){
    resolve ("Resolved successfully");
}
else{
    reject("Rejected");
}
})

conditonalPromise.then(message=>{
    console.log(message);
})
.catch(error=>{
    console.log(error);
})