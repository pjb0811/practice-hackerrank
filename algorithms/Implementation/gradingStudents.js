function gradingStudents(grades) {
  return grades.map(grade => {
    const round5 = Math.ceil(parseInt(grade, 10) / 5) * 5;
    grade = parseInt(grade, 10);
    if (round5 > 38 && (round5 - grade) < 3) {
      return round5;
    }
    return grade;
  });
}

console.log(gradingStudents('73 67 38 33'.split(' ')));