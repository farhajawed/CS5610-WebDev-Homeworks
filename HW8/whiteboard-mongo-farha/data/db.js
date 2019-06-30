module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'white-board';
    var  connectionString =
        process.env.MONGODB_URI || 'mongodb://localhost/white-board';
    mongoose.connect(connectionString);
};
