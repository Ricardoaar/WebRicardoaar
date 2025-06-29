import "@/css/globals.css";
import "@/css/darkModeOverrides.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ricardo Aar - FullStack Developer",
  description: "FullStack Developer with 3+ years of experience building scalable web applications. Specialized in React, Node.js, TypeScript, and modern web technologies.",
  keywords: ["FullStack Developer", "React", "Node.js", "TypeScript", "Next.js", "Web Development", "Portfolio"],
  authors: [{ name: "Ricardo Aar" }],
  creator: "Ricardo Aar",
  publisher: "Ricardo Aar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ricardoaar.dev'),
  openGraph: {
    title: "Ricardo Aar - FullStack Developer",
    description: "FullStack Developer with 3+ years of experience building scalable web applications.",
    url: 'https://ricardoaar.dev',
    siteName: 'Ricardo Aar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ricardo Aar - FullStack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ricardo Aar - FullStack Developer",
    description: "FullStack Developer with 3+ years of experience building scalable web applications.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
    <div id="portal-root" />
    </body>
    </html>
  );
}
