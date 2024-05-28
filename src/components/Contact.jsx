import React from 'react';
import ContactUs from '../assets/ContactUs.jpg';
import KenyaFlag from '../assets/KenyaFlag.png';
import USFlag from '../assets/USFlag.svg';
import Button from '../Layout/Button';
const Contact = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className='text-xl tracking-tight font-extrabold text-black sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Contact Us</span>
      </h1>{' '}
      <br></br>
      <div className=' py-10 ml-2 mr-2 mx-2 bg-white-600'>
        <div className='flex gap-18 justify-between '>
          <img className='mx-3 h-8 inline' src={KenyaFlag} alt='logo' />
          <div>
            <p className='text-black text-xl text-center'>
              You can contact us via email: jumuiaadc@gmail.com
            </p>
          </div>

          <img className='mx-3 h-8 inline' src={USFlag} alt='logo' />
        </div>
      </div>
    </>
  );
};

export default Contact;
