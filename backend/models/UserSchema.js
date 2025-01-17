import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
    default: "default-avatar.jpg"
  },
  role: {
    type: String,
    enum: ["client", "admin"],
    default: "client"
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true
  },
  bloodType: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  },
  appointments: [{
    type: mongoose.Types.ObjectId,
    ref: "Appointment"
  }]
}, {
  timestamps: true
});

export default mongoose.model("User", UserSchema);