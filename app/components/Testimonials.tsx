"use client";

import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { testimonials } from "../shared/data";

export default function TestimonialsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-[40vh] max-w-[80%] mx-auto flex flex-col justify-evenly items-start p-4 md:p-0 lg:p-0 md:max-w-[60%] lg:max-w-[60%] space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-start">
          Hear from Satisfied Clients
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
        <div key={currentIndex} className="flex-grow">
          <div>
            <p className="italic text-start px-4 md:px-10">
              {testimonials[currentIndex].testimony}
            </p>
          </div>
          <div className="flex flex-col items-start px-4 md:px-10 mt-2">
            <h2 className="text-lg font-semibold">
              {testimonials[currentIndex].name}
            </h2>
            <h3 className="text-md text-gray-600 text-center">
              {testimonials[currentIndex].country}
            </h3>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button
            onClick={prevTestimony}
            className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center transition duration-200 hover:bg-gray-200"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={nextTestimony}
            className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center transition duration-200 hover:bg-gray-200"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}
