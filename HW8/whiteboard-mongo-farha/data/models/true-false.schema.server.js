var mongoose = require('mongoose');

var TrueFalse = mongoose.Schema({
    _id:Number,
    isTrue: Boolean
});

module.exports = TrueFalse;