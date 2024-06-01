import React from 'react';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Unbounded, Inter } from 'next/font/google';

import { metaData } from '@/data';
import Footer from '@/layout/Footer';
import './globals.css';

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '700'],
  display: 'swap',
  variable: '--font-unbounded',
});

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='uk'>
      <body
        className={clsx(
          unbounded.variable,
          inter.variable,
          'flex h-full min-h-screen flex-col',
        )}
      >
        <header className='bg-blue-500'>Header will be here</header>
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
