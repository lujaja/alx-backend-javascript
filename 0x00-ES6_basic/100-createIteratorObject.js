// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = [];

  for (const dept of departments) {
    employees.push(...dept);
  }

  let index = 0;
  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

