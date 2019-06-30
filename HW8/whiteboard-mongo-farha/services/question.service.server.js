const questionDao = require('../data/daos/question.dao.server')

module.exports = app => {
    createQuestion = (req, res) =>
        res.json(questionDao.createQuestion(req.body))

    findAllQuestions = (req, res) =>
        questionDao.findAllQuestions()
            .then(function (questions) {
                res.send(questions);
            });


    findQuestionById = (req, res) =>
        questionDao.findQuestionById(req.params['id'])
            .then(function (questions) {
                res.send(questions);
            });


    deleteQuestion = (req, res) =>
        questionDao.deleteQuestion(req.params['id'])
            .then(function (questions) {
                res.send(questions);
            });

    updateQuestion = (req, res) =>
        questionDao.updateQuestion(req.params['id'],req.body)
            .then(function (questions) {
                res.send(questions);
            });

    deleteAllQuestions = (req, res) =>
        questionDao.deleteAllQuestions()
            .then(function (questions) {
                res.send(questions);
            });

    app.delete('/api/question/:id', deleteQuestion)
    app.get('/api/question/:id', findQuestionById)
    app.get('/api/question', findAllQuestions)
    app.post('/api/question', createQuestion)
    app.put('/api/question/:id', updateQuestion)
    app.delete('/api/question', deleteAllQuestions)
}