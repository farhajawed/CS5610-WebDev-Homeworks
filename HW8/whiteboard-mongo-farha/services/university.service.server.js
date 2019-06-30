const universityDao = require('../data/daos/university.dao.server')

module.exports = app => {

    truncateDatabase = (req, res) =>
        universityDao.truncateDatabase()
            .then(function (result) {
                res.send("Success");
            });

    populateDatabase = (req,res) =>
        res.json(universityDao.populateDatabase())


    app.delete('/api/all', truncateDatabase)
    app.post('/api/populate', populateDatabase)
}