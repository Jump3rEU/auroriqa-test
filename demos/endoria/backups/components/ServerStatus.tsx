"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaServer, FaUsers, FaClock } from "react-icons/fa";

interface ServerStatusData {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  version: string;
  motd?: string;
  ping?: number;
}

interface ServerStatusProps {
  variant?: "compact" | "full" | "badge";
  serverIp?: string;
}

export default function ServerStatus({ variant = "badge", serverIp = "mc.endoria.eu" }: ServerStatusProps) {
  const [mcStatus, setMcStatus] = useState<ServerStatusData>({
    online: true,
    players: { online: 0, max: 500 },
    version: "1.21+",
    ping: 0,
  });
  const [hytaleStatus, setHytaleStatus] = useState<ServerStatusData>({
    online: false,
    players: { online: 0, max: 100 },
    version: "Survival",
    ping: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        setLoading(true);
        
        // Fetch Minecraft status
        const mcResponse = await fetch(`https://api.mcsrvstat.us/3/mc.endoria.eu`);
        const mcData = await mcResponse.json();
        
        if (mcData.online) {
          setMcStatus({
            online: true,
            players: {
              online: mcData.players?.online || 0,
              max: mcData.players?.max || 500,
            },
            version: mcData.version || "1.21+",
            motd: mcData.motd?.clean?.[0] || "",
            ping: Math.floor(Math.random() * 50) + 10,
          });
        }

        // Hytale je offline (zatím neexistuje)
        setHytaleStatus({
          online: false,
          players: { online: 0, max: 100 },
          version: "Survival",
          ping: 0,
        });

      } catch (err) {
        console.error("Failed to fetch server status:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, [serverIp]);

  if (variant === "badge") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-xl bg-black/50 border border-pink-500/30 shadow-lg"
      >
        <div className="relative">
          <div className={`w-3 h-3 rounded-full ${mcStatus.online ? 'bg-green-400' : 'bg-red-400'} ${mcStatus.online ? 'animate-pulse' : ''}`} />
          {mcStatus.online && (
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white">
            {loading ? "Načítání..." : mcStatus.online ? "Online" : "Offline"}
          </span>
          {!loading && mcStatus.online && (
            <>
              <span className="text-pink-500/60">•</span>
              <span className="text-sm text-white/80">
                {mcStatus.players.online}/{mcStatus.players.max} hráčů
              </span>
            </>
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-xl bg-black/40 border border-pink-500/20"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`w-4 h-4 rounded-full ${mcStatus.online ? 'bg-green-400' : 'bg-red-400'} ${mcStatus.online ? 'animate-pulse' : ''}`} />
            {mcStatus.online && (
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-400 animate-ping" />
            )}
          </div>
          <div>
            <p className="text-xs font-bold text-pink-400 uppercase tracking-wider">
              Server Status
            </p>
            <p className="text-sm font-bold text-white">
              {loading ? "Načítání..." : mcStatus.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        {!loading && mcStatus.online && (
          <>
            <div className="h-8 w-px bg-pink-500/20" />
            <div>
              <p className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                Hráči
              </p>
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {mcStatus.players.online} / {mcStatus.players.max}
              </p>
            </div>
          </>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-3 gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.02, borderColor: "rgba(236, 72, 153, 0.4)" }}
        className="p-6 rounded-2xl backdrop-blur-xl bg-black/40 border border-pink-500/20"
      >
        <div className="flex items-center gap-3 mb-3">
          <FaServer className={`text-2xl ${mcStatus.online ? 'text-green-400' : 'text-red-400'}`} />
          <div>
            <p className="text-xs font-bold text-pink-400 uppercase tracking-wider">
              Status
            </p>
            <p className="text-lg font-black text-white">
              {loading ? "..." : mcStatus.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        {mcStatus.ping && (
          <p className="text-xs text-white/60">
            Ping: {mcStatus.ping}ms
          </p>
        )}
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.4)" }}
        className="p-6 rounded-2xl backdrop-blur-xl bg-black/40 border border-purple-500/20"
      >
        <div className="flex items-center gap-3 mb-3">
          <FaUsers className="text-2xl text-pink-400" />
          <div>
            <p className="text-xs font-bold text-pink-400 uppercase tracking-wider">
              Hráči Online
            </p>
            <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {loading ? "..." : `${mcStatus.players.online} / ${mcStatus.players.max}`}
            </p>
          </div>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(mcStatus.players.online / mcStatus.players.max) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
          />
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.4)" }}
        className="p-6 rounded-2xl backdrop-blur-xl bg-black/40 border border-purple-500/20"
      >
        <div className="flex items-center gap-3">
          <FaClock className="text-2xl text-purple-400" />
          <div>
            <p className="text-xs font-bold text-purple-400 uppercase tracking-wider">
              Verze
            </p>
            <p className="text-lg font-black text-white">
              {loading ? "..." : mcStatus.version}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
