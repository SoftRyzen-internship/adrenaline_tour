import React from 'react';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Unbounded, Inter } from 'next/font/google';

import { metaData } from '@/data';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import './globals.css';
import { configuration } from '@/utils';

export const metadata: Metadata = {
  metadataBase: new URL(configuration.BASE_APP_URL as string),
  title: metaData.mainTitle,
  description: metaData.description,
  keywords: metaData.keywords,
  icons: metaData.icons,
  openGraph: {
    type: 'website',
    url: configuration.BASE_APP_URL,
    title: metaData.ogTitle,
    description: metaData.ogDescription,
    siteName: metaData.ogSiteName,
    images: [
      {
        url: metaData.image.url,
        width: 1200,
        height: 630,
        alt: metaData.image.alt,
      },
    ],
  },
  other: {
    'color-scheme': 'light',
  },
};

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
          'flex h-full min-h-screen flex-col overflow-x-hidden',
        )}
      >
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
