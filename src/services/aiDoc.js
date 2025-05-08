class AIDocService {
    constructor(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }

    async DocAIResponse(prompt) {
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
        //readFile('src/services/aiDoc.js')
    }

    async Store_Doc() {
        // ฟังก์ชันนี้จะทำงานเมื่อมีการเรียกใช้      
        console.log('Store_Doc');

        let book = {
            "title": "Book Title",
            "author": "Author Name",
            "content": "This is the content of the book.",
            "promt": "This is the content of the book1."
        };

        let book2 = {
            "title": "Book Title",
            "author": "Author Name",
            "content": "This is the content of the book.",
            "promt": "This is the content of the book2."
        };

        // Use `this.formatBook` to call the instance method
        const formattedBook = this.formatBook(book);
        console.log(formattedBook);

        // Remove the incorrect `.json()` call (formattedBook is a string, not a response object)
        return formattedBook;
    }

    formatBook(book) {
        // Non-async function to format a book object into a readable string
        return `Title: ${book.title}\nAuthor: ${book.author}\nContent: ${book.content}`;
    }

}

module.exports = AIDocService; // ใช้ CommonJS export