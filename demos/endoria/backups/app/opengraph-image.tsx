import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Endoria.eu - Minecraft SMP Server'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '25%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255,20,147,0.3) 0%, rgba(255,20,147,0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '25%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(147,51,234,0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <h1
          style={{
            background: 'linear-gradient(135deg, #FF1493, #9333EA)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '96px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Endoria.eu
        </h1>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '32px',
            margin: 0,
          }}
        >
          Český Minecraft SMP Server
        </p>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '28px',
            margin: '20px 0 0 0',
          }}
        >
          mc.endoria.eu • 1.21+
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
