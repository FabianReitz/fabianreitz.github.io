import { FaArrowDown } from 'react-icons/fa';

import { Navbar } from '../../components/Navbar/Navbar';
import { Socials } from '../../components/Socials/Socials';

export const HeroSection = () => {
  return (
    <section
      id='hero'
      className='min-h-screen h-fit w-screen flex flex-col bg-red-500'
    >
      <Navbar />
      <div className='mx-auto my-auto flex flex-col lg:flex-row items-center'>
        <div className='lg:w-5/12 my-auto'>
          <h1 className='text-6xl font-bold text-center'>
            Hi, I'm <span className='text-[#e91e62]'>Fabian</span>!
          </h1>
          <p className='pt-10 text-2xl text-center leading-relaxed mx-7 mb-12'>
            I'm a{' '}
            <span className='text-[#e91e62] text-3xl'>
              Fullstack Web Developer
            </span>{' '}
            transforming visions into streamlined digital experiences. Let's
            create something exciting together!
          </p>
          <Socials />
        </div>
        <div className='w-auto mx-auto mt-16'>
          <div className='size-fit rounded-3xl border border-cyan-500 rotate-6'>
            <div className='size-fit rounded-3xl border border-cyan-500 rotate-6'>
              <div className='size-fit rounded-3xl border border-cyan-500 rotate-6'>
                <img
                  className='rotate-[-18deg] h-80 lg:h-[450px]'
                  src='./img/me.png'
                  alt='Fabian portrait'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FaArrowDown className='fill-slate-300 w-16 h-16 animate-bounce mx-auto mt-24' />
    </section>
  );
};
