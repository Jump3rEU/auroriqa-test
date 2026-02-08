"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "React",
      icon: "⚛️",
      level: 85,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Next.js",
      icon: "▲",
      level: 80,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "TypeScript",
      icon: "TS",
      level: 75,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Tailwind",
      icon: "🎨",
      level: 90,
      color: "from-cyan-400 to-teal-500",
    },
    {
      name: "Three.js",
      icon: "3D",
      level: 65,
      color: "from-gray-800 to-black",
    },
    {
      name: "Framer",
      icon: "🎭",
      level: 70,
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 70,
      color: "from-green-500 to-green-700",
    },
    {
      name: "Git",
      icon: "🔀",
      level: 75,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 relative"
        >
          {/* Permanent Aurora behind title */}
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-12 rounded-full"
              animate={{
                background: [
                  "radial-gradient(ellipse, rgba(6, 182, 212, 0.3), transparent 70%)",
                  "radial-gradient(ellipse, rgba(59, 130, 246, 0.3), transparent 70%)",
                  "radial-gradient(ellipse, rgba(139, 92, 246, 0.25), transparent 70%)",
                  "radial-gradient(ellipse, rgba(6, 182, 212, 0.3), transparent 70%)"
                ],
                scale: [1, 1.2, 1.1, 1],
                opacity: [0.5, 0.8, 0.6, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "blur(40px)" }}
            />
            
            <h2 className="text-5xl md:text-6xl font-bold space-grotesk relative">
              <span className="text-white">Náš </span>
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                style={{
                  textShadow: `
                    0 0 30px rgba(6, 182, 212, 0.4),
                    0 0 60px rgba(59, 130, 246, 0.25),
                    0 0 90px rgba(139, 92, 246, 0.15)
                  `
                }}
              >
                Stack
              </span>
            </h2>
          </div>
          
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Využíváme nejmodernější technologie pro vytváření 
            rychlých, škálovatelných a uživatelsky přívětivých aplikací
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="glass rounded-3xl p-6 relative overflow-hidden cursor-pointer group border border-white/5"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Aurora Glow on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-10"
                animate={{
                  background: [
                    'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.12), transparent 70%)',
                    'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.12), transparent 70%)',
                    'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.12), transparent 70%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ filter: 'blur(20px)' }}
              />
              
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              {/* Pulsing progress indicator */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />

              {/* Icon */}
              <motion.div
                animate={{
                  scale: hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`text-5xl mb-4 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent font-bold`}
              >
                {skill.icon}
              </motion.div>

              {/* Name */}
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>

              {/* Progress Bar with Aurora Glow */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                  style={{
                    boxShadow: hoveredSkill === skill.name ? '0 0 12px rgba(16, 185, 129, 0.6)' : '0 0 8px rgba(16, 185, 129, 0.3)'
                  }}
                />
                
                {/* Animated shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2 + 1.5,
                    repeatDelay: 3
                  }}
                  style={{ width: '50%' }}
                />
              </div>

              {/* Level Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                }}
                className="absolute top-4 right-4 text-sm font-semibold text-white/80"
              >
                {skill.level}%
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass rounded-3xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">
            Připravujeme <span className="text-gradient">rozšíření</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Python", "Docker", "PostgreSQL", "AWS", "GraphQL", "Rust"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 glass rounded-full text-sm font-semibold cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
