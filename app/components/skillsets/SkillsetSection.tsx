'use client';

import React from 'react';
import {
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
  FaUsers,
  FaTools,
  FaLightbulb,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SkillsetSection() {
  return (
    <motion.section
      className="w-full py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        className="w-full max-w-[80%] lg:max-w-[60%] mx-auto text-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className="mb-16">
          <h1 className="text-4xl lg:text-[36px] font-bold text-gray-800 dark:text-gray-200 mb-4 flex-start">
            My Skillset
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            A combination of technical and interpersonal skills that make me an
            effective developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <FaCode className="text-4xl text-blue-500 dark:text-blue-400 mb-4" />
              ),
              title: 'Programming',
              description:
                'Expertise in JavaScript, React, Next.js, Node.js, and TypeScript.',
            },
            {
              icon: (
                <FaLaptopCode className="text-4xl text-blue-500 dark:text-blue-400 mb-4" />
              ),
              title: 'Frontend & Backend',
              description:
                'Building responsive UIs and scalable server-side applications.',
            },
            {
              icon: (
                <FaProjectDiagram className="text-4xl text-blue-500 dark:text-blue-400 mb-4" />
              ),
              title: 'Project Management',
              description:
                'Agile methodologies, team collaboration, and task management.',
            },
            {
              icon: (
                <FaUsers className="text-4xl text-green-500 dark:text-green-400 mb-4" />
              ),
              title: 'Teamwork & Communication',
              description:
                'Excellent collaboration and interpersonal communication.',
            },
            {
              icon: (
                <FaLightbulb className="text-4xl text-green-500 dark:text-green-400 mb-4" />
              ),
              title: 'Problem Solving',
              description:
                'Ability to think critically and resolve complex issues.',
            },
            {
              icon: (
                <FaTools className="text-4xl text-green-500 dark:text-green-400 mb-4" />
              ),
              title: 'Adaptability',
              description:
                'Quickly adapting to new environments and technologies.',
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {skill.icon}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Link href={{ pathname: '/about', query: { section: 'skillset' } }}>
            <button className="px-8 py-4 text-lg font-semibold  underline underline-offset-4 rounded-md text-black ease-in duration-300">
              View Full Skillset
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
