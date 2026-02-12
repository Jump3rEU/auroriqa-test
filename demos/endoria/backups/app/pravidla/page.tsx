"use client";

import { motion } from "framer-motion";

export default function PravidlaPage() {
  const rules = [
    {
      category: "Základní pravidla",
      icon: "📜",
      items: [
        "Respektuj ostatní hráče a administrátory",
        "Žádné spamování v chatu",
        "Žádný toxický či nevhodný obsah",
        "Používej český nebo anglický jazyk",
        "Žádné vyhrožování či šikana",
      ],
    },
    {
      category: "Herní pravidla",
      icon: "🎮",
      items: [
        "Žádný griefing (ničení cizích staveb)",
        "Žádné kradení z claimnutých území",
        "Žádné používání cheatů či hacků",
        "Žádné zneužívání bugů - reportuj je adminům",
        "PvP pouze se souhlasem obou stran",
      ],
    },
    {
      category: "Ochrana účtu",
      icon: "🔒",
      items: [
        "Nesdílej své heslo s nikým",
        "Zabezpeč si účet pomocí /register",
        "Nepoužívej stejné heslo jako jinde",
        "Při podezřelé aktivitě kontaktuj adminy",
        "Jsi zodpovědný za vše, co se na tvém účtu děje",
      ],
    },
    {
      category: "Ekonomika & Obchodování",
      icon: "💰",
      items: [
        "Žádné scamování (podvody při obchodování)",
        "Dodržuj domluvené ceny a obchody",
        "Využívej /trade pro bezpečné obchody",
        "Podvody hlaste administrátorům",
        "Nemanipuluj s cenami pomocí duplikace",
      ],
    },
    {
      category: "Stavění",
      icon: "🏗️",
      items: [
        "Nestav příliš blízko jiných hráčů bez svolení",
        "Udržuj své stavby slušné (žádný nevhodný obsah)",
        "Claimni si své území pomocí /claim",
        "Nestavěj lagy stroje (nadměrné entity, redstone)",
        "Respektuj architekturu spawnu a veřejných míst",
      ],
    },
    {
      category: "Tresty",
      icon: "⚖️",
      items: [
        "Varování - první porušení menších pravidel",
        "Kick - opakované porušování pravidel",
        "Mute - spam a toxické chování v chatu",
        "Dočasný ban - vážnější porušení pravidel",
        "Permanentní ban - závažné či opakované porušení",
      ],
    },
  ];

  const importantNotes = [
    "Nevědomost pravidel tě neomlouvá od trestu",
    "Administrátoři mají finální slovo v jakékoliv situaci",
    "Pravidla se mohou měnit - sleduj Discord pro updates",
    "Pokud si nejsi jistý pravidlem, zeptej se administrátorů",
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
            Pravidla <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Serveru</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Přečti si a dodržuj pravidla serveru, aby byl zážitek ze hry příjemný pro všechny hráče
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="backdrop-blur-xl bg-black/60 border-2 border-pink-500/40 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚠️</span>
              <div>
                <h3 className="font-['Lexend'] font-bold text-2xl text-white mb-4">Důležité upozornění</h3>
                <ul className="space-y-2">
                  {importantNotes.map((note, i) => (
                    <li key={i} className="text-white/80 flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rules Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="backdrop-blur-xl bg-black/40 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl p-8 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{section.icon}</span>
                <h3 className="font-['Lexend'] font-bold text-2xl text-white">{section.category}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="text-white/80 flex items-start gap-3">
                    <span className="text-pink-400 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8">
            <h3 className="font-['Lexend'] font-bold text-2xl text-white mb-4">Máš otázku k pravidlům?</h3>
            <p className="text-white/70 mb-6">Kontaktuj nás na Discord serveru a rádi ti pomůžeme!</p>
            <a
              href="https://discord.endoria.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform"
            >
              Připojit na Discord
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
