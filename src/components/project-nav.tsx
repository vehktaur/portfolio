'use client';

import { cn } from '@/lib/utils';
import { useSwiper } from 'swiper/react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';

const ProjectNav = ({ className }: { className?: string }) => {
  const swiper = useSwiper();

  const navButtons = [
    {
      id: 'previous',
      onClick: () => swiper.slidePrev(),
      Icon: LuChevronLeft,
    },
    {
      id: 'next',
      onClick: () => swiper.slideNext(),
      Icon: LuChevronRight,
    },
  ];

  return (
    <div
      className={cn(
        'absolute left-0 top-[calc(50%-2rem)] z-[5] mt-4 flex w-full items-center justify-between text-sm font-medium sm:relative sm:justify-end sm:~gap-3/6',
        className,
      )}
    >
      {navButtons.map(({ id, onClick, Icon }) => (
        <button
          key={id}
          className={cn(
            'grid bg-black/50 text-white place-items-center rounded sm:rounded-lg ~size-8/10',
          )}
          onClick={onClick}
        >
          <Icon className={cn('~size-6/8')} />
        </button>
      ))}
    </div>
  );
};
export default ProjectNav;
