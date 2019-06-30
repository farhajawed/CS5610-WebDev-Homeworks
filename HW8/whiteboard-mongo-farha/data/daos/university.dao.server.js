const studentDao = require("./student.dao.server.js")
const answerDao = require("./answer.dao.server")
const questionDao = require("./question.dao.server")

truncateDatabase = () =>
    studentDao.deleteAllStudents().then(()=>
      questionDao.deleteAllQuestions().then(()=>
        answerDao.deleteAllAnswers()))

populateDatabase = () =>
    studentDao.createStudent({
        "_id":123,
        "firstName" : "Alice",
        "lastName":"Wonderland",
        "userName": "alice",
        "password": "alice",
        "gradYear": 2020,
        "scholarship" : 15000
    }).then(()=>studentDao.createStudent({
        "_id":234,
        "firstName" : "Bob",
        "lastName":"Hope",
        "userName": "bob",
        "password": "bob",
        "gradYear": 2021,
        "scholarship" : 12000
    }).then(()=>questionDao.createQuestion({
        "_id":321,
        "question":"Is the following schema valid?",
        "points":10,
        "questionType":"TRUE_FALSE",
        "trueFalse":{
            "_id":1,
            "isTrue":false
        }
    })).then(()=>questionDao.createQuestion({
            "_id":432,
            "question":"DAO stands for Dynamic Access Object.",
            "points":10,
            "questionType":"TRUE_FALSE",
            "trueFalse":{
                "_id":2,
                "isTrue":false
            }
        })).then(()=>questionDao.createQuestion(({
            "_id":543,
            "question":"What does JPA stand for?",
            "points":10,
            "questionType":"MULTIPLE_CHOICE",
            "multipleChoice":{
                "_id":1,
                "choices":"Java Persistence API,Java Persisted Application," +
                    "JavaScript Persistence API,JSON Persistent Associations",
                "correct":1
            }
        }))).then(()=>questionDao.createQuestion(({
             "_id":654,
            "question":"What does ORM stand for?",
            "points":10,
            "questionType":"MULTIPLE_CHOICE",
            "multipleChoice":{
                "_id":2,
                "choices":"Object Relational Model,Object Relative " +
                    "Markup,Object Reflexive Model,Object Relational Mapping",
                "correct":4
            }
        }))).then(()=>answerDao.answerQuestion({
          "_id":123,
          "trueFalseAnswer":true
        }, 123, 321)).then(()=>answerDao.answerQuestion({
            "_id":234,
            "trueFalseAnswer":false
        },123,432)).then(()=>answerDao.answerQuestion({
            "_id":345,
            "multipleChoiceAnswer":1
        },123,543)).then(()=>answerDao.answerQuestion({
            "_id":456,
            "multipleChoiceAnswer":2
        },123,654)).then(()=>answerDao.answerQuestion({
            "_id":567,
            "trueFalseAnswer":false
        },234,321)).then(()=>answerDao.answerQuestion({
            "_id":678,
            "trueFalseAnswer":true
        },234,432)).then(()=>answerDao.answerQuestion({
            "_id":789,
            "multipleChoiceAnswer":3
        },234,543)).then(()=>answerDao.answerQuestion({
            "_id":890,
            "multipleChoiceAnswer":4
        },234,654))
    )

module.exports={
    truncateDatabase,populateDatabase
}