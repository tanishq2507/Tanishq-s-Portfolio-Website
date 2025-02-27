import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const profiles = [
  {
    name: "LeetCode",
    rating: "1797",
    solved: "501 problems",
    icon: <SiLeetcode className="w-10 h-10" />,
    link: "https://leetcode.com/u/tanishqlohia/"
  },
  {
    name: "Codeforces",
    rating: "1438",
    solved: "787 problems",
    icon: <SiCodeforces className="w-10 h-10" />,
    link: "https://codeforces.com/profile/tanishq2507"
  },
  {
    name: "Codechef",
    rating: "3-star",
    solved: "246 problems",
    icon: <SiCodechef className="w-10 h-10" />,
    link: "https://www.codechef.com/users/tanishq2507"
  }
];

const CodingProfiles = () => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <section className="p-8 bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Coding Profiles</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {profiles.map((profile, index) => (
          <motion.div
            key={`${animationKey}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow bg-gray-800"
          >
            <div className="mb-4">
              {profile.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">{profile.name}</h3>
            <p className="mb-1 text-gray-300">
              Rating: <span className="font-medium">{profile.rating}</span>
            </p>
            {profile.solved && (
              <p className="mb-4 text-gray-300">
                {profile.solved}
              </p>
            )}
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-auto"
            >
              Visit Profile
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
