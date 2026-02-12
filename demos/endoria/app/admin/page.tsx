"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLock, FaUser } from "react-icons/fa";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple auth - v produkci použij API endpoint s bcrypt
    // Defaultní: admin / endoria2026
    if (username === "admin" && password === "endoria2026") {
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminUser", username);
      router.push("/admin/dashboard");
    } else {
      setError("Nesprávné přihlašovací údaje");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl opacity-60 animate-pulse" />
            <div className="relative w-20 h-20">
              <Image
                src="/media/endoriaV2.png"
                alt="Endoria"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <h1 className="font-['Lexend'] font-black text-4xl text-white mb-2">
            Admin Panel
          </h1>
          <p className="text-white/70">Přihlaste se pro správu webu</p>
        </div>

        {/* Login Form */}
        <div className="backdrop-blur-xl bg-black/60 border-2 border-pink-500/30 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-white/80 mb-2 font-semibold text-sm">
                <FaUser className="inline mr-2" />
                Uživatelské jméno
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors"
                placeholder="admin"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/80 mb-2 font-semibold text-sm">
                <FaLock className="inline mr-2" />
                Heslo
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Přihlašování..." : "Přihlásit se"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/50 text-xs text-center">
              Výchozí přihlašovací údaje:<br />
              <span className="text-pink-400 font-mono">admin / endoria2026</span>
            </p>
          </div>
        </div>

        {/* Back to Site */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-white/70 hover:text-pink-400 transition-colors text-sm"
          >
            ← Zpět na web
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
