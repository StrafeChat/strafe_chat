import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Strafe - FOSS and Free Speech done right',
  description: 'Strafe is a free and open source communication platform that champions free speech and privacy. Built by the community, for the community.',
  keywords: [
    'free speech',
    'open source',
    'FOSS',
    'chat platform',
    'messaging',
    'communication',
    'privacy',
    'discord alternative',
    'VOIP',
  ],
  authors: [{ name: 'Strafe' }],
  openGraph: {
    type: 'website',
    url: 'https://strafe.chat/',
    title: 'Strafe - FOSS and Free Speech done right',
    description: 'Free and open source communication platform that champions free speech and privacy. Built by the community, for the community.',
    images: [
      {
        url: '/strafebanner.jpg',
        width: 1200,
        height: 630,
        alt: 'Strafe - FOSS and Free Speech done right',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strafe - FOSS and Free Speech done right',
    description: 'Free and open source communication platform that champions free speech and privacy. Built by the community, for the community.',
    images: ['/strafebanner.jpg'],
  },
  robots: 'index, follow',
  metadataBase: new URL('https://strafe.chat/'),
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: '#5A9056',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
