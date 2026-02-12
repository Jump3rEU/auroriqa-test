"use client";

import { motion } from "framer-motion";

export default function TymPage() {
  const staff = [
    {
      name: "SetProfile",
      role: "Owner",
      description: "Zakladatel a hlavní administrátor serveru. Zodpovědný za celkový chod a vývoj serveru.",
      color: "from-red-500 to-red-700",
      icon: "👑",
    },
    {
      name: "Lacjim168",
      role: "Co-Owner",
      description: "Spoluzakladatel serveru. Pomáhá s administrací a rozvojem komunitního obsahu.",
      color: "from-orange-500 to-orange-700",
      icon: "👑",
    },
    {
      name: "FaZeTraRanTula",
      role: "Elite Helper",
      description: "Zkušený helper s rozšířenými právy. Pomáhá s většími problémy a moderací serveru.",
      color: "from-purple-500 to-purple-700",
      icon: "⭐",
    },
    {
      name: "Sh1payy",
      role: "Trial Helper",
      description: "Nový člen týmu v zkušební době. Učí se základy moderace a pomáhá hráčům.",
      color: "from-blue-500 to-blue-700",
      icon: "🛡️",
    },
    {
      name: "vlk_1",
      role: "Trial Helper",
      description: "Nový člen týmu v zkušební době. Učí se základy moderace a pomáhá hráčům.",
      color: "from-blue-500 to-blue-700",
      icon: "🛡️",
    },
  ];

  const responsibilities = [
    {
      role: "Owner/Co-Owner",
      icon: "👑",
      color: "from-pink-500 to-purple-600",
      tasks: [
        "Správa a vývoj serveru",
        "Rozhodování o velkých změnách",
        "Správa týmu a nábor nových členů",
        "Technická údržba serveru",
        "Komunikace s komunitou",
      ],
    },
    {
      role: "Elite Helper",
      icon: "⭐",
      color: "from-purple-500 to-pink-600",
      tasks: [
        "Moderace serveru a chatu",
        "Pomoc hráčům s problémy",
        "Tresty za porušení pravidel",
        "Řešení sporů mezi hráči",
        "Reportování problémů adminům",
      ],
    },
    {
      role: "Trial Helper",
      icon: "🛡️",
      color: "from-pink-500 to-purple-600",
      tasks: [
        "Základní moderace chatu",
        "Odpovídání na dotazy hráčů",
        "Sledování pravidel serveru",
        "Učení se administrace",
        "Reportování problémů vyššímu týmu",
      ],
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
            Náš <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Tým</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Poznámej lidi, kteří se starají o server a pomáhají komunitě
          </p>
        </motion.div>

        {/* Staff Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {staff.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
              <div className="relative backdrop-blur-xl bg-black/60 border border-pink-500/20 group-hover:border-pink-500/40 rounded-2xl p-8 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl`}>
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="font-['Lexend'] font-bold text-xl text-white">{member.name}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-['Lexend'] font-black text-4xl text-white mb-8 text-center">
            Odpovědnosti <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">týmu</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {responsibilities.map((resp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="backdrop-blur-xl bg-black/40 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl p-8 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resp.color} flex items-center justify-center text-2xl`}>
                    {resp.icon}
                  </div>
                  <h3 className="font-['Lexend'] font-bold text-xl text-white">{resp.role}</h3>
                </div>
                <ul className="space-y-2">
                  {resp.tasks.map((task, j) => (
                    <li key={j} className="text-white/70 flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
            <div className="relative backdrop-blur-xl bg-black/60 border-2 border-pink-500/30 rounded-2xl p-12">
              <span className="text-6xl mb-6 inline-block">✨</span>
              <h3 className="font-['Lexend'] font-black text-3xl text-white mb-4">
                Chceš se připojit k týmu?
              </h3>
              <p className="text-xl text-white/70 mb-6 max-w-2xl mx-auto">
                Hledáme aktivní a zodpovědné hráče, kteří chtějí pomáhat komunitě.
                Sleduj náš Discord pro informace o náboru!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://discord.endoria.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform"
                >
                  Discord Server
                </a>
                <a
                  href="/nabor"
                  className="px-10 py-4 rounded-xl backdrop-blur-xl bg-black/60 border-2 border-pink-500/30 text-white font-bold hover:bg-black/80 transition-all"
                >
                  Více o náboru
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
