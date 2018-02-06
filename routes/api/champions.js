const router = require('express').Router();
const championController = require('../../controllers/championController')
const mongoose = require('mongoose');
/* GET users listing. */
router
    .route('/')
    .get(championController.listChampions)

module.exports = router;
