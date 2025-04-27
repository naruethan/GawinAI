const IndexController = require('../controllers/index');
const { getAIResponse } = require('../controllers/aiController');
const aiRoutes = require('./aiRoutes');

const setRoutes = (app) => {
    const indexController = new IndexController();

    app.get('/', (req, res) => indexController.getHome(req, res));
    app.use('/api', aiRoutes); // Prefix all routes with `/api`
};

module.exports = setRoutes;