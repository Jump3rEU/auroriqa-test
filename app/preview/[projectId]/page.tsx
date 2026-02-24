'use client';

import { useParams } from 'next/navigation';
import { getProject } from '@/lib/projects';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Lock, ShieldCheck, ShieldAlert, ExternalLink, ChevronLeft } from 'lucide-react';

export default function ProjectPreview() {
  const params = useParams();
  const projectId = params.projectId as string;
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentIframeUrl, setCurrentIframeUrl] = useState<string | null>(null);

  const project = getProject(projectId);

  useEffect(() => {
    if (!project) return;

    if (!project.password) {
      setIsAuthorized(true);
      return;
    }

    // Zkontroluj localStorage
    const saved = localStorage.getItem(`preview_auth_${project.id}`);
    if (saved === project.password) {
      setIsAuthorized(true);
    }
  }, [project]);

  useEffect(() => {
    if (isAuthorized && project?.iframeUrl) {
      setCurrentIframeUrl(project.iframeUrl);
    }
  }, [isAuthorized, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        </div>
        <div className="text-center relative z-10">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6">
            <Eye className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Projekt nenalezen
          </h1>
          <p className="text-gray-400 mb-8 text-lg">
            Projekt s ID &ldquo;{projectId}&rdquo; neexistuje nebo není aktivní.
          </p>
          <Link 
            href="/preview"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all font-semibold"
          >
            <span>←</span>
            Zpět na seznam projektů
          </Link>
        </div>
      </div>
    );
  }

  if (!project.active) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        </div>
        <div className="text-center relative z-10">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 w-fit mx-auto mb-6">
            <Eye className="w-12 h-12 text-gray-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Projekt není aktivní
          </h1>
          <p className="text-gray-400 mb-8 text-lg">
            Tento projekt momentálně není dostupný pro náhled.
          </p>
          <Link 
            href="/preview"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all font-semibold"
          >
            <span>←</span>
            Zpět na seznam projektů
          </Link>
        </div>
      </div>
    );
  }

  if (project.password && !isAuthorized) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (password === project.password) {
        localStorage.setItem(`preview_auth_${project.id}`, password);
        setIsAuthorized(true);
        setError('');
      } else {
        setError('Nesprávné heslo');
      }
    };

    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
          
          <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30">
            {/* Lock icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-2xl">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-white mb-3">
                {project.name}
              </h1>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-4" />
              <p className="text-gray-400 text-lg">
                Tento projekt je chráněn heslem
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Zadejte heslo..."
                  className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  autoFocus
                />
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
                >
                  <p className="text-red-400 text-sm font-medium">{error}</p>
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl transition-all font-bold text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02]"
              >
                Odemknout náhled
              </button>
            </form>

            {/* Back link */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <Link 
                href="/preview"
                className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 text-sm font-medium"
              >
                <span>←</span>
                Zpět na seznam
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Hlavička s informacemi o projektu
  const PreviewHeader = () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_1px_30px_rgba(139,92,246,0.15)]">
      <div className="px-4 py-0 flex items-center justify-between h-14 max-w-[100vw]">
        {/* Left – back + project name */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/preview"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors group shrink-0"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline">Projekty</span>
          </Link>
          <div className="w-px h-5 bg-white/10 shrink-0" />
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            <span className="text-white font-bold text-sm truncate">{project.name}</span>
            <span className="hidden sm:inline text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full font-medium shrink-0">
              Preview
            </span>
          </div>
        </div>

        {/* Right – action buttons */}
        {project.iframeUrl && (
          <div className="flex items-center gap-2 shrink-0">
            {/* Zpět na web */}
            <button
              onClick={() => setCurrentIframeUrl(project.iframeUrl!)}
              className={`group flex items-center gap-1.5 border px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentIframeUrl === project.iframeUrl
                  ? 'bg-white/15 border-white/30 text-white'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/25 text-gray-300 hover:text-white'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Web</span>
            </button>

            {/* Admin */}
            <button
              onClick={() => setCurrentIframeUrl(`${project.iframeUrl!.replace(/\/$/, '')}/admin`)}
              className={`group flex items-center gap-1.5 border px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentIframeUrl?.endsWith('/admin') && !currentIframeUrl?.endsWith('/superadmin')
                  ? 'bg-indigo-600/50 border-indigo-400/60 text-white'
                  : 'bg-indigo-600/20 hover:bg-indigo-600/40 border-indigo-500/30 hover:border-indigo-400/60 text-indigo-300 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Admin</span>
            </button>

            {/* Superadmin */}
            <button
              onClick={() => setCurrentIframeUrl(`${project.iframeUrl!.replace(/\/$/, '')}/admin/superadmin`)}
              className={`group flex items-center gap-1.5 border px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentIframeUrl?.endsWith('/superadmin')
                  ? 'bg-purple-600/50 border-purple-400/60 text-white'
                  : 'bg-purple-600/20 hover:bg-purple-600/40 border-purple-500/30 hover:border-purple-400/60 text-purple-300 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Superadmin</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // Načti správný template podle projektu
  const renderProject = () => {
    if (currentIframeUrl) {
      return (
        <iframe
          src={currentIframeUrl}
          className="w-full border-0"
          style={{ height: 'calc(100vh - 56px)' }}
          allow="fullscreen"
          title={project.name}
        />
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Template není dostupný</h2>
          <p className="text-gray-400">
            Pro tento projekt není ještě nastavená URL.
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <PreviewHeader />
      <div className="pt-14">
        {renderProject()}
      </div>
    </>
  );
}
