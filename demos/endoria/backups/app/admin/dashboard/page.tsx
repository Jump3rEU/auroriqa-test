"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Users, Server, Share2, BookOpen, ThumbsUp, Briefcase,
  Plus, Edit2, Trash2, Save, LogOut, X, Check, Eye, EyeOff
} from "lucide-react";

// Interfaces
interface TeamMember {
  name: string;
  role: string;
  description: string;
  discord?: string;
}

interface ServerInfo {
  ip: string;
  version: string;
  hytale: string;
  discordLink: string;
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
  title: string;
  requirements: string[];
  benefits: string[];
}

interface Recruitment {
  isOpen: boolean;
  message: string;
  positions: RecruitmentPosition[];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("team");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Team state
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [newMember, setNewMember] = useState<TeamMember>({ name: "", role: "", description: "" });

  // Server info state
  const [serverInfo, setServerInfo] = useState<ServerInfo>({
    ip: "",
    version: "",
    hytale: "",
    discordLink: ""
  });

  // Social links state
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    youtube: "",
    instagram: "",
    tiktok: "",
    discord: ""
  });

  // Rules state
  const [rules, setRules] = useState<Rule[]>([]);
  const [editingRule, setEditingRule] = useState<Rule | null>(null);
  const [newRule, setNewRule] = useState<Rule>({ id: "", title: "", description: "" });

  // Voting sites state
  const [votingSites, setVotingSites] = useState<VotingSite[]>([]);
  const [editingVotingSite, setEditingVotingSite] = useState<VotingSite | null>(null);
  const [newVotingSite, setNewVotingSite] = useState<VotingSite>({ name: "", url: "", reward: "" });

  // Recruitment state
  const [recruitment, setRecruitment] = useState<Recruitment>({
    isOpen: false,
    message: "",
    positions: []
  });
  const [editingPosition, setEditingPosition] = useState<RecruitmentPosition | null>(null);
  const [newPosition, setNewPosition] = useState<RecruitmentPosition>({ 
    title: "", 
    requirements: [""], 
    benefits: [""] 
  });

  // Load data on mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      router.push("/admin");
      return;
    }
    loadSavedData();
  }, [router]);

  // Load data from API
  const loadSavedData = async () => {
    try {
      const response = await fetch('/api/admin/data');
      if (response.ok) {
        const data = await response.json();
        
        if (data.teamMembers) setTeamMembers(data.teamMembers);
        if (data.serverInfo) setServerInfo(data.serverInfo);
        if (data.socialLinks) setSocialLinks(data.socialLinks);
        if (data.rules) setRules(data.rules);
        if (data.votingSites) setVotingSites(data.votingSites);
        if (data.recruitment) {
          // Normalize positions to ensure requirements and benefits are arrays
          const normalizedRecruitment = {
            ...data.recruitment,
            positions: Array.isArray(data.recruitment.positions) 
              ? data.recruitment.positions.map((pos: any) => ({
                  ...pos,
                  requirements: Array.isArray(pos.requirements) ? pos.requirements : [],
                  benefits: Array.isArray(pos.benefits) ? pos.benefits : []
                }))
              : []
          };
          setRecruitment(normalizedRecruitment);
        }
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Add audit log entry
  const addAuditLog = async (action: string, details: string) => {
    try {
      await fetch('/api/admin/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          admin: 'admin',
          action,
          details
        })
      });
    } catch (error) {
      console.error("Error adding audit log:", error);
    }
  };

  // Save all data
  const handleSave = async () => {
    setIsSaving(true);
    try {
      const dataToSave = {
        teamMembers,
        serverInfo,
        socialLinks,
        rules,
        votingSites,
        recruitment
      };

      const response = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSave)
      });

      if (response.ok) {
        await addAuditLog("Save Data", `Saved ${activeTab} section`);
        alert("✅ Změny uloženy!");
      } else {
        alert("❌ Chyba při ukládání");
      }
    } catch (error) {
      console.error("Error saving:", error);
      alert("❌ Chyba při ukládání");
    } finally {
      setIsSaving(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    await addAuditLog("Logout", "Admin logged out");
    localStorage.removeItem("adminAuth");
    router.push("/admin");
  };

  // Team member functions
  const handleAddMember = () => {
    if (newMember.name && newMember.role) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember({ name: "", role: "", description: "" });
    }
  };

  const handleUpdateMember = () => {
    if (editingMember) {
      setTeamMembers(teamMembers.map(m => 
        m.name === editingMember.name ? editingMember : m
      ));
      setEditingMember(null);
    }
  };

  const handleDeleteMember = (name: string) => {
    if (confirm(`Opravdu smazat ${name}?`)) {
      setTeamMembers(teamMembers.filter(m => m.name !== name));
    }
  };

  // Rule functions
  const handleAddRule = () => {
    if (newRule.title && newRule.description) {
      const rule = { ...newRule, id: Date.now().toString() };
      setRules([...rules, rule]);
      setNewRule({ id: "", title: "", description: "" });
    }
  };

  const handleUpdateRule = () => {
    if (editingRule) {
      setRules(rules.map(r => r.id === editingRule.id ? editingRule : r));
      setEditingRule(null);
    }
  };

  const handleDeleteRule = (id: string) => {
    if (confirm("Opravdu smazat toto pravidlo?")) {
      setRules(rules.filter(r => r.id !== id));
    }
  };

  // Voting site functions
  const handleAddVotingSite = () => {
    if (newVotingSite.name && newVotingSite.url) {
      setVotingSites([...votingSites, newVotingSite]);
      setNewVotingSite({ name: "", url: "", reward: "" });
    }
  };

  const handleUpdateVotingSite = () => {
    if (editingVotingSite) {
      setVotingSites(votingSites.map(v => 
        v.name === editingVotingSite.name ? editingVotingSite : v
      ));
      setEditingVotingSite(null);
    }
  };

  const handleDeleteVotingSite = (name: string) => {
    if (confirm(`Opravdu smazat ${name}?`)) {
      setVotingSites(votingSites.filter(v => v.name !== name));
    }
  };

  // Recruitment position functions
  const handleAddPosition = () => {
    if (newPosition.title) {
      setRecruitment({
        ...recruitment,
        positions: [...recruitment.positions, newPosition]
      });
      setNewPosition({ title: "", requirements: [""], benefits: [""] });
    }
  };

  const handleUpdatePosition = () => {
    if (editingPosition) {
      setRecruitment({
        ...recruitment,
        positions: recruitment.positions.map(p => 
          p.title === editingPosition.title ? editingPosition : p
        )
      });
      setEditingPosition(null);
    }
  };

  const handleDeletePosition = (title: string) => {
    if (confirm(`Opravdu smazat pozici ${title}?`)) {
      setRecruitment({
        ...recruitment,
        positions: recruitment.positions.filter(p => p.title !== title)
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const tabs = [
    { id: "team", name: "Team", icon: Users },
    { id: "server", name: "Server", icon: Server },
    { id: "social", name: "Social", icon: Share2 },
    { id: "rules", name: "Pravidla", icon: BookOpen },
    { id: "voting", name: "Voting", icon: ThumbsUp },
    { id: "recruitment", name: "Nábor", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
          >
            Admin Dashboard
          </motion.h1>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              disabled={isSaving}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-pink-500/50 transition-all disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              {isSaving ? "Ukládám..." : "Uložit změny"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500/20 text-red-400 rounded-xl font-semibold flex items-center gap-2 hover:bg-red-500/30 transition-all"
            >
              <LogOut className="w-5 h-5" />
              Odhlásit se
            </motion.button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          >
            {activeTab === "team" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Team Management</h2>
                
                {/* Add new member */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Přidat nového člena týmu
                  </h3>
                  <input
                    type="text"
                    placeholder="Jméno"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Role (např. Founder, Admin, Builder)"
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <textarea
                    placeholder="Popis"
                    value={newMember.description}
                    onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
                  />
                  <input
                    type="text"
                    placeholder="Discord (volitelné)"
                    value={newMember.discord || ""}
                    onChange={(e) => setNewMember({ ...newMember, discord: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddMember}
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Přidat člena
                  </motion.button>
                </div>

                {/* Team members list */}
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/5 p-6 rounded-xl"
                    >
                      {editingMember?.name === member.name ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editingMember.name}
                            onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                          <input
                            type="text"
                            value={editingMember.role}
                            onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                          <textarea
                            value={editingMember.description}
                            onChange={(e) => setEditingMember({ ...editingMember, description: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
                          />
                          <input
                            type="text"
                            value={editingMember.discord || ""}
                            onChange={(e) => setEditingMember({ ...editingMember, discord: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleUpdateMember}
                              className="flex-1 py-2 bg-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                              <Check className="w-5 h-5" />
                              Uložit
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setEditingMember(null)}
                              className="flex-1 py-2 bg-gray-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                              <X className="w-5 h-5" />
                              Zrušit
                            </motion.button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-pink-400 font-semibold mb-2">{member.role}</p>
                            <p className="text-white/70">{member.description}</p>
                            {member.discord && (
                              <p className="text-purple-400 mt-2">Discord: {member.discord}</p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setEditingMember({ ...member })}
                              className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all"
                            >
                              <Edit2 className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDeleteMember(member.name)}
                              className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
                            >
                              <Trash2 className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "server" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Server Info</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 mb-2">Minecraft IP</label>
                    <input
                      type="text"
                      value={serverInfo.ip}
                      onChange={(e) => setServerInfo({ ...serverInfo, ip: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">Verze</label>
                    <input
                      type="text"
                      value={serverInfo.version}
                      onChange={(e) => setServerInfo({ ...serverInfo, version: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">Hytale Status</label>
                    <input
                      type="text"
                      value={serverInfo.hytale}
                      onChange={(e) => setServerInfo({ ...serverInfo, hytale: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">Discord Link</label>
                    <input
                      type="text"
                      value={serverInfo.discordLink}
                      onChange={(e) => setServerInfo({ ...serverInfo, discordLink: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "social" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Social Media Links</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 mb-2">YouTube</label>
                    <input
                      type="text"
                      value={socialLinks.youtube}
                      onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">Instagram</label>
                    <input
                      type="text"
                      value={socialLinks.instagram}
                      onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">TikTok</label>
                    <input
                      type="text"
                      value={socialLinks.tiktok}
                      onChange={(e) => setSocialLinks({ ...socialLinks, tiktok: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">Discord</label>
                    <input
                      type="text"
                      value={socialLinks.discord}
                      onChange={(e) => setSocialLinks({ ...socialLinks, discord: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "rules" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Pravidla Serveru</h2>
                
                {/* Add new rule */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Přidat nové pravidlo
                  </h3>
                  <input
                    type="text"
                    placeholder="Název pravidla"
                    value={newRule.title}
                    onChange={(e) => setNewRule({ ...newRule, title: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <textarea
                    placeholder="Popis pravidla"
                    value={newRule.description}
                    onChange={(e) => setNewRule({ ...newRule, description: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddRule}
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Přidat pravidlo
                  </motion.button>
                </div>

                {/* Rules list */}
                <div className="space-y-4">
                  {rules.map((rule, index) => (
                    <motion.div
                      key={rule.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/5 p-6 rounded-xl"
                    >
                      {editingRule?.id === rule.id ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editingRule.title}
                            onChange={(e) => setEditingRule({ ...editingRule, title: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                          <textarea
                            value={editingRule.description}
                            onChange={(e) => setEditingRule({ ...editingRule, description: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
                          />
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleUpdateRule}
                              className="flex-1 py-2 bg-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                              <Check className="w-5 h-5" />
                              Uložit
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setEditingRule(null)}
                              className="flex-1 py-2 bg-gray-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                              <X className="w-5 h-5" />
                              Zrušit
                            </motion.button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
                            <p className="text-white/70">{rule.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setEditingRule({ ...rule })}
                              className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all"
                            >
                              <Edit2 className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDeleteRule(rule.id)}
                              className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
                            >
                              <Trash2 className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "voting" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Voting Sites</h2>
                
                {/* Add new voting site */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Přidat nový voting web
                  </h3>
                  <input
                    type="text"
                    placeholder="Název webu (např. Czech-Craft)"
                    value={newVotingSite.name}
                    onChange={(e) => setNewVotingSite({ ...newVotingSite, name: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="URL (https://...)"
                    value={newVotingSite.url}
                    onChange={(e) => setNewVotingSite({ ...newVotingSite, url: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Odměna (např. 100 coinů)"
                    value={newVotingSite.reward}
                    onChange={(e) => setNewVotingSite({ ...newVotingSite, reward: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddVotingSite}
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Přidat voting web
                  </motion.button>
                </div>

                {/* Voting sites list */}
                <div className="space-y-4">
                  {votingSites.map((site, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/5 p-6 rounded-xl"
                    >
                      {editingVotingSite?.name === site.name ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editingVotingSite.name}
                            onChange={(e) => setEditingVotingSite({ ...editingVotingSite, name: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                          <input
                            type="text"
                            value={editingVotingSite.url}
                            onChange={(e) => setEditingVotingSite({ ...editingVotingSite, url: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                          <input
                            type="text"
                            value={editingVotingSite.reward}
                            onChange={(e) => setEditingVotingSite({ ...editingVotingSite, reward: e.target.value })}
                            className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleUpdateVotingSite}
                              className="flex-1 py-2 bg-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                              <Check className="w-5 h-5" />
                              Uložit
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setEditingVotingSite(null)}
                              className="flex-1 py-2 bg-gray-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                              <X className="w-5 h-5" />
                              Zrušit
                            </motion.button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white">{site.name}</h3>
                            <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                              {site.url}
                            </a>
                            <p className="text-pink-400 font-semibold mt-2">Odměna: {site.reward}</p>
                          </div>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setEditingVotingSite({ ...site })}
                              className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all"
                            >
                              <Edit2 className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDeleteVotingSite(site.name)}
                              className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
                            >
                              <Trash2 className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "recruitment" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Nábor do Týmu</h2>
                
                {/* Recruitment status */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Status náboru</h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setRecruitment({ ...recruitment, isOpen: !recruitment.isOpen })}
                      className={`px-6 py-2 rounded-xl font-semibold ${
                        recruitment.isOpen
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {recruitment.isOpen ? "Otevřeno" : "Zavřeno"}
                    </motion.button>
                  </div>
                  <textarea
                    placeholder="Zpráva pro uchazeče"
                    value={recruitment.message}
                    onChange={(e) => setRecruitment({ ...recruitment, message: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
                  />
                </div>

                {/* Add new position */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Přidat pozici
                  </h3>
                  <input
                    type="text"
                    placeholder="Název pozice (např. Builder, Moderátor)"
                    value={newPosition.title}
                    onChange={(e) => setNewPosition({ ...newPosition, title: e.target.value })}
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <div>
                    <label className="block text-white/70 mb-2">Požadavky (každý na nový řádek)</label>
                    {newPosition.requirements.map((req, idx) => (
                      <div key={idx} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder={`Požadavek ${idx + 1}`}
                          value={req}
                          onChange={(e) => {
                            const newReqs = [...newPosition.requirements];
                            newReqs[idx] = e.target.value;
                            setNewPosition({ ...newPosition, requirements: newReqs });
                          }}
                          className="flex-1 bg-white/10 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        {idx > 0 && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              const newReqs = newPosition.requirements.filter((_, i) => i !== idx);
                              setNewPosition({ ...newPosition, requirements: newReqs });
                            }}
                            className="p-2 bg-red-500/20 text-red-400 rounded-lg"
                          >
                            <X className="w-4 h-4" />
                          </motion.button>
                        )}
                      </div>
                    ))}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setNewPosition({ ...newPosition, requirements: [...newPosition.requirements, ""] })}
                      className="mt-2 px-4 py-2 bg-white/10 text-white rounded-xl text-sm hover:bg-white/20 transition-all"
                    >
                      + Přidat požadavek
                    </motion.button>
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">Benefity (každý na nový řádek)</label>
                    {newPosition.benefits.map((ben, idx) => (
                      <div key={idx} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder={`Benefit ${idx + 1}`}
                          value={ben}
                          onChange={(e) => {
                            const newBens = [...newPosition.benefits];
                            newBens[idx] = e.target.value;
                            setNewPosition({ ...newPosition, benefits: newBens });
                          }}
                          className="flex-1 bg-white/10 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        {idx > 0 && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              const newBens = newPosition.benefits.filter((_, i) => i !== idx);
                              setNewPosition({ ...newPosition, benefits: newBens });
                            }}
                            className="p-2 bg-red-500/20 text-red-400 rounded-lg"
                          >
                            <X className="w-4 h-4" />
                          </motion.button>
                        )}
                      </div>
                    ))}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setNewPosition({ ...newPosition, benefits: [...newPosition.benefits, ""] })}
                      className="mt-2 px-4 py-2 bg-white/10 text-white rounded-xl text-sm hover:bg-white/20 transition-all"
                    >
                      + Přidat benefit
                    </motion.button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddPosition}
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Přidat pozici
                  </motion.button>
                </div>

                {/* Positions list */}
                <div className="space-y-4">
                  {recruitment.positions.map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/5 p-6 rounded-xl"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDeletePosition(position.title)}
                          className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-pink-400 font-semibold mb-2">Požadavky:</h4>
                          <ul className="list-disc list-inside space-y-1 text-white/70">
                            {Array.isArray(position.requirements) && position.requirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-purple-400 font-semibold mb-2">Benefity:</h4>
                          <ul className="list-disc list-inside space-y-1 text-white/70">
                            {Array.isArray(position.benefits) && position.benefits.map((ben, idx) => (
                              <li key={idx}>{ben}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
