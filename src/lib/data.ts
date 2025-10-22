import images from '@/assets/images';
import { Project } from '@/types';

export const projects: Project[] = [
  {
    num: '一', // 1
    title: 'Stressless Movers',
    description:
      'Built a feature-rich website for a moving company to streamline service inquiries, custom quote generation, and improve customer engagement through an interactive and visually appealing design.',
    url: 'https://www.stresslessmover.com/',
    category: 'Professional Project',
    technologies: ['ReactJS', 'JavaScript', 'TailwindCSS', 'REST APIs'],
    image: images.stressless,
    github: 'https://github.com/vehktaur/stressless-movers',
  },
  {
    num: '二', // 2
    title: 'Orenda',
    description:
      'Developed an online platform for psychiatric practitioners and caregivers using React and Tailwind CSS, increasing accessibility and usability.',
    url: 'https://orendapsych.com/',
    category: 'Professional Project',
    technologies: ['ReactJS', 'TailwindCSS', 'GSAP', 'RHF', 'REST APIs'],
    image: images.orenda,
    github: 'https://github.com/vehktaur/orenda',
  },
  {
    num: '三', // 3
    title: 'MES',
    description:
      'Developed a responsive website for a cleaning service, providing an intuitive interface for service bookings and showcasing the company’s offerings.',
    url: 'https://www.mdeservicestnfinest.com/',
    category: 'Professional Project',
    technologies: ['ReactJS', 'TailwindCSS', 'REST APIs'],
    image: images.mes,
    github: 'https://github.com/vehktaur/mes-cleaning',
  },
  {
    num: '四', // 4
    title: 'Zummey',
    description:
      'Developed a responsive logistics website using ReactJS and Tailwind CSS to improve user experience and streamline online service requests.',
    url: 'https://zummey.com/',
    category: 'Professional Project',
    technologies: ['ReactJS', 'Vite', 'TailwindCSS'],
    image: images.zummey,
    github: 'https://github.com/vehktaur/zummey',
  },
  {
    num: '五', // 5
    title: 'Darklogs',
    description:
      'Built a full-stack blog application using NextJS, TypeScript, and TailwindCSS, featuring dynamic content loading and server-side rendering for improved performance.',
    url: 'http://darklogs.vercel.app/',
    category: 'Personal Project',
    technologies: [
      'NextJS',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'RHF',
      'MongoDB',
    ],
    image: images.darklogs,
    github: 'https://github.com/vehktaur/darklogs',
  },
  {
    num: '六', // 6
    title: 'Tasky',
    description:
      'Developed a task management app using ReactJS and TypeScript, allowing users to organize tasks efficiently with real-time task updates.',
    url: 'https://tasky-vehktaur.vercel.app/',
    category: 'Personal Project',
    technologies: ['NextJS', 'TypeScript', 'TailwindCSS', 'RHF'],
    image: images.tasky,
    github: 'https://github.com/vehktaur/v_tasks',
  },
  {
    num: '七', // 7
    title: 'Hotel Rank',
    description:
      'A React application to manage and rate personal favorite hotels. The app allows users to rank hotels and group them by brand, providing an optimized experience for hotel organization and comparison.',
    url: 'https://hotel-ranking.vercel.app/',
    category: 'Personal Project',
    technologies: [
      'ReactJS',
      'TypeScript',
      'TailwindCSS',
      'React Router',
      'React Google Maps',
      'RHF',
    ],
    image: images.hotel_rank,
    github: 'https://github.com/vehktaur/hotel-rank',
  },
  {
    num: '八', // 8
    title: 'Squiz',
    description:
      'Designed and developed a quiz app to test users on various topics. Implemented features like timed quizzes and score tracking.',
    url: 'https://squiz-vehktaur.netlify.app/',
    category: 'Personal Project',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: images.squiz,
    github: 'https://github.com/vehktaur/squiz',
  },
  {
    num: '九', // 9
    title: 'HooBank',
    description:
      'A sleek and responsive landing page for a fictional digital banking platform. Having a modern UI with a futuristic theme, smooth gradients, and clean typography.',
    url: 'https://hoobank-vehktaur.vercel.app/',
    category: 'Personal Project',
    technologies: ['NextJS', 'TypeScript', 'TailwindCSS', 'GSAP'],
    image: images.hoobank,
    github: 'https://github.com/vehktaur/hoobank',
  },
];
