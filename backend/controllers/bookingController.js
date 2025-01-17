import Booking from "../models/BookingSchema.js";

export const createBooking = async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        
        // Send confirmation email (implement this later)
        
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: savedBooking
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create booking",
            error: error.message
        });
    }
};

export const getBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const booking = await Booking.findById(id);
        res.status(200).json({
            success: true,
            message: "Booking found",
            data: booking
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "No booking found",
            error: error.message
        });
    }
}; 