const mongoose = require('mongoose')
const questionSchema = require('./question.schema.server')

const QuizWidget = mongoose.Schema({
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: 'question-widgets'})

module.exports = QuizWidget;