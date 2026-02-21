"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Link2,
  Eye,
  Lock,
  Unlock,
  ExternalLink,
  Plus,
  Copy,
  Check,
  Globe,
  Mail,
  Code2,
  Rocket,
  TrendingUp,
  Activity,
  Settings,
  LogOut,
  ChevronRight,
  Shield,
  Star,
  Clock,
  FileText,
  Zap,
} from "lucide-react";
import { projects, ProjectConfig } from "@/lib/projects";

const ADMIN_PASSWORD = "auroriqa2026";

// ─── helpers ────────────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  gradient,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-400 rounded-2xl`}
      />
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{label}</p>
          <p className="text-3xl font-black text-white">{value}</p>
          {sub && <p className="text-xs text-white/40 mt-1">{sub}</p>}
        </div>
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      title="Kopírovat"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-white/50" />
      )}
    </button>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen bg-[#060610] flex items-center justify-center p-6">
      {/* Background aurora */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.25), transparent 70%)" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`relative w-full max-w-md ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
      >
        <div className="relative p-8 sm:p-10 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] overflow-hidden">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15), transparent 60%)",
                "radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.15), transparent 60%)",
                "radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15), transparent 60%)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Auroriqa Admin</h1>
                <p className="text-xs text-white/40">Přihlášení do panelu</p>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">
                  Heslo
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="password"
                    value={pw}
                    onChange={(e) => { setPw(e.target.value); setError(false); }}
                    placeholder="••••••••••"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.05] border ${
                      error ? "border-red-500/50" : "border-white/[0.08]"
                    } text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 transition-colors`}
                    autoFocus
                  />
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2"
                  >
                    Nesprávné heslo
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Přihlásit se
              </motion.button>
            </form>

            <p className="text-center text-white/20 text-xs mt-6">
              auroriqa.cz / admin panel
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Dashboard ──────────────────────────────────────────────────────────
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<"overview" | "clients" | "content" | "settings">("overview");
  const allProjects = Object.values(projects);
  const activeProjects = allProjects.filter((p) => p.active);

  const tabs = [
    { id: "overview", label: "Přehled", icon: LayoutDashboard },
    { id: "clients", label: "Klienti", icon: Users },
    { id: "content", label: "Obsah", icon: FileText },
    { id: "settings", label: "Nastavení", icon: Settings },
  ] as const;

  return (
    <div className="min-h-screen bg-[#060610] text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 800px 600px at 10% 10%, rgba(139, 92, 246, 0.15), transparent 60%), radial-gradient(ellipse 600px 500px at 90% 80%, rgba(16, 185, 129, 0.1), transparent 60%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* TopBar */}
      <div className="relative z-10 border-b border-white/[0.07] bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm">Auroriqa Admin</span>
            <span className="hidden sm:block text-white/20 text-xs">v1.0</span>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              auroriqa.cz
              <ExternalLink className="w-3 h-3" />
            </motion.a>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:block">Odhlásit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div className="relative z-10 border-b border-white/[0.05] bg-black/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:block">{tab.label}</span>
                  {active && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <OverviewTab
              key="overview"
              totalProjects={allProjects.length}
              activeProjects={activeProjects.length}
            />
          )}
          {activeTab === "clients" && (
            <ClientsTab key="clients" projects={allProjects} />
          )}
          {activeTab === "content" && <ContentTab key="content" />}
          {activeTab === "settings" && <SettingsTab key="settings" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────
function OverviewTab({ totalProjects, activeProjects }: { totalProjects: number; activeProjects: number }) {
  const stats = [
    { icon: Users, label: "Celkem projektů", value: totalProjects, sub: "v databázi", gradient: "from-violet-500 to-purple-600" },
    { icon: Activity, label: "Aktivních preview", value: activeProjects, sub: "dostupných klientům", gradient: "from-emerald-500 to-teal-600" },
    { icon: Globe, label: "Web status", value: "LIVE", sub: "auroriqa.cz", gradient: "from-blue-500 to-cyan-600" },
    { icon: Zap, label: "Deploy platforma", value: "Vercel", sub: "auto-deploy z GH", gradient: "from-pink-500 to-rose-600" },
  ];

  const quickActions = [
    { icon: Plus, label: "Nový klient", desc: "Přidat projekt do preview", href: "/preview", accent: "text-emerald-400", bg: "from-emerald-500/20 to-teal-500/10" },
    { icon: Eye, label: "Preview přehledy", desc: "Zobrazit všechny náhledy", href: "/preview", accent: "text-blue-400", bg: "from-blue-500/20 to-cyan-500/10" },
    { icon: Mail, label: "Kontakt", desc: "hello@auroriqa.cz", href: "mailto:hello@auroriqa.cz", accent: "text-purple-400", bg: "from-purple-500/20 to-pink-500/10" },
    { icon: Code2, label: "GitHub repo", desc: "Jump3rEU/Auroriqa", href: "https://github.com/Jump3rEU/Auroriqa", accent: "text-orange-400", bg: "from-orange-500/20 to-amber-500/10" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Přehled</h2>
        <p className="text-white/40 text-sm">Auroriqa administrační centrum</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <StatCard {...s} />
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Rychlé akce</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className={`group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br ${action.bg} border border-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-pointer`}
              >
                <div className={`p-2 rounded-xl bg-white/5 ${action.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-white">{action.label}</p>
                  <p className="text-xs text-white/40 truncate">{action.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Recent Activity placeholder */}
      <div>
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Aktivita</h3>
        <div className="space-y-3">
          {[
            { icon: Rocket, text: "Deployment úspěšný", time: "Právě teď", color: "text-emerald-400" },
            { icon: Users, text: "Endoria projekt přidán", time: "12.02.2026", color: "text-blue-400" },
            { icon: Star, text: "Preview systém spuštěn", time: "11.02.2026", color: "text-yellow-400" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <div className={`${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/70 flex-1">{item.text}</span>
                <span className="text-xs text-white/30">{item.time}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Clients Tab ──────────────────────────────────────────────────────────────
function ClientsTab({ projects }: { projects: ProjectConfig[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyLink = (id: string) => {
    const url = `${window.location.origin}/preview/${id}`;
    navigator.clipboard.writeText(url);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Správa klientů</h2>
          <p className="text-white/40 text-sm">Preview náhledy a přístupové linky</p>
        </div>
        <motion.a
          href="/preview"
          target="_blank"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold"
        >
          <Eye className="w-4 h-4" />
          Preview stránka
        </motion.a>
      </div>

      {/* Projects table */}
      <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
        <div className="bg-white/[0.03] px-5 py-3 border-b border-white/[0.07] grid grid-cols-12 gap-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
          <span className="col-span-3">Klient / Projekt</span>
          <span className="col-span-2">Status</span>
          <span className="col-span-2 hidden sm:block">Heslo</span>
          <span className="col-span-3 hidden md:block">Preview link</span>
          <span className="col-span-2">Akce</span>
        </div>

        {projects.length === 0 ? (
          <div className="px-5 py-12 text-center text-white/30 text-sm">
            Žádné projekty. Přidej první projekt v{" "}
            <code className="text-purple-400">lib/projects.ts</code>
          </div>
        ) : (
          <div className="divide-y divide-white/[0.05]">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="px-5 py-4 grid grid-cols-12 gap-4 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Name */}
                <div className="col-span-3">
                  <p className="font-semibold text-white text-sm">{p.name}</p>
                  <p className="text-xs text-white/30 mt-0.5">{p.client}</p>
                </div>

                {/* Status */}
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      p.active
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${p.active ? "bg-emerald-400" : "bg-red-400"}`}
                    />
                    {p.active ? "Aktivní" : "Neaktivní"}
                  </span>
                </div>

                {/* Password */}
                <div className="col-span-2 hidden sm:flex items-center gap-1.5">
                  {p.password ? (
                    <>
                      <Lock className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-white/50 font-mono">{p.password}</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-3 h-3 text-white/30" />
                      <span className="text-xs text-white/30">Bez hesla</span>
                    </>
                  )}
                </div>

                {/* Preview link */}
                <div className="col-span-3 hidden md:flex items-center gap-2">
                  <span className="text-xs text-white/40 font-mono truncate">
                    /preview/{p.id}
                  </span>
                  <CopyButton text={`${typeof window !== "undefined" ? window.location.origin : "https://auroriqa.cz"}/preview/${p.id}`} />
                </div>

                {/* Actions */}
                <div className="col-span-2 flex items-center gap-2">
                  <motion.button
                    onClick={() => copyLink(p.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors text-xs text-white/60 hover:text-white"
                  >
                    {copied === p.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Link2 className="w-3.5 h-3.5" />
                    )}
                    <span className="hidden sm:block">
                      {copied === p.id ? "Zkopírováno" : "Link"}
                    </span>
                  </motion.button>

                  <motion.a
                    href={`/preview/${p.id}`}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors text-white/40 hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* How to add clients */}
      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <h4 className="text-sm font-semibold text-white/70 mb-3 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-purple-400" />
          Jak přidat nového klienta
        </h4>
        <div className="text-xs text-white/40 space-y-2 font-mono">
          <p>
            1. Otevři{" "}
            <span className="text-purple-400">lib/projects.ts</span>
          </p>
          <p>2. Přidej nový záznam do objektu <span className="text-emerald-400">projects</span></p>
          <p>3. Nastav <span className="text-yellow-400">active: true</span>, heslo a případně <span className="text-blue-400">iframeUrl</span></p>
          <p>4. Pushni na GitHub → auto-deploy</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Content Tab ──────────────────────────────────────────────────────────────
function ContentTab() {
  const contentItems = [
    {
      section: "Kontakt",
      items: [
        { label: "Email", value: "hello@auroriqa.cz", file: "components/Contact.tsx" },
        { label: "Footer email", value: "hello@auroriqa.cz", file: "components/Footer.tsx" },
      ],
    },
    {
      section: "Hero sekce",
      items: [
        { label: "Animovaná slova (CS)", value: "TVOŘÍME, INOVUJEME, DODÁVÁME, EXCELUJEME", file: "components/Hero.tsx" },
        { label: "Subtitle", value: "Digitální produkty, které fungují.", file: "components/Hero.tsx" },
      ],
    },
    {
      section: "SEO & Meta",
      items: [
        { label: "Název webu", value: "Auroriqa - Digitální Agentura", file: "lib/seo.ts" },
        { label: "SEO email", value: "hello@auroriqa.cz", file: "lib/seo.ts" },
      ],
    },
    {
      section: "Preview systém",
      items: [
        { label: "Projekty config", value: "lib/projects.ts", file: "lib/projects.ts" },
        { label: "Preview stránka", value: "/preview", file: "app/preview/page.tsx" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Správa obsahu</h2>
        <p className="text-white/40 text-sm">Přehled klíčových textů a souborů k editaci</p>
      </div>

      <div className="space-y-6">
        {contentItems.map((group, gi) => (
          <motion.div
            key={group.section}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.1 }}
          >
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
              {group.section}
            </h3>
            <div className="rounded-2xl border border-white/[0.07] overflow-hidden divide-y divide-white/[0.05]">
              {group.items.map((item, ii) => (
                <div key={ii} className="px-5 py-4 flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/40 mb-1">{item.label}</p>
                    <p className="text-sm text-white/80 font-medium truncate">{item.value}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs text-white/25 font-mono hidden sm:block">{item.file}</span>
                    <CopyButton text={item.value} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20">
        <p className="text-amber-400/80 text-xs flex items-start gap-2">
          <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
          Chceš editovat obsah přímo v prohlížeči? Integruj Sanity CMS nebo Contentful pro plnou editaci bez kódu.
        </p>
      </div>
    </motion.div>
  );
}

// ─── Settings Tab ─────────────────────────────────────────────────────────────
function SettingsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Nastavení</h2>
        <p className="text-white/40 text-sm">Konfigurace admin panelu</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: "Admin heslo", value: "auroriqa2026", desc: "Změň v app/admin/page.tsx → ADMIN_PASSWORD", icon: Lock, accent: "text-yellow-400" },
          { label: "Preview URL prefix", value: "/preview/[id]", desc: "app/preview/[projectId]/page.tsx", icon: Link2, accent: "text-blue-400" },
          { label: "GitHub repo", value: "Jump3rEU/Auroriqa", desc: "master branch → auto Vercel deploy", icon: Code2, accent: "text-white" },
          { label: "Framework", value: "Next.js 14 (App Router)", desc: "TypeScript, Tailwind, Framer Motion", icon: Zap, accent: "text-emerald-400" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 ${item.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/40 mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-white mb-1 font-mono">{item.value}</p>
                  <p className="text-xs text-white/25">{item.desc}</p>
                </div>
                <CopyButton text={item.value} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <h4 className="text-sm font-semibold text-white/60 mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Rychlé linky
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Vercel dashboard", href: "https://vercel.com/dashboard" },
            { label: "GitHub repo", href: "https://github.com/Jump3rEU/Auroriqa" },
            { label: "Preview přehledy", href: "/preview" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.06] transition-all text-sm text-white/70 hover:text-white"
            >
              {link.label}
              <ExternalLink className="w-3.5 h-3.5 text-white/30" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page export ──────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin-auth");
    if (stored === "true") setLoggedIn(true);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem("admin-auth", "true");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin-auth");
    setLoggedIn(false);
  };

  return (
    <AnimatePresence mode="wait">
      {loggedIn ? (
        <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Dashboard onLogout={handleLogout} />
        </motion.div>
      ) : (
        <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <LoginScreen onLogin={handleLogin} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
