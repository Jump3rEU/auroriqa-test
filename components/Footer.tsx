"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-md">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 600px 400px at 30% 50%, rgba(139, 92, 246, 0.1), transparent), radial-gradient(ellipse 600px 400px at 70% 50%, rgba(59, 130, 246, 0.1), transparent)',
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-5xl md:text-6xl font-bold space-grotesk mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  Auroriqa
                </span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
                {t('Přeměňujeme vize v realitu pomocí moderních technologií a kreativního přístupu', 'Transforming visions into reality with modern technologies and creative approach')}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-14 h-14 bg-white/[0.08] hover:bg-white/[0.15] rounded-2xl flex items-center justify-center group transition-all duration-300 border border-white/10 hover:border-white/30"
                    aria-label={social.label}
                  >
                    <social.icon size={22} className="relative z-10 text-white/70 group-hover:text-white transition-colors" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:items-end"
            >
              <div className="space-y-4">
                <h4 className="text-white/90 font-semibold text-lg mb-6">{t('Kontakt', 'Contact')}</h4>
                <a href="mailto:hello@auroriqa.cz" className="block text-white/60 hover:text-white transition-colors duration-300 text-base">
                  hello@auroriqa.cz
                </a>
                <a href="#services" className="block text-white/60 hover:text-white transition-colors duration-300 text-base">
                  {t('Naše služby', 'Our services')}
                </a>
                <a href="#portfolio" className="block text-white/60 hover:text-white transition-colors duration-300 text-base">
                  {t('Portfolio', 'Portfolio')}
                </a>
                <a href="#contact" className="block text-white/60 hover:text-white transition-colors duration-300 text-base">
                  {t('Začít projekt', 'Start project')}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
              <span>© {new Date().getFullYear()} Auroriqa. {t('Všechna práva vyhrazena.', 'All rights reserved.')}</span>
              <div className="flex items-center gap-2">
                <span>{t('Vytvořeno s', 'Made with')}</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={14} className="text-pink-400 fill-pink-400" />
                </motion.div>
                <span>{t('v České republice', 'in Czech Republic')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
