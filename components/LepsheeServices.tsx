"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Smartphone, Globe, Lightbulb, Monitor, Rocket } from "lucide-react";

export default function LepsheeServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Web Development",
      subtitle: "Next-gen weby",
      description: "Bleskurychlé aplikace s Web3, AI a moderními frameworky",
      icon: Globe,
      glowColor: "blue",
      features: ["Next.js 15", "Web3 integrace", "AI-powered", "Edge Computing"]
    },
    {
      title: "Mobile Apps",
      subtitle: "Cross-platform",
      description: "Nativní výkon, jedna codebase - iOS, Android i web",
      icon: Smartphone,
      glowColor: "purple",
      features: ["React Native", "Flutter", "PWA", "Real-time sync"]
    },
    {
      title: "Web Applications",
      subtitle: "Enterprise grade",
      description: "Škálovatelné SaaS platformy s mikroservicemi",
      icon: Monitor,
      glowColor: "green",
      features: ["Cloud-native", "Kubernetes", "GraphQL", "Microservices"]
    },
    {
      title: "E-commerce",
      subtitle: "Headless commerce",
      description: "Pokročilé obchody s AI personalizací a analytiků",
      icon: Lightbulb,
      glowColor: "yellow",
      features: ["Shopify Plus", "Stripe", "AI Analytics", "Conversion"]
    },
    {
      title: "Web3 & Blockchain",
      subtitle: "Decentralizované řešení",
      description: "Smart contracts, NFT platformy a DeFi aplikace",
      icon: Rocket,
      glowColor: "pink",
      features: ["Ethereum", "Solidity", "NFT", "DeFi"]
    },
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
            Naše <span className="text-gradient neon-glow">technologie</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto">
            Využíváme cutting-edge technologie pro vytváření moderních digitálních řešení
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -15, scale: 1.03 }}
              className="card-modern p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Soft glow background on hover */}
              <motion.div
                className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: `radial-gradient(circle at center, ${
                    service.glowColor === 'blue' ? 'rgba(59, 130, 246, 0.06)' :
                    service.glowColor === 'purple' ? 'rgba(139, 92, 246, 0.06)' :
                    service.glowColor === 'yellow' ? 'rgba(234, 179, 8, 0.06)' :
                    service.glowColor === 'green' ? 'rgba(34, 197, 94, 0.06)' :
                    'rgba(236, 72, 153, 0.06)'
                  } 0%, transparent 70%)`
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${
                    service.glowColor === 'blue' ? 'from-blue-500 to-cyan-400 glow-blue' :
                    service.glowColor === 'purple' ? 'from-purple-500 to-pink-400 glow-purple' :
                    service.glowColor === 'yellow' ? 'from-yellow-400 to-orange-400 glow-yellow' :
                    service.glowColor === 'green' ? 'from-green-400 to-emerald-400' :
                    'from-pink-500 to-rose-400 glow-pink'
                  } flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <service.icon className="w-12 h-12 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3 space-grotesk">
                  {service.title}
                </h3>
                
                <motion.p 
                  className="text-brand-blue/80 font-semibold mb-4 text-base"
                  animate={{ opacity: hoveredService === index ? 1 : 0.7 }}
                >
                  {service.subtitle}
                </motion.p>
                
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.5, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="text-xs text-white/40 px-4 py-2 glass rounded-full hover:bg-white/10 transition-colors"
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full text-white font-semibold text-lg"
          >
            Připoj se k nám
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}