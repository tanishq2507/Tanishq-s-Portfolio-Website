import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white text-center p-4"
    >
      <p>&copy; {new Date().getFullYear()} Tanishq Lohia. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
