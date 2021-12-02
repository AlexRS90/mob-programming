function gradingStudents(grades) {
    // Write your code here
    let newGrades=[];
    
    grades.forEach((number) => {
      let newGrade=0;
      if(number<38){
        newGrades.push(number);
      } else {
        newGrade=Math.ceil(number/5)*5
        if(newGrade-number<3){
          newGrades.push(newGrade);
        } else {
            newGrades.push(number);
        }
      }
    });
    return newGrades;
}

console.log(gradingStudents([4,73,67,38,33]));