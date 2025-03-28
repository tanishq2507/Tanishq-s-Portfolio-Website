import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Achievements = () => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <section className="p-8 bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Achievements</h2>
      <motion.ul 
        key={animationKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto list-disc list-inside space-y-2 text-lg text-gray-300"
      >
        <li>Qualified for ICPC regionals 2023, securing the top position on campus.</li>
        <li>Rank 99 amongst 228 teams in ICPC Amritapuri onsite round.</li>
        <li>Solved 787 problems and rated 1438 (top 10% Specialist) on Codeforces.</li>
        <li>Achieved 3-star rating on Codechef (top 10% performance).</li>
        <li>Solved 501 problems and rated 1797 (top 7%) on Leetcode.</li>
        <li>Qualified GATE 2024 by scoring amongst the top 10% of all applicants.</li>
        <li>Rank 869 (top 3%) in Codeforces Round 898.</li>
        <li>Rank 42 (top 1%) in Codechef Lunchtime June (Div-2).</li>
      </motion.ul>
    </section>
  );
};

export default Achievements;
