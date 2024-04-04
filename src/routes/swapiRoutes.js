const express = require('express');
const router = express.Router();
const SwapiController = require('../controllers/swapiController');

router.get('/peoples', SwapiController.getAllPeople);
router.get('/peoples/:id', SwapiController.getPeople);

module.exports = router;