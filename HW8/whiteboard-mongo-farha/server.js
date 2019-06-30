var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
require("./data/db")();


// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;


const studentService = require('./services/student.service.server')
studentService(app)
const questionService = require('./services/question.service.server')
questionService(app)
const answerService = require('./services/answer.service.server')
answerService(app)
const universityService = require('./services/university.service.server')
universityService(app)

app.get("/",function (req,res) {
    res.send('Mongo Assignment!')
})
// Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});

