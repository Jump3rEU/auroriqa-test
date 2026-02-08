"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Moderní e-shop s vlastní administrací, platební bránou a pokročilou analýtikou prodeje.",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      gradient: "from-blue-500 to-cyan-500",
      stats: ["5,000+ produktů", "50k+ návštěv/měsíc"],
    },
    {
      title: "SaaS Dashboard",
      description:
        "Komplexní dashboard pro správu projektů s real-time notifikacemi a týmovou spoluprací.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500",
      stats: ["1,000+ uživatelů", "99.9% uptime"],
    },
    {
      title: "Mobile Banking App",
      description:
        "Mobilní bankovní aplikace s biometrickou autentizací a instant platbami.",
      tech: ["React Native", "TypeScript", "Firebase"],
      gradient: "from-pink-500 to-rose-500",
      stats: ["10,000+ stažení", "4.8★ hodnocení"],
    },
  ];

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 relative"
        >
          {/* Permanent Aurora behind title */}
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-12 rounded-full"
              animate={{
                background: [
                  "radial-gradient(ellipse, rgba(139, 92, 246, 0.3), transparent 70%)",
                  "radial-gradient(ellipse, rgba(236, 72, 153, 0.3), transparent 70%)",
                  "radial-gradient(ellipse, rgba(59, 130, 246, 0.25), transparent 70%)",
                  "radial-gradient(ellipse, rgba(139, 92, 246, 0.3), transparent 70%)"
                ],
                scale: [1, 1.2, 1.1, 1],
                opacity: [0.5, 0.8, 0.6, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "blur(40px)" }}
            />

            <h2 className="text-5xl md:text-8xl font-bold space-grotesk relative">
              <span className="text-white">Naše </span>
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                style={{
                  textShadow: `
                    0 0 30px rgba(139, 92, 246, 0.4),
                    0 0 60px rgba(236, 72, 153, 0.25),
                    0 0 90px rgba(59, 130, 246, 0.15)
                  `
                }}
              >
                Portfolio
              </span>
            </h2>
          </div>

          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Projekty, na které jsme hrdí
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80, rotateX: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <motion.div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4`}
                  >
                    Featured Project
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-xl text-white/70">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-8">
                  {project.stats.map((stat) => (
                    <div key={stat}>
                      <div className="text-2xl font-bold text-gradient">
                        {stat.split(" ")[0]}
                      </div>
                      <div className="text-white/60">{stat.split(" ")[1]}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Zobrazit projekt
                  <ExternalLink size={18} />
                </motion.button>
              </div>

              {/* Mockup */}
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#10b981"
                className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}
              >
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Laptop Mockup */}
                  <div className="glass rounded-2xl p-4 relative overflow-hidden border border-white/10">
                    {/* Animated aurora inside card */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          `radial-gradient(circle at 30% 50%, ${project.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.08)' : project.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.08)' : 'rgba(236, 72, 153, 0.08)'}, transparent 60%)`,
                          `radial-gradient(circle at 70% 50%, ${project.gradient.includes('blue') ? 'rgba(6, 182, 212, 0.08)' : project.gradient.includes('purple') ? 'rgba(236, 72, 153, 0.08)' : 'rgba(251, 113, 133, 0.08)'}, transparent 60%)`,
                          `radial-gradient(circle at 30% 50%, ${project.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.08)' : project.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.08)' : 'rgba(236, 72, 153, 0.08)'}, transparent 60%)`
                        ]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      style={{ filter: 'blur(20px)' }}
                    />

                    {/* Screen */}
                    <div
                      className={`w-full aspect-video bg-gradient-to-br ${project.gradient} rounded-xl relative overflow-hidden`}
                    >
                      {/* Grid Pattern */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                          `,
                          backgroundSize: "30px 30px",
                        }}
                      />

                      {/* Fake UI Elements */}
                      <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 space-y-2">
                        <div className="h-4 bg-white/20 rounded w-3/4" />
                        <div className="h-4 bg-white/20 rounded w-1/2" />
                      </div>
                    </div>

                    {/* Keyboard */}
                    <div className="mt-2 h-4 glass rounded-b-xl relative z-10" />
                  </div>

                  {/* Enhanced Hover Glow - Aurora style */}
                  <motion.div
                    className="absolute -inset-6 -z-10 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        `radial-gradient(circle, ${project.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.2)' : project.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.2)' : 'rgba(236, 72, 153, 0.2)'}, transparent 70%)`,
                        `radial-gradient(circle, ${project.gradient.includes('blue') ? 'rgba(6, 182, 212, 0.2)' : project.gradient.includes('purple') ? 'rgba(236, 72, 153, 0.2)' : 'rgba(251, 113, 133, 0.2)'}, transparent 70%)`,
                        `radial-gradient(circle, ${project.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.2)' : project.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.2)' : 'rgba(236, 72, 153, 0.2)'}, transparent 70%)`
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ filter: 'blur(30px)' }}
                  />
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
