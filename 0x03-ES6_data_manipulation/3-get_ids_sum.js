function getStudentIdsSum(listOfStudents) {
  const sumOfIds = listOfStudents.reduce((accumulator, currentId) => accumulator + currentId.id, 0);
  return (sumOfIds);
}

export default getStudentIdsSum;
