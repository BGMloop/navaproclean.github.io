import express from 'express';
import User from '../models/User.js'; // Import the User model

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        const newUser = new User({ name, email, phone, password });
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});

export default router; 