const answerDao = require('../data/daos/answer.dao.server')

module.exports = app => {

    answerQuestion = (req, res) =>
        res.json(answerDao.answerQuestion(req.body, req.params['sid'],req.params['qid']));


    findAllAnswers = (req, res) =>
        answerDao.findAllAnswers()
            .then(function (answers) {
                res.send(answers);
            });

    findAnswerById = (req, res) =>
        answerDao.findAnswerById(req.params['id'])
            .then(function (answers) {
                res.send(answers);
            });

    findAnswersByStudentForQuestion = (req, res) =>
        answerDao.findAnswersByStudentForQuestion(req.params['sid'],req.params['qid'])
            .then(function (answers) {
                res.send(answers);
            });

    findAnswersByStudent = (req, res) =>
        answerDao.findAnswersByStudent(req.params['sid'])
            .then(function (answers) {
                res.send(answers);
            });

    findAnswersByQuestion = (req, res) =>
        answerDao.findAnswersByQuestion(req.params['qid'])
            .then(function (answers) {
                res.send(answers);
            });

    deleteAllAnswers = (req, res) =>
        questionDao.deleteAllAnswers()
            .then(function (answers) {
                res.send(answers);
            });

    app.post('/api/student/:sid/question/:qid/answer', answerQuestion)
    app.get('/api/answer', findAllAnswers)
    app.get('/api/answer/:id', findAnswerById)
    app.get('/api/student/:sid/question/:qid/answer', findAnswersByStudentForQuestion)
    app.get('/api/question/:qid/student/:sid/answer', findAnswersByStudentForQuestion)
    app.get('/api/student/:sid/answer', findAnswersByStudent)
    app.get('/api/question/:qid/answer', findAnswersByQuestion)
    app.delete('/api/answer', deleteAllAnswers)
}