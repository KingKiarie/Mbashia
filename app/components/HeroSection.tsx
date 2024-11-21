'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaArrowRight,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';

export default function HeroSection() {
  const handleMail = () => {
    const email = 'kiarie7mbugua@gmail.com';
    const subject = 'Enter your subject clause here';
    const body = 'I would like to inquire about your services on the projects';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="w-full h-auto max-w-[90%] lg:max-w-[60%] mx-auto space-y-10 items-center justify-evenly my-10 lg:my-20 ">
        <div className="w-full h-auto flex flex-col space-y-6 lg:space-y-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex flex-col items-start space-y-4 lg:space-y-2"
          >
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold">
              I'M VICTOR MBASHIA
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
              I specialize in creating scalable, impactful solutions using
              Elixir, Phoenix LiveView, JavaScript, React, MySQL, PostgreSQL,
              and Alpine.js. I excel at business analysis, which allows me to
              understand complex business models and translate them into simple,
              effective software solutions. As a tech writer, I enjoy sharing my
              knowledge with the tech community and helping others learn. I'm
              driven by using technology not just for the sake of innovation,
              but to improve the quality of life and make a meaningful impact on
              the lives of individuals. Always eager to grow and stay ahead of
              the curve, I’m committed to excellence and love solving complex
              problems every day.
            </p>
            <br />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="flex justify-start"
          >
            <Link href="/about">
              <button className="flex flex-row items-center space-x-2 md:space-x-4 no-underline hover:underline hover:underline-offset-8 transition ease-in-out duration-300">
                <span className="text-sm md:text-base">See More About Me</span>
                <motion.div
                  className="inline-block"
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                >
                  <FaArrowRight className="font-light" />
                </motion.div>
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="flex justify-start"
          >
            <Link href="/about">
              <button className="flex flex-row items-center space-x-2 md:space-x-4 no-underline hover:underline hover:underline-offset-8 transition ease-in-out duration-300">
                <span className="text-sm md:text-base">Download Resume</span>
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="w-full flex flex-row space-x-4 lg:space-x-6 justify-center lg:justify-start"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-mbashia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            </a>
            <a
              href="https://github.com/mbashia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <FaDribbble className="text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition" />
            </a> */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition" />
            </a>
            <a onClick={handleMail}>
              <FaEnvelope className="text-lg md:text-xl lg:text-2xl hover:text-gray-500 transition cursor-pointer" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
