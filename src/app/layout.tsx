import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PageTransition from '@/components/layout/page-transition';
import StairTransition from '@/components/layout/page-transition/stair-transition';

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
        <Navbar />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
