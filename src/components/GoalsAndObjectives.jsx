import React from 'react';
import StandingSaint from '../assets/StandingSaint.png';
const GoalsAndObjectives = () => {
  return (
    <>
      <h1 className='text-xl tracking-tight font-extrabold text-gray-800 sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Mission And Vision</span>
      </h1>{' '}
      <div className='bg-red-900 mt-16 text-white'>
        <div className='container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center'>
          <div className='md:w-1/2 lg:w-1/3 md:mr-8'>
            <h1 className='text-3xl font-bold mb-4'>Mission</h1>
            <p className='text-lg mb-4'>
              Mission: Embolden jumuiaa members to celebrate the sacrament of
              holy eucharist together during Swahili mass, to continually learn
              about the scripture, catholic church tradition and doctrine, to
              share about God and their life’s experiences, to live a prayerful
              life, to live out the values of Christ, offer mutual support to
              one another and nurture a Kenyan culture.
            </p>
            <h1 className='text-3xl font-bold mb-4'>Vision</h1>
            <p className='text-lg mb-4'>
              Vision: To foster an enriched devoutness and spirituality of the
              Kenya Catholic faithful in DMV, that upholds catholic faith, is
              inspired by the gospel of Jesus Christ, adorned with Kenyan
              culture, and vitalized by support to one another.
            </p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              learn more
            </button>
          </div>
          <div className='md:w-1/2 lg:w-2/3 mt-8 md:mt-0'>
            <img
              src={StandingSaint}
              alt='..'
              className='w-full h-full object-cover'
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalsAndObjectives;
