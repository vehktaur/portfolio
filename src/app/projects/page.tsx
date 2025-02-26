'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { projects } from '@/lib/data';
import Link from 'next/link';
import { useState } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Swiper as SwiperProps } from 'swiper/types';
import { AnimatePresence, motion } from 'motion/react';
import ProjectNav from '@/components/project-nav';

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [direction, setDirection] = useState('ltr');

  const handleSlideChange = (swiper: SwiperProps) => {
    const { activeIndex, previousIndex } = swiper;

    if (activeIndex < previousIndex) {
      setDirection('rtl');
    } else {
      setDirection('ltr');
    }

    setProject(projects[activeIndex]);
  };

  return (
    <main className='full-page z-[4]'>
      <section className='padding-inline overflow-x-hidden'>
        <div className='container flex flex-col items-center justify-around gap-4 sm:flex-row-reverse'>
          {/* Swiper with slides showing project image */}
          <div className='w-full max-w-[30rem]'>
            <Swiper
              autoHeight
              onSlideChange={handleSlideChange}
              modules={[Pagination, Navigation]}
              spaceBetween={70}
              slidesPerView={1}
            >
              {projects.map((project) => (
                <SwiperSlide className='' key={project.num}>
                  <div className='overflow-hidden rounded-lg border'>
                    <Image
                      className='size-full object-cover'
                      src={project.image}
                      alt={project.title}
                      width={1980}
                      height={1080}
                      placeholder='blur'
                    />
                  </div>
                </SwiperSlide>
              ))}

              <ProjectNav />
            </Swiper>
          </div>

          {/* Project Details */}
          <div className='overflow-clip [overflow-clip-margin:5rem;]'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={project.num}
                initial={{ opacity: 0, x: direction === 'ltr' ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'ltr' ? -200 : 200 }}
                transition={{ ease: 'easeInOut' }}
              >
                {/* project number */}
                <h2 className='mb-4 font-extrabold ~text-xl/4xl'>
                  {project.num}
                </h2>

                {/* project title */}
                <h1 className='font-semibold text-accent ~text-3xl/6xl ~mb-2/4'>
                  {project.title}
                </h1>
                {/* project description */}
                <p className='max-w-[60ch] ~mb-4/7'>{project.description}</p>

                {/* technologies used */}
                <ul className='flex max-w-[60ch] flex-wrap items-center gap-3 text-sm'>
                  {project.technologies.map((tech, index) => (
                    <li
                      className='rounded-md border border-primary bg-primary capitalize text-primary-foreground transition-colors duration-300 ~p-1/1.5 hover:bg-primary-foreground hover:text-primary'
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <hr className='mb-8 mt-6 h-[1.5px] w-1/2 rounded-full border-none bg-primary' />

                {/* live url and github link */}
                <div className='flex items-center gap-4'>
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <Link
                          className='grid place-items-center rounded-full border transition-all duration-300 ~size-9/11 hover:scale-105'
                          href={project.live}
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
