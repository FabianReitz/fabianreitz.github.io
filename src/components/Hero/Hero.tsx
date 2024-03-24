export const Hero = () => {
  return (
    <section className='flex '>
      <div className='m-auto'>
        <div className='w-7/12'>
          <h1 className='text-6xl font-bold text-center text-white'>
            Hi, I'm <span className='text-[#e91e62]'>Fabian</span>
          </h1>
          <p className='pt-10 text-2xl text-center text-white leading-relaxed'>
            I'm a{' '}
            <span className='text-[#e91e62] text-3xl'>
              Fullstack Web Developer
            </span>{' '}
            transforming visions into streamlined digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
