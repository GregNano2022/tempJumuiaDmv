import React from 'react';
import Rosary from '../assets/Rosary.jpg';
import RosaryPic from '../assets/RosaryPic.jpg';
import JuneMass from '../assets/JuneMass.jpg';
const WorshipEvents = () => {
  return (
    <>
      <br></br>
      <h1 className='text-xl tracking-tight font-extrabold text-gray-800 sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Worship Events</span>
      </h1>
      <br></br>
      <div className='grid grid-cols-3 '>
        <div className='px-2 mx-2 py-3 my-2 max-w-sm bg-orange-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
          <h2 className='text-white text-xl font-bold '>Swahili Mass</h2>
          <img className='rounded-t-lg object-fit-cover ' src={JuneMass} />
          <p className='mb-3 font-normal text-white  dark:text-gray-400'>
            Please join us for our next Swahili Mass on April 28, 2024<br></br>{' '}
            Swahili Massess are held on 4th Sundays of even months, except for
            Dec.
            <h3>Time: @2:00 PM</h3>
            <h3>Location:</h3>EST Marymount University Sacred Heart of Mary
            Chapel  2807 North Glebe Road Arlington, Virginia 2220{' '}
          </p>
        </div>

        <div className='px-2 mx-2 py-3 my-2 text-white-500 max-w-sm border border-gray-200 rounded:lg  bg-blue-600 '>
          <h2 className='text-white text-xl font-bold '>Weekly Rosary</h2>
          <img className='rounded-t-lg object-fit-cover' src={RosaryPic} />
          <p className='mb-3 font-normal text-white dark:text-gray-400'>
            We invite you to Jumuiaa of St Francis DMV Rosary recital.
            <br></br>
            When: Wednesdays @ 08:30 PM EST. <br></br>
            We welcome you to join other jumuiaa members for rosary resital
            tonight. <br></br>
            Whether on the road, at home, in between errands etc Karibu sana.
            <br></br>
            “When in the Rosary we plead with Mary, the sanctuary of the Holy
            Spirit, she intercedes for us before the Father who filled her with
            grace and before the Son born of her womb, praying with us and for
            us.”<br></br>* -St. Pope John Paul II <br></br>Join Zoom Meeting
            <br></br>
          </p>
        </div>
        <div className='px-2 mx-2 py-3 my-2 text-white max-w-sm border border-gray-200 rounded:lg  bg-purple-600 '>
          <h2 className='text-white text-xl font-bold'>Bible Study</h2>
          <img className='roundend-t-lg ' src={Rosary} />
          We invite you to Jumuiaa of St Francis DMV Rosary recital.
          <br></br>
          When: Wednesdays @ 08:30 PM EST. <br></br>
          We welcome you to join other jumuiaa members for rosary resital
          tonight. <br></br>
          Whether on the road, at home, in between errands etc Karibu sana.
          <br></br>
          “When in the Rosary we plead with Mary, the sanctuary of the Holy
          Spirit, she intercedes for us before the Father who filled her with
          grace and before the Son born of her womb, praying with us and for
          us.”<br></br>* -St. Pope John Paul II <br></br>Join Zoom Meeting
          <br></br>
        </div>
      </div>
    </>
  );
};

export default WorshipEvents;
