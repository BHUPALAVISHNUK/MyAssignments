function launchbrowser(browserName){
    if (browserName === "Chrome"){
        console.log( "browsername is chrome")
    }
    else{
        console.log("No browser")
    }
}
function runTests(testType){
    switch (testType) {
        case "Sanity":
            console.log ("Sanity");
            break;
        case "Regresssion":
            console.log("Regression");
            break;
        default:
            console.log("Smoke")

    }
   
}
let browserName = "where"
let testType = "how"
launchbrowser(browserName);
runTests(testType);