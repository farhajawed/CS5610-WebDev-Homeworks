var mongoose = require('mongoose');

var MultipleChoice = mongoose.Schema({
    _id:Number,
    choices:String,
    correct:Number
});

module.exports = MultipleChoice;