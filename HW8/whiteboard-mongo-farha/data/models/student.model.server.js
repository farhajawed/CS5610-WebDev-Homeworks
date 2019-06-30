var mongoose = require('mongoose');
const studentSchema = require('./student.schema.server')
const studentModel = mongoose.model('StudentModel',studentSchema)

module.exports = studentModel