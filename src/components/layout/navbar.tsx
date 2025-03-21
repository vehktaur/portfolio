'use client';

import { useNavigation } from '@/hooks/use-navigation';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Navbar = () => {
  const { prevRoute, currentRoute, nextRoute } = useNavigation();

  const { push } = useRouter();
  const prev = () => {
    push(prevRoute?.href || '');
  };
  const next = () => {
    push(nextRoute?.href || '');
  };

  return (
    <nav className='fixed bottom-16 left-1/2 z-[999] flex -translate-x-1/2 transform items-center rounded-full border border-zinc-600 bg-black/70 py-3 shadow drop-shadow-xl backdrop-blur-lg ~gap-3/5 ~px-4/5'>
      <button
        onClick={prev}
        className={cn(
          'grid place-items-center rounded-full border border-zinc-600 bg-black/50 transition-all duration-300 ~size-5/8 hover:scale-125',
          { 'scale-0': !prevRoute },
        )}
      >
        <FaChevronLeft className='size-2 text-secondary' />
      </button>

      <p className='flex items-center justify-center gap-1 overflow-hidden text-sm font-medium text-secondary transition-all duration-300'>
        {<currentRoute.Icon className='size-4' />}

        <span> {currentRoute?.name}</span>
      </p>

      <button
        onClick={next}
        className={cn(
          'grid place-items-center rounded-full border border-zinc-600 bg-black/50 transition-all duration-300 ~size-5/8 hover:scale-125',
          { 'scale-0': !nextRoute },
        )}
      >
        <FaChevronRight className='size-2 text-secondary' />
      </button>
    </nav>
  );
};
export default Navbar;
