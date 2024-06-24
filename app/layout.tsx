import type { Metadata } from 'next';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import { metadata as meta } from './config';

import localFont from 'next/font/local';

import { SpeedInsights } from '@vercel/speed-insights/next';
const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Variable.ttf',
      weight: '400 500 600 700 800 900',
      style: 'normal'
    },
    {
      path: './fonts/Satoshi-VariableItalic.ttf',
      weight: '400 500 600 700 800 900',
      style: 'italic'
    }
  ],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(meta.site.url),
  title: {
    default: meta.site.title,
    template: `%s | ${meta.site.title}`
  },
  description: meta.site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.author.name, // or meta.site.title
    description: meta.site.description,
    // site: '@username',
    // siteId: 'id',
    // creator: '@username',
    // creatorId: 'id',
    images: [
      {
        url: '/images/mariale_javi.jpg',
        width: 1200,
        height: 630,
        alt: meta.site.description
      }
    ]
  },
  keywords: meta.site.keywords,
  creator: meta.author.username,
  openGraph: {
    url: meta.site.url,
    type: 'website',
    title: meta.site.title,
    siteName: meta.site.title,
    description: meta.site.description,
    locale: 'es-ES',
    images: [
      {
        url: '/images/xyz_og.png',
        width: 800,
        height: 600
      },
      {
        url: '/images/xyz_og.png',
        width: 1800,
        height: 1600,
        alt: 'My custom OG'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={satoshi.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
