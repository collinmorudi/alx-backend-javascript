/* eslint-disable import/no-unresolved */
// full_server/routes/index.js

// eslint-disable-next-line import/no-unresolved
const express = require('express');
// eslint-disable-next-line import/extensions
const AppController = require('../controllers/AppController');
// eslint-disable-next-line import/extensions
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
