var express = require('express');
var router = express.Router();
var controller = require('../controllers');

//use req.params for /path/:param

router.get('/teachers', controller.teachers.getAll);
router.get('/teachers/:id', controller.teachers.getByID);
router.post('/teachers', controller.teachers.postTeacher);


router.get('/students',controller.students.getAll);
router.get('/students/:id',controller.students.getByID);
router.post('/students',controller.students.postStudent);
router.put('/students/:id/editClasses', controller.students.editStudentClasses);

router.get('/classes',controller.classes.getAll);
router.get('/classes/:id',controller.classes.getByID);
router.post('/classes',controller.classes.postClass);

module.exports = router;
