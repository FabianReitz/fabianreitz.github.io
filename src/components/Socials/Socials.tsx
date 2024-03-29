import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaXingSquare,
} from 'react-icons/fa';

const iconStyles = 'fill-slate-300 h-16 w-16 hover:fill-[#e91e62]';

export const Socials = () => {
  return (
    <div className='w-auto px-5 my-5 flex justify-evenly'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/FabianReitz'
        className='size-fit'
      >
        <FaGithubSquare className={iconStyles} />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/fabianreitzdev'
        className='size-fit'
      >
        <FaLinkedin className={iconStyles} />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.xing.com/profile/Fabian_Reitz'
        className='size-fit'
      >
        <FaXingSquare className={iconStyles} />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/fabianreitzdev/'
        className='size-fit'
      >
        <FaInstagramSquare className={iconStyles} />
      </a>
    </div>
  );
};
