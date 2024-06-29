import { Logo } from '../Logo/Logo';

export const Navbar = () => {
  return (
    <nav
      className='flex justify-between items-center py-8 lg:px-20 px-8'
      id='desktop-nav'
    >
      <Logo />
      <ul className='lg:flex opacity-80 gap-8 text-2xl text-white hidden'>
        <li>
          <a href='#about-me' className='hover:text-[#e91e62]'>
            About me
          </a>
        </li>
        <li>
          <a href='#skills' className='hover:text-[#e91e62]'>
            Skills
          </a>
        </li>
        <li>
          <a href='#projects' className='hover:text-[#e91e62]'>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' className='hover:text-[#e91e62]'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
