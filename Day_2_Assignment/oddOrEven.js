//enter the number to check the givennumber is odd or even.
let givenNumber = 251;

function isOddOrEven(givenNumber){
if(givenNumber%2 === 0){
    return "The given number is Even";
}
else{
    return "The given number is Odd";
}
}
console.log(isOddOrEven(givenNumber));
