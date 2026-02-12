import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Endoria.eu - Moderní Český Minecraft Server | SMP 1.21",
  description: "Moderní český Minecraft SMP server s aktivní komunitou. Ekonomika, protection, eventy a bezva party. Připoj se na mc.endoria.eu!",
  keywords: ["minecraft", "server", "mcip", "smp", "survival", "ekonomika", "czech", "endoria", "1.21"],
  authors: [{ name: "Endoria Team" }],
  openGraph: {
    title: "Endoria.eu - Moderní Český Minecraft Server",
    description: "Moderní Minecraft SMP server s aktivní komunitou. Připoj se na mc.endoria.eu!",
    type: "website",
    locale: "cs_CZ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${lexend.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          {/* Seamless Global Background */}
          <div className="fixed inset-0 -z-10">
            {/* Base gradient - seamless dark to purple */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#1A0B2E] via-[#0F0A1F] to-[#0A0A0F]" />
            
            {/* Animated floating orbs - seamless with hero */}
            <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-[120px] animate-pulse" 
                 style={{ animationDuration: '8s' }} />
            <div className="absolute top-[60%] left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 to-pink-500/15 rounded-full blur-[140px] animate-pulse" 
                 style={{ animationDuration: '10s', animationDelay: '2s' }} />
            <div className="absolute top-[35%] right-[25%] w-[400px] h-[400px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-[100px] animate-pulse" 
                 style={{ animationDuration: '12s', animationDelay: '4s' }} />
            
            {/* Noise texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            
            {/* Gradient lines */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
          </div>
          
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
