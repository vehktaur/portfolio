'use client';

import { useNavigation } from '@/hooks/use-navigation';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

const NavButton = ({
  disabled,
  onClick,
  className,
  Icon,
}: {
  disabled: boolean;
  onClick: () => void;
  className?: string;
  Icon: IconType;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'grid place-items-center rounded-full border border-zinc-600 bg-black/50 transition-all duration-300 ~size-6/8 hover:scale-125 disabled:hidden',
        className,
      )}
    >
      <Icon className='size-2 text-secondary' />
    </button>
  );
};

export default function Navbar() {
  const { prevRoute, currentRoute, nextRoute } = useNavigation();
  const hasPrev = !!prevRoute?.href;
  const hasNext = !!nextRoute?.href;

  const { push } = useRouter();
  const prev = () => {
    if (hasPrev) push(prevRoute.href);
  };
  const next = () => {
    if (hasNext) push(nextRoute.href);
  };

  return (
    <nav className='fixed bottom-16 left-1/2 z-[999] flex w-fit -translate-x-1/2 items-center justify-center rounded-full border border-zinc-600 bg-black/70 px-5 py-3 shadow drop-shadow-xl backdrop-blur-lg'>
      <NavButton disabled={!hasPrev} onClick={prev} Icon={FaChevronLeft} />

      <AnimatePresence mode='wait'>
        <motion.p
          key={currentRoute.href}
          initial={{ opacity: 0, y: 8, scale: 0.75 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.75 }}
          className='flex items-center justify-center gap-1 overflow-hidden mx-3 text-sm font-medium text-secondary'
        >
          {<currentRoute.Icon className='size-4' />}

          <span> {currentRoute?.name}</span>
        </motion.p>
      </AnimatePresence>

      <NavButton disabled={!hasNext} onClick={next} Icon={FaChevronRight} />
    </nav>
  );
}
