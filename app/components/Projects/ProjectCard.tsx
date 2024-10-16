"use client";
import React from "react";
import ProjectCard from "./ProjectListingTile";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectData } from "@/app/shared/data";

const ProjectListing = () => {
  return (
    <section className="w-full h-auto py-10 md:py-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto flex flex-col items-start justify-start"
      >
        <div className="mb-10 md:mb-12">
          <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-4 text-start">
            Project Highlights
          </h1>
          <p className="text-[14px] md:text-lg lg:text-[15px] text-gray-600 text-start">
            A quick overview of some of my top projects, showcasing my expertise
            and creativity.
          </p>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2  gap-4 md:gap-8"
        >
          {projectData.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id}
              title={project.title}
              framework={project.framework}
              shortDescription={project.shortDescription}
              imageRef={project.imageRef}
              liveDemo={project.liveDemo}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mt-8 md:mt-12 w-full"
        >
          <Link href="/projects">
            <button className="flex items-start px-8 py-4 text-lg font-semibold  underline underline-offset-4 rounded-md text-black ease-in duration-300">
              View more projects
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectListing;
