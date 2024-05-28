import React from 'react';
import JuneMass from '../assets/JuneMass.jpg';
import Chakula from '../assets/Chakula.jpg';
import Procession2 from '../assets/Procession2.jpg';
import DiningHall from '../assets/DiningHall.jpg';
import Pews from '../assets/Pews.jpg';
import Offring from '../assets/Offring.jpg';
const SwahiliMasses = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h1 className='text-xl tracking-tight font-extrabold text-black-600 sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Swahili Masses</span>
      </h1>{' '}
      <div className='bg-white-600 mt-12 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 px-2 py-2'>
        <div>
          <h1 className='text-black text-xl tracking-tight font-extrabold text-white-600 text-right sm:txt-3xl md:text-4xl'>
            Upcoming Swahili Mass
          </h1>
          <img className='' src={JuneMass} />
        </div>
        <div className='text-black'>
          <span>
            <br></br>
            <br></br>
            <p>Please join us for our next Swahili Mass on June 28, 2024 </p>
            <p>
              Swahili Massess are held on 4th Sundays of even months, except for
              Dec.
            </p>
            <h2>Time: @2:00 PM</h2>
            <p>Location: Marymount University, Sacred Heart of Mary Chapel  </p>
            <p>2807 North Glebe Road Arlington, Virginia 2220</p>
          </span>
          <div>
            <img
              className='h-96 w-full object-cover sm:h-full md:90 lg:w-full lg:96 px-2'
              src={Pews}
              alt='img'
            />
          </div>
        </div>

        <div>
          <img
            className='h-96 w-full object-cover sm:h-full md:90 lg:w-full lg:96 px-2'
            src={Procession2}
            alt='img'
          />
        </div>

        <div>
          <img
            className='h-96 w-full object-cover sm:h-full md:90 lg:w-full lg:96 px-2'
            src={Offring}
            alt='img'
          />
        </div>

        <div>
          <img
            className='h-96 w-full object-cover sm:h-full md:90 lg:w-full lg:96 px-2'
            src={DiningHall}
            alt='img'
          />
        </div>
        <div>
          <img
            className='h-96 w-full object-cover sm:h-full md:90 lg:w-full lg:96 px-2'
            src={Chakula}
            alt='img'
          />
        </div>
      </div>
    </>
  );
};

export default SwahiliMasses;
