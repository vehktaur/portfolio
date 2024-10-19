import Footer from './components/footer';
import Header from './components/header';
import Intro from './components/intro';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}
