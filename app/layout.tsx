import type { Metadata } from 'next';
import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Daniel Giannotti — Full-Stack Software Engineer',
  description:
    '8+ años construyendo y escalando aplicaciones web, de la API al frontend. React, Next.js, Node.js, Laravel.',
  openGraph: {
    title: 'Daniel Giannotti — Full-Stack Software Engineer',
    description: '8+ años construyendo aplicaciones web escalables.',
    url: 'https://dgbusiness.github.io/Dgbusiness/',
    siteName: 'Daniel Giannotti',
    locale: 'es_VE',
    type: 'website',
    images: [{ url: 'https://dgbusiness.github.io/Dgbusiness/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Giannotti — Full-Stack Software Engineer',
    description: '8+ años construyendo aplicaciones web escalables.',
    images: ['https://dgbusiness.github.io/Dgbusiness/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
