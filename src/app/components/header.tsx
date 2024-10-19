import Image from 'next/image';

const Header = () => {
  return (
    <header className='padding-inline py-5 shadow-sm'>
      <div className='mx-auto flex max-w-7xl items-center'>
        {/* Logo */}
        <div className='w-auto'>
          <Image
            className='w-full ~max-w-[6rem]/[8rem] object-contain'
            src='/logo.png'
            alt='logo'
            width={960}
            height={480}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
