import express from "express";
import { createBooking, getBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);

export default router; 