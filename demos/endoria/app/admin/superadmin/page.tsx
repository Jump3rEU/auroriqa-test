"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Shield, Users, FileText, Settings, Wrench,
  Plus, Edit2, Trash2, Save, LogOut, Download, AlertTriangle,
  CheckCircle, XCircle, Key, RefreshCw, Database, Activity
} from "lucide-react";

// Interfaces
interface Admin {
  username: string;
  password: string;
  role: string;
}

interface AuditEntry {
  id: string;
  timestamp: string;
  admin: string;
  action: string;
  details: string;
}

interface SiteSettings {
  primaryColor: string;
  secondaryColor: string;
  maintenanceMode: boolean;
  maintenanceMessage: string;
}

export default function SuperAdminPanel() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Super Admin Password
  const SUPER_ADMIN_PASSWORD = "endoria_superadmin_2026_failsafe";

  // State
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [auditLog, setAuditLog] = useState<AuditEntry[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    primaryColor: "#ec4899",
    secondaryColor: "#a855f7",
    maintenanceMode: false,
    maintenanceMessage: "Server je momentálně v údržbě. Brzy budeme zpět!"
  });

  // New admin form
  const [newAdmin, setNewAdmin] = useState<Admin>({ username: "", password: "", role: "admin" });

  // Password change form
  const [passwordChange, setPasswordChange] = useState({ username: "", newPassword: "" });

  useEffect(() => {
    const auth = localStorage.getItem("superAdminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadData();
    } else {
      setIsLoading(false);
    }
  }, []);

  // Load data from API
  const loadData = async () => {
    try {
      // Load admins
      const adminsRes = await fetch('/api/admin/admins');
      if (adminsRes.ok) {
        const adminsData = await adminsRes.json();
        setAdmins(adminsData);
      }

      // Load audit log
      const auditRes = await fetch('/api/admin/audit');
      if (auditRes.ok) {
        const auditData = await auditRes.json();
        setAuditLog(auditData.slice(0, 50)); // Last 50 entries
      }

      // Load site settings
      const savedSettings = localStorage.getItem("siteSettings");
      if (savedSettings) {
        setSiteSettings(JSON.parse(savedSettings));
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
      const response = await fetch('/api/admin/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          admin: 'superadmin',
          action,
          details
        })
      });

      if (response.ok) {
        const newEntry = await response.json();
        setAuditLog([newEntry, ...auditLog]);
      }
    } catch (error) {
      console.error("Error adding audit log:", error);
    }
  };

  // Login handler
  const handleLogin = async () => {
    if (password === SUPER_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("superAdminAuth", "true");
      await addAuditLog("Login", "Super Admin logged in");
      loadData();
    } else {
      alert("❌ Nesprávné heslo!");
    }
  };

  // Logout handler
  const handleLogout = async () => {
    await addAuditLog("Logout", "Super Admin logged out");
    localStorage.removeItem("superAdminAuth");
    setIsAuthenticated(false);
    router.push("/admin");
  };

  // Admin management handlers
  const handleAddAdmin = async () => {
    if (newAdmin.username && newAdmin.password) {
      const updatedAdmins = [...admins, newAdmin];
      
      const response = await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAdmins)
      });

      if (response.ok) {
        setAdmins(updatedAdmins);
        await addAuditLog("Add Admin", `Added admin: ${newAdmin.username} (${newAdmin.role})`);
        setNewAdmin({ username: "", password: "", role: "admin" });
        alert("✅ Admin přidán!");
      }
    }
  };

  const handleDeleteAdmin = async (username: string) => {
    if (confirm(`Opravdu smazat admina ${username}?`)) {
      const updatedAdmins = admins.filter(a => a.username !== username);
      
      const response = await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAdmins)
      });

      if (response.ok) {
        setAdmins(updatedAdmins);
        await addAuditLog("Delete Admin", `Deleted admin: ${username}`);
        alert("✅ Admin smazán!");
      }
    }
  };

  const handleChangePassword = async () => {
    if (passwordChange.username && passwordChange.newPassword) {
      const updatedAdmins = admins.map(a =>
        a.username === passwordChange.username
          ? { ...a, password: passwordChange.newPassword }
          : a
      );

      const response = await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAdmins)
      });

      if (response.ok) {
        setAdmins(updatedAdmins);
        await addAuditLog("Change Password", `Changed password for: ${passwordChange.username}`);
        setPasswordChange({ username: "", newPassword: "" });
        alert("✅ Heslo změněno!");
      }
    }
  };

  // Audit log handlers
  const handleClearAuditLog = async () => {
    if (confirm("⚠️ Opravdu smazat celý audit log? Tato akce je nevratná!")) {
      const response = await fetch('/api/admin/audit', {
        method: 'DELETE'
      });

      if (response.ok) {
        setAuditLog([]);
        await addAuditLog("Clear Audit Log", "Audit log cleared");
        alert("✅ Audit log smazán!");
      }
    }
  };

  const handleExportAuditLog = () => {
    const csv = [
      ["Timestamp", "Admin", "Action", "Details"].join(","),
      ...auditLog.map(entry =>
        [entry.timestamp, entry.admin, entry.action, entry.details].join(",")
      )
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-log-${new Date().toISOString()}.csv`;
    a.click();
    addAuditLog("Export Audit Log", "Audit log exported");
  };

  // Settings handlers
  const handleSaveSettings = () => {
    localStorage.setItem("siteSettings", JSON.stringify(siteSettings));
    addAuditLog("Update Settings", "Site settings updated");
    alert("✅ Nastavení uloženo!");
  };

  const handleToggleMaintenance = async () => {
    const newMode = !siteSettings.maintenanceMode;
    setSiteSettings({ ...siteSettings, maintenanceMode: newMode });
    await addAuditLog(
      "Toggle Maintenance",
      `Maintenance mode ${newMode ? "enabled" : "disabled"}`
    );
  };

  const handleForceLogoutAll = async () => {
    if (confirm("⚠️ Opravdu odhlásit všechny běžné adminy?")) {
      localStorage.removeItem("adminAuth");
      await addAuditLog("Force Logout All", "All admins logged out");
      alert("✅ Všichni admins byli odhlášeni!");
    }
  };

  const handleResetSettings = async () => {
    if (confirm("⚠️⚠️⚠️ VAROVÁNÍ: Toto smaže všechna nastavení! Pokračovat?")) {
      if (confirm("Opravdu? Toto je nevratné!")) {
        localStorage.clear();
        await addAuditLog("Reset Settings", "All settings reset to default");
        window.location.reload();
      }
    }
  };

  const handleExportBackup = () => {
    const backup = {
      timestamp: new Date().toISOString(),
      admins,
      auditLog,
      siteSettings
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `endoria-backup-${new Date().toISOString()}.json`;
    a.click();
    addAuditLog("Export Backup", "Full backup exported");
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500/20 via-orange-500/20 to-red-500/20 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full shadow-2xl"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <Shield className="w-16 h-16 text-red-500" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Super Admin Control Center</h1>
            <p className="text-white/70">Pouze pro autorizovaný personál</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Super Admin heslo"
                className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 pr-12"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                {showPassword ? <XCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                Přihlásit se
              </span>
            </motion.button>
          </div>

          <div className="mt-8 p-4 bg-red-500/20 rounded-xl">
            <p className="text-sm text-white/70 text-center">
              ⚠️ Tento panel poskytuje úplnou kontrolu nad webem. 
              Přístup pouze pro důvěryhodné osoby.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-500/10 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: Activity },
    { id: "admins", name: "Admin Management", icon: Users },
    { id: "audit", name: "Audit Log", icon: FileText },
    { id: "settings", name: "Settings", icon: Settings },
    { id: "tools", name: "Tools", icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-500/10 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent flex items-center gap-3">
              <Shield className="w-10 h-10 text-red-500" />
              Super Admin Control Center
            </h1>
            <p className="text-white/50 mt-2">Úplná kontrola nad serverem Endoria.eu</p>
          </motion.div>

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
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/50"
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
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Přehled Systému</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Users className="w-8 h-8 text-blue-400" />
                      <span className="text-3xl font-bold text-white">{admins.length}</span>
                    </div>
                    <h3 className="text-white font-semibold">Celkem Adminů</h3>
                    <p className="text-white/50 text-sm mt-2">Aktivních administrátorů</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <FileText className="w-8 h-8 text-purple-400" />
                      <span className="text-3xl font-bold text-white">{auditLog.length}</span>
                    </div>
                    <h3 className="text-white font-semibold">Audit Záznamy</h3>
                    <p className="text-white/50 text-sm mt-2">Historie aktivit</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${
                      siteSettings.maintenanceMode
                        ? "from-red-500/20 to-red-600/20"
                        : "from-green-500/20 to-green-600/20"
                    } p-6 rounded-xl`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Activity className={`w-8 h-8 ${
                        siteSettings.maintenanceMode ? "text-red-400" : "text-green-400"
                      }`} />
                      <span className="text-2xl font-bold text-white">
                        {siteSettings.maintenanceMode ? "OFF" : "ON"}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold">Status Serveru</h3>
                    <p className="text-white/50 text-sm mt-2">
                      {siteSettings.maintenanceMode ? "Údržba" : "Aktivní"}
                    </p>
                  </motion.div>
                </div>

                {/* Recent activity */}
                <div className="bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Poslední Aktivity</h3>
                  <div className="space-y-3">
                    {auditLog.slice(0, 5).map((entry) => (
                      <div key={entry.id} className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                        <div className="flex-1">
                          <p className="text-white font-semibold">{entry.action}</p>
                          <p className="text-white/50 text-sm">{entry.details}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/70 text-sm">{entry.admin}</p>
                          <p className="text-white/50 text-xs">
                            {new Date(entry.timestamp).toLocaleString('cs-CZ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "admins" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Správa Administrátorů</h2>

                {/* Add new admin */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Přidat nového admina
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Username"
                      value={newAdmin.username}
                      onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
                      className="bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="password"
                      placeholder="Heslo"
                      value={newAdmin.password}
                      onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                      className="bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <select
                      value={newAdmin.role}
                      onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                      className="bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="admin">Admin</option>
                      <option value="moderator">Moderátor</option>
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddAdmin}
                    className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Přidat admina
                  </motion.button>
                </div>

                {/* Change password */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Key className="w-5 h-5" />
                    Změnit heslo admina
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <select
                      value={passwordChange.username}
                      onChange={(e) => setPasswordChange({ ...passwordChange, username: e.target.value })}
                      className="bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Vyberte admina</option>
                      {admins.map((admin) => (
                        <option key={admin.username} value={admin.username}>
                          {admin.username} ({admin.role})
                        </option>
                      ))}
                    </select>
                    <input
                      type="password"
                      placeholder="Nové heslo"
                      value={passwordChange.newPassword}
                      onChange={(e) => setPasswordChange({ ...passwordChange, newPassword: e.target.value })}
                      className="bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleChangePassword}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Změnit heslo
                  </motion.button>
                </div>

                {/* Admins list */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Seznam Adminů ({admins.length})</h3>
                  {admins.map((admin, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/5 p-6 rounded-xl flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white">{admin.username}</h3>
                        <p className="text-white/50">Role: {admin.role}</p>
                        <p className="text-white/30 text-sm mt-1">Heslo: {"•".repeat(admin.password.length)}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDeleteAdmin(admin.username)}
                        className="p-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "audit" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Audit Log ({auditLog.length})</h2>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleExportAuditLog}
                      className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-500/30 transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Export CSV
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClearAuditLog}
                      className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl font-semibold flex items-center gap-2 hover:bg-red-500/30 transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                      Smazat vše
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-3">
                  {auditLog.map((entry, index) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="bg-white/5 p-4 rounded-xl"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm font-semibold">
                              {entry.action}
                            </span>
                            <span className="text-white/50 text-sm">{entry.admin}</span>
                          </div>
                          <p className="text-white/70">{entry.details}</p>
                        </div>
                        <span className="text-white/50 text-sm whitespace-nowrap ml-4">
                          {new Date(entry.timestamp).toLocaleString('cs-CZ')}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Nastavení Webu</h2>

                {/* Maintenance Mode */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Maintenance Mode</h3>
                      <p className="text-white/50 text-sm">Dočasně uzavře web pro veřejnost</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleToggleMaintenance}
                      className={`px-6 py-3 rounded-xl font-semibold ${
                        siteSettings.maintenanceMode
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {siteSettings.maintenanceMode ? "Vypnout" : "Zapnout"}
                    </motion.button>
                  </div>
                  {siteSettings.maintenanceMode && (
                    <textarea
                      placeholder="Zpráva pro návštěvníky"
                      value={siteSettings.maintenanceMessage}
                      onChange={(e) => setSiteSettings({ ...siteSettings, maintenanceMessage: e.target.value })}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[100px]"
                    />
                  )}
                </div>

                {/* Color Customization */}
                <div className="bg-white/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white">Barevné Schéma</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 mb-2">Primární Barva</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={siteSettings.primaryColor}
                          onChange={(e) => setSiteSettings({ ...siteSettings, primaryColor: e.target.value })}
                          className="w-16 h-12 rounded-xl cursor-pointer"
                        />
                        <input
                          type="text"
                          value={siteSettings.primaryColor}
                          onChange={(e) => setSiteSettings({ ...siteSettings, primaryColor: e.target.value })}
                          className="flex-1 bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 mb-2">Sekundární Barva</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={siteSettings.secondaryColor}
                          onChange={(e) => setSiteSettings({ ...siteSettings, secondaryColor: e.target.value })}
                          className="w-16 h-12 rounded-xl cursor-pointer"
                        />
                        <input
                          type="text"
                          value={siteSettings.secondaryColor}
                          onChange={(e) => setSiteSettings({ ...siteSettings, secondaryColor: e.target.value })}
                          className="flex-1 bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSaveSettings}
                  className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Uložit nastavení
                </motion.button>
              </div>
            )}

            {activeTab === "tools" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Nástroje & Operace</h2>

                {/* Dangerous operations */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleForceLogoutAll}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <LogOut className="w-5 h-5" />
                    Odhlásit všechny běžné adminy
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleExportBackup}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Database className="w-5 h-5" />
                    Exportovat kompletní zálohu
                  </motion.button>

                  <div className="bg-red-500/20 p-6 rounded-xl border-2 border-red-500/50">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                      <h3 className="text-lg font-semibold text-red-400">Nebezpečná Zóna</h3>
                    </div>
                    <p className="text-white/70 mb-4">
                      Následující akce jsou nevratné a mohou způsobit ztrátu dat!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleResetSettings}
                      className="w-full py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-5 h-5" />
                      Reset všech nastavení
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
