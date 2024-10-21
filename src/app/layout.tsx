import React from 'react';
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import './globals.css';
import PreloaderWrapper from '@/components/Provider/PreloaderWrapper';
import SlideInNotifications from '@/components/Notification';
const geistSans = localFont({
  src: './fonts/Montreal Medium.otf',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata = {
  title: 'TATHAI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-black antialiased mx-auto`}>
        <PreloaderWrapper>
          <div className="navbar-container">
            <Navbar />
          </div>
          <main>{children}</main>
          <SlideInNotifications />
        </PreloaderWrapper>
      </body>
    </html>
  );
}
