"use client";

export default function MeshGradientOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Static Mesh Gradient - Better Performance */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(34, 197, 94, 0.25) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
            radial-gradient(at 40% 70%, rgba(139, 92, 246, 0.25) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(236, 72, 153, 0.2) 0px, transparent 50%),
            radial-gradient(at 10% 90%, rgba(6, 182, 212, 0.25) 0px, transparent 50%)
          `,
        }}
      />

      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
