import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    serviceId: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
        enum: ['morning', 'afternoon', 'evening']
    },
    address: {
        type: String,
        required: true
    },
    notes: String,
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true
});

export default mongoose.model("Booking", bookingSchema);