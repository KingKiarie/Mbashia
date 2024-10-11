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
import { SiElixir, SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";

const SkillSetTiles = () => {
  const [selectedSkill, setSelectedSkill] = useState("soft");

  const softSkills = [
    {
      icon: <FaReact />,
      title: "Communication",
      description: "Effectively articulating ideas and concepts to others.",
    },
    {
      icon: <FaReact />,
      title: "Teamwork",
      description: "Collaborating with others to achieve shared goals.",
    },
    {
      icon: <FaReact />,
      title: "Problem-Solving",
      description: "Identifying issues and coming up with creative solutions.",
    },
  ];


  const technicalSkills = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description: "Building responsive and dynamic UI using modern libraries.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <FaNodeJs />,
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
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiElixir />, name: "Elixir" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaPython />, name: "Python" },
  ];

  return (
    <section className="w-full h-auto max-w-[60%] mx-auto my-20">
      <div>
        <h1 className="text-4xl font-bold mb-4">Skillset</h1>
        <p className="mb-6">
          A collection of technical and interpersonal skills that make me a
          competitive developer.
        </p>
      </div>
      <div className="flex flex-row items-start justify-between">
      

        <div className="flex flex-col items-start space-y-4 mr-10">
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
