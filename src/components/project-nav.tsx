'use client';

import { cn } from '@/lib/utils';
import { useSwiper } from 'swiper/react';

const ProjectNav = ({ className }: { className?: string }) => {
  const swiper = useSwiper();

  return (
    <div className={cn('flex items-center gap-6 font-medium mt-4 *:rounded-xl *:border *:px-3 text-sm *:py-1.5 justify-end', className)}>
      <button onClick={() => swiper.slidePrev()}>Previous</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
export default ProjectNav;
