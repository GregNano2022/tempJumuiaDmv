import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import KenyaFlag from '../assets/KenyaFlag.png';
import USFlag from '../assets/USFlag.svg';
const Footer = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h1 className='text-xl tracking-tight font-extrabold text-black sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Connect With Us</span>
      </h1>{' '}
      <footer className='bg-red-900 text-white py-10 mx-2'>
        <div className='bg-white-600 mx-auto w-full max-w-screen-xl p-4 py-5 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-5'>
              <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
                <div className='mb-6 text-xl font-semibold text-white-900 dark:text-white'>
                  <div>
                    <h2 className='mb-6 text-xl font-semibold text-white-900 dark:text-white'>
                      Connect With Us
                    </h2>
                  </div>
                  <p>Marymount University Sacred Heart of Mary Chapel</p>
                  <p>2807 N Glebe Rd, Arlington Virginia, 22207</p>
                  <div className=''>
                    <img className='h-8 max-w-20' src={USFlag} alt='img' />
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
              <div className='mb-6 text-xl font-semibold text-white-900 dark:text-white'>
                Follow Us
                <div className='flex'>
                  <AiOutlineFacebook className='bg-blue-600 h-8 w-8 flex space-x-2 '></AiOutlineFacebook>
                  <AiFillInstagram className='bg-red-800 h-8 w-8 mx-2 display:inline-block'></AiFillInstagram>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
                <div className=''>
                  <h2 className='mb-6 text-xl font-semibold text-white-900 dark:text-white'>
                    Connect With Us
                    <br></br>
                    <p className='text-xl '>
                      Contact us at jumuiaadc@gmail.com{' '}
                    </p>
                  </h2>

                  <br></br>
                  <br></br>
                  <br></br>

                  <img className='h-8 max-w-20' src={KenyaFlag} alt='img' />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1'>
                <div>
                  <span className='text-center'>
                    @copyright TerpNano Software Solutions 2024 All rights
                    reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
