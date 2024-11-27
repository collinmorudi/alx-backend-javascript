/* eslint-disable import/no-unresolved */
// full_server/controllers/StudentsController.js

// eslint-disable-next-line import/extensions
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(process.argv[2]);
      const fieldNames = Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      let output = 'This is the list of our students\n';
      fieldNames.forEach((field) => {
        const count = fields[field].length;
        const names = fields[field].join(', ');
        output += `Number of students in ${field}: ${count}. List: ${names}\n`;
      });
      res.status(200).send(output);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fields = await readDatabase(process.argv[2]);
      if (fields[major]) {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
