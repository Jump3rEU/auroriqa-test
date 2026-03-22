"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Clock, MessageSquare, Shield, CheckCircle2, Zap, Target } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function FreeProposal() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const benefits = [
    {
      icon: Sparkles,
      titleCS: "Next.js + Tailwind",
      titleEN: "Next.js + Tailwind",
      descriptionCS: "Stack, co Netflix, Vercel a Linear používají dnes. Žádné WordPressy.",
      descriptionEN: "The stack Netflix, Vercel and Linear use today. No WordPress.",
      color: "from-emerald-400 to-cyan-500"
    },
    {
      icon: Clock,
      titleCS: "Prototyp za 5 dní",
      titleEN: "Prototype in 5 days",
      descriptionCS: "Do týdne vidíte první verzi. Žádné měsíce čekání na wireframy.",
      descriptionEN: "First version in a week. No months waiting for wireframes.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: MessageSquare,
      titleCS: "Přímá linka na mě",
      titleEN: "Direct line to me",
      descriptionCS: "Slack nebo email — odpovím do 4 hodin. Žádný project manager uprostřed.",
      descriptionEN: "Slack or email — reply within 4 hours. No PM in the middle.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Shield,
      titleCS: "Smluvní záruka",
      titleEN: "Contractual guarantee",
      descriptionCS: "Výsledek je ve smlouvě. Pokud nesplníme, peníze vracíme.",
      descriptionEN: "Results are in the contract. If we don't deliver, you get your money back.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ opacity }}
    >
      {/* Background Aurora - stejný styl jako ostatní sekce */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.2), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35), rgba(139, 92, 246, 0.2), transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25), rgba(168, 85, 247, 0.15), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-4 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-lg">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </motion.div>
              <span className="text-sm md:text-base lg:text-lg font-bold text-emerald-400 tracking-widest uppercase">
                {t('NEZÁVAZNÝ NÁVRH', 'FREE PROPOSAL')}
              </span>
            </div>
          </motion.div>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold space-grotesk leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-4">
            <motion.span
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('Pošlete brief.', 'Send a brief.')}
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('Dostanete návrh.', 'Get a proposal.')}
            </motion.span>
          </h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/60 leading-relaxed max-w-4xl mx-auto font-light px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('Napište mi pár vět o projektu. Dostanete reálný návrh — ne automatický ceník.', 'Write me a few lines about your project. You\'ll get a real proposal — not an automated price list.')}
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 mb-12 md:mb-20 px-2 sm:px-4"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.titleCS}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: 0.12 * index,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-60`}
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  style={{ filter: 'blur(1px)' }}
                />

                {/* Card body */}
                <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] group-hover:border-white/20 transition-all duration-500 overflow-hidden">

                  {/* Watermark number */}
                  <div className={`absolute -right-3 -top-4 text-[7rem] sm:text-[8rem] font-black leading-none bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 select-none pointer-events-none`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Hover glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex flex-col gap-4">
                    {/* Top row: icon + pill */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </motion.div>

                      {/* Animated indicator dot */}
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2 + index * 0.3, repeat: Infinity }}
                        className={`mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${benefit.color}`}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                        {t(benefit.titleCS, benefit.titleEN)}
                      </h3>
                      <p className="text-sm sm:text-base text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed">
                        {t(benefit.descriptionCS, benefit.descriptionEN)}
                      </p>
                    </div>

                    {/* Bottom animated line */}
                    <motion.div
                      className={`h-[2px] rounded-full bg-gradient-to-r ${benefit.color}`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '40%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index + 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          {/* CTA Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 space-grotesk leading-tight px-4">
            {t('Začínáme teď?', 'Start now?')}
          </h3>

          {/* CTA Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/70 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
            {t('Ozveme se do 24 hodin s konkrétním postupem.', 'We\'ll reply within 24 hours with a concrete plan.')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4">
            <Button 
              variant="primary" 
              size="xl" 
              href="#contact" 
              showArrow
              fullWidth
            >
              {t('Získat návrh zdarma', 'Get free proposal')}
            </Button>

            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-3 px-6 py-3 sm:py-4 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-lg"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              </motion.div>
              <span className="font-bold text-white text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {t('Bez závazků • Rychlá odpověď', 'No obligations • Fast response')}
              </span>
            </motion.div>
          </div>

          {/* Additional features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-4"
          >
            {[
              { icon: Target, textCS: "Přesně na míru", textEN: "Perfectly tailored" },
              { icon: Zap, textCS: "Rychlá realizace", textEN: "Fast execution" },
              { icon: Shield, textCS: "100% záruka", textEN: "100% guarantee" },
              { icon: CheckCircle2, textCS: "Spokojenost zaručena", textEN: "Satisfaction guaranteed" }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 sm:gap-3 justify-center"
                >
                  <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-white">{t(item.textCS, item.textEN)}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
