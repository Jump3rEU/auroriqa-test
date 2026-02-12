'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, ArrowRight, Lock } from 'lucide-react';

export default function Endoria() {
  const features = [
    { icon: Sparkles, title: 'Moderní Design', desc: 'Čistý a profesionální vzhled' },
    { icon: Zap, title: 'Rychlý Výkon', desc: 'Optimalizováno pro maximální rychlost' },
    { icon: Globe, title: 'SEO Optimalizace', desc: 'Připraveno pro vyhledávače' },
  ];

  const services = [
    { title: 'Web Development', price: 'Custom', color: 'from-blue-500 to-cyan-500' },
    { title: 'Brand Identity', price: 'Custom', color: 'from-purple-500 to-pink-500' },
    { title: 'Digital Marketing', price: 'Custom', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight">
              ENDORIA
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-12"
            >
              <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold">
                Digital Excellence
              </p>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Transformujeme vaše nápady v digitální realitu s precizností a kreativitou
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Začít Projekt
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="border-2 border-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600/10 transition-all">
                Více Informací
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Proč <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Endoria</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Kombinujeme technologii s kreativitou pro výjimečné výsledky
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-purple-500/20 p-8 rounded-2xl hover:border-purple-500/50 transition-all">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-xl w-fit mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Naše Služby
            </h2>
            <p className="text-xl text-gray-400">
              Komplexní řešení pro váš digitální úspěch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-all`} />
                <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 p-8 h-full">
                  <div className="mb-6">
                    <div className={`w-16 h-1 bg-gradient-to-r ${service.color} rounded-full`} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                    {service.price}
                  </div>
                  <button className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                    Zjistit více
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Projektů' },
              { value: '50+', label: 'Klientů' },
              { value: '99%', label: 'Spokojenost' },
              { value: '5+', label: 'Let zkušeností' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-20" />
            <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-purple-500/30 p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Připraveni začít?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Pojďme společně vytvořit něco výjimečného. Kontaktujte nás ještě dnes.
              </p>
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-3">
                Kontaktovat Nás
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <Lock className="w-4 h-4" />
            <span className="text-sm">Chráněný náhled</span>
          </div>
          <p className="text-gray-500">
            © 2026 Endoria - Demo web vytvořený{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
              Auroriqaa
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
