"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaJs,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import { SiTypescript, SiElixir } from "react-icons/si";

const SkillSetTiles = () => {
  const [selectedSkill, setSelectedSkill] = useState("soft");

  const softSkills = [
    {
      icon: <FaReact style={{ color: "#007acc" }} />,
      title: "Communication",
      description: "Effectively articulating ideas and concepts to others.",
    },
    {
      icon: <FaReact style={{ color: "#007acc" }} />,
      title: "Teamwork",
      description: "Collaborating with others to achieve shared goals.",
    },
    {
      icon: <FaReact style={{ color: "#007acc" }} />,
      title: "Problem-Solving",
      description: "Identifying issues and coming up with creative solutions.",
    },
  ];

  const technicalSkills = [
    {
      icon: <FaReact style={{ color: "#007acc" }} />,
      title: "Frontend Development",
      description: "Building responsive and dynamic UI using modern libraries.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <FaNodeJs style={{ color: "#f7df1e" }} />,
      title: "Backend Development",
      description: "Creating scalable server-side applications and APIs.",
      technologies: ["Node.js", "Express", "Elixir"],
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Designing and optimizing databases for performance.",
      technologies: ["MongoDB", "SQL"],
    },
  ];

  const programmingLanguages = [
    { icon: <FaJs style={{ color: "#f7df1e" }} />, name: "JavaScript" },
    { icon: <SiTypescript style={{ color: "#007acc" }} />, name: "TypeScript" },
    { icon: <SiElixir style={{ color: "#4e2a8e" }} />, name: "Elixir" },
    { icon: <FaPhp style={{ color: "#777bb3" }} />, name: "PHP" },
    { icon: <FaPython style={{ color: "#3776ab" }} />, name: "Python" },
  ];

  return (
    <section className="w-full h-auto max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto my-20">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 ">Skillset</h1>
        <p className="mb-6">
          A collection of technical and interpersonal skills that make me a
          competitive developer.
        </p>
      </div>
      <div className="flex flex-col items-start justify-between space-y-8">
        <div className="w-full flex flex-col space-y-4 md:space-y-0 md:flex-row lg:flex-row justify-evenly  items-center space-x-2 lg:space-x-4 mr-10">
          <button
            onClick={() => setSelectedSkill("soft")}
            className={`border-2 border-black px-8 py-2 rounded-md ${
              selectedSkill === "soft"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            } transition duration-300 ease-in`}
          >
            Soft Skills
          </button>
          <button
            onClick={() => setSelectedSkill("technical")}
            className={`border-2 border-black px-8 py-2 rounded-md ${
              selectedSkill === "technical"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            } transition duration-300 ease-in`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSelectedSkill("languages")}
            className={`border-2 border-black px-8 py-2 rounded-md ${
              selectedSkill === "languages"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            } transition duration-300 ease-in`}
          >
            Programming Languages
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {selectedSkill === "soft" &&
            softSkills.map((skill, index) => (
              <SoftSkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}

          {selectedSkill === "technical" &&
            technicalSkills.map((skill, index) => (
              <TechnicalSkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                technologies={skill.technologies}
              />
            ))}

          {selectedSkill === "languages" &&
            programmingLanguages.map((lang, index) => (
              <LanguageCard key={index} icon={lang.icon} name={lang.name} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

const SoftSkillCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white shadow-md p-6 rounded-lg "
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold flex items-center space-x-2">
        {icon} <span>{title}</span>
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

const TechnicalSkillCard = ({ icon, title, description, technologies }) => {
  return (
    <motion.div
      className="bg-gray-100 shadow-md p-6 rounded-lg b"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold flex items-center space-x-2">
        {icon} <span>{title}</span>
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <ul className="list-disc list">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const LanguageCard = ({ icon, name }) => {
  return (
    <motion.div
      className="bg-white shadow-md p-6 rounded-lg bo flex items-center space-x-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
      <span className="text-lg font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillSetTiles;
