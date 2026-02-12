"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaShieldAlt,
  FaExclamationTriangle,
  FaPowerOff,
  FaUndo,
  FaDownload,
  FaPalette,
  FaLock,
  FaSignOutAlt,
  FaEye,
  FaEyeSlash,
  FaUsers,
  FaUserPlus,
  FaTrash,
  FaEdit,
  FaHistory,
  FaKey,
  FaDatabase,
  FaCog
} from "react-icons/fa";

interface Admin {
  id: string;
  username: string;
  password: string;
  role: "admin" | "moderator";
  createdAt: string;
  lastLogin?: string;
}

interface AuditLogEntry {
  id: string;
  timestamp: string;
  admin: string;
  action: string;
  details: string;
}

interface SiteSettings {
  maintenanceMode: boolean;
  maintenanceMessage: string;
  primaryColor: string;
  secondaryColor: string;
}

export default function SuperAdminPanel() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Super Admin Password
  const SUPER_ADMIN_PASSWORD = "endoria_superadmin_2026_failsafe";

  // Admins Management
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    username: "",
    password: "",
    role: "admin" as "admin" | "moderator"
  });
  const [editingAdmin, setEditingAdmin] = useState<string | null>(null);
  const [editPassword, setEditPassword] = useState("");

  // Audit Log
  const [auditLog, setAuditLog] = useState<AuditLogEntry[]>([]);

  // Site Settings
  const [settings, setSettings] = useState<SiteSettings>({
    maintenanceMode: false,
    maintenanceMessage: "🔧 Server je momentálně v údržbě. Vraťte se prosím později.",
    primaryColor: "#ec4899",
    secondaryColor: "#a855f7",
  });

  useEffect(() => {
    const superAuth = localStorage.getItem("superAdminAuth");
    if (superAuth === "true") {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = async () => {
    try {
      // Load admins from API
      const adminsResponse = await fetch('/api/admin/admins');
      if (adminsResponse.ok) {
        const adminsData = await adminsResponse.json();
        setAdmins(adminsData);
      }

      // Load audit log from API
      const auditResponse = await fetch('/api/admin/audit');
      if (auditResponse.ok) {
        const auditData = await auditResponse.json();
        setAuditLog(auditData);
      }

      // Load settings
      const savedSettings = localStorage.getItem("siteSettings");
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error('Failed to load data from API:', error);
      // Fallback to localStorage
      const savedAdmins = localStorage.getItem("admins");
      if (savedAdmins) {
        setAdmins(JSON.parse(savedAdmins));
      } else {
        const defaultAdmins: Admin[] = [{
          id: "1",
          username: "admin",
          password: "endoria2026",
          role: "admin",
          createdAt: new Date().toISOString()
        }];
        setAdmins(defaultAdmins);
      }

      const savedLog = localStorage.getItem("auditLog");
      if (savedLog) {
        setAuditLog(JSON.parse(savedLog));
      }
    }
  };

  const addAuditLog = async (action: string, details: string) => {
    const newEntry: AuditLogEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      admin: "Super Admin",
      action,
      details
    };
    
    try {
      await fetch('/api/admin/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ admin: "Super Admin", action, details })
      });
      
      const updatedLog = [newEntry, ...auditLog].slice(0, 100);
      setAuditLog(updatedLog);
    } catch (error) {
      console.error('Failed to add audit log:', error);
      // Fallback to localStorage
      const updatedLog = [newEntry, ...auditLog].slice(0, 100);
      setAuditLog(updatedLog);
      localStorage.setItem("auditLog", JSON.stringify(updatedLog));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SUPER_ADMIN_PASSWORD) {
      localStorage.setItem("superAdminAuth", "true");
      setIsAuthenticated(true);
      loadData();
      setError("");
      addAuditLog("Login"async () => {
    if (!newAdmin.username || !newAdmin.password) {
      alert("Vyplňte všechna pole!");
      return;
    }

    const admin: Admin = {
      id: Date.now().toString(),
      username: newAdmin.username,
      password: newAdmin.password,
      role: newAdmin.role,
      createdAt: new Date().toISOString()
    };

    const updatedAdmins = [...admins, admin];
    
    try {
      await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAdmins)
      });
      
      setAdmins(updatedAdmins);
      await addAuditLog("Admin Added", `Nový admin: ${newAdmin.username} (${newAdmin.role})`);
      
      setShowAddAdmin(false)async (id: string) => {
    const admin = admins.find(a => a.id === id);
    if (!admin) return;

    if (!confirm(`Opravdu smazat admina "${admin.username}"?`)) return;

    const updatedAdmins = admins.filter(a => a.id !== id);
    
    try {
      await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAdmins)
      });
      
      setAdmins(updatedAdmins);
      await addAuditLog("Admin async (id: string) => {
    const admin = admins.find(a => a.id === id);
    if (!admin || !editPassword) return;

    const updatedAdmins = admins.map(a => 
      a.id === id ? { ...a, password: editPassword } : a
    );
    
    try {
      await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAdmins)
      });
      
      setAdmins(updatedAdmins);
      await addAuditLog("Password Changed", `Změněno heslo pro: ${admin.username}`);
      
      setEditingAdmin(null);
      setEditPassword("");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Failed to change password:', error);
      alert('Chyba při změně hesla!');
    }

  const handleDeleteAdmin = (id: string) => {
    const admin = admins.find(a => a.id === id);
    if (!admin) return;

    if (!confirm(`Opravdu smazat admina "${admin.username}"?`)) return;

    const updatedAdmins = admins.filter(a => a.id !== id);
    setAdmins(updatedAdmins);
    localStorage.setItem("admins", JSON.stringify(updatedAdmins));
    
    addAuditLog("Admin Deleted", `Smazán admin: ${admin.username}`);
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChangePassword = (id: string) => {
    const admin = admins.find(a => a.id === id);
    if (!admin || !editPassword) return;

    const updatedAdmins = admins.map(a => 
      a.id === id ? { ...a, password: editPassword } : a
    );
    
    setAdmins(updatedAdmins);
    localStorage.setItem("admins", JSON.stringify(updatedAdmins));
    
    addAuditLog("Password Chanasync () => {
    if (confirm("Opravdu smazat celý audit log?")) {
      try {
        await fetch('/api/admin/audit', { method: 'DELETE' });
        setAuditLog([]);
        await addAuditLog("Audit Log Cleared", "Audit log vymazán");
      } catch (error) {
        console.error('Failed to clear audit log:', error);
        setAuditLog([]);
        localStorage.removeItem("auditLog");
      }
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("siteSettings", JSON.stringify(settings));
    addAuditLog("Settings Saved", "Uložena nastavení webu");
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleForceLogoutAllAdmins = () => {
    if (confirm("Opravdu chcete odhlásit všechny administrátory?")) {
      localStorage.removeItem("adminAuth");
      localStorage.removeItem("adminUser");
      addAuditLog("Force Logout", "Všichni admini odhlášeni");
      alert("Všichni administrátoři byli odhlášeni!");
    }
  };

  const handleResetSettings = () => {
    if (confirm("VAROVÁNÍ: Toto resetuje všechna nastavení na výchozí hodnoty. Pokračovat?")) {
      localStorage.removeItem("teamMembers");
      localStorage.removeItem("serverInfo");
      localStorage.removeItem("socialLinks");
      localStorage.removeItem("siteSettings");
      
      setSettings({
        maintenanceMode: false,
        maintenanceMessage: "🔧 Server je momentálně v údržbě. Vraťte se prosím později.",
        primaryColor: "#ec4899",
        secondaryColor: "#a855f7",
      });
      
      addAuditLog("Settings Reset", "Všechna nastavení resetována na výchozí");
      alert("Všechna nastavení byla resetována!");
    }
  };

  const handleClearAuditLog = () => {
    if (confirm("Opravdu smazat celý audit log?")) {
      setAuditLog([]);
      localStorage.removeItem("auditLog");
      addAuditLog("Audit Log Cleared", "Audit log vymazán");
    }
  };

  const handleExportBackup = () => {
    const backup = {
      timestamp: new Date().toISOString(),
      admins: localStorage.getItem("admins"),
      teamMembers: localStorage.getItem("teamMembers"),
      serverInfo: localStorage.getItem("serverInfo"),
      socialLinks: localStorage.getItem("socialLinks"),
      siteSettings: localStorage.getItem("siteSettings"),
      auditLog: localStorage.getItem("auditLog"),
    };
    
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `endoria-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    addAuditLog("Backup Exported", `Záloha exportována`);
  };

  const handleExportAuditLog = () => {
    const csv = "Timestamp,Admin,Action,Details\n" + 
      auditLog.map(entry => 
        `"${new Date(entry.timestamp).toLocaleString('cs-CZ')}","${entry.admin}","${entry.action}","${entry.details}"`
      ).join("\n");
    
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-log-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="backdrop-blur-2xl bg-black/80 border-2 border-red-500/40 rounded-2xl p-8 shadow-2xl shadow-red-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
            </div>
            
            <h1 className="font-['Lexend'] font-black text-3xl text-center text-white mb-2">
              SUPER ADMIN
            </h1>
            <p className="text-red-400 text-center mb-6 text-sm font-bold">
              🔒 FAILSAFE MODE - Nejvyšší úroveň přístupu
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm mb-2">Super Admin Heslo</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Zadejte failsafe heslo..."
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold rounded-lg hover:scale-105 transition-transform"
              >
                Přihlásit se jako Super Admin
              </button>
            </form>

            <Link
              href="/"
              className="block mt-6 text-center text-white/50 hover:text-white transition-colors text-sm"
            >
              ← Zpět na hlavní stránku
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Super Admin Dashboard
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-red-500/30 backdrop-blur-xl bg-black/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="font-['Lexend'] font-bold text-xl text-white">
                  🔒 SUPER ADMIN PANEL
                </h1>
                <p className="text-red-400 text-sm font-bold">Failsafe Control Center</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/admin/dashboard"
                className="px-4 py-2 rounded-lg bg-black/40 border border-pink-500/20 text-white/80 hover:text-white hover:border-pink-500/40 transition-all text-sm"
              >
                Normal Admin →
              </Link>
              <button
                onClick={handleSaveSettings}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold hover:scale-105 transition-transform"
              >
                {saved ? "✓ Uloženo!" : "Uložit změny"}
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
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: "dashboard", icon: FaShieldAlt, label: "Dashboard" },
            { id: "admins", icon: FaUsers, label: "Admin Management" },
            { id: "audit", icon: FaHistory, label: "Audit Log" },
            { id: "settings", icon: FaCog, label: "Site Settings" },
            { id: "tools", icon: FaDatabase, label: "Tools" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                  : "bg-black/40 border border-red-500/20 text-white/70 hover:text-white hover:border-red-500/40"
              }`}
            >
              <tab.icon />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Warning Banner */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <FaExclamationTriangle className="text-3xl text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-bold text-xl text-white mb-2">⚠️ VAROVÁNÍ - Nejvyšší úroveň přístupu</h2>
                    <p className="text-white/80">
                      Nacházíte se v Super Admin panelu s plnou kontrolou nad webem a všemi administrátory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="backdrop-blur-xl bg-black/60 border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <FaUsers className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Celkem Adminů</p>
                      <p className="text-white text-3xl font-bold">{admins.length}</p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-black/60 border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <FaHistory className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Audit Záznamy</p>
                      <p className="text-white text-3xl font-bold">{auditLog.length}</p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-black/60 border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      settings.maintenanceMode 
                        ? "bg-gradient-to-br from-yellow-500 to-orange-600" 
                        : "bg-gradient-to-br from-green-500 to-emerald-600"
                    }`}>
                      <FaPowerOff className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Status Webu</p>
                      <p className={`text-2xl font-bold ${
                        settings.maintenanceMode ? "text-yellow-400" : "text-green-400"
                      }`}>
                        {settings.maintenanceMode ? "Údržba" : "Online"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="backdrop-blur-xl bg-black/60 border border-red-500/30 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <FaHistory className="text-red-400" />
                  Poslední Aktivita
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {auditLog.slice(0, 10).map((entry) => (
                    <div key={entry.id} className="bg-black/40 rounded-lg p-3 border border-white/10">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-white font-bold text-sm">{entry.action}</p>
                        <p className="text-white/50 text-xs">{new Date(entry.timestamp).toLocaleString('cs-CZ')}</p>
                      </div>
                      <p className="text-white/70 text-sm">{entry.details}</p>
                      <p className="text-white/50 text-xs mt-1">Provedl: {entry.admin}</p>
                    </div>
                  ))}
                  {auditLog.length === 0 && (
                    <p className="text-white/50 text-center py-4">Žádné záznamy</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Admins Tab */}
          {activeTab === "admins" && (
            <motion.div
              key="admins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl text-white">Správa Administrátorů</h2>
                <button
                  onClick={() => setShowAddAdmin(!showAddAdmin)}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <FaUserPlus />
                  Přidat Admina
                </button>
              </div>

              {/* Add Admin Form */}
              {showAddAdmin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="backdrop-blur-xl bg-black/60 border border-green-500/30 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-xl text-white mb-4">Nový Administrátor</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Uživatelské jméno"
                      value={newAdmin.username}
                      onChange={(e) => setNewAdmin({...newAdmin, username: e.target.value})}
                      className="px-4 py-3 bg-black/60 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500"
                    />
                    <input
                      type="text"
                      placeholder="Heslo"
                      value={newAdmin.password}
                      onChange={(e) => setNewAdmin({...newAdmin, password: e.target.value})}
                      className="px-4 py-3 bg-black/60 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500"
                    />
                    <select
                      value={newAdmin.role}
                      onChange={(e) => setNewAdmin({...newAdmin, role: e.target.value as "admin" | "moderator"})}
                      className="px-4 py-3 bg-black/60 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500"
                    >
                      <option value="admin">Admin</option>
                      <option value="moderator">Moderátor</option>
                    </select>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={handleAddAdmin}
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:scale-105 transition-transform"
                    >
                      Přidat
                    </button>
                    <button
                      onClick={() => setShowAddAdmin(false)}
                      className="px-6 py-2 bg-black/60 border border-white/20 text-white rounded-lg hover:bg-black/80 transition-all"
                    >
                      Zrušit
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Admins List */}
              <div className="space-y-4">
                {admins.map((admin) => (
                  <div key={admin.id} className="backdrop-blur-xl bg-black/60 border border-red-500/30 rounded-2xl p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-xl text-white">{admin.username}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            admin.role === "admin" 
                              ? "bg-red-500/20 text-red-300 border border-red-500/30" 
                              : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          }`}>
                            {admin.role === "admin" ? "Admin" : "Moderátor"}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm">
                          Vytvořen: {new Date(admin.createdAt).toLocaleDateString('cs-CZ')}
                        </p>
                        {admin.lastLogin && (
                          <p className="text-white/60 text-sm">
                            Poslední přihlášení: {new Date(admin.lastLogin).toLocaleString('cs-CZ')}
                          </p>
                        )}
                        
                        {editingAdmin === admin.id ? (
                          <div className="mt-4 flex gap-3">
                            <input
                              type="text"
                              placeholder="Nové heslo"
                              value={editPassword}
                              onChange={(e) => setEditPassword(e.target.value)}
                              className="px-4 py-2 bg-black/60 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                            />
                            <button
                              onClick={() => handleChangePassword(admin.id)}
                              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg hover:scale-105 transition-transform"
                            >
                              Uložit
                            </button>
                            <button
                              onClick={() => {
                                setEditingAdmin(null);
                                setEditPassword("");
                              }}
                              className="px-4 py-2 bg-black/60 border border-white/20 text-white rounded-lg hover:bg-black/80 transition-all"
                            >
                              Zrušit
                            </button>
                          </div>
                        ) : (
                          <div className="mt-4">
                            <p className="text-white/40 text-sm font-mono">Heslo: {'•'.repeat(admin.password.length)}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingAdmin(admin.id);
                            setEditPassword(admin.password);
                          }}
                          className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 rounded-lg hover:bg-yellow-500/30 transition-all flex items-center gap-2"
                        >
                          <FaKey />
                          Změnit heslo
                        </button>
                        <button
                          onClick={() => handleDeleteAdmin(admin.id)}
                          className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg hover:bg-red-500/30 transition-all flex items-center gap-2"
                        >
                          <FaTrash />
                          Smazat
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Audit Log Tab */}
          {activeTab === "audit" && (
            <motion.div
              key="audit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl text-white">Audit Log</h2>
                <div className="flex gap-3">
                  <button
                    onClick={handleExportAuditLog}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <FaDownload />
                    Export CSV
                  </button>
                  <button
                    onClick={handleClearAuditLog}
                    className="px-6 py-3 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg hover:bg-red-500/30 transition-all"
                  >
                    Vymazat Log
                  </button>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-black/60 border border-red-500/30 rounded-2xl p-6">
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {auditLog.map((entry) => (
                    <div key={entry.id} className="bg-black/40 rounded-lg p-4 border border-white/10 hover:border-red-500/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-white font-bold">{entry.action}</p>
                          <p className="text-white/70 text-sm mt-1">{entry.details}</p>
                        </div>
                        <p className="text-white/50 text-sm whitespace-nowrap ml-4">
                          {new Date(entry.timestamp).toLocaleString('cs-CZ')}
                        </p>
                      </div>
                      <p className="text-white/40 text-xs">Provedl: {entry.admin}</p>
                    </div>
                  ))}
                  {auditLog.length === 0 && (
                    <p className="text-white/50 text-center py-8">Žádné záznamy v audit logu</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <h2 className="font-bold text-2xl text-white">Nastavení Webu</h2>

              {/* Maintenance Mode */}
              <div className="backdrop-blur-xl bg-black/60 border border-yellow-500/30 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-white flex items-center gap-2">
                      🔧 Maintenance Mode
                    </h3>
                    <p className="text-white/60 text-sm mt-1">Web bude přístupný pouze administrátorům</p>
                  </div>
                  <button
                    onClick={() => {
                      setSettings({...settings, maintenanceMode: !settings.maintenanceMode});
                      addAuditLog("Maintenance Mode", `Režim údržby: ${!settings.maintenanceMode ? "Aktivován" : "Deaktivován"}`);
                    }}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                      settings.maintenanceMode
                        ? "bg-yellow-500 text-black"
                        : "bg-black/60 border border-yellow-500/30 text-yellow-400"
                    }`}
                  >
                    {settings.maintenanceMode ? "AKTIVNÍ" : "Vypnuto"}
                  </button>
                </div>
                <textarea
                  value={settings.maintenanceMessage}
                  onChange={(e) => setSettings({...settings, maintenanceMessage: e.target.value})}
                  className="w-full px-4 py-3 bg-black/60 border border-yellow-500/20 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  rows={2}
                  placeholder="Zpráva pro návštěvníky..."
                />
              </div>

              {/* Color Customization */}
              <div className="backdrop-blur-xl bg-black/60 border border-pink-500/30 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <FaPalette className="text-pink-400" />
                  Barevné Schéma
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2 font-bold">Primární barva (Pink)</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={settings.primaryColor}
                        onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
                        className="w-20 h-20 rounded-xl border-2 border-pink-500/30 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={settings.primaryColor}
                        onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
                        className="flex-1 px-4 py-2 bg-black/60 border border-pink-500/30 rounded-lg text-white font-mono focus:outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 font-bold">Sekundární barva (Purple)</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={settings.secondaryColor}
                        onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
                        className="w-20 h-20 rounded-xl border-2 border-purple-500/30 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={settings.secondaryColor}
                        onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
                        className="flex-1 px-4 py-2 bg-black/60 border border-purple-500/30 rounded-lg text-white font-mono focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tools Tab */}
          {activeTab === "tools" && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <h2 className="font-bold text-2xl text-white">Nástroje & Akce</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={handleForceLogoutAllAdmins}
                  className="p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/50 rounded-2xl text-left hover:scale-105 transition-transform group"
                >
                  <FaLock className="text-3xl text-orange-400 mb-3" />
                  <h3 className="font-bold text-xl text-white mb-2">Odhlásit Všechny Adminy</h3>
                  <p className="text-white/70 text-sm">Vynutí odhlášení všech administrátorů</p>
                </button>

                <button
                  onClick={handleResetSettings}
                  className="p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 border-2 border-red-500/50 rounded-2xl text-left hover:scale-105 transition-transform group"
                >
                  <FaUndo className="text-3xl text-red-400 mb-3" />
                  <h3 className="font-bold text-xl text-white mb-2">Reset Nastavení</h3>
                  <p className="text-white/70 text-sm">Vrátí web do výchozího stavu</p>
                </button>

                <button
                  onClick={handleExportBackup}
                  className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-2xl text-left hover:scale-105 transition-transform group"
                >
                  <FaDownload className="text-3xl text-green-400 mb-3" />
                  <h3 className="font-bold text-xl text-white mb-2">Exportovat Zálohu</h3>
                  <p className="text-white/70 text-sm">Stáhne kompletní JSON zálohu</p>
                </button>

                <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 rounded-2xl">
                  <FaDatabase className="text-3xl text-blue-400 mb-3" />
                  <h3 className="font-bold text-xl text-white mb-2">LocalStorage Info</h3>
                  <p className="text-white/70 text-sm mb-2">Uložená data v prohlížeči</p>
                  <div className="space-y-1 text-xs text-white/60">
                    <p>• Admins: {localStorage.getItem("admins") ? "✓" : "✗"}</p>
                    <p>• Settings: {localStorage.getItem("siteSettings") ? "✓" : "✗"}</p>
                    <p>• Audit Log: {auditLog.length} záznamů</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
