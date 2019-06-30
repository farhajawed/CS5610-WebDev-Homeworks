const answerModel = require("../models/answer.model.server.js")

answerQuestion = (answer,studentId,questionId) => {
    answer.question = questionId;
    answer.student = studentId;
    answerModel.create(answer);
}

findAllAnswers = () =>
    answerModel.find().populate("question","question").populate("student","userName")

findAnswerById = answerId =>
    answerModel.findOne({_id:answerId})

findAnswersByStudentForQuestion = (studentId,questionId) =>
    answerModel.find({$and:[{student:studentId},{ question: questionId}]})
        .populate("question","question").populate("student","userName")

findAnswersByStudent = (studentId) =>
    answerModel.find({student:studentId})
        .populate("question","question").populate("student","userName")

findAnswersByQuestion = (questionId) =>
    answerModel.find({question:questionId})
        .populate("question","question").populate("student","userName")

deleteAllAnswers = () =>
    answerModel.deleteMany({})

module.exports={
    answerQuestion, findAllAnswers, findAnswerById, findAnswersByStudentForQuestion,
    findAnswersByStudent,findAnswersByQuestion,deleteAllAnswers
}