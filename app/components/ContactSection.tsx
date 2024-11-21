'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const serviceId = 'service_jge3vmr'; //replace with your service id keys
  const templateId = 'template_3o594wl'; //replace with your Template id keys
  const userId = 'DJvNtxWPvhGUSef77'; //replace with your User id keys

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);

        toast.success('Message sent successfully!');

        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);

        toast.error('Error sending message. Please try again.');
      });
  };

  return (
    <section
      className="w-full h-auto max-w-[90%] lg:max-w-[60%] mx-auto flex flex-col"
      id="#contact"
    >
      <ToastContainer />
      <motion.div
        className="mb-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p>
          Get in touch or shoot me an email directly on{' '}
          <span className="font-bold">mbashiavictor@gmail.com</span>
        </p>
      </motion.div>
      <motion.div
        className="w-full flex items-start"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
      >
        <form className="mx-auto w-full  p-8 space-y-6" onSubmit={handleSubmit}>
          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
          >
            <label htmlFor="name" className="text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:bg-transparent transition duration-300"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
          >
            <label htmlFor="email" className="text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:bg-transparent transition duration-300"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.5 }}
          >
            <label htmlFor="message" className="text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:bg-transparent transition duration-300"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-auto p-4 bg-white-800 text-black px-8 py-4 border-2 border-black rounded-xl hover:bg-black hover:text-white transition duration-300"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
