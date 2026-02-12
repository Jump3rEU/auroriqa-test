"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HlasovaniPage() {
  const votingSites = [
    {
      name: "Craftlist.org",
      url: "https://craftlist.org/endoria",
      description: "Největší česká databáze Minecraft serverů",
      color: "from-blue-500 to-blue-700",
      icon: "🏆",
      rewards: ["50 Coins", "1x Vote Key", "Vote Points"],
    },
    {
      name: "MinecraftServery.eu",
      url: "https://minecraftservery.eu/server/endoriaeu",
      description: "Populární český seznam Minecraft serverů",
      color: "from-green-500 to-green-700",
      icon: "⭐",
      rewards: ["50 Coins", "1x Vote Key", "Vote Points"],
    },
    {
      name: "Hytalist.com",
      url: "https://hytalist.com/endoria",
      description: "Speciální hlasování pro Hytale server",
      color: "from-purple-500 to-purple-700",
      icon: "🎮",
      rewards: ["25 Coins", "Vote Points", "Hytale Bonusy"],
    },
  ];

  const voteRewards = [
    {
      icon: "💰",
      title: "In-game měna",
      description: "Získej 50-100 Coins za každý vote, které můžeš použít v ekonomice serveru",
    },
    {
      icon: "🔑",
      title: "Vote Keys",
      description: "Speciální klíče k otevírání Vote Crates s exkluzivními odměnami",
    },
    {
      icon: "🎁",
      title: "Vote Points",
      description: "Sbírej Vote Points a vyměň je za unikátní itemy a výhody",
    },
    {
      icon: "🏅",
      title: "Žebříček",
      description: "Konkuruj ostatním hráčům v měsíčním žebříčku a získej speciální odměny",
    },
    {
      icon: "⭐",
      title: "Bonus odměny",
      description: "Každých 7 dní streak voting získáš extra bonus odměny",
    },
    {
      icon: "👑",
      title: "VIP výhody",
      description: "Top voters každý měsíc získají dočasné VIP výhody",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Lexend'] font-black text-5xl md:text-6xl mb-6">
            Hlasování pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Server</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Podpoř server hlasováním a získej úžasné odměny každý den!
          </p>
        </motion.div>

        {/* Voting Sites */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {votingSites.map((site, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${site.color} rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity`} />
              <div className="relative backdrop-blur-xl bg-black/60 border-2 border-pink-500/30 group-hover:border-pink-500/50 rounded-3xl p-8 transition-all">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${site.color} flex items-center justify-center text-4xl`}>
                  {site.icon}
                </div>
                <h3 className="font-['Lexend'] font-bold text-2xl text-white mb-2 text-center">
                  {site.name}
                </h3>
                <p className="text-white/70 text-center mb-6">{site.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-bold text-pink-400 mb-2 uppercase tracking-wider text-center">Odměny:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {site.rewards.map((reward, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm">
                        {reward}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={site.url}
                  target="_blank"
                  className={`block w-full py-3 rounded-xl bg-gradient-to-r ${site.color} text-white font-bold text-center hover:scale-105 transition-transform`}
                >
                  Hlasovat →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vote Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-['Lexend'] font-black text-4xl text-white mb-8 text-center">
            Co můžeš <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">získat?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voteRewards.map((reward, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="backdrop-blur-xl bg-black/40 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl p-6 transition-all"
              >
                <div className="text-4xl mb-4">{reward.icon}</div>
                <h3 className="font-['Lexend'] font-bold text-xl text-white mb-2">{reward.title}</h3>
                <p className="text-white/70">{reward.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Vote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h2 className="font-['Lexend'] font-black text-4xl text-white mb-8 text-center">
            Jak <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">hlasovat?</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Vyber voting site", icon: "🌐" },
              { step: 2, title: "Zadej své nick", icon: "✍️" },
              { step: 3, title: "Dokonči captcha", icon: "🔒" },
              { step: 4, title: "Získej odměny!", icon: "🎉" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-black text-xl">{step.step}</span>
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="font-['Lexend'] font-bold text-lg text-white">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
            <div className="relative backdrop-blur-xl bg-black/60 border-2 border-pink-500/30 rounded-2xl p-12">
              <span className="text-6xl mb-6 inline-block">🎁</span>
              <h3 className="font-['Lexend'] font-black text-3xl text-white mb-4">
                Hlasuj každý den!
              </h3>
              <p className="text-xl text-white/70 mb-6 max-w-2xl mx-auto">
                Získávej denní odměny a sbírej Vote Points pro exkluzivní výhody.
                Každých 7 dní streak voting dostaneš bonus!
              </p>
              <p className="text-lg text-white/80 font-semibold">
                Můžeš hlasovat každých <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">24 hodin</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
