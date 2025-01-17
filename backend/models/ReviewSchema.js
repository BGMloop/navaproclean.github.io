import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    cleaner: {
      type: mongoose.Types.ObjectId,
      ref: "Cleaner",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 500,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Prevent duplicate reviews
reviewSchema.index({ cleaner: 1, user: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);