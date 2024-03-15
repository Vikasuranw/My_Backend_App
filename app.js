// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data - users array
let users = [];

// Route to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Route to get a specific user by ID
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Route to create a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).send('User added successfully');
});

// Route to update an existing user
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updateUser };
        res.send('User updated successfully');
    } else {
        res.status(404).send('User not found');
    }
});

// Route to delete a user
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id !== id);
    res.send('User deleted successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
