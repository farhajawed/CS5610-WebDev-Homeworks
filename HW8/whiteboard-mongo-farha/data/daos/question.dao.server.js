const questionModel = require("../models/question.model.server.js")

createQuestion = question =>
    questionModel.create(question)

findAllQuestions = () =>
    questionModel.find()

findQuestionById = questionId =>
    questionModel.findOne({_id:questionId})

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId})

updateQuestion = (questionId,question) =>
    questionModel.updateOne({_id:questionId},{$set:question})

deleteAllQuestions = () =>
    questionModel.deleteMany({})

module.exports={
    createQuestion,findAllQuestions,findQuestionById,deleteQuestion,updateQuestion,deleteAllQuestions
}