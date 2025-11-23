"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full fixed top-0 left-0 z-[9999] transition-all backdrop-blur-xl
        bg-gradient-to-r 
        from-white/60 to-white/30
        dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        border-b border-white/20 dark:border-gray-800/50
        shadow-[0_4px_30px_rgba(0,0,0,0.05)]
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold"
        >
          Soniya Kolvekar
        </motion.h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                pathname === l.href
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {l.name}
            </Link>
          ))}

                    <a
            href="https://drive.google.com/file/d/1Sh8WMrnjvhyit3Ueb5OG-NJxgizh9R6Q/view"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
            Resume
            </a>

        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          className="
            md:hidden text-3xl p-2 rounded-md
            bg-gray-200 dark:bg-gray-800 
            text-gray-900 dark:text-gray-100 
            shadow-sm z-[999]
          "
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </motion.button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden backdrop-blur-xl
              bg-white/70 dark:bg-gray-900/70
              border-t border-gray-200 dark:border-gray-700 
              shadow-xl px-6 py-4 flex flex-col gap-4
              text-gray-900 dark:text-gray-200 
              z-[999]
            "
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-1 ${
                  pathname === l.href
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {l.name}
              </Link>
            ))}

            <a
              href="https://drive.google.com/uc?export=download&id=DEMO_ID"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-center rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
