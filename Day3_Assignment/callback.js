let browser = "Chrome";

function checkBrowserVersion(callback){
    setTimeout(() => {
       console.log("Waiting for data to load from server");
       callback(); 
    }, 2000);
}
function browserVersion(){
    console.log("Browser version of the chrome is : " + "20.03.23");
}

checkBrowserVersion(browserVersion);