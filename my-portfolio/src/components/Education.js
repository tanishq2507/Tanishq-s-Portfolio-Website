import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto border border-gray-300 rounded-lg p-6 shadow-md"
      >
        <h3 className="text-2xl font-semibold mb-2">B.Tech. (CSE)</h3>
        <p className="mb-2"><span className="font-bold">Institution:</span> Indian Institute of Information Technology, Kota</p>
        <p className="mb-2"><span className="font-bold">CGPA:</span> 7.37</p>
        <p className="mb-2"><span className="font-bold">Duration:</span> 2021 – 2025</p>
        <p><span className="font-bold">Location:</span> Kota, Rajasthan</p>
      </motion.div>
    </section>
  );
};

export default Education;
