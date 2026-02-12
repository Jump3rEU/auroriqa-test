"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NaborPage() {
  const [formData, setFormData] = useState({
    minecraftName: "",
    age: "",
    discordName: "",
    hours: "",
    experience: "",
    reason: "",
    availability: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Lexend'] font-black text-5xl md:text-6xl mb-6">
            Nábor do <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Týmu</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Máš zájem stát se součástí našeho týmu? Vyplň formulář a my se ti ozveme!
          </p>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="backdrop-blur-xl bg-black/60 border-2 border-pink-500/30 rounded-2xl p-8">
            <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">📋</span>
              Požadavky
            </h2>
            <ul className="space-y-3">
              {[
                "Minimálně 50 hodin na serveru",
                "Dobrá znalost pravidel serveru",
                "Aktivita na serveru i Discord serveru",
                "Minimální věk 15 let",
                "Bezúhonnost (žádné bany/mutes v historii)",
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="backdrop-blur-xl bg-black/60 border border-pink-500/20 rounded-2xl p-8">
            <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6">Přihláška</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Minecraft Name */}
              <div>
                <label className="block text-white/80 mb-2 font-semibold">
                  Minecraft jméno *
                </label>
                <input
                  type="text"
                  name="minecraftName"
                  value={formData.minecraftName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors"
                  placeholder="Tvé Minecraft jméno"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-white/80 mb-2 font-semibold">
                  Věk *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="13"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors"
                  placeholder="Tvůj věk"
                />
              </div>

              {/* Discord Name */}
              <div>
                <label className="block text-white/80 mb-2 font-semibold">
                  Discord jméno *
                </label>
                <input
                  type="text"
                  name="discordName"
                  value={formData.discordName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors"
                  placeholder="username#1234"
                />
              </div>

              {/* Hours Played */}
              <div>
                <label className="block text-white/80 mb-2 font-semibold">
                  Počet hodin na serveru *
                </label>
                <input
                  type="number"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  required
                  min="50"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors"
                  placeholder="Přibližný počet hodin"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-white/80 mb-2 font-semibold">
                  Zkušenosti s moderací *
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Popis tvých zkušeností s moderací (pokud žádné, napiš 'Žádné')"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block text-white/80 mb-2 font-semibold">
                  Proč chceš být v týmu? *
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Vysvětli, proč by ses měl stát součástí našeho týmu"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-white/80 mb-2 font-semibold">
                  Dostupnost *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none transition-colors"
                >
                  <option value="">Vyber možnost...</option>
                  <option value="daily">Denně (několik hodin)</option>
                  <option value="often">Velmi často (4-5x týdně)</option>
                  <option value="regular">Pravidelně (2-3x týdně)</option>
                  <option value="occasional">Občas (víkendy)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? "Přihláška odeslána! ✓" : "Odeslat přihlášku"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8">
            <h3 className="font-['Lexend'] font-bold text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">💡</span>
              Důležité informace
            </h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Přihlášku posoudíme do 7 dní a ozveme se ti na Discord</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Pokud budeš přijat, projdeš zkušební dobou (Trial Helper)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Buď upřímný a poctivý ve svých odpovědích</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Vyplň přihlášku co nejpodrobněji, zvýší to tvé šance</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
