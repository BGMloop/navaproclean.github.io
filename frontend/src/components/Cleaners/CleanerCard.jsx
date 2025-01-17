import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaUserFriends } from "react-icons/fa";

const CleanerCard = ({ cleaner }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img 
          src={cleaner.photo} 
          alt={cleaner.name}
          className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-1.5">
            <FaStar className="text-yellow-500" />
            <span className="font-bold">{cleaner.avgRating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
          {cleaner.name}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-2">
          {cleaner.description}
        </p>

        <div className="flex items-center gap-2 mb-6">
          <FaUserFriends className="text-primary" />
          <span className="text-slate-600">{cleaner.totalClients}+ satisfied clients</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-primary text-lg">
            {cleaner.house}
          </span>
          <Link 
            to={`/cleaners/${cleaner.id}`}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary/90 text-white rounded-full
              hover:bg-primary shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Profile
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CleanerCard;