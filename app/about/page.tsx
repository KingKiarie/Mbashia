'use client';

import { motion } from 'framer-motion';
import SkillSetTiles from '../components/skillsets/SkillSets';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section === 'skillset') {
      const SkillsetSection = document.getElementById('skillset');
      if (SkillsetSection) {
        SkillsetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <section className="w-full h-auto py-16 ">
      <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
        <div className="w-full flex flex-col-reverse lg:flex-row ">
          <div className="w-full flex flex-col">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="mb-12 py-4"
            >
              <h1 className="text-4xl font-bold mb-4">Welcome to My World!</h1>
              <p className="text-lg text-gray-600">
                I’m Victor Mbashia, a passionate full-stack developer with a
                strong commitment to building engaging, accessible, and
                user-friendly web applications. My journey in tech has allowed
                me to explore a diverse range of technologies and platforms,
                enhancing my skills along the way.
              </p>
              <Link href={'#'} passHref legacyBehavior>
                <a href="#" download="filename.pdf">
                  <button className="underline underline-offset-4">
                    Download Resume
                  </button>
                </a>
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold">My Core Values</h2>
              <ul className="list-disc ml-6 mt-4 text-gray-600">
                <li>Commitment to excellence</li>
                <li>Continuous learning and growth</li>
                <li>Integrity and transparency</li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="w-full mb-10 flex items-center justify-center"
          >
            <img
              src="/background/mbashia-removebg-preview.png"
              alt="Img"
              className="rounded-b-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-4 text-gray-600">
            From frontend frameworks like React and Vue to backend technologies
            like Node.js and Express, I’m well-versed in a range of tools and
            platforms to create complete web solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
          className="mt-12"
        >
          <Link href="/projects">
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition duration-300">
              Explore My Projects
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        id="skillset"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
      >
        <SkillSetTiles />
      </motion.div>
    </section>
  );
}
