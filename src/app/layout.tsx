import type { Metadata } from 'next';

// style imports
import './globals.css';
import 'swiper/css';

// component imports
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PageTransition from '@/components/layout/page-transition';
import StairTransition from '@/components/layout/page-transition/stair-transition';
import { Particles } from '@/components/ui/particles';

export const metadata: Metadata = {
  title: 'Victor Akhihiero',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen w-full flex-col'>
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
