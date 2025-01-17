import React from "react";
import { cleaner01, cleaner02, cleaner03 } from '../images/index.js';

export const CLEANERS_DATA = [
    {
        id: "01",
        name: "Deep Clean Service",
        specialization: "4-5 Hours",
        avgRating: 4.9,
        totalRating: 312,
        photo: cleaner01,
        totalClients: 1500,
        house: "Starting at $200",
        description: "Transform your space with our professional deep cleaning service. We tackle tough stains, hard-to-reach areas, and restore your home to pristine condition.",
        features: [
            "Deep cleaning of all surfaces",
            "Window cleaning (interior)",
            "Baseboard and wall cleaning",
            "Detailed bathroom sanitization",
            "Kitchen deep clean including appliances",
            "Light fixture cleaning",
            "Cabinet interior cleaning",
            "Air vent cleaning"
        ],
        price: 200
    },
    {
        id: "02",
        name: "Regular Clean Service",
        specialization: "2-3 Hours",
        avgRating: 4.8,
        totalRating: 280,
        photo: cleaner02,
        totalClients: 1200,
        house: "Starting at $150",
        description: "Maintain a consistently clean and healthy living environment with our regular cleaning service. Perfect for busy households needing reliable cleaning maintenance.",
        features: [
            "Dusting and wiping surfaces",
            "Vacuum and mop floors",
            "Bathroom cleaning",
            "Kitchen cleaning",
            "Bed making",
            "Empty trash bins",
            "General tidying"
        ],
        price: 150
    },
    {
        id: "03",
        name: "Move In/Out Clean",
        specialization: "5-6 Hours",
        avgRating: 4.9,
        totalRating: 195,
        photo: cleaner03,
        totalClients: 800,
        house: "Starting at $300",
        description: "Comprehensive cleaning service for moving transitions. Ensure your new home is ready for move-in or leave your old space spotless for the next occupants.",
        features: [
            "Complete deep cleaning",
            "Inside cabinet cleaning",
            "Appliance cleaning",
            "Window and track cleaning",
            "Baseboard and wall cleaning",
            "Light fixture cleaning",
            "Garage sweeping",
            "Paint touch-up preparation"
        ],
        price: 300
    }
];