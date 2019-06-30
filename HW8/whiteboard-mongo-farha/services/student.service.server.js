const studentDao = require('../data/daos/student.dao.server')

module.exports = app => {

    createStudent = (req, res) =>
        res.json(studentDao.createStudent(req.body))

    findAllStudents = (req, res) =>
        studentDao.findAllStudents()
            .then(function (students) {
                res.send(students);
            });


    findStudentById = (req, res) =>
      studentDao.findStudentById(req.params['id'])
        .then(function (students) {
            res.send(students);
        });


    deleteStudent = (req, res) =>
        studentDao.deleteStudent(req.params['id'])
            .then(function (students) {
                res.send(students);
            });

    updateStudent = (req, res) =>
        studentDao.updateStudent(req.params['id'],req.body)
            .then(function (students) {
                res.send(students);
            });

    deleteAllStudents = (req, res) =>
        studentDao.deleteAllStudents()
            .then(function (students) {
                res.send(students);
            });

    app.delete('/api/student/:id', deleteStudent)
    app.get('/api/student/:id', findStudentById)
    app.get('/api/student', findAllStudents)
    app.post('/api/student', createStudent)
    app.put('/api/student/:id', updateStudent)
    app.delete('/api/student', deleteAllStudents)
}