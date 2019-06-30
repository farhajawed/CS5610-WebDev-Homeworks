const studentModel = require("../models/student.model.server.js")

createStudent = student =>
    studentModel.create(student)

findAllStudents = () =>
    studentModel.find()

findStudentById = studentId =>
    studentModel.findOne({_id:studentId})

deleteStudent = studentId =>
    studentModel.remove({_id: studentId})

updateStudent = (studentId,student) =>
    studentModel.updateOne({_id:studentId},{$set:student})

deleteAllStudents = () =>
    studentModel.deleteMany({})

module.exports={
    createStudent,findAllStudents,findStudentById,deleteStudent,updateStudent,deleteAllStudents
}