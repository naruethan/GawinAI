export const logError = (error) => {
    console.error('Error:', error);
};

export const logInfo = (message) => {
    console.log('Info:', message);
};

export const logRequest = (req) => {
    console.log(`${req.method} ${req.url}`);
};