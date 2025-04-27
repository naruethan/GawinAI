const AIAgentService = require('../services/aiAgentService'); // ไม่ต้องใช้ `.default`

class IndexController {
    constructor() {
        this.aiAgentService = new AIAgentService('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'); // Replace with your actual AI API endpoint
    }

    // Home route
    getHome(req, res) {
        res.send('Welcome to the API!');
    }

    // AI route
    async getAIResponse(req, res) {
        const { prompt } = req.body;

        try {
            const aiResponse = await this.aiAgentService.fetchAIResponse();
            console.log('AI Response:', aiResponse);
            res.json(aiResponse);
        } catch (error) {
            console.error('Error in IndexController:', error);
            res.status(500).json({ error: 'Failed to fetch AI response' });
        }
    }
}

module.exports = IndexController;

