var express = require('express');
var router = express.Router();
// var apiRoutes = require('./api');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

// router.use("/api", apiRoutes);

// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })

module.exports = router;
