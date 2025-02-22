import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <motion.section 
      key={animationKey}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100 transition-colors duration-300 px-4 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Tanishq Lohia</h1>
      <p className="text-xl mb-2">Software Engineer | Full Stack Developer</p>
      <p className="text-lg">Welcome to my portfolio website.</p>
    </motion.section>
  );
};

export default Home;
