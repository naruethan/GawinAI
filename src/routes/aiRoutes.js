const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

// Define routes
router.get('/', (req, res) => indexController.getHome(req, res));
router.post('/ai', (req, res) => indexController.getAIResponse(req, res));

module.exports = router;