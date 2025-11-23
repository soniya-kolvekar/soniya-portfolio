"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      detail: "soniyakolvekar7@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=soniyakolvekar7@gmail.com",
      icon: <FaEnvelope className="text-3xl" />,
    },
    {
      title: "Phone",
      detail: "+91 8618950479",
      link: "tel:+918618950479",
      icon: <FaPhone className="text-3xl" />,
    },
    {
      title: "LinkedIn",
      detail: "soniya-kolvekar",
      link: "https://www.linkedin.com/in/soniya-kolvekar-a67927330/",
      icon: <FaLinkedin className="text-3xl" />,
    },
    {
      title: "GitHub",
      detail: "soniya-kolvekar",
      link: "https://github.com/soniya-kolvekar",
      icon: <FaGithub className="text-3xl" />,
    },
    {
      title: "Instagram",
      detail: "soniya_kolvekar",
      link: "https://www.instagram.com/soniya_kolvekar?igsh=dXhmMndkcTZmOThv",
      icon: <FaInstagram className="text-3xl" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="
        relative
        min-h-screen px-6 md:px-20 py-16
        bg-gradient-to-b from-blue-50 via-white to-white
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-950
        transition-all
      "
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-20 left-10 text-blue-400 text-5xl"
        >
          <FaLinkedin />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute bottom-32 right-10 text-pink-400 text-5xl"
        >
          <FaInstagram />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute bottom-16 left-24 text-gray-400 dark:text-gray-600 text-4xl"
        >
          <FaGithub />
        </motion.div>
      </div>

      {/* Glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 blur-[110px] opacity-40 dark:opacity-30
        bg-blue-300 dark:bg-blue-700 w-[500px] h-[300px] rounded-full -z-10">
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Animated Title */}
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-8"
        />

        {/* Intro */}
        <motion.p
          variants={item}
          className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed"
        >
          Reach out to me through the platforms below, I’m always open to 
          opportunities, collaborations, and connecting with new people.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contacts.map((c) => (
            <motion.a
              key={c.title}
              variants={item}
              href={c.link}
              target="_blank"
              className="
                p-5 rounded-xl
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                shadow-md hover:shadow-2xl
                hover:-translate-y-2 transition-all
                flex flex-col items-center gap-3 text-center
              "
            >
              <div className="text-blue-600 dark:text-blue-400">
                {c.icon}
              </div>

              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {c.title}
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-300">
                {c.detail}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
