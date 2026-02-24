import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Auroriqa - Prémiová Tvorba Webů & Digitální Řešení'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Aurora glow left */}
        <div
          style={{
            position: 'absolute',
            left: -100,
            top: -50,
            width: 700,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(6,182,212,0.15) 50%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Aurora glow right */}
        <div
          style={{
            position: 'absolute',
            right: -100,
            bottom: -50,
            width: 700,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.15) 50%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Logo dot */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)',
            marginBottom: 32,
            fontSize: 48,
            fontWeight: 700,
            color: '#fff',
          }}
        >
          A
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            background: 'linear-gradient(90deg, #10b981, #06b6d4, #3b82f6, #8b5cf6)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Auroriqa
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 400,
            letterSpacing: '0.5px',
            marginBottom: 40,
          }}
        >
          Prémiová tvorba webů &amp; digitální řešení
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Web Design', 'Next.js', 'SEO', 'UI/UX'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: 18,
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            fontSize: 20,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '2px',
          }}
        >
          auroriqa.cz
        </div>
      </div>
    ),
    { ...size }
  )
}
