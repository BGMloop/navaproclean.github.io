import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        serviceType: '',
        squareFootage: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send the form data as JSON
            });

            if (response.ok) {
                // Handle successful submission (e.g., show a success message)
                console.log("Form submitted successfully!");
                setFormData({ name: '', email: '', address: '', serviceType: '', squareFootage: '', phone: '' }); // Reset form
            } else {
                // Handle errors (e.g., show an error message)
                console.error("Error submitting form:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
                <p className="text-center mb-4">
                    We understand that every residential/commercial situation has unique cleaning needs. 
                    Feel free to message or call us with any specifics needs or special requests.
                </p>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded"
                            placeholder="(123) 456-7890"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Property Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Type of Service</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded"
                        >
                            <option value="">Select a service</option>
                            <option value="deep-clean">Deep Clean</option>
                            <option value="regular-clean">Regular Clean</option>
                            <option value="move-in-out">Move In/Out Clean</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Square Footage to Be Cleaned</label>
                        <input
                            type="number"
                            name="squareFootage"
                            value={formData.squareFootage}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <button type="submit" className="btn w-full">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 