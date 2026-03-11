"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check, Loader2, ArrowRight, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const PROJECT_TYPES = [
  { value: "web", label: "Web" },
  { value: "webapp", label: "Webová app" },
  { value: "ecommerce", label: "E-shop" },
  { value: "seo", label: "SEO" },
  { value: "redesign", label: "Redesign" },
  { value: "other", label: "Jiné" },
];

const INPUT_BASE =
  "w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/25 focus:outline-none focus:border-emerald-500/60 focus:bg-white/[0.08] transition-all duration-200 text-sm";

export default function ContactPopup() {
  const { isOpen, closePopup, prefillService } = useContactPopup();
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, projectType: prefillService || "" }));
      setStatus("idle");
      setErrors({});
      setTimeout(() => firstInputRef.current?.focus(), 300);
    }
  }, [isOpen, prefillService]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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

          {/* Panel wrapper — items-end on mobile (bottom sheet), items-center on desktop */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
            className="fixed inset-0 z-[91] flex items-end sm:items-center justify-center"
            onClick={closePopup}
          >
            {/* Scrollable inner shell — stop propagation so clicks inside don't close */}
            <div
              className="w-full sm:max-w-md bg-[#0d0d1f] border border-white/[0.09] rounded-t-3xl sm:rounded-3xl max-h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Aurora glows — clipped to box */}
              <div className="sticky top-0 pointer-events-none h-0 overflow-visible z-10">
                <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full blur-[70px] bg-emerald-500/20" />
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[70px] bg-violet-500/15" />
              </div>

              <div className="relative px-6 pt-6 pb-8 sm:px-7 sm:pt-7">
                {/* Drag handle on mobile */}
                <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-5 sm:hidden" />

                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h2 className="text-xl font-bold text-white leading-tight">Zdarma konzultace</h2>
                    <p className="text-white/40 text-sm mt-0.5">Ozveme se do 24 hodin</p>
                  </div>
                  <button
                    onClick={closePopup}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] text-white/40 hover:text-white transition-all"
                  >
                    <X className="w-4 h-4" />
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

                      {/* Name */}
                      <div>
                        <label className="flex items-center gap-1.5 text-xs text-white/35 mb-1.5 font-semibold uppercase tracking-wider">
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

                      {/* Email */}
                      <div>
                        <label className="flex items-center gap-1.5 text-xs text-white/35 mb-1.5 font-semibold uppercase tracking-wider">
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

                      {/* Phone */}
                      <div>
                        <label className="flex items-center gap-1.5 text-xs text-white/35 mb-1.5 font-semibold uppercase tracking-wider">
                          <Phone className="w-3 h-3" /> Telefon <span className="normal-case text-white/20 font-normal">(nepovinné)</span>
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => change("phone", e.target.value)}
                          placeholder="+420 777 000 000"
                          className={INPUT_BASE}
                        />
                      </div>

                      {/* Project type — pill buttons */}
                      <div>
                        <label className="flex items-center gap-1.5 text-xs text-white/35 mb-2 font-semibold uppercase tracking-wider">
                          <MessageSquare className="w-3 h-3" /> Typ projektu
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {PROJECT_TYPES.map((t) => (
                            <button
                              key={t.value}
                              type="button"
                              onClick={() => change("projectType", form.projectType === t.value ? "" : t.value)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${
                                form.projectType === t.value
                                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                                  : "bg-white/[0.05] border-white/[0.1] text-white/50 hover:bg-white/[0.09] hover:text-white/80 hover:border-white/20"
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="flex items-center gap-1.5 text-xs text-white/35 mb-1.5 font-semibold uppercase tracking-wider">
                          <MessageSquare className="w-3 h-3" /> Zpráva *
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => change("message", e.target.value)}
                          placeholder="Popište váš projekt, cíle a přibližný rozpočet..."
                          rows={3}
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
