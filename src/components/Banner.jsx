import React from 'react';
import JumuiaCover from '../assets/JumuiaCover.jpg';

const Banner = () => {
  return (
    <>
      <div className='h-auto w-auto'>
        <img className='flex sticky w-full h-25' src={JumuiaCover} />
      </div>
    </>
  );
};

export default Banner;
