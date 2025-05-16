import React from 'react';
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import './globals.css';
import PreloaderWrapper from '@/components/Provider/PreloaderWrapper';
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: './fonts/Montreal Medium.otf',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});

export const metadata = {
  title: 'TATHAI',
  description: 'Web & Mobile App Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-gray-900`}>
        <PreloaderWrapper>
          <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
            <Navbar />
          </div>
          
          <main className="min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </PreloaderWrapper>
        <Analytics />
      </body>
    </html>
  );
}