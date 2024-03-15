// Import the express library
const express = require('express');

// Create an instance of express
const app = express();

// Define the port number
const port = 3000;

// Define a route handler for GET requests
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
