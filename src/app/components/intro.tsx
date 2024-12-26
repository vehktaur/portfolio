import profile_pic from '@/app/assets/profile.jpg';
import { LuBriefcaseBusiness, LuDownload } from 'react-icons/lu';
import Image from 'next/image';

const Intro = () => {
  return (
    <section className='padding-inline ~py-12/28'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-r-lg border-neutral-500 sm:flex-row-reverse md:border-r-8 md:pr-8'>
        <div className='mx-auto'>
          <Image
            className='size-40 rounded-full border border-black object-cover sm:~size-48/80'
            src={profile_pic}
            placeholder='blur'
            alt='Victor Akhihiero'
          />
        </div>
        <div className='text-center sm:text-left'>
          <h2 className='text-medium mb-2 ~text-lg/xl'>Hello,</h2>
          <h1 className='mb-2 font-bold ~text-3xl/6xl'>I&apos;m Victor</h1>
          <h3 className='mb-8 font-bold ~text-3xl/6xl'>Website Developer</h3>
          <p className='mx-auto mb-12 max-w-[50ch] text-neutral-800 sm:mx-0'>
            I am a skilled and passionate web developer with experience in
            creating visually appealing and user-friendly websites.
          </p>
          <div className='flex items-center justify-center ~gap-5/8 sm:justify-start'>
            <a
              href='https://cal.com/victor-akhihiero/meet-30min'
              target='_blank'
              className='flex w-fit items-center justify-center gap-2 rounded-full border py-2 transition duration-500 ~px-3/6 hover:border-black'
            >
              Hire me
              <LuBriefcaseBusiness className='mt-1 size-4' />
            </a>
            <a
              download='VICTOR AKHIHIERO.pdf'
              href='/victor_akhihiero.pdf'
              target='_blank'
              className='flex w-fit items-center justify-center gap-2 rounded-full border py-2 transition duration-500 ~px-3/6 hover:border-black'
            >
              Download CV
              <LuDownload className='size-4' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
