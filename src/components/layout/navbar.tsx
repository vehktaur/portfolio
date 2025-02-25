import { Logo } from '@/assets/svgs';
import Link from 'next/link';
import NavLink from '@/components/ui/nav-link';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className='padding-inline py-6 shadow-sm'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <Logo className='w-full object-contain ~max-w-28/40' />
        </Link>

        {/* Navigation */}
        <ul className='flex items-center ~gap-4/6'>
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <NavLink
                className='relative block after:absolute after:right-1/2 after:top-full after:h-[2px] after:w-0 after:translate-x-1/2 after:rounded-full after:bg-zinc-800 after:transition-all after:duration-300'
                activeClassName='after:w-3/4'
                href={href}
                exact
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <Button>Hire Me</Button> */}
      </nav>
    </header>
  );
};
export default Navbar;
