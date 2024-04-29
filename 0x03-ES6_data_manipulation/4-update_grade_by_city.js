function updateStudentGradeByCity(studentObj, city, greadeObj) {
  return studentObj
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = greadeObj.find((grade) => grade.studentId === student.id);
      return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
    });
}

export default updateStudentGradeByCity;
