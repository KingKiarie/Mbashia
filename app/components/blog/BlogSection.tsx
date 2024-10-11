"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ imageRef, title, excerpt, link }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform transform duration-300"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="w-full h-40 overflow-hidden">
        <img
          src={imageRef}
          alt="blog-post"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link href={link}>
          <span className="text-gray-500 hover:text-black hover:underline">
            Read More
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default function BlogSection() {
  const blogs = [
    {
      imageRef: "#",
      title: "Understanding React Hooks",
      excerpt:
        "React Hooks have revolutionized the way we write React components. Learn the basics and advanced techniques...",
      link: "/blogs/react-hooks",
    },
    {
      imageRef: "#",
      title: "JavaScript ES6 Features",
      excerpt:
        "Explore the new features introduced in ES6, including arrow functions, destructuring, and more...",
      link: "/blogs/javascript-es6",
    },
    {
      imageRef: "#",
      title: "CSS Grid Layout: A Complete Guide",
      excerpt:
        "CSS Grid Layout is a powerful layout system available in CSS. This guide will show you how to get started...",
      link: "/blogs/css-grid-layout",
    },
  ];

  return (
    <motion.section
      className="w-full py-16"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="w-full max-w-[60%] mx-auto text-start"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Latest Blog Posts
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Stay updated with the latest in web development, design, and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              imageRef={blog.imageRef}
              title={blog.title}
              excerpt={blog.excerpt}
              link={blog.link}
            />
          ))}
        </div>

        <div className="mt-16">
          <Link href="/blogs">
            <motion.button
              className="px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white border-black border-2 rounded-md text-black ease-in duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
