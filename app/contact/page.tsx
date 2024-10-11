"use client";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact({ Email: email }) {
  return (
    <section className="w-full h-auto max-w-[60%] mx-auto flex flex-col">
      <motion.div
        className="mb-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-[48px] font-bold">Contact Me</h1>
        <p>
          Get in touch or shoot me an email directly on{" "}
          <span className="font-bold">mbashiavictor@gmail.com</span>
        </p>
      </motion.div>

      <motion.div
        className="w-full flex items-start"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        <form className="mx-auto w-full bg-white p-8 space-y-6">
          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          >
            <label htmlFor="name" className="text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-50 transition duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          >
            <label htmlFor="email" className="text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-50 transition duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
          >
            <label htmlFor="message" className="text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-50 transition duration-300"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-auto p-4 bg-white-800 text-black rounded-md border-2 border-black rounded-r-xl hover:bg-black hover:text-white transition duration-300"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
