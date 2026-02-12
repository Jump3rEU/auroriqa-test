"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGamepad, FaShieldAlt, FaUserFriends, FaCoins, FaHeart, FaRocket, FaDiscord } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import ServerStatus from "@/components/ServerStatus";

// Feature Card Component with 3D Tilt Effect
function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setCardRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
        transition: "transform 0.1s ease-out"
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-black/20 to-black/5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 blur-xl`} />
      </div>
      
      <div className="relative z-10">
        <motion.div 
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
          whileHover={{ 
            scale: 1.15, 
            rotate: 5,
            boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)"
          }}
          transition={{ duration: 0.3 }}
        >
          <feature.icon className="text-white text-2xl" />
        </motion.div>
        <h3 className="font-['Lexend'] font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
          {feature.title}
        </h3>
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Minecraft particles - více a různé velikosti
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number; size: number }>>([]);
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: featuresScroll } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  });
  const featuresY = useTransform(featuresScroll, [0, 1], ["0%", "-15%"]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 5,
      size: 1 + Math.random() * 2
    }));
    setParticles(newParticles);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopyIP = () => {
    navigator.clipboard.writeText("mc.endoria.eu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen">
      {/* Global Seamless Background - Fixed */}
      <div className="fixed inset-0 z-0">
        {/* Background Image */}
        <Image
          src="/media/ENDPHOTO1.png"
          alt="Endoria Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/85 via-[#1A0B2E]/60 to-[#0F0A1F]/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-black/50" />
        
        {/* Animated Glows */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.12, 0.22, 0.12],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.18, 0.1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 5, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[120px]"
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Light vignette only */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.3)_100%)]" />

        {/* Minecraft Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-sm"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size * 4}px`,
                height: `${particle.size * 4}px`,
                background: particle.size > 1.5 
                  ? "linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(168, 85, 247, 0.6))"
                  : "linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(168, 85, 247, 0.5))",
                boxShadow: particle.size > 1.5
                  ? "0 0 15px rgba(236, 72, 153, 0.5)"
                  : "0 0 10px rgba(168, 85, 247, 0.4)"
              }}
              animate={{
                y: [0, -150, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content with Parallax */}
        <motion.div 
          className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center flex-1 pt-20 pb-6"
          style={{ y: contentY, opacity }}
        >
          <div className="text-center space-y-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                y: [0, -3, 0]
              }}
              transition={{ 
                duration: 0.8,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative inline-block mb-2"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl opacity-60"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.75, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative w-36 h-36 md:w-44 md:h-44">
                <Image
                  src="/media/endoriaV2.png"
                  alt="Endoria Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-['Lexend'] font-black text-4xl md:text-6xl lg:text-7xl mb-4">
                <span className="block text-white/90 mb-1">Vítej na</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient" style={{ backgroundSize: "200% auto" }}>
                  ENDORIA
                </span>
              </h1>
              <motion.p 
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ⚡ <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Moderní SMP server</span> s aktivní komunitou
                <br />Ekonomika, eventy, protection a skvělá zábava!
              </motion.p>
            </motion.div>

            {/* Server Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ServerStatus variant="badge" />
            </motion.div>

            {/* Server IP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyIP}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <motion.div 
                  className="relative backdrop-blur-2xl bg-black/80 border-2 rounded-2xl px-8 py-6 overflow-hidden min-h-[140px] w-[300px] md:w-[450px] flex items-center justify-center"
                  animate={{
                    borderColor: copied ? "rgba(34, 197, 94, 0.6)" : "rgba(236, 72, 153, 0.4)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <AnimatePresence mode="wait">
                    {!copied ? (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-xs font-bold text-pink-400 mb-1 uppercase tracking-widest">Minecraft Server IP • Klikni pro kopírování</p>
                        <p className="font-['Lexend'] font-black text-3xl md:text-5xl text-white mb-1 select-all">mc.endoria.eu</p>
                        <p className="text-xs text-white/50">Verze 1.21 - 1.21.11 • Java Edition</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copied"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                      >
                        <p className="text-green-400 font-bold text-2xl mb-1">✓ Zkopírováno!</p>
                        <p className="text-white/70 text-sm">mc.endoria.eu je ve schránce</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://discord.endoria.eu"
                  target="_blank"
                  className="group relative w-full sm:w-auto px-10 py-4 rounded-xl overflow-hidden block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-white font-bold text-lg flex items-center justify-center gap-2 drop-shadow-lg">
                    <FaDiscord className="text-xl" />
                    Připojit na Discord
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/hlasovani"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl backdrop-blur-2xl bg-black/70 border-2 border-pink-500/40 text-white font-bold text-lg hover:bg-black/80 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 block"
                >
                  Hlasovat pro server
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 pb-6"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/50 text-xs uppercase tracking-widest">Scroll</p>
            <div className="w-6 h-10 border-2 border-pink-500/40 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative z-10 py-24 px-6 overflow-hidden">
        {/* Mouse Follower Glow - subtle */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none mix-blend-screen"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Lexend'] font-black text-4xl md:text-5xl text-white mb-4">
              Co u nás <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">najdeš?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Moderní SMP server s ekonomikou a aktivní komunitou
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaShieldAlt,
                title: "Ochrana Territory",
                description: "Zabezpeč si své stavby pomocí claim systému a ochraň je před griefery",
                gradient: "from-pink-500 to-pink-600"
              },
              {
                icon: FaCoins,
                title: "Ekonomika & Obchodování",
                description: "Proparacovaný ekonomický systém s obchody, aukčním domem a více",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: FaUserFriends,
                title: "Aktivní Komunita",
                description: "Přátelská komunita s pravidelnými eventy, soutěžemi a turnaji",
                gradient: "from-pink-500 to-purple-600"
              },
              {
                icon: FaGamepad,
                title: "SMP Survival",
                description: "Klasické survival s moderními prvky, McMMO a jobs systémem",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: FaRocket,
                title: "Pravidelné Update",
                description: "Server je neustále aktualizován s novými funkcemi a vylepšeními",
                gradient: "from-pink-600 to-purple-600"
              },
              {
                icon: FaHeart,
                title: "Fair-Play",
                description: "Striktní anti-cheat a aktivní administrace pro férové prostředí",
                gradient: "from-purple-600 to-pink-600"
              },
            ].map((feature, i) => (
              <FeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Lexend'] font-black text-4xl md:text-5xl text-white mb-4">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Server Status</span>
            </h2>
          </motion.div>

          <ServerStatus variant="full" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-12 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 rounded-[4rem] blur-[100px] opacity-20 animate-pulse" />
            
            <div className="relative backdrop-blur-xl bg-black/40 border-2 border-pink-500/30 rounded-[3rem] p-16 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative inline-block mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl opacity-60" />
                <div className="relative w-20 h-20">
                  <Image
                    src="/media/endoriaV2.png"
                    alt="Endoria"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              <h2 className="font-['Lexend'] font-black text-4xl md:text-5xl text-white mb-6">
                Připraven<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">začít hrát?</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Připoj se k nám ještě dnes a staň se součástí naší rostoucí komunity!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <Link
                  href="https://discord.endoria.eu"
                  target="_blank"
                  className="group relative px-12 py-5 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600" />
                  <span className="relative text-white font-black text-xl flex items-center gap-3">
                    <FaDiscord className="text-2xl" />
                    Discord
                  </span>
                </Link>

                <div className="px-10 py-5 rounded-xl backdrop-blur-xl bg-black/60 border-2 border-pink-500/30">
                  <p className="text-sm font-bold text-pink-400 mb-1 uppercase tracking-widest">Server IP</p>
                  <p className="font-['Lexend'] font-black text-white text-2xl">mc.endoria.eu</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/pravidla" className="px-6 py-3 rounded-xl backdrop-blur-xl bg-black/40 border border-pink-500/20 text-white font-semibold hover:bg-black/60 transition-all">
                  📖 Pravidla
                </Link>
                <Link href="/tym" className="px-6 py-3 rounded-xl backdrop-blur-xl bg-black/40 border border-pink-500/20 text-white font-semibold hover:bg-black/60 transition-all">
                  👥 Tým
                </Link>
                <Link href="/hlasovani" className="px-6 py-3 rounded-xl backdrop-blur-xl bg-black/40 border border-pink-500/20 text-white font-semibold hover:bg-black/60 transition-all">
                  🗳️ Hlasování
                </Link>
                <Link href="/nabor" className="px-6 py-3 rounded-xl backdrop-blur-xl bg-black/40 border border-pink-500/20 text-white font-semibold hover:bg-black/60 transition-all">
                  ⭐ Nábor
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
