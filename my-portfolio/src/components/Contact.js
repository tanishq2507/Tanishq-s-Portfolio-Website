import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="mb-4">You can reach me at:</p>
        <p className="mb-2">
          Email: <a href="mailto:tanishqlohiaofficial@gmail.com" className="text-blue-500 hover:underline">tanishqlohiaofficial@gmail.com</a>
        </p>
        <p className="mb-2">Phone: +91-6289835840</p>
        <p className="mb-4">Location: Visakhapatnam, India</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/tanishq-lohia-a497a5223/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/tanishq2507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href="https://leetcode.com/u/tanishqlohia/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LeetCode
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
