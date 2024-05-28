import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import KenyaFlag from '../assets/KenyaFlag.png';
import USFlag from '../assets/USFlag.svg';
import StFrancis from '../assets/StFrancis.png';
import { useState } from 'react';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState('false');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className=' bg-teal-500 '>
        <div className='flex-shrink-0 text-center justify-center ml-6 cursor-pointer'>
          <h2 className='text-xl '>
            ESTABLISHED ON JUNE 24TH 2014. BLESSED ON APRIL 22ND 2018.
          </h2>
        </div>
      </div>
      <div className='flex text-align-center justify-between items-center sticky top-0 z-10 py-4 bg-red-900'>
        <div className='flex-shrink-0 text-center justify-center ml-6 cursor-pointer'>
          <img className='h-8 inline' src={KenyaFlag} alt='logo' />
        </div>

        <div className='flex flex-wrap sticky top-0 justify-center text-white text-3xl p-1 border-b2'>
          WELCOME TO JUMUIA OF ST.FRANCIS DMV
        </div>

        <div className='flex-shrink-0 text-center justify-center ml-6 cursor-pointer'>
          <img className='mx-3 h-8 inline' src={USFlag} alt='logo' />
        </div>
      </div>
      <div className='flex items-center w-full gap-5 justify-between bg-gray-600 py-9 '>
        <div>
          <button
            onClick={toggleMenu}
            className=' text-white hover:text-green-900 '
          >
            {showMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
        {showMenu && (
          <>
            <NavLink to='/'></NavLink>
            <ul className='flex flex-rap gap-5 mx-3'>
              <div>
                <li className='text-white '>
                  <NavLink to='/Home'>Home</NavLink>
                </li>
              </div>
              <div>
                <li className='text-white'>
                  <NavLink to='/WhoWeAre'>Mission</NavLink>
                </li>
              </div>
              <div>
                <li className='text-white'>
                  <NavLink to='/GoalsAndObjectives'>Objectives</NavLink>
                </li>
              </div>
              <div>
                <li className='text-white'>
                  <NavLink to='/WorshipEvents'>Worship Events </NavLink>
                </li>
              </div>
              <div>
                <li className='text-white'>
                  <NavLink to='/SwahiliMasses'>Swahili Masses</NavLink>
                </li>
              </div>
              <div>
                <li className='text-white'>
                  <NavLink to='/GetInvolved'>Get Involved</NavLink>
                </li>
              </div>
              <div>
                <li className='text-white'>
                  <NavLink to='/Donations'>Donations/Toa Sadaka</NavLink>
                </li>
              </div>

              <div>
                <li className='text-white'>
                  <NavLink to='/SocialEvents'>Social Events</NavLink>
                </li>
              </div>

              <div>
                <li className='text-white'>
                  <NavLink to='/Contact'>Contact</NavLink>
                </li>
              </div>

              <div>
                <li className='text-white'>
                  <NavLink to='/Footer'>Footer</NavLink>
                </li>
              </div>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
