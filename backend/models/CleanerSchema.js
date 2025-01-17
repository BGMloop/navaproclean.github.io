import mongoose from "mongoose";

const CleanerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v.toString());
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  photo: {
    type: String,
    default: "default-cleaner.jpg"
  },
  ticketPrice: {
    type: Number,
    required: true,
    min: 0
  },
  role: {
    type: String,
    default: "cleaner"
  },
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  qualifications: [{
    type: String,
    required: true,
    trim: true
  }],
  experiences: [{
    position: { type: String, required: true },
    company: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: Date,
    current: { type: Boolean, default: false }
  }],
  bio: {
    type: String,
    maxLength: 50,
    trim: true
  },
  about: {
    type: String,
    trim: true,
    maxLength: 1000
  },
  timeSlots: [{
    day: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isAvailable: { type: Boolean, default: true }
  }],
  reviews: [{
    type: mongoose.Types.ObjectId,
    ref: "Review"
  }],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalRating: {
    type: Number,
    default: 0,
    min: 0
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending"
  },
  appointments: [{
    type: mongoose.Types.ObjectId,
    ref: "Appointment"
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

export default mongoose.model("Cleaner", CleanerSchema);