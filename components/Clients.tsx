'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';

export default function Clients() {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Jan Světinský",
      role: "Founder & Lead Developer",
      avatar: "👨‍💻",
      description: "Full-stack architekt se specializací na Web3 a moderní technologie"
    },
    {
      name: "Creative Studio",
      role: "Design & UX Team",
      avatar: "🎨",
      description: "Tým designérůtvořících jedinečné digitální zážitky"
    },
    {
      name: "Tech Division",
      role: "Engineering Team",
      avatar: "⚡",
      description: "Specialisté na blockchain, AI a pokročilé webové systémy"
    }
  ];

  const ourServices = [
    {
      title: "Web3 Development",
      status: "Blockchain ready",
      emoji: "⛓️"
    },
    {
      title: "AI Integration",
      status: "Machine Learning",
      emoji: "🤖"
    },
    {
      title: "Cloud Solutions",
      status: "Scalable",
      emoji: "☁️"
    },
    {
      title: "3D Experience",
      status: "Immersive",
      emoji: "🎮"
    }
  ];

  return (
    <section className="py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 space-grotesk">
            Náš <span className="text-gradient neon-glow">tým</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto">
            Mezinárodní tým expertů posouvajících hranice digitálního světa
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="mb-28">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-bold text-white mb-16 text-center"
          >
            Náš tým
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-modern p-10 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Soft glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredClient === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06), transparent 70%)'
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.avatar}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-3">{member.name}</h4>
                  <p className="text-brand-blue/80 font-medium mb-4 text-lg">{member.role}</p>
                  <p className="text-white/40 text-base leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-bold text-white mb-16 text-center"
          >
            Naše expertise
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="card-modern p-8 text-center group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06), rgba(236, 72, 153, 0.04), transparent 70%)'
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-5">{service.emoji}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                  <p className="text-brand-blue/70 text-base">{service.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.p
            className="text-lg text-white/60 mb-8 max-w-xl mx-auto"
          >
            Společně vytvoříme řešení, které překoná vaše očekávání
          </motion.p>
          
          <Button
            variant="primary"
            size="lg"
            href="#contact"
          >
            Diskutujme váš projekt
          </Button>
        </motion.div>
      </div>
    </section>
  );
}