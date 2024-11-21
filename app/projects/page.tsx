'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../components/Projects/ProjectListingTile';
import { projectData } from '../shared/data';

export default function Projects() {
  return (
    <section className="w-full h-auto max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto mt-20 px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-10 text-start"
      >
        <h1 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-gray-200 mb-4">
          Projects.
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          Explore a curated selection of web development projects showcasing
          various technologies and concepts.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-10"
      >
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            imageRef={project.imageRef}
            title={project.title}
            shortDescription={project.shortDescription}
            liveDemo={project.liveDemo}
            framework={project.framework}
          />
        ))}
      </motion.div>
    </section>
  );
}
