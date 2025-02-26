'use client';

import { cn } from '@/lib/utils';
import { useSwiper } from 'swiper/react';
import { GiHarpoonChain } from 'react-icons/gi';

const ProjectNav = ({ className }: { className?: string }) => {
  const swiper = useSwiper();

  const navButtons = [
    {
      id: 'previous',
      onClick: () => swiper.slidePrev(),
      className: '',
      iconClassName: 'rotate-[135deg]',
    },
    {
      id: 'next',
      onClick: () => swiper.slideNext(),
      className: '',
      iconClassName: '-rotate-45',
    },
  ];

  return (
    <div
      className={cn(
        'absolute left-0 top-[calc(50%-2rem)] z-[5] mt-4 flex w-full items-center justify-between gap-6 text-sm font-medium sm:relative sm:justify-end',
        className,
      )}
    >
      {navButtons.map((btn) => (
        <button
          key={btn.id}
          className={cn(
            'grid place-items-center rounded-lg bg-zinc-700 text-white ~size-8/10',
            btn.className,
          )}
          onClick={btn.onClick}
        >
          <GiHarpoonChain className={cn('size-4', btn.iconClassName)} />
        </button>
      ))}
    </div>
  );
};
export default ProjectNav;
