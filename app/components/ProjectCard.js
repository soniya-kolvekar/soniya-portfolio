"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ title, year, desc, tech, repo, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}

      className="
        rounded-xl p-5 
        bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700
        shadow-sm 
        hover:shadow-xl 
        hover:-translate-y-2
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* Image with subtle hover zoom */}
      {img && (
        <div className="w-full h-44 relative overflow-hidden rounded-lg mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      )}

      {/* Title and Year */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {desc}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="
              px-2 py-1 text-xs 
              bg-gray-100 dark:bg-gray-700 
              border border-gray-200 dark:border-gray-600
              rounded-md 
              text-gray-800 dark:text-gray-200
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub Link */}
      <a
        href={repo}
        target="_blank"
        className="
          text-indigo-600 dark:text-indigo-400 
          text-sm mt-4 inline-block font-medium
          hover:underline
        "
      >
        View on GitHub →
      </a>
    </motion.div>
  );
}
