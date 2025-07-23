const browserName = "Chrome";

function getBrowserName(){

    if(browserName==="Chrome"){
        var browserName = "edge" // will get printed in the console as it function level variable.
        let browserName = "edge" // will not print as this is block scoped.
    }
    console.log(browserName);   
}

getBrowserName();