'use client';

import {
  ProjectNav,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';
import { projects } from '@/lib/data';
import Link from 'next/link';
import { useState } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Swiper as SwiperProps } from 'swiper/types';
import { AnimatePresence, motion } from 'motion/react';
import { Ubuntu, DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleSlideChange = (swiper: SwiperProps) => {
    const { activeIndex, previousIndex } = swiper;
    if (activeIndex < previousIndex) {
      setDirection(-1); // backwards
    } else {
      setDirection(1); // forwards
    }
    setProject(projects[activeIndex]);
  };

  return (
    <main className='full-page relative'>
      <h1 className='text-center font-extrabold transition-all duration-300 ~text-2xl/5xl selection:text-accent hover:drop-shadow-2xl'>
        Projects.
      </h1>
      <section className='padding-inline overflow-x-clip ~mt-8/16'>
        <div className='container flex flex-col items-center justify-around gap-x-4 gap-y-5 sm:flex-row-reverse'>
          {/* Swiper with slides showing project image */}
          <div className='w-full sm:w-1/2'>
            <Swiper
              className='max-w-xl'
              onSlideChange={handleSlideChange}
              modules={[Pagination, Keyboard]}
              spaceBetween={70}
              slidesPerView={1}
              keyboard
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num}>
                  <motion.a
                    key={project.num}
                    href={project.url}
                    target='_blank'
                    className={cn(
                      'link-cursor block overflow-hidden rounded-lg border',
                      direction === 1 ? 'origin-right' : 'origin-left',
                    )}
                    initial={{ filter: 'blur(20px)', scaleX: 0.75 }}
                    whileInView={{
                      filter: 'blur(0px)',
                      scaleX: 1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Image
                      className='size-full object-cover transition-transform duration-700 hover:scale-150'
                      src={project.image}
                      alt={project.title}
                      width={1980}
                      height={1080}
                      placeholder='blur'
                    />
                  </motion.a>
                </SwiperSlide>
              ))}

              {/* previous and next navigation */}
              <ProjectNav />
            </Swiper>
          </div>

          <hr className='mx-auto h-[3px] w-1/2 flex-shrink-0 rounded-full border-none bg-primary sm:h-40 sm:w-[3px]' />

          {/* Project Details */}
          <div className='overflow-clip [overflow-clip-margin:3rem;]'>
            <AnimatePresence custom={direction} mode='wait'>
              <motion.div
                key={project.num}
                initial={{ opacity: 0, x: direction * 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -200 }}
                transition={{ ease: 'easeInOut' }}
              >
                {/* project number */}
                <h2 className='font-extrabold ~text-xl/4xl ~mb-2/4 selection:text-destructive'>
                  {project.num}
                </h2>

                {/* project title */}
                <h1
                  className={cn(
                    'font-semibold tracking-tight text-accent ~text-3xl/6xl ~mb-2/4 selection:text-primary',
                    dmSans.className,
                  )}
                >
                  {project.title}
                </h1>
                {/* project description */}
                <p className='max-w-[60ch] ~text-sm/base ~mb-4/7'>
                  {project.description}
                </p>

                {/* technologies used */}
                <ul
                  className={cn(
                    'flex max-w-[60ch] flex-wrap items-center gap-3 text-sm',
                    ubuntu.className,
                  )}
                >
                  {project.technologies.map((tech, index) => (
                    <li
                      className='rounded-md border border-primary bg-primary capitalize text-primary-foreground transition-colors duration-300 ~p-1/1.5 hover:bg-primary-foreground hover:text-primary'
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <hr className='mb-8 mt-6 h-[1.5px] w-1/3 rounded-full border-none bg-primary sm:w-1/2' />

                {/* live url and github link */}
                <div className='flex items-center gap-4'>
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <Link
                          className='grid place-items-center rounded-full border transition-all duration-300 ~size-9/11 hover:scale-105'
                          href={project.url}
                          target='_blank'
                        >
                          <LuExternalLink className='~size-5/6' />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='bottom' sideOffset={10}>
                        Live-site
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <Link
                          className='grid place-items-center rounded-full border transition-all duration-300 ~size-9/11 hover:scale-105'
                          href={project.github}
                          target='_blank'
                        >
                          <FaGithub className='~size-5/6' />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='bottom' sideOffset={10}>
                        Github repo
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;
