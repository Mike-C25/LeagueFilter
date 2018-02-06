const db = require('../models');

module.exports = {
    listChampions: function (req, res) {
        db.Champion
            .find()
            .lean()
            .exec(function (err, champions) {
                return res.send(JSON.stringify(champions));
            })
    }
}