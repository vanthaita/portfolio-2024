import React from 'react';
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import './globals.css';
import dynamic from 'next/dynamic';

const Provider = dynamic(() => import('@/components/Provider/Provider'), { ssr: false });

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
      <Provider>
        <body className={`${geistSans.variable} bg-black antialiased mx-auto`}>
          <div className="navbar-container">
            <Navbar />
          </div>
          <main>{children}</main>
        </body>
      </Provider>
    </html>
  );
}
