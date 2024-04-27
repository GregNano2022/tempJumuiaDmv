import React from 'react';
import KenyaFlag from '../assets/KenyaFlag.png';
const Footer = () => {
  return (
    <footer className='bg-grey-900 text-white py-10'>
      <div className='bg-red-900 mx-auto w-full max-w-screen-xl p-4 py-5 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-5'></div>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-white-900 dark:text-white'>
              Location
            </h2>
          </div>

          <div>
            <h2 className='mb-6 text-sm font-semibold text-white-900 dark:text-white'>
              Follow Us
            </h2>
          </div>

          <div>
            <h2 className='mb-6 text-sm font-semibold text-white-900 dark:text-white'>
              Connect With Us
            </h2>
            <h2 className=''>Contact Us</h2>
            <img className='h-8 max-w-20' src={KenyaFlag} alt='img' />

            <p>Contact us at jumuiaadc@gmail.com </p>
          </div>

          <div>
            <div className='mt-4 sm:justify-center sm:mt-0'>
              <p className='flex-row'>
                Marymount University Sacred Heart of Mary Chapel 2807 N Glebe
                Rd, Arlington Virginia, 22207
              </p>
              <div>
                <span className='text-sm text-white sm:text-center'>
                  @copyright TerpNanoMedia 2024.All rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
