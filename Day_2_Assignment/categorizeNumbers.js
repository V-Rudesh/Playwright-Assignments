//enter the positve/negative/neutral number to check the category of this given number.
let givenNumber =-2;

function categorizeNumber(givenNumber){
    if(givenNumber>0){
        return "The given number is Positive";
    }
    else if(givenNumber<0){
        return "The given number is Negative";
    }
    else{
        return "The given number is neutral";
    }
}
console.log(categorizeNumber(givenNumber));
