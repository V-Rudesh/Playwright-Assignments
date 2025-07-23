
function gradeCalculation(score){
    let grade = "Fail";
    switch(true){
        case score>85:
            grade = "A+";
            break;
        case score>95:
            grade = "A++";
            break;
        case score<30:
            grade = "Failed";
            break;
        default : 
            grade = "Just Pass";
    }
    return grade;
}
console.log(gradeCalculation(31))