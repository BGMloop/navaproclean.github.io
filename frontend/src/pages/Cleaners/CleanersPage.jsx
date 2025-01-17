import React, { useState } from 'react';
import { CLEANERS_DATA } from '../../assets/data/cleaners.js';
import CleanerCard from '../../components/Cleaners/CleanerCard';

const CleanersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCleaners = CLEANERS_DATA.filter(cleaner =>
        cleaner.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-6">Our Professional Cleaners</h1>
                <input
                    type="text"
                    placeholder="Search for a cleaner..."
                    className="w-full max-w-md mx-auto mb-6 p-3 border rounded"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCleaners.map(cleaner => (
                        <CleanerCard key={cleaner.id} cleaner={cleaner} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CleanersPage;