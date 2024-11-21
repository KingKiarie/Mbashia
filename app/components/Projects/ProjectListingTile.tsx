'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({ id, imageRef, title, shortDescription, framework }) => {
  return (
    <Link href={`/projects/${id}`} passHref>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-[550px] w-[500px] border  bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
      >
        <div className=" h-[60%] mb-10 ">
          <img
            src={imageRef}
            alt={title}
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </div>
        <div className="h">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
            {title}
          </h2>
          <p className="text-gray-500 hover:text-black dark:text-gray-400 mb-3 transition-all duration-300">
            {shortDescription}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Framework:</strong> {framework}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
