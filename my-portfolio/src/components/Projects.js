import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Newspaper Article Detection and Recognition",
    description: "Developed a deep learning model using YOLOv8 and Tesseract OCR to detect and segregate articles from newspapers. Deployed as a Telegram bot.",
    github: "https://github.com/tanishq2507/newspaper_bott_deployed"
  },
  {
    title: "Gomato Restaurant Finder",
    description: "A full-stack restaurant finder application using React, Node, and PostgreSQL with image search powered by Gemini API.",
    github: "https://github.com/tanishq2507/Gomato_Restaurant_finder"
  },
  {
    title: "Automated Bill Screenshot Tool for Swiggy",
    description: "A Python-based tool using Selenium to automate bill screenshot capture and data archiving.",
    github: "https://github.com/tanishq2507/Automated_Bill_screenshot_tool_for_swiggy"
  },
  {
    title: "Dog Image Gallery",
    description: "An interactive image gallery application using React and the Dogs API with responsive design and dynamic background color picker.",
    github: "https://github.com/tanishq2507/Dog-Images-Gallery-"
  }
];

const Projects = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
