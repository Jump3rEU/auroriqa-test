"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Smartphone, Globe, Monitor } from "lucide-react";

export default function AuroriqaServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Mobile apps",
      description: "Vlastní iOS a Android aplikace postavené pro reálné uživatele.",
      icon: Smartphone,
      glowColor: "blue"
    },
    {
      title: "Web apps",
      description: "Škálovatelné platformy, dashboardy a marketplace řešení.",
      icon: Monitor,
      glowColor: "purple"
    },
    {
      title: "Websites & E-commerce",
      description: "Rychlé, moderní a conversion-focused weby.",
      icon: Globe,
      glowColor: "pink"
    }
  ];

  return (
    <section id="services" className="py-40 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 space-grotesk">
            Co <span className="text-gradient neon-glow">tvoříme</span>
          </h2>
          <p className="text-2xl text-white/50 max-w-3xl mx-auto">
            Od mobilních aplikací po webové platformy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -15, scale: 1.02 }}
              className="card-modern p-12 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Soft aurora glow effect on hover */}
              <motion.div
                className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: `radial-gradient(circle at center, ${
                    service.glowColor === 'blue' ? 'rgba(59, 130, 246, 0.08)' :
                    service.glowColor === 'purple' ? 'rgba(139, 92, 246, 0.08)' :
                    'rgba(236, 72, 153, 0.08)'
                  } 0%, transparent 70%)`
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${
                    service.glowColor === 'blue' ? 'from-blue-500 to-cyan-400 glow-blue' :
                    service.glowColor === 'purple' ? 'from-purple-500 to-pink-400 glow-purple' :
                    'from-pink-500 to-rose-400 glow-pink'
                  } flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <service.icon className="w-14 h-14 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-6 space-grotesk">
                  {service.title}
                </h3>
                
                <p className="text-white/50 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-12 py-6 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink rounded-full text-white font-bold text-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            <span className="relative z-10">Začít projekt →</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
