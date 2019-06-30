var mongoose = require('mongoose');
const questionSchema = require('./question.schema.server')
const questionModel = mongoose.model('QuestionModel',questionSchema)

module.exports = questionModel