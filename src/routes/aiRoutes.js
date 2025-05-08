const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

// Define routes
router.get('/', (req, res) => indexController.getHome(req, res));
router.post('/aiGetwather', (req, res) => indexController.getAIResponse(req, res));
router.post('/DB', (req, res) => indexController.GetDatabase(req, res));
router.post('/Doc', (req, res) => indexController.GetDoc(req, res));
router.post('/stor_doc', (req, res) => indexController.Store_Doc(req, res));

module.exports = router;