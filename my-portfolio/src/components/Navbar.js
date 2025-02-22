import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center p-4">
      <h2 className="text-2xl font-bold">Tanishq Lohia</h2>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
        <li><Link to="/experience" className="hover:text-gray-300">Experience</Link></li>
        <li><Link to="/education" className="hover:text-gray-300">Education</Link></li>
        <li><Link to="/achievements" className="hover:text-gray-300">Achievements</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
