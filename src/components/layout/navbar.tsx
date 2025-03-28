'use client';

import { useNavigation } from '@/hooks/use-navigation';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Navbar = () => {
  const { prevRoute, currentRoute, nextRoute } = useNavigation();

  const { push } = useRouter();
  const prev = () => {
    if (prevRoute?.href) push(prevRoute.href);
  };
  const next = () => {
    if (nextRoute?.href) push(nextRoute.href);
  };

  return (
    <nav className='fixed bottom-16 left-1/2 z-[999] flex -translate-x-1/2 items-center justify-evenly rounded-full border border-zinc-600 bg-black/70 py-3 shadow drop-shadow-xl backdrop-blur-lg ~w-40/48'>
      <button
        disabled={!prevRoute?.href}
        onClick={prev}
        className={cn(
          'grid place-items-center rounded-full border border-zinc-600 bg-black/50 transition-all duration-300 ~size-6/8 hover:scale-125 disabled:cursor-not-allowed',
        )}
      >
        <FaChevronLeft className='size-2 text-secondary' />
      </button>

      <AnimatePresence mode='wait'>
        <motion.p
          key={currentRoute.href}
          initial={{ opacity: 0, y: 8, scale: 0.75 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.75 }}
          className='flex items-center justify-center gap-1 overflow-hidden text-sm font-medium text-secondary'
        >
          {<currentRoute.Icon className='size-4' />}

          <span> {currentRoute?.name}</span>
        </motion.p>
      </AnimatePresence>
      <button
        disabled={!nextRoute?.href}
        onClick={next}
        className={cn(
          'grid place-items-center rounded-full border border-zinc-600 bg-black/50 transition-all duration-300 ~size-6/8 hover:scale-125 disabled:cursor-not-allowed',
        )}
      >
        <FaChevronRight className='size-2 text-secondary' />
      </button>
    </nav>
  );
};
export default Navbar;
