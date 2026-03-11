"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, Settings2, ChevronDown } from "lucide-react";

const CONSENT_KEY = "auroriqa-cookie-consent";
const CONSENT_VERSION = "1"; // bump to reset consent

type ConsentValue = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on first render
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: CONSENT_VERSION, value: "accepted", analytics: true, date: new Date().toISOString() }));
    setVisible(false);
    // Enable analytics if GA is loaded
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
      ((window as unknown as Record<string, unknown>).gtag as ((...args: unknown[]) => void))("consent", "update", { analytics_storage: "granted" });
    }
  };

  const acceptSelected = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: CONSENT_VERSION, value: "partial", analytics: analyticsEnabled, date: new Date().toISOString() }));
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: CONSENT_VERSION, value: "rejected", analytics: false, date: new Date().toISOString() }));
    setVisible(false);
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
      ((window as unknown as Record<string, unknown>).gtag as ((...args: unknown[]) => void))("consent", "update", { analytics_storage: "denied" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[80]"
        >
          <div className="relative rounded-2xl bg-[#0d0d1e] border border-white/[0.1] shadow-2xl shadow-black/40 overflow-hidden">
            {/* Aurora edge glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="font-bold text-white text-sm">Soubory cookies</p>
                </div>
                <button onClick={reject} className="text-white/20 hover:text-white/60 transition-colors flex-shrink-0">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Používáme nezbytné cookies pro fungování webu a analytické cookies pro zlepšování našich služeb.
                Máte právo odmítnout analytické cookies dle{" "}
                <span className="text-emerald-400">GDPR a zákona č. 127/2005 Sb.</span>
              </p>

              {/* Details toggle */}
              <button
                onClick={() => setShowDetails((s) => !s)}
                className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors mb-3"
              >
                <Settings2 className="w-3 h-3" />
                Detailní nastavení
                <ChevronDown className={`w-3 h-3 transition-transform ${showDetails ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mb-4"
                  >
                    <div className="space-y-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      {/* Necessary - always on */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-white/70">Nezbytné cookies</p>
                          <p className="text-xs text-white/30">Přihlášení, session, bezpečnost</p>
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">Vždy aktivní</div>
                      </div>
                      {/* Analytics - toggleable */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-white/70">Analytické cookies</p>
                          <p className="text-xs text-white/30">Návštěvnost, výkon stránek</p>
                        </div>
                        <button
                          onClick={() => setAnalyticsEnabled((v) => !v)}
                          className={`w-9 h-5 rounded-full transition-colors relative ${analyticsEnabled ? "bg-emerald-500" : "bg-white/10"}`}
                        >
                          <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${analyticsEnabled ? "left-4" : "left-0.5"}`} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={reject}
                  className="flex-1 py-2 rounded-xl border border-white/[0.1] text-white/50 text-xs font-semibold hover:bg-white/[0.05] transition-colors"
                >
                  Odmítnout
                </button>
                {showDetails ? (
                  <button
                    onClick={acceptSelected}
                    className="flex-1 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
                  >
                    Uložit výběr
                  </button>
                ) : (
                  <button
                    onClick={accept}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-400 transition-colors"
                  >
                    <Check className="w-3 h-3" /> Přijmout vše
                  </button>
                )}
              </div>

              <p className="text-center text-white/15 text-xs mt-3">
                <a href="/cookies" className="hover:text-white/40 transition-colors">Zásady cookies</a>
                {" · "}
                <a href="/privacy" className="hover:text-white/40 transition-colors">Ochrana soukromí</a>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Re-export a hook to read consent from anywhere
export function getCookieConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return (JSON.parse(stored) as { value: ConsentValue }).value ?? null;
  } catch {
    return null;
  }
}
