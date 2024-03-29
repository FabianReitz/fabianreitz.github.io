import { WordRoller } from '../WordRoller/WordRoller';

export const AboutMe = () => {
  const experienceInYears = new Date().getFullYear() - 2019;

  return (
    <section id='about-me' className='h-screen w-full'>
      <div className='flex flex-col pt-20'>
        <h2 className='text-5xl mx-auto'>About me</h2>
        <hr className='w-24 mx-auto my-5 border-[#e91e62] border-2' />
        <h3 className='text-2xl mx-auto opacity-80'>Who am I?</h3>
        <p className='text-xl mx-auto w-1/2 mt-5'>
          I am <span className='text-[#e91e62]'>Fabian</span>, a passionate{' '}
          <span className='text-[#e91e62]'>Fullstack Developer</span> with{' '}
          {experienceInYears} years of experience in Web Development. I thrive
          on creating innovative solutions and am always eager to learn new
          technologies.
        </p>
        <p className='text-xl mx-auto w-1/2 mt-5'>
          My journey in the tech industry started in 2019 when I began my dual
          studies at{' '}
          <a
            href='https://stadtwerk.org'
            target='_blank'
            rel='noopener noreferrer'
            className='text-cyan-500 hover:underline'
          >
            stadt.werk GmbH
          </a>{' '}
          in <span className='text-[#e91e62]'>Business Informatics</span> which
          I concluded with a{' '}
          <a
            href='https://github.com/FabianReitz/BachelorThesis'
            target='_blank'
            rel='noopener noreferrer'
            className='text-cyan-500 hover:underline'
          >
            Bachelor of Science degree
          </a>{' '}
          in 2022. Since then, I have been working as a{' '}
          <span className='text-[#e91e62]'>Software Developer</span> at
          stadt.werk, contributing to the success of our product. When I am not
          in the tunnel of code, I bring in new impulses to the team or guide
          the players of our Dungeons & Dragons party as the{' '}
          <span className='text-[#e91e62]'>Dungeon Master</span>.
        </p>
        <p className='text-xl mx-auto w-1/2 mt-5'>
          After work I{' '}
          <WordRoller
            words={[
              'play video games',
              'play Dungeons & Dragons',
              'code the next billion dollar app',
              'finetune my 3D printer',
              'discover virtual realities',
              'scuba dive',
              'contemplate my next PC upgrade',
              'stay up-to-date with tech news',
              'watch movies',
              'spend time with my friends',
              'cook delicious meals',
            ]}
          />
          .
        </p>
      </div>
    </section>
  );
};
