"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaUsers, 
  FaServer, 
  FaGavel, 
  FaVoteYea, 
  FaUserPlus,
  FaDiscord,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSignOutAlt,
  FaSave,
  FaEdit,
  FaShieldAlt
} from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

interface ServerInfo {
  minecraftIP: string;
  minecraftVersion: string;
  hytaleIP: string;
  discordURL: string;
}

interface SocialLinks {
  youtube: string;
  instagram: string;
  tiktok: string;
  discord: string;
}

interface Rule {
  id: string;
  title: string;
  description: string;
}

interface VotingSite {
  name: string;
  url: string;
  reward: string;
}

interface RecruitmentPosition {
  role: string;
  requirements: string;
  description: string;
}

interface Recruitment {
  enabled: boolean;
  positions: RecruitmentPosition[];
  applicationURL: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("team");
  const [saved, setSaved] = useState(false);

  // Team Data
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: "SetProfile", role: "Owner", description: "Zakladatel a hlavní administrátor serveru" },
    { name: "Lacjim168", role: "Co-Owner", description: "Spoluzakladatel serveru" },
    { name: "FaZeTraRanTula", role: "Elite Helper", description: "Zkušený helper s rozšířenými právy" },
    { name: "Sh1payy", role: "Trial Helper", description: "Nový člen týmu v zkušební době" },
    { name: "vlk_1", role: "Trial Helper", description: "Nový člen týmu v zkušební době" },
  ]);

  // Server Info
  const [serverInfo, setServerInfo] = useState<ServerInfo>({
    minecraftIP: "mc.endoria.eu",
    minecraftVersion: "1.21 - 1.21.11",
    hytaleIP: "hytale.endoria.eu",
    discordURL: "https://discord.endoria.eu",
  });

  // Social Links
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    youtube: "https://youtube.com/@endoriaeu",
    instagram: "https://instagram.com/endoriaeu",  
    tiktok: "https://tiktok.com/@endoriaeu",
    discord: "https://discord.endoria.eu",
  });

  // Rules
  const [rules, setRules] = useState<Rule[]>([
    { id: "1", title: "Respekt k hráčům", description: "Buďte slušní a respektujte ostatní hráče" },
    { id: "2", title: "Zákaz cheatu", description: "Používání neoprávněných modifikací je přísně zakázáno" },
    { id: "3", title: "Zákaz griefingu", description: "Ničení cizích staveb je zakázáno" },
  ]);

  // Voting Sites
  const [votingSites, setVotingSites] = useState<VotingSite[]>([
    { name: "Czech-Craft", url: "https://czech-craft.eu/server/endoria/", reward: "100 coinů" },
    { name: "Minecraft-Lasync () => {
    try {
      const response = await fetch('/api/admin/data');
      if (response.ok) {
        const data = await response.json();
        if (data.teamMembers) setTeamMembers(data.teamMembers);
        if (data.serverInfo) setServerInfo(data.serverInfo);
        if (data.socialLinks) setSocialLinks(data.socialLinks);
        if (data.rules) setRules(data.rules);
        if (data.votingSites) setVotingSites(data.votingSites);
        if (data.recruasync (action: string, details: string) => {
    const adminUser = localStorage.getItem("adminUser") || "Admin";
    
    try {
      await fetch('/api/admin/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ admin: adminUser, action, details })
      });
    } catch (error) {
      console.error('Failed to log action:', error);
    }
        requirements: "Min. 50 hodin na serveru, 15+ let, Discord",
        description: "Pomáháš hráčům s dotazy a dohlížíš na pravidla"
      }
    ],
    applicationURL: "https://forms.gle/example",
  });

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin");
    } else {
      setIsAuthenticated(true);
      loadSavedData();
    }
  }, [router]);

  const loadSavedData = () => {
    const savedTeam = localStorage.getItem("teamMembers");
    const savedServer = localStorage.getItem("serverInfo");
    const savedSocial = localStorage.getItem("socialLinks");
    
    if (savedTeam) setTeamMembers(JSON.parse(savedTeam));
    if (savedServer) setServerInfo(JSON.parse(savedServer));
    if (savedSocial) setSocialLinks(JSON.parse(savedSocial));
  };

  const addAuditLog = (action: string, details: string) => {
    const adminUser = localStorage.getItem("adminUser") || "Admin";
    const log = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      admin: adminUser,
      action,
      details
    };
    
    const existingLogasync () => {
    try {
      const response = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamMembers,
          serverInfo,
          socialLinks,
          rules,
          votingSites,
          recruitment
        })
      });

      if (response.ok) {
        await addAuditLog("Data Saved", "Uloženy všechny změny (Team, Server, Social, Rules, Voting, Recruitment)");
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        alert('Chyba při ukládání!');
      }
    } catch (error) {
      console.error('Failed to save:', error);
      // Fallback to localStorage
      localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
      localStorage.setItem("serverInfo", JSON.stringify(serverInfo));
      localStorage.setItem("socialLinks", JSON.stringify(socialLinks));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    router.push("/admin");
  };

  const handleSave = () => {
    // V produkci: API call k uložení do databáze
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
    localStorage.setItem("serverInfo", JSON.stringify(serverInfo));
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));
    
    addAuditLog("Data Saved", "Uloženy všechny změny (Team, Server, Social)");
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Načítání...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-pink-500/20 backdrop-blur-xl bg-black/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/media/endoriaV2.png"
                  alt="Endoria"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="font-['Lexend'] font-bold text-xl text-white">
                  Admin Dashboard
                </h1>
                <p className="text-white/50 text-sm">Správa obsahu webu</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/admin/superadmin"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 text-red-300 hover:text-red-200 hover:border-red-500/60 transition-all text-sm flex items-center gap-2"
              >
                <FaShieldAlt />
                Super Admin →
              </Link>
              <Link
                href="/"
                target="_blank"
                className="px-4 py-2 rounded-lg bg-black/40 border border-pink-500/20 text-white/80 hover:text-white hover:border-pink-500/40 transition-all text-sm"
              >
                Náhled webu →
              </Link>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform flex items-center gap-2"
              >
                <FaSave />
                {saved ? "Uloženo! ✓" : "Uložit změny"}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all flex items-center gap-2"
              >
                <FaSignOutAlt />
                Odhlásit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-4 sticky top-24">
              <nav className="space-y-2">
                {[
                  { id: "team", icon: FaUsers, label: "Tým" },
                  { id: "server", icon: FaServer, label: "Server Info" },
                  { id: "social", icon: FaDiscord, label: "Social Media" },
                  { id: "rules", icon: FaGavel, label: "Pravidla" },
                  { id: "voting", icon: FaVoteYea, label: "Hlasování" },
                  { id: "recruitment", icon: FaUserPlus, label: "Nábor" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/50 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <tab.icon />
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Team Tab */}
              {activeTab === "team" && (
                <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-8">
                  <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6 flex items-center gap-2">
                    <FaUsers className="text-pink-400" />
                    Správa týmu
                  </h2>
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="bg-black/40 border border-pink-500/10 rounded-xl p-6">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-white/60 text-sm mb-2">Jméno</label>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => {
                                const newMembers = [...teamMembers];
                                newMembers[index].name = e.target.value;
                                setTeamMembers(newMembers);
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2">Role</label>
                            <input
                              type="text"
                              value={member.role}
                              onChange={(e) => {
                                const newMembers = [...teamMembers];
                                newMembers[index].role = e.target.value;
                                setTeamMembers(newMembers);
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                            />
                          </div>
                          <div className="md:col-span-1 flex items-end">
                            <button
                              onClick={() => {
                                const newMembers = teamMembers.filter((_, i) => i !== index);
                                setTeamMembers(newMembers);
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all"
                            >
                              Odstranit
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-white/60 text-sm mb-2">Popis</label>
                          <textarea
                            value={member.description}
                            onChange={(e) => {
                              const newMembers = [...teamMembers];
                              newMembers[index].description = e.target.value;
                              setTeamMembers(newMembers);
                            }}
                            rows={2}
                            className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none resize-none"
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setTeamMembers([...teamMembers, { name: "", role: "", description: "" }]);
                      }}
                      className="w-full py-3 rounded-xl border-2 border-dashed border-pink-500/30 text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all"
                    >
                      + Přidat člena týmu
                    </button>
                  </div>
                </div>
              )}

              {/* Server Info Tab */}
              {activeTab === "server" && (
                <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-8">
                  <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6 flex items-center gap-2">
                    <FaServer className="text-pink-400" />
                    Informace o serveru
                  </h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Minecraft Server IP</label>
                        <input
                          type="text"
                          value={serverInfo.minecraftIP}
                          onChange={(e) => setServerInfo({...serverInfo, minecraftIP: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Minecraft Verze</label>
                        <input
                          type="text"
                          value={serverInfo.minecraftVersion}
                          onChange={(e) => setServerInfo({...serverInfo, minecraftVersion: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Hytale Server IP</label>
                        <input
                          type="text"
                          value={serverInfo.hytaleIP}
                          onChange={(e) => setServerInfo({...serverInfo, hytaleIP: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Discord URL</label>
                        <input
                          type="text"
                          value={serverInfo.discordURL}
                          onChange={(e) => setServerInfo({...serverInfo, discordURL: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Media Tab */}
              {activeTab === "social" && (
                <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-8">
                  <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6 flex items-center gap-2">
                    <FaDiscord className="text-pink-400" />
                    Social Media
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                        <FaYoutube className="text-red-500" />
                        YouTube
                      </label>
                      <input
                        type="text"
                        value={socialLinks.youtube}
                        onChange={(e) => setSocialLinks({...socialLinks, youtube: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                        <FaInstagram className="text-pink-500" />
                        Instagram
                      </label>
                      <input
                        type="text"
                        value={socialLinks.instagram}
                        onChange={(e) => setSocialLinks({...socialLinks, instagram: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                        <FaTiktok className="text-white" />
                        TikTok
                      </label>
                      <input
                        type="text"
                        value={socialLinks.tiktok}
                        onChange={(e) => setSocialLinks({...socialLinks, tiktok: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                        <FaDiscord className="text-indigo-500" />
                        Discord
                      </label>
                      <input
                        type="text"
                        value={socialLinks.discord}
                        onChange={(e) => setSocialLinks({...socialLinks, discord: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder tabs */}
              {activeTab === "rules" && (
                <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-8">
                  <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6 flex items-center gap-2">
                    <FaGavel className="text-pink-400" />
                    Správa pravidel
                  </h2>
                  <div className="space-y-4">
                    {rules.map((rule) => (
                      <div key={rule.id} className="bg-black/40 border border-pink-500/10 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <input
                            type="text"
                            value={rule.title}
                            onChange={(e) => {
                              setRules(rules.map(r => r.id === rule.id ? {...r, title: e.target.value} : r));
                            }}
                            className="flex-1 px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none font-bold"
                            placeholder="Název pravidla"
                          />
                          <button
                            onClick={() => setRules(rules.filter(r => r.id !== rule.id))}
                            className="ml-4 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all"
                          >
                            Odstranit
                          </button>
                        </div>
                        <textarea
                          value={rule.description}
                          onChange={(e) => {
                            setRules(rules.map(r => r.id === rule.id ? {...r, description: e.target.value} : r));
                          }}
                          rows={2}
                          className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none resize-none"
                          placeholder="Popis pravidla"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setRules([...rules, { 
                          id: Date.now().toString(), 
                          title: "", 
                          description: "" 
                        }]);
                      }}
                      className="w-full py-3 rounded-xl border-2 border-dashed border-pink-500/30 text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all"
                    >
                      + Přidat pravidlo
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "voting" && (
                <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-8">
                  <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6 flex items-center gap-2">
                    <FaVoteYea className="text-pink-400" />
                    Voting Sites
                  </h2>
                  <div className="space-y-4">
                    {votingSites.map((site, index) => (
                      <div key={index} className="bg-black/40 border border-pink-500/10 rounded-xl p-6">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-white/60 text-sm mb-2">Název webu</label>
                            <input
                              type="text"
                              value={site.name}
                              onChange={(e) => {
                                const newSites = [...votingSites];
                                newSites[index].name = e.target.value;
                                setVotingSites(newSites);
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                              placeholder="Czech-Craft"
                            />
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2">URL</label>
                            <input
                              type="text"
                              value={site.url}
                              onChange={(e) => {
                                const newSites = [...votingSites];
                                newSites[index].url = e.target.value;
                                setVotingSites(newSites);
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                              placeholder="https://..."
                            />
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2">Odměna</label>
                            <input
                              type="text"
                              value={site.reward}
                              onChange={(e) => {
                                const newSites = [...votingSites];
                                newSites[index].reward = e.target.value;
                                setVotingSites(newSites);
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                              placeholder="100 coinů"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setVotingSites(votingSites.filter((_, i) => i !== index));
                          }}
                          className="mt-4 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all"
                        >
                          Odstranit
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setVotingSites([...votingSites, { name: "", url: "", reward: "" }]);
                      }}
                      className="w-full py-3 rounded-xl border-2 border-dashed border-pink-500/30 text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all"
                    >
                      + Přidat voting site
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "recruitment" && (
                <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-8">
                  <h2 className="font-['Lexend'] font-bold text-2xl text-white mb-6 flex items-center gap-2">
                    <FaUserPlus className="text-pink-400" />
                    Správa náboru
                  </h2>
                  
                  <div className="mb-6 p-4 bg-black/40 border border-pink-500/10 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold mb-1">Stav náboru</h3>
                        <p className="text-white/60 text-sm">Zapnout/vypnout nábor</p>
                      </div>
                      <button
                        onClick={() => setRecruitment({...recruitment, enabled: !recruitment.enabled})}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${
                          recruitment.enabled
                            ? "bg-green-500 text-white"
                            : "bg-red-500/20 border border-red-500/50 text-red-400"
                        }`}
                      >
                        {recruitment.enabled ? "OTEVŘENO" : "ZAVŘENO"}
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/60 text-sm mb-2">URL přihlášky (Google Forms apod.)</label>
                    <input
                      type="text"
                      value={recruitment.applicationURL}
                      onChange={(e) => setRecruitment({...recruitment, applicationURL: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                      placeholder="https://forms.gle/..."
                    />
                  </div>

                  <h3 className="text-white font-bold mb-4">Nabírané pozice</h3>
                  <div className="space-y-4">
                    {recruitment.positions.map((position, index) => (
                      <div key={index} className="bg-black/40 border border-pink-500/10 rounded-xl p-6">
                        <div className="grid gap-4">
                          <div>
                            <label className="block text-white/60 text-sm mb-2">Název role</label>
                            <input
                              type="text"
                              value={position.role}
                              onChange={(e) => {
                                const newPositions = [...recruitment.positions];
                                newPositions[index].role = e.target.value;
                                setRecruitment({...recruitment, positions: newPositions});
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                              placeholder="Helper"
                            />
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2">Požadavky</label>
                            <input
                              type="text"
                              value={position.requirements}
                              onChange={(e) => {
                                const newPositions = [...recruitment.positions];
                                newPositions[index].requirements = e.target.value;
                                setRecruitment({...recruitment, positions: newPositions});
                              }}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none"
                              placeholder="Min. 50 hodin, 15+ let, Discord"
                            />
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2">Popis pozice</label>
                            <textarea
                              value={position.description}
                              onChange={(e) => {
                                const newPositions = [...recruitment.positions];
                                newPositions[index].description = e.target.value;
                                setRecruitment({...recruitment, positions: newPositions});
                              }}
                              rows={2}
                              className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-pink-500/20 focus:border-pink-500/50 focus:outline-none resize-none"
                              placeholder="Co bude helper dělat..."
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setRecruitment({
                              ...recruitment,
                              positions: recruitment.positions.filter((_, i) => i !== index)
                            });
                          }}
                          className="mt-4 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all"
                        >
                          Odstranit pozici
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setRecruitment({
                          ...recruitment,
                          positions: [...recruitment.positions, { role: "", requirements: "", description: "" }]
                        });
                      }}
                      className="w-full py-3 rounded-xl border-2 border-dashed border-pink-500/30 text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all"
                    >
                      + Přidat pozici
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
