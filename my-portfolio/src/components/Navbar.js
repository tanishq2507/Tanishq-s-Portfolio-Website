import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-gray-200 flex justify-between items-center p-4 transition-colors duration-300">
      <h2 className="text-2xl font-bold">Tanishq Lohia</h2>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
        <li><Link to="/education" className="hover:text-gray-400">Education</Link></li>
        <li><Link to="/achievements" className="hover:text-gray-400">Achievements</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
