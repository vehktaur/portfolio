import { LuBriefcaseBusiness, LuDownload } from 'react-icons/lu';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import images from '@/assets/images';
import TypewriterText from '@/components/animated-intro-text';

export default function Home() {
  return (
    <main className='full-page'>
      <section className='padding-inline'>
        <div className='container flex flex-col items-center justify-between gap-8 rounded-r-lg border-neutral-500 sm:flex-row-reverse md:border-r-8 md:pr-8'>
          <div className='mx-auto'>
            <Image
              className='size-40 rounded-full border border-black object-cover sm:~size-48/80'
              src={images.profile}
              placeholder='blur'
              alt='Victor Akhihiero'
            />
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='text-medium mb-2 ~text-lg/xl'>Hello,</h2>
            <h1 className='mb-2 font-bold ~text-3xl/6xl'>I&apos;m Victor</h1>

            <h3 className='mx-auto sm:mx-0 mb-8 max-w-[18ch] font-bold ~text-3xl/6xl'>
              <TypewriterText />
            </h3>
            <p className='mx-auto mb-12 max-w-[50ch] text-neutral-800 ~text-base/lg sm:mx-0'>
              I am a skilled and passionate web developer with experience in
              creating visually appealing and user-friendly websites.
            </p>
            <div className='flex items-center justify-center ~gap-5/8 sm:justify-start'>
              <Button asChild>
                <a
                  href='https://cal.com/victor-akhihiero/meet-30min'
                  target='_blank'
                >
                  Hire me
                  <LuBriefcaseBusiness className='mt-1' />
                </a>
              </Button>

              <Button asChild>
                <a
                  download='VICTOR AKHIHIERO.pdf'
                  href='/victor_akhihiero.pdf'
                  target='_blank'
                >
                  Download CV
                  <LuDownload />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
