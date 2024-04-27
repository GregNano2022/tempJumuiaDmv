import React from 'react';
import SwahiliMassFlyer from '../assets/SwahiliMassFlyer.jpg';
const SwahiliMasses = () => {
  return (
    <div className=' grid1-item bg-white-400'>
      <span className='text-gray-900 '>
        <h1 className='text-xl tracking-tight font-extrabold text-gray-800 sm:txt-3xl md:text-4xl'>
          <span className='block text-center xl:inline'>Worship Events</span>
        </h1>{' '}
        <img className=' ' src={SwahiliMassFlyer} />
        <p>Please join us for our next Swahili Mass on April 28, 2024</p>
        <p>
          Swahili Massess are held on 4th Sundays of even months, except for
          Dec.
        </p>
        <p>
          <h3>Time: @2:00 PM</h3>
          <h3>Location:</h3>EST Marymount University
        </p>
        <p>
          Sacred Heart of Mary Chapel  2807 North Glebe Road Arlington, Virginia
          2220{' '}
        </p>
      </span>
    </div>
  );
};

export default SwahiliMasses;
