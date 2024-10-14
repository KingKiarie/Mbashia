"use client";

import { useState } from "react";
import { testimonials } from "../shared/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

export default function TestimonialsComponent() {
  return (
    <section className="w-full h-auto max-w-[90%] mx-auto flex flex-col justify-evenly items-start p-2 md:p-0 lg:p-0 md:max-w-[60%] lg:max-w-[60%] space-y-6 mb-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-start">
          Hear from Satisfied Clients
        </h1>
      </motion.div>
      <Swiper modules={[Navigation]} navigation loop={true} className="w-full">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center p-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <p className="italic text-start px-4 md:px-10">
                {testimonial.testimony}
              </p>
              <div className="flex flex-col items-start px-4 md:px-10 mt-2">
                <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                <h3 className="text-md text-gray-600 text-center">
                  {testimonial.country}
                </h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
