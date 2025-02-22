import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Education = () => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <section className="p-8 bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Education</h2>
      <motion.div 
        key={animationKey}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto border border-gray-700 rounded-lg p-6 shadow-md bg-gray-800"
      >
        <h3 className="text-2xl font-semibold mb-2 text-gray-100">B.Tech. (CSE)</h3>
        <p className="mb-2 text-gray-300"><span className="font-bold">Institution:</span> Indian Institute of Information Technology, Kota</p>
        <p className="mb-2 text-gray-300"><span className="font-bold">CGPA:</span> 7.37</p>
        <p className="mb-2 text-gray-300"><span className="font-bold">Duration:</span> 2021 – 2025</p>
        <p className="text-gray-300"><span className="font-bold">Location:</span> Kota, Rajasthan</p>
      </motion.div>
    </section>
  );
};

export default Education;
