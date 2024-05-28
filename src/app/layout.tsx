import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { metaData } from '@/data';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
