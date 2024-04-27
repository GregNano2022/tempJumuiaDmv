import React from 'react';
import SocialEventsCard from './SocialEvents';
import JumuiaCover from '../assets/JumuiaCover.jpg';
import Procession from '../assets/Procession.mp4';
const SocialEventsGallery = () => {
  return (
    <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
      <h2 className='text-3xl text-center font-semibold leading-tight'>
        Social Events
      </h2>
      <div className='flex flex-wrap justify-center gap-6 mt-6'>
        <SocialEventsCard img={JumuiaCover} title='Rosary' />
        <SocialEventsCard img={JumuiaCover} title='Rosary' />
        <SocialEventsCard img={JumuiaCover} title='Rosary' />
        <SocialEventsCard img={JumuiaCover} title='Rosary' />
      </div>
    </div>
  );
};

export default SocialEventsGallery;
