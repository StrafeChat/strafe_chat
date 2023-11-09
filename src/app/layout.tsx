import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://strafe.chat'),
  title: 'StrafeChat',
  description: 'Make your censorship worries go down the drain.\nSafe place where you don\'t have to worry about seeing adult content.\n',
  keywords: ["strafe", "strafechat", "strafe.chat", "Chat Platform", "Discord Alternatives", "Discord Alternative"],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "StrafeChat",
    url: "https://strafe.chat",
    description: 'Make your censorship worries go down the drain.\nSafe place where you don\'t have to worry about seeing adult content.\n',
    images: [{
      url: "https://strafe.chat/strafebanner.jpg",
      width: 1280,
      height: 720
    }]
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen overflow-hidden">
        {children}
        </main>
        </body>
    </html>
  );
}
