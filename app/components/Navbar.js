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
      className="w-full fixed top-0 left-0 
      backdrop-blur-xl
      bg-white/40 dark:bg-gray-900/30 
      border-b border-white/20 dark:border-gray-700/40
      shadow-[0_4px_30px_rgba(0,0,0,0.05)]
      z-50 transition-all"
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
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800 dark:text-gray-200">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="relative">
              <span>{l.name}</span>

              {/* ACTIVE LINK HIGHLIGHT */}
              {pathname === l.href && (
                <span className="
                  absolute left-0 right-0 -bottom-1 mx-auto
                  h-[2px] w-full
                  bg-blue-600 dark:bg-blue-400
                  rounded-full
                  animate-pulse
                " />
              )}
            </Link>
          ))}

          <a
            href="https://drive.google.com/uc?export=download&id=DEMO_ID"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Resume
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          className="md:hidden text-3xl p-2 rounded-md 
          bg-gray-100 dark:bg-gray-800 
          text-gray-900 dark:text-gray-200 shadow-sm"
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
              md:hidden 
              backdrop-blur-xl
              bg-white/50 dark:bg-gray-900/40 
              border-t border-white/20 dark:border-gray-700/40
              shadow-xl 
              px-6 py-4 
              flex flex-col gap-4 
              text-gray-800 dark:text-gray-200
            "
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="relative py-1"
              >
                {l.name}

                {/* MOBILE ACTIVE LINK INDICATOR */}
                {pathname === l.href && (
                  <span className="
                    absolute left-0 right-0 -bottom-1 mx-auto
                    h-[2px] w-full
                    bg-blue-600 dark:bg-blue-400
                    rounded-full
                  " />
                )}
              </Link>
            ))}

            <a
              href="https://drive.google.com/uc?export=download&id=DEMO_ID"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
