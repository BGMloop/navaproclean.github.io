import React from 'react'
import { CLEANERS_DATA } from '../../pages/Cleaners/Cleaner'
import CleanerCard from './CleanerCard'

const CleanerList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-emeraldGreen text-center mb-4">
        Select Your Service
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Choose from our professional cleaning services
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CLEANERS_DATA.map(cleaner => (
          <CleanerCard key={cleaner.id} cleaner={cleaner} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Need a custom cleaning solution?
        </p>
        <button className="bg-emeraldGreen text-white px-8 py-3 rounded-full 
          hover:bg-green-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default CleanerList