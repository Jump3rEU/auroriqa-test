"use client";

import { motion } from "framer-motion";

export default function FloatingGeometry() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: "transform" }}>
      {/* Floating hexagons */}
      <motion.div
        className="absolute top-20 left-[15%] w-32 h-32"
        style={{ willChange: "transform, opacity" }}
        animate={{
          y: [0, -50, 0],
          rotate: [0, 120, 0],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating triangle */}
      <motion.div
        className="absolute top-1/3 right-[20%] w-40 h-40"
        style={{ willChange: "transform, opacity" }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, -90, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating circle */}
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-36 h-36"
        style={{ willChange: "transform, opacity" }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating square */}
      <motion.div
        className="absolute top-2/3 right-[15%] w-28 h-28"
        style={{ willChange: "transform, opacity" }}
        animate={{
          y: [0, 35, 0],
          rotate: [0, 45, 0],
          opacity: [0.09, 0.2, 0.09],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="url(#gradient4)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Removed dot grid for performance */}
    </div>
  );
}
