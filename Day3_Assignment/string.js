//function to check whether the given strings are Anagram
function isAnagram(x,y){
    let firstSortedString = x.toLowerCase().split('').sort().join();
    let secondSortedString = y.toLowerCase().split('').sort().join();
    if(firstSortedString===secondSortedString){
        return true;
    }
    else{
        return false;
    }
}
console.log(isAnagram('Hellow','World'));
console.log(isAnagram('listen','silent'));


//function to print the last word and length of the last word
function findLastWord(s){
    let trimmedString = s.trim();
    let lastIndexSpace = trimmedString.lastIndexOf(' ');
    let lastWord = trimmedString.substring(lastIndexSpace+1);
    console.log(`The last word is \"${lastWord}\"` + ` and length of the last word is `+lastWord.length);
}
findLastWord("Hello World");
findLastWord(" fly me to the moon ");