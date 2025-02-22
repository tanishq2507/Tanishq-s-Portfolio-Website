import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Tanishq Lohia</h1>
      <p className="text-xl mb-2">Software Engineer | Full Stack Developer</p>
      <p className="text-lg">Welcome to my portfolio website.</p>
    </motion.section>
  );
};

export default Home;
