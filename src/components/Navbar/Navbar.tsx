import { Logo } from '../Logo/Logo';

export const Navbar = () => {
  return (
    <div>
      <nav
        className='flex justify-between items-center py-8 px-20 h-1/6'
        id='desktop-nav'
      >
        <Logo />
        <ul className='flex opacity-80 gap-8 text-2xl text-white'>
          <li>
            <a href='#about-me' className='hover:text-[#ad1457]'>
              About me
            </a>
          </li>
          <li>
            <a href='#skills' className='hover:text-[#ad1457]'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:text-[#ad1457]'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-[#ad1457]'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav id='hamburger-nav' style={{ display: 'none' }}>
        <Logo />
        <div className='hamburger-menu'>
          <div className='hamburger-icon'></div>

          <div className='menu-links'>
            <ul>
              <li>
                <a href='#about-me'></a>
              </li>
              <li>
                <a href='#skills'></a>
              </li>
              <li>
                <a href='#projects'></a>
              </li>
              <li>
                <a href='#contact'></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
