const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swasthyaModel = require('./models/swasthya');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from Vite
}));

// Connect to MongoDB with error handling
mongoose.connect("mongodb://localhost:27017/Innotech", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));

// Registration route with validation and error handling
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required." });
    }

    swasthyaModel.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
