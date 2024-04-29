function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const clenedValues = filteredValues.map((value) => value.substring(startString.length));
  return clenedValues.join('-');
}

export default cleanSet;
