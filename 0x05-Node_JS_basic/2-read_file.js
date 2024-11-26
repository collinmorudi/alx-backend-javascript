// 2-read_file.js

const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const [, , , field] = student.split(',');
      if (field) {
        fields[field] = (fields[field] || 0) + 1;
      }
    });

    Object.keys(fields).forEach((field) => {
      const count = fields[field];
      const names = students
        .filter((student) => student.endsWith(field))
        .map((student) => student.split(',')[0]);
      console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
