"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  imageRef,
  title,
  description,
  liveDemo,
  framework,
}) => {
  return (
    <Link href={`/projects/${id}`}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-110"
      >
        <div className="h-40 bg-gray-300">
          <img
            src={imageRef}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
            {title}
          </h2>
          <p className="text-gray-500 hover:text-black dark:text-gray-400 mb-2 transition-all duration-300">
            {description}
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            <strong>Framework: </strong> {framework}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
