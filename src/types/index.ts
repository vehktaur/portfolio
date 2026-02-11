import { StaticImageData } from 'next/image';

type Technologies =
  | 'NextJS'
  | 'ReactJS'
  | 'TailwindCSS'
  | 'REST APIs'
  | 'Vite'
  | 'JavaScript'
  | 'TypeScript'
  | 'RHF'
  | 'HTML5'
  | 'CSS3'
  | 'React Router'
  | 'React Google Maps'
  | 'Framer Motion'
  | 'GSAP'
  | 'Zod'
  | 'MongoDB'
  | 'AuthJS'
  | 'Tanstack Router'
  | 'Ant Design'
  | 'ReChartJS';

export interface Project {
  num: string;
  title: string;
  description: string;
  url: string;
  category: string;
  technologies: Technologies[];
  image: StaticImageData;
  github?: string;
}
