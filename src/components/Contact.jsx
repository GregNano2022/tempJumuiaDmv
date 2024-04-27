import React from 'react';
import ContactUs from '../assets/ContactUs.jpg';
import KenyaFlag from '../assets/KenyaFlag.png';
import Button from '../Layout/Button';
const Contact = () => {
  return (
    <div className=''>
      <h2 className=''>Contact Us</h2>
      <img className='h-8 max-w-20' src={KenyaFlag} alt='img' />

      <p>Contact us at jumuiaadc@gmail.com </p>
    </div>
  );
};

export default Contact;
