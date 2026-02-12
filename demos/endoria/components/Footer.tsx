"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaTiktok, FaDiscord, FaHeart } from "react-icons/fa";
import ServerStatus from "./ServerStatus";

export default function Footer() {
  const socialLinks = [
    { icon: FaYoutube, name: "YouTube", url: "https://youtube.com/@endoriaeu", color: "#FF0000" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/endoriaeu", color: "#E4405F" },
    { icon: FaTiktok, name: "TikTok", url: "https://tiktok.com/@endoriaeu", color: "#000000" },
    { icon: FaDiscord, name: "Discord", url: "https://discord.endoria.eu", color: "#5865F2" },
  ];

  const quickLinks = [
    { label: "Domů", href: "/" },
    { label: "Pravidla", href: "/pravidla" },
    { label: "Tým", href: "/tym" },
    { label: "Hlasování", href: "/hlasovani" },
    { label: "Nábor", href: "/nabor" },
  ];

  const servers = [
    { name: "Minecraft SMP", ip: "mc.endoria.eu", version: "1.21 - 1.21.11" },
    { name: "Hytale", ip: "hytale.endoria.eu", version: "Survival" },
  ];

  return (
    <footer className="relative mt-20 bg-black border-t border-pink-500/20">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-12 h-12">
                  <Image 
                    src="/media/endoriaV2.png"
                    alt="Endoria Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              <h3 className="font-['Lexend'] font-black text-xl text-white">
                ENDORIA
              </h3>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              ⚡ Moderní český Minecraft SMP server
              s aktivní komunitou a profesionálním týmem.
            </p>
            <ServerStatus variant="compact" />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-['Lexend'] font-black text-sm text-pink-400 mb-6 uppercase tracking-widest">
              Navigace
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Server Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-['Lexend'] font-black text-sm text-purple-400 mb-6 uppercase tracking-widest">
              Servery
            </h4>
            <div className="space-y-4">
              {servers.map((server) => (
                <motion.div
                  key={server.ip}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl backdrop-blur-xl bg-black/60 border border-pink-500/20 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(server.ip);
                    alert(`IP ${server.ip} zkopírována!`);
                  }}
                >
                  <p className="text-xs font-bold text-pink-400 mb-1">{server.name}</p>
                  <p className="text-sm font-bold text-white font-mono">{server.ip}</p>
                  <p className="text-xs text-white/60 mt-1">{server.version}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-['Lexend'] font-black text-sm text-purple-400 mb-6 uppercase tracking-widest">
              Komunita
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl backdrop-blur-xl bg-black/60 border border-pink-500/20 hover:border-pink-500/40 transition-all flex flex-col items-center justify-center gap-2"
                  style={{
                    boxShadow: `0 0 20px ${social.color}15`
                  }}
                >
                  <social.icon 
                    className="text-2xl text-white" 
                    style={{ filter: `drop-shadow(0 0 8px ${social.color}80)` }}
                  />
                  <span className="text-xs font-semibold text-white/80">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-pink-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60">
                © 2026 <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Endoria.eu</span> - Všechna práva vyhrazena
              </p>
              <p className="text-xs text-white/50 mt-2">
                Made by <a href="https://auroriqa.cz" target="_blank" rel="noopener noreferrer" className="text-pink-400 font-bold hover:text-pink-300 transition-colors">auroriqa.cz</a>
              </p>
              <p className="text-xs text-white/70 mt-2 font-semibold px-3 py-1 rounded bg-white/5 inline-block">
                ⚠️ Not affiliated with Mojang Studios
              </p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20"
            >
              <FaHeart className="text-pink-400 text-sm" />
              <span className="text-xs font-bold text-white">Česká komunita</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500" />
    </footer>
  );
}
