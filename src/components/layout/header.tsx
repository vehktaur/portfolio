import { Logo } from '@/assets/svgs';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='padding-inline fixed top-0 z-30 ~py-6/9'>
      {/* Logo */}
      <Link href='/'>
        <Logo className='w-full object-contain ~max-w-28/40' />
      </Link>
    </header>
  );
};
export default Header;
