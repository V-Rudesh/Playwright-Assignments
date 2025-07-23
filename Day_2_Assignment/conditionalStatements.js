function launchBrowser(browserName){
    if(browserName==="Chrome"){
        console.log("Chrome Browser launched successfully");
    }
    else{
        console.log("Invalid browser");
    }
}
    function runTests(testType){
        switch(testType){
        case "smoke":
            console.log("Smoke execution started");
            break;
        case "regression":
            console.log("Regression execution started");
            break;
        case "sanity":
            console.log("Sanity execution started");
            break;
        default:
            console.log("Default - smoke execution started");
    }
}

launchBrowser("Chrome");
runTests("sanity");