'use client';

import Link from 'next/link';
import { getAllActiveProjects } from '@/lib/projects';
import { motion } from 'framer-motion';
import { Eye, Lock, Sparkles, Calendar } from 'lucide-react';

export default function PreviewIndex() {
  const projects = getAllActiveProjects();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl">
              <Eye className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Náhledy Projektů
          </h1>
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold mb-4">
            Preview Portfolio
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Vyberte projekt pro zobrazení exkluzivního náhledu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/preview/${project.id}`}>
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  
                  {/* Card */}
                  <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-500/50 rounded-2xl p-8 h-full transition-all">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-xl">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      
                      {project.password && (
                        <div className="flex items-center gap-1 text-xs bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full">
                          <Lock className="w-3 h-3" />
                          <span>Chráněno</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h2 className="text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                      {project.name}
                    </h2>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                      <span className="text-xs text-purple-400 uppercase tracking-wider font-semibold">
                        {project.template}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(project.createdAt).toLocaleDateString('cs-CZ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                        <span>Zobrazit</span>
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Žádné aktivní projekty</h2>
              <p className="text-gray-400 text-lg">
                V současné době nejsou dostupné žádné náhledy projektů.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
