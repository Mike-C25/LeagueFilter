const router = require('express').Router();
const championRoutes = require('./champions');

// Champion routes
router.use('/champions', championRoutes);

module.exports = router;
