import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gray-800 text-gray-200 p-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Tanishq Lohia</h2>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/experience" className="hover:text-gray-400">Experience</Link>
          <Link to="/education" className="hover:text-gray-400">Education</Link>
          <Link to="/achievements" className="hover:text-gray-400">Achievements</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2">
            <Link onClick={() => setIsOpen(false)} to="/" className="block hover:text-gray-400">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/projects" className="block hover:text-gray-400">Projects</Link>
            <Link onClick={() => setIsOpen(false)} to="/experience" className="block hover:text-gray-400">Experience</Link>
            <Link onClick={() => setIsOpen(false)} to="/education" className="block hover:text-gray-400">Education</Link>
            <Link onClick={() => setIsOpen(false)} to="/achievements" className="block hover:text-gray-400">Achievements</Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="block hover:text-gray-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
