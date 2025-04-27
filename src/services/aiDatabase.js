class AIDatebaseService {
    constructor(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }

    async fetchfetchAIDatabaseResponseAIResponse(prompt) {
        try {
            const response = await fetch(`${this.apiEndpoint}`, {
                method: 'GET', // Open-Meteo uses GET requests
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response status:', response.status); // Log the status code
            if (!response.ok) {
                const errorBody = await response.text(); // Log the response body for debugging
                console.error('Response body:', errorBody);
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching AI response:', error);
            throw error;
        }
    }
}

module.exports = AIDatebaseService; // ใช้ CommonJS export