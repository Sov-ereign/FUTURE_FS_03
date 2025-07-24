import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

// Determine the base URL for metadata
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://future-fs-03-eight.vercel.app/' || 'http://localhost:3000';


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
  description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  keywords: 'netflix, movies, tv shows, streaming, entertainment',
  openGraph: {
    title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
    description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
    description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." />
        <meta name="keywords" content="netflix, movies, tv shows, streaming, entertainment" />
        <meta property="og:title" content="Netflix - Watch TV Shows Online, Watch Movies Online" />
        <meta property="og:description" content="Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Netflix - Watch TV Shows Online, Watch Movies Online" />
        <meta name="twitter:description" content="Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}