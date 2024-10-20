import React from 'react';
import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import localFont from "next/font/local";
import "./globals.css";
import PreloaderWrapper from '@/components/PreloaderWrapper';

const geistSans = localFont({
  src: "./fonts/Montreal Medium.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "TATHAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${geistSans.variable} bg-[#B1B1B1] antialiased mx-auto`}>
          <PreloaderWrapper>
            <div className="navbar-container">
              <Navbar />
            </div>
            <main>{children}</main>
          </PreloaderWrapper>
        </body>
      </Provider>
    </html>
  );
}
