import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { HiOutlineHome, HiOutlineBriefcase } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';

interface NavLink {
  name: string;
  href: string;
  Icon: IconType;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/', Icon: HiOutlineHome },
  // { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects', Icon: HiOutlineBriefcase },
  // { name: 'Contact', href: '/contact' },
];

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return useMemo(() => {
    const currentIndex = navLinks.findIndex((link) => link.href === pathname);

    const currentRoute =
      currentIndex !== -1 ? navLinks[currentIndex] : navLinks[0];
    const nextRoute =
      currentIndex !== -1 && currentIndex < navLinks.length - 1
        ? navLinks[currentIndex + 1]
        : null;
    const prevRoute = currentIndex > 0 ? navLinks[currentIndex - 1] : null;
    const lastRoute = navLinks[navLinks.length - 1];
    const firstRoute = navLinks[0];

    return {
      currentRoute,
      nextRoute,
      prevRoute,
      lastRoute,
      firstRoute,
      navLinks,
    };
  }, [pathname]);
};
