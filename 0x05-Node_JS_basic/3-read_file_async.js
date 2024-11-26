// 3-read_file_async.js

const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

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

    resolve();
  });
});

module.exports = countStudents;
