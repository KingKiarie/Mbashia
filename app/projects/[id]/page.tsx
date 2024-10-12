"use client";

import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { projectData } from "@/app/shared/data";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params;

  const [showVideo, setShowVideo] = useState(false);
  const videoModalRef = useRef(null);

  const selectedProject = projectData.find((proj) => proj.id === id);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const toggleVideoModal = () => {
    setShowVideo(!showVideo);
  };

  const handleClickOutside = (event) => {
    if (
      videoModalRef.current &&
      !videoModalRef.current.contains(event.target)
    ) {
      setShowVideo(false);
    }
  };

  useEffect(() => {
    if (showVideo) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showVideo]);

  return (
    <section className="relative w-full h-auto max-w-[60%] mx-auto mt-20 px-4">
      {showVideo && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`mb-8 ${showVideo ? "blur-md" : ""}`}
      >
        <div className="w-full h-80 bg-gray-200 rounded-md mb-4 p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold">{selectedProject.title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-1/4 flex flex-col  space-x-4 mb-8 space-y-6 items-start "
          >
            <a
              href={selectedProject.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-md font-semibold underline underline-offset-4 text-black rounded-md flex"
            >
              <span>View Live Demo</span>
              <FaArrowRight className="ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:-rotate-45" />
            </a>

            <button
              onClick={toggleVideoModal}
              className="px-8 py-2 text-md font-semibold border-2 border-black text-black rounded-md hover:bg-black hover:text-white duration-300 transition-colors"
            >
              Play Video
            </button>
          </motion.div>
        </div>
      </motion.div>

      {showVideo && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div
            ref={videoModalRef}
            className="relative w-[80%] h-[80%] bg-black rounded-lg p-4"
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={toggleVideoModal}
            >
              &times;
            </button>

            <iframe
              src={selectedProject.videoUrl}
              className="w-full h-full rounded-md"
              title="Project Overview Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8 flex flex-col lg:flex-row w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-[70%] py-4"
        >
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 text-balance">
            {selectedProject.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileHover={{
            x: [0, 5, -5, 5, -5, 0],
            y: [0, , -5, 5, 0],
            transition: { duration: 0.3, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
          }}
          className="w-[30%] border-2 rounded-xl border-black p-4"
        >
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 flex flex-col">
            {selectedProject.techStack.join(", ")}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold">Roles Played</h2>
        <ul className="list-disc flex flex-col ml-8">
          {selectedProject.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-8"
      >
        <Link href="/projects">
          <button className="underline underline-offset-4 flex flex-row items-center space-x-2">
            <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <FaArrowLeft />
            </motion.span>
            <span>Go back</span>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
