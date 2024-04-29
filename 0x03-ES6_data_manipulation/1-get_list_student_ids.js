function getListStudentIds(listOfObjects) {
  if (!(Array.isArray(listOfObjects))) { return ([]); }
  const id = (listOfObjects.map((student) => student.id));
  return (id);
}

export default getListStudentIds;
