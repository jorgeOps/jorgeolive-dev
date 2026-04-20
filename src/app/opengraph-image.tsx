import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Jorge Olive - Diseño Web Personalizado';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Open Graph Image generator
export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF9F6',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #C8A882 2%, transparent 0%), radial-gradient(circle at 75px 75px, #C8A882 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            backgroundColor: 'rgba(250, 249, 246, 0.95)',
            borderRadius: '24px',
            border: '2px solid rgba(95, 94, 92, 0.2)',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#1C1B1F',
              marginBottom: 24,
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Jorge Olive
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#5F5E5C',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Diseño web personalizado para negocios que quieren destacar
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#C8A882',
              marginTop: 32,
              padding: '16px 32px',
              backgroundColor: 'rgba(200, 168, 130, 0.1)',
              borderRadius: '12px',
            }}
          >
            Next.js · React · Vercel
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
