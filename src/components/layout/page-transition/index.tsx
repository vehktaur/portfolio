'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
          className='pointer-events-none fixed z-10 top-0 h-screen w-screen bg-background'
        />
        {children}
      </div>
    </AnimatePresence>
  );
};
export default PageTransition;
