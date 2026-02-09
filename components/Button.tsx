"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: LucideIcon;
  showArrow?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  showArrow = false,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-12 py-5 text-lg sm:text-xl",
    xl: "px-16 py-6 text-xl sm:text-2xl",
  };

  const baseClasses = `${fullWidth ? 'w-full sm:w-auto' : ''} inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-500 ${sizeClasses[size]} ${className}`;

  const variants = {
    primary: (
      <motion.div
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative"
      >
        <Component
          href={href}
          onClick={onClick}
          className={`${baseClasses} relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25),0_0_80px_rgba(16,185,129,0.3)]`}
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 via-blue-500 to-emerald-500"
            style={{ backgroundSize: "200% 100%" }}
          />
          
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/40 via-cyan-400/40 to-blue-400/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            animate={{
              x: ["-200%", "200%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            style={{
              background: 'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.6) 50%, transparent 80%)',
            }}
          />
          
          {/* Content */}
          <span className="relative z-10 flex items-center gap-3 text-white drop-shadow-lg">
            {Icon && <Icon className="w-5 h-5" />}
            {children}
            {showArrow && (
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            )}
          </span>
        </Component>
      </motion.div>
    ),

    secondary: (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Component
          href={href}
          onClick={onClick}
          className={`${baseClasses} bg-white/[0.08] hover:bg-white/[0.15] border-2 border-white/30 hover:border-white/50 text-white backdrop-blur-xl shadow-[0_10px_40px_rgba(255,255,255,0.1)]`}
        >
          {Icon && <Icon className="w-5 h-5" />}
          {children}
          {showArrow && <ArrowRight className="w-5 h-5" />}
        </Component>
      </motion.div>
    ),

    outline: (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="group"
      >
        <Component
          href={href}
          onClick={onClick}
          className={`${baseClasses} bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-emerald-500 text-gray-900 hover:text-emerald-600 shadow-lg hover:shadow-xl transition-all`}
        >
          {Icon && <Icon className="w-5 h-5" />}
          {children}
          {showArrow && (
            <motion.div
              className="group-hover:translate-x-1 transition-transform"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          )}
        </Component>
      </motion.div>
    ),
  };

  return variants[variant];
}

// Component wrapper to handle both anchor and button
function Component({
  href,
  onClick,
  className,
  children,
}: {
  href?: string;
  onClick?: () => void;
  className: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
