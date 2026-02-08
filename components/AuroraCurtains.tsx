"use client";

import { motion } from "framer-motion";

export default function AuroraCurtains() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main Aurora Wave - Dominant Green (classic aurora) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(16, 185, 129, 0.5) 0%, rgba(34, 197, 94, 0.4) 25%, rgba(6, 182, 212, 0.3) 50%, rgba(59, 130, 246, 0.2) 75%, transparent 100%)",
          filter: "blur(60px)",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Aurora - Blue/Violet from bottom */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 100% 70% at 50% 120%, rgba(99, 102, 241, 0.45) 0%, rgba(139, 92, 246, 0.35) 40%, rgba(16, 185, 129, 0.25) 70%, transparent 100%)",
          filter: "blur(70px)",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Side Aurora - Teal/Green flowing from left */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 100% at -20% 50%, rgba(5, 150, 105, 0.4) 0%, rgba(16, 185, 129, 0.3) 35%, rgba(6, 182, 212, 0.2) 65%, transparent 85%)",
          filter: "blur(80px)",
          willChange: "opacity",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Pink/Violet Aurora from right (rare but realistic) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 120% 50%, rgba(167, 139, 250, 0.4) 0%, rgba(219, 39, 119, 0.25) 40%, rgba(16, 185, 129, 0.15) 70%, transparent 85%)",
          filter: "blur(80px)",
          willChange: "opacity",
        }}
        animate={{
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12,
        }}
      />

      {/* Flowing Aurora Waves - Very slow undulating effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent 0%,
              rgba(16, 185, 129, 0.15) 25%,
              rgba(6, 182, 212, 0.18) 50%,
              rgba(99, 102, 241, 0.12) 75%,
              transparent 100%
            )
          `,
          filter: "blur(50px)",
          backgroundSize: "300% 100%",
          willChange: "background-position",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Bright Aurora Core - Occasional bright flash */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 90% 40% at 50% 20%, rgba(16, 185, 129, 0.6) 0%, rgba(34, 197, 94, 0.4) 30%, transparent 60%)",
          filter: "blur(40px)",
          willChange: "opacity",
        }}
        animate={{
          opacity: [0, 0.3, 0.7, 0.3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}
