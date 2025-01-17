import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CLEANERS_DATA } from '../Cleaners/Cleaner';

const BookingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        address: '',
        notes: ''
    });
    const [service, setService] = useState(null);

    useEffect(() => {
        const selectedService = CLEANERS_DATA.find(service => service.id === id);
        if (!selectedService) {
            navigate('/cleaners');
            return;
        }
        setService(selectedService);
    }, [id, navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    serviceId: id,
                    serviceName: service.name,
                    price: service.price
                }),
            });

            if (response.ok) {
                alert('Booking submitted successfully!');
                navigate('/booking-confirmation');
            } else {
                throw new Error('Booking submission failed');
            }
        } catch (error) {
            alert('Error submitting booking: ' + error.message);
        }
    };

    if (!service) return <div>Loading...</div>;

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-emeraldGreen mb-2">
                        Book {service.name}
                    </h1>
                    <p className="text-gray-600 mb-6">
                        {service.description}
                    </p>
                    <div className="flex items-center gap-2 mb-6 text-emeraldGreen">
                        <span className="font-bold text-xl">${service.price}</span>
                        <span className="text-gray-600">• {service.duration}</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-emeraldGreen focus:border-emeraldGreen"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-emeraldGreen focus:border-emeraldGreen"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-emeraldGreen focus:border-emeraldGreen"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-emeraldGreen focus:border-emeraldGreen"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Preferred Time</label>
                            <select
                                name="time"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-emeraldGreen focus:border-emeraldGreen"
                                value={formData.time}
                                onChange={handleChange}
                            >
                                <option value="">Select a time</option>
                                <option value="morning">Morning (8AM - 12PM)</option>
                                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                <option value="evening">Evening (4PM - 8PM)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Service Address</label>
                            <input
                                type="text"
                                name="address"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-emeraldGreen focus:border-emeraldGreen"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Special Notes</label>
                            <textarea
                                name="notes"
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-emeraldGreen focus:border-emeraldGreen"
                                value={formData.notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emeraldGreen text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingPage; 