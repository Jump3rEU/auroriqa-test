'use client';

import { useParams } from 'next/navigation';
import { getProject } from '@/lib/projects';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Eye, Lock } from 'lucide-react';

// Dynamicky importuj demo komponenty
const DemoEndoria = dynamic(() => import('@/demos/endoria/preview-page'), { ssr: false });

export default function ProjectPreview() {
  const params = useParams();
  const projectId = params.projectId as string;
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const project = getProject(projectId);

  useEffect(() => {
    if (!project) {
      return;
    }
    
    // Pokud projekt nemá heslo, rovnou autorizuj
    if (!project.password) {
      setIsAuthorized(true);
    }
  }, [project]);

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
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/preview"
            className="flex items-center gap-2 text-white hover:text-purple-400 transition-all group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-semibold">Zpět</span>
          </Link>
          <div className="border-l border-purple-500/30 pl-4">
            <span className="text-xs text-purple-400 uppercase tracking-wider">Preview</span>
            <span className="text-white font-bold ml-2 text-lg">{project.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold">
            {project.template}
          </span>
        </div>
      </div>
    </div>
  );

  // Načti správný template podle projektu
  const renderProject = () => {
    switch (project.id) {
      case 'endoria':
        return <DemoEndoria />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Template není dostupný</h2>
              <p className="text-gray-400">
                Pro tento projekt není ještě vytvořen template.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <PreviewHeader />
      <div className="pt-[60px]">
        {renderProject()}
      </div>
    </>
  );
}
