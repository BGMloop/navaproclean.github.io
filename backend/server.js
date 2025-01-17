import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'; // Import Mongoose
import contactRoutes from './routes/contact.js'; // Import the contact routes
import bookingRoutes from './routes/bookings.js'; // Import the booking routes
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/contact', contactRoutes); // Use the contact routes
app.use('/api/bookings', bookingRoutes); // Use the booking routes

// Define a root route
app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Welcome to the API!</h1>
        <p>Use the following endpoints:</p>
        <ul>
            <li><strong>POST</strong> <a href="/api/contact">/api/contact</a> - Submit contact information</li>
            <li><strong>POST</strong> <a href="/api/bookings">/api/bookings</a> - Create a booking</li>
        </ul>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 