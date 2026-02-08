"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Sparkles, Target } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Code2,
      title: "Development",
      description: "Moderní webové technologie a best practices",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX s důrazem na uživatelský zážitek",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Experimentuji s nejnovějšími trendy",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Kvalita a detaily jsou priorita",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />

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
                  "radial-gradient(ellipse, rgba(59, 130, 246, 0.3), transparent 70%)",
                  "radial-gradient(ellipse, rgba(139, 92, 246, 0.3), transparent 70%)",
                  "radial-gradient(ellipse, rgba(236, 72, 153, 0.25), transparent 70%)",
                  "radial-gradient(ellipse, rgba(59, 130, 246, 0.3), transparent 70%)"
                ],
                scale: [1, 1.2, 1.1, 1],
                opacity: [0.5, 0.7, 0.6, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "blur(40px)" }}
            />
            
            <h2 className="text-5xl md:text-6xl font-bold space-grotesk relative">
              <span className="text-white">Co </span>
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                style={{
                  textShadow: `
                    0 0 30px rgba(59, 130, 246, 0.4),
                    0 0 60px rgba(139, 92, 246, 0.25),
                    0 0 90px rgba(236, 72, 153, 0.15)
                  `
                }}
              >
                Děláme
              </span>
            </h2>
          </div>
          
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Přinášíme inovativní digitální řešení, která propojují 
            technologii, design a byznys strategii. Každý projekt je 
            pro nás příležitostí posunout hranice možného.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 80, rotateX: 25, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.03, rotateY: 8 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer border border-white/5"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Aurora Glow on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-10"
                animate={{
                  background: [
                    `radial-gradient(circle at 50% 0%, ${card.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.15)' : card.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.15)' : card.gradient.includes('pink') ? 'rgba(236, 72, 153, 0.15)' : 'rgba(6, 182, 212, 0.15)'}, transparent 70%)`,
                    `radial-gradient(circle at 80% 50%, ${card.gradient.includes('blue') ? 'rgba(6, 182, 212, 0.15)' : card.gradient.includes('purple') ? 'rgba(236, 72, 153, 0.15)' : card.gradient.includes('pink') ? 'rgba(251, 113, 133, 0.15)' : 'rgba(59, 130, 246, 0.15)'}, transparent 70%)`,
                    `radial-gradient(circle at 50% 0%, ${card.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.15)' : card.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.15)' : card.gradient.includes('pink') ? 'rgba(236, 72, 153, 0.15)' : 'rgba(6, 182, 212, 0.15)'}, transparent 70%)`
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ filter: 'blur(20px)' }}
              />
              
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              {/* Pulsing dot */}
              <motion.div
                className="absolute top-6 right-6 w-2 h-2 rounded-full bg-emerald-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} p-4 mb-6 flex items-center justify-center`}
              >
                <card.icon className="w-full h-full text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-white/70">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <div className="text-5xl font-bold text-gradient mb-2">2024</div>
              <div className="text-white/60">Založení studia</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <div className="text-5xl font-bold text-gradient mb-2">10+</div>
              <div className="text-white/60">Technologií</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <div className="text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-white/60">Projektů v přípravě</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
