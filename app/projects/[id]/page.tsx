"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projectData } from "@/app/shared/data";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params;

  // Finding the corresponding project by ID
  const selectedProject = projectData.find((proj) => proj.id === id);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <section className="w-full h-auto max-w-[70%] mx-auto mt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold">{selectedProject.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {selectedProject.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <div className="w-full h-64 bg-gray-200 rounded-md mb-4">
          <iframe
            src={selectedProject.videoUrl}
            className="w-full h-full rounded-md"
            title="Project Overview Video"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {selectedProject.techStack.join(", ")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8"
      >
        <a
          href={selectedProject.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-lg font-semibold bg-white text-black rounded-md hover:bg-black hover:text-white duration-300 transition-colors border-2 border-black"
        >
          View Live Demo
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold">Roles Played</h2>
        <ul className="list-disc ml-8">
          {selectedProject.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
