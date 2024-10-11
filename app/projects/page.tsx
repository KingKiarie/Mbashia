"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectListingTile";
import { projectData } from "../shared/data";

export default function Projects() {
  return (
    <section className="w-full h-auto max-w-[70%] mx-auto mt-20 px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10"
      >
        <h1 className="text-4xl font-black text-gray-800 dark:text-gray-200 mb-6">
          Projects.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Here’s a curated collection of projects covering different web
          development technologies and concepts.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* mapped and mounted the day with dynamic routes prerendered */}
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            imageRef={project.imageRef}
            title={project.title}
            description={project.description}
            liveDemo={project.liveDemo}
            framework={project.framework}
          />
        ))}
      </motion.div>
    </section>
  );
}
