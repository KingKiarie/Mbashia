"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaArrowRight,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <>
      <section className="w-full h-auto max-w-[90%] lg:max-w-[60%] mx-auto space-y-10 items-center justify-evenly my-10 lg:my-20">
        <div className="w-full h-auto flex flex-col space-y-6 lg:space-y-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-start space-y-4 lg:space-y-2"
          >
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold">
              I'M VICTOR MBASHIA
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
              Your friendly neighborhood frontend developer, UX architect, and
              JavaScript engineer. I spend my days (and often nights) painting
              the Internet canvas with projects and lines of code, turning
              zeroes and ones into immersive, interactive experiences.
            </p>
            <br />
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
              Bona fide photochromic Lens enthusiast—sunlight or indoors, I’ve
              got it covered. I tread the path of minimalism, finding beauty in
              simplicity and order. When I’m not crafting beautiful web
              experiences, you can find me reading articles or swaying to the
              rhythm of Pop Music & Jazz, losing myself in the captivating flow
              of melodies. Anyways, you can{" "}
              <Link href="#" className="font-bold hover:underline">
                Contact Me
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
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
                    repeatType: "loop",
                    ease: "easeInOut",
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
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
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
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="w-full flex flex-row space-x-4 lg:space-x-6 justify-center lg:justify-start"
          >
            <FaTwitter className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            <FaFacebookF className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            <FaLinkedinIn className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            <FaGithub className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 transition" />
            <FaDribbble className="text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition" />
            <FaInstagram className="text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
