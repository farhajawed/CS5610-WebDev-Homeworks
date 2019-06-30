var mongoose = require('mongoose');
const quizWidgetSchema = require('./quiz-widget.schema.server')
const quizWidgetModel = mongoose.model('QuizWidgetModel',quizWidgetSchema)

module.exports = quizWidgetModel