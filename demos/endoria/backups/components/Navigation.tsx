"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ServerStatus from "./ServerStatus";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Domů", href: "/" },
    { label: "Pravidla", href: "/pravidla" },
    { label: "Tým", href: "/tym" },
    { label: "Hlasování", href: "/hlasovani" },
    { label: "Nábor", href: "/nabor" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl"
      style={{
        background: "linear-gradient(to bottom, rgba(10, 10, 15, 0.85), rgba(88, 28, 135, 0.15))",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              animate={{ 
                y: [0, -2, 0],
                scale: 1,
                rotate: 0
              }}
              transition={{
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: { duration: 0.2 },
                rotate: { duration: 0.2 }
              }}
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-xl"
                animate={{
                  opacity: [0.25, 0.35, 0.25]
                }}
                whileHover={{ opacity: 0.5 }}
                transition={{
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <div className="relative w-12 h-12">
                <Image 
                  src="/media/endoriaV2.png"
                  alt="Endoria Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
            <motion.h1 
              className="font-['Lexend'] font-black text-xl relative"
              initial={false}
            >
              <span className="relative z-10 text-white transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                ENDORIA
              </span>
              <span className="absolute inset-0 z-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                ENDORIA
              </span>
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-sm font-bold relative group transition-colors ${
                  pathname === link.href
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right side - Status & Discord */}
          <div className="hidden lg:flex items-center gap-4">
            <ServerStatus variant="badge" />
            
            <motion.a
              href="https://discord.endoria.eu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2 text-white font-bold text-sm">
                <FaDiscord className="text-lg" />
                Discord
              </div>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0 }}
              animate={{ 
                opacity: 1, 
                height: "auto",
                marginTop: 16,
                paddingTop: 16,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  staggerChildren: 0.05,
                  delayChildren: 0.1
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                marginTop: 0,
                paddingTop: 0,
                transition: {
                  duration: 0.25,
                  ease: "easeIn"
                }
              }}
              className="lg:hidden border-t border-pink-500/20 overflow-hidden"
            >
              <motion.div className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-bold py-2 block transition-colors ${
                        pathname === link.href
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400'
                          : 'text-white/70'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <ServerStatus variant="compact" />
                </motion.div>
                <motion.a
                  href="https://discord.endoria.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm"
                >
                  <FaDiscord className="text-lg" />
                  Discord
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
