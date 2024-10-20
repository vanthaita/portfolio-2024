import React from 'react';
import { motion } from 'framer-motion';

const techItems = [
  'React',
  'TypeScript',
  'Next.js',
  'NestJS',
  'Tailwind CSS',
  'Node.js',
  'Firebase',
  'PostgreSQL',
];

const TechStack = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
      <div className="flex flex-wrap justify-center">
        {techItems.map((tech, index) => (
          <motion.div
            key={index}
            className="m-2 p-2 bg-white rounded-md shadow hover:shadow-lg transition-shadow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
