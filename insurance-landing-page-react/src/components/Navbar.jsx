import logoSVG from '../images/logo.svg';
import BgPattern from '../images/bg-pattern-mobile-nav.svg';
import hamburger from '../images/icon-hamburger.svg';
import iconClose from '../images/icon-close.svg';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState('hidden');

  function handleClick() {
    setIsMenuOpen(isMenuOpen === '' ? 'hidden' : '')
  }

  const liStyle = 'text-white text-2xl sm:text-stone-400 text-nowrap';

  return (
    <nav className='sm:flex justify-between sm:mx-16'>
      <div className='flex justify-between px-5 py-8'>
        <img src={logoSVG} alt='Logo' className='w-32'/>
        <button className='sm:hidden'>
            <img src={isMenuOpen === 'hidden' ? hamburger : iconClose} onClick={handleClick} alt='Burger menu'/>
        </button>
      </div>

      <div className={`relative ${isMenuOpen} sm:block`}>
        <img src={BgPattern} className='absolute w-full inset-x-0 bottom-0 sm:hidden' />
        <ul className='flex gap-8 flex-col items-center sm:flex-row bg-slate-800 h-screen pt-14 px-6 sm:h-5  sm:bg-white'>
          <li className={liStyle}>
            <a href='#'>How We Work</a>
          </li>
          <li className={liStyle}>
            <a href='#'>Blog</a>
          </li>
          <li className={liStyle}>
            <a href='#'>Account</a>
          </li>
          <li className={`${liStyle} border w-full text-center py-3 sm:p-1`}>
            <a href='#'>View Plans</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
