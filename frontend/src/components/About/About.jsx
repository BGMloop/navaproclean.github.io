import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about.png";

const About = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                <img src={aboutImg} alt="About Us" className="lg:w-1/2 rounded-lg shadow-lg" />
                <div className="lg:w-1/2 lg:pl-8">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-700 mb-4">
                        We are dedicated to providing top-notch cleaning services tailored to your needs.
                    </p>
                    <Link to="/services">
                        <button className="btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;