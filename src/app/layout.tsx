import type { Metadata } from 'next';

// style imports
import './globals.css';
import 'swiper/css';
import { Poppins } from 'next/font/google';

// component imports
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PageTransition from '@/components/layout/page-transition';
import StairTransition from '@/components/layout/page-transition/stair-transition';
import { Particles } from '@/components/ui/particles';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Victor Akhihiero',
  description: 'Portfolio',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('flex min-h-screen w-full flex-col', poppins.className)}
      >
        <Particles
          className='absolute inset-0'
          quantity={100}
          ease={100}
          color={'#000'}
          refresh
        />
        <Navbar />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
