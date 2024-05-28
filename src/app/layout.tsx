import React from 'react';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Unbounded, Inter } from 'next/font/google';

import { metaData } from '@/data';
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
          'h-full min-h-screen',
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
