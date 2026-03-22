"use client";

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
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-5 text-sm sm:text-base",
    lg: "h-12 px-6 text-base",
    xl: "h-14 px-7 text-base sm:text-lg",
  };

  const common = `inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-200 focus-ring ${
    fullWidth ? "w-full sm:w-auto" : ""
  } ${sizeClasses[size]} ${className}`;

  const variantClasses = {
    primary:
      "bg-white text-black hover:bg-white/90 active:scale-[0.99] shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
    secondary:
      "bg-white/8 text-white border border-white/20 hover:bg-white/14 hover:border-white/35 active:scale-[0.99]",
    outline:
      "bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/45 active:scale-[0.99]",
  };

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${common} ${variantClasses[variant]}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${common} ${variantClasses[variant]}`}>
      {content}
    </button>
  );
}
