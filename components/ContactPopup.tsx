"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check, Loader2, ArrowRight, Mail, Phone, User, MessageSquare, Briefcase } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const PROJECT_TYPES = [
  { value: "web", label: "Webové stránky" },
  { value: "webapp", label: "Webová aplikace" },
  { value: "mobile", label: "Mobilní aplikace" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "seo", label: "SEO optimalizace" },
  { value: "redesign", label: "Redesign stávajícího webu" },
  { value: "other", label: "Jiné / Konzultace" },
];

const INPUT_BASE =
  "w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/25 focus:outline-none focus:border-emerald-500/60 focus:bg-white/[0.08] transition-all duration-200 text-sm";

export default function ContactPopup() {
  const { isOpen, closePopup, prefillService } = useContactPopup();
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Pre-fill project type when triggered from service cards
  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, projectType: prefillService || "" }));
      setStatus("idle");
      setErrors({});
      setTimeout(() => firstInputRef.current?.focus(), 300);
    }
  }, [isOpen, prefillService]);

  // Trap scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closePopup(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closePopup]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Jméno je povinné";
    if (!form.email.trim()) errs.email = "Email je povinný";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Neplatný formát emailu";
    if (!form.message.trim()) errs.message = "Zpráva je povinná";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const change = (key: string, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="fixed inset-x-4 bottom-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg z-[91] max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
          >
            <div className="relative bg-[#0c0c1a] border border-white/[0.09] overflow-hidden rounded-t-3xl sm:rounded-3xl">
              {/* Aurora shimmer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full blur-[80px] bg-emerald-500/15" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[80px] bg-violet-500/10" />
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">Zdarma konzultace</h2>
                    <p className="text-white/40 text-sm mt-0.5">Popište váš projekt — ozveme se do 24h</p>
                  </div>
                  <button onClick={closePopup} className="text-white/30 hover:text-white transition-colors p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-10 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Zpráva odeslána!</h3>
                      <p className="text-white/50 text-sm mb-6">Ozveme se vám do 24 hodin na váš email.</p>
                      <button
                        onClick={closePopup}
                        className="px-6 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/30 transition-colors"
                      >
                        Zavřít
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                            <User className="w-3 h-3" /> Jméno *
                          </label>
                          <input
                            ref={firstInputRef}
                            type="text"
                            value={form.name}
                            onChange={(e) => change("name", e.target.value)}
                            placeholder="Jan Novák"
                            className={`${INPUT_BASE} ${errors.name ? "border-red-500/50" : ""}`}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                            <Mail className="w-3 h-3" /> Email *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => change("email", e.target.value)}
                            placeholder="jan@firma.cz"
                            className={`${INPUT_BASE} ${errors.email ? "border-red-500/50" : ""}`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Phone + Project type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                            <Phone className="w-3 h-3" /> Telefon
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => change("phone", e.target.value)}
                            placeholder="+420 777 000 000"
                            className={INPUT_BASE}
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                            <Briefcase className="w-3 h-3" /> Typ projektu
                          </label>
                          <select
                            value={form.projectType}
                            onChange={(e) => change("projectType", e.target.value)}
                            className={`${INPUT_BASE} cursor-pointer`}
                          >
                            <option value="" className="bg-[#0c0c1a]">Vyberte typ...</option>
                            {PROJECT_TYPES.map((t) => (
                              <option key={t.value} value={t.value} className="bg-[#0c0c1a]">{t.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                          <MessageSquare className="w-3 h-3" /> Zpráva *
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => change("message", e.target.value)}
                          placeholder="Popište váš projekt, cíle a přibližný rozpočet..."
                          rows={4}
                          className={`${INPUT_BASE} resize-none ${errors.message ? "border-red-500/50" : ""}`}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      {status === "error" && (
                        <p className="text-red-400 text-sm text-center">Nepodařilo se odeslat. Zkuste to prosím znovu.</p>
                      )}

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-60"
                      >
                        {status === "loading" ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Odesílám...</>
                        ) : (
                          <><Send className="w-4 h-4" /> Odeslat zprávu <ArrowRight className="w-4 h-4" /></>
                        )}
                      </motion.button>

                      <p className="text-center text-white/20 text-xs">
                        Vaše data jsou chráněna. Odpovídáme do 24 hodin.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
