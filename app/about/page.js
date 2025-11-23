"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="
        min-h-screen 
        px-6 md:px-20 py-16
        bg-gradient-to-b 
        from-blue-50 via-white to-white
        dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        transition-all
      "
    >
      {/* ---------- HERO SECTION ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl">
          I'm Soniya, a passionate Web Developer who loves building clean,
          modern interfaces and exploring new technologies. From volunteering
          at events, to participating in hackathons, to contributing to
          community-driven initiatives, my journey in tech has shaped who I am
          today. I believe in learning by doing, and I’m constantly pushing
          myself to grow through hands-on projects and real-world experiences.
        </p>
      </motion.div>

      {/* ---------- JOURNEY IMAGES SECTION ---------- */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl font-semibold mt-16 mb-6"
      >
        My Journey
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* ---- DEVHOST ---- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
        >
          <Image
            src="https://drive.google.com/uc?export=view&id=1XJOVgBfUVIpqwKL4keqCp7ctaKJFreZh" 
            alt="Devhost Event"
            width={400}
            height={250}
            className="object-cover w-full h-56"
          />
        </motion.div>

        {/* ---- TECHNOVENZA ---- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
        >
          <Image
            src="https://drive.google.com/uc?export=view&id=1f2B-2STp96-GzuCtRP8RAZ9ft8Qhosgg" 
            alt="Technovenza Volunteering"
            width={400}
            height={250}
            className="object-cover w-full h-56"
          />
        </motion.div>

        {/* ---- SIH HACKATHON ---- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
        >
          <Image
            src="https://drive.google.com/uc?export=view&id=1w8cRFm08BJgw5w3bbXbJ-qF7XKYDTCMI" 
            alt="SIH Hackathon"
            width={400}
            height={250}
            className="object-cover w-full h-56"
          />
        </motion.div>
      </div>

      {/* ---------- COMMUNITY SECTION ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-20 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Community</h2>

        <div className="flex items-center gap-6">
          {/* SOSC Logo */}
          <div className="w-20 h-20 relative">
            <Image
              src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg" // replace with logo
              alt="SOSC Logo"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-gray-700 dark:text-gray-300 max-w-xl">
            Proud member of <span className="font-semibold">Sahyadri Open Source Community (SOSC)</span>,
            where I learned collaboration, open-source culture, teamwork, and
            leadership while working on amazing student-driven tech projects.
          </p>
        </div>

        {/* Community Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="https://www.linkedin.com/company/sosc-sahyadri" 
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            SOSC LinkedIn
          </a>

          <a
            href="https://github.com/so-sc" 
            target="_blank"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            SOSC GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
