"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      className="
        min-h-screen 
        flex items-center justify-center 
        px-6 md:px-20 
        pt-10 md:pt-0

        bg-gradient-to-b 
        from-blue-50 via-white to-white
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-950
        transition-all
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-14">

        {/* LEFT SECTION ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi,<br />
            I'm <span className="text-blue-600 dark:text-blue-400">Soniya</span><br />
            Web Developer
          </h1>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-center"
          >
            Contact
          </motion.a>

          {/* Social Icons */}
          <motion.div
            className="flex gap-5 text-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <a
              href="https://www.linkedin.com/in/soniya-kolvekar-a67927330/"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/soniya-kolvekar"
              target="_blank"
              className="hover:text-gray-700 dark:hover:text-gray-200 transition"
            >
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION WITH GLOW + ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* ✨ Radial Glow Behind Image */}
          <div className="absolute inset-0 blur-3xl opacity-40 bg-blue-400 dark:bg-blue-600 rounded-full scale-150 -z-10" />

          {/* Profile Image */}
          <div className="rounded-full bg-blue-600 dark:bg-blue-500 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shadow-lg overflow-hidden p-2">
            <Image
              src="https://drive.google.com/uc?export=view&id=1stOIYxPzl7ZXwvDhS619c2UyHbeCxsr7"
              width={260}
              height={260}
              alt="Profile"
              className="rounded-full object-cover scale-125"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
