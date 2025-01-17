import React from "react";
import ServiceList from "../components/Services/ServiceList";

const Services = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
                <ServiceList />
            </div>
        </section>
    );
};

export default Services; 