let fetchDataFromDataBase = new Promise((resolve, reject)=>{
const data = true;
setTimeout(() => {
    if(fetchDataFromDataBase){
        resolve("Data fetched successfully");
    }
    else {
        reject("Data not fetched");        
    }
}, 3000);
})

fetchDataFromDataBase.then(message => {
    console.log(message);
})
.catch(error=> {
console.log(error);
})