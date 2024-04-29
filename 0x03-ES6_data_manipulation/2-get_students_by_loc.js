function getStudentsByLocation(listOfStudents, city) {
  if (!(Array.isArray(listOfStudents))) { return ([]); }

  const sanStudents = listOfStudents.filter((students) => students.location === city);
  return (sanStudents);
}

export default getStudentsByLocation;
