import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="p-8 bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Experience</h2>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto border border-gray-700 rounded-lg p-6 shadow-md bg-gray-800"
      >
        <h3 className="text-2xl font-semibold mb-2 text-gray-100">Software Development Intern at NAV Backoffice</h3>
        <p className="mb-2 text-gray-300"><span className="font-bold">Duration:</span> Jan 2025 – Present</p>
        <p className="mb-2 text-gray-300"><span className="font-bold">Location:</span> Jaipur, India</p>
        <p className="mb-4 text-gray-300">
          Worked on the internal website of Transfer Agency Systems using React, Node, and SQL. Implemented draggable dashboard tiles with state persistence using Redux and MongoDB.
        </p>
        <a href="https://www.navbackoffice.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          Visit NAV Backoffice
        </a>
      </motion.div>
    </section>
  );
};

export default Experience;
