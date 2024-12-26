import { Logo } from '../assets/svgs';

const Header = () => {
  return (
    <header className='padding-inline py-6 shadow-sm'>
      <div className='mx-auto flex max-w-7xl items-center'>
        {/* Logo */}
        <Logo className='w-full object-contain ~max-w-28/40' />
      </div>
    </header>
  );
};
export default Header;
